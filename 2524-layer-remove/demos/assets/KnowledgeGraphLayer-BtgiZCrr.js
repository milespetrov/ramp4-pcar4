import{V as m,aG as M,aB as T,J as _,s as g,bo as l,dw as S,n as c,p as D,bn as L,dn as b,dq as v,aq as C,q as s,u as n,z as E,v as A,C as N,a1 as k}from"./main-Re2Hv9G4.js";import{S as $}from"./MultiOriginJSONSupport-BxtX798q.js";import{n as G}from"./uuid-Cl5lrJ4c.js";import{f as I}from"./Layer-FhlwjB6K.js";import{u as h,c as w,E as R,F as O,R as U}from"./KnowledgeGraphSublayer-EnapCeHM.js";import{l as F}from"./ArcGISService-DN2qW9RW.js";import{l as j}from"./BlendLayer-BgO5IcKb.js";import{e as z}from"./CustomParametersMixin-Bf-jVy6k.js";import{b as P}from"./OperationalLayer-CWOWVm9M.js";import{j as x}from"./PortalLayer-oV5oB5He.js";import{f as K}from"./RefreshableLayer-C1ctkQbi.js";import{t as q}from"./ScaleRangeLayer-DC374dWB.js";import{y as H}from"./commonProperties-Cw8-gNwg.js";import{F as B}from"./knowledgeGraphService-BYoJLouQ.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-BmqfbUDc.js";import"./projection-mClxjUCu.js";import"./projectBuffer-BMlvsPkt.js";import"./featureConversionUtils-BLVubUwE.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./GraphicsLayer-C_zlMeLh.js";import"./GraphicsCollection-D1I0-wRU.js";import"./ElevationInfo-BReLKaDg.js";import"./lengthUtils-BrINmgTN.js";import"./jsonUtils-W9Lv_4SH.js";import"./parser-CBFGS38u.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-CF-CHQey.js";import"./common-DQOJ18NT.js";import"./Relationship-CG0Jfi7a.js";import"./Query-BPp55mxz.js";import"./Field-1m_MFIIM.js";import"./fieldType-CoIrPccM.js";import"./UniqueValueRenderer-CrMQ1kQe.js";import"./RendererLegendOptions-CkXnjrWe.js";import"./diffUtils-CCIt14pG.js";import"./colorRamps-CQiTku5h.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-BX10xNpB.js";import"./compilerUtils-0urtxqsa.js";import"./styleUtils-CUGbYybT.js";import"./jsonUtils-B32et25F.js";import"./LRUCache-CpEghVrq.js";import"./Version-CfEr-oFA.js";import"./FieldsIndex-B-98L06D.js";import"./UnknownTimeZone-PQoK7ISf.js";import"./OverrideHelper-BHPaAp62.js";import"./colorUtils-BZhfsjzI.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-6EOwNAJj.js";import"./heatmapUtils-CkO538Xf.js";import"./workers-CymoJFpQ.js";import"./FeatureStore-DjLzw_K5.js";import"./BoundsStore-BKmn6Qmi.js";import"./PooledRBush-DwQhj082.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-Dd_Za4zA.js";import"./queryUtils-Cd78Hyq-.js";import"./normalizeUtils-DdaujxjA.js";import"./normalizeUtilsCommon-DnhhFXl7.js";import"./utils-DSvZHcL3.js";import"./utils-DlnaS-CS.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-CH82szyk.js";import"./QueryEngine-BVu14OVS.js";import"./WhereClause-kZNMQniR.js";import"./TimeOnly-oO_wIZ2C.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Dd-nm5SX.js";import"./utils-5uXiiwEg.js";import"./Basemap-bYyKdoKt.js";import"./loadAll-Cj9qqwps.js";import"./PortalItem-05fF2w5b.js";import"./writeUtils-abcxEzlG.js";import"./utils-DBESgb1R.js";import"./ClassBreaksDefinition-gAOwWxla.js";import"./Scheduler-DU-fDbAu.js";import"./signal-BnEem59e.js";import"./clientSideDefaults-CIC7flgG.js";import"./capabilities-Y9lFlGVh.js";import"./fieldProperties-B2FE_4C9.js";import"./FeatureEffectLayer-CtV8dFDx.js";import"./FeatureEffect-MeAMTkZi.js";import"./FeatureFilter-6FMrLvYa.js";import"./FeatureReductionLayer-B5a5NtWL.js";import"./FeatureReductionSelection-C2iiMBiV.js";import"./featureLayerUtils-DqfnF0JF.js";import"./RelationshipQuery-DZ95wAMK.js";import"./labelingInfo-BeSKdJfm.js";import"./labelUtils-C1dumQk8.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-Dq-h1CrG.js";import"./OrderByInfo-CRbfofA3.js";import"./TemporalLayer-DyFIQ3rc.js";import"./TimeInfo-Ql535FGw.js";import"./FeatureSet-vZ1p3o7G.js";import"./popupUtils-D2WnEsSA.js";import"./arcgisLayerUrl-DQX1Bhuc.js";import"./portalItemUtils-BcFDL0Hl.js";let r=class extends j(q(K(F(P(x($(z(I)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(m.ofType(h)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(m.ofType(h)),this.type="knowledge-graph",this.url=null,this.addHandles(M(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),T))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){_(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await w(this)}async _fetchMetadata(){if(!this.url)throw new g("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await B(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===l.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new R({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await O(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,S(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if(t?.size>0)t.forEach((i,o)=>{const a=this._graphTypeLookup.get(o);if(!a)return c.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(o);a.type!=="relationship"&&a.type!=="entity"&&(c.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(o))});else if(!e.generateAllSublayers)throw new g("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){let e=[],t=[];const{inclusionModeDefinition:i}=this,o=i?.namedTypeDefinitions;!i||i.generateAllSublayers?(e=this.knowledgeGraph.dataModel?.entityTypes??[],t=this.knowledgeGraph.dataModel?.relationshipTypes??[]):o&&o.size>0&&o.forEach((a,d)=>{const p=this._graphTypeLookup.get(d);switch(p?.type){case"relationship":t.push(p);break;case"entity":e.push(p)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){[...this.knowledgeGraph.dataModel?.entityTypes??[],...this.knowledgeGraph.dataModel?.relationshipTypes??[]].forEach(t=>{e(t)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const o=this._graphTypeLookup.get(i);o&&(this._addSublayer(o),o.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await w(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(o=>{const a=this._createSublayer(o);i(a)&&t.push(a),this._updateSublayerCaches(o)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new h({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const o=e.find(a=>a.type===i.graphType&&a.name===i.graphTypeName);o&&(i.objectType=o,this._updateSublayerCaches(o))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,o){e[t]="<pending>",i.pendingOperations.push(V(this.inclusionModeDefinition).then(a=>{const d=J(o);e[t]=d.itemRelativeUrl,i.toAdd.push({resource:d,content:{type:"blob",blob:a},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return D(e,i)}writeDefinitionSetMap(e,t,i,o){const a=o?.portalItem,d=o?.resources,p=L(o?.origin);if(!a||!d||p==null)return void(e&&(t[i]=b(e,o)));const{inclusionModeDefinition:u}=this;if(!u||this._displaysAllRecords(u))return void(this.definitionSetMap=null);const y=this.originIdOf("inclusionModeDefinition");if(y===l.USER||this._namedTypesModified||p<y)this._saveUrlAsNewResource(t,i,d,a);else if(p===y&&e){const f=b(e,o);v(f)?this._saveUrlAsNewResource(t,i,d,a):t[i]=f}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):c.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===l.DEFAULTS?this._createSublayers(e,this.layers,t=>!!t.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===l.DEFAULTS?this._createSublayers(e,this.tables,t=>!t.geometryType):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t,i)=>{const o=C(this.sublayerIdsCache,i,()=>new Set);t.members?.forEach(a=>{o.add(a.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){const t=[];for(const i of e)this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.members?.has(i.id)&&t.push(i);this.dataManager.removeFromLayer(t);for(const i of t)this.sublayerIdsCache.get(i.typeName)?.delete(i.id);return this._refreshNamedTypes(),t}};s([n()],r.prototype,"dataManager",void 0),s([n({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],r.prototype,"definitionSetMap",void 0),s([E("definitionSetMap")],r.prototype,"readDefinitionSetMap",null),s([A("definitionSetMap")],r.prototype,"writeDefinitionSetMap",null),s([n()],r.prototype,"inclusionModeDefinition",null),s([n()],r.prototype,"knowledgeGraph",void 0),s([n({type:m.ofType(h),json:{write:{ignoreOrigin:!0}}})],r.prototype,"layers",void 0),s([n()],r.prototype,"memberEntityTypes",void 0),s([n()],r.prototype,"memberRelationshipTypes",void 0),s([n({type:["KnowledgeGraphLayer"]})],r.prototype,"operationalLayerType",void 0),s([n()],r.prototype,"sublayerIdsCache",void 0),s([n({type:m.ofType(h),json:{write:{ignoreOrigin:!0}}})],r.prototype,"tables",void 0),s([n({json:{read:!1}})],r.prototype,"type",void 0),s([n(H)],r.prototype,"url",void 0),r=s([N("esri.layers.KnowledgeGraphLayer")],r);const qt=r;async function V(e){const t=await U(e);return new Blob([t],{type:"application/x-protobuf"})}function J(e){const t=`definitionSetMap-${G()}.dat`,i=k("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{qt as default};
