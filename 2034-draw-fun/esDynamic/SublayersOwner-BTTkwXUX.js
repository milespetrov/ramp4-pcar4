import{u as a,v as l,A as b,aB as U,E as J,D as C,H as $,bC as u,a2 as W,U as j,aW as te,dr as re,h as ie,s as c,ge as se,bi as ae,fC as oe,x as le,n as v,b3 as ne,V as R,bL as pe,am as T,k as D,bJ as ue,cR as M,bF as V,z as E,bl as ye,af as K,bN as de,bB as L,ao as H,ar as G,e0 as ce}from"./main-CZM6prq-.js";import{r as he}from"./Version-BJzGowUB.js";import{d as z}from"./arcgisLayerUrl-B09LFK4c.js";import{u as fe,l as be}from"./commonProperties-DUxfuj4s.js";import{c as X}from"./portalItemUtils-DWmtB15i.js";import{n as me}from"./CollectionFlattener-DMgiedJM.js";import"./UniqueValueRenderer-BK2_s7sE.js";import{m as ge,u as Se}from"./jsonUtils-f6LTjTSQ.js";import{S as Ie}from"./MultiOriginJSONSupport-Ca1jwdYN.js";import{j as we}from"./QueryTask-CXxBr3hz.js";import{W as ve}from"./featureLayerUtils-hOMw-Iek.js";import{n as Ee}from"./FeatureType-DLUH9q0f.js";import{y as Le}from"./Field-Czw7f_GQ.js";import{Z as xe}from"./FieldsIndex-DwqQucqu.js";import{a as Fe,C as Oe}from"./labelingInfo-Bh-NmiGj.js";import{p as Te}from"./LayerFloorInfo-BjruFhnz.js";import{p as De}from"./Relationship-BMrsJlIw.js";import{i as Pe}from"./serviceCapabilitiesUtils-B_0zO_88.js";import{c as N,b as _e,K as Z}from"./Query-djCJM1hJ.js";import{f as Ae}from"./utils-DfwnA_lh.js";import{c as qe}from"./RelationshipQuery-DKKbk_Yd.js";import{p as Ce}from"./popupUtils-BJCW7YP0.js";import{o as je}from"./sublayerUtils-Ba5rXGDQ.js";const Re=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(r,i){const s=i.capabilities&&i.capabilities.split(",").map(ee=>ee.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const n=this.type,p=n!=="tile"&&!!i.supportsDynamicLayers,y=s.includes("query"),h=s.includes("map"),g=!!i.exportTilesAllowed,S=s.includes("tilemap"),w=s.includes("data"),I=n!=="tile"&&(!i.tileInfo||p),x=n!=="tile"&&(!i.tileInfo||p),d=n!=="tile",f=i.cimVersion?he.parse(i.cimVersion):null,F=f?.greaterEqual(1,4)??!1,O=f?.greaterEqual(2,0)??!1;return{operations:{supportsExportMap:h,supportsExportTiles:g,supportsIdentify:y,supportsQuery:w,supportsTileMap:S},exportMap:h?{supportsArcadeExpressionForLabeling:F,supportsSublayersChanges:d,supportsDynamicLayers:p,supportsSublayerVisibility:I,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:O}:null,exportTiles:g?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(r,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchRelatedService(r){const i=this.portalItem;if(!i||!X(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},r).then(n=>n.find(p=>p.type==="Feature Service")??null,()=>null));const s=await this._relatedFeatureServicePromise;return $(r),s?{itemId:s.id,url:s.url}:null}async fetchSublayerInfo(r,i){const{source:s}=r;if(this?.portalItem&&this.type==="tile"&&s?.type==="map-layer"&&X(this.portalItem)&&r.originIdOf("url")<u.SERVICE){const y=await this.fetchRelatedService(i);y&&(r.url=W(y.url,s.mapLayerId.toString()),r.layerItemId=y.itemId)}const{url:n}=r;let p;if(s.type==="data-layer")p=(await j(n,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(n&&r.originIdOf("url")>u.SERVICE)try{const y=await this._fetchAllLayersAndTablesFromService(n),h=z(n)?.sublayer??s.mapLayerId;p=y.get(h)}catch{}else{let y=r.id;s?.type==="map-layer"&&(y=s.mapLayerId);try{p=(await this.fetchAllLayersAndTables(i)).get(y)}catch{}}return p}async fetchAllLayersAndTables(r){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,r)}async _fetchAllLayersAndTablesFromService(r,i){await this.load(i),this._allLayersAndTablesMap||=new Map;const s=z(r),n=te(this._allLayersAndTablesMap,s?.url.path,()=>j(W(s?.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(y=>{const h=new Map,{layers:g,tables:S}=y.data,w=[...g??[],...S??[]];for(const I of w)h.set(I.id,I);return{result:h}},y=>({error:y}))),p=await n;if($(i),"result"in p)return p.result;throw p.error}};return a([l({readOnly:!0})],t.prototype,"capabilities",void 0),a([b("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),a([l({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),a([l({type:U})],t.prototype,"fullExtent",void 0),a([l(fe)],t.prototype,"id",void 0),a([l({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),a([l(be)],t.prototype,"popupEnabled",void 0),a([l({type:J})],t.prototype,"spatialReference",void 0),a([l({readOnly:!0})],t.prototype,"version",void 0),a([b("service","version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=a([C("esri.layers.mixins.ArcGISMapService")],t),t};var P;function k(e){return e?.type==="esriSMS"}function B(e,t,r){const i=this.originIdOf(t)>=L(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&r.layer?.type==="map-image"&&(r.writeSublayerStructure||i)}}function Q(e,t,r){return{enabled:!!r&&r.layer?.type==="tile"&&(r.origin&&this.originIdOf(t)>=L(r.origin)||this._isOverridden(t))}}function m(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function _(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=L(r.origin))}}let Me=0;const Ve=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let o=P=class extends Ie(re(ie)){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:t,url:r}=this;if(!t&&!r)throw new c("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=t?await t.fetchSublayerInfo(this,e):(await j(r,{responseType:"json",query:{f:"json"},...e})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:t,url:Ae(r)}))})()),this}readCapabilities(e,t){t=t.layerDefinition||t;const{operations:{supportsQuery:r,supportsQueryAttachments:i},query:{supportsFormatPBF:s,supportsOrderBy:n,supportsPagination:p},data:{supportsAttachment:y},queryRelated:h}=Pe(t,this.url);return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:r,supportsQueryAttachments:i},data:{supportsAttachment:y},query:{supportsFormatPBF:s,supportsOrderBy:n,supportsPagination:p},queryRelated:h}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}readMaxScaleRange(e,t){return{minScale:(t=t.layerDefinition||t).minScale??0,maxScale:t.maxScale??0}}get fieldsIndex(){return new xe(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields){for(const r of t.fields)if(r.type==="esriFieldTypeGlobalID")return r.name}}get id(){return this._get("id")??Me++}set id(e){this._get("id")!==e&&(this.layer?.capabilities?.exportMap?.supportsDynamicLayers!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(e,t){return t.type==="Table"}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers?.forEach(t=>t.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition?.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition?.maxScale||0}readObjectIdFieldFromService(e,t){return(t=t.layerDefinition||t).objectIdField?t.objectIdField:t.fields?.find(r=>r.type==="esriFieldTypeOID")?.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const{layerDefinition:r}=t;return 1-.01*(r?.transparency??r?.drawingInfo?.transparency??0)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=se(this.parent.id):t.parentLayerId=-1}get queryTask(){if(!this.layer)return null;const{capabilities:e,fieldsIndex:t,layer:r,url:i}=this,{spatialReference:s}=r,n="gdbVersion"in r?r.gdbVersion:void 0,p=ae("featurelayer-pbf")&&e?.query.supportsFormatPBF;return new we({fieldsIndex:t,gdbVersion:n,pbfSupported:p,queryAttachmentsSupported:e?.operations?.supportsQueryAttachments??!1,sourceSpatialReference:s,url:i})}set renderer(e){if(oe(e,this.fieldsIndex),e){for(const t of e.getSymbols())if(le(t)){v.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new N({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return ne(R.ofType(P),e)}writeSublayers(e,t,r){this.sublayers?.length&&(t[r]=this.sublayers.map(i=>i.id).toArray().reverse())}readTitle(e,t){return t.layerDefinition?.name??t.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return r}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,t=this.source;if(!e)return null;if(this._lastParsedUrl=e,t?.type==="map-layer")return`${e.path}/${t.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${pe(r)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=T(this),t=new P;return T(t).store=e.clone(Ve),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return Ce(this,e)}createQuery(){return new _e({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=(await import("./FeatureLayer-CeUF5Squ.js")).default,{layer:t,url:r}=this;let i;if(r&&this.originIdOf("url")>u.SERVICE)i=new e({url:r});else{if(!t?.parsedUrl)throw new c("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const s=t.parsedUrl;i=new e({url:s.path}),s&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return t?.refreshInterval!=null&&(i.refreshInterval=t.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=D(this.floorInfo)),this.originIdOf("labelingInfo")>u.SERVICE&&(i.labelingInfo=D(this.labelingInfo)),this.originIdOf("labelsVisible")>u.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>u.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>u.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>u.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>u.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>u.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>u.DEFAULTS&&(i.popupTemplate=D(this.popupTemplate)),this.originIdOf("renderer")>u.SERVICE&&(i.renderer=D(this.renderer)),this.source?.type==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>u.DEFAULTS&&(i.title=this.title),t?.type==="map-image"&&t.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=t.customParameters),t?.type==="tile"&&t.originIdOf("customParameters")>u.DEFAULTS&&(i.customParameters=t.customParameters),i}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){return ve(this.types,this.typeIdField,e)}getFieldDomain(e,t){const r=t?.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}async queryAttachments(e,t){await this.load(),e=qe.from(e);const r=this.capabilities;if(!r?.data?.supportsAttachment)throw new c("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:n,num:p,size:y,start:h,where:g}=e;if(!r?.operations?.supportsQueryAttachments&&(i?.length>0||n?.length>0||y?.length>0||p||h||g))throw new c("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(s?.length||n?.length||g))throw new c("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,t)}async queryFeatureCount(e=this.createQuery(),t){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryFeatureCount:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeForCount(e,{...t,query:{...this.layer?.customParameters,token:r}})}async queryFeatures(e=this.createQuery(),t){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryFeatures:not-supported","this layer has no url.");const r=await this.queryTask.execute(e,{...t,query:{...this.layer?.customParameters,token:this.layer?.apiKey}});if(r?.features)for(const i of r.features)i.sourceLayer=this;return r}async queryObjectIds(e=this.createQuery(),t){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryObjectIds:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeForIds(e,{...t,query:{...this.layer?.customParameters,token:r}})}async queryRelatedFeatures(e,t){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new c("queryRelatedFeatures:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer?.customParameters,token:r}})}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new c("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new c("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new c("queryRelatedFeaturesCount:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer?.customParameters,token:r}})}toExportImageJSON(e){const t={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},r=ue(e,this.definitionExpression);r!=null&&(t.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((s,n)=>(s[n]=this.originIdOf(n),s),{});if(Object.keys(i).some(s=>i[s]>u.SERVICE)){const s=t.drawingInfo={};if(i.renderer>u.SERVICE&&(s.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>u.SERVICE&&(s.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>u.SERVICE)if(this.labelingInfo){!this.loaded&&this.labelingInfo?.some(p=>!p.labelPlacement)&&v.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let n=this.labelingInfo;this.geometryType!=null&&(n=Fe(this.labelingInfo,M.toJSON(this.geometryType))),s.showLabels=!0,s.labelingInfo=n.filter(p=>p.labelPlacement).map(p=>p.toJSON({origin:"service",layer:this.layer}))}else s.showLabels=!1;i.opacity>u.SERVICE&&(s.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(s.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,t=>{t.color||t.style!=="esriSMSX"&&t.style!=="esriSMSCross"||(t.outline?.color?t.color=t.outline.color:t.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,t){if(e){const r=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const i of r)k(i.symbol)&&t(i.symbol);"symbol"in e&&k(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&k(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let s,n;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",n="supportsModification"}const p=T(this).getDefaultOrigin();if(p!=="service"){if(s&&this.layer?.capabilities?.exportMap?.[s]===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(n&&this.capabilities?.exportMap[n]===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${n}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,t),p!=="service"&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null,r.layer=null}),this.removeAllHandles()),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null}),e.on("before-changes",r=>{(this.layer?.capabilities?.exportMap?.supportsSublayersChanges??1)||(v.getLogger(this).error(new c("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),r.preventDefault())})]))}_logLockedError(e,t){const{layer:r,declaredClass:i}=this;v.getLogger(i).error(new c("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${r?.id}'`,{reason:t,sublayer:this,layer:r}))}_getLayerDomain(e){return this.fieldsIndex.get(e)?.domain??null}};o.test={isMapImageLayerOverridePolicy:e=>e===m||e===B,isTileImageLayerOverridePolicy:e=>e===Q},a([l({readOnly:!0})],o.prototype,"capabilities",void 0),a([b("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([l()],o.prototype,"defaultPopupTemplate",null),a([l({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:B}}})],o.prototype,"definitionExpression",null),a([l({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([b("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([l({type:[Le],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([l({readOnly:!0})],o.prototype,"fieldsIndex",null),a([l({type:Te,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:B},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([l({type:U,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([l({type:M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:M.read}}}}})],o.prototype,"geometryType",void 0),a([l({type:String})],o.prototype,"globalIdField",void 0),a([b("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([l({type:V,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([l({readOnly:!0})],o.prototype,"isTable",void 0),a([b("service","isTable",["type"])],o.prototype,"readIsTable",null),a([l({value:null,type:[Oe],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:m}}})],o.prototype,"labelingInfo",null),a([E("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([l({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:m}}})],o.prototype,"labelsVisible",null),a([l({value:null})],o.prototype,"layer",null),a([l({type:String,json:{write:{overridePolicy:Q}}})],o.prototype,"layerItemId",void 0),a([l({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:_}}})],o.prototype,"legendEnabled",void 0),a([l({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([l({type:Number,value:0,json:{write:{overridePolicy:m}}})],o.prototype,"minScale",null),a([b("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([l({type:Number,value:0,json:{write:{overridePolicy:m}}})],o.prototype,"maxScale",null),a([b("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([l()],o.prototype,"objectIdField",void 0),a([b("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([l({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:m}}})],o.prototype,"opacity",null),a([b("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([E("opacity")],o.prototype,"writeOpacity",null),a([l({json:{type:V,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:m}}})],o.prototype,"parent",void 0),a([E("parent")],o.prototype,"writeParent",null),a([l({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:_,writer(e,t,r){t[r]=!e}}}})],o.prototype,"popupEnabled",void 0),a([l({type:ye,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:_}}})],o.prototype,"popupTemplate",void 0),a([l({readOnly:!0})],o.prototype,"queryTask",null),a([l({type:[De],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],o.prototype,"relationships",void 0),a([l({types:ge,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m},origins:{"web-scene":{types:Se,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:m}}}}})],o.prototype,"renderer",null),a([l({types:{key:"type",base:null,typeMap:{"data-layer":Z,"map-layer":N}},cast(e){if(e){if("mapLayerId"in e)return K(N,e);if("dataSource"in e)return K(Z,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:m}}})],o.prototype,"source",null),a([l()],o.prototype,"sourceJSON",void 0),a([l({type:J,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),a([l({value:null,json:{type:[V],write:{target:"subLayerIds",allowNull:!0,overridePolicy:m}}})],o.prototype,"sublayers",null),a([de("sublayers")],o.prototype,"castSublayers",null),a([E("sublayers")],o.prototype,"writeSublayers",null),a([l({type:String,json:{name:"name",write:{overridePolicy:_}}})],o.prototype,"title",void 0),a([b("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),a([l({type:String})],o.prototype,"typeIdField",void 0),a([l({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([b("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([l({type:[Ee],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([l({type:String,json:{name:"layerUrl",write:{overridePolicy:Q}}})],o.prototype,"url",null),a([l({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:m}}})],o.prototype,"visible",null),a([E("visible")],o.prototype,"writeVisible",null),o=P=a([C("esri.layers.support.Sublayer")],o);const A=o;function Ne(e,t){const r=[],i={};return e&&e.forEach(s=>{const n=new A;if(n.read(s,t),i[n.id]=n,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(n)}else r.unshift(n)}),r}const q=R.ofType(A);function Y(e,t){e&&e.forEach(r=>{t(r),r.sublayers&&r.sublayers.length&&Y(r.sublayers,t)})}const ke=e=>{let t=class extends e{constructor(...r){super(...r),this.allSublayers=new me({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[u.SERVICE]:{},[u.PORTAL_ITEM]:{},[u.WEB_SCENE]:{},[u.WEB_MAP]:{}},this.subtables=null,this.addHandles([H(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),G),H(()=>this.subtables,(i,s)=>this._handleSublayersChange(i,s),G)])}destroy(){this.allSublayers.destroy()}readSublayers(r,i){if(!i||!r)return;const{sublayersSourceJSON:s}=this,n=L(i.origin);if(n<u.SERVICE||(s[n]={context:i,visibleLayers:r.visibleLayers||s[n].visibleLayers,layers:r.layers||s[n].layers},n>u.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:y}=this.createSublayersForOrigin("web-document"),h=T(this);h.setDefaultOrigin(y),this._set("sublayers",new q(p)),h.setDefaultOrigin("user")}findSublayerById(r){return this.allSublayers.find(i=>i.id===r)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(r){const i=L(r==="web-document"?"web-map":r);let s=u.SERVICE,n=this.sublayersSourceJSON[u.SERVICE].layers,p=this.sublayersSourceJSON[u.SERVICE].context,y=null;const h=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(d=>d<=i);for(const d of h){const f=this.sublayersSourceJSON[d];je(f.layers)&&(s=d,n=f.layers,p=f.context,f.visibleLayers&&(y={visibleLayers:f.visibleLayers,context:f.context}))}const g=[u.PORTAL_ITEM,u.WEB_SCENE,u.WEB_MAP].filter(d=>d>s&&d<=i);let S=null;for(const d of g){const{layers:f,visibleLayers:F,context:O}=this.sublayersSourceJSON[d];f&&(S={layers:f,context:O}),F&&(y={visibleLayers:F,context:O})}const w=Ne(n,p),I=new Map,x=new Set;if(S)for(const d of S.layers)I.set(d.id,d);if(y?.visibleLayers)for(const d of y.visibleLayers)x.add(d);return Y(w,d=>{S&&d.read(I.get(d.id),S.context),y&&d.read({defaultVisibility:x.has(d.id)},y.context)}),{origin:ce(s),sublayers:new q({items:w})}}read(r,i){super.read(r,i),this.readSublayers(r,i)}_handleSublayersChange(r,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),r&&(r.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(r.on("before-changes",s=>{v.getLogger("esri.layers.TileLayer").error(new c("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([l({readOnly:!0})],t.prototype,"allSublayers",void 0),a([l({readOnly:!0,type:R.ofType(A)})],t.prototype,"serviceSublayers",void 0),a([l({value:null,type:q,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),a([l({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),a([l({type:q,json:{read:{source:"tables"}}})],t.prototype,"subtables",void 0),t=a([C("esri.layers.mixins.SublayersOwner")],t),t};export{Re as f,ke as m,A as t};
