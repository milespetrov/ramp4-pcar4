const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-1MAkkmB6.js","./preload-helper-ExcqyqRp.js","./main-CT4A7-UF.js","./main-yQhLLpS1.css"])))=>i.map(i=>d[i]);
import{_ as u}from"./preload-helper-ExcqyqRp.js";import{F as y,fO as s,gb as m,gc as g,gd as f,ge as c,gf as L,dM as v,dN as b,e2 as I,dR as x,dV as A,dW as _,e0 as $,dU as w,dX as h,f9 as S,fa as E,fb as M}from"./main-CT4A7-UF.js";class R extends y{_parseConfig(e){const t=e?.headerControls?.slice()??["wizard","layerReorder","groupToggle","visibilityToggle"];if(s(this.$vApp.$pinia).headerControls=t,!e||!e.root.children)return;s(this.$vApp.$pinia).multilineItems=e.multilineItems?.enabled??!0;const l=[1,2,3,4,5,6];!e.multilineItems?.maxLines||!l.includes(e.multilineItems?.maxLines)?s(this.$vApp.$pinia).maxLines=3:s(this.$vApp.$pinia).maxLines=e.multilineItems.maxLines,this.handlePanelWidths(["legend"]),this.handlePanelTeleports(["legend"]);const n=this.getLayerFixtureConfigs();e.root.children.forEach(r=>{r.layerLegendConfigs=n,this.addItem(r)}),this.$iApi.geo.layer.allLayers().forEach(r=>{this.updateLegend(r)})}createItem(e,t){let l;e.layerId===void 0?l=new m(this.$iApi,e,t):(e.sublayerIndex!==void 0&&(e.layerId=`${e.layerId}-${e.sublayerIndex}`),l=new g(this.$iApi,e,t));const n=e.children;return n&&n.forEach(r=>{e.layerLegendConfigs!==void 0&&(r.layerLegendConfigs=e.layerLegendConfigs),l.children.push(this.createItem(r,l))}),l}addItem(e,t){const l=e instanceof f?e:this.createItem(e,t);return this._insertItem(l,t),l}async addLayerItem(e,t){const l=new g(this.$iApi,{layerId:e.id,sublayerIndex:e.isSublayer?e.layerIdx:void 0,name:e.name},t);return this._insertItem(l,t),this.updateLegend(e),l}get config(){return super.config}getLegend(){return s(this.$vApp.$pinia).children||[]}getLegendConfig(){return{root:{children:this.getLegend().map(e=>e.getConfig())}}}getItem(e){const t=this.getLegend();let l;return t.some(n=>(l=this.searchTreeFirst(n,r=>r.uid===e),l!==void 0)),l}getLayerItem(e){let t,l,n;return typeof e=="string"?(l=e,t=e):(l=e.id,t=e.uid),this.getLegend().some(i=>(n=this.searchTreeFirst(i,a=>a instanceof g&&(a.layerId===l||a.uid===t)),n!==void 0)),n}getAllExpanded(e){const t=e??!0;return this.searchLegend(l=>l.children.length>0&&l.expanded===t)}getAllVisible(e){const t=e??!0;return this.searchLegend(l=>l.visibility===t)}getLayerBoundItems(e){let t="";const l=e instanceof c?e:this.$iApi.geo.layer.getLayer(e);if(l)t=l.isSublayer?l.parentLayer?.id||"":l.id;else return[];return this.searchLegend(n=>n instanceof g&&(n.layerId===t||n.parentLayerId===t))}updateLegend(e){const t=(l,n)=>{const r=this.getLayerItem(l);n?(r&&l instanceof c&&(r.layer=l),r?.error()):r?.load(l instanceof c?l:void 0)};e.loadPromise().then(()=>{let l=this.getLayerItem(e);if(e.layerType===L.MAPIMAGE){const n=r=>{if(r.isLayerRoot&&!r.isLogicalLayer)l=this.getLayerItem(e),t(e,!1),l&&!l.treeGrown&&(r.children.map(i=>this._treeWalker(e,i)).map(i=>this.addItem(i,l)),l.treeGrown=!0),r.children.forEach(i=>n(i));else if(!r.isLayerRoot&&!r.isLogicalLayer){if(l=this.getLayerItem(`${e.id}-${r.layerIdx}`),l){const i=l.getConfig();delete i.layerId,delete i.sublayerIndex,delete i.children,i.name||delete i.name;const a={...this._treeWalker(e,r),...i},d=this.createItem(a);this._replaceItem(l,d)}r.children.forEach(i=>n(i))}else r.isLogicalLayer&&t(this._treeWalker(e,r).layer,!1)};n(e.getLayerTree())}else t(e,!1)}).catch(()=>{t(e,!0),e.supportsSublayers&&e.config.sublayers.forEach(l=>{t(`${e.id}-${l.index}`,!0)})})}expandItems(e,t){const l=this.getLegend(),n=t===void 0?l:t.children;t!==void 0&&this._toggleState(t,{expanded:e}),n.forEach(r=>{this._toggleState(r,{expanded:e})})}showItems(e,t){const l=this.getLegend(),n=t===void 0?l:t.children;t!==void 0&&this._toggleState(t,{visibility:e}),n.forEach(r=>{this._toggleState(r,{visibility:e})})}reloadLayerItem(e){const t=this.getLayerBoundItems(e);return t.forEach(l=>l.reload()),t.length>0}removeItem(e){const t=typeof e=="string"?this.getItem(e):e;return t!==void 0?this._deleteItem(t):!1}removeLayerItem(e){const t=this.getLayerItem(e);return t!==void 0?this._deleteItem(t):!1}searchTreeFirst(e,t){if(t(e))return e;{let l;return e.children.some(n=>(l=this.searchTreeFirst(n,t),l!==void 0)),l}}searchTreeAll(e,t){const l=[],n=[e];for(;n.length>0;){const r=n.shift();r&&t(r)&&l.push(r),r&&n.push(...r.children)}return l}searchLegend(e){return this.getLegend().map(t=>this.searchTreeAll(t,e)).flat()}_toggleState(e,t){const l=t.visibility,n=t.expanded;l!==void 0&&e.toggleVisibility(l),n!==void 0&&e.children.length>0&&e.toggleExpanded(n),e.children&&e.children.length>0&&e.children.forEach(r=>{this._toggleState(r,t)})}_insertItem(e,t){s(this.$vApp.$pinia).addItem({item:e,parent:t})}_deleteItem(e){const t=s(this.$vApp.$pinia),l=n=>{n.children.length>0&&n.children.forEach(r=>{l(r)}),n instanceof g&&n.handlers.forEach(r=>this.$iApi.event.off(r)),t.removeItem(n)};return l(e),!0}_replaceItem(e,t){s(this.$vApp.$pinia).replaceItem({oldItem:e,newItem:t})}_treeWalker(e,t,l){const r=(a=>{const d=[e];for(;d.length>0;){const o=d.shift();if(o&&o.uid===a)return o;o&&d.push(...o.sublayers)}})(t.uid),i={};return t.isLayerRoot&&!t.isLogicalLayer?(i.layer=r,i.name=r.name,i.children=t.children.map(a=>this._treeWalker(e,a,l))):!t.isLayerRoot&&!t.isLogicalLayer?(i.name=t.name,i.children=t.children.map(a=>this._treeWalker(e,a,l))):t.isLogicalLayer&&(i.layer=r,i.name=r.name,i.layerId=r.id,i.sublayerIndex=e.isSublayer?e.layerIdx:void 0),{...i,...l}}}const T=v({__name:"nav-button",setup(p){const{t:e}=b(),t=I("iApi"),l=()=>{t.panel.toggle("legend")};return(n,r)=>{const i=x("mapnav-button");return w(),A(i,{onClickFunction:l,tooltip:$(e)("legend.title")},{default:_(()=>r[0]||(r[0]=[h("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[h("path",{d:"M0 0h24v24H0z",fill:"none"}),h("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1)])),_:1},8,["tooltip"])}}}),C={en:{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.showLayer":"Show layer","legend.visibility.hideLayer":"Hide layer","legend.visibility.showSymbol":"Show symbol","legend.visibility.hideSymbol":"Hide symbol","legend.visibility.showGroup":"Show group","legend.visibility.hideGroup":"Hide group","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.layer.data":"Show more data","legend.layer.data.only":"Layer not on map","legend.layer.offscale":"Layer out of scale","legend.layer.zoomToVisible":"Zoom to visible scale","legend.layer.options":"More options","legend.layer.controls.metadata":"Metadata","legend.layer.controls.settings":"Settings","legend.layer.controls.datatable":"Datatable","legend.layer.controls.symbology":"Legend","legend.layer.controls.boundaryzoom":"Zoom to Layer Boundary","legend.layer.controls.cancel":"Cancel","legend.layer.controls.remove":"Remove","legend.layer.controls.reload":"Reload","legend.layer.controls.reloadDisabled":"Layer cannot be reloaded","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},fr:{"legend.title":"Légende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"Réorganiser les couches","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"Élargir les groupes","legend.header.groups.collapse":"Réduire les groupes","legend.header.visible":"Basculer la Visibilité","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"Développer un groupe","legend.group.collapse":"Réduire un groupe","legend.visibility.showLayer":"Afficher la couche","legend.visibility.hideLayer":"Masquer la couche","legend.visibility.showSymbol":"Afficher le symbole","legend.visibility.hideSymbol":"Masquer le symbole","legend.visibility.showGroup":"Afficher le groupe","legend.visibility.hideGroup":"Masquer le groupe","legend.symbology.expand":"Développer la légende","legend.symbology.hide":"Masquer la légende","legend.symbology.loading":"Chargement en cours...","legend.layer.data":"Afficher plus de données","legend.layer.data.only":"Couche non visualisable","legend.layer.offscale":"Couche hors de portée","legend.layer.zoomToVisible":"Zoom sur l'échelle visible","legend.layer.options":"Plus d'options","legend.layer.controls.metadata":"Métadonnées","legend.layer.controls.settings":"Paramètres","legend.layer.controls.datatable":"Tableau de données","legend.layer.controls.symbology":"Légende","legend.layer.controls.boundaryzoom":"Zoomer à la limite","legend.layer.controls.cancel":"Annuler","legend.layer.controls.remove":"Retirer","legend.layer.controls.reload":"Recharger","legend.layer.controls.reloadDisabled":"Le calque ne peut pas être rechargé","legend.alert.symbologyExpanded":"Légende de la couche développée","legend.alert.symbologyCollapsed":"Légende de la couche réduite","legend.alert.groupExpanded":"Groupe de légende développé","legend.alert.groupCollapsed":"Groupe de légende réduit","legend.alert.layerAdded":"{name} couche ajoutée à la légende","legend.alert.layerRemoved":"Couche {name} retiré de la légende"}};class k extends R{added(){this.$iApi.component("legend-nav-button",T),this.$iApi.panel.register({legend:{screens:{"legend-screen":()=>S(u(()=>import("./screen-1MAkkmB6.js"),__vite__mapDeps([0,1,2,3]),import.meta.url))},style:{width:"350px"},alertName:"legend.title",button:{tooltip:"legend.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'}}},{i18n:{messages:C}}),this._parseConfig(this.config!==void 0?JSON.parse(JSON.stringify(this.config)):void 0);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t!==void 0?JSON.parse(JSON.stringify(t)):void 0));this.removed=()=>{e(),this.$iApi.fixture.exists("appbar")&&E(this.$vApp.$pinia).removeButton("legend"),this.$iApi.fixture.exists("mapnav")&&M(this.$vApp.$pinia).removeItem("legend"),s().$reset(),this.$iApi.panel.remove("legend")}}}export{k as default};
