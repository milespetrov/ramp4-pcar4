import{a3 as E,fs as g,ft as K,dg as _0,aP as A0,eI as P0,fu as t0,bh as E0,bq as O0,fv as s0,cb as N0,cL as M0,fw as i0,c4 as c0,fx as r0,c2 as L0,c3 as o0,eD as G0,eE as W0}from"./main-C6lijZBn.js";const I0=Math.PI/180,F0=/(?:SPHEROID|ELLIPSOID)\[([^\]]+)]/i,M=E.radius,O=E.eccentricitySquared,H0={a1:M*O,a2:M*O*M*O,a3:M*O*O/2,a4:M*O*M*O*2.5,a5:M*O+M*O*O/2,a6:1-O},T0={4267:{a:63782064e-1,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:E.radius,f:E.flattening},4490:{a:6378137,f:1/298.257222101},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:g.radius,f:g.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:K.radius,f:K.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:K.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};var a;(function(l){l[l.UNKNOWN=0]="UNKNOWN",l[l.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",l[l.WGS84=2]="WGS84",l[l.WEB_MERCATOR=3]="WEB_MERCATOR",l[l.WGS84_ECEF=4]="WGS84_ECEF",l[l.CGCS2000=5]="CGCS2000",l[l.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",l[l.GCSMARS2000=7]="GCSMARS2000",l[l.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",l[l.GCSMOON2000=9]="GCSMOON2000",l[l.LON_LAT=10]="LON_LAT",l[l.PLATE_CARREE=11]="PLATE_CARREE"})(a||(a={}));const Y={[a.WGS84]:{[a.CGCS2000]:f,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:q,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:I,[a.WGS84]:f,[a.WGS84_ECEF]:T},[a.CGCS2000]:{[a.CGCS2000]:f,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:q,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:I,[a.WGS84]:f,[a.WGS84_ECEF]:T},[a.GCSMARS2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:f,[a.GCSMOON2000]:null,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:a0,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.GCSMOON2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:f,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:$,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.WEB_MERCATOR]:{[a.CGCS2000]:B,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:B,[a.SPHERICAL_ECEF]:d0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:f,[a.PLATE_CARREE]:U0,[a.WGS84]:B,[a.WGS84_ECEF]:p0},[a.WGS84_ECEF]:{[a.CGCS2000]:d,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:d,[a.SPHERICAL_ECEF]:k0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:y0,[a.PLATE_CARREE]:K0,[a.WGS84]:d,[a.WGS84_ECEF]:f},[a.SPHERICAL_ECEF]:{[a.CGCS2000]:H,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:H,[a.SPHERICAL_ECEF]:f,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:m0,[a.PLATE_CARREE]:B0,[a.WGS84]:H,[a.WGS84_ECEF]:w0},[a.SPHERICAL_MARS_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:C0,[a.GCSMOON2000]:null,[a.LON_LAT]:C0,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:f,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.SPHERICAL_MOON_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:l0,[a.LON_LAT]:l0,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:f,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.UNKNOWN]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:null,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:f,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.LON_LAT]:{[a.CGCS2000]:f,[a.GCSMARS2000]:f,[a.GCSMOON2000]:f,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:q,[a.SPHERICAL_MARS_PCPF]:a0,[a.SPHERICAL_MOON_PCPF]:$,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:I,[a.WGS84]:f,[a.WGS84_ECEF]:T},[a.PLATE_CARREE]:{[a.CGCS2000]:F,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:F,[a.SPHERICAL_ECEF]:q0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:j0,[a.PLATE_CARREE]:f,[a.WGS84]:F,[a.WGS84_ECEF]:g0}};function Z(l,S,C=n0()){return l==null||S==null?null:x0(l,S,C).projector}function z(l,S){return l?S.spatialReference===l?S.spatialReferenceId:(S.spatialReference=l,"metersPerUnit"in S&&(S.metersPerUnit=O0(l,1)),s0(l)?S.spatialReferenceId=a.SPHERICAL_ECEF:N0(l)?S.spatialReferenceId=a.WGS84:M0(l)?S.spatialReferenceId=a.WEB_MERCATOR:i0(l)?S.spatialReferenceId=a.PLATE_CARREE:l.wkt===c0.wkt?S.spatialReferenceId=a.WGS84_ECEF:l.wkid===r0.CGCS2000?S.spatialReferenceId=a.CGCS2000:l.wkt===L0.wkt?S.spatialReferenceId=a.SPHERICAL_MARS_PCPF:l.wkt===o0.wkt?S.spatialReferenceId=a.SPHERICAL_MOON_PCPF:G0(l)?S.spatialReferenceId=a.GCSMARS2000:W0(l)?S.spatialReferenceId=a.GCSMOON2000:S.spatialReferenceId=a.UNKNOWN):a.UNKNOWN}function f(l,S,C,n){l!==C&&(C[n++]=l[S++],C[n++]=l[S++],C[n]=l[S])}function B(l,S,C,n){C[n]=h*(l[S]/r),C[n+1]=h*(e0-2*Math.atan(Math.exp(-l[S+1]/r))),C[n+2]=l[S+2]}function d0(l,S,C,n){const R=l[S]/r,u=e0-2*Math.atan(Math.exp(-l[S+1]/r)),_=r+l[S+2],e=Math.cos(u)*_;C[n]=Math.cos(R)*e,C[n+1]=Math.sin(R)*e,C[n+2]=Math.sin(u)*_}function p0(l,S,C,n){B(l,S,C,n),T(C,n,C,n)}function h0(l,S,C,n,R){const u=.4999999*m,_=A0(p*l[S+1],-u,u),e=Math.sin(_);C[n++]=p*l[S]*R.radius,C[n++]=R.halfSemiMajorAxis*Math.log((1+e)/(1-e)),C[n]=l[S+2]}function W(l,S,C,n){h0(l,S,C,n,E)}function I(l,S,C,n){C[n]=l[S]*R0,C[n+1]=l[S+1]*R0,C[n+2]=l[S+2]}function F(l,S,C,n){C[n]=l[S]*f0,C[n+1]=l[S+1]*f0,C[n+2]=l[S+2]}function U0(l,S,C,n){B(l,S,C,n),I(C,n,C,n)}function K0(l,S,C,n){d(l,S,C,n),I(C,n,C,n)}function B0(l,S,C,n){H(l,S,C,n),I(C,n,C,n)}function q0(l,S,C,n){F(l,S,C,n),q(C,n,C,n)}function j0(l,S,C,n){F(l,S,C,n),W(C,n,C,n)}function g0(l,S,C,n){F(l,S,C,n),T(C,n,C,n)}function J(l,S,C,n,R){const u=R+l[S+2],_=p*l[S+1],e=p*l[S],A=Math.cos(_)*u;C[n]=Math.cos(e)*A,C[n+1]=Math.sin(e)*A,C[n+2]=Math.sin(_)*u}function $(l,S,C,n){J(l,S,C,n,g.radius)}function a0(l,S,C,n){J(l,S,C,n,K.radius)}function q(l,S,C,n){J(l,S,C,n,E.radius)}function Q(l,S,C,n,R){const u=l[S],_=l[S+1],e=l[S+2],A=Math.sqrt(u*u+_*_+e*e),t=t0(e/(A===0?1:A)),P=Math.atan2(_,u);C[n++]=h*P,C[n++]=h*t,C[n]=A-R}function l0(l,S,C,n){Q(l,S,C,n,g.radius)}function C0(l,S,C,n){Q(l,S,C,n,K.radius)}function H(l,S,C,n){Q(l,S,C,n,E.radius)}function m0(l,S,C,n){H(l,S,C,n),W(C,n,C,n)}function w0(l,S,C,n){H(l,S,C,n),T(C,n,C,n)}function b0(l,S,C,n,R){const u=p*l[S],_=p*l[S+1],e=l[S+2],A=Math.sin(_),t=Math.cos(_),P=R.radius/Math.sqrt(1-R.eccentricitySquared*A*A);C[n++]=(P+e)*t*Math.cos(u),C[n++]=(P+e)*t*Math.sin(u),C[n++]=(P*(1-R.eccentricitySquared)+e)*A}function T(l,S,C,n){b0(l,S,C,n,E)}function d(l,S,C,n){const R=H0,u=l[S],_=l[S+1],e=l[S+2];let A,t,P,i,c,w,j,s,N,U,b,k,y,L,o,x,v,D,G,V,X;A=Math.abs(e),t=u*u+_*_,P=Math.sqrt(t),i=t+e*e,c=Math.sqrt(i),V=Math.atan2(_,u),w=e*e/i,j=t/i,L=R.a2/c,o=R.a3-R.a4/c,j>.3?(s=A/c*(1+j*(R.a1+L+w*o)/c),G=Math.asin(s),U=s*s,N=Math.sqrt(1-U)):(N=P/c*(1-w*(R.a5-L-j*o)/c),G=Math.acos(N),U=1-N*N,s=Math.sqrt(U)),b=1-E.eccentricitySquared*U,k=E.radius/Math.sqrt(b),y=R.a6*k,L=P-k*N,o=A-y*s,v=N*L+s*o,x=N*o-s*L,D=x/(y/b+v),G+=D,X=v+x*D/2,e<0&&(G=-G),C[n++]=h*V,C[n++]=h*G,C[n]=X}function k0(l,S,C,n){d(l,S,C,n),q(C,n,C,n)}function y0(l,S,C,n){d(l,S,C,n),W(C,n,C,n)}function x0(l,S,C){if(l==null||S==null||C.source.spatialReference===l&&C.dest.spatialReference===S)return C;const n=z(l,C.source),R=z(S,C.dest);return n===a.UNKNOWN&&R===a.UNKNOWN?E0(l,S)?C.projector=f:C.projector=null:C.projector=Y[n][R],C}function n0(){return{source:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},projector:f}}const v0={spatialReference:null,spatialReferenceId:a.UNKNOWN},D0={spatialReference:null,spatialReferenceId:a.UNKNOWN},S0=n0(),p=P0(1),h=_0(1),m=Math.PI,e0=.5*m,r=E.radius,R0=r*m/180,f0=180/(r*m);function u0(l,S,C,n,R,u,_=Math.floor(l.length/3)){const e=Z(S,R,S0);if(e==null)return!1;if(e===f){if(l===n&&C===u)return!0;const t=C+3*_;for(let P=C,i=u;P<t;P++,i++)n[i]=l[P];return!0}const A=C+3*_;for(let t=C,P=u;t<A;t+=3,P+=3)e(l,t,n,P);return!0}const z0=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:u0},Symbol.toStringTag,{value:"Module"}));export{S0 as E,z as F,Z as G,Y as L,a as N,T0 as d,D0 as e,I0 as i,v0 as l,u0 as n,z0 as p,F0 as t};
