import{k as f,bk as u,A as p,au as n,bv as S}from"./main-BPeHLg3l.js";import{s as d}from"./projection-BOG1LnbD.js";import{g as i,f as y,W as x,E as h,U as O,D as N,R as J,u as k,s as B}from"./dataUtils-C7jLD1sV.js";import{m as P,j as b,_ as g,h as v}from"./RasterSymbolizer-Blc-k7lk.js";import{a as w,c as z,y as D,T}from"./PolynomialTransform-B33we91o.js";import{w as F,v as I,i as E}from"./rasterProjectionHelper-DFCkop_t.js";var c;let l=c=class extends w{constructor(){super(...arguments),this.type="identity"}clone(){return new c}};f([u({IdentityXform:"identity"})],l.prototype,"type",void 0),l=c=f([p("esri.layers.support.rasterTransforms.IdentityTransform")],l);const G=l,j={GCSShiftXform:z,IdentityXform:G,PolynomialXform:D};function R(a){if(!a?.type)return null;const e=j[a?.type];if(e){const r=new e;return r.read(a),r}return null}class A{convertVectorFieldData(e){const r=i.fromJSON(e.pixelBlock),s=y(r,e.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(e){const r=i.fromJSON(e.pixelBlock),s=P(r);return Promise.resolve(s)}async decode(e){const r=await b(e.data,e.options);return r&&r.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?n.fromJSON(e.extent):null;const r=this.symbolizer.symbolize(e);return Promise.resolve(r!=null?r.toJSON():null)}async updateSymbolizer(e){this.symbolizer=g.fromJSON(e.symbolizerJSON),e.histograms&&this.symbolizer?.rendererJSON.type==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=T(e.rasterFunctionJSON)}async process(e){const r=this.rasterFunction.process({extent:n.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map(s=>s!=null?i.fromJSON(s):null),primaryPixelSizes:e.primaryPixelSizes?.map(s=>s!=null?S.fromJSON(s):null),primaryRasterIds:e.primaryRasterIds});return r!=null?r.toJSON():null}stretch(e){const r=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r?.toJSON())}estimateStatisticsHistograms(e){const r=v(i.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}split(e){const r=x(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,e.useBilinear===!1);return r&&r.forEach((s,o)=>{r.set(o,s?.toJSON())}),Promise.resolve(r)}clipTile(e){const r=i.fromJSON(e.pixelBlock),s=h({...e,pixelBlock:r});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(e){const r=e.srcPixelBlocks.map(m=>m?new i(m):null),s=O(r,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,t=s;return e.coefs&&(t=N(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=J(e.destDimension,e.gcsGrid),t=k(t,e.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:t?.toJSON(),localNorthDirections:o}}async createFlowMesh(e,r){const s={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:t}=await B(e.meshType,e.simulationSettings,s,r.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:t.buffer},transferList:[o.buffer,t.buffer]}}async getProjectionOffsetGrid(e){const r=n.fromJSON(e.projectedExtent),s=n.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new d({steps:e.datumTransformationSteps})),(e.includeGCSGrid||F(r.spatialReference,s.spatialReference,o))&&await I();const t=e.rasterTransform?R(e.rasterTransform):null;return E({...e,projectedExtent:r,srcBufferExtent:s,datumTransformation:o,rasterTransform:t})}}export{A as default};
