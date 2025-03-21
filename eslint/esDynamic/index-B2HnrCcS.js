import{fN as f,dU as r,dY as p,dM as g,dN as b,e2 as E,hw as w,dR as I,ec as v,dW as _,dX as l,e0 as c,f8 as u,e3 as O,e8 as M,e9 as S,dQ as F,dS as $,dT as L,e1 as y,dZ as N,dV as z,hx as H,eb as V,F as Z,dE as T}from"./main-BPeHLg3l.js";const B={},P={class:"border-b p-0 self-center w-2/3"};function Y(m,a){return r(),p("span",P)}const x=f(B,[["render",Y]]),j=g({__name:"zoom-nav",setup(m){const{t:a}=b(),t=E("iApi"),e=w(400,!0,()=>t.geo.map.zoomIn()),s=w(400,!0,()=>t.geo.map.zoomOut());return(o,i)=>{const n=I("mapnav-button");return r(),p("div",null,[v(n,{onClickFunction:c(e),tooltip:c(a)("mapnav.zoomIn")},{default:_(()=>i[0]||(i[0]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[l("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),l("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["onClickFunction","tooltip"]),v(x),v(n,{onClickFunction:c(s),tooltip:c(a)("mapnav.zoomOut")},{default:_(()=>i[1]||(i[1]=[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[l("path",{d:"M19 13H5v-2h14v2z"}),l("path",{d:"M0 0h24v24H0z",fill:"none"})],-1)])),_:1},8,["onClickFunction","tooltip"])])}}}),W={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},q=["content"],D={class:"mapnav-section bg-white-75 hover:bg-white"},Q=g({__name:"mapnav",setup(m){const a=u(),{t}=b(),e=O(),s=()=>{e.value._tippy.hide()},o=n=>{n.key==="Tab"&&e.value?.matches(":focus")&&e.value._tippy.show()};M(()=>{e.value?.addEventListener("blur",s),e.value?.addEventListener("keyup",o)}),S(()=>{e.value?.removeEventListener("blur",s),e.value?.removeEventListener("keyup",o)});const i=F(()=>a.order.map(n=>a.items[n]).filter(n=>n.componentId));return(n,d)=>{const k=$("focus-list"),C=$("tippy");return r(),p("div",W,[L((r(),p("div",{class:"flex flex-col",content:c(t)("panels.controls.items"),ref_key:"el",ref:e},[v(j,{class:"mapnav-section bg-white-75 hover:bg-white"}),d[0]||(d[0]=l("span",{class:"py-1"},null,-1)),l("div",D,[(r(!0),p(y,null,N(i.value,(h,A)=>(r(),p(y,{key:h.id+"button"},[(r(),z(H(h.id+"-nav-button"))),A!==i.value.length-1?(r(),z(x,{key:0,class:"mapnav-divider"})):V("",!0)],64))),128))])],8,q)),[[k],[C,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])])}}}),R=f(Q,[["__scopeId","data-v-41a5c7b7"]]);class U extends Z{mapnavStore=u(this.$vApp.$pinia);get config(){return super.config}_parseConfig(a){if(!a)return;const t=a.items.map(e=>({id:e}));this.mapnavStore.items=t.reduce((e,s)=>(e[s.id]=s,e),{}),this.mapnavStore.order=t.map(e=>e.id),this._validateItems()}_validateItems(){const a=["geolocator","zoom","home","fullscreen"];this.mapnavStore.order.forEach(t=>{(this.$iApi.fixture.exists(t)||a.includes(t))&&(this.mapnavStore.items[t].componentId=`${t}-nav-button`)})}}const G={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen","mapnav.geolocator":"Your Location","mapnav.geolocator.error.permission":"The location request was denied. Please check your browser permission settings.","mapnav.geolocator.error.internal":"Your location could not be found."},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arri\xE8re","mapnav.home":"Accueil","mapnav.fullscreen":"Plein \xC9cran","mapnav.geolocator":"Votre position","mapnav.geolocator.error.permission":"Demande de localisation refus\xE9e. Veuillez v\xE9rifier les param\xE8tres d'autorisation de votre navigateur.","mapnav.geolocator.error.internal":"Votre emplacement n'a pu \xEAtre trouv\xE9."}};class J extends U{async added(){Object.entries(G).forEach(o=>this.$iApi.$i18n.mergeLocaleMessage(...o));const{destroy:a,el:t}=this.mount(R,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,o=>this._parseConfig(o)),s=this.$iApi.event.on(T.COMPONENT,()=>{this._parseConfig(this.config)});this.removed=()=>{e(),this.$iApi.event.off(s);const o=u(this.$vApp.$pinia),i={...o.items};Object.keys(i).forEach(n=>o.removeItem(n)),o.$reset(),a()}}}export{J as default};
