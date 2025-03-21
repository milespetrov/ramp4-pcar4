import { u as co } from "./main-Bnvk3STL.js";
var Pr, ce, ar, gr = { exports: {} };
Pr = gr, ce = typeof document < "u" ? document.currentScript?.src : void 0, typeof __filename < "u" && (ce ||= __filename), ar = function(yr = {}) {
  var fe, se, Pe, k, $, t = Object.assign({}, yr), ur = new Promise((e, _) => {
    fe = e, se = _;
  }), Ee = typeof window == "object", J = typeof importScripts == "function", be = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", me = Object.assign({}, t), Te = "./this.program", Y = "";
  function dr(e) {
    return t.locateFile ? t.locateFile(e, Y) : Y + e;
  }
  if (be) {
    var Oe = require("fs"), Se = require("path");
    Y = __dirname + "/", Pe = (e, _) => (e = ne(e) ? new URL(e) : Se.normalize(e), Oe.readFileSync(e, _ ? void 0 : "utf8")), $ = (e) => {
      var _ = Pe(e, !0);
      return _.buffer || (_ = new Uint8Array(_)), _;
    }, k = (e, _, o, p = !0) => {
      e = ne(e) ? new URL(e) : Se.normalize(e), Oe.readFile(e, p ? void 0 : "utf8", (i, s) => {
        i ? o(i) : _(p ? s.buffer : s);
      });
    }, !t.thisProgram && process.argv.length > 1 && (Te = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2);
  } else (Ee || J) && (J ? Y = self.location.href : typeof document < "u" && document.currentScript && (Y = document.currentScript.src), ce && (Y = ce), Y = Y.startsWith("blob:") ? "" : Y.substr(0, Y.replace(/[?#].*/, "").lastIndexOf("/") + 1), Pe = (e) => {
    var _ = new XMLHttpRequest();
    return _.open("GET", e, !1), _.send(null), _.responseText;
  }, J && ($ = (e) => {
    var _ = new XMLHttpRequest();
    return _.open("GET", e, !1), _.responseType = "arraybuffer", _.send(null), new Uint8Array(_.response);
  }), k = (e, _, o) => {
    var p = new XMLHttpRequest();
    p.open("GET", e, !0), p.responseType = "arraybuffer", p.onload = () => {
      p.status == 200 || p.status == 0 && p.response ? _(p.response) : o();
    }, p.onerror = o, p.send(null);
  });
  var ae, Q, fr = console.log.bind(console), W = console.error.bind(console);
  Object.assign(t, me), me = null;
  var X, z, ee, R, w, te, _e, Ne = !1;
  function ge(e, _) {
    e || K(_);
  }
  function he() {
    var e = Q.buffer;
    t.HEAP8 = X = new Int8Array(e), t.HEAP16 = ee = new Int16Array(e), t.HEAPU8 = z = new Uint8Array(e), t.HEAPU16 = new Uint16Array(e), t.HEAP32 = R = new Int32Array(e), t.HEAPU32 = w = new Uint32Array(e), t.HEAPF32 = te = new Float32Array(e), t.HEAPF64 = _e = new Float64Array(e);
  }
  var Er = [], le = [], br = [];
  function mr() {
    ye(Er);
  }
  function Tr() {
    ye(le);
  }
  function Or() {
    ye(br);
  }
  function Sr(e) {
    le.unshift(e);
  }
  var re = 0, B = null;
  function Nr(e) {
    re++;
  }
  function hr(e) {
    if (--re == 0 && B) {
      var _ = B;
      B = null, _();
    }
  }
  function K(e) {
    W(e = "Aborted(" + e + ")"), Ne = !0, e += ". Build with -sASSERTIONS for more info.";
    var _ = new WebAssembly.RuntimeError(e);
    throw se(_), _;
  }
  var oe, lr = "data:application/octet-stream;base64,", Me = (e) => e.startsWith(lr), ne = (e) => e.startsWith("file://");
  function Mr() {
    var e = "pe-wasm.wasm";
    return Me(e) ? e : dr(e);
  }
  function De(e) {
    if (e == oe && ae) return new Uint8Array(ae);
    if ($) return $(e);
    throw "both async and sync fetching of the wasm failed";
  }
  function Dr(e) {
    if (Ee || J) {
      if (typeof fetch == "function" && !ne(e)) return fetch(e, { credentials: "same-origin" }).then((_) => {
        if (!_.ok) throw `failed to load wasm binary file at '${e}'`;
        return _.arrayBuffer();
      }).catch(() => De(e));
      if (k) return new Promise((_, o) => {
        k(e, (p) => _(new Uint8Array(p)), o);
      });
    }
    return Promise.resolve().then(() => De(e));
  }
  function ve(e, _, o) {
    return Dr(e).then((p) => WebAssembly.instantiate(p, _)).then(o, (p) => {
      W(`failed to asynchronously prepare wasm: ${p}`), K(p);
    });
  }
  function vr(e, _, o, p) {
    return typeof WebAssembly.instantiateStreaming != "function" || Me(_) || ne(_) || be || typeof fetch != "function" ? ve(_, o, p) : fetch(_, { credentials: "same-origin" }).then((i) => WebAssembly.instantiateStreaming(i, o).then(p, function(s) {
      return W(`wasm streaming compile failed: ${s}`), W("falling back to ArrayBuffer instantiation"), ve(_, o, p);
    }));
  }
  function Rr() {
    return { a: $r };
  }
  function Ar() {
    var e = Rr();
    function _(p, i) {
      return r = p.exports, Q = r.t, he(), Sr(r.u), hr(), r;
    }
    function o(p) {
      _(p.instance);
    }
    return Nr(), oe || (oe = Mr()), vr(ae, oe, e, o).catch(se), {};
  }
  var ye = (e) => {
    for (; e.length > 0; ) e.shift()(t);
  };
  function Gr(e, _ = "i8") {
    switch (_.endsWith("*") && (_ = "*"), _) {
      case "i1":
      case "i8":
        return X[e];
      case "i16":
        return ee[e >> 1];
      case "i32":
        return R[e >> 2];
      case "i64":
        K("to do getValue(i64) use WASM_BIGINT");
      case "float":
        return te[e >> 2];
      case "double":
        return _e[e >> 3];
      case "*":
        return w[e >> 2];
      default:
        K(`invalid type for getValue: ${_}`);
    }
  }
  var Re = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Ae = (e, _, o) => {
    for (var p = _ + o, i = _; e[i] && !(i >= p); ) ++i;
    if (i - _ > 16 && e.buffer && Re) return Re.decode(e.subarray(_, i));
    for (var s = ""; _ < i; ) {
      var g = e[_++];
      if (128 & g) {
        var a = 63 & e[_++];
        if ((224 & g) != 192) {
          var M = 63 & e[_++];
          if ((g = (240 & g) == 224 ? (15 & g) << 12 | a << 6 | M : (7 & g) << 18 | a << 12 | M << 6 | 63 & e[_++]) < 65536) s += String.fromCharCode(g);
          else {
            var Z = g - 65536;
            s += String.fromCharCode(55296 | Z >> 10, 56320 | 1023 & Z);
          }
        } else s += String.fromCharCode((31 & g) << 6 | a);
      } else s += String.fromCharCode(g);
    }
    return s;
  }, L = (e, _) => e ? Ae(z, e, _) : "";
  function Cr(e, _, o) {
    return 0;
  }
  var Ge = (e, _, o, p) => {
    if (!(p > 0)) return 0;
    for (var i = o, s = o + p - 1, g = 0; g < e.length; ++g) {
      var a = e.charCodeAt(g);
      if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++g)), a <= 127) {
        if (o >= s) break;
        _[o++] = a;
      } else if (a <= 2047) {
        if (o + 1 >= s) break;
        _[o++] = 192 | a >> 6, _[o++] = 128 | 63 & a;
      } else if (a <= 65535) {
        if (o + 2 >= s) break;
        _[o++] = 224 | a >> 12, _[o++] = 128 | a >> 6 & 63, _[o++] = 128 | 63 & a;
      } else {
        if (o + 3 >= s) break;
        _[o++] = 240 | a >> 18, _[o++] = 128 | a >> 12 & 63, _[o++] = 128 | a >> 6 & 63, _[o++] = 128 | 63 & a;
      }
    }
    return _[o] = 0, o - i;
  }, pe = (e, _, o) => Ge(e, z, _, o);
  function Ir(e, _, o) {
    return 0;
  }
  function jr(e, _, o, p) {
  }
  var Lr = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), Ur = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Fr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Yr = (e) => (Lr(e.getFullYear()) ? Ur : Fr)[e.getMonth()] + e.getDate() - 1, wr = (e, _) => _ + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * _ : NaN;
  function xr(e, _, o) {
    var p = wr(e, _), i = new Date(1e3 * p);
    R[o >> 2] = i.getSeconds(), R[o + 4 >> 2] = i.getMinutes(), R[o + 8 >> 2] = i.getHours(), R[o + 12 >> 2] = i.getDate(), R[o + 16 >> 2] = i.getMonth(), R[o + 20 >> 2] = i.getFullYear() - 1900, R[o + 24 >> 2] = i.getDay();
    var s = 0 | Yr(i);
    R[o + 28 >> 2] = s, R[o + 36 >> 2] = -60 * i.getTimezoneOffset();
    var g = new Date(i.getFullYear(), 0, 1), a = new Date(i.getFullYear(), 6, 1).getTimezoneOffset(), M = g.getTimezoneOffset(), Z = 0 | (a != M && i.getTimezoneOffset() == Math.min(M, a));
    R[o + 32 >> 2] = Z;
  }
  var Hr = () => 2147483648, Xr = (e) => {
    var _ = (e - Q.buffer.byteLength + 65535) / 65536;
    try {
      return Q.grow(_), he(), 1;
    } catch {
    }
  }, ue = {}, zr = () => Te || "./this.program", V = () => {
    if (!V.strings) {
      var e = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: zr() };
      for (var _ in ue) ue[_] === void 0 ? delete e[_] : e[_] = ue[_];
      var o = [];
      for (var _ in e) o.push(`${_}=${e[_]}`);
      V.strings = o;
    }
    return V.strings;
  }, Zr = (e, _) => {
    for (var o = 0; o < e.length; ++o) X[_++] = e.charCodeAt(o);
    X[_] = 0;
  };
  function Wr(e, _, o, p, i) {
    return 70;
  }
  var Br = [null, [], []], Kr = (e, _) => {
    var o = Br[e];
    _ === 0 || _ === 10 ? ((e === 1 ? fr : W)(Ae(o, 0)), o.length = 0) : o.push(_);
  }, Vr = (e) => {
    for (var _ = 0, o = 0; o < e.length; ++o) {
      var p = e.charCodeAt(o);
      p <= 127 ? _++ : p <= 2047 ? _ += 2 : p >= 55296 && p <= 57343 ? (_ += 4, ++o) : _ += 3;
    }
    return _;
  };
  function qr(e, _, o) {
    var p = Vr(e) + 1, i = new Array(p);
    return Ge(e, i, 0, i.length), i;
  }
  var kr = (e, _) => Math.ceil(e / _) * _, $r = { c: Cr, r: (e, _, o) => {
  }, h: Ir, d: jr, p: (e) => {
  }, o: (e, _) => {
  }, q: (e, _, o) => {
  }, l: () => {
    K("");
  }, s: (e, _, o) => z.copyWithin(e, _, _ + o), j: xr, n: (e, _, o, p) => {
    var i = (/* @__PURE__ */ new Date()).getFullYear(), s = new Date(i, 0, 1), g = new Date(i, 6, 1), a = s.getTimezoneOffset(), M = g.getTimezoneOffset(), Z = Math.max(a, M);
    w[e >> 2] = 60 * Z, R[_ >> 2] = +(a != M);
    var ir = (io) => io.toLocaleTimeString(void 0, { hour12: !1, timeZoneName: "short" }).split(" ")[1], cr = ir(s), sr = ir(g);
    M < a ? (pe(cr, o, 17), pe(sr, p, 17)) : (pe(cr, p, 17), pe(sr, o, 17));
  }, i: () => Date.now(), m: (e) => {
    var _ = z.length;
    e >>>= 0;
    var o = Hr();
    if (e > o) return !1;
    for (var p = (a, M) => a + (M - a % M) % M, i = 1; i <= 4; i *= 2) {
      var s = _ * (1 + 0.2 / i);
      s = Math.min(s, e + 100663296);
      var g = Math.min(o, p(Math.max(e, s), 65536));
      if (Xr(g)) return !0;
    }
    return !1;
  }, e: (e, _) => {
    var o = 0;
    return V().forEach((p, i) => {
      var s = _ + o;
      w[e + 4 * i >> 2] = s, Zr(p, s), o += p.length + 1;
    }), 0;
  }, f: (e, _) => {
    var o = V();
    w[e >> 2] = o.length;
    var p = 0;
    return o.forEach((i) => p += i.length + 1), w[_ >> 2] = p, 0;
  }, a: (e) => 52, g: (e, _, o, p) => 52, k: Wr, b: (e, _, o, p) => {
    for (var i = 0, s = 0; s < o; s++) {
      var g = w[_ >> 2], a = w[_ + 4 >> 2];
      _ += 8;
      for (var M = 0; M < a; M++) Kr(e, z[g + M]);
      i += a;
    }
    return w[p >> 2] = i, 0;
  } }, r = Ar();
  t._webidl_free = (e) => (t._webidl_free = r.v)(e), t._webidl_malloc = (e) => (t._webidl_malloc = r.w)(e);
  var ie, Ce = t._emscripten_bind_PeObject_getCode_0 = (e) => (Ce = t._emscripten_bind_PeObject_getCode_0 = r.x)(e), Ie = t._emscripten_bind_PeObject_getName_1 = (e, _) => (Ie = t._emscripten_bind_PeObject_getName_1 = r.y)(e, _), je = t._emscripten_bind_PeObject_getType_0 = (e) => (je = t._emscripten_bind_PeObject_getType_0 = r.z)(e), Le = t._emscripten_bind_PeCoordsys_getCode_0 = (e) => (Le = t._emscripten_bind_PeCoordsys_getCode_0 = r.A)(e), Ue = t._emscripten_bind_PeCoordsys_getName_1 = (e, _) => (Ue = t._emscripten_bind_PeCoordsys_getName_1 = r.B)(e, _), Fe = t._emscripten_bind_PeCoordsys_getType_0 = (e) => (Fe = t._emscripten_bind_PeCoordsys_getType_0 = r.C)(e), Ye = t._emscripten_bind_VoidPtr___destroy___0 = (e) => (Ye = t._emscripten_bind_VoidPtr___destroy___0 = r.D)(e), we = t._emscripten_bind_PeDatum_getSpheroid_0 = (e) => (we = t._emscripten_bind_PeDatum_getSpheroid_0 = r.E)(e), xe = t._emscripten_bind_PeDatum_getCode_0 = (e) => (xe = t._emscripten_bind_PeDatum_getCode_0 = r.F)(e), He = t._emscripten_bind_PeDatum_getName_1 = (e, _) => (He = t._emscripten_bind_PeDatum_getName_1 = r.G)(e, _), Xe = t._emscripten_bind_PeDatum_getType_0 = (e) => (Xe = t._emscripten_bind_PeDatum_getType_0 = r.H)(e), ze = t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = (e) => (ze = t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = r.I)(e), Ze = t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = (e) => (Ze = t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = r.J)(e), We = t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = (e) => (We = t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = r.K)(e), Be = t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = (e) => (Be = t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = r.L)(e), Ke = t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = (e) => (Ke = t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = r.M)(e), Ve = t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = (e) => (Ve = t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = r.N)(e), qe = t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = (e) => (qe = t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = r.O)(e), ke = t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = (e) => (ke = t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = r.P)(e), $e = t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = (e) => ($e = t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = r.Q)(e), Je = t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = (e) => (Je = t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = r.R)(e), Qe = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = (e) => (Qe = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = r.S)(e), et = t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = (e) => (et = t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = r.T)(e), tt = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = (e) => (tt = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = r.U)(e), _t = t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = (e) => (_t = t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = r.V)(e), rt = t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = (e) => (rt = t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = r.W)(e), ot = t._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = (e) => (ot = t._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = r.X)(e), nt = t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = (e) => (nt = t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = r.Y)(e), pt = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = (e) => (pt = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = r.Z)(e), it = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = (e) => (it = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = r._)(e), ct = t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = (e) => (ct = t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = r.$)(e), st = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = (e) => (st = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = r.aa)(e), Pt = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = (e) => (Pt = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = r.ba)(e), at = t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = (e) => (at = t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = r.ca)(e), gt = t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = (e) => (gt = t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = r.da)(e), yt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = (e) => (yt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = r.ea)(e), ut = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = (e) => (ut = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = r.fa)(e), dt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = (e) => (dt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = r.ga)(e), ft = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = (e) => (ft = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = r.ha)(e), Et = t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = (e) => (Et = t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = r.ia)(e), bt = t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = (e) => (bt = t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = r.ja)(e), mt = t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = (e) => (mt = t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = r.ka)(e), Tt = t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = (e) => (Tt = t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = r.la)(e), Ot = t._emscripten_bind_PeFactory_initialize_1 = (e) => (Ot = t._emscripten_bind_PeFactory_initialize_1 = r.ma)(e), St = t._emscripten_bind_PeFactory_factoryByType_2 = (e, _) => (St = t._emscripten_bind_PeFactory_factoryByType_2 = r.na)(e, _), Nt = t._emscripten_bind_PeFactory_fromString_2 = (e, _) => (Nt = t._emscripten_bind_PeFactory_fromString_2 = r.oa)(e, _), ht = t._emscripten_bind_PeFactory_getCode_1 = (e) => (ht = t._emscripten_bind_PeFactory_getCode_1 = r.pa)(e), lt = t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = (e, _, o, p, i, s) => (lt = t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = r.qa)(e, _, o, p, i, s), Mt = t._emscripten_bind_PeGCSExtent_getLLon_0 = (e) => (Mt = t._emscripten_bind_PeGCSExtent_getLLon_0 = r.ra)(e), Dt = t._emscripten_bind_PeGCSExtent_getSLat_0 = (e) => (Dt = t._emscripten_bind_PeGCSExtent_getSLat_0 = r.sa)(e), vt = t._emscripten_bind_PeGCSExtent_getRLon_0 = (e) => (vt = t._emscripten_bind_PeGCSExtent_getRLon_0 = r.ta)(e), Rt = t._emscripten_bind_PeGCSExtent_getNLat_0 = (e) => (Rt = t._emscripten_bind_PeGCSExtent_getNLat_0 = r.ua)(e), At = t._emscripten_bind_PeGCSExtent___destroy___0 = (e) => (At = t._emscripten_bind_PeGCSExtent___destroy___0 = r.va)(e), Gt = t._emscripten_bind_PeGeogcs_getDatum_0 = (e) => (Gt = t._emscripten_bind_PeGeogcs_getDatum_0 = r.wa)(e), Ct = t._emscripten_bind_PeGeogcs_getPrimem_0 = (e) => (Ct = t._emscripten_bind_PeGeogcs_getPrimem_0 = r.xa)(e), It = t._emscripten_bind_PeGeogcs_getUnit_0 = (e) => (It = t._emscripten_bind_PeGeogcs_getUnit_0 = r.ya)(e), jt = t._emscripten_bind_PeGeogcs_getCode_0 = (e) => (jt = t._emscripten_bind_PeGeogcs_getCode_0 = r.za)(e), Lt = t._emscripten_bind_PeGeogcs_getName_1 = (e, _) => (Lt = t._emscripten_bind_PeGeogcs_getName_1 = r.Aa)(e, _), Ut = t._emscripten_bind_PeGeogcs_getType_0 = (e) => (Ut = t._emscripten_bind_PeGeogcs_getType_0 = r.Ba)(e), Ft = t._emscripten_bind_PeGeogtran_isEqual_1 = (e, _) => (Ft = t._emscripten_bind_PeGeogtran_isEqual_1 = r.Ca)(e, _), Yt = t._emscripten_bind_PeGeogtran_getGeogcs1_0 = (e) => (Yt = t._emscripten_bind_PeGeogtran_getGeogcs1_0 = r.Da)(e), wt = t._emscripten_bind_PeGeogtran_getGeogcs2_0 = (e) => (wt = t._emscripten_bind_PeGeogtran_getGeogcs2_0 = r.Ea)(e), xt = t._emscripten_bind_PeGeogtran_getParameters_0 = (e) => (xt = t._emscripten_bind_PeGeogtran_getParameters_0 = r.Fa)(e), Ht = t._emscripten_bind_PeGeogtran_loadConstants_0 = (e) => (Ht = t._emscripten_bind_PeGeogtran_loadConstants_0 = r.Ga)(e), Xt = t._emscripten_bind_PeGeogtran_getCode_0 = (e) => (Xt = t._emscripten_bind_PeGeogtran_getCode_0 = r.Ha)(e), zt = t._emscripten_bind_PeGeogtran_getName_1 = (e, _) => (zt = t._emscripten_bind_PeGeogtran_getName_1 = r.Ia)(e, _), Zt = t._emscripten_bind_PeGeogtran_getType_0 = (e) => (Zt = t._emscripten_bind_PeGeogtran_getType_0 = r.Ja)(e), Wt = t._emscripten_bind_PeGTlistExtended_getGTlist_6 = (e, _, o, p, i, s) => (Wt = t._emscripten_bind_PeGTlistExtended_getGTlist_6 = r.Ka)(e, _, o, p, i, s), Bt = t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = (e) => (Bt = t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = r.La)(e), Kt = t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = (e) => (Kt = t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = r.Ma)(e), Vt = t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = (e) => (Vt = t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = r.Na)(e), qt = t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = (e) => (qt = t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = r.Oa)(e), kt = t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = (e) => (kt = t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = r.Pa)(e), $t = t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = (e) => ($t = t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = r.Qa)(e), Jt = t._emscripten_bind_PeHorizon_getNump_0 = (e) => (Jt = t._emscripten_bind_PeHorizon_getNump_0 = r.Ra)(e), Qt = t._emscripten_bind_PeHorizon_getKind_0 = (e) => (Qt = t._emscripten_bind_PeHorizon_getKind_0 = r.Sa)(e), e_ = t._emscripten_bind_PeHorizon_getInclusive_0 = (e) => (e_ = t._emscripten_bind_PeHorizon_getInclusive_0 = r.Ta)(e), t_ = t._emscripten_bind_PeHorizon_getSize_0 = (e) => (t_ = t._emscripten_bind_PeHorizon_getSize_0 = r.Ua)(e), __ = t._emscripten_bind_PeHorizon_getCoord_0 = (e) => (__ = t._emscripten_bind_PeHorizon_getCoord_0 = r.Va)(e), r_ = t._emscripten_bind_PeInteger_PeInteger_1 = (e) => (r_ = t._emscripten_bind_PeInteger_PeInteger_1 = r.Wa)(e), o_ = t._emscripten_bind_PeInteger_get_val_0 = (e) => (o_ = t._emscripten_bind_PeInteger_get_val_0 = r.Xa)(e), n_ = t._emscripten_bind_PeInteger_set_val_1 = (e, _) => (n_ = t._emscripten_bind_PeInteger_set_val_1 = r.Ya)(e, _), p_ = t._emscripten_bind_PeInteger___destroy___0 = (e) => (p_ = t._emscripten_bind_PeInteger___destroy___0 = r.Za)(e), i_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = (e) => (i_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = r._a)(e), c_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = (e) => (c_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = r.$a)(e), s_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = (e) => (s_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = r.ab)(e), P_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = (e) => (P_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = r.bb)(e), a_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = (e) => (a_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = r.cb)(e), g_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = (e) => (g_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = r.db)(e), y_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = (e) => (y_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = r.eb)(e), u_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = (e) => (u_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = r.fb)(e), d_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = (e) => (d_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = r.gb)(e), f_ = t._emscripten_bind_PeParameter_getValue_0 = (e) => (f_ = t._emscripten_bind_PeParameter_getValue_0 = r.hb)(e), E_ = t._emscripten_bind_PeParameter_getCode_0 = (e) => (E_ = t._emscripten_bind_PeParameter_getCode_0 = r.ib)(e), b_ = t._emscripten_bind_PeParameter_getName_1 = (e, _) => (b_ = t._emscripten_bind_PeParameter_getName_1 = r.jb)(e, _), m_ = t._emscripten_bind_PeParameter_getType_0 = (e) => (m_ = t._emscripten_bind_PeParameter_getType_0 = r.kb)(e), T_ = t._emscripten_bind_PePCSInfo_getCentralMeridian_0 = (e) => (T_ = t._emscripten_bind_PePCSInfo_getCentralMeridian_0 = r.lb)(e), O_ = t._emscripten_bind_PePCSInfo_getDomainMinx_0 = (e) => (O_ = t._emscripten_bind_PePCSInfo_getDomainMinx_0 = r.mb)(e), S_ = t._emscripten_bind_PePCSInfo_getDomainMiny_0 = (e) => (S_ = t._emscripten_bind_PePCSInfo_getDomainMiny_0 = r.nb)(e), N_ = t._emscripten_bind_PePCSInfo_getDomainMaxx_0 = (e) => (N_ = t._emscripten_bind_PePCSInfo_getDomainMaxx_0 = r.ob)(e), h_ = t._emscripten_bind_PePCSInfo_getDomainMaxy_0 = (e) => (h_ = t._emscripten_bind_PePCSInfo_getDomainMaxy_0 = r.pb)(e), l_ = t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = (e) => (l_ = t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = r.qb)(e), M_ = t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = (e) => (M_ = t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = r.rb)(e), D_ = t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = (e) => (D_ = t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = r.sb)(e), v_ = t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = (e) => (v_ = t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = r.tb)(e), R_ = t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = (e) => (R_ = t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = r.ub)(e), A_ = t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = (e) => (A_ = t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = r.vb)(e), G_ = t._emscripten_bind_PePCSInfo_isPannableRectangle_0 = (e) => (G_ = t._emscripten_bind_PePCSInfo_isPannableRectangle_0 = r.wb)(e), C_ = t._emscripten_bind_PePCSInfo_generate_2 = (e, _) => (C_ = t._emscripten_bind_PePCSInfo_generate_2 = r.xb)(e, _), I_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = (e) => (I_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = r.yb)(e), j_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = (e) => (j_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = r.zb)(e), L_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = (e) => (L_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = r.Ab)(e), U_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = (e) => (U_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = r.Bb)(e), F_ = t._emscripten_bind_PePrimem_getLongitude_0 = (e) => (F_ = t._emscripten_bind_PePrimem_getLongitude_0 = r.Cb)(e), Y_ = t._emscripten_bind_PePrimem_getCode_0 = (e) => (Y_ = t._emscripten_bind_PePrimem_getCode_0 = r.Db)(e), w_ = t._emscripten_bind_PePrimem_getName_1 = (e, _) => (w_ = t._emscripten_bind_PePrimem_getName_1 = r.Eb)(e, _), x_ = t._emscripten_bind_PePrimem_getType_0 = (e) => (x_ = t._emscripten_bind_PePrimem_getType_0 = r.Fb)(e), H_ = t._emscripten_bind_PeProjcs_getGeogcs_0 = (e) => (H_ = t._emscripten_bind_PeProjcs_getGeogcs_0 = r.Gb)(e), X_ = t._emscripten_bind_PeProjcs_getParameters_0 = (e) => (X_ = t._emscripten_bind_PeProjcs_getParameters_0 = r.Hb)(e), z_ = t._emscripten_bind_PeProjcs_getUnit_0 = (e) => (z_ = t._emscripten_bind_PeProjcs_getUnit_0 = r.Ib)(e), Z_ = t._emscripten_bind_PeProjcs_loadConstants_0 = (e) => (Z_ = t._emscripten_bind_PeProjcs_loadConstants_0 = r.Jb)(e), W_ = t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = (e) => (W_ = t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = r.Kb)(e), B_ = t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = (e) => (B_ = t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = r.Lb)(e), K_ = t._emscripten_bind_PeProjcs_getCode_0 = (e) => (K_ = t._emscripten_bind_PeProjcs_getCode_0 = r.Mb)(e), V_ = t._emscripten_bind_PeProjcs_getName_1 = (e, _) => (V_ = t._emscripten_bind_PeProjcs_getName_1 = r.Nb)(e, _), q_ = t._emscripten_bind_PeProjcs_getType_0 = (e) => (q_ = t._emscripten_bind_PeProjcs_getType_0 = r.Ob)(e), k_ = t._emscripten_bind_PeSpheroid_getAxis_0 = (e) => (k_ = t._emscripten_bind_PeSpheroid_getAxis_0 = r.Pb)(e), $_ = t._emscripten_bind_PeSpheroid_getFlattening_0 = (e) => ($_ = t._emscripten_bind_PeSpheroid_getFlattening_0 = r.Qb)(e), J_ = t._emscripten_bind_PeSpheroid_getCode_0 = (e) => (J_ = t._emscripten_bind_PeSpheroid_getCode_0 = r.Rb)(e), Q_ = t._emscripten_bind_PeSpheroid_getName_1 = (e, _) => (Q_ = t._emscripten_bind_PeSpheroid_getName_1 = r.Sb)(e, _), er = t._emscripten_bind_PeSpheroid_getType_0 = (e) => (er = t._emscripten_bind_PeSpheroid_getType_0 = r.Tb)(e), tr = t._emscripten_bind_PeUnit_getUnitFactor_0 = (e) => (tr = t._emscripten_bind_PeUnit_getUnitFactor_0 = r.Ub)(e), _r = t._emscripten_bind_PeUnit_getCode_0 = (e) => (_r = t._emscripten_bind_PeUnit_getCode_0 = r.Vb)(e), rr = t._emscripten_bind_PeUnit_getName_1 = (e, _) => (rr = t._emscripten_bind_PeUnit_getName_1 = r.Wb)(e, _), or = t._emscripten_bind_PeUnit_getType_0 = (e) => (or = t._emscripten_bind_PeUnit_getType_0 = r.Xb)(e), nr = t._emscripten_bind_PeVersion_version_string_0 = (e) => (nr = t._emscripten_bind_PeVersion_version_string_0 = r.Yb)(e);
  function pr() {
    function e() {
      ie || (ie = !0, t.calledRun = !0, Ne || (Tr(), fe(t), Or()));
    }
    re > 0 || (mr(), re > 0 || e());
  }
  function d() {
  }
  function q(e) {
    return (e || d).__cache__;
  }
  function T(e, _) {
    var o = q(_), p = o[e];
    return p || ((p = Object.create((_ || d).prototype)).ptr = e, o[e] = p);
  }
  function Jr(e, _) {
    return T(e.ptr, _);
  }
  function Qr(e) {
    if (!e.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
    e.__destroy__(), delete q(e.__class__)[e.ptr];
  }
  function eo(e, _) {
    return e.ptr === _.ptr;
  }
  function to(e) {
    return e.ptr;
  }
  function _o(e) {
    return e.__class__;
  }
  t._pe_getPeGTlistExtendedEntrySize = () => (t._pe_getPeGTlistExtendedEntrySize = r.Zb)(), t._pe_getPeGTlistExtendedGTsSize = () => (t._pe_getPeGTlistExtendedGTsSize = r._b)(), t._pe_getPeHorizonSize = () => (t._pe_getPeHorizonSize = r.$b)(), t._pe_geog_to_geog = (e, _, o, p, i) => (t._pe_geog_to_geog = r.bc)(e, _, o, p, i), t._pe_geog_to_proj = (e, _, o) => (t._pe_geog_to_proj = r.cc)(e, _, o), t._pe_geog_to_dd = (e, _, o, p, i) => (t._pe_geog_to_dd = r.dc)(e, _, o, p, i), t._pe_dd_to_geog = (e, _, o, p) => (t._pe_dd_to_geog = r.ec)(e, _, o, p), t._pe_geog_to_ddm = (e, _, o, p, i) => (t._pe_geog_to_ddm = r.fc)(e, _, o, p, i), t._pe_ddm_to_geog = (e, _, o, p) => (t._pe_ddm_to_geog = r.gc)(e, _, o, p), t._pe_geog_to_dms = (e, _, o, p, i) => (t._pe_geog_to_dms = r.hc)(e, _, o, p, i), t._pe_dms_to_geog = (e, _, o, p) => (t._pe_dms_to_geog = r.ic)(e, _, o, p), t._pe_geog_to_mgrs_extended = (e, _, o, p, i, s, g) => (t._pe_geog_to_mgrs_extended = r.jc)(e, _, o, p, i, s, g), t._pe_mgrs_to_geog_extended = (e, _, o, p, i) => (t._pe_mgrs_to_geog_extended = r.kc)(e, _, o, p, i), t._pe_geog_to_usng = (e, _, o, p, i, s, g) => (t._pe_geog_to_usng = r.lc)(e, _, o, p, i, s, g), t._pe_usng_to_geog = (e, _, o, p) => (t._pe_usng_to_geog = r.mc)(e, _, o, p), t._pe_geog_to_utm = (e, _, o, p, i) => (t._pe_geog_to_utm = r.nc)(e, _, o, p, i), t._pe_utm_to_geog = (e, _, o, p, i) => (t._pe_utm_to_geog = r.oc)(e, _, o, p, i), t._pe_object_to_string_ext = (e, _, o) => (t._pe_object_to_string_ext = r.pc)(e, _, o), t._pe_proj_to_geog_center = (e, _, o, p) => (t._pe_proj_to_geog_center = r.qc)(e, _, o, p), t.getValue = Gr, t.UTF8ToString = L, B = function e() {
    ie || pr(), ie || (B = e);
  }, pr(), d.prototype = Object.create(d.prototype), d.prototype.constructor = d, d.prototype.__class__ = d, d.__cache__ = {}, t.WrapperObject = d, t.getCache = q, t.wrapPointer = T, t.castObject = Jr, t.NULL = T(0), t.destroy = Qr, t.compare = eo, t.getPointer = to, t.getClass = _o;
  var P = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare() {
    if (P.needed) {
      for (var e = 0; e < P.temps.length; e++) t._webidl_free(P.temps[e]);
      P.temps.length = 0, t._webidl_free(P.buffer), P.buffer = 0, P.size += P.needed, P.needed = 0;
    }
    P.buffer || (P.size += 128, P.buffer = t._webidl_malloc(P.size), ge(P.buffer)), P.pos = 0;
  }, alloc(e, _) {
    ge(P.buffer);
    var o, p = _.BYTES_PER_ELEMENT, i = e.length * p;
    return i = kr(i, 8), P.pos + i >= P.size ? (ge(i > 0), P.needed += i, o = t._webidl_malloc(i), P.temps.push(o)) : (o = P.buffer + P.pos, P.pos += i), o;
  }, copy(e, _, o) {
    o /= _.BYTES_PER_ELEMENT;
    for (var p = 0; p < e.length; p++) _[o + p] = e[p];
  } };
  function de(e) {
    if (typeof e == "string") {
      var _ = qr(e), o = P.alloc(_, X);
      return P.copy(_, X, o), o;
    }
    return e;
  }
  function F(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, X);
      return P.copy(e, X, _), _;
    }
    return e;
  }
  function ro(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, ee);
      return P.copy(e, ee, _), _;
    }
    return e;
  }
  function oo(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, R);
      return P.copy(e, R, _), _;
    }
    return e;
  }
  function no(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, te);
      return P.copy(e, te, _), _;
    }
    return e;
  }
  function po(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, _e);
      return P.copy(e, _e, _), _;
    }
    return e;
  }
  function b() {
    throw "cannot construct a PeObject, no constructor in IDL";
  }
  function A() {
    throw "cannot construct a PeCoordsys, no constructor in IDL";
  }
  function x() {
    throw "cannot construct a VoidPtr, no constructor in IDL";
  }
  function D() {
    throw "cannot construct a PeDatum, no constructor in IDL";
  }
  function n() {
    throw "cannot construct a PeDefs, no constructor in IDL";
  }
  function G() {
    throw "cannot construct a PeFactory, no constructor in IDL";
  }
  function S(e, _, o, p, i, s) {
    e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), o && typeof o == "object" && (o = o.ptr), p && typeof p == "object" && (p = p.ptr), i && typeof i == "object" && (i = i.ptr), s && typeof s == "object" && (s = s.ptr), this.ptr = lt(e, _, o, p, i, s), q(S)[this.ptr] = this;
  }
  function m() {
    throw "cannot construct a PeGeogcs, no constructor in IDL";
  }
  function f() {
    throw "cannot construct a PeGeogtran, no constructor in IDL";
  }
  function j() {
    throw "cannot construct a PeGTlistExtended, no constructor in IDL";
  }
  function I() {
    throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
  }
  function U() {
    throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
  }
  function O() {
    throw "cannot construct a PeHorizon, no constructor in IDL";
  }
  function h(e) {
    e && typeof e == "object" && (e = e.ptr), this.ptr = r_(e), q(h)[this.ptr] = this;
  }
  function y() {
    throw "cannot construct a PeNotationMgrs, no constructor in IDL";
  }
  function E() {
    throw "cannot construct a PeNotationUtm, no constructor in IDL";
  }
  function C() {
    throw "cannot construct a PeParameter, no constructor in IDL";
  }
  function c() {
    throw "cannot construct a PePCSInfo, no constructor in IDL";
  }
  function v() {
    throw "cannot construct a PePrimem, no constructor in IDL";
  }
  function u() {
    throw "cannot construct a PeProjcs, no constructor in IDL";
  }
  function N() {
    throw "cannot construct a PeSpheroid, no constructor in IDL";
  }
  function l() {
    throw "cannot construct a PeUnit, no constructor in IDL";
  }
  function H() {
    throw "cannot construct a PeVersion, no constructor in IDL";
  }
  return b.prototype = Object.create(d.prototype), b.prototype.constructor = b, b.prototype.__class__ = b, b.__cache__ = {}, t.PeObject = b, b.prototype.getCode = b.prototype.getCode = function() {
    var e = this.ptr;
    return Ce(e);
  }, b.prototype.getName = b.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(Ie(_, e));
  }, b.prototype.getType = b.prototype.getType = function() {
    var e = this.ptr;
    return je(e);
  }, A.prototype = Object.create(b.prototype), A.prototype.constructor = A, A.prototype.__class__ = A, A.__cache__ = {}, t.PeCoordsys = A, A.prototype.getCode = A.prototype.getCode = function() {
    var e = this.ptr;
    return Le(e);
  }, A.prototype.getName = A.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(Ue(_, e));
  }, A.prototype.getType = A.prototype.getType = function() {
    var e = this.ptr;
    return Fe(e);
  }, x.prototype = Object.create(d.prototype), x.prototype.constructor = x, x.prototype.__class__ = x, x.__cache__ = {}, t.VoidPtr = x, x.prototype.__destroy__ = x.prototype.__destroy__ = function() {
    var e = this.ptr;
    Ye(e);
  }, D.prototype = Object.create(b.prototype), D.prototype.constructor = D, D.prototype.__class__ = D, D.__cache__ = {}, t.PeDatum = D, D.prototype.getSpheroid = D.prototype.getSpheroid = function() {
    var e = this.ptr;
    return T(we(e), N);
  }, D.prototype.getCode = D.prototype.getCode = function() {
    var e = this.ptr;
    return xe(e);
  }, D.prototype.getName = D.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(He(_, e));
  }, D.prototype.getType = D.prototype.getType = function() {
    var e = this.ptr;
    return Xe(e);
  }, n.prototype = Object.create(d.prototype), n.prototype.constructor = n, n.prototype.__class__ = n, n.__cache__ = {}, t.PeDefs = n, n.prototype.get_PE_BUFFER_MAX = n.prototype.get_PE_BUFFER_MAX = function() {
    var e = this.ptr;
    return ze(e);
  }, Object.defineProperty(n.prototype, "PE_BUFFER_MAX", { get: n.prototype.get_PE_BUFFER_MAX }), n.prototype.get_PE_NAME_MAX = n.prototype.get_PE_NAME_MAX = function() {
    var e = this.ptr;
    return Ze(e);
  }, Object.defineProperty(n.prototype, "PE_NAME_MAX", { get: n.prototype.get_PE_NAME_MAX }), n.prototype.get_PE_MGRS_MAX = n.prototype.get_PE_MGRS_MAX = function() {
    var e = this.ptr;
    return We(e);
  }, Object.defineProperty(n.prototype, "PE_MGRS_MAX", { get: n.prototype.get_PE_MGRS_MAX }), n.prototype.get_PE_USNG_MAX = n.prototype.get_PE_USNG_MAX = function() {
    var e = this.ptr;
    return Be(e);
  }, Object.defineProperty(n.prototype, "PE_USNG_MAX", { get: n.prototype.get_PE_USNG_MAX }), n.prototype.get_PE_DD_MAX = n.prototype.get_PE_DD_MAX = function() {
    var e = this.ptr;
    return Ke(e);
  }, Object.defineProperty(n.prototype, "PE_DD_MAX", { get: n.prototype.get_PE_DD_MAX }), n.prototype.get_PE_DMS_MAX = n.prototype.get_PE_DMS_MAX = function() {
    var e = this.ptr;
    return Ve(e);
  }, Object.defineProperty(n.prototype, "PE_DMS_MAX", { get: n.prototype.get_PE_DMS_MAX }), n.prototype.get_PE_DDM_MAX = n.prototype.get_PE_DDM_MAX = function() {
    var e = this.ptr;
    return qe(e);
  }, Object.defineProperty(n.prototype, "PE_DDM_MAX", { get: n.prototype.get_PE_DDM_MAX }), n.prototype.get_PE_UTM_MAX = n.prototype.get_PE_UTM_MAX = function() {
    var e = this.ptr;
    return ke(e);
  }, Object.defineProperty(n.prototype, "PE_UTM_MAX", { get: n.prototype.get_PE_UTM_MAX }), n.prototype.get_PE_PARM_MAX = n.prototype.get_PE_PARM_MAX = function() {
    var e = this.ptr;
    return $e(e);
  }, Object.defineProperty(n.prototype, "PE_PARM_MAX", { get: n.prototype.get_PE_PARM_MAX }), n.prototype.get_PE_TYPE_NONE = n.prototype.get_PE_TYPE_NONE = function() {
    var e = this.ptr;
    return Je(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_NONE", { get: n.prototype.get_PE_TYPE_NONE }), n.prototype.get_PE_TYPE_GEOGCS = n.prototype.get_PE_TYPE_GEOGCS = function() {
    var e = this.ptr;
    return Qe(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_GEOGCS", { get: n.prototype.get_PE_TYPE_GEOGCS }), n.prototype.get_PE_TYPE_PROJCS = n.prototype.get_PE_TYPE_PROJCS = function() {
    var e = this.ptr;
    return et(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_PROJCS", { get: n.prototype.get_PE_TYPE_PROJCS }), n.prototype.get_PE_TYPE_GEOGTRAN = n.prototype.get_PE_TYPE_GEOGTRAN = function() {
    var e = this.ptr;
    return tt(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_GEOGTRAN", { get: n.prototype.get_PE_TYPE_GEOGTRAN }), n.prototype.get_PE_TYPE_COORDSYS = n.prototype.get_PE_TYPE_COORDSYS = function() {
    var e = this.ptr;
    return _t(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_COORDSYS", { get: n.prototype.get_PE_TYPE_COORDSYS }), n.prototype.get_PE_TYPE_UNIT = n.prototype.get_PE_TYPE_UNIT = function() {
    var e = this.ptr;
    return rt(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_UNIT", { get: n.prototype.get_PE_TYPE_UNIT }), n.prototype.get_PE_TYPE_LINUNIT = n.prototype.get_PE_TYPE_LINUNIT = function() {
    var e = this.ptr;
    return ot(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_LINUNIT", { get: n.prototype.get_PE_TYPE_LINUNIT }), n.prototype.get_PE_STR_OPTS_NONE = n.prototype.get_PE_STR_OPTS_NONE = function() {
    var e = this.ptr;
    return nt(e);
  }, Object.defineProperty(n.prototype, "PE_STR_OPTS_NONE", { get: n.prototype.get_PE_STR_OPTS_NONE }), n.prototype.get_PE_STR_AUTH_NONE = n.prototype.get_PE_STR_AUTH_NONE = function() {
    var e = this.ptr;
    return pt(e);
  }, Object.defineProperty(n.prototype, "PE_STR_AUTH_NONE", { get: n.prototype.get_PE_STR_AUTH_NONE }), n.prototype.get_PE_STR_AUTH_TOP = n.prototype.get_PE_STR_AUTH_TOP = function() {
    var e = this.ptr;
    return it(e);
  }, Object.defineProperty(n.prototype, "PE_STR_AUTH_TOP", { get: n.prototype.get_PE_STR_AUTH_TOP }), n.prototype.get_PE_STR_NAME_CANON = n.prototype.get_PE_STR_NAME_CANON = function() {
    var e = this.ptr;
    return ct(e);
  }, Object.defineProperty(n.prototype, "PE_STR_NAME_CANON", { get: n.prototype.get_PE_STR_NAME_CANON }), n.prototype.get_PE_STR_FMT_WKT = n.prototype.get_PE_STR_FMT_WKT = function() {
    var e = this.ptr;
    return st(e);
  }, Object.defineProperty(n.prototype, "PE_STR_FMT_WKT", { get: n.prototype.get_PE_STR_FMT_WKT }), n.prototype.get_PE_STR_FMT_WKT2 = n.prototype.get_PE_STR_FMT_WKT2 = function() {
    var e = this.ptr;
    return Pt(e);
  }, Object.defineProperty(n.prototype, "PE_STR_FMT_WKT2", { get: n.prototype.get_PE_STR_FMT_WKT2 }), n.prototype.get_PE_PARM_X0 = n.prototype.get_PE_PARM_X0 = function() {
    var e = this.ptr;
    return at(e);
  }, Object.defineProperty(n.prototype, "PE_PARM_X0", { get: n.prototype.get_PE_PARM_X0 }), n.prototype.get_PE_PARM_ND = n.prototype.get_PE_PARM_ND = function() {
    var e = this.ptr;
    return gt(e);
  }, Object.defineProperty(n.prototype, "PE_PARM_ND", { get: n.prototype.get_PE_PARM_ND }), n.prototype.get_PE_TRANSFORM_1_TO_2 = n.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
    var e = this.ptr;
    return yt(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_1_TO_2", { get: n.prototype.get_PE_TRANSFORM_1_TO_2 }), n.prototype.get_PE_TRANSFORM_2_TO_1 = n.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
    var e = this.ptr;
    return ut(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_2_TO_1", { get: n.prototype.get_PE_TRANSFORM_2_TO_1 }), n.prototype.get_PE_TRANSFORM_P_TO_G = n.prototype.get_PE_TRANSFORM_P_TO_G = function() {
    var e = this.ptr;
    return dt(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_P_TO_G", { get: n.prototype.get_PE_TRANSFORM_P_TO_G }), n.prototype.get_PE_TRANSFORM_G_TO_P = n.prototype.get_PE_TRANSFORM_G_TO_P = function() {
    var e = this.ptr;
    return ft(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_G_TO_P", { get: n.prototype.get_PE_TRANSFORM_G_TO_P }), n.prototype.get_PE_HORIZON_RECT = n.prototype.get_PE_HORIZON_RECT = function() {
    var e = this.ptr;
    return Et(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_RECT", { get: n.prototype.get_PE_HORIZON_RECT }), n.prototype.get_PE_HORIZON_POLY = n.prototype.get_PE_HORIZON_POLY = function() {
    var e = this.ptr;
    return bt(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_POLY", { get: n.prototype.get_PE_HORIZON_POLY }), n.prototype.get_PE_HORIZON_LINE = n.prototype.get_PE_HORIZON_LINE = function() {
    var e = this.ptr;
    return mt(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_LINE", { get: n.prototype.get_PE_HORIZON_LINE }), n.prototype.get_PE_HORIZON_DELTA = n.prototype.get_PE_HORIZON_DELTA = function() {
    var e = this.ptr;
    return Tt(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_DELTA", { get: n.prototype.get_PE_HORIZON_DELTA }), G.prototype = Object.create(d.prototype), G.prototype.constructor = G, G.prototype.__class__ = G, G.__cache__ = {}, t.PeFactory = G, G.prototype.initialize = G.prototype.initialize = function(e) {
    P.prepare(), e = e && typeof e == "object" ? e.ptr : de(e), Ot(e);
  }, G.prototype.factoryByType = G.prototype.factoryByType = function(e, _) {
    return e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), T(St(e, _), b);
  }, G.prototype.fromString = G.prototype.fromString = function(e, _) {
    return P.prepare(), e && typeof e == "object" && (e = e.ptr), _ = _ && typeof _ == "object" ? _.ptr : de(_), T(Nt(e, _), b);
  }, G.prototype.getCode = G.prototype.getCode = function(e) {
    return e && typeof e == "object" && (e = e.ptr), ht(e);
  }, S.prototype = Object.create(d.prototype), S.prototype.constructor = S, S.prototype.__class__ = S, S.__cache__ = {}, t.PeGCSExtent = S, S.prototype.getLLon = S.prototype.getLLon = function() {
    var e = this.ptr;
    return Mt(e);
  }, S.prototype.getSLat = S.prototype.getSLat = function() {
    var e = this.ptr;
    return Dt(e);
  }, S.prototype.getRLon = S.prototype.getRLon = function() {
    var e = this.ptr;
    return vt(e);
  }, S.prototype.getNLat = S.prototype.getNLat = function() {
    var e = this.ptr;
    return Rt(e);
  }, S.prototype.__destroy__ = S.prototype.__destroy__ = function() {
    var e = this.ptr;
    At(e);
  }, m.prototype = Object.create(A.prototype), m.prototype.constructor = m, m.prototype.__class__ = m, m.__cache__ = {}, t.PeGeogcs = m, m.prototype.getDatum = m.prototype.getDatum = function() {
    var e = this.ptr;
    return T(Gt(e), D);
  }, m.prototype.getPrimem = m.prototype.getPrimem = function() {
    var e = this.ptr;
    return T(Ct(e), v);
  }, m.prototype.getUnit = m.prototype.getUnit = function() {
    var e = this.ptr;
    return T(It(e), l);
  }, m.prototype.getCode = m.prototype.getCode = function() {
    var e = this.ptr;
    return jt(e);
  }, m.prototype.getName = m.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(Lt(_, e));
  }, m.prototype.getType = m.prototype.getType = function() {
    var e = this.ptr;
    return Ut(e);
  }, f.prototype = Object.create(b.prototype), f.prototype.constructor = f, f.prototype.__class__ = f, f.__cache__ = {}, t.PeGeogtran = f, f.prototype.isEqual = f.prototype.isEqual = function(e) {
    var _ = this.ptr;
    return e && typeof e == "object" && (e = e.ptr), !!Ft(_, e);
  }, f.prototype.getGeogcs1 = f.prototype.getGeogcs1 = function() {
    var e = this.ptr;
    return T(Yt(e), m);
  }, f.prototype.getGeogcs2 = f.prototype.getGeogcs2 = function() {
    var e = this.ptr;
    return T(wt(e), m);
  }, f.prototype.getParameters = f.prototype.getParameters = function() {
    var e = this.ptr;
    return xt(e);
  }, f.prototype.loadConstants = f.prototype.loadConstants = function() {
    var e = this.ptr;
    return !!Ht(e);
  }, f.prototype.getCode = f.prototype.getCode = function() {
    var e = this.ptr;
    return Xt(e);
  }, f.prototype.getName = f.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(zt(_, e));
  }, f.prototype.getType = f.prototype.getType = function() {
    var e = this.ptr;
    return Zt(e);
  }, j.prototype = Object.create(d.prototype), j.prototype.constructor = j, j.prototype.__class__ = j, j.__cache__ = {}, t.PeGTlistExtended = j, j.prototype.getGTlist = j.prototype.getGTlist = function(e, _, o, p, i, s) {
    return e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), o && typeof o == "object" && (o = o.ptr), p && typeof p == "object" && (p = p.ptr), i && typeof i == "object" && (i = i.ptr), s && typeof s == "object" && (s = s.ptr), T(Wt(e, _, o, p, i, s), I);
  }, j.prototype.get_PE_GTLIST_OPTS_COMMON = j.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
    var e = this.ptr;
    return Bt(e);
  }, Object.defineProperty(j.prototype, "PE_GTLIST_OPTS_COMMON", { get: j.prototype.get_PE_GTLIST_OPTS_COMMON }), I.prototype = Object.create(d.prototype), I.prototype.constructor = I, I.prototype.__class__ = I, I.__cache__ = {}, t.PeGTlistExtendedEntry = I, I.prototype.getEntries = I.prototype.getEntries = function() {
    var e = this.ptr;
    return T(Kt(e), U);
  }, I.prototype.getSteps = I.prototype.getSteps = function() {
    var e = this.ptr;
    return Vt(e);
  }, I.prototype.Delete = I.prototype.Delete = function(e) {
    e && typeof e == "object" && (e = e.ptr), qt(e);
  }, U.prototype = Object.create(d.prototype), U.prototype.constructor = U, U.prototype.__class__ = U, U.__cache__ = {}, t.PeGTlistExtendedGTs = U, U.prototype.getDirection = U.prototype.getDirection = function() {
    var e = this.ptr;
    return kt(e);
  }, U.prototype.getGeogtran = U.prototype.getGeogtran = function() {
    var e = this.ptr;
    return T($t(e), f);
  }, O.prototype = Object.create(d.prototype), O.prototype.constructor = O, O.prototype.__class__ = O, O.__cache__ = {}, t.PeHorizon = O, O.prototype.getNump = O.prototype.getNump = function() {
    var e = this.ptr;
    return Jt(e);
  }, O.prototype.getKind = O.prototype.getKind = function() {
    var e = this.ptr;
    return Qt(e);
  }, O.prototype.getInclusive = O.prototype.getInclusive = function() {
    var e = this.ptr;
    return e_(e);
  }, O.prototype.getSize = O.prototype.getSize = function() {
    var e = this.ptr;
    return t_(e);
  }, O.prototype.getCoord = O.prototype.getCoord = function() {
    var e = this.ptr;
    return __(e);
  }, h.prototype = Object.create(d.prototype), h.prototype.constructor = h, h.prototype.__class__ = h, h.__cache__ = {}, t.PeInteger = h, h.prototype.get_val = h.prototype.get_val = function() {
    var e = this.ptr;
    return o_(e);
  }, h.prototype.set_val = h.prototype.set_val = function(e) {
    var _ = this.ptr;
    e && typeof e == "object" && (e = e.ptr), n_(_, e);
  }, Object.defineProperty(h.prototype, "val", { get: h.prototype.get_val, set: h.prototype.set_val }), h.prototype.__destroy__ = h.prototype.__destroy__ = function() {
    var e = this.ptr;
    p_(e);
  }, y.prototype = Object.create(d.prototype), y.prototype.constructor = y, y.prototype.__class__ = y, y.__cache__ = {}, t.PeNotationMgrs = y, y.prototype.get_PE_MGRS_STYLE_NEW = y.prototype.get_PE_MGRS_STYLE_NEW = function() {
    var e = this.ptr;
    return i_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_STYLE_NEW", { get: y.prototype.get_PE_MGRS_STYLE_NEW }), y.prototype.get_PE_MGRS_STYLE_OLD = y.prototype.get_PE_MGRS_STYLE_OLD = function() {
    var e = this.ptr;
    return c_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_STYLE_OLD", { get: y.prototype.get_PE_MGRS_STYLE_OLD }), y.prototype.get_PE_MGRS_STYLE_AUTO = y.prototype.get_PE_MGRS_STYLE_AUTO = function() {
    var e = this.ptr;
    return s_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_STYLE_AUTO", { get: y.prototype.get_PE_MGRS_STYLE_AUTO }), y.prototype.get_PE_MGRS_180_ZONE_1_PLUS = y.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
    var e = this.ptr;
    return P_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: y.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), y.prototype.get_PE_MGRS_ADD_SPACES = y.prototype.get_PE_MGRS_ADD_SPACES = function() {
    var e = this.ptr;
    return a_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_ADD_SPACES", { get: y.prototype.get_PE_MGRS_ADD_SPACES }), E.prototype = Object.create(d.prototype), E.prototype.constructor = E, E.prototype.__class__ = E, E.__cache__ = {}, t.PeNotationUtm = E, E.prototype.get_PE_UTM_OPTS_NONE = E.prototype.get_PE_UTM_OPTS_NONE = function() {
    var e = this.ptr;
    return g_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_NONE", { get: E.prototype.get_PE_UTM_OPTS_NONE }), E.prototype.get_PE_UTM_OPTS_NS = E.prototype.get_PE_UTM_OPTS_NS = function() {
    var e = this.ptr;
    return y_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_NS", { get: E.prototype.get_PE_UTM_OPTS_NS }), E.prototype.get_PE_UTM_OPTS_NS_STRICT = E.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
    var e = this.ptr;
    return u_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_NS_STRICT", { get: E.prototype.get_PE_UTM_OPTS_NS_STRICT }), E.prototype.get_PE_UTM_OPTS_ADD_SPACES = E.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
    var e = this.ptr;
    return d_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: E.prototype.get_PE_UTM_OPTS_ADD_SPACES }), C.prototype = Object.create(b.prototype), C.prototype.constructor = C, C.prototype.__class__ = C, C.__cache__ = {}, t.PeParameter = C, C.prototype.getValue = C.prototype.getValue = function() {
    var e = this.ptr;
    return f_(e);
  }, C.prototype.getCode = C.prototype.getCode = function() {
    var e = this.ptr;
    return E_(e);
  }, C.prototype.getName = C.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(b_(_, e));
  }, C.prototype.getType = C.prototype.getType = function() {
    var e = this.ptr;
    return m_(e);
  }, c.prototype = Object.create(d.prototype), c.prototype.constructor = c, c.prototype.__class__ = c, c.__cache__ = {}, t.PePCSInfo = c, c.prototype.getCentralMeridian = c.prototype.getCentralMeridian = function() {
    var e = this.ptr;
    return T_(e);
  }, c.prototype.getDomainMinx = c.prototype.getDomainMinx = function() {
    var e = this.ptr;
    return O_(e);
  }, c.prototype.getDomainMiny = c.prototype.getDomainMiny = function() {
    var e = this.ptr;
    return S_(e);
  }, c.prototype.getDomainMaxx = c.prototype.getDomainMaxx = function() {
    var e = this.ptr;
    return N_(e);
  }, c.prototype.getDomainMaxy = c.prototype.getDomainMaxy = function() {
    var e = this.ptr;
    return h_(e);
  }, c.prototype.getNorthPoleLocation = c.prototype.getNorthPoleLocation = function() {
    var e = this.ptr;
    return l_(e);
  }, c.prototype.getNorthPoleGeometry = c.prototype.getNorthPoleGeometry = function() {
    var e = this.ptr;
    return M_(e);
  }, c.prototype.getSouthPoleLocation = c.prototype.getSouthPoleLocation = function() {
    var e = this.ptr;
    return D_(e);
  }, c.prototype.getSouthPoleGeometry = c.prototype.getSouthPoleGeometry = function() {
    var e = this.ptr;
    return v_(e);
  }, c.prototype.isDensificationNeeded = c.prototype.isDensificationNeeded = function() {
    var e = this.ptr;
    return !!R_(e);
  }, c.prototype.isGcsHorizonMultiOverlap = c.prototype.isGcsHorizonMultiOverlap = function() {
    var e = this.ptr;
    return !!A_(e);
  }, c.prototype.isPannableRectangle = c.prototype.isPannableRectangle = function() {
    var e = this.ptr;
    return !!G_(e);
  }, c.prototype.generate = c.prototype.generate = function(e, _) {
    return e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), T(C_(e, _), c);
  }, c.prototype.get_PE_PCSINFO_OPTION_NONE = c.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
    var e = this.ptr;
    return I_(e);
  }, Object.defineProperty(c.prototype, "PE_PCSINFO_OPTION_NONE", { get: c.prototype.get_PE_PCSINFO_OPTION_NONE }), c.prototype.get_PE_PCSINFO_OPTION_DOMAIN = c.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
    var e = this.ptr;
    return j_(e);
  }, Object.defineProperty(c.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: c.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), c.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = c.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
    var e = this.ptr;
    return L_(e);
  }, Object.defineProperty(c.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: c.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), c.prototype.get_PE_POLE_POINT = c.prototype.get_PE_POLE_POINT = function() {
    var e = this.ptr;
    return U_(e);
  }, Object.defineProperty(c.prototype, "PE_POLE_POINT", { get: c.prototype.get_PE_POLE_POINT }), v.prototype = Object.create(b.prototype), v.prototype.constructor = v, v.prototype.__class__ = v, v.__cache__ = {}, t.PePrimem = v, v.prototype.getLongitude = v.prototype.getLongitude = function() {
    var e = this.ptr;
    return F_(e);
  }, v.prototype.getCode = v.prototype.getCode = function() {
    var e = this.ptr;
    return Y_(e);
  }, v.prototype.getName = v.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(w_(_, e));
  }, v.prototype.getType = v.prototype.getType = function() {
    var e = this.ptr;
    return x_(e);
  }, u.prototype = Object.create(A.prototype), u.prototype.constructor = u, u.prototype.__class__ = u, u.__cache__ = {}, t.PeProjcs = u, u.prototype.getGeogcs = u.prototype.getGeogcs = function() {
    var e = this.ptr;
    return T(H_(e), m);
  }, u.prototype.getParameters = u.prototype.getParameters = function() {
    var e = this.ptr;
    return X_(e);
  }, u.prototype.getUnit = u.prototype.getUnit = function() {
    var e = this.ptr;
    return T(z_(e), l);
  }, u.prototype.loadConstants = u.prototype.loadConstants = function() {
    var e = this.ptr;
    return !!Z_(e);
  }, u.prototype.horizonGcsGenerate = u.prototype.horizonGcsGenerate = function() {
    var e = this.ptr;
    return T(W_(e), O);
  }, u.prototype.horizonPcsGenerate = u.prototype.horizonPcsGenerate = function() {
    var e = this.ptr;
    return T(B_(e), O);
  }, u.prototype.getCode = u.prototype.getCode = function() {
    var e = this.ptr;
    return K_(e);
  }, u.prototype.getName = u.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(V_(_, e));
  }, u.prototype.getType = u.prototype.getType = function() {
    var e = this.ptr;
    return q_(e);
  }, N.prototype = Object.create(b.prototype), N.prototype.constructor = N, N.prototype.__class__ = N, N.__cache__ = {}, t.PeSpheroid = N, N.prototype.getAxis = N.prototype.getAxis = function() {
    var e = this.ptr;
    return k_(e);
  }, N.prototype.getFlattening = N.prototype.getFlattening = function() {
    var e = this.ptr;
    return $_(e);
  }, N.prototype.getCode = N.prototype.getCode = function() {
    var e = this.ptr;
    return J_(e);
  }, N.prototype.getName = N.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(Q_(_, e));
  }, N.prototype.getType = N.prototype.getType = function() {
    var e = this.ptr;
    return er(e);
  }, l.prototype = Object.create(b.prototype), l.prototype.constructor = l, l.prototype.__class__ = l, l.__cache__ = {}, t.PeUnit = l, l.prototype.getUnitFactor = l.prototype.getUnitFactor = function() {
    var e = this.ptr;
    return tr(e);
  }, l.prototype.getCode = l.prototype.getCode = function() {
    var e = this.ptr;
    return _r(e);
  }, l.prototype.getName = l.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = F(e)), L(rr(_, e));
  }, l.prototype.getType = l.prototype.getType = function() {
    var e = this.ptr;
    return or(e);
  }, H.prototype = Object.create(d.prototype), H.prototype.constructor = H, H.prototype.__class__ = H, H.__cache__ = {}, t.PeVersion = H, H.prototype.version_string = H.prototype.version_string = function() {
    var e = this.ptr;
    return L(nr(e));
  }, t.ensureCache = P, t.ensureString = de, t.ensureInt8 = F, t.ensureInt16 = ro, t.ensureInt32 = oo, t.ensureFloat32 = no, t.ensureFloat64 = po, ur;
}, Pr.exports = ar;
const so = co(gr.exports), ao = Object.freeze(Object.defineProperty({ __proto__: null, default: so }, Symbol.toStringTag, { value: "Module" }));
export {
  ao as p
};
//# sourceMappingURL=pe-wasm-CmzlKfIX.js.map
