import{k as i,o as r,A as d,e as v,dA as w,au as S,a$ as O,u as F,dj as b,T as I,B as q,G as N,I as _,s as c}from"./main-BPeHLg3l.js";import J from"./FeatureLayer-CXCyuESD.js";import{p as j}from"./workers-BKBe8_9L.js";import{d as C}from"./FeatureSet-5FO8v-T5.js";import{y as P}from"./clientSideDefaults-rTbc4Ao8.js";import{b as l}from"./Query-B8FI1Hob.js";let a=class extends v{constructor(e){super(e),this.type="csv",this.refresh=w(async t=>{await this.load();const{extent:s,timeExtent:n}=await this._connection.invoke("refresh",t);return s&&(this.sourceJSON.extent=s),n&&(this.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const s=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return C.fromJSON(s)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const s=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:s.count,extent:S.fromJSON(s.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await j("CSVSourceWorker",{strategy:O("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{url:t,delimiter:s,fields:n,latitudeField:p,longitudeField:y,spatialReference:m,timeInfo:f}=this.loadOptions,u=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:s,fields:n?.map(g=>g.toJSON()),latitudeField:p,longitudeField:y,spatialReference:m?.toJSON(),timeInfo:f?.toJSON()}},{signal:e});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};i([r()],a.prototype,"type",void 0),i([r()],a.prototype,"loadOptions",void 0),i([r()],a.prototype,"customParameters",void 0),i([r()],a.prototype,"locationInfo",void 0),i([r()],a.prototype,"sourceJSON",void 0),i([r()],a.prototype,"delimiter",void 0),a=i([d("esri.layers.graphics.sources.CSVSource")],a);function h(e,t){throw new c(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let o=class extends J{constructor(...e){super(...e),this.geometryType="point",this.capabilities=P(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=q.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,s=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(N).then(async()=>this.initLayerProperties(await this.createGraphicsSource(t)));return this.addResolvingPromise(s),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(e,t){return t.showLabels!=null?t.showLabels:!!t.layerDefinition?.drawingInfo?.labelingInfo}set url(e){if(!e)return void this._set("url",e);const t=_(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new a({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(l.from(e)||this.createQuery())).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(l.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(l.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(l.from(e)||this.createQuery()))}read(e,t){super.read(e,t),t&&t.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new c("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return h(this,"csv-layer:save")}async saveAs(e,t){return h(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],o.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],o.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),i([F("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],o.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],o.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],o.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],o.prototype,"operationalLayerType",void 0),i([r()],o.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],o.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:a,readOnly:!0})],o.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],o.prototype,"type",void 0),i([r({json:{read:b,write:{isRequired:!0,ignoreOrigin:!0,writer:I}}})],o.prototype,"url",null),o=i([d("esri.layers.CSVLayer")],o);const x=o;export{x as default};
