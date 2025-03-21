import{aJ as l,aK as d,aL as g,aM as m,aN as u,aI as f,aO as I}from"./main-CDHpIWDK.js";import{s as q}from"./workers-UGDaMSG5.js";import{s as n}from"./ReactiveMap-Ddzolsyy.js";import{r as v}from"./signal-lS58FATo.js";class x{constructor(e,s){this.item=e,this.controller=s,this.promise=null}}class k{constructor(e){this._schedule=null,this._task=null,this._deferreds=new n,this._controllers=new n,this._processingItems=new n,this._pausedSignal=v(!1),this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new q(e.peeker),this.process=e.process;const s=e.scheduler;e.priority&&s&&(this._task=s.registerTask(e.priority,this))}destroy(){this.clear(),this._schedule=l(this._schedule),this._task=l(this._task)}get updating(){return!!this._task?.updating||this.running}get length(){return this._processingItems.size+this._queue.length}abort(e){const s=this._controllers.get(e);s&&s.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach(s=>e.push(s)),this._controllers.clear(),e.forEach(s=>s.abort()),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach((s,i)=>e(i))}get(e){const s=this._deferreds.get(e);return s?s.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(e,s){const i=this.get(e);if(i)return i;const t=new AbortController;let r=null;s&&(r=d(s,()=>t.abort()));const a=()=>{const c=this._processingItems.get(e);c&&c.controller.abort(),o(),h.reject(u())},o=()=>{p.remove(),r?.remove(),this._removeItem(e),this._queue.remove(e),this._scheduleNext()},p=g(t.signal,a),h=m();return this._deferreds.set(e,h),this._controllers.set(e,t),h.promise.then(o,o),this._queue.push(e),this._scheduleNext(),h.promise}last(){return this._queue.last()}lastPromise(){const e=this.last();return e?this.get(e):null}peek(){return this._queue.peek()}popLast(){const e=this._queue.popLast();return e&&(this._deferreds.get(e)?.reject(u()),this._removeItem(e)),e}reset(){const e=Array.from(this._processingItems.values());this._processingItems.clear();for(const s of e)this._queue.push(s.item),s.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}get running(){return!this._pausedSignal.value&&this._queue.length>0&&this._processingItems.size<this.concurrency}runTask(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress()}_removeItem(e){this._deferreds.delete(e),this._controllers.delete(e),this._processingItems.delete(e)}_scheduleNext(){this._task||this._pausedSignal.value||this._schedule||(this._schedule=f(()=>{this._schedule=null,this._next()}))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(s))}_processError(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(s))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(e==null)return;let s;const i=new AbortController,t=new x(e,i);this._processingItems.set(e,t);try{s=this.process(e,i.signal)}catch(r){this._processError(t,r)}I(s)?(t.promise=s,s.then(r=>this._processResult(t,r),r=>this._processError(t,r))):this._processResult(t,s)}get test(){}}export{k as _};
