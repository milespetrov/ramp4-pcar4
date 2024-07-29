import { bv as j$1, bU as n$1, e, y, bV as t, k as a } from './main-ab630232.js';
import { f as f$1, u } from './LayerView-5f944adf.js';
import './preload-helper-a4975f27.js';
import './Container-ae201a30.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-ed88729e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let n=class extends(f$1(u)){constructor(e){super(e),this.layerViews=new j$1;}set layerViews(e){this._set("layerViews",n$1(e,this._get("layerViews")));}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,r)=>e+r.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())));}detach(){this.container.removeAllChildren();}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};e([y({cast:t})],n.prototype,"layerViews",null),e([y({readOnly:!0})],n.prototype,"updatingProgress",null),n=e([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],n);const c=n;

export { c as default };
