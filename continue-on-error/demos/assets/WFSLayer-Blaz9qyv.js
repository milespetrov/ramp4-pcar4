import{q as t,u as r,C as I,f as E,dD as N,aw as R,s as U,cE as h,db as J,b1 as k,n as W,an as D,D as C,f3 as O,a$ as Y,a_ as X,I as H,bq as L,v as Q,br as f,b6 as G}from"./main-CT4A7-UF.js";import"./UniqueValueRenderer-CU0PiXnr.js";import{m as V,u as z}from"./jsonUtils-B-cpqmPY.js";import{S as Z}from"./MultiOriginJSONSupport-CS8fXbwC.js";import{f as A}from"./Layer-BxbUP1GN.js";import{p as B}from"./workers-CvOas0m-.js";import{y as M,u as K}from"./clientSideDefaults-Ca5LUxIL.js";import{v as ee,W as te,z as re,Y as ie,S as oe}from"./wfsUtils-BpcCgzZw.js";import{d as se}from"./FeatureSet-Bec9nJsm.js";import{l as ae}from"./BlendLayer-CjhOFNWA.js";import{e as ne}from"./CustomParametersMixin-CLiwwZsL.js";import{c as pe}from"./FeatureEffectLayer-BP7R6PwR.js";import{c as le}from"./FeatureReductionLayer-BK6Lf3aU.js";import{b as de}from"./OperationalLayer-CtV5i7ja.js";import{p as me}from"./OrderedLayer-DnIGItgz.js";import{j as ue}from"./PortalLayer-CzAUZD6d.js";import{f as ye}from"./RefreshableLayer-DawV2Wgc.js";import{t as ce}from"./ScaleRangeLayer-BLP-wgWo.js";import{l as fe}from"./TemporalLayer-Dw130LxI.js";import{c as he,p as ge,d as we,b as ve,l as Fe,s as be,y as xe}from"./commonProperties-B7sH8QSn.js";import{y as T}from"./Field-Cg4JWxTu.js";import{s as Oe}from"./fieldProperties-DuDHPBEh.js";import{C as Se,n as Ie}from"./labelingInfo-DCAv-Vqp.js";import{b as y}from"./Query-B3fqN3sm.js";import{p as Re}from"./popupUtils-CDL-Gtx2.js";import"./preload-helper-ExcqyqRp.js";import"./RendererLegendOptions-CRNtR_15.js";import"./diffUtils-CBC-Xc2j.js";import"./colorRamps-B9QD3XbK.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-38bvdnPh.js";import"./compilerUtils-CMEqDd8A.js";import"./lengthUtils-B6nZ3Ses.js";import"./styleUtils-B_7VjvbW.js";import"./LRUCache-BpVJZyXz.js";import"./Version-DsJv1xRK.js";import"./FieldsIndex-EWEvBZKz.js";import"./UnknownTimeZone-CQL8mA0s.js";import"./OverrideHelper-Te3K160T.js";import"./colorUtils-bloZXMYx.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-DN21xyEn.js";import"./heatmapUtils-CE8VS2-w.js";import"./TimeExtent-DHHZvZSS.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./capabilities-Y9lFlGVh.js";import"./projection-CzwB5LLH.js";import"./projectBuffer-BExSDksD.js";import"./geojson-B4V3hm9a.js";import"./date-Dw3OHnFv.js";import"./OptimizedFeature-CIptWNVu.js";import"./xmlUtils-CtUoQO7q.js";import"./arcgisLayerUrl-BVfqQngv.js";import"./jsonUtils-CfRpZc2w.js";import"./parser-VqCJlQxe.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-TlZaQwFR.js";import"./FeatureEffect-Cun2TQA2.js";import"./FeatureFilter-B4aG-X7s.js";import"./fieldType-DFZCou1R.js";import"./FeatureReductionSelection-BUSRx2E-.js";import"./featureLayerUtils-B-JU8nH9.js";import"./uuid-Cl5lrJ4c.js";import"./RelationshipQuery-DejTZxRy.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-B55woOH6.js";import"./PortalItem-BO3lOf55.js";import"./portalItemUtils-DmUJPpNS.js";import"./TimeInfo-rbAjWiA8.js";import"./ElevationInfo-DdZLS5-q.js";import"./labelUtils-CbJxl6tK.js";let d=class extends E{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=M(!1,!1),this.type="wfs",this.refresh=N(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:o}=await this._workerHandler.refresh(e);return o&&(this.sourceJSON.extent=o),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const o=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:o})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,o={}){const s=await this.queryFeaturesJSON(e,o);return se.fromJSON(s)}async queryFeaturesJSON(e,o={}){return await this.load(o),this._workerHandler.queryFeatures(e?e.toJSON():void 0,o)}async queryFeatureCount(e,o={}){return await this.load(o),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,o)}async queryObjectIds(e,o={}){return await this.load(o),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,o)}async queryExtent(e,o={}){await this.load(o);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,o);return{count:s.count,extent:R.fromJSON(s.extent)}}async querySnapping(e,o={}){return await this.load(o),this._workerHandler.querySnapping(e,o)}async _createLoadOptions(e){const{url:o,customParameters:s,name:n,namespaceUri:p,fields:a,geometryType:m,maxRecordCount:u,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!o)throw new U("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await ee(o,{customParameters:s,...e}));const P=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),l=P?await te(this.wfsCapabilities,n,p,{spatialReference:c,customParameters:s,signal:e?.signal}):{...re(a??[]),geometryType:m,name:n,namespaceUri:p,spatialReference:c,swapXY:v},j=ie(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),q=h.toJSON(l.geometryType),{operations:x}=this.wfsCapabilities,$=x.GetFeature.url,_=x.GetFeature.outputFormat;return{customParameters:s,featureType:j,fields:l.fields?.map(F=>F.toJSON())??[],geometryField:l.geometryField,geometryType:q,getFeatureUrl:$,getFeatureOutputFormat:_,maxRecordCount:u,maxPageCount:g,maxTotalRecordCount:w,objectIdField:l.objectIdField,spatialReference:l.spatialReference?.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[o,s]=await J([this._createLoadOptions(e),B("WFSSourceWorker",{...e,strategy:k("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=o.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=o.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const m=await this._workerHandler.load(a,e);for(const u of m.warnings)W.getLogger(this.layer).warn("#load()",`${u.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:u});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:D},extent:m.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:K(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([r()],d.prototype,"capabilities",void 0),t([r({constructOnly:!0})],d.prototype,"layer",void 0),t([r()],d.prototype,"sourceJSON",void 0),t([r()],d.prototype,"type",void 0),t([r()],d.prototype,"wfsCapabilities",void 0),d=t([I("esri.layers.graphics.sources.WFSSource")],d);var b;const S=Oe();let i=b=class extends me(ne(le(pe(ae(fe(ye(ce(de(ue(Z(A))))))))))){static fromWFSLayerInfo(e){const{customParameters:o,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:m,objectIdField:u,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new b({customParameters:o,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:m,objectIdField:u,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=C.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),O(this.renderer,this.fieldsIndex),Y(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,o,s){const n=e.filter(p=>p.name!==oe);this.geometryField&&n.unshift(new T({name:this.geometryField,alias:this.geometryField,type:"geometry"})),X(s,n.map(p=>p.toJSON()),o)}get parsedUrl(){return H(this.url)}set renderer(e){O(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return Re(this,e)}createQuery(){const e=new y({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:o,timeExtent:s}=this;return e.timeExtent=o!=null&&s!=null?s.offset(-o.value,o.unit):s||null,e}getFieldDomain(e,o){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,o){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),o)).then(s=>{if(s?.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,o){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),o))}queryFeatureCount(e,o){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),o))}queryExtent(e,o){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),o))}async hasDataChanged(){try{const{dataChanged:e,updates:o}=await this.source.refresh();return o!=null&&this.read(o,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([r({readOnly:!0})],i.prototype,"capabilities",null),t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"createQueryVersion",null),t([r({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],i.prototype,"customParameters",void 0),t([r(L("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r(he)],i.prototype,"elevationInfo",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"featureUrl",void 0),t([r({type:[T],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],i.prototype,"fields",void 0),t([Q("fields")],i.prototype,"writeFields",null),t([r(S.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:R,json:{name:"extent"}})],i.prototype,"fullExtent",void 0),t([r()],i.prototype,"geometryField",void 0),t([r({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],i.prototype,"geometryType",void 0),t([r({type:String})],i.prototype,"id",void 0),t([r(ge)],i.prototype,"labelsVisible",void 0),t([r({type:[Se],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ie},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(we)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],i.prototype,"listMode",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({type:["WFS"]})],i.prototype,"operationalLayerType",void 0),t([r({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"maxRecordCount",void 0),t([r({type:f})],i.prototype,"maxPageCount",void 0),t([r({type:f})],i.prototype,"maxTotalRecordCount",void 0),t([r({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],i.prototype,"mode",void 0),t([r({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"name",void 0),t([r({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"namespaceUri",void 0),t([r(ve)],i.prototype,"opacity",void 0),t([r(S.outFields)],i.prototype,"outFields",void 0),t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r(Fe)],i.prototype,"popupEnabled",void 0),t([r({type:G,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({types:V,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:z,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],i.prototype,"renderer",null),t([r(be)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r({readOnly:!0})],i.prototype,"source",void 0),t([r({type:C,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],i.prototype,"spatialReference",void 0),t([r({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"spatialReferences",void 0),t([r({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"swapXY",void 0),t([r({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],i.prototype,"title",void 0),t([r({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([r(xe)],i.prototype,"url",void 0),t([r({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],i.prototype,"version",void 0),t([r()],i.prototype,"wfsCapabilities",null),i=b=t([I("esri.layers.WFSLayer")],i);const zt=i;export{zt as default};
