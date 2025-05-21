import { openBlock as s, createElementBlock as c, defineComponent as x, inject as S, resolveComponent as F, createVNode as _, unref as l, withCtx as y, createElementVNode as p, markRaw as u, defineAsyncComponent as d, computed as b, Fragment as g, renderList as M, createBlock as w, normalizeClass as V, resolveDynamicComponent as T, ref as B, onMounted as H, onBeforeUnmount as P, resolveDirective as A, withDirectives as Z, createCommentVNode as I } from "vue";
import { _ as $, d as k, F as j, G } from "./main-BLwRIGwl.js";
import { useI18n as C } from "vue-i18n";
import { throttle as E } from "throttle-debounce";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { u as Y } from "./draw-store-Dw2-9J1-.js";
const q = {}, R = { class: "border-b p-0 self-center w-2/3" };
function U(h, i) {
  return s(), c("span", R);
}
const O = /* @__PURE__ */ $(q, [["render", U]]), W = /* @__PURE__ */ x({
  __name: "zoom-nav",
  setup(h) {
    const { t: i } = C(), e = S("iApi"), r = E(400, !0, () => e.geo.map.zoomIn()), o = E(400, !0, () => e.geo.map.zoomOut());
    return (v, t) => {
      const a = F("mapnav-button");
      return s(), c("div", null, [
        _(a, {
          onClickFunction: l(r),
          tooltip: l(i)("mapnav.zoomIn")
        }, {
          default: y(() => t[0] || (t[0] = [
            p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              p("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              p("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        _(O),
        _(a, {
          onClickFunction: l(o),
          tooltip: l(i)("mapnav.zoomOut")
        }, {
          default: y(() => t[1] || (t[1] = [
            p("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              p("path", { d: "M19 13H5v-2h14v2z" }),
              p("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"])
      ]);
    };
  }
}), J = { class: "mapnav-section bg-white-75 hover:bg-white" }, K = /* @__PURE__ */ x({
  __name: "draw-nav-section",
  setup(h) {
    const { t: i } = C(), e = Y(), r = [
      {
        type: "point",
        icon: u(d(() => import("./point-icon-CwTthi5R.js")))
      },
      {
        type: "polyline",
        icon: u(d(() => import("./polyline-icon-B56SaI6h.js")))
      },
      {
        type: "polygon",
        icon: u(d(() => import("./polygon-icon-C648tidm.js")))
      },
      {
        type: "circle",
        icon: u(d(() => import("./circle-icon-B-aMZ25e.js")))
      },
      {
        type: "rectangle",
        icon: u(d(() => import("./rectangle-icon-DKsPlNs-.js")))
      }
    ], o = b(() => {
      const t = r.filter((a) => e.supportedTypes.some((m) => m.type === a.type));
      return t.push({
        type: "edit",
        icon: u(d(() => import("./edit-icon-DChXHPWx.js")))
      }), t;
    }), v = (t) => {
      e.activeTool === t ? e.setActiveTool("") : e.setActiveTool(t);
    };
    return (t, a) => {
      const m = F("mapnav-button");
      return s(), c("div", J, [
        (s(!0), c(g, null, M(o.value, (n) => (s(), w(m, {
          key: n.type,
          onClickFunction: () => v(n.type),
          tooltip: l(i)(`draw.${n.type}.tooltip`),
          class: V({ "active-tool": l(e).activeTool === n.type })
        }, {
          default: y(() => [
            (s(), w(T(n.icon), { class: "fill-current w-32 h-20" }))
          ]),
          _: 2
        }, 1032, ["onClickFunction", "tooltip", "class"]))), 128))
      ]);
    };
  }
}), Q = /* @__PURE__ */ $(K, [["__scopeId", "data-v-f9b39c8d"]]), X = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, tt = ["content"], et = { class: "mapnav-section bg-white-75 hover:bg-white" }, ot = /* @__PURE__ */ x({
  __name: "mapnav",
  setup(h) {
    const i = S("iApi"), e = k(), { t: r } = C(), o = B(), v = b(() => i.getConfig().fixtures.mapnav.items.some((n) => n === "draw")), t = () => {
      o.value._tippy.hide();
    }, a = (n) => {
      n.key === "Tab" && o.value?.matches(":focus") && o.value._tippy.show();
    };
    H(() => {
      o.value?.addEventListener("blur", t), o.value?.addEventListener("keyup", a);
    }), P(() => {
      o.value?.removeEventListener("blur", t), o.value?.removeEventListener("keyup", a);
    });
    const m = b(
      () => e.order.map((n) => e.items[n]).filter((n) => n.componentId && n.id !== "draw")
    );
    return (n, f) => {
      const D = A("focus-list"), N = A("tippy");
      return s(), c("div", X, [
        Z((s(), c("div", {
          class: "flex flex-col",
          content: l(r)("panels.controls.items"),
          ref_key: "el",
          ref: o
        }, [
          v.value ? (s(), c(g, { key: 0 }, [
            _(Q),
            f[0] || (f[0] = p("span", { class: "py-1" }, null, -1))
          ], 64)) : I("", !0),
          _(W, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          f[1] || (f[1] = p("span", { class: "py-1" }, null, -1)),
          p("div", et, [
            (s(!0), c(g, null, M(m.value, (z, L) => (s(), c(g, {
              key: z.id + "button"
            }, [
              (s(), w(T(z.id + "-nav-button"))),
              L !== m.value.length - 1 ? (s(), w(O, {
                key: 0,
                class: "mapnav-divider"
              })) : I("", !0)
            ], 64))), 128))
          ])
        ], 8, tt)), [
          [D],
          [N, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
}), nt = /* @__PURE__ */ $(ot, [["__scopeId", "data-v-96b1b7dc"]]);
class it extends j {
  mapnavStore = k(this.$vApp.$pinia);
  /**
   * Returns `MapnavFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {MapnavFixtureConfig}
   * @memberof MapnavFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {MapnavFixtureConfig} [mapnavConfig]
   * @returns
   * @memberof MapnavAPI
   */
  _parseConfig(i) {
    if (!i)
      return;
    const e = i.items.map((r) => ({
      id: r
    }));
    this.mapnavStore.items = e.reduce((r, o) => (r[o.id] = o, r), {}), this.mapnavStore.order = e.map((r) => r.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const i = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((e) => {
      (this.$iApi.fixture.exists(e) || i.includes(e)) && (this.mapnavStore.items[e].componentId = `${e}-nav-button`);
    });
  }
}
const rt = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class jt extends it {
  async added() {
    Object.entries(rt).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t));
    const { destroy: i, el: e } = this.mount(nt, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]), this._parseConfig(this.config);
    const o = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    ), v = this.$iApi.event.on(G.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      o(), this.$iApi.event.off(v);
      const t = k(this.$vApp.$pinia), a = { ...t.items };
      Object.keys(a).forEach((m) => t.removeItem(m)), t.$reset(), i();
    };
  }
}
export {
  jt as default
};
