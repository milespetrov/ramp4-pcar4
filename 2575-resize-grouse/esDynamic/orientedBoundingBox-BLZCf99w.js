import{p as St,f as Lt}from"./mat3-CC4Foazl.js";import{t as kt,e as Ut}from"./mat3f64-Dh9_zhFu.js";import{e as ta}from"./mat4f64-Dn1WEGBx.js";import{X as aa,O as J,x as sa}from"./quat-DTjC4JQd.js";import{r as Ct,e as bt}from"./quatf64-C16JxGFv.js";import{g as K,u as ot,o as X,Q as I,f as ht,X as Ft,Z as ea,N as na,R as Qt,d as ra,l as ia,r as vt,q as gt,m as oa,e as ha}from"./vec32-9ZLAcxny.js";import{aA as u,cp as It,fI as ca,fw as Et,fJ as ua,fK as fa,e_ as Tt}from"./main-BriipcPO.js";import{z as da}from"./vec42-D8CJyqHG.js";import{n as ma}from"./vec4f64-hf2nxvhQ.js";import{a as ct}from"./spatialReferenceEllipsoidUtils-DI_zJQZ4.js";import{C as la}from"./computeTranslationToOriginAndRotation-Du18wEHW.js";import{n as Mt,G as Gt}from"./projectBuffer-DGUDUFII.js";import{c as Ht,o as _a,O as wt}from"./plane-Cga3ymuR.js";import{l as ba}from"./ViewingMode-CyR_b1T8.js";import{n as ga}from"./vec2f64-CeODonrJ.js";class At{constructor(t,a,s=a){this.data=t,this.size=a,this.stride=s}}class Ma extends At{constructor(t,a,s,r=!1,n=s){super(t,s,n),this.indices=a,this.exclusive=r}}const L=1e-6,ut=u(),Pt=u();function Pa(e,t){const{data:a,size:s}=e,r=a.length/s;if(r<=0)return;const n=new ya(e);yt(ut,n.minProj,n.maxProj),_t(ut,ut,.5),N(Pt,n.maxProj,n.minProj);const h=qt(Pt),i=new Na;i.quality=h,r<14&&(e=new At(new Float64Array(n.buffer,112,42),3));const o=u(),f=u(),g=u(),l=u(),S=u(),C=u(),M=u();switch(ja(n,e,M,o,f,g,l,S,C,i)){case 1:return void Bt(ut,Pt,t);case 2:return void Aa(e,l,t)}xa(e,M,o,f,g,l,S,C,i),Xt(e,i.b0,i.b1,i.b2,st,et);const G=u();N(G,et,st),i.quality=qt(G),i.quality<h?Zt(i.b0,i.b1,i.b2,st,et,G,t):Bt(ut,Pt,t)}function ja(e,t,a,s,r,n,h,i,o,f){return za(e,s,r),Nt(s,r)<L?1:(N(h,s,r),b(h,h),pa(t,s,h,n)<L?2:(N(i,r,n),b(i,i),N(o,n,s),b(o,o),V(a,i,h),b(a,a),Z(t,a,h,i,o,f),0))}const ft=u(),dt=u(),w=u(),A=u(),q=u(),R=u(),B=u(),W=u();function xa(e,t,a,s,r,n,h,i,o){Sa(e,t,a,ft,dt),ft[0]!==void 0&&(N(w,ft,a),b(w,w),N(A,ft,s),b(A,A),N(q,ft,r),b(q,q),V(R,A,n),b(R,R),V(B,q,h),b(B,B),V(W,w,i),b(W,W),Z(e,R,n,A,w,o),Z(e,B,h,q,A,o),Z(e,W,i,w,q,o)),dt[0]!==void 0&&(N(w,dt,a),b(w,w),N(A,dt,s),b(A,A),N(q,dt,r),b(q,q),V(R,A,n),b(R,R),V(B,q,h),b(B,B),V(W,w,i),b(W,W),Z(e,R,n,A,w,o),Z(e,B,h,q,A,o),Z(e,W,i,w,q,o))}function za(e,t,a){let s=Nt(e.maxVert[0],e.minVert[0]),r=0;for(let n=1;n<7;++n){const h=Nt(e.maxVert[n],e.minVert[n]);h>s&&(s=h,r=n)}x(t,e.minVert[r]),x(a,e.maxVert[r])}const y=[0,0,0];function pa(e,t,a,s){const{data:r,size:n}=e;let h=Number.NEGATIVE_INFINITY,i=0;for(let o=0;o<r.length;o+=n){y[0]=r[o]-t[0],y[1]=r[o+1]-t[1],y[2]=r[o+2]-t[2];const f=a[0]*y[0]+a[1]*y[1]+a[2]*y[2],g=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],l=y[0]*y[0]+y[1]*y[1]+y[2]*y[2]-f*f/g;l>h&&(h=l,i=o)}return x(s,r,i),h}const _=ga();function Sa(e,t,a,s,r){wa(e,t,_,r,s);const n=Dt(a,t);_[1]-L<=n&&(s[0]=void 0),_[0]+L>=n&&(r[0]=void 0)}const Yt=u(),Ot=u(),Rt=u(),k=u(),U=u(),jt=u();function Z(e,t,a,s,r,n){if($t(t)<L)return;V(Yt,a,t),V(Ot,s,t),V(Rt,r,t),tt(e,t,_),U[1]=_[0],k[1]=_[1],jt[1]=k[1]-U[1];const h=[a,s,r],i=[Yt,Ot,Rt];for(let o=0;o<3;++o){tt(e,h[o],_),U[0]=_[0],k[0]=_[1],tt(e,i[o],_),U[2]=_[0],k[2]=_[1],jt[0]=k[0]-U[0],jt[2]=k[2]-U[2];const f=qt(jt);f<n.quality&&(x(n.b0,h[o]),x(n.b1,t),x(n.b2,i[o]),n.quality=f)}}const Ia=u();function tt(e,t,a){const{data:s,size:r}=e;a[0]=Number.POSITIVE_INFINITY,a[1]=Number.NEGATIVE_INFINITY;for(let n=0;n<s.length;n+=r){const h=s[n]*t[0]+s[n+1]*t[1]+s[n+2]*t[2];a[0]=Math.min(a[0],h),a[1]=Math.max(a[1],h)}}function wa(e,t,a,s,r){const{data:n,size:h}=e;x(s,n),x(r,s),a[0]=Dt(Ia,t),a[1]=a[0];for(let i=h;i<n.length;i+=h){const o=n[i]*t[0]+n[i+1]*t[1]+n[i+2]*t[2];o<a[0]&&(a[0]=o,x(s,n,i)),o>a[1]&&(a[1]=o,x(r,n,i))}}function Bt(e,t,a){a.center=e,a.halfSize=K(t,t,.5),a.quaternion=Ct}const H=u(),at=u(),mt=u(),st=u(),et=u(),Wt=u();function Aa(e,t,a){x(H,t),Math.abs(t[0])>Math.abs(t[1])&&Math.abs(t[0])>Math.abs(t[2])?H[0]=0:Math.abs(t[1])>Math.abs(t[2])?H[1]=0:H[2]=0,$t(H)<L&&(H[0]=H[1]=H[2]=1),V(at,t,H),b(at,at),V(mt,t,at),b(mt,mt),Xt(e,t,at,mt,st,et),N(Wt,et,st),Zt(t,at,mt,st,et,Wt,a)}function Xt(e,t,a,s,r,n){tt(e,t,_),r[0]=_[0],n[0]=_[1],tt(e,a,_),r[1]=_[0],n[1]=_[1],tt(e,s,_),r[2]=_[0],n[2]=_[1]}const $=u(),lt=u(),xt=u(),E=kt(1,0,0,0,1,0,0,0,1),qa=bt();function Zt(e,t,a,s,r,n,h){E[0]=e[0],E[1]=e[1],E[2]=e[2],E[3]=t[0],E[4]=t[1],E[5]=t[2],E[6]=a[0],E[7]=a[1],E[8]=a[2],h.quaternion=Va(qa,E),yt($,s,r),_t($,$,.5),_t(lt,e,$[0]),_t(xt,t,$[1]),yt(lt,lt,xt),_t(xt,a,$[2]),h.center=ot(lt,lt,xt),h.halfSize=K($,n,.5)}const j=7;let ya=class{constructor(e){this.minVert=new Array(j),this.maxVert=new Array(j);const t=64*j;this.buffer=new ArrayBuffer(t);let a=0;this.minProj=new Float64Array(this.buffer,a,j),a+=8*j,this.maxProj=new Float64Array(this.buffer,a,j),a+=8*j;for(let i=0;i<j;++i)this.minVert[i]=new Float64Array(this.buffer,a,3),a+=24;for(let i=0;i<j;++i)this.maxVert[i]=new Float64Array(this.buffer,a,3),a+=24;for(let i=0;i<j;++i)this.minProj[i]=Number.POSITIVE_INFINITY,this.maxProj[i]=Number.NEGATIVE_INFINITY;const s=new Array(j),r=new Array(j),{data:n,size:h}=e;for(let i=0;i<n.length;i+=h){let o=n[i];o<this.minProj[0]&&(this.minProj[0]=o,s[0]=i),o>this.maxProj[0]&&(this.maxProj[0]=o,r[0]=i),o=n[i+1],o<this.minProj[1]&&(this.minProj[1]=o,s[1]=i),o>this.maxProj[1]&&(this.maxProj[1]=o,r[1]=i),o=n[i+2],o<this.minProj[2]&&(this.minProj[2]=o,s[2]=i),o>this.maxProj[2]&&(this.maxProj[2]=o,r[2]=i),o=n[i]+n[i+1]+n[i+2],o<this.minProj[3]&&(this.minProj[3]=o,s[3]=i),o>this.maxProj[3]&&(this.maxProj[3]=o,r[3]=i),o=n[i]+n[i+1]-n[i+2],o<this.minProj[4]&&(this.minProj[4]=o,s[4]=i),o>this.maxProj[4]&&(this.maxProj[4]=o,r[4]=i),o=n[i]-n[i+1]+n[i+2],o<this.minProj[5]&&(this.minProj[5]=o,s[5]=i),o>this.maxProj[5]&&(this.maxProj[5]=o,r[5]=i),o=n[i]-n[i+1]-n[i+2],o<this.minProj[6]&&(this.minProj[6]=o,s[6]=i),o>this.maxProj[6]&&(this.maxProj[6]=o,r[6]=i)}for(let i=0;i<j;++i){let o=s[i];x(this.minVert[i],n,o),o=r[i],x(this.maxVert[i],n,o)}}},Na=class{constructor(){this.b0=It(1,0,0),this.b1=It(0,1,0),this.b2=It(0,0,1),this.quality=0}};function qt(e){return e[0]*e[1]+e[0]*e[2]+e[1]*e[2]}function yt(e,t,a){e[0]=t[0]+a[0],e[1]=t[1]+a[1],e[2]=t[2]+a[2]}function N(e,t,a){e[0]=t[0]-a[0],e[1]=t[1]-a[1],e[2]=t[2]-a[2]}function _t(e,t,a){e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a}function x(e,t,a=0){e[0]=t[a],e[1]=t[a+1],e[2]=t[a+2]}function V(e,t,a){const s=t[0],r=t[1],n=t[2],h=a[0],i=a[1],o=a[2];e[0]=r*o-n*i,e[1]=n*h-s*o,e[2]=s*i-r*h}function b(e,t){const a=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(a>0){const s=1/Math.sqrt(a);e[0]=t[0]*s,e[1]=t[1]*s,e[2]=t[2]*s}}function $t(e){return e[0]*e[0]+e[1]*e[1]+e[2]*e[2]}function Nt(e,t){const a=t[0]-e[0],s=t[1]-e[1],r=t[2]-e[2];return a*a+s*s+r*r}function Dt(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Va(e,t){const a=t[0]+t[4]+t[8];if(a>0){let s=Math.sqrt(a+1);e[3]=.5*s,s=.5/s,e[0]=(t[5]-t[7])*s,e[1]=(t[6]-t[2])*s,e[2]=(t[1]-t[3])*s}else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[3*s+s]&&(s=2);const r=(s+1)%3,n=(s+2)%3;let h=Math.sqrt(t[3*s+s]-t[3*r+r]-t[3*n+n]+1);e[s]=.5*h,h=.5/h,e[3]=(t[3*r+n]-t[3*n+r])*h,e[r]=(t[3*r+s]+t[3*s+r])*h,e[n]=(t[3*n+s]+t[3*s+n])*h}return e}class it{constructor(t=ca,a=Ra,s=Ct){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],s[0],s[1],s[2],s[3]]}clone(){const t=new it;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new it;return a._data=t.slice(),a}static fromJSON(t){return new it(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return X(Ht.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,s){this._data[0]=t,this._data[1]=a,this._data[2]=s}get halfSize(){return X(Ht.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return aa(_a.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=m,s=this._data;a[0]=s[6],a[1]=s[7],a[2]=s[8],a[3]=s[9];for(let r=0;r<8;++r){const n=t[r];n[0]=(1&r?-1:1)*s[3],n[1]=(2&r?-1:1)*s[4],n[2]=(4&r?-1:1)*s[5],I(n,n,a),n[0]+=s[0],n[1]+=s[1],n[2]+=s[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],s=this._data[5];return Math.sqrt(t*t+a*a+s*s)}intersectSphere(t){c[0]=this._data[0]-t[0],c[1]=this._data[1]-t[1],c[2]=this._data[2]-t[2];const a=this.getQuaternion(Y);return J(m,a),I(c,c,m),ht(c,c),O[0]=Math.min(c[0],this._data[3]),O[1]=Math.min(c[1],this._data[4]),O[2]=Math.min(c[2],this._data[5]),Ft(O,c)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const s=this._data;c[0]=s[0]-t[0],c[1]=s[1]-t[1],c[2]=s[2]-t[2];const r=t[3],n=r+a;return!(ea(c)>n*n)&&(m[0]=-s[6],m[1]=-s[7],m[2]=-s[8],m[3]=s[9],I(c,c,m),ht(c,c),O[0]=Math.min(c[0],s[3]),O[1]=Math.min(c[1],s[4]),O[2]=Math.min(c[2],s[5]),Ft(O,c)<r*r)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],s=this.projectedRadius(wt(t));return a>s?1:a<-s?-1:0}intersectRay(t,a,s=0){const r=this._data,n=m;n[0]=-r[6],n[1]=-r[7],n[2]=-r[8],n[3]=r[9],c[0]=t[0]-r[0],c[1]=t[1]-r[1],c[2]=t[2]-r[2];const h=I(c,c,m),i=I(O,a,m);let o=-1/0,f=1/0;const g=this.getHalfSize(nt);for(let l=0;l<3;l++){const S=h[l],C=i[l],M=g[l]+s;if(Math.abs(C)>1e-6){const G=(M-S)/C,P=(-M-S)/C;o=Math.max(o,Math.min(G,P)),f=Math.min(f,Math.max(G,P))}else if(S>M||S<-M)return!1}return o<=f}projectedArea(t,a,s,r){const n=this.getQuaternion(Y);J(m,n),c[0]=t[0]-this._data[0],c[1]=t[1]-this._data[1],c[2]=t[2]-this._data[2],I(c,c,m);const h=this.getHalfSize(nt),i=c[0]<-h[0]?-1:c[0]>h[0]?1:0,o=c[1]<-h[1]?-1:c[1]>h[1]?1:0,f=c[2]<-h[2]?-1:c[2]>h[2]?1:0,g=Math.abs(i)+Math.abs(o)+Math.abs(f);if(g===0)return 1/0;const l=g===1?4:6,S=6*(i+3*o+9*f+13);St(rt,n),Lt(rt,rt,h);const C=this.getCenter(Q);for(let P=0;P<l;P++){const pt=Qa[S+P];X(c,((1&pt)<<1)-1,(2&pt)-1,((4&pt)>>1)-1),na(c,c,rt),ot(D,C,c),D[3]=1,da(D,D,a);const Vt=1/Math.max(1e-6,D[3]);F[2*P]=D[0]*Vt,F[2*P+1]=D[1]*Vt}const M=2*l-2;let G=F[0]*(F[3]-F[M+1])+F[M]*(F[1]-F[M-1]);for(let P=2;P<M;P+=2)G+=F[P]*(F[P+3]-F[P-1]);return Math.abs(G)*s*r*.125}projectedRadius(t){const a=this.getQuaternion(Y);return J(m,a),I(c,t,m),Math.abs(c[0]*this._data[3])+Math.abs(c[1]*this._data[4])+Math.abs(c[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius(wt(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius(wt(t))}toAaBoundingBox(t){const a=this.getQuaternion(Y),s=St(rt,a),r=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),n=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),h=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);t[0]=this._data[0]-r,t[1]=this._data[1]-n,t[2]=this._data[2]-h,t[3]=this._data[0]+r,t[4]=this._data[1]+n,t[5]=this._data[2]+h}transform(t,a,s,r=0,n=ct(s),h=ct(a),i=Gt(a,h)){if(s===n)a.isGeographic?Ha(this,t,a,r,h):Ga(this,t,a,r,h,i);else if(a.isWGS84&&(s.isWebMercator||Et(s)))Ea(a,this,s,t,r);else if(a.isWebMercator&&Et(s))Ta(a,this,s,t,r);else{const o=this.getCenter(Q);o[2]+=r,Mt(o,a,0,o,s,0),t.center=o,this!==t&&(t.quaternion=this.getQuaternion(Y),t.halfSize=this.getHalfSize(nt))}}}const m=bt(),Y=bt(),Ca=bt(),c=u(),O=u(),D=ma();function Fa(e,t=new it){return Pa(e,t),t}const F=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],Qa=(()=>{const e=new Int8Array(162);let t=0;const a=s=>{for(let r=0;r<s.length;r++)e[t+r]=s[r];t+=6};return a([6,2,3,1,5,4]),a([0,2,3,1,5,4]),a([0,2,3,7,5,4]),a([0,1,3,2,6,4]),a([0,1,3,2,0,0]),a([0,1,5,7,3,2]),a([0,1,3,7,6,4]),a([0,1,3,7,6,2]),a([0,1,5,7,6,2]),a([0,1,5,4,6,2]),a([0,1,5,4,0,0]),a([0,1,3,7,5,4]),a([0,2,6,4,0,0]),a([0,0,0,0,0,0]),a([1,3,7,5,0,0]),a([2,3,7,6,4,0]),a([2,3,7,6,0,0]),a([2,3,1,5,7,6]),a([0,1,5,7,6,2]),a([0,1,5,7,6,4]),a([0,1,3,7,6,4]),a([4,5,7,6,2,0]),a([4,5,7,6,0,0]),a([4,5,1,3,7,6]),a([0,2,3,7,5,4]),a([6,2,3,7,5,4]),a([6,2,3,1,5,4]),e})();function va(e,t,a,s,r){const n=e.getQuaternion(Y);r.quaternion=n,J(m,n);const h=e.getCenter(Q),i=e.getHalfSize(nt);if(s===ba.Global){I(d,h,m),ht(v,d),ia(p,v,i),Qt(p,v,p);const o=vt(p);ot(p,v,i);const f=vt(p);if(o<a)r.center=h,X(d,a,a,a),r.halfSize=ot(d,i,d);else{const g=f>0?1+t/f:1,l=o>0?1+a/o:1,S=(l+g)/2,C=(l-g)/2;K(p,v,C),r.halfSize=gt(p,p,i,S),K(p,v,S),gt(p,p,i,C),oa(d,d),ha(d,p,d);const M=e.getQuaternion(Ca);r.center=I(d,d,M)}}else{r.center=gt(d,h,Tt,(a+t)/2);const o=I(d,Tt,m);ht(o,o),r.halfSize=gt(v,i,o,(a-t)/2)}return r}function Ea(e,t,a,s,r){t.getCenter(Q),Q[2]+=r;const n=ct(a);Mt(Q,e,0,Q,n,0),Jt(n,t,Q,a,s)}function Ta(e,t,a,s,r){t.getCenter(Q),Q[2]+=r,Jt(e,t,Q,a,s)}function Jt(e,t,a,s,r){const n=t.getQuaternion(Y),h=St(rt,n),i=t.getHalfSize(nt);for(let o=0;o<8;++o){for(let f=0;f<3;++f)T[f]=i[f]*(o&1<<f?-1:1);for(let f=0;f<3;++f){let g=a[f];for(let l=0;l<3;++l)g+=T[l]*h[3*l+f];zt[3*o+f]=g}}Mt(zt,e,0,zt,s,0,8),Fa(Ya,r)}function Ga(e,t,a,s,r=ct(a),n=Gt(a,r)){e.getCorners(Kt),e.getCenter(T),T[2]+=s,la(a,T,z,r),t.setCenter(z[12],z[13],z[14]);const h=2*Math.sqrt(1+z[0]+z[5]+z[10]);m[0]=(z[6]-z[9])/h,m[1]=(z[8]-z[2])/h,m[2]=(z[1]-z[4])/h,m[3]=.25*h;const i=e.getQuaternion(Y);t.quaternion=sa(m,m,i),J(m,m),X(v,0,0,0);const o=t.getCenter(Oa);for(const f of Kt)f[2]+=s,n(f,0,f,0),Qt(d,f,o),I(d,d,m),ht(d,d),ra(v,v,d);t.halfSize=v}function Ha(e,t,a,s,r=ct(a)){const n=ua(a),h=1+Math.max(0,s)/(n.radius+e.centerZ);e.getCenter(T),T[2]+=s,Mt(T,a,0,T,r,0),t.center=T;const i=e.getQuaternion(Y);t.quaternion=i,J(m,i),X(d,0,0,1),I(d,d,m);const o=e.getHalfSize(nt);X(d,o[0]*Math.abs(d[0]),o[1]*Math.abs(d[1]),o[2]*Math.abs(d[2])),K(d,d,n.inverseFlattening),ot(d,o,d),t.halfSize=K(d,d,h)}const zt=new Array(24),Ya=new At(zt,3),T=u(),Q=u(),Oa=u(),nt=u(),rt=Ut(),z=ta(),Kt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],d=u(),v=u(),p=u(),Ra=fa(-1,-1,-1);export{it as I,va as L,Ma as t};
