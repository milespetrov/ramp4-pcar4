import{J as _,D as v,I as S,U as c,by as T,s as u,bz as b,q as s,u as a,z as w,v as O,bA as $,C as R}from"./main-CFpM9i38.js";import{t as U}from"./loadAll-BO-cCZ82.js";import{S as W}from"./MultiOriginJSONSupport-B7ytswiV.js";import{f as P}from"./Layer-DokEcK1i.js";import{i as j}from"./APIKeyMixin-CpY2YeUF.js";import{p as A}from"./ArcGISCachedService-Dnea6NI8.js";import{m as I,f as L,t as B}from"./SublayersOwner-QImn9nDp.js";import{l as C}from"./ArcGISService-E9P0HhEZ.js";import{l as M}from"./BlendLayer-4lAz92LZ.js";import{e as N}from"./CustomParametersMixin-DE9LwW0y.js";import{b as D}from"./OperationalLayer-4Ce5UdNS.js";import{j as k}from"./PortalLayer-BVDjikO1.js";import{f as J}from"./RefreshableLayer-Vtblmz_O.js";import{t as q}from"./ScaleRangeLayer-CQPZePHI.js";import{d as G,g as V,p as z}from"./arcgisLayerUrl-BwegKRVK.js";import{y as E}from"./commonProperties-C3O0vMzk.js";import{o as y}from"./imageBitmapUtils-DEjCuZYO.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-Ba88HmAN.js";import"./TileInfo-CJtkQHM-.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-D1IHzSbe.js";import"./TilemapCache-Q2NhHQTW.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./LRUCache-D6cG4Dag.js";import"./Version-CvG70TWQ.js";import"./portalItemUtils-CA6xs-9P.js";import"./projection-B6HHT9iG.js";import"./projectBuffer-ChAiX47d.js";import"./CollectionFlattener-D3OGDgXt.js";import"./UniqueValueRenderer-C8E0oRoy.js";import"./RendererLegendOptions-4cnCq2Kj.js";import"./diffUtils-CAn90oH_.js";import"./colorRamps-yllGSLg_.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-Mu3Qyzix.js";import"./compilerUtils-DbmoCggA.js";import"./lengthUtils-DL2C2FcD.js";import"./styleUtils-CrTp4sQg.js";import"./jsonUtils-Cm_6EJQ9.js";import"./FieldsIndex-BFzw4JMs.js";import"./UnknownTimeZone-CpmmCxr-.js";import"./OverrideHelper-Cm1qKte1.js";import"./colorUtils-DnGqU4z1.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-B3GoULmS.js";import"./heatmapUtils-CAi8r2D6.js";import"./QueryTask-D4Coexo-.js";import"./infoFor3D-_5f2f6Um.js";import"./Query-B8kTaKZ5.js";import"./Field-CoyqNdTx.js";import"./fieldType-BNObABBN.js";import"./utils-OYqyAMOQ.js";import"./executeForIds-CKKszL_Y.js";import"./query-CuxDl8gq.js";import"./normalizeUtils-DSjrhV6I.js";import"./normalizeUtilsCommon-CDOijakI.js";import"./utils-CdsRgP19.js";import"./pbfQueryUtils-BV9Mf81h.js";import"./pbf-V-UXiyPI.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-En03aYOo.js";import"./executeQueryPBF-VPG_f2VB.js";import"./featureConversionUtils-BqCAc55I.js";import"./FeatureSet-DCgJveuP.js";import"./executeQueryJSON-Di074A2o.js";import"./featureLayerUtils-BhMw26wZ.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-DCAarzFA.js";import"./FeatureType-DQs_5_5J.js";import"./FeatureTemplate-8tjHYiUB.js";import"./labelingInfo-ujS7J9Be.js";import"./labelUtils-DFaooTfA.js";import"./LayerFloorInfo-Bc1ceYE0.js";import"./Relationship-B00YTWv7.js";import"./serviceCapabilitiesUtils-C3FUipNy.js";import"./popupUtils-DycHHfr4.js";import"./sublayerUtils-q8GANXQu.js";import"./jsonUtils-zX6zkWSv.js";import"./parser-D7rTb1C8.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BZ-Redsx.js";import"./PortalItem-DJY8hg5d.js";import"./ElevationInfo-BFG6iNgv.js";var d;const f=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let i=d=class extends M(q(I(A(L(D(k(C(W(J(j(N(P)))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_).then(()=>this._fetchService(r))),Promise.resolve(this)}get attributionDataUrl(){const e=this.parsedUrl?.path.toLowerCase();return e?this._getDefaultAttribution(this._getMapName(e)):null}readSpatialReference(e,r){return(e=e||r.tileInfo?.spatialReference)&&v.fromJSON(e)}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const p=e.slice().reverse().flatten(({sublayers:n})=>n&&n.toArray().reverse()).toArray(),l=[],m={writeSublayerStructure:!1,...o};p.forEach(n=>{const h=n.write({},m);l.push(h)}),l.some(n=>Object.keys(n).length>1)&&(r.layers=l)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl?.path)}castTileServers(e){return Array.isArray(e)?e.map(r=>S(r).path):null}fetchTile(e,r,t,o={}){const{signal:p}=o,l=this.getTileUrl(e,r,t),m={responseType:"image",signal:p,query:{...this.refreshParameters}};return c(l,m).then(n=>n.data)}async fetchImageBitmapTile(e,r,t,o={}){const{signal:p}=o;if(this.fetchTile!==d.prototype.fetchTile){const h=await this.fetchTile(e,r,t,o);return y(h,e,r,t,p)}const l=this.getTileUrl(e,r,t),m={responseType:"blob",signal:p,query:{...this.refreshParameters}},{data:n}=await c(l,m);return y(n,e,r,t,p)}getTileUrl(e,r,t){const o=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,p=T({...this.parsedUrl?.query,blankTile:!o&&null,...this.customParameters,token:this.apiKey}),l=this.tileServers;return`${l&&l.length?l[r%l.length]:this.parsedUrl?.path}/tile/${e}/${r}/${t}${p?"?"+p:""}`}loadAll(){return U(this,e=>{e(this.allSublayers)})}_fetchService(e){return new Promise((r,t)=>{if(this.sourceJSON){if(this.sourceJSON.bandCount!=null&&this.sourceJSON.pixelSizeX!=null)throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void r({data:this.sourceJSON})}if(!this.parsedUrl)throw new u("tile-layer:undefined-url","layer's url is not defined");const o=G(this.parsedUrl.path);if(o!=null&&o.serverType==="ImageServer")throw new u("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");c(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(r,t)}).then(r=>{let t=this.url;if(r.ssl&&(t=this.url=t.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),this.version===10.1&&!V(t))return this._fetchServerVersion(t,e).then(o=>{this.read({currentVersion:o})}).catch(()=>{})})}_fetchServerVersion(e,r){if(!z(e))return Promise.reject();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return c(t,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r}).then(o=>{if(o.data&&o.data.currentVersion)return o.data.currentVersion;throw new u("tile-layer:version-not-available")})}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/mapserver/i);return r?r[2]:void 0}_getDefaultAttribution(e){if(e==null)return null;let r;e=e.toLowerCase();for(let t=0,o=f.length;t<o;t++)if(r=f[t],r.toLowerCase().includes(e))return b("//static.arcgis.com/attribution/"+r);return null}_getDefaultTileServers(e){if(e==null)return[];const r=e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i)!==-1,t=e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i)!==-1;return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}get hasOverriddenFetchTile(){return!this.fetchTile[g]}};s([a({readOnly:!0})],i.prototype,"attributionDataUrl",null),s([a({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([a({json:{read:!0,write:!0}})],i.prototype,"blendMode",void 0),s([a({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([a({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({type:Boolean})],i.prototype,"resampling",void 0),s([a()],i.prototype,"sourceJSON",void 0),s([a({type:v})],i.prototype,"spatialReference",void 0),s([w("spatialReference",["spatialReference","tileInfo"])],i.prototype,"readSpatialReference",null),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a({readOnly:!0})],i.prototype,"sublayers",void 0),s([O("sublayers",{layers:{type:[B]}})],i.prototype,"writeSublayers",null),s([a({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([a()],i.prototype,"tileServers",null),s([$("tileServers")],i.prototype,"castTileServers",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),s([a(E)],i.prototype,"url",void 0),i=d=s([R("esri.layers.TileLayer")],i);const g=Symbol("default-fetch-tile");i.prototype.fetchTile[g]=!0;const Ur=i;export{Ur as default};
