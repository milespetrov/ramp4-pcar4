import { O as i, P as r, Q as O, eP as w, eG as _, U as j, b8 as F, s as f, b5 as N, ez as J, ac as R, dw as I, D as m, iL as P, dZ as q, iM as T, iN as k, dI as D, iO as Q, dM as Z, dJ as G, dK as z, dL as C, dN as L, bv as S, a1 as U, iP as g, iQ as V, I as v, iR as W, f0 as p, iS as M, e4 as B, dv as A, dP as X, iT as K, iU as Y, iV as H, dQ as ee, iW as te, iX as ie, W as re, iY as se, iZ as oe, i_ as ne, i$ as ae, dR as le, j0 as de, dX as ue } from "./main-n1d2W0Ts.js";
import { l as pe } from "./clientSideDefaults-D1T7exSR.js";
let l = class extends w {
  constructor() {
    super(...arguments), this.type = "geojson", this.refresh = _(async (e) => {
      await this.load();
      const { extent: t, timeExtent: o } = await this._connection.invoke("refresh", e);
      return this.sourceJSON.extent = t, o && (this.sourceJSON.timeInfo.timeExtent = [o.start, o.end]), { dataChanged: !0, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(e) {
    const t = e != null ? e.signal : null;
    return this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this);
  }
  destroy() {
    this._connection?.close(), this._connection = null;
  }
  applyEdits(e) {
    return this.load().then(() => this._applyEdits(e));
  }
  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }
  queryFeatures(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t)).then((o) => j.fromJSON(o));
  }
  queryFeaturesJSON(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t));
  }
  queryFeatureCount(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t));
  }
  queryObjectIds(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t));
  }
  queryExtent(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("queryExtent", e ? e.toJSON() : null, t)).then((o) => ({ count: o.count, extent: F.fromJSON(o.extent) }));
  }
  querySnapping(e, t = {}) {
    return this.load(t).then(() => this._connection.invoke("querySnapping", e, t));
  }
  _applyEdits(e) {
    if (!this._connection) throw new f("geojson-layer-source:edit-failure", "Memory source not loaded");
    const t = this.layer.objectIdField, o = [], n = [], h = [];
    if (e.addFeatures) for (const a of e.addFeatures) o.push(this._serializeFeature(a));
    if (e.deleteFeatures) for (const a of e.deleteFeatures) "objectId" in a && a.objectId != null ? n.push(a.objectId) : "attributes" in a && a.attributes[t] != null && n.push(a.attributes[t]);
    if (e.updateFeatures) for (const a of e.updateFeatures) h.push(this._serializeFeature(a));
    return this._connection.invoke("applyEdits", { adds: o, updates: h, deletes: n }).then(({ extent: a, timeExtent: d, featureEditResults: c }) => (this.sourceJSON.extent = a, d && (this.sourceJSON.timeInfo.timeExtent = [d.start, d.end]), this._createEditsResult(c)));
  }
  _createEditsResult(e) {
    return { addFeatureResults: e.addResults ? e.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: e.updateResults ? e.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: e.deleteResults ? e.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] };
  }
  _createFeatureEditResult(e) {
    const t = e.success === !0 ? null : e.error || { code: void 0, description: void 0 };
    return { objectId: e.objectId, globalId: e.globalId, error: t ? new f("geojson-layer-source:edit-failure", t.description, { code: t.code }) : null };
  }
  _serializeFeature(e) {
    const { attributes: t } = e, o = this._geometryForSerialization(e);
    return o ? { geometry: o.toJSON(), attributes: t } : { attributes: t };
  }
  _geometryForSerialization(e) {
    const { geometry: t } = e;
    return t == null ? null : t.type === "mesh" || t.type === "extent" ? N.fromExtent(t.extent) : t;
  }
  async _startWorker(e) {
    this._connection = await J("GeoJSONSourceWorker", { strategy: R("feature-layers-workers") ? "dedicated" : "local", signal: e, registryTarget: this });
    const { fields: t, spatialReference: o, hasZ: n, geometryType: h, objectIdField: a, url: d, timeInfo: c, customParameters: E } = this.layer, x = this.layer.originOf("spatialReference") === "defaults", $ = { url: d, customParameters: E, fields: t && t.map((y) => y.toJSON()), geometryType: I.toJSON(h), hasZ: n, objectIdField: a, timeInfo: c ? c.toJSON() : null, spatialReference: x ? null : o && o.toJSON() }, u = await this._connection.invoke("load", $, { signal: e });
    for (const y of u.warnings) m.getLogger(this.layer).warn("#load()", `$${y.message} (title: '${this.layer.title || "no title"}', id: '${this.layer.id ?? "no id"}')`, { warning: y });
    u.featureErrors.length && m.getLogger(this.layer).warn("#load()", `Encountered ${u.featureErrors.length} validation errors while loading features. (title: '${this.layer.title || "no title"}', id: '${this.layer.id ?? "no id"}')`, { errors: u.featureErrors }), this.sourceJSON = u.layerDefinition, this.capabilities = pe(this.sourceJSON.hasZ, !0);
  }
};
i([r()], l.prototype, "capabilities", void 0), i([r()], l.prototype, "type", void 0), i([r({ constructOnly: !0 })], l.prototype, "layer", void 0), i([r()], l.prototype, "sourceJSON", void 0), l = i([O("esri.layers.graphics.sources.GeoJSONSource")], l);
const b = de();
let s = class extends P(q(T(k(D(Q(Z(G(z(C(L(ue))))))))))) {
  constructor(e) {
    super(e), this.copyright = null, this.dateFieldsTimeZone = null, this.definitionExpression = null, this.displayField = null, this.editingEnabled = !1, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.hasZ = void 0, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "GeoJSON", this.outFields = null, this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new l({ layer: this }), this.spatialReference = S.WGS84, this.templates = null, this.title = "GeoJSON", this.type = "geojson";
  }
  destroy() {
    this.source?.destroy();
  }
  load(e) {
    const t = this.loadFromPortal({ supportedTypes: ["GeoJson"], supportsData: !1 }, e).catch(U).then(() => this.source.load(e)).then(() => {
      this.read(this.source.sourceJSON, { origin: "service", url: this.parsedUrl }), this.revert(["objectIdField", "fields", "timeInfo"], "service"), g(this.renderer, this.fieldsIndex), V(this.timeInfo, this.fieldsIndex);
    });
    return this.addResolvingPromise(t), Promise.resolve(this);
  }
  get capabilities() {
    return this.source ? this.source.capabilities : null;
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  get parsedUrl() {
    return this.url ? v(this.url) : null;
  }
  set renderer(e) {
    g(e, this.fieldsIndex), this._set("renderer", e);
  }
  set url(e) {
    if (!e) return void this._set("url", e);
    const t = v(e);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async applyEdits(e, t) {
    const { applyEdits: o } = await import("./editingSupport-DOC8Eybw.js");
    await this.load();
    const n = await o(this, this.source, e, t);
    return this.read({ extent: this.source.sourceJSON.extent, timeInfo: this.source.sourceJSON.timeInfo }, { origin: "service", ignoreDefaults: !0 }), n;
  }
  on(e, t) {
    return super.on(e, t);
  }
  createPopupTemplate(e) {
    return W(this, e);
  }
  createQuery() {
    const e = new p(), t = this.capabilities?.data;
    e.returnGeometry = !0, t && t.supportsZ && (e.returnZ = !0), e.outFields = ["*"], e.where = this.definitionExpression || "1=1";
    const { timeOffset: o, timeExtent: n } = this;
    return e.timeExtent = o != null && n != null ? n.offset(-o.value, o.unit) : n || null, e;
  }
  getFieldDomain(e, t) {
    return this.getField(e)?.domain;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(p.from(e) || this.createQuery(), t)).then((o) => {
      if (o?.features) for (const n of o.features) n.layer = n.sourceLayer = this;
      return o;
    });
  }
  queryObjectIds(e, t) {
    return this.load().then(() => this.source.queryObjectIds(p.from(e) || this.createQuery(), t));
  }
  queryFeatureCount(e, t) {
    return this.load().then(() => this.source.queryFeatureCount(p.from(e) || this.createQuery(), t));
  }
  queryExtent(e, t) {
    return this.load().then(() => this.source.queryExtent(p.from(e) || this.createQuery(), t));
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: t } = await this.source.refresh(this.customParameters);
      return t != null && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: !0 }), e;
    } catch {
    }
    return !1;
  }
};
i([r({ readOnly: !0, json: { read: !1, write: !1 } })], s.prototype, "capabilities", null), i([r({ type: String })], s.prototype, "copyright", void 0), i([r({ readOnly: !0 })], s.prototype, "createQueryVersion", null), i([r(M("dateFieldsTimeReference"))], s.prototype, "dateFieldsTimeZone", void 0), i([r({ readOnly: !0 })], s.prototype, "defaultPopupTemplate", null), i([r({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], s.prototype, "definitionExpression", void 0), i([r({ type: String })], s.prototype, "displayField", void 0), i([r({ type: Boolean })], s.prototype, "editingEnabled", void 0), i([r(B)], s.prototype, "elevationInfo", void 0), i([r({ type: [A], json: { name: "layerDefinition.fields", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "fields" } } } })], s.prototype, "fields", void 0), i([r(b.fieldsIndex)], s.prototype, "fieldsIndex", void 0), i([r({ type: F, json: { name: "extent" } })], s.prototype, "fullExtent", void 0), i([r({ type: ["point", "polygon", "polyline", "multipoint"], json: { read: { reader: I.read } } })], s.prototype, "geometryType", void 0), i([r({ type: Boolean })], s.prototype, "hasZ", void 0), i([r(X)], s.prototype, "id", void 0), i([r({ type: Boolean, readOnly: !0 })], s.prototype, "isTable", null), i([r(K)], s.prototype, "labelsVisible", void 0), i([r({ type: [Y], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: H }, write: !0 } })], s.prototype, "labelingInfo", void 0), i([r(ee)], s.prototype, "legendEnabled", void 0), i([r({ type: ["show", "hide"] })], s.prototype, "listMode", void 0), i([r({ type: String, json: { name: "layerDefinition.objectIdField", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "objectIdField" } } } })], s.prototype, "objectIdField", void 0), i([r(te)], s.prototype, "opacity", void 0), i([r({ type: ["GeoJSON"] })], s.prototype, "operationalLayerType", void 0), i([r(b.outFields)], s.prototype, "outFields", void 0), i([r({ readOnly: !0 })], s.prototype, "parsedUrl", null), i([r(ie)], s.prototype, "popupEnabled", void 0), i([r({ type: re, json: { name: "popupInfo", write: !0 } })], s.prototype, "popupTemplate", void 0), i([r({ types: se, json: { name: "layerDefinition.drawingInfo.renderer", write: !0, origins: { service: { name: "drawingInfo.renderer" }, "web-scene": { types: oe } } } })], s.prototype, "renderer", null), i([r(ne)], s.prototype, "screenSizePerspectiveEnabled", void 0), i([r({ readOnly: !0 })], s.prototype, "source", void 0), i([r({ type: S })], s.prototype, "spatialReference", void 0), i([r({ type: [ae] })], s.prototype, "templates", void 0), i([r()], s.prototype, "title", void 0), i([r({ json: { read: !1 }, readOnly: !0 })], s.prototype, "type", void 0), i([r(le)], s.prototype, "url", null), s = i([O("esri.layers.GeoJSONLayer")], s);
const ye = s;
export {
  ye as default
};
//# sourceMappingURL=GeoJSONLayer-PMmlY5mH.js.map
