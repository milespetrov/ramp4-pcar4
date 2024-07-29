import { bz as a$1, j as g$1, bv as j$1, r as r$1, e, y, k as a } from './main-e036d71c.js';
import { f as f$1, u } from './LayerView-5301bdf0.js';
import { i } from './GraphicContainer-20287024.js';
import { a as ae } from './GraphicsView2D-338ddfa5.js';
import './preload-helper-a4975f27.js';
import './Container-cd20f129.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-7090871a.js';
import './color-3184bae3.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-bec9f495.js';
import './FeatureContainer-7af1c6dd.js';
import './AttributeStoreView-2101e1f6.js';
import './TiledDisplayObject-1b5d58fa.js';
import './visualVariablesUtils-510a44f0.js';
import './visualVariablesUtils-0a9fb10d.js';
import './VertexArrayObject-1a02be09.js';
import './TileContainer-f8df73b1.js';
import './WGLContainer-a00b5993.js';
import './ProgramTemplate-857894b2.js';
import './MaterialKey-e539856c.js';
import './utils-1fa92d23.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-a843f384.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-f1b06cee.js';
import './floatRGBA-6e13de02.js';
import './normalizeUtilsSync-ad82bdeb.js';
import './projectionSupport-5ca6505f.js';
import './json-ce6e5728.js';
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=a$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;"number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j$1.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray());const r=s?.filter(r$1);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export { d as default };
