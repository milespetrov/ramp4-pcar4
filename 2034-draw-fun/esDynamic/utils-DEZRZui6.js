import{s as c,c as P}from"./main-CZM6prq-.js";import{i as u}from"./originUtils-BLsWtgV9.js";import h from"./PortalItem-DutASphj.js";import{o as x}from"./jsonContext-D7_YmLed.js";import{i as N,f as S}from"./portalItemUtils-DWmtB15i.js";import{t as b}from"./saveUtils-mIOr_tbk.js";function g(t,a,r){const e=r(t);if(!e.isValid)throw new c(`${a}:invalid-parameters`,e.errorMessage,{layer:t})}async function d(t){const{layer:a,errorNamePrefix:r,validateLayer:e}=t;await a.load(),g(a,r,e)}function y(t,a){return`Layer (title: ${t.title}, id: ${t.id}) of type '${t.declaredClass}' ${a}`}function w(t){const{item:a,errorNamePrefix:r,layer:e,validateItem:i}=t;if(O(t),i){const n=i(a);if(!n.isValid)throw new c(`${r}:invalid-parameters`,n.errorMessage,{layer:e})}}function O(t){const{item:a,itemType:r,additionalItemType:e,errorNamePrefix:i,layer:n}=t,s=[r];if(e&&s.push(e),!s.includes(a.type)){const p=s.map(o=>`'${o}'`).join(", ");throw new c(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${p}"`,{item:a,layer:n})}}function J(t){const{layer:a,errorNamePrefix:r}=t,{portalItem:e}=a;if(!e)throw new c(`${r}:portal-item-not-set`,y(a,"requires the portalItem property to be set"));if(!e.loaded)throw new c(`${r}:portal-item-not-loaded`,y(a,"cannot be saved to a portal item that does not exist or is inaccessible"));w({...t,item:e})}function E(t){const{newItem:a,itemType:r}=t;let e=h.from(a);return e.id&&(e=e.clone(),e.id=null),e.type??=r,e.portal??=P.getDefault(),w({...t,item:e}),e}function I(t){return x(t,"portal-item")}async function $(t,a,r){"beforeSave"in t&&typeof t.beforeSave=="function"&&await t.beforeSave();const e=t.write({},a);return await Promise.all(a.resources?.pendingOperations??[]),b(a,{errorName:"layer-write:unsupported"},r),e}function v(t){N(t,S.JSAPI),t.typeKeywords&&(t.typeKeywords=t.typeKeywords.filter((a,r,e)=>e.indexOf(a)===r))}async function U(t,a,r){const e=t.portal;await e.signIn(),await e.user.addItem({item:t,data:a,folder:r?.folder})}async function C(t,a){const{layer:r,createItemData:e,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=t;await d(t),J(t);const o=r.portalItem,l=i?i(o):I(o),f=await $(r,l,{...a,supplementalUnsupportedErrors:p}),m=await e({layer:r,layerJSON:f},o);return await n?.(r,o,m),v(o),await o.update({data:m}),u(l),await s?.(o,l),o}async function D(t,a){const{layer:r,createItemData:e,createJSONContext:i,setItemProperties:n,saveResources:s,supplementalUnsupportedErrors:p}=t;await d(t);const o=E(t),l=i?i(o):I(o),f=await $(r,l,{...a,supplementalUnsupportedErrors:p}),m=await e({layer:r,layerJSON:f},o);return await n(r,o,m),v(o),await U(o,m,a),r.portalItem=o,u(l),await s?.(o,l),o}export{D as $,C as P};
