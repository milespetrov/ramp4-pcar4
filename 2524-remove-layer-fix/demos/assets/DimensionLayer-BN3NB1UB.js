import{dc as P,aE as d,q as t,u as n,br as h,fB as w,bf as O,C as m,g3 as R,bx as v,bA as S,g2 as D,V as $,c_ as z,aG as j,f4 as N,cZ as E,aw as b,v as A}from"./main-CFpM9i38.js";import{c as C}from"./Analysis-CotUpNWw.js";import{a as _}from"./Cyclical-CCn8t1xA.js";import{X as k}from"./projection-B6HHT9iG.js";import{S as L}from"./MultiOriginJSONSupport-B7ytswiV.js";import{f as T}from"./Layer-DokEcK1i.js";import{b as H}from"./OperationalLayer-4Ce5UdNS.js";import"./preload-helper-ExcqyqRp.js";import"./projectBuffer-ChAiX47d.js";import"./TimeExtent-Ba88HmAN.js";import"./commonProperties-C3O0vMzk.js";import"./ElevationInfo-BFG6iNgv.js";import"./lengthUtils-DL2C2FcD.js";let r=class extends P(R){constructor(e){super(e),this.type="simple",this.color=new d("black"),this.lineSize=2,this.fontSize=10,this.textColor=new d("black"),this.textBackgroundColor=new d([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],r.prototype,"type",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"color",void 0),t([n({type:Number,cast:w,nonNullable:!0,range:{min:O(1)},json:{write:{isRequired:!0}}})],r.prototype,"lineSize",void 0),t([n({type:Number,cast:w,nonNullable:!0,json:{write:{isRequired:!0}}})],r.prototype,"fontSize",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textColor",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],r.prototype,"textBackgroundColor",void 0),r=t([m("esri.analysis.DimensionSimpleStyle")],r);const g=r;var y;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(y||(y={}));const B=[y.Horizontal,y.Vertical,y.Direct];let l=class extends P(R){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=y.Direct,this.offset=0,this.orientation=0}};t([n({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([n({type:v,json:{write:!0}})],l.prototype,"startPoint",void 0),t([n({type:v,json:{write:!0}})],l.prototype,"endPoint",void 0),t([n({type:B,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),S(e=>_.normalize(D(e),0,!0))],l.prototype,"orientation",void 0),l=t([m("esri.analysis.LengthDimension")],l);const q=l,f=$.ofType(q);let p=class extends C{constructor(e){super(e),this.type="dimension",this.style=new g,this.extent=null}initialize(){this.addHandles(j(()=>this._computeExtent(),e=>{e?.pending==null&&this._set("extent",e!=null?e.extent:null)},N))}get dimensions(){return this._get("dimensions")||new f}set dimensions(e){this._set("dimensions",E(e,this.dimensions,f))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const i=[];for(const s of this.dimensions)s.startPoint!=null&&i.push(s.startPoint),s.endPoint!=null&&i.push(s.endPoint);const a=k(i,e);if(a.pending!=null)return{pending:a.pending,extent:null};let c=null;return a.geometries!=null&&(c=a.geometries.reduce((s,u)=>s==null?u!=null?b.fromPoint(u):null:u!=null?s.union(b.fromPoint(u)):s,null)),{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],p.prototype,"type",void 0),t([n({cast:z,type:f,nonNullable:!0})],p.prototype,"dimensions",null),t([n({readOnly:!0})],p.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},nonNullable:!0})],p.prototype,"style",void 0),t([n({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([n({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([m("esri.analysis.DimensionAnalysis")],p);const x=p;let o=class extends H(L(T)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new x,this.opacity=1,e){const{source:i,style:a}=e;i&&a&&(i.style=a)}}initialize(){this.addHandles([j(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},N)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new x)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,a,c){i.dimensions=e.filter(({startPoint:s,endPoint:u})=>s!=null&&u!=null).map(s=>s.toJSON(c)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],o.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],o.prototype,"source",void 0),t([n({readOnly:!0})],o.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},json:{write:{ignoreOrigin:!0}}})],o.prototype,"style",null),t([n({readOnly:!0})],o.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),t([n({type:["show","hide"]})],o.prototype,"listMode",void 0),t([n({type:$.ofType(q),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],o.prototype,"dimensions",null),t([A("web-scene","dimensions")],o.prototype,"writeDimensions",null),o=t([m("esri.layers.DimensionLayer")],o);const ee=o;export{ee as default};
