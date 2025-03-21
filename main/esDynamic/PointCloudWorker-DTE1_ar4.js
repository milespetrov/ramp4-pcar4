import { gm as O, bm as S, bx as v, cw as x, gn as C } from "./main-Bnvk3STL.js";
import { O as k } from "./quat-ByBz-Zw5.js";
import { e as F } from "./quatf64-DxbQqBtW.js";
import { t as A, n as w } from "./vec3f32-BS0cezmI.js";
import { a as R, b as U, d as B } from "./PointCloudUniqueValueRenderer-hmyA9_XI.js";
import { w as J, l as N, c as V, I as T } from "./I3SBinaryReader-Dl3N9VYI.js";
import { I as q } from "./orientedBoundingBox-CDONmgls.js";
function z(i, t, a, n) {
  const { rendererJSON: c, isRGBRenderer: m } = i;
  let o = null, s = null;
  if (t && m) o = t;
  else if (t && c?.type === "pointCloudUniqueValueRenderer") {
    s = R.fromJSON(c);
    const e = s.colorUniqueValueInfos;
    o = new Uint8Array(3 * n);
    const f = g(s.fieldTransformType);
    for (let r = 0; r < n; r++) {
      const l = (f ? f(t[r]) : t[r]) + "";
      for (let u = 0; u < e.length; u++) if (e[u].values.includes(l)) {
        o[3 * r] = e[u].color.r, o[3 * r + 1] = e[u].color.g, o[3 * r + 2] = e[u].color.b;
        break;
      }
    }
  } else if (t && c?.type === "pointCloudStretchRenderer") {
    s = U.fromJSON(c);
    const e = s.stops;
    o = new Uint8Array(3 * n);
    const f = g(s.fieldTransformType);
    for (let r = 0; r < n; r++) {
      const l = f ? f(t[r]) : t[r], u = e.length - 1;
      if (l < e[0].value) o[3 * r] = e[0].color.r, o[3 * r + 1] = e[0].color.g, o[3 * r + 2] = e[0].color.b;
      else if (l >= e[u].value) o[3 * r] = e[u].color.r, o[3 * r + 1] = e[u].color.g, o[3 * r + 2] = e[u].color.b;
      else for (let b = 1; b < e.length; b++) if (l < e[b].value) {
        const p = (l - e[b - 1].value) / (e[b].value - e[b - 1].value);
        o[3 * r] = e[b].color.r * p + e[b - 1].color.r * (1 - p), o[3 * r + 1] = e[b].color.g * p + e[b - 1].color.g * (1 - p), o[3 * r + 2] = e[b].color.b * p + e[b - 1].color.b * (1 - p);
        break;
      }
    }
  } else if (t && c?.type === "pointCloudClassBreaksRenderer") {
    s = B.fromJSON(c);
    const e = s.colorClassBreakInfos;
    o = new Uint8Array(3 * n);
    const f = g(s.fieldTransformType);
    for (let r = 0; r < n; r++) {
      const l = f ? f(t[r]) : t[r];
      for (let u = 0; u < e.length; u++) if (l >= e[u].minValue && l <= e[u].maxValue) {
        o[3 * r] = e[u].color.r, o[3 * r + 1] = e[u].color.g, o[3 * r + 2] = e[u].color.b;
        break;
      }
    }
  } else o = new Uint8Array(3 * n).fill(255);
  if (a && s?.colorModulation) {
    const e = s.colorModulation.minValue, f = s.colorModulation.maxValue, r = 0.3;
    for (let l = 0; l < n; l++) {
      const u = a[l], b = u >= f ? 1 : u <= e ? r : r + (1 - r) * (u - e) / (f - e);
      o[3 * l] = b * o[3 * l], o[3 * l + 1] = b * o[3 * l + 1], o[3 * l + 2] = b * o[3 * l + 2];
    }
  }
  return o;
}
function E(i, t) {
  if (i.encoding == null || i.encoding === "") {
    const a = J(t, i);
    if (a.vertexAttributes.position == null) return;
    const n = N(t, a.vertexAttributes.position), c = a.header.fields, m = [c.offsetX, c.offsetY, c.offsetZ], o = [c.scaleX, c.scaleY, c.scaleZ], s = n.length / 3, e = new Float64Array(3 * s);
    for (let f = 0; f < s; f++) e[3 * f] = n[3 * f] * o[0] + m[0], e[3 * f + 1] = n[3 * f + 1] * o[1] + m[1], e[3 * f + 2] = n[3 * f + 2] * o[2] + m[2];
    return e;
  }
  if (i.encoding === "lepcc-xyz") return V(t).result;
}
function h(i, t, a) {
  return i?.attributeInfo.useElevation ? t ? X(t, a) : null : i?.attributeInfo.storageInfo ? T(i.attributeInfo.storageInfo, i.buffer, a) : null;
}
function X(i, t) {
  const a = new Float64Array(t);
  for (let n = 0; n < t; n++) a[n] = i[3 * n + 2];
  return a;
}
function Y(i, t, a, n, c) {
  const m = i.length / 3;
  let o = 0;
  for (let s = 0; s < m; s++) {
    let e = !0;
    for (let f = 0; f < n.length && e; f++) {
      const { filterJSON: r } = n[f], l = c[f].values[s];
      switch (r.type) {
        case "pointCloudValueFilter": {
          const u = r.mode === "exclude";
          r.values.includes(l) === u && (e = !1);
          break;
        }
        case "pointCloudBitfieldFilter": {
          const u = $(r.requiredSetBits), b = $(r.requiredClearBits);
          ((l & u) !== u || l & b) && (e = !1);
          break;
        }
        case "pointCloudReturnFilter": {
          const u = 15 & l, b = l >>> 4 & 15, p = b > 1, D = u === 1, I = u === b;
          let y = !1;
          for (const d of r.includedReturns) if (d === "last" && I || d === "firstOfMany" && D && p || d === "lastOfMany" && I && p || d === "single" && !p) {
            y = !0;
            break;
          }
          y || (e = !1);
          break;
        }
      }
    }
    e && (a[o] = s, i[3 * o] = i[3 * s], i[3 * o + 1] = i[3 * s + 1], i[3 * o + 2] = i[3 * s + 2], t[3 * o] = t[3 * s], t[3 * o + 1] = t[3 * s + 1], t[3 * o + 2] = t[3 * s + 2], o++);
  }
  return o;
}
function g(i) {
  switch (i) {
    default:
    case null:
    case "none":
      return (t) => t;
    case "low-four-bit":
      return (t) => 15 & t;
    case "high-four-bit":
      return (t) => (240 & t) >> 4;
    case "absolute-value":
      return (t) => Math.abs(t);
    case "modulo-ten":
      return (t) => t % 10;
  }
}
function $(i) {
  let t = 0;
  for (const a of i || []) t |= 1 << a;
  return t;
}
class Z {
  transform(t) {
    const a = this._transform(t), n = [a.points.buffer, a.rgb.buffer];
    a.pointIdFilterMap != null && n.push(a.pointIdFilterMap.buffer);
    for (const c of a.attributes) "buffer" in c.values && O(c.values.buffer) && c.values.buffer !== a.rgb.buffer && n.push(c.values.buffer);
    return Promise.resolve({ result: a, transferList: n });
  }
  _transform(t) {
    const a = E(t.schema, t.geometryBuffer);
    let n = a.length / 3, c = null;
    const m = new Array(), o = h(t.primaryAttributeData, a, n);
    t.primaryAttributeData != null && o && m.push({ attributeInfo: t.primaryAttributeData.attributeInfo, values: o });
    const s = h(t.modulationAttributeData, a, n);
    t.modulationAttributeData != null && s && m.push({ attributeInfo: t.modulationAttributeData.attributeInfo, values: s });
    let e = z(t.rendererInfo, o, s, n);
    if (t.filterInfo && t.filterInfo.length > 0 && t.filterAttributesData != null) {
      const r = t.filterAttributesData.filter(S).map((l) => {
        const u = h(l, a, n), b = { attributeInfo: l.attributeInfo, values: u };
        return m.push(b), b;
      });
      c = new Uint32Array(n), n = Y(a, e, c, t.filterInfo, r);
    }
    for (const r of t.userAttributesData) {
      const l = h(r, a, n);
      m.push({ attributeInfo: r.attributeInfo, values: l });
    }
    3 * n < e.length && (e = new Uint8Array(e.buffer.slice(0, 3 * n))), j(a, n, t.elevationOffset);
    const f = _(a, n, q.fromData(t.obbData), v.fromJSON(t.inSR), v.fromJSON(t.outSR));
    return { obbData: t.obbData, points: f, rgb: e, attributes: m, pointIdFilterMap: c };
  }
}
function _(i, t, a, n, c) {
  if (!x(i, n, 0, i, c, 0, t)) throw new Error("Can't reproject");
  const m = A(a.center), o = w(), s = w(), e = A(a.halfSize);
  k(M, a.quaternion);
  const f = new Float32Array(3 * t);
  for (let r = 0; r < t; r++) {
    let l = 3 * r;
    o[0] = i[l] - m[0], o[1] = i[l + 1] - m[1], o[2] = i[l + 2] - m[2], C(s, o, M), e[0] = Math.max(e[0], Math.abs(s[0])), e[1] = Math.max(e[1], Math.abs(s[1])), e[2] = Math.max(e[2], Math.abs(s[2])), f[l++] = o[0], f[l++] = o[1], f[l] = o[2];
  }
  return a.halfSize = e, f;
}
function j(i, t, a) {
  if (a !== 0) for (let n = 0; n < t; n++) i[3 * n + 2] += a;
}
const M = F();
function tt() {
  return new Z();
}
export {
  tt as default
};
//# sourceMappingURL=PointCloudWorker-DTE1_ar4.js.map
