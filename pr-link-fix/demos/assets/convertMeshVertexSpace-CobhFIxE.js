import { dN as s, s as s$1, P as a } from './main-DmLXxpkC.js';
import { l } from './MeshVertexAttributes-BYdYl0HN.js';
import { M } from './vertexSpaceConversion-CpHlT71p.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-C-YgTHoD.js';
import './computeTranslationToOriginAndRotation-CFKjU6lZ.js';
import './meshVertexSpaceUtils-Gqi60DMR.js';
import './MeshLocalVertexSpace-CbrMsr-1.js';
import './vec3-clYX1kCk.js';
import './projection-lxpopmiW.js';
import './DoubleArray-_FFZL9AS.js';
import './BufferView-_b-aywCS.js';
import './vec4-1H_TEa0z.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
