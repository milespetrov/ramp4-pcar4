import{n as o}from"./timeSupport-D7wQDqf0.js";import{e as r,s as i}from"./OptimizedFeature-EIithYlr.js";const s={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new r(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(t.centroid==null&&(t.centroid=o(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{s as o};
