import{F as R,gb as w,dM as Y,gc as z,e2 as N,e3 as s,dQ as b,gd as S,e8 as T,dE as W,e5 as q,e9 as X,P as B,ge as G,ga as O,gf as j,gg as V,dY as D,dX as F,gh as K,dU as Q}from"./main-C6lijZBn.js";class U extends R{_parseConfig(t){const a=w(this.$vApp.$pinia);t&&(a.arrowIcon=t.arrowIcon,a.poleIcon=t.poleIcon)}get config(){return super.config}}const J="path",Z=12,ee="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z",te="#ff0000ff",ae=5,se=6,ie={style:J,size:Z,path:ee,colour:te,xOffset:ae,yOffset:se},oe=["innerHTML"],re=Y({__name:"northarrow",setup(y){const t=z(),a=w(),e=N("iApi"),n=s(),M=b(()=>a.arrowIcon),$=b(()=>a.poleIcon),h=s(0),r=s(0),d=s(!1),k=s(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`),A=s(!1),x=S([]),I=s([]);let P;T(()=>{const i=t.config.map;I.value=i.tileSchemas,M?.value&&(k.value=`<img width='25' src='${M.value}'>`),e.geo.map.esriView?.ready&&C(e.geo.map.getExtent()),x.push(e.event.on(W.MAP_EXTENTCHANGE,q(300,C)))}),X(()=>{x.forEach(i=>e.event.off(i))});const C=async i=>{P=t.activeBasemapConfig;let p;for(const f of I.value)if(P?.tileSchemaId===f.id){p=f?.hasNorthPole;break}const l=e.$vApp.$el.querySelector(".inner-shell"),c=n.value.querySelector(".northarrow").getBoundingClientRect().width,v=e.$vApp.$el.querySelector(".appbar")?.clientWidth||0,E=i.sr;if(p||typeof p>"u"&&!E.isWebMercator()){const f=new B("pole",{x:-96,y:90}),_=await e.geo.proj.projectGeometry(E,f),u=e.geo.map.mapPointToScreenPoint(_);if(u.screenY<0){d.value=!0;const o={screenX:l.clientWidth/2,screenY:l.clientHeight};h.value=Math.atan((u.screenX-o.screenX)/(o.screenY-u.screenY))*180/Math.PI,r.value=l.clientWidth/2+l.clientHeight*Math.tan(h.value*Math.PI/180)-c/2,r.value=Math.max(v-c/2,Math.min(e.geo.map.getPixelWidth()-c/2,r.value))}else if(d.value=!1,!A.value){A.value=!0;let o;$.value?o={style:G.ICON,icon:$.value,height:16.5,width:16.5}:o=ie;const m=e.geo.layer.createLayer({id:g,layerType:O.GRAPHIC,url:"",cosmetic:!0});e.geo.map.addLayer(m),m.loadPromise().then(()=>{const L=new j(_,"northpole"),H=new V(o);L.style=H,m.addGraphic(L)})}}else d.value=!0,h.value=0,r.value=v+(l.clientWidth-v-c)/2};return(i,p)=>(Q(),D("div",{class:"absolute transition-all duration-300 ease-out",style:K({"transform-origin":"top center",transform:`rotate(${h.value}deg)`,left:`${r.value}px`,visibility:d.value?"visible":"hidden"}),ref_key:"el",ref:n},[F("span",{class:"northarrow",innerHTML:k.value},null,8,oe)],4))}}),g="RampPoleMarker";class le extends U{async added(){this._parseConfig(this.config);const t=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),{destroy:a,el:e}=this.mount(re,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]),this.removed=()=>{t(),this.$iApi.geo.layer.getLayer(g)&&this.$iApi.geo.map.removeLayer(g),w(this.$vApp.$pinia).$reset(),a()}}}export{g as POLE_MARKER_LAYER_ID,le as default};
