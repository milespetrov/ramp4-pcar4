import{h as A}from"./themeUtils-Djn6oTCc.js";import{q as w,c as f}from"./dom-N58V0tYi.js";const q=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"];function F(t){return`${t.split("-").map((e,i)=>i===0?e:`${e[0].toUpperCase()}${e.slice(1)}`).join("")}${q.includes(t)?"Input":"Change"}`}const m="hidden-form-input";function p(t){return"checked"in t}const h=new WeakMap,E=new WeakSet;function S(t,e){if(f(e.parentElement,"[form]"))return!0;const i="calciteInternalFormComponentRegister";let n=!1;return t.addEventListener(i,a=>{n=a.composedPath().some(s=>E.has(s)),a.stopPropagation()},{once:!0}),e.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),n}function $(t,{status:e,message:i,icon:n}){"status"in t&&(t.status=e),"validationIcon"in t&&typeof t.validationIcon!="string"&&(t.validationIcon=n),"validationMessage"in t&&!t.validationMessage&&(t.validationMessage=i)}function g(t){return t.nodeName==="CALCITE-RADIO-BUTTON"?f(t,"calcite-radio-button-group"):t}const x=new CustomEvent("calciteInvalid",{bubbles:!0,composed:!0});function b(t){const e=t?.target,i=e?.validationMessage,n=g(e?.parentElement);if(!n)return;const a=n?.nodeName?.toLowerCase(),s=a?.split("-");if(s.length<2||s[0]!=="calcite")return;t?.preventDefault(),"validity"in n&&(n.validity=e?.validity),n.dispatchEvent(x),$(n,{message:i,icon:!0,status:"invalid"});const c=F(a);n.addEventListener(c,()=>{"status"in n&&(n.status="idle"),"validationIcon"in n&&!n.validationIcon&&(n.validationIcon=!1),"validationMessage"in n&&n.validationMessage===i&&(n.validationMessage=""),"validity"in n&&(n.validity=e?.validity)},{once:!0})}function D(t){const{formEl:e}=t;return e?(e.addEventListener("invalid",b,!0),e.requestSubmit(),e.removeEventListener("invalid",b,!0),requestAnimationFrame(()=>{const i=e.querySelectorAll("[status=invalid]");for(const n of i)if(n?.validationMessage){n?.setFocus();break}}),!0):!1}function V(t){t.formEl?.reset()}function H(t){const{el:e,value:i}=t,n=I(t);if(!n||S(n,e))return;t.formEl=n,t.defaultValue=i,p(t)&&(t.defaultChecked=t.checked);const a=(t.onFormReset||R).bind(t);n.addEventListener("reset",a),h.set(t.el,a),E.add(e)}function I(t){const{el:e,form:i}=t;return i?w(e,{id:i}):f(e,"form")}function R(){if("status"in this&&(this.status="idle"),"validationIcon"in this&&(this.validationIcon=!1),"validationMessage"in this&&(this.validationMessage=""),p(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function N(t){const{el:e,formEl:i}=t;if(!i)return;const n=h.get(e);i.removeEventListener("reset",n),h.delete(e),t.formEl=null,E.delete(e)}const y="calciteInternalHiddenInputInput",k=t=>{t.target.dispatchEvent(new CustomEvent(y,{bubbles:!0}))},C=t=>t.removeEventListener("input",k);function O(t){const{el:e,formEl:i,name:n,value:a}=t,{ownerDocument:s}=e,c=e.querySelectorAll(`input[slot="${m}"]`);if(!i||!n){c.forEach(o=>{C(o),o.remove()});return}const v=Array.isArray(a)?a:[a],l=[],d=new Set;c.forEach(o=>{const r=v.find(L=>L==o.value);r!=null?(d.add(r),M(t,o,r)):l.push(o)});let u;v.forEach(o=>{if(d.has(o))return;let r=l.pop();r||(r=s.createElement("input"),r.slot=m),u||(u=s.createDocumentFragment()),u.append(r),r.addEventListener("input",k),M(t,r,o)}),u&&e.append(u),l.forEach(o=>{C(o),o.remove()})}function M(t,e,i){const{defaultValue:n,disabled:a,form:s,name:c,required:v}=t;e.defaultValue=n,e.disabled=a,e.name=c,e.required=v,e.tabIndex=-1,s?e.setAttribute("form",s):e.removeAttribute("form"),p(t)?(e.checked=t.checked,e.defaultChecked=t.defaultChecked,e.value=t.checked?i||"on":""):e.value=i||"",t.syncHiddenFormInput?.(e);const l=g(t.el);if(l&&"validity"in l)for(const d in{...e?.validity})l.validity[d]=e.validity[d]}const P=({component:t})=>(O(t),A("slot",{name:m}));export{P as H,H as c,N as d,I as f,y as i,V as r,D as s};
