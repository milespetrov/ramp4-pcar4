const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-Bg8PVGlE.js","./main-CdsSyLmf.js","./preload-helper-ExcqyqRp.js","./main-K0GaKQ3z.css","./screen-B_KOI8ka.css"])))=>i.map(i=>d[i]);
import{_ as i}from"./preload-helper-ExcqyqRp.js";import{dM as l,dN as r,e2 as m,dR as c,dV as b,dW as d,e0 as v,dU as u,dX as a,F as f,f9 as h,fa as _,fb as g}from"./main-CdsSyLmf.js";const x=l({__name:"nav-button",setup(s){const{t:e}=r(),p=m("iApi"),n=()=>p?.panel.toggle("basemap");return(A,t)=>{const o=c("mapnav-button");return u(),b(o,{onClickFunction:n,tooltip:v(e)("basemap.title")},{default:d(()=>t[0]||(t[0]=[a("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"})],-1)])),_:1},8,["tooltip"])}}}),w={en:{"basemap.select":"Select basemap","basemap.title":"Basemap"},fr:{"basemap.select":"Sélectionner la carte de base","basemap.title":"Carte de base"}};class B extends f{added(){this.$iApi.component("basemap-nav-button",x),this.$iApi.panel.register({id:"basemap",config:{screens:{"basemap-component":()=>h(i(()=>import("./screen-Bg8PVGlE.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url))},button:{tooltip:"basemap.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"basemap.title"}},{i18n:{messages:w}}),this.handlePanelTeleports(["basemap"])}removed(){this.$iApi.fixture.exists("appbar")&&_(this.$vApp.$pinia).removeButton("basemap"),this.$iApi.fixture.exists("mapnav")&&g(this.$vApp.$pinia).removeItem("basemap"),this.$iApi.panel.remove("basemap")}}export{B as default};
