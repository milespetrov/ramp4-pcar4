import { bp as l$1, bu as h$1, bb as x, bv as j$1, bw as k, bx as t, by as p, e, k as a } from './main-2e047bb1.js';
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
let y=class extends(f$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([l$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=x.fromJSON(t$1),p=new j$1(e.features),n=o.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(n.renderer),g=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h$1),l$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
