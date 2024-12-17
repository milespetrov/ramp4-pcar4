import { bb as e, bc as y, bd as a$1 } from './main-3BNeFVQJ.js';
import { r as re } from './FeatureLayerView2D-C-oqQLIW.js';
import './preload-helper-dJJaZANz.js';
import './Container-BjBblvWF.js';
import './highlightReasons-D8qyvWUX.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture-BVCigiJ4.js';
import './timeSupport-C0geVCVH.js';
import './LayerView-9R9zwppc.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-BYkyr_AR.js';
import './UpdateTracking2D-DIUsNKx2.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-DPTj9PSm.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-BxmiZsqI.js';
import './Program-zPKthH6T.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-CqFd4RCj.js';
import './TileContainer-Nz-j6JNL.js';
import './WGLContainer-DajCV0A4.js';
import './ProgramTemplate-D9tAvVMl.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-CRmygkOX.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-BumXwpSO.js';
import './floatRGBA-BkxjV2i8.js';
import './FeatureCommandQueue-GOeH2G_t.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-Bp2tb5Ez.js';
import './popupUtils-Ca_6tFOv.js';
import './RefreshableLayerView-B9lCOy_N.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([a$1("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t=class extends(o(re)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([a$1("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
