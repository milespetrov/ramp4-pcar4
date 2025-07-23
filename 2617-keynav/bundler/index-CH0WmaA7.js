import { ref as k, defineComponent as K, computed as z, useTemplateRef as w, watch as A, onBeforeUnmount as L, openBlock as v, createElementBlock as y, unref as p, withModifiers as H, createElementVNode as n, toDisplayString as u, createCommentVNode as x, Fragment as $, renderList as S } from "vue";
import { defineStore as C, storeToRefs as N } from "pinia";
import { useI18n as T } from "vue-i18n";
import "tiny-emitter";
import { F as D } from "./main-CUttai9y.js";
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
const F = { en: { "keyboardnav.activeNamespace": "Namespace Active: {name}", "keyboardnav.helpTitle": "Keyboard Shortcuts", "keyboardnav.keysTitle": "Keys for {name}", "keyboardnav.helpDescription": "To use keyboard shortcuts refer to the global list below or start by activating a feature group using the combo <span class='key indigo'>SHIFT + [letter]</span>. Once a group is active, its specific shortcuts will appear beneath it. Use <span class='key zinc'>[key]</span> to trigger individual actions within that group.", "keyboardnav.noShortcuts": "No shortcuts available.", "keyboardnav.mainShortcuts.title": "Global controls", "keyboardnav.mainShortcuts.numbers": "Focus on an open panel (1 being leftmost)", "keyboardnav.mainShortcuts.escape": "Close a focused panel" }, fr: { "keyboardnav.activeNamespace": "Espace de noms actif : {name}", "keyboardnav.helpTitle": "Raccourcis clavier", "keyboardnav.keysTitle": "Raccourcis pour {name}", "keyboardnav.helpDescription": "Pour utiliser les raccourcis clavier, consultez la liste globale ci-dessous ou commencez par activer un groupe de fonctionnalités avec la combinaison <span class='key indigo'>SHIFT + [lettre]</span>. Une fois le groupe actif, ses raccourcis spécifiques apparaîtront en dessous. Utilisez <span class='key zinc'>[touche]</span> pour déclencher les actions individuelles de ce groupe.", "keyboardnav.noShortcuts": "Aucun raccourci disponible.", "keyboardnav.mainShortcuts.title": "Contrôles globaux", "keyboardnav.mainShortcuts.numbers": "Concentrer sur un panneau ouvert (1 étant le plus à gauche)", "keyboardnav.mainShortcuts.escape": "Fermer un panneau en focus" } }, _ = C("keyboardnav", () => {
  const c = k(null), e = k({}), s = k(!1), d = ["H", "?"];
  function o() {
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (const t of i)
      if (!e.value[t] && !d.includes(t)) return t;
    return null;
  }
  function a(i, t) {
    let r = i.toUpperCase();
    if (d.includes(r) || e.value[r]) {
      const l = o();
      l ? r = l : console.error("No available keyboard namespace letters");
    }
    if (!t.handler)
      for (const l of t.keys)
        l.handler || console.error(
          `Keyboardnav registration for ${r} requires handlers for all keys or a parent handler`
        );
    return e.value[r] = t, r;
  }
  function m(i) {
    s.value !== i && (s.value = i);
  }
  function f(i) {
    c.value === i && (c.value = null), delete e.value[i];
  }
  function h(i, t) {
    c.value = i, e.value[i]?.activeHandler?.(t);
  }
  function b(i) {
    c.value && e.value[c.value]?.deactiveHandler?.(i), c.value = null;
  }
  function g(i, t) {
    const r = c.value;
    if (!r) return;
    const l = e.value[r];
    l && (l.handler ? l.handler(i, t) : l.keys.find((E) => E.key === i)?.handler?.(t));
  }
  return {
    activeNamespace: c,
    namespaces: e,
    helpVisible: s,
    register: a,
    unregister: f,
    activate: h,
    deactivate: b,
    trigger: g,
    setHelpVisible: m
  };
}), I = {
  class: "relative w-[640px] max-h-[80vh] overflow-y-auto rounded-xl bg-white py-8 px-10 shadow-xl",
  role: "dialog",
  "aria-modal": "true",
  "aria-live": "polite"
}, U = { class: "border-b border-gray-200 bg-white px-4 py-20 sm:px-24" }, V = { class: "text-base font-semibold text-gray-900" }, R = ["innerHTML"], B = {
  role: "list",
  class: "m-0 max-w-[calc(var(--container-lg)-(--spacing(8)))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
}, M = { class: "pl-24 mb-8 py-16" }, O = { class: "flex items-center gap-x-12" }, j = { class: "font-mono text-md text-zinc-600" }, q = { class: "space-y-4 p-16 pl-24" }, P = { class: "flex items-center gap-x-12" }, G = { class: "font-mono text-md text-zinc-600" }, J = { class: "flex items-center gap-x-12" }, Q = { class: "font-mono text-md text-zinc-600" }, W = {
  key: 0,
  class: "pl-24 mb-8 py-16 border-b"
}, X = { class: "font-mono text-md text-zinc-600" }, Y = { class: "flex items-center gap-x-12" }, Z = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-indigo-300 bg-indigo-400/10 text-indigo-500 dark:ring-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-400" }, ee = { class: "font-mono text-md text-zinc-600" }, te = {
  key: 0,
  class: "space-y-4 p-16 pl-24"
}, ne = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, ie = { class: "font-mono text-md text-zinc-600" }, se = /* @__PURE__ */ K({
  __name: "keyboardnav",
  setup(c) {
    const e = _(), { activeNamespace: s, namespaces: d, helpVisible: o } = N(e), { t: a } = T(), m = z(() => Object.keys(d.value)), f = z(() => {
      const i = s.value;
      return i ? d.value[i]?.keys || [] : [];
    }), h = w("overlayRef");
    function b() {
      e.setHelpVisible(!1);
    }
    function g(i) {
      const t = i.target;
      h.value && t && !h.value.contains(t) && b();
    }
    return A(o, (i) => {
      i ? document.addEventListener("focusin", g) : document.removeEventListener("focusin", g);
    }), L(() => {
      document.removeEventListener("focusin", g);
    }), (i, t) => (v(), y("div", null, [
      p(o) ? (v(), y("div", {
        key: 0,
        ref_key: "overlayRef",
        ref: h,
        onClick: H(b, ["self"]),
        class: "absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity",
        tabindex: "-1"
      }, [
        n("div", I, [
          n("button", {
            class: "absolute right-8 top-8 rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
            onClick: b
          }, u(p(a)("panels.controls.close")), 1),
          n("div", U, [
            n("h3", V, u(p(a)("keyboardnav.helpTitle")), 1),
            n("div", {
              innerHTML: p(a)("keyboardnav.helpDescription"),
              class: "mt-6 text-sm text-gray-500"
            }, null, 8, R)
          ]),
          n("ul", B, [
            n("li", M, [
              n("div", O, [
                n("span", j, u(p(a)("keyboardnav.mainShortcuts.title")), 1)
              ]),
              n("div", q, [
                n("div", P, [
                  t[0] || (t[0] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " 1-5 ", -1)),
                  t[1] || (t[1] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                  n("span", G, u(p(a)("keyboardnav.mainShortcuts.numbers")), 1)
                ]),
                n("div", J, [
                  t[2] || (t[2] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " ESC ", -1)),
                  t[3] || (t[3] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                  n("span", Q, u(p(a)("keyboardnav.mainShortcuts.escape")), 1)
                ])
              ])
            ]),
            m.value.length === 0 ? (v(), y("li", W, [
              n("p", X, u(p(a)("keyboardnav.noShortcuts")), 1)
            ])) : x("", !0),
            (v(!0), y($, null, S(m.value, (r) => (v(), y("li", {
              key: r,
              class: "pl-24 mb-8 py-16 border-b"
            }, [
              n("div", Y, [
                n("span", Z, " SHIFT + " + u(r), 1),
                t[4] || (t[4] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", ee, u(p(a)(`keyboardnav.ns.${r}`)), 1)
              ]),
              p(s) === r ? (v(), y("div", te, [
                (v(!0), y($, null, S(f.value, (l) => (v(), y("div", {
                  key: l.key,
                  class: "flex items-center gap-x-12"
                }, [
                  n("span", ne, u(l.key), 1),
                  t[5] || (t[5] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                  n("span", ie, u(p(a)(`keyboardnav.key.${r}.${l.key}`)), 1)
                ]))), 128))
              ])) : x("", !0)
            ]))), 128))
          ])
        ])
      ], 512)) : x("", !0)
    ]));
  }
});
class oe extends D {
  keyboardnavStore = _(this.$vApp.$pinia);
  _isInput(e) {
    return !e || !(e instanceof HTMLElement) ? !1 : !!e.closest('input, textarea, [contenteditable="true"]');
  }
  /**
   * Register a namespace letter and its keyboard options.
   *
   * @param namespace requested namespace letter.
   * @param options registration object describing keys and handlers.
   * @returns final namespace letter used for registration.
   */
  register(e, s) {
    const d = e.toUpperCase(), o = this.keyboardnavStore.register(d, s), a = `keyboardnav.ns.${o}`;
    return Object.entries(s.name).forEach(([m, f]) => {
      this.$iApi.$i18n.mergeLocaleMessage(m, { [a]: f });
    }), s.keys.forEach((m) => {
      const f = `keyboardnav.key.${o}.${m.key}`;
      Object.entries(m.description).forEach(([h, b]) => {
        this.$iApi.$i18n.mergeLocaleMessage(h, { [f]: b });
      });
    }), o;
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
    if (this._isInput(e.target)) return;
    if (!e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) {
      if (/^[1-5]$/.test(e.key)) {
        const d = parseInt(e.key) - 1, o = this.$iApi.panel.visible[d];
        o && (e.preventDefault(), this.$iApi.panel.focus(o));
        return;
      } else if (e.key === "Escape") {
        const o = e.target.closest("[data-cy]");
        if (o && this.$iApi.$rootEl?.querySelector(".panel-container")?.contains(o)) {
          e.preventDefault();
          const a = o.getAttribute("data-cy");
          a && this.$iApi.panel.close(a);
        }
        return;
      }
    }
    const s = e.key.toUpperCase();
    e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey ? s in this.keyboardnavStore.namespaces && (e.preventDefault(), this.keyboardnavStore.activeNamespace === s ? this.keyboardnavStore.deactivate(e) : this.keyboardnavStore.activate(s, e)) : !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && s.length === 1 && this.keyboardnavStore.activeNamespace && (e.preventDefault(), this.keyboardnavStore.trigger(s, e));
  };
  _handleKeyUp = (e) => {
    this._isInput(e.target) || (e.key.toUpperCase() === "H" || e.key === "?") && e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey && (e.preventDefault(), this.keyboardnavStore.setHelpVisible(!this.keyboardnavStore.helpVisible));
  };
  _handleBlur = (e) => {
    this.keyboardnavStore.deactivate(e), this.keyboardnavStore.setHelpVisible(!1);
  };
}
class je extends oe {
  added() {
    Object.entries(F).forEach(
      (o) => this.$iApi.$i18n.mergeLocaleMessage(...o)
    );
    const { destroy: e, el: s } = this.mount(se, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]), super.added(), this.removed = () => {
      super.removed(), e(), _(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  je as default
};
