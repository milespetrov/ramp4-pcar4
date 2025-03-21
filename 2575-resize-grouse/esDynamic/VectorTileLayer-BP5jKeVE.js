import{n as Z,s as _,eL as ee,hQ as te,I as x,bw as re,U as A,D,C as se,E as ie,cn as S,ao as le,fp as E,aK as oe,f as g,dm as j,Z as T,au as b,eu as M,Q as B,L as C,R as ae,hR as N,cI as k,c8 as q,hS as Q,bv as ne,G as P,hT as ue,hU as pe,ca as ce,k as c,o as h,B as he,q as ye,u as V,A as de}from"./main-BriipcPO.js";import{S as me}from"./MultiOriginJSONSupport-C4XOUA__.js";import{f as fe}from"./Layer-KPZAykNk.js";import{i as ge}from"./APIKeyMixin-aLSRShH3.js";import{p as Ae}from"./ArcGISCachedService-DkdMkCr8.js";import{l as Se}from"./ArcGISService-JkZUpPZX.js";import{l as we}from"./BlendLayer-Bt-8dLT6.js";import{e as xe}from"./CustomParametersMixin-B_YLYitm.js";import{b as ve}from"./OperationalLayer-CiA2BBXY.js";import{j as _e}from"./PortalLayer-BN9IXXL2.js";import{f as be}from"./RefreshableLayer-NOh3oDuh.js";import{t as Ie}from"./ScaleRangeLayer-BHy5OWDu.js";import{z as I,p as Ue}from"./TileInfo-tawkQhUt.js";import{T as F}from"./TilemapCache-BHaKuXi0.js";import{e as $}from"./TileKey-B-8zNi76.js";import{e as Re}from"./jsonContext-DdQo5Usr.js";import{l as Te}from"./StyleRepository-DwUrPy4f.js";import{t as W}from"./capabilities-agoTWNzb.js";let U=null;function Pe(e){if(U)return U;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return U=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),U}const z=1.15;class G{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>z;const{width:r,height:s,data:i,json:o}=await this._getSpriteData(this._spriteSource,t),l=Object.keys(o);if(!l||l.length===0||!i)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=s;const u=Math.max(this._maxTextureSize,4096);if(r>u||s>u){const a=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${u} pixels}`;throw Z.getLogger("esri.layers.support.SpriteSource").error(a),new _("SpriteSource",a)}let n;for(let a=0;a<i.length;a+=4)n=i[a+3]/255,i[a]=i[a]*n,i[a+1]=i[a+1]*n,i[a+2]=i[a+2]*n;this.image=i}async _getSpriteData(t,r){if(t.type==="image"){let y,d;if(this.devicePixelRatio<z){if(!t.spriteSource1x)throw new _("SpriteSource","no image data provided for low resolution sprites!");y=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new _("SpriteSource","no image data provided for high resolution sprites!");y=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in y&&"height"in y&&"data"in y&&(ee(y.data)||te(y.data))?{width:y.width,height:y.height,data:new Uint8Array(y.data),json:d}:{...J(y),json:d}}const s=x(this.baseURL),i=s.query?"?"+re(s.query):"",o=this._isRetina?"@2x":"",l=`${s.path}${o}.${this._spriteImageFormat}${i}`,u=`${s.path}${o}.json${i}`,[n,a]=await Promise.all([A(u,r),A(l,{responseType:"image",...r})]);return{...J(a.data),json:n.data}}}function J(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(s.data)}}let Oe=class{constructor(e){this.url=e}destroy(){this._tileIndexPromise=null}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=A(this.url).then(e=>e.data.index)),this._tileIndexPromise}async dataKey(e,t){const r=await this.fetchTileIndex();return D(t),this._getIndexedDataKey(r,e)}_getIndexedDataKey(e,t){const r=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let s=t;for(;s.level!==0;)s=new $(s.level-1,s.row>>1,s.col>>1,s.world),r.push(s);let i,o,l=e,u=r.pop();if(l===1)return u;for(;r.length;)if(i=r.pop(),o=(1&i.col)+((1&i.row)<<1),l){if(l[o]===0){u=null;break}if(l[o]===1){u=i;break}u=i,l=l[o]}return u}},Le=class{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}destroy(){this._tilemap=se(this._tilemap),this._tileIndexPromise=null}async fetchTileIndex(e){return this._tileIndexPromise||(this._tileIndexPromise=A(this._tileIndexUrl,{query:{...e?.query}}).then(t=>t.data.index)),this._tileIndexPromise}dataKey(e,t){const{level:r,row:s,col:i}=e,o=new $(e);return this._tilemap.fetchAvailabilityUpsample(r,s,i,o,t).then(()=>(o.world=e.world,o)).catch(l=>{if(ie(l))throw l;return null})}};class De{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){(this._promise==null||E(this._abortController?.signal))&&(this._promise=this._makeRequest(this._tileUrl));const r=this._abortOptions;return r.push(t),oe(t,()=>{r.every(s=>E(s))&&this._abortController.abort()}),this._promise.then(s=>g(s))}async _makeRequest(t){this._abortController=new AbortController;const{data:r}=await A(t,{responseType:"array-buffer",signal:this._abortController.signal});return r}}const K=new Map;function Ee(e,t,r,s,i){const o=x(e),l=o.query;if(l)for(const[n,a]of Object.entries(l))switch(a){case"{x}":l[n]=s.toString();break;case"{y}":l[n]=r.toString();break;case"{z}":l[n]=t.toString()}const u=o.path;return je(S(u.replaceAll(/\{z\}/gi,t.toString()).replaceAll(/\{y\}/gi,r.toString()).replaceAll(/\{x\}/gi,s.toString()),{...o.query}),i)}function je(e,t){return le(K,e,()=>new De(e)).getData(t).finally(()=>K.delete(e))}class Me{constructor(t,r,s){this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.initialExtent=null,this.name=t,this.sourceUrl=r;const i=x(this.sourceUrl),o=g(s),l=o.tiles;if(i)for(let f=0;f<l.length;f++){const m=x(l[f]);m&&(j(m.path)||(m.path=T(i.path,m.path)),l[f]=S(m.path,{...i.query,...m.query}))}this.tileServers=l;const u=s.capabilities&&s.capabilities.split(",").map(f=>f.toLowerCase().trim()),n=s?.exportTilesAllowed===!0,a=u?.includes("tilemap")===!0,y=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:a},exportTiles:n?{maxExportTilesCount:+y}:null},this.tileInfo=I.fromJSON(o.tileInfo);const d=s.tileMap?S(T(i.path,s.tileMap),i.query??{}):null;a?(this.type="vector-tile",this.tilemap=new Le(new F({layer:{parsedUrl:i,tileInfo:this.tileInfo},minLOD:o.minLOD??this.tileInfo.lods[0].level,maxLOD:o.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}),d)):d&&(this.tilemap=new Oe(d)),this.fullExtent=b.fromJSON(s.fullExtent),this.initialExtent=b.fromJSON(s.initialExtent)}destroy(){this.tilemap?.destroy()}async getRefKey(t,r){return this.tilemap?this.tilemap.dataKey(t,r):t}requestTile(t,r,s,i){const o=this.tileServers[r%this.tileServers.length];return Ee(o,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,o=s.lods,l=Math.min(i.length,o.length);for(let u=0;u<l;u++){const n=i[u],a=o[u];if(n.level!==a.level||Math.round(n.scale)!==Math.round(a.scale))return!1}return!0}}async function Be(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];return await w(r,"esri",e,i,t),{layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&v(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&v(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName}}function v(...e){let t;for(const r of e)r!=null&&(M(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=j(r)?r:T(t,r));return t?B(t):void 0}async function w(e,t,r,s,i){let o,l,u;if(D(i),typeof r=="string"){const a=C(r);u=await A(a,{...i,responseType:"json",query:{f:"json",...i?.query}}),u.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=a,l=a}else r!=null&&(u={data:r},o=r.jsonUrl||null,l=s);const n=u?.data;if(Y(n))return e.styleUrl=o||null,Ne(e,n,l,i);if(Ce(n))return e.sourceUrl?H(e,n,l,!1,t,i):(e.sourceUrl=o||null,H(e,n,l,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function X(e){return typeof e=="object"&&!!e&&"tilejson"in e&&e.tilejson!=null}function Y(e){return!!e&&"sources"in e&&!!e.sources}function Ce(e){return!Y(e)}async function Ne(e,t,r,s){const i=r?ae(r):N();e.styleBase=i,e.style=t,t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await w(e,"esri",v(i,l.url),void 0,s):o.push(w(e,"esri",l,i,s))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(w(e,l,v(i,t.sources[l].url),void 0,s)):t.sources[l].tiles&&o.push(w(e,l,t.sources[l],i,s)));await Promise.all(o)}async function H(e,t,r,s,i,o){const l=r?B(r)+"/":N(),u=ke(t),n=new Me(i,S(l,o?.query??{}),u);if(!s&&e.primarySourceName in e.sourceNameToSource){const a=e.sourceNameToSource[e.primarySourceName];if(!a.isCompatibleWith(n))return;n.fullExtent!=null&&(a.fullExtent!=null?a.fullExtent.union(n.fullExtent):a.fullExtent=n.fullExtent.clone()),a.tileInfo&&n.tileInfo&&a.tileInfo.lods.length<n.tileInfo.lods.length&&(a.tileInfo=n.tileInfo)}if(s&&(e.sourceBase=l,e.source=t,e.validatedSource=u,e.primarySourceName=i),e.sourceNameToSource[i]=n,!X(e)&&"defaultStyles"in t&&!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?w(e,"",v(l,t.defaultStyles,"root.json"),void 0,o):w(e,"",t.defaultStyles,v(l,"root.json"),o)}}function ke(e){if(qe(e)){const a=e?.tileInfo;return a!=null&&(a.rows==null&&(a.rows=512),a.cols==null&&(a.cols=512)),e}const t={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100,latestWkid:3857}};let r=null;if(X(e)){const{bounds:a}=e;if(a){const y=k({x:a[0],y:a[1],spatialReference:g(q)}),d=k({x:a[2],y:a[3],spatialReference:g(q)});r={xmin:y.x,ymin:y.y,xmax:d.x,ymax:d.y,spatialReference:g(Q)}}}r===null&&(r=t);let s=78271.51696400007,i=2958287637957775e-7;const o=[],l=e.hasOwnProperty("maxzoom")&&e.maxzoom!=null?+e.maxzoom:22,u=0,n=0;for(let a=0;a<=l;a++)o.push({level:a,scale:i,resolution:s}),s/=2,i/=2;return{capabilities:"TilesOnly",initialExtent:r,fullExtent:t,minScale:u,maxScale:n,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:o,spatialReference:g(Q)}}}function qe(e){return e.hasOwnProperty("tileInfo")}const R=1e-6;function Qe(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=R||Math.abs(r.y-s.y)>=R)return!1;let i,o;e.lods[0].scale>t.lods[0].scale?(i=e,o=t):(o=e,i=t);for(let l=i.lods[0].scale;l>=o.lods[o.lods.length-1].scale-R;l/=2)if(Math.abs(l-o.lods[0].scale)<R)return!0;return!1}function Ve(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],s=e.format,i=e.dpi,o=new ne({x:e.origin.x,y:e.origin.y}),l=e.spatialReference,u=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],a=u.scale,y=u.resolution,d=n.scale,f=[];let m=a,O=y,L=0;for(;m>d;)f.push(new Ue({level:L,resolution:O,scale:m})),L++,m/=2,O/=2;return new I({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:f,spatialReference:l})}let p=class extends we(Ie(be(Ae(Se(ve(_e(xe(ge(me(fe)))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.path=null,this.refreshInterval=0,this.style=null,this.tilemapCache=null,this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e?.destroy();this.primarySource?.destroy(),this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch(P).then(async()=>{if(!this.portalItem?.id)return;const r=`${this.portalItem.itemCdnUrl}/resources/styles/root.json`;(await A(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Re(this.portalItem,"portal-item"))}).catch(P).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e?.serviceUrl&&x(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?S(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){return this.primarySource?.fullExtent||null}get initialExtent(){return this.primarySource?.initialExtent||null}get parsedUrl(){return this.serviceUrl?x(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo?.serviceUrl||null}get spatialReference(){return this.tileInfo?.spatialReference??null}get styleUrl(){return this.currentStyleInfo?.styleUrl||null}writeStyleUrl(e,t){e&&M(e)&&(e=`https:${e}`);const r=ue(e);t.styleUrl=pe(e,r)}get tileInfo(){const e=[];for(const r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);let t=this.primarySource?.tileInfo||new I;if(e.length>1)for(let r=0;r<e.length;r++)Qe(t,e[r].tileInfo)&&(t=Ve(t,e[r].tileInfo));return t}readTilemapCache(e,t){return t.capabilities?.includes("Tilemap")?new F({layer:this}):null}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=W().maxTextureSize,s=this.currentStyleInfo?.spriteUrl?S(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,i=new G({type:"url",spriteUrl:s,pixelRatio:e,spriteFormat:this.currentStyleInfo?.spriteFormat},r);await i.load(t),this._spriteSourceMap.set(e,i)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=W().maxTextureSize,s=e.spriteUrl,i=s?S(s,{...this.customParameters,token:this.apiKey}):null;if(!i&&e.type==="url")return null;const o=new G(e,r);try{await o.load(t);const l=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),i&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=i),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){P(l)}return null}async loadStyle(e,t){const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||(this._loadingTask?.abort(),this._loadingTask=ce(s=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:s})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return g(this.styleRepository?.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return g(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return g(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return t?.origin&&!this.styleUrl?(t.messages&&t.messages.push(new _("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Be(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Pe("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new Te(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^/]+)?\/arcgis\/rest\/services\/([^/]+(\/[^/]+)*)\/vectortileserver/i),r=["OpenBasemap_v2","OpenBasemap_GCS_v2","OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2","World_Hillshade_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const o of r)if(o.toLowerCase().includes(s))return C(`//static.arcgis.com/attribution/Vector${i}/${o}`)}async _loadStyle(e){return this._loadingTask?.promise??this.loadStyle(null,e)}};c([h({readOnly:!0})],p.prototype,"attributionDataUrl",null),c([h({type:["show","hide"]})],p.prototype,"listMode",void 0),c([h({json:{read:!0,write:!0}})],p.prototype,"blendMode",void 0),c([h({readOnly:!0,json:{read:!1}})],p.prototype,"capabilities",null),c([h({readOnly:!0})],p.prototype,"currentStyleInfo",void 0),c([h({json:{read:!1},readOnly:!0,type:b})],p.prototype,"fullExtent",null),c([h({json:{read:!1},readOnly:!0,type:b})],p.prototype,"initialExtent",null),c([h({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),c([h({type:["VectorTileLayer"]})],p.prototype,"operationalLayerType",void 0),c([h({readOnly:!0})],p.prototype,"parsedUrl",null),c([h({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],p.prototype,"path",void 0),c([h({type:Number,json:{write:!1,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],p.prototype,"refreshInterval",void 0),c([h()],p.prototype,"style",void 0),c([h({readOnly:!0})],p.prototype,"serviceUrl",null),c([h({type:he,readOnly:!0})],p.prototype,"spatialReference",null),c([h({readOnly:!0})],p.prototype,"styleRepository",void 0),c([h({readOnly:!0})],p.prototype,"sourceNameToSource",void 0),c([h({readOnly:!0})],p.prototype,"primarySource",void 0),c([h({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],p.prototype,"styleUrl",null),c([ye(["portal-item","web-document"],"styleUrl")],p.prototype,"writeStyleUrl",null),c([h({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:I})],p.prototype,"tileInfo",null),c([h()],p.prototype,"tilemapCache",void 0),c([V("service","tilemapCache",["capabilities","tileInfo"])],p.prototype,"readTilemapCache",null),c([h({json:{read:!1},readOnly:!0,value:"vector-tile"})],p.prototype,"type",void 0),c([h({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],p.prototype,"url",void 0),c([h({readOnly:!0})],p.prototype,"version",void 0),c([V("version",["version","currentVersion"])],p.prototype,"readVersion",null),p=c([de("esri.layers.VectorTileLayer")],p);const Fe=p;export{Fe as default};
