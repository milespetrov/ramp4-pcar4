import{o as E}from"./interfaces-DDtDqZYj.js";import{n as Ne,x as Qe,l as Ke,m as et}from"./mat4-B1QDXeUd.js";import{e as je,o as He}from"./mat4f64-Dk4dwAN8.js";import{u as C,E as Pe,g as L,r as tt,s as G,A as _,c as F,_ as k,o as pe,P as Be}from"./vec32-D8MUmfTD.js";import{cM as Me,ae as I,da as nt,j2 as st,j3 as rt,hP as ot,c6 as it,d7 as at,e$ as lt,bI as ct,j4 as ut,j5 as ht,j6 as ft,fo as dt,az as pt}from"./main-DvRWqUGe.js";import{z as mt,s as gt}from"./vec42-CKs01hkn.js";import{n as Ot,t as yt,N as vt}from"./vec4f64-o2zAXfmz.js";import{b as Z,S as wt,v as be,k as xt}from"./sphere-BYPkfaOf.js";import{l as _e}from"./ViewingMode-HRfKv6NR.js";import{s as At,e as Ce,i as oe}from"./IntersectorInterfaces-BgX4KEwK.js";import"./boundedPlane-DgMprssk.js";import{b as $t,d as Ee,s as Pt,a as Mt,f as bt,e as ke,o as ce,c as Tt,g as St,w as It,h as Rt,i as Nt,j as _t,t as D,p as U,k as Xe,l as ze}from"./Geometry-CrpBYtyC.js";import{t as Ct}from"./doublePrecisionUtils-B0owpBza.js";import{e as A}from"./VertexAttribute-Cq4MnHjR.js";import{$ as Et}from"./projection-CMnvYCjG.js";import{u as zt}from"./meshVertexSpaceUtils-BJsSIylK.js";import{e as Ie}from"./projectVectorToVector-Cd21uSYk.js";import{o as Lt,x as Vt}from"./hydratedFeatures-BGCPW8pf.js";import{r as R,n as V,t as Le}from"./vec3f32-nZdmKIgz.js";import{A as qe,l as Dt}from"./Indices-DaVQELjc.js";import{M as Ut,l as Ft,x as Gt}from"./plane-CRVt_F3l.js";import{t as b}from"./orientedBoundingBox-ivxg4jAM.js";import{s as re}from"./Util-BsUeN7uz.js";function Ln(t){t.code.add(E`const float MAX_RGBA_FLOAT =
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
}`),t.code.add(E`const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`),t.code.add(E`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}let jt=class{constructor(e,s,n){this.object=e,this.geometryId=s,this.triangleNr=n}},Ht=class extends jt{constructor(e,s,n,r){super(e,s,n),this.center=r!=null?Me(r):null}};class Bt{constructor(e){this.layerUid=e}}let Un=class extends Bt{constructor(e,s){super(e),this.graphicUid=s}};function kt(t){return t?.dist!=null}const Ve=1e-5;let Xt=class{constructor(e){this.options=new At,this._results=new qt,this.transform=new $t,this.tolerance=Ve,this.verticalOffset=null,this._ray=Z(),this._rayEnd=I(),this._rayBeginTransformed=I(),this._rayEndTransformed=I(),this.viewingMode=e??_e.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,s,n){this.resetWithRay(wt(e,s,this._ray),n)}resetWithRay(e,s){this.camera=s,e!==this._ray&&be(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===_e.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,C(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,s,n,r,u){this.point=s,this.filterPredicate=r,this.tolerance=n??Ve;const o=Ee(this.verticalOffset);if(e&&e.length>0){const a=u?l=>{u(l)&&this.intersectObject(l)}:l=>{this.intersectObject(l)};for(const l of e){const i=l.getSpatialQueryAccelerator?.();i!=null?(o!=null?i.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,a,o):i.forEachAlongRay(this._ray.origin,this._ray.direction,a),this.options.selectionMode&&this.options.hud&&i.forEachDegenerateObject(a)):l.objects.forAll(c=>a(c))}}this.sortResults()}intersectObject(e){const s=e.geometries;if(!s)return;const n=e.effectiveTransformation,r=Ee(this.verticalOffset);for(const u of s){if(!u.visible)continue;const{material:o,id:a}=u;if(!o.visible)continue;this.transform.setAndInvalidateLazyTransforms(n,u.transformation),Pe(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),Pe(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const l=this.transform.transform;r!=null&&(r.objectTransform=this.transform),o.intersect(u,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(i,c,m,w,x,$)=>{if(i>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,i))return;const f=w?this._results.hud:this._results,d=w?p=>{const g=new Ht(e,a,m,$);p.set(oe.HUD,g,i,c,He,x)}:p=>p.set(oe.OBJECT,{object:e,geometryId:a,triangleNr:m},i,c,l,x);if((f.min.drapedLayerOrder==null||x>=f.min.drapedLayerOrder)&&(f.min.dist==null||i<f.min.dist)&&d(f.min),this.options.store!==Ce.MIN&&(f.max.drapedLayerOrder==null||x<f.max.drapedLayerOrder)&&(f.max.dist==null||i>f.max.dist)&&d(f.max),this.options.store===Ce.ALL)if(w){const p=new Te(this._ray);d(p),this._results.hud.all.push(p)}else{const p=new K(this._ray);d(p),this._results.all.push(p)}}})}}sortResults(e=this._results.all){e.sort((s,n)=>s.dist!==n.dist?(s.dist??0)-(n.dist??0):s.drapedLayerOrder!==n.drapedLayerOrder?De(s.drapedLayerOrder,n.drapedLayerOrder):De(s.drapedLayerGraphicOrder,n.drapedLayerGraphicOrder))}};function De(t,e){return(e??-Number.MAX_VALUE)-(t??-Number.MAX_VALUE)}function jn(t){return new Xt(t)}let qt=class{constructor(){this.min=new K(Z()),this.max=new K(Z()),this.hud={min:new Te(Z()),max:new Te(Z()),all:new Array},this.ground=new K(Z()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}},K=class{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(L(ae,this.ray.direction,this.dist),tt(ae)):null}getIntersectionPoint(e){return!!kt(this)&&(L(ae,this.ray.direction,this.dist),C(e,this.ray.origin,ae),!0)}getTransformedNormal(e){return G(se,this.normal),se[3]=0,mt(se,se,this.transformation),G(e,se),_(e,e)}constructor(e){this.intersector=oe.OBJECT,this.normal=I(),this.transformation=je(),this._ray=Z(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=oe.OBJECT,be(e,this._ray)}set(e,s,n,r,u,o,a){this.intersector=e,this.dist=n,G(this.normal,r??nt),Ne(this.transformation,u??He),this.target=s,this.drapedLayerOrder=o,this.drapedLayerGraphicOrder=a}copy(e){be(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,G(this.normal,e.normal),Ne(this.transformation,e.transformation)}},Te=class extends K{constructor(){super(...arguments),this.intersector=oe.HUD}};function Xn(t){return new K(t)}const ae=I(),se=Ot();function qn(t,e){return t==null&&(t=[]),t.push(e),t}function Zn(t,e){if(t==null)return null;const s=t.filter(n=>n!==e);return s.length===0?null:s}function Jn(t,e,s,n,r){le[0]=t.get(e,0),le[1]=t.get(e,1),le[2]=t.get(e,2),Ct(le,X,3),s.set(r,0,X[0]),n.set(r,0,X[1]),s.set(r,1,X[2]),n.set(r,1,X[3]),s.set(r,2,X[4]),n.set(r,2,X[5])}const le=I(),X=new Float32Array(6),Zt=.5;function Wn(t,e){t.include(Pt),t.attributes.add(A.POSITION,"vec3"),t.attributes.add(A.NORMAL,"vec3"),t.attributes.add(A.CENTEROFFSETANDDISTANCE,"vec4");const s=t.vertex;Mt(s,e),bt(s,e),s.uniforms.add(new ke("viewport",(n,r)=>r.camera.fullViewport),new ce("polygonOffset",n=>n.shaderPolygonOffset),new ce("cameraGroundRelative",(n,r)=>r.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Tt(s),s.constants.add("smallOffsetAngle","float",.984807753012208),s.code.add(E`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),s.code.add(E`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?E.float(0):E`sign(pointGroundDistance)`};
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
  `),e.draped&&!e.hasVerticalOffset||St(s),e.draped||(s.uniforms.add(new ce("perDistancePixelRatio",(n,r)=>Math.tan(r.camera.fovY/2)/(r.camera.fullViewport[2]/2))),s.code.add(E`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${E.float(Zt)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&It(s),e.hasScreenSizePerspective&&Rt(s),s.code.add(E`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?E`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":E`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Jt(t){t.uniforms.add(new Nt("alignPixelEnabled",(e,s)=>s.alignPixelEnabled)),t.code.add(E`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(E`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var me;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(me||(me={}));function Yn(t){t.vertex.uniforms.add(new ce("renderTransparentlyOccludedHUD",(e,s)=>s.hudRenderStyle===me.Occluded?1:s.hudRenderStyle===me.NotOccluded?0:.75),new ke("viewport",(e,s)=>s.camera.fullViewport),new _t("hudVisibilityTexture",(e,s)=>s.hudVisibility?.getTexture())),t.vertex.include(Jt),t.vertex.code.add(E`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function Qn(t,e){if(t.type==="point")return B(t,e,!1);if(Lt(t))switch(t.type){case"extent":return B(t.center,e,!1);case"polygon":return B(t.centroid,e,!1);case"polyline":return B(Ue(t),e,!0);case"mesh":return B(zt(t.vertexSpace,t.spatialReference)??t.extent.center,e,!1);case"multipoint":return}else switch(t.type){case"extent":return B(Wt(t),e,!0);case"polygon":return B(Yt(t),e,!0);case"polyline":return B(Ue(t),e,!0);case"multipoint":return}}function Ue(t){const e=t.paths[0];if(!e||e.length===0)return null;const s=st(e,rt(e)/2);return Ie(s[0],s[1],s[2],t.spatialReference)}function Wt(t){return Ie(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function Yt(t){const e=t.rings[0];if(!e||e.length===0)return null;const s=ot(t.rings,!!t.hasZ);return Ie(s[0],s[1],s[2],t.spatialReference)}function B(t,e,s){const n=s?t:Vt(t);return e&&t?Et(t,n,e)?n:null:n}function Kn(t,e,s,n=0){if(t){e||(e=it());const r=t;let u=.5*r.width*(s-1),o=.5*r.height*(s-1);return r.width<1e-7*r.height?u+=o/20:r.height<1e-7*r.width&&(o+=u/20),gt(e,r.xmin-u-n,r.ymin-o-n,r.xmax+u+n,r.ymax+o+n),e}return null}function es(t,e,s=null){const n=yt(vt);return t!=null&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),e!=null?n[3]=e:t!=null&&t.length>3&&(n[3]=t[3]),s&&(n[0]*=s,n[1]*=s,n[2]*=s,n[3]*=s),n}function ts(t=lt,e,s,n=1){const r=new Array(3);if(e==null||s==null)r[0]=1,r[1]=1,r[2]=1;else{let u,o=0;for(let a=2;a>=0;a--){const l=t[a];let i;const c=l!=null,m=a===0&&!u&&!c,w=s[a];l==="symbol-value"||m?i=w!==0?e[a]/w:1:c&&l!=="proportional"&&isFinite(l)&&(i=w!==0?l/w:1),i!=null&&(r[a]=i,u=i,o=Math.max(o,Math.abs(i)))}for(let a=2;a>=0;a--)r[a]==null?r[a]=u:r[a]===0&&(r[a]=.001*o)}for(let u=2;u>=0;u--)r[u]/=n;return at(r)}function Qt(t){return t.isPrimitive!=null}function ns(t){return Kt(Qt(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function Kt(t){const e=s=>s==null||s>=0;return Array.isArray(t)?t.every(e):e(t)}function ss(t,e,s,n=je()){return t&&Qe(n,n,-t/180*Math.PI),e&&Ke(n,n,e/180*Math.PI),s&&et(n,n,s/180*Math.PI),n}function rs(t,e,s){if(s.minDemResolution!=null)return s.minDemResolution;const n=ct(e),r=ut(t)*n,u=ht(t)*n,o=ft(t)*(e.isGeographic?1:n);return r===0&&u===0&&o===0?s.minDemResolutionForPoints:.01*Math.max(r,u,o)}var Se;(function(t){function e(o,a){const l=o[a],i=o[a+1],c=o[a+2];return Math.sqrt(l*l+i*i+c*c)}function s(o,a){const l=o[a],i=o[a+1],c=o[a+2],m=1/Math.sqrt(l*l+i*i+c*c);o[a]*=m,o[a+1]*=m,o[a+2]*=m}function n(o,a,l){o[a]*=l,o[a+1]*=l,o[a+2]*=l}function r(o,a,l,i,c,m=a){(c=c||o)[m]=o[a]+l[i],c[m+1]=o[a+1]+l[i+1],c[m+2]=o[a+2]+l[i+2]}function u(o,a,l,i,c,m=a){(c=c||o)[m]=o[a]-l[i],c[m+1]=o[a+1]-l[i+1],c[m+2]=o[a+2]-l[i+2]}t.length=e,t.normalize=s,t.scale=n,t.add=r,t.subtract=u})(Se||(Se={}));const J=Se,we=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],en=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],tn=[0,0,1,0,1,1,0,1],nn=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ze=new Array(36);for(let t=0;t<6;t++)for(let e=0;e<6;e++)Ze[6*t+e]=t;const q=new Array(36);for(let t=0;t<6;t++)q[6*t]=0,q[6*t+1]=1,q[6*t+2]=2,q[6*t+3]=2,q[6*t+4]=3,q[6*t+5]=0;function os(t,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(24);for(let n=0;n<8;n++)s[3*n]=we[n][0]*e[0],s[3*n+1]=we[n][1]*e[1],s[3*n+2]=we[n][2]*e[2];return new U(t,[[A.POSITION,new b(s,nn,3,!0)],[A.NORMAL,new b(en,Ze,3)],[A.UV0,new b(tn,q,2)]])}const xe=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],sn=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],rn=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],on=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function is(t,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(18);for(let n=0;n<6;n++)s[3*n]=xe[n][0]*e[0],s[3*n+1]=xe[n][1]*e[1],s[3*n+2]=xe[n][2]*e[2];return new U(t,[[A.POSITION,new b(s,rn,3,!0)],[A.NORMAL,new b(sn,on,3)]])}const ue=R(-.5,0,-.5),he=R(.5,0,-.5),fe=R(0,0,.5),de=R(0,.5,0),W=V(),Y=V(),ee=V(),te=V(),ne=V();F(W,ue,de),F(Y,ue,he),k(ee,W,Y),_(ee,ee),F(W,he,de),F(Y,he,fe),k(te,W,Y),_(te,te),F(W,fe,de),F(Y,fe,ue),k(ne,W,Y),_(ne,ne);const Ae=[ue,he,fe,de],an=[0,-1,0,ee[0],ee[1],ee[2],te[0],te[1],te[2],ne[0],ne[1],ne[2]],ln=[0,1,2,3,1,0,3,2,1,3,0,2],cn=[0,0,0,1,1,1,2,2,2,3,3,3];function as(t,e){Array.isArray(e)||(e=[e,e,e]);const s=new Array(12);for(let n=0;n<4;n++)s[3*n]=Ae[n][0]*e[0],s[3*n+1]=Ae[n][1]*e[1],s[3*n+2]=Ae[n][2]*e[2];return new U(t,[[A.POSITION,new b(s,ln,3,!0)],[A.NORMAL,new b(an,cn,3)]])}function ls(t,e,s,n,r={uv:!0}){const u=-Math.PI,o=2*Math.PI,a=-Math.PI/2,l=Math.PI,i=Math.max(3,Math.floor(s)),c=Math.max(2,Math.floor(n)),m=(i+1)*(c+1),w=D(3*m),x=D(3*m),$=D(2*m),f=[];let d=0;for(let O=0;O<=c;O++){const S=[],h=O/c,P=a+h*l,M=Math.cos(P);for(let N=0;N<=i;N++){const j=N/i,y=u+j*o,z=Math.cos(y)*M,T=Math.sin(P),ie=-Math.sin(y)*M;w[3*d]=z*e,w[3*d+1]=T*e,w[3*d+2]=ie*e,x[3*d]=z,x[3*d+1]=T,x[3*d+2]=ie,$[2*d]=j,$[2*d+1]=h,S.push(d),++d}f.push(S)}const p=new Array;for(let O=0;O<c;O++)for(let S=0;S<i;S++){const h=f[O][S],P=f[O][S+1],M=f[O+1][S+1],N=f[O+1][S];O===0?(p.push(h),p.push(M),p.push(N)):O===c-1?(p.push(h),p.push(P),p.push(M)):(p.push(h),p.push(P),p.push(M),p.push(M),p.push(N),p.push(h))}const g=[[A.POSITION,new b(w,p,3,!0)],[A.NORMAL,new b(x,p,3,!0)]];return r.uv&&g.push([A.UV0,new b($,p,2,!0)]),r.offset&&(g[0][0]=A.OFFSET,g.push([A.POSITION,new b(Float64Array.from(r.offset),qe(p.length),3,!0)])),new U(t,g)}function cs(t,e,s,n){const r=un(e,s);return new U(t,r)}function un(t,e,s){let n,r;n=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let l=0;l<n.length;l+=3)J.scale(n,l,t/J.length(n,l));let u={};function o(l,i){l>i&&([l,i]=[i,l]);const c=l.toString()+"."+i.toString();if(u[c])return u[c];let m=n.length;return n.length+=3,J.add(n,3*l,n,3*i,n,m),J.scale(n,m,t/J.length(n,m)),m/=3,u[c]=m,m}for(let l=0;l<e;l++){const i=r.length,c=new Array(4*i);for(let m=0;m<i;m+=3){const w=r[m],x=r[m+1],$=r[m+2],f=o(w,x),d=o(x,$),p=o($,w),g=4*m;c[g]=w,c[g+1]=f,c[g+2]=p,c[g+3]=x,c[g+4]=d,c[g+5]=f,c[g+6]=$,c[g+7]=p,c[g+8]=d,c[g+9]=f,c[g+10]=d,c[g+11]=p}r=c,u={}}const a=ze(n);for(let l=0;l<a.length;l+=3)J.normalize(a,l);return[[A.POSITION,new b(ze(n),r,3,!0)],[A.NORMAL,new b(a,r,3,!0)]]}function us(t,e,s,n,r,u,o,a,l,i=null){const c=s?Me(s):I(),m=e?Me(e):pt(0,0,1),w=n?[255*n[0],255*n[1],255*n[2],n.length>3?255*n[3]:255]:[255,255,255,255],x=u!=null&&u.length===2?u:[1,1],$=r!=null?[r]:[0],f=qe(1),d=[[A.POSITION,new b(c,f,3,!0)],[A.NORMAL,new b(m,f,3,!0)],[A.COLOR,new b(w,f,4,!0)],[A.SIZE,new b(x,f,2)],[A.ROTATION,new b($,f,1,!0)]];if(a&&d.push([A.UV0,new b(a,f,a.length)]),o!=null&&(o=[o[0],o[1],o[2],o[3]],d.push([A.CENTEROFFSETANDDISTANCE,new b(o,f,4)])),l){const p=[l[0],l[1],l[2],l[3]];d.push([A.FEATUREATTRIBUTE,new b(p,f,4)])}return new U(t,d,null,Xe.Point,i)}function hn(t,e,s,n,r=!0,u=!0){let o=0;const a=e,l=t;let i=R(0,o,0),c=R(0,o+l,0),m=R(0,-1,0),w=R(0,1,0);n&&(o=l,c=R(0,0,0),i=R(0,o,0),m=R(0,1,0),w=R(0,-1,0));const x=[c,i],$=[m,w],f=s+2,d=Math.sqrt(l*l+a*a);if(n)for(let h=s-1;h>=0;h--){const P=h*(2*Math.PI/s),M=R(Math.cos(P)*a,o,Math.sin(P)*a);x.push(M);const N=R(l*Math.cos(P)/d,-a/d,l*Math.sin(P)/d);$.push(N)}else for(let h=0;h<s;h++){const P=h*(2*Math.PI/s),M=R(Math.cos(P)*a,o,Math.sin(P)*a);x.push(M);const N=R(l*Math.cos(P)/d,a/d,l*Math.sin(P)/d);$.push(N)}const p=new Array,g=new Array;if(r){for(let h=3;h<x.length;h++)p.push(1),p.push(h-1),p.push(h),g.push(0),g.push(0),g.push(0);p.push(x.length-1),p.push(2),p.push(1),g.push(0),g.push(0),g.push(0)}if(u){for(let h=3;h<x.length;h++)p.push(h),p.push(h-1),p.push(0),g.push(h),g.push(h-1),g.push(1);p.push(0),p.push(2),p.push(x.length-1),g.push(1),g.push(2),g.push($.length-1)}const O=D(3*f);for(let h=0;h<f;h++)O[3*h]=x[h][0],O[3*h+1]=x[h][1],O[3*h+2]=x[h][2];const S=D(3*f);for(let h=0;h<f;h++)S[3*h]=$[h][0],S[3*h+1]=$[h][1],S[3*h+2]=$[h][2];return[[A.POSITION,new b(O,p,3,!0)],[A.NORMAL,new b(S,g,3,!0)]]}function hs(t,e,s,n,r,u=!0,o=!0){return new U(t,hn(e,s,n,r,u,o))}function fs(t,e,s,n,r,u,o){const a=r?Le(r):R(1,0,0),l=u?Le(u):R(0,0,0);o??=!0;const i=V();_(i,a);const c=V();L(c,i,Math.abs(e));const m=V();L(m,c,-.5),C(m,m,l);const w=R(0,1,0);Math.abs(1-Be(i,w))<.2&&pe(w,0,0,1);const x=V();k(x,i,w),_(x,x),k(w,x,i);const $=2*n+(o?2:0),f=n+(o?2:0),d=D(3*$),p=D(3*f),g=D(2*$),O=new Array(3*n*(o?4:2)),S=new Array(3*n*(o?4:2));o&&(d[3*($-2)]=m[0],d[3*($-2)+1]=m[1],d[3*($-2)+2]=m[2],g[2*($-2)]=0,g[2*($-2)+1]=0,d[3*($-1)]=d[3*($-2)]+c[0],d[3*($-1)+1]=d[3*($-2)+1]+c[1],d[3*($-1)+2]=d[3*($-2)+2]+c[2],g[2*($-1)]=1,g[2*($-1)+1]=1,p[3*(f-2)]=-i[0],p[3*(f-2)+1]=-i[1],p[3*(f-2)+2]=-i[2],p[3*(f-1)]=i[0],p[3*(f-1)+1]=i[1],p[3*(f-1)+2]=i[2]);const h=(y,z,T)=>{O[y]=z,S[y]=T};let P=0;const M=V(),N=V();for(let y=0;y<n;y++){const z=y*(2*Math.PI/n);L(M,w,Math.sin(z)),L(N,x,Math.cos(z)),C(M,M,N),p[3*y]=M[0],p[3*y+1]=M[1],p[3*y+2]=M[2],L(M,M,s),C(M,M,m),d[3*y]=M[0],d[3*y+1]=M[1],d[3*y+2]=M[2],g[2*y]=y/n,g[2*y+1]=0,d[3*(y+n)]=d[3*y]+c[0],d[3*(y+n)+1]=d[3*y+1]+c[1],d[3*(y+n)+2]=d[3*y+2]+c[2],g[2*(y+n)]=y/n,g[2*y+1]=1;const T=(y+1)%n;h(P++,y,y),h(P++,y+n,y),h(P++,T,T),h(P++,T,T),h(P++,y+n,y),h(P++,T+n,T)}if(o){for(let y=0;y<n;y++){const z=(y+1)%n;h(P++,$-2,f-2),h(P++,y,f-2),h(P++,z,f-2)}for(let y=0;y<n;y++){const z=(y+1)%n;h(P++,y+n,f-1),h(P++,$-1,f-1),h(P++,z+n,f-1)}}const j=[[A.POSITION,new b(d,O,3,!0)],[A.NORMAL,new b(p,S,3,!0)],[A.UV0,new b(g,O,2,!0)]];return new U(t,j)}function ds(t,e,s,n,r,u){n=n||10,r=r==null||r,re(e.length>1);const o=[[0,0,0]],a=[],l=[];for(let i=0;i<n;i++){a.push([0,-i-1,-(i+1)%n-1]);const c=i/n*2*Math.PI;l.push([Math.cos(c)*s,Math.sin(c)*s])}return fn(t,l,e,o,a,r,u)}function fn(t,e,s,n,r,u,o=R(0,0,0)){const a=e.length,l=D(s.length*a*3+(6*n.length||0)),i=D(s.length*a*3+(n?6:0)),c=new Array,m=new Array;let w=0,x=0;const $=I(),f=I(),d=I(),p=I(),g=I(),O=I(),S=I(),h=I(),P=I(),M=I(),N=I(),j=I(),y=I(),z=Ut();pe(P,0,1,0),F(f,s[1],s[0]),_(f,f),u?(C(h,s[0],o),_(d,h)):pe(d,0,0,1),Fe(f,d,P,P,g,d,Ge),G(p,d),G(j,g);for(let v=0;v<n.length;v++)L(O,g,n[v][0]),L(h,d,n[v][2]),C(O,O,h),C(O,O,s[0]),l[w++]=O[0],l[w++]=O[1],l[w++]=O[2];i[x++]=-f[0],i[x++]=-f[1],i[x++]=-f[2];for(let v=0;v<r.length;v++)c.push(r[v][0]>0?r[v][0]:-r[v][0]-1+n.length),c.push(r[v][1]>0?r[v][1]:-r[v][1]-1+n.length),c.push(r[v][2]>0?r[v][2]:-r[v][2]-1+n.length),m.push(0),m.push(0),m.push(0);let T=n.length;const ie=n.length-1;for(let v=0;v<s.length;v++){let Re=!1;v>0&&(G($,f),v<s.length-1?(F(f,s[v+1],s[v]),_(f,f)):Re=!0,C(M,$,f),_(M,M),C(N,s[v-1],p),Ft(s[v],M,z),Gt(z,xt(N,$),h)?(F(h,h,s[v]),_(d,h),k(g,M,d),_(g,g)):Fe(M,p,j,P,g,d,Ge),G(p,d),G(j,g)),u&&(C(h,s[v],o),_(y,h));for(let H=0;H<a;H++)if(L(O,g,e[H][0]),L(h,d,e[H][1]),C(O,O,h),_(S,O),i[x++]=S[0],i[x++]=S[1],i[x++]=S[2],C(O,O,s[v]),l[w++]=O[0],l[w++]=O[1],l[w++]=O[2],!Re){const ye=(H+1)%a;c.push(T+H),c.push(T+a+H),c.push(T+ye),c.push(T+ye),c.push(T+a+H),c.push(T+a+ye);for(let ve=0;ve<6;ve++){const Ye=c.length-6;m.push(c[Ye+ve]-ie)}}T+=a}const Je=s[s.length-1];for(let v=0;v<n.length;v++)L(O,g,n[v][0]),L(h,d,n[v][1]),C(O,O,h),C(O,O,Je),l[w++]=O[0],l[w++]=O[1],l[w++]=O[2];const ge=x/3;i[x++]=f[0],i[x++]=f[1],i[x++]=f[2];const Oe=T-a;for(let v=0;v<r.length;v++)c.push(r[v][0]>=0?T+r[v][0]:-r[v][0]-1+Oe),c.push(r[v][2]>=0?T+r[v][2]:-r[v][2]-1+Oe),c.push(r[v][1]>=0?T+r[v][1]:-r[v][1]-1+Oe),m.push(ge),m.push(ge),m.push(ge);const We=[[A.POSITION,new b(l,c,3,!0)],[A.NORMAL,new b(i,m,3,!0)]];return new U(t,We)}function ps(t,e,s,n){re(e.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),re(e[0].length===3,"createPolylineGeometry(): malformed vertex"),re(s==null||s.length===e.length,"createPolylineGeometry: need same number of points and normals"),re(s==null||s[0].length===3,"createPolylineGeometry(): malformed normal");const r=dt(3*e.length),u=new Array(2*(e.length-1));let o=0,a=0;for(let i=0;i<e.length;i++){for(let c=0;c<3;c++)r[o++]=e[i][c];i>0&&(u[a++]=i-1,u[a++]=i)}const l=[[A.POSITION,new b(r,u,3,!0)]];if(s){const i=D(3*s.length);let c=0;for(let m=0;m<e.length;m++)for(let w=0;w<3;w++)i[c++]=s[m][w];l.push([A.NORMAL,new b(i,u,3,!0)])}return n&&l.push([A.COLOR,new b(n,Dt(n.length/4),4)]),new U(t,l,null,Xe.Line)}function ms(t,e,s,n,r,u=0){const o=new Array(18),a=[[-s,u,r/2],[n,u,r/2],[0,e+u,r/2],[-s,u,-r/2],[n,u,-r/2],[0,e+u,-r/2]],l=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let i=0;i<6;i++)o[3*i]=a[i][0],o[3*i+1]=a[i][1],o[3*i+2]=a[i][2];return new U(t,[[A.POSITION,new b(o,l,3,!0)]])}function gs(t,e){const s=t.getMutableAttribute(A.POSITION).data;for(let n=0;n<s.length;n+=3){const r=s[n],u=s[n+1],o=s[n+2];pe(Q,r,u,o),Pe(Q,Q,e),s[n]=Q[0],s[n+1]=Q[1],s[n+2]=Q[2]}}function Os(t,e=t){const s=t.attributes,n=s.get(A.POSITION).data,r=s.get(A.NORMAL).data;if(r){const u=e.getMutableAttribute(A.NORMAL).data;for(let o=0;o<r.length;o+=3){const a=r[o+1];u[o+1]=-r[o+2],u[o+2]=a}}if(n){const u=e.getMutableAttribute(A.POSITION).data;for(let o=0;o<n.length;o+=3){const a=n[o+1];u[o+1]=-n[o+2],u[o+2]=a}}}function $e(t,e,s,n,r){return!(Math.abs(Be(e,t))>r)&&(k(s,t,e),_(s,s),k(n,s,t),_(n,n),!0)}function Fe(t,e,s,n,r,u,o){return $e(t,e,r,u,o)||$e(t,s,r,u,o)||$e(t,n,r,u,o)}const Ge=.99619469809,Q=I();function ys(t){return t.type==="point"}export{es as A,fn as B,os as C,ts as D,rs as E,Xn as G,gs as O,Kn as S,jn as T,ns as U,Kt as Z,me as a,Jt as b,hn as c,Wn as d,Yn as e,Ln as f,as as g,fs as h,hs as i,Qn as j,is as k,Jn as l,Os as m,qn as n,Un as o,Zt as p,us as q,Zn as r,cs as s,ys as t,ss as u,Fe as v,ps as w,ls as x,ms as y,ds as z};
