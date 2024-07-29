import { ag as b$1, J as s$1, aX as e, aY as y, aZ as c } from './main-a96d6142.js';
import { a } from './BitmapContainer-86f0cda7.js';
import { m as m$1, u } from './LayerView-873d20bf.js';
import { v } from './ExportStrategy-f7ffb6a3.js';
import { i } from './RefreshableLayerView-b4f5ec87.js';
import './preload-helper-a4975f27.js';
import './WGLContainer-bb4e33e8.js';
import './definitions-1e43ef7c.js';
import './LabelMetric-be262f0f.js';
import './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import './Texture-9d2f2e99.js';
import './Program-82b81b71.js';
import './VertexElementDescriptor-ec2771ab.js';
import './ProgramTemplate-284d1bd6.js';
import './Container-44975a0e.js';
import './highlightReasons-360a8783.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './earcut-66eead62.js';
import './Bitmap-5bb79d0d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends(i(m$1(u))){update(t){this._strategy.update(t).catch((t=>{b$1(t)||s$1.getLogger(this).error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new a,this.container.addChild(this._bitmapContainer),this._strategy=new v({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImageBitmap(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this._strategy.updating||this.updateRequested}};e([y()],h.prototype,"_strategy",void 0),e([y()],h.prototype,"updating",void 0),h=e([c("esri.views.2d.layers.BaseDynamicLayerView2D")],h);const d=h;

export { d as default };
