import{cS as z,ac as N,gU as W,ab as Y}from"./main-CZM6prq-.js";import{P as r,r as x,A as T,_ as A,g as C,o as g,c as _,u as G,H as y}from"./vec32-CjgofUqd.js";import"./vec42-D8CJyqHG.js";import{e as Z}from"./mat3f64-Dh9_zhFu.js";import{e as tt}from"./mat4f64-BaJwL7tQ.js";import{e as nt}from"./quatf64-C16JxGFv.js";import{n as st}from"./vec2f64-Lu6rYV-9.js";import{n as et}from"./vec4f64-CjUMzAyX.js";function at(t,n,s){const e=r(t,n)/r(t,t);return C(s,t,e)}function p(t,n){return r(t,n)/x(t)}function ct(t,n){const s=r(t,n)/(x(t)*x(n));return-z(s)}function it(t,n,s){T(F,t),T(d,n);const e=r(F,d),a=z(e),o=A(F,F,d);return r(o,s)<0?2*Math.PI-a:a}const F=N(),d=N();let M=class h{constructor(n){this._create=n,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&W(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const n=2*this._itemsPtr;this._items.length>n&&(this._items.length=n),this._itemsPtr=0}static createVec2f64(){return new h(st)}static createVec3f64(){return new h(N)}static createVec4f64(){return new h(et)}static createMat3f64(){return new h(Z)}static createMat4f64(){return new h(tt)}static createQuatf64(){return new h(nt)}get test(){}};const ot=M.createVec2f64(),f=M.createVec3f64(),J=M.createVec4f64();M.createMat3f64();const rt=M.createMat4f64(),ut=M.createQuatf64();function It(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],e=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,e))}function ft(t,n){const s=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),e=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),a=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return g(t,s,e,a),t}function $(t,n,s){Math.abs(t[0])>Math.abs(t[1])?g(n,0,1,0):g(n,1,0,0),A(s,t,n),A(n,s,t),T(s,s),T(n,n)}function Q(t=P){return[t[0],t[1],t[2],t[3]]}function Nt(t=P[0],n=P[1],s=P[2],e=P[3]){return H(t,n,s,e,J.get())}function j(t,n){return H(n[0],n[1],n[2],n[3],t)}function Et(t){return t}function H(t,n,s,e,a=Q()){return a[0]=t,a[1]=n,a[2]=s,a[3]=e,a}function B(t,n,s){const e=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],a=Math.abs(e-1)>1e-5&&e>1e-12?1/Math.sqrt(e):1;return s[0]=n[0]*a,s[1]=n[1]*a,s[2]=n[2]*a,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function K(t,n,s,e=Q()){const a=s[0]-n[0],o=s[1]-n[1],i=s[2]-n[2],c=t[0]-n[0],U=t[1]-n[1],l=t[2]-n[2],m=o*l-i*U,V=i*c-a*l,v=a*U-o*c,L=m*m+V*V+v*v,X=Math.abs(L-1)>1e-5&&L>1e-12?1/Math.sqrt(L):1;return e[0]=m*X,e[1]=V*X,e[2]=v*X,e[3]=-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),e}function k(t,n,s,e=0,a=Math.floor(s*(1/3)),o=Math.floor(s*(2/3))){if(s<3)return!1;n(D,e);let i=a,c=!1;for(;i<s-1&&!c;)n(S,i),i++,c=!y(D,S);if(!c)return!1;for(i=Math.max(i,o),c=!1;i<s&&!c;)n(E,i),i++,_(b,D,S),T(b,b),_(w,S,E),T(w,w),c=!y(D,E)&&!y(S,E)&&Math.abs(r(b,w))<Tt;return c?(K(D,S,E,t),!0):(e!==0||a!==1||o!==2)&&k(t,n,s,0,1,2)}function ht(t,n,s=!0){const e=n.length/3;return k(t,(a,o)=>g(a,n[3*o+0],n[3*o+1],n[3*o+2]),s?e-1:e)}const Tt=.99619469809,D=N(),S=N(),E=N(),b=N(),w=N();function _t(t,n,s){return n!==t&&j(t,n),t[3]=-r(t,s),t}function Mt(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function St(t,n,s,e){return A(E,n,t),B(s,E,e)}function mt(t,n,s,e){return R(q(t,n,_(f.get(),s,n),Ft,e))}function gt(t,n,s){return n!=null&&R(q(t,n.origin,n.direction,bt,s))}function Dt(t,n,s){return R(q(t,n.origin,n.vector,I.NONE,s))}function Ot(t,n,s){return R(q(t,n.origin,n.vector,I.CLAMP,s))}function Pt(t,n){return O(t,n)>=0}function Ut(t,n){const s=r(t,n.ray.direction),e=-O(t,n.ray.origin);if(s>-1e-6&&s<1e-6)return e>0;const a=e/s;return s>0?a<n.c1&&(n.c1=a):a>n.c0&&(n.c0=a),n.c0<=n.c1}function lt(t,n,s){const e=C(f.get(),t,-t[3]),a=Ct(t,_(f.get(),n,e),f.get());return G(s,a,e),s}function At(t,n,s,e){const a=t,o=f.get(),i=f.get();$(a,o,i);const c=_(f.get(),s,n),U=p(o,c),l=p(i,c),m=p(a,c);return g(e,U,l,m)}function Ct(t,n,s){const e=C(f.get(),t,r(t,n));return _(s,n,e),s}function pt(t,n){return Math.abs(O(t,n))}function O(t,n){return r(t,n)+t[3]}var u;function R(t){return t===u.INTERSECTS_INSIDE_OUT||t===u.INTERSECTS_OUTSIDE_IN}function q(t,n,s,e,a){const o=r(t,s),i=O(t,n);if(o===0)return i>=0?u.INSIDE:u.OUTSIDE;let c=-i/o;return e&I.CLAMP&&(c=Y(c,0,1)),!(e&I.INFINITE_MIN)&&c<0||!(e&I.INFINITE_MAX)&&c>1?i>=0?u.INSIDE:u.OUTSIDE:(G(a,n,C(a,s,c)),i>=0?u.INTERSECTS_INSIDE_OUT:u.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(u||(u={}));const P=[0,0,1,0];var I;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(I||(I={}));const Ft=I.INFINITE_MIN|I.INFINITE_MAX,bt=I.INFINITE_MAX;export{ht as A,Nt as D,Ut as G,lt as H,At as J,Mt as L,Q as M,Et as O,St as P,pt as Q,H as U,O as V,rt as a,ct as b,f as c,$ as d,p as f,ft as g,j as h,at as i,mt as k,B as l,It as m,ut as o,K as p,Dt as q,J as r,ot as t,it as u,k as v,Ot as w,gt as x,_t as y,Pt as z};
