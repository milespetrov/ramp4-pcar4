import"./vec32-D3aOfXef.js";import"./main-CdsSyLmf.js";import{b as i}from"./sphere-EEZyHq1T.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./mat4-pIm5M4dy.js";import"./boundedPlane-WSFxJJS7.js";function y(t,l){return e(t)===e(l)}function e(t){if(t==null)return null;const l=t.layer!=null?t.layer.id:"";let r=null;return r=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,r==null?null:`o-${l}-${r}`}const j={json:{write:{writer:n,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:u}}}};function n(t,l){t?.layer?.objectIdField!=null&&t.attributes!=null&&(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function u(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}i();export{j as b,y as c};
