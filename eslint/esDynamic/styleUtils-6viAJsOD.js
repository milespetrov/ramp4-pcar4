import{_ as a,D as o,z as c}from"./main-BPeHLg3l.js";async function g(r,e,i){const t=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(t&&t.type==="unique-value"&&t.styleOrigin){const n=await a(t.populateFromStyle());if(o(i),n.ok===!1){const s=n.error;e?.messages&&e.messages.push(new c("renderer:style-reference",`Failed to create unique value renderer from style reference: ${s.message}`,{error:s,context:e})),r.clear("renderer",e?.origin)}}}export{g as t};
