import { e, y, k as a$1 } from './main-9d6c9b53.js';
import D from './FeatureLayerView2D-db62fa36.js';
import './preload-helper-a4975f27.js';
import './Container-27245200.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-18319b8f.js';
import './LayerView-1385b0f2.js';
import './schemaUtils-556213ba.js';
import './color-57c0ae12.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-51e1bdcd.js';
import './MaterialKey-ec3a4118.js';
import './visualVariablesUtils-02f527a9.js';
import './ExpandedCIM-fd21e452.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-08a05d43.js';
import './floatRGBA-12b28dee.js';
import './util-ccbd2578.js';
import './popupUtils-192ec35d.js';
import './RefreshableLayerView-06523488.js';

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
