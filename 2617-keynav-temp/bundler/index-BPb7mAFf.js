import { ref as g, defineComponent as w, computed as $, openBlock as m, createElementBlock as v, unref as f, createElementVNode as r, toDisplayString as k, createCommentVNode as _, Fragment as E, renderList as K } from "vue";
import { defineStore as z, storeToRefs as A } from "pinia";
import { useI18n as L } from "vue-i18n";
import "tiny-emitter";
import { F as H } from "./main-Ckr7Mm0x.js";
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
import "throttle-debounce";
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
const N = { en: { "keyboardnav.activeNamespace": "Namespace Active: {name}", "keyboardnav.helpTitle": "Keyboard Shortcuts", "keyboardnav.keysTitle": "Keys for {name}", "keyboardnav.helpDescription": "To use keyboard shortcuts, start by activating a feature group using the combo <span class='key indigo'>SHIFT + [letter]</span>. Once a group is active, its specific shortcuts will appear beneath it. Use <span class='key zinc'>[key]</span> to trigger individual actions within that group.", "keyboardnav.noShortcuts": "No shortcuts available." }, fr: { "keyboardnav.activeNamespace": "Espace de noms actif : {name}", "keyboardnav.helpTitle": "Raccourcis clavier", "keyboardnav.keysTitle": "Raccourcis pour {name}", "keyboardnav.helpDescription": "Pour utiliser les raccourcis clavier", "keyboardnav.noShortcuts": "Aucun raccourci disponible." } }, x = z("keyboardnav", () => {
  const o = g(null), e = g({}), i = g(!1), p = ["H", "?"];
  function a() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (const n of t)
      if (!e.value[n] && !p.includes(n)) return n;
    return null;
  }
  function s(t, n) {
    let c = t.toUpperCase();
    if (p.includes(c) || e.value[c]) {
      const d = a();
      d ? c = d : console.error("No available keyboard namespace letters");
    }
    if (!n.handler)
      for (const d of n.keys)
        d.handler || console.error(
          `Keyboardnav registration for ${c} requires handlers for all keys or a parent handler`
        );
    return e.value[c] = n, c;
  }
  function l(t) {
    i.value !== t && (i.value = t);
  }
  function y(t) {
    o.value === t && (o.value = null), delete e.value[t];
  }
  function h(t, n) {
    o.value = t, e.value[t]?.activeHandler?.(n);
  }
  function u(t) {
    o.value && e.value[o.value]?.deactiveHandler?.(t), o.value = null;
  }
  function b(t, n) {
    const c = o.value;
    if (!c) return;
    const d = e.value[c];
    d && (d.handler ? d.handler(t, n) : d.keys.find((S) => S.key === t)?.handler?.(n));
  }
  return {
    activeNamespace: o,
    namespaces: e,
    helpVisible: i,
    register: s,
    unregister: y,
    activate: h,
    deactivate: u,
    trigger: b,
    setHelpVisible: l
  };
}), D = {
  key: 0,
  class: "absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity"
}, T = {
  class: "w-[640px] max-h-[80vh] overflow-y-auto rounded-xl bg-white py-8 px-10 shadow-xl",
  role: "dialog",
  "aria-modal": "true",
  "aria-live": "polite"
}, V = { class: "border-b border-gray-200 bg-white px-4 py-20 sm:px-24" }, C = { class: "text-base font-semibold text-gray-900" }, U = ["innerHTML"], F = {
  role: "list",
  class: "m-0 max-w-[calc(var(--container-lg)-(--spacing(8)))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
}, B = {
  key: 0,
  class: "pl-24 mb-8 py-16 border-b"
}, I = { class: "font-mono text-md text-zinc-600" }, M = { class: "flex items-center gap-x-12" }, O = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-indigo-300 bg-indigo-400/10 text-indigo-500 dark:ring-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-400" }, R = { class: "font-mono text-md text-zinc-600" }, j = {
  key: 0,
  class: "space-y-4 p-16 pl-24"
}, P = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, q = { class: "font-mono text-md text-zinc-600" }, G = /* @__PURE__ */ w({
  __name: "keyboardnav",
  setup(o) {
    const e = x(), { activeNamespace: i, namespaces: p, helpVisible: a } = A(e), { t: s } = L(), l = $(() => Object.keys(p.value)), y = $(() => {
      const h = i.value;
      return h ? p.value[h]?.keys || [] : [];
    });
    return (h, u) => (m(), v("div", null, [
      f(a) ? (m(), v("div", D, [
        r("div", T, [
          r("div", V, [
            r("h3", C, k(f(s)("keyboardnav.helpTitle")), 1),
            r("div", {
              innerHTML: f(s)("keyboardnav.helpDescription"),
              class: "mt-6 text-sm text-gray-500"
            }, null, 8, U)
          ]),
          r("ul", F, [
            l.value.length === 0 ? (m(), v("li", B, [
              r("p", I, k(f(s)("keyboardnav.noShortcuts")), 1)
            ])) : _("", !0),
            (m(!0), v(E, null, K(l.value, (b) => (m(), v("li", {
              key: b,
              class: "pl-24 mb-8 py-16 border-b"
            }, [
              r("div", M, [
                r("span", O, " SHIFT + " + k(b), 1),
                u[0] || (u[0] = r("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                r("span", R, k(f(s)(`keyboardnav.ns.${b}`)), 1)
              ]),
              f(i) === b ? (m(), v("div", j, [
                (m(!0), v(E, null, K(y.value, (t) => (m(), v("div", {
                  key: t.key,
                  class: "flex items-center gap-x-12"
                }, [
                  r("span", P, k(t.key), 1),
                  u[1] || (u[1] = r("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                  r("span", q, k(f(s)(`keyboardnav.key.${b}.${t.key}`)), 1)
                ]))), 128))
              ])) : _("", !0)
            ]))), 128))
          ])
        ])
      ])) : _("", !0)
    ]));
  }
});
class J extends H {
  keyboardnavStore = x(this.$vApp.$pinia);
  /**
   * Register a namespace letter and its keyboard options.
   *
   * @param namespace requested namespace letter.
   * @param options registration object describing keys and handlers.
   * @returns final namespace letter used for registration.
   */
  register(e, i) {
    const p = e.toUpperCase(), a = this.keyboardnavStore.register(p, i), s = `keyboardnav.ns.${a}`;
    return Object.entries(i.name).forEach(([l, y]) => {
      this.$iApi.$i18n.mergeLocaleMessage(l, { [s]: y });
    }), i.keys.forEach((l) => {
      const y = `keyboardnav.key.${a}.${l.key}`;
      Object.entries(l.description).forEach(([h, u]) => {
        this.$iApi.$i18n.mergeLocaleMessage(h, { [y]: u });
      });
    }), a;
  }
  /** @internal */
  added() {
    this.$iApi.$rootEl?.addEventListener("keydown", (e) => this._handleKeyDown(e)), this.$iApi.$rootEl?.addEventListener("keyup", (e) => this._handleKeyUp(e)), this.$iApi.$rootEl?.addEventListener("blur", this._handleBlur);
  }
  /** @internal */
  removed() {
    this.$iApi.$rootEl?.removeEventListener("keydown", (e) => this._handleKeyDown(e)), this.$iApi.$rootEl?.removeEventListener("keyup", (e) => this._handleKeyUp(e)), this.$iApi.$rootEl?.removeEventListener("blur", this._handleBlur);
  }
  _handleKeyDown = (e) => {
    const i = e.key.toUpperCase();
    e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey ? i === "H" || e.key === "?" ? (e.preventDefault(), this.keyboardnavStore.setHelpVisible(!0)) : i in this.keyboardnavStore.namespaces && (e.preventDefault(), this.keyboardnavStore.activate(i, e)) : !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && i.length === 1 && this.keyboardnavStore.activeNamespace && (e.preventDefault(), this.keyboardnavStore.trigger(i, e));
  };
  _handleKeyUp = (e) => {
    const i = e.key.toUpperCase();
    (!e.shiftKey || i === "H" || e.key === "?") && this.keyboardnavStore.setHelpVisible(!1);
  };
  _handleBlur = (e) => {
    this.keyboardnavStore.deactivate(e), this.keyboardnavStore.setHelpVisible(!1);
  };
}
class De extends J {
  added() {
    Object.entries(N).forEach(
      (a) => this.$iApi.$i18n.mergeLocaleMessage(...a)
    );
    const { destroy: e, el: i } = this.mount(G, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(i.childNodes[0]), super.added(), this.removed = () => {
      super.removed(), e(), x(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  De as default
};
