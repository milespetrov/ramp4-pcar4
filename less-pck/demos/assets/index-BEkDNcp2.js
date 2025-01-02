const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-pQhHIGfc.js","./main-3BNeFVQJ.js","./preload-helper-dJJaZANz.js","./main-CRG1_KF0.css","./screen-DE40viEG.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { fA as defineComponent, fB as useI18n, fS as inject, fF as resolveComponent, fJ as createBlock, fK as withCtx, fQ as unref, fI as openBlock, fL as createBaseVNode, bZ as FixtureInstance, ho as markRaw, j$ as useAppbarStore, k0 as useMapnavStore } from './main-3BNeFVQJ.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nav-button",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const togglePanel = () => iApi?.panel.toggle("basemap");
    return (_ctx, _cache) => {
      const _component_mapnav_button = resolveComponent("mapnav-button");
      return openBlock(), createBlock(_component_mapnav_button, {
        onClickFunction: togglePanel,
        tooltip: unref(t)("basemap.title")
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createBaseVNode("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            createBaseVNode("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
});

const messages = {"en":{"basemap.select":"Select basemap","basemap.title":"Basemap"},"fr":{"basemap.select":"Sélectionner la carte de base","basemap.title":"Carte de base"}};

class BasemapFixture extends FixtureInstance {
  added() {
    this.$iApi.component("basemap-nav-button", _sfc_main);
    this.$iApi.panel.register(
      {
        id: "basemap",
        config: {
          screens: { "basemap-component": () => markRaw(__vitePreload(() => import('./screen-pQhHIGfc.js'),true?__vite__mapDeps([0,1,2,3,4]):void 0,import.meta.url)) },
          button: {
            tooltip: "basemap.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "basemap.title"
        }
      },
      { i18n: { messages } }
    );
    this.handlePanelTeleports(["basemap"]);
  }
  removed() {
    if (this.$iApi.fixture.exists("appbar")) {
      const appbarStore = useAppbarStore(this.$vApp.$pinia);
      appbarStore.removeButton("basemap");
    }
    if (this.$iApi.fixture.exists("mapnav")) {
      const mapnavStore = useMapnavStore(this.$vApp.$pinia);
      mapnavStore.removeItem("basemap");
    }
    this.$iApi.panel.remove("basemap");
  }
}

export { BasemapFixture as default };
