import{bS as J,bF as N,aq as X,cL as q,a8 as F,ab as R,cJ as j,a9 as z,aa as S,cM as B,cN as D}from"./main-sNoC4iWN.js";import{r as T,s as E,i as p}from"./normalizeUtilsCommon-Bl2AodbU.js";function G(i){return L(i,!0)}function H(i){return L(i,!1)}function L(i,t){if(i==null)return null;const s=i.spatialReference,n=N(s),e=X(i)?i.toJSON():i;if(!n)return e;const h=q(s)?102100:4326,u=T[h].maxX,_=T[h].minX;if(F(e))return w(e,u,_);if(R(e))return e.points=e.points.map(o=>w(o,u,_)),e;if(j(e))return K(e,n);if(z(e)||S(e)){const o=B(W,e),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,_)*(2*u),m=x===0?e:E(e,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?M(m,u,t):r.xmin<_?M(m,_,t):m}return e}function K(i,t){if(!t)return i;const s=V(i,t).map(n=>n.extent);return s.length<2?s[0]||i:s.length>2?(i.xmin=t.valid[0],i.xmax=t.valid[1],i):{rings:s.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function w(i,t,s){if(Array.isArray(i)){const n=i[0];if(n>t){const e=p(n,t);i[0]=n+e*(-2*t)}else if(n<s){const e=p(n,s);i[0]=n+e*(-2*s)}}else{const n=i.x;if(n>t){const e=p(n,t);i.x+=e*(-2*t)}else if(n<s){const e=p(n,s);i.x+=e*(-2*s)}}return i}function V(i,t){const s=[],{ymin:n,ymax:e,xmin:h,xmax:u}=i,_=i.xmax-i.xmin,[o,r]=t.valid,{x,frameId:m}=b(i.xmin,t),{x:l,frameId:c}=b(i.xmax,t),A=x===l&&_>0;if(_>2*r){const g={xmin:h<u?x:l,ymin:n,xmax:r,ymax:e},O={xmin:o,ymin:n,xmax:h<u?l:x,ymax:e},C={xmin:0,ymin:n,xmax:r,ymax:e},P={xmin:o,ymin:n,xmax:0,ymax:e},f=[],y=[];I(g,C)&&f.push(m),I(g,P)&&y.push(m),I(O,C)&&f.push(c),I(O,P)&&y.push(c);for(let d=m+1;d<c;d++)f.push(d),y.push(d);s.push(new a(g,[m]),new a(O,[c]),new a(C,f),new a(P,y))}else x>l||A?s.push(new a({xmin:x,ymin:n,xmax:r,ymax:e},[m]),new a({xmin:o,ymin:n,xmax:l,ymax:e},[c])):s.push(new a({xmin:x,ymin:n,xmax:l,ymax:e},[m]));return s}function b(i,t){const[s,n]=t.valid,e=2*n;let h,u=0;return i>n?(h=Math.ceil(Math.abs(i-n)/e),i-=h*e,u=h):i<s&&(h=Math.ceil(Math.abs(i-s)/e),i+=h*e,u=-h),{x:i,frameId:u}}function I(i,t){const{xmin:s,ymin:n,xmax:e,ymax:h}=t;return v(i,s,n)&&v(i,s,h)&&v(i,e,h)&&v(i,e,n)}function v(i,t,s){return t>=i.xmin&&t<=i.xmax&&s>=i.ymin&&s<=i.ymax}function M(i,t,s=!0){const n=!S(i);if(n&&D(i),s)return new $().cut(i,t);const e=n?i.rings:i.paths,h=n?4:2,u=e.length,_=-2*t;for(let o=0;o<u;o++){const r=e[o];if(r&&r.length>=h){const x=[];for(const m of r)x.push([m[0]+_,m[1]]);e.push(x)}}return n?i.rings=e:i.paths=e,i}class a{constructor(t,s){this.extent=t,this.frameIds=s}}const W=J();class ${constructor(){this._linesIn=[],this._linesOut=[]}cut(t,s){let n;if(this._xCut=s,t.rings)this._closed=!0,n=t.rings,this._minPts=4;else{if(!t.paths)return null;this._closed=!1,n=t.paths,this._minPts=2}for(const h of n){if(!h||h.length<this._minPts)continue;let u=!0;for(const _ of h)u?(this.moveTo(_),u=!1):this.lineTo(_);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&n.push(h);const e=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=e;n.push(h)}return this._closed?t.rings=n:t.paths=n,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t}lineTo(t){const s=this._side(t[0]);if(s*this._prevSide==-1){const n=this._intersect(this._prevPt,t);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(t[0],t[1],s)}else this._lineTo(t[0],t[1],s);this._prevSide=s,this._prevPt=t}close(){const t=this._firstPt,s=this._prevPt;t[0]===s[0]&&t[1]===s[1]||this.lineTo(t),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(t,s,n){this._closed?(this._lineIn.push([n<=0?t:this._xCut,s]),this._lineOut.push([n>=0?t:this._xCut,s])):(n<=0&&this._lineIn.push([t,s]),n>=0&&this._lineOut.push([t,s]))}_lineTo(t,s,n){this._closed?(k(this._lineIn,n<=0?t:this._xCut,s),k(this._lineOut,n>=0?t:this._xCut,s)):n<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([t,s])):n>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([t,s])):this._prevSide<0?(this._lineIn.push([t,s]),this._lineOut.push([t,s])):this._prevSide>0&&(this._lineOut.push([t,s]),this._lineIn.push([t,s]))}_checkClosingPt(t){const s=t.length;s>3&&t[0][0]===this._xCut&&t[s-2][0]===this._xCut&&t[1][0]===this._xCut&&(t[0][1]=t[s-2][1],t.pop())}_side(t){return t<this._xCut?-1:t>this._xCut?1:0}_intersect(t,s){const n=(this._xCut-t[0])/(s[0]-t[0]);return t[1]+n*(s[1]-t[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function k(i,t,s){const n=i.length;n>1&&i[n-1][0]===t&&i[n-2][0]===t?i[n-1][1]=s:i.push([t,s])}export{H as a,G as p};
