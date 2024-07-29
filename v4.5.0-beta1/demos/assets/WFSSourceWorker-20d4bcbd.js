import { cq as f, ar as E$1, cC as c, r as r$1, cu as ct, cR as ut, co as r, b as e$1, c as s, cQ as j, bq as j$1, p as s$1 } from './main-9d6c9b53.js';
import { g as g$1 } from './FeatureStore-7978f644.js';
import { g, f as f$1 } from './projectionSupport-accf25fc.js';
import { e as ee } from './QueryEngine-dc6a17d0.js';
import { T, I } from './geojson-064c94de.js';
import { m } from './sourceUtils-3d23792d.js';
import { K } from './wfsUtils-09958a0f.js';
import './preload-helper-a4975f27.js';
import './BoundsStore-9bd2f323.js';
import './PooledRBush-224385b7.js';
import './centroid-857a2cec.js';
import './utils-0b43d38a.js';
import './json-ce6e5728.js';
import './QueryEngineResult-6c3917f7.js';
import './quantizationUtils-08a05d43.js';
import './WhereClause-b52ce065.js';
import './executionError-ed2c63c0.js';
import './utils-39daeb02.js';
import './QueryEngineCapabilities-014f3e07.js';
import './timeSupport-d05d56e3.js';
import './xmlUtils-78579c54.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,r=await K(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await T(r),f(e);const a=I(r,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const i of a)r$1(i.geometry)&&(i.geometry=ct(g(ut(i.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let o=1;for(const s of a){const e={};m(this._fieldsIndex,e,s.attributes,!0),s.attributes=e,null==s.attributes[t]&&(s.objectId=s.attributes[t]=o++);}return a};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e,t){const{getFeatureUrl:r$1,getFeatureOutputFormat:s,spatialReference:o,fields:n,geometryType:u,featureType:p,objectIdField:h,customParameters:c}=e;this._featureType=p,this._customParameters=c,this._getFeatureUrl=r$1,this._getFeatureOutputFormat=s,this._fieldsIndex=new r(n),await this._checkProjection(o),f(t),this._queryEngine=new ee({fields:n,geometryType:u,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:o,timeInfo:null,featureStore:new g$1({geometryType:u,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(e$1(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(s$2){return this._customParameters=s$2,this._snapshotTask?.abort(),this._snapshotTask=j(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(e=>{this._queryEngine.featureStore.clear(),j$1(e)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}));})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await f$1(c,e);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:e})}}}

export { E as default };
