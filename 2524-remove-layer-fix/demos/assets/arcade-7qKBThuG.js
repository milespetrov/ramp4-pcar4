import{s as g,h as G,bJ as J,b as L,b3 as P}from"./main-CFpM9i38.js";import{a as T,n as F,m as S}from"./TimeOnly-BctO04FZ.js";import{t as I}from"./ImmutableArray-BPVd6ESQ.js";import M from"./FeatureLayer-CqaxTBJZ.js";import{d as z}from"./FeatureSet-DCgJveuP.js";import"./preload-helper-ExcqyqRp.js";import"./UnknownTimeZone-CpmmCxr-.js";import"./UniqueValueRenderer-C8E0oRoy.js";import"./RendererLegendOptions-4cnCq2Kj.js";import"./diffUtils-CAn90oH_.js";import"./colorRamps-yllGSLg_.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-Mu3Qyzix.js";import"./compilerUtils-DbmoCggA.js";import"./lengthUtils-DL2C2FcD.js";import"./styleUtils-CrTp4sQg.js";import"./jsonUtils-Cm_6EJQ9.js";import"./LRUCache-D6cG4Dag.js";import"./Version-CvG70TWQ.js";import"./FieldsIndex-BFzw4JMs.js";import"./OverrideHelper-Cm1qKte1.js";import"./colorUtils-DnGqU4z1.js";import"./vec42-CKs01hkn.js";import"./common-DQOJ18NT.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-B3GoULmS.js";import"./heatmapUtils-CAi8r2D6.js";import"./MultiOriginJSONSupport-B7ytswiV.js";import"./commonProperties-C3O0vMzk.js";import"./ElevationInfo-BFG6iNgv.js";import"./FeatureLayerBase-WSW1Ku03.js";import"./Field-CoyqNdTx.js";import"./fieldType-BNObABBN.js";import"./HeightModelInfo-CqYyeiVk.js";import"./arcgisLayerUrl-BwegKRVK.js";import"./featureLayerUtils-BhMw26wZ.js";import"./uuid-Cl5lrJ4c.js";import"./Query-B8kTaKZ5.js";import"./TimeExtent-Ba88HmAN.js";import"./RelationshipQuery-DCAarzFA.js";import"./LayerFloorInfo-Bc1ceYE0.js";import"./Relationship-B00YTWv7.js";import"./serviceCapabilitiesUtils-C3FUipNy.js";import"./Layer-DokEcK1i.js";import"./workers-BO4-Zqhs.js";import"./editsZScale-DkDEvbfx.js";import"./queryZScale-En03aYOo.js";import"./projection-B6HHT9iG.js";import"./projectBuffer-ChAiX47d.js";import"./APIKeyMixin-CpY2YeUF.js";import"./ArcGISService-E9P0HhEZ.js";import"./BlendLayer-4lAz92LZ.js";import"./jsonUtils-zX6zkWSv.js";import"./parser-D7rTb1C8.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BZ-Redsx.js";import"./CustomParametersMixin-DE9LwW0y.js";import"./EditBusLayer-B9XQPh7n.js";import"./FeatureEffectLayer-BGhVe4B1.js";import"./FeatureEffect-C7nwgslJ.js";import"./FeatureFilter-Dw6bl9Z1.js";import"./FeatureReductionLayer-BAOLiSCn.js";import"./FeatureReductionSelection-BzefCVCs.js";import"./labelingInfo-ujS7J9Be.js";import"./labelUtils-DFaooTfA.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-4Ce5UdNS.js";import"./OrderedLayer-BY-vxKgA.js";import"./OrderByInfo-CX4zVJg1.js";import"./PortalLayer-BVDjikO1.js";import"./PortalItem-DJY8hg5d.js";import"./portalItemUtils-CA6xs-9P.js";import"./RefreshableLayer-Vtblmz_O.js";import"./ScaleRangeLayer-CQPZePHI.js";import"./TemporalLayer-BNrpGwxR.js";import"./TimeInfo-D8SmVs48.js";import"./FeatureTemplate-8tjHYiUB.js";import"./FeatureType-DQs_5_5J.js";import"./fieldProperties-Bjh-IL8q.js";import"./versionUtils-Dj9HRX3E.js";import"./styleUtils-D1VU3aN5.js";import"./popupUtils-DycHHfr4.js";import"./AlphaCutoff-UcccL64p.js";import"./interfaces-CL2NbQte.js";let b=null;function E(e,i,r,o={}){const a=i.elementType,n="value",m=a.type==="array"?[{name:n,type:a.type,elementType:a.elementType}]:a.type==="dictionary"?[{name:n,type:a.type,properties:a.properties}]:[{name:n,type:a.type}];return new I(e.map(p=>{const t={};return w(t,m,{[n]:p},r,o),t[n]}))}function N(e,i,r={}){const o=e instanceof z?new M({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return i.constructFeatureSet(o,r.spatialReference,null,!0,r.lruCache,r.interceptor)}function X(e,i,r={}){const{spatialReference:o,interceptor:a,lruCache:n}=r;return typeof e=="string"?i.createFeatureSetCollectionFromService(e,o,n,a):i.createFeatureSetCollectionFromMap(e,o,n,a)}function Y(e,i,r,o={}){const a={};return w(a,i.properties,e,r,o),new b.Dictionary(a)}function w(e,i,r,o,a={}){const n={};for(const m of Object.keys(r))n[m.toLowerCase()]=r[m];for(const m of i){const p=m.name.toLowerCase();if(a.variablesPreProcessed)e[p]=n[p];else switch(m.type){case"array":{const t=n[p];e[p]=t==null?null:E(t,m,o,a);break}case"feature":{const t=n[p];e[p]=t==null?null:b.Feature.createFromGraphic(t,a?.timeZone);break}case"featureSet":{const t=n[p];e[p]=t==null?null:o?N(t,o,a):null;break}case"featureSetCollection":{const t=n[p];e[p]=t==null?null:o?X(t,o,a):null;break}case"dictionary":{const t=n[p];e[p]=t==null?null:Y(t,m,o,a);break}case"date":{const t=n[p];e[p]=t?t instanceof S?t:a?.timeZone?S.dateJSAndZoneToArcadeDate(t,a?.timeZone):S.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=n[p];e[p]=t?t instanceof F?t:F.fromReader(t):null;break}case"time":{const t=n[p];e[p]=t?t instanceof T?t:T.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[p]=n[p]}}}function Z(e,i){for(const r of e)i.push(r),r.type==="dictionary"&&Z(r.properties,i);return i}function R(e,i,r,o,a){const{spatialReference:n,interceptor:m,lruCache:p,console:t,abortSignal:u,timeZone:c,services:$={portal:L.getDefault()}}=r,f={vars:{},spatialReference:n,interceptor:m,timeZone:c,lrucache:p,useAsync:a,services:$,console:t,abortSignal:u};return i&&w(f.vars,e.variables,i,o,r),f}function v(e,i){switch(i.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const r=(e.type,e),o="geometry"in r?r.geometry():null,a="readAttributes"in r?r.readAttributes():r.attributes;return new P({geometry:o,attributes:a})}case"dictionary":{const r=e,o=r.attributes,a={};for(const n of Object.keys(o))a[n]=v(r.field(n),i);return a}case"array":return("toArray"in e?e.toArray():e).map(r=>v(r,i))}return e}const D={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},O={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},U=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",D],["popup-element",D],["feature-reduction-popup",O],["feature-reduction-popup-element",O],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function At(e){const i=U.get(e);if(!i){const r=Array.from(U.keys()).map(o=>`'${o}'`).join(", ");throw new g("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${r}`)}return G(i)}async function xt(e,i,r={}){b||(b=await J());const{arcade:o,arcadeUtils:a}=b,{loadScriptDependencies:n,referencesMember:m,scriptIsAsync:p}=o,t=Z(i.variables,[]),u=t.filter(s=>s.type==="featureSet"||s.type==="featureSetCollection").map(s=>s.name.toLowerCase()),c=o.parseScript(e,u);if(!c)throw new g("arcade:invalid-script","Unable to create SyntaxTree");const $=a.extractFieldNames(c),f=o.scriptTouchesGeometry(c),h=t.map(s=>s.name.toLowerCase()).filter(s=>m(c,s)),l=p(c,u);await n(c,l,u);const C={vars:{},spatialReference:null,useAsync:l};for(const s of h)C.vars[s]="any";const{lruCache:A}=r,x=o.compileScript(c,C),k=o.featureSetUtils(),{services:j}=r;return{execute:(s,y={})=>{if(l)throw new g("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const d=x(R(i,s,{lruCache:A,...y},k,l));return y.rawOutput?d:v(d,a)},executeAsync:async(s,y={})=>{const d=await x(R(i,s,{lruCache:A,services:j,...y},k,l));return y.rawOutput?d:v(d,a)},isAsync:l,variablesUsed:h,fieldsUsed:$,geometryUsed:f,syntaxTree:c}}export{xt as createArcadeExecutor,At as createArcadeProfile};
