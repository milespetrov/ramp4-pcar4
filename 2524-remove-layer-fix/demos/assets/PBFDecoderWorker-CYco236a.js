import{n as c}from"./compilerUtils-DbmoCggA.js";import{D as d,fK as p}from"./main-CFpM9i38.js";import{o as f}from"./projection-B6HHT9iG.js";import{y as m}from"./Field-CoyqNdTx.js";import{p as y,r as _}from"./featureConversionUtils-BqCAc55I.js";import{t as g}from"./pbfQueryUtils-BV9Mf81h.js";import"./preload-helper-ExcqyqRp.js";import"./projectBuffer-ChAiX47d.js";import"./fieldType-BNObABBN.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./pbf-V-UXiyPI.js";let b=class{constructor(t,e,s){this.uid=t,this.geometry=e,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}};class P{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function C(i,t,e,s){if(t?.size&&e!=null&&i)for(const r in i){if(!t.has(r))continue;const o=i[r];typeof o=="string"&&o.length>e&&(s(r),i[r]="")}}function G(i,t){return t}function l(i,t,e,s){switch(e){case 0:return h(i,t+s,0);case 1:return i.originPosition==="lowerLeft"?h(i,t+s,1):M(i,t+s,1)}}function u(i,t,e,s){return e===2?h(i,t,2):l(i,t,e,s)}function A(i,t,e,s){return e===2?h(i,t,3):l(i,t,e,s)}function v(i,t,e,s){return e===3?h(i,t,3):u(i,t,e,s)}function h({translate:i,scale:t},e,s){return i[s]+e*t[s]}function M({translate:i,scale:t},e,s){return i[s]-e*t[s]}class T{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new P}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=f(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(e!=null)for(const s of t.features)e(s.geometry)}createSpatialReference(){return new d}addField(t,e){t.fields.push(m.fromJSON(e));const s=t.fields.map(r=>r.name);this._attributesConstructor=function(){for(const r of s)this[r]=null}}addFeature(t,e){const s=this._options.maxStringAttributeLength,r=this._options.maxStringAttributeFields;C(e.attributes,r,s,o=>{const n=e.attributes[t.objectIdFieldName];n!=null&&this._missingAttributes.push({objectId:n,attribute:o})}),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:s,queryGeometryType:r}=e,o=y(s.clone(),s,!1,!1,this._transform),n=_(o,r,!1,!1);let a=null;switch(r){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}n.type=a,t.queryGeometryType=r,t.queryGeometry=n}prepareFeatures(t){switch(this._transform=t.transform??null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,s,r)=>this.addCoordinatePoint(e,s,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,s,r)=>this._addCoordinatePolygon(e,s,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,s,r)=>this._addCoordinatePolyline(e,s,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,s,r)=>this._addCoordinateMultipoint(e,s,r),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:c(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new b(p(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((e,s)=>e+s,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,s){const r=this._transform?this._applyTransform(this._transform,e,s,0):e;if(r!=null)switch(s){case 0:t.x=r;break;case 1:t.y=r;break;case 2:t.hasZ?t.z=r:t.m=r;break;case 3:t.m=r}}_transformPathLikeValue(t,e){let s=0;return e<=1&&(s=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,s):t}_addCoordinatePolyline(t,e,s){this._dehydratedAddPointsCoordinate(t.paths,e,s)}_addCoordinatePolygon(t,e,s){this._dehydratedAddPointsCoordinate(t.rings,e,s)}_addCoordinateMultipoint(t,e,s){s===0&&t.points.push([]);const r=this._transformPathLikeValue(e,s);t.points[t.points.length-1].push(r)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,s){s===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const r=this._transformPathLikeValue(e,s),o=t[t.length-1],n=this._coordinateBuffer;if(n){if(s===0){const a=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;o.push(new Float64Array(n.buffer,a,this._vertexDimension))}n[this._coordinateBufferPtr++]=r}}_deriveApplyTransform(t){const{hasZ:e,hasM:s}=t;return e&&s?v:e?u:s?A:l}}class R{_parseFeatureQuery(t){const e=new T(t.options),s=g(t.buffer,e),r={...s,spatialReference:s.spatialReference?.toJSON(),fields:s.fields?s.fields.map(o=>o.toJSON()):void 0,missingAttributes:e.missingAttributes};return Promise.resolve(r)}}function q(){return new R}export{q as default};
