import{dM as F,e3 as w,e8 as le,dU as t,dY as a,dX as h,e1 as Z,dZ as Q,d_ as G,gh as de,eb as $,d$ as C,fN as ae,g2 as W,dQ as M,dS as S,dT as A,ec as se,gi as ce,dN as R,h_ as ie,e6 as X,e7 as U,e9 as J,dV as Y,e0 as T,e2 as K,iu as ve,hx as _e,ga as Le,iv as Ee,dE as ee,ea as ne,dR as Me,dW as pe}from"./main-DJHcSGyV.js";import{T as je}from"./toggle-switch-control-Be-SyMAr.js";const ze={key:0,class:"relative"},Ie={key:0,class:"relative"},He=["innerHTML"],Oe=["src"],Ce={key:1,class:"w-32 h-32"},$e={class:"symbologyIcon"},qe=["innerHTML"],Ne=["src"],Be={class:"badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center"},Se={key:0,class:"px-5"},Ae={key:1,class:"inline-flex justify-center items-center relative"},De=F({__name:"symbology-stack",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0}},setup(v){const k=v,i=w([]);return le(()=>{i.value=k.layer.legend}),(d,p)=>v.result.loaded?(t(),a("div",ze,[h("div",{class:G(v.result.items.length===0?"opacity-50":"")},[i.value.length>1?(t(),a("div",Ie,[(t(!0),a(Z,null,Q(i.value.slice(0,3).reverse(),(_,y)=>(t(),a("div",{class:G(["absolute",[y==0?"symbol-0":y==1?"left-3":"left-6"]]),style:de({"z-index":3-y}),key:y},[i.value[y].svgcode?(t(),a("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:i.value[y].svgcode},null,8,He)):i.value[y].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-28 h-28",src:i.value[y].imgUrl},null,8,Oe)):$("",!0)],6))),128))])):i.value.length>0?(t(),a("div",Ce,[h("div",$e,[i.value[0].svgcode?(t(),a("span",{key:0,innerHTML:i.value[0].svgcode},null,8,qe)):i.value[0].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-full h-full",src:i.value[0].imgUrl},null,8,Ne)):$("",!0)])])):$("",!0)],2),h("div",Be,[v.result.loaded?(t(),a("div",Se,C(v.result.items.length),1)):$("",!0)])])):(t(),a("div",Ae,p[0]||(p[0]=[h("div",{class:"symbologyIcon h-32 w-32"},[h("div",{class:"relative animate-spin spinner h-24 w-24"})],-1)])))}}),Fe=ae(De,[["__scopeId","data-v-496d788d"]]),Pe=["content"],Ge={class:"symbologyLayerName truncate"},Ue=F({__name:"symbology-item",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0},selected:{type:Boolean,required:!0}},setup(v){const k=W(),i=M(()=>k.properties),d=v,p=()=>{const _=d.layer;return _&&i.value[_.id]&&i.value[_.id].name?i.value[_.id].name:_?.name??""};return(_,y)=>{const b=S("tippy");return A((t(),a("button",{class:G(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate",v.selected?"detailsButtonSelected":"px-11"]),onClick:y[0]||(y[0]=ce(()=>{},["stop"])),content:p()},[se(Fe,{class:"symbStack w-32 h-32 mr-10",layer:v.layer,result:v.result},null,8,["layer","result"]),h("div",Ge,C(p()),1)],10,Pe)),[[b,{placement:"right",sticky:!0}]])}}}),Re=["content"],Ye=F({__name:"symbology-list",props:{results:{type:Object,required:!0},selected:{type:String,required:!0}},emits:["selection-changed"],setup(v,{emit:k}){const{t:i}=R(),d=ie(),p=w(),_=()=>{p.value._tippy.hide()},y=g=>{g.key==="Tab"&&p.value?.matches(":focus")&&p.value._tippy.show()},b=k,o=v,r=w(""),c=w([]),u=w(!1),e=w(!1),n=g=>d.getLayerByUid(g),j=g=>{r.value=g,b("selection-changed",g),u.value=!1},q=()=>{e.value||setTimeout(()=>{u.value=e.value},500),e.value=!0},O=()=>{u.value=e.value=!1},m=()=>{e.value||(u.value=!0),e.value=!0},z=()=>{u.value=e.value=!1};return X(()=>{c.value.push(U(o,()=>{r.value=o.selected}))}),le(()=>{p.value?.addEventListener("blur",_),p.value?.addEventListener("keyup",y)}),J(()=>{c.value.forEach(g=>g()),p.value?.removeEventListener("blur",_),p.value?.removeEventListener("keyup",y)}),(g,D)=>{const B=S("focus-item"),H=S("focus-list"),I=S("tippy");return A((t(),a("div",{class:G(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col",{"symbology-list-expanded":u.value}]),onMouseover:q,onMouseleave:O,onFocus:m,onBlur:ce(z,["self"]),content:T(i)("details.layers.results.list.tooltip"),ref_key:"el",ref:p},[(t(!0),a(Z,null,Q(o.results,(l,f)=>(t(),a("div",{class:"flex justify-start relative",key:f},[A((t(),Y(Ue,{key:l.uid,layer:n(l.uid),result:l,selected:l.uid===r.value,onClick:x=>j(l.uid)},null,8,["layer","result","selected","onClick"])),[[B]])]))),128))],42,Re)),[[H],[I,{trigger:"manual",placement:"top-start",touch:!1}]])}}}),Ze={class:"inline font-bold"},Ve=["innerHTML"],Qe=F({__name:"esri-default",props:{fixtureFields:{type:Object,required:!1},fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(v){const{t:k}=R(),i=K("iApi"),d=v,p=(r,c,u,e)=>{const n=r.find(j=>j[c].toLowerCase()===u.toLowerCase());n&&delete e[n.name]},_=()=>{const r=Object.assign({},d.identifyData.data);p(d.fields,"type","geometry",r),i?.ui.exposeOids||p(d.fields,"type","oid",r),i?.ui.exposeMeasurements||(p(d.fields,"name","shape_length",r),p(d.fields,"name","shape_area",r));const c={};d.fields.forEach(e=>{const n=d.fixtureFields?.find(j=>e.name===j.field);c[e.name]={name:n?.alias||e.alias||e.name,type:e.type,visible:n?.visible??!0}});const u={};Object.keys(r).forEach(e=>{const n=c[e];if(n&&n.visible){const j=r[e];u[e]={value:typeof j=="number"?i?.ui.formatNumber(j):j,alias:n.name,type:n.type}}});for(const[e]of Object.entries(u))i.ui.isPlainText(u[e].value)&&(u[e].value=i.ui.escapeHtml(u[e].value));return u},y=(r,c,u)=>{switch(u){case"date":return o(r);default:return b(r,c)}},b=(r,c)=>{if(!r)return r;if(r.trim().match(/\.(jpeg|jpg|gif|png)$/)||r.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${r}" alt="${k("details.item.alert.defaultAltText",{alias:c})}" />`;const u="underline text-blue-700 break-all",e=document.createElement("div");return e.innerHTML=r.trim(),e.firstElementChild?.tagName=="A"?(e.firstElementChild.className=u,e.innerHTML):ve(r,{className:u,target:"_blank",validate:{url:n=>/^https?:\/\//.test(n)}})},o=r=>{const c=parseInt(r);return isNaN(c)?r:new Date(c).toISOString().split("T")[0]};return(r,c)=>(t(),a("div",null,[(t(!0),a(Z,null,Q(_(),(u,e,n)=>(t(),a("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:n},[h("span",Ze,C(u.alias),1),c[0]||(c[0]=h("span",{class:"flex-auto"},null,-1)),h("span",{class:"inline",innerHTML:y(u.value,u.alias,u.type)},null,8,Ve)]))),128))]))}}),We=["innerHTML"],Xe={key:1},Je=F({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(v){const{t:k}=R();return(i,d)=>v.identifyData?(t(),a("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:v.identifyData.data.data??v.identifyData.data},null,8,We)):(t(),a("div",Xe,C(T(k)("details.layers.results.empty")),1))}}),Ke={class:"relative flex flex-grow truncate"},et={key:0,class:"flex flex-grow items-center truncate"},tt={class:"flex p-8 items-center"},lt=["innerHTML"],at={key:1,class:"symbologyIcon p-6"},st=["content","innerHTML","tabindex"],it={key:1,class:"flex p-6 flex-grow"},nt={key:2,class:"zoomButton text-center p-3"},ut=["content","aria-label"],rt={key:0,class:"m-auto animate-spin spinner h-20 w-20"},ot={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"green",class:"m-auto w-20 h-20"},dt={key:2,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"red",class:"m-auto w-20 h-20"},ct=["innerHTML"],me=F({__name:"result-item",props:{uid:{type:String,required:!0},data:{type:Object,required:!0},open:{type:Boolean,required:!1},inList:{type:Boolean,required:!1}},setup(v){const k=ie(),i=v,d=K("iApi"),p=w([]),_=W(),{t:y}=R(),b=w(""),o=w("none"),r=w(),c=()=>k.getLayerByUid(i.uid),u=M(()=>_.properties),e=M(()=>_.defaultTemplates),n=M(()=>c()?.supportsFeatures??!1),j=M(()=>c()?.mapLayer??!1),q=M(()=>{const l=c()?.nameField;let f=l&&i.data.loaded?i.data.data[l]:d.$i18n.t("details.items.title");return d.ui.isPlainText(f)&&(f=d.ui.escapeHtml(f)),f}),O=l=>{if(typeof l=="string"){const f="underline text-blue-700 break-all",x=document.createElement("div");return x.innerHTML=l.trim(),x.firstElementChild?.tagName=="A"?(x.firstElementChild.className=f,x.innerHTML):ve(l,{className:f,target:"_blank",validate:{url:L=>/^https?:\/\//.test(L)}})}return l},m=()=>{H("none"),i.data.loaded?z():i.data.load().then(()=>{z()})},z=()=>{if(b.value="",!(i.data&&i.data.loaded))return;const l=c();if(l===void 0){console.warn(`could not find layer for uid ${i.uid} during icon lookup`);return}if(l.supportsFeatures){const f=l.oidField;l.getIcon(i.data.data[f]).then(x=>{b.value=x})}},g=M(()=>{const l=c();return l&&u.value[l.id]&&u.value[l.id].template?u.value[l.id].template:e.value&&e.value[i.data.format]?e.value[i.data.format]:n.value?Qe:Je}),D=M(()=>n.value?c()?.fields||[]:[]),B=M(()=>{const l=c();if(l&&u.value[l.id]&&u.value[l.id].fields)return u.value[l.id].fields}),H=l=>{l==="zoomed"||l==="error"?setTimeout(()=>{o.value=l,r.value?._tippy.show(),setTimeout(()=>{r.value?._tippy.hide(),o.value="none"},3e3)},300):o.value=l},I=()=>{if(o.value!=="none")return;H("zooming");const l=c();if(l===void 0||!l.isLoaded){console.warn(`Could not find layer for uid ${i.uid} during zoom geometry lookup`),H("error");return}if(!i.data.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."),H("error");return}const f=i.data.data[l.oidField],x=()=>{const L={getGeom:!0};l.getGraphic(f,L).then(N=>{N.geometry.invalid()?(console.error(`Could not find graphic for objectid ${f}`),H("error")):(d.geo.map.zoomMapTo(N.geometry),H("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom")))}).catch(()=>{H("error")})};l.layerType===Le.FEATURE&&l.geomType!==Ee.POINT?l.getGraphicExtent(f).then(L=>{d.geo.map.zoomMapTo(L),H("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom"))}).catch(()=>{x()}):x()};return X(()=>{p.value.push(U(i,()=>{m()},{deep:!1,immediate:!0}))}),J(()=>{p.value.forEach(l=>l())}),(l,f)=>{const x=S("truncate"),L=S("tippy");return t(),a(Z,null,[h("div",Ke,[n.value?(t(),a("div",et,[h("div",tt,[v.data.loaded&&b.value?(t(),a("span",{key:0,class:"flex-none symbologyIcon",innerHTML:b.value},null,8,lt)):(t(),a("div",at,f[1]||(f[1]=[h("div",{class:"animate-spin spinner h-20 w-20"},null,-1)])))]),v.data.loaded?A((t(),a("span",{key:0,class:"pl-3 text-left flex-grow itemName",content:q.value,innerHTML:O(q.value),tabindex:v.inList?-1:0},null,8,st)),[[x,{options:{placement:"right"}}]]):(t(),a("div",it,C(T(y)("details.loading")),1)),v.data.loaded?(t(),a("span",nt,[j.value?A((t(),a("button",{key:0,type:"button",content:T(y)(`details.item.zoom${o.value==="none"?"":`.${o.value}`}`),"aria-label":T(y)(`grid.cells.zoom${o.value==="none"?"":`.${o.value}`}`),ref_key:"zoomButton",ref:r,onClick:f[0]||(f[0]=N=>{N.stopPropagation(),I()}),class:"text-gray-600 w-24 h-24 p-2 flex justify-center items-center"},[o.value==="zooming"?(t(),a("div",rt)):o.value==="zoomed"?(t(),a("svg",ot,f[2]||(f[2]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1)]))):o.value==="error"?(t(),a("svg",dt,f[3]||(f[3]=[h("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(t(),a("span",{key:3,innerHTML:T(d).ui.getZoomIcon()},null,8,ct))],8,ut)),[[L,{placement:"bottom"}]]):$("",!0)])):$("",!0)])):$("",!0)]),v.open?(t(),Y(_e(g.value),{key:0,identifyData:v.data,fields:D.value,fixtureFields:B.value,class:"p-8"},null,8,["identifyData","fields","fixtureFields"])):$("",!0)],64)}}}),vt={key:0,class:"layerName w-full flex-grow p-5 pb-8 font-bold truncate",tabIndex:"0"},pt={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},mt={for:"toggle"},yt={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},gt={class:"flex"},ft=["aria-label"],ht=["content","aria-label","disabled"],bt={class:"px-3 text-center flex-grow"},kt=["content","aria-label","disabled"],xt={key:3},wt={key:0},Tt=["content"],_t=["onClick"],Lt={key:1,class:"text-center"},Et={key:4,class:"p-5"},Mt=F({__name:"result-list",props:{uid:{type:String,required:!0},results:{type:Object,required:!0}},setup(v){const k=w(),i=()=>{k.value._tippy.hide()},d=s=>{s.key==="Tab"&&k.value?.matches(":focus")&&k.value._tippy.show()},p=K("iApi"),_=W(),y=ie(),b=v,{t:o}=R(),r=w(!1),c=w(p.fixture.get("details")),u=w(!0),e=w(!1),n=w(0),j=w(20),q=w([]),O=w([]),m=M(()=>_.activeGreedy),z=M(()=>_.properties),g=M(()=>n.value+j.value),D=()=>y.getLayerByUid(b.uid),B=()=>b.results.find(s=>s.uid===b.uid),H=M(()=>B()?.loaded??!1),I=M(()=>B()?.requestTime),l=M(()=>r.value&&(!e.value&&L().length>1||e.value&&L().length>j.value)),f=M(()=>{const s=D();return s&&z.value[s.id]&&z.value[s.id].name?z.value[s.id].name:s?.name??""}),x=M(()=>b.uid),L=()=>{const s=B();return s?s.items:[]},N=M(()=>L()[n.value]),ue=M(()=>{if(c.value.hasHilighter()){const s=D();if(s)return s.mapLayer&&s.supportsFeatures}return!1}),ye=s=>{u.value=s,_.hilightToggle=s,P()},ge=()=>{const s=D();n.value=n.value??0,u.value=_.hilightToggle??u.value,e.value=!1,r.value=!!s,P()},re=s=>{e.value?(n.value+=s*j.value,P()):n.value+=s},P=()=>{const s=L();if(u.value&&H.value&&s.length>0&&ue.value)if(e.value)c.value.hilightDetailsItems(s.slice(n.value,g.value),b.uid);else{const E=s[n.value];E&&c.value.hilightDetailsItems([E],b.uid)}else c.value.removeDetailsHilight()},fe=()=>{e.value=!0,n.value=Math.floor(n.value/j.value)*j.value,P()},he=()=>{c.value.removeDetailsHilight(),O.value.forEach(s=>s()),q.value.forEach(s=>p.event.off(s))},be=()=>{c.value.removeDetailsHilight()},ke=s=>{const E=n.value;n.value=s,e.value=!1,E===s&&P()};return le(()=>{q.value.push(p.event.on(ee.LAYER_REMOVE,s=>{const E=p.panel.get("details");b.uid===s.uid&&E&&E.close()})),q.value.push(p.event.on(ee.PANEL_CLOSED,s=>{s.id==="details"&&he()})),q.value.push(p.event.on(ee.PANEL_MINIMIZED,s=>{s.id==="details"&&be()})),q.value.push(p.event.on(ee.MAP_BASEMAPCHANGE,s=>{u.value&&s.schemaChanged&&P()})),k.value?.addEventListener("blur",i),k.value?.addEventListener("keyup",d)}),X(()=>{O.value.push(U(N,()=>{e.value||(ge(),N.value===void 0&&c.value.removeDetailsHilight())},{deep:!1,immediate:!0})),O.value.push(U(x,()=>{const s=b.uid;if(e.value&&s){const E=B();E&&E.loading.then(()=>{b.uid===s&&e.value&&P()})}},{deep:!1,immediate:!0})),O.value.push(U(I,()=>{n.value=0})),O.value.push(U(()=>b.uid,()=>{n.value=0}))}),J(()=>{k.value?.removeEventListener("blur",i),k.value?.removeEventListener("keyup",d)}),(s,E)=>{const xe=S("truncate"),te=S("tippy"),we=S("focus-item"),Te=S("focus-list");return H.value&&m.value===0?(t(),a("div",{key:0,class:"detailsContent relative flex flex-col flex-grow pl-5",style:de(v.results.length>1?{"margin-left":"42px"}:"")},[r.value?A((t(),a("h1",vt,[ne(C(f.value),1)])),[[xe,{options:{placement:"top-start"}}]]):$("",!0),ue.value?(t(),a("div",pt,[h("label",mt,C(T(o)("details.togglehilight.title")),1),se(je,{config:{value:u.value,disabled:!1},onToggled:ye},null,8,["config"])])):$("",!0),l.value?(t(),a("div",yt,[h("div",gt,[e.value?$("",!0):(t(),a("button",{key:0,type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":T(o)("details.item.see.list"),onClick:E[0]||(E[0]=V=>fe())},C(T(o)("details.item.see.list")),9,ft)),h("div",{class:G(["flex ml-auto bg-gray-200 py-8 items-center",{"w-full":e.value}])},[A((t(),a("button",{type:"button",content:T(o)(e.value?"details.items.previous":"details.item.previous.item"),onClick:E[1]||(E[1]=V=>re(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":T(o)(e.value?"details.items.previous":"details.item.previous.item"),disabled:n.value===0},E[3]||(E[3]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,ht)),[[te,{placement:"top"}]]),h("span",bt,C(e.value?T(o)("details.items.range",[n.value+1,Math.min(g.value,L().length),L().length]):T(o)("details.item.count",[n.value+1,L().length])),1),A((t(),a("button",{type:"button",content:T(o)(e.value?"details.items.next":"details.item.next.item"),onClick:E[2]||(E[2]=V=>re(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":T(o)(e.value?"details.items.next":"details.item.next.item"),disabled:!e.value&&n.value===L().length-1||e.value&&g.value>=L().length},E[4]||(E[4]=[h("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[h("g",null,[h("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,kt)),[[te,{placement:"top"}]])],2)])])):$("",!0),r.value?(t(),a("div",xt,[L().length>0?(t(),a("div",wt,[e.value?A((t(),a("div",{key:0,class:"flex flex-col",content:T(o)("details.layers.results.list.tooltip"),ref_key:"el",ref:k},[(t(!0),a(Z,null,Q(L().slice(n.value,g.value),(V,oe)=>A((t(),a("button",{class:"flex flex-grow truncate default-focus-style hover:bg-gray-200",key:oe,onClick:Ct=>ke(n.value+oe)},[se(me,{data:V,uid:v.uid,open:!1,"in-list":!0},null,8,["data","uid"])],8,_t)),[[we,"show-truncate"]])),128))],8,Tt)),[[Te],[te,{trigger:"manual",placement:"top-start",touch:!1}]]):(t(),Y(me,{key:1,data:N.value,uid:v.uid,open:!0,"in-list":!1},null,8,["data","uid"]))])):(t(),a("div",Lt,C(T(o)("details.layers.results.empty.currentLayer")),1))])):(t(),a("div",Et,C(T(o)("details.item.no.data")),1))],4)):(t(),a("div",{key:1,class:G(["flex justify-center py-10 items-center",v.results.length>1?"ml-42":""])},[E[5]||(E[5]=h("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1)),ne(" "+C(T(o)("details.item.loading")),1)],2))}}}),jt=ae(Mt,[["__scopeId","data-v-3706255a"]]),zt={class:"relative h-full"},It={class:"detailsContentSection overflow-y-auto h-full"},Ht=F({__name:"details-screen",props:{panel:{type:Object}},setup(v){const{t:k}=R(),i=K("iApi"),d=W(),p=w([]),_=w([]),y=w([]),b=w(!1),o=w(""),r=M(()=>d.activeGreedy),c=M(()=>d.payload),u=M(()=>d.properties),e=m=>{o.value=m},n=m=>y.value.find(z=>z.uid===m),j=m=>{m!==void 0&&(d.activeGreedy=m.length===0?0:m[0].requestTime,y.value=m,q(m))},q=m=>{if(o.value){const z=n(o.value);z?z.loading.then(()=>{z.requestTime===r.value&&(z.items.length>0?(d.activeGreedy=0,b.value=!1):O(m))}):O(m)}else O(m)},O=(m,z)=>{let g;if(z)g=z;else{const I=d.properties,l=m.map(x=>[I[x.layerId]?.priority??50,x.layerId]),f=new Set(l.map(x=>x[0]));g=[],f.forEach(x=>{const L=l.filter(N=>N[0]===x).map(N=>N[1]);g.push([x,L])}),g.sort((x,L)=>L[0]-x[0])}if(g.length===0){d.activeGreedy=0,b.value=!0;return}const D=g[g.length-1][1],B=m.filter(I=>D.includes(I.layerId)).map(I=>I.loading.then(()=>I.items.length>0?Promise.resolve(I):Promise.reject())),H=m.length===0?0:m[0].requestTime;Promise.any(B).then(I=>{I.requestTime===r.value&&(d.activeGreedy=0,o.value=I.uid,b.value=!1)}).catch(()=>{H===r.value&&(g.pop(),O(m,g))})};return X(()=>{_.value.push(U(c,m=>{j(m)},{deep:!1,immediate:!0}))}),J(()=>{p.value.forEach(m=>i.event.off(m)),_.value.forEach(m=>m())}),(m,z)=>{const g=Me("panel-screen");return t(),Y(g,{panel:v.panel},{header:pe(()=>[ne(C(T(d).origin==="toggleEvent"?T(k)("details.layers.title.gridOrigin"):T(k)("details.layers.title.identifyOrigin")),1)]),content:pe(()=>[h("div",zt,[y.value.length>1?(t(),Y(Ye,{key:0,results:y.value,detailsProperties:u.value,selected:o.value,onSelectionChanged:e},null,8,["results","detailsProperties","selected"])):$("",!0),h("div",It,[b.value?(t(),a("div",{key:1,class:G(["text-center",{"ml-42":y.value.length>1}])},C(y.value.length>=1?T(k)("details.layers.results.empty"):T(k)("details.layers.results.empty.noLayers")),3)):(t(),Y(jt,{key:0,uid:o.value,results:y.value},null,8,["uid","results"]))])])]),_:1},8,["panel"])}}}),Ot=ae(Ht,[["__scopeId","data-v-150a1d19"]]);export{Ot as default};
