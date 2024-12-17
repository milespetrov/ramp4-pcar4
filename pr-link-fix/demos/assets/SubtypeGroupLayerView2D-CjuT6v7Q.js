import { bd as e, bf as a$1, bj as d$1, bk as P, N as has } from './main-DmLXxpkC.js';
import { r as re } from './FeatureLayerView2D-Q--MMNyy.js';
import './preload-helper-dJJaZANz.js';
import './Container-KcmSB7ST.js';
import './highlightReasons-C8iCMq0X.js';
import './definitions-BdwlvHBE.js';
import './enums-CwcDCDam.js';
import './Texture--CvkiTcr.js';
import './timeSupport-BU_CtCK9.js';
import './LayerView-C3u_asAK.js';
import './layerViewUtils-CRtvGSrJ.js';
import './TechniqueInstance-BKqFN3rJ.js';
import './UpdateTracking2D-Dv0HqW13.js';
import './BidiEngine-Z2aMxkhF.js';
import './GeometryUtils-SjXVzwXl.js';
import './enums-CHdyfzUK.js';
import './Rect-zdvLIBQm.js';
import './LabelMetric-BCLalxhL.js';
import './Program-CsfCArQW.js';
import './VertexElementDescriptor-Bcj0303n.js';
import './BindType-DQnxDFt3.js';
import './Util-B0zQ8Equ.js';
import './TileContainer-DH8g3NK6.js';
import './WGLContainer-L7Qwip2k.js';
import './ProgramTemplate-EQGeenY8.js';
import './vec3f32-CmlAce5k.js';
import './StyleDefinition-DkEWNPyD.js';
import './config-C86_VOH4.js';
import './earcut-quz6pw-4.js';
import './CircularArray-BCXLb8ry.js';
import './tileUtils-Ceq3VL9e.js';
import './SDFHelper-Dw3INfcq.js';
import './floatRGBA-103bGfT1.js';
import './FeatureCommandQueue-gDMOAJRn.js';
import './constants-BNnV1ogR.js';
import './HighlightCounter-PV7YdENi.js';
import './popupUtils-DcIpWHLl.js';
import './RefreshableLayerView-l89obM3G.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let o=class extends re{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._workerProxy,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([a$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
