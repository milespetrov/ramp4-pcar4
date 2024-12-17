import { bb as e, bc as y, bd as a, a0 as V } from './main-3BNeFVQJ.js';
import { f, y as y$1 } from './LayerView-9R9zwppc.js';
import './preload-helper-dJJaZANz.js';
import './Container-BjBblvWF.js';
import './highlightReasons-D8qyvWUX.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-BVCigiJ4.js';
import './layerViewUtils-CRtvGSrJ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const i=i=>{let s=class extends i{constructor(...r){super(...r),this.layerViews=new V;}get dynamicGroupLayerView(){return this.layerViews.find((r=>r.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((r=>r.layer===this.layer?.footprintLayer))}isUpdating(){return !this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return e([y()],s.prototype,"layer",void 0),e([y()],s.prototype,"layerViews",void 0),e([y({readOnly:!0})],s.prototype,"dynamicGroupLayerView",null),e([y({readOnly:!0})],s.prototype,"footprintLayerView",null),s=e([a("esri.views.layers.CatalogLayerView")],s),s};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let l=class extends(i(f(y$1))){constructor(){super(...arguments),this.layerViews=new V;}update(e){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})]);}detach(){this.container.removeAllChildren();}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};e([y()],l.prototype,"layerViews",void 0),l=e([a("esri.views.2d.layers.CatalogLayerView2D")],l);const c=l;

export { c as default };
