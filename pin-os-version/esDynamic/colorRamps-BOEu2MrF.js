import{k as t,o as e,A as p,v as C,bk as d,aC as h,bp as u,f as i}from"./main-C6lijZBn.js";let l=class extends C{constructor(o){super(o),this.type=null}};t([e({readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=t([p("esri.rest.support.ColorRamp")],l);const a=l;var m;let r=m=class extends a{constructor(o){super(o),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new m({fromColor:i(this.fromColor),toColor:i(this.toColor),algorithm:this.algorithm})}};t([d({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],r.prototype,"algorithm",void 0),t([e({type:h,json:{type:[u],write:!0}})],r.prototype,"fromColor",void 0),t([e({type:h,json:{type:[u],write:!0}})],r.prototype,"toColor",void 0),t([e({type:["algorithmic"]})],r.prototype,"type",void 0),r=m=t([p("esri.rest.support.AlgorithmicColorRamp")],r);const n=r;var y;let s=y=class extends a{constructor(o){super(o),this.colorRamps=null,this.type="multipart"}clone(){return new y({colorRamps:i(this.colorRamps)})}};t([e({type:[n],json:{write:!0}})],s.prototype,"colorRamps",void 0),t([e({type:["multipart"]})],s.prototype,"type",void 0),s=y=t([p("esri.rest.support.MultipartColorRamp")],s);const c=s,g={key:"type",base:a,typeMap:{algorithmic:n,multipart:c}};function v(o){return o?.type?o.type==="algorithmic"?n.fromJSON(o):o.type==="multipart"?c.fromJSON(o):null:null}export{c as a,g as m,v as p};
