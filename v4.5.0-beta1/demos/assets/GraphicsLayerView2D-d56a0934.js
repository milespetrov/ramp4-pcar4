import { bz as a$1, j as g$1, bv as j$1, r as r$1, e, y, k as a } from './main-9d6c9b53.js';
import { f as f$1, u } from './LayerView-1385b0f2.js';
import { i } from './GraphicContainer-2ce8391a.js';
import { a as ae } from './GraphicsView2D-ef5c3b0b.js';
import './preload-helper-a4975f27.js';
import './Container-27245200.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-18319b8f.js';
import './color-57c0ae12.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './BaseGraphicContainer-be93ed7b.js';
import './FeatureContainer-6377ce7c.js';
import './AttributeStoreView-446c631f.js';
import './TiledDisplayObject-82039bed.js';
import './visualVariablesUtils-c547c46f.js';
import './visualVariablesUtils-02f527a9.js';
import './VertexArrayObject-608196bc.js';
import './TileContainer-fd32a9cb.js';
import './WGLContainer-89d1a31a.js';
import './ProgramTemplate-79dfe502.js';
import './MaterialKey-ec3a4118.js';
import './utils-51e1bdcd.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './earcut-336027d9.js';
import './vec3f32-b6e01a26.js';
import './ExpandedCIM-fd21e452.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-08a05d43.js';
import './floatRGBA-12b28dee.js';
import './normalizeUtilsSync-dd546bb8.js';
import './projectionSupport-accf25fc.js';
import './json-ce6e5728.js';
import './Matcher-f5f5fdb8.js';
import './tileUtils-f6baf24c.js';
import './TurboLine-de221b7d.js';
import './devEnvironmentUtils-d73295e7.js';
import './schemaUtils-556213ba.js';
import './util-ccbd2578.js';
import './ComputedAttributeStorage-e895675a.js';
import './arcadeTimeUtils-e5f2e0ed.js';
import './executionError-ed2c63c0.js';
import './centroid-857a2cec.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const l={remove(){},pause(){},resume(){}};let n=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler));}detach(){this.container.removeAllChildren(),this.graphicsView=a$1(this.graphicsView);}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate)):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;"number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j$1.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray());const r=s?.filter(r$1);return r?.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):l}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;0===i?this._highlightIds.delete(t):this._highlightIds.set(t,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([y()],n.prototype,"graphicsView",void 0),n=e([a("esri.views.2d.layers.GraphicsLayerView2D")],n);const d=n;

export { d as default };
