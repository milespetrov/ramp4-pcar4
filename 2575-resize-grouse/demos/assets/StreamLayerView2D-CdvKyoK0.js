import{q as i,u as n,C as c,aG as m,s as u,eQ as d,aJ as l}from"./main-BGj2Vmyg.js";import{d as h}from"./FeatureSet-DGRSrUkU.js";import{n as y,r as _}from"./FeatureLayerView2D-CanleOKw.js";import g from"./FeatureFilter-Jfurx3f2.js";import"./preload-helper-ExcqyqRp.js";import"./Field-i4Jg3Z1x.js";import"./fieldType-sLYa_9iX.js";import"./compilerUtils-BnnckCN9.js";import"./Container-uhYzDeT-.js";import"./MapView-Dug0f1SO.js";import"./Cyclical-D6ij0mzy.js";import"./CollectionFlattener-DHSn4jAP.js";import"./workers-Bb_uDk6b.js";import"./projection-DadsGrbR.js";import"./projectBuffer-Br_Qcvde.js";import"./TileInfo-D3v10Wu4.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-CXQSWkLk.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DSOVLbAL.js";import"./signal-CZ4tLzmI.js";import"./Map-CVpNT7he.js";import"./Basemap-CswtVP6N.js";import"./loadAll-Co19c1Pf.js";import"./PortalItem-BB4_ludu.js";import"./writeUtils-Cej_Eixa.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BuXnPPlc.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DbTVcIRQ.js";import"./Layer-CY_Hxdt1.js";import"./TimeExtent-BdbMsmac.js";import"./GraphicsCollection-DPUSRGFd.js";import"./HeightModelInfo-CjofjTeq.js";import"./ReactiveMap-C-Hhzj0M.js";import"./Query-4tc89DuT.js";import"./arcgisLayerUrl-C4kEfi67.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DSoOw-8j.js";import"./TileKey-B2ysFL-3.js";import"./QueueProcessor-gXCYVpXE.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-DK_KPKbR.js";import"./normalizeUtilsCommon-DfFmDnqc.js";import"./utils-B4IF5dtK.js";import"./utils-CmX58Wwu.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-LJwFCXyp.js";import"./vec32-DbnKtPMD.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-pYyZ82Ki.js";import"./imageUtils-OLcCm5fI.js";import"./capabilities-A2uoe7dc.js";import"./Version-2DaCUQ7l.js";import"./ColorBackground-BFKvzjN4.js";import"./parser-BNBY4Fd_.js";import"./featureConversionUtils-BUHk7l3T.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./timeSupport-gI2LupQN.js";import"./LayerView-D6kDsc-Q.js";import"./layerViewUtils-BJiEbaoH.js";import"./TechniqueInstance-jdkpb3zr.js";import"./UpdateTracking2D-71akDl-3.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-DRTFTLKA.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BKzFZKhG.js";import"./Program-DIL9P27o.js";import"./BufferObject-CfEeEiCj.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-Db6WUt3n.js";import"./WGLContainer-Qlz6gv92.js";import"./VertexArrayObject-CwZtpbuh.js";import"./ProgramTemplate-CdpeIZOM.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DbluzOiB.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-DPfd-wrO.js";import"./CircularArray-CujHzHWW.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./OrderByInfo-Bicg6BFe.js";import"./labelingInfo-CeC91UW8.js";import"./labelUtils-CXaHMXQ2.js";import"./heatmapUtils-1oBFLmZp.js";import"./SDFHelper-DotQZNa3.js";import"./floatRGBA-CD-AtT9Y.js";import"./HighlightCounter-Czi-fdpx.js";import"./FeatureEffect-DEamnRcr.js";import"./jsonUtils-D6DJcNNk.js";import"./floorFilterUtils-DKzVzLpH.js";import"./popupUtils-anoinJXF.js";import"./RefreshableLayerView-DvEuP9R6.js";const f=t=>{let e=class extends t{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return i([n()],e.prototype,"_isUserPaused",void 0),i([n({readOnly:!0})],e.prototype,"connectionStatus",null),i([n({type:g})],e.prototype,"filter",void 0),e=i([c("esri.views.layers.StreamLayerView")],e),e};let s=class extends f(_){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([m(()=>this.layer.customParameters,async t=>{(await this.getWorker()).streamMessenger.updateCustomParameters(t)}),this.layer.on("send-message-to-socket",async t=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(t)}),this.layer.on("send-message-to-client",async t=>{(await this.getWorker()).streamMessenger.sendMessageToClient(t),this._isUserPaused&&"type"in t&&t.type==="clear"&&this.incrementSourceRefreshVersion()}),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new u("stream-controller",this.pipelineErrorString):null}on(t,e){if(Array.isArray(t))return d(t.map(o=>this.on(o,e)));const r=["data-received","message-received"].includes(t);r&&this.getWorker().then(o=>o.streamMessenger.enableEvent(t,!0));const a=super.on(t,e),p=this;return l(()=>{a.remove(),r&&(p._workerProxy.closed||p.hasEventListener(t)||p.getWorker().then(o=>o.streamMessenger.enableEvent(t,!1)))})}async queryLatestObservations(t,e){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new u("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const r=await this.getWorker();return y(r.features.executeQueryForLatestObservations(this._cleanUpQuery(t),e).then(a=>{const p=h.fromJSON(a);return p.features.forEach(o=>{o.layer=this.layer,o.sourceLayer=this.layer}),p}),new h({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(t=>t.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(t=>t.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(t=>t.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const t=super._createClientOptions(),e=this;return{...t,get container(){return e.featureContainer},setProperty:r=>{this.set(r.propertyName,r.value)}}}};i([n()],s.prototype,"pipelineConnectionStatus",void 0),i([n()],s.prototype,"pipelineErrorString",void 0),i([n({readOnly:!0})],s.prototype,"connectionError",null),i([n({readOnly:!0})],s.prototype,"_streamConnectionStatus",null),s=i([c("esri.views.2d.layers.StreamLayerView2D")],s);const fe=s;export{fe as default};
