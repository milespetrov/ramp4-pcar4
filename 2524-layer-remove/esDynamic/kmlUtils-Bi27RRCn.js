import{f as m,K as P,cn as I,H as w,U as k,bO as b,cS as S,cT as p,cU as d,cV as x,B as v,b4 as E}from"./main-sNoC4iWN.js";import{t as O}from"./jsonUtils-bqd4zcsy.js";import{d as F}from"./FeatureSet-DAyL1W3P.js";const M={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function T(n){const o=n.folders||[],t=o.slice(),e=new Map,s=new Map,i=new Map,f=new Map,c=new Map,l={esriGeometryPoint:s,esriGeometryPolyline:i,esriGeometryPolygon:f};(n.featureCollection?.layers||[]).forEach(r=>{const y=m(r);y.featureSet.features=[];const a=r.featureSet.geometryType;e.set(a,y);const g=r.layerDefinition.objectIdField;a==="esriGeometryPoint"?h(s,g,r.featureSet.features):a==="esriGeometryPolyline"?h(i,g,r.featureSet.features):a==="esriGeometryPolygon"&&h(f,g,r.featureSet.features)}),n.groundOverlays&&n.groundOverlays.forEach(r=>{c.set(r.id,r)}),o.forEach(r=>{r.networkLinkIds.forEach(y=>{const a=J(y,r.id,n.networkLinks);a&&t.push(a)})}),t.forEach(r=>{if(r.featureInfos){r.points=m(e.get("esriGeometryPoint")),r.polylines=m(e.get("esriGeometryPolyline")),r.polygons=m(e.get("esriGeometryPolygon")),r.mapImages=[];for(const y of r.featureInfos)switch(y.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const a=l[y.type].get(y.id);a&&r[M[y.type]]?.featureSet.features.push(a);break}case"GroundOverlay":{const a=c.get(y.id);a&&r.mapImages.push(a);break}}r.fullExtent=G([r])}});const u=G(t);return{folders:o,sublayers:t,extent:u}}function j(n,o,t,e){const s=P?.findCredential(n);n=I(n,{token:s?.token});const i=w.kmlServiceUrl;return k(i,{query:{url:n,model:"simple",folders:"",refresh:t!==0||void 0,outSR:JSON.stringify(o)},responseType:"json",signal:e})}function N(n,o,t=null,e=[]){const s=[],i={},f=o.sublayers,c=new Set(o.folders.map(l=>l.id));return f.forEach(l=>{const u=new n;if(t?u.read(l,t):u.read(l),e.length&&c.has(u.id)&&(u.visible=e.includes(u.id)),i[l.id]=u,l.parentFolderId!=null&&l.parentFolderId!==-1){const r=i[l.parentFolderId];r.sublayers||(r.sublayers=[]),r.sublayers?.unshift(u)}else s.unshift(u)}),s}function h(n,o,t){t.forEach(e=>{n.set(e.attributes[o],e)})}function U(n,o){let t;return o.some(e=>e.id===n&&(t=e,!0)),t}function J(n,o,t){const e=U(n,t);return e&&(e.parentFolderId=o,e.networkLink=e),e}async function L(n){const o=F.fromJSON(n.featureSet).features,t=n.layerDefinition,e=O(t.drawingInfo.renderer),s=E.fromJSON(n.popupInfo),i=[];for(const f of o){const c=await e.getSymbolAsync(f);f.symbol=c,f.popupTemplate=s,f.visible=!0,i.push(f)}return i}function G(n){const o=b(S),t=b(S);for(const e of n){if(e.polygons?.featureSet?.features)for(const s of e.polygons.featureSet.features)p(o,s.geometry),d(t,o);if(e.polylines?.featureSet?.features)for(const s of e.polylines.featureSet.features)p(o,s.geometry),d(t,o);if(e.points?.featureSet?.features)for(const s of e.points.featureSet.features)p(o,s.geometry),d(t,o);if(e.mapImages)for(const s of e.mapImages)p(o,s.extent),d(t,o)}return x(t,S)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:v.WGS84}}export{N as S,L as b,T as d,j as g,G as j};
