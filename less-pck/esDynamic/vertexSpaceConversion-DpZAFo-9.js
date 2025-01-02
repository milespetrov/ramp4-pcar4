import { bp as I, c9 as J, g0 as L, aI as M, g1 as V, g2 as Y, g3 as b, cg as T, g4 as B, cl as h, ca as K, eM as Q, g5 as W, D as X, di as Z, e0 as _ } from "./main-n1d2W0Ts.js";
import { e as nn } from "./mat3f64-Dh9_zhFu.js";
import { o as tn, e as E } from "./mat4f64-Dn1WEGBx.js";
import { a as A } from "./spatialReferenceEllipsoidUtils-BRPBRXx9.js";
import { u as F } from "./computeTranslationToOriginAndRotation-BQ5vrujS.js";
import { m as rn } from "./meshVertexSpaceUtils-BSZfC57T.js";
import { i as v, e as S, f as z } from "./vec3-CQg9d0_-.js";
import { logProjectionError as $, transformNormal as k, transformTangent as q, projectFromPCPF as en, projectNormalFromPCPF as on, projectTangentFromPCPF as an, projectToPCPF as ln, projectNormalToPCPF as sn, projectTangentToPCPF as cn } from "./projection-aThzGnG_.js";
function U(n, t, r, o) {
  if (I(n.spatialReference, r)) {
    w[0] = n.x, w[1] = n.y;
    const a = n.z;
    return w[2] = a ?? o ?? 0, J(w, n.spatialReference, 0, t, r, 0, 1);
  }
  const e = L(n, r);
  return !!e && (t[0] = e?.x, t[1] = e?.y, t[2] = e?.z ?? o ?? 0, !0);
}
const w = M(), g = () => X.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");
function Nn(n, t, { vertexSpace: r, spatialReference: o }) {
  if (r.type === "georeferenced") {
    const u = n;
    if (!U(t, u, o)) return !1;
    const { origin: c } = r;
    return Z(n, u, c), !0;
  }
  const e = A(o), a = n;
  if (!U(t, a, e)) return !1;
  const { origin: i } = r, l = d;
  if (!F(o, i, l, e)) return !1;
  const s = h(d, l);
  return s != null && (_(n, a, s), !0);
}
function On(n, t, r) {
  const { vertexSpace: o, transform: e, vertexAttributes: a } = n, i = y(n.spatialReference, r, p.SOURCE | p.TARGET);
  if (rn(o, t) && (!e || V(e.localMatrix, tn)) && Y(i, 1)) {
    const { position: l, normal: s, tangent: u } = a, c = r?.allowBufferReuse;
    return { position: c ? l : l.slice(), normal: c ? s : s?.slice(), tangent: c ? u : u?.slice() };
  }
  switch (n.vertexSpace.type) {
    case "local":
      return t.type === "local" ? mn(n, n.vertexSpace, t.origin, r) : fn(n, n.vertexSpace, t.origin, r);
    case "georeferenced":
      return t.type === "local" ? gn(n, n.vertexSpace, t.origin, r) : un(n, n.vertexSpace, t.origin, r);
  }
}
function un({ vertexAttributes: n, transform: t, spatialReference: r }, { origin: o }, e, a) {
  const { position: i, normal: l, tangent: s } = t ? P(n, t.localMatrix) : n, u = new Float64Array(i.length);
  let c = i;
  if (o && (c = v(u, c, o)), e) {
    const x = b(H, e);
    c = v(u, c, x);
  }
  y(r, a, p.NONE);
  const m = a?.allowBufferReuse;
  return { position: c !== n.position || m ? c : c.slice(), normal: l !== n.normal || m ? l : l?.slice(), tangent: s !== n.tangent || m ? s : s?.slice() };
}
function fn({ spatialReference: n, vertexAttributes: t, transform: r }, { origin: o }, e, a) {
  const i = A(n);
  if (!F(n, o, f, i)) return $(g(), n, i), null;
  r && T(f, f, r.localMatrix), D(f, n, a, p.SOURCE);
  const l = new Float64Array(t.position.length), s = $n(t.position, f, n, l);
  if (!s) return null;
  const u = An(s, l, t.normal, f, n);
  if (t.normal && !u) return null;
  const c = xn(s, l, t.tangent, f, n);
  if (t.tangent && !c) return null;
  if (e) {
    const m = b(H, e);
    v(s, s, m);
  }
  return { position: s, normal: u, tangent: c };
}
function gn({ vertexAttributes: n, spatialReference: t, transform: r }, { origin: o }, e, a) {
  const i = A(t);
  if (!F(t, e, f, i)) return $(g(), t, i), null;
  const l = 1 / y(t, a, p.TARGET);
  B(f, f, [l, l, l]);
  const s = h(R, f), { position: u, normal: c, tangent: m } = pn(n, o, r), x = new Float64Array(u.length), C = Rn(u, t, s, x);
  if (!C) return null;
  const j = K(wn, s), N = Fn(c, u, x, t, j, c !== n.normal ? c : void 0);
  if (!N && c) return null;
  const O = vn(m, u, x, t, j, m !== n.tangent ? m : void 0);
  return !O && m ? null : { position: C, normal: N, tangent: O };
}
function pn(n, t, r) {
  if (!t) return n;
  if (!r) {
    const { position: e, normal: a, tangent: i } = n;
    return { position: v(new Float64Array(e.length), e, t), tangent: i, normal: a };
  }
  const o = P(n, r.localMatrix);
  return v(o.position, o.position, t), o;
}
function mn({ vertexAttributes: n, spatialReference: t, transform: r }, { origin: o }, e, a) {
  const i = A(t);
  if (!F(t, o, f, i)) return $(g(), t, i), null;
  if (r && T(f, f, r.localMatrix), !F(t, e, R, i)) return $(g(), i, t), null;
  h(R, R);
  const l = T(f, R, f);
  return D(l, t, a, p.SOURCE | p.TARGET), P(n, l);
}
function P(n, t) {
  const r = new Float64Array(n.position.length);
  S(r, n.position, t);
  const o = n.normal ? new Float32Array(n.normal.length) : null, e = n.tangent ? new Float32Array(n.tangent.length) : null;
  return o && n.normal && k(n.normal, o, t), e && n.tangent && q(n.tangent, e, t), { position: r, normal: o, tangent: e };
}
function $n(n, t, r, o) {
  S(o, n, t);
  const e = new Float64Array(n.length);
  return en(o, e, r) ? e : ($(g(), A(r), r), null);
}
function An(n, t, r, o, e) {
  if (r == null) return null;
  const a = new Float32Array(r.length);
  return k(r, a, o), on(a, n, t, e, a) ? a : ($(g(), A(e), e), null);
}
function xn(n, t, r, o, e) {
  if (r == null) return null;
  const a = new Float32Array(r.length);
  return q(r, a, o), an(a, n, t, e, a) ? a : ($(g(), A(e), e), null);
}
function D(n, t, r, o) {
  const e = y(t, r, o);
  e !== 1 && B(n, n, [e, e, e]);
}
function y(n, t, r) {
  const o = !!(r & p.SOURCE), e = !!(r & p.TARGET), a = t?.sourceUnit, i = t?.targetUnit;
  if (!a && !i) return 1;
  let l = G(a, n);
  !o && a && l !== 1 && (g().warn("source unit conversion not supported"), l = 1);
  let s = 1 / G(i, n);
  return !e && i && s !== 1 && (g().warn("target unit conversion not supported"), s = 1), l * s;
}
function Rn(n, t, r, o) {
  const e = ln(n, t, o);
  if (!e) return $(g(), t, A(t)), null;
  const a = new Float64Array(e.length);
  return S(a, e, r), a;
}
function Fn(n, t, r, o, e, a) {
  if (n == null) return null;
  const i = a ?? new Float32Array(n.length);
  return sn(n, t, r, o, i) ? (z(i, i, e), i) : ($(g(), o, A(o)), null);
}
function vn(n, t, r, o, e, a) {
  if (n == null) return null;
  const i = a ?? new Float32Array(n.length);
  return cn(n, t, r, o, i) ? (z(i, i, e, 4), i) : ($(g(), o, A(o)), null);
}
function G(n, t) {
  if (n == null) return 1;
  const r = Q(t);
  return 1 / W(r, "meters", n);
}
const f = E(), R = E(), wn = nn(), H = M(), d = E();
var p;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.SOURCE = 1] = "SOURCE", n[n.TARGET = 2] = "TARGET";
})(p || (p = {}));
export {
  On as M,
  Nn as N,
  G as X,
  U as c
};
//# sourceMappingURL=vertexSpaceConversion-DpZAFo-9.js.map
