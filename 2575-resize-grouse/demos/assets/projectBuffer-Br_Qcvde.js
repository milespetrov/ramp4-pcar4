import{a5 as O,ft as m,fu as K,dj as S0,aR as C0,eL as R0,fv as u0,bj as l0,bs as f0,fw as _0,ce as A0,cO as P0,fx as O0,c7 as r0,fy as s0,c5 as N0,c6 as M0,eG as i0,eH as c0}from"./main-BGj2Vmyg.js";const b0=Math.PI/180,x0=/(?:SPHEROID|ELLIPSOID)\[([^\]]+)]/i,N=O.radius,P=O.eccentricitySquared,L0={a1:N*P,a2:N*P*N*P,a3:N*P*P/2,a4:N*P*N*P*2.5,a5:N*P+N*P*P/2,a6:1-P},v0={4267:{a:63782064e-1,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:O.radius,f:O.flattening},4490:{a:6378137,f:1/298.257222101},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:m.radius,f:m.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:K.radius,f:K.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:K.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};var a;(function(E){E[E.UNKNOWN=0]="UNKNOWN",E[E.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",E[E.WGS84=2]="WGS84",E[E.WEB_MERCATOR=3]="WEB_MERCATOR",E[E.WGS84_ECEF=4]="WGS84_ECEF",E[E.CGCS2000=5]="CGCS2000",E[E.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",E[E.GCSMARS2000=7]="GCSMARS2000",E[E.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",E[E.GCSMOON2000=9]="GCSMOON2000",E[E.LON_LAT=10]="LON_LAT",E[E.PLATE_CARREE=11]="PLATE_CARREE"})(a||(a={}));const o0={[a.WGS84]:{[a.CGCS2000]:R,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:R,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:I,[a.WGS84]:R,[a.WGS84_ECEF]:T},[a.CGCS2000]:{[a.CGCS2000]:R,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:R,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:I,[a.WGS84]:R,[a.WGS84_ECEF]:T},[a.GCSMARS2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:R,[a.GCSMOON2000]:null,[a.LON_LAT]:R,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:Z,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.GCSMOON2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:R,[a.LON_LAT]:R,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:Y,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.WEB_MERCATOR]:{[a.CGCS2000]:B,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:B,[a.SPHERICAL_ECEF]:W0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:R,[a.PLATE_CARREE]:H0,[a.WGS84]:B,[a.WGS84_ECEF]:I0},[a.WGS84_ECEF]:{[a.CGCS2000]:d,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:d,[a.SPHERICAL_ECEF]:q0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:m0,[a.PLATE_CARREE]:T0,[a.WGS84]:d,[a.WGS84_ECEF]:R},[a.SPHERICAL_ECEF]:{[a.CGCS2000]:H,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:H,[a.SPHERICAL_ECEF]:R,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:K0,[a.PLATE_CARREE]:d0,[a.WGS84]:H,[a.WGS84_ECEF]:B0},[a.SPHERICAL_MARS_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:a0,[a.GCSMOON2000]:null,[a.LON_LAT]:a0,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:R,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.SPHERICAL_MOON_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:$,[a.LON_LAT]:$,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:R,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.UNKNOWN]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:null,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:R,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.LON_LAT]:{[a.CGCS2000]:R,[a.GCSMARS2000]:R,[a.GCSMOON2000]:R,[a.LON_LAT]:R,[a.SPHERICAL_ECEF]:j,[a.SPHERICAL_MARS_PCPF]:Z,[a.SPHERICAL_MOON_PCPF]:Y,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:I,[a.WGS84]:R,[a.WGS84_ECEF]:T},[a.PLATE_CARREE]:{[a.CGCS2000]:F,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:F,[a.SPHERICAL_ECEF]:p0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:h0,[a.PLATE_CARREE]:R,[a.WGS84]:F,[a.WGS84_ECEF]:U0}};function G0(E,e,n=t0()){return E==null||e==null?null:w0(E,e,n).projector}function X(E,e){return E?e.spatialReference===E?e.spatialReferenceId:(e.spatialReference=E,"metersPerUnit"in e&&(e.metersPerUnit=f0(E,1)),_0(E)?e.spatialReferenceId=a.SPHERICAL_ECEF:A0(E)?e.spatialReferenceId=a.WGS84:P0(E)?e.spatialReferenceId=a.WEB_MERCATOR:O0(E)?e.spatialReferenceId=a.PLATE_CARREE:E.wkt===r0.wkt?e.spatialReferenceId=a.WGS84_ECEF:E.wkid===s0.CGCS2000?e.spatialReferenceId=a.CGCS2000:E.wkt===N0.wkt?e.spatialReferenceId=a.SPHERICAL_MARS_PCPF:E.wkt===M0.wkt?e.spatialReferenceId=a.SPHERICAL_MOON_PCPF:i0(E)?e.spatialReferenceId=a.GCSMARS2000:c0(E)?e.spatialReferenceId=a.GCSMOON2000:e.spatialReferenceId=a.UNKNOWN):a.UNKNOWN}function R(E,e,n,t){E!==n&&(n[t++]=E[e++],n[t++]=E[e++],n[t]=E[e])}function B(E,e,n,t){n[t]=h*(E[e]/c),n[t+1]=h*(e0-2*Math.atan(Math.exp(-E[e+1]/c))),n[t+2]=E[e+2]}function W0(E,e,n,t){const C=E[e]/c,u=e0-2*Math.atan(Math.exp(-E[e+1]/c)),l=c+E[e+2],S=Math.cos(u)*l;n[t]=Math.cos(C)*S,n[t+1]=Math.sin(C)*S,n[t+2]=Math.sin(u)*l}function I0(E,e,n,t){B(E,e,n,t),T(n,t,n,t)}function F0(E,e,n,t,C){const u=.4999999*w,l=C0(p*E[e+1],-u,u),S=Math.sin(l);n[t++]=p*E[e]*C.radius,n[t++]=C.halfSemiMajorAxis*Math.log((1+S)/(1-S)),n[t]=E[e+2]}function W(E,e,n,t){F0(E,e,n,t,O)}function I(E,e,n,t){n[t]=E[e]*E0,n[t+1]=E[e+1]*E0,n[t+2]=E[e+2]}function F(E,e,n,t){n[t]=E[e]*n0,n[t+1]=E[e+1]*n0,n[t+2]=E[e+2]}function H0(E,e,n,t){B(E,e,n,t),I(n,t,n,t)}function T0(E,e,n,t){d(E,e,n,t),I(n,t,n,t)}function d0(E,e,n,t){H(E,e,n,t),I(n,t,n,t)}function p0(E,e,n,t){F(E,e,n,t),j(n,t,n,t)}function h0(E,e,n,t){F(E,e,n,t),W(n,t,n,t)}function U0(E,e,n,t){F(E,e,n,t),T(n,t,n,t)}function z(E,e,n,t,C){const u=C+E[e+2],l=p*E[e+1],S=p*E[e],f=Math.cos(l)*u;n[t]=Math.cos(S)*f,n[t+1]=Math.sin(S)*f,n[t+2]=Math.sin(l)*u}function Y(E,e,n,t){z(E,e,n,t,m.radius)}function Z(E,e,n,t){z(E,e,n,t,K.radius)}function j(E,e,n,t){z(E,e,n,t,O.radius)}function J(E,e,n,t,C){const u=E[e],l=E[e+1],S=E[e+2],f=Math.sqrt(u*u+l*l+S*S),A=u0(S/(f===0?1:f)),_=Math.atan2(l,u);n[t++]=h*_,n[t++]=h*A,n[t]=f-C}function $(E,e,n,t){J(E,e,n,t,m.radius)}function a0(E,e,n,t){J(E,e,n,t,K.radius)}function H(E,e,n,t){J(E,e,n,t,O.radius)}function K0(E,e,n,t){H(E,e,n,t),W(n,t,n,t)}function B0(E,e,n,t){H(E,e,n,t),T(n,t,n,t)}function j0(E,e,n,t,C){const u=p*E[e],l=p*E[e+1],S=E[e+2],f=Math.sin(l),A=Math.cos(l),_=C.radius/Math.sqrt(1-C.eccentricitySquared*f*f);n[t++]=(_+S)*A*Math.cos(u),n[t++]=(_+S)*A*Math.sin(u),n[t++]=(_*(1-C.eccentricitySquared)+S)*f}function T(E,e,n,t){j0(E,e,n,t,O)}function d(E,e,n,t){const C=L0,u=E[e],l=E[e+1],S=E[e+2];let f,A,_,M,i,g,q,r,s,U,k,y,b,L,o,x,v,D,G,Q,V;f=Math.abs(S),A=u*u+l*l,_=Math.sqrt(A),M=A+S*S,i=Math.sqrt(M),Q=Math.atan2(l,u),g=S*S/M,q=A/M,L=C.a2/i,o=C.a3-C.a4/i,q>.3?(r=f/i*(1+q*(C.a1+L+g*o)/i),G=Math.asin(r),U=r*r,s=Math.sqrt(1-U)):(s=_/i*(1-g*(C.a5-L-q*o)/i),G=Math.acos(s),U=1-s*s,r=Math.sqrt(U)),k=1-O.eccentricitySquared*U,y=O.radius/Math.sqrt(k),b=C.a6*y,L=_-y*s,o=f-b*r,v=s*L+r*o,x=s*o-r*L,D=x/(b/k+v),G+=D,V=v+x*D/2,S<0&&(G=-G),n[t++]=h*Q,n[t++]=h*G,n[t]=V}function q0(E,e,n,t){d(E,e,n,t),j(n,t,n,t)}function m0(E,e,n,t){d(E,e,n,t),W(n,t,n,t)}function w0(E,e,n){if(E==null||e==null||n.source.spatialReference===E&&n.dest.spatialReference===e)return n;const t=X(E,n.source),C=X(e,n.dest);return t===a.UNKNOWN&&C===a.UNKNOWN?l0(E,e)?n.projector=R:n.projector=null:n.projector=o0[t][C],n}function t0(){return{source:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},projector:R}}const D0={spatialReference:null,spatialReferenceId:a.UNKNOWN},z0={spatialReference:null,spatialReferenceId:a.UNKNOWN},g0=t0(),p=R0(1),h=S0(1),w=Math.PI,e0=.5*w,c=O.radius,E0=c*w/180,n0=180/(c*w);function k0(E,e,n,t,C,u,l=Math.floor(E.length/3)){const S=G0(e,C,g0);if(S==null)return!1;if(S===R){if(E===t&&n===u)return!0;const A=n+3*l;for(let _=n,M=u;_<A;_++,M++)t[M]=E[_];return!0}const f=n+3*l;for(let A=n,_=u;A<f;A+=3,_+=3)S(E,A,t,_);return!0}const J0=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:k0},Symbol.toStringTag,{value:"Module"}));export{g0 as E,X as F,G0 as G,o0 as L,a as N,v0 as d,z0 as e,b0 as i,D0 as l,k0 as n,J0 as p,x0 as t};
