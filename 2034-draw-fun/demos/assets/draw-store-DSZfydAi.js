import{aa as h,ab as r,ac as G}from"./main-DvRWqUGe.js";const m=h("draw",()=>{const a=r(""),i=G([]),n=r(null);function o(e){a.value=e}function u(e){const t=`graphic-${Date.now()}`;return i.push({id:t,...e}),t}function l(e){const t=i.findIndex(c=>c.id===e);t!==-1&&(i.splice(t,1),n.value===e&&(n.value=null))}function s(e){n.value=e}function f(){n.value=null}function d(){return n.value?i.find(e=>e.id===n.value):null}function p(e,t){const c=i.find(v=>v.id===e);c&&(c.geometry=t)}return{activeTool:a,graphics:i,selectedGraphicId:n,setActiveTool:o,addGraphic:u,removeGraphic:l,selectGraphic:s,clearSelection:f,getSelectedGraphic:d,updateGraphicGeometry:p}});export{m as u};
