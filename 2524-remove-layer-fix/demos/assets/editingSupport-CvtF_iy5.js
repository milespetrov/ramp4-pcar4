import{aO as I,h as $,s as n,d2 as v,d3 as w,n as E,aW as S,V as R,b3 as O,d4 as k,cN as L,bj as U,ce as m,cO as j}from"./main-CFpM9i38.js";import{r as T}from"./uuid-Cl5lrJ4c.js";import{R as B}from"./normalizeUtils-DSjrhV6I.js";import{p as G,c as V}from"./EditBusLayer-B9XQPh7n.js";import{f as W}from"./infoFor3D-_5f2f6Um.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtilsCommon-CDOijakI.js";import"./utils-OYqyAMOQ.js";import"./utils-CdsRgP19.js";function F(e){return e?.applyEdits!=null}function z(e){return typeof e=="object"&&e!=null&&"objectId"in e&&!!e.objectId}function ne(e){return e.every(z)}function D(e){return typeof e=="object"&&e!=null&&"globalId"in e&&!!e.globalId}function oe(e){return e.every(D)}async function de(e,t,r,a={}){let s;const d="gdbVersion"in e?e.gdbVersion:null,p=a.gdbVersion??d;if(G(e)&&e.url)s=V(e.url,e.layerId,p,a.returnServiceEditsOption==="original-and-current-features");else{s=I(),s.promise.then(o=>{(o.addedFeatures.length||o.updatedFeatures.length||o.deletedFeatures.length||o.addedAttachments.length||o.updatedAttachments.length||o.deletedAttachments.length)&&e.emit("edits",o)});const i={result:s.promise};e.emit("apply-edits",i)}try{const{results:i,edits:o}=await M(e,t,r,a),u=l=>l.filter(h=>!h.error).map($),c={edits:o,addedFeatures:u(i.addFeatureResults),updatedFeatures:u(i.updateFeatureResults),deletedFeatures:u(i.deleteFeatureResults),addedAttachments:u(i.addAttachmentResults),updatedAttachments:u(i.updateAttachmentResults),deletedAttachments:u(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:a.globalIdToObjectId};return i.editedFeatureResults?.length&&(c.editedFeatures=i.editedFeatureResults),s.resolve(c),i}catch(i){throw s.reject(i),i}}async function M(e,t,r,a){if(await e.load(),!F(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!v(e))throw new n(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:s,options:d}=await x(e,r,a);return s.addFeatures?.length||s.updateFeatures?.length||s.deleteFeatures?.length||s.addAttachments?.length||s.updateAttachments?.length||s.deleteAttachments?.length?{edits:s,results:await t.applyEdits(s,d)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function x(e,t,r){const a=w(e),s=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),p=e.infoFor3D!=null;if(H(t,a,r,!!s,!!d,`${e.type}-layer`),!a.data.isVersioned&&r?.gdbVersion)throw new n(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!a.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const i={...r};if(i.rollbackOnFailureEnabled!=null||a.editing.supportsRollbackOnFailure||(i.rollbackOnFailureEnabled=!0),i.rollbackOnFailureEnabled||i.returnServiceEditsOption!=="original-and-current-features"||(i.rollbackOnFailureEnabled===!1&&E.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),i.rollbackOnFailureEnabled=!0),!a.editing.supportsReturnServiceEditsInSourceSpatialReference&&i.returnServiceEditsInSourceSR)throw new n(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(i.returnServiceEditsInSourceSR&&i.returnServiceEditsOption!=="original-and-current-features")throw new n(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const o=X(t,a,`${e.type}-layer`),u=r?.globalIdUsed||p,c=e.fields.filter(l=>l.type==="big-integer"||l.type==="oid"&&(l.length||0)>=8);if(u){const{globalIdField:l}=e;if(l==null)throw new n(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");o.addFeatures.forEach(h=>Z(h,l))}return o.addFeatures.forEach(l=>C(l,e,u,c)),o.updateFeatures.forEach(l=>N(l,e,u,c)),o.deleteFeatures.forEach(l=>q(l,e,u,c)),o.addAttachments.forEach(l=>y(l,e)),o.updateAttachments.forEach(l=>y(l,e)),p&&await J(o,e),{edits:await _(o),options:i}}function f(e,t,r,a){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(a.length&&"attributes"in e)for(const s of a){const d=e.attributes[s.name];if(d!==void 0&&!k(s,d))throw new n(`${t.type}-layer:invalid-parameter`,`Big-integer field '${s.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&e.geometry!=null){if(e.geometry.hasZ&&t.capabilities?.data.supportsZ===!1)throw new n(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&t.capabilities?.data.supportsM===!1)throw new n(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function A(e,t){if("geometry"in e&&e.geometry?.type==="mesh"&&t.infoFor3D!=null&&t.spatialReference!=null){const{geometry:r}=e,{spatialReference:a,vertexSpace:s}=r,d=t.spatialReference,p=s.type==="local",i=L(d),o=U(d,a),u=o||m(d)&&(m(a)||j(a));if(!(p&&i&&u||!p&&!i&&o))throw new n(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${s.type} vertex space and a spatial reference wkid:${a.wkid} to a layer with a spatial reference wkid:${d.wkid} is not supported.`)}}function C(e,t,r,a){f(e,t,r,a),A(e,t)}function q(e,t,r,a){f(e,t,r,a)}function N(e,t,r,a){f(e,t,r,a),A(e,t);const s=w(t);if("geometry"in e&&e.geometry!=null&&!s?.editing.supportsGeometryUpdate)throw new n(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function y(e,t){const{feature:r,attachment:a}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!a.globalId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!a.data&&!a.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(a.data instanceof File&&a.data.name)&&!a.name)throw new n(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&a.uploadId)throw new n(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if(typeof a.data=="string"){const s=S(a.data);if(s&&!s.isBase64)throw new n(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function Z(e,t){const{attributes:r}=e;r[t]==null&&(r[t]=T())}async function _(e){const t=e.addFeatures??[],r=e.updateFeatures??[],a=t.concat(r).map(i=>i.geometry),s=await B(a),d=t.length,p=r.length;return s.slice(0,d).forEach((i,o)=>t[o].geometry=i),s.slice(d,d+p).forEach((i,o)=>r[o].geometry=i),e}function P(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&R.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function X(e,t,r){const a=P(e);if(a.addFeatures?.length&&!t.operations.supportsAdd)throw new n(`${r}:unsupported-operation`,"Layer does not support adding features.");if(a.updateFeatures?.length&&!t.operations.supportsUpdate)throw new n(`${r}:unsupported-operation`,"Layer does not support updating features.");if(a.deleteFeatures?.length&&!t.operations.supportsDelete)throw new n(`${r}:unsupported-operation`,"Layer does not support deleting features.");return a.addFeatures=a.addFeatures.map(g),a.updateFeatures=a.updateFeatures.map(g),a.addAssetFeatures=[],a}function H(e,t,r,a,s,d){if(!e||!a&&!s)throw new n(`${d}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new n(`${d}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n(`${d}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&s)throw new n(`${d}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function g(e){const t=new O;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}async function J(e,t){const{infoFor3D:r}=t;if(r==null)return;if(!W(r))throw new n(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:a}=e;for(const s of e.addFeatures??[])b(s)&&a.push(s);for(const s of e.updateFeatures??[])b(s)&&a.push(s)}function b(e){return e?.geometry?.type==="mesh"}function le(e,t,r,a){if(!F(t))throw new n(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,a)}export{de as applyEdits,H as checkEditingCapabilities,oe as isFeatureIdentifierArrayWithGlobalId,ne as isFeatureIdentifierArrayWithObjectId,D as isFeatureIdentifierWithGlobalId,z as isFeatureIdentifierWithObjectId,P as normalizeCollections,X as normalizeEdits,_ as normalizeGeometries,g as shallowCloneFeature,le as uploadAssets};
