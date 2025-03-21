import{e as N}from"./common-CYWrYyJl.js";function P(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t}function X(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t}function Q(t,a,n,s,c,e,i,M,h,f){return t[0]=a,t[1]=n,t[2]=s,t[3]=c,t[4]=e,t[5]=i,t[6]=M,t[7]=h,t[8]=f,t}function R(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function V(t,a){if(t===a){const n=a[1],s=a[2],c=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=s,t[7]=c}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t}function k(t,a){const n=a[0],s=a[1],c=a[2],e=a[3],i=a[4],M=a[5],h=a[6],f=a[7],b=a[8],d=b*i-M*f,l=-b*e+M*h,m=f*e-i*h;let u=n*d+s*l+c*m;return u?(u=1/u,t[0]=d*u,t[1]=(-b*s+c*f)*u,t[2]=(M*s-c*i)*u,t[3]=l*u,t[4]=(b*n-c*h)*u,t[5]=(-M*n+c*e)*u,t[6]=m*u,t[7]=(-f*n+s*h)*u,t[8]=(i*n-s*e)*u,t):null}function w(t,a){const n=a[0],s=a[1],c=a[2],e=a[3],i=a[4],M=a[5],h=a[6],f=a[7],b=a[8];return t[0]=i*b-M*f,t[1]=c*f-s*b,t[2]=s*M-c*i,t[3]=M*h-e*b,t[4]=n*b-c*h,t[5]=c*e-n*M,t[6]=e*f-i*h,t[7]=s*h-n*f,t[8]=n*i-s*e,t}function Y(t){const a=t[0],n=t[1],s=t[2],c=t[3],e=t[4],i=t[5],M=t[6],h=t[7],f=t[8];return a*(f*e-i*h)+n*(-f*c+i*M)+s*(h*c-e*M)}function E(t,a,n){const s=a[0],c=a[1],e=a[2],i=a[3],M=a[4],h=a[5],f=a[6],b=a[7],d=a[8],l=n[0],m=n[1],u=n[2],x=n[3],j=n[4],y=n[5],_=n[6],S=n[7],p=n[8];return t[0]=l*s+m*i+u*f,t[1]=l*c+m*M+u*b,t[2]=l*e+m*h+u*d,t[3]=x*s+j*i+y*f,t[4]=x*c+j*M+y*b,t[5]=x*e+j*h+y*d,t[6]=_*s+S*i+p*f,t[7]=_*c+S*M+p*b,t[8]=_*e+S*h+p*d,t}function C(t,a,n){const s=a[0],c=a[1],e=a[2],i=a[3],M=a[4],h=a[5],f=a[6],b=a[7],d=a[8],l=n[0],m=n[1];return t[0]=s,t[1]=c,t[2]=e,t[3]=i,t[4]=M,t[5]=h,t[6]=l*s+m*i+f,t[7]=l*c+m*M+b,t[8]=l*e+m*h+d,t}function D(t,a,n){const s=a[0],c=a[1],e=a[2],i=a[3],M=a[4],h=a[5],f=a[6],b=a[7],d=a[8],l=Math.sin(n),m=Math.cos(n);return t[0]=m*s+l*i,t[1]=m*c+l*M,t[2]=m*e+l*h,t[3]=m*i-l*s,t[4]=m*M-l*c,t[5]=m*h-l*e,t[6]=f,t[7]=b,t[8]=d,t}function G(t,a,n){const s=n[0],c=n[1],e=n[2];return t[0]=s*a[0],t[1]=s*a[1],t[2]=s*a[2],t[3]=c*a[3],t[4]=c*a[4],t[5]=c*a[5],t[6]=e*a[6],t[7]=e*a[7],t[8]=e*a[8],t}function H(t,a,n){const s=n[0],c=n[1];return t[0]=s*a[0],t[1]=s*a[1],t[2]=s*a[2],t[3]=c*a[3],t[4]=c*a[4],t[5]=c*a[5],t}function I(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t}function J(t,a){const n=Math.sin(a),s=Math.cos(a);return t[0]=s,t[1]=n,t[2]=0,t[3]=-n,t[4]=s,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Z(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function $(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t}function K(t,a){const n=a[0],s=a[1],c=a[2],e=a[3],i=n+n,M=s+s,h=c+c,f=n*i,b=s*i,d=s*M,l=c*i,m=c*M,u=c*h,x=e*i,j=e*M,y=e*h;return t[0]=1-d-u,t[3]=b-y,t[6]=l+j,t[1]=b+y,t[4]=1-f-u,t[7]=m-x,t[2]=l-j,t[5]=m+x,t[8]=1-f-d,t}function o(t,a){const n=a[0],s=a[1],c=a[2],e=a[4],i=a[5],M=a[6],h=a[8],f=a[9],b=a[10],d=b*i-M*f,l=-b*e+M*h,m=f*e-i*h,u=n*d+s*l+c*m;if(!u)return null;const x=1/u;return t[0]=d*x,t[1]=(-b*s+c*f)*x,t[2]=(M*s-c*i)*x,t[3]=l*x,t[4]=(b*n-c*h)*x,t[5]=(-M*n+c*e)*x,t[6]=m*x,t[7]=(-f*n+s*h)*x,t[8]=(i*n-s*e)*x,t}function U(t,a){const n=a[0],s=a[1],c=a[2],e=a[3],i=a[4],M=a[5],h=a[6],f=a[7],b=a[8],d=a[9],l=a[10],m=a[11],u=a[12],x=a[13],j=a[14],y=a[15],_=n*M-s*i,S=n*h-c*i,p=n*f-e*i,L=s*h-c*M,A=s*f-e*M,F=c*f-e*h,T=b*x-d*u,z=b*j-l*u,q=b*y-m*u,B=d*j-l*x,O=d*y-m*x,v=l*y-m*j;let g=_*v-S*O+p*B+L*q-A*z+F*T;return g?(g=1/g,t[0]=(M*v-h*O+f*B)*g,t[1]=(h*q-i*v-f*z)*g,t[2]=(i*O-M*q+f*T)*g,t[3]=(c*O-s*v-e*B)*g,t[4]=(n*v-c*q+e*z)*g,t[5]=(s*q-n*O-e*T)*g,t[6]=(x*F-j*A+y*L)*g,t[7]=(j*p-u*F-y*S)*g,t[8]=(u*A-x*p+y*_)*g,t):null}function r(t,a,n){return t[0]=2/a,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/n,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function tt(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function at(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)}function nt(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t}function W(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t}function st(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t}function ct(t,a,n,s){return t[0]=a[0]+n[0]*s,t[1]=a[1]+n[1]*s,t[2]=a[2]+n[2]*s,t[3]=a[3]+n[3]*s,t[4]=a[4]+n[4]*s,t[5]=a[5]+n[5]*s,t[6]=a[6]+n[6]*s,t[7]=a[7]+n[7]*s,t[8]=a[8]+n[8]*s,t}function et(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]}function it(t,a){const n=t[0],s=t[1],c=t[2],e=t[3],i=t[4],M=t[5],h=t[6],f=t[7],b=t[8],d=a[0],l=a[1],m=a[2],u=a[3],x=a[4],j=a[5],y=a[6],_=a[7],S=a[8],p=N();return Math.abs(n-d)<=p*Math.max(1,Math.abs(n),Math.abs(d))&&Math.abs(s-l)<=p*Math.max(1,Math.abs(s),Math.abs(l))&&Math.abs(c-m)<=p*Math.max(1,Math.abs(c),Math.abs(m))&&Math.abs(e-u)<=p*Math.max(1,Math.abs(e),Math.abs(u))&&Math.abs(i-x)<=p*Math.max(1,Math.abs(i),Math.abs(x))&&Math.abs(M-j)<=p*Math.max(1,Math.abs(M),Math.abs(j))&&Math.abs(h-y)<=p*Math.max(1,Math.abs(h),Math.abs(y))&&Math.abs(f-_)<=p*Math.max(1,Math.abs(f),Math.abs(_))&&Math.abs(b-S)<=p*Math.max(1,Math.abs(b),Math.abs(S))}function Mt(t){const a=N(),n=t[0],s=t[1],c=t[2],e=t[3],i=t[4],M=t[5],h=t[6],f=t[7],b=t[8];return Math.abs(1-(n*n+e*e+h*h))<=a&&Math.abs(1-(s*s+i*i+f*f))<=a&&Math.abs(1-(c*c+M*M+b*b))<=a}const ht=E,ft=W;Object.freeze(Object.defineProperty({__proto__:null,add:nt,adjoint:w,copy:X,determinant:Y,equals:it,exactEquals:et,frob:at,fromMat2d:$,fromMat4:P,fromQuat:K,fromRotation:J,fromScaling:Z,fromTranslation:I,identity:R,invert:k,isOrthoNormal:Mt,mul:ht,multiply:E,multiplyScalar:st,multiplyScalarAndAdd:ct,normalFromMat4:U,normalFromMat4Legacy:o,projection:r,rotate:D,scale:G,scaleByVec2:H,set:Q,str:tt,sub:ft,subtract:W,translate:C,transpose:V},Symbol.toStringTag,{value:"Module"}));export{C as M,H as b,w as c,G as f,D as h,E as i,U as j,I as l,J as m,P as n,R as o,K as p,Q as r,k as s,V as u};
