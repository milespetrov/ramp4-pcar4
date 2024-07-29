import { e, y, k as a$1 } from './main-ab630232.js';
import D from './FeatureLayerView2D-571ed12d.js';
import './preload-helper-a4975f27.js';
import './Container-ae201a30.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-ed88729e.js';
import './LayerView-5f944adf.js';
import './schemaUtils-a218c44a.js';
import './color-b476e4e5.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-d6bd25f4.js';
import './MaterialKey-2ad5bf89.js';
import './visualVariablesUtils-44f1869c.js';
import './ExpandedCIM-8225a260.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-a17df7e3.js';
import './floatRGBA-03b519c4.js';
import './util-373449e0.js';
import './popupUtils-4fa08326.js';
import './RefreshableLayerView-3e26094e.js';

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
