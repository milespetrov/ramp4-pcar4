import{E as s,R as i,h}from"./MapView-C7Qv1gdk.js";import{i as t}from"./AGraphicContainer-DoAZ1Csn.js";class d extends t{renderChildren(r){for(const e of this.children)e.setTransform(r.state);if(super.renderChildren(r),this._updateAttributeView(),this.children.some(e=>e.hasData)){switch(r.drawPhase){case s.MAP:this._renderChildren(r,i.All);break;case s.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(r)}this._boundsRenderer&&this._boundsRenderer.doRender(r)}}_renderHighlight(r){h(r,!1,e=>{this._renderChildren(e,i.Highlight)})}}export{d as t};
