import { openBlock as r, createElementBlock as l, defineComponent as k, inject as C, resolveComponent as M, createVNode as g, unref as v, withCtx as b, createElementVNode as m, useTemplateRef as B, markRaw as h, defineAsyncComponent as f, computed as x, normalizeClass as I, Fragment as w, renderList as N, createBlock as y, resolveDynamicComponent as O, ref as H, onMounted as P, onBeforeUnmount as Z, resolveDirective as F, withDirectives as j, createCommentVNode as S } from "vue";
import { _ as $, d as A, F as G, G as R } from "./main-CUttai9y.js";
import { useI18n as z } from "vue-i18n";
import { throttle as T } from "throttle-debounce";
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
import "@arcgis/map-components/components/arcgis-swipe";
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
import { u as Y } from "./draw-store-DYkFY3w9.js";
const q = {}, U = { class: "border-b p-0 self-center w-2/3" };
function W(_, i) {
  return r(), l("span", U);
}
const D = /* @__PURE__ */ $(q, [["render", W]]), J = /* @__PURE__ */ k({
  __name: "zoom-nav",
  setup(_) {
    const { t: i } = z(), t = C("iApi"), e = T(400, !0, () => t.geo.map.zoomIn()), o = T(400, !0, () => t.geo.map.zoomOut());
    return (d, n) => {
      const p = M("mapnav-button");
      return r(), l("div", null, [
        g(p, {
          onClickFunction: v(e),
          tooltip: v(i)("mapnav.zoomIn")
        }, {
          default: b(() => n[0] || (n[0] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              m("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              m("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        g(D),
        g(p, {
          onClickFunction: v(o),
          tooltip: v(i)("mapnav.zoomOut")
        }, {
          default: b(() => n[1] || (n[1] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              m("path", { d: "M19 13H5v-2h14v2z" }),
              m("path", {
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
}), K = /* @__PURE__ */ k({
  __name: "draw-nav-section",
  setup(_) {
    const i = C("iApi"), { t } = z(), e = Y();
    e.mapNavEl = B("mapNavEl");
    const o = [
      {
        type: "point",
        icon: h(f(() => import("./point-icon-DfIZ0IUT.js")))
      },
      {
        type: "polyline",
        icon: h(f(() => import("./polyline-icon-BE_2yi1I.js")))
      },
      {
        type: "polygon",
        icon: h(f(() => import("./polygon-icon-BmD-3sUA.js")))
      },
      {
        type: "circle",
        icon: h(f(() => import("./circle-icon-CVsprXyu.js")))
      },
      {
        type: "rectangle",
        icon: h(f(() => import("./rectangle-icon-CK-z9-Oa.js")))
      }
    ], d = x(() => {
      const a = o.filter((s) => e.supportedTypes.some((c) => c.type === s.type));
      return a.push({
        type: "edit",
        icon: h(f(() => import("./edit-icon-DBc5SAPr.js")))
      }), a;
    }), n = (a) => {
      e.activeTool === a ? e.setActiveTool(null) : e.setActiveTool(a);
    }, p = () => {
      i.geo.map.setMouseFocus();
    };
    return (a, s) => {
      const c = M("mapnav-button");
      return r(), l("div", {
        class: I([{ active: v(e).activeTool || v(e).activeTool == "" }, "mapnav-section bg-white-75 hover:bg-white"])
      }, [
        (r(!0), l(w, null, N(d.value, (u) => (r(), y(c, {
          key: u.type,
          onMousedown: p,
          onClickFunction: () => n(u.type),
          tooltip: v(t)(`draw.${u.type}.tooltip`),
          class: I({ "active-tool": v(e).activeTool === u.type }),
          ref_for: !0,
          ref: "mapNavEl"
        }, {
          default: b(() => [
            (r(), y(O(u.icon), { class: "fill-current w-32 h-20" }))
          ]),
          _: 2
        }, 1032, ["onClickFunction", "tooltip", "class"]))), 128))
      ], 2);
    };
  }
}), Q = /* @__PURE__ */ $(K, [["__scopeId", "data-v-0302669a"]]), X = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, ee = ["content"], te = { class: "mapnav-section bg-white-75 hover:bg-white" }, oe = /* @__PURE__ */ k({
  __name: "mapnav",
  setup(_) {
    const i = C("iApi"), t = A(), { t: e } = z(), o = H(), d = x(() => i.getConfig().fixtures.mapnav.items.some((s) => s === "draw")), n = () => {
      o.value._tippy.hide();
    }, p = (s) => {
      s.key === "Tab" && o.value?.matches(":focus") && o.value._tippy.show();
    };
    P(() => {
      o.value?.addEventListener("blur", n), o.value?.addEventListener("keyup", p);
    }), Z(() => {
      o.value?.removeEventListener("blur", n), o.value?.removeEventListener("keyup", p);
    });
    const a = x(
      () => t.order.map((s) => t.items[s]).filter((s) => s.componentId && s.id !== "draw")
    );
    return (s, c) => {
      const u = F("focus-list"), L = F("tippy");
      return r(), l("div", X, [
        j((r(), l("div", {
          class: "flex flex-col",
          content: v(e)("panels.controls.items"),
          ref_key: "el",
          ref: o
        }, [
          d.value ? (r(), l(w, { key: 0 }, [
            g(Q),
            c[0] || (c[0] = m("span", { class: "py-1" }, null, -1))
          ], 64)) : S("", !0),
          g(J, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          c[1] || (c[1] = m("span", { class: "py-1" }, null, -1)),
          m("div", te, [
            (r(!0), l(w, null, N(a.value, (E, V) => (r(), l(w, {
              key: E.id + "button"
            }, [
              (r(), y(O(E.id + "-nav-button"))),
              V !== a.value.length - 1 ? (r(), y(D, {
                key: 0,
                class: "mapnav-divider"
              })) : S("", !0)
            ], 64))), 128))
          ])
        ], 8, ee)), [
          [u],
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
}), ne = /* @__PURE__ */ $(oe, [["__scopeId", "data-v-96b1b7dc"]]);
class ie extends G {
  mapnavStore = A(this.$vApp.$pinia);
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
    const t = i.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = t.reduce((e, o) => (e[o.id] = o, e), {}), this.mapnavStore.order = t.map((e) => e.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const i = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((t) => {
      (this.$iApi.fixture.exists(t) || i.includes(t)) && (this.mapnavStore.items[t].componentId = `${t}-nav-button`);
    });
  }
}
const re = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class Ge extends ie {
  async added() {
    Object.entries(re).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: i, el: t } = this.mount(ne, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this._parseConfig(this.config);
    const o = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), d = this.$iApi.event.on(R.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      o(), this.$iApi.event.off(d);
      const n = A(this.$vApp.$pinia), p = { ...n.items };
      Object.keys(p).forEach((a) => n.removeItem(a)), n.$reset(), i();
    };
  }
}
export {
  Ge as default
};
