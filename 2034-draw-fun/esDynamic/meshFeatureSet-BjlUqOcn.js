import{E as y,at as N,aB as g,aW as p,n as D}from"./main-CZM6prq-.js";import{$ as E}from"./Mesh-DGOEowI8.js";import{i as M,a as F}from"./External-yF_ZuuDe.js";import{s as T}from"./infoFor3D-DIuYZyyK.js";import{d as I}from"./FeatureSet-LFtb7iIS.js";import{n as w,i as L}from"./meshFeatureAttributes-BgTjoLDD.js";const O=()=>D.getLogger("esri.rest.support.meshFeatureSet");function b(e,s,t){const r=t.features;t.features=[],delete t.geometryType;const n=I.fromJSON(t);if(n.geometryType="mesh",!t.assetMaps)return n;const a=d(s,t.assetMaps),u=e.sourceSpatialReference??y.WGS84,c=t.globalIdFieldName,{outFields:o}=e,l=o!=null&&o.length>0?P(o.includes("*")?null:new Set(o)):()=>({});for(const i of r){const f=h(i,c,u,s,a);n.features.push(new N({geometry:f,attributes:l(i)}))}return n}function P(e){return({attributes:s})=>{if(!s)return{};if(!e)return s;for(const t in s)e.has(t)||delete s[t];return s}}function h(e,s,t,r,n){const a=e.attributes[s],u=n.get(a);if(u==null||!e.geometry)return null;const c=w(e.attributes,t,r.transformFieldRoles),o=g.fromJSON(e.geometry);o.spatialReference=t;const l=L(e.attributes,r.transformFieldRoles),i=t.isGeographic?"local":"georeferenced",f=v(u);return f?E.createWithExternalSource(c,f,{extent:o,transform:l,vertexSpace:i,unitConversionDisabled:!0}):E.createIncomplete(c,{extent:o,transform:l,vertexSpace:i})}var m;function d(e,s){const t=new Map;for(const r of s){const n=r.parentGlobalId;if(n==null)continue;const a=r.assetName,u=r.assetType,c=r.assetHash,o=r.assetURL,l=r.conversionStatus,i=r.seqNo,f=T(u,e.supportedFormats);if(!f){O().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${u}, but it does not list it as a supported type`);continue}const S=p(t,n,()=>({files:new Map}));p(S.files,a,()=>({name:a,type:u,mimeType:f,status:x(l),parts:[]})).parts[i]={hash:c,url:o}}return t}function v(e){const s=Array.from(e.files.values()),t=new Array;for(const r of s){if(r.status!==m.COMPLETED)return null;const n=new Array;for(const a of r.parts){if(!a)return null;n.push(new M(a.url,a.hash))}t.push(new F(r.name,r.mimeType,n))}return t}function x(e){switch(e){case"COMPLETED":case"SUBMITTED":return m.COMPLETED;case"INPROGRESS":return m.PENDING;default:return m.FAILED}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(m||(m={}));export{d as assetMapFromAssetMapsJSON,h as extractMesh,b as meshFeatureSetFromJSON};
