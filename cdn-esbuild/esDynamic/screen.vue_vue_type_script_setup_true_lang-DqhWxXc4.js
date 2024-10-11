import { bC as C, bD as y, fA as z, fB as k, bI as f, bJ as $, bK as M, bS as V, bN as i, bL as L, bM as p, fC as e, bT as x, bV as O, fD as w, bP as h, bQ as a, bU as j, bE as D, bF as S, fE as N, fF as R, fG as A, fH as F, bG as P, bH as q, bR as H, bO as I, fI as T } from "./main-B46PFZ13.js";
const G = ["onClick", "aria-label"], U = { class: "md-icon-small inline" }, J = /* @__PURE__ */ C({
  __name: "settings-button",
  props: {
    componentSelectedState: {
      type: Object,
      required: !0
    }
  },
  setup(_) {
    const { t: n } = y(), d = z(), g = k(), s = f(
      () => d.mobileView ? "top-end" : "left-end"
    ), u = (c) => {
      c.selectable && g.toggleSelected({
        name: c.name
      });
    };
    return (c, l) => {
      const m = $("dropdown-menu"), b = M("focus-item");
      return V((i(), L(m, {
        position: s.value,
        tooltip: a(n)("export.menu"),
        tooltipPlacement: "top"
      }, {
        header: p(() => l[0] || (l[0] = [
          e("div", { class: "flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8" }, [
            e("svg", {
              class: "fill-current w-24 h-24 m-auto",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              e("g", null, [
                e("path", {
                  d: "M0,0h24v24H0V0z",
                  fill: "none"
                }),
                e("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })
              ])
            ])
          ], -1)
        ])),
        default: p(() => [
          (i(!0), x(j, null, O(_.componentSelectedState, (o) => (i(), x("a", {
            key: o.name,
            onClick: (v) => u(o),
            href: "javascript:;",
            class: w(`text-left text-sm sm:text-base ${o.selectable ? "cursor-pointer" : "cursor-default"}`),
            "aria-label": o.name
          }, [
            e("div", U, [
              (i(), x("svg", {
                height: "20",
                width: "20",
                viewBox: "0 0 24 24",
                class: w(`inline mx-8 ${o.selected ? "" : "invisible"}`)
              }, l[1] || (l[1] = [
                e("g", null, [
                  e("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2)),
              e("span", {
                class: w(`inline ${o.selectable ? "" : "text-gray-300"}
                    `)
              }, h(a(n)(`export.menu.component.${o.name}`)), 3)
            ])
          ], 10, G))), 128))
        ]),
        _: 1
      }, 8, ["position", "tooltip"])), [
        [b]
      ]);
    };
  }
}), K = { ref: "componentEl" }, Q = { class: "flex" }, W = ["aria-label"], X = ["aria-label"], Z = /* @__PURE__ */ C({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(_) {
    const { t: n } = y(), d = D("iApi"), g = k(), s = S(), u = S(void 0), c = S([]), l = N("componentEl"), m = f(
      () => g.componentSelectedState
    ), b = f(() => {
      let r = {};
      return s.value && Object.keys(m.value).forEach(
        (t) => {
          r[t] = {
            name: t,
            selected: m.value[t] ?? !1,
            selectable: (s.value?.config)[t]?.selectable ?? !0
          };
        }
      ), r;
    }), o = f(() => !!s.value?.customRendererFunc), v = R(300, () => {
      if (!s.value)
        return;
      const r = l.value.querySelector(
        ".export-canvas"
      );
      s.value.make(r, l.value.clientWidth);
    });
    return A(() => {
      c.value.push(
        // Listen for any changes to the settings, and refresh the image when they do change
        F(b, () => {
          v();
        })
      );
    }), P(() => {
      s.value = d.fixture.get("export"), u.value = new ResizeObserver(() => {
        v();
      }), u.value.observe(d?.$vApp.$root?.$el);
    }), q(() => {
      u.value.disconnect(), c.value.forEach((r) => r());
    }), (r, t) => {
      const B = $("panel-screen");
      return i(), x("div", K, [
        H(B, {
          panel: _.panel,
          footer: !0
        }, {
          header: p(() => [
            I(h(a(n)("export.title")), 1)
          ]),
          content: p(() => t[2] || (t[2] = [
            e("div", { class: "overflow-hidden border border-gray-200" }, [
              e("canvas", { class: "export-canvas !w-[100%]" })
            ], -1)
          ])),
          footer: p(() => [
            e("div", Q, [
              e("button", {
                type: "button",
                onClick: t[0] || (t[0] = (E) => s.value?.export()),
                class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
                "aria-label": a(n)("export.download")
              }, h(a(n)("export.download")), 9, W),
              e("button", {
                type: "button",
                onClick: t[1] || (t[1] = (E) => a(v)()),
                class: "py-8 px-4 sm:px-16",
                "aria-label": a(n)("export.refresh")
              }, h(a(n)("export.refresh")), 9, X),
              o.value ? T("", !0) : (i(), L(J, {
                key: 0,
                componentSelectedState: b.value,
                class: "ml-auto flex px-4 sm:px-8"
              }, null, 8, ["componentSelectedState"]))
            ])
          ]),
          _: 1
        }, 8, ["panel"])
      ], 512);
    };
  }
});
export {
  Z as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-DqhWxXc4.js.map
