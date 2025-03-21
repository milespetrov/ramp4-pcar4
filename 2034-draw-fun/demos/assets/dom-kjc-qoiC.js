import{C as R}from"./jsxFactory-DfIuU6I3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 *//*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var D=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],m=D.join(","),L=typeof Element>"u",d=L?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,p=!L&&Element.prototype.getRootNode?function(r){var t;return r==null||(t=r.getRootNode)===null||t===void 0?void 0:t.call(r)}:function(r){return r?.ownerDocument},T=function r(t,e){var n;e===void 0&&(e=!0);var a=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"inert"),u=a===""||a==="true",i=u||e&&t&&r(t.parentNode);return i},W=function(t){var e,n=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return n===""||n==="true"},k=function(t,e,n){if(T(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(m));return e&&d.call(t,m)&&a.unshift(t),a=a.filter(n),a},q=function r(t,e,n){for(var a=[],u=Array.from(t);u.length;){var i=u.shift();if(!T(i,!1))if(i.tagName==="SLOT"){var o=i.assignedElements(),s=o.length?o:i.children,l=r(s,!0,n);n.flatten?a.push.apply(a,l):a.push({scopeParent:i,candidates:l})}else{var f=d.call(i,m);f&&n.filter(i)&&(e||!t.includes(i))&&a.push(i);var c=i.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(i),y=!T(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(i));if(c&&y){var v=r(c===!0?i.children:c.children,!0,n);n.flatten?a.push.apply(a,v):a.push({scopeParent:i,candidates:v})}else u.unshift.apply(u,i.children)}}return a},B=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},M=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||W(t))&&!B(t)?0:t.tabIndex},z=function(t,e){var n=M(t);return n<0&&e&&!B(t)?0:n},X=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},P=function(t){return t.tagName==="INPUT"},Y=function(t){return P(t)&&t.type==="hidden"},Z=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(n){return n.tagName==="SUMMARY"});return e},H=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]},K=function(t){if(!t.name)return!0;var e=t.form||p(t),n=function(o){return e.querySelectorAll('input[type="radio"][name="'+o+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=n(window.CSS.escape(t.name));else try{a=n(t.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var u=H(a,t.form);return!u||u===t},J=function(t){return P(t)&&t.type==="radio"},Q=function(t){return J(t)&&!K(t)},V=function(t){var e,n=t&&p(t),a=(e=n)===null||e===void 0?void 0:e.host,u=!1;if(n&&n!==t){var i,o,s;for(u=!!((i=a)!==null&&i!==void 0&&(o=i.ownerDocument)!==null&&o!==void 0&&o.contains(a)||t!=null&&(s=t.ownerDocument)!==null&&s!==void 0&&s.contains(t));!u&&a;){var l,f,c;n=p(a),a=(l=n)===null||l===void 0?void 0:l.host,u=!!((f=a)!==null&&f!==void 0&&(c=f.ownerDocument)!==null&&c!==void 0&&c.contains(a))}}return u},F=function(t){var e=t.getBoundingClientRect(),n=e.width,a=e.height;return n===0&&a===0},_=function(t,e){var n=e.displayCheck,a=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var u=d.call(t,"details>summary:first-of-type"),i=u?t.parentElement:t;if(d.call(i,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof a=="function"){for(var o=t;t;){var s=t.parentElement,l=p(t);if(s&&!s.shadowRoot&&a(s)===!0)return F(t);t.assignedSlot?t=t.assignedSlot:!s&&l!==t.ownerDocument?t=l.host:t=s}t=o}if(V(t))return!t.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return F(t);return!1},tt=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var n=0;n<e.children.length;n++){var a=e.children.item(n);if(a.tagName==="LEGEND")return d.call(e,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}e=e.parentElement}return!1},A=function(t,e){return!(e.disabled||T(e)||Y(e)||_(e,t)||Z(e)||tt(e))},I=function(t,e){return!(Q(e)||M(e)<0||!A(t,e))},rt=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},et=function r(t){var e=[],n=[];return t.forEach(function(a,u){var i=!!a.scopeParent,o=i?a.scopeParent:a,s=z(o,i),l=i?r(a.candidates):o;s===0?i?e.push.apply(e,l):e.push(o):n.push({documentOrder:u,tabIndex:s,item:a,isScope:i,content:l})}),n.sort(X).reduce(function(a,u){return u.isScope?a.push.apply(a,u.content):a.push(u.content),a},[]).concat(e)},nt=function(t,e){e=e||{};var n;return e.getShadowRoot?n=q([t],e.includeContainer,{filter:I.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:rt}):n=k(t,e.includeContainer,I.bind(null,e)),et(n)},wt=function(t,e){e=e||{};var n;return e.getShadowRoot?n=q([t],e.includeContainer,{filter:A.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):n=k(t,e.includeContainer,A.bind(null,e)),n},Et=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return d.call(t,m)===!1?!1:I(e,t)},at=D.concat("iframe").join(","),Ct=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return d.call(t,at)===!1?!1:A(e,t)};const it={getShadowRoot:!0};function It(r){return Array.isArray(r)?r:Array.from(r)}function xt(r){return N(r,`.${R.darkMode}, .${R.lightMode}`)?.classList.contains("calcite-mode-dark")?"dark":"light"}function Nt(r){const t="dir",e=`[${t}]`,n=N(r,e);return n?n.getAttribute(t):"ltr"}function x(r){return r.getRootNode()}function Rt(r){const t=x(r);return"host"in t?t:null}function U(r){return r.host||null}function ut(r,{selector:t,id:e}){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const n=x(r);return(e?"getElementById"in n?n.getElementById(e):null:t?n.querySelector(t):null)||ut(U(n),{selector:t,id:e})}function N(r,t){return r?r.closest(t)||N(U(x(r)),t):null}function ot(r,t){return $(r,t)}function $(r,t){if(!r)return;const e=t(r);if(e!==void 0)return e;const{parentNode:n}=r;return $(n instanceof ShadowRoot?n.host:n,t)}function Ft(r,t){return!!ot(t,e=>e===r?!0:void 0)}function st(r){return typeof r?.setFocus=="function"}async function lt(r){if(r)return st(r)?r.setFocus():r.focus()}function ct(r){if(r)return nt(r,it)[0]??r}function Ot(r){ct(r)?.focus()}const g=":not([slot])";function Dt(r,t,e){t&&!Array.isArray(t)&&typeof t!="string"&&(e=t,t=null);const n=t?Array.isArray(t)?t.map(a=>`[slot="${a}"]`).join(","):`[slot="${t}"]`:g;return e?.all?ft(r,n,e):dt(r,n,e)}function j(r,t){return r?Array.from(r.children||[]).filter(e=>e?.matches(t)):[]}function ft(r,t,e){let n=t===g?j(r,g):Array.from(r.querySelectorAll(t));n=e&&e.direct===!1?n:n.filter(u=>u.parentElement===r),n=e?.matches?n.filter(u=>u?.matches(e.matches)):n;const a=e?.selector;return a?n.map(u=>Array.from(u.querySelectorAll(a))).reduce((u,i)=>[...u,...i],[]).filter(u=>!!u):n}function dt(r,t,e){let n=t===g?j(r,g)[0]||null:r.querySelector(t);n=e&&e.direct===!1||n?.parentElement===r?n:null,n=e?.matches?n?.matches(e.matches)?n:null:n;const a=e?.selector;return a?n?.querySelector(a):n}function Lt(r,t){return Array.from(r.children).filter(e=>e.matches(t))}function vt(r,t){return r.filter(e=>e.matches(t))}function kt(r,t,e){if(typeof t=="string"&&t!=="")return t;if(t==="")return r[e]}function qt(r){return(!!r).toString()}function Bt(r){return yt(r)||bt(r)}function ht(r){return gt(r).filter(t=>t.nodeType===Node.TEXT_NODE).map(t=>t.textContent).join("").trim()}function bt(r){return!!ht(r)}function gt(r){return r.currentTarget.assignedNodes({flatten:!0})}function yt(r){return!!St(r).length}function St(r,t){return mt(r.target,t)}function mt(r,t){const e=r.assignedElements({flatten:!0});return t?vt(e,t):e}function Mt(r){return!!(r.isPrimary&&r.button===0)}function Pt(r){return r.detail===0}const Ut=(r,t,e,n=!0)=>{const a=r.indexOf(t),u=a===0,i=a===r.length-1;n&&(e=e==="previous"&&u?"last":e==="next"&&i?"first":e);let o;return e==="previous"?o=r[a-1]||r[n?r.length-1:a]:e==="next"?o=r[a+1]||r[n?0:a]:e==="last"?o=r[r.length-1]:o=r[0],lt(o),o};function $t(r,t){if(r.parentNode!==t.parentNode)return!1;const e=Array.from(r.parentNode.children);return e.indexOf(r)<e.indexOf(t)}async function jt(r,t,e,n){return pt(r,t,"transition",e,n)}async function pt(r,t,e,n,a){const u=window.getComputedStyle(r),i=u.transitionDuration,o=u.transitionProperty,s=i.split(","),f=o.split(",").map(S=>S.trim()).indexOf(t),c=s[f]??s[0];function y(){requestAnimationFrame(()=>{n?.(),requestAnimationFrame(()=>a?.())})}if(c==="0s"){y();return}const v="transitionstart",w="transitionend",E="transitioncancel";return new Promise(S=>{const G=window.setTimeout(()=>{r.removeEventListener(v,C),r.removeEventListener(w,h),r.removeEventListener(E,h),y(),S()},parseFloat(c)*1e3);r.addEventListener(v,C),r.addEventListener(w,h),r.addEventListener(E,h);function C(b){b.target===r&&O(b)===t&&(window.clearTimeout(G),r.removeEventListener(v,C),n?.())}function h(b){b.target===r&&O(b)===t&&(r.removeEventListener(w,h),r.removeEventListener(E,h),a?.(),S())}})}function Tt(r){return"propertyName"in r}function O(r){return Tt(r)?r.propertyName:r.animationName}export{It as A,Lt as B,mt as C,Ft as a,St as b,N as c,lt as d,Bt as e,Ot as f,Nt as g,Mt as h,$t as i,kt as j,Dt as k,ct as l,Rt as m,Ut as n,it as o,Ct as p,ut as q,nt as r,yt as s,qt as t,wt as u,Et as v,jt as w,M as x,Pt as y,xt as z};
