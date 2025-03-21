import{cC as k,aA as N,gC as W,aP as Y}from"./main-BqyZdgF9.js";import{P as I,r as x,A as T,_ as P,o as U,g as L,c as _,u as z,H as Q}from"./vec32-DvYz7mSM.js";import"./vec42-D8CJyqHG.js";import{e as Z}from"./mat3f64-Dh9_zhFu.js";import{e as tt}from"./mat4f64-Dn1WEGBx.js";import{e as nt}from"./quatf64-C16JxGFv.js";import{n as st}from"./vec2f64-CeODonrJ.js";import{n as at}from"./vec4f64-hf2nxvhQ.js";function l(t,n){return I(t,n)/x(t)}function et(t,n){const s=I(t,n)/(x(t)*x(n));return-k(s)}function rt(t,n,s){T(A,t),T(d,n);const a=I(A,d),e=k(a),o=P(A,A,d);return I(o,s)<0?2*Math.PI-e:e}const A=N(),d=N();let M=class h{constructor(n){this._create=n,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&W(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const n=2*this._itemsPtr;this._items.length>n&&(this._items.length=n),this._itemsPtr=0}static createVec2f64(){return new h(st)}static createVec3f64(){return new h(N)}static createVec4f64(){return new h(at)}static createMat3f64(){return new h(Z)}static createMat4f64(){return new h(tt)}static createQuatf64(){return new h(nt)}get test(){}};const ct=M.createVec2f64(),f=M.createVec3f64(),J=M.createVec4f64();M.createMat3f64();const ot=M.createMat4f64(),it=M.createQuatf64();function ut(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],a=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,a))}function It(t,n){const s=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),a=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),e=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return U(t,s,a,e),t}function $(t,n,s){Math.abs(t[0])>Math.abs(t[1])?U(n,0,1,0):U(n,1,0,0),P(s,t,n),P(n,s,t),T(s,s),T(n,n)}function y(t=D){return[t[0],t[1],t[2],t[3]]}function ft(t=D[0],n=D[1],s=D[2],a=D[3]){return H(t,n,s,a,J.get())}function j(t,n){return H(n[0],n[1],n[2],n[3],t)}function Nt(t){return t}function H(t,n,s,a,e=y()){return e[0]=t,e[1]=n,e[2]=s,e[3]=a,e}function B(t,n,s){const a=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],e=Math.abs(a-1)>1e-5&&a>1e-12?1/Math.sqrt(a):1;return s[0]=n[0]*e,s[1]=n[1]*e,s[2]=n[2]*e,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function G(t,n,s,a=y()){const e=s[0]-n[0],o=s[1]-n[1],c=s[2]-n[2],r=t[0]-n[0],O=t[1]-n[1],C=t[2]-n[2],m=o*C-c*O,q=c*r-e*C,V=e*O-o*r,v=m*m+q*q+V*V,X=Math.abs(v-1)>1e-5&&v>1e-12?1/Math.sqrt(v):1;return a[0]=m*X,a[1]=q*X,a[2]=V*X,a[3]=-(a[0]*t[0]+a[1]*t[1]+a[2]*t[2]),a}function K(t,n,s,a=0,e=Math.floor(s*(1/3)),o=Math.floor(s*(2/3))){if(s<3)return!1;n(g,a);let c=e,r=!1;for(;c<s-1&&!r;)n(S,c),c++,r=!Q(g,S);if(!r)return!1;for(c=Math.max(c,o),r=!1;c<s&&!r;)n(E,c),c++,_(p,g,S),T(p,p),_(F,S,E),T(F,F),r=!Q(g,E)&&!Q(S,E)&&Math.abs(I(p,F))<Et;return r?(G(g,S,E,t),!0):(a!==0||e!==1||o!==2)&&K(t,n,s,0,1,2)}const Et=.99619469809,g=N(),S=N(),E=N(),p=N(),F=N();function ht(t,n,s){return n!==t&&j(t,n),t[3]=-I(t,s),t}function Tt(t,n,s,a){return P(E,n,t),B(s,E,a)}function _t(t,n,s,a){return R(b(t,n,_(f.get(),s,n),Ut,a))}function Mt(t,n,s){return n!=null&&R(b(t,n.origin,n.direction,lt,s))}function St(t,n,s){return R(b(t,n.origin,n.vector,u.NONE,s))}function mt(t,n,s){return R(b(t,n.origin,n.vector,u.CLAMP,s))}function gt(t,n){return w(t,n)>=0}function Dt(t,n,s){const a=L(f.get(),t,-t[3]),e=Ct(t,_(f.get(),n,a),f.get());return z(s,e,a),s}function Ot(t,n,s,a){const e=t,o=f.get(),c=f.get();$(e,o,c);const r=_(f.get(),s,n),O=l(o,r),C=l(c,r),m=l(e,r);return U(a,O,C,m)}function Ct(t,n,s){const a=L(f.get(),t,I(t,n));return _(s,n,a),s}function Pt(t,n){return Math.abs(w(t,n))}function w(t,n){return I(t,n)+t[3]}var i;function R(t){return t===i.INTERSECTS_INSIDE_OUT||t===i.INTERSECTS_OUTSIDE_IN}function b(t,n,s,a,e){const o=I(t,s),c=w(t,n);if(o===0)return c>=0?i.INSIDE:i.OUTSIDE;let r=-c/o;return a&u.CLAMP&&(r=Y(r,0,1)),!(a&u.INFINITE_MIN)&&r<0||!(a&u.INFINITE_MAX)&&r>1?c>=0?i.INSIDE:i.OUTSIDE:(z(e,n,L(e,s,r)),c>=0?i.INTERSECTS_INSIDE_OUT:i.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(i||(i={}));const D=[0,0,1,0];var u;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(u||(u={}));const Ut=u.INFINITE_MIN|u.INFINITE_MAX,lt=u.INFINITE_MAX;export{ft as D,Dt as H,Ot as J,y as M,Nt as O,Tt as P,Pt as Q,H as U,w as V,ot as a,et as b,f as c,$ as d,l as f,It as g,j as h,_t as k,B as l,ut as m,it as o,G as p,St as q,J as r,ct as t,rt as u,K as v,mt as w,Mt as x,ht as y,gt as z};
