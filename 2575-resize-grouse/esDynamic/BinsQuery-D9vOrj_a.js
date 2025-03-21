import{a_ as w,v as B,k as t,o as i,A as l,ef as m,ax as x,bk as p,g as S,n as T,aY as g,hO as M,B as z,b2 as V,b3 as I}from"./main-BriipcPO.js";import{R as k}from"./queryUtils-CPnzca1S.js";import{m as Z,a as L,s as _}from"./Query-DFLWH56n.js";let u=class extends w(B){constructor(e){super(e),this.alias=null,this.expression=null,this.field=null,this.responseType=null}};t([i({type:String,json:{write:!0}})],u.prototype,"alias",void 0),t([i({type:String,json:{write:!0}})],u.prototype,"expression",void 0),t([i({type:String,json:{write:!0}})],u.prototype,"field",void 0),t([i({type:String,json:{write:!0}})],u.prototype,"responseType",void 0),u=t([l("esri.rest.support.BinParametersAttributes")],u);const j=u;u.from=m(u);const H=new x({naturalLog:"natural-log",squareRoot:"square-root"});let s=class extends w(B){constructor(e){super(e),this.expression=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitByAttributes=null,this.stackByAttributes=null,this.transformation=null}};t([i({type:String,json:{write:!0}})],s.prototype,"expression",void 0),t([i({type:String,json:{name:"onField",write:!0}})],s.prototype,"field",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"firstDayOfWeek",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"hideUpperBound",void 0),t([i({type:j,json:{write:{target:{splitBy:{type:String},splitByField:{type:String},splitByAlias:{type:String}},writer:(e,r)=>{e.field!=null&&(r.splitByField=e.field),e.expression!=null&&(r.splitBy=e.expression),e.alias!=null&&(r.splitByAlias=e.alias)}},read:{source:["splitBy","splitByField","splitByAlias"],reader:(e,r)=>new j({field:r.splitByField,expression:r.splitBy,alias:r.splitByAlias})}}})],s.prototype,"splitByAttributes",void 0),t([i({type:j,json:{write:{target:{stackBy:{type:String},stackByField:{type:String},stackByAlias:{type:String},jsonStyle:{type:String}},writer:(e,r)=>{e.field!=null&&(r.stackByField=e.field),e.expression!=null&&(r.stackBy=e.expression),e.alias!=null&&(r.stackByAlias=e.alias),e.responseType!=null&&(r.jsonStyle=e.responseType)},overridePolicy(){return{enabled:this.stackByAttributes?.field!=null||this.stackByAttributes?.expression!=null}}},read:{source:["stackBy","stackByField","stackByAlias","jsonStyle"],reader:(e,r)=>new j({field:r.stackByField,expression:r.stackBy,alias:r.stackByAlias,responseType:r.jsonStyle})}}})],s.prototype,"stackByAttributes",void 0),t([p(H)],s.prototype,"transformation",void 0),s=t([l("esri.rest.support.BinParametersBase")],s);const f=s,U=S()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),A="percent-of-total",F="field",P=e=>{let r=class extends e{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let o=this._get("normalizationType");const v=!!this.normalizationField,b=this.normalizationTotal!=null;return v||b?(o=v&&F||b&&A||null,v&&b&&T.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):o!==F&&o!==A||(o=null),o}set normalizationType(o){this._set("normalizationType",o)}};return t([i({type:String,json:{name:"parameters.normalizationField",write:!0}})],r.prototype,"normalizationField",void 0),t([i({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],r.prototype,"normalizationMaxValue",void 0),t([i({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],r.prototype,"normalizationMinValue",void 0),t([i({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],r.prototype,"normalizationTotal",void 0),t([p(U,{name:"parameters.normalizationType"})],r.prototype,"normalizationType",null),r=t([l("esri.rest.support.NormalizationBinParametersMixin")],r),r};function R(e,r,o){g(o,e instanceof Date?e.getTime():e,r)}let d=class extends P(f){constructor(e){super(e),this.bins=null,this.end=null,this.start=null,this.type="auto-interval"}};t([i({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],d.prototype,"bins",void 0),t([i({json:{name:"parameters.end",write:{writer:R}}})],d.prototype,"end",void 0),t([i({json:{name:"parameters.start",write:{writer:R}}})],d.prototype,"start",void 0),t([p({autoIntervalBin:"auto-interval"},{readOnly:!0})],d.prototype,"type",void 0),d=t([l("esri.rest.support.AutoIntervalBinParameters")],d);const W=d;d.from=m(d);const Q=S()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});let c=class extends w(B){constructor(e){super(e),this.value=null,this.units=null}};t([i({type:Number,json:{name:"number",write:!0}})],c.prototype,"value",void 0),t([p(Q,{name:"unit"})],c.prototype,"units",void 0),c=t([l("esri.rest.support.DateBinTimeInterval")],c);const D=c;c.from=m(c);function O(e,r,o){g(o,typeof e=="string"?e:e?.getTime(),r)}function N(e,r){const o=e.parameters[r];return o?typeof o=="string"?o:new Date(o):null}let a=class extends f{constructor(e){super(e),this.end=null,this.interval=null,this.offset=null,this.start=null,this.type="date"}};t([i({cast:e=>e?typeof e=="string"?e:new Date(e):null,json:{name:"parameters.end",read:{reader:(e,r)=>N(r,"end")},write:{writer:O}}})],a.prototype,"end",void 0),t([i({type:D,json:{name:"parameters",write:!0}})],a.prototype,"interval",void 0),t([i({type:D,json:{name:"parameters.offset",write:!0}})],a.prototype,"offset",void 0),t([i({cast:e=>e?typeof e=="string"?e:new Date(e):null,json:{name:"parameters.start",read:{reader:(e,r)=>N(r,"start")},write:{writer:O}}})],a.prototype,"start",void 0),t([p({dateBin:"date"},{readOnly:!0})],a.prototype,"type",void 0),a=t([l("esri.rest.support.DateBinParameters")],a);const Y=a;a.from=m(a);function $(e){return e[0]instanceof Date}function C(e,r,o){g(o,e&&$(e)?e.map(v=>v.getTime()):e,r)}let h=class extends f{constructor(e){super(e),this.boundaries=null,this.type="fixed-boundaries"}};t([i({json:{name:"parameters.boundaries",write:{writer:C}}})],h.prototype,"boundaries",void 0),t([p({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],h.prototype,"type",void 0),h=t([l("esri.rest.support.FixedBoundariesBinParameters")],h);const E=h;h.from=m(h);function q(e,r,o){g(o,e instanceof Date?e.getTime():e,r)}let y=class extends P(f){constructor(e){super(e),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};t([i({json:{name:"parameters.end",write:{writer:q}}})],y.prototype,"end",void 0),t([i({type:Number,json:{name:"parameters.interval",write:!0}})],y.prototype,"interval",void 0),t([i({json:{name:"parameters.start",write:{writer:q}}})],y.prototype,"start",void 0),t([p({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],y.prototype,"type",void 0),y=t([l("esri.rest.support.FixedIntervalBinParameters")],y);const G=y;y.from=m(y);const J=new x({asc:"ascending",desc:"descending"}),K={base:f,key:"type",typeMap:{"auto-interval":W,date:Y,"fixed-boundaries":E,"fixed-interval":G}};let n=class extends w(B){constructor(e){super(e),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.quantizationParameters=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(e){this._set("outTimeZone",e),e&&!M(e)&&T.getLogger(this).warn("#outTimeZone",`the parsed value '${e}' may not be a valid IANA time zone`)}};t([i({types:K,json:{name:"bin",write:!0}})],n.prototype,"binParameters",void 0),t([p(J)],n.prototype,"binOrder",void 0),t([i({type:Boolean,json:{write:!0}})],n.prototype,"cacheHint",void 0),t([i({json:{write:!0}})],n.prototype,"datumTransformation",void 0),t([i({type:z,json:{name:"defaultSR",write:!0}})],n.prototype,"defaultSpatialReference",void 0),t([i({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],n.prototype,"distance",void 0),t([i({types:V,json:{read:I,write:!0}})],n.prototype,"geometry",void 0),t([i({type:String,json:{write:!0}})],n.prototype,"lowerBoundaryAlias",void 0),t([i({type:z,json:{name:"outSR",write:!0}})],n.prototype,"outSpatialReference",void 0),t([i({type:[Z],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],n.prototype,"outStatistics",void 0),t([i({value:null,json:{name:"outTimeReference",read:{reader:e=>e.ianaTimeZone},write:{writer:(e,r,o)=>{e&&(r[o]={ianaTimeZone:e})}}}})],n.prototype,"outTimeZone",null),t([i({type:L,json:{write:!0}})],n.prototype,"quantizationParameters",void 0),t([i({type:Boolean,json:{write:!0}})],n.prototype,"returnDistinctValues",void 0),t([p(_,{name:"spatialRel"})],n.prototype,"spatialRelationship",void 0),t([i({type:String,json:{write:!0}})],n.prototype,"upperBoundaryAlias",void 0),t([i({type:String,json:{read:k.read,write:{writer:k.write,overridePolicy(e){return{enabled:e!=null&&this.distance!=null&&this.distance>0}}}}})],n.prototype,"units",void 0),t([i({type:String,json:{write:!0}})],n.prototype,"where",void 0),n=t([l("esri.rest.support.BinsQuery")],n);const X=n;n.from=m(n);export{X as default};
