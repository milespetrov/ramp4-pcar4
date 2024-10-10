import { bx as C } from "./main-B46PFZ13.js";
import { f as l } from "./fabric-56BVIuQl.js";
const I = 30, M = 20, N = 16, T = 12, G = 8, u = 32, d = 32, L = 350, w = 20, m = "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";
class H extends C {
  get config() {
    return this.$iApi.fixture.get("export").config?.legend;
  }
  async make(o) {
    const i = this.$iApi.geo.layer.allLayersOnMap().filter((a) => !a.isCosmetic);
    if (i.length === 0)
      return new l.fabric.Group([], {
        originX: "left"
      });
    const t = Math.min(
      i.length,
      Math.floor(o.width / (L + w)) || 1
      // round to 1 if floor is 0
    ), e = (o.width - (t - 1) * w) / t;
    let n = 0;
    const c = (await Promise.all(
      this._makeSegments(
        i,
        e
      )
    )).map(({ title: a, items: f }, b) => {
      b > 0 && (n += I), a.top = n, n += a.height + M;
      const p = f.map(
        ({ title: h, items: y }, x) => {
          const S = [];
          return h && !(f.length === 1 && h.text === a.text) && (x > 0 && (n += N), h.top = n, n += h.height + T, S.push(h)), y.forEach((g) => {
            g.top = n, n += g.height + G;
          }), [...S, ...y].filter((g) => g);
        }
      );
      return new l.fabric.Group([
        a,
        ...p.flat()
      ]);
    }).flat(), s = this._makeColumns(c, e, t);
    return Promise.resolve(s);
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
  _makeColumns(o, i, t) {
    let e = 0, n = 0, r = 0;
    const c = o[o.length - 1].aCoords.bl.y / t;
    return o.forEach((s, a) => {
      const f = a !== o.length - 1 ? o[a + 1].top - s.top : s.height, b = r > c * (e + 1), p = n !== 0 && f > c, h = t - e > o.length - a;
      (b || p || h) && e < t && (++e, n = 0), s.left = e * (i + w), s.top = n, n += f, r += f;
    }), new l.fabric.Group(o, {
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
  _makeSegments(o, i) {
    return o.map(async (t) => {
      const e = new l.fabric.Textbox(t.name, {
        fontSize: 24,
        fontFamily: m,
        width: i
      }), n = this._getLayerTreeIds(t);
      let r = [];
      return r = t.supportsSublayers ? await Promise.all(
        this._makeSegmentChunks(n, t, i)
        // pass list of flatenned sublayer ids
      ) : await Promise.all(
        this._makeSegmentChunks([-1], t, i)
        // pass single -1 id so the root gets processed
      ), { title: e, items: r };
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
  _makeSegmentChunks(o, i, t) {
    const e = i;
    return o.map(async (n) => {
      const r = n === -1 ? e : e.getSublayer(n);
      if (!r)
        return {
          title: new l.fabric.Textbox("ERROR", {
            fontSize: 20,
            fontFamily: m,
            width: t
          }),
          items: []
        };
      await Promise.all(r.legend.map((f) => f.drawPromise));
      const c = r.legend, s = new l.fabric.Textbox(r.name, {
        fontSize: 20,
        fontFamily: m,
        width: t
      }), a = await Promise.all(
        this._makeChunkItems(c, t)
      );
      return {
        title: s,
        items: a
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
  _makeChunkItems(o, i) {
    return o.map(async (t) => {
      const e = (await O(l.fabric.loadSVGFromString)(t.svgcode))[0];
      if (t.esriStandard) {
        e.originY = "center", e.top = u / 2;
        const n = new l.fabric.Textbox(t.label, {
          fontSize: 12,
          fontFamily: m,
          originY: "center",
          left: d + 20,
          top: u / 2,
          width: i - d - 20
        });
        return new l.fabric.Group([e, n], {
          height: u
        });
      } else {
        const n = new l.fabric.Textbox(t.label, {
          fontSize: 12,
          fontFamily: m,
          originY: "center",
          left: 0,
          top: u / 2,
          width: i
        }), r = Number(t.imgWidth), c = Number(t.imgHeight), s = Math.min(1, i / r);
        return e && (e.originY = "center", e.top = c * s / 2 + u, e.scaleToHeight(c * s), e.scaleToWidth(r * s)), new l.fabric.Group([n, e].filter(Boolean), {
          height: c * s + u
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
  _getLayerTreeIds(o) {
    const i = [], t = [...o.sublayers];
    for (; t.length > 0; ) {
      const e = t.shift();
      e && (e.visibility && i.push(e.layerIdx), t.push(...e.sublayers));
    }
    return i;
  }
}
const O = (_) => (o) => new Promise((i) => {
  _(o, (t) => {
    i(t);
  });
});
export {
  H as default
};
//# sourceMappingURL=index-B7h0jdMu.js.map
