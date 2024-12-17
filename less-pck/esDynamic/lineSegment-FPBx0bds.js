import { dg as a, aI as e, dh as m, di as c, aE as d, dj as p, dk as h, aP as P, dl as b } from "./main-n1d2W0Ts.js";
import { s as j } from "./sphere-C-09q0LQ.js";
import { c as k } from "./plane-fUOqQtDL.js";
function s(r) {
  return r ? { origin: a(r.origin), vector: a(r.vector) } : { origin: e(), vector: e() };
}
function E(r, n, o = s()) {
  return m(o.origin, r), c(o.vector, n, r), o;
}
function I(r, n, o) {
  return l(r, n, 0, 1, o);
}
function l(r, n, o, u, i) {
  const { vector: t, origin: v } = r, f = c(k.get(), n, v), g = d(t, f) / p(t);
  return h(i, t, P(g, o, u)), b(i, i, r.origin);
}
new j(() => s());
export {
  I as M,
  E as h,
  s as v
};
//# sourceMappingURL=lineSegment-FPBx0bds.js.map
