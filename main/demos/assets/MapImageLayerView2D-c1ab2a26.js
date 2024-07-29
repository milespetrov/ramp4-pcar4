import { aX as e, aY as y$1, fs as j, aZ as c, ft as m, aS as c$1, ag as b$1, J as s$1, b3 as d$1 } from './main-a96d6142.js';
import { a } from './BitmapContainer-86f0cda7.js';
import { m as m$1, u } from './LayerView-873d20bf.js';
import { $ } from './GraphicsView2D-ef50101c.js';
import { h } from './HighlightGraphicContainer-12dfff45.js';
import { v } from './ExportStrategy-f7ffb6a3.js';
import { i } from './RefreshableLayerView-b4f5ec87.js';
import { U, r } from './drapedUtils-a289aa19.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-bb4e33e8.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-be262f0f.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-9d2f2e99.js';
import './Program-82b81b71.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-284d1bd6.js';
import './Container-44975a0e.js';
import './highlightReasons-360a8783.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-66eead62.js';
import './UpdateTracking2D-ab4de000.js';
import './TurboLine-5d88d82b.js';
import './GeometryUtils-0544a896.js';
import './Rect-09e0f861.js';
import './BindType-941d78d8.js';
import './Util-3fbef04e.js';
import './constants-412c3a33.js';
import './AttributeStore-797a1a62.js';
import './TimeOnly-f3612116.js';
import './timeSupport-30d6f5ec.js';
import './json-aab78c64.js';
import './FeatureCommandQueue-43349445.js';
import './normalizeUtilsSync-874fcc74.js';
import './AGraphicContainer-f2500f74.js';
import './TechniqueInstance-60b08d87.js';
import './TileContainer-c163f5c3.js';
import './vec3f32-cca6bca6.js';
import './Bitmap-5bb79d0d.js';
import './popupUtils-b1f93957.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=p=>{let a=class extends p{initialize(){this.exportImageParameters=new m({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([y$1()],a.prototype,"exportImageParameters",void 0),e([y$1({readOnly:!0})],a.prototype,"floors",null),e([y$1({readOnly:!0})],a.prototype,"exportImageVersion",null),e([y$1()],a.prototype,"layer",void 0),e([y$1()],a.prototype,"suspended",void 0),e([y$1(j)],a.prototype,"timeExtent",void 0),a=e([c("esri.views.layers.MapImageLayerView")],a),a};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let y=class extends(p(i(m$1(u)))){constructor(){super(...arguments),this._highlightGraphics=new c$1,this._updateHash="";}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const r=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==r&&(this._updateHash=r,this.strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t);}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,a$1=i>=10;this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._highlightView=new $({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new h(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(t,e)=>r(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e});},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:a$1,hidpi:!0}),this.addAttachHandles(d$1((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate();}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};e([y$1()],y.prototype,"strategy",void 0),e([y$1()],y.prototype,"updating",void 0),y=e([c("esri.views.2d.layers.MapImageLayerView2D")],y);const w=y;

export { w as default };
