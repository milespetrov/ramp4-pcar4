import{r as l,t as d,l as a,j as o,n as p}from"./main-BqyZdgF9.js";const m=()=>p.getLogger("esri.intl.substitute");function b(t,r,s={}){const{format:n={}}=s;return l(t,e=>g(e,r,n))}function g(t,r,s){let n,e;const u=t.indexOf(":");if(u===-1?n=t.trim():(n=t.slice(0,u).trim(),e=t.slice(u+1).trim()),!n)return"";const i=d(n,r);if(i==null)return"";const f=(e?s?.[e]:null)??s?.[n];return f?w(i,f):e?h(i,e):c(i)}function w(t,r){switch(r.type){case"date":return o(t,r.intlOptions);case"number":return a(t,r.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(t)}}function h(t,r){switch(r.toLowerCase()){case"dateformat":return o(t);case"numberformat":return a(t);default:return m().warn(`inline format is unsupported since 4.12: ${r}`),/^(dateformat|datestring)/i.test(r)?o(t):/^numberformat/i.test(r)?a(t):c(t)}}function c(t){switch(typeof t){case"string":return t;case"number":return a(t);case"boolean":return""+t;default:return t instanceof Date?o(t):""}}export{b as s};
