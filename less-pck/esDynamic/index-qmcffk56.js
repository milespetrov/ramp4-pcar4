import { kK as x, fE as i, fI as c, fw as y, fx as $, fO as E, mX as h, fB as A, fW as u, fG as _, fH as r, fM as m, jY as f, fP as M, fU as O, fV as S, fA as B, fC as g, fD as F, fN as b, fJ as N, fF as w, hM as V, fY as L, bW as D, f_ as H } from "./main-n1d2W0Ts.js";
const P = {}, j = { class: "border-b p-0 self-center w-2/3" };
function Y(v, n) {
  return i(), c("span", j);
}
const k = /* @__PURE__ */ x(P, [["render", Y]]), Z = /* @__PURE__ */ y({
  __name: "zoom-nav",
  setup(v) {
    const { t: n } = $(), o = E("iApi"), e = h(400, !0, () => o.geo.map.zoomIn()), a = h(400, !0, () => o.geo.map.zoomOut());
    return (l, t) => {
      const s = A("mapnav-button");
      return i(), c("div", null, [
        u(s, {
          onClickFunction: m(e),
          tooltip: m(n)("mapnav.zoomIn")
        }, {
          default: _(() => t[0] || (t[0] = [
            r("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              r("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              r("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        u(k),
        u(s, {
          onClickFunction: m(a),
          tooltip: m(n)("mapnav.zoomOut")
        }, {
          default: _(() => t[1] || (t[1] = [
            r("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              r("path", { d: "M19 13H5v-2h14v2z" }),
              r("path", {
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
}), T = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, W = ["content"], G = { class: "mapnav-section bg-white-75 hover:bg-white" }, U = /* @__PURE__ */ y({
  __name: "mapnav",
  setup(v) {
    const n = f(), { t: o } = $(), e = M(), a = () => {
      e.value._tippy.hide();
    }, l = (s) => {
      s.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    O(() => {
      e.value?.addEventListener("blur", a), e.value?.addEventListener("keyup", l);
    }), S(() => {
      e.value?.removeEventListener("blur", a), e.value?.removeEventListener("keyup", l);
    });
    const t = B(() => n.order.map((s) => n.items[s]).filter((s) => s.componentId));
    return (s, p) => {
      const z = g("focus-list"), C = g("tippy");
      return i(), c("div", T, [
        F((i(), c("div", {
          class: "flex flex-col",
          content: m(o)("panels.controls.items"),
          ref_key: "el",
          ref: e
        }, [
          u(Z, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          p[0] || (p[0] = r("span", { class: "py-1" }, null, -1)),
          r("div", G, [
            (i(!0), c(b, null, N(t.value, (d, I) => (i(), c(b, {
              key: d.id + "button"
            }, [
              (i(), w(V(d.id + "-nav-button"))),
              I !== t.value.length - 1 ? (i(), w(k, {
                key: 0,
                class: "mapnav-divider"
              })) : L("", !0)
            ], 64))), 128))
          ])
        ], 8, W)), [
          [z],
          [C, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
}), q = /* @__PURE__ */ x(U, [["__scopeId", "data-v-dde7576f"]]);
class J extends D {
  mapnavStore = f(this.$vApp.$pinia);
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
    const o = n.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = o.reduce((e, a) => (e[a.id] = a, e), {}), this.mapnavStore.order = o.map((e) => e.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const n = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((o) => {
      (this.$iApi.fixture.exists(o) || n.includes(o)) && (this.mapnavStore.items[o].componentId = `${o}-nav-button`);
    });
  }
}
const K = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class Q extends J {
  async added() {
    Object.entries(K).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t));
    const { destroy: n, el: o } = this.mount(q, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]), this._parseConfig(this.config);
    const a = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    ), l = this.$iApi.event.on(H.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      a(), this.$iApi.event.off(l);
      const t = f(this.$vApp.$pinia), s = { ...t.items };
      Object.keys(s).forEach((p) => t.removeItem(p)), t.$reset(), n();
    };
  }
}
export {
  Q as default
};
//# sourceMappingURL=index-qmcffk56.js.map
