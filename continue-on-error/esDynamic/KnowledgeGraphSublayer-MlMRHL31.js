import{b3 as Ye,eK as We,s as j,U as ze,ao as F,k as d,o as c,A as ye,aD as Ze,n as X,c8 as q,au as ee,eh as Re,bC as Se,cB as P,f0 as Ke,B as Xe,aZ as et,aT as tt,bv as it,f as C,b4 as nt,q as rt,bm as ot}from"./main-IAmJgjpH.js";import{N as ue,K as te}from"./projection-CZEOLp_H.js";import{o as at}from"./featureConversionUtils-D3wVdWG-.js";import{e as ve}from"./OptimizedFeature-EIithYlr.js";import"./GraphicsLayer-DpefAm0L.js";import{W as st,M as U,r as Ce}from"./knowledgeGraphService-CpF_sJJ4.js";import{s as $}from"./Relationship-CAgJ_wQQ.js";import{b as H}from"./Query-Cxz0oI9b.js";import"./UniqueValueRenderer-BpLwyutM.js";import{t as ce,m as pt}from"./jsonUtils-CXFzmHB0.js";import{S as lt}from"./MultiOriginJSONSupport-B3fWf_tS.js";import{E as dt}from"./workers-DhNE2SUP.js";import{f as yt}from"./Layer-DwgwW7kf.js";import{m as ut}from"./FeatureStore-CfFJHePT.js";import{V as ct}from"./QueryEngine-CITjUbbI.js";import{y as ht,u as he}from"./clientSideDefaults-Dc1MPW-6.js";import{s as mt}from"./fieldProperties-C01xErdi.js";import{l as ft,s as gt,a as Tt}from"./BlendLayer-DUBnTLPn.js";import{c as bt,p as wt}from"./FeatureEffectLayer-BpVZKcya.js";import{c as Et,p as It}from"./FeatureReductionLayer-aNsFhIex.js";import{p as Nt,c as Lt}from"./OrderedLayer-B2q4XdKe.js";import{f as Dt}from"./RefreshableLayer-N6_N15vf.js";import{t as Mt}from"./ScaleRangeLayer-BkjwvoZ-.js";import{l as _t,f as Rt}from"./TemporalLayer-fE-_iHrX.js";import{p as St,d as vt,v as Ct,j as kt,f as At,l as Ot}from"./commonProperties-Bp7UrYgU.js";import{y as ie}from"./Field-Bd3gt1n9.js";import{C as xt,n as jt}from"./labelingInfo-lT91V3wS.js";import{d as Ft}from"./TimeInfo-C8-cffBe.js";import{d as qt}from"./FeatureSet-DirOjqu-.js";import{p as $t}from"./popupUtils-DQmLYj_V.js";const k="ESRI__ID",ne="ESRI__OriginID",re="ESRI__DestID",me="ESRI__LayoutGeometry",fe="ESRI__AggregationCount",W="LC.ESRI__IsSpatial",Gt={initializeLayersFromClientData:async(e,t)=>{if(t||(t=[...e.layers,...e.tables].map(o=>o.graphTypeName)),t?.length===0)return;const n=new Map;for(const o of t)n.set(o,ke(e,o));const i=await st(e.dataManager.knowledgeGraph,Array.from(n.values()));for(const o of[...e.layers,...e.tables]){const r=o.objectType.name;if(r===null)continue;const s=i.get(ke(e,r));if(s){const l=JSON.parse(s);l===null||typeof l!="object"||l.hasOwnProperty("showLabels")||(l.showLabels=!1),o.read(l,{origin:"service"})}}}},ke=(e,t)=>e.type==="knowledge-graph"?`${t}/Map`:`${t}/LinkChart/LinkChartSubLayer`;async function Bt(e,t){return Gt.initializeLayersFromClientData(e,t)}let oe=class B{constructor(){this._featureLookup=new Map}static getInstance(){return B.instance||(B.instance=new B),B.instance}static resetInstance(){B.instance&&(B.instance=null)}deleteFromStore(t){t.forEach(n=>{this._featureLookup.delete(n)})}readFromStoreByList(t){const n=[];return t.forEach(i=>{const o=this.readFromStoreById(i);o&&n.push(o)}),n}readFromStoreById(t){return this._featureLookup.get(t)??null}writeToStore(t,n,i){const o=[];return t.forEach(r=>{if(!r?.id)return;r.properties||(r.properties=[]);let s,l=null;if(i&&r.properties[i]&&(l=at(r.properties[i])),"originId"in r&&"destinationId"in r&&(r.properties[ne]=r.originId,r.properties[re]=r.destinationId),r.properties[n]=r.id,r.id&&this._featureLookup.has(r.id)&&this._featureLookup.get(r.id).attributes){const a=this._featureLookup.get(r.id),p=JSON.parse(JSON.stringify(Object.assign(a.attributes,r.properties)));i&&r.properties[i]&&(p[i]=Ye(r.properties[i])),s=new ve(l?JSON.parse(JSON.stringify(l)):a?.geometry?JSON.parse(JSON.stringify(a.geometry)):null,p,null,r.properties[n])}else s=new ve(l?JSON.parse(JSON.stringify(l)):null,r.properties,null,r.properties[n]);this._featureLookup.set(`${r.typeName?`${r.typeName}__${r.id}`:r.id}`,s),o.push(s)}),o}},ge,E=null;function Pt(){return ge||(ge=import("./lclayout-CcimkDVq.js").then(e=>e.l).then(({default:e})=>e({locateFile:t=>We(`esri/libs/linkchartlayout/${t}`)})).then(e=>{Ut(e)}),ge)}function Ut(e){E=e}var Te,be,z,Z;function Ht(e){const t=Object.keys(z).filter(i=>isNaN(parseInt(i,10))).indexOf(e.timeDirection),n=Object.keys(Z).filter(i=>isNaN(parseInt(i,10))).indexOf(e.eventsTicksVisualization);return{timeDirection:{value:t>-1?t:z.right},timeBannerUTCOffsetInMinutes:e.timeBannerUTCOffsetInMinutes,eventsTicksVisualization:{value:n>-1?n:Z.startAndEnd},showDurationLineForNonZeroDurationEntityEvents:e.showDurationLineForNonZeroDurationEntityEvents,durationLineWidth:e.durationLineWidth,entityPositionAtDurationRatio:e.entityPositionAtDurationRatio,showNonZeroDurationIntervalBounds:e.showNonZeroDurationIntervalBounds,separateTimeOverlaps:e.separateTimeOverlaps,separateTimelineOverlaps:e.separateTimelineOverlaps,moveFirstBends:e.moveFirstBends,secondBendRatio:e.secondBendRatio,lineSeparationMultiplier:e.lineSeparationMultiplier,spaceSeparatedLinesEvenly:e.spaceSeparatedLinesEvenly,useBezierCurves:e.useBezierCurves,separatedLineShapeRatio:e.separatedLineShapeRatio}}function G(e,t,n,i,o,r){const s=n.length,l=o.length,a=Float64Array.BYTES_PER_ELEMENT,p=Uint32Array.BYTES_PER_ELEMENT,m=Uint8Array.BYTES_PER_ELEMENT,g=16,y=g+s*(m+2*a)+l*(2*p),b=E._malloc(y);try{const T=b+g-b%g,u=T+s*a,D=u+s*a,L=D+l*p,w=L+l*p,N=()=>[E.HEAPF64.subarray(T>>3,(T>>3)+s),E.HEAPF64.subarray(u>>3,(u>>3)+s),E.HEAPU32.subarray(D>>2,(D>>2)+l),E.HEAPU32.subarray(L>>2,(L>>2)+l),E.HEAPU8.subarray(w,w+s)],[M,I,h,_,R]=N();M.set(n),I.set(i),h.set(o),_.set(r),R.set(t);let S=e(s,w,T,u,l,D,L),x=null,v=null;if(S){const pe=E.getLayoutLinksTypes(),le=E.getLayoutLinksVerticesEndIndices(),de=E.getLayoutLinksVertices(),_e=E.countLayoutLinksVertices();!l||pe&&le?_e&&!de?S=!1:(x={types:new Uint8Array(E.HEAPU8.subarray(pe,pe+l)),vertexEndIndex:new Uint32Array(E.HEAPU32.subarray(le>>2,(le>>2)+l)),vertices:new Float64Array(E.HEAPF64.subarray(de>>3,(de>>3)+2*_e))},v=E.getAuxiliaryGraphicElements()):S=!1}const[J,V,Y,se,Ve]=N();return n.set(J),i.set(V),o.set(Y),r.set(se),t.set(Ve),{success:S,links:x,graphics:v}}finally{E._free(b),E.cleanupLayout()}}(function(e){e[e.None=0]="None",e[e.IsMovable=1]="IsMovable",e[e.IsGeographic=2]="IsGeographic",e[e.IsRoot=4]="IsRoot",e[e.IsOld=8]="IsOld"})(Te||(Te={})),function(e){e[e.Regular=0]="Regular",e[e.Curved=1]="Curved",e[e.Recursive=2]="Recursive"}(be||(be={})),function(e){e[e.right=0]="right",e[e.left=1]="left",e[e.top=2]="top",e[e.bottom=3]="bottom"}(z||(z={})),function(e){e[e.none=0]="none",e[e.startOnly=1]="startOnly",e[e.startAndEnd=2]="startAndEnd"}(Z||(Z={}));const Ae=2,Oe=1,xe=-1;var we,Ee,Ie,Ne,Le,De,Me,je,Fe;(function(e){function t(){return E.getMinIdealEdgeLength()}function n(i,o,r,s,l,a=Ae,p=Oe,m=xe){return G((g,y,b,T,u,D,L)=>E.applyForceDirectedLayout(g,y,b,T,u,D,L,a,p,m),i,o,r,s,l)}e.getMinIdealEdgeLength=t,e.apply=n})(we||(we={})),function(e){function t(n,i,o,r,s,l=Ae,a=Oe,p=xe){return G((m,g,y,b,T,u,D)=>E.applyCommunityLayout(m,g,y,b,T,u,D,l,a,p),n,i,o,r,s)}e.apply=t}(Ee||(Ee={})),function(e){function t(n,i,o,r,s){return G(E.applySimpleLayout,n,i,o,r,s)}e.apply=t}(Ie||(Ie={})),function(e){function t(n,i,o,r,s){return G(E.applyHierarchicalLayout,n,i,o,r,s)}e.apply=t}(Ne||(Ne={})),function(e){function t(n,i,o,r,s){return G(E.applyRadialTreeLayout,n,i,o,r,s)}e.apply=t}(Le||(Le={})),function(e){function t(n,i,o,r,s){return G(E.applySmartTreeLayout,n,i,o,r,s)}e.apply=t}(De||(De={})),function(e){function t(n,i,o,r,s,l,a,p,m,g,y){const b={timeDirection:z.right,timeBannerUTCOffsetInMinutes:0,eventsTicksVisualization:Z.startAndEnd,showDurationLineForNonZeroDurationEntityEvents:!0,durationLineWidth:5,entityPositionAtDurationRatio:1,showNonZeroDurationIntervalBounds:!1,separateTimeOverlaps:!0,separateTimelineOverlaps:!0,moveFirstBends:!0,secondBendRatio:.3,lineSeparationMultiplier:1,spaceSeparatedLinesEvenly:!1,useBezierCurves:!1,separatedLineShapeRatio:0};return G((T,u,D,L,w,N,M)=>{if(r.length!==T||s.length!==T||p.length!==w||m.length!==w)return!1;const I=Float64Array.BYTES_PER_ELEMENT,h=16,_=E._malloc(h+T*I),R=E._malloc(h+T*I),S=E._malloc(h+w*I),x=E._malloc(h+w*I),v=_+h-_%h,J=R+h-R%h,V=S+h-S%h,Y=x+h-x%h;try{E.HEAPF64.subarray(v>>3,(v>>3)+T).set(r),E.HEAPF64.subarray(J>>3,(J>>3)+T).set(s),E.HEAPF64.subarray(V>>3,(V>>3)+w).set(p),E.HEAPF64.subarray(Y>>3,(Y>>3)+w).set(m);const se=Ht(Object.assign(b,y));return E.applyChronologicalLayout(T,u,D,L,v,J,w,N,M,V,Y,g,se)}finally{E._free(_),E._free(R),E._free(S),E._free(x)}},n,i,o,l,a)}e.apply=t}(Me||(Me={})),function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(je||(je={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(Fe||(Fe={}));var ae;(function(e){e.ELEMENTUID="ELEMENTUID",e.TYPENAME="TYPENAME"})(ae||(ae={})),ae.ELEMENTUID,ae.TYPENAME;var qe,$e;(function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME"})(qe||(qe={})),function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME",e[e.FROMUID=2]="FROMUID",e[e.TOUID=3]="TOUID"}($e||($e={}));var Ge,Be,Pe,Q;(function(e){e[e.featureResult=0]="featureResult",e[e.countResult=1]="countResult",e[e.idsResult=2]="idsResult"})(Ge||(Ge={})),function(e){e[e.upperLeft=0]="upperLeft",e[e.lowerLeft=1]="lowerLeft"}(Be||(Be={})),function(e){e[e.sqlTypeBigInt=0]="sqlTypeBigInt",e[e.sqlTypeBinary=1]="sqlTypeBinary",e[e.sqlTypeBit=2]="sqlTypeBit",e[e.sqlTypeChar=3]="sqlTypeChar",e[e.sqlTypeDate=4]="sqlTypeDate",e[e.sqlTypeDecimal=5]="sqlTypeDecimal",e[e.sqlTypeDouble=6]="sqlTypeDouble",e[e.sqlTypeFloat=7]="sqlTypeFloat",e[e.sqlTypeGeometry=8]="sqlTypeGeometry",e[e.sqlTypeGUID=9]="sqlTypeGUID",e[e.sqlTypeInteger=10]="sqlTypeInteger",e[e.sqlTypeLongNVarchar=11]="sqlTypeLongNVarchar",e[e.sqlTypeLongVarbinary=12]="sqlTypeLongVarbinary",e[e.sqlTypeLongVarchar=13]="sqlTypeLongVarchar",e[e.sqlTypeNChar=14]="sqlTypeNChar",e[e.sqlTypeNVarChar=15]="sqlTypeNVarChar",e[e.sqlTypeOther=16]="sqlTypeOther",e[e.sqlTypeReal=17]="sqlTypeReal",e[e.sqlTypeSmallInt=18]="sqlTypeSmallInt",e[e.sqlTypeSqlXml=19]="sqlTypeSqlXml",e[e.sqlTypeTime=20]="sqlTypeTime",e[e.sqlTypeTimestamp=21]="sqlTypeTimestamp",e[e.sqlTypeTimestamp2=22]="sqlTypeTimestamp2",e[e.sqlTypeTinyInt=23]="sqlTypeTinyInt",e[e.sqlTypeVarbinary=24]="sqlTypeVarbinary",e[e.sqlTypeVarchar=25]="sqlTypeVarchar"}(Pe||(Pe={})),function(e){e[e.OID_ARRAY=0]="OID_ARRAY",e[e.GLOBALID_ARRAY=1]="GLOBALID_ARRAY",e[e.STRING_ARRAY=2]="STRING_ARRAY",e[e.IDENTIFIER_ARRAY=3]="IDENTIFIER_ARRAY"}(Q||(Q={}));function Qt(e){if(!e.spatialReference.isWGS84)throw new j("knowledge-graph:layer-support-utils","The extentToInBoundsRings function only supports WGS84 spatial references.");return e.clone().normalize().map(t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]])}async function Jt(e,t){const n=[],i=new Map,o=[];if(t.dataModel?.relationshipTypes)for(const r of t.dataModel.relationshipTypes)r.name&&i.set(r.name,[]);for(const r of e)i.has(r.typeName)&&i.get(r.typeName)?.push(r.id);for(const[r,s]of i){if(s.length<1)continue;const l=new $({openCypherQuery:`MATCH (n)-[r:${r}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`,bindParameters:{ids:s}});o.push(U(t,l).then(async a=>{const p=a.resultRowsStream.getReader();for(;;){const{done:m,value:g}=await p.read();if(m)break;for(const y of g)n.push({id:y[0],typeName:y[1]}),n.push({id:y[2],typeName:y[3]})}}))}return await Promise.all(o),n}async function Vt(e,t){t??=!1;const n={generateAllSublayers:t,namedTypeDefinitions:new Map};return await zt(e).then(i=>{Kt(i,n)}),n}async function Yt(e){const t=await Ce(),n=new t.MapOfObjectIdentifierSets;Wt(n,t,e);const i=new t.MapOfObjectIdentifierSetsEncoder;try{i.set_map_of_identifier_sets(n),i.encode();const o=i.get_encoding_result();if(o.error.error_code!==0)throw new j("knowledge-graph:layer-support-utils",o.error.error_message);const r=structuredClone(o.get_byte_buffer());return i.delete(),r}finally{n.delete()}}function Wt(e,t,n){for(const[i,o]of n.namedTypeDefinitions){if(!o.members||o.useAllData)continue;const r=o.members.keys();let s=!1,l=!0;const a=new t.ObjectIdArray,p=new t.StringArray,m=new t.GlobalIdArray,g=new t.IdentifierArray,y=new t.ObjectIdentifierSet;for(const b of r)l&&(s=!isNaN(Number(b)),l=!1),s?a.add_objectid(Number(b)):(p.add_string(b),m.add_globalid(b)),g.add_identifier(b);y.set_oid_array(a),y.set_string_array(p),y.set_globalid_array(m),y.set_identifier_array(g),a.delete(),p.delete(),m.delete(),g.delete(),e.put_identifier_set(i,y),y.delete()}return e}async function zt(e){const t=await ze(e,{responseType:"array-buffer"}),n=await t.data;return Zt(new Uint8Array(n))}async function Zt(e){const t=new(await Ce()).MapOfObjectIdentifierSetsDecoder,n=t.decode(new Uint8Array(e)),i=new Map;if(n.error_code!==0)throw new j("knowledge-graph:layer-support-utils",n.error_message);const o=t.get_map_of_identifier_sets(),r=o.keys,s=r.size();for(let l=0;l<s;l++){const a=r.get(l),p=o.query_identifier_set(a),m=[];if(p.id_array_type.value===Q.GLOBALID_ARRAY){const g=p.get_globalid_array(),y=g.count();for(let b=0;b<y;b++)m.push(g.get_globalid_at(b))}else if(p.id_array_type.value===Q.IDENTIFIER_ARRAY){const g=p.get_identifier_array(),y=g.count();for(let b=0;b<y;b++)m.push(g.get_identifier_at(b).toString())}else if(p.id_array_type.value===Q.STRING_ARRAY){const g=p.get_string_array(),y=g.count();for(let b=0;b<y;b++)m.push(g.get_string_at(b))}else{if(p.id_array_type.value!==Q.OID_ARRAY)throw new j("knowledge-graph:layer-support-utils","Tried to encode an unexpected ID Array type.");{const g=p.get_oid_array(),y=g.count();for(let b=0;b<y;b++)m.push(g.get_objectid_at(b).toString())}}i.set(a,m)}return t.delete(),i}function Kt(e,t){for(const[n,i]of e){const o=F(t.namedTypeDefinitions,n,()=>({useAllData:!1,members:new Map}));for(const r of i)o.members.has(r)||o.members.set(r,{id:r})}return t}let A=class extends Ze{constructor(e){super(e),this._processingCacheUpdatesLookup=new Map,this.knowledgeGraph=null,this.inclusionModeDefinition={generateAllSublayers:!0,namedTypeDefinitions:new Map},this.entityTypeNames=new Set,this.relationshipTypeNames=new Set,this.geographicLookup=new Map,this.sublayerCaches=new Map,this.nodeConnectionsLookup=new Map,this.relationshipConnectionsLookup=new Map,this.memberIdTypeLookup=new Map;const t=new Map;e.knowledgeGraph.dataModel.entityTypes?.forEach(n=>{n.name&&(t.set(n.name,"entity"),this._processingCacheUpdatesLookup.set(n.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.entityTypeNames.add(n.name),n.properties?.forEach(i=>{i.geometryType&&i.geometryType!=="esriGeometryNull"&&this.geographicLookup.set(n.name,{name:i.name??"",geometryType:i.geometryType})}))}),e.knowledgeGraph.dataModel.relationshipTypes?.forEach(n=>{n.name&&(t.set(n.name,"relationship"),this._processingCacheUpdatesLookup.set(n.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.relationshipTypeNames.add(n.name),n.properties?.forEach(i=>{i.geometryType&&i.geometryType!=="esriGeometryNull"&&this.geographicLookup.set(n.name,{name:i.name??"",geometryType:i.geometryType})}))}),e.inclusionModeDefinition?.namedTypeDefinitions.forEach((n,i)=>{if(t.get(i)==="entity")this.entityTypeNames.add(i);else{if(t.get(i)!=="relationship")return X.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(i);this.relationshipTypeNames.add(i)}const o=new Map;n.members?.forEach(r=>{F(this.memberIdTypeLookup,r.id,()=>new Set).add(i);const s=this.getById(r.id);s&&o.set(r.id,s)}),this.sublayerCaches.set(i,o)})}addToLayer(e){e.forEach(({typeName:t,id:n})=>{if(!this.inclusionModeDefinition)throw new j("knowledge-graph:layer-data-manager","You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");if(this.inclusionModeDefinition.namedTypeDefinitions.has(t)){if(this.inclusionModeDefinition.namedTypeDefinitions.has(t)){const i=this.inclusionModeDefinition.namedTypeDefinitions.get(t);i.members||(i.members=new Map),i.members.set(n,{id:n}),F(this.memberIdTypeLookup,n,()=>new Set).add(t)}}else{const i=new Map;i.set(n,{id:n}),this.inclusionModeDefinition.namedTypeDefinitions.set(t,{useAllData:!1,members:i}),F(this.memberIdTypeLookup,n,()=>new Set).add(t)}})}getById(e){return oe.getInstance().readFromStoreById(e)}async getData(e,t,n){if(t.objectType.name&&this.inclusionModeDefinition?.namedTypeDefinitions&&this.inclusionModeDefinition.namedTypeDefinitions.size>0&&!this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name))return[];let i;if(i=e||new H({where:"1=1",outFields:["*"]}),t.parentCompositeLayer.type==="link-chart"){const o=t.parentCompositeLayer,r=this._processingCacheUpdatesLookup.get(t.objectType.name??""),s=i.outFields;s&&s.length===1&&s[0]===k&&i.where==="1=1"||await Promise.all(r??[]);const l=this.sublayerCaches.has(t.objectType.name??"")?Array.from(this.sublayerCaches.get(t.objectType.name)?.values()):[],a=[];return l.forEach(p=>{if(this.relationshipTypeNames.has(t.objectType.name)){p.geometry=o.relationshipLinkChartDiagramLookup.get(p.attributes[t.objectIdField]);const m=this.memberIdTypeLookup.get(p.attributes[ne]),g=this.memberIdTypeLookup.get(p.attributes[re]),y=this._isEndEntitySpatial(m,p,ne),b=this._isEndEntitySpatial(g,p,re);p.attributes[W]=Number(y&&b)}else{p.geometry=o.entityLinkChartDiagramLookup.get(p.attributes[t.objectIdField]);const m=this.geographicLookup.get(t.objectType.name);m&&p.attributes[m.name]?p.attributes[W]=1:p.attributes[W]=0}p.attributes[me]=p.geometry,a.push(p)}),a}return this.retrieveDataFromService(i,t,n)}async getConnectedRecordIds(e,t){const n=[];let i="";const o=[],r=new Map;if(e.forEach(m=>{if(this.memberIdTypeLookup.has(m))for(const g of this.memberIdTypeLookup.get(m)){if(!this.entityTypeNames.has(g))return;r.has(g)?r.get(g)?.push(m):r.set(g,[m])}}),t&&t?.length!==0){for(const m of t)i=i+m+"|";i=i.slice(0,-1)}const s={};let l="",a=-1;for(const[m,g]of r){a++,a!==0&&(l+=" UNION ");const y=`${m}_ids`;s[y]=g,l+=t&&t?.length!==0?`MATCH (n:${m}) WHERE id(n) IN $${y} WITH n MATCH (n)-[r:${i}]-(m) RETURN id(r), type(r), id(m), labels(m)[0]`:`MATCH (n:${m}) WHERE id(n) IN $${y} WITH n MATCH (n)-[r]-(m) RETURN id(r), type(r), id(m), labels(m)[0]`}if(!l)return n;const p=new Promise(m=>{(async()=>{const g=(await U(this.knowledgeGraph,new $({openCypherQuery:l,bindParameters:s}))).resultRowsStream.getReader();try{for(;;){const{done:y,value:b}=await g.read();if(y)break;for(let T=0;T<b.length;T++){const u=b[T];n.push({id:u[0],typeName:u[1]}),n.push({id:u[2],typeName:u[3]})}}}catch(y){if(y.name!=="AbortError")throw y;X.getLogger(this).info("Request aborted as expected")}})().then(()=>{m()})});return o.push(p),this.refreshCacheContent(),await Promise.all(o),n}async getRelationshipsBetweenNodes(e,t){const n=[],i="MATCH (n)-[r]->(m) WHERE id(n) IN $nodeIds AND id(m) in $nodeIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)",o=(await U(this.knowledgeGraph,new $({openCypherQuery:i,bindParameters:{nodeIds:e,relationshipExclusionIds:t}}))).resultRowsStream.getReader();try{for(;;){const{done:r,value:s}=await o.read();if(r)break;for(let l=0;l<s.length;l++){const a=s[l];n.push({id:a[0],typeName:a[1]})}}}catch(r){if(r.name!=="AbortError")throw r;X.getLogger(this).info("Request aborted as expected")}return n}async getRelationshipsFromNodes(e,t,n){const i=[],o="MATCH (n)-[r]-(m) WHERE id(n) IN $targetEntityIds AND id(m) in $possibleConnectionEntityIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)",r=(await U(this.knowledgeGraph,new $({openCypherQuery:o,bindParameters:{targetEntityIds:e,possibleConnectionEntityIds:t,relationshipExclusionIds:n}}))).resultRowsStream.getReader();try{for(;;){const{done:s,value:l}=await r.read();if(s)break;for(let a=0;a<l.length;a++){const p=l[a];i.push({id:p[0],typeName:p[1]})}}}catch(s){if(s.name!=="AbortError")throw s;X.getLogger(this).info("Request aborted as expected")}return i}async refreshCacheContent(e,t,n,i=!0){const o=oe.getInstance(),r=[],s=new Map,l=new Map;this.knowledgeGraph.dataModel.entityTypes?.forEach(a=>{a.name&&l.set(a.name,a)}),this.knowledgeGraph.dataModel.relationshipTypes?.forEach(a=>{a.name&&l.set(a.name,a)}),e||this.inclusionModeDefinition?e?e.forEach(a=>{if(this.memberIdTypeLookup.has(a))for(const p of this.memberIdTypeLookup.get(a))s.has(p)?s.get(p)?.push(a):s.set(p,[a])}):this.inclusionModeDefinition?.namedTypeDefinitions?.forEach((a,p)=>{a.useAllData?s.set(p,null):a.members&&a.members.forEach(m=>{s.has(p)&&s.get(p)!==null?s.get(p)?.push(m.id):s.set(p,[m.id])})}):(this.knowledgeGraph.dataModel.entityTypes?.forEach(a=>{a.name&&s.set(a.name,null)}),this.knowledgeGraph.dataModel.entityTypes?.forEach(a=>{a.name&&s.set(a.name,null)}));for(const[a,p]of s){const m=new Promise(g=>{(async()=>{const y=new Set,b=[];let T,u="",D=!1;if(t||l.get(a)?.properties?.forEach(w=>{w.name&&y.add(w.name)}),n&&this.geographicLookup.has(a)){const w=this.geographicLookup.get(a)?.name;w&&y.add(w)}if(this.entityTypeNames.has(a))u=`MATCH (n:${a}) ${p?"WHERE id(n) IN $ids ":""}return ID(n)`,y.forEach(w=>{u+=`, n.${w}`,b.push(w)});else{if(!this.relationshipTypeNames.has(a))throw new j("knowledge-graph:layer-data-manager",`The graph type of ${a} could not be determined. Was this type set in the KG data model and inclusion definition?`);D=!0,u=`MATCH ()-[n:${a}]->() ${p?"WHERE id(n) IN $ids ":""}return ID(n), id(startNode(n)), id(endNode(n))`,y.forEach(w=>{u+=`, n.${w}`,b.push(w)})}T=new $(p?{openCypherQuery:u,bindParameters:{ids:p}}:{openCypherQuery:u});const L=(await U(this.knowledgeGraph,T)).resultRowsStream.getReader();for(;;){const{done:w,value:N}=await L.read();if(w)break;const M=[];for(let _=0;_<N.length;_++){const R=N[_];let S=0,x=0;const v={properties:{}};for(v.id=R[S],S++,x++,D&&(v.originId=R[S],S++,x++,v.destinationId=R[S],S++,x++,F(this.nodeConnectionsLookup,v.originId,()=>new Set).add(v.id),F(this.nodeConnectionsLookup,v.destinationId,()=>new Set).add(v.id),F(this.relationshipConnectionsLookup,v.id,()=>[v.originId,v.destinationId]));S<R.length;S++)v.properties[b[S-x]]=R[S];M.push(v)}const I=o.writeToStore(M,k,this.geographicLookup.get(a)?.name);this.sublayerCaches.has(a)||this.sublayerCaches.set(a,new Map),i&&!this.inclusionModeDefinition?.namedTypeDefinitions.has(a)&&this.inclusionModeDefinition?.namedTypeDefinitions.set(a,{useAllData:!1,members:new Map}),i&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(a).members&&(this.inclusionModeDefinition.namedTypeDefinitions.get(a).members=new Map);const h=this.sublayerCaches.get(a);I.forEach(_=>{h?.set(_.attributes[k],_),i&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(a).members.has(_.attributes[k])&&(this.inclusionModeDefinition?.namedTypeDefinitions.get(a).members.set(_.attributes[k],{id:_.attributes[k]}),F(this.memberIdTypeLookup,_.attributes[k],()=>new Set).add(a))})}})().then(()=>{g(null)})});r.push(m),this._processingCacheUpdatesLookup.get(a)?.push(m)}await Promise.all(r)}removeFromLayer(e){const t=new Set,n=new Set(e.map(i=>i.id));for(const i of e)t.add(i.typeName),this.memberIdTypeLookup.get(i.id)?.size===1?this.memberIdTypeLookup.delete(i.id):this.memberIdTypeLookup.get(i.id)?.delete(i.typeName),this.inclusionModeDefinition?.namedTypeDefinitions.forEach((o,r)=>{r===i.typeName&&o.members?.has(i.id)&&o.members.delete(i.id)});t.forEach(i=>{this.sublayerCaches.get(i)?.forEach((o,r)=>{n.has(r)&&this.sublayerCaches.get(i)?.delete(r)})})}async retrieveDataFromService(e,t,n){const i=oe.getInstance(),o=new Set,r=[];let s,l="",a=[];const p=t.graphType==="relationship",m=this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData,g=t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);let y=!m&&g?Array.from(g).sort():null;if(this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData)this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData&&e.objectIds!=null&&(y=e.objectIds);else if(e.objectIds!=null&&y&&y.length>0){const T=e.objectIds;e.objectIds=y.filter(u=>T.includes(u))}else if(e.objectIds!=null)y=e.objectIds;else{if(this.inclusionModeDefinition?.namedTypeDefinitions.has(t.objectType.name)&&(!this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members||this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members?.size<1))return e.objectIds=[],[];e.objectIds=y}if(e.outFields!=null){const T=e.outFields;T.includes("*")?t.fields.forEach(u=>{o.add(u.name)}):T.forEach(u=>{u!==k&&u!==t.geometryFieldName&&o.add(u)})}if(e.geometry!=null){const T=e.geometry;let u;const D=t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition,L=D?.spatialReference,w=D?.serviceCapabilities?.geometryCapabilities;let N=w?.geometryMaxBoundingRectangleSizeX,M=w?.geometryMaxBoundingRectangleSizeY;if(T.type==="point"){let I=T;I.spatialReference?.isWGS84||(await ue(I.spatialReference,q),I=te(I,q)),u=new ee({spatialReference:q,xmin:I.x-1e-4,ymin:I.y-1e-4,xmax:I.x+1e-4,ymax:I.y+1e-4})}else T?.extent?.spatialReference&&!T.spatialReference?.isWGS84?(await ue(T.extent.spatialReference,q),u=te(T.extent,q)):u=T.extent;if(N&&M&&L){if(L.wkid!==4326){const I=new ee({spatialReference:L,xmax:N,ymax:M}),h=te(I,q);N=h.xmax,M=h.ymax}if(u.xmax-u.xmin>N)throw new j("knowledge-graph:layer-data-manager",`Extent x bounds should be within ${N}\xB0 latitude, limit exceeded`);if(u.ymax-u.ymin>M)throw new j("knowledge-graph:layer-data-manager",`Extent y bounds should be within ${M}\xB0 longitude, limit exceeded`)}if(e.where!=null&&e.where!=="1=1"){const I=await Re(e.where.toUpperCase(),t.fieldsIndex);t.fields.forEach(h=>{I.fieldNames.includes(h.name)&&o.add(h.name)})}l=p?`Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))`:`Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`,t.geometryFieldName&&o.add(t.geometryFieldName),o.forEach(I=>{l+=`, n.${I}`,r.push(I)}),s=new $({openCypherQuery:l,bindParameters:{param_filter_geom:new Se({rings:Qt(u)})}})}else{let T="";if(e.where!=null&&e.where!=="1=1"){const L=await Re(e.where,t.fieldsIndex);t.fields.forEach(h=>{L.fieldNames.includes(h.name)&&o.add(h.name)});const w=new Set(["column-reference","string","number","binary-expression"]),N=new Set(["=","<","<=","<>",">",">=","AND","OR","LIKE"]);let M=!1;const I=h=>{if(h.type==="column-reference")return`n.${h.column}`;if(h.type==="string")return`'${h.value}'`;if(h.type==="number")return`${h.value}`;if(h.type==="binary-expression"&&w.has(h.left.type)&&w.has(h.right.type)&&N.has(h.operator))return`${I(h.left)} ${h.operator} ${I(h.right)}`;if(h.type==="binary-expression"&&h.operator==="LIKE"){let _="";if(h.left.type==="function"&&h.left.args.value[0].type==="column-reference")_+=`lower(n.${h.left.args.value[0].column})`;else{if(h.left.type!=="column-reference")return M=!0,"";_+=`lower(n.${h.left.column})`}if(_+=" CONTAINS (",h.right.type!=="string")return M=!0,"";{let R=h.right.value;R.charAt(0)==="%"&&(R=R.slice(1)),R.charAt(R.length-1)==="%"&&(R=R.slice(0,-1)),_+=`'${R.toLowerCase()}')`}return _}return M=!0,""};T=I(L.parseTree),M&&(T="")}let u="";u=p?`Match ()-[n:${t.objectType.name}]->()`:`Match (n:${t.objectType.name})`;let D=!1;y&&(D=!0,u+=" WHERE ID(n) IN $ids"),T&&(u+=D?" AND":" WHERE",u+=` ${T}`),u+=" return ID(n)",p&&(u+=", id(startNode(n)), id(endNode(n))"),e.returnGeometry&&t.geometryFieldName&&o.add(t.geometryFieldName),o.forEach(L=>{u+=`, n.${L}`,r.push(L)}),s=new $(y?{openCypherQuery:u,bindParameters:{ids:y}}:{openCypherQuery:u})}const b=(await U(t.parentCompositeLayer.dataManager.knowledgeGraph,s,n)).resultRowsStream.getReader();for(;;){const{done:T,value:u}=await b.read();if(T)break;const D=[];for(let L=0;L<u.length;L++){const w=u[L];let N=0,M=0;const I={properties:{}};for(I.id=w[N],N++,M++,p&&(I.originId=w[N],N++,M++,I.destinationId=w[N],N++,M++);N<w.length;N++)I.properties[r[N-M]]=w[N];D.push(I)}a=a.concat(i.writeToStore(D,k,t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name)?.name))}return a}_isEndEntitySpatial(e,t,n){for(const i of e??[])if(this.entityTypeNames.has(i)){const o=this.geographicLookup.get(i),r=o&&this.sublayerCaches.get(i)?.get(t.attributes[n]);if(o&&r?.attributes[o.name])return!0}return!1}};d([c()],A.prototype,"knowledgeGraph",void 0),d([c()],A.prototype,"inclusionModeDefinition",void 0),d([c()],A.prototype,"entityTypeNames",void 0),d([c()],A.prototype,"relationshipTypeNames",void 0),d([c()],A.prototype,"geographicLookup",void 0),d([c()],A.prototype,"sublayerCaches",void 0),d([c()],A.prototype,"nodeConnectionsLookup",void 0),d([c()],A.prototype,"relationshipConnectionsLookup",void 0),d([c()],A.prototype,"memberIdTypeLookup",void 0),A=d([ye("esri.layers.knowledgeGraph.KnowledgeGraphLayerDataManager")],A);const Ue=mt(),Xt=e=>{let t=class extends e{constructor(){super(...arguments),this.fields=[],this.fieldsIndex=null}};return d([c(Ue.fields)],t.prototype,"fields",void 0),d([c(Ue.fieldsIndex)],t.prototype,"fieldsIndex",void 0),t=d([ye("esri.layers.knowledgeGraph.KnowledgeGraphSublayerBase")],t),t};function O(e){if(!e.json)return e;e.json.write=He(e.json.write);const t=e.json.origins;if(!t)return e;let n;for(n in t){const i=t[n];i&&(i.write=He(i.write))}return e}function He(e){return typeof e=="object"&&e?(e.enabled!==!1&&(e.overridePolicy=ei(e)),e):e===!0?K():e}function ei(e){const{target:t,writer:n,overridePolicy:i,...o}=e;return function(r,s){const l=Qe.call(this,r,s);return l.enabled?{...o,...l}:l}}function K(){return{overridePolicy:Qe}}function Qe(e,t){const n=!!this.geometryType;let i={enabled:n};return n&&(i={...i,...Je.call(this,e,t)}),i}function Je(e,t){return{ignoreOrigin:this.originIdOf(t)>ot.DEFAULTS}}let f=class extends Xt(Et(bt(ft(Nt(_t(Mt(Dt(lt(yt))))))))){constructor(e){super(e),this.blendMode="normal",this.capabilities=ht(!1,!1),this.charts=null,this.definitionExpression=null,this.displayField="",this.effect=null,this.elevationInfo=null,this.featureEffect=null,this.graphType=null,this.labelsVisible=!0,this.labelingInfo=null,this.layerType=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.objectIdField=k,this.objectType=null,this.opacity=1,this.orderBy=null,this.parent=null,this.parentCompositeLayer=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.refreshInterval=0,this.source={openPorts:()=>this.load().then(()=>{const t=new MessageChannel;return new dt(t.port1,{channel:t,client:{queryFeatures:(n,i={})=>{const o=H.fromJSON(n);return this.queryFeaturesJSON(o,i)}}}),[t.port2]})},this.type="knowledge-graph-sublayer",this.useViewTime=!0,this.visible=!0}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}get fields(){const e=[];return this.objectType?.properties?.forEach(t=>{const n=t.fieldType==="esriFieldTypeOID"?"esriFieldTypeInteger":t.fieldType;e.push(ie.fromJSON({name:t.name,type:n,alias:t.alias,defaultValue:t.defaultValue,editable:t.editable,nullable:t.nullable}))}),e.push(ie.fromJSON({name:this.objectIdField,type:"esriFieldTypeString",alias:this.objectIdField,editable:!1}),ie.fromJSON({name:fe,type:"esriFieldTypeInteger",alias:fe,editable:!1}),ie.fromJSON({name:W,type:"esriFieldTypeInteger",alias:W,editable:!1})),e}get geometryType(){if(this.parentCompositeLayer?.type==="link-chart")return this.graphType==="relationship"?"polyline":"point";const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.geometryType;return t&&t!=="esriGeometryNull"?P.fromJSON(t):null}get geometryFieldName(){return this.parentCompositeLayer?.type==="link-chart"?me:this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name)?.name??null}get graphTypeName(){return this.objectType?.name}get hasM(){const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.name;return(t?this.objectType?.properties?.[t]:null)?.hasM??!1}get hasZ(){const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.name;return(t?this.objectType?.properties?.[t]:null)?.hasZ??!1}set renderer(e){Ke(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):this.parentCompositeLayer?.type==="link-chart"?this.graphType==="relationship"?ce(he(P.toJSON("polyline")).renderer):ce(he(P.toJSON("point")).renderer):ce(he(P.toJSON(this.geometryType)).renderer)}get spatialReference(){return this.parentCompositeLayer?.dataManager?.knowledgeGraph?.dataModel?.spatialReference??Xe.WGS84}set timeInfo(e){this._set("timeInfo",e)}get title(){return this._isOverridden("title")?this._get("title"):this.graphTypeName}set title(e){this._set("title",e)}writeTitle(e,t){t.title=e??"Layer"}createPopupTemplate(e){return $t(this,e)}createQuery(){return new H({where:"1=1",outFields:["*"]})}getField(e){for(let t=0;t<this.fields.length;t++)if(this.fields[t].name===e)return this.fields[t];return null}getFieldDomain(e,t){return null}async queryFeatures(e,t){const{resolvedQuery:n,queryEngine:i}=await this._setupQueryObjects(e),o=qt.fromJSON(await i.executeQuery(n.toJSON(),t?.signal));return o.features.forEach(r=>{r.sourceLayer=this}),o}async queryFeaturesJSON(e,t){const{resolvedQuery:n,queryEngine:i}=await this._setupQueryObjects(e);return await i.executeQuery(n.toJSON(),t?.signal)}async queryFeatureCount(e,t){const{resolvedQuery:n,queryEngine:i}=await this._setupQueryObjects(e);return i.executeQueryForCount(n.toJSON(),t?.signal)}async queryExtent(e={},t){const n={...e,returnGeometry:!0},{resolvedQuery:i,queryEngine:o}=await this._setupQueryObjects(n),r=await o.executeQueryForExtent(i.toJSON(),t?.signal);let s;return s=r.extent?.xmin!=null&&r.extent?.xmax!=null&&r.extent?.ymin!=null&&r.extent?.ymax!=null?new ee(r.extent):new ee,{count:r.count,extent:s}}async queryObjectIds(e,t){const n=H.from(e);let i;if(this.parentCompositeLayer.type==="link-chart"&&this._cachedQueryEngine)i=this._cachedQueryEngine;else{const o=await this.parentCompositeLayer.dataManager.getData(n,this,t);i=this.loadQueryEngine(o)}return i.executeQueryForIds(n.toJSON(),t?.signal)}loadQueryEngine(e){const t=new ut({geometryType:P.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ}),n=new ct({fieldsIndex:this.fieldsIndex.toJSON(),geometryType:P.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:this.spatialReference.toJSON(),timeInfo:this.timeInfo?.toJSON(),featureStore:t});return n.featureStore.addMany(e),n}async refreshCachedQueryEngine(){const e=await this.parentCompositeLayer.dataManager.getData(new H({where:"1=1",outFields:[k]}),this);this._cachedQueryEngine=this.loadQueryEngine(e)}load(e){return this.addResolvingPromise(this.parent.load(e).then(()=>{et(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}async _setupQueryObjects(e,t){const n=H.from(e),i=n.geometry;let o;if(i&&!i.spatialReference?.isWGS84&&(await ue(i.spatialReference,q),n.geometry=te(i instanceof Se||i instanceof tt||i instanceof it?i:i.extent,q)),this.parentCompositeLayer.type==="link-chart"&&this._cachedQueryEngine)o=this._cachedQueryEngine;else{const r=await this.parentCompositeLayer.dataManager.getData(n,this,t);o=this.loadQueryEngine(r)}return{resolvedQuery:n,queryEngine:o}}};d([c(O(C(gt)))],f.prototype,"blendMode",void 0),d([c()],f.prototype,"capabilities",void 0),d([c({json:{origins:{"web-scene":{write:!1}},write:K()}})],f.prototype,"charts",void 0),d([c({readOnly:!0})],f.prototype,"defaultPopupTemplate",null),d([c({type:String,json:{origins:{service:{read:!1}},name:"layerDefinition.definitionExpression",write:{ignoreOrigin:!0}}})],f.prototype,"definitionExpression",void 0),d([c()],f.prototype,"displayField",void 0),d([c(O(C(Tt)))],f.prototype,"effect",void 0),d([c()],f.prototype,"elevationInfo",void 0),d([c(O(C(wt)))],f.prototype,"featureEffect",void 0),d([c(O(C(It)))],f.prototype,"featureReduction",null),d([c()],f.prototype,"fields",null),d([c()],f.prototype,"geometryType",null),d([c()],f.prototype,"geometryFieldName",null),d([c({type:["entity","relationship"],nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],f.prototype,"graphType",void 0),d([c({type:String,nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],f.prototype,"graphTypeName",null),d([c()],f.prototype,"hasM",null),d([c()],f.prototype,"hasZ",null),d([c({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],f.prototype,"id",void 0),d([c(O(C(St)))],f.prototype,"labelsVisible",void 0),d([c({type:[xt],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:jt,write:K()}})],f.prototype,"labelingInfo",void 0),d([c({readOnly:!0,json:{read:!1,write:{writer(e,t){switch(this.parentCompositeLayer.type){case"link-chart":t.layerType="LinkChartSubLayer";break;case"knowledge-graph":t.layerType=this.geometryType?"KnowledgeGraphSubLayer":"KnowledgeGraphSubTable"}},isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],f.prototype,"layerType",void 0),d([c(O(C(vt)))],f.prototype,"legendEnabled",void 0),d([c(O(C(Ct)))],f.prototype,"maxScale",void 0),d([c(O(C(kt)))],f.prototype,"minScale",void 0),d([c()],f.prototype,"objectIdField",void 0),d([c()],f.prototype,"objectType",void 0),d([c(O(C(At)))],f.prototype,"opacity",void 0),d([c(O(C(Lt)))],f.prototype,"orderBy",void 0),d([c({clonable:!1})],f.prototype,"parent",void 0),d([c()],f.prototype,"parentCompositeLayer",void 0),d([c(O(C(Ot)))],f.prototype,"popupEnabled",void 0),d([c({type:nt,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],f.prototype,"popupTemplate",void 0),d([c({type:Number,json:{write:{overridePolicy:Je}}})],f.prototype,"refreshInterval",void 0),d([c({types:pt,json:{name:"layerDefinition.drawingInfo.renderer",write:K()}})],f.prototype,"renderer",null),d([c()],f.prototype,"source",void 0),d([c()],f.prototype,"spatialReference",null),d([c({type:Ft,json:{name:"layerDefinition.timeInfo",write:!0,origins:{"web-document":{name:"layerDefinition.timeInfo",read:!0,write:!0},"portal-item":{name:"layerDefinition.timeInfo",read:!0,write:!0}}}})],f.prototype,"timeInfo",null),d([c({type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],f.prototype,"title",null),d([rt("title")],f.prototype,"writeTitle",null),d([c({json:{read:!1}})],f.prototype,"type",void 0),d([c(O(C(Rt)))],f.prototype,"useViewTime",void 0),d([c({type:Boolean,json:{name:"visibility",write:K()}})],f.prototype,"visible",void 0),f=d([ye("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")],f);const ti=f;export{Jt as A,A as E,Vt as F,De as L,Yt as R,Ee as a,Me as b,Bt as c,k as d,Pt as e,we as f,fe as g,Ne as h,oe as i,Le as m,me as n,be as o,re as r,Te as s,ne as t,ti as u,Ie as v};
