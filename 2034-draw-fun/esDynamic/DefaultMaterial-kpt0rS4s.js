import{H as Fe,o as B,s as Do,A as Fo,c as xe,r as jo,g as je,P as Bo,N as Vo}from"./vec32-CjgofUqd.js";import{gh as be,gj as K,ac as E,u as l,v as te,D as Ho,dF as ie,ao as Wo,cV as Uo,ab as qo,ax as Yo}from"./main-CZM6prq-.js";import{l as Be}from"./ViewingMode-CyR_b1T8.js";import{H as Jo}from"./InterleavedLayout-DMR1lUNO.js";import{n as g,t as Te,a as O,u as Ve,b as He,o as we,r as Zo}from"./NormalAttribute.glsl-D5Xr4soA.js";import{v as ko,x as R,y as Xo,z as We,g as $o,B as Ue,n as Ko,o as N,a as V,D as H,E as W,F as Q,j as C,P as U,G as Qo,H as qe,I as ea,J as oa,K as P,L as aa,M as Ye,N as Me,Q as re,R as Je,S as Ze,T as ta,U as Se,V as ne,W as ia,X as ra,Y as ye,Z as se,_ as q,e as z,$ as m,a0 as Ce,a1 as na,a2 as Oe,a3 as le,i as sa,a4 as la,a5 as ke,a6 as ca,a7 as Xe,a8 as $e,f as ce,a9 as Ke,aa as Qe,ab as eo,ac as oo,ad as ao,ae as da,af as ua,ag as ha,ah as to,ai as ma,aj as pa,ak as va,al as fa,am as ga,an as xa,ao as ba,ap as Ta,aq as d,ar as D,as as wa,at as Ma,A as Ne,au as Sa,av as ya,aw as Ca,d as Oa,ax as Na,ay as za,az as Ea}from"./Geometry-CmH148fq.js";import{n as io}from"./compilerUtils-CxGdVTzb.js";import{o as i,r as p,t as ro}from"./interfaces-DN2-jsJC.js";import{o as F}from"./AlphaCutoff-ZPx1GqOi.js";import{i as G,a as no,e as ee,n as de}from"./basicInterfaces-Dsf65ICa.js";import{e as T}from"./VertexAttribute-DFC3a3eR.js";import{n as _a,r as Aa}from"./vec4f64-CjUMzAyX.js";import{j as Ia}from"./mat3-ZassUAoY.js";import{e as Ga,o as Y}from"./mat3f64-Dh9_zhFu.js";import{o as so}from"./mat4f64-BaJwL7tQ.js";import{o as La,r as Ra}from"./doublePrecisionUtils-BJbYwoii.js";import{n as _}from"./symbolColorUtils-BXuv0_Wz.js";import{a as ze}from"./BindType-9iOk18Ed.js";import{l as Pa,n as lo}from"./vec2f64-Lu6rYV-9.js";import{o as ue}from"./vec2-BnynUbeJ.js";import{B as Ee,g as _e,f as Da}from"./renderState-CeregvMp.js";import{D as co,G as Fa,t as ja,_ as Ba,f as Va,O as uo}from"./enums-BnKvO6VZ.js";import{p as Ha,m as Wa}from"./Texture-DjqR7s9x.js";import{s as A}from"./vec42-D8CJyqHG.js";function Ua(e){e.vertex.code.add(i`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.int(_.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.int(_.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.int(_.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.int(_.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function qa({normalTexture:e,metallicRoughnessTexture:o,metallicFactor:a,roughnessFactor:t,emissiveTexture:n,emissiveFactor:r,occlusionTexture:s}){return e==null&&o==null&&n==null&&(r==null||Fe(r,be))&&s==null&&(t==null||t===1)&&(a==null||a===1)}const ho=K(1,1,.5),Ya=K(0,.6,.2),Ja=K(0,1,.2);function mo(e){e.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const po=Ga();function vo(e,o){const a=o.hasModelTransformation,t=o.instancedDoublePrecision;a&&(e.vertex.uniforms.add(new ko("model",r=>r.modelTransformation??so)),e.vertex.uniforms.add(new R("normalLocalOriginFromModel",r=>(Ia(po,r.modelTransformation??so),po)))),o.instanced&&t&&(e.attributes.add(T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(T.INSTANCEMODEL,"mat3"),e.attributes.add(T.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;t&&(n.include(Xo,o),n.uniforms.add(new We("viewOriginHi",(r,s)=>La(B(he,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),he)),new We("viewOriginLo",(r,s)=>Ra(B(he,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),he)))),n.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?t?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":t?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${t?i`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?t?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":t?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),o.output===g.Normal&&($o(n),n.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?t?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":t?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),o.hasVertexTangents&&n.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?t?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":t?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const he=E();function fo(e,o){o.hasSymbolColors?(e.include(Ua),e.attributes.add(T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Ue("colorMixMode",a=>Ko[a.colorMixMode])),e.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function go(e){e.code.add(i`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function xo(e,o){switch(o.output){case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:e.fragment.include(go),e.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function J(e,o){Za(e,o,new N("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function Za(e,o,a){const t=e.fragment;switch(o.alphaDiscardMode){case G.Blend:e.fragment.code.add(i`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.float(F)}) { discard; } }
      `);break;case G.Opaque:t.code.add(i`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case G.Mask:t.uniforms.add(a).code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case G.MaskBlend:t.uniforms.add(a).code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function bo(e,o){const{vertex:a,fragment:t}=e,n=o.hasColorTexture&&o.alphaDiscardMode!==G.Opaque,{output:r,normalType:s,hasColorTextureTransform:h}=o;switch(r){case g.Depth:V(a,o),e.include(H,o),e.include(U,o),e.include(W,o),n&&t.uniforms.add(new C("tex",u=>u.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(J,o),t.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:case g.ObjectAndLayerIdColor:V(a,o),e.include(H,o),e.include(W,o),e.include(Q,o),e.include(xo,o),e.include(U,o),e.include(ea,o),oa(e),e.varyings.add("depth","float"),n&&t.uniforms.add(new C("tex",u=>u.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(J,o),t.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${r===g.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case g.Normal:{V(a,o),e.include(H,o),e.include(Te,o),e.include(qe,o),e.include(W,o),e.include(Q,o),n&&t.uniforms.add(new C("tex",f=>f.texture)),s===O.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const u=s===O.Attribute||s===O.Compressed;a.main.add(i`
          vpos = getVertexInLocalOriginSpace();
          ${u?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(U,o),e.include(J,o),t.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${s===O.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case g.Highlight:V(a,o),e.include(H,o),e.include(W,o),e.include(Q,o),n&&t.uniforms.add(new C("tex",u=>u.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(U,o),e.include(J,o),e.include(Qo,o),t.main.add(i`
          discardBySlice(vpos);
          ${p(n,i`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function To(e,o){const a=e.fragment;switch(a.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case S.None:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case S.View:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case S.WindingOrder:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:io(o.doubleSidedMode);case S.COUNT:}}var S;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(S||(S={}));function ka(e,o){const a=e.fragment;o.hasVertexTangents?(e.attributes.add(T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),o.doubleSidedMode===S.WindingOrder?a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),o.textureCoordinateType!==P.None&&(e.include(aa,o),a.uniforms.add(o.bindType===ze.Pass?new C("normalTexture",t=>t.textureNormal):new Ye("normalTexture",t=>t.textureNormal)),o.hasNormalTextureTransform&&(a.uniforms.add(new Me("scale",t=>t.scale??Pa)),a.uniforms.add(new R("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??Y))),a.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),o.hasNormalTextureTransform&&a.code.add(i`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(i`return tangentSpace * rawNormal;
}`))}const wo=3e5,Ae=5e5,Ie=4;function Mo(){const e=new re,o=e.fragment;e.include(Je);const a=(Ie+1)/2,t=1/(2*a*a);return o.include(Ze),o.uniforms.add(new C("depthMap",n=>n.depthTexture),new Ye("tex",n=>n.colorTexture),new ta("blurSize",n=>n.blurSize),new N("projScale",(n,r)=>{const s=r.camera.distance;return s>5e4?Math.max(0,n.projScale-(s-5e4)):n.projScale})),o.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(t)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),o.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(Ie)}; r <= ${i.int(Ie)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const Xa=Object.freeze(Object.defineProperty({__proto__:null,build:Mo},Symbol.toStringTag,{value:"Module"}));class So extends Se{constructor(o,a,t){super(o,a,new ne(Xa,()=>import("./RealisticTree.glsl-CCDOLyZ9.js").then(n=>n.S)),t)}initializePipeline(){return Ee({colorWrite:_e})}}const $a="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Ka=class extends ro{constructor(){super(...arguments),this.projScale=1}},Qa=class extends Ka{constructor(){super(...arguments),this.intensity=1}},et=class extends ro{},ot=class extends et{constructor(){super(...arguments),this.blurSize=lo()}};const yo=16;function Co(){const e=new re,o=e.fragment;return e.include(Je),e.include(ia),o.include(Ze),o.uniforms.add(new N("radius",(a,t)=>me(t.camera))).code.add(i`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),o.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),o.uniforms.add(new C("normalMap",a=>a.normalTexture),new C("depthMap",a=>a.depthTexture),new N("projScale",a=>a.projScale),new C("rnm",a=>a.noiseTexture),new Me("rnmScale",(a,t)=>ue(Oo,t.camera.fullWidth/a.noiseTexture.descriptor.width,t.camera.fullHeight/a.noiseTexture.descriptor.height)),new N("intensity",a=>a.intensity),new Me("screenSize",(a,t)=>ue(Oo,t.camera.fullWidth,t.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),o.main.add(i`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${i.int(yo)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${i.int(yo)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function me(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Oo=lo(),at=Object.freeze(Object.defineProperty({__proto__:null,build:Co,getRadius:me},Symbol.toStringTag,{value:"Module"}));let No=class extends Se{constructor(e,o,a){super(e,o,new ne(at,()=>import("./RealisticTree.glsl-CCDOLyZ9.js").then(t=>t.b)),a)}initializePipeline(){return Ee({colorWrite:_e})}};const oe=2;let Z=class extends ra{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=ye.SSAO,this.isEnabled=()=>!1,this._enableTime=ie(0),this._passParameters=new Qa,this._drawParameters=new ot}initialize(){const e=Uint8Array.from(atob($a),a=>a.charCodeAt(0)),o=new Ha;o.wrapMode=co.CLAMP_TO_EDGE,o.pixelFormat=Fa.RGB,o.wrapMode=co.REPEAT,o.hasMipmap=!0,o.width=32,o.height=32,this._passParameters.noiseTexture=new Wa(this.renderingContext,o,e),this.techniques.precompile(No),this.techniques.precompile(So),this.addHandles(Wo(()=>this.isEnabled(),()=>this._enableTime=ie(0)))}destroy(){this._passParameters.noiseTexture=Uo(this._passParameters.noiseTexture)}render(e){const o=this.bindParameters,a=e.find(({name:y})=>y==="normals"),t=a?.getTexture(),n=a?.getTexture(ja),r=this.fboCache,s=o.camera,h=s.fullViewport[2],u=s.fullViewport[3],f=Math.round(h/oe),x=Math.round(u/oe),w=this.techniques.acquire(No),b=this.techniques.acquire(So);if(!w.compiled||!b.compiled)return this._enableTime=ie(performance.now()),this.requestRender(no.UPDATE),w.release(),b.release(),r.acquire(f,x,ye.SSAO,se.RED);this._enableTime===0&&(this._enableTime=ie(performance.now()));const v=this.renderingContext,L=this.view.qualitySettings.fadeDuration,M=s.relativeElevation,ae=qo((Ae-M)/(Ae-wo),0,1),k=L>0?Math.min(L,performance.now()-this._enableTime)/L:1,ge=k*ae;this._passParameters.normalTexture=t,this._passParameters.depthTexture=n,this._passParameters.projScale=1/s.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*tt/me(s)**6*ge;const X=r.acquire(h,u,"ssao input",se.RG);v.bindFramebuffer(X.fbo),v.setViewport(0,0,h,u),v.bindTechnique(w,o,this._passParameters,this._drawParameters),v.screen.draw(),w.release();const $=r.acquire(f,x,"ssao blur",se.RED);v.bindFramebuffer($.fbo),this._drawParameters.colorTexture=X.getTexture(),ue(this._drawParameters.blurSize,0,oe/u),v.bindTechnique(b,o,this._passParameters,this._drawParameters),v.setViewport(0,0,f,x),v.screen.draw(),X.release();const j=r.acquire(f,x,ye.SSAO,se.RED);return v.bindFramebuffer(j.fbo),v.setViewport(0,0,h,u),v.setClearColor(1,1,1,0),v.clear(Ba.COLOR),this._drawParameters.colorTexture=$.getTexture(),ue(this._drawParameters.blurSize,oe/h,0),v.bindTechnique(b,o,this._passParameters,this._drawParameters),v.setViewport(0,0,f,x),v.screen.draw(),b.release(),v.setViewport4fv(s.fullViewport),$.release(),k<1&&this.requestRender(no.UPDATE),j}};l([te()],Z.prototype,"consumes",void 0),l([te()],Z.prototype,"produces",void 0),l([te({constructOnly:!0})],Z.prototype,"techniques",void 0),l([te({constructOnly:!0})],Z.prototype,"isEnabled",void 0),Z=l([Ho("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Z);const tt=.5;function pe(e,o){const a=e.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(new C("ssaoTex",(t,n)=>n.ssao?.getTexture())),a.constants.add("blurSizePixelsInverse","float",1/oe),a.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function zo(e,o){const a=e.fragment,t=o.lightingSphericalHarmonicsOrder!==void 0?o.lightingSphericalHarmonicsOrder:2;t===0?(a.uniforms.add(new q("lightingAmbientSH0",(n,r)=>B(Eo,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):t===1?(a.uniforms.add(new z("lightingAmbientSH_R",(n,r)=>A(I,r.lighting.sh.r[0],r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3])),new z("lightingAmbientSH_G",(n,r)=>A(I,r.lighting.sh.g[0],r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3])),new z("lightingAmbientSH_B",(n,r)=>A(I,r.lighting.sh.b[0],r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):t===2&&(a.uniforms.add(new q("lightingAmbientSH0",(n,r)=>B(Eo,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0])),new z("lightingAmbientSH_R1",(n,r)=>A(I,r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3],r.lighting.sh.r[4])),new z("lightingAmbientSH_G1",(n,r)=>A(I,r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3],r.lighting.sh.g[4])),new z("lightingAmbientSH_B1",(n,r)=>A(I,r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3],r.lighting.sh.b[4])),new z("lightingAmbientSH_R2",(n,r)=>A(I,r.lighting.sh.r[5],r.lighting.sh.r[6],r.lighting.sh.r[7],r.lighting.sh.r[8])),new z("lightingAmbientSH_G2",(n,r)=>A(I,r.lighting.sh.g[5],r.lighting.sh.g[6],r.lighting.sh.g[7],r.lighting.sh.g[8])),new z("lightingAmbientSH_B2",(n,r)=>A(I,r.lighting.sh.b[5],r.lighting.sh.b[6],r.lighting.sh.b[7],r.lighting.sh.b[8]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),o.pbrMode!==m.Normal&&o.pbrMode!==m.Schematic||a.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Eo=E(),I=_a();function it(e){const o=e.fragment.code;o.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),o.add(i`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),o.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ge(e,o){const a=e.fragment.code;e.include(Ce),o.pbrMode!==m.Normal&&o.pbrMode!==m.Schematic&&o.pbrMode!==m.Simplified&&o.pbrMode!==m.TerrainWithWater||(a.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),a.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),o.pbrMode!==m.Normal&&o.pbrMode!==m.Schematic||(e.include(it),a.add(i`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),a.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),a.add(i`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.add(i`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function rt(e,o){const a=e.fragment.code;e.include(Ce),a.add(i`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),a.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),a.add(i`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),a.add(i`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),a.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function ve(e){e.constants.add("ambientBoostFactor","float",na)}function fe(e){e.uniforms.add(new N("lightingGlobalFactor",(o,a)=>a.lighting.globalFactor))}function Le(e,o){const a=e.fragment;switch(e.include(pe,o),o.pbrMode!==m.Disabled&&e.include(Ge,o),e.include(zo,o),e.include(Ce),a.code.add(i`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${o.pbrMode===m.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),ve(a),fe(a),Oe(a),a.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${o.spherical?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),le(a),a.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),o.pbrMode){case m.Disabled:case m.WaterOnIntegratedMesh:case m.Water:e.include(la),a.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case m.Normal:case m.Schematic:a.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.useFillLights?a.uniforms.add(new sa("hasFillLights",(t,n)=>n.enableFillLights)):a.constants.add("hasFillLights","bool",!1),a.code.add(i`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new N("lightingSpecularStrength",(t,n)=>n.lighting.mainLight.specularStrength),new N("lightingEnvironmentStrength",(t,n)=>n.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),a.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${o.pbrMode!==m.Schematic||o.hasColorTexture?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case m.Simplified:case m.TerrainWithWater:Oe(a),le(a),a.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:io(o.pbrMode);case m.COUNT:}}class nt extends ke{constructor(o,a,t){super(o,"mat4",ze.Draw,(n,r,s,h)=>n.setUniformMatrix4fv(o,a(r,s,h)),t)}}class st extends ke{constructor(o,a,t){super(o,"mat4",ze.Pass,(n,r,s)=>n.setUniformMatrix4fv(o,a(r,s)),t)}}function _o(e,o){o.receiveShadows&&(e.fragment.uniforms.add(new st("shadowMapMatrix",(a,t)=>t.shadowMap.getShadowMapMatrices(a.origin),4)),Ao(e))}function Re(e,o){o.receiveShadows&&(e.fragment.uniforms.add(new nt("shadowMapMatrix",(a,t)=>t.shadowMap.getShadowMapMatrices(a.origin),4)),Ao(e))}function Ao(e){const o=e.fragment;o.include(go),o.uniforms.add(new C("shadowMap",(a,t)=>t.shadowMap.depthTexture),new Ue("numCascades",(a,t)=>t.shadowMap.numCascades),new z("cascadeDistances",(a,t)=>t.shadowMap.cascadeDistances)).code.add(i`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function lt(e,o){o.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new R("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??Y)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardColorUV(){}`)}function ct(e,o){o.hasNormalTextureTransform&&o.textureCoordinateType!==P.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new R("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??Y)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardNormalUV(){}`)}function dt(e,o){o.hasEmissionTextureTransform&&o.textureCoordinateType!==P.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new R("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??Y)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardEmissiveUV(){}`)}function ut(e,o){o.hasOcclusionTextureTransform&&o.textureCoordinateType!==P.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new R("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??Y)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardOcclusionUV(){}`)}function ht(e,o){o.hasMetallicRoughnessTextureTransform&&o.textureCoordinateType!==P.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new R("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??Y)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Io(e){e.include(ca),e.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(_.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(_.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(_.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(_.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(_.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Go(e){const o=new re,{vertex:a,fragment:t,varyings:n}=o,{output:r,normalType:s,offsetBackfaces:h,instancedColor:u,spherical:f,receiveShadows:x,snowCover:w,pbrMode:b,textureAlphaPremultiplied:v,instancedDoublePrecision:L,hasVertexColors:M,hasVertexTangents:ae,hasColorTexture:k,hasNormalTexture:ge,hasNormalTextureTransform:X,hasColorTextureTransform:$}=e;if(V(a,e),o.include(Xe),n.add("vpos","vec3"),o.include(Q,e),o.include(vo,e),o.include($e,e),o.include(lt,e),!Ve(r))return o.include(bo,e),o;o.include(ct,e),o.include(dt,e),o.include(ut,e),o.include(ht,e),ce(a,e),o.include(Te,e),o.include(H,e);const j=s===O.Attribute||s===O.Compressed;return j&&h&&o.include(mo),o.include(ka,e),o.include(qe,e),u&&o.attributes.add(T.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),o.include(W,e),o.include(Ke,e),o.include(fo,e),o.include(Qe,e),a.uniforms.add(new z("externalColor",y=>y.externalColor)),n.add("vcolorExt","vec4"),e.terrainDepthTest&&n.add("depth","float"),a.main.add(i`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${p(u,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${i.float(F)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${p(j,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${p(ae,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${p(j&&h,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${p(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),o.include(Le,e),o.include(pe,e),o.include(J,e),o.include(L?_o:Re,e),o.include(eo,e),o.include(U,e),o.include(oo,e),ce(t,e),t.uniforms.add(a.uniforms.get("localOrigin"),new q("ambient",y=>y.ambient),new q("diffuse",y=>y.diffuse),new N("opacity",y=>y.opacity),new N("layerOpacity",y=>y.layerOpacity)),k&&t.uniforms.add(new C("tex",y=>y.texture)),o.include(ao,e),o.include(Ge,e),t.include(Io),o.include(To,e),ve(t),fe(t),le(t),t.main.add(i`
      discardBySlice(vpos);
      ${p(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${k?i`
              vec4 texColor = texture(tex, ${$?"colorUV":"vuv0"});
              ${p(v,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${s===O.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${x?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p(f,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${p(M,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${p(M,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${ge?`mat3 tangentSpace = computeTangentSpace(${ae?"normal":"normal, vpos, vuv0"});
             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${X?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${f?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${p(w,i`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${b===m.Normal||b===m.Schematic?i`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${p(w,i`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${w?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),o}const mt=Object.freeze(Object.defineProperty({__proto__:null,build:Go},Symbol.toStringTag,{value:"Module"}));let pt=class extends ua{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ho,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ee.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=be,this.instancedDoublePrecision=!1,this.normalType=O.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=K(.2,.2,.2),this.diffuse=K(.8,.8,.8),this.externalColor=Aa(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=E(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=de.Less,this.textureAlphaMode=G.Blend,this.textureAlphaCutoff=F,this.textureAlphaPremultiplied=!1,this.renderOccluded=ha.Occlude,this.isDecoration=!1}};class vt extends da{constructor(){super(...arguments),this.origin=E(),this.slicePlaneLocalOrigin=this.origin}}let Lo=class extends Se{constructor(e,o,a,t=new ne(mt,()=>import("./RealisticTree.glsl-CCDOLyZ9.js").then(n=>n.D))){super(e,o,t,a),this.type="DefaultMaterialTechnique"}_makePipeline(e,o){const{oitPass:a,output:t,transparent:n,cullFace:r,customDepthTest:s,hasOccludees:h,enableOffset:u}=e,f=a===to.NONE,x=a===to.FrontFace;return Ee({blending:Ve(t)&&n?ma(a):null,culling:gt(e)?Da(r):null,depthTest:{func:pa(a,ft(s))},depthWrite:va(e),drawBuffers:t===g.Depth?{buffers:[Va.NONE]}:fa(a,t),colorWrite:_e,stencilWrite:h?ga:null,stencilTest:h?o?xa:ba:null,polygonOffset:f||x?null:Ta(u)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function ft(e){return e===de.Lequal?uo.LEQUAL:uo.LESS}function gt(e){return e.cullFace!==ee.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}class c extends wa{constructor(o,a){super(),this.spherical=o,this.doublePrecisionRequiresObfuscation=a,this.alphaDiscardMode=G.Opaque,this.doubleSidedMode=S.None,this.pbrMode=m.Disabled,this.cullFace=ee.None,this.normalType=O.Attribute,this.customDepthTest=de.Less,this.emissionSource=D.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===D.Texture||this.hasOcclusionTexture||this.hasNormalTexture?P.Default:P.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}l([d({count:G.COUNT})],c.prototype,"alphaDiscardMode",void 0),l([d({count:S.COUNT})],c.prototype,"doubleSidedMode",void 0),l([d({count:m.COUNT})],c.prototype,"pbrMode",void 0),l([d({count:ee.COUNT})],c.prototype,"cullFace",void 0),l([d({count:O.COUNT})],c.prototype,"normalType",void 0),l([d({count:de.COUNT})],c.prototype,"customDepthTest",void 0),l([d({count:D.COUNT})],c.prototype,"emissionSource",void 0),l([d()],c.prototype,"hasVertexColors",void 0),l([d()],c.prototype,"hasSymbolColors",void 0),l([d()],c.prototype,"hasVerticalOffset",void 0),l([d()],c.prototype,"hasSlicePlane",void 0),l([d()],c.prototype,"hasSliceHighlight",void 0),l([d()],c.prototype,"hasColorTexture",void 0),l([d()],c.prototype,"hasMetallicRoughnessTexture",void 0),l([d()],c.prototype,"hasOcclusionTexture",void 0),l([d()],c.prototype,"hasNormalTexture",void 0),l([d()],c.prototype,"hasScreenSizePerspective",void 0),l([d()],c.prototype,"hasVertexTangents",void 0),l([d()],c.prototype,"hasOccludees",void 0),l([d()],c.prototype,"hasModelTransformation",void 0),l([d()],c.prototype,"offsetBackfaces",void 0),l([d()],c.prototype,"vvSize",void 0),l([d()],c.prototype,"vvColor",void 0),l([d()],c.prototype,"receiveShadows",void 0),l([d()],c.prototype,"receiveAmbientOcclusion",void 0),l([d()],c.prototype,"textureAlphaPremultiplied",void 0),l([d()],c.prototype,"instanced",void 0),l([d()],c.prototype,"instancedColor",void 0),l([d()],c.prototype,"writeDepth",void 0),l([d()],c.prototype,"transparent",void 0),l([d()],c.prototype,"enableOffset",void 0),l([d()],c.prototype,"terrainDepthTest",void 0),l([d()],c.prototype,"cullAboveTerrain",void 0),l([d()],c.prototype,"snowCover",void 0),l([d()],c.prototype,"hasColorTextureTransform",void 0),l([d()],c.prototype,"hasEmissionTextureTransform",void 0),l([d()],c.prototype,"hasNormalTextureTransform",void 0),l([d()],c.prototype,"hasOcclusionTextureTransform",void 0),l([d()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Ro(e){const o=new re,{vertex:a,fragment:t,varyings:n}=o,{output:r,offsetBackfaces:s,instancedColor:h,pbrMode:u,snowCover:f,spherical:x}=e,w=u===m.Normal||u===m.Schematic;if(V(a,e),o.include(Xe),n.add("vpos","vec3"),o.include(Q,e),o.include(vo,e),o.include($e,e),r===g.Color&&(ce(o.vertex,e),o.include(Te,e),o.include(H,e),s&&o.include(mo),h&&o.attributes.add(T.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),e.terrainDepthTest&&n.add("depth","float"),o.include(W,e),o.include(Ke,e),o.include(fo,e),o.include(Qe,e),a.uniforms.add(new z("externalColor",b=>b.externalColor)),n.add("vcolorExt","vec4"),a.main.add(i`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${p(h,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${i.float(F)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${p(s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${p(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),r===g.Color){const{hasColorTexture:b,hasColorTextureTransform:v,receiveShadows:L}=e;o.include(Le,e),o.include(pe,e),o.include(J,e),o.include(e.instancedDoublePrecision?_o:Re,e),o.include(eo,e),o.include(U,e),o.include(oo,e),ce(o.fragment,e),Oe(t),ve(t),fe(t),t.uniforms.add(a.uniforms.get("localOrigin"),a.uniforms.get("view"),new q("ambient",M=>M.ambient),new q("diffuse",M=>M.diffuse),new N("opacity",M=>M.opacity),new N("layerOpacity",M=>M.layerOpacity)),b&&t.uniforms.add(new C("tex",M=>M.texture)),o.include(ao,e),o.include(Ge,e),t.include(Io),le(t),t.main.add(i`
      discardBySlice(vpos);
      ${p(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${b?`texture(tex, ${v?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${p(b,`${p(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${L?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":x?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${p(f,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${i`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${p(w,`vec3 normalGround = ${x?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${w?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${p(f,i`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${f?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return o.include(bo,e),o}const xt=Object.freeze(Object.defineProperty({__proto__:null,build:Ro},Symbol.toStringTag,{value:"Module"}));class bt extends Lo{constructor(o,a,t){super(o,a,t,new ne(xt,()=>import("./RealisticTree.glsl-CCDOLyZ9.js").then(n=>n.R))),this.type="RealisticTreeTechnique"}}class Tt extends Ma{constructor(o,a){super(o,Mt),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[Ne.OPAQUE_MATERIAL,t=>(He(t)||we(t))&&!this.parameters.transparent],[Ne.TRANSPARENT_MATERIAL,t=>(He(t)||we(t))&&this.parameters.transparent&&this.parameters.writeDepth],[Ne.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>(Zo(t)||we(t))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=yt(this.parameters),this._configuration=new c(a.spherical,a.doublePrecisionRequiresObfuscation)}isVisibleForOutput(o){return o!==g.Shadow&&o!==g.ShadowExcludeHighlight&&o!==g.ShadowHighlight||this.parameters.castShadows}get visible(){const o=this.parameters;if(o.layerOpacity<F)return!1;const{hasInstancedColor:a,hasVertexColors:t,hasSymbolColors:n,vvColor:r}=o,s=a||r||n,h=o.colorMixMode==="replace",u=o.opacity>=F;if(t&&s)return h||u;const f=o.externalColor&&o.externalColor[3]>=F;return t?h?f:u:s?h||u:h?f:u}get hasEmissions(){return!!this.parameters.emissiveTextureId||!Fe(this.parameters.emissiveFactor,be)}getConfiguration(o,a){const t=this.parameters,{treeRendering:n,doubleSided:r,doubleSidedType:s}=t;return this._configuration.output=o,this._configuration.hasNormalTexture=!n&&!!t.normalTextureId,this._configuration.hasColorTexture=!!t.textureId,this._configuration.hasVertexTangents=!n&&t.hasVertexTangents,this._configuration.instanced=t.isInstanced,this._configuration.instancedDoublePrecision=t.instancedDoublePrecision,this._configuration.vvSize=!!t.vvSize,this._configuration.hasVerticalOffset=t.verticalOffset!=null,this._configuration.hasScreenSizePerspective=t.screenSizePerspective!=null,this._configuration.hasSlicePlane=t.hasSlicePlane,this._configuration.hasSliceHighlight=t.hasSliceHighlight,this._configuration.alphaDiscardMode=t.textureAlphaMode,this._configuration.normalType=n?O.Attribute:t.normalType,this._configuration.transparent=t.transparent,this._configuration.writeDepth=t.writeDepth,t.customDepthTest!=null&&(this._configuration.customDepthTest=t.customDepthTest),this._configuration.hasOccludees=a.hasOccludees,this._configuration.cullFace=t.hasSlicePlane?ee.None:t.cullFace,this._configuration.terrainDepthTest=a.terrainDepthTest,this._configuration.cullAboveTerrain=a.cullAboveTerrain,this._configuration.hasModelTransformation=!n&&t.modelTransformation!=null,this._configuration.hasVertexColors=t.hasVertexColors,this._configuration.hasSymbolColors=t.hasSymbolColors,this._configuration.doubleSidedMode=n?S.WindingOrder:r&&s==="normal"?S.View:r&&s==="winding-order"?S.WindingOrder:S.None,this._configuration.instancedColor=t.hasInstancedColor,this._configuration.receiveShadows=t.receiveShadows&&t.receiveShadows,this._configuration.receiveAmbientOcclusion=t.receiveAmbientOcclusion&&a.ssao!=null,this._configuration.vvColor=!!t.vvColor,this._configuration.textureAlphaPremultiplied=!!t.textureAlphaPremultiplied,this._configuration.pbrMode=t.usePBR?t.isSchematic?m.Schematic:m.Normal:m.Disabled,this._configuration.hasMetallicRoughnessTexture=!n&&!!t.metallicRoughnessTextureId,this._configuration.emissionSource=n?D.None:t.emissiveTextureId!=null?D.Texture:t.usePBR?D.Value:D.None,this._configuration.hasOcclusionTexture=!n&&!!t.occlusionTextureId,this._configuration.offsetBackfaces=!(!t.transparent||!t.offsetTransparentBackfaces),this._configuration.oitPass=a.oitPass,this._configuration.enableOffset=a.camera.relativeElevation<Sa,this._configuration.snowCover=St(a),this._configuration.hasColorTextureTransform=!!t.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!t.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!t.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!t.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!t.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(o,a,t,n,r,s){if(this.parameters.verticalOffset!=null){const h=t.camera;B(De,a[12],a[13],a[14]);let u=null;switch(t.viewingMode){case Be.Global:u=Fo(Po,De);break;case Be.Local:u=Do(Po,Nt)}let f=0;const x=xe(zt,De,h.eye),w=jo(x),b=je(x,x,1/w);let v=null;this.parameters.screenSizePerspective&&(v=Bo(u,b)),f+=ya(h,w,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),je(u,u,f),Vo(Pe,u,t.transform.inverseRotation),n=xe(Ct,n,Pe),r=xe(Ot,r,Pe)}Ca(o,t,n,r,Oa(t.verticalOffset),s)}createGLMaterial(o){return new wt(o)}createBufferWriter(){return new Na(this._vertexBufferLayout)}}class wt extends za{constructor(o){super({...o,...o.material.parameters})}beginSlot(o){this._material.setParameters({receiveShadows:o.shadowMap.enabled});const a=this._material.parameters;this.updateTexture(a.textureId);const t=o.camera.viewInverseTransposeMatrix;return B(a.origin,t[3],t[7],t[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(a.treeRendering?bt:Lo,o)}}class Mt extends pt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function St(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}function yt(e){const o=Jo().vec3f(T.POSITION);return e.normalType===O.Compressed?o.vec2i16(T.NORMALCOMPRESSED,{glNormalized:!0}):o.vec3f(T.NORMAL),e.hasVertexTangents&&o.vec4f(T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&o.vec2f(T.UV0),e.hasVertexColors&&o.vec4u8(T.COLOR),e.hasSymbolColors&&o.vec4u8(T.SYMBOLCOLOR),Ea()&&o.vec4u8(T.OBJECTANDLAYERIDCOLOR),o}const Ct=E(),Ot=E(),Nt=Yo(0,0,1),Po=E(),Pe=E(),De=E(),zt=E();export{Tt as B,Go as J,vt as N,Ro as R,Ae as a,xo as b,pe as c,me as d,wo as e,Co as f,To as g,ve as h,Mo as i,S as j,zo as k,qa as n,Ya as o,Le as p,rt as r,Ja as s,ho as t,fe as u,Re as x};
