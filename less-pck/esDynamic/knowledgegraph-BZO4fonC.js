import { C as x, a4 as C, bl as E, bm as J, bn as K, bv as I, a0 as M, eB as W, eD as Q, eE as j } from "./main-n1d2W0Ts.js";
import { a as G, b as u, r as c, I as U, m as P, G as w, ab as V, P as B, N as T, U as R, A as H, E as q, X as k, w as X, v as _, ac as z, ad as F, ae as L } from "./arcadeUtils-DX3YxXnM.js";
import { l as O } from "./portalUtils-B3_HZ--B.js";
import { p as Y, n as Z } from "./project-CPSJV2Ma.js";
import { s as $, m as nn, t as tn, p as en, c as an } from "./GraphQueryStreaming-DGwftPd5.js";
let f = null;
async function rn(n) {
  const t = C.geometryServiceUrl ?? "";
  if (!t) {
    E() || await J();
    for (const e of n) e.container[e.indexer] = K(e.container[e.indexer], I.WGS84);
    return;
  }
  const a = n.map((e) => e.container[e.indexer]), i = new Y({ geometries: a, outSpatialReference: I.WGS84 }), s = await Z(t, i);
  for (let e = 0; e < s.length; e++) {
    const r = n[e];
    r.container[r.indexer] = s[e];
  }
}
async function D(n, t) {
  const a = new M({ portal: n, id: t });
  return await a.load(), f === null && (f = await import("./knowledgeGraphService-Cn2ASkSk.js").then((i) => i.k)), await f.fetchKnowledgeGraph(a.url);
}
function v(n, t, a, i, s) {
  if (n === null) return null;
  if (w(n) || q(n)) return n;
  if (k(n) || k(n)) return n.toJSDate();
  if (X(n)) return n.toStorageFormat();
  if (_(n)) return n.toStorageString();
  if (z(n)) {
    const e = {};
    for (const r of n.keys()) e[r] = v(n.field(r), t, a, i, s), e[r] instanceof W && s.push({ container: e, indexer: r });
    return e;
  }
  if (R(n)) {
    const e = n.map((r) => v(r, t, a, i, s));
    for (let r = 0; r < e.length; r++) e[r] instanceof W && s.push({ container: e, indexer: r });
    return e;
  }
  return F(n) ? n.spatialReference.isWGS84 ? n : n.spatialReference.isWebMercator && t ? Q(n) : n : void 0;
}
function on(n, t) {
  if (!n) return n;
  if (n.spatialReference.isWGS84 && t.spatialReference.isWebMercator) return j(n);
  if (n.spatialReference.equals(t.spatialReference)) return n;
  throw new u(t, c.WrongSpatialReference, null);
}
function S(n, t) {
  if (!n) return null;
  const a = {};
  for (const i in n) a[i] = d(n[i], t);
  return a;
}
function d(n, t) {
  return n === null ? null : R(n) ? n.map((a) => d(a, t)) : n instanceof nn ? { graphTypeName: n.typeName, id: n.id, graphType: "entity", properties: S(n.properties, t) } : n instanceof tn ? { graphType: "object", properties: S(n.properties, t) } : n instanceof en ? { graphTypeName: n.typeName, id: n.id, graphType: "relationship", originId: n.originId ?? null, destinationId: n.destinationId ?? null, properties: S(n.properties, t) } : n instanceof an ? { graphType: "path", path: n.path ? n.path.map((a) => d(a, t)) : null } : F(n) ? on(n, t) : w(n) || q(n) || L(n) ? n : null;
}
function pn(n) {
  n.mode === "async" && (n.functions.knowledgegraphbyportalitem = function(t, a) {
    return n.standardFunctionAsync(t, a, (i, s, e) => {
      if (G(e, 2, 2, t, a), e[0] === null) throw new u(t, c.PortalRequired, a);
      if (e[0] instanceof U) {
        const m = P(e[1]);
        let p;
        return p = t.services?.portal ? t.services.portal : x.getDefault(), D(O(e[0], p), m);
      }
      if (w(e[0]) === !1) throw new u(t, c.InvalidParameter, a);
      const r = P(e[0]);
      return D(t.services?.portal ?? x.getDefault(), r);
    });
  }, n.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), n.functions.querygraph = function(t, a) {
    return n.standardFunctionAsync(t, a, async (i, s, e) => {
      G(e, 2, 4, t, a);
      const r = e[0];
      if (!V(r)) throw new u(t, c.InvalidParameter, a);
      const m = e[1];
      if (!w(m)) throw new u(t, c.InvalidParameter, a);
      f === null && (f = await import("./knowledgeGraphService-Cn2ASkSk.js").then((o) => o.k));
      let p = null;
      const h = B(e[2], null);
      if (!(h instanceof T || h === null)) throw new u(t, c.InvalidParameter, a);
      if (h) {
        let o = [];
        p = v(h, !0, !1, t, o), o = o.filter((l) => !l.container[l.indexer].spatialReference.isWGS84), o.length > 0 && await rn(o);
      }
      const b = new $({ openCypherQuery: m, bindParameters: p });
      (r?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (b.outputSpatialReference = t.spatialReference);
      const N = (await f.executeQueryStreaming(r, b)).resultRowsStream.getReader(), y = [];
      try {
        for (; ; ) {
          const { done: o, value: l } = await N.read();
          if (o) break;
          if (R(l)) for (const g of l) y.push(d(g, t));
          else {
            const g = [];
            for (const A of l) g.push(d(l[A], t));
            y.push(g);
          }
        }
      } catch (o) {
        throw o;
      }
      return T.convertJsonToArcade(y, H(t), !1, !0);
    });
  }, n.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  pn as registerFunctions
};
//# sourceMappingURL=knowledgegraph-BZO4fonC.js.map
