import{q as o,u as e,C as m,A as C,bm as d,aE as h,br as y,h as p}from"./main-Re2Hv9G4.js";let l=class extends C{constructor(t){super(t),this.type=null}};o([e({readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=o([m("esri.rest.support.ColorRamp")],l);const n=l;var i;let r=i=class extends n{constructor(t){super(t),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new i({fromColor:p(this.fromColor),toColor:p(this.toColor),algorithm:this.algorithm})}};o([d({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],r.prototype,"algorithm",void 0),o([e({type:h,json:{type:[y],write:!0}})],r.prototype,"fromColor",void 0),o([e({type:h,json:{type:[y],write:!0}})],r.prototype,"toColor",void 0),o([e({type:["algorithmic"]})],r.prototype,"type",void 0),r=i=o([m("esri.rest.support.AlgorithmicColorRamp")],r);const c=r;var a;let s=a=class extends n{constructor(t){super(t),this.colorRamps=null,this.type="multipart"}clone(){return new a({colorRamps:p(this.colorRamps)})}};o([e({type:[c],json:{write:!0}})],s.prototype,"colorRamps",void 0),o([e({type:["multipart"]})],s.prototype,"type",void 0),s=a=o([m("esri.rest.support.MultipartColorRamp")],s);const u=s,$={key:"type",base:n,typeMap:{algorithmic:c,multipart:u}};function v(t){return t?.type?t.type==="algorithmic"?c.fromJSON(t):t.type==="multipart"?u.fromJSON(t):null:null}export{u as a,$ as m,v as p};
