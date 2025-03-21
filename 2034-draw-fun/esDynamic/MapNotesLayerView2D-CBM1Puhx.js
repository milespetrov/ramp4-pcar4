import{at as f,V as w,c1 as y,a4 as c,ao as r,dG as o,aq as _,u as m,D as V}from"./main-CZM6prq-.js";import{j as v}from"./LayerView2D-DutcI88d.js";import{t as g}from"./GraphicContainer-B3b9x_Re.js";import{F as d}from"./GraphicsView2D-CKZSVM2C.js";import{y as C}from"./LayerView-Coj5uwf7.js";const u="sublayers",l="layerView",H=new Set(["default"]);let p=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,s){return Array.from(this.graphicsViews(),e=>{const t=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const h of t)!h.popupTemplate&&a.popupTemplate&&(h.popupTemplate=a.popupTemplate),h.sourceLayer=h.layer=this.layer}return t}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let s;typeof i=="number"?s=[i]:i instanceof f?s=[i.uid]:Array.isArray(i)&&i.length>0?s=typeof i[0]=="number"?i:i.map(t=>t&&t.uid):w.isCollection(i)&&(s=i.map(t=>t&&t.uid).toArray());const e=s?.filter(y);return e?.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const s of this.graphicsViews())s.processUpdate(i)}attach(){const i=this.view,s=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of e){const a=new g(this.view.featuresTilingScheme),h=new d({view:i,graphics:t.source,renderer:t.renderer,requestUpdateCallback:s,container:a});this._graphicsViewsFeatureCollectionMap.set(h,t),this.container.addChild(h.container),this.addHandles([r(()=>t.visible,n=>h.container.visible=n,o),r(()=>h.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(_(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u)}detach(){this._destroyGraphicsViews(),this.removeHandles(u)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],s=this.view,e=()=>this.requestUpdate();for(const t of this.layer.sublayers){const a=new g(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const h=new d({view:s,graphics:t.graphics,requestUpdateCallback:e,container:a});this.addHandles([t.on("graphic-update",h.graphicUpdateHandler),r(()=>t.visible,n=>h.container.visible=n,o),r(()=>h.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(h.container),i.push(h)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const s of i)if(this._highlightIds.has(s)){const e=this._highlightIds.get(s);this._highlightIds.set(s,e+1)}else this._highlightIds.set(s,1);this._updateHighlight()}_removeHighlight(i){for(const s of i)if(this._highlightIds.has(s)){const e=this._highlightIds.get(s)-1;e===0?this._highlightIds.delete(s):this._highlightIds.set(s,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),s=this._getHighlightBits(H);for(const e of this.graphicsViews())e.setHighlight(i.map(t=>({objectId:t,highlightFlags:s})))}};p=m([V("esri.views.2d.layers.MapNotesLayerView2D")],p);const b=p;export{b as default};
