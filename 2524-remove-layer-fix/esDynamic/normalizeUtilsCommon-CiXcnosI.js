import{aT as a,B as s,a9 as c}from"./main-DJHcSGyV.js";const f={102100:{maxX:20037508342788905e-9,minX:-20037508342788905e-9,plus180Line:new a({paths:[[[20037508342788905e-9,-20037508342788905e-9],[20037508342788905e-9,20037508342788905e-9]]],spatialReference:s.WebMercator}),minus180Line:new a({paths:[[[-20037508342788905e-9,-20037508342788905e-9],[-20037508342788905e-9,20037508342788905e-9]]],spatialReference:s.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a({paths:[[[180,-180],[180,180]]],spatialReference:s.WGS84}),minus180Line:new a({paths:[[[-180,-180],[-180,180]]],spatialReference:s.WGS84})}};function p(e,n){return Math.ceil((e-n)/(2*n))}function u(e,n){const r=t(e);for(const i of r)for(const o of i)o[0]+=n;return e}function t(e){return c(e)?e.rings:e.paths}export{p as i,t as o,f as r,u as s};
