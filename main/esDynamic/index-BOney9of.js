import { kp as O, i$ as P, kq as d, hG as x, kr as I, j2 as k, ks as R, iL as G, kt as T, bY as z, c1 as F, c2 as H, c3 as N, c4 as f, c7 as v, iP as E, c5 as j, g1 as m, fY as W, c6 as q, c9 as D, ci as y, fV as h, fW as Y, ch as X, cf as S, j4 as L, cc as g, ix as U } from "./main-Bnvk3STL.js";
class Z extends O {
  overviewGraphicLayer;
  overviewmapStore;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e), this.overviewGraphicLayer = this.$iApi.geo.layer.createLayer({
      id: "RampOverviewGraphic",
      layerType: P.GRAPHIC,
      url: "",
      cosmetic: !0
    }), this.overviewmapStore = d(this.$vApp.$pinia);
  }
  /**
   * Will generate a ESRI map view and add it to the page
   * Must provide the basemap or basemap id to be used when creating the map view
   *
   * @param {string | Basemap} basemap the id of the basemap that should be used when creating the map view
   * @protected
   */
  createMapView(e) {
    if (!e)
      throw new Error("Attempted to create overview map view without a basemap");
    const a = typeof e == "string" ? this.findBasemap(e) : e;
    this.applyBasemap(a), this._rampExtentSet = this.$iApi.geo.map.getExtentSet().clone(), this._rampSR = this._rampExtentSet.sr.clone();
    const i = this.overviewmapStore.expandFactor;
    this.esriView = x(
      new I({
        map: this.esriMap,
        container: this._targetDiv,
        constraints: {
          rotationEnabled: !1
        },
        spatialReference: this._rampSR.toESRI(),
        extent: this.$iApi.geo.map.getExtent().toESRI().expand(i)
        // use the expanded main map extent
      })
    ), this.esriView.ui.components = [], this.handlers.push({
      type: "mouse-wheel",
      handler: this.esriView.on("mouse-wheel", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "double-click",
      handler: this.esriView.on("double-click", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "key-down",
      handler: this.esriView.on("key-down", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "key-up",
      handler: this.esriView.on("key-up", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "drag",
      handler: this.esriView.on("drag", (t) => {
        t.stopPropagation(), this.mapDrag(t);
      })
    }), this.esriView.container.addEventListener("touchmove", (t) => {
      t.preventDefault();
    }), this.esriView.watch("fatalError", () => {
      const t = new IntersectionObserver((s) => {
        s.forEach((n) => {
          n.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), t.disconnect());
        });
      });
      t.observe(this.esriView.container);
    }), this.esriView.when(() => {
      this._viewPromise.resolveMe(), this.created = !0;
    });
  }
  async addMapGraphicLayer() {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const e = new k(this.$iApi.geo.map.getExtent(), "overview-graphic"), a = this.overviewmapStore.borderColour ?? "#FF0000", i = this.overviewmapStore.borderWidth ?? 1, t = this.overviewmapStore.areaColour ?? "#000000", s = this.overviewmapStore.areaOpacity ?? 0.25, n = `${t}${Math.round(s * 255).toString(16)}`;
    e.style = new R({
      fill: { colour: n },
      outline: {
        colour: a,
        width: i
      }
    }), await this.overviewGraphicLayer.initiate(), await this.overviewGraphicLayer.addGraphic(e), this.esriMap?.add(this.overviewGraphicLayer.esriLayer);
  }
  async removeMapGraphicLayer() {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    if (!this.overviewGraphicLayer.esriLayer)
      throw new Error(
        "Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished."
      );
    this.overviewGraphicLayer.removeGraphic(), this.esriMap.remove(this.overviewGraphicLayer.esriLayer), await this.overviewGraphicLayer.terminate();
  }
  /**
   * Destroys the ESRI map view
   *
   * @protected
   */
  destroyMapView() {
    this.esriView?.container.removeEventListener("touchmove", (e) => {
      e.preventDefault();
    }), super.destroyMapView();
  }
  /**
   * Searches the local basemap list and main map basemaps for a basemap with the given id
   * Throws error if basemap could not be found
   *
   * @param {string} id basemap id
   * @returns {Basemap} the found basemap
   * @protected
   */
  findBasemap(e) {
    const a = this._basemapStore.find((i) => i.id === e);
    if (a)
      return a;
    {
      const t = G(this.$vApp.$pinia).config.map;
      if (t) {
        const s = t.basemaps.find((n) => n.id === e);
        if (s)
          return new T(s);
      }
    }
    throw new Error(`Invalid basemap id requested: ${e}`);
  }
  /**
   * Sets the overview map's basemap to the basemap with the given id.
   * Will refresh the map view if set basemap uses different tile schema.
   *
   * Should only be called by the overview map component
   *
   * @param {string} basemapId the basemap id
   * @returns {boolean} indicates if the schema has changed
   */
  setBasemap(e) {
    if (!this.esriView || !this.esriMap)
      return this.noMapErr(), !1;
    const a = this.findBasemap(e), t = (this.getCurrentBasemapId() ? this.findBasemap(this.getCurrentBasemapId()) : void 0)?.tileSchemaId !== a.tileSchemaId;
    return t ? (this.destroyMapView(), this.createMapView(a)) : this.applyBasemap(a), t;
  }
  /**
   * Initial esri extent of graphic during drag
   *
   * @private
   */
  startExtent = null;
  /**
   * Moves graphic and zooms main map if extent graphic is dragged
   *
   * @param {__esri.ViewDragEvent} esriDrag
   * @private
   */
  async mapDrag(e) {
    if (e.native.pointerType === "mouse") {
      if (e.action === "start")
        await this.cursorHitTest(e) && (this.startExtent = x(
          this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry
        ));
      else if (this.startExtent) {
        const a = this.esriView.toMap(e.origin), i = this.esriView.toMap({
          x: e.x,
          y: e.y
        }), t = this.startExtent.clone().offset(i.x - a.x, i.y - a.y, 0);
        this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry = t, e.action === "end" && (this.$iApi.geo.map.zoomMapTo(this.$iApi.geo.geom.geomEsriToRamp(t), void 0, !1), this.startExtent = null);
      }
    }
  }
  /**
   * Updates overviewmap extent and graphic based on main map extent
   *
   * @param {Extent} newExtent new main map extent
   * @returns {Promise<void>} A promise that resolves when the overviewmap has finished updating
   */
  updateOverview(e) {
    const a = this.overviewmapStore.expandFactor, i = this.zoomMapTo(e.expand(a), void 0, !1), t = this.overviewGraphicLayer.getLocalGraphic("overview-graphic");
    return this.overviewGraphicLayer.removeGraphic(t), t.geometry = e, this.overviewGraphicLayer.addGraphic(t), i;
  }
  /**
   * Checks if mouse event intersects with extent graphic
   *
   * @param {MouseEvent} e
   * @returns {Promise<boolean>}
   */
  async cursorHitTest(e) {
    return (await this.esriView.hitTest(e)).results.length > 0;
  }
}
class J extends z {
  /**
   * Parses the overview map config JSON snippet from the config file and save to the fixture store.
   *
   * @param {OverviewmapConfig} [OverviewmapConfig]
   * @memberof OverviewmapAPI
   */
  _parseConfig(e) {
    const a = d(this.$vApp.$pinia);
    a.basemaps = e?.basemaps || {}, a.mapConfig.basemaps = e ? Object.values(e.basemaps) : [], a.startMinimized = e?.startMinimized ?? !0, a.expandFactor = e?.expandFactor ?? 1.5, a.borderColour = e?.borderColour ?? "#FF0000", a.borderWidth = e?.borderWidth ?? 1, a.areaColour = e?.areaColour ?? "#000000", a.areaOpacity = e?.areaOpacity ?? 0.25;
  }
  get config() {
    return super.config;
  }
}
const K = { class: "relative h-full w-full overflow-hidden" }, Q = { class: "absolute h-30 w-30 top-0 right-0" }, ee = ["content", "aria-label"], te = /* @__PURE__ */ F({
  __name: "overviewmap",
  setup(u) {
    const e = d(), { t: a } = H(), i = N("iApi"), t = G(), s = f(), n = v(() => t.activeBasemapConfig), _ = v(() => e.mapConfig), b = v(() => e.basemaps), $ = v(() => e.startMinimized);
    let r = E(new Z(i));
    const p = f(!0), M = f(!1), l = E([]);
    j(() => {
      i.geo.map.viewPromise.then(async () => {
        w(), r.createMap(_.value, s.value.querySelector(".overviewmap")), await r.viewPromise, await r.addMapGraphicLayer(), p.value = $.value;
        let c = r.updateOverview(i.geo.map.getExtent());
        l.push(
          i.event.on(
            m.MAP_EXTENTCHANGE,
            W(100, (o) => {
              c.then(() => {
                r.updateOverview(o);
              });
            })
          )
        ), l.push(
          i.event.on(m.MAP_CREATED, () => {
            w();
          })
        ), l.push(
          i.event.on(m.MAP_REFRESH_END, () => {
            w();
          })
        ), l.push(
          i.event.on(m.MAP_BASEMAPCHANGE, async (o) => {
            !o.schemaChanged && r.created && n.value && b.value[n.value.tileSchemaId] === void 0 && (await r.removeMapGraphicLayer(), r.setBasemap(o.basemapId), await r.addMapGraphicLayer());
          })
        );
      });
    }), q(() => {
      l.forEach((c) => i.event.off(c)), r.destroyMap();
    });
    const A = async (c) => {
      M.value = !p.value && await r.cursorHitTest(c);
    }, B = () => ({
      height: `${p.value ? 48 : 200}px`,
      width: `${p.value ? 48 : 200}px`
    }), V = () => ({
      top: `${p.value ? -6 : -3}px`,
      right: `${p.value ? -6 : -3}px`,
      transform: `rotate(${p.value ? 225 : 45}deg)`
    }), w = () => {
      if (!n.value) {
        console.error("Overview Map could not obtain the basemap config used by the main map");
        return;
      }
      try {
        const c = n.value?.tileSchemaId;
        if (!c)
          throw new Error("Overview Map could not obtain the tile schema of the main map");
        const o = b.value[c];
        if (!o)
          throw new Error(
            "Overview Map could not find a suitable basemap that matches the tile schema of the main map"
          );
        r.created || e.updateInitialBasemap(o.id), r.created && r.viewPromise.then(() => r.setBasemap(o.id));
      } catch {
        r.created || e.updateInitialBasemap(n.value.id), r.viewPromise.then(() => r.setBasemap(n.value.id));
      }
    };
    return (c, o) => {
      const C = D("tippy");
      return g(), y("div", {
        class: "relative",
        ref_key: "el",
        ref: s
      }, [
        h("div", {
          style: L(B()),
          class: "pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"
        }, [
          h("div", K, [
            h("div", {
              class: Y(["overviewmap absolute top-0 right-0 h-192 w-192", { "cursor-move": M.value }]),
              onMousemove: A
            }, null, 34)
          ]),
          h("div", Q, [
            X((g(), y("button", {
              type: "button",
              tabindex: "0",
              class: "cursor-pointer absolute h-full w-full",
              onClick: o[0] || (o[0] = (re) => p.value = !p.value),
              content: S(a)(p.value ? "overviewmap.expand" : "overviewmap.minimize"),
              "aria-label": S(a)(p.value ? "overviewmap.expand" : "overviewmap.minimize")
            }, [
              (g(), y("svg", {
                class: "absolute fill-current text-gray-500 transition-all duration-300 ease-out",
                style: L(V()),
                xmlns: "http://www.w3.org/2000/svg",
                fit: "",
                height: "100%",
                width: "100%",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 24 24",
                focusable: "false"
              }, o[1] || (o[1] = [
                h("g", { id: "apple-keyboard-control" }, [
                  h("path", { d: "M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z " })
                ], -1)
              ]), 4))
            ], 8, ee)), [
              [C, { placement: "left", hideOnClick: !1 }]
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), ae = /* @__PURE__ */ U(te, [["__scopeId", "data-v-461fd934"]]), ie = { en: { "overviewmap.expand": "Expand Overview", "overviewmap.minimize": "Minimize Overview" }, fr: { "overviewmap.expand": "Développer l'aperçu", "overviewmap.minimize": "Réduire l'aperçu" } };
class oe extends J {
  added() {
    Object.entries(ie).forEach((s) => this.$iApi.$i18n.mergeLocaleMessage(...s)), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (s) => this._parseConfig(s)
    ), { destroy: a, el: i } = this.mount(ae, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(i.childNodes[0]), this.removed = () => {
      e(), a(), d(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  oe as default
};
//# sourceMappingURL=index-BOney9of.js.map