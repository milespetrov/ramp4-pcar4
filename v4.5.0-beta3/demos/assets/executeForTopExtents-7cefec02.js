import { b9 as f, ba as v, w } from './main-5614000d.js';
import { p } from './queryTopFeatures-7b381f0c.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function m(m,s,n){const p$1=f(m),a=await p(p$1,v.from(s),{...n});return {count:a.data.count,extent:w.fromJSON(a.data.extent)}}

export { m as executeForTopExtents };
