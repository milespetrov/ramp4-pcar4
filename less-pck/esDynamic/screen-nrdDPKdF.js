import { fw as U, fx as z, fO as N, l4 as M, fA as j, fC as m, fE as t, fI as a, fD as f, fM as x, fH as l, fK as _, fN as h, fJ as b, fL as B, iv as C, it as D, fY as V, kK as K, fQ as O, fP as S, fU as A, fV as q, fB as F, fF as H, fG as L, fX as E, fW as W } from "./main-n1d2W0Ts.js";
const G = { class: "mb-10" }, J = ["aria-label"], P = {
  key: 0,
  class: "w-full h-30 hidden"
}, Q = ["alt", "src"], R = ["alt", "src"], X = ["alt"], Y = { class: "pl-5" }, Z = { class: "ml-auto pr-5" }, ee = ["content"], te = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
}, ae = /* @__PURE__ */ U({
  __name: "item",
  props: {
    basemap: {
      type: Object,
      required: !0
    },
    tileSchema: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const { t: v } = z(), y = N("iApi"), i = M(), c = j(() => i.activeBasemapConfig), u = (r) => {
      r.id !== c.value.id && y?.geo.map.setBasemap(r.id);
    };
    return (r, s) => {
      const g = m("truncate"), n = m("tippy"), d = m("focus-item");
      return t(), a("div", G, [
        f((t(), a("button", {
          class: "basemap-item-button bg-gray-300 w-full h-full",
          type: "button",
          "aria-label": x(v)("basemap.select"),
          onClick: s[2] || (s[2] = (o) => u(e.basemap))
        }, [
          l("div", null, [
            l("div", {
              class: _(["flex hover:opacity-50 basemap-item-image basemap-item-container", e.basemap.hideThumbnail ? "h-30" : "h-180"])
            }, [
              e.basemap.hideThumbnail ? (t(), a("div", P)) : e.basemap.thumbnailUrl ? (t(), a("img", {
                key: 1,
                class: "w-full h-180",
                alt: e.basemap.altText,
                src: e.basemap.thumbnailUrl
              }, null, 8, Q)) : e.tileSchema.thumbnailTileUrls && e.tileSchema.thumbnailTileUrls.length > 0 && e.basemap.layers.every((o) => o.layerType === "esri-tile") ? (t(!0), a(h, { key: 2 }, b(e.basemap.layers, (o) => (t(), a("div", {
                key: o.id,
                class: "flex basemap-item-inner h-180"
              }, [
                (t(!0), a(h, null, b(e.tileSchema.thumbnailTileUrls, (w, k) => (t(), a("img", {
                  class: "w-full",
                  alt: e.basemap.altText,
                  src: o.url + w,
                  key: k
                }, null, 8, R))), 128))
              ]))), 128)) : (t(), a("img", {
                key: 3,
                class: "w-full bg-white h-180",
                alt: e.basemap.altText,
                src: "https://openclipart.org/image/800px/275366"
              }, null, 8, X))
            ], 2)
          ]),
          l("div", {
            class: _(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", e.basemap.hideThumbnail && e.basemap.id === c.value.id ? "opacity-85" : "opacity-75"])
          }, [
            f((t(), a("div", Y, [
              l("span", null, B(e.basemap.name), 1)
            ])), [
              [g]
            ]),
            l("div", Z, [
              f((t(), a("a", {
                onClick: s[0] || (s[0] = C(() => {
                }, ["stop"])),
                onKeydown: s[1] || (s[1] = D(C(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: e.basemap.description
              }, s[3] || (s[3] = [
                l("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  l("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  l("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, ee)), [
                [n, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ])
          ], 2),
          e.basemap.id === c.value.id && !e.basemap.hideThumbnail ? (t(), a("div", te, s[4] || (s[4] = [
            l("svg", {
              class: "fill-current w-25 h-25 relative",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              l("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
            ], -1)
          ]))) : V("", !0)
        ], 8, J)), [
          [d]
        ])
      ]);
    };
  }
}), se = /* @__PURE__ */ K(ae, [["__scopeId", "data-v-7cf27f80"]]), le = ["content"], ie = { class: "h-600 overflow-y-auto" }, ne = { class: "font-bold text-xl" }, oe = {
  key: 0,
  class: "border-t border-b border-gray-600"
}, re = /* @__PURE__ */ U({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: v } = z(), y = M(), i = O("el"), c = S([]), u = S([]), r = (n) => {
      n.key === "Tab" && i.value?.matches(":focus") && i.value._tippy.show();
    }, s = () => {
      i.value._tippy.hide();
    };
    A(() => {
      const n = y.config.map;
      c.value = n.tileSchemas, u.value = n.basemaps, i.value?.addEventListener("blur", s), i.value?.addEventListener("keyup", r);
    }), q(() => {
      i.value?.removeEventListener("blur", s), i.value?.removeEventListener("keyup", r);
    });
    const g = (n) => u.value.filter((d) => d.tileSchemaId === n);
    return (n, d) => {
      const o = F("panel-screen"), w = m("truncate"), k = m("focus-list"), $ = m("tippy");
      return t(), H(o, { panel: e.panel }, {
        header: L(() => [
          E(B(x(v)("basemap.title")), 1)
        ]),
        content: L(() => [
          f((t(), a("div", {
            content: x(v)("panels.controls.items"),
            ref_key: "el",
            ref: i
          }, [
            l("div", ie, [
              (t(!0), a(h, null, b(c.value, (p, I) => (t(), a("div", {
                class: "mx-5",
                key: p.id
              }, [
                l("div", {
                  class: _((I === 0 ? "mt-5" : "mt-36") + " flex mb-5")
                }, [
                  f((t(), a("h3", ne, [
                    E(B(p.name), 1)
                  ])), [
                    [w]
                  ])
                ], 2),
                u.value.length > 0 ? (t(), a("ul", oe, [
                  (t(!0), a(h, null, b(g(p.id), (T) => (t(), a("li", {
                    key: T.id
                  }, [
                    W(se, {
                      basemap: T,
                      tileSchema: p,
                      class: "block relative overflow-hidden"
                    }, null, 8, ["basemap", "tileSchema"])
                  ]))), 128))
                ])) : V("", !0)
              ]))), 128))
            ])
          ], 8, le)), [
            [k],
            [$, {
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
  re as default
};
//# sourceMappingURL=screen-nrdDPKdF.js.map
