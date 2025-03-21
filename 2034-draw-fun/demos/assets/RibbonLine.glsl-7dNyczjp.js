import{az as Me,ae as x,c3 as Ft,cb as Ze,fA as jt,E as Mt,q as g,ad as Pe,n as _t,l6 as se,fg as Wt,bW as Vt,G as Bt}from"./main-DvRWqUGe.js";import{I as kt,E as H,p as Ge,o as G,u as xe,H as Ht,s as X,c as pe,P as qe,g as Ie,r as Gt}from"./vec32-D8MUmfTD.js";import{s as Jt,n as Yt,N as Zt,r as qt}from"./vec4f64-o2zAXfmz.js";import{n as We}from"./projectBuffer-B-hA5kQ3.js";import{t as Xt}from"./orientedBoundingBox-ivxg4jAM.js";import{r as Tt,k as Je,aX as Qt,aY as Kt,aq as S,as as bt,K as Et,ar as Ot,o as M,_ as Se,aZ as Xe,F as ei,f as ti,w as Ye,j as ii,e as Ae,Q as ri,a0 as ni,I as ai,a as si,v as oi,N as li,ab as ci,P as di,ac as pi,a6 as hi,U as ui,V as fi,ah as Qe,ai as mi,aj as vi,ak as gi,al as Si,am as Ke,an as et,ao as _i,a_ as Ti,a$ as tt,b0 as bi,b1 as Ei,b2 as Oi,b3 as yi,A as k,at as Ai,ag as ae,az as Ve,aH as Ri,aI as xi,p as Ci}from"./Geometry-CrpBYtyC.js";import{n as Be,c as it,H as Di}from"./mat4-B1QDXeUd.js";import{o as Li,e as Re}from"./mat4f64-Dk4dwAN8.js";import{U as rt,E as Pi}from"./sphere-BYPkfaOf.js";import{m as Ii,M as De,p as _e,V,O as nt}from"./plane-CRVt_F3l.js";import{t as $i}from"./basicInterfaces-CZwQPxTp.js";import{s as wi,m as Ni}from"./Util-BsUeN7uz.js";import{E as Ui,e as h}from"./VertexAttribute-Cq4MnHjR.js";import{n as zi,r as Fi,f as ji,t as yt}from"./dehydratedFeatureUtils-C1XuFjd2.js";import{Y as Mi,j as Te}from"./Octree-CWEoAJ9n.js";import{r as Wi}from"./vec2-maR1OrZI.js";import{v as At,M as Vi,b as $e,B as Bi}from"./lineSegment-qTGwRMUD.js";import{H as ki}from"./InterleavedLayout-BozCYB6I.js";import{n as J,i as Hi,e as Gi,C as Ji,f as at,h as Yi}from"./NormalAttribute.glsl-nzZo9agv.js";import{o as he}from"./AlphaCutoff-UcccL64p.js";import{_ as Zi}from"./preload-helper-ExcqyqRp.js";import{E as st,f as be}from"./enums-D9v74xTE.js";import{B as Ee,g as we,c as ot}from"./renderState-DyydupJ1.js";import{C as qi}from"./computeTranslationToOriginAndRotation-3_VXHsJ9.js";import{n as Xi,e as Qi}from"./ElevationInfo-gCgu2xYa.js";import{u as Ki}from"./hydratedFeatures-BGCPW8pf.js";import"./BindType-BmZEZMMh.js";import{o as p}from"./interfaces-DDtDqZYj.js";import"./floatRGBA-B4gnlSbH.js";import"./Texture-DzKvHVRH.js";import{s as er}from"./vec42-CKs01hkn.js";import"./vec2f64-HfuIyxwA.js";var lt,ct,dt;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(lt||(lt={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(ct||(ct={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(dt||(dt={}));var Ce;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Ce||(Ce={}));let tr=class extends Tt{get geometries(){return this._geometries}get transformation(){return this._transformation??Li}set transformation(e){this._transformation=Be(this._transformation??Re(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Be(this._shaderTransformation??Re(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Je.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Rt),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){wi(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:r}),Ui(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new Qt;for(const i of this._geometries)i.occludees=zi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=Fi(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new Kt(e);for(const r of this._geometries)r.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===$i.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return it(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=Re()){return it(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new pt,this._validateBoundingVolume(this._bvWorldSpace,ue.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new pt,this._validateBoundingVolume(this._bvObjectSpace,ue.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const r=i===ue.ObjectSpace;for(const n of this._geometries){const a=n.boundingInfo;a&&ir(a,e,r?n.transformation:this.getCombinedShaderTransformation(n))}kt(rt(e.bounds),e.min,e.max,.5);for(const n of this._geometries){const a=n.boundingInfo;if(a==null)continue;const l=r?n.transformation:this.getCombinedShaderTransformation(n),o=Ii(l);H(ht,a.center,l);const s=Ge(ht,rt(e.bounds)),c=a.radius*o;e.bounds[3]=Math.max(e.bounds[3],s+c)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class Rt{constructor(){this.min=Me(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Me(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class pt extends Rt{constructor(){super(...arguments),this.bounds=Pi()}}function ir(t,e,i){const r=t.bbMin,n=t.bbMax;if(Di(i)){const a=G(rr,i[12],i[13],i[14]);xe(F,r,a),xe(j,n,a);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],F[l]),e.max[l]=Math.max(e.max[l],j[l])}else if(H(F,r,i),Ht(r,n))for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],F[a]),e.max[a]=Math.max(e.max[a],F[a]);else{H(j,n,i);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],F[a],j[a]),e.max[a]=Math.max(e.max[a],F[a],j[a]);for(let a=0;a<3;++a){X(F,r),X(j,n),F[a]=n[a],j[a]=r[a],H(F,F,i),H(j,j,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],F[l],j[l]),e.max[l]=Math.max(e.max[l],F[l],j[l])}}}const rr=x(),F=x(),j=x(),ht=x();var ue;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(ue||(ue={}));const nr=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let ar=class extends Tt{constructor(e,i,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Je.Layer,this.events=new Ft,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Ze,this._handles=new jt,this._objects=new Ze,this._pickable=!0,this.visible=i?.visible??!0,this._pickable=i?.pickable??!0,this.updatePolicy=i?.updatePolicy??Ce.ASYNC,this._disableOctree=i?.disableOctree??!1,e.add(this);for(const n of nr)this._handles.add(this.events.on(n,a=>e.handleEvent(n,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const r of i)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let r=0;r<i.length;)this._objectsAdded.removeUnordered(i[r])?(i[r]=i[i.length-1],i.length-=1):++r;this._octree.remove(i)}}}sync(){this.updatePolicy!==Ce.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Mi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Mt(this._octree),this._objectsAdded.clear()}},sr=class{constructor(e,i){this.vec3=e,this.id=i}};function ut(t,e,i,r){return new sr(Me(t,e,i),r)}var ie,fe;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(ie||(ie={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(fe||(fe={}));let U=class extends bt{constructor(){super(...arguments),this.space=ie.Screen,this.anchor=fe.Center,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=Et.None,this.emissionSource=Ot.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===ie.Draped}};g([S({count:ie.COUNT})],U.prototype,"space",void 0),g([S({count:fe.COUNT})],U.prototype,"anchor",void 0),g([S()],U.prototype,"occluder",void 0),g([S()],U.prototype,"hasSlicePlane",void 0),g([S()],U.prototype,"writeDepth",void 0),g([S()],U.prototype,"hideOnShortSegments",void 0),g([S()],U.prototype,"hasCap",void 0),g([S()],U.prototype,"hasTip",void 0),g([S()],U.prototype,"vvSize",void 0),g([S()],U.prototype,"vvColor",void 0),g([S()],U.prototype,"vvOpacity",void 0),g([S()],U.prototype,"hasOccludees",void 0),g([S()],U.prototype,"terrainDepthTest",void 0),g([S()],U.prototype,"cullAboveTerrain",void 0);const ft=8;function or(t,e){const i=t.vertex;i.uniforms.add(new M("intrinsicWidth",r=>r.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new Se("vvSizeMinSize",r=>r.vvSize.minSize),new Se("vvSizeMaxSize",r=>r.vvSize.maxSize),new Se("vvSizeOffset",r=>r.vvSize.offset),new Se("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new Xe("vvOpacityValues",r=>r.vvOpacity.values,ft),new Xe("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,ft)),i.code.add(p`float interpolateOpacity( float value ){
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
}`),e.vvColor?(t.include(ei,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function xt(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function lr(t){if(t==null)return 1;const e=xt(t);return Math.floor(e.reduce((i,r)=>i+r))}function cr(t){return xt(t).reduce((e,i)=>Math.max(e,i))}function dr(t){return t==null?Jt:t.length===4?t:er(pr,t[0],t[1],t[2],1)}const pr=Yt();function hr(t,e){e.stippleEnabled?ur(t,e):fr(t)}function ur(t,e){const i=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:n}=t;n.include(ji),e.draped||(ti(r,e),r.uniforms.add(new M("worldToScreenPerDistanceRatio",(a,l)=>1/l.camera.perScreenPixelRatio)),r.code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${vr};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Ye(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new ii("stipplePatternTexture",a=>a.stippleTexture),new M("stipplePatternSDFNormalizer",a=>mr(a.stipplePattern)),new M("stipplePatternPixelSizeInv",a=>1/Ct(a))),n.code.add(p`float getStippleSDF(out bool isClamped) {
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
}`),e.stippleOffColorEnabled?(n.uniforms.add(new Ae("stippleOffColor",a=>dr(a.stippleOffColor))),n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):n.code.add(p`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function fr(t){t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function mr(t){return t?(Math.floor(.5*(cr(t)-1))+.5)/t.pixelRatio:1}function Ct(t){const e=t.stipplePattern;return e?lr(t.stipplePattern)/e.pixelRatio:1}const vr=p.float(.4),Dt=64,gr=Dt/2,Sr=gr/5,_r=Dt/Sr,In=.25;function Tr(t,e){const i=t.vertex;Ye(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",_r).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===ie.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new M("perRenderPixelRatio",(r,n)=>n.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
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
}`))}var re;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(re||(re={}));let O=class extends bt{constructor(){super(...arguments),this.capType=re.BUTT,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=Et.None,this.emissionSource=Ot.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};g([S({count:re.COUNT})],O.prototype,"capType",void 0),g([S()],O.prototype,"hasSlicePlane",void 0),g([S()],O.prototype,"hasPolygonOffset",void 0),g([S()],O.prototype,"writeDepth",void 0),g([S()],O.prototype,"draped",void 0),g([S()],O.prototype,"stippleEnabled",void 0),g([S()],O.prototype,"stippleOffColorEnabled",void 0),g([S()],O.prototype,"stipplePreferContinuous",void 0),g([S()],O.prototype,"roundJoins",void 0),g([S()],O.prototype,"applyMarkerOffset",void 0),g([S()],O.prototype,"vvSize",void 0),g([S()],O.prototype,"vvColor",void 0),g([S()],O.prototype,"vvOpacity",void 0),g([S()],O.prototype,"falloffEnabled",void 0),g([S()],O.prototype,"innerColorEnabled",void 0),g([S()],O.prototype,"hasOccludees",void 0),g([S()],O.prototype,"occluder",void 0),g([S()],O.prototype,"terrainDepthTest",void 0),g([S()],O.prototype,"cullAboveTerrain",void 0),g([S()],O.prototype,"wireframe",void 0),g([S()],O.prototype,"discardInvisibleFragments",void 0),g([S()],O.prototype,"objectAndLayerIdColorInstanced",void 0);const me=1;function Lt(t){const e=new ri,{attributes:i,varyings:r,vertex:n,fragment:a}=e,{applyMarkerOffset:l,draped:o,output:s,capType:c,stippleEnabled:d,falloffEnabled:v,roundJoins:m,wireframe:f,innerColorEnabled:y}=t;e.include(ni),e.include(or,t),e.include(hr,t),e.include(ai,t);const E=l&&!o;E&&(n.uniforms.add(new M("markerScale",_=>_.markerScale)),e.include(Tr,{space:ie.World})),si(n,t),n.uniforms.add(new oi("inverseProjectionMatrix",(_,u)=>u.camera.inverseProjectionMatrix),new li("nearFar",(_,u)=>u.camera.nearFar),new M("miterLimit",_=>_.join!=="miter"?0:_.miterLimit),new Ae("viewport",(_,u)=>u.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const A=t.terrainDepthTest&&s===J.Color;A&&r.add("depth","float");const D=d;D&&r.add("vLineSizeInv","float");const b=c===re.ROUND,N=d&&b,T=v||N;T&&r.add("vLineDistanceNorm","float"),b&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`#define PERPENDICULAR(v) vec2(v.y, -v.x);
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
  `),Ye(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
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
  `),E&&n.main.add(p`vec4 other = isStartVertex ? next : prev;
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
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const P=c!==re.BUTT;return n.main.add(p`
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
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new M("worldToScreenRatio",(_,u)=>1/u.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new M("stipplePatternPixelSize",_=>Ct(_))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
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
    }`),A&&e.include(ci,t),e.include(di,t),e.include(pi,t),a.include(hi),a.main.add(p`
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
      `),N?a.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(he)}, stippleCoverage);
      `):a.main.add(p`float stippleAlpha = getStippleAlpha();`),s!==J.ObjectAndLayerIdColor&&a.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(he)});`),a.uniforms.add(new Ae("intrinsicColor",_=>_.color)),a.main.add(p`vec4 color = intrinsicColor * vColor;`),y&&(a.uniforms.add(new Ae("innerColor",_=>_.innerColor??_.color),new M("innerWidth",(_,u)=>_.innerWidth*u.camera.pixelRatio)),a.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),v&&(a.uniforms.add(new M("falloff",_=>_.falloff)),a.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const br=Object.freeze(Object.defineProperty({__proto__:null,build:Lt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));let Er=class extends ui{constructor(e,i,r){super(e,i,new fi(br,()=>Zi(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url)),r,Pt),this.primitiveType=i.wireframe?st.LINES:st.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:r,output:n,hasOccludees:a,hasPolygonOffset:l}=e,o=r===Qe.NONE,s=r===Qe.FrontFace;return Ee({blending:e.output===J.Color?mi(r):null,depthTest:{func:vi(r)},depthWrite:gi(e),drawBuffers:n===J.Depth?{buffers:[be.NONE]}:Si(r,n),colorWrite:we,stencilWrite:a?Ke:null,stencilTest:a?i?et:_i:null,polygonOffset:o||s?l?mt:null:Ti})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?mt:null;this._occluderPipelineTransparent=Ee({blending:ot,polygonOffset:i,depthTest:tt,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:bi,drawBuffers:e.output===J.Depth?{buffers:[be.NONE]}:null}),this._occluderPipelineOpaque=Ee({blending:ot,polygonOffset:i,depthTest:tt,depthWrite:null,colorWrite:we,stencilWrite:Ei,stencilTest:Oi,drawBuffers:e.output===J.Depth?{buffers:[be.NONE]}:null}),this._occluderPipelineMaskWrite=Ee({blending:null,polygonOffset:i,depthTest:yi,depthWrite:null,colorWrite:null,stencilWrite:Ke,stencilTest:et,drawBuffers:e.output===J.Depth?{buffers:[be.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case k.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case k.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const mt={factor:0,units:-4},Pt=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var z;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(z||(z={}));class Or extends Ai{constructor(e){super(e,Ar),this._configuration=new O,this.vertexAttributeLocations=Pt,this.produces=new Map([[k.OPAQUE_MATERIAL,i=>Hi(i)||Gi(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>Ji(i)],[k.OCCLUDER_MATERIAL,i=>at(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.TRANSPARENT_OCCLUDER_MATERIAL,i=>at(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL,i=>i===J.Color&&this.parameters.writeDepth&&this.parameters.renderOccluded!==ae.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>i===J.Color&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==ae.OccludeAndTransparentStencil],[k.DRAPED_MATERIAL,i=>Yi(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===k.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==J.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&xr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===ae.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=he||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>he}intersectDraped({attributes:e,screenToWorldRatio:i},r,n,a,l,o){if(!n.options.selectionMode)return;const s=e.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const D=e.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+D*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);const d=a[0],v=a[1],m=(c/2+4)*i;let f=Number.MAX_VALUE,y=0;const E=e.get(h.POSITION).data,A=ke(this.parameters,e)?E.length-2:E.length-5;for(let D=0;D<A;D+=3){const b=E[D],N=E[D+1],T=(D+3)%E.length,P=d-b,_=v-N,u=E[T]-b,q=E[T+1]-N,L=Pe((u*P+q*_)/(u*u+q*q),0,1),ne=u*L-P,I=q*L-_,Q=ne*ne+I*I;Q<f&&(f=Q,y=D/3)}f<m*m&&l(o.dist,o.normal,y,!1)}intersect(e,i,r,n,a,l){if(!r.options.selectionMode||!e.visible)return;if(!Ni(i))return void _t.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,s=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Pe(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,v=Cr;Wi(v,r.point);const m=c*d.pixelRatio/2+4*d.pixelRatio;G(de[0],v[0]-m,v[1]+m,0),G(de[1],v[0]+m,v[1]+m,0),G(de[2],v[0]+m,v[1]-m,0),G(de[3],v[0]-m,v[1]-m,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(de[b],Z[b]))return;_e(d.eye,Z[0],Z[1],Ue),_e(d.eye,Z[1],Z[2],ze),_e(d.eye,Z[2],Z[3],Fe),_e(d.eye,Z[3],Z[0],je);let f=Number.MAX_VALUE,y=0;const E=ke(this.parameters,o)?s.length-2:s.length-5;for(let b=0;b<E;b+=3){$[0]=s[b]+i[12],$[1]=s[b+1]+i[13],$[2]=s[b+2]+i[14];const N=(b+3)%s.length;if(w[0]=s[N]+i[12],w[1]=s[N+1]+i[13],w[2]=s[N+2]+i[14],V(Ue,$)<0&&V(Ue,w)<0||V(ze,$)<0&&V(ze,w)<0||V(Fe,$)<0&&V(Fe,w)<0||V(je,$)<0&&V(je,w)<0)continue;if(d.projectToRenderScreen($,ee),d.projectToRenderScreen(w,te),ee[2]<0&&te[2]>0){pe(B,$,w);const P=d.frustum,_=-V(P[Te.NEAR],$)/qe(B,nt(P[Te.NEAR]));Ie(B,B,_),xe($,$,B),d.projectToRenderScreen($,ee)}else if(ee[2]>0&&te[2]<0){pe(B,w,$);const P=d.frustum,_=-V(P[Te.NEAR],w)/qe(B,nt(P[Te.NEAR]));Ie(B,B,_),xe(w,w,B),d.projectToRenderScreen(w,te)}else if(ee[2]<0&&te[2]<0)continue;ee[2]=0,te[2]=0;const T=Vi($e(ee,te,St),v);T<f&&(f=T,X(vt,$),X(gt,w),y=b/3)}const A=r.rayBegin,D=r.rayEnd;if(f<m*m){let b=Number.MAX_VALUE;if(Bi($e(vt,gt,St),$e(A,D,Dr),K)){pe(K,K,A);const N=Gt(K);Ie(K,K,1/N),b=N/Ge(A,D)}l(b,K,y,!1)}}get _layout(){const e=ki().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),Ve()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new Rr(this._layout,this.parameters)}createGLMaterial(e){return new yr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class yr extends Ri{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.acquireTechnique(Er,e)}}class Ar extends xi{constructor(){super(...arguments),this.width=0,this.color=Zt,this.join="miter",this.cap=re.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}}class Rr{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=me+r}}_isClosed(e){return ke(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(h.POSITION).indices.length/2+1,n=this._isClosed(e);let a=n?2:2*2;return a+=((n?r:r-1)-(n?0:1))*(2*this.numJoinSubdivisions+4),a+=2,this._parameters.wireframe&&(a=2+4*(a-2)),a}write(e,i,r,n,a,l){const o=Lr,s=Pr,c=Ir,d=r.get(h.POSITION),v=d.indices,m=d.data.length/3,f=r.get(h.DISTANCETOSTART)?.data;v&&v.length!==2*(m-1)&&console.warn("RibbonLineMaterial does not support indices");const y=r.get(h.SIZEFEATUREATTRIBUTE)?.data[0]??r.get(h.SIZE)?.data[0]??1;let E=[1,1,1,1],A=0;const D=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);D?A=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(E=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),N=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,T=new Float32Array(a.buffer),P=Ve()?new Uint8Array(a.buffer):null,_=this.vertexBufferLayout.stride/4;let u=l*_;const q=u;let L=0;const ne=f?(R,W,Y)=>L=f[Y]:(R,W,Y)=>L+=Ge(R,W),I=(R,W,Y,ce,ve,Ut,zt)=>{if(T[u++]=W[0],T[u++]=W[1],T[u++]=W[2],T[u++]=R[0],T[u++]=R[1],T[u++]=R[2],T[u++]=Y[0],T[u++]=Y[1],T[u++]=Y[2],T[u++]=ce,T[u++]=zt,T[u++]=ve,T[u++]=y,D)T[u++]=A;else{const ge=Math.min(4*Ut,E.length-4);T[u++]=E[ge],T[u++]=E[ge+1],T[u++]=E[ge+2],T[u++]=E[ge+3]}b&&(T[u++]=N),Ve()&&(n&&(P[4*u]=n[0],P[4*u+1]=n[1],P[4*u+2]=n[2],P[4*u+3]=n[3]),u++)};u+=_,G(s,d.data[0],d.data[1],d.data[2]),e&&H(s,s,e);const Q=this._isClosed(r);if(Q){const R=d.data.length-3;G(o,d.data[R],d.data[R+1],d.data[R+2]),e&&H(o,o,e)}else G(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),I(s,s,c,1,z.LEFT_CAP_START,0,0),I(s,s,c,1,z.RIGHT_CAP_START,0,0),X(o,s),X(s,c);const Le=Q?0:1,le=Q?m:m-1;for(let R=Le;R<le;R++){const W=(R+1)%m*3;G(c,d.data[W],d.data[W+1],d.data[W+2]),e&&H(c,c,e),ne(o,s,R),I(o,s,c,0,z.LEFT_JOIN_END,R,L),I(o,s,c,0,z.RIGHT_JOIN_END,R,L);const Y=this.numJoinSubdivisions;for(let ce=0;ce<Y;++ce){const ve=(ce+1)/(Y+1);I(o,s,c,ve,z.LEFT_JOIN_END,R,L),I(o,s,c,ve,z.RIGHT_JOIN_END,R,L)}I(o,s,c,1,z.LEFT_JOIN_START,R,L),I(o,s,c,1,z.RIGHT_JOIN_START,R,L),X(o,s),X(s,c)}Q?(G(c,d.data[3],d.data[4],d.data[5]),e&&H(c,c,e),L=ne(o,s,le),I(o,s,c,0,z.LEFT_JOIN_END,Le,L),I(o,s,c,0,z.RIGHT_JOIN_END,Le,L)):(L=ne(o,s,le),I(o,s,s,0,z.LEFT_CAP_END,le,L),I(o,s,s,0,z.RIGHT_CAP_END,le,L)),Ne(T,q+_,T,q,_),u=Ne(T,u-_,T,u,_),this._parameters.wireframe&&this._addWireframeVertices(a,q,u,_)}_addWireframeVertices(e,i,r,n){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const s=c=>o=Ne(l,c,a,o,n);for(let c=0;c<l.length-1;c+=2*n)s(c),s(c+2*n),s(c+1*n),s(c+2*n),s(c+1*n),s(c+3*n)}}function Ne(t,e,i,r,n){for(let a=0;a<n;a++)i[r++]=t[e++];return r}function ke(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function xr(t){return t.anchor===fe.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const $=x(),w=x(),B=x(),K=x(),Cr=x(),ee=se(),te=se(),vt=x(),gt=x(),St=At(),Dr=At(),Lr=x(),Pr=x(),Ir=x(),de=[se(),se(),se(),se()],Z=[x(),x(),x(),x()],Ue=De(),ze=De(),Fe=De(),je=De();class Nn{constructor(e){this._originSR=e,this._rootOriginId="root/"+Wt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=ut(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(e[0]/r),a=Math.round(e[1]/r),l=Math.round(e[2]/r),o=`${n}/${a}/${l}`;let s=this._origins.get(o);const c=.5*r;if(pe(C,e,i.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<c&&C[1]<c&&C[2]<c){if(s){const d=Math.max(...C);if(pe(C,e,s.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<d)return s}return i}return s||(s=ut(n*r,a*r,l*r,o),this._origins.set(o,s)),s}_drawOriginBox(e,i=qt(1,1,0,1)){const r=window.view,n=r._stage,a=i.toString();if(!this._objects.has(a)){this._material=new Or({width:2,color:i}),n.add(this._material);const f=new ar(n,{pickable:!1}),y=new tr({castShadow:!1});n.add(y),f.add(y),this._objects.set(a,y)}const l=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=new Array(3*s),d=new Array,v=.5*this._gridSize;for(let f=0;f<s;f++)c[3*f]=e[0]+(1&o[f]?v:-v),c[3*f+1]=e[1]+(2&o[f]?v:-v),c[3*f+2]=e[2]+(4&o[f]?v:-v),f>0&&d.push(f-1,f);We(c,this._originSR,0,c,r.renderSpatialReference,0,s);const m=new Ci(this._material,[[h.POSITION,new Xt(c,d,3,!0)]],null,Je.Line);n.add(m),l.addGeometry(m)}get test(){}}const C=x();class Un{constructor(e,i=null,r=0){this.array=e,this.spatialReference=i,this.offset=r}}function It(t){return"array"in t}function Oe(t,e,i="ground"){if(yt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(It(e)){let r=e.offset;return t.getElevation(e.array[r++],e.array[r++],e.array[r]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function zn(t,e,i,r,n,a,l,o,s,c,d){const v=Mr[d.mode];let m,f,y=0;if(We(t,e,i,r,s.spatialReference,n,o))return v?.requiresAlignment(d)?(y=v.applyElevationAlignmentBuffer(r,n,a,l,o,s,c,d),m=a,f=l):(m=r,f=n),We(m,s.spatialReference,f,a,c.spatialReference,l,o)?y:void 0}function $t(t,e,i,r,n){const a=(yt(t)?t.z:It(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=Oe(e,t,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=Oe(e,t,"ground")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=Oe(e,t,"scene")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(a,r),o=Oe(e,t,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function Fn(t,e,i,r){return $t(t,e,i,r,oe),oe.z}function jn(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:He.UPDATE:t.onTheGroundChanged}function Mn(t){return t==="relative-to-ground"||t==="relative-to-scene"}function Wn(t){return t!=="absolute-height"}function Vn(t,e,i,r,n){$t(e,i,n,r,oe),$r(t,oe.verticalDistanceToGround);const a=oe.sampledElevation,l=Be(Wr,t.transformation);return ye[0]=e.x,ye[1]=e.y,ye[2]=oe.z,qi(e.spatialReference,ye,l,r.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function $r(t,e){for(let i=0;i<t.geometries.length;++i){const r=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function wr(t,e,i,r,n,a){let l=0;const o=a.spatialReference;e*=3,r*=3;for(let s=0;s<n;++s){const c=t[e],d=t[e+1],v=t[e+2],m=a.getElevation(c,d,v,o,"ground")??0;l+=m,i[r]=c,i[r+1]=d,i[r+2]=m,e+=3,r+=3}return l/n}function Nr(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;e*=3,r*=3;for(let m=0;m<n;++m){const f=t[e],y=t[e+1],E=t[e+2],A=a.getElevation(f,y,E,v,"ground")??0;s+=A,i[r]=f,i[r+1]=y,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return s/n}function Ur(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;e*=3,r*=3;for(let m=0;m<n;++m){const f=t[e],y=t[e+1],E=t[e+2],A=a.getElevation(f,y,E,v,"scene")??0;s+=A,i[r]=f,i[r+1]=y,i[r+2]=d==null?E+A+c:A+c,e+=3,r+=3}return s/n}function zr(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function Fr(t,e,i,r,n,a,l,o){const s=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,r*=3;for(let d=0;d<n;++d){const v=t[e],m=t[e+1],f=t[e+2];i[r]=v,i[r+1]=m,i[r+2]=c==null?f+s:s,e+=3,r+=3}return 0}class jr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var He;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(He||(He={}));const Mr={"absolute-height":{applyElevationAlignmentBuffer:Fr,requiresAlignment:zr},"on-the-ground":{applyElevationAlignmentBuffer:wr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Nr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Ur,requiresAlignment:()=>!0}},Wr=Re(),oe=new jr,ye=x(),Vr=()=>_t.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Br(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Bn(t,e,i,r){const n=t?.expression;if(typeof n!="string")return null;const a=Jr(n);if(a!=null)return{cachedResult:a};const l=await Vt();Bt(i);const o=l.arcadeUtils,s=o.createSyntaxTree(n);return o.dependsOnView(s)?(r?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(s),context:o.createExecContext(null,{sr:e}),modules:l}}}function kr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function Hr(t,e){if(t!=null&&!wt(t)){if(!e||!t.arcade)return void Vr().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=Ki(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function Gr(t){if(t!=null){if(wt(t))return t.cachedResult;const e=t.arcade;let i=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function kn(t,e=!1){let i=t?.featureExpressionInfo;const r=i?.expression;return e||r==="0"||(i=null),i??null}const Hn={cachedResult:0};function wt(t){return t.cachedResult!=null}function Jr(t){return t==="0"?0:null}class Nt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Xi(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=Gr(r)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=Qi(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,r){if(e==null)return void(this._featureExpressionInfoContext=null);const n=e?.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=Br(e),Hr(this._featureExpressionInfoContext,kr(n.modules,i,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new Nt;return e!=null&&i.setFromElevationInfo(e),i}}const Yr=Object.freeze(Object.defineProperty({__proto__:null,build:Lt,ribbonlineNumRoundJoinSubdivisions:me},Symbol.toStringTag,{value:"Module"}));export{tr as A,In as B,Ce as C,U as D,$r as E,Fn as F,Oe as G,jr as R,Or as W,Nn as _,ct as a,dt as b,Bn as c,kn as d,lt as e,$t as f,Hn as g,He as h,Mn as i,ar as j,Wn as k,Hr as l,jn as m,re as n,Nt as o,Vn as p,ie as q,Un as r,kr as s,ut as t,zn as u,or as v,Tr as w,fe as x,Dt as y,gr as z};
