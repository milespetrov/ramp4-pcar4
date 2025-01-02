import { fw as F, fP as w, fU as ae, fE as t, fI as a, fH as g, fN as Z, fJ as X, fK as U, hq as ve, fY as j, fL as S, kK as ne, kW as Y, fA as M, fC as q, fD as A, fW as se, iv as fe, fx as V, nX as ie, fS as J, fT as P, fV as Q, fF as R, fM as L, fO as ee, pD as pe, hM as we, l2 as $e, pE as Te, f_ as W, fX as le, fB as Me, fG as ce } from "./main-n1d2W0Ts.js";
import { T as Ee } from "./toggle-switch-control-BADM-sYK.js";
const Ie = {
  key: 0,
  class: "relative"
}, Ce = {
  key: 0,
  class: "relative"
}, De = ["innerHTML"], ze = ["src"], He = {
  key: 1,
  class: "w-32 h-32"
}, Se = { class: "symbologyIcon" }, je = ["innerHTML"], Be = ["src"], Oe = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ne = {
  key: 0,
  class: "px-5"
}, Ae = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, qe = /* @__PURE__ */ F({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(v) {
    const b = v, n = w([]);
    return ae(() => {
      n.value = b.layer.legend;
    }), (c, f) => v.result.loaded ? (t(), a("div", Ie, [
      g("div", {
        class: U(v.result.items.length === 0 ? "opacity-50" : "")
      }, [
        n.value.length > 1 ? (t(), a("div", Ce, [
          (t(!0), a(Z, null, X(n.value.slice(0, 3).reverse(), ($, m) => (t(), a("div", {
            class: U(["absolute", [m == 0 ? "symbol-0" : m == 1 ? "left-3" : "left-6"]]),
            style: ve({ "z-index": 3 - m }),
            key: m
          }, [
            n.value[m].svgcode ? (t(), a("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: n.value[m].svgcode
            }, null, 8, De)) : n.value[m].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: n.value[m].imgUrl
            }, null, 8, ze)) : j("", !0)
          ], 6))), 128))
        ])) : n.value.length > 0 ? (t(), a("div", He, [
          g("div", Se, [
            n.value[0].svgcode ? (t(), a("span", {
              key: 0,
              innerHTML: n.value[0].svgcode
            }, null, 8, je)) : n.value[0].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: n.value[0].imgUrl
            }, null, 8, Be)) : j("", !0)
          ])
        ])) : j("", !0)
      ], 2),
      g("div", Oe, [
        v.result.loaded ? (t(), a("div", Ne, S(v.result.items.length), 1)) : j("", !0)
      ])
    ])) : (t(), a("div", Ae, f[0] || (f[0] = [
      g("div", { class: "symbologyIcon h-32 w-32" }, [
        g("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Fe = /* @__PURE__ */ ne(qe, [["__scopeId", "data-v-496d788d"]]), Ge = ["content"], Pe = { class: "symbologyLayerName truncate" }, Ue = /* @__PURE__ */ F({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(v) {
    const b = Y(), n = M(() => b.properties), c = v, f = () => {
      const $ = c.layer;
      return $ && n.value[$.id] && n.value[$.id].name ? n.value[$.id].name : $?.name ?? "";
    };
    return ($, m) => {
      const _ = q("tippy");
      return A((t(), a("button", {
        class: U(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", v.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: m[0] || (m[0] = fe(() => {
        }, ["stop"])),
        content: f()
      }, [
        se(Fe, {
          class: "symbStack w-32 h-32 mr-10",
          layer: v.layer,
          result: v.result
        }, null, 8, ["layer", "result"]),
        g("div", Pe, S(f()), 1)
      ], 10, Ge)), [
        [_, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Re = ["content"], Ve = /* @__PURE__ */ F({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(v, { emit: b }) {
    const { t: n } = V(), c = ie(), f = w(), $ = () => {
      f.value._tippy.hide();
    }, m = (h) => {
      h.key === "Tab" && f.value?.matches(":focus") && f.value._tippy.show();
    }, _ = b, u = v, r = w(""), d = w([]), i = w(!1), e = w(!1), o = (h) => c.getLayerByUid(h), E = (h) => {
      r.value = h, _("selection-changed", h), i.value = !1;
    }, B = () => {
      e.value || setTimeout(() => {
        i.value = e.value;
      }, 500), e.value = !0;
    }, z = () => {
      i.value = e.value = !1;
    }, p = () => {
      e.value || (i.value = !0), e.value = !0;
    }, I = () => {
      i.value = e.value = !1;
    };
    return J(() => {
      d.value.push(
        P(u, () => {
          r.value = u.selected;
        })
      );
    }), ae(() => {
      f.value?.addEventListener("blur", $), f.value?.addEventListener("keyup", m);
    }), Q(() => {
      d.value.forEach((h) => h()), f.value?.removeEventListener("blur", $), f.value?.removeEventListener("keyup", m);
    }), (h, O) => {
      const N = q("focus-item"), D = q("focus-list"), C = q("tippy");
      return A((t(), a("div", {
        class: U(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": i.value }]),
        onMouseover: B,
        onMouseleave: z,
        onFocus: p,
        onBlur: fe(I, ["self"]),
        content: L(n)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: f
      }, [
        (t(!0), a(Z, null, X(u.results, (s, y) => (t(), a("div", {
          class: "flex justify-start relative",
          key: y
        }, [
          A((t(), R(Ue, {
            key: s.uid,
            layer: o(s.uid),
            result: s,
            selected: s.uid === r.value,
            onClick: (k) => E(s.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [N]
          ])
        ]))), 128))
      ], 42, Re)), [
        [D],
        [C, {
          trigger: "manual",
          placement: "top-start"
        }]
      ]);
    };
  }
}), Ze = { class: "inline font-bold" }, Ke = ["innerHTML"], We = /* @__PURE__ */ F({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: !1
    },
    fields: {
      type: Object,
      required: !0
    },
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: b } = V(), n = ee("iApi"), c = v, f = (r, d, i, e) => {
      const o = r.find((E) => E[d].toLowerCase() === i.toLowerCase());
      o && delete e[o.name];
    }, $ = () => {
      const r = Object.assign({}, c.identifyData.data);
      f(c.fields, "type", "geometry", r), n?.ui.exposeOids || f(c.fields, "type", "oid", r), n?.ui.exposeMeasurements || (f(c.fields, "name", "shape_length", r), f(c.fields, "name", "shape_area", r));
      const d = {};
      c.fields.forEach((e) => {
        const o = c.fixtureFields?.find((E) => e.name === E.field);
        d[e.name] = {
          name: o?.alias || e.alias || e.name,
          type: e.type,
          visible: o?.visible ?? !0
        };
      });
      const i = {};
      Object.keys(r).forEach((e) => {
        const o = d[e];
        if (o && o.visible) {
          const E = r[e];
          i[e] = {
            value: typeof E == "number" ? n?.ui.formatNumber(E) : E,
            alias: o.name,
            type: o.type
          };
        }
      });
      for (const [e] of Object.entries(i))
        n.ui.isPlainText(i[e].value) && (i[e].value = n.ui.escapeHtml(i[e].value));
      return i;
    }, m = (r, d, i) => {
      switch (i) {
        case "date":
          return u(r);
        default:
          return _(r, d);
      }
    }, _ = (r, d) => {
      if (!r)
        return r;
      if (r.trim().match(/\.(jpeg|jpg|gif|png)$/) || r.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        //eslint-disable-line
      ))
        return `<img src="${r}" alt="${b("details.item.alert.defaultAltText", { alias: d })}" />`;
      const i = "underline text-blue-700 break-all", e = document.createElement("div");
      return e.innerHTML = r.trim(), e.firstElementChild?.tagName == "A" ? (e.firstElementChild.className = i, e.innerHTML) : pe(r, {
        className: i,
        target: "_blank",
        validate: {
          url: (E) => /^https?:\/\//.test(E)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, u = (r) => {
      const d = parseInt(r);
      return isNaN(d) ? r : new Date(d).toISOString().split("T")[0];
    };
    return (r, d) => (t(), a("div", null, [
      (t(!0), a(Z, null, X($(), (i, e, o) => (t(), a("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: o
      }, [
        g("span", Ze, S(i.alias), 1),
        d[0] || (d[0] = g("span", { class: "flex-auto" }, null, -1)),
        g("span", {
          class: "inline",
          innerHTML: m(i.value, i.alias, i.type)
        }, null, 8, Ke)
      ]))), 128))
    ]));
  }
}), Xe = ["innerHTML"], Ye = { key: 1 }, Je = /* @__PURE__ */ F({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: b } = V();
    return (n, c) => v.identifyData ? (t(), a("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: v.identifyData.data.data ?? v.identifyData.data
    }, null, 8, Xe)) : (t(), a("div", Ye, S(L(b)("details.layers.results.empty")), 1));
  }
}), Qe = { class: "relative flex flex-grow truncate" }, et = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, tt = { class: "flex p-8 items-center" }, st = ["innerHTML"], lt = {
  key: 1,
  class: "symbologyIcon p-6"
}, at = ["content", "innerHTML", "tabindex"], nt = {
  key: 1,
  class: "flex p-6 flex-grow"
}, it = {
  key: 2,
  class: "zoomButton text-center p-3"
}, ot = ["content", "aria-label"], rt = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, ut = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, ct = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, dt = ["innerHTML"], de = /* @__PURE__ */ F({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(v) {
    const b = ie(), n = v, c = ee("iApi"), f = w([]), $ = Y(), { t: m } = V(), _ = w(""), u = w("none"), r = w(), d = () => b.getLayerByUid(n.uid), i = M(() => $.properties), e = M(() => $.defaultTemplates), o = M(() => d()?.supportsFeatures ?? !1), E = M(() => d()?.mapLayer ?? !1), B = M(() => {
      const s = d()?.nameField;
      let y = s && n.data.loaded ? n.data.data[s] : c.$i18n.t("details.items.title");
      return c.ui.isPlainText(y) && (y = c.ui.escapeHtml(y)), y;
    }), z = (s) => {
      if (typeof s == "string") {
        const y = "underline text-blue-700 break-all", k = document.createElement("div");
        return k.innerHTML = s.trim(), k.firstElementChild?.tagName == "A" ? (k.firstElementChild.className = y, k.innerHTML) : pe(s, {
          className: y,
          target: "_blank",
          validate: {
            url: (H) => /^https?:\/\//.test(H)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return s;
    }, p = () => {
      D("none"), n.data.loaded ? I() : n.data.load().then(() => {
        I();
      });
    }, I = () => {
      if (_.value = "", !(n.data && n.data.loaded))
        return;
      const s = d();
      if (s === void 0) {
        console.warn(`could not find layer for uid ${n.uid} during icon lookup`);
        return;
      }
      if (s.supportsFeatures) {
        const y = s.oidField;
        s.getIcon(n.data.data[y]).then((k) => {
          _.value = k;
        });
      }
    }, h = M(() => {
      const s = d();
      return s && i.value[s.id] && i.value[s.id].template ? i.value[s.id].template : e.value && e.value[n.data.format] ? e.value[n.data.format] : o.value ? We : Je;
    }), O = M(() => o.value ? d()?.fields || [] : []), N = M(() => {
      const s = d();
      if (s && i.value[s.id] && i.value[s.id].fields)
        return i.value[s.id].fields;
    }), D = (s) => {
      s === "zoomed" || s === "error" ? setTimeout(() => {
        u.value = s, r.value?._tippy.show(), setTimeout(() => {
          r.value?._tippy.hide(), u.value = "none";
        }, 3e3);
      }, 300) : u.value = s;
    }, C = () => {
      if (u.value !== "none")
        return;
      D("zooming");
      const s = d();
      if (s === void 0 || !s.isLoaded) {
        console.warn(`Could not find layer for uid ${n.uid} during zoom geometry lookup`), D("error");
        return;
      }
      if (!n.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), D("error");
        return;
      }
      const y = n.data.data[s.oidField], k = () => {
        const T = { getGeom: !0 };
        s.getGraphic(y, T).then((H) => {
          H.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${y}`), D("error")) : (c.geo.map.zoomMapTo(H.geometry), D("zoomed"), c.updateAlert(c.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          D("error");
        });
      };
      s.layerType === $e.FEATURE && s.geomType !== Te.POINT ? s.getGraphicExtent(y).then((T) => {
        c.geo.map.zoomMapTo(T), D("zoomed"), c.updateAlert(c.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        k();
      }) : k();
    };
    return J(() => {
      f.value.push(
        P(
          n,
          () => {
            p();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), Q(() => {
      f.value.forEach((s) => s());
    }), (s, y) => {
      const k = q("truncate"), T = q("tippy");
      return t(), a(Z, null, [
        g("div", Qe, [
          o.value ? (t(), a("div", et, [
            g("div", tt, [
              v.data.loaded && _.value ? (t(), a("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: _.value
              }, null, 8, st)) : (t(), a("div", lt, y[1] || (y[1] = [
                g("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            v.data.loaded ? A((t(), a("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: B.value,
              innerHTML: z(B.value),
              tabindex: v.inList ? -1 : 0
            }, null, 8, at)), [
              [k, {
                options: { placement: "right" }
              }]
            ]) : (t(), a("div", nt, S(L(m)("details.loading")), 1)),
            v.data.loaded ? (t(), a("span", it, [
              E.value ? A((t(), a("button", {
                key: 0,
                type: "button",
                content: L(m)(`details.item.zoom${u.value === "none" ? "" : `.${u.value}`}`),
                "aria-label": L(m)(`grid.cells.zoom${u.value === "none" ? "" : `.${u.value}`}`),
                ref_key: "zoomButton",
                ref: r,
                onClick: y[0] || (y[0] = (H) => {
                  H.stopPropagation(), C();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                u.value === "zooming" ? (t(), a("div", rt)) : u.value === "zoomed" ? (t(), a("svg", ut, y[2] || (y[2] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : u.value === "error" ? (t(), a("svg", ct, y[3] || (y[3] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (t(), a("span", {
                  key: 3,
                  innerHTML: L(c).ui.getZoomIcon()
                }, null, 8, dt))
              ], 8, ot)), [
                [T, { placement: "bottom" }]
              ]) : j("", !0)
            ])) : j("", !0)
          ])) : j("", !0)
        ]),
        v.open ? (t(), R(we(h.value), {
          key: 0,
          identifyData: v.data,
          fields: O.value,
          fixtureFields: N.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : j("", !0)
      ], 64);
    };
  }
}), vt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, ft = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, pt = { for: "toggle" }, mt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, yt = { class: "flex" }, ht = ["aria-label"], gt = ["content", "aria-label", "disabled"], _t = { class: "px-3 text-center flex-grow" }, bt = ["content", "aria-label", "disabled"], kt = { key: 3 }, xt = { key: 0 }, Lt = ["content"], wt = ["onClick"], $t = {
  key: 1,
  class: "text-center"
}, Tt = {
  key: 4,
  class: "p-5"
}, Mt = /* @__PURE__ */ F({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(v) {
    const b = w(), n = () => {
      b.value._tippy.hide();
    }, c = (l) => {
      l.key === "Tab" && b.value?.matches(":focus") && b.value._tippy.show();
    }, f = ee("iApi"), $ = Y(), m = ie(), _ = v, { t: u } = V(), r = w(!1), d = w(f.fixture.get("details")), i = w(!0), e = w(!1), o = w(0), E = w(20), B = w([]), z = w([]), p = M(() => $.activeGreedy), I = M(() => $.properties), h = M(() => o.value + E.value), O = () => m.getLayerByUid(_.uid), N = () => _.results.find((l) => l.uid === _.uid), D = M(() => N()?.loaded ?? !1), C = M(() => N()?.requestTime), s = M(
      () => r.value && (!e.value && T().length > 1 || e.value && T().length > E.value)
    ), y = M(() => {
      const l = O();
      return l && I.value[l.id] && I.value[l.id].name ? I.value[l.id].name : l?.name ?? "";
    }), k = M(() => _.uid), T = () => {
      const l = N();
      return l ? l.items : [];
    }, H = M(() => T()[o.value]), oe = M(() => {
      if (d.value.hasHilighter()) {
        const l = O();
        if (l)
          return l.mapLayer && l.supportsFeatures;
      }
      return !1;
    }), me = (l) => {
      i.value = l, $.hilightToggle = l, G();
    }, ye = () => {
      const l = O();
      o.value = o.value ?? 0, i.value = $.hilightToggle ?? i.value, e.value = !1, r.value = !!l, G();
    }, re = (l) => {
      e.value ? (o.value += l * E.value, G()) : o.value += l;
    }, G = () => {
      const l = T();
      if (i.value && D.value && l.length > 0 && oe.value)
        if (e.value)
          d.value.hilightDetailsItems(l.slice(o.value, h.value), _.uid);
        else {
          const x = l[o.value];
          x && d.value.hilightDetailsItems([x], _.uid);
        }
      else
        d.value.removeDetailsHilight();
    }, he = () => {
      e.value = !0, o.value = Math.floor(o.value / E.value) * E.value, G();
    }, ge = () => {
      d.value.removeDetailsHilight();
    }, _e = () => {
      d.value.removeDetailsHilight();
    }, be = (l) => {
      const x = o.value;
      o.value = l, e.value = !1, x === l && G();
    };
    return ae(() => {
      B.value.push(
        f.event.on(W.LAYER_REMOVE, (l) => {
          const x = f.panel.get("details");
          _.uid === l.uid && x && x.close();
        })
      ), B.value.push(
        f.event.on(W.PANEL_CLOSED, (l) => {
          l.id === "details" && ge();
        })
      ), B.value.push(
        f.event.on(W.PANEL_MINIMIZED, (l) => {
          l.id === "details" && _e();
        })
      ), B.value.push(
        f.event.on(W.MAP_BASEMAPCHANGE, (l) => {
          i.value && l.schemaChanged && G();
        })
      ), b.value?.addEventListener("blur", n), b.value?.addEventListener("keyup", c);
    }), J(() => {
      z.value.push(
        P(
          H,
          () => {
            e.value || (ye(), H.value === void 0 && d.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), z.value.push(
        P(
          k,
          () => {
            const l = _.uid;
            if (e.value && l) {
              const x = N();
              x && x.loading.then(() => {
                _.uid === l && e.value && G();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), z.value.push(
        P(C, () => {
          o.value = 0;
        })
      ), z.value.push(
        P(
          () => _.uid,
          () => {
            o.value = 0;
          }
        )
      );
    }), Q(() => {
      z.value.forEach((l) => l()), B.value.forEach((l) => f.event.off(l)), b.value?.removeEventListener("blur", n), b.value?.removeEventListener("keyup", c);
    }), (l, x) => {
      const ke = q("truncate"), te = q("tippy"), xe = q("focus-item"), Le = q("focus-list");
      return D.value && p.value === 0 ? (t(), a("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: ve(v.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        r.value ? A((t(), a("h1", vt, [
          le(S(y.value), 1)
        ])), [
          [ke, { options: { placement: "top-start" } }]
        ]) : j("", !0),
        oe.value ? (t(), a("div", ft, [
          g("label", pt, S(L(u)("details.togglehilight.title")), 1),
          se(Ee, {
            config: {
              value: i.value,
              disabled: !1
            },
            onToggled: me
          }, null, 8, ["config"])
        ])) : j("", !0),
        s.value ? (t(), a("div", mt, [
          g("div", yt, [
            e.value ? j("", !0) : (t(), a("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(u)("details.item.see.list"),
              onClick: x[0] || (x[0] = (K) => he())
            }, S(L(u)("details.item.see.list")), 9, ht)),
            g("div", {
              class: U(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": e.value }])
            }, [
              A((t(), a("button", {
                type: "button",
                content: L(u)(e.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: x[1] || (x[1] = (K) => re(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(u)(e.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: o.value === 0
              }, x[3] || (x[3] = [
                g("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  g("g", null, [
                    g("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, gt)), [
                [te, { placement: "top" }]
              ]),
              g("span", _t, S(e.value ? L(u)("details.items.range", [
                o.value + 1,
                Math.min(h.value, T().length),
                T().length
              ]) : L(u)("details.item.count", [o.value + 1, T().length])), 1),
              A((t(), a("button", {
                type: "button",
                content: L(u)(e.value ? "details.items.next" : "details.item.next.item"),
                onClick: x[2] || (x[2] = (K) => re(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(u)(e.value ? "details.items.next" : "details.item.next.item"),
                disabled: !e.value && o.value === T().length - 1 || e.value && h.value >= T().length
              }, x[4] || (x[4] = [
                g("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  g("g", null, [
                    g("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, bt)), [
                [te, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : j("", !0),
        r.value ? (t(), a("div", kt, [
          T().length > 0 ? (t(), a("div", xt, [
            e.value ? A((t(), a("div", {
              key: 0,
              class: "flex flex-col",
              content: L(u)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: b
            }, [
              (t(!0), a(Z, null, X(T().slice(o.value, h.value), (K, ue) => A((t(), a("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: ue,
                onClick: (zt) => be(o.value + ue)
              }, [
                se(de, {
                  data: K,
                  uid: v.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, wt)), [
                [xe, "show-truncate"]
              ])), 128))
            ], 8, Lt)), [
              [Le],
              [te, {
                trigger: "manual",
                placement: "top-start"
              }]
            ]) : (t(), R(de, {
              key: 1,
              data: H.value,
              uid: v.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (t(), a("div", $t, S(L(u)("details.layers.results.empty.currentLayer")), 1))
        ])) : (t(), a("div", Tt, S(L(u)("details.item.no.data")), 1))
      ], 4)) : (t(), a("div", {
        key: 1,
        class: U(["flex justify-center py-10 items-center", v.results.length > 1 ? "ml-42" : ""])
      }, [
        x[5] || (x[5] = g("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        le(" " + S(L(u)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Et = /* @__PURE__ */ ne(Mt, [["__scopeId", "data-v-4c39ec75"]]), It = { class: "relative h-full" }, Ct = { class: "detailsContentSection overflow-y-auto h-full" }, Dt = /* @__PURE__ */ F({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(v) {
    const { t: b } = V(), n = ee("iApi"), c = Y(), f = w([]), $ = w([]), m = w([]), _ = w(!1), u = w(""), r = M(() => c.activeGreedy), d = M(() => c.payload), i = M(() => c.properties), e = (p) => {
      u.value = p;
    }, o = (p) => m.value.find((I) => I.uid === p), E = (p) => {
      p !== void 0 && (c.activeGreedy = p.length === 0 ? 0 : p[0].requestTime, m.value = p, B(p));
    }, B = (p) => {
      if (u.value) {
        const I = o(u.value);
        I ? I.loading.then(() => {
          I.requestTime === r.value && (I.items.length > 0 ? (c.activeGreedy = 0, _.value = !1) : z(p));
        }) : z(p);
      } else
        z(p);
    }, z = (p, I) => {
      let h;
      if (I)
        h = I;
      else {
        const C = c.properties, s = p.map((k) => [
          C[k.layerId]?.priority ?? 50,
          k.layerId
        ]), y = new Set(s.map((k) => k[0]));
        h = [], y.forEach((k) => {
          const T = s.filter((H) => H[0] === k).map((H) => H[1]);
          h.push([k, T]);
        }), h.sort((k, T) => T[0] - k[0]);
      }
      if (h.length === 0) {
        c.activeGreedy = 0, _.value = !0;
        return;
      }
      const O = h[h.length - 1][1], N = p.filter((C) => O.includes(C.layerId)).map(
        (C) => C.loading.then(() => C.items.length > 0 ? Promise.resolve(C) : Promise.reject())
      ), D = p.length === 0 ? 0 : p[0].requestTime;
      Promise.any(N).then((C) => {
        C.requestTime === r.value && (c.activeGreedy = 0, u.value = C.uid, _.value = !1);
      }).catch(() => {
        D === r.value && (h.pop(), z(p, h));
      });
    };
    return J(() => {
      $.value.push(
        P(
          d,
          (p) => {
            E(p);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), Q(() => {
      f.value.forEach((p) => n.event.off(p)), $.value.forEach((p) => p());
    }), (p, I) => {
      const h = Me("panel-screen");
      return t(), R(h, { panel: v.panel }, {
        header: ce(() => [
          le(S(
            // Show different titles based on what requested the panel
            L(c).origin === "toggleEvent" ? L(b)("details.layers.title.gridOrigin") : L(b)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ce(() => [
          g("div", It, [
            m.value.length > 1 ? (t(), R(Ve, {
              key: 0,
              results: m.value,
              detailsProperties: i.value,
              selected: u.value,
              onSelectionChanged: e
            }, null, 8, ["results", "detailsProperties", "selected"])) : j("", !0),
            g("div", Ct, [
              _.value ? (t(), a("div", {
                key: 1,
                class: U(["text-center", { "ml-42": m.value.length > 1 }])
              }, S(m.value.length >= 1 ? L(b)("details.layers.results.empty") : L(b)("details.layers.results.empty.noLayers")), 3)) : (t(), R(Et, {
                key: 0,
                uid: u.value,
                results: m.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), jt = /* @__PURE__ */ ne(Dt, [["__scopeId", "data-v-2a8a1e06"]]);
export {
  jt as default
};
//# sourceMappingURL=details-screen-3URJTWez.js.map
