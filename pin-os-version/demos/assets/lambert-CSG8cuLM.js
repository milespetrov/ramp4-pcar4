import{g as e,d as t}from"./main-DCUo5ucN.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let r={configs:{en:{map:{extentSets:[{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:e.defaultLODs(e.defaultTileSchemas()[0])}],tileSchemas:[{id:"DEFAULT_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0}],basemaps:[{id:"CBCT",tileSchemaId:"DEFAULT_NRCAN_Lambert_3978",layers:[{layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer"}]}],initialBasemapId:"CBCT"},fixtures:{overviewmap:{basemaps:{DEFAULT_NRCAN_Lambert_3978:{id:"CBCT",tileSchemaId:"DEFAULT_NRCAN_Lambert_3978",layers:[{layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer"}]}},startMinimized:!0}}}}},s={loadDefaultFixtures:!1,loadDefaultEvents:!0};const a=t(document.getElementById("app"),r,s);a.fixture.addDefaultFixtures(["northarrow","appbar","overviewmap"]);window.debugInstance=a;
