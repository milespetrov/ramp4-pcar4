import{q as n,u,bA as p,C as d,A as v,n as l,h as a}from"./main-CT4A7-UF.js";function m(t,o,e,g){const{loggerTag:i,stride:s}=o;return t.length%s!=0?(g.error(i,`Invalid array length, expected a multiple of ${s}`),new e([])):t}function c(t,o,e,g,i){if(!t)return t;if(t instanceof o)return m(t,g,o,i);for(const s of e)if(t instanceof s)return m(new o(t),g,o,i);if(Array.isArray(t))return m(new o(t),g,o,i);{const s=e.map(A=>`'${A.name}'`);return i.error(`Failed to set property, expected one of ${s}, but got ${t.constructor.name}`),new o([])}}function h(t,o,e){o[e]=f(t)}function f(t){const o=new Array(t.length);for(let e=0;e<t.length;e++)o[e]=t[e];return o}var y;let r=y=class extends v{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return c(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&l.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),c(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l.getLogger(this))}castUv(t){return c(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l.getLogger(this))}castNormal(t){return c(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l.getLogger(this))}castTangent(t){return c(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l.getLogger(this))}clone(){const t={position:a(this.position),uv:a(this.uv),normal:a(this.normal),tangent:a(this.tangent),color:a(this.color)};return new y(t)}clonePositional(){const t={position:a(this.position),normal:a(this.normal),tangent:a(this.tangent),uv:this.uv,color:this.color};return new y(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,this.uv!=null&&(t+=this.uv.byteLength),this.normal!=null&&(t+=this.normal.byteLength),this.tangent!=null&&(t+=this.tangent.byteLength),this.color!=null&&(t+=this.color.byteLength),t}};n([u({json:{write:h}})],r.prototype,"color",void 0),n([p("color")],r.prototype,"castColor",null),n([u({nonNullable:!0,json:{write:h}})],r.prototype,"position",void 0),n([p("position")],r.prototype,"castPosition",null),n([u({json:{write:h}})],r.prototype,"uv",void 0),n([p("uv")],r.prototype,"castUv",null),n([u({json:{write:h}})],r.prototype,"normal",void 0),n([p("normal")],r.prototype,"castNormal",null),n([u({json:{write:h}})],r.prototype,"tangent",void 0),n([p("tangent")],r.prototype,"castTangent",null),r=y=n([d("esri.geometry.support.MeshVertexAttributes")],r);export{c as n,r as p,h as r};
