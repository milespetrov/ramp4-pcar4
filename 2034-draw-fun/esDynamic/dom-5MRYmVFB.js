import{C as L}from"./jsxFactory-Ce1bY6f0.js";var T=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],w=T.join(","),D=typeof Element>"u",d=D?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,S=!D&&Element.prototype.getRootNode?function(t){var n;return t==null||(n=t.getRootNode)===null||n===void 0?void 0:n.call(t)}:function(t){return t?.ownerDocument},E=function t(n,e){var r;e===void 0&&(e=!0);var o=n==null||(r=n.getAttribute)===null||r===void 0?void 0:r.call(n,"inert"),i=o===""||o==="true",a=i||e&&n&&t(n.parentNode);return a},K=function(t){var n,e=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"contenteditable");return e===""||e==="true"},O=function(t,n,e){if(E(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(w));return n&&d.call(t,w)&&r.unshift(t),r=r.filter(e),r},q=function t(n,e,r){for(var o=[],i=Array.from(n);i.length;){var a=i.shift();if(!E(a,!1))if(a.tagName==="SLOT"){var u=a.assignedElements(),l=u.length?u:a.children,c=t(l,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:a,candidates:c})}else{var s=d.call(a,w);s&&r.filter(a)&&(e||!n.includes(a))&&o.push(a);var f=a.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(a),h=!E(f,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(f&&h){var p=t(f===!0?a.children:f.children,!0,r);r.flatten?o.push.apply(o,p):o.push({scopeParent:a,candidates:p})}else i.unshift.apply(i,a.children)}}return o},k=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},x=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||K(t))&&!k(t)?0:t.tabIndex},Q=function(t,n){var e=x(t);return e<0&&n&&!k(t)?0:e},W=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},F=function(t){return t.tagName==="INPUT"},Z=function(t){return F(t)&&t.type==="hidden"},tt=function(t){var n=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(e){return e.tagName==="SUMMARY"});return n},nt=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]},et=function(t){if(!t.name)return!0;var n=t.form||S(t),e=function(i){return n.querySelectorAll('input[type="radio"][name="'+i+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=e(window.CSS.escape(t.name));else try{r=e(t.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var o=nt(r,t.form);return!o||o===t},rt=function(t){return F(t)&&t.type==="radio"},ot=function(t){return rt(t)&&!et(t)},it=function(t){var n,e=t&&S(t),r=(n=e)===null||n===void 0?void 0:n.host,o=!1;if(e&&e!==t){var i,a,u;for(o=!!((i=r)!==null&&i!==void 0&&(a=i.ownerDocument)!==null&&a!==void 0&&a.contains(r)||t!=null&&(u=t.ownerDocument)!==null&&u!==void 0&&u.contains(t));!o&&r;){var l,c,s;e=S(r),r=(l=e)===null||l===void 0?void 0:l.host,o=!!((c=r)!==null&&c!==void 0&&(s=c.ownerDocument)!==null&&s!==void 0&&s.contains(r))}}return o},P=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return e===0&&r===0},at=function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var o=d.call(t,"details>summary:first-of-type"),i=o?t.parentElement:t;if(d.call(i,"details:not([open]) *"))return!0;if(!e||e==="full"||e==="legacy-full"){if(typeof r=="function"){for(var a=t;t;){var u=t.parentElement,l=S(t);if(u&&!u.shadowRoot&&r(u)===!0)return P(t);t.assignedSlot?t=t.assignedSlot:!u&&l!==t.ownerDocument?t=l.host:t=u}t=a}if(it(t))return!t.getClientRects().length;if(e!=="legacy-full")return!0}else if(e==="non-zero-area")return P(t);return!1},ut=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if(r.tagName==="LEGEND")return d.call(n,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}n=n.parentElement}return!1},N=function(t,n){return!(n.disabled||E(n)||Z(n)||at(n,t)||tt(n)||ut(n))},C=function(t,n){return!(ot(n)||x(n)<0||!N(t,n))},lt=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},ct=function t(n){var e=[],r=[];return n.forEach(function(o,i){var a=!!o.scopeParent,u=a?o.scopeParent:o,l=Q(u,a),c=a?t(o.candidates):u;l===0?a?e.push.apply(e,c):e.push(u):r.push({documentOrder:i,tabIndex:l,item:o,isScope:a,content:c})}),r.sort(W).reduce(function(o,i){return i.isScope?o.push.apply(o,i.content):o.push(i.content),o},[]).concat(e)},$=function(t,n){n=n||{};var e;return n.getShadowRoot?e=q([t],n.includeContainer,{filter:C.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:lt}):e=O(t,n.includeContainer,C.bind(null,n)),ct(e)},st=function(t,n){n=n||{};var e;return n.getShadowRoot?e=q([t],n.includeContainer,{filter:N.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):e=O(t,n.includeContainer,N.bind(null,n)),e},ft=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return d.call(t,w)===!1?!1:C(n,t)},dt=T.concat("iframe").join(","),pt=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return d.call(t,dt)===!1?!1:N(n,t)};const M={getShadowRoot:!0};function mt(t){return Array.isArray(t)?t:Array.from(t)}function ht(t){return A(t,`.${L.darkMode}, .${L.lightMode}`)?.classList.contains("calcite-mode-dark")?"dark":"light"}function vt(t){const n="dir",e=`[${n}]`,r=A(t,e);return r?r.getAttribute(n):"ltr"}function I(t){return t.getRootNode()}function yt(t){const n=I(t);return"host"in n?n:null}function j(t){return t.host||null}function B(t,{selector:n,id:e}){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const r=I(t);return(e?"getElementById"in r?r.getElementById(e):null:n?r.querySelector(n):null)||B(j(r),{selector:n,id:e})}function A(t,n){return t?t.closest(n)||A(j(I(t)),n):null}function gt(t,n){return U(t,n)}function U(t,n){if(!t)return;const e=n(t);if(e!==void 0)return e;const{parentNode:r}=t;return U(r instanceof ShadowRoot?r.host:r,n)}function wt(t,n){return!!gt(n,e=>e===t?!0:void 0)}function St(t){return typeof t?.setFocus=="function"}async function z(t){if(t)return St(t)?t.setFocus():t.focus()}function X(t){if(t)return $(t,M)[0]??t}function Et(t){X(t)?.focus()}const y=":not([slot])";function Nt(t,n,e){n&&!Array.isArray(n)&&typeof n!="string"&&(e=n,n=null);const r=n?Array.isArray(n)?n.map(o=>`[slot="${o}"]`).join(","):`[slot="${n}"]`:y;return e?.all?At(t,r,e):bt(t,r,e)}function G(t,n){return t?Array.from(t.children||[]).filter(e=>e?.matches(n)):[]}function At(t,n,e){let r=n===y?G(t,y):Array.from(t.querySelectorAll(n));r=e&&e.direct===!1?r:r.filter(i=>i.parentElement===t),r=e?.matches?r.filter(i=>i?.matches(e.matches)):r;const o=e?.selector;return o?r.map(i=>Array.from(i.querySelectorAll(o))).reduce((i,a)=>[...i,...a],[]).filter(i=>!!i):r}function bt(t,n,e){let r=n===y?G(t,y)[0]||null:t.querySelector(n);r=e&&e.direct===!1||r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;const o=e?.selector;return o?r?.querySelector(o):r}function Rt(t,n){return Array.from(t.children).filter(e=>e.matches(n))}function xt(t,n){return t.filter(e=>e.matches(n))}function Ct(t,n,e){if(typeof n=="string"&&n!=="")return n;if(n==="")return t[e]}function It(t){return(!!t).toString()}function Lt(t){return V(t)||Dt(t)}function Tt(t){return Ot(t).filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent).join("").trim()}function Dt(t){return!!Tt(t)}function Ot(t){return t.currentTarget.assignedNodes({flatten:!0})}function V(t){return!!Y(t).length}function Y(t,n){return _(t.target,n)}function _(t,n){const e=t.assignedElements({flatten:!0});return n?xt(e,n):e}function qt(t){return!!(t.isPrimary&&t.button===0)}function kt(t){return t.detail===0}const Ft=(t,n,e,r=!0)=>{const o=t.indexOf(n),i=o===0,a=o===t.length-1;r&&(e=e==="previous"&&i?"last":e==="next"&&a?"first":e);let u;return e==="previous"?u=t[o-1]||t[r?t.length-1:o]:e==="next"?u=t[o+1]||t[r?0:o]:e==="last"?u=t[t.length-1]:u=t[0],z(u),u};function Pt(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}async function $t(t,n,e,r){return Mt(t,n,"transition",e,r)}async function Mt(t,n,e,r,o){const i=window.getComputedStyle(t),a=i.transitionDuration,u=i.transitionProperty,l=a.split(","),c=u.split(",").map(g=>g.trim()).indexOf(n),s=l[c]??l[0];function f(){requestAnimationFrame(()=>{r?.(),requestAnimationFrame(()=>o?.())})}if(s==="0s"){f();return}const h="transitionstart",p="transitionend",b="transitioncancel";return new Promise(g=>{const J=window.setTimeout(()=>{t.removeEventListener(h,R),t.removeEventListener(p,m),t.removeEventListener(b,m),f(),g()},parseFloat(s)*1e3);t.addEventListener(h,R),t.addEventListener(p,m),t.addEventListener(b,m);function R(v){v.target===t&&H(v)===n&&(window.clearTimeout(J),t.removeEventListener(h,R),r?.())}function m(v){v.target===t&&H(v)===n&&(t.removeEventListener(p,m),t.removeEventListener(b,m),o?.(),g())}})}function jt(t){return"propertyName"in t}function H(t){return jt(t)?t.propertyName:t.animationName}export{mt as A,Rt as B,_ as C,wt as a,Y as b,A as c,z as d,Lt as e,Et as f,vt as g,qt as h,Pt as i,Ct as j,Nt as k,X as l,yt as m,Ft as n,M as o,pt as p,B as q,$ as r,V as s,It as t,st as u,ft as v,$t as w,x,kt as y,ht as z};
