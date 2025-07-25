// Put things here that would be common to both 2D and 3D maps.
// May be pointless and should be removed...limitied experience with 3D maps
// makes it unclear how much overlap of functionality makes sense. Could be
// we need an entirely different framework to really support 3D.
/* eslint-disable @typescript-eslint/no-unused-vars */

import { toRaw, markRaw } from 'vue';
import { APIScope, Basemap, InstanceAPI, NotificationType } from '@/api/internal';
import { EsriAPI, EsriWatch } from '@/geo/esri';
import type { EsriMap } from '@/geo/esri';
import { BaseGeometry, DefPromise, Extent, ExtentSet, GeometryType, SpatialReference } from '@/geo/api';
import type { RampLabelsConfig, RampMapConfig, ZoomEasing } from '@/geo/api';

// Would ideally call this BaseMap, but that would get confused with Basemap.
// Do not add any event emits or listeners that would be tied to a specific map
export class CommonMapAPI extends APIScope {
    /**
     * The internal esri map. Avoid referencing outside of geoapi.
     * @private
     */
    esriMap: EsriMap | undefined;

    /**
     * Local storage of Basemap objects
     * @private
     */
    _basemapStore: Array<Basemap>;

    /**
     * Indicates if the map has been created
     * @public
     */
    created = false;

    /**
     * Identifies the map. Primarily used for debugging.
     */
    name: string;

    /**
     * Tracks if we are watching for the first basemap to load.
     * @private
     */
    protected trackFirstBasemap = false;

    /**
     * The internal esri map view. Changes from outside of RAMP may break the instance. Use caution.
     */
    esriView: __esri.MapView | undefined;

    /**
     * Internal deferred managing the view promise
     * @private
     */
    protected _viewPromise: DefPromise<void>;

    /**
     * A promise that resolves when the map view has been created
     */
    get viewPromise(): Promise<void> {
        return this._viewPromise.getPromise();
    }

    /**
     * The map spatial reference in RAMP API Spatial Reference format.
     * Saves us from converting from ESRI format every time it is needed
     * @private
     */
    protected _rampSR: SpatialReference | undefined;

    /**
     * The active extent set in RAMP API Extent Set format.
     * Allows a quick reference to the available extents if needed.
     * @private
     */
    protected _rampExtentSet: ExtentSet | undefined;

    /**
     * The viewDiv for the ESRI MapView
     * The map will be rendered using this div object
     * @private
     */
    protected _targetDiv: string | HTMLDivElement | undefined;

    /**
     * List of ESRI watch handlers
     * @private
     */
    protected handlers: Array<{ type: string; handler: any }>;

    /**
     * The default zoom level when zooming to a point feature
     * @private
     */
    protected pointZoomScale: number;

    protected constructor(iApi: InstanceAPI, name: string = '') {
        super(iApi);

        this.esriMap = undefined;
        this._basemapStore = [];
        this._viewPromise = new DefPromise();
        this.handlers = [];
        this.pointZoomScale = 50000;
        this.name = name;
    }

    protected noMapErr(): void {
        console.error(`Attempted to manipulate the ${this.name} map before calling createMap()`);
        console.trace();
    }

    protected abstractError(): void {
        throw new Error(`Attempted to call an abstract method in the parent CommonMapAPI`);
    }

    /**
     * Any map labels defaulting
     */
    labelsDefault: RampLabelsConfig = {
        visible: undefined
    };

    /**
     * Will generate the actual Map control objects and construct it on the page
     * @param {RampMapConfig} config the config for the map
     * @param {string | HTMLDivElement} targetDiv the div to be used for the map view
     * @returns {Promise} resolves when the map has been created
     */
    async createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): Promise<void> {
        const iAmBasemapError = (bm: Basemap) => {
            this.$iApi.notify.show(
                NotificationType.ERROR,
                this.$iApi.$i18n.t('layer.error', {
                    id: bm.name
                })
            );
        };

        const basemapGenerationProms = config.basemaps.map(bmConfig => Basemap.create(bmConfig));

        const basemapItemsRaw = await Promise.all(basemapGenerationProms);

        // handle any problems in the basemap generation
        const basemapItemsPristine = basemapItemsRaw.filter(bm => {
            if (bm.createErr) {
                // something went wrong.
                // place a notification, but basemap still may be partially viable if it has some working inner layers
                iAmBasemapError(bm);
            }

            // omit any items where all constituant layers failed
            return bm.esriBasemap.baseLayers.length > 0;
        });

        // this watches for loading problems with the basemap, specifically the first one failing,
        // and triggering the "fallback" logic if that happens.
        // the "loading" won't start until the basemap actually gets put into the ESRI map,
        // so no need to pre-check statuses for missed events.

        basemapItemsPristine.forEach(bm => {
            bm.esriBasemap.baseLayers.forEach(baselayer => {
                EsriWatch(
                    () => baselayer.loadStatus,
                    () => {
                        if (baselayer.loadStatus === 'loaded') {
                            // all good. we flip our flag and stop any active tracking.
                            this.trackFirstBasemap = false;
                        } else if (baselayer.loadStatus === 'failed') {
                            // basemap died. always ping notification.
                            iAmBasemapError(bm);

                            // initiate fallback if first basemap and fallback exists.
                            if (this.trackFirstBasemap) {
                                this.recoverBasemap(bm.tileSchemaId);
                            }
                        }
                    }
                );
            });
        });

        this._basemapStore = basemapItemsPristine;

        if (config.labelsDefault) {
            this.labelsDefault.visible = config.labelsDefault.visible;
        }

        const esriConfig: __esri.MapProperties = {};

        // note we can no longer do this here, due to basemap recovery.
        // doing it here will cause the view promise to block until the basemap fails.
        // Note that this was redundant anyways. The basemap got set again in createMapView()
        // even before we wrote the basemap recovery.
        /*
        if (config.initialBasemapId) {
            esriConfig.basemap = toRaw(
                this.findBasemap(config.initialBasemapId).esriBasemap
            );
        }
        */
        this.esriMap = markRaw(await EsriAPI.Map(esriConfig));
        this.pointZoomScale = config.pointZoomScale && config.pointZoomScale > 0 ? config.pointZoomScale : 50000;
        this._targetDiv = targetDiv;

        this.createMapView(config.initialBasemapId);
    }

    /**
     * Destroys the ESRI map
     *
     * @protected
     */
    destroyMap(): void {
        if (!this.esriMap || !this.esriView) {
            this.noMapErr();
            return;
        }

        // destroy the map view first
        this.destroyMapView();

        // destroy the map
        this.esriMap.destroy();
        delete this.esriMap;

        // clear local basemap store
        this._basemapStore.forEach(bm => bm.esriBasemap.destroy());
        this._basemapStore = [];
    }

    /**
     * Reloads the map with the given map config and target div.
     * This breaks down and re-creates the internal map state.
     *
     * @param {RampMapConfig} config the config for the map
     * @param {string | HTMLDivElement | undefined} targetDiv the div to be used for the map view
     * @returns {Promise} resolves when the map has been re-created. Layers may still be loading.
     */
    async reloadMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): Promise<void> {
        if (!this.esriMap || !this.esriView) {
            this.noMapErr();
            return;
        }
        this.destroyMap();
        await this.createMap(config, targetDiv);
    }

    /**
     * Will generate a ESRI map view and add it to the page
     * Can optionally provide the basemap or basemap id to be used when creating the map view
     *
     * This method should be overidden by other map sub-classes
     *
     * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
     * @returns {Promise} resolves when the map view has been created.
     * @protected
     */
    protected async createMapView(basemap?: string | Basemap): Promise<void> {
        this.abstractError();
    }

    /**
     * Destroys the ESRI map view
     *
     * @protected
     */
    protected destroyMapView(): void {
        if (!this.esriView) {
            this.noMapErr();
            return;
        }

        this._viewPromise = new DefPromise();
        this.created = false;

        // Clean up map view
        this.handlers.forEach(h => h.handler.remove());
        this.handlers = [];

        // Destroy the current map view
        this.esriView.map = null;
        // TODO: explain why this is needed or remove
        this.esriView.container = null;
        // @ts-expect-error TODO: explain why this is needed or remove
        this.esriView.spatialReference = null;
        // @ts-expect-error TODO: explain why this is needed or remove
        this.esriView.extent = null;
        // @ts-expect-error TODO: explain why this is needed or remove
        this.esriView.navigation = null;
        this.esriView.destroy();
        delete this.esriView;
    }

    /**
     * Searches the local basemap list for a basemap with the given id
     * Throws error if basemap could not be found
     *
     * @param {string} id basemap id
     * @returns {Promise<Basemap>} resolves with the found basemap
     * @protected
     */
    async findBasemap(id: string): Promise<Basemap> {
        const bm: Basemap | undefined = this._basemapStore.find(bms => bms.id === id);
        if (bm) {
            return bm;
        } else {
            throw new Error(`Invalid basemap id requested: ${id}`);
        }
    }

    /**
     * Applies the given basemap (or basemap with given id) to the esri map
     * Throws error if basemap could not be found with the given id
     *
     * @param {string | basemap} basemap the basemap id or object
     * @returns {Promise} resolves when the basemap has been applied
     * @protected
     */
    protected async applyBasemap(basemap: string | Basemap): Promise<void> {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }

        const bm: Basemap = typeof basemap === 'string' ? await this.findBasemap(basemap) : basemap;
        this.esriMap.basemap = toRaw(bm.esriBasemap);
    }

    /**
     * Set the map's basemap to the basemap with the given id.
     * If the new basemap's tile schema differs from the current one, the map view will be refreshed
     *
     * The returned boolean indicates if the schema has changed.
     *
     * This method should be overidden by child map classes
     *
     * @param {string} basemapId the basemap id
     * @returns {Promise<boolean>} resolves with boolean indicates if the schema has changed
     * @abstract
     */
    async setBasemap(basemapId: string): Promise<boolean> {
        this.abstractError();
        return false;
    }

    /**
     * Will attempt to change to another basemap if the very first basemap failed.
     * If nothing is defined, will do nothing but manage our watching state.
     *
     * This method is overidden as needed
     *
     * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
     * @returns {Promise<void>} resolves after recovery has initiated
     */
    async recoverBasemap(basemapSchemaId: string): Promise<void> {
        // common map does nothing.
        // this also means the overview map will not attempt trickery
    }

    /**
     * Get the id of the currently used basemap
     * Returns undefined if there is no map
     * @returns {string | undefined} current basemap id
     */
    getCurrentBasemapId(): string | undefined {
        if (this.esriMap) {
            return this.esriMap.basemap?.id ?? undefined;
        } else {
            this.noMapErr();
        }
    }

    /**
     * Projects a geometry to the map's spatial reference
     *
     * @private
     * @param {BaseGeometry} geom the RAMP API geometry to project
     * @returns {Promise<BaseGeometry>} the geometry projected to the map's projection, in RAMP API Geometry format
     */
    private geomToMapSR(geom: BaseGeometry): Promise<BaseGeometry> {
        if (!this._rampSR) {
            throw new Error('call to map.geomToMapSR before the map spatial ref was created');
        }
        if (this._rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.$iApi.geo.proj.projectGeometry(this._rampSR, geom);
        }
    }

    /**
     * Zooms the map to a given geometry.
     *
     * @param {BaseGeometry} geom A RAMP API geometry to zoom the map to
     * @param {number} [scale] An optional scale value of the map. Is ignored for non-Point geometries
     * @param {boolean} [animate] Option to turn off the zoom animation. On by default
     * @param {number} [duration] Option to change animation duration (in milliseconds). Default of 200. Ignored if animate is off.
     * @param {ZoomEasing} [easing] Option to change animation easing function. Default of 'ease'. Ignored if animate is off.
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomMapTo(
        geom: BaseGeometry,
        scale?: number,
        animate = true,
        duration = 200,
        easing: ZoomEasing = 'ease'
    ): Promise<void> {
        if (this.esriView) {
            if (geom.invalid()) {
                throw new Error('attempt to zoom to invalid geometry');
            }
            const g = await this.geomToMapSR(geom);
            // TODO investigate the `snapTo` parameter if we have an extent / poly coming in
            //      see how it compares to the old "fit to view" parameter of ESRI3
            const zoomP: any = {
                target: this.$iApi.geo.geom.geomRampToEsri(g)
            };

            if (g.type === GeometryType.POINT) {
                zoomP.scale = scale || this.pointZoomScale;
            }
            const opts: __esri.GoToOptions2D = { animate, duration, easing };

            return this.viewPromise.then(() => {
                return this.esriView!.goTo(zoomP, opts);
            });
        } else {
            this.noMapErr();
        }
    }

    /**
     * Provides the zoom level of the map
     *
     * @returns {number} the map zoom level
     */
    getZoomLevel(): number {
        if (this.esriView) {
            return this.esriView.zoom;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the scale of the map (the scale denominator as integer)
     *
     * @returns {number} the map scale
     */
    getScale(): number {
        if (this.esriView) {
            return this.esriView.scale;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the resolution of the map. This means the number of map units that is covered by one pixel.
     *
     * @returns {number} the map resolution
     */
    getResolution(): number {
        if (this.esriView) {
            return this.esriView.resolution;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the extent of the map
     *
     * @returns {Extent} the map extent in RAMP API Extent format
     */
    getExtent(): Extent {
        if (this.esriView) {
            return Extent.fromESRI(this.esriView.extent);
        } else {
            this.noMapErr();
            return Extent.fromParams('i_am_error', 0, 1, 0, 1); // default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Provides the active extent set of the map
     *
     * @returns {ExtentSet} the active extent set of the map
     */
    getExtentSet(): ExtentSet {
        if (this._rampExtentSet) {
            return this._rampExtentSet;
        } else {
            this.noMapErr();
            // default fake value. avoids us having undefined checks everywhere.
            return ExtentSet.fromConfig({
                id: 'i_am_error_extent_set',
                default: {
                    xmin: 0,
                    xmax: 1,
                    ymin: 0,
                    ymax: 1,
                    spatialReference: {
                        wkid: 4326
                    }
                }
            });
        }
    }

    /**
     * Provides the spatial reference of the map
     *
     * @returns {SpatialReference} the map spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        if (this._rampSR) {
            return this._rampSR.clone();
        } else {
            this.noMapErr();
            return SpatialReference.latLongSR(); // default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Get the height of the map on the screen in pixels
     *
     * @returns {Number} pixel height
     */
    getPixelHeight(): number {
        if (this.esriView) {
            return this.esriView.height;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Get the width of the map on the screen in pixels
     *
     * @returns {Number} pixel width
     */
    getPixelWidth(): number {
        if (this.esriView) {
            return this.esriView.width;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Set's the map's pointZoomScale value to newScale.
     * If newScale is not a positive number, a console error is thrown.
     *
     * The returned boolean indicates if the value has been successfully set.
     *
     * @param {number} newScale the new pointZoomScale value, which must be a positive number
     * @returns {boolean} indicates if the value was set successfully
     */
    setPointZoomScale(newScale: number): boolean {
        if (newScale > 0) {
            this.pointZoomScale = newScale;
            return true;
        }
        console.error(`Cannot set pointZoomScale to non-positive number: ${newScale}.`);
        return false;
    }
}
