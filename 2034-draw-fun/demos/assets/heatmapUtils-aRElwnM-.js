import{bw as u,bx as l,ad as m}from"./main-DvRWqUGe.js";import{_ as p}from"./vec42-CKs01hkn.js";import{n as h}from"./vec4f64-o2zAXfmz.js";const s=2.4;function b(r){return u(r*s)}function d(r){return l(r)/s}function y(r,e,t,a){let{color:c,ratio:i}=e,{color:f,ratio:o}=t;o===i&&(o===1?i-=1e-6:o+=1e-6);const n=m((a-i)/(o-i),0,1);p(r,c.toArray(),f.toArray(),n)}function g(r){const t=new Uint8ClampedArray(2048);if(r=r.filter(({ratio:o})=>o>=0&&o<=1).sort((o,n)=>o.ratio-n.ratio).map(({color:o,ratio:n})=>({color:o,ratio:Math.max(n,.001)})),r.length<1)return t;let a=r[0],c=r[0],i=1;const f=h();for(let o=0;o<512;o++){const n=(o+.5)/512;for(;n>c.ratio&&i<r.length;)a=c,c=r[i++];y(f,a,c,n),t.set(f,4*o)}return t}function w(r,e,t){const a=Math.sqrt(r**2+e**2)/t;return a>1?0:3/(Math.PI*t**2)*(1-a**2)**2}function q(r){return typeof r=="function"?r:r?e=>+e[r]:()=>1}export{d as a,s as c,b as e,g as f,w as l,q as u};
