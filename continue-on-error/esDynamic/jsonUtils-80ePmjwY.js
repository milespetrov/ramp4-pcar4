import{aY as f,s as c}from"./main-IAmJgjpH.js";import{d as o,l as i}from"./parser-DI2-YZgF.js";function l(s,t,e){try{return h(s)}catch(a){e?.messages?.push(a)}return null}function p(s,t,e,a){try{const n=m(s);f(e,n,t)}catch(n){a.messages&&a.messages.push(n)}}function m(s){const t=o(s);return t?i(t)?t.map(e=>e.toJSON()):t.map(({scale:e,effects:a})=>({scale:e,value:a.map(n=>n.toJSON())})):null}function h(s){if(!s||s.length===0)return null;if(g(s)){const t=[];for(const e of s)t.push({scale:e.scale,value:u(e.value)});return t}return u(s)}function g(s){const t=s[0];return!!t&&"scale"in t}function u(s){if(!s?.length)return"";const t=[];for(const e of s){let a=[];switch(e.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":a=[r(e,"amount")];break;case"blur":a=[r(e,"radius","pt")];break;case"hue-rotate":a=[r(e,"angle","deg")];break;case"drop-shadow":a=[r(e,"xoffset","pt"),r(e,"yoffset","pt"),r(e,"blurRadius","pt"),b(e,"color")];break;case"bloom":a=[r(e,"strength"),r(e,"radius","pt"),r(e,"threshold")]}const n=`${e.type}(${a.filter(Boolean).join(" ")})`;o(n),t.push(n)}return t.join(" ")}function r(s,t,e){if(s[t]==null)throw new c("effect:missing-parameter",`Missing parameter '${t}' in ${s.type} effect`,{effect:s});return e?s[t]+e:""+s[t]}function b(s,t){if(s[t]==null)throw new c("effect:missing-parameter",`Missing parameter '${t}' in ${s.type} effect`,{effect:s});const e=s[t];return`rgba(${e[0]||0}, ${e[1]||0}, ${e[2]||0}, ${e[3]/255||0})`}export{p as a,l as n};
