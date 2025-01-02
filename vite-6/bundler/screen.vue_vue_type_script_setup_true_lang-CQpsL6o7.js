import { defineComponent as R, resolveDirective as b, withDirectives as y, openBlock as s, createElementBlock as l, normalizeClass as L, unref as m, createElementVNode as d, inject as Y, ref as E, computed as j, onMounted as q, onBeforeUnmount as P, toDisplayString as h, createBlock as V, withCtx as w, createCommentVNode as S, createVNode as I, Fragment as U, renderList as F, createTextVNode as M, toRaw as J, resolveComponent as K } from "vue";
import { _ as Q, G as k, N as W } from "./main-DD4M6ybf.js";
import "pinia";
import { useI18n as $ } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
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
import X from "vuedraggable";
const Z = ["content", "aria-label"], ee = ["disabled", "aria-label"], te = /* @__PURE__ */ R({
  __name: "reorder-button",
  props: {
    disabled: {
      type: Boolean
    },
    direction: {
      type: String,
      required: !0
    }
  },
  setup(u) {
    const { t: o } = $();
    return (p, n) => {
      const f = b("tippy"), _ = b("focus-item");
      return u.disabled ? (s(), l("button", {
        key: 1,
        type: "button",
        class: L(`pb-10 text-gray-300 p-8 ${u.direction === "up" ? "rotate-180" : ""}`),
        disabled: u.disabled,
        "aria-label": m(o)(`layer-reorder.move.${u.direction}`)
      }, n[1] || (n[1] = [
        d("svg", {
          class: "fill-current w-20 h-20",
          viewBox: "0 0 23 21"
        }, [
          d("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
        ], -1)
      ]), 10, ee)) : y((s(), l("button", {
        key: 0,
        type: "button",
        class: L(`pb-10 text-gray-500 hover:text-black p-8 ${u.direction === "up" ? "rotate-180" : ""}`),
        content: m(o)(`layer-reorder.move.${u.direction}`),
        "aria-label": m(o)(`layer-reorder.move.${u.direction}`)
      }, n[0] || (n[0] = [
        d("svg", {
          class: "fill-current w-20 h-20",
          viewBox: "0 0 23 21"
        }, [
          d("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
        ], -1)
      ]), 10, Z)), [
        [f, {
          placement: "top-start",
          aria: "describedby"
        }],
        [_]
      ]);
    };
  }
}), O = /* @__PURE__ */ Q(te, [["__scopeId", "data-v-d96028bc"]]), re = {
  key: 0,
  class: "flex-1 ms-10"
}, oe = { class: "p-5" }, ae = ["aria-label", "content"], ie = { class: "flex items-center p-5 h-44 cursor-pointer hover:bg-gray-200" }, ne = ["onClick", "content", "aria-label"], se = {
  key: 0,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, de = {
  key: 1,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, le = { class: "flex-1 mx-10" }, pe = {
  key: 0,
  class: "items-center p-5 pl-30 default-focus-style cursor-pointer"
}, ce = ["content", "aria-label"], me = ["content", "aria-label"], ue = { class: "flex-1 mx-10" }, ve = /* @__PURE__ */ R({
  __name: "layer-component",
  setup(u) {
    const o = Y("iApi"), { t: p } = $(), n = E([]), f = E([]), _ = E([]), D = E([]), z = j(() => o.animate), g = () => {
      let e = {};
      n.value.forEach((r) => {
        e[r.id] = r.isExpanded;
      }), n.value = [];
      const t = o.geo.layer.layerOrderIds(), a = [...J(o.geo.layer.allLayersOnMap(!0))].filter(
        (r) => !r.isCosmetic && r.layerState !== W.ERROR
      );
      n.value = a.reverse().map((r, v) => {
        const c = t.indexOf(r.id);
        return {
          id: r.id,
          uid: r.uid,
          name: "",
          orderIdx: c,
          componentIdx: v,
          isExpanded: e[r.id] || !1,
          isLoaded: !1,
          supportsSublayers: r.supportsSublayers,
          sublayers: []
        };
      }), a.forEach((r) => {
        r.loadPromise().then(() => {
          N(r);
        }).catch(() => 1);
      });
    }, N = (e) => {
      let t = n.value.find((a) => a.id === e.id);
      t && (t.name = e.name, t.sublayers = e.sublayers.filter((a) => a !== void 0 && !a.isRemoved).map((a) => ({
        id: a.id,
        name: a.name
      })), t.isLoaded = !0);
    }, G = (e) => {
      e.supportsSublayers && (e.isExpanded = !e.isExpanded, o.updateAlert(
        p(e.isExpanded ? "layer-reorder.expanded" : "layer-reorder.collapsed", {
          name: e.name
        })
      ));
    }, H = () => {
      f.value = n.value.map((e) => e.orderIdx);
    }, T = (e) => {
      if (!e.moved)
        return;
      const t = e.moved.element, a = e.moved.oldIndex, r = e.moved.newIndex;
      if (a === r)
        return;
      const v = o.geo.layer.getLayer(t.uid), c = f.value[r];
      o.geo.map.reorder(v, c), o.updateAlert(
        p("layer-reorder.layermoved", {
          name: t.name,
          index: c
        })
      );
    }, C = (e, t) => {
      const a = o.geo.layer.getLayer(e.id), r = n.value.indexOf(e);
      if (a === void 0 || r === -1)
        return;
      const v = r - t, c = n.value[v].orderIdx;
      o.geo.map.reorder(a, c), o.updateAlert(
        p("layer-reorder.layermoved", {
          name: e.name,
          index: c
        })
      );
    }, A = (e) => e < 0 || e > n.value.length - 1;
    return q(() => {
      g(), _.value.push(
        o.event.on(k.LAYER_REMOVE, () => {
          g();
        })
      ), _.value.push(
        o.event.on(k.LAYER_LAYERSTATECHANGE, () => {
          g();
        })
      ), _.value.push(
        o.event.on(k.MAP_REORDER, () => {
          g();
        })
      );
    }), P(() => {
      _.value.forEach((e) => o.event.off(e)), D.value.forEach((e) => e());
    }), (e, t) => {
      const a = b("truncate"), r = b("focus-item"), v = b("tippy"), c = b("focus-container"), B = b("focus-list");
      return s(), l("div", null, [
        n.value.length === 0 ? y((s(), l("div", re, [
          d("span", oe, h(m(p)("layer-reorder.nolayers")), 1)
        ])), [
          [a]
        ]) : (s(), V(m(X), {
          key: 1,
          class: "p-3",
          modelValue: n.value,
          "onUpdate:modelValue": t[0] || (t[0] = (i) => n.value = i),
          "item-key": "uid",
          animation: z.value ? 200 : 0,
          onChange: T,
          onStart: H
        }, {
          item: w(({ element: i }) => [
            i.isLoaded ? y((s(), l("div", {
              key: 0,
              class: L(`
                        mt-4
                        relative
                        ${i.isExpanded ? "hover:bg-gray-200" : ""}
                        border-2
                        border-gray-300
                        default-focus-style
                    `),
              "aria-label": i.name,
              content: i.name
            }, [
              t[3] || (t[3] = d("div", { class: "display-none" }, null, -1)),
              d("div", ie, [
                i.supportsSublayers ? y((s(), l("button", {
                  key: 0,
                  type: "button",
                  onClick: (x) => G(i),
                  class: "text-gray-500 hover:text-black p-5",
                  content: m(p)(`layer-reorder.${i.isExpanded ? "collapse" : "expand"}`),
                  "aria-label": m(p)(`layer-reorder.${i.isExpanded ? "collapse" : "expand"}`)
                }, [
                  i.isExpanded ? (s(), l("svg", se, t[1] || (t[1] = [
                    d("path", {
                      d: "M0 0h24v24H0z",
                      fill: "none"
                    }, null, -1),
                    d("path", { d: "M19 13H5v-2h14v2z" }, null, -1)
                  ]))) : (s(), l("svg", de, t[2] || (t[2] = [
                    d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }, null, -1)
                  ])))
                ], 8, ne)), [
                  [r],
                  [v, {
                    placement: "right",
                    aria: "describedby"
                  }]
                ]) : S("", !0),
                y((s(), l("div", le, [
                  d("span", null, h(i.name), 1)
                ])), [
                  [a]
                ]),
                I(O, {
                  disabled: A(i.componentIdx - 1),
                  direction: "up",
                  class: "px-7",
                  onClick: (x) => C(i, 1)
                }, null, 8, ["disabled", "onClick"]),
                I(O, {
                  disabled: A(i.componentIdx + 1),
                  direction: "down",
                  class: "px-7",
                  onClick: (x) => C(i, -1)
                }, null, 8, ["disabled", "onClick"])
              ]),
              i.isExpanded && i.sublayers.length > 0 ? y((s(), l("div", pe, [
                (s(!0), l(U, null, F(i.sublayers, (x) => y((s(), l("div", {
                  key: x.id,
                  class: "m-15 default-focus-style",
                  content: x.name,
                  "aria-label": x.name
                }, [
                  M(h(x.name), 1)
                ], 8, ce)), [
                  [a],
                  [v, {
                    placement: "bottom-start",
                    aria: "describedby"
                  }],
                  [c]
                ])), 128))
              ])), [
                [B]
              ]) : S("", !0)
            ], 10, ae)), [
              [v, {
                placement: "top-start",
                aria: "describedby"
              }],
              [c]
            ]) : y((s(), l("div", {
              key: 1,
              class: "flex items-center p-5 mx-8 h-44 default-focus-style",
              content: m(p)("layer-reorder.loading"),
              "aria-label": m(p)("layer-reorder.loading"),
              "truncate-trigger": ""
            }, [
              t[4] || (t[4] = d("div", { class: "animate-spin spinner h-20 w-20 px-5" }, null, -1)),
              d("div", ue, [
                d("span", null, h(m(p)("layer-reorder.loading")), 1)
              ])
            ], 8, me)), [
              [v, {
                placement: "top-start",
                aria: "describedby"
              }],
              [c]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "animation"]))
      ]);
    };
  }
}), It = /* @__PURE__ */ R({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(u) {
    const { t: o } = $();
    return (p, n) => {
      const f = K("panel-screen");
      return s(), V(f, { panel: u.panel }, {
        header: w(() => [
          M(h(m(o)("layer-reorder.title")), 1)
        ]),
        content: w(() => [
          I(ve)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  It as _
};
