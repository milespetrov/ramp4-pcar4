import { fw as M, fx as B, fC as H, fE as u, fI as x, fH as s, fD as _, fM as r, fL as b, fK as I, fW as N, fG as C, ik as A, gu as D, fY as T, kK as K, fO as z, kZ as q, fA as F, fP as v, fS as U, fT as G, fV as J, fB as P, fF as L, fX as W, ij as X, hg as Y, it as Z, iv as Q, fJ as ee, fN as te, l9 as ne } from "./main-n1d2W0Ts.js";
import { m as k } from "./marked.esm-DgqJBp_S.js";
const oe = { key: 0 }, ae = ["content"], se = { class: "text-lg text-left flex-grow" }, le = ["innerHTML"], ie = /* @__PURE__ */ M({
  __name: "section",
  props: {
    helpSection: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    const { t: w } = B();
    return (y, l) => {
      const f = H("tippy");
      return i.helpSection.drawn ? (u(), x("div", oe, [
        s("div", null, [
          _((u(), x("button", {
            type: "button",
            class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
            onClick: l[0] || (l[0] = (p) => y.$emit("expand")),
            content: r(w)(i.helpSection.expanded ? "help.section.collapse" : "help.section.expand")
          }, [
            s("span", se, b(i.helpSection.header), 1),
            s("div", {
              class: I(["dropdown-icon", { "transform -rotate-180": i.helpSection.expanded }])
            }, l[1] || (l[1] = [
              s("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24"
              }, [
                s("path", {
                  d: "M0 0h24v24H0V0z",
                  fill: "none"
                }),
                s("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)
          ], 8, ae)), [
            [f, { placement: "top-end", hideOnClick: !1 }]
          ]),
          N(D, {
            name: "help-item",
            mode: "out-in"
          }, {
            default: C(() => [
              _(s("div", {
                innerHTML: i.helpSection.info,
                class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
              }, null, 8, le), [
                [A, i.helpSection.expanded]
              ])
            ]),
            _: 1
          })
        ])
      ])) : T("", !0);
    };
  }
}), re = /* @__PURE__ */ K(ie, [["__scopeId", "data-v-7dc61532"]]), pe = { class: "h-26 mb-8 mx-8" }, de = ["placeholder", "aria-label"], ce = { key: 0 }, he = /* @__PURE__ */ M({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    const w = z("iApi"), y = q(), { t: l } = B(), f = F(() => y.location), p = v([]), S = v([]), $ = v([]), E = v(!1);
    let h, m;
    function O(e, o) {
      const t = o.info.split(/(<[^>]*>)/);
      for (const [n, a] of t.entries())
        if (n % 2 === 0 && a.toLowerCase().indexOf(e.toLowerCase()) > -1)
          return !0;
      return !1;
    }
    function R(e, o) {
      const n = S.value[o].split(/(<[^>]*>)/);
      let a = "";
      for (const [g, d] of n.entries())
        g % 2 === 0 ? a += d.replace(
          new RegExp(e, "gi"),
          (c) => `<mark>${c}</mark>`
        ) : a += d;
      p.value[o].info = a;
    }
    function V(e, o) {
      h = 0, o.forEach((t, n) => {
        t.info = S.value[n], t.drawn = O(e, t) || t.header.toLowerCase().indexOf(e.toLowerCase()) > -1, h = t.drawn ? h + 1 : h, t.expanded = t.drawn && e.length > 2, t.drawn && e.length > 2 && R(e, n);
      }), E.value = h === 0;
    }
    function j(e) {
      e.expanded = !e.expanded;
    }
    return U(() => {
      $.value.push(
        G(
          () => w.language,
          (e, o) => {
            if (e === o) return;
            const t = new k.Renderer(), n = f.value.slice(-1) === "/" ? f.value : `${f.value}/`;
            t.image = (a, g, d) => (a.indexOf("http") === -1 && (a = `${n}images/` + a), `<img src="${a}" alt="${d}">`), ne.get(`${n}${e}.md`).then((a) => {
              const g = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;
              let d = a.data.replace(new RegExp("\r", "g"), "");
              p.value = [];
              let c;
              for (; c = g.exec(d); )
                p.value.push({
                  header: c[1],
                  // parse markdown on info section, split/splice/join removes the header
                  // since we can't put info section into its own regex grouping
                  info: k(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  }),
                  drawn: !0,
                  expanded: !1
                }), S.value.push(
                  k(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  })
                );
            });
          },
          { immediate: !0 }
        )
      );
    }), J(() => {
      $.value.forEach((e) => e());
    }), (e, o) => {
      const t = P("panel-screen");
      return u(), L(t, { panel: i.panel }, {
        header: C(() => [
          W(b(r(l)("help.title")), 1)
        ]),
        content: C(() => [
          s("div", pe, [
            _(s("input", {
              type: "search",
              class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
              placeholder: r(l)("help.search"),
              "onUpdate:modelValue": o[0] || (o[0] = (n) => Y(m) ? m.value = n : m = n),
              "aria-label": r(l)("help.search"),
              onInput: o[1] || (o[1] = (n) => V(r(m), p.value)),
              onKeypress: o[2] || (o[2] = Z(Q(() => {
              }, ["prevent"]), ["enter"])),
              enterkeyhint: "done"
            }, null, 40, de), [
              [X, r(m)]
            ])
          ]),
          E.value ? (u(), x("div", ce, [
            s("p", null, b(r(l)("help.noResults")), 1)
          ])) : T("", !0),
          (u(!0), x(te, null, ee(p.value, (n, a) => (u(), L(re, {
            helpSection: n,
            key: a,
            onExpand: (g) => j(n)
          }, null, 8, ["helpSection", "onExpand"]))), 128))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  he as default
};
//# sourceMappingURL=screen-C0Qrv-tm.js.map
