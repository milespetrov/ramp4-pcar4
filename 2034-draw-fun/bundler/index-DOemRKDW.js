import { defineComponent as ce, inject as pe, reactive as de, watch as Z, onMounted as ue, onUnmounted as me, markRaw as we } from "vue";
import { u as Y } from "./draw-store-Dw2-9J1-.js";
import "tiny-emitter";
import { G as oe, L as ye, F as ge } from "./main-BLwRIGwl.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import W from "@arcgis/core/geometry/Point";
import k from "@arcgis/core/geometry/Polygon";
import M from "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import G from "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import C from "@arcgis/core/symbols/SimpleFillSymbol";
import ee from "@arcgis/core/symbols/SimpleLineSymbol";
import he from "@arcgis/core/symbols/SimpleMarkerSymbol";
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
import ve from "@arcgis/core/widgets/Sketch";
const be = (I, r, b) => {
  const o = I[r];
  return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((t, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      i.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + r + (r.split("/").length !== b ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, F = "RampDrawGraphicsLayer", Re = /* @__PURE__ */ ce({
  __name: "draw",
  setup(I) {
    const { t: r } = fe(), b = (e) => r(e ? `draw.${e}` : "draw.unknown"), o = pe("iApi"), t = Y();
    let i = null, O = null, y = null, l = null, z = null, T = !1, w = null, u = [];
    const B = de([]), E = (e) => {
      if (z && (y?.remove(z), z = null), !e) return;
      let n;
      switch (e.geometry?.type) {
        case "point":
        case "multipoint":
          n = new he({
            color: [255, 255, 0, 0.8],
            size: 16,
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
          break;
        case "polyline":
          n = new ee({
            color: [255, 255, 0, 0.8],
            width: 6
          });
          break;
        default:
          n = new C({
            color: [255, 255, 0, 0.3],
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
      }
      z = new G({
        geometry: e.geometry,
        // @ts-expect-error esri type mismatch
        symbol: n
      }), y?.add(z);
    };
    Z(
      () => t.selectedGraphicId,
      (e, n) => {
        if (!(!i || !y)) {
          if (!e)
            i.cancel(), E();
          else if (e !== n) {
            const c = y.graphics.toArray().find((p) => p.attributes && p.attributes.id === e);
            c && (i.update([c]), E(c));
          }
        }
      }
    );
    const ie = async () => {
      if (!y || !i || t.activeTool !== "edit") return;
      await o.geo.map.viewPromise;
      const e = o.geo.map.esriView, n = { x: e.width / 2, y: e.height / 2 }, a = {
        x: n.x,
        y: n.y,
        width: 20,
        height: 20
      }, p = (await e.hitTest(a)).results.filter((m) => !("graphic" in m) || m.graphic.layer !== y ? !1 : !!m.graphic.attributes?.id);
      p.length > 0 ? (l = p[0].graphic, i.update([l]), l.attributes?.id && t.selectGraphic(l.attributes.id), o.updateAlert(
        r("draw.graphic.selected", {
          type: b(l.attributes?.type)
        })
      )) : (i.cancel(), l = null, t.clearSelection());
    }, re = async () => {
      if (!i || !t.activeTool) return;
      await o.geo.map.viewPromise;
      const e = o.geo.map.esriView, n = { x: Math.floor(e.width / 2), y: Math.floor(e.height / 2) }, a = e.toMap(n), c = e.extent, p = c.width, m = c.height, P = Math.min(p, m) / 10;
      let R;
      switch (t.activeTool) {
        case "point":
          R = new G({
            geometry: new W({
              x: a.x,
              y: a.y,
              spatialReference: e.spatialReference
            }),
            symbol: i.viewModel.pointSymbol
          });
          break;
        case "polyline":
          R = new G({
            geometry: new M({
              paths: [
                [
                  [a.x - P / 2, a.y],
                  [a.x + P / 2, a.y]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: i.viewModel.polylineSymbol
          });
          break;
        case "polygon":
        case "rectangle":
          const g = P / 2;
          R = new G({
            geometry: new k({
              rings: [
                [
                  [a.x - g, a.y - g],
                  [a.x + g, a.y - g],
                  [a.x + g, a.y + g],
                  [a.x - g, a.y + g],
                  [a.x - g, a.y - g]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: i.viewModel.polygonSymbol || new C({
              color: [0, 255, 0, 0.3],
              outline: {
                color: [0, 255, 0, 1],
                width: 1
              }
            })
          });
          break;
        case "circle":
          const s = P / 2, d = 36, L = [];
          for (let $ = 0; $ <= d; $++) {
            const _ = $ / d * 2 * Math.PI, V = a.x + s * Math.cos(_), h = a.y + s * Math.sin(_);
            L.push([V, h]);
          }
          R = new G({
            geometry: new k({
              rings: [L],
              spatialReference: e.spatialReference
            }),
            symbol: i.viewModel.polygonSymbol || new C({
              color: [255, 0, 255, 0.3],
              outline: {
                color: [255, 0, 255, 1],
                width: 1
              }
            })
          });
          break;
        default:
          console.warn("Unknown tool type:", t.activeTool);
          return;
      }
      if (R) {
        const g = `graphic-${Date.now()}`;
        R.attributes = { id: g, type: t.activeTool }, y?.add(R), t.addGraphic({
          id: g,
          type: t.activeTool,
          geometry: R.geometry,
          attributes: R.attributes
        }), t.activeTool !== "point" && (t.clearSelection(), t.setActiveTool(""), i.cancel()), o.updateAlert(
          r("draw.graphic.created", {
            type: b(t.activeTool)
          })
        );
      }
    }, J = (e) => {
      const n = o.geo.map.esriView?.container;
      if (!(!document.activeElement || !n?.contains(document.activeElement)))
        switch (e.key) {
          case "Enter":
            if (e.preventDefault(), t.activeTool && t.activeTool !== "edit")
              if ((t.activeTool === "polyline" || t.activeTool === "polygon") && (T || u.length === 0)) {
                const c = o.geo.map.esriView, p = { x: Math.floor(c.width / 2), y: Math.floor(c.height / 2) }, m = c.toMap(p);
                T ? (u.push([m.x, m.y]), t.activeTool === "polyline" ? w.geometry = new M({
                  paths: [u],
                  spatialReference: c.spatialReference
                }) : w.geometry = new k({
                  rings: [u],
                  spatialReference: c.spatialReference
                }), o.updateAlert(
                  r("draw.multiPoint.pointAdded", {
                    type: b(t.activeTool),
                    count: u.length
                  })
                )) : (T = !0, u = [[m.x, m.y]], t.activeTool === "polyline" ? w = new G({
                  geometry: new M({
                    paths: [u],
                    spatialReference: c.spatialReference
                  }),
                  symbol: i?.viewModel.polylineSymbol || new ee({ color: [0, 0, 255, 1], width: 2 })
                }) : w = new G({
                  geometry: new k({
                    rings: [u],
                    spatialReference: c.spatialReference
                  }),
                  symbol: i?.viewModel.polygonSymbol || new C({
                    color: [0, 255, 0, 0.3],
                    outline: { color: [0, 255, 0, 1], width: 1 }
                  })
                }), w.attributes = { id: `temp-graphic-${Date.now()}`, type: t.activeTool }, y?.add(w), o.updateAlert(
                  r("draw.multiPoint.started", {
                    type: b(t.activeTool),
                    count: 1
                  })
                ));
              } else
                re();
            else
              ie();
            break;
          case "Delete":
          case "Backspace":
            const a = o.geo.map.esriView;
            T && u.length > 1 ? (e.preventDefault(), u.pop(), t.activeTool === "polyline" ? w.geometry = new M({
              paths: [u],
              spatialReference: a.spatialReference
            }) : w.geometry = new k({
              rings: [u],
              spatialReference: a.spatialReference
            }), w.set("geometry", w?.geometry), o.updateAlert(
              r("draw.multiPoint.pointRemoved", {
                type: b(t.activeTool),
                count: u.length
              })
            )) : T && u.length === 1 ? (e.preventDefault(), w && y?.remove(w), w = null, u = [], T = !1, o.updateAlert(r("draw.multiPoint.canceled"))) : l && (e.preventDefault(), i?.delete(), y?.remove(l), typeof t.removeGraphic == "function" && t.removeGraphic(l.attributes.id), l = null, E(void 0), o.updateAlert(r("draw.graphic.deleted")));
            break;
          case "Escape":
            if (T) {
              e.preventDefault();
              const c = t.activeTool === "polyline" ? 2 : 3;
              if (u.length >= c) {
                const p = `graphic-${Date.now()}`;
                if (w.attributes.id = p, t.activeTool === "polygon") {
                  const m = u[0], P = u[u.length - 1];
                  (m[0] !== P[0] || m[1] !== P[1]) && (u.push([m[0], m[1]]), w.geometry = new k({
                    rings: [u],
                    spatialReference: o.geo.map.esriView.spatialReference
                  }));
                }
                t.addGraphic({
                  id: p,
                  type: t.activeTool,
                  geometry: w.geometry,
                  attributes: w.attributes
                }), l = w, t.selectGraphic(p), t.setActiveTool(""), T = !1, u = [], i.update([l]), o.updateAlert(
                  r("draw.multiPoint.completed", {
                    type: b(l?.attributes?.type),
                    count: l.geometry?.type === "polyline" ? l.geometry.paths[0].length : l.geometry.rings[0].length - 1
                  })
                );
              } else
                y?.remove(w), w = null, u = [], T = !1, t.setActiveTool(""), o.updateAlert(
                  r("draw.multiPoint.notEnoughPoints", {
                    type: b(t.activeTool),
                    min: c
                  })
                );
            } else t.activeTool && (e.preventDefault(), t.setActiveTool(""), i?.cancel(), l = null, E(void 0), t.clearSelection(), o.updateAlert(r("draw.tool.canceled")));
            break;
        }
    }, Q = (e) => {
      const n = o.geo.map.esriView.container;
      if (!document.activeElement || !n?.contains(document.activeElement) || !l || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault(), e.stopPropagation();
      const c = 10, p = e.shiftKey, m = e.altKey, P = o.geo.map.esriView;
      let R = 0, g = 0;
      e.key === "ArrowLeft" && (R = -c), e.key === "ArrowRight" && (R = c), e.key === "ArrowUp" && (g = -c), e.key === "ArrowDown" && (g = c);
      const s = l.geometry;
      let d;
      if (s.type === "point")
        d = { x: s.x, y: s.y };
      else {
        const v = s.extent;
        d = { x: (v.xmin + v.xmax) / 2, y: (v.ymin + v.ymax) / 2 };
      }
      const L = P.toScreen(
        new W({
          x: d.x,
          y: d.y,
          spatialReference: P.spatialReference
        })
      );
      L.x += R, L.y += g;
      const $ = P.toMap(L), _ = $.x - d.x, V = $.y - d.y;
      let h;
      if (s.type === "point")
        !p && !m ? h = new W({
          x: s.x + _,
          y: s.y + V,
          spatialReference: s.spatialReference
        }) : p ? (h = s.clone(), o.updateAlert(r("draw.point.resize.unsupported"))) : m && (h = s.clone(), o.updateAlert(r("draw.point.rotate.unsupported")));
      else if (s.type === "polyline") {
        if (!p && !m) {
          const f = s.paths.map((D) => D.map(([A, x]) => [A + _, x + V]));
          h = new M({
            paths: f,
            spatialReference: s.spatialReference
          });
        } else if (p) {
          const v = s, f = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, D = v.paths.map(
            (A) => A.map(([x, S]) => [d.x + (x - d.x) * f, d.y + (S - d.y) * f])
          );
          h = new M({
            paths: D,
            spatialReference: s.spatialReference
          });
        } else if (m) {
          const v = s, f = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (f !== 0) {
            const D = Math.cos(f), A = Math.sin(f), x = v.paths.map(
              (S) => S.map(([H, K]) => {
                const U = H - d.x, q = K - d.y, N = U * D - q * A, j = U * A + q * D;
                return [d.x + N, d.y + j];
              })
            );
            h = new M({
              paths: x,
              spatialReference: s.spatialReference
            });
          } else
            h = s.clone();
        }
      } else if (s.type === "polygon") {
        if (!p && !m) {
          const f = s.rings.map((D) => D.map(([A, x]) => [A + _, x + V]));
          h = new k({
            rings: f,
            spatialReference: s.spatialReference
          });
        } else if (p) {
          const v = s, f = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, D = v.rings.map(
            (A) => A.map(([x, S]) => [d.x + (x - d.x) * f, d.y + (S - d.y) * f])
          );
          h = new k({
            rings: D,
            spatialReference: s.spatialReference
          });
        } else if (m) {
          const v = s, f = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (f !== 0) {
            const D = Math.cos(f), A = Math.sin(f), x = v.rings.map(
              (S) => S.map(([H, K]) => {
                const U = H - d.x, q = K - d.y, N = U * D - q * A, j = U * A + q * D;
                return [d.x + N, d.y + j];
              })
            );
            h = new k({
              rings: x,
              spatialReference: s.spatialReference
            });
          } else
            h = s.clone();
        }
      }
      if (h) {
        l.geometry = h, l.set("geometry", h), E(l), l.attributes?.id && t.updateGraphicGeometry(l.attributes.id, h);
        const v = p ? "resized" : m ? "rotated" : "moved";
        o.updateAlert(r(`draw.graphic.${v}`));
      }
    }, ne = async (e) => {
      const c = (await o.geo.map.esriView.hitTest(e)).results.find(
        (p) => "graphic" in p && p.graphic.layer === y && !!p.graphic.attributes?.id
      );
      c && t.activeTool === "edit" ? i?.update([c.graphic]) : (i?.cancel(), l = null, t.clearSelection(), E());
    }, ae = async () => {
      await o.geo.map.viewPromise, o.geo.layer.getLayer(F) ? y = o.geo.layer.getLayer(F).esriLayer : (y = o.geo.layer.createLayer({
        id: F,
        layerType: ye.GRAPHIC,
        cosmetic: !0,
        system: !0,
        url: ""
      }), await o.geo.map.addLayer(y)), y?.esriLayer && (y = y.esriLayer), i = new ve({
        view: o.geo.map.esriView,
        // viewPromise guaranteed ready
        layer: y,
        // we've just assigned it
        availableCreateTools: ["point", "multipoint", "polyline", "polygon", "rectangle", "circle"],
        updateOnGraphicClick: !0,
        visibleElements: {
          createTools: { point: !0, polyline: !0, polygon: !0, rectangle: !0, circle: !0 },
          // @ts-expect-error esri type mismatch
          selectionTools: { enable: !0 },
          settingsMenu: !1
        },
        defaultUpdateOptions: {
          highlightOptions: {
            enabled: !1
          }
        },
        visible: !1
      }), o.geo.map.esriView.ui.add(i, "bottom-right"), O = i.on("create", se), i.on("update", le), o.geo.map.esriView.on("click", ne), document.addEventListener("keydown", J), document.addEventListener("keydown", Q, { capture: !0 });
    }, X = () => {
      i && (o.geo.map.esriView && o.geo.map.esriView.ui.remove(i), O && O.remove(), i.destroy()), document.removeEventListener("keydown", J), document.removeEventListener("keydown", Q, { capture: !0 }), T = !1, w = null, u = [], i = null, y = null;
    }, se = (e) => {
      if (e.state === "complete") {
        const n = e.graphic, a = `graphic-${Date.now()}`;
        n.attributes = n.attributes || {}, n.attributes.id = a, t.addGraphic({
          id: a,
          type: e.tool,
          geometry: n.geometry,
          attributes: n.attributes
        }), e.tool !== "point" && t.setActiveTool("");
      }
    }, le = (e) => {
      const n = e.graphics[0];
      if (n)
        if (e.state === "start") {
          if (t.activeTool !== "edit") {
            i.cancel();
            return;
          }
          l = n, n.attributes?.id && (t.selectGraphic(n.attributes.id), o.updateAlert(
            r("draw.graphic.selected", {
              type: b(n.attributes?.type)
            })
          ));
        } else e.state === "active" ? E(n) : e.state === "complete" && n.attributes?.id && (t.updateGraphicGeometry(n.attributes.id, n.geometry), o.updateAlert(r("draw.graphic.updated")));
    };
    return ue(async () => {
      await o.geo.map.viewPromise, await ae(), B.push(
        o.event.on(oe.MAP_DESTROYED, () => {
          X();
        })
      );
    }), Z(
      () => t.activeTool,
      (e) => {
        i.cancel(), E(), e && e != "edit" && i.create(e);
      }
    ), me(() => {
      X(), B.forEach((e) => o.event.off(e));
    }), () => {
    };
  }
}), te = [
  { type: "point" },
  { type: "polyline" },
  { type: "polygon" },
  { type: "circle" },
  { type: "rectangle" }
];
class De extends ge {
  store;
  constructor(r, b) {
    super(r, b), this.store = Y(this.$vApp.$pinia);
  }
  /**
   * Parses the draw fixture configuration and sets up the draw store.
   * @param drawConfig The configuration object for the draw fixture.
   */
  _parseConfig(r) {
    if (!r) {
      this.store.setSupportedTypes(te);
      return;
    }
    if (r.types !== void 0) {
      const o = (r.types === null ? [] : r.types).filter((t) => t.enabled !== !1);
      this.store.setSupportedTypes(o);
    } else
      this.store.setSupportedTypes(te);
    r.defaultTool && this.store.setActiveTool(r.defaultTool);
  }
  /**
   * Returns the ID of the graphics layer used by the draw fixture.
   */
  get graphicsLayerId() {
    return F;
  }
}
const Ae = { en: { "draw.multiPoint.started": "{type} drawing started with 1 point", "draw.multiPoint.pointAdded": "Point added {count} points total", "draw.multiPoint.pointRemoved": "Point removed {count} points remaining", "draw.multiPoint.canceled": "Drawing canceled", "draw.multiPoint.completed": "{type} completed with {count} points", "draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required", "draw.graphic.created": "{type} created", "draw.graphic.selected": "{type} selected", "draw.graphic.deselected": "Graphic deselected", "draw.graphic.deleted": "Graphic deleted", "draw.graphic.updated": "Graphic updated", "draw.graphic.none": "No graphic found", "draw.tool.canceled": "Drawing tool canceled", "draw.point.resize.unsupported": "Resizing not supported for point graphics", "draw.point.rotate.unsupported": "Rotation not supported for point graphics", "draw.move.up": "Moved up", "draw.move.down": "Moved down", "draw.move.left": "Moved left", "draw.move.right": "Moved right", "draw.resize.increase": "Increased size", "draw.resize.decrease": "Decreased size", "draw.rotate.clockwise": "Rotated clockwise", "draw.rotate.counterclockwise": "Rotated counter-clockwise", "draw.button.point": "Draw point", "draw.button.polyline": "Draw line", "draw.button.polygon": "Draw polygon", "draw.button.rectangle": "Draw rectangle", "draw.button.circle": "Draw circle", "draw.point.tooltip": "Draw point", "draw.polyline.tooltip": "Draw polyline", "draw.polygon.tooltip": "Draw polygon", "draw.circle.tooltip": "Draw circle", "draw.rectangle.tooltip": "Draw rectangle", "draw.edit.tooltip": "Edit Mode", "draw.graphic.moved": "Graphic moved", "draw.shape": "shape", "draw.point": "point", "draw.multipoint": "multipoint", "draw.polyline": "polyline", "draw.polygon": "polygon", "draw.rectangle": "rectangle", "draw.circle": "circle", "draw.unknown": "unknown" }, fr: { "draw.multiPoint.started": "Dessin de {type} commencé avec 1 point", "draw.multiPoint.pointAdded": "Point ajouté", "draw.multiPoint.pointRemoved": "Point supprimé", "draw.multiPoint.canceled": "Dessin annulé", "draw.multiPoint.completed": "{type} terminé avec {count} points", "draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}", "draw.graphic.created": "{type} créé", "draw.graphic.selected": "{type} sélectionné", "draw.graphic.deselected": "Graphique désélectionné", "draw.graphic.deleted": "Graphique supprimé", "draw.graphic.updated": "Graphique mis à jour", "draw.graphic.none": "Aucun graphique trouvé", "draw.tool.canceled": "Outil de dessin annulé", "draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points", "draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points", "draw.move.up": "Déplacé vers le haut", "draw.move.down": "Déplacé vers le bas", "draw.move.left": "Déplacé vers la gauche", "draw.move.right": "Déplacé vers la droite", "draw.resize.increase": "Taille augmentée", "draw.resize.decrease": "Taille réduite", "draw.rotate.clockwise": "Rotation dans le sens horaire", "draw.rotate.counterclockwise": "Rotation dans le sens antihoraire", "draw.button.point": "Dessiner un point", "draw.button.polyline": "Dessiner une ligne", "draw.button.polygon": "Dessiner un polygone", "draw.button.rectangle": "Dessiner un rectangle", "draw.button.circle": "Dessiner un cercle", "draw.point.tooltip": "Dessiner un point", "draw.polyline.tooltip": "Dessiner une polyligne", "draw.polygon.tooltip": "Dessiner un polygone", "draw.circle.tooltip": "Dessiner un cercle", "draw.rectangle.tooltip": "Dessiner un rectangle", "draw.edit.tooltip": "Mode édition", "draw.graphic.moved": "Graphique déplacé", "draw.shape": "forme", "draw.point": "indiquer", "draw.multipoint": "multipoint", "draw.polyline": "polyligne", "draw.polygon": "polygone", "draw.rectangle": "rectangle", "draw.circle": "cercle", "draw.unknown": "inconnue" } };
class lt extends De {
  async init() {
    const { el: r } = this.mount(Re, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), Object.entries(Ae).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t)), this._parseConfig(this.config), Y(this.$vApp.$pinia).supportedTypes.forEach((t) => {
      const i = `${t.type}-icon`;
      this.$iApi.component(i, we(be(/* @__PURE__ */ Object.assign({ "./icons/circle-icon.vue": () => import("./circle-icon-B-aMZ25e.js"), "./icons/edit-icon.vue": () => import("./edit-icon-DChXHPWx.js"), "./icons/point-icon.vue": () => import("./point-icon-CwTthi5R.js"), "./icons/polygon-icon.vue": () => import("./polygon-icon-C648tidm.js"), "./icons/polyline-icon.vue": () => import("./polyline-icon-B56SaI6h.js"), "./icons/rectangle-icon.vue": () => import("./rectangle-icon-DKsPlNs-.js") }), `./icons/${t.type}-icon.vue`, 3)));
    });
  }
  async added() {
    this.$iApi.event.on(oe.MAP_CREATED, () => {
      this.init();
    });
  }
}
export {
  lt as default
};
