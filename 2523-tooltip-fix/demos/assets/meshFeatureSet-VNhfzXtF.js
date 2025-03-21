import{D as h,b3 as y,aw as S,aq as l,n as g}from"./main-CdsSyLmf.js";import{$ as E}from"./Mesh-DNVG5d7R.js";import{i as D,a as N}from"./External-2C3MsC_9.js";import{s as M}from"./infoFor3D-_5f2f6Um.js";import{d as w}from"./FeatureSet-B93P2sRX.js";import{n as F,i as T}from"./meshFeatureAttributes-BxtFwAMe.js";import"./preload-helper-ExcqyqRp.js";import"./MeshTransform-CI9FtNQZ.js";import"./mat4-pIm5M4dy.js";import"./common-DQOJ18NT.js";import"./mat4f64-CSKppSlJ.js";import"./quat-Cz5mfY1H.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-D3aOfXef.js";import"./vec42-CKs01hkn.js";import"./imageUtils-DWkdjPqh.js";import"./MeshVertexAttributes-o-zrbBxQ.js";import"./MeshLocalVertexSpace-Ce7tCgjN.js";import"./meshVertexSpaceUtils-BIOvmSfk.js";import"./earcut-Lltz9D9k.js";import"./Indices-Cfcs8rZ8.js";import"./plane-DEEIESVL.js";import"./vec2f64-B7N_6o8F.js";import"./vec4f64-CMoMXWBi.js";import"./deduplicate-Dc0i0Eia.js";import"./projectPointToVector-BKwf7jyW.js";import"./projection-DW4hqkh8.js";import"./projectBuffer-Cw1atCwM.js";import"./vertexSpaceConversion-y6KmjfDG.js";import"./mat3-XZDRtl20.js";import"./spatialReferenceEllipsoidUtils-BdO7DQjl.js";import"./computeTranslationToOriginAndRotation-BUEec7EP.js";import"./vec3-CUZqap6d.js";import"./BufferView-DYtCdL1T.js";import"./vec2-DGVIkCvT.js";import"./vec4-CNOfeDvj.js";import"./Field-O0rZEvGH.js";import"./fieldType-AYW3_uOi.js";const I=()=>g.getLogger("esri.rest.support.meshFeatureSet");function yt(t,o,r){const e=r.features;r.features=[],delete r.geometryType;const s=w.fromJSON(r);if(s.geometryType="mesh",!r.assetMaps)return s;const n=O(o,r.assetMaps),a=t.sourceSpatialReference??h.WGS84,u=r.globalIdFieldName,{outFields:i}=t,f=i!=null&&i.length>0?b(i.includes("*")?null:new Set(i)):()=>({});for(const m of e){const p=L(m,u,a,o,n);s.features.push(new y({geometry:p,attributes:f(m)}))}return s}function b(t){return({attributes:o})=>{if(!o)return{};if(!t)return o;for(const r in o)t.has(r)||delete o[r];return o}}function L(t,o,r,e,s){const n=t.attributes[o],a=s.get(n);if(a==null||!t.geometry)return null;const u=F(t.attributes,r,e.transformFieldRoles),i=S.fromJSON(t.geometry);i.spatialReference=r;const f=T(t.attributes,e.transformFieldRoles),m=r.isGeographic?"local":"georeferenced",p=P(a);return p?E.createWithExternalSource(u,p,{extent:i,transform:f,vertexSpace:m,unitConversionDisabled:!0}):E.createIncomplete(u,{extent:i,transform:f,vertexSpace:m})}var c;function O(t,o){const r=new Map;for(const e of o){const s=e.parentGlobalId;if(s==null)continue;const n=e.assetName,a=e.assetType,u=e.assetHash,i=e.assetURL,f=e.conversionStatus,m=e.seqNo,p=M(a,t.supportedFormats);if(!p){I().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const d=l(r,s,()=>({files:new Map}));l(d.files,n,()=>({name:n,type:a,mimeType:p,status:$(f),parts:[]})).parts[m]={hash:u,url:i}}return r}function P(t){const o=Array.from(t.files.values()),r=new Array;for(const e of o){if(e.status!==c.COMPLETED)return null;const s=new Array;for(const n of e.parts){if(!n)return null;s.push(new D(n.url,n.hash))}r.push(new N(e.name,e.mimeType,s))}return r}function $(t){switch(t){case"COMPLETED":case"SUBMITTED":return c.COMPLETED;case"INPROGRESS":return c.PENDING;default:return c.FAILED}}(function(t){t[t.FAILED=0]="FAILED",t[t.PENDING=1]="PENDING",t[t.COMPLETED=2]="COMPLETED"})(c||(c={}));export{O as assetMapFromAssetMapsJSON,L as extractMesh,yt as meshFeatureSetFromJSON};
