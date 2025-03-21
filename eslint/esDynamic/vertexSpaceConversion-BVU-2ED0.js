import{eA as H,eB as gn,eC as Tn,eD as yn,eE as En,aA as L,eF as Rn,eG as Fn,a1 as dn,n as Nn,eH as On}from"./main-BPeHLg3l.js";import{j as b,n as z}from"./mat3-CC4Foazl.js";import{e as I}from"./mat3f64-Dh9_zhFu.js";import{h as v,B as _n,n as wn,c as B,f as J}from"./mat4-CPmtH-Zw.js";import{e as x,o as K}from"./mat4f64-Dn1WEGBx.js";import{N as Q,A as Pn,y as X,c as Cn,E as hn}from"./vec32-BngoEEIY.js";import{a as Z,w as Sn}from"./spatialReferenceEllipsoidUtils-D7OfCW0v.js";import{C as _}from"./computeTranslationToOriginAndRotation-D5TXa27N.js";import{c as nn}from"./projectPointToVector-Dht3G-8p.js";import{a as vn,m as xn}from"./meshVertexSpaceUtils-NY_9gmnT.js";import{f as D,l as tn,i as w,e as V}from"./vec3-_m4-IoHT.js";import{n as rn}from"./projectBuffer-D4MAah-C.js";import{i as d,T as N}from"./BufferView-C3LyPBfU.js";import{n as Gn}from"./vec4-DqEDAzHh.js";const Mn="Projection may be possible after calling projection.load().";function g(n,t,r,e){n.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${r.wkid}).${e?" ":""}${e}`)}function en(n,t,r,e,o,i){return G(F.TO_PCPF,d.fromTypedArray(n),R.NORMAL,N.fromTypedArray(t),r,N.fromTypedArray(e),o,d.fromTypedArray(i))?i:null}function on(n,t,r,e,o,i){return G(F.FROM_PCPF,d.fromTypedArray(n),R.NORMAL,N.fromTypedArray(t),r,N.fromTypedArray(e),o,d.fromTypedArray(i))?i:null}function an(n,t,r,e){return rn(n,t,0,r,e,0)?r:null}function ln(n,t,r,e){return rn(n,t,0,r,e,0)?r:null}function sn(n,t,r){return b(f,r),D(t,n,f),H(f)&&tn(t,t),t}function un(n,t,r){return z(f,r),Gn(t,n,f),H(f)&&tn(t,t,4),t}function cn(n,t,r,e,o,i){if(!G(F.TO_PCPF,d.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),R.TANGENT,N.fromTypedArray(t),r,N.fromTypedArray(e),o,d.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)i[a]=n[a];return i}function fn(n,t,r,e,o,i){if(!G(F.FROM_PCPF,d.fromTypedArray(n,16),R.TANGENT,N.fromTypedArray(t),r,N.fromTypedArray(e),o,d.fromTypedArray(i,16)))return null;for(let a=3;a<n.length;a+=4)i[a]=n[a];return i}var R,F;function pn(n,t,r,e,o){switch(_(e,r,P,e),n===F.FROM_PCPF&&v(P,P),t){case R.NORMAL:return b(o,P);case R.TANGENT:return z(o,P)}}function G(n,t,r,e,o,i,a,l){if(!t)return;const c=e.count;if(Un(o))for(let s=0;s<c;s++)i.getVec(s,M),t.getVec(s,y),Q(y,y,pn(n,r,M,a,f)),l.setVec(s,y);else for(let s=0;s<c;s++){i.getVec(s,M),t.getVec(s,y);const p=gn(e.get(s,1));let u=Math.cos(p);r===R.TANGENT!=(n===F.TO_PCPF)&&(u=1/u),pn(n,r,M,a,f),n===F.TO_PCPF?(f[0]*=u,f[1]*=u,f[2]*=u,f[3]*=u,f[4]*=u,f[5]*=u):(f[0]*=u,f[3]*=u,f[6]*=u,f[1]*=u,f[4]*=u,f[7]*=u),Q(y,y,f),Pn(y,y),l.setVec(s,y)}return l}function Un(n){return n.isWGS84||Tn(n)||yn(n)||En(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(R||(R={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(F||(F={}));const M=L(),y=L(),P=x(),f=I(),A=()=>Nn.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function Ln(n,t,{vertexSpace:r,spatialReference:e}){if(r.type==="georeferenced"){const s=n;if(!nn(t,s,e))return!1;const{origin:p}=r;return Cn(n,s,p),!0}const o=Z(e),i=n;if(!nn(t,i,o))return!1;const{origin:a}=r,l=An;if(!_(e,a,l,o))return!1;const c=v(An,l);return c!=null&&(hn(n,i,c),!0)}function bn(n,t,r){const{vertexSpace:e,transform:o,vertexAttributes:i}=n,a=vn(e)?o:null,l=U(n.spatialReference,r,E.SOURCE_AND_TARGET);if(xn(e,t)&&(!a||_n(a.localMatrix,K))&&C(l)){const{position:c,normal:s,tangent:p}=i,u=r?.allowBufferReuse;return{position:u?c:c.slice(),normal:u?s:s?.slice(),tangent:u?p:p?.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?jn(n,n.vertexSpace,t.origin,r):Dn(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?Vn(n,n.vertexSpace,t.origin,r):Bn(n,n.vertexSpace,t.origin,r)}}function Bn({vertexAttributes:n,transform:t,spatialReference:r},{origin:e},o,i){const a=U(r,i,E.SOURCE_AND_TARGET),l=e||!C(a)?wn(m,t?.localMatrix??K):null;l&&$(l,r,i,E.SOURCE_AND_TARGET);const{position:c,normal:s,tangent:p}=l?j(n,l):n,u=i?.allowBufferReuse,O=u?c:new Float64Array(c.length);let T=c;if(e&&(T=w(O,T,e)),o){const S=X(mn,o);T=w(O,T,S)}return{position:T!==n.position||u?T:T.slice(),normal:s!==n.normal||u?s:s?.slice(),tangent:p!==n.tangent||u?p:p?.slice()}}function k(n,t){return t?.useEllipsoid&&On(n)?Sn:Z(n)}function Dn({spatialReference:n,vertexAttributes:t,transform:r},{origin:e},o,i){const a=k(n,i);if(!_(n,e,m,a))return g(A(),n,a),null;r&&B(m,m,r.localMatrix),$(m,n,i,E.SOURCE);const l=new Float64Array(t.position.length),c=$n(t.position,m,n,l,a);if(!c)return null;const s=Yn(c,n,l,a,t.normal,m);if(t.normal&&!s)return null;const p=Wn(c,n,l,a,t.tangent,m);if(t.tangent&&!p)return null;if(o){const u=X(mn,o);w(c,c,u)}return{position:c,normal:s,tangent:p}}function Vn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,i){const a=k(t,i);if(!_(t,o,m,a))return g(A(),t,a),null;const l=1/U(t,i,E.TARGET);J(m,m,[l,l,l]);const c=v(h,m),{position:s,normal:p,tangent:u}=kn(n,e,r),O=new Float64Array(s.length),T=qn(s,t,c,O,a);if(!T)return null;const S=b(In,c),W=Hn(p,s,t,O,a,S,p!==n.normal?p:void 0);if(!W&&p)return null;const q=zn(u,s,t,O,a,S,u!==n.tangent?u:void 0);return!q&&u?null:{position:T,normal:W,tangent:q}}function kn(n,t,r){if(!t)return n;if(!r){const{position:o,normal:i,tangent:a}=n;return{position:w(new Float64Array(o.length),o,t),tangent:a,normal:i}}const e=j(n,r.localMatrix);return w(e.position,e.position,t),e}function jn({vertexAttributes:n,spatialReference:t,transform:r},{origin:e},o,i){const a=k(t,i);if(!_(t,e,m,a))return g(A(),t,a),null;if(r&&B(m,m,r.localMatrix),!_(t,o,h,a))return g(A(),a,t),null;v(h,h);const l=B(m,h,m);return $(l,t,i,E.SOURCE_AND_TARGET),j(n,l)}function j(n,t){const r=new Float64Array(n.position.length);V(r,n.position,t);const e=n.normal?new Float32Array(n.normal.length):null,o=n.tangent?new Float32Array(n.tangent.length):null;return e&&n.normal&&sn(n.normal,e,t),o&&n.tangent&&un(n.tangent,o,t),{position:r,normal:e,tangent:o}}function $n(n,t,r,e,o){V(e,n,t);const i=new Float64Array(n.length);return ln(e,o,i,r)?i:(g(A(),o,r),null)}function Yn(n,t,r,e,o,i){if(o==null)return null;const a=new Float32Array(o.length);return sn(o,a,i),on(a,n,t,r,e,a)?a:(g(A(),e,t),null)}function Wn(n,t,r,e,o,i){if(o==null)return null;const a=new Float32Array(o.length);return un(o,a,i),fn(a,n,t,r,e,a)?a:(g(A(),e,t),null)}function $(n,t,r,e){const o=U(t,r,e);C(o)||J(n,n,[o,o,o])}function U(n,t,r){const e=!!(r&E.SOURCE),o=!!(r&E.TARGET),i=t?.sourceUnit,a=t?.targetUnit;if(!i&&!a)return 1;let l=Y(i,n);e||!i||C(l)||(A().warn("source unit conversion not supported"),l=1);let c=1/Y(a,n);return o||!a||C(c)||(A().warn("target unit conversion not supported"),c=1),l*c}function C(n){return Rn(n,1)}function qn(n,t,r,e,o){const i=an(n,t,e,o);if(!i)return g(A(),t,o),null;const a=new Float64Array(i.length);return V(a,i,r),a}function Hn(n,t,r,e,o,i,a){if(n==null)return null;const l=a??new Float32Array(n.length);return en(n,t,r,e,o,l)?(D(l,l,i),l):(g(A(),r,o),null)}function zn(n,t,r,e,o,i,a){if(n==null)return null;const l=a??new Float32Array(n.length);return cn(n,t,r,e,o,l)?(D(l,l,i,4),l):(g(A(),r,o),null)}function Y(n,t){if(n==null)return 1;const r=Fn(t);return 1/dn(r,"meters",n)}const m=x(),h=x(),In=I(),mn=L(),An=x();var E;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(E||(E={}));export{bn as B,en as E,g as F,fn as G,Mn as O,on as R,an as g,ln as h,Ln as k,Y as n,cn as w};
