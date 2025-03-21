import{e as N}from"./earcut-XDcq3zAf.js";import{d8 as S,cT as g,bG as W,bw as X,fj as Y,fk as v,fl as O,fm as C}from"./main-CZM6prq-.js";import{t as x}from"./Indices-DpXlWnGJ.js";import{o as j}from"./vec32-CjgofUqd.js";import{M as k,O as F,v as G}from"./plane-DEdld-wW.js";import{e as E}from"./deduplicate-BZKcVjGN.js";function M(t,o,l){const r=R(Z,t,o,l)?F(Z):[0,0,1];return Math.abs(r[2])>Math.cos(S(80))?g.Z:Math.abs(r[1])>Math.abs(r[0])?g.Y:g.X}function R(t,o,l,r){const e=(a=>!Array.isArray(a[0]))(o)?(a,n)=>o[3*a+n]:(a,n)=>o[a][n],s=r?W(r)/X(r):1;return G(t,(a,n)=>j(a,e(n,0)*s,e(n,1)*s,e(n,2)),l)}const Z=k();function z(t){const o=H(t.rings,t.hasZ,I.CCW_IS_HOLE,t.spatialReference),l=new Array;let r=0,e=0;for(const n of o.polygons){const h=n.count,i=n.index,y=Y(o.position,3*i,3*h),d=n.holeIndices.map(f=>f-i),m=x(N(y,d,3));l.push({position:y,faces:m}),r+=y.length,e+=m.length}const s=P(l,r,e),a=Array.isArray(s.position)?E(s.position,3,{originalIndices:s.faces}):E(s.position.buffer,6,{originalIndices:s.faces});return s.position=v(new Float64Array(a.buffer)),s.faces=a.indices,s}function P(t,o,l){if(t.length===1)return t[0];const r=O(o),e=new Array(l);let s=0,a=0,n=0;for(const h of t){for(let i=0;i<h.position.length;i++)r[s++]=h.position[i];for(const i of h.faces)e[a++]=i+n;n=s/3}return{position:r,faces:x(e)}}function H(t,o,l,r){const e=t.length,s=new Array(e),a=new Array(e),n=new Array(e);let h=0;for(let u=0;u<e;++u)h+=t[u].length;let i=0,y=0,d=0;const m=O(3*h);let f=0;for(let u=e-1;u>=0;u--){const c=t[u],b=l===I.CCW_IS_HOLE&&T(c,o,r);if(b&&e!==1)s[i++]=c;else{let L=c.length;for(let p=0;p<i;++p)L+=s[p].length;const A={index:f,pathLengths:new Array(i+1),count:L,holeIndices:new Array(i)};A.pathLengths[0]=c.length,c.length>0&&(n[d++]={index:f,count:c.length}),f=b?_(c,c.length-1,-1,m,f,c.length,o):_(c,0,1,m,f,c.length,o);for(let p=0;p<i;++p){const w=s[p];A.holeIndices[p]=f,A.pathLengths[p+1]=w.length,w.length>0&&(n[d++]={index:f,count:w.length}),f=_(w,0,1,m,f,w.length,o)}i=0,A.count>0&&(a[y++]=A)}}for(let u=0;u<i;++u){const c=s[u];c.length>0&&(n[d++]={index:f,count:c.length}),f=_(c,0,1,m,f,c.length,o)}return a.length=y,n.length=d,{position:m,polygons:a,outlines:n}}function _(t,o,l,r,e,s,a){e*=3;for(let n=0;n<s;++n){const h=t[o];r[e++]=h[0],r[e++]=h[1],r[e++]=a&&h[2]?h[2]:0,o+=l}return e/3}function T(t,o,l){if(!o)return!C(t);const r=t.length-1;switch(M(t,r,l)){case g.X:return!C(t,g.Y,g.Z);case g.Y:return!C(t,g.X,g.Z);case g.Z:return!C(t,g.X,g.Y)}}var I;(function(t){t[t.NONE=0]="NONE",t[t.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(I||(I={}));export{H as a,M as c,z as f,I as p};
