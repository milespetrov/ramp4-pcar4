import{hn as C,ho as x,aH as S,dB as h,hp as F,hq as O,s as d,cs as w,be as U}from"./main-CZM6prq-.js";import{I as j,P as G,$ as V,H as Z,U as _,a as I,h as D,K as M}from"./featureConversionUtils-mvMgFlNe.js";import{s as f}from"./OptimizedGeometry-B-8pbmIt.js";import{x as H}from"./queryUtils-CAyoE34s.js";const b=new f,J=new f,g=new f,P={esriGeometryPoint:G,esriGeometryPolyline:V,esriGeometryPolygon:Z,esriGeometryMultipoint:_};function W(e,r,n,i=e.hasZ,l=e.hasM){if(r==null)return null;const t=e.hasZ&&i,s=e.hasM&&l;if(n){const o=I(g,r,e.hasZ,e.hasM,"esriGeometryPoint",n,i,l);return G(o,t,s)}return G(r,t,s)}function m(e,r,n,i,l,t,s=r,o=n){const u=r&&s,a=n&&o,c=i!=null?"coords"in i?i:i.geometry:null;if(c==null)return null;if(l){let p=D(J,c,r,n,e,l,s,o);return t&&(p=I(g,p,u,a,e,t)),P[e]?.(p,u,a)??null}if(t){const p=I(g,c,r,n,e,t,s,o);return P[e]?.(p,u,a)??null}return j(b,c,r,n,s,o),P[e]?.(b,u,a)??null}function Y(e){return e&&T in e?JSON.parse(JSON.stringify(e,B)):e}const T="_geVersion",B=(e,r)=>e!==T?r:void 0;function K(e){return e==="mesh"?C:x(e)}function q(e,r){return e?r?4:3:r?3:2}function $(e,r,n,i){return E(e,r,n,i.coords[0],i.coords[1])}function k(e,r,n,i,l,t){const s=q(l,t),{coords:o,lengths:u}=i;if(!u)return!1;for(let a=0,c=0;a<u.length;a++,c+=s)if(!E(e,r,n,o[c],o[c+1]))return!1;return!0}function E(e,r,n,i,l){if(!e)return!1;const t=q(r,n),{coords:s,lengths:o}=e;let u=!1,a=0;for(const c of o)u=z(u,s,t,a,c,i,l),a+=c*t;return u}function z(e,r,n,i,l,t,s){let o=e,u=i;for(let a=i,c=i+l*n;a<c;a+=n){u=a+n,u===c&&(u=i);const p=r[a],y=r[a+1],A=r[u],R=r[u+1];(y<s&&R>=s||R<s&&y>=s)&&p+(s-y)/(R-y)*(A-p)<t&&(o=!o)}return o}const v="unsupported-query",L={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},N={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function Q(e){return e!=null&&N.spatialRelationship[e]===!0}function X(e){return e!=null&&N.queryGeometry[U(e)]===!0}function ee(e){return e!=null&&N.layerGeometry[e]===!0}function re(){return import("./geometryEngineJSON-CGn_tfx8.js").then(e=>e.g)}function te(e,r,n,i,l){if(S(r)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const t=M(new f,r,!1,!1);return Promise.resolve(s=>$(t,!1,!1,s))}if(S(r)&&n==="esriGeometryMultipoint"){const t=M(new f,r,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(s=>k(t,!1,!1,s,i,l))}if(h(r)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(t=>F(r,m(n,i,l,t)));if(h(r)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(t=>O(r,m(n,i,l,t)));if(h(r)&&e==="esriSpatialRelIntersects"){const t=K(n);return Promise.resolve(s=>t(r,m(n,i,l,s)))}return re().then(t=>{const s=t[L[e]].bind(null,r.spatialReference,r);return o=>s(m(n,i,l,o))})}async function ne(e,r,n){const{spatialRel:i,geometry:l}=e;if(l){if(!Q(i))throw new d(v,"Unsupported query spatial relationship",{query:e});if(w(l.spatialReference)&&w(n)){if(!X(l))throw new d(v,"Unsupported query geometry type",{query:e});if(!ee(r))throw new d(v,"Unsupported layer geometry type",{query:e});if(e.outSR)return H(e.geometry?.spatialReference,e.outSR)}}}function ie(e){if(h(e))return!0;if(S(e)){for(const r of e.rings)if(r.length!==5||r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1;return!0}return!1}async function se(e,r){if(!e)return null;const n=r.featureAdapter,{startTimeField:i,endTimeField:l}=e;let t=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(i&&l)await r.forEach(o=>{const u=n.getAttribute(o,i),a=n.getAttribute(o,l);u==null||isNaN(u)||(t=Math.min(t,u)),a==null||isNaN(a)||(s=Math.max(s,a))});else{const o=i||l;await r.forEach(u=>{const a=n.getAttribute(u,o);a==null||isNaN(a)||(t=Math.min(t,a),s=Math.max(s,a))})}return{start:t,end:s}}function le(e,r,n){if(!r||!e)return null;const{startTimeField:i,endTimeField:l}=e;if(!i&&!l)return null;const{start:t,end:s}=r;if(t===null&&s===null)return null;if(t===void 0&&s===void 0)return ue();const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return i&&l?oe(o,i,l,t,s):ae(o,i||l,t,s)}function oe(e,r,n,i,l){return i!=null&&l!=null?t=>{const s=e(t,r),o=e(t,n);return(s==null||s<=l)&&(o==null||o>=i)}:i!=null?t=>{const s=e(t,n);return s==null||s>=i}:l!=null?t=>{const s=e(t,r);return s==null||s<=l}:void 0}function ae(e,r,n,i){return n!=null&&i!=null&&n===i?l=>e(l,r)===n:n!=null&&i!=null?l=>{const t=e(l,r);return t!=null&&t>=n&&t<=i}:n!=null?l=>{const t=e(l,r);return t!=null&&t>=n}:i!=null?l=>{const t=e(l,r);return t!=null&&t<=i}:void 0}function ue(){return()=>!1}export{ie as I,te as P,m as a,Y as h,se as n,le as t,ne as v,W as y};
