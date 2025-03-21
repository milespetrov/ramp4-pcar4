import{q as i,u as s,C as d,A as S,aw as $,dC as q,aD as _,aj as P,V as w,dO as A,s as C,aq as a,fq as h,as as H,n as O}from"./main-DvRWqUGe.js";import{e as j}from"./utils-BQBvadb7.js";import{n as V}from"./Container-8b8j-XB9.js";import{i as b,l as x,a as T,r as U,b as k}from"./MapView-BaoCSXvJ.js";import{r as L}from"./layerViewUtils-B-LwCxtO.js";let u=class extends S{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};i([s({readOnly:!0})],u.prototype,"version",null),u=i([d("esri.views.layers.support.ClipArea")],u);const R=u;var v;let p=v=class extends R{constructor(n){super(n),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new v({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};i([s({type:[Number,String],json:{write:!0}})],p.prototype,"left",void 0),i([s({type:[Number,String],json:{write:!0}})],p.prototype,"right",void 0),i([s({type:[Number,String],json:{write:!0}})],p.prototype,"top",void 0),i([s({type:[Number,String],json:{write:!0}})],p.prototype,"bottom",void 0),p=v=i([d("esri.views.layers.support.ClipRect")],p);const N=p;var f;const M={base:q,key:"type",typeMap:{extent:_,polygon:P}};let g=f=class extends R{constructor(n){super(n),this.type="geometry",this.geometry=null}clone(){return new f({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};i([s({types:M,json:{read:$,write:!0}})],g.prototype,"geometry",void 0),g=f=i([d("esri.views.layers.support.Geometry")],g);const D=g;let y=class extends R{constructor(n){super(n),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};i([s({type:[[[Number]]],json:{write:!0}})],y.prototype,"path",void 0),y=i([d("esri.views.layers.support.Path")],y);const G=y,m=w.ofType({key:"type",base:null,typeMap:{rect:N,path:G,geometry:D}}),B=new(w.ofType(b)),J=n=>{let r=class extends n{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const e=this.view?.spatialReferenceLocked??!0;this.view?.spatialReference&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new C("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new V),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([a(()=>this.suspended,t=>{this.container&&(this.container.visible=!t)},h),a(()=>this.updateSuspended,t=>{this.view&&!t&&this.updateRequested&&this.view.requestUpdate()},h),a(()=>this.layer?.opacity??1,t=>{this.container&&(this.container.opacity=t)},h),a(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",t=>{this.container&&(this.container.blendMode=t)},h),a(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,t=>{this.container&&(this.container.effect=t)},h),a(()=>this._mergedHighlights.items.map(t=>({name:t.name,options:{fillColor:t.options.color,haloColor:t.options.haloColor,fillOpacity:t.options.fillOpacity,haloOpacity:t.options.haloOpacity,haloWidth:t.options.haloWidth,haloBlur:t.options.haloBlur}})),()=>{this.container.highlightGradient=T(this.container.highlightGradient,this._mergedHighlights.items)},h),a(()=>this._mergedHighlights.items.map(t=>t.name),()=>{this._updateHighlights()}),H(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)},h),a(()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}),({scale:t,scaleRange:c})=>{const l=L(c,t);l!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=l)},h)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then(t=>{t===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return U(this)}set highlightOptions(e){k(this,e)}get _mergedHighlights(){if(!this.view)return B;if(!this.highlights)return this.view.highlights;const e=this.view.highlights.clone();for(const o of this.highlights){const t=e.find(c=>c.name===o.name);t&&(t.options=o.options)}return e}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const e=this.view?.spatialReference;return e==null||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,o){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(j(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),o=!this.spatialReferenceSupported;return o&&(e.spatialReferenceNotSupported=o),e}addAttachHandles(e){this.addHandles(e,"attach")}_getHighlightBits(e){e=new Set(e);let o=1,t=0;if(!this.view)return 0;const c=this._mergedHighlights;for(const{name:l}of c)e.delete(l)&&(t=o),o<<=1;for(const l of e)O.getLogger(this).error("#highlights",`${l} was not found. Features in this group will not be highlighted.`);return t}};return i([s()],r.prototype,"attached",void 0),i([s({type:m,set(e){const o=A(e,this._get("clips"),m);this._set("clips",o)}})],r.prototype,"clips",void 0),i([s()],r.prototype,"container",void 0),i([s({type:x})],r.prototype,"highlightOptions",null),i([s({type:w.ofType(b)})],r.prototype,"highlights",void 0),i([s()],r.prototype,"_mergedHighlights",null),i([s()],r.prototype,"moving",void 0),i([s({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),i([s({readOnly:!0})],r.prototype,"updateParameters",void 0),i([s()],r.prototype,"updateRequested",void 0),i([s()],r.prototype,"updating",null),i([s()],r.prototype,"view",void 0),i([s()],r.prototype,"_visibleAtCurrentScale",void 0),i([s({readOnly:!0})],r.prototype,"visibleAtCurrentScale",null),r=i([d("esri.views.2d.layers.LayerView2D")],r),r};export{D as a,J as j};
