import{cu as i,cv as o,c7 as s,cw as r}from"./main-CZM6prq-.js";import"./Field-Czw7f_GQ.js";class c{constructor(e,n,l){this.uid=e,this.geometry=n,this.attributes=l,this.visible=!0,this.objectId=null,this.centroid=null}}function u(t){return t.geometry!=null}class m{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function p(t,e){switch(i(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[3]=t.x,e[1]=e[4]=t.y,t.hasZ&&(e[2]=e[5]=t.z);break;case"polyline":for(let n=0;n<t.paths.length;n++)o(e,t.paths[n],!!t.hasZ);break;case"polygon":for(let n=0;n<t.rings.length;n++)o(e,t.rings[n],!!t.hasZ);break;case"multipoint":o(e,t.points,!!t.hasZ);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[3]=t.xmax,e[4]=t.ymax,t.zmin!=null&&(e[2]=t.zmin),t.zmax!=null&&(e[5]=t.zmax)}}function y(t,e){switch(s(e),t.type==="mesh"&&(t=t.extent),t.type){case"point":e[0]=e[2]=t.x,e[1]=e[3]=t.y;break;case"polyline":for(let n=0;n<t.paths.length;n++)r(e,t.paths[n]);break;case"polygon":for(let n=0;n<t.rings.length;n++)r(e,t.rings[n]);break;case"multipoint":r(e,t.points);break;case"extent":e[0]=t.xmin,e[1]=t.ymin,e[2]=t.xmax,e[3]=t.ymax}}function f(t,e){return t.objectId!=null?t.objectId:t.attributes&&e?t.attributes[e]:null}function g(t,e,n,l){if(e?.size&&n!=null&&t)for(const a in t){if(!e.has(a))continue;const h=t[a];typeof h=="string"&&h.length>n&&(l(a),t[a]="")}}export{p as F,y as I,f as M,c as f,m as g,u as y,g as z};
