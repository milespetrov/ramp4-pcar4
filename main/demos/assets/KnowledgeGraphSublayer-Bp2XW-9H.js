import { dn as ot, eZ as y, dv as e$1, s as s$3, U, cu as r$1, bd as e$2, be as y$1, bf as a, e6 as S, G as n$1, fo as b$1, dU as N, dh as g, bs as K, a_ as w$2, kC as e$3, aX as j, gP as s$4, gz as c, gA as c$1, e7 as l$1, gy as p$2, gB as l$2, eb as t$1, e8 as f, ec as S$1, kD as E$1, dV as y$2, dW as o$1, gC as p$3, bn as t$2, bA as f$1, gE as p$4, bl as d$1, aY as m$1, P as a$1, kE as s$5, kF as a$2, kG as p$5, kH as p$6, gG as l$4, gH as C, gI as l$5, ef as y$3, h4 as j$1, h5 as u, gJ as w$3, kI as c$2, gK as s$6, bm as k, gL as m$2, eL as r$2, kJ as f$2, eJ as e$4, em as f$3 } from './main-ZcwzHdcj.js';
import { m } from './FeatureStore-Dj9fZ3CG.js';
import { $ } from './QueryEngine-Cixqh9Ux.js';
import { l as l$3, o as o$2 } from './clientSideDefaults-GtDzWdYB.js';
import { T as T$4, r } from './knowledgeGraphService-CVy98Lz3.js';
import { s as s$2 } from './GraphQueryStreaming-Cfxou_3E.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const i="ESRI__DESTINATION_ID",s$1="ESRI__ORIGIN_ID";class o{constructor(){this._featureLookup=new Map;}static getInstance(){return o.instance||(o.instance=new o),o.instance}static resetInstance(){o.instance&&(o.instance=null);}deleteFromStore(e){e.forEach((e=>{this._featureLookup.delete(e);}));}readFromStoreByList(e){const t=[];return e.forEach((e=>{const r=this.readFromStoreById(e);r&&t.push(r);})),t}readFromStoreById(e){return this._featureLookup.get(e)??null}writeToStore(o,n,p){const a=[];return o.forEach((o=>{if(!o?.id)return;o.properties||(o.properties=[]);let u,c=null;if(p&&o.properties[p]&&(c=ot(o.properties[p])),"originId"in o&&"destinationId"in o&&(o.properties[s$1]=o.originId,o.properties[i]=o.destinationId),o.properties[n]=o.id,o.id&&this._featureLookup.has(o.id)&&this._featureLookup.get(o.id).attributes){const e=this._featureLookup.get(o.id),i=JSON.parse(JSON.stringify(Object.assign(e.attributes,o.properties)));p&&o.properties[p]&&(i[p]=y(o.properties[p])),u=new e$1(c?JSON.parse(JSON.stringify(c)):e?.geometry?JSON.parse(JSON.stringify(e.geometry)):null,i,null,o.properties[n]);}else u=new e$1(c?JSON.parse(JSON.stringify(c)):null,o.properties,null,o.properties[n]);this._featureLookup.set(o.id,u),a.push(u);})),a}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var T$3;!function(s){s.ELEMENTUID="ELEMENTUID",s.TYPENAME="TYPENAME";}(T$3||(T$3={}));[T$3.ELEMENTUID,T$3.TYPENAME];var d,p$1;!function(s){s[s.ELEMENTUID=0]="ELEMENTUID",s[s.TYPENAME=1]="TYPENAME";}(d||(d={})),function(s){s[s.ELEMENTUID=0]="ELEMENTUID",s[s.TYPENAME=1]="TYPENAME",s[s.FROMUID=2]="FROMUID",s[s.TOUID=3]="TOUID";}(p$1||(p$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var e,l,s,T$2;!function(e){e[e.featureResult=0]="featureResult",e[e.countResult=1]="countResult",e[e.idsResult=2]="idsResult";}(e||(e={})),function(e){e[e.upperLeft=0]="upperLeft",e[e.lowerLeft=1]="lowerLeft";}(l||(l={})),function(e){e[e.sqlTypeBigInt=0]="sqlTypeBigInt",e[e.sqlTypeBinary=1]="sqlTypeBinary",e[e.sqlTypeBit=2]="sqlTypeBit",e[e.sqlTypeChar=3]="sqlTypeChar",e[e.sqlTypeDate=4]="sqlTypeDate",e[e.sqlTypeDecimal=5]="sqlTypeDecimal",e[e.sqlTypeDouble=6]="sqlTypeDouble",e[e.sqlTypeFloat=7]="sqlTypeFloat",e[e.sqlTypeGeometry=8]="sqlTypeGeometry",e[e.sqlTypeGUID=9]="sqlTypeGUID",e[e.sqlTypeInteger=10]="sqlTypeInteger",e[e.sqlTypeLongNVarchar=11]="sqlTypeLongNVarchar",e[e.sqlTypeLongVarbinary=12]="sqlTypeLongVarbinary",e[e.sqlTypeLongVarchar=13]="sqlTypeLongVarchar",e[e.sqlTypeNChar=14]="sqlTypeNChar",e[e.sqlTypeNVarChar=15]="sqlTypeNVarChar",e[e.sqlTypeOther=16]="sqlTypeOther",e[e.sqlTypeReal=17]="sqlTypeReal",e[e.sqlTypeSmallInt=18]="sqlTypeSmallInt",e[e.sqlTypeSqlXml=19]="sqlTypeSqlXml",e[e.sqlTypeTime=20]="sqlTypeTime",e[e.sqlTypeTimestamp=21]="sqlTypeTimestamp",e[e.sqlTypeTimestamp2=22]="sqlTypeTimestamp2",e[e.sqlTypeTinyInt=23]="sqlTypeTinyInt",e[e.sqlTypeVarbinary=24]="sqlTypeVarbinary",e[e.sqlTypeVarchar=25]="sqlTypeVarchar";}(s||(s={})),function(e){e[e.OID_ARRAY=0]="OID_ARRAY",e[e.GLOBALID_ARRAY=1]="GLOBALID_ARRAY",e[e.STRING_ARRAY=2]="STRING_ARRAY",e[e.IDENTIFIER_ARRAY=3]="IDENTIFIER_ARRAY";}(T$2||(T$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function w$1(e){if(!e.spatialReference.isWGS84)throw new s$3("knowledge-graph:layer-support-utils","The extentToInBoundsRings function only supports WGS84 spatial references.");return e.clone().normalize().map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}async function h(e,t){const r=[],n=new Map,s=[];if(t.dataModel?.relationshipTypes)for(const i of t.dataModel.relationshipTypes)i.name&&n.set(i.name,[]);for(const i of e)n.has(i.typeName)&&n.get(i.typeName)?.push(i.id);for(const[o,l]of n){if(l.length<1)continue;const e=new s$2({openCypherQuery:`MATCH (n)-[r:${o}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`,bindParameters:{ids:l}});s.push(T$4(t,e).then((async e=>{const t=e.resultRowsStream.getReader();for(;;){const{done:e,value:n}=await t.read();if(e)break;for(const t of n)r.push({id:t[0],typeName:t[1]}),r.push({id:t[2],typeName:t[3]});}})));}return await Promise.all(s),r}async function T$1(e,t){t??=!1;const r={generateAllSublayers:t,namedTypeDefinitions:new Map};return await I$1(e).then((e=>{D$1(e,r);})),r}async function E(e){const r$1=await r(),n=new r$1.MapOfObjectIdentifierSets;M$1(n,r$1,e);const s=new r$1.MapOfObjectIdentifierSetsEncoder;try{s.set_map_of_identifier_sets(n),s.encode();const e=s.get_encoding_result();if(0!==e.error.error_code)throw new s$3("knowledge-graph:layer-support-utils",e.error.error_message);const r=structuredClone(e.get_byte_buffer());return s.delete(),r}finally{n.delete();}}function M$1(e,t,r){for(const[n,s]of r.namedTypeDefinitions){if(!s.members||s.useAllData)continue;const r=s.members.keys(),i=new t.GlobalIdArray,a=new t.ObjectIdentifierSet;for(const e of r)i.add_globalid(e);a.set_globalid_array(i),i.delete(),e.put_identifier_set(n,a),a.delete();}return e}async function I$1(t){const r=await U(t,{responseType:"array-buffer"}),n=await r.data;return A(new Uint8Array(n))}async function A(e){const r$1=new((await r()).MapOfObjectIdentifierSetsDecoder),n=r$1.decode(new Uint8Array(e)),s=new Map;if(0!==n.error_code)throw new s$3("knowledge-graph:layer-support-utils",n.error_message);const i=r$1.get_map_of_identifier_sets(),a=i.keys,o=a.size();for(let l=0;l<o;l++){const e=a.get(l),r=i.query_identifier_set(e),n=[];if(r.id_array_type.value===T$2.GLOBALID_ARRAY){const e=r.get_globalid_array(),t=e.count();for(let r=0;r<t;r++)n.push(e.get_globalid_at(r));}else {if(r.id_array_type.value!==T$2.IDENTIFIER_ARRAY)throw new s$3("knowledge-graph:layer-support-utils","Tried to encode an unexpected ID Array type.");{const e=r.get_identifier_array(),t=e.count();for(let r=0;r<t;r++)n.push(e.get_identifier_at(r).toString());}}s.set(e,n);}return r$1.delete(),s}function D$1(e,t){for(const[n,s]of e){const e=r$1(t.namedTypeDefinitions,n,(()=>({useAllData:!1,members:new Map})));for(const t of s)e.members.has(t)||e.members.set(t,{id:t});}return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const w="ESRI__ID",b="ESRI__ORIGIN_ID",T="ESRI__DESTINATION_ID",D="ESRI__LAYOUT_GEOMETRY",I="ESRI__AGGREGATION_COUNT";let M=class extends S{constructor(e){super(e),this._processingCacheUpdatesLookup=new Map,this.knowledgeGraph=null,this.inclusionModeDefinition={generateAllSublayers:!0,namedTypeDefinitions:new Map},this.entityTypeNames=new Set,this.relationshipTypeNames=new Set,this.geographicLookup=new Map,this.sublayerCaches=new Map,this.nodeConnectionsLookup=new Map,this.relationshipConnectionsLookup=new Map,this.memberIdTypeLookup=new Map;const t=new Map;e.knowledgeGraph.dataModel.entityTypes?.forEach((i=>{i.name&&(t.set(i.name,"entity"),this._processingCacheUpdatesLookup.set(i.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.entityTypeNames.add(i.name),i.properties?.forEach((e=>{e.geometryType&&"esriGeometryNull"!==e.geometryType&&this.geographicLookup.set(i.name,{name:e.name??"",geometryType:e.geometryType});})));})),e.knowledgeGraph.dataModel.relationshipTypes?.forEach((i=>{i.name&&(t.set(i.name,"relationship"),this._processingCacheUpdatesLookup.set(i.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.relationshipTypeNames.add(i.name),i.properties?.forEach((e=>{e.geometryType&&"esriGeometryNull"!==e.geometryType&&this.geographicLookup.set(i.name,{name:e.name??"",geometryType:e.geometryType});})));})),e.inclusionModeDefinition?.namedTypeDefinitions.forEach(((i,s)=>{if("entity"===t.get(s))this.entityTypeNames.add(s);else {if("relationship"!==t.get(s))return n$1.getLogger(this).warn(`A named type, ${s}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(s);this.relationshipTypeNames.add(s);}const r=new Map;i.members?.forEach((e=>{r$1(this.memberIdTypeLookup,e.id,(()=>new Set)).add(s);const t=this.getById(e.id);t&&r.set(e.id,t);})),this.sublayerCaches.set(s,r);}));}addToLayer(e){e.forEach((({typeName:e,id:t})=>{if(!this.inclusionModeDefinition)throw new s$3("knowledge-graph:layer-data-manager","You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");if(this.inclusionModeDefinition.namedTypeDefinitions.has(e)){if(this.inclusionModeDefinition.namedTypeDefinitions.has(e)){const i=this.inclusionModeDefinition.namedTypeDefinitions.get(e);i.members||(i.members=new Map),i.members.set(t,{id:t}),r$1(this.memberIdTypeLookup,t,(()=>new Set)).add(e);}}else {const i=new Map;i.set(t,{id:t}),this.inclusionModeDefinition.namedTypeDefinitions.set(e,{useAllData:!1,members:i}),r$1(this.memberIdTypeLookup,t,(()=>new Set)).add(e);}}));}getById(e){return o.getInstance().readFromStoreById(e)}async getData(e,t,i){if(t.objectType.name&&this.inclusionModeDefinition?.namedTypeDefinitions&&this.inclusionModeDefinition.namedTypeDefinitions.size>0&&!this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name))return [];let n;if(n=e||new b$1({where:"1=1",outFields:["*"]}),"link-chart"===t.parentCompositeLayer.type){const e=t.parentCompositeLayer,i=this._processingCacheUpdatesLookup.get(t.objectType.name??""),o=n.outFields;o&&1===o.length&&o[0]===w&&"1=1"===n.where||await Promise.all(i??[]);const s=this.sublayerCaches.has(t.objectType.name??"")?Array.from(this.sublayerCaches.get(t.objectType.name)?.values()):[],r=[];return s.forEach((i=>{this.relationshipTypeNames.has(t.objectType.name)?i.geometry=e.relationshipLinkChartDiagramLookup.get(i.attributes[t.objectIdField]):i.geometry=e.entityLinkChartDiagramLookup.get(i.attributes[t.objectIdField]),i.attributes[D]=i.geometry,r.push(i);})),r}return this.retrieveDataFromService(n,t,i)}async getConnectedRecordIds(e,t){const i=[];let o="";const s=[],r=new Map;if(e.forEach((e=>{if(this.memberIdTypeLookup.has(e))for(const t of this.memberIdTypeLookup.get(e)){if(!this.entityTypeNames.has(t))return;r.has(t)?r.get(t)?.push(e):r.set(t,[e]);}})),t&&0!==t?.length){for(const e of t)o=o+e+"|";o=o.slice(0,-1);}return r.forEach(((e,r)=>{let a;a=t&&0!==t?.length?`MATCH (n:${r})-[r:${o}]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`:`MATCH (n:${r})-[r]-(m) WHERE id(n) IN $ids RETURN id(r), type(r), id(m), labels(m)[0]`;const p=new Promise((t=>{(async()=>{const t=(await T$4(this.knowledgeGraph,new s$2({openCypherQuery:a,bindParameters:{ids:e}}))).resultRowsStream.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;for(let t=0;t<n.length;t++){const e=n[t];i.push({id:e[0],typeName:e[1]}),i.push({id:e[2],typeName:e[3]});}}}catch(o){if("AbortError"!==o.name)throw o;n$1.getLogger(this).info("Request aborted as expected");}})().then((()=>{t();}));}));s.push(p);})),this.refreshCacheContent(),await Promise.all(s),i}async getAttachedRelationships(e,t){const i=[],o="MATCH (n)-[r]->(m) WHERE id(n) IN $nodeIds AND id(m) in $nodeIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)",s=(await T$4(this.knowledgeGraph,new s$2({openCypherQuery:o,bindParameters:{nodeIds:e,relationshipExclusionIds:t}}))).resultRowsStream.getReader();try{for(;;){const{done:e,value:t}=await s.read();if(e)break;for(let n=0;n<t.length;n++){const e=t[n];i.push({id:e[0],typeName:e[1]});}}}catch(r){if("AbortError"!==r.name)throw r;n$1.getLogger(this).info("Request aborted as expected");}return i}async refreshCacheContent(e,t,n,s=!0){const r=o.getInstance(),a=[],p=new Map,d=new Map;this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&d.set(e.name,e);})),this.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&d.set(e.name,e);})),e||this.inclusionModeDefinition?e?e.forEach((e=>{if(this.memberIdTypeLookup.has(e))for(const t of this.memberIdTypeLookup.get(e))p.has(t)?p.get(t)?.push(e):p.set(t,[e]);})):this.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{e.useAllData?p.set(t,null):e.members&&e.members.forEach((e=>{p.has(t)&&null!==p.get(t)?p.get(t)?.push(e.id):p.set(t,[e.id]);}));})):(this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&p.set(e.name,null);})),this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&p.set(e.name,null);})));for(const[m,l]of p){const e=new Promise((e=>{const a=async()=>{const e=new Set,a=[];let p,h="",c=!1;if(t||d.get(m)?.properties?.forEach((t=>{t.name&&e.add(t.name);})),n&&this.geographicLookup.has(m)){const t=this.geographicLookup.get(m)?.name;t&&e.add(t);}if(this.entityTypeNames.has(m))h=`MATCH (n:${m}) ${l?"WHERE id(n) IN $ids ":""}return ID(n)`,e.forEach((e=>{h+=`, n.${e}`,a.push(e);}));else {if(!this.relationshipTypeNames.has(m))throw new s$3("knowledge-graph:layer-data-manager",`The graph type of ${m} could not be determined. Was this type set in the KG data model and inclusion definition?`);c=!0,h=`MATCH ()-[n:${m}]->() ${l?"WHERE id(n) IN $ids ":""}return ID(n), id(startNode(n)), id(endNode(n))`,e.forEach((e=>{h+=`, n.${e}`,a.push(e);}));}p=new s$2(l?{openCypherQuery:h,bindParameters:{ids:l}}:{openCypherQuery:h});const f=(await T$4(this.knowledgeGraph,p)).resultRowsStream.getReader();for(;;){const{done:e,value:t}=await f.read();if(e)break;const i=[];for(let s=0;s<t.length;s++){const e=t[s];let n=0,r=0;const p={properties:{}};for(p.id=e[n],n++,r++,c&&(p.originId=e[n],n++,r++,p.destinationId=e[n],n++,r++,r$1(this.nodeConnectionsLookup,p.originId,(()=>new Set)).add(p.id),r$1(this.nodeConnectionsLookup,p.destinationId,(()=>new Set)).add(p.id),r$1(this.relationshipConnectionsLookup,p.id,(()=>[p.originId,p.destinationId])));n<e.length;n++)p.properties[a[n-r]]=e[n];i.push(p);}const n=r.writeToStore(i,w,this.geographicLookup.get(m)?.name);this.sublayerCaches.has(m)||this.sublayerCaches.set(m,new Map),s&&!this.inclusionModeDefinition?.namedTypeDefinitions.has(m)&&this.inclusionModeDefinition?.namedTypeDefinitions.set(m,{useAllData:!1,members:new Map}),s&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(m).members&&(this.inclusionModeDefinition.namedTypeDefinitions.get(m).members=new Map);const p=this.sublayerCaches.get(m);n.forEach((e=>{p?.set(e.attributes[w],e),s&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(m).members.has(e.attributes[w])&&(this.inclusionModeDefinition?.namedTypeDefinitions.get(m).members.set(e.attributes[w],{id:e.attributes[w]}),r$1(this.memberIdTypeLookup,e.attributes[w],(()=>new Set)).add(m));}));}};a().then((()=>{e(null);}));}));a.push(e),this._processingCacheUpdatesLookup.get(m)?.push(e);}await Promise.all(a);}removeFromLayer(e){const t=new Set,i=new Set(e.map((e=>e.id)));for(const n of e)t.add(n.typeName),1===this.memberIdTypeLookup.get(n.id)?.size?this.memberIdTypeLookup.delete(n.id):this.memberIdTypeLookup.get(n.id)?.delete(n.typeName),this.inclusionModeDefinition?.namedTypeDefinitions.forEach(((e,t)=>{t===n.typeName&&e.members?.has(n.id)&&e.members.delete(n.id);}));t.forEach((e=>{this.sublayerCaches.get(e)?.forEach(((t,n)=>{i.has(n)&&this.sublayerCaches.get(e)?.delete(n);}));}));}async retrieveDataFromService(e,t,n){const o$1=o.getInstance(),r=new Set,a=[];let f,b="",T=[];const D="relationship"===t.graphType,I=this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData,M=t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);let E=!I&&M?Array.from(M).sort():null;if(this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData)this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData&&null!=e.objectIds&&(E=e.objectIds);else if(null!=e.objectIds&&E&&E.length>0){const t=e.objectIds;e.objectIds=E.filter((e=>t.includes(e)));}else if(null!=e.objectIds)E=e.objectIds;else {if(this.inclusionModeDefinition?.namedTypeDefinitions.has(t.objectType.name)&&(!this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members||this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members?.size<1))return e.objectIds=[],[];e.objectIds=E;}if(null!=e.outFields){const i=e.outFields;i.includes("*")?t.fields.forEach((e=>{r.add(e.name);})):i.forEach((e=>{e!==w&&e!==t.geometryFieldName&&r.add(e);}));}if(null!=e.geometry){const n=e.geometry;let o;const h=t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition,y=h?.spatialReference,w=h?.serviceCapabilities?.geometryCapabilities;let T=w?.geometryMaxBoundingRectangleSizeX,I=w?.geometryMaxBoundingRectangleSizeY;if(n?.extent?.spatialReference&&!n.spatialReference?.isWGS84?(await N(n.extent.spatialReference,g),o=K(n.extent,g)):o=n.extent,T&&I&&y){if(4326!==y.wkid){const e=new w$2({spatialReference:y,xmax:T,ymax:I}),t=K(e,g);T=t.xmax,I=t.ymax;}if(o.xmax-o.xmin>T)throw new s$3("knowledge-graph:layer-data-manager",`Extent x bounds should be within ${T}° latitude, limit exceeded`);if(o.ymax-o.ymin>I)throw new s$3("knowledge-graph:layer-data-manager",`Extent y bounds should be within ${I}° longitude, limit exceeded`)}if(null!=e.where&&"1=1"!==e.where){const i=await e$3(e.where.toUpperCase(),t.fieldsIndex);t.fields.forEach((e=>{i.fieldNames.includes(e.name)&&r.add(e.name);}));}b=D?`Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))`:`Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`,t.geometryFieldName&&r.add(t.geometryFieldName),r.forEach((e=>{b+=`, n.${e}`,a.push(e);})),f=new s$2({openCypherQuery:b,bindParameters:{param_filter_geom:new j({rings:w$1(o)})}});}else {let i="";if(null!=e.where&&"1=1"!==e.where){const n=await e$3(e.where,t.fieldsIndex);t.fields.forEach((e=>{n.fieldNames.includes(e.name)&&r.add(e.name);}));const o=new Set(["column-reference","string","number","binary-expression"]),a=new Set(["=","<","<=","<>",">",">=","AND","OR","LIKE"]);let p=!1;const d=e=>{if("column-reference"===e.type)return `n.${e.column}`;if("string"===e.type)return `'${e.value}'`;if("number"===e.type)return `${e.value}`;if("binary-expression"===e.type&&o.has(e.left.type)&&o.has(e.right.type)&&a.has(e.operator))return `${d(e.left)} ${e.operator} ${d(e.right)}`;if("binary-expression"===e.type&&"LIKE"===e.operator){let t="";if("function"===e.left.type&&"column-reference"===e.left.args.value[0].type)t+=`lower(n.${e.left.args.value[0].column})`;else {if("column-reference"!==e.left.type)return p=!0,"";t+=`lower(n.${e.left.column})`;}if(t+=" CONTAINS (","string"!==e.right.type)return p=!0,"";{let i=e.right.value;"%"===i.charAt(0)&&(i=i.slice(1)),"%"===i.charAt(i.length-1)&&(i=i.slice(0,-1)),t+=`'${i.toLowerCase()}')`;}return t}return p=!0,""};i=d(n.parseTree),p&&(i="");}let n="";n=D?`Match ()-[n:${t.objectType.name}]->()`:`Match (n:${t.objectType.name})`;let o=!1;E&&(o=!0,n+=" WHERE ID(n) IN $ids"),i&&(n+=o?" AND":" WHERE",n+=` ${i}`),n+=" return ID(n)",D&&(n+=", id(startNode(n)), id(endNode(n))"),e.returnGeometry&&t.geometryFieldName&&r.add(t.geometryFieldName),r.forEach((e=>{n+=`, n.${e}`,a.push(e);})),f=new s$2(E?{openCypherQuery:n,bindParameters:{ids:E}}:{openCypherQuery:n});}const k=(await T$4(t.parentCompositeLayer.dataManager.knowledgeGraph,f,n)).resultRowsStream.getReader();for(;;){const{done:e,value:i}=await k.read();if(e)break;const n=[];for(let t=0;t<i.length;t++){const e=i[t];let o=0,s=0;const r={properties:{}};for(r.id=e[o],o++,s++,D&&(r.originId=e[o],o++,s++,r.destinationId=e[o],o++,s++);o<e.length;o++)r.properties[a[o-s]]=e[o];n.push(r);}T=T.concat(o$1.writeToStore(n,w,t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name)?.name));}return T}};e$2([y$1()],M.prototype,"knowledgeGraph",void 0),e$2([y$1()],M.prototype,"inclusionModeDefinition",void 0),e$2([y$1()],M.prototype,"entityTypeNames",void 0),e$2([y$1()],M.prototype,"relationshipTypeNames",void 0),e$2([y$1()],M.prototype,"geographicLookup",void 0),e$2([y$1()],M.prototype,"sublayerCaches",void 0),e$2([y$1()],M.prototype,"nodeConnectionsLookup",void 0),e$2([y$1()],M.prototype,"relationshipConnectionsLookup",void 0),e$2([y$1()],M.prototype,"memberIdTypeLookup",void 0),M=e$2([a("esri.layers.knowledgeGraph.KnowledgeGraphLayerDataManager")],M);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const t=s$4(),p=s=>{let p=class extends s{constructor(){super(...arguments),this.fields=[],this.fieldsIndex=null;}};return e$2([y$1(t.fields)],p.prototype,"fields",void 0),e$2([y$1(t.fieldsIndex)],p.prototype,"fieldsIndex",void 0),p=e$2([a("esri.layers.knowledgeGraph.KnowledgeGraphSublayerBase")],p),p};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function ee(e){if(!e.json)return e;e.json.write=te(e.json.write);const t=e.json.origins;if(!t)return e;let r;for(r in t){const e=t[r];e&&(e.write=te(e.write));}return e}function te(e){return "object"==typeof e&&e?(!1!==e.enabled&&(e.overridePolicy=re(e)),e):!0===e?oe():e}function re(e){const{target:t,writer:r,overridePolicy:o,...i}=e;return function(e,t){const r=ie.call(this,e,t);return r.enabled?{...i,...r}:r}}function oe(){return {overridePolicy:ie}}function ie(e,t){const r=!!this.geometryType;let o={enabled:r};return r&&(o={...o,...ne.call(this,e,t)}),o}function ne(e,t){return {ignoreOrigin:this.originIdOf(t)>e$4.DEFAULTS}}let se=class extends(p(c(c$1(l$1(p$2(l$2(t$1(f(S$1(f$3)))))))))){constructor(e){super(e),this.blendMode="normal",this.capabilities=l$3(!1,!1),this.charts=null,this.definitionExpression=null,this.displayField="",this.effect=null,this.elevationInfo=null,this.featureEffect=null,this.graphType=null,this.labelsVisible=!0,this.labelingInfo=null,this.layerType=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.objectIdField=w,this.objectType=null,this.opacity=1,this.orderBy=null,this.parentCompositeLayer=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.refreshInterval=0,this.source={openPorts:()=>this.load().then((()=>{const e=new MessageChannel;return new E$1(e.port1,{channel:e,client:{queryFeatures:(e,t={})=>{const r=b$1.fromJSON(e);return this.queryFeaturesJSON(r,t)}}}),[e.port2]}))},this.title=null,this.type="knowledge-graph-sublayer",this.useViewTime=!0,this.visible=!0;}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t);}get fields(){const e=[];return this.objectType?.properties?.forEach((t=>{const r="esriFieldTypeOID"===t.fieldType?"esriFieldTypeInteger":t.fieldType;e.push(y$2.fromJSON({name:t.name,type:r,alias:t.alias,defaultValue:t.defaultValue,editable:t.editable,nullable:t.nullable}));})),e.push(y$2.fromJSON({name:this.objectIdField,type:"esriFieldTypeString",alias:this.objectIdField,editable:!1}),y$2.fromJSON({name:I,type:"esriFieldTypeInteger",alias:I,editable:!1})),e}get geometryType(){if("link-chart"===this.parentCompositeLayer?.type)return "relationship"===this.graphType?"polyline":"point";const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.geometryType;return t&&"esriGeometryNull"!==t?o$1.fromJSON(t):null}get geometryFieldName(){if("link-chart"===this.parentCompositeLayer?.type)return D;const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name);return e?.name??null}get graphTypeName(){return this.objectType?.name}get hasM(){const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.name,r=t?this.objectType?.properties?.[t]:null;return r?.hasM??!1}get hasZ(){const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.name,r=t?this.objectType?.properties?.[t]:null;return r?.hasZ??!1}set renderer(e){p$3(e,this.fieldsIndex),this._set("renderer",e);}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):"link-chart"===this.parentCompositeLayer?.type?"relationship"===this.graphType?t$2(o$2(o$1.toJSON("polyline")).renderer):t$2(o$2(o$1.toJSON("point")).renderer):t$2(o$2(o$1.toJSON(this.geometryType)).renderer)}get spatialReference(){return this.parentCompositeLayer?.dataManager?.knowledgeGraph?.dataModel?.spatialReference??f$1.WGS84}writeTitle(e,t){t.title=e??"Layer";}createPopupTemplate(e){return p$4(this,e)}createQuery(){return new b$1({where:"1=1",outFields:["*"]})}getField(e){for(let t=0;t<this.fields.length;t++)if(this.fields[t].name===e)return this.fields[t];return null}getFieldDomain(e,t){return null}async queryFeatures(e,t){const{resolvedQuery:r,queryEngine:o}=await this._setupQueryObjects(e),i=d$1.fromJSON(await o.executeQuery(r.toJSON(),t?.signal));return i.features.forEach((e=>{e.sourceLayer=this;})),i}async queryFeaturesJSON(e,t){const{resolvedQuery:r,queryEngine:o}=await this._setupQueryObjects(e);return await o.executeQuery(r.toJSON(),t?.signal)}async queryFeatureCount(e,t){const{resolvedQuery:r,queryEngine:o}=await this._setupQueryObjects(e);return o.executeQueryForCount(r.toJSON(),t?.signal)}async queryExtent(e={},t){const r={...e,returnGeometry:!0},{resolvedQuery:o,queryEngine:i}=await this._setupQueryObjects(r),n=await i.executeQueryForExtent(o.toJSON(),t?.signal);let s;return s=null!=n.extent?.xmin&&null!=n.extent?.xmax&&null!=n.extent?.ymin&&null!=n.extent?.ymax?new w$2(n.extent):new w$2,{count:n.count,extent:s}}async queryObjectIds(e,t){const r=b$1.from(e);let o;if("link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)o=this._cachedQueryEngine;else {const e=await this.parentCompositeLayer.dataManager.getData(r,this,t);o=this.loadQueryEngine(e);}return o.executeQueryForIds(r.toJSON(),t?.signal)}loadQueryEngine(e){const t=new m({geometryType:o$1.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ}),r=new $({fieldsIndex:this.fieldsIndex.toJSON(),geometryType:o$1.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:this.spatialReference.toJSON(),timeInfo:null,featureStore:t});return r.featureStore.addMany(e),r}async refreshCachedQueryEngine(){const e=await this.parentCompositeLayer.dataManager.getData(new b$1({where:"1=1",outFields:[w]}),this);this._cachedQueryEngine=this.loadQueryEngine(e);}async _setupQueryObjects(e,t){const r=b$1.from(e),o=r.geometry;let i;if(o&&!o.spatialReference?.isWGS84&&(await N(o.spatialReference,g),r.geometry=K(o instanceof j||o instanceof m$1?o:o.extent,g)),"link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)i=this._cachedQueryEngine;else {const e=await this.parentCompositeLayer.dataManager.getData(r,this,t);i=this.loadQueryEngine(e);}return {resolvedQuery:r,queryEngine:i}}};e$2([y$1(ee(a$1(s$5)))],se.prototype,"blendMode",void 0),e$2([y$1()],se.prototype,"capabilities",void 0),e$2([y$1({json:{origins:{"web-scene":{write:!1}},write:oe()}})],se.prototype,"charts",void 0),e$2([y$1({readOnly:!0})],se.prototype,"defaultPopupTemplate",null),e$2([y$1({type:String,json:{origins:{service:{read:!1}},name:"layerDefinition.definitionExpression",write:{ignoreOrigin:!0}}})],se.prototype,"definitionExpression",void 0),e$2([y$1()],se.prototype,"displayField",void 0),e$2([y$1(ee(a$1(a$2)))],se.prototype,"effect",void 0),e$2([y$1()],se.prototype,"elevationInfo",void 0),e$2([y$1(ee(a$1(p$5)))],se.prototype,"featureEffect",void 0),e$2([y$1(ee(a$1(p$6)))],se.prototype,"featureReduction",null),e$2([y$1()],se.prototype,"fields",null),e$2([y$1()],se.prototype,"geometryType",null),e$2([y$1()],se.prototype,"geometryFieldName",null),e$2([y$1({type:["entity","relationship"],nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],se.prototype,"graphType",void 0),e$2([y$1({type:String,nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],se.prototype,"graphTypeName",null),e$2([y$1()],se.prototype,"hasM",null),e$2([y$1()],se.prototype,"hasZ",null),e$2([y$1({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],se.prototype,"id",void 0),e$2([y$1(ee(a$1(l$4)))],se.prototype,"labelsVisible",void 0),e$2([y$1({type:[C],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:l$5,write:oe()}})],se.prototype,"labelingInfo",void 0),e$2([y$1({readOnly:!0,json:{read:!1,write:{writer(e,t){t.layerType=this.geometryType?"KnowledgeGraphSubLayer":"KnowledgeGraphSubTable";},isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],se.prototype,"layerType",void 0),e$2([y$1(ee(a$1(y$3)))],se.prototype,"legendEnabled",void 0),e$2([y$1(ee(a$1(j$1)))],se.prototype,"maxScale",void 0),e$2([y$1(ee(a$1(u)))],se.prototype,"minScale",void 0),e$2([y$1()],se.prototype,"objectIdField",void 0),e$2([y$1()],se.prototype,"objectType",void 0),e$2([y$1(ee(a$1(w$3)))],se.prototype,"opacity",void 0),e$2([y$1(ee(a$1(c$2)))],se.prototype,"orderBy",void 0),e$2([y$1()],se.prototype,"parentCompositeLayer",void 0),e$2([y$1(ee(a$1(s$6)))],se.prototype,"popupEnabled",void 0),e$2([y$1({type:k,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],se.prototype,"popupTemplate",void 0),e$2([y$1({type:Number,json:{write:{overridePolicy:ne}}})],se.prototype,"refreshInterval",void 0),e$2([y$1({types:m$2,json:{name:"layerDefinition.drawingInfo.renderer",write:oe()}})],se.prototype,"renderer",null),e$2([y$1()],se.prototype,"source",void 0),e$2([y$1()],se.prototype,"spatialReference",null),e$2([y$1({type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],se.prototype,"title",void 0),e$2([r$2("title")],se.prototype,"writeTitle",null),e$2([y$1({json:{read:!1}})],se.prototype,"type",void 0),e$2([y$1(ee(a$1(f$2)))],se.prototype,"useViewTime",void 0),e$2([y$1({type:Boolean,json:{name:"visibility",write:oe()}})],se.prototype,"visible",void 0),se=e$2([a("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")],se);const ae=se;

export { D, E, I, M, T$1 as T, ae as a, b, T as c, h, w };
