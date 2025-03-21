import{u as t,v as r,D as R,h as N,b1 as b,E as g,fF as z,s as w,fC as x,bg as H,aB as J,cR as F,bl as Z}from"./main-CZM6prq-.js";import"./UniqueValueRenderer-BK2_s7sE.js";import{m as U,u as V}from"./jsonUtils-f6LTjTSQ.js";import{S as k}from"./MultiOriginJSONSupport-Ca1jwdYN.js";import{f as W}from"./Layer-BGDDPkVr.js";import{R as $,x as I,C as O,P as K,O as X,N as Y,q as ee,v as te,k as re}from"./ogcFeatureUtils-ByG1W48p.js";import{s as oe}from"./capabilities-Cjn77swe.js";import{d as se}from"./FeatureSet-LFtb7iIS.js";import{i as ie}from"./APIKeyMixin-2iwaY30O.js";import{l as pe}from"./BlendLayer-CyBMfvFo.js";import{e as ne}from"./CustomParametersMixin-CDHgW66c.js";import{c as ae}from"./FeatureEffectLayer-CDy1U6oA.js";import{c as le}from"./FeatureReductionLayer-BR_INiMl.js";import{b as ue}from"./OperationalLayer-BictRKas.js";import{p as de}from"./OrderedLayer-DPYs5kz7.js";import{j as ce}from"./PortalLayer-CLZQNs9W.js";import{f as ye}from"./RefreshableLayer-DwzxBemM.js";import{t as me}from"./ScaleRangeLayer-CfttcZjy.js";import{l as fe}from"./TemporalLayer-BGgtz1t9.js";import{c as he,p as ge,d as ve,l as Se,s as Ce,y as Re}from"./commonProperties-DUxfuj4s.js";import{n as be}from"./FeatureType-DLUH9q0f.js";import{y as we}from"./Field-Czw7f_GQ.js";import{s as xe}from"./fieldProperties-DDdm1e8g.js";import{C as Fe,n as Ie}from"./labelingInfo-Bh-NmiGj.js";import{b as D}from"./Query-djCJM1hJ.js";import{p as Oe}from"./popupUtils-BJCW7YP0.js";let d=class extends N{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:s,spatialReference:i,supportedCrs:p},layer:{apiKey:l,customParameters:a,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:s,maxRecordCount:n,queryParameters:{apiKey:l,customParameters:a},spatialReference:i,supportedCrs:p}}queryExtent(e,s={}){return null}queryFeatureCount(e,s={}){return null}queryFeatures(e,s={}){return this.queryFeaturesJSON(e,s).then(i=>se.fromJSON(i))}queryFeaturesJSON(e,s={}){const i=this.getSource();return this.load(s).then(()=>$(i,e,s))}queryObjectIds(e,s={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,s){const i=new RegExp(`^${b(s)}$`,"i");return e.conformsTo.some(p=>i.test(p))??!1}_getCapabilities(e,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:s,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:oe,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const s=e?.components?.parameters;return s?.limit?.schema?.maximum??s?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const s=e.storageCrs??I,i=O(s);return i==null?g.WGS84:new g({wkid:i})}_getSupportedSpatialReferences(e,s){const i="#/crs",p=e.crs??[I],l=p.includes(i)?p.filter(n=>n!==i).concat(s.crs??[]):p,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return l.filter(n=>!a.test(n))}async _loadOGCServices(e,s){const i=s!=null?s.signal:null,{apiKey:p,collectionId:l,customParameters:a,fields:n,geometryType:T,hasZ:j,objectIdField:P,timeInfo:E,url:_}=e,q={fields:n?.map(u=>u.toJSON()),geometryType:z.toJSON(T),hasZ:j??!1,objectIdField:P,timeInfo:E?.toJSON()},c={apiKey:p,customParameters:a,signal:i},m=await K(_,c),[v,S]=await Promise.all([X(m,c),Y(m,c)]);if(!this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new w("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=S.collections.find(({id:u})=>u===l);if(!y)throw new w("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const B=this._conformsToType(v,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await ee(m,c):null,C=await te(y,q,c),A=this._getMaxRecordCount(B),G=this._getCapabilities(C.hasZ,A),Q=this._getStorageSpatialReference(y).toJSON(),M=this._getSupportedSpatialReferences(y,S),L=new RegExp(`^${b(re)}`,"i"),f={};for(const u of M){const h=O(u);h!=null&&(f[h]||(f[h]=u.replace(L,"")))}this.featureDefinition={capabilities:G,collection:y,layerDefinition:C,spatialReference:Q,supportedCrs:f}}};t([r()],d.prototype,"featureDefinition",void 0),t([r({constructOnly:!0})],d.prototype,"layer",void 0),t([r()],d.prototype,"type",void 0),d=t([R("esri.layers.graphics.sources.OGCFeatureSource")],d);const De=xe();let o=class extends ie(ne(le(ae(pe(de(fe(me(ue(ce(ye(k(W)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}on(e,s){return super.on(e,s)}createPopupTemplate(e){return Oe(this,e)}createQuery(){return new D}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){let i,p=!1;const l=s?.feature?.attributes,a=this.typeIdField&&l?.[this.typeIdField];return a!=null&&this.types&&(p=this.types.some(n=>n.id==a&&(i=n.domains?.[e],i?.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),p||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,s){return this.load().then(()=>this.source.queryFeatures(D.from(e)||this.createQuery(),s)).then(i=>(i?.features?.forEach(p=>{p.layer=p.sourceLayer=this}),i))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),x(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const s of this.fields)if(s.name===e&&s.domain)return s.domain;return null}};t([r({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),t([r({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),t([r({type:String})],o.prototype,"copyright",void 0),t([r({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([r({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),t([r({type:String})],o.prototype,"displayField",void 0),t([r({type:Number})],o.prototype,"effectiveMaxRecordCount",null),t([r(he)],o.prototype,"elevationInfo",void 0),t([r({type:[we],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),t([r(De.fieldsIndex)],o.prototype,"fieldsIndex",void 0),t([r({readOnly:!0,type:J,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),t([r({type:F.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:F.read}}}}})],o.prototype,"geometryType",void 0),t([r({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),t([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),t([r({type:[Fe],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}}}})],o.prototype,"labelingInfo",void 0),t([r(ge)],o.prototype,"labelsVisible",void 0),t([r(ve)],o.prototype,"legendEnabled",void 0),t([r({type:Number})],o.prototype,"maxRecordCount",void 0),t([r({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),t([r({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),t([r(Se)],o.prototype,"popupEnabled",void 0),t([r({type:Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([r({types:U,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:V,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),t([r(Ce)],o.prototype,"screenSizePerspectiveEnabled",void 0),t([r({readOnly:!0})],o.prototype,"source",void 0),t([r({readOnly:!0,type:g,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),t([r({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),t([r({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),t([r({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),t([r({type:[be]})],o.prototype,"types",void 0),t([r(Re)],o.prototype,"url",void 0),o=t([R("esri.layers.OGCFeatureLayer")],o);const Te=o;export{Te as default};
