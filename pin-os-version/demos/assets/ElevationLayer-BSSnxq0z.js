const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ElevationQuery-DKdjWO9o.js","./main-DCUo5ucN.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css","./projection-9wSOojrC.js","./projectBuffer-CWdhG1s6.js","./TileKey-DZd6gJy7.js"])))=>i.map(i=>d[i]);
import{_ as c}from"./preload-helper-ExcqyqRp.js";import{n as f,aJ as g,eZ as w,G as u,g4 as b,s as V,J as T,U as m,by as S,q as o,u as l,z as y,C as D}from"./main-DCUo5ucN.js";import{S as L}from"./MultiOriginJSONSupport-DHbkYRYq.js";import{v as $}from"./HeightModelInfo-BLvW8_q5.js";import{f as x}from"./Layer-Cf6p-iG3.js";import{p as k}from"./ArcGISCachedService-BBWiUWJG.js";import{l as I}from"./ArcGISService-BvZg6fHv.js";import{b as E}from"./OperationalLayer-A9Ypz4jy.js";import{j as M}from"./PortalLayer-CUb6_bl6.js";import{y as N}from"./commonProperties-tLZ4HaFv.js";import{p as O}from"./workers-DXe5Yesm.js";import"./TimeExtent-Bij4_KtL.js";import"./TileInfo-CnxweRcW.js";import"./TileKey-DZd6gJy7.js";import"./TileInfoTilemapCache-zzn2YJlN.js";import"./TilemapCache-CCJwXL3F.js";import"./ByteSizeUnit-BsxeN7wM.js";import"./LRUCache-vsrSNm30.js";import"./arcgisLayerUrl-nx2Aa-SC.js";import"./PortalItem-CrAmt9yr.js";import"./portalItemUtils-wLQxgb_r.js";import"./projection-9wSOojrC.js";import"./projectBuffer-CWdhG1s6.js";import"./ElevationInfo-CWuMdahV.js";import"./lengthUtils-Dz_vbebf.js";class j{constructor(e,t,i,a){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=a)}get hasNoDataValues(){if(this._hasNoDataValues==null){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(this._minValue!=null)return;const{noDataValue:e,values:t}=this;let i=1/0,a=-1/0,h=!0;for(const n of t)n===e?this._hasNoDataValues=!0:(i=n<i?n:i,a=n>a?n:a,h=!1);h?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=a>-3e38?a:0)}}class P{constructor(e,t,i,a,h={}){this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=O(e,{...h,schedule:a}).then(n=>{if(this._thread===void 0){this._thread=n,this._promise=null,h.hasInitialize&&this.broadcast({},"initialize");for(const p of this._listeners)this._connectListener(p)}else n.close()}),this._promise.catch(n=>f.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${n}`))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),g(()=>{i.removed=!0,w(this._listeners,i),this._thread&&i.threadHandle!=null&&i.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const a=this._transferLists[e],h=a?a(t):[];return this._thread.invoke(e,t,{transferList:h,signal:i})}return this._promise?this._promise.then(()=>(u(i),this.invokeMethod(e,t,i))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}class v extends P{constructor(e=null){super("LercWorker","_decode",{_decode:t=>[t.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&e.byteLength!==0?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(d.forEach((e,t)=>{e===this&&d.delete(t)}),this.destroy())}}const d=new Map;function C(r=null){let e=d.get(r);return e||(r!=null?(e=new v(t=>r.immediate.schedule(t)),d.set(r,e)):(e=new v,d.set(null,e))),++e.ref,e}let s=class extends k(I(E(M(L(x))))){constructor(...r){super(...r),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=C()}normalizeCtorArgs(r,e){return typeof r=="string"?{url:r,...e}:r}destroy(){this._lercDecoder=b(this._lercDecoder)}readCapabilities(r,e){const t=e.capabilities&&e.capabilities.split(",").map(i=>i.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(r,e){let t=e.currentVersion;return t||(t=9.3),t}load(r){const e=r!=null?r.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{if(t.typeKeywords){for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0}throw new V("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},r).catch(T).then(()=>this._fetchImageService(e))),Promise.resolve(this)}fetchTile(r,e,t,i){const a=(i=i||{signal:null}).signal!=null?i.signal:i.signal=new AbortController().signal,h={responseType:"array-buffer",signal:a},n={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(r,e,t,i)).then(()=>m(this.getTileUrl(r,e,t),h)).then(p=>this._lercDecoder.decode(p.data,n,a)).then(p=>new j(p))}getTileUrl(r,e,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,a=S({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${r}/${e}/${t}${a?"?"+a:""}`}async queryElevation(r,e){const{ElevationQuery:t}=await c(()=>import("./ElevationQuery-DKdjWO9o.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return u(e),new t().query(this,r,e)}async createElevationSampler(r,e){const{ElevationQuery:t}=await c(()=>import("./ElevationQuery-DKdjWO9o.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return u(e),new t().createSampler(this,r,e)}_fetchTileAvailability(r,e,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(r,e,t,i):Promise.resolve("unknown")}async _fetchImageService(r){if(this.sourceJSON)return this.sourceJSON;const e={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:r},t=await m(this.parsedUrl.path,e);t.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[_]}};o([l({readOnly:!0})],s.prototype,"capabilities",void 0),o([y("service","capabilities",["capabilities"])],s.prototype,"readCapabilities",null),o([l({json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),o([l({readOnly:!0,type:$})],s.prototype,"heightModelInfo",void 0),o([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),o([l({type:["show","hide"]})],s.prototype,"listMode",void 0),o([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"minScale",void 0),o([l({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],s.prototype,"maxScale",void 0),o([l({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),o([l({type:["ArcGISTiledElevationServiceLayer"]})],s.prototype,"operationalLayerType",void 0),o([l()],s.prototype,"sourceJSON",void 0),o([l({json:{read:!1},value:"elevation",readOnly:!0})],s.prototype,"type",void 0),o([l(N)],s.prototype,"url",void 0),o([l()],s.prototype,"version",void 0),o([y("version",["currentVersion"])],s.prototype,"readVersion",null),s=o([D("esri.layers.ElevationLayer")],s);const _=Symbol("default-fetch-tile");s.prototype.fetchTile[_]=!0;const he=s;export{he as default};
