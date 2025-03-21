import { s as m, Z as P, C as h, i as x, f as N } from "./main-Bnvk3STL.js";
import { i as d } from "./originUtils-BLsWtgV9.js";
import { o as S } from "./jsonContext-DHQfRv7h.js";
import { i as b } from "./saveAPIKeyUtils-DadORnR7.js";
import { t as g } from "./saveUtils-3XCJG4Mj.js";
function O(e, r, a) {
  const t = a(e);
  if (!t.isValid) throw new m(`${r}:invalid-parameters`, t.errorMessage, { layer: e });
}
async function y(e) {
  const { layer: r, errorNamePrefix: a, validateLayer: t } = e;
  await r.load(), O(r, a, t);
}
function u(e, r) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${r}`;
}
function w(e) {
  const { item: r, errorNamePrefix: a, layer: t, validateItem: i } = e;
  if (b(r), J(e), i) {
    const n = i(r);
    if (!n.isValid) throw new m(`${a}:invalid-parameters`, n.errorMessage, { layer: t });
  }
}
function J(e) {
  const { item: r, itemType: a, additionalItemType: t, errorNamePrefix: i, layer: n } = e, s = [a];
  if (t && s.push(t), !s.includes(r.type)) {
    const p = s.map((o) => `'${o}'`).join(", ");
    throw new m(`${i}:portal-item-wrong-type`, `Portal item type should be one of: "${p}"`, { item: r, layer: n });
  }
}
function C(e) {
  const { layer: r, errorNamePrefix: a } = e, { portalItem: t } = r;
  if (!t) throw new m(`${a}:portal-item-not-set`, u(r, "requires the portalItem property to be set"));
  if (!t.loaded) throw new m(`${a}:portal-item-not-loaded`, u(r, "cannot be saved to a portal item that does not exist or is inaccessible"));
  w({ ...e, item: t });
}
function E(e) {
  const { newItem: r, itemType: a } = e;
  let t = P.from(r);
  return t.id && (t = t.clone(), t.id = null), t.type ??= a, t.portal ??= h.getDefault(), w({ ...e, item: t }), t;
}
function $(e) {
  return S(e, "portal-item");
}
async function I(e, r, a) {
  "beforeSave" in e && typeof e.beforeSave == "function" && await e.beforeSave();
  const t = e.write({}, r);
  return await Promise.all(r.resources?.pendingOperations ?? []), g(r, { errorName: "layer-write:unsupported" }, a), t;
}
function v(e) {
  x(e, N.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((r, a, t) => t.indexOf(r) === a));
}
async function U(e, r, a) {
  const t = e.portal;
  await t.signIn(), await t.user?.addItem({ item: e, data: r, folder: a?.folder });
}
async function M(e, r) {
  const { layer: a, createItemData: t, createJSONContext: i, setItemProperties: n, saveResources: s, supplementalUnsupportedErrors: p } = e;
  await y(e), C(e);
  const o = a.portalItem, l = i ? i(o) : $(o), c = await I(a, l, { ...r, supplementalUnsupportedErrors: p }), f = await t({ layer: a, layerJSON: c }, o);
  return await n?.(a, o), v(o), await o.update({ data: f }), d(l), await s?.(o, l), o;
}
async function R(e, r) {
  const { layer: a, createItemData: t, createJSONContext: i, setItemProperties: n, saveResources: s, supplementalUnsupportedErrors: p } = e;
  await y(e);
  const o = E(e), l = i ? i(o) : $(o), c = await I(a, l, { ...r, supplementalUnsupportedErrors: p }), f = await t({ layer: a, layerJSON: c }, o);
  return await n(a, o), v(o), await U(o, f, r), a.portalItem = o, d(l), await s?.(o, l), o;
}
export {
  M as $,
  R as j
};
//# sourceMappingURL=utils-BUoIe1c6.js.map
