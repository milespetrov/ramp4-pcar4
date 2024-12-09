import { $ as l } from "./main-B1IpazS3.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-HmXeZmPO.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-Cj7n4vrx.js")).default, CSVLayer: async () => (await import("./CSVLayer-CfmIkZ2x.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-BfhBExaI.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-vhmPpBdy.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-CUHhWVHz.js")).default, FeatureLayer: async () => (await import("./main-B1IpazS3.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-WKmiuHmY.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-CMqyyrLO.js")).default, GroupLayer: async () => (await import("./GroupLayer-B6misUNC.js")).default, ImageryLayer: async () => (await import("./main-B1IpazS3.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-BtWFausS.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-D53uxZx6.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-D_kbpS9Q.js")).default, KMLLayer: async () => (await import("./KMLLayer-pGEhl5G4.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-DXLHnGBN.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-djbAmVl8.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-Dv5Ip0Lm.js")).default, MapImageLayer: async () => (await import("./main-B1IpazS3.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-CBDWfUON.js")).default, MediaLayer: async () => (await import("./MediaLayer-BQG4nlFc.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-DOc7bJe8.js")).default, OpenStreetMapLayer: async () => (await import("./main-B1IpazS3.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-BdMfD4wF.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-BjDoKkH-.js")).default, RouteLayer: async () => (await import("./RouteLayer-DZ0-Uoww.js")).default, SceneLayer: async () => (await import("./SceneLayer-YlxZ7bGP.js")).default, StreamLayer: async () => (await import("./StreamLayer-I3pLVuSI.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-wc1KPIYX.js")).default, TileLayer: async () => (await import("./main-B1IpazS3.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-BN3QePFc.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-aWohIERi.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-BpPr24S2.js")).default, VideoLayer: async () => (await import("./VideoLayer-C9qrlHwo.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-rdC8T1GQ.js")).default, WFSLayer: async () => (await import("./WFSLayer-BeIuuNAI.js")).default, WMSLayer: async () => (await import("./main-B1IpazS3.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-CU7Hzmim.js")).default, WebTileLayer: async () => (await import("./main-B1IpazS3.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-CdPmDpAG.js.map
