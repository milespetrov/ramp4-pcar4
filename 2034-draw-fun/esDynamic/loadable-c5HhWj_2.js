import{i as s,f as i}from"./jsxFactory-Ce1bY6f0.js";const a=new WeakMap,e=new WeakMap;function o(n){e.set(n,new Promise(t=>a.set(n,t)))}function r(n){a.get(n)()}function c(n){return e.get(n)}async function f(n){if(await c(n),!!s())return i(n),new Promise(t=>requestAnimationFrame(()=>t()))}export{r as a,f as c,o as s};
