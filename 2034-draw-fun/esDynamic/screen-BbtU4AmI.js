import{em as E,en as M,gz as S,eo as G,eq as w,eD as H,es as C,cZ as t,cX as s,cY as l,ex as I,ez as i,gN as $,gM as K,et as L,eI as R,eJ as k,eB as A,r as V,eE as Z,eF as X,eH as N,ey as x,eA as j,ew as z,eG as D,ed as F,cW as J,g_ as O,er as W,eu as q,ev as B,eK as P,h_ as Y,h$ as Q}from"./main-CZM6prq-.js";const U={class:"rv-geosearch-bar relative h-26 mx-8 mb-8"},ee=["placeholder","value","aria-label"],ae={class:"absolute inset-y-0 right-8 grid w-10 place-content-center"},te=["aria-label","content"],se=E({__name:"search-bar",setup(T){const{t:r}=M(),u=S(),o=G(),h=w(()=>u.searchVal),p=w(()=>['"',"$","!","*","+","?","^","{","}","(",")","|","[","]"].filter(d=>u.searchVal.includes(d)).join("")),f=d=>{u.setSearchTerm(d),u.setSearchRegex(d)},b=H(500,d=>{f(d)});return(d,a)=>{const e=C("tippy");return t(),s("div",U,[l("input",{type:"text",class:I(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",{"border-yellow-500":p.value}]),placeholder:i(r)("geosearch.searchText"),value:h.value,onInput:a[0]||(a[0]=v=>i(b)(v.target.value)),onKeyup:a[1]||(a[1]=$(v=>{i(o).mobileView&&v.target.blur()},["enter"])),"aria-label":i(r)("geosearch.searchText"),onKeypress:a[2]||(a[2]=$(K(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,42,ee),l("span",ae,[p.value?L((t(),s("button",{key:0,class:"cursor-default","aria-label":i(r)("geosearch.badChars",{chars:p.value}),content:i(r)("geosearch.badChars",{chars:p.value})},a[3]||(a[3]=[R(" \u26A0 ")]),8,te)),[[e]]):k("",!0)])])}}}),le={class:"rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14"},re={class:"w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0"},oe=["value","aria-label"],ne={value:"",disabled:"",hidden:""},ce={class:"sm:w-1/2 h-26 sm:mx-16 flex"},ie=["value","aria-label"],ue={value:"",disabled:"",hidden:""},pe=["disabled","content","aria-label"],be=E({__name:"top-filters",setup(T){const{t:r}=M(),u=A("iApi"),o=S(),h=V([]),p=V([]),f=V([]),b=w(()=>o.queryParams),d=w(()=>u.language),a=g=>o.setProvince(g),e=g=>o.setType(g),v=()=>{a({}),e({})},_=()=>{o.initService(u.language,u.fixture.get("geosearch").config);const g=h.value.find(c=>b.value.province===c.name)?.code,y=p.value.find(c=>b.value.type===c.name)?.code;o.getProvinces.then(c=>{h.value=c,a({province:c.find(n=>n.code===g)?.name,forceReRun:!0})}),o.getTypes.then(c=>{p.value=c,e({type:c.find(n=>n.code===y)?.name,forceReRun:!0})})};return Z(()=>{_(),f.value.push(X(d,_))}),N(()=>{f.value.forEach(g=>g())}),(g,y)=>{const c=C("truncate"),n=C("tippy");return t(),s("div",le,[l("div",re,[L((t(),s("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",value:b.value.province,"aria-label":i(r)("geosearch.filters.province"),onChange:y[0]||(y[0]=m=>a({province:m.target.value}))},[L((t(),s("option",ne,[R(x(i(r)("geosearch.filters.province")),1)])),[[c]]),(t(!0),s(j,null,z(h.value,m=>L((t(),s("option",{key:m.code},[R(x(m.name),1)])),[[c]])),128))],40,oe)),[[c]])]),l("div",ce,[L((t(),s("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",value:b.value.type,"aria-label":i(r)("geosearch.filters.type"),onChange:y[1]||(y[1]=m=>e({type:m.target.value}))},[l("option",ue,x(i(r)("geosearch.filters.type")),1),(t(!0),s(j,null,z(p.value,m=>(t(),s("option",{key:m.code},x(m.name),1))),128))],40,ie)),[[c]]),L((t(),s("button",{type:"button",class:"text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",disabled:!b.value.type&&!b.value.province,onClick:v,content:i(r)("geosearch.filters.clear"),"aria-label":i(r)("geosearch.filters.clear")},y[2]||(y[2]=[l("div",{class:"rv-geosearch-icon"},[l("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[l("path",{d:"M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "})])],-1)]),8,pe)),[[n,{placement:"bottom"}]])])])}}}),ve={class:"rv-geosearch-bottom-filters"},de={class:"bg-white"},ge={class:"ml-8 cursor-pointer font-normal"},he=["checked"],fe=E({__name:"bottom-filters",setup(T){const{t:r}=M(),u=A("iApi"),o=S(),h=w(()=>o.resultsVisible),p=H(300,a=>{b(a).then(e=>{f({extent:e,visible:h.value})})}),f=a=>{o.setMapExtent(a)},b=async a=>a.sr.wkid===4326?a:await u.geo.proj.projectGeometry(4326,a),d=a=>{b(u.geo.map.getExtent()).then(e=>{f({extent:e,visible:a})})};return D(()=>{u.event.on(F.MAP_EXTENTCHANGE,p,"geosearch_map_extent")}),N(()=>{u.event.off("geosearch_map_extent")}),(a,e)=>(t(),s("div",ve,[l("div",de,[l("label",ge,[l("input",{type:"checkbox",class:"border-2 mx-8 border-gray-600 cursor-pointer",checked:h.value,onChange:e[0]||(e[0]=v=>d(v.target.checked)),onKeypress:e[1]||(e[1]=$(K(()=>{},["prevent"]),["enter"]))},null,40,he),R(x(i(r)("geosearch.visible")),1)])])]))}}),me={},xe={class:"w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14"},ye={class:"h-full progressbar bg-blue-800 rounded-full top-0","aria-valuemin":"0","aria-valuemax":"100"},we={class:"flex items-center h-full"};function Le(T,r){return t(),s("div",xe,[l("div",ye,[l("span",we,[O(T.$slots,"default",{},void 0,!0)])])])}const ke=J(me,[["render",Le],["__scopeId","data-v-0a8d1c36"]]),_e={class:"flex flex-col h-full"},Re={key:1,class:"text-red-900 text-xs px-8 mb-10"},Te={key:2,class:"px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"},Ce={class:"relative h-48"},Ee={class:"font-bold text-blue-600"},Me={key:3,class:"rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"},Se=["onClick"],$e={class:"rv-result-description px-8"},Ae={class:"flex-1 text-left truncate font-bold leading-tight"},Ve=["innerHTML"],je={key:0,class:"text-gray-600 text-sm"},ze={key:1,class:"hidden"},Pe={key:2,class:"text-sm font-normal"},He=E({__name:"screen",props:{panel:{type:Object}},setup(T){const{t:r}=M(),u=A("iApi"),o=S(),h=w(()=>o.searchVal.replace(/["!*$+?^{}()|[\]\\]/g,"").trim()),p=w(()=>o.searchResults),f=w(()=>o.loadingResults),b=w(()=>o.failedServices),d=e=>{const v=new Y("zoomies",[[[e.bbox[0],e.bbox[1]],[e.bbox[0],e.bbox[3]],[e.bbox[2],e.bbox[3]],[e.bbox[2],e.bbox[1]],[e.bbox[0],e.bbox[1]]]],Q.latLongSR(),!0);u.geo.map.zoomMapTo(v)},a=(e,v)=>{const _=e.replace(new RegExp(`${o.searchRegex}`,"gi"),g=>'<span class="font-bold text-blue-600">'+g+"</span>");return v?_+",":_};return(e,v)=>{const _=W("panel-screen"),g=C("truncate"),y=C("focus-item"),c=C("focus-list");return t(),q(_,{panel:T.panel},{header:B(()=>[R(x(i(r)("geosearch.title")),1)]),content:B(()=>[l("div",_e,[P(se),P(be),f.value?(t(),q(ke,{key:0,class:"flex-none"})):k("",!0),b.value.length>0&&!f.value?(t(),s("div",Re,x(i(r)("geosearch.serviceError",{services:b.value.join(", ")})),1)):k("",!0),h.value&&p.value.length===0&&!f.value?(t(),s("div",Te,[l("span",Ce,[R(x(i(r)("geosearch.noResults")),1),l("span",Ee,'"'+x(h.value)+'"',1)])])):k("",!0),p.value.length>0?L((t(),s("ul",Me,[(t(!0),s(j,null,z(p.value,(n,m)=>(t(),s("li",{class:"relative h-56",key:m},[L((t(),s("button",{type:"button",class:"absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",onClick:Ke=>d(n),style:{"border-bottom":"1px solid lightgray"},"truncate-trigger":""},[l("div",$e,[L((t(),s("div",Ae,[l("span",{innerHTML:a(n.name,n.location.province)},null,8,Ve),n.location.province?(t(),s("span",je,x(n.location.city?" "+n.location.city+", "+n.location.province.abbr:" "+n.location.province.abbr),1)):k("",!0),n.type?(t(),s("span",ze,"; ")):k("",!0),n.type?(t(),s("span",Pe,[v[0]||(v[0]=l("br",null,null,-1)),R(x(n.type),1)])):k("",!0)])),[[g,{externalTrigger:!0,options:{placement:"top-start"}}]])])],8,Se)),[[y,"show-truncate"]])]))),128))])),[[c]]):k("",!0),P(fe,{class:"mt-auto"})])]),_:1},8,["panel"])}}});export{He as default};
