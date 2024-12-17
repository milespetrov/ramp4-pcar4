import { $ as l } from "./main-Bnvk3STL.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-D7U-j9zY.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-Dy01ixAn.js")).default, CSVLayer: async () => (await import("./CSVLayer-BdyHgTIb.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-CjnBNn-i.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-cZTN00nF.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-BXLEubtI.js")).default, FeatureLayer: async () => (await import("./main-Bnvk3STL.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-BT9qrGlu.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-CnUoWZ6a.js")).default, GroupLayer: async () => (await import("./GroupLayer-Drw3s1UT.js")).default, ImageryLayer: async () => (await import("./main-Bnvk3STL.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-C_X3fhTt.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-BiQSbDB_.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-CC3O9-XR.js")).default, KMLLayer: async () => (await import("./KMLLayer-DFoAzv60.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-C2nwFSyo.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-B7gQJfXH.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-_T2f9dYC.js")).default, MapImageLayer: async () => (await import("./main-Bnvk3STL.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-DYCAFXcj.js")).default, MediaLayer: async () => (await import("./MediaLayer-xnTFSxrU.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-Cyy4KWzU.js")).default, OpenStreetMapLayer: async () => (await import("./main-Bnvk3STL.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-ma8_mMeR.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-DtbMzu6D.js")).default, RouteLayer: async () => (await import("./RouteLayer-CthRqTkW.js")).default, SceneLayer: async () => (await import("./SceneLayer-CwNy12-i.js")).default, StreamLayer: async () => (await import("./StreamLayer-Cghm71Mi.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-6D7kAclj.js")).default, TileLayer: async () => (await import("./main-Bnvk3STL.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-DQh9KOUm.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-CHKqJG1W.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-C9rgXGeD.js")).default, VideoLayer: async () => (await import("./VideoLayer-_53vOl6Z.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DnGFO5Ge.js")).default, WFSLayer: async () => (await import("./WFSLayer-DfE3Tj_6.js")).default, WMSLayer: async () => (await import("./main-Bnvk3STL.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-EL0zT5nm.js")).default, WebTileLayer: async () => (await import("./main-Bnvk3STL.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function g(a, t) {
  const { loadContext: e, ...r } = t || {}, i = e ? await e.fetchServiceMetadata(a, r) : await s(a, r);
  u(i), c(i);
  const y = { serviceJSON: i };
  if ((i.currentVersion ?? 0) < 10.5) return y;
  const o = `${a}/layers`, n = e ? await e.fetchServiceMetadata(o, r) : await s(o, r);
  return u(n), c(n), y.layersJSON = { layers: n.layers, tables: n.tables }, y;
}
function p(a) {
  const { type: t } = a;
  return !!t && f.has(t);
}
function d(a) {
  return a.type === "Table";
}
function c(a) {
  a.layers = a.layers?.filter(p), a.tables = a.tables?.filter(d);
}
function L(a) {
  a.type ||= "Feature Layer";
}
function m(a) {
  a.type ||= "Table";
}
function u(a) {
  a.layers?.forEach(L), a.tables?.forEach(m);
}
function S(a) {
  switch (a) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}
export {
  h as a,
  s as b,
  S as i,
  g as t
};
//# sourceMappingURL=fetchService-CWDlcoN_.js.map
