import{gO as a,a6 as o,a9 as f,aa as n}from"./main-CZM6prq-.js";import"./jsxFactory-Ce1bY6f0.js";function _(t,e){return{type:a(e),value:t,unit:e}}function b(t){return{value:t}}function u(t,e){return{type:a(e),value:t,unit:e}}function l(t,e){return{type:a(e),value:t,unit:e}}function r(t,e,s="arithmetic"){return{type:a(e),value:t,unit:e,rotationType:s}}function v(t,e){const s=c(t,e);return t.type==="angle"?r(s,e,t.rotationType):_(s,e)}function c(t,e){return o(t.value,t.unit,e)}function p(t,e){return t==null?e:e==null||t.value>o(e.value,e.unit,t.unit)?t:e}function y(t,e){return t==null?null:{...t,value:t.value*e}}function d(t,e,s){if(e===s)return t;switch(s){case"arithmetic":case"geographic":return 90-t}}const g=u(0,"meters"),m=l(0,"square-meters");r(0,"radians");const E=r(0,"degrees"),S=r(0,"degrees","geographic");class z{constructor(e){this._observable=new f,this._set=new Set(e)}get size(){return n(this._observable),this._set.size}add(e){const s=this._set.size;return this._set.add(e),this._set.size!==s&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(e){const s=this._set.delete(e);return s&&this._observable.notify(),s}entries(){return n(this._observable),this._set.entries()}forEach(e,s){n(this._observable),this._set.forEach((i,h)=>e.call(s,i,h,this),s)}has(e){return n(this._observable),this._set.has(e)}keys(){return n(this._observable),this._set.keys()}values(){return n(this._observable),this._set.values()}[Symbol.iterator](){return n(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}function N(t){return e=>{e.hasOwnProperty("_delegatedEventNames")||(e._delegatedEventNames=e._delegatedEventNames?e._delegatedEventNames.slice():[]);const s=e._delegatedEventNames,i=Array.isArray(t)?t:w(t);s.push(...i)}}function w(t){return t.split(",").map(e=>e.trim())}function T(t){return t&&typeof t.render=="function"}function k(t){return t&&typeof t.postMixInProperties=="function"&&typeof t.buildRendering=="function"&&typeof t.postCreate=="function"&&typeof t.startup=="function"}export{E as U,u as a,z as b,N as c,m as d,T as e,c as f,g as h,b as i,S as j,l,d as m,r as o,p,v as s,k as t,y};
