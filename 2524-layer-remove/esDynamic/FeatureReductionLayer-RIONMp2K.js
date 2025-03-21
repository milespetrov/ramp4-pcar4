import{a_ as re,v as _,k as n,o,A as h,f as p,bk as $,b4 as k,f$ as N,fy as f,q as R,u as x,aY as L,ht as ie,a$ as q,de as se,s as ne,n as oe,aE as ae,az as le}from"./main-sNoC4iWN.js";import{j as ue,b as pe,a as F}from"./UniqueValueRenderer-DS3bVRn5.js";import{m as B,o as z,p as V}from"./jsonUtils-bqd4zcsy.js";import{p as O,l as J,a as de}from"./commonProperties-CPuTkHLG.js";import{t as S,p as U}from"./FeatureReductionSelection-BtrVGYuH.js";import{z as D}from"./featureLayerUtils-Dac5P9pc.js";import{C as H}from"./labelingInfo-D887Yd6d.js";import{x as Y}from"./MD5-CHHr-oed.js";let v=class extends re(_){constructor(r){super(r),this.expression=null,this.title=null,this.returnType=null}};n([o({type:String,json:{write:!0}})],v.prototype,"expression",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),n([o({type:String,json:{write:!0}})],v.prototype,"returnType",void 0),v=n([h("esri.layers.support.ExpressionInfo")],v);const T=v;var j;let c=j=class extends _{constructor(r){super(r),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new j({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:p(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};n([o({type:Boolean,json:{write:!0}})],c.prototype,"isAutoGenerated",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"name",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"alias",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"onStatisticField",void 0),n([o({type:T,json:{write:!0}})],c.prototype,"onStatisticExpression",void 0),n([o({type:String,json:{write:!0}})],c.prototype,"statisticType",void 0),c=j=n([h("esri.layers.support.AggregateField")],c);const y=c;var C;let u=C=class extends S{constructor(r){super(r),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=f("12px"),this.fields=[],this.renderer=null}writeFields(r,s,e){const t=r.filter(i=>i.statisticType!=="avg_angle").map(i=>i.toJSON());L(e,t,s)}readRenderer(r,s,e){const t=s.drawingInfo?.renderer;return t?z(t,s,e)??void 0:D(s,e)}clone(){return new C({fields:p(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:p(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:p(this.popupTemplate),renderer:p(this.renderer),binType:p(this.binType),size:this.size})}};n([$({binning:"binning"})],u.prototype,"type",void 0),n([$({geohash:"geohash",square:"square"}),o({type:["geohash","square"]})],u.prototype,"binType",void 0),n([o({type:Number,json:{write:!0}})],u.prototype,"fixedBinLevel",void 0),n([o({type:[H],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],u.prototype,"labelingInfo",void 0),n([o(O)],u.prototype,"labelsVisible",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],u.prototype,"maxScale",void 0),n([o(J)],u.prototype,"popupEnabled",void 0),n([o({type:k,json:{name:"popupInfo",write:!0}})],u.prototype,"popupTemplate",void 0),n([o({cast:r=>r==="auto"?r:N(f(r))})],u.prototype,"size",void 0),n([o({type:[y],json:{write:!0}})],u.prototype,"fields",void 0),n([R("fields")],u.prototype,"writeFields",null),n([o({types:B,json:{write:{target:"drawingInfo.renderer"}}})],u.prototype,"renderer",void 0),n([x("renderer",["drawingInfo.renderer"])],u.prototype,"readRenderer",null),u=C=n([h("esri.layers.support.FeatureReductionBinning")],u);const K=u;var A;function P(r){return r.type==="simple"&&!r.visualVariables?.length}let l=A=class extends _{constructor(r){super(r),this.type="cluster",this.clusterRadius=f("80px"),this.clusterMinSize=f("12px"),this.clusterMaxSize=f("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(r,s,e){const t=s.drawingInfo?.renderer;return t?.authoringInfo?.isAutoGenerated?null:t?P(t)?null:z(t,s,e)??void 0:D(s,e)}readSymbol(r,s,e){const t=s.drawingInfo?.renderer;return t?.authoringInfo?.isAutoGenerated?null:t&&P(t)?z(t,s,e)?.symbol:null}writeSymbol(r,s,e,t){const i=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||i){const a=new V({symbol:r});s.drawingInfo={renderer:a.write({},t)}}}writeFields(r,s,e){const t=r.filter(i=>i.statisticType!=="avg_angle").map(i=>i.toJSON());L(e,t,s)}readFields(r,s,e){return r.filter(t=>!t.isAutoGenerated).map(t=>y.fromJSON(t))}clone(){return new A({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:p(this.labelingInfo),labelsVisible:this.labelsVisible,fields:p(this.fields),maxScale:this.maxScale,renderer:p(this.renderer),symbol:p(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:p(this.popupTemplate)})}};n([o({type:["cluster"],readOnly:!0,json:{write:!0}})],l.prototype,"type",void 0),n([o({cast:r=>r==="auto"?r:N(f(r)),json:{write:!0}})],l.prototype,"clusterRadius",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMinSize",void 0),n([o({type:Number,cast:f,json:{write:!0}})],l.prototype,"clusterMaxSize",void 0),n([o({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],l.prototype,"maxScale",void 0),n([o(J)],l.prototype,"popupEnabled",void 0),n([o({type:k,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],l.prototype,"popupTemplate",void 0),n([o({types:B,json:{write:{target:"drawingInfo.renderer"}}})],l.prototype,"renderer",void 0),n([x("renderer",["drawingInfo.renderer"])],l.prototype,"readRenderer",null),n([o({types:ie})],l.prototype,"symbol",void 0),n([x("symbol",["drawingInfo.renderer"])],l.prototype,"readSymbol",null),n([R("symbol")],l.prototype,"writeSymbol",null),n([o({type:[H],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],l.prototype,"labelingInfo",void 0),n([o(O)],l.prototype,"labelsVisible",void 0),n([o({type:[y],json:{write:!0}})],l.prototype,"fields",void 0),n([R("fields")],l.prototype,"writeFields",null),n([x("fields")],l.prototype,"readFields",null),l=A=n([h("esri.layers.support.FeatureReductionCluster")],l);const Q=l,W={key:"type",base:S,typeMap:{cluster:Q,binning:K}},X={types:{key:"type",base:S,typeMap:{selection:U,cluster:Q,binning:K}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:W},"portal-item":{types:W},"web-scene":{types:{key:"type",base:S,typeMap:{selection:U}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:de}}}}},ce=()=>oe.getLogger("esri.views.2d.layers.support.clusterUtils");q.add("esri-cluster-arcade-enabled",!0);const fe=q("esri-cluster-arcade-enabled"),ye=new Set(["simple-line","simple-fill","picture-fill"]);function Z(r,s){let e=s.clone();if(!me(e))return e;if(s.getSymbols().some(t=>ye.has(t.type))&&(e=new V({symbol:new se})),e.authoringInfo||(e.authoringInfo=new ue),e.authoringInfo.isAutoGenerated=!0,"visualVariables"in e){const t=(e.visualVariables||[]).filter(i=>i.valueExpression!=="$view.scale");t.forEach(i=>{i.type==="rotation"?i.field?i.field=m(r,i.field,"avg_angle","number"):i.valueExpression&&(i.field=g(r,i.valueExpression,"avg_angle","number"),i.valueExpression=null):i.normalizationField?(i.field=m(r,i.field,"avg_norm","number",i.normalizationField),i.normalizationField=null):i.field?i.field=m(r,i.field,"avg","number"):i.valueExpression&&(i.field=g(r,i.valueExpression,"avg","number"),i.valueExpression=null)}),e.visualVariables=t}switch(e.type){case"simple":break;case"pie-chart":for(const t of e.attributes)t.field?t.field=m(r,t.field,"sum","number"):t.valueExpression&&(t.field=g(r,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":e.field?e.field=m(r,e.field,"mode","string"):e.valueExpression&&(e.field=g(r,e.valueExpression,"mode","string"),e.valueExpression=null);break;case"class-breaks":e.normalizationField?(e.field=m(r,e.field,"avg_norm","number",e.normalizationField),e.normalizationField=null):e.field?e.field=m(r,e.field,"avg","number"):e.valueExpression&&(e.field=g(r,e.valueExpression,"avg","number"),e.valueExpression=null)}return e}const me=r=>{const s=e=>ce().error(new ne("Unsupported-renderer",e,{renderer:r}));if(!r)return!1;switch(r.type){case"unique-value":if(r.field2||r.field3)return s("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(r.normalizationField){const e=r.normalizationType;if(e!=="field")return s(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}break;case"simple":case"pie-chart":break;default:return s(`FeatureReductionCluster does not support renderers of type ${r.type}`),!1}if(!fe){if("valueExpression"in r&&r.valueExpression)return s("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in r&&r.visualVariables||[]).some(e=>!(!("valueExpression"in e)||!e.valueExpression)))return s("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function be(r,s,e){switch(r){case"sum":return`cluster_sum_${s}`;case"avg":case"avg_angle":return`cluster_avg_${s}`;case"mode":return`cluster_type_${s}`;case"avg_norm":{const t=e,i="field",a=s.toLowerCase()+",norm:"+i+","+t.toLowerCase();return"cluster_avg_"+Y(a)}}}function g(r,s,e,t){const i=Y(s),a=e==="mode"?`cluster_type_${i}`:e==="sum"?`cluster_sum_${i}`:`cluster_avg_${i}`;return r.some(d=>d.name===a)||r.push(new y({name:a,isAutoGenerated:!0,onStatisticExpression:new T({expression:s,returnType:t}),statisticType:e})),a}function m(r,s,e,t,i){if(s==="cluster_count"||r.some(d=>d.name===s))return s;const a=be(e,s,i);return r.some(d=>d.name===a)||(e==="avg_norm"?r.push(new y({name:a,isAutoGenerated:!0,onStatisticExpression:new T({expression:`$feature.${s} / $feature.${i}`,returnType:t}),statisticType:"avg"})):r.push(new y({name:a,isAutoGenerated:!0,onStatisticField:s,statisticType:e}))),a}const ve=r=>{let s=class extends r{constructor(...e){super(...e),this.addHandles(ae(()=>this.renderer,()=>{if(this.featureReduction){const t=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",t)}},le))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_withClusterVariable(e,t,i){const a=e.clone();return"visualVariables"in a&&(a.visualVariables||(a.visualVariables=[]),a.visualVariables.some(d=>d.type==="size")||a.visualVariables.push(new pe({field:"cluster_count",stops:[new F({value:1}),new F({useMinValue:!0,size:t}),new F({useMaxValue:!0,size:i})]}))),a}_normalizeFeatureReduction(e){if(e?.type!=="cluster")return e;const t=e.clone(),i=[new y({name:"cluster_count",alias:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],a=(t.fields??[]).filter(b=>!b.isAutoGenerated),d=e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated,{clusterMinSize:E,clusterMaxSize:I}=t;if(d){t.fields=[...i,...a];const b=this._withClusterVariable(t.renderer,E,I);return t.effectiveFeatureRenderer=b,t.effectiveClusterRenderer=b,t}if(e.symbol){if(t.fields=[...i,...a],t.renderer=null,!this.renderer)return t.effectiveFeatureRenderer=null,t.effectiveClusterRenderer=null,t;const b=Z(i,this.renderer),w=this._withClusterVariable(b,E,I),ee="visualVariables"in w&&w.visualVariables?w.visualVariables:[],te=new V({symbol:e.symbol,visualVariables:ee});return t.fields=[...i,...a],t.effectiveFeatureRenderer=w,t.effectiveClusterRenderer=te,t}if(!this.renderer)return e;const G=Z(i,this.renderer);t.fields=[...i,...a],t.renderer=G;const M=this._withClusterVariable(G,E,I);return t.effectiveFeatureRenderer=M,t.effectiveClusterRenderer=M,t}};return n([o(X)],s.prototype,"featureReduction",null),s=n([h("esri.layers.mixins.FeatureReductionLayer")],s),s};export{ve as c,X as p};
