import { aW as e, aX as y, aY as c } from './main-COqF-WmH.js';
import { X } from './FeatureLayerView2D-CpRpmr9K.js';
import './preload-helper-dJJaZANz.js';
import './Container-C3EJeCSa.js';
import './highlightReasons-D1ji1xYM.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-BsIVFnpi.js';
import './LayerView-CgGQr0Zf.js';
import './TechniqueInstance-DyVuIDWF.js';
import './UpdateTracking2D-BpmwBPwx.js';
import './TurboLine-f61uQEAk.js';
import './enums-DZmWLm_j.js';
import './earcut-BDgM8-rh.js';
import './GeometryUtils-DxJSJ584.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DJ8W7a48.js';
import './Program-IdvTdFcr.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-Bl8Tjvjp.js';
import './constants-C0QDwCF4.js';
import './TileContainer-CtAEB2iA.js';
import './WGLContainer-DpPhA6lb.js';
import './ProgramTemplate-OvjsDeMu.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-CmFTK8Ta.js';
import './floatRGBA-6nKQwHru.js';
import './FeatureCommandQueue-MC9Umtik.js';
import './HighlightCounter-CyGKc4UY.js';
import './popupUtils-Cue28GeP.js';
import './RefreshableLayerView-BbJtCSFZ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([y()],t.prototype,"layer",void 0),e([y({readOnly:!0})],t.prototype,"availableFields",null),t=e([c("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t=class extends(o(X)){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};t=e([c("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
