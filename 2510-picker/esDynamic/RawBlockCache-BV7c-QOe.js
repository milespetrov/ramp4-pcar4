import{bv as E}from"./main-BqyZdgF9.js";import{K as L,C as q,l as F}from"./rasterProjectionHelper-AWwZ-JK-.js";class G{constructor(n=15e3,t=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,t)}decreaseRefCount(n,t){const e=n+"/"+t,r=this._cachedBlocks;if(r.has(e)){const l=r.get(e);return l.refCount--,l.refCount<=0&&(r.delete(e),l.controller&&l.controller.abort()),l.refCount}return 0}getBlock(n,t){const e=n+"/"+t,r=this._cachedBlocks;if(r.has(e)){const l=r.get(e);return l.ts=Date.now(),l.refCount++,r.delete(e),r.set(e,l),l.block}return null}putBlock(n,t,e,r){const l=this._cachedBlocks,s=n+"/"+t;if(l.has(s)){const c=l.get(s);c.ts=Date.now(),c.refCount++}else l.set(s,{block:e,ts:Date.now(),refCount:1,controller:r});this._trim(),this._updateTimer()}deleteBlock(n,t){const e=this._cachedBlocks,r=n+"/"+t;e.has(r)&&e.delete(r)}updateMaxSize(n){this._size=n,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const t=Array.from(n),e=Date.now();for(let r=0;r<t.length&&t[r][1].ts<=e-this._duration;r++)n.delete(t[r][0]);n.size===0&&this._clearTimer()},this._interval)}_trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const t=Array.from(n);for(let e=0;e<t.length-this._size;e++)n.delete(t[e][0])}_clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const u=new Map,h=new G;function K(o,n){return n==null?o:`${o}?sliceId=${n}`}function O(o,n){const t={extent:null,rasterInfo:n,cache:new Map},e=u.get(o);return e?(e.push(t),e.length-1):(u.set(o,[t]),0)}function P(o,n){const t=u.get(o);t&&(t[n]=null,t.some(e=>e!=null)||u.delete(o))}function Q(o,n,t){const e=u.get(o);if(!e)return n==null?h.decreaseRefCount(o,t):0;if(n==null||e[n]==null)return h.decreaseRefCount(o,t);const r=e[n]?.cache,l=r?.get(t);if(r&&l){if(l.refCount--,l.refCount===0){r.delete(t);for(let s=0;s<e.length;s++)e[s]?.cache.delete(t);l.controller&&l.controller.abort()}return l.refCount}return 0}function U(o,n,t){const e=u.get(o);if(!e)return n==null?h.getBlock(o,t):null;if(n==null||e[n]==null){for(let l=0;l<e.length;l++){const s=e[l]?.cache.get(t);if(s)return s.refCount++,s.block}return h.getBlock(o,t)}const r=e[n]?.cache.get(t);if(r)return r.refCount++,r.block;for(let l=0;l<e.length;l++){if(l===n||!e[l])continue;const s=e[l]?.cache,c=s?.get(t);if(s&&c)return c.refCount++,s.set(t,c),c.block}return null}function V(o,n,t,e,r=null){const l=u.get(o);if(!l)return void(n==null&&h.putBlock(o,t,e,r));if(n==null||l[n]==null)return void h.putBlock(o,t,e,r);const s={refCount:1,block:e,isResolved:!1,isRejected:!1,controller:r};e.then(()=>s.isResolved=!0).catch(()=>s.isRejected=!0),l[n]?.cache.set(t,s)}function X(o,n,t){const e=u.get(o);e?n!=null&&e[n]!=null?e[n]?.cache.delete(t):h.deleteBlock(o,t):n==null&&h.deleteBlock(o,t)}function Y(o,n){const t=u.get(o);return t?t[n]??null:null}function Z(o,n,t,e,r,l,s=null){const c=Y(o,n);if(!c)return;const f=c.extent,{cache:k,rasterInfo:y}=c;if(f&&f.xmin===t.xmin&&f.xmax===t.xmax&&f.ymin===t.ymin&&f.ymax===t.ymax)return;e=e??0;const M=t.clone().normalize(),{spatialReference:R,transform:v}=y,b=new Set;for(let d=0;d<M.length;d++){const a=M[d];if(a.xmax-a.xmin<=e||a.ymax-a.ymin<=e)continue;let i=L(a,R,s);v!=null&&(i=v.inverseTransform(i));const T=new E({x:e,y:e,spatialReference:a.spatialReference});if(r==null&&!(r=q(T,R,a,s)))return;const{pyramidLevel:p,pyramidResolution:x,excessiveReading:$}=F(r,y,l||"closest");if($)return;const{storageInfo:m}=y,{origin:z}=m,g={x:Math.max(0,Math.floor((i.xmin-z.x)/x.x)),y:Math.max(0,Math.floor((z.y-i.ymax)/x.y))},D=Math.ceil((i.xmax-i.xmin)/x.x-.1),j=Math.ceil((i.ymax-i.ymin)/x.y-.1),w=p>0?m.pyramidBlockWidth:m.blockWidth,I=p>0?m.pyramidBlockHeight:m.blockHeight,_=1,S=Math.max(0,Math.floor(g.x/w)-_),A=Math.max(0,Math.floor(g.y/I)-_),H=Math.floor((g.x+D-1)/w)+_,W=Math.floor((g.y+j-1)/I)+_;for(let B=A;B<=W;B++)for(let C=S;C<=H;C++)b.add(`${p}/${B}/${C}`)}k.forEach((d,a)=>{if(!b.has(a)){const i=k.get(a);(i==null||i.isResolved||i.isRejected)&&k.delete(a)}}),c.extent={xmin:t.xmin,ymin:t.ymin,xmax:t.xmax,ymax:t.ymax}}export{P as a,Z as g,X as h,K as i,U as m,Q as s,O as u,V as x};
