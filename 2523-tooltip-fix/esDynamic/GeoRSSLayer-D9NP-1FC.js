import{bA as n,G as p,U as y,cb as u,H as d,k as o,o as s,u as m,au as h,A as c,db as a,dc as f,dd as S,de as g,df as v}from"./main-CDHpIWDK.js";import{S as b}from"./MultiOriginJSONSupport-BR7G7DNL.js";import{f as C}from"./Layer-ClIWDxbA.js";import{l as G}from"./BlendLayer-BkDSgnax.js";import{b as x}from"./OperationalLayer-CPP7zalp.js";import{j as P}from"./PortalLayer-DedmCAF2.js";import{f as _}from"./RefreshableLayer-CLD7S1sc.js";import{t as k}from"./ScaleRangeLayer-D96pkjrI.js";import{u as w,d as R,y as j}from"./commonProperties-tuK1ru4N.js";const F=["atom","xml"],E={base:a,key:"type",typeMap:{"simple-line":f},errorContext:"symbol"},M={base:a,key:"type",typeMap:{"picture-marker":S,"simple-marker":g},errorContext:"symbol"},A={base:a,key:"type",typeMap:{"simple-fill":v},errorContext:"symbol"};let t=class extends G(_(x(P(k(b(C)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&l.outline?.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?n(this.url,F)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(p).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await y(d.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:u(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){return this.featureCollections?.some(r=>r.featureSet?.geometryType===e&&r.featureSet.features?.length>0)??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([m("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:h,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(w)],t.prototype,"id",void 0),o([s(R)],t.prototype,"legendEnabled",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:A,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(j)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([c("esri.layers.GeoRSSLayer")],t);const L=t;export{L as default};
