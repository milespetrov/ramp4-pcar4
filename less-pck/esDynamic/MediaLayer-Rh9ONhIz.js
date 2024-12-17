import { O as s, Q as x, lz as we, eo as D, D as W, P as l, a6 as d, dF as Ee, bv as ae, fk as C, s as T, fu as v, nK as Me, dO as q, ek as oe, nL as U, nM as he, b5 as ce, fg as R, bV as Le, nN as Y, b8 as ue, d$ as Te, nO as fe, nP as je, ea as He, ei as J, nQ as Ne, dN as ve, eP as xe, p as Ce, e8 as me, ec as Ae, e9 as Ve, eb as We, nR as Re, ed as Ge, nS as ze, a2 as Ue, dC as Be, b3 as Fe, nT as ke, V as te, ma as Ke, cP as Je, S as De, dm as qe, bE as Qe, du as Xe, K as Ye, bn as Ze, fn as et, fm as tt, dI as nt, dM as ot, dK as rt, dL as st, eG as it, j6 as Z, c5 as lt, dX as at } from "./main-n1d2W0Ts.js";
import { p as _, j as be, m as ct } from "./perspectiveUtils-C_on04Ca.js";
import { t as ut, e as ne } from "./mat3f64-Dh9_zhFu.js";
import { p as pt } from "./imageUtils-DShRxA6f.js";
import { p as dt } from "./resourceExtension-Ch53yApk.js";
import { o as ht } from "./BoundsStore-CfsLIBur.js";
let ie = class extends we {
  projectOrWarn(e, t) {
    if (e == null) return e;
    const { geometry: o, pending: n } = D(e, t);
    return n ? null : n || o ? o : (W.getLogger(this).warn("geometry could not be projected to the spatial reference", { georeference: this, geometry: e, sourceSpatialReference: e.spatialReference, targetSpatialReference: t }), null);
  }
};
ie = s([x("esri.layers.support.GeoreferenceBase")], ie);
const Q = ie, re = ne(), p = R();
let k = class extends Le {
};
s([l({ type: Number, json: { write: !0 } })], k.prototype, "x", void 0), s([l({ type: Number, json: { write: !0 } })], k.prototype, "y", void 0), k = s([x("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")], k);
let K = class extends we {
  constructor() {
    super(...arguments), this.sourcePoint = null, this.mapPoint = null;
  }
};
s([l()], K.prototype, "sourcePoint", void 0), s([l({ type: d })], K.prototype, "mapPoint", void 0), K = s([x("esri.layers.support.ControlPointsGeoreference.ControlPoint")], K);
let P = class extends Ee(Q) {
  constructor(e) {
    super(e), this.controlPoints = null, this.height = 0, this.type = "control-points", this.width = 0;
  }
  readControlPoints(e, t) {
    const o = ae.fromJSON(t.spatialReference), n = ut(...t.coefficients, 1);
    return e.map((r) => (C(p, r.x, r.y), _(p, p, n), { sourcePoint: r, mapPoint: new d({ x: p[0], y: p[1], spatialReference: o }) }));
  }
  writeControlPoints(e, t, o, n) {
    if (this.transform != null) e != null && y(e[0]) && (t.controlPoints = e.map((r) => {
      const i = r.sourcePoint;
      return { x: i.x, y: i.y };
    }), t.spatialReference = e[0].mapPoint.spatialReference.toJSON(), t.coefficients = this.transform.slice(0, 8));
    else {
      const r = new T("web-document-write:invalid-georeference", "Invalid 'controlPoints', 'width', 'height' configuration.", { layer: n?.layer, georeference: this });
      n?.messages ? n.messages.push(r) : W.getLogger(this).error(r.name, r.message);
    }
  }
  get coords() {
    if (this.controlPoints == null) return null;
    const e = this._updateTransform(re);
    if (e == null || !y(this.controlPoints[0])) return null;
    const t = this.controlPoints[0].mapPoint.spatialReference;
    return Pt(e, this.width, this.height, t);
  }
  set coords(e) {
    if (this.controlPoints == null || !y(this.controlPoints[0])) return;
    const t = this.controlPoints[0].mapPoint.spatialReference;
    if ((e = this.projectOrWarn(e, t)) == null) return;
    const { width: o, height: n } = this, { rings: [[r, i, a, c]] } = e, u = { sourcePoint: v(0, n), mapPoint: new d({ x: r[0], y: r[1], spatialReference: t }) }, h = { sourcePoint: v(0, 0), mapPoint: new d({ x: i[0], y: i[1], spatialReference: t }) }, f = { sourcePoint: v(o, 0), mapPoint: new d({ x: a[0], y: a[1], spatialReference: t }) }, g = { sourcePoint: v(o, n), mapPoint: new d({ x: c[0], y: c[1], spatialReference: t }) };
    y(u) && y(h) && y(f) && y(g) && (ye(re, u, h, f, g), this.controlPoints = this.controlPoints.map(({ sourcePoint: b }) => (C(p, b.x, b.y), _(p, p, re), { sourcePoint: b, mapPoint: new d({ x: p[0], y: p[1], spatialReference: t }) })));
  }
  get inverseTransform() {
    return this.transform == null ? null : Me(ne(), this.transform);
  }
  get transform() {
    return this._updateTransform();
  }
  toMap(e) {
    if (e == null || this.transform == null || this.controlPoints == null || !y(this.controlPoints[0])) return null;
    C(p, e.x, e.y);
    const t = this.controlPoints[0].mapPoint.spatialReference;
    return _(p, p, this.transform), new d({ x: p[0], y: p[1], spatialReference: t });
  }
  toSource(e) {
    if (e == null || this.inverseTransform == null || this.controlPoints == null || !y(this.controlPoints[0])) return null;
    const t = this.controlPoints[0].mapPoint.spatialReference;
    return e = e.normalize(), (e = D(e, t).geometry) == null ? null : (C(p, e.x, e.y), _(p, p, this.inverseTransform), v(p[0], p[1]));
  }
  toSourceNormalized(e) {
    const t = this.toSource(e);
    return t != null && (t.x /= this.width, t.y /= this.height), t;
  }
  _updateTransform(e) {
    const { controlPoints: t, width: o, height: n } = this;
    if (!(t != null && o > 0 && n > 0)) return null;
    const [r, i, a, c] = t;
    if (!y(r)) return null;
    const u = r.mapPoint.spatialReference, h = this._projectControlPoint(i, u), f = this._projectControlPoint(a, u), g = this._projectControlPoint(c, u);
    if (!h.valid || !f.valid || !g.valid || !y(h.controlPoint)) return null;
    e == null && (e = ne());
    let b = null;
    return b = y(f.controlPoint) && y(g.controlPoint) ? ye(e, r, h.controlPoint, f.controlPoint, g.controlPoint) : y(f.controlPoint) ? mt(e, r, h.controlPoint, f.controlPoint) : ft(e, r, h.controlPoint), b.every((Oe) => Oe === 0) ? null : b;
  }
  _projectControlPoint(e, t) {
    if (!y(e)) return { valid: !0, controlPoint: e };
    const { sourcePoint: o, mapPoint: n } = e, { geometry: r, pending: i } = D(n, t);
    return i ? { valid: !1, controlPoint: null } : i || r ? { valid: !0, controlPoint: { sourcePoint: o, mapPoint: r } } : (W.getLogger(this).warn("map point could not be projected to the spatial reference", { georeference: this, controlPoint: e, sourceSpatialReference: n.spatialReference, targetSpatialReference: t }), { valid: !1, controlPoint: null });
  }
};
function y(e) {
  return e?.sourcePoint != null && e.mapPoint != null;
}
s([l({ type: [K], json: { write: { allowNull: !1, isRequired: !0, target: { controlPoints: { type: [k] }, coefficients: { type: [Number] }, spatialReference: { type: ae } } } } })], P.prototype, "controlPoints", void 0), s([q("controlPoints")], P.prototype, "readControlPoints", null), s([oe("controlPoints")], P.prototype, "writeControlPoints", null), s([l({ clonable: !1 })], P.prototype, "coords", null), s([l({ type: Number, nonNullable: !0, json: { write: !0 } })], P.prototype, "height", void 0), s([l({ readOnly: !0 })], P.prototype, "inverseTransform", null), s([l({ readOnly: !0 })], P.prototype, "transform", null), s([l({ type: Number, nonNullable: !0, json: { write: !0 } })], P.prototype, "width", void 0), P = s([x("esri.layers.support.ControlPointsGeoreference")], P);
const $ = R(), S = R(), A = R(), j = R(), I = R(), O = R(), V = R(), H = R(), ee = Math.PI / 2;
function E(e, t, o) {
  C(e, o.sourcePoint.x, o.sourcePoint.y), C(t, o.mapPoint.x, o.mapPoint.y);
}
function ft(e, t, o) {
  return E($, I, t), E(S, O, o), U(A, S, $, ee), U(j, $, S, ee), U(V, O, I, -ee), U(H, I, O, -ee), pe(e, $, S, A, j, I, O, V, H);
}
function mt(e, t, o, n) {
  return E($, I, t), E(S, O, o), E(A, V, n), he(j, $, S, 0.5), U(j, A, j, Math.PI), he(H, I, O, 0.5), U(H, V, H, Math.PI), pe(e, $, S, A, j, I, O, V, H);
}
function ye(e, t, o, n, r) {
  return E($, I, t), E(S, O, o), E(A, V, n), E(j, H, r), pe(e, $, S, A, j, I, O, V, H);
}
const yt = new Array(8).fill(0), gt = new Array(8).fill(0);
function ge(e, t, o, n, r) {
  return e[0] = t[0], e[1] = t[1], e[2] = o[0], e[3] = o[1], e[4] = n[0], e[5] = n[1], e[6] = r[0], e[7] = r[1], e;
}
function pe(e, t, o, n, r, i, a, c, u) {
  return be(e, ge(yt, t, o, n, r), ge(gt, i, a, c, u));
}
function Pt(e, t, o, n) {
  const r = Y(0, o), i = Y(0, 0), a = Y(t, 0), c = Y(t, o);
  return _(r, r, e), _(i, i, e), _(a, a, e), _(c, c, e), new ce({ rings: [[r, i, a, c, r]], spatialReference: n });
}
const X = P, B = R();
let M = class extends Q {
  constructor(t) {
    super(t), this.bottomLeft = null, this.bottomRight = null, this.topLeft = null, this.topRight = null, this.type = "corners";
  }
  get coords() {
    let { topLeft: t, topRight: o, bottomLeft: n, bottomRight: r } = this;
    if (t == null || o == null || n == null || r == null) return null;
    const i = t.spatialReference;
    return o = this.projectOrWarn(o, i), n = this.projectOrWarn(n, i), r = this.projectOrWarn(r, i), o == null || n == null || r == null ? null : new ce({ rings: [[[n.x, n.y], [t.x, t.y], [o.x, o.y], [r.x, r.y], [n.x, n.y]]], spatialReference: i });
  }
  set coords(t) {
    const { topLeft: o } = this;
    if (o == null) return;
    const n = o.spatialReference;
    if ((t = this.projectOrWarn(t, n)) == null) return;
    const { rings: [[r, i, a, c]] } = t;
    this.bottomLeft = new d({ x: r[0], y: r[1], spatialReference: n }), this.topLeft = new d({ x: i[0], y: i[1], spatialReference: n }), this.topRight = new d({ x: a[0], y: a[1], spatialReference: n }), this.bottomRight = new d({ x: c[0], y: c[1], spatialReference: n });
  }
  toSourceNormalized(t) {
    const { topLeft: o, topRight: n, bottomRight: r, bottomLeft: i } = this;
    if (t == null || o == null || n == null || r == null || i == null) return null;
    const a = o.spatialReference;
    t = t.normalize();
    const c = D(t, a).geometry;
    if (c == null) return null;
    C(B, c.x, c.y);
    const u = be(ne(), [o.x, o.y, i.x, i.y, n.x, n.y, r.x, r.y], [0, 0, 0, 1, 1, 0, 1, 1]);
    return _(B, B, u), v(B[0], B[1]);
  }
};
s([l({ clonable: !1 })], M.prototype, "coords", null), s([l({ type: d })], M.prototype, "bottomLeft", void 0), s([l({ type: d })], M.prototype, "bottomRight", void 0), s([l({ type: d })], M.prototype, "topLeft", void 0), s([l({ type: d })], M.prototype, "topRight", void 0), M = s([x("esri.layers.support.CornersGeoreference")], M);
const wt = M;
let G = class extends Q {
  constructor(e) {
    super(e), this.extent = null, this.rotation = 0, this.type = "extent-and-rotation";
  }
  get coords() {
    if (this.extent == null) return null;
    const { xmin: e, ymin: t, xmax: o, ymax: n, spatialReference: r } = this.extent;
    let i;
    if (this.rotation) {
      const { x: a, y: c } = this.extent.center, u = se(a, c, this.rotation);
      i = [u(e, t), u(e, n), u(o, n), u(o, t)], i.push(i[0]);
    } else i = [[e, t], [e, n], [o, n], [o, t], [e, t]];
    return new ce({ rings: [i], spatialReference: r });
  }
  set coords(e) {
    if (e == null || this.extent == null) return;
    const t = this.extent.spatialReference;
    if (e = this.projectOrWarn(e, t), e?.extent == null) return;
    const { rings: [[o, n, r]], extent: { center: { x: i, y: a } } } = e, c = Te(Math.PI / 2 - Math.atan2(n[1] - o[1], n[0] - o[0])), u = se(i, a, -c), [h, f] = u(o[0], o[1]), [g, b] = u(r[0], r[1]);
    this.extent = new ue({ xmin: h, ymin: f, xmax: g, ymax: b, spatialReference: t }), this.rotation = c;
  }
  toSourceNormalized(e) {
    const { extent: t, rotation: o } = this;
    if (e == null || t == null) return null;
    const { xmin: n, ymin: r, xmax: i, ymax: a, center: c, spatialReference: u } = t;
    e = e.normalize();
    const h = D(e, u).geometry;
    if (h == null) return null;
    let f = h.x, g = h.y;
    return o && ([f, g] = se(c.x, c.y, -o)(f, g)), v(fe(f, n, i, 0, 1), fe(g, a, r, 0, 1));
  }
};
function se(e, t, o) {
  const n = je(o), r = Math.cos(n), i = Math.sin(n);
  return (a, c) => [r * (a - e) + i * (c - t) + e, r * (c - t) - i * (a - e) + t];
}
s([l({ clonable: !1 })], G.prototype, "coords", null), s([l({ type: ue })], G.prototype, "extent", void 0), s([l({ type: Number })], G.prototype, "rotation", void 0), G = s([x("esri.layers.support.ExtentAndRotationGeoreference")], G);
const vt = G;
function xt(e) {
  return e?.type === "media";
}
function _e(e, t) {
  const o = He(t);
  return xt(e) && !!e.portalItem && o != null && o > J.PORTAL_ITEM;
}
function Rt(e, t, o) {
  if (!e || e.type === "control-points") return e;
  const { coords: n } = e;
  if (n?.rings[0]?.length !== 5) return null;
  const [r, i, a, c] = n.rings[0], { spatialReference: u } = n;
  return new X({ controlPoints: [{ mapPoint: new d({ x: r[0], y: r[1], spatialReference: u }), sourcePoint: v(0, o) }, { mapPoint: new d({ x: i[0], y: i[1], spatialReference: u }), sourcePoint: v(0, 0) }, { mapPoint: new d({ x: a[0], y: a[1], spatialReference: u }), sourcePoint: v(t, 0) }, { mapPoint: new d({ x: c[0], y: c[1], spatialReference: u }), sourcePoint: v(t, o) }], width: t, height: o });
}
const bt = { key: "type", base: Q, typeMap: { "control-points": X, corners: wt, "extent-and-rotation": vt } }, _t = { key: "type", base: Q, typeMap: { "control-points": X } };
let N = class extends Ne(ve(xe)) {
  constructor(e) {
    super(e), this.georeference = null, this.opacity = 1;
  }
  readGeoreference(e) {
    return X.fromJSON(e);
  }
  writeGeoreference(e, t, o, n) {
    const r = n?.resources?.pendingOperations, i = () => {
      const a = Rt(this.georeference, this.contentWidth, this.contentHeight);
      if (a) {
        if (e.type !== "control-points" && W.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`), a.controlPoints?.length !== 4 && n?.messages) return void n.messages.push(new T("property:unsupported", "only 'control-points' georeference with 4 control points may be persisted."));
        t[o] = a.write({}, n);
      }
    };
    if (e.type !== "control-points" && !this.loaded && r) return t[o] = {}, void r.push(this.load().then(i));
    i();
  }
  get contentWidth() {
    return 0;
  }
  get contentHeight() {
    return 0;
  }
  toSource(e) {
    const { georeference: t, contentWidth: o, contentHeight: n } = this;
    if (e == null || t == null || o === 0 || n === 0) return null;
    const r = t.toSourceNormalized(e);
    return r == null ? null : (r.x *= o, r.y *= n, r);
  }
};
s([l({ types: bt, json: { write: !0, types: _t } })], N.prototype, "georeference", void 0), s([q("georeference")], N.prototype, "readGeoreference", null), s([oe("georeference")], N.prototype, "writeGeoreference", null), s([l({ json: { read: !1, write: !1 } })], N.prototype, "opacity", void 0), N = s([x("esri.layers.support.MediaElementBase")], N);
const de = N;
let w = class extends de {
  constructor(t) {
    super(t), this.animationOptions = null, this.content = null, this.image = null, this.type = "image", this.image = null;
  }
  load() {
    const t = this.image;
    if (typeof t == "string") {
      const o = pt(t).then((n) => {
        this._set("content", n);
      });
      this.addResolvingPromise(o);
    } else if (t instanceof HTMLImageElement) {
      const o = t.decode().then(() => {
        this._set("content", t);
      });
      this.addResolvingPromise(o);
    } else t ? this._set("content", t) : this.addResolvingPromise(Promise.reject(new T("image-element:invalid-image-type", "Invalid image type", { image: t })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return this.content == null ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalWidth : this.content.width;
  }
  get contentHeight() {
    return this.content == null ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalHeight : this.content.height;
  }
  readImage(t, o, n) {
    return Ce(o.url, n);
  }
  writeImage(t, o, n, r) {
    if (t == null) return;
    const i = r?.portalItem, a = r?.resources;
    if (!i || !a) return void (typeof t == "string" && (o[n] = me(t, r)));
    const c = $t(t) ? t : null;
    if (c) {
      if (Ae(c) == null) return void (o[n] = c);
      const u = me(c, { ...r, verifyItemRelativeUrls: r?.verifyItemRelativeUrls ? { writtenUrls: r.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, Ve.NO);
      if (i && u && !We(u)) return a.toKeep.push({ resource: i.resourceFromPath(u), compress: !1 }), void (o[n] = u);
    }
    o[n] = "<pending>", a.pendingOperations.push(St(t).then((u) => {
      const h = Ot(u, i);
      o[n] = h.itemRelativeUrl, a.toAdd.push({ resource: h, content: { type: "blob", blob: u }, compress: !1, finish: (f) => {
        this.image = f.url;
      } });
    }));
  }
  write(t, o) {
    const n = super.write(t, o);
    return "mediaType" in n && !n.url && delete n.mediaType, n;
  }
};
s([l()], w.prototype, "animationOptions", void 0), s([l({ readOnly: !0 })], w.prototype, "content", void 0), s([l({ readOnly: !0 })], w.prototype, "contentWidth", null), s([l({ readOnly: !0 })], w.prototype, "contentHeight", null), s([l({ json: { name: "url", type: String, write: { overridePolicy: (e, t, o) => ({ enabled: !_e(o?.layer, o?.origin) }) } } })], w.prototype, "image", void 0), s([q("image", ["url"])], w.prototype, "readImage", null), s([oe("image")], w.prototype, "writeImage", null), s([l({ readOnly: !0, json: { read: !1, write: { target: "mediaType", ignoreOrigin: !0 } } })], w.prototype, "type", void 0), w = s([x("esri.layers.support.ImageElement")], w);
const $e = w;
function $t(e) {
  return typeof e == "string" && !Re(e) && !Ge(e);
}
async function St(e) {
  return typeof e == "string" ? Re(e) ? ze(e) : (await Ue(e, { responseType: "blob" })).data : new Promise((t) => It(e).toBlob(t));
}
function It(e) {
  if (e instanceof HTMLCanvasElement) return e;
  const t = e instanceof HTMLImageElement ? e.naturalWidth : e.width, o = e instanceof HTMLImageElement ? e.naturalHeight : e.height, n = document.createElement("canvas"), r = n.getContext("2d");
  return n.width = t, n.height = o, e instanceof HTMLImageElement ? r.drawImage(e, 0, 0, e.width, e.height) : e instanceof ImageData && r.putImageData(e, 0, 0), n;
}
function Ot(e, t) {
  const o = Be(), n = `${Fe("media", o)}.${dt({ type: "blob", blob: e })}`;
  return t.resourceFromPath(n);
}
let L = class extends de {
  constructor(e) {
    super(e), this.autoplay = !0, this.content = null, this.type = "video";
  }
  load() {
    const e = this.video;
    if (typeof e == "string") {
      const t = document.createElement("video");
      t.src = e, t.crossOrigin = "anonymous", t.autoplay = !0, t.muted = !0, t.loop = !0, t.playsInline = !0, this.addResolvingPromise(this._loadVideo(t).then(() => {
        this._set("content", t);
      }));
    } else e instanceof HTMLVideoElement ? this.addResolvingPromise(this._loadVideo(e).then(() => {
      this._set("content", e);
    })) : this.addResolvingPromise(Promise.reject(new T("video-element:invalid-video-type", "Invalid video type", { video: e })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return this.content?.videoWidth ?? 0;
  }
  get contentHeight() {
    return this.content?.videoHeight ?? 0;
  }
  set video(e) {
    this.loadStatus === "not-loaded" ? this._set("video", e) : W.getLogger(this).error("#video", "video cannot be changed after the element is loaded.");
  }
  _loadVideo(e) {
    return new Promise((t, o) => {
      const n = ke(e, "canplay", () => {
        this.removeHandles("canplay"), this.autoplay ? e.play().then(t, o) : t();
      });
      this.addHandles(n, "canplay"), e.crossOrigin !== "anonymous" && (e.crossOrigin = "anonymous", e.src?.includes("blob:") || (e.src = e.src));
    });
  }
};
s([l()], L.prototype, "autoplay", void 0), s([l({ readOnly: !0 })], L.prototype, "content", void 0), s([l({ readOnly: !0 })], L.prototype, "contentWidth", null), s([l({ readOnly: !0 })], L.prototype, "contentHeight", null), s([l()], L.prototype, "video", null), L = s([x("esri.layers.support.VideoElement")], L);
const Se = L, Et = { key: "type", defaultKeyValue: "image", base: de, typeMap: { image: $e, video: Se } }, Pe = te.ofType(Et);
let z = class extends xe.LoadableMixin(Ke(Je.EventedAccessor)) {
  constructor(e) {
    super(e), this._index = new ht(), this._elementViewsMap = /* @__PURE__ */ new Map(), this._elementsIndexes = /* @__PURE__ */ new Map(), this._elementsChangedHandler = (t) => {
      for (const n of t.removed) {
        const r = this._elementViewsMap.get(n);
        this._elementViewsMap.delete(n), this._index.delete(r), this.removeHandles(r), r.destroy(), this.notifyChange("fullExtent");
      }
      const { spatialReference: o } = this;
      for (const n of t.added) {
        if (this._elementViewsMap.get(n)) continue;
        const r = new ct({ spatialReference: o, element: n });
        this._elementViewsMap.set(n, r);
        const i = De(() => r.coords, () => this._updateIndexForElement(r, !1));
        this._updateIndexForElement(r, !0), this.addHandles(i, r);
      }
      this._elementsIndexes.clear(), this.elements.forEach((n, r) => this._elementsIndexes.set(n, r)), this.emit("refresh");
    }, this.elements = new Pe();
  }
  async load(e) {
    if (qe(e), !this.spatialReference) {
      const t = this.elements.find((o) => o.georeference?.coords != null);
      this._set("spatialReference", t ? t.georeference.coords.spatialReference : ae.WGS84);
    }
    return this._elementsChangedHandler({ added: this.elements.items, removed: [] }), this.addHandles(this.elements.on("change", this._elementsChangedHandler)), this;
  }
  destroy() {
    this._index.clear(), this._elementViewsMap.clear(), this._elementsIndexes.clear();
  }
  set elements(e) {
    this._set("elements", Qe(e, this._get("elements"), Pe));
  }
  get fullExtent() {
    if (this.loadStatus === "not-loaded") return null;
    const e = this._index.fullBounds;
    return e == null ? null : new ue({ xmin: e[0], ymin: e[1], xmax: e[2], ymax: e[3], spatialReference: this.spatialReference });
  }
  set spatialReference(e) {
    this.loadStatus === "not-loaded" ? this._set("spatialReference", e) : W.getLogger(this).error("#spatialReference", "spatialReference cannot be changed after the source is loaded.");
  }
  async queryElements(e, t) {
    await this.load(), await Xe(e.spatialReference, this.spatialReference, null, t);
    const o = Ye(e.spatialReference, this.spatialReference) ? e : Ze(e, this.spatialReference);
    if (!o) return [];
    const n = o.normalize(), r = [];
    for (const i of n) this._index.forEachInBounds(et(i), ({ normalizedCoords: a, element: c }) => {
      a != null && tt(i, a) && r.push(c);
    });
    return r.sort((i, a) => this._elementsIndexes.get(i) - this._elementsIndexes.get(a)), r;
  }
  hasElement(e) {
    return this.elements.includes(e);
  }
  _updateIndexForElement(e, t) {
    const o = e.normalizedBounds, n = this._index.has(e), r = o != null;
    this._index.delete(e), r && this._index.set(e, o), this.notifyChange("fullExtent"), t || (n !== r ? this.emit("refresh") : this.emit("change", { element: e.element }));
  }
};
s([l()], z.prototype, "elements", null), s([l({ readOnly: !0 })], z.prototype, "fullExtent", null), s([l()], z.prototype, "spatialReference", null), z = s([x("esri.layers.support.LocalMediaElementSource")], z);
const F = z;
function le(e) {
  return typeof e == "object" && e != null && "type" in e;
}
function Ie(e) {
  return le(e) && e.type === "image";
}
let m = class extends nt(ot(rt(st(ve(at))))) {
  constructor(e) {
    super(e), this.effectiveSource = null, this.georeference = null, this.copyright = null, this.operationalLayerType = "MediaLayer", this.spatialReference = null, this.type = "media", this._debouncedSaveOperations = it(async (t, o, n) => {
      const { save: r, saveAs: i } = await import("./mediaLayerUtils-SqSrMrzY.js");
      switch (t) {
        case Z.SAVE:
          return r(this, o);
        case Z.SAVE_AS:
          return i(this, n, o);
      }
    }), this.source = new F();
  }
  load(e) {
    return this.addResolvingPromise(this._doLoad(e)), Promise.resolve(this);
  }
  async _doLoad(e) {
    await this.loadFromPortal({ supportedTypes: ["Media Layer"] }, e);
    let t = this.source;
    if (!t) throw new T("media-layer:source-missing", "Set 'MediaLayer.source' before loading the layer.");
    const o = this._getSourceOverride(t, this.georeference);
    o && (this.setAtOrigin("source", o, "web-map"), this.setAtOrigin("source", o, "web-scene"), t = o);
    const n = le(t) ? new F({ elements: new te([t]) }) : t;
    this._set("effectiveSource", n), this.spatialReference && (n.spatialReference = this.spatialReference), await n.load(e), this.spatialReference = n.spatialReference;
  }
  destroy() {
    this.effectiveSource?.destroy(), this.effectiveSource !== this.source && this.source?.destroy();
  }
  readGeoreference(e, t) {
    return e && "itemId" in t && t.itemId ? e : void 0;
  }
  get fullExtent() {
    return this.loaded ? this.effectiveSource.fullExtent : null;
  }
  set source(e) {
    this.loadStatus !== "loaded" && this.loadStatus !== "failed" ? this._set("source", e) : W.getLogger(this).error("#source", "source cannot be changed after the layer is loaded.");
  }
  castSource(e) {
    return e ? Array.isArray(e) ? new F({ elements: new te(e) }) : e instanceof te ? new F({ elements: e }) : e : null;
  }
  readSource(e, t, o) {
    if ("itemId" in t && t.itemId) return;
    const n = this._createSource(t);
    return n?.read(t, o), n;
  }
  writeSource(e, t, o, n) {
    if (e && e instanceof F) {
      const r = e.elements.length;
      if (r !== 1) return void (n?.messages && n.messages.push(new T("media-layer:unsupported-source", `local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));
      e = e.elements.at(0);
    }
    Ie(e) ? e.write(t, n) : n?.messages && (e ? n.messages.push(new T("media-layer:unsupported-source", "only media elements of type 'ImageElement' can be persisted")) : n.messages.push(new T("media-layer:unsupported-source", "the media layer is missing a source")));
  }
  async save(e) {
    return this._debouncedSaveOperations(Z.SAVE, e);
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(Z.SAVE_AS, t, e);
  }
  _createSource(e) {
    if ("mediaType" in e) switch (e.mediaType) {
      case "image":
        return new $e();
      case "video":
        return new Se();
    }
    return null;
  }
  _getSourceOverride(e, t) {
    if (le(e) && this.originIdOf("source") === J.PORTAL_ITEM && t && (this.originIdOf("georeference") === J.WEB_MAP || this.originIdOf("georeference") === J.WEB_SCENE)) {
      const o = e.toJSON(), n = this._createSource(o);
      return n.read({ ...o }, { origin: "portal-item" }), n.read({ georeference: t }, { origin: "web-map" }), n.read({ georeference: t }, { origin: "web-scene" }), n;
    }
    return null;
  }
};
s([l({ readOnly: !0 })], m.prototype, "effectiveSource", void 0), s([l({ readOnly: !0, json: { read: !1, write: !1, origins: { "web-document": { read: !0 } } } })], m.prototype, "georeference", void 0), s([q("web-document", "georeference")], m.prototype, "readGeoreference", null), s([l({ type: String })], m.prototype, "copyright", void 0), s([l({ readOnly: !0 })], m.prototype, "fullExtent", null), s([l({ type: ["MediaLayer"] })], m.prototype, "operationalLayerType", void 0), s([l({ type: ["show", "hide"] })], m.prototype, "listMode", void 0), s([l({ nonNullable: !0, json: { write: { enabled: !0, allowNull: !1, target: { url: { type: String }, mediaType: { type: ["image"] }, georeference: { type: X } }, overridePolicy(e, t, o) {
  return { enabled: !0, allowNull: !1, ignoreOrigin: _e(this, o?.origin) && Ie(e) && !!e.georeference && e.originIdOf("georeference") > J.PORTAL_ITEM };
} } } })], m.prototype, "source", null), s([lt("source")], m.prototype, "castSource", null), s([q("source", ["url"])], m.prototype, "readSource", null), s([oe("source")], m.prototype, "writeSource", null), s([l()], m.prototype, "spatialReference", void 0), s([l({ readOnly: !0 })], m.prototype, "type", void 0), m = s([x("esri.layers.MediaLayer")], m);
const Gt = m;
export {
  Gt as default
};
//# sourceMappingURL=MediaLayer-Rh9ONhIz.js.map
