import { e, y, k as a$1 } from './main-2e047bb1.js';
import D from './FeatureLayerView2D-1ab7cc6f.js';
import './preload-helper-a4975f27.js';
import './Container-ec7d9df9.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-94084c99.js';
import './LayerView-e1c75e7c.js';
import './schemaUtils-7262e4cb.js';
import './color-e798b93f.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-873f48a7.js';
import './MaterialKey-273f9209.js';
import './visualVariablesUtils-47ec3627.js';
import './ExpandedCIM-1e6e1f9e.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ed265e21.js';
import './floatRGBA-ef431a07.js';
import './util-3e7fe932.js';
import './popupUtils-cc8f8e16.js';
import './RefreshableLayerView-09102bf3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let t=class extends(o(D)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
