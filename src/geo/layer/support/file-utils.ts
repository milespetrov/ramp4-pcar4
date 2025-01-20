import { APIScope } from '@/api/internal';
import defaultRenderers from './defaultRenderers.json';
import ArcGIS from 'terraformer-arcgis-parser';
import { csv2geojson, dsv } from 'csv2geojson';
import axios from 'redaxios';
import type { CrsMeta } from 'flatgeobuf';

import { EsriAPI } from '@/geo/esri';
import { Colour, FieldType, LayerType, SpatialReference } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';

import type { CsvOptions, FieldDefinition, GeoJsonField, GeoJsonOptions } from '@/geo/api';

/**
 * Maps GeoJSON geometry types to a set of default renders defined in GlobalStorage.DefaultRenders
 * @property featureTypeToRenderer {Object}
 * @private
 */
const featureTypeToRenderer = {
    Point: 'circlePoint',
    MultiPoint: 'circlePoint',
    LineString: 'solidLine',
    MultiLineString: 'solidLine',
    Polygon: 'outlinedPoly',
    MultiPolygon: 'outlinedPoly'
};

// ---------------------
// NOTE: Avoiding array methods like .forEach() in this file due to large datasets that tend to show up.
// ---------------------

/**
 * Performs in place assignment of integer ids for a GeoJSON FeatureCollection.
 * If at least one feature has an existing id outside the geoJson properties section,
 * the original id value is copied in a newly created property ID_FILE of the properties object
 * and the existing id value is replaced by an autogenerated number.
 * Features without existing id from that same dataset will get a new properties ID_FILE
 * with an empty string as value.
 **************************************
 * If at least one feature has an existing OBJECTID inside the geoJson properties section,
 * the original OBJECTID value is copied in a newly created property OBJECTID_FILE of the properties object
 * and the existing OBJECTID value is replaced by an autogenerated number.
 * Features without existing OBJECTID from that same dataset will get a new properties OBJECTID_FILE
 * with an empty string as value.
 */
function assignIds(geoJson: any): void {
    if (geoJson.type !== 'FeatureCollection') {
        throw new Error('GeoJSON is not in FeatureCollection format');
    }

    let emptyID = true;
    let emptyObjID = true;

    // create an 'id' property for every feature, doing autonumber.
    // 0 is not a valid object id

    for (let i = 0; i < geoJson.features.length; i++) {
        const val = geoJson.features[i];
        Object.assign(val.properties, { ID_FILE: '', OBJECTID_FILE: '' });

        // to avoid double ID columns outside properties
        if ('id' in val && typeof val.id !== 'undefined') {
            val.properties.ID_FILE = val.id;
            emptyID = false;
        }

        // to avoid double OBJECTID columns. Useful for both geojson and CSV file.
        if ('OBJECTID' in val.properties) {
            val.properties.OBJECTID_FILE = val.properties.OBJECTID;
            delete val.properties.OBJECTID;
            emptyObjID = false;
        }

        val.id = i + 1;
    }

    // remove ID_FILE if all empty
    if (emptyID) {
        for (let i = 0; i < geoJson.features.length; i++) {
            delete geoJson.features[i].properties.ID_FILE;
        }
    }

    // remove OBJECTID_FILE if all empty
    if (emptyObjID) {
        for (let i = 0; i < geoJson.features.length; i++) {
            delete geoJson.features[i].properties.OBJECTID_FILE;
        }
    }
}

/**
 * Rename any fields with invalid names. Both parameters are modified in place.
 *
 * @function cleanUpFields
 * @param {Object} geoJson           layer data in geoJson format
 * @param {Object} layerDefinition   layer definition of feature layer not yet created
 */
function cleanUpFields(geoJson: any, configPackage: __esri.FeatureLayerProperties) {
    const badField = (name: string) => {
        // basic for now. check for spaces.
        return name.indexOf(' ') > -1;
    };

    configPackage.fields?.forEach(f => {
        if (f.name && badField(f.name)) {
            const oldField: string = f.name;
            let newField: string;
            let underscore = '_';
            let badNewName;

            // determine a new field name that is not bad and is unique, then update the field definition
            do {
                newField = oldField.replace(/ /g, underscore);
                badNewName = configPackage.fields?.find(f2 => f2.name === newField);
                if (badNewName) {
                    // new field already exists. enhance it
                    underscore += '_';
                }
            } while (badNewName);

            f.alias = oldField;
            f.name = newField;

            // update the geoJson to reflect the field name change.
            for (let i = 0; i < geoJson.features.length; i++) {
                const gf = geoJson.features[i];
                gf.properties[newField] = gf.properties[oldField];
                delete gf.properties[oldField];
            }
        }
    });
}

/**
 * Converts a geometry collection into a single geometry structure.
 *
 * @function cleanUpGeomCollection
 * @param {any} geoJson layer data in GeoJSON format
 * @param {number} idx index of feature in geoJson file
 */
function cleanUpGeomCollection(geoJson: any, idx: number) {
    const geoms = geoJson.features[idx].geometry.geometries;

    // convert to geometry primitive when collection contains a single geometry
    if (geoms.length === 1) {
        geoJson.features[idx].geometry = {
            type: geoms[0].type,
            coordinates: geoms[0].coordinates
        };
    } else {
        // form a multipart geometry structure by merging coordinates of each geometry
        const merged = geoms.map((g: any) => g.coordinates);

        // map geometry type to corresponding multipart type
        // - Point -> MultiPoint
        // - LineString -> MultiLineString
        // - Polygon -> MultiPolygon
        geoJson.features[idx].geometry = {
            type: `Multi${geoms[0].type}`,
            coordinates: merged
        };
    }
}

/**
 * Returns a unified geom type, used to ensure GeoJson is not mixed geometry
 * @param realGeomType geom type from GeoJson
 * @returns unified geom type string
 */
function validGeomType(realGeomType: string): string {
    if (realGeomType === 'MultiLineString') {
        return 'LineString';
    } else if (realGeomType === 'MultiPolygon') {
        return 'Polygon';
    } else {
        return realGeomType;
    }
}

export class FileUtils extends APIScope {
    /**
     * Fetch file data from remote URL.
     * @param url the URL to get the data from
     * @param fileType the type of the file layer (csv, shape, or geoJson)
     */
    async fetchFileData(url: string, fileType: LayerType) {
        // TODO: What if this errors? In the two use cases within RAMP (wizard and config), errors are properly handled elsewhere.
        // Do we want to have any error handling here?
        const response = await axios.get(url, {
            responseType: 'arrayBuffer'
        });
        switch (fileType) {
            case LayerType.GEOJSON:
            case LayerType.DATAJSON:
                // data converted to JSON
                return JSON.parse(this.arbToStr(response.data));
            case LayerType.SHAPEFILE:
            case LayerType.GEOJSONZIPPED:
            case LayerType.FLATGEOBUF:
            case LayerType.FLATGEOBUFZIPPED:
                // data as ArrayBuffer
                return response.data;
            case LayerType.CSV:
            case LayerType.DATACSV:
                // data as string
                return this.arbToStr(response.data);
            default:
                console.error(`Unsupported file type passed to fetchFileData- '${fileType}'`);
        }
    }

    /**
     * Extracts fields from the first feature in the feature collection
     */
    extractGeoJsonFields(geoJson: any): Array<GeoJsonField> {
        if (geoJson.features.length < 1) {
            throw new Error('GeoJSON field extraction requires at least one feature');
        }

        // handle geometry collection structure

        let overallGeomType = '';
        for (let i = 0; i < geoJson.features.length; i++) {
            const feature = geoJson.features[i];
            const featType = feature.geometry.type;
            if (featType === 'GeometryCollection') {
                const geoms = feature.geometry.geometries;
                // geometry collection cannot be empty, nor contain empty geometries
                if (geoms === undefined || geoms.length === 0) {
                    throw new Error('GeoJSON file has geometry collection with missing/incomplete geometries');
                }

                // geometry type must be consistent within geometry collection
                const geomType = geoms[0].type;
                for (let j = 0; j < geoms.length; j++) {
                    if (geoms[j].type !== geomType) {
                        throw new Error('GeoJSON file has geometry collection containing multiple geometry types');
                    }
                }

                // convert geometry collection to single structure
                cleanUpGeomCollection(geoJson, i);
            }

            // This ensures that after any cleanup, geometries in the file are of the same type.
            // LineStrings/MultiLineStrings and Polygons/MultiPolygons can be considered the same type because Esri
            // doesn't differentiate between the single & multi variants. This is NOT the case for Point/MultiPoint.

            const vGeomType = validGeomType(feature.geometry.type);
            if (overallGeomType === '') {
                // first one, set lock on type
                overallGeomType = vGeomType;
            } else if (overallGeomType !== vGeomType) {
                // this feature is not consistent
                throw new Error('GeoJSON file contains multiple geometry types');
            }
        }

        // extract all fields and type them as string for now
        const fields: Array<GeoJsonField> = Object.keys(geoJson.features[0].properties).map(field => {
            return { name: field, type: 'string' };
        });

        let featureIdx = 0; // keep track of the current feature used for typing infering

        // keep track of fields that still need to be typed
        const fieldsToBeMapped: Array<string> = Object.keys(geoJson.features[0].properties);

        // loop through all features until we type all fields or exhaust list
        while (featureIdx < geoJson.features.length) {
            const feature = geoJson.features[featureIdx];

            if (feature.properties) {
                // check all the values of this feature and attempt to type the fields that haven't been mapped yet
                Object.keys(feature.properties)
                    .filter((field: string) => fieldsToBeMapped.includes(field))
                    .forEach((field: string) => {
                        const value: any = feature.properties[field];

                        // if value is null or undefined, we cannot infer type so we skip this feature and use the next one
                        if (value != null) {
                            // infer the type of this field
                            const fieldIdx = fields.findIndex(fieldInfo => fieldInfo.name === field);
                            fields[fieldIdx] = {
                                name: field,
                                type: this.inferType(value)
                            };

                            // remove this field from the list of fields with pending types
                            fieldsToBeMapped.splice(fieldsToBeMapped.indexOf(field), 1);
                        }
                    });
            }

            // check if all fields have been typed and mapped, if so exit the loop
            if (fieldsToBeMapped.length === 0) {
                break;
            }

            // not all fields have been mapped, so use the next feature
            featureIdx++;
        }

        return fields;
    }

    /**
     * Extracts fields from csv file does no guesswork on property types and calls everything a string.
     */
    extractCsvFields(csvData: string, delimiter = ',') {
        // TODO: When csv file is read, all data is treated as strings (since the csv types do not carry over)
        //       Since extractGeoJsonFields does type inferencing, maybe this can also be enhanced to infer types?
        //       To do this, the csv data would need to be converted to its proper type before inferences
        //       Proper typing is always preferred for data analysis and things like sorting
        //       See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1095

        const fields: Array<string> = dsv.dsvFormat(delimiter).parseRows(csvData)[0];
        return fields.map(field => {
            return { name: field, type: FieldType.STRING };
        });
    }

    /**
     * Returns all the fields from csv file that can be possible lat/long fields
     * @param csvData the csv file data
     * @param delimiter the delimiter in the data
     */
    filterCsvLatLonFields(csvData: any, delimiter = ',') {
        const data: Array<Array<string>> = dsv.dsvFormat(delimiter).parseRows(csvData);
        const fields: Array<string> = data[0];
        const result = {
            lat: JSON.parse(JSON.stringify(fields)),
            lon: JSON.parse(JSON.stringify(fields))
        };

        // loop through each field
        // if there exists a value for a field that cannot be a lat/long value, we remove the field from the result
        for (let i = 0; i < fields.length; i++) {
            for (let j = 1; j < data.length; j++) {
                const n = Number(data[j][i]);
                const latIdx = result.lat.indexOf(fields[i]);
                const lonIdx = result.lon.indexOf(fields[i]);

                if ((isNaN(n) || n < -90 || n > 90) && latIdx !== -1) {
                    result.lat.splice(latIdx, 1);
                }
                if ((isNaN(n) || n < -180 || n > 180) && lonIdx !== -1) {
                    result.lon.splice(lonIdx, 1);
                }

                // if this field cannot be a lat or long field, don't check the rest of the entries
                if (latIdx === -1 && lonIdx === -1) {
                    break;
                }
            }
        }

        return result;
    }

    /**
     * Convert GeoJSON to Esri json, a format that can be read by a feature layer constructor
     *
     * @param geoJson {Object} a GeoJSON object
     * @param options {GeoJsonOptions} any options for the transformation
     * @returns {Object} feature layer constructor object
     */
    async geoJsonToEsriJson(geoJson: any, options: GeoJsonOptions): Promise<__esri.FeatureLayerProperties> {
        let targetSR: any;
        let srcProj = '';
        let layerId: string;
        const configPackage: __esri.FeatureLayerProperties = {
            objectIdField: 'OBJECTID',
            fields: [
                {
                    name: 'OBJECTID',
                    type: FieldType.OID
                }
            ]
        };

        // ensure our features have ids
        assignIds(geoJson);

        // TODO this is assuming uniformity. If we support a mixed bag
        //      (e.g. points + multipoints, all converted to multipoints),
        //      then this likely needs a full file scan & analysis
        const geoJsonGeomType = geoJson.features[0].geometry.type;

        // @ts-expect-error TODO: explain why this is needed or remove
        const value = featureTypeToRenderer[geoJsonGeomType];
        // clone the default renderer so changes don't persist
        // also note that this default renderer object is in ArcGIS Server object format
        const defRender: any = JSON.parse(
            // @ts-expect-error TODO: explain why this is needed or remove
            JSON.stringify(defaultRenderers[value])
        );

        // pluck treats from options parameter
        if (options) {
            if (options.sourceProjection) {
                srcProj = this.$iApi.geo.proj.normalizeProj(options.sourceProjection);
            }

            if (options.targetSR) {
                targetSR = options.targetSR;
            } else {
                throw new Error('geoJsonToEsriJson - missing opts.targetSR arguement');
            }

            if (options.layerId) {
                layerId = options.layerId;
            } else {
                layerId = this.$iApi.geo.shared.generateUUID();
            }

            if (options.colour) {
                defRender.renderer.symbol.color = new Colour(options.colour).toArcServer();
            }
        } else {
            throw new Error('geoJsonToEsriJson - missing opts arguement');
        }

        if (!srcProj) {
            // the options did not include a source projection.
            // attempt to get it from the geoJson object, LatLon if doesn't exist
            srcProj = SpatialReference.parseGeoJsonCrs(geoJson.crs);
        }

        // Note: while this appears to always give the layer a simple renderer,
        // if a customRenderer is on the config, it will get applied to the esri
        // layer during FileLayer.onLoadActions()
        configPackage.renderer = await EsriAPI.RendererFromJson(defRender.renderer);

        // add all the fields to config.Package
        configPackage.fields = (configPackage.fields || []).concat(
            options.fieldMetadata?.exclusiveFields
                ? (this.extractGeoJsonFields(geoJson) as Array<object>).filter((field: any) =>
                      options.fieldMetadata?.fieldInfo?.find((f: any) => f.name === field.name)
                  )
                : (this.extractGeoJsonFields(geoJson) as Array<object>)
        );

        // fix the order in configPackage.fields if specified in the config
        if (
            options.fieldMetadata?.enforceOrder &&
            options.fieldMetadata?.fieldInfo &&
            options.fieldMetadata?.fieldInfo.length > 0
        ) {
            // demand respect for order
            configPackage.fields = this.$iApi.geo.attributes.orderFields(
                configPackage.fields as Array<FieldDefinition>,
                options.fieldMetadata?.fieldInfo
            ) as __esri.FieldProperties[];
        }

        // clean the fields. in particular, CSV files can be loaded with spaces in
        // the field names
        cleanUpFields(geoJson, configPackage);

        const destProj = this.$iApi.geo.proj.normalizeProj(targetSR);

        // change latitude and longitude fields from esriFieldTypeString -> esriFieldTypeDouble if they exist
        if (options) {
            if (options.latField) {
                const latField = configPackage.fields.find(
                    field => field.name === options.latField || field.alias === options.latField
                );
                if (latField) {
                    latField.type = FieldType.DOUBLE;
                }
            }
            if (options.lonField) {
                const longField = configPackage.fields.find(
                    field => field.name === options.lonField || field.alias === options.lonField
                );
                if (longField) {
                    longField.type = FieldType.DOUBLE;
                }
            }
        }

        // look up projection definitions if they don't already exist and we have enough info
        await this.$iApi.geo.proj.checkProjBomber([srcProj, targetSR]);

        // generate a nicely formatted object that that esri feature layer constructor can accept to make a local layer

        // project data and convert to esri json format
        const fancySR = SpatialReference.parseSR(targetSR).toESRI();

        await this.$iApi.geo.proj.projectGeoJson(geoJson, srcProj, destProj);

        // terraformer has no support for non-wkid layers. can also do funny things if source is 102100.
        // use 8888 as placehold then adjust below

        // NOTE typescript lies here. it insists esriJson will have .features property, but it infact is the feature array itself
        //      it also claims the .sr param is not valid, though it's in the documentation and the code.  lies!
        const esriJson = <any>ArcGIS.convert(geoJson, <any>{ sr: 8888 });
        configPackage.geometryType = this.$iApi.geo.geom.geoJsonGeomTypeToEsriGeomType(geoJsonGeomType);

        const validFields = configPackage.fields.map(esriField => esriField.name);

        // set proper SR on the geometeries, remove any excluded attribute fields
        for (let i = 0; i < esriJson.length; i++) {
            const gr = esriJson[i];
            gr.geometry.spatialReference = fancySR;
            gr.geometry.type = configPackage.geometryType;

            Object.keys(gr.attributes).forEach(attName => {
                if (validFields.includes(attName)) {
                    // if we encounter any complex datatypes (objects, arrays),
                    // stringify them. Any custom template can re-parse them if they need
                    // the original structure.
                    if (
                        (Array.isArray(gr.attributes[attName]) || typeof gr.attributes[attName] === 'object') &&
                        gr.attributes[attName] != null
                    ) {
                        gr.attributes[attName] = JSON.stringify(gr.attributes[attName]);
                    }
                } else {
                    // field was excluded, remove it
                    delete gr.attributes[attName];
                }
            });
        }

        // Determine which fields to trim
        const trimFields =
            options.fieldMetadata?.fieldInfo && options.fieldMetadata?.fieldInfo.length > 0
                ? options.fieldMetadata.fieldInfo
                      .filter(fi => fi.trim && validFields.includes(fi.name))
                      .map(fi => fi.name)
                : [];

        // Trim the field string values
        trimFields.forEach(trimName => {
            for (let i = 0; i < esriJson.length; i++) {
                const attr = esriJson[i].attributes;
                if (typeof attr[trimName] === 'string') {
                    attr[trimName] = attr[trimName].trim();
                }
            }
        });

        configPackage.source = <any>esriJson;
        configPackage.spatialReference = fancySR;
        configPackage.id = layerId;

        return configPackage;
    }

    // converts csv file in string format to geojson object
    // options
    //     - latfield: a string identifying the field containing latitude values ('Lat' by default)
    //     - lonfield: a string identifying the field containing longitude values ('Long' by default)
    //     - delimiter: a string defining the delimiter character of the file (',' by default)
    async csvToGeoJson(csvData: string, opts: CsvOptions | undefined): Promise<any> {
        const csvOpts: CsvOptions = {
            // default values
            latfield: 'Lat',
            lonfield: 'Long',
            delimiter: ','
        };

        // user options if
        if (opts) {
            if (opts.latfield) {
                csvOpts.latfield = opts.latfield;
            }

            if (opts.lonfield) {
                csvOpts.lonfield = opts.lonfield;
            }

            if (opts.delimiter) {
                csvOpts.delimiter = opts.delimiter;
            }
        }

        return new Promise((resolve, reject) => {
            csv2geojson(csvData, csvOpts, (err: any, data: any) => {
                if (err) {
                    console.error('csv conversion error');
                    console.error(err);
                    reject(err);
                } else {
                    // data is geojson object

                    // csv2geojson will not include the lat and long in the feature
                    data.features.map((feature: any) => {
                        // add new property Long and Lat before layer is generated
                        feature.properties[csvOpts.lonfield!] = feature.geometry.coordinates[0];
                        feature.properties[csvOpts.latfield!] = feature.geometry.coordinates[1];
                    });

                    resolve(data);
                }
            });
        });
    }

    /**
     * Converts Shapefile data to geojson.
     *
     * @param {ArrayBuffer} shapeData an ArrayBuffer of the Shapefile in zip format
     * @returns {Promise} a promise resolving with geojson
     */
    async shapefileToGeoJson(shapeData: ArrayBuffer): Promise<any> {
        const shp = await import('shpjs/dist/shp.min.js');
        return shp.default(shapeData);
    }

    /**
     * Converts FlatGeobuf data to geojson.
     *
     * @param {ArrayBuffer} fgbData an ArrayBuffer of a FlatGeobuf file
     * @param {number} maxLoadTime how long we are will permit this to run, in milliseconds
     * @returns {Promise} a promise resolving with geojson
     */
    fgbToGeoJson(fgbData: ArrayBuffer, maxLoadTime: number): Promise<any> {
        // the polling only waits for the header information callback to return.
        // the header should be tiny, thus very fast. The bulk of file content
        // blocks the thread before the polling loop can start. So using a small number
        // here as it will only hit the interval once unless something goes horribly wrong.
        const pollingSpeed = 60;
        return import('flatgeobuf').then(({ geojson }) => {
            return new Promise(resolve => {
                let headerDone = false;
                let projection: CrsMeta | null = null; // fgb lib returns null, so we disrespect convention here

                // Uint8Array variant of deserialize is synchronous
                const geoJson = geojson.deserialize(new Uint8Array(fgbData), undefined, headerMeta => {
                    projection = headerMeta.crs;
                    headerDone = true;
                });

                let kickTimer = 0;

                // wait for file content and header to appear
                const waitingFun = setInterval(() => {
                    if (geoJson && headerDone) {
                        clearInterval(waitingFun);

                        // pick apart spatial reference.

                        let customProj: SpatialReference | undefined;

                        if (projection) {
                            if (projection.code && projection.code !== 4326 && projection.org === 'EPSG') {
                                // has an EPSG code that is not lat lon
                                customProj = new SpatialReference(projection.code);
                            } else if (projection.wkt) {
                                // no code or non-ESPG code, but there is a wkt. use it.
                                customProj = new SpatialReference(projection.wkt);
                            } else {
                                // no idea what this could be. log it and add support later as need arises.
                                // currently code will act as if Lat Lon, likely will not show geometry.
                                console.error('Encountered FlatGeobuf with non-EPSG org: ', projection);
                            }
                        }

                        if (customProj) {
                            // we found something that appears valid and is not lat lon. Add CRS to geojson object
                            geoJson.crs = customProj.toGeoJSON();
                        } // else it's lat lon or ???, default to lat lon (do nothing)

                        resolve(geoJson);
                    } else {
                        kickTimer += pollingSpeed;
                        if (kickTimer > maxLoadTime) {
                            // took too long. stop.
                            // handling code will ignore bogus result
                            clearInterval(waitingFun);
                            resolve({});
                        }
                    }
                }, pollingSpeed);
            });
        });
    }

    /**
     * Attempt to infers the type of a given value
     * Will check if the value's type is one of int, double
     * Defaults to string type if not
     */
    inferType(value: any): FieldType {
        // TODO: add support for other types as needed
        if (typeof value === 'number') {
            // TODO: Ideally we would want to properly infer ints, but sometimes the value will look like an int (e.g. a whole number)
            //       But the field actually supports floats and we got unlucky with the value that was chosen to infer the type.
            //       Hence now the field is typed as an int field, but field is now seeing floats so ESRI throws warnings

            // treat all numbers as doubles since it will also cover ints
            return FieldType.DOUBLE;
        }
        return FieldType.STRING;
    }

    /**
     * Will property convert json-based raw data (on a layer config) to a json object
     * while respecting caching considerations.
     *
     * @param {String | Object} rawData json-compatible payload from config
     * @param {Boolean} [caching=false] if layer is concerned about caching the payload
     * @returns {Object} data as a Json object
     */
    rawDataJsonParser(rawData: any, caching: boolean = false): any {
        let realJson: any;
        if (typeof rawData === 'string') {
            // stringified json. enhnace to an object
            realJson = JSON.parse(rawData);
        } else if (caching) {
            // source is object, but needs to remain unchanged for caching scenarios.
            // some of the json processors adjust byRef, so need a deep clone.
            realJson = structuredClone(rawData);
        } else {
            // not caching, so don't care if source gets corrupted. avoid duplication of object,
            // pass pointer to the input
            realJson = rawData;
        }

        return realJson;
    }

    /**
     * Unzip a single zipped file.
     *
     * @param {ArrayBuffer} zippedData zipped file as ArrayBuffer
     * @returns {Promise<ArrayBuffer>} contents of the unzipped file as ArrayBuffer
     */
    async unzipSingleFile(zippedData: ArrayBuffer): Promise<ArrayBuffer> {
        const JSZip = await import('jszip');
        const zipper = new JSZip.default();
        const unzippedData = await zipper.loadAsync(zippedData);
        const fileName = Object.keys(unzippedData.files)[0];
        if (fileName && unzippedData.file(fileName)) {
            return await unzippedData.file(fileName)!.async('arraybuffer');
        } else {
            throw new Error('Could not find file in zipfile data.');
        }
    }

    /**
     * Helper method for extracting binary-encoded file source from a layer config.
     *
     * @param {RampLayerConfig} layerConfig a ramp layer config. Should be layer type that is a binary format.
     */
    async binaryInitHelper(layerConfig: RampLayerConfig): Promise<ArrayBuffer> {
        if (layerConfig.rawData && layerConfig.rawData instanceof ArrayBuffer) {
            // payload has been passed in as static data.
            // Only way this would be used is some other code generated the array buffer
            // and tacked it onto the layer config it creates in memory at runtime.

            return layerConfig.rawData;
        } else if (layerConfig.url) {
            // source is on interweb, fetch it
            return this.$iApi.geo.layer.files.fetchFileData(layerConfig.url, layerConfig.layerType);
        } else {
            throw new Error(`${layerConfig.layerType} config contains no url or invalid/missing raw data`);
        }
    }

    /**
     * Convert an ArrayBuffer to a UTF-8 string
     *
     * @param {ArrayBuffer} input binary input
     * @returns {string} input in string form
     */
    arbToStr(input: ArrayBuffer): string {
        return new TextDecoder('utf-8').decode(new Uint8Array(input));
    }
}
