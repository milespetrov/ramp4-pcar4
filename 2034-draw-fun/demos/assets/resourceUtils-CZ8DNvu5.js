const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./resourceUtils-C2OI_xSf.js","./main-DvRWqUGe.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css"])))=>i.map(i=>d[i]);
import{_ as g}from"./preload-helper-ExcqyqRp.js";import{dZ as y,G as S,s as v,d_ as E}from"./main-DvRWqUGe.js";import{n as P}from"./uuid-Cl5lrJ4c.js";import{getSiblingOfSameTypeI as $,contentToBlob as m}from"./resourceUtils-C2OI_xSf.js";async function A(r,t,o){const s=await w(r,t,o);await I(s,t,o)}async function F(r,t,o,s,a){const c=await w(o,s,a);await r.update({data:t}),await I(c,s,a)}async function w(r,t,o){if(!t?.resources)return;const s=t.portalItem===r.portalItem?new Set(r.paths):new Set;r.paths.length=0,r.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),c=new Set,f=[];a.forEach(e=>{s.delete(e),r.paths.push(e)});const p=[],h=[],u=[];for(const e of t.resources.toUpdate)if(s.delete(e.resource.path),a.has(e.resource.path)||c.has(e.resource.path)){const{resource:n,content:_,finish:d}=e,i=$(n,P());r.paths.push(i.path),p.push({resource:i,content:await m(_),compress:e.compress}),d&&u.push(()=>d(i))}else{r.paths.push(e.resource.path),h.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&u.push(()=>n(e.resource)),c.add(e.resource.path)}for(const e of t.resources.toAdd)if(r.paths.push(e.resource.path),s.has(e.resource.path))s.delete(e.resource.path);else{p.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&u.push(()=>n(e.resource))}if(p.length||h.length){const{addOrUpdateResources:e}=await g(()=>import("./resourceUtils-C2OI_xSf.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);await e(t.portalItem,p,"add",o),await e(t.portalItem,h,"update",o)}if(u.forEach(e=>e()),f.length===0)return s;const l=await y(f);if(S(o),l.length>0)throw new v("save:resources","Failed to save one or more resources",{errors:l});return s}async function I(r,t,o){if(!r||!t.portalItem)return;const s=[];for(const a of r){const c=t.portalItem.resourceFromPath(a);s.push(c.portalItem.removeResource(c,o))}await E(s)}export{F as n,A as p};
