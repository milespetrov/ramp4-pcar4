import{q as t,u as e,C as S,aF as J,cj as q,b0 as O,dc as F,A as G,az as k,h as Q,s as Z,a_ as tt}from"./main-QmNQNEqS.js";import et from"./FeatureLayer-BA65QcK4.js";import{f as it}from"./TemporalLayer-BQFXMDv8.js";import{p as ot}from"./TimeExtent-elxCTyN7.js";import{A as X}from"./interfaces-CL2NbQte.js";import"./preload-helper-ExcqyqRp.js";import"./UniqueValueRenderer-By2CFb85.js";import"./RendererLegendOptions-Bnw2lc91.js";import"./diffUtils-BN-v500-.js";import"./colorRamps-Byz0sWG1.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-DlWdb9v-.js";import"./compilerUtils-Dqt-znC8.js";import"./lengthUtils-CR348Lld.js";import"./styleUtils-CbCOuwpR.js";import"./jsonUtils-CkvL3MEs.js";import"./LRUCache-CwgQuHAd.js";import"./Version-DvpGXogl.js";import"./FieldsIndex-DRFAqvtR.js";import"./UnknownTimeZone-DWcmUOFp.js";import"./OverrideHelper-BVEq_119.js";import"./colorUtils-pdvl7O3c.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-UFlNjPGu.js";import"./heatmapUtils-BMIzGxZ-.js";import"./MultiOriginJSONSupport-CFx4CrtD.js";import"./commonProperties-D_9-ECo9.js";import"./ElevationInfo-Dvyy3kyX.js";import"./FeatureLayerBase-Cs2pkJcr.js";import"./Field-CA1xhD3g.js";import"./fieldType-avF8oMgr.js";import"./HeightModelInfo-c8Rad-V8.js";import"./arcgisLayerUrl-DgA2U4_j.js";import"./featureLayerUtils-DmvPy7Ac.js";import"./uuid-Cl5lrJ4c.js";import"./Query-DFjH7yBj.js";import"./RelationshipQuery-2b7wehbE.js";import"./LayerFloorInfo-DuzxpW6e.js";import"./Relationship-BXwEEBMo.js";import"./serviceCapabilitiesUtils-Gcn4Jih5.js";import"./Layer-BqEIgDmZ.js";import"./workers-BhbmVT8N.js";import"./editsZScale-B62N1ZFN.js";import"./queryZScale-GzIZMlU-.js";import"./projection-CdEQ04oU.js";import"./projectBuffer-CyHy69Y9.js";import"./FeatureSet-DiTYRefN.js";import"./APIKeyMixin-XYS9_XwM.js";import"./ArcGISService-RzjNOXAs.js";import"./BlendLayer-Bdzvrm6V.js";import"./jsonUtils-Bzc3ZJZb.js";import"./parser-C8M4U3Dd.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CZFq2RiA.js";import"./CustomParametersMixin-tGyy7g1h.js";import"./EditBusLayer-DcxZ3hhS.js";import"./FeatureEffectLayer-BFu89U4R.js";import"./FeatureEffect-uvHxzxRc.js";import"./FeatureFilter-BO2V-n-a.js";import"./FeatureReductionLayer-LKsAfPJr.js";import"./FeatureReductionSelection-D9nlCwHD.js";import"./labelingInfo-CcQYGbiX.js";import"./labelUtils-DCrCxHm8.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-Brx9LSOZ.js";import"./OrderedLayer-PcB4OBPj.js";import"./OrderByInfo-DoltLJLt.js";import"./PortalLayer-BHkRbkkh.js";import"./PortalItem-BujL5i1Z.js";import"./portalItemUtils-CS5Cj6Po.js";import"./RefreshableLayer-RaUrsHMO.js";import"./ScaleRangeLayer-Cfqz46kD.js";import"./FeatureTemplate-DGDpj_Iv.js";import"./FeatureType-IERpssRo.js";import"./fieldProperties-y5-Ljv3I.js";import"./TimeInfo-BmLrHfdm.js";import"./versionUtils-C8ypxif9.js";import"./styleUtils-BwjMY8by.js";import"./popupUtils-BxPbDuta.js";import"./AlphaCutoff-UcccL64p.js";let v=class extends J{set horizontalWKID(o){o?q({wkid:+o})?this._set("horizontalWKID",+o):this._set("horizontalWKID",o):this._set("horizontalWKID",null)}set verticalWKID(o){o?this._set("verticalWKID",isFinite(o)&&q({wkid:+o})?+o:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:s,radialDistortionCoefficients:y,tangentialDistortionCoefficients:p}=this;return o?.length>1&&!Number.isNaN(r)&&s?.length>1&&y?.length>1&&p?.length>1}};t([e({json:{write:!0}})],v.prototype,"affineTransformations",void 0),t([e({json:{write:!0}})],v.prototype,"focalLength",void 0),t([e({json:{write:!0}})],v.prototype,"principalOffsetPoint",void 0),t([e({json:{write:!0}})],v.prototype,"radialDistortionCoefficients",void 0),t([e({json:{write:!0}})],v.prototype,"tangentialDistortionCoefficients",void 0),t([e({json:{write:!0}})],v.prototype,"horizontalWKID",null),t([e({json:{write:!0}})],v.prototype,"verticalWKID",null),t([e({json:{write:!0}})],v.prototype,"x",void 0),t([e({json:{write:!0}})],v.prototype,"y",void 0),t([e({json:{write:!0}})],v.prototype,"z",void 0),t([e({json:{write:!0}})],v.prototype,"type",void 0),v=t([S("esri.layers.orientedImagery.core.CameraOrientation")],v);const M=v;let f=class extends O(F(M)){constructor(){super(...arguments),this.type=1}toString(){const{type:o,horizontalWKID:r,verticalWKID:s,x:y,y:p,z:c,heading:l,pitch:d,roll:j,affineTransformations:P,focalLength:b,principalOffsetPoint:w,radialDistortionCoefficients:N,tangentialDistortionCoefficients:x}=this,m=[o,r,s,y,p,c,l,d,j];return this.isAdvanced&&(P?.forEach(n=>m.push(n)),m.push(b),w?.forEach(n=>m.push(n)),N?.forEach(n=>m.push(n)),x?.forEach(n=>m.push(n))),m.map(n=>Number.isNaN(n)?"":n).join("|")}};t([e({json:{write:!0}})],f.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],f.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"heading",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],f.prototype,"z",void 0),f=t([S("esri.layers.orientedImagery.core.CameraOrientationHPR")],f);const rt=f;let I=class extends O(F(M)){constructor(){super(...arguments),this.type=4}toString(){const{type:o,latitude:r,longitude:s,ellipsoidRadius:y,squaredEccentricity:p,properties:c}=this,l=`${c}`.split("|");return l.splice(1,1),`${o}|${r}|${s}|${y}|${p}|${l.join("|")}`}};t([e({json:{write:!0}})],I.prototype,"type",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"latitude",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"longitude",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"ellipsoidRadius",void 0),t([e({json:{write:!0},type:Number})],I.prototype,"squaredEccentricity",void 0),t([e({json:{write:!0}})],I.prototype,"properties",void 0),I=t([S("esri.layers.orientedImagery.core.CameraOrientationLTP")],I);const nt=I;let h=class extends O(F(M)){constructor(){super(...arguments),this.type=2}toString(){const{type:o,horizontalWKID:r,verticalWKID:s,x:y,y:p,z:c,omega:l,phi:d,kappa:j,affineTransformations:P,focalLength:b,principalOffsetPoint:w,radialDistortionCoefficients:N,tangentialDistortionCoefficients:x}=this,m=[o,r,s,y,p,c,l,d,j];return this.isAdvanced&&(P?.forEach(n=>m.push(n)),m.push(b),w?.forEach(n=>m.push(n)),N?.forEach(n=>m.push(n)),x?.forEach(n=>m.push(n))),m.map(n=>isNaN(n)?"":n).join("|")}};t([e({json:{write:!0}})],h.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],h.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"omega",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"phi",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"kappa",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],h.prototype,"z",void 0),h=t([S("esri.layers.orientedImagery.core.CameraOrientationOPK")],h);const st=h;let g=class extends O(F(M)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:o,focalLength:r,principalOffsetPoint:s,radialDistortionCoefficients:y,tangentialDistortionCoefficients:p}=this;return o?.length>1||!Number.isNaN(r)||s?.length>1||y?.length>1||p?.length>1}toString(){const{type:o,horizontalWKID:r,verticalWKID:s,x:y,y:p,z:c,yaw:l,pitch:d,roll:j,affineTransformations:P,focalLength:b,principalOffsetPoint:w,radialDistortionCoefficients:N,tangentialDistortionCoefficients:x}=this,m=[o,r,s,y,p,c,l,d,j];return this.isAdvanced&&(P?.forEach(n=>m.push(n)),m.push(b),w?.forEach(n=>m.push(n)),w?.forEach(n=>m.push(n)),N?.forEach(n=>m.push(n)),x?.forEach(n=>m.push(n))),m.map(n=>Number.isNaN(n)?"":n).join("|")}};t([e({json:{write:!0}})],g.prototype,"type",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"affineTransformations",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"focalLength",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"principalOffsetPoint",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"radialDistortionCoefficients",void 0),t([e({type:[Number],json:{write:!0}})],g.prototype,"tangentialDistortionCoefficients",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"yaw",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"pitch",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"roll",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"x",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"y",void 0),t([e({type:Number,json:{write:!0}})],g.prototype,"z",void 0),g=t([S("esri.layers.orientedImagery.core.CameraOrientationYPR")],g);const at=g;var D;(function(i){i[i.HPR=1]="HPR",i[i.OPK=2]="OPK",i[i.YPR=3]="YPR",i[i.LTP=4]="LTP"})(D||(D={}));const W=new Map;W.set(`${D.OPK}`,{desc:"Using Omega Phi Kappa",constructor:st}),W.set(`${D.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:rt}),W.set(`${D.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:at}),W.set(`${D.LTP}`,{desc:"Using Local Tangent Plane",constructor:nt});let $=class extends O(G){constructor(){super(...arguments),this.url=null}};t([e({type:Number,json:{write:!0}})],$.prototype,"lod",void 0),t([e({type:String,json:{write:!0}})],$.prototype,"rasterFunction",void 0),t([e({type:String,json:{write:!0}})],$.prototype,"url",void 0),$=t([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],$);let H=class extends O(G){constructor(){super(...arguments),this.constantElevation=null}};t([e({type:Number,json:{write:!0}})],H.prototype,"constantElevation",void 0),H=t([S("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],H);const pt=i=>i!=null&&typeof i.constantElevation=="number";function lt(i,o,r){return o&&(i=`${o}${i}`),r&&(i+=`${r}`),i}function mt(i,o,r){let{url:s}=i;return s?(s=lt(s,o,r),new $({...i,url:s})):null}function yt(i,o,r){return i&&(pt(i)?new H(i):mt(i,o,r))}const A=new k({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),V=new k({Feet:"feet",Meter:"meter"}),_=new k({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),R=new Map;function ut(i){const[o,r,s,y,p,c,l,d,j,P,b,w,N,x,m,n,z,T,E,K,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y,z:p,omega:c,phi:l,kappa:d,...Y([j,P,b,w,N,x],[n,z],[T,E,K],[C,L],m)}}R.set(`${D.HPR}`,ct),R.set(`${D.YPR}`,dt),R.set(`${D.OPK}`,ut),R.set(`${D.LTP}`,ft);const U=i=>{const o=i.map(r=>parseFloat(r)).filter(r=>!isNaN(r));if(o.length===i.length)return o};function Y(i,o,r,s,y){const p=U(i),c=U(o),l=U(r),d=U(s);return{affineTransformations:p?.length===6?p:void 0,focalLength:p?.length===6?parseFloat(y):void 0,principalOffsetPoint:c?.length!==2?[0,0]:c,radialDistortionCoefficients:l?.length!==3?[0,0,0]:l,tangentialDistortionCoefficients:d?.length!==2?[0,0]:d}}function ct(i){const[o,r,s,y,p,c,l,d,j,P,b,w,N,x,m,n,z,T,E,K,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y,z:p,heading:c,pitch:l,roll:d,...Y([j,P,b,w,N,x],[n,z],[T,E,K],[C,L],m)}}function dt(i){const[o,r,s,y,p,c,l,d,j,P,b,w,N,x,m,n,z,T,E,K,C,L]=i.slice(1);return{horizontalWKID:o,verticalWKID:r,x:s,y,z:p,yaw:c,pitch:l,roll:d,...Y([j,P,b,w,N,x],[n,z],[T,E,K],[C,L],m)}}function ft(i){const[o,r,s,y,p,...c]=i.slice(1),l=R.get(p),d=W.get(p)?.constructor;return!l||!d?null:{latitude:o,longitude:r,ellipsoidRadius:s,squaredEccentricity:y,properties:new d(l([p,"",...c]))}}function ht(i){return Array.isArray(i)&&i?.length===9&&!i.some(isNaN)}const gt=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),B=(i,o)=>!gt.has(o)&&i,vt=(i,o,r)=>{const s=`orientedImageryProperties.${i}`;return{name:s,write:o?{ignoreOrigin:!0,target:s,writer:o}:{ignoreOrigin:!0},read:r?{ignoreOrigin:!0,source:s,reader:r}:{ignoreOrigin:!0}}};function wt(i){return i.json&&(i.json.origins=i.json.origins??{},i.json.origins["web-scene"]={write:!1,read:!1}),i}function u(i,o,r,s){const{name:y,write:p,read:c}=vt(i,o,r),l={name:y,write:p,read:c,origins:{service:{name:`orientedImageryInfo.${y}`,write:o,read:r},"web-scene":{name:y,write:B(p,i),read:B(c,i)},"web-map":{name:y,write:p,read:c}}};return s&&l.origins&&(l.type=s,l.origins["web-map"].type=s,l.origins["web-scene"].type=s),l}let a=class extends et{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:i,demPathPrefix:o,demPathSuffix:r}=this;return yt(i,o,r)}async save(i){return this._debouncedSaveOperations(X.SAVE,i)}async saveAs(i,o){return this._debouncedSaveOperations(X.SAVE_AS,o,i)}findFirstValidLayerId(i){return i.layers?.find(o=>this.supportedSourceTypes.has(o.type))?.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new Z("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([e({type:Number,json:u("cameraHeading")})],a.prototype,"cameraHeading",void 0),t([e({type:Number,json:u("cameraHeight")})],a.prototype,"cameraHeight",void 0),t([e({type:Number,json:u("cameraPitch")})],a.prototype,"cameraPitch",void 0),t([e({type:Number,json:u("cameraRoll")})],a.prototype,"cameraRoll",void 0),t([e({type:Number,json:u("coveragePercent")})],a.prototype,"coveragePercent",void 0),t([e({type:String,json:u("demPathPrefix")})],a.prototype,"demPathPrefix",void 0),t([e({type:String,json:u("demPathSuffix")})],a.prototype,"demPathSuffix",void 0),t([e({type:String,json:u("depthImagePathPrefix")})],a.prototype,"depthImagePathPrefix",void 0),t([e({type:String,json:u("depthImagePathSuffix")})],a.prototype,"depthImagePathSuffix",void 0),t([e({type:Object,json:u("elevationSource")})],a.prototype,"elevationSource",void 0),t([e({readOnly:!0})],a.prototype,"effectiveElevationSource",null),t([e({type:Number,json:u("farDistance")})],a.prototype,"farDistance",void 0),t([e()],a.prototype,"geometryType",void 0),t([e({type:Number,json:u("horizontalFieldOfView")})],a.prototype,"horizontalFieldOfView",void 0),t([e({type:String,json:u("horizontalMeasurementUnit")})],a.prototype,"horizontalMeasurementUnit",void 0),t([e({type:String,json:u("imagePathPrefix")})],a.prototype,"imagePathPrefix",void 0),t([e({type:String,json:u("imagePathSuffix")})],a.prototype,"imagePathSuffix",void 0),t([e({type:Number,json:u("imageRotation")})],a.prototype,"imageRotation",void 0),t([e({type:Number,json:u("maximumDistance")})],a.prototype,"maximumDistance",void 0),t([e({type:Number,json:u("nearDistance")})],a.prototype,"nearDistance",void 0),t([e({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],a.prototype,"operationalLayerType",void 0),t([e({json:{...u("orientationAccuracy",(i,o,r)=>{tt(r,i.join(";"),o)},i=>{const o=i?.split(";")?.map(Number);return ht(o)?o:[0,0,0,0,0,0,0,0,0]},String)}})],a.prototype,"orientationAccuracy",void 0),t([e({json:{...u("orientedImageryType",_.write,_.read,_.jsonValues.slice(1))}})],a.prototype,"orientedImageryType",void 0),t([e({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0),t([e({type:A.apiValues,json:{...u("timeIntervalUnit",A.write,A.read,A.jsonValues)}})],a.prototype,"timeIntervalUnit",void 0),t([e(wt(Q(it)))],a.prototype,"useViewTime",void 0),t([e({type:Number,json:u("verticalFieldOfView")})],a.prototype,"verticalFieldOfView",void 0),t([e({type:V.apiValues,json:{...u("verticalMeasurementUnit",V.write,V.read,V.jsonValues)}})],a.prototype,"verticalMeasurementUnit",void 0),t([e({type:String,json:u("videoPathPrefix")})],a.prototype,"videoPathPrefix",void 0),t([e({type:String,json:u("videoPathSuffix")})],a.prototype,"videoPathSuffix",void 0),t([e({type:ot,json:{origins:{"web-scene":{write:!1,read:!1}}}})],a.prototype,"visibilityTimeExtent",void 0),a=t([S("esri.layers.OrientedImageryLayer")],a);const oi=a;export{oi as default};
