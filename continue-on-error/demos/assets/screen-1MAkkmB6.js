const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./header-D9eMI_ug.js","./main-CT4A7-UF.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css","./header-Bplo6FDP.css","./item-DJnV5KXS.js","./marked.esm-DmSrlTiT.js","./item-B2uCIrFT.css"])))=>i.map(i=>d[i]);
import{_ as l}from"./preload-helper-ExcqyqRp.js";import{dM as x,dN as A,e2 as I,e3 as b,e8 as D,e9 as T,dQ as V,dR as B,dS as c,dV as d,dW as u,dU as n,ea as C,d$ as w,e0 as r,ef as N,dT as O,dY as p,e1 as P,dZ as R,eg as _}from"./main-CT4A7-UF.js";const j=["content"],U=x({__name:"screen",props:{panel:{type:Object,required:!0}},setup(m){const v=_(()=>l(()=>import("./header-D9eMI_ug.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),f=_(()=>l(()=>import("./item-DJnV5KXS.js"),__vite__mapDeps([5,1,2,3,6,7]),import.meta.url)),{t:s}=A(),g=I("iApi"),e=b(),o=()=>{e.value._tippy.hide()},a=t=>{t.key==="Tab"&&e.value?.matches(":focus")&&e.value._tippy.show()};D(()=>{e.value?.addEventListener("blur",o),e.value?.addEventListener("keyup",a)}),T(()=>{e.value?.removeEventListener("blur",o),e.value?.removeEventListener("keyup",a)});const y=V(()=>{const t=g.fixture.get("legend");return t?[...t.getLegend()]:[]});return(t,h)=>{const E=B("panel-screen"),k=c("focus-list"),L=c("tippy");return n(),d(E,{panel:m.panel},{header:u(()=>[C(w(r(s)("legend.title")),1)]),content:u(()=>[N(r(v)),O((n(),p("div",{content:r(s)("panels.controls.items"),ref_key:"el",ref:e},[(n(!0),p(P,null,R(y.value,i=>(n(),d(r(f),{legendItem:i,key:i.uid},null,8,["legendItem"]))),128))],8,j)),[[k],[L,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])]),_:1},8,["panel"])}}});export{U as default};
