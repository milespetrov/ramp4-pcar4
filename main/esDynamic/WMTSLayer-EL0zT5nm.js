import { O as o, P as n, b8 as A, fv as Q, Q as N, bX as Y, e9 as R, V as J, s as _, jF as Z, a3 as fe, gs as ge, jG as B, jH as we, bm as pe, e3 as xe, e4 as ve, e7 as Se, e5 as Me, e6 as Ie, e8 as Te, S as re, fw as U, bi as ie, _ as se, z as Le, jI as Ee, jJ as Pe, jK as be, $ as K, gq as le, aa as ae, I as G, fB as Ce, eH as Re, ei as Oe } from "./main-Bnvk3STL.js";
import { o as oe } from "./xmlUtils-TLuV3CJ7.js";
var q;
let F = q = class extends Y {
  constructor(e) {
    super(e), this.fullExtent = null, this.id = null, this.tileInfo = null;
  }
  clone() {
    const e = new q();
    return this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent?.clone() ?? null), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("tileInfo") && (e.tileInfo = this.tileInfo?.clone() ?? null), e;
  }
};
o([n({ type: A, json: { read: { source: "fullExtent" } } })], F.prototype, "fullExtent", void 0), o([n({ type: String, json: { read: { source: "id" } } })], F.prototype, "id", void 0), o([n({ type: Q, json: { read: { source: "tileInfo" } } })], F.prototype, "tileInfo", void 0), F = q = o([N("esri.layers.support.TileMatrixSet")], F);
const Ae = F;
var H;
let E = H = class extends Y {
  constructor(e) {
    super(e), this.id = null, this.title = null, this.description = null, this.legendUrl = null;
  }
  clone() {
    const e = new H();
    return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("isDefault") && (e.isDefault = this.isDefault), this.hasOwnProperty("keywords") && (e.keywords = this.keywords && this.keywords.slice()), this.hasOwnProperty("legendUrl") && (e.legendUrl = this.legendUrl), this.hasOwnProperty("title") && (e.title = this.title), e;
  }
};
o([n({ json: { read: { source: "id" } } })], E.prototype, "id", void 0), o([n({ json: { read: { source: "title" } } })], E.prototype, "title", void 0), o([n({ json: { read: { source: "abstract" } } })], E.prototype, "description", void 0), o([n({ json: { read: { source: "legendUrl" } } })], E.prototype, "legendUrl", void 0), o([n({ json: { read: { source: "isDefault" } } })], E.prototype, "isDefault", void 0), o([n({ json: { read: { source: "keywords" } } })], E.prototype, "keywords", void 0), E = H = o([N("esri.layers.support.WMTSStyle")], E);
const Fe = E;
var z;
let w = z = class extends Y {
  constructor(e) {
    super(e), this.description = null, this.fullExtent = null, this.fullExtents = null, this.id = null, this.imageFormats = null, this.layer = null, this.parent = null, this.styles = null, this.title = null, this.tileMatrixSetId = null, this.tileMatrixSets = null;
  }
  readFullExtent(e, t) {
    return (e = t.fullExtent) ? A.fromJSON(e) : null;
  }
  readFullExtents(e, t) {
    return t.fullExtents?.length ? t.fullExtents.map((r) => A.fromJSON(r)) : t.tileMatrixSets?.map((r) => A.fromJSON(r.fullExtent)).filter((r) => r) ?? [];
  }
  get imageFormat() {
    let e = this._get("imageFormat");
    return e || (e = this.imageFormats?.length ? this.imageFormats[0] : ""), e;
  }
  set imageFormat(e) {
    const t = this.imageFormats;
    e && (e.includes("image/") || t && !t.includes(e)) && (e.includes("image/") || (e = "image/" + e), t && !t.includes(e)) ? console.error("The layer doesn't support the format of " + e) : this._set("imageFormat", e);
  }
  get styleId() {
    let e = this._get("styleId");
    return e || (e = this.styles?.at(0)?.id ?? ""), e;
  }
  set styleId(e) {
    this._set("styleId", e);
  }
  get tileMatrixSet() {
    return this.tileMatrixSets ? this.tileMatrixSets.find((e) => e.id === this.tileMatrixSetId) : null;
  }
  clone() {
    const e = new z();
    return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("imageFormats") && (e.imageFormats = this.imageFormats?.slice() ?? null), this.hasOwnProperty("imageFormat") && (e.imageFormat = this.imageFormat), this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent?.clone()), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("layer") && (e.layer = this.layer), this.hasOwnProperty("styleId") && (e.styleId = this.styleId), this.hasOwnProperty("styles") && (e.styles = this.styles?.clone()), this.hasOwnProperty("tileMatrixSetId") && (e.tileMatrixSetId = this.tileMatrixSetId), this.hasOwnProperty("tileMatrixSets") && (e.tileMatrixSets = this.tileMatrixSets?.clone()), this.hasOwnProperty("title") && (e.title = this.title), e;
  }
};
o([n()], w.prototype, "description", void 0), o([n()], w.prototype, "fullExtent", void 0), o([R("fullExtent", ["fullExtent"])], w.prototype, "readFullExtent", null), o([n({ readOnly: !0 })], w.prototype, "fullExtents", void 0), o([R("fullExtents", ["fullExtents", "tileMatrixSets"])], w.prototype, "readFullExtents", null), o([n()], w.prototype, "id", void 0), o([n()], w.prototype, "imageFormat", null), o([n({ json: { read: { source: "formats" } } })], w.prototype, "imageFormats", void 0), o([n()], w.prototype, "layer", void 0), o([n()], w.prototype, "parent", void 0), o([n()], w.prototype, "styleId", null), o([n({ type: J.ofType(Fe), json: { read: { source: "styles" } } })], w.prototype, "styles", void 0), o([n({ json: { write: { ignoreOrigin: !0 } } })], w.prototype, "title", void 0), o([n()], w.prototype, "tileMatrixSetId", void 0), o([n({ readOnly: !0 })], w.prototype, "tileMatrixSet", null), o([n({ type: J.ofType(Ae), json: { read: { source: "tileMatrixSets" } } })], w.prototype, "tileMatrixSets", void 0), w = z = o([N("esri.layers.support.WMTSSublayer")], w);
const j = w, de = 90.71428571428571;
function ne(e) {
  const t = e.replaceAll(/ows:/gi, "");
  if (!f("Contents", new DOMParser().parseFromString(t, "text/xml").documentElement)) throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid", "the wmts get capabilities response is not compliant", { text: e });
}
function $e(e, t) {
  e = e.replaceAll(/ows:/gi, "");
  const r = new DOMParser().parseFromString(e, "text/xml").documentElement, i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), a = f("Contents", r);
  if (!a) throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid");
  const l = f("OperationsMetadata", r), u = l?.querySelector("[name='GetTile']"), c = u?.getElementsByTagName("Get"), m = c && Array.prototype.slice.call(c), y = t.url?.indexOf("https"), p = y !== void 0 && y > -1;
  let g, I, v = t.serviceMode, x = t?.url;
  m?.length && m.some((L) => {
    const T = f("Constraint", L);
    return !T || $("AllowedValues", "Value", v, T) ? (x = L.attributes[0].nodeValue, !0) : (!T || $("AllowedValues", "Value", "RESTful", T) || $("AllowedValues", "Value", "REST", T) ? I = L.attributes[0].nodeValue : T && !$("AllowedValues", "Value", "KVP", T) || (g = L.attributes[0].nodeValue), !1);
  }), !x && (I ? (x = I, v = "RESTful") : g ? (x = g, v = "KVP") : x = f("ServiceMetadataURL", r)?.getAttribute("xlink:href"));
  const P = x.indexOf("1.0.0/");
  P === -1 && v === "RESTful" ? x += "/" : P > -1 && (x = x.substring(0, P)), v === "KVP" && (x += P > -1 ? "" : "?"), p && (x = x.replace(/^http:/i, "https:"));
  const S = h("ServiceIdentification>ServiceTypeVersion", r), M = h("ServiceIdentification>AccessConstraints", r), b = M && /^none$/i.test(M) ? null : M, k = C("Layer", a), W = C("TileMatrixSet", a), D = k.map((L) => {
    const T = h("Identifier", L);
    return i.set(T, L), je(T, L, W, p, S);
  });
  return { copyright: b, dimensionMap: s, layerMap: i, layers: D, serviceMode: v, tileUrl: x };
}
function Ve(e) {
  return e.layers.forEach((t) => {
    t.tileMatrixSets?.forEach((r) => {
      const i = r.tileInfo;
      i && i.dpi !== 96 && (i.lods?.forEach((s) => {
        s.scale = 96 * s.scale / i.dpi, s.resolution = ye(i.spatialReference?.wkid, s.scale * de / 96, r.id);
      }), i.dpi = 96);
    });
  }), e;
}
function ee(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function f(e, t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const i = t.childNodes[r];
    if (ee(i) && i.nodeName === e) return i;
  }
  return null;
}
function C(e, t) {
  const r = [];
  for (let i = 0; i < t.childNodes.length; i++) {
    const s = t.childNodes[i];
    ee(s) && s.nodeName === e && r.push(s);
  }
  return r;
}
function O(e, t) {
  const r = [];
  for (let i = 0; i < t.childNodes.length; i++) {
    const s = t.childNodes[i];
    ee(s) && s.nodeName === e && r.push(s);
  }
  return r.map((i) => i.textContent).filter(pe);
}
function h(e, t) {
  return e.split(">").forEach((r) => {
    t && (t = f(r, t));
  }), t && t.textContent;
}
function $(e, t, r, i) {
  let s;
  return Array.prototype.slice.call(i.childNodes).some((a) => {
    if (a.nodeName.includes(e)) {
      const l = f(t, a), u = l?.textContent;
      if (u === r || r.split(":") && r.split(":")[1] === u) return s = a, !0;
    }
    return !1;
  }), s;
}
function je(e, t, r, i, s) {
  const a = h("Abstract", t), l = O("Format", t);
  return { id: e, fullExtent: ke(t), fullExtents: We(t), description: a, formats: l, styles: De(t, i), title: h("Title", t), tileMatrixSets: Be(s, t, r) };
}
function me(e, t) {
  const r = [], i = e.layerMap?.get(t);
  if (!i) return null;
  const s = C("ResourceURL", i), a = C("Dimension", i);
  let l, u, c, m;
  return a.length && (l = h("Identifier", a[0]), u = O("Default", a[0]) || O("Value", a[0])), a.length > 1 && (c = h("Identifier", a[1]), m = O("Default", a[1]) || O("Value", a[1])), e.dimensionMap.set(t, { dimensions: u, dimensions2: m }), s.forEach((y) => {
    let p = y.getAttribute("template");
    if (y.getAttribute("resourceType") === "tile") {
      if (l && u.length) if (p.includes("{" + l + "}")) p = p.replace("{" + l + "}", "{dimensionValue}");
      else {
        const g = p.toLowerCase().indexOf("{" + l.toLowerCase() + "}");
        g > -1 && (p = p.substring(0, g) + "{dimensionValue}" + p.substring(g + l.length + 2));
      }
      if (c && m.length) if (p.includes("{" + c + "}")) p = p.replace("{" + c + "}", "{dimensionValue2}");
      else {
        const g = p.toLowerCase().indexOf("{" + c.toLowerCase() + "}");
        g > -1 && (p = p.substring(0, g) + "{dimensionValue2}" + p.substring(g + c.length + 2));
      }
      r.push({ template: p, format: y.getAttribute("format"), resourceType: "tile" });
    }
  }), r;
}
function Ue(e, t, r, i, s, a, l, u) {
  const c = _e(e, t, i);
  if (!(c?.length > 0)) return "";
  const { dimensionMap: m } = e, y = m.get(t).dimensions?.[0], p = m.get(t).dimensions2?.[0];
  return c[l % c.length].template.replaceAll(/\{Style\}/gi, s ?? "").replaceAll(/\{TileMatrixSet\}/gi, r ?? "").replaceAll(/\{TileMatrix\}/gi, a).replaceAll(/\{TileRow\}/gi, "" + l).replaceAll(/\{TileCol\}/gi, "" + u).replaceAll(/\{dimensionValue\}/gi, y).replaceAll(/\{dimensionValue2\}/gi, p);
}
function _e(e, t, r) {
  const i = me(e, t), s = i?.filter((a) => a.format === r);
  return (s?.length ? s : i) ?? [];
}
function Ne(e, t, r, i) {
  const { dimensionMap: s } = e, a = me(e, t);
  let l = "";
  if (a && a.length > 0) {
    const u = s.get(t).dimensions?.[0], c = s.get(t).dimensions2?.[0];
    l = a[0].template, l.endsWith(".xxx") && (l = l.slice(0, -4)), l = l.replaceAll(/\{Style\}/gi, i), l = l.replaceAll(/\{TileMatrixSet\}/gi, r), l = l.replaceAll(/\{TileMatrix\}/gi, "{level}"), l = l.replaceAll(/\{TileRow\}/gi, "{row}"), l = l.replaceAll(/\{TileCol\}/gi, "{col}"), l = l.replaceAll(/\{dimensionValue\}/gi, u), l = l.replaceAll(/\{dimensionValue2\}/gi, c);
  }
  return l;
}
function ke(e) {
  const t = f("WGS84BoundingBox", e), r = t ? h("LowerCorner", t).split(" ") : ["-180", "-90"], i = t ? h("UpperCorner", t).split(" ") : ["180", "90"];
  return { xmin: parseFloat(r[0]), ymin: parseFloat(r[1]), xmax: parseFloat(i[0]), ymax: parseFloat(i[1]), spatialReference: { wkid: 4326 } };
}
function We(e) {
  const t = [];
  return oe(e, { BoundingBox: (r) => {
    if (!r.getAttribute("crs")) return;
    const i = r.getAttribute("crs").toLowerCase(), s = te(i), a = i.includes("epsg") && Z(s.wkid);
    let l, u, c, m;
    oe(r, { LowerCorner: (y) => {
      [l, u] = y.textContent.split(" ").map((p) => Number.parseFloat(p)), a && ([l, u] = [u, l]);
    }, UpperCorner: (y) => {
      [c, m] = y.textContent.split(" ").map((p) => Number.parseFloat(p)), a && ([c, m] = [m, c]);
    } }), t.push({ xmin: l, ymin: u, xmax: c, ymax: m, spatialReference: s });
  } }), t;
}
function De(e, t) {
  return C("Style", e).map((r) => {
    const i = f("LegendURL", r), s = f("Keywords", r), a = s ? O("Keyword", s) : [];
    let l = i?.getAttribute("xlink:href");
    return t && (l = l?.replace(/^http:/i, "https:")), { abstract: h("Abstract", r), id: h("Identifier", r), isDefault: r.getAttribute("isDefault") === "true", keywords: a, legendUrl: l, title: h("Title", r) };
  });
}
function Be(e, t, r) {
  return C("TileMatrixSetLink", t).map((i) => Ke(e, i, r));
}
function Ke(e, t, r) {
  const i = f("TileMatrixSet", t).textContent, s = O("TileMatrix", t), a = r.find((S) => {
    const M = f("Identifier", S), b = M?.textContent;
    return !!(b === i || i.split(":") && i.split(":")[1] === b);
  }), l = f("TileMatrixSetLimits", t), u = l && C("TileMatrixLimits", l), c = /* @__PURE__ */ new Map();
  if (u?.length) for (const S of u) {
    const M = f("TileMatrix", S).textContent, b = +f("MinTileRow", S).textContent, k = +f("MaxTileRow", S).textContent, W = +f("MinTileCol", S).textContent, D = +f("MaxTileCol", S).textContent;
    c.set(M, { minCol: W, maxCol: D, minRow: b, maxRow: k });
  }
  const m = h("SupportedCRS", a).toLowerCase(), y = Ge(a, m), p = y.spatialReference, g = f("TileMatrix", a), I = [parseInt(h("TileWidth", g), 10), parseInt(h("TileHeight", g), 10)], v = [];
  s.length ? s.forEach((S, M) => {
    const b = $("TileMatrix", "Identifier", S, a);
    v.push(ue(b, m, M, i, c));
  }) : C("TileMatrix", a).forEach((S, M) => {
    v.push(ue(S, m, M, i, c));
  });
  const x = Je(e, a, y, I, v[0]).toJSON(), P = new Q({ dpi: 96, spatialReference: p, size: I, origin: y, lods: v }).toJSON();
  return { id: i, fullExtent: x, tileInfo: P };
}
function te(e) {
  e = e.toLowerCase();
  let t = parseInt(e.split(":").pop(), 10);
  t !== 900913 && t !== 3857 || (t = 102100);
  const r = He(e);
  return r != null && (t = r), { wkid: t };
}
function Ge(e, t) {
  return he(f("TileMatrix", e), t);
}
function he(e, t) {
  const r = te(t), [i, s] = h("TopLeftCorner", e).split(" ").map((l) => parseFloat(l)), a = t.includes("epsg") && Z(r.wkid);
  return new fe(a ? { x: s, y: i, spatialReference: r } : { x: i, y: s, spatialReference: r });
}
function Je(e, t, r, i, s) {
  const a = f("BoundingBox", t);
  let l, u, c, m, y, p;
  if (a && (l = h("LowerCorner", a).split(" "), u = h("UpperCorner", a).split(" ")), l && l.length > 1 && u && u.length > 1) c = parseFloat(l[0]), y = parseFloat(l[1]), m = parseFloat(u[0]), p = parseFloat(u[1]);
  else {
    const g = f("TileMatrix", t), I = parseInt(h("MatrixWidth", g), 10), v = parseInt(h("MatrixHeight", g), 10);
    c = r.x, p = r.y, m = c + I * i[0] * s.resolution, y = p - v * i[1] * s.resolution;
  }
  return qe(e, r.spatialReference, r) ? new A(y, c, p, m, r.spatialReference) : new A(c, y, m, p, r.spatialReference);
}
function qe(e, t, r) {
  return e === "1.0.0" && Z(t.wkid) && !(r.spatialReference.isGeographic && r.x < -90 && r.y >= -90);
}
var V;
function He(e) {
  return e.includes("crs84") || e.includes("crs:84") ? V.CRS84 : e.includes("crs83") || e.includes("crs:83") ? V.CRS83 : e.includes("crs27") || e.includes("crs:27") ? V.CRS27 : null;
}
function ue(e, t, r, i, s) {
  const a = te(t), l = h("Identifier", e);
  let u = parseFloat(h("ScaleDenominator", e));
  const c = ye(a.wkid, u, i);
  u *= 96 / de;
  const m = +h("MatrixWidth", e), y = +h("MatrixHeight", e), { maxCol: p = m - 1, maxRow: g = y - 1, minCol: I = 0, minRow: v = 0 } = s.get(l) ?? {}, { x, y: P } = he(e, t);
  return new ge({ cols: [I, p], level: r, levelValue: l, origin: [x, P], scale: u, resolution: c, rows: [v, g] });
}
function ye(e, t, r) {
  let i;
  return i = B.hasOwnProperty("" + e) ? B.values[B[e]] : r === "default028mm" ? 6370997 * Math.PI / 180 : we(e).metersPerDegree, 7 * t / 25e3 / i;
}
(function(e) {
  e[e.CRS84 = 4326] = "CRS84", e[e.CRS83 = 4269] = "CRS83", e[e.CRS27 = 4267] = "CRS27";
})(V || (V = {}));
var X;
const ce = { "image/png": ".png", "image/png8": ".png", "image/png24": ".png", "image/png32": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg", "image/gif": ".gif", "image/bmp": ".bmp", "image/tiff": ".tif", "image/jpgpng": "", "image/jpegpng": "", "image/unknown": "" }, ze = /* @__PURE__ */ new Set(["version", "service", "request", "layer", "style", "format", "tilematrixset", "tilematrix", "tilerow", "tilecol"]);
let d = X = class extends xe(ve(Se(Me(Ie(Te(Oe)))))) {
  constructor(...e) {
    super(...e), this.activeLayer = null, this.copyright = "", this.customParameters = null, this.customLayerParameters = null, this.fullExtent = null, this.operationalLayerType = "WebTiledLayer", this.resourceInfo = null, this.serviceMode = "RESTful", this.sublayers = null, this.type = "wmts", this.version = "1.0.0", this.addHandles([re(() => this.activeLayer, (t, r) => {
      r && !this.sublayers?.includes(r) && (r.layer = null, r.parent = null), t && (t.layer = this, t.parent = this);
    }, U), ie(() => this.sublayers, "after-add", ({ item: t }) => {
      t.layer = this, t.parent = this;
    }, U), ie(() => this.sublayers, "after-remove", ({ item: t }) => {
      t.layer = null, t.parent = null;
    }, U), re(() => this.sublayers, (t, r) => {
      if (r) for (const i of r) i.layer = null, i.parent = null;
      if (t) for (const i of t) i.layer = this, i.parent = this;
    }, U)]);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMTS"] }, e).catch(se).then(() => this._fetchService(e)).catch((t) => {
      throw se(t), new _("wmtslayer:unsupported-service-data", "Invalid response from the WMTS service.", { error: t });
    })), Promise.resolve(this);
  }
  readActiveLayerFromService(e, t, r) {
    this.activeLayer || (this.activeLayer = new j());
    let i = t.layers.find((s) => s.id === this.activeLayer.id);
    return i || (i = t.layers[0]), this.activeLayer.read(i, r), this.activeLayer;
  }
  readActiveLayerFromItemOrWebDoc(e, t) {
    const { templateUrl: r, wmtsInfo: i } = t, s = r ? this._getLowerCasedUrlParams(r) : null, a = i?.layerIdentifier;
    let l = null;
    const u = i?.tileMatrixSet;
    u && (Array.isArray(u) ? u.length && (l = u[0]) : l = u);
    const c = s?.format, m = s?.style;
    return new j({ id: a, imageFormat: c, styleId: m, tileMatrixSetId: l });
  }
  writeActiveLayer(e, t, r, i) {
    const s = this.activeLayer;
    t.templateUrl = this.getUrlTemplate(s.id, s.tileMatrixSetId, s.imageFormat, s.styleId);
    const a = Le("tileMatrixSet.tileInfo", s);
    t.tileInfo = a ? a.toJSON(i) : null, t.wmtsInfo = { ...t.wmtsInfo, layerIdentifier: s.id, tileMatrixSet: s.tileMatrixSetId };
  }
  readCustomParameters(e, t) {
    const r = t.wmtsInfo;
    return r ? this._mergeParams(r.customParameters, r.url) : null;
  }
  get fullExtents() {
    return this.activeLayer.fullExtents;
  }
  readServiceMode(e, t) {
    return t.templateUrl.includes("?") ? "KVP" : "RESTful";
  }
  readSublayersFromService(e, t, r) {
    return Xe(t.layers, r);
  }
  get supportedSpatialReferences() {
    return this.activeLayer.tileMatrixSets?.map((e) => e.tileInfo?.spatialReference).toArray().filter(pe) ?? [];
  }
  get tilemapCache() {
    const e = this.activeLayer?.tileMatrixSet?.tileInfo;
    return e ? new Ee(e) : void 0;
  }
  get title() {
    return this.activeLayer?.title ?? "Layer";
  }
  set title(e) {
    this._overrideIfSome("title", e);
  }
  get url() {
    return this._get("url");
  }
  set url(e) {
    e && e.substr(-1) === "/" ? this._set("url", e.slice(0, -1)) : this._set("url", e);
  }
  createWebTileLayer(e) {
    const t = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId), r = this._getTileMatrixSetById(e.tileMatrixSetId), i = r?.tileInfo, s = e.fullExtent, a = new Pe({ layerIdentifier: e.id, tileMatrixSet: e.tileMatrixSetId, url: this.url });
    return this.customLayerParameters && (a.customLayerParameters = this.customLayerParameters), this.customParameters && (a.customParameters = this.customParameters), new be({ fullExtent: s, urlTemplate: t, tileInfo: i, wmtsInfo: a });
  }
  async fetchTile(e, t, r, i = {}) {
    const { signal: s } = i, a = this.getTileUrl(e, t, r), { data: l } = await K(a, { responseType: "image", signal: s });
    return l;
  }
  async fetchImageBitmapTile(e, t, r, i = {}) {
    const { signal: s } = i;
    if (this.fetchTile !== X.prototype.fetchTile) {
      const u = await this.fetchTile(e, t, r, i);
      return le(u, e, t, r, s);
    }
    const a = this.getTileUrl(e, t, r), { data: l } = await K(a, { responseType: "blob", signal: s });
    return le(l, e, t, r, s);
  }
  findSublayerById(e) {
    return this.sublayers?.find((t) => t.id === e);
  }
  getTileUrl(e, t, r) {
    const i = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId), s = i?.tileInfo?.lods[e], a = s ? s.levelValue || `${s.level}` : `${e}`;
    let l = this.resourceInfo ? "" : Ue({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId, a, t, r);
    return l || (l = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId).replaceAll(/\{level\}/gi, a).replaceAll(/\{row\}/gi, `${t}`).replaceAll(/\{col\}/gi, `${r}`)), l = this._appendCustomLayerParameters(l), l;
  }
  getUrlTemplate(e, t, r, i) {
    if (!this.resourceInfo) {
      const s = Ne({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, e, t, i);
      if (s) return s;
    }
    if (this.serviceMode === "KVP") return this.url + "?SERVICE=WMTS&VERSION=" + this.version + "&REQUEST=GetTile&LAYER=" + e + "&STYLE=" + i + "&FORMAT=" + r + "&TILEMATRIXSET=" + t + "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";
    if (this.serviceMode === "RESTful") {
      let s = "";
      return ce[r.toLowerCase()] && (s = ce[r.toLowerCase()]), this.url + e + "/" + i + "/" + t + "/{level}/{row}/{col}" + s;
    }
    return "";
  }
  async _fetchService(e) {
    let t;
    if (this.resourceInfo) this.resourceInfo.serviceMode === "KVP" && (this.url += this.url.includes("?") ? "" : "?"), t = { ssl: !1, data: this.resourceInfo };
    else try {
      t = await this._getCapabilities(this.serviceMode, e), ne(t.data);
    } catch {
      const r = this.serviceMode === "KVP" ? "RESTful" : "KVP";
      try {
        t = await this._getCapabilities(r, e), ne(t.data), this.serviceMode = r;
      } catch (i) {
        throw new _("wmtslayer:unsupported-service-data", "Services does not support RESTful or KVP service modes.", { error: i });
      }
    }
    this.resourceInfo ? t.data = Ve(t.data) : t.data = $e(t.data, { serviceMode: this.serviceMode, url: this.url }), t.data && this.read(t.data, { origin: "service" });
  }
  async _getCapabilities(e, t) {
    const r = this._getCapabilitiesUrl(e);
    return await K(r, { ...t, responseType: "text" });
  }
  _getTileMatrixSetById(e) {
    return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find((i) => i.id === e);
  }
  _appendCustomParameters(e) {
    return this._appendParameters(e, this.customParameters);
  }
  _appendCustomLayerParameters(e) {
    return this._appendParameters(e, { ...ae(this.customParameters), ...this.customLayerParameters });
  }
  _appendParameters(e, t) {
    const r = G(e), i = { ...r.query, ...t }, s = Ce(i);
    return s === "" ? r.path : `${r.path}?${s}`;
  }
  _getCapabilitiesUrl(e) {
    this.url = G(this.url).path;
    let t = this.url;
    switch (e) {
      case "KVP":
        t += `?request=GetCapabilities&service=WMTS&version=${this.version}`;
        break;
      case "RESTful": {
        const r = `/${this.version}/WMTSCapabilities.xml`, i = new RegExp(r, "i");
        t = t.replace(i, ""), t += r;
        break;
      }
    }
    return this._appendCustomParameters(t);
  }
  _getLowerCasedUrlParams(e) {
    if (!e) return null;
    const t = G(e).query;
    if (!t) return null;
    const r = {};
    return Object.keys(t).forEach((i) => {
      r[i.toLowerCase()] = t[i];
    }), r;
  }
  _mergeParams(e, t) {
    const r = this._getLowerCasedUrlParams(t);
    if (r) {
      const i = Object.keys(r);
      i.length && (e = e ? ae(e) : {}, i.forEach((s) => {
        e.hasOwnProperty(s) || ze.has(s) || (e[s] = r[s]);
      }));
    }
    return e;
  }
};
function Xe(e, t) {
  return e.map((r) => {
    const i = new j();
    return i.read(r, t), i;
  });
}
o([n()], d.prototype, "dimensionMap", void 0), o([n()], d.prototype, "layerMap", void 0), o([n({ type: j, json: { origins: { "web-document": { write: { ignoreOrigin: !0 } } } } })], d.prototype, "activeLayer", void 0), o([R("service", "activeLayer", ["layers"])], d.prototype, "readActiveLayerFromService", null), o([R(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])], d.prototype, "readActiveLayerFromItemOrWebDoc", null), o([Re(["web-document", "portal-item"], "activeLayer", { templateUrl: { type: String }, tileInfo: { type: Q }, "wmtsInfo.layerIdentifier": { type: String }, "wmtsInfo.tileMatrixSet": { type: String } })], d.prototype, "writeActiveLayer", null), o([n({ type: String, value: "", json: { write: !0 } })], d.prototype, "copyright", void 0), o([n({ type: ["show", "hide"] })], d.prototype, "listMode", void 0), o([n({ json: { read: !0, write: !0 } })], d.prototype, "blendMode", void 0), o([n({ json: { origins: { "web-document": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } }, "portal-item": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } } } } })], d.prototype, "customParameters", void 0), o([R(["portal-item", "web-document"], "customParameters")], d.prototype, "readCustomParameters", null), o([n({ json: { origins: { "web-document": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } }, "portal-item": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } } } } })], d.prototype, "customLayerParameters", void 0), o([n({ type: A, json: { write: { ignoreOrigin: !0 }, origins: { "web-document": { read: { source: "fullExtent" } }, "portal-item": { read: { source: "fullExtent" } } } } })], d.prototype, "fullExtent", void 0), o([n({ readOnly: !0 })], d.prototype, "fullExtents", null), o([n({ type: ["WebTiledLayer"] })], d.prototype, "operationalLayerType", void 0), o([n()], d.prototype, "resourceInfo", void 0), o([n()], d.prototype, "serviceMode", void 0), o([R(["portal-item", "web-document"], "serviceMode", ["templateUrl"])], d.prototype, "readServiceMode", null), o([n({ type: J.ofType(j) })], d.prototype, "sublayers", void 0), o([R("service", "sublayers", ["layers"])], d.prototype, "readSublayersFromService", null), o([n({ readOnly: !0 })], d.prototype, "supportedSpatialReferences", null), o([n({ readOnly: !0 })], d.prototype, "tilemapCache", null), o([n({ json: { read: { source: "title" } } })], d.prototype, "title", null), o([n({ json: { read: !1 }, readOnly: !0, value: "wmts" })], d.prototype, "type", void 0), o([n({ json: { origins: { service: { read: { source: "tileUrl" } }, "web-document": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } }, "portal-item": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } } } } })], d.prototype, "url", null), o([n()], d.prototype, "version", void 0), d = X = o([N("esri.layers.WMTSLayer")], d);
const Ze = d;
export {
  Ze as default
};
//# sourceMappingURL=WMTSLayer-EL0zT5nm.js.map
