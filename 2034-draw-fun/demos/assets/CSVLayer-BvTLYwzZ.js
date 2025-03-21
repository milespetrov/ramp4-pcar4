import{q as i,u as r,C as d,f as v,ec as w,aD as S,bk as O,z as F,dk as b,a0 as I,D as q,J as N,I as _,s as c}from"./main-DvRWqUGe.js";import J from"./FeatureLayer-DRh7PlFp.js";import{p as C}from"./workers-C_WvC5ym.js";import{d as P}from"./FeatureSet-CRO4BGkD.js";import{y as j}from"./clientSideDefaults-DFA5bQhD.js";import{b as l}from"./Query-BAtRw3fb.js";import"./preload-helper-ExcqyqRp.js";import"./UniqueValueRenderer-8lSMEgzV.js";import"./RendererLegendOptions-gr-3tm68.js";import"./diffUtils-D-5xKmj0.js";import"./colorRamps-lFEVUyn7.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-JsUiFJZV.js";import"./compilerUtils-DTFMfUAK.js";import"./lengthUtils-DXhwVgbU.js";import"./styleUtils-BcU-XaFh.js";import"./jsonUtils-Csv5IleN.js";import"./LRUCache-BVW1EQYG.js";import"./Version-w1-yy0xn.js";import"./FieldsIndex-BeqDUQv2.js";import"./UnknownTimeZone-QmMWeZKP.js";import"./OverrideHelper-ow6Za6fa.js";import"./colorUtils-WI6scmAE.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-o2zAXfmz.js";import"./utils-BDwibSBb.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-l6hrjSgU.js";import"./heatmapUtils-aRElwnM-.js";import"./MultiOriginJSONSupport-MhD6I5Ti.js";import"./commonProperties-DYY_ul3D.js";import"./ElevationInfo-gCgu2xYa.js";import"./FeatureLayerBase-BLmXUhn0.js";import"./Field-m2DmeAcP.js";import"./fieldType-BrAmgB-g.js";import"./HeightModelInfo-CU60m2DO.js";import"./arcgisLayerUrl-CYyLsf-j.js";import"./featureLayerUtils-Do88GL-H.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-BueQbHG4.js";import"./LayerFloorInfo-BCHRxWPe.js";import"./Relationship-CyjjHphm.js";import"./serviceCapabilitiesUtils-BUpVkNZ9.js";import"./Layer-DltOj__X.js";import"./TimeExtent-CiTDzFuO.js";import"./editsZScale-H1mxakX_.js";import"./queryZScale-CguP7TaC.js";import"./projection-CMnvYCjG.js";import"./projectBuffer-B-hA5kQ3.js";import"./APIKeyMixin-DjVQw1vp.js";import"./ArcGISService-DcXgTtSn.js";import"./BlendLayer-D19AMlZc.js";import"./jsonUtils-DfF8ZMSh.js";import"./parser-Dvr6HhlZ.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B1QDXeUd.js";import"./CustomParametersMixin-XHlAJ2U7.js";import"./EditBusLayer-iL07_j1K.js";import"./FeatureEffectLayer-BDLjQZ9d.js";import"./FeatureEffect-DSnWl6wF.js";import"./FeatureFilter-BMrg9Y8u.js";import"./FeatureReductionLayer-DQRKjCWX.js";import"./FeatureReductionSelection-CwaozHG7.js";import"./labelingInfo-CdA8ALnW.js";import"./labelUtils-YHGeQSLc.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-DrtY4ABj.js";import"./OrderedLayer-CmO_HAyF.js";import"./OrderByInfo-BMXQZR_6.js";import"./PortalLayer-CBnWXt1P.js";import"./PortalItem-hcmZeJDD.js";import"./portalItemUtils-DMyuQA2C.js";import"./RefreshableLayer-DX7u7DrU.js";import"./ScaleRangeLayer-Bq1rR2h2.js";import"./TemporalLayer-Bpq3Fwea.js";import"./TimeInfo-ESp77wa3.js";import"./FeatureTemplate-BlhZWeCZ.js";import"./FeatureType-XM9_QstU.js";import"./fieldProperties-CNXvnZah.js";import"./versionUtils-S-kqVuCa.js";import"./styleUtils-1lhAcwE-.js";import"./popupUtils-CUd-X-Xj.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";import"./Queue-qIucQaFG.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";let n=class extends v{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:s,timeExtent:a}=await this._connection.invoke("refresh",e);return s&&(this.sourceJSON.extent=s),a&&(this.sourceJSON.timeInfo.timeExtent=[a.start,a.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const s=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return P.fromJSON(s)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const s=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:s.count,extent:S.fromJSON(s.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await C("CSVSourceWorker",{strategy:O("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:s,fields:a,latitudeField:m,longitudeField:h,spatialReference:y,timeInfo:f}=this.loadOptions,p=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:a?.map(g=>g.toJSON()),latitudeField:m,longitudeField:h,spatialReference:y?.toJSON(),timeInfo:f?.toJSON()}},{signal:t});this.locationInfo=p.locationInfo,this.sourceJSON=p.layerDefinition,this.delimiter=p.delimiter}};i([r()],n.prototype,"type",void 0),i([r()],n.prototype,"loadOptions",void 0),i([r()],n.prototype,"customParameters",void 0),i([r()],n.prototype,"locationInfo",void 0),i([r()],n.prototype,"sourceJSON",void 0),i([r()],n.prototype,"delimiter",void 0),n=i([d("esri.layers.graphics.sources.CSVSource")],n);function u(t,e){throw new c(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let o=class extends J{constructor(...t){super(...t),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=q.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(N).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){return e.showLabels!=null?e.showLabels:!!e.layerDefinition?.drawingInfo?.labelingInfo}set url(t){if(!t)return void this._set("url",t);const e=_(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new n({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(s=>{if(s?.features)for(const a of s.features)a.layer=a.sourceLayer=this;return s})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(l.from(t)||this.createQuery()))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new c("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return u(this,"csv-layer:save")}async saveAs(t,e){return u(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return e!=null&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),i([F("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],o.prototype,"operationalLayerType",void 0),i([r()],o.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:n,readOnly:!0})],o.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0),i([r({json:{read:b,write:{isRequired:!0,ignoreOrigin:!0,writer:I}}})],o.prototype,"url",null),o=i([d("esri.layers.CSVLayer")],o);const ce=o;export{ce as default};
