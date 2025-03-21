import{V as m,cU as u,bT as h,aJ as g,aG as c,q as n,u as d,C as _}from"./main-DCUo5ucN.js";import{n as w}from"./CollectionFlattener-D97FBIaW.js";import{c as y,y as f,C as k,T as M,j as V,S as F,w as G}from"./Stop-DqiIGag9.js";import{j as I,y as v}from"./LayerView-CkE_m7oE.js";import{t as H}from"./GraphicContainer-BkUrjowd.js";import{F as C}from"./GraphicsView2D-CMWlg_Qu.js";import"./preload-helper-ExcqyqRp.js";import"./Container-RT-cvqhS.js";import"./MapView-DqOfjHTQ.js";import"./Cyclical-BQULVqLE.js";import"./workers-DXe5Yesm.js";import"./projection-9wSOojrC.js";import"./projectBuffer-CWdhG1s6.js";import"./TileInfo-CnxweRcW.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-B5U1aICM.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BqPfRcEg.js";import"./signal-BdtRNBYI.js";import"./Map-Nu4h3foB.js";import"./Basemap-BkppVmkQ.js";import"./loadAll-9QglhM1r.js";import"./PortalItem-CrAmt9yr.js";import"./writeUtils-CGzXCOmc.js";import"./compilerUtils-CS06WLCJ.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CYCw_qqb.js";import"./common-DQOJ18NT.js";import"./TablesMixin-BKLz8smb.js";import"./Layer-Cf6p-iG3.js";import"./TimeExtent-Bij4_KtL.js";import"./GraphicsCollection-S2x4TD4N.js";import"./HeightModelInfo-BLvW8_q5.js";import"./ReactiveMap-g8BnjFTk.js";import"./Query-2QTgerv4.js";import"./Field-BxizIpsM.js";import"./fieldType-s1fg9hmT.js";import"./arcgisLayerUrl-nx2Aa-SC.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-DjNPXLdp.js";import"./TileKey-CGYro60U.js";import"./QueueProcessor-DBoXWPeh.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-sOvjrTA6.js";import"./normalizeUtilsCommon-DB6g69Ft.js";import"./utils-jGCJAqNu.js";import"./utils-DFjrWr6A.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-kIx7Ig8S.js";import"./vec32-DffARRnd.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-D3Z3S7qe.js";import"./imageUtils-i-T5D4H0.js";import"./capabilities-A2uoe7dc.js";import"./Version-CnwNqzgG.js";import"./ColorBackground-AST-PgJz.js";import"./parser-C3Rrvfda.js";import"./layerViewUtils-Bbi3h-Sa.js";import"./AGraphicContainer-DTZhbipc.js";import"./TechniqueInstance-M8RnsMVH.js";import"./UpdateTracking2D-DRxVCfmD.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-BBE8KvYW.js";import"./enums-CmIX1y88.js";import"./utils-QWndGYJy.js";import"./Rect-CUzevAry.js";import"./LabelMetric-XbgD3xoK.js";import"./Program-AhjI1OWa.js";import"./BufferObject-DKG5SiM0.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./TileContainer-DzXRAAiu.js";import"./WGLContainer-D5vIJAM8.js";import"./VertexArrayObject-BrfmTaQM.js";import"./ProgramTemplate-BGs4ll7v.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./featureConversionUtils-D5NOYIiA.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureCommandQueue-dIMHP2Z6.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-Dz_vbebf.js";import"./FieldsIndex-DHv2VH2J.js";import"./UnknownTimeZone-DL_XJCWm.js";import"./OverrideHelper-CFUjtnIj.js";import"./colorUtils-CAJ1jLCH.js";import"./quantizationUtils-TdqxBSAG.js";import"./AttributeStore-TiW15Bz9.js";import"./TimeOnly-BbRQARDF.js";import"./timeSupport-Cm9hBzHA.js";import"./queryUtils-QoswTkvr.js";import"./json-Wa8cmqdu.js";import"./labelUtils-DhC8RgxU.js";import"./diffUtils-Dz9qnzke.js";import"./normalizeUtilsSync-yQLA3Yen.js";const U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],s={graphic:null,property:null,oldValue:null,newValue:null};function l(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof F||t instanceof G}function b(t){return m.isCollection(t)&&t.length&&l(t.at(0))}function $(t){return Array.isArray(t)&&t.length>0&&l(t[0])}const T=new Set(["default"]);let p=class extends I(v){constructor(){super(...arguments),this._graphics=new m,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new w({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new m([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,i){return this._graphicsView.hitTest(t).filter(({popupTemplate:r})=>!!r)}highlight(t){let i;i=l(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(e=>this._getNetworkFeatureUid(e)):b(t)?t.map(e=>this._getNetworkFeatureUid(e)).toArray():[t.uid];const r=i.filter(h);return r.length?(this._addHighlight(r),g(()=>this._removeHighlight(r))):g()}async hitTest(t,i){if(this.suspended)return null;const r=this._graphicsView.hitTest(t).filter(h).map(o=>this._networkGraphicMap.get(o));if(!r.length)return null;const{layer:e}=this;return r.reverse().map(o=>({type:"route",layer:e,mapPoint:t,networkFeature:o}))}isUpdating(){return this._graphicsView.updating}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i);this._highlightIds.set(i,r+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),r=new H(t.featuresTilingScheme);this._graphicsView=new C({container:r,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(r),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return U.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i)-1;r===0?this._highlightIds.delete(i):this._highlightIds.set(i,r)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(i=>{const r=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(r),r}));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map(i=>{const r=this._createGraphic(i);return r.symbol==null?null:(this._networkFeatureMap.set(i,r),this._networkGraphicMap.set(r,i),r)}).filter(h));for(const i of t.added)this.addHandles([c(()=>i.geometry,(r,e)=>{this._updateGraphic(i,"geometry",r,e)}),c(()=>i.symbol,(r,e)=>{this._updateGraphic(i,"symbol",r,e)})],i);this._graphics.sort((i,r)=>this._getDrawOrder(i)-this._getDrawOrder(r))}}_updateGraphic(t,i,r,e){if(!this._networkFeatureMap.has(t)){const a=this._createGraphic(t);return this._networkFeatureMap.set(t,a),this._networkGraphicMap.set(a,t),void this._graphics.add(a)}const o=this._networkFeatureMap.get(t);o[i]=r,s.graphic=o,s.property=i,s.oldValue=e,s.newValue=r,this._graphicsView.graphicUpdateHandler(s)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),i=this._getHighlightBits(T);this._graphicsView.setHighlight(t.map(r=>({objectId:r,highlightFlags:i})))}};n([d()],p.prototype,"_graphics",void 0),n([d()],p.prototype,"_routeItems",null),p=n([_("esri.views.2d.layers.RouteLayerView2D")],p);const $i=p;export{$i as default};
