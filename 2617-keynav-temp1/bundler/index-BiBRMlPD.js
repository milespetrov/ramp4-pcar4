import { defineComponent as A, computed as C, useTemplateRef as E, watch as $, onBeforeUnmount as w, createElementBlock as h, createCommentVNode as x, unref as l, openBlock as f, createElementVNode as n, toDisplayString as u, Fragment as z, renderList as _, normalizeClass as K } from "vue";
import { storeToRefs as L } from "pinia";
import { n as y, F as D, o as S, H } from "./main-4ftHFA3j.js";
import { useI18n as N } from "vue-i18n";
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
const T = { en: { "keyboardnav.activeNamespace": "Namespace Active: {name}", "keyboardnav.helpTitle": "Keyboard Shortcuts", "keyboardnav.keysTitle": "Keys for {name}", "keyboardnav.helpDescription": 'Press <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">S</span> to start fixture shortcuts then type the fixture key (for example <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">D</span>) followed by an action key like <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">L</span>. Use <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Escape</span> to clear the chain or <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Backspace</span> to undo the last key.', "keyboardnav.noShortcuts": "No shortcuts available.", "keyboardnav.mainShortcuts.title": "Global controls", "keyboardnav.mainShortcuts.numbers": "Focus on an open panel (1 being leftmost)", "keyboardnav.mainShortcuts.escape": "Clear the chain or close the focused panel", "keyboardnav.mainShortcuts.start": "Start or reset fixture shortcuts", "keyboardnav.mainShortcuts.backspace": "Remove the last key in the chain", "keyboardnav.chain.help": "Toggle shortcut guide" }, fr: { "keyboardnav.activeNamespace": "Espace de noms actif : {name}", "keyboardnav.helpTitle": "Raccourcis clavier", "keyboardnav.keysTitle": "Raccourcis pour {name}", "keyboardnav.helpDescription": `Appuyez sur <span class='key indigo'>S</span> pour dAcmarrer les raccourcis de module puis saisissez la touche du module (par exemple <span class='key indigo'>D</span>) suivie d'une touche d'action comme <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">L</span>. Utilisez <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Echap</span> pour effacer la chaAne ou <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Retour</span> pour enlever la derniA\\\\"re touche.`, "keyboardnav.noShortcuts": "Aucun raccourci disponible.", "keyboardnav.mainShortcuts.title": "ContrA'les globaux", "keyboardnav.mainShortcuts.numbers": "Concentrer sur un panneau ouvert (1 Actant le plus A� gauche)", "keyboardnav.mainShortcuts.escape": "Vider la chaAne ou fermer le panneau en focus", "keyboardnav.mainShortcuts.start": 'DAmarrer ou rA\\\\"initialiser les raccourcis de module', "keyboardnav.mainShortcuts.backspace": 'Retirer la derniA\\\\"re touche de la chaAne', "keyboardnav.chain.help": "Afficher ou masquer le guide des raccourcis" } }, R = {
  class: "relative w-[640px] max-h-[80vh] overflow-y-auto rounded-xl bg-white py-8 px-10 shadow-xl",
  role: "dialog",
  "aria-modal": "true",
  "aria-live": "polite"
}, B = { class: "border-b border-gray-200 bg-white px-4 py-20 sm:px-24" }, V = { class: "text-base font-semibold text-gray-900" }, M = ["innerHTML"], O = {
  role: "list",
  class: "m-0 max-w-[calc(var(--container-lg)-(--spacing(8)))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
}, I = { class: "pl-24 mb-8 py-16" }, j = { class: "flex items-center gap-x-12" }, F = { class: "font-mono text-md text-zinc-600" }, U = { class: "space-y-4 p-16 pl-24" }, P = { class: "flex items-center gap-x-12" }, q = { class: "font-mono text-md text-zinc-600" }, G = { class: "flex items-center gap-x-12" }, Y = { class: "font-mono text-md text-zinc-600" }, J = { class: "flex items-center gap-x-12" }, Q = { class: "font-mono text-md text-zinc-600" }, W = { class: "flex items-center gap-x-12" }, X = { class: "font-mono text-md text-zinc-600" }, Z = {
  key: 0,
  class: "pl-24 mb-8 py-16 border-b"
}, ee = { class: "font-mono text-md text-zinc-600" }, te = { class: "flex items-center gap-x-4" }, ne = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, ie = { class: "font-mono text-md text-zinc-600" }, se = {
  key: 0,
  class: "space-y-4 p-16 pl-24"
}, ae = { class: "flex items-center gap-x-4" }, re = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, oe = { class: "font-mono text-md text-zinc-600" }, ce = /* @__PURE__ */ A({
  __name: "keyboardnav",
  setup(v) {
    const s = y(), { activeNamespace: t, namespaces: e, helpVisible: p } = L(s), { t: r } = N(), m = C(
      () => Object.entries(e.value).map(([d, i]) => ({
        id: d,
        keys: i?.keys ?? []
      }))
    ), a = E("overlayRef");
    function c() {
      s.setHelpVisible(!1), s.resetChain({ suppressHandler: !0 });
    }
    function o(d) {
      const i = d.target;
      a.value && i && !a.value.contains(i) && c();
    }
    function b(d) {
      d.target === d.currentTarget && c();
    }
    return $(p, (d) => {
      d ? document.addEventListener("focusin", o) : document.removeEventListener("focusin", o);
    }), w(() => {
      document.removeEventListener("focusin", o);
    }), (d, i) => l(p) ? (f(), h("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: a,
      class: "absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity pointer-events-auto",
      tabindex: "-1",
      onClick: b
    }, [
      n("div", R, [
        n("button", {
          type: "button",
          class: "absolute right-8 top-8 rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
          onClick: c
        }, u(l(r)("panels.controls.close")), 1),
        n("div", B, [
          n("h3", V, u(l(r)("keyboardnav.helpTitle")), 1),
          n("div", {
            innerHTML: l(r)("keyboardnav.helpDescription"),
            class: "mt-6 text-sm text-gray-500"
          }, null, 8, M)
        ]),
        n("ul", O, [
          n("li", I, [
            n("div", j, [
              n("span", F, u(l(r)("keyboardnav.mainShortcuts.title")), 1)
            ]),
            n("div", U, [
              n("div", P, [
                i[0] || (i[0] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " 1-5 ", -1)),
                i[1] || (i[1] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", q, u(l(r)("keyboardnav.mainShortcuts.numbers")), 1)
              ]),
              n("div", G, [
                i[2] || (i[2] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " ESC ", -1)),
                i[3] || (i[3] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", Y, u(l(r)("keyboardnav.mainShortcuts.escape")), 1)
              ]),
              n("div", J, [
                i[4] || (i[4] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " S ", -1)),
                i[5] || (i[5] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", Q, u(l(r)("keyboardnav.mainShortcuts.start")), 1)
              ]),
              n("div", W, [
                i[6] || (i[6] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " Backspace ", -1)),
                i[7] || (i[7] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", X, u(l(r)("keyboardnav.mainShortcuts.backspace")), 1)
              ])
            ])
          ]),
          m.value.length === 0 ? (f(), h("li", Z, [
            n("p", ee, u(l(r)("keyboardnav.noShortcuts")), 1)
          ])) : x("", !0),
          (f(!0), h(z, null, _(m.value, (g) => (f(), h("li", {
            key: g.id,
            class: "pl-24 mb-8 py-16 border-b"
          }, [
            n("div", {
              class: K(["flex items-center gap-x-12", { "opacity-60": l(t) && l(t) !== g.id }])
            }, [
              n("div", te, [
                i[8] || (i[8] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, "S", -1)),
                n("span", ne, u(g.id), 1)
              ]),
              i[9] || (i[9] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
              n("span", ie, u(l(r)(`keyboardnav.ns.${g.id}`)), 1)
            ], 2),
            g.keys.length ? (f(), h("div", se, [
              (f(!0), h(z, null, _(g.keys, (k) => (f(), h("div", {
                key: k.key,
                class: "flex items-center gap-x-12"
              }, [
                n("div", ae, [
                  n("span", re, u(k.key), 1)
                ]),
                i[10] || (i[10] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", oe, u(l(r)(`keyboardnav.key.${g.id}.${k.key}`)), 1)
              ]))), 128))
            ])) : x("", !0)
          ]))), 128))
        ])
      ])
    ], 512)) : x("", !0);
  }
});
class le extends D {
  keyboardnavStore = y(this.$vApp.$pinia);
  _isInput(s) {
    return !s || !(s instanceof HTMLElement) ? !1 : !!s.closest('input, textarea, [contenteditable="true"]');
  }
  /**
   * Register a namespace letter and its keyboard options.
   *
   * @param namespace requested namespace letter.
   * @param options registration object describing keys and handlers.
   * @returns final namespace letter used for registration.
   */
  register(s, t) {
    const e = s.toUpperCase(), p = this.keyboardnavStore.register(e, t), r = `keyboardnav.ns.${p}`;
    return Object.entries(t.name).forEach(([m, a]) => {
      this.$iApi.$i18n.mergeLocaleMessage(m, { [r]: a });
    }), t.keys.forEach((m) => {
      const a = `keyboardnav.key.${p}.${m.key}`;
      Object.entries(m.description).forEach(([c, o]) => {
        this.$iApi.$i18n.mergeLocaleMessage(c, { [a]: o });
      });
    }), p;
  }
  /** @internal */
  added() {
    const s = this.$iApi.$rootEl;
    s?.addEventListener("keydown", this._handleKeyDown), s?.addEventListener("blur", this._handleBlur);
  }
  /** @internal */
  removed() {
    const s = this.$iApi.$rootEl;
    s?.removeEventListener("keydown", this._handleKeyDown), s?.removeEventListener("blur", this._handleBlur);
  }
  _handleKeyDown = (s) => {
    if (!(s instanceof KeyboardEvent)) return;
    const t = s;
    if (this._isInput(t.target)) return;
    const e = this.keyboardnavStore, p = e.keyChain, r = t.altKey || t.ctrlKey || t.metaKey;
    if (!t.shiftKey && !r && !p.length && /^[1-5]$/.test(t.key)) {
      const c = parseInt(t.key, 10) - 1, o = this.$iApi.panel.visible[c];
      o && (t.preventDefault(), this.$iApi.panel.focus(o));
      return;
    }
    const m = t.key, a = m.length === 1 ? m.toUpperCase() : m;
    if (!r && a === "Escape" && e.helpVisible) {
      t.preventDefault(), e.setHelpVisible(!1), e.resetChain({ suppressHandler: !0 });
      return;
    }
    if (!t.shiftKey && !r && a === S) {
      t.preventDefault();
      const c = e.chainState === "complete";
      e.resetChain({ suppressHandler: c }), e.setChain([S]), e.setLastAction(null), e.setChainState("awaitNamespace");
      return;
    }
    if (e.chainState === "idle") {
      if (a === "Escape" && !t.shiftKey && !r) {
        const o = t.target.closest("[data-cy]");
        if (o && this.$iApi.$rootEl?.querySelector(".panel-container")?.contains(o)) {
          t.preventDefault();
          const b = o.getAttribute("data-cy");
          b && this.$iApi.panel.close(b);
        }
      }
      return;
    }
    if (a === "Escape") {
      t.preventDefault(), e.resetChain({ event: t });
      return;
    }
    if (a === "Backspace") {
      if (!p.length) return;
      t.preventDefault();
      const c = e.chainState;
      if (e.setLastAction(null), e.popChain(), !e.keyChain.length) {
        e.resetChain({ suppressHandler: !0 });
        return;
      }
      if (e.keyChain.length === 1) {
        e.setChainState("awaitNamespace"), e.deactivate(t);
        return;
      }
      if (e.keyChain.length === 2) {
        e.setChainState("awaitAction");
        const o = e.keyChain[1];
        c === "complete" && o && e.activate(o, t, { suppressHandler: !1 });
        return;
      }
      return;
    }
    if (!(t.shiftKey || r)) {
      if (e.chainState === "awaitNamespace") {
        const c = Object.keys(e.namespaces);
        if (a === "H") {
          t.preventDefault(), e.appendKey("H"), e.setLastAction({ namespace: H, key: "H" }), e.finalizeChain({ event: t }), e.setHelpVisible(!e.helpVisible);
          return;
        }
        if (c.includes(a)) {
          t.preventDefault(), e.appendKey(a), e.setLastAction(null), e.activate(a, t), e.setChainState("awaitAction");
          return;
        }
        return;
      }
      if (e.chainState === "awaitAction") {
        const c = e.activeNamespace ?? (p[1] || ""), o = e.namespaces[c];
        if (!o) {
          e.resetChain({ suppressHandler: !0 });
          return;
        }
        if (!o.keys.map((i) => i.key.toUpperCase()).includes(a))
          return;
        t.preventDefault(), e.appendKey(a);
        const d = e.trigger(a, t);
        if (d?.chainAction)
          return;
        d && e.setLastAction(d), e.finalizeChain({ event: t });
        return;
      }
    }
  };
  _handleBlur = () => {
    this.keyboardnavStore.resetChain(), this.keyboardnavStore.setHelpVisible(!1);
  };
}
class Ge extends le {
  added() {
    Object.entries(T).forEach(
      (p) => this.$iApi.$i18n.mergeLocaleMessage(...p)
    );
    const { destroy: s, el: t } = this.mount(ce, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), super.added(), this.removed = () => {
      super.removed(), s(), y(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  Ge as default
};
