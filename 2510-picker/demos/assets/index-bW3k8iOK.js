import{dM as _,dN as E,e2 as w,e3 as d,gi as l,e8 as x,ed as i,e9 as y,dY as M,dX as A,d$ as T,e0 as I,dU as P,fQ as R,F as S}from"./main-Cndq3wrU.js";import"./preload-helper-ExcqyqRp.js";const D={en:{"panguard.instructions":"Use two fingers to pan the map"},fr:{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}},$={class:"pg-label"},b=_({__name:"map-panguard",setup(m){const{t:p}=E(),t=w("iApi"),a=d(),o=d(-1),n=l([]),r=l([]);x(()=>{c(),r.push(t.event.on(i.MAP_CREATED,()=>{c()})),r.push(t.event.on(i.MAP_DESTROYED,()=>{n.forEach(e=>e.remove())})),r.push(t.event.on(i.MAP_REFRESH_START,()=>{n.forEach(e=>e.remove())})),r.push(t.event.on(i.MAP_REFRESH_END,()=>{c()}))}),y(()=>{r.forEach(e=>t.event.off(e)),n.forEach(e=>e.remove())});const c=()=>{const e=new Map;t.geo.map.viewPromise.then(()=>{n.push(t.geo.map.esriView.on("pointer-down",s=>{s.pointerType==="touch"&&e.set(s.pointerId,{x:s.x,y:s.y})})),n.push(t.geo.map.esriView.on(["pointer-up","pointer-leave"],s=>{s.pointerType==="touch"&&window.setTimeout(()=>{e.delete(s.pointerId)},200)})),n.push(t.geo.map.esriView.on("pointer-move",s=>{const{pointerId:h,pointerType:v,x:f,y:g}=s,u=e.get(h);if(!u||v!=="touch"||e.size!==1){a.value.classList.remove("pg-active");return}Math.sqrt(Math.pow(f-u.x,2)+Math.pow(g-u.y,2))<20||(a.value.classList.add("pg-active"),o.value!==-1&&clearTimeout(o.value),o.value=window.setTimeout(()=>{a.value.classList.remove("pg-active")},2e3))}))})};return(e,s)=>(P(),M("div",{class:"pg",ref_key:"panGuard",ref:a},[A("p",$,T(I(p)("panguard.instructions")),1)],512))}}),B=R(b,[["__scopeId","data-v-a33cbb28"]]);class C extends S{added(){Object.entries(D).forEach(o=>this.$iApi.$i18n.mergeLocaleMessage(...o));const{destroy:p,el:t}=this.mount(B,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]),this.removed=()=>{p()}}}export{C as default};
