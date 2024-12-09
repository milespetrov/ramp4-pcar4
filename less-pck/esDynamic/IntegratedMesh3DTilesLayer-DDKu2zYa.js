import { dY as N, dK as z, dL as U, dM as V, dN as X, dZ as j, d_ as K, bv as b, b8 as w, d$ as _, aJ as u, di as P, dl as p, e0 as $, dh as I, c9 as L, cp as E, e1 as M, e2 as S, e3 as h, s as W, a1 as R, a2 as k, D as T, O as c, P as f, e4 as F, dR as G, Q as O, dX as q, aI as g } from "./main-n1d2W0Ts.js";
import { $ as D, Z, w as J } from "./elevationInfoUtils-qr7mcYhl.js";
let y = class extends N(z(U(V(X(j(K(q))))))) {
  constructor(i) {
    super(i), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.spatialReference = new b({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new w(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0;
  }
  set elevationInfo(i) {
    this._set("elevationInfo", i), this._validateElevationInfo();
  }
  _verifyArray(i, a) {
    if (!Array.isArray(i) || i.length < a) return !1;
    for (const o of i) if (typeof o != "number") return !1;
    return !0;
  }
  _initFullExtent(i) {
    const a = i.root?.boundingVolume;
    if (!a) return;
    if (a.box) {
      const t = a?.box;
      if (t[3] > 7972671 && t[7] > 7972671 && t[11] > 7945940) return;
    }
    const o = i.root?.transform, x = g();
    if (a.region && this._verifyArray(a.region, 6)) {
      const t = a.region, l = _(t[0]), n = _(t[1]), s = t[4], r = _(t[2]), e = _(t[3]), d = t[5];
      this.fullExtent = new w({ xmin: l, ymin: n, zmin: s, xmax: r, ymax: e, zmax: d, spatialReference: this.spatialReference });
    } else if (a.sphere && this._verifyArray(a.sphere, 4)) {
      const t = a.sphere, l = u(t[0], t[1], t[2]), n = t[3] / Math.sqrt(3), s = g();
      P(s, l, u(n, n, n));
      const r = g();
      if (p(r, l, u(n, n, n)), o && this._verifyArray(o, 16)) {
        const v = o;
        $(x, s, v), I(s, x), $(x, r, v), I(r, x);
      }
      L(s, E, 0, s, b.WGS84, 0, 1), L(r, E, 0, r, b.WGS84, 0, 1);
      const e = g(), d = g();
      M(e, s, r), S(d, s, r), this.fullExtent = new w({ xmin: e[0], ymin: e[1], zmin: e[2], xmax: d[0], ymax: d[1], zmax: d[2], spatialReference: this.spatialReference });
    } else if (a.box && this._verifyArray(a.box, 12)) {
      const t = a.box, l = u(t[0], t[1], t[2]), n = u(t[3], t[4], t[5]), s = u(t[6], t[7], t[8]), r = u(t[9], t[10], t[11]), e = [];
      for (let m = 0; m < 8; ++m) e.push(g());
      if (p(e[0], l, n), p(e[0], e[0], s), p(e[0], e[0], r), h(e[1], l, n), p(e[1], e[1], s), p(e[1], e[1], r), p(e[2], l, n), h(e[2], e[2], s), p(e[2], e[2], r), h(e[3], l, n), h(e[3], e[3], s), p(e[3], e[3], r), p(e[4], l, n), p(e[4], e[4], s), h(e[4], e[4], r), h(e[5], l, n), p(e[5], e[5], s), h(e[5], e[5], r), p(e[6], l, n), h(e[6], e[6], s), h(e[6], e[6], r), h(e[7], l, n), h(e[7], e[7], s), h(e[7], e[7], r), o && this._verifyArray(o, 16)) {
        const m = o;
        for (let A = 0; A < 8; ++A) $(e[A], e[A], m);
      }
      const d = u(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), v = u(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let m = 0; m < 8; ++m) L(e[m], E, 0, e[m], b.WGS84, 0, 1), M(v, v, e[m]), S(d, d, e[m]);
      this.fullExtent = new w({ xmin: v[0], ymin: v[1], zmin: v[2], xmax: d[0], ymax: d[1], zmax: d[2], spatialReference: this.spatialReference });
    }
  }
  async load(i) {
    return this.addResolvingPromise(this._doLoad(i)), this;
  }
  async _doLoad(i) {
    const a = i != null ? i.signal : null;
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (o) => {
        if (o.typeKeywords?.includes("IntegratedMesh")) return !0;
        throw new W("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, i);
    } catch (o) {
      R(o);
    }
    this.url && await k(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: a }).then((x) => {
      this._initFullExtent(x.data);
    }, (x) => {
      R(x);
    });
  }
  async fetchAttributionData() {
    return this.load().then(() => ({}));
  }
  _validateElevationInfo() {
    const i = this.elevationInfo, a = "Integrated mesh 3d tiles layers";
    D(T.getLogger(this), Z(a, "absolute-height", i)), D(T.getLogger(this), J(a, i));
  }
};
c([f({ type: ["IntegratedMesh3DTilesLayer"] })], y.prototype, "operationalLayerType", void 0), c([f({ type: b })], y.prototype, "spatialReference", void 0), c([f({ type: w })], y.prototype, "fullExtent", void 0), c([f(F)], y.prototype, "elevationInfo", null), c([f({ type: ["show", "hide"] })], y.prototype, "listMode", void 0), c([f(G)], y.prototype, "url", void 0), c([f({ readOnly: !0 })], y.prototype, "type", void 0), c([f({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], y.prototype, "path", void 0), c([f({ type: Number, json: { name: "layerDefinition.minScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], y.prototype, "minScale", void 0), c([f({ type: Number, json: { name: "layerDefinition.maxScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], y.prototype, "maxScale", void 0), y = c([O("esri.layers.IntegratedMesh3DTilesLayer")], y);
const B = y;
export {
  B as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-DDKu2zYa.js.map
