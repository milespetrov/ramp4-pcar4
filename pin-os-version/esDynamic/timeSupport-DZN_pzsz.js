import{h5 as W,h6 as Z,a9 as b,cJ as E,h7 as D,h8 as $,s as v,cg as O,aW as H}from"./main-C6lijZBn.js";import{I as K,P as F,$ as k,H as z,U as B,a as M,h as L,K as C}from"./featureConversionUtils-26BsmIPK.js";import{s as T}from"./OptimizedFeature-EIithYlr.js";import{x as Q}from"./queryUtils-BU5gNjM3.js";const x=new T,X=new T,w=new T,A={esriGeometryPoint:F,esriGeometryPolyline:k,esriGeometryPolygon:z,esriGeometryMultipoint:B};function ee(e,r,n,l=e.hasZ,i=e.hasM){if(r==null)return null;const t=e.hasZ&&l,o=e.hasM&&i;if(n){const s=M(w,r,e.hasZ,e.hasM,"esriGeometryPoint",n,l,i);return F(s,t,o)}return F(r,t,o)}function G(e,r,n,l,i,t,o=r,s=n){const u=r&&o,a=n&&s,f=l!=null?"coords"in l?l:l.geometry:null;if(f==null)return null;if(i){let c=L(X,f,r,n,e,i,o,s);return t&&(c=M(w,c,u,a,e,t)),A[e]?.(c,u,a)??null}if(t){const c=M(w,f,r,n,e,t,o,s);return A[e]?.(c,u,a)??null}return K(x,f,r,n,o,s),A[e]?.(x,u,a)??null}function re(e){return e&&U in e?JSON.parse(JSON.stringify(e,te)):e}const U="_geVersion",te=(e,r)=>e!==U?r:void 0;function V(e,r){return e?r?4:3:r?3:2}function ne(e,r,n,l){if(!r?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const i=e.coords,t=[],o=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:s,coords:u}=r,a=V(n,l);let f=0;for(const c of s){const p=ie(o,u,f,c,n,l);p&&t.push(p),f+=c*a}if(t.sort((c,p)=>{let m=c[2]-p[2];return m===0&&n&&(m=c[4]-p[4]),m}),t.length){let c=6*t[0][2];i[0]=t[0][0]/c,i[1]=t[0][1]/c,n&&(c=6*t[0][4],i[2]=c!==0?t[0][3]/c:0),(i[0]<o[0]||i[0]>o[1]||i[1]<o[2]||i[1]>o[3]||n&&(i[2]<o[4]||i[2]>o[5]))&&(i.length=0)}if(!i.length){const c=r.lengths[0]?le(u,0,s[0],n,l):null;if(!c)return null;i[0]=c[0],i[1]=c[1],n&&c.length>2&&(i[2]=c[2])}return e}function ie(e,r,n,l,i,t){const o=V(i,t);let s=n,u=n+o,a=0,f=0,c=0,p=0,m=0;for(let S=0,P=l-1;S<P;S++,s+=o,u+=o){const h=r[s],y=r[s+1],R=r[s+2],N=r[u],g=r[u+1],q=r[u+2];let d=h*g-N*y;p+=d,a+=(h+N)*d,f+=(y+g)*d,i&&(d=h*q-N*R,c+=(R+q)*d,m+=d),h<e[0]&&(e[0]=h),h>e[1]&&(e[1]=h),y<e[2]&&(e[2]=y),y>e[3]&&(e[3]=y),i&&(R<e[4]&&(e[4]=R),R>e[5]&&(e[5]=R))}if(p>0&&(p*=-1),m>0&&(m*=-1),!p)return null;const I=[a,f,.5*p];return i&&(I[3]=c,I[4]=.5*m),I}function le(e,r,n,l,i){const t=V(l,i);let o=r,s=r+t,u=0,a=0,f=0,c=0;for(let p=0,m=n-1;p<m;p++,o+=t,s+=t){const I=e[o],S=e[o+1],P=e[o+2],h=e[s],y=e[s+1],R=e[s+2],N=l?se(I,S,P,h,y,R):oe(I,S,h,y);if(N)if(u+=N,l){const g=ae(I,S,P,h,y,R);a+=N*g[0],f+=N*g[1],c+=N*g[2]}else{const g=ue(I,S,h,y);a+=N*g[0],f+=N*g[1]}}return u>0?l?[a/u,f/u,c/u]:[a/u,f/u]:n>0?l?[e[r],e[r+1],e[r+2]]:[e[r],e[r+1]]:null}function oe(e,r,n,l){const i=n-e,t=l-r;return Math.sqrt(i*i+t*t)}function se(e,r,n,l,i,t){const o=l-e,s=i-r,u=t-n;return Math.sqrt(o*o+s*s+u*u)}function ue(e,r,n,l){return[e+.5*(n-e),r+.5*(l-r)]}function ae(e,r,n,l,i,t){return[e+.5*(l-e),r+.5*(i-r),n+.5*(t-n)]}function ce(e){return e==="mesh"?W:Z(e)}function j(e,r){return e?r?4:3:r?3:2}function fe(e,r,n,l){return J(e,r,n,l.coords[0],l.coords[1])}function pe(e,r,n,l,i,t){const o=j(i,t),{coords:s,lengths:u}=l;if(!u)return!1;for(let a=0,f=0;a<u.length;a++,f+=o)if(!J(e,r,n,s[f],s[f+1]))return!1;return!0}function J(e,r,n,l,i){if(!e)return!1;const t=j(r,n),{coords:o,lengths:s}=e;let u=!1,a=0;for(const f of s)u=me(u,o,t,a,f,l,i),a+=f*t;return u}function me(e,r,n,l,i,t,o){let s=e,u=l;for(let a=l,f=l+i*n;a<f;a+=n){u=a+n,u===f&&(u=l);const c=r[a],p=r[a+1],m=r[u],I=r[u+1];(p<o&&I>=o||I<o&&p>=o)&&c+(o-p)/(I-p)*(m-c)<t&&(s=!s)}return s}const _="unsupported-query",Ie={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},Y={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function he(e){return e!=null&&Y.spatialRelationship[e]===!0}function ye(e){return e!=null&&Y.queryGeometry[H(e)]===!0}function Ne(e){return e!=null&&Y.layerGeometry[e]===!0}function Re(){return import("./geometryEngineJSON-CGn_tfx8.js").then(e=>e.g)}function ge(e,r,n,l,i){if(b(r)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const t=C(new T,r,!1,!1);return Promise.resolve(o=>fe(t,!1,!1,o))}if(b(r)&&n==="esriGeometryMultipoint"){const t=C(new T,r,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(o=>pe(t,!1,!1,o,l,i))}if(E(r)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(t=>D(r,G(n,l,i,t)));if(E(r)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(t=>$(r,G(n,l,i,t)));if(E(r)&&e==="esriSpatialRelIntersects"){const t=ce(n);return Promise.resolve(o=>t(r,G(n,l,i,o)))}return Re().then(t=>{const o=t[Ie[e]].bind(null,r.spatialReference,r);return s=>o(G(n,l,i,s))})}async function Se(e,r,n){const{spatialRel:l,geometry:i}=e;if(i){if(!he(l))throw new v(_,"Unsupported query spatial relationship",{query:e});if(O(i.spatialReference)&&O(n)){if(!ye(i))throw new v(_,"Unsupported query geometry type",{query:e});if(!Ne(r))throw new v(_,"Unsupported layer geometry type",{query:e});if(e.outSR)return Q(e.geometry?.spatialReference,e.outSR)}}}function de(e){if(E(e))return!0;if(b(e)){for(const r of e.rings)if(r.length!==5||r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1;return!0}return!1}async function Te(e,r){if(!e)return null;const n=r.featureAdapter,{startTimeField:l,endTimeField:i}=e;let t=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(l&&i)await r.forEach(s=>{const u=n.getAttribute(s,l),a=n.getAttribute(s,i);u==null||isNaN(u)||(t=Math.min(t,u)),a==null||isNaN(a)||(o=Math.max(o,a))});else{const s=l||i;await r.forEach(u=>{const a=n.getAttribute(u,s);a==null||isNaN(a)||(t=Math.min(t,a),o=Math.max(o,a))})}return{start:t,end:o}}function Ge(e,r,n){if(!r||!e)return null;const{startTimeField:l,endTimeField:i}=e;if(!l&&!i)return null;const{start:t,end:o}=r;if(t===null&&o===null)return null;if(t===void 0&&o===void 0)return be();const s=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return l&&i?Pe(s,l,i,t,o):Ee(s,l||i,t,o)}function Pe(e,r,n,l,i){return l!=null&&i!=null?t=>{const o=e(t,r),s=e(t,n);return(o==null||o<=i)&&(s==null||s>=l)}:l!=null?t=>{const o=e(t,n);return o==null||o>=l}:i!=null?t=>{const o=e(t,r);return o==null||o<=i}:void 0}function Ee(e,r,n,l){return n!=null&&l!=null&&n===l?i=>e(i,r)===n:n!=null&&l!=null?i=>{const t=e(i,r);return t!=null&&t>=n&&t<=l}:n!=null?i=>{const t=e(i,r);return t!=null&&t>=n}:l!=null?i=>{const t=e(i,r);return t!=null&&t<=l}:void 0}function be(){return()=>!1}export{de as I,ge as P,G as a,Te as b,re as h,ne as n,Ge as t,Se as v,ee as y};
