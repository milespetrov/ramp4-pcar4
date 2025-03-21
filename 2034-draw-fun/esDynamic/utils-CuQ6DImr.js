import{bi as A,iU as D,iV as x,iW as T,u as l,v as d,D as R,an as N,n as O,fz as m}from"./main-CZM6prq-.js";import{s as C}from"./Queue-Cs7c5dO6.js";import{r as K}from"./signal-DZX3x54F.js";import{r as L}from"./Version-BJzGowUB.js";const b=A("mac")?"Meta":"Control",U=new Set(["Alt","Control","Meta","Shift","Ctrl","Primary"]),G=e=>U.has(e);let z=class{constructor(e,t=[]){this.eventType=e,this.keyModifiers=t}matches(e){if(e.type!==this.eventType)return!1;if(this.keyModifiers.length===0)return!0;const t=e.modifiers;for(const i of this.keyModifiers)if(!t.has(i))return!1;return!0}},v=class{constructor(e){this._manager=null,this._incoming={},this._outgoing={},this._incomingEventMatches=null,this._incomingEventTypes=null,this._outgoingEventTypes=null,this._hasSideEffects=e}get incomingEventMatches(){if(!this._incomingEventMatches){this._incomingEventMatches=[];for(const e in this._incoming){const t=this._incoming[e];for(const i of t)this._incomingEventMatches.push(i.match)}}return this._incomingEventMatches}get incomingEventTypes(){return this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map(e=>e.eventType)),this._incomingEventTypes}get outgoingEventTypes(){return this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing)),this._outgoingEventTypes}get hasSideEffects(){return this._hasSideEffects}get hasPendingInputs(){return!1}onInstall(e){this._manager||(e.setEventCallback(t=>this._handleEvent(t)),e.setUninstallCallback(()=>this._onUninstall()),this._manager=e)}onUninstall(){}registerIncoming(e,t,i){let n;typeof t=="function"?(i=t,n=[]):n=t||[];const s=typeof e=="string"?new z(e,n):e,r=()=>{this._incomingEventTypes=null,this._incomingEventMatches=null},o=p=>{const u=this._incoming[p.match.eventType];if(u){const H=u.indexOf(p);u.splice(H,1),r(),this._manager&&this._manager.updateDependencies()}},h=new q(s,i,{onPause:o,onRemove:o,onResume:p=>{const u=this._incoming[p.match.eventType];u&&!u.includes(p)&&(u.push(p),r(),this._manager&&this._manager.updateDependencies())}});let c=this._incoming[s.eventType];return c||(c=[],this._incoming[s.eventType]=c),c.push(h),r(),this._manager&&this._manager.updateDependencies(),h}registerOutgoing(e){if(this._outgoing[e])throw new Error("There is already a callback registered for this outgoing InputEvent: "+e);const t=new j(e,{onEmit:(i,n,s,r)=>{this._manager?.emit(i.eventType,n,s,r)},onRemove:i=>{delete this._outgoing[i.eventType],this._manager?.updateDependencies()}});return this._outgoing[e]=t,this._outgoingEventTypes=null,this._manager&&this._manager.updateDependencies(),t}startCapturingPointer(e){this._manager?.setPointerCapture(e,!0)}stopCapturingPointer(e){this._manager?.setPointerCapture(e,!1)}refreshHasPendingInputs(){this._manager?.refreshHasPendingInputs()}_onUninstall(){this._manager&&(this.onUninstall(),this._manager=null)}_handleEvent(e){const t=this._incoming[e.type];if(t){for(const i of t)if(i.match.matches(e)&&(i.callback?.(e),e.shouldStopPropagation()))break}}},q=class{constructor(e,t,i){this.match=e,this._callback=t,this._handler=i}pause(){this._handler.onPause(this)}resume(){this._handler.onResume(this)}remove(){this._handler.onRemove(this)}get callback(){return this._callback}},j=class{constructor(e,t){this.eventType=e,this._removed=!1,this._handler=t}emit(e,t,i){this._removed||this._handler.onEmit(this,e,t,i)}remove(){this._removed=!0,this._handler.onRemove(this)}},F=class extends v{constructor(e){super(!0),this._onChange=e,this._value="mouse",this._x=null,this._y=null,this.registerIncoming("pointer-move",t=>this._update(t.data))}_update(e){const t=e.native.pointerType==="touch"?"touch":"mouse",{x:i,y:n}=e;t===this._value&&this._x===i&&this._y===n||(this._value=t,this._x=i,this._y=n,this._onChange(t,i,n))}},W=class extends v{get multiTouchActive(){return this._multiTouchActive.value}constructor(){super(!0),this._activeTouchPointerIds=new Set,this._multiTouchActive=K(!1),this._onPointerAdd=({data:e})=>{e.pointerType==="touch"&&(this._activeTouchPointerIds.add(e.native.pointerId),this._update())},this._onPointerRemove=({data:e})=>{e.pointerType==="touch"&&(this._activeTouchPointerIds.delete(e.native.pointerId),this._update())},this.registerIncoming("pointer-down",this._onPointerAdd),this.registerIncoming("pointer-up",this._onPointerRemove),this.registerIncoming("pointer-capture-lost",this._onPointerRemove),this.registerIncoming("pointer-cancel",this._onPointerRemove)}_update(){this._multiTouchActive.value=this._activeTouchPointerIds.size>1}},I=class{constructor(e,t){this._owner=t,this._properties={},this._afterDispatchHandle=null;for(const i in e){const n=e[i],s=new D(n,void 0,void 0,2,2);this._properties[i]={pool:s,acquired:[]}}this._afterDispatchHandle=x(()=>this._release())}destroy(){this._afterDispatchHandle&&(this._afterDispatchHandle.remove(),this._afterDispatchHandle=null);for(const e in this._properties){const t=this._properties[e];for(const i of t.acquired)T(i)||t.pool.release(i);t.pool.destroy(),t.pool=null,t.acquired=null}this._properties=null,this._owner=null}get(e){const t=this._owner._get(e),i=this._properties[e];let n=i.pool.acquire();for(i.acquired.push(n);n===t;)i.acquired.push(n),n=i.pool.acquire();return n}_release(){for(const e in this._properties){const t=this._properties[e];let i=0;for(const n of t.acquired)T(n)?t.acquired[i++]=n:t.pool.release(n);t.acquired.length=i}}},a=class extends N{constructor(e){super(e),this._pointerCaptures=new Map,this._nameToGroup={},this._handlers=[],this._handlersPriority=[],this._currentPropagation=null,this._updateDependenciesAfterPropagation=!1,this._sourceEvents=new Set,this._keyModifiers=new Set,this._activeKeyModifiers=new Set,this._stoppedPropagationEventIds=new Set,this.primaryKey=b,this._latestPointerType="mouse",this._propertiesPool=new I({latestPointerLocation:V},this),this.latestPointerLocation=null,this._paused=!1,this.test={timestamp:void 0,hasCurrentPropagation:()=>!!this._currentPropagation}}initialize(){this.eventSource.onEventReceived=this._onEventReceived.bind(this),this._installRecognizers()}destroy(){const e=Object.keys(this._nameToGroup);for(const t of e)this.uninstallHandlers(t);this.eventSource.destroy(),this._currentPropagation=null,this._propertiesPool.destroy()}get hasPendingInputs(){return this._handlers.some(e=>e.handler.hasPendingInputs)}get latestPointerType(){return this._latestPointerType}get multiTouchActive(){return this._multiTouchHandler.multiTouchActive}get updating(){return this.hasPendingInputs||this._paused}installHandlers(e,t,i=g.INTERNAL){if(this._nameToGroup[e]||t.length===0)return;const n={name:e,handlers:t.map(s=>({handler:s,active:!0,removed:!1,priorityIndex:0,groupPriority:i,eventCallback:null,uninstallCallback:null}))};this._nameToGroup[e]=n;for(let s=n.handlers.length-1;s>=0;s--){const r=n.handlers[s];this._handlers.push(r),r.handler.onInstall({updateDependencies:()=>{this.updateDependencies()},emit:(o,h,c,p,u)=>{this._emitInputEvent(r.priorityIndex+1,o,h,c,u,p)},setPointerCapture:(o,h)=>{this._setPointerCapture(n,r,o,h)},setEventCallback:o=>{r.eventCallback=o},setUninstallCallback:o=>{r.uninstallCallback=o},refreshHasPendingInputs:()=>{this.notifyChange("hasPendingInputs")}})}this.updateDependencies()}uninstallHandlers(e){const t=this._nameToGroup[e];t?(t.handlers.forEach(i=>{i.removed=!0,i.uninstallCallback?.()}),delete this._nameToGroup[e],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):O.getLogger(this).error("There is no InputHandler group registered under the name `"+e+"`")}hasHandlers(e){return this._nameToGroup[e]!==void 0}isModifierKeyDown(e){return this._activeKeyModifiers.has(e)}updateDependencies(){if(this._currentPropagation)return void(this._updateDependenciesAfterPropagation=!0);this._updateDependenciesAfterPropagation=!1;const e=new Set,t=new Set;this._handlersPriority=[];for(let i=this._handlers.length-1;i>=0;i--){const n=this._handlers[i];n.priorityIndex=i,this._handlersPriority.push(n)}this._handlersPriority=this._sortHandlersPriority(this._handlersPriority);for(let i=this._handlersPriority.length-1;i>=0;i--){const n=this._handlersPriority[i];n.priorityIndex=i;let s=n.handler.hasSideEffects;if(!s){for(const r of n.handler.outgoingEventTypes)if(e.has(r)){s=!0;break}}if(s)for(const r of n.handler.incomingEventMatches){e.add(r.eventType);for(const o of r.keyModifiers)G(o)||t.add(o)}n.active=s}this._sourceEvents=e,this._keyModifiers=t,this._pointerCaptures.size>0&&this._sourceEvents.add("pointer-capture-lost"),this._keyModifiers.size>0&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up")),this.eventSource&&(this.eventSource.activeEvents=this._sourceEvents)}_setLatestPointer(e,t,i){this._latestPointerType=e;const n=this._get("latestPointerLocation");if(n==null||n.x!==t||n.y!==i){const s=this._propertiesPool.get("latestPointerLocation");s.x=t,s.y=i,this._set("latestPointerLocation",s)}}_onEventReceived(e,t){if(e==="pointer-capture-lost"){const s=t;this._pointerCaptures.delete(s.native.pointerId)}this._updateKeyModifiers(e,t);const i=this.test.timestamp!=null?this.test.timestamp:t.native?t.native.timestamp:void 0,n=t.native?t.native.cancelable:void 0;this._emitInputEventFromSource(e,t,i,n)}_updateKeyModifiers(e,t){if(!t)return;let i=!1;const n=()=>{i||(this._activeKeyModifiers=new Set(this._activeKeyModifiers),i=!0)},s=(o,h)=>{h&&!this._activeKeyModifiers.has(o)?(n(),this._activeKeyModifiers.add(o)):!h&&this._activeKeyModifiers.has(o)&&(n(),this._activeKeyModifiers.delete(o))};if(e==="key-down"||e==="key-up"){const o=t.key;this._keyModifiers.has(o)&&s(o,e==="key-down")}const r=t.native;s("Alt",!!r?.altKey),s("Control",!!r?.ctrlKey),s("Ctrl",!!r?.ctrlKey),s("Shift",!!r?.shiftKey),s("Meta",!!r?.metaKey),s("Primary",this._activeKeyModifiers.has(this.primaryKey))}_installRecognizers(){this._latestPointerHandler=new F((e,t,i)=>this._setLatestPointer(e,t,i)),this._multiTouchHandler=new W,this.installHandlers("input-manager-logic",[this._latestPointerHandler,this._multiTouchHandler],g.ALWAYS),this.recognizers.length>0&&this.installHandlers("default",this.recognizers,g.INTERNAL)}_setPointerCapture(e,t,i,n){const s=e.name+"-"+t.priorityIndex,r=this._pointerCaptures.get(i.pointerId)||new Set;this._pointerCaptures.set(i.pointerId,r),n?(r.add(s),r.size===1&&this.eventSource&&this.eventSource.setPointerCapture(i,!0)):r.has(s)&&(r.delete(s),r.size===0&&(this._pointerCaptures.delete(i.pointerId),this.eventSource&&this.eventSource.setPointerCapture(i,!1)))}_garbageCollectRemovedHandlers(){this._handlers=this._handlers.filter(e=>!e.removed),this.updateDependencies()}_emitInputEventFromSource(e,t,i,n){this._emitInputEvent(0,e,t,i,n)}_emitInputEvent(e,t,i,n,s,r){const o=n!==void 0?n:this._currentPropagation?this._currentPropagation.timestamp:performance.now(),h=s!==void 0&&s,c={event:new Y(t,i,o,r||this._activeKeyModifiers,h),priorityIndex:e};this._currentPropagation?this._currentPropagation.events.push(c):this._doNewPropagation(c)}_doNewPropagation(e){this._currentPropagation={events:new C,currentHandler:null,needsHandlerGarbageCollect:!1,timestamp:e.event.timestamp},this._currentPropagation.events.push(e),this._continuePropagation()}_continuePropagation(){this._paused=!1;const e=this._currentPropagation;if(e){for(;e.events.length>0;){const{event:t,priorityIndex:i}=e.events.pop(),n=t.data?.eventId;if(!(n!=null&&this._stoppedPropagationEventIds.has(n)))for(e.currentHandler=this._handlersPriority[i];e.currentHandler;){if(e.currentHandler.removed)e.needsHandlerGarbageCollect=!0;else{if(e.currentHandler.active&&!t.shouldStopPropagation()&&e.currentHandler.eventCallback?.(t),t.shouldStopPropagation()){n!=null&&this._stoppedPropagationEventIds.add(n);break}if(t.shouldPausePropagation(()=>this._continuePropagation()))return void this._pausePropagation({event:t,priorityIndex:e.currentHandler.priorityIndex+1})}e.currentHandler=this._handlersPriority[e.currentHandler.priorityIndex+1]}}e.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers(),this.hasPendingInputs||this._stoppedPropagationEventIds.clear(),this._currentPropagation=null,this._updateDependenciesAfterPropagation&&this.updateDependencies()}}_pausePropagation(e){const t=new C;t.push(e);const i=this._currentPropagation;if(i){for(;i.events.length;)t.push(i.events.pop());i.events=t,i.currentHandler=null,this._paused=!0}}_compareHandlerPriority(e,t){if(e.handler.hasSideEffects!==t.handler.hasSideEffects)return e.handler.hasSideEffects?1:-1;if(e.groupPriority!==t.groupPriority)return e.groupPriority>t.groupPriority?-1:1;for(const i of e.handler.incomingEventMatches)for(const n of t.handler.incomingEventMatches){if(i.eventType!==n.eventType)continue;const s=i.keyModifiers.filter(r=>n.keyModifiers.includes(r));if(s.length===i.keyModifiers.length!=(s.length===n.keyModifiers.length))return i.keyModifiers.length>n.keyModifiers.length?-1:1}return e.priorityIndex>t.priorityIndex?-1:1}_sortHandlersPriority(e){const t=[];for(const i of e){let n=0;for(;n<t.length&&this._compareHandlerPriority(i,t[n])>=0;)n++;t.splice(n,0,i)}return t}get debug(){const e=t=>{const i=this._setPointerCapture;this._setPointerCapture=()=>{},t(),this._setPointerCapture=i};return{injectEvent:(t,i)=>{e(()=>this._onEventReceived(t,i))},disablePointerCapture:e}}};l([d({readOnly:!0})],a.prototype,"hasPendingInputs",null),l([d({constructOnly:!0})],a.prototype,"eventSource",void 0),l([d({constructOnly:!0})],a.prototype,"recognizers",void 0),l([d()],a.prototype,"_latestPointerType",void 0),l([d()],a.prototype,"latestPointerType",null),l([d()],a.prototype,"multiTouchActive",null),l([d({readOnly:!0})],a.prototype,"latestPointerLocation",void 0),l([d()],a.prototype,"_paused",void 0),l([d({readOnly:!0})],a.prototype,"updating",null),a=l([R("esri.views.input.InputManager")],a);let Y=class{constructor(e,t,i,n,s){this.type=e,this.data=t,this.timestamp=i,this.modifiers=n,this.cancelable=s,this._propagationState=_.NONE,this._resumeCallback=null}stopPropagation(){this._propagationState|=_.STOPPED}shouldStopPropagation(){return!!(this._propagationState&_.STOPPED)}async(e){this._propagationState|=_.PAUSED;const t=(i,n)=>{this._propagationState&=~_.PAUSED;const s=this._resumeCallback;if(this._resumeCallback=null,s&&s(),n)throw i;return i};return(typeof e=="function"?e():e).then(i=>t(i,!1),i=>t(i,!0))}shouldPausePropagation(e){return!!(this._propagationState&_.PAUSED)&&(this._resumeCallback=e,!0)}preventDefault(){this.data.native.preventDefault()}};var _;(function(e){e[e.NONE=0]="NONE",e[e.STOPPED=1]="STOPPED",e[e.PAUSED=2]="PAUSED"})(_||(_={}));const g={ALWAYS:1,DEFAULT:0,TOOL:-1,WIDGET:-2,INTERNAL:-3};class B{}const V=B;var f,y,P;(function(e){e[e.USER=0]="USER",e[e.MANAGER=1]="MANAGER"})(f||(f={})),function(e){e[e.None=0]="None",e[e.Unfocused=1]="Unfocused",e[e.Focused=2]="Focused",e[e.Unselected=4]="Unselected",e[e.Selected=8]="Selected",e[e.All=15]="All"}(y||(y={})),function(e){e[e.None=0]="None",e[e.Custom1=16]="Custom1",e[e.Custom2=32]="Custom2",e[e.Custom3=64]="Custom3",e[e.Custom4=128]="Custom4",e[e.Custom5=256]="Custom5",e[e.Custom6=512]="Custom6",e[e.Custom7=1024]="Custom7",e[e.Custom8=2048]="Custom8",e[e.Custom9=4096]="Custom9",e[e.Custom10=8192]="Custom10",e[e.Custom11=16384]="Custom11",e[e.Custom12=32768]="Custom12",e[e.All=65520]="All"}(P||(P={}));function w(e){return m(e.x,e.y)}function S(e,t){const i=(e instanceof HTMLElement?e:e.surface)?.getBoundingClientRect();return i?m(t.clientX-i.left,t.clientY-i.top):m(0,0)}function X(e,t){return t instanceof Event?S(e,t):w(t)}function J(e){if(e instanceof Event)return!0;if(typeof e=="object"&&"type"in e)switch(e.type){case"click":case"double-click":case"pointer-down":case"pointer-drag":case"pointer-enter":case"pointer-leave":case"pointer-up":case"pointer-move":case"immediate-click":case"immediate-double-click":case"hold":case"drag":case"mouse-wheel":return!0;default:return!1}return!1}function E(){return[1,0,0,1,0,0]}function k(e){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function Q(e,t,i,n,s,r){return[e,t,i,n,s,r]}function $(e,t){return new Float64Array(e,t,6)}const M=E();Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:M,clone:k,create:E,createView:$,fromValues:Q},Symbol.toStringTag,{value:"Module"}));const Z={anchor:"esri-widget__anchor",anchorDisabled:"esri-widget__anchor--disabled",button:"esri-button",buttonDisabled:"esri-button--disabled",buttonHalf:"esri-button--half",buttonSecondary:"esri-button--secondary",buttonSmall:"esri-button--small",buttonTertiary:"esri-button--tertiary",buttonThird:"esri-button--third",disabled:"esri-disabled",empty:"esri-widget__content--empty",emptyIllustration:"esri-widget__content-illustration--empty",heading:"esri-widget__heading",hidden:"esri-hidden",input:"esri-input",interactive:"esri-interactive",loader:"esri-widget__loader",loaderAnimation:"esri-widget__loader-animation",loaderText:"esri-widget__loader-text",menu:"esri-menu",menuHeader:"esri-menu__header",menuItem:"esri-menu__list-item",menuItemActive:"esri-menu__list-item--active",menuItemFocus:"esri-menu__list-item--focus",menuList:"esri-menu__list",panel:"esri-widget--panel",panelHeightOnly:"esri-widget--panel-height-only",primaryTick:"primary-tick",primaryTickAmPm:"primary-tick__ampm",primaryTickLabel:"primary-tick__label",rotating:"esri-rotating",secondaryTick:"secondary-tick",select:"esri-select",table:"esri-widget__table",widget:"esri-widget",widgetButton:"esri-widget--button",widgetButtonActive:"esri-widget--button-active",widgetDisabled:"esri-widget--disabled"};class ee extends L{constructor(t,i){super(t,i,"webmap")}}function te(e){return e!=null&&typeof e=="object"&&"declaredClass"in e&&e.declaredClass==="esri.WebMap"}new ee(2,32);export{g as _,E as a,k as b,M as c,v as d,Z as e,a as f,J as g,X as h,S as i,I as j,y as k,w as n,f as o,te as r,b as t,P as u};
