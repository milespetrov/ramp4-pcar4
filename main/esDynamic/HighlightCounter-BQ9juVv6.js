import { l as i } from "./highlightReasons-CwPIAadj.js";
class l {
  constructor() {
    this._idToCounters = /* @__PURE__ */ new Map();
  }
  get empty() {
    return this._idToCounters.size === 0;
  }
  addReason(s, e) {
    for (const o of s) {
      let t = this._idToCounters.get(o);
      t || (t = /* @__PURE__ */ new Map(), this._idToCounters.set(o, t)), t.set(e, (t.get(e) || 0) + 1);
    }
  }
  deleteReason(s, e) {
    for (const o of s) {
      const t = this._idToCounters.get(o);
      if (!t) continue;
      let n = t.get(e);
      if (n == null) return;
      n--, n > 0 ? t.set(e, n) : t.delete(e), t.size === 0 && this._idToCounters.delete(o);
    }
  }
  getHighlightReason(s) {
    const e = this._idToCounters.get(s);
    if (!e) return null;
    let o = null;
    for (const t of i) e.get(t) && (o = t);
    return o || null;
  }
  ids() {
    return this._idToCounters.keys();
  }
}
export {
  l as e
};
//# sourceMappingURL=HighlightCounter-BQ9juVv6.js.map
