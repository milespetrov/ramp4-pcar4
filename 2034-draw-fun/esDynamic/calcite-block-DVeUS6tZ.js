import{p as z,H,c as r,h as e,a as L}from"./jsxFactory-Ce1bY6f0.js";import{c as O,d as P}from"./conditionalSlot-BKxFVDsh.js";import{s as p,f as I,k as g,t as u}from"./dom-5MRYmVFB.js";import{u as A,I as F}from"./interactive-BTS8l8Ii.js";import{c as M,d as T}from"./locale-CR3FOgfy.js";import{u as R,c as _,d as j,s as q}from"./t9n-nbbH2pVd.js";import{d as D,H as W}from"./popover-BCduv2P-.js";import{c as G,s as J,a as K}from"./loadable-c5HhWj_2.js";import{o as f}from"./openCloseComponent-D2NUQxl_.js";import{d as N}from"./floating-ui-C8rgdhJC.js";import{d as Q}from"./action-DKMwoKOM.js";import{d as U}from"./action-menu-BtkhIFnN.js";import{d as V}from"./handle-Dp__mINA.js";import{d as X}from"./icon-BoxJybxH.js";import{d as Y}from"./loader-BCGeVPaF.js";import{d as Z}from"./scrim-Bp_alPJ4.js";const s={content:"content",toggle:"toggle",header:"header"},i={actionsEnd:"actions-end",button:"button",container:"container",content:"content",contentStart:"content-start",controlContainer:"control-container",description:"description",header:"header",headerContainer:"header-container",headerHasText:"header--has-text",heading:"heading",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",iconEndContainer:"icon-end-container",invalid:"invalid",statusIcon:"status-icon",summary:"summary",title:"title",toggle:"toggle",toggleIcon:"toggle-icon",valid:"valid"},c={actionsEnd:"actions-end",contentStart:"content-start",control:"control",headerMenuActions:"header-menu-actions",icon:"icon"},m={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},$=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto;transition-duration:var(--calcite-animation-timing)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start}.header--has-text{padding:var(--calcite-spacing-md)}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu actions-end";grid-column:header-start/actions-end;grid-row:1/2}.content-start,.icon,.icon--start,.icon--end{margin-inline-end:var(--calcite-spacing-md)}.icon calcite-loader{margin-inline-end:var(--calcite-spacing-xxxs)}.icon--start,.icon--end{color:var(--calcite-color-text-3)}.actions-end{grid-area:actions-end}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:var(--calcite-font-family);outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.icon-end-container{display:flex;align-items:center;margin-inline-start:auto}.toggle-icon{align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-spacing-md)}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, var(--calcite-spacing-sm));padding-inline:var(--calcite-block-padding, var(--calcite-spacing-md))}.content-start{display:flex;align-items:center;color:var(--calcite-color-text-3)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}.actions-end{display:flex;align-items:stretch}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}`,ee=$,v=z(class extends H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockBeforeClose=r(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=r(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=r(this,"calciteBlockClose",6),this.calciteBlockOpen=r(this,"calciteBlockOpen",6),this.calciteBlockToggle=r(this,"calciteBlockToggle",6),this.openTransitionProp="margin-top",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.actionsEndSlotChangeHandler=t=>{this.hasEndActions=p(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=p(t)},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.loading=!1,this.menuFlipPlacements=void 0,this.menuPlacement=N,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasContentStart=!1,this.hasEndActions=!1}openHandler(){f(this)}onMessagesChange(){}async setFocus(){await G(this),I(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){R(this,this.effectiveLocale)}connectedCallback(){O(this),M(this),_(this),this.transitionEl=this.el}disconnectedCallback(){T(this),j(this),P(this)}async componentWillLoad(){await q(this),J(this),this.open&&f(this)}componentDidLoad(){K(this)}componentDidRender(){A(this)}renderScrim(){const{loading:t}=this,a=e("slot",null);return[t?e("calcite-scrim",{loading:t}):null,a]}renderLoaderStatusIcon(){const{loading:t,messages:a,status:n}=this,o=!!g(this.el,c.icon);return t?e("div",{class:i.icon,key:"loader"},e("calcite-loader",{inline:!0,label:a.loading})):n?e("div",{class:i.icon,key:"status-icon"},e("calcite-icon",{class:{[i.statusIcon]:!0,[i.valid]:n=="valid",[i.invalid]:n=="invalid"},icon:m[n],scale:"s"})):o?e("div",{class:i.icon,key:"icon-slot"},e("slot",{key:"icon-slot",name:c.icon})):null}renderActionsEnd(){return e("div",{class:i.actionsEnd},e("slot",{name:c.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}))}renderContentStart(){const{hasContentStart:t}=this;return e("div",{class:i.contentStart,hidden:!t},e("slot",{name:c.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderTitle(){const{heading:t,headingLevel:a,description:n}=this;return t||n?e("div",{class:i.title},e(W,{class:i.heading,level:a},t),n?e("div",{class:i.description},n):null):null}renderIcon(t){const{iconFlipRtl:a}=this,n=a==="both"||t==="start"?a==="start":a==="end",o=t==="start"?this.iconStart:this.iconEnd,l=t==="start"?i.iconStart:i.iconEnd;if(o)return e("calcite-icon",{class:l,flipRtl:n,icon:o,key:o,scale:"s"})}render(){const{collapsible:t,el:a,loading:n,open:o,heading:l,messages:d,description:k,menuFlipPlacements:x,menuPlacement:y}=this,C=o?d.collapse:d.expand,h=e("header",{key:"439d2866f9c5f13cfd8020812203a6cdf86c964f",class:{[i.header]:!0,[i.headerHasText]:!!(l||k)},id:s.header},this.renderIcon("start"),this.renderContentStart(),this.renderLoaderStatusIcon(),this.renderTitle()),E=!!g(a,c.control),w=!!g(a,c.headerMenuActions),S=o?m.opened:m.closed,B=e("div",{key:"a9721a9e145db53a215262190d2f7e46472edec6",class:i.headerContainer},this.dragHandle?e("calcite-handle",{label:l}):null,t?e("button",{"aria-controls":s.content,"aria-describedby":s.header,"aria-expanded":t?u(o):null,class:i.toggle,id:s.toggle,onClick:this.onHeaderClick,title:C},h,e("div",{class:i.iconEndContainer},this.renderIcon("end"),e("calcite-icon",{class:i.toggleIcon,icon:S,scale:"s"}))):this.iconEnd?e("div",null,h,e("div",{class:i.iconEndContainer},this.renderIcon("end"))):h,E?e("div",{"aria-labelledby":s.header,class:i.controlContainer},e("slot",{name:c.control})):null,w?e("calcite-action-menu",{flipPlacements:x??["top","bottom"],label:d.options,overlayPositioning:this.overlayPositioning,placement:y},e("slot",{name:c.headerMenuActions})):null,this.renderActionsEnd());return e(L,{key:"cdf7c69cc630466cfd4fb0078735f1e685fde512"},e(F,{key:"ae5b2a044fb337bb2c5c12bee2c9ed4b10e5c373",disabled:this.disabled},e("article",{key:"01c5c5499d62361cfe26d8b6a878034f0805787b","aria-busy":u(n),class:{[i.container]:!0}},B,e("section",{key:"e72271e369055329e4447d15c2deec25599332ec","aria-labelledby":s.toggle,class:i.content,hidden:!o,id:s.content},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ee}},[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],loading:[516],menuFlipPlacements:[16],menuPlacement:[513,"menu-placement"],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],defaultMessages:[32],effectiveLocale:[32],hasContentStart:[32],hasEndActions:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function b(){typeof customElements>"u"||["calcite-block","calcite-action","calcite-action-menu","calcite-handle","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-block":customElements.get(t)||customElements.define(t,v);break;case"calcite-action":customElements.get(t)||Q();break;case"calcite-action-menu":customElements.get(t)||U();break;case"calcite-handle":customElements.get(t)||V();break;case"calcite-icon":customElements.get(t)||X();break;case"calcite-loader":customElements.get(t)||Y();break;case"calcite-popover":customElements.get(t)||D();break;case"calcite-scrim":customElements.get(t)||Z();break}})}b();const te=v,ie=b;export{te as CalciteBlock,ie as defineCustomElement};
