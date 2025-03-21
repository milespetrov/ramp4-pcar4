import{gC as rt,cv as O,aA as g,fu as et,cC as ot,cD as p}from"./main-BriipcPO.js";import{p as st}from"./mat4-CpujIZCL.js";import{s as x,c as f,_ as A,A as j,P as T,u as P,g as M,r as m,o as v,p as I,E as it,j as ct,v as at,I as ut,q as ft}from"./vec32-9ZLAcxny.js";import{L as N,a as y}from"./vec42-D8CJyqHG.js";import{n as V,r as L}from"./vec4f64-hf2nxvhQ.js";import{e as ht}from"./common-CYWrYyJl.js";import"./mat3-CC4Foazl.js";import"./mat3f64-Dh9_zhFu.js";import{c as u,a as gt,b as mt}from"./plane-Cga3ymuR.js";class X{constructor(r){this._allocator=r,this._items=[],this._itemsPtr=0,this._grow()}get(){return this._itemsPtr===0&&rt(()=>this._reset()),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const r=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*Y);this._items.length=Math.min(r,this._items.length),this._itemsPtr=0}_grow(){for(let r=0;r<Math.max(8,Math.min(this._items.length,Y));r++)this._items.push(this._allocator())}}const Y=1024;function d(t){return t?Z(O(t.origin),O(t.direction)):Z(g(),g())}function Z(t,r){return{origin:t,direction:r}}function lt(t,r){const n=bt.get();return n.origin=t,n.direction=r,n}function _t(t,r=d()){return dt(t.origin,t.direction,r)}function Mt(t,r,n=d()){return x(n.origin,t),f(n.direction,r,t),n}function dt(t,r,n=d()){return x(n.origin,t),x(n.direction,r),n}function pt(t,r){const n=A(u.get(),j(u.get(),t.direction),f(u.get(),r,t.origin));return T(n,n)}function Pt(t,r,n){const e=T(t.direction,f(n,r,t.origin));return P(n,t.origin,M(n,t.direction,e)),n}const bt=new X(()=>d());function $(t,r){const n=m(t),e=et(t[2]/n),o=Math.atan2(t[1]/n,t[0]/n);return v(r,n,e,o),r}const St=b();function b(){return V()}const k=N,qt=N;function C(t,r){return y(r,t)}function z(t,r){return L(t[0],t[1],t[2],r)}function D(t){return t}function wt(t){t[0]=t[1]=t[2]=t[3]=0}function xt(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function l(t){return t[3]}function F(t){return t}function H(t,r,n,e){return L(t,r,n,e)}function At(t,r,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+r,n}function vt(t,r,n){return t!==n&&C(t,n),n}function yt(t,r){return r}function S(t,r,n){if(r==null||!B(t,r,q))return!1;let{t0:e,t1:o}=q;if((e<0||o<e&&o>0)&&(e=o),e<0)return!1;if(n){const{origin:s,direction:i}=r;n[0]=s[0]+i[0]*e,n[1]=s[1]+i[1]*e,n[2]=s[2]+i[2]*e}return!0}function U(t,r,n){const e=Mt(r,n);if(!B(t,e,q))return[];const{origin:o,direction:s}=e,{t0:i,t1:c}=q,a=h=>{const _=g();return ft(_,o,s,h),w(t,_,_)};return Math.abs(i-c)<ht()?[a(i)]:[a(i),a(c)]}const q={t0:0,t1:0};function B(t,r,n){const{origin:e,direction:o}=r,s=Ct;s[0]=e[0]-t[0],s[1]=e[1]-t[1],s[2]=e[2]-t[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(i===0)return!1;const c=2*(o[0]*s[0]+o[1]*s[1]+o[2]*s[2]),a=c*c-4*i*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(a<0)return!1;const h=Math.sqrt(a);return n.t0=(-c-h)/(2*i),n.t1=(-c+h)/(2*i),!0}const Ct=g();function G(t,r){return S(t,r,null)}function Rt(t,r,n){if(S(t,r,n))return n;const e=J(t,r,u.get());return P(n,r.origin,M(u.get(),r.direction,I(r.origin,e)/m(r.direction))),n}function J(t,r,n){const e=u.get(),o=gt.get();A(e,r.origin,r.direction);const s=l(t);A(n,e,r.origin),M(n,n,1/m(n)*s);const i=K(t,r.origin),c=mt(r.origin,n);return st(o,c+i,e),it(n,n,o),n}function Et(t,r,n,e){const o=l(t),s=o*o,i=r+.5*Math.PI,c=n*n+s-2*Math.cos(i)*n*o,a=Math.sqrt(c),h=c-s;if(h<=0)return .5;const _=Math.sqrt(h),nt=Math.acos(_/a)-Math.asin(o/(a/Math.sin(i)));return Math.min(1,(nt+.5*e)/e)}function Ot(t,r,n){return S(t,r,n)?n:(Pt(r,t,n),w(t,n,n))}function w(t,r,n){const e=f(u.get(),r,t),o=M(u.get(),e,t[3]/m(e));return P(n,o,t)}function jt(t,r){const n=f(u.get(),r,t),e=ct(n),o=t[3]*t[3];return Math.sqrt(Math.abs(e-o))}function K(t,r){const n=f(u.get(),r,t),e=m(n),o=l(t),s=o+Math.abs(o-e);return ot(o/s)}const R=g();function Q(t,r,n,e){const o=f(R,r,t);switch(n){case p.X:{const s=$(o,R)[2];return v(e,-Math.sin(s),Math.cos(s),0)}case p.Y:{const s=$(o,R),i=s[1],c=s[2],a=Math.sin(i);return v(e,-a*Math.cos(c),-a*Math.sin(c),Math.cos(i))}case p.Z:return j(e,o);default:return}}function W(t,r){const n=f(E,r,t);return m(n)-t[3]}function Tt(t,r,n,e){const o=W(t,r),s=Q(t,r,p.Z,E),i=M(E,s,n-o);return P(e,r,i)}function tt(t,r){const n=at(t,r),e=l(t);return n<=e*e}function It(t,r,n=V()){const e=I(t,r),o=t[3],s=r[3];return e+s<o?(y(n,t),n):e+o<s?(y(n,r),n):(ut(n,t,r,(e+s-o)/(2*e)),n[3]=(e+o+s)/2,n)}const E=g(),Nt=b(),Vt=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:St,altitudeAt:W,angleToSilhouette:K,axisAt:Q,cameraFrustumCoverage:Et,clear:wt,closestPoint:Ot,closestPointOnSilhouette:J,containsPoint:tt,copy:C,create:b,distanceToSilhouette:jt,elevate:At,equals:qt,exactEquals:k,fromCenterAndRadius:z,fromRadius:xt,fromValues:H,getCenter:F,getExtent:yt,getRadius:l,intersectLine:U,intersectRay:S,intersectRayClosestSilhouette:Rt,intersectsRay:G,projectPoint:w,setAltitudeAt:Tt,setExtent:vt,tmpSphere:Nt,union:It,wrap:D},Symbol.toStringTag,{value:"Module"}));export{w as $,b as E,G as H,U as I,l as N,z as O,D as T,F as U,H as V,k as _,C as a,d as b,Vt as f,tt as i,lt as k,X as s,_t as v,pt as w};
