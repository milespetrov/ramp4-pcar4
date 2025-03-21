import{u as a,bA as x,D as h,B as F,dY as O,h as N,V as B,J as G,n as m,G as f,dL as $,s as j,H as g,k as L,v as s,z as D,bF as C,hL as M,h2 as J,b5 as P,ao as z,fn as H,a4 as Q,dw as W,dQ as k,b3 as q,c0 as R,an as U,bN as I}from"./main-CZM6prq-.js";import{F as V}from"./Basemap-YzD9OPXV.js";import{o as Y}from"./compilerUtils-CxGdVTzb.js";import{t as K}from"./loadAll-Dv5pD0hN.js";import{n as S}from"./CollectionFlattener-DMgiedJM.js";import{y as X,m as Z,b as ee}from"./basemapUtils-C7PldI5R.js";import{n as te,l as re,t as ae}from"./TablesMixin-DBiGtjS1.js";var v;let p=v=class extends F{constructor(e){super(e),this.type="none"}clone(){return new v({type:this.type})}};a([x({none:"none",stayAbove:"stay-above"})],p.prototype,"type",void 0),p=v=a([h("esri.ground.NavigationConstraint")],p);var b;let i=b=class extends O(N){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new B;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&m.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},n=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>n(r.item))])}initialize(){this.when().catch(e=>{G(e)||m.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)f(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",$(e,this._get("layers")))}writeLayers(e,t,n,r){const l=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(y=>{if("write"in y){const d={};Y(y)().write(d,r)&&l.push(d)}else r?.messages&&r.messages.push(new j("layer:unsupported",`Layers (${y.title}, ${y.id}) of type '${y.declaredClass}' cannot be persisted in the ground`,{layer:y}))})),t.layers=l}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return K(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t?.signal});const{ElevationQuery:n}=await import("./ElevationQuery-CLWc5Iys.js");g(t);const r=new n,l=this.layers.filter(T).toArray();return r.queryAll(l,e,t)}async createElevationSampler(e,t){await this.load({signal:t?.signal});const{ElevationQuery:n}=await import("./ElevationQuery-CLWc5Iys.js");g(t);const r=new n,l=this.layers.filter(T).toArray();return r.createSamplerAll(l,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:L(this.surfaceColor),navigationConstraint:L(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new b({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,n){const r=t?.origin||"web-scene",l=t?.portal||null,y=t?.url||null,{populateOperationalLayers:d}=await import("./layersCreator-BCm7eLwZ.js");g(n);const w=[];if(e.layers&&Array.isArray(e.layers)){const _={context:{origin:r,url:y,portal:l,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};w.push(d(this.layers,e.layers,_))}await Promise.allSettled(w)}};function se(e){return e&&"createElevationSampler"in e}function T(e){return e.type==="elevation"||se(e)}a([s({json:{read:!1}})],i.prototype,"layers",null),a([D("layers")],i.prototype,"writeLayers",null),a([s({readOnly:!0})],i.prototype,"resourceInfo",void 0),a([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:C,read:{reader:M,source:"transparency"},write:{writer:(e,t)=>{t.transparency=J(e)},target:"transparency"}}})],i.prototype,"opacity",void 0),a([s({type:P,json:{type:[C],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],i.prototype,"surfaceColor",void 0),a([s({type:p,json:{write:!0}})],i.prototype,"navigationConstraint",void 0),i=b=a([h("esri.Ground")],i);const u=i,c=new WeakMap;function E(e){return!e.destroyed&&(c.has(e)||e.addHandles([z(()=>{const t=e.parent;return!(!t||!("type"in t))&&(t.type==="catalog-dynamic-group"||E(t))},t=>c.set(e,t),H),Q(()=>c.delete(e))]),c.get(e))}function oe(e){return typeof e=="object"&&e!=null&&"loaded"in e&&e.loaded===!0&&"type"in e}function ne(e){return!(!oe(e)||!W(e)?.operations?.supportsEditing||"editingEnabled"in e&&!k(e)||E(e))}const A={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};function ie(e){let t=null;if(typeof e=="string")if(e in A){const n=A[e];t=new u({resourceInfo:{data:{layers:[n]}}})}else m.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${e}. Try "world-elevation"`);else t=q(u,e);return t}let o=class extends te(re(R.EventedMixin(U))){constructor(e){super(e),this.allLayers=new S({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=ae(this),this.basemap=null,this.editableLayers=new S({getCollections:()=>[this.allLayers],itemFilterFunction:ne}),this.ground=new u,this._basemapCache=X()}destroy(){Z(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=f(this.basemap),f(this.ground),this._set("ground",null)}castBasemap(e){return ee(e,this._basemapCache)}castGround(e){return ie(e)??this._get("ground")}findLayerById(e){return this.allLayers.find(t=>t.id===e)}findTableById(e){return this.allTables.find(t=>t.id===e)}};a([s({readOnly:!0,dependsOn:[]})],o.prototype,"allLayers",void 0),a([s({readOnly:!0})],o.prototype,"allTables",void 0),a([s({type:V,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],o.prototype,"basemap",void 0),a([I("basemap")],o.prototype,"castBasemap",null),a([s({readOnly:!0})],o.prototype,"editableLayers",void 0),a([s({type:u,nonNullable:!0})],o.prototype,"ground",void 0),a([I("ground")],o.prototype,"castGround",null),a([s()],o.prototype,"undoRedo",void 0),o=a([h("esri.Map")],o);const le=o;export{le as default};
