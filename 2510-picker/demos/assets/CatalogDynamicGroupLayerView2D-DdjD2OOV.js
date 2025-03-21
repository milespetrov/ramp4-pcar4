import{q as i,u as a,C as f,V,dD as b,eQ as F,aJ as U,ej as _,n as x,bv as w}from"./main-Cndq3wrU.js";import{j as H,y as I}from"./LayerView-jGvZIWuC.js";import"./preload-helper-ExcqyqRp.js";import"./Container-DipLgY1C.js";import"./MapView-BdMuBRLC.js";import"./Cyclical-DXXS2VQO.js";import"./CollectionFlattener-Bgxg22G2.js";import"./workers-QG4YBJOL.js";import"./projection-C3kMvsoo.js";import"./projectBuffer-B35Qssqf.js";import"./TileInfo-Bxfzrxps.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DWOpHsIR.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-Clmqwj8S.js";import"./signal-BOSHfkra.js";import"./Map-DGoyj7_H.js";import"./Basemap-BEx-euOs.js";import"./loadAll-_ayxl0ko.js";import"./PortalItem-DAgDbNA5.js";import"./writeUtils-CQK6kRx6.js";import"./compilerUtils-Dg_vb96b.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BKi56vQE.js";import"./common-DQOJ18NT.js";import"./TablesMixin-Rx3FYuHR.js";import"./Layer-DWC6tCOI.js";import"./TimeExtent-CNKqe8aE.js";import"./GraphicsCollection-NxSBLcM2.js";import"./HeightModelInfo-D2GLH2Of.js";import"./ReactiveMap-BEfWnP0t.js";import"./Query-B0QBVc1M.js";import"./Field-Ewd_7sve.js";import"./fieldType-C8x_vAE7.js";import"./arcgisLayerUrl-D1E7CgSg.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-C4RMFAew.js";import"./TileKey-CkcBt5cc.js";import"./QueueProcessor-CGTafBWc.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-D8VXDTkA.js";import"./normalizeUtilsCommon-CMUxA5P-.js";import"./utils-DUAtTJ6i.js";import"./utils-DPyNj1lt.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-DZRFqLuN.js";import"./vec32-CvXXzGj2.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-B1672GXi.js";import"./imageUtils-BaiBva3j.js";import"./capabilities-A2uoe7dc.js";import"./Version-jJAdtVwd.js";import"./ColorBackground-B4jPPjSH.js";import"./parser-XSnqArXu.js";import"./layerViewUtils-BIhSCGIC.js";const y=Symbol(),O=n=>{let e=class extends n{constructor(){super(...arguments),this.layerViews=new V,this._debouncedUpdate=b(async()=>{const{layer:r,parent:s}=this,o=s?.footprintLayerView;let p=[];const d=this._createQuery();if(d&&o){const{features:u}=await o.queryFeatures(d);this.suspended||(p=u.map(h=>r.acquireLayer(h)))}this.removeHandles(y),this.addHandles(p,y)})}get creatingLayerViews(){return this.view?.layerViewManager.isCreatingLayerViewsForLayer(this.layer)??!1}isUpdating(){return this.creatingLayerViews||this.layer.updating||this.layerViews.some(r=>r.updating)}enableLayerUpdates(){return F([this._updatingHandles.addWhen(()=>this.parent?.footprintLayerView?.dataUpdating===!1,()=>this.updateLayers()),this._updatingHandles.add(()=>[this.layer.maximumVisibleSublayers,this.layer.parent?.orderBy,this.parent?.footprintLayerView?.filter,this.parent?.footprintLayerView?.timeExtent,this.suspended],()=>this.updateLayers()),U(()=>this.removeHandles(y))])}updateLayers(){this.suspended?this.removeHandles(y):this._updatingHandles.addPromise(_(this._debouncedUpdate()).catch(r=>{x.getLogger(this).error(r)}))}_createQuery(){const r=this.parent?.footprintLayerView,s=this.layer?.parent;if(!r||!s||s.destroyed)return null;const{layer:{maximumVisibleSublayers:o},view:{scale:p}}=this;if(!o)return null;const{itemTypeField:d,itemSourceField:u,itemNameField:h,minScaleField:c,maxScaleField:L,objectIdField:v,orderBy:$}=s,S=w(`${c} IS NULL OR ${p} <= ${c} OR ${c} = 0`,`${L} IS NULL OR ${p} >= ${L}`),m=$?.find(l=>l.field&&!l.valueExpression),t=r.createQuery();if(t.returnGeometry=!1,t.num=o,t.outFields=[v,u,h],t.where=w(t.where,S),this.unsupportedItemTypes!=null){const l=`${d} NOT IN (${this.unsupportedItemTypes.map(C=>`'${C}'`)})`;t.where=w(t.where,l)}return m?.field&&(t.orderByFields=[`${m.field} ${m.order==="descending"?"DESC":"ASC"}`],t.outFields.push(m.field)),t}};return i([a({readOnly:!0})],e.prototype,"creatingLayerViews",null),i([a()],e.prototype,"layer",void 0),i([a()],e.prototype,"layerViews",void 0),i([a({readOnly:!0})],e.prototype,"unsupportedItemTypes",void 0),i([a()],e.prototype,"parent",void 0),i([a({readOnly:!0})],e.prototype,"isUpdating",null),e=i([f("esri.views.layers.CatalogDynamicGroupLayerView")],e),e};let g=class extends O(H(I)){constructor(){super(...arguments),this.unsupportedItemTypes=["Scene Service"],this.layerViews=new V}attach(){this.addAttachHandles([this.layerViews.on("after-changes",()=>this._updateStageChildren()),this.enableLayerUpdates()])}detach(){this.container.removeAllChildren()}update(n){this.updateLayers()}viewChange(){}moveEnd(){this.requestUpdate()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((n,e)=>this.container.addChildAt(n.container,e))}};g=i([f("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")],g);const qe=g;export{qe as default};
