import{s as I,c9 as Q,ak as Z,al as A,aW as F,c8 as O,a8 as w}from"./main-BPeHLg3l.js";import{e as D,n as k,t as C}from"./featureConversionUtils-De1FQids.js";import{t as P,n as G}from"./objectIdUtils-EszJVKSV.js";import{m as W}from"./FeatureStore-CExXWGqo.js";import{x as E,j as _}from"./queryUtils-Cjkdlatp.js";import{V as $}from"./QueryEngine-B086PWBu.js";import{a as L,u as z,l as B}from"./clientSideDefaults-rTbc4Ao8.js";import{j as H,f as g,p as T,d as j,y as v}from"./sourceUtils-DRkE-UMG.js";import{Z as S}from"./FieldsIndex-Cg8Q5GJN.js";import{i as N}from"./fieldType-DJP77hfd.js";const U=O,V={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:O},J={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0}};function K(h){return w(h)?h.z!=null:!!h.hasZ}function X(h){return w(h)?h.m!=null:!!h.hasM}class Y{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const s=[],{features:a}=e,r=this._inferLayerProperties(a,e.fields),o=e.fields||[],u=e.hasM!=null?e.hasM:!!r.hasM,f=e.hasZ!=null?e.hasZ:!!r.hasZ,p=!e.spatialReference&&!r.spatialReference,d=p?U:e.spatialReference||r.spatialReference,m=p?V:null,y=e.geometryType||r.geometryType,l=!y;let t=e.objectIdField||r.objectIdField,n=e.timeInfo;const c=new S(o);if(!l&&(p&&s.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!y))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&t!==r.objectIdField&&(s.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),t=r.objectIdField),t&&!r.objectIdField){const i=c.get(t);i?(t=i.name,i.type="esriFieldTypeOID",i.editable=!1,i.nullable=!1):o.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const i of o){if(i.name==null&&(i.name=i.alias),i.alias==null&&(i.alias=i.name),!i.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:i});if(i.name===t&&(i.type="esriFieldTypeOID"),!N.jsonValues.includes(i.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${i.name}"`,{field:i});i.length==null&&(i.length=Q(i))}const b={};for(const i of o)if(i.type!=="esriFieldTypeOID"&&i.type!=="esriFieldTypeGlobalID"){const q=Z(i);q!==void 0&&(b[i.name]=q)}if(n){if(n.startTimeField){const i=c.get(n.startTimeField);i?(n.startTimeField=i.name,i.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const i=c.get(n.endTimeField);i?(n.endTimeField=i.name,i.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const i=c.get(n.trackIdField);i?n.trackIdField=i.name:(n.trackIdField=null,s.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(s.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:n}}),n=null)}const x=c.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??A}:null;this._createDefaultAttributes=L(b,t);const R={warnings:s,featureErrors:[],layerDefinition:{...J,drawingInfo:z(y),templates:B(b),extent:m,geometryType:y,objectIdField:t,fields:o,hasZ:f,hasM:u,timeInfo:n,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new $({fieldsIndex:S.fromLayerJSON({fields:o,timeInfo:n,dateFieldsTimeReference:x}),geometryType:y,hasM:u,hasZ:f,objectIdField:t,spatialReference:d,featureStore:new W({geometryType:y,hasM:u,hasZ:f}),timeInfo:n}),!a?.length)return this._nextObjectId=P,R;const M=G(t,a);return this._nextObjectId=M+1,await E(a,d),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:s,geometryType:a}=this._queryEngine;return await Promise.all([H(s,a),E(e.adds,s),E(e.updates,s)]),this._applyEdits(e)}queryFeatures(e,s={}){return this._queryEngine.executeQuery(e,s.signal)}queryFeatureCount(e,s={}){return this._queryEngine.executeQueryForCount(e,s.signal)}queryObjectIds(e,s={}){return this._queryEngine.executeQueryForIds(e,s.signal)}queryExtent(e,s={}){return this._queryEngine.executeQueryForExtent(e,s.signal)}querySnapping(e,s={}){return this._queryEngine.executeQueryForSnapping(e,s.signal)}_inferLayerProperties(e,s){let a,r,o=null,u=null,f=null;for(const p of e){const d=p.geometry;if(d!=null&&(o||(o=F(d)),u||(u=d.spatialReference),a==null&&(a=K(d)),r==null&&(r=X(d)),o&&u&&a!=null&&r!=null))break}if(s&&s.length){let p=null;s.some(d=>{const m=d.type==="esriFieldTypeOID",y=!d.type&&d.name&&d.name.toLowerCase()==="objectid";return p=d,m||y})&&(f=p.name)}return{geometryType:o,spatialReference:u,objectIdField:f,hasM:r,hasZ:a}}async _loadInitialFeatures(e,s){const{geometryType:a,hasM:r,hasZ:o,objectIdField:u,spatialReference:f,featureStore:p,fieldsIndex:d}=this._queryEngine,m=[];for(const t of s){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==F(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const n=this._createDefaultAttributes(),c=T(d,n,t.attributes,!0);c?e.featureErrors.push(c):(this._assignObjectId(n,t.attributes,!0),t.attributes=n,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[u]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,f)),m.push(t))}p.addMany(D([],m,a,o,r,u));const{fullExtent:y,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=y,l){const{start:t,end:n}=l;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:s,updates:a,deletes:r}=e,o={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(s?.length&&this._applyAddEdits(o,s),a?.length&&this._applyUpdateEdits(o,a),r?.length){for(const p of r)o.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(r)}const{fullExtent:u,timeExtent:f}=await this._queryEngine.fetchRecomputedExtents();return{extent:u,timeExtent:f,featureEditResults:o}}_applyAddEdits(e,s){const{addResults:a}=e,{geometryType:r,hasM:o,hasZ:u,objectIdField:f,spatialReference:p,featureStore:d,fieldsIndex:m}=this._queryEngine,y=[];for(const l of s){if(l.geometry&&r!==F(l.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=T(m,t,l.attributes);if(n)a.push(n);else{if(this._assignObjectId(t,l.attributes),l.attributes=t,l.uid!=null){const c=l.attributes[f];e.uidToObjectId[l.uid]=c}if(l.geometry!=null){const c=l.geometry.spatialReference??p;l.geometry=_(v(l.geometry,c),c,p)}y.push(l),a.push(j(l.attributes[f]))}}d.addMany(D([],y,r,u,o,f))}_applyUpdateEdits({updateResults:e},s){const{geometryType:a,hasM:r,hasZ:o,objectIdField:u,spatialReference:f,featureStore:p,fieldsIndex:d}=this._queryEngine;for(const m of s){const{attributes:y,geometry:l}=m,t=y?.[u];if(t==null){e.push(g(`Identifier field ${u} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const n=k(p.getFeature(t),a,o,r);if(l!=null){if(a!==F(l)){e.push(g("Incorrect geometry type."));continue}const c=l.spatialReference??f;n.geometry=_(v(l,c),c,f)}if(y){const c=T(d,n.attributes,y);if(c){e.push(c);continue}}p.add(C(n,a,o,r,u)),e.push(j(t))}}_assignObjectId(e,s,a=!1){const r=this._queryEngine.objectIdField;a&&s&&isFinite(s[r])?e[r]=s[r]:e[r]=this._nextObjectId++}}export{Y as default};
