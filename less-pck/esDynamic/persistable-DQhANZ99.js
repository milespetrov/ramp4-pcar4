import { e5 as $, e6 as b, e7 as j, e8 as h, e9 as P, ea as N, eb as x, ec as S, ed as v, ee as A, s as O, ef as R, dC as F, b3 as C, eg as J, b4 as K, eh as z } from "./main-n1d2W0Ts.js";
import { i as H } from "./multiOriginJSONSupportUtils-DGETddQl.js";
import { p as y } from "./resourceExtension-Ch53yApk.js";
function L(e) {
  const r = e?.origins ?? [void 0];
  return (o, n) => {
    const t = V(e, o, n);
    for (const c of r) {
      const i = $(o, c, n);
      for (const s in t) i[s] = t[s];
    }
  };
}
function V(e, r, o) {
  if (e?.type === "resource") return Y(e, r, o);
  switch (e?.type ?? "other") {
    case "other":
      return { read: !0, write: !0 };
    case "url": {
      const { read: n, write: t } = z;
      return { read: n, write: t };
    }
  }
}
function Y(e, r, o) {
  const n = b(r, o);
  return { type: String, read: (t, c, i) => {
    const s = j(t, c, i);
    return n.type === String ? s : typeof n.type == "function" ? new n.type({ url: s }) : void 0;
  }, write: { writer(t, c, i, s) {
    if (!s?.resources) return typeof t == "string" ? void (c[i] = h(t, s)) : void (c[i] = t.write({}, s));
    const a = q(t), p = h(a, { ...s, verifyItemRelativeUrls: s?.verifyItemRelativeUrls ? { writtenUrls: s.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, P.NO), d = n.type !== String && (!H(this) || s?.origin && this.originIdOf(o) > N(s.origin)), u = { object: this, propertyName: o, value: t, targetUrl: p, dest: c, targetPropertyName: i, context: s, params: e };
    s?.portalItem && p && !x(p) ? d && e?.contentAddressed ? g(u) : d ? Z(u) : k(u) : s?.portalItem && (p == null || S(p) != null || v(p) || d) ? g(u) : c[i] = p;
  } } };
}
function g(e) {
  const { targetUrl: r, params: o, value: n, context: t, dest: c, targetPropertyName: i } = e;
  if (!t.portalItem) return;
  const s = A(r), a = w(n, r, t);
  if (o?.contentAddressed && a.type !== "json") return void t.messages?.push(new O("persistable:contentAddressingUnsupported", `Property "${i}" is trying to serializing a resource with content of type ${a.type} with content addressing. Content addressing is only supported for json resources.`, { content: a }));
  const p = o?.contentAddressed && a.type === "json" ? R(a.jsonString) : s?.filename ?? F(), d = C(o?.prefix ?? s?.prefix, p), u = `${d}.${y(a)}`;
  if (o?.contentAddressed && t.resources && a.type === "json") {
    const f = t.resources.toKeep.find(({ resource: m }) => m.path === u) ?? t.resources.toAdd.find(({ resource: m }) => m.path === u);
    if (f) return void (c[i] = f.resource.itemRelativeUrl);
  }
  const l = t.portalItem.resourceFromPath(u);
  v(r) && t.resources && t.resources.pendingOperations.push(J(r).then((f) => {
    l.path = `${d}.${y({ type: "blob", blob: f })}`, c[i] = l.itemRelativeUrl;
  }).catch(() => {
  }));
  const I = o?.compress ?? !1;
  t.resources && U({ ...e, resource: l, content: a, compress: I, updates: t.resources.toAdd }), c[i] = l.itemRelativeUrl;
}
function Z(e) {
  const { context: r, targetUrl: o, params: n, value: t, dest: c, targetPropertyName: i } = e;
  if (!r.portalItem) return;
  const s = r.portalItem.resourceFromPath(o), a = w(t, o, r), p = y(a), d = K(s.path), u = n?.compress ?? !1;
  p === d ? (r.resources && U({ ...e, resource: s, content: a, compress: u, updates: r.resources.toUpdate }), c[i] = o) : g(e);
}
function k({ context: e, targetUrl: r, dest: o, targetPropertyName: n }) {
  e.portalItem && e.resources && (e.resources.toKeep.push({ resource: e.portalItem.resourceFromPath(r), compress: !1 }), o[n] = r);
}
function U({ object: e, propertyName: r, updates: o, resource: n, content: t, compress: c }) {
  const i = (s) => {
    B(e, r, s);
  };
  o.push({ resource: n, content: t, compress: c, finish: i });
}
function w(e, r, o) {
  return typeof e == "string" ? { type: "url", url: r } : { type: "json", jsonString: JSON.stringify(e.toJSON(o)) };
}
function q(e) {
  return e == null ? null : typeof e == "string" ? e : e.url;
}
function B(e, r, o) {
  typeof e[r] == "string" ? e[r] = o.url : e[r].url = o.url;
}
export {
  L as j
};
//# sourceMappingURL=persistable-DQhANZ99.js.map
