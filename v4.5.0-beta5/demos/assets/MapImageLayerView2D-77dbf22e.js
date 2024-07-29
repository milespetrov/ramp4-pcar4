import { e, y, fb as b, k as a, fc as c, bl as i$1, bq as j$1, p as s$1, bp as l$1 } from './main-2e047bb1.js';
import { a as a$1 } from './BitmapContainer-990f11fd.js';
import { f as f$1, u } from './LayerView-e1c75e7c.js';
import { a as ae } from './GraphicsView2D-c96e492c.js';
import { n } from './HighlightGraphicContainer-c320eb13.js';
import { v } from './ExportStrategy-2bb6dd8a.js';
import { i } from './RefreshableLayerView-09102bf3.js';
import { S, a as a$2 } from './drapedUtils-f20e20c4.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-383e7b33.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-2b246e4e.js';
import './Texture-94084c99.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-e798b93f.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-70736a50.js';
import './MaterialKey-273f9209.js';
import './utils-873f48a7.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-ec7d9df9.js';
import './earcut-336027d9.js';
import './ExpandedCIM-1e6e1f9e.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ed265e21.js';
import './floatRGBA-ef431a07.js';
import './normalizeUtilsSync-51e87e1c.js';
import './projectionSupport-e29e1e91.js';
import './json-ce6e5728.js';
import './AttributeStoreView-f73aed75.js';
import './TiledDisplayObject-92f0d7d6.js';
import './visualVariablesUtils-762029fe.js';
import './visualVariablesUtils-47ec3627.js';
import './Matcher-559bf89d.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-c75be896.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-7262e4cb.js';
import './util-3e7fe932.js';
import './ComputedAttributeStorage-effda1bd.js';
import './arcadeTimeUtils-607d5bc9.js';
import './executionError-ed2c63c0.js';
import './centroid-37cfec7b.js';
import './BaseGraphicContainer-1da54961.js';
import './FeatureContainer-f7718f86.js';
import './TileContainer-eb881268.js';
import './vec3f32-b6e01a26.js';
import './Bitmap-bf87163e.js';
import './popupUtils-cc8f8e16.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const p=p=>{let a$1=class a extends p{initialize(){this.exportImageParameters=new c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y()],a$1.prototype,"exportImageParameters",void 0),e([y({readOnly:!0})],a$1.prototype,"floors",null),e([y({readOnly:!0})],a$1.prototype,"exportImageVersion",null),e([y()],a$1.prototype,"layer",void 0),e([y()],a$1.prototype,"suspended",void 0),e([y(b)],a$1.prototype,"timeExtent",void 0),a$1=e([a("esri.views.layers.MapImageLayerView")],a$1),a$1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let f=class extends(p(i(f$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new i$1,this._updateHash="";}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{j$1(t)||s$1.getLogger(this.declaredClass).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a=i>=10;this._bitmapContainer=new a$1,this.container.addChild(this._bitmapContainer),this._highlightView=new ae({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new S({createFetchPopupFeaturesQueryGeometry:(t,e)=>a$2(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.addAttachHandles(l$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y()],f.prototype,"strategy",void 0),e([y()],f.prototype,"updating",void 0),f=e([a("esri.views.2d.layers.MapImageLayerView2D")],f);const w=f;

export { w as default };
