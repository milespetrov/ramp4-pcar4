import { cH as G, aS as O, a6 as j, cI as z, cJ as L, cK as E, cL as V, cM as _, bv as A, cN as D, cO as P } from "./main-n1d2W0Ts.js";
import { Z as R } from "./utils-DblhnyhH.js";
import { c as T, B as S } from "./utils-qMIyw8_M.js";
let m = null;
const U = /^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;
function Y(t, e, s) {
  return t.x < 0 ? t.x += e : t.x > s && (t.x -= e), t;
}
function K(t, e, s, r) {
  const a = G(s) ? O(s) : null, c = a ? Math.round((a.valid[1] - a.valid[0]) / e.scale[0]) : null;
  return t.map((o) => {
    const i = new j(o.geometry);
    return z(e, i, i), o.geometry = a ? Y(i, c ?? 0, r[0]) : i, o;
  });
}
function W(t, e = 18, s, r, a) {
  const c = new Float64Array(r * a);
  e = Math.round(D(e));
  let o = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
  const N = P(s);
  for (const { geometry: h, attributes: M } of t) {
    const { x: $, y: u } = h, I = Math.max(0, $ - e), g = Math.max(0, u - e), F = Math.min(a, u + e), b = Math.min(r, $ + e), p = +N(M);
    for (let f = g; f < F; f++) for (let d = I; d < b; d++) {
      const y = f * r + d, w = L(d - $, f - u, e) * p, l = c[y] += w;
      o = Math.min(o, l), i = Math.max(i, l);
    }
  }
  return { min: o, max: i };
}
function Z(t) {
  const e = U.exec(t);
  if (!e) return null;
  const { hh: s, mm: r, ss: a, ms: c } = e.groups;
  return Number(s) * E.hours + Number(r) * E.minutes + Number(a) * E.seconds + Number(c || 0);
}
async function k(t, e, s = !0) {
  if (!e) return [];
  const { field: r, field2: a, field3: c, fieldDelimiter: o, fieldInfos: i, timeZone: N } = t, h = r && i?.find((l) => l.name.toLowerCase() === r.toLowerCase()), M = !!h && V(h), $ = !!h && R(h), u = t.valueExpression, I = t.normalizationType, g = t.normalizationField, F = t.normalizationTotal, b = [], p = t.viewInfoParams;
  let f = null, d = null;
  if (u) {
    if (!m) {
      const { arcadeUtils: l } = await _();
      m = l;
    }
    m.hasGeometryOperations(u) && await m.enableGeometryOperations(), f = m.createFunction(u), d = p ? m.getViewInfo({ viewingMode: p.viewingMode, scale: p.scale, spatialReference: new A(p.spatialReference) }) : null;
  }
  const y = t.fieldInfos, w = !(e[0] && "declaredClass" in e[0] && e[0].declaredClass === "esri.Graphic") && y ? { fields: y } : null;
  return e.forEach((l) => {
    const x = l.attributes;
    let n;
    if (u) {
      const v = w ? { ...l, layer: w } : l, C = m.createExecContext(v, d, N);
      n = m.executeFunction(f, C);
    } else x && (n = x[r], a ? (n = `${T(n)}${o}${T(x[a])}`, c && (n = `${n}${o}${T(x[c])}`)) : typeof n == "string" && s && ($ ? n = n ? new Date(n).getTime() : null : M && (n = n ? Z(n) : null)));
    if (I && typeof n == "number" && isFinite(n)) {
      const v = x && parseFloat(x[g]);
      n = S(n, I, v, F);
    }
    b.push(n);
  }), b;
}
export {
  k as b,
  K as j,
  Z as w,
  W as x
};
//# sourceMappingURL=utils-COd2Fnz7.js.map
