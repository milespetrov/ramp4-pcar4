import { O as i, P as m, Q as E, fv as S, Z as M, s as f, dm as F, M as C, D as R, S as q, b8 as U } from "./main-n1d2W0Ts.js";
import { a as $ } from "./BitmapContainer-DiRBBwpV.js";
import { f as V, y as L } from "./LayerView-C5VGrkrZ.js";
import { _ as W } from "./ExportStrategy-B5x_cvJL.js";
import { i as A } from "./RefreshableLayerView-Cnvcf2a1.js";
import { i as H } from "./timeSupport-DF4UhURY.js";
const O = (t) => {
  let e = class extends t {
    initialize() {
      this.exportImageParameters = new S({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = M(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return H(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    async fetchPopupFeaturesAtLocation(a, s) {
      const { layer: o } = this;
      if (!a) throw new f("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: o });
      const { popupEnabled: d } = o;
      if (!d) throw new f("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: d });
      const r = this.createFetchPopupFeaturesQuery(a);
      if (!r) return [];
      const { extent: n, width: h, height: p, x: c, y } = r;
      if (!(n && h && p)) throw new f("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: n, width: h, height: p });
      const g = await o.fetchFeatureInfo(n, h, p, c, y);
      return F(s), g;
    }
  };
  return i([m()], e.prototype, "exportImageParameters", void 0), i([m({ readOnly: !0 })], e.prototype, "exportImageVersion", null), i([m()], e.prototype, "layer", void 0), i([m({ readOnly: !0 })], e.prototype, "timeExtent", null), e = i([E("esri.views.layers.WMSLayerView")], e), e;
};
let u = class extends O(A(V(L))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new $();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  update(t) {
    this.strategy.update(t).catch((e) => {
      C(e) || R.getLogger(this).error(e);
    });
  }
  attach() {
    const { layer: t } = this, { imageMaxHeight: e, imageMaxWidth: a } = t;
    this.bitmapContainer = new $(), this.container.addChild(this.bitmapContainer), this.strategy = new W({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: e, imageMaxWidth: a, imageRotationSupported: !1, imageNormalizationSupported: !1, hidpi: !1 }), this.addAttachHandles(q(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = M(this.strategy), this.container.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(t) {
    const { view: e, bitmapContainer: a } = this, { x: s, y: o } = t, { spatialReference: d } = e;
    let r, n = 0, h = 0;
    if (a.children.some((g) => {
      const { width: w, height: v, resolution: P, x: l, y: x } = g, b = l + P * w, I = x - P * v;
      return s >= l && s <= b && o <= x && o >= I && (r = new U({ xmin: l, ymin: I, xmax: b, ymax: x, spatialReference: d }), n = w, h = v, !0);
    }), !r) return null;
    const p = r.width / n, c = Math.round((s - r.xmin) / p), y = Math.round((r.ymax - o) / p);
    return { extent: r, width: n, height: h, x: c, y };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e, a, s) {
    return this.layer.fetchImageBitmap(t, e, a, { timeExtent: this.timeExtent, ...s });
  }
};
i([m()], u.prototype, "strategy", void 0), i([m()], u.prototype, "updating", void 0), u = i([E("esri.views.2d.layers.WMSLayerView2D")], u);
const Z = u;
export {
  Z as default
};
//# sourceMappingURL=WMSLayerView2D-WULr3h-I.js.map
