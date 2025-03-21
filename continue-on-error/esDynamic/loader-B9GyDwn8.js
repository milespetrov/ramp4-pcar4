import{s as i,fd as Q,aU as W,hk as Z,ao as ee,bx as te,hM as B,n as y}from"./main-IAmJgjpH.js";import{e as P,r as R}from"./mat4f64-Dn1WEGBx.js";import{D as _,L as S,C as u,E as x}from"./enums-DBi1-Mm2.js";import{r as G}from"./Version-B6ZQhqj6.js";import{g as re,c as ne,i as oe,b as se,f as ae}from"./mat4-Bi_bA0LI.js";import{v as ie}from"./quat-Daku3KWt.js";import{e as ue}from"./quatf64-C16JxGFv.js";import{u as j,F as le,w as ce,q as fe,A as de,V as pe,B as me,g as he,d as Te,i as A,c as V,x as we,L as ge,O as xe,E as be}from"./BufferView-DtuJ_w0M.js";import{n as ye,t as _e,o as Se,r as Ee}from"./resourceUtils-B4Y_5Gid.js";function E(n,e){const r=n.count;e||(e=new n.TypedArrayConstructor(r));for(let t=0;t<r;t++)e[t]=n.get(t);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:E},Symbol.toStringTag,{value:"Module"}));function Ne(n={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...n}}function Oe(n,e={}){return{data:n,parameters:{wrap:{s:_.REPEAT,t:_.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}let H=class{constructor(n){this._data=n,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const n=this._offset4;return this._offset4+=1,this._dataUint32[n]}readUint8Array(n){const e=4*this._offset4;return this._offset4+=n/4,new Uint8Array(this._data,e,n)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var b,k;(function(n){n.SCALAR="SCALAR",n.VEC2="VEC2",n.VEC3="VEC3",n.VEC4="VEC4",n.MAT2="MAT2",n.MAT3="MAT3",n.MAT4="MAT4"})(b||(b={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(k||(k={}));const Y={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},Re={pbrMetallicRoughness:Y,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Ae={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},K=(n={})=>{const e={...Y,...n.pbrMetallicRoughness},r=Ce({...Ae,...n.extras});return{...Re,...n,pbrMetallicRoughness:e,extras:r}};function Ce(n){switch(n.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:n.ESRI_externalColorMixMode="tint"}return n}const ve={magFilter:S.LINEAR,minFilter:S.LINEAR_MIPMAP_LINEAR,wrapS:_.REPEAT,wrapT:_.REPEAT},Me=n=>({...ve,...n});function Ie(n){let e,r;return n.replace(/^(.*\/)?([^/]*)$/,(t,o,s)=>(e=o||"",r=s||"","")),{dirPart:e,filePart:r}}const N={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class h{constructor(e,r,t,o){if(this._context=e,this.uri=r,this.json=t,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=Ie(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.scenes==null)throw new i("gltf-loader-unsupported-feature","Scenes must be defined.");if(t.meshes==null)throw new i("gltf-loader-unsupported-feature","Meshes must be defined");if(t.nodes==null)throw new i("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,r,t){if(Q(r)){const a=W(r);if(a&&a.mediaType!=="model/gltf-binary")try{const f=JSON.parse(a.isBase64?atob(a.data):a.data);return new h(e,r,f)}catch{}const c=Z(r);if(h._isGLBData(c))return this._fromGLBData(e,r,c)}if(Pe.test(r)||t?.expectedType==="gltf"){const a=await e.loadJSON(r,t);return new h(e,r,a)}const o=await e.loadBinary(r,t);if(h._isGLBData(o))return this._fromGLBData(e,r,o);if(Ge.test(r)||t?.expectedType==="glb")throw new i("gltf-loader-invalid-glb","This is not a valid glb file.");const s=await e.loadJSON(r,t);return new h(e,r,s)}static _isGLBData(e){if(e==null)return!1;const r=new H(e);return r.remainingBytes()>=4&&r.readUint32()===N.MAGIC}static async _fromGLBData(e,r,t){const o=await h._parseGLBData(t);return new h(e,r,o.json,o.binaryData)}static async _parseGLBData(e){const r=new H(e);if(r.remainingBytes()<12)throw new i("gltf-loader-error","glb binary data is insufficiently large.");const t=r.readUint32(),o=r.readUint32(),s=r.readUint32();if(t!==N.MAGIC)throw new i("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<s)throw new i("gltf-loader-error","glb binary data is smaller than header specifies.");if(o!==2)throw new i("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,c,f=0;for(;r.remainingBytes()>=8;){const d=r.readUint32(),p=r.readUint32();if(f===0){if(p!==N.CHUNK_TYPE_JSON)throw new i("gltf-loader-error","First glb chunk must be JSON.");if(d<0)throw new i("gltf-loader-error","No JSON data found.");a=await ye(r.readUint8Array(d))}else if(f===1){if(p!==N.CHUNK_TYPE_BIN)throw new i("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");c=r.readUint8Array(d)}else y.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");f+=1}if(!a)throw new i("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:c}}async getBuffer(e,r){const t=this.json.buffers[e];if(t.uri==null){if(this._glbBuffer==null)throw new i("gltf-loader-error","glb buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(e,r);if(o.byteLength!==t.byteLength)throw new i("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(e,r){const t=this._bufferLoaders.get(e);if(t)return t;const o=this.json.buffers[e].uri,s=this._context.loadBinary(this._resolveUri(o),r).then(a=>new Uint8Array(a));return this._bufferLoaders.set(e,s),s}async getAccessor(e,r){if(!this.json.accessors)throw new i("gltf-loader-unsupported-feature","Accessors missing.");const t=this.json.accessors[e];if(t?.bufferView==null)throw new i("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(t.type in[b.MAT2,b.MAT3,b.MAT4])throw new i("gltf-loader-unsupported-feature",`AttributeType ${t.type} is not supported`);const o=this.json.bufferViews[t.bufferView],s=await this.getBuffer(o.buffer,r),a=Ue[t.type],c=De[t.componentType],f=a*c,d=o.byteStride||f;return{raw:s.buffer,byteStride:d,byteOffset:s.byteOffset+(o.byteOffset||0)+(t.byteOffset||0),entryCount:t.count,isDenselyPacked:d===f,componentCount:a,componentByteSize:c,componentType:t.componentType,min:t.min,max:t.max,normalized:!!t.normalized}}async getIndexData(e,r){if(e.indices==null)return;const t=await this.getAccessor(e.indices,r);if(t.isDenselyPacked)switch(t.componentType){case u.UNSIGNED_BYTE:return new Uint8Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_SHORT:return new Uint16Array(t.raw,t.byteOffset,t.entryCount);case u.UNSIGNED_INT:return new Uint32Array(t.raw,t.byteOffset,t.entryCount)}else switch(t.componentType){case u.UNSIGNED_BYTE:return E(m(Te,t));case u.UNSIGNED_SHORT:return E(m(he,t));case u.UNSIGNED_INT:return E(m(me,t))}}async getPositionData(e,r){if(e.attributes.POSITION==null)throw new i("gltf-loader-unsupported-feature","No POSITION vertex data found.");const t=await this.getAccessor(e.attributes.POSITION,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return m(A,t)}async getNormalData(e,r){if(e.attributes.NORMAL==null)throw new i("gltf-loader-error","No NORMAL vertex data found.");const t=await this.getAccessor(e.attributes.NORMAL,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+t.componentCount.toFixed());return m(A,t)}async getTangentData(e,r){if(e.attributes.TANGENT==null)throw new i("gltf-loader-error","No TANGENT vertex data found.");const t=await this.getAccessor(e.attributes.TANGENT,r);if(t.componentType!==u.FLOAT)throw new i("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+u[t.componentType]);if(t.componentCount!==4)throw new i("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+t.componentCount.toFixed());return m(V,t)}async getTextureCoordinates(e,r){if(e.attributes.TEXCOORD_0==null)throw new i("gltf-loader-error","No TEXCOORD_0 vertex data found.");const t=await this.getAccessor(e.attributes.TEXCOORD_0,r);if(t.componentCount!==2)throw new i("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+t.componentCount.toFixed());if(t.componentType===u.FLOAT)return m(j,t);if(!t.normalized)throw new i("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return Be(t)}async getVertexColors(e,r){if(e.attributes.COLOR_0==null)throw new i("gltf-loader-error","No COLOR_0 vertex data found.");const t=await this.getAccessor(e.attributes.COLOR_0,r);if(t.componentCount!==4&&t.componentCount!==3)throw new i("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+t.componentCount.toFixed());if(t.componentCount===4){if(t.componentType===u.FLOAT)return m(V,t);if(t.componentType===u.UNSIGNED_BYTE)return m(we,t);if(t.componentType===u.UNSIGNED_SHORT)return m(ge,t)}else if(t.componentCount===3){if(t.componentType===u.FLOAT)return m(A,t);if(t.componentType===u.UNSIGNED_BYTE)return m(xe,t);if(t.componentType===u.UNSIGNED_SHORT)return m(be,t)}throw new i("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+u[t.componentType])}hasPositions(e){return e.attributes.POSITION!==void 0}hasNormals(e){return e.attributes.NORMAL!==void 0}hasVertexColors(e){return e.attributes.COLOR_0!==void 0}hasTextureCoordinates(e){return e.attributes.TEXCOORD_0!==void 0}hasTangents(e){return e.attributes.TANGENT!==void 0}async getMaterial(e,r,t){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const s=e.material!=null?K(this.json.materials[e.material]):K(),a=s.pbrMetallicRoughness,c=this.hasVertexColors(e),f=this.getTexture(a.baseColorTexture,r),d=this.getTexture(s.normalTexture,r),p=t?this.getTexture(s.occlusionTexture,r):void 0,l=t?this.getTexture(s.emissiveTexture,r):void 0,w=t?this.getTexture(a.metallicRoughnessTexture,r):void 0,T=e.material!=null?e.material:-1;o={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:a.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:await f,normalTexture:await d,name:s.name,id:T,occlusionTexture:await p,emissiveTexture:await l,emissiveFactor:s.emissiveFactor,metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,metallicRoughnessTexture:await w,hasVertexColors:c,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode,colorTextureTransform:a?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:s.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:s.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:s.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:a?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:s.extras.ESRI_receiveAmbientOcclusion,receiveShadows:s.extras.ESRI_receiveShadows}}return o}async getTexture(e,r){if(!e)return;if((e.texCoord||0)!==0)throw new i("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const t=e.index,o=this.json.textures[t],s=Me(o.sampler!=null?this.json.samplers[o.sampler]:{}),a=$(o),c=this.json.images[a],f=await this._loadTextureImageData(t,o,r);return ee(this._textureCache,t,()=>{const d=l=>l===33071||l===33648||l===10497,p=l=>{throw new i("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${l}`)};return{data:f,wrapS:d(s.wrapS)?s.wrapS:p(s.wrapS),wrapT:d(s.wrapT)?s.wrapT:p(s.wrapT),minFilter:s.minFilter,name:c.name,id:t}})}getNodeTransform(e){if(e===void 0)return Le;let r=this._nodeTransformCache.get(e);if(!r){const t=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?r=ne(P(),t,o.matrix):o.translation||o.rotation||o.scale?(r=R(t),o.translation&&oe(r,r,o.translation),o.rotation&&(O[3]=ie(O,o.rotation),se(r,r,O[3],O)),o.scale&&ae(r,r,o.scale)):r=R(t),this._nodeTransformCache.set(e,r)}return r}_resolveUri(e){return te(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=G.parse(this.json.asset.version,"glTF");Fe.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every(r=>this._supportedExtensions.includes(r)))throw new i("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach((e,r)=>{e.children&&e.children.forEach(t=>{this._nodeParentMap.set(t,r)})})}async _loadTextureImageData(e,r,t){const o=this._textureLoaders.get(e);if(o)return o;const s=this._createTextureLoader(r,t);return this._textureLoaders.set(e,s),s}async _createTextureLoader(e,r){const t=$(e),o=this.json.images[t];if(o.uri){if(o.uri.endsWith(".ktx2")){const f=await this._context.loadBinary(this._resolveUri(o.uri),r);return new _e(new Uint8Array(f))}return this._context.loadImage(this._resolveUri(o.uri),r)}if(o.bufferView==null)throw new i("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(o.mimeType==null)throw new i("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[o.bufferView],a=await this.getBuffer(s.buffer,r);if(s.byteStride!=null)throw new i("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const c=a.byteOffset+(s.byteOffset||0);return Se(new Uint8Array(a.buffer,c,s.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await B(Array.from(this._bufferLoaders.values())),r=await B(Array.from(this._textureLoaders.values()));return e.reduce((t,o)=>t+(o?.byteLength??0),0)+r.reduce((t,o)=>t+(o?Ee(o)?o.data.byteLength:o.width*o.height*4:0),0)}}const Le=re(P(),Math.PI/2),Fe=new G(2,0,"glTF"),O=ue(),Ue={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},De={[u.BYTE]:1,[u.UNSIGNED_BYTE]:1,[u.SHORT]:2,[u.UNSIGNED_SHORT]:2,[u.HALF_FLOAT]:2,[u.FLOAT]:4,[u.INT]:4,[u.UNSIGNED_INT]:4};function Be(n){switch(n.componentType){case u.BYTE:return new pe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.UNSIGNED_BYTE:return new de(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.SHORT:return new fe(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.UNSIGNED_SHORT:return new ce(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.UNSIGNED_INT:return new le(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount);case u.FLOAT:return new j(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}}function m(n,e){return new n(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function $(n){if(n.extensions?.KHR_texture_basisu!=null)return n.extensions.KHR_texture_basisu.source;if(n.source!==null)return n.source;throw new i("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const Pe=/\.gltf$/i,Ge=/\.glb$/i;let je=0;async function Ve(n,e,r={},t=!0){const o=await h.load(n,e,r),s="gltf_"+je++,a={lods:[],materials:new Map,textures:new Map,meta:He(o)},c=!(!o.json.asset.extras||o.json.asset.extras.ESRI_type!=="symbolResource"),f=o.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,d=new Map;await ke(o,async(l,w,T,C)=>{const v=d.get(T)??0;d.set(T,v+1);const g=l.mode!==void 0?l.mode:x.TRIANGLES,M=g===x.TRIANGLES||g===x.TRIANGLE_STRIP||g===x.TRIANGLE_FAN?g:null;if(M==null)return void y.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+x[g]+"). Skipping primitive.");if(!o.hasPositions(l))return void y.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const z=o.getPositionData(l,r),J=o.getMaterial(l,r,t),I=o.hasNormals(l)?o.getNormalData(l,r):null,L=o.hasTangents(l)?o.getTangentData(l,r):null,F=o.hasTextureCoordinates(l)?o.getTextureCoordinates(l,r):null,U=o.hasVertexColors(l)?o.getVertexColors(l,r):null,q=o.getIndexData(l,r),X={name:C,transform:R(w),attributes:{position:await z,normal:I?await I:null,texCoord0:F?await F:null,color:U?await U:null,tangent:L?await L:null},indices:await q,primitiveType:M,material:Ke(a,await J,s)};let D=null;a.meta?.ESRI_lod!=null&&a.meta.ESRI_lod.metric==="screenSpaceRadius"&&(D=a.meta.ESRI_lod.thresholds[T]),a.lods[T]=a.lods[T]||{parts:[],name:C,lodThreshold:D},a.lods[T].parts[v]=X});for(const l of a.lods)l.parts=l.parts.filter(w=>!!w);const p=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:c,uri:o.uri,ESRI_webstyle:f},customMeta:{},size:p}}function He(n){const e=n.json;let r=null;return e.nodes.forEach(t=>{const o=t.extras;o!=null&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(r=o)}),r}async function ke(n,e){const r=n.json,t=r.scenes[r.scene||0].nodes,o=t.length>1,s=[];for(const c of t){const f=r.nodes[c];s.push(a(c,0)),Ye(f)&&!o&&f.extensions.MSFT_lod.ids.forEach((d,p)=>a(d,p+1))}async function a(c,f){const d=r.nodes[c],p=n.getNodeTransform(c);if(d.weights!=null&&y.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),d.mesh!=null){const l=r.meshes[d.mesh];for(const w of l.primitives)s.push(e(w,p,f,l.name))}for(const l of d.children||[])s.push(a(l,f))}await Promise.all(s)}function Ye(n){return n.extensions?.MSFT_lod&&Array.isArray(n.extensions.MSFT_lod.ids)}function Ke(n,e,r){const t=s=>{const a=`${r}_tex_${s&&s.id}${s?.name?"_"+s.name:""}`;if(s&&!n.textures.has(a)){const c=Oe(s.data,{wrap:{s:s.wrapS,t:s.wrapT},mipmap:$e.has(s.minFilter),noUnpackFlip:!0});n.textures.set(a,c)}return a},o=`${r}_mat_${e.id}_${e.name}`;if(!n.materials.has(o)){const s=Ne({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?t(e.colorTexture):void 0,textureNormal:e.normalTexture?t(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?t(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?t(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?t(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});n.materials.set(o,s)}return o}const $e=new Set([S.LINEAR_MIPMAP_LINEAR,S.LINEAR_MIPMAP_NEAREST]);export{Ve as loadGLTF};
