import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-f7a82629.js';
import { X } from './FeatureLayerView2D-f02e3db4.js';
import './preload-helper-a4975f27.js';
import './Container-1362b471.js';
import './highlightReasons-a7845070.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-6f164e1e.js';
import './LayerView-f4e09fc1.js';
import './TechniqueInstance-42de27df.js';
import './UpdateTracking2D-c2efa1b0.js';
import './TurboLine-b3b0e608.js';
import './enums-d24bcbbf.js';
import './earcut-97c141ed.js';
import './GeometryUtils-d5a1955e.js';
import './Rect-09e0f861.js';
import './LabelMetric-b3ee2b71.js';
import './Program-5ee70d24.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-7847c9b0.js';
import './constants-412c3a33.js';
import './TileContainer-a9fa1769.js';
import './WGLContainer-df3e57ca.js';
import './ProgramTemplate-019f0fb4.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-0a03ce9d.js';
import './floatRGBA-6914ad23.js';
import './FeatureCommandQueue-9930899e.js';
import './HighlightCounter-14cf6e77.js';
import './popupUtils-f6a21ca6.js';
import './RefreshableLayerView-930e48c7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
