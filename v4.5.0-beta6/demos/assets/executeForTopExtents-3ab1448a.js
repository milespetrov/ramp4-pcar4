import { b9 as f, ba as v, w } from './main-9edb339c.js';
import { p } from './queryTopFeatures-e3135832.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=f(m),a=await p(p$1,v.from(s),{...n});return {count:a.data.count,extent:w.fromJSON(a.data.extent)}}

export { m as executeForTopExtents };
