import{cv as v,aA as f,aP as m}from"./main-CDHpIWDK.js";import{s as b}from"./sphere-BowOyRoK.js";import{c as e,P as s,g as p,j as w,u as h,s as l}from"./vec32-Bix4-noy.js";import{c as a}from"./plane-DpcSR2y2.js";function u(r){return r?{origin:v(r.origin),vector:v(r.vector)}:{origin:f(),vector:f()}}function q(r,i,t=u()){return l(t.origin,r),e(t.vector,i,r),t}function x(r,i){const t=e(a.get(),i,r.origin),g=s(r.vector,t),n=s(r.vector,r.vector),o=m(g/n,0,1),c=e(a.get(),p(a.get(),r.vector,o),t);return s(c,c)}function y(r,i,t){return j(r,i,0,1,t)}function j(r,i,t,g,n){const{vector:o,origin:c}=r,A=e(a.get(),i,c),P=s(o,A)/w(o);return p(n,o,m(P,t,g)),h(n,n,r.origin)}new b(()=>u());export{j as A,x as M,q as b,y as j,u as v};
