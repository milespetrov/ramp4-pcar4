const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./FeatureLayer-ZNGUyl_G.js","./preload-helper-ExcqyqRp.js","./main-CdsSyLmf.js","./main-K0GaKQ3z.css","./UniqueValueRenderer-nIzU1eL7.js","./RendererLegendOptions-mzVsWTh8.js","./diffUtils-D-X3xnla.js","./colorRamps-B_4-1lH0.js","./sizeVariableUtils-Cmcuvw-4.js","./visualVariableUtils-DaNDAmHB.js","./compilerUtils-5yq29FtW.js","./lengthUtils-C4LFWJEB.js","./styleUtils-KGfryok8.js","./jsonUtils-CackR75F.js","./LRUCache-B7IYX8gP.js","./Version-BFm4aM6R.js","./FieldsIndex-ClJtp0E9.js","./UnknownTimeZone-CoLzobAS.js","./OverrideHelper-CHlgOicT.js","./colorUtils-ZGQqe5BW.js","./vec42-CKs01hkn.js","./common-DQOJ18NT.js","./vec4f64-CMoMXWBi.js","./utils-QWndGYJy.js","./enums-CmIX1y88.js","./quantizationUtils-CaK8jumX.js","./heatmapUtils-BL0jS6No.js","./MultiOriginJSONSupport-D8yEj04b.js","./commonProperties-BjODNSWn.js","./ElevationInfo-CPzFYQby.js","./FeatureLayerBase-iH8zAoYw.js","./Field-O0rZEvGH.js","./fieldType-AYW3_uOi.js","./HeightModelInfo-B7DrCbr9.js","./arcgisLayerUrl-DtiMs6dI.js","./featureLayerUtils-BAk6_R1b.js","./uuid-Cl5lrJ4c.js","./Query-Drb-_Vf3.js","./TimeExtent-CabtJ4-h.js","./RelationshipQuery-CCfPPBfP.js","./LayerFloorInfo-BJYE1Q-l.js","./Relationship-Ix6CidXY.js","./serviceCapabilitiesUtils-CetSBnIy.js","./Layer-B2IJCJLw.js","./workers-CTW-u_CL.js","./editsZScale-DnPA_uMy.js","./queryZScale-CmFTHJip.js","./projection-DW4hqkh8.js","./projectBuffer-Cw1atCwM.js","./FeatureSet-B93P2sRX.js","./APIKeyMixin-DfVOlbjY.js","./ArcGISService-DjDy749H.js","./BlendLayer-CT2OvfVo.js","./jsonUtils-N0kWnI_0.js","./parser-Bxn8s3ve.js","./mat4f32-DcsiF_Rp.js","./mat4-pIm5M4dy.js","./CustomParametersMixin-DVFLI3pe.js","./EditBusLayer-Bef41cu8.js","./FeatureEffectLayer-BiVjU--1.js","./FeatureEffect-oEZ-SLSu.js","./FeatureFilter-C3K41Jau.js","./FeatureReductionLayer-BL1TvLl6.js","./FeatureReductionSelection-DAAnSRye.js","./labelingInfo-CN0gnOvg.js","./labelUtils-yTHwrcEe.js","./MD5-C9MwAd2G.js","./OperationalLayer-4gmAzNZO.js","./OrderedLayer-Dhsgy8RI.js","./OrderByInfo-G5p483dS.js","./PortalLayer-L-jklQ2Y.js","./PortalItem-CYho9V5f.js","./portalItemUtils-DoXsKFwi.js","./RefreshableLayer-Dd6EaADx.js","./ScaleRangeLayer-ChrkHNz2.js","./TemporalLayer-DEiFPHGh.js","./TimeInfo-9zP9yYya.js","./FeatureTemplate-XI-WzTWn.js","./FeatureType-CUXpk4z4.js","./fieldProperties-BH0jmDrT.js","./versionUtils-C-SLMKiW.js","./styleUtils-BjUb_8dQ.js","./popupUtils-CKl_ME6X.js","./AlphaCutoff-UcccL64p.js","./interfaces-CL2NbQte.js"])))=>i.map(i=>d[i]);
import{_ as L}from"./preload-helper-ExcqyqRp.js";import{bS as O,s as c,q as d,u as y,C as w,cq as k,n as a,e_ as N,aO as v,U as x,b5 as E,D as P}from"./main-CdsSyLmf.js";import{o as F}from"./projection-DW4hqkh8.js";import{c as b}from"./query-DHEJ6qKu.js";import{b as $}from"./Query-Drb-_Vf3.js";import"./projectBuffer-Cw1atCwM.js";import"./normalizeUtils-Dfj25wzD.js";import"./normalizeUtilsCommon-BDqFe87-.js";import"./utils-Ctlcovrv.js";import"./utils-Cv4bkaTm.js";import"./pbfQueryUtils-BHvTycro.js";import"./pbf-KYU4Xcfu.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CmFTHJip.js";import"./Field-O0rZEvGH.js";import"./fieldType-AYW3_uOi.js";import"./TimeExtent-CabtJ4-h.js";let m=class extends O.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new c("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};d([y({readOnly:!0})],m.prototype,"connectionError",null),m=d([w("esri.layers.support.StreamConnection")],m);const C=m;var g;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(g||(g={}));let f=class extends C{constructor(t){super({}),this._outstandingMessages=[],this.errorString=null;const{geometryType:r,spatialReference:o,sourceSpatialReference:s}=t;this._config=t,this._featureZScaler=F(r,s,o),this._open()}normalizeCtorArgs(){return{}}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),this._websocket!=null&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(this._websocket==null)return"disconnected";switch(this._websocket.readyState){case g.CONNECTING:case g.OPEN:return"connected";case g.CLOSING:case g.CLOSED:return"disconnected"}}sendMessageToSocket(t){this._websocket!=null?this._websocket.send(JSON.stringify(t)):this._outstandingMessages.push(t)}sendMessageToClient(t){this._onMessage(t)}updateCustomParameters(t){this._config.customParameters=t,this._websocket!=null&&this._websocket.close()}async _tryCreateWebSocket(t=this._config.source.path,r=1e3,o=0){try{if(this.destroyed)return;const s=k(t,this._config.customParameters??{});this._websocket=await this._createWebSocket(s),this.notifyChange("connectionStatus")}catch(s){const n=r/1e3;return this._config.maxReconnectionAttempts&&o>=this._config.maxReconnectionAttempts?(a.getLogger(this).error(new c("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(a.getLogger(this).error(new c("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,s)),await N(r),this._tryCreateWebSocket(t,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),o+1))}}_setWebSocketJSONParseHandler(t){t.onmessage=r=>{try{const o=JSON.parse(r.data);this._onMessage(o)}catch(o){return void a.getLogger(this).error(new c("websocket-connection","Failed to parse message, invalid JSON",{error:o}))}}}_createWebSocket(t){return new Promise((r,o)=>{const s=new WebSocket(t);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=n=>this._onClose(n),s.onerror=n=>this._onError(n),this._setWebSocketJSONParseHandler(s),r(s)},s.onclose=n=>{s.onopen=s.onclose=null,o(n)}})}async _handshake(t=1e4){const r=this._websocket;if(r==null)return;const o=v(),s=r.onmessage,{filter:n,outFields:u,spatialReference:l}=this._config;return o.timeout(t),r.onmessage=h=>{let i=null;try{i=JSON.parse(h.data)}catch{}i&&typeof i=="object"||(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - malformed message",h.data)),o.reject(),this.destroy()),i.spatialReference?.wkid!==l?.wkid&&(a.getLogger(this).error(new c("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,h.data)),o.reject(),this.destroy()),i.format!=="json"&&(a.getLogger(this).error(new c("websocket-connection","Protocol violation. Handshake failed - format is not set",h.data)),o.reject(),this.destroy()),n&&i.filter!==n&&a.getLogger(this).error(new c("websocket-connection","Tried to set filter, but server doesn't support it")),u&&i.outFields!==u&&a.getLogger(this).error(new c("websocket-connection","Tried to set outFields, but server doesn't support it")),r.onmessage=s;for(const p of this._outstandingMessages)r.send(JSON.stringify(p));this._outstandingMessages=[],o.resolve()},r.send(JSON.stringify({filter:n,outFields:u,format:"json",spatialReference:{wkid:l.wkid}})),o.promise}_onMessage(t){if(this.onMessage(t),"type"in t)switch(t.type){case"features":case"featureResult":for(const r of t.features)this._featureZScaler!=null&&this._featureZScaler(r.geometry),this.onFeature(r)}}_onError(t){const r="Encountered an error over WebSocket connection";this._set("errorString",r),a.getLogger(this).error("websocket-connection",r)}_onClose(t){this._websocket=null,this.notifyChange("connectionStatus"),t.code!==1e3&&a.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${t.code}`),this.destroyed||this._open()}};d([y()],f.prototype,"connectionStatus",null),d([y()],f.prototype,"errorString",void 0),f=d([w("esri.layers.graphics.sources.connections.WebSocketConnection")],f);const q=1e4,M={maxQueryDepth:5,maxRecordCountFactor:3};let S=class extends f{constructor(e){super({...M,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||a.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),this._featureZScaler!=null&&this._featureZScaler(t.geometry)}catch(r){return void a.getLogger(this).error(new c("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=x(e.path,{query:t,responseType:"json"}),o=(await r).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:o,token:s}=r,n=this._inferWebSocketBaseUrl(o);return k(`${n}/subscribe`,{outSR:""+t.wkid,token:s})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return a.getLogger(this).error(new c("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(r==null||e==null&&t==null)return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let s=!1;const n=v(),u=()=>{s||(this.destroyed||this._websocket!==r||a.getLogger(this).error(new c("geoevent-connection","Server timed out when setting filter")),n.reject())},l=h=>{const i=JSON.parse(h.data);i.filter&&(i.error&&(a.getLogger(this).error(new c("geoevent-connection","Failed to set service filter",i.error)),this._set("errorString",`Could not set service filter - ${i.error}`),n.reject(i.error)),this._setWebSocketJSONParseHandler(r),s=!0,n.resolve())};return r.onmessage=l,r.send(o),setTimeout(u,q),n.promise}_serializeFilter(e,t){const r={};if(e==null&&t==null)return r;if(e?.geometry)try{const o=E(e.geometry);if(o.type!=="extent")throw new c(`Expected extent but found type ${o.type}`);r.geometry=JSON.stringify(o.shiftCentralMeridian())}catch(o){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when setting connection geometryDefinition",o))}return e?.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),t!=null&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],o=this._relatedFeatures.get(r);if(!o)return a.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:s,geometry:n}=o;for(const u in s)e.attributes[u]=s[u];return n&&(e.geometry=n),e.geometry||e.centroid||a.getLogger(this).error(new c("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),o=this._queryArchive(t);await r;const s=await o;if(!s)return;for(const n of s.features)this.onFeature(this._enrich(n))}catch(e){a.getLogger(this).error(new c("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await L(async()=>{const{default:R}=await import("./FeatureLayer-ZNGUyl_G.js");return{default:R}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84]),import.meta.url)).default({url:e}),{capabilities:r}=await t.load(),o=r.query.supportsMaxRecordCountFactor,s=r.query.supportsPagination,n=r.query.supportsCentroid,u=this._config.maxRecordCountFactor,l=t.capabilities.query.maxRecordCount,h=o?l*u:l,i=new $;if(i.outFields=this._config.outFields??["*"],i.where=this._config.filter?.where??"1=1",i.returnGeometry=!0,i.returnExceededLimitFeatures=!0,i.outSpatialReference=P.fromJSON(this._config.spatialReference),n&&(i.returnCentroid=!0),o&&(i.maxRecordCountFactor=u),s)return i.num=h,t.destroy(),this._queryPages(e,i);const p=await b(e,i,this._config.sourceSpatialReference);return t.destroy(),p.data}async _queryPages(e,t,r=[],o=0){t.start=t.num!=null?o*t.num:null;const{data:s}=await b(e,t,this._config.sourceSpatialReference);return s.exceededTransferLimit&&o<(this._config.maxQueryDepth??0)?(s.features.forEach(n=>r.push(n)),this._queryPages(e,t,r,o+1)):(r.forEach(n=>s.features.push(n)),s)}_addRelatedFeatures(e){const t=new Map,r=e.features,o=this._serviceDefinition.relatedFeatures.joinField;for(const s of r){const n=s.attributes[o];t.set(n,s)}this._relatedFeatures=t}};S=d([w("esri.layers.graphics.sources.connections.GeoEventConnection")],S);const W=S;let _=class extends C{constructor(e){super({}),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:o}=e;this._featureZScaler=F(t,o,r)}normalizeCtorArgs(){return{}}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)this._featureZScaler!=null&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};d([y()],_.prototype,"connectionStatus",void 0),d([y()],_.prototype,"errorString",void 0),_=d([w("esri.layers.support.ClientSideConnection")],_);function T(e,t){if(e==null&&t==null)return null;const r={};return t!=null&&(r.geometry=t),e!=null&&(r.where=e),r}function oe(e,t,r,o,s,n,u,l,h){const i={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:o,filter:T(s,n),maxReconnectionAttempts:u,maxReconnectionInterval:l,customParameters:h};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new f(i):new W(i):new _(i)}export{oe as createConnection};
