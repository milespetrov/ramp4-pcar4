import{n as r}from"./timeSupport-Dd_Za4zA.js";import{e as o,s as i}from"./OptimizedFeature-CIptWNVu.js";const c={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=r(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{c as o};
