const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loader-BjWpPpCh.js","./main-CFpM9i38.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./mat4f64-CSKppSlJ.js","./enums-Dk3osxpS.js","./Version-CvG70TWQ.js","./mat4-BZ-Redsx.js","./common-DQOJ18NT.js","./quat-EwcH41em.js","./mat3f64-q3fE-ZOt.js","./quatf64-aQ5IuZRd.js","./vec32-DwOYpah8.js","./vec42-CKs01hkn.js","./BufferView-DAkqhQk8.js","./vec2-DGVIkCvT.js","./resourceUtils-Bv7JH9T0.js","./basicInterfaces-CZwQPxTp.js"])))=>i.map(i=>d[i]);
import{_ as Ae}from"./preload-helper-ExcqyqRp.js";import{a as _e}from"./devEnvironmentUtils-8WtPGj6h.js";import{aC as G,fK as Me,hz as Oe,_ as de,U as Re,J as fe,s as Be,f2 as se,hA as pe,gJ as W,n as Ce,eD as ne}from"./main-CFpM9i38.js";import{i as ie,j as Ee,n as Pe}from"./mat3-XZDRtl20.js";import{t as Y,e as ge}from"./mat3f64-q3fE-ZOt.js";import{h as Se}from"./mat4-BZ-Redsx.js";import{o as oe,r as Le,e as Ne}from"./mat4f64-CSKppSlJ.js";import{l as Fe}from"./vec2f64-B7N_6o8F.js";import{o as S,u as C,g as L,W as Ge,E as ee,c as Ue,i as ae,r as ke,A as je,I as qe}from"./vec32-DwOYpah8.js";import{r as De,e as H,o as He,a as Ve,C as xe,B as J,s as ze,t as We,n as Je,b as Ke,c as V}from"./AttributeArray-DKxsWwmZ.js";import{c as Qe,x as be,L as Xe,i as ye,O as Ye,E as Ze}from"./BufferView-DAkqhQk8.js";import{e as et,f as tt,l as ue,o as le}from"./vec3-0qhc16tK.js";import{n as rt,s as ce}from"./vec4-W7TjJvRT.js";import{n as st,d as U,o as nt,g as it,t as ot,h as at}from"./DefaultMaterial_COLOR_GAMMA-D7ny3d1v.js";import{r as Z}from"./resourceUtils-Bv7JH9T0.js";import{i as ut,f as lt}from"./vec2f32-BbH2jxlN.js";import{t as ct}from"./NestedMap-CImDozOA.js";import{r as $e}from"./Version-CvG70TWQ.js";import{t as mt,l as we}from"./Indices-BrQJ5Mn9.js";import{t as ht}from"./requestImageUtils-lHuV8TAa.js";import{t as j}from"./orientedBoundingBox-BJXLMb3u.js";import{t as dt,e as te,i as M,n as ft}from"./basicInterfaces-CZwQPxTp.js";import{S as pt}from"./triangle-B58iuruX.js";import{s as gt}from"./Util-C4yWdKVH.js";import{e as v}from"./VertexAttribute-BdZWZuT1.js";import{D as me}from"./enums-Dk3osxpS.js";import{a as he}from"./NormalAttribute.glsl-CsurkK-0.js";import"./common-DQOJ18NT.js";import"./Texture-B8CS0CTb.js";import"./ViewingMode-HRfKv6NR.js";import"./InterleavedLayout-C63iJi5b.js";import"./types-D0PSWh4d.js";import"./compilerUtils-DbmoCggA.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./AlphaCutoff-UcccL64p.js";import"./boundedPlane-DKyHUpt0.js";import"./sphere-VTrZcxxc.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./plane-BzIgnumB.js";import"./quatf64-aQ5IuZRd.js";import"./lineSegment-Def9f31b.js";import"./renderState-BqKKaxGi.js";import"./doublePrecisionUtils-B0owpBza.js";import"./lengthUtils-DL2C2FcD.js";import"./vec2-DGVIkCvT.js";import"./projectBuffer-ChAiX47d.js";import"./quat-EwcH41em.js";import"./spatialReferenceEllipsoidUtils-BJp_DbqQ.js";import"./computeTranslationToOriginAndRotation-Cc-Zr2Qi.js";function xt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0),S(w,0,0,0);let u=0,i=0;for(let a=0;a<l.length-2;a+=3){const c=l[a]*t,s=l[a+1]*t,o=l[a+2]*t;S(g,r[c],r[c+1],r[c+2]),S(E,r[s],r[s+1],r[s+2]),S(z,r[o],r[o+1],r[o+2]);const m=pt(g,E,z);m?(C(g,g,E),C(g,g,z),L(g,g,1/3*m),C(e,e,g),u+=m):(C(w,w,g),C(w,w,E),C(w,w,z),i+=3)}return(i!==0||u!==0)&&(u!==0?(L(e,e,1/u),!0):i!==0&&(L(e,w,1/i),!0))}function bt(n,e){if(!n)return!1;const{size:t,data:r,indices:l}=n;S(e,0,0,0);let u=-1,i=0;for(let a=0;a<l.length;a++){const c=l[a]*t;u!==c&&(e[0]+=r[c],e[1]+=r[c+1],e[2]+=r[c+2],i++),u=c}return i>1&&L(e,e,1/i),i>0}function yt(n,e,t){if(!n)return!1;S(t,0,0,0),S(w,0,0,0);let r=0,l=0;const{size:u,data:i,indices:a}=n,c=a.length-1,s=c+(e?2:0);for(let o=0;o<s;o+=2){const m=o<c?o+1:0,d=a[o<c?o:c]*u,f=a[m]*u;g[0]=i[d],g[1]=i[d+1],g[2]=i[d+2],E[0]=i[f],E[1]=i[f+1],E[2]=i[f+2],L(g,C(g,g,E),.5);const h=Ge(g,E);h>0?(C(t,t,L(g,g,h)),r+=h):r===0&&(C(w,w,g),l++)}return r!==0?(L(t,t,1/r),!0):l!==0&&(L(t,w,1/l),!0)}const g=G(),E=G(),z=G(),w=G();class $t{constructor(){this.uid=Me()}}class wt extends $t{constructor(e){super(),this.highlightGroupName=e,this.channel=dt.Highlight}}class K extends De{constructor(e,t,r=null,l=H.Mesh,u=null,i=-1){super(),this.material=e,this.mapPositions=r,this.type=l,this.objectAndLayerIdColor=u,this.edgeIndicesLength=i,this.highlights=new Set,this._highlightGroupCounts=new Map,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[a,c]of t)this._attributes.set(a,{...c,indices:mt(c.indices)}),a===v.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(a).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new K(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((r,l)=>{r.exclusive=!1,t._attributes.set(l,r)}),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:He(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){return this._attributes.values().next().value.indices?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===H.Mesh?this._computeAttachmentOriginTriangles(e):this.type===H.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&ee(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(v.POSITION);return xt(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(v.POSITION);return yt(t,vt(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(v.POSITION);return bt(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(v.POSITION);if(!e||e.indices.length===0)return null;const t=this.type===H.Mesh?3:1;gt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=we(e.indices.length/t);return new Ve(r,t,e)}get transformation(){return this._transformation??oe}set transformation(e){this._transformation=e&&e!==oe?Le(e):null}get highlightGroups(){return this._highlightGroupCounts}get hasHighlights(){return this._highlightGroupCounts.size>0}foreachHighlightGroup(e){this._highlightGroupCounts.forEach((t,r)=>e(r))}allocateIdAndHighlight(e){const t=new wt(e);return this.addHighlight(t)}addHighlight(e){this.highlights.add(e);const{highlightGroupName:t}=e,r=(this._highlightGroupCounts.get(t)??0)+1;return this._highlightGroupCounts.set(t,r),e}removeHighlight(e){if(this.highlights.delete(e)){const{highlightGroupName:t}=e,r=this._highlightGroupCounts.get(t)??0;r<=1?this._highlightGroupCounts.delete(t):this._highlightGroupCounts.set(t,r-1)}}}function vt(n,e){return!(!("isClosed"in n)||!n.isClosed)&&e.indices.length>2}function q(n){if(n==null)return null;const e=n.offset!=null?n.offset:ut,t=n.rotation!=null?n.rotation:0,r=n.scale!=null?n.scale:lt,l=Y(1,0,0,0,1,0,e[0],e[1],1),u=Y(Math.cos(t),-Math.sin(t),0,Math.sin(t),Math.cos(t),0,0,0,1),i=Y(r[0],0,0,0,r[1],0,0,0,1),a=ge();return ie(a,u,i),ie(a,l,a),a}class Tt{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class It{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new Tt,this.numberOfVertices=0}}const B=()=>Ce.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function At(n,e){const t=await _t(n,e),r=await Ct(t.textureDefinitions??{},e);let l=0;for(const u in r)if(r.hasOwnProperty(u)){const i=r[u];l+=i?.image?i.image.width*i.image.height*4:0}return{resource:t,textures:r,size:l+Oe(t)}}async function _t(n,e){const t=e?.streamDataRequester;if(t)return Mt(n,t,e);const r=await de(Re(n,e));if(r.ok===!0)return r.value.data;fe(r.error),ve(r.error)}async function Mt(n,e,t){const r=await de(e.request(n,"json",t));if(r.ok===!0)return r.value;fe(r.error),ve(r.error.details.url)}function ve(n){throw new Be("",`Request for object resource failed: ${n}`)}function Ot(n){const e=n.params,t=e.topology;let r=!0;switch(e.vertexAttributes||(B().warn("Geometry must specify vertex attributes"),r=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const u=e.faces;if(u){if(e.vertexAttributes)for(const i in e.vertexAttributes){const a=u[i];a?.values?(a.valueType!=null&&a.valueType!=="UInt32"&&(B().warn(`Unsupported indexed geometry indices type '${a.valueType}', only UInt32 is currently supported`),r=!1),a.valuesPerElement!=null&&a.valuesPerElement!==1&&(B().warn(`Unsupported indexed geometry values per element '${a.valuesPerElement}', only 1 is currently supported`),r=!1)):(B().warn(`Indexed geometry does not specify face indices for '${i}' attribute`),r=!1)}}else B().warn("Indexed geometries must specify faces"),r=!1;break}default:B().warn(`Unsupported topology '${t}'`),r=!1}n.params.material||(B().warn("Geometry requires material"),r=!1);const l=n.params.vertexAttributes;for(const u in l)l[u].values||(B().warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Rt(n,e){const t=new Array,r=new Array,l=new Array,u=new ct,i=n.resource,a=$e.parse(i.version||"1.0","wosr");Pt.validate(a);const c=i.model.name,s=i.model.geometries,o=i.materialDefinitions??{},m=n.textures;let d=0;const f=new Map;for(let h=0;h<s.length;h++){const p=s[h];if(!Ot(p))continue;const b=Et(p),T=p.params.vertexAttributes,A=[],I=x=>{if(p.params.topology==="PerAttributeArray")return null;const _=p.params.faces;for(const R in _)if(R===x)return _[R].values;return null},N=T[v.POSITION],D=N.values.length/N.valuesPerElement;for(const x in T){const _=T[x],R=_.values,X=I(x)??we(D);A.push([x,new j(R,X,_.valuesPerElement,!0)])}const O=b.texture,y=m&&m[O];if(y&&!f.has(O)){const{image:x,parameters:_}=y,R=new xe(x,_);r.push(R),f.set(O,R)}const F=f.get(O),Q=F?F.id:void 0,P=b.material;let $=u.get(P,O);if($==null){const x=o[P.slice(P.lastIndexOf("/")+1)].params;x.transparency===1&&(x.transparency=0);const _=y&&y.alphaChannelUsage,R=x.transparency>0||_==="transparency"||_==="maskAndTransparency",X=y?Te(y.alphaChannelUsage):void 0,re={ambient:se(x.diffuse),diffuse:se(x.diffuse),opacity:1-(x.transparency||0),transparent:R,textureAlphaMode:X,textureAlphaCutoff:.33,textureId:Q,initTextureTransparent:!0,doubleSided:!0,cullFace:te.None,colorMixMode:x.externalColorMixMode||"tint",textureAlphaPremultiplied:y?.parameters.preMultiplyAlpha??!1};e?.materialParameters&&Object.assign(re,e.materialParameters),$=new J(re,e),u.set(P,O,$)}l.push($);const Ie=new K($,A);d+=A.find(x=>x[0]===v.POSITION)?.[1]?.indices.length??0,t.push(Ie)}return{engineResources:[{name:c,stageResources:{textures:r,materials:l,geometries:t},pivotOffset:i.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:Bt(t)}}function Bt(n){const e=pe();return n.forEach(t=>{const r=t.boundingInfo;r!=null&&(W(e,r.bbMin),W(e,r.bbMax))}),e}async function Ct(n,e){const t=new Array;for(const u in n){const i=n[u],a=i.images[0].data;if(!a){B().warn("Externally referenced texture data is not yet supported");continue}const c=i.encoding+";base64,"+a,s="/textureDefinitions/"+u,o=i.channels==="rgba"?i.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:me.REPEAT,t:me.REPEAT},preMultiplyAlpha:Te(o)!==M.Opaque},d=e?.disableTextures?Promise.resolve(null):ht(c,e);t.push(d.then(f=>({refId:s,image:f,parameters:m,alphaChannelUsage:o})))}const r=await Promise.all(t),l={};for(const u of r)l[u.refId]=u;return l}function Te(n){switch(n){case"mask":return M.Mask;case"maskAndTransparency":return M.MaskBlend;case"none":return M.Opaque;default:return M.Blend}}function Et(n){const e=n.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Pt=new $e(1,2,"wosr");async function Fr(n,e){const t=St(_e(n));if(t.fileType==="wosr"){const m=await(e.cache?e.cache.loadWOSR(t.url,e):At(t.url,e)),{engineResources:d,referenceBoundingBox:f}=Rt(m,e);return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:!1,isWosr:!0}}let r;if(e.cache)r=await e.cache.loadGLTF(t.url,e,!!e.usePBR);else{const{loadGLTF:m}=await Ae(()=>import("./loader-BjWpPpCh.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url);r=await m(new st(e.streamDataRequester),t.url,e,e.usePBR)}const l=r.model.meta?.ESRI_proxyEllipsoid,u=r.meta.isEsriSymbolResource&&l!=null&&r.meta.ESRI_webstyle==="EsriRealisticTreesStyle";u&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,Ut(r,l));const i=!!e.usePBR,a=r.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:u,mrrFactors:ze}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:We},c={...e.materialParameters,treeRendering:u},{engineResources:s,referenceBoundingBox:o}=Lt(r,a,c,e,t.specifiedLodIndex);return{lods:s,referenceBoundingBox:o,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function St(n){const e=n.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:n.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:n,specifiedLodIndex:null}:{fileType:"unknown",url:n,specifiedLodIndex:null}}function Lt(n,e,t,r,l){const u=n.model,i=new Array,a=new Map,c=new Map,s=u.lods.length,o=pe();return u.lods.forEach((m,d)=>{const f=r.skipHighLods===!0&&(s>1&&d===0||s>3&&d===1)||r.skipHighLods===!1&&l!=null&&d!==l;if(f&&d!==0)return;const h=new It(m.name,m.lodThreshold,[0,0,0]);m.parts.forEach(p=>{const b=f?new J({},r):Nt(u,p,h,e,t,a,c,r),{geometry:T,vertexCount:A}=Ft(p,b??new J({},r)),I=T.boundingInfo;I!=null&&d===0&&(W(o,I.bbMin),W(o,I.bbMax)),b!=null&&(h.stageResources.geometries.push(T),h.numberOfVertices+=A)}),f||i.push(h)}),{engineResources:i,referenceBoundingBox:o}}function Nt(n,e,t,r,l,u,i,a){const c=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=n.materials.get(e.material),o=e.attributes.texCoord0!=null,m=e.attributes.normal!=null;if(s==null)return null;const d=Gt(s.alphaMode);if(!u.has(c)){if(o){const y=(F,Q=!1)=>{if(F!=null&&!i.has(F)){const P=n.textures.get(F);if(P!=null){const $=P.data;i.set(F,new xe(Z($)?$.data:$,{...P.parameters,preMultiplyAlpha:!Z($)&&Q,encoding:Z($)&&$.encoding!=null?$.encoding:void 0}))}}};y(s.textureColor,d!==M.Opaque),y(s.textureNormal),y(s.textureOcclusion),y(s.textureEmissive),y(s.textureMetallicRoughness)}const h=s.color[0]**(1/U),p=s.color[1]**(1/U),b=s.color[2]**(1/U),T=s.emissiveFactor[0]**(1/U),A=s.emissiveFactor[1]**(1/U),I=s.emissiveFactor[2]**(1/U),N=s.textureColor!=null&&o?i.get(s.textureColor):null,D=Je({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),O=s.normalTextureTransform?.scale!=null?s.normalTextureTransform?.scale:Fe;u.set(c,new J({...r,transparent:d===M.Blend,customDepthTest:ft.Lequal,textureAlphaMode:d,textureAlphaCutoff:s.alphaCutoff,diffuse:[h,p,b],ambient:[h,p,b],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?te.None:te.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:m?he.Attribute:he.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:N?.id,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&o?i.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:N!=null&&!!N.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&o?i.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&o?i.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&o?i.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[T,A,I],mrrFactors:D?Ke:[s.metallicFactor,s.roughnessFactor,r.mrrFactors[2]],isSchematic:D,colorTextureTransformMatrix:q(s.colorTextureTransform),normalTextureTransformMatrix:q(s.normalTextureTransform),scale:[O[0],O[1]],occlusionTextureTransformMatrix:q(s.occlusionTextureTransform),emissiveTextureTransformMatrix:q(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:q(s.metallicRoughnessTextureTransform),...l},a))}const f=u.get(c);if(t.stageResources.materials.push(f),o){const h=p=>{p!=null&&t.stageResources.textures.push(i.get(p))};h(s.textureColor),h(s.textureNormal),h(s.textureOcclusion),h(s.textureEmissive),h(s.textureMetallicRoughness)}return f}function Ft(n,e){const t=n.attributes.position.count,r=nt(n.indices||t,n.primitiveType),l=V(3*t),{typedBuffer:u,typedBufferStride:i}=n.attributes.position;et(l,u,n.transform,3,i);const a=[[v.POSITION,new j(l,r,3,!0)]];if(n.attributes.normal!=null){const s=V(3*t),{typedBuffer:o,typedBufferStride:m}=n.attributes.normal;Ee(k,n.transform),tt(s,o,k,3,m),ne(k)&&ue(s,s),a.push([v.NORMAL,new j(s,r,3,!0)])}if(n.attributes.tangent!=null){const s=V(4*t),{typedBuffer:o,typedBufferStride:m}=n.attributes.tangent;Pe(k,n.transform),rt(s,o,k,4,m),ne(k)&&ue(s,s,4),a.push([v.TANGENT,new j(s,r,4,!0)])}if(n.attributes.texCoord0!=null){const s=V(2*t),{typedBuffer:o,typedBufferStride:m}=n.attributes.texCoord0;it(s,o,2,m),a.push([v.UV0,new j(s,r,2,!0)])}const c=n.attributes.color;if(c!=null){const s=new Uint8Array(4*t);c.elementCount===4?c instanceof Qe?ce(s,c,255):c instanceof be?ot(s,c):c instanceof Xe&&ce(s,c,1/256):(s.fill(255),c instanceof ye?le(s,c.typedBuffer,255,4,c.typedBufferStride):n.attributes.color instanceof Ye?at(s,c.typedBuffer,4,n.attributes.color.typedBufferStride):n.attributes.color instanceof Ze&&le(s,c.typedBuffer,1/256,4,c.typedBufferStride)),a.push([v.COLOR,new j(s,r,4,!0)])}return{geometry:new K(e,a),vertexCount:t}}const k=ge();function Gt(n){switch(n){case"BLEND":return M.Blend;case"MASK":return M.Mask;case"OPAQUE":case null:case void 0:return M.Opaque}}function Ut(n,e){for(let t=0;t<n.model.lods.length;++t){const r=n.model.lods[t];for(const l of r.parts){const u=l.attributes.normal;if(u==null)return;const i=l.attributes.position,a=i.count,c=G(),s=G(),o=G(),m=new Uint8Array(4*a),d=new Float64Array(3*a),f=Se(Ne(),l.transform);let h=0,p=0;for(let b=0;b<a;b++){i.getVec(b,s),u.getVec(b,c),ee(s,s,l.transform),Ue(o,s,e.center),ae(o,o,e.radius);const T=o[2],A=ke(o),I=Math.min(.45+.55*A*A,1);ae(o,o,e.radius),f!==null&&ee(o,o,f),je(o,o),t+1!==n.model.lods.length&&n.model.lods.length>1&&qe(o,o,c,T>-1?.2:Math.min(-4*T-3.8,1)),d[h]=o[0],d[h+1]=o[1],d[h+2]=o[2],h+=3,m[p]=255*I,m[p+1]=255*I,m[p+2]=255*I,m[p+3]=255,p+=4}l.attributes.normal=new ye(d),l.attributes.color=new be(m)}}}export{Fr as fetch,St as parseUrl};
