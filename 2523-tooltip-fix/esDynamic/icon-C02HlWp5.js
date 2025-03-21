import{p as g,H as x,h as l,a as y,i as w,g as z}from"./themeUtils-_EP_UE6e.js";import{g as k,t as D}from"./dom-N58V0tYi.js";import{c as I}from"./observers-Cgngpny0.js";const $={icon:"icon",flipRtl:"flip-rtl"},p={},h={},d={s:16,m:24,l:32};function u({icon:t,scale:i}){const s=d[i],e=C(t),n=e.charAt(e.length-1)==="F";return`${n?e.substring(0,e.length-1):e}${s}${n?"F":""}`}async function O(t){const i=u(t),s=b(i);if(s)return s;h[i]||(h[i]=fetch(z(`./assets/icon/${i}.json`)).then(n=>n.json()).catch(()=>(console.error(`"${i}" is not a valid calcite-ui-icon name`),"")));const e=await h[i];return p[i]=e,e}function P(t){return b(u(t))}function b(t){return p[t]}function C(t){const i=!isNaN(Number(t.charAt(0))),s=t.split("-");if(s.length>0){const e=/[a-z]/i;t=s.map((n,r)=>n.replace(e,function(c,a){return r===0&&a===0?c:c.toUpperCase()})).join("")}return i?`i${t}`:t}const E=":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}",R=E,f=g(class extends x{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.visible||this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}render(){const{el:t,flipRtl:i,pathData:s,scale:e,textLabel:n}=this,r=k(t),c=d[e],a=!!n,v=[].concat(s||"");return l(y,{key:"724265acdc6fb528bf7b25d7ec445c73a63f4c8e","aria-hidden":D(!a),"aria-label":a?n:null,role:a?"img":null},l("svg",{key:"864ee2d80bebd282543ba5d94c57f84b48a6204d","aria-hidden":"true",class:{[$.flipRtl]:r==="rtl"&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${c} ${c}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},v.map(o=>typeof o=="string"?l("path",{d:o}):l("path",{d:o.d,opacity:"opacity"in o?o.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:i,visible:s}=this;if(!w()||!t||!s)return;const e={icon:t,scale:i},n=P(e)||await O(e);t===this.icon&&(this.pathData=n)}waitUntilVisible(t){if(this.intersectionObserver=I("intersection",i=>{i.forEach(s=>{s.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return R}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function m(){typeof customElements>"u"||["calcite-icon"].forEach(t=>{switch(t){case"calcite-icon":customElements.get(t)||customElements.define(t,f);break}})}m();export{f as I,m as d};
