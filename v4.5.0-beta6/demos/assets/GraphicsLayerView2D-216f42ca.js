import { bz as a$1, j as g$1, bv as j$1, r as r$1, e, y, k as a } from './main-9edb339c.js';
import { f as f$1, u } from './LayerView-bafc3b45.js';
import { i } from './GraphicContainer-59299f6a.js';
import { a as ae } from './GraphicsView2D-9da494ef.js';
import './preload-helper-a4975f27.js';
import './Container-409c4211.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-3ab2ad00.js';
import './color-1ebf2e10.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-624cfbd9.js';
import './FeatureContainer-5218f936.js';
import './AttributeStoreView-ee624da7.js';
import './TiledDisplayObject-0927f4fd.js';
import './visualVariablesUtils-91b0ba19.js';
import './visualVariablesUtils-3c74aa7b.js';
import './VertexArrayObject-38d0f8a8.js';
import './TileContainer-fd38a345.js';
import './WGLContainer-f894dc33.js';
import './ProgramTemplate-f6c402e0.js';
import './MaterialKey-4112f1d1.js';
import './utils-5778b30b.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-f310fc49.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-bb3dadf2.js';
import './floatRGBA-92c89be5.js';
import './normalizeUtilsSync-a2b3c9b6.js';
import './projectionSupport-6ae5e45a.js';
import './json-ce6e5728.js';
import './Matcher-d58d804e.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-9400d429.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-373e23a0.js';
import './util-1ea52c66.js';
import './ComputedAttributeStorage-9728b2c3.js';
import './arcadeTimeUtils-47151b02.js';
import './executionError-ed2c63c0.js';
import './centroid-2733f9d5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=a$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;"number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j$1.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray());const r=s?.filter(r$1);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export { d as default };
