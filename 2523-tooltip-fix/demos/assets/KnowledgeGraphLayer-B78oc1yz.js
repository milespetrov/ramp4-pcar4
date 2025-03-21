import{V as m,aG as M,aB as T,J as _,s as g,bo as l,dw as S,n as c,p as D,bn as L,dn as b,dq as v,aq as C,q as s,u as n,z as E,v as A,C as N,a1 as k}from"./main-CdsSyLmf.js";import{S as $}from"./MultiOriginJSONSupport-D8yEj04b.js";import{n as G}from"./uuid-Cl5lrJ4c.js";import{f as I}from"./Layer-B2IJCJLw.js";import{u as h,c as w,E as R,F as O,R as U}from"./KnowledgeGraphSublayer-Dm_5HC6e.js";import{l as F}from"./ArcGISService-DjDy749H.js";import{l as j}from"./BlendLayer-CT2OvfVo.js";import{e as z}from"./CustomParametersMixin-DVFLI3pe.js";import{b as P}from"./OperationalLayer-4gmAzNZO.js";import{j as x}from"./PortalLayer-L-jklQ2Y.js";import{f as K}from"./RefreshableLayer-Dd6EaADx.js";import{t as q}from"./ScaleRangeLayer-ChrkHNz2.js";import{y as H}from"./commonProperties-BjODNSWn.js";import{F as B}from"./knowledgeGraphService-e8lrVxOx.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-CabtJ4-h.js";import"./projection-DW4hqkh8.js";import"./projectBuffer-Cw1atCwM.js";import"./featureConversionUtils-BlgBaaTg.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./GraphicsLayer-C1Gl6msk.js";import"./GraphicsCollection-CBLbu8H9.js";import"./ElevationInfo-CPzFYQby.js";import"./lengthUtils-C4LFWJEB.js";import"./jsonUtils-N0kWnI_0.js";import"./parser-Bxn8s3ve.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-pIm5M4dy.js";import"./common-DQOJ18NT.js";import"./Relationship-DC0lDd0o.js";import"./Query-Drb-_Vf3.js";import"./Field-O0rZEvGH.js";import"./fieldType-AYW3_uOi.js";import"./UniqueValueRenderer-nIzU1eL7.js";import"./RendererLegendOptions-mzVsWTh8.js";import"./diffUtils-D-X3xnla.js";import"./colorRamps-B_4-1lH0.js";import"./sizeVariableUtils-Cmcuvw-4.js";import"./visualVariableUtils-DaNDAmHB.js";import"./compilerUtils-5yq29FtW.js";import"./styleUtils-KGfryok8.js";import"./jsonUtils-CackR75F.js";import"./LRUCache-B7IYX8gP.js";import"./Version-BFm4aM6R.js";import"./FieldsIndex-ClJtp0E9.js";import"./UnknownTimeZone-CoLzobAS.js";import"./OverrideHelper-CHlgOicT.js";import"./colorUtils-ZGQqe5BW.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./utils-QWndGYJy.js";import"./enums-CmIX1y88.js";import"./quantizationUtils-CaK8jumX.js";import"./heatmapUtils-BL0jS6No.js";import"./workers-CTW-u_CL.js";import"./FeatureStore-BC5Z0-Mh.js";import"./BoundsStore-B0GzSqQ1.js";import"./PooledRBush-D1Skf5jg.js";import"./quickselect-QQC62dOK.js";import"./timeSupport-DgLxbpf7.js";import"./queryUtils-C5i4HhAZ.js";import"./normalizeUtils-Dfj25wzD.js";import"./normalizeUtilsCommon-BDqFe87-.js";import"./utils-Ctlcovrv.js";import"./utils-Cv4bkaTm.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-EJjQIcEd.js";import"./QueryEngine-tNYjwDrH.js";import"./WhereClause-DAargBqa.js";import"./TimeOnly-DX9QaNwO.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-Cuyo2wH5.js";import"./utils-1QoG0_AR.js";import"./Basemap-BL5WOjV7.js";import"./loadAll-edNS0eiS.js";import"./PortalItem-CYho9V5f.js";import"./writeUtils-B_dljDmt.js";import"./utils-sWoS7WBe.js";import"./ClassBreaksDefinition-6jYD_2-_.js";import"./Scheduler-D_w0NlMM.js";import"./signal-eQJG0CZZ.js";import"./clientSideDefaults-DHr-cLez.js";import"./capabilities-Y9lFlGVh.js";import"./fieldProperties-BH0jmDrT.js";import"./FeatureEffectLayer-BiVjU--1.js";import"./FeatureEffect-oEZ-SLSu.js";import"./FeatureFilter-C3K41Jau.js";import"./FeatureReductionLayer-BL1TvLl6.js";import"./FeatureReductionSelection-DAAnSRye.js";import"./featureLayerUtils-BAk6_R1b.js";import"./RelationshipQuery-CCfPPBfP.js";import"./labelingInfo-CN0gnOvg.js";import"./labelUtils-yTHwrcEe.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-Dhsgy8RI.js";import"./OrderByInfo-G5p483dS.js";import"./TemporalLayer-DEiFPHGh.js";import"./TimeInfo-9zP9yYya.js";import"./FeatureSet-B93P2sRX.js";import"./popupUtils-CKl_ME6X.js";import"./arcgisLayerUrl-DtiMs6dI.js";import"./portalItemUtils-DoXsKFwi.js";let r=class extends j(q(K(F(P(x($(z(I)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(m.ofType(h)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(m.ofType(h)),this.type="knowledge-graph",this.url=null,this.addHandles(M(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),T))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){_(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),await w(this)}async _fetchMetadata(){if(!this.url)throw new g("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await B(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===l.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new R({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await O(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,S(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if(t?.size>0)t.forEach((i,o)=>{const a=this._graphTypeLookup.get(o);if(!a)return c.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(o);a.type!=="relationship"&&a.type!=="entity"&&(c.getLogger(this).warn(`A named type, ${o}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(o))});else if(!e.generateAllSublayers)throw new g("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){let e=[],t=[];const{inclusionModeDefinition:i}=this,o=i?.namedTypeDefinitions;!i||i.generateAllSublayers?(e=this.knowledgeGraph.dataModel?.entityTypes??[],t=this.knowledgeGraph.dataModel?.relationshipTypes??[]):o&&o.size>0&&o.forEach((a,d)=>{const p=this._graphTypeLookup.get(d);switch(p?.type){case"relationship":t.push(p);break;case"entity":e.push(p)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){[...this.knowledgeGraph.dataModel?.entityTypes??[],...this.knowledgeGraph.dataModel?.relationshipTypes??[]].forEach(t=>{e(t)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const o=this._graphTypeLookup.get(i);o&&(this._addSublayer(o),o.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await w(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(o=>{const a=this._createSublayer(o);i(a)&&t.push(a),this._updateSublayerCaches(o)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new h({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const o=e.find(a=>a.type===i.graphType&&a.name===i.graphTypeName);o&&(i.objectType=o,this._updateSublayerCaches(o))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,o){e[t]="<pending>",i.pendingOperations.push(V(this.inclusionModeDefinition).then(a=>{const d=J(o);e[t]=d.itemRelativeUrl,i.toAdd.push({resource:d,content:{type:"blob",blob:a},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}readDefinitionSetMap(e,t,i){return D(e,i)}writeDefinitionSetMap(e,t,i,o){const a=o?.portalItem,d=o?.resources,p=L(o?.origin);if(!a||!d||p==null)return void(e&&(t[i]=b(e,o)));const{inclusionModeDefinition:u}=this;if(!u||this._displaysAllRecords(u))return void(this.definitionSetMap=null);const y=this.originIdOf("inclusionModeDefinition");if(y===l.USER||this._namedTypesModified||p<y)this._saveUrlAsNewResource(t,i,d,a);else if(p===y&&e){const f=b(e,o);v(f)?this._saveUrlAsNewResource(t,i,d,a):t[i]=f}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):c.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===l.DEFAULTS?this._createSublayers(e,this.layers,t=>!!t.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===l.DEFAULTS?this._createSublayers(e,this.tables,t=>!t.geometryType):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((t,i)=>{const o=C(this.sublayerIdsCache,i,()=>new Set);t.members?.forEach(a=>{o.add(a.id)})})}async addRecords(e){await this._handleNewRecords(e)}async removeRecords(e){const t=[];for(const i of e)this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(i.typeName)?.members?.has(i.id)&&t.push(i);this.dataManager.removeFromLayer(t);for(const i of t)this.sublayerIdsCache.get(i.typeName)?.delete(i.id);return this._refreshNamedTypes(),t}};s([n()],r.prototype,"dataManager",void 0),s([n({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],r.prototype,"definitionSetMap",void 0),s([E("definitionSetMap")],r.prototype,"readDefinitionSetMap",null),s([A("definitionSetMap")],r.prototype,"writeDefinitionSetMap",null),s([n()],r.prototype,"inclusionModeDefinition",null),s([n()],r.prototype,"knowledgeGraph",void 0),s([n({type:m.ofType(h),json:{write:{ignoreOrigin:!0}}})],r.prototype,"layers",void 0),s([n()],r.prototype,"memberEntityTypes",void 0),s([n()],r.prototype,"memberRelationshipTypes",void 0),s([n({type:["KnowledgeGraphLayer"]})],r.prototype,"operationalLayerType",void 0),s([n()],r.prototype,"sublayerIdsCache",void 0),s([n({type:m.ofType(h),json:{write:{ignoreOrigin:!0}}})],r.prototype,"tables",void 0),s([n({json:{read:!1}})],r.prototype,"type",void 0),s([n(H)],r.prototype,"url",void 0),r=s([N("esri.layers.KnowledgeGraphLayer")],r);const qt=r;async function V(e){const t=await U(e);return new Blob([t],{type:"application/x-protobuf"})}function J(e){const t=`definitionSetMap-${G()}.dat`,i=k("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{qt as default};
