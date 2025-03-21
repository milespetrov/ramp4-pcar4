import{m as T,n as g,a as G}from"./TimeOnly-DFUmG9m6.js";import{at as S,au as O}from"./main-BPeHLg3l.js";import{y as v}from"./Field-CYxVSkmq.js";var a,y;function I(e){return v.fromJSON(e.toJSON())}function b(e){return e.toJSON?e.toJSON():e}function D(e){return e instanceof Date}function N(e){return e instanceof S}function P(e){return e instanceof T}function x(e){return e instanceof g}function w(e){return e instanceof G}function k(e){if(e==null)return null;if(typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109439;case"kilometers":case"kilometer":case"km":return 109414}return null}function J(e){if(e==null)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new O({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function E(e){if(e==null)return null;if(typeof e=="number"||typeof e=="number")return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9093;case"kilometers":case"kilometer":case"km":return 9036}return null}(function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"})(a||(a={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(y||(y={}));const B=1e3,L={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},h={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},M={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function R(e){return e===void 0?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function U(e,n){n||(n={}),typeof n=="function"&&(n={cmp:n});const f=typeof n.cycles=="boolean"&&n.cycles,F=n.cmp&&(p=n.cmp,function(s){return function(r,t){const i={key:r,value:s[r]},o={key:t,value:s[t]};return p(i,o)}});var p;const l=[];return function s(r){if(r?.toJSON&&typeof r.toJSON=="function"&&(r=r.toJSON()),r===void 0)return;if(typeof r=="number")return isFinite(r)?""+r:"null";if(typeof r!="object")return JSON.stringify(r);let t,i;if(Array.isArray(r)){for(i="[",t=0;t<r.length;t++)t&&(i+=","),i+=s(r[t])||"null";return i+"]"}if(r===null)return"null";if(l.includes(r)){if(f)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const o=l.push(r)-1,u=Object.keys(r).sort(F?.(r));for(i="",t=0;t<u.length;t++){const c=u[t],m=s(r[c]);m&&(i&&(i+=","),i+=JSON.stringify(c)+":"+m)}return l.splice(o,1),"{"+i+"}"}(e)}function d(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function j(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return d(e)}}export{B as D,M as E,w as F,U as J,d as M,L as N,k as O,x as T,E as b,N as d,D as f,P as g,j,R as k,a as l,y as s,b as u,J as v,h as w,I as y};
