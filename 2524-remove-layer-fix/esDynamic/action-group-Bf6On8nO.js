import{p as h,H as g,h as t}from"./themeUtils-BlnWeta1.js";import{c as f,d as v}from"./conditionalSlot-DIFBJYPV.js";import{c as b,s as x,a as y}from"./loadable-CAqhMRhk.js";import{c as M,d as k}from"./locale-TPNJmwyI.js";import{u as O,c as C,d as P,s as A}from"./t9n-B6PyLLs5.js";import{S as i,d as E,a as L}from"./action-menu-iiEmdJya.js";import{s as w}from"./dom-N58V0tYi.js";import{d as z}from"./action-Dm3NSznp.js";import{d as F}from"./icon-B17HO1EY.js";import{d as S}from"./loader-Dbz6PPTt.js";const o={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},H={menu:"ellipsis"},_={container:"container"},T=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}',D=T,c=h(class extends g{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=w(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.menuFlipPlacements=void 0,this.menuPlacement=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){O(this,this.effectiveLocale)}async setFocus(){await b(this),this.el.focus()}connectedCallback(){M(this),C(this),f(this)}disconnectedCallback(){k(this),P(this),v(this)}async componentWillLoad(){x(this),await A(this)}componentDidLoad(){y(this)}renderMenu(){const{expanded:e,menuOpen:r,scale:a,layout:s,messages:n,overlayPositioning:u,hasMenuActions:d,menuFlipPlacements:m,menuPlacement:p}=this;return t("calcite-action-menu",{expanded:e,flipPlacements:m??(s==="horizontal"?["top","bottom"]:["left","right"]),hidden:!d,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:r,overlayPositioning:u,placement:p??(s==="horizontal"?"bottom-start":"leading-start"),scale:a},t("calcite-action",{icon:H.menu,scale:a,slot:i.trigger,text:n.more,textEnabled:e}),t("slot",{name:o.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),t("slot",{name:o.menuTooltip,slot:i.tooltip}))}render(){return t("div",{key:"8143606c5745053f15140f34ff5ea375a683325f","aria-label":this.label,class:_.container,role:"group"},t("slot",{key:"e8c2821b9ce2e9d0293478989fc31d24f043f9c3"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return D}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],menuFlipPlacements:[16],menuPlacement:[513,"menu-placement"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function l(){typeof customElements>"u"||["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,c);break;case"calcite-action":customElements.get(e)||z();break;case"calcite-action-menu":customElements.get(e)||L();break;case"calcite-icon":customElements.get(e)||F();break;case"calcite-loader":customElements.get(e)||S();break;case"calcite-popover":customElements.get(e)||E();break}})}l();export{c as A,o as S,l as d};
