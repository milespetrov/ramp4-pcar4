import { markRaw as o } from "vue";
import { _ as p } from "./screen.vue_vue_type_script_setup_true_lang-C9f0rth6.js";
import "tiny-emitter";
import { F as s, c as i, b as m } from "./main-DD4M6ybf.js";
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
import "vue-i18n";
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
const a = { en: { "areas-of-interest.title": "Areas of Interest", "areas-of-interest.select": "Select area of interest" }, fr: { "areas-of-interest.title": "Zones d'intérêt", "areas-of-interest.select": "Sélectionner la zone d'intérêt" } };
class n extends s {
  /**
   * Get the current areas of interest config
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the areas of interest config snippet from the config json
   */
  _parseConfig(t) {
    if (!t)
      return;
    const r = i(this.$vApp.$pinia);
    r.areas = t.areas, this.handlePanelTeleports(["areas-of-interest"]);
  }
}
class It extends n {
  added() {
    this.$iApi.panel.register(
      {
        "areas-of-interest": {
          screens: {
            "areas-of-interest-screen": o(p)
          },
          style: {
            width: "350px"
          },
          button: {
            tooltip: "areas-of-interest.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>'
          },
          alertName: "areas-of-interest.title"
        }
      },
      {
        i18n: { messages: a }
      }
    ), this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (r) => this._parseConfig(r)
    );
    this.removed = () => {
      t(), this.$iApi.fixture.exists("appbar") && m(this.$vApp.$pinia).removeButton("areas-of-interest"), this.$iApi.panel.remove("areas-of-interest"), i(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  It as default
};
