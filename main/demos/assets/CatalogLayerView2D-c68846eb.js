import { a4 as V, aX as e, aY as y, aZ as c } from './main-f7a82629.js';
import { m as m$1, u } from './LayerView-f4e09fc1.js';
import './preload-helper-a4975f27.js';
import './Container-1362b471.js';
import './highlightReasons-a7845070.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-6f164e1e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s=class extends(m$1(u)){constructor(){super(...arguments),this.layerViews=new V;}get dynamicGroupLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.footprintLayer))}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})]);}detach(){this.container.removeAllChildren();}isUpdating(){return this.layerViews.some((e=>e.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)));}};e([y()],s.prototype,"dynamicGroupLayerView",null),e([y()],s.prototype,"footprintLayerView",null),e([y()],s.prototype,"layerViews",void 0),s=e([c("esri.views.2d.layers.CatalogLayerView2D")],s);const n=s;

export { n as default };
