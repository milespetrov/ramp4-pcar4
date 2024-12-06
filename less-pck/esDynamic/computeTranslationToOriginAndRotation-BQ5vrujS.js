import { g6 as P, g7 as _, g8 as S, g9 as f, ga as s, K as g, gb as N, gc as l, gd as O, ge as M, aI as i } from "./main-n1d2W0Ts.js";
function u(C, o, t) {
  const c = Math.sin(C), r = Math.cos(C), E = Math.sin(o), a = Math.cos(o), n = t;
  return n[0] = -c, n[4] = -E * r, n[8] = a * r, n[12] = 0, n[1] = r, n[5] = -E * c, n[9] = a * c, n[13] = 0, n[2] = 0, n[6] = a, n[10] = E, n[14] = 0, n[3] = 0, n[7] = 0, n[11] = 0, n[15] = 1, n;
}
function T(C, o, t) {
  return u(C, o, t), P(t, t), t;
}
function I(C, o, t, c) {
  if (C == null || c == null) return !1;
  const r = _(C, S), E = _(c, f);
  if (r === E && !e(E) && (r !== s.UNKNOWN || g(C, c))) return N(t, o), !0;
  if (e(E)) {
    const a = l[r][s.LON_LAT], n = l[s.LON_LAT][E];
    return a != null && n != null && (a(o, 0, L, 0), n(L, 0, A, 0), u(R * L[0], R * L[1], t), t[12] = A[0], t[13] = A[1], t[14] = A[2], !0);
  }
  if (!(E !== s.WEB_MERCATOR && E !== s.PLATE_CARREE && E !== s.WGS84 && E !== s.CGCS2000 || r !== s.WGS84 && r !== s.SPHERICAL_ECEF && r !== s.WEB_MERCATOR && r !== s.CGCS2000)) {
    const a = l[r][s.LON_LAT], n = l[s.LON_LAT][E];
    return a != null && n != null && (a(o, 0, L, 0), n(L, 0, A, 0), r === s.SPHERICAL_ECEF ? T(R * L[0], R * L[1], t) : O(t), t[12] = A[0], t[13] = A[1], t[14] = A[2], !0);
  }
  return !1;
}
function e(C) {
  return C === s.SPHERICAL_ECEF || C === s.SPHERICAL_MARS_PCPF || C === s.SPHERICAL_MOON_PCPF;
}
const R = M(1), L = i(), A = i();
export {
  I as u
};
//# sourceMappingURL=computeTranslationToOriginAndRotation-BQ5vrujS.js.map
