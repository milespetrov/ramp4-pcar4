import { dk as it, dl as lt, aI as d, fg as Kt, aJ as Pt, cf as Lt, fo as Z, iC as y, k6 as mt, k7 as At, k8 as Ut, k9 as pt, bM as ta, cd as aa, ka as sa, kb as kt, c9 as xt, kc as Ot, k0 as ea, e3 as Rt, e2 as ia, kd as na, ke as oa, e1 as ra, kf as Ct, kg as gt, kh as ha, ki as ca, jR as Ft } from "./main-n1d2W0Ts.js";
import { t as ua, e as da } from "./mat3f64-Dh9_zhFu.js";
import { e as fa } from "./mat4f64-Dn1WEGBx.js";
import { X as la, O as U, x as ma } from "./quat-7UY_HF03.js";
import { o as Xt, e as St } from "./quatf64-DxbQqBtW.js";
import { a as _t } from "./spatialReferenceEllipsoidUtils-BRPBRXx9.js";
import { u as _a } from "./computeTranslationToOriginAndRotation-BQ5vrujS.js";
import { c as vt, o as ga, F as It } from "./plane-fUOqQtDL.js";
class Nt {
  constructor(t, a, s = a) {
    this.data = t, this.size = a, this.stride = s;
  }
}
class Za extends Nt {
  constructor(t, a, s, n = !1, o = s) {
    super(t, s, o), this.indices = a, this.exclusive = n;
  }
}
const nt = 1e-6, ot = d(), bt = d();
function ba(e, t) {
  const { data: a, size: s } = e, n = a.length / s;
  if (n <= 0) return;
  const o = new qa(e);
  wt(ot, o.minProj, o.maxProj), dt(ot, ot, 0.5), N(bt, o.maxProj, o.minProj);
  const r = qt(bt), c = new wa();
  c.quality = r, n < 14 && (e = new Nt(new Float64Array(o.buffer, 112, 42), 3));
  const i = d(), h = d(), b = d(), m = d(), z = d(), A = d(), M = d();
  switch (Ma(o, e, M, i, h, b, m, z, A, c)) {
    case 1:
      return void Yt(ot, bt, t);
    case 2:
      return void Ia(e, m, t);
  }
  $a(e, M, i, h, b, m, z, A, c), Bt(e, c.b0, c.b1, c.b2, at, st);
  const T = d();
  N(T, st, at), c.quality = qt(T), c.quality < r ? Wt(c.b0, c.b1, c.b2, at, st, T, t) : Yt(ot, bt, t);
}
function Ma(e, t, a, s, n, o, r, c, i, h) {
  return Pa(e, s, n), yt(s, n) < nt ? 1 : (N(r, s, n), g(r, r), ja(t, s, r, o) < nt ? 2 : (N(c, n, o), g(c, c), N(i, o, s), g(i, i), V(a, c, r), g(a, a), W(t, a, r, c, i, h), 0));
}
const rt = d(), ht = d(), I = d(), p = d(), q = d(), H = d(), O = d(), R = d();
function $a(e, t, a, s, n, o, r, c, i) {
  xa(e, t, a, rt, ht), rt[0] !== void 0 && (N(I, rt, a), g(I, I), N(p, rt, s), g(p, p), N(q, rt, n), g(q, q), V(H, p, o), g(H, H), V(O, q, r), g(O, O), V(R, I, c), g(R, R), W(e, H, o, p, I, i), W(e, O, r, q, p, i), W(e, R, c, I, q, i)), ht[0] !== void 0 && (N(I, ht, a), g(I, I), N(p, ht, s), g(p, p), N(q, ht, n), g(q, q), V(H, p, o), g(H, H), V(O, q, r), g(O, O), V(R, I, c), g(R, R), W(e, H, o, p, I, i), W(e, O, r, q, p, i), W(e, R, c, I, q, i));
}
function Pa(e, t, a) {
  let s = yt(e.maxVert[0], e.minVert[0]), n = 0;
  for (let o = 1; o < 7; ++o) {
    const r = yt(e.maxVert[o], e.minVert[o]);
    r > s && (s = r, n = o);
  }
  S(t, e.minVert[n]), S(a, e.maxVert[n]);
}
const w = [0, 0, 0];
function ja(e, t, a, s) {
  const { data: n, size: o } = e;
  let r = Number.NEGATIVE_INFINITY, c = 0;
  for (let i = 0; i < n.length; i += o) {
    w[0] = n[i] - t[0], w[1] = n[i + 1] - t[1], w[2] = n[i + 2] - t[2];
    const h = a[0] * w[0] + a[1] * w[1] + a[2] * w[2], b = a[0] * a[0] + a[1] * a[1] + a[2] * a[2], m = w[0] * w[0] + w[1] * w[1] + w[2] * w[2] - h * h / b;
    m > r && (r = m, c = i);
  }
  return S(s, n, c), r;
}
const _ = Kt();
function xa(e, t, a, s, n) {
  za(e, t, _, n, s);
  const o = Dt(a, t);
  _[1] - nt <= o && (s[0] = void 0), _[0] + nt >= o && (n[0] = void 0);
}
const Qt = d(), Tt = d(), Et = d(), D = d(), J = d(), Mt = d();
function W(e, t, a, s, n, o) {
  if (Zt(t) < nt) return;
  V(Qt, a, t), V(Tt, s, t), V(Et, n, t), tt(e, t, _), J[1] = _[0], D[1] = _[1], Mt[1] = D[1] - J[1];
  const r = [a, s, n], c = [Qt, Tt, Et];
  for (let i = 0; i < 3; ++i) {
    tt(e, r[i], _), J[0] = _[0], D[0] = _[1], tt(e, c[i], _), J[2] = _[0], D[2] = _[1], Mt[0] = D[0] - J[0], Mt[2] = D[2] - J[2];
    const h = qt(Mt);
    h < o.quality && (S(o.b0, r[i]), S(o.b1, t), S(o.b2, c[i]), o.quality = h);
  }
}
const Sa = d();
function tt(e, t, a) {
  const { data: s, size: n } = e;
  a[0] = Number.POSITIVE_INFINITY, a[1] = Number.NEGATIVE_INFINITY;
  for (let o = 0; o < s.length; o += n) {
    const r = s[o] * t[0] + s[o + 1] * t[1] + s[o + 2] * t[2];
    a[0] = Math.min(a[0], r), a[1] = Math.max(a[1], r);
  }
}
function za(e, t, a, s, n) {
  const { data: o, size: r } = e;
  S(s, o), S(n, s), a[0] = Dt(Sa, t), a[1] = a[0];
  for (let c = r; c < o.length; c += r) {
    const i = o[c] * t[0] + o[c + 1] * t[1] + o[c + 2] * t[2];
    i < a[0] && (a[0] = i, S(s, o, c)), i > a[1] && (a[1] = i, S(n, o, c));
  }
}
function Yt(e, t, a) {
  a.center = e, a.halfSize = it(t, t, 0.5), a.quaternion = Xt;
}
const E = d(), K = d(), ct = d(), at = d(), st = d(), Gt = d();
function Ia(e, t, a) {
  S(E, t), Math.abs(t[0]) > Math.abs(t[1]) && Math.abs(t[0]) > Math.abs(t[2]) ? E[0] = 0 : Math.abs(t[1]) > Math.abs(t[2]) ? E[1] = 0 : E[2] = 0, Zt(E) < nt && (E[0] = E[1] = E[2] = 1), V(K, t, E), g(K, K), V(ct, t, K), g(ct, ct), Bt(e, t, K, ct, at, st), N(Gt, st, at), Wt(t, K, ct, at, st, Gt, a);
}
function Bt(e, t, a, s, n, o) {
  tt(e, t, _), n[0] = _[0], o[0] = _[1], tt(e, a, _), n[1] = _[0], o[1] = _[1], tt(e, s, _), n[2] = _[0], o[2] = _[1];
}
const X = d(), ut = d(), $t = d(), v = ua(1, 0, 0, 0, 1, 0, 0, 0, 1), pa = St();
function Wt(e, t, a, s, n, o, r) {
  v[0] = e[0], v[1] = e[1], v[2] = e[2], v[3] = t[0], v[4] = t[1], v[5] = t[2], v[6] = a[0], v[7] = a[1], v[8] = a[2], r.quaternion = ya(pa, v), wt(X, s, n), dt(X, X, 0.5), dt(ut, e, X[0]), dt($t, t, X[1]), wt(ut, ut, $t), dt($t, a, X[2]), r.center = lt(ut, ut, $t), r.halfSize = it(X, o, 0.5);
}
const P = 7;
let qa = class {
  constructor(t) {
    this.minVert = new Array(P), this.maxVert = new Array(P);
    const a = 64 * P;
    this.buffer = new ArrayBuffer(a);
    let s = 0;
    this.minProj = new Float64Array(this.buffer, s, P), s += 8 * P, this.maxProj = new Float64Array(this.buffer, s, P), s += 8 * P;
    for (let i = 0; i < P; ++i) this.minVert[i] = new Float64Array(this.buffer, s, 3), s += 24;
    for (let i = 0; i < P; ++i) this.maxVert[i] = new Float64Array(this.buffer, s, 3), s += 24;
    for (let i = 0; i < P; ++i) this.minProj[i] = Number.POSITIVE_INFINITY, this.maxProj[i] = Number.NEGATIVE_INFINITY;
    const n = new Array(P), o = new Array(P), { data: r, size: c } = t;
    for (let i = 0; i < r.length; i += c) {
      let h = r[i];
      h < this.minProj[0] && (this.minProj[0] = h, n[0] = i), h > this.maxProj[0] && (this.maxProj[0] = h, o[0] = i), h = r[i + 1], h < this.minProj[1] && (this.minProj[1] = h, n[1] = i), h > this.maxProj[1] && (this.maxProj[1] = h, o[1] = i), h = r[i + 2], h < this.minProj[2] && (this.minProj[2] = h, n[2] = i), h > this.maxProj[2] && (this.maxProj[2] = h, o[2] = i), h = r[i] + r[i + 1] + r[i + 2], h < this.minProj[3] && (this.minProj[3] = h, n[3] = i), h > this.maxProj[3] && (this.maxProj[3] = h, o[3] = i), h = r[i] + r[i + 1] - r[i + 2], h < this.minProj[4] && (this.minProj[4] = h, n[4] = i), h > this.maxProj[4] && (this.maxProj[4] = h, o[4] = i), h = r[i] - r[i + 1] + r[i + 2], h < this.minProj[5] && (this.minProj[5] = h, n[5] = i), h > this.maxProj[5] && (this.maxProj[5] = h, o[5] = i), h = r[i] - r[i + 1] - r[i + 2], h < this.minProj[6] && (this.minProj[6] = h, n[6] = i), h > this.maxProj[6] && (this.maxProj[6] = h, o[6] = i);
    }
    for (let i = 0; i < P; ++i) {
      let h = n[i];
      S(this.minVert[i], r, h), h = o[i], S(this.maxVert[i], r, h);
    }
  }
}, wa = class {
  constructor() {
    this.b0 = Pt(1, 0, 0), this.b1 = Pt(0, 1, 0), this.b2 = Pt(0, 0, 1), this.quality = 0;
  }
};
function qt(e) {
  return e[0] * e[1] + e[0] * e[2] + e[1] * e[2];
}
function wt(e, t, a) {
  e[0] = t[0] + a[0], e[1] = t[1] + a[1], e[2] = t[2] + a[2];
}
function N(e, t, a) {
  e[0] = t[0] - a[0], e[1] = t[1] - a[1], e[2] = t[2] - a[2];
}
function dt(e, t, a) {
  e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a;
}
function S(e, t, a = 0) {
  e[0] = t[a], e[1] = t[a + 1], e[2] = t[a + 2];
}
function V(e, t, a) {
  const s = t[0], n = t[1], o = t[2], r = a[0], c = a[1], i = a[2];
  e[0] = n * i - o * c, e[1] = o * r - s * i, e[2] = s * c - n * r;
}
function g(e, t) {
  const a = t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
  if (a > 0) {
    const s = 1 / Math.sqrt(a);
    e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s;
  }
}
function Zt(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function yt(e, t) {
  const a = t[0] - e[0], s = t[1] - e[1], n = t[2] - e[2];
  return a * a + s * s + n * n;
}
function Dt(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ya(e, t) {
  const a = t[0] + t[4] + t[8];
  if (a > 0) {
    let s = Math.sqrt(a + 1);
    e[3] = 0.5 * s, s = 0.5 / s, e[0] = (t[5] - t[7]) * s, e[1] = (t[6] - t[2]) * s, e[2] = (t[1] - t[3]) * s;
  } else {
    let s = 0;
    t[4] > t[0] && (s = 1), t[8] > t[3 * s + s] && (s = 2);
    const n = (s + 1) % 3, o = (s + 2) % 3;
    let r = Math.sqrt(t[3 * s + s] - t[3 * n + n] - t[3 * o + o] + 1);
    e[s] = 0.5 * r, r = 0.5 / r, e[3] = (t[3 * n + o] - t[3 * o + n]) * r, e[n] = (t[3 * n + s] + t[3 * s + n]) * r, e[o] = (t[3 * o + s] + t[3 * s + o]) * r;
  }
  return e;
}
class ft {
  constructor(t = Lt, a = Ea, s = Xt) {
    this._data = [t[0], t[1], t[2], a[0], a[1], a[2], s[0], s[1], s[2], s[3]];
  }
  clone() {
    const t = new ft();
    return t._data = this._data.slice(), t;
  }
  invalidate() {
    this._data[3] = -1;
  }
  get isValid() {
    return this._data[3] >= 0;
  }
  static fromData(t) {
    const a = new ft();
    return a._data = t.slice(), a;
  }
  static fromJSON(t) {
    return new ft(t.center, t.halfSize, t.quaternion);
  }
  copy(t) {
    this._data = t.data.slice();
  }
  get center() {
    return Z(vt.get(), this._data[0], this._data[1], this._data[2]);
  }
  get centerX() {
    return this._data[0];
  }
  get centerY() {
    return this._data[1];
  }
  get centerZ() {
    return this._data[2];
  }
  getCenter(t) {
    return t[0] = this._data[0], t[1] = this._data[1], t[2] = this._data[2], t;
  }
  set center(t) {
    this._data[0] = t[0], this._data[1] = t[1], this._data[2] = t[2];
  }
  setCenter(t, a, s) {
    this._data[0] = t, this._data[1] = a, this._data[2] = s;
  }
  get halfSize() {
    return Z(vt.get(), this._data[3], this._data[4], this._data[5]);
  }
  get halfSizeX() {
    return this._data[3];
  }
  get halfSizeY() {
    return this._data[4];
  }
  get halfSizeZ() {
    return this._data[5];
  }
  getHalfSize(t) {
    return t[0] = this._data[3], t[1] = this._data[4], t[2] = this._data[5], t;
  }
  set halfSize(t) {
    this._data[3] = t[0], this._data[4] = t[1], this._data[5] = t[2];
  }
  get quaternion() {
    return la(ga.get(), this._data[6], this._data[7], this._data[8], this._data[9]);
  }
  getQuaternion(t) {
    return t[0] = this._data[6], t[1] = this._data[7], t[2] = this._data[8], t[3] = this._data[9], t;
  }
  set quaternion(t) {
    this._data[6] = t[0], this._data[7] = t[1], this._data[8] = t[2], this._data[9] = t[3];
  }
  get data() {
    return this._data;
  }
  getCorners(t) {
    const a = l, s = this._data;
    a[0] = s[6], a[1] = s[7], a[2] = s[8], a[3] = s[9];
    for (let n = 0; n < 8; ++n) {
      const o = t[n];
      o[0] = (1 & n ? -1 : 1) * s[3], o[1] = (2 & n ? -1 : 1) * s[4], o[2] = (4 & n ? -1 : 1) * s[5], y(o, o, a), o[0] += s[0], o[1] += s[1], o[2] += s[2];
    }
  }
  doesIntersectFrustumConservativeApproximation(t) {
    return this.intersectPlane(t[0]) <= 0 && this.intersectPlane(t[1]) <= 0 && this.intersectPlane(t[2]) <= 0 && this.intersectPlane(t[3]) <= 0 && this.intersectPlane(t[4]) <= 0 && this.intersectPlane(t[5]) <= 0;
  }
  get radius() {
    const t = this._data[3], a = this._data[4], s = this._data[5];
    return Math.sqrt(t * t + a * a + s * s);
  }
  intersectSphere(t) {
    u[0] = this._data[0] - t[0], u[1] = this._data[1] - t[1], u[2] = this._data[2] - t[2];
    const a = this.getQuaternion(G);
    return U(l, a), y(u, u, l), mt(u, u), Y[0] = Math.min(u[0], this._data[3]), Y[1] = Math.min(u[1], this._data[4]), Y[2] = Math.min(u[2], this._data[5]), At(Y, u) < t[3] * t[3];
  }
  intersectSphereWithMBS(t, a = this.radius) {
    const s = this._data;
    u[0] = s[0] - t[0], u[1] = s[1] - t[1], u[2] = s[2] - t[2];
    const n = t[3], o = n + a;
    return !(Ut(u) > o * o) && (l[0] = -s[6], l[1] = -s[7], l[2] = -s[8], l[3] = s[9], y(u, u, l), mt(u, u), Y[0] = Math.min(u[0], s[3]), Y[1] = Math.min(u[1], s[4]), Y[2] = Math.min(u[2], s[5]), At(Y, u) < n * n);
  }
  intersectPlane(t) {
    const a = t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3], s = this.projectedRadius(It(t));
    return a > s ? 1 : a < -s ? -1 : 0;
  }
  intersectRay(t, a, s = 0) {
    const n = this._data, o = l;
    o[0] = -n[6], o[1] = -n[7], o[2] = -n[8], o[3] = n[9], u[0] = t[0] - n[0], u[1] = t[1] - n[1], u[2] = t[2] - n[2];
    const r = y(u, u, l), c = y(Y, a, l);
    let i = -1 / 0, h = 1 / 0;
    const b = this.getHalfSize(et);
    for (let m = 0; m < 3; m++) {
      const z = r[m], A = c[m], M = b[m] + s;
      if (Math.abs(A) > 1e-6) {
        const T = (M - z) / A, $ = (-M - z) / A;
        i = Math.max(i, Math.min(T, $)), h = Math.min(h, Math.max(T, $));
      } else if (z > M || z < -M) return !1;
    }
    return i <= h;
  }
  projectedArea(t, a, s, n) {
    const o = this.getQuaternion(G);
    U(l, o), u[0] = t[0] - this._data[0], u[1] = t[1] - this._data[1], u[2] = t[2] - this._data[2], y(u, u, l);
    const r = this.getHalfSize(et), c = u[0] < -r[0] ? -1 : u[0] > r[0] ? 1 : 0, i = u[1] < -r[1] ? -1 : u[1] > r[1] ? 1 : 0, h = u[2] < -r[2] ? -1 : u[2] > r[2] ? 1 : 0, b = Math.abs(c) + Math.abs(i) + Math.abs(h);
    if (b === 0) return 1 / 0;
    const m = b === 1 ? 4 : 6, z = 6 * (c + 3 * i + 9 * h + 13);
    pt(L, o), ta(L, L, r);
    const A = this.getCenter(F);
    for (let $ = 0; $ < m; $++) {
      const zt = Aa[z + $];
      Z(u, ((1 & zt) << 1) - 1, (2 & zt) - 1, ((4 & zt) >> 1) - 1), aa(u, u, L), lt(B, A, u), B[3] = 1, sa(B, B, a);
      const Vt = 1 / Math.max(1e-6, B[3]);
      k[2 * $] = B[0] * Vt, k[2 * $ + 1] = B[1] * Vt;
    }
    const M = 2 * m - 2;
    let T = k[0] * (k[3] - k[M + 1]) + k[M] * (k[1] - k[M - 1]);
    for (let $ = 2; $ < M; $ += 2) T += k[$] * (k[$ + 3] - k[$ - 1]);
    return Math.abs(T) * s * n * 0.125;
  }
  projectedRadius(t) {
    const a = this.getQuaternion(G);
    return U(l, a), y(u, t, l), Math.abs(u[0] * this._data[3]) + Math.abs(u[1] * this._data[4]) + Math.abs(u[2] * this._data[5]);
  }
  minimumDistancePlane(t) {
    return t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3] - this.projectedRadius(It(t));
  }
  maximumDistancePlane(t) {
    return t[0] * this._data[0] + t[1] * this._data[1] + t[2] * this._data[2] + t[3] + this.projectedRadius(It(t));
  }
  toAaBoundingBox(t) {
    const a = this.getQuaternion(G), s = pt(L, a), n = this._data[3] * Math.abs(s[0]) + this._data[4] * Math.abs(s[3]) + this._data[5] * Math.abs(s[6]), o = this._data[3] * Math.abs(s[1]) + this._data[4] * Math.abs(s[4]) + this._data[5] * Math.abs(s[7]), r = this._data[3] * Math.abs(s[2]) + this._data[4] * Math.abs(s[5]) + this._data[5] * Math.abs(s[8]);
    t[0] = this._data[0] - n, t[1] = this._data[1] - o, t[2] = this._data[2] - r, t[3] = this._data[0] + n, t[4] = this._data[1] + o, t[5] = this._data[2] + r;
  }
  transform(t, a, s, n = 0, o = _t(s), r = _t(a), c = Ot(a, r)) {
    if (s === o) a.isGeographic ? va(this, t, a, n, r) : Fa(this, t, a, n, r, c);
    else if (a.isWGS84 && (s.isWebMercator || kt(s))) ka(a, this, s, t, n);
    else if (a.isWebMercator && kt(s)) Ca(a, this, s, t, n);
    else {
      const i = this.getCenter(F);
      i[2] += n, xt(i, a, 0, i, s, 0, 1), t.center = i, this !== t && (t.quaternion = this.getQuaternion(G), t.halfSize = this.getHalfSize(et));
    }
  }
}
const l = St(), G = St(), Na = St(), u = d(), Y = d(), B = ea();
function Va(e, t = new ft()) {
  return ba(e, t), t;
}
const k = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2], Aa = (() => {
  const e = new Int8Array(162);
  let t = 0;
  const a = (s) => {
    for (let n = 0; n < s.length; n++) e[t + n] = s[n];
    t += 6;
  };
  return a([6, 2, 3, 1, 5, 4]), a([0, 2, 3, 1, 5, 4]), a([0, 2, 3, 7, 5, 4]), a([0, 1, 3, 2, 6, 4]), a([0, 1, 3, 2, 0, 0]), a([0, 1, 5, 7, 3, 2]), a([0, 1, 3, 7, 6, 4]), a([0, 1, 3, 7, 6, 2]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 4, 6, 2]), a([0, 1, 5, 4, 0, 0]), a([0, 1, 3, 7, 5, 4]), a([0, 2, 6, 4, 0, 0]), a([0, 0, 0, 0, 0, 0]), a([1, 3, 7, 5, 0, 0]), a([2, 3, 7, 6, 4, 0]), a([2, 3, 7, 6, 0, 0]), a([2, 3, 1, 5, 7, 6]), a([0, 1, 5, 7, 6, 2]), a([0, 1, 5, 7, 6, 4]), a([0, 1, 3, 7, 6, 4]), a([4, 5, 7, 6, 2, 0]), a([4, 5, 7, 6, 0, 0]), a([4, 5, 1, 3, 7, 6]), a([0, 2, 3, 7, 5, 4]), a([6, 2, 3, 7, 5, 4]), a([6, 2, 3, 1, 5, 4]), e;
})();
function Ka(e, t, a, s, n) {
  const o = e.getQuaternion(G);
  n.quaternion = o, U(l, o);
  const r = e.getCenter(F), c = e.getHalfSize(et);
  if (s === oa.Global) {
    y(f, r, l), mt(C, f), ra(x, C, c), Rt(x, C, x);
    const i = Ct(x);
    lt(x, C, c);
    const h = Ct(x);
    if (i < a) n.center = r, Z(f, a, a, a), n.halfSize = lt(f, c, f);
    else {
      const b = h > 0 ? 1 + t / h : 1, m = i > 0 ? 1 + a / i : 1, z = (m + b) / 2, A = (m - b) / 2;
      it(x, C, A), n.halfSize = gt(x, x, c, z), it(x, C, z), gt(x, x, c, A), ha(f, f), ca(f, x, f);
      const M = e.getQuaternion(Na);
      n.center = y(f, f, M);
    }
  } else {
    n.center = gt(f, r, Ft, (a + t) / 2);
    const i = y(f, Ft, l);
    mt(i, i), n.halfSize = gt(C, c, i, (a - t) / 2);
  }
  return n;
}
function ka(e, t, a, s, n) {
  t.getCenter(F), F[2] += n;
  const o = _t(a);
  xt(F, e, 0, F, o, 0, 1), Jt(o, t, F, a, s);
}
function Ca(e, t, a, s, n) {
  t.getCenter(F), F[2] += n, Jt(e, t, F, a, s);
}
function Jt(e, t, a, s, n) {
  const o = t.getQuaternion(G), r = pt(L, o), c = t.getHalfSize(et);
  for (let i = 0; i < 8; ++i) {
    for (let h = 0; h < 3; ++h) Q[h] = c[h] * (i & 1 << h ? -1 : 1);
    for (let h = 0; h < 3; ++h) {
      let b = a[h];
      for (let m = 0; m < 3; ++m) b += Q[m] * r[3 * m + h];
      jt[3 * i + h] = b;
    }
  }
  xt(jt, e, 0, jt, s, 0, 8), Va(Qa, n);
}
function Fa(e, t, a, s, n = _t(a), o = Ot(a, n)) {
  e.getCorners(Ht), e.getCenter(Q), Q[2] += s, _a(a, Q, j, n), t.setCenter(j[12], j[13], j[14]);
  const r = 2 * Math.sqrt(1 + j[0] + j[5] + j[10]);
  l[0] = (j[6] - j[9]) / r, l[1] = (j[8] - j[2]) / r, l[2] = (j[1] - j[4]) / r, l[3] = 0.25 * r;
  const c = e.getQuaternion(G);
  t.quaternion = ma(l, l, c), U(l, l), Z(C, 0, 0, 0);
  const i = t.getCenter(Ta);
  for (const h of Ht) h[2] += s, o(h, 0, h, 0), Rt(f, h, i), y(f, f, l), mt(f, f), ia(C, C, f);
  t.halfSize = C;
}
function va(e, t, a, s, n = _t(a)) {
  const o = na(a), r = 1 + Math.max(0, s) / (o.radius + e.centerZ);
  e.getCenter(Q), Q[2] += s, xt(Q, a, 0, Q, n, 0, 1), t.center = Q;
  const c = e.getQuaternion(G);
  t.quaternion = c, U(l, c), Z(f, 0, 0, 1), y(f, f, l);
  const i = e.getHalfSize(et);
  Z(f, i[0] * Math.abs(f[0]), i[1] * Math.abs(f[1]), i[2] * Math.abs(f[2])), it(f, f, o.inverseFlattening), lt(f, i, f), t.halfSize = it(f, f, r);
}
const jt = new Array(24), Qa = new Nt(jt, 3), Q = d(), F = d(), Ta = d(), et = d(), L = da(), j = fa(), Ht = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]], f = d(), C = d(), x = d(), Ea = Pt(-1, -1, -1);
export {
  ft as I,
  Ka as L,
  Za as t
};
//# sourceMappingURL=orientedBoundingBox-CfoEyULk.js.map
