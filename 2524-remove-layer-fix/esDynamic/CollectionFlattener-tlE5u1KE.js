import{k as l,o as r,A as a,V as c,ay as u,az as d}from"./main-DJHcSGyV.js";let e=class extends c{constructor(t){super(t),this.getCollections=null}initialize(){this.addHandles(u(()=>this._refresh(),d))}destroy(){this.getCollections=null}_refresh(){const t=this.getCollections!=null?this.getCollections():null;if(t==null)return void this.removeAll();let i=0;for(const n of t)n!=null&&(i=this._processCollection(i,n));this.splice(i,this.length)}_createNewInstance(t){return new c(t)}_processCollection(t,i){if(!i)return t;const n=this.itemFilterFunction??(o=>!!o);for(const o of i)if(o){if(n(o)){const s=this.indexOf(o,t);s>=0?s!==t&&this.reorder(o,t):this.add(o,t),++t}if(this.getChildrenFunction){const s=this.getChildrenFunction(o);if(Array.isArray(s))for(const h of s)t=this._processCollection(t,h);else t=this._processCollection(t,s)}}return t}};l([r()],e.prototype,"getCollections",void 0),l([r()],e.prototype,"getChildrenFunction",void 0),l([r()],e.prototype,"itemFilterFunction",void 0),e=l([a("esri.core.CollectionFlattener")],e);const f=e;export{f as n};
