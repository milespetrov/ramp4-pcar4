import { dM as b, dI as F, dN as I, dy as B, kB as N, V as C, S as k, kC as Q, kD as U, J as T, c4 as V, O as t, P as i, jg as D, iW as P, Q as O, kE as M, dX as c, iN as Z, iP as S, iR as A, ad as g, e4 as G, jl as J, iU as z, iV as K, iT as H, dQ as W, jh as Y, ji as X, iX as ee, W as te, iY as re, iZ as ie, ei as ne, dW as oe, Y as ae, js as se, jt as le, iL as de, iO as pe, dJ as ye, dY as ue, dK as he, dL as ce, dZ as fe, d_ as me, a1 as ge, s as m, eR as ve, I as we, b3 as be, jy as Fe, f0 as h, kF as Ie, jJ as Oe, jI as _e, a2 as je, kG as Te, C as L, kH as E, a0 as Se, dP as Le, jc as Ee, j0 as xe } from "./main-n1d2W0Ts.js";
import { T as x } from "./utils-qMIyw8_M.js";
import $e from "./FeatureLayerSource-DCYUVGoh.js";
import { a as Ce } from "./fetchService-RtHnGpiQ.js";
let p = class extends b(F(I(c))) {
  constructor(e) {
    super(e), this._layerCache = new B(20, (r) => r.destroy()), this._oidToReference = new N(), this._layerToReference = /* @__PURE__ */ new Map(), this.layers = new C(), this.maximumVisibleSublayers = 10, this.opacity = 1, this.parent = null, this.persistenceEnabled = !0, this.title = "Layers in view", this.type = "catalog-dynamic-group", this.visible = !0;
  }
  initialize() {
    this.addHandles([this.layers.on("after-add", ({ item: e }) => {
      e.parent = this;
    }), this.layers.on("after-remove", ({ item: e }) => {
      e.parent = null;
    }), k(() => this._orderBy, () => {
      this._updateLayerSortValues(), this._sortAllLayers();
    })]);
  }
  load(e) {
    return this.addResolvingPromise(this.parent.load()), Promise.resolve(this);
  }
  destroy() {
    this._layerCache.destroy(), this._oidToReference.clear(), this._layerToReference.clear();
  }
  get _orderBy() {
    return this.parent ? this.parent.orderBy?.find((e) => !e.valueExpression && e.field) ?? new Q({ field: this.parent.objectIdField }) : null;
  }
  get _referenceComparator() {
    const e = this._orderBy;
    if (!this.parent || !e) return () => 0;
    const r = this.parent.fieldsIndex.get(e.field), a = x(r?.toJSON().type, e.order === "descending"), o = x("esriFieldTypeOID", e.order === "descending");
    return (l, d) => a(d.sortValue, l.sortValue) || o(d.objectId, l.objectId);
  }
  get fullExtent() {
    return this.parent?.fullExtent ?? null;
  }
  get updating() {
    return U(this._oidToReference, (e) => e.pending != null);
  }
  acquireLayer(e) {
    if (this.destroyed) return T();
    const r = this._getLayerReference(e);
    return r.count++, T(() => {
      r.count--, r.count || this._destroyLayerReference(r);
    });
  }
  _getLayerReference(e) {
    const r = e.getObjectId();
    return V(this._oidToReference, r, () => {
      const a = e.getObjectId(), o = `${a}`, l = e.getAttribute(this.parent.itemSourceField), d = new Ve(e, a, l), y = this._layerCache.pop(o);
      return y ? (this._addLayer(d, y), d) : (d.pending = this.parent.createLayerFromFootprint(e).then((u) => {
        d.count ? this._addLayer(d, u) : (this.destroyed || this._layerCache.get(o) || this._layerCache.put(o, u), d.layer = null);
      }).catch(() => {
      }).finally(() => {
        d.pending = null;
      }), d);
    });
  }
  _destroyLayerReference(e) {
    e.layer && (this._layerToReference.delete(e.layer), this.layers.remove(e.layer), this.destroyed ? e.layer.destroy() : this._layerCache.put(`${e.objectId}`, e.layer), e.layer = null), this._oidToReference.delete(e.objectId);
  }
  _addLayer(e, r) {
    e.layer = r, r.persistenceEnabled = !1, this._layerToReference.set(r, e), this._updateLayerSortValue(e), this.layers.add(r), this._sortAllLayers();
  }
  _updateLayerSortValues() {
    for (const e of this._layerToReference.values()) this._updateLayerSortValue(e);
  }
  _updateLayerSortValue(e) {
    this._orderBy && (e.sortValue = e.footprint.getAttribute(this._orderBy.field));
  }
  _sortAllLayers() {
    this.layers.sort((e, r) => this._referenceComparator(this._layerToReference.get(e), this._layerToReference.get(r)));
  }
};
t([i()], p.prototype, "_orderBy", null), t([i({ readOnly: !0 })], p.prototype, "_referenceComparator", null), t([i({ type: ["show", "hide", "hide-children"], json: { write: !0 } })], p.prototype, "listMode", void 0), t([i({ readOnly: !0 })], p.prototype, "fullExtent", null), t([i({ type: String, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], p.prototype, "id", void 0), t([i({ readOnly: !0 })], p.prototype, "layers", void 0), t([i({ type: D, range: { min: 0, max: 50 }, json: { write: !0, default: 10 } })], p.prototype, "maximumVisibleSublayers", void 0), t([i(P)], p.prototype, "opacity", void 0), t([i({ clonable: !1 })], p.prototype, "parent", void 0), t([i({ type: String, nonNullable: !0, json: { write: { ignoreOrigin: !0, isRequired: !0 } } })], p.prototype, "title", void 0), t([i({ json: { read: !1 } })], p.prototype, "type", void 0), t([i({ readOnly: !0 })], p.prototype, "updating", null), t([i({ type: Boolean, json: { name: "visibility", write: !0 } })], p.prototype, "visible", void 0), p = t([O("esri.layers.catalog.CatalogDynamicGroupLayer")], p);
const R = p;
class Ve {
  constructor(r, a, o) {
    this.footprint = r, this.objectId = a, this.itemSource = o, this.count = 0, this.layer = null, this.sortValue = void 0, this._pending = M(null);
  }
  get pending() {
    return this._pending.value;
  }
  set pending(r) {
    this._pending.value = r;
  }
}
function Pe() {
  const e = new oe({ style: "solid", color: [0, 0, 0, 0], outline: { style: "solid", color: [96, 96, 96, 0.75], width: 0.75 } });
  return new ae({ symbol: e });
}
let n = class extends b(Z(F(I(c)))) {
  constructor(e) {
    super(e), this.charts = null, this.editingEnabled = !0, this.elevationInfo = null, this.formTemplate = null, this.labelingInfo = null, this.labelsVisible = !0, this.legendEnabled = !0, this.maxScale = 0, this.minScale = 0, this.opacity = 1, this.parent = null, this.persistenceEnabled = !0, this.popupEnabled = !0, this.popupTemplate = null, this.title = "Footprints", this.type = "catalog-footprint", this.visible = !0;
  }
  load(e) {
    return this.addResolvingPromise(this._doLoad(e)), Promise.resolve(this);
  }
  async _doLoad(e) {
    await this.parent.load(e), S(this.renderer, this.fieldsIndex), this.addHandles([this.parent.on("apply-edits", (r) => this.emit("apply-edits", r)), this.parent.on("edits", (r) => this.emit("edits", r)), this.parent.on("refresh", (r) => this.emit("refresh", r))]);
  }
  get apiKey() {
    return this.parent?.apiKey;
  }
  get capabilities() {
    return this.parent?.capabilities;
  }
  get customParameters() {
    return this.parent?.customParameters;
  }
  get dateFieldsTimeZone() {
    return this.parent?.dateFieldsTimeZone ?? null;
  }
  get datesInUnknownTimezone() {
    return this.parent?.datesInUnknownTimezone ?? !1;
  }
  get definitionExpression() {
    return this.parent?.definitionExpression;
  }
  get editingInfo() {
    return this.parent?.editingInfo;
  }
  get effectiveCapabilities() {
    return this.parent?.effectiveCapabilities;
  }
  get createQueryVersion() {
    return this.parent?.createQueryVersion;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get displayField() {
    return this.parent?.displayField;
  }
  get effectiveEditingEnabled() {
    return !1;
  }
  get fields() {
    return this.parent?.fields;
  }
  get fieldsIndex() {
    return this.parent?.fieldsIndex;
  }
  get fullExtent() {
    return this.parent?.fullExtent;
  }
  get geometryFieldsInfo() {
    return this.parent?.geometryFieldsInfo;
  }
  get geometryType() {
    return this.parent?.geometryType;
  }
  get globalIdField() {
    return this.parent?.globalIdField;
  }
  get hasM() {
    return this.parent?.hasM ?? !1;
  }
  get hasZ() {
    return this.parent?.hasZ ?? !1;
  }
  get objectIdField() {
    return this.parent?.objectIdField;
  }
  get orderBy() {
    return this.parent?.orderBy ?? null;
  }
  get outFields() {
    return this.parent?.outFields;
  }
  get parsedUrl() {
    return this.parent?.parsedUrl ?? null;
  }
  get preferredTimeZone() {
    return this.parent?.preferredTimeZone ?? null;
  }
  set renderer(e) {
    S(e, this.fieldsIndex), this._set("renderer", e);
  }
  get renderer() {
    return this._isOverridden("renderer") ? this._get("renderer") : Pe();
  }
  get returnM() {
    return this.parent?.returnM;
  }
  get returnZ() {
    return this.parent?.returnZ;
  }
  get source() {
    return this.parent?.source;
  }
  get timeExtent() {
    return this.parent?.timeExtent;
  }
  get timeInfo() {
    return this.parent?.timeInfo;
  }
  get timeOffset() {
    return this.parent?.timeOffset;
  }
  get typeIdField() {
    return this.parent?.typeIdField;
  }
  get types() {
    return this.parent?.types;
  }
  get useViewTime() {
    return this.parent?.useViewTime ?? !0;
  }
  get version() {
    return this.parent?.version;
  }
  async applyEdits(e, r) {
    return await this.load(), this.parent.applyEdits(e, r);
  }
  createPopupTemplate(e) {
    const r = { fields: this.fields, objectIdField: this.objectIdField, title: this.title };
    return A(r, e);
  }
  createQuery() {
    return this.parent?.createQuery();
  }
  getField(e) {
    return this.parent?.getField(e);
  }
  getFieldDomain(e, r) {
    return this.parent?.getFieldDomain(e, r);
  }
  async queryExtent(e, r) {
    return await this.load(), this.parent.queryExtent(e, r);
  }
  async queryFeatures(e, r) {
    return await this.load(), this.parent.queryFeatures(e, r);
  }
  async queryFeatureCount(e, r) {
    return await this.load(), this.parent.queryFeatureCount(e, r);
  }
  async queryObjectIds(e, r) {
    return await this.load(), this.parent.queryObjectIds(e, r);
  }
};
t([i({ readOnly: !0 })], n.prototype, "apiKey", null), t([i({ readOnly: !0 })], n.prototype, "capabilities", null), t([i({ readOnly: !0 })], n.prototype, "customParameters", null), t([i()], n.prototype, "dateFieldsTimeZone", null), t([i({ readOnly: !0 })], n.prototype, "datesInUnknownTimezone", null), t([i({ readOnly: !0 })], n.prototype, "definitionExpression", null), t([i({ readOnly: !0 })], n.prototype, "editingInfo", null), t([i({ readOnly: !0 })], n.prototype, "effectiveCapabilities", null), t([i({ json: { origins: { "web-scene": { write: !1 } }, write: !0 } })], n.prototype, "charts", void 0), t([i({ readOnly: !0 })], n.prototype, "createQueryVersion", null), t([i({ readOnly: !0 })], n.prototype, "defaultPopupTemplate", null), t([i()], n.prototype, "displayField", null), t([i({ type: Boolean, nonNullable: !0, json: { name: "enableEditing", write: !0, origins: { "web-scene": { read: !1, write: !1 } } } })], n.prototype, "editingEnabled", void 0), t([i({ readOnly: !0 })], n.prototype, "effectiveEditingEnabled", null), t([i((() => {
  const e = g(G);
  return e.json.origins["web-map"] = { read: !1, write: !1 }, e;
})())], n.prototype, "elevationInfo", void 0), t([i({ readOnly: !0 })], n.prototype, "fields", null), t([i({ readOnly: !0 })], n.prototype, "fieldsIndex", null), t([i({ type: J, json: { name: "formInfo", write: !0, origins: { "web-scene": { read: !1, write: !1 } } } })], n.prototype, "formTemplate", void 0), t([i({ readOnly: !0 })], n.prototype, "fullExtent", null), t([i({ readOnly: !0 })], n.prototype, "geometryFieldsInfo", null), t([i({ readOnly: !0 })], n.prototype, "geometryType", null), t([i({ readOnly: !0 })], n.prototype, "globalIdField", null), t([i({ readOnly: !0 })], n.prototype, "hasM", null), t([i({ readOnly: !0 })], n.prototype, "hasZ", null), t([i({ type: String, json: { origins: { service: { read: !1 }, "portal-item": { read: !1 } }, write: { ignoreOrigin: !0 } } })], n.prototype, "id", void 0), t([i({ type: [z], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: K, write: !0 } })], n.prototype, "labelingInfo", void 0), t([i(H)], n.prototype, "labelsVisible", void 0), t([i(W)], n.prototype, "legendEnabled", void 0), t([i({ type: ["show", "hide"], json: { write: !0 } })], n.prototype, "listMode", void 0), t([i((() => {
  const e = g(Y);
  return e.json.origins.service.read = !1, e;
})())], n.prototype, "maxScale", void 0), t([i((() => {
  const e = g(X);
  return e.json.origins.service.read = !1, e;
})())], n.prototype, "minScale", void 0), t([i({ readOnly: !0 })], n.prototype, "objectIdField", null), t([i(P)], n.prototype, "opacity", void 0), t([i({ readOnly: !0 })], n.prototype, "orderBy", null), t([i({ readOnly: !0 })], n.prototype, "outFields", null), t([i({ clonable: !1 })], n.prototype, "parent", void 0), t([i({ readOnly: !0 })], n.prototype, "parsedUrl", null), t([i(ee)], n.prototype, "popupEnabled", void 0), t([i({ type: te, json: { name: "popupInfo", write: !0 } })], n.prototype, "popupTemplate", void 0), t([i({ readOnly: !0 })], n.prototype, "preferredTimeZone", null), t([i({ types: re, json: { origins: { "web-scene": { types: ie } }, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy(e, r) {
  return { ignoreOrigin: this.originIdOf(r) < ne.PORTAL_ITEM };
} } } })], n.prototype, "renderer", null), t([i({ readOnly: !0 })], n.prototype, "returnM", null), t([i({ readOnly: !0 })], n.prototype, "returnZ", null), t([i({ readOnly: !0 })], n.prototype, "source", null), t([i({ readOnly: !0 })], n.prototype, "timeExtent", null), t([i({ readOnly: !0 })], n.prototype, "timeInfo", null), t([i({ readOnly: !0 })], n.prototype, "timeOffset", null), t([i({ type: String, nonNullable: !0, json: { write: { ignoreOrigin: !0, isRequired: !0 } } })], n.prototype, "title", void 0), t([i({ json: { read: !1 } })], n.prototype, "type", void 0), t([i({ readOnly: !0 })], n.prototype, "typeIdField", null), t([i({ readOnly: !0 })], n.prototype, "types", null), t([i({ readOnly: !0 })], n.prototype, "useViewTime", null), t([i({ type: Boolean, json: { name: "visibility", write: !0 } })], n.prototype, "visible", void 0), n = t([O("esri.layers.catalog.CatalogFootprintLayer")], n);
const q = n, v = xe();
function Re(e) {
  return typeof e == "object" && e != null && "itemId" in e && "portalUrl" in e;
}
function qe(e) {
  return typeof e == "object" && e != null && "url" in e;
}
function Be(e) {
  if (e == null) return !0;
  const r = Object.keys(e);
  return !r.length || r.length === 1 && r[0] === "id";
}
function $(e, r, a, o) {
  const l = e.write({}, o);
  Be(l) || (r[a] = l);
}
let s = class extends se(le(F(de(pe(b(ye(ue(he(ce(I(fe(me(c))))))))))))) {
  constructor(e) {
    super(e), this._portals = /* @__PURE__ */ new Map(), this._layerToFootprint = /* @__PURE__ */ new WeakMap(), this.drawOrderField = "cd_draworder", this.dynamicGroupLayer = new R({ parent: this }), this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.floorInfo = null, this.footprintLayer = new q({ parent: this }), this.itemNameField = "cd_itemname", this.itemSourceField = "cd_itemsource", this.itemTypeField = "cd_itemtype", this.layers = new C([this.dynamicGroupLayer, this.footprintLayer]), this.maxScaleField = "cd_maxscale", this.minScaleField = "cd_minscale", this.orderBy = null, this.outFields = null, this.supportedSourceTypes = /* @__PURE__ */ new Set(["Catalog Layer"]), this.source = new $e({ layer: this, supportedSourceTypes: this.supportedSourceTypes }), this.type = "catalog", this.typeIdField = null, this.types = null;
  }
  load(e) {
    const r = e != null ? e.signal : null, a = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e).catch(ge).then(async () => {
      const { url: o, source: l, portalItem: d } = this;
      if (!o) throw new m("catalog-layer:missing-url", "Catalog layer must be created with a url");
      if (this.layerId == null) {
        const u = await this._fetchFirstValidLayerId(r);
        if (u == null) throw new m("catalog-layer:missing-layerId", "There is no Catalog Layer in the service", { service: o });
        this.layerId = u;
      }
      await l.load({ signal: r });
      const { sourceJSON: y } = l;
      y && (this.sourceJSON = y, this.read(y, { origin: "service", portalItem: d, portal: d?.portal, url: this.parsedUrl }));
    }).then(() => {
      const o = [this.itemNameField, this.itemSourceField, this.itemTypeField, this.minScaleField, this.maxScaleField], l = o.filter((d) => !this.fieldsIndex.has(d));
      if (l.length) throw new m("catalog-layer:missing-fields", "There are missing fields to operate properly", { requiredFields: o, missingFields: l });
    }).then(() => ve(this, "load", e));
    return this.addResolvingPromise(a), Promise.resolve(this);
  }
  destroy() {
    this.footprintLayer.destroy(), this.dynamicGroupLayer.destroy();
    for (const e of this._portals.values()) e.destroy();
    this._portals.clear();
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get editingEnabled() {
    return this.loaded && this.capabilities != null && this.capabilities.operations.supportsEditing && this.userHasEditingPrivileges;
  }
  get effectiveEditingEnabled() {
    return !1;
  }
  get parsedUrl() {
    const e = we(this.url);
    return e != null && this.layerId != null && (e.path = be(e.path, this.layerId.toString())), e;
  }
  async applyEdits(e, r) {
    return Fe(this, e, r);
  }
  on(e, r) {
    return super.on(e, r);
  }
  async createLayerFromFootprint(e) {
    const r = await this._createLayer(e);
    return this._configureLayer(r, e), this._layerToFootprint.set(r, e), r;
  }
  createFootprintFromLayer(e) {
    return this._layerToFootprint.get(e)?.clone();
  }
  createQuery() {
    const e = new h(), r = this.capabilities?.query;
    e.returnGeometry = !0, r && (e.compactGeometryEnabled = r.supportsCompactGeometry, e.defaultSpatialReferenceEnabled = r.supportsDefaultSpatialReference), e.outFields = ["*"];
    const { timeOffset: a, timeExtent: o } = this;
    return e.timeExtent = a != null && o != null ? o.offset(-a.value, a.unit) : o || null, e.where = this.definitionExpression || "1=1", e;
  }
  getFeatureType(e) {
    return Ie(this.types, this.typeIdField, e);
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, r) {
    const a = r?.feature, o = this.getFeatureType(a);
    if (o) {
      const l = o.domains && o.domains[e];
      if (l && l.type !== "inherited") return l;
    }
    return this.getField(e)?.domain;
  }
  async hasDataChanged() {
    return Oe(this);
  }
  async queryFeatures(e, r) {
    const a = await this.load(), o = await a.source.queryFeatures(h.from(e) ?? a.createQuery(), r);
    if (o?.features) for (const l of o.features) l.layer = l.sourceLayer = a.footprintLayer;
    return o;
  }
  async queryObjectIds(e, r) {
    return (await this.load()).source.queryObjectIds(h.from(e) ?? this.createQuery(), r);
  }
  async queryFeatureCount(e, r) {
    return (await this.load()).source.queryFeatureCount(h.from(e) ?? this.createQuery(), r);
  }
  async queryExtent(e, r) {
    return (await this.load()).source.queryExtent(h.from(e) ?? this.createQuery(), r);
  }
  serviceSupportsSpatialReference(e) {
    return this.loaded && _e(this, e);
  }
  read(e, r) {
    if (super.read(e, r), e) {
      const { footprintLayer: a, dynamicGroupLayer: o } = e;
      a && this.footprintLayer.read(a, r), o && this.dynamicGroupLayer.read(o, r);
    }
  }
  async _fetchFirstValidLayerId(e) {
    const { data: r } = await je(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e });
    if (Array.isArray(r?.layers)) return r.layers.find(({ type: a }) => this.supportedSourceTypes.has(a))?.id;
  }
  async _createLayer(e) {
    const r = e.getAttribute(this.itemSourceField);
    if (!r) throw new m("catalog-layer:item-source-missing", `The footprint is missing the "${this.itemSourceField}" attribute`);
    const a = JSON.parse(r);
    if (Re(a)) {
      const { itemId: o, portalUrl: l } = a, d = Te(l), y = this.portalItem?.portal, u = L.getDefault();
      let f, _ = !0;
      y && E(l, y.url) ? f = y : E(l, u.url) ? f = u : (f = V(this._portals, d, () => new L({ url: d })), _ = !1);
      const j = await c.fromPortalItem(new Se({ id: o, portal: f }));
      return _ || await w(j), j;
    }
    return qe(a) ? c.fromArcGISServerUrl({ url: a.url }) : new (await Ce.UnsupportedLayer())();
  }
  _configureLayer(e, r) {
    const a = r.getAttribute(this.itemNameField);
    a && (e.title = a);
    const o = r.getAttribute(this.maxScaleField);
    o != null && "maxScale" in e && (e.maxScale = o);
    const l = r.getAttribute(this.minScaleField);
    l != null && "minScale" in e && (e.minScale = l);
  }
};
async function w(e) {
  if ("portalItem" in e && e.portalItem) {
    try {
      await e.load();
    } catch {
    }
    e.portalItem = null, e.type === "group" && await Promise.allSettled([...e.layers.map((r) => w(r)), ...e.tables.map((r) => w(r))]);
  }
}
t([i({ readOnly: !0 })], s.prototype, "createQueryVersion", null), t([i({ readOnly: !0 })], s.prototype, "drawOrderField", void 0), t([i({ type: R, readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0, writer: $ } } })], s.prototype, "dynamicGroupLayer", void 0), t([i({ readOnly: !0 })], s.prototype, "editingEnabled", null), t([i({ readOnly: !0 })], s.prototype, "effectiveEditingEnabled", null), t([i({ json: { origins: { "web-scene": { name: "layerDefinition.elevationInfo", read: !1, write: !1 } } } })], s.prototype, "elevationInfo", void 0), t([i({ ...v.fields, readOnly: !0, json: { origins: { service: { read: !0 } }, read: !1 } })], s.prototype, "fields", void 0), t([i(v.fieldsIndex)], s.prototype, "fieldsIndex", void 0), t([i({ json: { origins: { "web-scene": { name: "layerDefinition.floorInfo", read: !1, write: !1 } } } })], s.prototype, "floorInfo", void 0), t([i({ type: q, readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0, writer: $ } } })], s.prototype, "footprintLayer", void 0), t([i(Le)], s.prototype, "id", void 0), t([i({ readOnly: !0 })], s.prototype, "itemNameField", void 0), t([i({ readOnly: !0 })], s.prototype, "itemSourceField", void 0), t([i({ readOnly: !0 })], s.prototype, "itemTypeField", void 0), t([i({ readOnly: !0 })], s.prototype, "layers", void 0), t([i({ type: ["show", "hide", "hide-children"] })], s.prototype, "listMode", void 0), t([i({ readOnly: !0 })], s.prototype, "maxScaleField", void 0), t([i({ readOnly: !0 })], s.prototype, "minScaleField", void 0), t([i({ value: "CatalogLayer", type: ["CatalogLayer"] })], s.prototype, "operationalLayerType", void 0), t([i({ json: { origins: { "web-scene": { name: "layerDefinition.orderBy", write: !0, read: !0 } } } })], s.prototype, "orderBy", void 0), t([i(v.outFields)], s.prototype, "outFields", void 0), t([i({ readOnly: !0 })], s.prototype, "parsedUrl", null), t([i({ readOnly: !0 })], s.prototype, "source", void 0), t([i({ json: { read: !1 } })], s.prototype, "type", void 0), t([i({ type: String })], s.prototype, "typeIdField", void 0), t([i({ type: [Ee] })], s.prototype, "types", void 0), s = t([O("esri.layers.CatalogLayer")], s);
const De = s;
export {
  De as default
};
//# sourceMappingURL=CatalogLayer-CNSHV3pa.js.map
