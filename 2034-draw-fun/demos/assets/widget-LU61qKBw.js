import{gE as n,a5 as o,a8 as l,a9 as r}from"./main-DvRWqUGe.js";import"./jsxFactory-DfIuU6I3.js";function c(t,e){return{type:n(e),value:t,unit:e}}function y(t){return{value:t}}function h(t,e){return{type:n(e),value:t,unit:e}}function f(t,e){return{type:n(e),value:t,unit:e}}function i(t,e,s="arithmetic"){return{type:n(e),value:t,unit:e,rotationType:s}}function d(t,e){const s=_(t,e);return t.type==="angle"?i(s,e,t.rotationType):c(s,e)}function _(t,e){return o(t.value,t.unit,e)}function g(t,e){return t==null?e:e==null||t.value>o(e.value,e.unit,t.unit)?t:e}function m(t,e){return t==null?null:{...t,value:t.value*e}}function E(t,e,s){if(e===s)return t;switch(s){case"arithmetic":case"geographic":return 90-t}}const S=h(0,"meters"),z=f(0,"square-meters");i(0,"radians");const N=i(0,"degrees"),$=i(0,"degrees","geographic");class w{constructor(e){this._observable=new l,this._set=new Set(e)}get size(){return r(this._observable),this._set.size}add(e){const s=this._set.size;return this._set.add(e),this._set.size!==s&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(e){const s=this._set.delete(e);return s&&this._observable.notify(),s}entries(){return r(this._observable),this._set.entries()}forEach(e,s){r(this._observable),this._set.forEach((a,u)=>e.call(s,a,u,this),s)}has(e){return r(this._observable),this._set.has(e)}keys(){return r(this._observable),this._set.keys()}values(){return r(this._observable),this._set.values()}[Symbol.iterator](){return r(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}function T(t){return e=>{e.hasOwnProperty("_delegatedEventNames")||(e._delegatedEventNames=e._delegatedEventNames?e._delegatedEventNames.slice():[]);const s=e._delegatedEventNames,a=Array.isArray(t)?t:b(t);s.push(...a)}}function b(t){return t.split(",").map(e=>e.trim())}function k(t){return t&&typeof t.render=="function"}function x(t){return t&&typeof t.postMixInProperties=="function"&&typeof t.buildRendering=="function"&&typeof t.postCreate=="function"&&typeof t.startup=="function"}export{N as U,h as a,w as b,T as c,z as d,k as e,_ as f,S as h,y as i,$ as j,f as l,E as m,i as o,g as p,d as s,x as t,m as y};
