import{a$ as w}from"./main-BriipcPO.js";import{u as i}from"./basicInterfaces-Dsf65ICa.js";class d{constructor(r){this.data=r,this.type="encoded-mesh-texture",this.encoding=i.KTX2_ENCODING}}function f(t){return t?.type==="encoded-mesh-texture"}async function h(t){const r=new Blob([t]),o=await r.text();return JSON.parse(o)}async function l(t,r){if(r===i.KTX2_ENCODING)return new d(t);const o=new Blob([t],{type:r}),n=URL.createObjectURL(o),e=new Image;if(w("esri-iPhone"))return new Promise((m,u)=>{const s=()=>{c(),m(e)},a=L=>{c(),u(L)},c=()=>{URL.revokeObjectURL(n),e.removeEventListener("load",s),e.removeEventListener("error",a)};e.addEventListener("load",s),e.addEventListener("error",a),e.src=n});try{e.src=n,await e.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),e}export{h as n,l as o,f as r,d as t};
