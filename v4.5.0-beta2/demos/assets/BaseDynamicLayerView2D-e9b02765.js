import { bq as j$1, p as s$1, e, y, k as a$1 } from './main-ab630232.js';
import { a } from './BitmapContainer-ec7b5d8d.js';
import { f as f$1, u } from './LayerView-5f944adf.js';
import { v } from './ExportStrategy-4adef3c4.js';
import { i } from './RefreshableLayerView-3e26094e.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-bcc676ab.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-c97f385a.js';
import './Texture-ed88729e.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-b476e4e5.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-77adab36.js';
import './MaterialKey-2ad5bf89.js';
import './utils-d6bd25f4.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-ae201a30.js';
import './earcut-336027d9.js';
import './Bitmap-6ecac0e4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let h=class extends(i(f$1(u))){update(t){this._strategy.update(t).catch((t=>{j$1(t)||s$1.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export { c as default };
