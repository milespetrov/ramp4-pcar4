import { a as r } from "./fabric-C6HWVgbA.js";
import { bW as a, bX as s } from "./main-n1d2W0Ts.js";
class x extends a {
  get config() {
    return this.$iApi.fixture.get("export").config?.timestamp;
  }
  make(t) {
    const e = this.config, i = {
      text: (/* @__PURE__ */ new Date()).toLocaleString("en-CA"),
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0,
      left: 0,
      originX: "left"
    };
    e?.value !== void 0 && (i.text = e.value);
    const o = s(i, t || {}), n = new r.fabric.Textbox(o.text, o);
    return Promise.resolve(n);
  }
}
export {
  x as default
};
//# sourceMappingURL=index-Bvf14Ha_.js.map
