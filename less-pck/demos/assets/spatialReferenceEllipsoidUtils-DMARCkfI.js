import { by as f$1, cp as T, cq as G, cr as p$1, cs as u, ct as I, cu as D } from './main-3BNeFVQJ.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const p=new f$1(T),l=new f$1(G),f=new f$1(p$1),w=new f$1(u);function a(e){const t=c.get(e);if(t)return t;let s=p;if(e)if(e===l)s=l;else if(e===f)s=f;else {const t=e.wkid,n=e.latestWkid;if(null!=t||null!=n)I(t)||I(n)?s=l:(D(t)||D(n))&&(s=f);else {const t=e.wkt2??e.wkt;if(t){const e=t.toUpperCase();e===k?s=l:e===m&&(s=f);}}}return c.set(e,s),s}const c=new Map,k=l.wkt.toUpperCase(),m=f.wkt.toUpperCase();

export { a, w };
