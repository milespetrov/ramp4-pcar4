import { fw as x, fx as L, fO as b, fP as A, fU as B, fV as C, fA as I, fB as w, fC as i, fF as l, fG as p, fE as n, fX as D, fL as N, fM as s, fW as V, fD as j, fI as u, fN as F, fJ as M, gN as f } from "./main-n1d2W0Ts.js";
const O = ["content"], U = /* @__PURE__ */ x({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const v = f(() => import("./header-CGH4bSf6.js")), m = f(() => import("./item-0e1W3QPM.js")), { t: r } = L(), _ = b("iApi"), e = A(), a = () => {
      e.value._tippy.hide();
    }, o = (t) => {
      t.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    B(() => {
      e.value?.addEventListener("blur", a), e.value?.addEventListener("keyup", o);
    }), C(() => {
      e.value?.removeEventListener("blur", a), e.value?.removeEventListener("keyup", o);
    });
    const g = I(() => {
      let t = _.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, y) => {
      const h = w("panel-screen"), k = i("focus-list"), E = i("tippy");
      return n(), l(h, { panel: d.panel }, {
        header: p(() => [
          D(N(s(r)("legend.title")), 1)
        ]),
        content: p(() => [
          V(s(v)),
          j((n(), u("div", {
            content: s(r)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (n(!0), u(F, null, M(g.value, (c) => (n(), l(s(m), {
              legendItem: c,
              key: c.uid
            }, null, 8, ["legendItem"]))), 128))
          ], 8, O)), [
            [k],
            [E, {
              trigger: "manual",
              placement: "top-end",
              maxWidth: 190
            }]
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  U as default
};
//# sourceMappingURL=screen-qhJVpUR7.js.map
