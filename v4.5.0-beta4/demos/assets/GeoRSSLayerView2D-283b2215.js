import { bp as l$1, bu as h$1, bb as x, bv as j$1, bw as k, bx as t, by as p, e, k as a } from './main-e036d71c.js';
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
let y=class extends(f$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([l$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=x.fromJSON(t$1),p=new j$1(e.features),n=o.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(n.renderer),g=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h$1),l$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
