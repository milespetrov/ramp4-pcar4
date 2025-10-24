import { defineComponent as ue, inject as me, useTemplateRef as ye, reactive as we, watch as ie, onMounted as ge, onUnmounted as he, createElementBlock as fe, openBlock as ve, markRaw as be } from "vue";
import { u as J } from "./draw-store-DYkFY3w9.js";
import "tiny-emitter";
import { G as ne, L as De, F as Re } from "./main-4ftHFA3j.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import Y from "@arcgis/core/geometry/Point";
import E from "@arcgis/core/geometry/Polygon";
import M from "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import L from "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import N from "@arcgis/core/symbols/SimpleFillSymbol";
import oe from "@arcgis/core/symbols/SimpleLineSymbol";
import ke from "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import { useI18n as Ae } from "vue-i18n";
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
import "@arcgis/map-components/components/arcgis-sketch";
const Te = (I, r, k) => {
  const i = I[r];
  return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((t, n) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + r + (r.split("/").length !== k ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, O = "RampDrawGraphicsLayer", xe = /* @__PURE__ */ ue({
  __name: "draw",
  setup(I) {
    const { t: r } = Ae(), k = (e) => r(e ? `draw.${e}` : "draw.unknown"), i = me("iApi"), t = J();
    let n = null;
    const S = ye("sketchEl");
    let F = null, u = null, d = null, V = null, T = !1, v = null, y = [];
    const Q = we([]);
    let U = null;
    async function ae() {
      (await i.fixture.isLoaded("keyboardnav")).register("D", {
        name: {
          en: "Draw Tools",
          fr: "Outils de dessin"
        },
        activeHandler: (o) => {
          t.setActiveTool(""), U = o;
        },
        deactiveHandler: () => {
          U = null, t.setActiveTool(null);
        },
        keys: [
          {
            key: "P",
            description: {
              en: "Draw a point",
              fr: "Dessine un point"
            },
            handler: () => {
              t.setActiveTool("point");
            }
          },
          {
            key: "L",
            description: {
              en: "Draw a line",
              fr: "Dessine une ligne"
            },
            handler: () => {
              t.setActiveTool("polyline");
            }
          },
          {
            key: "G",
            description: {
              en: "Draw a polygon",
              fr: "Dessine un polygone"
            },
            handler: () => {
              t.setActiveTool("polygon");
            }
          },
          {
            key: "C",
            description: {
              en: "Draw a circle",
              fr: "Dessine un cercle"
            },
            handler: () => {
              t.setActiveTool("circle");
            }
          },
          {
            key: "R",
            description: {
              en: "Draw a rectangle",
              fr: "Dessine un rectangle"
            },
            handler: () => {
              t.setActiveTool("rectangle");
            }
          },
          {
            key: "E",
            description: {
              en: "Edit geometry",
              fr: "Mode édition"
            },
            handler: () => {
              t.setActiveTool("edit");
            }
          }
        ]
      });
    }
    const x = (e) => {
      if (V && (u?.remove(V), V = null), !e) return;
      let o;
      switch (e.geometry?.type) {
        case "point":
        case "multipoint":
          o = new ke({
            color: [255, 255, 0, 0.8],
            size: 16,
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
          break;
        case "polyline":
          o = new oe({
            color: [255, 255, 0, 0.8],
            width: 6
          });
          break;
        default:
          o = new N({
            color: [255, 255, 0, 0.3],
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
      }
      V = new L({
        geometry: e.geometry,
        // @ts-expect-error esri type mismatch
        symbol: o
      }), u?.add(V);
    };
    ie(
      () => t.selectedGraphicId,
      (e, o) => {
        if (!(!n || !u)) {
          if (!e)
            n.cancel(), x();
          else if (e !== o) {
            const c = u.graphics.toArray().find((p) => p.attributes && p.attributes.id === e);
            c && (n.triggerUpdate([c]), x(c));
          }
        }
      }
    );
    const se = async () => {
      if (!u || !n || t.activeTool !== "edit") return;
      await i.geo.map.viewPromise;
      const e = i.geo.map.esriView, o = { x: e.width / 2, y: e.height / 2 }, a = {
        x: o.x,
        y: o.y,
        width: 20,
        height: 20
      }, p = (await e.hitTest(a)).results.filter((m) => !("graphic" in m) || m.graphic.layer !== u ? !1 : !!m.graphic.attributes?.id);
      p.length > 0 ? (d = p[0].graphic, n.triggerUpdate([d]), d.attributes?.id && t.selectGraphic(d.attributes.id), i.updateAlert(
        r("draw.graphic.selected", {
          type: k(d.attributes?.type)
        })
      )) : (n.cancel(), d = null, t.clearSelection());
    }, le = async () => {
      if (!n || !t.activeTool) return;
      await i.geo.map.viewPromise;
      const e = i.geo.map.esriView, o = { x: Math.floor(e.width / 2), y: Math.floor(e.height / 2) }, a = e.toMap(o), c = e.extent, p = c.width, m = c.height, P = Math.min(p, m) / 10;
      let b;
      switch (t.activeTool) {
        case "point":
          b = new L({
            geometry: new Y({
              x: a.x,
              y: a.y,
              spatialReference: e.spatialReference
            }),
            symbol: n.pointSymbol
          });
          break;
        case "polyline":
          b = new L({
            geometry: new M({
              paths: [
                [
                  [a.x - P / 2, a.y],
                  [a.x + P / 2, a.y]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: n.polylineSymbol
          });
          break;
        case "polygon":
        case "rectangle":
          const w = P / 2;
          b = new L({
            geometry: new E({
              rings: [
                [
                  [a.x - w, a.y - w],
                  [a.x + w, a.y - w],
                  [a.x + w, a.y + w],
                  [a.x - w, a.y + w],
                  [a.x - w, a.y - w]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: n.polygonSymbol || new N({
              color: [0, 255, 0, 0.3],
              outline: {
                color: [0, 255, 0, 1],
                width: 1
              }
            })
          });
          break;
        case "circle":
          const s = P / 2, l = 36, _ = [];
          for (let z = 0; z <= l; z++) {
            const $ = z / l * 2 * Math.PI, C = a.x + s * Math.cos($), g = a.y + s * Math.sin($);
            _.push([C, g]);
          }
          b = new L({
            geometry: new E({
              rings: [_],
              spatialReference: e.spatialReference
            }),
            symbol: n.polygonSymbol || new N({
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
      if (b) {
        const w = `graphic-${Date.now()}`;
        b.attributes = { id: w, type: t.activeTool }, u?.add(b), t.addGraphic({
          id: w,
          type: t.activeTool,
          geometry: b.geometry,
          attributes: b.attributes
        }), t.activeTool !== "point" && (t.clearSelection(), t.setActiveTool(""), U?.reset(), n.cancel()), i.updateAlert(
          r("draw.graphic.created", {
            type: k(t.activeTool)
          })
        );
      }
    }, X = (e) => {
      const o = i.geo.map.esriView?.container;
      if (!(!document.activeElement || !o?.contains(document.activeElement)))
        switch (e.key) {
          case "Enter":
            if (e.preventDefault(), t.activeTool && t.activeTool !== "edit")
              if ((t.activeTool === "polyline" || t.activeTool === "polygon") && (T || y.length === 0)) {
                const c = i.geo.map.esriView, p = { x: Math.floor(c.width / 2), y: Math.floor(c.height / 2) }, m = c.toMap(p);
                T ? (y.push([m.x, m.y]), t.activeTool === "polyline" ? v.geometry = new M({
                  paths: [y],
                  spatialReference: c.spatialReference
                }) : v.geometry = new E({
                  rings: [y],
                  spatialReference: c.spatialReference
                }), i.updateAlert(
                  r("draw.multiPoint.pointAdded", {
                    type: k(t.activeTool),
                    count: y.length
                  })
                )) : (T = !0, y = [[m.x, m.y]], t.activeTool === "polyline" ? v = new L({
                  geometry: new M({
                    paths: [y],
                    spatialReference: c.spatialReference
                  }),
                  symbol: n?.polylineSymbol || new oe({ color: [0, 0, 255, 1], width: 2 })
                }) : v = new L({
                  geometry: new E({
                    rings: [y],
                    spatialReference: c.spatialReference
                  }),
                  symbol: n?.polygonSymbol || new N({
                    color: [0, 255, 0, 0.3],
                    outline: { color: [0, 255, 0, 1], width: 1 }
                  })
                }), v.attributes = { id: `temp-graphic-${Date.now()}`, type: t.activeTool }, u?.add(v), i.updateAlert(
                  r("draw.multiPoint.started", {
                    type: k(t.activeTool),
                    count: 1
                  })
                ));
              } else
                le();
            else
              se();
            break;
          case "Delete":
          case "Backspace":
            const a = i.geo.map.esriView;
            T && y.length > 1 ? (e.preventDefault(), y.pop(), t.activeTool === "polyline" ? v.geometry = new M({
              paths: [y],
              spatialReference: a.spatialReference
            }) : v.geometry = new E({
              rings: [y],
              spatialReference: a.spatialReference
            }), v.set("geometry", v?.geometry), i.updateAlert(
              r("draw.multiPoint.pointRemoved", {
                type: k(t.activeTool ?? void 0),
                count: y.length
              })
            )) : T && y.length === 1 ? (e.preventDefault(), v && u?.remove(v), v = null, y = [], T = !1, i.updateAlert(r("draw.multiPoint.canceled"))) : d && (e.preventDefault(), n?.delete(), u?.remove(d), typeof t.removeGraphic == "function" && t.removeGraphic(d.attributes.id), d = null, x(void 0), i.updateAlert(r("draw.graphic.deleted")));
            break;
          case "Escape":
            t.setActiveTool(null), n?.cancel(), d = null, x(void 0), t.clearSelection(), i.updateAlert(r("draw.tool.canceled"));
            break;
        }
    }, Z = (e) => {
      const o = i.geo.map.esriView.container;
      if (!document.activeElement || !o?.contains(document.activeElement) || !d || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault(), e.stopPropagation();
      const c = 10, p = e.shiftKey, m = e.altKey, P = i.geo.map.esriView;
      let b = 0, w = 0;
      e.key === "ArrowLeft" && (b = -c), e.key === "ArrowRight" && (b = c), e.key === "ArrowUp" && (w = -c), e.key === "ArrowDown" && (w = c);
      const s = d.geometry;
      let l;
      if (s.type === "point")
        l = { x: s.x, y: s.y };
      else {
        const f = s.extent;
        l = { x: (f.xmin + f.xmax) / 2, y: (f.ymin + f.ymax) / 2 };
      }
      const _ = P.toScreen(
        new Y({
          x: l.x,
          y: l.y,
          spatialReference: P.spatialReference
        })
      );
      _.x += b, _.y += w;
      const z = P.toMap(_), $ = z.x - l.x, C = z.y - l.y;
      let g;
      if (s.type === "point")
        !p && !m ? g = new Y({
          x: s.x + $,
          y: s.y + C,
          spatialReference: s.spatialReference
        }) : p ? (g = s.clone(), i.updateAlert(r("draw.point.resize.unsupported"))) : m && (g = s.clone(), i.updateAlert(r("draw.point.rotate.unsupported")));
      else if (s.type === "polyline") {
        if (!p && !m) {
          const h = s.paths.map((D) => D.map(([R, A]) => [R + $, A + C]));
          g = new M({
            paths: h,
            spatialReference: s.spatialReference
          });
        } else if (p) {
          const f = s, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, D = f.paths.map(
            (R) => R.map(([A, G]) => [l.x + (A - l.x) * h, l.y + (G - l.y) * h])
          );
          g = new M({
            paths: D,
            spatialReference: s.spatialReference
          });
        } else if (m) {
          const f = s, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const D = Math.cos(h), R = Math.sin(h), A = f.paths.map(
              (G) => G.map(([K, j]) => {
                const q = K - l.x, H = j - l.y, B = q * D - H * R, W = q * R + H * D;
                return [l.x + B, l.y + W];
              })
            );
            g = new M({
              paths: A,
              spatialReference: s.spatialReference
            });
          } else
            g = s.clone();
        }
      } else if (s.type === "polygon") {
        if (!p && !m) {
          const h = s.rings.map((D) => D.map(([R, A]) => [R + $, A + C]));
          g = new E({
            rings: h,
            spatialReference: s.spatialReference
          });
        } else if (p) {
          const f = s, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, D = f.rings.map(
            (R) => R.map(([A, G]) => [l.x + (A - l.x) * h, l.y + (G - l.y) * h])
          );
          g = new E({
            rings: D,
            spatialReference: s.spatialReference
          });
        } else if (m) {
          const f = s, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const D = Math.cos(h), R = Math.sin(h), A = f.rings.map(
              (G) => G.map(([K, j]) => {
                const q = K - l.x, H = j - l.y, B = q * D - H * R, W = q * R + H * D;
                return [l.x + B, l.y + W];
              })
            );
            g = new E({
              rings: A,
              spatialReference: s.spatialReference
            });
          } else
            g = s.clone();
        }
      }
      if (g) {
        d.geometry = g, d.set("geometry", g), x(d), d.attributes?.id && t.updateGraphicGeometry(d.attributes.id, g);
        const f = p ? "resized" : m ? "rotated" : "moved";
        i.updateAlert(r(`draw.graphic.${f}`));
      }
    }, ce = async (e) => {
      const c = (await i.geo.map.esriView.hitTest(e)).results.find(
        (p) => "graphic" in p && p.graphic.layer === u && !!p.graphic.attributes?.id
      );
      c && t.activeTool === "edit" ? n?.triggerUpdate([c.graphic]) : (n?.cancel(), d = null, t.clearSelection(), x());
    }, pe = async () => {
      await i.geo.map.viewPromise, i.geo.layer.getLayer(O) ? u = i.geo.layer.getLayer(O).esriLayer : (u = i.geo.layer.createLayer({
        id: O,
        layerType: De.GRAPHIC,
        cosmetic: !0,
        system: !0,
        url: ""
      }), await i.geo.map.addLayer(u)), u?.esriLayer && (u = u.esriLayer), Object.assign(S.value, {
        view: i.geo.map.esriView,
        layer: u,
        availableCreateTools: ["point", "multipoint", "polyline", "polygon", "rectangle", "circle"],
        updateOnGraphicClick: !0,
        visibleElements: {
          createTools: { point: !0, polyline: !0, polygon: !0, rectangle: !0, circle: !0 },
          selectionTools: { enable: !0 },
          settingsMenu: !1
        },
        defaultUpdateOptions: { highlightOptions: { enabled: !1 } }
      }), i.geo.map.esriView.ui.add(S.value, "bottom-right"), S.value?.addEventListener("arcgisCreate", (e) => te(e.detail)), S.value?.addEventListener("arcgisUpdate", (e) => de(e.detail)), F = {
        remove: () => S.value?.removeEventListener("arcgisCreate", (e) => te(e.detail))
      }, n = S.value, i.geo.map.esriView.on("click", ce), document.addEventListener("keydown", X), document.addEventListener("keydown", Z, { capture: !0 });
    }, ee = () => {
      n && (i.geo.map.esriView && i.geo.map.esriView.ui.remove(n), F && F.remove(), n.destroy()), document.removeEventListener("keydown", X), document.removeEventListener("keydown", Z, { capture: !0 }), T = !1, v = null, y = [], n = null, u = null, U = null;
    }, te = (e) => {
      if (e.state === "complete") {
        const o = e.graphic, a = `graphic-${Date.now()}`;
        o.attributes = o.attributes || {}, o.attributes.id = a, t.addGraphic({
          id: a,
          type: e.tool,
          geometry: o.geometry,
          attributes: o.attributes
        }), e.tool !== "point" && (t.setActiveTool(""), U?.reset());
      }
    }, de = (e) => {
      const o = e.graphics[0];
      if (o)
        if (e.state === "start") {
          if (t.activeTool !== "edit") {
            n.cancel();
            return;
          }
          d = o, o.attributes?.id && (t.selectGraphic(o.attributes.id), i.updateAlert(
            r("draw.graphic.selected", {
              type: k(o.attributes?.type)
            })
          ));
        } else e.state === "active" ? x(o) : e.state === "complete" && o.attributes?.id && (t.updateGraphicGeometry(o.attributes.id, o.geometry), i.updateAlert(r("draw.graphic.updated")));
    };
    return ge(() => {
      ae(), pe(), Q.push(
        i.event.on(ne.MAP_DESTROYED, () => {
          ee();
        })
      );
    }), ie(
      () => t.activeTool,
      (e) => {
        n.cancel(), x(), v = null, y = [], T = !1, e && e != "edit" && n.create(e);
      }
    ), he(() => {
      ee(), Q.forEach((e) => i.event.off(e));
    }), (e, o) => (ve(), fe("arcgis-sketch", {
      ref_key: "sketchEl",
      ref: S,
      style: { display: "none" }
    }, null, 512));
  }
}), re = [
  { type: "point" },
  { type: "polyline" },
  { type: "polygon" },
  { type: "circle" },
  { type: "rectangle" }
];
class Pe extends Re {
  store;
  constructor(r, k) {
    super(r, k), this.store = J(this.$vApp.$pinia);
  }
  /**
   * Parses the draw fixture configuration and sets up the draw store.
   * @param drawConfig The configuration object for the draw fixture.
   */
  _parseConfig(r) {
    if (!r) {
      this.store.setSupportedTypes(re);
      return;
    }
    if (r.types !== void 0) {
      const i = (r.types === null ? [] : r.types).filter((t) => t.enabled !== !1);
      this.store.setSupportedTypes(i);
    } else
      this.store.setSupportedTypes(re);
    r.defaultTool && this.store.setActiveTool(r.defaultTool);
  }
  /**
   * Returns the ID of the graphics layer used by the draw fixture.
   */
  get graphicsLayerId() {
    return O;
  }
}
const Ee = { en: { "draw.multiPoint.started": "{type} drawing started with 1 point", "draw.multiPoint.pointAdded": "Point added {count} points total", "draw.multiPoint.pointRemoved": "Point removed {count} points remaining", "draw.multiPoint.canceled": "Drawing canceled", "draw.multiPoint.completed": "{type} completed with {count} points", "draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required", "draw.graphic.created": "{type} created", "draw.graphic.selected": "{type} selected", "draw.graphic.deselected": "Graphic deselected", "draw.graphic.deleted": "Graphic deleted", "draw.graphic.updated": "Graphic updated", "draw.graphic.none": "No graphic found", "draw.tool.canceled": "Drawing tool canceled", "draw.point.resize.unsupported": "Resizing not supported for point graphics", "draw.point.rotate.unsupported": "Rotation not supported for point graphics", "draw.move.up": "Moved up", "draw.move.down": "Moved down", "draw.move.left": "Moved left", "draw.move.right": "Moved right", "draw.resize.increase": "Increased size", "draw.resize.decrease": "Decreased size", "draw.rotate.clockwise": "Rotated clockwise", "draw.rotate.counterclockwise": "Rotated counter-clockwise", "draw.button.point": "Draw point", "draw.button.polyline": "Draw line", "draw.button.polygon": "Draw polygon", "draw.button.rectangle": "Draw rectangle", "draw.button.circle": "Draw circle", "draw.point.tooltip": "Draw point", "draw.polyline.tooltip": "Draw polyline", "draw.polygon.tooltip": "Draw polygon", "draw.circle.tooltip": "Draw circle", "draw.rectangle.tooltip": "Draw rectangle", "draw.edit.tooltip": "Edit Mode", "draw.graphic.moved": "Graphic moved", "draw.shape": "shape", "draw.point": "point", "draw.multipoint": "multipoint", "draw.polyline": "polyline", "draw.polygon": "polygon", "draw.rectangle": "rectangle", "draw.circle": "circle", "draw.unknown": "unknown" }, fr: { "draw.multiPoint.started": "Dessin de {type} commencé avec 1 point", "draw.multiPoint.pointAdded": "Point ajouté", "draw.multiPoint.pointRemoved": "Point supprimé", "draw.multiPoint.canceled": "Dessin annulé", "draw.multiPoint.completed": "{type} terminé avec {count} points", "draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}", "draw.graphic.created": "{type} créé", "draw.graphic.selected": "{type} sélectionné", "draw.graphic.deselected": "Graphique désélectionné", "draw.graphic.deleted": "Graphique supprimé", "draw.graphic.updated": "Graphique mis à jour", "draw.graphic.none": "Aucun graphique trouvé", "draw.tool.canceled": "Outil de dessin annulé", "draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points", "draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points", "draw.move.up": "Déplacé vers le haut", "draw.move.down": "Déplacé vers le bas", "draw.move.left": "Déplacé vers la gauche", "draw.move.right": "Déplacé vers la droite", "draw.resize.increase": "Taille augmentée", "draw.resize.decrease": "Taille réduite", "draw.rotate.clockwise": "Rotation dans le sens horaire", "draw.rotate.counterclockwise": "Rotation dans le sens antihoraire", "draw.button.point": "Dessiner un point", "draw.button.polyline": "Dessiner une ligne", "draw.button.polygon": "Dessiner un polygone", "draw.button.rectangle": "Dessiner un rectangle", "draw.button.circle": "Dessiner un cercle", "draw.point.tooltip": "Dessiner un point", "draw.polyline.tooltip": "Dessiner une polyligne", "draw.polygon.tooltip": "Dessiner un polygone", "draw.circle.tooltip": "Dessiner un cercle", "draw.rectangle.tooltip": "Dessiner un rectangle", "draw.edit.tooltip": "Mode édition", "draw.graphic.moved": "Graphique déplacé", "draw.shape": "forme", "draw.point": "indiquer", "draw.multipoint": "multipoint", "draw.polyline": "polyligne", "draw.polygon": "polygone", "draw.rectangle": "rectangle", "draw.circle": "cercle", "draw.unknown": "inconnue" } };
class yt extends Pe {
  async init() {
    const { el: r } = this.mount(xe, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), Object.entries(Ee).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t)), this._parseConfig(this.config), J(this.$vApp.$pinia).supportedTypes.forEach((t) => {
      const n = `${t.type}-icon`;
      this.$iApi.component(n, be(Te(/* @__PURE__ */ Object.assign({ "./icons/circle-icon.vue": () => import("./circle-icon-BH4tyK44.js"), "./icons/edit-icon.vue": () => import("./edit-icon-DGMW1HVH.js"), "./icons/point-icon.vue": () => import("./point-icon-D4xpz0e3.js"), "./icons/polygon-icon.vue": () => import("./polygon-icon-Cdwf2_16.js"), "./icons/polyline-icon.vue": () => import("./polyline-icon-B4XGw-nK.js"), "./icons/rectangle-icon.vue": () => import("./rectangle-icon-BWz1sC43.js") }), `./icons/${t.type}-icon.vue`, 3)));
    });
  }
  async added() {
    this.$iApi.event.on(ne.MAP_CREATED, () => {
      this.init();
    });
  }
}
export {
  yt as default
};
