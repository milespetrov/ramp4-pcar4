import{s as o,w as t,h as s,y as a,t as u}from"./main-CT4A7-UF.js";const d=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),p=new Set(["catalog","csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","knowledge-graph","map-image","map-notes","media","ogc-feature","oriented-imagery","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function m(e){return e.layerContainerType==="basemap"?d:e.layerContainerType==="operational-layers"?p:null}function c(e,i){if(i.restrictedWebMapWriting){const n=m(i);return n==null||n.has(e.type)&&!t(e)}return!0}function f(e,i){if(i)if(t(e)){const n=u("featureCollection.layers",i),l=n?.[0]?.layerDefinition;l&&r(e,l)}else e.type!=="group"&&r(e,i)}function r(e,i){"maxScale"in e&&(i.maxScale=a(e.maxScale)??void 0),"minScale"in e&&(i.minScale=a(e.minScale)??void 0)}function g(e,i){if(f(e,i),i&&(i.id=e.id,"blendMode"in e&&(i.blendMode=e.blendMode,i.blendMode==="normal"&&delete i.blendMode),i.opacity=a(e.opacity)??void 0,i.title=e.title||"Layer",i.visibility=e.visible,"legendEnabled"in e&&e.type!=="wmts"))if(t(e)){const n=i.featureCollection;n&&(n.showLegend=e.legendEnabled)}else i.showLegend=e.legendEnabled}function w(e,i,n){if(!e.persistenceEnabled)return null;if(!("write"in e)||!e.write)return n?.messages&&n.messages.push(new o("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(t(e)&&!e.isTable)i=e.resourceInfo;else if(c(e,n)){const l={};return e.write(l,n)?l:null}return i!=null&&g(e,i=s(i)),i}export{w as f};
