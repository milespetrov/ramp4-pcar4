const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./uploadAssets--0St_m4y.js","./main-CdsSyLmf.js","./preload-helper-ExcqyqRp.js","./main-K0GaKQ3z.css","./uuid-Cl5lrJ4c.js","./External-2C3MsC_9.js","./infoFor3D-_5f2f6Um.js","./meshSpatialReferenceScaleUtils-2zUN1cBF.js","./MeshTransform-CI9FtNQZ.js","./mat4-pIm5M4dy.js","./common-DQOJ18NT.js","./mat4f64-CSKppSlJ.js","./quat-Cz5mfY1H.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec32-D3aOfXef.js","./vec42-CKs01hkn.js","./arcgisLayerUrl-DtiMs6dI.js","./meshFeatureAttributes-BxtFwAMe.js","./convertMeshVertexSpace-BbMG8EbI.js","./MeshVertexAttributes-o-zrbBxQ.js","./vertexSpaceConversion-y6KmjfDG.js","./mat3-XZDRtl20.js","./spatialReferenceEllipsoidUtils-BdO7DQjl.js","./computeTranslationToOriginAndRotation-BUEec7EP.js","./projectBuffer-Cw1atCwM.js","./projectPointToVector-BKwf7jyW.js","./projection-DW4hqkh8.js","./meshVertexSpaceUtils-BIOvmSfk.js","./MeshLocalVertexSpace-Ce7tCgjN.js","./vec3-CUZqap6d.js","./BufferView-DYtCdL1T.js","./vec2-DGVIkCvT.js","./vec4-CNOfeDvj.js"])))=>i.map(i=>d[i]);
import{_ as M}from"./preload-helper-ExcqyqRp.js";import{bj as U,eJ as N,eY as $,n as x,s as S,b3 as P,b5 as Q,az as j,q as E,u as O,C as V,f as G,dD as H,aG as B,b1 as J,U as f,bT as v,aw as z,a1 as T,K as D,eZ as Y,e_ as Z,a_ as W,J as X,D as K}from"./main-CdsSyLmf.js";import{r as tt}from"./uuid-Cl5lrJ4c.js";import{a as et}from"./MeshLocalVertexSpace-Ce7tCgjN.js";import{a as rt}from"./meshVertexSpaceUtils-BIOvmSfk.js";import{A as at}from"./External-2C3MsC_9.js";import{L as st,J as it,Q as nt}from"./projection-DW4hqkh8.js";import{N as ot}from"./MeshTransform-CI9FtNQZ.js";import{isFeatureIdentifierArrayWithGlobalId as ut,isFeatureIdentifierArrayWithObjectId as lt}from"./editingSupport-Br5i3Zcy.js";import{u as dt}from"./clientSideDefaults-DHr-cLez.js";import{j as ct}from"./QueryTask-Bu77x2sm.js";import{g as pt}from"./arcgisLayerUrl-DtiMs6dI.js";import{J as A}from"./featureLayerUtils-BAk6_R1b.js";import{M as ht}from"./infoFor3D-_5f2f6Um.js";import{s as yt}from"./executeQueryJSON-DwkJs6GE.js";import{i as mt}from"./editsZScale-DnPA_uMy.js";import{b as ft}from"./Query-Drb-_Vf3.js";import{p as gt}from"./TimeExtent-CabtJ4-h.js";import{i as wt,a as bt,o as qt,t as It}from"./EditBusLayer-Bef41cu8.js";import"./vec32-D3aOfXef.js";import"./common-DQOJ18NT.js";import"./projectBuffer-Cw1atCwM.js";import"./mat4-pIm5M4dy.js";import"./mat4f64-CSKppSlJ.js";import"./quat-Cz5mfY1H.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec42-CKs01hkn.js";import"./normalizeUtils-Dfj25wzD.js";import"./normalizeUtilsCommon-BDqFe87-.js";import"./utils-Ctlcovrv.js";import"./utils-Cv4bkaTm.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./executeForIds-Bbz4-huq.js";import"./query-DHEJ6qKu.js";import"./pbfQueryUtils-BHvTycro.js";import"./pbf-KYU4Xcfu.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CmFTHJip.js";import"./executeQueryPBF-Cps9ogtJ.js";import"./featureConversionUtils-BlgBaaTg.js";import"./FeatureSet-B93P2sRX.js";import"./Field-O0rZEvGH.js";import"./fieldType-AYW3_uOi.js";import"./jsonUtils-CackR75F.js";import"./UniqueValueRenderer-nIzU1eL7.js";import"./RendererLegendOptions-mzVsWTh8.js";import"./diffUtils-D-X3xnla.js";import"./colorRamps-B_4-1lH0.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-DaNDAmHB.js";import"./compilerUtils-5yq29FtW.js";import"./lengthUtils-C4LFWJEB.js";import"./styleUtils-KGfryok8.js";import"./LRUCache-B7IYX8gP.js";import"./Version-BFm4aM6R.js";import"./FieldsIndex-ClJtp0E9.js";import"./UnknownTimeZone-CoLzobAS.js";import"./OverrideHelper-CHlgOicT.js";import"./colorUtils-ZGQqe5BW.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-CaK8jumX.js";import"./heatmapUtils-BL0jS6No.js";import"./RelationshipQuery-CCfPPBfP.js";async function C(e,t,r){const{geometry:s}=t,a={...t.attributes};if(r!=null&&s?.type==="mesh"){const{transformFieldRoles:i}=r,{origin:n,spatialReference:o,vertexSpace:u}=s,d=s.transform??new ot,l=u.type==="local",p=e.spatialReference,q=p.isGeographic,I=U(p,o),h=st(o,p)&&it(o,p);if(!(l&&q&&h||!l&&!q&&I))return null;const c=nt(n,o,p);if(c==null)return null;if(a[i.originX]=c.x,a[i.originY]=c.y,a[i.originZ]=c.z??0,d!=null){const{translation:R,scale:y,rotation:g}=d,m=l?1:N(o)/N(p);a[i.translationX]=R[0]*m,a[i.translationY]=R[2]*m,a[i.translationZ]=-R[1]*m,a[i.scaleX]=y[0],a[i.scaleY]=y[2],a[i.scaleZ]=y[1],a[i.rotationX]=g[0],a[i.rotationY]=g[2],a[i.rotationZ]=-g[1],a[i.rotationDeg]=g[3]}return{attributes:a}}return s==null?{attributes:a}:s.type==="mesh"||s.type==="extent"?null:{geometry:s.toJSON(),attributes:a}}async function Rt(e,t){const r=await Promise.all((t.addAttachments??[]).map(i=>L(e,i))),s=await Promise.all((t.updateAttachments??[]).map(i=>L(e,i))),a=t.deleteAttachments??[];return r.length||s.length||a.length?{adds:r,updates:s,deletes:[...a]}:null}async function L(e,t){const{feature:r,attachment:s}=t,{globalId:a,name:i,contentType:n,data:o,uploadId:u}=s,d={globalId:a};if(r&&("attributes"in r?d.parentGlobalId=r.attributes?.[e.globalIdField]:r.globalId&&(d.parentGlobalId=r.globalId)),u)d.uploadId=u;else if(o){const l=await $(o);l&&(d.contentType=l.mediaType,d.data=l.data),o instanceof File&&(d.name=o.name)}return i&&(d.name=i),n&&(d.contentType=n),d}function St(e,t,r){if(!t||t.length===0)return[];if(r&&ut(t))return t.map(a=>a.globalId);if(lt(t))return t.map(a=>a.objectId);const s=r?e.globalIdField:e.objectIdField;return s?t.map(a=>a.getAttribute(s)):[]}function _t(e){const t=e?.assetMaps;if(t){for(const a of t.addResults)a.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`);for(const a of t.updateResults)a.success||x.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${a.globalId}.`)}const r=e?.attachments,s={addFeatureResults:e?.addResults?.map(b)??[],updateFeatureResults:e?.updateResults?.map(b)??[],deleteFeatureResults:e?.deleteResults?.map(b)??[],addAttachmentResults:r?.addResults?r.addResults.map(b):[],updateAttachmentResults:r?.updateResults?r.updateResults.map(b):[],deleteAttachmentResults:r?.deleteResults?r.deleteResults.map(b):[]};return e?.editMoment&&(s.editMoment=e.editMoment),s}function b(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new S("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function F(e,t){return new P({attributes:e.attributes,geometry:Q({...e.geometry,spatialReference:t})})}function Et(e,t){return{adds:e?.adds?.map(r=>F(r,t))||[],updates:e?.updates?.map(r=>({original:F(r[0],t),current:F(r[1],t)}))||[],deletes:e?.deletes?.map(r=>F(r,t))||[],spatialReference:t}}function Ot(e){const t=e.details.raw,r=+t.code,s=+t.extendedCode;return r===500&&(s===-2147217144||s===-2147467261)}const At=new j({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),Ft=new j({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let _=class extends G{constructor(e){super(e),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=H(async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(t==null)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const r=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:r,updates:r?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}}),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,r=this._fetchService(t,{...e}).then(()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e)).then(()=>this._ensureLatestMetadata(e));return this.addResolvingPromise(r),Promise.resolve(this)}initialize(){this.addHandles([B(()=>{const e=this.layer;return e&&"lastEditsEventDate"in e?e.lastEditsEventDate:null},e=>this._handleLastEditsEventChange(e))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:e,parsedUrl:t,gdbVersion:r,spatialReference:s,fieldsIndex:a}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,n="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=J("featurelayer-pbf")&&e?.query.supportsFormatPBF&&i==null,u=e?.operations?.supportsQueryAttachments??!1;return new ct({url:t.path,pbfSupported:o,fieldsIndex:a,infoFor3D:i,dynamicDataSource:n,gdbVersion:r,sourceSpatialReference:s,queryAttachmentsSupported:u})}async addAttachment(e,t){await this.load();const{layer:r}=this;await A(r,"editing");const s=e.attributes[r.objectIdField],a=r.parsedUrl.path+"/"+s+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,i.query);try{const o=await f(a,{body:n});return b(o.data.addAttachmentResult)}catch(o){throw this._createAttachmentErrorResult(s,o)}}async updateAttachment(e,t,r){await this.load();const{layer:s}=this;await A(s,"editing");const a=e.attributes[s.objectIdField],i=s.parsedUrl.path+"/"+a+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),o=this._getFormDataForAttachment(r,n.query);try{const u=await f(i,{body:o});return b(u.data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async applyEdits(e,t){await this.load();const{layer:r}=this;await A(r,"editing");const s="infoFor3D"in r?r.infoFor3D:null,a=s!=null,i=a||(t?.globalIdUsed??!1),n=a?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,o=e.addFeatures?.map(w=>C(this.layer,w,s))??[],u=(await Promise.all(o)).filter(v),d=e.updateFeatures?.map(w=>C(this.layer,w,s))??[],l=(await Promise.all(d)).filter(v),p=St(this.layer,e.deleteFeatures,i);mt(u,l,r.spatialReference);const q=await Rt(this.layer,e),I=r.capabilities.editing.supportsAsyncApplyEdits&&a,h=t?.gdbVersion||r.gdbVersion,c={gdbVersion:h,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,async:I};await wt(this.layer.url,h,!0);const R=bt(this.layer.url,h||null);if(await qt(r.url,h,r.historicMoment))throw new S("feature-layer-source:historic-version","Editing a historic version is not allowed");t?.returnServiceEditsOption?(c.edits=JSON.stringify([{id:r.layerId,adds:u.length?u:null,updates:l.length?l:null,deletes:p.length?p:null,attachments:q,assetMaps:n}]),c.returnServiceEditsOption=At.toJSON(t?.returnServiceEditsOption),c.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(c.adds=u.length?JSON.stringify(u):null,c.updates=l.length?JSON.stringify(l):null,c.deletes=p.length?i?JSON.stringify(p):p.join(","):null,c.attachments=q&&JSON.stringify(q),c.assetMaps=n!=null?JSON.stringify(n):void 0);const y=this._getLayerRequestOptions({method:"post",query:c});R&&(y.authMode="immediate",y.query.returnEditMoment=!0,y.query.sessionId=It);const g=t?.returnServiceEditsOption?r.url:r.parsedUrl.path;let m;try{m=I?await this._asyncApplyEdits(g+"/applyEdits",y):await f(g+"/applyEdits",y)}catch(w){if(!Ot(w))throw w;y.authMode="immediate",m=I?await this._asyncApplyEdits(g+"/applyEdits",y):await f(g+"/applyEdits",y)}return this._createEditsResult(m)}async deleteAttachments(e,t){await this.load();const{layer:r}=this;await A(r,"editing");const s=e.attributes[r.objectIdField],a=r.parsedUrl.path+"/"+s+"/deleteAttachments";try{return(await f(a,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(b)}catch(i){throw this._createAttachmentErrorResult(s,i)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const r=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:s,url:a}=this.layer,{data:i}=await f(`${a}/${s}`,r),{id:n,extent:o,fullExtent:u,timeExtent:d}=i,l=o||u;return{id:n,fullExtent:l&&z.fromJSON(l),timeExtent:d&&gt.fromJSON({start:d[0],end:d[1]})}})}async queryAttachments(e,t={}){await this.load();const r=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(e,t){await this.load();const r=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return e.outStatistics?.length&&r.features.length&&r.features.forEach(s=>{const a=s.attributes;e.outStatistics?.forEach(({outStatisticFieldName:i})=>{if(i){const n=i.toLowerCase();n&&n in a&&i!==n&&(a[i]=a[n],delete a[n])}})}),r}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryBins(e,t){return await this.load(),this.queryTask.executeBinsQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!pt(this.layer.url))return"unavailable";const e=T(this.layer.url,"status"),t=await f(e,{query:{f:"json"}});return Ft.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:r}=await M(()=>import("./uploadAssets--0St_m4y.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url);return r(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}_handleLastEditsEventChange(e){const t=this.layer;if(e==null||!("capabilities"in t)||!("effectiveCapabilities"in t)||!(!t.capabilities?.operations?.supportsEditing&&t.effectiveCapabilities?.operations?.supportsEditing))return;const r=t.url;r!=null&&("layerId"in t&&T(r,t.layerId.toString()),this._getOrCreateEditInterceptor(r).before=s=>{const a=s.requestOptions.method??"auto";if(a==="auto"||a==="head"){const i=s.requestOptions.query??{};i._ts=e.getTime(),s.requestOptions.query=i}})}_getOrCreateEditInterceptor(e){return this._editInterceptor==null&&(this._editInterceptor={urls:e},D.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){this._editInterceptor!=null&&(Y(D.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(e,t){const r=(await f(e,t)).data.statusUrl;for(;;){const s=(await f(r,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return f(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new S("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new S("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await Z(xt)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const s={};J("featurelayer-advanced-symbols")&&(s.returnAdvancedSymbols=!0),t?.cacheBust&&(s._ts=Date.now());const{data:a}=await f(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:s,signal:t?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const r=e.type;if(!this.supportedSourceTypes.has(r))throw new S("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(e,t){if(e.type!=="Table"&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const r=dt(e.geometryType).renderer;W("drawingInfo.renderer",r,e)}if(e.geometryType==="esriGeometryMultiPatch"&&e.infoFor3D&&(e.geometryType="mesh"),e.extent==null)try{const{data:r}=await f(this.layer.url,this._getLayerRequestOptions({signal:t}));r.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(r){X(r)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length||await this._areAllAssetsAlreadyMapped(t))return null;const r=e.addFeatures.filter(i=>i.geometry);if(t.length!==r.length+e.updateFeatures.length)throw new S("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const s=new Array,a=new Map;for(const i of t){const{geometry:n}=i,{vertexSpace:o}=n;if(rt(o))s.push(n);else{const u=n.origin,{convertMeshVertexSpace:d}=await M(async()=>{const{convertMeshVertexSpace:p}=await import("./convertMeshVertexSpace-BbMG8EbI.js");return{convertMeshVertexSpace:p}},__vite__mapDeps([19,1,2,3,20,21,22,10,13,9,11,15,23,24,25,26,27,28,29,30,31,32,16,33]),import.meta.url),l=await d(n,new et({origin:[u.x,u.y,u.z??0]}));a.set(l,n),i.geometry=l,s.push(l)}}await this.uploadAssets(s);for(const[i,n]of a)n.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(t),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,r=this.layer.globalIdField,s=this.layer.parsedUrl;for(const a of e){const i=a.geometry,{metadata:n}=i,o=n.getExternalSourcesOnService(s),u=a.getAttribute(r);if(o.length===0){x.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:d}=o.find(at)??o[0];for(const l of d)l.parts.length===1?t.push({globalId:tt(),parentGlobalId:u,assetName:l.assetName,assetHash:l.parts[0].partHash,flags:[]}):x.getLogger(this).error(`Skipping asset ${l.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:r}=this.layer,s=[];let a=null;if(Array.isArray(t))for(const n of t)s.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===r&&(a={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else a=t;const i=_t(a);if(s.length>0){i.editedFeatureResults=[];for(const n of s){const{editedFeatures:o}=n,u=o?.spatialReference?new K(o.spatialReference):null;i.editedFeatureResults.push({layerId:n.id,editedFeatures:Et(o,u)})}}return i}_createAttachmentErrorResult(e,t){const r=t.details.messages?.[0]||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new S("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(const s in t){const a=t[s];a!=null&&(r.set?r.set(s,a):r.append(s,a))}return r}_getLayerRequestOptions(e={}){const{layer:t,layer:{parsedUrl:r,gdbVersion:s}}=this;return{...e,query:{gdbVersion:s,layer:"dynamicDataSource"in t&&t.dynamicDataSource?JSON.stringify({source:t.dynamicDataSource}):void 0,...r.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _areAllAssetsAlreadyMapped(e){const{layer:t}=this,{globalIdField:r,parsedUrl:s}=t,a="infoFor3D"in t?t.infoFor3D:null;if(a==null||r==null)return!1;const i=ht(a);if(i==null)return!1;const n=T(s.path,`../${i.id}`),o=new Array;for(const h of e){if(!(h.geometry.metadata.getExternalSourcesOnService(s).length>0))return!1;o.push(h)}const u=o.map(h=>h.getAttribute(r)).filter(v);if(u.length===0)return!1;const{assetMapFieldRoles:{parentGlobalId:d,assetHash:l}}=a,p=new ft({where:`${d} IN (${u.map(h=>`'${h}'`)})`,outFields:[l,d],returnGeometry:!1}),q=await yt(n,p),{features:I}=q;return I.length!==0&&!o.some(h=>{const c=h.getAttribute(r);if(!c)return!0;const{metadata:R}=h.geometry,y=I.filter(m=>m.getAttribute(d)===c);if(y.length===0)return!0;const g=y.map(m=>m.getAttribute(l));return R.getExternalSourcesOnService(s).flatMap(({source:m})=>m.flatMap(w=>w.parts.map(k=>k.partHash))).some(m=>g.every(w=>m!==w))})}};E([O()],_.prototype,"type",void 0),E([O({constructOnly:!0})],_.prototype,"layer",void 0),E([O({constructOnly:!0})],_.prototype,"supportedSourceTypes",void 0),E([O({readOnly:!0})],_.prototype,"queryTask",null),_=E([V("esri.layers.graphics.sources.FeatureLayerSource")],_);const xt=1e3,Ve=_;export{Ve as default};
