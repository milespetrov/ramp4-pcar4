import { O as t, P as l, Q as R, dH as V, fn as p, eo as k, b5 as q, fo as m, cd as g, fp as h, fk as c, bJ as x, fq as z, fr as i, aI as w } from "./main-n1d2W0Ts.js";
import { p as E } from "./normalizeUtilsSync-D4n7itZU.js";
import { e as d } from "./mat3f64-Dh9_zhFu.js";
let s = class extends V {
  constructor(o) {
    super(o);
  }
  get bounds() {
    const o = this.coords;
    return o?.extent == null ? null : p(o.extent);
  }
  get coords() {
    const o = this.element.georeference?.coords;
    return k(o, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return q.fromJSON(E(this.coords));
  }
  get normalizedBounds() {
    const o = this.normalizedCoords != null ? this.normalizedCoords.extent : null;
    return o != null ? p(o) : null;
  }
};
t([l()], s.prototype, "spatialReference", void 0), t([l()], s.prototype, "element", void 0), t([l()], s.prototype, "bounds", null), t([l()], s.prototype, "coords", null), t([l()], s.prototype, "normalizedCoords", null), t([l()], s.prototype, "normalizedBounds", null), s = t([R("esri.layers.support.MediaElementView")], s);
const r = w(), a = d(), u = d(), f = d();
function N(o, e, n) {
  return m(r, e[0], e[1], 1), g(r, r, h(a, n)), r[2] === 0 ? c(o, r[0], r[1]) : c(o, r[0] / r[2], r[1] / r[2]);
}
function P(o, e, n) {
  return y(u, e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), y(f, n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]), x(o, z(u, u), f), o[8] !== 0 && (o[0] /= o[8], o[1] /= o[8], o[2] /= o[8], o[3] /= o[8], o[4] /= o[8], o[5] /= o[8], o[6] /= o[8], o[7] /= o[8], o[8] /= o[8]), o;
}
function y(o, e, n, b, C, $, v, S, j) {
  i(o, e, b, $, n, C, v, 1, 1, 1), m(r, S, j, 1), z(a, o);
  const [B, J, O] = g(r, r, h(a, a));
  return i(a, B, 0, 0, 0, J, 0, 0, 0, O), x(o, a, o);
}
export {
  P as j,
  s as m,
  N as p
};
//# sourceMappingURL=perspectiveUtils-C_on04Ca.js.map
