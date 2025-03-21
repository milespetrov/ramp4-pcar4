import{aA as ot,cp as Q,a_ as R,f$ as N,k as t,o,by as ae,A as m,v as g,dj as st,bp as V,aC as E,V as c,cW as le,aP as pe,iK as ue,f as X,B as Te,n as T,bh as rt,bv as ve,e$ as nt,G as at,s as be,au as Ae,u as Pe,b4 as lt}from"./main-BPeHLg3l.js";import{S as pt}from"./MultiOriginJSONSupport-ByZaocI-.js";import{s as De,A as Se,Q as qe,c as ut,i as ct,e as dt,u as yt}from"./vec32-BngoEEIY.js";import{f as ht}from"./Layer-VZeunRCL.js";import{i as mt}from"./APIKeyMixin-a3zW-JqT.js";import{l as gt}from"./ArcGISService-CtDEg9DJ.js";import{e as ft}from"./CustomParametersMixin-dbt0rrak.js";import{b as vt}from"./OperationalLayer-Cf562EbC.js";import{j as bt}from"./PortalLayer--XGkUXAe.js";import{t as St}from"./ScaleRangeLayer-B2Tptaxt.js";import{R as xt}from"./SceneService-BaWwtsVF.js";import{y as wt}from"./arcgisLayerUrl-I9VdeuEi.js";import{d as Vt,y as jt}from"./commonProperties-C-1KJKXy.js";import{y as W}from"./Field-CYxVSkmq.js";import{Z as Nt}from"./FieldsIndex-Cg8Q5GJN.js";import{d as Le,l as zt}from"./TimeInfo-8-ruSCBn.js";import{a as z}from"./Cyclical-UdyYyoxq.js";import{j as It}from"./persistable-D6mds6-C.js";import{b as xe,x as Rt}from"./quat-CM2keQLm.js";import{e as ce}from"./quatf64-C16JxGFv.js";import{c as Fe,u as _e}from"./common-CYWrYyJl.js";import{i as Me,p as Be}from"./TimeExtent-CrD39yLm.js";import{p as Tt}from"./popupUtils-D6TYNCA2.js";const f=ot(),Oe=ce(),$e=ce(),Ee=ce(),Ce=Q(0,0,1),At=Q(0,1,0),Pt=Q(1,0,0);function J(e){De(f,e),Se(f,f);const i=Math.atan2(f[1],f[0]),s=xe(ce(),Ce,-i);qe(f,f,s);const r=-1*Math.atan2(f[2],f[0]);return[Fe(i)+270,Fe(r)+90]}function de(e,i){return xe($e,Ce,_e(e-270)),xe(Ee,At,_e(i-90)),Rt(Oe,$e,Ee),De(f,Pt),qe(f,f,Oe),Se(f,f),[f[0],f[1],f[2]]}let A=class extends R(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(e),0,!0)}set orientation(e){const i=de(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(i),0,!0)}set tilt(e){const i=de(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{write:!0}})],A.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],A.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ae(e=>z.normalize(N(e),0,!0))],A.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ae(e=>z.normalize(N(e),0,!0))],A.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],A.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],A.prototype,"point",void 0),A=t([m("esri.layers.voxel.VoxelSlice")],A);const ye=A;let b=class extends R(g){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(i),0,!0)}};t([o({type:Boolean,json:{default:!0,write:!0}})],b.prototype,"enabled",void 0),t([o({type:String,json:{origins:{service:{read:st}},write:{enabled:!0,isRequired:!0}}}),It({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],b.prototype,"href",void 0),t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],b.prototype,"label",void 0),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"orientation",null),t([o({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],b.prototype,"tilt",null),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"normal",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"point",void 0),t([o({type:[V],json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"sizeInPixel",void 0),t([o({type:[ye],json:{write:!0}})],b.prototype,"slices",void 0),t([o({type:V,json:{default:0,write:!0}})],b.prototype,"timeId",void 0),t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],b.prototype,"variableId",void 0),b=t([m("esri.layers.voxel.VoxelSection")],b);const we=b;let Y=class extends g{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Y.prototype,"diffuseFactor",void 0),t([o({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],Y.prototype,"specularFactor",void 0),Y=t([m("esri.layers.voxel.VoxelSimpleShading")],Y);const ke=Y;let P=class extends g{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null}};t([o({type:["discrete","continuous"],json:{write:!0}})],P.prototype,"continuity",void 0),t([o({type:Boolean,json:{write:!0}})],P.prototype,"hasNoData",void 0),t([o({type:Number,json:{write:!0}})],P.prototype,"noData",void 0),t([o({type:Number,json:{write:!0}})],P.prototype,"offset",void 0),t([o({type:Number,json:{write:!0}})],P.prototype,"scale",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],P.prototype,"type",void 0),P=t([m("esri.layers.voxel.VoxelFormat")],P);const Ue=P;let j=class extends g{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"id",void 0),t([o({type:String,json:{write:!0}})],j.prototype,"description",void 0),t([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"name",void 0),t([o({type:Ue,json:{write:!0}})],j.prototype,"originalFormat",void 0),t([o({type:Ue,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"renderingFormat",void 0),t([o({type:String,json:{write:!0}})],j.prototype,"unit",void 0),t([o({type:Number,json:{write:!0}})],j.prototype,"volumeId",void 0),t([o({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],j.prototype,"type",void 0),j=t([m("esri.layers.voxel.VoxelVariable")],j);const Dt=j;let M=class extends R(g){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1}};t([o({type:E,json:{type:[V],write:{enabled:!0,isRequired:!0}}})],M.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],M.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],M.prototype,"label",void 0),t([o({type:Boolean,json:{default:!1,write:!0}})],M.prototype,"colorLocked",void 0),M=t([m("esri.layers.voxel.VoxelIsosurface")],M);const We=M;let H=class extends R(g){constructor(){super(...arguments),this.color=null,this.position=0}};t([o({type:E,json:{type:[V],write:{enabled:!0,isRequired:!0}}})],H.prototype,"color",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"position",void 0),H=t([m("esri.layers.voxel.VoxelColorStop")],H);const Ve=H;let ee=class extends R(g){constructor(){super(...arguments),this.opacity=1,this.position=0}};t([o({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],ee.prototype,"opacity",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],ee.prototype,"position",void 0),ee=t([m("esri.layers.voxel.VoxelOpacityStop")],ee);const je=ee;let te=class extends R(g){constructor(){super(...arguments),this.enabled=!1,this.range=null}};t([o({type:Boolean,json:{default:!1,write:!0}})],te.prototype,"enabled",void 0),t([o({type:[Number],json:{write:!0}})],te.prototype,"range",void 0),te=t([m("esri.layers.voxel.VoxelRangeFilter")],te);const qt=te;var w;(function(e){e[e.Color=1]="Color",e[e.Alpha=2]="Alpha",e[e.Both=3]="Both"})(w||(w={}));let D=class extends R(g){constructor(e){super(e),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(c.ofType(Ve)),this.opacityStops=new(c.ofType(je))}set colorStops(e){this._set("colorStops",le(e,this._get("colorStops"),c.ofType(Ve)))}set opacityStops(e){this._set("opacityStops",le(e,this._get("opacityStops"),c.ofType(je)))}getPreviousNext(e,i,s){let r=e;for(;--r>0&&i[r].type!==s&&i[r].type!==w.Both;);let n=e;const l=i.length;for(;++n<l&&i[n].type!==s&&i[n].type!==w.Both;);return[r,n]}get rasterizedTransferFunction(){const e=[];if(this.colorStops.length<2)return e;const i=[],s=[],r=1e-5;for(const p of this.colorStops){if(!p.color)return e;s.push({color:{r:p.color.r,g:p.color.g,b:p.color.b,a:Math.round(255*(1-p.color.a))},position:p.position,type:w.Color})}if(this.opacityStops.length===0)for(const p of s)i.push({color:p.color,position:p.position});else{for(const u of this.opacityStops){const d=pe(u.position,0,1),h=Math.round(255*pe(1-u.opacity,0,1));let v=!1;for(const y of s)if(y.type===w.Color&&Math.abs(y.position-d)<r){y.color.a=h,y.type=w.Both,v=!0;break}v||s.push({color:{r:0,g:0,b:0,a:h},position:u.position,type:w.Alpha})}s.sort((u,d)=>u.position<d.position?-1:1);const p=s.length;for(let u=0;u<p;++u){const d=s[u];if(d.type!==w.Both)if(d.type===w.Color){const[h,v]=this.getPreviousNext(u,s,w.Alpha);if(h!==-1&&v!==p){const y=(d.position-s[h].position)/(s[v].position-s[h].position);d.color.a=Math.round(ue(s[h].color.a,s[v].color.a,y))}else d.color.a=h!==-1?s[h].color.a:s[v].color.a}else{const[h,v]=this.getPreviousNext(u,s,w.Color);if(h!==-1&&v!==p){const y=(d.position-s[h].position)/(s[v].position-s[h].position),F=s[h].color,oe=s[v].color;he.forEach(_=>{d.color[_]=Math.round(ue(F[_],oe[_],y))})}else h!==-1?he.forEach(y=>{d.color[y]=s[h].color[y]}):he.forEach(y=>{d.color[y]=s[v].color[y]})}}for(const u of s)i.push({color:u.color,position:u.position})}i[0].position=0,i[i.length-1].position=1;let n=0,l=1;for(let p=0;p<this._colorMapSize;++p){const u=p/this._colorMapSize;for(;u>i[l].position;)n=l++;const d=(u-i[n].position)/(i[l].position-i[n].position),h=i[n].color,v=i[l].color,y=new E;he.forEach(F=>{y[F]=Math.round(ue(h[F],v[F],d))}),y.a=pe(1-ue(h.a,v.a,d)/255,0,1),e.push(y)}return e}getColorForContinuousDataValue(e,i){const s=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||s.length<256)return null;let r=this.stretchRange[0],n=this.stretchRange[1];if(r>n){const p=r;r=n,n=p}e=pe(e,r,n);const l=s[Math.round((e-r)/(n-r)*(this._colorMapSize-1))].clone();return i||(l.a=1),l}};t([o({type:["linear","nearest"],json:{write:!0}})],D.prototype,"interpolation",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],D.prototype,"stretchRange",void 0),t([o({type:c.ofType(Ve),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],D.prototype,"colorStops",null),t([o({type:c.ofType(je),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return{enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],D.prototype,"opacityStops",null),t([o({type:qt,json:{write:!0}})],D.prototype,"rangeFilter",void 0),t([o({type:[E],clonable:!1,json:{read:!1}})],D.prototype,"rasterizedTransferFunction",null),D=t([m("esri.layers.voxel.VoxelTransferFunctionStyle")],D);const Lt=D,he=["r","g","b"];let C=class extends R(g){constructor(){super(...arguments),this.color=E.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label=""}};t([o({type:E,json:{type:[V],write:{enabled:!0,isRequired:!0}}})],C.prototype,"color",void 0),t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],C.prototype,"value",void 0),t([o({type:Boolean,json:{default:!0,write:!0}})],C.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],C.prototype,"label",void 0),C=t([m("esri.layers.voxel.VoxelUniqueValue")],C);const Je=C;var Ne;let B=Ne=class extends g{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(c.ofType(Je)),this.isosurfaces=new(c.ofType(We))}clone(){return new Ne({variableId:this.variableId,label:this.label,transferFunction:X(this.transferFunction),uniqueValues:X(this.uniqueValues),isosurfaces:X(this.isosurfaces)})}};t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"variableId",void 0),t([o({type:String,json:{write:!0}})],B.prototype,"label",void 0),t([o({type:Lt,json:{write:{enabled:!0,overridePolicy(){return{enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],B.prototype,"transferFunction",void 0),t([o({type:c.ofType(Je),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],B.prototype,"uniqueValues",void 0),t([o({type:c.ofType(We),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,i=!!this.isosurfaces&&this.isosurfaces.length>0;return{enabled:e&&i}}}}})],B.prototype,"isosurfaces",void 0),B=Ne=t([m("esri.layers.voxel.VoxelVariableStyle")],B);const Ze=B;function Ge(e){const i=/^(days?|hours?|minutes?|seconds?|d|h|m|s) since (\d{1,4})-(\d{1,2})-(\d{1,2})[ |T](\d{1,2}):(\d{1,2}):(\d{1,2})(\.[0-9]+)?[\s|Z]?(([+|\-|\s?])(\d{1,2}):(\d{1,2}))?$/i.exec(e);if(i==null)return{didParse:!1};const[,s,r,n,l,p,u,d,h,v,y,F,oe]=i;let _="seconds";const ge=s.charAt(0).toLowerCase();ge==="d"?_="days":ge==="h"?_="hours":ge==="m"&&(_="minutes");const Z=parseInt(r,10);if(Number.isNaN(Z))return{didParse:!1};const I=parseInt(n,10);if(Number.isNaN(I)||I<1||I>12)return{didParse:!1};const O=parseInt(l,10);if(Number.isNaN(O)||O<1||O>31)return{didParse:!1};if(I===2){const K=Z%4==0&&(Z%100!=0||Z%400==0);if(K&&O>29||!K&&O>28)return{didParse:!1}}else if((I===4||I===6||I===9||I===11)&&O>30)return{didParse:!1};const se=parseInt(p,10);if(Number.isNaN(se)||se<0||se>23)return{didParse:!1};const re=parseInt(u,10);if(Number.isNaN(re)||re<0||re>59)return{didParse:!1};const ne=parseInt(d,10);if(Number.isNaN(ne)||ne<0||ne>59)return{didParse:!1};let fe=1,$=0,U=0;if(y&&(fe=y==="-"?-1:1),F){if($=parseInt(F,10),Number.isNaN($)||$<0)return{didParse:!1};if($!==0){const K=fe*$;if(K<-12||K>14)return{didParse:!1}}}if(oe&&(U=parseInt(oe,10),Number.isNaN(U)||U<0||U>59))return{didParse:!1};const Xe=`${Z}`.padStart(4,"0"),Ye=`${I}`.padStart(2,"0"),He=`${O}`.padStart(2,"0"),et=`${se}`.padStart(2,"0"),tt=`${re}`.padStart(2,"0"),it=`${ne}`.padStart(2,"0");let G="Z";return $===0&&U===0||(G=fe>0?"+":"-",G+=`${$}`.padStart(2,"0"),G+=":",G+=`${U}`.padStart(2,"0")),{didParse:!0,unit:_,reference:new Date(`${Xe}-${Ye}-${He}T${et}:${tt}:${it}.000${G}`)}}let me=class extends g{constructor(){super(...arguments),this.values=null}};t([o({type:[Number],json:{write:!0}})],me.prototype,"values",void 0),me=t([m("esri.layers.voxel.VoxelIrregularSpacing")],me);const Ft=me;let ie=class extends g{constructor(){super(...arguments),this.scale=1,this.offset=0}};t([o({type:Number,json:{write:!0}})],ie.prototype,"scale",void 0),t([o({type:Number,json:{write:!0}})],ie.prototype,"offset",void 0),ie=t([m("esri.layers.voxel.VoxelRegularSpacing")],ie);const _t=ie;let S=class extends g{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null}get isRegular(){return(this.irregularSpacing==null||this.irregularSpacing===void 0)&&this.regularSpacing!==null}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};t([o({type:Ft,json:{write:!0}})],S.prototype,"irregularSpacing",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isPositiveUp",void 0),t([o({type:Boolean,json:{write:!0}})],S.prototype,"isWrappedDateLine",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"label",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"name",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"quantity",void 0),t([o({type:_t,json:{write:!0}})],S.prototype,"regularSpacing",void 0),t([o({type:Number,json:{write:!0}})],S.prototype,"size",void 0),t([o({type:String,json:{write:!0}})],S.prototype,"unit",void 0),t([o({type:Boolean,json:{read:!1}})],S.prototype,"isRegular",null),S=t([m("esri.layers.voxel.VoxelDimension")],S);const Mt=S;let x=class extends g{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=Te.WGS84}get zDimension(){if(!this.dimensions||!Array.isArray(this.dimensions)||this.dimensions.length!==4)return-1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return-1}get isValid(){return!!this.dimensions&&!!Array.isArray(this.dimensions)&&this.dimensions.length===4&&!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(this.zDimension===-1||this.dimensions[this.zDimension].size<1)}get originInLayerSpace3D(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return[e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||this.volumeType==="xyt")return[0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],n=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let l=0;l<3;++l)n[l]<2?n[l]=1:n[l]-=1;return s.isRegular&&!s.isPositiveUp&&(n[2]*=-1),[(e[1]-e[0])/n[0],(i[1]-i[0])/n[1],(r[1]-r[0])/n[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0;let i=this.dimensions[3].size>0;if(i){const s=this.dimensions[3];i=s.quantity==="time",i&&s.unit!==null&&(i=Ge(s.unit).didParse)}if(!e&&i)return"xyt";if(e&&i)return"xyzt"}return"xyz"}get sizeInVoxels(){if(!this.isValid)return[0,0,0];const e=this.zDimension;return[this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}get timeStops(){if(this.volumeType!=="xyzt")return[];const e=this.dimensions[3],i=[],s=Ge(e.unit);if(s.didParse){if(e.isRegular){const r=e.regularSpacing?.offset??0,n=e.regularSpacing?.scale||1;for(let l=0;l<e.size;++l){const p=r+n*l;i.push(Me(s.reference,p,s.unit))}}else if(Array.isArray(e.irregularSpacing?.values)&&e.irregularSpacing.values.length>0)for(let r=0;r<e.irregularSpacing.values.length;++r){const n=e.irregularSpacing.values[r];i.push(Me(s.reference,n,s.unit))}}return i}computeVoxelSpaceLocation(e){if(!this.isValid)return[0,0,0];if(this.volumeType==="xyt")return T.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!rt(this.spatialReference,e.spatialReference))return T.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=Q(e.x,e.y,e.z??0);ut(i,i,this.originInLayerSpace3D),ct(i,i,this.voxelSizeInLayerSpaceSigned);const s=this.dimensions[this.zDimension];if(!s.isRegular&&Array.isArray(s.irregularSpacing?.values)&&s.irregularSpacing.values.length>1){const r=e.z??0,n=s.irregularSpacing.values,l=s.isPositiveUp?1:-1,p=n.reduce((u,d)=>Math.abs(l*d-r)<Math.abs(l*u-r)?d:u);for(let u=0;u<n.length;++u)if(n[u]===p){i[2]=u;break}}return[i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new ve({x:0,y:0,spatialReference:this.spatialReference});const i=nt(e);if(dt(i,i,this.voxelSizeInLayerSpaceSigned),yt(i,i,this.originInLayerSpace3D),this.volumeType==="xyt")return new ve({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new ve({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"id",void 0),t([o({type:[Mt],json:{write:{enabled:!0,isRequired:!0}}})],x.prototype,"dimensions",void 0),t([o({type:Te,json:{read:{enabled:!1}}})],x.prototype,"spatialReference",void 0),t([o({type:Number,json:{read:!1}})],x.prototype,"zDimension",null),t([o({type:[Boolean],json:{read:!1}})],x.prototype,"isValid",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"originInLayerSpace3D",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"voxelSizeInLayerSpaceSigned",null),t([o({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],x.prototype,"volumeType",null),t([o({type:[Number],json:{read:!1}})],x.prototype,"sizeInVoxels",null),t([o({type:[Date],json:{read:!1,write:!1}})],x.prototype,"timeStops",null),x=t([m("esri.layers.voxel.VoxelVolume")],x);const Ke=x;var ze;let k=ze=class extends g{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new ze;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&this.brickSize.length===3&&this.nodeSize.length===3&&this.brickSize[0]===32&&this.brickSize[1]===32&&this.brickSize[2]===32&&this.nodeSize[0]===4&&this.nodeSize[1]===4&&this.nodeSize[2]===4}};t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"apronWidth",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"brickSize",void 0),t([o({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"maxLodLevel",void 0),t([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],k.prototype,"nodeSize",void 0),k=ze=t([m("esri.layers.voxel.VoxelVolumeIndex")],k);const Bt=k;let q=class extends R(g){constructor(e){super(e),this.enabled=!0,this.label="",this.normal=null,this.point=null}get orientation(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(e),0,!0)}set orientation(e){const i=de(e,this.tilt);this._set("normal",i),this._set("orientation",e)}get tilt(){if(!Array.isArray(this.normal)||this.normal.length!==3)return 0;const[e,i]=J(this.normal);return z.normalize(N(i),0,!0)}set tilt(e){const i=de(this.orientation,e);this._set("normal",i),this._set("tilt",e)}};t([o({type:Boolean,json:{default:!0,write:!0}})],q.prototype,"enabled",void 0),t([o({type:String,json:{write:!0}})],q.prototype,"label",void 0),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ae(e=>z.normalize(N(e),0,!0))],q.prototype,"orientation",null),t([o({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),ae(e=>z.normalize(N(e),0,!0))],q.prototype,"tilt",null),t([o({type:[Number],json:{write:!0}})],q.prototype,"normal",void 0),t([o({type:[Number],json:{write:!0}})],q.prototype,"point",void 0),q=t([m("esri.layers.voxel.VoxelDynamicSection")],q);const Ie=q;var Re;let L=Re=class extends g{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(c.ofType(ye)),this.dynamicSections=new(c.ofType(Ie))}set slices(e){this._set("slices",le(e,this._get("slices"),c.ofType(ye)))}set dynamicSections(e){this._set("dynamicSections",le(e,this._get("dynamicSections"),c.ofType(Ie)))}clone(){return new Re({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:X(this.slices),dynamicSections:X(this.dynamicSections)})}};t([o({type:V,json:{write:{enabled:!0,isRequired:!0}}})],L.prototype,"volumeId",void 0),t([o({type:Number,json:{default:1,write:!0}})],L.prototype,"verticalExaggeration",void 0),t([o({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],L.prototype,"exaggerationMode",void 0),t([o({type:Number,json:{default:0,write:!0}})],L.prototype,"verticalOffset",void 0),t([o({type:c.ofType(ye),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.slices&&this.slices.length>0}}}}})],L.prototype,"slices",null),t([o({type:c.ofType(Ie),json:{write:{enabled:!0,overridePolicy(){return{enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],L.prototype,"dynamicSections",null),L=Re=t([m("esri.layers.voxel.VoxelVolumeStyle")],L);const Qe=L;let a=class extends xt(gt(vt(bt(St(pt(ft(mt(ht)))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new ke,this.opacity=1,this.variables=new c,this.volumes=new c,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(c.ofType(Qe)),this.variableStyles=new(c.ofType(Ze)),this.sections=new(c.ofType(we))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",wt(e,T.getLogger(this)))}load(e){const i=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(at).then(()=>this._fetchService(i)).then(()=>this.serviceRoot=this.url);return this.addResolvingPromise(s),Promise.resolve(this)}read(e,i){super.read(e,i),i?.origin==="service"&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const s of this.volumes)s.spatialReference=this.spatialReference}readVersion(e,i){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new be("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new be("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new be("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,i,s){if(e!=null&&typeof e=="object"){const r=Ae.fromJSON(e,s);if(r.zmin===0&&r.zmax===0&&Array.isArray(i.volumes)){const n=Ke.fromJSON(i.volumes[0]);if(n.isValid&&n.volumeType!=="xyt"){const l=n.dimensions[2];if(l.isRegular){let p=l.regularSpacing.offset,u=l.regularSpacing.offset+l.regularSpacing.scale*(l.size-1);if(p>u){const d=p;p=u,u=d}r.zmin=p,r.zmax=u}}}return r}return null}get fields(){const e=[new W({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new W({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const s of this.variables){const r=new W({name:s.name,alias:s.description,domain:null,editable:!1,length:128,type:s.renderingFormat.continuity==="discrete"?"string":"double"});e.push(r)}const i=this.getVolume(null);if(i!=null){if(i.volumeType==="xyzt"||i.volumeType==="xyt"){const s=new W({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(s);const r=new W({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(r)}if(i.volumeType!=="xyt"){const s=new W({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(s)}}return e}get fieldsIndex(){return this.loaded?new Nt(this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const i=this.fields;return Tt({fields:i,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let i=-1;if(i=e??this.currentVariableId,!this.variableStyles||i===-1)return null;const s=this.variableStyles.findIndex(r=>r.variableId===i);return s<0?null:this.variableStyles.at(s)}getVariable(e){let i=-1;if(i=e??this.currentVariableId,!this.variables||i===-1)return null;const s=this.variables.findIndex(r=>r.id===i);return s<0?null:this.variables.at(s)}getVolume(e){const i=this.getVariable(e);return i!=null?this.volumes.find(({id:s})=>s===i.volumeId):null}get timeInfo(){const e=this.getVolume(null);if(e?.volumeType!=="xyzt")return null;const i=e.timeStops;if(!i?.length)return null;const s=new Be({start:i[0],end:i.at(-1)});return new Le({fullTimeExtent:s,stops:i})}getVolumeStyle(e){const i=this.getVariable(e);return i!=null?this.volumeStyles.find(({volumeId:s})=>s===i.volumeId):null}getColorForContinuousDataValue(e,i,s){const r=this.getVariable(e);if(r==null||r.renderingFormat?.continuity!=="continuous"||!this.variableStyles)return null;const n=this.variableStyles.findIndex(p=>p.variableId===e);if(n<0)return null;const l=this.variableStyles.at(n);return l?.transferFunction?l.transferFunction.getColorForContinuousDataValue(i,s):null}getSections(){const e=[];for(const i of this.sections)e.push(new we({enabled:i.enabled,href:i.href,id:i.id,label:i.label,normal:i.normal,point:i.point,sizeInPixel:i.sizeInPixel,slices:i.slices,timeId:i.timeId,variableId:i.variableId}));return e}getVariableStyles(){const e=[];for(const i of this.variableStyles){const s=this._getVariable(i);if(s!=null){const r=i.clone();r.isosurfaces.length>4&&(r.isosurfaces=r.isosurfaces.slice(0,3),T.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const n of r.isosurfaces)if(!n.colorLocked){const l=this.getColorForContinuousDataValue(r.variableId,n.value,!1);l===null||l.equals(n.color)||(n.color=l)}if(s.renderingFormat.continuity==="continuous")(r.transferFunction===null||r.transferFunction.colorStops.length<2)&&T.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),r.transferFunction!==null&&(Array.isArray(r.transferFunction.stretchRange)&&r.transferFunction.stretchRange.length===2||(T.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),r.transferFunction.stretchRange=[0,1],r.transferFunction.colorStops.removeAll()));else if(s.renderingFormat.continuity==="discrete")if(i.uniqueValues.length===0)T.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const n of i.uniqueValues)n.label!==null&&n.label!==void 0||n.value===null||n.value===void 0||(n.label=n.value.toString());e.push(r)}else T.getLogger(this).error(`VoxelVariable ID=${i.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const i of this.volumeStyles){const s=this._getVolumeFromVolumeId(i.volumeId);if(s!=null){const r=i.clone();for(const n of r.slices)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");for(const n of r.dynamicSections)this._isPlaneValid(n,[0,1,s.zDimension],s.dimensions)||(n.enabled=!1,n.label="invalid");e.push(r)}else T.getLogger(this).error(`VoxelVolume ID=${i.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const i=e.variableId;for(const s of this.variables)if(s.id===i)return s;return null}_getVolumeFromVolumeId(e){for(const i of this.volumes)if(i.id===e)return i;return null}_isPlaneValid(e,i,s){if(!e.point||!Array.isArray(e.point)||e.point.length!==3||!e.normal||!Array.isArray(e.normal)||e.normal.length!==3)return!1;const r=Q(e.normal[0],e.normal[1],e.normal[2]);return Se(r,r),!(Math.abs(r[0])+Math.abs(r[1])+Math.abs(r[2])<1e-6)&&(e.normal[0]=r[0],e.normal[1]=r[1],e.normal[2]=r[2],!0)}};t([o({type:["Voxel"]})],a.prototype,"operationalLayerType",void 0),t([o(Vt)],a.prototype,"legendEnabled",void 0),t([o({json:{write:!0}})],a.prototype,"title",void 0),t([o(jt)],a.prototype,"url",null),t([o({type:c.ofType(we),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],a.prototype,"sections",void 0),t([o({type:V,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],a.prototype,"currentVariableId",void 0),t([o({type:c.ofType(Qe),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],a.prototype,"volumeStyles",void 0),t([o({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],a.prototype,"renderMode",void 0),t([o({type:c.ofType(Ze),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],a.prototype,"variableStyles",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],a.prototype,"enableSlices",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],a.prototype,"enableSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],a.prototype,"enableDynamicSections",void 0),t([o({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],a.prototype,"enableIsosurfaces",void 0),t([o({type:ke,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],a.prototype,"shading",void 0),t([o({type:["show","hide"]})],a.prototype,"listMode",void 0),t([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),t([o({type:c.ofType(Dt)})],a.prototype,"variables",void 0),t([o({type:c.ofType(Ke)})],a.prototype,"volumes",void 0),t([o({type:Bt})],a.prototype,"index",void 0),t([o({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],a.prototype,"minScale",void 0),t([o({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],a.prototype,"maxScale",void 0),t([o({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),t([o({readOnly:!0,json:{name:"serviceVersion"}})],a.prototype,"version",void 0),t([Pe("service","version")],a.prototype,"readVersion",null),t([o({type:Ae})],a.prototype,"fullExtent",void 0),t([Pe("service","fullExtent",["fullExtent"])],a.prototype,"readFullExtent",null),t([o({readOnly:!0,clonable:!1,json:{read:!1}})],a.prototype,"fields",null),t([o({readOnly:!0})],a.prototype,"fieldsIndex",null),t([o({type:Boolean,json:{name:"disablePopup",read:{reader:(e,i)=>!i.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,i,s){i[s]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],a.prototype,"popupEnabled",void 0),t([o({type:lt,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),t([o({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([o({type:Le,readOnly:!0,json:{read:!1}})],a.prototype,"timeInfo",null),t([o({type:Be,json:{read:!1}})],a.prototype,"timeExtent",void 0),t([o({type:zt,json:{read:!1}})],a.prototype,"timeOffset",void 0),t([o({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],a.prototype,"useViewTime",void 0),a=t([m("esri.layers.VoxelLayer")],a);const Ot=a;export{Ot as default};
