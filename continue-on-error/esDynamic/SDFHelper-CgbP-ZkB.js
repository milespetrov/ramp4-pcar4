import{o as q}from"./floatRGBA-Cbwe4aEG.js";import{cJ as G}from"./main-IAmJgjpH.js";import{t as J}from"./UpdateTracking2D-Rv_cEq0D.js";import{D as k,t as L}from"./definitions-DJSdSb77.js";const U=.45;function V(o,t=.5){switch(o.type){case"CIMPointSymbol":{const a=o.symbolLayers;if(!a||a.length!==1)return null;const n=a[0];return n.type!=="CIMVectorMarker"?null:V(n)}case"CIMVectorMarker":{const a=o.markerGraphics;if(!a||a.length!==1)return null;const n=a[0];if(!n)return null;const e=n.geometry;if(!e)return null;const r=n.symbol;return!r||r.type!=="CIMPolygonSymbol"&&r.type!=="CIMLineSymbol"||r.symbolLayers?.some(i=>!!i.effects)?null:{type:"sdf",geom:e,sdfPaddingRatio:t,asFill:r.type==="CIMPolygonSymbol"}}}}function j(o){return o?o.rings?o.rings:o.paths?o.paths:o.xmin!==void 0&&o.ymin!==void 0&&o.xmax!==void 0&&o.ymax!==void 0?[[[o.xmin,o.ymin],[o.xmin,o.ymax],[o.xmax,o.ymax],[o.xmax,o.ymin],[o.xmin,o.ymin]]]:null:null}function B(o){let t=1/0,a=-1/0,n=1/0,e=-1/0;for(const r of o)for(const i of r)i[0]<t&&(t=i[0]),i[0]>a&&(a=i[0]),i[1]<n&&(n=i[1]),i[1]>e&&(e=i[1]);return new J(t,n,a-t,e-n)}function X(o){let t=1/0,a=-1/0,n=1/0,e=-1/0;for(const r of o)for(const i of r)i[0]<t&&(t=i[0]),i[0]>a&&(a=i[0]),i[1]<n&&(n=i[1]),i[1]>e&&(e=i[1]);return[t,n,a,e]}function Y(o){return o?o.rings?X(o.rings):o.paths?X(o.paths):G(o)?[o.xmin,o.ymin,o.xmax,o.ymax]:null:null}function E(o,t){const[a,n,e,r]=Y(o),i=e-a,l=r-n,m=k,c=L,s=Math.floor(.5*(m*t-c)),f=(m-2*(s+c))/Math.max(i,l),d=Math.round(i*f),h=Math.round(l*f);return{pixelDimensions:[i,l],texelDimensions:[Math.round((d+2*s)/f),Math.round((h+2*s)/f)]}}function H(o,t,a,n,e,r,i){const[l,m,c,s]=o;if(c<l||s<m)return{frameSizeRatio:0,anchorX:0,anchorY:0,widthRatio:1,sdfPaddingRatio:.5};const f=c-l,d=s-m,h=Math.max(f,d);let u=.5;if(r!=null&&a!=null){!i&&t!=null&&(r*=(t.ymax-t.ymin)/a);const C=r/(r+h);C>U&&C<1&&(u=Math.min(C+.1,.99))}const x=k,M=L,p=Math.floor(.5*(x*u-M)),g=(x-2*(p+M))/h,I=Math.round(f*g)+2*p,R=Math.round(d*g)+2*p;let y=1;t&&(y=R*(1-u)/((t.ymax-t.ymin)*g));let P=0,w=0,b=1;n&&(e?t&&a&&t.ymax-t.ymin>0&&(b=(t.xmax-t.xmin)/(t.ymax-t.ymin),P=n.x/(a*b),w=n.y/a):(P=n.x,w=n.y)),t&&(P=.5*(t.xmax+t.xmin)+P*(t.xmax-t.xmin),w=.5*(t.ymax+t.ymin)+w*(t.ymax-t.ymin)),P-=l,w-=m,P*=g,w*=g,P+=p,w+=p;let S=P/I-.5,v=w/R-.5;return e&&a&&(S*=a*b,v*=a),{frameSizeRatio:y,anchorX:S,anchorY:v,widthRatio:b,sdfPaddingRatio:u}}function K(o){const t=j(o.geom),a=B(t),n=k,e=L,r=Math.floor(.5*(n*o.sdfPaddingRatio-e)),i=n-2*(r+e),l=i/Math.max(a.width,a.height),m=Math.round(a.width*l)+2*r,c=Math.round(a.height*l)+2*r,s=[];for(const d of t)if(d&&d.length>1){const h=[];for(const u of d){let[x,M]=u;x-=a.x,M-=a.y,x*=l,M*=l,x+=r-.5,M+=r-.5,o.asFill?h.push([x,M]):h.push([Math.round(x),Math.round(M)])}if(o.asFill){const u=h.length-1;h[0][0]===h[u][0]&&h[0][1]===h[u][1]||h.push(h[0])}s.push(h)}const f=W(s,m,c,r);return o.asFill&&Z(s,m,c,r,f),{data:_(f,r),width:m,height:c,sdfPaddingRatio:o.sdfPaddingRatio,sdfDecodeCoeff:2*r/i}}function W(o,t,a,n){const e=t*a,r=new Array(e),i=n*n+1;for(let l=0;l<e;++l)r[l]=i;for(const l of o){const m=l.length;for(let c=1;c<m;++c){const s=l[c-1],f=l[c];let d,h,u,x;s[0]<f[0]?(d=s[0],h=f[0]):(d=f[0],h=s[0]),s[1]<f[1]?(u=s[1],x=f[1]):(u=f[1],x=s[1]);let M=Math.floor(d)-n,p=Math.floor(h)+n,g=Math.floor(u)-n,I=Math.floor(x)+n;M<0&&(M=0),p>t&&(p=t),g<0&&(g=0),I>a&&(I=a);const R=f[0]-s[0],y=f[1]-s[1],P=R*R+y*y;for(let w=M;w<p;w++)for(let b=g;b<I;b++){const S=w+.5,v=b+.5;let C,D,F=(S-s[0])*R+(v-s[1])*y;F<0?(C=s[0],D=s[1]):F>P?(C=f[0],D=f[1]):(F/=P,C=s[0]+F*R,D=s[1]+F*y);const z=(S-C)*(S-C)+(v-D)*(v-D),A=(a-b-1)*t+w;z<r[A]&&(r[A]=z)}}}for(let l=0;l<e;++l)r[l]=Math.sqrt(r[l]);return r}function Z(o,t,a,n,e){for(const r of o){const i=r.length;for(let l=1;l<i;++l){const m=r[l-1],c=r[l];let s,f,d,h;m[0]<c[0]?(s=m[0],f=c[0]):(s=c[0],f=m[0]),m[1]<c[1]?(d=m[1],h=c[1]):(d=c[1],h=m[1]);let u=Math.floor(s),x=Math.floor(f)+1,M=Math.floor(d),p=Math.floor(h)+1;u<n&&(u=n),x>t-n&&(x=t-n),M<n&&(M=n),p>a-n&&(p=a-n);for(let g=M;g<p;++g){if(m[1]>g==c[1]>g)continue;const I=g+.5,R=(a-g-1)*t;for(let y=u;y<x;++y)y+.5<(c[0]-m[0])*(I-m[1])/(c[1]-m[1])+m[0]&&(e[R+y]=-e[R+y]);for(let y=n;y<u;++y)e[R+y]=-e[R+y]}}}}function _(o,t){const a=2*t,n=o.length,e=new Uint8Array(4*n);for(let r=0;r<n;++r){const i=.5-o[r]/a;q(i,e,4*r)}return e}export{V as a,E as c,H as h,Y as m,K as u};
