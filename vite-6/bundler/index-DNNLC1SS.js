import { defineComponent as a, inject as s, resolveComponent as n, openBlock as l, createBlock as c, unref as b, withCtx as v, createElementVNode as p, markRaw as u } from "vue";
import { _ as f } from "./screen.vue_vue_type_script_setup_true_lang-D5W14_Up.js";
import "tiny-emitter";
import { F as d, b as h, d as g } from "./main-DD4M6ybf.js";
import "@arcgis/core/Basemap";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Geometry";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/layers/support/LOD";
import "@arcgis/core/layers/support/WMSSublayer";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/ClassBreaksRenderer";
import "@arcgis/core/renderers/Renderer";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/UniqueValueRenderer";
import "@arcgis/core/renderers/support/ClassBreakInfo";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/renderers/support/UniqueValueInfo";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/Symbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "pinia";
import { useI18n as x } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "shpjs/dist/shp.min.js";
import "redaxios";
import "jszip";
import "flatgeobuf";
import "await-to-js";
import "fast-xml-parser";
import "svg.js";
const w = /* @__PURE__ */ a({
  __name: "nav-button",
  setup(i) {
    const { t } = x(), e = s("iApi"), m = () => e?.panel.toggle("basemap");
    return (A, o) => {
      const r = n("mapnav-button");
      return l(), c(r, {
        onClickFunction: m,
        tooltip: b(t)("basemap.title")
      }, {
        default: v(() => o[0] || (o[0] = [
          p("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            p("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), _ = { en: { "basemap.select": "Select basemap", "basemap.title": "Basemap" }, fr: { "basemap.select": "Sélectionner la carte de base", "basemap.title": "Carte de base" } };
class Nt extends d {
  added() {
    this.$iApi.component("basemap-nav-button", w), this.$iApi.panel.register(
      {
        id: "basemap",
        config: {
          screens: { "basemap-component": u(f) },
          button: {
            tooltip: "basemap.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "basemap.title"
        }
      },
      { i18n: { messages: _ } }
    ), this.handlePanelTeleports(["basemap"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && h(this.$vApp.$pinia).removeButton("basemap"), this.$iApi.fixture.exists("mapnav") && g(this.$vApp.$pinia).removeItem("basemap"), this.$iApi.panel.remove("basemap");
  }
}
export {
  Nt as default
};
