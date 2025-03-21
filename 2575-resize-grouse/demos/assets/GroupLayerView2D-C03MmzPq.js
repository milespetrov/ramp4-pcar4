import{q as t,u as a,c_ as n,C as h,V as m,aG as l,aB as o,cZ as d}from"./main-BGj2Vmyg.js";import{y as V,j as w}from"./LayerView-D6kDsc-Q.js";import"./preload-helper-ExcqyqRp.js";import"./Container-uhYzDeT-.js";import"./MapView-Dug0f1SO.js";import"./Cyclical-D6ij0mzy.js";import"./CollectionFlattener-DHSn4jAP.js";import"./workers-Bb_uDk6b.js";import"./projection-DadsGrbR.js";import"./projectBuffer-Br_Qcvde.js";import"./TileInfo-D3v10Wu4.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-CXQSWkLk.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DSOVLbAL.js";import"./signal-CZ4tLzmI.js";import"./Map-CVpNT7he.js";import"./Basemap-CswtVP6N.js";import"./loadAll-Co19c1Pf.js";import"./PortalItem-BB4_ludu.js";import"./writeUtils-Cej_Eixa.js";import"./compilerUtils-BnnckCN9.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BuXnPPlc.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DbTVcIRQ.js";import"./Layer-CY_Hxdt1.js";import"./TimeExtent-BdbMsmac.js";import"./GraphicsCollection-DPUSRGFd.js";import"./HeightModelInfo-CjofjTeq.js";import"./ReactiveMap-C-Hhzj0M.js";import"./Query-4tc89DuT.js";import"./Field-i4Jg3Z1x.js";import"./fieldType-sLYa_9iX.js";import"./arcgisLayerUrl-C4kEfi67.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DSoOw-8j.js";import"./TileKey-B2ysFL-3.js";import"./QueueProcessor-gXCYVpXE.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-DK_KPKbR.js";import"./normalizeUtilsCommon-DfFmDnqc.js";import"./utils-B4IF5dtK.js";import"./utils-CmX58Wwu.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-LJwFCXyp.js";import"./vec32-DbnKtPMD.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-pYyZ82Ki.js";import"./imageUtils-OLcCm5fI.js";import"./capabilities-A2uoe7dc.js";import"./Version-2DaCUQ7l.js";import"./ColorBackground-BFKvzjN4.js";import"./parser-BNBY4Fd_.js";import"./layerViewUtils-BJiEbaoH.js";let r=class extends V{constructor(i){super(i),this.type="group",this.layerViews=new m}destroy(){this.layerViews.length=0}_allLayerViewVisibility(i){this.layerViews.forEach(e=>{e.visible=i})}initialize(){this.addHandles([this.layerViews.on("change",i=>this._layerViewsChangeHandler(i)),l(()=>this.layer?.visibilityMode,()=>{this.layer&&this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(null))},o),l(()=>this.visible,i=>{this._applyVisibility(()=>this._allLayerViewVisibility(i),()=>{})},o)],"grouplayerview"),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]})}get creatingLayerViews(){return this.view?.layerViewManager?.isCreatingLayerViewsForLayer(this.layer)??!1}set layerViews(i){this._set("layerViews",d(i,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((i,e)=>i+e.updatingProgress,0)/this.layerViews.length}isUpdating(){return this.creatingLayerViews||this.layerViews.some(i=>i.updating)}_hasLayerViewVisibleOverrides(){return this.layerViews.some(i=>i._isOverridden("visible"))}_findLayerViewForLayer(i){return i&&this.layerViews.find(e=>e.layer===i)}_firstVisibleOnLayerOrder(){const i=this.layer.layers.find(e=>!!this._findLayerViewForLayer(e)?.visible);return i&&this._findLayerViewForLayer(i)}_applyExclusiveVisibility(i){i==null&&(i=this._firstVisibleOnLayerOrder())==null&&this.layerViews.length>0&&(i=this._findLayerViewForLayer(this.layer.layers.at(0))),this.layerViews.forEach(e=>{e.visible=e===i})}_layerViewsChangeHandler(i){this.removeHandles("grouplayerview:visible"),this.addHandles(this.layerViews.map(s=>l(()=>s.visible,y=>this._applyVisibility(()=>{y!==this.visible&&(s.visible=this.visible)},()=>this._applyExclusiveVisibility(y?s:null)),o)).toArray(),"grouplayerview:visible");const e=i.added[i.added.length-1];this._applyVisibility(()=>this._allLayerViewVisibility(this.visible),()=>this._applyExclusiveVisibility(e?.visible?e:null))}_applyVisibility(i,e){this._hasLayerViewVisibleOverrides()&&(this.layer?.visibilityMode==="inherited"?i():this.layer?.visibilityMode==="exclusive"&&e())}};t([a({readOnly:!0})],r.prototype,"creatingLayerViews",null),t([a({cast:n})],r.prototype,"layerViews",null),t([a({readOnly:!0})],r.prototype,"updatingProgress",null),t([a()],r.prototype,"view",void 0),r=t([h("esri.views.layers.GroupLayerView")],r);const u=r;let p=class extends w(u){attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(i){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};p=t([h("esri.views.2d.layers.GroupLayerView2D")],p);const fi=p;export{fi as default};
