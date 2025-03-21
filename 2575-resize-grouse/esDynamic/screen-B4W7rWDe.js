import{dM as C,dN as E,dS as q,dU as c,dY as v,dX as s,dT as S,e0 as p,d$ as k,d_ as z,ec as I,dW as _,fM as N,gO as Q,eb as M,fN as U,e2 as A,g5 as B,dQ as K,e3 as w,e6 as P,e7 as W,e9 as X,dR as Y,dV as j,ea as Z,gP as D,gQ as F,gj as G,gi as J,dZ as ee,e1 as ne,gl as ae}from"./main-BriipcPO.js";import{m as $}from"./marked.esm-DgqJBp_S.js";const te={key:0},le=["content"],se={class:"text-lg text-left flex-grow"},oe=["innerHTML"],re=C({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(r){const{t:x}=E();return(b,o)=>{const u=q("tippy");return r.helpSection.drawn?(c(),v("div",te,[s("div",null,[S((c(),v("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:o[0]||(o[0]=d=>b.$emit("expand")),content:p(x)(r.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,k(r.helpSection.header),1),s("div",{class:z(["dropdown-icon",{"transform -rotate-180":r.helpSection.expanded}])},o[1]||(o[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,le)),[[u,{placement:"top-end",hideOnClick:!1}]]),I(Q,{name:"help-item",mode:"out-in"},{default:_(()=>[S(s("div",{innerHTML:r.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,oe),[[N,r.helpSection.expanded]])]),_:1})])])):M("",!0)}}}),pe=U(re,[["__scopeId","data-v-7dc61532"]]),de={class:"h-26 mb-8 mx-8"},ie=["placeholder","aria-label"],ce={key:0},ue=C({__name:"screen",props:{panel:{type:Object,required:!0}},setup(r){const x=A("iApi"),b=B(),{t:o}=E(),u=K(()=>b.location),d=w([]),y=w([]),L=w([]),O=w(!1);let h,f;function R(e,t){const n=t.info.split(/(<[^>]*>)/);for(const[a,l]of n.entries())if(a%2===0&&l.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function H(e,t){const n=y.value[t].split(/(<[^>]*>)/);let a="";for(const[l,i]of n.entries())l%2===0?a+=i.replace(new RegExp(e,"gi"),g=>`<mark>${g}</mark>`):a+=i;d.value[t].info=a}function T(e,t){h=0,t.forEach((n,a)=>{n.info=y.value[a],n.drawn=R(e,n)||n.header.toLowerCase().indexOf(e.toLowerCase())>-1,h=n.drawn?h+1:h,n.expanded=n.drawn&&e.length>2,n.drawn&&e.length>2&&H(e,a)}),O.value=h===0}function V(e){e.expanded=!e.expanded}return P(()=>{L.value.push(W(()=>x.language,(e,t)=>{if(e===t)return;const n=new $.Renderer,a=u.value.slice(-1)==="/"?u.value:`${u.value}/`;n.image=(l,i,g)=>(l.indexOf("http")===-1&&(l=`${a}images/`+l),`<img src="${l}" alt="${g}">`),ae.get(`${a}${e}.md`).then(l=>{const i=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm,g=l.data.replace(new RegExp("\r","g"),"");d.value=[];let m;for(;m=i.exec(g);)d.value.push({header:m[1],info:$(m[0].split(`
`).splice(2).join(`
`),{renderer:n}),drawn:!0,expanded:!1}),y.value.push($(m[0].split(`
`).splice(2).join(`
`),{renderer:n}))})},{immediate:!0}))}),X(()=>{L.value.forEach(e=>e())}),(e,t)=>{const n=Y("panel-screen");return c(),j(n,{panel:r.panel},{header:_(()=>[Z(k(p(o)("help.title")),1)]),content:_(()=>[s("div",de,[S(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:p(o)("help.search"),"onUpdate:modelValue":t[0]||(t[0]=a=>F(f)?f.value=a:f=a),"aria-label":p(o)("help.search"),onInput:t[1]||(t[1]=a=>T(p(f),d.value)),onKeypress:t[2]||(t[2]=G(J(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,ie),[[D,p(f)]])]),O.value?(c(),v("div",ce,[s("p",null,k(p(o)("help.noResults")),1)])):M("",!0),(c(!0),v(ne,null,ee(d.value,(a,l)=>(c(),j(pe,{helpSection:a,key:l,onExpand:i=>V(a)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{ue as default};
