import { defineStore as G } from "pinia";
import { ref as r, reactive as g } from "vue";
const T = G("draw", () => {
  const o = r([]), u = r(""), i = g([]), t = r(null);
  function a(e) {
    o.value.splice(0, o.value.length, ...e);
  }
  function l(e) {
    u.value = e;
  }
  function p(e) {
    const n = `graphic-${Date.now()}`;
    return i.push({
      id: n,
      ...e
    }), n;
  }
  function s(e) {
    const n = i.findIndex((c) => c.id === e);
    n !== -1 && (i.splice(n, 1), t.value === e && (t.value = null));
  }
  function f(e) {
    t.value = e;
  }
  function d() {
    t.value = null;
  }
  function v() {
    return t.value ? i.find((e) => e.id === t.value) : null;
  }
  function h(e, n) {
    const c = i.find((m) => m.id === e);
    c && (c.geometry = n);
  }
  return {
    supportedTypes: o,
    activeTool: u,
    graphics: i,
    selectedGraphicId: t,
    setSupportedTypes: a,
    setActiveTool: l,
    addGraphic: p,
    removeGraphic: s,
    selectGraphic: f,
    clearSelection: d,
    getSelectedGraphic: v,
    updateGraphicGeometry: h
  };
});
export {
  T as u
};
