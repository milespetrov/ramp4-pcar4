import{I as s,h as u}from"./main-CdsSyLmf.js";function a(n,o){return o?{...o,query:{...n??{},...o.query}}:{query:n}}function l(n){return typeof n=="string"?s(n):u(n)}function c(n,o,f){const i={};for(const e in n){if(e==="declaredClass")continue;const t=n[e];if(t!=null&&typeof t!="function")if(Array.isArray(t))i[e]=t.map(r=>c(r));else if(typeof t=="object")if(t.toJSON){const r=t.toJSON(f?.[e]);i[e]=JSON.stringify(r)}else i[e]=JSON.stringify(t);else i[e]=t}return i}export{l as f,a as i,c as s};
