import { h as Q, dm as H, a2 as z, jO as C, am as D, an as E, dh as G, jP as J, jQ as R, jR as V, ge as W, jS as K, d$ as I, O as a, P as u, bV as L, aI as X, jT as Y, aJ as Z, dg as h, jU as _, cl as tt, g1 as rt, Q as st } from "./main-n1d2W0Ts.js";
import { e as N } from "./mat4f64-Dn1WEGBx.js";
import { v as O, I as m, x as et } from "./quat-7UY_HF03.js";
import { e as g } from "./quatf64-DxbQqBtW.js";
class S {
  constructor(r, s, e) {
    this.assetName = r, this.assetMimeType = s, this.parts = e;
  }
  equals(r) {
    return this === r || this.assetName === r.assetName && this.assetMimeType === r.assetMimeType && Q(this.parts, r.parts, (s, e) => s.equals(e));
  }
  isOnService(r) {
    return this.parts.every((s) => s.isOnService(r));
  }
  makeHash() {
    let r = "";
    for (const s of this.parts) r += s.partHash;
    return r;
  }
  async toBlob(r) {
    const { parts: s } = this;
    if (s.length === 1) return s[0].toBlob(r);
    const e = await Promise.all(s.map((c) => c.toBlob(r)));
    return H(r), new Blob(e);
  }
}
class ht {
  constructor(r, s) {
    this.partUrl = r, this.partHash = s;
  }
  equals(r) {
    return this === r || this.partUrl === r.partUrl && this.partHash === r.partHash;
  }
  isOnService(r) {
    return this.partUrl.startsWith(`${r.path}/assets/`);
  }
  async toBlob(r) {
    const { data: s } = await z(this.partUrl, { responseType: "blob" });
    return H(r), s;
  }
}
function pt(t) {
  return nt(t?.source);
}
function v(t) {
  return Array.isArray(t) ? t.every((r) => r instanceof S) : !1;
}
const x = /^(model\/gltf\+json)|(model\/gltf-binary)$/, d = /\.(gltf|glb)/i;
function nt(t) {
  return t ? Array.isArray(t) ? t.some(M) : M(t) : !1;
}
function M(t) {
  if (t instanceof File) {
    const { type: r, name: s } = t;
    return x.test(r) || d.test(s);
  }
  return x.test(t.assetMimeType) || d.test(t.assetName);
}
function ft(t, r) {
  if (!t) return !1;
  const { source: s } = t;
  return at(s, r);
}
function mt(t, r) {
  if (t === r) return !0;
  const { source: s } = t, { source: e } = r;
  if (s === e) return !0;
  if (v(s) && v(e)) {
    if (s.length !== e.length) return !1;
    const c = (i, b) => i.assetName < b.assetName ? -1 : i.assetName > b.assetName ? 1 : 0, A = [...s].sort(c), F = [...e].sort(c);
    for (let i = 0; i < A.length; ++i) if (!A[i].equals(F[i])) return !1;
    return !0;
  }
  return !1;
}
function at(t, r) {
  if (Array.isArray(t)) {
    const s = t;
    return s.length > 0 && s.every((e) => j(e, r));
  }
  return j(t, r);
}
function j(t, r) {
  return t instanceof S && t.isOnService(r);
}
function yt(t, r) {
  return t instanceof File ? C(t, r) : D(t.assetMimeType, r) ?? E(t.assetName, r);
}
function $t(t) {
  return Array.isArray(t) ? t : [t];
}
function gt(t) {
  return !!t.original;
}
function o(t = k) {
  return [t[0], t[1], t[2], t[3]];
}
function f(t, r, s = o()) {
  return G(s, t), s[3] = r, s;
}
function At(t, r = o()) {
  const s = K(l, t);
  return P(r, I(O(r, s))), r;
}
function w(t, r, s = o()) {
  return m(l, t, y(t)), m(T, r, y(r)), et(l, T, l), P(s, I(O(s, l)));
}
function bt(t, r, s, e = o()) {
  return f(J, t, p), f(R, r, U), f(V, s, B), w(p, U, p), w(p, B, e), e;
}
function Nt(t) {
  return t;
}
function ot(t) {
  return t[3];
}
function y(t) {
  return W(t[3]);
}
function P(t, r) {
  return t[3] = r, t;
}
const k = [0, 0, 1, 0], l = g(), T = g();
o();
const p = o(), U = o(), B = o();
var $;
let n = $ = class extends L {
  constructor(t) {
    super(t), this.translation = X(), this.rotationAxis = Y(k), this.rotationAngle = 0, this.scale = Z(1, 1, 1);
  }
  get rotation() {
    return f(this.rotationAxis, this.rotationAngle);
  }
  set rotation(t) {
    this.rotationAxis = h(t), this.rotationAngle = ot(t);
  }
  get localMatrix() {
    const t = N();
    return m(q, this.rotation, y(this.rotation)), _(t, q, this.translation, this.scale), t;
  }
  get localMatrixInverse() {
    return tt(N(), this.localMatrix);
  }
  equals(t) {
    return this === t || t != null && rt(this.localMatrix, t.localMatrix);
  }
  clone() {
    const t = { translation: h(this.translation), rotationAxis: h(this.rotationAxis), rotationAngle: this.rotationAngle, scale: h(this.scale) };
    return new $(t);
  }
};
a([u({ type: [Number], nonNullable: !0, json: { write: !0 } })], n.prototype, "translation", void 0), a([u({ type: [Number], nonNullable: !0, json: { write: !0 } })], n.prototype, "rotationAxis", void 0), a([u({ type: Number, nonNullable: !0, json: { write: !0 } })], n.prototype, "rotationAngle", void 0), a([u({ type: [Number], nonNullable: !0, json: { write: !0 } })], n.prototype, "scale", void 0), a([u()], n.prototype, "rotation", null), a([u()], n.prototype, "localMatrix", null), a([u()], n.prototype, "localMatrixInverse", null), n = $ = a([st("esri.geometry.support.MeshTransform")], n);
const q = g(), vt = n;
export {
  $t as A,
  vt as N,
  yt as a,
  o as b,
  y as c,
  Nt as d,
  ft as h,
  S as i,
  At as k,
  ht as o,
  pt as u,
  gt as v,
  bt as w,
  mt as y
};
//# sourceMappingURL=MeshTransform-mbyl_DYz.js.map
