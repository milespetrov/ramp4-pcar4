import{o as n}from"./projection-CdEQ04oU.js";function a(o,f,e){if(!e?.features||!e.hasZ)return;const t=n(e.geometryType,f,o.outSpatialReference);if(t!=null)for(const r of e.features)t(r.geometry)}export{a as t};
