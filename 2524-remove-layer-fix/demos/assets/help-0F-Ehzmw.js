import{g as a,d as t}from"./main-CFpM9i38.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let l={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:a.defaultLODs(a.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},fixtures:{mapnav:{items:["fullscreen","help","home","basemap"]},help:{folderName:"other",panelWidth:500}}}}},r={loadDefaultFixtures:!1,loadDefaultEvents:!1};const e=t(document.getElementById("app"),l,r);e.fixture.addDefaultFixtures(["mapnav","help"]).then(()=>{e.panel.open("help")});e.event.addDefaultEvents(["toggles_help_panel"]);window.debugInstance=e;
