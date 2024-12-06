import { fw as p, bW as i, fP as r, fU as u, fI as m, fH as c, fE as l, fO as f, fB as d, fF as _, fG as h } from "./main-n1d2W0Ts.js";
const x = ["src"], b = /* @__PURE__ */ p({
  __name: "snowman",
  props: {
    fixture: {
      type: i,
      required: !0
    },
    message: String
  },
  setup(s) {
    const e = s, t = r(), o = r("https://i.imgur.com/p13yknD.png");
    return u(() => {
      setTimeout(() => {
        t.value.parentNode.removeChild(t.value), e.fixture.remove();
      }, 6e3);
    }), (n, a) => (l(), m("div", {
      class: "absolute top-0 right-0",
      ref_key: "el",
      ref: t
    }, [
      c("img", {
        style: { width: "250px" },
        src: o.value,
        alt: "Snowman",
        srcset: ""
      }, null, 8, x)
    ], 512));
  }
}), g = /* @__PURE__ */ p({
  __name: "appbar-button",
  setup(s) {
    const e = f("iApi"), t = () => {
      e.fixture.add("snowman");
    };
    return (o, n) => {
      const a = d("appbar-button", !0);
      return l(), _(a, {
        onClickFunction: t,
        tooltip: "⛄"
      }, {
        default: h(() => n[0] || (n[0] = [
          c("span", { class: "block h-24" }, "⛄", -1)
        ])),
        _: 1
      });
    };
  }
});
class w extends i {
  added() {
    this.$iApi.component("snowman-appbar-button", g);
    const { el: e } = this.mount(b, {
      app: this.$element,
      props: { message: "This is a snowman prop.", fixture: this }
    });
    this.$vApp.$el.appendChild(e.childNodes[0]);
  }
  removed() {
  }
}
export {
  w as default
};
//# sourceMappingURL=index-BXXXCRgA.js.map
