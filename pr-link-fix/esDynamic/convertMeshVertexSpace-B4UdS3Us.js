import { dK as n, s as c, aa as s } from "./main-B1IpazS3.js";
import { l as i } from "./MeshVertexAttributes-BLfdD4U5.js";
import { M as m } from "./vertexSpaceConversion-B9b7Etnd.js";
async function u(e, t, a) {
  await Promise.resolve(), n(a);
  const r = m(e, t);
  if (!r) throw new c("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  const o = e.cloneAndModifyVertexAttributes(new i({ ...r, uv: s(e.vertexAttributes.uv), color: s(e.vertexAttributes.color) }), t);
  return o.transform = null, o;
}
export {
  u as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-B4UdS3Us.js.map
