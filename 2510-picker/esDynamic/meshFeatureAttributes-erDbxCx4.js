import{bv as r}from"./main-BqyZdgF9.js";import{N as a}from"./MeshTransform-D7wukiVT.js";function s(n,o,i=t){return new r({x:n[i.originX],y:n[i.originY],z:n[i.originZ],spatialReference:o})}function e(n,o=t){return new a({translation:[n[o.translationX],-n[o.translationZ],n[o.translationY]],rotationAxis:[n[o.rotationX],-n[o.rotationZ],n[o.rotationY]],rotationAngle:n[o.rotationDeg],scale:[n[o.scaleX],n[o.scaleZ],n[o.scaleY]]})}const t={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};export{e as i,s as n};
