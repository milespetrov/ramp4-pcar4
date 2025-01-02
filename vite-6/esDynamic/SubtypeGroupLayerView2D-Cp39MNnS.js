import{O as o,Q as u,S as l,T as p,a9 as g}from"./main-CQd9Cxe2.js";import{r as h}from"./FeatureLayerView2D-BSfGvefW.js";let e=class extends h{initialize(){this.addHandles([l(()=>this.view.scale,()=>this._update(),p)],"constructor")}isUpdating(){const i=this.layer.sublayers.some(n=>n.renderer!=null),s=this._commandsQueue.updateTracking.updating,a=this._updatingRequiredFieldsPromise!=null,t=!this._workerProxy,r=this.dataUpdating,d=i&&(s||a||t||r);return g("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}
  -> hasRenderer ${i}
  -> hasPendingCommand ${s}
  -> updatingRequiredFields ${a}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),d}};e=o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const m=e;export{m as default};
