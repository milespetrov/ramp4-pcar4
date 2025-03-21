import{ap as X,db as E,n as Y,a5 as D,q as p,u as l,C as I}from"./main-DvRWqUGe.js";import{w as U}from"./vec32-D8MUmfTD.js";import{B as F,K as G}from"./projection-CMnvYCjG.js";import{P as O}from"./normalizeUtils-BAAG5IU_.js";import{o as W}from"./scaleUtils-BKsbyZtg.js";import{l as q,u as B,t as H}from"./gridUtils-CzyW7Qll.js";import{f as c,m as K,r as j,b as T,c as _}from"./index-DNlKUhWQ.js";import"./preload-helper-ExcqyqRp.js";import"./common-DQOJ18NT.js";import"./projectBuffer-B-hA5kQ3.js";import"./normalizeUtilsCommon-oQczJjcC.js";import"./utils-BD15Tnt0.js";import"./utils-CVCusHIW.js";import"./geodesicUtils-LIptTsHV.js";import"./draw-store-DSZfydAi.js";import"./Cyclical-BWK9Ln-D.js";import"./widget-LU61qKBw.js";import"./jsxFactory-DfIuU6I3.js";import"./uuid-Cl5lrJ4c.js";import"./vec2-maR1OrZI.js";import"./vec2f64-HfuIyxwA.js";import"./projectVectorToVector-Cd21uSYk.js";import"./projectPointToVector-CpRqa6cX.js";import"./GraphicsLayer-Bn8B0ktO.js";import"./GraphicsCollection-C0euKyao.js";import"./Layer-DltOj__X.js";import"./TimeExtent-CiTDzFuO.js";import"./BlendLayer-D19AMlZc.js";import"./jsonUtils-DfF8ZMSh.js";import"./parser-Dvr6HhlZ.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B1QDXeUd.js";import"./ScaleRangeLayer-Bq1rR2h2.js";import"./ElevationInfo-gCgu2xYa.js";import"./lengthUtils-DXhwVgbU.js";import"./elevationInfoUtils-a-u-rOfM.js";import"./utils-rUgYMwRn.js";import"./Queue-qIucQaFG.js";import"./signal-YLE8gEIQ.js";import"./Version-w1-yy0xn.js";import"./Query-BAtRw3fb.js";import"./Field-m2DmeAcP.js";import"./fieldType-BrAmgB-g.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./plane-CRVt_F3l.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-BYPkfaOf.js";import"./mat3-OSHnlxii.js";import"./compilerUtils-DTFMfUAK.js";import"./layerViewUtils-B-LwCxtO.js";import"./diffUtils-D-5xKmj0.js";import"./UpdatingHandles-C9vNxx0f.js";import"./ViewingMode-HRfKv6NR.js";import"./meshVertexSpaceUtils-BJsSIylK.js";import"./MeshLocalVertexSpace-D2B0JsGS.js";import"./hydratedFeatures-BGCPW8pf.js";import"./Scheduler-vG1tW9N6.js";import"./geometryEngine-eRZpf_-a.js";import"./geometryEngineBase-8g0RzW7z.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-C66p0MJZ.js";import"./mat2d-D9DBP-jx.js";import"./quat-CsofkvQj.js";import"./drapedUtils-C5nWxSfQ.js";import"./utils-BQBvadb7.js";import"./substitute-K62YnTKe.js";let n=class extends X{constructor(t){super(t),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){return this.grid?.rotateWithMap?0:E(this.view.rotation??0)}get gridRotation(){return E(this.grid?.rotation??0)}get gridCenter(){const{spatialReference:t,grid:e}=this;if(!e||!t||!F(e.center.spatialReference,t))return null;try{const r=G(e.center,t),i=t.isWrappable&&this.view?.center!=null?O(r.x,this.view.center.x,t):r.x;return c(i,r.y,r.z)}catch(r){return Y.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",r),null}}get offsetScaleFactor(){const{pixelsPerStride:t,grid:e}=this;if(!e||!t)return 1;const{majorLineInterval:r,dynamicScaling:i}=e;return r<1?null:q(r,t,i)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:t}=this;return t?D(t.spacing,t.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:t}=this;return t==null?null:t*W(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:t}=this.view;return this.gridCenter?B(this.gridCenter[0],this.gridCenter[1],t):null}get pixelsPerStride(){const{gridMetersPerStride:t,viewMetersPerPixel:e}=this;return e&&t?t/e:null}get updating(){return this.grid!=null&&this.spatialReference!=null&&this.viewMetersPerSRUnit==null}async fetchCandidates(t,e,r){const{options:i,view:o}=this;if(!i?.effectiveGridEnabled||!o.grid||r.feature?.attributes&&K in r.feature.attributes)return[];const s=r.coordinateHelper.arrayToPoint(t),a=i.distance*(r.pointer==="touch"?i.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(s,a)}fetchCandidatesSync(t,e){const r=[],{grid:i,effectiveViewRotation:o,gridRotation:s,gridCenter:a,viewMetersPerPixel:h,viewMetersPerSRUnit:d,offsetScaleFactor:S,spatialReference:g,gridMetersPerStride:C,pixelsPerStride:b}=this;if(!(i&&h&&d&&a&&g&&S&&C&&b)||!i.dynamicScaling&&b<H||!F(t.spatialReference,g))return r;const y=G(t,g),L=c(y.x,y.y,y.z),m=f(L,-s,a,-o),P=C/d*S,u=k(m,P,a),{shouldSnapX:w,shouldSnapY:v}=A(u,m,e,h,d);if(!w&&!v)return[];const V=c((w?u:m)[0],(v?u:m)[1]),M=f(V,s,a,o),$=f(u,s,a,o);if(v){const R=z(u,m,P,"y"),x=f(R,s,a,o);r.push(new j({lineStart:$,lineEnd:x,targetPoint:M,isDraped:!1}))}if(w){const R=z(u,m,P,"x"),x=f(R,s,a,o);r.push(new j({lineStart:$,lineEnd:x,targetPoint:M,isDraped:!1}))}return w&&v&&r.push(new T(M,r[0],r[1],!1)),r}};p([l({constructOnly:!0})],n.prototype,"view",void 0),p([l()],n.prototype,"options",void 0),p([l()],n.prototype,"grid",null),p([l()],n.prototype,"effectiveViewRotation",null),p([l()],n.prototype,"gridRotation",null),p([l()],n.prototype,"gridCenter",null),p([l()],n.prototype,"offsetScaleFactor",null),p([l()],n.prototype,"spatialReference",null),p([l()],n.prototype,"gridMetersPerStride",null),p([l()],n.prototype,"viewMetersPerPixel",null),p([l()],n.prototype,"viewMetersPerSRUnit",null),p([l()],n.prototype,"pixelsPerStride",null),p([l()],n.prototype,"updating",null),n=p([I("esri.views.interactive.snapping.GridSnappingEngine")],n);const f=(t,e,r,i)=>{const o=_(t[0],t[1],t[2]);return U(o,U(o,o,r,e),r,i)},k=(t,e,r)=>{const i=(t[0]-r[0])/e,o=(t[1]-r[1])/e,s=Math.trunc(i),a=Math.trunc(o),h=Math.round(i%1),d=Math.round(o%1),S=r[0]+(s+h)*e,g=r[1]+(a+d)*e;return c(S,g)},A=(t,e,r,i,o)=>{if(i<=0)return{shouldSnapX:!1,shouldSnapY:!1};const s=(t[0]-e[0])/i,a=(t[1]-e[1])/i;return{shouldSnapX:Math.abs(s*o)<r,shouldSnapY:Math.abs(a*o)<r}},z=(t,e,r,i)=>{if(i==="y"){const s=e[0]>t[0]?1:-1;return c(t[0]+r*s,t[1])}const o=e[1]>t[1]?1:-1;return c(t[0],t[1]+r*o)};export{n as GridSnappingEngine};
