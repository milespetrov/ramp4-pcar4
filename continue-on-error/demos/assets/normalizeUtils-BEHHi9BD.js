import{bp as T,aY as C,U as X,b5 as V,I as W,K as Y,bI as A,aV as z,cL as S,bF as U,n as _,a2 as B,s as E}from"./main-CT4A7-UF.js";import{r as P,o as q,i as $,s as D}from"./normalizeUtilsCommon-CS52MZDG.js";import{f as G}from"./utils-UnPaZJGi.js";import{r as H,o as Q}from"./utils-CeCQ-d9-.js";async function Z(e,n,l,s){const t=G(e),i=n[0].spatialReference,r={...s,responseType:"json",query:{...t.query,f:"json",sr:T(i),target:JSON.stringify({geometryType:C(n[0]),geometries:n}),cutter:JSON.stringify(l)}},o=await X(t.path+"/cut",r),{cutIndexes:c,geometries:f=[]}=o.data;return{cutIndexes:c,geometries:f.map(u=>{const m=V(u);return m.spatialReference=i,m})}}async function ee(e,n,l){const s=typeof e=="string"?W(e):e,t=n[0].spatialReference,i=C(n[0]),r={...l,query:{...s.query,f:"json",sr:T(t),geometries:JSON.stringify(H(n))}},{data:o}=await X(s.path+"/simplify",r);return Q(o.geometries,i,t)}const K=()=>_.getLogger("esri.geometry.support.normalizeUtils");function te(e){return e.type==="polygon"}function ne(e){return e[0].type==="polygon"}function se(e){return e[0].type==="polyline"}function k(e){const n=[];let l=0,s=0;for(let t=0;t<e.length;t++){const i=e[t];let r=null;for(let o=0;o<i.length;o++)r=i[o],n.push(r),o===0?(l=r[0],s=l):(l=Math.min(l,r[0]),s=Math.max(s,r[0]));r&&n.push([(l+s)/2,0])}return n}function oe(e,n){if(!(e instanceof z||e instanceof U)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw K().error(t),new E(t)}const l=q(e),s=[];for(const t of l){const i=[];s.push(i),i.push([t[0][0],t[0][1]]);for(let r=0;r<t.length-1;r++){const o=t[r][0],c=t[r][1],f=t[r+1][0],u=t[r+1][1],m=Math.sqrt((f-o)*(f-o)+(u-c)*(u-c)),p=(u-c)/m,d=(f-o)/m,g=m/n;if(g>1){for(let R=1;R<=g-1;R++){const v=R*n,a=d*v+o,h=p*v+c;i.push([a,h])}const b=(m+Math.floor(g-1)*n)/2,L=d*b+o,F=p*b+c;i.push([L,F])}i.push([f,u])}}return te(e)?new U({rings:s,spatialReference:e.spatialReference}):new z({paths:s,spatialReference:e.spatialReference})}function J(e,n,l){if(n){const s=oe(e,1e6);e=B(s,!0)}return l&&(e=D(e,l)),e}function O(e,n,l){if(Array.isArray(e)){const s=e[0];if(s>n){const t=$(s,n);e[0]=s+t*(-2*n)}else if(s<l){const t=$(s,l);e[0]=s+t*(-2*l)}}else{const s=e.x;if(s>n){const t=$(s,n);e=e.clone().offset(t*(-2*n),0)}else if(s<l){const t=$(s,l);e=e.clone().offset(t*(-2*l),0)}}return e}function re(e,n){let l=-1;for(let s=0;s<n.cutIndexes.length;s++){const t=n.cutIndexes[s],i=n.geometries[s],r=q(i);for(let o=0;o<r.length;o++){const c=r[o];c.some(f=>{if(f[0]<180)return!0;{let u=0;for(let p=0;p<c.length;p++){const d=c[p][0];u=d>u?d:u}u=Number(u.toFixed(9));const m=-360*$(u,180);for(let p=0;p<c.length;p++){const d=i.getPoint(o,p);i.setPoint(o,p,d.clone().offset(m,0))}return!0}})}if(t===l){if(ne(e))for(const o of q(i))e[t]=e[t].addRing(o);else if(se(e))for(const o of q(i))e[t]=e[t].addPath(o)}else l=t,e[t]=i}return e}async function ie(e,n,l){if(!Array.isArray(e))return ie([e],n);n&&typeof n!="string"&&K().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const s=typeof n=="string"?n:n?.url??Y.geometryServiceUrl;let t,i,r,o,c,f,u,m,p=0;const d=[],g=[];for(const a of e)if(a!=null)if(t||(t=a.spatialReference,i=A(t),r=t.isWebMercator,f=r?102100:4326,o=P[f].maxX,c=P[f].minX,u=P[f].plus180Line,m=P[f].minus180Line),i)if(a.type==="mesh")g.push(a);else if(a.type==="point")g.push(O(a.clone(),o,c));else if(a.type==="multipoint"){const h=a.clone();h.points=h.points.map(x=>O(x,o,c)),g.push(h)}else if(a.type==="extent"){const h=a.clone()._normalize(!1,!1,i);g.push(h.rings?new U(h):h)}else if(a.extent){const h=a.extent,x=$(h.xmin,c)*(2*o);let M=x===0?a.clone():D(a.clone(),x);h.offset(x,0);let{xmin:w,xmax:y}=h;w=Number(w.toFixed(9)),y=Number(y.toFixed(9)),h.intersects(u)&&y!==o?(p=y>p?y:p,M=J(M,r),d.push(M),g.push("cut")):h.intersects(m)&&w!==c?(p=y*(2*o)>p?y*(2*o):p,M=J(M,r,360),d.push(M),g.push("cut")):g.push(M)}else g.push(a.clone());else g.push(a);else g.push(a);let b=$(p,o),L=-90;const F=b,R=new z;for(;b>0;){const a=360*b-180;R.addPath([[a,L],[a,-1*L]]),L*=-1,b--}if(d.length>0&&F>0){const a=re(d,await Z(s,d,R,l)),h=[],x=[];for(let y=0;y<g.length;y++){const N=g[y];if(N!=="cut")x.push(N);else{const I=a.shift(),j=e[y];j!=null&&j.type==="polygon"&&j.rings&&j.rings.length>1&&I.rings.length>=j.rings.length?(h.push(I),x.push("simplify")):x.push(r?S(I):I)}}if(!h.length)return x;const M=await ee(s,h,l),w=[];for(let y=0;y<x.length;y++){const N=x[y];N!=="simplify"?w.push(N):w.push(r?S(M.shift()):M.shift())}return w}const v=[];for(let a=0;a<g.length;a++){const h=g[a];if(h!=="cut")v.push(h);else{const x=d.shift();v.push(r===!0?S(x):x)}}return v}function ue(e){if(!e)return null;const n=e.extent;if(!n)return null;const l=e.spatialReference&&A(e.spatialReference);if(!l)return n;const[s,t]=l.valid,i=2*t,{width:r}=n;let o,{xmin:c,xmax:f}=n;if([c,f]=[f,c],e.type==="extent"||r===0||r<=t||r>i||c<s||f>t)return n;switch(e.type){case"polygon":if(!(e.rings.length>1))return n;o=k(e.rings);break;case"polyline":if(!(e.paths.length>1))return n;o=k(e.paths);break;case"multipoint":o=e.points}const u=n.clone();for(let m=0;m<o.length;m++){let p=o[m][0];p<0?(p+=t,f=Math.max(p,f)):(p-=t,c=Math.min(p,c))}return u.xmin=c,u.xmax=f,u.width<r?(u.xmin-=t,u.xmax-=t,u):n}function pe(e,n,l){const s=A(l);if(s==null)return e;const[t,i]=s.valid,r=2*i;let o=0,c=0;n>i?o=Math.ceil(Math.abs(n-i)/r):n<t&&(o=-Math.ceil(Math.abs(n-t)/r)),e>i?c=Math.ceil(Math.abs(e-i)/r):e<t&&(c=-Math.ceil(Math.abs(e-t)/r));let f=e+(o-c)*r;const u=f-n;return u>i?f-=r:u<t&&(f+=r),f}function he(e,n){const l=A(n);if(l){const[s,t]=l.valid,i=t-s;if(e<s)for(;e<s;)e+=i;if(e>t)for(;e>t;)e-=i}return e}export{he as L,oe as M,pe as P,ie as R,ue as v};
