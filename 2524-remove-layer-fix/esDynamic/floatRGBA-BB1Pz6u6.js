import{aP as e}from"./main-DJHcSGyV.js";function l(o,a,n=0){const t=e(o,0,u);for(let r=0;r<4;r++)a[n+r]=Math.floor(256*s(t*c[r]))}function f(o,a=0){let n=0;for(let t=0;t<4;t++)n+=o[a+t]*i[t];return n}const c=[1,256,65536,16777216],i=[1/256,1/65536,1/16777216,1/4294967296],u=f(new Uint8ClampedArray([255,255,255,255]));function s(o){return o-Math.floor(o)}export{l as o,f as r};
