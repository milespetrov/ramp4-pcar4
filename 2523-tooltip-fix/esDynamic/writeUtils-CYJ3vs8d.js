import{s,w as a,f as i,y as r,t as u}from"./main-CDHpIWDK.js";const d=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),p=new Set(["catalog","csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","knowledge-graph","map-image","map-notes","media","ogc-feature","oriented-imagery","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function m(e){return e.layerContainerType==="basemap"?d:e.layerContainerType==="operational-layers"?p:null}function c(e,n){if(n.restrictedWebMapWriting){const t=m(n);return t==null||t.has(e.type)&&!a(e)}return!0}function f(e,n){if(n)if(a(e)){const t=u("featureCollection.layers",n),l=t?.[0]?.layerDefinition;l&&o(e,l)}else e.type!=="group"&&o(e,n)}function o(e,n){"maxScale"in e&&(n.maxScale=r(e.maxScale)??void 0),"minScale"in e&&(n.minScale=r(e.minScale)??void 0)}function g(e,n){if(f(e,n),n&&(n.id=e.id,"blendMode"in e&&(n.blendMode=e.blendMode,n.blendMode==="normal"&&delete n.blendMode),n.opacity=r(e.opacity)??void 0,n.title=e.title||"Layer",n.visibility=e.visible,"legendEnabled"in e&&e.type!=="wmts"))if(a(e)){const t=n.featureCollection;t&&(t.showLegend=e.legendEnabled)}else n.showLegend=e.legendEnabled}function y(e,n,t){if(!e.persistenceEnabled)return null;if(!("write"in e)||!e.write)return t?.messages&&t.messages.push(new s("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(a(e)&&!e.isTable)n=e.resourceInfo;else if(c(e,t)){const l={};return e.write(l,t)?l:null}return n!=null&&g(e,n=i(n)),n}export{y as f};
