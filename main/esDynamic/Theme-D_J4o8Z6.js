import { e$ as tt } from "./main-Bnvk3STL.js";
class f {
  constructor(t) {
    Object.defineProperty(this, "_value", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._value = t;
  }
  get value() {
    return this._value / 100;
  }
  get percent() {
    return this._value;
  }
  toString() {
    return this._value + "%";
  }
  interpolate(t, e) {
    return t + this.value * (e - t);
  }
  static normalize(t, e, i) {
    return t instanceof f ? t : new f(e === i ? 0 : 100 * Math.min(Math.max(1 / (i - e) * (t - e), 0), 1));
  }
}
function kt(s) {
  return new f(s);
}
kt(0);
const Jt = kt(100), qt = kt(50);
function Ot(s) {
  return Number(s) !== s;
}
function Qt(s) {
  return {}.toString.call(s);
}
function mt(s) {
  if (s != null && !g(s)) {
    let t = Number(s);
    return Ot(t) && Nt(s) && s != "" ? mt(s.replace(/[^0-9.\-]+/g, "")) : t;
  }
  return s;
}
function te(s) {
  if (ft(s)) return new Date(s);
  if (g(s)) return new Date(s);
  {
    let t = Number(s);
    return g(t) ? new Date(t) : new Date(s);
  }
}
function Fe(s) {
  if (Ot(s)) return "NaN";
  if (s === 1 / 0) return "Infinity";
  if (s === -1 / 0) return "-Infinity";
  if (s === 0 && 1 / s == -1 / 0) return "-0";
  let t = s < 0;
  s = Math.abs(s);
  let e, i = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + s), r = i[1], n = i[2] || "";
  if (i[3] === void 0) e = n === "" ? r : r + "." + n;
  else {
    let a = +i[3];
    if (s < 1)
      e = "0." + jt("0", a - 1) + r + n;
    else {
      let o = a - n.length;
      e = o === 0 ? r + n : o < 0 ? r + n.slice(0, o) + "." + n.slice(o) : r + n + jt("0", o);
    }
  }
  return t ? "-" + e : e;
}
function jt(s, t) {
  return new Array(t + 1).join(s);
}
function ft(s) {
  return Qt(s) === "[object Date]";
}
function Nt(s) {
  return typeof s == "string";
}
function g(s) {
  return typeof s == "number" && Number(s) == s;
}
function Rt(s) {
  return typeof s == "object" && s !== null;
}
const Et = "__§§§__", We = "__§§§§__";
function st(s, t) {
  const e = s.length;
  for (let i = 0; i < e; ++i) if (s[i] === t) return i;
  return -1;
}
function ee(s, t) {
  const e = s.length;
  for (let i = 0; i < e; ++i) if (t(s[i])) return !0;
  return !1;
}
function Ue(s, t) {
  const e = s.length, i = new Array(e);
  for (let r = 0; r < e; ++r) i[r] = t(s[r], r);
  return i;
}
function _(s, t) {
  const e = s.length;
  for (let i = 0; i < e; ++i) t(s[i], i);
}
function U(s, t) {
  let e = s.length;
  for (; e > 0; ) --e, t(s[e], e);
}
function Ve(s, t) {
  const e = s.length;
  for (let i = 0; i < e && t(s[i], i); ++i) ;
}
function Ft(s, t) {
  let e = !1, i = 0;
  for (; ; ) {
    if (i = s.indexOf(t, i), i === -1) return e;
    e = !0, s.splice(i, 1);
  }
}
function P(s, t) {
  let e = s.indexOf(t);
  return e !== -1 && (s.splice(e, 1), !0);
}
function Ke(s, t, e) {
  let i = st(s, t);
  i !== -1 && bt(s, i), s.push(t);
}
function Ct(s, t) {
  s.indexOf(t) === -1 && s.push(t);
}
function ze(s) {
  const t = s.length, e = new Array(t);
  for (let i = 0; i < t; ++i) e[i] = s[i];
  return e;
}
function dt(s, t, e) {
  s.splice(t, 0, e);
}
function bt(s, t) {
  s.splice(t, 1);
}
function Wt(s, t) {
  const e = s.length;
  for (let i = 0; i < e; ++i) if (t(s[i], i)) return i;
  return -1;
}
function ie(s, t) {
  let e = s.length;
  for (; e > 0; ) if (--e, t(s[e], e)) return e;
  return -1;
}
function se(s, t) {
  const e = Wt(s, t);
  if (e !== -1) return s[e];
}
function re(s, t) {
  const e = ie(s, t);
  if (e !== -1) return s[e];
}
function ne(s, t) {
  let e = 0, i = s.length, r = !1;
  for (; e < i; ) {
    const n = e + i >> 1, a = t(s[n]);
    a < 0 ? e = n + 1 : a === 0 ? (r = !0, e = n + 1) : i = n;
  }
  return { found: r, index: r ? e - 1 : e };
}
function ae(s, t) {
  let e = 0, i = s.length, r = !1;
  for (; e < i; ) {
    const n = e + i >> 1, a = t(s[n]);
    a < 0 ? e = n + 1 : (a === 0 && (r = !0), i = n);
  }
  return { found: r, index: e };
}
function Ge(s, t) {
  let e = s.length;
  for (; e > 0; ) --e, t(s[e]) || s.splice(e, 1);
}
function T(s) {
  return Object.keys(s);
}
function oe(s, t) {
  return T(s).sort(t);
}
function Ye(s) {
  return Object.assign({}, s);
}
function y(s, t) {
  T(s).forEach((e) => {
    t(e, s[e]);
  });
}
function Xe(s, t) {
  for (let e in s) if (he(s, e) && !t(e, s[e])) break;
}
function he(s, t) {
  return {}.hasOwnProperty.call(s, t);
}
class Ut {
  constructor() {
    Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposed = !1;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}
class D {
  constructor(t) {
    Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dispose", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposed = !1, this._dispose = t;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}
class $e extends Ut {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  _dispose() {
    _(this._disposers, (t) => {
      t.dispose();
    });
  }
}
class O extends Ut {
  constructor(t) {
    super(), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposers = t;
  }
  _dispose() {
    _(this._disposers, (t) => {
      t.dispose();
    });
  }
  get disposers() {
    return this._disposers;
  }
}
class le extends D {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_counter", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  increment() {
    return ++this._counter, new D(() => {
      --this._counter, this._counter === 0 && this.dispose();
    });
  }
}
function Ze(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function Vt(s, t, e, i) {
  return s.addEventListener(t, e, i || !1), new D(() => {
    s.removeEventListener(t, e, i || !1);
  });
}
function Je(s) {
  return Vt(window, "resize", (t) => {
    s();
  });
}
function ut(s) {
  switch (s) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return !1;
}
function pt(s) {
  return s.pointerId || 0;
}
function qe() {
  if (document.activeElement && document.activeElement != document.body) if (document.activeElement.blur) document.activeElement.blur();
  else {
    let s = document.createElement("button");
    s.style.position = "fixed", s.style.top = "0px", s.style.left = "-10000px", document.body.appendChild(s), s.focus(), s.blur(), document.body.removeChild(s);
  }
}
function Qe(s) {
  s && s.focus();
}
function ti(s) {
  if (ut("pointerevents")) return s;
  if (ut("touchevents")) switch (s) {
    case "pointerover":
    case "pointerdown":
      return "touchstart";
    case "pointerout":
    case "pointerleave":
    case "pointerup":
      return "touchend";
    case "pointermove":
      return "touchmove";
    case "click":
      return "click";
    case "dblclick":
      return "dblclick";
  }
  else if (ut("mouseevents")) switch (s) {
    case "pointerover":
      return "mouseover";
    case "pointerout":
      return "mouseout";
    case "pointerleave":
      return "mouseleave";
    case "pointerdown":
      return "mousedown";
    case "pointermove":
      return "mousemove";
    case "pointerup":
      return "mouseup";
    case "click":
      return "click";
    case "dblclick":
      return "dblclick";
  }
  return s;
}
function Mt(s) {
  if (typeof Touch < "u" && s instanceof Touch) return !0;
  if (typeof PointerEvent < "u" && s instanceof PointerEvent && s.pointerType != null) switch (s.pointerType) {
    case "touch":
    case "pen":
    case 2:
      return !0;
    case "mouse":
    case 4:
      return !1;
    default:
      return !(s instanceof MouseEvent);
  }
  else if (s.type != null && s.type.match(/^mouse/)) return !1;
  return !0;
}
function ei(s, t, e) {
  s.style[t] = e;
}
function ii(s, t) {
  return s.style[t];
}
function si(s) {
  if (s.composedPath) {
    const t = s.composedPath();
    return t.length === 0 ? null : t[0];
  }
  return s.target;
}
function de(s, t) {
  let e = t;
  for (; ; ) {
    if (s === e) return !0;
    if (e.parentNode === null) {
      if (e.host == null) return !1;
      e = e.host;
    } else e = e.parentNode;
  }
}
function ue(s, t) {
  return s.target && de(t.root.dom, s.target);
}
function ri(s, t) {
  s.style.pointerEvents = t ? "auto" : "none";
}
function ni(s) {
  if (s.key !== void 0) return s.key;
  switch (s.keyCode) {
    case 9:
      return "Tab";
    case 13:
      return "Enter";
    case 16:
      return "Shift";
    case 17:
      return "Control";
    case 27:
      return "Escape";
    case 32:
      return " ";
    case 37:
      return "ArrowLeft";
    case 38:
      return "ArrowUp";
    case 39:
      return "ArrowRight";
    case 40:
      return "ArrowDown";
    case 46:
      return "Delete";
  }
  return "" + s.keyCode;
}
function pe() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function ai() {
  return pe() ? 1 : void 0;
}
function M(s, t) {
  return g(s) ? s : s != null && g(s.value) && g(t) ? t * s.value : 0;
}
function oi(s) {
  let t = ("" + s).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
function ct(s, t = 0, e = "0") {
  return typeof s != "string" && (s = s.toString()), t > s.length ? Array(t - s.length + 1).join(e) + s : s;
}
function ce(s) {
  return s.replace(/^[\s]*/, "");
}
function ge(s) {
  return s.replace(/[\s]*$/, "");
}
function vt(s) {
  return ce(ge(s));
}
function _e(s, t, e = !1, i = "...") {
  if (s.length > t) {
    let r = t - 1;
    for (; r >= 0 && s.charAt(r).match(/\w/); ) r--;
    return r >= 0 && e == 0 ? s.substring(0, r + 1) + "..." : s.substring(0, t) + i;
  }
  return s;
}
function hi(s) {
  return s.replace(/\/(date|number|duration)$/i, "");
}
function li(s) {
  return s && s.replace(/<[^>]*>/g, "");
}
function di(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function ui(s) {
  const t = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/, e = /([^اأدذرزو]*[اأدذرزو])/gi;
  let i = s.split(/(\s+)/), r = [];
  return i.forEach((n) => {
    if (n.match(/^\s+$/)) (n = " ") && (n = "  "), r.push(n);
    else if (t.test(n)) {
      let a = n.split(e).filter((o) => o !== "");
      r = r.concat(a);
    } else r = r.concat([...n]);
  }), r;
}
function pi(s, t = !1) {
  const e = new Date(s.getFullYear(), 0, 0), i = s.getTime() - e.getTime() + 60 * (e.getTimezoneOffset() - s.getTimezoneOffset()) * 1e3;
  return Math.floor(i / 864e5);
}
function Bt(s, t = !1) {
  const e = new Date(Date.UTC(s.getFullYear(), s.getMonth(), s.getDate())), i = e.getUTCDay() || 7;
  e.setUTCDate(e.getUTCDate() + 4 - i);
  const r = new Date(Date.UTC(e.getUTCFullYear(), 0, 1));
  return Math.ceil(((e.getTime() - r.getTime()) / 864e5 + 1) / 7);
}
function ci(s, t = !1) {
  const e = new Date(Date.UTC(s.getFullYear(), s.getMonth(), s.getDate())), i = e.getUTCDay() || 7;
  return e.setUTCDate(e.getUTCDate() + 4 - i), new Date(Date.UTC(e.getUTCFullYear(), 0, 1)).getFullYear();
}
function gi(s, t = !1) {
  const e = Bt(new Date(s.getFullYear(), s.getMonth(), 1), t);
  let i = Bt(s, t);
  return i == 1 && (i = 53), i - e + 1;
}
function _i(s, t, e = 1, i = !1) {
  let r = new Date(t, 0, 4, 0, 0, 0, 0);
  return i && r.setUTCFullYear(t), 7 * s + e - ((r.getDay() || 7) + 3);
}
function mi(s, t) {
  return s > 12 ? s -= 12 : s === 0 && (s = 12), t != null ? s + (t - 1) : s;
}
function fi(s, t = !1, e = !1, i = !1, r) {
  if (i) return t ? "Coordinated Universal Time" : "UTC";
  if (r) {
    const o = s.toLocaleString("en-US", { timeZone: r });
    return vt(s.toLocaleString("en-US", { timeZone: r, timeZoneName: t ? "long" : "short" }).substr(o.length));
  }
  let n = s.toLocaleString("UTC"), a = s.toLocaleString("UTC", { timeZoneName: t ? "long" : "short" }).substr(n.length);
  return e === !1 && (a = a.replace(/ (standard|daylight|summer|winter) /i, " ")), vt(a);
}
function bi(s) {
  const t = new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0)), e = new Date(t.toLocaleString("en-US", { timeZone: "UTC" }));
  return (new Date(t.toLocaleString("en-US", { timeZone: s })).getTime() - e.getTime()) / 6e4 * -1;
}
function vi(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function Kt(s) {
  let t, e, i, r = s.h, n = s.s, a = s.l;
  if (n == 0) t = e = i = a;
  else {
    let o = function(d, p, u) {
      return u < 0 && (u += 1), u > 1 && (u -= 1), u < 0.16666666666666666 ? d + 6 * (p - d) * u : u < 0.5 ? p : u < 0.6666666666666666 ? d + (p - d) * (0.6666666666666666 - u) * 6 : d;
    }, h = a < 0.5 ? a * (1 + n) : a + n - a * n, l = 2 * a - h;
    t = o(l, h, r + 1 / 3), e = o(l, h, r), i = o(l, h, r - 1 / 3);
  }
  return { r: Math.round(255 * t), g: Math.round(255 * e), b: Math.round(255 * i) };
}
function zt(s) {
  let t = s.r / 255, e = s.g / 255, i = s.b / 255, r = Math.max(t, e, i), n = Math.min(t, e, i), a = 0, o = 0, h = (r + n) / 2;
  if (r === n) a = o = 0;
  else {
    let l = r - n;
    switch (o = h > 0.5 ? l / (2 - r - n) : l / (r + n), r) {
      case t:
        a = (e - i) / l + (e < i ? 6 : 0);
        break;
      case e:
        a = (i - t) / l + 2;
        break;
      case i:
        a = (t - e) / l + 4;
    }
    a /= 6;
  }
  return { h: a, s: o, l: h };
}
function me(s, t) {
  return s && { r: Math.max(0, Math.min(255, s.r + et(s.r, t))), g: Math.max(0, Math.min(255, s.g + et(s.g, t))), b: Math.max(0, Math.min(255, s.b + et(s.b, t))), a: s.a };
}
function et(s, t) {
  let e = t > 0 ? 255 - s : s;
  return Math.round(e * t);
}
function fe(s, t) {
  if (s) {
    let e = et(Math.min(Math.max(s.r, s.g, s.b), 230), t);
    return { r: Math.max(0, Math.min(255, Math.round(s.r + e))), g: Math.max(0, Math.min(255, Math.round(s.g + e))), b: Math.max(0, Math.min(255, Math.round(s.b + e))), a: s.a };
  }
  return s;
}
function At(s) {
  return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 >= 128;
}
function be(s, t) {
  if (s === void 0 || t == 1) return s;
  let e = zt(s);
  return e.s = t, Kt(e);
}
function ve(s, t = { r: 255, g: 255, b: 255 }, e = { r: 255, g: 255, b: 255 }) {
  let i = t, r = e;
  return At(e) && (i = e, r = t), At(s) ? r : i;
}
function yi(s, t) {
  return s || (s = []), [...s, ...t].filter((e, i, r) => r.indexOf(e) === i);
}
function wi(s, t) {
  return !!t && s.left == t.left && s.right == t.right && s.top == t.top && s.bottom == t.bottom;
}
function Gt(s) {
  return s[0] === "#" && (s = s.substr(1)), s.length == 3 && (s = s[0].repeat(2) + s[1].repeat(2) + s[2].repeat(2)), parseInt(s, 16);
}
function ye(s) {
  let t = (s = s.replace(/[ ]/g, "")).match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (t) t.push("1");
  else if (t = s.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i), !t) return 0;
  let e = "";
  for (let i = 1; i <= 3; i++) {
    let r = parseInt(t[i]).toString(16);
    r.length == 1 && (r = "0" + r), e += r;
  }
  return Gt(e);
}
function Pi(s) {
  return v.fromAny(s);
}
class v {
  constructor(t) {
    Object.defineProperty(this, "_hex", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._hex = 0 | t;
  }
  get hex() {
    return this._hex;
  }
  get r() {
    return this._hex >>> 16;
  }
  get g() {
    return this._hex >> 8 & 255;
  }
  get b() {
    return 255 & this._hex;
  }
  toCSS(t = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + t + ")";
  }
  toCSSHex() {
    return "#" + ct(this.r.toString(16), 2) + ct(this.g.toString(16), 2) + ct(this.b.toString(16), 2);
  }
  toHSL(t = 1) {
    return zt({ r: this.r, g: this.g, b: this.b, a: t });
  }
  static fromHSL(t, e, i) {
    const r = Kt({ h: t, s: e, l: i });
    return this.fromRGB(r.r, r.g, r.b);
  }
  toString() {
    return this.toCSSHex();
  }
  static fromHex(t) {
    return new v(t);
  }
  static fromRGB(t, e, i) {
    return new v((0 | i) + (e << 8) + (t << 16));
  }
  static fromString(t) {
    return new v(Gt(t));
  }
  static fromCSS(t) {
    return new v(ye(t));
  }
  static fromAny(t) {
    if (Nt(t)) {
      if (t[0] == "#") return v.fromString(t);
      if (t.substr(0, 3) == "rgb") return v.fromCSS(t);
    } else {
      if (g(t)) return v.fromHex(t);
      if (t instanceof v) return v.fromHex(t.hex);
    }
    throw new Error("Unknown color syntax: " + t);
  }
  static alternative(t, e, i) {
    const r = ve({ r: t.r, g: t.g, b: t.b }, e ? { r: e.r, g: e.g, b: e.b } : void 0, i ? { r: i.r, g: i.g, b: i.b } : void 0);
    return this.fromRGB(r.r, r.g, r.b);
  }
  static interpolate(t, e, i, r = "rgb") {
    if (r == "hsl") {
      const n = e.toHSL(), a = i.toHSL();
      return v.fromHSL(B(t, n.h, a.h), B(t, n.s, a.s), B(t, n.l, a.l));
    }
    return v.fromRGB(B(t, e.r, i.r), B(t, e.g, i.g), B(t, e.b, i.b));
  }
  static lighten(t, e) {
    const i = me({ r: t.r, g: t.g, b: t.b }, e);
    return v.fromRGB(i.r, i.g, i.b);
  }
  static brighten(t, e) {
    const i = fe({ r: t.r, g: t.g, b: t.b }, e);
    return v.fromRGB(i.r, i.g, i.b);
  }
  static saturate(t, e) {
    const i = be({ r: t.r, g: t.g, b: t.b }, e);
    return v.fromRGB(i.r, i.g, i.b);
  }
}
class q {
  constructor() {
    Object.defineProperty(this, "_listeners", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_killed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disabled", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_iterating", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_enabled", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._listeners = [], this._killed = [], this._disabled = {}, this._iterating = 0, this._enabled = !0, this._disposed = !1;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = !0;
      const t = this._listeners;
      this._iterating = 1, this._listeners = null, this._disabled = null;
      try {
        _(t, (e) => {
          e.disposer.dispose();
        });
      } finally {
        this._killed = null, this._iterating = null;
      }
    }
  }
  hasListeners() {
    return this._listeners.length !== 0;
  }
  hasListenersByType(t) {
    return ee(this._listeners, (e) => (e.type === null || e.type === t) && !e.killed);
  }
  enable() {
    this._enabled = !0;
  }
  disable() {
    this._enabled = !1;
  }
  enableType(t) {
    delete this._disabled[t];
  }
  disableType(t, e = 1 / 0) {
    this._disabled[t] = e;
  }
  _removeListener(t) {
    if (this._iterating === 0) {
      const e = this._listeners.indexOf(t);
      if (e === -1) throw new Error("Invalid state: could not remove listener");
      this._listeners.splice(e, 1);
    } else this._killed.push(t);
  }
  _removeExistingListener(t, e, i, r) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._eachListener((n) => {
      n.once !== t || n.type !== e || i !== void 0 && n.callback !== i || n.context !== r || n.disposer.dispose();
    });
  }
  isEnabled(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    return this._enabled && this._listeners.length > 0 && this.hasListenersByType(t) && this._disabled[t] === void 0;
  }
  removeType(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._eachListener((e) => {
      e.type === t && e.disposer.dispose();
    });
  }
  has(t, e, i) {
    return Wt(this._listeners, (r) => r.once !== !0 && r.type === t && (e === void 0 || r.callback === e) && r.context === i) !== -1;
  }
  _shouldDispatch(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    const e = this._disabled[t];
    return g(e) ? (e <= 1 ? delete this._disabled[t] : --this._disabled[t], !1) : this._enabled;
  }
  _eachListener(t) {
    ++this._iterating;
    try {
      _(this._listeners, t);
    } finally {
      --this._iterating, this._iterating === 0 && this._killed.length !== 0 && (_(this._killed, (e) => {
        this._removeListener(e);
      }), this._killed.length = 0);
    }
  }
  dispatch(t, e) {
    this._shouldDispatch(t) && this._eachListener((i) => {
      i.killed || i.type !== null && i.type !== t || i.dispatch(t, e);
    });
  }
  _on(t, e, i, r, n, a) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._removeExistingListener(t, e, i, r);
    const o = { type: e, callback: i, context: r, shouldClone: n, dispatch: a, killed: !1, once: t, disposer: new D(() => {
      o.killed = !0, this._removeListener(o);
    }) };
    return this._listeners.push(o), o;
  }
  onAll(t, e, i = !0) {
    return this._on(!1, null, t, e, i, (r, n) => t.call(e, n)).disposer;
  }
  on(t, e, i, r = !0) {
    return this._on(!1, t, e, i, r, (n, a) => e.call(i, a)).disposer;
  }
  once(t, e, i, r = !0) {
    const n = this._on(!0, t, e, i, r, (a, o) => {
      n.disposer.dispose(), e.call(i, o);
    });
    return n.disposer;
  }
  off(t, e, i) {
    this._removeExistingListener(!1, t, e, i);
  }
  copyFrom(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    if (t === this) throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
    const e = [];
    return _(t._listeners, (i) => {
      !i.killed && i.shouldClone && (i.type === null ? e.push(this.onAll(i.callback, i.context)) : i.once ? e.push(this.once(i.type, i.callback, i.context)) : e.push(this.on(i.type, i.callback, i.context)));
    }), new O(e);
  }
}
function Ht(s) {
  return tt(this, void 0, void 0, function* () {
    if (s !== void 0) {
      const t = [];
      y(s, (e, i) => {
        t.push(i.waitForStop());
      }), yield Promise.all(t);
    }
  });
}
function B(s, t, e) {
  return t + s * (e - t);
}
function we(s, t, e) {
  return s >= 1 ? e : t;
}
function Pe(s, t, e) {
  return new f(B(s, t.percent, e.percent));
}
function De(s, t, e) {
  return v.interpolate(s, t, e);
}
function xe(s, t) {
  return typeof s == "number" && typeof t == "number" ? B : s instanceof f && t instanceof f ? Pe : s instanceof v && t instanceof v ? De : we;
}
var V;
function W(s, t) {
  if (!(s >= 0 && s < t)) throw new Error("Index out of bounds: " + s);
}
(function(s) {
  s[s.Stopped = 0] = "Stopped", s[s.Playing = 1] = "Playing", s[s.Paused = 2] = "Paused";
})(V || (V = {}));
class Yt {
  constructor(t = []) {
    Object.defineProperty(this, "_values", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new q() }), this._values = t;
  }
  get values() {
    return this._values;
  }
  contains(t) {
    return this._values.indexOf(t) !== -1;
  }
  removeValue(t) {
    let e = 0, i = this._values.length;
    for (; e < i; ) this._values[e] === t ? (this.removeIndex(e), --i) : ++e;
  }
  indexOf(t) {
    return st(this._values, t);
  }
  get length() {
    return this._values.length;
  }
  hasIndex(t) {
    return t >= 0 && t < this._values.length;
  }
  getIndex(t) {
    return this._values[t];
  }
  _onPush(t) {
    this.events.isEnabled("push") && this.events.dispatch("push", { type: "push", target: this, newValue: t });
  }
  _onInsertIndex(t, e) {
    this.events.isEnabled("insertIndex") && this.events.dispatch("insertIndex", { type: "insertIndex", target: this, index: t, newValue: e });
  }
  _onSetIndex(t, e, i) {
    this.events.isEnabled("setIndex") && this.events.dispatch("setIndex", { type: "setIndex", target: this, index: t, oldValue: e, newValue: i });
  }
  _onRemoveIndex(t, e) {
    this.events.isEnabled("removeIndex") && this.events.dispatch("removeIndex", { type: "removeIndex", target: this, index: t, oldValue: e });
  }
  _onMoveIndex(t, e, i) {
    this.events.isEnabled("moveIndex") && this.events.dispatch("moveIndex", { type: "moveIndex", target: this, oldIndex: t, newIndex: e, value: i });
  }
  _onClear(t) {
    this.events.isEnabled("clear") && this.events.dispatch("clear", { type: "clear", target: this, oldValues: t });
  }
  setIndex(t, e) {
    W(t, this._values.length);
    const i = this._values[t];
    return i !== e && (this._values[t] = e, this._onSetIndex(t, i, e)), i;
  }
  insertIndex(t, e) {
    return W(t, this._values.length + 1), dt(this._values, t, e), this._onInsertIndex(t, e), e;
  }
  swap(t, e) {
    const i = this._values.length;
    if (W(t, i), W(e, i), t !== e) {
      const r = this._values[t], n = this._values[e];
      this._values[t] = n, this._onSetIndex(t, r, n), this._values[e] = r, this._onSetIndex(e, n, r);
    }
  }
  removeIndex(t) {
    W(t, this._values.length);
    const e = this._values[t];
    return bt(this._values, t), this._onRemoveIndex(t, e), e;
  }
  moveValue(t, e) {
    let i = this.indexOf(t);
    if (i !== -1) if (bt(this._values, i), e == null) {
      const r = this._values.length;
      this._values.push(t), this._onMoveIndex(i, r, t);
    } else dt(this._values, e, t), this._onMoveIndex(i, e, t);
    else e == null ? (this._values.push(t), this._onPush(t)) : (dt(this._values, e, t), this._onInsertIndex(e, t));
    return t;
  }
  push(t) {
    return this._values.push(t), this._onPush(t), t;
  }
  unshift(t) {
    return this.insertIndex(0, t), t;
  }
  pushAll(t) {
    _(t, (e) => {
      this.push(e);
    });
  }
  copyFrom(t) {
    this.pushAll(t._values);
  }
  pop() {
    return this._values.length - 1 < 0 ? void 0 : this.removeIndex(this._values.length - 1);
  }
  shift() {
    return this._values.length ? this.removeIndex(0) : void 0;
  }
  setAll(t) {
    const e = this._values;
    this._values = [], this._onClear(e), _(t, (i) => {
      this._values.push(i), this._onPush(i);
    });
  }
  clear() {
    this.setAll([]);
  }
  *[Symbol.iterator]() {
    const t = this._values.length;
    for (let e = 0; e < t; ++e) yield this._values[e];
  }
  each(t) {
    _(this._values, t);
  }
  eachReverse(t) {
    U(this._values, t);
  }
}
class ke extends Yt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "autoDispose", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _onSetIndex(t, e, i) {
    this.autoDispose && e.dispose(), super._onSetIndex(t, e, i);
  }
  _onRemoveIndex(t, e) {
    this.autoDispose && e.dispose(), super._onRemoveIndex(t, e);
  }
  _onClear(t) {
    this.autoDispose && _(t, (e) => {
      e.dispose();
    }), super._onClear(t);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this.autoDispose && _(this._values, (t) => {
      t.dispose();
    }));
  }
}
class Di extends ke {
  constructor(t, e) {
    super(), Object.defineProperty(this, "template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "make", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.template = t, this.make = e;
  }
}
class Oe extends Yt {
  constructor(t) {
    super(), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_events", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._container = t, this._events = this.events.onAll((e) => {
      if (e.type === "clear") _(e.oldValues, (i) => {
        this._onRemoved(i);
      });
      else if (e.type === "push") this._onInserted(e.newValue);
      else if (e.type === "setIndex") this._onRemoved(e.oldValue), this._onInserted(e.newValue, e.index);
      else if (e.type === "insertIndex") this._onInserted(e.newValue, e.index);
      else if (e.type === "removeIndex") this._onRemoved(e.oldValue);
      else {
        if (e.type !== "moveIndex") throw new Error("Unknown IListEvent type");
        this._onRemoved(e.value), this._onInserted(e.value, e.newIndex);
      }
    });
  }
  _onInserted(t, e) {
    t._setParent(this._container, !0);
    const i = this._container._childrenDisplay;
    e === void 0 ? i.addChild(t._display) : i.addChildAt(t._display, e);
  }
  _onRemoved(t) {
    this._container._childrenDisplay.removeChild(t._display), this._container.markDirtyBounds(), this._container.markDirty();
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._events.dispose(), _(this.values, (t) => {
      t.dispose();
    }));
  }
}
const Xt = Math.PI, $t = Xt / 180, xi = 180 / Xt;
function ki(s, t, e) {
  if (!g(t) || t <= 0)
    return Math.round(s);
  {
    let i = Math.pow(10, t);
    return Math.round(s * i) / i;
  }
}
function Oi(s, t) {
  if (!g(t) || t <= 0) return Math.ceil(s);
  {
    let e = Math.pow(10, t);
    return Math.ceil(s * e) / e;
  }
}
function Lt(s, t, e) {
  return Math.min(Math.max(s, t), e);
}
function yt(s) {
  return Math.sin($t * s);
}
function wt(s) {
  return Math.cos($t * s);
}
function Ti(s) {
  return (s %= 360) < 0 && (s += 360), s;
}
function Si(s, t, e, i, r) {
  let n = Number.MAX_VALUE, a = Number.MAX_VALUE, o = -Number.MAX_VALUE, h = -Number.MAX_VALUE, l = [];
  l.push(gt(r, e)), l.push(gt(r, i));
  let d = Math.min(90 * Math.floor(e / 90), 90 * Math.floor(i / 90)), p = Math.max(90 * Math.ceil(e / 90), 90 * Math.ceil(i / 90));
  for (let u = d; u <= p; u += 90) u >= e && u <= i && l.push(gt(r, u));
  for (let u = 0; u < l.length; u++) {
    let c = l[u];
    c.x < n && (n = c.x), c.y < a && (a = c.y), c.x > o && (o = c.x), c.y > h && (h = c.y);
  }
  return { left: s + n, top: t + a, right: s + o, bottom: t + h };
}
function gt(s, t) {
  return { x: s * wt(t), y: s * yt(t) };
}
function ji(s) {
  const t = s.length;
  if (t > 0) {
    let e = s[0], i = e.left, r = e.top, n = e.right, a = e.bottom;
    if (t > 1) for (let o = 1; o < t; o++) e = s[o], i = Math.min(e.left, i), n = Math.max(e.right, n), r = Math.min(e.top, r), a = Math.max(e.bottom, a);
    return { left: i, right: n, top: r, bottom: a };
  }
  return { left: 0, right: 0, top: 0, bottom: 0 };
}
function Te(s, t) {
  return s.x >= t.left && s.y >= t.top && s.x <= t.right && s.y <= t.bottom;
}
function It(s) {
  return s;
}
function Se(s) {
  return s * s * s;
}
function Ei(s) {
  return function(t) {
    return 1 - s(1 - t);
  };
}
class je {
  constructor(t, e) {
    Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_userSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._entity = t, this._settings = e, y(e, (i) => {
      this._userSettings[i] = !0;
    });
  }
  get(t, e) {
    const i = this._settings[t];
    return i !== void 0 ? i : e;
  }
  setRaw(t, e) {
    this._settings[t] = e;
  }
  set(t, e) {
    this._userSettings[t] = !0, this.setRaw(t, e);
  }
  remove(t) {
    delete this._userSettings[t], delete this._settings[t];
  }
  setAll(t) {
    T(t).forEach((e) => {
      this.set(e, t[e]);
    });
  }
  _eachSetting(t) {
    y(this._settings, t);
  }
  apply() {
    const t = { stateAnimationEasing: !0, stateAnimationDuration: !0 }, e = this._entity.states.lookup("default");
    this._eachSetting((i, r) => {
      t[i] || (t[i] = !0, this !== e && (i in e._settings || (e._settings[i] = this._entity.get(i))), this._entity.set(i, r));
    });
  }
  applyAnimate(t) {
    t == null && (t = this._settings.stateAnimationDuration), t == null && (t = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0)));
    let e = this._settings.stateAnimationEasing;
    e == null && (e = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", Se)));
    const i = this._entity.states.lookup("default"), r = { stateAnimationEasing: !0, stateAnimationDuration: !0 }, n = {};
    return this._eachSetting((a, o) => {
      if (!r[a]) {
        r[a] = !0, this != i && (a in i._settings || (i._settings[a] = this._entity.get(a)));
        const h = this._entity.animate({ key: a, to: o, duration: t, easing: e });
        h && (n[a] = h);
      }
    }), n;
  }
}
class Ee {
  constructor(t) {
    Object.defineProperty(this, "_states", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._entity = t;
  }
  lookup(t) {
    return this._states[t];
  }
  create(t, e) {
    const i = this._states[t];
    if (i) return i.setAll(e), i;
    {
      const r = new je(this._entity, e);
      return this._states[t] = r, r;
    }
  }
  remove(t) {
    delete this._states[t];
  }
  apply(t) {
    const e = this._states[t];
    e && e.apply(), this._entity._applyState(t);
  }
  applyAnimate(t, e) {
    let i;
    const r = this._states[t];
    return r && (i = r.applyAnimate(e)), this._entity._applyStateAnimated(t, e), i;
  }
}
class Ce {
  constructor() {
    Object.defineProperty(this, "version", { enumerable: !0, configurable: !0, writable: !0, value: "5.9.10" }), Object.defineProperty(this, "licenses", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "entitiesById", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "rootElements", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
}
const R = new Ce();
function Ci(s) {
  R.licenses.push(s);
}
function F(s, t) {
  return s === t ? 0 : s < t ? -1 : 1;
}
function Zt(s, t, e) {
  const i = s.length, r = t.length, n = Math.min(i, r);
  for (let a = 0; a < n; ++a) {
    const o = e(s[a], t[a]);
    if (o !== 0) return o;
  }
  return F(i, r);
}
function Mi(s, t) {
  return s === t ? 0 : s < t ? -1 : 1;
}
class Me {
  constructor(t) {
    Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_callbacks", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_disabled", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._entity = t;
  }
  add(t, e) {
    let i = this._callbacks[t];
    return i === void 0 && (i = this._callbacks[t] = []), i.push(e), this._entity._markDirtyKey(t), new D(() => {
      P(i, e) && this._entity._markDirtyKey(t);
    });
  }
  remove(t) {
    const e = this._callbacks[t];
    e !== void 0 && (delete this._callbacks[t], e.length !== 0 && this._entity._markDirtyKey(t));
  }
  enable(t) {
    this._disabled[t] && (delete this._disabled[t], this._entity._markDirtyKey(t));
  }
  disable(t) {
    this._disabled[t] || (this._disabled[t] = !0, this._entity._markDirtyKey(t));
  }
  fold(t, e) {
    if (!this._disabled[t]) {
      const i = this._callbacks[t];
      if (i !== void 0) for (let r = 0, n = i.length; r < n; ++r) e = i[r](e, this._entity, t);
    }
    return e;
  }
}
class Q {
  constructor(t, e, i, r, n, a, o) {
    Object.defineProperty(this, "_animation", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_from", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_to", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_duration", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_easing", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_loops", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_interpolate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_oldTime", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_time", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_stopped", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_playing", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new q() }), this._animation = t, this._from = e, this._to = i, this._duration = r, this._easing = n, this._loops = a, this._interpolate = xe(e, i), this._oldTime = o;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  get playing() {
    return this._playing;
  }
  get stopped() {
    return this._stopped;
  }
  stop() {
    this._stopped || (this._stopped = !0, this._playing = !1, this.events.isEnabled("stopped") && this.events.dispatch("stopped", { type: "stopped", target: this }));
  }
  pause() {
    this._playing = !1, this._oldTime = null;
  }
  play() {
    this._stopped || this._playing || (this._playing = !0, this._animation._startAnimation());
  }
  get percentage() {
    return this._time / this._duration;
  }
  waitForStop() {
    return new Promise((t, e) => {
      if (this._stopped) t();
      else {
        const i = () => {
          r.dispose(), t();
        }, r = this.events.on("stopped", i);
      }
    });
  }
  _checkEnded() {
    return !(this._loops > 1) || (--this._loops, !1);
  }
  _run(t) {
    this._oldTime !== null && (this._time += t - this._oldTime, this._time > this._duration && (this._time = this._duration)), this._oldTime = t;
  }
  _reset(t) {
    this._oldTime = t, this._time = 0;
  }
  _value(t) {
    return this._interpolate(this._easing(t), this._from, this._to);
  }
}
let Be = 0;
class Ae {
  constructor(t) {
    Object.defineProperty(this, "uid", { enumerable: !0, configurable: !0, writable: !0, value: ++Be }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_prevSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_prevPrivateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_animatingSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_animatingPrivateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_userProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._settings = t;
  }
  _checkDirty() {
    T(this._settings).forEach((t) => {
      this._userProperties[t] = !0, this._markDirtyKey(t);
    });
  }
  resetUserSettings() {
    this._userProperties = {};
  }
  _runAnimation(t) {
    let e = V.Stopped;
    if (!this.isDisposed()) {
      let i = !1, r = !1;
      y(this._animatingSettings, (n, a) => {
        if (a.stopped) this._stopAnimation(n);
        else if (a.playing) {
          a._run(t);
          const o = a.percentage;
          o >= 1 ? a._checkEnded() ? this.set(n, a._value(1)) : (i = !0, a._reset(t), this._set(n, a._value(1))) : (i = !0, this._set(n, a._value(o)));
        } else r = !0;
      }), y(this._animatingPrivateSettings, (n, a) => {
        if (a.stopped) this._stopAnimationPrivate(n);
        else if (a.playing) {
          a._run(t);
          const o = a.percentage;
          o >= 1 ? a._checkEnded() ? this.setPrivate(n, a._value(1)) : (i = !0, a._reset(t), this._setPrivate(n, a._value(1))) : (i = !0, this._setPrivate(n, a._value(o)));
        } else r = !0;
      }), i ? e = V.Playing : r && (e = V.Paused);
    }
    return e;
  }
  _markDirtyKey(t) {
    this.markDirty();
  }
  _markDirtyPrivateKey(t) {
    this.markDirty();
  }
  on(t, e) {
    let i = this._settingEvents[t];
    return i === void 0 && (i = this._settingEvents[t] = []), i.push(e), new D(() => {
      P(i, e), i.length === 0 && delete this._settingEvents[t];
    });
  }
  off(t, e) {
    let i = this._settingEvents[t];
    i !== void 0 && e !== void 0 ? P(i, e) : delete this._settingEvents[t];
  }
  onPrivate(t, e) {
    let i = this._privateSettingEvents[t];
    return i === void 0 && (i = this._privateSettingEvents[t] = []), i.push(e), new D(() => {
      P(i, e), i.length === 0 && delete this._privateSettingEvents[t];
    });
  }
  offPrivate(t, e) {
    let i = this._privateSettingEvents[t];
    i !== void 0 && e !== void 0 ? P(i, e) : delete this._privateSettingEvents[t];
  }
  getRaw(t, e) {
    const i = this._settings[t];
    return i !== void 0 ? i : e;
  }
  has(t) {
    return t in this._settings;
  }
  get(t, e) {
    return this.getRaw(t, e);
  }
  _sendKeyEvent(t, e) {
    const i = this._settingEvents[t];
    i !== void 0 && _(i, (r) => {
      r(e, this, t);
    });
  }
  _sendPrivateKeyEvent(t, e) {
    const i = this._privateSettingEvents[t];
    i !== void 0 && _(i, (r) => {
      r(e, this, t);
    });
  }
  _setRaw(t, e, i) {
    this._prevSettings[t] = e, this._sendKeyEvent(t, i);
  }
  setRaw(t, e) {
    const i = this._settings[t];
    this._settings[t] = e, i !== e && this._setRaw(t, i, e);
  }
  _set(t, e) {
    const i = this._settings[t];
    this._settings[t] = e, i !== e && (this._setRaw(t, i, e), this._markDirtyKey(t));
  }
  _stopAnimation(t) {
    const e = this._animatingSettings[t];
    e && (delete this._animatingSettings[t], e.stop());
  }
  set(t, e) {
    return this._set(t, e), this._stopAnimation(t), e;
  }
  remove(t) {
    t in this._settings && (this._prevSettings[t] = this._settings[t], delete this._settings[t], this._sendKeyEvent(t, void 0), this._markDirtyKey(t)), this._stopAnimation(t);
  }
  removeAll() {
    _(T(this._settings), (t) => {
      this.remove(t);
    });
  }
  getPrivate(t, e) {
    const i = this._privateSettings[t];
    return i !== void 0 ? i : e;
  }
  _setPrivateRaw(t, e, i) {
    this._prevPrivateSettings[t] = e, this._sendPrivateKeyEvent(t, i);
  }
  setPrivateRaw(t, e) {
    const i = this._privateSettings[t];
    this._privateSettings[t] = e, i !== e && this._setPrivateRaw(t, i, e);
  }
  _setPrivate(t, e) {
    const i = this._privateSettings[t];
    this._privateSettings[t] = e, i !== e && (this._setPrivateRaw(t, i, e), this._markDirtyPrivateKey(t));
  }
  _stopAnimationPrivate(t) {
    const e = this._animatingPrivateSettings[t];
    e && (e.stop(), delete this._animatingPrivateSettings[t]);
  }
  setPrivate(t, e) {
    return this._setPrivate(t, e), this._stopAnimationPrivate(t), e;
  }
  removePrivate(t) {
    t in this._privateSettings && (this._prevPrivateSettings[t] = this._privateSettings[t], delete this._privateSettings[t], this._markDirtyPrivateKey(t)), this._stopAnimationPrivate(t);
  }
  setAll(t) {
    y(t, (e, i) => {
      this.set(e, i);
    });
  }
  animate(t) {
    const e = t.key, i = t.to, r = t.duration || 0, n = t.loops || 1, a = t.from === void 0 ? this.get(e) : t.from, o = t.easing === void 0 ? It : t.easing;
    if (r === 0) this.set(e, i);
    else {
      if (a !== void 0 && a !== i) {
        this.set(e, a);
        const l = this._animatingSettings[e] = new Q(this, a, i, r, o, n, this._animationTime());
        return this._startAnimation(), l;
      }
      this.set(e, i);
    }
    const h = new Q(this, a, i, r, o, n, null);
    return h.stop(), h;
  }
  animatePrivate(t) {
    const e = t.key, i = t.to, r = t.duration || 0, n = t.loops || 1, a = t.from === void 0 ? this.getPrivate(e) : t.from, o = t.easing === void 0 ? It : t.easing;
    if (r === 0) this.setPrivate(e, i);
    else {
      if (a !== void 0 && a !== i) {
        this.setPrivate(e, a);
        const l = this._animatingPrivateSettings[e] = new Q(this, a, i, r, o, n, this._animationTime());
        return this._startAnimation(), l;
      }
      this.setPrivate(e, i);
    }
    const h = new Q(this, a, i, r, o, n, null);
    return h.stop(), h;
  }
  _dispose() {
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}
let A = class extends Ae {
  constructor(t, e, i, r = []) {
    if (super(e), Object.defineProperty(this, "_root", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_user_id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "states", { enumerable: !0, configurable: !0, writable: !0, value: new Ee(this) }), Object.defineProperty(this, "adapters", { enumerable: !0, configurable: !0, writable: !0, value: new Me(this) }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: this._createEvents() }), Object.defineProperty(this, "_userPrivateProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirty", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyPrivate", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_templates", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_internalTemplates", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_defaultThemes", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_templateDisposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_runSetup", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_disposerProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), !i) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._root = t, this._internalTemplates = r, e.id && this._registerId(e.id);
  }
  static new(t, e, i) {
    const r = new this(t, e, !0);
    return r._template = i, r._afterNew(), r;
  }
  static _new(t, e, i = []) {
    const r = new this(t, e, !0, i);
    return r._afterNew(), r;
  }
  _afterNew() {
    this._checkDirty();
    let t = !1;
    const e = this._template;
    e && (t = !0, e._setObjectTemplate(this)), _(this._internalTemplates, (i) => {
      t = !0, i._setObjectTemplate(this);
    }), t && this._applyTemplates(!1), this.states.create("default", {}), this._setDefaults();
  }
  _afterNewApplyThemes() {
    this._checkDirty();
    const t = this._template;
    t && t._setObjectTemplate(this), _(this._internalTemplates, (e) => {
      e._setObjectTemplate(this);
    }), this.states.create("default", {}), this._setDefaults(), this._applyThemes();
  }
  _createEvents() {
    return new q();
  }
  get classNames() {
    return this.constructor.classNames;
  }
  get className() {
    return this.constructor.className;
  }
  _setDefaults() {
  }
  _setDefaultFn(t, e) {
    const i = this.get(t);
    if (i) return i;
    {
      const r = e();
      return this.set(t, r), r;
    }
  }
  _setDefault(t, e) {
    this.has(t) || super.set(t, e);
  }
  _setRawDefault(t, e) {
    this.has(t) || super.setRaw(t, e);
  }
  _clearDirty() {
    T(this._dirty).forEach((t) => {
      this._dirty[t] = !1;
    }), T(this._dirtyPrivate).forEach((t) => {
      this._dirtyPrivate[t] = !1;
    });
  }
  isDirty(t) {
    return !!this._dirty[t];
  }
  isPrivateDirty(t) {
    return !!this._dirtyPrivate[t];
  }
  _markDirtyKey(t) {
    this._dirty[t] = !0, super._markDirtyKey(t);
  }
  _markDirtyPrivateKey(t) {
    this._dirtyPrivate[t] = !0, super._markDirtyKey(t);
  }
  isType(t) {
    return this.classNames.indexOf(t) !== -1;
  }
  _pushPropertyDisposer(t, e) {
    let i = this._disposerProperties[t];
    return i === void 0 && (i = this._disposerProperties[t] = []), i.push(e), e;
  }
  _disposeProperty(t) {
    const e = this._disposerProperties[t];
    e !== void 0 && (_(e, (i) => {
      i.dispose();
    }), delete this._disposerProperties[t]);
  }
  set template(t) {
    const e = this._template;
    e !== t && (this._template = t, e && e._removeObjectTemplate(this), t && t._setObjectTemplate(this), this._applyTemplates());
  }
  get template() {
    return this._template;
  }
  markDirty() {
    this._root._addDirtyEntity(this);
  }
  _startAnimation() {
    this._root._addAnimation(this);
  }
  _animationTime() {
    return this._root.animationTime;
  }
  _applyState(t) {
  }
  _applyStateAnimated(t, e) {
  }
  get(t, e) {
    const i = this.adapters.fold(t, this._settings[t]);
    return i !== void 0 ? i : e;
  }
  isUserSetting(t) {
    return this._userProperties[t] || !1;
  }
  set(t, e) {
    return this._userProperties[t] = !0, super.set(t, e);
  }
  setRaw(t, e) {
    this._userProperties[t] = !0, super.setRaw(t, e);
  }
  _setSoft(t, e) {
    return this._userProperties[t] ? e : super.set(t, e);
  }
  remove(t) {
    delete this._userProperties[t], this._removeTemplateProperty(t);
  }
  setPrivate(t, e) {
    return this._userPrivateProperties[t] = !0, super.setPrivate(t, e);
  }
  setPrivateRaw(t, e) {
    this._userPrivateProperties[t] = !0, super.setPrivateRaw(t, e);
  }
  removePrivate(t) {
    delete this._userPrivateProperties[t], this._removeTemplatePrivateProperty(t);
  }
  _setTemplateProperty(t, e, i) {
    this._userProperties[e] || t === this._findTemplateByKey(e) && super.set(e, i);
  }
  _setTemplatePrivateProperty(t, e, i) {
    this._userPrivateProperties[e] || t === this._findTemplateByPrivateKey(e) && super.setPrivate(e, i);
  }
  _removeTemplateProperty(t) {
    if (!this._userProperties[t]) {
      const e = this._findTemplateByKey(t);
      e ? super.set(t, e._settings[t]) : super.remove(t);
    }
  }
  _removeTemplatePrivateProperty(t) {
    if (!this._userPrivateProperties[t]) {
      const e = this._findTemplateByPrivateKey(t);
      e ? super.setPrivate(t, e._privateSettings[t]) : super.removePrivate(t);
    }
  }
  _walkParents(t) {
    t(this._root._rootContainer), t(this);
  }
  _applyStateByKey(t) {
    const e = this.states.create(t, {}), i = {};
    this._eachTemplate((r) => {
      const n = r.states.lookup(t);
      n && n._apply(e, i);
    }), y(e._settings, (r) => {
      i[r] || e._userSettings[r] || e.remove(r);
    });
  }
  _applyTemplate(t, e) {
    this._templateDisposers.push(t._apply(this, e)), y(t._settings, (i, r) => {
      e.settings[i] || this._userProperties[i] || (e.settings[i] = !0, super.set(i, r));
    }), y(t._privateSettings, (i, r) => {
      e.privateSettings[i] || this._userPrivateProperties[i] || (e.privateSettings[i] = !0, super.setPrivate(i, r));
    }), this._runSetup && t.setup && (this._runSetup = !1, t.setup(this));
  }
  _findStaticTemplate(t) {
    if (this._template && t(this._template)) return this._template;
  }
  _eachTemplate(t) {
    this._findStaticTemplate((e) => (t(e), !1)), U(this._internalTemplates, t), _(this._templates, t);
  }
  _applyTemplates(t = !0) {
    t && this._disposeTemplates();
    const e = { settings: {}, privateSettings: {}, states: {} };
    this._eachTemplate((i) => {
      this._applyTemplate(i, e);
    }), t && (y(this._settings, (i) => {
      this._userProperties[i] || e.settings[i] || super.remove(i);
    }), y(this._privateSettings, (i) => {
      this._userPrivateProperties[i] || e.privateSettings[i] || super.removePrivate(i);
    }));
  }
  _findTemplate(t) {
    const e = this._findStaticTemplate(t);
    if (e === void 0) {
      const i = re(this._internalTemplates, t);
      return i === void 0 ? se(this._templates, t) : i;
    }
    return e;
  }
  _findTemplateByKey(t) {
    return this._findTemplate((e) => t in e._settings);
  }
  _findTemplateByPrivateKey(t) {
    return this._findTemplate((e) => t in e._privateSettings);
  }
  _disposeTemplates() {
    _(this._templateDisposers, (t) => {
      t.dispose();
    }), this._templateDisposers.length = 0;
  }
  _removeTemplates() {
    _(this._templates, (t) => {
      t._removeObjectTemplate(this);
    }), this._templates.length = 0;
  }
  _applyThemes(t = !1) {
    let e = !1;
    const i = [];
    let r = [];
    const n = /* @__PURE__ */ new Set(), a = this.get("themeTagsSelf");
    return a && _(a, (o) => {
      n.add(o);
    }), this._walkParents((o) => {
      o === this._root._rootContainer && (e = !0), o._defaultThemes.length > 0 && i.push(o._defaultThemes);
      const h = o.get("themes");
      h && r.push(h);
      const l = o.get("themeTags");
      l && _(l, (d) => {
        n.add(d);
      });
    }), r = i.concat(r), this._removeTemplates(), (e || t) && U(this.classNames, (o) => {
      const h = [];
      _(r, (l) => {
        _(l, (d) => {
          const p = d._lookupRules(o);
          p && U(p, (u) => {
            if (u.tags.every((c) => n.has(c))) {
              const c = ae(h, (m) => {
                const b = F(u.tags.length, m.tags.length);
                return b === 0 ? Zt(u.tags, m.tags, F) : b;
              });
              h.splice(c.index, 0, u);
            }
          });
        });
      }), _(h, (l) => {
        this._templates.push(l.template), l.template._setObjectTemplate(this);
      });
    }), this._applyTemplates(), (e || t) && (this._runSetup = !1), e || t;
  }
  _changed() {
  }
  _beforeChanged() {
    if (this.isDirty("id")) {
      const t = this.get("id");
      t && this._registerId(t);
      const e = this._prevSettings.id;
      e && delete R.entitiesById[e];
    }
  }
  _registerId(t) {
    if (R.entitiesById[t] && R.entitiesById[t] !== this) throw new Error('An entity with id "' + t + '" already exists.');
    R.entitiesById[t] = this;
  }
  _afterChanged() {
  }
  addDisposer(t) {
    return this._disposers.push(t), t;
  }
  _dispose() {
    super._dispose();
    const t = this._template;
    t && t._removeObjectTemplate(this), _(this._internalTemplates, (i) => {
      i._removeObjectTemplate(this);
    }), this._removeTemplates(), this._disposeTemplates(), this.events.dispose(), this._disposers.forEach((i) => {
      i.dispose();
    }), y(this._disposerProperties, (i, r) => {
      _(r, (n) => {
        n.dispose();
      });
    });
    const e = this.get("id");
    e && delete R.entitiesById[e];
  }
  setTimeout(t, e) {
    const i = setTimeout(() => {
      this.removeDispose(r), t();
    }, e), r = new D(() => {
      clearTimeout(i);
    });
    return this._disposers.push(r), r;
  }
  removeDispose(t) {
    if (!this.isDisposed()) {
      let e = st(this._disposers, t);
      e > -1 && this._disposers.splice(e, 1);
    }
    t.dispose();
  }
  hasTag(t) {
    return st(this.get("themeTags", []), t) !== -1;
  }
  addTag(t) {
    if (!this.hasTag(t)) {
      const e = this.get("themeTags", []);
      e.push(t), this.set("themeTags", e);
    }
  }
  removeTag(t) {
    if (this.hasTag(t)) {
      const e = this.get("themeTags", []);
      Ft(e, t), this.set("themeTags", e);
    }
  }
  _t(t, e, ...i) {
    return this._root.language.translate(t, e, ...i);
  }
  get root() {
    return this._root;
  }
};
Object.defineProperty(A, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Entity" }), Object.defineProperty(A, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: ["Entity"] });
class He {
  constructor(t, e, i) {
    Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_name", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._name = t, this._template = e, this._settings = i;
  }
  get(t, e) {
    const i = this._settings[t];
    return i !== void 0 ? i : e;
  }
  set(t, e) {
    this._settings[t] = e, this._template._stateChanged(this._name);
  }
  remove(t) {
    delete this._settings[t], this._template._stateChanged(this._name);
  }
  setAll(t) {
    T(t).forEach((e) => {
      this._settings[e] = t[e];
    }), this._template._stateChanged(this._name);
  }
  _apply(t, e) {
    y(this._settings, (i, r) => {
      e[i] || t._userSettings[i] || (e[i] = !0, t.setRaw(i, r));
    });
  }
}
class Le {
  constructor(t) {
    Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_states", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._template = t;
  }
  lookup(t) {
    return this._states[t];
  }
  create(t, e) {
    const i = this._states[t];
    if (i) return i.setAll(e), i;
    {
      const r = new He(t, this._template, e);
      return this._states[t] = r, this._template._stateChanged(t), r;
    }
  }
  remove(t) {
    delete this._states[t], this._template._stateChanged(t);
  }
  _apply(t, e) {
    y(this._states, (i, r) => {
      let n = e.states[i];
      n == null && (n = e.states[i] = {});
      const a = t.states.create(i, {});
      r._apply(a, n);
    });
  }
}
class Ie {
  constructor() {
    Object.defineProperty(this, "_callbacks", { enumerable: !0, configurable: !0, writable: !0, value: {} });
  }
  add(t, e) {
    let i = this._callbacks[t];
    return i === void 0 && (i = this._callbacks[t] = []), i.push(e), new D(() => {
      P(i, e), i.length === 0 && delete this._callbacks[t];
    });
  }
  remove(t) {
    this._callbacks[t] !== void 0 && delete this._callbacks[t];
  }
  _apply(t) {
    const e = [];
    return y(this._callbacks, (i, r) => {
      _(r, (n) => {
        e.push(t.adapters.add(i, n));
      });
    }), new O(e);
  }
}
class J {
  constructor(t, e) {
    if (Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_entities", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "states", { enumerable: !0, configurable: !0, writable: !0, value: new Le(this) }), Object.defineProperty(this, "adapters", { enumerable: !0, configurable: !0, writable: !0, value: new Ie() }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new q() }), Object.defineProperty(this, "setup", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), !e) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._settings = t;
  }
  static new(t) {
    return new J(t, !0);
  }
  get entities() {
    return this._entities;
  }
  get(t, e) {
    const i = this._settings[t];
    return i !== void 0 ? i : e;
  }
  setRaw(t, e) {
    this._settings[t] = e;
  }
  set(t, e) {
    this._settings[t] !== e && (this.setRaw(t, e), this._entities.forEach((i) => {
      i._setTemplateProperty(this, t, e);
    }));
  }
  remove(t) {
    t in this._settings && (delete this._settings[t], this._entities.forEach((e) => {
      e._removeTemplateProperty(t);
    }));
  }
  removeAll() {
    y(this._settings, (t, e) => {
      this.remove(t);
    });
  }
  getPrivate(t, e) {
    const i = this._privateSettings[t];
    return i !== void 0 ? i : e;
  }
  setPrivateRaw(t, e) {
    return this._privateSettings[t] = e, e;
  }
  setPrivate(t, e) {
    return this._privateSettings[t] !== e && (this.setPrivateRaw(t, e), this._entities.forEach((i) => {
      i._setTemplatePrivateProperty(this, t, e);
    })), e;
  }
  removePrivate(t) {
    t in this._privateSettings && (delete this._privateSettings[t], this._entities.forEach((e) => {
      e._removeTemplatePrivateProperty(t);
    }));
  }
  setAll(t) {
    y(t, (e, i) => {
      this.set(e, i);
    });
  }
  on(t, e) {
    let i = this._settingEvents[t];
    return i === void 0 && (i = this._settingEvents[t] = []), i.push(e), new D(() => {
      P(i, e), i.length === 0 && delete this._settingEvents[t];
    });
  }
  onPrivate(t, e) {
    let i = this._privateSettingEvents[t];
    return i === void 0 && (i = this._privateSettingEvents[t] = []), i.push(e), new D(() => {
      P(i, e), i.length === 0 && delete this._privateSettingEvents[t];
    });
  }
  _apply(t, e) {
    const i = [];
    return y(this._settingEvents, (r, n) => {
      _(n, (a) => {
        i.push(t.on(r, a));
      });
    }), y(this._privateSettingEvents, (r, n) => {
      _(n, (a) => {
        i.push(t.onPrivate(r, a));
      });
    }), this.states._apply(t, e), i.push(this.adapters._apply(t)), i.push(t.events.copyFrom(this.events)), new O(i);
  }
  _setObjectTemplate(t) {
    this._entities.push(t);
  }
  _removeObjectTemplate(t) {
    Ft(this._entities, t);
  }
  _stateChanged(t) {
    this._entities.forEach((e) => {
      e._applyStateByKey(t);
    });
  }
}
class nt extends q {
  constructor(t) {
    super(), Object.defineProperty(this, "_sprite", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rendererDisposers", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dispatchParents", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), this._sprite = t;
  }
  _makePointerEvent(t, e) {
    return { type: t, originalEvent: e.event, point: e.point, simulated: e.simulated, native: e.native, target: this._sprite };
  }
  _onRenderer(t, e) {
    this._sprite.set("interactive", !0), this._sprite._display.interactive = !0;
    let i = this._rendererDisposers[t];
    if (i === void 0) {
      const r = this._sprite._display.on(t, (n) => {
        e.call(this, n);
      });
      i = this._rendererDisposers[t] = new le(() => {
        delete this._rendererDisposers[t], r.dispose();
      });
    }
    return i.increment();
  }
  _on(t, e, i, r, n, a) {
    const o = super._on(t, e, i, r, n, a), h = nt.RENDERER_EVENTS[e];
    return h !== void 0 && (o.disposer = new O([o.disposer, this._onRenderer(e, h)])), o;
  }
  stopParentDispatch() {
    this._dispatchParents = !1;
  }
  dispatchParents(t, e) {
    const i = this._dispatchParents;
    this._dispatchParents = !0;
    try {
      this.dispatch(t, e), this._dispatchParents && this._sprite.parent && this._sprite.parent.events.dispatchParents(t, e);
    } finally {
      this._dispatchParents = i;
    }
  }
}
Object.defineProperty(nt, "RENDERER_EVENTS", { enumerable: !0, configurable: !0, writable: !0, value: { click: function(s) {
  this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", s)) && this.dispatch("click", this._makePointerEvent("click", s));
}, rightclick: function(s) {
  this.isEnabled("rightclick") && this.dispatch("rightclick", this._makePointerEvent("rightclick", s));
}, middleclick: function(s) {
  this.isEnabled("middleclick") && this.dispatch("middleclick", this._makePointerEvent("middleclick", s));
}, dblclick: function(s) {
  this.dispatchParents("dblclick", this._makePointerEvent("dblclick", s));
}, pointerover: function(s) {
  const t = this._sprite;
  let e = !0;
  if (t.getPrivate("trustBounds")) {
    t._getBounds();
    const i = t.globalBounds();
    if (t.isType("Graphics")) {
      const r = t.get("strokeWidth", 1) / 2;
      r >= 1 && (i.left -= r, i.right += r, i.top -= r, i.bottom += r);
    }
    Te(s.point, i) || (e = !1, t._root._renderer.removeHovering(t._display));
  }
  e && this.isEnabled("pointerover") && this.dispatch("pointerover", this._makePointerEvent("pointerover", s));
}, pointerout: function(s) {
  this.isEnabled("pointerout") && this.dispatch("pointerout", this._makePointerEvent("pointerout", s));
}, pointerdown: function(s) {
  this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", s));
}, pointerup: function(s) {
  this.isEnabled("pointerup") && this.dispatch("pointerup", this._makePointerEvent("pointerup", s));
}, globalpointerup: function(s) {
  this.isEnabled("globalpointerup") && this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", s));
}, globalpointermove: function(s) {
  this.isEnabled("globalpointermove") && this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", s));
}, wheel: function(s) {
  this.dispatchParents("wheel", { type: "wheel", target: this._sprite, originalEvent: s.event, point: s.point });
} } });
class k extends A {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_adjustedLocalBounds", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_localBounds", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_parent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dataItem", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_templateField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_sizeDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDragging", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dragEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dragPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isHidden", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isShowing", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isHiding", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDown", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_downPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downPoints", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_toggleDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dragDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_hoverDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_focusDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipMoveDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipPointerDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_statesHandled", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _afterNew() {
    this.setPrivateRaw("visible", !0), super._afterNew();
  }
  markDirtyKey(t) {
    this._markDirtyKey(t);
  }
  _markDirtyKey(t) {
    super._markDirtyKey(t), t != "x" && t != "y" && t != "dx" && t != "dy" || (this.markDirtyBounds(), this._addPercentagePositionChildren(), this.markDirtyPosition());
  }
  _markDirtyPrivateKey(t) {
    super._markDirtyPrivateKey(t), t != "x" && t != "y" || this.markDirtyPosition();
  }
  _removeTemplateField() {
    this._templateField && this._templateField._removeObjectTemplate(this);
  }
  _createEvents() {
    return new nt(this);
  }
  _processTemplateField() {
    let t;
    const e = this.get("templateField");
    if (e) {
      const i = this.dataItem;
      if (i) {
        const r = i.dataContext;
        r && (t = r[e], t instanceof J || !t || (t = J.new(t)));
      }
    }
    this._templateField !== t && (this._removeTemplateField(), this._templateField = t, t && t._setObjectTemplate(this), this._applyTemplates());
  }
  _setDataItem(t) {
    const e = this._dataItem;
    this._dataItem = t, this._processTemplateField();
    const i = "dataitemchanged";
    t != e && this.events.isEnabled(i) && this.events.dispatch(i, { type: i, target: this, oldDataItem: e, newDataItem: t });
  }
  set dataItem(t) {
    this._setDataItem(t);
  }
  get dataItem() {
    if (this._dataItem) return this._dataItem;
    {
      let t = this._parent;
      for (; t; ) {
        if (t._dataItem) return t._dataItem;
        t = t._parent;
      }
    }
  }
  _addPercentageSizeChildren() {
    let t = this.parent;
    t && (this.get("width") instanceof f || this.get("height") instanceof f ? Ct(t._percentageSizeChildren, this) : P(t._percentageSizeChildren, this));
  }
  _addPercentagePositionChildren() {
    let t = this.parent;
    t && (this.get("x") instanceof f || this.get("y") instanceof f ? Ct(t._percentagePositionChildren, this) : P(t._percentagePositionChildren, this));
  }
  markDirtyPosition() {
    this._root._addDirtyPosition(this);
  }
  updatePivotPoint() {
    const t = this._localBounds;
    if (t) {
      const e = this.get("centerX");
      e != null && (this._display.pivot.x = t.left + M(e, t.right - t.left));
      const i = this.get("centerY");
      i != null && (this._display.pivot.y = t.top + M(i, t.bottom - t.top));
    }
  }
  _beforeChanged() {
    if (super._beforeChanged(), this._handleStates(), this.isDirty("tooltip")) {
      const t = this._prevSettings.tooltip;
      t && t.dispose();
    }
    if ((this.isDirty("layer") || this.isDirty("layerMargin")) && (this._display.setLayer(this.get("layer"), this.get("layerMargin")), this.markDirtyLayer()), this.isDirty("tooltipPosition")) {
      const t = this._tooltipMoveDp;
      t && (t.dispose(), this._tooltipMoveDp = void 0);
      const e = this._tooltipPointerDp;
      e && (e.dispose(), this._tooltipPointerDp = void 0), this.get("tooltipPosition") == "pointer" && (this.isHover() && (this._tooltipMoveDp = this.events.on("globalpointermove", (i) => {
        this.showTooltip(i.point);
      })), this._tooltipPointerDp = new O([this.events.on("pointerover", () => {
        this._tooltipMoveDp = this.events.on("globalpointermove", (i) => {
          this.showTooltip(i.point);
        });
      }), this.events.on("pointerout", () => {
        const i = this._tooltipMoveDp;
        i && (i.dispose(), this._tooltipMoveDp = void 0);
      })]));
    }
  }
  _handleStates() {
    this._statesHandled || (this.isDirty("active") && (this.get("active") ? (this.states.applyAnimate("active"), this.set("ariaChecked", !0)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !1)), this.markDirtyAccessibility()), this.isDirty("disabled") && (this.get("disabled") ? (this.states.applyAnimate("disabled"), this.set("ariaChecked", !1)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !0)), this.markDirtyAccessibility()), this._statesHandled = !0);
  }
  _changed() {
    super._changed();
    const t = this._display, e = this.events;
    if (this.isDirty("draggable")) {
      const r = this.get("draggable");
      r ? (this.set("interactive", !0), this._dragDp = new O([e.on("pointerdown", (n) => {
        this.dragStart(n);
      }), e.on("globalpointermove", (n) => {
        this.dragMove(n);
      }), e.on("globalpointerup", (n) => {
        this.dragStop(n);
      })])) : this._dragDp && (this._dragDp.dispose(), this._dragDp = void 0), t.cancelTouch = !!r;
    }
    if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn")) {
      const r = this.get("tooltipText"), n = this.get("tooltipHTML"), a = this.get("showTooltipOn", "hover");
      this._tooltipDp && (this._tooltipDp.dispose(), this._tooltipDp = void 0), (r || n) && (a == "click" ? (this._tooltipDp = new O([e.on("click", () => {
        this.setTimeout(() => this.showTooltip(), 10);
      }), Vt(document, "click", (o) => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)) : a == "always" || (this._tooltipDp = new O([e.on("pointerover", () => {
        this.showTooltip();
      }), e.on("pointerout", () => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)));
    }
    if (this.isDirty("toggleKey")) {
      let r = this.get("toggleKey");
      r && r != "none" ? this._toggleDp = e.on("click", () => {
        this._isDragging || this.set(r, !this.get(r));
      }) : this._toggleDp && (this._toggleDp.dispose(), this._toggleDp = void 0);
    }
    if (this.isDirty("opacity") && (t.alpha = Math.max(0, this.get("opacity", 1)), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("rotation") && (this.markDirtyBounds(), t.angle = this.get("rotation", 0)), this.isDirty("scale") && (this.markDirtyBounds(), t.scale = this.get("scale", 0)), (this.isDirty("centerX") || this.isDirty("centerY")) && (this.markDirtyBounds(), this.updatePivotPoint()), (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) && (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? t.visible = !0 : (t.visible = !1, this.hideTooltip()), this.markDirtyBounds(), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("width") || this.isDirty("height")) {
      this.markDirtyBounds(), this._addPercentageSizeChildren();
      const r = this.parent;
      r && (this.isDirty("width") && this.get("width") instanceof f || this.isDirty("height") && this.get("height") instanceof f) && (r.markDirty(), r._prevWidth = 0), this._sizeDirty = !0;
    }
    if ((this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight") || this.isDirty("marginLeft") || this.isDirty("marginTop") || this.isDirty("marginRight") || this.isDirty("marginBottom")) && (this.markDirtyBounds(), this._sizeDirty = !0), this._sizeDirty && this._updateSize(), this.isDirty("wheelable")) {
      const r = this.get("wheelable");
      r && this.set("interactive", !0), t.wheelable = !!r;
    }
    (this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this)), this.isDirty("filter") && (t.filter = this.get("filter"));
    let i = this.get("filter", "");
    if (this.isDirty("blur")) {
      const r = this.get("blur", 0);
      r != 0 && (i += " blur(" + r + "px)");
    }
    if (this.isDirty("saturate")) {
      const r = this.get("saturate", 1);
      r != 1 && (i += " saturate(" + r + ")");
    }
    if (this.isDirty("brightness")) {
      const r = this.get("brightness", 1);
      r != 1 && (i += " brightness(" + r + ")");
    }
    if (this.isDirty("contrast")) {
      const r = this.get("contrast", 1);
      r != 1 && (i += " contrast(" + r + ")");
    }
    if (this.isDirty("sepia")) {
      const r = this.get("sepia", 0);
      r != 0 && (i += " sepia(" + r + ")");
    }
    if (this.isDirty("hue")) {
      const r = this.get("hue", 0);
      r != 0 && (i += " hue-rotate(" + r + "deg)");
    }
    if (this.isDirty("invert")) {
      const r = this.get("invert", 0);
      r != 0 && (i += " invert(" + r + ")");
    }
    if (i && (t.filter = i), this.isDirty("cursorOverStyle") && (t.cursorOverStyle = this.get("cursorOverStyle")), this.isDirty("hoverOnFocus") && (this.get("hoverOnFocus") ? this._focusDp = new O([e.on("focus", () => {
      this.showTooltip();
    }), e.on("blur", () => {
      this.hideTooltip();
    })]) : this._focusDp && (this._focusDp.dispose(), this._focusDp = void 0)), this.isDirty("focusable") && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this), this.markDirtyAccessibility()), this.isPrivateDirty("focusable") && this.markDirtyAccessibility(), (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) && this.markDirtyAccessibility(), this.isDirty("exportable") && (t.exportable = this.get("exportable")), this.isDirty("interactive")) {
      const r = this.events;
      this.get("interactive") && !r.isDisposed() ? this._hoverDp = new O([r.on("click", (n) => {
        Mt(n.originalEvent) && (this.getPrivate("touchHovering") || this.setTimeout(() => {
          this._handleOver(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.showTooltip(), this.setPrivateRaw("touchHovering", !0), this.events.dispatch("pointerover", { type: "pointerover", target: n.target, originalEvent: n.originalEvent, point: n.point, simulated: n.simulated });
        }, 10));
      }), r.on("globalpointerup", (n) => {
        Mt(n.originalEvent) && this.getPrivate("touchHovering") && (this._handleOut(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.hideTooltip(), this.setPrivateRaw("touchHovering", !1), this.events.dispatch("pointerout", { type: "pointerout", target: n.target, originalEvent: n.originalEvent, point: n.point, simulated: n.simulated })), this._isDown && this._handleUp(n);
      }), r.on("pointerover", () => {
        this._handleOver();
      }), r.on("pointerout", () => {
        this._handleOut();
      }), r.on("pointerdown", (n) => {
        this._handleDown(n);
      })]) : (this._display.interactive = !1, this._hoverDp && (this._hoverDp.dispose(), this._hoverDp = void 0));
    }
    this.isDirty("forceInactive") && (this._display.inactive = this.get("forceInactive", null)), this.get("showTooltipOn") == "always" && this._display.visible && this.showTooltip();
  }
  dragStart(t) {
    this._dragEvent = t, this.events.stopParentDispatch();
  }
  dragStop(t) {
    if (this._dragEvent = void 0, this._dragPoint = void 0, this.events.stopParentDispatch(), this._isDragging) {
      this._isDragging = !1;
      const e = "dragstop";
      this.events.isEnabled(e) && this.events.dispatch(e, { type: e, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
    }
  }
  _handleOver() {
    this.isHidden() || (this.get("active") && this.states.lookup("hoverActive") ? this.states.applyAnimate("hoverActive") : this.get("disabled") && this.states.lookup("hoverDisabled") ? this.states.applyAnimate("hoverDisabled") : this.states.applyAnimate("hover"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleOut() {
    this.isHidden() || (this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : (this.states.lookup("hover") || this.states.lookup("hoverActive")) && this.states.applyAnimate("default"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleUp(t) {
    if (!this.isHidden()) {
      this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : this.states.lookup("down") && (this.isHover() ? this.states.applyAnimate("hover") : this.states.applyAnimate("default")), this._downPoint = void 0;
      const e = pt(t.originalEvent);
      delete this._downPoints[e], T(this._downPoints).length == 0 && (this._isDown = !1);
    }
  }
  _hasMoved(t) {
    const e = pt(t.originalEvent), i = this._downPoints[e];
    if (i) {
      const r = Math.abs(i.x - t.point.x), n = Math.abs(i.y - t.point.y);
      return r > 5 || n > 5;
    }
    return !1;
  }
  _hasDown() {
    return T(this._downPoints).length > 0;
  }
  _handleDown(t) {
    const e = this.parent;
    if (e && !this.get("draggable") && e._handleDown(t), this.get("interactive") && !this.isHidden()) {
      this.states.lookup("down") && this.states.applyAnimate("down"), this._downPoint = { x: t.point.x, y: t.point.y }, this._isDown = !0;
      const i = pt(t.originalEvent);
      this._downPoints[i] = { x: t.point.x, y: t.point.y };
    }
  }
  dragMove(t) {
    let e = this._dragEvent;
    if (e) {
      if (e.simulated && !t.simulated) return !0;
      let i = 0, r = this.parent, n = 1;
      for (; r != null; ) i += r.get("rotation", 0), r = r.parent, r && (n *= r.get("scale", 1));
      let a = (t.point.x - e.point.x) / n, o = (t.point.y - e.point.y) / n;
      const h = this.events;
      if (e.simulated && !this._isDragging) {
        this._isDragging = !0, this._dragEvent = t, this._dragPoint = { x: this.x(), y: this.y() };
        const l = "dragstart";
        h.isEnabled(l) && h.dispatch(l, { type: l, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
      }
      if (this._isDragging) {
        let l = this._dragPoint;
        this.set("x", l.x + a * wt(i) + o * yt(i)), this.set("y", l.y + o * wt(i) - a * yt(i));
        const d = "dragged";
        h.isEnabled(d) && h.dispatch(d, { type: d, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
      } else if (Math.hypot(a, o) > 5) {
        this._isDragging = !0, this._dragEvent = t, this._dragPoint = { x: this.x(), y: this.y() };
        const l = "dragstart";
        h.isEnabled(l) && h.dispatch(l, { type: l, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
      }
    }
  }
  _updateSize() {
  }
  _getBounds() {
    this._localBounds = this._display.getLocalBounds();
  }
  depth() {
    let t = this.parent, e = 0;
    for (; ; ) {
      if (!t) return e;
      ++e, t = t.parent;
    }
  }
  markDirtySize() {
    this._sizeDirty = !0, this.markDirty();
  }
  markDirtyBounds() {
    const t = this._display;
    if (this.get("isMeasured")) {
      this._root._addDirtyBounds(this), t.isMeasured = !0, t.invalidateBounds();
      const e = this.parent;
      e && this.get("position") != "absolute" && (e.get("width") == null || e.get("height") == null || e.get("layout")) && e.markDirtyBounds(), this.get("focusable") && this.isFocus() && this.markDirtyAccessibility();
    }
  }
  markDirtyAccessibility() {
    this._root._invalidateAccessibility(this);
  }
  markDirtyLayer() {
    this._display.markDirtyLayer(!0);
  }
  markDirty() {
    super.markDirty(), this.markDirtyLayer();
  }
  _updateBounds() {
    const t = this._adjustedLocalBounds;
    let e;
    if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? (this._getBounds(), this._fixMinBounds(this._localBounds), this.updatePivotPoint(), this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds), e = this._adjustedLocalBounds) : (e = { left: 0, right: 0, top: 0, bottom: 0 }, this._localBounds = e, this._adjustedLocalBounds = e), !t || t.left !== e.left || t.top !== e.top || t.right !== e.right || t.bottom !== e.bottom) {
      const i = "boundschanged";
      this.events.isEnabled(i) && this.events.dispatch(i, { type: i, target: this }), this.parent && (this.parent.markDirty(), this.parent.markDirtyBounds()), this.getPrivate("showingTooltip") && this.showTooltip();
    }
  }
  _fixMinBounds(t) {
    let e = this.get("minWidth", this.getPrivate("minWidth")), i = this.get("minHeight", this.getPrivate("minHeight"));
    g(e) && t.right - t.left < e && (t.right = t.left + e), g(i) && t.bottom - t.top < i && (t.bottom = t.top + i);
    let r = this.getPrivate("width"), n = this.getPrivate("height");
    g(r) && (r > 0 ? t.right = t.left + r : t.left = t.right + r), g(n) && (n > 0 ? t.bottom = t.top + n : t.top = t.bottom + n);
  }
  _removeParent(t) {
    t && (t.children.removeValue(this), P(t._percentageSizeChildren, this), P(t._percentagePositionChildren, this));
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = !1, this._statesHandled = !1;
  }
  hover() {
    this.showTooltip(), this._handleOver();
  }
  unhover() {
    this.hideTooltip(), this._handleOut();
  }
  showTooltip(t) {
    const e = this.getTooltip(), i = this.get("tooltipText"), r = this.get("tooltipHTML");
    if ((i || r) && e) {
      const n = this.get("tooltipPosition"), a = this.getPrivate("tooltipTarget", this);
      n != "fixed" && t || (this._display._setMatrix(), t = this.toGlobal(a._getTooltipPoint())), e.set("pointTo", t), e.set("tooltipTarget", a), e.get("x") || e.set("x", t.x), e.get("y") || e.set("y", t.y), i && e.label.set("text", i), r && e.label.set("html", r);
      const o = this.dataItem;
      if (o && e.label._setDataItem(o), this.get("showTooltipOn") == "always" && (t.x < 0 || t.x > this._root.width() || t.y < 0 || t.y > this._root.height())) return void this.hideTooltip();
      e.label.text.markDirtyText();
      const h = e.show();
      return this.setPrivateRaw("showingTooltip", !0), h;
    }
  }
  hideTooltip() {
    const t = this.getTooltip();
    if (t && (t.get("tooltipTarget") == this.getPrivate("tooltipTarget", this) || this.get("tooltip") == t)) {
      let e = t.get("keepTargetHover") && t.get("stateAnimationDuration", 0) == 0 ? 400 : void 0;
      const i = t.hide(e);
      return this.setPrivateRaw("showingTooltip", !1), i;
    }
  }
  _getTooltipPoint() {
    const t = this._localBounds;
    if (t) {
      let e = 0, i = 0;
      return this.get("isMeasured") ? (e = t.left + M(this.get("tooltipX", 0), t.right - t.left), i = t.top + M(this.get("tooltipY", 0), t.bottom - t.top)) : (e = M(this.get("tooltipX", 0), this.width()), i = M(this.get("tooltipY", 0), this.height())), { x: e, y: i };
    }
    return { x: 0, y: 0 };
  }
  getTooltip() {
    let t = this.get("tooltip");
    if (t) return t;
    {
      let e = this.parent;
      if (e) return e.getTooltip();
    }
  }
  _updatePosition() {
    const t = this.parent;
    let e = this.get("dx", 0), i = this.get("dy", 0), r = this.get("x"), n = this.getPrivate("x"), a = 0, o = 0;
    const h = this.get("position");
    r instanceof f && (r = t ? t.innerWidth() * r.value + t.get("paddingLeft", 0) : 0), g(r) ? a = r + e : n != null ? a = n : t && h == "relative" && (a = t.get("paddingLeft", 0) + e);
    let l = this.get("y"), d = this.getPrivate("y");
    l instanceof f && (l = t ? t.innerHeight() * l.value + t.get("paddingTop", 0) : 0), g(l) ? o = l + i : d != null ? o = d : t && h == "relative" && (o = t.get("paddingTop", 0) + i);
    const p = this._display;
    if (p.x != a || p.y != o) {
      p.invalidateBounds(), p.x = a, p.y = o;
      const u = "positionchanged";
      this.events.isEnabled(u) && this.events.dispatch(u, { type: u, target: this });
    }
    this.getPrivate("showingTooltip") && this.showTooltip();
  }
  x() {
    let t = this.get("x"), e = this.getPrivate("x");
    const i = this.parent;
    return i ? t instanceof f ? M(t, i.innerWidth()) + i.get("paddingLeft", 0) : g(t) ? t : e ?? i.get("paddingLeft", this._display.x) : this._display.x;
  }
  y() {
    let t = this.getPrivate("y");
    if (t != null) return t;
    let e = this.get("y");
    const i = this.parent;
    return i ? e instanceof f ? M(e, i.innerHeight()) + i.get("paddingTop", 0) : g(e) ? e : t ?? i.get("paddingTop", this._display.y) : this._display.y;
  }
  _dispose() {
    super._dispose(), this._display.dispose(), this._removeTemplateField(), this._removeParent(this.parent), this._root._removeFocusElement(this);
    const t = this.get("tooltip");
    t && t.dispose(), this.markDirty();
  }
  adjustedLocalBounds() {
    return this._fixMinBounds(this._adjustedLocalBounds), this._adjustedLocalBounds;
  }
  localBounds() {
    return this._localBounds;
  }
  bounds() {
    const t = this._adjustedLocalBounds, e = this.x(), i = this.y();
    return { left: t.left + e, right: t.right + e, top: t.top + i, bottom: t.bottom + i };
  }
  globalBounds() {
    const t = this.localBounds(), e = this.toGlobal({ x: t.left, y: t.top }), i = this.toGlobal({ x: t.right, y: t.top }), r = this.toGlobal({ x: t.right, y: t.bottom }), n = this.toGlobal({ x: t.left, y: t.bottom });
    return { left: Math.min(e.x, i.x, r.x, n.x), top: Math.min(e.y, i.y, r.y, n.y), right: Math.max(e.x, i.x, r.x, n.x), bottom: Math.max(e.y, i.y, r.y, n.y) };
  }
  _onShow(t) {
  }
  _onHide(t) {
  }
  appear(t, e) {
    return tt(this, void 0, void 0, function* () {
      return yield this.hide(0), e ? new Promise((i, r) => {
        this.setTimeout(() => {
          i(this.show(t));
        }, e);
      }) : this.show(t);
    });
  }
  show(t) {
    return tt(this, void 0, void 0, function* () {
      if (!this._isShowing) {
        this._isHidden = !1, this._isShowing = !0, this._isHiding = !1, this.states.lookup("default").get("visible") && this.set("visible", !0), this._onShow(t);
        const e = this.states.applyAnimate("default", t);
        yield Ht(e), this._isShowing = !1;
      }
    });
  }
  hide(t) {
    return tt(this, void 0, void 0, function* () {
      if (!this._isHiding && !this._isHidden) {
        this._isHiding = !0, this._isShowing = !1;
        let e = this.states.lookup("hidden");
        e || (e = this.states.create("hidden", { opacity: 0, visible: !1 })), this._isHidden = !0, this._onHide(t);
        const i = this.states.applyAnimate("hidden", t);
        yield Ht(i), this._isHiding = !1;
      }
    });
  }
  isHidden() {
    return this._isHidden;
  }
  isShowing() {
    return this._isShowing;
  }
  isHiding() {
    return this._isHiding;
  }
  isHover() {
    return this._display.hovering();
  }
  isFocus() {
    return this._root.focused(this);
  }
  isDragging() {
    return this._isDragging;
  }
  isVisible() {
    return !(!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden"));
  }
  isVisibleDeep() {
    return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible();
  }
  compositeOpacity() {
    const t = this.get("opacity", 1);
    return this._parent ? this._parent.compositeOpacity() * t : t;
  }
  compositeScale() {
    const t = this.get("scale", 1);
    return this._parent ? this._parent.compositeScale() * t : t;
  }
  compositeRotation() {
    const t = this.get("rotation", 0);
    return this._parent ? this._parent.compositeRotation() + t : t;
  }
  width() {
    let t = this.get("width"), e = this.get("maxWidth", this.getPrivate("maxWidth")), i = this.get("minWidth", this.getPrivate("minWidth")), r = this.getPrivate("width"), n = 0;
    if (g(r)) n = r;
    else if (t == null) this._adjustedLocalBounds && (n = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left);
    else if (t instanceof f) {
      const a = this.parent;
      n = a ? a.innerWidth() * t.value : this._root.width() * t.value;
    } else g(t) && (n = t);
    return g(i) && (n = Math.max(i, n)), g(e) && (n = Math.min(e, n)), n;
  }
  maxWidth() {
    let t = this.get("maxWidth", this.getPrivate("maxWidth"));
    if (g(t)) return t;
    {
      let i = this.get("width");
      if (g(i)) return i;
    }
    const e = this.parent;
    return e ? e.innerWidth() : this._root.width();
  }
  maxHeight() {
    let t = this.get("maxHeight", this.getPrivate("maxHeight"));
    if (g(t)) return t;
    {
      let i = this.get("height");
      if (g(i)) return i;
    }
    const e = this.parent;
    return e ? e.innerHeight() : this._root.height();
  }
  height() {
    let t = this.get("height"), e = this.get("maxHeight", this.getPrivate("maxHeight")), i = this.get("minHeight", this.getPrivate("minHeight")), r = this.getPrivate("height"), n = 0;
    if (g(r)) n = r;
    else if (t == null) this._adjustedLocalBounds && (n = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top);
    else if (t instanceof f) {
      const a = this.parent;
      n = a ? a.innerHeight() * t.value : this._root.height() * t.value;
    } else g(t) && (n = t);
    return g(i) && (n = Math.max(i, n)), g(e) && (n = Math.min(e, n)), n;
  }
  _findStaticTemplate(t) {
    return this._templateField && t(this._templateField) ? this._templateField : super._findStaticTemplate(t);
  }
  _walkParents(t) {
    this._parent && this._walkParent(t);
  }
  _walkParent(t) {
    this._parent && this._parent._walkParent(t), t(this);
  }
  get parent() {
    return this._parent;
  }
  _setParent(t, e = !1) {
    const i = this._parent;
    t !== i && (this.markDirtyBounds(), t.markDirty(), this._parent = t, e && (this._removeParent(i), t && (this._addPercentageSizeChildren(), this._addPercentagePositionChildren())), this.markDirtyPosition(), this._applyThemes());
  }
  getNumberFormatter() {
    return this.get("numberFormatter", this._root.numberFormatter);
  }
  getDateFormatter() {
    return this.get("dateFormatter", this._root.dateFormatter);
  }
  getDurationFormatter() {
    return this.get("durationFormatter", this._root.durationFormatter);
  }
  toGlobal(t) {
    return this._display.toGlobal(t);
  }
  toLocal(t) {
    return this._display.toLocal(t);
  }
  _getDownPoint() {
    const t = this._getDownPointId();
    if (t) return this._downPoints[t];
  }
  _getDownPointId() {
    if (this._downPoints) return oe(this._downPoints, (t, e) => t > e ? 1 : t < e ? -1 : 0)[0];
  }
  toFront() {
    const t = this.parent;
    t && t.children.moveValue(this, t.children.length - 1);
  }
  toBack() {
    const t = this.parent;
    t && t.children.moveValue(this, 0);
  }
}
Object.defineProperty(k, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Sprite" }), Object.defineProperty(k, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: A.classNames.concat([k.className]) });
class K extends A {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_backgroundDisplay", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_pattern", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  get pattern() {
    return this._pattern;
  }
  _draw() {
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fillOpacity")) && (this._clear = !0), this._checkDirtyFill();
  }
  _checkDirtyFill() {
    (this.isDirty("color") || this.isDirty("fill")) && (this._clear = !0);
  }
  _changed() {
    if (super._changed(), this._clear) {
      const t = this.get("repetition", ""), e = this.get("width", 100), i = this.get("height", 100), r = this.get("fill"), n = this.get("fillOpacity", 1), a = this._backgroundDisplay, o = this._display;
      o.clear(), a.clear(), r && n > 0 && (a.beginFill(r, n), a.drawRect(0, 0, e, i), a.endFill()), o.angle = this.get("rotation", 0), this._draw(), this._pattern = this._root._renderer.createPattern(o, a, t, e, i);
    }
    this._clear = !1;
  }
}
Object.defineProperty(K, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Pattern" }), Object.defineProperty(K, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: A.classNames.concat([K.className]) });
class z extends K {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_image", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _beforeChanged() {
    super._beforeChanged(), this._clear = !0, this.isDirty("src") && this._load();
    const t = this.get("canvas");
    t && (this.set("width", t.width), this.set("height", t.height));
  }
  _draw() {
    super._draw();
    const t = this._image;
    if (t) {
      const i = this.get("width", 100), r = this.get("height", 100), n = this.get("fit", "image");
      let a = 0, o = 0;
      n == "pattern" ? (a = i, o = r) : (a = t.width, o = t.height, n == "image" && (this.set("width", a), this.set("height", o)));
      let h = 0, l = 0;
      this.get("centered", !0) && (h = i / 2 - a / 2, l = r / 2 - o / 2), this._display.image(t, a, o, h, l);
    }
    const e = this.get("canvas");
    e && this._display.image(e, e.width, e.height, 0, 0);
  }
  _load() {
    const t = this.get("src");
    if (t) {
      const e = new Image();
      e.src = t, e.decode().then(() => {
        this._image = e, this._draw(), this.events.isEnabled("loaded") && this.events.dispatch("loaded", { type: "loaded", target: this });
      }).catch((i) => {
      });
    }
  }
}
var Pt;
Object.defineProperty(z, "className", { enumerable: !0, configurable: !0, writable: !0, value: "PicturePattern" }), Object.defineProperty(z, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: K.classNames.concat([z.className]) }), function(s) {
  s.ADD = "lighter", s.COLOR = "color", s.COLOR_BURN = "color-burn", s.COLOR_DODGE = "color-dodge", s.DARKEN = "darken", s.DIFFERENCE = "difference", s.DST_OVER = "destination-over", s.EXCLUSION = "exclusion", s.HARD_LIGHT = "hard-light", s.HUE = "hue", s.LIGHTEN = "lighten", s.LUMINOSITY = "luminosity", s.MULTIPLY = "multiply", s.NORMAL = "source-over", s.OVERLAY = "overlay", s.SATURATION = "saturation", s.SCREEN = "screen", s.SOFT_LIGHT = "soft-light", s.SRC_ATOP = "source-atop", s.XOR = "xor";
}(Pt || (Pt = {}));
const Ai = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset", "shadowBlur", "shadowColor", "shadowOpacity", "shadowOffsetX", "shadowOffsetY", "blur", "sepia", "invert", "brightness", "hue", "contrast", "saturate"];
class G extends k {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _beforeChanged() {
    if (super._beforeChanged(), (this.isDirty("draw") || this.isDirty("svgPath")) && this.markDirtyBounds(), (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) && (this._clear = !0), this._display.crisp = this.get("crisp", !1), this.isDirty("fillGradient")) {
      const t = this.get("fillGradient");
      if (t) {
        this._display.isMeasured = !0;
        const e = t.get("target");
        e && (this._disposers.push(e.events.on("boundschanged", () => {
          this._markDirtyKey("fill");
        })), this._disposers.push(e.events.on("positionchanged", () => {
          this._markDirtyKey("fill");
        })));
      }
    }
    if (this.isDirty("strokeGradient")) {
      const t = this.get("strokeGradient");
      if (t) {
        this._display.isMeasured = !0;
        const e = t.get("target");
        e && (this._disposers.push(e.events.on("boundschanged", () => {
          this._markDirtyKey("stroke");
        })), this._disposers.push(e.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        })));
      }
    }
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds(), this.markDirtyLayer(), this._display.clear();
      let t = this.get("strokeDasharray");
      g(t) && (t = t < 0.5 ? [0] : [t]), this._display.setLineDash(t);
      const e = this.get("strokeDashoffset");
      e && this._display.setLineDashOffset(e);
      const i = this.get("blendMode", Pt.NORMAL);
      this._display.blendMode = i;
      const r = this.get("draw");
      r && typeof r == "function" && r(this._display, this);
      const n = this.get("svgPath");
      n != null && this._display.svgPath(n);
    }
  }
  _afterChanged() {
    if (super._afterChanged(), this._clear) {
      const t = this.get("fill"), e = this.get("fillGradient"), i = this.get("fillPattern"), r = this.get("fillOpacity"), n = this.get("stroke"), a = this.get("strokeGradient"), o = this.get("strokePattern"), h = this.get("shadowColor"), l = this.get("shadowBlur"), d = this.get("shadowOffsetX"), p = this.get("shadowOffsetY"), u = this.get("shadowOpacity");
      if (h && (l || d || p) && this._display.shadow(h, l, d, p, u), t && !e && (this._display.beginFill(t, r), this._display.endFill()), e) {
        if (t) {
          const m = e.get("stops", []);
          m.length && _(m, (b) => {
            b.color && !b.colorInherited || !t || (b.color = t, b.colorInherited = !0), (b.opacity == null || b.opacityInherited) && (b.opacity = r, b.opacityInherited = !0);
          });
        }
        const c = e.getFill(this);
        c && (this._display.beginFill(c, r), this._display.endFill());
      }
      if (i) {
        const c = i.pattern;
        c && (this._display.beginFill(c, r), this._display.endFill(), i instanceof z && i.events.once("loaded", () => {
          this._clear = !0, this.markDirty();
        }));
      }
      if (n || a || o) {
        const c = this.get("strokeOpacity");
        let m = this.get("strokeWidth", 1);
        this.get("nonScalingStroke") && (m /= this.get("scale", 1)), this.get("crisp") && (m /= this._root._renderer.resolution);
        const b = this.get("lineJoin");
        if (n && !a && (this._display.lineStyle(m, n, c, b), this._display.endStroke()), a) {
          const S = a.get("stops", []);
          S.length && _(S, (w) => {
            w.color && !w.colorInherited || !n || (w.color = n, w.colorInherited = !0), (w.opacity == null || w.opacityInherited) && (w.opacity = c, w.opacityInherited = !0);
          });
          const H = a.getFill(this);
          H && (this._display.lineStyle(m, H, c, b), this._display.endStroke());
        }
        if (o) {
          let S = o.pattern;
          S && (this._display.lineStyle(m, S, c, b), this._display.endStroke(), o instanceof z && o.events.once("loaded", () => {
            this._clear = !0, this.markDirty();
          }));
        }
      }
      this.getPrivate("showingTooltip") && this.showTooltip();
    }
    this._clear = !1;
  }
}
Object.defineProperty(G, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Graphics" }), Object.defineProperty(G, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: k.classNames.concat([G.className]) });
class Y extends G {
  _afterNew() {
    super._afterNew(), this._display.isMeasured = !0, this.setPrivateRaw("trustBounds", !0);
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = !0);
  }
  _changed() {
    super._changed(), this._clear && !this.get("draw") && this._draw();
  }
  _draw() {
    this._display.drawRect(0, 0, this.width(), this.height());
  }
  _updateSize() {
    this.markDirty(), this._clear = !0;
  }
}
function j(s, t) {
  s.get("reverseChildren", !1) ? s.children.eachReverse(t) : s.children.each(t);
}
Object.defineProperty(Y, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Rectangle" }), Object.defineProperty(Y, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: G.classNames.concat([Y.className]) });
class E extends A {
}
Object.defineProperty(E, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Layout" }), Object.defineProperty(E, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: A.classNames.concat([E.className]) });
class X extends E {
  updateContainer(t) {
    let e = t.get("paddingLeft", 0), i = t.innerWidth(), r = 0;
    j(t, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("width");
        if (o instanceof f) {
          r += o.value;
          let h = i * o.value, l = a.get("minWidth", a.getPrivate("minWidth", -1 / 0));
          l > h && (i -= l, r -= o.value);
          let d = a.get("maxWidth", a.getPrivate("maxWidth", 1 / 0));
          h > d && (i -= d, r -= o.value);
        } else g(o) || (o = a.width()), i -= o + a.get("marginLeft", 0) + a.get("marginRight", 0);
      }
    }), (i <= 0 || i == 1 / 0) && (i = 0.1), j(t, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("width");
        if (o instanceof f) {
          let h = i * o.value / r - a.get("marginLeft", 0) - a.get("marginRight", 0), l = a.get("minWidth", a.getPrivate("minWidth", -1 / 0)), d = a.get("maxWidth", a.getPrivate("maxWidth", 1 / 0));
          h = Math.min(Math.max(l, h), d), a.setPrivate("width", h);
        } else a._prevSettings.width instanceof f && a.setPrivate("width", void 0);
      }
    });
    let n = e;
    j(t, (a) => {
      if (a.get("position") == "relative") if (a.isVisible()) {
        let o = a.adjustedLocalBounds(), h = a.get("marginLeft", 0), l = a.get("marginRight", 0), d = a.get("maxWidth"), p = o.left, u = o.right;
        d && u - p > d && (u = p + d);
        let c = n + h - p;
        a.setPrivate("x", c), n = c + u + l;
      } else a.setPrivate("x", void 0);
    });
  }
}
Object.defineProperty(X, "className", { enumerable: !0, configurable: !0, writable: !0, value: "HorizontalLayout" }), Object.defineProperty(X, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: E.classNames.concat([X.className]) });
class $ extends E {
  updateContainer(t) {
    let e = t.get("paddingTop", 0), i = t.innerHeight(), r = 0;
    j(t, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("height");
        if (o instanceof f) {
          r += o.value;
          let h = i * o.value, l = a.get("minHeight", a.getPrivate("minHeight", -1 / 0));
          l > h && (i -= l, r -= o.value);
          let d = a.get("maxHeight", a.getPrivate("maxHeight", 1 / 0));
          h > d && (i -= d, r -= o.value);
        } else g(o) || (o = a.height()), i -= o + a.get("marginTop", 0) + a.get("marginBottom", 0);
      }
    }), (i <= 0 || i == 1 / 0) && (i = 0.1), j(t, (a) => {
      if (a.isVisible() && a.get("position") == "relative") {
        let o = a.get("height");
        if (o instanceof f) {
          let h = i * o.value / r - a.get("marginTop", 0) - a.get("marginBottom", 0), l = a.get("minHeight", a.getPrivate("minHeight", -1 / 0)), d = a.get("maxHeight", a.getPrivate("maxHeight", 1 / 0));
          h = Math.min(Math.max(l, h), d), a.setPrivate("height", h);
        } else a._prevSettings.height instanceof f && a.setPrivate("height", void 0);
      }
    });
    let n = e;
    j(t, (a) => {
      if (a.get("position") == "relative") if (a.isVisible()) {
        let o = a.adjustedLocalBounds(), h = a.get("marginTop", 0), l = o.top, d = o.bottom, p = a.get("maxHeight");
        p && d - l > p && (d = l + p);
        let u = a.get("marginBottom", 0), c = n + h - l;
        a.setPrivate("y", c), n = c + d + u;
      } else a.setPrivate("y", void 0);
    });
  }
}
Object.defineProperty($, "className", { enumerable: !0, configurable: !0, writable: !0, value: "VerticalLayout" }), Object.defineProperty($, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: E.classNames.concat([$.className]) });
class Z extends E {
  _afterNew() {
    this._setRawDefault("maxColumns", Number.MAX_VALUE), super._afterNew();
  }
  updateContainer(t) {
    let e = t.get("paddingLeft", 0), i = t.get("paddingRight", 0), r = t.get("paddingTop", 0), n = t.maxWidth() - e - i, a = n, o = 1;
    j(t, (m) => {
      if (m.get("visible") && m.getPrivate("visible") && !m.get("forceHidden") && m.get("position") != "absolute") {
        let b = m.width();
        b < a && (a = b), b > o && (o = b);
      }
    }), a = Lt(a, 1, n), o = Lt(o, 1, n);
    let h = 1;
    h = this.get("fixedWidthGrid") ? n / o : n / a, h = Math.max(1, Math.floor(h)), h = Math.min(this.get("maxColumns", Number.MAX_VALUE), h);
    let l = this.getColumnWidths(t, h, o, n), d = r, p = 0, u = 0;
    h = l.length;
    let c = e;
    j(t, (m) => {
      if (m.get("position") == "relative" && m.isVisible()) {
        const b = m.get("marginTop", 0), S = m.get("marginBottom", 0);
        let H = m.adjustedLocalBounds(), w = m.get("marginLeft", 0), C = m.get("marginRight", 0), x = c + w - H.left, N = d + b - H.top;
        m.setPrivate("x", x), m.setPrivate("y", N), c += l[p] + C, u = Math.max(u, m.height() + b + S), p++, p >= h && (p = 0, c = e, d += u);
      }
    });
  }
  getColumnWidths(t, e, i, r) {
    let n = 0, a = [], o = 0;
    return j(t, (h) => {
      let l = h.adjustedLocalBounds();
      h.get("position") != "absolute" && h.isVisible() && (this.get("fixedWidthGrid") ? a[o] = i : a[o] = Math.max(0 | a[o], l.right - l.left + h.get("marginLeft", 0) + h.get("marginRight", 0)), o < t.children.length - 1 && (o++, o == e && (o = 0)));
    }), _(a, (h) => {
      n += h;
    }), n > r ? e > 2 ? (e -= 1, this.getColumnWidths(t, e, i, r)) : [r] : a;
  }
}
Object.defineProperty(Z, "className", { enumerable: !0, configurable: !0, writable: !0, value: "GridLayout" }), Object.defineProperty(Z, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: E.classNames.concat([Z.className]) });
class Dt {
  static escape(t) {
    return t.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5");
  }
  static unescape(t) {
    return t.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''");
  }
  static cleanUp(t) {
    return t.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'");
  }
  static chunk(t, e = !1, i = !1) {
    let r = [];
    t = this.escape(t);
    let n = e ? t.split("'") : [t];
    for (let a = 0; a < n.length; a++) {
      let o = n[a];
      if (o !== "") if (a % 2 == 0) {
        o = o.replace(/\]\[/g, "]" + Et + "["), o = o.replace(/\[\]/g, "[ ]");
        let h = o.split(/[\[\]]+/);
        for (let l = 0; l < h.length; l++) {
          let d = this.cleanUp(this.unescape(h[l]));
          d !== Et && d !== "" && (l % 2 == 0 ? r.push({ type: "value", text: d }) : r.push({ type: i ? "value" : "format", text: "[" + d + "]" }));
        }
      } else {
        let h = o.split(/[\[\]]+/);
        for (let l = 0; l < h.length; l++) {
          let d = this.cleanUp(this.unescape(h[l]));
          d !== "" && (l % 2 == 0 ? r.push({ type: "text", text: d }) : this.isImage(d) ? r.push({ type: "image", text: "[" + d + "]" }) : r.push({ type: "format", text: "[" + d + "]" }));
        }
      }
    }
    return r;
  }
  static isImage(t) {
    return !!t.match(/img[ ]?:/);
  }
  static getTextStyle(t) {
    let e = {};
    if (t == "" || t == "[ ]") return {};
    const i = t.match(/('[^']*')|("[^"]*")/gi);
    if (i) for (let n = 0; n < i.length; n++) t = t.replace(i[n], i[n].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
    let r = t.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
    if (!r) return {};
    for (let n = 0; n < r.length; n++) if (r[n].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i)) e.fontWeight = r[n];
    else if (r[n].match(/^(underline|line-through)$/i)) e.textDecoration = r[n];
    else if (r[n] != "/") if (r[n].match(/:/)) {
      const a = r[n].replace("+", " ").split(/:[ ]*/);
      e[a[0]] = a[1];
    } else e.fill = v.fromString(r[n]);
    return e;
  }
}
function rt(s, t) {
  if (t != null) {
    t = "" + t;
    let e, i = (t = Dt.escape(t)).match(/\{([^}]+)\}/g);
    if (i) for (e = 0; e < i.length; e++) {
      let r = xt(s, i[e].replace(/\{([^}]+)\}/, "$1"));
      r == null && (r = ""), t = t.split(i[e]).join(r);
    }
    t = Dt.unescape(t);
  } else t = "";
  return t;
}
function xt(s, t, e) {
  let i;
  const r = s.dataItem;
  let n, a = [], o = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
  for (; n = o.exec(t), n !== null; ) if (n[3]) {
    a.push({ prop: n[3] });
    const h = s.getDateFormatter().get("dateFields", []), l = s.getNumberFormatter().get("numericFields", []), d = s.getDurationFormatter().get("durationFields", []);
    h.indexOf(n[3]) !== -1 ? a.push({ method: "formatDate", params: [] }) : l.indexOf(n[3]) !== -1 ? a.push({ method: "formatNumber", params: [] }) : d.indexOf(n[3]) !== -1 && a.push({ method: "formatDuration", params: [] });
  } else {
    let h = [];
    if (vt(n[2]) != "") {
      let l, d = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
      for (; l = d.exec(n[2]), l !== null; ) h.push(l[1] || l[2] || l[3]);
    }
    a.push({ method: n[1], params: h });
  }
  if (r) {
    i = L(s, a, r._settings), (i == null || Rt(i)) && (i = L(s, a, r));
    let h = r.dataContext;
    i == null && h && (i = L(s, a, h), i == null && (i = L(s, [{ prop: t }], h)), i == null && h.dataContext && (i = L(s, a, h.dataContext))), i == null && r.component && r.component.dataItem !== r && (i = xt(r.component, t));
  }
  return i == null && (i = L(s, a, s)), i == null && s.parent && (i = xt(s.parent, t)), i;
}
function Ne(s, t) {
  const e = s.getPrivate("customData");
  if (Rt(e)) return e[t];
}
function L(s, t, e, i) {
  let r = e, n = !1;
  for (let a = 0, o = t.length; a < o; a++) {
    let h = t[a];
    if (h.prop) {
      if (r instanceof k) {
        let l = r.get(h.prop);
        l == null && (l = r.getPrivate(h.prop)), l == null && (l = Ne(r, h.prop)), l == null && (l = r[h.prop]), r = l;
      } else if (r.get) {
        let l = r.get(h.prop);
        l == null && (l = r[h.prop]), r = l;
      } else r = r[h.prop];
      if (r == null) return;
    } else switch (h.method) {
      case "formatNumber":
        let l = mt(r);
        l != null && (r = s.getNumberFormatter().format(l, h.params[0] || void 0), n = !0);
        break;
      case "formatDate":
        let d = te(r);
        if (!ft(d) || Ot(d.getTime())) return;
        d != null && (r = s.getDateFormatter().format(d, h.params[0] || void 0), n = !0);
        break;
      case "formatDuration":
        let p = mt(r);
        p != null && (r = s.getDurationFormatter().format(p, h.params[0] || void 0, h.params[1] || void 0), n = !0);
        break;
      case "urlEncode":
      case "encodeURIComponent":
        r = encodeURIComponent(r);
        break;
      default:
        r[h.method] && r[h.method].apply(e, h.params);
    }
  }
  if (!n) {
    let a = [{ method: "", params: i }];
    g(r) ? (a[0].method = "formatNumber", a[0].params = "") : ft(r) && (a[0].method = "formatDate", a[0].params = ""), a[0].method && (r = L(s, a, r));
  }
  return r;
}
Object.defineProperty(Dt, "prefix", { enumerable: !0, configurable: !0, writable: !0, value: "__amcharts__" });
class I extends k {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "_childrenDisplay", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "children", { enumerable: !0, configurable: !0, writable: !0, value: new Oe(this) }), Object.defineProperty(this, "_percentageSizeChildren", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_percentagePositionChildren", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_prevWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_prevHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentMask", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_vsbd0", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_vsbd1", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    super._afterNew(), this._display.addChild(this._childrenDisplay);
  }
  _dispose() {
    U(this.allChildren(), (t) => {
      t.dispose();
    }), this.getPrivate("htmlElement") && this._root._removeHTMLContent(this), super._dispose();
  }
  _changed() {
    if (super._changed(), this.isDirty("interactiveChildren") && (this._display.interactiveChildren = this.get("interactiveChildren", !1)), this.isDirty("layout") && (this._prevWidth = 0, this._prevHeight = 0, this.markDirtyBounds(), this._prevSettings.layout && this.children.each((t) => {
      t.removePrivate("x"), t.removePrivate("y");
    })), (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) && this.children.each((t) => {
      t.markDirtyPosition();
    }), this.isDirty("maskContent")) {
      const t = this._childrenDisplay;
      let e = this._contentMask;
      this.get("maskContent") ? e || (e = Y.new(this._root, { x: -0.5, y: -0.5, width: this.width() + 1, height: this.height() + 1 }), this._contentMask = e, t.addChildAt(e._display, 0), t.mask = e._display) : e && (t.removeChild(e._display), t.mask = null, e.dispose(), this._contentMask = void 0);
    }
  }
  _updateSize() {
    super._updateSize(), _(this._percentageSizeChildren, (t) => {
      t._updateSize();
    }), _(this._percentagePositionChildren, (t) => {
      t.markDirtyPosition(), t._updateSize();
    }), this.updateBackground();
  }
  updateBackground() {
    const t = this.get("background");
    let e = this._localBounds;
    if (e && !this.isHidden()) {
      let i = e.left, r = e.top, n = e.right - i, a = e.bottom - r, o = this.get("maxWidth"), h = this.get("maxHeight");
      h && a > h && (a = h), o && n > o && (n = o);
      let l = this.width(), d = this.height();
      t && (t.setAll({ width: n, height: a, x: i, y: r }), this._display.interactive && (t._display.interactive = !0));
      const p = this._contentMask;
      p && p.setAll({ width: l + 1, height: d + 1 });
      const u = this.get("verticalScrollbar");
      if (u) {
        u.set("height", d), u.set("x", l - u.width() - u.get("marginRight", 0)), u.set("end", u.get("start", 0) + d / this._contentHeight);
        const c = u.get("background");
        c && c.setAll({ width: u.width(), height: d });
        let m = !0;
        this._contentHeight <= d && (m = !1), u.setPrivate("visible", m);
      }
    }
  }
  _applyThemes(t = !1) {
    return !!super._applyThemes(t) && (this.eachChildren((e) => {
      e._applyThemes(t);
    }), !0);
  }
  _applyState(t) {
    super._applyState(t), this.get("setStateOnChildren") && this.eachChildren((e) => {
      e.states.apply(t);
    });
  }
  _applyStateAnimated(t, e) {
    super._applyStateAnimated(t, e), this.get("setStateOnChildren") && this.eachChildren((i) => {
      i.states.applyAnimate(t, e);
    });
  }
  innerWidth() {
    return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0);
  }
  innerHeight() {
    return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0);
  }
  _getBounds() {
    let t = this.get("width"), e = this.get("height"), i = this.getPrivate("width"), r = this.getPrivate("height"), n = { left: 0, top: 0, right: this.width(), bottom: this.height() }, a = this.get("layout"), o = !1, h = !1;
    if ((a instanceof X || a instanceof Z) && (o = !0), a instanceof $ && (h = !0), t == null && i == null || e == null && r == null || this.get("verticalScrollbar")) {
      let l = Number.MAX_VALUE, d = l, p = -l, u = l, c = -l;
      const m = this.get("paddingLeft", 0), b = this.get("paddingTop", 0), S = this.get("paddingRight", 0), H = this.get("paddingBottom", 0);
      this.children.each((x) => {
        if (x.get("position") != "absolute" && x.get("isMeasured")) {
          let N = x.adjustedLocalBounds(), Tt = x.x(), St = x.y(), at = Tt + N.left, ot = Tt + N.right, ht = St + N.top, lt = St + N.bottom;
          o && (at -= x.get("marginLeft", 0), ot += x.get("marginRight", 0)), h && (ht -= x.get("marginTop", 0), lt += x.get("marginBottom", 0)), at < d && (d = at), ot > p && (p = ot), ht < u && (u = ht), lt > c && (c = lt);
        }
      }), d == l && (d = 0), p == -l && (p = 0), u == l && (u = 0), c == -l && (c = 0), n.left = d - m, n.top = u - b, n.right = p + S, n.bottom = c + H;
      const w = this.get("minWidth");
      g(w) && w > 0 && n.right - n.left < w && (n.right >= w ? n.left = n.right - w : n.right = n.left + w);
      const C = this.get("minHeight");
      g(C) && C > 0 && n.bottom - n.top < C && (n.bottom >= C ? n.top = n.bottom - C : n.bottom = n.top + C);
    }
    this._contentWidth = n.right - n.left, this._contentHeight = n.bottom - n.top, g(t) && (n.left = 0, n.right = t), g(i) && (n.left = 0, n.right = i), g(e) && (n.top = 0, n.bottom = e), g(r) && (n.top = 0, n.bottom = r), this._localBounds = n;
  }
  _updateBounds() {
    const t = this.get("layout");
    t && t.updateContainer(this), super._updateBounds(), this.updateBackground();
  }
  markDirty() {
    super.markDirty(), this._root._addDirtyParent(this);
  }
  _prepareChildren() {
    const t = this.innerWidth(), e = this.innerHeight();
    if (t != this._prevWidth || e != this._prevHeight) {
      let i = this.get("layout"), r = !1, n = !1;
      i && ((i instanceof X || i instanceof Z) && (r = !0), i instanceof $ && (n = !0)), _(this._percentageSizeChildren, (a) => {
        if (!r) {
          let o = a.get("width");
          o instanceof f && a.setPrivate("width", o.value * t);
        }
        if (!n) {
          let o = a.get("height");
          o instanceof f && a.setPrivate("height", o.value * e);
        }
      }), _(this._percentagePositionChildren, (a) => {
        a.markDirtyPosition(), a.markDirtyBounds();
      }), this._prevWidth = t, this._prevHeight = e, this._sizeDirty = !0, this.updateBackground();
    }
    this._handleStates();
  }
  _updateHTMLContent() {
    const t = this.get("html");
    t && t !== "" ? this._root._setHTMLContent(this, rt(this, this.get("html", ""))) : this._root._removeHTMLContent(this), this._root._positionHTMLElement(this);
  }
  _updateChildren() {
    if (this.isDirty("html") && this._updateHTMLContent(), this.isDirty("verticalScrollbar")) {
      const t = this.get("verticalScrollbar");
      if (t) {
        t._setParent(this), t.startGrip.setPrivate("visible", !1), t.endGrip.setPrivate("visible", !1), this.set("maskContent", !0), this.set("paddingRight", t.width() + t.get("marginRight", 0) + t.get("marginLeft", 0));
        let e = this.get("background");
        e || (e = this.set("background", Y.new(this._root, { themeTags: ["background"], fillOpacity: 0, fill: this._root.interfaceColors.get("alternativeBackground") }))), this._vsbd0 = this.events.on("wheel", (i) => {
          const r = i.originalEvent;
          if (!ue(r, this)) return;
          r.preventDefault();
          let n = r.deltaY / 5e3;
          const a = t.get("start", 0), o = t.get("end", 1);
          a + n <= 0 && (n = -a), o + n >= 1 && (n = 1 - o), a + n >= 0 && o + n <= 1 && (t.set("start", a + n), t.set("end", o + n));
        }), this._disposers.push(this._vsbd0), this._vsbd1 = t.events.on("rangechanged", () => {
          let i = this._contentHeight;
          const r = this._childrenDisplay, n = this._contentMask;
          r.y = -t.get("start", 0) * i, r.markDirtyLayer(), n && (n._display.y = -r.y, r.mask = n._display);
        }), this._disposers.push(this._vsbd1), this._display.addChild(t._display);
      } else {
        const e = this._prevSettings.verticalScrollbar;
        e && (this._display.removeChild(e._display), this._vsbd0 && this._vsbd0.dispose(), this._vsbd1 && this._vsbd1.dispose(), this._childrenDisplay.y = 0, this.setPrivate("height", void 0), this.set("maskContent", !1), this.set("paddingRight", void 0));
      }
    }
    if (this.isDirty("background")) {
      const t = this._prevSettings.background;
      t && this._display.removeChild(t._display);
      const e = this.get("background");
      e instanceof k && (e.set("isMeasured", !1), e._setParent(this), this._display.addChildAt(e._display, 0));
    }
    if (this.isDirty("mask")) {
      const t = this.get("mask"), e = this._prevSettings.mask;
      if (e && (this._display.removeChild(e._display), e != t && e.dispose()), t) {
        const i = t.parent;
        i && i.children.removeValue(t), t._setParent(this), this._display.addChildAt(t._display, 0), this._childrenDisplay.mask = t._display;
      }
    }
  }
  _processTemplateField() {
    super._processTemplateField(), this.children.each((t) => {
      t._processTemplateField();
    });
  }
  walkChildren(t) {
    this.children.each((e) => {
      e instanceof I && e.walkChildren(t), t(e);
    });
  }
  eachChildren(t) {
    const e = this.get("background");
    e && t(e);
    const i = this.get("verticalScrollbar");
    i && t(i);
    const r = this.get("mask");
    r && t(r), this.children.values.forEach((n) => {
      t(n);
    });
  }
  allChildren() {
    const t = [];
    return this.eachChildren((e) => {
      t.push(e);
    }), t;
  }
  _setDataItem(t) {
    const e = t !== this._dataItem;
    super._setDataItem(t);
    const i = this.get("html", "");
    i && i !== "" && e && this._root._setHTMLContent(this, rt(this, i));
  }
}
Object.defineProperty(I, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Container" }), Object.defineProperty(I, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: k.classNames.concat([I.className]) });
class it extends k {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textStyle", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeTextStyle() }), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeText("", this.textStyle) }), Object.defineProperty(this, "_textStyles", { enumerable: !0, configurable: !0, writable: !0, value: ["textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "maxChars"] }), Object.defineProperty(this, "_originalScale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _updateBounds() {
    if (this.get("text")) super._updateBounds();
    else {
      let t = { left: 0, right: 0, top: 0, bottom: 0 };
      this._adjustedLocalBounds = t;
    }
  }
  _changed() {
    super._changed(), this._display.clear();
    let t = this.textStyle;
    if (this.isDirty("opacity")) {
      let e = this.get("opacity", 1);
      this._display.alpha = e;
    }
    if ((this.isDirty("text") || this.isDirty("populateText")) && (this._display.text = this._getText(), this.markDirtyBounds(), this.get("role") == "tooltip" && this._root.updateTooltip(this)), this.isPrivateDirty("tooltipElement") && this.getPrivate("tooltipElement") && this._disposers.push(new D(() => {
      this._root._removeTooltipElement(this);
    })), this.isDirty("width") && (t.wordWrapWidth = this.width(), this.markDirtyBounds()), this.isDirty("oversizedBehavior") && (t.oversizedBehavior = this.get("oversizedBehavior", "none"), this.markDirtyBounds()), this.isDirty("breakWords") && (t.breakWords = this.get("breakWords", !1), this.markDirtyBounds()), this.isDirty("ellipsis") && (t.ellipsis = this.get("ellipsis"), this.markDirtyBounds()), this.isDirty("ignoreFormatting") && (t.ignoreFormatting = this.get("ignoreFormatting", !1), this.markDirtyBounds()), this.isDirty("minScale") && (t.minScale = this.get("minScale", 0), this.markDirtyBounds()), this.isDirty("fill")) {
      let e = this.get("fill");
      e && (t.fill = e);
    }
    if (this.isDirty("fillOpacity")) {
      let e = this.get("fillOpacity", 1);
      e && (t.fillOpacity = e);
    }
    (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) && (t.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth")), this.markDirtyBounds()), (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) && (t.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight")), this.markDirtyBounds()), _(this._textStyles, (e) => {
      this._dirty[e] && (t[e] = this.get(e), this.markDirtyBounds());
    }), t.fontSize = this.get("fontSize"), t.fontFamily = this.get("fontFamily"), this._display.style = t, this.isDirty("role") && this.get("role") == "tooltip" && this._root.updateTooltip(this);
  }
  _getText() {
    let t = this.get("text", "");
    return this.get("maxChars") && (t = _e(t, this.get("maxChars", 1e8), this.get("breakWords"), this.get("ellipsis"))), this.get("populateText") ? rt(this, t) : t;
  }
  _getAccessibleText() {
    const t = this.get("ariaLabel");
    return t !== void 0 ? this.get("populateText") ? rt(this, t) : t : this._getText();
  }
  markDirtyText() {
    this._display.text = this._getText(), this.get("role") == "tooltip" && this._root.updateTooltip(this), this.markDirtyBounds(), this.markDirty();
  }
  _setDataItem(t) {
    super._setDataItem(t), this.get("populateText") && this.markDirtyText();
  }
  getNumberFormatter() {
    return this.parent ? this.parent.getNumberFormatter() : super.getNumberFormatter();
  }
  getDateFormatter() {
    return this.parent ? this.parent.getDateFormatter() : super.getDateFormatter();
  }
  getDurationFormatter() {
    return this.parent ? this.parent.getDurationFormatter() : super.getDurationFormatter();
  }
}
Object.defineProperty(it, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Text" }), Object.defineProperty(it, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: k.classNames.concat([it.className]) });
class _t extends I {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_text", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_textKeys", { enumerable: !0, configurable: !0, writable: !0, value: ["text", "fill", "fillOpacity", "textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "populateText", "role", "ignoreFormatting", "maxChars", "ariaLabel"] });
  }
  get text() {
    return this._text;
  }
  _afterNew() {
    super._afterNew(), this._makeText(), _(this._textKeys, (t) => {
      const e = this.get(t);
      e != null && this._text.set(t, e);
    }), this.get("html", "") !== "" && this._text.set("text", ""), this.onPrivate("maxWidth", () => {
      this._setMaxDimentions();
    }), this.onPrivate("maxHeight", () => {
      this._setMaxDimentions();
    });
  }
  _makeText() {
    this._text = this.children.push(it.new(this._root, {}));
  }
  _updateChildren() {
    super._updateChildren();
    const t = this._text;
    if (_(this._textKeys, (i) => {
      this._text.set(i, this.get(i));
    }), (this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isDirty("rotation")) && this._setMaxDimentions(), this.get("html", "") !== "" ? t.set("text", "") : (t.set("text", this.get("text")), this._maybeUpdateHTMLColor()), this.isDirty("fill") && this._maybeUpdateHTMLColor(), this.isDirty("textAlign") || this.isDirty("width")) {
      const i = this.get("textAlign");
      let r;
      this.get("width") != null ? r = i == "right" ? Jt : i == "center" ? qt : 0 : i == "left" || i == "start" ? r = this.get("paddingLeft", 0) : i != "right" && i != "end" || (r = -this.get("paddingRight", 0)), t.set("x", r);
    }
    const e = this.get("background");
    e && e.setPrivate("visible", t._display.textVisible);
  }
  _maybeUpdateHTMLColor() {
    const t = this.getPrivate("htmlElement");
    t && this.get("fill") && (t.style.color = this.get("fill").toCSSHex());
  }
  _setMaxDimentions() {
    const t = this.get("rotation"), e = t == 90 || t == 270 || t == -90, i = this._text, r = this.get("maxWidth", this.getPrivate("maxWidth", 1 / 0));
    g(r) ? i.set(e ? "maxHeight" : "maxWidth", r - this.get("paddingLeft", 0) - this.get("paddingRight", 0)) : i.set(e ? "maxHeight" : "maxWidth", void 0);
    const n = this.get("maxHeight", this.getPrivate("maxHeight", 1 / 0));
    g(n) ? i.set(e ? "maxWidth" : "maxHeight", n - this.get("paddingTop", 0) - this.get("paddingBottom", 0)) : i.set(e ? "maxWidth" : "maxHeight", void 0), this.root.events.once("frameended", () => {
      i.markDirtyBounds();
    });
  }
  _setDataItem(t) {
    super._setDataItem(t), this._markDirtyKey("text");
    const e = this._text;
    e.get("populateText") && e.markDirtyText();
    const i = this.get("html");
    i && i !== "" && this._updateHTMLContent();
  }
  getText() {
    return this._text._getText();
  }
  getAccessibleText() {
    return this._text._getAccessibleText();
  }
}
Object.defineProperty(_t, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Label" }), Object.defineProperty(_t, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: I.classNames.concat([_t.className]) });
class Hi {
  constructor(t, e) {
    if (Object.defineProperty(this, "_root", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rules", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._root = t, !e) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
  }
  static new(t) {
    const e = new this(t, !0);
    return e.setupDefaultRules(), e;
  }
  setupDefaultRules() {
  }
  _lookupRules(t) {
    return this._rules[t];
  }
  ruleRaw(t, e = []) {
    let i = this._rules[t];
    i || (i = this._rules[t] = []), e.sort(F);
    const { index: r, found: n } = ne(i, (a) => {
      const o = F(a.tags.length, e.length);
      return o === 0 ? Zt(a.tags, e, F) : o;
    });
    if (n) return i[r].template;
    {
      const a = J.new({});
      return i.splice(r, 0, { tags: e, template: a }), a;
    }
  }
  rule(t, e = []) {
    return this.ruleRaw(t, e);
  }
}
export {
  X as $,
  Dt as A,
  A as B,
  Fe as C,
  Ve as D,
  g as E,
  Ye as F,
  Y as G,
  bi as H,
  Ge as I,
  Z as J,
  ct as K,
  fi as L,
  mi as M,
  T as N,
  Ci as O,
  pi as P,
  rt as Q,
  gi as R,
  Bt as S,
  F as T,
  ci as U,
  _i as V,
  y as W,
  mt as X,
  q as Y,
  $ as Z,
  Rt as _,
  G as a,
  di as a0,
  Xe as a1,
  Ue as a2,
  $e as a3,
  st as a4,
  v as a5,
  ei as a6,
  le as a7,
  O as a8,
  ti as a9,
  Ai as aA,
  Ae as aB,
  Yt as aC,
  se as aD,
  Pe as aE,
  ke as aF,
  ue as aG,
  Ke as aH,
  Mi as aI,
  ki as aJ,
  Mt as aK,
  oi as aL,
  wi as aM,
  Ot as aN,
  vi as aO,
  Oi as aP,
  si as aa,
  V as ab,
  ze as ac,
  Pt as ad,
  vt as ae,
  f as af,
  Ti as ag,
  ui as ah,
  ii as ai,
  Ut as aj,
  Si as ak,
  xi as al,
  yi as am,
  _t as an,
  Lt as ao,
  Hi as ap,
  Ei as aq,
  qt as ar,
  Se as as,
  M as at,
  ji as au,
  Di as av,
  J as aw,
  wt as ax,
  yt as ay,
  $t as az,
  Vt as b,
  D as c,
  ni as d,
  Qe as e,
  P as f,
  Ze as g,
  li as h,
  kt as i,
  Ct as j,
  R as k,
  ri as l,
  Nt as m,
  it as n,
  Je as o,
  ai as p,
  ut as q,
  Jt as r,
  I as s,
  qe as t,
  Et as u,
  We as v,
  _ as w,
  Ft as x,
  hi as y,
  Pi as z
};
//# sourceMappingURL=Theme-D_J4o8Z6.js.map
