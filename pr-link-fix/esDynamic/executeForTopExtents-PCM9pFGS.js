import { cm as i, cT as m, b8 as c } from "./main-B1IpazS3.js";
import { d as r } from "./queryTopFeatures-zBArROHw.js";
async function N(n, o, e) {
  const s = i(n), a = await r(s, m.from(o), { ...e }), t = a.data.extent;
  return !t || isNaN(t.xmin) || isNaN(t.ymin) || isNaN(t.xmax) || isNaN(t.ymax) ? { count: a.data.count, extent: null } : { count: a.data.count, extent: c.fromJSON(t) };
}
export {
  N as executeForTopExtents
};
//# sourceMappingURL=executeForTopExtents-PCM9pFGS.js.map
