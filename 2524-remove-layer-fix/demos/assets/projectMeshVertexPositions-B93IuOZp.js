import{n as p}from"./projectBuffer-ChAiX47d.js";import{a as m}from"./MeshLocalVertexSpace-1wJUmI6P.js";import{bj as e}from"./main-CFpM9i38.js";import{B as n}from"./vertexSpaceConversion--Muu4xxu.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-BZ-Redsx.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-DwOYpah8.js";import"./spatialReferenceEllipsoidUtils-BJp_DbqQ.js";import"./computeTranslationToOriginAndRotation-Cc-Zr2Qi.js";import"./projectPointToVector-Bmpb6BAY.js";import"./projection-B6HHT9iG.js";import"./meshVertexSpaceUtils-BXu36Q1q.js";import"./vec3-0qhc16tK.js";import"./BufferView-DAkqhQk8.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-W7TjJvRT.js";function d(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};
