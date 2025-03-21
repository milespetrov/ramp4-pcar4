import{cK as $,s as K,a1 as J,cL as tt,B as Q,cG as et,aT as nt,bC as st}from"./main-BriipcPO.js";import{i as b,d as at,t as it}from"./projectBuffer-DGUDUFII.js";function V(t){if(!t)return null;const n=t.wkid;if(n)return at[n];const e=t.wkt2??t.wkt;return e?ot(e):null}function ot(t){const n=it.exec(t);if(!n||n.length!==2)return null;const e=n[1].split(",");if(!e||e.length<3)return null;const c=parseFloat(e[1]),s=parseFloat(e[2]);return isNaN(c)||isNaN(s)?null:{a:c,f:s===0?0:1/s}}function C(t){const n=V(t);if(rt(n))return n;const e=n.a*(1-n.f);return Object.assign(n,{b:e,eSq:1-(e/n.a)**2,radius:(2*n.a+e)/3,densificationRatio:1e4/((2*n.a+e)/3)})}function rt(t){return t!=null&&"b"in t&&"eSq"in t&&"radius"in t}function L(t,n,e){const{a:c,eSq:s}=C(e),a=Math.sqrt(s),i=Math.sin(n[1]*b),l=c*n[0]*b;let r;return s>0?r=c*((1-s)*(i/(1-s*(i*i))-1/(2*a)*Math.log((1-a*i)/(1+a*i))))*.5:r=c*i,t[0]=l,t[1]=r,t}function P(t){return $(t)&&!!V(t)}function ht(t,n="square-meters"){if(t.some(i=>!P(i.spatialReference)))throw new K("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let i=0;i<t.length;i++){const l=t[i],r=l.spatialReference,{radius:h,densificationRatio:u}=C(r),o=h*u;e.push(lt(l,o))}const c=[],s=[0,0],a=[0,0];for(let i=0;i<e.length;i++){const{rings:l,spatialReference:r}=e[i];let h=0;for(let u=0;u<l.length;u++){const o=l[u];L(s,o[0],r),L(a,o[o.length-1],r);let M=a[0]*s[1]-s[0]*a[1];for(let d=0;d<o.length-1;d++)L(s,o[d+1],r),L(a,o[d],r),M+=a[0]*s[1]-s[0]*a[1];h+=M}h=J(h,"square-meters",n),c.push(h/-2)}return c}function ct(t,n="meters"){if(!t)throw new K("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(c=>!P(c.spatialReference)))throw new K("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let c=0;c<t.length;c++){const s=t[c],{spatialReference:a}=s,i=s.type==="polyline"?s.paths:s.rings;let l=0;for(let r=0;r<i.length;r++){const h=i[r];let u=0;for(let o=1;o<h.length;o++){const M=h[o-1][0],d=h[o][0],m=h[o-1][1],g=h[o][1];if(m!==g||M!==d){const p=new D;E(p,[M,m],[d,g],a),u+=p.distance}}l+=u}l=J(l,"meters",n),e.push(l)}return e}function lt(t,n){if(t.type!=="polyline"&&t.type!=="polygon")throw new K("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:e}=t;if(!P(e))throw new K("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const c=t.type==="polyline"?t.paths:t.rings,s=[],a=[0,0],i=new D;for(const r of c){const h=[];s.push(h),h.push([r[0][0],r[0][1]]);let u,o,M=r[0][0],d=r[0][1];for(let m=0;m<r.length-1;m++){if(u=r[m+1][0],o=r[m+1][1],M===u&&d===o)continue;const g=[M,d];E(i,[M,d],[u,o],e);const{azimuth:p,distance:v}=i,w=v/n;if(w>1){for(let A=1;A<=w-1;A++)O(a,g,p,A*n,e),h.push(a.slice());O(a,g,p,(v+Math.floor(w-1)*n)/2,e),h.push(a.slice())}O(a,g,p,v,e),h.push(a.slice()),M=a[0],d=a[1]}}const l=et(Q,e);return t.type==="polyline"?new nt({paths:s,spatialReference:l}):new st({rings:s,spatialReference:l})}class D{constructor(n=0,e=void 0,c=void 0){this.distance=n,this.azimuth=e,this.reverseAzimuth=c}}function O(t,n,e,c,s){const a=n[0],i=n[1],l=a*b,r=i*b,h=(e??0)*b,{a:u,b:o,f:M}=C(s),d=Math.sin(h),m=Math.cos(h),g=(1-M)*Math.tan(r),p=1/Math.sqrt(1+g*g),v=g*p,w=Math.atan2(g,m),A=p*d,j=A*A,q=1-j,f=q*(u*u-o*o)/(o*o),x=1+f/16384*(4096+f*(f*(320-175*f)-768)),F=f/1024*(256+f*(f*(74-47*f)-128));let R,N,y,G,k=c/(o*x),z=2*Math.PI;for(;Math.abs(k-z)>1e-12;)y=Math.cos(2*w+k),R=Math.sin(k),N=Math.cos(k),G=F*R*(y+F/4*(N*(2*y*y-1)-F/6*y*(4*R*R-3)*(4*y*y-3))),z=k,k=c/(o*x)+G;const S=v*R-p*N*m,B=Math.atan2(v*N+p*R*m,(1-M)*Math.sqrt(j+S*S)),T=Math.atan2(R*d,p*N-v*R*m),I=M/16*q*(4+M*(4-3*q)),U=B/b,W=(l+(T-(1-I)*M*A*(k+I*R*(y+I*N*(2*y*y-1)))))/b;return t[0]=W,t[1]=U,t}function E(t,n,e,c){const s=n[0]*b,a=n[1]*b,i=e[0]*b,l=e[1]*b,{a:r,b:h,f:u,radius:o}=C(c),M=i-s,d=Math.atan((1-u)*Math.tan(a)),m=Math.atan((1-u)*Math.tan(l)),g=Math.sin(d),p=Math.cos(d),v=Math.sin(m),w=Math.cos(m);let A,j,q,f,x,F,R,N,y,G,k=1e3,z=M;do{if(R=Math.sin(z),N=Math.cos(z),q=Math.sqrt(w*R*(w*R)+(p*v-g*w*N)*(p*v-g*w*N)),q===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;x=g*v+p*w*N,F=Math.atan2(q,x),y=p*w*R/q,j=1-y*y,f=x-2*g*v/j,isNaN(f)&&(f=0),G=u/16*j*(4+u*(4-3*j)),A=z,z=M+(1-G)*u*y*(F+G*q*(f+G*x*(2*f*f-1)))}while(Math.abs(z-A)>1e-12&&--k>0);if(k===0){const W=o,X=Math.acos(Math.sin(a)*Math.sin(l)+Math.cos(a)*Math.cos(l)*Math.cos(i-s))*W,H=i-s,Y=Math.sin(H)*Math.cos(l),Z=Math.cos(a)*Math.sin(l)-Math.sin(a)*Math.cos(l)*Math.cos(H),_=Math.atan2(Y,Z);return t.azimuth=_/b,t.distance=X,t.reverseAzimuth=void 0,t}const S=j*(r*r-h*h)/(h*h),B=S/1024*(256+S*(S*(74-47*S)-128)),T=h*(1+S/16384*(4096+S*(S*(320-175*S)-768)))*(F-B*q*(f+B/4*(x*(2*f*f-1)-B/6*f*(4*q*q-3)*(4*f*f-3)))),I=Math.atan2(w*Math.sin(z),p*v-g*w*Math.cos(z)),U=Math.atan2(p*Math.sin(z),p*v*Math.cos(z)-g*w);return t.azimuth=I/b,t.distance=T,t.reverseAzimuth=U/b,t}function ut(t){return P(t)?t:tt(t)?Q.WGS84:null}export{ut as N,ct as R,D as b,O as j,E as q,ht as v,P as y};
