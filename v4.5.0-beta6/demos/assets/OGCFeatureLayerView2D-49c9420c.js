import { e, y, k as a$1 } from './main-9edb339c.js';
import D from './FeatureLayerView2D-c5a205fe.js';
import './preload-helper-a4975f27.js';
import './Container-409c4211.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-3ab2ad00.js';
import './LayerView-bafc3b45.js';
import './schemaUtils-373e23a0.js';
import './color-1ebf2e10.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-5778b30b.js';
import './MaterialKey-4112f1d1.js';
import './visualVariablesUtils-3c74aa7b.js';
import './ExpandedCIM-f310fc49.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-bb3dadf2.js';
import './floatRGBA-92c89be5.js';
import './util-1ea52c66.js';
import './popupUtils-c35673fb.js';
import './RefreshableLayerView-c1bd2b0e.js';

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
