import{o as z}from"./interfaces-DN2-jsJC.js";import{n as Ce,x as st,l as rt,m as ot}from"./mat4-BlVAwaU2.js";import{e as ze,o as Le}from"./mat4f64-BaJwL7tQ.js";import{u as L,E as ve,g as V,r as at,s as F,A as C,c as U,_ as $,o as le,P as Ee}from"./vec32-CjgofUqd.js";import{cJ as xe,ac as I,d7 as it,i_ as lt,i$ as ct,hM as ut,c3 as ft,d4 as ht,eY as dt,bG as pt,j0 as mt,j1 as gt,j2 as Ot,fl as yt,ax as wt}from"./main-CZM6prq-.js";import{z as vt,s as xt}from"./vec42-D8CJyqHG.js";import{n as At,t as Pt,N as Mt}from"./vec4f64-CjUMzAyX.js";import{b as k,S as Tt,v as Ae,k as bt}from"./sphere-Cnbzjtu_.js";import{l as Ve}from"./ViewingMode-CyR_b1T8.js";import{s as St,e as De,i as se}from"./IntersectorInterfaces-9nlZxCRy.js";import"./boundedPlane-CK0xW2RX.js";import{b as Rt,d as Ge,s as It,a as Nt,f as _t,e as je,o as ce,c as Ct,g as zt,w as Lt,h as Et,i as Vt,j as Dt,t as D,p as G,k as Fe,l as Ue}from"./Geometry-CmH148fq.js";import{t as Gt}from"./doublePrecisionUtils-BJbYwoii.js";import{e as A}from"./VertexAttribute-DFC3a3eR.js";import{$ as jt}from"./projection-BCWa6dVm.js";import{u as Ft}from"./meshVertexSpaceUtils-DgUIT58v.js";import{e as Pe}from"./projectVectorToVector-CNg8UJml.js";import{o as Ut,x as Ht}from"./hydratedFeatures-D8YzxKCl.js";import{r as N,n as j,t as He}from"./vec3f32-BS0cezmI.js";import{A as Be,l as Bt}from"./Indices-DpXlWnGJ.js";import{M as $t,l as Xt,x as kt}from"./plane-DEdld-wW.js";import{t as b}from"./orientedBoundingBox-D0caZ1NH.js";import{s as re}from"./Util-Ca-5gGEH.js";function qt(e){e.code.add(z`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(z`const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`),e.code.add(z`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}let Yt=class{constructor(e,n,s){this.object=e,this.geometryId=n,this.triangleNr=s}},Jt=class extends Yt{constructor(e,n,s,t){super(e,n,s),this.center=t!=null?xe(t):null}};class Wt{constructor(n){this.layerUid=n}}let Zt=class extends Wt{constructor(e,n){super(e),this.graphicUid=n}};function Qt(e){return e?.dist!=null}const $e=1e-5;let Kt=class{constructor(e){this.options=new St,this._results=new tn,this.transform=new Rt,this.tolerance=$e,this.verticalOffset=null,this._ray=k(),this._rayEnd=I(),this._rayBeginTransformed=I(),this._rayEndTransformed=I(),this.viewingMode=e??Ve.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,n,s){this.resetWithRay(Tt(e,n,this._ray),s)}resetWithRay(e,n){this.camera=n,e!==this._ray&&Ae(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===Ve.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,L(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,n,s,t,r){this.point=n,this.filterPredicate=t,this.tolerance=s??$e;const f=Ge(this.verticalOffset);if(e&&e.length>0){const o=r?a=>{r(a)&&this.intersectObject(a)}:a=>{this.intersectObject(a)};for(const a of e){const i=a.getSpatialQueryAccelerator?.();i!=null?(f!=null?i.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,o,f):i.forEachAlongRay(this._ray.origin,this._ray.direction,o),this.options.selectionMode&&this.options.hud&&i.forEachDegenerateObject(o)):a.objects.forAll(l=>o(l))}}this.sortResults()}intersectObject(e){const n=e.geometries;if(!n)return;const s=e.effectiveTransformation,t=Ge(this.verticalOffset);for(const r of n){if(!r.visible)continue;const{material:f,id:o}=r;if(!f.visible)continue;this.transform.setAndInvalidateLazyTransforms(s,r.transformation),ve(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),ve(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const a=this.transform.transform;t!=null&&(t.objectTransform=this.transform),f.intersect(r,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(i,l,c,d,x,P)=>{if(i>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,i))return;const O=d?this._results.hud:this._results,p=d?h=>{const m=new Jt(e,o,c,P);h.set(se.HUD,m,i,l,Le,x)}:h=>h.set(se.OBJECT,{object:e,geometryId:o,triangleNr:c},i,l,a,x);if((O.min.drapedLayerOrder==null||x>=O.min.drapedLayerOrder)&&(O.min.dist==null||i<O.min.dist)&&p(O.min),this.options.store!==De.MIN&&(O.max.drapedLayerOrder==null||x<O.max.drapedLayerOrder)&&(O.max.dist==null||i>O.max.dist)&&p(O.max),this.options.store===De.ALL)if(d){const h=new Me(this._ray);p(h),this._results.hud.all.push(h)}else{const h=new J(this._ray);p(h),this._results.all.push(h)}}})}}sortResults(e=this._results.all){e.sort((n,s)=>n.dist!==s.dist?(n.dist??0)-(s.dist??0):n.drapedLayerOrder!==s.drapedLayerOrder?Xe(n.drapedLayerOrder,s.drapedLayerOrder):Xe(n.drapedLayerGraphicOrder,s.drapedLayerGraphicOrder))}};function Xe(e,n){return(n??-Number.MAX_VALUE)-(e??-Number.MAX_VALUE)}function en(e){return new Kt(e)}let tn=class{constructor(){this.min=new J(k()),this.max=new J(k()),this.hud={min:new Me(k()),max:new Me(k()),all:new Array},this.ground=new J(k()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}},J=class{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(V(ue,this.ray.direction,this.dist),at(ue)):null}getIntersectionPoint(e){return!!Qt(this)&&(V(ue,this.ray.direction,this.dist),L(e,this.ray.origin,ue),!0)}getTransformedNormal(e){return F(oe,this.normal),oe[3]=0,vt(oe,oe,this.transformation),F(e,oe),C(e,e)}constructor(e){this.intersector=se.OBJECT,this.normal=I(),this.transformation=ze(),this._ray=k(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=se.OBJECT,Ae(e,this._ray)}set(e,n,s,t,r,f,o){this.intersector=e,this.dist=s,F(this.normal,t??it),Ce(this.transformation,r??Le),this.target=n,this.drapedLayerOrder=f,this.drapedLayerGraphicOrder=o}copy(e){Ae(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,F(this.normal,e.normal),Ce(this.transformation,e.transformation)}},Me=class extends J{constructor(){super(...arguments),this.intersector=se.HUD}};function nn(e){return new J(e)}const ue=I(),oe=At();function sn(e,n){return e==null&&(e=[]),e.push(n),e}function rn(e,n){if(e==null)return null;const s=e.filter(t=>t!==n);return s.length===0?null:s}function on(e,n,s,t,r){fe[0]=e.get(n,0),fe[1]=e.get(n,1),fe[2]=e.get(n,2),Gt(fe,q,3),s.set(r,0,q[0]),t.set(r,0,q[1]),s.set(r,1,q[2]),t.set(r,1,q[3]),s.set(r,2,q[4]),t.set(r,2,q[5])}const fe=I(),q=new Float32Array(6),ke=.5;function an(e,n){e.include(It),e.attributes.add(A.POSITION,"vec3"),e.attributes.add(A.NORMAL,"vec3"),e.attributes.add(A.CENTEROFFSETANDDISTANCE,"vec4");const s=e.vertex;Nt(s,n),_t(s,n),s.uniforms.add(new je("viewport",(t,r)=>r.camera.fullViewport),new ce("polygonOffset",t=>t.shaderPolygonOffset),new ce("cameraGroundRelative",(t,r)=>r.camera.aboveGround?1:-1)),n.hasVerticalOffset&&Ct(s),s.constants.add("smallOffsetAngle","float",.984807753012208),s.code.add(z`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),s.code.add(z`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?z.float(0):z`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||zt(s),n.draped||(s.uniforms.add(new ce("perDistancePixelRatio",(t,r)=>Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2))),s.code.add(z`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${z.float(ke)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&Lt(s),n.hasScreenSizePerspective&&Et(s),s.code.add(z`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?z`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":z`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function qe(e){e.uniforms.add(new Vt("alignPixelEnabled",(n,s)=>s.alignPixelEnabled)),e.code.add(z`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(z`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var ae;(function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"})(ae||(ae={}));function ln(e){e.vertex.uniforms.add(new ce("renderTransparentlyOccludedHUD",(n,s)=>s.hudRenderStyle===ae.Occluded?1:s.hudRenderStyle===ae.NotOccluded?0:.75),new je("viewport",(n,s)=>s.camera.fullViewport),new Dt("hudVisibilityTexture",(n,s)=>s.hudVisibility?.getTexture())),e.vertex.include(qe),e.vertex.code.add(z`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function cn(e,n){if(e.type==="point")return X(e,n,!1);if(Ut(e))switch(e.type){case"extent":return X(e.center,n,!1);case"polygon":return X(e.centroid,n,!1);case"polyline":return X(Ye(e),n,!0);case"mesh":return X(Ft(e.vertexSpace,e.spatialReference)??e.extent.center,n,!1);case"multipoint":return}else switch(e.type){case"extent":return X(un(e),n,!0);case"polygon":return X(fn(e),n,!0);case"polyline":return X(Ye(e),n,!0);case"multipoint":return}}function Ye(e){const n=e.paths[0];if(!n||n.length===0)return null;const s=lt(n,ct(n)/2);return Pe(s[0],s[1],s[2],e.spatialReference)}function un(e){return Pe(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function fn(e){const n=e.rings[0];if(!n||n.length===0)return null;const s=ut(e.rings,!!e.hasZ);return Pe(s[0],s[1],s[2],e.spatialReference)}function X(e,n,s){const t=s?e:Ht(e);return n&&e?jt(e,t,n)?t:null:t}function hn(e,n,s,t=0){if(e){n||(n=ft());const r=e;let f=.5*r.width*(s-1),o=.5*r.height*(s-1);return r.width<1e-7*r.height?f+=o/20:r.height<1e-7*r.width&&(o+=f/20),xt(n,r.xmin-f-t,r.ymin-o-t,r.xmax+f+t,r.ymax+o+t),n}return null}function dn(e,n,s=null){const t=Pt(Mt);return e!=null&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),n!=null?t[3]=n:e!=null&&e.length>3&&(t[3]=e[3]),s&&(t[0]*=s,t[1]*=s,t[2]*=s,t[3]*=s),t}function pn(e=dt,n,s,t=1){const r=new Array(3);if(n==null||s==null)r[0]=1,r[1]=1,r[2]=1;else{let f,o=0;for(let a=2;a>=0;a--){const i=e[a];let l;const c=i!=null,d=a===0&&!f&&!c,x=s[a];i==="symbol-value"||d?l=x!==0?n[a]/x:1:c&&i!=="proportional"&&isFinite(i)&&(l=x!==0?i/x:1),l!=null&&(r[a]=l,f=l,o=Math.max(o,Math.abs(l)))}for(let a=2;a>=0;a--)r[a]==null?r[a]=f:r[a]===0&&(r[a]=.001*o)}for(let f=2;f>=0;f--)r[f]/=t;return ht(r)}function mn(e){return e.isPrimitive!=null}function gn(e){return Je(mn(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function Je(e){const n=s=>s==null||s>=0;return Array.isArray(e)?e.every(n):n(e)}function On(e,n,s,t=ze()){return e&&st(t,t,-e/180*Math.PI),n&&rt(t,t,n/180*Math.PI),s&&ot(t,t,s/180*Math.PI),t}function yn(e,n,s){if(s.minDemResolution!=null)return s.minDemResolution;const t=pt(n),r=mt(e)*t,f=gt(e)*t,o=Ot(e)*(n.isGeographic?1:t);return r===0&&f===0&&o===0?s.minDemResolutionForPoints:.01*Math.max(r,f,o)}var Te;(function(e){function n(o,a){const i=o[a],l=o[a+1],c=o[a+2];return Math.sqrt(i*i+l*l+c*c)}function s(o,a){const i=o[a],l=o[a+1],c=o[a+2],d=1/Math.sqrt(i*i+l*l+c*c);o[a]*=d,o[a+1]*=d,o[a+2]*=d}function t(o,a,i){o[a]*=i,o[a+1]*=i,o[a+2]*=i}function r(o,a,i,l,c,d=a){(c=c||o)[d]=o[a]+i[l],c[d+1]=o[a+1]+i[l+1],c[d+2]=o[a+2]+i[l+2]}function f(o,a,i,l,c,d=a){(c=c||o)[d]=o[a]-i[l],c[d+1]=o[a+1]-i[l+1],c[d+2]=o[a+2]-i[l+2]}e.length=n,e.normalize=s,e.scale=t,e.add=r,e.subtract=f})(Te||(Te={}));const W=Te,be=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],wn=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],vn=[0,0,1,0,1,1,0,1],xn=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],We=new Array(36);for(let e=0;e<6;e++)for(let n=0;n<6;n++)We[6*e+n]=e;const Y=new Array(36);for(let e=0;e<6;e++)Y[6*e]=0,Y[6*e+1]=1,Y[6*e+2]=2,Y[6*e+3]=2,Y[6*e+4]=3,Y[6*e+5]=0;function An(e,n){Array.isArray(n)||(n=[n,n,n]);const s=new Array(24);for(let t=0;t<8;t++)s[3*t]=be[t][0]*n[0],s[3*t+1]=be[t][1]*n[1],s[3*t+2]=be[t][2]*n[2];return new G(e,[[A.POSITION,new b(s,xn,3,!0)],[A.NORMAL,new b(wn,We,3)],[A.UV0,new b(vn,Y,2)]])}const Se=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Pn=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Mn=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Tn=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function bn(e,n){Array.isArray(n)||(n=[n,n,n]);const s=new Array(18);for(let t=0;t<6;t++)s[3*t]=Se[t][0]*n[0],s[3*t+1]=Se[t][1]*n[1],s[3*t+2]=Se[t][2]*n[2];return new G(e,[[A.POSITION,new b(s,Mn,3,!0)],[A.NORMAL,new b(Pn,Tn,3)]])}const he=N(-.5,0,-.5),de=N(.5,0,-.5),pe=N(0,0,.5),me=N(0,.5,0),Z=j(),Q=j(),K=j(),ee=j(),te=j();U(Z,he,me),U(Q,he,de),$(K,Z,Q),C(K,K),U(Z,de,me),U(Q,de,pe),$(ee,Z,Q),C(ee,ee),U(Z,pe,me),U(Q,pe,he),$(te,Z,Q),C(te,te);const Re=[he,de,pe,me],Sn=[0,-1,0,K[0],K[1],K[2],ee[0],ee[1],ee[2],te[0],te[1],te[2]],Rn=[0,1,2,3,1,0,3,2,1,3,0,2],In=[0,0,0,1,1,1,2,2,2,3,3,3];function Nn(e,n){Array.isArray(n)||(n=[n,n,n]);const s=new Array(12);for(let t=0;t<4;t++)s[3*t]=Re[t][0]*n[0],s[3*t+1]=Re[t][1]*n[1],s[3*t+2]=Re[t][2]*n[2];return new G(e,[[A.POSITION,new b(s,Rn,3,!0)],[A.NORMAL,new b(Sn,In,3)]])}function _n(e,n,s,t,r={uv:!0}){const f=-Math.PI,o=2*Math.PI,a=-Math.PI/2,i=Math.PI,l=Math.max(3,Math.floor(s)),c=Math.max(2,Math.floor(t)),d=(l+1)*(c+1),x=D(3*d),P=D(3*d),O=D(2*d),p=[];let h=0;for(let y=0;y<=c;y++){const R=[],u=y/c,M=a+u*i,T=Math.cos(M);for(let _=0;_<=l;_++){const H=_/l,w=f+H*o,E=Math.cos(w)*T,S=Math.sin(M),ie=-Math.sin(w)*T;x[3*h]=E*n,x[3*h+1]=S*n,x[3*h+2]=ie*n,P[3*h]=E,P[3*h+1]=S,P[3*h+2]=ie,O[2*h]=H,O[2*h+1]=u,R.push(h),++h}p.push(R)}const m=new Array;for(let y=0;y<c;y++)for(let R=0;R<l;R++){const u=p[y][R],M=p[y][R+1],T=p[y+1][R+1],_=p[y+1][R];y===0?(m.push(u),m.push(T),m.push(_)):y===c-1?(m.push(u),m.push(M),m.push(T)):(m.push(u),m.push(M),m.push(T),m.push(T),m.push(_),m.push(u))}const g=[[A.POSITION,new b(x,m,3,!0)],[A.NORMAL,new b(P,m,3,!0)]];return r.uv&&g.push([A.UV0,new b(O,m,2,!0)]),r.offset&&(g[0][0]=A.OFFSET,g.push([A.POSITION,new b(Float64Array.from(r.offset),Be(m.length),3,!0)])),new G(e,g)}function Cn(e,n,s,t){const r=zn(n,s);return new G(e,r)}function zn(e,n,s){let t,r;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let i=0;i<t.length;i+=3)W.scale(t,i,e/W.length(t,i));let f={};function o(i,l){i>l&&([i,l]=[l,i]);const c=i.toString()+"."+l.toString();if(f[c])return f[c];let d=t.length;return t.length+=3,W.add(t,3*i,t,3*l,t,d),W.scale(t,d,e/W.length(t,d)),d/=3,f[c]=d,d}for(let i=0;i<n;i++){const l=r.length,c=new Array(4*l);for(let d=0;d<l;d+=3){const x=r[d],P=r[d+1],O=r[d+2],p=o(x,P),h=o(P,O),m=o(O,x),g=4*d;c[g]=x,c[g+1]=p,c[g+2]=m,c[g+3]=P,c[g+4]=h,c[g+5]=p,c[g+6]=O,c[g+7]=m,c[g+8]=h,c[g+9]=p,c[g+10]=h,c[g+11]=m}r=c,f={}}const a=Ue(t);for(let i=0;i<a.length;i+=3)W.normalize(a,i);return[[A.POSITION,new b(Ue(t),r,3,!0)],[A.NORMAL,new b(a,r,3,!0)]]}function Ln(e,n,s,t,r,f,o,a,i,l=null){const c=s?xe(s):I(),d=n?xe(n):wt(0,0,1),x=t?[255*t[0],255*t[1],255*t[2],t.length>3?255*t[3]:255]:[255,255,255,255],P=f!=null&&f.length===2?f:[1,1],O=r!=null?[r]:[0],p=Be(1),h=[[A.POSITION,new b(c,p,3,!0)],[A.NORMAL,new b(d,p,3,!0)],[A.COLOR,new b(x,p,4,!0)],[A.SIZE,new b(P,p,2)],[A.ROTATION,new b(O,p,1,!0)]];if(a&&h.push([A.UV0,new b(a,p,a.length)]),o!=null&&(o=[o[0],o[1],o[2],o[3]],h.push([A.CENTEROFFSETANDDISTANCE,new b(o,p,4)])),i){const m=[i[0],i[1],i[2],i[3]];h.push([A.FEATUREATTRIBUTE,new b(m,p,4)])}return new G(e,h,null,Fe.Point,l)}function Ze(e,n,s,t,r=!0,f=!0){let o=0;const a=n,i=e;let l=N(0,o,0),c=N(0,o+i,0),d=N(0,-1,0),x=N(0,1,0);t&&(o=i,c=N(0,0,0),l=N(0,o,0),d=N(0,1,0),x=N(0,-1,0));const P=[c,l],O=[d,x],p=s+2,h=Math.sqrt(i*i+a*a);if(t)for(let u=s-1;u>=0;u--){const M=u*(2*Math.PI/s),T=N(Math.cos(M)*a,o,Math.sin(M)*a);P.push(T);const _=N(i*Math.cos(M)/h,-a/h,i*Math.sin(M)/h);O.push(_)}else for(let u=0;u<s;u++){const M=u*(2*Math.PI/s),T=N(Math.cos(M)*a,o,Math.sin(M)*a);P.push(T);const _=N(i*Math.cos(M)/h,a/h,i*Math.sin(M)/h);O.push(_)}const m=new Array,g=new Array;if(r){for(let u=3;u<P.length;u++)m.push(1),m.push(u-1),m.push(u),g.push(0),g.push(0),g.push(0);m.push(P.length-1),m.push(2),m.push(1),g.push(0),g.push(0),g.push(0)}if(f){for(let u=3;u<P.length;u++)m.push(u),m.push(u-1),m.push(0),g.push(u),g.push(u-1),g.push(1);m.push(0),m.push(2),m.push(P.length-1),g.push(1),g.push(2),g.push(O.length-1)}const y=D(3*p);for(let u=0;u<p;u++)y[3*u]=P[u][0],y[3*u+1]=P[u][1],y[3*u+2]=P[u][2];const R=D(3*p);for(let u=0;u<p;u++)R[3*u]=O[u][0],R[3*u+1]=O[u][1],R[3*u+2]=O[u][2];return[[A.POSITION,new b(y,m,3,!0)],[A.NORMAL,new b(R,g,3,!0)]]}function En(e,n,s,t,r,f=!0,o=!0){return new G(e,Ze(n,s,t,r,f,o))}function Vn(e,n,s,t,r,f,o){const a=r?He(r):N(1,0,0),i=f?He(f):N(0,0,0);o??=!0;const l=j();C(l,a);const c=j();V(c,l,Math.abs(n));const d=j();V(d,c,-.5),L(d,d,i);const x=N(0,1,0);Math.abs(1-Ee(l,x))<.2&&le(x,0,0,1);const P=j();$(P,l,x),C(P,P),$(x,P,l);const O=2*t+(o?2:0),p=t+(o?2:0),h=D(3*O),m=D(3*p),g=D(2*O),y=new Array(3*t*(o?4:2)),R=new Array(3*t*(o?4:2));o&&(h[3*(O-2)]=d[0],h[3*(O-2)+1]=d[1],h[3*(O-2)+2]=d[2],g[2*(O-2)]=0,g[2*(O-2)+1]=0,h[3*(O-1)]=h[3*(O-2)]+c[0],h[3*(O-1)+1]=h[3*(O-2)+1]+c[1],h[3*(O-1)+2]=h[3*(O-2)+2]+c[2],g[2*(O-1)]=1,g[2*(O-1)+1]=1,m[3*(p-2)]=-l[0],m[3*(p-2)+1]=-l[1],m[3*(p-2)+2]=-l[2],m[3*(p-1)]=l[0],m[3*(p-1)+1]=l[1],m[3*(p-1)+2]=l[2]);const u=(w,E,S)=>{y[w]=E,R[w]=S};let M=0;const T=j(),_=j();for(let w=0;w<t;w++){const E=w*(2*Math.PI/t);V(T,x,Math.sin(E)),V(_,P,Math.cos(E)),L(T,T,_),m[3*w]=T[0],m[3*w+1]=T[1],m[3*w+2]=T[2],V(T,T,s),L(T,T,d),h[3*w]=T[0],h[3*w+1]=T[1],h[3*w+2]=T[2],g[2*w]=w/t,g[2*w+1]=0,h[3*(w+t)]=h[3*w]+c[0],h[3*(w+t)+1]=h[3*w+1]+c[1],h[3*(w+t)+2]=h[3*w+2]+c[2],g[2*(w+t)]=w/t,g[2*w+1]=1;const S=(w+1)%t;u(M++,w,w),u(M++,w+t,w),u(M++,S,S),u(M++,S,S),u(M++,w+t,w),u(M++,S+t,S)}if(o){for(let w=0;w<t;w++){const E=(w+1)%t;u(M++,O-2,p-2),u(M++,w,p-2),u(M++,E,p-2)}for(let w=0;w<t;w++){const E=(w+1)%t;u(M++,w+t,p-1),u(M++,O-1,p-1),u(M++,E+t,p-1)}}const H=[[A.POSITION,new b(h,y,3,!0)],[A.NORMAL,new b(m,R,3,!0)],[A.UV0,new b(g,y,2,!0)]];return new G(e,H)}function Dn(e,n,s,t,r,f){t=t||10,r=r==null||r,re(n.length>1);const o=[[0,0,0]],a=[],i=[];for(let l=0;l<t;l++){a.push([0,-l-1,-(l+1)%t-1]);const c=l/t*2*Math.PI;i.push([Math.cos(c)*s,Math.sin(c)*s])}return Qe(e,i,n,o,a,r,f)}function Qe(e,n,s,t,r,f,o=N(0,0,0)){const a=n.length,i=D(s.length*a*3+(6*t.length||0)),l=D(s.length*a*3+(t?6:0)),c=new Array,d=new Array;let x=0,P=0;const O=I(),p=I(),h=I(),m=I(),g=I(),y=I(),R=I(),u=I(),M=I(),T=I(),_=I(),H=I(),w=I(),E=$t();le(M,0,1,0),U(p,s[1],s[0]),C(p,p),f?(L(u,s[0],o),C(h,u)):le(h,0,0,1),Ne(p,h,M,M,g,h,Ke),F(m,h),F(H,g);for(let v=0;v<t.length;v++)V(y,g,t[v][0]),V(u,h,t[v][2]),L(y,y,u),L(y,y,s[0]),i[x++]=y[0],i[x++]=y[1],i[x++]=y[2];l[P++]=-p[0],l[P++]=-p[1],l[P++]=-p[2];for(let v=0;v<r.length;v++)c.push(r[v][0]>0?r[v][0]:-r[v][0]-1+t.length),c.push(r[v][1]>0?r[v][1]:-r[v][1]-1+t.length),c.push(r[v][2]>0?r[v][2]:-r[v][2]-1+t.length),d.push(0),d.push(0),d.push(0);let S=t.length;const ie=t.length-1;for(let v=0;v<s.length;v++){let _e=!1;v>0&&(F(O,p),v<s.length-1?(U(p,s[v+1],s[v]),C(p,p)):_e=!0,L(T,O,p),C(T,T),L(_,s[v-1],m),Xt(s[v],T,E),kt(E,bt(_,O),u)?(U(u,u,s[v]),C(h,u),$(g,T,h),C(g,g)):Ne(T,m,H,M,g,h,Ke),F(m,h),F(H,g)),f&&(L(u,s[v],o),C(w,u));for(let B=0;B<a;B++)if(V(y,g,n[B][0]),V(u,h,n[B][1]),L(y,y,u),C(R,y),l[P++]=R[0],l[P++]=R[1],l[P++]=R[2],L(y,y,s[v]),i[x++]=y[0],i[x++]=y[1],i[x++]=y[2],!_e){const ye=(B+1)%a;c.push(S+B),c.push(S+a+B),c.push(S+ye),c.push(S+ye),c.push(S+a+B),c.push(S+a+ye);for(let we=0;we<6;we++){const nt=c.length-6;d.push(c[nt+we]-ie)}}S+=a}const et=s[s.length-1];for(let v=0;v<t.length;v++)V(y,g,t[v][0]),V(u,h,t[v][1]),L(y,y,u),L(y,y,et),i[x++]=y[0],i[x++]=y[1],i[x++]=y[2];const ge=P/3;l[P++]=p[0],l[P++]=p[1],l[P++]=p[2];const Oe=S-a;for(let v=0;v<r.length;v++)c.push(r[v][0]>=0?S+r[v][0]:-r[v][0]-1+Oe),c.push(r[v][2]>=0?S+r[v][2]:-r[v][2]-1+Oe),c.push(r[v][1]>=0?S+r[v][1]:-r[v][1]-1+Oe),d.push(ge),d.push(ge),d.push(ge);const tt=[[A.POSITION,new b(i,c,3,!0)],[A.NORMAL,new b(l,d,3,!0)]];return new G(e,tt)}function Gn(e,n,s,t){re(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),re(n[0].length===3,"createPolylineGeometry(): malformed vertex"),re(s==null||s.length===n.length,"createPolylineGeometry: need same number of points and normals"),re(s==null||s[0].length===3,"createPolylineGeometry(): malformed normal");const r=yt(3*n.length),f=new Array(2*(n.length-1));let o=0,a=0;for(let l=0;l<n.length;l++){for(let c=0;c<3;c++)r[o++]=n[l][c];l>0&&(f[a++]=l-1,f[a++]=l)}const i=[[A.POSITION,new b(r,f,3,!0)]];if(s){const l=D(3*s.length);let c=0;for(let d=0;d<n.length;d++)for(let x=0;x<3;x++)l[c++]=s[d][x];i.push([A.NORMAL,new b(l,f,3,!0)])}return t&&i.push([A.COLOR,new b(t,Bt(t.length/4),4)]),new G(e,i,null,Fe.Line)}function jn(e,n,s,t,r,f=0){const o=new Array(18),a=[[-s,f,r/2],[t,f,r/2],[0,n+f,r/2],[-s,f,-r/2],[t,f,-r/2],[0,n+f,-r/2]],i=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let l=0;l<6;l++)o[3*l]=a[l][0],o[3*l+1]=a[l][1],o[3*l+2]=a[l][2];return new G(e,[[A.POSITION,new b(o,i,3,!0)]])}function Fn(e,n){const s=e.getMutableAttribute(A.POSITION).data;for(let t=0;t<s.length;t+=3){const r=s[t],f=s[t+1],o=s[t+2];le(ne,r,f,o),ve(ne,ne,n),s[t]=ne[0],s[t+1]=ne[1],s[t+2]=ne[2]}}function Un(e,n=e){const s=e.attributes,t=s.get(A.POSITION).data,r=s.get(A.NORMAL).data;if(r){const f=n.getMutableAttribute(A.NORMAL).data;for(let o=0;o<r.length;o+=3){const a=r[o+1];f[o+1]=-r[o+2],f[o+2]=a}}if(t){const f=n.getMutableAttribute(A.POSITION).data;for(let o=0;o<t.length;o+=3){const a=t[o+1];f[o+1]=-t[o+2],f[o+2]=a}}}function Ie(e,n,s,t,r){return!(Math.abs(Ee(n,e))>r)&&($(s,e,n),C(s,s),$(t,s,e),C(t,t),!0)}function Ne(e,n,s,t,r,f,o){return Ie(e,n,r,f,o)||Ie(e,s,r,f,o)||Ie(e,t,r,f,o)}const Ke=.99619469809,ne=I();function Hn(e){return e.type==="point"}export{dn as A,Qe as B,An as C,pn as D,yn as E,nn as G,Fn as O,hn as S,en as T,gn as U,Je as Z,ae as a,qe as b,Ze as c,an as d,ln as e,qt as f,Nn as g,Vn as h,En as i,cn as j,bn as k,on as l,Un as m,sn as n,Zt as o,ke as p,Ln as q,rn as r,Cn as s,Hn as t,On as u,Ne as v,Gn as w,_n as x,jn as y,Dn as z};
