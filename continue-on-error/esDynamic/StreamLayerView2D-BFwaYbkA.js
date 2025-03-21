import{k as r,o as i,A as u,aE as c,s as l,eN as p,aH as m}from"./main-IAmJgjpH.js";import{d}from"./FeatureSet-DirOjqu-.js";import{n as y,r as _}from"./FeatureLayerView2D-uAMj6MUX.js";import g from"./FeatureFilter-DZsDd0dB.js";const f=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume()}};return r([i()],t.prototype,"_isUserPaused",void 0),r([i({readOnly:!0})],t.prototype,"connectionStatus",null),r([i({type:g})],t.prototype,"filter",void 0),t=r([u("esri.views.layers.StreamLayerView")],t),t};let a=class extends f(_){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([c(()=>this.layer.customParameters,async e=>{(await this.getWorker()).streamMessenger.updateCustomParameters(e)}),this.layer.on("send-message-to-socket",async e=>{(await this.getWorker()).streamMessenger.sendMessageToSocket(e)}),this.layer.on("send-message-to-client",async e=>{(await this.getWorker()).streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&e.type==="clear"&&this.incrementSourceRefreshVersion()}),c(()=>this.layer.purgeOptions,()=>this._update()),c(()=>this.suspended,this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new l("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return p(e.map(n=>this.on(n,t)));const s=["data-received","message-received"].includes(e);s&&this.getWorker().then(n=>n.streamMessenger.enableEvent(e,!0));const h=super.on(e,t),o=this;return m(()=>{h.remove(),s&&(o._workerProxy.closed||o.hasEventListener(e)||o.getWorker().then(n=>n.streamMessenger.enableEvent(e,!1)))})}async queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new l("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");const s=await this.getWorker();return y(s.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then(h=>{const o=d.fromJSON(h);return o.features.forEach(n=>{n.layer=this.layer,n.sourceLayer=this.layer}),o}),new d({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._refreshInterval!=null&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval(()=>this.incrementSourceRefreshVersion(),this.layer.updateInterval)}_doDisconnect(){this.getWorker().then(e=>e.streamMessenger.disconnect()),this._doPause()}_doConnect(){this.getWorker().then(e=>e.streamMessenger.connect()),this.resume()}_doClear(){this.getWorker().then(e=>e.streamMessenger.clear()),this._refreshInterval==null&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:s=>{this.set(s.propertyName,s.value)}}}};r([i()],a.prototype,"pipelineConnectionStatus",void 0),r([i()],a.prototype,"pipelineErrorString",void 0),r([i({readOnly:!0})],a.prototype,"connectionError",null),r([i({readOnly:!0})],a.prototype,"_streamConnectionStatus",null),a=r([u("esri.views.2d.layers.StreamLayerView2D")],a);const v=a;export{v as default};
