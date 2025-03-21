import { a6 as u, a7 as n, a8 as a, a9 as i, aa as c } from "./main-Bnvk3STL.js";
import { t as l } from "./QueryEngineCapabilities-Deb54eFC.js";
function A(t) {
  return { renderer: { type: "simple", symbol: t === "esriGeometryPoint" || t === "esriGeometryMultipoint" ? u : t === "esriGeometryPolyline" ? n : a } };
}
const y = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
let d = 1;
function $(t, s) {
  if (i("esri-csp-restrictions")) return () => ({ [s]: null, ...t });
  try {
    let e = `this${p(s)} = null;`;
    for (const r in t)
      e += `this${p(r)} = ${JSON.stringify(t[r])};`;
    const o = new Function(`
      return class AttributesClass$${d++} {
        constructor() {
          ${e};
        }
      }
    `)();
    return () => new o();
  } catch {
    return () => ({ [s]: null, ...t });
  }
}
function p(t) {
  return y.test(t) ? `.${t}` : `["${t}"]`;
}
function f(t = {}) {
  return [{ name: "New Feature", description: "", prototype: { attributes: c(t) } }];
}
function C(t, s) {
  return { analytics: { supportsCacheHint: !1 }, attachment: null, data: { isVersioned: !1, supportsAttachment: !1, supportsM: !1, supportsZ: t }, metadata: { supportsAdvancedFieldProperties: !1 }, operations: { supportsCalculate: !1, supportsTruncate: !1, supportsValidateSql: !1, supportsAdd: s, supportsDelete: s, supportsEditing: s, supportsChangeTracking: !1, supportsQuery: !0, supportsQueryAnalytics: !1, supportsQueryAttachments: !1, supportsQueryTopFeatures: !1, supportsResizeAttachments: !1, supportsSync: !1, supportsUpdate: s, supportsExceedsLimitStatistics: !0, supportsAsyncConvert3D: !1 }, query: l, queryRelated: { supportsCount: !0, supportsOrderBy: !0, supportsPagination: !0, supportsCacheHint: !1 }, queryTopFeatures: { supportsCacheHint: !1 }, editing: { supportsGeometryUpdate: s, supportsGlobalId: !1, supportsReturnServiceEditsInSourceSpatialReference: !1, supportsRollbackOnFailure: !1, supportsUpdateWithoutM: !1, supportsUploadWithItemId: !1, supportsDeleteByAnonymous: !1, supportsDeleteByOthers: !1, supportsUpdateByAnonymous: !1, supportsUpdateByOthers: !1, supportsAsyncApplyEdits: !1, zDefault: void 0 } };
}
export {
  f as c,
  $ as i,
  C as l,
  A as o
};
//# sourceMappingURL=clientSideDefaults-Bwi5Hqyg.js.map
