import{g as e,c as a}from"./main-DvRWqUGe.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let t={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:e.defaultLODs(e.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},fixtures:{overviewmap:{basemaps:{DEFAULT_ESRI_World_AuxMerc_3857:{id:"World_Terrain_Base",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"http://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"}]}},startMinimized:!1,expandFactor:3,areaOpacity:.5,areaColour:"#5D591F",borderColour:"#00FF00",borderWidth:2}}}}},i={loadDefaultFixtures:!1,loadDefaultEvents:!0};const r=a(document.getElementById("app"),t,i);r.fixture.addDefaultFixtures(["overviewmap"]);window.debugInstance=r;
