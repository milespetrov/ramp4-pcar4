import { bp as l$1, bu as h$1, bb as x, bv as j$1, bw as k, bx as t, by as p, e, k as a } from './main-9d6c9b53.js';
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
let y=class extends(f$1(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([l$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=x.fromJSON(t$1),p=new j$1(e.features),n=o.drawingInfo,m=i$1?k.fromJSON(i$1):null,y=t(n.renderer),g=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h$1),l$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h$1),l$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h$1)]);}detach(){this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
