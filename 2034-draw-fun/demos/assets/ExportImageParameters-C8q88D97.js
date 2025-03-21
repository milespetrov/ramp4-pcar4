import{q as i,u as l,C as m,ap as u,bL as c}from"./main-DvRWqUGe.js";import{d as p}from"./scaleUtils-BKsbyZtg.js";import{n as y}from"./floorFilterUtils-DKzVzLpH.js";import{n as b}from"./sublayerUtils-DCnAuHqu.js";const d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let t=class extends u{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const a=y(this.floors,s);return s.toExportImageJSON(a)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&b(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(d[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,s=this.visibleSublayers.filter(a=>a.definitionExpression!=null||e&&a.floorInfo!=null);return s.length?JSON.stringify(s.reduce((a,n)=>{const o=y(this.floors,n),r=c(o,n.definitionExpression);return r!=null&&(a[n.id]=r),a},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,a=this.scale,n=r=>{r.visible&&(a===0||p(a,r.minScale,r.maxScale))&&(r.sublayers?r.sublayers.forEach(n):e.unshift(r))};s&&s.forEach(n);const o=this._get("visibleSublayers");return!o||o.length!==e.length||o.some((r,h)=>e[h]!==r)?e:o}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};i([l({readOnly:!0})],t.prototype,"dynamicLayers",null),i([l()],t.prototype,"floors",void 0),i([l({readOnly:!0})],t.prototype,"hasDynamicLayers",null),i([l()],t.prototype,"layer",null),i([l({readOnly:!0})],t.prototype,"layers",null),i([l({readOnly:!0})],t.prototype,"layerDefs",null),i([l({type:Number})],t.prototype,"scale",void 0),i([l({readOnly:!0})],t.prototype,"version",null),i([l({readOnly:!0})],t.prototype,"visibleSublayers",null),t=i([m("esri.layers.support.ExportImageParameters")],t);export{t as y};
