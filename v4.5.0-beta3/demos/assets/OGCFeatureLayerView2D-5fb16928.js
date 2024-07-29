import { e, y, k as a$1 } from './main-5614000d.js';
import D from './FeatureLayerView2D-dd3faab5.js';
import './preload-helper-a4975f27.js';
import './Container-23d4bfc5.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-854bd2b8.js';
import './LayerView-2967ceea.js';
import './schemaUtils-455a6f11.js';
import './color-8720a063.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-6af0b3ef.js';
import './MaterialKey-8df5eb1c.js';
import './visualVariablesUtils-34ddb96d.js';
import './ExpandedCIM-ff9a48d2.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-60e2767d.js';
import './floatRGBA-47b1b9ba.js';
import './util-cc8f2171.js';
import './popupUtils-324654ef.js';
import './RefreshableLayerView-ff11c913.js';

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
