const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GroupLayer-Cj6pxPQ2.js","./preload-helper-ExcqyqRp.js","./main-Re2Hv9G4.js","./main-yQhLLpS1.css","./CollectionFlattener-DeRJARsX.js","./loadAll-Cj9qqwps.js","./MultiOriginJSONSupport-BxtX798q.js","./Layer-FhlwjB6K.js","./TimeExtent-BmqfbUDc.js","./BlendLayer-BgO5IcKb.js","./jsonUtils-W9Lv_4SH.js","./parser-CBFGS38u.js","./mat4f32-DcsiF_Rp.js","./mat4-CF-CHQey.js","./common-DQOJ18NT.js","./OperationalLayer-CWOWVm9M.js","./commonProperties-Cw8-gNwg.js","./ElevationInfo-BReLKaDg.js","./lengthUtils-BrINmgTN.js","./PortalLayer-oV5oB5He.js","./PortalItem-05fF2w5b.js","./portalItemUtils-BcFDL0Hl.js","./projection-mClxjUCu.js","./projectBuffer-BMlvsPkt.js","./ScaleRangeLayer-DC374dWB.js","./fetchService-BJsXi6cQ.js","./TablesMixin-Bl-8gDn9.js","./interfaces-CL2NbQte.js","./saveUtils-Bd9lRrE0.js","./writeUtils-abcxEzlG.js"])))=>i.map(i=>d[i]);
import{_ as I}from"./preload-helper-ExcqyqRp.js";import{s as p,bD as g,I as L,bE as v}from"./main-Re2Hv9G4.js";import{d as P,h as O}from"./arcgisLayerUrl-DQX1Bhuc.js";import{s as T}from"./associatedFeatureServiceUtils-C50IwaUY.js";import{t as m,i as d,a as $,b as U}from"./fetchService-BJsXi6cQ.js";import"./PortalItem-05fF2w5b.js";const C={FeatureLayer:!0,SceneLayer:!0};async function K(a){const{properties:t,url:e}=a,s={...t,url:e},l=await F(e,t?.customParameters),{Constructor:r,layerId:o,sourceJSON:c,parsedUrl:i,layers:u,tables:n}=l;if(u.length+n.length===0)return o!=null&&(s.layerId=o),c!=null&&(s.sourceJSON=c),new r(s);const y=new(await I(async()=>{const{default:f}=await import("./GroupLayer-Cj6pxPQ2.js");return{default:f}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url)).default({title:i.title});return await _(y,l,s),y}function S(a,t){return a?a.find(({id:e})=>e===t):null}function b(a,t,e,s,l){const r={...l,layerId:t};return a!=null&&(r.url=a),e!=null&&(r.sourceJSON=e),"sublayerTitleMode"in s.prototype&&(r.sublayerTitleMode="service-name"),new s(r)}async function _(a,t,e){const s=t.sublayerConstructorProvider;for(const{id:l,serverUrl:r}of t.layers){const o=S(t.sublayerInfos,l),c=b(r,l,o,(o&&s?.(o))??t.Constructor,e);a.add(c)}if(t.tables.length){const l=await w("FeatureLayer");t.tables.forEach(({id:r,serverUrl:o})=>{const c=b(o,r,S(t.tableInfos,r),l,e);a.tables.add(c)})}}async function F(a,t){let e=P(a);if(e==null&&(e=await N(a,t)),e==null)throw new p("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const{serverType:s,sublayer:l}=e;let r;const o={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},c=s==="FeatureServer",i=s==="SceneServer",u={parsedUrl:e,Constructor:null,layerId:c||i?l??void 0:void 0,layers:[],tables:[]};switch(s){case"MapServer":if(l!=null){const{type:n}=await m(a,{customParameters:t});switch(r="FeatureLayer",n){case"Catalog Layer":r="CatalogLayer";break;case"Catalog Dynamic Group Layer":throw new p("arcgis-layers:unsupported",`fromUrl() not supported for "${n}" layers`)}}else r=await k(a,t)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await m(a,{customParameters:t}),{tileInfo:y,cacheType:f}=n;r=y?y?.format?.toUpperCase()!=="LERC"||f&&f.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await m(e.url.path,{customParameters:t});if(r="SceneLayer",n){const y=n?.layers;if(n?.layerType==="Voxel")r="VoxelLayer";else if(y?.length){const f=y[0]?.layerType;f!=null&&v[f]!=null&&(r=v[f])}}break}case"3DTilesServer":throw new p("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(r="FeatureLayer",l!=null){const n=await m(a,{customParameters:t});u.sourceJSON=n,r=d(n.type)}break;default:r=o[s]}if(C[r]&&l==null){const n=await V(a,s,t);if(c&&(u.sublayerInfos=n.layerInfos,u.tableInfos=n.tableInfos),n.layers.length+n.tables.length!==1)u.layers=n.layers,u.tables=n.tables,c&&n.layerInfos?.length&&(u.sublayerConstructorProvider=await E(n.layerInfos));else if(c||i){const y=n.layerInfos?.[0]??n.tableInfos?.[0];if(u.layerId=n.layers[0]?.id??n.tables[0]?.id,u.sourceJSON=y,c){const f=y?.type;r=d(f)}}}return u.Constructor=await w(r),u}async function N(a,t){const e=await m(a,{customParameters:t});let s=null,l=null;const r=e.type;if(r==="Feature Layer"||r==="Table"?(s="FeatureServer",l=e.id??null):r==="indexedVector"?s="VectorTileServer":e.hasOwnProperty("mapName")?s="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?s="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?s="FeatureServer":e.hasOwnProperty("streamUrls")?s="StreamServer":h(e)?(s="SceneServer",l=e.id):e.hasOwnProperty("layers")&&h(e.layers?.[0])&&(s="SceneServer"),!s)return null;const o=l!=null?O(a):null;return{title:o!=null&&e.name||g(a),serverType:s,sublayer:l,url:{path:o!=null?o.serviceUrl:L(a).path}}}function h(a){return a!=null&&a.hasOwnProperty("store")&&a.hasOwnProperty("id")&&typeof a.id=="number"}async function V(a,t,e){let s,l,r=!1;switch(t){case"FeatureServer":{const i=await $(a,{customParameters:e});r=!!i.layersJSON,s=i.layersJSON||i.serviceJSON;break}case"SceneServer":{const i=await J(a,e);s=i.serviceInfo,l=i.tableServerUrl;break}default:s=await m(a,{customParameters:e})}const o=s?.layers,c=s?.tables;return{layers:o?.map(i=>({id:i.id})).reverse()||[],tables:c?.map(i=>({serverUrl:l,id:i.id})).reverse()||[],layerInfos:r?o:[],tableInfos:r?c:[]}}async function J(a,t){const e=await m(a,{customParameters:t});if(!e.layers?.[0])return{serviceInfo:e};try{const{serverUrl:l}=await T(a),r=await m(l,{customParameters:t}).catch(()=>null);return r&&(e.tables=r.tables),{serviceInfo:e,tableServerUrl:l}}catch{return{serviceInfo:e}}}async function w(a){return(0,U[a])()}async function k(a,t){return(await m(a,{customParameters:t})).tileInfo}async function E(a){if(!a.length)return;const t=new Set,e=[];for(const{type:r}of a)t.has(r)||(t.add(r),e.push(w(d(r))));const s=await Promise.all(e),l=new Map;return Array.from(t).forEach((r,o)=>{l.set(r,s[o])}),r=>l.get(r.type)}export{K as fromUrl};
