import{bc as d,bd as m,U as u,J as w,s as p}from"./main-CZM6prq-.js";let r=null,o=!0;function y(n,e,t){if(!n||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(n,e)}catch{o=!1}return f(n,e,t)}function g(n,e,t,a){if(!e||!t)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(n,e,t)}catch{o=!1}const i=f(e,t,a);return i.data.set(n,0),i}function h(){return r||(r=document.createElement("canvas"),r.width=1,r.height=1),r}function f(n,e,t){return t||(t=h()),t.getContext("2d").createImageData(n,e)}async function l(n,e){const t=window.URL.createObjectURL(n);try{const{data:a}=await u(t,{...e,responseType:"image"});return a}catch(a){throw w(a)?a:new p("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function T(n,e){const{arrayBuffer:t,mediaType:a}=await b(n,e),i=a==="image/png";if(a==="image/gif"){const{isAnimatedGIF:s,parseGif:c}=await import("./gif-WoNBAK3Y.js");if(s(t))return c(t,e)}if(i){const{isAnimatedPNG:s,parseApng:c}=await import("./apng-CZxSsSEt.js");if(s(t))return c(t,e)}return l(new Blob([t],{type:a}),e)}async function b(n,e){const t=d(n);if(t?.isBase64)return{arrayBuffer:m(t.data),mediaType:t.mediaType};const a=await u(n,{responseType:"array-buffer",...e});return{arrayBuffer:a.data,mediaType:a.getHeader?.("Content-Type")??""}}export{g as c,T as p,y as s};
