import{cs as E,cy as S,ag as en,cF as an,cG as _,aC as P,n as cn}from"./main-QmNQNEqS.js";import{s as C,w as un}from"./sphere-o8t71Yf_.js";import{h as gn,s as bn,p as fn}from"./mat4-CZFq2RiA.js";import{e as U}from"./mat4f64-CSKppSlJ.js";import{s as u,g as l,u as p,o as M,p as ln,r as h,K as pn,P as $,c as H,H as O,E as m,A as D,j as G}from"./vec32-4kTA8UgK.js";import{v as dn,A as K,M as mn}from"./lineSegment-pMaAJtvo.js";import{M as y,D as $n,h as hn,P as F,c as e,U as In,x as Pn,q as Mn,w as wn,z as L,H as Nn,f as w,O as N,y as vn}from"./plane-f1QE77C-.js";const V=()=>cn.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class yn{constructor(){this.plane=y(),this.origin=P(),this.basis1=P(),this.basis2=P()}}const An=yn;function I(n=sn){return{plane:y(n.plane),origin:S(n.origin),basis1:S(n.basis1),basis2:S(n.basis2)}}function Tn(n,t,i){const o=Gn.get();return o.origin=n,o.basis1=t,o.basis2=i,o.plane=$n(0,0,0,0),T(o),o}function A(n,t=I()){return W(n.origin,n.basis1,n.basis2,t)}function xn(n,t){u(t.origin,n.origin),u(t.basis1,n.basis1),u(t.basis2,n.basis2),hn(t.plane,n.plane)}function W(n,t,i,o=I()){return u(o.origin,n),u(o.basis1,t),u(o.basis2,i),T(o),Bn(o,"fromValues()"),o}function T(n){F(n.basis2,n.basis1,n.origin,n.plane)}function X(n,t,i){n!==i&&A(n,i);const o=l(e.get(),f(n),t);return p(i.origin,i.origin,o),i.plane[3]-=t,i}function En(n,t,i){return Z(t,i),X(i,q(n,n.origin),i),i}function Sn(n,t){const i=n.basis1[0],o=n.basis2[1],[r,s]=n.origin;return en(r-i,s-o,r+i,s+o,t)}function Z(n,t=I()){const i=(n[2]-n[0])/2,o=(n[3]-n[1])/2;return M(t.origin,n[0]+i,n[1]+o,0),M(t.basis1,i,0,0),M(t.basis2,0,o,0),In(0,0,1,0,t.plane),t}function Y(n,t,i){return!!Pn(n.plane,t,i)&&on(n,i)}function _n(n,t,i){if(Y(n,t,i))return i;const o=J(n,t,e.get());return p(i,t.origin,l(e.get(),t.direction,ln(t.origin,o)/h(t.direction))),i}function J(n,t,i){const o=v.get();rn(n,t,o,v.get());let r=Number.POSITIVE_INFINITY;for(const s of B){const a=z(n,s,x.get()),g=e.get();if(Mn(o,a,g)){const c=pn(e.get(),t.origin,g),b=Math.abs(an($(t.direction,c)));b<r&&(r=b,u(i,g))}}return r===Number.POSITIVE_INFINITY?Q(n,t,i):i}function On(n,t){return(t-n)/t}function Q(n,t,i){if(Y(n,t,i))return i;const o=v.get(),r=v.get();rn(n,t,o,r);let s=Number.POSITIVE_INFINITY;for(const a of B){const g=z(n,a,x.get()),c=e.get();if(wn(o,g,c)){const b=un(t,c);if(!L(r,c))continue;b<s&&(s=b,u(i,c))}}return k(n,t.origin)<s&&nn(n,t.origin,i),i}function nn(n,t,i){const o=Nn(n.plane,t,e.get()),r=K(R(n,n.basis1),o,-1,1,e.get()),s=K(R(n,n.basis2),o,-1,1,e.get());return H(i,p(e.get(),r,s),n.origin),i}function tn(n,t,i){const{origin:o,basis1:r,basis2:s}=n,a=H(e.get(),t,o),g=w(r,a),c=w(s,a),b=w(f(n),a);return M(i,g,c,b)}function k(n,t){const i=tn(n,t,e.get()),{basis1:o,basis2:r}=n,s=h(o),a=h(r),g=Math.max(Math.abs(i[0])-s,0),c=Math.max(Math.abs(i[1])-a,0),b=i[2];return g*g+c*c+b*b}function Vn(n,t){return Math.sqrt(k(n,t))}function jn(n,t){let i=Number.NEGATIVE_INFINITY;for(const o of B){const r=z(n,o,x.get()),s=mn(r,t);s>i&&(i=s)}return Math.sqrt(i)}function Fn(n,t){return L(n.plane,t)&&on(n,t)}function Cn(n,t,i,o){return zn(n,i,o)}function q(n,t){const i=-n.plane[3];return w(f(n),t)-i}function Hn(n,t,i,o){const r=q(n,t),s=l(Dn,f(n),i-r);return p(o,t,s),o}function Yn(n,t){return O(n.basis1,t.basis1)&&O(n.basis2,t.basis2)&&O(n.origin,t.origin)}function kn(n,t,i){return n!==i&&A(n,i),gn(d,t),bn(d,d),m(i.basis1,n.basis1,d),m(i.basis2,n.basis2,d),m(N(i.plane),N(n.plane),d),m(i.origin,n.origin,t),vn(i.plane,i.plane,i.origin),i}function qn(n,t,i,o){return n!==o&&A(n,o),fn(j,t,i),m(o.basis1,n.basis1,j),m(o.basis2,n.basis2,j),T(o),o}function f(n){return N(n.plane)}function zn(n,t,i){switch(t){case _.X:u(i,n.basis1),D(i,i);break;case _.Y:u(i,n.basis2),D(i,i);break;case _.Z:u(i,f(n))}return i}function on(n,t){const i=H(e.get(),t,n.origin),o=G(n.basis1),r=G(n.basis2),s=$(n.basis1,i),a=$(n.basis2,i);return-s-o<0&&s-o<0&&-a-r<0&&a-r<0}function R(n,t){const i=x.get();return u(i.origin,n.origin),u(i.vector,t),i}function z(n,t,i){const{basis1:o,basis2:r,origin:s}=n,a=l(e.get(),o,t.origin[0]),g=l(e.get(),r,t.origin[1]);p(i.origin,a,g),p(i.origin,i.origin,s);const c=l(e.get(),o,t.direction[0]),b=l(e.get(),r,t.direction[1]);return l(i.vector,p(c,c,b),2),i}function Bn(n,t){Math.abs($(n.basis1,n.basis2)/(h(n.basis1)*h(n.basis2)))>1e-6&&V().warn(t,"Provided basis vectors are not perpendicular"),Math.abs($(n.basis1,f(n)))>1e-6&&V().warn(t,"Basis vectors and plane normal are not perpendicular"),Math.abs(-$(f(n),n.origin)-n.plane[3])>1e-6&&V().warn(t,"Plane offset is not consistent with plane origin")}function rn(n,t,i,o){const r=f(n);F(r,t.direction,t.origin,i),F(N(i),r,t.origin,o)}const sn={plane:y(),origin:E(0,0,0),basis1:E(1,0,0),basis2:E(0,1,0)},v=new C(y),x=new C(dn),Dn=P(),Gn=new C(()=>I()),B=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],d=U(),j=U(),Jn=Object.freeze(Object.defineProperty({__proto__:null,BoundedPlaneClass:An,altitudeAt:q,axisAt:Cn,cameraFrustumCoverage:On,closestPoint:Q,closestPointOnSilhouette:J,copy:A,copyWithoutVerify:xn,create:I,distance:Vn,distance2:k,distanceToSilhouette:jn,elevate:X,equals:Yn,extrusionContainsPoint:Fn,fromAABoundingRect:Z,fromValues:W,getExtent:Sn,intersectRay:Y,intersectRayClosestSilhouette:_n,normal:f,projectPoint:nn,projectPointLocal:tn,rotate:qn,setAltitudeAt:Hn,setExtent:En,transform:kn,up:sn,updateUnboundedPlane:T,wrap:Tn},Symbol.toStringTag,{value:"Module"}));export{W as J,T as K,I as W,A as Z,Jn as k};
