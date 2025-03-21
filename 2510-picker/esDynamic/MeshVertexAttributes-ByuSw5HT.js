import{k as e,o as c,by as h,A as f,v,n as l,f as a}from"./main-BqyZdgF9.js";function m(t,r,n,p){const{loggerTag:s,stride:i}=r;return t.length%i!=0?(p.error(s,`Invalid array length, expected a multiple of ${i}`),new n([])):t}function g(t,r,n,p,s){if(!t)return t;if(t instanceof r)return m(t,p,r,s);for(const i of n)if(t instanceof i)return m(new r(t),p,r,s);if(Array.isArray(t))return m(new r(t),p,r,s);{const i=n.map(d=>`'${d.name}'`);return s.error(`Failed to set property, expected one of ${i}, but got ${t.constructor.name}`),new r([])}}function u(t,r,n){r[n]=A(t)}function A(t){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=t[n];return r}var y;let o=y=class extends v{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return g(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l.getLogger(this))}castPosition(t){return t&&t instanceof Float32Array&&l.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),g(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l.getLogger(this))}castUv(t){return g(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l.getLogger(this))}castNormal(t){return g(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l.getLogger(this))}castTangent(t){return g(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l.getLogger(this))}clone(){const t={position:a(this.position),uv:a(this.uv),normal:a(this.normal),tangent:a(this.tangent),color:a(this.color)};return new y(t)}clonePositional(){const t={position:a(this.position),normal:a(this.normal),tangent:a(this.tangent),uv:this.uv,color:this.color};return new y(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,this.uv!=null&&(t+=this.uv.byteLength),this.normal!=null&&(t+=this.normal.byteLength),this.tangent!=null&&(t+=this.tangent.byteLength),this.color!=null&&(t+=this.color.byteLength),t}};e([c({json:{write:u}})],o.prototype,"color",void 0),e([h("color")],o.prototype,"castColor",null),e([c({nonNullable:!0,json:{write:u}})],o.prototype,"position",void 0),e([h("position")],o.prototype,"castPosition",null),e([c({json:{write:u}})],o.prototype,"uv",void 0),e([h("uv")],o.prototype,"castUv",null),e([c({json:{write:u}})],o.prototype,"normal",void 0),e([h("normal")],o.prototype,"castNormal",null),e([c({json:{write:u}})],o.prototype,"tangent",void 0),e([h("tangent")],o.prototype,"castTangent",null),o=y=e([f("esri.geometry.support.MeshVertexAttributes")],o);export{g as n,o as p,u as r};
