import { e, y, k as a, dE as v$1, bq as j$1, p as s$1, j as g$2, jf as T, r as r$1, x, w, t as t$1, ey as d$1, jg as x$1, b as e$1, d6 as d$2, bp as l$1, j7 as w$1, U as U$1, fb as b$1, c as s, fM as x$2, bh as w$2, bl as i$1, e1 as U, bv as j$2 } from './main-5614000d.js';
import { m as m$2, y as y$1, h as h$1 } from './RasterVFDisplayObject-cf28c73a.js';
import { f as f$1, u as u$1 } from './LayerView-2967ceea.js';
import { a as ae } from './GraphicsView2D-30339c0a.js';
import { n } from './HighlightGraphicContainer-d0a7e86c.js';
import { a as a$1 } from './BitmapContainer-6dfa8bfc.js';
import { h } from './Container-23d4bfc5.js';
import { l } from './Bitmap-94db49a0.js';
import { v } from './ExportStrategy-2922b8e9.js';
import { J } from './rasterProjectionHelper-a73f8019.js';
import { T as T$1 } from './color-8720a063.js';
import { a as a$2 } from './WGLContainer-e7d95734.js';
import { s as s$2 } from './popupUtils-324654ef.js';
import { i } from './RefreshableLayerView-ff11c913.js';
import './preload-helper-a4975f27.js';
import './VertexArrayObject-d4656bba.js';
import './Texture-854bd2b8.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './ExpandedCIM-ff9a48d2.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './enums-9c1aeae9.js';
import './MaterialKey-8df5eb1c.js';
import './definitions-281daf3f.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-60e2767d.js';
import './floatRGBA-47b1b9ba.js';
import './normalizeUtilsSync-1b9a2935.js';
import './projectionSupport-000d69d0.js';
import './json-ce6e5728.js';
import './AttributeStoreView-d896f0d9.js';
import './TiledDisplayObject-41c78ed4.js';
import './visualVariablesUtils-c3a75a09.js';
import './visualVariablesUtils-34ddb96d.js';
import './Matcher-60da119b.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-28d582a3.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-455a6f11.js';
import './utils-6af0b3ef.js';
import './util-cc8f2171.js';
import './ComputedAttributeStorage-c85e2f0d.js';
import './arcadeTimeUtils-2c7d45b1.js';
import './executionError-ed2c63c0.js';
import './centroid-6cad3311.js';
import './BaseGraphicContainer-598081da.js';
import './FeatureContainer-81bf5213.js';
import './TileContainer-8d68ba86.js';
import './vec3f32-b6e01a26.js';
import './ProgramTemplate-d21071ca.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let d=class extends v$1{constructor(){super(...arguments),this.attached=!1,this.container=new h,this.updateRequested=!1,this.type="imagery",this._bitmapView=new a$1;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{j$1(e)||s$1.getLogger(this.declaredClass).error(e);}));}hitTest(e){return new g$2({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new v({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((async e=>{const{source:t}=e;if(!t||t instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:t.extent,pixelBlock:t.originalPixelBlock??t.pixelBlock});t.filter=e=>this.layer.pixelFilter?this.layer.applyFilter(e):{...i,extent:t.extent};})).catch((e=>{j$1(e)||s$1.getLogger(this.declaredClass).error(e);}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),r=T(i,t);return r$1(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(e,t,i,r){(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,t,i,r);if(s.imageBitmap)return s.imageBitmap;const a=await this.layer.applyRenderer(s.pixelData,{signal:r.signal}),o=new l(a.pixelBlock,a.extent?.clone(),s.pixelData.pixelBlock);return o.filter=e=>this.layer.applyFilter(e),o}};e([y()],d.prototype,"attached",void 0),e([y()],d.prototype,"container",void 0),e([y()],d.prototype,"layer",void 0),e([y()],d.prototype,"strategy",void 0),e([y()],d.prototype,"timeExtent",void 0),e([y()],d.prototype,"view",void 0),e([y()],d.prototype,"updateRequested",void 0),e([y()],d.prototype,"updating",null),e([y()],d.prototype,"type",void 0),d=e([a("esri.views.2d.layers.imagery.ImageryView2D")],d);const u=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class t extends a$2{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[m$2],target:()=>this.children,drawPhase:T$1.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===T$1.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let p=class extends v$1{constructor(e){super(e),this._loading=null,this.update=x(((e,t)=>this._update(e,t).catch((e=>{j$1(e)||s$1.getLogger(this.declaredClass).error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new w({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,n]=e.state.size;this._loading=this.fetchPixels(o,a,n,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(t$1(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:o}=e,a=new y$1(o);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=o.width*t.symbolTileSize,a.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a);}};e([y()],p.prototype,"fetchPixels",void 0),e([y()],p.prototype,"container",void 0),e([y()],p.prototype,"_loading",void 0),e([y()],p.prototype,"updating",null),p=e([a("esri.views.2d.layers.imagery.ImageryVFStrategy")],p);const m$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let f=class extends d$1{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,r,i)=>{const n=await this._projectFullExtentPromise,{symbolTileSize:l}=this.layer.renderer,{extent:m,width:c,height:p}=x$1(t,e,r,l,n);if(r$1(n)&&!n.intersects(t))return {extent:m,pixelBlock:null};const h={bbox:`${m.xmin}, ${m.ymin}, ${m.xmax}, ${m.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:l,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const t=this.getPixelData();if(r$1(t)){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===h.bbox)return t}}const{pixelData:d}=await this.layer.fetchImage(m,c,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});this._dataParameters=h;const x=d?.pixelBlock;if(t$1(x))return {extent:m,pixelBlock:null};return {extent:m,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?e$1(d$2(x,"vector-uv")):x}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new m$1({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l$1((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),w$1),"attach");}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:r}=t;return {extent:e,pixelBlock:r}}hitTest(t){return new g$2({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams);}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams));}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,r=this._dataParameters.time===t.time,i=this._dataParameters.symbolTileSize===t.symbolTileSize,s=this._dataParameters.bbox===t.bbox;return e&&r&&i&&s}async _getProjectedFullExtent(t){try{return await J(this.layer.fullExtent,t)}catch(e){try{const e=(await U$1(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return e?w.fromJSON(e):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([y()],f.prototype,"attached",void 0),e([y()],f.prototype,"container",void 0),e([y()],f.prototype,"layer",void 0),e([y()],f.prototype,"timeExtent",void 0),e([y()],f.prototype,"type",void 0),e([y()],f.prototype,"view",void 0),e([y()],f.prototype,"updating",null),f=e([a("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g$1=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const m=m=>{let c=class extends m{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,s$1){const{layer:p}=this;if(!e)throw new s("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:a}=p,m=s$2(p,s$1);if(!a||t$1(m))throw new s("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:m});const c=await m.getRequiredFields(),l=new x$2;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=c,l.outSpatialReference=e.spatialReference;const{resolution:y,spatialReference:d}=this.view,w="2d"===this.view.type?new w$2(y,y,d):new w$2(.5*y,.5*y,d),{returnTopmostRaster:f,showNoDataRecords:h}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},R={returnDomainValues:!0,returnTopmostRaster:f,pixelSize:w,showNoDataRecords:h,signal:r$1(s$1)?s$1.signal:null};return p.queryVisibleRasters(l,R).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],c.prototype,"layer",void 0),e([y()],c.prototype,"suspended",void 0),e([y(b$1)],c.prototype,"timeExtent",void 0),e([y()],c.prototype,"view",void 0),c=e([a("esri.views.layers.ImageryLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let g=class extends(m(i(f$1(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new i$1,this._highlightView=void 0,this.layer=null,this.subview=null;}get pixelData(){const{subview:e}=this;return this.updating||!e?null:"getPixelData"in e?e.getPixelData():null}async hitTest(e,t){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new ae({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([l$1((()=>this.layer.blendMode??"normal"),(e=>this.subview&&(this.subview.container.blendMode=e)),w$1),l$1((()=>this.layer.effect??null),(e=>this.subview&&(this.subview.container.effect=e)),w$1),l$1((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U),l$1((()=>this.timeExtent),(e=>{const{subview:t}=this;t&&(t.timeExtent=e,"redraw"in t?this.requestUpdate():t.redrawOrRefetch());}),U),this.layer.on("redraw",(()=>{const{subview:e}=this;e&&("redraw"in e?e.redraw():e.redrawOrRefetch());})),l$1((()=>this.layer.renderer),(()=>this._setSubView()))]);}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:j$2.isCollection(e)?e.getItemAt(0):e)instanceof g$2))return {remove:()=>{}};let s=[];return Array.isArray(e)||j$2.isCollection(e)?s=e.map((e=>e.clone())):e instanceof g$2&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let t="imagery";if("vector-field"===e?t="imageryVF":"flow"===e&&(t="flow"),this.subview){const{type:e}=this.subview;if(e===t)return this._attachSubview(this.subview),void("flow"===e?this.subview.redrawOrRefetch():"imagery"===e&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===t?new u({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===t?new g$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new h$1({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([y()],g.prototype,"pixelData",null),e([y()],g.prototype,"subview",void 0),g=e([a("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export { b as default };
