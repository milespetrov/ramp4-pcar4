import{E as n,n as o,k as i,o as s,A as h}from"./main-DJHcSGyV.js";import{a as p}from"./BitmapContainer-CR3NxNwm.js";import{j as d,y as m}from"./LayerView-j08ZbEvD.js";import{_ as c}from"./ExportStrategy-huCN9QE2.js";import{i as y}from"./RefreshableLayerView-D7xfU3ni.js";let t=class extends y(d(m)){update(a){this._strategy.update(a).catch(e=>{n(e)||o.getLogger(this).error(e)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new p,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(a,e,r){return this.layer.fetchImageBitmap(a,e,r)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};i([s()],t.prototype,"_strategy",void 0),i([s()],t.prototype,"updating",void 0),t=i([h("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const g=t;export{g as default};
