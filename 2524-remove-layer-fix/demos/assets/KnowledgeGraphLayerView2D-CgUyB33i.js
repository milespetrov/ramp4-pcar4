import{V as p,cZ as m,q as o,u as e,c_ as s,C as a}from"./main-CFpM9i38.js";import{j as n,y as l}from"./LayerView-Cm8HC2h8.js";import"./preload-helper-ExcqyqRp.js";import"./Container-DHSQ_xbc.js";import"./MapView-ZgTbqZW3.js";import"./Cyclical-CCn8t1xA.js";import"./CollectionFlattener-D3OGDgXt.js";import"./workers-BO4-Zqhs.js";import"./projection-B6HHT9iG.js";import"./projectBuffer-ChAiX47d.js";import"./TileInfo-CJtkQHM-.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-DDjIa1tx.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-BC7RaQXP.js";import"./signal-CACwCTEA.js";import"./Map--R9cjjmG.js";import"./Basemap-DEXAqgiP.js";import"./loadAll-BO-cCZ82.js";import"./PortalItem-DJY8hg5d.js";import"./writeUtils-CBBBxGkp.js";import"./compilerUtils-DbmoCggA.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BZ-Redsx.js";import"./common-DQOJ18NT.js";import"./TablesMixin-DLCryraP.js";import"./Layer-DokEcK1i.js";import"./TimeExtent-Ba88HmAN.js";import"./GraphicsCollection-Byc4QKkU.js";import"./HeightModelInfo-CqYyeiVk.js";import"./ReactiveMap-CCDtH5jv.js";import"./Query-B8kTaKZ5.js";import"./Field-CoyqNdTx.js";import"./fieldType-BNObABBN.js";import"./arcgisLayerUrl-BwegKRVK.js";import"./ViewingMode-HRfKv6NR.js";import"./vec2f64-B7N_6o8F.js";import"./vec2-DGVIkCvT.js";import"./Tile-TX68lRWl.js";import"./TileKey-DJog5zI2.js";import"./QueueProcessor-Adg4U6re.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-DSjrhV6I.js";import"./normalizeUtilsCommon-CDOijakI.js";import"./utils-OYqyAMOQ.js";import"./utils-CdsRgP19.js";import"./mat3-XZDRtl20.js";import"./vec2f32-BbH2jxlN.js";import"./unitBezier-BX6NeAEr.js";import"./Scheduler-BWb4SZCN.js";import"./vec32-DwOYpah8.js";import"./definitions-C0Jy3zs7.js";import"./enums-Dk3osxpS.js";import"./Texture-B8CS0CTb.js";import"./imageUtils-D2gSKH4L.js";import"./capabilities-A2uoe7dc.js";import"./Version-CvG70TWQ.js";import"./ColorBackground-CIQnU4HU.js";import"./parser-D7rTb1C8.js";import"./layerViewUtils-DKjHidC0.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",m(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};o([e({cast:s})],r.prototype,"layerViews",null),o([e({readOnly:!0})],r.prototype,"updatingProgress",null),r=o([a("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const wt=r;export{wt as default};
