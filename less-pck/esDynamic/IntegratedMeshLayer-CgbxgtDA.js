import { O as i, P as r, b5 as _, ek as I, Q as f, bV as L, bp as b, dn as x, kI as N, ad as M, dF as R, V as j, I as A, a2 as J, dY as $, dK as V, dL as D, dM as P, dN as K, dZ as U, d_ as E, bi as C, f9 as k, p as z, a1 as F, s as y, D as v, dO as G, e4 as Z, dX as q } from "./main-n1d2W0Ts.js";
import { j as h } from "./persistable-DQhANZ99.js";
import { L as H, C as S } from "./SceneService-B9sKm52f.js";
import { p as Q, a as X, y as Y, m as B } from "./I3SLayerDefinitions-DcNr_0Ew.js";
import { $ as w, Z as W, w as ee } from "./elevationInfoUtils-qr7mcYhl.js";
var m;
let n = m = class extends L {
  constructor(e) {
    super(e), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e, t, s, a) {
    if (a.layer?.spatialReference && !a.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!b(e.spatialReference, a.layer.spatialReference)) return void (a?.messages && a.messages.push(new x("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: a.layer.spatialReference, context: a })));
      const l = new _();
      N(e, l, a.layer.spatialReference), t[s] = l.toJSON(a);
    } else t[s] = e.toJSON(a);
    delete t[s].spatialReference;
  }
  clone() {
    return new m({ geometry: M(this.geometry), type: this.type });
  }
};
i([r({ type: _ }), h()], n.prototype, "geometry", void 0), i([I(["web-scene", "portal-item"], "geometry")], n.prototype, "writeGeometry", null), i([r({ type: ["clip", "mask", "replace"], nonNullable: !0 }), h()], n.prototype, "type", void 0), n = m = i([f("esri.layers.support.SceneModification")], n);
const c = n;
var p;
let d = p = class extends R(j.ofType(c)) {
  constructor(e) {
    super(e), this.url = null;
  }
  clone() {
    return new p({ url: this.url, items: this.items.map((e) => e.clone()) });
  }
  toJSON(e) {
    return this.toArray().map((t) => t.toJSON(e)).filter((t) => !!t.geometry);
  }
  static fromJSON(e, t) {
    const s = new p();
    for (const a of e) s.add(c.fromJSON(a, t));
    return s;
  }
  static async fromUrl(e, t, s) {
    const a = { url: A(e), origin: "service" }, l = await J(e, { responseType: "json", signal: s?.signal }), T = t.toJSON(), u = [];
    for (const g of l.data) u.push(c.fromJSON({ ...g, geometry: { ...g.geometry, spatialReference: T } }, a));
    return new p({ url: e, items: u });
  }
};
i([r({ type: String })], d.prototype, "url", void 0), d = p = i([f("esri.layers.support.SceneModifications")], d);
const O = d;
let o = class extends H($(V(D(P(K(U(E(q)))))))) {
  constructor(...e) {
    super(...e), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.path = null;
  }
  initialize() {
    this.addHandles(C(() => this.modifications, "after-changes", () => this.modifications = this.modifications, k));
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  readModifications(e, t, s) {
    this._modificationsSource = { url: z(e, s), context: s };
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const t = e?.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e);
    } catch (s) {
      F(s);
    }
    if (await this._fetchService(t), this._modificationsSource != null) {
      const s = await O.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", s, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t);
  }
  beforeSave() {
    if (this._modificationsSource != null) return this.load().then(() => {
    }, () => {
    });
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(S.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(S.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "IntegratedMesh") throw new y("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new y("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1) throw new y("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo() {
    const e = this.elevationInfo, t = "Integrated mesh layers";
    w(v.getLogger(this), W(t, "absolute-height", e)), w(v.getLogger(this), ee(t, e));
  }
};
i([r({ type: String, readOnly: !0 })], o.prototype, "geometryType", void 0), i([r({ type: ["show", "hide"] })], o.prototype, "listMode", void 0), i([r({ type: ["IntegratedMeshLayer"] })], o.prototype, "operationalLayerType", void 0), i([r({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0), i([r({ type: Q, readOnly: !0 })], o.prototype, "nodePages", void 0), i([r({ type: [X], readOnly: !0 })], o.prototype, "materialDefinitions", void 0), i([r({ type: [Y], readOnly: !0 })], o.prototype, "textureSetDefinitions", void 0), i([r({ type: [B], readOnly: !0 })], o.prototype, "geometryDefinitions", void 0), i([r({ readOnly: !0 })], o.prototype, "serviceUpdateTimeStamp", void 0), i([r({ type: O }), h({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], o.prototype, "modifications", void 0), i([G(["web-scene", "portal-item"], "modifications")], o.prototype, "readModifications", null), i([r(Z)], o.prototype, "elevationInfo", null), i([r({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], o.prototype, "path", void 0), o = i([f("esri.layers.IntegratedMeshLayer")], o);
const ae = o;
export {
  ae as default
};
//# sourceMappingURL=IntegratedMeshLayer-CgbxgtDA.js.map
