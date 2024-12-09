import { bG as W, bH as j, bI as z, bJ as L, bK as A, bL as B, bM as C, bN as D, aS as E, bO as H } from "./main-n1d2W0Ts.js";
import { r as J } from "./vec3f32-BS0cezmI.js";
import { n as K, h as N } from "./WGLContainer-C_1Nh_ee.js";
import { E as k } from "./Container-CIcYD8jS.js";
class V extends K {
  constructor() {
    super(...arguments), this._viewStateId = -1, this._dvsMat3 = W();
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(e) {
    this._updateMatrices(e), this._updateOverlays(e, this.children);
    for (const s of this.children) s.beforeRender(e);
  }
  prepareRenderPasses(e) {
    const s = e.registerRenderPass({ name: "overlay", brushes: [N.overlay], target: () => this.children, drawPhase: k.MAP });
    return [...super.prepareRenderPasses(e), s];
  }
  _updateMatrices(e) {
    const { state: s } = e, { id: a, size: d, pixelRatio: r, resolution: h, rotation: l, viewpoint: u, displayMat3: b } = s;
    if (this._viewStateId === a) return;
    const p = Math.PI / 180 * l, i = r * d[0], n = r * d[1];
    this._localOrigin = u.targetGeometry.clone();
    const { x: c, y: _ } = this._localOrigin, M = j(c, s.spatialReference);
    this._localOrigin.x = M, this._localOrigin.y = _;
    const v = h * i, m = h * n, t = z(this._dvsMat3);
    L(t, t, b), A(t, t, B(i / 2, n / 2)), C(t, t, J(i / v, -n / m, 1)), D(t, t, -p), this._viewStateId = a;
  }
  _updateOverlays(e, s) {
    const { state: a } = e, { rotation: d, spatialReference: r, worldScreenWidth: h, size: l, viewpoint: u } = a, b = this._localOrigin;
    let p, i = 0;
    const n = E(r);
    if (n && r.isWrappable) {
      const c = l[0], _ = l[1], M = 180 / Math.PI * d, v = Math.abs(Math.cos(M)), m = Math.abs(Math.sin(M)), t = Math.round(c * v + _ * m), [R, x] = n.valid, o = H(r), { x: O, y: I } = u.targetGeometry, S = [O, I], g = [0, 0];
      a.toScreen(g, S);
      const f = [0, 0];
      let w;
      w = t > h ? 0.5 * h : 0.5 * t;
      const P = Math.floor((O + 0.5 * o) / o), $ = R + P * o, G = x + P * o, y = [g[0] + w, 0];
      a.toMap(f, y), f[0] > G && (i = o), y[0] = g[0] - w, a.toMap(f, y), f[0] < $ && (i = -o), p = { worldWidth: o, xBounds: [R, x] };
    }
    for (const c of s) c.updateDrawCoords(b, i, r, p);
  }
}
export {
  V as f
};
//# sourceMappingURL=OverlayContainer-Lb4yELyc.js.map
