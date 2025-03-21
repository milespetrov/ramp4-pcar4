import{H as e,n as a,q as o,u as p,C as s}from"./main-BGj2Vmyg.js";import{a as n}from"./BitmapContainer-_XaboihS.js";import{j as h,y as d}from"./LayerView-D6kDsc-Q.js";import{_ as u}from"./ExportStrategy-BMQw27Ix.js";import{i as y}from"./RefreshableLayerView-DvEuP9R6.js";import"./preload-helper-ExcqyqRp.js";import"./WGLContainer-Qlz6gv92.js";import"./definitions-C0Jy3zs7.js";import"./LabelMetric-BKzFZKhG.js";import"./enums-CmIX1y88.js";import"./Texture-pYyZ82Ki.js";import"./enums-Dk3osxpS.js";import"./Program-DIL9P27o.js";import"./BufferObject-CfEeEiCj.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./vec2f32-BbH2jxlN.js";import"./VertexArrayObject-CwZtpbuh.js";import"./ProgramTemplate-CdpeIZOM.js";import"./Tile-DSoOw-8j.js";import"./common-DQOJ18NT.js";import"./TileKey-B2ysFL-3.js";import"./vec2-DGVIkCvT.js";import"./QueueProcessor-gXCYVpXE.js";import"./workers-Bb_uDk6b.js";import"./ReactiveMap-C-Hhzj0M.js";import"./signal-CZ4tLzmI.js";import"./quickselect-QQC62dOK.js";import"./Query-4tc89DuT.js";import"./Field-i4Jg3Z1x.js";import"./fieldType-sLYa_9iX.js";import"./TimeExtent-BdbMsmac.js";import"./mat3-XZDRtl20.js";import"./MapView-Dug0f1SO.js";import"./Cyclical-D6ij0mzy.js";import"./CollectionFlattener-DHSn4jAP.js";import"./projection-DadsGrbR.js";import"./projectBuffer-Br_Qcvde.js";import"./TileInfo-D3v10Wu4.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-CXQSWkLk.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DSOVLbAL.js";import"./Map-CVpNT7he.js";import"./Basemap-CswtVP6N.js";import"./loadAll-Co19c1Pf.js";import"./PortalItem-BB4_ludu.js";import"./writeUtils-Cej_Eixa.js";import"./compilerUtils-BnnckCN9.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BuXnPPlc.js";import"./TablesMixin-DbTVcIRQ.js";import"./Layer-CY_Hxdt1.js";import"./GraphicsCollection-DPUSRGFd.js";import"./HeightModelInfo-CjofjTeq.js";import"./arcgisLayerUrl-C4kEfi67.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./normalizeUtils-DK_KPKbR.js";import"./normalizeUtilsCommon-DfFmDnqc.js";import"./utils-B4IF5dtK.js";import"./utils-CmX58Wwu.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-LJwFCXyp.js";import"./vec32-DbnKtPMD.js";import"./imageUtils-OLcCm5fI.js";import"./capabilities-A2uoe7dc.js";import"./Version-2DaCUQ7l.js";import"./ColorBackground-BFKvzjN4.js";import"./vec3f32-nZdmKIgz.js";import"./Container-uhYzDeT-.js";import"./parser-BNBY4Fd_.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BUHk7l3T.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./layerViewUtils-BJiEbaoH.js";import"./Bitmap-Cn0fGV03.js";let t=class extends y(h(d)){update(r){this._strategy.update(r).catch(i=>{e(i)||a.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new u({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,m){return this.layer.fetchImageBitmap(r,i,m)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};o([p()],t.prototype,"_strategy",void 0),o([p()],t.prototype,"updating",void 0),t=o([s("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const zt=t;export{zt as default};
