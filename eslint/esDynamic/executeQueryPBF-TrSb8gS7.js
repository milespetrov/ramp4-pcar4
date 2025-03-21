import{au as f,af as m}from"./main-BPeHLg3l.js";import{f as u}from"./utils-yA5smbyq.js";import{x as p,f as _}from"./query-Vy4azyRn.js";import{b as l}from"./Query-B8FI1Hob.js";import{o as y}from"./projection-BOG1LnbD.js";import{p as P,r as C}from"./featureConversionUtils-De1FQids.js";import"./FeatureSet-5FO8v-T5.js";async function g(i,e,t){const r=u(i),s=await p(r,l.from(e),{...t}),o=s.data.extent;return!o||isNaN(o.xmin)||isNaN(o.ymin)||isNaN(o.xmax)||isNaN(o.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:f.fromJSON(o)}}function G(i,e){return e}function h(i,e,t,r){switch(t){case 0:return a(i,e+r,0);case 1:return i.originPosition==="lowerLeft"?a(i,e+r,1):M(i,e+r,1)}}function c(i,e,t,r){return t===2?a(i,e,2):h(i,e,t,r)}function x(i,e,t,r){return t===2?e===0?0:a(i,e,3):h(i,e,t,r)}function v(i,e,t,r){return t===3?e===0?0:a(i,e,3):c(i,e,t,r)}function a({translate:i,scale:e},t,r){return i[r]+t*e[r]}function M({translate:i,scale:e},t,r){return i[r]-t*e[r]}class R{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const t=y(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(t!=null)for(const r of e.features)t(r.geometry)}createSpatialReference(){return{}}addField(e,t){const r=e.fields;m(r),r.push(t);const s=r.map(o=>o.name);this._attributesConstructor=function(){for(const o of s)this[o]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._mValueOffset=null,this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),e.geometryType){case"esriGeometryPoint":this.addCoordinate=(t,r,s)=>this.addCoordinatePoint(t,r,s),this.createGeometry=t=>this.createPointGeometry(t);break;case"esriGeometryPolygon":this.addCoordinate=(t,r,s)=>this._addCoordinatePolygon(t,r,s),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"esriGeometryPolyline":this.addCoordinate=(t,r,s)=>this._addCoordinatePolyline(t,r,s),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"esriGeometryMultipoint":this.addCoordinate=(t,r,s)=>this._addCoordinateMultipoint(t,r,s),this.createGeometry=t=>this._createMultipointGeometry(t)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){this._lengths.length===0&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:r,queryGeometryType:s}=t,o=P(r.clone(),r,!1,!1,this._transform),n=C(o,s,!1,!1);e.queryGeometryType=s,e.queryGeometry={...n}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform;switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const s=this._transform;return this._mValueOffset!==null&&e===0&&t>0&&!(t%this._mValueOffset)?0:this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){r===0&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){r===0&&this._toAddInCurrentPath--==0&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];r===0&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?v:t?c:r?x:h}}async function T(i,e,t){const r=u(i),s={...t},o=l.from(e),n=!o.quantizationParameters,{data:d}=await _(r,o,new R({sourceSpatialReference:o.sourceSpatialReference,applyTransform:n}),s);return d}export{T as a,g as n};
