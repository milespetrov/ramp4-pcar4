import { cZ as n } from "./main-B1IpazS3.js";
import { c as r } from "./observers-DD63N4zq.js";
let t;
const i = { childList: !0 };
function f(o) {
  t || (t = r("mutation", c)), t.observe(o.el, i);
}
function l(o) {
  t.unobserve(o.el);
}
function c(o) {
  o.forEach(({ target: e }) => {
    n(e);
  });
}
export {
  f as c,
  l as d
};
//# sourceMappingURL=conditionalSlot-C27bGghm.js.map
