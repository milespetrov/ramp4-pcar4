import { bz as a$1, j as g$1, bv as j$1, r as r$1, e, y, k as a } from './main-ab630232.js';
import { f as f$1, u } from './LayerView-5f944adf.js';
import { i } from './GraphicContainer-b6fc1e33.js';
import { a as ae } from './GraphicsView2D-0774ac60.js';
import './preload-helper-a4975f27.js';
import './Container-ae201a30.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-ed88729e.js';
import './color-b476e4e5.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-403a67c1.js';
import './FeatureContainer-c3f0822f.js';
import './AttributeStoreView-a90c3ae5.js';
import './TiledDisplayObject-64d2a2a1.js';
import './visualVariablesUtils-14006c20.js';
import './visualVariablesUtils-44f1869c.js';
import './VertexArrayObject-c97f385a.js';
import './TileContainer-e50e9610.js';
import './WGLContainer-bcc676ab.js';
import './ProgramTemplate-77adab36.js';
import './MaterialKey-2ad5bf89.js';
import './utils-d6bd25f4.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-8225a260.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-a17df7e3.js';
import './floatRGBA-03b519c4.js';
import './normalizeUtilsSync-6cda5b5a.js';
import './projectionSupport-301645cc.js';
import './json-ce6e5728.js';
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=a$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;"number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j$1.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray());const r=s?.filter(r$1);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export { d as default };
