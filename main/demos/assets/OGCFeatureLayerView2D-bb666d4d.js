import { aX as e, aY as y, aZ as c } from './main-a96d6142.js';
import { X } from './FeatureLayerView2D-54d3f8ef.js';
import './preload-helper-a4975f27.js';
import './Container-44975a0e.js';
import './highlightReasons-360a8783.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-9d2f2e99.js';
import './LayerView-873d20bf.js';
import './TechniqueInstance-60b08d87.js';
import './UpdateTracking2D-ab4de000.js';
import './TurboLine-5d88d82b.js';
import './enums-d24bcbbf.js';
import './earcut-66eead62.js';
import './GeometryUtils-0544a896.js';
import './Rect-09e0f861.js';
import './LabelMetric-be262f0f.js';
import './Program-82b81b71.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-3fbef04e.js';
import './constants-412c3a33.js';
import './TileContainer-c163f5c3.js';
import './WGLContainer-bb4e33e8.js';
import './ProgramTemplate-284d1bd6.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-29116735.js';
import './floatRGBA-3d965927.js';
import './FeatureCommandQueue-43349445.js';
import './HighlightCounter-cfbb9866.js';
import './popupUtils-b1f93957.js';
import './RefreshableLayerView-b4f5ec87.js';

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
