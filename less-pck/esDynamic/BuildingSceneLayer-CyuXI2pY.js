import { dG as de, O as t, P as r, dO as j, jg as ue, oK as _, Q as l, oL as ce, eP as Y, ma as ee, cU as he, em as te, D as F, iR as ge, a2 as re, f0 as fe, n1 as me, s as I, _ as ve, b8 as be, bv as se, jf as Se, iZ as we, iX as $e, W as Oe, dB as ie, eO as Fe, j0 as Ie, V as v, dn as je, oM as xe, bV as g, ad as u, oN as Le, dC as Te, dY as Be, dK as Ae, dL as Ee, dM as Pe, dN as _e, dZ as qe, d_ as Ne, bP as Re, b3 as Me, a1 as ke, j5 as Qe, oO as Ue, dQ as Ke, e4 as Ce, dX as De } from "./main-n1d2W0Ts.js";
import { s as Ve } from "./capabilities-xlBnI7Aq.js";
import { r as Ze, L as He, C as Z } from "./SceneService-B9sKm52f.js";
import { p as Je, a as Ge, y as Xe, m as We } from "./I3SLayerDefinitions-DcNr_0Ew.js";
import { $ as ze } from "./I3SUtil-CdyzHhWR.js";
import { n as Ye, p as et } from "./popupUtils-DssuW32c.js";
import { s as tt } from "./associatedFeatureServiceUtils-Ce0GpeV_.js";
import { $ as H, Z as rt, w as st } from "./elevationInfoUtils-qr7mcYhl.js";
let p = class extends de(ce) {
  constructor(s) {
    super(s), this.title = "", this.id = -1, this.modelName = null, this.isEmpty = null, this.legendEnabled = !0, this.visible = !0, this.opacity = 1;
  }
  readTitle(s, i) {
    return typeof i.alias == "string" ? i.alias : typeof i.name == "string" ? i.name : "";
  }
  readIdOnlyOnce(s) {
    return this.id !== -1 ? this.id : typeof s == "number" ? s : -1;
  }
};
t([r({ type: String, json: { origins: { "web-scene": { write: !0 }, "portal-item": { write: !0 } } } })], p.prototype, "title", void 0), t([j("service", "title", ["alias", "name"])], p.prototype, "readTitle", null), t([r()], p.prototype, "layer", void 0), t([r({ type: ue, readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0 } } })], p.prototype, "id", void 0), t([j("service", "id")], p.prototype, "readIdOnlyOnce", null), t([r(_(String))], p.prototype, "modelName", void 0), t([r(_(Boolean))], p.prototype, "isEmpty", void 0), t([r({ type: Boolean, nonNullable: !0 })], p.prototype, "legendEnabled", void 0), t([r({ type: Boolean, json: { name: "visibility", write: !0 } })], p.prototype, "visible", void 0), t([r({ type: Number, json: { write: !0 } })], p.prototype, "opacity", void 0), p = t([l("esri.layers.buildingSublayers.BuildingSublayer")], p);
const oe = p, J = Ie();
let o = class extends Y.LoadableMixin(ee(oe)) {
  constructor(e) {
    super(e), this.type = "building-component", this.nodePages = null, this.materialDefinitions = [], this.textureSetDefinitions = [], this.geometryDefinitions = [], this.indexInfo = null, this.serviceUpdateTimeStamp = null, this.store = null, this.attributeStorageInfo = [], this.fields = [], this.associatedLayer = null, this.outFields = null, this.listMode = "show", this.renderer = null, this.definitionExpression = null, this.popupEnabled = !0, this.popupTemplate = null, this.layerType = "3d-object";
  }
  get parsedUrl() {
    return this.layer ? { path: `${this.layer.parsedUrl?.path}/sublayers/${this.id}`, query: this.layer.parsedUrl?.query } : { path: "" };
  }
  get fieldsIndex() {
    return new he(this.fields);
  }
  readAssociatedLayer(e, s) {
    const i = this.layer.associatedFeatureServiceItem, a = s.associatedLayerID;
    return i != null && typeof a == "number" ? new te({ portalItem: i, customParameters: this.customParameters, layerId: a }) : null;
  }
  get objectIdField() {
    if (this.fields != null) {
      for (const e of this.fields) if (e.type === "oid") return e.name;
    }
    return null;
  }
  get displayField() {
    return this.associatedLayer != null ? this.associatedLayer.displayField : void 0;
  }
  get apiKey() {
    return this.layer.apiKey;
  }
  get customParameters() {
    return this.layer.customParameters;
  }
  get fullExtent() {
    return this.layer.fullExtent;
  }
  get spatialReference() {
    return this.layer.spatialReference;
  }
  get version() {
    return this.layer.version;
  }
  get elevationInfo() {
    return this.layer.elevationInfo;
  }
  get minScale() {
    return this.layer.minScale;
  }
  get maxScale() {
    return this.layer.maxScale;
  }
  get effectiveScaleRange() {
    return this.layer.effectiveScaleRange;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  load(e) {
    const s = e != null ? e.signal : null, i = this._fetchService(s).then(() => {
      this.indexInfo = Ze(this.parsedUrl.path, this.rootNode, this.nodePages, this.customParameters, this.apiKey, F.getLogger(this), s);
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    return ge(this, e);
  }
  async _fetchService(e) {
    const s = (await re(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e })).data;
    this.read(s, { origin: "service", url: this.parsedUrl });
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, s) {
    const i = this.getFeatureType(s?.feature)?.domains?.[e];
    return i && i.type !== "inherited" ? i : this.getField(e)?.domain ?? null;
  }
  getFeatureType(e) {
    return e && this.associatedLayer != null ? this.associatedLayer.getFeatureType(e) : null;
  }
  get types() {
    return this.associatedLayer != null ? this.associatedLayer.types ?? [] : [];
  }
  get typeIdField() {
    return this.associatedLayer != null ? this.associatedLayer.typeIdField : null;
  }
  get geometryType() {
    return this.layerType === "3d-object" ? "mesh" : "point";
  }
  get profile() {
    return this.layerType === "3d-object" ? "mesh-pyramids" : "points";
  }
  get capabilities() {
    const e = this.associatedLayer != null && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : Ve, { query: s, data: { supportsZ: i, supportsM: a, isVersioned: y } } = e;
    return { query: s, data: { supportsZ: i, supportsM: a, isVersioned: y } };
  }
  createQuery() {
    const e = new fe();
    return this.geometryType !== "mesh" && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
  }
  queryExtent(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryExtent(e || this.createQuery(), s));
  }
  queryFeatureCount(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryFeatureCount(e || this.createQuery(), s));
  }
  queryFeatures(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryFeatures(e || this.createQuery(), s)).then((i) => {
      if (i?.features) for (const a of i.features) a.layer = this.layer, a.sourceLayer = this;
      return i;
    });
  }
  queryObjectIds(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryObjectIds(e || this.createQuery(), s));
  }
  async queryCachedAttributes(e, s) {
    const i = me(this.fieldsIndex, await Ye(this, et(this)));
    return ze(this.parsedUrl.path, this.attributeStorageInfo, e, s, i, this.apiKey, this.customParameters);
  }
  async queryCachedFeature(e, s) {
    const i = await this.queryCachedAttributes(e, [s]);
    if (!i || i.length === 0) throw new I("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
    return new ve({ attributes: i[0], layer: this, sourceLayer: this });
  }
  getFieldUsageInfo(e) {
    return this.fieldsIndex.has(e) ? { supportsLabelingInfo: !1, supportsRenderer: !1, supportsPopupTemplate: !1, supportsLayerQuery: !1 } : { supportsLabelingInfo: !1, supportsRenderer: !0, supportsPopupTemplate: !0, supportsLayerQuery: this.associatedLayer != null };
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return e != null && e.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), this.associatedLayer == null) throw new I("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new I("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", { layer: this, error: e });
    }
    return this.associatedLayer;
  }
};
t([r({ readOnly: !0 })], o.prototype, "parsedUrl", null), t([r({ type: Je, readOnly: !0 })], o.prototype, "nodePages", void 0), t([r({ type: [Ge], readOnly: !0 })], o.prototype, "materialDefinitions", void 0), t([r({ type: [Xe], readOnly: !0 })], o.prototype, "textureSetDefinitions", void 0), t([r({ type: [We], readOnly: !0 })], o.prototype, "geometryDefinitions", void 0), t([r({ readOnly: !0 })], o.prototype, "serviceUpdateTimeStamp", void 0), t([r({ readOnly: !0 })], o.prototype, "store", void 0), t([r({ type: String, readOnly: !0, json: { read: { source: "store.rootNode" } } })], o.prototype, "rootNode", void 0), t([r({ readOnly: !0 })], o.prototype, "attributeStorageInfo", void 0), t([r(J.fields)], o.prototype, "fields", void 0), t([r({ readOnly: !0 })], o.prototype, "fieldsIndex", null), t([r({ readOnly: !0, type: te })], o.prototype, "associatedLayer", void 0), t([j("service", "associatedLayer", ["associatedLayerID"])], o.prototype, "readAssociatedLayer", null), t([r(J.outFields)], o.prototype, "outFields", void 0), t([r({ type: String, readOnly: !0 })], o.prototype, "objectIdField", null), t([r({ readOnly: !0, type: String, json: { read: !1 } })], o.prototype, "displayField", null), t([r({ readOnly: !0, type: String })], o.prototype, "apiKey", null), t([r({ readOnly: !0, type: String })], o.prototype, "customParameters", null), t([r({ readOnly: !0, type: be })], o.prototype, "fullExtent", null), t([r({ readOnly: !0, type: se })], o.prototype, "spatialReference", null), t([r({ readOnly: !0 })], o.prototype, "version", null), t([r({ readOnly: !0, type: Se })], o.prototype, "elevationInfo", null), t([r({ readOnly: !0, type: Number })], o.prototype, "minScale", null), t([r({ readOnly: !0, type: Number })], o.prototype, "maxScale", null), t([r({ readOnly: !0, type: Number })], o.prototype, "effectiveScaleRange", null), t([r({ type: ["hide", "show"], json: { write: !0 } })], o.prototype, "listMode", void 0), t([r({ types: we, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: !0 }, value: null })], o.prototype, "renderer", void 0), t([r({ type: String, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], o.prototype, "definitionExpression", void 0), t([r($e)], o.prototype, "popupEnabled", void 0), t([r({ type: Oe, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], o.prototype, "popupTemplate", void 0), t([r({ readOnly: !0, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: !1 } })], o.prototype, "normalReferenceFrame", void 0), t([r({ readOnly: !0, json: { read: !1 } })], o.prototype, "defaultPopupTemplate", null), t([r()], o.prototype, "types", null), t([r()], o.prototype, "typeIdField", null), t([r({ json: { write: !1 } }), ie(new Fe({ "3DObject": "3d-object", Point: "point" }))], o.prototype, "layerType", void 0), t([r()], o.prototype, "geometryType", null), t([r()], o.prototype, "profile", null), t([r({ readOnly: !0, json: { read: !1 } })], o.prototype, "capabilities", null), t([r({ readOnly: !0 })], o.prototype, "statisticsInfo", void 0), o = t([l("esri.layers.buildingSublayers.BuildingComponentSublayer")], o);
const q = o;
var N;
const G = { type: v, readOnly: !0, json: { origins: { service: { read: { source: "sublayers", reader: ae } } }, read: !1 } };
function ae(e, s, i) {
  if (e && Array.isArray(e)) return new v(e.map((a) => {
    const y = it(a);
    if (y) {
      const b = new y();
      return b.read(a, i), b;
    }
    return i?.messages && a && i.messages.push(new je("building-scene-layer:unsupported-sublayer-type", "Building scene sublayer of type '" + (a.type || "unknown") + "' are not supported", { definition: a, context: i })), null;
  }));
}
let h = N = class extends oe {
  constructor(e) {
    super(e), this.type = "building-group", this.listMode = "show", this.sublayers = null;
  }
  loadAll() {
    return xe(this, (e) => N.forEachSublayer(this.sublayers, (s) => {
      s.type !== "building-group" && e(s);
    }));
  }
};
function it(e) {
  return e.layerType === "group" ? h : q;
}
t([r({ type: ["hide", "show", "hide-children"], json: { write: !0 } })], h.prototype, "listMode", void 0), t([r(G)], h.prototype, "sublayers", void 0), h = N = t([l("esri.layers.buildingSublayers.BuildingGroupSublayer")], h), function(e) {
  function s(i, a) {
    i.forEach((y) => {
      a(y), y.type === "building-group" && s(y.sublayers, a);
    });
  }
  e.sublayersProperty = G, e.readSublayers = ae, e.forEachSublayer = s;
}(h || (h = {}));
const f = h;
let x = class extends g {
  constructor() {
    super(...arguments), this.type = null;
  }
};
t([r({ type: String, readOnly: !0, json: { write: !0 } })], x.prototype, "type", void 0), x = t([l("esri.layers.support.BuildingFilterAuthoringInfo")], x);
const ne = x;
var R;
let S = R = class extends g {
  constructor() {
    super(...arguments), this.filterType = null, this.filterValues = null;
  }
  clone() {
    return new R({ filterType: this.filterType, filterValues: u(this.filterValues) });
  }
};
t([r({ type: String, json: { write: !0 } })], S.prototype, "filterType", void 0), t([r({ type: [String], json: { write: !0 } })], S.prototype, "filterValues", void 0), S = R = t([l("esri.layers.support.BuildingFilterAuthoringInfoType")], S);
const ot = S;
var M;
const at = v.ofType(ot);
let L = M = class extends g {
  clone() {
    return new M({ filterTypes: u(this.filterTypes) });
  }
};
t([r({ type: at, json: { write: !0 } })], L.prototype, "filterTypes", void 0), L = M = t([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")], L);
const nt = L;
var k;
const lt = v.ofType(nt);
let w = k = class extends ne {
  constructor() {
    super(...arguments), this.type = "checkbox";
  }
  clone() {
    return new k({ filterBlocks: u(this.filterBlocks) });
  }
};
t([r({ type: ["checkbox"] })], w.prototype, "type", void 0), t([r({ type: lt, json: { write: !0 } })], w.prototype, "filterBlocks", void 0), w = k = t([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], w);
const X = w;
let T = class extends g {
};
t([r({ readOnly: !0, json: { read: !1 } })], T.prototype, "type", void 0), T = t([l("esri.layers.support.BuildingFilterMode")], T);
const E = T;
var Q;
let B = Q = class extends E {
  constructor() {
    super(...arguments), this.type = "solid";
  }
  clone() {
    return new Q();
  }
};
t([r({ type: ["solid"], readOnly: !0, json: { write: !0 } })], B.prototype, "type", void 0), B = Q = t([l("esri.layers.support.BuildingFilterModeSolid")], B);
const U = B;
var K;
let $ = K = class extends E {
  constructor() {
    super(...arguments), this.type = "wire-frame", this.edges = null;
  }
  clone() {
    return new K({ edges: u(this.edges) });
  }
};
t([ie({ wireFrame: "wire-frame" })], $.prototype, "type", void 0), t([r(Le)], $.prototype, "edges", void 0), $ = K = t([l("esri.layers.support.BuildingFilterModeWireFrame")], $);
const W = $;
var C;
let A = C = class extends E {
  constructor() {
    super(...arguments), this.type = "x-ray";
  }
  clone() {
    return new C();
  }
};
t([r({ type: ["x-ray"], readOnly: !0, json: { write: !0 } })], A.prototype, "type", void 0), A = C = t([l("esri.layers.support.BuildingFilterModeXRay")], A);
const z = A;
var D;
const pt = { nonNullable: !0, types: { key: "type", base: E, typeMap: { solid: U, "wire-frame": W, "x-ray": z } }, json: { read: (e) => {
  switch (e?.type) {
    case "solid":
      return U.fromJSON(e);
    case "wireFrame":
      return W.fromJSON(e);
    case "x-ray":
      return z.fromJSON(e);
    default:
      return;
  }
}, write: { enabled: !0, isRequired: !0 } } };
let m = D = class extends g {
  constructor() {
    super(...arguments), this.filterExpression = null, this.filterMode = new U(), this.title = "";
  }
  clone() {
    return new D({ filterExpression: this.filterExpression, filterMode: u(this.filterMode), title: this.title });
  }
};
t([r({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], m.prototype, "filterExpression", void 0), t([r(pt)], m.prototype, "filterMode", void 0), t([r({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], m.prototype, "title", void 0), m = D = t([l("esri.layers.support.BuildingFilterBlock")], m);
const yt = m;
var V;
const dt = v.ofType(yt);
let c = V = class extends g {
  constructor() {
    super(...arguments), this.description = null, this.filterBlocks = null, this.id = Te(), this.name = null;
  }
  clone() {
    return new V({ description: this.description, filterBlocks: u(this.filterBlocks), id: this.id, name: this.name, filterAuthoringInfo: u(this.filterAuthoringInfo) });
  }
};
t([r({ type: String, json: { write: !0 } })], c.prototype, "description", void 0), t([r({ type: dt, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "filterBlocks", void 0), t([r({ types: { key: "type", base: ne, typeMap: { checkbox: X } }, json: { read: (e) => e?.type === "checkbox" ? X.fromJSON(e) : null, write: !0 } })], c.prototype, "filterAuthoringInfo", void 0), t([r({ type: String, constructOnly: !0, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "id", void 0), t([r({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "name", void 0), c = V = t([l("esri.layers.support.BuildingFilter")], c);
const ut = c;
let d = class extends g {
  constructor() {
    super(...arguments), this.fieldName = null, this.modelName = null, this.label = null, this.min = null, this.max = null, this.mostFrequentValues = null, this.subLayerIds = null;
  }
};
t([r({ type: String })], d.prototype, "fieldName", void 0), t([r({ type: String })], d.prototype, "modelName", void 0), t([r({ type: String })], d.prototype, "label", void 0), t([r({ type: Number })], d.prototype, "min", void 0), t([r({ type: Number })], d.prototype, "max", void 0), t([r({ json: { read: (e) => Array.isArray(e) && (e.every((s) => typeof s == "string") || e.every((s) => typeof s == "number")) ? e.slice() : null } })], d.prototype, "mostFrequentValues", void 0), t([r({ type: [Number] })], d.prototype, "subLayerIds", void 0), d = t([l("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")], d);
let O = class extends Y.LoadableMixin(ee(g)) {
  constructor() {
    super(...arguments), this.url = null;
  }
  get fields() {
    return this.loaded || this.loadStatus === "loading" ? this._get("fields") : (F.getLogger(this).error("building summary statistics are not loaded"), null);
  }
  load(e) {
    const s = e != null ? e.signal : null;
    return this.addResolvingPromise(this._fetchService(s)), Promise.resolve(this);
  }
  async _fetchService(e) {
    const s = (await re(this.url, { query: { f: "json" }, responseType: "json", signal: e })).data;
    this.read(s, { origin: "service" });
  }
};
t([r({ constructOnly: !0, type: String })], O.prototype, "url", void 0), t([r({ readOnly: !0, type: [d], json: { read: { source: "summary" } } })], O.prototype, "fields", null), O = t([l("esri.layers.support.BuildingSummaryStatistics")], O);
const le = O, pe = v.ofType(ut), ye = u(f.sublayersProperty), P = ye.json?.origins;
P && (P["web-scene"] = { type: [q], write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } }, P["portal-item"] = { type: [q], write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } });
let n = class extends He(Be(Ae(Ee(Pe(_e(qe(Ne(De)))))))) {
  constructor(e) {
    super(e), this.operationalLayerType = "BuildingSceneLayer", this.allSublayers = new Re({ getCollections: () => [this.sublayers], getChildrenFunction: (s) => s.type === "building-group" ? s.sublayers : null }), this.sublayers = null, this._sublayerOverrides = null, this.filters = new pe(), this.activeFilterId = null, this.summaryStatistics = null, this.outFields = null, this.legendEnabled = !0, this.type = "building-scene";
  }
  normalizeCtorArgs(e) {
    return typeof e == "string" ? { url: e } : e ?? {};
  }
  destroy() {
    this.allSublayers.destroy();
  }
  readSublayers(e, s, i) {
    const a = f.readSublayers(e, s, i);
    return f.forEachSublayer(a, (y) => y.layer = this), this._sublayerOverrides && (this.applySublayerOverrides(a, this._sublayerOverrides), this._sublayerOverrides = null), a;
  }
  applySublayerOverrides(e, { overrides: s, context: i }) {
    f.forEachSublayer(e, (a) => a.read(s.get(a.id), i));
  }
  readSublayerOverrides(e, s) {
    const i = /* @__PURE__ */ new Map();
    for (const a of e) a != null && typeof a == "object" && typeof a.id == "number" ? i.set(a.id, a) : s.messages?.push(new I("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", { value: a }));
    return { overrides: i, context: s };
  }
  writeSublayerOverrides(e, s, i) {
    const a = [];
    f.forEachSublayer(this.sublayers, (y) => {
      const b = y.write({}, i);
      Object.keys(b).length > 1 && a.push(b);
    }), a.length > 0 && (s.sublayers = a);
  }
  writeUnappliedOverrides(e, s) {
    s.sublayers = [], e.overrides.forEach((i) => {
      s.sublayers.push(u(i));
    });
  }
  write(e, s) {
    return e = super.write(e, s), !s || s.origin !== "web-scene" && s.origin !== "portal-item" || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e, s) : this._sublayerOverrides && this.writeUnappliedOverrides(this._sublayerOverrides, e)), e;
  }
  read(e, s) {
    if (super.read(e, s), s && (s.origin === "web-scene" || s.origin === "portal-item") && e != null && Array.isArray(e.sublayers)) {
      const i = this.readSublayerOverrides(e.sublayers, s);
      this.sublayers ? this.applySublayerOverrides(this.sublayers, i) : this._sublayerOverrides = i;
    }
  }
  readSummaryStatistics(e, s) {
    if (typeof s.statisticsHRef == "string") {
      const i = Me(this.parsedUrl?.path, s.statisticsHRef);
      return new le({ url: i });
    }
    return null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  load(e) {
    const s = e != null ? e.signal : null, i = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(ke).then(() => this._fetchService(s)).then(() => this._fetchAssociatedFeatureService(s));
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  loadAll() {
    return Qe(this, (e) => {
      f.forEachSublayer(this.sublayers, (s) => {
        s.type !== "building-group" && e(s);
      }), this.summaryStatistics && e(this.summaryStatistics);
    });
  }
  async saveAs(e, s) {
    return this._debouncedSaveOperations(Z.SAVE_AS, { ...s, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" };
    return this._debouncedSaveOperations(Z.SAVE, e);
  }
  validateLayer(e) {
    if (!e.layerType || e.layerType !== "Building") throw new I("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", { layerType: e.layerType });
  }
  _getTypeKeywords() {
    return ["Building"];
  }
  async _fetchAssociatedFeatureService(e) {
    try {
      const { portalItem: s } = await tt(`${this.url}/layers/${this.layerId}`, { sceneLayerItem: this.portalItem, customParameters: this.customParameters, apiKey: this.apiKey, signal: e });
      this.associatedFeatureServiceItem = s;
    } catch (s) {
      F.getLogger(this).warn("Associated feature service item could not be loaded", s);
    }
  }
  _validateElevationInfo() {
    const e = this.elevationInfo, s = "Building scene layers";
    H(F.getLogger(this), rt(s, "absolute-height", e)), H(F.getLogger(this), st(s, e));
  }
};
t([r({ type: ["BuildingSceneLayer"] })], n.prototype, "operationalLayerType", void 0), t([r({ readOnly: !0 })], n.prototype, "allSublayers", void 0), t([r(ye)], n.prototype, "sublayers", void 0), t([j("service", "sublayers")], n.prototype, "readSublayers", null), t([r({ type: pe, nonNullable: !0, json: { write: !0 } })], n.prototype, "filters", void 0), t([r({ type: String, json: { write: !0 } })], n.prototype, "activeFilterId", void 0), t([r({ readOnly: !0, type: le })], n.prototype, "summaryStatistics", void 0), t([j("summaryStatistics", ["statisticsHRef"])], n.prototype, "readSummaryStatistics", null), t([r({ type: [String], json: { read: !1 } })], n.prototype, "outFields", void 0), t([r(Ue)], n.prototype, "fullExtent", void 0), t([r(Ke)], n.prototype, "legendEnabled", void 0), t([r({ type: ["show", "hide", "hide-children"] })], n.prototype, "listMode", void 0), t([r(_(se))], n.prototype, "spatialReference", void 0), t([r(Ce)], n.prototype, "elevationInfo", null), t([r({ json: { read: !1 }, readOnly: !0 })], n.prototype, "type", void 0), t([r()], n.prototype, "associatedFeatureServiceItem", void 0), n = t([l("esri.layers.BuildingSceneLayer")], n);
const Ot = n;
export {
  Ot as default
};
//# sourceMappingURL=BuildingSceneLayer-CyuXI2pY.js.map
