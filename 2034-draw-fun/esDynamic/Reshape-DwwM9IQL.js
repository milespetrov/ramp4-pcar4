import{u as l,v as d,D as T,fs as K,ao as x,fn as N,ar as O,fz as X,ay as w,c$ as G,c0 as Y,V as S,gk as $,ap as j,dG as q,G as E,gl as J,ag as Q,aN as C,ft as H,at as k,gm as W,cm as ee,d1 as b,n as te,s as ie}from"./main-CZM6prq-.js";import se from"./GraphicsLayer-Fdxtp9fh.js";import{l as oe}from"./ViewingMode-CyR_b1T8.js";import{d as re}from"./SnappingVisualizer2D-Dtzx93Wv.js";import{i as ne}from"./drawUtils-C7v4wHq6.js";import{h as ae,U as he}from"./GraphicMover-BGFuDZLg.js";import{l as R,k as pe,P as ce,A as le,B as de,C as ve}from"./index-BW9IXgxu.js";import{h as I}from"./widget-QZbbhrmz.js";import{r as me,K as ye,c as A,m as _e,R as ge,H as ue,k as fe,G as xe}from"./automaticLengthMeasurementUtils-DCPXRUsH.js";import{i as Ge,p as be}from"./SelectedVertexTooltipInfo-D97jHUsQ.js";import{i as Ve}from"./TranslateTooltipInfo-CE9zhK4z.js";import{u as L}from"./automaticAreaMeasurementUtils-CwaumvVN.js";import{h as we}from"./settings-DFTO8zzc.js";import{_ as Me}from"./utils-CuQ6DImr.js";let f=class extends me{constructor(e){super(e),this.type="translate-vertex",this.distance=I,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=I,this.elevation=null,this.area=null,this.totalLength=null}};l([d()],f.prototype,"type",void 0),l([d()],f.prototype,"distance",void 0),l([d()],f.prototype,"elevation",void 0),l([d()],f.prototype,"area",void 0),l([d()],f.prototype,"totalLength",void 0),f=l([T("esri.views.interactive.tooltip.infos.TranslateVertexTooltipInfo")],f);function Se(e){const t={sketchOptions:e,viewType:"2d"};return{movePoint:new Ge(t),selectedVertex:new be(t),translateGraphic:new Ve(t),translateVertices:new f(t)}}function Ee(e,t){function i(){const o=t(),n=o.sketchOptions.tooltips.effectiveEnabled?o.activeTooltipInfo:null;return{...o,activeTooltipInfo:n}}let s=!1;function r(o){s||(s=!0,o(),s=!1)}return K([x(()=>{const o=i();return{context:o,geometry:o.graphic?.geometry,vertexGeometry:o.selectedVertex?.geometry}},({context:o})=>{r(()=>{ke(o),e.info=o.activeTooltipInfo})},N),x(()=>{const o=i(),{activeTooltipInfo:n}=o;if(n&&"key"in n)return{context:o,key:n.key}},(o,n)=>{o&&n&&o.key!==n.key&&r(()=>P(o.context))},O),ye(e,{onBeforePaste:()=>{s=!0},onAfterPaste:()=>{P(i()),s=!1}})])}function ke(e){const t=e.activeTooltipInfo;if(t){switch(t?.type){case"move-point":return Ie(t,e);case"selected-vertex":return Te(t,e)}t.sketchOptions=e.sketchOptions}}function Ie(e,{graphic:t}){z(e,t,t?.geometry)}function Te(e,{graphic:t,selectedVertex:i}){z(e,t,i?.geometry);const s=t?.geometry;switch(s?.type){case"polygon":e.geometryType="polygon",e.totalLength.visible=!1,e.area.actual=L(s);break;case"polyline":e.geometryType="polyline",e.totalLength.actual=A(s),e.area.visible=!1}}function z(e,t,i){t&&i?.type==="point"&&(e.setLocationFromPoint(i),e.elevation.actual=ge(i),e.elevation.visible=!!t.geometry?.hasZ,e.elevation.readOnly=!1,e.elevation.showAsZ=!0)}function P(e){function t(o,n){const a=n?.geometry;if(!a||a.type!=="point")return;const{dx:c,dy:h,dz:p}=ue(o,a);if(c===0&&h===0&&p===0)return;const{x:m,y:_,z:g,m:u,spatialReference:V}=a,M=new w({x:m+c,y:_+h,z:g!=null?g+p:void 0,m:u,spatialReference:V});e.updateGeometry(n,M,a,c,h)}const{activeTooltipInfo:i,graphic:s,selectedVertex:r}=e;switch(i?.type){case"move-point":return t(i,s);case"selected-vertex":return t(i,r)}}function Oe(e,t,i){e.clear(),U(e,t,i)}function Ce(e,t,i,s){e.clear(),i?.type==="polygon"?e.area=L(i):i?.type==="polyline"&&(e.totalLength=A(i)),U(e,t,s)}function U(e,t,i){if(!i)return;const{x:s,y:r}=i.origin,o=t.toMap(i),n=t.toMap(X(s,r)),a=_e(n,o);e.distance=a??I}class He{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape-start"}}class Re{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape"}}class Ae{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape-stop"}}class Le{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move-start"}}class ze{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move"}}class Pe{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move-stop"}}class Ue{constructor(t){this.added=t,this.type="vertex-select"}}class De{constructor(t){this.removed=t,this.type="vertex-deselect"}}class Fe{constructor(t,i,s,r){this.added=t,this.graphic=i,this.oldGraphic=s,this.vertices=r,this.type="vertex-add"}}class Ze{constructor(t,i,s,r){this.removed=t,this.graphic=i,this.oldGraphic=s,this.vertices=r,this.type="vertex-remove"}}const y=we.reshapeGraphics,Be={vertices:{default:new G({style:"circle",size:y.vertex.size,color:y.vertex.color,outline:{color:y.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:y.vertex.hoverSize,color:y.vertex.hoverColor,outline:{color:y.vertex.hoverOutlineColor,width:1}}),selected:new G({style:"circle",size:y.selected.size,color:y.selected.color,outline:{color:y.selected.outlineColor,width:1}})},midpoints:{default:new G({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}}),hover:new G({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}})}};let v=class extends Y.EventedAccessor{constructor(e){super(e),this._updateHandlesOnExternalGeometryChange=null,this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._snappingGraphicsLayer=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this.activeTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new S,this.midpointSymbol=new G({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=new S,this.snappingManager=null,this.symbols=Be,this.sketchOptions=new R,this.type="reshape",this.vertexGraphics=new S,this.view=null}initialize(){const e=this.view;this._highlightHelper=new ae({view:e}),this._setup(),this._updateHandlesOnExternalGeometryChange=$(()=>this.graphic?.geometry,t=>{if(!t)return;const i=new Set(this.selectedVertices.map(h=>h.attributes?.pointIndex));this._highlightHelper.removeAll(),this._setUpHighlights(),this._setupGraphics(),this._clearSelection(),this.vertexGraphics.filter(h=>i.has(h.attributes.pointIndex)).forEach(h=>this._addToSelection(h));const{enableMovement:s,_mover:r,graphic:o,midpointGraphics:n,vertexGraphics:a}=this,c=a.concat(n).items;s&&c.push(o),r?.set("graphics",c)},O),this.tooltip=fe(()=>({view:e,options:this.sketchOptions.tooltips})),this.tooltipInfos=Se(this.sketchOptions),this.addHandles([j(()=>e?.ready,()=>{const{layer:t,view:i}=this;pe(i,t),this.addHandles(i.on("key-down",s=>this._keyDownHandler(s),Me.TOOL))},{once:!0,initial:!0}),x(()=>this.graphic,()=>this.refresh()),x(()=>this.layer,(t,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),x(()=>this.enableMidpoints,()=>this.refresh()),Ee(this.tooltip,()=>this._tooltipsContext),x(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),q),this._updateHandlesOnExternalGeometryChange]),this._updateTooltip()}destroy(){this._reset(),this._mover?.destroy(),this._mover=null,this.tooltip=E(this.tooltip)}get _coordinateHelper(){return this._editGeometryOperations?.data.coordinateHelper??ce(!!this.graphic.geometry?.hasZ,!!this.graphic.geometry?.hasM,this.view.spatialReference)}get _selectedVertex(){return this.selectedVertices.length===1?this.selectedVertices.at(0):void 0}get _tooltipsContext(){return{sketchOptions:this.sketchOptions,activeTooltipInfo:this.activeTooltipInfo,graphic:this.graphic,selectedVertex:this._selectedVertex,updateGeometry:(e,t,i,s,r)=>{this._setUpGeometryHelper();const o=e===this.graphic;if(o?this._emitMoveStartEvent(0,0):this._emitReshapeStartEvent(e),this._syncGeometryAfterVertexMove(e,t,s,r,!0),o){const{view:n}=this,a=n.toScreen(i),c=n.toScreen(t),h=(c?.x??0)-(a?.x??0),p=(c?.y??0)-(a?.y??0);this._emitMoveEvent(h,p),this._emitMoveStopEvent(h,p)}else this._emitReshapeEvent(e),this._emitReshapeStopEvent(e);this._editGeometryOperations=E(this._editGeometryOperations)}}}set highlightsEnabled(e){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",e),this._setUpHighlights()}get state(){const e=this.view.ready,t=!(!this.graphic||!this.layer);return e&&t?"active":e?"ready":"disabled"}isUIGraphic(e){const t=[];return this.graphic&&t.push(this.graphic),t.concat(this.vertexGraphics.items,this.midpointGraphics.items),t.length>0&&t.includes(e)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){const{selectedVertices:e}=this;e.length&&this._removeVertices(e)}_setup(){const{graphic:e,layer:t}=this;if(!t||e?.geometry==null)return;const i=e.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&J(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper?.add(this.graphic)}_setUpGeometryHelper(){const e=this.graphic.geometry;if(e==null||e.type==="mesh"||e.type==="extent")return void this._logGeometryTypeError();const t=e.type==="multipoint"?new Q({paths:[e.points],spatialReference:e.spatialReference}):e;this._editGeometryOperations=le.fromGeometry(t,oe.Local)}_saveSnappingContextForHandle(e,t){this._snappingGraphicsLayer=new se({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer);const i=this._editGeometryOperations;C(i),this._snappingContext=new de({editGeometryOperations:i,elevationInfo:{mode:"on-the-ground",offset:0},pointer:t.viewEvent?.pointerType||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new re(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(e)})}_reset(){this._clearSelection(),this._highlightHelper?.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._snappingGraphicsLayer!=null&&(this.view?.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=E(this._editGeometryOperations),this._snappingTask=H(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(e){this._removeMidpointGraphics(e),this._removeVertexGraphics(e),this.selectedVertices.removeAll(),this._updateTooltip()}_removeMidpointGraphics(e){const t=e||this.layer;t&&t.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(e){const t=e||this.layer;t&&t.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_setupGraphics(){const e=this.graphic.geometry;if(e!=null&&(e.type==="polyline"||e.type==="polygon")){const t=D(e);this.enableMidpoints&&this._setUpMidpointGraphics(t),this.enableVertices&&this._setUpVertexGraphics(t)}}_setUpMidpointGraphics(e){this._removeMidpointGraphics();const t=this._createMidpointGraphics(e);this.midpointGraphics.addMany(t),this.layer.addMany(t)}_setUpVertexGraphics(e){this._removeVertexGraphics();const t=this._createVertexGraphics(e);this.vertexGraphics.addMany(t),this._storeRelatedVertexIndices(),this.layer.addMany(t)}_createVertexGraphics(e){const{_graphicAttributes:t,symbols:i}=this,s=[];return e?.forEach((r,o)=>{r.forEach((n,a)=>{s.push(new k({geometry:this._coordinateHelper.arrayToPoint(n),symbol:i?.vertices?.default,attributes:{...t,pathIndex:o,pointIndex:a}}))})}),s}_createMidpointGraphics(e){const{_graphicAttributes:t,symbols:i}=this,s=[];for(let r=0;r<e.length;r++){const o=e[r];for(let n=0;n<o.length;n++){const a=(n+1)%o.length;if(this.graphic.geometry?.type==="polyline"&&a===0)continue;const c=o[n],h=o[a],p=this._getMidpoint(c,h);s.push(new k({geometry:p,symbol:i.midpoints.default,attributes:{...t,pathIndex:r,pointIndexStart:n,pointIndexEnd:a}}))}}return s}_updateSymbolsForTheme(){const e=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",e),hover:this.symbols.vertices.hover?.clone().set("color",e)},midpoints:{...this.symbols.midpoints}};for(const t of this.vertexGraphics)this._isSelected(t)?t.symbol=this.symbols.vertices.selected:this._hoverGraphic===t?t.symbol=this.symbols.vertices.hover:t.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const e=this.vertexGraphics.items;if(!e)return;const t=e.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<t.length;i++){const s=[];for(let r=0;r<t.length;r++){if(i===r)continue;const o=t[i],n=t[r];o.x===n.x&&o.y===n.y&&s.push(r)}e[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:e,graphic:t,midpointGraphics:i,vertexGraphics:s,view:r}=this,o=s.concat(i).items;e&&o.push(t),this._mover=new he({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:o,view:r,callbacks:{onGraphicClick:n=>this._onGraphicClickCallback(n),onGraphicMoveStart:n=>this._onGraphicMoveStartCallback(n),onGraphicMove:n=>this._onGraphicMoveCallback(n),onGraphicMoveStop:n=>this._onGraphicMoveStopCallback(n),onGraphicPointerOver:n=>this._onGraphicPointerOverCallback(n),onGraphicPointerOut:n=>this._onGraphicPointerOutCallback(n)}})}_onGraphicClickCallback(e){e.viewEvent.stopPropagation();const t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick?.(e);else if(this._isMidpoint(t)){if(e.viewEvent.button===2)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,s)}else this._isVertex(t)&&(e.viewEvent.stopPropagation(),e.viewEvent.button===2?this._removeVertices(t):(e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t)))}_setUpOperation(e){const{graphic:t,dx:i,dy:s}=e,r=t===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._activeOperationInfo={target:this.graphic,mover:t,operationType:r?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(e){const{dx:t,dy:i,graphic:s}=e;if(s===this.graphic){const{geometry:r}=s;return this._setUpOperation(e),this._emitMoveStartEvent(t,i),void(r!=null&&r.type==="point"&&this._onHandleMove(s,t,i,e,()=>{this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(t,i)}))}if(!this.selectedVertices.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const r=this.graphic.clone(),o=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],r,o)}this._addToSelection(s)}this._setUpOperation(e),this._emitReshapeStartEvent(s),this._onHandleMove(s,t,i,e,()=>{this._updateTooltip(s,e.viewEvent),this._emitReshapeEvent(s)})}_onGraphicMoveCallback(e){const t=this._activeOperationInfo;if(!t)return;const{dx:i,dy:s,graphic:r}=e;t.totalDx+=i,t.totalDy+=s;const{operationType:o}=t,{geometry:n}=r;if(n!=null){if(o!=="move")this._onHandleMove(r,i,s,e,()=>{this._updateTooltip(r,e.viewEvent),this._emitReshapeEvent(r)});else if(n.type==="point")this._onHandleMove(r,i,s,e,()=>{this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(i,s)});else if(n.type==="polyline"||n.type==="polygon"){const a=D(n);this._updateVertexGraphicLocations(a),this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(i,s)}}}_onGraphicMoveStopCallback(e){const t=this._activeOperationInfo;if(!t)return;const{dx:i,dy:s,graphic:r}=e,{operationType:o}=t;t.totalDx+=i,t.totalDy+=s,this._onHandleMove(r,i,s,e,()=>o==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(r)),this._isMidpoint(r)?this.refresh():(this._updateTooltip(this._isVertex(r)?r:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(e){const{_coordinateHelper:t}=this;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:r}=i.attributes;i.geometry=t.arrayToPoint(e[s][r])}this._updateMidpointGraphicLocations(e)}_updateMidpointGraphicLocations(e){for(const t of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:r}=t.attributes,o=e[i];t.geometry=this._getMidpoint(o[s],o[r])}}_getMidpoint(e,t){const{_coordinateHelper:i}=this,s=i.arrayToVector(e),r=i.arrayToVector(t),o=i.toXYZ(s),n=i.toXYZ(r),[a,c,h]=W(o,n),p=i.hasM()?0:void 0;return new w({x:a,y:c,z:h,m:p,spatialReference:i.spatialReference})}_getVertexFromEditGeometry(e){const[t,i]=F(e);return C(this._editGeometryOperations),this._editGeometryOperations.data.components[t].vertices[i]}_onHandleMove(e,t,i,s,r){H(this._snappingTask);const o=this._snappingContext;if(!o)return;const n=e.geometry,a=s.type==="graphic-move-stop";if(this.snappingManager!=null&&this.selectedVertices.length<2&&!a){const c=this.snappingManager;this._stagedVertex=c.update({point:n,context:o}),this._syncGeometryAfterVertexMove(e,new w(this._stagedVertex),t,i,a),r(),this._snappingTask=ee(async h=>{const p=await c.snap({point:n,context:o,signal:h});p.valid&&(this._stagedVertex=p.apply(),this._syncGeometryAfterVertexMove(e,new w(this._stagedVertex),t,i,a),r())})}else{const c=this._stagedVertex!=null?new w(this._stagedVertex):n;this._syncGeometryAfterVertexMove(e,c,t,i,a),r()}}_syncGeometryAfterVertexMove(e,t,i,s,r=!1){const o=this._editGeometryOperations?.data.geometry;if(o)if(o.type==="point")e.geometry=t;else if(o.type==="mesh")e.geometry=o.centerAt(t);else{const{_coordinateHelper:n}=this,[a,c]=F(e);let h=b(o);const p=h[a].length-1,m=n.pointToArray(t);h[a][c]=m,o.type==="polygon"&&(c===0?h[a][p]=m:c===p&&(h[a][0]=m)),this._isVertex(e)&&(h=this._moveRelatedCoordinates(h,e,m),h=this._moveSelectedHandleCoordinates(h,e,i,s,o.type==="polygon"),this._updateMidpointGraphicLocations(h)),this._updateGraphicGeometry(o.clone());const _=n.pointToVector(t),g=this._getVertexFromEditGeometry(e),u=n.getZ(_),V=_[0]-g.pos[0],M=_[1]-g.pos[1],B=u!=null?u-g.pos[2]:0;this._editGeometryOperations?.moveVertices([g],V,M,B),r&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(e),t):e.geometry=t)}}_moveRelatedCoordinates(e,t,i){const{relatedGraphicIndices:s}=t.attributes;for(const r of s){const o=this.vertexGraphics.at(r),{pathIndex:n,pointIndex:a}=o.attributes;e[n][a]=i,o.geometry=t.geometry}return e}_moveSelectedHandleCoordinates(e,t,i,s,r){for(const o of this.selectedVertices)if(o!==t){const{pathIndex:n,pointIndex:a,relatedGraphicIndices:c}=o.attributes,h=ne(o.geometry,i,s,this.view),p=b(h),m=e[n].length-1;e[n][a]=p,o.geometry=h,r&&(a===0?e[n][m]=p:a===m&&(e[n][0]=p));for(const _ of c){const g=this.vertexGraphics.at(_),{pathIndex:u,pointIndex:V}=g.attributes;e[u][V]=p,g.geometry=h}}return e}_onGraphicPointerOverCallback(e){const t=e.graphic;this._hoverGraphic=t;const i=this._isVertex(t);i&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateTooltip(i?t:null),this._updateHoverCursor(t)}_onGraphicPointerOutCallback(e){const t=e.graphic;this._hoverGraphic=null,this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(e){const{_graphicAttributes:t,graphic:i}=this,s=i.geometry;if(s==null||s.type!=="polygon"&&s.type!=="polyline")return[];const r=s.clone(),o=[],{pathIndex:n,pointIndexStart:a,pointIndexEnd:c}=e.attributes,h=b(e.geometry),p=c===0?a+1:c,m=b(r);return m[n].splice(p,0,h),e.attributes={...t,pathIndex:n,pointIndex:p,relatedGraphicIndices:[]},o.push({coordinates:m[n][p],componentIndex:n,vertexIndex:p}),this._updateGraphicGeometry(r),o}_addToSelection(e){const t=Z(e);for(const i of t)i.symbol=this.symbols.vertices.selected,this.selectedVertices.add(i),this._updateTooltip(i);this._emitSelectEvent(t)}_removeFromSelection(e,t){const{vertices:i}=this.symbols,s=t?i.hover:i.default;this.selectedVertices.remove(e),e.symbol=s,this._emitDeselectEvent([e]),this._updateTooltip()}_clearSelection(){const e=this.selectedVertices.toArray();if(e.length>0){for(const t of e)t.set("symbol",this.symbols.vertices.default);this.selectedVertices.removeAll(),this._emitDeselectEvent(e),this._updateTooltip()}}_keyDownHandler(e){this._activeOperationInfo==null&&xe(e,this.tooltip)||ve.delete.includes(e.key)&&!e.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(e){const t=this.graphic.geometry;if(t==null||t.type!=="polygon"&&t.type!=="polyline"||t.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;const i=this.graphic.clone(),s=t.clone();let r=b(s);const o=[],n=Z(e);for(const a of n){const{x:c,y:h}=a.geometry;for(let p=0;p<r.length;p++){const m=r[p];for(let _=0;_<m.length;_++){const[g,u]=m[_];c===g&&h===u&&(o.push({coordinates:r[p][_],componentIndex:p,vertexIndex:_}),r[p].splice(Number(_),1))}}}if(s.type==="polygon")r=r.filter(a=>{if(a.length<2)return!1;const[c,h]=a[0],[p,m]=a[a.length-1];return(a.length!==2||c!==p||h!==m)&&(c===p&&h===m||a.push(a[0]),!0)}),s.rings=r;else{for(const a of r)a.length===1&&r.splice(r.indexOf(a),1);s.paths=r}this._updateGraphicGeometry(s),this.refresh(),this._emitVertexRemoveEvent(n,i,o)}_isVertex(e){return this.vertexGraphics.includes(e)}_isSelected(e){return this._isVertex(e)&&this.selectedVertices.includes(e)}_isMidpoint(e){return this.midpointGraphics.includes(e)}_updateHoverCursor(e){this.view.cursor=this._isMidpoint(e)?"copy":"move"}_updateTooltip(e,t){let i=null;const{graphic:s,view:r,tooltipInfos:o}=this,n=s?.geometry;n?.type==="point"?i=o.movePoint:this._selectedVertex?i=o.selectedVertex:e===this.graphic?(i=o.translateGraphic,Oe(i,r,t)):e&&this.selectedVertices.length>1&&(i=o.translateVertices,Ce(i,r,n,t)),this.activeTooltipInfo=i}_updateGraphicGeometry(e){this._updateHandlesOnExternalGeometryChange?.pause(),this.graphic.geometry=e,this._updateHandlesOnExternalGeometryChange?.resume()}_emitMoveStartEvent(e,t){const i=new Le(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart?.(i)}_emitMoveEvent(e,t){const i=new ze(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove?.(i)}_emitMoveStopEvent(e,t){if(e==null||t==null){const s=this._activeOperationInfo;if(!s)return;e=s.totalDx,t=s.totalDy}const i=new Pe(this.graphic,e,t);this.emit("move-stop",i),this.callbacks.onMoveStop?.(i)}_emitReshapeStartEvent(e){const t=new He(this.graphic,e,this.selectedVertices.toArray());this.emit("reshape-start",t),this.callbacks.onReshapeStart?.(t)}_emitReshapeEvent(e){const t=new Re(this.graphic,e,this.selectedVertices.toArray());this.emit("reshape",t),this.callbacks.onReshape?.(t)}_emitReshapeStopEvent(e){const t=new Ae(this.graphic,e,this.selectedVertices.toArray());this.emit("reshape-stop",t),this.callbacks.onReshapeStop?.(t)}_emitSelectEvent(e){const t=new Ue(e);this.emit("select",t),this.callbacks.onVertexSelect?.(t)}_emitDeselectEvent(e){const t=new De(e);this.emit("deselect",t),this.callbacks.onVertexDeselect?.(t)}_emitVertexAddEvent(e,t,i){const s=new Fe(e,this.graphic,t,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd?.(s)}_emitVertexRemoveEvent(e,t,i){const s=new Ze(e,this.graphic,t,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove?.(s)}_logGeometryTypeError(){te.getLogger(this).error(new ie("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};function D(e){const t=b(e.clone());if(e.type==="polygon")for(const i of t){const s=i[i.length-1];i[0][0]===s[0]&&i[0][1]===s[1]&&i.length>2&&i.pop()}return t}function F({attributes:e}){return[e?.pathIndex||0,e?.pointIndex||0]}function Z(e){return e instanceof k?[e]:[...e]}l([d()],v.prototype,"_activeOperationInfo",void 0),l([d()],v.prototype,"_coordinateHelper",null),l([d()],v.prototype,"_editGeometryOperations",void 0),l([d()],v.prototype,"tooltip",void 0),l([d()],v.prototype,"tooltipInfos",void 0),l([d()],v.prototype,"activeTooltipInfo",void 0),l([d()],v.prototype,"_selectedVertex",null),l([d()],v.prototype,"_tooltipsContext",null),l([d()],v.prototype,"callbacks",void 0),l([d()],v.prototype,"enableMidpoints",void 0),l([d()],v.prototype,"enableMovement",void 0),l([d()],v.prototype,"enableVertices",void 0),l([d()],v.prototype,"graphic",void 0),l([d({value:!0})],v.prototype,"highlightsEnabled",null),l([d()],v.prototype,"layer",void 0),l([d({readOnly:!0})],v.prototype,"midpointGraphics",void 0),l([d()],v.prototype,"midpointSymbol",void 0),l([d({readOnly:!0})],v.prototype,"selectedVertices",void 0),l([d()],v.prototype,"snappingManager",void 0),l([d({readOnly:!0})],v.prototype,"state",null),l([d()],v.prototype,"symbols",void 0),l([d({type:R})],v.prototype,"sketchOptions",void 0),l([d({readOnly:!0})],v.prototype,"type",void 0),l([d({readOnly:!0})],v.prototype,"vertexGraphics",void 0),l([d()],v.prototype,"view",void 0),v=l([T("esri.views.draw.support.Reshape")],v);const Ke=v;export{Ke as default};
