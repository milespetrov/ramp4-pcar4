import { O as s, P as i, Q as d, bV as h, cz as n, cy as f, iD as y, b$ as S, c0 as g, a2 as R, iE as w } from "./main-n1d2W0Ts.js";
let o = class extends h {
  constructor(e) {
    super(e), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const e = this.geometries.map((a) => a.toJSON()), t = this.geometries[0], r = {};
    return r.outSR = n(this.outSpatialReference), r.inSR = n(t.spatialReference), r.geometries = JSON.stringify({ geometryType: f(t), geometries: e }), this.transformation && (r.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), this.transformForward != null && (r.transformForward = this.transformForward), r;
  }
};
s([i()], o.prototype, "geometries", void 0), s([i({ json: { read: { source: "outSR" } } })], o.prototype, "outSpatialReference", void 0), s([i()], o.prototype, "transformation", void 0), s([i()], o.prototype, "transformForward", void 0), o = s([d("esri.rest.support.ProjectParameters")], o);
const O = o, $ = y(O);
async function F(e, t, r) {
  t = $(t);
  const a = S(e), p = { ...a.query, f: "json", ...t.toJSON() }, c = t.outSpatialReference, m = f(t.geometries[0]), u = g(p, r);
  return R(a.path + "/project", u).then(({ data: { geometries: l } }) => w(l, m, c));
}
export {
  F as n,
  O as p
};
//# sourceMappingURL=project-CPSJV2Ma.js.map
