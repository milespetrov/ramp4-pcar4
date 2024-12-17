import { b$ as i, cw as m, b8 as r } from "./main-n1d2W0Ts.js";
import { d as x } from "./queryTopFeatures-BIaqCU_7.js";
async function N(n, o, e) {
  const s = i(n), a = await x(s, m.from(o), { ...e }), t = a.data.extent;
  return !t || isNaN(t.xmin) || isNaN(t.ymin) || isNaN(t.xmax) || isNaN(t.ymax) ? { count: a.data.count, extent: null } : { count: a.data.count, extent: r.fromJSON(t) };
}
export {
  N as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-K_M5GRcV.js.map
