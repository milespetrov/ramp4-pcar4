import{bX as Q,b as m,bW as S,j as N,dw as P,dx as _,n as H,aX as X,bT as K,bo as Z,l as b,dy as y,bi as V}from"./main-CZM6prq-.js";import{$ as W,j as L}from"./utils-CPN0R0q5.js";const B="esri.widgets.Feature.support.featureUtils",g=()=>H.getLogger(B),J=/href=(""|'')/gi,Y=/(\{([^{\r\n]+)\})/g,ee=/'/g,x=/^\s*expression\//i,te=/(\n)/gi,ne=/[\u00A0-\u9999<>&]/gim,re=/href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi,ie=/^(?:mailto:|tel:)/,E="relationships/",v=Q("short-date-short-time");function ae(e){if(e!=null)return(e.sourceLayer||e.layer)??void 0}async function oe({type:e,value:t,event:n}){try{return typeof t=="function"?t(n):await t}catch(r){return void g().error("error",`An error occurred when calling the "${e}" function`,{error:r,graphic:n.graphic,value:t})}}function le(e=""){if(e)return!ie.test(e.trim().toLowerCase())}function C(e){return!!e&&x.test(e)}function se(e,t){if(!t||!C(t)||!e)return;const n=t.replace(x,"").toLowerCase();return e.find(({name:r})=>r.toLowerCase()===n)}function ue(e,t){const n=se(t,e?.fieldName);return n?n.title||null:e?e.label||e.fieldName:null}function fe(e,t){return`{${t.get(e.toLowerCase())?.fieldName||e}}`}function ce(e){return e.replaceAll(J,"")}function I(e,t){const n=h(t,e);return n?n.name:e}function de(e,t){return e&&e.map(n=>I(n,t))}function h(e,t){return e&&typeof e.getField=="function"&&t?e.getField(t)??null:null}function j(e){return`${e}`.trim()}function pe({attributes:e,globalAttributes:t,layer:n,text:r,expressionAttributes:a,fieldInfoMap:i}){return r?q({formattedAttributes:t,template:ge(r,{...t,...a,...e},n),fieldInfoMap:i}):""}function q({formattedAttributes:e,template:t,fieldInfoMap:n}){return j(ce(m(m(t,r=>fe(r,n)),e)))}function ye(e,t,n=!1){const r=t[e];if(typeof r=="string"){const a="%27",i=(n?encodeURIComponent(r):r).replaceAll(ee,a);t[e]=i}}function me(e,t=!1){const n={...e};return Object.keys(n).forEach(r=>ye(r,n,t)),n}function be(e,t,n){const r=(t=j(t))&&t[0]!=="{";return m(e,me(n,r||!1))}function A(e,t){return e.replaceAll(Y,(n,r,a)=>{const i=h(t,a);return i?`{${i.name}}`:r})}function ge(e,t,n){const r=A(e,n);return r&&r.replaceAll(re,(a,i,o)=>be(a,i||o,t))}function Ie(e,t){if(typeof e=="string"&&t&&t.dateFormat==null&&(t.places!=null||t.digitSeparator!=null)){const n=Number(e);if(!isNaN(n))return n}return e}function M(e){return e!=null&&typeof e=="object"&&"fieldsIndex"in e&&"geometryType"in e&&"getField"in e&&"load"in e&&"loaded"in e&&"objectIdField"in e&&"spatialReference"in e&&"type"in e&&(e.type==="feature"||e.type==="scene"||e.type==="subtype-sublayer"||e.type==="sublayer")&&"when"in e}function he(e){return e!=null&&typeof e=="object"&&"createQuery"in e&&"queryFeatureCount"in e&&"queryObjectIds"in e&&"queryRelatedFeatures"in e&&"queryRelatedFeaturesCount"in e&&"relationships"in e}function Te(e){return!!(e&&typeof e=="object"&&"createQuery"in e&&"queryFeatureCount"in e&&"type"in e)&&(e.type==="subtype-sublayer"&&"parent"in e&&e.parent&&typeof e.parent=="object"?"globalIdField"in e.parent:"globalIdField"in e)}function U(e){return M(e)&&he(e)}function we(e){return M(e)&&Te(e)}function Fe(e,t){const{fieldInfos:n,fieldName:r,preventPlacesFormatting:a,layer:i,timeZone:o}=t,u=R(n,r),s=h(i,r);if(u&&!Z(r)){const f=s?.type,c=u.format?.dateFormat;if(f==="date"||f==="date-only"||f==="time-only"||f==="timestamp-offset"||c)return L(e,{format:c,fieldType:f,timeZoneOptions:{layerTimeZone:i&&"preferredTimeZone"in i?i.preferredTimeZone:null,viewTimeZone:o,datesInUnknownTimezone:!(!i||!("datesInUnknownTimezone"in i))&&!!i.datesInUnknownTimezone}})}const l=u?.format;return typeof e=="string"&&Z(r)&&l?Ne(e,l):typeof(e=Ie(e,l))=="string"||e==null||l==null?w(e):b(e,a?{...y(l),minimumFractionDigits:0,maximumFractionDigits:20}:y(l))}function Ne(e,t){return e=e.trim(),/\d{2}-\d{2}/.test(e)?e:e.includes(",")?T(e,",",", ",t):e.includes(";")?T(e,";","; ",t):e.includes(" ")?T(e," "," ",t):b(Number(e),y(t))}function T(e,t,n,r){return e.trim().split(t).map(a=>b(Number(a),y(r))).join(n)}function R(e,t){if(e?.length&&t)return e.find(n=>n.fieldName?.toLowerCase()===t.toLowerCase())}function Ze({fieldName:e,graphic:t,layer:n}){if(F(e)||!n||typeof n.getFeatureType!="function")return null;const{typeIdField:r}=n;if(!r||e!==r)return null;const a=n.getFeatureType(t);return a?a.name:null}function Le({fieldName:e,value:t,graphic:n,layer:r}){if(F(e)||!r||typeof r.getFieldDomain!="function")return null;const a=n&&r.getFieldDomain(e,{feature:n,excludeImpliedDomains:V("esri-widget-legacy-field-domain-calculation")});return a&&a.type==="coded-value"?a.getName(t):null}function xe(e,t,n,r){const{creatorField:a,creationDateField:i,editorField:o,editDateField:u}=e;if(!t)return;const s=S(r&&"preferredTimeZone"in r?r.preferredTimeZone:null,!(!r||!("datesInUnknownTimezone"in r))&&!!r.datesInUnknownTimezone,n,v,"date"),l={...v,...s},f=t[u];if(typeof f=="number"){const d=t[o];return{type:"edit",date:N(f,l),user:d}}const c=t[i];if(typeof c=="number"){const d=t[a];return{type:"create",date:N(c,l),user:d}}return null}function Ee(e,t){const n=new Map;if(!e)return n;for(const r of e){if(!r.fieldName)continue;const a=I(r.fieldName,t);r.fieldName=a,n.set(a.toLowerCase(),r)}return n}function ve(e){const t=[];if(!e)return t;const{fieldInfos:n,content:r}=e;return n&&t.push(...n),r&&Array.isArray(r)&&r.forEach(a=>{if(a.type==="fields"){const i=a?.fieldInfos;i&&t.push(...i)}}),t}function Ce(e){return e.replaceAll(ne,t=>`&#${t.charCodeAt(0)};`)}function w(e){return typeof e=="string"?e.replaceAll(te,'<br class="esri-text-new-line" />'):e}function $(e){const{value:t,fieldName:n,fieldInfos:r,fieldInfoMap:a,layer:i,graphic:o,timeZone:u}=e;if(t==null)return"";const s=Le({fieldName:n,value:t,graphic:o,layer:i});if(s)return s;const l=Ze({fieldName:n,graphic:o,layer:i});if(l)return l;if(a.get(n.toLowerCase()))return Fe(t,{fieldInfos:r||Array.from(a.values()),fieldName:n,layer:i,timeZone:u});const f=i?.fieldsIndex?.get(n);return f&&(W(f)||X(f))?L(t,{fieldType:f.type,timeZoneOptions:{layerTimeZone:i&&"preferredTimeZone"in i?i.preferredTimeZone:null,viewTimeZone:u,datesInUnknownTimezone:!(!i||!("datesInUnknownTimezone"in i))&&!!i.datesInUnknownTimezone}}):w(t)}function je({fieldInfos:e,attributes:t,layer:n,graphic:r,fieldInfoMap:a,relatedInfos:i,timeZone:o}){const u={};return i?.forEach(s=>Ue({attributes:u,relatedInfo:s,fieldInfoMap:a,fieldInfos:e,layer:n,timeZone:o})),t&&Object.keys(t).forEach(s=>{const l=t[s];u[s]=$({fieldName:s,fieldInfos:e,fieldInfoMap:a,layer:n,value:l,graphic:r,timeZone:o})}),u}async function k(e,t){const{layer:n,graphic:r,outFields:a,objectIds:i,returnGeometry:o,spatialReference:u}=e,s=i[0];if(typeof s!="number"&&typeof s!="string"){const f="Could not query required fields for the specified feature. The feature's ID is invalid.",c={layer:n,graphic:r,objectId:s,requiredFields:a};return g().warn(f,c),null}if(!P(n)?.operations?.supportsQuery){const f="The specified layer cannot be queried. The following fields will not be available.",c={layer:n,graphic:r,requiredFields:a,returnGeometry:o};return g().warn(f,c),null}const l=n.createQuery();return l.objectIds=i,l.outFields=a?.length?a:[n.objectIdField],l.returnGeometry=!!o,l.returnZ=!!o,l.returnM=!!o,l.outSpatialReference=u,(await n.queryFeatures(l,t)).features[0]}async function qe(e){if(!e.expressionInfos?.length)return!1;const t=await K(),{arcadeUtils:{hasGeometryFunctions:n}}=t;return n(e)}async function Ae({graphic:e,popupTemplate:t,layer:n,spatialReference:r},a){if(!n||!t||(typeof n.load=="function"&&await n.load(a),!e.attributes))return;const i=n.objectIdField,o=e.attributes[i];if(o==null)return;const u=[o],s=await t.getRequiredFields(n.fieldsIndex),l=_(s,e),f=l?[]:s.includes(i)?s:[...s,i],c=t.returnGeometry||await qe(t);if(l&&!c)return;const d=await k({layer:n,graphic:e,outFields:f,objectIds:u,returnGeometry:c,spatialReference:r},a);d&&(d.geometry&&(e.geometry=d.geometry),d.attributes&&(e.attributes={...e.attributes,...d.attributes}))}function F(e=""){return!!e&&e.includes(E)}function Me(e){return e?`${E}${e.layerId}/${e.fieldName}`:""}function D({attributes:e,graphic:t,relatedInfo:n,fieldInfos:r,fieldInfoMap:a,layer:i,timeZone:o}){e&&t&&n&&Object.keys(t.attributes).forEach(u=>{const s=Me({layerId:n.relation.id.toString(),fieldName:u}),l=t.attributes[u];e[s]=$({fieldName:s,fieldInfos:r,fieldInfoMap:a,layer:i,value:l,graphic:t,timeZone:o})})}function Ue({attributes:e,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:a,timeZone:i}){e&&t&&(t.relatedFeatures?.forEach(o=>D({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:a,timeZone:i})),t.relatedStatsFeatures?.forEach(o=>D({attributes:e,graphic:o,relatedInfo:t,fieldInfoMap:n,fieldInfos:r,layer:a,timeZone:i})))}const z=e=>{if(!e)return!1;const t=e.toUpperCase();return t.includes("CURRENT_TIMESTAMP")||t.includes("CURRENT_DATE")||t.includes("CURRENT_TIME")},O=({layer:e,method:t,query:n,definitionExpression:r})=>{if(!e.capabilities?.query?.supportsCacheHint||t==="attachments")return;const a=n.where!=null?n.where:null,i=n.geometry!=null?n.geometry:null;z(r)||z(a)||i?.type==="extent"||n.resultType==="tile"||(n.cacheHint=!0)},Re=({query:e,layer:t,method:n})=>{O({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})},$e=({queryPayload:e,layer:t,method:n})=>{O({layer:t,method:n,query:e,definitionExpression:`${t.definitionExpression} ${t.serviceDefinitionExpression??""}`})};function ke(e,t,n){return e&&t&&n?t.type==="sublayer"?p({layers:t.layer?.sublayers,map:e,relatedLayer:t,relationship:n})||p({layers:t.layer?.subtables,map:e,relatedLayer:t,relationship:n}):p({layers:e.allLayers,map:e,relatedLayer:t,relationship:n})||p({layers:e.allTables,map:e,relatedLayer:t,relationship:n}):null}function De(e,t){return e&&"utilityNetworks"in e&&t?e.utilityNetworks?.find(n=>n.isUtilityLayer(t)):null}function G(e,t){return e?.allTables.find(n=>n.type==="feature"&&n.layerId===t.id&&n.url===t.layer?.url)}function p({map:e,relationship:t,relationship:{relatedTableId:n},relatedLayer:r,layers:a}){if(!a)return null;for(const i of a){if(i.type==="map-image"){const u=p({layers:i.sublayers,map:e,relatedLayer:r,relationship:t})||p({layers:i.subtables,map:e,relatedLayer:r,relationship:t});if(u)return u;continue}if(!U(i))continue;if(r.type==="sublayer"){if(i!==r&&i.id===n)return i.isTable?G(e,i):i;continue}const o=r.type==="scene"&&r.associatedLayer?r.associatedLayer.url:r.url;if(!o)return null;if(i.type!=="sublayer"){if(i!==r&&i.url===o&&i.layerId===n)return i}else if(i!==r&&i.layer?.url===o&&i.id===n)return i.isTable?G(e,i):i}return null}function ze(e){const t=e.getObjectId();return t!=null?`oid:${t}`:`uid:${e.uid}`}export{pe as D,oe as E,ke as F,U as K,ze as L,I as M,De as N,A as Q,de as R,Re as T,ue as U,we as V,ae as a,ve as b,k as c,je as f,xe as i,Ce as l,Ee as o,Ae as p,R as t,w as u,le as v,$e as w,C as x,F as y,q as z};
