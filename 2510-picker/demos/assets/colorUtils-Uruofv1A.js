import{aE as s,bk as w,h as $,bl as A}from"./main-Cndq3wrU.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";function E(t){return"r"in t&&"g"in t&&"b"in t}function x(t){return"h"in t&&"s"in t&&"v"in t}function k(t){return"l"in t&&"a"in t&&"b"in t}function y(t){return"l"in t&&"c"in t&&"h"in t}function I(t){return"x"in t&&"y"in t&&"z"in t}const j=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],q=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function z(t,r){const o=[];let n,e;if(t[0].length!==r.length)throw new Error("dimensions do not match");const u=t.length,c=t[0].length;let a=0;for(n=0;n<u;n++){for(a=0,e=0;e<c;e++)a+=t[n][e]*r[e];o.push(a)}return o}function v(t){const r=[t.r/255,t.g/255,t.b/255].map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4),o=z(j,r);return{x:100*o[0],y:100*o[1],z:100*o[2]}}function M(t){const r=z(q,[t.x/100,t.y/100,t.z/100]).map(o=>{const n=o<=.0031308?12.92*o:1.055*o**.4166666666666667-.055;return Math.min(1,Math.max(n,0))});return{r:Math.round(255*r[0]),g:Math.round(255*r[1]),b:Math.round(255*r[2])}}function H(t){const r=[t.x/95.047,t.y/100,t.z/108.883].map(o=>o>.008856451679035631?o**.3333333333333333:7.787037037037035*o+.13793103448275862);return{l:116*r[1]-16,a:500*(r[0]-r[1]),b:200*(r[1]-r[2])}}function L(t){const r=t.l,o=[(r+16)/116+t.a/500,(r+16)/116,(r+16)/116-t.b/200].map(n=>n>6/29?n**3:3*(6/29)**2*(n-4/29));return{x:95.047*o[0],y:100*o[1],z:108.883*o[2]}}function B(t){const r=t.l,o=t.a,n=t.b,e=Math.sqrt(o*o+n*n);let u=Math.atan2(n,o);return u=u>0?u:u+2*Math.PI,{l:r,c:e,h:u}}function C(t){const r=t.l,o=t.c,n=t.h;return{l:r,a:o*Math.cos(n),b:o*Math.sin(n)}}function G(t){return H(v(t))}function O(t){return M(L(t))}function P(t){return B(H(v(t)))}function Q(t){return M(L(C(t)))}function R(t){const r=t.r,o=t.g,n=t.b,e=Math.max(r,o,n),u=e-Math.min(r,o,n);let c=e,a=u===0?0:e===r?(o-n)/u%6:e===o?(n-r)/u+2:(r-o)/u+4,i=u===0?0:u/c;return a<0&&(a+=6),a*=60,i*=100,c*=100/255,{h:a,s:i,v:c}}function S(t){const r=(t.h+360)%360/60,o=t.s/100,n=t.v/100*255,e=n*o,u=e*(1-Math.abs(r%2-1));let c;switch(Math.floor(r)){case 0:c={r:e,g:u,b:0};break;case 1:c={r:u,g:e,b:0};break;case 2:c={r:0,g:e,b:u};break;case 3:c={r:0,g:u,b:e};break;case 4:c={r:u,g:0,b:e};break;case 5:case 6:c={r:e,g:0,b:u};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+n-e),c.g=Math.round(c.g+n-e),c.b=Math.round(c.b+n-e),c}function m(t){return E(t)?t:y(t)?Q(t):k(t)?O(t):I(t)?M(t):x(t)?S(t):t}function U(t){return x(t)?t:R(m(t))}function V(t){return k(t)?t:G(m(t))}function W(t){return y(t)?t:P(m(t))}function T(t,r){const{r:o,g:n,b:e}=t;return .2126*o+.7152*n+.0722*e}var b;function X(t,r=b.High){return T(t)>r?new s([0,0,0,t.a]):new s([255,255,255,t.a])}function Y(t,r,o={}){if(t.length===0||r<=0)return[];if((t=t.map(n=>typeof n=="string"?new s(n):n)).length===1||r===1){const n=[],e=t[0];for(let u=0;u<r;u++)n.push(e.clone());return n}if(o.shuffle&&(t=w($(t),o.seed)),t.length>=r){const n=[],e=(t.length-1)/(r-1);for(let u=0;u<r;u++){const c=Math.round(u*e);n.push(t[c].clone())}return n}return D(t,r,o)}function D(t,r,o={}){const n=[],e=t.length-1,u=Math.ceil((r-t.length)/e);t:for(let c=0;c<e;c++){const a=t[c],i=t[c+1];for(let h=1;h<=u;h++){const f=h/(u+1);if(n.push(F(a,i,f,o)),n.length+t.length===r)break t}}return[...t.map(c=>c.clone()),...w(n,o.seed??1)]}(function(t){t[t.Low=160]="Low",t[t.High=225]="High"})(b||(b={}));const g=(t,r)=>{const o=Math.floor(10*r())-5;return Math.min(255,Math.max(0,t+o))};function F(t,r,o,n={}){const e=t.r,u=t.g,c=t.b,a=r.r,i=r.g,h=r.b,f=Math.round(e+(a-e)*o),d=Math.round(u+(i-u)*o),p=Math.round(c+(h-c)*o);if(!n.offset)return new s([f,d,p]);const l=A(n.seed);return new s([g(f,l),g(d,l),g(p,l)])}export{m as A,U as B,V as C,W as H,Y as O,X as R,E as c};
