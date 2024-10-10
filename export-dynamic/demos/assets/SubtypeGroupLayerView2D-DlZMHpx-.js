import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-B5xDjGb9.js';
import { X } from './FeatureLayerView2D-B_1VIFNI.js';
import './preload-helper-dJJaZANz.js';
import './Container-BcuzFvXA.js';
import './highlightReasons-Bc3YQYKj.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-r10_HqEu.js';
import './LayerView-CKyu_sDV.js';
import './TechniqueInstance-B5FU7WMi.js';
import './UpdateTracking2D-D4nmh8tl.js';
import './TurboLine-CntGTe0n.js';
import './enums-DZmWLm_j.js';
import './earcut-DxKZnTRj.js';
import './GeometryUtils-C77D73fs.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-DRproYv5.js';
import './Program-BC2O4Fbl.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-CYuON8Bz.js';
import './constants-C0QDwCF4.js';
import './TileContainer-Y-HAUbtw.js';
import './WGLContainer-DGG5-qHF.js';
import './ProgramTemplate-58eH21Sh.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-Q05FOztf.js';
import './floatRGBA-CCzV2KH3.js';
import './FeatureCommandQueue-BnB85Xno.js';
import './HighlightCounter-BUIoYma-.js';
import './popupUtils-dBFy51FU.js';
import './RefreshableLayerView-5S2eh5cZ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
