import { s as n, b$ as f, c0 as u, c1 as p, a2 as m } from "./main-n1d2W0Ts.js";
async function $(i, s, o, e) {
  if (!s) throw new n("post:missing-guid", "guid for version is missing");
  const t = f(i), r = o.toJSON(), a = u(t.query, { query: p({ ...r, f: "json" }), ...e, method: "post" });
  s.startsWith("{") && (s = s.slice(1, -1));
  const d = `${t.path}/versions/${s}/deleteForwardEdits`, { data: c } = await m(d, a);
  return c;
}
export {
  $ as deleteForwardEdits
};
//# sourceMappingURL=deleteForwardEdits-xpRKdfR7.js.map
