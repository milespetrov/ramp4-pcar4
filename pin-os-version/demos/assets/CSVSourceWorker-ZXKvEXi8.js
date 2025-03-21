import{at as I,cc as k,s as F,cd as j,H as V,n as P,I as R,U as L,an as b,am as A,bj as G,cO as Q,ey as M,D as J,cb as Z,bD as U}from"./main-DCUo5ucN.js";import{e as Y,n as B}from"./date-Dw3OHnFv.js";import{O as H}from"./projection-9wSOojrC.js";import{t as K}from"./json-Wa8cmqdu.js";import{e as W,s as z}from"./OptimizedFeature-CIptWNVu.js";import{m as X}from"./FeatureStore-B7nFWNhe.js";import{x as ee}from"./queryUtils-QoswTkvr.js";import{V as te}from"./QueryEngine-S1xussQc.js";import{c as ie}from"./number-B7DVMz_W.js";import{a as ne,u as re}from"./clientSideDefaults-w4zGvl50.js";import{Z as _}from"./FieldsIndex-DHv2VH2J.js";import"./preload-helper-ExcqyqRp.js";import"./projectBuffer-CWdhG1s6.js";import"./featureConversionUtils-D5NOYIiA.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BoundsStore-BKN89iwP.js";import"./PooledRBush-BFvBqy3M.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-Cm9hBzHA.js";import"./optimizedFeatureQueryEngineAdapter-CfIWy1Q1.js";import"./normalizeUtils-sOvjrTA6.js";import"./normalizeUtilsCommon-DB6g69Ft.js";import"./utils-jGCJAqNu.js";import"./utils-DFjrWr6A.js";import"./LRUCache-vsrSNm30.js";import"./WhereClause-NUjhK9RC.js";import"./TimeOnly-BbRQARDF.js";import"./UnknownTimeZone-DL_XJCWm.js";import"./fieldType-s1fg9hmT.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./quantizationUtils-TdqxBSAG.js";import"./utils-DeAyng-x.js";import"./TimeExtent-Bij4_KtL.js";import"./heatmapUtils-xKLiXWAW.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-CAFGx6hz.js";import"./Basemap-BkppVmkQ.js";import"./loadAll-9QglhM1r.js";import"./PortalItem-CrAmt9yr.js";import"./writeUtils-CGzXCOmc.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CYCw_qqb.js";import"./utils-C1wn-8BH.js";import"./ClassBreaksDefinition-BT3gotDk.js";import"./Scheduler-kIx7Ig8S.js";import"./signal-BdtRNBYI.js";import"./capabilities-Y9lFlGVh.js";function oe(o,i,e){i=I(i)?.toLowerCase(),e=I(e)?.toLowerCase();const t=o.map(s=>s.toLowerCase()),n=i?o[t.indexOf(i)]:null,a=e?o[t.indexOf(e)]:null;return{longitudeFieldName:n||o[t.indexOf(ae.find(s=>t.includes(s)))],latitudeFieldName:a||o[t.indexOf(se.find(s=>t.includes(s)))]}}const se=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],ae=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],T=/^\s*"([\S\s]*)"\s*$/,E=/""/g,O=`
`,le=[","," ",";","|","	"];function*S(o,i,e){let t=0;for(;t<=o.length;){const n=o.indexOf(i,t),a=o.slice(t,n>-1?n:void 0);t+=a.length+i.length,e&&!a.trim()||(yield a)}}function $(o){const i=o.includes(`\r
`)?`\r
`:O;return S(o,i,!0)}function q(o,i){return S(o,i,!1)}function ce(o,i,e){o=o.trim(),i=i?.trim();const t=[],n=Array.from(new Set([e?.delimiter,...le])).filter(s=>s!=null);for(const s of n){const l=N(o,s).length,c=N(i,s).length??l;l>1&&t.push({weight:Math.min(l,c),delimiter:s})}const a=t.sort(({weight:s},{weight:l})=>l-s).map(({delimiter:s})=>s);for(const s of a){const l=v(o,s).names,c=oe(l,e?.longitudeField,e?.latitudeField);if(c.longitudeFieldName&&c.latitudeFieldName)return{delimiter:s,locationInfo:c}}return{delimiter:a[0],locationInfo:null}}function*C(o,i,e,t=()=>Object.create(null)){const n=$(o);n.next();let a="",s="",l=0,c=t(),d=0;e:for(const y of n){const f=q(y,e);for(const p of f)if(a+=s+p,s="",l+=D(p),l%2==0){if(l>0){const h=T.exec(a);if(!h){c=t(),d=0,a="",l=0;continue e}c[i[d]]=h[1].replaceAll(E,'"'),d++}else c[i[d]]=a,d++;a="",l=0}else s=e;l===0?(yield c,c=t(),d=0):s=O}}function v(o,i){const e=N(o,i).filter(n=>n!=null),t=e.map(n=>I(n));for(let n=t.length-1;n>=0;n--)t[n]||(t.splice(n,1),e.splice(n,1));return{names:t,aliases:e}}function N(o,i){if(!o?.length)return[];const e=[];let t="",n="",a=0;const s=q(o,i);for(const l of s)if(t+=n+l,n="",a+=D(l),a%2==0){if(a>0){const c=T.exec(t);c&&e.push(c[1].replaceAll(E,'"'))}else e.push(t);t="",a=0}else n=i;return e}function D(o){let i=0,e=0;for(e=o.indexOf('"',e);e>=0;)i++,e=o.indexOf('"',e+1);return i}function ue(o,i,e,t,n){const a=[],s=C(o,e,i),l=[];for(const c of s){if(l.length===10)break;l.push(c)}for(let c=0;c<e.length;c++){const d=e[c],y=t[c];if(d===n.longitudeFieldName||d===n.latitudeFieldName)a.push({name:d,type:"esriFieldTypeDouble",alias:y});else{let f;switch(de(l.map(p=>p[d]))){case"integer":f="esriFieldTypeInteger";break;case"double":f="esriFieldTypeDouble";break;case"date":f="esriFieldTypeDate";break;default:f="esriFieldTypeString"}a.push({name:d,type:f,alias:y,length:k(f)})}}return a}function de(o){if(!o.length)return"string";const i=/[^+\-.,0-9]/;return o.map(e=>{if(e!==""){if(!i.test(e)){let t=w(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")&&(t=Number(e),!Number.isNaN(t)||e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t))))return"double"}return Y(e)?"date":"string"}}).reduce((e,t)=>e===void 0?t:t===void 0?e:e===t?t:e==="string"||t==="string"?"string":e==="double"||t==="double"?"double":void 0)}const w=function(){const o=ie(),i=new RegExp("^"+o.regexp+"$"),e=new RegExp("["+o.group+"\\s\\xa0]","g"),t=o.factor;return n=>{const a=i.exec(n);if(o.factor=t,!a)return NaN;let s=a[1];if(!a[1]){if(!a[2])return NaN;s=a[2],o.factor*=-1}return s=s.replace(e,"").replace(o.decimal,"."),+s*o.factor}}();function me(o){return JSON.parse(JSON.stringify(o))}const fe=re("esriGeometryPoint"),pe=["csv"],he=[0,0];class ye{constructor(i,e){this.x=i,this.y=e}}class ft{constructor(){this._queryEngine=null,this._snapshotFeatures=async i=>{const e=await this._fetch(i);return this._createFeatures(e)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(i,e={}){this._loadOptions=i;const[t]=await Promise.all([this._fetch(e.signal),this._checkProjection(i?.parsingOptions?.spatialReference)]),n=ge(t,i);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const a=await this._createFeatures(t);this._queryEngine.featureStore.addMany(a);const{fullExtent:s,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=s,l){const{start:c,end:d}=l;n.layerDefinition.timeInfo.timeExtent=[c,d]}return n}async applyEdits(){throw new F("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(i={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(i,e.signal)}async queryFeatureCount(i={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(i,e.signal)}async queryObjectIds(i={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(i,e.signal)}async queryExtent(i={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(i,e.signal)}async querySnapping(i,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(i,e.signal)}async refresh(i){this._loadOptions.customParameters=i,this._snapshotTask?.abort(),this._snapshotTask=j(this._snapshotFeatures),this._snapshotTask.promise.then(n=>{this._queryEngine.featureStore.clear(),n&&this._queryEngine.featureStore.addMany(n)},n=>{this._queryEngine.featureStore.clear(),V(n)||P.getLogger("esri.layers.CSVLayer").error(new F("csv-layer:refresh","An error occurred during refresh",{error:n}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:t}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:t}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(i){const{url:e,customParameters:t}=this._loadOptions;if(!e)throw new F("csv-layer:invalid-source","url not defined");const n=R(e);return(await L(n.path,{query:{...n.query,...t},responseType:"text",signal:i})).data}_createQueryEngine(i){const{objectIdField:e,fields:t,extent:n,timeInfo:a}=i.layerDefinition,s=new X({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new te({fieldsIndex:_.fromLayerJSON({fields:t,dateFieldsTimeReference:{timeZoneIANA:b}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:a,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},featureStore:s})}async _createFeatures(i){const{latitudeFieldName:e,longitudeFieldName:t}=this._locationInfo,{objectIdField:n,fieldsIndex:a,spatialReference:s}=this._queryEngine;let l=[];const c=[],d=a.fields.filter(r=>r.name!==n).map(r=>r.name);let y=0;const f={};for(const r of a.fields)if(r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"){const u=A(r);u!==void 0&&(f[r.name]=u)}const p=C(i,d,this._delimiter,ne(f,n));for(const r of p){const u=this._parseCoordinateValue(r[e]),g=this._parseCoordinateValue(r[t]);if(g!=null&&u!=null&&!isNaN(u)&&!isNaN(g)){r[e]=u,r[t]=g;for(const m in r)if(m!==e&&m!==t)if(a.isDateField(m))r[m]=B(r[m]);else if(a.isNumericField(m)){const x=w(r[m]);isNaN(x)?r[m]=null:r[m]=x}else r[m]!=null&&(r[m]=me(r[m]));r[n]=y,y++,l.push(new ye(g,u)),c.push(r)}}if(!G({wkid:4326},s))if(Q(s))for(const r of l)[r.x,r.y]=M(r.x,r.y,he);else l=H(K,l,J.WGS84,s,null,null);const h=[];for(let r=0;r<l.length;r++){const{x:u,y:g}=l[r],m=c[r];m[n]=r+1,h.push(new W(new z([],[u,g]),m,null,m[n]))}return h}_parseCoordinateValue(i){if(i==null||i==="")return null;let e=w(i);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(i)),e}async _checkProjection(i){try{await ee(Z,i)}catch{throw new F("csv-layer:projection-not-supported","Projection not supported")}}}function ge(o,i){const e=i.parsingOptions||{},t={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=t.layerDefinition={name:U(i.url,pe)||"csv",dateFieldsTimeReference:{timeZoneIANA:b},drawingInfo:fe,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},a=$(o),s=a.next().value?.trim(),l=a.next().value?.trim();if(!s)throw new F("csv-layer:empty-csv","CSV is empty",{csv:o});const{delimiter:c,locationInfo:d}=ce(s,l,e);if(!c)throw new F("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:s,secondLine:l,parsingOptions:e});if(!d)throw new F("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:s,secondLine:l,parsingOptions:e});t.locationInfo=d,t.delimiter=c;const{names:y,aliases:f}=v(s,c),p=ue(o,t.delimiter,y,f,t.locationInfo);if(e.fields?.length){const r=new _(e.fields);for(const u of p){const g=r.get(u.name);g&&Object.assign(u,g)}}if(!p.some(r=>r.type==="esriFieldTypeOID"&&(n.objectIdField=r.name,!0))){const r={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=r.name,p.unshift(r)}n.fields=p;const h=new _(n.fields);if(t.locationInfo&&(t.locationInfo.latitudeFieldName=h.get(t.locationInfo.latitudeFieldName).name,t.locationInfo.longitudeFieldName=h.get(t.locationInfo.longitudeFieldName).name),n.timeInfo){const r=n.timeInfo;if(r.startTimeField){const u=h.get(r.startTimeField);u?(r.startTimeField=u.name,u.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const u=h.get(r.endTimeField);u?(r.endTimeField=u.name,u.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const u=h.get(r.trackIdField);r.trackIdField=u?u.name:null}r.startTimeField||r.endTimeField||(n.timeInfo=null)}return t}export{ft as default};
