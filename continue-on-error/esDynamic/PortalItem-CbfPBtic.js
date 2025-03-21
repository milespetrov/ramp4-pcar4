import{k as a,by as P,o,A as w,aD as x,dm as I,n as j,s as m,fb as q,d9 as T,cG as L,au as U,eK as C,fc as F,b as O,f as l,fd as D,bx as N,fe as $,u as J,e as K}from"./main-IAmJgjpH.js";let p=class extends x{constructor(e){super(e),this.portalItem=null}normalizeCtorArgs(e){return e?.portalItem&&e.path?{...e,path:R(e.path,e.portalItem)}:e}set path(e){e!=null&&I(e)?j.getLogger(this).error("portalitemresource:invalid-path","A portal item resource path must be relative"):this._set("path",e)}_castPath(e){return R(e,this.portalItem)}get url(){return this.portalItem&&this.path?`${this.portalItem.itemUrl}/resources/${this.path}`:null}get cdnUrl(){return this.portalItem&&this.path?`${this.portalItem.itemCdnUrl}/resources/${this.path}`:null}get itemRelativeUrl(){return this.portalItem&&this.path?`./resources/${this.path}`:null}fetch(e="json",t){const r=this.cdnUrl;if(r==null)throw new m("portal-item-resource:fetch","Portal item resource does not refer to a valid item or path");return this.portalItem.portal.request(r,{responseType:e,query:{token:this.portalItem.apiKey,_ts:t?.cacheBust?Date.now():null},signal:t?.signal})}async update(e,t){const{addOrUpdateResources:r}=await import("./resourceUtils-BvcNqO1_.js");return await r(this.portalItem,[{resource:this,content:e,compress:t?.compress,access:t?.access}],"update",t),this}hasPath(){return this.path!=null}};function R(e,t){return e==null?e:(e=e.replace(/^\/+/,""),t!=null&&I(e)&&(e=q(e,t.itemUrl)),e?.replace(/^\/+/,"").replace(/^(\.\/)?resources\//,""))}a([o()],p.prototype,"portalItem",void 0),a([o({type:String,value:null})],p.prototype,"path",null),a([P("path")],p.prototype,"_castPath",null),a([o({type:String,readOnly:!0})],p.prototype,"url",null),a([o({type:String,readOnly:!0})],p.prototype,"cdnUrl",null),a([o({type:String,readOnly:!0})],p.prototype,"itemRelativeUrl",null),p=a([w("esri.portal.PortalItemResource")],p);const M=p;let g=class extends x{constructor(e){super(e),this.created=null,this.rating=null}};a([o()],g.prototype,"created",void 0),a([o()],g.prototype,"rating",void 0),g=a([w("esri.portal.PortalRating")],g);const f=g;var c;const G=new Set(["3DTiles Service","CSV","Feature Collection","Feature Service","Feed","GeoJson","Group Layer","Image Service","KML","Map Service","Media Layer","Scene Service","Stream Service","Vector Tile Service","WFS","WMS","WMTS"]),A=new Set(["KML","GeoJson","CSV"]);let s=c=class extends T(K){static from(e){return L(c,e)}constructor(e){super(e),this.access=null,this.accessInformation=null,this.apiKey=null,this.applicationProxies=null,this.avgRating=null,this.categories=null,this.classification=null,this.created=null,this.culture=null,this.description=null,this.extent=null,this.groupCategories=null,this.id=null,this.isOrgItem=!1,this.itemControl=null,this.licenseInfo=null,this.modified=null,this.name=null,this.numComments=null,this.numRatings=null,this.numViews=null,this.owner=null,this.ownerFolder=null,this.portal=null,this.screenshots=null,this.size=null,this.snippet=null,this.sourceJSON=null,this.sourceUrl=null,this.spatialReference=null,this.tags=null,this.title=null,this.type=null,this.typeKeywords=null,this.url=null}destroy(){this.portal=null}get displayName(){const e=this.type,t=this.typeKeywords||[];let r=e;return e==="Feature Service"||e==="Feature Collection"?r=t.includes("Table")?"Table":t.includes("Route Layer")?"Route Layer":t.includes("Markup")?"Markup":"Feature Layer":e==="Image Service"?r=t.includes("Elevation 3D Layer")?"Elevation Layer":t.includes("Tiled Imagery")?"Tiled Imagery Layer":"Imagery Layer":e==="Scene Service"?r="Scene Layer":e==="Video Service"?r="Video Layer":e==="Scene Package"?r="Scene Layer Package":e==="Stream Service"?r="Feature Layer":e==="Geoprocessing Service"?r=t.includes("Web Tool")?"Tool":"Geoprocessing Service":e==="Geoenrichment Service"?r="GeoEnrichment Service":e==="Geocoding Service"?r="Locator":e==="Microsoft Powerpoint"?r="Microsoft PowerPoint":e==="GeoJson"?r="GeoJSON":e==="Globe Service"?r="Globe Layer":e==="Vector Tile Service"?r="Tile Layer":e==="netCDF"?r="NetCDF":e==="Map Service"?r=t.includes("Spatiotemporal")||!t.includes("Hosted Service")&&!t.includes("Tiled")||t.includes("Relational")?"Map Image Layer":"Tile Layer":e?.toLowerCase().includes("add in")?r=e.replaceAll(/(add in)/gi,"Add-In"):e==="datastore catalog service"?r="Big Data File Share":e==="Compact Tile Package"?r="Tile Package (tpkx)":e==="Raster function template"?r="Raster Function Template":e==="OGCFeatureServer"?r="OGC Feature Layer":e==="web mapping application"&&t.includes("configurableApp")?r="Instant App":e==="Insights Page"?r="Insights Report":e==="Excalibur Imagery Project"?r="Excalibur Project":e==="3DTiles Service"?r="3D tiles layer":e==="3DTiles Package"&&(r="3D tiles package"),r}readExtent(e){return e&&e.length?new U(e[0][0],e[0][1],e[1][0],e[1][1]):null}get iconUrl(){const e=this.type?.toLowerCase()||"",t=this.typeKeywords||[],r="esri/images/portal/",n="16";let i,u=!1,d=!1,y=!1,v=!1,h=!1,b=!1,k=!1,S=!1;return e.indexOf("service")>0||e==="feature collection"||e==="kml"||e==="wms"||e==="wmts"||e==="wfs"?(u=t.includes("Hosted Service"),e==="feature service"||e==="feature collection"||e==="kml"||e==="wfs"?(d=t.includes("Table"),y=t.includes("Route Layer"),v=t.includes("Markup"),h=t.includes("Spatiotemporal"),b=t.includes("UtilityNetwork"),i=h&&d?"spatiotemporaltable":d?"table":y?"routelayer":v?"markup":h?"spatiotemporal":b?"utilitynetwork":u?"featureshosted":"features"):e==="map service"||e==="wms"||e==="wmts"?(h=t.includes("Spatiotemporal"),k=t.includes("Relational"),i=h||k?"mapimages":u||t.includes("Tiled")||e==="wmts"?"maptiles":"mapimages"):i=e==="scene service"?t.includes("Line")?"sceneweblayerline":t.includes("3DObject")?"sceneweblayermultipatch":t.includes("Point")?"sceneweblayerpoint":t.includes("IntegratedMesh")?"sceneweblayermesh":t.includes("PointCloud")?"sceneweblayerpointcloud":t.includes("Polygon")?"sceneweblayerpolygon":t.includes("Building")?"sceneweblayerbuilding":t.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":e==="image service"?t.includes("Elevation 3D Layer")?"elevationlayer":t.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":e==="stream service"?"streamlayer":e==="vector tile service"?"vectortile":e==="datastore catalog service"?"datastorecollection":e==="geocoding service"?"geocodeservice":e==="video service"?t.includes("Live Stream")?"livestreamvideolayer":"videolayer":e==="geoprocessing service"?t.includes("Web Tool")?"tool":"layers":e==="geodata service"?"geodataservice":e==="3dtiles service"?t.includes("3DObject")?"3dobjecttileslayer":t.includes("IntegratedMesh")?"integratedmeshtileslayer":"3dtileslayer":"layers"):e==="web map"||e==="cityengine web scene"?i="maps":e==="web scene"?i=t.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":e==="web mapping application"&&t.includes("configurableApp")?i="instantapps":e==="web mapping application"||e==="mobile application"||e==="application"||e==="operation view"||e==="desktop application"?i="apps":e==="map document"||e==="map package"||e==="published map"||e==="scene document"||e==="globe document"||e==="basemap package"||e==="mobile basemap package"||e==="mobile map package"||e==="project package"||e==="project template"||e==="pro map"||e==="layout"||e==="layer"&&t.includes("ArcGIS Pro")||e==="explorer map"&&t.indexOf("Explorer Document")?i="mapsgray":e==="service definition"||e==="shapefile"||e==="cad drawing"||e==="geojson"||e==="netcdf"||e==="administrative report"?i="datafiles":e==="360 vr experience"?i="360vr":e==="explorer add in"||e==="desktop add in"||e==="windows viewer add in"||e==="windows viewer configuration"?i="appsgray":e==="arcgis pro add in"||e==="arcgis pro configuration"?i="addindesktop":e==="pdf"?i="pdf":e==="microsoft word"?i="word":e==="microsoft excel"?i="excel":e==="microsoft powerpoint"?i="ppt":e==="rule package"||e==="file geodatabase"||e==="sqlite geodatabase"||e==="csv collection"||e==="kml collection"||e==="windows mobile package"||e==="map template"||e==="desktop application template"||e==="gml"||e==="arcpad package"||e==="code sample"||e==="document link"||e==="earth configuration"||e==="operations dashboard add in"||e==="rules package"||e==="workflow manager package"||e==="explorer map"&&t.includes("Explorer Mapping Application")||t.includes("Document")?i="datafilesgray":e==="network analysis service"||e==="geoprocessing service"||e==="geodata service"||e==="geometry service"||e==="geoprocessing package"||e==="locator package"||e==="geoprocessing sample"||e==="workflow manager service"?i="toolsgray":e==="layer"||e==="layer package"||e==="explorer layer"?i="layersgray":e==="analysis model"?i="analysismodel":e==="scene package"?i="scenepackage":e==="3dtiles package"?i="3dtileslayerpackage":e==="3dtiles service"?i="3dtileslayer":e==="mobile scene package"?i="mobilescenepackage":e==="tile package"||e==="compact tile package"?i="tilepackage":e==="task file"?i="taskfile":e==="report template"?i="report-template":e==="statistical data collection"?i="statisticaldatacollection":e==="insights workbook"?i="workbook":e==="insights model"?i="insightsmodel":e==="insights page"?i="insightspage":e==="insights theme"?i="insightstheme":e==="hub initiative"?i="hubinitiative":e==="hub page"?i="hubpage":e==="hub site application"?i="hubsite":e==="hub event"?i="hubevent":e==="hub project"?i="hubproject":e==="relational database connection"?i="relationaldatabaseconnection":e==="big data file share"?i="datastorecollection":e==="image collection"?i="imagecollection":e==="desktop style"?i="desktopstyle":e==="style"?i=t.includes("Dictionary")?"dictionarystyle":"style":e==="dashboard"?i="dashboard":e==="raster function template"?i="rasterprocessingtemplate":e==="vector tile package"?i="vectortilepackage":e==="ortho mapping project"?i="orthomappingproject":e==="ortho mapping template"?i="orthomappingtemplate":e==="solution"?i="solutions":e==="geopackage"?i="geopackage":e==="deep learning package"?i="deeplearningpackage":e==="real time analytic"?i="realtimeanalytics":e==="reality mapping project"?i="realitymappingproject":e==="big data analytic"?i="bigdataanalytics":e==="feed"?i="feed":e==="excalibur imagery project"?i="excaliburimageryproject":e==="notebook"?i="notebook":e==="storymap"?i="storymap":e==="survey123 add in"?i="survey123addin":e==="mission"?i="mission":e==="mission report"?i="missionreport":e==="mission template"?i="missiontemplate":e==="quickcapture project"?i="quickcaptureproject":e==="pro report"?i="proreport":e==="pro report template"?i="proreporttemplate":e==="urban model"?i="urbanmodel":e==="urban project"?i="urbanproject":e==="web experience"?i="experiencebuilder":e==="web experience template"?i="webexperiencetemplate":e==="experience builder widget"?i="experiencebuilderwidget":e==="experience builder widget package"?i="experiencebuilderwidgetpackage":e==="workflow"?i="workflow":e==="kernel gateway connection"?i="kernelgatewayconnection":e==="insights script"?i="insightsscript":e==="hub initiative template"?i="hubinitiativetemplate":e==="storymap theme"?i="storymaptheme":e==="knowledge graph"?i="knowledgegraph":e==="knowledge graph layer"?i="knowledgegraphlayer":e==="knowledge studio project"?i="knowledgestudio":e==="native application"?i="nativeapp":e==="native application installer"?i="nativeappinstaller":e==="web link chart"?i="linkchart":e==="knowledge graph web investigation"?i="investigation":e==="ogcfeatureserver"?i="features":e==="pro presentation"?i="propresentation":e==="pro project"?i="proproject":e==="insights workbook package"?i="insightsworkbookpackage":e==="apache parquet"?i="apacheparquet":e==="notebook code snippet library"?i="notebookcodesnippets":e==="suitability model"?i="suitabilitymodel":e==="esri classifier definition"?i="classifierdefinition":e==="esri classification schema"?i="classificationschema":e==="insights data engineering workbook"?i="dataengineeringworkbook":e==="insights data engineering model"?i="dataengineeringmodel":e==="deep learning studio project"?i="deeplearningproject":e==="discussion"?i="discussion":e==="allsource project"?i="allsourceproject":e==="api key"?i="apikey":e==="data pipeline"?i="datapipelines":e==="group layer"?(S=t.includes("Map"),i=S?"layergroup2d":"layergroup"):i=e==="media layer"?"onlinemedialayer":e==="form"?t.includes("Survey123")?"survey":"datafilesgray":e==="csv"?"csv":e==="image"?"image":"maps",i?C(r+i+n+".png"):null}get isLayer(){return this.type!=null&&G.has(this.type)}get itemCdnUrl(){return F(this.itemUrl)}get itemPageUrl(){const e=this.portal?.itemPageUrl;return e&&this.id?`${e}?id=${this.id}`:null}get itemUrl(){const e=this.portal?.restUrl;return e&&this.id?`${e}/content/items/${this.id}`:null}get thumbnailUrl(){const e=this.itemUrl,t=this.thumbnail;return e&&t?this.portal?.normalizeUrl(`${e}/info/${t}?f=json`)??null:null}get userItemUrl(){const e=this.portal?.restUrl;if(!e)return null;const t=this.owner||this.portal?.user?.username;return t?`${e}/content/users/${this.ownerFolder?`${t}/${this.ownerFolder}`:t}/items/${this.id}`:null}load(e){const t=this.portal??(this.portal=O.getDefault()),r=t.load(e).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?t.request(this.itemUrl,{signal:e!=null?e.signal:null,query:{token:this.apiKey}}):{}).then(n=>{this.sourceJSON=n,this.read(n)});return this.addResolvingPromise(r),Promise.resolve(this)}async addRating(e){const t={method:"post",query:{}};return e instanceof f&&(e=e.rating),e==null||isNaN(e)||typeof e!="number"||(t.query.rating=e),this.portal?(await this.portal.request(this.itemUrl+"/addRating",t),new f({rating:e,created:new Date})):null}clone(){const e={access:this.access,accessInformation:this.accessInformation,applicationProxies:l(this.applicationProxies),avgRating:this.avgRating,categories:l(this.categories),classification:l(this.classification),created:l(this.created),culture:this.culture,description:this.description,extent:l(this.extent),groupCategories:l(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:l(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:l(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l(this.typeKeywords),url:this.url};this.loaded&&(e.loadStatus="loaded");const t=new c({sourceJSON:this.sourceJSON}).set(e);return t._set("isOrgItem",this.isOrgItem),t}createPostQuery(){const e=this.toJSON();for(const t of["tags","typeKeywords","categories"])e[t]=e[t]?.join(", ");for(const t of["extent","classification"]){const r=e[t];r&&(e[t]=JSON.stringify(r))}return e}async deleteRating(){await this.portal.request(this.itemUrl+"/deleteRating",{method:"post"})}fetchData(e="json",t){return this.portal.request(this.itemUrl+"/data",{responseType:e,...t,query:{token:this.apiKey}})}async fetchRating(e){const t=await this.portal.request(this.itemUrl+"/rating",{query:{token:this.apiKey},...e});return t.rating!=null?(t.created=new Date(t.created),new f(t)):null}fetchRelatedItems(e,t){return this.portal.requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...e,token:this.apiKey},...t},c)}getThumbnailUrl(e){let t=this.thumbnailUrl;return t&&e&&(t+=`&w=${e}`),t}reload(){return this.portal.request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then(e=>(this.applicationProxies&&!Object.hasOwn(e,"appProxies")&&(this.applicationProxies=null),this.sourceJSON=e,this.read(e),this))}update(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e?.data,r={method:"post"};r.query=this.createPostQuery();for(const n in r.query)r.query[n]===null&&(r.query[n]="");return r.query.clearEmptyFields=!0,t!=null&&(typeof t=="string"?r.query.text=t:typeof t=="object"&&(r.query.text=JSON.stringify(t))),this.portal.request(`${this.userItemUrl}/update`,r).then(()=>this.reload())}):Promise.reject(new m("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(e){if(!this.id)throw new m("portal:item-does-not-exist","The item does not exist yet");await this.load();const{portal:t,itemUrl:r}=this;await t.signIn();const{copyResources:n,folder:i,tags:u,title:d}=e||{},y={method:"post",query:{copyPrivateResources:n==="all",folder:typeof i=="string"?i:i?.id,includeResources:!!n,tags:u?.join(","),title:d}},{itemId:v}=await t.request(`${r}/copy`,y);return new c({id:v,portal:t})}updateThumbnail(e){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const t=e.thumbnail,r=e.filename,n={method:"post"};if(typeof t=="string")D(t)?n.query={data:t}:n.query={url:N(t)},r!=null&&(n.query.filename=r);else{const i=new FormData;r!=null?i.append("file",t,r):i.append("file",t),n.body=i}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,n).then(()=>this.reload())}):Promise.reject(new m("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(e={},t){const{fetchResources:r}=await import("./resourceUtils-BvcNqO1_.js");return r(this,e,t)}async addResource(e,t,r){const{addOrUpdateResources:n}=await import("./resourceUtils-BvcNqO1_.js");return e.portalItem=this,await n(this,[{resource:e,content:t,compress:r?.compress,access:r?.access}],"add",r),e}async removeResource(e,t){const{removeResource:r}=await import("./resourceUtils-BvcNqO1_.js");if(e.portalItem&&e.portalItem.itemUrl!==this.itemUrl)throw new m("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return r(this,e,t)}async removeAllResources(e){const{removeAllResources:t}=await import("./resourceUtils-BvcNqO1_.js");return t(this,e)}resourceFromPath(e){return new M({portalItem:this,path:e})}toJSON(){const e=this.extent,t={accessInformation:this.accessInformation,categories:l(this.categories),classification:l(this.classification),created:this.created?.getTime(),description:this.description,extent:e&&[[e.xmin,e.ymin],[e.xmax,e.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified?.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:l(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:l(this.typeKeywords),url:this.url};return $(t)}static fromJSON(e){if(!e)return null;if(e.declaredClass)throw new Error("JSON object is already hydrated");return new c({sourceJSON:e})}_getPostQuery(){const e=this.toJSON();for(const t in e)t==="tags"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="typeKeywords"&&e[t]!==null&&(e[t]=e[t].join(", ")),t==="extent"&&e[t]&&(e[t]=JSON.stringify(e[t]));return e}};a([o({type:["private","shared","org","public"]})],s.prototype,"access",void 0),a([o()],s.prototype,"accessInformation",void 0),a([o({type:String})],s.prototype,"apiKey",void 0),a([o({json:{read:{source:"appProxies"}}})],s.prototype,"applicationProxies",void 0),a([o()],s.prototype,"avgRating",void 0),a([o()],s.prototype,"categories",void 0),a([o()],s.prototype,"classification",void 0),a([o({type:Date})],s.prototype,"created",void 0),a([o()],s.prototype,"culture",void 0),a([o()],s.prototype,"description",void 0),a([o({readOnly:!0})],s.prototype,"displayName",null),a([o({type:U})],s.prototype,"extent",void 0),a([J("extent")],s.prototype,"readExtent",null),a([o()],s.prototype,"groupCategories",void 0),a([o({readOnly:!0})],s.prototype,"iconUrl",null),a([o()],s.prototype,"id",void 0),a([o({readOnly:!0})],s.prototype,"isLayer",null),a([o({type:Boolean,readOnly:!0})],s.prototype,"isOrgItem",void 0),a([o()],s.prototype,"itemControl",void 0),a([o({readOnly:!0})],s.prototype,"itemPageUrl",null),a([o({readOnly:!0})],s.prototype,"itemUrl",null),a([o()],s.prototype,"licenseInfo",void 0),a([o({type:Date})],s.prototype,"modified",void 0),a([o()],s.prototype,"name",void 0),a([o()],s.prototype,"numComments",void 0),a([o()],s.prototype,"numRatings",void 0),a([o()],s.prototype,"numViews",void 0),a([o()],s.prototype,"owner",void 0),a([o()],s.prototype,"ownerFolder",void 0),a([o({type:O})],s.prototype,"portal",void 0),a([o()],s.prototype,"screenshots",void 0),a([o()],s.prototype,"size",void 0),a([o()],s.prototype,"snippet",void 0),a([o()],s.prototype,"sourceJSON",void 0),a([o({type:String})],s.prototype,"sourceUrl",void 0),a([o({type:String})],s.prototype,"spatialReference",void 0),a([o()],s.prototype,"tags",void 0),a([o()],s.prototype,"thumbnail",void 0),a([o({readOnly:!0})],s.prototype,"thumbnailUrl",null),a([o()],s.prototype,"title",void 0),a([o()],s.prototype,"type",void 0),a([o()],s.prototype,"typeKeywords",void 0),a([o({type:String,json:{read(e,t){if(A.has(t.type)){const r=this.portal?.restUrl;e||=r&&this.id?`${r}/content/items/${this.id}/data`:null}return e}}})],s.prototype,"url",void 0),a([o({readOnly:!0})],s.prototype,"userItemUrl",null),s=c=a([w("esri.portal.PortalItem")],s);const E=s;export{E as default};
