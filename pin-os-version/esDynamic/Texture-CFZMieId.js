import{a$ as q,s as p,n as j}from"./main-C6lijZBn.js";import{C as M,A as Z,c as T,P as a,B as x,G as h,M as f,U as B,L as m,D as J,V as C}from"./enums-DBi1-Mm2.js";const Q=()=>j.getLogger("esri.views.webgl.checkWebGLError");function ee(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const L=!!q("enable-feature:webgl-debug");function F(){return L}function te(){return L}function N(t){if(F()){const e=t.getError();if(e){const r=ee(t,e),o=new Error().stack;Q().error(new p("webgl-error","WebGL error occurred",{message:r,stack:o}))}}}var P;(function(t){t[t.Texture=0]="Texture",t[t.RenderBuffer=1]="RenderBuffer"})(P||(P={}));function v(t){switch(t){case M.BYTE:case M.UNSIGNED_BYTE:return 1;case M.SHORT:case M.UNSIGNED_SHORT:case M.HALF_FLOAT:return 2;case M.FLOAT:case M.INT:case M.UNSIGNED_INT:return 4}}function y(t){const e=t.gl;switch(e.getError()){case e.NO_ERROR:return null;case e.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case e.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case e.INVALID_OPERATION:return"The specified command is not allowed for the current state";case e.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case e.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case e.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function re(t,e,r,o,s=0){const n=t.gl;t.bindBuffer(r);for(const i of o){const c=e.get(i.name);if(c==null){console.warn(`There is no location for vertex attribute '${i.name}' defined.`);continue}const _=s*i.stride;if(i.count<=4)n.vertexAttribPointer(c,i.count,i.type,i.normalized,i.stride,i.offset+_),n.enableVertexAttribArray(c),i.divisor>0&&t.gl.vertexAttribDivisor(c,i.divisor);else if(i.count===9)for(let l=0;l<3;l++)n.vertexAttribPointer(c+l,3,i.type,i.normalized,i.stride,i.offset+12*l+_),n.enableVertexAttribArray(c+l),i.divisor>0&&t.gl.vertexAttribDivisor(c+l,i.divisor);else if(i.count===16)for(let l=0;l<4;l++)n.vertexAttribPointer(c+l,4,i.type,i.normalized,i.stride,i.offset+16*l+_),n.enableVertexAttribArray(c+l),i.divisor>0&&t.gl?.vertexAttribDivisor(c+l,i.divisor);else console.error("Unsupported vertex attribute element count: "+i.count);if(F()){const l=y(t),d=v(i.type),u=i.offset,E=Math.round(d/u)!==d/u?`. Offset not a multiple of stride. DataType requires ${d} bytes, but descriptor has an offset of ${u}`:"";l&&console.error(`Unable to bind vertex attribute "${i.name}" with baseInstanceOffset ${_}${E}:`,l,i)}}}function ie(t,e,r,o){const s=t.gl;t.bindBuffer(r);for(const n of o){const i=e.get(n.name);if(n.count<=4)s.disableVertexAttribArray(i),n.divisor&&n.divisor>0&&t.gl?.vertexAttribDivisor(i,0);else if(n.count===9)for(let c=0;c<3;c++)s.disableVertexAttribArray(i+c),n.divisor&&n.divisor>0&&t.gl?.vertexAttribDivisor(i+c,0);else if(n.count===16)for(let c=0;c<4;c++)s.disableVertexAttribArray(i+c),n.divisor&&n.divisor>0&&t.gl?.vertexAttribDivisor(i+c,0);else console.error("Unsupported vertex attribute element count: "+n.count)}t.unbindBuffer(Z.ARRAY_BUFFER)}function X(t){switch(t){case h.ALPHA:case h.LUMINANCE:case h.RED:case h.RED_INTEGER:case a.R8:case a.R8I:case a.R8UI:case a.R8_SNORM:case x.STENCIL_INDEX8:return 1;case h.LUMINANCE_ALPHA:case h.RG:case h.RG_INTEGER:case a.RGBA4:case a.R16F:case a.R16I:case a.R16UI:case a.RG8:case a.RG8I:case a.RG8UI:case a.RG8_SNORM:case a.RGB565:case a.RGB5_A1:case x.DEPTH_COMPONENT16:return 2;case h.DEPTH_COMPONENT:case h.RGB:case h.RGB_INTEGER:case a.RGB8:case a.RGB8I:case a.RGB8UI:case a.RGB8_SNORM:case a.SRGB8:case x.DEPTH_COMPONENT24:return 3;case h.DEPTH_STENCIL:case h.DEPTH24_STENCIL8:case h.RGBA:case h.RGBA_INTEGER:case a.RGBA8:case a.R32F:case a.R11F_G11F_B10F:case a.RG16F:case a.R32I:case a.R32UI:case a.RG16I:case a.RG16UI:case a.RGBA8I:case a.RGBA8UI:case a.RGBA8_SNORM:case a.SRGB8_ALPHA8:case a.RGB9_E5:case a.RGB10_A2UI:case a.RGB10_A2:case x.DEPTH_STENCIL:case x.DEPTH_COMPONENT32F:case x.DEPTH24_STENCIL8:return 4;case x.DEPTH32F_STENCIL8:return 5;case a.RGB16F:case a.RGB16I:case a.RGB16UI:return 6;case a.RG32F:case a.RG32I:case a.RG32UI:case a.RGBA16F:case a.RGBA16I:case a.RGBA16UI:return 8;case a.RGB32F:case a.RGB32I:case a.RGB32UI:return 12;case a.RGBA32F:case a.RGBA32I:case a.RGBA32UI:return 16;case T.COMPRESSED_RGB_S3TC_DXT1_EXT:case T.COMPRESSED_RGBA_S3TC_DXT1_EXT:return .5;case T.COMPRESSED_RGBA_S3TC_DXT3_EXT:case T.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case T.COMPRESSED_R11_EAC:case T.COMPRESSED_SIGNED_R11_EAC:case T.COMPRESSED_RGB8_ETC2:case T.COMPRESSED_SRGB8_ETC2:case T.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case T.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return .5;case T.COMPRESSED_RG11_EAC:case T.COMPRESSED_SIGNED_RG11_EAC:case T.COMPRESSED_RGBA8_ETC2_EAC:case T.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}let H=class{constructor(t=0,e=t){this.width=t,this.height=e,this.target=f.TEXTURE_2D,this.pixelFormat=h.RGBA,this.dataType=B.UNSIGNED_BYTE,this.samplingMode=m.LINEAR,this.wrapMode=J.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}};function se(t){return t.width<=0||t.height<=0?0:Math.round(t.width*t.height*(t.hasMipmap?4/3:1)*(t.internalFormat==null?4:X(t.internalFormat))*(t.target===f.TEXTURE_CUBE_MAP?6:1))}class G extends H{constructor(e,r){switch(super(),this.context=e,Object.assign(this,r),this.internalFormat){case a.R16F:case a.R16I:case a.R16UI:case a.R32F:case a.R32I:case a.R32UI:case a.R8_SNORM:case a.R8:case a.R8I:case a.R8UI:this.pixelFormat=h.RED}}static validate(e,r){return new G(e,r)}}let V=class g{constructor(e,r=null,o=null){if(this.type=P.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,o=r;else{const s=G.validate(e,r);if(!s)throw new p("Texture descriptor invalid");this._descriptor=s}this._descriptor.target===f.TEXTURE_CUBE_MAP?this._setDataCubeMap(o):this.setData(o)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return se(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(C.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,r){const o=this._descriptor;if(o.width!==e||o.height!==r){if(this._wasImmutablyAllocated)throw new p("Immutable textures can't be resized!");o.width=e,o.height=r,this._descriptor.target===f.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let r=f.TEXTURE_CUBE_MAP_POSITIVE_X;r<=f.TEXTURE_CUBE_MAP_NEGATIVE_Z;r++)this._setData(e,r)}setData(e){this._setData(e)}_setData(e,r){const o=this._descriptor.context?.gl;if(!o)return;N(o),this._glName||(this._glName=o.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(C.Texture,this));const s=this._descriptor,n=r??s.target,i=S(n),c=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),U(s),this._configurePixelStorage(),N(o);const _=this._deriveInternalFormat();if(z(e)){let l="width"in e?e.width:e.codedWidth,d="height"in e?e.height:e.codedHeight;const u=1;e instanceof HTMLVideoElement&&(l=e.videoWidth,d=e.videoHeight),s.width&&s.height,i&&s.depth,s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,_,s.hasMipmap,l,d,u),this._texImage(n,0,_,l,d,u,e),N(o),s.hasMipmap&&(this.generateMipmap(),N(o)),s.width||(s.width=l),s.height||(s.height=d),i&&!s.depth&&(s.depth=u)}else{const{width:l,height:d,depth:u}=s;if(l==null||d==null)throw new p("Width and height must be specified!");if(i&&u==null)throw new p("Depth must be specified!");if(s.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,_,s.hasMipmap,l,d,u),w(e)){const E=e.levels,R=k(n,l,d,u),D=Math.min(R-1,E.length-1);o.texParameteri(s.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,D);const I=_;if(!ne(I))throw new p("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel((A,b,O,K)=>{const $=E[Math.min(A,E.length-1)];this._compressedTexImage(n,A,I,b,O,K,$)},D)}else this._texImage(n,0,_,l,d,u,e),N(o),s.hasMipmap&&this.generateMipmap()}W(o,this._descriptor),Y(o,this._descriptor),ae(this._descriptor.context,this._descriptor),N(o),this._descriptor.context.bindTexture(c,g.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,r,o,s,n,i,c=0){i||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const _=this._descriptor,l=this._deriveInternalFormat(),{context:d,pixelFormat:u,dataType:E,target:R,isImmutable:D}=_;if(D&&!this._wasImmutablyAllocated)throw new p("Cannot update immutable texture before allocation!");const I=d.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES,!0);(r<0||o<0||r+s>_.width||o+n>_.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:A}=d;c&&A.pixelStorei(A.UNPACK_SKIP_ROWS,c),z(i)?A.texSubImage2D(R,e,r,o,s,n,u,E,i):w(i)?A.compressedTexSubImage2D(R,e,r,o,s,n,l,i.levels[e]):A.texSubImage2D(R,e,r,o,s,n,u,E,i),c&&A.pixelStorei(A.UNPACK_SKIP_ROWS,0),d.bindTexture(I,g.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,r,o,s,n,i,c,_){_||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const l=this._descriptor,d=this._deriveInternalFormat(),{context:u,pixelFormat:E,dataType:R,isImmutable:D,target:I}=l;if(D&&!this._wasImmutablyAllocated)throw new p("Cannot update immutable texture before allocation!");S(I)||console.warn("Attempting to set 3D texture data on a non-3D texture");const A=u.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);u.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),(r<0||o<0||s<0||r+n>l.width||o+i>l.height||s+c>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:b}=u;if(w(_))_=_.levels[e],b.compressedTexSubImage3D(I,e,r,o,s,n,i,c,d,_);else{const O=_;b.texSubImage3D(I,e,r,o,s,n,i,c,E,R,O)}u.bindTexture(A,g.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new p("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,U(e)}e.samplingMode===m.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=m.LINEAR_MIPMAP_NEAREST):e.samplingMode===m.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=m.NEAREST_MIPMAP_NEAREST);const r=this._descriptor.context.bindTexture(this,g.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(r,g.TEXTURE_UNIT_FOR_UPDATES)}clearMipmap(){const e=this._descriptor;if(e.hasMipmap){if(this._wasImmutablyAllocated)throw new p("Cannot delete mipmaps to immutable texture after allocation");e.hasMipmap=!1,this._samplingModeDirty=!0,U(e)}e.samplingMode===m.LINEAR_MIPMAP_NEAREST?(this._samplingModeDirty=!0,e.samplingMode=m.LINEAR):e.samplingMode===m.NEAREST_MIPMAP_NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=m.NEAREST)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,U(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,r=e.context.gl;this._samplingModeDirty&&(W(r,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(Y(r,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.internalFormat!=null)return this._descriptor.internalFormat===h.DEPTH_STENCIL&&(this._descriptor.internalFormat=h.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case B.FLOAT:switch(this._descriptor.pixelFormat){case h.RGBA:return this._descriptor.internalFormat=a.RGBA32F;case h.RGB:return this._descriptor.internalFormat=a.RGB32F;default:throw new p("Unable to derive format")}case B.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case h.RGBA:return this._descriptor.internalFormat=a.RGBA8;case h.RGB:return this._descriptor.internalFormat=a.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===h.DEPTH_STENCIL?h.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:r,flipped:o,preMultiplyAlpha:s}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s?1:0)}_texStorage(e,r,o,s,n,i){const{gl:c}=this._descriptor.context;if(!oe(r))throw new p("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const _=o?k(e,s,n,i):1;if(S(e)){if(i==null)throw new p("Missing depth dimension for 3D texture upload");c.texStorage3D(e,_,r,s,n,i)}else c.texStorage2D(e,_,r,s,n);this._wasImmutablyAllocated=!0}_texImage(e,r,o,s,n,i,c){const _=this._descriptor.context.gl,l=S(e),{isImmutable:d,pixelFormat:u,dataType:E}=this._descriptor;if(d){if(c!=null){const R=c;if(l){if(i==null)throw new p("Missing depth dimension for 3D texture upload");_.texSubImage3D(e,r,0,0,0,s,n,i,u,E,R)}else _.texSubImage2D(e,r,0,0,s,n,u,E,R)}}else{const R=c;if(l){if(i==null)throw new p("Missing depth dimension for 3D texture upload");_.texImage3D(e,r,o,s,n,i,0,u,E,R)}else _.texImage2D(e,r,o,s,n,0,u,E,R)}}_compressedTexImage(e,r,o,s,n,i,c){const _=this._descriptor.context.gl,l=S(e);if(this._descriptor.isImmutable){if(c!=null)if(l){if(i==null)throw new p("Missing depth dimension for 3D texture upload");_.compressedTexSubImage3D(e,r,0,0,0,s,n,i,o,c)}else _.compressedTexSubImage2D(e,r,0,0,s,n,o,c)}else if(l){if(i==null)throw new p("Missing depth dimension for 3D texture upload");_.compressedTexImage3D(e,r,o,s,n,i,0,c)}else _.compressedTexImage2D(e,r,o,s,n,0,c)}_forEachMipmapLevel(e,r=1/0){let{width:o,height:s,depth:n,hasMipmap:i,target:c}=this._descriptor;const _=c===f.TEXTURE_3D;if(o==null||s==null||_&&n==null)throw new p("Missing texture dimensions for mipmap calculation");for(let l=0;e(l,o,s,n),i&&(o!==1||s!==1||_&&n!==1)&&!(l>=r);++l)o=Math.max(1,o>>1),s=Math.max(1,s>>1),_&&(n=Math.max(1,n>>1))}};function U(t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function W(t,e){let r=e.samplingMode,o=e.samplingMode;r===m.LINEAR_MIPMAP_NEAREST||r===m.LINEAR_MIPMAP_LINEAR?(r=m.LINEAR,e.hasMipmap||(o=m.LINEAR)):r!==m.NEAREST_MIPMAP_NEAREST&&r!==m.NEAREST_MIPMAP_LINEAR||(r=m.NEAREST,e.hasMipmap||(o=m.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,r),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,o)}function Y(t,e){typeof e.wrapMode=="number"?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function ae(t,e){const r=t.capabilities.textureFilterAnisotropic;r&&t.gl.texParameterf(e.target,r.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function oe(t){return t in a}function ne(t){return t in T}function w(t){return t!=null&&"type"in t&&t.type==="compressed"}function ce(t){return t!=null&&"byteLength"in t}function z(t){return t!=null&&!w(t)&&!ce(t)}function S(t){return t===f.TEXTURE_3D||t===f.TEXTURE_2D_ARRAY}function k(t,e,r,o=1){let s=Math.max(e,r);return t===f.TEXTURE_3D&&(s=Math.max(s,o)),Math.round(Math.log(s)/Math.LN2)+1}V.TEXTURE_UNIT_FOR_UPDATES=0;export{re as E,ie as _,X as a,F as b,te as c,G as d,P as e,V as m,y as o,H as p,v as s,N as u};
