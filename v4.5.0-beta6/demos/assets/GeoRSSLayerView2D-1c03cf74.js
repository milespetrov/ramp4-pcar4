import { bp as l$1, bu as h$1, bb as x, bv as j$1, bw as k, bx as t, by as p, e, k as a } from './main-9edb339c.js';
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
let y=class extends(f$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([l$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=x.fromJSON(t$1),p=new j$1(e.features),n=o.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(n.renderer),g=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h$1),l$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
