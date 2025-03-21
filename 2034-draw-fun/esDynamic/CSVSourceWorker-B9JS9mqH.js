import{aZ as I,cl as j,s as F,cm as P,J as V,n as R,I as L,U as A,aT as T,aS as G,bx as Q,ae as J,f0 as M,E as Z,ck as Y,bP as U}from"./main-CZM6prq-.js";import{e as B,n as $}from"./date-Cqvy-TgA.js";import{O as W}from"./projection-BCWa6dVm.js";import{t as z}from"./json-BI97KiBB.js";import{e as H}from"./OptimizedFeature-B5Ql55xb.js";import{s as K}from"./OptimizedGeometry-B-8pbmIt.js";import{m as X}from"./FeatureStore-Cdv9lxXX.js";import{x as ee}from"./queryUtils-CAyoE34s.js";import{V as te}from"./QueryEngine-C14JfLJe.js";import{c as ne}from"./number-CGoF3pNk.js";import{a as ie,u as se}from"./clientSideDefaults-b8_fB1oo.js";import{Z as _}from"./FieldsIndex-DwqQucqu.js";function oe(o,n,e){n=I(n)?.toLowerCase(),e=I(e)?.toLowerCase();const t=o.map(a=>a.toLowerCase()),i=n?o[t.indexOf(n)]:null,r=e?o[t.indexOf(e)]:null;return{longitudeFieldName:i||o[t.indexOf(re.find(a=>t.includes(a)))],latitudeFieldName:r||o[t.indexOf(ae.find(a=>t.includes(a)))]}}const ae=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],re=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],E=/^\s*"([\S\s]*)"\s*$/,b=/""/g,S=`
`,le=[","," ",";","|","	"];function*O(o,n,e){let t=0;for(;t<=o.length;){const i=o.indexOf(n,t),r=o.slice(t,i>-1?i:void 0);t+=r.length+n.length,e&&!r.trim()||(yield r)}}function q(o){const n=o.includes(`\r
`)?`\r
`:S;return O(o,n,!0)}function C(o,n){return O(o,n,!1)}function ce(o,n,e){o=o.trim(),n=n?.trim();const t=[],i=Array.from(new Set([e?.delimiter,...le])).filter(a=>a!=null);for(const a of i){const l=N(o,a).length,c=N(n,a).length??l;l>1&&t.push({weight:Math.min(l,c),delimiter:a})}const r=t.sort(({weight:a},{weight:l})=>l-a).map(({delimiter:a})=>a);for(const a of r){const l=k(o,a).names,c=oe(l,e?.longitudeField,e?.latitudeField);if(c.longitudeFieldName&&c.latitudeFieldName)return{delimiter:a,locationInfo:c}}return{delimiter:r[0],locationInfo:null}}function*v(o,n,e,t=()=>Object.create(null)){const i=q(o);i.next();let r="",a="",l=0,c=t(),d=0;e:for(const y of i){const m=C(y,e);for(const p of m)if(r+=a+p,a="",l+=D(p),l%2==0){if(l>0){const h=E.exec(r);if(!h){c=t(),d=0,r="",l=0;continue e}c[n[d]]=h[1].replaceAll(b,'"'),d++}else c[n[d]]=r,d++;r="",l=0}else a=e;l===0?(yield c,c=t(),d=0):a=S}}function k(o,n){const e=N(o,n).filter(i=>i!=null),t=e.map(i=>I(i));for(let i=t.length-1;i>=0;i--)t[i]||(t.splice(i,1),e.splice(i,1));return{names:t,aliases:e}}function N(o,n){if(!o?.length)return[];const e=[];let t="",i="",r=0;const a=C(o,n);for(const l of a)if(t+=i+l,i="",r+=D(l),r%2==0){if(r>0){const c=E.exec(t);c&&e.push(c[1].replaceAll(b,'"'))}else e.push(t);t="",r=0}else i=n;return e}function D(o){let n=0,e=0;for(e=o.indexOf('"',e);e>=0;)n++,e=o.indexOf('"',e+1);return n}function ue(o,n,e,t,i){const r=[],a=v(o,e,n),l=[];for(const c of a){if(l.length===10)break;l.push(c)}for(let c=0;c<e.length;c++){const d=e[c],y=t[c];if(d===i.longitudeFieldName||d===i.latitudeFieldName)r.push({name:d,type:"esriFieldTypeDouble",alias:y});else{let m;switch(de(l.map(p=>p[d]))){case"integer":m="esriFieldTypeInteger";break;case"double":m="esriFieldTypeDouble";break;case"date":m="esriFieldTypeDate";break;default:m="esriFieldTypeString"}r.push({name:d,type:m,alias:y,length:j(m)})}}return r}function de(o){if(!o.length)return"string";const n=/[^+\-.,0-9]/;return o.map(e=>{if(e!==""){if(!n.test(e)){let t=w(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")&&(t=Number(e),!Number.isNaN(t)||e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t))))return"double"}return B(e)?"date":"string"}}).reduce((e,t)=>e===void 0?t:t===void 0?e:e===t?t:e==="string"||t==="string"?"string":e==="double"||t==="double"?"double":void 0)}const w=function(){const o=ne(),n=new RegExp("^"+o.regexp+"$"),e=new RegExp("["+o.group+"\\s\\xa0]","g"),t=o.factor;return i=>{const r=n.exec(i);if(o.factor=t,!r)return NaN;let a=r[1];if(!r[1]){if(!r[2])return NaN;a=r[2],o.factor*=-1}return a=a.replace(e,"").replace(o.decimal,"."),+a*o.factor}}();function fe(o){return JSON.parse(JSON.stringify(o))}const me=se("esriGeometryPoint"),pe=["csv"],he=[0,0];class ye{constructor(n,e){this.x=n,this.y=e}}class ge{constructor(){this._queryEngine=null,this._snapshotFeatures=async n=>{const e=await this._fetch(n);return this._createFeatures(e)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(n,e={}){this._loadOptions=n;const[t]=await Promise.all([this._fetch(e.signal),this._checkProjection(n?.parsingOptions?.spatialReference)]),i=Fe(t,n);this._locationInfo=i.locationInfo,this._delimiter=i.delimiter,this._queryEngine=this._createQueryEngine(i);const r=await this._createFeatures(t);this._queryEngine.featureStore.addMany(r);const{fullExtent:a,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(i.layerDefinition.extent=a,l){const{start:c,end:d}=l;i.layerDefinition.timeInfo.timeExtent=[c,d]}return i}async applyEdits(){throw new F("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(n,e.signal)}async queryFeatureCount(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(n,e.signal)}async queryObjectIds(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(n,e.signal)}async queryExtent(n={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(n,e.signal)}async querySnapping(n,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(n,e.signal)}async refresh(n){this._loadOptions.customParameters=n,this._snapshotTask?.abort(),this._snapshotTask=P(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),V(i)||R.getLogger("esri.layers.CSVLayer").error(new F("csv-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:t}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:t}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(n){const{url:e,customParameters:t}=this._loadOptions;if(!e)throw new F("csv-layer:invalid-source","url not defined");const i=L(e);return(await A(i.path,{query:{...i.query,...t},responseType:"text",signal:n})).data}_createQueryEngine(n){const{objectIdField:e,fields:t,extent:i,timeInfo:r}=n.layerDefinition,a=new X({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new te({fieldsIndex:_.fromLayerJSON({fields:t,dateFieldsTimeReference:{timeZoneIANA:T}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:e,spatialReference:i.spatialReference||{wkid:4326},featureStore:a})}async _createFeatures(n){const{latitudeFieldName:e,longitudeFieldName:t}=this._locationInfo,{objectIdField:i,fieldsIndex:r,spatialReference:a}=this._queryEngine;let l=[];const c=[],d=r.fields.filter(s=>s.name!==i).map(s=>s.name);let y=0;const m={};for(const s of r.fields)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const u=G(s);u!==void 0&&(m[s.name]=u)}const p=v(n,d,this._delimiter,ie(m,i));for(const s of p){const u=this._parseCoordinateValue(s[e]),g=this._parseCoordinateValue(s[t]);if(g!=null&&u!=null&&!isNaN(u)&&!isNaN(g)){s[e]=u,s[t]=g;for(const f in s)if(f!==e&&f!==t)if(r.isDateField(f))s[f]=$(s[f]);else if(r.isNumericField(f)){const x=w(s[f]);isNaN(x)?s[f]=null:s[f]=x}else s[f]!=null&&(s[f]=fe(s[f]));s[i]=y,y++,l.push(new ye(g,u)),c.push(s)}}if(!Q({wkid:4326},a))if(J(a))for(const s of l)[s.x,s.y]=M(s.x,s.y,he);else l=W(z,l,Z.WGS84,a,null,null);const h=[];for(let s=0;s<l.length;s++){const{x:u,y:g}=l[s],f=c[s];f[i]=s+1,h.push(new H(new K([],[u,g]),f,null,f[i]))}return h}_parseCoordinateValue(n){if(n==null||n==="")return null;let e=w(n);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(n)),e}async _checkProjection(n){try{await ee(Y,n)}catch{throw new F("csv-layer:projection-not-supported","Projection not supported")}}}function Fe(o,n){const e=n.parsingOptions||{},t={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},i=t.layerDefinition={name:U(n.url,pe)||"csv",dateFieldsTimeReference:{timeZoneIANA:T},drawingInfo:me,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},r=q(o),a=r.next().value?.trim(),l=r.next().value?.trim();if(!a)throw new F("csv-layer:empty-csv","CSV is empty",{csv:o});const{delimiter:c,locationInfo:d}=ce(a,l,e);if(!c)throw new F("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:a,secondLine:l,parsingOptions:e});if(!d)throw new F("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:a,secondLine:l,parsingOptions:e});t.locationInfo=d,t.delimiter=c;const{names:y,aliases:m}=k(a,c),p=ue(o,t.delimiter,y,m,t.locationInfo);if(e.fields?.length){const s=new _(e.fields);for(const u of p){const g=s.get(u.name);g&&Object.assign(u,g)}}if(!p.some(s=>s.type==="esriFieldTypeOID"&&(i.objectIdField=s.name,!0))){const s={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};i.objectIdField=s.name,p.unshift(s)}i.fields=p;const h=new _(i.fields);if(t.locationInfo&&(t.locationInfo.latitudeFieldName=h.get(t.locationInfo.latitudeFieldName).name,t.locationInfo.longitudeFieldName=h.get(t.locationInfo.longitudeFieldName).name),i.timeInfo){const s=i.timeInfo;if(s.startTimeField){const u=h.get(s.startTimeField);u?(s.startTimeField=u.name,u.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const u=h.get(s.endTimeField);u?(s.endTimeField=u.name,u.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const u=h.get(s.trackIdField);s.trackIdField=u?u.name:null}s.startTimeField||s.endTimeField||(i.timeInfo=null)}return t}export{ge as default};
