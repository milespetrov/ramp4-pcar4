import{a as ge}from"./devEnvironmentUtils-CxrVv3RG.js";import{ha as ye,_ as H,U as be,K,s as we,d4 as Q,cu as J,h8 as L,n as Te,f5 as X,ac as D}from"./main-CZM6prq-.js";import{i as Y,j as ve,n as Me}from"./mat3-ZassUAoY.js";import{t as V,e as Z}from"./mat3f64-Dh9_zhFu.js";import{h as Ae}from"./mat4-BlVAwaU2.js";import{e as Re}from"./mat4f64-BaJwL7tQ.js";import{l as Be}from"./vec2f64-Lu6rYV-9.js";import{E as ee,c as Oe,i as te,r as Ee,A as Se,I as Ie}from"./vec32-CjgofUqd.js";import{C as re,p as se,t as _}from"./Geometry-CmH148fq.js";import{c as Pe,x as ne,L as Ce,i as oe,O as Fe,E as Ue}from"./BufferView-uG_Pwtnd.js";import{e as ke,f as Ne,l as ae,o as ie}from"./vec3-B8lWYZ3t.js";import{n as Le,s as le}from"./vec4-fY8G-TfU.js";import{n as _e,o as C,a as qe,b as $e,t as je,c as De}from"./DefaultMaterial_COLOR_GAMMA-B2VnTWLP.js";import{r as G}from"./resourceUtils-_ejoughE.js";import{i as Ve,f as Ge}from"./vec2f32-CVhmN3Me.js";import{t as ze}from"./NestedMap-Ddo7BfvO.js";import{r as ue}from"./Version-BJzGowUB.js";import{l as We}from"./Indices-DpXlWnGJ.js";import{t as He}from"./requestImageUtils-KJ_ksTT4.js";import{t as F}from"./orientedBoundingBox-D0caZ1NH.js";import{e as z,i as A,n as Ke}from"./basicInterfaces-Dsf65ICa.js";import{e as I}from"./VertexAttribute-DFC3a3eR.js";import{B as q,s as Qe,t as Je,n as Xe,o as Ye}from"./DefaultMaterial-kpt0rS4s.js";import{D as ce}from"./enums-BnKvO6VZ.js";import{a as me}from"./NormalAttribute.glsl-D5Xr4soA.js";function U(r){if(r==null)return null;const t=r.offset!=null?r.offset:Ve,n=r.rotation!=null?r.rotation:0,s=r.scale!=null?r.scale:Ge,u=V(1,0,0,0,1,0,t[0],t[1],1),i=V(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),a=V(s[0],0,0,0,s[1],0,0,0,1),l=Z();return Y(l,i,a),Y(l,u,l),l}class Ze{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class et{constructor(t,n,s){this.name=t,this.lodThreshold=n,this.pivotOffset=s,this.stageResources=new Ze,this.numberOfVertices=0}}const O=()=>Te.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function tt(r,t){const n=await rt(r,t),s=await it(n.textureDefinitions??{},t);let u=0;for(const i in s)if(s.hasOwnProperty(i)){const a=s[i];u+=a?.image?a.image.width*a.image.height*4:0}return{resource:n,textures:s,size:u+ye(n)}}async function rt(r,t){const n=t?.streamDataRequester;if(n)return st(r,n,t);const s=await H(be(r,t));if(s.ok===!0)return s.value.data;K(s.error),fe(s.error)}async function st(r,t,n){const s=await H(t.request(r,"json",n));if(s.ok===!0)return s.value;K(s.error),fe(s.error.details.url)}function fe(r){throw new we("",`Request for object resource failed: ${r}`)}function nt(r){const t=r.params,n=t.topology;let s=!0;switch(t.vertexAttributes||(O().warn("Geometry must specify vertex attributes"),s=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const a in t.vertexAttributes){const l=i[a];l?.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(O().warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),s=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(O().warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),s=!1)):(O().warn(`Indexed geometry does not specify face indices for '${a}' attribute`),s=!1)}}else O().warn("Indexed geometries must specify faces"),s=!1;break}default:O().warn(`Unsupported topology '${n}'`),s=!1}r.params.material||(O().warn("Geometry requires material"),s=!1);const u=r.params.vertexAttributes;for(const i in u)u[i].values||(O().warn("Geometries with externally defined attributes are not yet supported"),s=!1);return s}function ot(r,t){const n=new Array,s=new Array,u=new Array,i=new ze,a=r.resource,l=ue.parse(a.version||"1.0","wosr");ut.validate(l);const c=a.model.name,e=a.model.geometries,o=a.materialDefinitions??{},m=r.textures;let d=0;const x=new Map;for(let f=0;f<e.length;f++){const p=e[f];if(!nt(p))continue;const g=lt(p),w=p.params.vertexAttributes,v=[],T=h=>{if(p.params.topology==="PerAttributeArray")return null;const M=p.params.faces;for(const B in M)if(B===h)return M[B].values;return null},P=w[I.POSITION],N=P.values.length/P.valuesPerElement;for(const h in w){const M=w[h],B=M.values,j=T(h)??We(N);v.push([h,new F(B,j,M.valuesPerElement,!0)])}const R=g.texture,y=m&&m[R];if(y&&!x.has(R)){const{image:h,parameters:M}=y,B=new re(h,M);s.push(B),x.set(R,B)}const S=x.get(R),$=S?S.id:void 0,E=g.material;let b=i.get(E,R);if(b==null){const h=o[E.slice(E.lastIndexOf("/")+1)].params;h.transparency===1&&(h.transparency=0);const M=y&&y.alphaChannelUsage,B=h.transparency>0||M==="transparency"||M==="maskAndTransparency",j=y?de(y.alphaChannelUsage):void 0,W={ambient:Q(h.diffuse),diffuse:Q(h.diffuse),opacity:1-(h.transparency||0),transparent:B,textureAlphaMode:j,textureAlphaCutoff:.33,textureId:$,initTextureTransparent:!0,doubleSided:!0,cullFace:z.None,colorMixMode:h.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(W,t.materialParameters),b=new q(W,t),i.set(E,R,b)}u.push(b);const he=new se(b,v);d+=v.find(h=>h[0]===I.POSITION)?.[1]?.indices.length??0,n.push(he)}return{engineResources:[{name:c,stageResources:{textures:s,materials:u,geometries:n},pivotOffset:a.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:at(n)}}function at(r){const t=J();return r.forEach(n=>{const s=n.boundingInfo;s!=null&&(L(t,s.bbMin),L(t,s.bbMax))}),t}async function it(r,t){const n=new Array;for(const i in r){const a=r[i],l=a.images[0].data;if(!l){O().warn("Externally referenced texture data is not yet supported");continue}const c=a.encoding+";base64,"+l,e="/textureDefinitions/"+i,o=a.channels==="rgba"?a.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:ce.REPEAT,t:ce.REPEAT},preMultiplyAlpha:de(o)!==A.Opaque},d=t?.disableTextures?Promise.resolve(null):He(c,t);n.push(d.then(x=>({refId:e,image:x,parameters:m,alphaChannelUsage:o})))}const s=await Promise.all(n),u={};for(const i of s)u[i.refId]=i;return u}function de(r){switch(r){case"mask":return A.Mask;case"maskAndTransparency":return A.MaskBlend;case"none":return A.Opaque;default:return A.Blend}}function lt(r){const t=r.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ut=new ue(1,2,"wosr");async function pe(r,t){const n=xe(ge(r));if(n.fileType==="wosr"){const m=await(t.cache?t.cache.loadWOSR(n.url,t):tt(n.url,t)),{engineResources:d,referenceBoundingBox:x}=ot(m,t);return{lods:d,referenceBoundingBox:x,isEsriSymbolResource:!1,isWosr:!0}}let s;if(t.cache)s=await t.cache.loadGLTF(n.url,t,!!t.usePBR);else{const{loadGLTF:m}=await import("./loader-CsONXwYO.js");s=await m(new _e(t.streamDataRequester),n.url,t,t.usePBR)}const u=s.model.meta?.ESRI_proxyEllipsoid,i=s.meta.isEsriSymbolResource&&u!=null&&s.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,pt(s,u));const a=!!t.usePBR,l=s.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:i,mrrFactors:Qe}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:Je},c={...t.materialParameters,treeRendering:i},{engineResources:e,referenceBoundingBox:o}=ct(s,l,c,t,n.specifiedLodIndex);return{lods:e,referenceBoundingBox:o,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function xe(r){const t=r.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:r.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:r,specifiedLodIndex:null}:{fileType:"unknown",url:r,specifiedLodIndex:null}}function ct(r,t,n,s,u){const i=r.model,a=new Array,l=new Map,c=new Map,e=i.lods.length,o=J();return i.lods.forEach((m,d)=>{const x=s.skipHighLods===!0&&(e>1&&d===0||e>3&&d===1)||s.skipHighLods===!1&&u!=null&&d!==u;if(x&&d!==0)return;const f=new et(m.name,m.lodThreshold,[0,0,0]);m.parts.forEach(p=>{const g=x?new q({},s):mt(i,p,f,t,n,l,c,s),{geometry:w,vertexCount:v}=ft(p,g??new q({},s)),T=w.boundingInfo;T!=null&&d===0&&(L(o,T.bbMin),L(o,T.bbMax)),g!=null&&(f.stageResources.geometries.push(w),f.numberOfVertices+=v)}),x||a.push(f)}),{engineResources:a,referenceBoundingBox:o}}function mt(r,t,n,s,u,i,a,l){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),e=r.materials.get(t.material),o=t.attributes.texCoord0!=null,m=t.attributes.normal!=null;if(e==null)return null;const d=dt(e.alphaMode);if(!i.has(c)){if(o){const y=(S,$=!1)=>{if(S!=null&&!a.has(S)){const E=r.textures.get(S);if(E!=null){const b=E.data;a.set(S,new re(G(b)?b.data:b,{...E.parameters,preMultiplyAlpha:!G(b)&&$,encoding:G(b)&&b.encoding!=null?b.encoding:void 0}))}}};y(e.textureColor,d!==A.Opaque),y(e.textureNormal),y(e.textureOcclusion),y(e.textureEmissive),y(e.textureMetallicRoughness)}const f=e.color[0]**(1/C),p=e.color[1]**(1/C),g=e.color[2]**(1/C),w=e.emissiveFactor[0]**(1/C),v=e.emissiveFactor[1]**(1/C),T=e.emissiveFactor[2]**(1/C),P=e.textureColor!=null&&o?a.get(e.textureColor):null,N=Xe({normalTexture:e.textureNormal,metallicRoughnessTexture:e.textureMetallicRoughness,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,emissiveTexture:e.textureEmissive,emissiveFactor:e.emissiveFactor,occlusionTexture:e.textureOcclusion}),R=e.normalTextureTransform?.scale!=null?e.normalTextureTransform?.scale:Be;i.set(c,new q({...s,transparent:d===A.Blend,customDepthTest:Ke.Lequal,textureAlphaMode:d,textureAlphaCutoff:e.alphaCutoff,diffuse:[f,p,g],ambient:[f,p,g],opacity:e.opacity,doubleSided:e.doubleSided,doubleSidedType:"winding-order",cullFace:e.doubleSided?z.None:z.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?me.Attribute:me.ScreenDerivative,castShadows:!0,receiveShadows:e.receiveShadows,receiveAmbientOcclusion:e.receiveAmbientOcclustion,textureId:P?.id,colorMixMode:e.colorMixMode,normalTextureId:e.textureNormal!=null&&o?a.get(e.textureNormal).id:void 0,textureAlphaPremultiplied:P!=null&&!!P.parameters.preMultiplyAlpha,occlusionTextureId:e.textureOcclusion!=null&&o?a.get(e.textureOcclusion).id:void 0,emissiveTextureId:e.textureEmissive!=null&&o?a.get(e.textureEmissive).id:void 0,metallicRoughnessTextureId:e.textureMetallicRoughness!=null&&o?a.get(e.textureMetallicRoughness).id:void 0,emissiveFactor:[w,v,T],mrrFactors:N?Ye:[e.metallicFactor,e.roughnessFactor,s.mrrFactors[2]],isSchematic:N,colorTextureTransformMatrix:U(e.colorTextureTransform),normalTextureTransformMatrix:U(e.normalTextureTransform),scale:[R[0],R[1]],occlusionTextureTransformMatrix:U(e.occlusionTextureTransform),emissiveTextureTransformMatrix:U(e.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:U(e.metallicRoughnessTextureTransform),...u},l))}const x=i.get(c);if(n.stageResources.materials.push(x),o){const f=p=>{p!=null&&n.stageResources.textures.push(a.get(p))};f(e.textureColor),f(e.textureNormal),f(e.textureOcclusion),f(e.textureEmissive),f(e.textureMetallicRoughness)}return x}function ft(r,t){const n=r.attributes.position.count,s=qe(r.indices||n,r.primitiveType),u=_(3*n),{typedBuffer:i,typedBufferStride:a}=r.attributes.position;ke(u,i,r.transform,3,a);const l=[[I.POSITION,new F(u,s,3,!0)]];if(r.attributes.normal!=null){const e=_(3*n),{typedBuffer:o,typedBufferStride:m}=r.attributes.normal;ve(k,r.transform),Ne(e,o,k,3,m),X(k)&&ae(e,e),l.push([I.NORMAL,new F(e,s,3,!0)])}if(r.attributes.tangent!=null){const e=_(4*n),{typedBuffer:o,typedBufferStride:m}=r.attributes.tangent;Me(k,r.transform),Le(e,o,k,4,m),X(k)&&ae(e,e,4),l.push([I.TANGENT,new F(e,s,4,!0)])}if(r.attributes.texCoord0!=null){const e=_(2*n),{typedBuffer:o,typedBufferStride:m}=r.attributes.texCoord0;$e(e,o,2,m),l.push([I.UV0,new F(e,s,2,!0)])}const c=r.attributes.color;if(c!=null){const e=new Uint8Array(4*n);c.elementCount===4?c instanceof Pe?le(e,c,255):c instanceof ne?je(e,c):c instanceof Ce&&le(e,c,1/256):(e.fill(255),c instanceof oe?ie(e,c.typedBuffer,255,4,c.typedBufferStride):r.attributes.color instanceof Fe?De(e,c.typedBuffer,4,r.attributes.color.typedBufferStride):r.attributes.color instanceof Ue&&ie(e,c.typedBuffer,1/256,4,c.typedBufferStride)),l.push([I.COLOR,new F(e,s,4,!0)])}return{geometry:new se(t,l),vertexCount:n}}const k=Z();function dt(r){switch(r){case"BLEND":return A.Blend;case"MASK":return A.Mask;case"OPAQUE":case null:case void 0:return A.Opaque}}function pt(r,t){for(let n=0;n<r.model.lods.length;++n){const s=r.model.lods[n];for(const u of s.parts){const i=u.attributes.normal;if(i==null)return;const a=u.attributes.position,l=a.count,c=D(),e=D(),o=D(),m=new Uint8Array(4*l),d=new Float64Array(3*l),x=Ae(Re(),u.transform);let f=0,p=0;for(let g=0;g<l;g++){a.getVec(g,e),i.getVec(g,c),ee(e,e,u.transform),Oe(o,e,t.center),te(o,o,t.radius);const w=o[2],v=Ee(o),T=Math.min(.45+.55*v*v,1);te(o,o,t.radius),x!==null&&ee(o,o,x),Se(o,o),n+1!==r.model.lods.length&&r.model.lods.length>1&&Ie(o,o,c,w>-1?.2:Math.min(-4*w-3.8,1)),d[f]=o[0],d[f+1]=o[1],d[f+2]=o[2],f+=3,m[p]=255*T,m[p+1]=255*T,m[p+2]=255*T,m[p+3]=255,p+=4}u.attributes.normal=new oe(d),u.attributes.color=new ne(m)}}}const xt=Object.freeze(Object.defineProperty({__proto__:null,fetch:pe,parseUrl:xe},Symbol.toStringTag,{value:"Module"}));export{pe as e,xt as o,U as s};
