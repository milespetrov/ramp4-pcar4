import{aC as V}from"./main-Re2Hv9G4.js";import{e as Y}from"./common-DQOJ18NT.js";function k(o,s){return o[0]=s[0],o[1]=s[1],o[2]=s[2],o[3]=s[3],o[4]=s[4],o[5]=s[5],o[6]=s[6],o[7]=s[7],o[8]=s[8],o[9]=s[9],o[10]=s[10],o[11]=s[11],o[12]=s[12],o[13]=s[13],o[14]=s[14],o[15]=s[15],o}function B(o,s,h,e,r,u,M,c,i,n,b,f,l,m,p,q,x){return o[0]=s,o[1]=h,o[2]=e,o[3]=r,o[4]=u,o[5]=M,o[6]=c,o[7]=i,o[8]=n,o[9]=b,o[10]=f,o[11]=l,o[12]=m,o[13]=p,o[14]=q,o[15]=x,o}function Z(o){return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function G(o,s){if(o===s){const h=s[1],e=s[2],r=s[3],u=s[6],M=s[7],c=s[11];o[1]=s[4],o[2]=s[8],o[3]=s[12],o[4]=h,o[6]=s[9],o[7]=s[13],o[8]=e,o[9]=u,o[11]=s[14],o[12]=r,o[13]=M,o[14]=c}else o[0]=s[0],o[1]=s[4],o[2]=s[8],o[3]=s[12],o[4]=s[1],o[5]=s[5],o[6]=s[9],o[7]=s[13],o[8]=s[2],o[9]=s[6],o[10]=s[10],o[11]=s[14],o[12]=s[3],o[13]=s[7],o[14]=s[11],o[15]=s[15];return o}function H(o,s){return z(o,s)||Z(o),o}function z(o,s){const h=s[0],e=s[1],r=s[2],u=s[3],M=s[4],c=s[5],i=s[6],n=s[7],b=s[8],f=s[9],l=s[10],m=s[11],p=s[12],q=s[13],x=s[14],d=s[15],v=h*c-e*M,y=h*i-r*M,g=h*n-u*M,R=e*i-r*c,S=e*n-u*c,j=r*n-u*i,O=b*q-f*p,P=b*x-l*p,D=b*d-m*p,_=f*x-l*q,A=f*d-m*q,w=l*d-m*x;let T=v*w-y*A+g*_+R*D-S*P+j*O;return T?(T=1/T,o[0]=(c*w-i*A+n*_)*T,o[1]=(r*A-e*w-u*_)*T,o[2]=(q*j-x*S+d*R)*T,o[3]=(l*S-f*j-m*R)*T,o[4]=(i*D-M*w-n*P)*T,o[5]=(h*w-r*D+u*P)*T,o[6]=(x*g-p*j-d*y)*T,o[7]=(b*j-l*g+m*y)*T,o[8]=(M*A-c*D+n*O)*T,o[9]=(e*D-h*A-u*O)*T,o[10]=(p*S-q*g+d*v)*T,o[11]=(f*g-b*S-m*v)*T,o[12]=(c*P-M*_-i*O)*T,o[13]=(h*_-e*P+r*O)*T,o[14]=(q*y-p*R-x*v)*T,o[15]=(b*R-f*y+l*v)*T,o):null}function J(o,s){const h=s[0],e=s[1],r=s[2],u=s[3],M=s[4],c=s[5],i=s[6],n=s[7],b=s[8],f=s[9],l=s[10],m=s[11],p=s[12],q=s[13],x=s[14],d=s[15];return o[0]=c*(l*d-m*x)-f*(i*d-n*x)+q*(i*m-n*l),o[1]=-(e*(l*d-m*x)-f*(r*d-u*x)+q*(r*m-u*l)),o[2]=e*(i*d-n*x)-c*(r*d-u*x)+q*(r*n-u*i),o[3]=-(e*(i*m-n*l)-c*(r*m-u*l)+f*(r*n-u*i)),o[4]=-(M*(l*d-m*x)-b*(i*d-n*x)+p*(i*m-n*l)),o[5]=h*(l*d-m*x)-b*(r*d-u*x)+p*(r*m-u*l),o[6]=-(h*(i*d-n*x)-M*(r*d-u*x)+p*(r*n-u*i)),o[7]=h*(i*m-n*l)-M*(r*m-u*l)+b*(r*n-u*i),o[8]=M*(f*d-m*q)-b*(c*d-n*q)+p*(c*m-n*f),o[9]=-(h*(f*d-m*q)-b*(e*d-u*q)+p*(e*m-u*f)),o[10]=h*(c*d-n*q)-M*(e*d-u*q)+p*(e*n-u*c),o[11]=-(h*(c*m-n*f)-M*(e*m-u*f)+b*(e*n-u*c)),o[12]=-(M*(f*x-l*q)-b*(c*x-i*q)+p*(c*l-i*f)),o[13]=h*(f*x-l*q)-b*(e*x-r*q)+p*(e*l-r*f),o[14]=-(h*(c*x-i*q)-M*(e*x-r*q)+p*(e*i-r*c)),o[15]=h*(c*l-i*f)-M*(e*l-r*f)+b*(e*i-r*c),o}function K(o){const s=o[0],h=o[1],e=o[2],r=o[3],u=o[4],M=o[5],c=o[6],i=o[7],n=o[8],b=o[9],f=o[10],l=o[11],m=o[12],p=o[13],q=o[14],x=o[15];return(s*M-h*u)*(f*x-l*q)-(s*c-e*u)*(b*x-l*p)+(s*i-r*u)*(b*q-f*p)+(h*c-e*M)*(n*x-l*m)-(h*i-r*M)*(n*q-f*m)+(e*i-r*c)*(n*p-b*m)}function C(o,s,h){const e=s[0],r=s[1],u=s[2],M=s[3],c=s[4],i=s[5],n=s[6],b=s[7],f=s[8],l=s[9],m=s[10],p=s[11],q=s[12],x=s[13],d=s[14],v=s[15];let y=h[0],g=h[1],R=h[2],S=h[3];return o[0]=y*e+g*c+R*f+S*q,o[1]=y*r+g*i+R*l+S*x,o[2]=y*u+g*n+R*m+S*d,o[3]=y*M+g*b+R*p+S*v,y=h[4],g=h[5],R=h[6],S=h[7],o[4]=y*e+g*c+R*f+S*q,o[5]=y*r+g*i+R*l+S*x,o[6]=y*u+g*n+R*m+S*d,o[7]=y*M+g*b+R*p+S*v,y=h[8],g=h[9],R=h[10],S=h[11],o[8]=y*e+g*c+R*f+S*q,o[9]=y*r+g*i+R*l+S*x,o[10]=y*u+g*n+R*m+S*d,o[11]=y*M+g*b+R*p+S*v,y=h[12],g=h[13],R=h[14],S=h[15],o[12]=y*e+g*c+R*f+S*q,o[13]=y*r+g*i+R*l+S*x,o[14]=y*u+g*n+R*m+S*d,o[15]=y*M+g*b+R*p+S*v,o}function L(o,s,h){const e=h[0],r=h[1],u=h[2];if(s===o)o[12]=s[0]*e+s[4]*r+s[8]*u+s[12],o[13]=s[1]*e+s[5]*r+s[9]*u+s[13],o[14]=s[2]*e+s[6]*r+s[10]*u+s[14],o[15]=s[3]*e+s[7]*r+s[11]*u+s[15];else{const M=s[0],c=s[1],i=s[2],n=s[3],b=s[4],f=s[5],l=s[6],m=s[7],p=s[8],q=s[9],x=s[10],d=s[11];o[0]=M,o[1]=c,o[2]=i,o[3]=n,o[4]=b,o[5]=f,o[6]=l,o[7]=m,o[8]=p,o[9]=q,o[10]=x,o[11]=d,o[12]=M*e+b*r+p*u+s[12],o[13]=c*e+f*r+q*u+s[13],o[14]=i*e+l*r+x*u+s[14],o[15]=n*e+m*r+d*u+s[15]}return o}function U(o,s,h){const e=h[0],r=h[1],u=h[2];return o[0]=s[0]*e,o[1]=s[1]*e,o[2]=s[2]*e,o[3]=s[3]*e,o[4]=s[4]*r,o[5]=s[5]*r,o[6]=s[6]*r,o[7]=s[7]*r,o[8]=s[8]*u,o[9]=s[9]*u,o[10]=s[10]*u,o[11]=s[11]*u,o[12]=s[12],o[13]=s[13],o[14]=s[14],o[15]=s[15],o}function W(o,s,h,e){let r=e[0],u=e[1],M=e[2],c=Math.sqrt(r*r+u*u+M*M);if(c<=Y())return void k(o,s);c=1/c,r*=c,u*=c,M*=c;const i=Math.sin(h),n=Math.cos(h),b=1-n,f=s[0],l=s[1],m=s[2],p=s[3],q=s[4],x=s[5],d=s[6],v=s[7],y=s[8],g=s[9],R=s[10],S=s[11],j=r*r*b+n,O=u*r*b+M*i,P=M*r*b-u*i,D=r*u*b-M*i,_=u*u*b+n,A=M*u*b+r*i,w=r*M*b+u*i,T=u*M*b-r*i,F=M*M*b+n;o[0]=f*j+q*O+y*P,o[1]=l*j+x*O+g*P,o[2]=m*j+d*O+R*P,o[3]=p*j+v*O+S*P,o[4]=f*D+q*_+y*A,o[5]=l*D+x*_+g*A,o[6]=m*D+d*_+R*A,o[7]=p*D+v*_+S*A,o[8]=f*w+q*T+y*F,o[9]=l*w+x*T+g*F,o[10]=m*w+d*T+R*F,o[11]=p*w+v*T+S*F,s!==o&&(o[12]=s[12],o[13]=s[13],o[14]=s[14],o[15]=s[15])}function a(o,s,h){const e=Math.sin(h),r=Math.cos(h),u=s[4],M=s[5],c=s[6],i=s[7],n=s[8],b=s[9],f=s[10],l=s[11];return s!==o&&(o[0]=s[0],o[1]=s[1],o[2]=s[2],o[3]=s[3],o[12]=s[12],o[13]=s[13],o[14]=s[14],o[15]=s[15]),o[4]=u*r+n*e,o[5]=M*r+b*e,o[6]=c*r+f*e,o[7]=i*r+l*e,o[8]=n*r-u*e,o[9]=b*r-M*e,o[10]=f*r-c*e,o[11]=l*r-i*e,o}function t(o,s,h){const e=Math.sin(h),r=Math.cos(h),u=s[0],M=s[1],c=s[2],i=s[3],n=s[8],b=s[9],f=s[10],l=s[11];return s!==o&&(o[4]=s[4],o[5]=s[5],o[6]=s[6],o[7]=s[7],o[12]=s[12],o[13]=s[13],o[14]=s[14],o[15]=s[15]),o[0]=u*r-n*e,o[1]=M*r-b*e,o[2]=c*r-f*e,o[3]=i*r-l*e,o[8]=u*e+n*r,o[9]=M*e+b*r,o[10]=c*e+f*r,o[11]=i*e+l*r,o}function o1(o,s,h){const e=Math.sin(h),r=Math.cos(h),u=s[0],M=s[1],c=s[2],i=s[3],n=s[4],b=s[5],f=s[6],l=s[7];return s!==o&&(o[8]=s[8],o[9]=s[9],o[10]=s[10],o[11]=s[11],o[12]=s[12],o[13]=s[13],o[14]=s[14],o[15]=s[15]),o[0]=u*r+n*e,o[1]=M*r+b*e,o[2]=c*r+f*e,o[3]=i*r+l*e,o[4]=n*r-u*e,o[5]=b*r-M*e,o[6]=f*r-c*e,o[7]=l*r-i*e,o}function s1(o,s){return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=s[0],o[13]=s[1],o[14]=s[2],o[15]=1,o}function e1(o,s){return o[0]=s[0],o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=s[1],o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=s[2],o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function h1(o,s,h){if(s===0)return Z(o);let e=h[0],r=h[1],u=h[2],M=Math.sqrt(e*e+r*r+u*u);if(M<=Y())return null;M=1/M,e*=M,r*=M,u*=M;const c=Math.sin(s),i=Math.cos(s),n=1-i;return o[0]=e*e*n+i,o[1]=r*e*n+u*c,o[2]=u*e*n-r*c,o[3]=0,o[4]=e*r*n-u*c,o[5]=r*r*n+i,o[6]=u*r*n+e*c,o[7]=0,o[8]=e*u*n+r*c,o[9]=r*u*n-e*c,o[10]=u*u*n+i,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function r1(o,s){const h=Math.sin(s),e=Math.cos(s);return o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=e,o[6]=h,o[7]=0,o[8]=0,o[9]=-h,o[10]=e,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function u1(o,s){const h=Math.sin(s),e=Math.cos(s);return o[0]=e,o[1]=0,o[2]=-h,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=h,o[9]=0,o[10]=e,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function M1(o,s){const h=Math.sin(s),e=Math.cos(s);return o[0]=e,o[1]=h,o[2]=0,o[3]=0,o[4]=-h,o[5]=e,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function E(o,s,h){const e=s[0],r=s[1],u=s[2],M=s[3],c=e+e,i=r+r,n=u+u,b=e*c,f=e*i,l=e*n,m=r*i,p=r*n,q=u*n,x=M*c,d=M*i,v=M*n;return o[0]=1-(m+q),o[1]=f+v,o[2]=l-d,o[3]=0,o[4]=f-v,o[5]=1-(b+q),o[6]=p+x,o[7]=0,o[8]=l+d,o[9]=p-x,o[10]=1-(b+m),o[11]=0,o[12]=h[0],o[13]=h[1],o[14]=h[2],o[15]=1,o}function n1(o,s){const h=c1,e=-s[0],r=-s[1],u=-s[2],M=s[3],c=s[4],i=s[5],n=s[6],b=s[7],f=e*e+r*r+u*u+M*M;return f>0?(h[0]=2*(c*M+b*e+i*u-n*r)/f,h[1]=2*(i*M+b*r+n*e-c*u)/f,h[2]=2*(n*M+b*u+c*r-i*e)/f):(h[0]=2*(c*M+b*e+i*u-n*r),h[1]=2*(i*M+b*r+n*e-c*u),h[2]=2*(n*M+b*u+c*r-i*e)),E(o,s,h),o}const c1=V();function i1(o,s){return o[0]=s[12],o[1]=s[13],o[2]=s[14],o}function f1(o,s){const h=s[0],e=s[1],r=s[2],u=s[4],M=s[5],c=s[6],i=s[8],n=s[9],b=s[10];return o[0]=Math.sqrt(h*h+e*e+r*r),o[1]=Math.sqrt(u*u+M*M+c*c),o[2]=Math.sqrt(i*i+n*n+b*b),o}function b1(o,s){const h=s[0]+s[5]+s[10];let e=0;return h>0?(e=2*Math.sqrt(h+1),o[3]=.25*e,o[0]=(s[6]-s[9])/e,o[1]=(s[8]-s[2])/e,o[2]=(s[1]-s[4])/e):s[0]>s[5]&&s[0]>s[10]?(e=2*Math.sqrt(1+s[0]-s[5]-s[10]),o[3]=(s[6]-s[9])/e,o[0]=.25*e,o[1]=(s[1]+s[4])/e,o[2]=(s[8]+s[2])/e):s[5]>s[10]?(e=2*Math.sqrt(1+s[5]-s[0]-s[10]),o[3]=(s[8]-s[2])/e,o[0]=(s[1]+s[4])/e,o[1]=.25*e,o[2]=(s[6]+s[9])/e):(e=2*Math.sqrt(1+s[10]-s[0]-s[5]),o[3]=(s[1]-s[4])/e,o[0]=(s[8]+s[2])/e,o[1]=(s[6]+s[9])/e,o[2]=.25*e),o}function l1(o,s,h,e){const r=s[0],u=s[1],M=s[2],c=s[3],i=r+r,n=u+u,b=M+M,f=r*i,l=r*n,m=r*b,p=u*n,q=u*b,x=M*b,d=c*i,v=c*n,y=c*b,g=e[0],R=e[1],S=e[2];return o[0]=(1-(p+x))*g,o[1]=(l+y)*g,o[2]=(m-v)*g,o[3]=0,o[4]=(l-y)*R,o[5]=(1-(f+x))*R,o[6]=(q+d)*R,o[7]=0,o[8]=(m+v)*S,o[9]=(q-d)*S,o[10]=(1-(f+p))*S,o[11]=0,o[12]=h[0],o[13]=h[1],o[14]=h[2],o[15]=1,o}function m1(o,s,h,e,r){const u=s[0],M=s[1],c=s[2],i=s[3],n=u+u,b=M+M,f=c+c,l=u*n,m=u*b,p=u*f,q=M*b,x=M*f,d=c*f,v=i*n,y=i*b,g=i*f,R=e[0],S=e[1],j=e[2],O=r[0],P=r[1],D=r[2],_=(1-(q+d))*R,A=(m+g)*R,w=(p-y)*R,T=(m-g)*S,F=(1-(l+d))*S,Q=(x+v)*S,X=(p+y)*j,I=(x-v)*j,$=(1-(l+q))*j;return o[0]=_,o[1]=A,o[2]=w,o[3]=0,o[4]=T,o[5]=F,o[6]=Q,o[7]=0,o[8]=X,o[9]=I,o[10]=$,o[11]=0,o[12]=h[0]+O-(_*O+T*P+X*D),o[13]=h[1]+P-(A*O+F*P+I*D),o[14]=h[2]+D-(w*O+Q*P+$*D),o[15]=1,o}function x1(o,s){const h=s[0],e=s[1],r=s[2],u=s[3],M=h+h,c=e+e,i=r+r,n=h*M,b=e*M,f=e*c,l=r*M,m=r*c,p=r*i,q=u*M,x=u*c,d=u*i;return o[0]=1-f-p,o[1]=b+d,o[2]=l-x,o[3]=0,o[4]=b-d,o[5]=1-n-p,o[6]=m+q,o[7]=0,o[8]=l+x,o[9]=m-q,o[10]=1-n-f,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}function q1(o,s,h,e,r,u,M){const c=1/(h-s),i=1/(r-e),n=1/(u-M);return o[0]=2*u*c,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*u*i,o[6]=0,o[7]=0,o[8]=(h+s)*c,o[9]=(r+e)*i,o[10]=(M+u)*n,o[11]=-1,o[12]=0,o[13]=0,o[14]=M*u*2*n,o[15]=0,o}function d1(o,s,h,e,r){const u=1/Math.tan(s/2);let M;return o[0]=u/h,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=u,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[11]=-1,o[12]=0,o[13]=0,o[15]=0,r!=null&&r!==1/0?(M=1/(e-r),o[10]=(r+e)*M,o[14]=2*r*e*M):(o[10]=-1,o[14]=-2*e),o}function p1(o,s,h,e){const r=Math.tan(s.upDegrees*Math.PI/180),u=Math.tan(s.downDegrees*Math.PI/180),M=Math.tan(s.leftDegrees*Math.PI/180),c=Math.tan(s.rightDegrees*Math.PI/180),i=2/(M+c),n=2/(r+u);return o[0]=i,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=n,o[6]=0,o[7]=0,o[8]=-(M-c)*i*.5,o[9]=(r-u)*n*.5,o[10]=e/(h-e),o[11]=-1,o[12]=0,o[13]=0,o[14]=e*h/(h-e),o[15]=0,o}function g1(o,s,h,e,r,u,M){const c=1/(s-h),i=1/(e-r),n=1/(u-M);return o[0]=-2*c,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*i,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=2*n,o[11]=0,o[12]=(s+h)*c,o[13]=(r+e)*i,o[14]=(M+u)*n,o[15]=1,o}function y1(o,s,h,e){const r=s[0],u=s[1],M=s[2];let c=r-h[0],i=u-h[1],n=M-h[2];const b=Y();if(Math.abs(c)<b&&Math.abs(i)<b&&Math.abs(n)<b)return void Z(o);let f=1/Math.sqrt(c*c+i*i+n*n);c*=f,i*=f,n*=f;const l=e[0],m=e[1],p=e[2];let q=m*n-p*i,x=p*c-l*n,d=l*i-m*c;f=Math.sqrt(q*q+x*x+d*d),f?(f=1/f,q*=f,x*=f,d*=f):(q=0,x=0,d=0);let v=i*d-n*x,y=n*q-c*d,g=c*x-i*q;f=Math.sqrt(v*v+y*y+g*g),f?(f=1/f,v*=f,y*=f,g*=f):(v=0,y=0,g=0),o[0]=q,o[1]=v,o[2]=c,o[3]=0,o[4]=x,o[5]=y,o[6]=i,o[7]=0,o[8]=d,o[9]=g,o[10]=n,o[11]=0,o[12]=-(q*r+x*u+d*M),o[13]=-(v*r+y*u+g*M),o[14]=-(c*r+i*u+n*M),o[15]=1}function R1(o,s,h,e){const r=s[0],u=s[1],M=s[2],c=e[0],i=e[1],n=e[2];let b=r-h[0],f=u-h[1],l=M-h[2],m=b*b+f*f+l*l;m>0&&(m=1/Math.sqrt(m),b*=m,f*=m,l*=m);let p=i*l-n*f,q=n*b-c*l,x=c*f-i*b;return m=p*p+q*q+x*x,m>0&&(m=1/Math.sqrt(m),p*=m,q*=m,x*=m),o[0]=p,o[1]=q,o[2]=x,o[3]=0,o[4]=f*x-l*q,o[5]=l*p-b*x,o[6]=b*q-f*p,o[7]=0,o[8]=b,o[9]=f,o[10]=l,o[11]=0,o[12]=r,o[13]=u,o[14]=M,o[15]=1,o}function S1(o){return"mat4("+o[0]+", "+o[1]+", "+o[2]+", "+o[3]+", "+o[4]+", "+o[5]+", "+o[6]+", "+o[7]+", "+o[8]+", "+o[9]+", "+o[10]+", "+o[11]+", "+o[12]+", "+o[13]+", "+o[14]+", "+o[15]+")"}function v1(o){return Math.sqrt(o[0]**2+o[1]**2+o[2]**2+o[3]**2+o[4]**2+o[5]**2+o[6]**2+o[7]**2+o[8]**2+o[9]**2+o[10]**2+o[11]**2+o[12]**2+o[13]**2+o[14]**2+o[15]**2)}function T1(o,s,h){return o[0]=s[0]+h[0],o[1]=s[1]+h[1],o[2]=s[2]+h[2],o[3]=s[3]+h[3],o[4]=s[4]+h[4],o[5]=s[5]+h[5],o[6]=s[6]+h[6],o[7]=s[7]+h[7],o[8]=s[8]+h[8],o[9]=s[9]+h[9],o[10]=s[10]+h[10],o[11]=s[11]+h[11],o[12]=s[12]+h[12],o[13]=s[13]+h[13],o[14]=s[14]+h[14],o[15]=s[15]+h[15],o}function N(o,s,h){return o[0]=s[0]-h[0],o[1]=s[1]-h[1],o[2]=s[2]-h[2],o[3]=s[3]-h[3],o[4]=s[4]-h[4],o[5]=s[5]-h[5],o[6]=s[6]-h[6],o[7]=s[7]-h[7],o[8]=s[8]-h[8],o[9]=s[9]-h[9],o[10]=s[10]-h[10],o[11]=s[11]-h[11],o[12]=s[12]-h[12],o[13]=s[13]-h[13],o[14]=s[14]-h[14],o[15]=s[15]-h[15],o}function I1(o,s,h){return o[0]=s[0]*h,o[1]=s[1]*h,o[2]=s[2]*h,o[3]=s[3]*h,o[4]=s[4]*h,o[5]=s[5]*h,o[6]=s[6]*h,o[7]=s[7]*h,o[8]=s[8]*h,o[9]=s[9]*h,o[10]=s[10]*h,o[11]=s[11]*h,o[12]=s[12]*h,o[13]=s[13]*h,o[14]=s[14]*h,o[15]=s[15]*h,o}function O1(o,s,h,e){return o[0]=s[0]+h[0]*e,o[1]=s[1]+h[1]*e,o[2]=s[2]+h[2]*e,o[3]=s[3]+h[3]*e,o[4]=s[4]+h[4]*e,o[5]=s[5]+h[5]*e,o[6]=s[6]+h[6]*e,o[7]=s[7]+h[7]*e,o[8]=s[8]+h[8]*e,o[9]=s[9]+h[9]*e,o[10]=s[10]+h[10]*e,o[11]=s[11]+h[11]*e,o[12]=s[12]+h[12]*e,o[13]=s[13]+h[13]*e,o[14]=s[14]+h[14]*e,o[15]=s[15]+h[15]*e,o}function P1(o,s){return o[0]===s[0]&&o[1]===s[1]&&o[2]===s[2]&&o[3]===s[3]&&o[4]===s[4]&&o[5]===s[5]&&o[6]===s[6]&&o[7]===s[7]&&o[8]===s[8]&&o[9]===s[9]&&o[10]===s[10]&&o[11]===s[11]&&o[12]===s[12]&&o[13]===s[13]&&o[14]===s[14]&&o[15]===s[15]}function D1(o,s){if(o===s)return!0;const h=o[0],e=o[1],r=o[2],u=o[3],M=o[4],c=o[5],i=o[6],n=o[7],b=o[8],f=o[9],l=o[10],m=o[11],p=o[12],q=o[13],x=o[14],d=o[15],v=s[0],y=s[1],g=s[2],R=s[3],S=s[4],j=s[5],O=s[6],P=s[7],D=s[8],_=s[9],A=s[10],w=s[11],T=s[12],F=s[13],Q=s[14],X=s[15],I=Y();return Math.abs(h-v)<=I*Math.max(1,Math.abs(h),Math.abs(v))&&Math.abs(e-y)<=I*Math.max(1,Math.abs(e),Math.abs(y))&&Math.abs(r-g)<=I*Math.max(1,Math.abs(r),Math.abs(g))&&Math.abs(u-R)<=I*Math.max(1,Math.abs(u),Math.abs(R))&&Math.abs(M-S)<=I*Math.max(1,Math.abs(M),Math.abs(S))&&Math.abs(c-j)<=I*Math.max(1,Math.abs(c),Math.abs(j))&&Math.abs(i-O)<=I*Math.max(1,Math.abs(i),Math.abs(O))&&Math.abs(n-P)<=I*Math.max(1,Math.abs(n),Math.abs(P))&&Math.abs(b-D)<=I*Math.max(1,Math.abs(b),Math.abs(D))&&Math.abs(f-_)<=I*Math.max(1,Math.abs(f),Math.abs(_))&&Math.abs(l-A)<=I*Math.max(1,Math.abs(l),Math.abs(A))&&Math.abs(m-w)<=I*Math.max(1,Math.abs(m),Math.abs(w))&&Math.abs(p-T)<=I*Math.max(1,Math.abs(p),Math.abs(T))&&Math.abs(q-F)<=I*Math.max(1,Math.abs(q),Math.abs(F))&&Math.abs(x-Q)<=I*Math.max(1,Math.abs(x),Math.abs(Q))&&Math.abs(d-X)<=I*Math.max(1,Math.abs(d),Math.abs(X))}function j1(o){const s=Y(),h=o[0],e=o[1],r=o[2],u=o[4],M=o[5],c=o[6],i=o[8],n=o[9],b=o[10];return Math.abs(1-(h*h+u*u+i*i))<=s&&Math.abs(1-(e*e+M*M+n*n))<=s&&Math.abs(1-(r*r+c*c+b*b))<=s}function _1(o){return o[0]===1&&o[1]===0&&o[2]===0&&o[4]===0&&o[5]===1&&o[6]===0&&o[8]===0&&o[9]===0&&o[10]===1}const A1=C,w1=N;Object.freeze(Object.defineProperty({__proto__:null,add:T1,adjoint:J,copy:k,determinant:K,equals:D1,exactEquals:P1,frob:v1,fromQuat:x1,fromQuat2:n1,fromRotation:h1,fromRotationTranslation:E,fromRotationTranslationScale:l1,fromRotationTranslationScaleOrigin:m1,fromScaling:e1,fromTranslation:s1,fromXRotation:r1,fromYRotation:u1,fromZRotation:M1,frustum:q1,getRotation:b1,getScaling:f1,getTranslation:i1,hasIdentityRotation:_1,identity:Z,invert:z,invertOrIdentity:H,isOrthoNormal:j1,lookAt:y1,mul:A1,multiply:C,multiplyScalar:I1,multiplyScalarAndAdd:O1,ortho:g1,perspective:d1,perspectiveFromFieldOfView:p1,rotate:W,rotateX:a,rotateY:t,rotateZ:o1,scale:U,set:B,str:S1,sub:w1,subtract:N,targetTo:R1,translate:L,transpose:G},Symbol.toStringTag,{value:"Module"}));export{q1 as A,P1 as B,D1 as C,m1 as D,j1 as G,_1 as H,i1 as I,f1 as O,l1 as P,y1 as X,W as b,C as c,U as f,r1 as g,z as h,L as i,b1 as j,k as n,Z as o,h1 as p,s1 as q,B as r,G as s};
