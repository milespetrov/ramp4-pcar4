import { bv as c, cm as k, cn as u, co as m, cp as C, cq as f, cr as i } from "./main-n1d2W0Ts.js";
const U = new c(k), n = new c(u), e = new c(m), g = new c(C);
function q(t) {
  const p = l.get(t);
  if (p) return p;
  let s = U;
  if (t) if (t === n) s = n;
  else if (t === e) s = e;
  else {
    const o = t.wkid, a = t.latestWkid;
    if (o != null || a != null) f(o) || f(a) ? s = n : (i(o) || i(a)) && (s = e);
    else {
      const r = t.wkt2 ?? t.wkt;
      if (r) {
        const w = r.toUpperCase();
        w === d ? s = n : w === $ && (s = e);
      }
    }
  }
  return l.set(t, s), s;
}
const l = /* @__PURE__ */ new Map(), d = n.wkt.toUpperCase(), $ = e.wkt.toUpperCase();
export {
  q as a,
  g as w
};
//# sourceMappingURL=spatialReferenceEllipsoidUtils-BRPBRXx9.js.map
