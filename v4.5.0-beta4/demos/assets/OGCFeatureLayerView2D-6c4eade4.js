import { e, y, k as a$1 } from './main-e036d71c.js';
import D from './FeatureLayerView2D-05751093.js';
import './preload-helper-a4975f27.js';
import './Container-cd20f129.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-7090871a.js';
import './LayerView-5301bdf0.js';
import './schemaUtils-2fc8c9ee.js';
import './color-3184bae3.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-1fa92d23.js';
import './MaterialKey-e539856c.js';
import './visualVariablesUtils-0a9fb10d.js';
import './ExpandedCIM-a843f384.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-f1b06cee.js';
import './floatRGBA-6e13de02.js';
import './util-aa8a8943.js';
import './popupUtils-d35da784.js';
import './RefreshableLayerView-7d007d32.js';

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
