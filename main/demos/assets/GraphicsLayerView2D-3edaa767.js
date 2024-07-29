import { ba as u$1, a5 as c, a4 as V, q, ay as e, aX as e$1, aY as y, aZ as c$1 } from './main-a96d6142.js';
import { t as t$2 } from './highlightReasons-360a8783.js';
import { m as m$1, u as u$2 } from './LayerView-873d20bf.js';
import { t as t$1 } from './GraphicContainer-26dd320c.js';
import { $ } from './GraphicsView2D-ef50101c.js';
import { t } from './HighlightCounter-cfbb9866.js';
import './preload-helper-a4975f27.js';
import './Container-44975a0e.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-9d2f2e99.js';
import './AGraphicContainer-f2500f74.js';
import './TechniqueInstance-60b08d87.js';
import './UpdateTracking2D-ab4de000.js';
import './TurboLine-5d88d82b.js';
import './enums-d24bcbbf.js';
import './earcut-66eead62.js';
import './GeometryUtils-0544a896.js';
import './Rect-09e0f861.js';
import './LabelMetric-be262f0f.js';
import './Program-82b81b71.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-3fbef04e.js';
import './constants-412c3a33.js';
import './TileContainer-c163f5c3.js';
import './WGLContainer-bb4e33e8.js';
import './ProgramTemplate-284d1bd6.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './FeatureCommandQueue-43349445.js';
import './vec3f32-cca6bca6.js';
import './AttributeStore-797a1a62.js';
import './TimeOnly-f3612116.js';
import './timeSupport-30d6f5ec.js';
import './json-aab78c64.js';
import './normalizeUtilsSync-874fcc74.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d=class extends(m$1(u$2)){constructor(){super(...arguments),this._highlightCounter=new t;}attach(){this.graphicsView=new $({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new t$1(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this._updateHighlight();}detach(){this.container.removeAllChildren(),this.graphicsView=u$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i,h="highlight"){let a;"number"==typeof i?a=[i]:i instanceof c?a=[i.uid]:Array.isArray(i)&&i.length>0?a="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):V.isCollection(i)&&i.length>0&&(a=i.map((i=>i&&i.uid)).toArray());const o=a?.filter(q);return o?.length?(this._addHighlight(o,h),e((()=>this._removeHighlight(o,h)))):e()}_addHighlight(i,t){this._highlightCounter.addReason(i,t),this._updateHighlight();}_removeHighlight(i,t){this._highlightCounter.deleteReason(i,t),this._updateHighlight();}_updateHighlight(){const i=[];for(const t of this._highlightCounter.ids()){const e=this._highlightCounter.getHighestReason(t),r=t$2(e);i.push({objectId:t,highlightFlags:r});}this.graphicsView?.setHighlight(i);}};e$1([y()],d.prototype,"graphicsView",void 0),d=e$1([c$1("esri.views.2d.layers.GraphicsLayerView2D")],d);const u=d;

export { u as default };
