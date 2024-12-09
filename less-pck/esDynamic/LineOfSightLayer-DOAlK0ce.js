import { dF as m, bU as A, lD as d, O as i, P as s, a6 as x, jf as w, Q as h, dH as N, lz as P, V as v, bF as T, S as O, j8 as $, bE as E, lE as H, eo as C, lF as V, lG as D, dK as G, dN as K, dX as M } from "./main-n1d2W0Ts.js";
import { c as Q } from "./Analysis-jGSvHSUK.js";
import { j as f } from "./persistable-DQhANZ99.js";
import { i as U } from "./elevationInfoUtils-qr7mcYhl.js";
function F(e, t) {
  return I(e) === I(t);
}
function I(e) {
  if (e == null) return null;
  const t = e.layer != null ? e.layer.id : "";
  let l = null;
  return l = e.objectId != null ? e.objectId : e.layer != null && "objectIdField" in e.layer && e.layer.objectIdField != null && e.attributes != null ? e.attributes[e.layer.objectIdField] : e.uid, l == null ? null : `o-${t}-${l}`;
}
const L = { json: { write: { writer: X, target: { "feature.layerId": { type: [Number, String] }, "feature.objectId": { type: [Number, String] } } }, origins: { "web-scene": { read: k } } } };
function X(e, t) {
  e?.layer?.objectIdField != null && e.attributes != null && (t.feature = { layerId: e.layer.id, objectId: e.attributes[e.layer.objectIdField] });
}
function k(e) {
  if (e.layerId != null && e.objectId != null) return { uid: null, layer: { id: e.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e.objectId } };
}
let a = class extends m(A(N)) {
  constructor(t) {
    super(t), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(t) {
    return d(this.position, t.position) && d(this.elevationInfo, t.elevationInfo) && F(this.feature, t.feature);
  }
};
i([s({ type: x, json: { write: { isRequired: !0 } } })], a.prototype, "position", void 0), i([s({ type: w }), f()], a.prototype, "elevationInfo", void 0), i([s(L)], a.prototype, "feature", void 0), a = i([h("esri.analysis.LineOfSightAnalysisObserver")], a);
const S = a;
let u = class extends m(P) {
  constructor(e) {
    super(e), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(e) {
    return d(this.position, e.position) && d(this.elevationInfo, e.elevationInfo) && F(this.feature, e.feature);
  }
};
i([s({ type: x }), f()], u.prototype, "position", void 0), i([s({ type: w }), f()], u.prototype, "elevationInfo", void 0), i([s(L)], u.prototype, "feature", void 0), u = i([h("esri.analysis.LineOfSightAnalysisTarget")], u);
const R = u, g = v.ofType(R);
let r = class extends Q {
  constructor(t) {
    super(t), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(O(() => this._computeExtent(), (t) => {
      t?.pending == null && this._set("extent", t != null ? t.extent : null);
    }, $));
  }
  get targets() {
    return this._get("targets") || new g();
  }
  set targets(t) {
    this._set("targets", E(t, this.targets, g));
  }
  get spatialReference() {
    return this.observer?.position != null ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    return [this.observer?.position];
  }
  async waitComputeExtent() {
    const t = this._computeExtent();
    return t != null ? t.pending : Promise.resolve();
  }
  _computeExtent() {
    const t = this.spatialReference;
    if (this.observer?.position == null || t == null) return null;
    const l = (p) => U(p.position, p.elevationInfo) === "absolute-height", o = this.observer.position, b = H(o.x, o.y, o.z, o.x, o.y, o.z);
    for (const p of this.targets) if (p.position != null) {
      const y = C(p.position, t);
      if (y.pending != null) return { pending: y.pending, extent: null };
      if (y.geometry != null) {
        const { x: z, y: _, z: q } = y.geometry;
        V(b, [z, _, q]);
      }
    }
    const c = D(b, t);
    return l(this.observer) && this.targets.every(l) || (c.zmin = void 0, c.zmax = void 0), { pending: null, extent: c };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
i([s({ type: ["line-of-sight"] })], r.prototype, "type", void 0), i([s({ type: S, json: { read: !0, write: !0 } })], r.prototype, "observer", void 0), i([s({ cast: T, type: g, nonNullable: !0, json: { read: !0, write: !0 } })], r.prototype, "targets", null), i([s({ value: null, readOnly: !0 })], r.prototype, "extent", void 0), i([s({ readOnly: !0 })], r.prototype, "spatialReference", null), i([s({ readOnly: !0 })], r.prototype, "requiredPropertiesForEditing", null), r = i([h("esri.analysis.LineOfSightAnalysis")], r);
const j = r, B = v.ofType(R);
let n = class extends G(K(M)) {
  constructor(e) {
    super(e), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new j(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(O(() => this.analysis, (e, t) => {
      t != null && t.parent === this && (t.parent = null), e != null && (e.parent = this);
    }, $));
  }
  async load() {
    return this.analysis != null && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    return this.analysis?.observer;
  }
  set observer(e) {
    const { analysis: t } = this;
    t && (t.observer = e);
  }
  get targets() {
    return this.analysis != null ? this.analysis.targets : new v();
  }
  set targets(e) {
    E(e, this.analysis?.targets);
  }
  get fullExtent() {
    return this.analysis != null ? this.analysis.extent : null;
  }
  get spatialReference() {
    return this.analysis != null ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e) {
    this.analysis === e && (this.analysis = new j());
  }
};
i([s({ json: { read: !1 }, readOnly: !0 })], n.prototype, "type", void 0), i([s({ type: ["LineOfSightLayer"] })], n.prototype, "operationalLayerType", void 0), i([s({ type: S, json: { read: !0, write: { isRequired: !0, ignoreOrigin: !0 } } })], n.prototype, "observer", null), i([s({ type: B, json: { read: !0, write: { ignoreOrigin: !0 } } })], n.prototype, "targets", null), i([s({ nonNullable: !0, json: { read: !1, write: !1 } })], n.prototype, "analysis", void 0), i([s({ readOnly: !0 })], n.prototype, "fullExtent", null), i([s({ readOnly: !0 })], n.prototype, "spatialReference", null), i([s({ readOnly: !0, json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } } })], n.prototype, "opacity", void 0), i([s({ type: ["show", "hide"] })], n.prototype, "listMode", void 0), n = i([h("esri.layers.LineOfSightLayer")], n);
const ie = n;
export {
  ie as default
};
//# sourceMappingURL=LineOfSightLayer-DOAlK0ce.js.map
