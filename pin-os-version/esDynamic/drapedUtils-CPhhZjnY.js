import{au as c,bq as p}from"./main-C6lijZBn.js";function u(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function M(t){let e=0,s=0;for(let a=0;a<t.length;a++){const n=t[a].size;typeof n=="number"&&(e+=n,s++)}return e/s}function m(t,e){return typeof t=="number"?t:t?.stops?.length?M(t.stops):e}function d(t,e){if(!e)return t;const s=e.filter(o=>o.type==="size").map(o=>{const{maxSize:r,minSize:f}=o;return(m(r,t)+m(f,t))/2});let a=0;const n=s.length;if(n===0)return t;for(let o=0;o<n;o++)a+=s[o];const i=Math.floor(a/n);return Math.max(i,t)}function y(t){const e=t?.renderer,s=t?.pointerType,a=s==="touch"?9:6;if(!e)return a;const n="visualVariables"in e?d(a,e.visualVariables):a;if(e.type==="simple")return u(n,e.symbol);if(e.type==="unique-value"){let i=n;return e.uniqueValueInfos?.forEach(o=>{i=u(i,o.symbol)}),i}if(e.type==="class-breaks"){let i=n;return e.classBreakInfos.forEach(o=>{i=u(i,o.symbol)}),i}return e.type==="dot-density"||e.type,n}function x(t,e,s,a=new c){let n=0;if(s.type==="2d")n=e*(s.resolution??0);else if(s.type==="3d"){const b=s.overlayPixelSizeInMapUnits(t),l=s.basemapSpatialReference;n=l==null||l.equals(s.spatialReference)?e*b:p(l)/p(s.spatialReference)}const i=t.x-n,o=t.y-n,r=t.x+n,f=t.y+n,{spatialReference:h}=s;return a.xmin=Math.min(i,r),a.ymin=Math.min(o,f),a.xmax=Math.max(i,r),a.ymax=Math.max(o,f),a.spatialReference=h,a}function z(t,e,s){const a=s.toMap(t);return a==null?!1:x(a,y(),s,q).intersects(e)}const q=new c;export{z as i,y as o,x as r};
