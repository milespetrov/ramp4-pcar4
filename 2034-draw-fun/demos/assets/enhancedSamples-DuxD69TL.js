import{_ as s}from"./preload-helper-ExcqyqRp.js";import{_ as T}from"./dynamic-import-helper-BoQLKyUF.js";import{g as i,c as S}from"./main-DvRWqUGe.js";var n="sample",p=new URL(window.location.href);document.getElementById("selectConfig").addEventListener("change",C);M();async function h(d){const r={startingFixtures:["appbar","basemap","crosshairs","geosearch","grid","help","hilight","layer-reorder","legend","mapnav","northarrow","overviewmap","scrollguard","panguard","settings","wizard","draw","export"],configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}},{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],caption:{mapCoords:{formatter:"CANADA_ATLAS_LAMBERT"},scaleBar:{imperialScale:!1}},mapMouseThrottle:50,lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:i.defaultLODs(i.defaultTileSchemas()[0])},{id:"LOD_ESRI_World_AuxMerc_3857",lods:i.defaultLODs(i.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0,recoveryBasemap:{basemapId:"baseProvinces_3978"}},{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"],recoveryBasemap:{basemapId:"baseOpenStreetMap"}}],basemaps:[{id:"baseNrCan",name:"Canada Base Map - Transportation (CBMT)",description:"The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"The Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseSimple",name:"Canada Base Map - Simple",description:"Canada Base Map - Simple",altText:"Canada base map - Simple",layers:[{id:"SMR",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBME_CBCE_HS_RO_3978",name:"Canada Base Map - Elevation (CBME)",description:"The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Elevation (CBME)",layers:[{id:"CBME_CBCE_HS_RO_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBMT_CBCT_GEOM_3978",name:"Canada Base Map - Transportation (CBMT)",description:" The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT_CBCT_GEOM_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseProvinces_3978",name:"Provincial and Territorial Boundaries",description:"A basic outline of Canada's provincial and territorial boundaries.",altText:"Canada Base Map - Provincial and Territorial outlines",hideThumbnail:!0,layers:[{id:"provinces_3978",layerType:"esri-tile",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/Overlays/Provinces/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseEsriWorld",name:"World Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.",altText:"World Imagery",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriPhysical",name:"World Physical Map",description:"This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.",altText:"World Physical Map",layers:[{id:"World_Physical_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriRelief",name:"World Shaded Relief",description:"This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.",altText:"World Shaded Relief",layers:[{id:"World_Shaded_Relief",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriStreet",name:"World Street Map",description:"This worldwide street map presents highway-level data for the world.",altText:"ESWorld Street Map",layers:[{id:"World_Street_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTerrain",name:"World Terrain Base",description:"This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.",altText:"World Terrain Base",layers:[{id:"World_Terrain_Base",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTopo",name:"World Topographic Map",description:"This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.",altText:"World Topographic Map",layers:[{id:"World_Topo_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseOpenStreetMap",name:"OpenStreetMap",description:"Open sourced topographical map.",altText:"OpenStreetMap",layers:[{id:"Open_Street_Map",layerType:"osm-tile"}],thumbnailUrl:"https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png",tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"}],initialBasemapId:"baseNrCan"},layers:[],fixtures:{legend:{root:{children:[]}},appbar:{items:["legend","geosearch","basemap","export","layer-reorder"]},mapnav:{items:["fullscreen","geolocator","help","home","basemap","legend","geosearch","draw"]},export:{fileName:"ramp-pcar-4-map-carte"},help:{location:"../help"}},panels:{open:[{id:"legend",pin:!0}]},system:{animate:!0}},fr:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}},{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],caption:{mapCoords:{formatter:"CANADA_ATLAS_LAMBERT"},scaleBar:{imperialScale:!1}},mapMouseThrottle:200,lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:i.defaultLODs(i.defaultTileSchemas()[0])},{id:"LOD_ESRI_World_AuxMerc_3857",lods:i.defaultLODs(i.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0},{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"baseNrCan",name:"Carte de base du Canada - transport (CBCT) avec étiquettes",description:"La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",altText:"La carte de base du Canada - transport (CBCT)",layers:[{id:"CBCT",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseSimple",name:"Carte de base du Canada - simple",description:"La carte de base du Canada - simple",altText:"La carte de base du Canada - simple",layers:[{id:"SMR",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBME_CBCE_HS_RO_3978",name:"Carte de base du Canada - élevation (CBCE)",description:"La carte de base du Canada - élevation (CBCE) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",altText:"La carte de base du Canada - élevation (CBCE)",layers:[{id:"CBME_CBCE_HS_RO_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseCBMT_CBCT_GEOM_3978",name:"Carte de base du Canada - transport (CBCT)",description:"La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",altText:"La carte de base du Canada - transport (CBCT)",layers:[{id:"CBMT_CBCT_GEOM_3978",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer"}],tileSchemaId:"EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978"},{id:"baseEsriWorld",name:"Imagerie mondiale",description:"L'imagerie mondiale fournit une imagerie satellitaire et aérienne dans de nombreuses régions du monde avec une résolution de 1 mètres et moins et des images satellitaires de résolution inférieure dans le monde entier.",altText:"L'imagerie mondiale",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriPhysical",name:"Monde physique",description:"La carte du monde physique représente l'aspect physique naturel de la Terre à 1.24 kilomètres par pixel pour le monde et à 500 mètres pour les États- Unis.",altText:"La carte du monde physique",layers:[{id:"World_Physical_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriRelief",name:"Monde en relief ombragé",description:"La carte du monde en relief ombragé représente l'élévation de la surface de la terre comme un relief ombragé.Cette carte est utilisée comme couche de fond afin d'ajouter un relief ombragé à d'autres cartes SIG, comme la carte ArcGIS Online World Street Map.",altText:"La carte du monde en relief ombragé",layers:[{id:"World_Shaded_Relief",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriStreet",name:"Monde routier",description:"La carte du monde routier présente des données au niveau des autoroutes pour le monde.",altText:"La carte du monde routier",layers:[{id:"World_Street_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTerrain",name:"Monde terrain",description:"La carte du monde terrain est conçue pour être utilisée comme une carte de base par les professionnels du SIG pour superposer d'autres couches thématiques comme la démographie ou la couverture terrestre.",altText:"La carte du monde terrain",layers:[{id:"World_Terrain_Base",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseEsriTopo",name:"Monde topographique",description:"La carte du monde topographique est conçue pour être utilisé comme une carte de base par les professionnels du SIG et comme une carte de référence par quiconque.",altText:"La carte du monde topographique",layers:[{id:"World_Topo_Map",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"},{id:"baseOpenStreetMap",name:"OpenStreetMap",description:"Carte topographique open source.",altText:"OpenStreetMap",layers:[{id:"Open_Street_Map",layerType:"osm-tile"}],thumbnailUrl:"https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png",tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857"}],initialBasemapId:"baseNrCan"},layers:[],fixtures:{legend:{root:{children:[]}},appbar:{items:["legend","geosearch","basemap","export","layer-reorder"]},mapnav:{items:["fullscreen","geolocator","help","home","basemap","legend","geosearch","draw"]},export:{fileName:"ramp-pcar-4-map-carte"},help:{location:"../help"}},panels:{open:[{id:"legend",pin:!0}]},system:{animate:!0}}}},l={},o=[r.configs.en,r.configs.fr],c={addLayer:e=>{o.forEach(a=>{a.layers.push(structuredClone(e))})},addLayerLang:(e,a)=>{const t=r.configs[a];t.layers.push(structuredClone(e)),t.fixtures.legend.root.children.push(structuredClone({layerId:e.id}))},addLayerLegend:e=>{const a={layerId:e.id};o.forEach(t=>{t.layers.push(structuredClone(e)),t.fixtures.legend.root.children.push(structuredClone(a))})},addLayerLegendLang:(e,a)=>{const t=r.configs[a];t.layers.push(structuredClone(e)),t.fixtures.legend.root.children.push(structuredClone({layerId:e.id}))},addLegend:e=>{o.forEach(a=>{a.fixtures.legend.root.children.push(structuredClone(e))})},addLegendLang:(e,a)=>{r.configs[a].fixtures.legend.root.children.push(structuredClone(e))}},_=await T(Object.assign({"./enhanced-scripts/000-template.js":()=>s(()=>import("./000-template-MKoDqFP_.js"),[],import.meta.url),"./enhanced-scripts/001-happy.js":()=>s(()=>import("./001-happy-n4gDZDEp.js"),[],import.meta.url),"./enhanced-scripts/002-simple-empty.js":()=>s(()=>import("./002-simple-empty-CDGo5-PS.js"),[],import.meta.url),"./enhanced-scripts/003-simple-feature.js":()=>s(()=>import("./003-simple-feature-Dt9K3rAE.js"),[],import.meta.url),"./enhanced-scripts/004-simple-mil.js":()=>s(()=>import("./004-simple-mil-CLZotk1N.js"),[],import.meta.url),"./enhanced-scripts/005-simple-file.js":()=>s(()=>import("./005-simple-file-1-lZGV3_.js"),[],import.meta.url),"./enhanced-scripts/006-simple-data.js":()=>s(()=>import("./006-simple-data-COlaxuOJ.js"),[],import.meta.url),"./enhanced-scripts/007-main-classic.js":()=>s(()=>import("./007-main-classic-BuDtJmCJ.js"),[],import.meta.url),"./enhanced-scripts/008-projection-party.js":()=>s(()=>import("./008-projection-party-DW7f0YQb.js"),[],import.meta.url),"./enhanced-scripts/009-custom-panels.js":()=>s(()=>import("./009-custom-panels-Cmo8u65D.js"),[],import.meta.url),"./enhanced-scripts/010-identify-priority.js":()=>s(()=>import("./010-identify-priority-CIkvCJA4.js"),[],import.meta.url)}),`./enhanced-scripts/${d}.js`,3),m=_.runPreTest(r,l,c),u=S(document.getElementById("app"),m.config,m.options);window.debugInstance=u,_.runPostTest(u,c)}function C(d){p.searchParams.set(n,document.getElementById("selectConfig").selectedIndex+1),window.location.href=p}function M(){var d=new URLSearchParams(p.search),r=d.get(n)-1,l=document.getElementById("selectConfig");d.has(n)&&r>=1&&l.item(r)?(l.options[r].selected="selected",h(l.options[r].value)):h(l.options[0].value)}
