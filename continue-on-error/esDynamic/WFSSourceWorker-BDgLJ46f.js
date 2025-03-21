import{s as g,D as p,al as S,ca as E,n as y,z as _,E as f,bh as P}from"./main-IAmJgjpH.js";import{o as q,r as I}from"./featureConversionUtils-D3wVdWG-.js";import{m as b}from"./FeatureStore-CfFJHePT.js";import{x as j,j as N}from"./queryUtils-C_brl-Ol.js";import{V as O}from"./QueryEngine-CITjUbbI.js";import{E as Q,N as M}from"./geojson-DLHn6JC7.js";import{p as k}from"./sourceUtils-ocK1pY5s.js";import{o as L,e as U,K as x}from"./wfsUtils-wWfX89IK.js";import{Z}from"./FieldsIndex-DUZz2n_2.js";const C="esri.layers.WFSLayer";class ${constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e={}){const{getFeatureUrl:r,getFeatureOutputFormat:o,fields:i,geometryType:u,featureType:s,maxRecordCount:n,maxTotalRecordCount:c,maxPageCount:R,objectIdField:d,customParameters:F}=t,{spatialReference:l,getFeatureSpatialReference:m}=L(r,s,t.spatialReference);try{await j(m,l)}catch{throw new g("unsupported-projection","Projection not supported",{inSpatialReference:m,outSpatialReference:l})}p(e),this._customParameters=F,this._featureType=s,this._fieldsIndex=Z.fromLayerJSON({fields:i,dateFieldsTimeReference:i.some(T=>T.type==="esriFieldTypeDate")?{timeZoneIANA:S}:null}),this._geometryType=u,this._getFeatureUrl=r,this._getFeatureOutputFormat=o,this._getFeatureSpatialReference=m,this._maxRecordCount=n,this._maxTotalRecordCount=c,this._maxPageCount=R,this._objectIdField=d,this._spatialReference=l;let h=await this._snapshotFeatures(e);if(h.errors.length>0&&(this._supportsPagination=!1,h=await this._snapshotFeatures(e),h.errors.length>0))throw h.errors[0];return this._queryEngine=new O({fieldsIndex:this._fieldsIndex,geometryType:u,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:l,timeInfo:null,featureStore:new b({geometryType:u,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(h.features),{warnings:w(h),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new g("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,this._snapshotTask?.abort(),this._snapshotTask=E(e=>this._snapshotFeatures({signal:e})),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(e.features);for(const r of w(e))y.getLogger(C).warn(new _("wfs-layer:refresh-warning",r.message,r.details));e.errors?.length&&y.getLogger(C).warn(new _("wfs-layer:refresh-error","Refresh completed with errors",{errors:e.errors}))},()=>{this._queryEngine.featureStore.clear()}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(t){const e=t?.signal,r=this._maxTotalRecordCount,o=this._maxPageCount,i=this._supportsPagination?await U(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0;let u=[];const s=[];if(i==null)try{u=await this._singleQuery(e)}catch(n){f(n)||s.push(n)}else{const n=Math.min(i,r),c=J(this,Math.max(1,Math.min(Math.ceil(n/this._maxRecordCount),o)),e);await Promise.allSettled(Array.from({length:10}).map(()=>v(c,u,s)))}return p(e),{features:u,totalRecordCount:i,maxTotalRecordCount:r,maxPageCount:o,errors:s}}async _singleQuery(t){const e=await x(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})}async _pageQuery(t,e){const r=t*this._maxRecordCount,o=await x(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:r,count:this._maxRecordCount,signal:e});return this._processGeoJSON(o,{startIndex:r,signal:e})}_processGeoJSON(t,e){Q(t,this._getFeatureSpatialReference.wkid);const{startIndex:r,signal:o}=e;p(o);const i=M(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!P(this._spatialReference,this._getFeatureSpatialReference))for(const s of i)s.geometry!=null&&(s.geometry=q(N(I(s.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let u=r??1;for(const s of i){const n={};k(this._fieldsIndex,n,s.attributes,!0),s.attributes=n,n[this._objectIdField]==null&&(s.objectId=n[this._objectIdField]=u++)}return i}}function*J(a,t,e){for(let r=0;r<t;r++)yield a._pageQuery(r,e)}async function v(a,t,e){let r=a.next();for(;!r.done;){try{const o=await r.value;t.push(...o)}catch(o){f(o)||e.push(o)}r=a.next()}}function w(a){const t=[];return a.totalRecordCount!=null&&(a.features.length<a.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${a.features.length} of ${a.totalRecordCount} in ${a.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:a.features.length,totalRecordCount:a.totalRecordCount}}),a.totalRecordCount>a.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${a.totalRecordCount} features exceeds the maximum allowed of ${a.maxTotalRecordCount}.`,details:{recordCount:a.features.length,totalRecordCount:a.totalRecordCount,maxTotalRecordCount:a.maxTotalRecordCount}})),t}export{$ as default};
