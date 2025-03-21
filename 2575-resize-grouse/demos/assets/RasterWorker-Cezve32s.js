import{q as f,bm as p,C as u,aw as a,bx as S}from"./main-BGj2Vmyg.js";import{s as d}from"./projection-DadsGrbR.js";import{g as i,f as y,W as x,E as h,U as O,D as J,R as N,u as w,s as B}from"./dataUtils-BtFsPlb3.js";import{m as P,j as b,_ as g,h as k}from"./RasterSymbolizer-BkFtL2lG.js";import{a as v,c as z,y as D,T}from"./PolynomialTransform-B-OLARyB.js";import{w as $,v as F,i as I}from"./rasterProjectionHelper-VRt2OOe8.js";import"./preload-helper-ExcqyqRp.js";import"./projectBuffer-Br_Qcvde.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./colorUtils-CS8_2txG.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./colorRamps-DIEYcH-a.js";import"./Field-i4Jg3Z1x.js";import"./fieldType-sLYa_9iX.js";var m;let l=m=class extends v{constructor(){super(...arguments),this.type="identity"}clone(){return new m}};f([p({IdentityXform:"identity"})],l.prototype,"type",void 0),l=m=f([u("esri.layers.support.rasterTransforms.IdentityTransform")],l);const j=l,E={GCSShiftXform:z,IdentityXform:j,PolynomialXform:D};function G(n){if(!n?.type)return null;const e=E[n?.type];if(e){const s=new e;return s.read(n),s}return null}class tt{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=y(e,t.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(t){const e=i.fromJSON(t.pixelBlock),s=P(e);return Promise.resolve(s)}async decode(t){const e=await b(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(e!=null?e.toJSON():null)}async updateSymbolizer(t){this.symbolizer=g.fromJSON(t.symbolizerJSON),t.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=T(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:a.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(s=>s!=null?i.fromJSON(s):null),primaryPixelSizes:t.primaryPixelSizes?.map(s=>s!=null?S.fromJSON(s):null),primaryRasterIds:t.primaryRasterIds});return e!=null?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(e?.toJSON())}estimateStatisticsHistograms(t){const e=k(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=x(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,t.useBilinear===!1);return e&&e.forEach((s,r)=>{e.set(r,s?.toJSON())}),Promise.resolve(e)}clipTile(t){const e=i.fromJSON(t.pixelBlock),s=h({...t,pixelBlock:e});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(c=>c?new i(c):null),s=O(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let r,o=s;return t.coefs&&(o=J(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(r=N(t.destDimension,t.gcsGrid),o=w(o,t.isUV?"vector-uv":"vector-magdir",r)),{pixelBlock:o?.toJSON(),localNorthDirections:r}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:r,indexData:o}=await B(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:r.buffer,indexBuffer:o.buffer},transferList:[r.buffer,o.buffer]}}async getProjectionOffsetGrid(t){const e=a.fromJSON(t.projectedExtent),s=a.fromJSON(t.srcBufferExtent);let r=null;t.datumTransformationSteps&&(r=new d({steps:t.datumTransformationSteps})),(t.includeGCSGrid||$(e.spatialReference,s.spatialReference,r))&&await F();const o=t.rasterTransform?G(t.rasterTransform):null;return I({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:r,rasterTransform:o})}}export{tt as default};
