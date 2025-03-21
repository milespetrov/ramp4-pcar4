import { b3 as lt } from "./main-Bnvk3STL.js";
import { B as ee, O as ht, Y as ut, Z as ct, $ as dt, J as bt, p as ft, w as y, k as te, s as q, i as Ke, r as Z, G as gt, z as ie, a as Fe, l as J, q as pe, b as C, d as ce, t as mt, e as pt, I as ye, N as re, T as _t, c as $, f as Be, g as yt, x as se, h as Ye, j as Ee, Q as vt, D as Ce, W as he, m as _e, n as wt, o as Qe, _ as et, y as De, F as xt, u as Q, v as K, A as W, C as Pt, E as H, H as Ot, K as T, L as de, M as be, P as Ie, R as kt, S as He, U as Mt, V as St, X as R, a0 as Re, a1 as jt, a2 as Et, a3 as Tt, a4 as Bt, a5 as G, a6 as fe, a7 as Ct, a8 as Ue, a9 as Te, aa as tt, ab as We, ac as Dt, ad as At, ae as Pe, af as it, ag as Lt, ah as zt, ai as Ft, aj as Yt, ak as It, al as oe } from "./Theme-D_J4o8Z6.js";
import { u as Ve } from "./Tooltip-bDjrfC_L.js";
import { s as Ht } from "./DefaultTheme-BuphiVCv.js";
class Rt {
  constructor() {
    Object.defineProperty(this, "_observer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_targets", { enumerable: !0, configurable: !0, writable: !0, value: [] }), this._observer = new ResizeObserver((e) => {
      y(e, (t) => {
        y(this._targets, (i) => {
          i.target === t.target && i.callback();
        });
      });
    });
  }
  addTarget(e, t) {
    this._observer.observe(e, { box: "border-box" }), this._targets.push({ target: e, callback: t });
  }
  removeTarget(e) {
    this._observer.unobserve(e), ye(this._targets, (t) => t.target !== e);
  }
}
class ve {
  constructor() {
    Object.defineProperty(this, "_timer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_targets", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  addTarget(e, t) {
    if (this._timer === null) {
      let r = null;
      const s = () => {
        const a = Date.now();
        (r === null || a > r + ve.delay) && (r = a, y(this._targets, (n) => {
          let l = n.target.getBoundingClientRect();
          l.width === n.size.width && l.height === n.size.height || (n.size = l, n.callback());
        })), this._targets.length === 0 ? this._timer = null : this._timer = requestAnimationFrame(s);
      };
      this._timer = requestAnimationFrame(s);
    }
    let i = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    this._targets.push({ target: e, callback: t, size: i });
  }
  removeTarget(e) {
    ye(this._targets, (t) => t.target !== e), this._targets.length === 0 && this._timer !== null && (cancelAnimationFrame(this._timer), this._timer = null);
  }
}
Object.defineProperty(ve, "delay", { enumerable: !0, configurable: !0, writable: !0, value: 200 });
let Oe = null;
function Ut() {
  return Oe === null && (Oe = typeof ResizeObserver < "u" ? new Rt() : new ve()), Oe;
}
class Wt {
  constructor(e, t) {
    Object.defineProperty(this, "_sensor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_element", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_listener", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), this._sensor = Ut(), this._element = e, this._listener = Qe(t), this._sensor.addTarget(e, t);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._sensor.removeTarget(this._element), this._listener.dispose());
  }
  get sensor() {
    return this._sensor;
  }
}
class me extends ee {
}
Object.defineProperty(me, "className", { enumerable: !0, configurable: !0, writable: !0, value: "InterfaceColors" }), Object.defineProperty(me, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: ee.classNames.concat([me.className]) });
class Vt extends ee {
  _setDefaults() {
    this._setDefault("negativeBase", 0), this._setDefault("numberFormat", "#,###.#####"), this._setDefault("smallNumberThreshold", 1);
    const e = "_big_number_suffix_", t = "_small_number_suffix_", i = "_byte_suffix_";
    this._setDefault("bigNumberPrefixes", [{ number: 1e3, suffix: this._t(e + "3") }, { number: 1e6, suffix: this._t(e + "6") }, { number: 1e9, suffix: this._t(e + "9") }, { number: 1e12, suffix: this._t(e + "12") }, { number: 1e15, suffix: this._t(e + "15") }, { number: 1e18, suffix: this._t(e + "18") }, { number: 1e21, suffix: this._t(e + "21") }, { number: 1e24, suffix: this._t(e + "24") }]), this._setDefault("smallNumberPrefixes", [{ number: 1e-24, suffix: this._t(t + "24") }, { number: 1e-21, suffix: this._t(t + "21") }, { number: 1e-18, suffix: this._t(t + "18") }, { number: 1e-15, suffix: this._t(t + "15") }, { number: 1e-12, suffix: this._t(t + "12") }, { number: 1e-9, suffix: this._t(t + "9") }, { number: 1e-6, suffix: this._t(t + "6") }, { number: 1e-3, suffix: this._t(t + "3") }]), this._setDefault("bytePrefixes", [{ number: 1, suffix: this._t(i + "B") }, { number: 1024, suffix: this._t(i + "KB") }, { number: 1048576, suffix: this._t(i + "MB") }, { number: 1073741824, suffix: this._t(i + "GB") }, { number: 1099511627776, suffix: this._t(i + "TB") }, { number: 1125899906842624, suffix: this._t(i + "PB") }]), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let r;
    (t == null || _e(t) && t.toLowerCase() === "number") && (t = this.get("numberFormat", ""));
    let s = Number(e);
    if (et(t)) try {
      return this.get("intlLocales") ? new Intl.NumberFormat(this.get("intlLocales"), t).format(s) : new Intl.NumberFormat(void 0, t).format(s);
    } catch {
      return "Invalid";
    }
    else {
      t = De(t);
      let a, n = this.parseFormat(t, this._root.language);
      a = s > this.get("negativeBase") ? n.positive : s < this.get("negativeBase") ? n.negative : n.zero, i == null || a.mod || (a = xt(a), a.decimals.active = s == 0 ? 0 : i), r = a.template.split(Q).join(this.applyFormat(s, a));
    }
    return this.get("forceLTR") === !0 && (r = "‎" + r), r;
  }
  parseFormat(e, t) {
    const i = t.translateEmpty("_thousandSeparator"), r = t.translateEmpty("_decimalSeparator");
    let s = { positive: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 }, negative: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 }, zero: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 } }, a = (e = e.replace("||", K)).split("|");
    return s.positive.source = a[0], a[2] === void 0 ? s.zero = s.positive : s.zero.source = a[2], a[1] === void 0 ? s.negative = s.positive : s.negative.source = a[1], he(s, (n, l) => {
      if (l.parsed) return;
      let d = l.source;
      d.toLowerCase() === "number" && (d = this.get("numberFormat", "#,###.#####"));
      let m = W.chunk(d, !0);
      for (let u = 0; u < m.length; u++) {
        let f = m[u];
        if (f.text = f.text.replace(K, "|"), f.type === "value") {
          let o = f.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
          if (o) if (o === null || o[0] === "") l.template += f.text;
          else {
            let p = o[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
            p && (l.mod = p[0].toLowerCase(), l.modSpacing = !!o[0].match(/[ ]{1}[abespABESP%‰!]{1}$/));
            let h = o[0].split(".");
            if (h[0] !== "") {
              l.thousands.active = (h[0].match(/0/g) || []).length, l.thousands.passive = (h[0].match(/\#/g) || []).length + l.thousands.active;
              let c = h[0].split(",");
              c.length === 1 || (l.thousands.interval = (c.pop() || "").length, l.thousands.interval === 0 && (l.thousands.interval = -1));
            }
            h[1] === void 0 || (l.decimals.active = (h[1].match(/0/g) || []).length, l.decimals.passive = (h[1].match(/\#/g) || []).length + l.decimals.active), l.template += f.text.split(o[0]).join(Q);
          }
        } else l.template += f.text;
      }
      l.parsed = !0;
    }), s;
  }
  applyFormat(e, t) {
    let i = e < 0;
    e = Math.abs(e);
    let r = "", s = "", a = t.mod ? t.mod.split("") : [];
    if (a.indexOf("b") !== -1) {
      let u = this.applyPrefix(e, this.get("bytePrefixes"), a.indexOf("!") !== -1);
      e = u[0], r = u[1], s = u[2], t.modSpacing && (s = " " + s);
    } else if (a.indexOf("a") !== -1) {
      let u = this.applyPrefix(e, e < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), a.indexOf("!") !== -1);
      e = u[0], r = u[1], s = u[2], t.modSpacing && (s = " " + s);
    } else if (a.indexOf("p") !== -1) {
      let u = Math.min(e.toString().length + 2, 21);
      e = parseFloat(e.toPrecision(u)), r = this._root.language.translate("_percentPrefix"), s = this._root.language.translate("_percentSuffix"), r == "" && s == "" && (s = "%");
    } else if (a.indexOf("%") !== -1) {
      let u = Math.min(e.toString().length + 2, 21);
      e *= 100, e = parseFloat(e.toPrecision(u)), s = "%";
    } else if (a.indexOf("‰") !== -1) {
      let u = Math.min(e.toString().length + 3, 21);
      e *= 1e3, e = parseFloat(e.toPrecision(u)), s = "‰";
    }
    if (a.indexOf("e") !== -1) {
      let u;
      u = t.decimals.passive >= 0 ? e.toExponential(t.decimals.passive).split("e") : e.toExponential().split("e"), e = Number(u[0]), s = "e" + u[1], t.modSpacing && (s = " " + s);
    } else if (t.decimals.passive === 0) e = Math.round(e);
    else if (t.decimals.passive > 0) {
      let u = Math.pow(10, t.decimals.passive);
      e = Math.round(e * u) / u;
    }
    let n = "", l = Pt(e).split("."), d = l[0];
    if (d.length < t.thousands.active && (d = Array(t.thousands.active - d.length + 1).join("0") + d), t.thousands.interval > 0) {
      let u = [], f = d.split("").reverse().join("");
      for (let o = 0, p = d.length; o <= p; o += t.thousands.interval) {
        let h = f.substr(o, t.thousands.interval).split("").reverse().join("");
        h !== "" && u.unshift(h);
      }
      d = u.join(t.thousands.separator);
    }
    n += d, l.length === 1 && l.push("");
    let m = l[1];
    return m.length < t.decimals.active && (m += Array(t.decimals.active - m.length + 1).join("0")), m !== "" && (n += t.decimals.separator + m), n === "" && (n = "0"), e !== 0 && i && a.indexOf("s") === -1 && (n = "-" + n), r && (n = r + n), s && (n += s), n;
  }
  applyPrefix(e, t, i = !1) {
    let r = e, s = "", a = "", n = !1, l = 1;
    for (let d = 0, m = t.length; d < m; d++) t[d].number <= e && (t[d].number === 0 ? r = 0 : (r = e / t[d].number, l = t[d].number), s = t[d].prefix, a = t[d].suffix, n = !0);
    return !n && i && t.length && e != 0 && (r = e / t[0].number, s = t[0].prefix, a = t[0].suffix, n = !0), n && (r = parseFloat(r.toPrecision(Math.min(l.toString().length + Math.floor(r).toString().replace(/[^0-9]*/g, "").length, 21)))), [r, s, a];
  }
  escape(e) {
    return e.replace("||", K);
  }
  unescape(e) {
    return e.replace(K, "|");
  }
}
function rt(b, e) {
  let t = 0, i = 0, r = 1, s = 0, a = 0, n = 0, l = 0, d = 0;
  return b.formatToParts(e).forEach((m) => {
    switch (m.type) {
      case "year":
        t = +m.value;
        break;
      case "month":
        i = +m.value - 1;
        break;
      case "day":
        r = +m.value;
        break;
      case "hour":
        s = +m.value;
        break;
      case "minute":
        a = +m.value;
        break;
      case "second":
        n = +m.value;
        break;
      case "fractionalSecond":
        l = +m.value;
        break;
      case "weekday":
        switch (m.value) {
          case "Sun":
            d = 0;
            break;
          case "Mon":
            d = 1;
            break;
          case "Tue":
            d = 2;
            break;
          case "Wed":
            d = 3;
            break;
          case "Thu":
            d = 4;
            break;
          case "Fri":
            d = 5;
            break;
          case "Sat":
            d = 6;
        }
    }
  }), s === 24 && (s = 0), { year: t, month: i, day: r, hour: s, minute: a, second: n, millisecond: l, weekday: d };
}
function $e(b, e) {
  const { year: t, month: i, day: r, hour: s, minute: a, second: n, millisecond: l } = rt(b, e);
  return Date.UTC(t, i, r, s, a, n, l);
}
class $t {
  constructor(e, t) {
    if (Object.defineProperty(this, "_utc", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dtf", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this.name = e, this._utc = new Intl.DateTimeFormat("UTC", { hour12: !1, timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 }), this._dtf = new Intl.DateTimeFormat("UTC", { hour12: !1, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 });
  }
  static new(e) {
    return new this(e, !0);
  }
  convertLocal(e) {
    const t = this.offsetUTC(e), i = e.getTimezoneOffset(), r = new Date(e);
    r.setUTCMinutes(r.getUTCMinutes() - (t - i));
    const s = r.getTimezoneOffset();
    return i != s && r.setUTCMinutes(r.getUTCMinutes() + s - i), r;
  }
  offsetUTC(e) {
    return ($e(this._utc, e) - $e(this._dtf, e)) / 6e4;
  }
  parseDate(e) {
    return rt(this._dtf, e);
  }
}
class Gt extends ee {
  _setDefaults() {
    this._setDefault("capitalize", !0), this._setDefault("dateFormat", "yyyy-MM-dd"), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i = !1) {
    let r;
    t !== void 0 && t !== "" || (t = this.get("dateFormat", "yyyy-MM-dd"));
    let s = e;
    if (et(t)) try {
      const l = this.get("intlLocales");
      return l ? new Intl.DateTimeFormat(l, t).format(s) : new Intl.DateTimeFormat(void 0, t).format(s);
    } catch {
      return "Invalid";
    }
    let a = this.parseFormat(t);
    const n = this._root.timezone;
    return !n || this._root.utc || i || (s = n.convertLocal(s)), H(s.getTime()) ? (r = this.applyFormat(s, a, i), this.get("capitalize") && (r = r.replace(/^.{1}/, r.substr(0, 1).toUpperCase())), r) : "Invalid date";
  }
  applyFormat(e, t, i = !1) {
    let r, s, a, n, l, d, m, u, f = t.template, o = e.getTime();
    this._root.utc && !i ? (r = e.getUTCFullYear(), s = e.getUTCMonth(), a = e.getUTCDay(), n = e.getUTCDate(), l = e.getUTCHours(), d = e.getUTCMinutes(), m = e.getUTCSeconds(), u = e.getUTCMilliseconds()) : (r = e.getFullYear(), s = e.getMonth(), a = e.getDay(), n = e.getDate(), l = e.getHours(), d = e.getMinutes(), m = e.getSeconds(), u = e.getMilliseconds());
    for (let p = 0, h = t.parts.length; p < h; p++) {
      let c = "";
      switch (t.parts[p]) {
        case "G":
          c = this._t(r < 0 ? "_era_bc" : "_era_ad");
          break;
        case "yyyy":
          c = Math.abs(r).toString(), r < 0 && (c += this._t("_era_bc"));
          break;
        case "yyy":
        case "yy":
        case "y":
          c = Math.abs(r).toString().substr(-t.parts[p].length), r < 0 && (c += this._t("_era_bc"));
          break;
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
          let _ = Mt(e, this._root.utc);
          c = t.parts[p] == "YYYY" ? Math.abs(_).toString() : Math.abs(_).toString().substr(-t.parts[p].length), _ < 0 && (c += this._t("_era_bc"));
          break;
        case "u":
        case "F":
        case "g":
          break;
        case "q":
          c = "" + Math.ceil((e.getMonth() + 1) / 3);
          break;
        case "MMMMM":
          c = this._t(this._getMonth(s)).substr(0, 1);
          break;
        case "MMMM":
          c = this._t(this._getMonth(s));
          break;
        case "MMM":
          c = this._t(this._getShortMonth(s));
          break;
        case "MM":
          c = T(s + 1, 2, "0");
          break;
        case "M":
          c = (s + 1).toString();
          break;
        case "ww":
          c = T(He(e, this._root.utc), 2, "0");
          break;
        case "w":
          c = He(e, this._root.utc).toString();
          break;
        case "W":
          c = kt(e, this._root.utc).toString();
          break;
        case "dd":
          c = T(n, 2, "0");
          break;
        case "d":
          c = n.toString();
          break;
        case "DD":
        case "DDD":
          c = T(Ie(e, this._root.utc).toString(), t.parts[p].length, "0");
          break;
        case "D":
          c = Ie(e, this._root.utc).toString();
          break;
        case "t":
          c = this._root.language.translateFunc("_dateOrd").call(this, n);
          break;
        case "E":
          c = (a || 7).toString();
          break;
        case "EE":
          c = T((a || 7).toString(), 2, "0");
          break;
        case "EEE":
        case "eee":
          c = this._t(this._getShortWeekday(a));
          break;
        case "EEEE":
        case "eeee":
          c = this._t(this._getWeekday(a));
          break;
        case "EEEEE":
        case "eeeee":
          c = this._t(this._getShortWeekday(a)).substr(0, 1);
          break;
        case "e":
        case "ee":
          c = (a - (this._root.locale.firstDayOfWeek || 1) + 1).toString(), t.parts[p] == "ee" && (c = T(c, 2, "0"));
          break;
        case "a":
          c = l >= 12 ? this._t("PM") : this._t("AM");
          break;
        case "aa":
          c = l >= 12 ? this._t("P.M.") : this._t("A.M.");
          break;
        case "aaa":
          c = l >= 12 ? this._t("P") : this._t("A");
          break;
        case "h":
          c = be(l).toString();
          break;
        case "hh":
          c = T(be(l), 2, "0");
          break;
        case "H":
          c = l.toString();
          break;
        case "HH":
          c = T(l, 2, "0");
          break;
        case "K":
          c = be(l, 0).toString();
          break;
        case "KK":
          c = T(be(l, 0), 2, "0");
          break;
        case "k":
          c = (l + 1).toString();
          break;
        case "kk":
          c = T(l + 1, 2, "0");
          break;
        case "m":
          c = d.toString();
          break;
        case "mm":
          c = T(d, 2, "0");
          break;
        case "s":
          c = m.toString();
          break;
        case "ss":
          c = T(m, 2, "0");
          break;
        case "S":
        case "SS":
        case "SSS":
          c = Math.round(u / 1e3 * Math.pow(10, t.parts[p].length)).toString();
          break;
        case "x":
          c = o.toString();
          break;
        case "n":
        case "nn":
        case "nnn":
          c = T(u, t.parts[p].length, "0");
          break;
        case "z":
          c = de(e, !1, !1, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zz":
          c = de(e, !0, !1, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zzz":
          c = de(e, !1, !0, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zzzz":
          c = de(e, !0, !0, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "Z":
        case "ZZ":
          let v = this._root.utc ? "UTC" : this._root.timezone;
          v instanceof $t && (v = v.name);
          const w = v ? Ot(v) : e.getTimezoneOffset();
          let g = Math.abs(w) / 60, x = Math.floor(g), M = 60 * g - 60 * x;
          this._root.utc && (x = 0, M = 0), t.parts[p] == "Z" ? (c = "GMT", c += w > 0 ? "-" : "+", c += T(x, 2) + ":" + T(M, 2)) : (c = w > 0 ? "-" : "+", c += T(x, 2) + T(M, 2));
          break;
        case "i":
          c = e.toISOString();
          break;
        case "I":
          c = e.toUTCString();
      }
      f = f.replace(Q, c);
    }
    return f;
  }
  parseFormat(e) {
    let t = { template: "", parts: [] }, i = W.chunk(e, !0);
    for (let r = 0; r < i.length; r++) {
      let s = i[r];
      if (s.type === "value") {
        if (s.text.match(/^date$/i)) {
          let n = this.get("dateFormat", "yyyy-MM-dd");
          _e(n) || (n = "yyyy-MM-dd"), s.text = n;
        }
        let a = s.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
        if (a) for (let n = 0; n < a.length; n++) t.parts.push(a[n]), s.text = s.text.replace(a[n], Q);
      }
      t.template += s.text;
    }
    return t;
  }
  _months() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  _getMonth(e) {
    return this._months()[e];
  }
  _shortMonths() {
    return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  _getShortMonth(e) {
    return this._shortMonths()[e];
  }
  _weekdays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  _getWeekday(e) {
    return this._weekdays()[e];
  }
  _shortWeekdays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  _getShortWeekday(e) {
    return this._shortWeekdays()[e];
  }
  parse(e, t) {
    if (e instanceof Date) return e;
    if (H(e)) return new Date(e);
    if (t == "x") return new Date(parseInt(e));
    let i;
    _e(e) || (e = e.toString());
    let r = "";
    t = (t = De(t)).substr(0, e.length);
    let s = this.parseFormat(t), a = { year: -1, year3: -1, year2: -1, year1: -1, month: -1, monthShort: -1, monthLong: -1, weekdayShort: -1, weekdayLong: -1, day: -1, yearDay: -1, week: -1, hourBase0: -1, hour12Base0: -1, hourBase1: -1, hour12Base1: -1, minute: -1, second: -1, millisecond: -1, millisecondDigits: -1, am: -1, zone: -1, timestamp: -1, iso: -1 }, n = { year: 1970, month: 0, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, timestamp: null, offset: 0, utc: this._root.utc }, l = 0, d = 0;
    for (let f = 0; f < s.parts.length; f++) {
      switch (d = f + l + 1, s.parts[f]) {
        case "yyyy":
        case "YYYY":
          r += "([0-9]{4})", a.year = d;
          break;
        case "yyy":
        case "YYY":
          r += "([0-9]{3})", a.year3 = d;
          break;
        case "yy":
        case "YY":
          r += "([0-9]{2})", a.year2 = d;
          break;
        case "y":
        case "Y":
          r += "([0-9]{1})", a.year1 = d;
          break;
        case "MMMM":
          r += "(" + this.getStringList(this._months()).join("|") + ")", a.monthLong = d;
          break;
        case "MMM":
          r += "(" + this.getStringList(this._shortMonths()).join("|") + ")", a.monthShort = d;
          break;
        case "MM":
        case "M":
          r += "([0-9]{2}|[0-9]{1})", a.month = d;
          break;
        case "ww":
        case "w":
          r += "([0-9]{2}|[0-9]{1})", a.week = d;
          break;
        case "dd":
        case "d":
          r += "([0-9]{2}|[0-9]{1})", a.day = d;
          break;
        case "DDD":
        case "DD":
        case "D":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", a.yearDay = d;
          break;
        case "dddd":
          r += "(" + this.getStringList(this._weekdays()).join("|") + ")", a.weekdayLong = d;
          break;
        case "ddd":
          r += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")", a.weekdayShort = d;
          break;
        case "aaa":
        case "aa":
        case "a":
          r += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")", a.am = d;
          break;
        case "hh":
        case "h":
          r += "([0-9]{2}|[0-9]{1})", a.hour12Base1 = d;
          break;
        case "HH":
        case "H":
          r += "([0-9]{2}|[0-9]{1})", a.hourBase0 = d;
          break;
        case "KK":
        case "K":
          r += "([0-9]{2}|[0-9]{1})", a.hour12Base0 = d;
          break;
        case "kk":
        case "k":
          r += "([0-9]{2}|[0-9]{1})", a.hourBase1 = d;
          break;
        case "mm":
        case "m":
          r += "([0-9]{2}|[0-9]{1})", a.minute = d;
          break;
        case "ss":
        case "s":
          r += "([0-9]{2}|[0-9]{1})", a.second = d;
          break;
        case "SSS":
        case "SS":
        case "S":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", a.millisecond = d, a.millisecondDigits = s.parts[f].length;
          break;
        case "nnn":
        case "nn":
        case "n":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", a.millisecond = d;
          break;
        case "x":
          r += "([0-9]{1,})", a.timestamp = d;
          break;
        case "Z":
          r += "GMT([-+]+[0-9]{2}:[0-9]{2})", a.zone = d;
          break;
        case "ZZ":
          r += "([\\-+]+[0-9]{2}[0-9]{2})", a.zone = d;
          break;
        case "i":
          r += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)", a.iso = d, l += 7;
          break;
        case "G":
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
        case "MMMMM":
        case "W":
        case "EEEEE":
        case "EEEE":
        case "EEE":
        case "EE":
        case "E":
        case "eeeee":
        case "eeee":
        case "eee":
        case "ee":
        case "e":
        case "zzzz":
        case "zzz":
        case "zz":
        case "z":
        case "t":
          l--;
      }
      r += "[^0-9]*";
    }
    let m = new RegExp(r), u = e.match(m);
    if (u) {
      if (a.year > -1 && (n.year = parseInt(u[a.year])), a.year3 > -1) {
        let f = parseInt(u[a.year3]);
        f += 1e3, n.year = f;
      }
      if (a.year2 > -1) {
        let f = parseInt(u[a.year2]);
        f += f > 50 ? 1e3 : 2e3, n.year = f;
      }
      if (a.year1 > -1) {
        let f = parseInt(u[a.year1]);
        f = 10 * Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) + f, n.year = f;
      }
      if (a.monthLong > -1 && (n.month = this.resolveMonth(u[a.monthLong])), a.monthShort > -1 && (n.month = this.resolveShortMonth(u[a.monthShort])), a.month > -1 && (n.month = parseInt(u[a.month]) - 1), a.week > -1 && a.day === -1 && (n.month = 0, n.day = St(parseInt(u[a.week]), n.year, 1, this._root.utc)), a.day > -1 && (n.day = parseInt(u[a.day])), a.yearDay > -1 && (n.month = 0, n.day = parseInt(u[a.yearDay])), a.hourBase0 > -1 && (n.hour = parseInt(u[a.hourBase0])), a.hourBase1 > -1 && (n.hour = parseInt(u[a.hourBase1]) - 1), a.hour12Base0 > -1) {
        let f = parseInt(u[a.hour12Base0]);
        f == 11 && (f = 0), a.am > -1 && !this.isAm(u[a.am]) && (f += 12), n.hour = f;
      }
      if (a.hour12Base1 > -1) {
        let f = parseInt(u[a.hour12Base1]);
        f == 12 && (f = 0), a.am > -1 && !this.isAm(u[a.am]) && (f += 12), n.hour = f;
      }
      if (a.minute > -1 && (n.minute = parseInt(u[a.minute])), a.second > -1 && (n.second = parseInt(u[a.second])), a.millisecond > -1) {
        let f = parseInt(u[a.millisecond]);
        a.millisecondDigits == 2 ? f *= 10 : a.millisecondDigits == 1 && (f *= 100), n.millisecond = f;
      }
      if (a.timestamp > -1) {
        n.timestamp = parseInt(u[a.timestamp]);
        const f = new Date(n.timestamp);
        n.year = f.getUTCFullYear(), n.month = f.getUTCMonth(), n.day = f.getUTCDate(), n.hour = f.getUTCHours(), n.minute = f.getUTCMinutes(), n.second = f.getUTCSeconds(), n.millisecond = f.getUTCMilliseconds();
      }
      a.zone > -1 && (n.offset = this.resolveTimezoneOffset(new Date(n.year, n.month, n.day), u[a.zone])), a.iso > -1 && (n.year = R(u[a.iso + 0]), n.month = R(u[a.iso + 1]) - 1, n.day = R(u[a.iso + 2]), n.hour = R(u[a.iso + 3]), n.minute = R(u[a.iso + 4]), n.second = R(u[a.iso + 5]), n.millisecond = R(u[a.iso + 6]), u[a.iso + 7] == "Z" || u[a.iso + 7] == "z" ? n.utc = !0 : u[a.iso + 7] != "" && (n.offset = this.resolveTimezoneOffset(new Date(n.year, n.month, n.day), u[a.iso + 7]))), i = n.utc ? new Date(Date.UTC(n.year, n.month, n.day, n.hour, n.minute, n.second, n.millisecond)) : new Date(n.year, n.month, n.day, n.hour, n.minute + n.offset, n.second, n.millisecond);
    } else i = new Date(e);
    return i;
  }
  resolveTimezoneOffset(e, t) {
    if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/)) {
      let i = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/), r = i[1], s = i[2], a = i[3], n = 60 * parseInt(s) + parseInt(a);
      return r == "+" && (n *= -1), n - (e || /* @__PURE__ */ new Date()).getTimezoneOffset();
    }
    return 0;
  }
  resolveMonth(e) {
    let t = this._months().indexOf(e);
    return t > -1 || !this._root.language.isDefault() && (t = this._root.language.translateAll(this._months()).indexOf(e), t > -1) ? t : 0;
  }
  resolveShortMonth(e) {
    let t = this._shortMonths().indexOf(e);
    return t > -1 ? t : (t = this._months().indexOf(e), t > -1 || this._root.language && !this._root.language.isDefault() && (t = this._root.language.translateAll(this._shortMonths()).indexOf(e), t > -1) ? t : 0);
  }
  isAm(e) {
    return this.getStringList(["AM", "A.M.", "A"]).indexOf(e.toUpperCase()) > -1;
  }
  getStringList(e) {
    let t = [];
    for (let i = 0; i < e.length; i++) this._root.language ? t.push(Re(this._t(e[i]))) : t.push(Re(e[i]));
    return t;
  }
}
class Xt extends ee {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_unitAliases", { enumerable: !0, configurable: !0, writable: !0, value: { Y: "y", D: "d", H: "h", K: "h", k: "h", n: "S" } });
  }
  _setDefaults() {
    const e = "_duration_millisecond", t = "_duration_second", i = "_duration_minute", r = "_duration_hour", s = "_duration_day", a = "_duration_week", n = "_duration_month", l = "_duration_year", d = "_second", m = "_minute", u = "_hour", f = "_day", o = "_week", p = "_week", h = "_year";
    this._setDefault("negativeBase", 0), this._setDefault("baseUnit", "second"), this._setDefault("durationFormats", { millisecond: { millisecond: this._t(e), second: this._t(e + d), minute: this._t(e + m), hour: this._t(e + u), day: this._t(e + f), week: this._t(e + o), month: this._t(e + p), year: this._t(e + h) }, second: { second: this._t(t), minute: this._t(t + m), hour: this._t(t + u), day: this._t(t + f), week: this._t(t + o), month: this._t(t + p), year: this._t(t + h) }, minute: { minute: this._t(i), hour: this._t(i + u), day: this._t(i + f), week: this._t(i + o), month: this._t(i + p), year: this._t(i + h) }, hour: { hour: this._t(r), day: this._t(r + f), week: this._t(r + o), month: this._t(r + p), year: this._t(r + h) }, day: { day: this._t(s), week: this._t(s + o), month: this._t(s + p), year: this._t(s + h) }, week: { week: this._t(a), month: this._t(a + p), year: this._t(a + h) }, month: { month: this._t(n), year: this._t(n + h) }, year: { year: this._t(l) } }), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let r = i || this.get("baseUnit");
    t !== void 0 && t !== "" || (t = this.get("durationFormat") != null ? this.get("durationFormat") : this.getFormat(R(e), void 0, r)), t = De(t);
    let s, a = this.parseFormat(t, r), n = Number(e);
    s = n > this.get("negativeBase") ? a.positive : n < this.get("negativeBase") ? a.negative : a.zero;
    let l = this.applyFormat(n, s);
    return s.color !== "" && (l = "[" + s.color + "]" + l + "[/]"), l;
  }
  parseFormat(e, t) {
    let i = t || this.get("baseUnit"), r = { positive: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 }, negative: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 }, zero: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 } }, s = (e = e.replace("||", K)).split("|");
    return r.positive.source = s[0], s[2] === void 0 ? r.zero = r.positive : r.zero.source = s[2], s[1] === void 0 ? r.negative = r.positive : r.negative.source = s[1], he(r, (a, n) => {
      if (n.parsed) return;
      let l = n.source, d = [];
      d = n.source.match(/^\[([^\]]*)\]/), d && d.length && d[0] !== "" && (l = n.source.substr(d[0].length), n.color = d[1]);
      let m = W.chunk(l, !0);
      for (let u = 0; u < m.length; u++) {
        let f = m[u];
        if (f.text = f.text.replace(K, "|"), f.type === "value") {
          f.text.match(/[yYMdDwhHKkmsSn]+a/) && (n.absolute = !0, f.text = f.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1"));
          let o = f.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
          if (o) for (let p = 0; p < o.length; p++) o[p] == null && (o[p] = this._unitAliases[o[p]]), n.parts.push(o[p]), f.text = f.text.replace(o[p], Q);
        }
        n.template += f.text;
      }
      n.parsed = !0;
    }), r;
  }
  applyFormat(e, t) {
    let i = !t.absolute && e < this.get("negativeBase");
    e = Math.abs(e);
    let r = this.toTimeStamp(e, t.baseUnit), s = t.template;
    for (let a = 0, n = t.parts.length; a < n; a++) {
      let l = t.parts[a], d = this._toTimeUnit(l.substr(0, 1)), m = l.length, u = Math.floor(r / this._getUnitValue(d));
      s = s.replace(Q, T(u, m, "0")), r -= u * this._getUnitValue(d);
    }
    return i && (s = "-" + s), s;
  }
  toTimeStamp(e, t) {
    return e * this._getUnitValue(t);
  }
  _toTimeUnit(e) {
    switch (e) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
        return "hour";
      case "d":
        return "day";
      case "w":
        return "week";
      case "M":
        return "month";
      case "y":
        return "year";
    }
  }
  getFormat(e, t, i) {
    if (this.get("durationFormat") != null) return this.get("durationFormat");
    if (i || (i = this.get("baseUnit")), t != null && e != t) {
      e = Math.abs(e), t = Math.abs(t);
      let r = this.getValueUnit(Math.max(e, t), i);
      return this.get("durationFormats")[i][r];
    }
    {
      let r = this.getValueUnit(e, i);
      return this.get("durationFormats")[i][r];
    }
  }
  getValueUnit(e, t) {
    let i;
    t || (t = this.get("baseUnit"));
    let r = this.getMilliseconds(e, t);
    return jt(this._getUnitValues(), (s, a) => {
      if (s == t || i) {
        if (r / a <= 1) return i || (i = s), !1;
        i = s;
      }
      return !0;
    }), i;
  }
  getMilliseconds(e, t) {
    return t || (t = this.get("baseUnit")), e * this._getUnitValue(t);
  }
  _getUnitValue(e) {
    return this._getUnitValues()[e];
  }
  _getUnitValues() {
    return { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2592e6, year: 31536e6 };
  }
}
const st = { firstDayOfWeek: 1, _decimalSeparator: ".", _thousandSeparator: ",", _percentPrefix: null, _percentSuffix: "%", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "μ", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date: "yyyy-MM-dd", _date_millisecond: "mm:ss SSS", _date_millisecond_full: "HH:mm:ss SSS", _date_second: "HH:mm:ss", _date_second_full: "HH:mm:ss", _date_minute: "HH:mm", _date_minute_full: "HH:mm - MMM dd, yyyy", _date_hour: "HH:mm", _date_hour_full: "HH:mm - MMM dd, yyyy", _date_day: "MMM dd", _date_day_full: "MMM dd, yyyy", _date_week: "ww", _date_week_full: "MMM dd, yyyy", _date_month: "MMM", _date_month_full: "MMM, yyyy", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "AD", _era_bc: "BC", A: "", P: "", AM: "", PM: "", "A.M.": "", "P.M.": "", January: "", February: "", March: "", April: "", May: "", June: "", July: "", August: "", September: "", October: "", November: "", December: "", Jan: "", Feb: "", Mar: "", Apr: "", "May(short)": "May", Jun: "", Jul: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "", Sunday: "", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sun: "", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "", Sat: "", _dateOrd: function(b) {
  let e = "th";
  if (b < 11 || b > 13) switch (b % 10) {
    case 1:
      e = "st";
      break;
    case 2:
      e = "nd";
      break;
    case 3:
      e = "rd";
  }
  return e;
}, "Zoom Out": "", Play: "", Stop: "", Legend: "", "Press ENTER to toggle": "", Loading: "", Home: "", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Force directed tree": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "", Image: "", Data: "", Print: "", "Press ENTER or use arrow keys to navigate": "", "Press ENTER to open": "", "Press ENTER to print.": "", "Press ENTER to export as %1.": "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", HTML: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "", "From %1": "", "To %1": "", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "", Close: "", Minimize: "" };
class Nt extends ee {
  _setDefaults() {
    this.setPrivate("defaultLocale", st), super._setDefaults();
  }
  translate(e, t, ...i) {
    t || (t = this._root.locale || this.getPrivate("defaultLocale"));
    let r = e, s = t[e];
    if (s === null) r = "";
    else if (s != null) s && (r = s);
    else if (t !== this.getPrivate("defaultLocale")) return this.translate(e, this.getPrivate("defaultLocale"), ...i);
    if (i.length) for (let a = i.length, n = 0; n < a; ++n) r = r.split("%" + (n + 1)).join(i[n]);
    return r;
  }
  translateAny(e, t, ...i) {
    return this.translate(e, t, ...i);
  }
  setTranslationAny(e, t, i) {
    (i || this._root.locale)[e] = t;
  }
  setTranslationsAny(e, t) {
    he(e, (i, r) => {
      this.setTranslationAny(i, r, t);
    });
  }
  translateEmpty(e, t, ...i) {
    let r = this.translate(e, t, ...i);
    return r == e ? "" : r;
  }
  translateFunc(e, t) {
    return this._root.locale[e] ? this._root.locale[e] : t !== this.getPrivate("defaultLocale") ? this.translateFunc(e, this.getPrivate("defaultLocale")) : () => "";
  }
  translateAll(e, t) {
    return this.isDefault() ? e : Et(e, (i) => this.translate(i, t));
  }
  isDefault() {
    return this.getPrivate("defaultLocale") === this._root.locale;
  }
}
class ke {
  constructor(e = 1, t = 0, i = 0, r = 1, s = 0, a = 0) {
    Object.defineProperty(this, "a", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "b", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "c", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "d", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tx", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "ty", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.a = e, this.b = t, this.c = i, this.d = r, this.tx = s, this.ty = a;
  }
  setTransform(e, t, i, r, s, a = 1) {
    this.a = Math.cos(s) * a, this.b = Math.sin(s) * a, this.c = -Math.sin(s) * a, this.d = Math.cos(s) * a, this.tx = e - (i * this.a + r * this.c), this.ty = t - (i * this.b + r * this.d);
  }
  apply(e) {
    return { x: this.a * e.x + this.c * e.y + this.tx, y: this.b * e.x + this.d * e.y + this.ty };
  }
  applyInverse(e) {
    const t = 1 / (this.a * this.d + this.c * -this.b);
    return { x: this.d * t * e.x + -this.c * t * e.y + (this.ty * this.c - this.tx * this.d) * t, y: this.a * t * e.y + -this.b * t * e.x + (-this.ty * this.a + this.tx * this.b) * t };
  }
  append(e) {
    const t = this.a, i = this.b, r = this.c, s = this.d;
    this.a = e.a * t + e.b * r, this.b = e.a * i + e.b * s, this.c = e.c * t + e.d * r, this.d = e.c * i + e.d * s, this.tx = e.tx * t + e.ty * r + this.tx, this.ty = e.tx * i + e.ty * s + this.ty;
  }
  prepend(e) {
    const t = this.tx;
    if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
      const i = this.a, r = this.c;
      this.a = i * e.a + this.b * e.c, this.b = i * e.b + this.b * e.d, this.c = r * e.a + this.d * e.c, this.d = r * e.b + this.d * e.d;
    }
    this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty;
  }
  copyFrom(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty;
  }
}
var qt = /* @__PURE__ */ function() {
  function b(e, t) {
    var i = [], r = !0, s = !1, a = void 0;
    try {
      for (var n, l = e[Symbol.iterator](); !(r = (n = l.next()).done) && (i.push(n.value), !t || i.length !== t); r = !0) ;
    } catch (d) {
      s = !0, a = d;
    } finally {
      try {
        !r && l.return && l.return();
      } finally {
        if (s) throw a;
      }
    }
    return i;
  }
  return function(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return b(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), le = 2 * Math.PI, Me = function(b, e, t, i, r, s, a) {
  var n = b.x, l = b.y;
  return { x: i * (n *= e) - r * (l *= t) + s, y: r * n + i * l + a };
}, Zt = function(b, e) {
  var t = e === 1.5707963267948966 ? 0.551915024494 : e === -1.5707963267948966 ? -0.551915024494 : 1.3333333333333333 * Math.tan(e / 4), i = Math.cos(b), r = Math.sin(b), s = Math.cos(b + e), a = Math.sin(b + e);
  return [{ x: i - r * t, y: r + i * t }, { x: s + a * t, y: a - s * t }, { x: s, y: a }];
}, Ge = function(b, e, t, i) {
  var r = b * t + e * i;
  return r > 1 && (r = 1), r < -1 && (r = -1), (b * i - e * t < 0 ? -1 : 1) * Math.acos(r);
}, Jt = function(b, e, t, i, r, s, a, n, l, d, m, u) {
  var f = Math.pow(r, 2), o = Math.pow(s, 2), p = Math.pow(m, 2), h = Math.pow(u, 2), c = f * o - f * h - o * p;
  c < 0 && (c = 0), c /= f * h + o * p;
  var _ = (c = Math.sqrt(c) * (a === n ? -1 : 1)) * r / s * u, v = c * -s / r * m, w = d * _ - l * v + (b + t) / 2, g = l * _ + d * v + (e + i) / 2, x = (m - _) / r, M = (u - v) / s, O = (-m - _) / r, j = (-u - v) / s, D = Ge(1, 0, x, M), P = Ge(x, M, O, j);
  return n === 0 && P > 0 && (P -= le), n === 1 && P < 0 && (P += le), [w, g, D, P];
}, Kt = function(b) {
  var e = b.px, t = b.py, i = b.cx, r = b.cy, s = b.rx, a = b.ry, n = b.xAxisRotation, l = n === void 0 ? 0 : n, d = b.largeArcFlag, m = d === void 0 ? 0 : d, u = b.sweepFlag, f = u === void 0 ? 0 : u, o = [];
  if (s === 0 || a === 0) return [];
  var p = Math.sin(l * le / 360), h = Math.cos(l * le / 360), c = h * (e - i) / 2 + p * (t - r) / 2, _ = -p * (e - i) / 2 + h * (t - r) / 2;
  if (c === 0 && _ === 0) return [];
  s = Math.abs(s), a = Math.abs(a);
  var v = Math.pow(c, 2) / Math.pow(s, 2) + Math.pow(_, 2) / Math.pow(a, 2);
  v > 1 && (s *= Math.sqrt(v), a *= Math.sqrt(v));
  var w = Jt(e, t, i, r, s, a, m, f, p, h, c, _), g = qt(w, 4), x = g[0], M = g[1], O = g[2], j = g[3], D = Math.abs(j) / (le / 4);
  Math.abs(1 - D) < 1e-7 && (D = 1);
  var P = Math.max(Math.ceil(D), 1);
  j /= P;
  for (var z = 0; z < P; z++) o.push(Zt(O, j)), O += j;
  return o.map(function(A) {
    var I = Me(A[0], s, a, h, p, x, M), X = I.x, B = I.y, ue = Me(A[1], s, a, h, p, x, M), k = ue.x, F = ue.y, Y = Me(A[2], s, a, h, p, x, M);
    return { x1: X, y1: B, x2: k, y2: F, x: Y.x, y: Y.y };
  });
};
function Qt(b, e, t) {
  if (e !== t) throw new Error("Required " + t + " arguments for " + b + " but got " + e);
}
function ae(b, e, t) {
  if (e < t) throw new Error("Required at least " + t + " arguments for " + b + " but got " + e);
}
function L(b, e, t) {
  if (ae(b, e, t), e % t != 0) throw new Error("Arguments for " + b + " must be in pairs of " + t);
}
function ei(b) {
  for (let e = 0; e < b.length; e += 7) {
    let t = e + 3, i = b[t];
    if (i.length > 1) {
      const r = /^([01])([01])(.*)$/.exec(i);
      r !== null && (b.splice(t, 0, r[1]), ++t, b.splice(t, 0, r[2]), ++t, r[3].length > 0 ? b[t] = r[3] : b.splice(t, 1));
    }
    if (++t, i = b[t], i.length > 1) {
      const r = /^([01])(.+)$/.exec(i);
      r !== null && (b.splice(t, 0, r[1]), ++t, b[t] = r[2]);
    }
  }
}
function Xe(b) {
  if (b === 0 || b === 1) return b;
  throw new Error("Flag must be 0 or 1");
}
function ti(b) {
  const e = [0, 0, 0];
  for (let t = 0; t < 24; t++) e[t % 3] <<= 1, e[t % 3] |= 1 & b, b >>= 1;
  return (0 | e[0]) + (e[1] << 8) + (e[2] << 16);
}
function ge(b, e) {
  for (; (!b.interactive || e(b)) && b._parent; ) b = b._parent;
}
function ii(b, e, t) {
  return C(b, Te(e), (i) => {
    const r = tt(i);
    let s = i.touches;
    s ? (s.length == 0 && (s = i.changedTouches), t(Dt(s), r)) : t([i], r);
  });
}
function Ne(b) {
  const e = document.createElement("canvas");
  e.width = 1, e.height = 1;
  const t = e.getContext("2d", { willReadFrequently: !0 });
  t.drawImage(b, 0, 0, 1, 1);
  try {
    return t.getImageData(0, 0, 1, 1), !1;
  } catch {
    return console.warn('Image "' + b.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'), !0;
  }
}
function ne(b) {
  b.width = 0, b.height = 0, b.style.width = "0px", b.style.height = "0px";
}
function qe(b) {
  return Math.floor(b) + 0.5;
}
class ri {
  constructor() {
    Object.defineProperty(this, "_x", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_y", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(e) {
    this._x = e;
  }
  set y(e) {
    this._y = e;
  }
}
class we extends Yt {
  constructor(e) {
    super(), Object.defineProperty(this, "_layer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "mask", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "visible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "exportable", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "interactive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "inactive", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "wheelable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "cancelTouch", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "isMeasured", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "buttonMode", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "alpha", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "compoundAlpha", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "angle", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "scale", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "crisp", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "pivot", { enumerable: !0, configurable: !0, writable: !0, value: new ri() }), Object.defineProperty(this, "filter", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "cursorOverStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_replacedCursorStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_localMatrix", { enumerable: !0, configurable: !0, writable: !0, value: new ke() }), Object.defineProperty(this, "_matrix", { enumerable: !0, configurable: !0, writable: !0, value: new ke() }), Object.defineProperty(this, "_uMatrix", { enumerable: !0, configurable: !0, writable: !0, value: new ke() }), Object.defineProperty(this, "_renderer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_parent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_localBounds", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_bounds", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_colorId", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._renderer = e;
  }
  subStatus(e) {
    return { inactive: this.inactive == null ? e.inactive : this.inactive, layer: this._layer || e.layer };
  }
  _dispose() {
    this._renderer._removeObject(this), this.getLayer().dirty = !0;
  }
  getCanvas() {
    return this.getLayer().view;
  }
  getLayer() {
    let e = this;
    for (; ; ) {
      if (e._layer) return e._layer;
      if (!e._parent) return this._renderer.defaultLayer;
      e = e._parent;
    }
  }
  setLayer(e, t) {
    e == null ? this._layer = void 0 : (this._layer = this._renderer.getLayer(e, !0), this._layer.visible = !0, this._layer.margin = t, t && J(this._layer.view, !1), this._renderer._ghostLayer.setMargin(this._renderer.layers), this._parent && this._parent.registerChildLayer(this._layer), this._layer.dirty = !0, this._renderer.resizeLayer(this._layer), this._renderer.resizeGhost());
  }
  markDirtyLayer() {
    this.getLayer().dirty = !0;
  }
  clear() {
    this.invalidateBounds();
  }
  invalidateBounds() {
    this._localBounds = void 0;
  }
  _addBounds(e) {
  }
  _getColorId() {
    return this._colorId === void 0 && (this._colorId = this._renderer.paintId(this)), this._colorId;
  }
  _isInteractive(e) {
    return !e.inactive && (this.interactive || this._renderer._forceInteractive > 0);
  }
  _isInteractiveMask(e) {
    return this._isInteractive(e);
  }
  contains(e) {
    for (; ; ) {
      if (e === this) return !0;
      if (!e._parent) return !1;
      e = e._parent;
    }
  }
  toGlobal(e) {
    return this._matrix.apply(e);
  }
  toLocal(e) {
    return this._matrix.applyInverse(e);
  }
  getLocalMatrix() {
    return this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._uMatrix;
  }
  getLocalBounds() {
    return this._localBounds || (this._localBounds = { left: 1e7, top: 1e7, right: -1e7, bottom: -1e7 }, this._addBounds(this._localBounds)), this._localBounds;
  }
  getAdjustedBounds(e) {
    this._setMatrix();
    const t = this.getLocalMatrix(), i = t.apply({ x: e.left, y: e.top }), r = t.apply({ x: e.right, y: e.top }), s = t.apply({ x: e.right, y: e.bottom }), a = t.apply({ x: e.left, y: e.bottom });
    return { left: Math.min(i.x, r.x, s.x, a.x), top: Math.min(i.y, r.y, s.y, a.y), right: Math.max(i.x, r.x, s.x, a.x), bottom: Math.max(i.y, r.y, s.y, a.y) };
  }
  on(e, t, i) {
    return this.interactive ? this._renderer._addEvent(this, e, t, i) : new $(() => {
    });
  }
  _setMatrix() {
    this._localMatrix.setTransform(this.x, this.y, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._matrix.copyFrom(this._localMatrix), this._parent && this._matrix.prepend(this._parent._matrix);
  }
  _transform(e, t) {
    const i = this._matrix;
    let r = i.tx * t, s = i.ty * t;
    this.crisp && (r = qe(r), s = qe(s)), e.setTransform(i.a * t, i.b * t, i.c * t, i.d * t, r, s);
  }
  _transformMargin(e, t, i) {
    const r = this._matrix;
    e.setTransform(r.a * t, r.b * t, r.c * t, r.d * t, (r.tx + i.left) * t, (r.ty + i.top) * t);
  }
  _transformLayer(e, t, i) {
    i.margin ? this._transformMargin(e, i.scale || t, i.margin) : this._transform(e, i.scale || t);
  }
  render(e) {
    if (this.visible && (this.exportable !== !1 || !this._renderer._omitTainted)) {
      this._setMatrix();
      const t = this.subStatus(e), i = this._renderer.resolution, r = this._renderer.layers, s = this._renderer._ghostLayer, a = s.context, n = this.mask;
      n && n._setMatrix(), y(r, (l) => {
        if (l) {
          const d = l.context;
          d.save(), n && (n._transformLayer(d, i, l), n._runPath(d), d.clip()), d.globalAlpha = this.compoundAlpha * this.alpha, this._transformLayer(d, i, l), this.filter && (d.filter = this.filter);
        }
      }), a.save(), n && this._isInteractiveMask(t) && (n._transformMargin(a, i, s.margin), n._runPath(a), a.clip()), this._transformMargin(a, i, s.margin), this._render(t), a.restore(), y(r, (l) => {
        l && l.context.restore();
      });
    }
  }
  _render(e) {
    this.exportable === !1 && (e.layer.tainted = !0);
  }
  hovering() {
    return this._renderer._hovering.has(this);
  }
  dragging() {
    return this._renderer._dragging.some((e) => e.value === this);
  }
  shouldCancelTouch() {
    const e = this._renderer;
    return !(e.tapToActivate && !e._touchActive) && (!!this.cancelTouch || !!this._parent && this._parent.shouldCancelTouch());
  }
}
class si extends we {
  constructor() {
    super(...arguments), Object.defineProperty(this, "interactiveChildren", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_childLayers", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_children", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  _isInteractiveMask(e) {
    return this.interactiveChildren || super._isInteractiveMask(e);
  }
  addChild(e) {
    e._parent = this, this._children.push(e), e._layer && this.registerChildLayer(e._layer);
  }
  addChildAt(e, t) {
    e._parent = this, this._children.splice(t, 0, e), e._layer && this.registerChildLayer(e._layer);
  }
  removeChild(e) {
    e._parent = void 0, Be(this._children, e);
  }
  _render(e) {
    super._render(e);
    const t = this._renderer;
    this.interactive && this.interactiveChildren && ++t._forceInteractive, y(this._children, (i) => {
      i.compoundAlpha = this.compoundAlpha * this.alpha, i.render(e);
    }), this.interactive && this.interactiveChildren && --t._forceInteractive;
  }
  registerChildLayer(e) {
    this._childLayers || (this._childLayers = []), Ee(this._childLayers, e), this._parent && this._parent.registerChildLayer(e);
  }
  markDirtyLayer(e = !1) {
    super.markDirtyLayer(), e && this._childLayers && y(this._childLayers, (t) => t.dirty = !0);
  }
  _dispose() {
    super._dispose(), this._childLayers && y(this._childLayers, (e) => {
      e.dirty = !0;
    });
  }
}
function S(b, e) {
  b.left = Math.min(b.left, e.x), b.top = Math.min(b.top, e.y), b.right = Math.max(b.right, e.x), b.bottom = Math.max(b.bottom, e.y);
}
class E {
  colorize(e, t) {
  }
  colorizeGhost(e, t) {
    this.colorize(e, t);
  }
  path(e) {
  }
  pathGhost(e) {
    this.path(e);
  }
  addBounds(e) {
  }
}
class ai extends E {
  colorize(e, t) {
    e.beginPath();
  }
}
class Se extends E {
  constructor(e) {
    super(), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.fillStyle = t !== void 0 ? t : this.color;
  }
}
class ni extends E {
  constructor(e) {
    super(), Object.defineProperty(this, "clearShadow", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.fill(), this.clearShadow && (e.shadowColor = "", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0);
  }
}
class oi extends E {
  colorize(e, t) {
    e.stroke();
  }
}
class je extends E {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "lineJoin", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
  colorize(e, t) {
    e.strokeStyle = t !== void 0 ? t : this.color, e.lineWidth = this.width, this.lineJoin && (e.lineJoin = this.lineJoin);
  }
}
class li extends E {
  constructor(e) {
    super(), Object.defineProperty(this, "dash", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.setLineDash(this.dash);
  }
}
class hi extends E {
  constructor(e) {
    super(), Object.defineProperty(this, "dashOffset", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.lineDashOffset = this.dashOffset;
  }
}
class ui extends E {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.rect(this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    const t = this.x, i = this.y, r = t + this.width, s = i + this.height;
    S(e, { x: t, y: i }), S(e, { x: r, y: i }), S(e, { x: t, y: s }), S(e, { x: r, y: s });
  }
}
class ci extends E {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
  path(e) {
    e.moveTo(this.x + this.radius, this.y), e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }
  addBounds(e) {
    S(e, { x: this.x - this.radius, y: this.y - this.radius }), S(e, { x: this.x + this.radius, y: this.y + this.radius });
  }
}
class di extends E {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radiusX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "radiusY", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
  }
  addBounds(e) {
    S(e, { x: this.x - this.radiusX, y: this.y - this.radiusY }), S(e, { x: this.x + this.radiusX, y: this.y + this.radiusY });
  }
}
class bi extends E {
  constructor(e, t, i, r, s, a) {
    super(), Object.defineProperty(this, "cx", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cy", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "startAngle", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "endAngle", { enumerable: !0, configurable: !0, writable: !0, value: s }), Object.defineProperty(this, "anticlockwise", { enumerable: !0, configurable: !0, writable: !0, value: a });
  }
  path(e) {
    this.radius > 0 && e.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  }
  addBounds(e) {
    let t = It(this.cx, this.cy, this.startAngle * oe, this.endAngle * oe, this.radius);
    S(e, { x: t.left, y: t.top }), S(e, { x: t.right, y: t.bottom });
  }
}
class fi extends E {
  constructor(e, t, i, r, s) {
    super(), Object.defineProperty(this, "x1", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y1", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "x2", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "y2", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: s });
  }
  path(e) {
    this.radius > 0 && e.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  }
  addBounds(e) {
  }
}
class gi extends E {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t });
  }
  path(e) {
    e.lineTo(this.x, this.y);
  }
  addBounds(e) {
    S(e, { x: this.x, y: this.y });
  }
}
class mi extends E {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t });
  }
  path(e) {
    e.moveTo(this.x, this.y);
  }
  addBounds(e) {
    S(e, { x: this.x, y: this.y });
  }
}
class pi extends E {
  path(e) {
    e.closePath();
  }
}
class _i extends E {
  constructor(e, t, i, r, s, a) {
    super(), Object.defineProperty(this, "cpX", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cpY", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "cpX2", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "cpY2", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "toX", { enumerable: !0, configurable: !0, writable: !0, value: s }), Object.defineProperty(this, "toY", { enumerable: !0, configurable: !0, writable: !0, value: a });
  }
  path(e) {
    e.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY);
  }
  addBounds(e) {
    S(e, { x: this.cpX, y: this.cpY }), S(e, { x: this.cpX2, y: this.cpY2 }), S(e, { x: this.toX, y: this.toY });
  }
}
class yi extends E {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "cpX", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cpY", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "toX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "toY", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
  }
  addBounds(e) {
    S(e, { x: this.cpX, y: this.cpY }), S(e, { x: this.toX, y: this.toY });
  }
}
class vi extends E {
  constructor(e, t, i, r, s) {
    super(), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "blur", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "offsetX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "offsetY", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "opacity", { enumerable: !0, configurable: !0, writable: !0, value: s });
  }
  colorize(e, t) {
    this.opacity && (e.fillStyle = this.color), e.shadowColor = this.color, e.shadowBlur = this.blur, e.shadowOffsetX = this.offsetX, e.shadowOffsetY = this.offsetY;
  }
  colorizeGhost(e, t) {
  }
}
class wi extends E {
  constructor(e, t, i, r, s) {
    super(), Object.defineProperty(this, "image", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: s });
  }
  path(e) {
    e.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    S(e, { x: this.x, y: this.y }), S(e, { x: this.width, y: this.height });
  }
}
class xi extends we {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_operations", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "blendMode", { enumerable: !0, configurable: !0, writable: !0, value: At.NORMAL }), Object.defineProperty(this, "_hasShadows", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_fillAlpha", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_strokeAlpha", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  clear() {
    super.clear(), this._operations.length = 0;
  }
  _pushOp(e) {
    this._operations.push(e);
  }
  beginFill(e, t = 1) {
    this._fillAlpha = t, e ? e instanceof G ? this._pushOp(new Se(e.toCSS(t))) : (this.isMeasured = !0, this._pushOp(new Se(e))) : this._pushOp(new Se("rgba(0, 0, 0, " + t + ")"));
  }
  endFill() {
    this._pushOp(new ni(this._hasShadows));
  }
  endStroke() {
    this._pushOp(new oi());
  }
  beginPath() {
    this._pushOp(new ai());
  }
  lineStyle(e = 0, t, i = 1, r) {
    this._strokeAlpha = i, t ? t instanceof G ? this._pushOp(new je(e, t.toCSS(i), r)) : this._pushOp(new je(e, t, r)) : this._pushOp(new je(e, "rgba(0, 0, 0, " + i + ")", r));
  }
  setLineDash(e) {
    this._pushOp(new li(e || []));
  }
  setLineDashOffset(e = 0) {
    this._pushOp(new hi(e));
  }
  drawRect(e, t, i, r) {
    this._pushOp(new ui(e, t, i, r));
  }
  drawCircle(e, t, i) {
    this._pushOp(new ci(e, t, i));
  }
  drawEllipse(e, t, i, r) {
    this._pushOp(new di(e, t, i, r));
  }
  arc(e, t, i, r, s, a = !1) {
    this._pushOp(new bi(e, t, i, r, s, a));
  }
  arcTo(e, t, i, r, s) {
    this._pushOp(new fi(e, t, i, r, s));
  }
  lineTo(e, t) {
    this._pushOp(new gi(e, t));
  }
  moveTo(e, t) {
    this._pushOp(new mi(e, t));
  }
  bezierCurveTo(e, t, i, r, s, a) {
    this._pushOp(new _i(e, t, i, r, s, a));
  }
  quadraticCurveTo(e, t, i, r) {
    this._pushOp(new yi(e, t, i, r));
  }
  closePath() {
    this._pushOp(new pi());
  }
  shadow(e, t = 0, i = 0, r = 0, s) {
    this._hasShadows = !0, this._pushOp(new vi(s ? e.toCSS(s) : e.toCSS(this._fillAlpha || this._strokeAlpha), t, i, r));
  }
  image(e, t, i, r, s) {
    this._pushOp(new wi(e, t, i, r, s));
  }
  svgPath(e) {
    let t = 0, i = 0, r = null, s = null, a = null, n = null;
    const l = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g, d = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
    let m;
    for (; (m = l.exec(e)) !== null; ) {
      const u = m[1], f = m[2], o = [];
      for (; (m = d.exec(f)) !== null; ) o.push(m[1]);
      switch (u !== "S" && u !== "s" && u !== "C" && u !== "c" && (r = null, s = null), u !== "Q" && u !== "q" && u !== "T" && u !== "t" && (a = null, n = null), u) {
        case "M":
          L(u, o.length, 2), t = +o[0], i = +o[1], this.moveTo(t, i);
          for (let h = 2; h < o.length; h += 2) t = +o[h], i = +o[h + 1], this.lineTo(t, i);
          break;
        case "m":
          L(u, o.length, 2), t += +o[0], i += +o[1], this.moveTo(t, i);
          for (let h = 2; h < o.length; h += 2) t += +o[h], i += +o[h + 1], this.lineTo(t, i);
          break;
        case "L":
          L(u, o.length, 2);
          for (let h = 0; h < o.length; h += 2) t = +o[h], i = +o[h + 1], this.lineTo(t, i);
          break;
        case "l":
          L(u, o.length, 2);
          for (let h = 0; h < o.length; h += 2) t += +o[h], i += +o[h + 1], this.lineTo(t, i);
          break;
        case "H":
          ae(u, o.length, 1);
          for (let h = 0; h < o.length; ++h) t = +o[h], this.lineTo(t, i);
          break;
        case "h":
          ae(u, o.length, 1);
          for (let h = 0; h < o.length; ++h) t += +o[h], this.lineTo(t, i);
          break;
        case "V":
          ae(u, o.length, 1);
          for (let h = 0; h < o.length; ++h) i = +o[h], this.lineTo(t, i);
          break;
        case "v":
          ae(u, o.length, 1);
          for (let h = 0; h < o.length; ++h) i += +o[h], this.lineTo(t, i);
          break;
        case "C":
          L(u, o.length, 6);
          for (let h = 0; h < o.length; h += 6) {
            const c = +o[h], _ = +o[h + 1];
            r = +o[h + 2], s = +o[h + 3], t = +o[h + 4], i = +o[h + 5], this.bezierCurveTo(c, _, r, s, t, i);
          }
          break;
        case "c":
          L(u, o.length, 6);
          for (let h = 0; h < o.length; h += 6) {
            const c = +o[h] + t, _ = +o[h + 1] + i;
            r = +o[h + 2] + t, s = +o[h + 3] + i, t += +o[h + 4], i += +o[h + 5], this.bezierCurveTo(c, _, r, s, t, i);
          }
          break;
        case "S":
          L(u, o.length, 4), r !== null && s !== null || (r = t, s = i);
          for (let h = 0; h < o.length; h += 4) {
            const c = 2 * t - r, _ = 2 * i - s;
            r = +o[h], s = +o[h + 1], t = +o[h + 2], i = +o[h + 3], this.bezierCurveTo(c, _, r, s, t, i);
          }
          break;
        case "s":
          L(u, o.length, 4), r !== null && s !== null || (r = t, s = i);
          for (let h = 0; h < o.length; h += 4) {
            const c = 2 * t - r, _ = 2 * i - s;
            r = +o[h] + t, s = +o[h + 1] + i, t += +o[h + 2], i += +o[h + 3], this.bezierCurveTo(c, _, r, s, t, i);
          }
          break;
        case "Q":
          L(u, o.length, 4);
          for (let h = 0; h < o.length; h += 4) a = +o[h], n = +o[h + 1], t = +o[h + 2], i = +o[h + 3], this.quadraticCurveTo(a, n, t, i);
          break;
        case "q":
          L(u, o.length, 4);
          for (let h = 0; h < o.length; h += 4) a = +o[h] + t, n = +o[h + 1] + i, t += +o[h + 2], i += +o[h + 3], this.quadraticCurveTo(a, n, t, i);
          break;
        case "T":
          L(u, o.length, 2), a !== null && n !== null || (a = t, n = i);
          for (let h = 0; h < o.length; h += 2) a = 2 * t - a, n = 2 * i - n, t = +o[h], i = +o[h + 1], this.quadraticCurveTo(a, n, t, i);
          break;
        case "t":
          L(u, o.length, 2), a !== null && n !== null || (a = t, n = i);
          for (let h = 0; h < o.length; h += 2) a = 2 * t - a, n = 2 * i - n, t += +o[h], i += +o[h + 1], this.quadraticCurveTo(a, n, t, i);
          break;
        case "A":
        case "a":
          const p = u === "a";
          ei(o), L(u, o.length, 7);
          for (let h = 0; h < o.length; h += 7) {
            let c = +o[h + 5], _ = +o[h + 6];
            p && (c += t, _ += i);
            const v = Kt({ px: t, py: i, rx: +o[h], ry: +o[h + 1], xAxisRotation: +o[h + 2], largeArcFlag: Xe(+o[h + 3]), sweepFlag: Xe(+o[h + 4]), cx: c, cy: _ });
            y(v, (w) => {
              this.bezierCurveTo(w.x1, w.y1, w.x2, w.y2, w.x, w.y), t = w.x, i = w.y;
            });
          }
          break;
        case "Z":
        case "z":
          Qt(u, o.length, 0), this.closePath();
      }
    }
  }
  _runPath(e) {
    e.beginPath(), y(this._operations, (t) => {
      t.path(e);
    });
  }
  _render(e) {
    super._render(e);
    const t = e.layer.dirty, i = this._isInteractive(e);
    if (t || i) {
      const r = e.layer.context, s = this._renderer._ghostLayer.context;
      let a;
      t && (r.globalCompositeOperation = this.blendMode, r.beginPath()), i && (s.beginPath(), a = this._getColorId()), y(this._operations, (n) => {
        t && (n.path(r), n.colorize(r, void 0)), i && (n.pathGhost(s), n.colorizeGhost(s, a));
      });
    }
  }
  renderDetached(e) {
    if (this.visible) {
      this._setMatrix(), e.save();
      const t = this.mask;
      t && (t._setMatrix(), t._transform(e, 1), t._runPath(e), e.clip()), e.globalAlpha = this.compoundAlpha * this.alpha, this._transform(e, 1), this.filter && (e.filter = this.filter), e.globalCompositeOperation = this.blendMode, e.beginPath(), y(this._operations, (i) => {
        i.path(e), i.colorize(e, void 0);
      }), e.restore();
    }
  }
  _addBounds(e) {
    this.visible && this.isMeasured && y(this._operations, (t) => {
      t.addBounds(e);
    });
  }
}
class at extends we {
  constructor(e, t, i) {
    super(e), Object.defineProperty(this, "text", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "style", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "resolution", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "textVisible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_textInfo", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_originalScale", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), this.text = t, this.style = i;
  }
  invalidateBounds() {
    super.invalidateBounds(), this._textInfo = void 0;
  }
  _shared(e) {
    this.style.textAlign && (e.textAlign = this.style.textAlign), this.style.direction && (e.direction = this.style.direction), this.style.textBaseline && (e.textBaseline = this.style.textBaseline);
  }
  _prerender(e, t = !1, i = !1) {
    super._render(e);
    const r = e.layer.context, s = this._renderer._ghostLayer.context, a = this.style;
    let n = this._getFontStyle(void 0, i);
    r.font = n, this._isInteractive(e) && !t && (s.font = n), a.fill && (a.fill instanceof G ? r.fillStyle = a.fill.toCSS(a.fillOpacity != null ? a.fillOpacity : 1) : r.fillStyle = a.fill), a.shadowColor && (e.layer.context.shadowColor = a.shadowColor.toCSS(a.shadowOpacity || 1)), a.shadowBlur && (e.layer.context.shadowBlur = a.shadowBlur), a.shadowOffsetX && (e.layer.context.shadowOffsetX = a.shadowOffsetX), a.shadowOffsetY && (e.layer.context.shadowOffsetY = a.shadowOffsetY), this._shared(r), this._isInteractive(e) && !t && (s.fillStyle = this._getColorId(), this._shared(s));
  }
  _getFontStyle(e, t = !1) {
    const i = this.style;
    let r = [];
    return e && e.fontVariant ? r.push(e.fontVariant) : i.fontVariant && r.push(i.fontVariant), t || (e && e.fontWeight ? r.push(e.fontWeight) : i.fontWeight && r.push(i.fontWeight)), e && e.fontStyle ? r.push(e.fontStyle) : i.fontStyle && r.push(i.fontStyle), e && e.fontSize ? (H(e.fontSize) && (e.fontSize = e.fontSize + "px"), r.push(e.fontSize)) : i.fontSize && (H(i.fontSize) && (i.fontSize = i.fontSize + "px"), r.push(i.fontSize)), e && e.fontFamily ? r.push(e.fontFamily) : i.fontFamily ? r.push(i.fontFamily) : r.length && r.push("Arial"), r.join(" ");
  }
  _render(e) {
    if (this._textInfo || this._measure(e), this.textVisible) {
      const t = this._isInteractive(e), i = e.layer.context, r = e.layer.dirty, s = this._renderer._ghostLayer.context;
      i.save(), s.save(), this._prerender(e), y(this._textInfo, (a, n) => {
        y(a.textChunks, (l, d) => {
          if (l.style && (i.save(), s.save(), i.font = l.style, this._isInteractive(e) && (s.font = l.style)), l.fill && (i.save(), i.fillStyle = l.fill.toCSS()), r && i.fillText(l.text, l.offsetX, a.offsetY + l.offsetY), l.textDecoration == "underline" || l.textDecoration == "line-through") {
            let m, u = 1, f = 1, o = l.height, p = l.offsetX;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                p -= l.width;
                break;
              case "center":
                p -= l.width / 2;
            }
            if (l.style)
              switch (W.getTextStyle(l.style).fontWeight) {
                case "bolder":
                case "bold":
                case "700":
                case "800":
                case "900":
                  u = 2;
              }
            o && (f = o / 20), m = l.textDecoration == "line-through" ? u + a.offsetY + l.offsetY - l.height / 2 : u + 1.5 * f + a.offsetY + l.offsetY, i.save(), i.beginPath(), l.fill ? i.strokeStyle = l.fill.toCSS() : this.style.fill && this.style.fill instanceof G && (i.strokeStyle = this.style.fill.toCSS()), i.lineWidth = u * f, i.moveTo(p, m), i.lineTo(p + l.width, m), i.stroke(), i.restore();
          }
          t && this.interactive && s.fillText(l.text, l.offsetX, a.offsetY + l.offsetY), l.fill && i.restore(), l.style && (i.restore(), s.restore());
        });
      }), i.restore(), s.restore();
    }
  }
  _addBounds(e) {
    if (this.visible && this.isMeasured) {
      const t = this._measure({ inactive: this.inactive, layer: this.getLayer() });
      S(e, { x: t.left, y: t.top }), S(e, { x: t.right, y: t.bottom });
    }
  }
  _ignoreFontWeight() {
    return /apple/i.test(navigator.vendor);
  }
  _measure(e) {
    const t = e.layer.context, i = this._renderer._ghostLayer.context, r = this.style.direction == "rtl";
    this._textInfo = [];
    const s = this.style.oversizedBehavior, a = this.style.maxWidth, n = H(a) && s == "truncate", l = H(a) && (s == "wrap" || s == "wrap-no-break");
    t.save(), i.save(), this._prerender(e, !0, this._ignoreFontWeight());
    const d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ", m = this.text.toString().replace(/\r/g, "").split(/\n/);
    let u, f = !0, o = 0, p = 0, h = 0;
    y(m, (_, v) => {
      let w;
      for (w = _ == "" ? [{ type: "value", text: "" }] : W.chunk(_, !1, this.style.ignoreFormatting); w.length > 0; ) {
        let g = { offsetY: h, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
        const x = this._measureText(d, t), M = x.actualBoundingBoxAscent + x.actualBoundingBoxDescent;
        let O;
        g.height = M, g.ascent = x.actualBoundingBoxAscent;
        let j, D, P, z = this.style.textDecoration, A = !1, I = !0, X = [];
        Ce(w, (B, ue) => {
          if (B.type == "format") if (B.text == "[/]") f || (t.restore(), i.restore(), f = !0), j = void 0, u = void 0, D = void 0, z = this.style.textDecoration, P = void 0, O = B.text;
          else {
            f || (t.restore(), i.restore());
            let k = W.getTextStyle(B.text);
            const F = this._getFontStyle(k);
            t.save(), i.save(), t.font = F, u = F, O = B.text, k.textDecoration && (z = k.textDecoration), k.fill && (j = k.fill), k.width && (D = R(k.width)), k.verticalAlign && (P = k.verticalAlign), f = !1;
            const Y = this._measureText(d, t), N = Y.actualBoundingBoxAscent + Y.actualBoundingBoxDescent;
            N > g.height && (g.height = N), Y.actualBoundingBoxAscent > g.ascent && (g.ascent = Y.actualBoundingBoxAscent);
          }
          else if (B.type == "value" && !A) {
            const k = this._measureText(B.text, t);
            let F = k.actualBoundingBoxLeft + k.actualBoundingBoxRight;
            if (n) {
              let U = I || this.style.breakWords || !1;
              const V = this.style.ellipsis || "", ze = this._measureText(V, t), nt = ze.actualBoundingBoxLeft + ze.actualBoundingBoxRight;
              if (g.width + F > a) {
                const ot = a - g.width - nt;
                B.text = this._truncateText(t, B.text, ot, U), B.text += V, A = !0;
              }
            } else if (l && g.width + F > a) {
              const U = a - g.width, V = this._truncateText(t, B.text, U, !1, I && this.style.oversizedBehavior != "wrap-no-break");
              if (V == "") return this.textVisible = !0, !1;
              X = w.slice(ue + 1), Pe(V) != Pe(B.text) && (X.unshift({ type: "value", text: B.text.substr(V.length) }), O && X.unshift({ type: "format", text: O })), B.text = Pe(V), w = [], A = !0;
            }
            let Y = 1, N = 1;
            if (u && D && D > F) {
              const U = F / D;
              switch (this.style.textAlign) {
                case "right":
                case "end":
                  Y = U;
                  break;
                case "center":
                  Y = U, N = U;
                  break;
                default:
                  N = U;
              }
              F = D;
            }
            const xe = k.actualBoundingBoxAscent + k.actualBoundingBoxDescent;
            xe > g.height && (g.height = xe), k.actualBoundingBoxAscent > g.ascent && (g.ascent = k.actualBoundingBoxAscent), g.width += F, g.left += k.actualBoundingBoxLeft / Y, g.right += k.actualBoundingBoxRight / N, g.textChunks.push({ style: u, fill: j, text: B.text, width: F, height: xe, left: k.actualBoundingBoxLeft, right: k.actualBoundingBoxRight, ascent: k.actualBoundingBoxAscent, offsetX: 0, offsetY: 0, textDecoration: z, verticalAlign: P }), I = !1;
          }
          return !0;
        }), this.style.lineHeight instanceof it ? (g.height *= this.style.lineHeight.value, g.ascent *= this.style.lineHeight.value) : (g.height *= this.style.lineHeight || 1.2, g.ascent *= this.style.lineHeight || 1.2), o < g.left && (o = g.left), p < g.right && (p = g.right), this._textInfo.push(g), h += g.height, w = X || [];
      }
    }), f || (t.restore(), i.restore()), y(this._textInfo, (_, v) => {
      let w = 0;
      y(_.textChunks, (g) => {
        if (g.offsetX = w + g.left - _.left, g.offsetY += _.height - _.height * (this.style.baselineRatio || 0.19), w += g.width, g.verticalAlign) switch (g.verticalAlign) {
          case "super":
            g.offsetY -= _.height / 2 - g.height / 2;
            break;
          case "sub":
            g.offsetY += g.height / 2;
        }
      });
    });
    const c = { left: r ? -p : -o, top: 0, right: r ? o : p, bottom: h };
    if (s !== "none") {
      const _ = this._fitRatio(c);
      if (_ < 1) if (s == "fit") H(this.style.minScale) && _ < this.style.minScale ? (this.textVisible = !1, c.left = 0, c.top = 0, c.right = 0, c.bottom = 0) : (this._originalScale && this._originalScale != 1 || (this._originalScale = this.scale), this.scale = _, this.textVisible = !0);
      else if (s == "hide") this.textVisible = !1, c.left = 0, c.top = 0, c.right = 0, c.bottom = 0;
      else {
        switch (this.style.textAlign) {
          case "right":
          case "end":
            c.left = -a, c.right = 0;
            break;
          case "center":
            c.left = -a / 2, c.right = a / 2;
            break;
          default:
            c.left = 0, c.right = a;
        }
        this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0;
      }
      else this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0;
    }
    return t.restore(), i.restore(), c;
  }
  _fitRatio(e) {
    const t = this.style.maxWidth, i = this.style.maxHeight;
    if (!H(t) && !H(i)) return 1;
    const r = e.right - e.left, s = e.bottom - e.top;
    return Math.min(t / r || 1, i / s || 1);
  }
  _truncateText(e, t, i, r = !1, s = !0) {
    let a;
    do {
      if (r) t = t.slice(0, -1);
      else {
        let l = t.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
        if (l != "" && l !== t || !s) {
          if (l == "") return t;
          t = l;
        } else r = !0;
      }
      const n = this._measureText(t, e);
      a = n.actualBoundingBoxLeft + n.actualBoundingBoxRight;
    } while (a > i && t != "");
    return t;
  }
  _measureText(e, t) {
    let i = t.measureText(e), r = {};
    if (i.actualBoundingBoxAscent == null) {
      const a = document.createElement("div");
      a.innerText = e, a.style.visibility = "hidden", a.style.position = "absolute", a.style.top = "-1000000px;", a.style.fontFamily = this.style.fontFamily || "", a.style.fontSize = this.style.fontSize + "", document.body.appendChild(a);
      const n = a.getBoundingClientRect();
      document.body.removeChild(a);
      const l = n.height, d = i.width;
      r = { actualBoundingBoxAscent: l, actualBoundingBoxDescent: 0, actualBoundingBoxLeft: 0, actualBoundingBoxRight: d, fontBoundingBoxAscent: l, fontBoundingBoxDescent: 0, width: d };
    } else r = { actualBoundingBoxAscent: i.actualBoundingBoxAscent, actualBoundingBoxDescent: i.actualBoundingBoxDescent, actualBoundingBoxLeft: i.actualBoundingBoxLeft, actualBoundingBoxRight: i.actualBoundingBoxRight, fontBoundingBoxAscent: i.actualBoundingBoxAscent, fontBoundingBoxDescent: i.actualBoundingBoxDescent, width: i.width };
    const s = i.width;
    switch (this.style.textAlign) {
      case "right":
      case "end":
        r.actualBoundingBoxLeft = s, r.actualBoundingBoxRight = 0;
        break;
      case "center":
        r.actualBoundingBoxLeft = s / 2, r.actualBoundingBoxRight = s / 2;
        break;
      default:
        r.actualBoundingBoxLeft = 0, r.actualBoundingBoxRight = s;
    }
    return r;
  }
}
class Pi {
  constructor() {
    Object.defineProperty(this, "fill", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fillOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textAlign", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontFamily", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontWeight", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontVariant", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textDecoration", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "lineHeight", { enumerable: !0, configurable: !0, writable: !0, value: Ke(120) }), Object.defineProperty(this, "baselineRatio", { enumerable: !0, configurable: !0, writable: !0, value: 0.19 }), Object.defineProperty(this, "direction", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textBaseline", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "oversizedBehavior", { enumerable: !0, configurable: !0, writable: !0, value: "none" }), Object.defineProperty(this, "breakWords", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "ellipsis", { enumerable: !0, configurable: !0, writable: !0, value: "…" }), Object.defineProperty(this, "maxWidth", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "maxHeight", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "minScale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "ignoreFormatting", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class Oi extends at {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textType", { enumerable: !0, configurable: !0, writable: !0, value: "circular" }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "startAngle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "inside", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "orientation", { enumerable: !0, configurable: !0, writable: !0, value: "auto" }), Object.defineProperty(this, "kerning", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_textReversed", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _render(e) {
    this.textType === "circular" ? this._renderCircular(e) : super._render(e);
  }
  _renderCircular(e) {
    if (this.textVisible) {
      this._prerender(e);
      const t = this._isInteractive(e), i = e.layer.context, r = e.layer.dirty, s = this._renderer._ghostLayer.context;
      i.save(), t && s.save(), this._textInfo || this._measure(e);
      let a = this.radius || 0, n = this.startAngle || 0, l = 0, d = this.orientation, m = d == "auto" ? "auto" : d == "inward";
      const u = this.inside, f = this.style.textAlign || "left", o = this.kerning || 0;
      let p = f == "left" ? 1 : -1;
      const h = !this._textReversed;
      if (m == "auto") {
        let c = 0, _ = 0;
        y(this._textInfo, (v, w) => {
          const g = n + v.width / (a - v.height) / 2 * -p;
          g > c && (c = g);
        }), _ = f == "left" ? (c + l / 2) * oe : f == "right" ? (c - l / 2) * oe : n * oe, _ = Lt(_), m = _ >= 270 || _ <= 90;
      }
      m == 1 && h && (this._textInfo.reverse(), this._textReversed = !0), y(this._textInfo, (c, _) => {
        const v = c.height;
        u || (a += v), (p == -1 && m || p == 1 && !m) && h && c.textChunks.reverse();
        let w = n;
        l = 0, f == "center" && (w += c.width / (a - v) / 2 * -p, l = w - n), w += Math.PI * (m ? 0 : 1), i.save(), t && s.save(), i.rotate(w), t && s.rotate(w);
        let g = 0;
        y(c.textChunks, (x, M) => {
          const O = x.text, j = x.width;
          g = j / 2 / (a - v) * p, i.rotate(g), t && s.rotate(g), x.style && (i.save(), s.save(), i.font = x.style, t && (s.font = x.style)), x.fill && (i.save(), i.fillStyle = x.fill.toCSS()), i.textBaseline = "middle", i.textAlign = "center", t && (s.textBaseline = "middle", s.textAlign = "center"), r && i.fillText(O, 0, (m ? 1 : -1) * (0 - a + v / 2)), t && s.fillText(O, 0, (m ? 1 : -1) * (0 - a + v / 2)), x.fill && i.restore(), x.style && (i.restore(), s.restore()), g = (j / 2 + o) / (a - v) * p, i.rotate(g), t && s.rotate(g);
        }), i.restore(), t && s.restore(), u && (a -= v);
      }), i.restore(), t && s.restore();
    }
  }
  _measure(e) {
    return this.textType === "circular" ? this._measureCircular(e) : super._measure(e);
  }
  _measureCircular(e) {
    const t = e.layer.context, i = this._renderer._ghostLayer.context, r = this.style.direction == "rtl", s = this.style.oversizedBehavior, a = this.style.maxWidth, n = H(a) && s == "truncate", l = this.style.ellipsis || "";
    let d;
    this.textVisible = !0, this._textInfo = [], this._textReversed = !1, t.save(), i.save(), this._prerender(e, !0);
    const m = this.text.toString().replace(/\r/g, "").split(/\n/);
    let u = !0, f = 0, o = 0;
    return y(m, (p, h) => {
      let c, _, v, w = W.chunk(p, !1, this.style.ignoreFormatting), g = { offsetY: o, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
      y(w, (x, M) => {
        if (x.type == "format") {
          if (x.text == "[/]") u || (t.restore(), i.restore(), u = !0), _ = void 0, c = void 0, v = void 0;
          else {
            let O = W.getTextStyle(x.text);
            const j = this._getFontStyle(O);
            t.save(), i.save(), t.font = j, c = j, O.fill && (_ = O.fill), O.width && (v = R(O.width)), u = !1;
          }
          n && (d = this._measureText(l, t));
        } else if (x.type == "value") {
          let O = x.text.match(/./gu) || [];
          r && (O = zt(x.text), O.reverse());
          for (let j = 0; j < O.length; j++) {
            const D = O[j], P = this._measureText(D, t);
            let z = P.width;
            c && v && v > z && (z = v);
            const A = P.actualBoundingBoxAscent + P.actualBoundingBoxDescent;
            if (A > g.height && (g.height = A), P.actualBoundingBoxAscent > g.ascent && (g.ascent = P.actualBoundingBoxAscent), f += z, n) {
              d || (d = this._measureText(l, t));
              const I = d.actualBoundingBoxLeft + d.actualBoundingBoxRight;
              if (f + I > a) {
                g.textChunks.length == 1 ? this.textVisible = !1 : (g.width += I, g.left += d.actualBoundingBoxLeft, g.right += d.actualBoundingBoxRight, g.textChunks.push({ style: c, fill: _, text: l, width: I, height: A + d.actualBoundingBoxDescent, left: d.actualBoundingBoxLeft, right: d.actualBoundingBoxRight, ascent: d.actualBoundingBoxAscent, offsetX: 0, offsetY: A, textDecoration: void 0 }));
                break;
              }
            }
            g.width += z, g.left += P.actualBoundingBoxLeft, g.right += P.actualBoundingBoxRight, g.textChunks.push({ style: c, fill: _, text: D, width: z, height: A + P.actualBoundingBoxDescent, left: P.actualBoundingBoxLeft, right: P.actualBoundingBoxRight, ascent: P.actualBoundingBoxAscent, offsetX: 0, offsetY: A, textDecoration: void 0 });
          }
        }
      }), this.style.lineHeight instanceof it ? g.height *= this.style.lineHeight.value : g.height *= this.style.lineHeight || 1.2, this._textInfo.push(g), o += g.height;
    }), u || (t.restore(), i.restore()), s == "hide" && f > a && (this.textVisible = !1), y(this._textInfo, (p) => {
      y(p.textChunks, (h) => {
        h.offsetY += Math.round((p.height - h.height + (p.ascent - h.ascent)) / 2);
      });
    }), t.restore(), i.restore(), { left: 0, top: 0, right: 0, bottom: 0 };
  }
}
class ki extends we {
  constructor(e, t) {
    super(e), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "image", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_imageMask", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.image = t;
  }
  _dispose() {
    super._dispose(), this._imageMask && ne(this._imageMask);
  }
  getLocalBounds() {
    if (!this._localBounds) {
      let e = 0, t = 0;
      this.width && (e = this.width), this.height && (t = this.height), this._localBounds = { left: 0, top: 0, right: e, bottom: t }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  _render(e) {
    if (super._render(e), this.image) {
      if (this.tainted === void 0 && (this.tainted = Ne(this.image), e.layer.tainted = !0), this.tainted && this._renderer._omitTainted) return;
      if (e.layer.dirty) {
        this.shadowColor && (e.layer.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1)), this.shadowBlur && (e.layer.context.shadowBlur = this.shadowBlur), this.shadowOffsetX && (e.layer.context.shadowOffsetX = this.shadowOffsetX), this.shadowOffsetY && (e.layer.context.shadowOffsetY = this.shadowOffsetY);
        const t = this.width || this.image.naturalWidth, i = this.height || this.image.naturalHeight;
        e.layer.context.drawImage(this.image, 0, 0, t, i);
      }
      if (this.interactive && this._isInteractive(e)) {
        const t = this._getMask(this.image);
        this._renderer._ghostLayer.context.drawImage(t, 0, 0);
      }
    }
  }
  clear() {
    super.clear(), this.image = void 0, this._imageMask = void 0;
  }
  _getMask(e) {
    if (this._imageMask === void 0) {
      const t = this.width || e.naturalWidth, i = this.height || e.naturalHeight, r = document.createElement("canvas");
      r.width = t, r.height = i;
      const s = r.getContext("2d");
      s.imageSmoothingEnabled = !1, s.fillStyle = this._getColorId(), s.fillRect(0, 0, t, i), Ne(e) || (s.globalCompositeOperation = "destination-in", s.drawImage(e, 0, 0, t, i)), this._imageMask = r;
    }
    return this._imageMask;
  }
}
class Mi {
  constructor(e, t, i, r) {
    Object.defineProperty(this, "event", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "originalPoint", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "point", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "bbox", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "simulated", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "native", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), pe("touchevents") && e instanceof Touch ? this.id = e.identifier : this.id = null;
  }
}
class Si extends Tt {
  constructor(e) {
    if (super(), Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("div") }), Object.defineProperty(this, "_layerDom", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("div") }), Object.defineProperty(this, "layers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_dirtyLayers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "defaultLayer", { enumerable: !0, configurable: !0, writable: !0, value: this.getLayer(0) }), Object.defineProperty(this, "_ghostLayer", { enumerable: !0, configurable: !0, writable: !0, value: new ji() }), Object.defineProperty(this, "_patternCanvas", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("canvas") }), Object.defineProperty(this, "_patternContext", { enumerable: !0, configurable: !0, writable: !0, value: this._patternCanvas.getContext("2d") }), Object.defineProperty(this, "_realWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_realHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_calculatedWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_calculatedHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "resolution", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "interactionsEnabled", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_listeners", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_events", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_colorId", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_colorMap", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_forceInteractive", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_omitTainted", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_hovering", { enumerable: !0, configurable: !0, writable: !0, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "_dragging", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_mousedown", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_lastPointerMoveEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tapToActivate", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "tapToActivateTimeout", { enumerable: !0, configurable: !0, writable: !0, value: 3e3 }), Object.defineProperty(this, "_touchActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_touchActiveTimeout", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.resolution = e ?? window.devicePixelRatio, this.view.style.position = "absolute", this.view.setAttribute("aria-hidden", "true"), this.view.appendChild(this._layerDom), this._disposers.push(new $(() => {
      he(this._events, (t, i) => {
        i.disposer.dispose();
      }), y(this.layers, (t) => {
        ne(t.view), t.exportableView && ne(t.exportableView);
      }), ne(this._ghostLayer.view), ne(this._patternCanvas);
    })), this._disposers.push(Qe(() => {
      e == null && (this.resolution = window.devicePixelRatio);
    })), pe("touchevents")) {
      const t = (i) => {
        this._dragging.length !== 0 && Ce(this._dragging, (r) => !r.value.shouldCancelTouch() || (i.preventDefault(), !1)), this._touchActiveTimeout && this._delayTouchDeactivate();
      };
      this._disposers.push(C(window, "touchstart", t, { passive: !1 })), this._disposers.push(C(this.view, "touchstart", t, { passive: !1 })), this._disposers.push(C(this.view, "touchmove", () => {
        this._touchActiveTimeout && this._delayTouchDeactivate();
      }, { passive: !0 })), this._disposers.push(C(window, "click", (i) => {
        this._touchActive = !1;
      }, { passive: !0 })), this._disposers.push(C(this.view, "click", (i) => {
        window.setTimeout(() => {
          this._touchActive = !0, this._delayTouchDeactivate();
        }, 100);
      }, { passive: !0 }));
    }
    pe("wheelevents") && this._disposers.push(C(this.view, "wheel", (t) => {
      let i = !1;
      this._hovering.forEach((r) => {
        if (r.wheelable) return i = !0, !1;
      }), i && t.preventDefault();
    }, { passive: !1 }));
  }
  resetImageArray() {
    this._ghostLayer.imageArray = void 0;
  }
  _delayTouchDeactivate() {
    this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout), this.tapToActivateTimeout > 0 && (this._touchActiveTimeout = window.setTimeout(() => {
      this._touchActive = !1;
    }, this.tapToActivateTimeout));
  }
  get debugGhostView() {
    return !!this._ghostLayer.view.parentNode;
  }
  set debugGhostView(e) {
    e ? this._ghostLayer.view.parentNode || this.view.appendChild(this._ghostLayer.view) : this._ghostLayer.view.parentNode && this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view);
  }
  createLinearGradient(e, t, i, r) {
    return this.defaultLayer.context.createLinearGradient(e, t, i, r);
  }
  createRadialGradient(e, t, i, r, s, a) {
    return this.defaultLayer.context.createRadialGradient(e, t, i, r, s, a);
  }
  createPattern(e, t, i, r, s) {
    return this._patternCanvas.width = r, this._patternCanvas.height = s, this._patternContext.clearRect(0, 0, r, s), t.renderDetached(this._patternContext), e.renderDetached(this._patternContext), this._patternContext.createPattern(this._patternCanvas, i);
  }
  makeContainer() {
    return new si(this);
  }
  makeGraphics() {
    return new xi(this);
  }
  makeText(e, t) {
    return new at(this, e, t);
  }
  makeTextStyle() {
    return new Pi();
  }
  makeRadialText(e, t) {
    return new Oi(this, e, t);
  }
  makePicture(e) {
    return new ki(this, e);
  }
  resizeLayer(e) {
    e.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resizeGhost() {
    this._ghostLayer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resize(e, t, i, r) {
    this._realWidth = e, this._realHeight = t, this._calculatedWidth = i, this._calculatedHeight = r, y(this.layers, (s) => {
      s && (s.dirty = !0, this.resizeLayer(s));
    }), this.resizeGhost(), this.view.style.width = i + "px", this.view.style.height = r + "px";
  }
  createDetachedLayer(e = !1) {
    const t = document.createElement("canvas"), i = t.getContext("2d", { willReadFrequently: e }), r = new Ei(t, i);
    return t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", r;
  }
  getLayerByOrder(e) {
    const t = this.layers, i = t.length;
    for (let r = 0; r < i; r++) {
      const s = t[r];
      if (s.order == e) return s;
    }
  }
  getLayer(e, t = !0) {
    let i = this.getLayerByOrder(e);
    if (i) return i;
    const r = this.createDetachedLayer(e == 99);
    r.order = e, r.visible = t, r.view.className = "am5-layer-" + e, r.visible && this.resizeLayer(r);
    const s = this.layers;
    s.push(r), s.sort((l, d) => l.order > d.order ? 1 : l.order < d.order ? -1 : 0);
    const a = s.length;
    let n;
    for (let l = Bt(s, r) + 1; l < a; l++) if (s[l].visible) {
      n = s[l];
      break;
    }
    return r.visible && (n === void 0 ? this._layerDom.appendChild(r.view) : this._layerDom.insertBefore(r.view, n.view)), r;
  }
  render(e) {
    if (this._dirtyLayers.length = 0, y(this.layers, (t) => {
      t && t.dirty && t.visible && (this._dirtyLayers.push(t), t.clear());
    }), this._ghostLayer.clear(), e.render({ inactive: null, layer: this.defaultLayer }), this._ghostLayer.context.restore(), y(this.layers, (t) => {
      if (t) {
        const i = t.context;
        i.beginPath(), i.moveTo(0, 0), i.stroke();
      }
    }), y(this._dirtyLayers, (t) => {
      t.context.restore(), t.dirty = !1;
    }), this._hovering.size && this._lastPointerMoveEvent) {
      const { events: t, target: i, native: r } = this._lastPointerMoveEvent;
      y(t, (s) => {
        this._dispatchGlobalMousemove(s, i, r);
      });
    }
  }
  paintId(e) {
    const t = ti(++this._colorId), i = G.fromHex(t).toCSS();
    return this._colorMap[i] = e, i;
  }
  _removeObject(e) {
    e._colorId !== void 0 && delete this._colorMap[e._colorId];
  }
  _adjustBoundingBox(e) {
    const t = this._ghostLayer.margin;
    return new DOMRect(-t.left, -t.top, e.width + t.left + t.right, e.height + t.top + t.bottom);
  }
  getEvent(e, t = !0) {
    const i = this.view.getBoundingClientRect(), r = e.clientX || 0, s = e.clientY || 0, a = this._calculatedWidth / this._realWidth, n = this._calculatedHeight / this._realHeight, l = { x: r - i.left, y: s - i.top }, d = { x: (r - (t ? i.left : 0)) * a, y: (s - (t ? i.top : 0)) * n };
    return new Mi(e, l, d, this._adjustBoundingBox(i));
  }
  _getHitTarget(e, t, i) {
    if (t.width === 0 || t.height === 0 || e.x < t.left || e.x > t.right || e.y < t.top || e.y > t.bottom || !i || !this._layerDom.contains(i)) return;
    const r = this._ghostLayer.getImageData(e, t);
    if (r.data[0] === 0 && r.data[1] === 0 && r.data[2] === 0) return !1;
    const s = G.fromRGB(r.data[0], r.data[1], r.data[2]).toCSS();
    return this._colorMap[s];
  }
  getObjectAtPoint(e) {
    const t = this._ghostLayer.getImageArray(e);
    if (t[0] === 0 && t[1] === 0 && t[2] === 0) return;
    const i = G.fromRGB(t[0], t[1], t[2]).toCSS();
    return this._colorMap[i];
  }
  _withEvents(e, t) {
    const i = this._events[e];
    if (i !== void 0) {
      i.dispatching = !0;
      try {
        t(i);
      } finally {
        i.dispatching = !1, i.cleanup && (i.cleanup = !1, ye(i.callbacks, (r) => !r.disposed), i.callbacks.length === 0 && (i.disposer.dispose(), delete this._events[e]));
      }
    }
  }
  _dispatchEventAll(e, t) {
    this.interactionsEnabled && this._withEvents(e, (i) => {
      y(i.callbacks, (r) => {
        r.disposed || r.callback.call(r.context, t);
      });
    });
  }
  _dispatchEvent(e, t, i) {
    if (!this.interactionsEnabled) return !1;
    let r = !1;
    return this._withEvents(e, (s) => {
      y(s.callbacks, (a) => {
        a.disposed || a.object !== t || (a.callback.call(a.context, i), r = !0);
      });
    }), r;
  }
  _dispatchMousedown(e, t) {
    const i = e.button;
    if (i != 0 && i != 2 && i != 1 && i !== void 0) return;
    const r = this.getEvent(e), s = this._getHitTarget(r.originalPoint, r.bbox, t);
    if (s) {
      const a = r.id;
      let n = !1;
      ge(s, (l) => {
        const d = { id: a, value: l };
        return this._mousedown.push(d), !n && this._dispatchEvent("pointerdown", l, r) && (n = !0, this._dragging.some((m) => m.value === l && m.id === a) || this._dragging.push(d)), !0;
      });
    }
  }
  _dispatchGlobalMousemove(e, t, i) {
    const r = this.getEvent(e), s = this._getHitTarget(r.originalPoint, r.bbox, t);
    r.native = i, s ? (this._hovering.forEach((a) => {
      a.contains(s) || (this._hovering.delete(a), a.cursorOverStyle && fe(document.body, "cursor", a._replacedCursorStyle), this._dispatchEvent("pointerout", a, r));
    }), r.native && ge(s, (a) => (this._hovering.has(a) || (this._hovering.add(a), a.cursorOverStyle && (a._replacedCursorStyle = Ft(document.body, "cursor"), fe(document.body, "cursor", a.cursorOverStyle)), this._dispatchEvent("pointerover", a, r)), !0))) : (this._hovering.forEach((a) => {
      a.cursorOverStyle && fe(document.body, "cursor", a._replacedCursorStyle), this._dispatchEvent("pointerout", a, r);
    }), this._hovering.clear()), this._dispatchEventAll("globalpointermove", r);
  }
  removeHovering(e) {
    this._hovering.delete(e), e.cursorOverStyle && fe(document.body, "cursor", e._replacedCursorStyle);
  }
  _dispatchGlobalMouseup(e, t) {
    const i = this.getEvent(e);
    i.native = t, this._dispatchEventAll("globalpointerup", i);
  }
  _dispatchDragMove(e) {
    if (this._dragging.length !== 0) {
      const t = this.getEvent(e), i = t.id;
      this._dragging.forEach((r) => {
        r.id === i && this._dispatchEvent("pointermove", r.value, t);
      });
    }
  }
  _dispatchDragEnd(e, t) {
    const i = e.button;
    let r;
    if (i == 0 || i === void 0) r = "click";
    else if (i == 2) r = "rightclick";
    else {
      if (i != 1) return;
      r = "middleclick";
    }
    const s = this.getEvent(e), a = s.id;
    if (this._mousedown.length !== 0) {
      const n = this._getHitTarget(s.originalPoint, s.bbox, t);
      n && this._mousedown.forEach((l) => {
        l.id === a && l.value.contains(n) && this._dispatchEvent(r, l.value, s);
      }), this._mousedown.length = 0;
    }
    this._dragging.length !== 0 && (this._dragging.forEach((n) => {
      n.id === a && this._dispatchEvent("pointerup", n.value, s);
    }), this._dragging.length = 0);
  }
  _dispatchDoubleClick(e, t) {
    const i = this.getEvent(e), r = this._getHitTarget(i.originalPoint, i.bbox, t);
    r && ge(r, (s) => !this._dispatchEvent("dblclick", s, i));
  }
  _dispatchWheel(e, t) {
    const i = this.getEvent(e), r = this._getHitTarget(i.originalPoint, i.bbox, t);
    r && ge(r, (s) => !this._dispatchEvent("wheel", s, i));
  }
  _makeSharedEvent(e, t) {
    if (this._listeners[e] === void 0) {
      const i = t();
      this._listeners[e] = new Ct(() => {
        delete this._listeners[e], i.dispose();
      });
    }
    return this._listeners[e].increment();
  }
  _onPointerEvent(e, t) {
    let i = !1, r = null;
    function s() {
      r = null, i = !1;
    }
    return new Ue([new $(() => {
      r !== null && clearTimeout(r), s();
    }), C(this.view, Te(e), (a) => {
      i = !0, r !== null && clearTimeout(r), r = window.setTimeout(s, 0);
    }), ii(window, e, (a, n) => {
      r !== null && (clearTimeout(r), r = null), t(a, n, i), i = !1;
    })]);
  }
  _initEvent(e) {
    switch (e) {
      case "globalpointermove":
      case "pointerover":
      case "pointerout":
        return this._makeSharedEvent("pointermove", () => {
          const t = (i, r, s) => {
            this._lastPointerMoveEvent = { events: i, target: r, native: s }, y(i, (a) => {
              this._dispatchGlobalMousemove(a, r, s);
            });
          };
          return new Ue([this._onPointerEvent("pointerdown", t), this._onPointerEvent("pointermove", t)]);
        });
      case "globalpointerup":
        return this._makeSharedEvent("pointerup", () => {
          const t = this._onPointerEvent("pointerup", (r, s, a) => {
            y(r, (n) => {
              this._dispatchGlobalMouseup(n, a);
            }), this._lastPointerMoveEvent = { events: r, target: s, native: a };
          }), i = this._onPointerEvent("pointercancel", (r, s, a) => {
            y(r, (n) => {
              this._dispatchGlobalMouseup(n, a);
            }), this._lastPointerMoveEvent = { events: r, target: s, native: a };
          });
          return new $(() => {
            t.dispose(), i.dispose();
          });
        });
      case "click":
      case "rightclick":
      case "middleclick":
      case "pointerdown":
      case "pointermove":
      case "pointerup":
        return this._makeSharedEvent("pointerdown", () => {
          const t = this._onPointerEvent("pointerdown", (a, n) => {
            y(a, (l) => {
              this._dispatchMousedown(l, n);
            });
          }), i = this._onPointerEvent("pointermove", (a) => {
            y(a, (n) => {
              this._dispatchDragMove(n);
            });
          }), r = this._onPointerEvent("pointerup", (a, n) => {
            y(a, (l) => {
              this._dispatchDragEnd(l, n);
            });
          }), s = this._onPointerEvent("pointercancel", (a, n) => {
            y(a, (l) => {
              this._dispatchDragEnd(l, n);
            });
          });
          return new $(() => {
            t.dispose(), i.dispose(), r.dispose(), s.dispose();
          });
        });
      case "dblclick":
        return this._makeSharedEvent("dblclick", () => this._onPointerEvent("dblclick", (t, i) => {
          y(t, (r) => {
            this._dispatchDoubleClick(r, i);
          });
        }));
      case "wheel":
        return this._makeSharedEvent("wheel", () => C(this.view, Te("wheel"), (t) => {
          this._dispatchWheel(t, tt(t));
        }, { passive: !1 }));
    }
  }
  _addEvent(e, t, i, r) {
    let s = this._events[t];
    s === void 0 && (s = this._events[t] = { disposer: this._initEvent(t), callbacks: [], dispatching: !1, cleanup: !1 });
    const a = { object: e, context: r, callback: i, disposed: !1 };
    return s.callbacks.push(a), new $(() => {
      a.disposed = !0, s.dispatching ? s.cleanup = !0 : (Be(s.callbacks, a), s.callbacks.length === 0 && (s.disposer.dispose(), delete this._events[t]));
    });
  }
  getCanvas(e, t) {
    this.render(e), t || (t = {});
    let i = this.resolution, r = Math.floor(this._calculatedWidth * this.resolution), s = Math.floor(this._calculatedHeight * this.resolution);
    if (t.minWidth && t.minWidth > r) {
      let o = t.minWidth / r;
      o > i && (i = o * this.resolution);
    }
    if (t.minHeight && t.minHeight > s) {
      let o = t.minHeight / s;
      o > i && (i = o * this.resolution);
    }
    if (t.maxWidth && t.maxWidth < r) {
      let o = t.maxWidth / r;
      o < i && (i = o * this.resolution);
    }
    if (t.maxHeight && t.maxHeight > s) {
      let o = t.maxHeight / s;
      o < i && (i = o * this.resolution);
    }
    t.maintainPixelRatio && (i /= this.resolution);
    const a = [];
    let n = !1;
    const l = document.createElement("canvas");
    i != this.resolution && (n = !0, r = r * i / this.resolution, s = s * i / this.resolution), l.width = r, l.height = s, l.style.position = "fixed", l.style.top = "-10000px", this.view.appendChild(l), a.push(l);
    const d = l.getContext("2d");
    let m = 0, u = 0, f = !1;
    return y(this.layers, (o) => {
      if (o && o.visible && (o.tainted || n)) {
        f = !0, o.exportableView = o.view, o.exportableContext = o.context, o.view = document.createElement("canvas"), o.view.style.position = "fixed", o.view.style.top = "-10000px", this.view.appendChild(o.view), a.push(o.view);
        let p = 0, h = 0;
        o.margin && (p += o.margin.left || 0 + o.margin.right || 0, h += o.margin.top || 0 + o.margin.bottom || 0), o.view.width = r + p, o.view.height = s + h, o.context = o.view.getContext("2d"), o.dirty = !0, o.scale = i;
      }
    }), f && (this._omitTainted = !0, this.render(e), this._omitTainted = !1), y(this.layers, (o) => {
      if (o && o.visible) {
        let p = 0, h = 0;
        o.margin && (p = -(o.margin.left || 0) * this.resolution, h = -(o.margin.top || 0) * this.resolution), d.drawImage(o.view, p, h), o.exportableView && (o.view = o.exportableView, o.exportableView = void 0), o.exportableContext && (o.context = o.exportableContext, o.exportableContext = void 0), m < o.view.clientWidth && (m = o.view.clientWidth), u < o.view.clientHeight && (u = o.view.clientHeight), o.scale = void 0;
      }
    }), l.style.width = m + "px", l.style.height = u + "px", y(a, (o) => {
      o.style.position = "", o.style.top = "", this.view.removeChild(o);
    }), l;
  }
}
class ji {
  constructor() {
    Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "context", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "margin", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_resolution", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_width", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_height", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "imageArray", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.view = document.createElement("canvas"), this.context = this.view.getContext("2d", { alpha: !1, willReadFrequently: !0 }), this.context.imageSmoothingEnabled = !1, this.view.style.position = "absolute", this.view.style.top = "0px", this.view.style.left = "0px";
  }
  resize(e, t, i, r, s) {
    this._resolution = s, e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, r += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px", this._width = Math.floor(e * s), this._height = Math.floor(t * s), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = r + "px";
  }
  getImageData(e, t) {
    return this.context.getImageData(Math.round((e.x - t.left) / t.width * this._width), Math.round((e.y - t.top) / t.height * this._height), 1, 1);
  }
  getImageArray(e) {
    this.imageArray || (this.imageArray = this.context.getImageData(0, 0, this._width, this._height).data);
    const t = this.imageArray, i = Math.round(e.x * this._resolution), r = 4 * (Math.round(e.y * this._resolution) * this._width + i);
    return [t[r], t[r + 1], t[r + 2], t[r + 3]];
  }
  setMargin(e) {
    this.margin.left = 0, this.margin.right = 0, this.margin.top = 0, this.margin.bottom = 0, y(e, (t) => {
      t.margin && (this.margin.left = Math.max(this.margin.left, t.margin.left), this.margin.right = Math.max(this.margin.right, t.margin.right), this.margin.top = Math.max(this.margin.top, t.margin.top), this.margin.bottom = Math.max(this.margin.bottom, t.margin.bottom));
    });
  }
  clear() {
    this.context.save(), this.context.fillStyle = "#000", this.context.fillRect(0, 0, this._width, this._height);
  }
}
class Ei {
  constructor(e, t) {
    Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "context", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "margin", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "order", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "visible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "scale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "dirty", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "exportableView", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "exportableContext", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_width", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_height", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), this.view = e, this.context = t;
  }
  resize(e, t, i, r, s) {
    this.width != null && (e = this.width, i = this.width), this.height != null && (t = this.height, r = this.height), this.margin ? (e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, r += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px") : (this.view.style.left = "0px", this.view.style.top = "0px"), this._width = Math.floor(e * s), this._height = Math.floor(t * s), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = r + "px";
  }
  clear() {
    this.context.save(), this.context.clearRect(0, 0, this._width, this._height);
  }
}
function Ze(b, e) {
  b == null ? requestAnimationFrame(e) : setTimeout(() => {
    requestAnimationFrame(e);
  }, 1e3 / b);
}
class Ae {
  constructor(e, t = {}, i) {
    if (Object.defineProperty(this, "dom", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_inner", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDirtyParents", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDirtyAnimation", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dirty", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyParents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyBounds", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyPositions", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_ticker", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_tickers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_updateTick", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new ut() }), Object.defineProperty(this, "animationTime", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_animations", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_renderer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rootContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tooltipContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipContainerSettings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltip", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "language", { enumerable: !0, configurable: !0, writable: !0, value: Nt.new(this, {}) }), Object.defineProperty(this, "locale", { enumerable: !0, configurable: !0, writable: !0, value: st }), Object.defineProperty(this, "utc", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "timezone", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fps", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "numberFormatter", { enumerable: !0, configurable: !0, writable: !0, value: Vt.new(this, {}) }), Object.defineProperty(this, "dateFormatter", { enumerable: !0, configurable: !0, writable: !0, value: Gt.new(this, {}) }), Object.defineProperty(this, "durationFormatter", { enumerable: !0, configurable: !0, writable: !0, value: Xt.new(this, {}) }), Object.defineProperty(this, "tabindex", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_tabindexes", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_a11yD", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_focusElementDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_focusElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_focusedSprite", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isShift", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_keyboardDragPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_readerAlertElement", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_logo", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipDiv", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "nonce", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "interfaceColors", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "verticalLayout", { enumerable: !0, configurable: !0, writable: !0, value: ct.new(this, {}) }), Object.defineProperty(this, "horizontalLayout", { enumerable: !0, configurable: !0, writable: !0, value: dt.new(this, {}) }), Object.defineProperty(this, "gridLayout", { enumerable: !0, configurable: !0, writable: !0, value: bt.new(this, {}) }), Object.defineProperty(this, "_paused", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "autoResize", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_fontHash", { enumerable: !0, configurable: !0, writable: !0, value: "" }), Object.defineProperty(this, "_isDisposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_resizeSensorDisposer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltips", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_htmlElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_htmlEnabledContainers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), !i) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    let r, s;
    if (this._settings = t, t.accessible == 0 && (this._a11yD = !0), t.useSafeResolution == null && (t.useSafeResolution = !0), t.useSafeResolution && (r = ft()), this._renderer = new Si(r), s = e instanceof HTMLElement ? e : document.getElementById(e), y(te.rootElements, (l) => {
      if (l.dom === s) throw new Error("You cannot have multiple Roots on the same DOM node");
    }), this.interfaceColors = me.new(this, {}), s === null) throw new Error("Could not find HTML element with id `" + e + "`");
    this.dom = s;
    let a = document.createElement("div");
    a.style.position = "relative", a.style.width = "100%", a.style.height = "100%", s.appendChild(a);
    const n = t.tooltipContainerBounds;
    n && (this._tooltipContainerSettings = n), this._inner = a, this._updateComputedStyles(), te.rootElements.push(this);
  }
  static new(e, t) {
    const i = new Ae(e, t, !0);
    return i._init(), i;
  }
  moveDOM(e) {
    let t;
    if (t = e instanceof HTMLElement ? e : document.getElementById(e), t) {
      for (; this.dom.childNodes.length > 0; ) t.appendChild(this.dom.childNodes[0]);
      this.dom = t, this._initResizeSensor(), this.resize();
    }
  }
  _handleLogo() {
    if (this._logo) {
      const e = this.dom.offsetWidth, t = this.dom.offsetHeight;
      e <= 150 || t <= 60 ? this._logo.hide() : this._logo.show();
    }
  }
  _showBranding() {
    if (!this._logo) {
      const e = this.tooltipContainer.children.push(q.new(this, { interactive: !0, interactiveChildren: !1, position: "absolute", setStateOnChildren: !0, paddingTop: 9, paddingRight: 9, paddingBottom: 9, paddingLeft: 9, scale: 0.6, y: Ke(100), centerY: Z, tooltipText: "Created using amCharts 5", tooltipX: Z, cursorOverStyle: "pointer", background: gt.new(this, { fill: ie(4671320), fillOpacity: 0, tooltipY: 5 }) })), t = Ve.new(this, { pointerOrientation: "horizontal", paddingTop: 4, paddingRight: 7, paddingBottom: 4, paddingLeft: 7 });
      t.label.setAll({ fontSize: 12 }), t.get("background").setAll({ fill: this.interfaceColors.get("background"), stroke: this.interfaceColors.get("grid"), strokeOpacity: 0.3 }), e.set("tooltip", t), e.events.on("click", () => {
        window.open("https://www.amcharts.com/", "_blank");
      }), e.states.create("hover", {}), e.children.push(Fe.new(this, { stroke: ie(13421772), strokeWidth: 3, svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6" })).states.create("hover", { stroke: ie(3976191) }), e.children.push(Fe.new(this, { stroke: ie(8947848), strokeWidth: 3, svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0" })).states.create("hover", { stroke: ie(4671320) }), this._logo = e, this._handleLogo();
    }
  }
  _getRealSize() {
    return this.dom.getBoundingClientRect();
  }
  _getCalculatedSize(e) {
    return this._settings.calculateSize ? this._settings.calculateSize(e) : { width: e.width, height: e.height };
  }
  _init() {
    const e = this._settings;
    e.accessible !== !1 && (e.focusable && (this._inner.setAttribute("focusable", "true"), this._inner.setAttribute("tabindex", this.tabindex + "")), e.ariaLabel && this._inner.setAttribute("aria-label", e.ariaLabel), e.role && this._inner.setAttribute("role", e.role));
    const t = this._renderer, i = this._getRealSize(), r = this._getCalculatedSize(i), s = Math.floor(r.width), a = Math.floor(r.height), n = Math.floor(i.width), l = Math.floor(i.height), d = q.new(this, { visible: !0, width: s, height: a });
    this._rootContainer = d, this._rootContainer._defaultThemes.push(Ht.new(this));
    const m = d.children.push(q.new(this, { visible: !0, width: Z, height: Z }));
    this.container = m, t.resize(n, l, s, a), this._inner.appendChild(t.view), this._initResizeSensor();
    const u = document.createElement("div");
    if (this._htmlElementContainer = u, u.className = "am5-html-container", u.style.position = "absolute", u.style.pointerEvents = "none", this._tooltipContainerSettings || (u.style.overflow = "hidden"), this._inner.appendChild(u), this._a11yD !== !0) {
      const f = document.createElement("div");
      f.className = "am5-reader-container", f.setAttribute("role", "alert"), f.style.position = "absolute", f.style.width = "1px", f.style.height = "1px", f.style.overflow = "hidden", f.style.clip = "rect(1px, 1px, 1px, 1px)", this._readerAlertElement = f, this._inner.appendChild(this._readerAlertElement);
      const o = document.createElement("div");
      o.className = "am5-focus-container", o.style.position = "absolute", o.style.pointerEvents = "none", o.style.top = "0px", o.style.left = "0px", o.style.overflow = "hidden", o.style.width = s + "px", o.style.height = a + "px", o.setAttribute("role", "graphics-document"), J(o, !1), this._focusElementContainer = o, this._inner.appendChild(this._focusElementContainer);
      const p = document.createElement("div");
      this._tooltipElementContainer = p, p.className = "am5-tooltip-container", this._inner.appendChild(p), pe("keyboardevents") && (this._disposers.push(C(window, "keydown", (h) => {
        const c = ce(h);
        c == "Shift" ? this._isShift = !0 : c == "Tab" && (this._isShift = h.shiftKey);
      })), this._disposers.push(C(window, "keyup", (h) => {
        ce(h) == "Shift" && (this._isShift = !1);
      })), this._disposers.push(C(o, "click", () => {
        const h = this._focusedSprite;
        if (h) {
          const c = t.getEvent(new MouseEvent("click"));
          h.events.dispatch("click", { type: "click", originalEvent: c.event, point: c.point, simulated: !0, target: h });
        }
      })), this._disposers.push(C(o, "keydown", (h) => {
        const c = this._focusedSprite;
        if (c) {
          h.key == "Escape" && (mt(), this._focusedSprite = void 0);
          let _ = 0, v = 0;
          const w = ce(h);
          switch (w) {
            case "Enter":
            case " ":
              if (w == " " && c.get("role") != "checkbox") return;
              h.preventDefault();
              const g = t.getEvent(new MouseEvent("mouse"));
              return void c.events.dispatch("click", { type: "click", originalEvent: g.event, point: g.point, simulated: !0, target: c });
            case "ArrowLeft":
              _ = -6;
              break;
            case "ArrowRight":
              _ = 6;
              break;
            case "ArrowUp":
              v = -6;
              break;
            case "ArrowDown":
              v = 6;
              break;
            default:
              return;
          }
          if (_ != 0 || v != 0) {
            if (h.preventDefault(), !c.isDragging()) {
              this._keyboardDragPoint = { x: 0, y: 0 };
              const M = t.getEvent(new MouseEvent("mousedown", { clientX: 0, clientY: 0 }));
              c.events.isEnabled("pointerdown") && c.events.dispatch("pointerdown", { type: "pointerdown", originalEvent: M.event, point: M.point, simulated: !0, target: c });
            }
            const g = this._keyboardDragPoint;
            g.x += _, g.y += v;
            const x = t.getEvent(new MouseEvent("mousemove", { clientX: g.x, clientY: g.y }), !1);
            c.events.isEnabled("globalpointermove") && c.events.dispatch("globalpointermove", { type: "globalpointermove", originalEvent: x.event, point: x.point, simulated: !0, target: c });
          }
        }
      })), this._disposers.push(C(o, "keyup", (h) => {
        if (this._focusedSprite) {
          const c = this._focusedSprite, _ = ce(h);
          switch (_) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowTop":
            case "ArrowDown":
              if (c.isDragging()) {
                const v = this._keyboardDragPoint, w = t.getEvent(new MouseEvent("mouseup", { clientX: v.x, clientY: v.y }));
                return c.events.isEnabled("globalpointerup") && c.events.dispatch("globalpointerup", { type: "globalpointerup", originalEvent: w.event, point: w.point, simulated: !0, target: c }), void (this._keyboardDragPoint = void 0);
              }
              if (c.get("focusableGroup")) {
                const v = c.get("focusableGroup"), w = this._tabindexes.filter((M) => !(M.get("focusableGroup") != v || M.getPrivate("focusable") === !1 || !M.isVisibleDeep()));
                let g = w.indexOf(c);
                const x = w.length - 1;
                g += _ == "ArrowRight" || _ == "ArrowDown" ? 1 : -1, g < 0 ? g = x : g > x && (g = 0), pt(w[g].getPrivate("focusElement").dom);
              }
          }
        }
      })));
    }
    this._startTicker(), this.setThemes([]), this._addTooltip(), this._hasLicense() || this._showBranding();
  }
  _initResizeSensor() {
    this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(), this._resizeSensorDisposer = new Wt(this.dom, () => {
      this.autoResize && this.resize();
    }), this._disposers.push(this._resizeSensorDisposer);
  }
  resize() {
    const e = this._getRealSize(), t = this._getCalculatedSize(e), i = Math.floor(t.width), r = Math.floor(t.height);
    if (i > 0 && r > 0) {
      const s = Math.floor(e.width), a = Math.floor(e.height), n = this._htmlElementContainer;
      if (n.style.width = i + "px", n.style.height = r + "px", this._a11yD !== !0) {
        const d = this._focusElementContainer;
        d.style.width = i + "px", d.style.height = r + "px";
      }
      this._renderer.resize(s, a, i, r);
      const l = this._rootContainer;
      l.setPrivate("width", i), l.setPrivate("height", r), this._render(), this._handleLogo();
    }
  }
  _render() {
    this._renderer.render(this._rootContainer._display), this._focusElementDirty && (this._updateCurrentFocus(), this._focusElementDirty = !1);
  }
  _runTickers(e) {
    y(this._tickers, (t) => {
      t(e);
    });
  }
  _runAnimations(e) {
    let t = 0;
    return ye(this._animations, (i) => {
      const r = i._runAnimation(e);
      return r !== We.Stopped && (r !== We.Playing || (++t, !0));
    }), this._isDirtyAnimation = !1, t === 0;
  }
  _runDirties() {
    let e = {};
    for (; this._isDirtyParents; ) this._isDirtyParents = !1, re(this._dirtyParents).forEach((a) => {
      const n = this._dirtyParents[a];
      delete this._dirtyParents[a], n.isDisposed() || (e[n.uid] = n, n._prepareChildren());
    });
    re(e).forEach((a) => {
      e[a]._updateChildren();
    });
    const t = [];
    re(this._dirty).forEach((a) => {
      const n = this._dirty[a];
      n.isDisposed() ? delete this._dirty[n.uid] : (t.push(n), n._beforeChanged());
    }), t.forEach((a) => {
      a._changed(), delete this._dirty[a.uid], a._clearDirty();
    }), this._isDirty = !1;
    const i = {}, r = [];
    re(this._dirtyBounds).forEach((a) => {
      const n = this._dirtyBounds[a];
      delete this._dirtyBounds[a], n.isDisposed() || (i[n.uid] = n.depth(), r.push(n));
    }), this._positionHTMLElements(), r.sort((a, n) => _t(i[n.uid], i[a.uid])), r.forEach((a) => {
      a._updateBounds();
    });
    const s = this._dirtyPositions;
    re(s).forEach((a) => {
      const n = s[a];
      delete s[a], n.isDisposed() || n._updatePosition();
    }), t.forEach((a) => {
      a._afterChanged();
    });
  }
  _renderFrame(e) {
    if (this._updateTick) {
      this.events.isEnabled("framestarted") && this.events.dispatch("framestarted", { type: "framestarted", target: this, timestamp: e }), this._checkComputedStyles(), this._runTickers(e);
      const t = this._runAnimations(e);
      return this._runDirties(), this._render(), this._renderer.resetImageArray(), this._positionHTMLElements(), this.events.isEnabled("frameended") && this.events.dispatch("frameended", { type: "frameended", target: this, timestamp: e }), this._tickers.length === 0 && t && !this._isDirtyAnimation && !this._isDirty;
    }
    return !0;
  }
  _runTicker(e, t) {
    this.isDisposed() || (this.animationTime = e, this._renderFrame(e) ? (this._ticker = null, this.animationTime = null) : this._paused || (t ? this._ticker : Ze(this.fps, this._ticker)));
  }
  _runTickerNow(e = 1e4) {
    if (!this.isDisposed()) {
      const t = performance.now() + e;
      for (; ; ) {
        const i = performance.now();
        if (i >= t) {
          this.animationTime = null;
          break;
        }
        if (this.animationTime = i, this._renderFrame(i)) {
          this.animationTime = null;
          break;
        }
      }
    }
  }
  _startTicker() {
    this._ticker === null && (this.animationTime = null, this._ticker = (e) => {
      this._runTicker(e);
    }, Ze(this.fps, this._ticker));
  }
  get updateTick() {
    return this._updateTick;
  }
  set updateTick(e) {
    this._updateTick = e, e && this._startTicker();
  }
  _addDirtyEntity(e) {
    this._isDirty = !0, this._dirty[e.uid] === void 0 && (this._dirty[e.uid] = e), this._startTicker();
  }
  _addDirtyParent(e) {
    this._isDirty = !0, this._isDirtyParents = !0, this._dirtyParents[e.uid] === void 0 && (this._dirtyParents[e.uid] = e), this._startTicker();
  }
  _addDirtyBounds(e) {
    this._isDirty = !0, this._dirtyBounds[e.uid] === void 0 && (this._dirtyBounds[e.uid] = e), this._startTicker();
  }
  _addDirtyPosition(e) {
    this._isDirty = !0, this._dirtyPositions[e.uid] === void 0 && (this._dirtyPositions[e.uid] = e), this._startTicker();
  }
  _addAnimation(e) {
    this._isDirtyAnimation = !0, this._animations.indexOf(e) === -1 && this._animations.push(e), this._startTicker();
  }
  _markDirty() {
    this._isDirty = !0;
  }
  _markDirtyRedraw() {
    this.events.once("frameended", () => {
      this._isDirty = !0, this._startTicker();
    });
  }
  eachFrame(e) {
    return this._tickers.push(e), this._startTicker(), new $(() => {
      Be(this._tickers, e);
    });
  }
  markDirtyGlobal(e) {
    e || (e = this.container), e.walkChildren((t) => {
      t instanceof q && this.markDirtyGlobal(t), t.markDirty(), t.markDirtyBounds();
    });
  }
  width() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).width);
  }
  height() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).height);
  }
  dispose() {
    this._isDisposed || (this._isDisposed = !0, this._rootContainer.dispose(), this._renderer.dispose(), this.horizontalLayout.dispose(), this.verticalLayout.dispose(), this.interfaceColors.dispose(), y(this._disposers, (e) => {
      e.dispose();
    }), this._inner && yt(this._inner), se(te.rootElements, this));
  }
  isDisposed() {
    return this._isDisposed;
  }
  readerAlert(e) {
    this._a11yD !== !0 && (this._readerAlertElement.innerHTML = Ye(e));
  }
  setThemes(e) {
    this._rootContainer.set("themes", e);
    const t = this.tooltipContainer;
    t && t._applyThemes();
    const i = this.interfaceColors;
    i && i._applyThemes();
  }
  _addTooltip() {
    if (!this.tooltipContainer) {
      const e = this._tooltipContainerSettings, t = this._rootContainer.children.push(q.new(this, { position: "absolute", isMeasured: !1, width: Z, height: Z, layer: e ? 35 : 30, layerMargin: e || void 0 }));
      this.tooltipContainer = t;
      const i = Ve.new(this, {});
      this.container.set("tooltip", i), i.hide(0), this._tooltip = i;
    }
  }
  _registerTabindexOrder(e) {
    this._a11yD != 1 && (e.get("focusable") ? Ee(this._tabindexes, e) : se(this._tabindexes, e), this._invalidateTabindexes());
  }
  _unregisterTabindexOrder(e) {
    this._a11yD != 1 && (se(this._tabindexes, e), this._invalidateTabindexes());
  }
  _invalidateTabindexes() {
    if (this._a11yD == 1) return;
    this._tabindexes.sort((t, i) => {
      const r = t.get("tabindexOrder", 0), s = i.get("tabindexOrder", 0);
      return r == s ? 0 : r > s ? 1 : -1;
    });
    const e = [];
    y(this._tabindexes, (t, i) => {
      t.getPrivate("focusElement") ? this._moveFocusElement(i, t) : this._makeFocusElement(i, t);
      const r = t.get("focusableGroup");
      r && t.getPrivate("focusable") !== !1 && (e.indexOf(r) !== -1 ? t.getPrivate("focusElement").dom.setAttribute("tabindex", "-1") : e.push(r));
    });
  }
  _updateCurrentFocus() {
    this._a11yD != 1 && this._focusedSprite && (this._decorateFocusElement(this._focusedSprite), this._positionFocusElement(this._focusedSprite));
  }
  _decorateFocusElement(e, t) {
    if (this._a11yD == 1 || (t || (t = e.getPrivate("focusElement").dom), !t)) return;
    const i = e.get("role");
    i ? t.setAttribute("role", i) : t.removeAttribute("role");
    const r = e.get("ariaLabel");
    if (r) {
      const h = vt(e, r);
      t.setAttribute("aria-label", h);
    } else t.removeAttribute("aria-label");
    const s = e.get("ariaLive");
    s ? t.setAttribute("aria-live", s) : t.removeAttribute("aria-live");
    const a = e.get("ariaChecked");
    a != null && i && ["checkbox", "option", "radio", "menuitemcheckbox", "menuitemradio", "treeitem"].indexOf(i) !== -1 ? t.setAttribute("aria-checked", a ? "true" : "false") : t.removeAttribute("aria-checked");
    const n = e.get("ariaCurrent");
    n != null ? t.setAttribute("aria-current", n) : t.removeAttribute("aria-current");
    const l = e.get("ariaSelected");
    l != null && i && ["gridcell", "option", "row", "tab", "columnheader", "rowheader", "treeitem"].indexOf(i) !== -1 ? t.setAttribute("aria-selected", l ? "true" : "false") : t.removeAttribute("aria-selected"), e.get("ariaHidden") ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden");
    const d = e.get("ariaOrientation");
    d ? t.setAttribute("aria-orientation", d) : t.removeAttribute("aria-orientation");
    const m = e.get("ariaValueNow");
    m ? t.setAttribute("aria-valuenow", m) : t.removeAttribute("aria-valuenow");
    const u = e.get("ariaValueMin");
    u ? t.setAttribute("aria-valuemin", u) : t.removeAttribute("aria-valuemin");
    const f = e.get("ariaValueMax");
    f ? t.setAttribute("aria-valuemax", f) : t.removeAttribute("aria-valuemax");
    const o = e.get("ariaValueText");
    o ? t.setAttribute("aria-valuetext", o) : t.removeAttribute("aria-valuetext");
    const p = e.get("ariaControls");
    p ? t.setAttribute("aria-controls", p) : t.removeAttribute("aria-controls"), e.get("visible") && e.get("opacity") !== 0 && e.get("role") != "tooltip" && !e.isHidden() && e.getPrivate("focusable") !== !1 ? (t.getAttribute("tabindex") != "-1" && t.setAttribute("tabindex", "" + this.tabindex), t.removeAttribute("aria-hidden")) : (t.removeAttribute("tabindex"), t.setAttribute("aria-hidden", "true"));
  }
  _makeFocusElement(e, t) {
    if (t.getPrivate("focusElement") || this._a11yD == 1) return;
    const i = document.createElement("div");
    t.get("role") != "tooltip" && (i.tabIndex = this.tabindex), i.style.position = "absolute", J(i, !1);
    const r = [];
    t.setPrivate("focusElement", { dom: i, disposers: r }), this._decorateFocusElement(t), r.push(C(i, "focus", (s) => {
      this._handleFocus(s);
    })), r.push(C(i, "blur", (s) => {
      this._handleBlur(s);
    })), this._moveFocusElement(e, t);
  }
  _removeFocusElement(e) {
    if (this._a11yD == 1) return;
    se(this._tabindexes, e);
    const t = e.getPrivate("focusElement");
    t && (this._focusElementContainer.removeChild(t.dom), y(t.disposers, (i) => {
      i.dispose();
    }));
  }
  _hideFocusElement(e) {
    this._a11yD != 1 && (e.getPrivate("focusElement").dom.style.display = "none");
  }
  _moveFocusElement(e, t) {
    if (this._a11yD == 1) return;
    const i = this._focusElementContainer, r = t.getPrivate("focusElement").dom;
    if (r === this._focusElementContainer.children[e]) return;
    const s = this._focusElementContainer.children[e + 1];
    s ? i.insertBefore(r, s) : i.append(r);
  }
  _positionFocusElement(e) {
    if (this._a11yD == 1 || e == null) return;
    const t = e.globalBounds();
    let i = t.right == t.left ? e.width() : t.right - t.left, r = t.top == t.bottom ? e.height() : t.bottom - t.top;
    const s = this._settings.focusPadding !== void 0 ? this._settings.focusPadding : 2;
    let a = t.left - s, n = t.top - s;
    i < 0 && (a += i, i = Math.abs(i)), r < 0 && (n += r, r = Math.abs(r));
    const l = e.getPrivate("focusElement").dom;
    l.style.top = n + "px", l.style.left = a + "px", l.style.width = i + 2 * s + "px", l.style.height = r + 2 * s + "px";
  }
  _getSpriteByFocusElement(e) {
    let t;
    return Ce(this._tabindexes, (i, r) => i.getPrivate("focusElement").dom !== e || (t = i, !1)), t;
  }
  _handleFocus(e) {
    if (this._a11yD == 1) return;
    const t = this._getSpriteByFocusElement(e.target);
    t && (t.isVisibleDeep() ? (this._positionFocusElement(t), this._focusedSprite = t, t.events.isEnabled("focus") && t.events.dispatch("focus", { type: "focus", originalEvent: e, target: t })) : this._focusNext(e.target, this._isShift ? -1 : 1));
  }
  _focusNext(e, t) {
    if (this._a11yD == 1) return;
    const i = Array.from(document.querySelectorAll(["a[href]", "area[href]", "button:not([disabled])", "details", "input:not([disabled])", "iframe:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contentEditable=""]', '[contentEditable="true"]', '[contentEditable="TRUE"]', '[tabindex]:not([tabindex^="-"])'].join(",")));
    let r = i.indexOf(e) + t;
    r < 0 ? r = i.length - 1 : r >= i.length && (r = 0), i[r].focus();
  }
  _handleBlur(e) {
    if (this._a11yD == 1) return;
    const t = this._focusedSprite;
    t && !t.isDisposed() && t.events.isEnabled("blur") && t.events.dispatch("blur", { type: "blur", originalEvent: e, target: t }), this._focusedSprite = void 0;
  }
  updateTooltip(e) {
    if (this._a11yD == 1) return;
    const t = Ye(e._getText());
    let i = e.getPrivate("tooltipElement");
    e.get("role") == "tooltip" && t != "" ? (i || (i = this._makeTooltipElement(e)), i.innerHTML != t && (i.innerHTML = t), i.setAttribute("aria-hidden", e.isVisibleDeep() ? "false" : "true")) : i && (i.remove(), e.removePrivate("tooltipElement"));
  }
  _makeTooltipElement(e) {
    const t = this._tooltipElementContainer, i = document.createElement("div");
    return i.style.position = "absolute", i.style.width = "1px", i.style.height = "1px", i.style.overflow = "hidden", i.style.clip = "rect(1px, 1px, 1px, 1px)", J(i, !1), this._decorateFocusElement(e, i), t.append(i), e.setPrivate("tooltipElement", i), i;
  }
  _removeTooltipElement(e) {
    if (this._a11yD == 1) return;
    const t = e.getPrivate("tooltipElement");
    if (t) {
      const i = t.parentElement;
      i && i.removeChild(t);
    }
  }
  _invalidateAccessibility(e) {
    if (this._a11yD == 1) return;
    this._focusElementDirty = !0;
    const t = e.getPrivate("focusElement");
    e.get("focusable") ? t && (this._decorateFocusElement(e), this._positionFocusElement(e)) : t && this._removeFocusElement(e);
  }
  focused(e) {
    return this._focusedSprite === e;
  }
  documentPointToRoot(e) {
    const t = this._getRealSize(), i = this._getCalculatedSize(t), r = i.width / t.width, s = i.height / t.height;
    return { x: (e.x - t.left) * r, y: (e.y - t.top) * s };
  }
  rootPointToDocument(e) {
    const t = this._getRealSize(), i = this._getCalculatedSize(t), r = i.width / t.width, s = i.height / t.height;
    return { x: e.x / r + t.left, y: e.y / s + t.top };
  }
  addDisposer(e) {
    return this._disposers.push(e), e;
  }
  _updateComputedStyles() {
    const e = window.getComputedStyle(this.dom);
    let t = "";
    he(e, (r, s) => {
      _e(r) && r.match(/^font/) && (t += s);
    });
    const i = t != this._fontHash;
    return i && (this._fontHash = t), i;
  }
  _checkComputedStyles() {
    this._updateComputedStyles() && this._invalidateLabelBounds(this.container);
  }
  _invalidateLabelBounds(e) {
    e instanceof q ? e.children.each((t) => {
      this._invalidateLabelBounds(t);
    }) : e instanceof wt && e.markDirtyBounds();
  }
  _hasLicense() {
    for (let e = 0; e < te.licenses.length; e++) if (te.licenses[e].match(/^AM5C.{5,}/i)) return !0;
    return !1;
  }
  _licenseApplied() {
    this._logo && this._logo.set("forceHidden", !0);
  }
  get debugGhostView() {
    return this._renderer.debugGhostView;
  }
  set debugGhostView(e) {
    this._renderer.debugGhostView = e;
  }
  set tapToActivate(e) {
    this._renderer.tapToActivate = e;
  }
  get tapToActivate() {
    return this._renderer.tapToActivate;
  }
  set tapToActivateTimeout(e) {
    this._renderer.tapToActivateTimeout = e;
  }
  get tapToActivateTimeout() {
    return this._renderer.tapToActivateTimeout;
  }
  _makeHTMLElement(e) {
    const t = this._htmlElementContainer, i = document.createElement("div");
    return e.setPrivate("htmlElement", i), i.style.position = "absolute", i.style.overflow = "auto", i.style.boxSizing = "border-box", J(i, e.get("interactive", !1)), e.events.isEnabled("click") && (J(i, !0), this._disposers.push(C(i, "click", (r) => {
      const s = this._renderer.getEvent(r);
      e.events.dispatch("click", { type: "click", originalEvent: s.event, point: s.point, simulated: !1, target: e });
    }))), this._positionHTMLElement(e), t.append(i), Ee(this._htmlEnabledContainers, e), i;
  }
  _positionHTMLElements() {
    y(this._htmlEnabledContainers, (e) => {
      this._positionHTMLElement(e);
    });
  }
  _positionHTMLElement(e) {
    const t = e.getPrivate("htmlElement");
    if (t) {
      y(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"], (f) => {
        const o = e.get(f);
        t.style[f] = o ? o + "px" : "";
      });
      const i = e.compositeScale() || 1, r = e.compositeRotation() || 0;
      t.style.transform = "", t.style.transformOrigin = "";
      const s = e.compositeOpacity();
      setTimeout(() => {
        t.style.opacity = s + "";
      }, 10);
      const a = e.isVisibleDeep();
      a && (t.style.display = "block");
      const n = e.globalBounds();
      t.style.top = n.top + "px", t.style.left = n.left + "px";
      const l = e.get("width"), d = e.get("height");
      let m = 0, u = 0;
      if (l && (m = e.width()), d && (u = e.height()), l && d) e.removePrivate("minWidth"), e.removePrivate("minHeight");
      else {
        t.style.position = "fixed", t.style.width = "", t.style.height = "";
        const f = t.getBoundingClientRect();
        t.style.position = "absolute", l || (m = f.width), d || (u = f.height), e._adjustedLocalBounds = { left: 0, right: 0, top: 0, bottom: 0 }, e.setPrivate("minWidth", m / i), e.setPrivate("minHeight", u / i);
      }
      m > 0 && (t.style.minWidth = m + "px"), u > 0 && (t.style.minHeight = u + "px"), a && s != 0 || (t.style.display = "none"), i != 1 && (t.style.transform += "scale(" + i + ")"), r != 0 && (t.style.transform += " rotate(" + r + "deg)"), t.style.transform != "" && (t.style.transformOrigin = e.get("centerX", 0) + "%  " + e.get("centerY", 0) + "%");
    }
  }
  _setHTMLContent(e, t) {
    let i = e.getPrivate("htmlElement");
    i || (i = this._makeHTMLElement(e)), i.innerHTML != t && (i.innerHTML = t);
  }
  _removeHTMLContent(e) {
    let t = e.getPrivate("htmlElement");
    t && (this._htmlElementContainer.removeChild(t), e.removePrivate("htmlElement")), se(this._htmlEnabledContainers, e);
  }
}
ht("AM5C241025748");
const Je = "en-us", Le = /* @__PURE__ */ new Map([["ar", () => import("./ar-69w_pNvD.js")], ["bg-bg", () => import("./bg_BG-HxX0GdS4.js")], ["bs-ba", () => import("./bs_BA-DrqKjqQh.js")], ["ca-es", () => import("./ca_ES-B8P53VJs.js")], ["cs-cz", () => import("./cs_CZ-Bqde4kKV.js")], ["da-dk", () => import("./da_DK-BHlKtWuS.js")], ["de-de", () => import("./de_DE-BjuOMedt.js")], ["de-ch", () => import("./de_CH-DAPp1Ncl.js")], ["el-gr", () => import("./el_GR-C1WdWwt2.js")], ["en-us", () => import("./en_US-9ASyeqlk.js")], ["en-ca", () => import("./en_CA-9ASyeqlk.js")], ["es-es", () => import("./es_ES-D1FgMsXM.js")], ["et-ee", () => import("./et_EE-Dz_TpNNF.js")], ["fi-fi", () => import("./fi_FI-Cte3XVjc.js")], ["fr-fr", () => import("./fr_FR-D4Jnvm3b.js")], ["he-il", () => import("./he_IL-DcsZ56bm.js")], ["hr-hr", () => import("./hr_HR-C0BJtvO7.js")], ["hu-hu", () => import("./hu_HU-BGreOcqI.js")], ["id-id", () => import("./id_ID-DCZBbKD3.js")], ["it-it", () => import("./it_IT-BeKgphnk.js")], ["ja-jp", () => import("./ja_JP-gzKc2xa8.js")], ["ko-kr", () => import("./ko_KR-sv9FjurR.js")], ["lt-lt", () => import("./lt_LT-yZNULmv_.js")], ["lv-lv", () => import("./lv_LV-Cu8aigXF.js")], ["nb-no", () => import("./nb_NO-CqN3wUJH.js")], ["nl-nl", () => import("./nl_NL-DAiuag9r.js")], ["pl-pl", () => import("./pl_PL-BDbrX9O9.js")], ["pt-br", () => import("./pt_BR-D3fc0auN.js")], ["pt-pt", () => import("./pt_PT-ne3A0-MZ.js")], ["ro-ro", () => import("./ro_RO-BfLaePMk.js")], ["ru-ru", () => import("./ru_RU-jSaqVZwA.js")], ["sk-sk", () => import("./sk_SK-Dp9r7-Al.js")], ["sl-sl", () => import("./sl_SL-CArbvniK.js")], ["sr-rs", () => import("./sr_RS-KKcjmG1u.js")], ["sv-se", () => import("./sv_SE-CT8Rd8gJ.js")], ["th-th", () => import("./th_TH-DHvdpgHD.js")], ["tr-tr", () => import("./tr_TR-CooWKX5o.js")], ["uk-ua", () => import("./uk_UA-D4LhzxxY.js")], ["vi-vn", () => import("./vi_VN-Byu5lfYa.js")], ["zh-cn", () => import("./zh_Hans-DQ0VpKp5.js")], ["zh-hk", () => import("./zh_Hant-Di2gjomG.js")], ["zh-tw", () => import("./zh_Hant-Di2gjomG.js")]]);
function Ti(b) {
  const e = b.split("-")[0].toLowerCase();
  let t = null;
  for (const i of Le.keys()) if (i.startsWith(e)) {
    t = i;
    break;
  }
  return t;
}
function Bi(b) {
  return b ? Le.has(b.toLowerCase()) ? b.toLowerCase() : Ti(b) || Je : Je;
}
async function zi(b, e = lt()) {
  const t = Ae.new(b);
  return t.locale = (await Le.get(Bi(e))()).default, t;
}
export {
  zi as createRoot
};
//# sourceMappingURL=chartUtilsAm5-DABuG7XQ.js.map
