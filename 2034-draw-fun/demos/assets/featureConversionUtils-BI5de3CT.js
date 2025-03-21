import{aI as nr,aJ as or,aK as tr,aL as sr,s as x,n as ur,aM as lr,aN as cr,aO as ir,aP as ar}from"./main-DvRWqUGe.js";import{e as F}from"./OptimizedFeature-BXKn-CHN.js";import{e as fr}from"./OptimizedFeatureSet-Blu9Ckm7.js";import{s as T}from"./OptimizedGeometry-BF8iz5FO.js";function p(r,e){return r?e?4:3:e?3:2}const v=()=>ur.getLogger("esri.layers.graphics.featureConversionUtils"),D={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},hr=(r,e,n,o,s,t)=>{r[n]=s,r[n+1]=t},O=(r,e,n,o,s,t)=>{r[n]=s,r[n+1]=t,r[n+2]=e[o+2]},dr=(r,e,n,o,s,t)=>{r[n]=s,r[n+1]=t,r[n+2]=e[o+3]},mr=(r,e,n,o,s,t)=>{r[n]=s,r[n+1]=t,r[n+2]=e[o+2],r[n+3]=e[o+3]};function q(r,e,n,o){if(r){if(n)return e&&o?mr:O;if(e&&o)return dr}else if(e&&o)return O;return hr}function $({scale:r,translate:e},n){return Math.round((n-e[0])/r[0])}function z({scale:r,translate:e},n){return Math.round((e[1]-n)/r[1])}function E({scale:r,translate:e},n,o){return n*r[o]+e[o]}function Ur(r,e,n){return r?e?n?S(r):U(r):n?R(r):j(r):null}function j(r){const e=r.coords;return{x:e[0],y:e[1]}}function J(r,e){return r.coords[0]=e.x,r.coords[1]=e.y,r}function U(r){const e=r.coords;return{x:e[0],y:e[1],z:e[2]}}function gr(r,e){return r.coords[0]=e.x,r.coords[1]=e.y,r.coords[2]=e.z,r}function R(r){const e=r.coords;return{x:e[0],y:e[1],m:e[2]}}function yr(r,e){return r.coords[0]=e.x,r.coords[1]=e.y,r.coords[2]=e.m,r}function S(r){const e=r.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function pr(r,e){return r.coords[0]=e.x,r.coords[1]=e.y,r.coords[2]=e.z,r.coords[3]=e.m,r}function br(r,e,n,o){let s=j;n&&o?s=S:n?s=U:o&&(s=R);for(const t of e){const{geometry:u,attributes:l}=t,i=u!=null?s(u):null;r.push({attributes:l,geometry:i})}return r}function V(r,e){return r&&e?pr:r?gr:e?yr:J}function wr(r,e,n,o,s){const t=V(n,o);for(const{geometry:u,attributes:l}of e){const i=u!=null?t(new T,u):null;r.push(new F(i,l,null,s?l[s]:void 0))}return r}function Ir(r,e,n=V(e.z!=null,e.m!=null)){return n(r,e)}function Mr(r,e,n,o){for(const{geometry:s,attributes:t}of e)r.push({attributes:t,geometry:s!=null?K(s,n,o):null});return r}function K(r,e,n){if(r==null)return null;const o=p(e,n),s=[];for(let t=0;t<r.coords.length;t+=o){const u=[];for(let l=0;l<o;l++)u.push(r.coords[t+l]);s.push(u)}return e?n?{points:s,hasZ:e,hasM:n}:{points:s,hasZ:e}:n?{points:s,hasM:n}:{points:s}}function Gr(r,e,n,o,s){const t=p(n,o);for(const{geometry:u,attributes:l}of e){const i=u!=null?B(new T,u,t):null;r.push(new F(i,l,null,s?l[s]:void 0))}return r}function B(r,e,n=p(e.hasZ,e.hasM)){r.lengths[0]=e.points.length;const o=r.coords;let s=0;for(const t of e.points)for(let u=0;u<n;u++)o[s++]=t[u];return r}function Nr(r,e,n,o){for(const{geometry:s,attributes:t}of e)r.push({attributes:t,geometry:s!=null?H(s,n,o):null});return r}function H(r,e,n){if(!r)return null;const o=p(e,n),{coords:s,lengths:t}=r,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<o;h++)f.push(s[l++]);c.push(f)}u.push(c)}return e?n?{paths:u,hasZ:e,hasM:n}:{paths:u,hasZ:e}:n?{paths:u,hasM:n}:{paths:u}}function Tr(r,e,n,o,s){const t=p(n,o);for(const{geometry:u,attributes:l,centroid:i}of e){const c=u!=null?Q(new T,u,t):null,a=i!=null?Ir(new T,i):null;r.push(new F(c,l,a,s?l[s]:void 0))}return r}function Q(r,e,n=p(e.hasZ,e.hasM)){const{lengths:o,coords:s}=r;let t=0;for(const u of e.paths){for(const l of u)for(let i=0;i<n;i++)s[t++]=l[i];o.push(u.length)}return r}function Pr(r,e,n,o){for(const{geometry:s,attributes:t,centroid:u}of e){const l=s!=null?W(s,n,o):null;if(u!=null){const i=j(u);r.push({attributes:t,centroid:i,geometry:l})}else r.push({attributes:t,geometry:l})}return r}function W(r,e,n){if(!r)return null;const o=p(e,n),{coords:s,lengths:t}=r,u=[];let l=0;for(const i of t){const c=[];for(let a=0;a<i;a++){const f=[];for(let h=0;h<o;h++)f.push(s[l++]);c.push(f)}u.push(c)}return e?n?{rings:u,hasZ:e,hasM:n}:{rings:u,hasZ:e}:n?{rings:u,hasM:n}:{rings:u}}function Fr(r,e,n,o,s){for(const{geometry:t,centroid:u,attributes:l}of e){const i=t!=null?X(new T,t,n,o):null,c=s?l[s]:void 0;u!=null?r.push(new F(i,l,J(new T,u),c)):r.push(new F(i,l,null,c))}return r}function X(r,e,n=e.hasZ,o=e.hasM){return Zr(r,e.rings,n,o)}function Zr(r,e,n,o){const s=p(n,o),{lengths:t,coords:u}=r;let l=0;N(r);for(const i of e){for(const c of i)for(let a=0;a<s;a++)u[l++]=c[a];t.push(i.length)}return r}const P=[],Z=[];function Rr(r,e,n,o,s){P[0]=r;const[t]=rr(Z,P,e,n,o,s);return G(P),G(Z),t}function rr(r,e,n,o,s,t){if(G(r),!n){for(const u of e){const l=t?u.attributes[t]:void 0;r.push(new F(null,u.attributes,null,l))}return r}switch(n){case"esriGeometryPoint":return wr(r,e,o,s,t);case"esriGeometryMultipoint":return Gr(r,e,o,s,t);case"esriGeometryPolyline":return Tr(r,e,o,s,t);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return Fr(r,e,o,s,t);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`)),G(r)}return r}function Sr(r,e,n,o){Z[0]=r,er(P,Z,e,n,o);const s=P[0];return G(P),G(Z),s}function Vr(r,e,n){if(r==null)return null;const o=new T;return"hasZ"in r&&e==null&&(e=r.hasZ),"hasM"in r&&n==null&&(n=r.hasM),nr(r)?V(e??r.z!=null,n??r.m!=null)(o,r):or(r)?X(o,r,e,n):tr(r)?Q(o,r,p(e,n)):sr(r)?B(o,r,p(e,n)):void v().error("convertFromGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${r}'`))}function xr(r,e,n,o){const s=r&&("coords"in r?r:r.geometry);if(s==null)return null;switch(e){case"esriGeometryPoint":{let t=j;return n&&o?t=S:n?t=U:o&&(t=R),t(s)}case"esriGeometryMultipoint":return K(s,n,o);case"esriGeometryPolyline":return H(s,n,o);case"esriGeometryPolygon":return W(s,n,o);default:return v().error("convertToGeometry:unknown-geometry",new x(`Unable to parse unknown geometry type '${e}'`)),null}}function vr(r,e){for(const n of e)r.push({attributes:n.attributes});return r}function er(r,e,n,o,s){if(G(r),n==null)return vr(r,e);switch(n){case"esriGeometryPoint":return br(r,e,o,s);case"esriGeometryMultipoint":return Mr(r,e,o,s);case"esriGeometryPolyline":return Nr(r,e,o,s);case"esriGeometryPolygon":return Pr(r,e,o,s);default:v().error("convertToFeatureSet:unknown-geometry",new x(`Unable to parse unknown geometry type '${n}'`))}return r}function Yr(r){const{objectIdFieldName:e,spatialReference:n,transform:o,fields:s,hasM:t,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:a,queryGeometry:f,queryGeometryType:h}=r,d={features:er([],l,i,u,t),fields:s,geometryType:i,objectIdFieldName:e,spatialReference:n,uniqueIdField:a,queryGeometry:xr(f,h,!1,!1)};return o&&(d.transform=o),c&&(d.exceededTransferLimit=c),t&&(d.hasM=t),u&&(d.hasZ=u),d}function _r(r,e){const n=new fr,{hasM:o,hasZ:s,features:t,objectIdFieldName:u,spatialReference:l,geometryType:i,exceededTransferLimit:c,transform:a,fields:f}=r;return f&&(n.fields=f),n.geometryType=i??null,n.objectIdFieldName=u??e??null,n.spatialReference=l??null,n.objectIdFieldName?(t&&rr(n.features,t,i,s,o,n.objectIdFieldName),c&&(n.exceededTransferLimit=c),o&&(n.hasM=o),s&&(n.hasZ=s),a&&(n.transform=a),n):(v().error(new x("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function Or(r){const{transform:e,features:n,hasM:o,hasZ:s}=r;if(!e)return r;for(const t of n)t.geometry!=null&&C(t.geometry,t.geometry,o,s,e),t.centroid!=null&&C(t.centroid,t.centroid,o,s,e);return r.transform=null,r}function Ar(r,e){const{geometryType:n,features:o,hasM:s,hasZ:t}=e;if(!r)return e;for(let u=0;u<o.length;u++){const l=o[u],i=l.weakClone();i.geometry=new T,A(i.geometry,l.geometry,s,t,n,r),l.centroid&&(i.centroid=new T,A(i.centroid,l.centroid,s,t,"esriGeometryPoint",r)),o[u]=i}return e.transform=r,e}function A(r,e,n,o,s,t,u=n,l=o){if(N(r),!e?.coords.length)return null;const i=D[s],{coords:c,lengths:a}=e,f=p(n,o),h=p(n&&u,o&&l),d=q(n,o,u,l);if(!a.length)return d(r.coords,c,0,0,$(t,c[0]),z(t,c[1])),N(r,f,0),r;let m,y,w,I,b=0,g=0,M=g;for(const Y of a){if(Y<i)continue;let k=0;g=M,w=m=$(t,c[b]),I=y=z(t,c[b+1]),d(r.coords,c,g,b,w,I),k++,b+=f,g+=h;for(let _=1;_<Y;_++,b+=f)w=$(t,c[b]),I=z(t,c[b+1]),w===m&&I===y||(d(r.coords,c,g,b,w-m,I-y),g+=h,k++,m=w,y=I);k>=i&&(r.lengths.push(k),M=g)}return G(r.coords,M),r.coords.length?r:null}function Cr(r,e,n,o,s,t,u=n,l=o){if(N(r),!e?.coords.length)return null;const i=D[s],{coords:c,lengths:a}=e,f=p(n,o),h=p(n&&u,o&&l),d=q(n,o,u,l);if(!a.length)return d(r.coords,c,0,0,c[0],c[1]),N(r,f,0),r;let m=0;const y=t*t;for(const w of a){if(w<i){m+=w*f;continue}const I=r.coords.length/h,b=m,g=m+(w-1)*f;d(r.coords,c,r.coords.length,b,c[b],c[b+1]),L(r.coords,c,f,y,d,b,g),d(r.coords,c,r.coords.length,g,c[g],c[g+1]);const M=r.coords.length/h-I;M>=i?r.lengths.push(M):G(r.coords,I*h),m+=w*f}return r.coords.length?r:null}function kr(r,e,n,o){const s=r[e],t=r[e+1],u=r[n],l=r[n+1],i=r[o],c=r[o+1];let a=u,f=l,h=i-a,d=c-f;if(h!==0||d!==0){const m=((s-a)*h+(t-f)*d)/(h*h+d*d);m>1?(a=i,f=c):m>0&&(a+=h*m,f+=d*m)}return h=s-a,d=t-f,h*h+d*d}function L(r,e,n,o,s,t,u){let l,i=o,c=0;for(let a=t+n;a<u;a+=n)l=kr(e,a,t,u),l>i&&(c=a,i=l);i>o&&(c-t>n&&L(r,e,n,o,s,t,c),s(r,e,r.length,c,e[c],e[c+1]),u-c>n&&L(r,e,n,o,s,c,u))}function Dr(r,e,n,o){if(!e?.coords?.length)return null;const s=p(n,o);let t=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(e&&e.coords){const c=e.coords;for(let a=0;a<c.length;a+=s){const f=c[a],h=c[a+1];t=Math.min(t,f),l=Math.max(l,f),u=Math.min(u,h),i=Math.max(i,h)}}return lr(r)?cr(r,t,u,l,i):ir(t,u,l,i,r),r}function C(r,e,n,o,s){const{coords:t,lengths:u}=e,l=p(n,o);if(!t.length)return r!==e&&N(r),r;ar(s);const{originPosition:i,scale:c,translate:a}=s,f=$r;f.originPosition=i;const h=f.scale;h[0]=c[0]??1,h[1]=-(c[1]??1),h[2]=c[2]??1,h[3]=c[3]??1;const d=f.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!u.length){for(let y=0;y<l;++y)r.coords[y]=E(f,t[y],y);return r!==e&&N(r,l,0),r}let m=0;for(let y=0;y<u.length;y++){const w=u[y];r.lengths[y]=w;for(let g=0;g<l;++g)r.coords[m+g]=E(f,t[m+g],g);let I=r.coords[m],b=r.coords[m+1];m+=l;for(let g=1;g<w;g++,m+=l){I+=t[m]*h[0],b+=t[m+1]*h[1],r.coords[m]=I,r.coords[m+1]=b;for(let M=2;M<l;++M)r.coords[m+M]=E(f,t[m+M],M)}}return r!==e&&N(r,t.length,u.length),r}function Jr(r,e,n,o,s,t){if(N(r),r.lengths.push(...e.lengths),n===s&&o===t)for(let u=0;u<e.coords.length;u++)r.coords.push(e.coords[u]);else{const u=p(n,o),l=q(n,o,s,t),i=e.coords;for(let c=0;c<i.length;c+=u)l(r.coords,i,r.coords.length,c,i[c],i[c+1])}return r}function jr(r,e,n,o){let s=0,t=r[o*e],u=r[o*(e+1)];for(let l=1;l<n;l++){const i=t+r[o*(e+l)],c=u+r[o*(e+l)+1],a=(i-t)*(c+u);t=i,u=c,s+=a}return .5*s}function Kr(r,e){const{coords:n,lengths:o}=r;let s=0,t=0;for(let u=0;u<o.length;u++){const l=o[u];t+=jr(n,s,l,e),s+=l}return Math.abs(t)}function N(r,e=0,n=0){G(r.lengths,n),G(r.coords,e)}function G(r,e=0){r.length!==e&&(r.length=e)}const $r={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{H as $,W as H,Jr as I,X as K,$ as N,Ir as O,Ur as P,Zr as Q,K as U,A as a,Kr as b,_r as c,rr as e,Ar as f,Dr as g,Cr as h,Or as i,Yr as l,Sr as n,Vr as o,C as p,xr as r,Rr as t,z as w};
