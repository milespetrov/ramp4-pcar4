import { dq as s, s as s$1, P as a } from './main-3BNeFVQJ.js';
import { l } from './MeshVertexAttributes-CT3A1Hyy.js';
import { M } from './vertexSpaceConversion-CGMxyOM0.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-DMARCkfI.js';
import './computeTranslationToOriginAndRotation-BUr61hP_.js';
import './meshVertexSpaceUtils-Bdr136IO.js';
import './MeshLocalVertexSpace-DFB--8fW.js';
import './vec3-DafqbxQA.js';
import './projection-ByZYLt8i.js';
import './DoubleArray-CehQocA8.js';
import './BufferView-BAYTirPz.js';
import './vec4-B8pr45Nr.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
