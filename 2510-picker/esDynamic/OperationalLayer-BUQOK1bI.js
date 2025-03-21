import{k as i,o as y,u as L,q as s,bp as I,dH as b,A as v,dI as T,s as l,dJ as w,dp as G}from"./main-BqyZdgF9.js";import{I as A,a as c,f as h}from"./commonProperties-CHBeMn8i.js";import{p as d}from"./TimeExtent-Ch7KCsKO.js";const S={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,KnowledgeGraphLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},m={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},g={ArcGISFeatureLayer:!0,SubtypeGroupTable:!0},M={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,CatalogLayer:!0,CSV:!0,GeoJSON:!0,GroupLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,KML:!0,LineOfSightLayer:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,RasterDataLayer:!0,VectorTileLayer:!0,ViewshedLayer:!0,Voxel:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},"web-scene/basemap":{ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":S,"web-map/basemap":m,"web-map/tables":g,"link-chart/operational-layers":{...S,LinkChartLayer:!0},"link-chart/basemap":m,"link-chart/tables":g,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,BuildingSceneLayer:!0,IntegratedMesh3DTilesLayer:!0,IntegratedMeshLayer:!0,MediaLayer:!0,OrientedImageryLayer:!0,PointCloudLayer:!0,SubtypeGroupLayer:!0}},E=u=>{let a=class extends u{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(r,e,t){return t?.portalItem?.type==="Group Layer"?void 0:r}writeListMode(r,e,t,n){(n&&n.layerContainerType==="ground"||r&&T(this,t,{},n))&&(e[t]=r)}writeOperationalLayerType(r,e,t,n){r&&n?.layerContainerType!=="tables"&&(e.layerType=r)}writeTitle(r,e){e.title=r??"Layer"}readTimeExtent(r){return r?d.fromArray(r):null}writeTimeExtent(r,e,t,n){r&&n.layerContainerType!=="tables"&&(r.isEmpty?n?.messages&&n.messages.push(new l("layer:invalid-visibilityTimeExtent","visibilityTimeExtent cannot be empty")):e[t]=r.toArray())}read(r,e){e&&(e.layer=this),w(this,r,t=>super.read(r,t),e)}write(r,e){if(!this.persistenceEnabled&&!e?.ignorePersistenceEnabled)return null;if(e?.origin){const o=`${e.origin}/${e.layerContainerType||"operational-layers"}`;let p=!!M[o]?.[this.operationalLayerType];if(this.operationalLayerType==="ArcGISTiledElevationServiceLayer"&&o==="web-scene/operational-layers"&&(p=!1),this.operationalLayerType==="ArcGISDimensionLayer"&&o==="web-map/operational-layers"&&(p=!1),!p)return e.messages?.push(new l("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${o}'`,{layer:this})),null}const t=super.write(r,{...e,layer:this}),n=!!e&&!!e.messages&&!!e.messages.filter(o=>o instanceof l&&o.name==="web-document-write:property-required").length;return G(t?.url)?(e?.messages?.push(new l("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&n?null:t}beforeSave(){}};return i([y({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],a.prototype,"id",void 0),i([L("id",["id"])],a.prototype,"readId",null),i([y(A)],a.prototype,"listMode",void 0),i([s("listMode")],a.prototype,"writeListMode",null),i([y({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:c}}}}})],a.prototype,"operationalLayerType",void 0),i([s("operationalLayerType")],a.prototype,"writeOperationalLayerType",null),i([y(h)],a.prototype,"opacity",void 0),i([y({type:Boolean,readOnly:!1})],a.prototype,"persistenceEnabled",void 0),i([y({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],a.prototype,"title",void 0),i([s("title"),s(["web-scene"],"title")],a.prototype,"writeTitle",null),i([y({type:d,json:{origins:{"web-scene":{write:{layerContainerTypes:c}}}}})],a.prototype,"visibilityTimeExtent",void 0),i([L("visibilityTimeExtent")],a.prototype,"readTimeExtent",null),i([s(["portal-item","web-map","web-scene"],"visibilityTimeExtent",{visibilityTimeExtent:{type:[[I,b]]}})],a.prototype,"writeTimeExtent",null),i([y({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:c}}},name:"visibility",write:!0}})],a.prototype,"visible",void 0),a=i([v("esri.layers.mixins.OperationalLayer")],a),a};export{E as b};
