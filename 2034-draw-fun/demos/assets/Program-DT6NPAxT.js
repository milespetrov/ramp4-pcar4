import{cY as j,n as J}from"./main-DvRWqUGe.js";import{E as ut}from"./BufferObject-Bbf2B4_P.js";import{a as dt,e as R,m as M,b as mt,c as O}from"./Texture-DzKvHVRH.js";import{V as p,X as T,G as I,U as _t,t as X,n as C,M as b,F as gt,A as pt,B as A,H as x}from"./enums-D9v74xTE.js";let Qt=class{constructor(t,r,e=r){this.internalFormat=t,this.width=r,this.height=e,this.multisampled=!1,this.samples=1}};function xt(i){return i.width<=0||i.height<=0||i.internalFormat==null?0:i.width*i.height*dt(i.internalFormat)}let Tt=class{constructor(t,r){this._context=t,this._descriptor=r,this.type=R.RenderBuffer,this._context.instanceCounter.increment(p.Renderbuffer,this);const e=this._context.gl;this.glName=e.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:n,height:o,internalFormat:a,multisampled:h}=r;h?e.renderbufferStorageMultisample(e.RENDERBUFFER,this.samples,a,n,o):e.renderbufferStorage(e.RENDERBUFFER,a,n,o),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,r=this._context.parameters.maxSamples;return t?Math.min(t,r):r}get usedMemory(){return xt(this._descriptor)}resize(t,r){const e=this._descriptor;if(e.width===t&&e.height===r)return;e.width=t,e.height=r;const n=this._context.gl;this._context.bindRenderbuffer(this),e.multisampled?n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,e.internalFormat,e.width,e.height):n.renderbufferStorage(n.RENDERBUFFER,e.internalFormat,e.width,e.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(p.Renderbuffer,this),this._context=null)}};const Et=()=>J.getLogger("esri.views.webgl.FramebufferObject");let bt=class F{constructor(t,r,e=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(p.FramebufferObject,this);const n=w(r)?r:new M(this._context,r);if(this._colorAttachments.set(T.COLOR_ATTACHMENT0,n),this._validateTextureDescriptor(n.descriptor),this._validateColorAttachmentPoint(T.COLOR_ATTACHMENT0),e!=null)if(At(e))this._depthStencilTexture=w(e)?e:new M(this._context,e),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const o=St(e)?e:new Tt(this._context,e);this._depthStencilBuffer=o,this._validateRenderBufferDescriptor(o.descriptor)}}dispose(){if(this._colorAttachments.size===0&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((r,e)=>this.detachColorTexture(e)?.dispose()),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(p.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(T.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._colorAttachments.get(T.COLOR_ATTACHMENT0)?.descriptor?.width??0}get height(){return this._colorAttachments.get(T.COLOR_ATTACHMENT0)?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce((t,[r,e])=>t+e.usedMemory,this.depthStencil?.usedMemory??0)}getColorTexture(t){const r=this._colorAttachments.get(t);return r&&w(r)?r:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,r=T.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(r);const e=t.descriptor;this._validateTextureDescriptor(e),this.detachColorTexture(r)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,r)),this._colorAttachments.set(r,t)}detachColorTexture(t=T.COLOR_ATTACHMENT0){const r=this._colorAttachments.get(t);if(r){if(this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(e)}return this._colorAttachments.delete(t),r}}setColorTextureTarget(t,r=T.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(r);e&&this._framebufferTexture2D(e.glName,r,t)}attachDepthStencil(t){if(t)switch(t.type){case R.Texture:return this._attachDepthStencilTexture(t);case R.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(t==null)return;const r=t.descriptor;r.pixelFormat!==I.DEPTH_STENCIL&&r.pixelFormat!==I.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),r.dataType!==_t.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,X)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,X),this._context.bindFramebuffer(r)}return this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(t==null)return;const r=t.descriptor;if(this._validateRenderBufferDescriptor(r),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const e=this._context.gl,n=this._getGLAttachmentPoint(r);e.framebufferRenderbuffer(C.FRAMEBUFFER,n,e.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){const r=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const e=this._context.gl,n=this._getGLAttachmentPoint(t.descriptor);e.framebufferRenderbuffer(C.FRAMEBUFFER,n,e.RENDERBUFFER,null),this._context.bindFramebuffer(r)}return this._depthStencilBuffer=null,t}copyToTexture(t,r,e,n,o,a,h){(t<0||r<0||o<0||a<0)&&console.error("Offsets cannot be negative!"),(e<=0||n<=0)&&console.error("Copy width and height must be greater than zero!");const s=h.descriptor;h.descriptor.target!==b.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(s?.width==null||s?.height==null||t+e>this.width||r+n>this.height||o+e>s.width||a+n>s.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const c=this._context,l=c.bindTexture(h,M.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(M.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(b.TEXTURE_2D,0,o,a,t,r,e,n),c.bindTexture(l,M.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,r,e,n,o,a,h){(e<=0||n<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,r,e,n,o,a,h)}async readPixelsAsync(t,r,e,n,o,a,h){const{gl:s}=this._context,c=ut.createPixelPack(this._context,gt.STREAM_READ,h.byteLength);this._context.bindBuffer(c);const l=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),s.readPixels(t,r,e,n,o,a,0),this._context.unbindBuffer(pt.PIXEL_PACK_BUFFER),this._context.bindFramebuffer(l),await c.getSubDataAsync(h),c.dispose()}resize(t,r){if(this.width===t&&this.height===r)return;const e={width:t,height:r};U(e,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(n=>n.resize(e.width,e.height)),this._depthStencilTexture?.resize(e.width,e.height),this._initialized&&(U(e,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(e.width,e.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=C.FRAMEBUFFER){const r=this._context.gl;if(this._initialized)return void r.bindFramebuffer(t,this.glName);this._glName&&r.deleteFramebuffer(this._glName);const e=r.createFramebuffer();if(r.bindFramebuffer(t,e),this._colorAttachments.forEach((n,o)=>this._framebufferTexture2D(n.glName,o,$(n),t)),this._depthStencilBuffer){const n=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);r.framebufferRenderbuffer(t,n,r.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,r.DEPTH_STENCIL_ATTACHMENT,$(this._depthStencilTexture),t);mt()&&r.checkFramebufferStatus(t)!==r.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=e,this._initialized=!0}_framebufferTexture2D(t,r=T.COLOR_ATTACHMENT0,e=b.TEXTURE_2D,n=C.FRAMEBUFFER,o=0){this._context.gl.framebufferTexture2D(n,r,e,t,o)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(C.FRAMEBUFFER,r,t.RENDERBUFFER,null)}this._depthStencilBuffer=j(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=j(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==b.TEXTURE_2D&&t.target!==b.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),U(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){U(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case A.DEPTH_COMPONENT16:case A.DEPTH_COMPONENT24:case A.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case A.DEPTH24_STENCIL8:case A.DEPTH32F_STENCIL8:case A.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case A.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(F._MAX_COLOR_ATTACHMENTS===-1){const{gl:e}=this._context;F._MAX_COLOR_ATTACHMENTS=e.getParameter(e.MAX_COLOR_ATTACHMENTS)}const r=t-T.COLOR_ATTACHMENT0;r+1>F._MAX_COLOR_ATTACHMENTS&&J.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${r+1}. Implementation supports up to ${F._MAX_COLOR_ATTACHMENTS} color attachments`)}};function w(i){return i!=null&&"type"in i&&i.type===R.Texture}function St(i){return i!=null&&"type"in i&&i.type===R.RenderBuffer}function At(i){return w(i)||i!=null&&"pixelFormat"in i}function U(i,t){const r=Math.max(i.width,i.height);if(r>t){Et().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${t}`);const e=t/r;return i.width=Math.round(i.width*e),i.height=Math.round(i.height*e),!1}return!0}function $(i){return i.descriptor.target===b.TEXTURE_CUBE_MAP?b.TEXTURE_CUBE_MAP_POSITIVE_X:b.TEXTURE_2D}bt._MAX_COLOR_ATTACHMENTS=-1;const Dt=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],Mt=["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"],z=["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"],Ct=["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT","textureSize","texelFetch"];var g=999,V=9999,L=0,N=1,G=2,q=3,K=4,v=5,Ft=6,yt=7,Rt=8,Q=9,Ut=10,W=11,vt=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function wt(){var i,t,r,e=0,n=0,o=g,a=[],h=[],s=1,c=0,l=0,u=!1,_=!1,m="";return function(f){return h=[],f!==null?et(f.replace?f.replace(/\r\n/g,`
`):f):rt()};function d(f){f.length&&h.push({type:vt[o],data:f,position:l,line:s,column:c})}function et(f){var S;for(e=0,r=(m+=f).length;i=m[e],e<r;){switch(S=e,o){case L:e=at();break;case N:e=ot();break;case G:e=k();break;case q:e=st();break;case K:e=lt();break;case W:e=ht();break;case v:e=ct();break;case V:e=ft();break;case Q:e=nt();break;case g:e=it()}S!==e&&(m[S]===`
`?(c=0,++s):++c)}return n+=e,m=m.slice(e),h}function rt(f){return a.length&&d(a.join("")),o=Ut,d("(eof)"),h}function it(){return a=a.length?[]:a,t==="/"&&i==="*"?(l=n+e-1,o=L,t=i,e+1):t==="/"&&i==="/"?(l=n+e-1,o=N,t=i,e+1):i==="#"?(o=G,l=n+e,e):/\s/.test(i)?(o=Q,l=n+e,e):(u=/\d/.test(i),_=/[^\w_]/.test(i),l=n+e,o=u?K:_?q:V,e)}function nt(){return/[^\s]/g.test(i)?(d(a.join("")),o=g,e):(a.push(i),t=i,e+1)}function k(){return i!=="\r"&&i!==`
`||t==="\\"?(a.push(i),t=i,e+1):(d(a.join("")),o=g,e)}function ot(){return k()}function at(){return i==="/"&&t==="*"?(a.push(i),d(a.join("")),o=g,e+1):(a.push(i),t=i,e+1)}function st(){if(t==="."&&/\d/.test(i))return o=v,e;if(t==="/"&&i==="*")return o=L,e;if(t==="/"&&i==="/")return o=N,e;if(i==="."&&a.length){for(;P(a););return o=v,e}if(i===";"||i===")"||i==="("){if(a.length)for(;P(a););return d(i),o=g,e+1}var f=a.length===2&&i!=="=";if(/[\w_\d\s]/.test(i)||f){for(;P(a););return o=g,e}return a.push(i),t=i,e+1}function P(f){for(var S,D,H=0;;){if(S=z.indexOf(f.slice(0,f.length+H).join("")),D=z[S],S===-1){if(H--+f.length>0)continue;D=f.slice(0,1).join("")}return d(D),l+=D.length,(a=a.slice(D.length)).length}}function ht(){return/[^a-fA-F0-9]/.test(i)?(d(a.join("")),o=g,e):(a.push(i),t=i,e+1)}function lt(){return i==="."||/[eE]/.test(i)?(a.push(i),o=v,t=i,e+1):i==="x"&&a.length===1&&a[0]==="0"?(o=W,a.push(i),t=i,e+1):/[^\d]/.test(i)?(d(a.join("")),o=g,e):(a.push(i),t=i,e+1)}function ct(){return i==="f"&&(a.push(i),t=i,e+=1),/[eE]/.test(i)||i==="-"&&/[eE]/.test(t)?(a.push(i),t=i,e+1):/[^\d]/.test(i)?(d(a.join("")),o=g,e):(a.push(i),t=i,e+1)}function ft(){if(/[^\d\w_]/.test(i)){var f=a.join("");return o=Mt.indexOf(f)>-1?Rt:Ct.indexOf(f)>-1?yt:Ft,d(a.join("")),o=g,e}return a.push(i),t=i,e+1}}function Pt(i){var t=wt(),r=[];return r=(r=r.concat(t(i))).concat(t(null))}function Lt(i){return Pt(i)}function Nt(i){return i.map(t=>t.type!=="eof"?t.data:"").join("")}const B=new Set(["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"]);function Bt(i,t="100",r="300 es"){const e=/^\s*#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const n of i)if(n.type==="preprocessor"){const o=e.exec(n.data);if(o){const a=o[1].replaceAll(/\s{2,}/g," ");if(a===r)return a;if(a===t)return n.data="#version "+r,t;throw new Error("unknown glsl version: "+a)}}return i.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:`
`}),null}function Ot(i,t){for(let r=t-1;r>=0;r--){const e=i[r];if(e.type!=="whitespace"&&e.type!=="block-comment"){if(e.type!=="keyword")break;if(e.data==="attribute"||e.data==="in")return!0}}return!1}function y(i,t,r,e){e=e||r;for(const n of i)if(n.type==="ident"&&n.data===r)return e in t?t[e]++:t[e]=0,y(i,t,e+"_"+t[e],e);return r}function tt(i,t,r="afterVersion"){function e(s,c){for(let l=c;l<s.length;l++){const u=s[l];if(u.type==="operator"&&u.data===";")return l}return null}function n(s){let c=-1,l=0,u=-1;for(let _=0;_<s.length;_++){const m=s[_];if(m.type==="preprocessor"&&(/#(if|ifdef|ifndef)\s+.+/.test(m.data)?++l:/#endif\s*.*/.test(m.data)&&--l),r!=="afterVersion"&&r!=="afterPrecision"||m.type==="preprocessor"&&m.data.startsWith("#version")&&(u=Math.max(u,_)),r==="afterPrecision"&&m.type==="keyword"&&m.data==="precision"){const d=e(s,_);if(d===null)throw new Error("precision statement not followed by any semicolons!");u=Math.max(u,d)}c<u&&l===0&&(c=_)}return c+1}const o={data:`
`,type:"whitespace"},a=s=>s<i.length&&/[^\r\n]$/.test(i[s].data);let h=n(i);a(h-1)&&i.splice(h++,0,o);for(const s of t)i.splice(h++,0,s);a(h-1)&&a(h)&&i.splice(h,0,o)}function kt(i,t,r,e="lowp"){tt(i,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:e},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function Ht(i,t,r,e,n="lowp"){tt(i,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:e.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:n},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function jt(i,t){let r,e,n=-1;for(let o=t;o<i.length;o++){const a=i[o];if(a.type==="operator"&&(a.data==="["&&(r=o),a.data==="]")){e=o;break}a.type==="integer"&&(n=parseInt(a.data,10))}return r&&e&&i.splice(r,e-r+1),n}function Y(i,t){if(i.startsWith("#version 300"))return i;const r=Lt(i);if(Bt(r,"100","300 es")==="300 es")return i;let e=null,n=null;const o={},a={};for(let h=0;h<r.length;++h){const s=r[h];switch(s.type){case"keyword":t===x.VERTEX_SHADER&&s.data==="attribute"?s.data="in":s.data==="varying"&&(s.data=t===x.VERTEX_SHADER?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(s.data.trim())&&(s.data=s.data.replaceAll(/(2D|Cube|EXT)/g,"")),t===x.FRAGMENT_SHADER&&s.data==="gl_FragColor"&&(e||(e=y(r,o,"fragColor"),kt(r,e,"vec4")),s.data=e),t===x.FRAGMENT_SHADER&&s.data==="gl_FragData"){const c=jt(r,h+1),l=y(r,o,"fragData");Ht(r,l,"vec4",c,"mediump"),s.data=l}else t===x.FRAGMENT_SHADER&&s.data==="gl_FragDepthEXT"&&(n||(n=y(r,o,"gl_FragDepth")),s.data=n);break;case"ident":if(Dt.includes(s.data)){if(t===x.VERTEX_SHADER&&Ot(r,h))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");s.data in a||(a[s.data]=y(r,o,s.data)),s.data=a[s.data]}}}for(let h=r.length-1;h>=0;--h){const s=r[h];if(s.type==="preprocessor"){const c=s.data.match(/#extension\s+(.*):/);if(c?.[1]&&B.has(c[1].trim())){const _=r[h+1];r.splice(h,_&&_.type==="whitespace"?2:1)}const l=s.data.match(/#ifdef\s+(.*)/);l?.[1]&&B.has(l[1].trim())&&(s.data="#if 1");const u=s.data.match(/#ifndef\s+(.*)/);u?.[1]&&B.has(u[1].trim())&&(s.data="#if 0")}}return It(i,Nt(r))}function It(i,t){return t}const Xt=4294967295;class Zt{constructor(t,r,e,n,o=new Map,a=[]){this._context=t,this._locations=n,this._uniformBlockBindings=o,this._transformFeedbackVaryings=a,this._refCount=1,this._compiled=!1,this._linesOfCode=0,this._nameToUniformLocation=new Map,this._nameToUniform1=new Map,this._nameToUniform1v=new Map,this._nameToUniform2=new Map,this._nameToUniform3=new Map,this._nameToUniform4=new Map,this._nameToUniformMatrix3=new Map,this._nameToUniformMatrix4=new Map,t||console.error("RenderingContext isn't initialized!"),r.length===0&&console.error("Shaders source should not be empty!"),r=Y(r,x.VERTEX_SHADER),e=Y(e,x.FRAGMENT_SHADER),this._vShader=Z(this._context,x.VERTEX_SHADER,r),this._fShader=Z(this._context,x.FRAGMENT_SHADER,e),this._vShader&&this._fShader||console.error("Error loading shaders!"),this._context.instanceCounter.increment(p.Shader,this),O()&&(this.vertexShader=r,this.fragmentShader=e),this.usedMemory=r.length+e.length;const h=this._context.gl,s=h.createProgram();h.attachShader(s,this._vShader),h.attachShader(s,this._fShader),this._locations.forEach((c,l)=>h.bindAttribLocation(s,c,l)),this._transformFeedbackVaryings?.length&&h.transformFeedbackVaryings(s,this._transformFeedbackVaryings,h.SEPARATE_ATTRIBS),h.linkProgram(s),O()&&!h.getProgramParameter(s,h.LINK_STATUS)&&console.error(`Could not link shader
validated: ${h.getProgramParameter(s,h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader,h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader,h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(s)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);for(const[c,l]of this._uniformBlockBindings){const u=h.getUniformBlockIndex(s,c);u<Xt&&h.uniformBlockBinding(s,u,l)}this._glName=s,this._context.instanceCounter.increment(p.Program,this)}get glName(){return this._glName}get hasGLName(){return this._glName!=null}get hasTransformFeedbackVaryings(){return!!this._transformFeedbackVaryings?.length}get compiled(){if(this._compiled)return!0;const t=this._context.gl.getExtension("KHR_parallel_shader_compile");return t==null||this.glName==null?(this._compiled=!0,!0):(this._compiled=!!this._context.gl.getProgramParameter(this.glName,t.COMPLETION_STATUS_KHR),this._compiled)}dispose(){if(--this._refCount>0)return;const t=this._context.gl,r=this._context.instanceCounter;this._nameToUniformLocation.forEach(e=>e&&r.decrement(p.Uniform,e)),this._nameToUniformLocation.clear(),this._vShader&&(this._linesOfCode>0&&(r.decrement(p.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),t.deleteShader(this._vShader),this._vShader=null,r.decrement(p.Shader,this)),this._fShader&&(t.deleteShader(this._fShader),this._fShader=null),this._glName&&(t.deleteProgram(this._glName),this._glName=null,r.decrement(p.Program,this))}ref(){++this._refCount}_getUniformLocation(t){const r=this._nameToUniformLocation.get(t);if(r!==void 0)return r;if(this.glName){const e=this._context.gl.getUniformLocation(this.glName,t);return this._nameToUniformLocation.set(t,e),e&&this._context.instanceCounter.increment(p.Uniform,e),e}return null}hasUniform(t){return this._getUniformLocation(t)!=null}setUniform1i(t,r){const e=this._nameToUniform1.get(t);e!==void 0&&r===e||(this._context.gl.uniform1i(this._getUniformLocation(t),r),this._nameToUniform1.set(t,r))}setUniform1iv(t,r){E(this._nameToUniform1v,t,r)&&this._context.gl.uniform1iv(this._getUniformLocation(t),r)}setUniform2iv(t,r){E(this._nameToUniform2,t,r)&&this._context.gl.uniform2iv(this._getUniformLocation(t),r)}setUniform3iv(t,r){E(this._nameToUniform3,t,r)&&this._context.gl.uniform3iv(this._getUniformLocation(t),r)}setUniform4iv(t,r){E(this._nameToUniform4,t,r)&&this._context.gl.uniform4iv(this._getUniformLocation(t),r)}setUniform1f(t,r){const e=this._nameToUniform1.get(t);e!==void 0&&r===e||(this._context.gl.uniform1f(this._getUniformLocation(t),r),this._nameToUniform1.set(t,r))}setUniform1fv(t,r){E(this._nameToUniform1v,t,r)&&this._context.gl.uniform1fv(this._getUniformLocation(t),r)}setUniform2f(t,r,e){const n=this._nameToUniform2.get(t);n===void 0?(this._context.gl.uniform2f(this._getUniformLocation(t),r,e),this._nameToUniform2.set(t,[r,e])):r===n[0]&&e===n[1]||(this._context.gl.uniform2f(this._getUniformLocation(t),r,e),n[0]=r,n[1]=e)}setUniform2fv(t,r){E(this._nameToUniform2,t,r)&&this._context.gl.uniform2fv(this._getUniformLocation(t),r)}setUniform3f(t,r,e,n){const o=this._nameToUniform3.get(t);o===void 0?(this._context.gl.uniform3f(this._getUniformLocation(t),r,e,n),this._nameToUniform3.set(t,[r,e,n])):r===o[0]&&e===o[1]&&n===o[2]||(this._context.gl.uniform3f(this._getUniformLocation(t),r,e,n),o[0]=r,o[1]=e,o[2]=n)}setUniform3fv(t,r){const e=this._getUniformLocation(t);e!=null&&E(this._nameToUniform3,t,r)&&this._context.gl.uniform3fv(e,r)}setUniform4f(t,r,e,n,o){const a=this._nameToUniform4.get(t);a===void 0?(this._context.gl.uniform4f(this._getUniformLocation(t),r,e,n,o),this._nameToUniform4.set(t,[r,e,n,o])):a!==void 0&&r===a[0]&&e===a[1]&&n===a[2]&&o===a[3]||(this._context.gl.uniform4f(this._getUniformLocation(t),r,e,n,o),a[0]=r,a[1]=e,a[2]=n,a[3]=o)}setUniform4fv(t,r){const e=this._getUniformLocation(t);e!=null&&E(this._nameToUniform4,t,r)&&this._context.gl.uniform4fv(e,r)}setUniformMatrix3fv(t,r,e=!1){const n=this._getUniformLocation(t);n!=null&&E(this._nameToUniformMatrix3,t,r)&&this._context.gl.uniformMatrix3fv(n,e,r)}setUniformMatrix4fv(t,r,e=!1){const n=this._getUniformLocation(t);n!=null&&E(this._nameToUniformMatrix4,t,r)&&this._context.gl.uniformMatrix4fv(n,e,r)}stop(){}}function Z(i,t,r){const e=i.gl,n=e.createShader(t);return e.shaderSource(n,r),e.compileShader(n),O()&&!e.getShaderParameter(n,e.COMPILE_STATUS)&&(console.error("Compile error in ".concat(t===x.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(e.getShaderInfoLog(n)),console.error($t(r))),n}function $t(i){let t=2;return i.replaceAll(`
`,()=>`
`+zt(t++)+":")}function zt(i){return i>=1e3?i.toString():("  "+i).slice(-3)}function E(i,t,r){const e=i.get(t);if(!e)return i.set(t,Array.from(r)),!0;const n=r.length;if(e.length!==n)return i.set(t,Array.from(r)),!0;for(let o=0;o<n;++o){const a=r[o];if(e[o]!==a){for(e[o]=a;o<n;++o)e[o]=r[o];return!0}}return!1}export{Qt as i,Zt as r,Tt as s,bt as x};
