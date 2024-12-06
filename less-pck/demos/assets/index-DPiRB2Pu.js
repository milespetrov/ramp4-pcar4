const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./details-screen-DsLlEOoG.js","./main-3BNeFVQJ.js","./preload-helper-dJJaZANz.js","./main-CRG1_KF0.css","./toggle-switch-control-KEgnNqnu.js","./toggle-switch-control-RR_UmW76.css","./details-screen-DZODN-LS.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { bZ as FixtureInstance, k_ as useDetailsStore, k$ as ReactiveIdentifyFactory, ho as markRaw, j$ as useAppbarStore } from './main-3BNeFVQJ.js';
import { H as HilightMode } from './hilight-defs-BwAFwTg8.js';

class DetailsItemInstance {
  id;
  name;
  template;
  priority;
  fields;
  componentId;
  constructor(value) {
    const params = {
      ...typeof value === "string" ? { id: value, template: "", name: "", priority: 50 } : value
    };
    ({
      template: this.template,
      id: this.id,
      name: this.name,
      fields: this.fields,
      priority: this.priority
    } = params);
  }
}

const ORIGIN_DETAILS = "details";
class DetailsAPI extends FixtureInstance {
  detailsStore = useDetailsStore(this.$vApp.$pinia);
  get config() {
    return super.config;
  }
  /**
   * Updates the identify result in the store, and then opens the details panel.
   *
   * @param {IdentifyResult[]} payload
   * @memberof DetailsAPI
   */
  openDetails(payload) {
    payload.forEach((p) => {
      this._loadDetailsConfig(this.$iApi.geo.layer.getLayer(p.uid));
    });
    this.detailsStore.payload = payload;
    const panel = this.$iApi.panel.get("details");
    this.detailsStore.origin = "identify";
    panel.button.tooltip = "details.layers.title.identifyOrigin";
    const detailsPanel = this.$iApi.panel.get("details");
    if (!detailsPanel.isOpen) {
      this.$iApi.panel.open({
        id: "details"
      });
    }
  }
  /**
   * Provided with the data for a single feature, shows or hides details panel.
   * If panel is closed or incoming data is different than current content, panel is shown.
   * If panel open and incoming data is what is currently shown, panel closes.
   * The `open` parameter can override the behavior.
   * featureData payload (can be empty if forcing closed)
   * - uid     : uid string of the layer hosting the feature
   * - format  : structure of the data. IdentifyResultFormat value.
   * - data    : source information for the feature. Analogous to the data property of an IdentifyItem
   * - layerId : optional layerId string of the layer hosting the feature. Will be looked up if not provided
   *
   * @param {{data: any, uid: string, format: IdentifyResultFormat}} featureData
   * @param {boolean | undefined} open can force the panel to open (true) or close (false) regardless of current panel state
   * @memberof DetailsAPI
   */
  toggleFeature(featureData, open) {
    const panel = this.$iApi.panel.get("details");
    if (open === false) {
      panel.close();
      this.detailsStore.currentFeatureId = void 0;
      return;
    }
    const layer = this.$iApi.geo.layer.getLayer(featureData.uid);
    const currFeatureId = `${featureData.uid}-${// see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
    layer?.supportsFeatures ? featureData.data[layer?.oidField ?? ""] : JSON.stringify(featureData.data)}`;
    if (panel.isOpen && currFeatureId === this.detailsStore.currentFeatureId && !(open === true)) {
      panel.close();
      this.detailsStore.currentFeatureId = void 0;
      return;
    }
    this.detailsStore.origin = "toggleEvent";
    panel.button.tooltip = "details.layers.title.gridOrigin";
    this.detailsStore.currentFeatureId = currFeatureId;
    this._loadDetailsConfig(layer);
    const fakeResult = {
      items: [ReactiveIdentifyFactory.makeRawItem(featureData.format, featureData.data)],
      uid: featureData.uid,
      layerId: featureData.layerId || layer?.id || "error-not-found",
      loading: Promise.resolve(),
      loaded: true,
      errored: false,
      requestTime: Date.now()
    };
    this.detailsStore.payload = [fakeResult];
    if (!panel.isOpen) {
      panel.open();
    }
  }
  /**
   * Read the details section of the layers' fixture config
   *
   * @param {DetailsConfig} [config]
   * @memberof DetailsAPI
   */
  _parseConfig(config) {
    if (config && config.templates) {
      this.detailsStore.defaultTemplates = config.templates;
    }
    this.handlePanelWidths(["details"]);
    this.handlePanelTeleports(["details"]);
    const layerDetailsConfigs = this.getLayerFixtureConfigs();
    const detailsConfigItems = [];
    Object.keys(layerDetailsConfigs).forEach((layerId) => {
      detailsConfigItems.push({
        id: layerId,
        name: layerDetailsConfigs[layerId].name,
        template: layerDetailsConfigs[layerId].template,
        fields: layerDetailsConfigs[layerId].fields,
        priority: layerDetailsConfigs[layerId].priority ?? 50
      });
    });
    const detailsItems = detailsConfigItems.map((item) => new DetailsItemInstance(item));
    this.detailsStore.properties = detailsItems.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, {});
    this._validateItems();
  }
  /**
   * Will see if we have this layer's detail fixture config cached, and if not,
   * cache it.
   *
   * @param layer the layer to check
   * @private
   */
  _loadDetailsConfig(layer) {
    if (layer) {
      const detailsItem = this.detailsStore.properties[layer.id];
      if (detailsItem === void 0) {
        const layerDetailsConfigs = this.getLayerFixtureConfigs();
        const thisLayerConfig = layerDetailsConfigs[layer.id];
        if (thisLayerConfig) {
          this.detailsStore.addConfigProperty({
            id: layer.id,
            name: thisLayerConfig.name,
            template: thisLayerConfig.template,
            fields: thisLayerConfig.fields,
            priority: thisLayerConfig.priority ?? 50
          });
        }
      }
    }
  }
  /**
   * Check to see if the stored components are registered properly.
   *
   * @memberof DetailsAPI
   */
  _validateItems() {
    Object.values(this.detailsStore.properties).forEach((item) => {
      if (item.template in this.$vApp.$options.components) {
        this.detailsStore.properties[item.id].componentId = item.template;
      }
    });
  }
  /**
   * Highlight identified items
   * @param items items to add
   * @param layerUid uid of layer the items belong to
   */
  async hilightDetailsItems(items, layerUid) {
    const hItems = items instanceof Array ? items : [items];
    const hilightFix = this.$iApi.fixture.get("hilight");
    if (hilightFix) {
      const gsByKey = await hilightFix.getGraphicsByKey(ORIGIN_DETAILS);
      await hilightFix.removeHilight(gsByKey);
      const thisHighlight = Date.now();
      this.detailsStore.lastHilight = thisHighlight;
      const graphics = await this.getHilightGraphics(hItems, layerUid);
      if (this.detailsStore.lastHilight === thisHighlight) {
        await hilightFix.addHilight(graphics);
        if (this.detailsStore.lastHilight !== thisHighlight) {
          hilightFix.removeHilight(graphics);
        }
      }
    }
  }
  /**
   * Remove all details panel map hilights.
   */
  async removeDetailsHilight() {
    const hilightFix = this.$iApi.fixture.get("hilight");
    if (hilightFix) {
      this.detailsStore.lastHilight = Date.now();
      const gsByKey = await hilightFix.getGraphicsByKey(ORIGIN_DETAILS);
      await hilightFix.removeHilight(gsByKey);
    }
  }
  /**
   * Reload map elements of the hilighter for a set of identify items.
   *
   * @param {IdentifyItem | Array<IdentifyItem>} items items to reload
   * @param {string} layerUid uid of layer the items belong to
   */
  async reloadDetailsHilight(items, layerUid) {
    const hItems = items instanceof Array ? items : [items];
    const hilightFix = this.$iApi.fixture.get("hilight");
    if (hilightFix) {
      const graphics = await this.getHilightGraphics(hItems, layerUid);
      hilightFix.reloadHilight(graphics);
    }
  }
  /**
   * Return the graphics of the given IdentifyItems once the items have loaded.
   * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
   * @param layerUid uid of layer the items belong to
   * @returns {Promise<Array<Graphic>>} resolves with array of graphics
   */
  async getHilightGraphics(items, layerUid) {
    const layer = this.$iApi.geo.layer.getLayer(layerUid);
    const hilightFix = this.$iApi.fixture.get("hilight");
    const gs = [];
    if (layer) {
      await Promise.all(
        items.map(async (item) => {
          await item.loading;
          const oid = item.data[layer.oidField];
          const g = await layer.getGraphic(oid, {
            getGeom: true,
            getAttribs: true,
            getStyle: true
          });
          g.id = hilightFix.constructGraphicKey(ORIGIN_DETAILS, layerUid, oid);
          gs.push(g);
        })
      );
    }
    return gs;
  }
  /**
   * Updates hilighted graphics when the hilight toggler is toggled.
   *
   * @param {boolean} hilightOn Whether the toggler has been turned on/off
   * @param {IdentifyItem | Array<IdentifyItem>} items The identify items to highlight. Only required if turning on
   * @param {string} layerUid the layer UID that owns the items. Only required if turning on
   */
  onHilightToggle(hilightOn, items, layerUid) {
    this.detailsStore.hilightToggle = hilightOn;
    if (hilightOn && items && layerUid) {
      this.hilightDetailsItems(items, layerUid);
    } else if (!hilightOn) {
      this.removeDetailsHilight();
    }
  }
  /**
   * Return whether or not a HilightMode has been defined (other than NONE)
   */
  hasHilighter() {
    const hilightFix = this.$iApi.fixture.get("hilight");
    return hilightFix && hilightFix.hilightMode.mode !== HilightMode.NONE;
  }
}

const messages = {"en":{"details.layers.title.identifyOrigin":"Identify Details","details.layers.title.gridOrigin":"Details","details.layers.found":"Found {numResults} results in {numLayers} layers","details.layers.loading":"The layer is loading...","details.layers.error":"Error","details.layers.results.empty":"No results found for any layer.","details.layers.results.empty.currentLayer":"No results found for the selected layer.","details.layers.results.empty.noLayers":"No layers for identification.","details.layers.results.list.tooltip":"Use the arrow keys to navigate the items","details.result.default.name":"Identify Item {0}","details.loading":"Loading...","details.items.title":"Details","details.items.range":"{0} - {1} of {2}","details.items.next":"Next page","details.items.previous":"Previous page","details.items.page":"Items per page","details.item.see.list":"See List","details.item.zoom":"Zoom to feature","details.item.zoom.zooming":"Zooming...","details.item.zoom.error":"Zoom failed","details.item.zoom.zoomed":"Zoomed","details.item.previous.item":"Previous item","details.item.next.item":"Next item","details.item.count":"{0} of {1}","details.item.loading":"Loading results...","details.item.no.data":"No data to show because the layer has been removed","details.item.alert.zoom":"Zoomed into feature","details.item.alert.show.item":"Showing result {itemName}","details.item.alert.show.list":"Showing all results for {layerName}","details.item.alert.defaultAltText":"Image associated with {alias} field","details.togglehilight.title":"Toggle Highlight","details.item.open":"Expand","details.item.collapse":"Collapse"},"fr":{"details.layers.title.identifyOrigin":"Identifier les détails","details.layers.title.gridOrigin":"Détails","details.layers.found":"{numResults} résultats trouvés dans {numLayers} couches","details.layers.loading":"La couche est en cours de chargement...","details.layers.error":"Erreur","details.layers.results.empty":"Aucun résultat trouvé pour aucune couche.","details.layers.results.empty.currentLayer":"Aucun résultat trouvé pour la couche sélectionnée.","details.layers.results.empty.noLayers":"Pas de couches pour l'identification.","details.layers.results.list.tooltip":"Utilisez les touches fléchées pour naviguer entre les éléments","details.result.default.name":"Désigner l'élément {0}","details.loading":"Chargement en cours...","details.items.title":"Détails","details.items.range":"{0} - {1} de {2}","details.items.next":"Page suivante","details.items.previous":"Page précédente","details.items.page":"éléments par page","details.item.see.list":"Voir la liste","details.item.zoom":"Zoom à l'élément","details.item.zoom.zooming":"Zoom en cours...","details.item.zoom.error":"Échec du zoom","details.item.zoom.zoomed":"Zoom terminé","details.item.previous.item":"Élément précédent","details.item.next.item":"Élément suivant","details.item.count":"{0} de {1}","details.item.loading":"Chargement des résultats...","details.item.no.data":"Aucune donnée à afficher","details.item.alert.zoom":"Zoom sur la caractéristique","details.item.alert.show.item":"Affichage du résultat {itemName}","details.item.alert.show.list":"Affichage de tous les résultats pour {layerName}","details.item.alert.defaultAltText":"Image associée au champ {alias}","details.togglehilight.title":"Basculer vers l'élément principal","details.item.open":"Développer","details.item.collapse":"Réduire"}};

class DetailsFixture extends DetailsAPI {
  async added() {
    this.$iApi.panel.register(
      {
        details: {
          screens: {
            "details-screen": () => markRaw(__vitePreload(() => import('./details-screen-DsLlEOoG.js'),true?__vite__mapDeps([0,1,2,3,4,5,6]):void 0,import.meta.url))
          },
          style: {
            width: "425px"
          },
          button: {
            tooltip: "details.layers.title.identifyOrigin",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Aarticle%3A
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'
          },
          alertName: "details.items.title"
        }
      },
      { i18n: { messages } }
    );
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    this.removed = () => {
      unwatch();
      this.$iApi.panel.remove("details");
      if (this.$iApi.fixture.exists("appbar")) {
        const appbarStore = useAppbarStore(this.$vApp.$pinia);
        appbarStore.removeButton("details");
      }
      const detailsStore = useDetailsStore(this.$vApp.$pinia);
      detailsStore.$reset();
    };
  }
}

export { DetailsFixture as default };
