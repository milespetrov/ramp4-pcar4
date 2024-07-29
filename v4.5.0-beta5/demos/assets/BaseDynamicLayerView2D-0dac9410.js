import { bq as j$1, p as s$1, e, y, k as a$1 } from './main-2e047bb1.js';
import { a } from './BitmapContainer-990f11fd.js';
import { f as f$1, u } from './LayerView-e1c75e7c.js';
import { v } from './ExportStrategy-2bb6dd8a.js';
import { i } from './RefreshableLayerView-09102bf3.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-383e7b33.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-2b246e4e.js';
import './Texture-94084c99.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-e798b93f.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-70736a50.js';
import './MaterialKey-273f9209.js';
import './utils-873f48a7.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-ec7d9df9.js';
import './earcut-336027d9.js';
import './Bitmap-bf87163e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let h=class extends(i(f$1(u))){update(t){this._strategy.update(t).catch((t=>{j$1(t)||s$1.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export { c as default };
