import "tiny-emitter";
import { F as I } from "./main-DD4M6ybf.js";
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
import "vue";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "shpjs/dist/shp.min.js";
import "redaxios";
import "jszip";
import "flatgeobuf";
import "await-to-js";
import "fast-xml-parser";
import "svg.js";
import { fabric as p } from "fabric";
const x = 30, M = 20, N = 16, T = 12, G = 8, f = 32, d = 32, L = 350, _ = 20, h = "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";
class Dt extends I {
  get config() {
    return this.$iApi.fixture.get("export").config?.legend;
  }
  async make(r) {
    const e = this.$iApi.geo.layer.allLayersOnMap().filter((s) => !s.isCosmetic);
    if (e.length === 0)
      return new p.Group([], {
        originX: "left"
      });
    const t = Math.min(
      e.length,
      Math.floor(r.width / (L + _)) || 1
      // round to 1 if floor is 0
    ), o = (r.width - (t - 1) * _) / t;
    let i = 0;
    const a = (await Promise.all(this._makeSegments(e, o))).map(({ title: s, items: l }, g) => {
      g > 0 && (i += x), s.top = i, i += s.height + M;
      const w = l.map(({ title: c, items: y }, C) => {
        const S = [];
        return c && !(l.length === 1 && c.text === s.text) && (C > 0 && (i += N), c.top = i, i += c.height + T, S.push(c)), y.forEach((u) => {
          u.top = i, i += u.height + G;
        }), [...S, ...y].filter((u) => u);
      });
      return new p.Group([s, ...w.flat()]);
    }).flat(), m = this._makeColumns(a, o, t);
    return Promise.resolve(m);
  }
  /**
   * Breaks up legend layers into columns
   *
   * @private
   * @param {fabric.Group[]} items
   * @param {number} columnWidth
   * @param {number} columns
   * @returns {fabric.Group}
   * @memberof ExportLegendFixture
   */
  _makeColumns(r, e, t) {
    let o = 0, i = 0, n = 0;
    const a = r[r.length - 1].aCoords.bl.y / t;
    return r.forEach((m, s) => {
      const l = s !== r.length - 1 ? r[s + 1].top - m.top : m.height, g = n > a * (o + 1), w = i !== 0 && l > a, c = t - o > r.length - s;
      (g || w || c) && o < t && (++o, i = 0), m.left = o * (e + _), m.top = i, i += l, n += l;
    }), new p.Group(r, {
      originX: "left"
    });
  }
  /**
   * Create segments of the export image based on the provided layers and layer configs.
   *
   * @private
   * @param {LayerInstance[]} layers
   * @param {RampLayerConfig[]} layerConfigs
   * @returns {Promise<Segment>[]}
   * @memberof ExportLegendFixture
   */
  _makeSegments(r, e) {
    return r.map(async (t) => {
      const o = new p.Textbox(t.name, {
        fontSize: 24,
        fontFamily: h,
        width: e
      }), i = this._getLayerTreeIds(t);
      let n = [];
      return n = t.supportsSublayers ? await Promise.all(
        this._makeSegmentChunks(i, t, e)
        // pass list of flatenned sublayer ids
      ) : await Promise.all(
        this._makeSegmentChunks([-1], t, e)
        // pass single -1 id so the root gets processed
      ), { title: o, items: n };
    });
  }
  /**
   * Creates segment chunks based on the provided layer and layer entry id.
   *
   * Used for layers that support sublayers (e.g. MapImageLayers)
   *
   * @private
   * @param {(number[] | string[])} ids
   * @param {LayerInstance} layer
   * @returns {Promise<SegmentChunk>[]}
   * @memberof ExportLegendFixture
   */
  _makeSegmentChunks(r, e, t) {
    const o = e;
    return r.map(async (i) => {
      const n = i === -1 ? o : o.getSublayer(i);
      if (!n)
        return {
          title: new p.Textbox("ERROR", {
            fontSize: 20,
            fontFamily: h,
            width: t
          }),
          items: []
        };
      await Promise.all(n.legend.map((l) => l.drawPromise));
      const a = n.legend, m = new p.Textbox(n.name, {
        fontSize: 20,
        fontFamily: h,
        width: t
      }), s = await Promise.all(this._makeChunkItems(a, t));
      return {
        title: m,
        items: s
      };
    });
  }
  /**
   * Creates layer entry symbology based on the provided symbology stack.
   *
   * @private
   * @param {LegendSymbology[]} symbologyStack
   * @returns {Promise<fabric.Group>[]}
   * @memberof ExportLegendFixture
   */
  _makeChunkItems(r, e) {
    return r.map(async (t) => {
      const o = (await F(p.loadSVGFromString)(t.svgcode))[0];
      if (t.esriStandard) {
        o.originY = "center", o.top = f / 2;
        const i = new p.Textbox(t.label, {
          fontSize: 12,
          fontFamily: h,
          originY: "center",
          left: d + 20,
          top: f / 2,
          width: e - d - 20
        });
        return new p.Group([o, i], {
          height: f
        });
      } else {
        const i = new p.Textbox(t.label, {
          fontSize: 12,
          fontFamily: h,
          originY: "center",
          left: 0,
          top: f / 2,
          width: e
        }), n = Number(t.imgWidth), a = Number(t.imgHeight), m = Math.min(1, e / n);
        return o && (o.originY = "center", o.top = a * m / 2 + f, o.scaleToHeight(a * m), o.scaleToWidth(n * m)), new p.Group([i, o].filter(Boolean), {
          height: a * m + f
        });
      }
    });
  }
  /**
   * Gets flattened array of ids from layer tree
   *
   * @private
   * @param {TreeNode} node
   * @returns {number[]}
   * @memberof ExportLegendFixture
   */
  _getLayerTreeIds(r) {
    const e = [], t = [...r.sublayers];
    for (; t.length > 0; ) {
      const o = t.shift();
      o && (o.visibility && e.push(o.layerIdx), t.push(...o.sublayers));
    }
    return e;
  }
}
const F = (b) => (r) => new Promise((e) => {
  b(r, (t) => {
    e(t);
  });
});
export {
  Dt as default
};
