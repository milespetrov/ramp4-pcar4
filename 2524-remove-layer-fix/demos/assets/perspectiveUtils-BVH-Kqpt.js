import{q as t,u as l,C as j,aF as q,eU as d,bF as w,aC as E}from"./main-CFpM9i38.js";import{V as J}from"./projection-B6HHT9iG.js";import{p as M}from"./normalizeUtilsSync-BnAPTNUh.js";import{u as y,i as g,c as h,r as i}from"./mat3-XZDRtl20.js";import{e as p}from"./mat3f64-q3fE-ZOt.js";import{o as c}from"./vec2-DGVIkCvT.js";import{o as x,N as z}from"./vec32-DwOYpah8.js";let s=class extends q{constructor(o){super(o)}get bounds(){const o=this.coords;return o?.extent==null?null:d(o.extent)}get coords(){const o=this.element.georeference?.coords;return J(o,this.spatialReference).geometry}get normalizedCoords(){return w.fromJSON(M(this.coords))}get normalizedBounds(){const o=this.normalizedCoords!=null?this.normalizedCoords.extent:null;return o!=null?d(o):null}};t([l()],s.prototype,"spatialReference",void 0),t([l()],s.prototype,"element",void 0),t([l()],s.prototype,"bounds",null),t([l()],s.prototype,"coords",null),t([l()],s.prototype,"normalizedCoords",null),t([l()],s.prototype,"normalizedBounds",null),s=t([j("esri.layers.support.MediaElementView")],s);const e=E(),u=p(),a=p(),m=p();function H(o,r,n){return x(e,r[0],r[1],1),z(e,e,y(u,n)),e[2]===0?c(o,e[0],e[1]):c(o,e[0]/e[2],e[1]/e[2])}function I(o,r,n){return f(a,r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7]),f(m,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),g(o,h(a,a),m),o[8]!==0&&(o[0]/=o[8],o[1]/=o[8],o[2]/=o[8],o[3]/=o[8],o[4]/=o[8],o[5]/=o[8],o[6]/=o[8],o[7]/=o[8],o[8]/=o[8]),o}function f(o,r,n,C,b,v,$,B,F){i(o,r,C,v,n,b,$,1,1,1),x(e,B,F,1),h(u,o);const[N,R,V]=z(e,e,y(u,u));return i(u,N,0,0,0,R,0,0,0,V),g(o,u,o)}export{I as j,s as m,H as p};
