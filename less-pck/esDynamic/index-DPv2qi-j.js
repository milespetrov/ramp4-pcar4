import { bW as C, l3 as y, fw as H, l4 as W, fO as z, fP as a, fA as L, hH as B, fU as R, f_ as T, fR as G, fV as O, bY as Y, l5 as q, l2 as j, l6 as V, l7 as X, fI as F, fH as U, hq as D, fE as K } from "./main-n1d2W0Ts.js";
class J extends C {
  /**
   * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
   *
   * @param {NortharrowConfig} [northarrowConfig]
   * @memberof NortharrowAPI
   */
  _parseConfig(t) {
    const o = y(this.$vApp.$pinia);
    t && (o.arrowIcon = t.arrowIcon, o.poleIcon = t.poleIcon);
  }
  get config() {
    return super.config;
  }
}
const Q = "path", Z = 12, ee = "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z", te = "#ff0000ff", oe = 5, ae = 6, se = {
  style: Q,
  size: Z,
  path: ee,
  colour: te,
  xOffset: oe,
  yOffset: ae
}, re = ["innerHTML"], ne = /* @__PURE__ */ H({
  __name: "northarrow",
  setup(S) {
    const t = W(), o = y(), e = z("iApi"), u = a(), n = L(() => o.arrowIcon), M = L(() => o.poleIcon), c = a(0), l = a(0), p = a(!1), P = a(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`), A = a(!1), k = B([]), _ = a([]);
    let $;
    R(() => {
      const s = t.config.map;
      _.value = s.tileSchemas, n?.value && (P.value = `<img width='25' src='${n.value}'>`), e.geo.map.esriView?.ready && I(e.geo.map.getExtent()), k.push(e.event.on(T.MAP_EXTENTCHANGE, G(300, I)));
    }), O(() => {
      k.forEach((s) => e.event.off(s));
    });
    const I = async (s) => {
      $ = t.activeBasemapConfig;
      let h;
      for (const d of _.value)
        if ($?.tileSchemaId === d.id) {
          h = d?.hasNorthPole;
          break;
        }
      const i = e.$vApp.$el.querySelector(".inner-shell"), f = u.value.querySelector(".northarrow").getBoundingClientRect().width, v = e.$vApp.$el.querySelector(".appbar")?.clientWidth || 0, x = s.sr;
      if (h || typeof h > "u" && !x.isWebMercator()) {
        const d = new Y("pole", { x: -96, y: 90 }), b = await e.geo.proj.projectGeometry(x, d), m = e.geo.map.mapPointToScreenPoint(b);
        if (m.screenY < 0) {
          p.value = !0;
          const r = {
            screenX: i.clientWidth / 2,
            screenY: i.clientHeight
          };
          c.value = Math.atan(
            (m.screenX - r.screenX) / (r.screenY - m.screenY)
          ) * 180 / Math.PI, l.value = i.clientWidth / 2 + i.clientHeight * Math.tan(c.value * Math.PI / 180) - f / 2, l.value = Math.max(
            v - f / 2,
            Math.min(e.geo.map.getPixelWidth() - f / 2, l.value)
          );
        } else if (p.value = !1, !A.value) {
          A.value = !0;
          let r;
          M.value ? r = {
            style: q.ICON,
            icon: M.value,
            height: 16.5,
            width: 16.5
          } : r = se;
          const w = e.geo.layer.createLayer({
            id: g,
            layerType: j.GRAPHIC,
            url: "",
            cosmetic: !0
            // mark this layer as a cosmetic layer
          });
          e.geo.map.addLayer(w), w.loadPromise().then(() => {
            const E = new V(b, "northpole"), N = new X(
              r
            );
            E.style = N, w.addGraphic(E);
          });
        }
      } else
        p.value = !0, c.value = 0, l.value = v + (i.clientWidth - v - f) / 2;
    };
    return (s, h) => (K(), F("div", {
      class: "absolute transition-all duration-300 ease-out",
      style: D({
        "transform-origin": "top center",
        transform: `rotate(${c.value}deg)`,
        left: `${l.value}px`,
        visibility: p.value ? "visible" : "hidden"
      }),
      ref_key: "el",
      ref: u
    }, [
      U("span", {
        class: "northarrow",
        innerHTML: P.value
      }, null, 8, re)
    ], 4));
  }
}), g = "RampPoleMarker";
class ie extends J {
  async added() {
    this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), { destroy: o, el: e } = this.mount(ne, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]), this.removed = () => {
      t(), this.$iApi.geo.layer.getLayer(g) && this.$iApi.geo.map.removeLayer(g), y(this.$vApp.$pinia).$reset(), o();
    };
  }
}
export {
  g as POLE_MARKER_LAYER_ID,
  ie as default
};
//# sourceMappingURL=index-DPv2qi-j.js.map
