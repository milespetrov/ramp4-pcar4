import { defineComponent as m, inject as l, resolveComponent as a, openBlock as h, createBlock as c, unref as u, withCtx as f, createElementVNode as i, markRaw as v } from "vue";
import "tiny-emitter";
import { F as d, l as n, G as g, d as x } from "./main-DD4M6ybf.js";
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
import { useI18n as _ } from "vue-i18n";
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
import { _ as A } from "./screen.vue_vue_type_script_setup_true_lang-CVdiVEmX.js";
class $ extends d {
  /**
   * Toggles help panel
   *
   * @param {boolean} [open] force panel open or closed
   * @memberof HelpAPI
   */
  toggleHelp(e) {
    const t = this.$iApi.panel.get("help");
    this.$iApi.panel.toggle(t, e);
  }
  /**
   * Returns `HelpConfig` section of the global config file.
   *
   * @readonly
   * @type {HelpConfig}
   * @memberof HelpAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the help config JSON snippet from the config file and save to the fixture store.
   *
   * @param {HelpConfig} [helpConfig]
   * @memberof HelpAPI
   */
  _parseConfig(e) {
    const t = n(this.$vApp.$pinia);
    t.location = e?.location ?? "./help/", this.handlePanelWidths(["help"]), this.handlePanelTeleports(["help"]);
  }
}
const w = /* @__PURE__ */ m({
  __name: "nav-button",
  setup(p) {
    const e = l("iApi"), { t } = _(), o = () => e.event.emit(g.HELP_TOGGLE);
    return (H, r) => {
      const s = a("mapnav-button");
      return h(), c(s, {
        onClickFunction: o,
        tooltip: u(t)("help.title")
      }, {
        default: f(() => r[0] || (r[0] = [
          i("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "fill-current w-32 h-20"
          }, [
            i("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            i("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), C = { en: { "help.title": "Help", "help.search": "Search Help", "help.section.expand": "Expand section", "help.section.collapse": "Collapse section", "help.noResults": "Nothing is found. Please try a different search." }, fr: { "help.title": "Aide", "help.search": "Aide à la recherche", "help.section.expand": "Développer une section", "help.section.collapse": "Réduire une section", "help.noResults": "Aucun résultat. Veuillez essayer une autre recherche." } };
class Mt extends $ {
  added() {
    this.$iApi.component("help-nav-button", w), this.$iApi.panel.register(
      {
        help: {
          screens: {
            "help-screen": v(A)
          },
          style: {
            "flex-grow": "1",
            "max-width": "750px"
          },
          alertName: "help.title"
        }
      },
      {
        i18n: { messages: C }
      }
    ), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    );
    this.removed = () => {
      e(), this.$iApi.fixture.exists("mapnav") && x(this.$vApp.$pinia).removeItem("help"), n(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("help");
    };
  }
}
export {
  Mt as default
};
