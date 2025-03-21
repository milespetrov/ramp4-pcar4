import{k as a,o as n,A as x,aD as R,E as f,n as b,b1 as _,dA as F,au as V,aE as P,f1 as I,U as T,bn as U,s as C,D as $,bv as E,az as S,V as D,aH as q,a$ as L}from"./main-sNoC4iWN.js";import{c as M}from"./GraphicsCollection-BPs2Frkb.js";import{d as O,f as H,a as j}from"./RasterVFDisplayObject-Du6LGhLq.js";import{j as N,y as G}from"./LayerView-I2gEHxnm.js";import{F as J}from"./GraphicsView2D-Cpe8BHmY.js";import{h as W}from"./HighlightGraphicContainer-CSy_Ncey.js";import{M as K,m as Q,f as X}from"./dataUtils-BKYxpGMG.js";import{a as Y}from"./BitmapContainer-dSkKAvs9.js";import{n as Z}from"./Container-iGbcqjFX.js";import{l as ee}from"./Bitmap-DWjmEA0U.js";import{_ as te}from"./ExportStrategy-IC4qH28_.js";import{K as ie}from"./rasterProjectionHelper-B8tLhdpz.js";import{E as B}from"./MapView-B1AP-WIK.js";import{n as re}from"./WGLContainer-D5C1YFsA.js";import{i as ae}from"./timeSupport-B8rL4X2_.js";import{b as se}from"./Query-Cx0mBhxq.js";import{p as ne}from"./popupUtils-BEmjQdhi.js";import{i as oe}from"./RefreshableLayerView-CItyDi4a.js";let h=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new Z,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Y}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{f(t)||b.getLogger(this).error(t)})}hitTest(e){return new _({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new te({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:t.extent}}).catch(e=>{f(e)||b.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(t)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),r=K(i,t);return r!=null?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,t,i,r);if(s.imageBitmap)return s.imageBitmap;const o=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),l=new ee(o.pixelBlock,o.extent?.clone(),s.pixelData.pixelBlock);return l.filter=m=>this.layer.applyFilter(m),l}};a([n()],h.prototype,"attached",void 0),a([n()],h.prototype,"container",void 0),a([n()],h.prototype,"layer",void 0),a([n()],h.prototype,"strategy",void 0),a([n()],h.prototype,"timeExtent",void 0),a([n()],h.prototype,"view",void 0),a([n()],h.prototype,"updateRequested",void 0),a([n()],h.prototype,"updating",null),a([n()],h.prototype,"type",void 0),h=a([x("esri.views.2d.layers.imagery.ImageryView2D")],h);const le=h;class he extends re{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[O],target:()=>this.children,drawPhase:B.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===B.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}let y=class extends R{constructor(e){super(e),this._loading=null,this.update=F((t,i)=>this._update(t,i).catch(r=>{f(r)||b.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:s}=e.state,o=new V({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:s}),[l,m]=e.state.size;this._loading=this.fetchPixels(o,l,m,i);const p=await this._loading;this._addToDisplay(p,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(e.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:s}=e,o=new H(s);o.offset=[0,0],o.symbolizerParameters=t,o.rawPixelData=e,o.invalidateVAO(),o.x=r.xmin,o.y=r.ymax,o.pixelRatio=i.pixelRatio,o.rotation=i.rotation,o.resolution=i.resolution,o.width=s.width*t.symbolTileSize,o.height=s.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(o)}};a([n()],y.prototype,"fetchPixels",void 0),a([n()],y.prototype,"container",void 0),a([n()],y.prototype,"_loading",void 0),a([n()],y.prototype,"updating",null),y=a([x("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const ce=y;let c=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new he,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const s=await this._projectFullExtentPromise,{symbolTileSize:o}=this.layer.renderer,{extent:l,width:m,height:p}=Q(e,t,i,o,s);if(s!=null&&!s.intersects(e))return{extent:l,pixelBlock:null};const d={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(d)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===d.bbox)return u}const{pixelData:v}=await this.layer.fetchImage(l,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=d;const g=v?.pixelBlock;return g==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?X(g,"vector-uv"):g}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new ce({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(P(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),I),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const e=this.container.children[0]?.rawPixelData;if(this.updating||!e)return null;const{extent:t,pixelBlock:i}=e;return{extent:t,pixelBlock:i}}hitTest(e){return new _({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams).catch(t=>{f(t)||b.getLogger(this).error(t)})}redraw(){const{renderer:e}=this.layer;e&&(this._updateSymbolizerParams(e),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&i&&r&&s}async _getProjectedFullExtent(e){try{return ie(this.layer.fullExtent,e)}catch{try{const t=(await T(this.layer.url,{query:{option:"footprints",outSR:U(e),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?V.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};a([n()],c.prototype,"attached",void 0),a([n()],c.prototype,"container",void 0),a([n()],c.prototype,"layer",void 0),a([n()],c.prototype,"timeExtent",void 0),a([n()],c.prototype,"type",void 0),a([n()],c.prototype,"view",void 0),a([n()],c.prototype,"updating",null),c=a([x("esri.views.2d.layers.imagery.VectorFieldView2D")],c);const pe=c,de=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){return ae(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,r){const{layer:s}=this;if(!i)throw new C("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:o}=s,l=ne(s,r);if(!o||l==null)return[];const m=await l.getRequiredFields();$(r);const p=new se;p.timeExtent=this.timeExtent,p.geometry=i,p.outFields=m,p.outSpatialReference=i.spatialReference;const{resolution:d,spatialReference:v}=this.view,g=this.view.type==="2d"?new E(d,d,v):new E(.5*d,.5*d,v),{returnTopmostRaster:u,showNoDataRecords:k}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},z={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:g,showNoDataRecords:k,signal:r?.signal};return s.queryVisibleRasters(p,z).then(A=>A)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return a([n()],t.prototype,"layer",void 0),a([n()],t.prototype,"suspended",void 0),a([n({readOnly:!0})],t.prototype,"timeExtent",null),a([n()],t.prototype,"view",void 0),t=a([x("esri.views.layers.ImageryLayerView")],t),t};let w=class extends de(oe(N(G))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new M,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}update(e){this.subview?.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new J({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new W(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([P(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},S),P(()=>this.timeExtent,e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch())},S),this.layer.on("redraw",()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch())}),P(()=>this.layer.renderer,()=>this._setSubView())])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:D.isCollection(e)?e.at(0):e)instanceof _))return q();let i=[];return Array.isArray(e)||D.isCollection(e)?i=e.map(r=>r.clone()):e instanceof _&&(i=[e.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){const e=!this.subview||this.subview.updating||!!this._highlightView?.updating;return L("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${this._highlightView?.updating}
`),e}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if(e==="vector-field"?t="imageryVF":e==="flow"&&(t="flow"),this.subview){const{type:i}=this.subview;if(i===t)return this._attachSubview(this.subview),void(i==="flow"?this.subview.redrawOrRefetch():i==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview=t==="imagery"?new le({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):t==="imageryVF"?new pe({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new j({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0))}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};a([n()],w.prototype,"pixelData",null),a([n()],w.prototype,"subview",void 0),w=a([x("esri.views.2d.layers.ImageryLayerView2D")],w);const ue=w;export{ue as default};
