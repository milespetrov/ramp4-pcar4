import { O as t, P as r, Q as I, fa as _, f1 as E, U, b8 as R, s as k, dT as f, d$ as J, eW as W, a9 as D, D as Y, bg as H, gu as X, ek as L, gv as Q, gw as G, e3 as V, gx as z, e4 as A, e7 as B, e5 as Z, e6 as M, e8 as K, bx as C, gy as O, gz as ee, dS as T, eO as te, I as re, gA as ie, fn as c, gB as se, er as oe, eH as ae, gC as ne, gD as le, gE as pe, eb as de, g$ as h, hu as ue, gG as ye, W as ce, gH as me, gI as he, gJ as fe, ec as ge, gL as we, ei as ve } from "./main-Bnvk3STL.js";
import { l as Fe, o as xe } from "./clientSideDefaults-Bwi5Hqyg.js";
import { v as be, W as Oe, z as Se, Y as Ie, S as Re } from "./wfsUtils-nH4JKQve.js";
let d = class extends _ {
  constructor() {
    super(...arguments), this._connection = null, this._workerHandler = null, this.capabilities = Fe(!1, !1), this.type = "wfs", this.refresh = E(async () => {
      await this.load();
      const e = { customParameters: this.layer.customParameters, maxRecordCount: this.layer.maxRecordCount, maxTotalRecordCount: this.layer.maxTotalRecordCount, maxPageCount: this.layer.maxPageCount }, { extent: s } = await this._workerHandler.refresh(e);
      return s && (this.sourceJSON.extent = s), { dataChanged: !0, updates: { extent: this.sourceJSON.extent } };
    });
  }
  load(e) {
    const s = e != null ? e.signal : null;
    return this.addResolvingPromise(this._startWorker({ signal: s })), Promise.resolve(this);
  }
  destroy() {
    this._connection?.close(), this._connection = null, this._workerHandler = null;
  }
  async openPorts() {
    return await this.load(), this._connection.openPorts();
  }
  async queryFeatures(e, s = {}) {
    const o = await this.queryFeaturesJSON(e, s);
    return U.fromJSON(o);
  }
  async queryFeaturesJSON(e, s = {}) {
    return await this.load(s), this._workerHandler.queryFeatures(e ? e.toJSON() : void 0, s);
  }
  async queryFeatureCount(e, s = {}) {
    return await this.load(s), this._workerHandler.queryFeatureCount(e ? e.toJSON() : void 0, s);
  }
  async queryObjectIds(e, s = {}) {
    return await this.load(s), this._workerHandler.queryObjectIds(e ? e.toJSON() : void 0, s);
  }
  async queryExtent(e, s = {}) {
    await this.load(s);
    const o = await this._workerHandler.queryExtent(e ? e.toJSON() : void 0, s);
    return { count: o.count, extent: R.fromJSON(o.extent) };
  }
  async querySnapping(e, s = {}) {
    return await this.load(s), this._workerHandler.querySnapping(e, s);
  }
  async _createLoadOptions(e) {
    const { url: s, customParameters: o, name: n, namespaceUri: l, fields: a, geometryType: u, maxRecordCount: y, maxPageCount: g, maxTotalRecordCount: w, swapXY: v } = this.layer, m = this.layer.originOf("spatialReference") === "defaults" ? void 0 : this.layer.spatialReference;
    if (!s) throw new k("wfs-layer:missing-url", "WFSLayer must be created with a url");
    this.wfsCapabilities || (this.wfsCapabilities = await be(s, { customParameters: o, ...e }));
    const P = ["fields", "geometryType", "name", "namespaceUri", "swapXY"].some((F) => this.layer[F] == null), p = P ? await Oe(this.wfsCapabilities, n, l, { spatialReference: m, customParameters: o, signal: e?.signal }) : { ...Se(a ?? []), geometryType: u, name: n, namespaceUri: l, spatialReference: m, swapXY: v }, $ = Ie(this.wfsCapabilities.readFeatureTypes(), p.name, p.namespaceUri), j = f.toJSON(p.geometryType), { operations: b } = this.wfsCapabilities, q = b.GetFeature.url, N = b.GetFeature.outputFormat;
    return { customParameters: o, featureType: $, fields: p.fields?.map((F) => F.toJSON()) ?? [], geometryField: p.geometryField, geometryType: j, getFeatureUrl: q, getFeatureOutputFormat: N, maxRecordCount: y, maxPageCount: g, maxTotalRecordCount: w, objectIdField: p.objectIdField, spatialReference: p.spatialReference?.toJSON(), swapXY: !!p.swapXY };
  }
  async _startWorker(e) {
    const [s, o] = await J([this._createLoadOptions(e), W("WFSSourceWorker", { ...e, strategy: D("feature-layers-workers") ? "dedicated" : "local", registryTarget: this })]), n = s.error || o.error || null, l = o.value || null;
    if (n) throw l && l.close(), n;
    const a = s.value;
    this._connection = o.value, this._workerHandler = this._connection.createInvokeProxy();
    const u = await this._workerHandler.load(a, e);
    for (const y of u.warnings) Y.getLogger(this.layer).warn("#load()", `${y.message} (title: '${this.layer.title || "no title"}', id: '${this.layer.id ?? "no id"}')`, { warning: y });
    this.sourceJSON = { dateFieldsTimeReference: { timeZoneIANA: H }, extent: u.extent, fields: a.fields, geometryType: a.geometryType, objectIdField: a.objectIdField, geometryField: a.geometryField, drawingInfo: xe(a.geometryType), name: a.featureType.title, wfsInfo: { name: a.featureType.name, featureUrl: a.getFeatureUrl, maxFeatures: a.maxRecordCount, swapXY: a.swapXY, supportedSpatialReferences: a.featureType.supportedSpatialReferences, version: "2.0.0", wfsNamespace: a.featureType.namespaceUri } };
  }
};
t([r()], d.prototype, "capabilities", void 0), t([r({ constructOnly: !0 })], d.prototype, "layer", void 0), t([r()], d.prototype, "sourceJSON", void 0), t([r()], d.prototype, "type", void 0), t([r()], d.prototype, "wfsCapabilities", void 0), d = t([I("esri.layers.graphics.sources.WFSSource")], d);
var x;
const S = we();
let i = x = class extends X(L(Q(G(V(z(A(B(Z(M(K(ve))))))))))) {
  static fromWFSLayerInfo(e) {
    const { customParameters: s, fields: o, geometryField: n, geometryType: l, name: a, namespaceUri: u, objectIdField: y, spatialReference: g, swapXY: w, url: v, wfsCapabilities: m } = e;
    return new x({ customParameters: s, fields: o, geometryField: n, geometryType: l, name: a, namespaceUri: u, objectIdField: y, spatialReference: g, swapXY: w, url: v, wfsCapabilities: m });
  }
  constructor(e) {
    super(e), this.copyright = null, this.customParameters = null, this.dateFieldsTimeZone = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.featureUrl = void 0, this.fields = null, this.fieldsIndex = null, this.fullExtent = null, this.geometryType = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.objectIdField = null, this.operationalLayerType = "WFS", this.maxRecordCount = 3e3, this.maxPageCount = 10, this.maxTotalRecordCount = 2e5, this.mode = 0, this.name = null, this.namespaceUri = null, this.outFields = null, this.popupEnabled = !0, this.popupTemplate = null, this.screenSizePerspectiveEnabled = !0, this.source = new d({ layer: this }), this.spatialReference = C.WGS84, this.spatialReferences = [4326], this.swapXY = void 0, this.title = "WFS", this.type = "wfs", this.url = null, this.version = void 0;
  }
  destroy() {
    this.source?.destroy();
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WFS"] }, e).then(() => this.source.load(e)).then(() => {
      this.read(this.source.sourceJSON, { origin: "service", url: this.parsedUrl }), this.revert(["objectIdField", "fields", "timeInfo", "spatialReference", "name", "namespaceUri"], "service"), O(this.renderer, this.fieldsIndex), ee(this.timeInfo, this.fieldsIndex);
    })), Promise.resolve(this);
  }
  get capabilities() {
    return this.source?.capabilities;
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") || 0) + 1;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  writeFields(e, s, o) {
    const n = e.filter((l) => l.name !== Re);
    this.geometryField && n.unshift(new T({ name: this.geometryField, alias: this.geometryField, type: "geometry" })), te(o, n.map((l) => l.toJSON()), s);
  }
  get parsedUrl() {
    return re(this.url);
  }
  set renderer(e) {
    O(e, this.fieldsIndex), this._set("renderer", e);
  }
  get wfsCapabilities() {
    return this.source?.wfsCapabilities;
  }
  set wfsCapabilities(e) {
    this.source && (this.source.wfsCapabilities = e);
  }
  createPopupTemplate(e) {
    return ie(this, e);
  }
  createQuery() {
    const e = new c({ returnGeometry: !0, outFields: ["*"], where: this.definitionExpression || "1=1" }), { timeOffset: s, timeExtent: o } = this;
    return e.timeExtent = s != null && o != null ? o.offset(-s.value, s.unit) : o || null, e;
  }
  getFieldDomain(e, s) {
    return this.getField(e)?.domain;
  }
  getField(e) {
    return this.fieldsIndex?.get(e);
  }
  queryFeatures(e, s) {
    return this.load().then(() => this.source.queryFeatures(c.from(e) || this.createQuery(), s)).then((o) => {
      if (o?.features) for (const n of o.features) n.layer = n.sourceLayer = this;
      return o;
    });
  }
  queryObjectIds(e, s) {
    return this.load().then(() => this.source.queryObjectIds(c.from(e) || this.createQuery(), s));
  }
  queryFeatureCount(e, s) {
    return this.load().then(() => this.source.queryFeatureCount(c.from(e) || this.createQuery(), s));
  }
  queryExtent(e, s) {
    return this.load().then(() => this.source.queryExtent(c.from(e) || this.createQuery(), s));
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: s } = await this.source.refresh();
      return s != null && this.read(s, { origin: "service", url: this.parsedUrl, ignoreDefaults: !0 }), e;
    } catch {
    }
    return !1;
  }
};
t([r({ readOnly: !0 })], i.prototype, "capabilities", null), t([r({ type: String })], i.prototype, "copyright", void 0), t([r({ readOnly: !0 })], i.prototype, "createQueryVersion", null), t([r({ json: { name: "wfsInfo.customParameters", write: { overridePolicy: (e) => ({ enabled: !!(e && Object.keys(e).length > 0), ignoreOrigin: !0 }) } } })], i.prototype, "customParameters", void 0), t([r(se("dateFieldsTimeReference"))], i.prototype, "dateFieldsTimeZone", void 0), t([r({ readOnly: !0 })], i.prototype, "defaultPopupTemplate", null), t([r({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), t([r({ type: String })], i.prototype, "displayField", void 0), t([r(oe)], i.prototype, "elevationInfo", void 0), t([r({ type: String, readOnly: !0, json: { name: "wfsInfo.featureUrl", write: { ignoreOrigin: !0, isRequired: !0 } } })], i.prototype, "featureUrl", void 0), t([r({ type: [T], json: { name: "layerDefinition.fields", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "fields" } } } })], i.prototype, "fields", void 0), t([ae("fields")], i.prototype, "writeFields", null), t([r(S.fieldsIndex)], i.prototype, "fieldsIndex", void 0), t([r({ type: R, json: { name: "extent" } })], i.prototype, "fullExtent", void 0), t([r()], i.prototype, "geometryField", void 0), t([r({ type: String, json: { read: { source: "layerDefinition.geometryType", reader: f.read }, write: { target: "layerDefinition.geometryType", writer: f.write, ignoreOrigin: !0 }, origins: { service: { read: f.read } } } })], i.prototype, "geometryType", void 0), t([r({ type: String })], i.prototype, "id", void 0), t([r(ne)], i.prototype, "labelsVisible", void 0), t([r({ type: [le], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: pe }, write: !0 } })], i.prototype, "labelingInfo", void 0), t([r(de)], i.prototype, "legendEnabled", void 0), t([r({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), t([r({ type: String })], i.prototype, "objectIdField", void 0), t([r({ type: ["WFS"] })], i.prototype, "operationalLayerType", void 0), t([r({ type: h, json: { name: "wfsInfo.maxFeatures", write: { ignoreOrigin: !0, isRequired: !0 } } })], i.prototype, "maxRecordCount", void 0), t([r({ type: h })], i.prototype, "maxPageCount", void 0), t([r({ type: h })], i.prototype, "maxTotalRecordCount", void 0), t([r({ type: [0], readOnly: !0, json: { origins: { "web-map": { write: { ignoreOrigin: !0, isRequired: !0 } } } } })], i.prototype, "mode", void 0), t([r({ type: String, json: { name: "wfsInfo.name", write: { ignoreOrigin: !0, isRequired: !0 } } })], i.prototype, "name", void 0), t([r({ type: String, json: { name: "wfsInfo.wfsNamespace", write: { ignoreOrigin: !0, isRequired: !0 } } })], i.prototype, "namespaceUri", void 0), t([r(ue)], i.prototype, "opacity", void 0), t([r(S.outFields)], i.prototype, "outFields", void 0), t([r({ readOnly: !0 })], i.prototype, "parsedUrl", null), t([r(ye)], i.prototype, "popupEnabled", void 0), t([r({ type: ce, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), t([r({ types: me, json: { origins: { service: { name: "drawingInfo.renderer" }, "web-scene": { types: he, name: "layerDefinition.drawingInfo.renderer", write: !0 } }, name: "layerDefinition.drawingInfo.renderer", write: { ignoreOrigin: !0 } } })], i.prototype, "renderer", null), t([r(fe)], i.prototype, "screenSizePerspectiveEnabled", void 0), t([r({ readOnly: !0 })], i.prototype, "source", void 0), t([r({ type: C, json: { name: "layerDefinition.spatialReference", write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "extent.spatialReference" } } } })], i.prototype, "spatialReference", void 0), t([r({ readOnly: !0, type: [h], json: { name: "wfsInfo.supportedSpatialReferences", write: { ignoreOrigin: !0, isRequired: !0 } } })], i.prototype, "spatialReferences", void 0), t([r({ type: Boolean, value: !1, json: { name: "wfsInfo.swapXY", write: { ignoreOrigin: !0, isRequired: !0 } } })], i.prototype, "swapXY", void 0), t([r({ json: { write: { ignoreOrigin: !0, isRequired: !0 }, origins: { service: { name: "name" } } } })], i.prototype, "title", void 0), t([r({ json: { read: !1 }, readOnly: !0 })], i.prototype, "type", void 0), t([r(ge)], i.prototype, "url", void 0), t([r({ type: String, readOnly: !0, json: { name: "wfsInfo.version", write: { ignoreOrigin: !0, isRequired: !0 } } })], i.prototype, "version", void 0), t([r()], i.prototype, "wfsCapabilities", null), i = x = t([I("esri.layers.WFSLayer")], i);
const $e = i;
export {
  $e as default
};
//# sourceMappingURL=WFSLayer-DfE3Tj_6.js.map