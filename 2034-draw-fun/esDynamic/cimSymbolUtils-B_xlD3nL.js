import{b5 as f}from"./main-CZM6prq-.js";import{y as M,m as C,M as k,I as n,f as I}from"./utils-B4kkuHRZ.js";function i(e,t,r,s){if(e)if(e.type!=="CIMTextSymbol"){if(e.effects)for(const a of e.effects)y(a,t);if(e.symbolLayers)for(const a of e.symbolLayers)switch(a.type){case"CIMPictureMarker":case"CIMVectorMarker":h(a,t,s);break;case"CIMPictureStroke":case"CIMSolidStroke":!s?.preserveOutlineWidth&&a.width&&(a.width*=t);break;case"CIMPictureFill":a.height&&(a.height*=t),a.offsetX&&(a.offsetX*=t),a.offsetY&&(a.offsetY*=t);break;case"CIMHatchFill":i(a.lineSymbol,t,!0,{...s,preserveOutlineWidth:!1}),a.offsetX&&(a.offsetX*=t),a.offsetY&&(a.offsetY*=t),a.separation&&(a.separation*=t)}}else e.height!=null&&(e.height*=t)}function h(e,t,r){if(e&&(e.markerPlacement&&u(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=e.size!=null?e.size*t:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const s of e.markerGraphics)e.scaleSymbolsProportionally||i(s.symbol,t,!0,r)}function u(e,t){switch(n(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const r=e.placementTemplate.map(s=>s*t);e.placementTemplate=r}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const r=e.placementTemplate.map(s=>s*t);e.placementTemplate=r}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}function y(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const r=e.dashTemplate.map(s=>s*t);e.dashTemplate=r}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}function d(e){const t=[];return o(M(e),t),t.length?new f(I(t[0])):null}function o(e,t){if(!e)return;let r;r=e.type==="CIMTextSymbol"?e.symbol:e;const s=e.type==="CIMPolygonSymbol";if(r?.symbolLayers){for(const a of r.symbolLayers)if(!(a.colorLocked||s&&(C(a)||k(a)&&a.markerPlacement&&n(a.markerPlacement))))switch(a.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":a.tintColor&&p(t,a.tintColor);break;case"CIMVectorMarker":a.markerGraphics?.forEach(c=>{o(c.symbol,t)});break;case"CIMSolidStroke":case"CIMSolidFill":p(t,a.color);break;case"CIMHatchFill":o(a.lineSymbol,t)}}}function p(e,t){for(const r of e)if(r.join(".")===t.join("."))return;e.push(t)}function P(e,t,r){t instanceof f||(t=new f(t));const s=M(e);s&&l(s,t)}function l(e,t,r){if(!e)return;let s;s=e.type==="CIMTextSymbol"?e.symbol:e;const a=s?.type==="CIMPolygonSymbol";if(s?.symbolLayers)for(const c of s.symbolLayers){if(c.colorLocked||a&&(C(c)||k(c)&&c.markerPlacement&&n(c.markerPlacement)))continue;const m=t.toArray();switch(c.type){case"CIMPictureMarker":case"CIMPictureStroke":case"CIMPictureFill":c.tintColor=m;break;case"CIMVectorMarker":c.markerGraphics?.forEach(b=>{l(b.symbol,t)});break;case"CIMSolidStroke":case"CIMSolidFill":c.color=m;break;case"CIMHatchFill":l(c.lineSymbol,t)}}}export{d as C,P as I,i as l};
