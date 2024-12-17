import { fw as i, fx as l, fO as r, fB as m, fF as c, fG as b, fM as f, fE as v, fH as a, bW as u, hk as h, jX as d, jY as x } from "./main-n1d2W0Ts.js";
const g = /* @__PURE__ */ i({
  __name: "nav-button",
  setup(s) {
    const { t: e } = l(), p = r("iApi"), n = () => p?.panel.toggle("basemap");
    return (A, t) => {
      const o = m("mapnav-button");
      return v(), c(o, {
        onClickFunction: n,
        tooltip: f(e)("basemap.title")
      }, {
        default: b(() => t[0] || (t[0] = [
          a("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            a("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            a("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), w = { en: { "basemap.select": "Select basemap", "basemap.title": "Basemap" }, fr: { "basemap.select": "Sélectionner la carte de base", "basemap.title": "Carte de base" } };
class B extends u {
  added() {
    this.$iApi.component("basemap-nav-button", g), this.$iApi.panel.register(
      {
        id: "basemap",
        config: {
          screens: { "basemap-component": () => h(import("./screen-nrdDPKdF.js")) },
          button: {
            tooltip: "basemap.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "basemap.title"
        }
      },
      { i18n: { messages: w } }
    ), this.handlePanelTeleports(["basemap"]);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && d(this.$vApp.$pinia).removeButton("basemap"), this.$iApi.fixture.exists("mapnav") && x(this.$vApp.$pinia).removeItem("basemap"), this.$iApi.panel.remove("basemap");
  }
}
export {
  B as default
};
//# sourceMappingURL=index-8aoHPRdN.js.map
