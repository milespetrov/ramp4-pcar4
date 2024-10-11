import { aW as e, aY as c, b2 as d$1, b4 as P$1, V as has } from './main-DOY18Znt.js';
import { X } from './FeatureLayerView2D-Cl0lMr24.js';
import './preload-helper-dJJaZANz.js';
import './Container-D42go_AA.js';
import './highlightReasons-BbxOKpgO.js';
import './definitions-slUvtMCM.js';
import './enums-CgzwTbC2.js';
import './Texture-L5kBOlaX.js';
import './LayerView-DMBEyl18.js';
import './TechniqueInstance-D5maOUl-.js';
import './UpdateTracking2D-DMynXkpB.js';
import './TurboLine-C7upPTWm.js';
import './enums-DZmWLm_j.js';
import './earcut-MNkSMRh2.js';
import './GeometryUtils-D9FXbSmd.js';
import './Rect-9uT7dZO1.js';
import './LabelMetric-BIbWEKUo.js';
import './Program-2tekXhM2.js';
import './VertexElementDescriptor-BrMxIhbJ.js';
import './BindType-KnpK3yZX.js';
import './Util-C-13kewk.js';
import './constants-C0QDwCF4.js';
import './TileContainer-BZy6pNh7.js';
import './WGLContainer-DUTlgIfF.js';
import './ProgramTemplate-JYMl3wh-.js';
import './StyleDefinition-CR2vYxyv.js';
import './config-Di5U9yzL.js';
import './tileUtils-DU1rqR7R.js';
import './SDFHelper-D_E-JIhf.js';
import './floatRGBA-C3BDFqRa.js';
import './FeatureCommandQueue-ARE0WRDS.js';
import './HighlightCounter-D5yol7rh.js';
import './popupUtils-DDjdL8Tq.js';
import './RefreshableLayerView-DX0WcEK9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
