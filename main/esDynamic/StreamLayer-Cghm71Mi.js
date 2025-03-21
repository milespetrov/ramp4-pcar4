import { O as t, P as s, Q as S, bX as F, gv as P, gw as k, e3 as A, gx as O, e7 as E, e4 as _, ej as D, e5 as U, e6 as C, e8 as N, ek as L, bW as V, bx as I, f1 as G, s as p, _ as J, gy as f, gY as z, D as M, gZ as W, dT as y, f2 as q, gA as Q, fn as Y, gR as c, $ as Z, dS as H, gz as X, t as B, g_ as K, b8 as ee, gC as te, gD as ie, gE as se, eb as re, g$ as g, h0 as oe, h1 as ne, gG as ae, W as le, gH as pe, gI as de, e9 as v, aa as ce, gJ as ue, ec as he, gL as ye, ei as me } from "./main-Bnvk3STL.js";
var m;
let a = m = class extends F {
  constructor() {
    super(...arguments), this.age = null, this.ageReceived = null, this.displayCount = null, this.maxObservations = 1;
  }
  clone() {
    return new m({ age: this.age, ageReceived: this.ageReceived, displayCount: this.displayCount, maxObservations: this.maxObservations });
  }
};
t([s({ type: Number, json: { write: !0 } })], a.prototype, "age", void 0), t([s({ type: Number, json: { write: !0 } })], a.prototype, "ageReceived", void 0), t([s({ type: Number, json: { write: !0 } })], a.prototype, "displayCount", void 0), t([s({ type: Number, json: { write: !0 } })], a.prototype, "maxObservations", void 0), a = m = t([S("esri.layers.support.PurgeOptions")], a);
const $ = a, w = ye();
function b(e, r) {
  return new p("layer:unsupported", `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`, { layer: e });
}
let i = class extends P(k(A(O(E(_(D(U(C(N(L(V(me)))))))))))) {
  constructor(...e) {
    super(...e), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.outFields = ["*"], this.popupEnabled = !0, this.popupTemplate = null, this.purgeOptions = new $(), this.refreshInterval = 0, this.screenSizePerspectiveEnabled = !0, this.sourceJSON = null, this.spatialReference = I.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.useViewTime = !0, this.webSocketUrl = null, this._debouncedSaveOperations = G(async (r, o, n) => {
      const { save: l, saveAs: u } = await import("./streamLayerUtils-Bc226sgD.js");
      switch (r) {
        case c.SAVE:
          return l(this, o);
        case c.SAVE_AS:
          return u(this, n, o);
      }
    });
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  load(e) {
    if (!("WebSocket" in globalThis)) return this.addResolvingPromise(Promise.reject(new p("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const r = e != null ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Stream Service", "Feed"] }, e).catch(J).then(() => this._fetchService(r))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set featureReduction(e) {
    const r = this._normalizeFeatureReduction(e);
    this._set("featureReduction", r);
  }
  set renderer(e) {
    f(e, this.fieldsIndex), this._set("renderer", e);
  }
  readRenderer(e, r, o) {
    r = r.layerDefinition || r;
    const n = r.drawingInfo?.renderer;
    if (n) {
      const l = z(n, r, o) || void 0;
      return l || M.getLogger(this).error("Failed to create renderer", { rendererDefinition: r.drawingInfo.renderer, layer: this, context: o }), l;
    }
    return W(r, o);
  }
  async connect(e) {
    const [{ createConnection: r }] = await Promise.all([import("./createConnection-Gsh9K38J.js"), this.load()]), o = this.geometryType ? y.toJSON(this.geometryType) : null, { customParameters: n = null, definitionExpression: l = null, geometryDefinition: u = null, maxReconnectionAttempts: x = 0, maxReconnectionInterval: j = 20, spatialReference: R = this.spatialReference } = e || this.createConnectionParameters(), d = r(this.parsedUrl, this.spatialReference, R, o, l, u, x, j, n ?? void 0), T = q([this.on("send-message-to-socket", (h) => d.sendMessageToSocket(h)), this.on("send-message-to-client", (h) => d.sendMessageToClient(h))]);
    return d.once("destroy", T.remove), d;
  }
  createConnectionParameters() {
    return { spatialReference: this.spatialReference, customParameters: this.customParameters, definitionExpression: this.definitionExpression, geometryDefinition: this.geometryDefinition, maxReconnectionAttempts: this.maxReconnectionAttempts, maxReconnectionInterval: this.maxReconnectionInterval };
  }
  createPopupTemplate(e) {
    return Q(this, e);
  }
  createQuery() {
    const e = new Y();
    return e.returnGeometry = !0, e.outFields = ["*"], e.where = this.definitionExpression || "1=1", e;
  }
  getFieldDomain(e, r) {
    if (!this.fields) return null;
    let o = null;
    return this.fields.some((n) => (n.name === e && (o = n.domain), !!o)), o;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  serviceSupportsSpatialReference(e) {
    return !0;
  }
  sendMessageToSocket(e) {
    this.emit("send-message-to-socket", e);
  }
  sendMessageToClient(e) {
    this.emit("send-message-to-client", e);
  }
  async save(e) {
    return this._debouncedSaveOperations(c.SAVE, e);
  }
  async saveAs(e, r) {
    return this._debouncedSaveOperations(c.SAVE_AS, r, e);
  }
  write(e, r) {
    const o = r?.messages;
    return this.webSocketUrl ? (o?.push(b(this, "using a custom websocket connection cannot be written to web scenes and web maps")), null) : this.parsedUrl ? super.write(e, r) : (o?.push(b(this, "using a client-side only connection without a url cannot be written to web scenes and web maps")), null);
  }
  async _fetchService(e) {
    if (!this.webSocketUrl && this.parsedUrl) {
      if (!this.sourceJSON) {
        const { data: r } = await Z(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, ...this.parsedUrl.query }, responseType: "json", signal: e });
        this.sourceJSON = r;
      }
    } else {
      if (!this.timeInfo?.trackIdField) throw new p("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
      if (!this.objectIdField) {
        const r = this.fields.find((o) => o.type === "oid")?.name;
        if (!r) throw new p("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
        this.objectIdField = r;
      }
      if (!this.fields) throw new p("stream-layer:missing-metadata", "The stream layer fields must be specified.");
      if (this.fields.some((r) => r.name === this.objectIdField) || this.fields.push(new H({ name: this.objectIdField, alias: this.objectIdField, type: "oid" })), !this.geometryType) throw new p("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
      this.webSocketUrl && (this.url = this.webSocketUrl);
    }
    return this.read(this.sourceJSON, { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl }), f(this.renderer, this.fieldsIndex), X(this.timeInfo, this.fieldsIndex), this.objectIdField || (this.objectIdField = "__esri_stream_id__"), B(this, { origin: "service" });
  }
};
t([s({ type: String })], i.prototype, "copyright", void 0), t([s({ readOnly: !0 })], i.prototype, "defaultPopupTemplate", null), t([s({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), t([s({ type: String })], i.prototype, "displayField", void 0), t([s({ type: K })], i.prototype, "elevationInfo", void 0), t([s({ json: { origins: { "web-map": { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-scene": { read: !1, write: !1 } } } })], i.prototype, "featureReduction", null), t([s(w.fields)], i.prototype, "fields", void 0), t([s(w.fieldsIndex)], i.prototype, "fieldsIndex", void 0), t([s({ type: ee, json: { name: "layerDefinition.definitionGeometry", write: !0 } })], i.prototype, "geometryDefinition", void 0), t([s({ type: y.apiValues, json: { read: { reader: y.read } } })], i.prototype, "geometryType", void 0), t([s(te)], i.prototype, "labelsVisible", void 0), t([s({ type: [ie], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: se }, write: !0 } })], i.prototype, "labelingInfo", void 0), t([s(re)], i.prototype, "legendEnabled", void 0), t([s({ type: ["show", "hide"], json: { origins: { "portal-item": { read: !1, write: !1 } } } })], i.prototype, "listMode", void 0), t([s({ type: g })], i.prototype, "maxReconnectionAttempts", void 0), t([s({ type: g })], i.prototype, "maxReconnectionInterval", void 0), t([s(oe)], i.prototype, "maxScale", void 0), t([s(ne)], i.prototype, "minScale", void 0), t([s({ type: String })], i.prototype, "objectIdField", void 0), t([s({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })], i.prototype, "operationalLayerType", void 0), t([s({ readOnly: !0 })], i.prototype, "outFields", void 0), t([s(ae)], i.prototype, "popupEnabled", void 0), t([s({ type: le, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), t([s({ type: $ })], i.prototype, "purgeOptions", void 0), t([s({ json: { read: !1, write: !1 } })], i.prototype, "refreshInterval", void 0), t([s({ types: pe, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: !1 } }, "web-scene": { name: "layerDefinition.drawingInfo.renderer", types: de, write: !0 } }, write: { target: "layerDefinition.drawingInfo.renderer" } } })], i.prototype, "renderer", null), t([v("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), v("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], i.prototype, "readRenderer", null), t([s((() => {
  const e = ce(ue);
  return e.json.origins["portal-item"] = { read: !1, write: !1 }, e;
})())], i.prototype, "screenSizePerspectiveEnabled", void 0), t([s()], i.prototype, "sourceJSON", void 0), t([s({ type: I, json: { origins: { service: { read: { source: "spatialReference" } } } } })], i.prototype, "spatialReference", void 0), t([s({ json: { read: !1 } })], i.prototype, "type", void 0), t([s(he)], i.prototype, "url", void 0), t([s({ type: Number })], i.prototype, "updateInterval", void 0), t([s({ json: { read: !1, write: !1 } })], i.prototype, "useViewTime", void 0), t([s({ type: String })], i.prototype, "webSocketUrl", void 0), i = t([S("esri.layers.StreamLayer")], i);
const ge = i;
export {
  ge as default
};
//# sourceMappingURL=StreamLayer-Cghm71Mi.js.map
