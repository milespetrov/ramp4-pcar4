import{B as y,b1 as N,au as g,ao as p,n as D}from"./main-C6lijZBn.js";import{$ as E}from"./Mesh-CFXeEAbx.js";import{i as M,a as F}from"./External-CFokXUdw.js";import{s as T}from"./infoFor3D-DIuYZyyK.js";import{d as I}from"./FeatureSet-CDcWvlDD.js";import{n as b,i as w}from"./meshFeatureAttributes-DMZtEUPF.js";const L=()=>D.getLogger("esri.rest.support.meshFeatureSet");function O(e,s,t){const r=t.features;t.features=[],delete t.geometryType;const n=I.fromJSON(t);if(n.geometryType="mesh",!t.assetMaps)return n;const o=d(s,t.assetMaps),u=e.sourceSpatialReference??y.WGS84,c=t.globalIdFieldName,{outFields:a}=e,l=a!=null&&a.length>0?P(a.includes("*")?null:new Set(a)):()=>({});for(const i of r){const f=h(i,c,u,s,o);n.features.push(new N({geometry:f,attributes:l(i)}))}return n}function P(e){return({attributes:s})=>{if(!s)return{};if(!e)return s;for(const t in s)e.has(t)||delete s[t];return s}}function h(e,s,t,r,n){const o=e.attributes[s],u=n.get(o);if(u==null||!e.geometry)return null;const c=b(e.attributes,t,r.transformFieldRoles),a=g.fromJSON(e.geometry);a.spatialReference=t;const l=w(e.attributes,r.transformFieldRoles),i=t.isGeographic?"local":"georeferenced",f=v(u);return f?E.createWithExternalSource(c,f,{extent:a,transform:l,vertexSpace:i,unitConversionDisabled:!0}):E.createIncomplete(c,{extent:a,transform:l,vertexSpace:i})}var m;function d(e,s){const t=new Map;for(const r of s){const n=r.parentGlobalId;if(n==null)continue;const o=r.assetName,u=r.assetType,c=r.assetHash,a=r.assetURL,l=r.conversionStatus,i=r.seqNo,f=T(u,e.supportedFormats);if(!f){L().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${u}, but it does not list it as a supported type`);continue}const S=p(t,n,()=>({files:new Map}));p(S.files,o,()=>({name:o,type:u,mimeType:f,status:x(l),parts:[]})).parts[i]={hash:c,url:a}}return t}function v(e){const s=Array.from(e.files.values()),t=new Array;for(const r of s){if(r.status!==m.COMPLETED)return null;const n=new Array;for(const o of r.parts){if(!o)return null;n.push(new M(o.url,o.hash))}t.push(new F(r.name,r.mimeType,n))}return t}function x(e){switch(e){case"COMPLETED":case"SUBMITTED":return m.COMPLETED;case"INPROGRESS":return m.PENDING;default:return m.FAILED}}(function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"})(m||(m={}));export{d as assetMapFromAssetMapsJSON,h as extractMesh,O as meshFeatureSetFromJSON};
