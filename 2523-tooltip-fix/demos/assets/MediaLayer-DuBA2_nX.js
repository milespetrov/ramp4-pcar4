const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mediaLayerUtils-CSrFs3B4.js","./utils-Bahg9Ety.js","./main-CdsSyLmf.js","./preload-helper-ExcqyqRp.js","./main-K0GaKQ3z.css","./originUtils-CPX8CCAY.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./PortalItem-CYho9V5f.js","./jsonContext-C4i4UXl-.js","./portalItemUtils-DoXsKFwi.js","./projection-DW4hqkh8.js","./projectBuffer-Cw1atCwM.js","./saveUtils-Deou3sVY.js","./resourceUtils-Dr-nQ3Yd.js","./uuid-Cl5lrJ4c.js","./resourceUtils-CkP8a6nE.js"])))=>i.map(i=>d[i]);
import{_ as Ne}from"./preload-helper-ExcqyqRp.js";import{q as s,C as R,g3 as Re,n as W,u as l,bx as d,dc as Ce,D as ae,s as x,eX as w,z as q,v as Q,bF as ce,A as We,aw as ue,dj as Ge,ia as fe,bn as Ue,bo as J,ib as ze,f as be,p as Be,dn as ye,dr as _e,dp as ke,dq as $e,fe as pe,ds as de,ic as Fe,U as Se,a1 as De,bz as Je,h0 as qe,d7 as ge,id as Ke,V as ne,gv as Xe,bS as Ze,aG as Qe,G as Ye,cZ as et,bj as tt,eU as nt,gH as ot,dD as rt,bA as st}from"./main-CdsSyLmf.js";import{S as Ie}from"./MultiOriginJSONSupport-D8yEj04b.js";import{f as it}from"./Layer-B2IJCJLw.js";import{l as lt}from"./BlendLayer-CT2OvfVo.js";import{b as at}from"./OperationalLayer-4gmAzNZO.js";import{j as ct}from"./PortalLayer-L-jklQ2Y.js";import{t as ut}from"./ScaleRangeLayer-ChrkHNz2.js";import{p as S,j as Oe,m as pt}from"./perspectiveUtils-C04fs1aj.js";import{s as dt}from"./mat3-XZDRtl20.js";import{t as ht,e as oe}from"./mat3f64-q3fE-ZOt.js";import{o as A,I as z,_ as ve}from"./vec2-DGVIkCvT.js";import{n as _,r as Y}from"./vec2f64-B7N_6o8F.js";import{V as K,N as mt,K as ft}from"./projection-DW4hqkh8.js";import{p as yt}from"./imageUtils-DWkdjPqh.js";import{n as gt}from"./uuid-Cl5lrJ4c.js";import{u as vt}from"./common-DQOJ18NT.js";import{p as Pt}from"./resourceExtension-Bpwy9B_7.js";import{o as wt}from"./BoundsStore-B0GzSqQ1.js";import{A as ee}from"./interfaces-CL2NbQte.js";import"./TimeExtent-CabtJ4-h.js";import"./jsonUtils-N0kWnI_0.js";import"./parser-Bxn8s3ve.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-pIm5M4dy.js";import"./commonProperties-BjODNSWn.js";import"./ElevationInfo-CPzFYQby.js";import"./lengthUtils-C4LFWJEB.js";import"./PortalItem-CYho9V5f.js";import"./portalItemUtils-DoXsKFwi.js";import"./normalizeUtilsSync-0VvaVLEe.js";import"./normalizeUtilsCommon-BDqFe87-.js";import"./vec32-D3aOfXef.js";import"./projectBuffer-Cw1atCwM.js";import"./PooledRBush-D1Skf5jg.js";import"./quickselect-QQC62dOK.js";let ie=class extends Re{projectOrWarn(e,t){if(e==null)return e;const{geometry:n,pending:o}=K(e,t);return o?null:o||n?n:(W.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:t}),null)}};ie=s([R("esri.layers.support.GeoreferenceBase")],ie);const X=ie,re=oe(),p=_();let F=class extends We{};s([l({type:Number,json:{write:!0}})],F.prototype,"x",void 0),s([l({type:Number,json:{write:!0}})],F.prototype,"y",void 0),F=s([R("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],F);let D=class extends Re{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};s([l()],D.prototype,"sourcePoint",void 0),s([l({type:d})],D.prototype,"mapPoint",void 0),D=s([R("esri.layers.support.ControlPointsGeoreference.ControlPoint")],D);let v=class extends Ce(X){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=ae.fromJSON(t.spatialReference),o=ht(...t.coefficients,1);return e.map(r=>(A(p,r.x,r.y),S(p,p,o),{sourcePoint:r,mapPoint:new d({x:p[0],y:p[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&y(e[0])&&(t.controlPoints=e.map(r=>{const i=r.sourcePoint;return{x:i.x,y:i.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const r=new x("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:o?.layer,georeference:this});o?.messages?o.messages.push(r):W.getLogger(this).error(r.name,r.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(re);if(e==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return $t(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!y(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[r,i,a,c]]}=e,u={sourcePoint:w(0,o),mapPoint:new d({x:r[0],y:r[1],spatialReference:t})},h={sourcePoint:w(0,0),mapPoint:new d({x:i[0],y:i[1],spatialReference:t})},m={sourcePoint:w(n,0),mapPoint:new d({x:a[0],y:a[1],spatialReference:t})},g={sourcePoint:w(n,o),mapPoint:new d({x:c[0],y:c[1],spatialReference:t})};y(u)&&y(h)&&y(m)&&y(g)&&(Pe(re,u,h,m,g),this.controlPoints=this.controlPoints.map(({sourcePoint:$})=>(A(p,$.x,$.y),S(p,p,re),{sourcePoint:$,mapPoint:new d({x:p[0],y:p[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:dt(oe(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;A(p,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return S(p,p,this.transform),new d({x:p[0],y:p[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!y(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=K(e,t).geometry)==null?null:(A(p,e.x,e.y),S(p,p,this.inverseTransform),w(p[0],p[1]))}toSourceNormalized(e){const t=this.toSource(e);return t!=null&&(t.x/=this.width,t.y/=this.height),t}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[r,i,a,c]=t;if(!y(r))return null;const u=r.mapPoint.spatialReference,h=this._projectControlPoint(i,u),m=this._projectControlPoint(a,u),g=this._projectControlPoint(c,u);if(!h.valid||!m.valid||!g.valid||!y(h.controlPoint))return null;e==null&&(e=oe());let $=null;return $=y(m.controlPoint)&&y(g.controlPoint)?Pe(e,r,h.controlPoint,m.controlPoint,g.controlPoint):y(m.controlPoint)?Rt(e,r,h.controlPoint,m.controlPoint):xt(e,r,h.controlPoint),$.every(Ae=>Ae===0)?null:$}_projectControlPoint(e,t){if(!y(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:r,pending:i}=K(o,t);return i?{valid:!1,controlPoint:null}:i||r?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:r}}:(W.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function y(e){return e?.sourcePoint!=null&&e.mapPoint!=null}s([l({type:[D],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[F]},coefficients:{type:[Number]},spatialReference:{type:ae}}}}})],v.prototype,"controlPoints",void 0),s([q("controlPoints")],v.prototype,"readControlPoints",null),s([Q("controlPoints")],v.prototype,"writeControlPoints",null),s([l({clonable:!1})],v.prototype,"coords",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"height",void 0),s([l({readOnly:!0})],v.prototype,"inverseTransform",null),s([l({readOnly:!0})],v.prototype,"transform",null),s([l({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"width",void 0),v=s([R("esri.layers.support.ControlPointsGeoreference")],v);const I=_(),O=_(),N=_(),T=_(),E=_(),M=_(),C=_(),V=_(),te=Math.PI/2;function L(e,t,n){A(e,n.sourcePoint.x,n.sourcePoint.y),A(t,n.mapPoint.x,n.mapPoint.y)}function xt(e,t,n){return L(I,E,t),L(O,M,n),z(N,O,I,te),z(T,I,O,te),z(C,M,E,-te),z(V,E,M,-te),he(e,I,O,N,T,E,M,C,V)}function Rt(e,t,n,o){return L(I,E,t),L(O,M,n),L(N,C,o),ve(T,I,O,.5),z(T,N,T,Math.PI),ve(V,E,M,.5),z(V,C,V,Math.PI),he(e,I,O,N,T,E,M,C,V)}function Pe(e,t,n,o,r){return L(I,E,t),L(O,M,n),L(N,C,o),L(T,V,r),he(e,I,O,N,T,E,M,C,V)}const bt=new Array(8).fill(0),_t=new Array(8).fill(0);function we(e,t,n,o,r){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=r[0],e[7]=r[1],e}function he(e,t,n,o,r,i,a,c,u){return Oe(e,we(bt,t,n,o,r),we(_t,i,a,c,u))}function $t(e,t,n,o){const r=Y(0,n),i=Y(0,0),a=Y(t,0),c=Y(t,n);return S(r,r,e),S(i,i,e),S(a,a,e),S(c,c,e),new ce({rings:[[r,i,a,c,r]],spatialReference:o})}const Z=v,B=_();let j=class extends X{constructor(e){super(e),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:e,topRight:t,bottomLeft:n,bottomRight:o}=this;if(e==null||t==null||n==null||o==null)return null;const r=e.spatialReference;return t=this.projectOrWarn(t,r),n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),t==null||n==null||o==null?null:new ce({rings:[[[n.x,n.y],[e.x,e.y],[t.x,t.y],[o.x,o.y],[n.x,n.y]]],spatialReference:r})}set coords(e){const{topLeft:t}=this;if(t==null)return;const n=t.spatialReference;if((e=this.projectOrWarn(e,n))==null)return;const{rings:[[o,r,i,a]]}=e;this.bottomLeft=new d({x:o[0],y:o[1],spatialReference:n}),this.topLeft=new d({x:r[0],y:r[1],spatialReference:n}),this.topRight=new d({x:i[0],y:i[1],spatialReference:n}),this.bottomRight=new d({x:a[0],y:a[1],spatialReference:n})}toSourceNormalized(e){const{topLeft:t,topRight:n,bottomRight:o,bottomLeft:r}=this;if(e==null||t==null||n==null||o==null||r==null)return null;const i=t.spatialReference;e=e.normalize();const a=K(e,i).geometry;if(a==null)return null;A(B,a.x,a.y);const c=Oe(oe(),[t.x,t.y,r.x,r.y,n.x,n.y,o.x,o.y],[0,0,0,1,1,0,1,1]);return S(B,B,c),w(B[0],B[1])}};s([l({clonable:!1})],j.prototype,"coords",null),s([l({type:d})],j.prototype,"bottomLeft",void 0),s([l({type:d})],j.prototype,"bottomRight",void 0),s([l({type:d})],j.prototype,"topLeft",void 0),s([l({type:d})],j.prototype,"topRight",void 0),j=s([R("esri.layers.support.CornersGeoreference")],j);const St=j;let G=class extends X{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:r}=this.extent;let i;if(this.rotation){const{x:a,y:c}=this.extent.center,u=se(a,c,this.rotation);i=[u(e,t),u(e,o),u(n,o),u(n,t)],i.push(i[0])}else i=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new ce({rings:[i],spatialReference:r})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if(e=this.projectOrWarn(e,t),e?.extent==null)return;const{rings:[[n,o,r]],extent:{center:{x:i,y:a}}}=e,c=Ge(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),u=se(i,a,-c),[h,m]=u(n[0],n[1]),[g,$]=u(r[0],r[1]);this.extent=new ue({xmin:h,ymin:m,xmax:g,ymax:$,spatialReference:t}),this.rotation=c}toSourceNormalized(e){const{extent:t,rotation:n}=this;if(e==null||t==null)return null;const{xmin:o,ymin:r,xmax:i,ymax:a,center:c,spatialReference:u}=t;e=e.normalize();const h=K(e,u).geometry;if(h==null)return null;let m=h.x,g=h.y;return n&&([m,g]=se(c.x,c.y,-n)(m,g)),w(fe(m,o,i,0,1),fe(g,a,r,0,1))}};function se(e,t,n){const o=vt(n),r=Math.cos(o),i=Math.sin(o);return(a,c)=>[r*(a-e)+i*(c-t)+e,r*(c-t)-i*(a-e)+t]}s([l({clonable:!1})],G.prototype,"coords",null),s([l({type:ue})],G.prototype,"extent",void 0),s([l({type:Number})],G.prototype,"rotation",void 0),G=s([R("esri.layers.support.ExtentAndRotationGeoreference")],G);const It=G;function Ot(e){return e?.type==="media"}function Ee(e,t){const n=Ue(t);return Ot(e)&&!!e.portalItem&&n!=null&&n>J.PORTAL_ITEM}function Et(e,t,n){if(!e||e.type==="control-points")return e;const{coords:o}=e;if(o?.rings[0]?.length!==5)return null;const[r,i,a,c]=o.rings[0],{spatialReference:u}=o;return new Z({controlPoints:[{mapPoint:new d({x:r[0],y:r[1],spatialReference:u}),sourcePoint:w(0,n)},{mapPoint:new d({x:i[0],y:i[1],spatialReference:u}),sourcePoint:w(0,0)},{mapPoint:new d({x:a[0],y:a[1],spatialReference:u}),sourcePoint:w(t,0)},{mapPoint:new d({x:c[0],y:c[1],spatialReference:u}),sourcePoint:w(t,n)}],width:t,height:n})}function Me(e,t,n){return{enabled:!Ee(n?.layer,n?.origin),ignoreOrigin:!0}}const Le={json:{name:"url",type:String,write:{overridePolicy:Me}}},je={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:Me}}},Mt={types:{key:"type",base:X,typeMap:{"control-points":Z,corners:St,"extent-and-rotation":It}},json:{types:{key:"type",base:X,typeMap:{"control-points":Z}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};let H=class extends ze(Ie(be)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Z.fromJSON(e)}writeGeoreference(e,t,n,o){const r=o?.resources?.pendingOperations,i=()=>{const a=Et(this.georeference,this.contentWidth,this.contentHeight);if(a){if(e.type!=="control-points"&&W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),a.controlPoints?.length!==4&&o?.messages)return void o.messages.push(new x("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));t[n]=a.write({},o)}};if(e.type!=="control-points"&&!this.loaded&&r)return t[n]={},void r.push(this.load().then(i));i()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:t,contentWidth:n,contentHeight:o}=this;if(e==null||t==null||n===0||o===0)return null;const r=t.toSourceNormalized(e);return r==null?null:(r.x*=n,r.y*=o,r)}};s([l(Mt)],H.prototype,"georeference",void 0),s([q("georeference")],H.prototype,"readGeoreference",null),s([Q("georeference")],H.prototype,"writeGeoreference",null),s([l({json:{read:!1,write:!1}})],H.prototype,"opacity",void 0),H=s([R("esri.layers.support.MediaElementBase")],H);const me=H;let P=class extends me{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const n=yt(t).then(o=>{this._set("content",o)});this.addResolvingPromise(n)}else if(t instanceof HTMLImageElement){const n=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(n)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new x("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return this.content==null?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,n,o){return Be(n.url,o)}writeImage(t,n,o,r){if(t==null)return;const i=r?.portalItem,a=r?.resources;if(!i||!a)return void(typeof t=="string"&&(n[o]=ye(t,r)));const c=Lt(t)?t:null;if(c){if(_e(c)==null)return void(n[o]=c);const u=ye(c,{...r,verifyItemRelativeUrls:r?.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},ke.NO);if(i&&u&&!$e(u))return a.toKeep.push({resource:i.resourceFromPath(u),compress:!1}),void(n[o]=u)}n[o]="<pending>",a.pendingOperations.push(jt(t).then(u=>{const h=Vt(u,i);n[o]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:{type:"blob",blob:u},compress:!1,finish:m=>{this.image=m.url}})}))}};s([l()],P.prototype,"animationOptions",void 0),s([l({readOnly:!0})],P.prototype,"content",void 0),s([l({readOnly:!0})],P.prototype,"contentWidth",null),s([l({readOnly:!0})],P.prototype,"contentHeight",null),s([l(Le)],P.prototype,"image",void 0),s([q("image",["url"])],P.prototype,"readImage",null),s([Q("image")],P.prototype,"writeImage",null),s([l(je)],P.prototype,"type",void 0),P=s([R("esri.layers.support.ImageElement")],P);const Te=P;function Lt(e){return typeof e=="string"&&!pe(e)&&!de(e)}async function jt(e){return typeof e=="string"?pe(e)?Fe(e):(await Se(e,{responseType:"blob"})).data:new Promise(t=>Tt(e).toBlob(t))}function Tt(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),r=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),o}function Vt(e,t){const n=gt(),o=`${De("media",n)}.${Pt({type:"blob",blob:e})}`;return t.resourceFromPath(o)}let b=class extends me{constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video"}load(){const e=this.video;return typeof e=="string"?this.addResolvingPromise(this._preProcessVideoUrl(e).then(t=>{const n=document.createElement("video");return n.src=t,n.crossOrigin="anonymous",n.autoplay=!0,n.muted=!0,n.loop=!0,n.playsInline=!0,this._loadVideo(n).then(()=>{this._set("content",n)})})):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new x("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):W.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,t,n,o){if(!e)return void(o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source is missing")));const r=Ht(e)?e:null;if(!r)return void(o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source must be an absolute url")));!$e(r)&&o?.blockedRelativeUrls&&o.blockedRelativeUrls.push(r);const i=Je(r);_e(i)?o?.messages&&o.messages.push(new x("video-element:unsupported-video","video source cannot be an item resource")):t[n]=i}async _preProcessVideoUrl(e){if(qe(e))return ge(e);try{return await Se(e,{method:"head"}),e}catch{return ge(e,!0)}}_loadVideo(e){return new Promise((t,n)=>{const o=Ke(e,"canplay",()=>{this.removeHandles("canplay"),this.autoplay?e.play().then(t,n):t()});this.addHandles(o,"canplay"),e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",de(e.src)||(e.src=e.src))})}};s([l()],b.prototype,"autoplay",void 0),s([l({readOnly:!0})],b.prototype,"content",void 0),s([l({readOnly:!0})],b.prototype,"contentWidth",null),s([l({readOnly:!0})],b.prototype,"contentHeight",null),s([l(Le)],b.prototype,"video",null),s([Q("video")],b.prototype,"writeVideo",null),s([l(je)],b.prototype,"type",void 0),b=s([R("esri.layers.support.VideoElement")],b);const Ve=b;function Ht(e){return typeof e=="string"&&!pe(e)&&!de(e)}const At={key:"type",defaultKeyValue:"image",base:me,typeMap:{image:Te,video:Ve}},xe=ne.ofType(At);let U=class extends be.LoadableMixin(Xe(Ze.EventedAccessor)){constructor(e){super(e),this._index=new wt,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const o of t.removed){const r=this._elementViewsMap.get(o);this._elementViewsMap.delete(o),this._index.delete(r),this.removeHandles(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:n}=this;for(const o of t.added){if(this._elementViewsMap.get(o))continue;const r=new pt({spatialReference:n,element:o});this._elementViewsMap.set(o,r);const i=Qe(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.addHandles(i,r)}this._elementsIndexes.clear(),this.elements.forEach((o,r)=>this._elementsIndexes.set(o,r)),this.emit("refresh")},this.elements=new xe}async load(e){if(Ye(e),!this.spatialReference){const t=this.elements.find(n=>n.georeference?.coords!=null);this._set("spatialReference",t?t.georeference.coords.spatialReference:ae.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",et(e,this._get("elements"),xe))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new ue({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):W.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await mt(e.spatialReference,this.spatialReference,null,t);const n=tt(e.spatialReference,this.spatialReference)?e:ft(e,this.spatialReference);if(!n)return[];const o=n.normalize(),r=[];for(const i of o)this._index.forEachInBounds(nt(i),({normalizedCoords:a,element:c})=>{a!=null&&ot(i,a)&&r.push(c)});return r.sort((i,a)=>this._elementsIndexes.get(i)-this._elementsIndexes.get(a)),r}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const n=e.normalizedBounds,o=this._index.has(e),r=n!=null;this._index.delete(e),r&&this._index.set(e,n),this.notifyChange("fullExtent"),t||(o!==r?this.emit("refresh"):this.emit("change",{element:e.element}))}};s([l()],U.prototype,"elements",null),s([l({readOnly:!0})],U.prototype,"fullExtent",null),s([l()],U.prototype,"spatialReference",null),U=s([R("esri.layers.support.LocalMediaElementSource")],U);const k=U;function le(e){return typeof e=="object"&&e!=null&&"type"in e}function He(e){return le(e)&&(e.type==="image"||e.type==="video")}let f=class extends lt(ut(at(ct(Ie(it))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=rt(async(t,n,o)=>{const{save:r,saveAs:i}=await Ne(()=>import("./mediaLayerUtils-CSrFs3B4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url);switch(t){case ee.SAVE:return r(this,n);case ee.SAVE_AS:return i(this,o,n)}}),this.source=new k}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new x("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const n=this._getSourceOverride(t,this.georeference);n&&(this.setAtOrigin("source",n,"web-map"),this.setAtOrigin("source",n,"web-scene"),t=n);const o=le(t)?new k({elements:new ne([t])}):t;this._set("effectiveSource",o),this.spatialReference&&(o.spatialReference=this.spatialReference),await o.load(e),this.spatialReference=o.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):W.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new k({elements:new ne(e)}):e instanceof ne?new k({elements:e}):e:null}readSource(e,t,n){if("itemId"in t&&t.itemId)return;const o=this._createSource(t);return o?.read(t,n),o}writeSource(e,t,n,o){if(e&&e instanceof k){const r=e.elements.length;if(r!==1)return void(o?.messages&&o.messages.push(new x("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}He(e)?e.write(t,o):o?.messages&&(e?o.messages.push(new x("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):o.messages.push(new x("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(ee.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(ee.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new Te;case"video":return new Ve}return null}_getSourceOverride(e,t){if(le(e)&&this.originIdOf("source")===J.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===J.WEB_MAP||this.originIdOf("georeference")===J.WEB_SCENE)){const n=e.toJSON(),o=this._createSource(n);return o.read({...n},{origin:"portal-item"}),o.read({georeference:t},{origin:"web-map"}),o.read({georeference:t},{origin:"web-scene"}),o}return null}};s([l({readOnly:!0})],f.prototype,"effectiveSource",void 0),s([l({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],f.prototype,"georeference",void 0),s([q("web-document","georeference")],f.prototype,"readGeoreference",null),s([l({type:String})],f.prototype,"copyright",void 0),s([l({readOnly:!0})],f.prototype,"fullExtent",null),s([l({type:["MediaLayer"]})],f.prototype,"operationalLayerType",void 0),s([l({type:["show","hide"]})],f.prototype,"listMode",void 0),s([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:Z}},overridePolicy(e,t,n){return{enabled:!0,allowNull:!1,ignoreOrigin:Ee(this,n?.origin)&&He(e)&&!!e.georeference&&e.originIdOf("georeference")>J.PORTAL_ITEM}}}}})],f.prototype,"source",null),s([st("source")],f.prototype,"castSource",null),s([q("source",["url"])],f.prototype,"readSource",null),s([Q("source")],f.prototype,"writeSource",null),s([l()],f.prototype,"spatialReference",void 0),s([l({readOnly:!0})],f.prototype,"type",void 0),f=s([R("esri.layers.MediaLayer")],f);const Rn=f;export{Rn as default};
