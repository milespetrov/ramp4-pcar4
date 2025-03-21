import{em as C,en as O,es as A,cZ as d,cX as g,cY as s,et as k,ez as p,ey as S,ex as I,eK as B,ev as L,go as K,hj as T,eJ as j,cW as V,eB as W,gA as F,eq as J,r as w,eE as N,eF as U,eH as X,er as Y,eu as M,eI as Z,hk as D,hl as G,gN as P,gM as Q,ew as ee,eA as ne,gW as ae}from"./main-CZM6prq-.js";import{m as _}from"./marked.esm-DgqJBp_S.js";const te={key:0},le=["content"],se={class:"text-lg text-left flex-grow"},oe=["innerHTML"],re=C({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(r){const{t:x}=O();return(y,o)=>{const u=A("tippy");return r.helpSection.drawn?(d(),g("div",te,[s("div",null,[k((d(),g("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:o[0]||(o[0]=i=>y.$emit("expand")),content:p(x)(r.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,S(r.helpSection.header),1),s("div",{class:I(["dropdown-icon",{"transform -rotate-180":r.helpSection.expanded}])},o[1]||(o[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,le)),[[u,{placement:"top-end",hideOnClick:!1}]]),B(T,{name:"help-item",mode:"out-in"},{default:L(()=>[k(s("div",{innerHTML:r.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,oe),[[K,r.helpSection.expanded]])]),_:1})])])):j("",!0)}}}),pe=V(re,[["__scopeId","data-v-7dc61532"]]),ie={class:"h-26 mb-8 mx-8"},ce=["placeholder","aria-label"],de={key:0},ue=C({__name:"screen",props:{panel:{type:Object,required:!0}},setup(r){const x=W("iApi"),y=F(),{t:o}=O(),u=J(()=>y.location),i=w([]),b=w([]),$=w([]),E=w(!1);let h,f;function H(e,t){const n=t.info.split(/(<[^>]*>)/);for(const[a,l]of n.entries())if(a%2===0&&l.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function R(e,t){const n=b.value[t].split(/(<[^>]*>)/);let a="";for(const[l,c]of n.entries())l%2===0?a+=c.replace(new RegExp(e,"gi"),m=>`<mark>${m}</mark>`):a+=c;i.value[t].info=a}function q(e,t){h=0,t.forEach((n,a)=>{n.info=b.value[a],n.drawn=H(e,n)||n.header.toLowerCase().indexOf(e.toLowerCase())>-1,h=n.drawn?h+1:h,n.expanded=n.drawn&&e.length>2,n.drawn&&e.length>2&&R(e,a)}),E.value=h===0}function z(e){e.expanded=!e.expanded}return N(()=>{$.value.push(U(()=>x.language,(e,t)=>{if(e===t)return;const n=new _.Renderer,a=u.value.slice(-1)==="/"?u.value:`${u.value}/`;n.image=(l,c,m)=>(l.indexOf("http")===-1&&(l=`${a}images/`+l),`<img src="${l}" alt="${m}">`),ae.get(`${a}${e}.md`).then(l=>{const c=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm,m=l.data.replace(new RegExp("\r","g"),"");i.value=[];let v;for(;v=c.exec(m);)i.value.push({header:v[1],info:_(v[0].split(`
`).splice(2).join(`
`),{renderer:n}),drawn:!0,expanded:!1}),b.value.push(_(v[0].split(`
`).splice(2).join(`
`),{renderer:n}))})},{immediate:!0}))}),X(()=>{$.value.forEach(e=>e())}),(e,t)=>{const n=Y("panel-screen");return d(),M(n,{panel:r.panel},{header:L(()=>[Z(S(p(o)("help.title")),1)]),content:L(()=>[s("div",ie,[k(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:p(o)("help.search"),"onUpdate:modelValue":t[0]||(t[0]=a=>G(f)?f.value=a:f=a),"aria-label":p(o)("help.search"),onInput:t[1]||(t[1]=a=>q(p(f),i.value)),onKeypress:t[2]||(t[2]=P(Q(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,ce),[[D,p(f)]])]),E.value?(d(),g("div",de,[s("p",null,S(p(o)("help.noResults")),1)])):j("",!0),(d(!0),g(ne,null,ee(i.value,(a,l)=>(d(),M(pe,{helpSection:a,key:l,onExpand:c=>z(a)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{ue as default};
