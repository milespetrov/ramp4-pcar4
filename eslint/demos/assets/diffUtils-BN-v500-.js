import{V as h,bh as w,aF as A}from"./main-QmNQNEqS.js";const D=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function y(e){return e instanceof A}function b(e){return e instanceof h?Object.keys(e.items):y(e)?w(e).keys():e?Object.keys(e):[]}function a(e,n){return e instanceof h?e.items[n]:e[n]}function k(e,n){return!(!Array.isArray(e)||!Array.isArray(n))&&e.length!==n.length}function c(e){return e?e.declaredClass:null}function V(e,n){const o=e.diff;if(o&&typeof o=="function")return o(e,n);const i=b(e),f=b(n);if(i.length===0&&f.length===0)return;if(!i.length||!f.length||k(e,n))return{type:"complete",oldValue:e,newValue:n};const s=f.filter(t=>!i.includes(t)),g=i.filter(t=>!f.includes(t)),d=i.filter(t=>f.includes(t)&&a(e,t)!==a(n,t)).concat(s,g).sort(),m=c(e);if(m&&D.has(m)&&d.length)return{type:"complete",oldValue:e,newValue:n};let p;const j=y(e)&&y(n);for(const t of d){const l=a(e,t),r=a(n,t);let u;if((j||typeof l!="function"&&typeof r!="function")&&l!==r&&(l!=null||r!=null)){if(o&&o[t]&&typeof o[t]=="function")u=o[t]?.(l,r);else if(l instanceof Date&&r instanceof Date){if(l.getTime()===r.getTime())continue;u={type:"complete",oldValue:l,newValue:r}}else u=typeof l=="object"&&typeof r=="object"&&c(l)===c(r)?V(l,r):{type:"complete",oldValue:l,newValue:r};u!=null&&(p!=null?p.diff[t]=u:p={type:"partial",diff:{[t]:u}})}}return p}function S(e,n){return O(e,n)}function O(e,n){if(e==null)return!1;const o=n.split(".");let i=e;for(const f of o){if(i.type==="complete")return!0;if(i.type!=="partial")return!1;{const s=i.diff[f];if(!s)return!1;i=s}}return!0}function C(e,n){if(!e)return!1;if(e.type==="partial"){const o=Object.keys(e.diff);return o.length===1&&o[0]===n}return!1}function T(e,n){if(typeof e!="function"&&typeof n!="function"&&(e!=null||n!=null))return e==null||n==null||typeof e=="object"&&typeof n=="object"&&c(e)!==c(n)?{type:"complete",oldValue:e,newValue:n}:V(e,n)}export{T as d,O as p,S as s,C as y};
