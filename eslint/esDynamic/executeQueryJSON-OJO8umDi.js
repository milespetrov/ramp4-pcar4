import{f as i}from"./utils-yA5smbyq.js";import{c}from"./query-Vy4azyRn.js";import{d as e}from"./FeatureSet-5FO8v-T5.js";import{b as p}from"./Query-B8FI1Hob.js";async function u(a,r,o){const t=await s(a,r,o);return e.fromJSON(t)}async function s(a,r,o){const t=i(a),f={...o},n=p.from(r),{data:m}=await c(t,n,n.sourceSpatialReference,f);return m}export{s as a,u as s};
