import { bq as j$1, p as s$1, e, y, k as a$1 } from './main-5614000d.js';
import { a } from './BitmapContainer-6dfa8bfc.js';
import { f as f$1, u } from './LayerView-2967ceea.js';
import { v } from './ExportStrategy-2922b8e9.js';
import { i } from './RefreshableLayerView-ff11c913.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-e7d95734.js';
import './definitions-281daf3f.js';
import './VertexArrayObject-d4656bba.js';
import './Texture-854bd2b8.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';
import './color-8720a063.js';
import './enums-9c1aeae9.js';
import './ProgramTemplate-d21071ca.js';
import './MaterialKey-8df5eb1c.js';
import './utils-6af0b3ef.js';
import './StyleDefinition-1998cf52.js';
import './config-c354710d.js';
import './GeometryUtils-7c55c6d6.js';
import './Container-23d4bfc5.js';
import './earcut-336027d9.js';
import './Bitmap-94db49a0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let h=class extends(i(f$1(u))){update(t){this._strategy.update(t).catch((t=>{j$1(t)||s$1.getLogger(this.declaredClass).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([a$1("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const c=h;

export { c as default };
