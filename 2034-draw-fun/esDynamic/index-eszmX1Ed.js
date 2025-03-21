import{cW as y,cZ as s,cX as p,em as b,en as _,eB as x,iN as A,er as I,eK as u,ev as $,cY as c,ez as v,fI as h,eL as f,eA as w,ew as E,eu as z,iC as O,ex as Z,fK as C,r as B,eq as F,eG as V,eH as P,es as L,et as Y,eJ as T,F as j,ed as q}from"./main-CZM6prq-.js";import{u as K}from"./draw-store-ce32ltiY.js";const W={},G={class:"border-b p-0 self-center w-2/3"};function J(d,o){return s(),p("span",G)}const H=y(W,[["render",J]]),X=b({__name:"zoom-nav",setup(d){const{t:o}=_(),e=x("iApi"),a=A(400,!0,()=>e.geo.map.zoomIn()),t=A(400,!0,()=>e.geo.map.zoomOut());return(n,i)=>{const r=I("mapnav-button");return s(),p("div",null,[u(r,{onClickFunction:v(a),tooltip:v(o)("mapnav.zoomIn")},{default:$(()=>i[0]||(i[0]=[c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[c("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),c("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["onClickFunction","tooltip"]),u(H),u(r,{onClickFunction:v(t),tooltip:v(o)("mapnav.zoomOut")},{default:$(()=>i[1]||(i[1]=[c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[c("path",{d:"M19 13H5v-2h14v2z"}),c("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["onClickFunction","tooltip"])])}}}),D={class:"mapnav-section bg-white-75 hover:bg-white"},Q=b({__name:"draw-nav-section",setup(d){const{t:o}=_(),e=K(),a=[{type:"point",icon:h(f(()=>import("./point-icon-B3hnzvl1.js")))},{type:"polyline",icon:h(f(()=>import("./line-icon-CYIVraXn.js")))},{type:"polygon",icon:h(f(()=>import("./polygon-icon-D9xEPYRI.js")))},{type:"circle",icon:h(f(()=>import("./circle-icon-BBg0n5md.js")))},{type:"rectangle",icon:h(f(()=>import("./rectangle-icon-BgVuqhAN.js")))}],t=n=>{e.activeTool===n?e.setActiveTool(""):e.setActiveTool(n)};return(n,i)=>{const r=I("mapnav-button");return s(),p("div",D,[(s(),p(w,null,E(a,m=>u(r,{key:m.type,onClickFunction:()=>t(m.type),tooltip:v(o)(`draw.${m.type}.tooltip`),class:Z({"active-tool":v(e).activeTool===m.type})},{default:$(()=>[(s(),z(O(m.icon),{class:"fill-current w-32 h-20"}))]),_:2},1032,["onClickFunction","tooltip","class"])),64))])}}}),R=y(Q,[["__scopeId","data-v-75635d52"]]),U={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},ee=["content"],te={class:"mapnav-section bg-white-75 hover:bg-white"},oe=b({__name:"mapnav",setup(d){const o=x("iApi"),e=C(),{t:a}=_(),t=B(),n=F(()=>o.getConfig().fixtures.mapnav.items.some(l=>l==="draw")),i=()=>{t.value._tippy.hide()},r=l=>{l.key==="Tab"&&t.value?.matches(":focus")&&t.value._tippy.show()};V(()=>{t.value?.addEventListener("blur",i),t.value?.addEventListener("keyup",r)}),P(()=>{t.value?.removeEventListener("blur",i),t.value?.removeEventListener("keyup",r)});const m=F(()=>e.order.map(l=>e.items[l]).filter(l=>l.componentId&&l.id!=="draw"));return(l,g)=>{const M=L("focus-list"),S=L("tippy");return s(),p("div",U,[Y((s(),p("div",{class:"flex flex-col",content:v(a)("panels.controls.items"),ref_key:"el",ref:t},[n.value?(s(),p(w,{key:0},[u(R),g[0]||(g[0]=c("span",{class:"py-1"},null,-1))],64)):T("",!0),u(X,{class:"mapnav-section bg-white-75 hover:bg-white"}),g[1]||(g[1]=c("span",{class:"py-1"},null,-1)),c("div",te,[(s(!0),p(w,null,E(m.value,(k,N)=>(s(),p(w,{key:k.id+"button"},[(s(),z(O(k.id+"-nav-button"))),N!==m.value.length-1?(s(),z(H,{key:0,class:"mapnav-divider"})):T("",!0)],64))),128))])],8,ee)),[[M],[S,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])])}}}),ae=y(oe,[["__scopeId","data-v-96b1b7dc"]]);class ne extends j{mapnavStore=C(this.$vApp.$pinia);get config(){return super.config}_parseConfig(o){if(!o)return;const e=o.items.map(a=>({id:a}));this.mapnavStore.items=e.reduce((a,t)=>(a[t.id]=t,a),{}),this.mapnavStore.order=e.map(a=>a.id),this._validateItems()}_validateItems(){const o=["geolocator","zoom","home","fullscreen"];this.mapnavStore.order.forEach(e=>{(this.$iApi.fixture.exists(e)||o.includes(e))&&(this.mapnavStore.items[e].componentId=`${e}-nav-button`)})}}const se={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen","mapnav.geolocator":"Your Location","mapnav.geolocator.error.permission":"The location request was denied. Please check your browser permission settings.","mapnav.geolocator.error.internal":"Your location could not be found."},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arri\xE8re","mapnav.home":"Accueil","mapnav.fullscreen":"Plein \xC9cran","mapnav.geolocator":"Votre position","mapnav.geolocator.error.permission":"Demande de localisation refus\xE9e. Veuillez v\xE9rifier les param\xE8tres d'autorisation de votre navigateur.","mapnav.geolocator.error.internal":"Votre emplacement n'a pu \xEAtre trouv\xE9."}};class ie extends ne{async added(){Object.entries(se).forEach(n=>this.$iApi.$i18n.mergeLocaleMessage(...n));const{destroy:o,el:e}=this.mount(ae,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]),this._parseConfig(this.config);const a=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),t=this.$iApi.event.on(q.COMPONENT,()=>{this._parseConfig(this.config)});this.removed=()=>{a(),this.$iApi.event.off(t);const n=C(this.$vApp.$pinia),i={...n.items};Object.keys(i).forEach(r=>n.removeItem(r)),n.$reset(),o()}}}export{ie as default};
