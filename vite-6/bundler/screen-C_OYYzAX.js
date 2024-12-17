import { defineComponent as oe, ref as m, watch as me, toRef as Ue, openBlock as v, createElementBlock as b, createElementVNode as s, toDisplayString as y, unref as o, inject as be, reactive as ae, onMounted as ye, onBeforeUnmount as ge, resolveDirective as fe, createCommentVNode as L, createVNode as C, withCtx as R, withDirectives as se, normalizeClass as te, createTextVNode as he, Fragment as _e, renderList as Be, vShow as ke, Transition as qe, renderSlot as Le, computed as q, provide as We, onErrorCaptured as He, resolveComponent as De, createBlock as B, withModifiers as Ee, nextTick as Ge } from "vue";
import { ColorPicker as je } from "vue-accessible-color-picker";
import { _ as ne, J as Pe, L as w, W as j, G as Fe, N as ce } from "./main-DD4M6ybf.js";
import "@arcgis/core/Basemap";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Geometry";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/layers/support/LOD";
import "@arcgis/core/layers/support/WMSSublayer";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/ClassBreaksRenderer";
import "@arcgis/core/renderers/Renderer";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/UniqueValueRenderer";
import "@arcgis/core/renderers/support/ClassBreakInfo";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/renderers/support/UniqueValueInfo";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/Symbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import "pinia";
import { useI18n as we } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "shpjs/dist/shp.min.js";
import "redaxios";
import "jszip";
import "flatgeobuf";
import "await-to-js";
import "fast-xml-parser";
import "svg.js";
import Ye from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
const Ke = { class: "flex justify-end mb-20" }, Je = ["disabled", "animation"], Ze = { class: "button-text" }, Qe = /* @__PURE__ */ oe({
  __name: "form-footer",
  props: {
    animation: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !0
    }
  },
  setup(r) {
    const { t: d } = we(), l = r, h = m();
    me(Ue(l, "disabled"), (f) => {
      !f && h.value.classList.contains("button--loading") && h.value.classList.remove("button--loading");
    });
    const S = () => {
      l.animation && h.value.classList.toggle("button--loading");
    };
    return (f, k) => (v(), b("div", Ke, [
      s("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: k[0] || (k[0] = (z) => f.$emit("cancel"))
      }, y(o(d)("wizard.step.cancel")), 1),
      s("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: h,
        type: "button",
        disabled: r.disabled,
        animation: r.animation,
        onClick: k[1] || (k[1] = (z) => {
          f.$emit("submit"), S();
        })
      }, [
        s("span", Ze, y(o(d)("wizard.step.continue")), 1)
      ], 8, Je)
    ]));
  }
}), ve = /* @__PURE__ */ ne(Qe, [["__scopeId", "data-v-5e77d8d6"]]), Xe = { key: 0 }, el = { class: "text-base font-bold" }, ll = {
  class: "relative py-8 mb-0.5 h-75",
  "data-type": "file"
}, tl = ["aria-label"], al = { class: "text-gray-500 text-xs mb-1" }, ol = { key: 1 }, rl = { class: "text-base font-bold" }, il = {
  class: "mb-0.5",
  "data-type": "url"
}, sl = ["value", "aria-label"], nl = {
  key: 0,
  class: "text-red-900 text-xs"
}, ul = { key: 2 }, dl = { class: "text-base font-bold" }, cl = {
  class: "relative mb-0.5",
  "data-type": "select"
}, vl = { key: 0 }, pl = {
  key: 0,
  class: "text-red-900 text-xs"
}, fl = { key: 1 }, ml = ["size", "value", "aria-label"], bl = ["value"], yl = {
  key: 0,
  class: "text-red-900 text-xs"
}, gl = {
  key: 1,
  class: "text-red-900 text-xs"
}, hl = { key: 3 }, wl = ["aria-label"], xl = { class: "text-base font-bold" }, Sl = { key: 4 }, zl = { class: "text-base font-bold" }, kl = { class: "relative mb-0.5" }, El = ["value", "aria-label"], Fl = {
  key: 0,
  class: "text-red-900 text-xs"
}, Ll = /* @__PURE__ */ oe({
  __name: "form-input",
  props: {
    defaultOption: {
      type: Boolean,
      default: !1
    },
    formatError: {
      type: Boolean,
      default: !1
    },
    failureError: {
      type: Boolean,
      default: !1
    },
    help: {
      type: [String, Boolean],
      default: !1
    },
    label: {
      type: [String, Boolean],
      default: !1
    },
    modelValue: {
      type: [String, Array],
      default: ""
    },
    name: {
      type: [String, Boolean],
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedValues: {
      type: Array,
      default: () => []
    },
    size: {
      type: [Number, String],
      default: 0
    },
    sublayerOptions: {
      type: Function,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "text"
    },
    url: {
      type: [String, Boolean],
      default: !1
    },
    validation: {
      type: Boolean,
      default: !1
    },
    validationMessages: {
      type: Object
    },
    ariaLabel: {
      type: String,
      default: !1
    }
  },
  emits: ["update:modelValue", "link", "select", "upload", "text", "nested"],
  setup(r, { emit: d }) {
    const l = be("iApi"), { t: h } = we(), S = d, f = r, k = m(), z = m(!1), W = m(!1), U = m(!1), P = m(!1), M = m([...f.selectedValues]), H = m("value-label"), Y = m("option-label"), T = m(void 0), $ = m(null), D = ae([]), V = m();
    if (f.defaultOption && f.modelValue === "" && f.options.length) {
      let i = f.options[0].value;
      if (f.name === "latField") {
        const u = new RegExp(/^(y|lat.*)$/i);
        i = f.options.find((A) => u.test(A.label))?.value || i;
      } else if (f.name === "longField") {
        const u = new RegExp(/^(x|long.*)$/i);
        i = f.options.find((A) => u.test(A.label))?.value || i;
      }
      S("update:modelValue", i);
    }
    const Q = (i) => {
      i.trim() !== "" ? z.value = !0 : (z.value = !1, l.updateAlert(h("wizard.configure.name.error.required")));
    }, re = (i) => {
      let u;
      try {
        u = new URL(i);
      } catch {
        return z.value = !1, !1;
      }
      u.protocol === "http:" || u.protocol === "https:" ? z.value = !0 : z.value = !1;
    }, K = (i) => {
      S("upload", i.target.files[0]), i.target.value = "";
    }, x = (i) => {
      re(i.target.value), S("link", i.target.value, z), W.value = !1;
    }, X = (i, u) => {
      S(i ? "select" : "update:modelValue", u.target.value);
    }, ee = (i) => {
      S("nested", i.target.checked);
    }, O = (i) => {
      Q(i.target.value), S("link", i.target.value, z), U.value = !1;
    }, _ = () => {
      S("select", f.sublayerOptions(M.value)), M.value && M.value.length > 0 ? P.value = !1 : P.value = !0;
    }, E = (i) => i.length > 5 ? `${i.slice(0, 5)}...` : i;
    function a() {
      T.value = new ResizeObserver(function() {
        ie();
      }), T.value.observe(l.$vApp.$el.querySelector(".vue-treeselect__control")), T.value.observe(l.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const ie = () => {
      const i = l.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight, u = l.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight;
      k.value.style.height = `${i + u + 30}px`;
    };
    D.push(
      me($, (i) => {
        i && ue();
      })
    );
    const ue = () => {
      if ($.value) {
        const i = $.value.querySelector('input[type="text"]');
        i && i.setAttribute("aria-label", h("wizard.configure.sublayers.select"));
      }
    }, J = () => {
      V.value._tippy.hide();
    }, le = (i) => {
      i.key === "Tab" && V.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? V.value._tippy.show() : V.value._tippy.hide();
    };
    return ye(() => {
      V.value?.addEventListener("blur", J), V.value?.addEventListener("keyup", le);
    }), ge(() => {
      T.value.disconnect(), D.forEach((i) => i()), V.value?.removeEventListener("blur", J), V.value?.removeEventListener("keyup", le);
    }), (i, u) => {
      const G = fe("truncate"), A = fe("tippy");
      return v(), b("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: k
      }, [
        r.type === "file" ? (v(), b("div", Xe, [
          s("label", el, y(r.label), 1),
          s("div", ll, [
            s("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": f.ariaLabel,
              onInput: u[0] || (u[0] = (g) => {
                K(g);
              })
            }, null, 40, tl),
            u[11] || (u[11] = s("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              s("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                s("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                s("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          s("div", al, y(r.help), 1)
        ])) : r.type === "url" ? (v(), b("div", ol, [
          s("label", rl, y(r.label), 1),
          s("div", il, [
            s("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: r.modelValue,
              "aria-label": f.ariaLabel,
              onChange: u[1] || (u[1] = (g) => z.value ? W.value = !1 : W.value = !0),
              onInput: u[2] || (u[2] = (g) => {
                x(g);
              })
            }, null, 40, sl)
          ]),
          W.value ? (v(), b("div", nl, y(r.modelValue ? r.validationMessages?.invalid : r.validationMessages?.required), 1)) : L("", !0)
        ])) : r.type === "select" ? (v(), b("div", ul, [
          s("label", dl, y(r.label), 1),
          s("div", cl, [
            r.multiple ? (v(), b("div", vl, [
              s("div", {
                ref_key: "treeWrapper",
                ref: $
              }, [
                C(o(Ye), {
                  modelValue: M.value,
                  "onUpdate:modelValue": u[3] || (u[3] = (g) => M.value = g),
                  multiple: !0,
                  options: r.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: r.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: o(h)("wizard.configure.sublayers.select"),
                  noResultsText: o(h)("wizard.configure.sublayers.results"),
                  clearAllText: o(h)("wizard.configure.sublayers.clearAll"),
                  onSelect: u[4] || (u[4] = (g) => {
                    i.$nextTick(() => {
                      _();
                    });
                  }),
                  onDeselect: u[5] || (u[5] = (g) => {
                    i.$nextTick(() => {
                      _();
                    });
                  }),
                  onOpen: u[6] || (u[6] = (g) => {
                    i.$nextTick(() => {
                      a();
                    });
                  })
                }, {
                  [H.value]: R(({ node: g }) => [
                    s("label", null, y(E(g.label)), 1)
                  ]),
                  [Y.value]: R(({ node: g, labelClassName: de }) => [
                    se((v(), b("label", {
                      class: te(de)
                    }, [
                      he(y(g.label), 1)
                    ], 2)), [
                      [G, {
                        options: {
                          placement: "top",
                          hideOnClick: !1,
                          theme: "ramp4",
                          animation: "scale"
                        }
                      }]
                    ])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "options", "searchable", "placeholder", "noResultsText", "clearAllText"])
              ], 512),
              r.validation && P.value ? (v(), b("div", pl, y(r.validationMessages?.required), 1)) : L("", !0)
            ])) : (v(), b("div", fl, [
              se((v(), b("select", {
                class: te(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", r.size && "configure-select"]),
                size: r.size,
                value: r.modelValue,
                onInput: u[7] || (u[7] = (g) => X(r.size, g)),
                "aria-label": f.ariaLabel,
                ref_key: "wizardSelect",
                ref: V
              }, [
                (v(!0), b(_e, null, Be(r.options, (g) => (v(), b("option", {
                  class: "p-6",
                  key: g.label,
                  value: g.value
                }, y(g.label), 9, bl))), 128))
              ], 42, ml)), [
                [A, {
                  content: o(h)("select.items"),
                  trigger: "manual",
                  placement: "top-start"
                }]
              ]),
              r.validation && r.formatError ? (v(), b("div", yl, y(r.validationMessages?.invalid), 1)) : L("", !0),
              r.validation && r.failureError ? (v(), b("div", gl, y(r.validationMessages?.failure), 1)) : L("", !0)
            ]))
          ])
        ])) : r.type === "checkbox" ? (v(), b("div", hl, [
          s("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": f.ariaLabel,
            onChange: u[8] || (u[8] = (g) => {
              ee(g);
            })
          }, null, 40, wl),
          s("label", xl, y(r.label), 1)
        ])) : (v(), b("div", Sl, [
          s("label", zl, y(r.label), 1),
          s("div", kl, [
            s("input", {
              class: te(["border-solid border-gray-300 p-3 w-full", { "error-border": !z.value && !r.modelValue }]),
              type: "text",
              value: r.modelValue,
              "aria-label": f.ariaLabel,
              onChange: u[9] || (u[9] = (g) => z.value ? U.value = !1 : U.value = !0),
              onInput: u[10] || (u[10] = (g) => {
                O(g);
              })
            }, null, 42, El)
          ]),
          r.validation && !r.modelValue ? (v(), b("div", Fl, y(r.validationMessages?.required), 1)) : L("", !0)
        ]))
      ], 512);
    };
  }
}), N = /* @__PURE__ */ ne(Ll, [["__scopeId", "data-v-5b62d383"]]), Vl = { class: "step relative flex flex-col px-12" }, Al = { class: "stepper-header flex pb-24" }, $l = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Ol = { class: "flex flex-col overflow-hidden" }, Cl = { class: "pl-12 flex items-center text-md" }, Ml = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Tl = { class: "pl-36" }, Il = /* @__PURE__ */ oe({
  __name: "stepper-item",
  props: {
    title: {
      type: String,
      required: !0
    },
    summary: {
      type: String
    }
  },
  setup(r) {
    const d = be("stepper"), l = m(-1);
    ye(() => {
      l.value = d.numSteps++;
    });
    const h = () => d.activeIndex > l.value, S = () => d.activeIndex === l.value;
    return (f, k) => {
      const z = fe("truncate");
      return v(), b("div", Vl, [
        s("div", Al, [
          h() ? (v(), b("div", $l, k[0] || (k[0] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              s("g", { id: "check_circle" }, [
                s("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (v(), b("div", {
            key: 0,
            class: te(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": S }])
          }, y(l.value + 1), 3)),
          s("div", Ol, [
            s("div", Cl, y(r.title), 1),
            se((v(), b("div", Ml, [
              he(y(r.summary), 1)
            ])), [
              [ke, !S()],
              [z]
            ])
          ])
        ]),
        C(qe, {
          name: "step",
          mode: "out-in"
        }, {
          default: R(() => [
            se(s("div", Tl, [
              Le(f.$slots, "default", {}, void 0, !0)
            ], 512), [
              [ke, S()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), pe = /* @__PURE__ */ ne(Il, [["__scopeId", "data-v-686fab2c"]]), Rl = { class: "py-12 h-auto stepper" }, Nl = /* @__PURE__ */ oe({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(r) {
    const d = r, l = q(() => d.activeStep), h = ae([]), S = ae({
      activeIndex: d.activeStep,
      numSteps: 0
    });
    return We("stepper", S), h.push(
      me(l, () => {
        S.activeIndex = d.activeStep;
      })
    ), ge(() => {
      h.forEach((f) => f());
    }), (f, k) => (v(), b("div", Rl, [
      Le(f.$slots, "default")
    ]));
  }
}), Ul = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, _l = { class: "px-5 text-xs" }, Bl = { key: 5 }, ql = ["for"], Wl = {
  key: 6,
  class: "text-base font-bold"
}, Hl = { class: "sr-only" }, Dl = { class: "sr-only" }, Gl = /* @__PURE__ */ oe({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const d = Pe(), { t: l } = we(), h = be("iApi"), S = m(), f = m([]), k = q(() => d.layerSource), z = q(() => d.currStep), W = m(), U = m(), P = m(0), M = m(!1), H = m(!1), Y = m(!1), T = m(!1), $ = m(!1), D = m(!1), V = m(!1), Q = m(!0), re = m(""), K = m(""), x = m([]), X = ae([
      {
        value: w.FEATURE,
        label: l("wizard.layerType.esriFeature")
      },
      {
        value: w.MAPIMAGE,
        label: l("wizard.layerType.esriMapImage")
      },
      {
        value: w.TILE,
        label: l("wizard.layerType.esriTile")
      },
      {
        value: w.IMAGERY,
        label: l("wizard.layerType.esriImagery")
      },
      {
        value: w.WMS,
        label: l("wizard.layerType.ogcWms")
      },
      {
        value: w.WFS,
        label: l("wizard.layerType.ogcWfs")
      }
    ]), ee = ae([
      {
        value: w.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: w.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: w.CSV, label: l("wizard.fileType.csv") }
    ]), O = q({
      get() {
        return d.url;
      },
      set(t) {
        d.url = t;
      }
    }), _ = q({
      get() {
        return d.fileData;
      },
      set(t) {
        d.fileData = t;
      }
    }), E = q({
      get() {
        return d.typeSelection;
      },
      set(t) {
        d.typeSelection = t;
      }
    }), a = q({
      get() {
        return d.layerInfo;
      },
      set(t) {
        d.layerInfo = t;
      }
    }), ie = q(() => {
      let t = h.geo.proxy !== "";
      switch (E.value) {
        // ESRI ArcGIS Server
        // required only if no proxy is set
        case w.FEATURE:
        case w.MAPIMAGE:
        case w.TILE:
        case w.IMAGERY:
          return !t;
        // WFS Server
        // always required
        case w.WFS:
          return !0;
        // WMS Server
        // required only if proxy is set
        case w.WMS:
          return !t;
        // Files
        // always required for files from hosted services
        case w.GEOJSON:
        case w.SHAPEFILE:
        case w.CSV:
          return !!(A() && !_.value);
        default:
          return !1;
      }
    });
    He(() => ((z.value === j.FORMAT || z.value === j.CONFIGURE) && (H.value = !0, d.goToStep(j.FORMAT)), !1)), ye(() => {
      f.value.push(
        h.event.on(Fe.LAYER_LAYERSTATECHANGE, (t) => {
          t.layer.userAdded && (re.value = t.layer.name, V.value = t.state !== ce.LOADING && t.state !== ce.NEW, Q.value = V.value && t.state === ce.LOADED);
        })
      ), z.value === j.CONFIGURE && (a.value?.configOptions.includes("colour") && ze(), $.value = !a.value?.configOptions.includes("sublayers") && !!a.value?.config.name);
    }), ge(() => {
      f.value.forEach((t) => h.event.off(t));
    });
    const ue = async (t) => {
      const e = new FileReader();
      e.onload = (c) => {
        _.value = e.result, O.value = t.name, J(c);
      }, e.readAsArrayBuffer(t);
    }, J = (t) => {
      t?.preventDefault(), E.value = k.value.guessFormatFromURL(O.value), d.goToStep(j.FORMAT);
    }, le = async (t) => {
      t?.preventDefault(), M.value = !0, Y.value = !1, D.value = !0, K.value = A() ? ee.find((c) => c.value === E.value)?.label : X.find((c) => c.value === E.value)?.label;
      try {
        a.value = A() ? await k.value.fetchFileInfo(O.value, E.value, _.value) : await k.value.fetchServiceInfo(
          O.value,
          E.value,
          d.nested
        ), A() && _.value && (a.value.config.url = "");
      } catch {
        M.value = !1, Y.value = !0;
        return;
      }
      const e = E.value === w.FEATURE && !(a.value && a.value.fields);
      if (!a.value || e) {
        H.value = !0, a.value = {
          config: {
            id: "Placeholder",
            layerType: w.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, M.value = !1;
        return;
      }
      ze(), d.goToStep(j.CONFIGURE), $.value = !(a.value.configOptions.includes("sublayers") || !a.value.config.name), M.value = !1, D.value = !1;
    }, i = async (t) => {
      t?.preventDefault();
      const e = Object.assign(a.value.config, t);
      x.value = [], K.value = "";
      const c = h.geo.layer.createLayer(e);
      h.geo.map.addLayer(c).catch(() => {
      }), c.userAdded = !0, h.event.emit(Fe.USER_LAYER_ADDED, c), T.value = !1, d.goToStep(j.UPLOAD);
    }, u = () => a.value?.fields.map((t) => ({
      value: t.name,
      label: t.alias || t.name
    })), G = (t) => a.value?.latLonFields[t].map((e) => ({
      value: e,
      label: e
    })), A = () => _.value || O.value.match(/\.(zip|csv|json|geojson)$/), g = (t) => {
      ue(t), O.value = "";
    }, de = (t, e) => {
      O.value = t.trim(), e ? T.value = !0 : T.value = !1;
    }, Ve = (t) => {
      E.value = t, H.value = !1;
    }, Ae = (t) => {
      a.value.config.name = t.trim();
      const e = a.value?.config.sublayers;
      (e ? t && e.length > 0 : t.trim()) ? $.value = !0 : $.value = !1;
    }, xe = (t) => {
      a.value.config.sublayers = t, t.length > 0 && a.value?.config.name ? $.value = !0 : $.value = !1;
    }, $e = (t) => {
      if (d.nested = t, x.value = [], P.value += 1, E.value === w.MAPIMAGE) {
        a.value.layers = k.value.createLayerHierarchy(
          a.value.layersRaw,
          d.nested
        );
        const e = new Set(
          (a.value?.config?.sublayers ?? []).map((c) => c.index)
        );
        d.nested ? Oe(a, e) : Me(a, e);
      } else if (E.value === w.WMS) {
        a.value.layers = k.value.mapWmsLayerList(
          a.value.layersRaw,
          d.nested
        );
        const e = new Set((a.value?.config?.sublayers ?? []).map((c) => c.id));
        d.nested ? Ce(a, e) : Te(a, e);
      }
      xe(Se(x.value));
    }, Oe = (t, e) => {
      const c = /* @__PURE__ */ new Map();
      for (const n of t.value.layersRaw)
        if (n.parentLayerId !== -1) {
          const I = c.get(n.parentLayerId) || [];
          I.push(n.id), c.set(n.parentLayerId, I);
        }
      const p = (n) => {
        const I = c.get(n);
        return I ? I.every((Z) => c.has(Z) ? p(Z) : e.has(Z)) : !1;
      }, F = (n) => {
        if (p(n))
          x.value.push(n);
        else {
          const I = c.get(n);
          if (I)
            for (const Z of I)
              e.has(Z) && x.value.push(Z);
        }
      };
      for (const n of c.keys()) F(n);
      for (const n of t.value.layersRaw)
        n.parentLayerId === -1 && !c.has(n.id) && e.has(n.id) && x.value.push(n.id);
      x.value = Array.from(new Set(x.value));
    }, Ce = (t, e) => {
      const c = (n) => !n.layers || n.layers.length === 0 ? e.has(n.name) : n.layers.every((I) => c(I)), p = (n) => {
        c(n) ? x.value.push(n.name) : n.layers && n.layers.forEach(p);
      }, F = t.value.layersRaw[0];
      F && F.layers && F.layers.forEach((n) => p(n)), x.value = Array.from(new Set(x.value));
    }, Me = (t, e) => {
      const c = (p) => {
        const F = t.value.layersRaw.filter((n) => n.parentLayerId === p);
        if (F.length > 0)
          for (const n of F)
            e.has(n.id) ? x.value.push(n.id) : c(n.id);
        else x.value.push(p);
      };
      for (const p of t.value.layersRaw)
        e.has(p.id) && c(p.id);
      x.value = Array.from(new Set(x.value));
    }, Te = (t, e) => {
      const c = (F) => {
        F.layers && F.layers.length > 0 ? F.layers.forEach(c) : x.value.push(F.name);
      }, p = t.value.layersRaw[0];
      for (const F of e) {
        const n = p.layers.find((I) => I.name === F);
        n && n.layers && n.layers.length > 0 ? c(n) : n && x.value.push(n.name);
      }
      x.value = Array.from(new Set(x.value));
    }, Se = (t) => t.map((e) => {
      switch (E.value) {
        case w.MAPIMAGE:
          return {
            index: e,
            state: { opacity: 1, visibility: !0 }
          };
        case w.WMS: {
          const c = e.lastIndexOf("#");
          return { id: e.substring(0, c) };
        }
        default:
          return {
            id: e
          };
      }
    }), ze = () => {
      W.value = a.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      do
        U.value = Math.random().toString(36).substring(2, 9);
      while (h.$vApp.$el.getElementById(U.value + "-hue-slider") !== null);
    }, Ie = (t) => {
      a.value.config.colour = t.colors.hex.substring(0, 7), Ge(() => {
        S.value.querySelector(".vacp-copy-button").style.backgroundColor = a.value?.config.colour;
      });
    }, Re = () => {
      T.value = !1, d.goToStep(0);
    }, Ne = () => {
      x.value = [], $.value = !1, d.goToStep(1);
    };
    return (t, e) => {
      const c = De("panel-screen");
      return v(), B(c, { panel: r.panel }, {
        header: R(() => [
          he(y(o(l)("wizard.title")), 1)
        ]),
        content: R(() => [
          C(Nl, { activeStep: z.value }, {
            default: R(() => [
              C(pe, {
                title: o(l)("wizard.upload.title"),
                summary: O.value
              }, {
                default: R(() => [
                  s("form", {
                    name: "upload",
                    onSubmit: J,
                    onClick: e[1] || (e[1] = (p) => V.value = !1)
                  }, [
                    C(N, {
                      type: "file",
                      name: "file",
                      label: o(l)("wizard.upload.file.label"),
                      help: o(l)("wizard.upload.file.help"),
                      onUpload: g,
                      "aria-label": o(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    e[12] || (e[12] = s("span", { class: "block text-center mb-10" }, "or", -1)),
                    C(N, {
                      type: "url",
                      name: "url",
                      modelValue: O.value,
                      "onUpdate:modelValue": e[0] || (e[0] = (p) => O.value = p),
                      label: o(l)("wizard.upload.url.label"),
                      onLink: de,
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.upload.url.error.required"),
                        invalid: o(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": o(l)("wizard.upload.url.label")
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    C(ve, {
                      onSubmit: J,
                      onCancel: Re,
                      disabled: !T.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              C(pe, {
                title: o(l)("wizard.format.title"),
                summary: K.value
              }, {
                default: R(() => [
                  s("form", {
                    name: "format",
                    onSubmit: le
                  }, [
                    ie.value ? (v(), b("div", Ul, [
                      e[13] || (e[13] = s("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        s("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        s("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      s("span", _l, y(o(l)("wizard.format.info.cors")), 1)
                    ])) : L("", !0),
                    C(N, {
                      type: "select",
                      name: "type",
                      modelValue: E.value,
                      "onUpdate:modelValue": e[2] || (e[2] = (p) => E.value = p),
                      onSelect: Ve,
                      size: A() ? ee.length : X.length,
                      label: A() ? o(l)("wizard.format.type.file") : o(l)("wizard.format.type.service"),
                      options: A() ? ee : X,
                      formatError: H.value,
                      failureError: Y.value,
                      validation: D.value,
                      "validation-messages": {
                        required: o(l)("wizard.format.type.error.required"),
                        invalid: o(l)("wizard.format.type.error.invalid"),
                        failure: `${o(l)("wizard.format.type.error.failure")}.${ie.value ? " " + o(l)("wizard.format.warn.cors") + "." : ""}${" " + o(l)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: e[3] || (e[3] = Ee(() => {
                      }, ["stop"])),
                      "aria-label": o(l)("wizard.format.type.service")
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    C(ve, {
                      onSubmit: le,
                      onCancel: e[4] || (e[4] = () => {
                        M.value = !1, H.value = !1, Y.value = !1, O.value ? T.value = !0 : T.value = !1, D.value = !1, o(d).goToStep(0), K.value = "";
                      }),
                      animation: !0,
                      disabled: M.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              C(pe, {
                title: o(l)("wizard.configure.title")
              }, {
                default: R(() => [
                  s("form", {
                    name: "configure",
                    onSubmit: i,
                    ref_key: "formElement",
                    ref: S
                  }, [
                    a.value?.configOptions.includes("name") ? (v(), B(N, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: a.value.config.name,
                      "onUpdate:modelValue": e[5] || (e[5] = (p) => a.value.config.name = p),
                      onLink: Ae,
                      label: o(l)("wizard.configure.name.label"),
                      "aria-label": o(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.configure.name.error.required")
                      }
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages"])) : L("", !0),
                    a.value?.configOptions.includes("nameField") ? (v(), B(N, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: a.value.config.nameField,
                      "onUpdate:modelValue": e[6] || (e[6] = (p) => a.value.config.nameField = p),
                      label: o(l)("wizard.configure.nameField.label"),
                      "aria-label": o(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: u()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("tooltipField") ? (v(), B(N, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: a.value.config.tooltipField,
                      "onUpdate:modelValue": e[7] || (e[7] = (p) => a.value.config.tooltipField = p),
                      label: o(l)("wizard.configure.tooltipField.label"),
                      "aria-label": o(l)("wizard.configure.tooltipField.label"),
                      options: u()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("latField") ? (v(), B(N, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: a.value.config.latField,
                      "onUpdate:modelValue": e[8] || (e[8] = (p) => a.value.config.latField = p),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.latField.label"),
                      "aria-label": o(l)("wizard.configure.latField.label"),
                      options: G("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("longField") ? (v(), B(N, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: a.value.config.longField,
                      "onUpdate:modelValue": e[9] || (e[9] = (p) => a.value.config.longField = p),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.longField.label"),
                      "aria-label": o(l)("wizard.configure.longField.label"),
                      options: G("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("sublayers") ? (v(), b("div", Bl, [
                      C(N, {
                        type: "checkbox",
                        name: "nested",
                        onNested: $e,
                        label: o(l)("wizard.configure.sublayers.nested"),
                        "aria-label": o(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (v(), B(N, {
                        type: "select",
                        key: P.value,
                        name: "sublayers",
                        modelValue: a.value.config.sublayers,
                        "onUpdate:modelValue": e[10] || (e[10] = (p) => a.value.config.sublayers = p),
                        onSelect: xe,
                        label: o(l)("wizard.configure.sublayers.label"),
                        "aria-label": o(l)("wizard.configure.sublayers.label"),
                        options: a.value.layers,
                        selectedValues: x.value,
                        sublayerOptions: Se,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: o(l)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: e[11] || (e[11] = Ee(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : L("", !0),
                    s("label", {
                      class: "sr-only",
                      for: `${U.value}-color-hex`
                    }, y(o(l)("wizard.configure.colour.hex")), 9, ql),
                    a.value?.configOptions.includes("colour") ? (v(), b("label", Wl, y(o(l)("wizard.configure.colour.label")), 1)) : L("", !0),
                    a.value?.configOptions.includes("colour") ? (v(), B(o(je), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: U.value,
                      color: W.value,
                      onColorChange: Ie
                    }, {
                      "hue-range-input-label": R(() => [
                        s("span", Hl, y(o(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": R(() => [
                        s("span", Dl, y(o(l)("wizard.configure.colour.copy")), 1),
                        e[14] || (e[14] = s("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          s("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          s("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : L("", !0),
                    C(ve, {
                      onSubmit: i,
                      onCancel: Ne,
                      disabled: !$.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          V.value ? (v(), b("div", {
            key: 0,
            class: te(["p-3 border-solid border-2", Q.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, y(re.value) + " " + y(o(l)(`wizard.upload.${Q.value ? "success" : "fail"}`)), 3)) : L("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), ra = /* @__PURE__ */ ne(Gl, [["__scopeId", "data-v-3f35afca"]]);
export {
  ra as default
};
