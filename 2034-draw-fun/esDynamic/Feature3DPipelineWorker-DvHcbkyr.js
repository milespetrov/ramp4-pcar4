import{u as f,v,D as y,an as G,cm as Oe,H as A,c0 as ee,h7 as Me,s as De,ac as O,e4 as Fe,bi as Ge,a4 as Be,fG as Pe,eY as te,jx as Le,b$ as Ne,dT as ke,d4 as re,dS as je,jy as Ue,gi as ne,cT as M,c3 as ze,d3 as We,bG as Qe,fb as ie,E as se,ao as qe,dG as Ve}from"./main-CZM6prq-.js";import{V as Ye}from"./QueryEngine-C14JfLJe.js";import{b as ae}from"./Query-djCJM1hJ.js";import{s as He}from"./ReactiveMap-DiO32Wzh.js";import{h as Je,E as oe}from"./PooledRBush-BUxHXLHh.js";import{n as Ze}from"./centroid-CKGUqBjM.js";import{s as q}from"./OptimizedGeometry-B-8pbmIt.js";import{d as Xe}from"./query-aGcXClb1.js";import{n as $e}from"./pbf-xSWw74Q3.js";import{u as Ke}from"./quantizationUtils-Bh_oVRKq.js";import{Z as et}from"./FieldsIndex-DwqQucqu.js";import{b as tt,h as rt}from"./pbfQueryUtils-Bpoo-dmH.js";import{l as w}from"./ViewingMode-CyR_b1T8.js";import{l as nt,t as it}from"./Indices-DpXlWnGJ.js";import{N as st}from"./vec4f64-CjUMzAyX.js";import{q as at,s as ot,t as dt}from"./projectVectorToPoint-BBhBaaP1.js";import{t as lt}from"./glUtil-DgG_wvUc.js";import{n as B}from"./NormalAttribute.glsl-D5Xr4soA.js";import{u as ct,a as ut,t as ht,V as mt,b as ft,c as pt,d as _t,e as P}from"./HUDMaterial.glsl-CdI_UlC5.js";import{A as de,q as gt,u as yt}from"./Geometry-CmH148fq.js";import{e as p}from"./VertexAttribute-DFC3a3eR.js";import{i as wt,u as It,n as Rt,o as bt,c as vt}from"./RealisticTree.glsl-CCDOLyZ9.js";import{e as le}from"./basicInterfaces-Dsf65ICa.js";import{B as ce,o as Ct}from"./DefaultMaterial-kpt0rS4s.js";import{n as ue,h as xt,s as Tt,o as St,f as Et,r as At}from"./mat4-BlVAwaU2.js";import{e as D}from"./mat4f64-BaJwL7tQ.js";import{n as Ot}from"./projectBuffer-D5W94T40.js";import{n as V}from"./projectVectorToVector-CNg8UJml.js";import{C as Mt}from"./computeTranslationToOriginAndRotation-Bpda0-Bs.js";import{c as Dt,D as Ft,t as he}from"./dehydratedFeatureUtils-ByUjfEo2.js";import{t as I}from"./orientedBoundingBox-D0caZ1NH.js";import{o as Gt,s as me}from"./vec32-CjgofUqd.js";import{a as Bt}from"./spatialReferenceEllipsoidUtils-BH7NfIvI.js";import{c as Pt}from"./projectPointToVector-eAPFO2j7.js";import{J as Lt,k as Nt}from"./boundedPlane-CK0xW2RX.js";import{V as kt,f as jt}from"./sphere-Cnbzjtu_.js";import{c as R,u as Ut,x as zt}from"./plane-DEdld-wW.js";let b=class extends G{constructor(e){super(e),this._removing=0,this._tiles=new He}destroy(){for(const e of this._tiles.values())e.remove();this._tiles.clear()}get updating(){if(this._removing>0)return!0;for(const e of this._tiles.values())if(!e.finished)return!0;return!1}async onTileTreeChange(e){const{added:t,removed:r}=e,n=this._tiles,i=[];for(const s of r){const a=n.get(s);a!=null&&(a.abort(),n.delete(s),i.push({tileId:s}))}for(const s of t)n.has(s.id)||n.set(s.id,Oe(a=>this._addTile(s,a)));await this._removeTiles(i)}async _addTile(e,t){const r=await this.addTile(e,t);return A(t),r}async _removeTiles(e){this._removing++,await this.removeTiles(e),this._removing--}};f([v()],b.prototype,"updating",null),f([v({constructOnly:!0})],b.prototype,"addTile",void 0),f([v({constructOnly:!0})],b.prototype,"removeTiles",void 0),f([v()],b.prototype,"_removing",void 0),b=f([y("esri.views.3d.layers.graphics.pipeline.Tile3DManager")],b);let Y=class{constructor(e,t){this._index=e,this._view=t}getObjectId(){return this._view.getObjectId(this._index)}getAttribute(e){return this._view.getAttribute(this._index,e)}getAttributeAsTimestamp(e){return this._view.getAttributeAsTimestamp(this._index,e)}getAttributes(){return this._view.getAttributes(this._index)}getOptimizedGeometry(){return this._view.getOptimizedGeometry(this._index)}getCentroid(e){return this._view.getCentroid(this._index,e)}getBounds(){return this._view.getBounds(this._index)}getBoundingBox(){return this._view.getBoundingBox(this._index)}cloneWithGeometry(e){return new Wt(this._index,this._view,e)}},Wt=class extends Y{constructor(e,t,r){super(e,t),this._geometryOverride=r}getOptimizedGeometry(){return this._geometryOverride}getCentroid(e){return Ze(new q,this._geometryOverride,e.hasZ,e.hasM)}},Qt=class{constructor(){this._storedTiles=new Map,this._pageBounds=new Map,this.events=new ee,this.featureAdapter=H.shared}addTile(e){this._storedTiles.set(e.descriptor.id,e);for(const t of e.pages)this._addPage(t)}removeTile(e){const t=this._storedTiles,r=t.get(e);if(r!=null){t.delete(e);for(const n of r.pages)this._removePage(n)}}_addPage(e){const{featureCount:t}=e;if(t===0)return;const r=new Je(9,i=>e.getBounds(i)),n=new Array;for(let i=0;i<t;++i)n[i]=i;r.load(n),this._pageBounds.set(e,r),this.events.emit("changed")}_removePage(e){this._pageBounds.delete(e),this.events.emit("changed")}clear(){this._storedTiles.clear(),this._pageBounds.clear(),this.events.emit("changed")}forEach(e){for(const[t,r]of this._pageBounds)r.all(n=>e(new Y(n,t)))}forEachInBounds(e,t){F.minX=e[0],F.minY=e[1],F.maxX=e[2],F.maxY=e[3];for(const[r,n]of this._pageBounds)n.search(F,i=>t(new Y(i,r)))}forEachBounds(e,t){for(const r of e)t(r.getBoundingBox())}getFullExtent(e){let t=1/0,r=1/0,n=-1/0,i=-1/0;for(const s of this._pageBounds.values()){const{minX:a,minY:d,maxX:o,maxY:l}=s.toJSON();t=Math.min(t,a),r=Math.min(r,d),n=Math.min(n,o),i=Math.min(i,l)}return{xmin:t,ymin:r,xmax:n,ymax:i,spatialReference:e}}},H=class{getObjectId(e){return e.getObjectId()}getAttribute(e,t){return e.getAttribute(t)}getAttributeAsTimestamp(e,t){return e.getAttributeAsTimestamp(t)}getAttributes(e){return e.getAttributes()}getGeometry(e){return e.getOptimizedGeometry()}getCentroid(e,t){return e.getCentroid(t)}cloneWithGeometry(e,t){return e.cloneWithGeometry(t)}};H.shared=new H;const F=new oe;let qt=class{constructor(e,t){this.descriptor=e,this.pages=t}},Vt=class{constructor(e){const t=new $e(new Uint8Array(e),new DataView(e));this._reader=t,this._index=Yt(t)}get featureCount(){return this._index.featureIndices.length}get exceededTransferLimit(){return this._index.exceededTransferLimit}getObjectId(e){return this.getAttribute(e,this._index.objectIdFieldName)}getAttribute(e,t){const{_index:{fieldsIndex:r,attributeIndices:n}}=this,i=r.get(t)?.index;if(i==null)return;const s=n[e*r.fields.length+i],a=this._reader;return a.move(s),J(a)}getAttributeAsTimestamp(e,t){const r=this.getAttribute(e,t);return typeof r=="string"?new Date(r).getTime():typeof r=="number"||r==null?r:null}getAttributes(e){const{_index:{fieldsIndex:t,attributeIndices:r}}=this,n=e*t.fields.length,i=this._reader,s={};for(const a of t.fields){const d=r[n+a.index];i.move(d),s[a.name]=J(i)}return s}getCoordinates(e,t,r=0){const n=this._reader,{transform:i,featureIndices:s}=this._index,{scale:a,translate:d}=i;n.move(s[e]),this._readCoordinates(a,d,t,r)}getOptimizedGeometry(e){const t=O();return this.getCoordinates(e,t),new q([],t)}getCentroid(e,{hasZ:t,hasM:r}){this.getCoordinates(e,C);const[n,i,s]=C,a=[n,i];return t&&(a[3]=s),r&&(a[t?4:3]=0),new q([],a)}getBounds(e){this.getCoordinates(e,C);const[t,r]=C,n=new oe;return n.minX=t,n.minY=r,n.maxX=t,n.maxY=r,n}getBoundingBox(e){this.getCoordinates(e,C);const[t,r,n]=C;return Me(t,r,n,t,r,n)}readAllObjectIds(e,t=0){const r=this._reader,{_index:n,featureCount:i}=this,{objectIdFieldName:s,attributeIndices:a,fieldsIndex:d}=n,o=d.get(s).index,l=d.fields.length;for(let u=0;u<i;++u){const c=a[u*l+o];r.move(c),e[t++]=J(r)}return t}readAllCoordinates(e,t=0){const r=this._reader,{transform:n,featureIndices:i}=this._index,{scale:s,translate:a}=n;for(const d of i)r.move(d),t=this._readCoordinates(s,a,e,t);return t}_readCoordinates([e,t,r],[n,i,s],a,d){const o=this._reader,l=o.getLength(),u=o.pos()+l;for(;o.pos()<u&&o.next();)switch(o.tag()){case 2:{const c=o.getLength(),h=o.pos()+c;for(;o.pos()<h&&o.next();)o.tag()===3?(o.getUInt32(),a[d++]=n+e*o.getSInt64(),a[d++]=i+t*o.getSInt64(),a[d++]=s+r*o.getSInt64()):o.skip();break}default:o.skip()}return d}};function Yt(e){for(;e.next();){if(e.tag()===2)return Ht(e.getMessage());e.skip()}L()}function Ht(e){for(;e.next();){if(e.tag()===1)return Jt(e.getMessage());e.skip()}L()}function Jt(e){let t,r,n=!1,i=!1,s=0;const a=new Array,d=new Array,o=new Array;for(;e.next();)switch(e.tag()){case 1:r=e.getString();break;case 7:e.getEnum()!==0&&L();break;case 9:n=e.getBool()??!1;break;case 12:t=Ke(e.processMessage(rt));break;case 13:{const u=e.processMessage(tt);u.index=s++,a.push(u);break}case 15:{d.push(e.pos());const u=e.getUInt32(),c=e.pos()+u;for(;e.pos()<c&&e.next();)e.tag()===1&&o.push(e.pos()),e.skip();break}case 10:i=e.getBool()??!1;break;default:e.skip()}const l=new et(a);return t!=null&&i&&r!=null&&l.has(r)||L(),{transform:t,exceededTransferLimit:n,fieldsIndex:l,objectIdFieldName:r,featureIndices:d,attributeIndices:o}}function L(){const e=new De("pbf-parsing-failed","Error while parsing PBF",new Error);throw console.error(e),e}function J(e){const t=e.getLength(),r=e.pos()+t;for(;e.pos()<r&&e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}const C=O(),fe=8e3,Zt=4,Xt=4;let $t=class{constructor(e,t,r,n,i){this.spatialReference=e,this.url=r,this.objectIdField=n,this.capabilities=i;const{supportsMaxRecordCountFactor:s,maxRecordCount:a}=this.capabilities.query,d=s?Zt:1,o=(a??fe)*d;this._pageSize=Math.min(fe,o);const l=t.clone();l.cacheHint=!0,l.resultType="tile",l.outSpatialReference=e,l.returnGeometry=!0,l.returnZ=!0,l.maxRecordCountFactor=d,l.num=this._pageSize,l.outFields=[n],this._baseQuery=l}async fetch(e,t){const{spatialReference:r}=this,n=Fe(e.extent,r),i=this._baseQuery.clone();i.geometry=n;const s=new Array;let a=0,d=!1,o=1;for(;!d;){const l=[];for(let c=0;c<o;++c)l.push(this._fetchPage(i,a++,t));const u=await Promise.all(l);A(t);for(const c of u){const h=c.featureCount!==0;d||=!c.exceededTransferLimit||!h,h&&s.push(c)}o=Math.min(o+1,Xt)}return new qt(e,s)}async _fetchPage(e,t,r){const n=e.clone();n.start=t*this._pageSize;const i=(await Xe(this.url,n,{signal:r})).data;return A(r),new Vt(i)}},N=class extends ct{constructor(e){super(e),this._hasHighlights=!1,this._glMaterials=null,this._produces=new Map,this._renderGeometries=new Map,this._vaoCache=null,this._drawParameters=new ut,this._bufferWriter=null}get produces(){return this._produces}initialize(){this._bufferWriter=this.material.createBufferWriter(),this.material.produces.forEach((e,t)=>{this._produces.set(t,r=>!!(r!==B.Highlight&&r!==B.ShadowHighlight||this._hasHighlights)&&e(r))})}destroy(){this._glMaterials.dispose();const e=this._renderGeometries.keys();for(const t of e)this.removeRenderGeometry(t)}acquireTechniques(e){const t=this.material;if(!t.shouldRender(e))return null;const{output:r,bind:n}=e;return!t.produces.get(n.slot)?.(r)||(r===B.Highlight||r===B.ShadowHighlight)&&!this._hasHighlights?null:this._glMaterials.load(e.rctx,n.slot,r)?.beginSlot(n)}render(e,t){const r=this._renderGeometries;if(r.size===0)return;const{bind:n}=e,i=n.slot===de.OCCLUDER_MATERIAL||n.slot===de.TRANSPARENT_OCCLUDER_MATERIAL?n.slot:null,s=e.rctx;s.runAppleAmdDriverHelper(),s.bindTechnique(t,n,this.material.parameters);const a=t.program;for(const[d,o]of r)this._drawParameters.origin=o.localOrigin,a.bindDraw(n,this.material.parameters,this._drawParameters),t.ensureAttributeLocations(o.vao),s.bindVAO(o.vao),s.setPipelineState(t.getPipeline(!1,i)),s.drawArrays(t.primitiveType,0,o.numElements)}initializeRenderContext(e,t){this._glMaterials=new ht(this.material,e.materials);const r=e.renderContext.rctx.getVaoCache(this.material.vertexAttributeLocations,lt(this._bufferWriter.vertexBufferLayout));this._vaoCache=r}uninitializeRenderContext(){}addRenderGeometry(e,t,r){this.removeRenderGeometry(e);const n=this._bufferWriter.vertexBufferLayout.stride,i=this._vaoCache.newVao(mt(t.data.byteLength));i.vertexBuffers.get("geometry").setSubData(new Uint8Array(t.data),0,0,t.elementCount*n);const s={localOrigin:r,vao:i,numElements:t.elementCount};return this._renderGeometries.set(e,s),s}removeRenderGeometry(e){const t=this._renderGeometries.get(e);t!=null&&(this._vaoCache.deleteVao(t.vao),this._renderGeometries.delete(e))}};f([v({constructOnly:!0})],N.prototype,"material",void 0),N=f([y("esri.views.3d.layers.graphics.pipeline.rendering.DirectRenderer")],N);let Z=class{constructor(e){this._optionalFields=new Array,this._instanceIndexToFeatureId=new Map,this._featureIdToInstanceIndex=new Map,this._disposeResourceHandles=new Array,this._lodRendererResources=null,this.layerUid=e.layerUid,this.view=e.view,this.sharedResources=this.view.sharedSymbolResources,this.scheduler=this.view.resourceController.scheduler}async doLoad(e,t,r){Ge("enable-feature:objectAndLayerId-rendering")&&this._optionalFields.push(p.OBJECTANDLAYERIDCOLOR);const n=Kt(o=>t(o),e),i=this.view._stage,s=wt(n);i.addMany(s),this._addDisposeResource(()=>i.removeMany(s));const a=It(n);i.addMany(a),this._addDisposeResource(()=>{a.forEach(o=>o.unload()),i.removeMany(a)}),await Promise.all(a.map(o=>this.view._stage.schedule(()=>o.load(i.renderView.renderingContext),r))),A(r);const d=await this._createLodRenderer(n,r);this._lodRendererResources={lodRenderer:d,materials:s,textures:a}}addInstances(e){const t=this._lodRendererResources;if(t==null)return;const{featureIds:r,localTransforms:n,globalTransforms:i}=e,s=t.lodRenderer;if(s==null)return;const a=s.instanceData,d=r.length;for(let o=0;o<d;++o){const l=r[o],u=a.addInstance(),c=a.view,h=16*o;c.localTransform.copyFromTypedBuffer(u,n,h),c.globalTransform.copyFromTypedBuffer(u,i,h),a.updateModelTransform(u),a.setVisible(u,!0),this._instanceIndexToFeatureId.set(u,l),this._featureIdToInstanceIndex.set(l,u)}}removeInstances(e){const t=this._lodRendererResources;if(t==null)return;const r=t?.lodRenderer,n=r.instanceData,i=this._instanceIndexToFeatureId,s=this._featureIdToInstanceIndex,a=e.length;for(let d=0;d<a;++d){const o=e[d],l=s.get(o);l!=null&&(n.removeInstance(l),i.delete(l),s.delete(o))}}_addDisposeResource(e){this._disposeResourceHandles.push(e)}async _createLodRenderer(e,t){const r=this.view._stage,n={layerUid:this.layerUid,graphicUid:s=>1,notifyGraphicGeometryChanged:s=>1,notifyGraphicVisibilityChanged:s=>1},i=new at({symbol:e,optionalFields:this._optionalFields,metadata:n,shaderTransformation:null},this.scheduler);return i.slicePlaneEnabled=!1,this._addDisposeResource(()=>{r.removeRenderPlugin(i),i.destroy()}),await r.addRenderPlugin(i,t),i}};function Kt(e,t){const r=t.levels.map(n=>{const i=n.components.map(s=>{const a=e(s.materialId);if(!er(a))throw new Error("LodRenderer only supports DefaultMaterial");const d=a.createBufferWriter(),o={material:a,vertexBufferLayout:d.vertexBufferLayout,buffer:s.renderGeometryBuffer.data,elementCount:s.renderGeometryBuffer.elementCount,boundingInfo:s.boundingInfo};return new Rt(o)});return new bt(i,n.minScreenSpaceRadius)});return new vt(r)}function er(e){return e!=null&&"materialType"in e&&e.materialType==="default"}Z=f([y("esri.views.3d.layers.graphics.pipeline.rendering.LodRenderer")],Z);let pe=class extends G{constructor(e){super(),this.view=null,this.layerUid=null,this._renderGeometries=new Map,this._materials=new Map,this._directRenderers=new Map,this._lodRenderers=new Map,this.view=e.view,this.layerUid=e.layerUid}initialize(){}destroy(){}async executeRenderCommands(e){for(const t of e)switch(t.id){case"create-material":await this._createMaterial(t);break;case"create-direct-renderer":await this._createDirectRenderer(t);break;case"add-direct-renderer-geometry":await this._addDirectRendererGeometry(t);break;case"remove-direct-renderer-geometry":await this._removeDirectRendererGeometry(t);break;case"create-lod-renderer":await this._createLodRenderer(t);break;case"add-lod-instances":await this._addLodInstances(t);break;case"remove-lod-instances":await this._removeLodInstances(t)}}async _createMaterial(e){const{view:t}=this,{sharedSymbolResources:r}=t;if(r==null)throw new Error("No shared symbol resources found!");const{textures:n}=r,i=t.state.viewingMode===w.Global;let s=null;switch(e.type){case"default":s=tr(r,{physicalBasedRenderingEnabled:!0,slicePlaneEnabled:!1,castShadows:!0,isPrimitive:!0,screenSizePerspectiveEnabled:!0,doublePrecisionRequiresObfuscation:t._stage.renderView.renderingContext.driverTest.doublePrecisionRequiresObfuscation.result},i);break;case"hud":{const[a,d]=_e(n,i);this.addHandles([Be(()=>Pe(d))]),s=a}break;default:throw new Error(`unable to create unknown material type ${e.type}`)}this._materials.set(e.materialId,s)}_getMaterial(e){return this._materials.get(e)}async _createDirectRenderer(e){const t=e.materialId,r=this._getMaterial(t);if(r==null)throw new Error(`material not found ${t}`);const{view:n}=this,i=new N({material:r});this._directRenderers.set(t,i),n._stage.addRenderPlugin(i),n._stage.renderView.renderer.updateHasFlags()}async _addDirectRendererGeometry(e){const t=e.renderGeometryId,r=e.materialId;this._renderGeometries.get(t)!=null&&await this._removeDirectRendererGeometry({renderGeometryId:t});const n=this._directRenderers.get(r);if(n==null)return void console.error("no renderer assigned to provided material");const i=n.addRenderGeometry(t,e.renderGeometryBuffer,e.localOrigin);this._renderGeometries.set(t,{renderGeometry:i,materialId:r}),this.view._stage.renderView.requestRender()}async _removeDirectRendererGeometry(e){const t=e.renderGeometryId,r=this._renderGeometries.get(t);if(r==null)return;const n=r.materialId,i=this._directRenderers.get(n);i!=null?i.removeRenderGeometry(e.renderGeometryId):console.error("no renderer assigned to provided material")}async _createLodRenderer(e){const t=new Z({view:this.view,layerUid:this.layerUid}),r=new AbortController,n=i=>this._getMaterial(i);await t.doLoad(e.lodRenderGeometry,n,r.signal),this._lodRenderers.set(e.lodRendererId,t)}async _addLodInstances(e){const t=this._lodRenderers.get(e.lodRendererId);if(t==null)throw new Error("no lod renderer assigned to provided lod renderer Id");t.addInstances(e.data)}async _removeLodInstances(e){const t=this._lodRenderers.get(e.lodRendererId);if(t==null)throw new Error("no lod renderer assigned to provided lod renderer Id");t.removeInstances(e.featureIds)}};function _e(e,t){const r={anchorPosition:ot.center,occlusionTest:!0,hasSlicePlane:!1},n=r,i=1;n.color=[1,0,0,1],n.outlineColor=[0,0,0,1],n.outlineSize=i;const s=null;if(e!=null){const a=e.fromData("circle-icon",()=>ft("circle"));n.textureId=a.texture.id,n.textureIsSignedDistanceField=!0,n.sampleSignedDistanceFieldTexelCenter=_t("circle")}return n.distanceFieldBoundingBox=nr,[new pt(r,t),s]}function tr(e,t,r){const n={usePBR:t.physicalBasedRenderingEnabled,isSchematic:!0,mrrFactors:Ct,ambient:te,diffuse:te,hasSlicePlane:t.slicePlaneEnabled,hasSliceHighlight:!1,castShadows:t.castShadows,offsetTransparentBackfaces:!t.isPrimitive};return rr(n),n.screenSizePerspective=e.screenSizePerspectiveSettings,n.externalColor=st,n.isInstanced=!0,new ce(n,{spherical:r,doublePrecisionRequiresObfuscation:!0})}function rr(e){const t=e.opacity??1,r=t<1;return e.transparent=r,e.opacity=t,e.cullFace=r?le.None:le.Back,e}pe=f([y("esri.views.3d.layers.graphics.pipeline.rendering.FeaturePipelineRenderManager")],pe);const nr=[P/2,P/2,1-P/2,1-P/2];let ge=class{constructor(e){this._bufferWriter=null,this._bufferWriter=e.createBufferWriter()}createBuffer(e,t){const r=this._bufferWriter;let n=null;if(e.transformation&&t)ue(x,e.transformation),x[12]-=t[0],x[13]-=t[1],x[14]-=t[2],n=x;else{if(t)throw new Error("not implemented");e.transformation&&(n=e.transformation)}let i=null;n&&(xt(k,x),Tt(k,k),i=k);const s=e.attributes,a=r.elementCount(s),d=r.vertexBufferLayout.stride/4;a>Math.floor(ir/d)&&console.warn("geometry with very large number of elements encountered");const o=r.vertexBufferLayout.createBuffer(a);return r.write(n,i,s,e.objectAndLayerIdColor,o,0),{data:o.buffer,elementCount:a}}};const x=D(),k=D(),ir=16777216/4;let sr=class{constructor(e){this._context=e,this._commands=[],this._transferables=new Set}createMaterial(e){const t=this._context,r=t.generateId("material");switch(e){case"default":{const n=new ce({},{spherical:this._context.globalViewingMode,doublePrecisionRequiresObfuscation:!0}),i=new ge(n);t.registerRenderGeometryBufferWriter(r,i)}break;case"hud":{const n=_e(null,this._context.globalViewingMode)[0],i=new ge(n);t.registerRenderGeometryBufferWriter(r,i)}}return this._commands.push({id:"create-material",type:e,materialId:r}),r}createDirectRenderer(e){const t=this._context.generateId("material-renderer");return this._commands.push({id:"create-direct-renderer",materialRendererId:t,materialId:e}),t}addDirectRendererGeometry(e,t,r){const n=t.materialId,i=this._context.getRenderGeometryBufferWriter(n);if(i==null)throw new Error(`no bufferwriter found for material ${n}`);const s=i.createBuffer(t,r);this._transferables.add(s.data),this._commands.push({id:"add-direct-renderer-geometry",renderGeometryId:e,materialId:n,renderGeometryBuffer:s,localOrigin:r})}removeDirectRendererGeometry(e){this._commands.push({id:"remove-direct-renderer-geometry",renderGeometryId:e})}createLodRenderer(e){const t=this._context.generateId("lod-renderer"),r={levels:e.levels.map(n=>({components:n.components.map(i=>{const s=i.attributes.get(p.POSITION);if(!s||s.indices.length===0)throw new Error("positions attribute expected");const a=3,d=nt(s.indices.length/a),o=new gt(d,a,s),l=this._context.getRenderGeometryBufferWriter(i.materialId);if(l==null)throw new Error("writer not found");const u=l.createBuffer(i,null);return this._transferables.add(u.data),{materialId:i.materialId,renderGeometryBuffer:u,boundingInfo:{bbMax:o.bbMax,bbMin:o.bbMin}}}),minScreenSpaceRadius:n.minScreenSpaceRadius}))};return this._commands.push({id:"create-lod-renderer",lodRendererId:t,lodRenderGeometry:r}),t}addLodInstances(e,t){this._commands.push({id:"add-lod-instances",lodRendererId:e,data:t}),this._transferables.add(t.featureIds.buffer),this._transferables.add(t.globalTransforms.buffer),this._transferables.add(t.localTransforms.buffer)}removeLodInstances(e,t){this._commands.push({id:"remove-lod-instances",lodRendererId:e,featureIds:t}),this._transferables.add(t.buffer)}async dispatch(){const e=this._commands,t=Array.from(this._transferables);this._clearCommandBuffer(),this._context.dispatchRenderCommands(e,t)}_clearCommandBuffer(){this._commands=[],this._transferables.clear()}};class ar{constructor(t){this._idCounter=0,this._bufferWriters=new Map,this._dispatchRenderCommandsCallback=async()=>{},this.globalViewingMode=!1,this.globalViewingMode=t.viewingMode===w.Global,this._dispatchRenderCommandsCallback=t.dispatchRenderCommandsCallback}generateId(t=""){return`${t}${this._idCounter++}`}createEncoder(){return new sr(this)}async dispatchRenderCommands(t,r){this._dispatchRenderCommandsCallback(t,r)}registerRenderGeometryBufferWriter(t,r){this._bufferWriters.set(t,r)}getRenderGeometryBufferWriter(t){return this._bufferWriters.get(t)}}var m;(function(e){e[e.OBJECT_ID=0]="OBJECT_ID",e[e.PARTITION_ID=1]="PARTITION_ID",e[e.GEOMETRY_MAP_COORDINATES=2]="GEOMETRY_MAP_COORDINATES",e[e.GEOMETRY_RENDER_COORDINATES=3]="GEOMETRY_RENDER_COORDINATES",e[e.TILE_CENTER_RENDER_COORDINATES=4]="TILE_CENTER_RENDER_COORDINATES"})(m||(m={}));async function or(e,t){const{numFeatures:r,tile:n,partitionInfo:i}=e,{pages:s}=n;if(s.length===0||r===0)return new Uint32Array;const a=new Uint32Array(r);if(i){const d=s.reduce((c,{featureCount:h})=>c+h,0),o=new Uint32Array(d);let l=0;for(const c of s)l=c.readAllObjectIds(o,l);const u=i.tileIndices;for(let c=0;c<r;++c){const h=o[u[c]];a[c]=h}}else{let d=0;for(const o of s)d=o.readAllObjectIds(a,d)}return a}async function dr(e,t){const{numFeatures:r,tile:n,partitionInfo:i}=e,{pages:s}=n;if(s.length===0||r===0)return new Float64Array;const a=new Float64Array(3*r);if(i){const d=s.reduce((c,{featureCount:h})=>c+h,0),o=new Float64Array(3*d);let l=0;for(const c of s)l=c.readAllCoordinates(o,l);const u=i.tileIndices;for(let c=0;c<r;++c){const h=u[c],_=o[3*h+0],S=o[3*h+1],E=o[3*h+2];a[3*c+0]=_,a[3*c+1]=S,a[3*c+2]=E}}else{let d=0;for(const o of s)d=o.readAllCoordinates(a,d)}return a}async function lr(e,t){await e.provision([m.GEOMETRY_MAP_COORDINATES],t);const{numFeatures:r,tile:n,mapCoordinates:i}=e,{pages:s}=n;if(s.length===0||r===0)return new Float64Array;const a=t.viewSpatialReference,d=t.renderSpatialReference,o=new Float64Array(3*r);if(!Ot(i,a,0,o,d,0,r))throw new Error("Failed to project coordinates");return o}async function cr(e,t){const r=t.viewSpatialReference,n=t.renderSpatialReference,i=e.tile.descriptor.extent,s=Le(i),a=O();return V([s[0],s[1],0],r,a,n),a}let ye=class{constructor(e,t,r=null){this._tile=e,this._numFeatures=t,this._partitionInfo=r}get partitionInfo(){return this._partitionInfo}get tile(){return this._tile}get numFeatures(){return this._numFeatures}get tileId(){return this._tile.descriptor.id}get objectIds(){if(this._objectIds==null)throw new Error("objectIds haven't been provisioned yet");return this._objectIds}get partitionIds(){if(this._partitionIds==null)throw new Error("partitionIds haven't been provisioned yet");return this._partitionIds}get mapCoordinates(){if(this._mapCoordinates==null)throw new Error("mapCoordinates haven't been provisioned yet");return this._mapCoordinates}get renderCoordinates(){if(this._renderCoordinates==null)throw new Error("renderCoordinates haven't been provisioned yet");return this._renderCoordinates}get tileCenterRenderCoordinates(){if(this._tileCenterRenderCoordinates==null)throw new Error("tileCenterRenderCoordinates hasn't been provisioned yet");return this._tileCenterRenderCoordinates}async provision(e,t){for(const r of e)switch(r){case m.OBJECT_ID:if(this._objectIds)return;this._objectIds=await or(this);break;case m.PARTITION_ID:if(this._partitionIds)return;this._partitionIds=new Uint32Array(this._numFeatures);break;case m.GEOMETRY_MAP_COORDINATES:if(this._mapCoordinates)return;this._mapCoordinates=await dr(this);break;case m.GEOMETRY_RENDER_COORDINATES:if(this._renderCoordinates)return;this._renderCoordinates=await lr(this,t);break;case m.TILE_CENTER_RENDER_COORDINATES:if(this._tileCenterRenderCoordinates)return;this._tileCenterRenderCoordinates=await cr(this,t);break;default:throw new Error("not implemented")}}dispose(){if(this.partitions){for(const e of this.partitions)e.dispose();this.partitions=void 0}}};function we(e){const t=new Map;for(const[r,n]of e)t.set(r,{...n,indices:it(n.indices)});return t}function ur(e,t){const r=(n,i,s=!1)=>({levels:n.map(a=>{const d=we(i(a.tesselation));return s&&hr(d),{components:[{attributes:d,objectAndLayerIdColor:void 0,transformation:null,materialId:t}],minScreenSpaceRadius:a.minScreenSpaceRadius}})});switch(e){case"cone":return r(mr,n=>Dt(1,.5,n,!1),!0);case"sphere":case"cube":case"inverted-cone":case"cylinder":case"tetrahedron":case"diamond":throw new Error("not implemented");default:return}}function hr(e){const t=e,r=t.get(p.POSITION).data,n=t.get(p.NORMAL).data;if(n){const i=Ie(e,p.NORMAL).data;for(let s=0;s<n.length;s+=3){const a=n[s+1];i[s+1]=-n[s+2],i[s+2]=a}}if(r){const i=Ie(e,p.POSITION).data;for(let s=0;s<r.length;s+=3){const a=r[s+1];i[s+1]=-r[s+2],i[s+2]=a}}}function Ie(e,t){let r=e.get(t);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:yt(r.data)},e.set(t,r)),r}const mr=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}];let X=class extends G{constructor(e){super(),this._context=e,this.lodRendererId=null,this._loaded=!1}get loaded(){return this._loaded}async load(e){const t=e.createMaterial("default"),r=ur("cone",t);this.lodRendererId=e.createLodRenderer(r),this._loaded=!0}async add(e,t){if(this.lodRendererId==null)throw new Error("expected lod renderer id to not be null");await this._provisionFeatureData(e);const r=e.numFeatures,n=!0,i=Ne(ke("cone")),s=re(je(i)),a=re(Ue(s,{isPrimitive:n,width:100,depth:null,height:null})),d=new Float64Array(16*r),o=new Float64Array(16*r),l=e.mapCoordinates;for(let c=0;c<r;++c){const h=c,_=l[3*c+0],S=l[3*c+1],E=l[3*c+2],W=this._computeGlobalTransform(_,S,E,this._context.viewSpatialReference,pr),Q=this._computeLocalTransform(a,s,fr);this._writeMatrixToTypedBuffer(d,h,Q),this._writeMatrixToTypedBuffer(o,h,W)}const u={featureIds:new Uint32Array(e.objectIds),localTransforms:d,globalTransforms:o};t.addLodInstances(this.lodRendererId,u)}async remove(e,t){if(this.lodRendererId==null)return;const r=new Uint32Array(e.objectIds);t.removeLodInstances(this.lodRendererId,r)}async _provisionFeatureData(e){await e.provision([m.GEOMETRY_MAP_COORDINATES,m.OBJECT_ID],this._context)}_writeMatrixToTypedBuffer(e,t,r){let n=16*t;for(let i=0;i<16;i++)e[n++]=r[i]}_computeGlobalTransform(e,t,r,n,i){return j[0]=e,j[1]=t,j[2]=r,Mt(n,j,i,this._context.renderSpatialReference),i}_computeLocalTransform(e,t,r){return St(r),this._applyObjectScale(e,t,r),r}_applyObjectScale(e,t,r){const n=Ft(e,e,t,this._context.renderCoordsHelper.unitInMeters);n[0]===1&&n[1]===1&&n[2]===1||Et(r,r,n)}};X=f([y("esri.views.3d.layers.graphics.pipeline.symbolization.TestObjectSymbol")],X);const j=O(),fr=D(),pr=D();let $=class extends G{constructor(e){super(),this._context=e,this.materialId=null,this._loaded=!1}get loaded(){return this._loaded}async load(e){this.materialId=e.createMaterial("hud"),e.createDirectRenderer(this.materialId),this._loaded=!0}async add(e,t){if(this.materialId==null)throw new Error("expected material not to be null");await this._provisionFeatureData(e);const{numFeatures:r,tileId:n,renderCoordinates:i,tileCenterRenderCoordinates:s}=e,a=new Float64Array([0,0,1]),d=new Float64Array([255,255,255,255]),o=new Float64Array([24,24]),l=new Float64Array([0,0,0,1]),u=new Float64Array([0,0]),c=new Float64Array([0]),h=new Uint32Array(r);for(let g=0;g<r;++g)h[g]=g;const _=new Uint32Array(r);for(let g=0;g<r;++g)_[g]=0;const S=new I(i,h,3,!0),E=new I(a,_,3,!0),W=new I(u,_,2,!0),Q=new I(d,_,4,!0),xe=new I(c,_,1,!0),Te=new I(o,_,2,!0),Se=new I(l,_,4,!0),Ee=[[p.POSITION,S],[p.NORMAL,E],[p.UV0,W],[p.COLOR,Q],[p.ROTATION,xe],[p.SIZE,Te],[p.CENTEROFFSETANDDISTANCE,Se]],Ae={attributes:we(Ee),objectAndLayerIdColor:void 0,transformation:D(),materialId:this.materialId};t.addDirectRendererGeometry(n,Ae,s)}async remove(e,t){t.removeDirectRendererGeometry(e.tileId)}async _provisionFeatureData(e){await e.provision([m.GEOMETRY_RENDER_COORDINATES,m.TILE_CENTER_RENDER_COORDINATES],this._context)}};$=f([y("esri.views.3d.layers.graphics.pipeline.symbolization.TestSymbol")],$);class _r{constructor(t){this._symbols=new Map,this._context=t}async load(){this._symbols.set(0,new $(this._context)),this._symbols.set(1,new X(this._context))}async add(t,r){await this._provisionFeatureData(t,this._context);const n=this._partition(t);await Promise.all(n.map(async i=>{const s=await this._provisionSymbol(i.partitionInfo?.index,r);s&&await s.add(i,r)}))}async remove(t,r){const n=t.partitions;if(!n)throw new Error("partitioned featureset expected");await Promise.all(n.map(async i=>{const s=await this._provisionSymbol(i.partitionInfo?.index,r);s&&await s.remove(i,r)}))}async _provisionFeatureData(t,r){await t.provision([m.PARTITION_ID,m.OBJECT_ID],r)}async _provisionSymbol(t,r){if(t==null)return null;const n=this._symbols.get(t);return n?(n.loaded||await n.load(r),n):null}_partition(t){const{numFeatures:r,objectIds:n,partitionIds:i}=t,s=[[],[]];for(let a=0;a<r;++a){const d=n[a]%2;s[d].push(a),i[a]=d}return t.partitions=s.filter(a=>a.length>0).map((a,d)=>{const o=a.length,l={index:d,tileIndices:new Uint32Array(a)};return new ye(t.tile,o,l)}),t.partitions}}function gr(e){const{value:t,operations:r}=e;return{operations:r,value:r.create(t)}}function yr(e,t,r){return e.operations.setExtent(e.value,t,r.value),r}function wr(e,t){return e.operations.getExtent(e.value,t),t}function Ir(e){return{operations:e,value:e.create()}}function Re(e,t,r=Ir(e)){return r.operations=e,e.copy(t,r.value),r}function Rr(e){return Re(jt,kt(0,0,0,ne(e).radius))}const be=2**50;function br(){return Re(Nt,Lt([0,0,0],[be,0,0],[0,be,0]))}function vr(e,t,r){return e.operations.axisAt(e.value,t,M.Z,r)}function Cr(e,t,r,n){return e.operations.axisAt(e.value,t,r,n)}function xr(e,t,r){return e.operations.intersectRay(e.value,t,r)}function Tr(e,t,r){return e.operations.intersectRayClosestSilhouette(e.value,t,r)}function Sr(e,t){return e.operations.altitudeAt(e.value,t)}function ve(e,t,r,n){return e.operations.setAltitudeAt(e.value,t,r,n)}function Er(e,t,r,n){return t!==n&&ue(n,t),Gt(T,n[12],n[13],n[14]),ve(e,T,r,T),n[12]=T[0],n[13]=T[1],n[14]=T[2],n}function K(e,t,r){return e.operations.elevate(e.value,t,r.value)}const T=O();class z{constructor(t,r,n,i){this.viewingMode=t,this.spatialReference=r,this.unitInMeters=n,this._coordinateSystem=i,this._tmpCoordinateSystem=gr(i),this.referenceEllipsoid=ne(r),this.sphericalPCPF=Bt(r)}set extent(t){t&&yr(this._coordinateSystem,t,this._coordinateSystem)}get extent(){return wr(this._coordinateSystem,ze())}getAltitude(t){return Sr(this._coordinateSystem,t)}setAltitude(t,r,n=t){return ve(this._coordinateSystem,n,r,t)}setAltitudeOfTransformation(t,r){Er(this._coordinateSystem,r,t,r)}worldUpAtPosition(t,r){return vr(this._coordinateSystem,t,r)}worldBasisAtPosition(t,r,n){return Cr(this._coordinateSystem,t,r,n)}basisMatrixAtPosition(t,r){const n=this.worldBasisAtPosition(t,M.X,R.get()),i=this.worldBasisAtPosition(t,M.Y,R.get()),s=this.worldBasisAtPosition(t,M.Z,R.get());return At(r,n[0],n[1],n[2],0,i[0],i[1],i[2],0,s[0],s[1],s[2],0,0,0,0,1),r}headingAtPosition(t,r){const n=this.worldUpAtPosition(t,R.get()),i=this.worldBasisAtPosition(t,M.Y,R.get()),s=Ut(r,i,n);return We(s)}intersectManifoldClosestSilhouette(t,r,n){return K(this._coordinateSystem,r,this._tmpCoordinateSystem),Tr(this._tmpCoordinateSystem,t,n),n}intersectManifold(t,r,n){K(this._coordinateSystem,r,this._tmpCoordinateSystem);const i=R.get();return xr(this._tmpCoordinateSystem,t,i)?me(n,i):null}intersectInfiniteManifold(t,r,n){if(this.viewingMode===w.Global)return this.intersectManifold(t,r,n);K(this._coordinateSystem,r,this._tmpCoordinateSystem);const i=this._tmpCoordinateSystem.value,s=R.get();return zt(i.plane,t,s)?me(n,s):null}toRenderCoords(t,r,n){return he(t)?Pt(t,r,this.spatialReference):V(t,r,n,this.spatialReference)}fromRenderCoords(t,r,n=null){return he(r)?(n!=null&&(r.spatialReference=n),dt(t,this.spatialReference,r)?r:null):V(t,this.spatialReference,r,n)?r:null}static create(t,r){switch(t){case w.Local:return new z(w.Local,r,Qe(r),br());case w.Global:return new z(w.Global,r,1,Rr(r))}}static renderUnitScaleFactor(t,r){return ie(t)/ie(r)}}class Ar{constructor(t){this._tileFeatureData=new Map,this._context={viewSpatialReference:t.viewSpatialReference,renderSpatialReference:t.renderSpatialReference,renderCoordsHelper:z.create(t.viewingMode,t.renderSpatialReference)}}async add(t,r){this._featureRenderer||(this._featureRenderer=new _r(this._context),await this._featureRenderer.load());const n=this._addTileFeatureData(t);await this._featureRenderer.add(n,r)}async remove(t,r){const n=this._getFeatureSetFromTileId(t);n&&(this._featureRenderer&&this._featureRenderer.remove(n,r),this._removeTileFeatureData(t))}_getFeatureSetFromTileId(t){return this._tileFeatureData.get(t)}_addTileFeatureData(t){const r=t.descriptor.id,n=t.pages.reduce((s,{featureCount:a})=>s+a,0),i=new ye(t,n);return this._tileFeatureData.set(r,i),i}_removeTileFeatureData(t){const r=this._tileFeatureData.get(t);r&&(r.dispose(),this._tileFeatureData.delete(t))}}let U=class extends ee.EventedAccessor{constructor(){super(...arguments),this.remoteClient=null,this._featureStore=new Qt,this._tileManager=new b({addTile:(e,t)=>this._addTile(e,t),removeTiles:e=>this._removeTiles(e)}),this._renderCommandContext=null,this._fetcher=null,this._symbolizer=null,this._queryEngine=null,this._defaultQueryJSON=null}get updating(){return this._tileManager.updating}destroy(){this._featureStore.clear(),this._tileManager.destroy()}async setup({viewSpatialReference:e,renderSpatialReference:t,viewingMode:r,baseQuery:n,url:i,objectIdField:s,capabilities:a,fieldsIndex:d,timeInfo:o}){this._renderCommandContext=new ar({viewingMode:r,dispatchRenderCommandsCallback:(c,h)=>this.remoteClient.invoke("dispatchRenderCommands",c,{transferList:h})});const l=se.fromJSON(e),u=se.fromJSON(t);return this._fetcher=new $t(l,ae.fromJSON(n),i,s,a),this._symbolizer=new Ar({viewSpatialReference:l,renderSpatialReference:u,viewingMode:r}),this._queryEngine=new Ye({hasZ:!0,hasM:!1,geometryType:"esriGeometryPoint",objectIdField:s,fieldsIndex:d,availableFields:[s],spatialReference:e,featureStore:this._featureStore,timeInfo:o}),this._defaultQueryJSON=new ae({outSpatialReference:l}).toJSON(),this.addHandles(qe(()=>this.updating,async c=>{this.emit("notify-updating",{updating:c})}),Ve),Ce}async executeQuery(e,t){return{result:await this._queryEngine.executeQuery(this._ensureQuery(e),t)}}async executeQueryForIds(e,t){const r=await this._queryEngine.executeQueryForIdSet(this._ensureQuery(e),t);return{result:Array.from(r)}}async executeQueryForCount(e,t){return{result:await this._queryEngine.executeQueryForCount(this._ensureQuery(e),t)}}async executeQueryForExtent(e,t){return{result:await this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t)}}async executeQueryForLatestObservations(e,t){return{result:await this._queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t)}}async onTileTreeChange(e){return await this._tileManager.onTileTreeChange(e),Ce}async _addTile(e,t){const r=await this._fetcher.fetch(e,t);A(t),this._featureStore.addTile(r);const n=this._renderCommandContext.createEncoder();return await this._symbolizer.add(r,n),await n.dispatch(),r}async _removeTiles(e){const t=this._renderCommandContext.createEncoder(),r=this._featureStore,n=this._symbolizer;for(const i of e)r.removeTile(i.tileId),await n.remove(i.tileId,t);await t.dispatch()}_ensureQuery(e){return e??this._defaultQueryJSON}};f([v()],U.prototype,"updating",null),U=f([y("esri.views.3d.layers.graphics.pipeline.Feature3DPipelineWorker")],U);const Or=U,Ce={result:void 0};export{Or as default};
