import{k as e,bk as l,o as t,bp as H,A as p,v as u,B as R,cB as X,g as Z,u as k,by as F,ef as J,hN as A,ej as W,a_ as Y,ax as j,au as $,f as T,q as b,b2 as ee,b3 as te,bv as re,cG as oe}from"./main-sNoC4iWN.js";import{y as ie}from"./Field-gUGVLKj5.js";import{p as se}from"./TimeExtent-CjwG7Zfw.js";var P;let v=P=class extends u{constructor(r){super(r),this.type="map-layer"}clone(){const{mapLayerId:r,gdbVersion:i}=this;return new P({mapLayerId:r,gdbVersion:i})}};e([l({mapLayer:"map-layer"})],v.prototype,"type",void 0),e([t({type:H,json:{write:!0}})],v.prototype,"mapLayerId",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"gdbVersion",void 0),v=P=e([p("esri.layers.support.source.MapLayerSource")],v);var C;let y=C=class extends u{constructor(r){super(r),this.type="query-table"}clone(){const{workspaceId:r,query:i,oidFields:s,spatialReference:h,geometryType:d}=this,m={workspaceId:r,query:i,oidFields:s,spatialReference:h?.clone()??void 0,geometryType:d};return new C(m)}};e([l({queryTable:"query-table"})],y.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"query",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"oidFields",void 0),e([t({type:R,json:{write:!0}})],y.prototype,"spatialReference",void 0),e([l(X)],y.prototype,"geometryType",void 0),y=C=e([p("esri.layers.support.source.QueryTableDataSource")],y);var O;let f=O=class extends u{constructor(r){super(r),this.type="raster"}clone(){const{workspaceId:r,dataSourceName:i}=this;return new O({workspaceId:r,dataSourceName:i})}};e([l({raster:"raster"})],f.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],f.prototype,"dataSourceName",void 0),e([t({type:String,json:{write:!0}})],f.prototype,"workspaceId",void 0),f=O=e([p("esri.layers.support.source.RasterDataSource")],f);var V;let w=V=class extends u{constructor(r){super(r),this.type="table"}clone(){const{workspaceId:r,gdbVersion:i,dataSourceName:s}=this;return new V({workspaceId:r,gdbVersion:i,dataSourceName:s})}};e([l({table:"table"})],w.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"gdbVersion",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"dataSourceName",void 0),w=V=e([p("esri.layers.support.source.TableDataSource")],w);var D,M;const ae=Z()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let a=D=class extends u{constructor(r){super(r),this.type="join-table"}readLeftTableSource(r,i,s){return L()(r,i,s)}castLeftTableSource(r){return A(_(),r)}readRightTableSource(r,i,s){return L()(r,i,s)}castRightTableSource(r){return A(_(),r)}clone(){const{leftTableKey:r,rightTableKey:i,leftTableSource:s,rightTableSource:h,joinType:d}=this,m={leftTableKey:r,rightTableKey:i,leftTableSource:s?.clone()??void 0,rightTableSource:h?.clone()??void 0,joinType:d};return new D(m)}};e([l({joinTable:"join-table"})],a.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"leftTableKey",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"rightTableKey",void 0),e([t({json:{write:!0}})],a.prototype,"leftTableSource",void 0),e([k("leftTableSource")],a.prototype,"readLeftTableSource",null),e([F("leftTableSource")],a.prototype,"castLeftTableSource",null),e([t({json:{write:!0}})],a.prototype,"rightTableSource",void 0),e([k("rightTableSource")],a.prototype,"readRightTableSource",null),e([F("rightTableSource")],a.prototype,"castRightTableSource",null),e([l(ae)],a.prototype,"joinType",void 0),a=D=e([p("esri.layers.support.source.JoinTableDataSource")],a);let N=null;function L(){return N||(N=W({types:_()})),N}let I=null;function _(){return I||(I={key:"type",base:null,typeMap:{"data-layer":c,"map-layer":v}}),I}const ne={key:"type",base:null,typeMap:{"join-table":a,"query-table":y,raster:f,table:w}};let c=M=class extends u{constructor(r){super(r),this.type="data-layer"}clone(){const{fields:r,dataSource:i}=this;return new M({fields:r,dataSource:i})}};e([l({dataLayer:"data-layer"})],c.prototype,"type",void 0),e([t({type:[ie],json:{write:!0}})],c.prototype,"fields",void 0),e([t({types:ne,json:{write:!0}})],c.prototype,"dataSource",void 0),c=M=e([p("esri.layers.support.source.DataLayerSource")],c),c.from=J(c);let S=class extends Y(u){constructor(r){super(r),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};e([t({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.onFields!=null&&this.onFields.length>0}}}}})],S.prototype,"onFields",void 0),e([t({type:String,json:{write:!0}})],S.prototype,"operator",void 0),e([t({type:String,json:{write:!0}})],S.prototype,"searchTerm",void 0),e([t({type:String,json:{write:!0}})],S.prototype,"searchType",void 0),S=e([p("esri.rest.support.FullTextSearch")],S);const le=S;var B;const q=new j({upperLeft:"upper-left",lowerLeft:"lower-left"});let g=B=class extends u{constructor(r){super(r),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new B(T({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};e([t({type:$,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],g.prototype,"extent",void 0),e([t({type:["view","edit"],json:{write:!0}})],g.prototype,"mode",void 0),e([t({type:String,json:{read:q.read,write:q.write}})],g.prototype,"originPosition",void 0),e([t({type:Number,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],g.prototype,"tolerance",void 0),g=B=e([p("esri.rest.support.QuantizationParameters")],g);const U=g,G=new j({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});var E;const z=new j({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let n=E=class extends u{constructor(r){super(r),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(r,i){this.statisticType!=="percentile-continuous"&&this.statisticType!=="percentile-discrete"||(i.statisticParameters=T(r))}clone(){return new E({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:T(this.statisticParameters)})}};e([t({type:Number,json:{write:!0}})],n.prototype,"maxPointCount",void 0),e([t({type:Number,json:{write:!0}})],n.prototype,"maxRecordCount",void 0),e([t({type:Number,json:{write:!0}})],n.prototype,"maxVertexCount",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"onStatisticField",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"outStatisticFieldName",void 0),e([t({type:String,json:{read:{source:"statisticType",reader:z.read},write:{target:"statisticType",writer:z.write}}})],n.prototype,"statisticType",void 0),e([t({type:Object})],n.prototype,"statisticParameters",void 0),e([b("statisticParameters")],n.prototype,"writeStatisticParameters",null),n=E=e([p("esri.rest.support.StatisticDefinition")],n);const K=n;var x;const pe=new j({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let o=x=class extends u{static from(r){return oe(x,r)}constructor(r){super(r),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(r){return typeof r=="number"||typeof r=="object"?r:null}writeHistoricMoment(r,i){i.historicMoment=r&&r.getTime()}writeParameterValues(r,i){if(r){const s={};for(const h in r){const d=r[h];Array.isArray(d)?s[h]=d.map(m=>m instanceof Date?m.getTime():m):d instanceof Date?s[h]=d.getTime():s[h]=d}i.parameterValues=s}}writeStart(r,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,i.where="1=1"}writeWhere(r,i){i.where=r||"1=1"}clone(){return new x(T({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,formatOf3DObjects:this.formatOf3DObjects,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment!=null?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};o.MAX_MAX_RECORD_COUNT_FACTOR=5,e([t({json:{write:!0}})],o.prototype,"aggregateIds",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"cacheHint",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"compactGeometryEnabled",void 0),e([t({json:{write:!0}})],o.prototype,"datumTransformation",void 0),e([F("datumTransformation")],o.prototype,"castDatumTransformation",null),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"defaultSpatialReferenceEnabled",void 0),e([t({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],o.prototype,"distance",void 0),e([t({type:c,json:{write:!0}})],o.prototype,"dynamicDataSource",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"formatOf3DObjects",void 0),e([t({type:[le],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.fullText!=null&&this.fullText.length>0}}}}})],o.prototype,"fullText",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),e([t({types:ee,json:{read:te,write:!0}})],o.prototype,"geometry",void 0),e([t({type:Number,json:{write:!0}})],o.prototype,"geometryPrecision",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"groupByFieldsForStatistics",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"having",void 0),e([t({type:Date})],o.prototype,"historicMoment",void 0),e([b("historicMoment")],o.prototype,"writeHistoricMoment",null),e([t({type:Number,json:{write:!0}})],o.prototype,"maxAllowableOffset",void 0),e([t({type:Number,cast:r=>r<1?1:r>o.MAX_MAX_RECORD_COUNT_FACTOR?o.MAX_MAX_RECORD_COUNT_FACTOR:r,json:{write:{overridePolicy:r=>({enabled:r>1})}}})],o.prototype,"maxRecordCountFactor",void 0),e([t({type:["xyFootprint"],json:{write:!0}})],o.prototype,"multipatchOption",void 0),e([t({type:Number,json:{read:{source:"resultRecordCount"}}})],o.prototype,"num",void 0),e([t({json:{write:!0}})],o.prototype,"objectIds",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"outFields",void 0),e([t({type:R,json:{name:"outSR",write:!0}})],o.prototype,"outSpatialReference",void 0),e([t({type:[K],json:{write:{enabled:!0,overridePolicy(){return{enabled:this.outStatistics!=null&&this.outStatistics.length>0}}}}})],o.prototype,"outStatistics",void 0),e([t({json:{write:!0}})],o.prototype,"parameterValues",void 0),e([b("parameterValues")],o.prototype,"writeParameterValues",null),e([t({type:re,json:{write:!0}})],o.prototype,"pixelSize",void 0),e([t({type:U,json:{write:!0}})],o.prototype,"quantizationParameters",void 0),e([t({type:[Object],json:{write:!0}})],o.prototype,"rangeValues",void 0),e([t({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:this.spatialRelationship==="relation"}}}}})],o.prototype,"relationParameter",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"resultType",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnCentroid",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnDistinctValues",void 0),e([t({type:Boolean,json:{default:!0,write:!0}})],o.prototype,"returnExceededLimitFeatures",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"returnGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnQueryGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnM",void 0),e([t({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],o.prototype,"returnZ",void 0),e([t({type:R,json:{write:!0}})],o.prototype,"sourceSpatialReference",void 0),e([l(G,{ignoreUnknown:!1,name:"spatialRel"})],o.prototype,"spatialRelationship",void 0),e([t({type:Number,json:{read:{source:"resultOffset"}}})],o.prototype,"start",void 0),e([b("start"),b("num")],o.prototype,"writeStart",null),e([t({type:String,json:{write:!0}})],o.prototype,"sqlFormat",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"text",void 0),e([t({type:se,json:{write:!0}})],o.prototype,"timeExtent",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"timeReferenceUnknownClient",void 0),e([l(pe,{ignoreUnknown:!1}),t({json:{write:{overridePolicy(r){return{enabled:!!r&&this.distance!=null&&this.distance>0}}}}})],o.prototype,"units",void 0),e([t({type:String,json:{write:{overridePolicy(r){return{enabled:r!=null||this.start!=null&&this.start>0}}}}})],o.prototype,"where",void 0),e([b("where")],o.prototype,"writeWhere",null),o=x=e([p("esri.rest.support.Query")],o);const Q=o,ue=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{c as K,ue as Q,U as a,Q as b,v as c,K as m,G as s};
