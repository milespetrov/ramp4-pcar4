import "tiny-emitter";
import { F as $e, e as Z, R as Ie, _ as ae, f as oe, L as Te, g as Se, G as W, b as He } from "./main-DD4M6ybf.js";
import "@arcgis/core/Basemap";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Geometry";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/layers/support/LOD";
import "@arcgis/core/layers/support/WMSSublayer";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/ClassBreaksRenderer";
import "@arcgis/core/renderers/Renderer";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/UniqueValueRenderer";
import "@arcgis/core/renderers/support/ClassBreakInfo";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/renderers/support/UniqueValueInfo";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/Symbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import { defineComponent as P, ref as $, onMounted as re, openBlock as a, createElementBlock as n, createElementVNode as x, normalizeClass as R, Fragment as K, renderList as Y, normalizeStyle as pe, createCommentVNode as M, toDisplayString as D, computed as T, resolveDirective as B, withDirectives as j, withModifiers as ve, createVNode as se, onBeforeMount as Q, watch as q, onBeforeUnmount as X, unref as L, createBlock as V, inject as ee, resolveDynamicComponent as Ae, createTextVNode as le, resolveComponent as ze, withCtx as ce, markRaw as Ee } from "vue";
import "pinia";
import { useI18n as U } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import fe from "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "shpjs/dist/shp.min.js";
import "redaxios";
import "jszip";
import "flatgeobuf";
import "await-to-js";
import "fast-xml-parser";
import "svg.js";
import { H as Ce } from "./hilight-defs-DzKgjtLG.js";
import { T as De } from "./toggle-switch-control-CxA7KcB9.js";
class Me {
  id;
  name;
  template;
  priority;
  fields;
  componentId;
  constructor(e) {
    const t = {
      ...typeof e == "string" ? { id: e, template: "", name: "", priority: 50 } : e
    };
    ({
      template: this.template,
      id: this.id,
      name: this.name,
      fields: this.fields,
      priority: this.priority
    } = t);
  }
}
const ie = "details";
class Fe extends $e {
  detailsStore = Z(this.$vApp.$pinia);
  get config() {
    return super.config;
  }
  /**
   * Updates the identify result in the store, and then opens the details panel.
   *
   * @param {IdentifyResult[]} payload
   * @memberof DetailsAPI
   */
  openDetails(e) {
    e.forEach((s) => {
      this._loadDetailsConfig(this.$iApi.geo.layer.getLayer(s.uid));
    }), this.detailsStore.payload = e;
    const t = this.$iApi.panel.get("details");
    this.detailsStore.origin = "identify", t.button.tooltip = "details.layers.title.identifyOrigin", this.$iApi.panel.get("details").isOpen || this.$iApi.panel.open({
      id: "details"
    });
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
  toggleFeature(e, t) {
    const i = this.$iApi.panel.get("details");
    if (t === !1) {
      i.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    const s = this.$iApi.geo.layer.getLayer(e.uid), u = `${e.uid}-${// see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
    s?.supportsFeatures ? e.data[s?.oidField ?? ""] : JSON.stringify(e.data)}`;
    if (i.isOpen && u === this.detailsStore.currentFeatureId && t !== !0) {
      i.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    this.detailsStore.origin = "toggleEvent", i.button.tooltip = "details.layers.title.gridOrigin", this.detailsStore.currentFeatureId = u, this._loadDetailsConfig(s);
    const d = {
      items: [Ie.makeRawItem(e.format, e.data)],
      uid: e.uid,
      layerId: e.layerId || s?.id || "error-not-found",
      loading: Promise.resolve(),
      loaded: !0,
      errored: !1,
      requestTime: Date.now()
    };
    this.detailsStore.payload = [d], i.isOpen || i.open();
  }
  /**
   * Read the details section of the layers' fixture config
   *
   * @param {DetailsConfig} [config]
   * @memberof DetailsAPI
   */
  _parseConfig(e) {
    e && e.templates && (this.detailsStore.defaultTemplates = e.templates), this.handlePanelWidths(["details"]), this.handlePanelTeleports(["details"]);
    const t = this.getLayerFixtureConfigs(), i = [];
    Object.keys(t).forEach((u) => {
      i.push({
        id: u,
        name: t[u].name,
        template: t[u].template,
        fields: t[u].fields,
        priority: t[u].priority ?? 50
      });
    });
    const s = i.map((u) => new Me(u));
    this.detailsStore.properties = s.reduce((u, d) => (u[d.id] = d, u), {}), this._validateItems();
  }
  /**
   * Will see if we have this layer's detail fixture config cached, and if not,
   * cache it.
   *
   * @param layer the layer to check
   * @private
   */
  _loadDetailsConfig(e) {
    if (e && this.detailsStore.properties[e.id] === void 0) {
      const s = this.getLayerFixtureConfigs()[e.id];
      s && this.detailsStore.addConfigProperty({
        id: e.id,
        name: s.name,
        template: s.template,
        fields: s.fields,
        priority: s.priority ?? 50
      });
    }
  }
  /**
   * Check to see if the stored components are registered properly.
   *
   * @memberof DetailsAPI
   */
  _validateItems() {
    Object.values(this.detailsStore.properties).forEach((e) => {
      e.template in this.$vApp.$options.components && (this.detailsStore.properties[e.id].componentId = e.template);
    });
  }
  /**
   * Highlight identified items
   * @param items items to add
   * @param layerUid uid of layer the items belong to
   */
  async hilightDetailsItems(e, t) {
    const i = e instanceof Array ? e : [e], s = this.$iApi.fixture.get("hilight");
    if (s) {
      const u = await s.getGraphicsByKey(ie);
      await s.removeHilight(u);
      const d = Date.now();
      this.detailsStore.lastHilight = d;
      const y = await this.getHilightGraphics(i, t);
      this.detailsStore.lastHilight === d && (await s.addHilight(y), this.detailsStore.lastHilight !== d && s.removeHilight(y));
    }
  }
  /**
   * Remove all details panel map hilights.
   */
  async removeDetailsHilight() {
    const e = this.$iApi.fixture.get("hilight");
    if (e) {
      this.detailsStore.lastHilight = Date.now();
      const t = await e.getGraphicsByKey(ie);
      await e.removeHilight(t);
    }
  }
  /**
   * Reload map elements of the hilighter for a set of identify items.
   *
   * @param {IdentifyItem | Array<IdentifyItem>} items items to reload
   * @param {string} layerUid uid of layer the items belong to
   */
  async reloadDetailsHilight(e, t) {
    const i = e instanceof Array ? e : [e], s = this.$iApi.fixture.get("hilight");
    if (s) {
      const u = await this.getHilightGraphics(i, t);
      s.reloadHilight(u);
    }
  }
  /**
   * Return the graphics of the given IdentifyItems once the items have loaded.
   * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
   * @param layerUid uid of layer the items belong to
   * @returns {Promise<Array<Graphic>>} resolves with array of graphics
   */
  async getHilightGraphics(e, t) {
    const i = this.$iApi.geo.layer.getLayer(t), s = this.$iApi.fixture.get("hilight"), u = [];
    return i && await Promise.all(
      e.map(async (d) => {
        await d.loading;
        const y = d.data[i.oidField], p = await i.getGraphic(y, {
          getGeom: !0,
          getAttribs: !0,
          getStyle: !0
        });
        p.id = s.constructGraphicKey(ie, t, y), u.push(p);
      })
    ), u;
  }
  /**
   * Updates hilighted graphics when the hilight toggler is toggled.
   *
   * @param {boolean} hilightOn Whether the toggler has been turned on/off
   * @param {IdentifyItem | Array<IdentifyItem>} items The identify items to highlight. Only required if turning on
   * @param {string} layerUid the layer UID that owns the items. Only required if turning on
   */
  onHilightToggle(e, t, i) {
    this.detailsStore.hilightToggle = e, e && t && i ? this.hilightDetailsItems(t, i) : e || this.removeDetailsHilight();
  }
  /**
   * Return whether or not a HilightMode has been defined (other than NONE)
   */
  hasHilighter() {
    const e = this.$iApi.fixture.get("hilight");
    return e && e.hilightMode.mode !== Ce.NONE;
  }
}
const Ne = {
  key: 0,
  class: "relative"
}, Oe = {
  key: 0,
  class: "relative"
}, je = ["innerHTML"], Be = ["src"], Pe = {
  key: 1,
  class: "w-32 h-32"
}, Ge = { class: "symbologyIcon" }, qe = ["innerHTML"], Re = ["src"], Ve = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ze = {
  key: 0,
  class: "px-5"
}, Ue = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Ke = /* @__PURE__ */ P({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(f) {
    const e = f, t = $([]);
    return re(() => {
      t.value = e.layer.legend;
    }), (i, s) => f.result.loaded ? (a(), n("div", Ne, [
      x("div", {
        class: R(f.result.items.length === 0 ? "opacity-50" : "")
      }, [
        t.value.length > 1 ? (a(), n("div", Oe, [
          (a(!0), n(K, null, Y(t.value.slice(0, 3).reverse(), (u, d) => (a(), n("div", {
            class: R(["absolute", [d == 0 ? "symbol-0" : d == 1 ? "left-3" : "left-6"]]),
            style: pe({ "z-index": 3 - d }),
            key: d
          }, [
            t.value[d].svgcode ? (a(), n("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: t.value[d].svgcode
            }, null, 8, je)) : t.value[d].imgUrl ? (a(), n("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: t.value[d].imgUrl
            }, null, 8, Be)) : M("", !0)
          ], 6))), 128))
        ])) : t.value.length > 0 ? (a(), n("div", Pe, [
          x("div", Ge, [
            t.value[0].svgcode ? (a(), n("span", {
              key: 0,
              innerHTML: t.value[0].svgcode
            }, null, 8, qe)) : t.value[0].imgUrl ? (a(), n("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: t.value[0].imgUrl
            }, null, 8, Re)) : M("", !0)
          ])
        ])) : M("", !0)
      ], 2),
      x("div", Ve, [
        f.result.loaded ? (a(), n("div", Ze, D(f.result.items.length), 1)) : M("", !0)
      ])
    ])) : (a(), n("div", Ue, s[0] || (s[0] = [
      x("div", { class: "symbologyIcon h-32 w-32" }, [
        x("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Je = /* @__PURE__ */ ae(Ke, [["__scopeId", "data-v-496d788d"]]), We = ["content"], Ye = { class: "symbologyLayerName truncate" }, Qe = /* @__PURE__ */ P({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(f) {
    const e = Z(), t = T(() => e.properties), i = f, s = () => {
      const u = i.layer;
      return u && t.value[u.id] && t.value[u.id].name ? t.value[u.id].name : u?.name ?? "";
    };
    return (u, d) => {
      const y = B("tippy");
      return j((a(), n("button", {
        class: R(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", f.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: d[0] || (d[0] = ve(() => {
        }, ["stop"])),
        content: s()
      }, [
        se(Je, {
          class: "symbStack w-32 h-32 mr-10",
          layer: f.layer,
          result: f.result
        }, null, 8, ["layer", "result"]),
        x("div", Ye, D(s()), 1)
      ], 10, We)), [
        [y, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Xe = ["content"], et = /* @__PURE__ */ P({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(f, { emit: e }) {
    const { t } = U(), i = oe(), s = $(), u = () => {
      s.value._tippy.hide();
    }, d = (b) => {
      b.key === "Tab" && s.value?.matches(":focus") && s.value._tippy.show();
    }, y = e, p = f, v = $(""), h = $([]), c = $(!1), l = $(!1), m = (b) => i.getLayerByUid(b), S = (b) => {
      v.value = b, y("selection-changed", b), c.value = !1;
    }, F = () => {
      l.value || setTimeout(() => {
        c.value = l.value;
      }, 500), l.value = !0;
    }, E = () => {
      c.value = l.value = !1;
    }, g = () => {
      l.value || (c.value = !0), l.value = !0;
    }, H = () => {
      c.value = l.value = !1;
    };
    return Q(() => {
      h.value.push(
        q(p, () => {
          v.value = p.selected;
        })
      );
    }), re(() => {
      s.value?.addEventListener("blur", u), s.value?.addEventListener("keyup", d);
    }), X(() => {
      h.value.forEach((b) => b()), s.value?.removeEventListener("blur", u), s.value?.removeEventListener("keyup", d);
    }), (b, N) => {
      const O = B("focus-item"), z = B("focus-list"), A = B("tippy");
      return j((a(), n("div", {
        class: R(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": c.value }]),
        onMouseover: F,
        onMouseleave: E,
        onFocus: g,
        onBlur: ve(H, ["self"]),
        content: L(t)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: s
      }, [
        (a(!0), n(K, null, Y(p.results, (o, _) => (a(), n("div", {
          class: "flex justify-start relative",
          key: _
        }, [
          j((a(), V(Qe, {
            key: o.uid,
            layer: m(o.uid),
            result: o,
            selected: o.uid === v.value,
            onClick: (k) => S(o.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [O]
          ])
        ]))), 128))
      ], 42, Xe)), [
        [z],
        [A, {
          trigger: "manual",
          placement: "top-start"
        }]
      ]);
    };
  }
}), tt = { class: "inline font-bold" }, it = ["innerHTML"], st = /* @__PURE__ */ P({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: !1
    },
    fields: {
      type: Object,
      required: !0
    },
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(f) {
    const { t: e } = U(), t = ee("iApi"), i = f, s = (v, h, c, l) => {
      const m = v.find((S) => S[h].toLowerCase() === c.toLowerCase());
      m && delete l[m.name];
    }, u = () => {
      const v = Object.assign({}, i.identifyData.data);
      s(i.fields, "type", "geometry", v), t?.ui.exposeOids || s(i.fields, "type", "oid", v), t?.ui.exposeMeasurements || (s(i.fields, "name", "shape_length", v), s(i.fields, "name", "shape_area", v));
      const h = {};
      i.fields.forEach((l) => {
        const m = i.fixtureFields?.find((S) => l.name === S.field);
        h[l.name] = {
          name: m?.alias || l.alias || l.name,
          type: l.type,
          visible: m?.visible ?? !0
        };
      });
      const c = {};
      Object.keys(v).forEach((l) => {
        const m = h[l];
        if (m && m.visible) {
          const S = v[l];
          c[l] = {
            value: typeof S == "number" ? t?.ui.formatNumber(S) : S,
            alias: m.name,
            type: m.type
          };
        }
      });
      for (const [l] of Object.entries(c))
        t.ui.isPlainText(c[l].value) && (c[l].value = t.ui.escapeHtml(c[l].value));
      return c;
    }, d = (v, h, c) => {
      switch (c) {
        case "date":
          return p(v);
        default:
          return y(v, h);
      }
    }, y = (v, h) => {
      if (!v)
        return v;
      if (v.trim().match(/\.(jpeg|jpg|gif|png)$/) || v.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        //eslint-disable-line
      ))
        return `<img src="${v}" alt="${e("details.item.alert.defaultAltText", { alias: h })}" />`;
      const c = "underline text-blue-700 break-all", l = document.createElement("div");
      return l.innerHTML = v.trim(), l.firstElementChild?.tagName == "A" ? (l.firstElementChild.className = c, l.innerHTML) : fe(v, {
        className: c,
        target: "_blank",
        validate: {
          url: (S) => /^https?:\/\//.test(S)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, p = (v) => {
      const h = parseInt(v);
      return isNaN(h) ? v : new Date(h).toISOString().split("T")[0];
    };
    return (v, h) => (a(), n("div", null, [
      (a(!0), n(K, null, Y(u(), (c, l, m) => (a(), n("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: m
      }, [
        x("span", tt, D(c.alias), 1),
        h[0] || (h[0] = x("span", { class: "flex-auto" }, null, -1)),
        x("span", {
          class: "inline",
          innerHTML: d(c.value, c.alias, c.type)
        }, null, 8, it)
      ]))), 128))
    ]));
  }
}), lt = ["innerHTML"], at = { key: 1 }, ot = /* @__PURE__ */ P({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(f) {
    const { t: e } = U();
    return (t, i) => f.identifyData ? (a(), n("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: f.identifyData.data.data ?? f.identifyData.data
    }, null, 8, lt)) : (a(), n("div", at, D(L(e)("details.layers.results.empty")), 1));
  }
}), rt = { class: "relative flex flex-grow truncate" }, nt = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, ut = { class: "flex p-8 items-center" }, dt = ["innerHTML"], ct = {
  key: 1,
  class: "symbologyIcon p-6"
}, mt = ["content", "innerHTML", "tabindex"], pt = {
  key: 1,
  class: "flex p-6 flex-grow"
}, vt = {
  key: 2,
  class: "zoomButton text-center p-3"
}, ft = ["content", "aria-label"], ht = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, yt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, gt = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, _t = ["innerHTML"], me = /* @__PURE__ */ P({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(f) {
    const e = oe(), t = f, i = ee("iApi"), s = $([]), u = Z(), { t: d } = U(), y = $(""), p = $("none"), v = $(), h = () => e.getLayerByUid(t.uid), c = T(() => u.properties), l = T(() => u.defaultTemplates), m = T(() => h()?.supportsFeatures ?? !1), S = T(() => h()?.mapLayer ?? !1), F = T(() => {
      const o = h()?.nameField;
      let _ = o && t.data.loaded ? t.data.data[o] : i.$i18n.t("details.items.title");
      return i.ui.isPlainText(_) && (_ = i.ui.escapeHtml(_)), _;
    }), E = (o) => {
      if (typeof o == "string") {
        const _ = "underline text-blue-700 break-all", k = document.createElement("div");
        return k.innerHTML = o.trim(), k.firstElementChild?.tagName == "A" ? (k.firstElementChild.className = _, k.innerHTML) : fe(o, {
          className: _,
          target: "_blank",
          validate: {
            url: (C) => /^https?:\/\//.test(C)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return o;
    }, g = () => {
      z("none"), t.data.loaded ? H() : t.data.load().then(() => {
        H();
      });
    }, H = () => {
      if (y.value = "", !(t.data && t.data.loaded))
        return;
      const o = h();
      if (o === void 0) {
        console.warn(`could not find layer for uid ${t.uid} during icon lookup`);
        return;
      }
      if (o.supportsFeatures) {
        const _ = o.oidField;
        o.getIcon(t.data.data[_]).then((k) => {
          y.value = k;
        });
      }
    }, b = T(() => {
      const o = h();
      return o && c.value[o.id] && c.value[o.id].template ? c.value[o.id].template : l.value && l.value[t.data.format] ? l.value[t.data.format] : m.value ? st : ot;
    }), N = T(() => m.value ? h()?.fields || [] : []), O = T(() => {
      const o = h();
      if (o && c.value[o.id] && c.value[o.id].fields)
        return c.value[o.id].fields;
    }), z = (o) => {
      o === "zoomed" || o === "error" ? setTimeout(() => {
        p.value = o, v.value?._tippy.show(), setTimeout(() => {
          v.value?._tippy.hide(), p.value = "none";
        }, 3e3);
      }, 300) : p.value = o;
    }, A = () => {
      if (p.value !== "none")
        return;
      z("zooming");
      const o = h();
      if (o === void 0 || !o.isLoaded) {
        console.warn(`Could not find layer for uid ${t.uid} during zoom geometry lookup`), z("error");
        return;
      }
      if (!t.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), z("error");
        return;
      }
      const _ = t.data.data[o.oidField], k = () => {
        const I = { getGeom: !0 };
        o.getGraphic(_, I).then((C) => {
          C.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${_}`), z("error")) : (i.geo.map.zoomMapTo(C.geometry), z("zoomed"), i.updateAlert(i.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          z("error");
        });
      };
      o.layerType === Te.FEATURE && o.geomType !== Se.POINT ? o.getGraphicExtent(_).then((I) => {
        i.geo.map.zoomMapTo(I), z("zoomed"), i.updateAlert(i.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        k();
      }) : k();
    };
    return Q(() => {
      s.value.push(
        q(
          t,
          () => {
            g();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), X(() => {
      s.value.forEach((o) => o());
    }), (o, _) => {
      const k = B("truncate"), I = B("tippy");
      return a(), n(K, null, [
        x("div", rt, [
          m.value ? (a(), n("div", nt, [
            x("div", ut, [
              f.data.loaded && y.value ? (a(), n("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: y.value
              }, null, 8, dt)) : (a(), n("div", ct, _[1] || (_[1] = [
                x("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            f.data.loaded ? j((a(), n("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: F.value,
              innerHTML: E(F.value),
              tabindex: f.inList ? -1 : 0
            }, null, 8, mt)), [
              [k, {
                options: { placement: "right" }
              }]
            ]) : (a(), n("div", pt, D(L(d)("details.loading")), 1)),
            f.data.loaded ? (a(), n("span", vt, [
              S.value ? j((a(), n("button", {
                key: 0,
                type: "button",
                content: L(d)(`details.item.zoom${p.value === "none" ? "" : `.${p.value}`}`),
                "aria-label": L(d)(`grid.cells.zoom${p.value === "none" ? "" : `.${p.value}`}`),
                ref_key: "zoomButton",
                ref: v,
                onClick: _[0] || (_[0] = (C) => {
                  C.stopPropagation(), A();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                p.value === "zooming" ? (a(), n("div", ht)) : p.value === "zoomed" ? (a(), n("svg", yt, _[2] || (_[2] = [
                  x("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : p.value === "error" ? (a(), n("svg", gt, _[3] || (_[3] = [
                  x("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (a(), n("span", {
                  key: 3,
                  innerHTML: L(i).ui.getZoomIcon()
                }, null, 8, _t))
              ], 8, ft)), [
                [I, { placement: "bottom" }]
              ]) : M("", !0)
            ])) : M("", !0)
          ])) : M("", !0)
        ]),
        f.open ? (a(), V(Ae(b.value), {
          key: 0,
          identifyData: f.data,
          fields: N.value,
          fixtureFields: O.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : M("", !0)
      ], 64);
    };
  }
}), bt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, xt = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, kt = { for: "toggle" }, wt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, Lt = { class: "flex" }, $t = ["aria-label"], It = ["content", "aria-label", "disabled"], Tt = { class: "px-3 text-center flex-grow" }, St = ["content", "aria-label", "disabled"], Ht = { key: 3 }, At = { key: 0 }, zt = ["content"], Et = ["onClick"], Ct = {
  key: 1,
  class: "text-center"
}, Dt = {
  key: 4,
  class: "p-5"
}, Mt = /* @__PURE__ */ P({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(f) {
    const e = $(), t = () => {
      e.value._tippy.hide();
    }, i = (r) => {
      r.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    }, s = ee("iApi"), u = Z(), d = oe(), y = f, { t: p } = U(), v = $(!1), h = $(s.fixture.get("details")), c = $(!0), l = $(!1), m = $(0), S = $(20), F = $([]), E = $([]), g = T(() => u.activeGreedy), H = T(() => u.properties), b = T(() => m.value + S.value), N = () => d.getLayerByUid(y.uid), O = () => y.results.find((r) => r.uid === y.uid), z = T(() => O()?.loaded ?? !1), A = T(() => O()?.requestTime), o = T(
      () => v.value && (!l.value && I().length > 1 || l.value && I().length > S.value)
    ), _ = T(() => {
      const r = N();
      return r && H.value[r.id] && H.value[r.id].name ? H.value[r.id].name : r?.name ?? "";
    }), k = T(() => y.uid), I = () => {
      const r = O();
      return r ? r.items : [];
    }, C = T(() => I()[m.value]), ne = T(() => {
      if (h.value.hasHilighter()) {
        const r = N();
        if (r)
          return r.mapLayer && r.supportsFeatures;
      }
      return !1;
    }), he = (r) => {
      c.value = r, u.hilightToggle = r, G();
    }, ye = () => {
      const r = N();
      m.value = m.value ?? 0, c.value = u.hilightToggle ?? c.value, l.value = !1, v.value = !!r, G();
    }, ue = (r) => {
      l.value ? (m.value += r * S.value, G()) : m.value += r;
    }, G = () => {
      const r = I();
      if (c.value && z.value && r.length > 0 && ne.value)
        if (l.value)
          h.value.hilightDetailsItems(r.slice(m.value, b.value), y.uid);
        else {
          const w = r[m.value];
          w && h.value.hilightDetailsItems([w], y.uid);
        }
      else
        h.value.removeDetailsHilight();
    }, ge = () => {
      l.value = !0, m.value = Math.floor(m.value / S.value) * S.value, G();
    }, _e = () => {
      h.value.removeDetailsHilight();
    }, be = () => {
      h.value.removeDetailsHilight();
    }, xe = (r) => {
      const w = m.value;
      m.value = r, l.value = !1, w === r && G();
    };
    return re(() => {
      F.value.push(
        s.event.on(W.LAYER_REMOVE, (r) => {
          const w = s.panel.get("details");
          y.uid === r.uid && w && w.close();
        })
      ), F.value.push(
        s.event.on(W.PANEL_CLOSED, (r) => {
          r.id === "details" && _e();
        })
      ), F.value.push(
        s.event.on(W.PANEL_MINIMIZED, (r) => {
          r.id === "details" && be();
        })
      ), F.value.push(
        s.event.on(W.MAP_BASEMAPCHANGE, (r) => {
          c.value && r.schemaChanged && G();
        })
      ), e.value?.addEventListener("blur", t), e.value?.addEventListener("keyup", i);
    }), Q(() => {
      E.value.push(
        q(
          C,
          () => {
            l.value || (ye(), C.value === void 0 && h.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), E.value.push(
        q(
          k,
          () => {
            const r = y.uid;
            if (l.value && r) {
              const w = O();
              w && w.loading.then(() => {
                y.uid === r && l.value && G();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), E.value.push(
        q(A, () => {
          m.value = 0;
        })
      ), E.value.push(
        q(
          () => y.uid,
          () => {
            m.value = 0;
          }
        )
      );
    }), X(() => {
      E.value.forEach((r) => r()), F.value.forEach((r) => s.event.off(r)), e.value?.removeEventListener("blur", t), e.value?.removeEventListener("keyup", i);
    }), (r, w) => {
      const ke = B("truncate"), te = B("tippy"), we = B("focus-item"), Le = B("focus-list");
      return z.value && g.value === 0 ? (a(), n("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: pe(f.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        v.value ? j((a(), n("h1", bt, [
          le(D(_.value), 1)
        ])), [
          [ke, { options: { placement: "top-start" } }]
        ]) : M("", !0),
        ne.value ? (a(), n("div", xt, [
          x("label", kt, D(L(p)("details.togglehilight.title")), 1),
          se(De, {
            config: {
              value: c.value,
              disabled: !1
            },
            onToggled: he
          }, null, 8, ["config"])
        ])) : M("", !0),
        o.value ? (a(), n("div", wt, [
          x("div", Lt, [
            l.value ? M("", !0) : (a(), n("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(p)("details.item.see.list"),
              onClick: w[0] || (w[0] = (J) => ge())
            }, D(L(p)("details.item.see.list")), 9, $t)),
            x("div", {
              class: R(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": l.value }])
            }, [
              j((a(), n("button", {
                type: "button",
                content: L(p)(l.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: w[1] || (w[1] = (J) => ue(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(p)(l.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: m.value === 0
              }, w[3] || (w[3] = [
                x("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  x("g", null, [
                    x("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, It)), [
                [te, { placement: "top" }]
              ]),
              x("span", Tt, D(l.value ? L(p)("details.items.range", [
                m.value + 1,
                Math.min(b.value, I().length),
                I().length
              ]) : L(p)("details.item.count", [m.value + 1, I().length])), 1),
              j((a(), n("button", {
                type: "button",
                content: L(p)(l.value ? "details.items.next" : "details.item.next.item"),
                onClick: w[2] || (w[2] = (J) => ue(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(p)(l.value ? "details.items.next" : "details.item.next.item"),
                disabled: !l.value && m.value === I().length - 1 || l.value && b.value >= I().length
              }, w[4] || (w[4] = [
                x("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  x("g", null, [
                    x("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, St)), [
                [te, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : M("", !0),
        v.value ? (a(), n("div", Ht, [
          I().length > 0 ? (a(), n("div", At, [
            l.value ? j((a(), n("div", {
              key: 0,
              class: "flex flex-col",
              content: L(p)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: e
            }, [
              (a(!0), n(K, null, Y(I().slice(m.value, b.value), (J, de) => j((a(), n("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: de,
                onClick: (Gt) => xe(m.value + de)
              }, [
                se(me, {
                  data: J,
                  uid: f.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, Et)), [
                [we, "show-truncate"]
              ])), 128))
            ], 8, zt)), [
              [Le],
              [te, {
                trigger: "manual",
                placement: "top-start"
              }]
            ]) : (a(), V(me, {
              key: 1,
              data: C.value,
              uid: f.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (a(), n("div", Ct, D(L(p)("details.layers.results.empty.currentLayer")), 1))
        ])) : (a(), n("div", Dt, D(L(p)("details.item.no.data")), 1))
      ], 4)) : (a(), n("div", {
        key: 1,
        class: R(["flex justify-center py-10 items-center", f.results.length > 1 ? "ml-42" : ""])
      }, [
        w[5] || (w[5] = x("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        le(" " + D(L(p)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Ft = /* @__PURE__ */ ae(Mt, [["__scopeId", "data-v-4c39ec75"]]), Nt = { class: "relative h-full" }, Ot = { class: "detailsContentSection overflow-y-auto h-full" }, jt = /* @__PURE__ */ P({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(f) {
    const { t: e } = U(), t = ee("iApi"), i = Z(), s = $([]), u = $([]), d = $([]), y = $(!1), p = $(""), v = T(() => i.activeGreedy), h = T(() => i.payload), c = T(() => i.properties), l = (g) => {
      p.value = g;
    }, m = (g) => d.value.find((H) => H.uid === g), S = (g) => {
      g !== void 0 && (i.activeGreedy = g.length === 0 ? 0 : g[0].requestTime, d.value = g, F(g));
    }, F = (g) => {
      if (p.value) {
        const H = m(p.value);
        H ? H.loading.then(() => {
          H.requestTime === v.value && (H.items.length > 0 ? (i.activeGreedy = 0, y.value = !1) : E(g));
        }) : E(g);
      } else
        E(g);
    }, E = (g, H) => {
      let b;
      if (H)
        b = H;
      else {
        const A = i.properties, o = g.map((k) => [
          A[k.layerId]?.priority ?? 50,
          k.layerId
        ]), _ = new Set(o.map((k) => k[0]));
        b = [], _.forEach((k) => {
          const I = o.filter((C) => C[0] === k).map((C) => C[1]);
          b.push([k, I]);
        }), b.sort((k, I) => I[0] - k[0]);
      }
      if (b.length === 0) {
        i.activeGreedy = 0, y.value = !0;
        return;
      }
      const N = b[b.length - 1][1], O = g.filter((A) => N.includes(A.layerId)).map(
        (A) => A.loading.then(() => A.items.length > 0 ? Promise.resolve(A) : Promise.reject())
      ), z = g.length === 0 ? 0 : g[0].requestTime;
      Promise.any(O).then((A) => {
        A.requestTime === v.value && (i.activeGreedy = 0, p.value = A.uid, y.value = !1);
      }).catch(() => {
        z === v.value && (b.pop(), E(g, b));
      });
    };
    return Q(() => {
      u.value.push(
        q(
          h,
          (g) => {
            S(g);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), X(() => {
      s.value.forEach((g) => t.event.off(g)), u.value.forEach((g) => g());
    }), (g, H) => {
      const b = ze("panel-screen");
      return a(), V(b, { panel: f.panel }, {
        header: ce(() => [
          le(D(
            // Show different titles based on what requested the panel
            L(i).origin === "toggleEvent" ? L(e)("details.layers.title.gridOrigin") : L(e)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ce(() => [
          x("div", Nt, [
            d.value.length > 1 ? (a(), V(et, {
              key: 0,
              results: d.value,
              detailsProperties: c.value,
              selected: p.value,
              onSelectionChanged: l
            }, null, 8, ["results", "detailsProperties", "selected"])) : M("", !0),
            x("div", Ot, [
              y.value ? (a(), n("div", {
                key: 1,
                class: R(["text-center", { "ml-42": d.value.length > 1 }])
              }, D(d.value.length >= 1 ? L(e)("details.layers.results.empty") : L(e)("details.layers.results.empty.noLayers")), 3)) : (a(), V(Ft, {
                key: 0,
                uid: p.value,
                results: d.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Bt = /* @__PURE__ */ ae(jt, [["__scopeId", "data-v-2a8a1e06"]]), Pt = { en: { "details.layers.title.identifyOrigin": "Identify Details", "details.layers.title.gridOrigin": "Details", "details.layers.found": "Found {numResults} results in {numLayers} layers", "details.layers.loading": "The layer is loading...", "details.layers.error": "Error", "details.layers.results.empty": "No results found for any layer.", "details.layers.results.empty.currentLayer": "No results found for the selected layer.", "details.layers.results.empty.noLayers": "No layers for identification.", "details.layers.results.list.tooltip": "Use the arrow keys to navigate the items", "details.result.default.name": "Identify Item {0}", "details.loading": "Loading...", "details.items.title": "Details", "details.items.range": "{0} - {1} of {2}", "details.items.next": "Next page", "details.items.previous": "Previous page", "details.items.page": "Items per page", "details.item.see.list": "See List", "details.item.zoom": "Zoom to feature", "details.item.zoom.zooming": "Zooming...", "details.item.zoom.error": "Zoom failed", "details.item.zoom.zoomed": "Zoomed", "details.item.previous.item": "Previous item", "details.item.next.item": "Next item", "details.item.count": "{0} of {1}", "details.item.loading": "Loading results...", "details.item.no.data": "No data to show because the layer has been removed", "details.item.alert.zoom": "Zoomed into feature", "details.item.alert.show.item": "Showing result {itemName}", "details.item.alert.show.list": "Showing all results for {layerName}", "details.item.alert.defaultAltText": "Image associated with {alias} field", "details.togglehilight.title": "Toggle Highlight", "details.item.open": "Expand", "details.item.collapse": "Collapse" }, fr: { "details.layers.title.identifyOrigin": "Identifier les détails", "details.layers.title.gridOrigin": "Détails", "details.layers.found": "{numResults} résultats trouvés dans {numLayers} couches", "details.layers.loading": "La couche est en cours de chargement...", "details.layers.error": "Erreur", "details.layers.results.empty": "Aucun résultat trouvé pour aucune couche.", "details.layers.results.empty.currentLayer": "Aucun résultat trouvé pour la couche sélectionnée.", "details.layers.results.empty.noLayers": "Pas de couches pour l'identification.", "details.layers.results.list.tooltip": "Utilisez les touches fléchées pour naviguer entre les éléments", "details.result.default.name": "Désigner l'élément {0}", "details.loading": "Chargement en cours...", "details.items.title": "Détails", "details.items.range": "{0} - {1} de {2}", "details.items.next": "Page suivante", "details.items.previous": "Page précédente", "details.items.page": "éléments par page", "details.item.see.list": "Voir la liste", "details.item.zoom": "Zoom à l'élément", "details.item.zoom.zooming": "Zoom en cours...", "details.item.zoom.error": "Échec du zoom", "details.item.zoom.zoomed": "Zoom terminé", "details.item.previous.item": "Élément précédent", "details.item.next.item": "Élément suivant", "details.item.count": "{0} de {1}", "details.item.loading": "Chargement des résultats...", "details.item.no.data": "Aucune donnée à afficher", "details.item.alert.zoom": "Zoom sur la caractéristique", "details.item.alert.show.item": "Affichage du résultat {itemName}", "details.item.alert.show.list": "Affichage de tous les résultats pour {layerName}", "details.item.alert.defaultAltText": "Image associée au champ {alias}", "details.togglehilight.title": "Basculer vers l'élément principal", "details.item.open": "Développer", "details.item.collapse": "Réduire" } };
class is extends Fe {
  async added() {
    this.$iApi.panel.register(
      {
        details: {
          screens: {
            "details-screen": Ee(Bt)
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
      { i18n: { messages: Pt } }
    ), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    );
    this.removed = () => {
      e(), this.$iApi.panel.remove("details"), this.$iApi.fixture.exists("appbar") && He(this.$vApp.$pinia).removeButton("details"), Z(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  is as default
};
