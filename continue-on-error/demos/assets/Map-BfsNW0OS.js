const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ElevationQuery-C3_1eqNZ.js","./main-CT4A7-UF.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./projection-CzwB5LLH.js","./projectBuffer-BExSDksD.js","./TileKey-DZd6gJy7.js","./layersCreator-BPXM5c53.js","./portalLayers-g-7vxw-7.js","./associatedFeatureServiceUtils-DCa_nOGm.js","./arcgisLayerUrl-BVfqQngv.js","./PortalItem-BO3lOf55.js","./fetchService-BJaT2lYu.js","./portalItemUtils-DmUJPpNS.js","./styleUtils-B91tEJcQ.js"])))=>i.map(i=>d[i]);
import{q as s,bm as G,C as I,A as P,dc as B,f as D,V as N,H as M,n as m,E as f,cZ as R,s as U,G as b,h as C,u as i,v as J,br as E,hw as V,gx as q,aE as H,aG as W,f4 as z,aJ as K,d3 as Q,d2 as k,K as Z,ei as F,bS as X,aF as Y,bA as T}from"./main-CT4A7-UF.js";import{s as S,F as c}from"./Basemap-BcX4OVKo.js";import{_ as $}from"./preload-helper-ExcqyqRp.js";import{o as ee}from"./compilerUtils-CMEqDd8A.js";import{t as te}from"./loadAll-C_hc0ED1.js";import{n as A}from"./CollectionFlattener-DKO05_sX.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-TlZaQwFR.js";import{n as re,l as ae,t as se}from"./TablesMixin-BlCm54qQ.js";import"./PortalItem-BO3lOf55.js";import"./writeUtils-BbpztHcZ.js";import"./common-DQOJ18NT.js";import"./Layer-BxbUP1GN.js";import"./TimeExtent-DHHZvZSS.js";var L;let h=L=class extends P{constructor(e){super(e),this.type="none"}clone(){return new L({type:this.type})}};s([G({none:"none",stayAbove:"stay-above"})],h.prototype,"type",void 0),h=L=s([I("esri.ground.NavigationConstraint")],h);var _;let p=_=class extends B(D){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new N;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&m.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},a=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>a(r.item))])}initialize(){this.when().catch(e=>{M(e)||m.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)f(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",R(e,this._get("layers")))}writeLayers(e,t,a,r){const o=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(l=>{if("write"in l){const d={};ee(l)().write(d,r)&&o.push(d)}else r?.messages&&r.messages.push(new U("layer:unsupported",`Layers (${l.title}, ${l.id}) of type '${l.declaredClass}' cannot be persisted in the ground`,{layer:l}))})),t.layers=o}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return te(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await $(()=>import("./ElevationQuery-C3_1eqNZ.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);b(t);const r=new a,o=this.layers.filter(O).toArray();return r.queryAll(o,e,t)}async createElevationSampler(e,t){await this.load({signal:t?.signal});const{ElevationQuery:a}=await $(()=>import("./ElevationQuery-C3_1eqNZ.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);b(t);const r=new a,o=this.layers.filter(O).toArray();return r.createSamplerAll(o,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:C(this.surfaceColor),navigationConstraint:C(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new _({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,a){const r=t?.origin||"web-scene",o=t?.portal||null,l=t?.url||null,{populateOperationalLayers:d}=await $(async()=>{const{populateOperationalLayers:v}=await import("./layersCreator-BPXM5c53.js");return{populateOperationalLayers:v}},__vite__mapDeps([7,1,2,3,8,9,10,11,12,13,4,5,14]),import.meta.url);b(a);const y=[];if(e.layers&&Array.isArray(e.layers)){const v={context:{origin:r,url:l,portal:o,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};y.push(d(this.layers,e.layers,v))}await Promise.allSettled(y)}};function oe(e){return e&&"createElevationSampler"in e}function O(e){return e.type==="elevation"||oe(e)}s([i({json:{read:!1}})],p.prototype,"layers",null),s([J("layers")],p.prototype,"writeLayers",null),s([i({readOnly:!0})],p.prototype,"resourceInfo",void 0),s([i({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:E,read:{reader:V,source:"transparency"},write:{writer:(e,t)=>{t.transparency=q(e)},target:"transparency"}}})],p.prototype,"opacity",void 0),s([i({type:H,json:{type:[E],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],p.prototype,"surfaceColor",void 0),s([i({type:h,json:{write:!0}})],p.prototype,"navigationConstraint",void 0),p=_=s([I("esri.Ground")],p);const g=p,u=new WeakMap;function j(e){return!e.destroyed&&(u.has(e)||e.addHandles([W(()=>{const t=e.parent;return!(!t||!("type"in t))&&(t.type==="catalog-dynamic-group"||j(t))},t=>u.set(e,t),z),K(()=>u.delete(e))]),u.get(e))}function ne(e){return typeof e=="object"&&e!=null&&"loaded"in e&&e.loaded===!0&&"type"in e}function ie(e){return!(!ne(e)||!Q(e)?.operations?.supportsEditing||"editingEnabled"in e&&!k(e)||j(e))}const w=()=>m.getLogger("esri.support.basemapUtils");function le(){return{}}function pe(e){for(const t in e){const a=e[t];f(a),delete e[t]}}function de(e,t){let a;if(typeof e=="string"){const r=e in S,o=!r&&e.includes("/");if(!r&&!o){if(Z.apiKey)w().warn(`Unable to find basemap definition for: ${e}. See available styles at https://developers.arcgis.com/rest/basemap-styles/`);else{const l=Object.entries(S).filter(([d,y])=>y.classic||y.is3d).map(([d])=>`"${d}"`).sort().join(", ");w().warn(`Unable to find basemap definition for: ${e}. Try one of these: ${l}`)}return null}t&&(a=t[e]),a||(a=r?c.fromId(e):new c({style:{id:e}}),t&&(t[e]=a))}else a=F(c,e);return a?.destroyed&&(w().warn("The provided basemap is already destroyed",{basemap:a}),a=null),a}const x={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function ye(e){let t=null;if(typeof e=="string")if(e in x){const a=x[e];t=new g({resourceInfo:{data:{layers:[a]}}})}else m.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else t=F(g,e);return t}let n=class extends re(ae(X.EventedMixin(Y))){constructor(e){super(e),this.allLayers=new A({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=se(this),this.basemap=null,this.editableLayers=new A({getCollections:()=>[this.allLayers],itemFilterFunction:ie}),this.ground=new g,this._basemapCache=le()}destroy(){pe(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=f(this.basemap),f(this.ground),this._set("ground",null)}castBasemap(e){return de(e,this._basemapCache)}castGround(e){return ye(e)??this._get("ground")}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}};s([i({readOnly:!0,dependsOn:[]})],n.prototype,"allLayers",void 0),s([i({readOnly:!0})],n.prototype,"allTables",void 0),s([i({type:c,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],n.prototype,"basemap",void 0),s([T("basemap")],n.prototype,"castBasemap",null),s([i({readOnly:!0})],n.prototype,"editableLayers",void 0),s([i({type:g,nonNullable:!0})],n.prototype,"ground",void 0),s([T("ground")],n.prototype,"castGround",null),s([i()],n.prototype,"undoRedo",void 0),n=s([I("esri.Map")],n);const Ee=n;export{Ee as default};
