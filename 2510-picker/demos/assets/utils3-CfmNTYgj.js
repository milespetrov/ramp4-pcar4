import{i as o}from"./themeUtils-DWOpHsIR.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c="calcite-list",a="calcite-list-item-group",l="calcite-list-item";function f(s){return Array.from(s.assignedElements({flatten:!0}).filter(e=>e.matches(c)))}function h(s){const e=s.assignedElements({flatten:!0}),r=e.filter(t=>t?.matches(a)).map(t=>Array.from(t.querySelectorAll(l))).reduce((t,i)=>[...t,...i],[]),n=e.filter(t=>t?.matches(l));return[...e.filter(t=>t?.matches(c)).map(t=>Array.from(t.querySelectorAll(l))).reduce((t,i)=>[...t,...i],[]),...r,...n]}function d(s){s.forEach(e=>{e.setPosition=s.indexOf(e)+1,e.setSize=s.length})}function p(s,e=!1){if(!o())return 0;const r=e?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(r,s,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{h as a,f as b,p as g,d as u};
