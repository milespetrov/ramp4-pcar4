import{aC as l}from"./main-BriipcPO.js";import{y as m,m as y,M as f,I as C,f as b}from"./utils-SPbpQbmm.js";function I(e){const r=[];return s(m(e),r),r.length?new l(b(r[0])):null}function s(e,r){if(!e)return;let c;c=e.type==="CIMTextSymbol"?e.symbol:e;const a=e.type==="CIMPolygonSymbol";if(c?.symbolLayers){for(const o of c.symbolLayers)if(!(o.colorLocked||a&&(y(o)||f(o)&&o.markerPlacement&&C(o.markerPlacement))))switch(o.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":o.tintColor&&k(r,o.tintColor);break;case"CIMVectorMarker":o.markerGraphics?.forEach(t=>{s(t.symbol,r)});break;case"CIMSolidStroke":case"CIMSolidFill":k(r,o.color);break;case"CIMHatchFill":s(o.lineSymbol,r)}}}function k(e,r){for(const c of e)if(c.join(".")===r.join("."))return;e.push(r)}function u(e,r,c){r instanceof l||(r=new l(r));const a=m(e);a&&i(a,r)}function i(e,r,c){if(!e)return;let a;a=e.type==="CIMTextSymbol"?e.symbol:e;const o=a?.type==="CIMPolygonSymbol";if(a?.symbolLayers)for(const t of a.symbolLayers){if(t.colorLocked||o&&(y(t)||f(t)&&t.markerPlacement&&C(t.markerPlacement)))continue;const n=r.toArray();switch(t.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":t.tintColor=n;break;case"CIMVectorMarker":t.markerGraphics?.forEach(M=>{i(M.symbol,r)});break;case"CIMSolidStroke":case"CIMSolidFill":t.color=n;break;case"CIMHatchFill":i(t.lineSymbol,r)}}}export{I as C,u as I};
