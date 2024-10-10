import { f as r } from "./fabric-56BVIuQl.js";
import { bx as f, by as s } from "./main-B46PFZ13.js";
class x extends f {
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
//# sourceMappingURL=index-CiaAmj1k.js.map
