import{a as Oe}from"./devEnvironmentUtils-CxrVv3RG.js";import{aA as F,fH as _e,hu as Re,_ as se,U as Be,G as ne,s as Ce,e$ as ie,hv as oe,gG as j,n as Se,eA as ae}from"./main-DJHcSGyV.js";import{i as ue,j as Ee,n as Pe}from"./mat3-CC4Foazl.js";import{t as Y,e as le}from"./mat3f64-Dh9_zhFu.js";import{h as Le}from"./mat4-wx5etUXH.js";import{o as ce,r as Ne,e as Ge}from"./mat4f64-Dn1WEGBx.js";import{l as Fe}from"./vec2f64-CeODonrJ.js";import{o as L,u as C,g as N,W as Ue,E as Z,c as ke,i as he,r as De,A as qe,I as He}from"./vec32-C-6Kp3np.js";import{r as $e,e as V,o as je,a as Ve,C as me,B as z,s as ze,t as We,n as Ke,b as Xe,c as W}from"./AttributeArray-BrB8Dn2M.js";import{c as Je,x as de,L as Qe,i as fe,O as Ye,E as Ze}from"./BufferView-CW0mFxOg.js";import{e as et,f as tt,l as ge,o as pe}from"./vec3-ix-pkb6Y.js";import{n as rt,s as xe}from"./vec4-DJG83Yiu.js";import{n as st,d as k,o as nt,g as it,t as ot,h as at}from"./DefaultMaterial_COLOR_GAMMA-DNvnv_vI.js";import{r as ee}from"./resourceUtils-DdwHfm-M.js";import{i as ut,f as lt}from"./vec2f32-CVhmN3Me.js";import{t as ct}from"./NestedMap-Ddo7BfvO.js";import{r as be}from"./Version-B4WrDbdJ.js";import{t as ht,l as ye}from"./Indices-fEEkqSB5.js";import{t as mt}from"./requestImageUtils-BEOLGTkM.js";import{t as D}from"./orientedBoundingBox-UWfyg-mp.js";import{t as dt,e as te,i as _,n as ft}from"./basicInterfaces-Dsf65ICa.js";import{S as gt}from"./triangle-BV1FcYkP.js";import{s as pt}from"./Util-BjGjeg6f.js";import{e as T}from"./VertexAttribute-DqD5S0a2.js";import{D as we}from"./enums-DBi1-Mm2.js";import{a as Te}from"./NormalAttribute.glsl-UhlshD3L.js";function xt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;L(e,0,0,0),L(v,0,0,0);let u=0,i=0;for(let a=0;a<l.length-2;a+=3){const c=l[a]*t,s=l[a+1]*t,o=l[a+2]*t;L(p,r[c],r[c+1],r[c+2]),L(S,r[s],r[s+1],r[s+2]),L(K,r[o],r[o+1],r[o+2]);const h=gt(p,S,K);h?(C(p,p,S),C(p,p,K),N(p,p,1/3*h),C(e,e,p),u+=h):(C(v,v,p),C(v,v,S),C(v,v,K),i+=3)}return(i!==0||u!==0)&&(u!==0?(N(e,e,1/u),!0):i!==0&&(N(e,v,1/i),!0))}function bt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;L(e,0,0,0);let u=-1,i=0;for(let a=0;a<l.length;a++){const c=l[a]*t;u!==c&&(e[0]+=r[c],e[1]+=r[c+1],e[2]+=r[c+2],i++),u=c}return i>1&&N(e,e,1/i),i>0}function yt(n,e,t){if(!n)return!1;L(t,0,0,0),L(v,0,0,0);let r=0,l=0;const{size:u,data:i,indices:a}=n,c=a.length-1,s=c+(e?2:0);for(let o=0;o<s;o+=2){const h=o<c?o+1:0,d=a[o<c?o:c]*u,f=a[h]*u;p[0]=i[d],p[1]=i[d+1],p[2]=i[d+2],S[0]=i[f],S[1]=i[f+1],S[2]=i[f+2],N(p,C(p,p,S),.5);const m=Ue(p,S);m>0?(C(t,t,N(p,p,m)),r+=m):r===0&&(C(v,v,p),l++)}return r!==0?(N(t,t,1/r),!0):l!==0&&(N(t,v,1/l),!0)}const p=F(),S=F(),K=F(),v=F();class wt{constructor(){this.uid=_e()}}class Tt extends wt{constructor(e){super(),this.highlightGroupName=e,this.channel=dt.Highlight}}class X extends $e{constructor(e,t,r=null,l=V.Mesh,u=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,c]of t)this._attributes.set(a,{...c,indices:ht(c.indices)}),a===T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new X(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,t._attributes.set(l,r)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:je(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){return this._attributes.values().next().value.indices?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===V.Mesh?this._computeAttachmentOriginTriangles(e):this.type===V.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Z(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(T.POSITION);return xt(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(T.POSITION);return yt(t,vt(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(T.POSITION);return bt(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(T.POSITION);if(!e||e.indices.length===0)return null;const t=this.type===V.Mesh?3:1;pt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=ye(e.indices.length/t);return new Ve(r,t,e)}get transformation(){return this._transformation??ce}set transformation(e){this._transformation=e&&e!==ce?Ne(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((t,r)=>e(r))}allocateIdAndHighlight(e){const t=new Tt(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}function vt(n,e){return!(!("isClosed"in n)||!n.isClosed)&&e.indices.length>2}function H(n){if(n==null)return null;const e=n.offset!=null?n.offset:ut,t=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:lt,l=Y(1,0,0,0,1,0,e[0],e[1],1),u=Y(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),i=Y(r[0],0,0,0,r[1],0,0,0,1),a=le();return ue(a,u,i),ue(a,l,a),a}class It{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class At{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new It,this.numberOfVertices=0}}const E=()=>Se.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Mt(n,e){const t=await Ot(n,e),r=await St(t.textureDefinitions??{},e);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i?.image?i.image.width*i.image.height*4:0}return{resource:t,textures:r,size:l+Re(t)}}async function Ot(n,e){const t=e?.streamDataRequester;if(t)return _t(n,t,e);const r=await se(Be(n,e));if(r.ok===!0)return r.value.data;ne(r.error),ve(r.error)}async function _t(n,e,t){const r=await se(e.request(n,"json",t));if(r.ok===!0)return r.value;ne(r.error),ve(r.error.details.url)}function ve(n){throw new Ce("",`Request for object resource failed: ${n}`)}function Rt(n){const e=n.params,t=e.topology;let r=!0;switch(e.vertexAttributes||(E().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=e.faces;if(u){if(e.vertexAttributes)for(const i in e.vertexAttributes){const a=u[i];a?.values?(a.valueType!=null&&a.valueType!=="UInt32"&&(E().warn(`Unsupported indexed geometry indices type '${a.valueType}', only UInt32 is currently supported`),r=!1),a.valuesPerElement!=null&&a.valuesPerElement!==1&&(E().warn(`Unsupported indexed geometry values per element '${a.valuesPerElement}', only 1 is currently supported`),r=!1)):(E().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else E().warn("Indexed geometries must specify faces"),r=!1;break}default:E().warn(`Unsupported topology '${t}'`),r=!1}n.params.material||(E().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(E().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Bt(n,e){const t=new Array,r=new Array,l=new Array,u=new ct,i=n.resource,a=be.parse(i.version||"1.0","wosr");Pt.validate(a);const c=i.model.name,s=i.model.geometries,o=i.materialDefinitions??{},h=n.textures;let d=0;const f=new Map;for(let m=0;m<s.length;m++){const g=s[m];if(!Rt(g))continue;const b=Et(g),I=g.params.vertexAttributes,M=[],A=x=>{if(g.params.topology==="PerAttributeArray")return null;const O=g.params.faces;for(const B in O)if(B===x)return O[B].values;return null},U=I[T.POSITION],$=U.values.length/U.valuesPerElement;for(const x in I){const O=I[x],B=O.values,Q=A(x)??ye($);M.push([x,new D(B,Q,O.valuesPerElement,!0)])}const R=b.texture,y=h&&h[R];if(y&&!f.has(R)){const{image:x,parameters:O}=y,B=new me(x,O);r.push(B),f.set(R,B)}const G=f.get(R),J=G?G.id:void 0,P=b.material;let w=u.get(P,R);if(w==null){const x=o[P.slice(P.lastIndexOf("/")+1)].params;x.transparency===1&&(x.transparency=0);const O=y&&y.alphaChannelUsage,B=x.transparency>0||O==="transparency"||O==="maskAndTransparency",Q=y?Ie(y.alphaChannelUsage):void 0,re={ambient:ie(x.diffuse),diffuse:ie(x.diffuse),opacity:1-(x.transparency||0),transparent:B,textureAlphaMode:Q,textureAlphaCutoff:.33,textureId:J,initTextureTransparent:!0,doubleSided:!0,cullFace:te.None,colorMixMode:x.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};e?.materialParameters&&Object.assign(re,e.materialParameters),w=new z(re,e),u.set(P,R,w)}l.push(w);const Me=new X(w,M);d+=M.find(x=>x[0]===T.POSITION)?.[1]?.indices.length??0,t.push(Me)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:t},pivotOffset:i.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:Ct(t)}}function Ct(n){const e=oe();return n.forEach(t=>{const r=t.boundingInfo;r!=null&&(j(e,r.bbMin),j(e,r.bbMax))}),e}async function St(n,e){const t=new Array;for(const u in n){const i=n[u],a=i.images[0].data;if(!a){E().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+a,s="/textureDefinitions/"+u,o=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:we.REPEAT,t:we.REPEAT},preMultiplyAlpha:Ie(o)!==_.Opaque},d=e?.disableTextures?Promise.resolve(null):mt(c,e);t.push(d.then(f=>({refId:s,image:f,parameters:h,alphaChannelUsage:o})))}const r=await Promise.all(t),l={};for(const u of r)l[u.refId]=u;return l}function Ie(n){switch(n){case"mask":return _.Mask;case"maskAndTransparency":return _.MaskBlend;case"none":return _.Opaque;default:return _.Blend}}function Et(n){const e=n.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Pt=new be(1,2,"wosr");async function Lt(n,e){const t=Ae(Oe(n));if(t.fileType==="wosr"){const h=await(e.cache?e.cache.loadWOSR(t.url,e):Mt(t.url,e)),{engineResources:d,referenceBoundingBox:f}=Bt(h,e);return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(t.url,e,!!e.usePBR);else{const{loadGLTF:h}=await import("./loader-CHmHEJ5L.js");r=await h(new st(e.streamDataRequester),t.url,e,e.usePBR)}const l=r.model.meta?.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,kt(r,l));const i=!!e.usePBR,a=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:ze}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:We},c={...e.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:o}=Nt(r,a,c,e,t.specifiedLodIndex);return{lods:s,referenceBoundingBox:o,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Ae(n){const e=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Nt(n,e,t,r,l){const u=n.model,i=new Array,a=new Map,c=new Map,s=u.lods.length,o=oe();return u.lods.forEach((h,d)=>{const f=r.skipHighLods===!0&&(s>1&&d===0||s>3&&d===1)||r.skipHighLods===!1&&l!=null&&d!==l;if(f&&d!==0)return;const m=new At(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(g=>{const b=f?new z({},r):Gt(u,g,m,e,t,a,c,r),{geometry:I,vertexCount:M}=Ft(g,b??new z({},r)),A=I.boundingInfo;A!=null&&d===0&&(j(o,A.bbMin),j(o,A.bbMax)),b!=null&&(m.stageResources.geometries.push(I),m.numberOfVertices+=M)}),f||i.push(m)}),{engineResources:i,referenceBoundingBox:o}}function Gt(n,e,t,r,l,u,i,a){const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),o=e.attributes.texCoord0!=null,h=e.attributes.normal!=null;if(s==null)return null;const d=Ut(s.alphaMode);if(!u.has(c)){if(o){const y=(G,J=!1)=>{if(G!=null&&!i.has(G)){const P=n.textures.get(G);if(P!=null){const w=P.data;i.set(G,new me(ee(w)?w.data:w,{...P.parameters,preMultiplyAlpha:!ee(w)&&J,encoding:ee(w)&&w.encoding!=null?w.encoding:void 0}))}}};y(s.textureColor,d!==_.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const m=s.color[0]**(1/k),g=s.color[1]**(1/k),b=s.color[2]**(1/k),I=s.emissiveFactor[0]**(1/k),M=s.emissiveFactor[1]**(1/k),A=s.emissiveFactor[2]**(1/k),U=s.textureColor!=null&&o?i.get(s.textureColor):null,$=Ke({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),R=s.normalTextureTransform?.scale!=null?s.normalTextureTransform?.scale:Fe;u.set(c,new z({...r,transparent:d===_.Blend,customDepthTest:ft.Lequal,textureAlphaMode:d,textureAlphaCutoff:s.alphaCutoff,diffuse:[m,g,b],ambient:[m,g,b],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?te.None:te.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:h?Te.Attribute:Te.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:U?.id,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&o?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:U!=null&&!!U.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&o?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&o?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&o?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[I,M,A],mrrFactors:$?Xe:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:$,colorTextureTransformMatrix:H(s.colorTextureTransform),normalTextureTransformMatrix:H(s.normalTextureTransform),scale:[R[0],R[1]],occlusionTextureTransformMatrix:H(s.occlusionTextureTransform),emissiveTextureTransformMatrix:H(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:H(s.metallicRoughnessTextureTransform),...l},a))}const f=u.get(c);if(t.stageResources.materials.push(f),o){const m=g=>{g!=null&&t.stageResources.textures.push(i.get(g))};m(s.textureColor),m(s.textureNormal),m(s.textureOcclusion),m(s.textureEmissive),m(s.textureMetallicRoughness)}return f}function Ft(n,e){const t=n.attributes.position.count,r=nt(n.indices||t,n.primitiveType),l=W(3*t),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;et(l,u,n.transform,3,i);const a=[[T.POSITION,new D(l,r,3,!0)]];if(n.attributes.normal!=null){const s=W(3*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.normal;Ee(q,n.transform),tt(s,o,q,3,h),ae(q)&&ge(s,s),a.push([T.NORMAL,new D(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=W(4*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.tangent;Pe(q,n.transform),rt(s,o,q,4,h),ae(q)&&ge(s,s,4),a.push([T.TANGENT,new D(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=W(2*t),{typedBuffer:o,typedBufferStride:h}=n.attributes.texCoord0;it(s,o,2,h),a.push([T.UV0,new D(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*t);c.elementCount===4?c instanceof Je?xe(s,c,255):c instanceof de?ot(s,c):c instanceof Qe&&xe(s,c,1/256):(s.fill(255),c instanceof fe?pe(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof Ye?at(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof Ze&&pe(s,c.typedBuffer,1/256,4,c.typedBufferStride)),a.push([T.COLOR,new D(s,r,4,!0)])}return{geometry:new X(e,a),vertexCount:t}}const q=le();function Ut(n){switch(n){case"BLEND":return _.Blend;case"MASK":return _.Mask;case"OPAQUE":case null:case void 0:return _.Opaque}}function kt(n,e){for(let t=0;t<n.model.lods.length;++t){const r=n.model.lods[t];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,a=i.count,c=F(),s=F(),o=F(),h=new Uint8Array(4*a),d=new Float64Array(3*a),f=Le(Ge(),l.transform);let m=0,g=0;for(let b=0;b<a;b++){i.getVec(b,s),u.getVec(b,c),Z(s,s,l.transform),ke(o,s,e.center),he(o,o,e.radius);const I=o[2],M=De(o),A=Math.min(.45+.55*M*M,1);he(o,o,e.radius),f!==null&&Z(o,o,f),qe(o,o),t+1!==n.model.lods.length&&n.model.lods.length>1&&He(o,o,c,I>-1?.2:Math.min(-4*I-3.8,1)),d[m]=o[0],d[m+1]=o[1],d[m+2]=o[2],m+=3,h[g]=255*A,h[g+1]=255*A,h[g+2]=255*A,h[g+3]=255,g+=4}l.attributes.normal=new fe(d),l.attributes.color=new de(h)}}}export{Lt as fetch,Ae as parseUrl};
