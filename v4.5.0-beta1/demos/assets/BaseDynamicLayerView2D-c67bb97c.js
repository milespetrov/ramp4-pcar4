import { bq as j$1, p as s$1, e, y, k as a$1 } from './main-9d6c9b53.js';
import { a } from './BitmapContainer-17409c12.js';
import { f as f$1, u } from './LayerView-1385b0f2.js';
import { v } from './ExportStrategy-84b3538b.js';
import { i } from './RefreshableLayerView-06523488.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-89d1a31a.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-608196bc.js';
import './Texture-18319b8f.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-57c0ae12.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-79dfe502.js';
import './MaterialKey-ec3a4118.js';
import './utils-51e1bdcd.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-27245200.js';
import './earcut-336027d9.js';
import './Bitmap-08855e10.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let h=class extends(i(f$1(u))){update(t){this._strategy.update(t).catch((t=>{j$1(t)||s$1.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export { c as default };
