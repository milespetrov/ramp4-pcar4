import { bz as a$1, j as g$1, bv as j$1, r as r$1, e, y, k as a } from './main-5614000d.js';
import { f as f$1, u } from './LayerView-2967ceea.js';
import { i } from './GraphicContainer-6a7a6576.js';
import { a as ae } from './GraphicsView2D-30339c0a.js';
import './preload-helper-a4975f27.js';
import './Container-23d4bfc5.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-854bd2b8.js';
import './color-8720a063.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-598081da.js';
import './FeatureContainer-81bf5213.js';
import './AttributeStoreView-d896f0d9.js';
import './TiledDisplayObject-41c78ed4.js';
import './visualVariablesUtils-c3a75a09.js';
import './visualVariablesUtils-34ddb96d.js';
import './VertexArrayObject-d4656bba.js';
import './TileContainer-8d68ba86.js';
import './WGLContainer-e7d95734.js';
import './ProgramTemplate-d21071ca.js';
import './MaterialKey-8df5eb1c.js';
import './utils-6af0b3ef.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-ff9a48d2.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-60e2767d.js';
import './floatRGBA-47b1b9ba.js';
import './normalizeUtilsSync-1b9a2935.js';
import './projectionSupport-000d69d0.js';
import './json-ce6e5728.js';
import './Matcher-60da119b.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-28d582a3.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-455a6f11.js';
import './util-cc8f2171.js';
import './ComputedAttributeStorage-c85e2f0d.js';
import './arcadeTimeUtils-2c7d45b1.js';
import './executionError-ed2c63c0.js';
import './centroid-6cad3311.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=a$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;"number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j$1.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray());const r=s?.filter(r$1);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export { d as default };
