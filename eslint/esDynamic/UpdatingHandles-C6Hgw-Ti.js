import{k as r,o as _,A as p,aD as u,aE as o,aF as g,aG as c,az as m,aH as l,aI as H}from"./main-BPeHLg3l.js";let i=class extends u{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll()}add(s,e,t={}){return this._installWatch(s,e,t,o)}addWhen(s,e,t={}){return this._installWatch(s,e,t,g)}addOnCollectionChange(s,e,{initial:t=!1,final:a=!1}={}){const n=++this._handleId;return this.addHandles([c(s,"after-changes",this._createSyncUpdatingCallback(),m),c(s,"change",e,{onListenerAdd:t?d=>e({added:d.toArray(),removed:[]}):void 0,onListenerRemove:a?d=>e({added:[],removed:d.toArray()}):void 0})],n),l(()=>this.removeHandles(n))}addPromise(s){if(s==null)return s;const e=++this._handleId;this.addHandles(l(()=>{this._pendingPromises.delete(s)&&(this._pendingPromises.size!==0||this.hasHandles(h)||this._set("updating",!1))}),e),this._pendingPromises.add(s),this._set("updating",!0);const t=()=>this.removeHandles(e);return s.then(t,t),s}removeAll(){this._pendingPromises.clear(),this.removeAllHandles(),this._set("updating",!1)}_installWatch(s,e,t={},a){const n=++this._handleId;t.sync||this._installSyncUpdatingWatch(s,n);const d=a(s,e,t);return this.addHandles(d,n),l(()=>this.removeHandles(n))}_installSyncUpdatingWatch(s,e){const t=this._createSyncUpdatingCallback(),a=o(s,t,{sync:!0,equals:()=>!1});return this.addHandles(a,e),a}_createSyncUpdatingCallback(){return()=>{this.removeHandles(h),++this._scheduleHandleId;const s=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this.addHandles(H(()=>{s===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this.removeHandles(h))}),h)}}};r([_({readOnly:!0})],i.prototype,"updating",void 0),i=r([p("esri.core.support.UpdatingHandles")],i);const h=-42;export{i as h};
