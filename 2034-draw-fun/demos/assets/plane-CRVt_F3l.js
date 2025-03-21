import{cV as y,ae as N,gK as k,ad as z}from"./main-DvRWqUGe.js";import{P as u,r as x,A as M,_ as C,g as p,o as D,c as _,u as H,H as d}from"./vec32-D8MUmfTD.js";import"./vec42-CKs01hkn.js";import{e as G}from"./mat3f64-q3fE-ZOt.js";import{e as J}from"./mat4f64-Dk4dwAN8.js";import{e as W}from"./quatf64-aQ5IuZRd.js";import{n as Y}from"./vec2f64-HfuIyxwA.js";import{n as Z}from"./vec4f64-o2zAXfmz.js";function Mt(t,r,e){const n=u(t,r)/u(t,t);return p(e,t,n)}function v(t,r){return u(t,r)/x(t)}function _t(t,r){const e=u(t,r)/(x(t)*x(r));return-y(e)}function mt(t,r,e){M(l,t),M(L,r);const n=u(l,L),c=y(n),a=C(l,l,L);return u(a,e)<0?2*Math.PI-c:c}const l=N(),L=N();let m=class E{constructor(r){this._create=r,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&k(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const r=2*this._itemsPtr;this._items.length>r&&(this._items.length=r),this._itemsPtr=0}static createVec2f64(){return new E(Y)}static createVec3f64(){return new E(N)}static createVec4f64(){return new E(Z)}static createMat3f64(){return new E(G)}static createMat4f64(){return new E(J)}static createQuatf64(){return new E(W)}get test(){}};const St=m.createVec2f64(),f=m.createVec3f64(),B=m.createVec4f64();m.createMat3f64();const $t=m.createMat4f64(),gt=m.createQuatf64();function Dt(t){const r=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],e=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],n=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(r,e,n))}function Ot(t,r){const e=Math.sqrt(r[0]*r[0]+r[4]*r[4]+r[8]*r[8]),n=Math.sqrt(r[1]*r[1]+r[5]*r[5]+r[9]*r[9]),c=Math.sqrt(r[2]*r[2]+r[6]*r[6]+r[10]*r[10]);return D(t,e,n,c),t}function tt(t,r,e){Math.abs(t[0])>Math.abs(t[1])?D(r,0,1,0):D(r,1,0,0),C(e,t,r),C(r,e,t),M(e,e),M(r,r)}function Q(t=g){return[t[0],t[1],t[2],t[3]]}function Pt(t=g[0],r=g[1],e=g[2],n=g[3]){return K(t,r,e,n,B.get())}function rt(t,r){return K(r[0],r[1],r[2],r[3],t)}function lt(t){return t}function K(t,r,e,n,c=Q()){return c[0]=t,c[1]=r,c[2]=e,c[3]=n,c}function et(t,r,e){const n=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=Math.abs(n-1)>1e-5&&n>1e-12?1/Math.sqrt(n):1;return e[0]=r[0]*c,e[1]=r[1]*c,e[2]=r[2]*c,e[3]=-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),e}function nt(t,r,e,n=Q()){const c=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=t[0]-r[0],O=t[1]-r[1],P=t[2]-r[2],S=a*P-o*O,q=o*i-c*P,w=c*O-a*i,V=S*S+q*q+w*w,X=Math.abs(V-1)>1e-5&&V>1e-12?1/Math.sqrt(V):1;return n[0]=S*X,n[1]=q*X,n[2]=w*X,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function j(t,r,e,n=0,c=Math.floor(e*(1/3)),a=Math.floor(e*(2/3))){if(e<3)return!1;r($,n);let o=c,i=!1;for(;o<e-1&&!i;)r(T,o),o++,i=!d($,T);if(!i)return!1;for(o=Math.max(o,a),i=!1;o<e&&!i;)r(h,o),o++,_(A,$,T),M(A,A),_(U,T,h),M(U,U),i=!d($,h)&&!d(T,h)&&Math.abs(u(A,U))<ct;return i?(nt($,T,h,t),!0):(n!==0||c!==1||a!==2)&&j(t,r,e,0,1,2)}function At(t,r,e=!0){const n=r.length/3;return j(t,(c,a)=>D(c,r[3*a+0],r[3*a+1],r[3*a+2]),e?n-1:n)}const ct=.99619469809,$=N(),T=N(),h=N(),A=N(),U=N();function Ut(t,r,e){return r!==t&&rt(t,r),t[3]=-u(t,e),t}function Ct(t,r){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r}function pt(t,r,e,n){return C(h,r,t),et(e,h,n)}function Ft(t,r,e,n){return b(R(t,r,_(f.get(),e,r),ot,n))}function bt(t,r,e){return r!=null&&b(R(t,r.origin,r.direction,at,e))}function Rt(t,r,e){return b(R(t,r.origin,r.vector,I.NONE,e))}function qt(t,r,e){return b(R(t,r.origin,r.vector,I.CLAMP,e))}function wt(t,r){return F(t,r)>=0}function Vt(t,r){const e=u(t,r.ray.direction),n=-F(t,r.ray.origin);if(e>-1e-6&&e<1e-6)return n>0;const c=n/e;return e>0?c<r.c1&&(r.c1=c):c>r.c0&&(r.c0=c),r.c0<=r.c1}function Xt(t,r,e){const n=p(f.get(),t,-t[3]),c=it(t,_(f.get(),r,n),f.get());return H(e,c,n),e}function dt(t,r,e,n){const c=t,a=f.get(),o=f.get();tt(c,a,o);const i=_(f.get(),e,r),O=v(a,i),P=v(o,i),S=v(c,i);return D(n,O,P,S)}function it(t,r,e){const n=p(f.get(),t,u(t,r));return _(e,r,n),e}function vt(t,r){return Math.abs(F(t,r))}function F(t,r){return u(t,r)+t[3]}var s;function b(t){return t===s.INTERSECTS_INSIDE_OUT||t===s.INTERSECTS_OUTSIDE_IN}function R(t,r,e,n,c){const a=u(t,e),o=F(t,r);if(a===0)return o>=0?s.INSIDE:s.OUTSIDE;let i=-o/a;return n&I.CLAMP&&(i=z(i,0,1)),!(n&I.INFINITE_MIN)&&i<0||!(n&I.INFINITE_MAX)&&i>1?o>=0?s.INSIDE:s.OUTSIDE:(H(c,r,p(c,e,i)),o>=0?s.INTERSECTS_INSIDE_OUT:s.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(s||(s={}));const g=[0,0,1,0];var I;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(I||(I={}));const ot=I.INFINITE_MIN|I.INFINITE_MAX,at=I.INFINITE_MAX;export{At as A,Pt as D,Vt as G,Xt as H,dt as J,Ct as L,Q as M,lt as O,pt as P,vt as Q,K as U,F as V,$t as a,_t as b,f as c,tt as d,v as f,Ot as g,rt as h,Mt as i,Ft as k,et as l,Dt as m,gt as o,nt as p,Rt as q,B as r,St as t,mt as u,j as v,qt as w,bt as x,Ut as y,wt as z};
