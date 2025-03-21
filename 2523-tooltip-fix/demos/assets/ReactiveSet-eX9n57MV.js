import{E as g}from"./ByteSizeUnit-BsxeN7wM.js";import{a as T}from"./Cyclical-UPAWQ5mj.js";import{fR as b,a3 as a,l,r as x,aR as F,fS as p,fT as v,fU as $,fV as d,fW as z,fX as B,aS as w,aT as o}from"./main-CdsSyLmf.js";function M(r,t){return{type:b(t),value:r,unit:t}}function J(r){return{value:r}}function E(r,t){return{type:b(t),value:r,unit:t}}function I(r,t){return{type:b(t),value:r,unit:t}}function f(r,t,e="arithmetic"){return{type:b(t),value:r,unit:t,rotationType:e}}function L(r,t){const e=U(r,t);return r.type==="angle"?f(e,t,r.rotationType):M(e,t)}function U(r,t){return a(r.value,r.unit,t)}function k(r,t,e){if(t===e)return r;switch(e){case"arithmetic":case"geographic":return 90-r}}const N=E(0,"meters"),R=I(0,"square-meters");f(0,"radians");const Y=f(0,"degrees"),q=f(0,"degrees","geographic");function S(r,t,e){return r.units[t][e]}function u(r,t,e,s=2,i="abbr"){return`${l(t,{minimumFractionDigits:s,maximumFractionDigits:s,signDisplay:t>0?"never":"exceptZero"})} ${S(r,e,i)}`}function h(r,t,e,s=2,i="abbr"){return`${l(t,{minimumFractionDigits:s,maximumFractionDigits:s,signDisplay:"exceptZero"})} ${S(r,e,i)}`}function A(r,t,e,s=2,i="abbr"){const n=p(t,e);return u(r,a(t,e,n),n,s,i)}function H(r,t,e,s=2,i="abbr"){const n=p(t,e);return h(r,a(t,e,n),n,s,i)}function V(r,t,e,s=2,i="abbr"){const n=v(t,e);return u(r,a(t,e,n),n,s,i)}function W(r,t,e,s=2,i="abbr"){const n=v(t,e);return h(r,a(t,e,n),n,s,i)}function X(r,t,e,s=2,i="abbr"){const n=$(t,e);return u(r,a(t,e,n),n,s,i)}function C(r,t,e,s=2,i="abbr"){const n=$(t,e);return h(r,a(t,e,n),n,s,i)}function P(r,t,e,s=2,i="abbr"){const n=d(t,e);return u(r,a(t,e,n),n,s,i)}function Q(r,t,e,s=2,i="abbr"){const n=d(t,e);return h(r,a(t,e,n),n,s,i)}function tt(r,t,e,s=2,i="abbr"){const n=z(t,e);return u(r,a(t,e,n),n,s,i)}function et(r,t,e,s=2,i="abbr"){const n=B(t,e);return u(r,a(t,e,n),n,s,i)}const O=(r,t)=>({style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:t,minimumFractionDigits:t,signDisplay:r>0?"never":"exceptZero"});function rt(r,t,e,s,i,n=T,D=!0){let c=n.normalize(k(a(r,t,"degrees"),e,s),0,D);const m=O(c,i??2);return c=K(c,m),l(c,m)}const _=new Map;function K(r,t){const e=JSON.stringify(t);let s=_.get(e);return s||(s=new Intl.NumberFormat("en-US",t),_.set(e,s)),/^[-+]?360\.?0*°?$/.test(s.format(r))?0:r}const y=["B","kB","MB","GB","TB"];function st(r,t){let e=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(g.KILOBYTES));e=F(e,0,y.length-1);const s=l(t/g.KILOBYTES**e,{maximumFractionDigits:2});return x(r.units.bytes[y[e]],{fileSize:s})}class nt{constructor(t){this._observable=new w,this._set=new Set(t)}get size(){return o(this._observable),this._set.size}add(t){const e=this._set.size;return this._set.add(t),this._set.size!==e&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const e=this._set.delete(t);return e&&this._observable.notify(),e}entries(){return o(this._observable),this._set.entries()}forEach(t,e){o(this._observable),this._set.forEach((s,i)=>t.call(e,s,i,this),e)}has(t){return o(this._observable),this._set.has(t)}keys(){return o(this._observable),this._set.keys()}values(){return o(this._observable),this._set.values()}[Symbol.iterator](){return o(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{tt as $,P as B,A as D,W as F,Q as M,st as T,Y as U,E as a,L as b,S as c,X as d,R as e,U as f,u as g,C as h,J as i,et as j,N as k,I as l,k as m,q as n,f as o,h as p,nt as s,rt as w,H as x,V as y};
