import{q as s,u as i,C as h,A as d,bp as n,aY as p,ei as S,U as g}from"./main-CdsSyLmf.js";import{f as y,i as R}from"./utils-Ctlcovrv.js";import{o as w}from"./utils-Cv4bkaTm.js";let o=class extends d{constructor(e){super(e),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map(a=>a.toJSON()),t=this.geometries[0],r={};return r.outSR=n(this.outSpatialReference),r.inSR=n(t.spatialReference),r.geometries=JSON.stringify({geometryType:p(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),this.transformForward!=null&&(r.transformForward=this.transformForward),r}};s([i()],o.prototype,"geometries",void 0),s([i({json:{read:{source:"outSR"}}})],o.prototype,"outSpatialReference",void 0),s([i()],o.prototype,"transformation",void 0),s([i()],o.prototype,"transformForward",void 0),o=s([h("esri.rest.support.ProjectParameters")],o);const j=o,F=S(j);async function $(e,t,r){t=F(t);const a=y(e),f={...a.query,f:"json",...t.toJSON()},m=t.outSpatialReference,u=p(t.geometries[0]),c=R(f,r);return g(a.path+"/project",c).then(({data:{geometries:l}})=>w(l,u,m))}export{$ as n,j as p};
