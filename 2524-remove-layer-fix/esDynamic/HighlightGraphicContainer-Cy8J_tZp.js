import{k as t,A as i}from"./main-DJHcSGyV.js";import{E as a,h,R as n}from"./MapView-Bct8QvQQ.js";import{i as o}from"./AGraphicContainer-DIeZC96K.js";let e=class extends o{get hasHighlight(){return this.children.some(r=>r.hasData)}renderChildren(r){this.attributeView.update(),r.drawPhase===a.HIGHLIGHT&&this.children.some(s=>s.hasData)&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),h(r,!0,s=>{this._renderChildren(s,n.All)},0))}};e=t([i("esri.views.2d.layers.graphics.HighlightGraphicContainer")],e);const l=e;export{l as h};
