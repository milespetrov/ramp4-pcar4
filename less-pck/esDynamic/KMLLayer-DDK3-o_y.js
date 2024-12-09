import { cP as E, dF as L, bi as c, f9 as u, S as h, j9 as f, b8 as d, iD as O, V as b, O as s, P as i, ja as F, dO as p, Q as S, eP as _, dI as j, dJ as $, dM as M, dK as P, dL as I, dN as C, bP as K, bv as g, o as N, a1 as R, ek as T, dR as J, dX as z } from "./main-n1d2W0Ts.js";
import { j as A, S as m, g as w, d as x } from "./kmlUtils-BmZHTYdz.js";
var y;
let a = y = class extends E.EventedMixin(L(_)) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.id = null, this.networkLink = null, this.parent = null, this.sublayers = null, this.title = null, this.sourceJSON = null, this.layer = null, this.addHandles([c(() => this.sublayers, "after-add", ({ item: t }) => {
      t.parent = this, t.layer = this.layer;
    }, u), c(() => this.sublayers, "after-remove", ({ item: t }) => {
      t.layer = t.parent = null;
    }, u), h(() => this.sublayers, (t, r) => {
      if (r) for (const l of r) l.layer = l.parent = null;
      if (t) for (const l of t) l.parent = this, l.layer = this.layer;
    }, u), h(() => this.layer, (t) => {
      if (this.sublayers) for (const r of this.sublayers) r.layer = t;
    }, u)]);
  }
  initialize() {
    f(() => this.networkLink).then(() => f(() => this.visible === !0)).then(() => this.load());
  }
  load(e) {
    if (!this.networkLink || this.networkLink.viewFormat) return;
    const t = e != null ? e.signal : null, r = this._fetchService(this._get("networkLink")?.href ?? "", t).then((l) => {
      const n = A(l.sublayers);
      this.fullExtent = d.fromJSON(n), this.sourceJSON = l;
      const v = O(b.ofType(y), m(y, l));
      this.sublayers ? this.sublayers.addMany(v) : this.sublayers = v, this.layer?.emit("sublayer-update"), this.layer && this.layer.notifyChange("visibleSublayers");
    });
    return this.addResolvingPromise(r), Promise.resolve(this);
  }
  get visible() {
    return this._get("visible");
  }
  set visible(e) {
    this._get("visible") !== e && (this._set("visible", e), this.layer && this.layer.notifyChange("visibleSublayers"));
  }
  readVisible(e, t) {
    return !!t.visibility;
  }
  _fetchService(e, t) {
    return w(e, this.layer.outSpatialReference, this.layer.refreshInterval, t).then((r) => x(r.data));
  }
};
s([i()], a.prototype, "description", void 0), s([i({ type: d })], a.prototype, "fullExtent", void 0), s([i()], a.prototype, "id", void 0), s([i({ readOnly: !0, value: null })], a.prototype, "networkLink", void 0), s([i({ json: { write: { allowNull: !0 } } })], a.prototype, "parent", void 0), s([i({ type: b.ofType(a), json: { write: { allowNull: !0 } } })], a.prototype, "sublayers", void 0), s([i({ value: null, json: { read: { source: "name", reader: (e) => F(e) } } })], a.prototype, "title", void 0), s([i({ value: !0 })], a.prototype, "visible", null), s([p("visible", ["visibility"])], a.prototype, "readVisible", null), s([i()], a.prototype, "sourceJSON", void 0), s([i()], a.prototype, "layer", void 0), a = y = s([S("esri.layers.support.KMLSublayer")], a);
const k = a, V = ["kml", "xml"];
let o = class extends j($(M(P(I(C(z)))))) {
  constructor(...e) {
    super(...e), this._visibleFolders = [], this.allSublayers = new K({ getCollections: () => [this.sublayers], getChildrenFunction: (t) => t.sublayers }), this.outSpatialReference = g.WGS84, this.path = null, this.legendEnabled = !1, this.operationalLayerType = "KML", this.sublayers = null, this.type = "kml", this.url = null;
  }
  initialize() {
    this.addHandles([h(() => this.sublayers, (e, t) => {
      t && t.forEach((r) => {
        r.parent = null, r.layer = null;
      }), e && e.forEach((r) => {
        r.parent = this, r.layer = this;
      });
    }, u), this.on("sublayer-update", () => this.notifyChange("fullExtent"))]);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  readSublayersFromItemOrWebMap(e, t) {
    this._visibleFolders = t.visibleFolders;
  }
  readSublayers(e, t, r) {
    return m(k, t, r, this._visibleFolders);
  }
  writeSublayers(e, t) {
    const r = [], l = e.toArray();
    for (; l.length; ) {
      const n = l[0];
      n.networkLink || (n.visible && r.push(n.id), n.sublayers && l.push(...n.sublayers.toArray())), l.shift();
    }
    t.visibleFolders = r;
  }
  get title() {
    const e = this._get("title");
    return e && this.originOf("title") !== "defaults" ? e : this.url ? N(this.url, V) || "KML" : e;
  }
  set title(e) {
    this._set("title", e);
  }
  get visibleSublayers() {
    const e = this.sublayers, t = [], r = (l) => {
      l.visible && (t.push(l), l.sublayers && l.sublayers.forEach(r));
    };
    return e && e.forEach(r), t;
  }
  get fullExtent() {
    return this._recomputeFullExtent();
  }
  load(e) {
    const t = e != null ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["KML"], supportsData: !1 }, e).catch(R).then(() => this._fetchService(t))), Promise.resolve(this);
  }
  destroy() {
    super.destroy(), this.allSublayers.destroy();
  }
  async _fetchService(e) {
    const t = await Promise.resolve().then(() => this.resourceInfo ? { ssl: !1, data: this.resourceInfo } : w(this.url ?? "", this.outSpatialReference, this.refreshInterval, e)), r = x(t.data);
    r && this.read(r, { origin: "service" });
  }
  _recomputeFullExtent() {
    let e = null;
    this.extent != null && (e = this.extent.clone());
    const t = (r) => {
      if (r.sublayers) for (const l of r.sublayers.items) t(l), l.visible && l.fullExtent && (e != null ? e.union(l.fullExtent) : e = l.fullExtent.clone());
    };
    return t(this), e;
  }
};
s([i({ readOnly: !0 })], o.prototype, "allSublayers", void 0), s([i({ type: g })], o.prototype, "outSpatialReference", void 0), s([i({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], o.prototype, "path", void 0), s([i({ readOnly: !0, json: { read: !1, write: !1 } })], o.prototype, "legendEnabled", void 0), s([i({ type: ["show", "hide", "hide-children"] })], o.prototype, "listMode", void 0), s([i({ type: ["KML"] })], o.prototype, "operationalLayerType", void 0), s([i({})], o.prototype, "resourceInfo", void 0), s([i({ type: b.ofType(k), json: { write: { ignoreOrigin: !0 } } })], o.prototype, "sublayers", void 0), s([p(["web-map", "portal-item"], "sublayers", ["visibleFolders"])], o.prototype, "readSublayersFromItemOrWebMap", null), s([p("service", "sublayers", ["sublayers"])], o.prototype, "readSublayers", null), s([T("sublayers")], o.prototype, "writeSublayers", null), s([i({ readOnly: !0, json: { read: !1 } })], o.prototype, "type", void 0), s([i({ json: { origins: { "web-map": { read: { source: "title" } } }, write: { ignoreOrigin: !0 } } })], o.prototype, "title", null), s([i(J)], o.prototype, "url", void 0), s([i({ readOnly: !0 })], o.prototype, "visibleSublayers", null), s([i({ type: d })], o.prototype, "extent", void 0), s([i()], o.prototype, "fullExtent", null), o = s([S("esri.layers.KMLLayer")], o);
const H = o;
export {
  H as default
};
//# sourceMappingURL=KMLLayer-DDK3-o_y.js.map
