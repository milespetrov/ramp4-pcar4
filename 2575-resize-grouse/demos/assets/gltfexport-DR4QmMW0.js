import{s as k,G as v,fe as it,aW as rt,aC as M,fL as nt,cy as $,eu as q,eL as at,aq as ot,n as ct,eZ as ht}from"./main-BGj2Vmyg.js";import{N as ft,T as ut}from"./quat-BCT574U_.js";import{r as lt,t as dt,e as mt}from"./quatf64-aQ5IuZRd.js";import{o as L,c as Y,_ as pt,A as _t,H as j}from"./vec32-DbnKtPMD.js";import{m as gt}from"./Mesh-1EejD-Ae.js";import{B as wt}from"./vertexSpaceConversion-Dmj9kgiP.js";import{C as p,D as b}from"./enums-Dk3osxpS.js";import{r as U}from"./resourceUtils-zKobMMwq.js";import"./preload-helper-ExcqyqRp.js";import"./mat3f64-q3fE-ZOt.js";import"./common-DQOJ18NT.js";import"./vec42-CKs01hkn.js";import"./MeshTransform-BU5XLe70.js";import"./mat4-BuXnPPlc.js";import"./mat4f64-CSKppSlJ.js";import"./imageUtils-OLcCm5fI.js";import"./MeshVertexAttributes-C6qZyWHr.js";import"./MeshLocalVertexSpace-z2Jec-il.js";import"./meshVertexSpaceUtils-DXRX7iOU.js";import"./earcut-Lltz9D9k.js";import"./Indices-wD1X1j8E.js";import"./plane-DqlqRgpF.js";import"./vec2f64-B7N_6o8F.js";import"./vec4f64-CMoMXWBi.js";import"./deduplicate-kildtsZX.js";import"./projectPointToVector-D0tTIf9s.js";import"./projection-DadsGrbR.js";import"./projectBuffer-Br_Qcvde.js";import"./spatialReferenceEllipsoidUtils-BOP-T0bM.js";import"./computeTranslationToOriginAndRotation-CB2GZFnU.js";import"./vec3-Dpes4cE6.js";import"./External-lB6tLSbv.js";import"./infoFor3D-_5f2f6Um.js";import"./mat3-XZDRtl20.js";import"./BufferView-aw3bsppF.js";import"./vec2-DGVIkCvT.js";import"./vec4-D7ZrllJx.js";import"./basicInterfaces-CZwQPxTp.js";function At(i){const t=Q(i);return t!=null?t.toDataURL():""}async function W(i,t){const e=Q(i);if(e==null)throw new k("imageToArrayBuffer","Unsupported image type");const s=Tt(i),r=await new Promise(a=>e.toBlob(a,s));if(v(t),!r)throw new k("imageToArrayBuffer","Failed to encode image");const n=await r.arrayBuffer();return v(t),{data:n,type:s}}function Tt(i){if(!(i instanceof HTMLImageElement))return"image/png";const t=i.src;if(it(t)){const e=rt(t);return e?.mediaType==="image/jpeg"?e.mediaType:"image/png"}return/\.png$/i.test(t)?"image/png":/\.(jpg|jpeg)$/i.test(t)?"image/jpeg":"image/png"}function Q(i){if(i instanceof HTMLCanvasElement)return i;if(i instanceof HTMLVideoElement)return null;const t=document.createElement("canvas");t.width=i.width,t.height=i.height;const e=t.getContext("2d");return i instanceof HTMLImageElement?e.drawImage(i,0,0,i.width,i.height):i instanceof ImageData&&e.putImageData(i,0,0),t}function bt(i){const t=[],e=new Uint8Array(i);for(let s=0;s<e.length;s++)t.push(String.fromCharCode(e[s]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function Et(i){if(i.byteLength<8)return!1;const t=new Uint8Array(i);return t[0]===137&&t[1]===80&&t[2]===78&&t[3]===71&&t[4]===13&&t[5]===10&&t[6]===26&&t[7]===10}var C;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(C||(C={}));let I=class N{constructor(t,e){if(!t)throw new Error("GLB requires a JSON gltf chunk");this._length=N.HEADER_SIZE,this._length+=N.CHUNK_HEADER_SIZE;const s=Rt(t);if(this._length+=J(s.byteLength,4),e&&(this._length+=N.CHUNK_HEADER_SIZE,this._length+=e.byteLength,e.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,C.JSON,32);e&&this._writeChunk(e,r,C.BIN)}_writeHeader(){this._outView.setUint32(0,N.MAGIC,!0),this._outView.setUint32(4,N.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(t,e,s,r=0){const n=J(t.byteLength,4);for(this._outView.setUint32(e,n,!0),this._outView.setUint32(e+=4,s,!0),yt(this._outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this._outView.setUint8(e,r),e++;return e}};function yt(i,t,e,s,r){new Uint8Array(i,e,r).set(new Uint8Array(t,s,r),0)}function Rt(i){return new TextEncoder().encode(i).buffer}function J(i,t){return t*Math.ceil(i/t)}I.HEADER_SIZE=12,I.CHUNK_HEADER_SIZE=8,I.MAGIC=1179937895,I.VERSION=2;var R,E,y,g,K,O,Z;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(R||(R={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(E||(E={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(y||(y={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(g||(g={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(K||(K={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(O||(O={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(Z||(Z={}));let xt=class{constructor(t,e,s,r,n){this._buffer=t,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,e.bufferViews||(e.bufferViews=[]),this.index=e.bufferViews.length,this._bufferView={buffer:t.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==y.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),e.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(t){const e=this._data.length;if(this._data.push(t),this._accessorIndex>=0){const s=e%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?t:Math.min(r,t);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?t:Math.max(n,t)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function t(e,s){return s*Math.ceil(e/s)}return t(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(t,e){switch(this._componentType){case p.BYTE:return new Int8Array(t,e);case p.FLOAT:return new Float32Array(t,e);case p.SHORT:return new Int16Array(t,e);case p.UNSIGNED_BYTE:return new Uint8Array(t,e);case p.UNSIGNED_INT:return new Uint32Array(t,e);case p.UNSIGNED_SHORT:return new Uint16Array(t,e)}}writeOutToBuffer(t,e){this._createTypedArray(t,e).set(this._data)}writeAsync(t){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=t.then(e=>{const s=new Uint8Array(e);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(t){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=t;const e=this._numComponentsForDataType;this._accessorMin=new Array(e),this._accessorMax=new Array(e)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const t=this._getElementSize(),e=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/e;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:t*(this._accessorIndex/e),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case p.UNSIGNED_BYTE:case p.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(t=>this._finalizedPromiseResolve=t)}async finalize(){const t=this._bufferView,e=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&e.push(this._asyncWritePromise),await Promise.allSettled(e),this._isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case p.BYTE:case p.UNSIGNED_BYTE:return 1;case p.SHORT:case p.UNSIGNED_SHORT:return 2;case p.UNSIGNED_INT:case p.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case g.SCALAR:return 1;case g.VEC2:return 2;case g.VEC3:return 3;case g.VEC4:case g.MAT2:return 4;case g.MAT3:return 9;case g.MAT4:return 16}}},X=class{constructor(t){this._gltf=t,this._bufferViews=[],this._isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;const e={byteLength:-1};t.buffers.push(e),this._buffer=e}addBufferView(t,e,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new xt(this,this._gltf,t,e,s);return this._bufferViews.push(r),r}getByteOffset(t){let e=0;for(const s of this._bufferViews){if(s===t)return e;e+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(t){const e=[];for(const s of this._bufferViews){if(t&&s===t)return e;e.push(s.finalized)}return e}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const t=this._getTotalSize(),e=new ArrayBuffer(t);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(e,s),s+=r.byteSize;return e}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=Promise.allSettled(this.getViewFinalizePromises()).then(()=>{this._isFinalized=!0;const t=this.getArrayBuffer();this._buffer.byteLength=t.byteLength,this._buffer.uri=t}),this._gltf.extras.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let t=0;for(const e of this._bufferViews)t+=e.byteSize;return t}};function Nt(i,t){if(i.components)for(const e of i.components)e.faces&&e.shading==="smooth"&&It(e,t)}function It(i,t){t.normal==null&&(t.normal=new Float32Array(t.position.length));const e=i.faces,{position:s,normal:r}=t,n=e.length/3;for(let a=0;a<n;++a){const o=3*e[3*a],c=3*e[3*a+1],h=3*e[3*a+2],u=L(Mt,s[o],s[o+1],s[o+2]),_=L(St,s[c],s[c+1],s[c+2]),l=L(Lt,s[h],s[h+1],s[h+2]),w=Y(_,_,u),d=Y(l,l,u),m=pt(w,w,d);r[o]+=m[0],r[o+1]+=m[1],r[o+2]+=m[2],r[c]+=m[0],r[c+1]+=m[1],r[c+2]+=m[2],r[h]+=m[0],r[h+1]+=m[1],r[h+2]+=m[2]}for(let a=0;a<r.length;a+=3)L(x,r[a],r[a+1],r[a+2]),_t(x,x),r[a]=x[0],r[a+1]=x[1],r[a+2]=x[2]}const Mt=M(),St=M(),Lt=M(),x=M(),P=()=>ct.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");class Ct{constructor(t,e){this.options=e,this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{output:e.output,binChunkBuffer:null,promises:[]}},this._addScenes(t)}_addScenes(t){this.gltf.scene=t.defaultScene;const e=this.gltf.extras,s=e.output.buffer===R.GLB||e.output.image===E.GLB;s&&(e.binChunkBuffer=new X(this.gltf)),t.forEachScene(r=>{this._addScene(r)}),s&&e.binChunkBuffer.finalize()}_addScene(t){this.gltf.scenes||(this.gltf.scenes=[]);const e={};t.name&&(e.name=t.name),t.forEachNode(s=>{e.nodes||(e.nodes=[]),e.nodes.push(...this._addNodes(s))}),this.gltf.scenes.push(e)}_addNodes(t){this.gltf.nodes||(this.gltf.nodes=[]);const e={};t.name&&(e.name=t.name);const s=t.translation;j(s,nt)||(e.translation=$(s));const r=t.rotation;ft(r,lt)||(e.rotation=dt(r));const n=t.scale;j(n,q)||(e.scale=$(n));const a=this.gltf.nodes.length;if(this.gltf.nodes.push(e),t.mesh&&t.mesh.vertexAttributes.position){const o=this._createMeshes(t.mesh),c=[a];if(o.length===1)this._addMesh(e,o[0]);else for(const h of o){const u={};this._addMesh(u,h),c.push(this.gltf.nodes.length),this.gltf.nodes.push(u)}return c}return t.forEachNode(o=>{e.children||(e.children=[]),e.children.push(...this._addNodes(o))}),[a]}_addMesh(t,e){this.gltf.meshes??=[];const s=this.gltf.meshes.length;this.gltf.meshes.push(e),t.mesh=s}_createMeshes(t){const e=this.gltf.extras,s=e.output.buffer===R.GLB;let r;r=s?e.binChunkBuffer:new X(this.gltf);const n=this.options.origin,a=t.vertexSpace.clone();a.origin=[n.x,n.y,n.z??0];const o=wt({vertexAttributes:t.vertexAttributes,vertexSpace:t.vertexSpace,transform:this.options?.ignoreLocalTransform?null:t.transform,spatialReference:t.spatialReference},a,{targetUnit:this.options.unitConversionDisabled?void 0:"meters"});if(!o)return[];Nt(t,o),Ot(o);const{position:c,normal:h,tangent:u}=o,{uv:_,color:l}=t.vertexAttributes,w=r.addBufferView(p.FLOAT,g.VEC3,y.ARRAY_BUFFER);let d,m,A,T;h&&(d=r.addBufferView(p.FLOAT,g.VEC3,y.ARRAY_BUFFER)),_&&(m=r.addBufferView(p.FLOAT,g.VEC2,y.ARRAY_BUFFER)),u&&(A=r.addBufferView(p.FLOAT,g.VEC4,y.ARRAY_BUFFER)),l&&(T=r.addBufferView(p.UNSIGNED_BYTE,g.VEC4,y.ARRAY_BUFFER)),w.startAccessor("POSITION"),d&&d.startAccessor("NORMAL"),m&&m.startAccessor("TEXCOORD_0"),A&&A.startAccessor("TANGENT"),T&&T.startAccessor("COLOR_0");const et=o.position.length/3;for(let f=0;f<et;++f)w.push(c[3*f]),w.push(c[3*f+1]),w.push(c[3*f+2]),d&&h!=null&&(d.push(h[3*f]),d.push(h[3*f+1]),d.push(h[3*f+2])),m&&_!=null&&(m.push(_[2*f]),m.push(_[2*f+1])),A&&u!=null&&(A.push(u[4*f]),A.push(u[4*f+1]),A.push(u[4*f+2]),A.push(u[4*f+3])),T&&l!=null&&(T.push(l[4*f]),T.push(l[4*f+1]),T.push(l[4*f+2]),T.push(l[4*f+3]));const st=w.endAccessor(),H=this._addAccessor(w.index,st);let B,V,z,F,S;if(d){const f=d.endAccessor();B=this._addAccessor(d.index,f)}if(m){const f=m.endAccessor();V=this._addAccessor(m.index,f)}if(A){const f=A.endAccessor();z=this._addAccessor(A.index,f)}if(T){const f=T.endAccessor();F=this._addAccessor(T.index,f)}const D=[];return t.components&&t.components.length>0&&t.components[0].faces?(S=r.addBufferView(p.UNSIGNED_INT,g.SCALAR,y.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(S,t.components,D,H,B,V,z,F)):this._addMeshVertexNonIndexed(t.components,D,H,B,V,z,F),w.finalize(),d&&d.finalize(),m&&m.finalize(),A&&A.finalize(),S&&S.finalize(),T&&T.finalize(),s||r.finalize(),D}_addMaterial(t){if(t===null)return;const e=this._materialMap.indexOf(t);if(e!==-1)return e;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(t.alphaMode){case"mask":s.alphaMode=O.MASK;break;case"auto":case"blend":s.alphaMode=O.BLEND}s.alphaCutoff=t.alphaCutoff,t.doubleSided&&(s.doubleSided=t.doubleSided),s.pbrMetallicRoughness={};const r=o=>o**2.1,n=o=>{const c=o.toRgba();return c[0]=r(c[0]/255),c[1]=r(c[1]/255),c[2]=r(c[2]/255),c};if(t.color!=null&&(s.pbrMetallicRoughness.baseColorFactor=n(t.color)),t.colorTexture!=null&&(s.pbrMetallicRoughness.baseColorTexture=this._createTextureInfo(t.colorTexture,t.colorTextureTransform)),t.normalTexture!=null&&(s.normalTexture=this._createTextureInfo(t.normalTexture,t.normalTextureTransform)),t instanceof gt){if(t.emissiveTexture!=null&&(s.emissiveTexture=this._createTextureInfo(t.emissiveTexture,t.emissiveTextureTransform)),t.emissiveColor!=null){const o=n(t.emissiveColor);s.emissiveFactor=[o[0],o[1],o[2]]}t.occlusionTexture!=null&&(s.occlusionTexture=this._createTextureInfo(t.occlusionTexture,t.occlusionTextureTransform)),t.metallicRoughnessTexture!=null&&(s.pbrMetallicRoughness.metallicRoughnessTexture=this._createTextureInfo(t.metallicRoughnessTexture,t.metallicRoughnessTextureTransform)),s.pbrMetallicRoughness.metallicFactor=t.metallic,s.pbrMetallicRoughness.roughnessFactor=t.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,P().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(t),a}_createTextureInfo(t,e){const s={index:this._addTexture(t)};return e&&(s.extensions||(s.extensions={}),s.extensions.KHR_texture_transform={scale:e.scale,offset:e.offset,rotation:at(e.rotation)}),s}_addTexture(t){const e=this.gltf.textures??[];return this.gltf.textures=e,ot(this._textureMap,t,()=>{const s={sampler:this._addSampler(t),source:this._addImage(t)},r=e.length;return e.push(s),r})}_addImage(t){const e=this._imageMap.get(t);if(e!=null)return e;this.gltf.images||(this.gltf.images=[]);const s={};if(t.url)s.uri=t.url;else{const n=t.data;s.extras=n;for(let o=0;o<this.gltf.images.length;++o)if(n===this.gltf.images[o].extras)return o;const a=this.gltf.extras;switch(a.output.image){case E.GLB:{const o=a.binChunkBuffer.addBufferView(p.UNSIGNED_BYTE,g.SCALAR);if(U(n))n.data!=null&&o.writeOutToBuffer(n.data,0);else{const c=W(n,this.options.signal).then(({data:h,type:u})=>(s.mimeType=u,h));a.promises.push(o.writeAsync(c).then(()=>{o.finalize()}))}s.bufferView=o.index;break}case E.DataURI:if(U(n)){P().warnOnce("Image export for basis compressed textures not available.");break}s.uri=At(n);break;default:if(U(n)){P().warnOnce("Image export for basis compressed textures not available.");break}a.promises.push(W(n,this.options.signal).then(({data:o,type:c})=>{s.uri=o,s.mimeType=c}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(t,r),r}_addSampler(t){this.gltf.samplers||(this.gltf.samplers=[]);let e=b.REPEAT,s=b.REPEAT;if(typeof t.wrap=="string")switch(t.wrap){case"clamp":e=b.CLAMP_TO_EDGE,s=b.CLAMP_TO_EDGE;break;case"mirror":e=b.MIRRORED_REPEAT,s=b.MIRRORED_REPEAT}else{switch(t.wrap.vertical){case"clamp":s=b.CLAMP_TO_EDGE;break;case"mirror":s=b.MIRRORED_REPEAT}switch(t.wrap.horizontal){case"clamp":e=b.CLAMP_TO_EDGE;break;case"mirror":e=b.MIRRORED_REPEAT}}const r={wrapS:e,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(t,e){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:t,byteOffset:e.byteOffset,componentType:e.componentType,count:e.count,type:e.type,min:e.min,max:e.max,name:e.name};e.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(t,e,s,r,n,a,o,c){const h=new Map;for(const u of e){t.startAccessor("INDICES");for(let d=0;d<u.faces.length;++d)t.push(u.faces[d]);const _=t.endAccessor(),l={attributes:{POSITION:r},indices:this._addAccessor(t.index,_),material:this._addMaterial(u.material)};n&&u.shading!=="flat"&&(l.attributes.NORMAL=n),a&&(l.attributes.TEXCOORD_0=a),o&&u.shading!=="flat"&&(l.attributes.TANGENT=o),c&&(l.attributes.COLOR_0=c);const w=h.get(u.name);if(w)w.primitives.push(l);else{const d={name:u.name,primitives:[l]};h.set(u.name,d),s.push(d)}}}_addMeshVertexNonIndexed(t,e,s,r,n,a,o){const c={primitives:[]};e.push(c);const h={attributes:{POSITION:s}};r&&(h.attributes.NORMAL=r),n&&(h.attributes.TEXCOORD_0=n),a&&(h.attributes.TANGENT=a),o&&(h.attributes.COLOR_0=o),t&&(h.material=this._addMaterial(t[0].material)),c.primitives.push(h)}}function Ot({position:i,normal:t,tangent:e}){G(i,3),G(t,3),G(e,4)}function G(i,t){if(i!=null)for(let e=1,s=2;e<i.length;e+=t,s+=t){const r=i[e],n=i[s];i[e]=n,i[s]=-r}}class Bt{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(t){if(this._scenes.includes(t))throw new Error("Scene already added");this._scenes.push(t)}removeScene(t){ht(this._scenes,t)}forEachScene(t){this._scenes.forEach(t)}}class Vt{constructor(){this.name="",this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}}class zt{constructor(t){this.mesh=t,this.name="",this.translation=M(),this.rotation=mt(),this.scale=$(q),this._nodes=[]}addNode(t){if(this._nodes.includes(t))throw new Error("Node already added");this._nodes.push(t)}forEachNode(t){this._nodes.forEach(t)}set rotationAngles(t){ut(this.rotation,t[0],t[1],t[2])}}const Ft="model.gltf",tt="model.glb";async function Dt(i,t){const e=new Ct(i,t).gltf,s=e.extras.promises;let r=1,n=1,a=null;await Promise.allSettled(s),v(t.signal);const o=t.jsonSpacing??4,c=new Map,h=JSON.stringify(e,(u,_)=>{if(u!=="extras"){if(_ instanceof ArrayBuffer){if(Et(_))switch(t.output?.image){case E.DataURI:case E.GLB:break;case E.External:default:{const l=`img${n}.png`;return n++,c.set(l,_),l}}switch(t.output?.buffer){case R.DataURI:return bt(_);case R.GLB:if(a)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(a=_);case R.External:default:{const l=`data${r}.bin`;return r++,c.set(l,_),l}}}return _}},o);return t.output?.buffer===R.GLB||t.output?.image===E.GLB?c.set(tt,new I(h,a).buffer):c.set(Ft,h),c}async function Ut(i,t){const e=(await Dt(i,{output:{buffer:R.GLB,image:E.GLB},jsonSpacing:0,...t})).get(tt);if(!(e&&e instanceof ArrayBuffer))throw new Error("failed to export to glb");return e}async function xe(i,t){const e=new Bt,s=new Vt;return e.addScene(s),s.addNode(new zt(i)),await Ut(e,{origin:i.origin,...t})}export{xe as toBinaryGLTF};
