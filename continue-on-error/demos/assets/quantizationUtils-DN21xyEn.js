import"./main-CT4A7-UF.js";function H(n){return n?{originPosition:n.originPosition==="upper-left"?"upperLeft":n.originPosition==="lower-left"?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance,1,1]:[1,1,1,1],translate:n.extent!=null?[n.extent.xmin,n.extent.ymax,n.extent.zmin??0,n.extent.mmin??0]:[0,0,0,0]}:null}function z(n){return n.originPosition==="lowerLeft"&&n.scale.length===4&&n.translate.length===4}function x(n){if(z(n))return n;const{originPosition:r,scale:t,translate:e}=n,o=t[0]??1,l=t[1]??1;return{originPosition:"lowerLeft",scale:[o,r==="lowerLeft"?l:-l,t[2]??1,t[3]??1],translate:[e[0]??0,e[1]??0,e[2]??0,e[3]??0]}}function Z({scale:n,translate:r},t){return Math.round((t-r[0])/n[0])}function A({scale:n,translate:r},t){return Math.round((t-r[1])/n[1])}function d({scale:n,translate:r},t){return Math.round(((t??0)-r[2])/n[2])}function b({scale:n,translate:r},t){return t?Math.round((t-r[3])/n[3]):0}function P({scale:n,translate:r},t){return t*n[0]+r[0]}function y({scale:n,translate:r},t){return t*n[1]+r[1]}function w({scale:n,translate:r},t){return(t??0)*n[2]+r[2]}function m({scale:n,translate:r},t){return t?t*n[3]+r[3]:0}function p(n,r){return n&&r?D:n&&!r?B:!n&&r?C:j}const j=(n,r)=>{const t=new Array(r.length);if(!r.length)return t;const e=r[0];let o=P(n,e[0]),l=y(n,e[1]);t[0]=[o,l];const{scale:i,originPosition:a}=n,u=i[0],c=a==="lowerLeft"?i[1]:-i[1];for(let s=1;s<r.length;s++){const[f,h]=r[s];o+=u*f,l+=c*h,t[s]=[o,l]}return t},B=(n,r)=>{const t=new Array(r.length);if(!r.length)return t;const e=r[0];let o=P(n,e[0]),l=y(n,e[1]);t[0]=[o,l,w(n,e[2])];const{scale:i,originPosition:a}=n,u=i[0],c=a==="lowerLeft"?i[1]:-i[1];for(let s=1;s<r.length;s++){const[f,h,g]=r[s];o+=u*f,l+=c*h,t[s]=[o,l,w(n,g)]}return t},C=(n,r)=>{const t=new Array(r.length);if(!r.length)return t;const e=r[0];let o=P(n,e[0]),l=y(n,e[1]);t[0]=[o,l,m(n,e[2])];const{scale:i,originPosition:a}=n,u=i[0],c=a==="lowerLeft"?i[1]:-i[1];for(let s=1;s<r.length;s++){const[f,h,g]=r[s];o+=u*f,l+=c*h,t[s]=[o,l,m(n,g)]}return t},D=(n,r)=>{const t=new Array(r.length);if(!r.length)return t;const e=r[0];let o=P(n,e[0]),l=y(n,e[1]);t[0]=[o,l,w(n,e[2]),m(n,e[3])];const{scale:i,originPosition:a}=n,u=i[0],c=a==="lowerLeft"?i[1]:-i[1];for(let s=1;s<r.length;s++){const[f,h,g,M]=r[s];o+=u*f,l+=c*h,t[s]=[o,l,w(n,g),m(n,M)]}return t};function L(n,r,t){const e=new Array(t.length);for(let o=0;o<t.length;o++)e[o]=r(n,t[o]);return e}function T(n,r,t){const e=x(n);return r.x=Z(e,t.x),r.y=A(e,t.y),t.z!=null&&(r.z=d(e,t.z)),t.m!=null&&(r.m=b(e,t.m)),r}function k(n,r,t,e=t?.hasZ??!1,o=t?.hasM??!1){if(t!=null){const l=x(n);r.points=p(e,o)(l,t.points),r.hasZ=e,r.hasM=o}return r}function q(n,r,t,e=t?.z!=null,o=t?.m!=null){if(t==null)return r;const l=x(n);return r.x=P(l,t.x),r.y=y(l,t.y),e&&(r.z=w(l,t.z)),o&&(r.m=m(l,t.m)),r}function v(n,r,t,e=t?.hasZ??!1,o=t?.hasM??!1){if(t!=null){const l=x(n);r.rings=L(l,p(e,o),t.rings),r.hasZ=e,r.hasM=o}return r}function F(n,r,t,e=t?.hasZ??!1,o=t?.hasM??!1){if(t!=null){const l=x(n);r.paths=L(l,p(e,o),t.paths),r.hasZ=e,r.hasM=o}return r}export{k as B,q as C,v as D,F as H,T as j,H as s,x as u};
