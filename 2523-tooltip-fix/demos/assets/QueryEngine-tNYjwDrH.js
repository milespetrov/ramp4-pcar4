const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-5ScVeRQz.js","./geometryEngineBase-8g0RzW7z.js","./_commonjsHelpers-DCkdB7M8.js","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{s as b,bK as ie,bL as ae,ar as Ae,bJ as Ee,cj as U,bj as V,ai as ce,ch as X,hD as Oe,eB as he,he as je,hE as Ze,h as J,as as Be,aL as de,E as ke,hF as E,b5 as fe,G as Le,hG as He,cV as Ue,bR as Je,cX as Ye,bs as W,b$ as Ke,cM as Xe,ag as me,ab as We,cP as et,bV as tt,c0 as st}from"./main-CdsSyLmf.js";import{Y as it}from"./projection-DW4hqkh8.js";import{R as pe}from"./normalizeUtils-Dfj25wzD.js";import{o as at}from"./featureConversionUtils-BlgBaaTg.js";import{e as ye}from"./LRUCache-B7IYX8gP.js";import{Z as rt}from"./WhereClause-DAargBqa.js";import{i as ge}from"./fieldType-AYW3_uOi.js";import{a as O,h as j,y as ee,v as Ve,b as nt,P as G,t as lt,I as $e}from"./timeSupport-DgLxbpf7.js";import{j as D,x as re,g as Q,a as ot,S as xe,b as ut}from"./queryUtils-C5i4HhAZ.js";import{t as ct}from"./QueryEngineCapabilities-DjYb9CEb.js";import{_ as ht}from"./preload-helper-ExcqyqRp.js";import{s as _e}from"./quantizationUtils-CaK8jumX.js";import{I as dt}from"./utils-Cuyo2wH5.js";import{m as te,B as ft,f as Fe,p as we,C as mt,k as pt,$ as yt,E as gt,P as xt,U as _t,g as Ft,v as wt,d as It}from"./utils-sWoS7WBe.js";import{Z as St}from"./FieldsIndex-ClJtp0E9.js";import{C as Ie}from"./Scheduler-D_w0NlMM.js";let Tt=class{constructor(e,t){this._cache=new ye(e),this._invalidCache=new ye(t)}get(e,t){const s=`${t.uid}:${e}`,i=this._cache.get(s);if(i)return i;if(this._invalidCache.get(s)!=null)return null;try{const a=rt.create(e,{fieldsIndex:t});return this._cache.put(s,a),a}catch(a){return this._invalidCache.put(s,a),null}}getError(e,t){const s=`${t.uid}:${e}`;return this._invalidCache.get(s)??null}};const ze=new Tt(50,500),Z="unsupported-query",Ce=" as ",De=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),Me=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),Rt=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...De,...Me]);function ne(l,e,t={}){const s=M(e,l);if(!s){const a=ze.getError(e,l);throw new b(Z,"invalid SQL expression",{expression:e,error:a})}const i=t.expressionName||"expression";if(t.validateStandardized&&!s.isStandardized)throw new b(Z,`${i} is not standard`,{expression:e});if(t.validateAggregate&&!s.isAggregate)throw new b(Z,`${i} does not contain a valid aggregate function`,{expression:e});return s.fieldNames}function vt(l,e,t,s){if(!t)return!0;const i="where clause";return z(l,e,ne(l,t,{validateStandardized:!0,expressionName:i}),{expressionName:i,query:s}),!0}function bt(l,e,t,s,i){if(!t)return!0;const a="having clause",r=ne(l,t,{validateAggregate:!0,expressionName:a});if(z(l,e,r,{expressionName:a,query:i}),!M(t,l)?.getExpressions().every(u=>{const{aggregateType:c,field:h}=u,f=l.get(h)?.name;return s.some(m=>{const{onStatisticField:p,statisticType:d}=m;return l.get(p)?.name===f&&d.toLowerCase().trim()===c})}))throw new b(Z,"expressions in having clause should also exist in outStatistics",{having:t});return!0}function M(l,e){return l?ze.get(l,e):null}function qe(l){return/\((.*?)\)/.test(l)?l:l.split(Ce)[0]}function At(l){return l.split(Ce)[1]}function z(l,e,t,s={}){const i=new Map;if(Et(i,l,e,s.allowedFieldTypes??Rt,t),i.size){const a=s.expressionName??"expression";throw new b(Z,`${a} contains invalid or missing fields`,{errors:Array.from(i.values()),query:s.query})}}function Et(l,e,t,s,i){const a=i.includes("*")?[...t,...i.filter(r=>r!=="*")]:i;for(const r of a)if(e.get(r))Se(l,e,t,s,r);else try{const n=ne(e,qe(r),{validateStandardized:!0});for(const o of n)Se(l,e,t,s,o)}catch(n){l.set(r,{type:"expression-error",expression:r,error:n})}}function Se(l,e,t,s,i){const a=e.get(i);a?t.has(a.name)?s!=="all"&&s?.has(a.type)===!1&&l.set(i,{type:"invalid-type",fieldName:a.name,fieldType:ge.fromJSON(a.type),allowedFieldTypes:Array.from(s,r=>ge.fromJSON(r))}):l.set(i,{type:"missing-field",fieldName:a.name}):l.set(i,{type:"invalid-field",fieldName:i})}const Vt=5;let $t=class{constructor(){this._storage=new Map,this._purgeInterval=Vt,this._sweep=()=>{if(this._timer=void 0,!this._storage)return;const e=1e3*this._purgeInterval,t=performance.now()-e;for(const[s,i]of this._storage){if(!(i.time<t))return void(this._storage.size>0&&(this._timer=setTimeout(this._sweep,e)));this._storage.delete(s)}}}destroy(){this._storage?.clear(),this._storage=null,clearTimeout(this._timer)}get size(){return this._storage?.size??0}put(e,t){this._storage?.set(e,new Ct(t)),this._scheduleSweep()}get(e){if(!this._storage)return;const t=this._storage?.get(e);return t?(this._storage?.delete(e),t.time=performance.now(),this._storage?.set(e,t),t.items):void 0}clear(){this._storage?.clear()}_scheduleSweep(){this._storage&&(this._timer??=setTimeout(this._sweep,1e3*this._purgeInterval))}},zt=0;class Ct{constructor(e){this.items=e,this.time=performance.now(),this.id=zt++}}let H=class{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=s,this.featureAdapter=t;const i=e.outFields;if(i&&!i.includes("*")){this.outFields=i;let a=0;for(const r of i){const n=qe(r),o=this.fieldsIndex.get(n),u=o?null:M(n,s),c=o?o.name:At(r)||"FIELD_EXP_"+a++;this._fieldDataCache.set(r,{alias:c,clause:u})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const i=s?s.name:t;let a=null;return this._fieldDataCache.has(i)?a=this._fieldDataCache.get(i)?.clause:s||(a=M(t,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:a})),s?this.featureAdapter.getAttribute(e,i):a?.calculateValue(e,this.featureAdapter)}getDataValues(e,t,s=!0){const i=t.normalizationType,a=t.normalizationTotal,r=this.fieldsIndex.get(t.field),n=ie(r)||ae(r),o=Ae(r);return e.map(u=>{let c=t.field&&this.getFieldValue(u,t.field,this.fieldsIndex.get(t.field));if(t.field2?(c=`${te(c)}${t.fieldDelimiter}${te(this.getFieldValue(u,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(c=`${c}${t.fieldDelimiter}${te(this.getFieldValue(u,t.field3,this.fieldsIndex.get(t.field3)))}`)):typeof c=="string"&&s&&(n?c=c?new Date(c).getTime():null:o&&(c=c?dt(c):null)),i&&Number.isFinite(c)){const h=i==="field"&&t.normalizationField?this.getFieldValue(u,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;c=ft(c,i,h,a)}return c})}async getExpressionValues(e,t,s,i,a){const{arcadeUtils:r}=await Ee(),n=r.hasGeometryOperations(t);n&&await r.enableGeometryOperations();const o=r.createFunction(t),u=r.getViewInfo(s),c={fields:this.fieldsIndex.fields};return e.map(h=>{const f={attributes:this.featureAdapter.getAttributes(h),layer:c,geometry:n?{...O(i.geometryType,i.hasZ,i.hasM,this.featureAdapter.getGeometry(h)),spatialReference:s?.spatialReference}:null},m=r.createExecContext(f,u,a);return r.executeFunction(o,m)})}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testFeature(e,this.featureAdapter)??!1}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:M(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testSet(e,this.featureAdapter)??!1}_processAttributesForOutFields(e){const t=this.outFields;if(!t?.length)return this.featureAdapter.getAttributes(e);const s={};for(const i of t){const{alias:a,clause:r}=this._fieldDataCache.get(i);s[a]=r?r.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,a)}return s}_processAttributesForDistinctValues(e){if(e==null||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const r of t){const{alias:n}=this._fieldDataCache.get(r);s.push(e[n])}else for(const r in e)s.push(e[r]);const i=`${(t||["*"]).join(",")}=${s.join(",")}`;let a=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++a),a>1?null:e}};function Te(l,e,t){return{objectId:l,target:e,distance:t,type:"vertex"}}function Dt(l,e,t,s,i,a=!1){return{objectId:l,target:e,distance:t,type:"edge",start:s,end:i,draped:a}}class v{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new H(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:i}=this.query;if(!t?.length)return 1;const r=new Map,n=new Map,o=new Set;for(const u of i){const{statisticType:c}=u,h=c!=="exceedslimit"?u.onStatisticField:void 0;if(!n.has(h)){const m=[];for(const p of t){const d=this._getAttributeValues(e,p,r);m.push(d)}n.set(h,this._calculateUniqueValues(m,e.returnDistinctValues))}const f=n.get(h);for(const m in f){const{data:p,items:d}=f[m],F=p.join(",");s&&!e.validateItems(d,s)||o.add(F)}}return o.size}async createQueryResponse(){let e;if(this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;U(this.query.outSR)&&!V(t.spatialReference,this.query.outSR)?e.queryGeometry=j({spatialReference:this.query.outSR,...D(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=j({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const s=this.featureAdapter,i=Re(this.hasZ,this.hasM),{point:a,mode:r}=e,n=typeof e.distance=="number"?e.distance:e.distance.x,o=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(r,this.spatialReference,t),f=new ve(null,0),m=new ve(null,0),p={x:0,y:0,z:0};for(const d of this.items){const F=s.getGeometry(d);if(F==null)continue;const{coords:_,lengths:S}=F;if(f.coords=_,m.coords=_,e.returnEdge){let I=0;for(let g=0;g<S.length;g++){const y=S[g];for(let w=0;w<y;w++,I+=i){const x=f;if(x.coordsIndex=I,w!==y-1){const T=m;T.coordsIndex=I+i;const R=p;Mt(p,a,x,T);const C=(a.x-R.x)/n,B=(a.y-R.y)/o,A=C*C+B*B;A<=1&&u.candidates.push(Dt(s.getObjectId(d),h(R),Math.sqrt(A),h(x),h(T)))}}}}if(e.vertexMode!=="none"){const I=c?_.length-i:_.length;if(e.vertexMode==="all")for(let g=0;g<I;g+=i){const y=f;y.coordsIndex=g;const w=(a.x-y.x)/n,x=(a.y-y.y)/o,T=w*w+x*x;T<=1&&u.candidates.push(Te(s.getObjectId(d),h(y),Math.sqrt(T)))}else if(e.vertexMode==="ends"){const g=[0];c||g.push(_.length-i);for(const y of g){const w=f;w.coordsIndex=y;const x=(a.x-w.x)/n,T=(a.y-w.y)/o,R=x*x+T*T;R<=1&&u.candidates.push(Te(s.getObjectId(d),h(w),Math.sqrt(R)))}}}}return u.candidates.sort((d,F)=>d.distance-F.distance),u}_getPointCreator(e,t,s){const i=s==null||V(t,s)?n=>n:n=>D(n,t,s),{hasZ:a}=this,r=0;return e==="3d"?a?({x:n,y:o,z:u})=>i({x:n,y:o,z:u}):({x:n,y:o})=>i({x:n,y:o,z:r}):({x:n,y:o})=>i({x:n,y:o})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,minValue:n,maxValue:o,scale:u,timeZone:c,outStatisticTypes:h}=e,f=this.fieldsIndex.get(t),m=ce(f)||ie(f)||ae(f),p=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:u,timeZone:c}),d=It({normalizationType:a,normalizationField:i,minValue:n,maxValue:o}),F={value:.5,fieldType:f?.type},_=X(f)?Fe({values:p,supportsNullCount:d,percentileParams:F,outStatisticTypes:h}):we({values:p,minValue:n,maxValue:o,useSampleStdDev:!a,supportsNullCount:d,percentileParams:F,outStatisticTypes:h});return mt(_,h,m)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domains:i,returnAllCodedValues:a,scale:r,timeZone:n}=e,o=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:s,scale:r,timeZone:n},!1),u=pt(o);return yt(u,i,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:h,scale:f,timeZone:m}=e,p=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:f,timeZone:m}),d=gt(p,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:h});return xt(d,n)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:h,scale:f,timeZone:m}=e,p=await this._getDataValues({field:t,valueExpression:s,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:f,timeZone:m});return _t(p,{field:t,normalizationField:i,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,s){if(e.length>1&&t?.length)for(const i of t.reverse()){const a=i.split(" "),r=a[0],n=this.fieldsIndex.get(r),o=!!a[1]&&a[1].toLowerCase()==="desc",u=Ft(n?.type,o);e.sort((c,h)=>{const f=s(c,r,n),m=s(h,r,n);return u(f,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:i,hasZ:a,objectIdField:r,spatialReference:n}=this,{outFields:o,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:f,returnZ:m,returnM:p}=e,d=h!=null&&t.length>(f||0)+h,F=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(_=>this.fieldsIndex.get(_)));return{exceededTransferLimit:d,features:this._createFeatures(e,t),fields:F,geometryType:s,hasM:i&&p,hasZ:a&&m,objectIdFieldName:r,spatialReference:j(u||n),transform:c&&_e(c)||null}}_createFeatures(e,t){const s=new H(e,this.featureAdapter,this.fieldsIndex),{hasM:i,hasZ:a}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:o,returnCentroid:u,maxAllowableOffset:c,resultOffset:h,resultRecordCount:f,returnZ:m=!1,returnM:p=!1}=e,d=a&&m,F=i&&p;let _=[],S=0;const I=[...t];if(this._sortFeatures(I,r,(y,w,x)=>s.getFieldValue(y,w,x)),this.geometryType&&(o||u)){const y=_e(n)??void 0,w=this.geometryType==="esriGeometryPolygon"||this.geometryType==="esriGeometryPolyline";if(o&&!u)for(const x of I){const T=this.featureAdapter.getGeometry(x),R={attributes:s.getAttributes(x),geometry:O(this.geometryType,this.hasZ,this.hasM,T,c,y,d,F)};w&&T&&!R.geometry&&(R.centroid=ee(this,this.featureAdapter.getCentroid(x,this),y)),_[S++]=R}else if(!o&&u)for(const x of I)_[S++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),y)};else for(const x of I)_[S++]={attributes:s.getAttributes(x),centroid:ee(this,this.featureAdapter.getCentroid(x,this),y),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(x),c,y,d,F)}}else for(const y of I){const w=s.getAttributes(y);w&&(_[S++]={attributes:w})}const g=h||0;if(f!=null){const y=g+f;_=_.slice(g,Math.min(_.length,y))}return _}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics??[])if(r.statisticType==="exceedslimit"){s=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,i=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>i)t=!0;else{const r=Re(this.hasZ,this.hasM),n=this.featureAdapter;t=this.items.reduce((o,u)=>{const c=n.getGeometry(u);return o+(c!=null&&c.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],i=new Map,a=new Map,r=new Map,n=new Map,o=new H(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:c,having:h,orderByFields:f,resultRecordCount:m}=e,p=c?.length,d=!!p,F=d?c[0]:null,_=d&&!this.fieldsIndex.get(F);for(const I of u??[]){const{outStatisticFieldName:g,statisticType:y}=I,w=I,x=y!=="exceedslimit"?I.onStatisticField:void 0,T=y==="percentile_disc"||y==="percentile_cont",R=y==="EnvelopeAggregate"||y==="CentroidAggregate"||y==="ConvexHullAggregate",C=d&&p===1&&(x===F||_)&&y==="count";if(d){if(!r.has(x)){const k=[];for(const K of c){const L=this._getAttributeValues(o,K,i);k.push(L)}r.set(x,this._calculateUniqueValues(k,!R&&o.returnDistinctValues))}const A=r.get(x);if(!A)continue;const Y=Object.keys(A);for(const k of Y){const{count:K,data:L,items:le,itemPositions:Pe}=A[k],oe=L.join(",");if(!h||o.validateItems(le,h)){const q=n.get(oe)||{attributes:{}};if(R){q.aggregateGeometries||(q.aggregateGeometries={});const{aggregateGeometries:$,outStatisticFieldName:N}=await this._getAggregateGeometry(w,le);q.aggregateGeometries[N]=$}else{let $=null;if(C)$=K;else{const N=this._getAttributeValues(o,x,i),ue=Pe.map(Ge=>N[Ge]);$=T&&"statisticParameters"in w?this._getPercentileValue(w,ue):this._getStatisticValue(w,ue,null,o.returnDistinctValues)}q.attributes[g]=$}let Ne=0;c.forEach(($,N)=>q.attributes[this.fieldsIndex.get($)?$:"EXPR_"+ ++Ne]=L[N]),n.set(oe,q)}}}else if(R){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:A,outStatisticFieldName:Y}=await this._getAggregateGeometry(w,this.items);t.aggregateGeometries[Y]=A}else{const A=this._getAttributeValues(o,x,i);t.attributes[g]=T&&"statisticParameters"in w?this._getPercentileValue(w,A):this._getStatisticValue(w,A,a,o.returnDistinctValues)}const B=y!=="min"&&y!=="max"||!X(this.fieldsIndex.get(x))&&!this._isAnyDateField(x)?null:this.fieldsIndex.get(x)?.type;s.push({name:g,alias:g,type:B||"esriFieldTypeDouble"})}const S=d?Array.from(n.values()):[t];return this._sortFeatures(S,f,(I,g)=>I.attributes[g]),m&&(S.length=Math.min(m,S.length)),{fields:s,features:S}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return ce(t)||ie(t)||ae(t)||Ae(t)}async _getAggregateGeometry(e,t){const{convexHull:s,union:i}=await ht(()=>import("./geometryEngineJSON-5ScVeRQz.js").then(d=>d.g),__vite__mapDeps([0,1,2,3]),import.meta.url),{statisticType:a,outStatisticFieldName:r}=e,{featureAdapter:n,spatialReference:o,geometryType:u,hasZ:c,hasM:h}=this,f=t.map(d=>O(u,c,h,n.getGeometry(d))),m=s(o,f,!0)[0],p={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const d=m?Oe(m):he(i(o,f));p.aggregateGeometries={...d,spatialReference:o},p.outStatisticFieldName=r||"extent"}else if(a==="CentroidAggregate"){const d=m?je(m):Ze(he(i(o,f)));p.aggregateGeometries={x:d[0],y:d[1],spatialReference:o},p.outStatisticFieldName=r||"centroid"}else a==="ConvexHullAggregate"&&(p.aggregateGeometries=m,p.outStatisticFieldName=r||"convexHull");return p}_getStatisticValue(e,t,s,i){const{onStatisticField:a,statisticType:r}=e;let n=null;return n=s?.has(a)?s.get(a):X(this.fieldsIndex.get(a))||this._isAnyDateField(a)?Fe({values:t,returnDistinct:i}):we({values:i?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(a,n),n[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:i,statisticType:a}=e,{value:r,orderBy:n}=i,o=this.fieldsIndex.get(s);return wt(t,{value:r,orderBy:n,fieldType:o?.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const i=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,i));return s.set(t,a),a}_calculateUniqueValues(e,t){const s={},i=this.items,a=i.length;for(let r=0;r<a;r++){const n=i[r],o=[];for(const c of e)o.push(c[r]);const u=o.join(",");s[u]==null?s[u]={count:1,data:o,items:[n],itemPositions:[r]}:(t||s[u].count++,s[u].items.push(n),s[u].itemPositions.push(r))}return s}async _getDataValues(e,t=!0){const s=new H(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,scale:a,timeZone:r}=e;return i?s.getExpressionValues(this.items,i,{viewingMode:"map",scale:a,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},r):s.getDataValues(this.items,J(e),t)}}function Mt(l,e,t,s){const i=s.x-t.x,a=s.y-t.y,r=i*i+a*a,n=(e.x-t.x)*i+(e.y-t.y)*a,o=Math.min(1,Math.max(0,n/r));l.x=t.x+i*o,l.y=t.y+a*o}function Re(l,e){return l?e?4:3:e?3:2}class ve{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}const P="unsupported-query";async function be(l,{fieldsIndex:e,geometryType:t,spatialReference:s,availableFields:i}){if((l.distance??0)<0||l.geometryPrecision!=null||l.multipatchOption&&l.multipatchOption!=="xyFootprint"||l.pixelSize||l.relationParam||l.text)throw new b(P,"Unsupported query options",{query:l});return Qe(e,i,l),Qt(e,i,l),Promise.all([Ve(l,t,s),re(s,l.outSR)]).then(()=>l)}function Qe(l,e,t){const{outFields:s,orderByFields:i,returnDistinctValues:a,outStatistics:r}=t,n=r?r.map(o=>o.outStatisticFieldName&&o.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(i&&i.length>0){const o=" asc",u=" desc",c=i.map(h=>{const f=h.toLowerCase();return f.includes(o)?f.split(o)[0]:f.includes(u)?f.split(u)[0]:h}).filter(h=>!n.includes(h));z(l,e,c,{expressionName:"orderByFields",query:t})}if(s&&s.length>0)z(l,e,s,{expressionName:"outFields",query:t,allowedFieldTypes:"all"});else if(a)throw new b(P,"outFields should be specified for returnDistinctValues",{query:t});vt(l,e,t.where,t)}const qt=new Set([...De,...Me]);function Qt(l,e,t){const{outStatistics:s,groupByFieldsForStatistics:i,having:a}=t,r=i?.length,n=s?.length;if(a){if(!r||!n)throw new b(P,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:t});bt(l,e,a,s,t)}if(n){if(!Gt(s))return;const o=s.map(u=>u.onStatisticField).filter(Boolean);z(l,e,o,{expressionName:"onStatisticFields",query:t}),r&&z(l,e,i,{expressionName:"groupByFieldsForStatistics",query:t});for(const u of s){const{onStatisticField:c,statisticType:h}=u;if((h==="percentile_disc"||h==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:f}=u;if(!f)throw new b(P,"statisticParameters should be set for percentile type",{definition:u,query:t})}else l.get(c)&&h!=="count"&&h!=="min"&&h!=="max"&&z(l,e,[c],{expressionName:`outStatistics with '${h}' statistic type`,allowedFieldTypes:qt,query:t})}}}async function Pt(l,e,{fieldsIndex:t,geometryType:s,spatialReference:i,availableFields:a}){if((l.distance??0)<0||l.geometryPrecision!=null||l.multipatchOption||l.pixelSize||l.relationParam||l.text||l.outStatistics||l.groupByFieldsForStatistics||l.having||l.orderByFields)throw new b(P,"Unsupported query options",{query:l});return Qe(t,a,l),Promise.all([Nt(t,a,e,l),Ve(l,s,i),re(i,l.outSR)]).then(()=>l)}async function Nt(l,e,t,s){let i=[];if(t.valueExpression){const{arcadeUtils:a}=await Ee();i=a.extractFieldNames(t.valueExpression)}if(t.field&&i.push(t.field),t.field2&&i.push(t.field2),t.field3&&i.push(t.field3),t.normalizationField&&i.push(t.normalizationField),!i.length&&!t.valueExpression)throw new b(P,"field or valueExpression is required",{params:t});z(l,e,i,{expressionName:"statistics",query:s})}function Gt(l){return l!=null&&l.every(e=>e.statisticType!=="exceedslimit")}const Ot="unsupported-query";class ls{constructor(e){this._cache=new $t,this._changeHandle=null,this.capabilities={query:ct},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,this.fieldsIndex=Be(e.fieldsIndex)?e.fieldsIndex:St.fromJSON(e.fieldsIndex),!e.availableFields||e.availableFields.length===1&&e.availableFields[0]==="*"?this.availableFields=new Set(this.fieldsIndex.fields.map(t=>t.name)):this.availableFields=new Set(e.availableFields.map(t=>this.fieldsIndex.get(t)?.name).filter(t=>t!=null)),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=de(this._frameTask),this.clearCache(),ke(this._cache),this._changeHandle=de(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._cache.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const s=E(t);try{return await(await this._executeQuery(e,{},s)).createQueryResponse()}catch(i){if(i!==Q)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const s=E(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},s)).createQueryResponseForCount()}catch(i){if(i!==Q)throw i;return 0}}async executeQueryForExtent(e,t){const s=E(t),i=e.outSR;try{const a=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),r=a.size;return r?{count:r,extent:await this._getBounds(a.items,a.spatialReference,i||this.spatialReference)}:{count:0,extent:null}}catch(a){if(a===Q)return{count:0,extent:null};throw a}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(s=>Array.from(s))}async executeQueryForIdSet(e,t){const s=E(t);try{const i=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},s),a=i.items,r=new Set;return await this._reschedule(()=>{for(const n of a)r.add(i.featureAdapter.getObjectId(n))},s),r}catch(i){if(i===Q)return new Set;throw i}}async executeQueryForSnapping(e,t){const s=E(t),{point:i,distance:a,returnEdge:r,vertexMode:n}=e;if(!r&&n==="none")return{candidates:[]};let o=J(e.query);o=await this._schedule(()=>ot(o,this.definitionExpression,this.spatialReference),s),o=await this._reschedule(()=>be(o,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const u=!V(i.spatialReference,this.spatialReference);u&&await re(i.spatialReference,this.spatialReference);const c=typeof a=="number"?a:a.x,h=typeof a=="number"?a:a.y,f={xmin:i.x-c,xmax:i.x+c,ymin:i.y-h,ymax:i.y+h,spatialReference:i.spatialReference},m=u?D(f,this.spatialReference):f;if(!m)return{candidates:[]};const p=(await pe(fe(i),null,{signal:s}))[0],d=(await pe(fe(m),null,{signal:s}))[0];if(p==null||d==null)return{candidates:[]};const F=new v(await this._reschedule(()=>this._searchFeatures(se(d.toJSON())),s),o,this);await this._reschedule(()=>this._executeObjectIdsQuery(F),s),await this._reschedule(()=>this._executeTimeQuery(F),s),await this._reschedule(()=>this._executeAttributesQuery(F),s),await this._reschedule(()=>this._executeGeometryQueryForSnapping(F,s),s);const _=p.toJSON(),S=u?D(_,this.spatialReference):_,I=u?Math.max(m.xmax-m.xmin,m.ymax-m.ymin)/2:a;return F.createSnappingResponse({...e,point:S,distance:I},i.spatialReference)}async executeQueryForLatestObservations(e,t){const s=E(t);if(!this.timeInfo?.trackIdField)throw new b(Ot,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const i=await this._executeQuery(e,{},s);return await this._reschedule(()=>this._filterLatest(i),s),await i.createQueryResponse()}catch(i){if(i!==Q)throw i;return new v([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,s){const i=E(s),{field:a,field2:r,field3:n,valueExpression:o}=t;return(await this._executeQueryForStatistics(e,{field:a,field2:r,field3:n,valueExpression:o},i)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,s){const i=E(s),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},i)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=E(e);this._timeExtentPromise||=nt(this.timeInfo,this.featureStore);const[s,i]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return Le(t),{fullExtent:s,timeExtent:i}}async _getBounds(e,t,s){const i=He(Je(),Ue);await this.featureStore.forEachBounds(e,n=>Ye(i,n));const a={xmin:i[0],ymin:i[1],xmax:i[3],ymax:i[4],spatialReference:j(this.spatialReference)};this.hasZ&&isFinite(i[2])&&isFinite(i[5])&&(a.zmin=i[2],a.zmax=i[5],a.hasZ=!0);const r=D(a,t,s);if(r.spatialReference=j(s),r.xmax-r.xmin==0){const n=W(r.spatialReference);r.xmin-=n,r.xmax+=n}if(r.ymax-r.ymin==0){const n=W(r.spatialReference);r.ymin-=n,r.ymax+=n}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const n=W(r.spatialReference);r.zmin-=n,r.zmax+=n}return r}_getFullExtent(){return this._fullExtentPromise||="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then(e=>this._getBounds(e,this.spatialReference,this.spatialReference)),this._fullExtentPromise}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(Ie)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(Ie)}async _getAllFeaturesQueryEngineResult(e){return new v(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const s=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(i=>s.push(i))})().then(()=>s)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,s){e=J(e),e=await this._schedule(()=>xe(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>be(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s),e={...e,...t};const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:s,returnGeometry:i,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,o=r==null||V(r,n.spatialReference)?n:D(n,r);if(!o)return null;const u=i||a,c=U(s)&&!V(this.spatialReference,s)&&u?async d=>this._project(d,s):d=>d,h=this.featureAdapter,f=await this._reschedule(()=>this._searchFeatures(se(o)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!f.length)return null;const d=new Set;for(const S of f)d.add(h.getObjectId(S));const F=await this._reschedule(()=>this._getAllFeatures(),t),_=await this._reschedule(async()=>{const S=await G("esriSpatialRelDisjoint",o,this.geometryType,this.hasZ,this.hasM),I=y=>!d.has(h.getObjectId(y))||S(h.getGeometry(y)),g=await this._runSpatialFilter(F,I,t);return new v(g,e,this)},t);return c(_)}if(!f.length)return new v([],e,this);if(this._canExecuteSinglePass(o,e))return c(new v(f,e,this));const m=await G("esriSpatialRelContains",o,this.geometryType,this.hasZ,this.hasM),p=await this._runSpatialFilter(f,d=>m(h.getGeometry(d)),t);return c(new v(p,e,this))}async _executeGeometryQuery(e,t,s){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:i,outSR:a,spatialRel:r,returnGeometry:n,returnCentroid:o}=e,u=this.featureStore.featureSpatialReference,c=!i||u==null||V(u,i.spatialReference)?i:D(i,u),h=n||o,f=U(a)&&!V(this.spatialReference,a),m=t==null?this._getCacheKey(e):null,p=m?this._cache.get(m):null;if(p!=null)return new v(p,e,this);const d=async g=>(f&&h&&await this._project(g,a),m&&this._cache.put(m,g.items),g);if(!c)return d(t??await this._getAllFeaturesQueryEngineResult(e));const F=this.featureAdapter;let _=await this._reschedule(()=>this._searchFeatures(se(i)),s);if(r==="esriSpatialRelDisjoint"){if(!_.length)return d(t??await this._getAllFeaturesQueryEngineResult(e));const g=new Set;for(const x of _)g.add(F.getObjectId(x));const y=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),s),w=await this._reschedule(async()=>{const x=await G(r,c,this.geometryType,this.hasZ,this.hasM),T=C=>!g.has(F.getObjectId(C))||x(F.getGeometry(C)),R=await this._runSpatialFilter(y,T,s);return new v(R,e,this)},s);return d(w)}if(t!=null){const g=new st;_=_.filter(y=>Ke(t.items,y,t.items.length,g)>=0)}if(!_.length){const g=new v([],e,this);return m&&this._cache.put(m,g.items),g}if(this._canExecuteSinglePass(c,e))return d(new v(_,e,this));const S=await G(r,c,this.geometryType,this.hasZ,this.hasM),I=await this._runSpatialFilter(_,g=>S(F.getGeometry(g)),s);return d(new v(I,e,this))}async _executeGeometryQueryForSnapping(e,t){const{query:s}=e,{spatialRel:i}=s;if(!e?.items?.length||!s.geometry||!i)return;const a=await G(i,s.geometry,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(e.items,n=>a(n.geometry),t);e.items=r}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds?.length||this.aggregateAdapter==null)return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach(a=>t.add(a));const s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds?.length)return;const t=new Set(e.query.objectIds),s=this.featureAdapter.getObjectId;e.items=e.items.filter(i=>t.has(s(i)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=lt(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=M(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(s=>t.testFeature(s,this.featureAdapter))}}async _runSpatialFilter(e,t,s){if(!t)return e;if(this._frameTask==null)return e.filter(n=>t(n));let i=0;const a=new Array,r=async n=>{for(;i<e.length;){const o=e[i++];t(o)&&(a.push(o),n.madeProgress()),n.done&&await this._reschedule(u=>r(u),s)}};return this._reschedule(n=>r(n),s).then(()=>a)}_filterLatest(e){const{trackIdField:t,startTimeField:s,endTimeField:i}=this.timeInfo,a=i||s,r=new Map,n=this.featureAdapter.getAttribute;for(const o of e.items){const u=n(o,t),c=n(o,a),h=r.get(u);(!h||c>n(h,a))&&r.set(u,o)}e.items=Array.from(r.values())}_getCacheKey(e){const{geometry:t,spatialRel:s,returnGeometry:i,returnCentroid:a,outSR:r,resultType:n,cacheHint:o}=e;if(n!=="tile"&&!o)return null;const u=i||a;return U(r)&&!V(this.spatialReference,r)&&u?JSON.stringify([t,s,r]):JSON.stringify([t,s])}_canExecuteSinglePass(e,t){const{spatialRel:s}=t;return $e(e)&&(s==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(s==="esriSpatialRelIntersects"||s==="esriSpatialRelContains"))}async _project(e,t){if(!t||V(this.spatialReference,t))return e;const s=this.featureAdapter;let i;try{const r=await this._getFullExtent();i=it(this.spatialReference,t,r)}catch{}const a=await ut(e.items.map(r=>O(this.geometryType,this.hasZ,this.hasM,s.getGeometry(r))),this.spatialReference,t,i);return e.items=a.map((r,n)=>s.cloneWithGeometry(e.items[n],at(r,this.hasZ,this.hasM))),e}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(i=>this.featureStore.forEachInBounds(i,a=>t.add(a))));const s=Array.from(t.values());return t.clear(),s}async _executeQueryForStatistics(e,t,s){e=J(e);try{e=await this._schedule(()=>xe(e,this.definitionExpression,this.spatialReference),s),e=await this._reschedule(()=>Pt(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),s);const i=await this._reschedule(()=>this._executeSceneFilterQuery(e,s),s),a=await this._reschedule(()=>this._executeGeometryQuery(e,i,s),s);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),s),await this._reschedule(()=>this._executeObjectIdsQuery(a),s),await this._reschedule(()=>this._executeTimeQuery(a),s),await this._reschedule(()=>this._executeAttributesQuery(a),s),a}catch(i){if(i!==Q)throw i;return new v([],e,this)}}}function se(l){if($e(l)){if(Xe(l))return[me(Math.min(l.xmin,l.xmax),Math.min(l.ymin,l.ymax),Math.max(l.xmin,l.xmax),Math.max(l.ymin,l.ymax))];if(We(l))return l.rings.map(e=>me(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1])))}return[et(tt(),l)]}export{ls as V};
