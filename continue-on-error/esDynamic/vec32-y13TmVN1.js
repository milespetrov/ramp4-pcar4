import{aA as z}from"./main-IAmJgjpH.js";import{e as tt,o as at}from"./common-CYWrYyJl.js";function b(t){const a=t[0],s=t[1],n=t[2];return Math.sqrt(a*a+s*s+n*n)}function A(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t}function _(t,a,s,n){return t[0]=a,t[1]=s,t[2]=n,t}function j(t,a,s){return t[0]=a[0]+s[0],t[1]=a[1]+s[1],t[2]=a[2]+s[2],t}function r(t,a,s){return t[0]=a[0]-s[0],t[1]=a[1]-s[1],t[2]=a[2]-s[2],t}function q(t,a,s){return t[0]=a[0]*s[0],t[1]=a[1]*s[1],t[2]=a[2]*s[2],t}function x(t,a,s){return t[0]=a[0]/s[0],t[1]=a[1]/s[1],t[2]=a[2]/s[2],t}function st(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t}function nt(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t}function I(t,a){return t[0]=Math.abs(a[0]),t[1]=Math.abs(a[1]),t[2]=Math.abs(a[2]),t}function P(t,a){return t[0]=Math.sign(a[0]),t[1]=Math.sign(a[1]),t[2]=Math.sign(a[2]),t}function D(t,a,s){return t[0]=Math.min(a[0],s[0]),t[1]=Math.min(a[1],s[1]),t[2]=Math.min(a[2],s[2]),t}function E(t,a,s){return t[0]=Math.max(a[0],s[0]),t[1]=Math.max(a[1],s[1]),t[2]=Math.max(a[2],s[2]),t}function ct(t,a=0,s=1){return t[0]=Math.min(Math.max(t[0],a),s),t[1]=Math.min(Math.max(t[1],a),s),t[2]=Math.min(Math.max(t[2],a),s),t}function ut(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t}function L(t,a,s){return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t}function N(t,a,s,n){return t[0]=a[0]+s[0]*n,t[1]=a[1]+s[1]*n,t[2]=a[2]+s[2]*n,t}function g(t,a){const s=a[0]-t[0],n=a[1]-t[1],c=a[2]-t[2];return Math.sqrt(s*s+n*n+c*c)}function p(t,a){const s=a[0]-t[0],n=a[1]-t[1],c=a[2]-t[2];return s*s+n*n+c*c}function v(t){const a=t[0],s=t[1],n=t[2];return a*a+s*s+n*n}function O(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t}function Q(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t}function l(t,a){const s=a[0],n=a[1],c=a[2];let u=s*s+n*n+c*c;return u>0&&(u=1/Math.sqrt(u),t[0]=a[0]*u,t[1]=a[1]*u,t[2]=a[2]*u),t}function y(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]}function S(t,a,s){const n=a[0],c=a[1],u=a[2],e=s[0],h=s[1],i=s[2];return t[0]=c*i-u*h,t[1]=u*e-n*i,t[2]=n*h-c*e,t}function et(t,a,s){const n=a[0],c=a[1],u=a[2],e=s[0],h=s[1],i=s[2],M=c*i-u*h,f=u*e-n*i,o=n*h-c*e,m=Math.sqrt(M*M+f*f+o*o);return t[0]=M/m,t[1]=f/m,t[2]=o/m,t}function X(t,a,s,n){const c=a[0],u=a[1],e=a[2];return t[0]=c+n*(s[0]-c),t[1]=u+n*(s[1]-u),t[2]=e+n*(s[2]-e),t}function it(t,a,s,n,c,u){const e=u*u,h=e*(2*u-3)+1,i=e*(u-2)+u,M=e*(u-1),f=e*(3-2*u);return t[0]=a[0]*h+s[0]*i+n[0]*M+c[0]*f,t[1]=a[1]*h+s[1]*i+n[1]*M+c[1]*f,t[2]=a[2]*h+s[2]*i+n[2]*M+c[2]*f,t}function ht(t,a,s,n,c,u){const e=1-u,h=e*e,i=u*u,M=h*e,f=3*u*h,o=3*i*e,m=i*u;return t[0]=a[0]*M+s[0]*f+n[0]*o+c[0]*m,t[1]=a[1]*M+s[1]*f+n[1]*o+c[1]*m,t[2]=a[2]*M+s[2]*f+n[2]*o+c[2]*m,t}function Mt(t,a=1){const s=at,n=2*s()*Math.PI,c=2*s()-1,u=Math.sqrt(1-c*c)*a;return t[0]=Math.cos(n)*u,t[1]=Math.sin(n)*u,t[2]=c*a,t}function Y(t,a,s){const n=a[0],c=a[1],u=a[2];return t[0]=s[0]*n+s[4]*c+s[8]*u+s[12],t[1]=s[1]*n+s[5]*c+s[9]*u+s[13],t[2]=s[2]*n+s[6]*c+s[10]*u+s[14],t}function Z(t,a,s){const n=a[0],c=a[1],u=a[2];return t[0]=n*s[0]+c*s[3]+u*s[6],t[1]=n*s[1]+c*s[4]+u*s[7],t[2]=n*s[2]+c*s[5]+u*s[8],t}function w(t,a,s){const n=s[0],c=s[1],u=s[2],e=s[3],h=a[0],i=a[1],M=a[2],f=c*M-u*i,o=u*h-n*M,m=n*i-c*h,U=c*m-u*o,V=u*f-n*m,$=n*o-c*f,d=2*e;return t[0]=h+f*d+2*U,t[1]=i+o*d+2*V,t[2]=M+m*d+2*$,t}function ft(t,a,s,n){const c=[],u=[];return c[0]=a[0]-s[0],c[1]=a[1]-s[1],c[2]=a[2]-s[2],u[0]=c[0],u[1]=c[1]*Math.cos(n)-c[2]*Math.sin(n),u[2]=c[1]*Math.sin(n)+c[2]*Math.cos(n),t[0]=u[0]+s[0],t[1]=u[1]+s[1],t[2]=u[2]+s[2],t}function ot(t,a,s,n){const c=[],u=[];return c[0]=a[0]-s[0],c[1]=a[1]-s[1],c[2]=a[2]-s[2],u[0]=c[2]*Math.sin(n)+c[0]*Math.cos(n),u[1]=c[1],u[2]=c[2]*Math.cos(n)-c[0]*Math.sin(n),t[0]=u[0]+s[0],t[1]=u[1]+s[1],t[2]=u[2]+s[2],t}function H(t,a,s,n){const c=[],u=[];return c[0]=a[0]-s[0],c[1]=a[1]-s[1],c[2]=a[2]-s[2],u[0]=c[0]*Math.cos(n)-c[1]*Math.sin(n),u[1]=c[0]*Math.sin(n)+c[1]*Math.cos(n),u[2]=c[2],t[0]=u[0]+s[0],t[1]=u[1]+s[1],t[2]=u[2]+s[2],t}function mt(t,a){l(J,t),l(K,a);const s=y(J,K);return s>1?0:s<-1?Math.PI:Math.acos(s)}const J=z(),K=z();function lt(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function R(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]}function T(t,a){if(t===a)return!0;const s=t[0],n=t[1],c=t[2],u=a[0],e=a[1],h=a[2],i=tt();return Math.abs(s-u)<=i*Math.max(1,Math.abs(s),Math.abs(u))&&Math.abs(n-e)<=i*Math.max(1,Math.abs(n),Math.abs(e))&&Math.abs(c-h)<=i*Math.max(1,Math.abs(c),Math.abs(h))}function W(t,a,s){const n=s[0]-a[0],c=s[1]-a[1],u=s[2]-a[2];let e=n*n+c*c+u*u;return e>0?(e=1/Math.sqrt(e),t[0]=n*e,t[1]=c*e,t[2]=u*e,t):(t[0]=0,t[1]=0,t[2]=0,t)}const k=r,dt=q,bt=x,B=g,C=p,F=b,G=v;Object.freeze(Object.defineProperty({__proto__:null,abs:I,add:j,angle:mt,bezier:ht,ceil:st,clamp:ct,copy:A,cross:S,crossAndNormalize:et,direction:W,dist:B,distance:g,div:bt,divide:x,dot:y,equals:T,exactEquals:R,floor:nt,hermite:it,inverse:Q,len:F,length:b,lerp:X,max:E,min:D,mul:dt,multiply:q,negate:O,normalize:l,random:Mt,rotateX:ft,rotateY:ot,rotateZ:H,round:ut,scale:L,scaleAndAdd:N,set:_,sign:P,sqrDist:C,sqrLen:G,squaredDistance:p,squaredLength:v,str:lt,sub:k,subtract:r,transformMat3:Z,transformMat4:Y,transformQuat:w},Symbol.toStringTag,{value:"Module"}));export{l as A,Y as E,R as H,X as I,T as J,W as K,Z as N,y as P,w as Q,k as R,B as W,C as X,F as Y,G as Z,S as _,r as c,E as d,q as e,I as f,L as g,x as i,v as j,D as l,P as m,_ as o,g as p,N as q,b as r,A as s,j as u,p as v,H as w,O as y,Q as z};
