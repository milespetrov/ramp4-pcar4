import { a as ae, c as ie, f as z, e as w } from "./UpdateTracking2D-CVjYH-IK.js";
import { N as ee, m as ne, S as F, g as oe, i as ce, a as he, T as le, s as ue, v as de, _ as me, c as fe, h as pe, o as _e, b as ge, d as xe, e as ye } from "./PieChartMeshWriter-D1XupAaj.js";
import { ji as ve, dl as C, jj as Me, jk as G, d8 as j, bN as N, jl as X, fH as S, jm as Y, jn as O, jo as Pe, jp as H, jq as we, dt as V, fD as L, bm as B, aa as be, s as Ie, D as Se } from "./main-Bnvk3STL.js";
import { r as E, i as Le, o as ke } from "./LabelMetric-D6vVdLEw.js";
import { t as A } from "./constants-DVpDF9P6.js";
import { o as $e } from "./grouping-CCwTHtUC.js";
import { s as ze } from "./AttributeStore-D4yj_i5m.js";
function Q(c, e, r) {
  return c[0] = e[0] - r[0], c[1] = e[1] - r[1], c;
}
function te(c, e) {
  return Math.sqrt(c * c + e * e);
}
function J(c) {
  const e = te(c[0], c[1]);
  c[0] /= e, c[1] /= e;
}
function Be(c, e) {
  return te(c[0] - e[0], c[1] - e[1]);
}
function Ee(c, e) {
  return c[e + 1];
}
function se(c) {
  return c.length - 1;
}
function Ae(c) {
  let e = 0;
  for (let r = 0; r < se(c); r++) e += De(c, r);
  return e;
}
function De(c, e, r = 1) {
  let [t, s] = Ee(c, e);
  return [t, s] = [Math.round(t), Math.round(s)], Math.sqrt(t * t + s * s) * r;
}
class T {
  constructor(e, r, t, s, a) {
    this._segments = e, this._index = r, this._distance = t, this._xStart = s, this._yStart = a, this._done = !1;
  }
  static create(e) {
    return new T(e, 0, 0, e[0][0], e[0][1]);
  }
  clone() {
    return new T(this._segments, this._index, this._distance, this.xStart, this.yStart);
  }
  equals(e) {
    return this._index === e._index || e._index === this._index - 1 && (this._distance === 0 || e._distance === 1) || e._index === this._index + 1 && (this._distance === 1 || e._distance === 0);
  }
  leq(e) {
    return this._index < e._index || this._index === e._index && this._distance <= e._distance;
  }
  geq(e) {
    return this._index > e._index || this._index === e._index && this._distance >= e._distance;
  }
  get _segment() {
    return this._segments[this._index + 1];
  }
  get angle() {
    const e = this.dy, r = (0 * e + -1 * -this.dx) / (1 * this.length);
    let t = Math.acos(r);
    return e > 0 && (t = 2 * Math.PI - t), t;
  }
  get xStart() {
    return this._xStart;
  }
  get yStart() {
    return this._yStart;
  }
  get x() {
    return this.xStart + this.distance * this.dx;
  }
  get y() {
    return this.yStart + this.distance * this.dy;
  }
  get dx() {
    return this._segment[0];
  }
  get dy() {
    return this._segment[1];
  }
  get xMidpoint() {
    return this.xStart + 0.5 * this.dx;
  }
  get yMidpoint() {
    return this.yStart + 0.5 * this.dy;
  }
  get xEnd() {
    return this.xStart + this.dx;
  }
  get yEnd() {
    return this.yStart + this.dy;
  }
  get length() {
    const { dx: e, dy: r } = this;
    return Math.sqrt(e * e + r * r);
  }
  get remainingLength() {
    return this.length * (1 - this._distance);
  }
  get backwardLength() {
    return this.length * this._distance;
  }
  get distance() {
    return this._distance;
  }
  get done() {
    return this._done;
  }
  hasPrev() {
    return this._index - 1 >= 0;
  }
  hasNext() {
    return this._index + 1 < se(this._segments);
  }
  next() {
    return this.hasNext() ? (this._xStart += this.dx, this._yStart += this.dy, this._distance = 0, this._index += 1, this) : null;
  }
  prev() {
    return this.hasPrev() ? (this._index -= 1, this._xStart -= this.dx, this._yStart -= this.dy, this._distance = 1, this) : (this._done = !0, null);
  }
  _seekBackwards(e, r) {
    const t = this.backwardLength;
    if (e <= t) return this._distance = (t - e) / this.length, this;
    let s = this.backwardLength;
    for (; this.prev(); ) {
      if (s + this.length > e) return this._seekBackwards(e - s);
      s += this.length;
    }
    return this._distance = 0, r ? this : null;
  }
  seek(e, r = !1) {
    if (e < 0) return this._seekBackwards(Math.abs(e), r);
    if (e <= this.remainingLength) return this._distance = (this.backwardLength + e) / this.length, this;
    let t = this.remainingLength;
    for (; this.next(); ) {
      if (t + this.length > e) return this.seek(e - t, r);
      t += this.length;
    }
    return this._distance = 1, r ? this : null;
  }
}
function Z(c, e, r, t = !0) {
  const s = Ae(c), a = T.create(c), i = s / 2;
  if (!t) return a.seek(i), void (Math.abs(a.x) < A && Math.abs(a.y) < A && r(a.clone(), 0, i + 0 * e, s));
  const h = Math.max((s - e) / 2, 0), l = Math.floor(h / e), d = i - l * e;
  a.seek(d);
  for (let o = -l; o <= l; o++) Math.abs(a.x) < A && Math.abs(a.y) < A && r(a.clone(), o, i + o * e, s), a.seek(e);
}
function W(c, e) {
  const r = e;
  for (let t = 0; t < c.length; t++) {
    let s = c[t];
    Re(s, r);
    const a = [];
    a.push(s[0]);
    for (let i = 1; i < s.length; i++) {
      const [h, l] = s[i - 1], [d, o] = s[i], n = d - h, u = o - l;
      a.push([n, u]);
    }
    c[t] = a, s = a;
  }
  return c;
}
function Re(c, e) {
  if (e <= 0) return;
  const t = c.length;
  if (t < 3) return;
  const s = [];
  let a = 0;
  s.push(0);
  for (let n = 1; n < t; n++) a += Be(c[n], c[n - 1]), s.push(a);
  e = Math.min(e, 0.2 * a);
  const i = [];
  i.push(c[0][0]), i.push(c[0][1]);
  const h = c[t - 1][0], l = c[t - 1][1], d = Q([0, 0], c[0], c[1]);
  J(d), c[0][0] += e * d[0], c[0][1] += e * d[1], Q(d, c[t - 1], c[t - 2]), J(d), c[t - 1][0] += e * d[0], c[t - 1][1] += e * d[1];
  for (let n = 1; n < t; n++) s[n] += e;
  s[t - 1] += e;
  const o = 0.5 * e;
  for (let n = 1; n < t - 1; n++) {
    let u = 0, p = 0, _ = 0;
    for (let m = n - 1; m >= 0 && !(s[m + 1] < s[n] - o); m--) {
      const f = o + s[m + 1] - s[n], g = s[m + 1] - s[m], x = s[n] - s[m] < o ? 1 : f / g;
      if (Math.abs(x) < 1e-6) break;
      const y = x * x, I = x * f - 0.5 * y * g, P = x * g / e, v = c[m + 1], M = c[m][0] - v[0], b = c[m][1] - v[1];
      u += P / I * (v[0] * x * f + 0.5 * y * (f * M - g * v[0]) - y * x * g * M / 3), p += P / I * (v[1] * x * f + 0.5 * y * (f * b - g * v[1]) - y * x * g * b / 3), _ += P;
    }
    for (let m = n + 1; m < t && !(s[m - 1] > s[n] + o); m++) {
      const f = o - s[m - 1] + s[n], g = s[m] - s[m - 1], x = s[m] - s[n] < o ? 1 : f / g;
      if (Math.abs(x) < 1e-6) break;
      const y = x * x, I = x * f - 0.5 * y * g, P = x * g / e, v = c[m - 1], M = c[m][0] - v[0], b = c[m][1] - v[1];
      u += P / I * (v[0] * x * f + 0.5 * y * (f * M - g * v[0]) - y * x * g * M / 3), p += P / I * (v[1] * x * f + 0.5 * y * (f * b - g * v[1]) - y * x * g * b / 3), _ += P;
    }
    i.push(u / _), i.push(p / _);
  }
  i.push(h), i.push(l);
  for (let n = 0, u = 0; n < t; n++) c[n][0] = i[u++], c[n][1] = i[u++];
}
const D = 1, k = 0, Te = 128, Fe = we((c) => {
  let e = 0;
  if (c === 0) return 1 / 0;
  for (; !(c % 2); ) e++, c /= 2;
  return e;
});
class Ge extends ee {
  constructor() {
    super(...arguments), this._zoomLevel = 0;
  }
  _write(e, r, t, s) {
    if (this._zoomLevel = s || 0, t != null) throw new Error("InternalError: EffectGeometry not support for LabelMeshWriter");
    switch (r.geometryType) {
      case "esriGeometryPoint": {
        const a = r.readXForDisplay(), i = r.readYForDisplay();
        return this._writePoint(e, a, i, r);
      }
      case "esriGeometryEnvelope":
      case "esriGeometryPolygon":
      case "esriGeometryMultipoint": {
        const a = r.readCentroidForDisplay();
        if (!a) return;
        const [i, h] = a.coords;
        return this._writePoint(e, i, h, r);
      }
      case "esriGeometryPolyline":
        this._writeLines(e, r);
    }
  }
  _writePoint(e, r, t, s) {
    const a = this._getShaping();
    if (!a) return;
    let i = this._getPointReferenceBounds();
    i || (i = { offsetX: 0, offsetY: 0, size: 0 });
    const h = a.boundsT, l = ae(this.evaluatedMeshParams.horizontalAlignment), d = ie(this.evaluatedMeshParams.verticalAlignment), o = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, n = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0, u = z(s.getDisplayId());
    e.metricStart(new E(u, r, t, l, d, o, n, i)), e.metricBoxWrite(h), this._writeGlyphs(e, s.getDisplayId(), r, t, a, 0, i), e.metricEnd();
  }
  _getPointReferenceBounds() {
    if (!this._references) return null;
    for (const e of this._references) {
      const r = e.getBoundsInfo();
      if (r) return r;
    }
    return null;
  }
  _writeLines(e, r) {
    const { scaleInfo: t, verticalAlignment: s } = this.evaluatedMeshParams, a = this.evaluatedMeshParams.repeatLabelDistance || 128, i = this._getShaping("middle");
    if (!i) return;
    const h = (d, o, n, u) => this._placeSubdivGlyphs(d, o, n, u), l = (i.bounds.width + a) / (1 << D);
    this._current = { out: e, id: r.getDisplayId(), shaping: i, zoomRange: ne(t, this.getTileInfo()), referenceBounds: this._getPointReferenceBounds() || { offsetX: 0, offsetY: 0, size: 0 }, offsetDirection: null }, this._verticalPlacement = s === "bottom" ? "above" : s === "top" ? "below" : null, this._verticalPlacement ? this._writeAboveAndBelowAlong(r, h, l) : this._writeCenterAlong(r, h, l);
  }
  _writeAboveAndBelowAlong(e, r, t) {
    const { repeatLabel: s, fontSize: a } = this.evaluatedMeshParams, { shaping: i } = this._current, h = j(a), l = e.readGeometryForDisplay();
    if (!l) return;
    const d = new V();
    ve(d, l, !1, !1, "esriGeometryPolyline", 1);
    const o = K(new V(), d, h), n = K(new V(), d, -h), u = C(n, "esriGeometryPolyline", !1, !1), p = C(o, "esriGeometryPolyline", !1, !1), _ = W(p.paths, i.bounds.width), m = W(u.paths, i.bounds.width);
    this._current.offsetDirection = "above";
    for (const f of _) Z(f, t, r, !!s);
    this._current.offsetDirection = "below";
    for (const f of m) Z(f, t, r, !!s);
  }
  _writeCenterAlong(e, r, t) {
    const { repeatLabel: s } = this.evaluatedMeshParams, { shaping: a } = this._current, i = W(e.readLegacyGeometryForDisplay().paths, a.bounds.width);
    for (const h of i) Z(h, t, r, !!s);
  }
  _placeSubdivGlyphs(e, r, t, s) {
    const { allowOverrun: a, labelPosition: i, repeatLabelDistance: h } = this.evaluatedMeshParams, l = this._current.zoomRange[0], d = Fe(r), o = this._current.shaping.bounds.width / (1 << D), n = Math.sqrt(h || Te) / (1 << D), u = Math.min(t, s - t), p = this._current.shaping.isMultiline ? F : Math.log2(u / (n + o / 2)), _ = r === 0 ? p : Math.min(d, p), m = Math.max(l, this._zoomLevel + D - _), f = this._zoomLevel - m, g = this._current.shaping.bounds.width / 2 * 2 ** f;
    this._current.shaping.isMultiline ? r === 0 && this._placeStraight(e, m) : a && f < 0 ? this._placeStraightAlong(e, l) : i === "parallel" ? this._placeStraightAlong(e, m) : i === "curved" && this._placeCurved(e, m, g);
  }
  _placeStraight(e, r) {
    const { out: t, id: s, shaping: a, referenceBounds: i } = this._current, { x: h, y: l } = e, d = z(s), o = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, n = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    t.metricStart(new E(d, e.x, e.y, 0, 0, o, n, null)), t.metricBoxWrite(a.boundsT);
    const u = e.angle * (180 / Math.PI) % 360, p = (e.angle * (180 / Math.PI) + 180) % 360;
    this._writeGlyphs(t, s, h, l, a, 0, i, { clipAngle: u, mapAligned: !0, isLineLabel: !0, minZoom: r }), this._writeGlyphs(t, s, h, l, a, 0, i, { clipAngle: p, mapAligned: !0, isLineLabel: !0, minZoom: r }), t.metricEnd();
  }
  _placeCurved(e, r, t) {
    const { out: s, id: a } = this._current, i = e.clone(), h = e.angle * (180 / Math.PI) % 360, l = (e.angle * (180 / Math.PI) + 180) % 360, d = z(a), o = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, n = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    s.metricStart(new E(d, e.x, e.y, 0, 0, o, n, null)), this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || (this._placeFirst(i, r, 1, h), this._placeBack(e, i, r, t, 1, h), this._placeForward(e, i, r, t, 1, h)), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || (this._placeFirst(i, r, 0, l), this._placeBack(e, i, r, t, 0, l), this._placeForward(e, i, r, t, 0, l)), s.metricEnd();
  }
  _placeStraightAlong(e, r) {
    const { out: t, id: s, shaping: a, zoomRange: i, referenceBounds: h } = this._current, { boxBorderLineColor: l, boxBackgroundColor: d } = this.evaluatedMeshParams, o = e.clone(), n = e.angle * (180 / Math.PI) % 360, u = (e.angle * (180 / Math.PI) + 180) % 360;
    if (a.glyphs.length > 0 && !(!l && !d)) {
      const f = Math.max(r, i[0], 0), g = Math.min(F, i[1]), x = Me(G(), -e.angle), y = { minZoom: f, maxZoom: g, clipAngle: n, mapAligned: !0, isLineLabel: !0 }, I = j(this.evaluatedMeshParams.offsetX), P = j(this.evaluatedMeshParams.offsetY);
      if (!this._verticalPlacement || this._verticalPlacement === this._current.offsetDirection) {
        const v = N(I, -1 * P), [M, b] = a.shapeBackground(X(G(), x, v));
        t.recordStart(this.instanceId, this.attributeLayout, a.glyphs[0].textureBinding);
        const $ = 2 * Math.max(M.width, M.height);
        t.recordBounds(e.x + M.x, e.y + M.y, $, $), this._writeTextBox(t, s, e.x, e.y, b, h, y), t.recordEnd();
      }
      if (!this._verticalPlacement || this._verticalPlacement !== this._current.offsetDirection) {
        const v = N(I, P), [M, b] = a.shapeBackground(X(G(), x, v));
        y.clipAngle = u, t.recordStart(this.instanceId, this.attributeLayout, a.glyphs[0].textureBinding);
        const $ = 2 * Math.max(M.width, M.height);
        t.recordBounds(e.x + M.x, e.y + M.y, $, $), this._writeTextBox(t, s, e.x, e.y, b, h, y), t.recordEnd();
      }
    }
    const p = z(s), _ = this.evaluatedMeshParams.scaleInfo?.maxScale ?? 0, m = this.evaluatedMeshParams.scaleInfo?.minScale ?? 0;
    t.metricStart(new E(p, e.x, e.y, 0, 0, _, m, null)), this._verticalPlacement && this._verticalPlacement !== this._current.offsetDirection || this._placeFirst(o, r, 1, n, !0), this._verticalPlacement && this._verticalPlacement === this._current.offsetDirection || this._placeFirst(o, r, 0, u, !0), t.metricEnd();
  }
  _placeBack(e, r, t, s, a, i) {
    const h = e.clone();
    let l = e.backwardLength + k;
    for (; h.prev() && !(l >= s); ) this._placeOnSegment(h, r, l, t, -1, a, i), l += h.length + k;
  }
  _placeForward(e, r, t, s, a, i) {
    const h = e.clone();
    let l = e.remainingLength + k;
    for (; h.next() && !(l >= s); ) this._placeOnSegment(h, r, l, t, 1, a, i), l += h.length + k;
  }
  _placeFirst(e, r, t, s, a = !1) {
    const { out: i, id: h, shaping: l, zoomRange: d, referenceBounds: o } = this._current, n = l.glyphs;
    for (const u of n) {
      const p = u.x > l.bounds.x ? t : 1 - t, _ = p * e.remainingLength + (1 - p) * e.backwardLength, m = Math.abs(u.x + u.width / 2 - l.bounds.x), f = Math.max(0, this._zoomLevel + Math.log2(m / (_ + k))), g = Math.max(r, a ? 0 : f);
      u.maxZoom = Math.min(d[1], F), u.angle = e.angle + (1 - t) * Math.PI, u.minZoom = Math.max(d[0], g), this._writeLineGlyph(i, h, e.x, e.y, l.bounds, u, s, o, !0), t && this._isVisible(u.minZoom, u.maxZoom) && i.metricBoxWrite(u.bounds);
    }
  }
  _placeOnSegment(e, r, t, s, a, i, h) {
    const { out: l, id: d, shaping: o, referenceBounds: n } = this._current, u = o.glyphs, p = e.dx / e.length, _ = e.dy / e.length, m = { x: e.x + t * -a * p, y: e.y + t * -a * _ };
    for (const f of u) {
      const g = f.x > o.bounds.x ? i : 1 - i;
      if (!(g && a === 1 || !g && a === -1)) continue;
      const x = Math.abs(f.x + f.width / 2 - o.bounds.x), y = Math.max(0, this._zoomLevel + Math.log2(x / t) - 0.1), I = Math.max(s, this._zoomLevel + Math.log2(x / (t + e.length + k)));
      if (y !== 0 && (f.angle = e.angle + (1 - i) * Math.PI, f.minZoom = I, f.maxZoom = y, this._writeLineGlyph(l, d, m.x, m.y, o.bounds, f, h, n, !0), i && this._isVisible(f.minZoom, f.maxZoom))) {
        const P = f.bounds, v = e.x - r.x, M = e.y - r.y, b = new Le(P.center[0] + v, P.center[1] + M, P.width, P.height);
        l.metricBoxWrite(b);
      }
    }
  }
  _writeLineGlyph(e, r, t, s, a, i, h, l, d) {
    const o = t + a.x, n = s + a.y, u = 2 * (this.evaluatedMeshParams.minPixelBuffer ? this.evaluatedMeshParams.minPixelBuffer / this._textMeshTransformProps.fontSize : 1), p = Math.max(a.width, a.height) * u;
    e.recordStart(this.instanceId, this.attributeLayout, i.textureBinding), e.recordBounds(o, n, p, p);
    const { texcoords: _, offsets: m } = i, f = this._textMeshTransformProps.fontSize;
    this._writeQuad(e, r, t, s, { texcoords: _, offsets: m, fontSize: f, color: oe(this.evaluatedMeshParams.color), isBackground: !1, referenceBounds: l, minZoom: Math.max(this._current.zoomRange[0], i.minZoom), maxZoom: Math.min(this._current.zoomRange[1], i.maxZoom), clipAngle: h, mapAligned: d, isLineLabel: !0 }), e.recordEnd();
  }
  _isVisible(e, r) {
    const t = this._zoomLevel;
    return e <= t && t <= r;
  }
}
function K(c, e, r) {
  const { coords: t, lengths: s } = e, a = L(), i = L(), h = L(), l = L(), d = L(), o = L(), n = 2;
  let u = 0;
  for (let p = 0; p < s.length; p++) {
    const _ = s[p];
    for (let m = 0; m < _; m++) {
      const f = n * (m + u - 1), g = n * (m + u), x = n * (m + u + 1);
      m > 0 ? S(a, t[f], t[f + 1]) : S(a, 0, 0), S(i, t[g], t[g + 1]), m < _ - 1 ? S(h, t[x], t[x + 1]) : S(h, 0, 0), m === 0 ? S(l, 0, 0) : (Y(l, i, a), O(l, l), S(l, l[1], -l[0])), m === _ - 1 ? S(d, 0, 0) : (Y(d, h, i), O(d, d), S(d, d[1], -d[0])), Pe(o, l, d), O(o, o);
      const y = o[0] * d[0] + o[1] * d[1];
      y !== 0 && H(o, o, y), H(o, o, r), c.coords.push(i[0] + o[0], i[1] + o[1]);
    }
    c.lengths.push(_), u += _;
  }
  return c;
}
class je extends ze {
  constructor(e) {
    super(), this._value = e;
  }
  resize(e) {
  }
  read(e, r) {
    return this._value;
  }
  readWithDefault(e, r, t) {
    return this._value;
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
}
const Oe = () => Se.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");
async function R(c, e, r = !1) {
  const { defaultValue: t, valueExpressionInfo: s, value: a } = e;
  if (s) {
    const { expression: i } = s, h = await c.createComputedField({ expression: i }, r);
    return h ? { ...e, computed: h, defaultValue: t } : null;
  }
  return { ...e, computed: new je(a), defaultValue: t };
}
async function U(c, e) {
  const { defaultValue: r, valueExpressionInfo: t } = e, { expression: s } = t, a = await c.createComputedField({ expression: s });
  return a ? { ...e, computed: a, defaultValue: r } : null;
}
const re = (c) => typeof c != "boolean" && typeof c != "number" && "valueExpressionInfo" in c, Ve = (c) => c.some((e) => {
  for (const r in e) {
    const t = e[r];
    if (re(t)) return !0;
  }
  return !1;
});
class q {
  static async create(e, r, t) {
    const s = {}, a = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    for (const o in t) {
      const n = t[o];
      if (n != null && typeof n == "object") if (Array.isArray(n)) {
        if (typeof n[0] == "object") throw new Error(`InternalError: Cannot handle ${o}. Nested array params are not supported`);
        s[o] = n;
      } else if ("valueExpressionInfo" in n) {
        if (n.value) {
          s[o] = n.value;
          continue;
        }
        const u = await U(e, n);
        if (!u) {
          s[o] = n.defaultValue;
          continue;
        }
        a.set(o, u), s[o] = null;
      } else switch (n.type) {
        case "cim-effect-infos":
          if (n.effectInfos.some((u) => u.overrides.length)) {
            i.set(o, { effects: await Promise.all(n.effectInfos.map(async (u) => {
              const p = u.overrides.map((_) => R(e, _));
              return { effect: u.effect, compiledOverrides: (await Promise.all(p)).filter(B) };
            })) });
            break;
          }
          s[o] = n.effectInfos.map((u) => u.effect);
          break;
        case "cim-marker-placement-param":
          n.overrides.length && h.set(o, { placementInfo: n, compiledOverrides: (await Promise.all(n.overrides.map((u) => R(e, u)))).filter(B) }), s[o] = n.placement;
          break;
        case "text-rasterization-param": {
          if (n.overrides.length) {
            const p = n.overrides.map((_) => R(e, _, n.useLegacyLabelEvaluationRules));
            l.set(o, { compiledOverrides: (await Promise.all(p)).filter(B), rasterizationParam: n, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          const u = { type: "cim-rasterization-info", resource: n.resource };
          s[o] = await r.fetchResourceImmediate(u) ?? null;
          break;
        }
        case "sprite-rasterization-param": {
          if (n.overrides.length) {
            const p = n.overrides.map((_) => R(e, _));
            l.set(o, { compiledOverrides: (await Promise.all(p)).filter(B), rasterizationParam: n, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          if (n.resource.type === "animated") {
            l.set(o, { compiledOverrides: [], rasterizationParam: n, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          const u = { type: "cim-rasterization-info", resource: n.resource };
          s[o] = await r.fetchResourceImmediate(u) ?? null;
          break;
        }
        case "cim-marker-transform-param": {
          const { params: u } = n;
          if (Ve(u)) {
            const p = { compiledMarkerInfos: [] };
            await Promise.all(u.map(async (_) => {
              const m = { props: {} };
              for (const f in _) if (re(_[f])) {
                const g = await U(e, _[f]);
                m.compiledExpressionMap || (m.compiledExpressionMap = /* @__PURE__ */ new Map());
                const x = m.compiledExpressionMap;
                g && x.set(f, g);
              } else m.props[f] = _[f];
              p.compiledMarkerInfos.push(m);
            })), d.set(o, p);
          } else s[o] = { type: "cim-marker-transform-info", infos: u };
          break;
        }
        default:
          s[o] = n;
      }
      else s[o] = n;
    }
    return new q(t, s, a, i, h, l, d);
  }
  constructor(e, r, t, s, a, i, h) {
    this.inputMeshParams = e, this._resolvedMeshParams = r, this._dynamicProperties = t, this._dynamicEffectProperties = s, this._dynamicPlacementProperties = a, this._dynamicAsyncProperties = i, this._dynamicTransformProperties = h, this.evaluator = (l) => l;
  }
  get hasDynamicProperties() {
    return !!(this._dynamicProperties.size || this._dynamicAsyncProperties.size || this._dynamicEffectProperties.size || this._dynamicTransformProperties.size || this._dynamicPlacementProperties.size);
  }
  get evaluatedMeshParams() {
    return this._evaluatedMeshParams || (this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams)), this._evaluatedMeshParams;
  }
  enqueueRequest(e, r, t) {
    for (const s of this._dynamicAsyncProperties.values()) {
      const a = be(s.rasterizationParam.resource);
      s.rasterizationParam.resource.type === "animated" && s.rasterizationParam.resource.randomizeStartTime && (a.primitiveName = "__RESERVED__PRIMITIVE__NAME__", a.startGroup = $e(r.getObjectId() || 0));
      for (const { primitiveName: h, propertyName: l, computed: d, defaultValue: o, valueExpressionInfo: n } of s.compiledOverrides) try {
        const u = s.rasterizationParam.resource.type === "animated" ? a.primitiveName : h;
        ke(a, u, l, d, r, t, o);
      } catch (u) {
        Oe().errorOnce(new Ie("invalid-arcade-expression", `Encountered an error when evaluating the arcade expression '${n?.expression}' (primitive: '${h}', property: '${l}')`, u));
      }
      const i = e.enqueueRequest({ type: "cim-rasterization-info", resource: a });
      s.objectIdToResourceId.set(r.getObjectId(), i);
    }
  }
  evaluateMeshParams(e, r, t) {
    for (const [s, a] of this._dynamicProperties.entries()) this._resolvedMeshParams[s] = a.computed.readWithDefault(r, t, a.defaultValue);
    for (const [s, a] of this._dynamicPlacementProperties.entries()) for (const { computed: i, defaultValue: h, propertyName: l } of a.compiledOverrides) {
      const d = i.readWithDefault(r, t, h);
      a.placementInfo.placement[l] = d, this._resolvedMeshParams[s] = a.placementInfo.placement;
    }
    for (const [s, a] of this._dynamicEffectProperties.entries()) for (const i of a.effects) {
      for (const { computed: h, defaultValue: l, propertyName: d } of i.compiledOverrides) {
        const o = h.readWithDefault(r, t, l);
        i.effect[d] = o;
      }
      this._resolvedMeshParams[s] = a.effects.map((h) => h.effect);
    }
    for (const [s, a] of this._dynamicTransformProperties.entries()) {
      const i = { type: "cim-marker-transform-info", infos: [] };
      for (const h of a.compiledMarkerInfos) {
        const l = { ...h.props };
        if (h.compiledExpressionMap) for (const [d, o] of h.compiledExpressionMap) {
          const n = o.computed.readWithDefault(r, t, o.defaultValue);
          l[d] = typeof n == "number" || typeof n == "boolean" ? n : o.defaultValue;
        }
        i.infos.push(l);
      }
      this._resolvedMeshParams[s] = i;
    }
    for (const [s, a] of this._dynamicAsyncProperties.entries()) {
      const i = a.objectIdToResourceId.get(r.getObjectId());
      if (i == null) continue;
      const h = e.getResource(i);
      this._resolvedMeshParams[s] = h;
    }
    return this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams), this.evaluatedMeshParams;
  }
}
class He {
  async createMeshWriter(e, r, t, s) {
    const a = this._getMeshWriter(s.techniqueType), i = await q.create(e, r, s.inputParams), h = new a(s.id, i, s.optionalAttributes, t);
    return await h.loadDependencies(), h;
  }
  _getMeshWriter(e) {
    switch (e) {
      case w.Fill:
        return ye;
      case w.DotDensity:
        return xe;
      case w.ComplexFill:
        return ge;
      case w.PatternFill:
        return _e;
      case w.OutlineFill:
        return pe;
      case w.PatternOutlineFill:
        return fe;
      case w.ComplexOutlineFill:
        return me;
      case w.Marker:
        return de;
      case w.PieChart:
        return ue;
      case w.Text:
        return ee;
      case w.Line:
        return le;
      case w.TexturedLine:
        return he;
      case w.Heatmap:
        return ce;
      case w.Label:
        return Ge;
      case w.Test:
        throw new Error("Internal Error: Found invalid mesh writer");
    }
  }
}
export {
  He as W,
  je as r
};
//# sourceMappingURL=MeshWriterRegistry-i2g8CoOl.js.map