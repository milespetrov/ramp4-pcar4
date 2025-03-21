import{c8 as _,s as I,ak as Q,c9 as Z,al as v,ca as A,E as P,n as G,bh as M,U as N,aW as R}from"./main-sNoC4iWN.js";import{o as z,r as W,e as B,n as J,t as L}from"./featureConversionUtils-DxK-SbzR.js";import{m as U}from"./FeatureStore-CcMwEL6N.js";import{x as F,j as b}from"./queryUtils-BRYdsH_9.js";import{V}from"./QueryEngine-D3Y5pDd_.js";import{I as $,N as H,E as Y}from"./geojson-B5fESssG.js";import{l as K,a as X,u as ee}from"./clientSideDefaults-Bd5ItueO.js";import{j as te,p as T,d as w,f as E,y as k}from"./sourceUtils-DfhzxwQV.js";import{Z as O}from"./FieldsIndex-B1625su6.js";import{i as se}from"./fieldType-DM8TqG6N.js";const ie={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class ne{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const i=[],[s]=await Promise.all([e.url?this._fetch(t?.signal):null,this._checkProjection(e.spatialReference)]),n=$(s,{geometryType:e.geometryType}),l=e.fields||n.fields||[],d=e.hasZ!=null?e.hasZ:n.hasZ,p=n.geometryType;let y=e.objectIdField||n.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let r=e.timeInfo;l===n.fields&&n.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});const o=new O(l);let u=o.get(y);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1,y=u.name):(u={alias:y,name:y,type:n.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},l.unshift(u));const h={};for(const a of l){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!se.jsonValues.includes(a.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==u.name){const g=Q(a);g!==void 0&&(h[a.name]=g)}a.length==null&&(a.length=Z(a))}if(r){if(r.startTimeField){const a=o.get(r.startTimeField);a?(r.startTimeField=a.name,a.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const a=o.get(r.endTimeField);a?(r.endTimeField=a.name,a.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const a=o.get(r.trackIdField);a?r.trackIdField=a.name:(r.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}const c=p?ee(p):void 0,j=o.dateFields.length?{timeZoneIANA:v}:null,f={warnings:i,featureErrors:[],layerDefinition:{...ie,drawingInfo:c??void 0,templates:K(h),extent:void 0,geometryType:p,objectIdField:y,fields:l,hasZ:!!d,timeInfo:r,dateFieldsTimeReference:j}};this._queryEngine=new V({fieldsIndex:O.fromLayerJSON({fields:l,timeInfo:r,dateFieldsTimeReference:j}),geometryType:p,hasM:!1,hasZ:d,objectIdField:y,spatialReference:m,timeInfo:r,featureStore:new U({geometryType:p,hasM:!1,hasZ:d})});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(u);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=X(h,y);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const C=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(C);const{fullExtent:D,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=D,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([te(t,i),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=A(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,s);const n=this._normalizeFeatures(s);n&&this._queryEngine.featureStore.addMany(n)},s=>{this._queryEngine.featureStore.clear(),P(s)||G.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:s}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:i}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:i,objectIdField:s}=this._queryEngine,n=H(e,{geometryType:t,hasZ:i,objectIdField:s});if(!M(this._queryEngine.spatialReference,_))for(const l of n)l.geometry!=null&&(l.geometry=z(b(W(l.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return n}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this._loadOptions,s=(await N(t??"",{responseType:"json",query:{...i},signal:e})).data;return Y(s),s}_normalizeFeatures(e,t){const{objectIdField:i,fieldsIndex:s}=this._queryEngine,n=[];for(const l of e){const d=this._createDefaultAttributes(),p=T(s,d,l.attributes,!0);p?t?.push(p):(this._assignObjectId(d,l.attributes,!0),l.attributes=d,l.objectId=d[i],n.push(l))}return n}async _applyEdits(e){const{adds:t,updates:i,deletes:s}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(n,t),i?.length&&this._applyUpdateEdits(n,i),s?.length){for(const p of s)n.deleteResults.push(w(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:l,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:l,timeExtent:d,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:s,hasM:n,hasZ:l,objectIdField:d,spatialReference:p,featureStore:y,fieldsIndex:m}=this._queryEngine,r=[];for(const o of t){if(o.geometry&&s!==R(o.geometry)){i.push(E("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),h=T(m,u,o.attributes);if(h)i.push(h);else{if(this._assignObjectId(u,o.attributes),o.attributes=u,o.uid!=null){const c=o.attributes[d];e.uidToObjectId[o.uid]=c}if(o.geometry!=null){const c=o.geometry.spatialReference??p;o.geometry=b(k(o.geometry,c),c,p)}r.push(o),i.push(w(o.attributes[d]))}}y.addMany(B([],r,s,l,n,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:s,hasZ:n,objectIdField:l,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine;for(const m of t){const{attributes:r,geometry:o}=m,u=r?.[l];if(u==null){e.push(E(`Identifier field ${l} missing`));continue}if(!p.has(u)){e.push(E(`Feature with object id ${u} missing`));continue}const h=J(p.getFeature(u),i,n,s);if(o!=null){if(i!==R(o)){e.push(E("Incorrect geometry type."));continue}const c=o.spatialReference??d;h.geometry=b(k(o,c),c,d)}if(r){const c=T(y,h.attributes,r);if(c){e.push(c);continue}}p.add(L(h,i,n,s,l)),e.push(w(u))}}_createObjectIdGenerator(e,t){const i=e.fieldsIndex.get(e.objectIdField);if(i.type==="esriFieldTypeString")return()=>i.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const n of t)n.objectId&&(s=Math.max(s,n.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,i=!1){const s=this._queryEngine.objectIdField;e[s]=i&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await F(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{ne as default};
