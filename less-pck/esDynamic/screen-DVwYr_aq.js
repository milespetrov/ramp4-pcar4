import { fw as V, fx as A, kY as B, fy as Z, fA as L, fR as O, fC as R, fE as t, fI as o, fH as r, fK as J, fM as c, it as K, iv as U, fD as x, fX as S, fY as k, fO as I, fP as C, fS as W, fT as Q, fU as X, fV as Y, fL as _, fN as z, fJ as G, f_ as ee, kK as te, hL as se, fB as oe, fF as D, fG as H, fW as j, mu as ae, mv as ne } from "./main-n1d2W0Ts.js";
const re = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, le = ["placeholder", "value", "aria-label"], ce = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, ie = ["aria-label", "content"], ue = /* @__PURE__ */ V({
  __name: "search-bar",
  setup(T) {
    const { t: a } = A(), u = B(), i = Z(), m = L(() => u.searchVal), n = L(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((d) => u.searchVal.includes(d)).join("")
    ), l = (d) => {
      u.setSearchTerm(d), u.setSearchRegex(d);
    }, b = O(500, (d) => {
      l(d);
    });
    return (d, s) => {
      const e = R("tippy");
      return t(), o("div", re, [
        r("input", {
          type: "text",
          class: J(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": n.value }]),
          placeholder: c(a)("geosearch.searchText"),
          value: m.value,
          onInput: s[0] || (s[0] = (p) => c(b)(p.target.value)),
          onKeyup: s[1] || (s[1] = K((p) => {
            c(i).mobileView && p.target.blur();
          }, ["enter"])),
          "aria-label": c(a)("geosearch.searchText"),
          onKeypress: s[2] || (s[2] = K(U(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, le),
        r("span", ce, [
          n.value ? x((t(), o("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": c(a)("geosearch.badChars", { chars: n.value }),
            content: c(a)("geosearch.badChars", { chars: n.value })
          }, s[3] || (s[3] = [
            S(" ⚠ ")
          ]), 8, ie)), [
            [e]
          ]) : k("", !0)
        ])
      ]);
    };
  }
}), de = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, pe = ["value", "aria-label"], ve = {
  value: "",
  disabled: "",
  hidden: ""
}, he = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, fe = ["value", "aria-label"], be = {
  value: "",
  disabled: "",
  hidden: ""
}, _e = ["disabled", "content", "aria-label"], ge = /* @__PURE__ */ V({
  __name: "top-filters",
  setup(T) {
    const { t: a } = A(), u = I("iApi"), i = B(), m = C(), n = C(), l = C(), b = C([]), d = C([]), s = C([]), e = L(() => i.queryParams), p = L(() => u.language), w = (f) => i.setProvince(f), $ = (f) => i.setType(f), F = () => {
      w({}), $({});
    }, P = () => {
      i.initService(u.language, u.fixture.get("geosearch").config);
      const f = b.value.find((h) => e.value.province === h.name)?.code, g = d.value.find((h) => e.value.type === h.name)?.code;
      i.getProvinces.then((h) => {
        b.value = h, w({
          province: h.find((E) => E.code === f)?.name,
          forceReRun: !0
        });
      }), i.getTypes.then((h) => {
        d.value = h, $({
          type: h.find((E) => E.code === g)?.name,
          forceReRun: !0
        });
      });
    }, v = () => {
      n.value._tippy.hide();
    }, M = () => {
      l.value._tippy.hide();
    }, N = (f) => {
      f.key === "Tab" && n.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? n.value._tippy.show() : n.value._tippy.hide();
    }, q = (f) => {
      f.key === "Tab" && l.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? l.value._tippy.show() : l.value._tippy.hide();
    };
    return W(() => {
      P(), s.value.push(Q(p, P));
    }), X(() => {
      n.value?.addEventListener("blur", v), n.value?.addEventListener("keyup", N), l.value?.addEventListener("blur", M), l.value?.addEventListener("keyup", q);
    }), Y(() => {
      s.value.forEach((f) => f()), n.value?.removeEventListener("blur", v), n.value?.removeEventListener("keyup", N), l.value?.removeEventListener("blur", M), l.value?.removeEventListener("keyup", q);
    }), (f, g) => {
      const h = R("truncate"), E = R("tippy");
      return t(), o("div", {
        class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14",
        ref_key: "el",
        ref: m
      }, [
        r("div", de, [
          x((t(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: e.value.province,
            "aria-label": c(a)("geosearch.filters.province"),
            onChange: g[0] || (g[0] = (y) => w({
              province: y.target.value
            })),
            ref_key: "selectProvince",
            ref: n
          }, [
            x((t(), o("option", ve, [
              S(_(c(a)("geosearch.filters.province")), 1)
            ])), [
              [h]
            ]),
            (t(!0), o(z, null, G(b.value, (y) => x((t(), o("option", {
              key: y.code
            }, [
              S(_(y.name), 1)
            ])), [
              [h]
            ])), 128))
          ], 40, pe)), [
            [h],
            [E, {
              content: c(a)("select.items"),
              trigger: "manual",
              placement: "top-start"
            }]
          ])
        ]),
        r("div", he, [
          x((t(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: e.value.type,
            "aria-label": c(a)("geosearch.filters.type"),
            onChange: g[1] || (g[1] = (y) => $({
              type: y.target.value
            })),
            ref_key: "selectFilter",
            ref: l
          }, [
            r("option", be, _(c(a)("geosearch.filters.type")), 1),
            (t(!0), o(z, null, G(d.value, (y) => (t(), o("option", {
              key: y.code
            }, _(y.name), 1))), 128))
          ], 40, fe)), [
            [h],
            [E, {
              content: c(a)("select.items"),
              trigger: "manual",
              placement: "top-start"
            }]
          ]),
          x((t(), o("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !e.value.type && !e.value.province,
            onClick: F,
            content: c(a)("geosearch.filters.clear"),
            "aria-label": c(a)("geosearch.filters.clear")
          }, g[2] || (g[2] = [
            r("div", { class: "rv-geosearch-icon" }, [
              r("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                r("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, _e)), [
            [E, { placement: "bottom" }]
          ])
        ])
      ], 512);
    };
  }
}), me = { class: "rv-geosearch-bottom-filters" }, ye = { class: "bg-white" }, xe = { class: "ml-8 cursor-pointer font-normal" }, Le = ["checked"], we = /* @__PURE__ */ V({
  __name: "bottom-filters",
  setup(T) {
    const { t: a } = A(), u = I("iApi"), i = B(), m = L(() => i.resultsVisible), n = O(300, (s) => {
      b(s).then((e) => {
        l({
          extent: e,
          visible: m.value
        });
      });
    }), l = (s) => {
      i.setMapExtent(s);
    }, b = async (s) => s.sr.wkid === 4326 ? s : await u.geo.proj.projectGeometry(4326, s), d = (s) => {
      b(u.geo.map.getExtent()).then((e) => {
        l({
          extent: e,
          visible: s
        });
      });
    };
    return X(() => {
      u.event.on(ee.MAP_EXTENTCHANGE, n, "geosearch_map_extent");
    }), Y(() => {
      u.event.off("geosearch_map_extent");
    }), (s, e) => (t(), o("div", me, [
      r("div", ye, [
        r("label", xe, [
          r("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: m.value,
            onChange: e[0] || (e[0] = (p) => d(p.target.checked)),
            onKeypress: e[1] || (e[1] = K(U(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, Le),
          S(_(c(a)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), ke = {}, $e = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, Ee = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, Se = { class: "flex items-center h-full" };
function Te(T, a) {
  return t(), o("div", $e, [
    r("div", Ee, [
      r("span", Se, [
        se(T.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const Ce = /* @__PURE__ */ te(ke, [["render", Te], ["__scopeId", "data-v-0a8d1c36"]]), Re = { class: "flex flex-col h-full" }, Pe = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Me = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Ve = { class: "relative h-48" }, Ae = { class: "font-bold text-blue-600" }, Be = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Fe = ["onClick"], Ne = { class: "rv-result-description px-8" }, je = { class: "flex-1 text-left truncate font-bold leading-tight" }, Ke = ["innerHTML"], ze = {
  key: 0,
  class: "text-gray-600 text-sm"
}, Ge = {
  key: 1,
  class: "hidden"
}, Ie = {
  key: 2,
  class: "text-sm font-normal"
}, De = /* @__PURE__ */ V({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(T) {
    const { t: a } = A(), u = I("iApi"), i = B(), m = L(() => i.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), n = L(() => i.searchResults), l = L(() => i.loadingResults), b = L(() => i.failedServices), d = (e) => {
      let p = new ae(
        "zoomies",
        [
          [
            [e.bbox[0], e.bbox[1]],
            [e.bbox[0], e.bbox[3]],
            [e.bbox[2], e.bbox[3]],
            [e.bbox[2], e.bbox[1]],
            [e.bbox[0], e.bbox[1]]
          ]
        ],
        ne.latLongSR(),
        !0
      );
      u.geo.map.zoomMapTo(p);
    }, s = (e, p) => {
      const w = e.replace(
        new RegExp(`${i.searchRegex}`, "gi"),
        ($) => '<span class="font-bold text-blue-600">' + $ + "</span>"
      );
      return p ? w + "," : w;
    };
    return (e, p) => {
      const w = oe("panel-screen"), $ = R("truncate"), F = R("focus-item"), P = R("focus-list");
      return t(), D(w, { panel: T.panel }, {
        header: H(() => [
          S(_(c(a)("geosearch.title")), 1)
        ]),
        content: H(() => [
          r("div", Re, [
            j(ue),
            j(ge),
            l.value ? (t(), D(Ce, {
              key: 0,
              class: "flex-none"
            })) : k("", !0),
            b.value.length > 0 && !l.value ? (t(), o("div", Pe, _(c(a)("geosearch.serviceError", {
              services: b.value.join(", ")
            })), 1)) : k("", !0),
            m.value && n.value.length === 0 && !l.value ? (t(), o("div", Me, [
              r("span", Ve, [
                S(_(c(a)("geosearch.noResults")), 1),
                r("span", Ae, '"' + _(m.value) + '"', 1)
              ])
            ])) : k("", !0),
            n.value.length > 0 ? x((t(), o("ul", Be, [
              (t(!0), o(z, null, G(n.value, (v, M) => (t(), o("li", {
                class: "relative h-56",
                key: M
              }, [
                x((t(), o("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (N) => d(v),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  r("div", Ne, [
                    x((t(), o("div", je, [
                      r("span", {
                        innerHTML: s(v.name, v.location.province)
                      }, null, 8, Ke),
                      v.location.province ? (t(), o("span", ze, _(v.location.city ? " " + v.location.city + ", " + v.location.province.abbr : " " + v.location.province.abbr), 1)) : k("", !0),
                      v.type ? (t(), o("span", Ge, "; ")) : k("", !0),
                      v.type ? (t(), o("span", Ie, [
                        p[0] || (p[0] = r("br", null, null, -1)),
                        S(_(v.type), 1)
                      ])) : k("", !0)
                    ])), [
                      [$, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Fe)), [
                  [F, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [P]
            ]) : k("", !0),
            j(we, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  De as default
};
//# sourceMappingURL=screen-DVwYr_aq.js.map
