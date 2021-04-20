window.rInstance = null;
function initRAMP() {
    console.log('RAMP has loaded.');

    document.getElementById('ramp-version').innerText =
        'v.' +
        window.RAMP.version.major +
        '.' +
        window.RAMP.version.minor +
        '.' +
        window.RAMP.version.patch +
        ' [#' +
        window.RAMP.version.hash.slice(0, 6) +
        ']  -  built on ' +
        new Date(window.RAMP.version.timestamp).toLocaleDateString();

    const rInstance = new window.RAMP.Instance(document.getElementById('app'), {
        en: {
            map: {
                extent: {
                    xmax: -5007771.626060756,
                    xmin: -16632697.354854,
                    ymax: 10015875.184845109,
                    ymin: 5022907.964742964,
                    spatialReference: {
                        wkid: 102100,
                        latestWkid: 3857,
                    },
                },
                lods: RAMP.geoapi.maps.defaultLODs(RAMP.geoapi.maps.defaultTileSchemas()[1]), // idx 1 = mercator
                basemaps: [
                    {
                        id: 'esriImagery',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esriTile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
                            },
                        ],
                    },
                ],
                initialBasemapId: 'esriImagery',
            },
            layers: [
                {
                    id: 'WaterQuantity',
                    layerType: 'esriMapImage',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    layerEntries: [
                        {
                            index: 1,
                            state: {
                                opacity: 1,
                                visibility: true,
                            },
                        },
                    ],
                    state: {
                        opacity: 1,
                        visibility: true,
                    },
                    customRenderer: {}, // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WaterQuality',
                    layerType: 'esriMapImage',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    layerEntries: [
                        {
                            index: 5,
                            state: {
                                opacity: 1,
                                visibility: true,
                            },
                        },
                    ],
                    state: {
                        opacity: 1,
                        visibility: true,
                    },
                    customRenderer: {}, // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'CleanAir',
                    layerType: 'esriFeature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                    state: {
                        opacity: 0.8,
                        visibility: true,
                    },
                    customRenderer: {}, // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WFSLayer',
                    layerType: 'ogcWfs',
                    url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                    state: {
                        visibility: true,
                    },
                    customRenderer: {},
                },
                {
                    id: 'Happy',
                    layerType: 'esriFeature',
                    fileType: 'geojson',
                    url: 'https://fgpv-app.azureedge.net/demo/assets/sample_data/happy.json',
                    state: {
                        visibility: true,
                    },
                    customRenderer: {}, // just to chill things out. real ramp will have all properties defaulted and filled in
                },
            ],
            fixtures: {
                legend: {
                    reorderable: true,
                    root: {
                        children: [
                            {
                                name: 'Visibility Set',
                                exclusiveVisibility: [
                                    {
                                        layerId: 'CleanAir',
                                        name: 'Clean Air in Set',
                                    },
                                    {
                                        name: 'Group in Set',
                                        children: [
                                            {
                                                layerId: 'WaterQuantity',
                                                name: 'Water Quantity in Nested Group',
                                            },
                                            {
                                                layerId: 'WaterQuality',
                                                name: 'Water Quality in Nested Group',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                layerId: 'WFSLayer',
                                name: 'WFSLayer',
                            },
                        ],
                    },
                },
                appbar: {
                    items: [
                        { id: 'gazebo', options: { colour: '#54a0ff' } },
                        'divider',
                        'snowman-appbar-button',
                        'legend',
                        'geosearch',
                        'basemap',
                        'divider',
                    ],
                },
                mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
                details: {
                    items: [
                        {
                            id: 'WaterQuantity',
                            template: 'Water-Quantity-Template',
                        },
                        {
                            id: 'WFSLayer',
                            template: 'WFSLayer-Custom',
                        },
                    ],
                },
            },
        },
        fr: {
            map: {
                extent: {
                    xmax: -5007771.626060756,
                    xmin: -16632697.354854,
                    ymax: 10015875.184845109,
                    ymin: 5022907.964742964,
                    spatialReference: {
                        wkid: 102100,
                        latestWkid: 3857,
                    },
                },
                lods: window.RAMP.geoapi.maps.defaultLODs(window.RAMP.geoapi.maps.defaultTileSchemas()[1]), // idx 1 = mercator
                basemaps: [
                    {
                        id: 'esriImagery',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esriTile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
                            },
                        ],
                    },
                ],
                initialBasemapId: 'esriImagery',
            },
            layers: [
                {
                    id: 'CleanWater',
                    layerType: 'esriFeature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/3',
                    state: {
                        opacity: 0.8,
                        visibility: true,
                    },
                    customRenderer: {}, // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WFSLayer',
                    layerType: 'ogcWfs',
                    url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=6000',
                    state: {
                        visibility: true,
                    },
                    customRenderer: {},
                },
            ],
            fixtures: {
                appbar: {
                    items: [
                        { id: 'gazebo', options: { colour: '#54a0ff' } },
                        'divider',
                        'snowman-appbar-button',
                        'legend',
                        'geosearch',
                        'basemap',
                        'divider',
                    ],
                },
                mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
                details: {
                    items: [
                        {
                            id: 'WaterQuantity',
                            template: 'Water-Quantity-Template',
                        },
                        {
                            id: 'WFSLayer',
                            template: 'WFSLayer-Custom',
                        },
                    ],
                },
            },
        },
    });
}
