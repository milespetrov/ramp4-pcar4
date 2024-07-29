import { e, y, fb as b, k as a, fc as c, bl as i$1, bq as j$1, p as s$1, bp as l$1 } from './main-ab630232.js';
import { a as a$1 } from './BitmapContainer-ec7b5d8d.js';
import { f as f$1, u } from './LayerView-5f944adf.js';
import { a as ae } from './GraphicsView2D-0774ac60.js';
import { n } from './HighlightGraphicContainer-b312be6d.js';
import { v } from './ExportStrategy-4adef3c4.js';
import { i } from './RefreshableLayerView-3e26094e.js';
import { S, a as a$2 } from './drapedUtils-8f90a1a0.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-bcc676ab.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-c97f385a.js';
import './Texture-ed88729e.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-b476e4e5.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-77adab36.js';
import './MaterialKey-2ad5bf89.js';
import './utils-d6bd25f4.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-ae201a30.js';
import './earcut-336027d9.js';
import './ExpandedCIM-8225a260.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-a17df7e3.js';
import './floatRGBA-03b519c4.js';
import './normalizeUtilsSync-6cda5b5a.js';
import './projectionSupport-301645cc.js';
import './json-ce6e5728.js';
import './AttributeStoreView-a90c3ae5.js';
import './TiledDisplayObject-64d2a2a1.js';
import './visualVariablesUtils-14006c20.js';
import './visualVariablesUtils-44f1869c.js';
import './Matcher-d419c433.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-16f7eba0.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-a218c44a.js';
import './util-373449e0.js';
import './ComputedAttributeStorage-4e6b6388.js';
import './arcadeTimeUtils-9af25349.js';
import './executionError-ed2c63c0.js';
import './centroid-a5fdfea9.js';
import './BaseGraphicContainer-403a67c1.js';
import './FeatureContainer-c3f0822f.js';
import './TileContainer-e50e9610.js';
import './vec3f32-b6e01a26.js';
import './Bitmap-6ecac0e4.js';
import './popupUtils-4fa08326.js';

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
