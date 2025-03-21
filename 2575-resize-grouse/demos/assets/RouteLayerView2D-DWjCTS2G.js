import{V as m,cU as u,bT as h,aJ as g,aG as c,q as n,u as d,C as _}from"./main-BGj2Vmyg.js";import{n as w}from"./CollectionFlattener-DHSn4jAP.js";import{c as y,y as f,C as k,T as M,j as V,S as F,w as G}from"./Stop-CEk9RSUB.js";import{j as I,y as v}from"./LayerView-D6kDsc-Q.js";import{t as H}from"./GraphicContainer-CCHhN1j2.js";import{F as C}from"./GraphicsView2D-DeiZ8XA_.js";import"./preload-helper-ExcqyqRp.js";import"./Container-uhYzDeT-.js";import"./MapView-Dug0f1SO.js";import"./Cyclical-D6ij0mzy.js";import"./workers-Bb_uDk6b.js";import"./projection-DadsGrbR.js";import"./projectBuffer-Br_Qcvde.js";import"./TileInfo-D3v10Wu4.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-CXQSWkLk.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-DSOVLbAL.js";import"./signal-CZ4tLzmI.js";import"./Map-CVpNT7he.js";import"./Basemap-CswtVP6N.js";import"./loadAll-Co19c1Pf.js";import"./PortalItem-BB4_ludu.js";import"./writeUtils-Cej_Eixa.js";import"./compilerUtils-BnnckCN9.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BuXnPPlc.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DbTVcIRQ.js";import"./Layer-CY_Hxdt1.js";import"./TimeExtent-BdbMsmac.js";import"./GraphicsCollection-DPUSRGFd.js";import"./HeightModelInfo-CjofjTeq.js";import"./ReactiveMap-C-Hhzj0M.js";import"./Query-4tc89DuT.js";import"./Field-i4Jg3Z1x.js";import"./fieldType-sLYa_9iX.js";import"./arcgisLayerUrl-C4kEfi67.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DSoOw-8j.js";import"./TileKey-B2ysFL-3.js";import"./QueueProcessor-gXCYVpXE.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-DK_KPKbR.js";import"./normalizeUtilsCommon-DfFmDnqc.js";import"./utils-B4IF5dtK.js";import"./utils-CmX58Wwu.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-LJwFCXyp.js";import"./vec32-DbnKtPMD.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-pYyZ82Ki.js";import"./imageUtils-OLcCm5fI.js";import"./capabilities-A2uoe7dc.js";import"./Version-2DaCUQ7l.js";import"./ColorBackground-BFKvzjN4.js";import"./parser-BNBY4Fd_.js";import"./layerViewUtils-BJiEbaoH.js";import"./AGraphicContainer-lUVTVhKO.js";import"./TechniqueInstance-jdkpb3zr.js";import"./UpdateTracking2D-71akDl-3.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-DRTFTLKA.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-BKzFZKhG.js";import"./Program-DIL9P27o.js";import"./BufferObject-CfEeEiCj.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-Db6WUt3n.js";import"./WGLContainer-Qlz6gv92.js";import"./VertexArrayObject-CwZtpbuh.js";import"./ProgramTemplate-CdpeIZOM.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-BUHk7l3T.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-DbluzOiB.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-DPfd-wrO.js";import"./FieldsIndex-CECew3dZ.js";import"./UnknownTimeZone-D-G2toWx.js";import"./OverrideHelper-B4ue2Fwx.js";import"./colorUtils-CS8_2txG.js";import"./quantizationUtils-CT6OXUkG.js";import"./AttributeStore-CGRnSDze.js";import"./TimeOnly-e2WPpEqu.js";import"./timeSupport-DAD9vlgT.js";import"./queryUtils-Chbvf1YC.js";import"./json-Wa8cmqdu.js";import"./labelUtils-CXaHMXQ2.js";import"./diffUtils-Cml_tzGf.js";import"./normalizeUtilsSync-BoGNMGZS.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],s={graphic:null,property:null,oldValue:null,newValue:null};function l(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof F||t instanceof G}function b(t){return m.isCollection(t)&&t.length&&l(t.at(0))}function $(t){return Array.isArray(t)&&t.length>0&&l(t[0])}const T=new Set(["default"]);let p=class extends I(v){constructor(){super(...arguments),this._graphics=new m,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new w({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new m([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,i){return this._graphicsView.hitTest(t).filter(({popupTemplate:r})=>!!r)}highlight(t){let i;i=l(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(e=>this._getNetworkFeatureUid(e)):b(t)?t.map(e=>this._getNetworkFeatureUid(e)).toArray():[t.uid];const r=i.filter(h);return r.length?(this._addHighlight(r),g(()=>this._removeHighlight(r))):g()}async hitTest(t,i){if(this.suspended)return null;const r=this._graphicsView.hitTest(t).filter(h).map(o=>this._networkGraphicMap.get(o));if(!r.length)return null;const{layer:e}=this;return r.reverse().map(o=>({type:"route",layer:e,mapPoint:t,networkFeature:o}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i);this._highlightIds.set(i,r+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),r=new H(t.featuresTilingScheme);this._graphicsView=new C({container:r,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(r),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return U.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i)-1;r===0?this._highlightIds.delete(i):this._highlightIds.set(i,r)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(i=>{const r=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(r),r}));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map(i=>{const r=this._createGraphic(i);return r.symbol==null?null:(this._networkFeatureMap.set(i,r),this._networkGraphicMap.set(r,i),r)}).filter(h));for(const i of t.added)this.addHandles([c(()=>i.geometry,(r,e)=>{this._updateGraphic(i,"geometry",r,e)}),c(()=>i.symbol,(r,e)=>{this._updateGraphic(i,"symbol",r,e)})],i);this._graphics.sort((i,r)=>this._getDrawOrder(i)-this._getDrawOrder(r))}}_updateGraphic(t,i,r,e){if(!this._networkFeatureMap.has(t)){const a=this._createGraphic(t);return this._networkFeatureMap.set(t,a),this._networkGraphicMap.set(a,t),void this._graphics.add(a)}const o=this._networkFeatureMap.get(t);o[i]=r,s.graphic=o,s.property=i,s.oldValue=e,s.newValue=r,this._graphicsView.graphicUpdateHandler(s)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),i=this._getHighlightBits(T);this._graphicsView.setHighlight(t.map(r=>({objectId:r,highlightFlags:i})))}};n([d()],p.prototype,"_graphics",void 0),n([d()],p.prototype,"_routeItems",null),p=n([_("esri.views.2d.layers.RouteLayerView2D")],p);const $i=p;export{$i as default};
