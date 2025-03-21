import { defineStore as h } from "pinia";
import { ref as o, reactive as m } from "vue";
const S = h("draw", () => {
  const r = o(""), i = m([]), n = o(null);
  function u(e) {
    r.value = e;
  }
  function a(e) {
    const t = `graphic-${Date.now()}`;
    return i.push({
      id: t,
      ...e
    }), t;
  }
  function l(e) {
    const t = i.findIndex((c) => c.id === e);
    t !== -1 && (i.splice(t, 1), n.value === e && (n.value = null));
  }
  function f(e) {
    n.value = e;
  }
  function d() {
    n.value = null;
  }
  function p() {
    return n.value ? i.find((e) => e.id === n.value) : null;
  }
  function s(e, t) {
    const c = i.find((v) => v.id === e);
    c && (c.geometry = t);
  }
  return {
    activeTool: r,
    graphics: i,
    selectedGraphicId: n,
    setActiveTool: u,
    addGraphic: a,
    removeGraphic: l,
    selectGraphic: f,
    clearSelection: d,
    getSelectedGraphic: p,
    updateGraphicGeometry: s
  };
});
export {
  S as u
};
