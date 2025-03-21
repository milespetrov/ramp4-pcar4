import{u as n,v as r,D as f,an as p,b9 as l,bi as _,c0 as g,a5 as b,a9 as v,aa as c}from"./main-CZM6prq-.js";import{e as m}from"./MapView-K5zGkKSo.js";import{a as R}from"./EffectView-B1UKKBSM.js";let s=class extends p{constructor(e){super(e),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,this._fadeOutResolver?.(),this._fadeOutResolver=null,this._fadeInResolver=l()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver=l()),this._fadeOutResolver.promise}transitionStep(e,t){const i=_("mapview-transitions-duration"),h=i?1/i:0;if(h===0)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const a=this._fadeOutResolver||!this.visible?0:this.opacity,o=this.computedOpacity;if(o===a)this.computedVisible=this.visible;else{const d=e*h;this.computedOpacity=o>a?Math.max(a,o-d):Math.min(a,o+d),this.computedVisible=this.computedOpacity>0}}this.transitioning||(this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeOutResolver=this._fadeInResolver=null)}};n([r()],s.prototype,"computedOpacity",void 0),n([r()],s.prototype,"computedVisible",void 0),n([r()],s.prototype,"opacity",void 0),n([r()],s.prototype,"visible",void 0),n([r()],s.prototype,"transitioning",null),n([r()],s.prototype,"_fadeOutResolver",void 0),n([r()],s.prototype,"_fadeInResolver",void 0),s=n([f("esri.views.2d.engine.transitions.FadeTransition")],s);class u extends g{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){return this._fadeTransition?.computedOpacity??this.opacity}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get fadeTransitionEnabled(){return this._fadeTransition!==null}set fadeTransitionEnabled(t){!this._fadeTransition&&t?(this._fadeTransition=new s({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!t&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){return this._fadeTransition?.transitioning??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const i=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i?.trashDisplayObject(this)}get transforms(){return this._transforms==null&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(t){this._transitionables??=[],this._transitionables.push(t),this.requestRender()}removeTransitionable(t){t.endTransition(),this._transitionables&&b(this._transitionables,t),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),t}fadeOut(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),t}endTransitions(){if(this._transitionables){for(const t of this._transitionables)t.endTransition();this.requestRender()}}beforeRender(t){this.transitionStep(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this.transitioning&&this.requestRender()}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&(this._fadeTransition?.computedVisible??this.visible)&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){return this._transitionables?.some(t=>t.transitioning)??!1}transitionStep(t,i){if(this._transitionables)for(const h of this._transitionables)h.transitionStep(t,i)}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}let y=class extends u{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new v,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get children(){return c(this._childrenObservable),this._children}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach(t=>t.clips=e)}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new R,this.addTransitionable(this._effectView)),this._effectView.effect=e,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(e){this._highlightGradient=e,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some(e=>e.hasHighlight)}get hasLabels(){return this.children.some(e=>e.hasLabels)}get requiresDedicatedFBO(){return this.children.some(e=>"blendMode"in e&&e.blendMode&&e.blendMode!=="normal")}get isReady(){return this.children.every(e=>e.isReady)}get sortFunction(){return this._sortFunction}set sortFunction(e){this._sortFunction=e,e&&(this._needsSort=!0)}doRender(e){const t=this.createRenderParams(e),{painter:i}=t;i.beforeRenderLayer(t,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(t),i.afterRenderLayer(t,this.computedOpacity)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e||this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),e}contains(e){return c(this._childrenObservable),this._childrenSet.has(e)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,this._childrenObservable.notify(),t}beforeRender(e){super.beforeRender(e),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{displayViewScreenMat3:m()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some(e=>e.transitioning)}};export{u as e,y as n};
