import { bW as n, fw as h, fx as p, fO as l, fB as g, fF as v, fG as f, fM as u, fE as m, fH as r, kY as t, hk as d, jX as x, jY as S } from "./main-n1d2W0Ts.js";
class b extends n {
}
const w = /* @__PURE__ */ h({
  __name: "nav-button",
  setup(a) {
    const { t: e } = p(), s = l("iApi"), i = () => {
      s?.panel.toggle("geosearch");
    };
    return ($, o) => {
      const c = g("mapnav-button");
      return m(), v(c, {
        onClickFunction: i,
        tooltip: u(e)("geosearch.title")
      }, {
        default: f(() => o[0] || (o[0] = [
          r("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            r("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
            r("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), A = { en: { "geosearch.title": "Geolocation Search", "geosearch.noResults": "No results to show for ", "geosearch.searchText": "Search for a location...", "geosearch.visible": "Visible on map", "geosearch.filters.province": "Province", "geosearch.filters.type": "Type", "geosearch.filters.clear": "Clear filters", "geosearch.serviceError": "No response from {services} service(s)", "geosearch.badChars": "The character(s) {chars} are not supported and will be ignored" }, fr: { "geosearch.title": "Recherche géolocalisée", "geosearch.noResults": "Aucun résultat à afficher pour ", "geosearch.searchText": "Rechercher un emplacement...", "geosearch.visible": "Visible sur la carte", "geosearch.filters.province": "Province", "geosearch.filters.type": "Type", "geosearch.filters.clear": "Effacer les filtres", "geosearch.serviceError": "Pas de réponse de la part des services de {services}", "geosearch.badChars": "Les caractères {chars} ne sont pas pris en charge et seront ignorés" } };
class _ extends b {
  async added() {
    t(this.$vApp.$pinia).initService(this.$iApi.language, this.config), this.$iApi.component("geosearch-nav-button", w), this.$iApi.panel.register(
      {
        id: "geosearch",
        config: {
          screens: {
            "geosearch-component": () => d(import("./screen-DVwYr_aq.js"))
          },
          button: {
            tooltip: "geosearch.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "geosearch.title"
        }
      },
      { i18n: { messages: A } }
    ), this.handlePanelTeleports(["geosearch"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && x(this.$vApp.$pinia).removeButton("geosearch"), this.$iApi.fixture.exists("mapnav") && S(this.$vApp.$pinia).removeItem("geosearch"), t(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("geosearch");
  }
}
export {
  _ as default
};
//# sourceMappingURL=index-Czqzg7k5.js.map
