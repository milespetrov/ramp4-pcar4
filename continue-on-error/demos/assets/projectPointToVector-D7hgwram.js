import{aC as e}from"./main-CT4A7-UF.js";import{J as i,H as m}from"./projection-CzwB5LLH.js";import{n as p}from"./projectBuffer-BExSDksD.js";function l(r,t,o,s){if(i(r.spatialReference,o)){f[0]=r.x,f[1]=r.y;const a=r.z;return f[2]=a??s??0,p(f,r.spatialReference,0,t,o,0)}const n=m(r,o);return!!n&&(t[0]=n?.x,t[1]=n?.y,t[2]=n?.z??s??0,!0)}const f=e();export{l as c};
