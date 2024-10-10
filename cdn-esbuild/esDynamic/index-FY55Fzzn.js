import { iO as A, iP as O, bx as y, fB as $, ha as M, hb as D } from "./main-B46PFZ13.js";
import { f as T } from "./fabric-56BVIuQl.js";
import { _ as B } from "./screen.vue_vue_type_script_setup_true_lang-DqhWxXc4.js";
var H = { exports: {} };
(function(S, i) {
  (function(r, d) {
    d();
  })(A, function() {
    function r(t, e) {
      return typeof e > "u" ? e = { autoBom: !1 } : typeof e != "object" && (console.warn("Deprecated: Expected third argument to be a object"), e = { autoBom: !e }), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\uFEFF", t], { type: t.type }) : t;
    }
    function d(t, e, s) {
      var o = new XMLHttpRequest();
      o.open("GET", t), o.responseType = "blob", o.onload = function() {
        x(o.response, e, s);
      }, o.onerror = function() {
        console.error("could not download file");
      }, o.send();
    }
    function p(t) {
      var e = new XMLHttpRequest();
      e.open("HEAD", t, !1);
      try {
        e.send();
      } catch {
      }
      return 200 <= e.status && 299 >= e.status;
    }
    function c(t) {
      try {
        t.dispatchEvent(new MouseEvent("click"));
      } catch {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
      }
    }
    var l = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof A == "object" && A.global === A ? A : void 0, F = l.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), x = l.saveAs || (typeof window != "object" || window !== l ? function() {
    } : "download" in HTMLAnchorElement.prototype && !F ? function(t, e, s) {
      var o = l.URL || l.webkitURL, n = document.createElement("a");
      e = e || t.name || "download", n.download = e, n.rel = "noopener", typeof t == "string" ? (n.href = t, n.origin === location.origin ? c(n) : p(n.href) ? d(t, e, s) : c(n, n.target = "_blank")) : (n.href = o.createObjectURL(t), setTimeout(function() {
        o.revokeObjectURL(n.href);
      }, 4e4), setTimeout(function() {
        c(n);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(t, e, s) {
      if (e = e || t.name || "download", typeof t != "string") navigator.msSaveOrOpenBlob(r(t, s), e);
      else if (p(t)) d(t, e, s);
      else {
        var o = document.createElement("a");
        o.href = t, o.target = "_blank", setTimeout(function() {
          c(o);
        });
      }
    } : function(t, e, s, o) {
      if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof t == "string") return d(t, e, s);
      var n = t.type === "application/octet-stream", u = /constructor/i.test(l.HTMLElement) || l.safari, g = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((g || n && u || F) && typeof FileReader < "u") {
        var f = new FileReader();
        f.onloadend = function() {
          var m = f.result;
          m = g ? m : m.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = m : location = m, o = null;
        }, f.readAsDataURL(t);
      } else {
        var w = l.URL || l.webkitURL, a = w.createObjectURL(t);
        o ? o.location = a : location.href = a, o = null, setTimeout(function() {
          w.revokeObjectURL(a);
        }, 4e4);
      }
    });
    l.saveAs = x.saveAs = x, S.exports = x;
  });
})(H);
var j = H.exports;
const k = /* @__PURE__ */ O(j);
T.fabric.Object.prototype.objectCaching = !1;
const E = 1200, h = {
  TOP: 40,
  RIGHT: 40,
  BOTTOM: 40,
  LEFT: 40
};
class _ extends y {
  fcFabric;
  // download canvas will remain unscaled and only be used for download
  fcFabricDownload;
  options = {
    runningHeight: 0,
    scale: 1
  };
  // stores the custom render function if provided
  customRendererFunc = void 0;
  /**
   * Allows for a custom render callback function to be passed in to render the export canvas.
   * The function should accept the blank ramp canvas as its first parameter and use that canvas to draw on.
   * The width of the canvas is already set to the panel width, so the function only needs to set the height.
   *
   * Individual export elements like the map or the legend can be accessed from the `fabricObjects` object as the second parameter.
   * You can pick and chose which elements to add to the canvas, or modify them as needed. You can also add custom elements to the canvas.
   *
   * Finally, the `options` object is passed in as the third parameter. This object contains useful information such as the panel width, the default margins, the default canvas width, and the fabric object itself.
   *
   * Some canvas operations are asynchronous like fetching an image or cloning objects. In these cases you should return a promise so ramp waits for your operations to complete, otherwise returning nothing (void) is fine.
   *
   * ramp uses Fabric.js instead of the native canvas API. Read more about Fabric.js here: [Fabric.js](http://fabricjs.com/)
   *
   * @param {RenderCallback} renderCallback
   * @example myWatermarkingRenderer((canvas, fabricObjects, options) => {
   *   const watermark = new fabric.Text('Watermark', { ... });
   *   fabricObjects.map.addWithUpdate(watermark);
   *   canvas.add(fabricObjects.map);
   *   canvas.setHeight(1000);
   * });
   *
   * rInstance.fixture.isLoaded('export').then(() => {
   *   rInstance.fixture.get('export').customRenderer(myWatermarkingRenderer);
   * });
   * @memberof ExportAPI
   */
  customRenderer(i) {
    this.customRendererFunc = i;
  }
  /**
   * Returns `ExportConfig` section of the global config file.
   *
   * @readonly
   * @type {ExportConfig}
   * @memberof ExportAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the export config JSON snippet from the config file and save to the fixture store.
   *
   * @param {ExportConfig} [exportConfig]
   * @memberof ExportAPI
   */
  _parseConfig(i) {
    if (!i) return;
    const r = $(this.$vApp.$pinia);
    r.componentSelectedState = {
      title: i.title?.selected ?? !0,
      map: i.map?.selected ?? !0,
      mapElements: i.mapElements?.selected ?? !0,
      legend: i.legend?.selected ?? !0,
      footnote: i.footnote?.selected ?? !0,
      timestamp: i.timestamp?.selected ?? !0
    }, r.fileName = i.fileName || "", this.handlePanelWidths(["export"]), this.handlePanelTeleports(["export"]);
  }
  /**
   * Fetches an Export sub fixture
   *
   * @private
   * @param {string} name
   * @returns {ExportSubFixture | undefined}
   * @memberof ExportAPI
   */
  getSubFixture(i) {
    return this.$iApi.fixture.get(i);
  }
  /**
   * Creates an export canvas.
   *
   * @param {HTMLCanvasElement} canvas
   * @param {number} panelWidth
   * @returns {Promise<void>}
   * @memberof ExportAPI
   */
  async make(i, r) {
    const d = $(this.$vApp.$pinia), p = {};
    this.fcFabric = new T.fabric.StaticCanvas(i, {
      backgroundColor: "#fff"
    }), this.fcFabricDownload = new T.fabric.StaticCanvas(null, {
      backgroundColor: "#fff"
    }), this.options.runningHeight = 0;
    const c = d.componentSelectedState, l = this.getSubFixture("export-title"), F = this.getSubFixture("export-map"), x = this.getSubFixture("export-scalebar"), t = this.getSubFixture("export-northarrow"), e = this.getSubFixture("export-legend"), s = this.getSubFixture("export-footnote"), o = this.getSubFixture("export-timestamp");
    let n, u, g, f, w, a, m;
    if (c.title && l && (n = await l.make({
      /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */
      top: this.options.runningHeight,
      left: 0,
      originX: "left",
      width: r,
      textAlign: "center"
    }), this.options.runningHeight += n.height + 40, p.title = n), c.map && F && (u = await F.make({
      top: this.options.runningHeight
    }), n && (n.left = u.width / 2, n.originX = "center"), this.options.runningHeight += u.height + 40, p.map = u), !u && n && (n.width = E), this.options.scale = r / ((u?.width ?? E) + h.LEFT + h.RIGHT), c.mapElements && x && (g = await x.make({
      top: this.options.runningHeight,
      left: 0
    }), this.options.runningHeight += g.height + 40, p.scaleBar = g, t && (f = await t.make({
      top: g.top,
      left: r / this.options.scale
    }), f.top += f.height / 2 - 20, f.left += -f.width * 2, p.northArrow = f)), c.legend && e && (w = await e.make({
      width: e.config?.columnWidth ?? u?.width ?? E
    }), w.top = this.options.runningHeight, this.options.runningHeight += w.height, p.legend = w), c.timestamp && o && (m = await o.make({
      top: this.options.runningHeight + 40,
      width: r
    }), this.options.runningHeight += !c.footnote || !s ? m.height + 40 : m.height + 20, p.timestamp = m), c.footnote && s && (a = await s.make({
      top: this.options.runningHeight - 2.5,
      // Magic number 2.5 prevents weird vertical offset between timestamp/footer
      left: r / this.options.scale + 40
    }), c.timestamp && o ? r - p.timestamp.getMinWidth() <= a.getMinWidth() + 30 ? (a.top += 30, a.left = 0, a.originX = "left", this.options.runningHeight += 20) : a.left += -a.width * 2 : (a.top += 20, a.left += -a.width * 2, this.options.runningHeight += 20), this.options.runningHeight += a.height, p.footnote = a), this.customRendererFunc) {
      this.fcFabric.setWidth(r);
      const b = {
        panelWidth: r,
        margin: h,
        defaultWidth: E,
        fabric: T.fabric
      };
      await this.customRendererFunc(
        this.fcFabric,
        p,
        b
      ), this.fcFabric.renderAll(), this.fcFabric.clone((v) => {
        this.fcFabricDownload = v, this.fcFabricDownload.setDimensions({
          width: this.fcFabric?.getWidth(),
          height: this.fcFabric.getHeight()
        }), this.fcFabricDownload.renderAll();
      });
    } else {
      const b = new T.fabric.Group(
        Object.values(p),
        {
          top: h.TOP * this.options.scale,
          left: h.LEFT * this.options.scale
        }
      ), v = await new Promise((R) => {
        b.clone((L) => {
          R(L);
        });
      });
      v.top = h.TOP, v.left = h.LEFT, this.fcFabricDownload.add(v), b.scale(this.options.scale), this.fcFabric.add(b), this.fcFabric.setDimensions({
        width: r,
        height: (this.options.runningHeight + h.TOP + h.BOTTOM) * this.options.scale
      }), this.fcFabric.renderAll(), this.fcFabricDownload.setDimensions({
        width: (u?.width ?? E) + h.LEFT + h.RIGHT,
        height: this.options.runningHeight + h.TOP + h.BOTTOM
      }), this.fcFabricDownload.renderAll();
    }
  }
  export() {
    if (!this.fcFabric)
      return;
    const i = /* @__PURE__ */ new Date(), r = this.config?.fileName || `map-carte - ${i.getFullYear()}-${i.getMonth()}-${i.getDay()}, ${i.getHours()}_${i.getMinutes()}`;
    k.saveAs(
      this.fcFabricDownload.toDataURL({
        format: "png",
        quality: 1
      }),
      `${r}.png`
    );
  }
}
const U = { en: { "export.title": "Export", "export.alertName": "Export", "export.download": "Download image", "export.refresh": "Refresh", "export.scaleBar.approx": "{0} approx.", "export.menu": "Settings Menu", "export.menu.component.title": "Title", "export.menu.component.map": "Map", "export.menu.component.mapElements": "North arrow and scalebar", "export.menu.component.legend": "Legend", "export.menu.component.footnote": "Footnote", "export.menu.component.timestamp": "Timestamp" }, fr: { "export.title": "Exporter", "export.alertName": "Exporter", "export.download": "Télécharger l'image", "export.refresh": "Rafraîchir", "export.scaleBar.approx": "Environ {0}", "export.menu": "Menu des paramètres", "export.menu.component.title": "Titre", "export.menu.component.map": "Carte", "export.menu.component.mapElements": "Flèche du nord et échelle graphique", "export.menu.component.legend": "Légende", "export.menu.component.footnote": "Référence", "export.menu.component.timestamp": "Horodatage" } };
class I extends _ {
  initialized() {
    this.$iApi.fixture.add("export-title"), this.$iApi.fixture.add("export-map"), this.$iApi.fixture.add("export-legend"), this.$iApi.fixture.add("export-northarrow"), this.$iApi.fixture.add("export-scalebar"), this.$iApi.fixture.add("export-timestamp"), this.$iApi.fixture.add("export-footnote");
  }
  added() {
    this.$iApi.panel.register(
      {
        id: "export",
        config: {
          screens: {
            "export-screen": M(B)
          },
          style: {
            "flex-grow": "1",
            "max-width": "800px"
          },
          button: {
            tooltip: "export.title",
            // https://fonts.google.com/icons?selected=Material+Icons:layers&icon.query=export
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'
          },
          alertName: "export.alertName"
        }
      },
      { i18n: { messages: U } }
    ), this._parseConfig(this.config);
    const i = this.$vApp.$watch(
      () => this.config,
      (r) => this._parseConfig(r)
    );
    this.removed = () => {
      i(), this.$iApi.fixture.get("export-title")?.remove(), this.$iApi.fixture.get("export-map")?.remove(), this.$iApi.fixture.get("export-legend")?.remove(), this.$iApi.fixture.get("export-northarrow")?.remove(), this.$iApi.fixture.get("export-scalebar")?.remove(), this.$iApi.fixture.get("export-timestamp")?.remove(), this.$iApi.fixture.get("export-footnote")?.remove(), this.$iApi.fixture.exists("appbar") && D(this.$vApp.$pinia).removeButton("export"), $(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("export");
    };
  }
}
export {
  I as default
};
//# sourceMappingURL=index-FY55Fzzn.js.map
