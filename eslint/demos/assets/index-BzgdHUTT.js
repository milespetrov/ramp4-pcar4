const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./p2-screen-1-Q1q95D2n.js","./main-QmNQNEqS.js","./preload-helper-ExcqyqRp.js","./main-yQhLLpS1.css"])))=>i.map(i=>d[i]);
import{_ as v}from"./preload-helper-ExcqyqRp.js";import{dM as c,e2 as z,dR as u,dV as m,dW as l,dU as b,dX as e,gm as w,ea as i,dN as h,d$ as p,e0 as g,F as G,f9 as d}from"./main-QmNQNEqS.js";const $=c({__name:"appbar-button",props:{options:{type:Object}},setup(o){const s=z("iApi"),t=()=>{s.panel.toggle({id:"p2",screen:"p-2-screen-2"})};return(n,r)=>{const f=u("appbar-button",!0);return b(),m(f,{onClickFunction:t,tooltip:"Gazebo"},{default:l(()=>[e("span",{style:w({color:o.options?.colour??"#BDBDBD"})},"G ",4)]),_:1})}}}),A={class:"flex flex-col items-center"},S=c({__name:"p1-screen-1",props:{panel:{type:Object,required:!0}},setup(o){return(s,t)=>{const n=u("panel-screen");return b(),m(n,{panel:o.panel},{header:l(()=>t[1]||(t[1]=[i(" Gazebo/Panel 1/Screen A ")])),controls:l(()=>t[2]||(t[2]=[e("a",{href:"javascript:;"},"Option 1",-1),e("a",{href:"javascript:;"},"Option 2",-1),e("a",{href:"javascript:;"},"Option 3",-1)])),content:l(()=>[e("div",A,[e("button",{type:"button",onClick:t[0]||(t[0]=r=>o.panel.show({screen:"p-1-screen-2"})),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 2 "),t[3]||(t[3]=e("br",null,null,-1)),t[4]||(t[4]=e("img",{src:"https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",alt:"Gazebo1"},null,-1))])]),_:1},8,["panel"])}}}),C={class:"flex flex-col items-center"},j=c({__name:"p1-screen-2",props:{panel:{type:Object,required:!0}},setup(o){return(s,t)=>{const n=u("panel-screen");return b(),m(n,{panel:o.panel},{header:l(()=>t[1]||(t[1]=[i(" Gazebo/Panel 1/Screen B ")])),content:l(()=>[e("div",C,[e("button",{type:"button",onClick:t[0]||(t[0]=r=>o.panel.show({screen:"p-1-screen-1"})),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 1 "),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=e("img",{src:"http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",alt:"Gazebo2"},null,-1))])]),_:1},8,["panel"])}}}),B={class:"flex flex-row justify-center items-center mt-16"},k={class:"mt-16"},O=c({__name:"p2-screen-2",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(o){const s=o,{t}=h(),n=z("iApi"),r=()=>{s.panel.show("p-2-screen-3"),n.event.emit("gazebo/beholdMyText","I am a cat")};return(f,a)=>{const _=u("panel-screen");return b(),m(_,{panel:o.panel},{header:l(()=>a[2]||(a[2]=[i(" Gazebo/Panel 2/Screen B ")])),content:l(()=>[i(p(g(t)("gz.hello2"))+" ",1),e("div",B,[e("button",{type:"button",onClick:a[0]||(a[0]=y=>o.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen B"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),e("button",{type:"button",onClick:a[1]||(a[1]=y=>r()),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," See a cat ")]),e("p",k,p(o.greeting),1)]),_:1},8,["panel"])}}}),P={class:"flex flex-col items-center mt-16"},T={class:"ml-32 font-bold"},D={class:"ml-32 font-bold"},E={class:"ml-32 font-bold"},N=c({__name:"p2-screen-3",props:{panel:{type:Object,required:!0}},setup(o){const{t:s}=h({messages:{en:{lang_native:"En",who:"[me cat]"},fr:{lang_native:"Fr",who:"[moi chat]"}}});return(t,n)=>{const r=u("panel-screen");return b(),m(r,{panel:o.panel},{header:l(()=>n[1]||(n[1]=[i(" Gazebo/Panel 2/Screen C ")])),content:l(()=>[e("div",P,[e("button",{type:"button",onClick:n[0]||(n[0]=f=>o.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen C"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),n[5]||(n[5]=e("img",{class:"my-16",src:"https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",alt:"",srcset:""},null,-1)),n[6]||(n[6]=e("p",null,"Locale merging:",-1)),e("dl",null,[n[2]||(n[2]=e("dt",null,"global locale:",-1)),e("dd",T,p(g(s)("lang_native")),1),n[3]||(n[3]=e("dt",null,"fixture locale:",-1)),e("dd",D,p(g(s)("gz.hello")),1),n[4]||(n[4]=e("dt",null,"common panels locale:",-1)),e("dd",E,p(g(s)("who")),1)])])]),_:1},8,["panel"])}}}),x={en:{"gz.hello":"I'm a simple panel - but from a locale file","gz.hello2":"I'm a simple panel","gz.alert1":"Gazebo","gz.alert2":"Gazebo two"},fr:{"gz.hello":'Bonjour. Je suis un panel"',"gz.hello2":'Bonjour. Je suis un panel"',"gz.alert1":"Gazebo","gz.alert2":"Gazebo deux"}},I="gazebo/beholdMyText";class q extends G{added(){this.$iApi.event.registerEventName(I),this.$iApi.component("gazebo-appbar-button",$),this.$iApi.panel.register({id:"p1",config:{screens:{"p-1-screen-1":d(S),"p-1-screen-2":d(j)},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert1"}},{i18n:{messages:x}}),this.$iApi.panel.register({id:"p2",config:{screens:{"p-2-screen-1":()=>new Promise(s=>setTimeout(()=>v(()=>import("./p2-screen-1-Q1q95D2n.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>{s(t)}),2e3)),"p-2-screen-2":d(O),"p-2-screen-3":()=>new Promise(s=>s(d(N)))},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert2"}},{i18n:{messages:x}}),this.handlePanelTeleports(["p1","p2"])}}export{q as default};
