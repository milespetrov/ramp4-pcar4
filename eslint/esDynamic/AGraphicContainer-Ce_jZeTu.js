import{cF as O,C as V}from"./main-BPeHLg3l.js";import{i as z,r as D,n as I}from"./TechniqueInstance-BXY___RP.js";import{e as g,N as C}from"./MapView-C9FVugbp.js";import{T as c}from"./FeatureCommandQueue-DJyN6-Xp.js";import{o as w,i as E,M as L,f as N,h as T}from"./mat3-CC4Foazl.js";import{t as k}from"./vec2f32-CVhmN3Me.js";import{r as F}from"./vec3f32-BS0cezmI.js";import{L as P}from"./normalizeUtils-DeCHyBWv.js";import{e as U}from"./Container-C3W-AIVl.js";import{b as H}from"./LabelMetric-B3CLDL2X.js";import{E as v}from"./BufferObject-CXpcjp7o.js";import{R as b,E as W,C as x,F as M}from"./enums-DBi1-Mm2.js";import{o as q}from"./VertexArrayObject-8FEuVQ0Q.js";let G=0;function h(m,e){return new z(D(G++),m,e)}const f={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class Y{constructor(){this.instances={fill:h(c.fill,{uniforms:f,optionalAttributes:{zoomRange:!0}}),marker:h(c.marker,{uniforms:f,optionalAttributes:{zoomRange:!0}}),line:h(c.line,{uniforms:f,optionalAttributes:{zoomRange:!0}}),text:h(c.text,{uniforms:f,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:h(c.complexFill,{uniforms:f,optionalAttributes:{zoomRange:!0}}),texturedLine:h(c.texturedLine,{uniforms:f,optionalAttributes:{zoomRange:!0}}),animatedMarker:h(c.animatedMarker,{uniforms:f,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}const j=Math.PI/180,J=4;class $ extends U{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=g(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=O(this._program)}doRender(e){const{context:t}=e,s=this._getBounds();if(s.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,s),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(b.ONE,b.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const o=this._program;t.bindVAO(this._vao),t.useProgram(o),o.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(W.LINES,8*s.length,x.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:g()}}_createShaderProgram(e){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,s=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=e.programCache.acquire(t,s,S().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:s,size:o,resolution:d,pixelRatio:a,rotation:n,viewpoint:i}=t,l=j*n,{x:r,y:R}=i.targetGeometry,y=P(r,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=R;const p=a*o[0],_=a*o[1],A=d*p,B=d*_,u=w(this._dvsMat3);E(u,u,s),L(u,u,k(p/2,_/2)),N(u,u,F(o[0]/A,-_/B,1)),T(u,u,-l)}_updateBufferData(e,t){const{x:s,y:o}=this._localOrigin,d=2*J*t.length,a=new Float32Array(d),n=new Uint32Array(8*t.length);let i=0,l=0;for(const r of t)r&&(a[2*i]=r[0]-s,a[2*i+1]=r[1]-o,a[2*i+2]=r[0]-s,a[2*i+3]=r[3]-o,a[2*i+4]=r[2]-s,a[2*i+5]=r[3]-o,a[2*i+6]=r[2]-s,a[2*i+7]=r[1]-o,n[l]=i+0,n[l+1]=i+3,n[l+2]=i+3,n[l+3]=i+2,n[l+4]=i+2,n[l+5]=i+1,n[l+6]=i+1,n[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=v.createVertex(e,M.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(n):this._indexBuffer=v.createIndex(e,M.DYNAMIC_DRAW,n),!this._vao){const r=S();this._vao=new q(e,r.attributes,r.bufferLayouts,new Map([["geometry",this._vertexBuffer]]),this._indexBuffer)}}}const S=()=>H("bounds",{geometry:[{location:0,name:"a_position",count:2,type:x.FLOAT}]});class K extends I{constructor(e){super(e),this._instanceStore=new Y,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=V(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new $(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const s of this.children)s.visible&&s.getDisplayList(this._instanceStore,C.STRICT_ORDER)?.render(e)}}export{K as i};
