import{D as w,aw as A,dj as _,cs as u,c7 as $,s as N,J as I,U as j,n as M,q as c,u as d,C as U,aC as g}from"./main-Cndq3wrU.js";import{S as V}from"./MultiOriginJSONSupport-CVx1JAMK.js";import{c as z,u as p,E,s as S,l as R,d as T,R as f}from"./vec32-CvXXzGj2.js";import{n as L}from"./projectBuffer-B35Qssqf.js";import{f as X}from"./Layer-DWC6tCOI.js";import{i as P}from"./APIKeyMixin-hUpdjiMo.js";import{l as W}from"./ArcGISService-Cq0kyQG7.js";import{e as k}from"./CustomParametersMixin-DUAPaMeT.js";import{b as q}from"./OperationalLayer-CZmd7V8a.js";import{j as F}from"./PortalLayer-DwRx10gC.js";import{t as G}from"./ScaleRangeLayer-BJ-DIprL.js";import{c as C,y as K}from"./commonProperties-DdHMj-ic.js";import{$ as D,Z as J,w as O}from"./elevationInfoUtils-CAcE0dmE.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./TimeExtent-CNKqe8aE.js";import"./arcgisLayerUrl-D1E7CgSg.js";import"./PortalItem-DAgDbNA5.js";import"./portalItemUtils-CGMN2ydG.js";import"./projection-C3kMvsoo.js";import"./ElevationInfo-AedEJQn4.js";import"./lengthUtils-DaQZk_OQ.js";let m=class extends W(q(F(G(V(k(P(X))))))){constructor(r){super(r),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new w({wkid:4326,vcsWkid:115700}),this.fullExtent=new A(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(r){this._set("elevationInfo",r),this._validateElevationInfo()}_verifyArray(r,i){if(!Array.isArray(r)||r.length<i)return!1;for(const n of r)if(typeof n!="number")return!1;return!0}_initFullExtent(r){const i=r.root?.boundingVolume;if(!i)return;if(i.box){const t=i?.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const n=r.root?.transform,x=g();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=_(t[0]),a=_(t[1]),o=t[4],s=_(t[2]),e=_(t[3]),y=t[5];this.fullExtent=new A({xmin:l,ymin:a,zmin:o,xmax:s,ymax:e,zmax:y,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=u(t[0],t[1],t[2]),a=t[3]/Math.sqrt(3),o=g();z(o,l,u(a,a,a));const s=g();if(p(s,l,u(a,a,a)),n&&this._verifyArray(n,16)){const v=n;E(x,o,v),S(o,x),E(x,s,v),S(s,x)}L(o,$,0,o,w.WGS84,0),L(s,$,0,s,w.WGS84,0);const e=g(),y=g();R(e,o,s),T(y,o,s),this.fullExtent=new A({xmin:e[0],ymin:e[1],zmin:e[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=u(t[0],t[1],t[2]),a=u(t[3],t[4],t[5]),o=u(t[6],t[7],t[8]),s=u(t[9],t[10],t[11]),e=[];for(let h=0;h<8;++h)e.push(g());if(p(e[0],l,a),p(e[0],e[0],o),p(e[0],e[0],s),f(e[1],l,a),p(e[1],e[1],o),p(e[1],e[1],s),p(e[2],l,a),f(e[2],e[2],o),p(e[2],e[2],s),f(e[3],l,a),f(e[3],e[3],o),p(e[3],e[3],s),p(e[4],l,a),p(e[4],e[4],o),f(e[4],e[4],s),f(e[5],l,a),p(e[5],e[5],o),f(e[5],e[5],s),p(e[6],l,a),f(e[6],e[6],o),f(e[6],e[6],s),f(e[7],l,a),f(e[7],e[7],o),f(e[7],e[7],s),n&&this._verifyArray(n,16)){const h=n;for(let b=0;b<8;++b)E(e[b],e[b],h)}const y=u(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),v=u(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let h=0;h<8;++h)L(e[h],$,0,e[h],w.WGS84,0),R(v,v,e[h]),T(y,y,e[h]);this.fullExtent=new A({xmin:v[0],ymin:v[1],zmin:v[2],xmax:y[0],ymax:y[1],zmax:y[2],spatialReference:this.spatialReference})}}async load(r){return this.addResolvingPromise(this._doLoad(r)),this}async _doLoad(r){const i=r!=null?r.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:n=>{if(n.typeKeywords?.includes("IntegratedMesh"))return!0;throw new N("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},r)}catch(n){I(n)}this.url&&await j(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(x=>{this._initFullExtent(x.data)},x=>{I(x)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(){const r=this.elevationInfo,i="Integrated mesh 3d tiles layers";D(M.getLogger(this),J(i,"absolute-height",r)),D(M.getLogger(this),O(i,r))}};c([d({type:["IntegratedMesh3DTilesLayer"]})],m.prototype,"operationalLayerType",void 0),c([d({type:w})],m.prototype,"spatialReference",void 0),c([d({type:A})],m.prototype,"fullExtent",void 0),c([d(C)],m.prototype,"elevationInfo",null),c([d({type:["show","hide"]})],m.prototype,"listMode",void 0),c([d(K)],m.prototype,"url",void 0),c([d({readOnly:!0})],m.prototype,"type",void 0),c([d({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],m.prototype,"path",void 0),c([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"minScale",void 0),c([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],m.prototype,"maxScale",void 0),m=c([U("esri.layers.IntegratedMesh3DTilesLayer")],m);const xe=m;export{xe as default};
