import{N as u,K as l}from"./projection-mClxjUCu.js";import{a2 as E,D as f}from"./main-Re2Hv9G4.js";async function d(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return E(e);const n=f.WGS84;return await u(t,n),l(e,n)}function p(e,t){if(!a(e,t)){const n=e.typeKeywords;n?n.push(t):e.typeKeywords=[t]}}function a(e,t){return!!e.typeKeywords?.includes(t)}function L(e){return a(e,y.HOSTED_SERVICE)}function A(e,t){const n=e.typeKeywords;if(n){const r=n.indexOf(t);r>-1&&n.splice(r,1)}}function m(e,t,n){n?p(e,t):A(e,t)}async function R(e){const t=e.clone().normalize();let n;if(t.length>1)for(const r of t)n?r.width>n.width&&(n=r):n=r;else n=t[0];return d(n)}const y={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer"};function M(e){const{portal:t,isOrgItem:n,itemControl:r}=e,i=t.user?.privileges;let o=!i||i.includes("features:user:edit"),s=!!n&&!!i?.includes("features:user:fullEdit");const c=r==="update"||r==="admin";return c?s=o=!0:s&&(o=!0),{features:{edit:o,fullEdit:s},content:{updateItem:c}}}export{M as E,A as a,L as c,y as f,p as i,R as l,a as s,m as u};
