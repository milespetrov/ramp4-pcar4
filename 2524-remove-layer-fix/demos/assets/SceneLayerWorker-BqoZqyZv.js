const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i3s-RfwEB8nJ.js","./_commonjsHelpers-DCkdB7M8.js","./projectBuffer-ChAiX47d.js","./main-CFpM9i38.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./projection-B6HHT9iG.js","./projectMeshVertexPositions-B93IuOZp.js","./MeshLocalVertexSpace-1wJUmI6P.js","./vertexSpaceConversion--Muu4xxu.js","./mat3-XZDRtl20.js","./common-DQOJ18NT.js","./mat3f64-q3fE-ZOt.js","./mat4-BZ-Redsx.js","./mat4f64-CSKppSlJ.js","./vec32-DwOYpah8.js","./spatialReferenceEllipsoidUtils-BJp_DbqQ.js","./computeTranslationToOriginAndRotation-Cc-Zr2Qi.js","./projectPointToVector-Bmpb6BAY.js","./meshVertexSpaceUtils-BXu36Q1q.js","./vec3-0qhc16tK.js","./BufferView-DAkqhQk8.js","./vec2-DGVIkCvT.js","./vec42-CKs01hkn.js","./vec4-W7TjJvRT.js"])))=>i.map(i=>d[i]);
import{_ as P}from"./preload-helper-ExcqyqRp.js";import{eN as K,D as C,eD as Q}from"./main-CFpM9i38.js";import{a as W,b as X}from"./MeshLocalVertexSpace-1wJUmI6P.js";import{f as Z,l as ee}from"./vec3-0qhc16tK.js";import"./vec4f64-CMoMXWBi.js";import"./sphere-VTrZcxxc.js";import"./I3SUtil-DmoyDLfU.js";import"./mat4-BZ-Redsx.js";import"./common-DQOJ18NT.js";import"./vec32-DwOYpah8.js";import"./vec42-CKs01hkn.js";import"./mat3-XZDRtl20.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-BzIgnumB.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-B7N_6o8F.js";import"./projectBuffer-ChAiX47d.js";import"./projectVectorToVector-B6MkjJ9m.js";import"./projectPointToVector-Bmpb6BAY.js";import"./projection-B6HHT9iG.js";import"./Query-B8kTaKZ5.js";import"./Field-CoyqNdTx.js";import"./fieldType-BNObABBN.js";import"./TimeExtent-Ba88HmAN.js";import"./I3SBinaryReader-DlOyhXfd.js";import"./VertexAttribute-BdZWZuT1.js";import"./floatRGBA-CH-Cwy2V.js";import"./NormalAttribute.glsl-CsurkK-0.js";import"./compilerUtils-DbmoCggA.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./orientedBoundingBox-BJXLMb3u.js";import"./quat-EwcH41em.js";import"./spatialReferenceEllipsoidUtils-BJp_DbqQ.js";import"./computeTranslationToOriginAndRotation-Cc-Zr2Qi.js";import"./ViewingMode-HRfKv6NR.js";var N,j;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(N||(N={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(j||(j={}));function te(){return M||(M=new Promise(e=>P(()=>import("./i3s-RfwEB8nJ.js"),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.i).then(({default:t})=>{const o=t({locateFile:oe,onRuntimeInitialized:()=>e(o)});delete o.then})).catch(e=>{throw e})),M}function oe(e){return K(`esri/libs/i3s/${e}`)}let M;var $,b,B,V,k;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})($||($={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(b||(b={}));(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(B||(B={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(V||(V={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(k||(k={}));async function ke(e){n=await g();const t=[e.geometryBuffer];return{result:H(n,e,t),transferList:t}}async function He(e){n=await g();const t=[e.geometryBuffer],{geometryBuffer:o}=e,a=o.byteLength,i=n._malloc(a),l=new Uint8Array(n.HEAPU8.buffer,i,a);l.set(new Uint8Array(o));const s=n.dracoDecompressPointCloudData(i,l.byteLength);if(n._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const f=s.featureIds?.length>0?s.featureIds.slice():null,m=s.positions.slice();return f&&t.push(f.buffer),t.push(m.buffer),{result:{positions:m,featureIds:f},transferList:t}}async function Ye(e){await g(),ne(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function Je(e){await g(),re(e)}async function ze(e){n=await g(),n.setLegacySchema(e.context,e.jsonSchema)}async function Ge(e){const{localMatrix:t,origin:o,positions:a,vertexSpace:i}=e,l=C.fromJSON(e.inSpatialReference),s=C.fromJSON(e.outSpatialReference);let f;const[{projectBuffer:m},{initializeProjection:R}]=await Promise.all([P(()=>import("./projectBuffer-ChAiX47d.js").then(c=>c.p),__vite__mapDeps([2,3,4,5]),import.meta.url),P(()=>import("./projection-B6HHT9iG.js").then(c=>c.p),__vite__mapDeps([6,4,3,5,2]),import.meta.url)]);await R(l,s);const w=[0,0,0];if(!m(o,l,0,w,s,0))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(f=new Float64Array(a.length),!m(a,l,0,f,s,0,f.length/3))throw new Error("Failed to project")}else{const c=i.type==="georeferenced"?W.fromJSON(i):X.fromJSON(i),{projectMeshVertexPositions:u}=await P(async()=>{const{projectMeshVertexPositions:p}=await import("./projectMeshVertexPositions-B93IuOZp.js");return{projectMeshVertexPositions:p}},__vite__mapDeps([7,2,3,4,5,8,9,10,11,12,13,14,15,16,17,18,6,19,20,21,22,23,24]),import.meta.url),d=u({vertexAttributes:{position:a},transform:t?{localMatrix:t}:void 0,vertexSpace:c,spatialReference:l},s);if(!d)throw new Error("Failed to project");f=d}const S=f.length,[E,A,_]=w;for(let c=0;c<S;c+=3)f[c]-=E,f[c+1]-=A,f[c+2]-=_;return{result:{projected:f,original:a,projectedOrigin:w},transferList:[f.buffer,a.buffer]}}async function qe({normalMatrix:e,normals:t}){const o=new Float32Array(t.length);return Z(o,t,e),Q(e)&&ee(o,o),{result:{transformed:o,original:t},transferList:[o.buffer,t.buffer]}}function Ke(e){Y(e)}let I,n;function re(e){if(!n)return;const t=e.modifications,o=n._malloc(8*t.length),a=new Float64Array(n.HEAPU8.buffer,o,t.length);for(let i=0;i<t.length;++i)a[i]=t[i];n.setModifications(e.context,o,t.length,e.isGeodetic),n._free(o)}function H(e,t,o){const{context:a,globalTrafo:i,mbs:l,obbData:s,elevationOffset:f,geometryBuffer:m,geometryDescriptor:R,indexToVertexProjector:w,vertexToRenderProjector:S}=t,E=e._malloc(m.byteLength),A=33,_=e._malloc(A*Float64Array.BYTES_PER_ELEMENT),c=new Uint8Array(e.HEAPU8.buffer,E,m.byteLength);c.set(new Uint8Array(m));const u=new Float64Array(e.HEAPU8.buffer,_,A);L(u,[NaN,NaN,NaN]);let d=u.byteOffset+3*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,d);L(p,i),d+=16*u.BYTES_PER_ELEMENT,p=new Float64Array(u.buffer,d),L(p,l),d+=4*u.BYTES_PER_ELEMENT,s&&(p=new Float64Array(u.buffer,d),L(p,s));const v=R,J={isDraco:!1,isLegacy:!1,color:t.layouts.some(h=>h.some(y=>y.name==="color")),normal:t.needNormals&&t.layouts.some(h=>h.some(y=>y.name==="normalCompressed")),uv0:t.layouts.some(h=>h.some(y=>y.name==="uv0")),uvRegion:t.layouts.some(h=>h.some(y=>y.name==="uvRegion")),featureIndex:v.featureIndex},r=e.process(a,!!t.obbData,E,c.byteLength,v,J,_,f,w,S,t.normalReferenceFrame);if(e._free(_),e._free(E),r.error.length>0)throw new Error(`i3s.wasm: ${r.error}`);if(r.discarded)return null;const U=r.componentOffsets.length>0?r.componentOffsets.slice():null,x=r.featureIds.length>0?r.featureIds.slice():null,z=r.anchorIds.length>0?Array.from(r.anchorIds):null,G=r.anchors.length>0?Array.from(r.anchors):null,F=r.interleavedVertedData.slice().buffer,O=r.indicesType===N.Int16?new Uint16Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/2).slice():new Uint32Array(r.indices.buffer,r.indices.byteOffset,r.indices.byteLength/4).slice(),D=r.positions.slice(),T=r.positionIndicesType===N.Int16?new Uint16Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/2).slice():new Uint32Array(r.positionIndices.buffer,r.positionIndices.byteOffset,r.positionIndices.byteLength/4).slice(),q={layout:t.layouts[0],interleavedVertexData:F,indices:O,hasColors:r.hasColors,hasModifications:r.hasModifications,positionData:{data:D,indices:T}};return x&&o.push(x.buffer),U&&o.push(U.buffer),o.push(F),o.push(O.buffer),o.push(D.buffer),o.push(T.buffer),{componentOffsets:U,featureIds:x,anchorIds:z,anchors:G,transformedGeometry:q,obb:r.obb,globalTrafo:i}}function Qe(e){return e===0?b.Unmodified:e===1?b.PotentiallyModified:e===2?b.Culled:b.Unknown}function ne(e){if(!n)return;const{context:t,buffer:o}=e,a=n._malloc(o.byteLength),i=o.byteLength/Float64Array.BYTES_PER_ELEMENT,l=new Float64Array(n.HEAPU8.buffer,a,i),s=new Float64Array(o);l.set(s),n.filterOBBs(t,a,i),s.set(l),n._free(a)}function Y(e){n&&n.destroy(e)===0&&(n=null)}function L(e,t){for(let o=0;o<t.length;++o)e[o]=t[o]}async function We(){n||await g()}function g(){return n?Promise.resolve(n):(I||(I=te().then(e=>(n=e,I=null,n))),I)}const Xe={transform:(e,t)=>n&&H(n,e,t),destroy:Y};export{Ke as destroyContext,He as dracoDecompressPointCloudData,Ye as filterObbsForModifications,ne as filterObbsForModificationsSync,We as initialize,Qe as interpretObbModificationResults,ke as process,Ge as project,ze as setLegacySchema,Je as setModifications,re as setModificationsSync,Xe as test,qe as transformNormals};
