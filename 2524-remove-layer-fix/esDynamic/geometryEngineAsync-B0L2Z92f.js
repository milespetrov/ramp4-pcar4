import{bv as f,b3 as w}from"./main-DJHcSGyV.js";import{p as h}from"./workers-BaSRokrU.js";function a(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function l(n){return n&&(Array.isArray(n)?n.map(l):n.toJSON?n.toJSON():n)}function c(n){return Array.isArray(n)?n.map(t=>w(t)):w(n)}function S(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),t!=null&&e.push(t)),e}let p;async function d(){return p||(p=h("geometryEngineWorker",{strategy:"distributed"})),p}async function r(n,t){return(await d()).invoke("executeGEOperation",{operation:n,parameters:l(t)})}async function m(n,t){const e=await d();return Promise.all(e.broadcast("executeGEOperation",{operation:n,parameters:l(t)}))}function x(n){return r("extendedSpatialReferenceInfo",[n])}async function A(n,t){return c(await r("clip",[a(n),n,t]))}async function R(n,t){return c(await r("cut",[a(n),n,t]))}function O(n,t){return r("contains",[a(n),n,t])}function D(n,t){return r("crosses",[a(n),n,t])}function J(n,t,e){return r("distance",[a(n),n,t,e])}function N(n,t){return r("equals",[a(n),n,t])}function b(n,t){return r("intersects",[a(n),n,t])}function v(n,t){return r("touches",[a(n),n,t])}function L(n,t){return r("within",[a(n),n,t])}function T(n,t){return r("disjoint",[a(n),n,t])}function V(n,t){return r("overlaps",[a(n),n,t])}function E(n,t,e){return r("relate",[a(n),n,t,e])}function z(n){return r("isSimple",[a(n),n])}async function H(n){return c(await r("simplify",[a(n),n]))}async function I(n,t=!1){return c(await r("convexHull",[a(n),n,t]))}async function P(n,t){return c(await r("difference",[a(n),n,t]))}async function j(n,t){return c(await r("symmetricDifference",[a(n),n,t]))}async function k(n,t){return c(await r("intersect",[a(n),n,t]))}async function q(n,t=null){const e=S(n,t);return c(await r("union",[a(e),e]))}async function B(n,t,e,i,s,u){return c(await r("offset",[a(n),n,t,e,i,s,u]))}async function C(n,t,e,i=!1){const s=[a(n),n,t,e,i];return c(await r("buffer",s))}async function G(n,t,e,i,s,u){const g=[a(n),n,t,e,i,s,u];return c(await r("geodesicBuffer",g))}async function W(n,t,e=!0){const i=await r("nearestCoordinate",[a(n),n,t,e]);return{...i,coordinate:f.fromJSON(i.coordinate)}}async function F(n,t){const e=await r("nearestVertex",[a(n),n,t]);return{...e,coordinate:f.fromJSON(e.coordinate)}}async function K(n,t,e,i){return(await r("nearestVertices",[a(n),n,t,e,i])).map(s=>({...s,coordinate:f.fromJSON(s.coordinate)}))}function y(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function M(n,t,e){if(n==null)throw new o;const i=n.spatialReference;if((e=e??y(n))==null)throw new o;const s=n.constructor.fromJSON(await r("rotate",[i,n,t,e]));return s.spatialReference=i,s}async function Q(n,t){if(n==null)throw new o;const e=n.spatialReference;if((t=t??y(n))==null)throw new o;const i=n.constructor.fromJSON(await r("flipHorizontal",[e,n,t]));return i.spatialReference=e,i}async function U(n,t){if(n==null)throw new o;const e=n.spatialReference;if((t=t??y(n))==null)throw new o;const i=n.constructor.fromJSON(await r("flipVertical",[e,n,t]));return i.spatialReference=e,i}async function X(n,t,e,i){return c(await r("generalize",[a(n),n,t,e,i]))}async function Y(n,t,e){return c(await r("densify",[a(n),n,t,e]))}async function Z(n,t,e,i=0){return c(await r("geodesicDensify",[a(n),n,t,e,i]))}function _(n,t){return r("planarArea",[a(n),n,t])}function $(n,t){return r("planarLength",[a(n),n,t])}function nn(n,t,e){return r("geodesicArea",[a(n),n,t,e])}function tn(n,t,e){return r("geodesicLength",[a(n),n,t,e])}async function en(n,t){return c(await r("intersectLinesToPoints",[a(n),n,t]))}async function rn(n,t){await m("changeDefaultSpatialReferenceTolerance",[n,t])}async function an(n){await m("clearDefaultSpatialReferenceTolerance",[n])}class o extends Error{constructor(){super("Illegal Argument Exception")}}export{C as buffer,rn as changeDefaultSpatialReferenceTolerance,an as clearDefaultSpatialReferenceTolerance,A as clip,O as contains,I as convexHull,D as crosses,R as cut,Y as densify,P as difference,T as disjoint,J as distance,N as equals,x as extendedSpatialReferenceInfo,Q as flipHorizontal,U as flipVertical,X as generalize,nn as geodesicArea,G as geodesicBuffer,Z as geodesicDensify,tn as geodesicLength,k as intersect,en as intersectLinesToPoints,b as intersects,z as isSimple,W as nearestCoordinate,F as nearestVertex,K as nearestVertices,B as offset,V as overlaps,_ as planarArea,$ as planarLength,E as relate,M as rotate,H as simplify,j as symmetricDifference,v as touches,q as union,L as within};
