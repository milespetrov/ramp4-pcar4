import { bj as d$1, bk as P, bl as d, a0 as V, bm as k, bn as t, bo as p$1, bd as e, bf as a } from './main-DmLXxpkC.js';
import { f, y as y$1 } from './LayerView-C3u_asAK.js';
import { t as t$1 } from './GraphicContainer-Dv5lZzqL.js';
import { V as V$1 } from './GraphicsView2D-DC-kQgqJ.js';
import './preload-helper-dJJaZANz.js';
import './Container-KcmSB7ST.js';
import './highlightReasons-C8iCMq0X.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture--CvkiTcr.js';
import './layerViewUtils-CRtvGSrJ.js';
import './AGraphicContainer-Dxw6OvcI.js';
import './TechniqueInstance-BKqFN3rJ.js';
import './UpdateTracking2D-Dv0HqW13.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-SjXVzwXl.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-BCLalxhL.js';
import './Program-CsfCArQW.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-B0zQ8Equ.js';
import './TileContainer-DH8g3NK6.js';
import './WGLContainer-L7Qwip2k.js';
import './ProgramTemplate-EQGeenY8.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-quz6pw-4.js';
import './FeatureCommandQueue-gDMOAJRn.js';
import './constants-BNnV1ogR.js';
import './AttributeStore-CpajXiiN.js';
import './TimeOnly-DPhsHLpS.js';
import './timeSupport-wCC04-YX.js';
import './json-DYk0G9qS.js';
import './normalizeUtilsSync-guzX_EqV.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let y=class extends(f(y$1)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.addAttachHandles([d$1((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i,featureSet:t$2,layerDefinition:o}of e){const e=d.fromJSON(t$2),p=new V(e.features),n=o.drawingInfo,m=i?k.fromJSON(i):null,y=t(n.renderer),g=new V$1({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new t$1(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),P),d$1((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p$1({symbol:e});}),P),d$1((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p$1({symbol:e});}),P),d$1((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p$1({symbol:e});}),P)]);}detach(){this._clear();}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([a("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
