import { t as m, Z as d, V as M } from "./main-Bnvk3STL.js";
import { d as A, e as b } from "./portalLayers-CAv0NoXi.js";
import { a as n } from "./fetchService-CWDlcoN_.js";
function v(e) {
  return p(e, "notes");
}
function w(e) {
  return p(e, "markup");
}
function h(e) {
  return p(e, "route");
}
function p(e, a) {
  return !(!e.layerType || e.layerType !== "ArcGISFeatureLayer") && e.featureCollectionType === a;
}
async function C(e, a, y) {
  if (!a) return;
  const r = a.map((t) => U(t, y)), i = await Promise.allSettled(r);
  for (const t of i) t.status === "rejected" || t.value && e.add(t.value);
}
const F = { ArcGISDimensionLayer: "DimensionLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISSceneServiceLayer: "SceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BuildingSceneLayer: "BuildingSceneLayer", CatalogLayer: "CatalogLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoJSON: "GeoJSONLayer", GroupLayer: "GroupLayer", IntegratedMesh3DTilesLayer: "IntegratedMesh3DTilesLayer", IntegratedMeshLayer: "IntegratedMeshLayer", KML: "KMLLayer", LineOfSightLayer: "LineOfSightLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", PointCloudLayer: "PointCloudLayer", RasterDataLayer: "UnsupportedLayer", VectorTileLayer: "VectorTileLayer", Voxel: "VoxelLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" }, W = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" }, O = { ArcGISFeatureLayer: "FeatureLayer" }, V = { ArcGISImageServiceLayer: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", ArcGISSceneServiceLayer: "SceneLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", DefaultTileLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WMS: "UnsupportedLayer", WebTiledLayer: "WebTileLayer" }, I = { ArcGISAnnotationLayer: "UnsupportedLayer", ArcGISDimensionLayer: "UnsupportedLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", CatalogLayer: "CatalogLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoJSON: "GeoJSONLayer", GeoRSS: "GeoRSSLayer", GroupLayer: "GroupLayer", KML: "KMLLayer", KnowledgeGraphLayer: "KnowledgeGraphLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", SubtypeGroupLayer: "SubtypeGroupLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" }, g = { ArcGISFeatureLayer: "FeatureLayer", SubtypeGroupTable: "UnsupportedLayer" }, T = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", DefaultTileLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" }, k = { ...I, LinkChartLayer: "LinkChartLayer" }, B = { ...g }, D = { ...T };
async function U(e, a) {
  return x(await E(e, a), e, a);
}
async function x(e, a, y) {
  const r = new e();
  return r.read(a, y.context), r.type === "group" && (a.layerType === "GroupLayer" ? await K(r, a, y) : u(a) ? N(r, a, y.context) : G(a) && await J(r, a, y.context)), await m(r, y.context), r;
}
async function E(e, a) {
  const y = a.context, r = R(y);
  let i = e.layerType || e.type;
  !i && a?.defaultLayerType && (i = a.defaultLayerType);
  const t = r[i];
  let L = t ? n[t] : n.UnknownLayer;
  if (u(e)) {
    const l = y?.portal;
    if (e.itemId) {
      const o = new d({ id: e.itemId, portal: l });
      await o.load();
      const s = (await A(o, new b())).className || "UnknownLayer";
      L = n[s];
    }
  } else i === "ArcGISFeatureLayer" ? v(e) || w(e) ? L = n.MapNotesLayer : h(e) ? L = n.RouteLayer : G(e) && (L = n.GroupLayer) : e.wmtsInfo?.url && e.wmtsInfo.layerIdentifier ? L = n.WMTSLayer : i === "WFS" && e.wfsInfo?.version !== "2.0.0" && (L = n.UnsupportedLayer);
  return L();
}
function G(e) {
  return e.layerType !== "ArcGISFeatureLayer" || u(e) ? !1 : (e.featureCollection?.layers?.length ?? 0) > 1;
}
function u(e) {
  return e.type === "Feature Collection";
}
function R(e) {
  let a;
  switch (e.origin) {
    case "web-scene":
      switch (e.layerContainerType) {
        case "basemap":
          a = V;
          break;
        case "ground":
          a = W;
          break;
        case "tables":
          a = O;
          break;
        default:
          a = F;
      }
      break;
    case "link-chart":
      switch (e.layerContainerType) {
        case "basemap":
          a = D;
          break;
        case "tables":
          a = B;
          break;
        default:
          a = k;
      }
      break;
    default:
      switch (e.layerContainerType) {
        case "basemap":
          a = T;
          break;
        case "tables":
          a = g;
          break;
        default:
          a = I;
      }
  }
  return a;
}
async function K(e, a, y) {
  const r = new M(), i = C(r, Array.isArray(a.layers) ? a.layers : [], y);
  try {
    try {
      if (await i, e.type === "group") return e.layers.addMany(r), e;
    } catch (t) {
      e.destroy();
      for (const L of r) L.destroy();
      throw t;
    }
  } catch (t) {
    throw t;
  }
}
function N(e, a, y) {
  a.itemId && (e.portalItem = new d({ id: a.itemId, portal: y?.portal }), e.when(() => {
    const r = (i) => {
      const t = i.layerId;
      f(i, e, a, t, y);
      const L = a.featureCollection?.layers?.[t];
      L && i.read(L, y);
    };
    e.layers?.forEach(r), e.tables?.forEach(r);
  }));
}
async function J(e, a, y) {
  const r = n.FeatureLayer, i = await r(), t = a.featureCollection, L = t?.showLegend, l = t?.layers?.map((o, s) => {
    const c = new i();
    c.read(o, y);
    const S = { ...y, ignoreDefaults: !0 };
    return f(c, e, a, s, S), L != null && c.read({ showLegend: L }, S), c;
  });
  e.layers.addMany(l ?? []);
}
function f(e, a, y, r, i) {
  e.read({ id: `${a.id}-sublayer-${r}`, visibility: y.visibleLayers?.includes(r) ?? !0 }, i);
}
export {
  K as populateGroupLayer,
  C as populateOperationalLayers
};
//# sourceMappingURL=layersCreator-DH4RZPv4.js.map
