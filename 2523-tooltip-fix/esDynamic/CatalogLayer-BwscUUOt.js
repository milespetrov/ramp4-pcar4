import{V as S,aE as U,fW as D,aH as L,ao as j,k as t,o as r,bp as M,A as g,f0 as x,f as b,b4 as Q,bm as Z,df as N,G,s as f,I as k,Z as J,U as z,fX as H,b as C,N as R}from"./main-CDHpIWDK.js";import{S as v}from"./MultiOriginJSONSupport-BR7G7DNL.js";import{f as h}from"./Layer-ClIWDxbA.js";import{e as K}from"./LRUCache-Czo0holU.js";import{s as $}from"./ReactiveMap-Ddzolsyy.js";import{r as W}from"./signal-lS58FATo.js";import{l as w}from"./BlendLayer-BkDSgnax.js";import{t as F}from"./ScaleRangeLayer-D96pkjrI.js";import{d as I,f as V,T as X,c as Y,p as ee,v as te,j as re,l as ie,u as oe}from"./commonProperties-tuK1ru4N.js";import{a as ne}from"./OrderByInfo-DLXQsMsu.js";import{g as P}from"./utils-Akrym3wr.js";import"./UniqueValueRenderer-a9PtNc_W.js";import{m as ae,u as se,p as le}from"./jsonUtils-C8Q0UfWy.js";import{V as pe,B as de}from"./FeatureLayerBase-Ctmuu_NG.js";import{c as ye}from"./FeatureEffectLayer-CIeMvjnc.js";import{C as ue,n as he}from"./labelingInfo-DSyWrZ9h.js";import{p as ce}from"./popupUtils-CglxlrGp.js";import me from"./FeatureLayerSource-H02phazu.js";import{i as fe}from"./APIKeyMixin-BarlvHSS.js";import{l as ge}from"./ArcGISService-DQFo9LaI.js";import{e as be}from"./CustomParametersMixin-CpzwpIRy.js";import{F as ve}from"./EditBusLayer-C46buZWT.js";import{b as we}from"./OperationalLayer-CPP7zalp.js";import{p as Fe}from"./OrderedLayer-Tb5pNgIx.js";import{j as Ie}from"./PortalLayer-DedmCAF2.js";import{f as Oe}from"./RefreshableLayer-CLD7S1sc.js";import{l as _e}from"./TemporalLayer-DcemgOF9.js";import{J as Te,q as Ee,W as Se,R as Le}from"./featureLayerUtils-BJs5POsO.js";import{n as je}from"./FeatureType-rIkfyBEv.js";import{s as xe}from"./fieldProperties-BCihz8e0.js";import{b as Ce}from"./fetchService-BHbZcpR0.js";import{t as Re}from"./versionUtils-BUqKTBVR.js";import Ve from"./PortalItem-B5ezfsH1.js";import{b as c}from"./Query-BEJaE_LJ.js";let d=class extends F(w(v(h))){constructor(e){super(e),this._layerCache=new K(20,i=>i.destroy()),this._oidToReference=new $,this._layerToReference=new Map,this.legendEnabled=!0,this.layers=new S,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",({item:e})=>{e.parent=this}),this.layers.on("after-remove",({item:e})=>{e.parent=null}),U(()=>this._orderBy,()=>{this._updateLayerSortValues(),this._sortAllLayers()})])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){return this.parent?this.parent.orderBy?.find(e=>!e.valueExpression&&e.field)??new ne({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const i=this.parent.fieldsIndex.get(e.field),a=P(i?.toJSON().type,e.order==="descending"),n=P("esriFieldTypeOID",e.order==="descending");return(l,p)=>a(p.sortValue,l.sortValue)||n(p.objectId,l.objectId)}get fullExtent(){return this.parent?.fullExtent??null}get updating(){return D(this._oidToReference,({pending:e})=>e!=null)}acquireLayer(e){if(this.destroyed)return L();const i=this._getLayerReference(e);return i.count++,L(()=>{i.count--,i.count||this._destroyLayerReference(i)})}_getLayerReference(e){const i=e.getObjectId();return j(this._oidToReference,i,()=>{const a=e.getObjectId(),n=`${a}`,l=e.getAttribute(this.parent.itemSourceField),p=new Pe(e,a,l),y=this._layerCache.pop(n);return y?(this._addLayer(p,y),p):(p.pending=this.parent.createLayerFromFootprint(e).then(u=>{p.count?this._addLayer(p,u):(this.destroyed||this._layerCache.get(n)||this._layerCache.put(n,u),p.layer=null)}).catch(()=>{}).finally(()=>{p.pending=null}),p)})}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,i){e.layer=i,i.persistenceEnabled=!1,this._layerToReference.set(i,e),this._updateLayerSortValue(e),this.layers.add(i),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort((e,i)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(i)))}};t([r()],d.prototype,"_orderBy",null),t([r({readOnly:!0})],d.prototype,"_referenceComparator",null),t([r(I)],d.prototype,"legendEnabled",void 0),t([r({type:["show","hide","hide-children"],json:{write:!0}})],d.prototype,"listMode",void 0),t([r({readOnly:!0})],d.prototype,"fullExtent",null),t([r({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],d.prototype,"id",void 0),t([r({readOnly:!0})],d.prototype,"layers",void 0),t([r({type:M,range:{min:0,max:50},json:{write:!0,default:10}})],d.prototype,"maximumVisibleSublayers",void 0),t([r(V)],d.prototype,"opacity",void 0),t([r({clonable:!1})],d.prototype,"parent",void 0),t([r({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],d.prototype,"title",void 0),t([r({json:{read:!1}})],d.prototype,"type",void 0),t([r({readOnly:!0})],d.prototype,"updating",null),t([r({type:Boolean,json:{name:"visibility",write:!0}})],d.prototype,"visible",void 0),d=t([g("esri.layers.catalog.CatalogDynamicGroupLayer")],d);const q=d;class Pe{constructor(i,a,n){this.footprint=i,this.objectId=a,this.itemSource=n,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=W(null)}get pending(){return this._pending.value}set pending(i){this._pending.value=i}}function qe(){const e=new N({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new le({symbol:e})}let o=class extends F(ye(w(v(h)))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),x(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",i=>this.emit("apply-edits",i)),this.parent.on("edits",i=>this.emit("edits",i)),this.parent.on("refresh",i=>this.emit("refresh",i))])}get apiKey(){return this.parent?.apiKey}get capabilities(){return this.parent?.capabilities}get customParameters(){return this.parent?.customParameters}get dateFieldsTimeZone(){return this.parent?.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this.parent?.datesInUnknownTimezone??!1}get definitionExpression(){return this.parent?.definitionExpression}get editingInfo(){return this.parent?.editingInfo}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get createQueryVersion(){return this.parent?.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){return this.parent?.displayField}get effectiveEditingEnabled(){return!1}get fields(){return this.parent?.fields}get fieldsIndex(){return this.parent?.fieldsIndex}get fullExtent(){return this.parent?.fullExtent}get geometryFieldsInfo(){return this.parent?.geometryFieldsInfo}get geometryType(){return this.parent?.geometryType}get globalIdField(){return this.parent?.globalIdField}get hasM(){return this.parent?.hasM??!1}get hasZ(){return this.parent?.hasZ??!1}get objectIdField(){return this.parent?.objectIdField}get orderBy(){return this.parent?.orderBy??null}get outFields(){return this.parent?.outFields}get parsedUrl(){return this.parent?.parsedUrl??null}get preferredTimeZone(){return this.parent?.preferredTimeZone??null}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):qe()}get returnM(){return this.parent?.returnM}get returnZ(){return this.parent?.returnZ}get source(){return this.parent?.source}get timeExtent(){return this.parent?.timeExtent}get timeInfo(){return this.parent?.timeInfo}get timeOffset(){return this.parent?.timeOffset}get typeIdField(){return this.parent?.typeIdField}get types(){return this.parent?.types}get useViewTime(){return this.parent?.useViewTime??!0}get version(){return this.parent?.version}async applyEdits(e,i){return await this.load(),this.parent.applyEdits(e,i)}createPopupTemplate(e){const i={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return ce(i,e)}createQuery(){return this.parent?.createQuery()}getField(e){return this.parent?.getField(e)}getFieldDomain(e,i){return this.parent?.getFieldDomain(e,i)}async queryExtent(e,i){return await this.load(),this.parent.queryExtent(e,i)}async queryFeatures(e,i){return await this.load(),this.parent.queryFeatures(e,i)}async queryFeatureCount(e,i){return await this.load(),this.parent.queryFeatureCount(e,i)}async queryObjectIds(e,i){return await this.load(),this.parent.queryObjectIds(e,i)}};t([r(X)],o.prototype,"attributeTableTemplate",void 0),t([r({readOnly:!0})],o.prototype,"apiKey",null),t([r({readOnly:!0})],o.prototype,"capabilities",null),t([r({readOnly:!0})],o.prototype,"customParameters",null),t([r()],o.prototype,"dateFieldsTimeZone",null),t([r({readOnly:!0})],o.prototype,"datesInUnknownTimezone",null),t([r({readOnly:!0})],o.prototype,"definitionExpression",null),t([r({readOnly:!0})],o.prototype,"editingInfo",null),t([r({readOnly:!0})],o.prototype,"effectiveCapabilities",null),t([r({json:{origins:{"web-scene":{write:!1}},write:!0}})],o.prototype,"charts",void 0),t([r({readOnly:!0})],o.prototype,"createQueryVersion",null),t([r({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([r()],o.prototype,"displayField",null),t([r({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"editingEnabled",void 0),t([r({readOnly:!0})],o.prototype,"effectiveEditingEnabled",null),t([r((()=>{const e=b(Y);return e.json.origins["web-map"]={read:!1,write:!1},e})())],o.prototype,"elevationInfo",void 0),t([r({readOnly:!0})],o.prototype,"fields",null),t([r({readOnly:!0})],o.prototype,"fieldsIndex",null),t([r({type:pe,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"formTemplate",void 0),t([r({readOnly:!0})],o.prototype,"fullExtent",null),t([r({readOnly:!0})],o.prototype,"geometryFieldsInfo",null),t([r({readOnly:!0})],o.prototype,"geometryType",null),t([r({readOnly:!0})],o.prototype,"globalIdField",null),t([r({readOnly:!0})],o.prototype,"hasM",null),t([r({readOnly:!0})],o.prototype,"hasZ",null),t([r({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),t([r({type:[ue],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:he,write:!0}})],o.prototype,"labelingInfo",void 0),t([r(ee)],o.prototype,"labelsVisible",void 0),t([r(I)],o.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{write:!0}})],o.prototype,"listMode",void 0),t([r((()=>{const e=b(te);return e.json.origins.service.read=!1,e})())],o.prototype,"maxScale",void 0),t([r((()=>{const e=b(re);return e.json.origins.service.read=!1,e})())],o.prototype,"minScale",void 0),t([r({readOnly:!0})],o.prototype,"objectIdField",null),t([r(V)],o.prototype,"opacity",void 0),t([r({readOnly:!0})],o.prototype,"orderBy",null),t([r({readOnly:!0})],o.prototype,"outFields",null),t([r({clonable:!1})],o.prototype,"parent",void 0),t([r({readOnly:!0})],o.prototype,"parsedUrl",null),t([r(ie)],o.prototype,"popupEnabled",void 0),t([r({type:Q,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([r({readOnly:!0})],o.prototype,"preferredTimeZone",null),t([r({types:ae,json:{origins:{"web-scene":{types:se}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,i){return{ignoreOrigin:this.originIdOf(i)<Z.PORTAL_ITEM}}}}})],o.prototype,"renderer",null),t([r({readOnly:!0})],o.prototype,"returnM",null),t([r({readOnly:!0})],o.prototype,"returnZ",null),t([r({readOnly:!0})],o.prototype,"source",null),t([r({readOnly:!0})],o.prototype,"timeExtent",null),t([r({readOnly:!0})],o.prototype,"timeInfo",null),t([r({readOnly:!0})],o.prototype,"timeOffset",null),t([r({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"title",void 0),t([r({json:{read:!1}})],o.prototype,"type",void 0),t([r({readOnly:!0})],o.prototype,"typeIdField",null),t([r({readOnly:!0})],o.prototype,"types",null),t([r({readOnly:!0})],o.prototype,"useViewTime",null),t([r({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),o=t([g("esri.layers.catalog.CatalogFootprintLayer")],o);const B=o,O=xe();function Be(e){return typeof e=="object"&&e!=null&&"itemId"in e&&"portalUrl"in e}function Ae(e){return typeof e=="object"&&e!=null&&"url"in e}function Ue(e){if(e==null)return!0;const i=Object.keys(e);return!i.length||i.length===1&&i[0]==="id"}function A(e,i,a,n){const l=e.write({},n);Ue(l)||(i[a]=l)}let s=class extends de(ve(w(Fe(_e(F(Oe(ge(we(Ie(v(be(fe(h))))))))))))){constructor(e){super(e),this.legendEnabled=!0,this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new q({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new B({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new S([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new me({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const i=e!=null?e.signal:null,a=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(G).then(async()=>{const{url:n,source:l,portalItem:p}=this;if(!n)throw new f("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.layerId==null){const u=await this._fetchFirstValidLayerId(i);if(u==null)throw new f("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:n});this.layerId=u}await l.load({signal:i});const{sourceJSON:y}=l;y&&(this.sourceJSON=y,this.read(y,{origin:"service",portalItem:p,portal:p?.portal,url:this.parsedUrl}))}).then(()=>{const n=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],l=n.filter(p=>!this.fieldsIndex.has(p));if(l.length)throw new f("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:n,missingFields:l})}).then(()=>Te(this,"load",e));return this.addResolvingPromise(a),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=k(this.url);return e!=null&&this.layerId!=null&&(e.path=J(e.path,this.layerId.toString())),e}async applyEdits(e,i){return Ee(this,e,i)}on(e,i){return super.on(e,i)}async createLayerFromFootprint(e){const i=await this._createLayer(e);return this._configureLayer(i,e),this._layerToFootprint.set(i,e),i}createFootprintFromLayer(e){return this._layerToFootprint.get(e)?.clone()}createQuery(){const e=new c,i=this.capabilities?.query;e.returnGeometry=!0,i&&(e.compactGeometryEnabled=i.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=i.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:a,timeExtent:n}=this;return e.timeExtent=a!=null&&n!=null?n.offset(-a.value,a.unit):n||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return Se(this.types,this.typeIdField,e)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,i){const a=i?.feature,n=this.getFeatureType(a);if(n){const l=n.domains&&n.domains[e];if(l&&l.type!=="inherited")return l}return this.getField(e)?.domain}async hasDataChanged(){return Le(this)}async queryFeatures(e,i){const a=await this.load(),n=await a.source.queryFeatures(c.from(e)??a.createQuery(),i);if(n?.features)for(const l of n.features)l.layer=l.sourceLayer=a.footprintLayer;return n}async queryObjectIds(e,i){return(await this.load()).source.queryObjectIds(c.from(e)??this.createQuery(),i)}async queryFeatureCount(e,i){return(await this.load()).source.queryFeatureCount(c.from(e)??this.createQuery(),i)}async queryExtent(e,i){return(await this.load()).source.queryExtent(c.from(e)??this.createQuery(),i)}serviceSupportsSpatialReference(e){return this.loaded&&Re(this,e)}read(e,i){if(super.read(e,i),e){const{footprintLayer:a,dynamicGroupLayer:n}=e;a&&this.footprintLayer.read(a,i),n&&this.dynamicGroupLayer.read(n,i)}}async _fetchFirstValidLayerId(e){const{data:i}=await z(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(Array.isArray(i?.layers))return i.layers.find(({type:a})=>this.supportedSourceTypes.has(a))?.id}async _createLayer(e){const i=e.getAttribute(this.itemSourceField);if(!i)throw new f("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const a=JSON.parse(i);if(Be(a)){const{itemId:n,portalUrl:l}=a,p=H(l),y=this.portalItem?.portal,u=C.getDefault();let m,T=!0;y&&R(l,y.url)?m=y:R(l,u.url)?m=u:(m=j(this._portals,p,()=>new C({url:p})),T=!1);const E=await h.fromPortalItem(new Ve({id:n,portal:m}));return T||await _(E),E}return Ae(a)?h.fromArcGISServerUrl({url:a.url}):new(await Ce.UnsupportedLayer())}_configureLayer(e,i){const a=i.getAttribute(this.itemNameField);a&&(e.title=a);const n=i.getAttribute(this.maxScaleField);n!=null&&"maxScale"in e&&(e.maxScale=n);const l=i.getAttribute(this.minScaleField);l!=null&&"minScale"in e&&(e.minScale=l)}};async function _(e){if("portalItem"in e&&e.portalItem){try{await e.load()}catch{}e.portalItem=null,e.type==="group"&&await Promise.allSettled([...e.layers.map(i=>_(i)),...e.tables.map(i=>_(i))])}}t([r(I)],s.prototype,"legendEnabled",void 0),t([r({readOnly:!0})],s.prototype,"createQueryVersion",null),t([r({readOnly:!0})],s.prototype,"drawOrderField",void 0),t([r({type:q,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:A}}})],s.prototype,"dynamicGroupLayer",void 0),t([r({readOnly:!0})],s.prototype,"editingEnabled",null),t([r({readOnly:!0})],s.prototype,"effectiveEditingEnabled",null),t([r({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],s.prototype,"elevationInfo",void 0),t([r({...O.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],s.prototype,"fields",void 0),t([r(O.fieldsIndex)],s.prototype,"fieldsIndex",void 0),t([r({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],s.prototype,"floorInfo",void 0),t([r({type:B,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:A}}})],s.prototype,"footprintLayer",void 0),t([r(oe)],s.prototype,"id",void 0),t([r({readOnly:!0})],s.prototype,"itemNameField",void 0),t([r({readOnly:!0})],s.prototype,"itemSourceField",void 0),t([r({readOnly:!0})],s.prototype,"itemTypeField",void 0),t([r({readOnly:!0})],s.prototype,"layers",void 0),t([r({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),t([r({readOnly:!0})],s.prototype,"maxScaleField",void 0),t([r({readOnly:!0})],s.prototype,"minScaleField",void 0),t([r({value:"CatalogLayer",type:["CatalogLayer"]})],s.prototype,"operationalLayerType",void 0),t([r({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],s.prototype,"orderBy",void 0),t([r(O.outFields)],s.prototype,"outFields",void 0),t([r({readOnly:!0})],s.prototype,"parsedUrl",null),t([r({readOnly:!0})],s.prototype,"source",void 0),t([r({json:{read:!1}})],s.prototype,"type",void 0),t([r({type:String})],s.prototype,"typeIdField",void 0),t([r({type:[je]})],s.prototype,"types",void 0),s=t([g("esri.layers.CatalogLayer")],s);const De=s;export{De as default};
