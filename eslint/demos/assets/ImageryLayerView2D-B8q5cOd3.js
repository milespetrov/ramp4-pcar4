import{q as s,u as n,C as w,aF as R,H as b,n as _,b3 as P,dD as A,aw as D,aG as f,f4 as I,U as T,bp as z,s as U,G as C,bx as V,aB as E,V as S,aJ as $,b1 as j}from"./main-QmNQNEqS.js";import{c as L}from"./GraphicsCollection-CLlztoeC.js";import{d as M,f as O,a as H}from"./RasterVFDisplayObject-BCAmPnCw.js";import{j as G,y as N}from"./LayerView-DuebiKfG.js";import{F as J}from"./GraphicsView2D-BXs5iq59.js";import{h as W}from"./HighlightGraphicContainer-fVLNZtUZ.js";import{M as K,m as Q,f as X}from"./dataUtils-CoTmVZMb.js";import{a as Y}from"./BitmapContainer-ZtkL_Nqb.js";import{n as Z}from"./Container-Bl9Ezn6r.js";import{l as tt}from"./Bitmap-iYnK8gU0.js";import{_ as et}from"./ExportStrategy-r8V3vqN0.js";import{K as it}from"./rasterProjectionHelper-DPGA__91.js";import{E as q}from"./MapView-DqsLtkR9.js";import{n as rt}from"./WGLContainer-BooIugTY.js";import{i as st}from"./timeSupport-UWdP9oN5.js";import{b as at}from"./Query-DFjH7yBj.js";import{p as ot}from"./popupUtils-BiOGj--h.js";import{i as nt}from"./RefreshableLayerView-AuF-uY0d.js";import"./preload-helper-ExcqyqRp.js";import"./BufferObject-DcVs7y80.js";import"./Texture-NuOnl3nn.js";import"./enums-Dk3osxpS.js";import"./VertexArrayObject-DCWfkpqD.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./vec2f32-BbH2jxlN.js";import"./LabelMetric-CvrHm4tV.js";import"./enums-CmIX1y88.js";import"./Program-DA8QkKp5.js";import"./layerViewUtils-BYz4Xo_v.js";import"./UpdatingHandles-B5epkKDd.js";import"./FieldsIndex-DRFAqvtR.js";import"./UnknownTimeZone-DWcmUOFp.js";import"./UpdateTracking2D-Dn3rBDkF.js";import"./BidiEngine-DNnuvc1i.js";import"./OptimizedFeature-CIptWNVu.js";import"./GeometryUtils-C_Se6ulF.js";import"./utils-QWndGYJy.js";import"./definitions-C0Jy3zs7.js";import"./Tile-CCj4Iq3B.js";import"./TileKey-CbU_IPWM.js";import"./vec2-DGVIkCvT.js";import"./QueueProcessor-CMP01AEJ.js";import"./workers-BhbmVT8N.js";import"./ReactiveMap-Br4O5HV6.js";import"./signal-BAc-IKBe.js";import"./quickselect-QQC62dOK.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-C4yWdKVH.js";import"./vec2f64-B7N_6o8F.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./OverrideHelper-BVEq_119.js";import"./colorUtils-pdvl7O3c.js";import"./quantizationUtils-UFlNjPGu.js";import"./AttributeStore-BCMrlEq5.js";import"./TimeOnly-5fUmxyC6.js";import"./timeSupport-5wmaRp5t.js";import"./featureConversionUtils-CPydNMdh.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryUtils-CRwXM59B.js";import"./projection-CdEQ04oU.js";import"./projectBuffer-CyHy69Y9.js";import"./normalizeUtils-CqwTqR1U.js";import"./normalizeUtilsCommon-BVspyIfw.js";import"./utils-DCcLhZEm.js";import"./utils-BNpRGXpT.js";import"./json-Wa8cmqdu.js";import"./labelUtils-DCrCxHm8.js";import"./diffUtils-BN-v500-.js";import"./FeatureCommandQueue-LdeosoC2.js";import"./constants-F8oTIn7N.js";import"./lengthUtils-CR348Lld.js";import"./capabilities-A2uoe7dc.js";import"./normalizeUtilsSync-ZQQ85ktT.js";import"./AGraphicContainer-ChdV0Ecc.js";import"./TechniqueInstance-Csphq7NR.js";import"./TileContainer-DenSmhG1.js";import"./vec3f32-nZdmKIgz.js";import"./parser-C8M4U3Dd.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CZFq2RiA.js";import"./TileInfo-gIHvkJbp.js";import"./TileKey-DZd6gJy7.js";import"./Cyclical-TrFBJr-z.js";import"./CollectionFlattener-DA5Xy10V.js";import"./themeUtils-CqL86E9K.js";import"./uuid-Cl5lrJ4c.js";import"./Map-CbbVQhhr.js";import"./Basemap-BnaST5XN.js";import"./loadAll-l6j5JDNf.js";import"./PortalItem-BujL5i1Z.js";import"./writeUtils-BVOOkQ5S.js";import"./compilerUtils-Dqt-znC8.js";import"./TablesMixin-C4EGEE2D.js";import"./Layer-BqEIgDmZ.js";import"./TimeExtent-elxCTyN7.js";import"./HeightModelInfo-c8Rad-V8.js";import"./arcgisLayerUrl-DgA2U4_j.js";import"./ViewingMode-HRfKv6NR.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-5vKmPR80.js";import"./vec32-4kTA8UgK.js";import"./imageUtils-RXBe3wkG.js";import"./Version-DvpGXogl.js";import"./ColorBackground-Ctk6pjzW.js";import"./ProgramTemplate-DJsxULuw.js";import"./StyleDefinition-BTt_i6C1.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./Field-CA1xhD3g.js";import"./fieldType-avF8oMgr.js";let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new Z,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Y}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,o=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new et({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:i,imageMaxWidth:o,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:i}=e;if(!i||i instanceof ImageBitmap)return;const o=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=a=>this.layer.pixelFilter?this.layer.applyFilter(a):{...o,extent:i.extent}}).catch(e=>{b(e)||_.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const i=this.view.extent,o=e.map(r=>r.source).filter(r=>r.extent&&r.extent.intersects(i)).map(r=>({extent:r.extent,pixelBlock:r.originalPixelBlock})),a=K(o,i);return a!=null?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}async _fetchImage(e,i,o,a){(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,a.returnImageBitmap=!0;const r=await this.layer.fetchImage(e,i,o,a);if(r.imageBitmap)return r.imageBitmap;const l=await this.layer.applyRenderer(r.pixelData,{signal:a.signal}),c=new tt(l.pixelBlock,l.extent?.clone(),r.pixelData.pixelBlock);return c.filter=p=>this.layer.applyFilter(p),c}};s([n()],h.prototype,"attached",void 0),s([n()],h.prototype,"container",void 0),s([n()],h.prototype,"layer",void 0),s([n()],h.prototype,"strategy",void 0),s([n()],h.prototype,"timeExtent",void 0),s([n()],h.prototype,"view",void 0),s([n()],h.prototype,"updateRequested",void 0),s([n()],h.prototype,"updating",null),s([n()],h.prototype,"type",void 0),h=s([w("esri.views.2d.layers.imagery.ImageryView2D")],h);const lt=h;class ht extends rt{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[M],target:()=>this.children,drawPhase:q.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===q.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends R{constructor(t){super(t),this._loading=null,this.update=A((e,i)=>this._update(e,i).catch(o=>{b(o)||_.getLogger(this).error(o)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:o,spatialReference:a}=t.state,r=new D({xmin:o.xmin,ymin:o.ymin,xmax:o.xmax,ymax:o.ymax,spatialReference:a}),[l,c]=t.state.size;this._loading=this.fetchPixels(r,l,c,i);const p=await this._loading;this._addToDisplay(p,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:o,pixelBlock:a}=t,r=new O(a);r.offset=[0,0],r.symbolizerParameters=e,r.rawPixelData=t,r.invalidateVAO(),r.x=o.xmin,r.y=o.ymax,r.pixelRatio=i.pixelRatio,r.rotation=i.rotation,r.resolution=i.resolution,r.width=a.width*e.symbolTileSize,r.height=a.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(r)}};s([n()],y.prototype,"fetchPixels",void 0),s([n()],y.prototype,"container",void 0),s([n()],y.prototype,"_loading",void 0),s([n()],y.prototype,"updating",null),y=s([w("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pt=y;let m=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ht,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,o)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:r}=this.layer.renderer,{extent:l,width:c,height:p}=Q(t,e,i,r,a);if(a!=null&&!a.intersects(t))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:r,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:v}=await this.layer.fetchImage(l,c,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:o});this._dataParameters=d;const g=v?.pixelBlock;return g==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?X(g,"vector-uv"):g}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pt({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),I),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{b(e)||_.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,o=this._dataParameters.symbolTileSize===t.symbolTileSize,a=this._dataParameters.bbox===t.bbox;return e&&i&&o&&a}async _getProjectedFullExtent(t){try{return it(this.layer.fullExtent,t)}catch{try{const i=(await T(this.layer.url,{query:{option:"footprints",outSR:z(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?D.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([n()],m.prototype,"attached",void 0),s([n()],m.prototype,"container",void 0),s([n()],m.prototype,"layer",void 0),s([n()],m.prototype,"timeExtent",void 0),s([n()],m.prototype,"type",void 0),s([n()],m.prototype,"view",void 0),s([n()],m.prototype,"updating",null),m=s([w("esri.views.2d.layers.imagery.VectorFieldView2D")],m);const mt=m,ct=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}get timeExtent(){return st(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,o){const{layer:a}=this;if(!i)throw new U("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:r}=a,l=ot(a,o);if(!r||l==null)return[];const c=await l.getRequiredFields();C(o);const p=new at;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=c,p.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:v}=this.view,g=this.view.type==="2d"?new V(d,d,v):new V(.5*d,.5*d,v),{returnTopmostRaster:u,showNoDataRecords:B}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:g,showNoDataRecords:B,signal:o?.signal};return a.queryVisibleRasters(p,k).then(F=>F)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return s([n()],e.prototype,"layer",void 0),s([n()],e.prototype,"suspended",void 0),s([n({readOnly:!0})],e.prototype,"timeExtent",null),s([n()],e.prototype,"view",void 0),e=s([w("esri.views.layers.ImageryLayerView")],e),e};let x=class extends ct(nt(G(N))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new L,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}update(t){this.subview?.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new J({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new W(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},E),f(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},E),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:S.isCollection(t)?t.at(0):t)instanceof P))return $();let i=[];return Array.isArray(t)||S.isCollection(t)?i=t.map(o=>o.clone()):t instanceof P&&(i=[t.clone()]),this._highlightGraphics.addMany(i),$(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){const t=!this.subview||this.subview.updating||!!this._highlightView?.updating;return j("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${t}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${this._highlightView?.updating}
`),t}_setSubView(){if(!this.view)return;const t=this.layer.renderer?.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:i}=this.subview;if(i===e)return this._attachSubview(this.subview),void(i==="flow"?this.subview.redrawOrRefetch():i==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview=e==="imagery"?new lt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new mt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new H({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t?.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};s([n()],x.prototype,"pixelData",null),s([n()],x.prototype,"subview",void 0),x=s([w("esri.views.2d.layers.ImageryLayerView2D")],x);const fi=x;export{fi as default};
