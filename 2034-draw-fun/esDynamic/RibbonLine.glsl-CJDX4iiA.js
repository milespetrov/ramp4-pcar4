import{ax as Ie,ac as x,c0 as Zt,c8 as it,fx as Yt,G as qt,u as g,ab as we,n as rt,l3 as ae,fd as Xt,bT as Qt,H as Kt}from"./main-CZM6prq-.js";import{I as ei,E as B,p as Ne,o as k,u as Te,H as ti,s as X,c as pe,P as nt,g as Ue,r as ii}from"./vec32-CjgofUqd.js";import{s as ri,n as ni,N as ai,r as si}from"./vec4f64-CjUMzAyX.js";import{n as ze}from"./projectBuffer-D5W94T40.js";import{t as oi}from"./orientedBoundingBox-D0caZ1NH.js";import{r as at,k as Fe,aX as li,aY as ci,aq as S,as as st,K as ot,ar as lt,o as W,_ as be,aZ as ct,F as di,f as pi,w as je,j as hi,e as ye,Q as ui,a0 as fi,I as mi,a as vi,v as gi,N as Si,ab as _i,P as Ti,ac as bi,a6 as yi,U as Ei,V as Oi,ah as dt,ai as Ai,aj as Ri,ak as xi,al as Ci,am as pt,an as ht,ao as Di,a_ as Li,a$ as ut,b0 as Pi,b1 as Ii,b2 as wi,b3 as Ni,A as H,at as Ui,ag as se,az as We,aH as zi,aI as Fi,p as ji}from"./Geometry-CmH148fq.js";import{n as Me,c as ft,H as Wi}from"./mat4-BlVAwaU2.js";import{o as Mi,e as Ee}from"./mat4f64-BaJwL7tQ.js";import{U as mt,E as Vi}from"./sphere-Cnbzjtu_.js";import{m as Bi,M as Oe,p as Ae,V as G,O as vt}from"./plane-DEdld-wW.js";import{t as ki}from"./basicInterfaces-Dsf65ICa.js";import{s as Hi,m as Gi}from"./Util-Ca-5gGEH.js";import{E as Ji,e as h}from"./VertexAttribute-DFC3a3eR.js";import{n as $i,r as Zi,f as Yi,t as gt}from"./dehydratedFeatureUtils-ByUjfEo2.js";import{Y as qi,j as Re}from"./Octree-DYUT6q3R.js";import{r as Xi}from"./vec2-BnynUbeJ.js";import{v as St,M as Qi,b as Ve,B as Ki}from"./lineSegment-DOyNAHGm.js";import{H as er}from"./InterleavedLayout-DMR1lUNO.js";import{n as J,i as tr,e as ir,C as rr,f as _t,h as nr}from"./NormalAttribute.glsl-D5Xr4soA.js";import{o as he}from"./AlphaCutoff-ZPx1GqOi.js";import{E as Tt,f as xe}from"./enums-BnKvO6VZ.js";import{B as Ce,g as Be,c as bt}from"./renderState-CeregvMp.js";import{C as ar}from"./computeTranslationToOriginAndRotation-Bpda0-Bs.js";import{n as sr,e as or}from"./ElevationInfo-4009uCFK.js";import{u as lr}from"./hydratedFeatures-D8YzxKCl.js";import"./BindType-9iOk18Ed.js";import{o as p}from"./interfaces-DN2-jsJC.js";import"./floatRGBA-DHJrlzVC.js";import"./Texture-DjqR7s9x.js";import{s as cr}from"./vec42-D8CJyqHG.js";import"./vec2f64-Lu6rYV-9.js";var ke,He,Ge;(function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"})(ke||(ke={})),function(e){e[e.MapLayer=0]="MapLayer",e[e.ViewLayer=1]="ViewLayer",e[e.Outline=2]="Outline",e[e.SnappingHint=3]="SnappingHint"}(He||(He={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(Ge||(Ge={}));var ue;(function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"})(ue||(ue={}));let yt=class extends at{get geometries(){return this._geometries}get transformation(){return this._transformation??Mi}set transformation(e){this._transformation=Me(this._transformation??Ee(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Me(this._shaderTransformation??Ee(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Fe.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Et),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Hi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),Ji(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new li;for(const t of this._geometries)t.occludees=$i(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=Zi(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new ci(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===ki.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return ft(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=Ee()){return ft(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new Ot,this._validateBoundingVolume(this._bvWorldSpace,fe.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new Ot,this._validateBoundingVolume(this._bvObjectSpace,fe.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===fe.ObjectSpace;for(const r of this._geometries){const n=r.boundingInfo;n&&dr(n,e,i?r.transformation:this.getCombinedShaderTransformation(r))}ei(mt(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const n=r.boundingInfo;if(n==null)continue;const a=i?r.transformation:this.getCombinedShaderTransformation(r),l=Bi(a);B(At,n.center,a);const o=Ne(At,mt(e.bounds)),s=n.radius*l;e.bounds[3]=Math.max(e.bounds[3],o+s)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}};class Et{constructor(){this.min=Ie(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Ie(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class Ot extends Et{constructor(){super(...arguments),this.bounds=Vi()}}function dr(e,t,i){const r=e.bbMin,n=e.bbMax;if(Wi(i)){const a=k(pr,i[12],i[13],i[14]);Te(j,r,a),Te(M,n,a);for(let l=0;l<3;++l)t.min[l]=Math.min(t.min[l],j[l]),t.max[l]=Math.max(t.max[l],M[l])}else if(B(j,r,i),ti(r,n))for(let a=0;a<3;++a)t.min[a]=Math.min(t.min[a],j[a]),t.max[a]=Math.max(t.max[a],j[a]);else{B(M,n,i);for(let a=0;a<3;++a)t.min[a]=Math.min(t.min[a],j[a],M[a]),t.max[a]=Math.max(t.max[a],j[a],M[a]);for(let a=0;a<3;++a){X(j,r),X(M,n),j[a]=n[a],M[a]=r[a],B(j,j,i),B(M,M,i);for(let l=0;l<3;++l)t.min[l]=Math.min(t.min[l],j[l],M[l]),t.max[l]=Math.max(t.max[l],j[l],M[l])}}}const pr=x(),j=x(),M=x(),At=x();var fe;(function(e){e[e.WorldSpace=0]="WorldSpace",e[e.ObjectSpace=1]="ObjectSpace"})(fe||(fe={}));const hr=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let Rt=class extends at{constructor(e,t,i=""){super(),this.stage=e,this.apiLayerUid=i,this.type=Fe.Layer,this.events=new Zt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new it,this._handles=new Yt,this._objects=new it,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??ue.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const r of hr)this._handles.add(this.events.on(r,n=>e.handleEvent(r,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),t.length!==0){for(const i of t)i.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),this._octree!=null){for(let i=0;i<t.length;)this._objectsAdded.removeUnordered(t[i])?(t[i]=t[t.length-1],t.length-=1):++i;this._octree.remove(t)}}}sync(){this.updatePolicy!==ue.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new qi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=qt(this._octree),this._objectsAdded.clear()}},ur=class{constructor(e,t){this.vec3=e,this.id=t}};function Je(e,t,i,r){return new ur(Ie(e,t,i),r)}var Q,oe;(function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"})(Q||(Q={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(oe||(oe={}));let w=class extends st{constructor(){super(...arguments),this.space=Q.Screen,this.anchor=oe.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=ot.None,this.emissionSource=lt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===Q.Draped}};g([S({count:Q.COUNT})],w.prototype,"space",void 0),g([S({count:oe.COUNT})],w.prototype,"anchor",void 0),g([S()],w.prototype,"occluder",void 0),g([S()],w.prototype,"hasSlicePlane",void 0),g([S()],w.prototype,"writeDepth",void 0),g([S()],w.prototype,"hideOnShortSegments",void 0),g([S()],w.prototype,"hasCap",void 0),g([S()],w.prototype,"hasTip",void 0),g([S()],w.prototype,"vvSize",void 0),g([S()],w.prototype,"vvColor",void 0),g([S()],w.prototype,"vvOpacity",void 0),g([S()],w.prototype,"hasOccludees",void 0),g([S()],w.prototype,"terrainDepthTest",void 0),g([S()],w.prototype,"cullAboveTerrain",void 0);const xt=8;function Ct(e,t){const i=e.vertex;i.uniforms.add(new W("intrinsicWidth",r=>r.width)),t.vvSize?(e.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new be("vvSizeMinSize",r=>r.vvSize.minSize),new be("vvSizeMaxSize",r=>r.vvSize.maxSize),new be("vvSizeOffset",r=>r.vvSize.offset),new be("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new ct("vvOpacityValues",r=>r.vvOpacity.values,xt),new ct("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,xt)),i.code.add(p`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(di,t),e.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function Dt(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function fr(e){if(e==null)return 1;const t=Dt(e);return Math.floor(t.reduce((i,r)=>i+r))}function mr(e){return Dt(e).reduce((t,i)=>Math.max(t,i))}function vr(e){return e==null?ri:e.length===4?e:cr(gr,e[0],e[1],e[2],1)}const gr=ni();function Sr(e,t){t.stippleEnabled?_r(e,t):Tr(e)}function _r(e,t){const i=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:n}=e;n.include(Yi),t.draped||(pi(r,t),r.uniforms.add(new W("worldToScreenPerDistanceRatio",(a,l)=>1/l.camera.perScreenPixelRatio)),r.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${yr};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),je(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new hi("stipplePatternTexture",a=>a.stippleTexture),new W("stipplePatternSDFNormalizer",a=>br(a.stipplePattern)),new W("stipplePatternPixelSizeInv",a=>1/Lt(a))),n.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),t.stippleOffColorEnabled?(n.uniforms.add(new ye("stippleOffColor",a=>vr(a.stippleOffColor))),n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function Tr(e){e.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function br(e){return e?(Math.floor(.5*(mr(e)-1))+.5)/e.pixelRatio:1}function Lt(e){const t=e.stipplePattern;return t?fr(e.stipplePattern)/t.pixelRatio:1}const yr=p.float(.4),$e=64,Pt=$e/2,Er=Pt/5,Or=$e/Er,Ar=.25;function It(e,t){const i=e.vertex;je(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Or).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===Q.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new W("perRenderPixelRatio",(r,n)=>n.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var K;(function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"})(K||(K={}));let E=class extends st{constructor(){super(...arguments),this.capType=K.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=ot.None,this.emissionSource=lt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};g([S({count:K.COUNT})],E.prototype,"capType",void 0),g([S()],E.prototype,"hasSlicePlane",void 0),g([S()],E.prototype,"hasPolygonOffset",void 0),g([S()],E.prototype,"writeDepth",void 0),g([S()],E.prototype,"draped",void 0),g([S()],E.prototype,"stippleEnabled",void 0),g([S()],E.prototype,"stippleOffColorEnabled",void 0),g([S()],E.prototype,"stipplePreferContinuous",void 0),g([S()],E.prototype,"roundJoins",void 0),g([S()],E.prototype,"applyMarkerOffset",void 0),g([S()],E.prototype,"vvSize",void 0),g([S()],E.prototype,"vvColor",void 0),g([S()],E.prototype,"vvOpacity",void 0),g([S()],E.prototype,"falloffEnabled",void 0),g([S()],E.prototype,"innerColorEnabled",void 0),g([S()],E.prototype,"hasOccludees",void 0),g([S()],E.prototype,"occluder",void 0),g([S()],E.prototype,"terrainDepthTest",void 0),g([S()],E.prototype,"cullAboveTerrain",void 0),g([S()],E.prototype,"wireframe",void 0),g([S()],E.prototype,"discardInvisibleFragments",void 0),g([S()],E.prototype,"objectAndLayerIdColorInstanced",void 0);const me=1;function wt(e){const t=new ui,{attributes:i,varyings:r,vertex:n,fragment:a}=t,{applyMarkerOffset:l,draped:o,output:s,capType:c,stippleEnabled:d,falloffEnabled:v,roundJoins:m,wireframe:f,innerColorEnabled:O}=e;t.include(fi),t.include(Ct,e),t.include(Sr,e),t.include(mi,e);const y=l&&!o;y&&(n.uniforms.add(new W("markerScale",_=>_.markerScale)),t.include(It,{space:Q.World})),vi(n,e),n.uniforms.add(new gi("inverseProjectionMatrix",(_,u)=>u.camera.inverseProjectionMatrix),new Si("nearFar",(_,u)=>u.camera.nearFar),new W("miterLimit",_=>_.join!=="miter"?0:_.miterLimit),new ye("viewport",(_,u)=>u.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const A=e.terrainDepthTest&&s===J.Color;A&&r.add("depth","float");const D=d;D&&r.add("vLineSizeInv","float");const b=c===K.ROUND,z=d&&b,T=v||z;T&&r.add("vLineDistanceNorm","float"),b&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),n.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),n.code.add(p`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${A?"depth = pos.z;":""}

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),je(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${D?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),y&&n.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),n.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||b)&&n.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),n.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),m?n.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((me+2)/(me+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):n.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const P=c!==K.BUTT;return n.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${P?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${T?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),b&&n.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new W("worldToScreenRatio",(_,u)=>1/u.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new W("stipplePatternPixelSize",_=>Lt(_))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),n.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${f&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),A&&t.include(_i,e),t.include(Ti,e),t.include(bi,e),a.include(yi),a.main.add(p`
    discardBySlice(vpos);
    ${A?"terrainDepthTest(depth);":""}
  `),f?a.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&a.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(he)}) {
          discard;
        }
      `),z?a.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(he)}, stippleCoverage);
      `):a.main.add(p`float stippleAlpha = getStippleAlpha();`),s!==J.ObjectAndLayerIdColor&&a.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(he)});`),a.uniforms.add(new ye("intrinsicColor",_=>_.color)),a.main.add(p`vec4 color = intrinsicColor * vColor;`),O&&(a.uniforms.add(new ye("innerColor",_=>_.innerColor??_.color),new W("innerWidth",(_,u)=>_.innerWidth*u.camera.pixelRatio)),a.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),v&&(a.uniforms.add(new W("falloff",_=>_.falloff)),a.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(p`outputColorHighlightOID(finalColor, vpos);`),t}const Rr=Object.freeze(Object.defineProperty({__proto__:null,build:wt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));let xr=class extends Ei{constructor(e,t,i){super(e,t,new Oi(Rr,()=>Promise.resolve().then(()=>sn)),i,Ut),this.primitiveType=t.wireframe?Tt.LINES:Tt.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:r,hasOccludees:n,hasPolygonOffset:a}=e,l=i===dt.NONE,o=i===dt.FrontFace;return Ce({blending:e.output===J.Color?Ai(i):null,depthTest:{func:Ri(i)},depthWrite:xi(e),drawBuffers:r===J.Depth?{buffers:[xe.NONE]}:Ci(i,r),colorWrite:Be,stencilWrite:n?pt:null,stencilTest:n?t?ht:Di:null,polygonOffset:l||o?a?Nt:null:Li})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?Nt:null;this._occluderPipelineTransparent=Ce({blending:bt,polygonOffset:t,depthTest:ut,depthWrite:null,colorWrite:Be,stencilWrite:null,stencilTest:Pi,drawBuffers:e.output===J.Depth?{buffers:[xe.NONE]}:null}),this._occluderPipelineOpaque=Ce({blending:bt,polygonOffset:t,depthTest:ut,depthWrite:null,colorWrite:Be,stencilWrite:Ii,stencilTest:wi,drawBuffers:e.output===J.Depth?{buffers:[xe.NONE]}:null}),this._occluderPipelineMaskWrite=Ce({blending:null,polygonOffset:t,depthTest:Ni,depthWrite:null,colorWrite:null,stencilWrite:pt,stencilTest:ht,drawBuffers:e.output===J.Depth?{buffers:[xe.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case H.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case H.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const Nt={factor:0,units:-4},Ut=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var F;(function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(F||(F={}));class zt extends Ui{constructor(t){super(t,Dr),this._configuration=new E,this.vertexAttributeLocations=Ut,this.produces=new Map([[H.OPAQUE_MATERIAL,i=>tr(i)||ir(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[H.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>rr(i)],[H.OCCLUDER_MATERIAL,i=>_t(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[H.TRANSPARENT_OCCLUDER_MATERIAL,i=>_t(i)&&this.parameters.renderOccluded===se.OccludeAndTransparentStencil],[H.TRANSPARENT_MATERIAL,i=>i===J.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==se.OccludeAndTransparentStencil],[H.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>i===J.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==se.OccludeAndTransparentStencil],[H.DRAPED_MATERIAL,i=>nr(i)]])}getConfiguration(t,i){this._configuration.output=t,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===H.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&t!==J.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Pr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===se.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=he||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>he}intersectDraped({attributes:t,screenToWorldRatio:i},r,n,a,l,o){if(!n.options.selectionMode)return;const s=t.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const D=t.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=we(this.parameters.vvSize.offset[0]+D*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);const d=a[0],v=a[1],m=(c/2+4)*i;let f=Number.MAX_VALUE,O=0;const y=t.get(h.POSITION).data,A=Ye(this.parameters,t)?y.length-2:y.length-5;for(let D=0;D<A;D+=3){const b=y[D],z=y[D+1],T=(D+3)%y.length,P=d-b,_=v-z,u=y[T]-b,q=y[T+1]-z,L=we((u*P+q*_)/(u*u+q*q),0,1),ne=u*L-P,I=q*L-_,ee=ne*ne+I*I;ee<f&&(f=ee,O=D/3)}f<m*m&&l(o.dist,o.normal,O,!1)}intersect(t,i,r,n,a,l){if(!r.options.selectionMode||!t.visible)return;if(!Gi(i))return void rt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=t.attributes,s=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=we(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,v=Ir;Xi(v,r.point);const m=c*d.pixelRatio/2+4*d.pixelRatio;k(ve[0],v[0]-m,v[1]+m,0),k(ve[1],v[0]+m,v[1]+m,0),k(ve[2],v[0]+m,v[1]-m,0),k(ve[3],v[0]-m,v[1]-m,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(ve[b],Y[b]))return;Ae(d.eye,Y[0],Y[1],qe),Ae(d.eye,Y[1],Y[2],Xe),Ae(d.eye,Y[2],Y[3],Qe),Ae(d.eye,Y[3],Y[0],Ke);let f=Number.MAX_VALUE,O=0;const y=Ye(this.parameters,o)?s.length-2:s.length-5;for(let b=0;b<y;b+=3){N[0]=s[b]+i[12],N[1]=s[b+1]+i[13],N[2]=s[b+2]+i[14];const z=(b+3)%s.length;if(U[0]=s[z]+i[12],U[1]=s[z+1]+i[13],U[2]=s[z+2]+i[14],G(qe,N)<0&&G(qe,U)<0||G(Xe,N)<0&&G(Xe,U)<0||G(Qe,N)<0&&G(Qe,U)<0||G(Ke,N)<0&&G(Ke,U)<0)continue;if(d.projectToRenderScreen(N,ie),d.projectToRenderScreen(U,re),ie[2]<0&&re[2]>0){pe($,N,U);const P=d.frustum,_=-G(P[Re.NEAR],N)/nt($,vt(P[Re.NEAR]));Ue($,$,_),Te(N,N,$),d.projectToRenderScreen(N,ie)}else if(ie[2]>0&&re[2]<0){pe($,U,N);const P=d.frustum,_=-G(P[Re.NEAR],U)/nt($,vt(P[Re.NEAR]));Ue($,$,_),Te(U,U,$),d.projectToRenderScreen(U,re)}else if(ie[2]<0&&re[2]<0)continue;ie[2]=0,re[2]=0;const T=Qi(Ve(ie,re,Wt),v);T<f&&(f=T,X(Ft,N),X(jt,U),O=b/3)}const A=r.rayBegin,D=r.rayEnd;if(f<m*m){let b=Number.MAX_VALUE;if(Ki(Ve(Ft,jt,Wt),Ve(A,D,wr),te)){pe(te,te,A);const z=ii(te);Ue(te,te,1/z),b=z/Ne(A,D)}l(b,te,O,!1)}}get _layout(){const t=er().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?t.f32(h.SIZEFEATUREATTRIBUTE):t.f32(h.SIZE),this.parameters.vvColor?t.f32(h.COLORFEATUREATTRIBUTE):t.vec4f(h.COLOR),this.parameters.vvOpacity&&t.f32(h.OPACITYFEATUREATTRIBUTE),We()&&t.vec4u8(h.OBJECTANDLAYERIDCOLOR),t}createBufferWriter(){return new Lr(this._layout,this.parameters)}createGLMaterial(t){return new Cr(t)}validateParameters(t){t.join!=="miter"&&(t.miterLimit=0),t.markerParameters!=null&&(t.markerScale=t.markerParameters.width/t.width)}}class Cr extends zi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(t){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.acquireTechnique(xr,t)}}class Dr extends Fi{constructor(){super(...arguments),this.width=0,this.color=ai,this.join="miter",this.cap=K.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}}class Lr{constructor(t,i){this.vertexBufferLayout=t,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=me+r}}_isClosed(t){return Ye(this._parameters,t)}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){const i=t.get(h.POSITION).indices.length/2+1,r=this._isClosed(t);let n=r?2:2*2;return n+=((r?i:i-1)-(r?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(t,i,r,n,a,l){const o=Nr,s=Ur,c=zr,d=r.get(h.POSITION),v=d.indices,m=d.data.length/3,f=r.get(h.DISTANCETOSTART)?.data;v&&v.length!==2*(m-1)&&console.warn("RibbonLineMaterial does not support indices");const O=r.get(h.SIZEFEATUREATTRIBUTE)?.data[0]??r.get(h.SIZE)?.data[0]??1;let y=[1,1,1,1],A=0;const D=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);D?A=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(y=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),z=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,T=new Float32Array(a.buffer),P=We()?new Uint8Array(a.buffer):null,_=this.vertexBufferLayout.stride/4;let u=l*_;const q=u;let L=0;const ne=f?(R,V,Z)=>L=f[Z]:(R,V,Z)=>L+=Ne(R,V),I=(R,V,Z,de,Se,Jt,$t)=>{if(T[u++]=V[0],T[u++]=V[1],T[u++]=V[2],T[u++]=R[0],T[u++]=R[1],T[u++]=R[2],T[u++]=Z[0],T[u++]=Z[1],T[u++]=Z[2],T[u++]=de,T[u++]=$t,T[u++]=Se,T[u++]=O,D)T[u++]=A;else{const _e=Math.min(4*Jt,y.length-4);T[u++]=y[_e],T[u++]=y[_e+1],T[u++]=y[_e+2],T[u++]=y[_e+3]}b&&(T[u++]=z),We()&&(n&&(P[4*u]=n[0],P[4*u+1]=n[1],P[4*u+2]=n[2],P[4*u+3]=n[3]),u++)};u+=_,k(s,d.data[0],d.data[1],d.data[2]),t&&B(s,s,t);const ee=this._isClosed(r);if(ee){const R=d.data.length-3;k(o,d.data[R],d.data[R+1],d.data[R+2]),t&&B(o,o,t)}else k(c,d.data[3],d.data[4],d.data[5]),t&&B(c,c,t),I(s,s,c,1,F.LEFT_CAP_START,0,0),I(s,s,c,1,F.RIGHT_CAP_START,0,0),X(o,s),X(s,c);const Pe=ee?0:1,ce=ee?m:m-1;for(let R=Pe;R<ce;R++){const V=(R+1)%m*3;k(c,d.data[V],d.data[V+1],d.data[V+2]),t&&B(c,c,t),ne(o,s,R),I(o,s,c,0,F.LEFT_JOIN_END,R,L),I(o,s,c,0,F.RIGHT_JOIN_END,R,L);const Z=this.numJoinSubdivisions;for(let de=0;de<Z;++de){const Se=(de+1)/(Z+1);I(o,s,c,Se,F.LEFT_JOIN_END,R,L),I(o,s,c,Se,F.RIGHT_JOIN_END,R,L)}I(o,s,c,1,F.LEFT_JOIN_START,R,L),I(o,s,c,1,F.RIGHT_JOIN_START,R,L),X(o,s),X(s,c)}ee?(k(c,d.data[3],d.data[4],d.data[5]),t&&B(c,c,t),L=ne(o,s,ce),I(o,s,c,0,F.LEFT_JOIN_END,Pe,L),I(o,s,c,0,F.RIGHT_JOIN_END,Pe,L)):(L=ne(o,s,ce),I(o,s,s,0,F.LEFT_CAP_END,ce,L),I(o,s,s,0,F.RIGHT_CAP_END,ce,L)),Ze(T,q+_,T,q,_),u=Ze(T,u-_,T,u,_),this._parameters.wireframe&&this._addWireframeVertices(a,q,u,_)}_addWireframeVertices(t,i,r,n){const a=new Float32Array(t.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(t.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const s=c=>o=Ze(l,c,a,o,n);for(let c=0;c<l.length-1;c+=2*n)s(c),s(c+2*n),s(c+1*n),s(c+2*n),s(c+1*n),s(c+3*n)}}function Ze(e,t,i,r,n){for(let a=0;a<n;a++)i[r++]=e[t++];return r}function Ye(e,t){return e.isClosed?t.get(h.POSITION).indices.length>2:!1}function Pr(e){return e.anchor===oe.Tip&&e.hideOnShortSegments&&e.placement==="begin-end"&&e.worldSpace}const N=x(),U=x(),$=x(),te=x(),Ir=x(),ie=ae(),re=ae(),Ft=x(),jt=x(),Wt=St(),wr=St(),Nr=x(),Ur=x(),zr=x(),ve=[ae(),ae(),ae(),ae()],Y=[x(),x(),x(),x()],qe=Oe(),Xe=Oe(),Qe=Oe(),Ke=Oe();class Fr{constructor(t){this._originSR=t,this._rootOriginId="root/"+Xt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(t){const i=this._origins.get(this._rootOriginId);if(i==null){const d=Je(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(t[0]/r),a=Math.round(t[1]/r),l=Math.round(t[2]/r),o=`${n}/${a}/${l}`;let s=this._origins.get(o);const c=.5*r;if(pe(C,t,i.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<c&&C[1]<c&&C[2]<c){if(s){const d=Math.max(...C);if(pe(C,t,s.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<d)return s}return i}return s||(s=Je(n*r,a*r,l*r,o),this._origins.set(o,s)),s}_drawOriginBox(t,i=si(1,1,0,1)){const r=window.view,n=r._stage,a=i.toString();if(!this._objects.has(a)){this._material=new zt({width:2,color:i}),n.add(this._material);const f=new Rt(n,{pickable:!1}),O=new yt({castShadow:!1});n.add(O),f.add(O),this._objects.set(a,O)}const l=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=new Array(3*s),d=new Array,v=.5*this._gridSize;for(let f=0;f<s;f++)c[3*f]=t[0]+(1&o[f]?v:-v),c[3*f+1]=t[1]+(2&o[f]?v:-v),c[3*f+2]=t[2]+(4&o[f]?v:-v),f>0&&d.push(f-1,f);ze(c,this._originSR,0,c,r.renderSpatialReference,0,s);const m=new ji(this._material,[[h.POSITION,new oi(c,d,3,!0)]],null,Fe.Line);n.add(m),l.addGeometry(m)}get test(){}}const C=x();class jr{constructor(t,i=null,r=0){this.array=t,this.spatialReference=i,this.offset=r}}function Mt(e){return"array"in e}function ge(e,t,i="ground"){if(gt(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,i);if(Mt(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,i)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,i)}function Wr(e,t,i,r,n,a,l,o,s,c,d){const v=qr[d.mode];let m,f,O=0;if(ze(e,t,i,r,s.spatialReference,n,o))return v?.requiresAlignment(d)?(O=v.applyElevationAlignmentBuffer(r,n,a,l,o,s,c,d),m=a,f=l):(m=r,f=n),ze(m,s.spatialReference,f,a,c.spatialReference,l,o)?O:void 0}function et(e,t,i,r,n){const a=(gt(e)?e.z:Mt(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const l=ge(t,e,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=ge(t,e,"ground")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=ge(t,e,"scene")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(a,r),o=ge(t,e,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function Mr(e,t,i,r){return et(e,t,i,r,le),le.z}function Vr(e,t,i){return t==="on-the-ground"&&i==="on-the-ground"?e.staysOnTheGround:t===i||t!=="on-the-ground"&&i!=="on-the-ground"?t==null||i==null?e.definedChanged:De.UPDATE:e.onTheGroundChanged}function Br(e){return e==="relative-to-ground"||e==="relative-to-scene"}function kr(e){return e!=="absolute-height"}function Hr(e,t,i,r,n){et(t,i,n,r,le),Vt(e,le.verticalDistanceToGround);const a=le.sampledElevation,l=Me(Xr,e.transformation);return Le[0]=t.x,Le[1]=t.y,Le[2]=le.z,ar(t.spatialReference,Le,l,r.spatialReference)?e.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function Vt(e,t){for(let i=0;i<e.geometries.length;++i){const r=e.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function Gr(e,t,i,r,n,a){let l=0;const o=a.spatialReference;t*=3,r*=3;for(let s=0;s<n;++s){const c=e[t],d=e[t+1],v=e[t+2],m=a.getElevation(c,d,v,o,"ground")??0;l+=m,i[r]=c,i[r+1]=d,i[r+2]=m,t+=3,r+=3}return l/n}function Jr(e,t,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;t*=3,r*=3;for(let m=0;m<n;++m){const f=e[t],O=e[t+1],y=e[t+2],A=a.getElevation(f,O,y,v,"ground")??0;s+=A,i[r]=f,i[r+1]=O,i[r+2]=d==null?y+A+c:A+c,t+=3,r+=3}return s/n}function $r(e,t,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;t*=3,r*=3;for(let m=0;m<n;++m){const f=e[t],O=e[t+1],y=e[t+2],A=a.getElevation(f,O,y,v,"scene")??0;s+=A,i[r]=f,i[r+1]=O,i[r+2]=d==null?y+A+c:A+c,t+=3,r+=3}return s/n}function Zr(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return t!==0||i!=null}function Yr(e,t,i,r,n,a,l,o){const s=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;t*=3,r*=3;for(let d=0;d<n;++d){const v=e[t],m=e[t+1],f=e[t+2];i[r]=v,i[r+1]=m,i[r+2]=c==null?f+s:s,t+=3,r+=3}return 0}class Bt{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var De;(function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"})(De||(De={}));const qr={"absolute-height":{applyElevationAlignmentBuffer:Yr,requiresAlignment:Zr},"on-the-ground":{applyElevationAlignmentBuffer:Gr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Jr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:$r,requiresAlignment:()=>!0}},Xr=Ee(),le=new Bt,Le=x(),Qr=()=>rt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Kr(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function en(e,t,i,r){const n=e?.expression;if(typeof n!="string")return null;const a=an(n);if(a!=null)return{cachedResult:a};const l=await Qt();Kt(i);const o=l.arcadeUtils,s=o.createSyntaxTree(n);return o.dependsOnView(s)?(r?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(s),context:o.createExecContext(null,{sr:t}),modules:l}}}function kt(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function Ht(e,t){if(e!=null&&!Gt(e)){if(!t||!e.arcade)return void Qr().errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=lr(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function tn(e){if(e!=null){if(Gt(e))return e.cachedResult;const t=e.arcade;let i=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return typeof i!="number"&&(e.cachedResult=0,i=0),i}return 0}function rn(e,t=!1){let i=e?.featureExpressionInfo;const r=i?.expression;return t||r==="0"||(i=null),i??null}const nn={cachedResult:0};function Gt(e){return e.cachedResult!=null}function an(e){return e==="0"?0:null}class tt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(t){this._unit=t,this._metersPerElevationInfoUnit=sr(t)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(t){this._meterUnitOffset=t,this._renderUnitOffset=0}set offsetElevationInfoUnits(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(t){this._renderUnitOffset+=t}geometryZWithOffset(t,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:t+r}calculateOffsetRenderUnits(t){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=tn(r)*this._metersPerElevationInfoUnit),i/t.unitInMeters+this._renderUnitOffset}setFromElevationInfo(t){this.mode=t.mode,this.unit=or(t.unit)?t.unit:"meters",this.offsetElevationInfoUnits=t.offset??0}updateFeatureExpressionInfoContext(t,i,r){if(t==null)return void(this._featureExpressionInfoContext=null);const n=t?.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=Kr(t),Ht(this._featureExpressionInfoContext,kt(n.modules,i,r))):this._featureExpressionInfoContext=t}static fromElevationInfo(t){const i=new tt;return t!=null&&i.setFromElevationInfo(t),i}}const sn=Object.freeze(Object.defineProperty({__proto__:null,build:wt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));export{yt as A,Ar as B,ue as C,w as D,Vt as E,Mr as F,ge as G,Bt as R,zt as W,Fr as _,He as a,Ge as b,en as c,rn as d,ke as e,et as f,nn as g,De as h,Br as i,Rt as j,kr as k,Ht as l,Vr as m,K as n,tt as o,Hr as p,Q as q,jr as r,kt as s,Je as t,Wr as u,Ct as v,It as w,oe as x,$e as y,Pt as z};
