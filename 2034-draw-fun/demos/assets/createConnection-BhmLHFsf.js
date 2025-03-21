const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FeatureLayer-DRh7PlFp.js","./preload-helper-ExcqyqRp.js","./main-DvRWqUGe.js","./main-gKmidBZg.css","./UniqueValueRenderer-8lSMEgzV.js","./RendererLegendOptions-gr-3tm68.js","./diffUtils-D-5xKmj0.js","./colorRamps-lFEVUyn7.js","./sizeVariableUtils-Cmcuvw-4.js","./visualVariableUtils-JsUiFJZV.js","./compilerUtils-DTFMfUAK.js","./lengthUtils-DXhwVgbU.js","./styleUtils-BcU-XaFh.js","./jsonUtils-Csv5IleN.js","./LRUCache-BVW1EQYG.js","./Version-w1-yy0xn.js","./FieldsIndex-BeqDUQv2.js","./UnknownTimeZone-QmMWeZKP.js","./OverrideHelper-ow6Za6fa.js","./colorUtils-WI6scmAE.js","./vec42-CKs01hkn.js","./common-DQOJ18NT.js","./vec4f64-o2zAXfmz.js","./utils-BDwibSBb.js","./enums-CmIX1y88.js","./quantizationUtils-l6hrjSgU.js","./heatmapUtils-aRElwnM-.js","./MultiOriginJSONSupport-MhD6I5Ti.js","./commonProperties-DYY_ul3D.js","./ElevationInfo-gCgu2xYa.js","./FeatureLayerBase-BLmXUhn0.js","./Field-m2DmeAcP.js","./fieldType-BrAmgB-g.js","./HeightModelInfo-CU60m2DO.js","./arcgisLayerUrl-CYyLsf-j.js","./featureLayerUtils-Do88GL-H.js","./uuid-Cl5lrJ4c.js","./Query-BAtRw3fb.js","./TimeExtent-CiTDzFuO.js","./RelationshipQuery-BueQbHG4.js","./LayerFloorInfo-BCHRxWPe.js","./Relationship-CyjjHphm.js","./serviceCapabilitiesUtils-BUpVkNZ9.js","./Layer-DltOj__X.js","./workers-C_WvC5ym.js","./Queue-qIucQaFG.js","./editsZScale-H1mxakX_.js","./queryZScale-CguP7TaC.js","./projection-CMnvYCjG.js","./projectBuffer-B-hA5kQ3.js","./FeatureSet-CRO4BGkD.js","./APIKeyMixin-DjVQw1vp.js","./ArcGISService-DcXgTtSn.js","./BlendLayer-D19AMlZc.js","./jsonUtils-DfF8ZMSh.js","./parser-Dvr6HhlZ.js","./mat4f32-DcsiF_Rp.js","./mat4-B1QDXeUd.js","./CustomParametersMixin-XHlAJ2U7.js","./EditBusLayer-iL07_j1K.js","./FeatureEffectLayer-BDLjQZ9d.js","./FeatureEffect-DSnWl6wF.js","./FeatureFilter-BMrg9Y8u.js","./FeatureReductionLayer-DQRKjCWX.js","./FeatureReductionSelection-CwaozHG7.js","./labelingInfo-CdA8ALnW.js","./labelUtils-YHGeQSLc.js","./MD5-C9MwAd2G.js","./OperationalLayer-DrtY4ABj.js","./OrderedLayer-CmO_HAyF.js","./OrderByInfo-BMXQZR_6.js","./PortalLayer-CBnWXt1P.js","./PortalItem-hcmZeJDD.js","./portalItemUtils-DMyuQA2C.js","./RefreshableLayer-DX7u7DrU.js","./ScaleRangeLayer-Bq1rR2h2.js","./TemporalLayer-Bpq3Fwea.js","./TimeInfo-ESp77wa3.js","./FeatureTemplate-BlhZWeCZ.js","./FeatureType-XM9_QstU.js","./fieldProperties-CNXvnZah.js","./versionUtils-S-kqVuCa.js","./styleUtils-1lhAcwE-.js","./popupUtils-CUd-X-Xj.js","./AlphaCutoff-UcccL64p.js","./interfaces-CL2NbQte.js"])))=>i.map(i=>d[i]);
import{_ as L}from"./preload-helper-ExcqyqRp.js";import{c3 as N,s as a,q as d,u as y,C as w,cF as k,n as c,fE as O,bb as v,U as E,aw as x,D as P}from"./main-DvRWqUGe.js";import{o as F}from"./projection-CMnvYCjG.js";import{c as b}from"./query-CrGnbSl-.js";import{b as $}from"./Query-BAtRw3fb.js";import"./projectBuffer-B-hA5kQ3.js";import"./normalizeUtils-BAAG5IU_.js";import"./normalizeUtilsCommon-oQczJjcC.js";import"./utils-BD15Tnt0.js";import"./utils-CVCusHIW.js";import"./pbfQueryUtils-BSxOdkSG.js";import"./pbf-CWdzy9uu.js";import"./OptimizedGeometry-BF8iz5FO.js";import"./OptimizedFeature-BXKn-CHN.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CguP7TaC.js";import"./Field-m2DmeAcP.js";import"./fieldType-BrAmgB-g.js";import"./TimeExtent-CiTDzFuO.js";let m=class extends N.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new a("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};d([y({readOnly:!0})],m.prototype,"connectionError",null),m=d([w("esri.layers.support.StreamConnection")],m);const C=m;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends C{constructor(t){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:r,spatialReference:o,sourceSpatialReference:s}=t;this._config=t,this._featureZScaler=F(r,s,o),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(t){this._websocket!=null?this._websocket.send(JSON.stringify(t)):this._outstandingMessages.push(t)}sendMessageToClient(t){this._onMessage(t)}updateCustomParameters(t){this._config.customParameters=t,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(t=this._config.source.path,r=1e3,o=0){try{if(this.destroyed)return;const s=k(t,this._config.customParameters??{});this._websocket=await this._createWebSocket(s),this.notifyChange("connectionStatus")}catch(s){const n=r/1e3;return this._config.maxReconnectionAttempts&&o>=this._config.maxReconnectionAttempts?(c.getLogger(this).error(new a("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(c.getLogger(this).error(new a("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,s)),await O(r),this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),o+1))}}_setWebSocketJSONParseHandler(t){t.onmessage=r=>{try{const o=JSON.parse(r.data);this._onMessage(o)}catch(o){return void c.getLogger(this).error(new a("websocket-connection","Failed to parse message, invalid JSON",{error:o}))}}}_createWebSocket(t){return new Promise((r,o)=>{const s=new WebSocket(t);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=n=>this._onClose(n),s.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(s),r(s)},s.onclose=n=>{s.onopen=s.onclose=null,o(n)}})}async _handshake(t=1e4){const r=this._websocket;if(r==null)return;const o=v(),s=r.onmessage,{filter:n,outFields:u,spatialReference:l}=this._config;return o.timeout(t),r.onmessage=h=>{let i=null;try{i=JSON.parse(h.data)}catch{}i&&typeof i=="object"||(c.getLogger(this).error(new a("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),o.reject(),this.destroy()),i.spatialReference?.wkid!==l?.wkid&&(c.getLogger(this).error(new a("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,h.data)),o.reject(),this.destroy()),i.format!=="json"&&(c.getLogger(this).error(new a("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),o.reject(),this.destroy()),n&&i.filter!==n&&c.getLogger(this).error(new a("websocket-connection","Tried to set filter, but server doesn't support it")),u&&i.outFields!==u&&c.getLogger(this).error(new a("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=s;for(const p of this._outstandingMessages)r.send(JSON.stringify(p));this._outstandingMessages=[],o.resolve()},r.send(JSON.stringify({filter:n,outFields:u,format:"json",spatialReference:{wkid:l.wkid}})),o.promise}_onMessage(t){if(this.onMessage(t),"type"in t)switch(t.type){case"features":case"featureResult":for(const r of t.features)this._featureZScaler!=null&&this._featureZScaler(r.geometry),this.onFeature(r)}}_onError(t){const r="Encountered an error over WebSocket connection";this._set("errorString",r),c.getLogger(this).error("websocket-connection",r)}_onClose(t){this._websocket=null,this.notifyChange("connectionStatus"),t.code!==1e3&&c.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${t.code}`),this.destroyed||this._open()}};d([y()],f.prototype,"connectionStatus",null),d([y()],f.prototype,"errorString",void 0),f=d([w("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const M=1e4,W={maxQueryDepth:5,maxRecordCountFactor:3};let S=class extends f{constructor(e){super({...W,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||c.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void c.getLogger(this).error(new a("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=E(e.path,{query:t,responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r,n=this._inferWebSocketBaseUrl(o);return k(`${n}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return c.getLogger(this).error(new a("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let s=!1;const n=v(),u=()=>{s||(this.destroyed||this._websocket!==r||c.getLogger(this).error(new a("geoevent-connection","Server timed out when setting filter")),n.reject())},l=h=>{const i=JSON.parse(h.data);i.filter&&(i.error&&(c.getLogger(this).error(new a("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),s=!0,n.resolve())};return r.onmessage=l,r.send(o),setTimeout(u,M),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e?.geometry)try{const o=x(e.geometry);if(o.type!=="extent")throw new a(`Expected extent but found type ${o.type}`);r.geometry=JSON.stringify(o.shiftCentralMeridian())}catch(o){c.getLogger(this).error(new a("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return e?.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],o=this._relatedFeatures.get(r);if(!o)return c.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:s,geometry:n}=o;for(const u in s)e.attributes[u]=s[u];return n&&(e.geometry=n),e.geometry||e.centroid||c.getLogger(this).error(new a("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const n of s.features)this.onFeature(this._enrich(n))}catch(e){c.getLogger(this).error(new a("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await L(async()=>{const{default:R}=await import("./FeatureLayer-DRh7PlFp.js");return{default:R}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]),import.meta.url)).default({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,s=r.query.supportsPagination,n=r.query.supportsCentroid,u=this._config.maxRecordCountFactor,l=t.capabilities.query.maxRecordCount,h=o?l*u:l,i=new $;if(i.outFields=this._config.outFields??["*"],i.where=this._config.filter?.where??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=P.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),o&&(i.maxRecordCountFactor=u),s)return i.num=h,t.destroy(),this._queryPages(e,i);const p=await b(e,i,this._config.sourceSpatialReference);return t.destroy(),p.data}async _queryPages(e,t,r=[],o=0){t.start=t.num!=null?o*t.num:null;const{data:s}=await b(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<(this._config.maxQueryDepth??0)?(s.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,o+1)):(r.forEach(n=>s.features.push(n)),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const s of r){const n=s.attributes[o];t.set(n,s)}this._relatedFeatures=t}};S=d([w("esri.layers.graphics.sources.connections.GeoEventConnection")],S);const q=S;let _=class extends C{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._featureZScaler=F(t,o,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};d([y()],_.prototype,"connectionStatus",void 0),d([y()],_.prototype,"errorString",void 0),_=d([w("esri.layers.support.ClientSideConnection")],_);function T(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t),e!=null&&(r.where=e),r}function se(e,t,r,o,s,n,u,l,h){const i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:T(s,n),maxReconnectionAttempts:u,maxReconnectionInterval:l,customParameters:h};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(i):new q(i):new _(i)}export{se as createConnection};
