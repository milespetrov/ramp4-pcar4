import{N as f,K as d}from"./projection-BCWa6dVm.js";import{a3 as p,E as A}from"./main-CZM6prq-.js";async function y(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return p(e);const n=A.WGS84;return await f(t,n),d(e,n)}function u(e,t){if(!o(e,t)){const n=e.typeKeywords;n?n.push(t):e.typeKeywords=[t]}}function o(e,t){return!!e.typeKeywords?.includes(t)}function I(e){return o(e,E.HOSTED_SERVICE)}function l(e,t){const n=e.typeKeywords;if(n){const r=n.indexOf(t);r>-1&&n.splice(r,1)}}function L(e,t,n){n?u(e,t):l(e,t)}async function S(e){const t=e.clone().normalize();let n;if(t.length>1)for(const r of t)n?r.width>n.width&&(n=r):n=r;else n=t[0];return y(n)}const E={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer"};function m(e){const{portal:t,isOrgItem:n,itemControl:r}=e,s=t.user?.privileges;let i=!s||s.includes("features:user:edit"),a=!!n&&!!s?.includes("features:user:fullEdit");const c=r==="update"||r==="admin";return c?a=i=!0:a&&(i=!0),{features:{edit:i,fullEdit:a},content:{updateItem:c}}}export{m as E,l as a,I as c,E as f,u as i,S as l,o as s,L as u};
