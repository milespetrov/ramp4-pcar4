import { fw as _, fx as E, fO as w, fP as f, hH as h, fU as x, f_ as p, fV as y, fI as M, fH as A, fL as T, fM as I, fE as P, kK as R, bW as S } from "./main-n1d2W0Ts.js";
const B = { en: { "panguard.instructions": "Use two fingers to pan the map" }, fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" } }, D = { class: "pg-label" }, H = /* @__PURE__ */ _({
  __name: "map-panguard",
  setup(m) {
    const { t: c } = E(), t = w("iApi"), o = f(), a = f(-1), n = h([]), r = h([]);
    x(() => {
      u(), r.push(
        t.event.on(p.MAP_CREATED, () => {
          u();
        })
      ), r.push(
        t.event.on(p.MAP_DESTROYED, () => {
          n.forEach((e) => e.remove());
        })
      ), r.push(
        t.event.on(p.MAP_REFRESH_START, () => {
          n.forEach((e) => e.remove());
        })
      ), r.push(
        t.event.on(p.MAP_REFRESH_END, () => {
          u();
        })
      );
    }), y(() => {
      r.forEach((e) => t.event.off(e)), n.forEach((e) => e.remove());
    });
    const u = () => {
      const e = /* @__PURE__ */ new Map();
      t.geo.map.viewPromise.then(() => {
        n.push(
          t.geo.map.esriView.on("pointer-down", (s) => {
            s.pointerType === "touch" && e.set(s.pointerId, { x: s.x, y: s.y });
          })
        ), n.push(
          //@ts-ignore
          t.geo.map.esriView.on(["pointer-up", "pointer-leave"], (s) => {
            s.pointerType === "touch" && window.setTimeout(() => {
              e.delete(s.pointerId);
            }, 200);
          })
        ), n.push(
          t.geo.map.esriView.on("pointer-move", (s) => {
            const { pointerId: v, pointerType: g, x: d, y: l } = s, i = e.get(v);
            if (!i || g !== "touch" || e.size !== 1) {
              o.value.classList.remove("pg-active");
              return;
            }
            Math.sqrt(Math.pow(d - i.x, 2) + Math.pow(l - i.y, 2)) < 20 || (o.value.classList.add("pg-active"), a.value !== -1 && clearTimeout(a.value), a.value = window.setTimeout(() => {
              o.value.classList.remove("pg-active");
            }, 2e3), window.scrollBy(i.x - d, i.y - l));
          })
        );
      });
    };
    return (e, s) => (P(), M("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: o
    }, [
      A("p", D, T(I(c)("panguard.instructions")), 1)
    ], 512));
  }
}), V = /* @__PURE__ */ R(H, [["__scopeId", "data-v-e91f9000"]]);
class b extends S {
  added() {
    Object.entries(B).forEach((a) => this.$iApi.$i18n.mergeLocaleMessage(...a));
    const { destroy: c, el: t } = this.mount(V, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      c();
    };
  }
}
export {
  b as default
};
//# sourceMappingURL=index-7iikG6Hc.js.map
