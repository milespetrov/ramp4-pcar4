import { c9 as C, ca as j, cb as h, cc as $, cd as R, ce as w, aH as x, cf as O, bp as b, cg as v, ch as B, a8 as Y, ci as z, cj as H, ck as I, aI as S, cl as J } from "./main-n1d2W0Ts.js";
import { e as W } from "./mat3f64-Dh9_zhFu.js";
import { o as g, e as q } from "./mat4f64-Dn1WEGBx.js";
import { a as E } from "./spatialReferenceEllipsoidUtils-BRPBRXx9.js";
import { u as G } from "./computeTranslationToOriginAndRotation-BQ5vrujS.js";
import { t as L, o as D } from "./DoubleArray-DzeMZxkj.js";
import { i as P, T as y } from "./BufferView-k2-IUvEL.js";
import { f as K, l as V, e as k } from "./vec3-CQg9d0_-.js";
import { n as Q } from "./vec4-DJ8xUbM1.js";
const fr = "Projection may be possible after calling projection.load().";
function lr(r, o, t, e) {
  r.error(`Failed to project from (wkid:${o.wkid}) to (wkid:${t.wkid}).${e ? " " : ""}${e}`);
}
function ur(r, o, t, e, n) {
  return M(T.TO_PCPF, P.fromTypedArray(r), m.NORMAL, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n)) ? n : null;
}
function pr(r, o, t, e, n) {
  return M(T.FROM_PCPF, P.fromTypedArray(r), m.NORMAL, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n)) ? n : null;
}
function mr(r, o, t) {
  return C(r, o, 0, t, E(o), 0, r.length / 3) ? t : null;
}
function Tr(r, o, t) {
  return C(r, E(t), 0, o, t, 0, r.length / 3) ? o : null;
}
function Pr(r, o, t) {
  return j(c, t), K(o, r, c), h(c) && V(o, o), o;
}
function yr(r, o, t) {
  return $(c, t), Q(o, r, c), h(c) && V(o, o, 4), o;
}
function Ar(r, o, t, e, n) {
  if (!M(T.TO_PCPF, P.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT), m.TANGENT, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n, 4 * Float32Array.BYTES_PER_ELEMENT))) return null;
  for (let s = 3; s < r.length; s += 4) n[s] = r[s];
  return n;
}
function Fr(r, o, t, e, n) {
  if (!M(T.FROM_PCPF, P.fromTypedArray(r, 16), m.TANGENT, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n, 16))) return null;
  for (let s = 3; s < r.length; s += 4) n[s] = r[s];
  return n;
}
var m, T;
function _(r, o, t, e, n) {
  switch (G(e, t, p, e), r === T.FROM_PCPF && J(p, p), o) {
    case m.NORMAL:
      return j(n, p);
    case m.TANGENT:
      return $(n, p);
  }
}
function M(r, o, t, e, n, s, u) {
  if (!o) return;
  const f = e.count, A = E(s);
  if (U(s)) for (let i = 0; i < f; i++) n.getVec(i, N), o.getVec(i, l), R(l, l, _(r, t, N, A, c)), u.setVec(i, l);
  else for (let i = 0; i < f; i++) {
    n.getVec(i, N), o.getVec(i, l);
    const F = w(e.get(i, 1));
    let a = Math.cos(F);
    t === m.TANGENT != (r === T.TO_PCPF) && (a = 1 / a), _(r, t, N, A, c), r === T.TO_PCPF ? (c[0] *= a, c[1] *= a, c[2] *= a, c[3] *= a, c[4] *= a, c[5] *= a) : (c[0] *= a, c[3] *= a, c[6] *= a, c[1] *= a, c[4] *= a, c[7] *= a), R(l, l, c), x(l, l), u.setVec(i, l);
  }
  return u;
}
function dr(r) {
  return r.vertexSpace.type === "local" ? X(r) : Z(r);
}
function X({ vertexSpace: r, transform: o, inSpatialReference: t, outSpatialReference: e, localMode: n, outPositions: s, positions: u }) {
  const f = r.origin ?? O, A = r.origin != null ? o?.localMatrix ?? g : g, i = E(t), F = e.isWebMercator && n || !b(t, i) ? t : i;
  G(t, f, p, F), v(p, p, A);
  const a = s ?? L(u.length);
  return k(a, u, p), C(a, F, 0, a, e, 0, a.length / 3), a;
}
function Z({ vertexSpace: r, transform: o, outPositions: t, positions: e, inSpatialReference: n, outSpatialReference: s }) {
  const u = r.origin != null ? o?.localMatrix ?? g : g, f = t ?? L(e.length);
  B(u, g) ? D(f, e) : k(f, e, u);
  const A = r.origin ?? O;
  if (!Y(A, O)) {
    const [i, F, a] = A;
    for (let d = 0; d < f.length; d += 3) f[d] += i, f[d + 1] += F, f[d + 2] += a;
  }
  return C(f, n, 0, f, s, 0, f.length / 3) ? f : null;
}
function U(r) {
  return r.isWGS84 || z(r) || H(r) || I(r);
}
(function(r) {
  r[r.NORMAL = 0] = "NORMAL", r[r.TANGENT = 1] = "TANGENT";
})(m || (m = {})), function(r) {
  r[r.TO_PCPF = 0] = "TO_PCPF", r[r.FROM_PCPF = 1] = "FROM_PCPF";
}(T || (T = {}));
const N = S(), l = S(), p = q(), c = W();
export {
  m as VectorType,
  fr as loadProjectErrorMessage,
  lr as logProjectionError,
  dr as project,
  Tr as projectFromPCPF,
  pr as projectNormalFromPCPF,
  ur as projectNormalToPCPF,
  Fr as projectTangentFromPCPF,
  Ar as projectTangentToPCPF,
  mr as projectToPCPF,
  Pr as transformNormal,
  yr as transformTangent
};
//# sourceMappingURL=projection-aThzGnG_.js.map
