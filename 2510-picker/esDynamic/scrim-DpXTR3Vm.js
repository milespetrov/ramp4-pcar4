import{p as o,H as r,h as s}from"./themeUtils-7roQfb6P.js";import{c as l,d}from"./locale-kkJVSyyU.js";import{u as h,c as m,s as f,d as g}from"./t9n-By-xkfzG.js";import{c as u}from"./observers-BlyXQFXZ.js";import{d as v}from"./dom-N58V0tYi.js";import{d as b}from"./loader-DWzJ8u4K.js";const i={scrim:"scrim",content:"content"},a={s:72,l:480},p=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",y=p,C=o(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=u("resize",()=>this.handleResize()),this.handleDefaultSlotChange=e=>{this.hasContent=v(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){h(this,this.effectiveLocale)}connectedCallback(){l(this),m(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await f(this)}disconnectedCallback(){d(this),g(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:t,messages:n}=this;return s("div",{key:"286b03bb4a18b45f1b6914684a5178e952a44127",class:i.scrim},t?s("calcite-loader",{label:n.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,s("div",{key:"0f8cd111720239b204d0d201610c4145d5616753",class:i.content,hidden:!e},s("slot",{key:"fe7bbced9871c9179971da0ef7ca07ea1c9ac33e",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<a.s?"s":e>=a.l?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return y}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function c(){typeof customElements>"u"||["calcite-scrim","calcite-loader"].forEach(e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,C);break;case"calcite-loader":customElements.get(e)||b();break}})}c();export{c as d};
