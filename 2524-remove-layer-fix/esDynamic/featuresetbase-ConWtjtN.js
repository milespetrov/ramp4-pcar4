import{m as ge}from"./TimeOnly-CvmakgWj.js";import{N as C,t as De,D as Te,l as J}from"./arcadeUtils-Dn02izr7.js";import{i as E,g as xe,t as Y,K as A,a as c,r as m,P as v,d as b,j as Ee,B as de,k as ue,W as ce,Y as S,S as k,E as N,U as G,X as M,v as be,h as O,J as Ne,l as _,V as Ae}from"./languageUtils-VuoQETG0.js";import{M as Le,q as me,f as Se,c as B,e as Ze,a as Ce,b as ve,T as X,E as $e,N as Pe,O as Re,L as U,B as Me,d as K,R as Z,k as ee}from"./featureSetUtils-CzGeQYxK.js";import{t as Ue}from"./ImmutableArray-CiJxhY8_.js";import{l as ke}from"./portalUtils-D6i2yzzd.js";import{u as Oe,O as ye}from"./SpatialFilter-C05_GRhX.js";import{y as te}from"./shared-Pl_ufmBB.js";import{b as pe,aO as ze}from"./main-DJHcSGyV.js";import{Z as x}from"./WhereClause-RKXKwhUg.js";import ne from"./FeatureLayer-B2396FEq.js";import{y as H}from"./Field-Zh7gOwI-.js";function je(s){if(s.length===1){if(N(s[0]))return J("distinct",s[0],-1);if(M(s[0]))return J("distinct",s[0].toArray(),-1)}return J("distinct",s,-1)}async function ae(s,t,a){const p=s.getVariables();if(p.length>0){const g=[];for(let n=0;n<p.length;n++){const o={name:p[n]};g.push(await t.evaluateIdentifier(a,o))}const e={};for(let n=0;n<p.length;n++)e[p[n]]=g[n];return s.parameters=e,s}return s}function u(s,t,a=null){for(const p in s)if(p.toLowerCase()===t.toLowerCase())return s[p];return a}function we(s){if(s===null)return null;const t={type:u(s,"type",""),name:u(s,"name","")};if(t.type==="range")t.range=u(s,"range",[]);else{t.codedValues=[];for(const a of u(s,"codedValues",[]))t.codedValues.push({name:u(a,"name",""),code:u(a,"code",null)})}return t}function ie(s){if(s===null)return null;const t={},a=u(s,"wkt");a!==null&&(t.wkt=a);const p=u(s,"wkid");return p!==null&&(t.wkid=p),t}function he(s){if(s===null)return null;const t={hasZ:u(s,"hasz",!1),hasM:u(s,"hasm",!1)},a=u(s,"spatialreference");a!=null&&(t.spatialReference=ie(a));const p=u(s,"x",null);if(p!==null)return t.x=p,t.y=u(s,"y",null),t.hasZ&&(t.z=u(s,"z",null)),t.hasM&&(t.m=u(s,"m",null)),t;const g=u(s,"rings",null);if(g!==null)return t.rings=g,t;const e=u(s,"paths",null);if(e!==null)return t.paths=e,t;const n=u(s,"points",null);if(n!==null)return t.points=n,t;for(const o of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=u(s,o,null);r!==null&&(t[o]=r)}return t}function We(s,t){for(const a of t)if(a===s)return!0;return!1}function He(s){return!!s.layerDefinition&&!!s.featureSet&&We(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(s.layerDefinition.fields)!==!1&&N(s.featureSet.features)!==!1}function z(s){return s?.toLowerCase()==="utc"?"UTC":s?.toLowerCase()==="unknown"?"Unknown":s}function Ge(s){s.mode==="async"&&(s.functions.timezone=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,1,2,t,a),xe(e[0])||Y(e[0]))return"Unknown";if(A(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?z("unknown"):z(e[0].dateFieldsTimeZone);if(!(e[1]instanceof C)||e[1].hasField("type")===!1)throw new c(t,m.InvalidParameter,a);const r=e[1].field("type");if(v(r)===!1)throw new c(t,m.InvalidParameter,a);switch(b(r).toLowerCase()){case"preferredtimezone":return z(e[0].preferredTimeZone);case"editfieldsinfo":return z(e[0].editFieldsInfo?.timeZone??null);case"timeinfo":return z(e[0].timeInfo?.timeZone??null);case"field":if(e[1].hasField("fieldname")&&v(e[1].field("fieldname")))return z(e[0].fieldTimeZone(b(e[1].field("fieldname"))))}throw new c(t,m.InvalidParameter,a)}const n=Ee(e[0],de(t));if(n===null)return null;const o=n.timeZone;return o==="system"?ge.systemTimeZoneCanonicalName:o.toLowerCase()==="utc"?"UTC":o.toLowerCase()==="unknown"?"Unknown":o})},s.functions.sqltimestamp=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{E(e,1,3,t,a);const n=e[0];if(ue(n)){if(e.length===1)return n.toSQLWithKeyword();if(e.length===2)return n.changeTimeZone(b(e[1])).toSQLWithKeyword();throw new c(t,m.InvalidParameter,a)}if(Y(n))return n.toSQLWithKeyword();if(A(n)){if(e.length!==3)throw new c(t,m.InvalidParameter,a);await n.load();const o=b(e[1]);if(Y(e[2]))return e[2].toSQLWithKeyword();if(ue(e[2])===!1)throw new c(t,m.InvalidParameter,a);const r=n.fieldTimeZone(o);return r===null?e[2].toSQLWithKeyword():e[2].changeTimeZone(r).toSQLWithKeyword()}throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(t,a){return s.standardFunctionAsync(t,a,(p,g,e)=>{if(E(e,2,4,t,a),ce(e[0])){const n=b(e[1]);let o=S(e[2],null);const r=k(S(e[3],!0));if(o===null&&(o=["*"]),N(o)===!1)throw new c(t,m.InvalidParameter,a);return e[0].featureSetById(n,r,o)}throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,1,2,t,a),G(e[0])){let n=S(e[1],"datasource");return n===null&&(n="datasource"),n=b(n).toLowerCase(),Le(e[0].fullSchema(),n,t.lrucache,t.interceptor,t.spatialReference??null)}throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(t,a){return s.standardFunctionAsync(t,a,(p,g,e)=>{if(E(e,2,5,t,a),e[0]===null)throw new c(t,m.PortalRequired,a);if(e[0]instanceof De){const f=b(e[1]),i=b(e[2]);let l=S(e[3],null);const d=k(S(e[4],!0));if(l===null&&(l=["*"]),N(l)===!1)throw new c(t,m.InvalidParameter,a);let w;return w=t.services?.portal?t.services.portal:pe.getDefault(),w=ke(e[0],w),me(f,i,t.spatialReference??null,l,d,w,t.lrucache,t.interceptor)}if(v(e[0])===!1)throw new c(t,m.PortalRequired,a);const n=b(e[0]),o=b(e[1]);let r=S(e[2],null);const y=k(S(e[3],!0));if(r===null&&(r=["*"]),N(r)===!1)throw new c(t,m.InvalidParameter,a);return me(n,o,t.spatialReference??null,r,y,t.services?.portal??pe.getDefault(),t.lrucache,t.interceptor)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(t,a){return s.standardFunctionAsync(t,a,(p,g,e)=>{if(E(e,2,4,t,a),ce(e[0])){const n=b(e[1]);let o=S(e[2],null);const r=k(S(e[3],!0));if(o===null&&(o=["*"]),N(o)===!1)throw new c(t,m.InvalidParameter,a);return e[0].featureSetByName(n,r,o)}throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(t,a){return s.standardFunction(t,a,(p,g,e)=>{E(e,1,1,t,a);const n={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if(v(e[0])){const o=JSON.parse(e[0]);o.layerDefinition!==void 0?(n.layerDefinition=o.layerDefinition,n.featureSet=o.featureSet,o.layerDefinition.spatialReference&&(n.layerDefinition.spatialReference=o.layerDefinition.spatialReference)):(n.featureSet.features=o.features,n.featureSet.geometryType=o.geometryType,n.layerDefinition.geometryType=n.featureSet.geometryType,n.layerDefinition.objectIdField=o.objectIdFieldName??"",n.layerDefinition.typeIdField=o.typeIdFieldName,n.layerDefinition.globalIdField=o.globalIdFieldName,n.layerDefinition.fields=o.fields,o.spatialReference&&(n.layerDefinition.spatialReference=o.spatialReference))}else{if(!(e[0]instanceof C))throw new c(t,m.InvalidParameter,a);{const o=JSON.parse(e[0].castToText(!0)),r=u(o,"layerdefinition");if(r!==null){n.layerDefinition.geometryType=u(r,"geometrytype",""),n.featureSet.geometryType=n.layerDefinition.geometryType,n.layerDefinition.globalIdField=u(r,"globalidfield",""),n.layerDefinition.objectIdField=u(r,"objectidfield",""),n.layerDefinition.typeIdField=u(r,"typeidfield",""),n.layerDefinition.hasZ=u(r,"hasz",!1)===!0,n.layerDefinition.hasM=u(r,"hasm",!1)===!0;const y=u(r,"spatialreference");y&&(n.layerDefinition.spatialReference=ie(y));const f=[];for(const l of u(r,"fields",[])){const d={name:u(l,"name",""),alias:u(l,"alias",""),type:u(l,"type",""),nullable:u(l,"nullable",!0),editable:u(l,"editable",!0),length:u(l,"length",null),domain:we(u(l,"domain"))};f.push(d)}n.layerDefinition.fields=f;const i=u(o,"featureset");if(i){const l={};for(const d of f)l[d.name.toLowerCase()]=d.name;for(const d of u(i,"features",[])){const w={},D=u(d,"attributes",{});for(const F in D)w[l[F.toLowerCase()]]=D[F];n.featureSet.features.push({attributes:w,geometry:he(u(d,"geometry"))})}}}else{n.layerDefinition.hasZ=u(o,"hasz",!1)===!0,n.layerDefinition.hasM=u(o,"hasm",!1)===!0,n.layerDefinition.geometryType=u(o,"geometrytype",""),n.featureSet.geometryType=n.layerDefinition.geometryType,n.layerDefinition.objectIdField=u(o,"objectidfieldname",""),n.layerDefinition.typeIdField=u(o,"typeidfieldname","");const y=u(o,"spatialreference");y&&(n.layerDefinition.spatialReference=ie(y));const f=[],i=u(o,"fields",null);if(!N(i))throw new c(t,m.InvalidParameter,a);for(const w of i){const D={name:u(w,"name",""),alias:u(w,"alias",""),type:u(w,"type",""),nullable:u(w,"nullable",!0),editable:u(w,"editable",!0),length:u(w,"length",null),domain:we(u(w,"domain"))};f.push(D)}n.layerDefinition.fields=f;const l={};for(const w of f)l[w.name.toLowerCase()]=w.name;let d=u(o,"features",null);if(N(d))for(const w of d){const D={},F=u(w,"attributes",{});for(const T in F)D[l[T.toLowerCase()]]=F[T];n.featureSet.features.push({attributes:D,geometry:he(u(w,"geometry",null))})}else d=null,n.featureSet.features=d}}}if(He(n)===!1)throw new c(t,m.InvalidParameter,a);return n.layerDefinition.geometryType||(n.layerDefinition.geometryType="esriGeometryNull"),Se.create(n,t.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,2,2,t,a),N(e[0])||M(e[0])){const n=[];let o,r=e[0];if(r instanceof Ue&&(r=r.toArray()),!be(e[1]))throw new c(t,m.InvalidParameter,a);o=e[1].createFunction(t);for(const y of r){const f=o(y);ze(f)?await f===!0&&n.push(y):f===!0&&n.push(y)}return n}if(A(e[0])){const n=await e[0].load(),o=x.create(e[1],{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC}),r=o.getVariables();if(r.length>0){const y=[];for(let i=0;i<r.length;i++){const l={name:r[i]};y.push(await s.evaluateIdentifier(t,l))}const f={};for(let i=0;i<r.length;i++)f[r[i]]=y[i];return o.parameters=f,new B({parentfeatureset:e[0],whereclause:o})}return new B({parentfeatureset:e[0],whereclause:o})}throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,2,2,t,a),A(e[0])){const n=new Ze(e[1]);return new Ce({parentfeatureset:e[0],orderbyclause:n})}throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,2,2,t,a),A(e[0]))return new ve({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return O(e[1])>=e[0].length?e[0].slice():e[0].slice(0,O(e[1]));if(M(e[0]))return O(e[1])>=e[0].length()?e[0].slice():e[0].slice(0,O(e[1]));throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,1,1,t,a),A(e[0])){const n=await e[0].first(p.abortSignal);if(n!==null){const o=Te.createFromGraphicLikeObject(n.geometry,n.attributes,e[0],t.timeZone);return o._underlyingGraphic=n,o}return n}return N(e[0])?e[0].length===0?null:e[0][0]:M(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{E(e,1,2,t,a);const n={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof C){if(e[1].hasField("minsize")&&(n.minsize=O(e[1].field("minsize"))),e[1].hasField("metadata")&&(n.returnMetadata=k(e[1].field("metadata"))),e[1].hasField("maxsize")&&(n.maxsize=O(e[1].field("maxsize"))),e[1].hasField("types")){const o=Ne(e[1].field("types"),!1);o.length>0&&(n.types=o)}}else if(e[1]!==null)throw new c(t,m.InvalidParameter,a)}if(G(e[0])){let o=e[0]._layer;return o instanceof ne&&(o=X(o,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),o===null?[]:A(o)===!1?[]:(await o.load(),o.queryAttachments(e[0].field(o.objectIdField),n.minsize,n.maxsize,n.types,n.returnMetadata))}if(e[0]===null)return[];throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{E(e,2,4,t,a);const n=e[0],o=b(e[1]);let r=S(e[2],null);const y=k(S(e[3],!0));if(r===null&&(r=["*"]),N(r)===!1)throw new c(t,m.InvalidParameter,a);if(e[0]===null)return null;if(!G(e[0]))throw new c(t,m.InvalidParameter,a);let f=n._layer;if(f instanceof ne&&(f=X(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),f===null||A(f)===!1)return null;f=await f.load();const i=f.relationshipMetaData().filter(F=>F.name===o);if(i.length===0)return null;if(i[0].relationshipTableId!==void 0&&i[0].relationshipTableId!==null&&i[0].relationshipTableId>-1)return $e(f,i[0],n.field(f.objectIdField),f.spatialReference,r,y,t.lrucache,t.interceptor);let l=f.serviceUrl();if(!l)return null;l=l.charAt(l.length-1)==="/"?l+i[0].relatedTableId.toString():l+"/"+i[0].relatedTableId.toString();const d=await Pe(l,f.spatialReference,r,y,t.lrucache,t.interceptor);await d.load();let w=d.relationshipMetaData();if(w=w.filter(F=>F.id===i[0].id),n.hasField(i[0].keyField)===!1||n.field(i[0].keyField)===null){const F=await f.getFeatureByObjectId(n.field(f.objectIdField),[i[0].keyField]);if(F){const T=x.create(w[0].keyField+"= @id",{fieldsIndex:d.getFieldsIndex(),timeZone:d.dateFieldsTimeZoneDefaultUTC});return T.parameters={id:F.attributes[i[0].keyField]},d.filter(T)}return new Oe({parentfeatureset:d})}const D=x.create(w[0].keyField+"= @id",{fieldsIndex:d.getFieldsIndex(),timeZone:d.dateFieldsTimeZoneDefaultUTC});return D.parameters={id:n.field(i[0].keyField)},d.filter(D)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{E(e,2,3,t,a);const n=e[0],o=b(S(e[1],"")).toLowerCase(),r=v(e[2])?b(e[2]):null;if(e[0]===null)return null;if(!G(e[0]))throw new c(t,m.InvalidParameter,a);let y=n._layer;if(y instanceof ne&&(y=X(y,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),y===null||A(y)===!1)return null;await y.load();const f=y.serviceUrl(),i=await Re(f,t.spatialReference);let l=null,d=null,w=!1;if(r!==null&&r!==""&&r!==void 0){for(const I of i.terminals)I.terminalName===r&&(d=I.terminalId);d===null&&(w=!0)}const D=i.associations.getFieldsIndex(),F=D.get("TOGLOBALID").name,T=D.get("FROMGLOBALID").name,V=D.get("TOTERMINALID").name,q=D.get("FROMTERMINALID").name,j=D.get("FROMNETWORKSOURCEID").name,W=D.get("TONETWORKSOURCEID").name,R=D.get("ASSOCIATIONTYPE").name,Fe=D.get("ISCONTENTVISIBLE").name,Ie=D.get("OBJECTID").name;for(const I of y.fields)if(I.type==="global-id"){l=n.field(I.name);break}let $=null,se=new U(new H({name:"percentalong",alias:"percentalong",type:"double"}),x.create("0",{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC})),oe=new U(new H({name:"side",alias:"side",type:"string"}),x.create("''",{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC}));const L="globalid",le="globalId",re={};for(const I in i.lkp)re[I]=i.lkp[I].sourceId;const P=new Me(new H({name:"classname",alias:"classname",type:"string"}),null,re);let h="";switch(o){case"midspan":{h=`((${F}='${l}') OR ( ${T}='${l}')) AND (${R} IN (5))`,P.codefield=x.create(`CASE WHEN (${F}='${l}') THEN ${j} ELSE ${W} END`,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC});const I=te(Z.findField(i.associations.fields,T));I.name=L,I.alias=L,$=new U(I,x.create(`CASE WHEN (${T}='${l}') THEN ${F} ELSE ${T} END`,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC})),se=i.unVersion>=4?new ee(Z.findField(i.associations.fields,D.get("PERCENTALONG").name)):new U(new H({name:"percentalong",alias:"percentalong",type:"double"}),x.create("0",{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC}));break}case"junctionedge":{h=`((${F}='${l}') OR ( ${T}='${l}')) AND (${R} IN (4,6))`,P.codefield=x.create(`CASE WHEN (${F}='${l}') THEN ${j} ELSE ${W} END`,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC});const I=te(Z.findField(i.associations.fields,T));I.name=L,I.alias=L,$=new U(I,x.create(`CASE WHEN (${T}='${l}') THEN ${F} ELSE ${T} END`,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC})),oe=new U(new H({name:"side",alias:"side",type:"string"}),x.create(`CASE WHEN (${R}=4) THEN 'from' ELSE 'to' END`,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC}));break}case"connected":{let I=`${F}='@T'`,fe=`${T}='@T'`;d!==null&&(I+=` AND ${V}=@A`,fe+=` AND ${q}=@A`),h="(("+I+") OR ("+fe+"))",h=_(h,"@T",l??""),I=_(I,"@T",l??""),d!==null&&(I=_(I,"@A",d.toString()),h=_(h,"@A",d.toString())),P.codefield=x.create("CASE WHEN "+I+` THEN ${j} ELSE ${W} END`,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC});const Q=te(Z.findField(i.associations.fields,T));Q.name=L,Q.alias=L,$=new U(Q,x.create("CASE WHEN "+I+` THEN ${T} ELSE ${F} END`,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC}));break}case"container":h=`${F}='${l}' AND ${R} = 2`,d!==null&&(h+=` AND ${V} = `+d.toString()),P.codefield=j,h="( "+h+" )",$=new K(Z.findField(i.associations.fields,T),L,L);break;case"content":h=`(${T}='${l}' AND ${R} = 2)`,d!==null&&(h+=` AND ${q} = `+d.toString()),P.codefield=W,h="( "+h+" )",$=new K(Z.findField(i.associations.fields,F),L,L);break;case"structure":h=`(${F}='${l}' AND ${R} = 3)`,d!==null&&(h+=` AND ${V} = `+d.toString()),P.codefield=j,h="( "+h+" )",$=new K(Z.findField(i.associations.fields,T),L,le);break;case"attached":h=`(${T}='${l}' AND ${R} = 3)`,d!==null&&(h+=` AND ${q} = `+d.toString()),P.codefield=W,h="( "+h+" )",$=new K(Z.findField(i.associations.fields,F),L,le);break;default:throw new c(t,m.InvalidParameter,a)}return w&&(h="1 <> 1"),new Z({parentfeatureset:i.associations,adaptedFields:[new ee(Z.findField(i.associations.fields,Ie)),new ee(Z.findField(i.associations.fields,Fe)),$,oe,P,se],extraFilter:h?x.create(h,{fieldsIndex:i.associations.getFieldsIndex(),timeZone:i.associations.dateFieldsTimeZoneDefaultUTC}):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,3,3,t,a),!A(e[0]))throw new c(t,m.InvalidParameter,a);const n=await e[0].load(),o=[],r=[];let y=!1,f=[];if(v(e[1]))f.push(e[1]);else if(e[1]instanceof C)f.push(e[1]);else if(N(e[1]))f=e[1];else{if(!M(e[1]))throw new c(t,m.InvalidParameter,a);f=e[1].toArray()}for(const i of f)if(v(i)){const l=x.create(b(i),{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC}),d=ye(l)===!0?b(i):"%%%%FIELDNAME";o.push({name:d,expression:l}),d==="%%%%FIELDNAME"&&(y=!0)}else{if(!(i instanceof C))throw new c(t,m.InvalidParameter,a);{const l=i.hasField("name")?i.field("name"):"%%%%FIELDNAME",d=i.hasField("expression")?i.field("expression"):"";if(l==="%%%%FIELDNAME"&&(y=!0),!l)throw new c(t,m.InvalidParameter,a);o.push({name:l,expression:x.create(d||l,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC})})}}if(f=[],v(e[2]))f.push(e[2]);else if(N(e[2]))f=e[2];else if(M(e[2]))f=e[2].toArray();else{if(!(e[2]instanceof C))throw new c(t,m.InvalidParameter,a);f.push(e[2])}for(const i of f){if(!(i instanceof C))throw new c(t,m.InvalidParameter,a);{const l=i.hasField("name")?i.field("name"):"",d=i.hasField("statistic")?i.field("statistic"):"",w=i.hasField("expression")?i.field("expression"):"";if(!l||!d||!w)throw new c(t,m.InvalidParameter,a);r.push({name:l,statistic:d.toLowerCase(),expression:x.create(w,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC})})}}if(y){const i={};for(const d of n.fields)i[d.name.toLowerCase()]=1;for(const d of o)d.name!=="%%%%FIELDNAME"&&(i[d.name.toLowerCase()]=1);for(const d of r)d.name!=="%%%%FIELDNAME"&&(i[d.name.toLowerCase()]=1);let l=0;for(const d of o)if(d.name==="%%%%FIELDNAME"){for(;i["field_"+l.toString()]===1;)l++;i["field_"+l.toString()]=1,d.name="FIELD_"+l.toString()}}for(const i of o)await ae(i.expression,s,t);for(const i of r)await ae(i.expression,s,t);return e[0].groupby(o,r)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(A(e[0])){E(e,2,2,t,a);const n=await e[0].load(),o=[];let r=[];if(v(e[1]))r.push(e[1]);else if(e[1]instanceof C)r.push(e[1]);else if(N(e[1]))r=e[1];else{if(!M(e[1]))throw new c(t,m.InvalidParameter,a);r=e[1].toArray()}let y=!1;for(const f of r)if(v(f)){const i=x.create(b(f),{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC}),l=ye(i)===!0?b(f):"%%%%FIELDNAME";o.push({name:l,expression:i}),l==="%%%%FIELDNAME"&&(y=!0)}else{if(!(f instanceof C))throw new c(t,m.InvalidParameter,a);{const i=f.hasField("name")?f.field("name"):"%%%%FIELDNAME",l=f.hasField("expression")?f.field("expression"):"";if(i==="%%%%FIELDNAME"&&(y=!0),!i)throw new c(t,m.InvalidParameter,a);o.push({name:i,expression:x.create(l||i,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC})})}}if(y){const f={};for(const l of n.fields)f[l.name.toLowerCase()]=1;for(const l of o)l.name!=="%%%%FIELDNAME"&&(f[l.name.toLowerCase()]=1);let i=0;for(const l of o)if(l.name==="%%%%FIELDNAME"){for(;f["field_"+i.toString()]===1;)i++;f["field_"+i.toString()]=1,l.name="FIELD_"+i.toString()}}for(const f of o)await ae(f.expression,s,t);return e[0].groupby(o,[])}return je(e)})},s.functions.getfeaturesetinfo=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,1,1,t,a),!A(e[0]))return null;const n=await e[0].getFeatureSetInfo();return n?C.convertObjectToArcadeDictionary({layerId:n.layerId,layerName:n.layerName,itemId:n.itemId,serviceLayerUrl:n.serviceLayerUrl,webMapLayerId:n.webMapLayerId??null,webMapLayerTitle:n.webMapLayerTitle??null,className:null,objectClassId:null},de(t),!1,!1):null})},s.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),s.functions.filterbysubtypecode=function(t,a){return s.standardFunctionAsync(t,a,async(p,g,e)=>{if(E(e,2,2,t,a),A(e[0])){const n=await e[0].load(),o=e[1];if(!Ae(o))throw new c(t,m.InvalidParameter,a);if(n.subtypeField){const y=x.create(`${n.subtypeField}= ${e[1]}`,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC});return new B({parentfeatureset:e[0],whereclause:y})}if(n.typeIdField===null||n.typeIdField==="")throw new c(t,m.FeatureSetDoesNotHaveSubtypes,a);const r=x.create(`${n.typeIdField}= ${e[1]}`,{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC});return new B({parentfeatureset:e[0],whereclause:r})}throw new c(t,m.InvalidParameter,a)})},s.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}export{Ge as registerFunctions};
