import{b0 as te,A as T,q as n,u as o,C as g,h as p,bm as M,b6 as L,g2 as O,fB as f,v as _,z as x,a_ as J,hx as ie,b1 as U,dh as re,s as se,n as ne,aG as oe,aB as ae}from"./main-DCUo5ucN.js";import{j as le,b as ue,a as E}from"./UniqueValueRenderer-D6mniwe2.js";import{m as D,o as R,p as j}from"./jsonUtils-CabmILGV.js";import{p as H,l as K,a as pe}from"./commonProperties-tLZ4HaFv.js";import{t as S,p as k}from"./FeatureReductionSelection-DZfftAuP.js";import{z as P}from"./featureLayerUtils-763caqkE.js";import{C as Q}from"./labelingInfo-DYW42DBD.js";import{x as W}from"./MD5-C9MwAd2G.js";let v=class extends te(T){constructor(s){super(s),this.expression=null,this.title=null,this.returnType=null}};n([o({type:String,json:{write:!0}})],v.prototype,"expression",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"returnType",void 0),v=n([g("esri.layers.support.ExpressionInfo")],v);const C=v;var F;let c=F=class extends T{constructor(i){super(i),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new F({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:p(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};n([o({type:Boolean,json:{write:!0}})],c.prototype,"isAutoGenerated",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"name",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"alias",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),n([o({type:C,json:{write:!0}})],c.prototype,"onStatisticExpression",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"statisticType",void 0),c=F=n([g("esri.layers.support.AggregateField")],c);const m=c;var z;let u=z=class extends S{constructor(i){super(i),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=f("12px"),this.fields=[],this.renderer=null}writeFields(i,s,e){const t=i.filter(r=>r.statisticType!=="avg_angle").map(r=>r.toJSON());J(e,t,s)}readRenderer(i,s,e){const t=s.drawingInfo?.renderer;return t?R(t,s,e)??void 0:P(s,e)}clone(){return new z({fields:p(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:p(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:p(this.popupTemplate),renderer:p(this.renderer),binType:p(this.binType),size:this.size})}};n([M({binning:"binning"})],u.prototype,"type",void 0),n([M({geohash:"geohash",square:"square"}),o({type:["geohash","square"]})],u.prototype,"binType",void 0),n([o({type:Number,json:{write:!0}})],u.prototype,"fixedBinLevel",void 0),n([o({type:[Q],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],u.prototype,"labelingInfo",void 0),n([o(H)],u.prototype,"labelsVisible",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],u.prototype,"maxScale",void 0),n([o(K)],u.prototype,"popupEnabled",void 0),n([o({type:L,json:{name:"popupInfo",write:!0}})],u.prototype,"popupTemplate",void 0),n([o({cast:i=>i==="auto"?i:O(f(i))})],u.prototype,"size",void 0),n([o({type:[m],json:{write:!0}})],u.prototype,"fields",void 0),n([_("fields")],u.prototype,"writeFields",null),n([o({types:D,json:{write:{target:"drawingInfo.renderer"}}})],u.prototype,"renderer",void 0),n([x("renderer",["drawingInfo.renderer"])],u.prototype,"readRenderer",null),u=z=n([g("esri.layers.support.FeatureReductionBinning")],u);const X=u;var V;function N(i){return i.type==="simple"&&!i.visualVariables?.length}let l=V=class extends T{constructor(i){super(i),this.type="cluster",this.clusterRadius=f("80px"),this.clusterMinSize=f("12px"),this.clusterMaxSize=f("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(i,s,e){const t=s.drawingInfo?.renderer;return t?.authoringInfo?.isAutoGenerated?null:t?N(t)?null:R(t,s,e)??void 0:P(s,e)}readSymbol(i,s,e){const t=s.drawingInfo?.renderer;return t?.authoringInfo?.isAutoGenerated?null:t&&N(t)?R(t,s,e)?.symbol:null}writeSymbol(i,s,e,t){const r=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||r){const a=new j({symbol:i});s.drawingInfo={renderer:a.write({},t)}}}writeFields(i,s,e){const t=i.filter(r=>r.statisticType!=="avg_angle").map(r=>r.toJSON());J(e,t,s)}readFields(i,s,e){return i.filter(t=>!t.isAutoGenerated).map(t=>m.fromJSON(t))}clone(){return new V({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:p(this.labelingInfo),labelsVisible:this.labelsVisible,fields:p(this.fields),maxScale:this.maxScale,renderer:p(this.renderer),symbol:p(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:p(this.popupTemplate)})}};n([o({type:["cluster"],readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),n([o({cast:i=>i==="auto"?i:O(f(i)),json:{write:!0}})],l.prototype,"clusterRadius",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMinSize",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMaxSize",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],l.prototype,"maxScale",void 0),n([o(K)],l.prototype,"popupEnabled",void 0),n([o({type:L,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),n([o({types:D,json:{write:{target:"drawingInfo.renderer"}}})],l.prototype,"renderer",void 0),n([x("renderer",["drawingInfo.renderer"])],l.prototype,"readRenderer",null),n([o({types:ie})],l.prototype,"symbol",void 0),n([x("symbol",["drawingInfo.renderer"])],l.prototype,"readSymbol",null),n([_("symbol")],l.prototype,"writeSymbol",null),n([o({type:[Q],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],l.prototype,"labelingInfo",void 0),n([o(H)],l.prototype,"labelsVisible",void 0),n([o({type:[m],json:{write:!0}})],l.prototype,"fields",void 0),n([_("fields")],l.prototype,"writeFields",null),n([x("fields")],l.prototype,"readFields",null),l=V=n([g("esri.layers.support.FeatureReductionCluster")],l);const Y=l,q={key:"type",base:S,typeMap:{cluster:Y,binning:X}},de={types:{key:"type",base:S,typeMap:{selection:k,cluster:Y,binning:X}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:q},"portal-item":{types:q},"web-scene":{types:{key:"type",base:S,typeMap:{selection:k}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:pe}}}}},ce=()=>ne.getLogger("esri.views.2d.layers.support.clusterUtils");U.add("esri-cluster-arcade-enabled",!0);const fe=U("esri-cluster-arcade-enabled"),ye=new Set(["simple-line","simple-fill","picture-fill"]);function B(i,s){let e=s.clone();if(!me(e))return e;if(s.getSymbols().some(t=>ye.has(t.type))&&(e=new j({symbol:new re})),e.authoringInfo||(e.authoringInfo=new le),e.authoringInfo.isAutoGenerated=!0,"visualVariables"in e){const t=(e.visualVariables||[]).filter(r=>r.valueExpression!=="$view.scale");t.forEach(r=>{r.type==="rotation"?r.field?r.field=y(i,r.field,"avg_angle","number"):r.valueExpression&&(r.field=h(i,r.valueExpression,"avg_angle","number"),r.valueExpression=null):r.normalizationField?(r.field=y(i,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=y(i,r.field,"avg","number"):r.valueExpression&&(r.field=h(i,r.valueExpression,"avg","number"),r.valueExpression=null)}),e.visualVariables=t}switch(e.type){case"simple":break;case"pie-chart":for(const t of e.attributes)t.field?t.field=y(i,t.field,"sum","number"):t.valueExpression&&(t.field=h(i,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":e.field?e.field=y(i,e.field,"mode","string"):e.valueExpression&&(e.field=h(i,e.valueExpression,"mode","string"),e.valueExpression=null);break;case"class-breaks":e.normalizationField?(e.field=y(i,e.field,"avg_norm","number",e.normalizationField),e.normalizationField=null):e.field?e.field=y(i,e.field,"avg","number"):e.valueExpression&&(e.field=h(i,e.valueExpression,"avg","number"),e.valueExpression=null)}return e}const me=i=>{const s=e=>ce().error(new se("Unsupported-renderer",e,{renderer:i}));if(!i)return!1;switch(i.type){case"unique-value":if(i.field2||i.field3)return s("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(i.normalizationField){const e=i.normalizationType;if(e!=="field")return s(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}break;case"simple":case"pie-chart":break;default:return s(`FeatureReductionCluster does not support renderers of type ${i.type}`),!1}if(!fe){if("valueExpression"in i&&i.valueExpression)return s("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in i&&i.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return s("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function be(i,s,e){switch(i){case"sum":return`cluster_sum_${s}`;case"avg":case"avg_angle":return`cluster_avg_${s}`;case"mode":return`cluster_type_${s}`;case"avg_norm":{const t=e,r="field",a=s.toLowerCase()+",norm:"+r+","+t.toLowerCase();return"cluster_avg_"+W(a)}}}function h(i,s,e,t){const r=W(s),a=e==="mode"?`cluster_type_${r}`:e==="sum"?`cluster_sum_${r}`:`cluster_avg_${r}`;return i.some(d=>d.name===a)||i.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new C({expression:s,returnType:t}),statisticType:e})),a}function y(i,s,e,t,r){if(s==="cluster_count"||i.some(d=>d.name===s))return s;const a=be(e,s,r);return i.some(d=>d.name===a)||(e==="avg_norm"?i.push(new m({name:a,isAutoGenerated:!0,onStatisticExpression:new C({expression:`$feature.${s} / $feature.${r}`,returnType:t}),statisticType:"avg"})):i.push(new m({name:a,isAutoGenerated:!0,onStatisticField:s,statisticType:e}))),a}const _e=i=>{let s=class extends i{constructor(...e){super(...e),this.addHandles(oe(()=>this.renderer,()=>{if(this.featureReduction){const t=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",t)}},ae))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_withClusterVariable(e,t,r){const a=e.clone();return"visualVariables"in a&&(a.visualVariables||(a.visualVariables=[]),a.visualVariables.some(d=>d.type==="size")||a.visualVariables.push(new ue({field:"cluster_count",stops:[new E({value:1}),new E({useMinValue:!0,size:t}),new E({useMaxValue:!0,size:r})]}))),a}_normalizeFeatureReduction(e){if(e?.type!=="cluster")return e;const t=e.clone(),r=[new m({name:"cluster_count",alias:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],a=(t.fields??[]).filter(b=>!b.isAutoGenerated),d=e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated,{clusterMinSize:$,clusterMaxSize:I}=t;if(d){t.fields=[...r,...a];const b=this._withClusterVariable(t.renderer,$,I);return t.effectiveFeatureRenderer=b,t.effectiveClusterRenderer=b,t}if(e.symbol){if(t.fields=[...r,...a],t.renderer=null,!this.renderer)return t.effectiveFeatureRenderer=null,t.effectiveClusterRenderer=null,t;const b=B(r,this.renderer),w=this._withClusterVariable(b,$,I),Z="visualVariables"in w&&w.visualVariables?w.visualVariables:[],ee=new j({symbol:e.symbol,visualVariables:Z});return t.fields=[...r,...a],t.effectiveFeatureRenderer=w,t.effectiveClusterRenderer=ee,t}if(!this.renderer)return e;const A=B(r,this.renderer);t.fields=[...r,...a],t.renderer=A;const G=this._withClusterVariable(A,$,I);return t.effectiveFeatureRenderer=G,t.effectiveClusterRenderer=G,t}};return n([o(de)],s.prototype,"featureReduction",null),s=n([g("esri.layers.mixins.FeatureReductionLayer")],s),s};export{_e as c,de as p};
