import { bd as e, be as y, bf as a, e6 as S, fO as o, eP as V, aX as j$1, fP as o$1, cD as S$1, fQ as u$1, fL as o$2, bO as i, fR as c, fS as r$1, ap as n$1 } from './main-ZcwzHdcj.js';
import { p as p$1 } from './normalizeUtilsSync-9UYL53Ol.js';
import { e as e$1 } from './mat3f64-BNcPSU_3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let m=class extends S{constructor(o){super(o);}get bounds(){const o$1=this.coords;return null==o$1?.extent?null:o(o$1.extent)}get coords(){const o=this.element.georeference?.coords;return V(o,this.spatialReference).geometry}get normalizedCoords(){return j$1.fromJSON(p$1(this.coords))}get normalizedBounds(){const o$1=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=o$1?o(o$1):null}};e([y()],m.prototype,"spatialReference",void 0),e([y()],m.prototype,"element",void 0),e([y()],m.prototype,"bounds",null),e([y()],m.prototype,"coords",null),e([y()],m.prototype,"normalizedCoords",null),e([y()],m.prototype,"normalizedBounds",null),m=e([a("esri.layers.support.MediaElementView")],m);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const f=n$1(),n=e$1(),l=e$1(),u=e$1();function p(r,s,i){return o$1(f,s[0],s[1],1),S$1(f,f,u$1(n,i)),0===f[2]?o$2(r,f[0],f[1]):o$2(r,f[0]/f[2],f[1]/f[2])}function j(t,i$1,m){return x(l,i$1[0],i$1[1],i$1[2],i$1[3],i$1[4],i$1[5],i$1[6],i$1[7]),x(u,m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7]),i(t,c(l,l),u),0!==t[8]&&(t[0]/=t[8],t[1]/=t[8],t[2]/=t[8],t[3]/=t[8],t[4]/=t[8],t[5]/=t[8],t[6]/=t[8],t[7]/=t[8],t[8]/=t[8]),t}function x(m,o,c$1,l,u,p,j,x,b){r$1(m,o,l,p,c$1,u,j,1,1,1),o$1(f,x,b,1),c(n,m);const[g,h,v]=S$1(f,f,u$1(n,n));return r$1(n,g,0,0,0,h,0,0,0,v),i(m,n,m)}

export { j, m, p };