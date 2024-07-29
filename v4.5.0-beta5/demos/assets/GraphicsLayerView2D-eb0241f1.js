import { bz as a$1, j as g$1, bv as j$1, r as r$1, e, y, k as a } from './main-2e047bb1.js';
import { f as f$1, u } from './LayerView-e1c75e7c.js';
import { i } from './GraphicContainer-1acd125b.js';
import { a as ae } from './GraphicsView2D-c96e492c.js';
import './preload-helper-a4975f27.js';
import './Container-ec7d9df9.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-94084c99.js';
import './color-e798b93f.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-1da54961.js';
import './FeatureContainer-f7718f86.js';
import './AttributeStoreView-f73aed75.js';
import './TiledDisplayObject-92f0d7d6.js';
import './visualVariablesUtils-762029fe.js';
import './visualVariablesUtils-47ec3627.js';
import './VertexArrayObject-2b246e4e.js';
import './TileContainer-eb881268.js';
import './WGLContainer-383e7b33.js';
import './ProgramTemplate-70736a50.js';
import './MaterialKey-273f9209.js';
import './utils-873f48a7.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-1e6e1f9e.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ed265e21.js';
import './floatRGBA-ef431a07.js';
import './normalizeUtilsSync-51e87e1c.js';
import './projectionSupport-e29e1e91.js';
import './json-ce6e5728.js';
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=a$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;"number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j$1.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray());const r=s?.filter(r$1);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export { d as default };
