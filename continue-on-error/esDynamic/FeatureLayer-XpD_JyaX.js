import{e as Q,gs as W,V as E,s as m,au as Z,bC as z,a$ as B,n as T,f4 as M,k as s,ee as U,b1 as x,ef as H,o as n,A as F,aD as K,a_ as Y,B as X,dA as ee,G as te,z as re,aY as S,I as ie,Z as R,f0 as P,bu as se,bt as ae,U as oe,aZ as ne,u as y,gt as le,q as D,f as O,gu as ue,b4 as pe,by as de}from"./main-IAmJgjpH.js";import"./UniqueValueRenderer-BpLwyutM.js";import{o as ye,m as ce,u as he}from"./jsonUtils-CXFzmHB0.js";import{S as me}from"./MultiOriginJSONSupport-B3fWf_tS.js";import{T as fe,u as ge,p as be,a as G,b as we,d as ve,I as Te,l as Fe,s as Se}from"./commonProperties-Bp7UrYgU.js";import{B as Ie,V as _e}from"./FeatureLayerBase-CU6P4ccC.js";import{f as Ee}from"./Layer-DwgwW7kf.js";import{p as De}from"./workers-DhNE2SUP.js";import{i as Oe}from"./editsZScale-CbEpFrYv.js";import{t as A}from"./queryZScale-DJogzrTV.js";import{d as J}from"./FeatureSet-DirOjqu-.js";import{i as qe}from"./APIKeyMixin-CeK8IUpE.js";import{l as Ce}from"./ArcGISService-CKxFoVsE.js";import{l as Le}from"./BlendLayer-DUBnTLPn.js";import{e as je}from"./CustomParametersMixin-4MPQW7tp.js";import{F as Me}from"./EditBusLayer-DuMlzubj.js";import{c as xe}from"./FeatureEffectLayer-BpVZKcya.js";import{c as Re}from"./FeatureReductionLayer-aNsFhIex.js";import{b as Pe}from"./OperationalLayer-DKNA8OZg.js";import{p as Ge}from"./OrderedLayer-B2q4XdKe.js";import{j as Ae}from"./PortalLayer-CMGFY15I.js";import{f as Je}from"./RefreshableLayer-N6_N15vf.js";import{t as Ne}from"./ScaleRangeLayer-BkjwvoZ-.js";import{l as Ve}from"./TemporalLayer-fE-_iHrX.js";import{w as ke,d as $e,m as Qe}from"./arcgisLayerUrl-DAQbwJsY.js";import{J as We,Z as Ze,V as ze,D as Be,z as Ue,I as He,F as Ke,q as Ye,x as Xe,M as et,A as tt,v as rt,W as it,T as st,Q as at,U as ot,S as nt,O as lt,P as ut,E as pt,L as dt,C as yt,_ as ct,R as ht,g as N}from"./featureLayerUtils-CAbwwrm3.js";import{p as V}from"./FeatureTemplate-CGMnn2lE.js";import{n as k}from"./FeatureType-CvkJuVy_.js";import{s as mt}from"./fieldProperties-C01xErdi.js";import{C as ft,n as q}from"./labelingInfo-lT91V3wS.js";import{i as gt}from"./serviceCapabilitiesUtils-DxLVigwV.js";import{d as bt}from"./TimeInfo-C8-cffBe.js";import{t as wt}from"./versionUtils-Gb7QR04y.js";import{b as vt,K as Tt}from"./Query-Cxz0oI9b.js";import{t as Ft}from"./styleUtils-Bbz356lH.js";import{p as St}from"./popupUtils-DQmLYj_V.js";import{o as It}from"./AlphaCutoff-ZPx1GqOi.js";import{A as I}from"./interfaces-Cwm0pihk.js";let _t=0,f=class extends Q.LoadableMixin(W(E)){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get _workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);A(e,this.layer.spatialReference,r);const i=J.fromJSON(r);if(!this._requiresClientGraphicMapping())return i;const o=this.layer.objectIdField;for(const l of i.features){const u=l.attributes[o],p=this._idToClientGraphic.get(u);p&&(l.geometry=p.geometry)}return i.geometryType=this.layer.geometryType,i}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new m("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return A(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:Z.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _applyEdits(e){if(!this._connection)throw new m("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const i=[],o=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const l=d=>"objectId"in d&&d.objectId!=null?d.objectId:"attributes"in d&&d.attributes[t]!=null?d.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const d of e.deleteFeatures){const g=l(d);g!=null&&i.push(g)}const u=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures){for(const d of e.updateFeatures)if(o.push(this._serializeFeature(d)),u){const g=l(d);g!=null&&u.set(g,d)}}Oe(r?r.features:null,o,this.layer.spatialReference);const{fullExtent:p,featureEditResults:h}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:o,deletes:i});return this.fullExtent=p,r&&r.finish(h.uidToObjectId),this._updateClientGraphicIds(u,h),this._createEditsResult(h)}async _prepareClientMapping(e,t){if(this._layerOrSourceGeometryType!=="mesh"||e==null)return;const r=[];for(const{geometry:i}of e)i==null||i.type!=="mesh"||i.hasExtent||i.loaded||r.push(i.load({signal:t}));r.length&&await Promise.all(r)}_updateClientGraphicIds(e,t){if(this._idToClientGraphic){if(e)for(const r of t.updateResults){if(!r.success)continue;const i=e.get(r.objectId);i!=null&&this._addIdToClientGraphic(i)}for(const r of t.deleteResults)r.success&&this._idToClientGraphic.delete(r.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let i=null;for(let l=0;l<e.length;l++){const u=e[l],p=this._serializeFeature(u);i||u.geometry==null||(i=u.geometry.type),r[l]=p,t.set(`${p.uid}`,u)}const o=this;return{features:r,inferredGeometryType:i,finish(l){const u=o.sourceJSON.objectIdField;for(const p in l){const h=l[p],d=t.get(p);d&&(d.attributes||(d.attributes={}),h===-1?delete d.attributes[u]:d.attributes[u]=h,o._addIdToClientGraphic(d))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes?.[t];r!=null&&this._idToClientGraphic.set(r,e)}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return e==="mesh"||e==="multipatch"||e==="extent"}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),i=(_t++).toString();return r?{uid:i,geometry:r.toJSON(),attributes:t}:{uid:i,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:this._geometryRequiresClientGraphicMapping(t)?t.extent?z.fromExtent(t.extent):null:t}async _startWorker(e){this._connection=await De("MemorySourceWorker",{strategy:B("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:i,hasM:o,hasZ:l,timeInfo:u,dateFieldsTimeZone:p}=this.layer,h=this.layer.originOf("spatialReference")==="defaults";await this._prepareClientMapping(this.items,e);const d=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",w=>{T.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),w.preventDefault()}));const g={features:d.features,fields:t?.map(w=>w.toJSON()),geometryType:M.toJSON(this._workerGeometryType),hasM:this._layerOrSourceGeometryType!=="mesh"&&o,hasZ:this._layerOrSourceGeometryType==="mesh"||l,objectIdField:i,spatialReference:h?null:r&&r.toJSON(),timeInfo:u?.toJSON()??null,dateFieldsTimeZone:p},b=await this._connection.invoke("load",g,{signal:e});for(const w of b.warnings)T.getLogger(this.layer).warn("#load()",`${w.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:w});b.featureErrors.length&&T.getLogger(this.layer).warn("#load()",`Encountered ${b.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:b.featureErrors});const j=b.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(d.inferredGeometryType)&&(j.geometryType=M.toJSON(d.inferredGeometryType)),this.sourceJSON=j,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),d.finish(b.assignedObjectIds)}};s([U({Type:x,ensureType:H(x)})],f.prototype,"itemType",void 0),s([n()],f.prototype,"type",void 0),s([n({constructOnly:!0})],f.prototype,"layer",void 0),s([n({readOnly:!0})],f.prototype,"_workerGeometryType",null),s([n()],f.prototype,"sourceJSON",void 0),f=s([F("esri.layers.graphics.sources.MemorySource")],f);let v=class extends K{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};s([n()],v.prototype,"updating",void 0),s([n()],v.prototype,"status",void 0),v=s([F("esri.layers.support.PublishingInfo")],v);const Et=v,Dt=Symbol(),Ot=e=>{var t;let r=class extends e{constructor(){super(...arguments),this[t]=!0}get publishingInfo(){if(this.destroyed)return null;const i=this._get("publishingInfo");if(i)return i;const o=new Et;return this._checkPublishingStatus(o),o}_checkPublishingStatus(i){let o=0;const l=async p=>{let h;i.updating=!0;try{h=await this.fetchPublishingStatus()}catch{h="unavailable"}h!=="published"&&h!=="unavailable"||(i.status==="publishing"&&this.refresh(),u.remove()),i.status=h,i.updating=!1,u.removed||(o=setTimeout(l,p,p+125))},u={removed:!1,remove(){this.removed=!0,clearTimeout(o)}};this.when().catch(()=>u.remove()),l(250),this.addHandles(u)}};return t=Dt,s([n({readOnly:!0,clonable:!1})],r.prototype,"publishingInfo",null),r=s([F("esri.layers.mixins.PublishableLayer")],r),r},c="FeatureLayer";function _(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function $(e){return e&&e instanceof E}const C=mt();function L(e,t,r){const i=!!r?.writeLayerSchema;return{enabled:i,ignoreOrigin:i}}let a=class extends Ie(Re(xe(Ot(Me(Le(Ge(Ve(Ne(Je(Ce(Pe(Ae(me(je(qe(Y(Ee))))))))))))))))){constructor(...e){super(...e),this.attributeTableTemplate=null,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=X.WGS84,this.subtypeCode=null,this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=ee(async(t,r,i)=>{const{save:o,saveAs:l}=await import("./featureLayerUtils-4iz6QOlT.js");switch(t){case I.SAVE:return o(this,r);case I.SAVE_AS:return l(this,i,r)}})}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then(i=>this.initLayerProperties(i))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(te).then(async()=>{if(this.url&&this.layerId==null&&/FeatureServer|MapServer\/*$/i.test(this.url)){const i=await this._fetchFirstValidLayerId(t);i!=null&&(this.layerId=i)}if(!this.url&&!this._hasMemorySource())throw new m("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))}).then(()=>We(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}warnInvisibleDrapedSymbols(){this.elevationInfo?.mode==="on-the-ground"&&this.renderer?.type==="simple"&&this.renderer.symbol?.type==="polygon-3d"&&this.renderer.symbol.symbolLayers.some(e=>e.type==="fill"&&e.material!=null&&(!e.material.color||e.material.color.a*this.opacity<It)&&(this.loadWarnings.push(new re("feature-layer:invisible-draped-symbols","FeatureLayer has fully transparent symbols which will no longer render or highlight",{layer:this})),!0))}readCapabilities(e,t){return t=t.layerDefinition||t,gt(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return!(this.loaded&&!this.capabilities?.operations.supportsEditing)&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return Ze(this)}readIsTable(e,t){return(t=t?.layerDefinition??t).type==="Table"||!t.geometryType}writeIsTable(e,t,r,i){i?.writeLayerSchema&&S(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return ze(t.layerDefinition||t)}readObjectIdField(e,t){return Be(t.layerDefinition||t)}get parsedUrl(){const e=ie(this.url);return e!=null&&(this.dynamicDataSource!=null?e.path=R(e.path,"dynamicLayer"):this.layerId!=null&&(e.path=R(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){P(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){t=t.layerDefinition||t;const i=t.drawingInfo?.renderer;if(i){const o=ye(i,t,r)??void 0;return o||T.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),o}return Ue(t,r)}set source(e){const t=this._get("source");t!==e&&($(t)&&this._resetMemorySource(t),$(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof E?new f({layer:this,items:e}):e:null}readSource(e,t){const r=J.fromJSON(t.featureSet);return new f({layer:this,items:r?.features??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r?.creatorField,o=r?.editorField;return e=e?.map(l=>V.fromJSON(l)),this._fixTemplates(e,i),this._fixTemplates(e,o),e}readTitle(e,t){const r=t.layerDefinition?.name??t.name,i=t.title||t.layerDefinition?.title;if(r){const o=this.portalItem?.title;if(this.sublayerTitleMode==="item-title")return this.url?ke(this.url,r):r;let l=r;if(!l&&this.url){const u=$e(this.url);u!=null&&(l=u.title)}return l?(this.sublayerTitleMode==="item-title-and-service-name"&&o&&o!==l&&(l=o+" - "+l),Qe(l)):void 0}if(this.sublayerTitleMode==="item-title"&&i)return i}readTitleFromWebMap(e,t){return t.title||t.layerDefinition?.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(o=>o.name.toLowerCase()===r);i&&(r=i.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r?.creatorField,o=r?.editorField;return e?.map(l=>(l=k.fromJSON(l),this._fixTemplates(l.templates,i),this._fixTemplates(l.templates,o),l))}readVisible(e,t){return t.layerDefinition?.defaultVisibility!=null?!!t.layerDefinition.defaultVisibility:t.visibility!=null?!!t.visibility:void 0}async addAttachment(e,t){const r=await He(this,e,t,c);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await Ke(this,e,t,r,c);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return Ye(this,e,t)}async uploadAssets(e,t){return Xe(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return St(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await se(import("./FeatureLayerSource-jp4Iof9O.js"),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=et(this);e.dynamicDataSource=this.dynamicDataSource;const t=this.subtypeCode!=null?`${this.subtypeField} = ${this.subtypeCode}`:null,r=ae(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){const r=await tt(this,e,t,c);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return rt(this,e,c)}getFeatureType(e){return it(this.types,this.typeIdField,e)}getFieldDomain(e,t){const r=t?.feature,i=!!this.subtypes?.length;if(i&&!t?.excludeImpliedDomains){const p=st(this,e);if(p)return p}const o=i&&at(this,r);if(o){const p=o?.domains?.[e];return p?.type==="inherited"?this._getLayerDomain(e):p}const l=this.getFeatureType(r),u=this._getLayerDomain(e);if(l){const p=l.domains&&l.domains[e];if(p&&p?.type!=="inherited")return p}if(u)return u;if(!t?.excludeImpliedDomains){const p=ot(this,e);if(p)return p}return null}getField(e){return this.fieldsIndex.get(e)}async queryAttachments(e,t){return nt(this,e,t,c)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(vt.from(e)??r.createQuery(),t);if(i?.features)for(const o of i.features)o.layer=o.sourceLayer=r;return i}async queryObjectIds(e,t){return lt(this,e,t,c)}async queryFeatureCount(e,t){return ut(this,e,t,c)}async queryExtent(e,t){return pt(this,e,t,c)}async queryRelatedFeatures(e,t){return dt(this,e,t,c)}async queryRelatedFeaturesCount(e,t){return yt(this,e,t,c)}async queryTopFeatures(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!i?.query?.supportsTopFeaturesQuery)throw new m(c,"Layer source does not support queryTopFeatures capability");const o=await import("./TopFeaturesQuery-4msYI939.js"),l=await r.queryTopFeatures(o.default.from(e),t);if(l?.features)for(const u of l.features)u.layer=u.sourceLayer=this;return l}async queryBins(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryBins||!i?.operations?.supportsQueryBins)throw new m(c,"Layer source does not support queryBins capability");ct(e,i,c);const o=await import("./BinsQuery-lpt01GJg.js"),l=await r.queryBins(o.default.from(e),t);if(l.features)for(const u of l.features)u.layer=u.sourceLayer=this;return l}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!i?.query.supportsTopFeaturesQuery)throw new m(c,"Layer source does not support queryTopObjectIds capability");const o=await import("./TopFeaturesQuery-4msYI939.js");return r.queryTopObjectIds(o.default.from(e),t)}async queryTopFeaturesExtent(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!i?.query?.supportsTopFeaturesQuery)throw new m(c,"Layer source does not support queryTopExtents capability");const o=await import("./TopFeaturesQuery-4msYI939.js");return r.queryTopExtents(o.default.from(e),t)}async queryTopFeatureCount(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!i?.query?.supportsTopFeaturesQuery)throw new m(c,"Layer source does not support queryFeatureCount capability");const o=await import("./TopFeaturesQuery-4msYI939.js");return r.queryTopCount(o.default.from(e),t)}read(e,t){const r=e.featureCollection;if((r||e.type==="Feature Collection")&&(this.resourceInfo=e),r){const i=r.layers;i&&i.length===1&&(super.read(i[0],t),r.showLegend!=null&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&t.origin==="service"&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:t?.origin??void 0,writeLayerSchema:t?.writeLayerSchema??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:o}=t;if(this.dynamicDataSource)return o?.push(_(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if((r==="web-map"||r==="web-scene")&&i!=="tables")return o?.push(_(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return o?.push(_(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&(r==="web-map"||r==="web-scene")&&i==="tables")return o?.push(_(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new m(c,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){return!!this.loaded&&(this.source?.type==="memory"||wt(this,e))}async save(e){return this._debouncedSaveOperations(I.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(I.SAVE_AS,t,e)}_readEditingEnabled(e,t,r){let i=e.layerDefinition?.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&r?.origin==="web-map"&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map(t=>t.trim()).includes("editing")}_writeEditingEnabled(e,t,r,i){if(!e){const o=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query";S("layerDefinition.capabilities",o,t),r&&!i?.writeLayerSchema&&(t.capabilities=o)}}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstValidLayerId(e){return oe(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then(t=>{const r=t.data;if(r)return this.findFirstValidLayerId(r)})}async initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),P(this.renderer,this.fieldsIndex),ne(this.timeInfo,this.fieldsIndex),Ft(this,{origin:"service"})}async hasDataChanged(){return ht(this)}async fetchPublishingStatus(){const e=this.source;return e?.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||e.search(/\/FeatureServer\//i)!==-1||this.fields?.some(t=>t.type==="geometry")||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach(r=>{const i=r.prototype?.attributes;i&&t&&delete i[t]})}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new m("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new m("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach(t=>{t.layer=this,t.sourceLayer=this}),this.addHandles([e.on("after-add",t=>{t.item.layer=this,t.item.sourceLayer=this}),e.on("after-remove",t=>{t.item.layer=null,t.item.sourceLayer=null})],"fl-source")}_resetMemorySource(e){e.forEach(t=>{t.layer=null,t.sourceLayer=null}),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};s([n(fe)],a.prototype,"attributeTableTemplate",void 0),s([y("service","capabilities")],a.prototype,"readCapabilities",null),s([n({json:{origins:{"web-scene":{write:!1}},write:!0}})],a.prototype,"charts",void 0),s([n({readOnly:!0})],a.prototype,"createQueryVersion",null),s([n({json:{read:{source:"layerDefinition.copyrightText"}}})],a.prototype,"copyright",void 0),s([n({json:{read:{source:"layerDefinition.displayField"}}})],a.prototype,"displayField",void 0),s([n({types:le,readOnly:!0})],a.prototype,"defaultSymbol",void 0),s([n({type:Tt})],a.prototype,"dynamicDataSource",void 0),s([n({type:Boolean})],a.prototype,"editingEnabled",null),s([y(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],a.prototype,"readEditingEnabled",null),s([y("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],a.prototype,"readEditingEnabledFromWebMap",null),s([D(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabled",null),s([D("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],a.prototype,"writeEditingEnabledToWebMap",null),s([n({readOnly:!0})],a.prototype,"effectiveEditingEnabled",null),s([n({...C.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:L}}}}})],a.prototype,"fields",void 0),s([n(C.fieldsIndex)],a.prototype,"fieldsIndex",void 0),s([n({type:_e,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"formTemplate",void 0),s([n({json:{read:{source:"layerDefinition.extent"}}})],a.prototype,"fullExtent",void 0),s([n({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:L,writer(e,t,r){const i=e?N.toJSON(e):null;i&&S(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:N.read}}})],a.prototype,"geometryType",void 0),s([n({json:{read:{source:"layerDefinition.hasM"}}})],a.prototype,"hasM",void 0),s([n({json:{read:{source:"layerDefinition.hasZ"}}})],a.prototype,"hasZ",void 0),s([n(ge)],a.prototype,"id",void 0),s([n({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],a.prototype,"infoFor3D",void 0),s([n({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],a.prototype,"isTable",void 0),s([y("service","isTable",["type","geometryType"]),y("isTable",["layerDefinition.type","layerDefinition.geometryType"])],a.prototype,"readIsTable",null),s([D("web-map","isTable")],a.prototype,"writeIsTable",null),s([n(be)],a.prototype,"labelsVisible",void 0),s([n({type:[ft],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:q,write:!1},"web-scene":{name:"layerDefinition.drawingInfo.labelingInfo",read:q,write:{enabled:!0,layerContainerTypes:G}}},name:"layerDefinition.drawingInfo.labelingInfo",read:q,write:!0}})],a.prototype,"labelingInfo",void 0),s([n((()=>{const e=O(we);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(t,r,i){S(i,ue(t),r)}}},e})())],a.prototype,"opacity",void 0),s([n(ve)],a.prototype,"legendEnabled",void 0),s([n({type:["show","hide"],json:(()=>{const e=O(Te.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],a.prototype,"listMode",void 0),s([y("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],a.prototype,"readGlobalIdField",null),s([n({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:L}}}}})],a.prototype,"objectIdField",void 0),s([y("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],a.prototype,"readObjectIdField",null),s([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],a.prototype,"operationalLayerType",void 0),s([n(C.outFields)],a.prototype,"outFields",void 0),s([n({readOnly:!0})],a.prototype,"parsedUrl",null),s([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),s([n(Fe)],a.prototype,"popupEnabled",void 0),s([n({type:pe,json:{name:"popupInfo",write:!0}})],a.prototype,"popupTemplate",void 0),s([n({readOnly:!0})],a.prototype,"defaultPopupTemplate",null),s([n({types:ce,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:he,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:G,overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema})}}})],a.prototype,"renderer",null),s([y("service","renderer",["drawingInfo.renderer","defaultSymbol"]),y("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],a.prototype,"readRenderer",null),s([n()],a.prototype,"resourceInfo",void 0),s([n((()=>{const e=O(Se);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],a.prototype,"screenSizePerspectiveEnabled",void 0),s([n({clonable:!1})],a.prototype,"source",null),s([de("source")],a.prototype,"castSource",null),s([y("portal-item","source",["featureSet"]),y("web-map","source",["featureSet"])],a.prototype,"readSource",null),s([n({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],a.prototype,"spatialReference",void 0),s([n({type:Number})],a.prototype,"subtypeCode",void 0),s([n({type:[V]})],a.prototype,"templates",void 0),s([y("templates",["editFieldsInfo","creatorField","editorField","templates"])],a.prototype,"readTemplates",null),s([n({type:bt})],a.prototype,"timeInfo",void 0),s([n()],a.prototype,"title",void 0),s([y("service","title",["name"]),y("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],a.prototype,"readTitle",null),s([y("web-map","title",["layerDefinition.name","title"])],a.prototype,"readTitleFromWebMap",null),s([n({type:String})],a.prototype,"sublayerTitleMode",void 0),s([n({json:{read:!1}})],a.prototype,"type",void 0),s([n({type:String})],a.prototype,"typeIdField",void 0),s([y("service","typeIdField"),y("typeIdField",["layerDefinition.typeIdField"])],a.prototype,"readTypeIdField",null),s([n({type:[k]})],a.prototype,"types",void 0),s([y("service","types",["types"]),y("types",["layerDefinition.types"])],a.prototype,"readTypes",null),s([n({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],a.prototype,"visible",void 0),s([y("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],a.prototype,"readVisible",null),a=s([F("esri.layers.FeatureLayer")],a);const qt=a;export{qt as default};
