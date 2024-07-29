import { b9 as f, ba as v } from './main-5614000d.js';
import { a } from './queryTopFeatures-7b381f0c.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function s(s,e,p){const u=f(s);return (await a(u,v.from(e),{...p})).data.count}

export { s as executeForTopCount };
