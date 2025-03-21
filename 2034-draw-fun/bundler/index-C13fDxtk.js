import { defineComponent as le, inject as pe, reactive as de, watch as Q, onMounted as me, onUnmounted as ue, openBlock as ye, createElementBlock as ge, markRaw as _ } from "vue";
import "tiny-emitter";
import { F as we, G as ee, L as he } from "./main-cCCMKK6Z.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import X from "@arcgis/core/geometry/Point";
import E from "@arcgis/core/geometry/Polygon";
import T from "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import G from "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import { useI18n as fe } from "vue-i18n";
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
import { u as te } from "./draw-store-lo5oHBI6.js";
import ve from "@arcgis/core/widgets/Sketch";
import { SimpleFillSymbol as V, SimpleLineSymbol as Z, SimpleMarkerSymbol as be } from "@arcgis/core/symbols";
class xe extends we {
  /**
   * Parses the draw tool config JSON snippet from the config file and save to the fixture store.
   * Placeholder for now until we have config options.
   */
  /**
   */
  _parseConfig(u) {
    if (!u) return;
    const l = te(this.$vApp.$pinia);
    u.defaultTool && l.setActiveTool(u.defaultTool);
  }
}
const Re = {
  id: "drawing-a11y-status",
  class: "sr-only"
}, N = "RampDrawGraphicsLayer", De = /* @__PURE__ */ le({
  __name: "draw",
  setup(j) {
    const { t: u } = fe(), l = pe("iApi"), i = te();
    let n, U, g, s, L, P = !1, w, p = [];
    const O = de([]), A = (e) => {
      if (L && (g.remove(L), L = void 0), !e) return;
      let o;
      switch (e.geometry.type) {
        case "point":
        case "multipoint":
          o = new be({
            color: [255, 255, 0, 0.8],
            size: 16,
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
          break;
        case "polyline":
          o = new Z({
            color: [255, 255, 0, 0.8],
            width: 6
          });
          break;
        default:
          o = new V({
            color: [255, 255, 0, 0.3],
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
      }
      L = new G({
        geometry: e.geometry,
        symbol: o
      }), g.add(L);
    };
    Q(
      () => i.selectedGraphicId,
      (e) => {
        if (!(!n || !g))
          if (e) {
            const t = g.graphics.toArray().find((a) => a.attributes && a.attributes.id === e);
            t && (n.update([t]), A(t));
          } else
            n.cancel(), A(void 0);
      }
    );
    const oe = async () => {
      if (!g || !n) return;
      const e = await l.geo.map.esriView, o = { x: e.width / 2, y: e.height / 2 }, t = {
        x: o.x,
        y: o.y,
        width: 20,
        height: 20
      }, d = (await e.hitTest(t)).results.filter((c) => c.graphic.layer !== g ? !1 : c.graphic.attributes && c.graphic.attributes.id);
      if (d.length > 0) {
        s = d[0].graphic, n.update([s]), s.attributes?.id && i.selectGraphic(s.attributes.id);
        const c = document.getElementById("drawing-a11y-status");
        c && (c.textContent = u("draw.graphic.selected", {
          type: s.attributes?.type || "shape"
        }));
      } else {
        n.cancel(), s = null, i.clearSelection();
        const c = document.getElementById("drawing-a11y-status");
        c && (c.textContent = u("draw.graphic.none"));
      }
    }, ie = async () => {
      if (!n || !i.activeTool) return;
      const e = l.geo.map.esriView, o = { x: Math.floor(e.width / 2), y: Math.floor(e.height / 2) }, t = e.toMap(o), a = e.extent, d = a.width, c = a.height, D = Math.min(d, c) / 10;
      let b;
      switch (i.activeTool) {
        case "point":
          b = new G({
            geometry: new X({
              x: t.x,
              y: t.y,
              spatialReference: e.spatialReference
            }),
            symbol: n.viewModel.pointSymbol
          });
          break;
        case "polyline":
          b = new G({
            geometry: new T({
              paths: [
                [
                  [t.x - D / 2, t.y],
                  [t.x + D / 2, t.y]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: n.viewModel.polylineSymbol
          });
          break;
        case "polygon":
        case "rectangle":
          const f = D / 2;
          b = new G({
            geometry: new E({
              rings: [
                [
                  [t.x - f, t.y - f],
                  [t.x + f, t.y - f],
                  [t.x + f, t.y + f],
                  [t.x - f, t.y + f],
                  [t.x - f, t.y - f]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: n.viewModel.polygonSymbol || new V({
              color: [0, 255, 0, 0.3],
              outline: {
                color: [0, 255, 0, 1],
                width: 1
              }
            })
          });
          break;
        case "circle":
          const r = D / 2, m = 36, M = [];
          for (let C = 0; C <= m; C++) {
            const I = C / m * 2 * Math.PI, B = t.x + r * Math.cos(I), v = t.y + r * Math.sin(I);
            M.push([B, v]);
          }
          b = new G({
            geometry: new E({
              rings: [M],
              spatialReference: e.spatialReference
            }),
            symbol: n.viewModel.polygonSymbol || new V({
              color: [255, 0, 255, 0.3],
              outline: {
                color: [255, 0, 255, 1],
                width: 1
              }
            })
          });
          break;
        default:
          console.warn("Unknown tool type:", i.activeTool);
          return;
      }
      if (b) {
        const f = `graphic-${Date.now()}`;
        b.attributes = { id: f, type: i.activeTool }, g.add(b), i.addGraphic({
          id: f,
          type: i.activeTool,
          geometry: b.geometry,
          attributes: b.attributes
        }), s = void 0, i.clearSelection(), i.setActiveTool(""), n && n.cancel();
        const r = document.getElementById("drawing-a11y-status");
        r && (r.textContent = u("draw.graphic.created", {
          type: i.activeTool
        }));
      }
    }, W = (e) => {
      const o = l.geo.map.esriView.container;
      if (!(!document.activeElement || !o.contains(document.activeElement)))
        switch (e.key) {
          case "Enter":
            if (e.preventDefault(), i.activeTool)
              if ((i.activeTool === "polyline" || i.activeTool === "polygon") && (P || p.length === 0)) {
                const t = l.geo.map.esriView, a = { x: Math.floor(t.width / 2), y: Math.floor(t.height / 2) }, d = t.toMap(a);
                if (P) {
                  p.push([d.x, d.y]), i.activeTool === "polyline" ? w.geometry = new T({
                    paths: [p],
                    spatialReference: t.spatialReference
                  }) : w.geometry = new E({
                    rings: [p],
                    spatialReference: t.spatialReference
                  }), w.notifyChange("geometry");
                  const c = document.getElementById("drawing-a11y-status");
                  c && (c.textContent = u("draw.multiPoint.pointAdded", {
                    count: p.length
                  }));
                } else {
                  P = !0, p = [[d.x, d.y]], i.activeTool === "polyline" ? w = new G({
                    geometry: new T({
                      paths: [p],
                      spatialReference: t.spatialReference
                    }),
                    symbol: n.viewModel.polylineSymbol || new Z({ color: [0, 0, 255, 1], width: 2 })
                  }) : w = new G({
                    geometry: new E({
                      rings: [p],
                      spatialReference: t.spatialReference
                    }),
                    symbol: n.viewModel.polygonSymbol || new V({
                      color: [0, 255, 0, 0.3],
                      outline: { color: [0, 255, 0, 1], width: 1 }
                    })
                  }), w.attributes = { id: `temp-graphic-${Date.now()}`, type: i.activeTool }, g.add(w);
                  const c = document.getElementById("drawing-a11y-status");
                  c && (c.textContent = u("draw.multiPoint.started", {
                    type: i.activeTool,
                    count: 1
                  }));
                }
              } else
                ie();
            else
              oe();
            break;
          case "Delete":
          case "Backspace":
            if (P && p.length > 1) {
              e.preventDefault(), p.pop();
              const t = l.geo.map.esriView;
              i.activeTool === "polyline" ? w.geometry = new T({
                paths: [p],
                spatialReference: t.spatialReference
              }) : w.geometry = new E({
                rings: [p],
                spatialReference: t.spatialReference
              }), w.notifyChange("geometry");
              const a = document.getElementById("drawing-a11y-status");
              a && (a.textContent = u("draw.multiPoint.pointRemoved", { count: p.length }));
            } else if (P && p.length === 1) {
              e.preventDefault(), g.remove(w), w = null, p = [], P = !1;
              const t = document.getElementById("drawing-a11y-status");
              t && (t.textContent = u("draw.multiPoint.canceled"));
            } else if (s) {
              e.preventDefault(), n.delete(), g.remove(s), typeof i.removeGraphic == "function" && i.removeGraphic(s.attributes.id), s = null, A(void 0);
              const t = document.getElementById("drawing-a11y-status");
              t && (t.textContent = u("draw.graphic.deleted"));
            }
            break;
          case "Escape":
            if (P) {
              e.preventDefault();
              const t = i.activeTool === "polyline" ? 2 : 3;
              if (p.length >= t) {
                const a = `graphic-${Date.now()}`;
                if (w.attributes.id = a, i.activeTool === "polygon") {
                  const c = p[0], D = p[p.length - 1];
                  (c[0] !== D[0] || c[1] !== D[1]) && (p.push([c[0], c[1]]), w.geometry = new E({
                    rings: [p],
                    spatialReference: l.geo.map.esriView.spatialReference
                  }));
                }
                i.addGraphic({
                  id: a,
                  type: i.activeTool,
                  geometry: w.geometry,
                  attributes: w.attributes
                }), s = w, i.selectGraphic(a), i.setActiveTool(""), P = !1, p = [], n.update([s]);
                const d = document.getElementById("drawing-a11y-status");
                d && (d.textContent = u("draw.multiPoint.completed", {
                  type: s.attributes.type,
                  count: s.geometry.type === "polyline" ? s.geometry.paths[0].length : s.geometry.rings[0].length - 1
                }));
              } else {
                g.remove(w), w = null, p = [], P = !1, i.setActiveTool("");
                const a = document.getElementById("drawing-a11y-status");
                a && (a.textContent = u("draw.multiPoint.notEnoughPoints", {
                  type: i.activeTool,
                  min: t
                }));
              }
            } else if (i.activeTool) {
              e.preventDefault(), i.setActiveTool(""), n.cancel();
              const t = document.getElementById("drawing-a11y-status");
              t && (t.textContent = u("draw.tool.canceled"));
            } else if (s || n.state === "update") {
              e.preventDefault(), n.cancel(), s = null, A(void 0), i.clearSelection();
              const t = document.getElementById("drawing-a11y-status");
              t && (t.textContent = u("draw.graphic.deselected"));
            }
            break;
        }
    }, Y = (e) => {
      const o = l.geo.map.esriView.container;
      if (!document.activeElement || !o.contains(document.activeElement) || !s || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault(), e.stopPropagation();
      const a = 10, d = e.shiftKey, c = e.altKey, D = l.geo.map.esriView;
      let b = 0, f = 0;
      e.key === "ArrowLeft" && (b = -a), e.key === "ArrowRight" && (b = a), e.key === "ArrowUp" && (f = -a), e.key === "ArrowDown" && (f = a);
      const r = s.geometry;
      let m;
      if (r.type === "point")
        m = { x: r.x, y: r.y };
      else {
        const y = r.extent;
        m = { x: (y.xmin + y.xmax) / 2, y: (y.ymin + y.ymax) / 2 };
      }
      const M = D.toScreen(m);
      M.x += b, M.y += f;
      const C = D.toMap(M), I = C.x - m.x, B = C.y - m.y;
      let v;
      if (r.type === "point") {
        if (!d && !c)
          v = new X({
            x: r.x + I,
            y: r.y + B,
            spatialReference: r.spatialReference
          });
        else if (d) {
          v = r.clone();
          const y = document.getElementById("drawing-a11y-status");
          y && (y.textContent = u("draw.point.resize.unsupported"));
        } else if (c) {
          v = r.clone();
          const y = document.getElementById("drawing-a11y-status");
          y && (y.textContent = u("draw.point.rotate.unsupported"));
        }
      } else if (r.type === "polyline") {
        if (!d && !c) {
          const h = r.paths.map((x) => x.map(([R, S]) => [R + I, S + B]));
          v = new T({
            paths: h,
            spatialReference: r.spatialReference
          });
        } else if (d) {
          const y = r, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, x = y.paths.map(
            (R) => R.map(([S, k]) => [m.x + (S - m.x) * h, m.y + (k - m.y) * h])
          );
          v = new T({
            paths: x,
            spatialReference: r.spatialReference
          });
        } else if (c) {
          const y = r, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const x = Math.cos(h), R = Math.sin(h), S = y.paths.map(
              (k) => k.map(([F, K]) => {
                const $ = F - m.x, z = K - m.y, q = $ * x - z * R, H = $ * R + z * x;
                return [m.x + q, m.y + H];
              })
            );
            v = new T({
              paths: S,
              spatialReference: r.spatialReference
            });
          } else
            v = r.clone();
        }
      } else if (r.type === "polygon") {
        if (!d && !c) {
          const h = r.rings.map((x) => x.map(([R, S]) => [R + I, S + B]));
          v = new E({
            rings: h,
            spatialReference: r.spatialReference
          });
        } else if (d) {
          const y = r, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, x = y.rings.map(
            (R) => R.map(([S, k]) => [m.x + (S - m.x) * h, m.y + (k - m.y) * h])
          );
          v = new E({
            rings: x,
            spatialReference: r.spatialReference
          });
        } else if (c) {
          const y = r, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const x = Math.cos(h), R = Math.sin(h), S = y.rings.map(
              (k) => k.map(([F, K]) => {
                const $ = F - m.x, z = K - m.y, q = $ * x - z * R, H = $ * R + z * x;
                return [m.x + q, m.y + H];
              })
            );
            v = new E({
              rings: S,
              spatialReference: r.spatialReference
            });
          } else
            v = r.clone();
        }
      }
      if (v) {
        s.geometry = v, s.set("geometry", v), A(s), s.attributes?.id && i.updateGraphicGeometry(s.attributes.id, v), D.goTo(D.center, { duration: 0 }), A(s);
        const y = d ? "resized" : c ? "rotated" : "moved", h = document.getElementById("drawing-a11y-status");
        h && (h.textContent = u(`draw.graphic.${y}`));
      }
    }, ne = async (e) => {
      if (i.activeTool) return;
      const t = await l.geo.map.esriView.hitTest(e);
      if (t.results.length) {
        const a = t.results.find(
          (d) => d.graphic.layer === g && d.graphic.attributes && d.graphic.attributes.id
        );
        if (a) {
          n.update([a.graphic]);
          return;
        }
      }
      n.cancel(), s = null, i.clearSelection();
    }, ae = async () => {
      await l.geo.map.viewPromise, l.geo.layer.getLayer(N) ? g = l.geo.layer.getLayer(N).esriLayer : (g = l.geo.layer.createLayer({
        id: N,
        layerType: he.GRAPHIC,
        cosmetic: !0,
        url: ""
      }), await l.geo.map.addLayer(g)), g?.esriLayer && (g = g.esriLayer), n = new ve({
        view: l.geo.map.esriView,
        layer: g,
        availableCreateTools: ["point", "multipoint", "polyline", "polygon", "rectangle", "circle"],
        updateOnGraphicClick: !0,
        visibleElements: {
          createTools: { point: !0, polyline: !0, polygon: !0, rectangle: !0, circle: !0 },
          selectionTools: { enable: !0 },
          settingsMenu: !1
        },
        visible: !1,
        creationMode: "update"
      }), l.geo.map.esriView.ui.add(n, "bottom-right"), U = n.on("create", se), n.on("update", ce), l.geo.map.esriView.on("click", ne), document.addEventListener("keydown", W), document.addEventListener("keydown", Y, { capture: !0 }), re();
    }, J = () => {
      n && (l.geo.map.esriView && l.geo.map.esriView.ui.remove(n), U && U.remove(), n.destroy()), document.removeEventListener("keydown", W), document.removeEventListener("keydown", Y, { capture: !0 }), P = !1, w = null, p = [], n = null, g = null;
    }, re = () => {
      const e = document.getElementById("drawing-a11y-status");
      e && e.remove();
      const o = document.createElement("div");
      o.id = "drawing-a11y-status", o.setAttribute("role", "status"), o.setAttribute("aria-live", "polite"), o.style.position = "absolute", o.style.width = "1px", o.style.height = "1px", o.style.padding = "0", o.style.margin = "-1px", o.style.overflow = "hidden", o.style.clip = "rect(0, 0, 0, 0)", o.style.whiteSpace = "nowrap", o.style.border = "0", document.body.appendChild(o);
    }, se = (e) => {
      if (e.state === "complete") {
        const o = e.graphic, t = `graphic-${Date.now()}`;
        o.attributes = o.attributes || {}, o.attributes.id = t, i.addGraphic({
          id: t,
          type: e.tool,
          geometry: o.geometry,
          attributes: o.attributes
        }), s = o, i.selectGraphic(t), i.setActiveTool("");
      }
    }, ce = (e) => {
      if (e.state === "start") {
        const o = e.graphics;
        if (o.length > 0) {
          const t = o[0];
          if (s = t, t.attributes?.id) {
            i.selectGraphic(t.attributes.id);
            const a = document.getElementById("drawing-a11y-status");
            a && (a.textContent = u("draw.graphic.selected", {
              type: t.attributes?.type || "shape"
            }));
          }
        }
      } else if (e.state === "active")
        A(e.graphics[0]);
      else if (e.state === "complete") {
        const o = e.graphics;
        if (o.length > 0) {
          const t = o[0];
          if (t.attributes?.id) {
            i.updateGraphicGeometry(t.attributes.id, t.geometry);
            const a = document.getElementById("drawing-a11y-status");
            a && (a.textContent = u("draw.graphic.updated"));
          }
        }
      }
    };
    return me(async () => {
      await l.geo.map.viewPromise, await ae(), O.push(
        l.event.on(ee.MAP_DESTROYED, () => {
          J();
        })
      );
    }), Q(
      () => i.activeTool,
      (e) => {
        n && (e ? n.create(e) : n.cancel());
      }
    ), ue(() => {
      J(), O.forEach((o) => l.event.off(o));
      const e = document.getElementById("drawing-a11y-status");
      e && e.remove();
    }), (e, o) => (ye(), ge("div", Re));
  }
}), Se = { en: { "draw.multiPoint.started": "{type} drawing started with 1 point", "draw.multiPoint.pointAdded": "Point added {count} points total", "draw.multiPoint.pointRemoved": "Point removed {count} points remaining", "draw.multiPoint.canceled": "Drawing canceled", "draw.multiPoint.completed": "{type} completed with {count} points", "draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required", "draw.graphic.created": "{type} created", "draw.graphic.selected": "{type} selected", "draw.graphic.deselected": "Graphic deselected", "draw.graphic.deleted": "Graphic deleted", "draw.graphic.updated": "Graphic updated", "draw.graphic.none": "No graphic found", "draw.tool.canceled": "Drawing tool canceled", "draw.point.resize.unsupported": "Resizing not supported for point graphics", "draw.point.rotate.unsupported": "Rotation not supported for point graphics", "draw.move.up": "Moved up", "draw.move.down": "Moved down", "draw.move.left": "Moved left", "draw.move.right": "Moved right", "draw.resize.increase": "Increased size", "draw.resize.decrease": "Decreased size", "draw.rotate.clockwise": "Rotated clockwise", "draw.rotate.counterclockwise": "Rotated counter-clockwise", "draw.button.point": "Draw point", "draw.button.line": "Draw line", "draw.button.polygon": "Draw polygon", "draw.button.rectangle": "Draw rectangle", "draw.button.circle": "Draw circle", "draw.point.tooltip": "Draw point", "draw.polyline.tooltip": "Draw polyline", "draw.polygon.tooltip": "Draw polygon", "draw.circle.tooltip": "Draw circle", "draw.rectangle.tooltip": "Draw rectangle" }, fr: { "draw.multiPoint.started": "Dessin de {type} commencé avec 1 point", "draw.multiPoint.pointAdded": "Point ajouté", "draw.multiPoint.pointRemoved": "Point supprimé", "draw.multiPoint.canceled": "Dessin annulé", "draw.multiPoint.completed": "{type} terminé avec {count} points", "draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}", "draw.graphic.created": "{type} créé", "draw.graphic.selected": "{type} sélectionné", "draw.graphic.deselected": "Graphique désélectionné", "draw.graphic.deleted": "Graphique supprimé", "draw.graphic.updated": "Graphique mis à jour", "draw.graphic.none": "Aucun graphique trouvé", "draw.tool.canceled": "Outil de dessin annulé", "draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points", "draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points", "draw.move.up": "Déplacé vers le haut", "draw.move.down": "Déplacé vers le bas", "draw.move.left": "Déplacé vers la gauche", "draw.move.right": "Déplacé vers la droite", "draw.resize.increase": "Taille augmentée", "draw.resize.decrease": "Taille réduite", "draw.rotate.clockwise": "Rotation dans le sens horaire", "draw.rotate.counterclockwise": "Rotation dans le sens antihoraire", "draw.button.point": "Dessiner un point", "draw.button.line": "Dessiner une ligne", "draw.button.polygon": "Dessiner un polygone", "draw.button.rectangle": "Dessiner un rectangle", "draw.button.circle": "Dessiner un cercle", "draw.point.tooltip": "Dessiner un point", "draw.polyline.tooltip": "Dessiner une polyligne", "draw.polygon.tooltip": "Dessiner un polygone", "draw.circle.tooltip": "Dessiner un cercle", "draw.rectangle.tooltip": "Dessiner un rectangle" } };
class lt extends xe {
  async init() {
    const { el: u } = this.mount(De, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(u.childNodes[0]), Object.entries(Se).forEach((i) => this.$iApi.$i18n.mergeLocaleMessage(...i)), this.$iApi.component("point-icon", _(import("./point-icon-CjrxDIj_.js"))), this.$iApi.component("line-icon", _(import("./line-icon-BCp4HrxX.js"))), this.$iApi.component("polygon-icon", _(import("./polygon-icon-D19NUUbR.js"))), this.$iApi.component("circle-icon", _(import("./circle-icon-huPnNd5N.js"))), this.$iApi.component("rectangle-icon", _(import("./rectangle-icon-CSnCcvdq.js"))), this._parseConfig(this.config);
  }
  async added() {
    this.$iApi.event.on(ee.MAP_CREATED, () => {
      this.init();
    });
  }
}
export {
  lt as default
};
