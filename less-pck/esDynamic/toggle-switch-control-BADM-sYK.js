import { i0 as k, fA as m, fE as x, fI as S, fD as B, ik as C, fH as b, fK as q, hL as _, fY as K, hn as N, it as V, iv as D, fw as H, fP as O, hH as M, fT as j, h$ as A, fV as E, fX as I, fL as z, fF as P, fM as R, kK as U } from "./main-n1d2W0Ts.js";
var T = { name: "Toggle", emits: ["input", "update:modelValue", "change"], props: { value: { validator: function(l) {
  return (n) => ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
}, required: !1 }, modelValue: { validator: function(l) {
  return (n) => ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
}, required: !1 }, id: { type: [String, Number], required: !1, default: "toggle" }, name: { type: [String, Number], required: !1, default: "toggle" }, disabled: { type: Boolean, required: !1, default: !1 }, required: { type: Boolean, required: !1, default: !1 }, falseValue: { type: [String, Number, Boolean], required: !1, default: !1 }, trueValue: { type: [String, Number, Boolean], required: !1, default: !0 }, onLabel: { type: [String, Object], required: !1, default: "" }, offLabel: { type: [String, Object], required: !1, default: "" }, classes: { type: Object, required: !1, default: () => ({}) }, labelledby: { type: String, required: !1 }, describedby: { type: String, required: !1 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(l, n) {
  const t = function(o, c, i) {
    const { value: r, modelValue: d, falseValue: a, trueValue: e, disabled: f } = k(o), u = d && d.value !== void 0 ? d : r, h = m(() => u.value === e.value), y = (p) => {
      c.emit("input", p), c.emit("update:modelValue", p), c.emit("change", p);
    }, L = () => {
      y(e.value);
    }, w = () => {
      y(a.value);
    };
    return [null, void 0, !1, 0, "0", "off"].indexOf(u.value) !== -1 && [a.value, e.value].indexOf(u.value) === -1 && w(), [!0, 1, "1", "on"].indexOf(u.value) !== -1 && [a.value, e.value].indexOf(u.value) === -1 && L(), { externalValue: u, checked: h, update: y, check: L, uncheck: w, handleInput: (p) => {
      y(p.target.checked ? e.value : a.value);
    }, handleClick: () => {
      f.value || (h.value ? w() : L());
    } };
  }(l, n), g = function(o, c, i) {
    const { trueValue: r, falseValue: d, onLabel: a, offLabel: e } = k(o), f = i.checked, u = i.update;
    return { label: m(() => {
      let h = f.value ? a.value : e.value;
      return h || (h = "&nbsp;"), h;
    }), toggle: () => {
      u(f.value ? d.value : r.value);
    }, on: () => {
      u(r.value);
    }, off: () => {
      u(d.value);
    } };
  }(l, 0, { checked: t.checked, update: t.update }), s = function(o, c, i) {
    const r = k(o), d = r.disabled, a = i.checked, e = m(() => ({ container: "toggle-container", toggle: "toggle", toggleOn: "toggle-on", toggleOff: "toggle-off", toggleOnDisabled: "toggle-on-disabled", toggleOffDisabled: "toggle-off-disabled", handle: "toggle-handle", handleOn: "toggle-handle-on", handleOff: "toggle-handle-off", handleOnDisabled: "toggle-handle-on-disabled", handleOffDisabled: "toggle-handle-off-disabled", label: "toggle-label", ...r.classes.value }));
    return { classList: m(() => ({ container: e.value.container, toggle: [e.value.toggle, d.value ? a.value ? e.value.toggleOnDisabled : e.value.toggleOffDisabled : a.value ? e.value.toggleOn : e.value.toggleOff], handle: [e.value.handle, d.value ? a.value ? e.value.handleOnDisabled : e.value.handleOffDisabled : a.value ? e.value.handleOn : e.value.handleOff], label: e.value.label })) };
  }(l, 0, { checked: t.checked }), v = function(o, c, i) {
    const { disabled: r } = k(o), d = i.check, a = i.uncheck, e = i.checked;
    return { handleSpace: () => {
      r.value || (e.value ? a() : d());
    } };
  }(l, 0, { check: t.check, uncheck: t.uncheck, checked: t.checked });
  return { ...t, ...s, ...g, ...v };
} };
const W = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"], $ = ["id", "name", "value", "checked", "disabled"], F = ["innerHTML"], X = ["checked"];
T.render = function(l, n, t, g, s, v) {
  return x(), S("div", N({ class: l.classList.container, tabindex: t.disabled ? void 0 : 0, "aria-checked": l.checked, "aria-describedby": t.describedby, "aria-labelledby": t.labelledby, role: "switch" }, t.aria, { onKeypress: n[1] || (n[1] = V(D((...o) => l.handleSpace && l.handleSpace(...o), ["prevent"]), ["space"])) }), [B(b("input", { type: "checkbox", id: t.id, name: t.name, value: t.trueValue, checked: l.checked, disabled: t.disabled }, null, 8, $), [[C, !1]]), b("div", { class: q(l.classList.toggle), onClick: n[0] || (n[0] = (...o) => l.handleClick && l.handleClick(...o)) }, [b("span", { class: q(l.classList.handle) }, null, 2), _(l.$slots, "label", { checked: l.checked, classList: l.classList }, () => [b("span", { class: q(l.classList.label), innerHTML: l.label }, null, 10, F)]), t.required ? (x(), S("input", { key: 0, type: "checkbox", style: { appearance: "none", height: "1px", margin: "0", padding: "0", fontSize: "0", background: "transparent", position: "absolute", width: "100%", bottom: "0", outline: "none" }, checked: l.checked, "aria-hidden": "true", tabindex: "-1", required: "" }, null, 8, X)) : K("v-if", !0)], 2)], 16, W);
}, T.__file = "src/Toggle.vue";
const Y = { class: "flex flex-row rv-label" }, G = { class: "flex items-center" }, J = ["innerHTML"], Q = /* @__PURE__ */ H({
  __name: "toggle-switch-control",
  props: {
    config: {
      type: Object,
      required: !0
    },
    name: String,
    icon: String,
    ariaLabel: String
  },
  emits: ["toggled"],
  setup(l, { emit: n }) {
    const t = n, g = l, s = O(g.config.value), v = O(!!g.config.disabled), o = O(0), c = M([]), i = O(null);
    c.push(
      j(
        A(g, "config"),
        (a, e) => {
          s.value = a.value, v.value = !!a.disabled, o.value += v.value !== e.disabled ? 1 : 0;
        },
        { deep: !0 }
      ),
      j(i, (a) => {
        a && d();
      })
    );
    const r = () => {
      v.value || (s.value = !s.value, t("toggled", s.value));
    }, d = () => {
      if (i.value) {
        const a = i.value.querySelector('input[type="checkbox"]');
        a && g.ariaLabel && a.setAttribute("aria-label", g.ariaLabel);
      }
    };
    return E(() => {
      c.forEach((a) => a());
    }), (a, e) => (x(), S("div", Y, [
      b("div", G, [
        b("div", {
          innerHTML: l.icon,
          class: "p-8 pl-0"
        }, null, 8, J),
        I(" " + z(l.name), 1)
      ]),
      e[2] || (e[2] = b("div", { class: "flex-1" }, null, -1)),
      b("div", {
        ref_key: "toggleWrapper",
        ref: i
      }, [
        (x(), P(R(T), {
          onChange: e[0] || (e[0] = (f) => t("toggled", f)),
          onKeyupCapture: [
            V(D(r, ["stop"]), ["enter"]),
            V(D(r, ["stop"]), ["space"])
          ],
          disabled: v.value,
          key: o.value,
          modelValue: s.value,
          "onUpdate:modelValue": e[1] || (e[1] = (f) => s.value = f),
          classes: {
            container: "inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30",
            toggle: "flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",
            toggleOn: "bg-blue-500 border-blue-500 justify-start text-white",
            toggleOff: "bg-gray-200 border-gray-200 justify-end text-gray-700",
            toggleOnDisabled: "bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed",
            toggleOffDisabled: "bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed",
            handle: "inline-block bg-white w-15 h-15 top-0 rounded-full absolute transition-all",
            handleOn: "left-full transform -translate-x-full",
            handleOff: "left-0",
            handleOnDisabled: "bg-gray-100 left-full transform -translate-x-full",
            handleOffDisabled: "bg-gray-100 left-0",
            label: "text-center w-8 border-box whitespace-nowrap select-none"
          }
        }, null, 8, ["onKeyupCapture", "disabled", "modelValue"]))
      ], 512)
    ]));
  }
}), ee = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-188debd2"]]);
export {
  ee as T
};
//# sourceMappingURL=toggle-switch-control-BADM-sYK.js.map
