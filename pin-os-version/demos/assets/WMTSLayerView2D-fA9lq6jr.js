import{bj as l,H as c,n as y,q as u,u as w,C as g}from"./main-DCUo5ucN.js";import{r as I,n as f}from"./imageUtils-3a48cvE5.js";import{j as S,y as T}from"./LayerView-CkE_m7oE.js";import{h as V,p as v,r as x}from"./Tile-DjNPXLdp.js";import{e as d}from"./TileKey-CGYro60U.js";import{i as q}from"./RefreshableLayerView-BtQ3us22.js";import{g as M}from"./Scheduler-kIx7Ig8S.js";import"./preload-helper-ExcqyqRp.js";import"./MapView-DqOfjHTQ.js";import"./Cyclical-BQULVqLE.js";import"./CollectionFlattener-D97FBIaW.js";import"./workers-DXe5Yesm.js";import"./projection-9wSOojrC.js";import"./projectBuffer-CWdhG1s6.js";import"./TileInfo-CnxweRcW.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-B5U1aICM.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BqPfRcEg.js";import"./signal-BdtRNBYI.js";import"./Map-Nu4h3foB.js";import"./Basemap-BkppVmkQ.js";import"./loadAll-9QglhM1r.js";import"./PortalItem-CrAmt9yr.js";import"./writeUtils-CGzXCOmc.js";import"./compilerUtils-CS06WLCJ.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CYCw_qqb.js";import"./common-DQOJ18NT.js";import"./TablesMixin-BKLz8smb.js";import"./Layer-Cf6p-iG3.js";import"./TimeExtent-Bij4_KtL.js";import"./GraphicsCollection-S2x4TD4N.js";import"./HeightModelInfo-BLvW8_q5.js";import"./ReactiveMap-g8BnjFTk.js";import"./Query-2QTgerv4.js";import"./Field-BxizIpsM.js";import"./fieldType-s1fg9hmT.js";import"./arcgisLayerUrl-nx2Aa-SC.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./normalizeUtils-sOvjrTA6.js";import"./normalizeUtilsCommon-DB6g69Ft.js";import"./utils-jGCJAqNu.js";import"./utils-DFjrWr6A.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./vec32-DffARRnd.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-D3Z3S7qe.js";import"./imageUtils-i-T5D4H0.js";import"./capabilities-A2uoe7dc.js";import"./Version-CnwNqzgG.js";import"./ColorBackground-AST-PgJz.js";import"./Bitmap-D2L03qFG.js";import"./Container-RT-cvqhS.js";import"./parser-C3Rrvfda.js";import"./WGLContainer-D5vIJAM8.js";import"./LabelMetric-XbgD3xoK.js";import"./enums-CmIX1y88.js";import"./Program-AhjI1OWa.js";import"./BufferObject-DKG5SiM0.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-BrfmTaQM.js";import"./ProgramTemplate-BGs4ll7v.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-D5NOYIiA.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./TileContainer-DzXRAAiu.js";import"./layerViewUtils-Bbi3h-Sa.js";import"./QueueProcessor-DBoXWPeh.js";import"./quickselect-QQC62dOK.js";const R=[0,0];let r=class extends q(I(S(T))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const{activeLayer:t}=this.layer,{tileMatrixSet:e}=t;if(e&&l(e.tileInfo?.spatialReference,this.view.spatialReference))return e;const i=this._getTileMatrixSetBySpatialReference(t);return i&&i.id!==t.tileMatrixSetId?(t.tileMatrixSetId=i.id,i):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){const t=this.tileMatrixSet?.tileInfo;t&&(this._tileInfoView=new V(t),this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:16,process:(e,i)=>this.fetchTile(e,i),scheduler:this.scheduler,priority:M.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new x({cachePolicy:"keep",resampling:!0,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach(),this._tileStrategy?.destroy(),this._fetchQueue?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.activeLayer.tileMatrixSets?.some(e=>l(e.tileInfo?.spatialReference,t))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(R,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:p=0}=e;if(!i)return this._fetchImage(t,s);const o=new d(0,0,0,0);let h;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:s}),h=await this._fetchImage(o,s)}catch(a){if(c(a))throw a;if(p<3){const m=this._tileInfoView.getTileParentId(t.id);if(m){const n=new d(m),_=await this.fetchTile(n,{...e,resamplingLevel:p+1});return f(this._tileInfoView,_,n,t)}}throw a}return f(this._tileInfoView,h,o,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||y.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){return t.tileMatrixSets?.find(e=>l(e.tileInfo?.spatialReference,this.view.spatialReference))}};u([w({readOnly:!0})],r.prototype,"tileMatrixSet",null),r=u([g("esri.views.2d.layers.WMTSLayerView2D")],r);const te=r;export{te as default};
