import{fi as f,bm as u,f as v,k as l,A as g,bf as c,fj as J,fk as N,bl as h,dt as w,aD as y,fl as A,fm as k}from"./main-IAmJgjpH.js";class d{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(f),this._values=new Map,this.multipleOriginsSupported=!0}clone(r){const t=new d,s=this._originStores[u.DEFAULTS];s&&s.forEach((i,e)=>{t.set(e,v(i),u.DEFAULTS)});for(let i=u.SERVICE;i<f;i++){const e=this._originStores[i];e&&e.forEach((o,n)=>{r&&r.has(n)||t.set(n,v(o),i)})}return t}get(r,t){const s=t===void 0?this._values:this._originStores[t];return s?s.get(r):void 0}keys(r){const t=r==null?this._values:this._originStores[r];return t?[...t.keys()]:[]}set(r,t,s=u.USER){let i=this._originStores[s];if(i||(i=new Map,this._originStores[s]=i),i.set(r,t),!this._values.has(r)||this._propertyOriginMap.get(r)<=s){const e=this._values.get(r);return this._values.set(r,t),this._propertyOriginMap.set(r,s),e!==t}return!1}delete(r,t=u.USER){const s=this._originStores[t];if(!s)return;const i=s.get(r);if(s.delete(r),this._values.has(r)&&this._propertyOriginMap.get(r)===t){this._values.delete(r);for(let e=t-1;e>=0;e--){const o=this._originStores[e];if(o&&o.has(r)){this._values.set(r,o.get(r)),this._propertyOriginMap.set(r,e);break}}}return i}has(r,t){const s=t===void 0?this._values:this._originStores[t];return!!s&&s.has(r)}revert(r,t){for(;t>0&&!this.has(r,t);)--t;const s=this._originStores[t],i=s?.get(r),e=this._values.get(r);return this._values.set(r,i),this._propertyOriginMap.set(r,t),e!==i}originOf(r){return this._propertyOriginMap.get(r)||u.DEFAULTS}forEach(r){this._values.forEach(r)}}const M=a=>{let r=class extends a{constructor(...t){super(...t);const s=c(this),i=s.store,e=new d;s.store=e,J(s,i,e)}read(t,s){N(this,t,s)}getAtOrigin(t,s){const i=O(this),e=h(s);if(typeof t=="string")return i.get(t,e);const o={};return t.forEach(n=>{o[n]=i.get(n,e)}),o}originOf(t){return w(this.originIdOf(t))}originIdOf(t){return O(this).originOf(t)}revert(t,s){const i=O(this),e=h(s),o=c(this);let n;n=typeof t=="string"?t==="*"?i.keys(e):[t]:t,n.forEach(p=>{o.invalidate(p),i.revert(p,e),o.commit(p)})}};return r=l([g("esri.core.ReadOnlyMultiOriginJSONSupport")],r),r};function O(a){return c(a).store}let E=class extends M(y){};E=l([g("esri.core.ReadOnlyMultiOriginJSONSupport")],E);const x=a=>{let r=class extends a{constructor(...t){super(...t)}clear(t,s="user"){return S(this).delete(t,h(s))}write(t,s){return A(this,t=t||{},s),t}setAtOrigin(t,s,i){c(this).setAtOrigin(t,s,h(i))}removeOrigin(t){const s=S(this),i=h(t),e=s.keys(i);for(const o of e)s.originOf(o)===i&&s.set(o,s.get(o,i),u.USER)}updateOrigin(t,s){const i=S(this),e=h(s),o=k(this,t);for(let n=e+1;n<f;++n)i.delete(t,n);i.set(t,o,e)}toJSON(t){return this.write({},t)}};return r=l([g("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],r),r.prototype.toJSON.isDefaultToJSON=!0,r};function S(a){return c(a).store}const m=a=>{let r=class extends x(M(a)){constructor(...t){super(...t)}};return r=l([g("esri.core.MultiOriginJSONSupport")],r),r};let _=class extends m(y){};_=l([g("esri.core.MultiOriginJSONSupport")],_);export{m as S,_ as m};
