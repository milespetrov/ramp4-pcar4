import{f as m}from"./utils-OYqyAMOQ.js";import{c}from"./query-CuxDl8gq.js";import{d as e}from"./FeatureSet-DCgJveuP.js";import{b as p}from"./Query-B8kTaKZ5.js";async function S(r,o,t){const n=await s(r,o,t);return e.fromJSON(n)}async function s(r,o,t){const n=m(r),f={...t},a=p.from(o),{data:i}=await c(n,a,a.sourceSpatialReference,f);return i}export{s as a,S as s};
