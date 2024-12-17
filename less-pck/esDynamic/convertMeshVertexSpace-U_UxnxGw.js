import { dm as a, s as c, ad as s } from "./main-n1d2W0Ts.js";
import { l as i } from "./MeshVertexAttributes-B1Ld5IvK.js";
import { M as m } from "./vertexSpaceConversion-DpZAFo-9.js";
async function u(e, t, n) {
  await Promise.resolve(), a(n);
  const r = m(e, t);
  if (!r) throw new c("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  const o = e.cloneAndModifyVertexAttributes(new i({ ...r, uv: s(e.vertexAttributes.uv), color: s(e.vertexAttributes.color) }), t);
  return o.transform = null, o;
}
export {
  u as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-U_UxnxGw.js.map
