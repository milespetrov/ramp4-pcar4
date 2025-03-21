import{h as k}from"./themeUtils-DDjIa1tx.js";import{q as M,c as h}from"./dom-BveoWHh2.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const S=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];function L(e){return`${e.split("-").map((n,a)=>a===0?n:`${n[0].toUpperCase()}${n.slice(1)}`).join("")}${S.includes(e)?"Input":"Change"}`}const v="hidden-form-input";function E(e){return"checked"in e}const m=new WeakMap,g=new WeakSet;function R(e,t){if(h(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(n,o=>{a=o.composedPath().some(d=>g.has(d)),o.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),a}function A(e,{status:t,message:i,icon:n}){"status"in e&&(e.status=t),"validationIcon"in e&&typeof e.validationIcon!="string"&&(e.validationIcon=n),"validationMessage"in e&&!e.validationMessage&&(e.validationMessage=i)}function F(e){return e.nodeName==="CALCITE-RADIO-BUTTON"?h(e,"calcite-radio-button-group"):e}const H=new CustomEvent("calciteInvalid",{bubbles:!0,composed:!0});function I(e){const t=e?.target,i=t?.validationMessage,n=F(t?.parentElement);if(!n)return;const a=n?.nodeName?.toLowerCase(),o=a?.split("-");if(o.length<2||o[0]!=="calcite")return;e?.preventDefault(),"validity"in n&&(n.validity=t?.validity),n.dispatchEvent(H),A(n,{message:i,icon:!0,status:"invalid"});const d=L(a);n.addEventListener(d,()=>{"status"in n&&(n.status="idle"),"validationIcon"in n&&!n.validationIcon&&(n.validationIcon=!1),"validationMessage"in n&&n.validationMessage===i&&(n.validationMessage=""),"validity"in n&&(n.validity=t?.validity)},{once:!0})}function x(e){const{formEl:t}=e;return t?(t.addEventListener("invalid",I,!0),t.requestSubmit(),t.removeEventListener("invalid",I,!0),requestAnimationFrame(()=>{const i=t.querySelectorAll("[status=invalid]");for(const n of i)if(n?.validationMessage){n?.setFocus();break}}),!0):!1}function W(e){e.formEl?.reset()}function $(e){const{el:t,value:i}=e,n=V(e);if(!n||R(n,t))return;e.formEl=n,e.defaultValue=i,E(e)&&(e.defaultChecked=e.checked);const a=(e.onFormReset||w).bind(e);n.addEventListener("reset",a),m.set(e.el,a),g.add(t)}function V(e){const{el:t,form:i}=e;return i?M(t,{id:i}):h(t,"form")}function w(){if("status"in this&&(this.status="idle"),"validationIcon"in this&&(this.validationIcon=!1),"validationMessage"in this&&(this.validationMessage=""),E(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function D(e){const{el:t,formEl:i}=e;if(!i)return;const n=m.get(t);i.removeEventListener("reset",n),m.delete(t),e.formEl=null,g.delete(t)}const q="calciteInternalHiddenInputInput",b=e=>{e.target.dispatchEvent(new CustomEvent(q,{bubbles:!0}))},C=e=>e.removeEventListener("input",b);function P(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:o}=t,d=t.querySelectorAll(`input[slot="${v}"]`);if(!i||!n){d.forEach(s=>{C(s),s.remove()});return}const f=Array.isArray(a)?a:[a],l=[],c=new Set;d.forEach(s=>{const r=f.find(y=>y==s.value);r!=null?(c.add(r),p(e,s,r)):l.push(s)});let u;f.forEach(s=>{if(c.has(s))return;let r=l.pop();r||(r=o.createElement("input"),r.slot=v),u||(u=o.createDocumentFragment()),u.append(r),r.addEventListener("input",b),p(e,r,s)}),u&&t.append(u),l.forEach(s=>{C(s),s.remove()})}function p(e,t,i){const{defaultValue:n,disabled:a,form:o,name:d,required:f}=e;t.defaultValue=n,t.disabled=a,t.name=d,t.required=f,t.tabIndex=-1,o?t.setAttribute("form",o):t.removeAttribute("form"),E(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t);const l=F(e.el);if(l&&"validity"in l)for(const c in{...t?.validity})l.validity[c]=t.validity[c]}const O=({component:e})=>(P(e),k("slot",{name:v}));export{O as H,$ as c,D as d,V as f,q as i,W as r,x as s};
