import{bs as u,bt as i,bu as c}from"./main-CT4A7-UF.js";const e=96;function b(t,n){const r=t.extent,o=t.width,f=u(r?.spatialReference);return r&&o?r.width/o*f*i*e:0}function d(t,n){return t/(u(n)*i*e)}function m(t,n,r){return s(t,n)&&a(t,r)}function s(t,n){return n===0||c(t,n)||t<n}function a(t,n){return n===0||c(t,n)||t>n}export{m as d,b as i,d as o};
