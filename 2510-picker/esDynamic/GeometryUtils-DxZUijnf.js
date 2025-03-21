import{eJ as S}from"./main-BqyZdgF9.js";const z=512;var d,p;(function(s){s[s.Unknown=0]="Unknown",s[s.Point=1]="Point",s[s.LineString=2]="LineString",s[s.Polygon=3]="Polygon"})(d||(d={}));let g=class L{constructor(t,i){this.x=t,this.y=i}clone(){return new L(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){return this.x=t,this.y=i,this}normalize(){const t=this.x,i=this.y,h=Math.sqrt(t*t+i*i);return this.x/=h,this.y/=h,this}rightPerpendicular(){const t=this.x;return this.x=this.y,this.y=-t,this}leftPerpendicular(){const t=this.x;return this.x=-this.y,this.y=t,this}move(t,i){return this.x+=t,this.y+=i,this}assign(t){return this.x=t.x,this.y=t.y,this}assignAdd(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}assignSub(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}rotate(t,i){const h=this.x,e=this.y;return this.x=h*t-e*i,this.y=h*i+e*t,this}scale(t){return this.x*=t,this.y*=t,this}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}sub(t){return this.x-=t.x,this.y-=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}static distance(t,i){const h=i.x-t.x,e=i.y-t.y;return Math.sqrt(h*h+e*e)}static add(t,i){return new L(t.x+i.x,t.y+i.y)}static sub(t,i){return new L(t.x-i.x,t.y-i.y)}};class v{constructor(t,i,h){this.ratio=t,this.x=i,this.y=h}}let D=class{constructor(s,t,i,h=8,e=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=h,this._pixelMargin=e,this._tileSize=z*h,this._dz=s,this._yPos=t,this._xPos=i}setPixelMargin(s){s!==this._pixelMargin&&(this._pixelMargin=s,this.setExtent(this._extent))}setExtent(s){this._extent=s,this._finalRatio=this._tileSize/s*(1<<this._dz);let t=this._pixelRatio*this._pixelMargin;t/=this._finalRatio;const i=s>>this._dz;t>i&&(t=i),this._margin=t,this._xmin=i*this._xPos-t,this._ymin=i*this._yPos-t,this._xmax=this._xmin+i+2*t,this._ymax=this._ymin+i+2*t}reset(s){this._type=s,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(s,t){this._pushLine(),this._prevIsIn=this._isIn(s,t),this._moveTo(s,t,this._prevIsIn),this._prevPt=new g(s,t),this._firstPt=new g(s,t),this._dist=0}lineTo(s,t){const i=this._isIn(s,t),h=new g(s,t),e=g.distance(this._prevPt,h);let l,n,a,_,r,f,m,u;if(i)this._prevIsIn?this._lineTo(s,t,!0):(l=this._prevPt,n=h,a=this._intersect(n,l),this._start=this._dist+e*(1-this._r),this._lineTo(a.x,a.y,!0),this._lineTo(n.x,n.y,!0));else if(this._prevIsIn)n=this._prevPt,l=h,a=this._intersect(n,l),this._lineTo(a.x,a.y,!0),this._lineTo(l.x,l.y,!1);else{const o=this._prevPt,x=h;if(o.x<=this._xmin&&x.x<=this._xmin||o.x>=this._xmax&&x.x>=this._xmax||o.y<=this._ymin&&x.y<=this._ymin||o.y>=this._ymax&&x.y>=this._ymax)this._lineTo(x.x,x.y,!1);else{const y=[];if((o.x<this._xmin&&x.x>this._xmin||o.x>this._xmin&&x.x<this._xmin)&&(_=(this._xmin-o.x)/(x.x-o.x),u=o.y+_*(x.y-o.y),u<=this._ymin?f=!1:u>=this._ymax?f=!0:y.push(new v(_,this._xmin,u))),(o.x<this._xmax&&x.x>this._xmax||o.x>this._xmax&&x.x<this._xmax)&&(_=(this._xmax-o.x)/(x.x-o.x),u=o.y+_*(x.y-o.y),u<=this._ymin?f=!1:u>=this._ymax?f=!0:y.push(new v(_,this._xmax,u))),(o.y<this._ymin&&x.y>this._ymin||o.y>this._ymin&&x.y<this._ymin)&&(_=(this._ymin-o.y)/(x.y-o.y),m=o.x+_*(x.x-o.x),m<=this._xmin?r=!1:m>=this._xmax?r=!0:y.push(new v(_,m,this._ymin))),(o.y<this._ymax&&x.y>this._ymax||o.y>this._ymax&&x.y<this._ymax)&&(_=(this._ymax-o.y)/(x.y-o.y),m=o.x+_*(x.x-o.x),m<=this._xmin?r=!1:m>=this._xmax?r=!0:y.push(new v(_,m,this._ymax))),y.length===0)r?f?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):f?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(y.length>1&&y[0].ratio>y[1].ratio)this._start=this._dist+e*y[1].ratio,this._lineTo(y[1].x,y[1].y,!0),this._lineTo(y[0].x,y[0].y,!0);else{this._start=this._dist+e*y[0].ratio;for(let P=0;P<y.length;P++)this._lineTo(y[P].x,y[P].y,!0)}this._lineTo(x.x,x.y,!1)}}this._dist+=e,this._prevIsIn=i,this._prevPt=h}close(){if(this._line.length>2){const s=this._firstPt,t=this._prevPt;s.x===t.x&&s.y===t.y||this.lineTo(s.x,s.y);const i=this._line;let h=i.length;for(;h>=4&&(i[0].x===i[1].x&&i[0].x===i[h-2].x||i[0].y===i[1].y&&i[0].y===i[h-2].y);)i.pop(),i[0].x=i[h-2].x,i[0].y=i[h-2].y,--h}}result(s=!0){return this._pushLine(),this._lines.length===0?null:(this._type===d.Polygon&&s&&q.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==d.LineString)throw new Error("Only valid for lines");this._pushLine();const s=this._lines,t=s.length;if(t===0)return null;const i=[];for(let h=0;h<t;h++)i.push({line:s[h],start:this._starts[h]||0});return i}_isIn(s,t){return s>=this._xmin&&s<=this._xmax&&t>=this._ymin&&t<=this._ymax}_intersect(s,t){let i,h,e;if(t.x>=this._xmin&&t.x<=this._xmax)h=t.y<=this._ymin?this._ymin:this._ymax,e=(h-s.y)/(t.y-s.y),i=s.x+e*(t.x-s.x);else if(t.y>=this._ymin&&t.y<=this._ymax)i=t.x<=this._xmin?this._xmin:this._xmax,e=(i-s.x)/(t.x-s.x),h=s.y+e*(t.y-s.y);else{h=t.y<=this._ymin?this._ymin:this._ymax,i=t.x<=this._xmin?this._xmin:this._xmax;const l=(i-s.x)/(t.x-s.x),n=(h-s.y)/(t.y-s.y);l<n?(e=l,h=s.y+l*(t.y-s.y)):(e=n,i=s.x+n*(t.x-s.x))}return this._r=e,new g(i,h)}_pushLine(){this._line&&(this._type===d.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===d.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===d.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(s,t,i){this._type!==d.Polygon?i&&(s=Math.round((s-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new g(s,t))):(i||(s<this._xmin&&(s=this._xmin),s>this._xmax&&(s=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),s=Math.round((s-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.push(new g(s,t)),this._isH=!1,this._isV=!1)}_lineTo(s,t,i){let h,e;if(this._type!==d.Polygon)if(i){if(s=Math.round((s-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(h=this._line[this._line.length-1],h.equals(s,t)))return;this._line.push(new g(s,t))}else this._line&&this._line.length>0&&this._pushLine();else if(i||(s<this._xmin&&(s=this._xmin),s>this._xmax&&(s=this._xmax),t<this._ymin&&(t=this._ymin),t>this._ymax&&(t=this._ymax)),s=Math.round((s-(this._xmin+this._margin))*this._finalRatio),t=Math.round((t-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){h=this._line[this._line.length-1];const l=h.x===s,n=h.y===t;if(l&&n)return;this._isH&&l||this._isV&&n?(h.x=s,h.y=t,e=this._line[this._line.length-2],e.x===s&&e.y===t?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(e=this._line[this._line.length-2],this._isH=e.x===s,this._isV=e.y===t)):(this._isH=e.x===s,this._isV=e.y===t)):(this._line.push(new g(s,t)),this._isH=l,this._isV=n)}else this._line.push(new g(s,t))}};class N{setExtent(t){this._ratio=t===4096?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const h=this._ratio;this._line.push(new g(t*h,i*h))}lineTo(t,i){const h=this._ratio;this._line.push(new g(t*h,i*h))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),this._lines.length===0?null:this._lines}}(function(s){s[s.sideLeft=0]="sideLeft",s[s.sideRight=1]="sideRight",s[s.sideTop=2]="sideTop",s[s.sideBottom=3]="sideBottom"})(p||(p={}));let q=class T{static simplify(t,i,h){if(!h)return;const e=-i,l=t+i,n=-i,a=t+i,_=[],r=[],f=h.length;for(let u=0;u<f;++u){const o=h[u];if(!o||o.length<2)continue;let x,y=o[0];const P=o.length;for(let c=1;c<P;++c)x=o[c],y.x===x.x&&(y.x<=e&&(y.y>x.y?(_.push(u),_.push(c),_.push(p.sideLeft),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideLeft),r.push(-1))),y.x>=l&&(y.y<x.y?(_.push(u),_.push(c),_.push(p.sideRight),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideRight),r.push(-1)))),y.y===x.y&&(y.y<=n&&(y.x<x.x?(_.push(u),_.push(c),_.push(p.sideTop),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideTop),r.push(-1))),y.y>=a&&(y.x>x.x?(_.push(u),_.push(c),_.push(p.sideBottom),_.push(-1)):(r.push(u),r.push(c),r.push(p.sideBottom),r.push(-1)))),y=x}if(_.length===0||r.length===0)return;T.fillParent(h,r,_),T.fillParent(h,_,r);const m=[];T.calcDeltas(m,r,_),T.calcDeltas(m,_,r),T.addDeltas(m,h)}static fillParent(t,i,h){const e=h.length,l=i.length;for(let n=0;n<l;n+=4){const a=i[n],_=i[n+1],r=i[n+2],f=t[a][_-1],m=t[a][_];let u=8092,o=-1;for(let x=0;x<e;x+=4){if(h[x+2]!==r)continue;const y=h[x],P=h[x+1],c=t[y][P-1],w=t[y][P];switch(r){case p.sideLeft:case p.sideRight:if(I(f.y,c.y,w.y)&&I(m.y,c.y,w.y)){const M=Math.abs(w.y-c.y);M<u&&(u=M,o=x)}break;case p.sideTop:case p.sideBottom:if(I(f.x,c.x,w.x)&&I(m.x,c.x,w.x)){const M=Math.abs(w.x-c.x);M<u&&(u=M,o=x)}}}i[n+3]=o}}static calcDeltas(t,i,h){const e=i.length;for(let l=0;l<e;l+=4){const n=[],a=T.calcDelta(l,i,h,n);t.push(i[l]),t.push(i[l+1]),t.push(i[l+2]),t.push(a)}}static calcDelta(t,i,h,e){const l=i[t+3];if(l===-1)return 0;const n=e.length;return n>1&&e[n-2]===l?0:(e.push(l),T.calcDelta(l,h,i,e)+1)}static addDeltas(t,i){const h=t.length;let e=0;for(let l=0;l<h;l+=4){const n=t[l+3];n>e&&(e=n)}for(let l=0;l<h;l+=4){const n=i[t[l]],a=t[l+1],_=e-t[l+3];switch(t[l+2]){case p.sideLeft:n[a-1].x-=_,n[a].x-=_,a===1&&(n[n.length-1].x-=_),a===n.length-1&&(n[0].x-=_);break;case p.sideRight:n[a-1].x+=_,n[a].x+=_,a===1&&(n[n.length-1].x+=_),a===n.length-1&&(n[0].x+=_);break;case p.sideTop:n[a-1].y-=_,n[a].y-=_,a===1&&(n[n.length-1].y-=_),a===n.length-1&&(n[0].y-=_);break;case p.sideBottom:n[a-1].y+=_,n[a].y+=_,a===1&&(n[n.length-1].y+=_),a===n.length-1&&(n[0].y+=_)}}}};const I=(s,t,i)=>s>=t&&s<=i||s>=i&&s<=t,E=Number.POSITIVE_INFINITY,R=Math.PI,V=2*R,k=128/R,H=256/360,B=R/180,A=1/Math.LN2;function b(s,t){return(s%=t)>=0?s:s+t}function C(s){return b(s*k,256)}function O(s){return b(s*H,256)}function U(s){return Math.log(s)*A}function F(s,t,i){return s*(1-i)+t*i}const J=8,W=14,Y=16;function j(s){return J+Math.max((s-W)*Y,0)}function G(s,t,i){let h,e,l,n=0;for(const a of i){h=a.length;for(let _=1;_<h;++_)e=a[_-1],l=a[_],e.y>t!=l.y>t&&((l.x-e.x)*(t-e.y)-(l.y-e.y)*(s-e.x)>0?n++:n--)}return n!==0}function K(s,t,i,h){let e,l,n,a;const _=h*h;for(const r of i){const f=r.length;if(!(f<2)){e=r[0].x,l=r[0].y;for(let m=1;m<f;++m){if(n=r[m].x,a=r[m].y,S(s,t,e,l,n,a)<_)return!0;e=n,l=a}}}return!1}function Q(s,t,i,h,e,l,n){const a=Math.max(h,Math.min(t,l))-t,_=Math.max(e,Math.min(i,n))-i;return a*a+_*_<=s*s}function X(s,t){if(t===0||Number.isNaN(t))return s;const i=[],h=new g(0,0),e=new g(0,0),l=new g(0,0);for(let n=0;n<s.length;n++){const a=s[n],_=[];for(let r=0;r<a.length;r++){const f=a[r-1],m=a[r],u=a[r+1];r===0?h.setCoords(0,0):h.assignSub(m,f).normalize().rightPerpendicular(),r===a.length-1?e.setCoords(0,0):e.assignSub(u,m).normalize().rightPerpendicular(),l.assignAdd(h,e).normalize();const o=l.x*e.x+l.y*e.y;o!==0&&l.scale(1/o),_.push(g.add(m,l.scale(t)))}i.push(_)}return i}function Z(s,t,i,h){const e=new g(s[0],s[1]);if(e.scale(h),t==="viewport"){const l=-i*(Math.PI/180),n=Math.cos(l),a=Math.sin(l);e.rotate(n,a)}return e}export{G as I,K as N,X as P,N as _,b as a,U as b,D as c,j as d,V as e,C as f,Z as g,g as h,d as i,O as l,R as o,F as p,E as r,B as s,Q as w};
