import{P as l,$ as y}from"./utils-BX-m2URa.js";import{o as f}from"./jsonContext-Ds8W2BoJ.js";import{s as v,a as d,f as s,i as I}from"./portalItemUtils-BcFDL0Hl.js";import{p as i}from"./resourceUtils-DUxaBJPA.js";import"./main-Re2Hv9G4.js";import"./preload-helper-ExcqyqRp.js";import"./originUtils-CPX8CCAY.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./PortalItem-05fF2w5b.js";import"./saveUtils-Bd9lRrE0.js";import"./projection-mClxjUCu.js";import"./projectBuffer-BMlvsPkt.js";import"./uuid-Cl5lrJ4c.js";import"./resourceUtils-B1nbyP8o.js";const n="Group Layer",g="group-layer-save",P="group-layer-save-as",a=s.GROUP_LAYER_MAP;function m(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function A(e){return{isValid:v(e,a),errorMessage:`Layer.portalItem.typeKeywords should have '${a}'`}}function p(e,r){return{...f(e,"web-map",!0),initiator:r}}function c(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||=e.title,d(r,s.METADATA),I(r,a)}async function E(e,r){return l({layer:e,itemType:n,validateLayer:m,validateItem:A,createJSONContext:t=>p(t,e),createItemData:c,errorNamePrefix:g,saveResources:async(t,o)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,o))},r)}async function G(e,r,t){return y({layer:e,itemType:n,validateLayer:m,createJSONContext:o=>p(o,e),createItemData:c,errorNamePrefix:P,newItem:r,setItemProperties:R,saveResources:(o,u)=>i(e.resourceReferences,u)},t)}export{E as save,G as saveAs};
