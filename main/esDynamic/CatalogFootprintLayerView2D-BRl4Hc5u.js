import { O as t, P as s, Q as o } from "./main-Bnvk3STL.js";
import { r as n } from "./FeatureLayerView2D-CP71i4qV.js";
const d = (p) => {
  let e = class extends p {
    constructor(...r) {
      super(...r);
    }
    get updateSuspended() {
      const r = this.parent?.dynamicGroupLayerView;
      return this.suspended && (!r || r.suspended === !0);
    }
  };
  return t([s()], e.prototype, "layer", void 0), t([s()], e.prototype, "parent", void 0), t([s()], e.prototype, "updateSuspended", null), e = t([o("esri.views.layers.CatalogFootprintLayerView")], e), e;
};
let a = class extends d(n) {
};
a = t([o("esri.views.2d.layers.CatalogFootprintLayerView2D")], a);
const l = a;
export {
  l as default
};
//# sourceMappingURL=CatalogFootprintLayerView2D-BRl4Hc5u.js.map
