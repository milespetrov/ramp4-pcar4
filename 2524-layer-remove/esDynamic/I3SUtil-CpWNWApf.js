import{bS as t,U as g,gT as y,gU as A}from"./main-sNoC4iWN.js";import"./mat4-Dhi_iRLh.js";import"./mat4f64-Dn1WEGBx.js";import"./vec32-CFsoNMvk.js";import"./projectBuffer-CbUEPwX_.js";import"./projectVectorToVector-BnIQckRQ.js";import"./sphere-Ct8acg-e.js";import"./Query-Cx0mBhxq.js";import{I as d}from"./I3SBinaryReader-CbGBCR95.js";import{r as S}from"./vec4f64-hf2nxvhQ.js";import"./floatRGBA-Dg2ynuBk.js";import"./NormalAttribute.glsl-mHD1O2HF.js";import"./interfaces-DN2-jsJC.js";import"./BindType-9iOk18Ed.js";import"./VertexAttribute-DqD5S0a2.js";import{I as h}from"./orientedBoundingBox-DE8bwOHh.js";var a;(function(o){o[o.TRANSPARENT=0]="TRANSPARENT",o[o.OPAQUE=1]="OPAQUE"})(a||(a={}));var u;(function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"})(u||(u={}));var T,m;(function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"})(T||(T={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(m||(m={}));function D(o){return{...P,...o,type:T.Solid}}const P={color:S(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:a.OPAQUE,hasSlicePlane:!1};S(0,0,0,.2),a.OPAQUE,t();var p;async function _(o,s,n,I,N,U,R,O){const E=[];for(const r of s)if(r&&N.includes(r.name)){const i=`${o}/nodes/${n}/attributes/${r.key}/0`;E.push({url:i,storageInfo:r})}const c=await Promise.allSettled(E.map(r=>g(r.url,{responseType:"array-buffer",query:{...R,token:U},signal:O?.signal}).then(i=>d(r.storageInfo,i.data)))),f=[];for(const r of I){const i={};for(let e=0;e<c.length;e++){const l=c[e];if(l.status==="fulfilled"){const C=l.value;i[E[e].storageInfo.name]=L(C,r)}}f.push(i)}return f}(function(o){o[o.OUTSIDE=0]="OUTSIDE",o[o.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",o[o.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",o[o.INSIDE=3]="INSIDE"})(p||(p={}));const v=-32768,x=-(2**31);function L(o,s){if(!o)return null;const n=o[s];return y(o)?n===v?null:n:A(o)?n===x?null:n:n!=n?null:n}D({color:[0,0,0,0],opacity:0}),t(),t(),new h,new Array(72);export{_ as V};
