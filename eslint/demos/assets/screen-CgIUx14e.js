import{dM as V,dN as A,g9 as B,dO as X,dQ as w,e5 as Z,dS as R,dU as t,dY as o,dX as r,d_ as W,e0 as c,g8 as z,g7 as O,dT as x,ea as S,eb as k,e2 as I,e3 as C,e6 as Y,e7 as J,e8 as Q,e9 as U,d$ as g,e1 as q,dZ as G,ed as ee,fQ as te,gs as se,dR as oe,dV as D,dW as H,ef as j,hu as ae,hv as ne}from"./main-QmNQNEqS.js";import"./preload-helper-ExcqyqRp.js";const re={class:"rv-geosearch-bar relative h-26 mx-8 mb-8"},le=["placeholder","value","aria-label"],ce={class:"absolute inset-y-0 right-8 grid w-10 place-content-center"},ie=["aria-label","content"],ue=V({__name:"search-bar",setup(T){const{t:a}=A(),u=B(),i=X(),m=w(()=>u.searchVal),n=w(()=>['"',"$","!","*","+","?","^","{","}","(",")","|","[","]"].filter(d=>u.searchVal.includes(d)).join("")),l=d=>{u.setSearchTerm(d),u.setSearchRegex(d)},_=Z(500,d=>{l(d)});return(d,s)=>{const e=R("tippy");return t(),o("div",re,[r("input",{type:"text",class:W(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",{"border-yellow-500":n.value}]),placeholder:c(a)("geosearch.searchText"),value:m.value,onInput:s[0]||(s[0]=p=>c(_)(p.target.value)),onKeyup:s[1]||(s[1]=z(p=>{c(i).mobileView&&p.target.blur()},["enter"])),"aria-label":c(a)("geosearch.searchText"),onKeypress:s[2]||(s[2]=z(O(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,42,le),r("span",ce,[n.value?x((t(),o("button",{key:0,class:"cursor-default","aria-label":c(a)("geosearch.badChars",{chars:n.value}),content:c(a)("geosearch.badChars",{chars:n.value})},s[3]||(s[3]=[S(" ⚠ ")]),8,ie)),[[e]]):k("",!0)])])}}}),de={class:"w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0"},pe=["value","aria-label"],ve={value:"",disabled:"",hidden:""},he={class:"sm:w-1/2 h-26 sm:mx-16 flex"},be=["value","aria-label"],_e={value:"",disabled:"",hidden:""},ge=["disabled","content","aria-label"],fe=V({__name:"top-filters",setup(T){const{t:a}=A(),u=I("iApi"),i=B(),m=C(),n=C(),l=C(),_=C([]),d=C([]),s=C([]),e=w(()=>i.queryParams),p=w(()=>u.language),L=b=>i.setProvince(b),$=b=>i.setType(b),F=()=>{L({}),$({})},M=()=>{i.initService(u.language,u.fixture.get("geosearch").config);const b=_.value.find(h=>e.value.province===h.name)?.code,f=d.value.find(h=>e.value.type===h.name)?.code;i.getProvinces.then(h=>{_.value=h,L({province:h.find(E=>E.code===b)?.name,forceReRun:!0})}),i.getTypes.then(h=>{d.value=h,$({type:h.find(E=>E.code===f)?.name,forceReRun:!0})})},v=()=>{n.value._tippy.hide()},P=()=>{l.value._tippy.hide()},N=b=>{b.key==="Tab"&&n.value?.matches(":focus")&&navigator.userAgent.includes("Firefox")?n.value._tippy.show():n.value._tippy.hide()},K=b=>{b.key==="Tab"&&l.value?.matches(":focus")&&navigator.userAgent.includes("Firefox")?l.value._tippy.show():l.value._tippy.hide()};return Y(()=>{M(),s.value.push(J(p,M))}),Q(()=>{n.value?.addEventListener("blur",v),n.value?.addEventListener("keyup",N),l.value?.addEventListener("blur",P),l.value?.addEventListener("keyup",K)}),U(()=>{s.value.forEach(b=>b()),n.value?.removeEventListener("blur",v),n.value?.removeEventListener("keyup",N),l.value?.removeEventListener("blur",P),l.value?.removeEventListener("keyup",K)}),(b,f)=>{const h=R("truncate"),E=R("tippy");return t(),o("div",{class:"rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14",ref_key:"el",ref:m},[r("div",de,[x((t(),o("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",value:e.value.province,"aria-label":c(a)("geosearch.filters.province"),onChange:f[0]||(f[0]=y=>L({province:y.target.value})),ref_key:"selectProvince",ref:n},[x((t(),o("option",ve,[S(g(c(a)("geosearch.filters.province")),1)])),[[h]]),(t(!0),o(q,null,G(_.value,y=>x((t(),o("option",{key:y.code},[S(g(y.name),1)])),[[h]])),128))],40,pe)),[[h],[E,{content:c(a)("select.items"),trigger:"manual",placement:"top-start"}]])]),r("div",he,[x((t(),o("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",value:e.value.type,"aria-label":c(a)("geosearch.filters.type"),onChange:f[1]||(f[1]=y=>$({type:y.target.value})),ref_key:"selectFilter",ref:l},[r("option",_e,g(c(a)("geosearch.filters.type")),1),(t(!0),o(q,null,G(d.value,y=>(t(),o("option",{key:y.code},g(y.name),1))),128))],40,be)),[[h],[E,{content:c(a)("select.items"),trigger:"manual",placement:"top-start"}]]),x((t(),o("button",{type:"button",class:"text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",disabled:!e.value.type&&!e.value.province,onClick:F,content:c(a)("geosearch.filters.clear"),"aria-label":c(a)("geosearch.filters.clear")},f[2]||(f[2]=[r("div",{class:"rv-geosearch-icon"},[r("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[r("path",{d:"M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "})])],-1)]),8,ge)),[[E,{placement:"bottom"}]])])],512)}}}),me={class:"rv-geosearch-bottom-filters"},ye={class:"bg-white"},xe={class:"ml-8 cursor-pointer font-normal"},we=["checked"],Le=V({__name:"bottom-filters",setup(T){const{t:a}=A(),u=I("iApi"),i=B(),m=w(()=>i.resultsVisible),n=Z(300,s=>{_(s).then(e=>{l({extent:e,visible:m.value})})}),l=s=>{i.setMapExtent(s)},_=async s=>s.sr.wkid===4326?s:await u.geo.proj.projectGeometry(4326,s),d=s=>{_(u.geo.map.getExtent()).then(e=>{l({extent:e,visible:s})})};return Q(()=>{u.event.on(ee.MAP_EXTENTCHANGE,n,"geosearch_map_extent")}),U(()=>{u.event.off("geosearch_map_extent")}),(s,e)=>(t(),o("div",me,[r("div",ye,[r("label",xe,[r("input",{type:"checkbox",class:"border-2 mx-8 border-gray-600 cursor-pointer",checked:m.value,onChange:e[0]||(e[0]=p=>d(p.target.checked)),onKeypress:e[1]||(e[1]=z(O(()=>{},["prevent"]),["enter"]))},null,40,we),S(g(c(a)("geosearch.visible")),1)])])]))}}),ke={},$e={class:"w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14"},Ee={class:"h-full progressbar bg-blue-800 rounded-full top-0","aria-valuemin":"0","aria-valuemax":"100"},Se={class:"flex items-center h-full"};function Te(T,a){return t(),o("div",$e,[r("div",Ee,[r("span",Se,[se(T.$slots,"default",{},void 0,!0)])])])}const Ce=te(ke,[["render",Te],["__scopeId","data-v-64b4e253"]]),Re={class:"flex flex-col h-full"},Me={key:1,class:"text-red-900 text-xs px-8 mb-10"},Pe={key:2,class:"px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"},Ve={class:"relative h-48"},Ae={class:"font-bold text-blue-600"},Be={key:3,class:"rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"},Fe=["onClick"],Ne={class:"rv-result-description px-8"},je={class:"flex-1 text-left truncate font-bold leading-tight"},ze=["innerHTML"],qe={key:0,class:"text-gray-600 text-sm"},Ge={key:1,class:"hidden"},Ie={key:2,class:"text-sm font-normal"},He=V({__name:"screen",props:{panel:{type:Object}},setup(T){const{t:a}=A(),u=I("iApi"),i=B(),m=w(()=>i.searchVal.replace(/["!*$+?^{}()|[\]\\]/g,"").trim()),n=w(()=>i.searchResults),l=w(()=>i.loadingResults),_=w(()=>i.failedServices),d=e=>{const p=new ae("zoomies",[[[e.bbox[0],e.bbox[1]],[e.bbox[0],e.bbox[3]],[e.bbox[2],e.bbox[3]],[e.bbox[2],e.bbox[1]],[e.bbox[0],e.bbox[1]]]],ne.latLongSR(),!0);u.geo.map.zoomMapTo(p)},s=(e,p)=>{const L=e.replace(new RegExp(`${i.searchRegex}`,"gi"),$=>'<span class="font-bold text-blue-600">'+$+"</span>");return p?L+",":L};return(e,p)=>{const L=oe("panel-screen"),$=R("truncate"),F=R("focus-item"),M=R("focus-list");return t(),D(L,{panel:T.panel},{header:H(()=>[S(g(c(a)("geosearch.title")),1)]),content:H(()=>[r("div",Re,[j(ue),j(fe),l.value?(t(),D(Ce,{key:0,class:"flex-none"})):k("",!0),_.value.length>0&&!l.value?(t(),o("div",Me,g(c(a)("geosearch.serviceError",{services:_.value.join(", ")})),1)):k("",!0),m.value&&n.value.length===0&&!l.value?(t(),o("div",Pe,[r("span",Ve,[S(g(c(a)("geosearch.noResults")),1),r("span",Ae,'"'+g(m.value)+'"',1)])])):k("",!0),n.value.length>0?x((t(),o("ul",Be,[(t(!0),o(q,null,G(n.value,(v,P)=>(t(),o("li",{class:"relative h-56",key:P},[x((t(),o("button",{type:"button",class:"absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",onClick:N=>d(v),style:{"border-bottom":"1px solid lightgray"},"truncate-trigger":""},[r("div",Ne,[x((t(),o("div",je,[r("span",{innerHTML:s(v.name,v.location.province)},null,8,ze),v.location.province?(t(),o("span",qe,g(v.location.city?" "+v.location.city+", "+v.location.province.abbr:" "+v.location.province.abbr),1)):k("",!0),v.type?(t(),o("span",Ge,"; ")):k("",!0),v.type?(t(),o("span",Ie,[p[0]||(p[0]=r("br",null,null,-1)),S(g(v.type),1)])):k("",!0)])),[[$,{externalTrigger:!0,options:{placement:"top-start"}}]])])],8,Fe)),[[F,"show-truncate"]])]))),128))])),[[M]]):k("",!0),j(Le,{class:"mt-auto"})])]),_:1},8,["panel"])}}});export{He as default};
