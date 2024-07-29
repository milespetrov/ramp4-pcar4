import { b9 as f, ba as v } from './main-ab630232.js';
import { m } from './queryTopFeatures-0b1878ac.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function s(s,e,p){const a=f(s);return (await m(a,v.from(e),{...p})).data.objectIds}

export { s as executeForTopIds };
