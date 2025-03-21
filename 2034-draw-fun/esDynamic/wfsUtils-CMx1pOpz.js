import{U as g,cM as j,s as c,cN as L,cO as C,cP as E,cQ as T,E as R,bx as $,cR as Y,aB as W,ck as X,cl as h}from"./main-CZM6prq-.js";import{N as z,K as q}from"./projection-BCWa6dVm.js";import{u as _}from"./geojson-RVfL9t6h.js";import{o as F,n as w}from"./xmlUtils-TLuV3CJ7.js";import{p as Q}from"./arcgisLayerUrl-B09LFK4c.js";import{y as f}from"./Field-Czw7f_GQ.js";const S="xlink:href",y="2.0.0",x="__esri_wfs_id__",J="wfs-layer:getWFSLayerTypeInfo-error",K="wfs-layer:empty-service",k="wfs-layer:feature-type-not-found",B="wfs-layer:geojson-not-supported",H="wfs-layer:kvp-encoding-not-supported",Z="wfs-layer:malformed-json",P="wfs-layer:unknown-geometry-type",ee="wfs-layer:unknown-field-type",te="wfs-layer:unsupported-spatial-reference",ae="wfs-layer:unsupported-wfs-version";async function re(a,t){const e=ne((await g(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:y,...t?.customParameters},signal:t?.signal})).data);return ie(a,e),e}function ne(a){const t=U(a);Te(t),D(t);const e=t.firstElementChild,r=j(ue(e));return{operations:oe(e),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}const se=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function A(a){for(const t of se){const e=a.findIndex(r=>r.toLowerCase()===t);if(e>=0)return a[e]}return null}function oe(a){let t=!1;const e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},r=[],s=[];if(F(a,{OperationsMetadata:{Parameter:n=>{if(n.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:o})=>{o&&r.push(o)}}}},Operation:n=>{switch(n.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:o=>{e.GetCapabilities.url=o.getAttribute(S)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:o=>{e.DescribeFeatureType.url=o.getAttribute(S)}}}};case"GetFeature":return{DCP:{HTTP:{Get:o=>{e.GetFeature.url=o.getAttribute(S)}}},Parameter:o=>{if(o.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&s.push(i)}}}}}}},Constraint:n=>{switch(n.getAttribute("name")){case"KVPEncoding":return{DefaultValue:o=>{t=o.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:o=>{e.GetFeature.supportsPagination=o.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=A(s)??A(r),!t)throw new c(H,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new c(B,"WFS service doesn't support GeoJSON output format");return e}function ie(a,t){L(a)&&(C(a,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=E(t.operations.DescribeFeatureType.url)),C(a,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=E(t.operations.GetFeature.url)))}function N(a){const t=parseInt(a.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function ue(a){return w(a,{FeatureTypeList:{FeatureType:t=>{const e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return F(t,{Name:s=>{const{name:n,prefix:o}=b(s.textContent);e.typeName=`${o}:${n}`,e.name=n,e.namespacePrefix=o,e.namespaceUri=s.lookupNamespaceURI(o)},Abstract:s=>{e.description=s.textContent},Title:s=>{e.title=s.textContent},WGS84BoundingBox:s=>{e.extent=W.fromJSON(pe(s))},DefaultCRS:s=>{const n=N(s);n&&(e.defaultSpatialReference=n,r.add(n))},OtherCRS:s=>{const n=N(s);n&&r.add(n)}}),e.title||(e.title=e.name),r.add(4326),e.supportedSpatialReferences.push(...r),e}}})}function pe(a){let t,e,r,s;for(const n of a.children)switch(n.localName){case"LowerCorner":[t,e]=n.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[r,s]=n.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:t,ymin:e,xmax:r,ymax:s,spatialReference:X}}function v(a,t,e){return T(a,r=>e?r.name===t&&r.namespaceUri===e:r.typeName===t||r.name===t)}async function le(a,t,e,r={}){const{featureType:s,extent:n}=await ce(a,t,e,r),{spatialReference:o}=O(a.operations.GetFeature.url,s,r.spatialReference),{fields:i,geometryType:u,swapXY:p,objectIdField:l,geometryField:m}=await me(a,s,o,r);return{url:a.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:i,geometryField:m,geometryType:u,objectIdField:l,spatialReference:r.spatialReference??new R({wkid:s.defaultSpatialReference}),extent:n,swapXY:p,wfsCapabilities:a,customParameters:r.customParameters}}async function ce(a,t,e,r={}){const s=a.readFeatureTypes(),n=t?v(s,t,e):s.next().value,{spatialReference:o=new R({wkid:n?.defaultSpatialReference})}=r;if(n==null)throw t?new c(k,`The type '${t}' could not be found in the service`):new c(K,"The service is empty");let i=n.extent;if(i&&!$(i.spatialReference,o))try{await z(i.spatialReference,o,void 0,r),i=q(i,o)}catch{throw new c(te,"Projection not supported")}return{extent:i,spatialReference:o,featureType:n}}async function me(a,t,e,r={}){const{typeName:s}=t,[n,o]=await Promise.allSettled([ye(a.operations.DescribeFeatureType.url,s,r),fe(a,s,e,r)]),i=d=>new c(J,`An error occurred while getting info about the feature type '${s}'`,{error:d});if(n.status==="rejected")throw i(n.reason);if(o.status==="rejected")throw i(o.reason);const{fields:u,errors:p}=n.value??{},l=n.value?.geometryType||o.value?.geometryType,m=o.value?.swapXY??!1;if(l==null)throw new c(P,`The geometry type could not be determined for type '${s}`,{typeName:s,geometryType:l,fields:u,errors:p});return{...G(u??[]),geometryType:l,swapXY:m}}function G(a){const t=a.find(r=>r.type==="geometry");let e=a.find(r=>r.type==="oid");return a=a.filter(r=>r.type!=="geometry"),e||(e=new f({name:x,type:"oid",alias:x}),a.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:a}}async function fe(a,t,e,r={}){let s,n=!1;const[o,i]=await Promise.all([I(a.operations.GetFeature.url,t,e,a.operations.GetFeature.outputFormat,{...r,count:1}),g(a.operations.GetFeature.url,{responseType:"text",query:M(t,e,void 0,{...r,count:1}),signal:r?.signal})]),u=o.type==="FeatureCollection"&&o.features[0]?.geometry;if(u){let p;switch(s=Y.fromJSON(_(u.type)),u.type){case"Point":p=u.coordinates;break;case"LineString":case"MultiPoint":p=u.coordinates[0];break;case"MultiLineString":case"Polygon":p=u.coordinates[0][0];break;case"MultiPolygon":p=u.coordinates[0][0][0]}const l=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(l){const m=p[0].toFixed(3),d=p[1].toFixed(3),V=parseFloat(l[1]).toFixed(3);m===parseFloat(l[2]).toFixed(3)&&d===V&&(n=!0)}}return{geometryType:s,swapXY:n}}async function ye(a,t,e){return de(t,(await g(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:y,TYPENAME:t,TYPENAMES:t,...e?.customParameters},signal:e?.signal})).data)}function de(a,t){const{name:e}=b(a),r=U(t);D(r);const s=T(w(r.firstElementChild,{element:n=>n}),n=>n.getAttribute("name")===e);if(s!=null){const n=s.getAttribute("type"),o=n?T(w(r.firstElementChild,{complexType:i=>i}),i=>i.getAttribute("name")===b(n).name):T(w(s,{complexType:i=>i}),()=>!0);if(o)return we(o)}throw new c(k,`Type '${a}' not found in document`,{document:new XMLSerializer().serializeToString(r)})}const ge=new Set(["objectid","fid"]);function we(a){const t=[],e=[];let r;const s=w(a,{complexContent:{extension:{sequence:{element:n=>n}}}});for(const n of s){const o=n.getAttribute("name");if(!o)continue;let i,u;if(n.hasAttribute("type")?i=b(n.getAttribute("type")).name:F(n,{simpleType:{restriction:m=>(i=b(m.getAttribute("base")).name,{maxLength:d=>{u=+d.getAttribute("value")}})}}),!i)continue;const p=n.getAttribute("nillable")==="true";let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new f({name:o,alias:o,type:"integer",nullable:p,length:h("integer")}));break;case"float":case"double":case"decimal":e.push(new f({name:o,alias:o,type:"double",nullable:p,length:h("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new f({name:o,alias:o,type:"string",nullable:p,length:u??h("string")}));break;case"datetime":case"date":e.push(new f({name:o,alias:o,type:"date",nullable:p,length:u??h("date")}));break;case"pointpropertytype":r="point",l=!0;break;case"multipointpropertytype":r="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,t.push(new c(P,`geometry type '${i}' is not supported`,{type:new XMLSerializer().serializeToString(a)}));break;default:t.push(new c(ee,`Unknown field type '${i}'`,{type:new XMLSerializer().serializeToString(a)}))}l&&e.push(new f({name:o,alias:o,type:"geometry",nullable:p}))}for(const n of e)if(n.type==="integer"&&!n.nullable&&ge.has(n.name.toLowerCase())){n.type="oid";break}return{geometryType:r,fields:e,errors:t}}async function I(a,t,e,r,s){let{data:n}=await g(a,{responseType:"text",query:M(t,e,r,s),signal:s?.signal});n=n.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(n)}catch(o){throw new c(Z,"Error while parsing the\xA0response",{response:n,error:o})}}function M(a,t,e,r){const s=typeof t=="number"?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:y,TYPENAMES:a,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+s,STARTINDEX:r?.startIndex,COUNT:r?.count,...r?.customParameters}}async function be(a,t,e){const r=await g(a,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:y,TYPENAMES:t,RESULTTYPE:"hits",...e?.customParameters},signal:e?.signal}),s=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(r.data);if(s?.groups)return+s.groups.numberMatched}function U(a){return new DOMParser().parseFromString(a.trim(),"text/xml")}function b(a){const[t,e]=a.split(":");return{prefix:e?t:"",name:e??t}}function Te(a){const t=a.firstElementChild?.getAttribute("version");if(t&&t!==y)throw new c(ae,`Unsupported WFS version ${t}. Supported version: ${y}`)}function D(a){let t="",e="";if(F(a.firstElementChild,{Exception:r=>(t=r.getAttribute("exceptionCode"),{ExceptionText:s=>{e=s.textContent}})}),t)throw new c(`wfs-layer:${t}`,e)}function O(a,t,e){const r={wkid:t.defaultSpatialReference},s=e?.wkid!=null?{wkid:e.wkid}:r;return{spatialReference:s,getFeatureSpatialReference:Q(a)||s.wkid&&t.supportedSpatialReferences.includes(s.wkid)?{wkid:s.wkid}:{wkid:t.defaultSpatialReference}}}export{I as K,x as S,le as W,v as Y,be as e,O as o,re as v,G as z};
