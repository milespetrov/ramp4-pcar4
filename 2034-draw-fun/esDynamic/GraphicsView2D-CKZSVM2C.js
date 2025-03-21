import{be as q,hM as $,hN as W,c3 as g,gl as B,dB as A,bi as _,hr as N,bS as X,dC as Q,bv as T,dr as Y,an as J,ao as K,c1 as ee,eM as te,H as se,aI as ie,hO as re,aH as oe,hP as ae,hQ as ne,aN as he,u as m,v as y,D as de}from"./main-CZM6prq-.js";import{Z as ce}from"./FieldsIndex-DwqQucqu.js";import{l as E,r as le,u as P,Z as V,W as ue,e as pe}from"./CIMSymbolHelper-DT-GNtEz.js";import{y as me}from"./OverrideHelper-C-Q-Qdt4.js";import{a as S,S as _e,W as ye,X as ge,M as fe}from"./definitions-DJSdSb77.js";import{c as be}from"./WGLContainer-C76FZFDc.js";import{M as we,p as Ie,b as Se,n as ve,s as xe,a as Me}from"./AttributeStore-BTclc9U_.js";import{n as Re,I as Te,y as Ge,v as Ce,S as je,V as Pe,u as ze,m as Ue,x as z,b as ke,c as Oe}from"./FeatureCommandQueue-BPiBTUs6.js";import{o as qe,h as Ae,a as U}from"./featureConversionUtils-mvMgFlNe.js";import{s as x}from"./OptimizedGeometry-B-8pbmIt.js";import{i as Ee}from"./Tile-BFRm3-zd.js";import{L as Ve}from"./normalizeUtils-B-fNHyGy.js";import{a as De}from"./normalizeUtilsSync-Byv4g4bC.js";import{x as Fe,j as He}from"./queryUtils-CAyoE34s.js";import{d as Le}from"./UpdateTracking2D-oFY1pea_.js";async function Ze(i,e,t){const s=[],r={scaleInfo:Re(i),scaleExpression:null};for(const o of e)switch(o.type){case"marker":if(o.animationParams){s.push(...ze(t.instances.animatedMarker,o,z,r));break}s.push(...Ue(t.instances.marker,o,z,r));break;case"fill":o.spriteRasterizationParam==null?s.push(...je(t.instances.fill,o,r)):s.push(...Pe(t.instances.complexFill,o,!1,r));break;case"line":o.spriteRasterizationParam?s.push(...Ge(t.instances.texturedLine,o,!1,r)):s.push(...Ce(t.instances.line,o,!1,r));break;case"text":s.push(...Te(t.instances.text,o,z,r))}return s}class G extends we{static from(e,t,s){return new G(e,t,s)}constructor(e,t,s){super(s),this._items=e,this._tile=t,this._index=-1,this._cachedGeometry=null;const r=t.lod;r.wrap&&(this._wrappingInfo={worldSizeX:r.worldSize[0]})}get _current(){return this._items[this._index]}getItem(){return this._current}getZOrder(){return this._current.zOrder}getMeshWriters(){return this._current.symbolResource?.symbolInfo.meshWriters??[]}hasField(e){return this._current.attributes[e]!=null}field(e){return this.readAttribute(e)}get geometryType(){const e=q(this._current.geometry);return e==="esriGeometryPoint"?"esriGeometryMultipoint":e}getCursor(){return this.copy()}copy(){const e=new G(this._items,this._tile,this.metadata);return this.copyInto(e),e}copyInto(e){super.copyInto(e),e._cachedGeometry=this._cachedGeometry,e._index=this._index}get fields(){throw new Error("Fields reading not supported to graphics.")}get hasFeatures(){return!!this._items.length}get hasNext(){return this._index+1<this._items.length}get exceededTransferLimit(){throw new Error("InternalError: exceededTransferLimit not implemented for graphics.")}get hasZ(){return!1}get hasM(){return!1}getInTransform(){return this._tile.transform}getSize(){return this._items.length}getAttributeHash(){let e="";for(const t in this._current.attributes)e+=this._current.attributes[t];return e}getObjectId(){return this._items[this._index].objectId}getDisplayId(){return this._current.displayId}setDisplayId(e){throw new Error("InternalError: Setting displayId not supported for graphics.")}setIndex(e){this._index=e}getIndex(){return this._index}next(){for(this._cachedGeometry=null;++this._index<this._items.length&&!this._getExists(););return this._index<this._items.length}readGeometryArea(){throw new Error("InternalError: readGeometryArea not supported for graphics.")}_readGeometry(){if(!this._cachedGeometry){let e=qe(this._current.projectedGeometry,this.hasZ,this.hasM);if(this.geometryType==="esriGeometryPolyline"&&(e=Ae(new x,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform.scale[0])),this._cachedGeometry=U(new x,e,this.hasZ,this.hasM,this.geometryType,this._tile.transform),!this._cachedGeometry)return null;this._wrapGeometry(this._cachedGeometry)}return this._cachedGeometry}_wrapGeometry(e){if(!this._wrappingInfo)return;const{worldSizeX:t}=this._wrappingInfo;if(e.isPoint)return t===1?(e.coords.push(S,0),e.coords.push(2*-S,0),void e.lengths.push(3)):t===2?(e.coords.push(2*S,0),e.coords.push(4*-S,0),void e.lengths.push(3)):void this._wrapVertex(e.coords,0,2,t);if(this.geometryType==="esriGeometryMultipoint"){if(t===1){const s=e.coords.slice();s[0]-=512;const r=e.coords.slice();r[0]+=512,e.coords.push(...s,...r);const o=e.lengths[0];return void e.lengths.push(o,o)}this._wrapVertex(e.coords,0,2,t)}}_wrapVertex(e,t,s,r){const o=t*s,a=e[o];a<-S*(r-2)?e[o]=a+S*r:a>S*(r-1)&&(e[o]=a-S*r)}_readX(){const e=this._readGeometry();return e!=null?e.coords[0]:0}_readY(){const e=this._readGeometry();return e!=null?e.coords[1]:0}_readServerCentroid(){switch(this.geometryType){case"esriGeometryPolygon":{const e=W(this._current.projectedGeometry),t=new x([],e);return U(new x,t,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}case"esriGeometryPolyline":{const e=this._current.projectedGeometry,t=$(e.paths,this.hasZ),s=new x([],t);return U(new x,s,this.hasZ,this.hasM,this.geometryType,this._tile.transform)}}return null}_readAttribute(e,t){const s=this._current.attributes[e];if(s!==void 0)return s;const r=e.toLowerCase();for(const o in this._current.attributes)if(o.toLowerCase()===r)return this._current.attributes[o]}_readAttributes(){return this._current.attributes}}class k{static fromGraphic(e,t,s,r){return new k(e.geometry,t,e.attributes,e.visible,e.uid,e.version,s,r)}constructor(e,t,s,r,o,a,n,l){this.geometry=e,this.symbol=t,this.attributes=s,this.visible=r,this.objectId=o,this._version=a,this.zOrder=n,this.displayId=l,this.bounds=g(),this.prevBounds=g(),this.size=[0,0,0,0]}get linearCIM(){return this.symbolResource?.symbolInfo.linearCIM}get hasAnimations(){const{linearCIM:e}=this;return!!e&&e.some(t=>"animationParams"in t&&!!t.animationParams)}update(e,t,s){return(this._version!==e.version||this.zOrder!==s||this.symbol!==t)&&(this.prevBounds=this.bounds,this.bounds=g(),this.zOrder=s,this.geometry=e.geometry,this.attributes=e.attributes,this.symbol=t,this.visible=e.visible,this._version=e.version,this.symbolResource=null,this.projectedGeometry=null,!0)}async projectAndNormalize(e){let t=this.geometry;if(!t||!t.spatialReference||t.type==="mesh")return;t.type==="extent"&&(t=E(t)),await Fe(t.spatialReference,e);const s=De(t);if(!s)return;const r=He(s,t.spatialReference,e);r&&B(r),this.projectedGeometry=A(r)?E(r):r}}class $e{constructor(e,t,s){this.added=e,this.updated=t,this.removed=s}hasAnyUpdate(){return!!(this.added.length||this.updated.length||this.removed.length)}}const D=1e-5;function We(i,e){return e.zOrder-i.zOrder}class Be{constructor(e,t,s,r,o){this._items=new Map,this._boundsDirty=!1,this._outSpatialReference=e,this._cimResourceManager=t,this._hittestDrawHelper=new le(t),this._tileInfoView=s,this._store=o;const a=s.getClosestInfoForScale(r);this._resolution=this._tileInfoView.getTileResolution(a.level)}destroy(){this._hittestDrawHelper.destroy()}items(){return this._items.values()}getItem(e){return this._items.get(e)}async update(e,t,s){const r=[],o=[],a=[],n=new Set,l=[];let d=0;for(const h of e.items){d++;const c=h.uid,u=this._items.get(c),f=t(h);if(n.add(c),u){u.update(h,f,d)&&(o.push(u),l.push(this._updateItem(u,s)));continue}const b=this._store.createDisplayIdForObjectId(c),w=k.fromGraphic(h,f,d,b);l.push(this._updateItem(w,s)),this._items.set(w.objectId,w),r.push(w)}for(const[h,c]of this._items.entries())n.has(h)||(this._store.releaseDisplayIdForObjectId(h),this._items.delete(h),a.push(c));return await Promise.all(l),this._index=null,new $e(r,o,a)}updateLevel(e){this._resolution!==e&&(this._index=null,this._boundsDirty=!0,this._resolution=e)}hitTest(e,t,s,r,o){const a=_("esri-mobile"),n=a?_e:ye,l=n+(a?0:ge);e=Ve(e,this._tileInfoView.spatialReference);const d=r*window.devicePixelRatio*l,h=g();h[0]=e-d,h[1]=t-d,h[2]=e+d,h[3]=t+d;const c=r*window.devicePixelRatio*n,u=g();u[0]=e-c,u[1]=t-c,u[2]=e+c,u[3]=t+c;const f=.5*r*(l+P),b=this._searchIndex(e-f,t-f,e+f,t+f);if(!b||b.length===0)return[];const w=[],O=g(),M=g();for(const I of b){if(!I.visible)continue;const{projectedGeometry:j,symbolResource:R}=I;this._getSymbolBounds(O,R,j,M,o),M[3]=M[2]=M[1]=M[0]=0,N(O,h)&&w.push(I)}if(w.length===0)return[];const F=this._hittestDrawHelper,C=[];for(const I of w){const{projectedGeometry:j,symbolResource:R}=I;if(!R)continue;const{textInfo:H,symbolInfo:L}=R,Z=L.cimSymbol;F.hitTest(u,Z.symbol,j,H,o,r)&&C.push(I)}return C.sort(We),C.map(I=>I.objectId)}queryItems(e){return this._items.size===0?[]:this._searchForItems(e)}clear(){this._items.clear(),this._index=null}async _updateItem(e,t){await e.projectAndNormalize(this._outSpatialReference),await t(e);const{size:s}=e;s[0]=s[1]=s[2]=s[3]=0,this._getSymbolBounds(e.bounds,e.symbolResource,e.projectedGeometry,e.size,0)}_searchIndex(e,t,s,r){return this._boundsDirty&&(this._items.forEach(o=>this._getSymbolBounds(o.bounds,o.symbolResource,o.projectedGeometry,o.size,0)),this._boundsDirty=!1),this._index||(this._index=Ee(9,o=>({minX:o.bounds[0],minY:o.bounds[1],maxX:o.bounds[2],maxY:o.bounds[3]})),this._index.load(Array.from(this._items.values()))),this._index.search({minX:e,minY:t,maxX:s,maxY:r})}_searchForItems(e){const t=this._tileInfoView.spatialReference,s=e.bounds,r=X(t);if(r&&t.isWrappable){const[o,a]=r.valid,n=Math.abs(s[2]-a)<D,l=Math.abs(s[0]-o)<D;if((!n||!l)&&(n||l)){const d=e.resolution;let h;h=g(n?[o,s[1],o+d*P,s[3]]:[a-d*P,s[1],a,s[3]]);const c=this._searchIndex(s[0],s[1],s[2],s[3]),u=this._searchIndex(h[0],h[1],h[2],h[3]);return[...new Set([...c,...u])]}}return this._searchIndex(s[0],s[1],s[2],s[3])}_getSymbolBounds(e,t,s,r,o){if(!t||!t.symbolInfo.linearCIM||!s)return null;if(e||(e=g()),Q(e,s),!r||r[0]===0&&r[1]===0&&r[2]===0&&r[3]===0){const{textInfo:l,symbolInfo:d}=t,h=d.cimSymbol;r||(r=[0,0,0,0]);const c=V.getSymbolInflateSize(r,h.symbol,this._cimResourceManager,o,l);r[0]=T(c[0]),r[1]=T(c[1]),r[2]=T(c[2]),r[3]=T(c[3])}const a=this._resolution,n=V.safeSize(r);return e[0]-=n*a,e[1]-=n*a,e[2]+=n*a,e[3]+=n*a,e}}class v{static getOrCreate(e,t,s){let r=t.get(e.id);return r||(r=new v(e,s),t.set(e.id,r)),r}static fromItems(e,t,s){const r=new v(e,s);for(const o of t)r.append(o);return r}constructor(e,t){this.tile=e,this.metadata=t,this.addedOrModified=[],this.removed=[],this.objectIdMap=null}get reader(){return this._reader||(this._reader=G.from(this.addedOrModified,this.tile,this.metadata)),this._reader}append(e){this.addedOrModified.push(e),e.hasAnimations&&(this.objectIdMap=this.objectIdMap||{},this.objectIdMap[e.displayId]=e.objectId)}}let p=class extends Y(J){constructor(i){super(i),this._attached=!1,this._tiles=new Map,this._controller=new AbortController,this._hashToSymbolInfo=new Map,this._lastCleanup=performance.now(),this._cleanupRequired=!0,this.lastUpdateId=-1,this.renderer=null,this._updateTracking=new Le({debugName:"GraphicsView2D"}),this.updateRequested=!1,this.defaultPointSymbolEnabled=!0,this._commandQueue=new ke({process:e=>{if(e.type==="update")return this._update();throw new Error("InternalError: Unsupported command")}}),this.graphicUpdateHandler=this.graphicUpdateHandler.bind(this)}destroy(){this.container.destroy(),this.view=null,this.renderer=null,this._set("graphics",null),this._controller.abort(),this._graphicStore.clear(),this._graphicStore.destroy(),this._attributeStore=null,this._hashToSymbolInfo.clear(),this._updateTracking.destroy(),this._commandQueue.destroy()}_initAttributeStore(){this._storage=new Ie({spatialReference:this.view.spatialReference,fields:new ce}),this._attributeStore=new Se({isLocal:!0,update:e=>{_("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`,{message:e}),this.container.attributeView.requestUpdate(e),this.container.requestRender(),_("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`,{message:e})}});const i=Oe(null,[]);this._attributeStore.update(i,this._storage,null),this.container.checkHighlight=()=>this._attributeStore.hasHighlight}initialize(){this._initAttributeStore(),this._metadata=ve.createGraphics(this.view.spatialReference),this._resourceProxy=new xe({fetch:e=>Promise.all(e.map(t=>this.view.stage.textureManager.rasterizeItem(t))),fetchDictionary:e=>{throw new Error("InternalError: Graphics do not support Dictionary requests")}}),this.addHandles([K(()=>this._effectiveRenderer,()=>this._pushUpdate()),this.view.graphicsTileStore.on("update",this._onTileUpdate.bind(this)),this.container.on("attach",()=>{this.addHandles([this.graphics.on("change",()=>this._pushUpdate())]),this._graphicStore?.destroy(),this._graphicStore=new Be(this.view.spatialReference,this._cimResourceManager,this.view.featuresTilingScheme,this.view.state.scale,this._attributeStore),this._attached=!0,this.requestUpdate(),this._pushUpdate()})]),this._updateTracking.addUpdateTracking("CommandQueue",this._commandQueue.updateTracking);const i=this.view.graphicsTileStore.tiles;this._onTileUpdate({added:i,removed:[]})}get _effectiveRenderer(){return typeof this.renderer=="function"?this.renderer():this.renderer}get _cimResourceManager(){return this.view.stage.textureManager.resourceManager}get updating(){const i=!this._attached||this._updateTracking.updating;return _("esri-2d-log-updating")&&console.log(`Updating GraphicsView2D: ${i}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`),i}hitTest(i){if(!this.view||this.view.suspended)return[];const{resolution:e,rotation:t}=this.view.state,s=this._graphicStore.hitTest(i.x,i.y,2,e,t),r=new Set(s),o=this.graphics.items.reduce((a,n)=>(r.has(n.uid)&&a.set(n.uid,n),a),new Map);return s.map(a=>o.get(a)).filter(ee)}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.requestUpdateCallback()),this.notifyChange("updating")}processUpdate(i){this.updateRequested&&(this.updateRequested=!1,this.update(i))}viewChange(){this.requestUpdate()}setHighlight(i){const e=[];for(const{objectId:t,highlightFlags:s}of i){const r=this._graphicStore.getItem(t)?.displayId;e.push({objectId:t,highlightFlags:s,displayId:r})}this._attributeStore.setHighlight(e,i),this._pushUpdate()}graphicUpdateHandler(i){this._pushUpdate()}update(i){this.updateRequested=!1,this._attached&&this._graphicStore.updateLevel(i.state.resolution)}pushUpdate(){this._pushUpdate()}_pushUpdate(){te(this._commandQueue.push({type:"update"}))}async _update(){try{_("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);const i=await this._graphicStore.update(this.graphics,t=>this._getSymbolForGraphic(t),t=>this._ensureSymbolResource(t));for(const t of i.updated)this.container.restartAnimation(t.objectId);if(!i.hasAnyUpdate())return void this._attributeStore.sendUpdates();i.removed.length&&(this._cleanupRequired=!0),_("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`,i);const e=this._createTileMessages(i);await this._fetchResources(e),this._write(e);for(const t of i.added)this._setFilterState(t);for(const t of i.updated)this._setFilterState(t);_("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`,i),this._attributeStore.sendUpdates(),_("esri-2d-update-debug")&&console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`,i)}catch{}this._cleanupSharedResources()}_createTileMessages(i){const e=new Map;for(const t of i.added){const s=this.view.graphicsTileStore.getIntersectingTiles(t.bounds);for(const r of s)v.getOrCreate(r,e,this._metadata).append(t)}for(const t of i.updated){const s=this.view.graphicsTileStore.getIntersectingTiles(t.prevBounds),r=this.view.graphicsTileStore.getIntersectingTiles(t.bounds);for(const o of s)v.getOrCreate(o,e,this._metadata).removed.push(t.displayId);for(const o of r)v.getOrCreate(o,e,this._metadata).append(t)}for(const t of i.removed){const s=this.view.graphicsTileStore.getIntersectingTiles(t.bounds);for(const r of s)v.getOrCreate(r,e,this._metadata).removed.push(t.displayId)}return Array.from(e.values())}async _fetchResources(i){for(const{tile:e,reader:t}of i){_("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${e.id}] GraphicsView fetchResources`,i);const s=t.getCursor();for(;s.next();)for(const r of s.getMeshWriters())r.enqueueRequest(this._resourceProxy,s,e.createArcadeEvaluationOptions(this.view.timeZone))}await this._resourceProxy.fetchEnqueuedResources()}_write(i){for(const e of i){_("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${e.tile.id}] GraphicsView write`,e);const t=this._writeMeshes(e);let s=this._tiles.get(e.tile.key);s||(s=this._createFeatureTile(e.tile.key)),_("esri-2d-update-debug")&&console.debug(`Id[${this.layerId}] Tile[${e.tile.id}] GraphicsView onTileData`,e),this.container.onTileData(s,{type:"update",modify:t,remove:e.removed,end:!1,attributeEpoch:this._attributeStore.epoch,objectIdMap:e.objectIdMap}),this.container.requestRender()}}_writeMeshes(i){const e=new Me(i.tile.id),t=i.reader.getCursor();for(;t.next();){e.entityStart(t.getDisplayId(),t.getZOrder());for(const s of t.getMeshWriters())s.write(e,this._resourceProxy,t,i.tile.createArcadeEvaluationOptions(this.view.timeZone),i.tile.level);e.entityEnd()}return{...e.serialize().message,tileId:i.tile.id}}_setFilterState(i){const e=i.displayId,t=this._attributeStore.getHighlightFlags(i.objectId);this._attributeStore.setData(e,0,0,t|(i.visible?fe:0))}_getSymbolForGraphic(i){return i.symbol!=null?i.symbol:this._effectiveRenderer!=null?this._effectiveRenderer.getSymbol(i):this._getNullSymbol(i)}async _ensureSymbolResource(i){if(!i.symbol)return;const e=await this._getSymbolInfo(i.symbol);if(!e)return;const t=e.linearCIM.filter(s=>s.type==="text");if(t.length>0){const s=await this._getTextResources(i,t);i.symbolResource={symbolInfo:e,textInfo:s}}else i.symbolResource={symbolInfo:e}}_getSymbolInfo(i){const e=i.hash();return this._hashToSymbolInfo.has(e)||this._hashToSymbolInfo.set(e,this._createSymbolInfo(e,i).catch(t=>null)),this._hashToSymbolInfo.get(e)}async _createSymbolInfo(i,e){const t=await this._convertToCIMSymbol(e),s=await this._createLinearCIM(t);return{hash:i,cimSymbol:t,linearCIM:s,meshWriters:await this._createMeshWriters(t,s)}}async _convertToCIMSymbol(i){const e=ue(i);return e.type==="web-style"?(await e.fetchCIMSymbol()).data:e}async _createLinearCIM(i){return await Promise.all(pe.fetchResources(i.symbol,this._cimResourceManager,[])),this.view.stage.cimAnalyzer.analyzeSymbolReference(i,!1)}async _createMeshWriters(i,e){se(this._controller.signal);const t=this.container.instanceStore,s=this.view.stage.meshWriterRegistry,r=await Ze(i,e,t);return Promise.all(r.map(o=>s.createMeshWriter(this._storage,this._resourceProxy,{tileInfo:this.view.featuresTilingScheme.tileInfo},o)))}_onTileUpdate(i){if(i.added&&i.added.length>0)for(const e of i.added)this._updateTracking.addPromise(this._addTile(e));if(i.removed&&i.removed.length>0)for(const e of i.removed)this._removeTile(e.key)}_createFeatureTile(i){const e=this.view.featuresTilingScheme.getTileBounds(g(),i),t=this.view.featuresTilingScheme.getTileResolution(i.level),s=new be(i,t,e[0],e[3]);return this._tiles.set(i,s),this.container.addChild(s),s}async _addTile(i){if(!this._attached)return;const e=this._graphicStore.queryItems(i);if(!e.length)return;const t=this._createFeatureTile(i.key),s=v.fromItems(i,e,this._metadata);await this._fetchResources([s]);const r=this._writeMeshes(s);t.onMessage({type:"append",append:r,clear:!1,end:!0,attributeEpoch:this._attributeStore.epoch,objectIdMap:s.objectIdMap})}_removeTile(i){if(!this._tiles.has(i))return;const e=this._tiles.get(i);this.container.removeChild(e),e.destroy(),this._tiles.delete(i)}_getNullSymbol(i){const e=i.geometry;return ie(e)?re:oe(e)||A(e)?ae:this.defaultPointSymbolEnabled?ne:null}async _getTextResources(i,e){const t=new Array,s=new Array;for(let n=0;n<e.length;n++){const l=e[n],{resource:d,overrides:h}=l.textRasterizationParam;if(h?.length>0){const c=me.resolveSymbolOverrides({type:"CIMSymbolReference",primitiveOverrides:h,symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,size:d.symbol.height,anchorPointUnits:"Relative",frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{x:0,y:0},symbol:d.symbol,textString:d.textString}],scaleSymbolsProportionally:!0,respectFrame:!0}]}},i,this.view.spatialReference,null,q(i.projectedGeometry),null,null);c.then(u=>{const f=u.symbolLayers[0],{textString:b}=f.markerGraphics[0];s.push({type:"cim-rasterization-info",resource:{type:"text",textString:b||"",font:d.font}}),l.text=d.textString=b||""}),t.push(c)}else s.push({type:"cim-rasterization-info",resource:d})}t.length>0&&await Promise.all(t);const r=s.map(n=>this.view.stage.textureManager.rasterizeItem(n)),o=await Promise.all(r);he(o);const a=new Map;for(let n=0;n<e.length;n++){const l=e[n];a.set(l.textRasterizationParam.resource.symbol,{text:l.text,glyphMosaicItems:o[n]})}return a}_cleanupSharedResources(){if(!this._cleanupRequired)return;const i=performance.now();if(i-this._lastCleanup<5e3)return;this._cleanupRequired=!1,this._lastCleanup=i;const e=new Set;for(const s of this._graphicStore.items()){const r=s.symbolResource?.symbolInfo.hash;e.add(r)}const t=new Set(this._hashToSymbolInfo.keys());for(const s of t.values())e.has(s)||this._hashToSymbolInfo.delete(s)}};m([y()],p.prototype,"_effectiveRenderer",null),m([y({constructOnly:!0})],p.prototype,"layerId",void 0),m([y({constructOnly:!0})],p.prototype,"requestUpdateCallback",void 0),m([y()],p.prototype,"container",void 0),m([y({constructOnly:!0})],p.prototype,"graphics",void 0),m([y()],p.prototype,"renderer",void 0),m([y()],p.prototype,"_updateTracking",void 0),m([y()],p.prototype,"updating",null),m([y()],p.prototype,"view",void 0),m([y()],p.prototype,"updateRequested",void 0),m([y()],p.prototype,"defaultPointSymbolEnabled",void 0),p=m([de("esri.views.2d.layers.graphics.GraphicsView2D")],p);const Ne=p;export{Ne as F};
