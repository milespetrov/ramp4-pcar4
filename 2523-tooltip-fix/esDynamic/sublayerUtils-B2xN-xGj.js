import{bm as l}from"./main-CDHpIWDK.js";function f(e,n,i){return n.flatten(({sublayers:r})=>r).length!==e.length?!0:!!e.some(r=>r.originIdOf("minScale")>i||r.originIdOf("maxScale")>i||r.originIdOf("renderer")>i||r.originIdOf("labelingInfo")>i||r.originIdOf("opacity")>i||r.originIdOf("labelsVisible")>i||r.originIdOf("source")>i)||!a(e,n)}function s(e,n,i){return!!e.some(r=>{const o=r.source,t=!o||o.type==="map-layer"&&o.mapLayerId===r.id&&(o.gdbVersion==null||o.gdbVersion===i);return r.commitProperty("renderer"),r.commitProperty("labelingInfo"),r.commitProperty("opacity"),r.commitProperty("labelsVisible"),!t||r.originIdOf("renderer")>l.SERVICE||r.originIdOf("labelingInfo")>l.SERVICE||r.originIdOf("opacity")>l.SERVICE||r.originIdOf("labelsVisible")>l.SERVICE})||!a(e,n)}function a(e,n){if(!e?.length||n==null)return!0;const i=n.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).map(t=>t.id).toArray();if(e.length>i.length)return!1;let r=0;const o=i.length;for(const{id:t}of e){for(;r<o&&i[r]!==t;)r++;if(r>=o)return!1}return!0}function c(e){return!!e&&e.some(n=>n.minScale!=null||n.layerDefinition?.minScale!=null)}export{f as e,s as n,c as o};
