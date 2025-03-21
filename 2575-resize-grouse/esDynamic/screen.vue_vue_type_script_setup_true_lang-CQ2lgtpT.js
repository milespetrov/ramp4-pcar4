import{dM as b,dN as f,e2 as T,dS as i,dU as t,dY as l,dT as o,d_ as v,e0 as w,dX as s,eb as g,d$ as y,gi as x,gj as j,fM as z,dF as M,fN as C,f5 as B,dQ as N,e3 as O,e8 as S,dR as V,dV as q,dW as _,ea as A,e1 as F,dZ as H,ec as I}from"./main-BriipcPO.js";const K={class:"mt-10"},Q=["aria-label"],R=["alt","src"],U=["alt"],W={class:"absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"},X={class:"pl-5"},Y={class:"ml-auto pr-5"},Z=["content"],$=b({__name:"item",props:{area:{type:Object,required:!0},showThumbnail:{type:Boolean}},setup(a){const{t:c}=f(),u=T("iApi"),r=n=>{if(!n.extent){console.error("selected area of interest doesn't have an extent specified.");return}u?.geo.map.zoomMapTo(M.fromConfig("area-of-interest-extent",n.extent))};return(n,e)=>{const h=i("truncate"),p=i("tippy"),d=i("focus-item");return t(),l("div",K,[o((t(),l("button",{type:"button",class:v(["area-of-interest-item-button bg-gray-300 w-full",{"border border-gray-300":a.showThumbnail}]),"aria-label":w(c)("areas-of-interest.select"),onClick:e[2]||(e[2]=m=>r(a.area))},[s("div",null,[s("div",{class:v(["flex hover:opacity-50 area-of-interest-item-image",a.showThumbnail?"h-180":"h-30"])},[a.area.thumbnail?(t(),l("img",{key:0,class:"w-full bg-white object-contain",alt:a.area.altText||a.area.title,src:a.area.thumbnail},null,8,R)):a.showThumbnail?(t(),l("img",{key:1,class:"w-full bg-white object-contain py-30",alt:a.area.altText||a.area.title,src:"https://openclipart.org/image/800px/160615"},null,8,U)):g("",!0)],2)]),s("div",W,[o((t(),l("div",X,[s("span",null,y(a.area.title),1)])),[[h]]),o(s("div",Y,[o((t(),l("a",{onClick:e[0]||(e[0]=x(()=>{},["stop"])),onKeydown:e[1]||(e[1]=j(x(()=>{},["prevent"]),["enter","space"])),content:a.area.description},e[3]||(e[3]=[s("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,Z)),[[p,{placement:"bottom",trigger:"click focus"}]])],512),[[z,a.area.description]])])],10,Q)),[[d]])])}}}),D=C($,[["__scopeId","data-v-06be115a"]]),E={class:"h-600 overflow-y-auto"},G={class:"mx-5"},L={key:0},P=b({__name:"screen",props:{panel:{type:Object}},setup(a){const{t:c}=f(),u=B(),r=N(()=>u.areas),n=O(!1);return S(()=>{n.value=!!r.value?.some(e=>e.thumbnail)}),(e,h)=>{const p=V("panel-screen"),d=i("focus-list");return t(),q(p,{panel:a.panel},{header:_(()=>[A(y(w(c)("areas-of-interest.title")),1)]),content:_(()=>[s("div",E,[s("div",G,[r.value.length>0?o((t(),l("ul",L,[(t(!0),l(F,null,H(r.value,(m,k)=>(t(),l("li",{key:k},[I(D,{area:m,"show-thumbnail":n.value,class:"block relative overflow-hidden"},null,8,["area","show-thumbnail"])]))),128))])),[[d]]):g("",!0)])])]),_:1},8,["panel"])}}});export{P as _};
