import{s as I,cc as Q,am as Z,an as A,aY as b,cb as S,aa as v}from"./main-BGj2Vmyg.js";import{e as O,n as C,t as $}from"./featureConversionUtils-BUHk7l3T.js";import{t as k,n as P}from"./objectIdUtils-BmFjqQA3.js";import{m as G}from"./FeatureStore-Dc_hqNjW.js";import{x as E,j as _}from"./queryUtils-Chbvf1YC.js";import{V as L}from"./QueryEngine-CPFLGxlP.js";import{a as W,u as z,l as H}from"./clientSideDefaults-SDMiMnLU.js";import{j as U,f as g,p as T,d as j,y as w}from"./sourceUtils-CN-vRaHp.js";import{Z as D}from"./FieldsIndex-CECew3dZ.js";import{i as B}from"./fieldType-sLYa_9iX.js";import"./preload-helper-ExcqyqRp.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-DcTivyWZ.js";import"./PooledRBush-h96_B33N.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-DAD9vlgT.js";import"./optimizedFeatureQueryEngineAdapter-B7hND030.js";import"./projection-DadsGrbR.js";import"./projectBuffer-Br_Qcvde.js";import"./normalizeUtils-DK_KPKbR.js";import"./normalizeUtilsCommon-DfFmDnqc.js";import"./utils-B4IF5dtK.js";import"./utils-CmX58Wwu.js";import"./json-Wa8cmqdu.js";import"./LRUCache-B-gdAREP.js";import"./WhereClause-C2uXp0mH.js";import"./TimeOnly-e2WPpEqu.js";import"./UnknownTimeZone-D-G2toWx.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-CT6OXUkG.js";import"./utils-CrOrJLgC.js";import"./TimeExtent-BdbMsmac.js";import"./heatmapUtils-1oBFLmZp.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-5QW4iG87.js";import"./Basemap-CswtVP6N.js";import"./loadAll-Co19c1Pf.js";import"./PortalItem-BB4_ludu.js";import"./writeUtils-Cej_Eixa.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BuXnPPlc.js";import"./utils-CWWZI85d.js";import"./ClassBreaksDefinition-DIDzt224.js";import"./Scheduler-LJwFCXyp.js";import"./signal-CZ4tLzmI.js";import"./capabilities-Y9lFlGVh.js";import"./date-Dw3OHnFv.js";const N=S,V={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},J={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0,supportsQueryWithCacheHint:!0}};function K(h){return v(h)?h.z!=null:!!h.hasZ}function Y(h){return v(h)?h.m!=null:!!h.hasM}class Ve{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const r=[],{features:a}=e,n=this._inferLayerProperties(a,e.fields),l=e.fields||[],d=e.hasM!=null?e.hasM:!!n.hasM,c=e.hasZ!=null?e.hasZ:!!n.hasZ,p=!e.spatialReference&&!n.spatialReference,u=p?N:e.spatialReference||n.spatialReference,y=p?V:null,f=e.geometryType||n.geometryType,o=!f;let t=e.objectIdField||n.objectIdField,s=e.timeInfo;const m=new D(l);if(!o&&(p&&r.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!f))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(n.objectIdField&&t!==n.objectIdField&&(r.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${n.objectIdField}", found in the provided fields`}),t=n.objectIdField),t&&!n.objectIdField){const i=m.get(t);i?(t=i.name,i.type="esriFieldTypeOID",i.editable=!1,i.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const i of l){if(i.name==null&&(i.name=i.alias),i.alias==null&&(i.alias=i.name),!i.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:i});if(i.name===t&&(i.type="esriFieldTypeOID"),!B.jsonValues.includes(i.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${i.name}"`,{field:i});i.length==null&&(i.length=Q(i))}const F={};for(const i of l)if(i.type!=="esriFieldTypeOID"&&i.type!=="esriFieldTypeGlobalID"){const q=Z(i);q!==void 0&&(F[i.name]=q)}if(s){if(s.startTimeField){const i=m.get(s.startTimeField);i?(s.startTimeField=i.name,i.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const i=m.get(s.endTimeField);i?(s.endTimeField=i.name,i.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const i=m.get(s.trackIdField);i?s.trackIdField=i.name:(s.trackIdField=null,r.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(r.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:s}}),s=null)}const x=m.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??A}:null;this._createDefaultAttributes=W(F,t);const R={warnings:r,featureErrors:[],layerDefinition:{...J,drawingInfo:z(f),templates:H(F),extent:y,geometryType:f,objectIdField:t,fields:l,hasZ:c,hasM:d,timeInfo:s,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new L({fieldsIndex:D.fromLayerJSON({fields:l,timeInfo:s,dateFieldsTimeReference:x}),geometryType:f,hasM:d,hasZ:c,objectIdField:t,spatialReference:u,featureStore:new G({geometryType:f,hasM:d,hasZ:c}),timeInfo:s}),!a?.length)return this._nextObjectId=k,R;const M=P(t,a);return this._nextObjectId=M+1,await E(a,u),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:r,geometryType:a}=this._queryEngine;return await Promise.all([U(r,a),E(e.adds,r),E(e.updates,r)]),this._applyEdits(e)}queryFeatures(e,r={}){return this._queryEngine.executeQuery(e,r.signal)}queryFeatureCount(e,r={}){return this._queryEngine.executeQueryForCount(e,r.signal)}queryObjectIds(e,r={}){return this._queryEngine.executeQueryForIds(e,r.signal)}queryExtent(e,r={}){return this._queryEngine.executeQueryForExtent(e,r.signal)}querySnapping(e,r={}){return this._queryEngine.executeQueryForSnapping(e,r.signal)}_inferLayerProperties(e,r){let a,n,l=null,d=null,c=null;for(const p of e){const u=p.geometry;if(u!=null&&(l||(l=b(u)),d||(d=u.spatialReference),a==null&&(a=K(u)),n==null&&(n=Y(u)),l&&d&&a!=null&&n!=null))break}if(r&&r.length){let p=null;r.some(u=>{const y=u.type==="esriFieldTypeOID",f=!u.type&&u.name&&u.name.toLowerCase()==="objectid";return p=u,y||f})&&(c=p.name)}return{geometryType:l,spatialReference:d,objectIdField:c,hasM:n,hasZ:a}}async _loadInitialFeatures(e,r){const{geometryType:a,hasM:n,hasZ:l,objectIdField:d,spatialReference:c,featureStore:p,fieldsIndex:u}=this._queryEngine,y=[];for(const t of r){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==b(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const s=this._createDefaultAttributes(),m=T(u,s,t.attributes,!0);m?e.featureErrors.push(m):(this._assignObjectId(s,t.attributes,!0),t.attributes=s,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[d]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,c)),y.push(t))}p.addMany(O([],y,a,l,n,d));const{fullExtent:f,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=f,o){const{start:t,end:s}=o;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:r,updates:a,deletes:n}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(r?.length&&this._applyAddEdits(l,r),a?.length&&this._applyUpdateEdits(l,a),n?.length){for(const p of n)l.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(n)}const{fullExtent:d,timeExtent:c}=await this._queryEngine.fetchRecomputedExtents();return{extent:d,timeExtent:c,featureEditResults:l}}_applyAddEdits(e,r){const{addResults:a}=e,{geometryType:n,hasM:l,hasZ:d,objectIdField:c,spatialReference:p,featureStore:u,fieldsIndex:y}=this._queryEngine,f=[];for(const o of r){if(o.geometry&&n!==b(o.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=T(y,t,o.attributes);if(s)a.push(s);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,o.uid!=null){const m=o.attributes[c];e.uidToObjectId[o.uid]=m}if(o.geometry!=null){const m=o.geometry.spatialReference??p;o.geometry=_(w(o.geometry,m),m,p)}f.push(o),a.push(j(o.attributes[c]))}}u.addMany(O([],f,n,d,l,c))}_applyUpdateEdits({updateResults:e},r){const{geometryType:a,hasM:n,hasZ:l,objectIdField:d,spatialReference:c,featureStore:p,fieldsIndex:u}=this._queryEngine;for(const y of r){const{attributes:f,geometry:o}=y,t=f?.[d];if(t==null){e.push(g(`Identifier field ${d} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const s=C(p.getFeature(t),a,l,n);if(o!=null){if(a!==b(o)){e.push(g("Incorrect geometry type."));continue}const m=o.spatialReference??c;s.geometry=_(w(o,m),m,c)}if(f){const m=T(u,s.attributes,f);if(m){e.push(m);continue}}p.add($(s,a,l,n,d)),e.push(j(t))}}_assignObjectId(e,r,a=!1){const n=this._queryEngine.objectIdField;a&&r&&isFinite(r[n])?e[n]=r[n]:e[n]=this._nextObjectId++}}export{Ve as default};
