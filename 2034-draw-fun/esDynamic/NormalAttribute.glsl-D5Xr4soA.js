import{n as m}from"./compilerUtils-CxGdVTzb.js";import{o as r}from"./interfaces-DN2-jsJC.js";import{e as c}from"./VertexAttribute-DFC3a3eR.js";var o;function f(e){return e===o.Shadow||e===o.ShadowHighlight||e===o.ShadowExcludeHighlight||e===o.ViewshedShadow}function g(e){return l(e)||e===o.Normal}function v(e){return N(e)||e===o.Normal}function a(e){return e===o.Highlight||e===o.ObjectAndLayerIdColor}function C(e){return t(e)||a(e)}function t(e){return e===o.Color}function d(e){return t(e)||h(e)}function w(e){return t(e)||e===o.ObjectAndLayerIdColor}function S(e){return t(e)||e===o.Highlight}function p(e){return S(e)||i(e)}function u(e){return t(e)||a(e)}function b(e){return d(e)||a(e)}function l(e){return u(e)||i(e)}function N(e){return b(e)||i(e)}function i(e){return e===o.Depth}function h(e){return e===o.ColorEmission}(function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"})(o||(o={}));function O(e,s){switch(s.normalType){case n.Compressed:e.attributes.add(c.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(c.NORMAL,"vec3"),e.vertex.code.add(r`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:m(s.normalType);case n.COUNT:}}var n;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"})(n||(n={}));export{i as C,h as S,n as a,v as b,u as c,p as d,t as e,l as f,C as h,a as i,w as l,o as n,f as o,g as r,O as t,d as u};
