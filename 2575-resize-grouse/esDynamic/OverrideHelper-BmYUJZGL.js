import{n as v,s as M,f as d,em as C,aC as I}from"./main-BriipcPO.js";import{c as x}from"./colorUtils-DNcgOjeu.js";import{B as O,W as b,U as h,v as k,a as S,c as g,z as N}from"./utils-SPbpQbmm.js";import{B as P,H as w,D as G,C as T}from"./quantizationUtils-k9XIKxlY.js";function E(l,e,r,i,s){if(l==null)return null;const t=l.referencesGeometry()&&s?A(e,i,s):e,o=l.repurposeFeature(t);try{return l.evaluate({...r,$feature:o},l.services)}catch(a){return v.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}const m=new Map;function A(l,e,r){const{transform:i,hasZ:s,hasM:t}=r;m.has(e)||m.set(e,L(e));const o=m.get(e)(l.geometry,i,s,t);return{...l,geometry:o}}function L(l){const e={};switch(l){case"esriGeometryPoint":return(r,i,s,t)=>T(i,e,r,s,t);case"esriGeometryPolygon":return(r,i,s,t)=>G(i,e,r,s,t);case"esriGeometryPolyline":return(r,i,s,t)=>w(i,e,r,s,t);case"esriGeometryMultipoint":return(r,i,s,t)=>P(i,e,r,s,t);default:return v.getLogger("esri.views.2d.support.arcadeOnDemand").error(new M("mapview-arcade",`Unable to handle geometryType: ${l}`)),r=>r}}const D=l=>{if(!l)return[0,0,0,0];const{r:e,g:r,b:i,a:s}=l;return[e,r,i,255*s]};class c{static findApplicableOverrides(e,r,i){if(e&&r){if(e.primitiveName){let s=!1;for(const t of i)if(t.primitiveName===e.primitiveName){s=!0;break}if(!s)for(const t of r)t.primitiveName===e.primitiveName&&i.push(t)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)c.findApplicableOverrides(s,r,i);if(e.symbolLayers)for(const s of e.symbolLayers)c.findApplicableOverrides(s,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const s of e.effects)c.findApplicableOverrides(s,r,i);if(e.markerPlacement&&c.findApplicableOverrides(e.markerPlacement,r,i),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const s of e.markerGraphics)c.findApplicableOverrides(s,r,i),c.findApplicableOverrides(s.symbol,r,i)}else e.type==="CIMCharacterMarker"?c.findApplicableOverrides(e.symbol,r,i):e.type==="CIMHatchFill"?c.findApplicableOverrides(e.lineSymbol,r,i):e.type==="CIMPictureMarker"&&c.findApplicableOverrides(e.animatedSymbolProperties,r,i)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&O(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const i=b(e),s=e.primitiveName,t=[];for(const o of r)o.primitiveName===s&&t.push(b(o));return{type:"cim-effect-param",effect:i,overrides:h(t)}}static async resolveSymbolOverrides(e,r,i,s,t,o,a){if(!e?.symbol)return null;let{symbol:p,primitiveOverrides:n}=e;const y=!!n;if(!y&&!s)return p;p=d(p),n=d(n);let u=!0;if(r||(r={attributes:{}},u=!1),y){if(u||(n=n.filter(f=>!f.valueExpressionInfo?.expression.includes("$feature"))),a||(n=n.filter(f=>!f.valueExpressionInfo?.expression.includes("$view"))),n.length>0){const f={spatialReference:i,fields:k(r.attributes),geometryType:t};await c.createRenderExpressions(n,f),c.evaluateOverrides(n,r,t??"esriGeometryPoint",o,a)}c.applyOverrides(p,n)}return s&&c.applyDictionaryTextOverrides(p,r,s,null),p}static async createRenderExpressions(e,r){const i=[];for(const s of e){const t=s.valueExpressionInfo;if(!t||c._expressionToRenderExpression.has(t.expression))continue;const o=C(t.expression,r.spatialReference,r.fields);i.push(o),o.then(a=>c._expressionToRenderExpression.set(t.expression,a))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,r,i,s,t){const o={$view:{scale:t?.scale}};for(const a of e){a.value&&typeof a.value=="object"&&x(a.value)&&(a.propertyName==="Color"||a.propertyName==="StrokeColor")&&(a.value=D(a.value));const p=a.valueExpressionInfo;if(!p)continue;const n=c._expressionToRenderExpression.get(p.expression);n&&(a.value=E(n,r,o,i,s))}}static applyDictionaryTextOverrides(e,r,i,s,t="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&a.type==="CIMVectorMarker"&&c.applyDictionaryTextOverrides(a,r,i,s,e.type==="CIMTextSymbol"?e.textCase:t)}break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)return;for(const a of o)a&&c.applyDictionaryTextOverrides(a,r,i,s)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=S(o,i);e.textString=g(r,a,s,t)}}}}static applyOverrides(e,r,i,s){if(e.primitiveName){for(const t of r)if(t.primitiveName===e.primitiveName){const o=N(t.propertyName);if(s&&s.push({cim:e,nocapPropertyName:o,value:e[o]}),i){let a=!1;for(const p of i)p.primitiveName===e.primitiveName&&(a=!0);a||i.push(t)}t.value!=null&&(e[o]=t.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const t of e.effects)c.applyOverrides(t,r,i,s);if(e.symbolLayers)for(const t of e.symbolLayers)c.applyOverrides(t,r,i,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const t of e.effects)c.applyOverrides(t,r,i,s);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const t of e.markerGraphics)c.applyOverrides(t,r,i,s),c.applyOverrides(t.symbol,r,i,s)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const i of e)i.value!==void 0&&(r+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(i=>Number(i));if(e==="Color"){const i=new I(r).toRgba();return i[3]*=255,i}return r}}c._expressionToRenderExpression=new Map;export{c as y};
