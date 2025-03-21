import{q as l,u as s,z as g,v as u,C as S,A as P,az as C,fB as $,fC as j,fD as I,fE as h,fF as B,fG as N,h as d,s as D,n as G}from"./main-QmNQNEqS.js";import{E as x,u as M,_ as O,x as z,f as V,g as F}from"./labelUtils-DCrCxHm8.js";var y;let p=y=class extends P{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?x(t.value):e}writeExpression(e,t,n){this.value!=null&&(e=x(this.value)),e!=null&&(t[n]=e)}clone(){return new y({expression:this.expression,title:this.title,value:this.value})}};l([s({type:String,json:{write:{writerEnsuresNonNull:!0}}})],p.prototype,"expression",void 0),l([g("expression",["expression","value"])],p.prototype,"readExpression",null),l([u("expression")],p.prototype,"writeExpression",null),l([s({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],p.prototype,"title",void 0),l([s({json:{read:!1,write:!1}})],p.prototype,"value",void 0),p=y=l([S("esri.layers.support.LabelExpressionInfo")],p);const L=p;var m;const v=new C({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function w(e,t,n){return{enabled:!B(n?.layer)}}function E(e){return!e||e.origin!=="service"&&e.layer?.type!=="map-image"}function R(e){return e?.type==="map-image"}function A(e){return!!R(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}function J(e){return E(e)||A(e?.layer)}let i=m=class extends P{static evaluateWhere(e,t){const n=(r,o,a)=>{switch(o){case"=":return r==a;case"<>":return r!=a;case">":return r>a;case">=":return r>=a;case"<":return r<a;case"<=":return r<=a}return!1};try{if(e==null)return!0;const r=e.split(" ");if(r.length===3)return n(t[r[0]],r[1],r[2]);if(r.length===7){const o=n(t[r[0]],r[1],r[2]),a=r[3],c=n(t[r[4]],r[5],r[6]);switch(a){case"AND":return o&&c;case"OR":return o||c}}return!1}catch{}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=N,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,t){const n=t.labelExpressionInfo;if(!n||!n.value&&!n.expression)return e}writeLabelExpression(e,t,n){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=M(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const r=O(this.labelExpressionInfo.expression);r&&(e="["+r+"]")}}e!=null&&(t[n]=e)}writeLabelExpressionInfo(e,t,n,r){if(e==null&&this.labelExpression!=null&&E(r))e=new L({expression:this.getLabelExpressionArcade()});else if(!e)return;const o=e.toJSON(r);o.expression&&(t[n]=o)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return z(this)}getLabelExpressionArcade(){return V(this)}getLabelExpressionSingleField(){return F(this)}hash(){return JSON.stringify(this)}clone(){return new m({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:d(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:d(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};l([s({type:String,json:{write:!0}})],i.prototype,"name",void 0),l([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:w}}}}})],i.prototype,"allowOverrun",void 0),l([s({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:w}}}}})],i.prototype,"deconflictionStrategy",void 0),l([s({type:String,json:{write:{overridePolicy(e,t,n){return this.labelExpressionInfo&&n?.origin==="service"&&A(n.layer)?{enabled:!1}:{allowNull:!0}}}}})],i.prototype,"labelExpression",void 0),l([g("labelExpression")],i.prototype,"readLabelExpression",null),l([u("labelExpression")],i.prototype,"writeLabelExpression",null),l([s({type:L,json:{write:{overridePolicy:(e,t,n)=>J(n)?{allowNull:!0}:{enabled:!1}}}})],i.prototype,"labelExpressionInfo",void 0),l([u("labelExpressionInfo")],i.prototype,"writeLabelExpressionInfo",null),l([s({type:v.apiValues,json:{type:v.jsonValues,read:v.read,write:v.write}})],i.prototype,"labelPlacement",void 0),l([s({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],i.prototype,"labelPosition",void 0),l([s({type:Number})],i.prototype,"maxScale",void 0),l([u("maxScale")],i.prototype,"writeMaxScale",null),l([s({type:Number})],i.prototype,"minScale",void 0),l([u("minScale")],i.prototype,"writeMinScale",null),l([s({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],i.prototype,"repeatLabel",void 0),l([s({type:Number,cast:$,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:w}}}}})],i.prototype,"repeatLabelDistance",void 0),l([s({types:j,json:{origins:{"web-scene":{types:I,write:h,default:null}},write:h,default:null}})],i.prototype,"symbol",void 0),l([s({type:Boolean,json:{write:!0}})],i.prototype,"useCodedValues",void 0),l([s({type:String,json:{write:!0}})],i.prototype,"where",void 0),i=m=l([S("esri.layers.support.LabelClass")],i);const U=i,f=()=>G.getLogger("esri.layers.support.labelingInfo"),k=/\[([^[\]]+)\]/gi;function K(e,t,n){return e?e.map(r=>{const o=new U;if(o.read(r,n),o.labelExpression){const a=t.fields||t.layerDefinition?.fields||this.fields;o.labelExpression=o.labelExpression.replaceAll(k,(c,b)=>`[${q(b,a)}]`)}return o}):null}function q(e,t){if(!t)return e;const n=e.toLowerCase();for(let r=0;r<t.length;r++){const o=t[r].name;if(o.toLowerCase()===n)return o}return e}const H={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function Q(e,t){const n=[];for(const r of e){const o=r.labelPlacement,a=H[t];if(!r.symbol)return f().warn("No ILabelClass symbol specified."),[];if(!a)return f().error(new D("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),[];if(a.includes(o))n.push(r);else{const c=a[0];o&&f().warn(`Found invalid label placement type ${o} for ${t}. Defaulting to ${c}`);const b=r.clone();b.labelPlacement=c,n.push(b)}}return n}export{U as C,Q as a,K as n};
