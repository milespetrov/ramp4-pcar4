import { openBlock as r, createElementBlock as m, defineComponent as b, inject as S, resolveComponent as F, createVNode as u, unref as v, withCtx as w, createElementVNode as c, markRaw as f, defineAsyncComponent as _, Fragment as g, renderList as M, normalizeClass as V, createBlock as y, resolveDynamicComponent as O, ref as B, computed as z, onMounted as H, onBeforeUnmount as P, resolveDirective as A, withDirectives as Z, createCommentVNode as I } from "vue";
import { _ as x, d as $, F as j, G } from "./main-cCCMKK6Z.js";
import { useI18n as k } from "vue-i18n";
import { throttle as E } from "throttle-debounce";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
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
import { u as Y } from "./draw-store-lo5oHBI6.js";
const q = {}, R = { class: "border-b p-0 self-center w-2/3" };
function U(d, n) {
  return r(), m("span", R);
}
const N = /* @__PURE__ */ x(q, [["render", U]]), W = /* @__PURE__ */ b({
  __name: "zoom-nav",
  setup(d) {
    const { t: n } = k(), t = S("iApi"), i = E(400, !0, () => t.geo.map.zoomIn()), e = E(400, !0, () => t.geo.map.zoomOut());
    return (l, o) => {
      const a = F("mapnav-button");
      return r(), m("div", null, [
        u(a, {
          onClickFunction: v(i),
          tooltip: v(n)("mapnav.zoomIn")
        }, {
          default: w(() => o[0] || (o[0] = [
            c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              c("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              c("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        u(N),
        u(a, {
          onClickFunction: v(e),
          tooltip: v(n)("mapnav.zoomOut")
        }, {
          default: w(() => o[1] || (o[1] = [
            c("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              c("path", { d: "M19 13H5v-2h14v2z" }),
              c("path", {
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
}), J = { class: "mapnav-section bg-white-75 hover:bg-white" }, K = /* @__PURE__ */ b({
  __name: "draw-nav-section",
  setup(d) {
    const { t: n } = k(), t = Y(), i = [
      {
        type: "point",
        icon: f(_(() => import("./point-icon-CjrxDIj_.js")))
      },
      {
        type: "polyline",
        icon: f(_(() => import("./line-icon-BCp4HrxX.js")))
      },
      {
        type: "polygon",
        icon: f(_(() => import("./polygon-icon-D19NUUbR.js")))
      },
      {
        type: "circle",
        icon: f(_(() => import("./circle-icon-huPnNd5N.js")))
      },
      {
        type: "rectangle",
        icon: f(_(() => import("./rectangle-icon-CSnCcvdq.js")))
      }
    ], e = (l) => {
      t.activeTool === l ? t.setActiveTool("") : t.setActiveTool(l);
    };
    return (l, o) => {
      const a = F("mapnav-button");
      return r(), m("div", J, [
        (r(), m(g, null, M(i, (s) => u(a, {
          key: s.type,
          onClickFunction: () => e(s.type),
          tooltip: v(n)(`draw.${s.type}.tooltip`),
          class: V({ "active-tool": v(t).activeTool === s.type })
        }, {
          default: w(() => [
            (r(), y(O(s.icon), { class: "fill-current w-32 h-20" }))
          ]),
          _: 2
        }, 1032, ["onClickFunction", "tooltip", "class"])), 64))
      ]);
    };
  }
}), Q = /* @__PURE__ */ x(K, [["__scopeId", "data-v-75635d52"]]), X = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, tt = ["content"], et = { class: "mapnav-section bg-white-75 hover:bg-white" }, ot = /* @__PURE__ */ b({
  __name: "mapnav",
  setup(d) {
    const n = S("iApi"), t = $(), { t: i } = k(), e = B(), l = z(() => n.getConfig().fixtures.mapnav.items.some((p) => p === "draw")), o = () => {
      e.value._tippy.hide();
    }, a = (p) => {
      p.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    H(() => {
      e.value?.addEventListener("blur", o), e.value?.addEventListener("keyup", a);
    }), P(() => {
      e.value?.removeEventListener("blur", o), e.value?.removeEventListener("keyup", a);
    });
    const s = z(
      () => t.order.map((p) => t.items[p]).filter((p) => p.componentId && p.id !== "draw")
    );
    return (p, h) => {
      const D = A("focus-list"), L = A("tippy");
      return r(), m("div", X, [
        Z((r(), m("div", {
          class: "flex flex-col",
          content: v(i)("panels.controls.items"),
          ref_key: "el",
          ref: e
        }, [
          l.value ? (r(), m(g, { key: 0 }, [
            u(Q),
            h[0] || (h[0] = c("span", { class: "py-1" }, null, -1))
          ], 64)) : I("", !0),
          u(W, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          h[1] || (h[1] = c("span", { class: "py-1" }, null, -1)),
          c("div", et, [
            (r(!0), m(g, null, M(s.value, (C, T) => (r(), m(g, {
              key: C.id + "button"
            }, [
              (r(), y(O(C.id + "-nav-button"))),
              T !== s.value.length - 1 ? (r(), y(N, {
                key: 0,
                class: "mapnav-divider"
              })) : I("", !0)
            ], 64))), 128))
          ])
        ], 8, tt)), [
          [D],
          [L, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
}), nt = /* @__PURE__ */ x(ot, [["__scopeId", "data-v-96b1b7dc"]]);
class it extends j {
  mapnavStore = $(this.$vApp.$pinia);
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
  _parseConfig(n) {
    if (!n)
      return;
    const t = n.items.map((i) => ({
      id: i
    }));
    this.mapnavStore.items = t.reduce((i, e) => (i[e.id] = e, i), {}), this.mapnavStore.order = t.map((i) => i.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const n = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((t) => {
      (this.$iApi.fixture.exists(t) || n.includes(t)) && (this.mapnavStore.items[t].componentId = `${t}-nav-button`);
    });
  }
}
const rt = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class Zt extends it {
  async added() {
    Object.entries(rt).forEach((o) => this.$iApi.$i18n.mergeLocaleMessage(...o));
    const { destroy: n, el: t } = this.mount(nt, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (o) => this._parseConfig(o)
    ), l = this.$iApi.event.on(G.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      e(), this.$iApi.event.off(l);
      const o = $(this.$vApp.$pinia), a = { ...o.items };
      Object.keys(a).forEach((s) => o.removeItem(s)), o.$reset(), n();
    };
  }
}
export {
  Zt as default
};
