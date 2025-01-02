import { a2 as l } from "./main-n1d2W0Ts.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-CRt34qlC.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-CyuXI2pY.js")).default, CSVLayer: async () => (await import("./CSVLayer-CDtnr9Bc.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-CNSHV3pa.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-BuRSKpr9.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-C7UOtP_1.js")).default, FeatureLayer: async () => (await import("./main-n1d2W0Ts.js").then((a) => a.t0)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-PMmlY5mH.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-DRZ2GrD4.js")).default, GroupLayer: async () => (await import("./GroupLayer-B4Ugj7Rd.js")).default, ImageryLayer: async () => (await import("./main-n1d2W0Ts.js").then((a) => a.t1)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-DO1RIeC7.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-DDKu2zYa.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-CgbxgtDA.js")).default, KMLLayer: async () => (await import("./KMLLayer-DDK3-o_y.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-DQU3cB8c.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-DOAlK0ce.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-BOVDVVrx.js")).default, MapImageLayer: async () => (await import("./main-n1d2W0Ts.js").then((a) => a.t2)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-D4QyCKX0.js")).default, MediaLayer: async () => (await import("./MediaLayer-Rh9ONhIz.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-BKjhP0gG.js")).default, OpenStreetMapLayer: async () => (await import("./main-n1d2W0Ts.js").then((a) => a.t4)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-DdvH8qae.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-CoaE3S7i.js")).default, RouteLayer: async () => (await import("./RouteLayer-DfoMBIjO.js")).default, SceneLayer: async () => (await import("./SceneLayer-DqfvWBsY.js")).default, StreamLayer: async () => (await import("./StreamLayer-CnWfLUeG.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-B2U3ol_y.js")).default, TileLayer: async () => (await import("./main-n1d2W0Ts.js").then((a) => a.t5)).default, UnknownLayer: async () => (await import("./UnknownLayer-DrYHZEz8.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-Bsdu-qMO.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-rPlplaMP.js")).default, VideoLayer: async () => (await import("./VideoLayer-CBXep8iU.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DEOGEyjl.js")).default, WFSLayer: async () => (await import("./WFSLayer-kBJ5pTEi.js")).default, WMSLayer: async () => (await import("./main-n1d2W0Ts.js").then((a) => a.t6)).default, WMTSLayer: async () => (await import("./WMTSLayer-D8dlEO_r.js")).default, WebTileLayer: async () => (await import("./main-n1d2W0Ts.js").then((a) => a.t3)).default }, p = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function S(a, t) {
  const { loadContext: e, ...r } = t || {}, i = e ? await e.fetchServiceMetadata(a, r) : await s(a, r);
  u(i), c(i);
  const y = { serviceJSON: i };
  if ((i.currentVersion ?? 0) < 10.5) return y;
  const o = `${a}/layers`, n = e ? await e.fetchServiceMetadata(o, r) : await s(o, r);
  return u(n), c(n), y.layersJSON = { layers: n.layers, tables: n.tables }, y;
}
function f(a) {
  const { type: t } = a;
  return !!t && p.has(t);
}
function d(a) {
  return a.type === "Table";
}
function c(a) {
  a.layers = a.layers?.filter(f), a.tables = a.tables?.filter(d);
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
function g(a) {
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
  g as i,
  S as t
};
//# sourceMappingURL=fetchService-RtHnGpiQ.js.map
