import { e, y, fb as b, k as a, fc as c, bl as i$1, bq as j$1, p as s$1, bp as l$1 } from './main-e036d71c.js';
import { a as a$1 } from './BitmapContainer-ab635e29.js';
import { f as f$1, u } from './LayerView-5301bdf0.js';
import { a as ae } from './GraphicsView2D-338ddfa5.js';
import { n } from './HighlightGraphicContainer-c522357f.js';
import { v } from './ExportStrategy-be4b1922.js';
import { i } from './RefreshableLayerView-7d007d32.js';
import { S, a as a$2 } from './drapedUtils-0aa11a94.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-a00b5993.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-1a02be09.js';
import './Texture-7090871a.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-3184bae3.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-857894b2.js';
import './MaterialKey-e539856c.js';
import './utils-1fa92d23.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-cd20f129.js';
import './earcut-336027d9.js';
import './ExpandedCIM-a843f384.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-f1b06cee.js';
import './floatRGBA-6e13de02.js';
import './normalizeUtilsSync-ad82bdeb.js';
import './projectionSupport-5ca6505f.js';
import './json-ce6e5728.js';
import './AttributeStoreView-2101e1f6.js';
import './TiledDisplayObject-1b5d58fa.js';
import './visualVariablesUtils-510a44f0.js';
import './visualVariablesUtils-0a9fb10d.js';
import './Matcher-450c57d1.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-efd4af5b.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-2fc8c9ee.js';
import './util-aa8a8943.js';
import './ComputedAttributeStorage-725d6fa4.js';
import './arcadeTimeUtils-5f6e2d5c.js';
import './executionError-ed2c63c0.js';
import './centroid-251e1c53.js';
import './BaseGraphicContainer-bec9f495.js';
import './FeatureContainer-7af1c6dd.js';
import './TileContainer-f8df73b1.js';
import './vec3f32-b6e01a26.js';
import './Bitmap-621d0e1f.js';
import './popupUtils-d35da784.js';

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
