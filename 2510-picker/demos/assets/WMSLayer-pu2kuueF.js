import{dd as Me,aI as C,aB as N,aG as J,ei as je,V as K,q as a,u,aw as R,z as O,bA as Te,C as xe,s as we,bT as U,D as F,I as ve,av as _e,ap as Ce,az as qe,J as Ve,cq as ie,U as k,bj as Be,d7 as We,b6 as ke,b3 as De,ev as Ge,K as Xe,h as He,v as D,br as Je,dI as ze}from"./main-Cndq3wrU.js";import{n as Ze}from"./CollectionFlattener-Bgxg22G2.js";import{m as Ke,S as Qe}from"./MultiOriginJSONSupport-CVx1JAMK.js";import{i as se}from"./scaleUtils-CaYAbPNP.js";import{f as Ye}from"./Layer-DWC6tCOI.js";import{l as et}from"./BlendLayer-_PIMF2l4.js";import{b as tt}from"./OperationalLayer-CZmd7V8a.js";import{j as rt}from"./PortalLayer-DwRx10gC.js";import{f as nt}from"./RefreshableLayer-a5OxRtwW.js";import{t as it}from"./ScaleRangeLayer-BJ-DIprL.js";import{l as st}from"./TemporalLayer-B8jWDs7P.js";import{o as z}from"./crsUtils-DAndLU68.js";import{b as at}from"./arcgisLayerUrl-D1E7CgSg.js";import{d as ot,y as lt}from"./commonProperties-DdHMj-ic.js";import{a as ae}from"./ExportWMSImageParameters-v-sTsstv.js";import{t as ut}from"./imageBitmapUtils-DkS7c4xg.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-CNKqe8aE.js";import"./jsonUtils-DImCrR9r.js";import"./parser-XSnqArXu.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BKi56vQE.js";import"./common-DQOJ18NT.js";import"./PortalItem-DAgDbNA5.js";import"./portalItemUtils-CGMN2ydG.js";import"./projection-C3kMvsoo.js";import"./projectBuffer-B35Qssqf.js";import"./TimeInfo-BDX-2uAJ.js";import"./ElevationInfo-AedEJQn4.js";import"./lengthUtils-DaQZk_OQ.js";var j;let pt=0,y=j=class extends Me(Ke){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([C(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},N),C(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},N),J(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},N)])}get id(){return this._get("id")??pt++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return je(K.ofType(j),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new j;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map(t=>t.clone())??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],y.prototype,"description",void 0),a([u({readOnly:!0})],y.prototype,"dimensions",void 0),a([u({type:R,json:{name:"extent"}})],y.prototype,"fullExtent",void 0),a([u()],y.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],y.prototype,"id",null),a([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],y.prototype,"legendUrl",void 0),a([O("legendUrl",["legendUrl","legendURL"])],y.prototype,"readLegendUrl",null),a([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],y.prototype,"legendEnabled",void 0),a([u()],y.prototype,"layer",void 0),a([u()],y.prototype,"maxScale",void 0),a([u()],y.prototype,"minScale",void 0),a([u({readOnly:!0})],y.prototype,"effectiveScaleRange",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],y.prototype,"name",void 0),a([u()],y.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],y.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],y.prototype,"queryable",void 0),a([u()],y.prototype,"sublayers",void 0),a([Te("sublayers")],y.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],y.prototype,"spatialReferences",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],y.prototype,"title",void 0),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],y.prototype,"visible",null),y=j=a([xe("esri.layers.support.WMSSublayer")],y);const Z=y,oe={84:4326,83:4269,27:4267};function mt(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const g=Array.prototype.slice.call(r.childNodes).map(P=>P.textContent).join(`\r
`);throw new we("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",g)}const n=b("Capability",r),i=b("Service",r),l=n&&b("Request",n);if(!n||!i||!l)return null;const s=b("Layer",n);if(!s)return null;const c=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",o=w("Title",i,"")||w("Name",i,""),p=w("AccessConstraints",i,""),f=/^none$/i.test(p)?"":p,d=w("Abstract",i,""),x=parseInt(w("MaxWidth",i,"5000"),10),v=parseInt(w("MaxHeight",i,"5000"),10),S=ue(l,"GetMap"),I=le(l,"GetMap"),h=A(s,c,t);if(!h)return null;let Q,q=0;const Ee=Array.prototype.slice.call(n.childNodes),$e=h.sublayers??[],V=g=>{g!=null&&$e.push(g)};Ee.forEach(g=>{g.nodeName==="Layer"&&(q===0?Q=g:(q===1&&h.name&&(h.name="",V(A(Q,c,t))),V(A(g,c,t))),q++)});let E=h.sublayers,B=h.extent;const Oe=h.fullExtents??[];if(E||(E=[]),E.length===0&&E.push(h),!B){const g=new R(E[0].extent);h.extent=g.toJSON(),B=h.extent}const Re=h.spatialReferences.length>0?h.spatialReferences:Se(h),Y=le(l,"GetFeatureInfo"),Pe=Y?ue(l,"GetFeatureInfo"):null,ee=Ie(E),Le=h.minScale||0,Ae=h.maxScale||0,te=h.dimensions??[],Ue=ee.reduce((g,P)=>g.concat(P.dimensions??[]),[]),re=te.concat(Ue).filter(Fe);let ne=null;if(re.length){const g=re.map(P=>{const{extent:W}=P;return ft(W)?W.map(M=>M.getTime()):W?.map(M=>[M.min.getTime(),M.max.getTime()])}).flat(2).filter(U);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...g),Math.max(...g)]}}return{copyright:f,description:d,dimensions:te,extent:B,fullExtents:Oe,featureInfoFormats:Pe,featureInfoUrl:Y,mapUrl:I,maxWidth:x,maxHeight:v,maxScale:Ae,minScale:Le,layers:ee,spatialReferences:Re,supportedImageFormatTypes:S,timeInfo:ne,title:o,version:c}}function ct(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function Se(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=Se(t);if(r.length>0)return r}return[]}function Ie(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(Ie(r.sublayers)),delete r.sublayers);return t}function T(e,t,r){return t.getAttribute(e)??r}function dt(e,t,r,n){const i=b(e,r);return i?T(t,i,n):n}function b(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Ne(n)&&n.nodeName===e)return n}return null}function _(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];Ne(i)&&i.nodeName===e&&r.push(i)}return r}function w(e,t,r){return b(e,t)?.textContent??r}function L(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),s=parseFloat(e.getAttribute("maxy"));let c,o,p,f;r?(c=isNaN(i)?-Number.MAX_VALUE:i,o=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(s)?Number.MAX_VALUE:s,f=isNaN(l)?Number.MAX_VALUE:l):(c=isNaN(n)?-Number.MAX_VALUE:n,o=isNaN(i)?-Number.MAX_VALUE:i,p=isNaN(l)?Number.MAX_VALUE:l,f=isNaN(s)?Number.MAX_VALUE:s);const d=new F({wkid:t});return new R({xmin:c,ymin:o,xmax:p,ymax:f,spatialReference:d})}function le(e,t){const r=b(t,e);if(r){const n=b("DCPType",r);if(n){const i=b("HTTP",n);if(i){const l=b("Get",i);if(l){let s=dt("OnlineResource","xlink:href",l,null);if(s){const c=s.indexOf("&");return c!==-1&&c===s.length-1&&(s=s.slice(0,-1)),ht(s,["service","request"])}}}}}return null}function ue(e,t){const r=_("Operation",e);if(!r.length)return _("Format",b(t,e)).map(({textContent:i})=>i).filter(U);const n=[];for(const i of r)if(i.getAttribute("name")===t){const l=_("Format",i);for(const{textContent:s}of l)s!=null&&n.push(s)}return n}function pe(e,t,r){const n=b(t,e);if(!n)return r;const{textContent:i}=n;if(i==null||i==="")return r;const l=Number(i);return isNaN(l)?r:l}function A(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},i=b("LatLonBoundingBox",e),l=b("EX_GeographicBoundingBox",e);let s=null;i&&(s=L(i,4326)),l&&(s=new R(0,0,0,0,new F({wkid:4326})),s.xmin=parseFloat(w("westBoundLongitude",l,"0")),s.ymin=parseFloat(w("southBoundLatitude",l,"0")),s.xmax=parseFloat(w("eastBoundLongitude",l,"0")),s.ymax=parseFloat(w("northBoundLatitude",l,"0"))),i||l||(s=new R(-180,-90,180,90,new F({wkid:4326}))),n.minScale=pe(e,"MaxScaleDenominator",0),n.maxScale=pe(e,"MinScaleDenominator",0);const c=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(o=>{if(o.nodeName==="Name")n.name=o.textContent||"";else if(o.nodeName==="Title")n.title=o.textContent||"";else if(o.nodeName==="Abstract")n.description=o.textContent||"";else if(o.nodeName==="BoundingBox"){const p=o.getAttribute(c);if(p&&p.indexOf("EPSG:")===0){const d=parseInt(p.slice(5),10);d===0||isNaN(d)||s||(s=t==="1.3.0"?L(o,d,z(d)):L(o,d))}const f=p?.indexOf(":");if(f&&f>-1){let d=parseInt(p.slice(f+1),10);d===0||isNaN(d)||(d=oe[d]??d);const x=t==="1.3.0"?L(o,d,z(d)):L(o,d);x&&n.fullExtents&&n.fullExtents.push(x)}}else if(o.nodeName===c)(o.textContent?.split(" ")??[]).forEach(p=>{let f=NaN;if(p.includes(":")){const[d,x]=p.toUpperCase().split(":");d!=="CRS"&&d!=="EPSG"||(f=parseInt(x,10))}else f=parseInt(p,10);if(f!==0&&!isNaN(f)){const d=oe[f]??f;n.spatialReferences.includes(d)||n.spatialReferences.push(d)}});else if(o.nodeName!=="Style"||n.legendUrl){if(o.nodeName==="Layer"){const p=A(o,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=b("LegendURL",o);if(p){const f=b("OnlineResource",p);f&&(n.legendUrl=f.getAttribute("xlink:href"))}}}),n.extent=s?.toJSON(),n.dimensions=_("Dimension",e).filter(o=>o.getAttribute("name")&&o.getAttribute("units")&&o.textContent).map(o=>{const p=o.getAttribute("name"),f=o.getAttribute("units"),d=o.textContent,x=o.getAttribute("unitSymbol")??void 0,v=o.getAttribute("default")??void 0,S=T("default",o,"0")!=="0",I=T("nearestValue",o,"0")!=="0",h=T("current",o,"0")!=="0";return Fe({name:p,units:f})?{name:"time",units:"ISO8601",extent:de(d),default:de(v),multipleValues:S,nearestValue:I,current:h}:yt({name:p,units:f})?{name:"elevation",units:f,extent:me(d),unitSymbol:x,default:me(v),multipleValues:S,nearestValue:I}:{name:p,units:f,extent:ce(d),unitSymbol:x,default:ce(v),multipleValues:S,nearestValue:I}}),n}function ft(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Ne(e){return e.nodeType===Node.ELEMENT_NODE}function yt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Fe(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ht(e,t){const r=[],n=ve(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:parseFloat(i[0]),max:parseFloat(i[1]),resolution:i.length>=3&&i[2]!=="0"?parseFloat(i[2]):void 0}}).filter(U):r.map(n=>parseFloat(n))}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:i[0],max:i[1],resolution:i.length>=3&&i[2]!=="0"?i[2]:void 0}}).filter(U):r}function de(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:G(i[0]),max:G(i[1]),resolution:i.length>=3&&i[2]!=="0"?gt(i[2]):void 0}}).filter(U):r.map(n=>G(n))}function G(e){return _e.fromISO(e,{zone:Ce.utcInstance}).toJSDate()}function gt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:$(r[1]),months:$(r[2]),days:$(r[3]),hours:$(r[4]),minutes:$(r[5]),seconds:$(r[6])}:null}function $(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function X(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const bt="0000-01-01T00:00:00Z",xt="9999-12-31T23:59:59Z";function fe(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${X(t)}`:`${t?X(t):bt}/${r?X(r):xt}`}const ye=new Set([102100,3857,102113,900913]),wt=new Set([3395,54004]);function vt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&ye.has(r)?t.find(n=>ye.has(n))||t.find(n=>wt.has(n))||102100:r)}const H=new qe({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function he(e){return e==="text/html"}function ge(e){return e==="text/plain"}let m=class extends et(st(nt(it(tt(rt(Qe(Ye))))))){constructor(...e){super(...e),this.allSublayers=new Ze({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([C(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},N),C(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},N)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ve).then(()=>this._fetchService(t)).then(()=>this._checkLayerValidity())),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new R({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(he)??this.featureInfoFormats.find(ge)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(he(e)||ge(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new F(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return be(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return be(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const i=new Map,l=e.flatten(({sublayers:s})=>s??[]);for(const s of l)if(typeof s.parent?.id=="number"){const c=i.get(s.parent.id);c!=null?c.push(s.id):i.set(s.parent.id,[s.id])}for(const s of l){const c={sublayer:s,...n},o=s.write({parentLayerId:typeof s.parent?.id=="number"?s.parent.id:-1},c);if(i.has(s.id)&&(o.sublayerIds=i.get(s.id)),!s.sublayers&&s.name){const p=s.write({},c);delete p.id,t.layers.push(p)}}t.visibleLayers=l.filter(({visible:s,sublayers:c})=>s&&!c).map(({name:s})=>s).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=ve(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=ie(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const i=n?.pixelRatio??1,l=se({extent:e,width:t})*i,s=new ae({layer:this,scale:l}),{xmin:c,ymin:o,xmax:p,ymax:f,spatialReference:d}=e,x=vt(d,this.spatialReferences),v=this.version==="1.3.0"&&z(x)?`${o},${c},${f},${p}`:`${c},${o},${p},${f}`,S=s.toJSON(),I=this.version==="1.3.0"?"crs":"srs";return{bbox:v,[I]:x==null||isNaN(x)?void 0:"EPSG:"+x,...S}}async fetchImage(e,t,r,n){const i=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const o=document.createElement("canvas");return o.width=t,o.height=r,o}const s=fe(n?.timeExtent),c={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:s,...this.refreshParameters}),signal:n?.signal};return k(i??"",c).then(o=>o.data)}async fetchImageBitmap(e,t,r,n){const i=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const p=document.createElement("canvas");return p.width=t,p.height=r,p}const s=fe(n?.timeExtent),c={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:s,...this.refreshParameters}),signal:n?.signal},{data:o}=await k(i,c);return ut(o,i,n?.signal)}fetchFeatureInfo(e,t,r,n,i){const l=se({extent:e,width:t}),s=new ae({layer:this,scale:l}),c=ct(s.visibleSublayers);if(this.featureInfoUrl==null||c==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const o=this.version==="1.3.0"?{I:n,J:i}:{x:n,y:i},p={query_layers:c,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},f={...this.createExportImageParameters(e,t,r),...p},d=this._mixCustomParameters(f);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(d):this._defaultFetchFeatureInfoFunction(ie(this.featureInfoUrl,d))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return at(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?F.WebMercator:new F({wkid:t});return Be(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=We(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new ke({title:this.title,content:t}),n=new De({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await k(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=mt(n)}if(this.parsedUrl){const t=new Ge(this.parsedUrl.path),{httpsDomains:r}=Xe.request;t.scheme!=="https"||t.port&&t.port!=="443"||!t.host||r.includes(t.host)||r.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new we("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function St(e,t){return e.some(r=>{for(const n in r)if(ze(r,n,null,t))return!0;return!1})}function be(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=He(e)).forEach((l,s)=>l.id=s);for(const l of e){const s=new Z;s.read(l,t),r&&!r.includes(s.name)&&(s.visible=!1),n.set(s.id,s)}const i=[];for(const l of e){const s=l.id!=null?n.get(l.id):null;if(s)if(l.parentLayerId!=null&&l.parentLayerId>=0){const c=n.get(l.parentLayerId);if(!c)continue;c.sublayers||(c.sublayers=new K),c.sublayers.push(s)}else i.push(s)}return i}a([u({readOnly:!0})],m.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],m.prototype,"copyright",void 0),a([u()],m.prototype,"description",void 0),a([u({readOnly:!0})],m.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],m.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],m.prototype,"readFullExtentFromItemOrMap",null),a([D(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],m.prototype,"writeFullExtent",null),a([u()],m.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],m.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoUrl",void 0),a([u()],m.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],m.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],m.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],m.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],m.prototype,"imageMaxWidth",void 0),a([u()],m.prototype,"imageTransparency",void 0),a([u(ot)],m.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],m.prototype,"isReference",void 0),a([u({type:["WMS"]})],m.prototype,"operationalLayerType",void 0),a([u()],m.prototype,"resourceInfo",void 0),a([u({type:F,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],m.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],m.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[Je],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],m.prototype,"spatialReferences",void 0),a([D(["web-document","portal-item"],"spatialReferences")],m.prototype,"writeSpatialReferences",null),a([u({type:K.ofType(Z),json:{write:{target:"layers",overridePolicy(e,t,r){if(St(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],m.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],m.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],m.prototype,"readSublayers",null),a([D("sublayers",{layers:{type:[Z]},visibleLayers:{type:[String]}})],m.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],m.prototype,"type",void 0),a([u(lt)],m.prototype,"url",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"version",void 0),m=a([xe("esri.layers.WMSLayer")],m);const Yt=m;export{Yt as default};
