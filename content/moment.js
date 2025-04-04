!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : (e.moment = t());
})(this, function () {
  "use strict";
  var H;
  function f() {
    return H.apply(null, arguments);
  }
  function a(e) {
    return (
      e instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(e)
    );
  }
  function F(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }
  function c(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function L(e) {
    if (Object.getOwnPropertyNames)
      return 0 === Object.getOwnPropertyNames(e).length;
    for (var t in e) if (c(e, t)) return;
    return 1;
  }
  function o(e) {
    return void 0 === e;
  }
  function u(e) {
    return (
      "number" == typeof e ||
      "[object Number]" === Object.prototype.toString.call(e)
    );
  }
  function V(e) {
    return (
      e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    );
  }
  function G(e, t) {
    for (var n = [], s = e.length, i = 0; i < s; ++i) n.push(t(e[i], i));
    return n;
  }
  function E(e, t) {
    for (var n in t) c(t, n) && (e[n] = t[n]);
    return (
      c(t, "toString") && (e.toString = t.toString),
      c(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function l(e, t, n, s) {
    return Wt(e, t, n, s, !0).utc();
  }
  function m(e) {
    return (
      null == e._pf &&
        (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        }),
      e._pf
    );
  }
  function A(e) {
    var t,
      n,
      s = e._d && !isNaN(e._d.getTime());
    return (
      s &&
        ((t = m(e)),
        (n = j.call(t.parsedDateParts, function (e) {
          return null != e;
        })),
        (s =
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidEra &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n))),
        e._strict &&
          (s =
            s &&
            0 === t.charsLeftOver &&
            0 === t.unusedTokens.length &&
            void 0 === t.bigHour)),
      null != Object.isFrozen && Object.isFrozen(e)
        ? s
        : ((e._isValid = s), e._isValid)
    );
  }
  function I(e) {
    var t = l(NaN);
    return null != e ? E(m(t), e) : (m(t).userInvalidated = !0), t;
  }
  var j =
      Array.prototype.some ||
      function (e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
          if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
      },
    Z = (f.momentProperties = []),
    z = !1;
  function q(e, t) {
    var n,
      s,
      i,
      r = Z.length;
    if (
      (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      o(t._i) || (e._i = t._i),
      o(t._f) || (e._f = t._f),
      o(t._l) || (e._l = t._l),
      o(t._strict) || (e._strict = t._strict),
      o(t._tzm) || (e._tzm = t._tzm),
      o(t._isUTC) || (e._isUTC = t._isUTC),
      o(t._offset) || (e._offset = t._offset),
      o(t._pf) || (e._pf = m(t)),
      o(t._locale) || (e._locale = t._locale),
      0 < r)
    )
      for (n = 0; n < r; n++) o((i = t[(s = Z[n])])) || (e[s] = i);
    return e;
  }
  function $(e) {
    q(this, e),
      (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === z && ((z = !0), f.updateOffset(this), (z = !1));
  }
  function d(e) {
    return e instanceof $ || (null != e && null != e._isAMomentObject);
  }
  function B(e) {
    !1 === f.suppressDeprecationWarnings &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function e(r, a) {
    var o = !0;
    return E(function () {
      if ((null != f.deprecationHandler && f.deprecationHandler(null, r), o)) {
        for (var e, t, n = [], s = arguments.length, i = 0; i < s; i++) {
          if (((e = ""), "object" == typeof arguments[i])) {
            for (t in ((e += "\n[" + i + "] "), arguments[0]))
              c(arguments[0], t) && (e += t + ": " + arguments[0][t] + ", ");
            e = e.slice(0, -2);
          } else e = arguments[i];
          n.push(e);
        }
        B(
          r +
            "\nArguments: " +
            Array.prototype.slice.call(n).join("") +
            "\n" +
            new Error().stack,
        ),
          (o = !1);
      }
      return a.apply(this, arguments);
    }, a);
  }
  var J = {};
  function Q(e, t) {
    null != f.deprecationHandler && f.deprecationHandler(e, t),
      J[e] || (B(t), (J[e] = !0));
  }
  function h(e) {
    return (
      ("undefined" != typeof Function && e instanceof Function) ||
      "[object Function]" === Object.prototype.toString.call(e)
    );
  }
  function X(e, t) {
    var n,
      s = E({}, e);
    for (n in t)
      c(t, n) &&
        (F(e[n]) && F(t[n])
          ? ((s[n] = {}), E(s[n], e[n]), E(s[n], t[n]))
          : null != t[n]
            ? (s[n] = t[n])
            : delete s[n]);
    for (n in e) c(e, n) && !c(t, n) && F(e[n]) && (s[n] = E({}, s[n]));
    return s;
  }
  function K(e) {
    null != e && this.set(e);
  }
  (f.suppressDeprecationWarnings = !1), (f.deprecationHandler = null);
  var ee =
    Object.keys ||
    function (e) {
      var t,
        n = [];
      for (t in e) c(e, t) && n.push(t);
      return n;
    };
  function r(e, t, n) {
    var s = "" + Math.abs(e);
    return (
      (0 <= e ? (n ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, t - s.length))
        .toString()
        .substr(1) +
      s
    );
  }
  var te =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    ne = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    se = {},
    ie = {};
  function s(e, t, n, s) {
    var i =
      "string" == typeof s
        ? function () {
            return this[s]();
          }
        : s;
    e && (ie[e] = i),
      t &&
        (ie[t[0]] = function () {
          return r(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (ie[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function re(e, t) {
    return e.isValid()
      ? ((t = ae(t, e.localeData())),
        (se[t] =
          se[t] ||
          (function (s) {
            for (var e, i = s.match(te), t = 0, r = i.length; t < r; t++)
              ie[i[t]]
                ? (i[t] = ie[i[t]])
                : (i[t] = (e = i[t]).match(/\[[\s\S]/)
                    ? e.replace(/^\[|\]$/g, "")
                    : e.replace(/\\/g, ""));
            return function (e) {
              for (var t = "", n = 0; n < r; n++)
                t += h(i[n]) ? i[n].call(e, s) : i[n];
              return t;
            };
          })(t)),
        se[t](e))
      : e.localeData().invalidDate();
  }
  function ae(e, t) {
    var n = 5;
    function s(e) {
      return t.longDateFormat(e) || e;
    }
    for (ne.lastIndex = 0; 0 <= n && ne.test(e); )
      (e = e.replace(ne, s)), (ne.lastIndex = 0), --n;
    return e;
  }
  var oe = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year",
  };
  function _(e) {
    return "string" == typeof e ? oe[e] || oe[e.toLowerCase()] : void 0;
  }
  function ue(e) {
    var t,
      n,
      s = {};
    for (n in e) c(e, n) && (t = _(n)) && (s[t] = e[n]);
    return s;
  }
  var le = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1,
  };
  var de = /\d/,
    t = /\d\d/,
    he = /\d{3}/,
    ce = /\d{4}/,
    fe = /[+-]?\d{6}/,
    n = /\d\d?/,
    me = /\d\d\d\d?/,
    _e = /\d\d\d\d\d\d?/,
    ye = /\d{1,3}/,
    ge = /\d{1,4}/,
    we = /[+-]?\d{1,6}/,
    pe = /\d+/,
    ke = /[+-]?\d+/,
    Me = /Z|[+-]\d\d:?\d\d/gi,
    ve = /Z|[+-]\d\d(?::?\d\d)?/gi,
    i =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    y = /^[1-9]\d?/,
    g = /^([1-9]\d|\d)/;
  function w(e, n, s) {
    Ye[e] = h(n)
      ? n
      : function (e, t) {
          return e && s ? s : n;
        };
  }
  function De(e, t) {
    return c(Ye, e)
      ? Ye[e](t._strict, t._locale)
      : new RegExp(
          p(
            e
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (e, t, n, s, i) {
                  return t || n || s || i;
                },
              ),
          ),
        );
  }
  function p(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function k(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function M(e) {
    var e = +e,
      t = 0;
    return (t = 0 != e && isFinite(e) ? k(e) : t);
  }
  var Ye = {},
    Se = {};
  function v(e, n) {
    var t,
      s,
      i = n;
    for (
      "string" == typeof e && (e = [e]),
        u(n) &&
          (i = function (e, t) {
            t[n] = M(e);
          }),
        s = e.length,
        t = 0;
      t < s;
      t++
    )
      Se[e[t]] = i;
  }
  function Oe(e, i) {
    v(e, function (e, t, n, s) {
      (n._w = n._w || {}), i(e, n._w, n, s);
    });
  }
  function be(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
  }
  var D = 0,
    Y = 1,
    S = 2,
    O = 3,
    b = 4,
    T = 5,
    Te = 6,
    xe = 7,
    Ne = 8;
  function We(e) {
    return be(e) ? 366 : 365;
  }
  s("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? r(e, 4) : "+" + e;
  }),
    s(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    s(0, ["YYYY", 4], 0, "year"),
    s(0, ["YYYYY", 5], 0, "year"),
    s(0, ["YYYYYY", 6, !0], 0, "year"),
    w("Y", ke),
    w("YY", n, t),
    w("YYYY", ge, ce),
    w("YYYYY", we, fe),
    w("YYYYYY", we, fe),
    v(["YYYYY", "YYYYYY"], D),
    v("YYYY", function (e, t) {
      t[D] = 2 === e.length ? f.parseTwoDigitYear(e) : M(e);
    }),
    v("YY", function (e, t) {
      t[D] = f.parseTwoDigitYear(e);
    }),
    v("Y", function (e, t) {
      t[D] = parseInt(e, 10);
    }),
    (f.parseTwoDigitYear = function (e) {
      return M(e) + (68 < M(e) ? 1900 : 2e3);
    });
  var x,
    Pe = Re("FullYear", !0);
  function Re(t, n) {
    return function (e) {
      return null != e
        ? (Ue(this, t, e), f.updateOffset(this, n), this)
        : Ce(this, t);
    };
  }
  function Ce(e, t) {
    if (!e.isValid()) return NaN;
    var n = e._d,
      s = e._isUTC;
    switch (t) {
      case "Milliseconds":
        return s ? n.getUTCMilliseconds() : n.getMilliseconds();
      case "Seconds":
        return s ? n.getUTCSeconds() : n.getSeconds();
      case "Minutes":
        return s ? n.getUTCMinutes() : n.getMinutes();
      case "Hours":
        return s ? n.getUTCHours() : n.getHours();
      case "Date":
        return s ? n.getUTCDate() : n.getDate();
      case "Day":
        return s ? n.getUTCDay() : n.getDay();
      case "Month":
        return s ? n.getUTCMonth() : n.getMonth();
      case "FullYear":
        return s ? n.getUTCFullYear() : n.getFullYear();
      default:
        return NaN;
    }
  }
  function Ue(e, t, n) {
    var s, i, r;
    if (e.isValid() && !isNaN(n)) {
      switch (((s = e._d), (i = e._isUTC), t)) {
        case "Milliseconds":
          return i ? s.setUTCMilliseconds(n) : s.setMilliseconds(n);
        case "Seconds":
          return i ? s.setUTCSeconds(n) : s.setSeconds(n);
        case "Minutes":
          return i ? s.setUTCMinutes(n) : s.setMinutes(n);
        case "Hours":
          return i ? s.setUTCHours(n) : s.setHours(n);
        case "Date":
          return i ? s.setUTCDate(n) : s.setDate(n);
        case "FullYear":
          break;
        default:
          return;
      }
      (t = n),
        (r = e.month()),
        (e = 29 !== (e = e.date()) || 1 !== r || be(t) ? e : 28),
        i ? s.setUTCFullYear(t, r, e) : s.setFullYear(t, r, e);
    }
  }
  function He(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n = ((t % (n = 12)) + n) % n;
    return (e += (t - n) / 12), 1 == n ? (be(e) ? 29 : 28) : 31 - ((n % 7) % 2);
  }
  (x =
    Array.prototype.indexOf ||
    function (e) {
      for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
      return -1;
    }),
    s("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
    s("MMM", 0, 0, function (e) {
      return this.localeData().monthsShort(this, e);
    }),
    s("MMMM", 0, 0, function (e) {
      return this.localeData().months(this, e);
    }),
    w("M", n, y),
    w("MM", n, t),
    w("MMM", function (e, t) {
      return t.monthsShortRegex(e);
    }),
    w("MMMM", function (e, t) {
      return t.monthsRegex(e);
    }),
    v(["M", "MM"], function (e, t) {
      t[Y] = M(e) - 1;
    }),
    v(["MMM", "MMMM"], function (e, t, n, s) {
      s = n._locale.monthsParse(e, s, n._strict);
      null != s ? (t[Y] = s) : (m(n).invalidMonth = e);
    });
  var Fe =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_",
      ),
    Le = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    Ve = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Ge = i,
    Ee = i;
  function Ae(e, t) {
    if (e.isValid()) {
      if ("string" == typeof t)
        if (/^\d+$/.test(t)) t = M(t);
        else if (!u((t = e.localeData().monthsParse(t)))) return;
      var n = (n = e.date()) < 29 ? n : Math.min(n, He(e.year(), t));
      e._isUTC ? e._d.setUTCMonth(t, n) : e._d.setMonth(t, n);
    }
  }
  function Ie(e) {
    return null != e
      ? (Ae(this, e), f.updateOffset(this, !0), this)
      : Ce(this, "Month");
  }
  function je() {
    function e(e, t) {
      return t.length - e.length;
    }
    for (var t, n, s = [], i = [], r = [], a = 0; a < 12; a++)
      (n = l([2e3, a])),
        (t = p(this.monthsShort(n, ""))),
        (n = p(this.months(n, ""))),
        s.push(t),
        i.push(n),
        r.push(n),
        r.push(t);
    s.sort(e),
      i.sort(e),
      r.sort(e),
      (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + s.join("|") + ")",
        "i",
      ));
  }
  function Ze(e, t, n, s, i, r, a) {
    var o;
    return (
      e < 100 && 0 <= e
        ? ((o = new Date(e + 400, t, n, s, i, r, a)),
          isFinite(o.getFullYear()) && o.setFullYear(e))
        : (o = new Date(e, t, n, s, i, r, a)),
      o
    );
  }
  function ze(e) {
    var t;
    return (
      e < 100 && 0 <= e
        ? (((t = Array.prototype.slice.call(arguments))[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, t))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    );
  }
  function qe(e, t, n) {
    n = 7 + t - n;
    return n - ((7 + ze(e, 0, n).getUTCDay() - t) % 7) - 1;
  }
  function $e(e, t, n, s, i) {
    var r,
      t = 1 + 7 * (t - 1) + ((7 + n - s) % 7) + qe(e, s, i),
      n =
        t <= 0
          ? We((r = e - 1)) + t
          : t > We(e)
            ? ((r = e + 1), t - We(e))
            : ((r = e), t);
    return { year: r, dayOfYear: n };
  }
  function Be(e, t, n) {
    var s,
      i,
      r = qe(e.year(), t, n),
      r = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return (
      r < 1
        ? (s = r + N((i = e.year() - 1), t, n))
        : r > N(e.year(), t, n)
          ? ((s = r - N(e.year(), t, n)), (i = e.year() + 1))
          : ((i = e.year()), (s = r)),
      { week: s, year: i }
    );
  }
  function N(e, t, n) {
    var s = qe(e, t, n),
      t = qe(e + 1, t, n);
    return (We(e) - s + t) / 7;
  }
  s("w", ["ww", 2], "wo", "week"),
    s("W", ["WW", 2], "Wo", "isoWeek"),
    w("w", n, y),
    w("ww", n, t),
    w("W", n, y),
    w("WW", n, t),
    Oe(["w", "ww", "W", "WW"], function (e, t, n, s) {
      t[s.substr(0, 1)] = M(e);
    });
  function Je(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  s("d", 0, "do", "day"),
    s("dd", 0, 0, function (e) {
      return this.localeData().weekdaysMin(this, e);
    }),
    s("ddd", 0, 0, function (e) {
      return this.localeData().weekdaysShort(this, e);
    }),
    s("dddd", 0, 0, function (e) {
      return this.localeData().weekdays(this, e);
    }),
    s("e", 0, 0, "weekday"),
    s("E", 0, 0, "isoWeekday"),
    w("d", n),
    w("e", n),
    w("E", n),
    w("dd", function (e, t) {
      return t.weekdaysMinRegex(e);
    }),
    w("ddd", function (e, t) {
      return t.weekdaysShortRegex(e);
    }),
    w("dddd", function (e, t) {
      return t.weekdaysRegex(e);
    }),
    Oe(["dd", "ddd", "dddd"], function (e, t, n, s) {
      s = n._locale.weekdaysParse(e, s, n._strict);
      null != s ? (t.d = s) : (m(n).invalidWeekday = e);
    }),
    Oe(["d", "e", "E"], function (e, t, n, s) {
      t[s] = M(e);
    });
  var Qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_",
    ),
    Xe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Ke = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    et = i,
    tt = i,
    nt = i;
  function st() {
    function e(e, t) {
      return t.length - e.length;
    }
    for (var t, n, s, i = [], r = [], a = [], o = [], u = 0; u < 7; u++)
      (s = l([2e3, 1]).day(u)),
        (t = p(this.weekdaysMin(s, ""))),
        (n = p(this.weekdaysShort(s, ""))),
        (s = p(this.weekdays(s, ""))),
        i.push(t),
        r.push(n),
        a.push(s),
        o.push(t),
        o.push(n),
        o.push(s);
    i.sort(e),
      r.sort(e),
      a.sort(e),
      o.sort(e),
      (this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + r.join("|") + ")",
        "i",
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + i.join("|") + ")",
        "i",
      ));
  }
  function it() {
    return this.hours() % 12 || 12;
  }
  function rt(e, t) {
    s(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function at(e, t) {
    return t._meridiemParse;
  }
  s("H", ["HH", 2], 0, "hour"),
    s("h", ["hh", 2], 0, it),
    s("k", ["kk", 2], 0, function () {
      return this.hours() || 24;
    }),
    s("hmm", 0, 0, function () {
      return "" + it.apply(this) + r(this.minutes(), 2);
    }),
    s("hmmss", 0, 0, function () {
      return "" + it.apply(this) + r(this.minutes(), 2) + r(this.seconds(), 2);
    }),
    s("Hmm", 0, 0, function () {
      return "" + this.hours() + r(this.minutes(), 2);
    }),
    s("Hmmss", 0, 0, function () {
      return "" + this.hours() + r(this.minutes(), 2) + r(this.seconds(), 2);
    }),
    rt("a", !0),
    rt("A", !1),
    w("a", at),
    w("A", at),
    w("H", n, g),
    w("h", n, y),
    w("k", n, y),
    w("HH", n, t),
    w("hh", n, t),
    w("kk", n, t),
    w("hmm", me),
    w("hmmss", _e),
    w("Hmm", me),
    w("Hmmss", _e),
    v(["H", "HH"], O),
    v(["k", "kk"], function (e, t, n) {
      e = M(e);
      t[O] = 24 === e ? 0 : e;
    }),
    v(["a", "A"], function (e, t, n) {
      (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
    }),
    v(["h", "hh"], function (e, t, n) {
      (t[O] = M(e)), (m(n).bigHour = !0);
    }),
    v("hmm", function (e, t, n) {
      var s = e.length - 2;
      (t[O] = M(e.substr(0, s))), (t[b] = M(e.substr(s))), (m(n).bigHour = !0);
    }),
    v("hmmss", function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[O] = M(e.substr(0, s))),
        (t[b] = M(e.substr(s, 2))),
        (t[T] = M(e.substr(i))),
        (m(n).bigHour = !0);
    }),
    v("Hmm", function (e, t, n) {
      var s = e.length - 2;
      (t[O] = M(e.substr(0, s))), (t[b] = M(e.substr(s)));
    }),
    v("Hmmss", function (e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[O] = M(e.substr(0, s))),
        (t[b] = M(e.substr(s, 2))),
        (t[T] = M(e.substr(i)));
    });
  i = Re("Hours", !0);
  var ot,
    ut = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      },
      months: Fe,
      monthsShort: Le,
      week: { dow: 0, doy: 6 },
      weekdays: Qe,
      weekdaysMin: Ke,
      weekdaysShort: Xe,
      meridiemParse: /[ap]\.?m?\.?/i,
    },
    W = {},
    lt = {};
  function dt(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function ht(e) {
    for (var t, n, s, i, r = 0; r < e.length; ) {
      for (
        t = (i = dt(e[r]).split("-")).length,
          n = (n = dt(e[r + 1])) ? n.split("-") : null;
        0 < t;

      ) {
        if ((s = ct(i.slice(0, t).join("-")))) return s;
        if (
          n &&
          n.length >= t &&
          (function (e, t) {
            for (var n = Math.min(e.length, t.length), s = 0; s < n; s += 1)
              if (e[s] !== t[s]) return s;
            return n;
          })(i, n) >=
            t - 1
        )
          break;
        t--;
      }
      r++;
    }
    return ot;
  }
  function ct(t) {
    var e, n;
    if (
      void 0 === W[t] &&
      "undefined" != typeof module &&
      module &&
      module.exports &&
      (n = t) &&
      n.match("^[^/\\\\]*$")
    )
      try {
        (e = ot._abbr), require("./locale/" + t), ft(e);
      } catch (e) {
        W[t] = null;
      }
    return W[t];
  }
  function ft(e, t) {
    return (
      e &&
        ((t = o(t) ? P(e) : mt(e, t))
          ? (ot = t)
          : "undefined" != typeof console &&
            console.warn &&
            console.warn(
              "Locale " + e + " not found. Did you forget to load it?",
            )),
      ot._abbr
    );
  }
  function mt(e, t) {
    if (null === t) return delete W[e], null;
    var n,
      s = ut;
    if (((t.abbr = e), null != W[e]))
      Q(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
      ),
        (s = W[e]._config);
    else if (null != t.parentLocale)
      if (null != W[t.parentLocale]) s = W[t.parentLocale]._config;
      else {
        if (null == (n = ct(t.parentLocale)))
          return (
            lt[t.parentLocale] || (lt[t.parentLocale] = []),
            lt[t.parentLocale].push({ name: e, config: t }),
            null
          );
        s = n._config;
      }
    return (
      (W[e] = new K(X(s, t))),
      lt[e] &&
        lt[e].forEach(function (e) {
          mt(e.name, e.config);
        }),
      ft(e),
      W[e]
    );
  }
  function P(e) {
    var t;
    if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e))
      return ot;
    if (!a(e)) {
      if ((t = ct(e))) return t;
      e = [e];
    }
    return ht(e);
  }
  function _t(e) {
    var t = e._a;
    return (
      t &&
        -2 === m(e).overflow &&
        ((t =
          t[Y] < 0 || 11 < t[Y]
            ? Y
            : t[S] < 1 || t[S] > He(t[D], t[Y])
              ? S
              : t[O] < 0 ||
                  24 < t[O] ||
                  (24 === t[O] && (0 !== t[b] || 0 !== t[T] || 0 !== t[Te]))
                ? O
                : t[b] < 0 || 59 < t[b]
                  ? b
                  : t[T] < 0 || 59 < t[T]
                    ? T
                    : t[Te] < 0 || 999 < t[Te]
                      ? Te
                      : -1),
        m(e)._overflowDayOfYear && (t < D || S < t) && (t = S),
        m(e)._overflowWeeks && -1 === t && (t = xe),
        m(e)._overflowWeekday && -1 === t && (t = Ne),
        (m(e).overflow = t)),
      e
    );
  }
  var yt =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    gt =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    wt = /Z|[+-]\d\d(?::?\d\d)?/,
    pt = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1],
    ],
    kt = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    Mt = /^\/?Date\((-?\d+)/i,
    vt =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    Dt = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480,
    };
  function Yt(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o = e._i,
      u = yt.exec(o) || gt.exec(o),
      o = pt.length,
      l = kt.length;
    if (u) {
      for (m(e).iso = !0, t = 0, n = o; t < n; t++)
        if (pt[t][1].exec(u[1])) {
          (i = pt[t][0]), (s = !1 !== pt[t][2]);
          break;
        }
      if (null == i) e._isValid = !1;
      else {
        if (u[3]) {
          for (t = 0, n = l; t < n; t++)
            if (kt[t][1].exec(u[3])) {
              r = (u[2] || " ") + kt[t][0];
              break;
            }
          if (null == r) return void (e._isValid = !1);
        }
        if (s || null == r) {
          if (u[4]) {
            if (!wt.exec(u[4])) return void (e._isValid = !1);
            a = "Z";
          }
          (e._f = i + (r || "") + (a || "")), xt(e);
        } else e._isValid = !1;
      }
    } else e._isValid = !1;
  }
  function St(e, t, n, s, i, r) {
    e = [
      (function (e) {
        e = parseInt(e, 10);
        {
          if (e <= 49) return 2e3 + e;
          if (e <= 999) return 1900 + e;
        }
        return e;
      })(e),
      Le.indexOf(t),
      parseInt(n, 10),
      parseInt(s, 10),
      parseInt(i, 10),
    ];
    return r && e.push(parseInt(r, 10)), e;
  }
  function Ot(e) {
    var t,
      n,
      s,
      i,
      r = vt.exec(
        e._i
          .replace(/\([^()]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .replace(/^\s\s*/, "")
          .replace(/\s\s*$/, ""),
      );
    r
      ? ((t = St(r[4], r[3], r[2], r[5], r[6], r[7])),
        (n = r[1]),
        (s = t),
        (i = e),
        n && Xe.indexOf(n) !== new Date(s[0], s[1], s[2]).getDay()
          ? ((m(i).weekdayMismatch = !0), (i._isValid = !1))
          : ((e._a = t),
            (e._tzm =
              ((n = r[8]),
              (s = r[9]),
              (i = r[10]),
              n
                ? Dt[n]
                : s
                  ? 0
                  : 60 * (((n = parseInt(i, 10)) - (s = n % 100)) / 100) + s)),
            (e._d = ze.apply(null, e._a)),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            (m(e).rfc2822 = !0)))
      : (e._isValid = !1);
  }
  function bt(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }
  function Tt(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o,
      u,
      l,
      d,
      h,
      c = [];
    if (!e._d) {
      for (
        s = e,
          i = new Date(f.now()),
          n = s._useUTC
            ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
            : [i.getFullYear(), i.getMonth(), i.getDate()],
          e._w &&
            null == e._a[S] &&
            null == e._a[Y] &&
            (null != (i = (s = e)._w).GG || null != i.W || null != i.E
              ? ((u = 1),
                (l = 4),
                (r = bt(i.GG, s._a[D], Be(R(), 1, 4).year)),
                (a = bt(i.W, 1)),
                ((o = bt(i.E, 1)) < 1 || 7 < o) && (d = !0))
              : ((u = s._locale._week.dow),
                (l = s._locale._week.doy),
                (h = Be(R(), u, l)),
                (r = bt(i.gg, s._a[D], h.year)),
                (a = bt(i.w, h.week)),
                null != i.d
                  ? ((o = i.d) < 0 || 6 < o) && (d = !0)
                  : null != i.e
                    ? ((o = i.e + u), (i.e < 0 || 6 < i.e) && (d = !0))
                    : (o = u)),
            a < 1 || a > N(r, u, l)
              ? (m(s)._overflowWeeks = !0)
              : null != d
                ? (m(s)._overflowWeekday = !0)
                : ((h = $e(r, a, o, u, l)),
                  (s._a[D] = h.year),
                  (s._dayOfYear = h.dayOfYear))),
          null != e._dayOfYear &&
            ((i = bt(e._a[D], n[D])),
            (e._dayOfYear > We(i) || 0 === e._dayOfYear) &&
              (m(e)._overflowDayOfYear = !0),
            (d = ze(i, 0, e._dayOfYear)),
            (e._a[Y] = d.getUTCMonth()),
            (e._a[S] = d.getUTCDate())),
          t = 0;
        t < 3 && null == e._a[t];
        ++t
      )
        e._a[t] = c[t] = n[t];
      for (; t < 7; t++)
        e._a[t] = c[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
      24 === e._a[O] &&
        0 === e._a[b] &&
        0 === e._a[T] &&
        0 === e._a[Te] &&
        ((e._nextDay = !0), (e._a[O] = 0)),
        (e._d = (e._useUTC ? ze : Ze).apply(null, c)),
        (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[O] = 24),
        e._w &&
          void 0 !== e._w.d &&
          e._w.d !== r &&
          (m(e).weekdayMismatch = !0);
    }
  }
  function xt(e) {
    if (e._f === f.ISO_8601) Yt(e);
    else if (e._f === f.RFC_2822) Ot(e);
    else {
      (e._a = []), (m(e).empty = !0);
      for (
        var t,
          n,
          s,
          i,
          r,
          a = "" + e._i,
          o = a.length,
          u = 0,
          l = ae(e._f, e._locale).match(te) || [],
          d = l.length,
          h = 0;
        h < d;
        h++
      )
        (n = l[h]),
          (t = (a.match(De(n, e)) || [])[0]) &&
            (0 < (s = a.substr(0, a.indexOf(t))).length &&
              m(e).unusedInput.push(s),
            (a = a.slice(a.indexOf(t) + t.length)),
            (u += t.length)),
          ie[n]
            ? (t ? (m(e).empty = !1) : m(e).unusedTokens.push(n),
              (s = n),
              (r = e),
              null != (i = t) && c(Se, s) && Se[s](i, r._a, r, s))
            : e._strict && !t && m(e).unusedTokens.push(n);
      (m(e).charsLeftOver = o - u),
        0 < a.length && m(e).unusedInput.push(a),
        e._a[O] <= 12 &&
          !0 === m(e).bigHour &&
          0 < e._a[O] &&
          (m(e).bigHour = void 0),
        (m(e).parsedDateParts = e._a.slice(0)),
        (m(e).meridiem = e._meridiem),
        (e._a[O] = (function (e, t, n) {
          if (null == n) return t;
          return null != e.meridiemHour
            ? e.meridiemHour(t, n)
            : null != e.isPM
              ? ((e = e.isPM(n)) && t < 12 && (t += 12),
                (t = e || 12 !== t ? t : 0))
              : t;
        })(e._locale, e._a[O], e._meridiem)),
        null !== (o = m(e).era) &&
          (e._a[D] = e._locale.erasConvertYear(o, e._a[D])),
        Tt(e),
        _t(e);
    }
  }
  function Nt(e) {
    var t,
      n,
      s,
      i = e._i,
      r = e._f;
    if (
      ((e._locale = e._locale || P(e._l)),
      null === i || (void 0 === r && "" === i))
    )
      return I({ nullInput: !0 });
    if (("string" == typeof i && (e._i = i = e._locale.preparse(i)), d(i)))
      return new $(_t(i));
    if (V(i)) e._d = i;
    else if (a(r))
      !(function (e) {
        var t,
          n,
          s,
          i,
          r,
          a,
          o = !1,
          u = e._f.length;
        if (0 === u) return (m(e).invalidFormat = !0), (e._d = new Date(NaN));
        for (i = 0; i < u; i++)
          (r = 0),
            (a = !1),
            (t = q({}, e)),
            null != e._useUTC && (t._useUTC = e._useUTC),
            (t._f = e._f[i]),
            xt(t),
            A(t) && (a = !0),
            (r = (r += m(t).charsLeftOver) + 10 * m(t).unusedTokens.length),
            (m(t).score = r),
            o
              ? r < s && ((s = r), (n = t))
              : (null == s || r < s || a) && ((s = r), (n = t), a && (o = !0));
        E(e, n || t);
      })(e);
    else if (r) xt(e);
    else if (o((r = (i = e)._i))) i._d = new Date(f.now());
    else
      V(r)
        ? (i._d = new Date(r.valueOf()))
        : "string" == typeof r
          ? ((n = i),
            null !== (t = Mt.exec(n._i))
              ? (n._d = new Date(+t[1]))
              : (Yt(n),
                !1 === n._isValid &&
                  (delete n._isValid,
                  Ot(n),
                  !1 === n._isValid &&
                    (delete n._isValid,
                    n._strict
                      ? (n._isValid = !1)
                      : f.createFromInputFallback(n)))))
          : a(r)
            ? ((i._a = G(r.slice(0), function (e) {
                return parseInt(e, 10);
              })),
              Tt(i))
            : F(r)
              ? (t = i)._d ||
                ((s = void 0 === (n = ue(t._i)).day ? n.date : n.day),
                (t._a = G(
                  [
                    n.year,
                    n.month,
                    s,
                    n.hour,
                    n.minute,
                    n.second,
                    n.millisecond,
                  ],
                  function (e) {
                    return e && parseInt(e, 10);
                  },
                )),
                Tt(t))
              : u(r)
                ? (i._d = new Date(r))
                : f.createFromInputFallback(i);
    return A(e) || (e._d = null), e;
  }
  function Wt(e, t, n, s, i) {
    var r = {};
    return (
      (!0 !== t && !1 !== t) || ((s = t), (t = void 0)),
      (!0 !== n && !1 !== n) || ((s = n), (n = void 0)),
      ((F(e) && L(e)) || (a(e) && 0 === e.length)) && (e = void 0),
      (r._isAMomentObject = !0),
      (r._useUTC = r._isUTC = i),
      (r._l = n),
      (r._i = e),
      (r._f = t),
      (r._strict = s),
      (i = new $(_t(Nt((i = r)))))._nextDay &&
        (i.add(1, "d"), (i._nextDay = void 0)),
      i
    );
  }
  function R(e, t, n, s) {
    return Wt(e, t, n, s, !1);
  }
  (f.createFromInputFallback = e(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    },
  )),
    (f.ISO_8601 = function () {}),
    (f.RFC_2822 = function () {});
  (me = e(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function () {
      var e = R.apply(null, arguments);
      return this.isValid() && e.isValid() ? (e < this ? this : e) : I();
    },
  )),
    (_e = e(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = R.apply(null, arguments);
        return this.isValid() && e.isValid() ? (this < e ? this : e) : I();
      },
    ));
  function Pt(e, t) {
    var n, s;
    if (!(t = 1 === t.length && a(t[0]) ? t[0] : t).length) return R();
    for (n = t[0], s = 1; s < t.length; ++s)
      (t[s].isValid() && !t[s][e](n)) || (n = t[s]);
    return n;
  }
  var Rt = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
  function Ct(e) {
    var e = ue(e),
      t = e.year || 0,
      n = e.quarter || 0,
      s = e.month || 0,
      i = e.week || e.isoWeek || 0,
      r = e.day || 0,
      a = e.hour || 0,
      o = e.minute || 0,
      u = e.second || 0,
      l = e.millisecond || 0;
    (this._isValid = (function (e) {
      var t,
        n,
        s = !1,
        i = Rt.length;
      for (t in e)
        if (c(e, t) && (-1 === x.call(Rt, t) || (null != e[t] && isNaN(e[t]))))
          return !1;
      for (n = 0; n < i; ++n)
        if (e[Rt[n]]) {
          if (s) return !1;
          parseFloat(e[Rt[n]]) !== M(e[Rt[n]]) && (s = !0);
        }
      return !0;
    })(e)),
      (this._milliseconds = +l + 1e3 * u + 6e4 * o + 1e3 * a * 60 * 60),
      (this._days = +r + 7 * i),
      (this._months = +s + 3 * n + 12 * t),
      (this._data = {}),
      (this._locale = P()),
      this._bubble();
  }
  function Ut(e) {
    return e instanceof Ct;
  }
  function Ht(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }
  function Ft(e, n) {
    s(e, 0, 0, function () {
      var e = this.utcOffset(),
        t = "+";
      return (
        e < 0 && ((e = -e), (t = "-")),
        t + r(~~(e / 60), 2) + n + r(~~e % 60, 2)
      );
    });
  }
  Ft("Z", ":"),
    Ft("ZZ", ""),
    w("Z", ve),
    w("ZZ", ve),
    v(["Z", "ZZ"], function (e, t, n) {
      (n._useUTC = !0), (n._tzm = Vt(ve, e));
    });
  var Lt = /([\+\-]|\d\d)/gi;
  function Vt(e, t) {
    var t = (t || "").match(e);
    return null === t
      ? null
      : 0 ===
          (t =
            60 *
              (e = ((t[t.length - 1] || []) + "").match(Lt) || ["-", 0, 0])[1] +
            M(e[2]))
        ? 0
        : "+" === e[0]
          ? t
          : -t;
  }
  function Gt(e, t) {
    var n;
    return t._isUTC
      ? ((t = t.clone()),
        (n = (d(e) || V(e) ? e : R(e)).valueOf() - t.valueOf()),
        t._d.setTime(t._d.valueOf() + n),
        f.updateOffset(t, !1),
        t)
      : R(e).local();
  }
  function Et(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  function At() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  f.updateOffset = function () {};
  var It = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    jt =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function C(e, t) {
    var n,
      s = e,
      i = null;
    return (
      Ut(e)
        ? (s = { ms: e._milliseconds, d: e._days, M: e._months })
        : u(e) || !isNaN(+e)
          ? ((s = {}), t ? (s[t] = +e) : (s.milliseconds = +e))
          : (i = It.exec(e))
            ? ((n = "-" === i[1] ? -1 : 1),
              (s = {
                y: 0,
                d: M(i[S]) * n,
                h: M(i[O]) * n,
                m: M(i[b]) * n,
                s: M(i[T]) * n,
                ms: M(Ht(1e3 * i[Te])) * n,
              }))
            : (i = jt.exec(e))
              ? ((n = "-" === i[1] ? -1 : 1),
                (s = {
                  y: Zt(i[2], n),
                  M: Zt(i[3], n),
                  w: Zt(i[4], n),
                  d: Zt(i[5], n),
                  h: Zt(i[6], n),
                  m: Zt(i[7], n),
                  s: Zt(i[8], n),
                }))
              : null == s
                ? (s = {})
                : "object" == typeof s &&
                  ("from" in s || "to" in s) &&
                  ((t = (function (e, t) {
                    var n;
                    if (!e.isValid() || !t.isValid())
                      return { milliseconds: 0, months: 0 };
                    (t = Gt(t, e)),
                      e.isBefore(t)
                        ? (n = zt(e, t))
                        : (((n = zt(t, e)).milliseconds = -n.milliseconds),
                          (n.months = -n.months));
                    return n;
                  })(R(s.from), R(s.to))),
                  ((s = {}).ms = t.milliseconds),
                  (s.M = t.months)),
      (i = new Ct(s)),
      Ut(e) && c(e, "_locale") && (i._locale = e._locale),
      Ut(e) && c(e, "_isValid") && (i._isValid = e._isValid),
      i
    );
  }
  function Zt(e, t) {
    e = e && parseFloat(e.replace(",", "."));
    return (isNaN(e) ? 0 : e) * t;
  }
  function zt(e, t) {
    var n = {};
    return (
      (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
      e.clone().add(n.months, "M").isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, "M")),
      n
    );
  }
  function qt(s, i) {
    return function (e, t) {
      var n;
      return (
        null === t ||
          isNaN(+t) ||
          (Q(
            i,
            "moment()." +
              i +
              "(period, number) is deprecated. Please use moment()." +
              i +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
          ),
          (n = e),
          (e = t),
          (t = n)),
        $t(this, C(e, t), s),
        this
      );
    };
  }
  function $t(e, t, n, s) {
    var i = t._milliseconds,
      r = Ht(t._days),
      t = Ht(t._months);
    e.isValid() &&
      ((s = null == s || s),
      t && Ae(e, Ce(e, "Month") + t * n),
      r && Ue(e, "Date", Ce(e, "Date") + r * n),
      i && e._d.setTime(e._d.valueOf() + i * n),
      s && f.updateOffset(e, r || t));
  }
  (C.fn = Ct.prototype),
    (C.invalid = function () {
      return C(NaN);
    });
  (Fe = qt(1, "add")), (Qe = qt(-1, "subtract"));
  function Bt(e) {
    return "string" == typeof e || e instanceof String;
  }
  function Jt(e) {
    return (
      d(e) ||
      V(e) ||
      Bt(e) ||
      u(e) ||
      (function (t) {
        var e = a(t),
          n = !1;
        e &&
          (n =
            0 ===
            t.filter(function (e) {
              return !u(e) && Bt(t);
            }).length);
        return e && n;
      })(e) ||
      (function (e) {
        var t,
          n,
          s = F(e) && !L(e),
          i = !1,
          r = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms",
          ],
          a = r.length;
        for (t = 0; t < a; t += 1) (n = r[t]), (i = i || c(e, n));
        return s && i;
      })(e) ||
      null == e
    );
  }
  function Qt(e, t) {
    if (e.date() < t.date()) return -Qt(t, e);
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      s = e.clone().add(n, "months"),
      t =
        t - s < 0
          ? (t - s) / (s - e.clone().add(n - 1, "months"))
          : (t - s) / (e.clone().add(1 + n, "months") - s);
    return -(n + t) || 0;
  }
  function Xt(e) {
    return void 0 === e
      ? this._locale._abbr
      : (null != (e = P(e)) && (this._locale = e), this);
  }
  (f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  Ke = e(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return void 0 === e ? this.localeData() : this.locale(e);
    },
  );
  function Kt() {
    return this._locale;
  }
  var en = 126227808e5;
  function tn(e, t) {
    return ((e % t) + t) % t;
  }
  function nn(e, t, n) {
    return e < 100 && 0 <= e
      ? new Date(e + 400, t, n) - en
      : new Date(e, t, n).valueOf();
  }
  function sn(e, t, n) {
    return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - en : Date.UTC(e, t, n);
  }
  function rn(e, t) {
    return t.erasAbbrRegex(e);
  }
  function an() {
    for (
      var e,
        t,
        n,
        s = [],
        i = [],
        r = [],
        a = [],
        o = this.eras(),
        u = 0,
        l = o.length;
      u < l;
      ++u
    )
      (e = p(o[u].name)),
        (t = p(o[u].abbr)),
        (n = p(o[u].narrow)),
        i.push(e),
        s.push(t),
        r.push(n),
        a.push(e),
        a.push(t),
        a.push(n);
    (this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i")),
      (this._erasNameRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._erasAbbrRegex = new RegExp("^(" + s.join("|") + ")", "i")),
      (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
  }
  function on(e, t) {
    s(0, [e, e.length], 0, t);
  }
  function un(e, t, n, s, i) {
    var r;
    return null == e
      ? Be(this, s, i).year
      : ((r = N(e, s, i)),
        function (e, t, n, s, i) {
          (e = $e(e, t, n, s, i)), (t = ze(e.year, 0, e.dayOfYear));
          return (
            this.year(t.getUTCFullYear()),
            this.month(t.getUTCMonth()),
            this.date(t.getUTCDate()),
            this
          );
        }.call(this, e, (t = r < t ? r : t), n, s, i));
  }
  s("N", 0, 0, "eraAbbr"),
    s("NN", 0, 0, "eraAbbr"),
    s("NNN", 0, 0, "eraAbbr"),
    s("NNNN", 0, 0, "eraName"),
    s("NNNNN", 0, 0, "eraNarrow"),
    s("y", ["y", 1], "yo", "eraYear"),
    s("y", ["yy", 2], 0, "eraYear"),
    s("y", ["yyy", 3], 0, "eraYear"),
    s("y", ["yyyy", 4], 0, "eraYear"),
    w("N", rn),
    w("NN", rn),
    w("NNN", rn),
    w("NNNN", function (e, t) {
      return t.erasNameRegex(e);
    }),
    w("NNNNN", function (e, t) {
      return t.erasNarrowRegex(e);
    }),
    v(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, s) {
      s = n._locale.erasParse(e, s, n._strict);
      s ? (m(n).era = s) : (m(n).invalidEra = e);
    }),
    w("y", pe),
    w("yy", pe),
    w("yyy", pe),
    w("yyyy", pe),
    w("yo", function (e, t) {
      return t._eraYearOrdinalRegex || pe;
    }),
    v(["y", "yy", "yyy", "yyyy"], D),
    v(["yo"], function (e, t, n, s) {
      var i;
      n._locale._eraYearOrdinalRegex &&
        (i = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse
          ? (t[D] = n._locale.eraYearOrdinalParse(e, i))
          : (t[D] = parseInt(e, 10));
    }),
    s(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    }),
    s(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    on("gggg", "weekYear"),
    on("ggggg", "weekYear"),
    on("GGGG", "isoWeekYear"),
    on("GGGGG", "isoWeekYear"),
    w("G", ke),
    w("g", ke),
    w("GG", n, t),
    w("gg", n, t),
    w("GGGG", ge, ce),
    w("gggg", ge, ce),
    w("GGGGG", we, fe),
    w("ggggg", we, fe),
    Oe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
      t[s.substr(0, 2)] = M(e);
    }),
    Oe(["gg", "GG"], function (e, t, n, s) {
      t[s] = f.parseTwoDigitYear(e);
    }),
    s("Q", 0, "Qo", "quarter"),
    w("Q", de),
    v("Q", function (e, t) {
      t[Y] = 3 * (M(e) - 1);
    }),
    s("D", ["DD", 2], "Do", "date"),
    w("D", n, y),
    w("DD", n, t),
    w("Do", function (e, t) {
      return e
        ? t._dayOfMonthOrdinalParse || t._ordinalParse
        : t._dayOfMonthOrdinalParseLenient;
    }),
    v(["D", "DD"], S),
    v("Do", function (e, t) {
      t[S] = M(e.match(n)[0]);
    });
  ge = Re("Date", !0);
  s("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    w("DDD", ye),
    w("DDDD", he),
    v(["DDD", "DDDD"], function (e, t, n) {
      n._dayOfYear = M(e);
    }),
    s("m", ["mm", 2], 0, "minute"),
    w("m", n, g),
    w("mm", n, t),
    v(["m", "mm"], b);
  var ln,
    ce = Re("Minutes", !1),
    we =
      (s("s", ["ss", 2], 0, "second"),
      w("s", n, g),
      w("ss", n, t),
      v(["s", "ss"], T),
      Re("Seconds", !1));
  for (
    s("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      s(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      s(0, ["SSS", 3], 0, "millisecond"),
      s(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }),
      s(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }),
      s(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      s(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      s(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      s(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      w("S", ye, de),
      w("SS", ye, t),
      w("SSS", ye, he),
      ln = "SSSS";
    ln.length <= 9;
    ln += "S"
  )
    w(ln, pe);
  function dn(e, t) {
    t[Te] = M(1e3 * ("0." + e));
  }
  for (ln = "S"; ln.length <= 9; ln += "S") v(ln, dn);
  (fe = Re("Milliseconds", !1)),
    s("z", 0, 0, "zoneAbbr"),
    s("zz", 0, 0, "zoneName");
  y = $.prototype;
  function hn(e) {
    return e;
  }
  (y.add = Fe),
    (y.calendar = function (e, t) {
      1 === arguments.length &&
        (arguments[0]
          ? Jt(arguments[0])
            ? ((e = arguments[0]), (t = void 0))
            : (function (e) {
                for (
                  var t = F(e) && !L(e),
                    n = !1,
                    s = [
                      "sameDay",
                      "nextDay",
                      "lastDay",
                      "nextWeek",
                      "lastWeek",
                      "sameElse",
                    ],
                    i = 0;
                  i < s.length;
                  i += 1
                )
                  n = n || c(e, s[i]);
                return t && n;
              })(arguments[0]) && ((t = arguments[0]), (e = void 0))
          : (t = e = void 0));
      var e = e || R(),
        n = Gt(e, this).startOf("day"),
        n = f.calendarFormat(this, n) || "sameElse",
        t = t && (h(t[n]) ? t[n].call(this, e) : t[n]);
      return this.format(t || this.localeData().calendar(n, this, R(e)));
    }),
    (y.clone = function () {
      return new $(this);
    }),
    (y.diff = function (e, t, n) {
      var s, i, r;
      if (!this.isValid()) return NaN;
      if (!(s = Gt(e, this)).isValid()) return NaN;
      switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = _(t)))) {
        case "year":
          r = Qt(this, s) / 12;
          break;
        case "month":
          r = Qt(this, s);
          break;
        case "quarter":
          r = Qt(this, s) / 3;
          break;
        case "second":
          r = (this - s) / 1e3;
          break;
        case "minute":
          r = (this - s) / 6e4;
          break;
        case "hour":
          r = (this - s) / 36e5;
          break;
        case "day":
          r = (this - s - i) / 864e5;
          break;
        case "week":
          r = (this - s - i) / 6048e5;
          break;
        default:
          r = this - s;
      }
      return n ? r : k(r);
    }),
    (y.endOf = function (e) {
      var t, n;
      if (void 0 === (e = _(e)) || "millisecond" === e || !this.isValid())
        return this;
      switch (((n = this._isUTC ? sn : nn), e)) {
        case "year":
          t = n(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
          break;
        case "month":
          t = n(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          t =
            n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;
        case "isoWeek":
          t =
            n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7,
            ) - 1;
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t +=
              36e5 -
              tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
              1);
          break;
        case "minute":
          (t = this._d.valueOf()), (t += 6e4 - tn(t, 6e4) - 1);
          break;
        case "second":
          (t = this._d.valueOf()), (t += 1e3 - tn(t, 1e3) - 1);
      }
      return this._d.setTime(t), f.updateOffset(this, !0), this;
    }),
    (y.format = function (e) {
      return (
        (e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat)),
        (e = re(this, e)),
        this.localeData().postformat(e)
      );
    }),
    (y.from = function (e, t) {
      return this.isValid() && ((d(e) && e.isValid()) || R(e).isValid())
        ? C({ to: this, from: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (y.fromNow = function (e) {
      return this.from(R(), e);
    }),
    (y.to = function (e, t) {
      return this.isValid() && ((d(e) && e.isValid()) || R(e).isValid())
        ? C({ from: this, to: e }).locale(this.locale()).humanize(!t)
        : this.localeData().invalidDate();
    }),
    (y.toNow = function (e) {
      return this.to(R(), e);
    }),
    (y.get = function (e) {
      return h(this[(e = _(e))]) ? this[e]() : this;
    }),
    (y.invalidAt = function () {
      return m(this).overflow;
    }),
    (y.isAfter = function (e, t) {
      return (
        (e = d(e) ? e : R(e)),
        !(!this.isValid() || !e.isValid()) &&
          ("millisecond" === (t = _(t) || "millisecond")
            ? this.valueOf() > e.valueOf()
            : e.valueOf() < this.clone().startOf(t).valueOf())
      );
    }),
    (y.isBefore = function (e, t) {
      return (
        (e = d(e) ? e : R(e)),
        !(!this.isValid() || !e.isValid()) &&
          ("millisecond" === (t = _(t) || "millisecond")
            ? this.valueOf() < e.valueOf()
            : this.clone().endOf(t).valueOf() < e.valueOf())
      );
    }),
    (y.isBetween = function (e, t, n, s) {
      return (
        (e = d(e) ? e : R(e)),
        (t = d(t) ? t : R(t)),
        !!(this.isValid() && e.isValid() && t.isValid()) &&
          ("(" === (s = s || "()")[0]
            ? this.isAfter(e, n)
            : !this.isBefore(e, n)) &&
          (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
      );
    }),
    (y.isSame = function (e, t) {
      var e = d(e) ? e : R(e);
      return (
        !(!this.isValid() || !e.isValid()) &&
        ("millisecond" === (t = _(t) || "millisecond")
          ? this.valueOf() === e.valueOf()
          : ((e = e.valueOf()),
            this.clone().startOf(t).valueOf() <= e &&
              e <= this.clone().endOf(t).valueOf()))
      );
    }),
    (y.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (y.isSameOrBefore = function (e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (y.isValid = function () {
      return A(this);
    }),
    (y.lang = Ke),
    (y.locale = Xt),
    (y.localeData = Kt),
    (y.max = _e),
    (y.min = me),
    (y.parsingFlags = function () {
      return E({}, m(this));
    }),
    (y.set = function (e, t) {
      if ("object" == typeof e)
        for (
          var n = (function (e) {
              var t,
                n = [];
              for (t in e) c(e, t) && n.push({ unit: t, priority: le[t] });
              return (
                n.sort(function (e, t) {
                  return e.priority - t.priority;
                }),
                n
              );
            })((e = ue(e))),
            s = n.length,
            i = 0;
          i < s;
          i++
        )
          this[n[i].unit](e[n[i].unit]);
      else if (h(this[(e = _(e))])) return this[e](t);
      return this;
    }),
    (y.startOf = function (e) {
      var t, n;
      if (void 0 === (e = _(e)) || "millisecond" === e || !this.isValid())
        return this;
      switch (((n = this._isUTC ? sn : nn), e)) {
        case "year":
          t = n(this.year(), 0, 1);
          break;
        case "quarter":
          t = n(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case "month":
          t = n(this.year(), this.month(), 1);
          break;
        case "week":
          t = n(this.year(), this.month(), this.date() - this.weekday());
          break;
        case "isoWeek":
          t = n(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1),
          );
          break;
        case "day":
        case "date":
          t = n(this.year(), this.month(), this.date());
          break;
        case "hour":
          (t = this._d.valueOf()),
            (t -= tn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
          break;
        case "minute":
          (t = this._d.valueOf()), (t -= tn(t, 6e4));
          break;
        case "second":
          (t = this._d.valueOf()), (t -= tn(t, 1e3));
      }
      return this._d.setTime(t), f.updateOffset(this, !0), this;
    }),
    (y.subtract = Qe),
    (y.toArray = function () {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond(),
      ];
    }),
    (y.toObject = function () {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds(),
      };
    }),
    (y.toDate = function () {
      return new Date(this.valueOf());
    }),
    (y.toISOString = function (e) {
      if (!this.isValid()) return null;
      var t = (e = !0 !== e) ? this.clone().utc() : this;
      return t.year() < 0 || 9999 < t.year()
        ? re(
            t,
            e
              ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
              : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
          )
        : h(Date.prototype.toISOString)
          ? e
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", re(t, "Z"))
          : re(
              t,
              e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
            );
    }),
    (y.inspect = function () {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var e,
        t = "moment",
        n = "";
      return (
        this.isLocal() ||
          ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
          (n = "Z")),
        (t = "[" + t + '("]'),
        (e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
        this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + (n + '[")]'))
      );
    }),
    "undefined" != typeof Symbol &&
      null != Symbol.for &&
      (y[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return "Moment<" + this.format() + ">";
      }),
    (y.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }),
    (y.toString = function () {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }),
    (y.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (y.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (y.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }),
    (y.eraName = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].name;
        if (t[n].until <= e && e <= t[n].since) return t[n].name;
      }
      return "";
    }),
    (y.eraNarrow = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].narrow;
        if (t[n].until <= e && e <= t[n].since) return t[n].narrow;
      }
      return "";
    }),
    (y.eraAbbr = function () {
      for (
        var e, t = this.localeData().eras(), n = 0, s = t.length;
        n < s;
        ++n
      ) {
        if (
          ((e = this.clone().startOf("day").valueOf()),
          t[n].since <= e && e <= t[n].until)
        )
          return t[n].abbr;
        if (t[n].until <= e && e <= t[n].since) return t[n].abbr;
      }
      return "";
    }),
    (y.eraYear = function () {
      for (
        var e, t, n = this.localeData().eras(), s = 0, i = n.length;
        s < i;
        ++s
      )
        if (
          ((e = n[s].since <= n[s].until ? 1 : -1),
          (t = this.clone().startOf("day").valueOf()),
          (n[s].since <= t && t <= n[s].until) ||
            (n[s].until <= t && t <= n[s].since))
        )
          return (this.year() - f(n[s].since).year()) * e + n[s].offset;
      return this.year();
    }),
    (y.year = Pe),
    (y.isLeapYear = function () {
      return be(this.year());
    }),
    (y.weekYear = function (e) {
      return un.call(
        this,
        e,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy,
      );
    }),
    (y.isoWeekYear = function (e) {
      return un.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (y.quarter = y.quarters =
      function (e) {
        return null == e
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (e - 1) + (this.month() % 3));
      }),
    (y.month = Ie),
    (y.daysInMonth = function () {
      return He(this.year(), this.month());
    }),
    (y.week = y.weeks =
      function (e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
      }),
    (y.isoWeek = y.isoWeeks =
      function (e) {
        var t = Be(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
      }),
    (y.weeksInYear = function () {
      var e = this.localeData()._week;
      return N(this.year(), e.dow, e.doy);
    }),
    (y.weeksInWeekYear = function () {
      var e = this.localeData()._week;
      return N(this.weekYear(), e.dow, e.doy);
    }),
    (y.isoWeeksInYear = function () {
      return N(this.year(), 1, 4);
    }),
    (y.isoWeeksInISOWeekYear = function () {
      return N(this.isoWeekYear(), 1, 4);
    }),
    (y.date = ge),
    (y.day = y.days =
      function (e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t,
          n,
          s = Ce(this, "Day");
        return null != e
          ? ((t = e),
            (n = this.localeData()),
            (e =
              "string" != typeof t
                ? t
                : isNaN(t)
                  ? "number" == typeof (t = n.weekdaysParse(t))
                    ? t
                    : null
                  : parseInt(t, 10)),
            this.add(e - s, "d"))
          : s;
      }),
    (y.weekday = function (e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, "d");
    }),
    (y.isoWeekday = function (e) {
      return this.isValid()
        ? null != e
          ? ((t = e),
            (n = this.localeData()),
            (n =
              "string" == typeof t
                ? n.weekdaysParse(t) % 7 || 7
                : isNaN(t)
                  ? null
                  : t),
            this.day(this.day() % 7 ? n : n - 7))
          : this.day() || 7
        : null != e
          ? this
          : NaN;
      var t, n;
    }),
    (y.dayOfYear = function (e) {
      var t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5,
        ) + 1;
      return null == e ? t : this.add(e - t, "d");
    }),
    (y.hour = y.hours = i),
    (y.minute = y.minutes = ce),
    (y.second = y.seconds = we),
    (y.millisecond = y.milliseconds = fe),
    (y.utcOffset = function (e, t, n) {
      var s,
        i = this._offset || 0;
      if (!this.isValid()) return null != e ? this : NaN;
      if (null == e) return this._isUTC ? i : Et(this);
      if ("string" == typeof e) {
        if (null === (e = Vt(ve, e))) return this;
      } else Math.abs(e) < 16 && !n && (e *= 60);
      return (
        !this._isUTC && t && (s = Et(this)),
        (this._offset = e),
        (this._isUTC = !0),
        null != s && this.add(s, "m"),
        i !== e &&
          (!t || this._changeInProgress
            ? $t(this, C(e - i, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              f.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    }),
    (y.utc = function (e) {
      return this.utcOffset(0, e);
    }),
    (y.local = function (e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(Et(this), "m")),
        this
      );
    }),
    (y.parseZone = function () {
      var e;
      return (
        null != this._tzm
          ? this.utcOffset(this._tzm, !1, !0)
          : "string" == typeof this._i &&
            (null != (e = Vt(Me, this._i))
              ? this.utcOffset(e)
              : this.utcOffset(0, !0)),
        this
      );
    }),
    (y.hasAlignedHourOffset = function (e) {
      return (
        !!this.isValid() &&
        ((e = e ? R(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }),
    (y.isDST = function () {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }),
    (y.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }),
    (y.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }),
    (y.isUtc = At),
    (y.isUTC = At),
    (y.zoneAbbr = function () {
      return this._isUTC ? "UTC" : "";
    }),
    (y.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }),
    (y.dates = e("dates accessor is deprecated. Use date instead.", ge)),
    (y.months = e("months accessor is deprecated. Use month instead", Ie)),
    (y.years = e("years accessor is deprecated. Use year instead", Pe)),
    (y.zone = e(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      function (e, t) {
        return null != e
          ? (this.utcOffset((e = "string" != typeof e ? -e : e), t), this)
          : -this.utcOffset();
      },
    )),
    (y.isDSTShifted = e(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      function () {
        if (!o(this._isDSTShifted)) return this._isDSTShifted;
        var e,
          t = {};
        return (
          q(t, this),
          (t = Nt(t))._a
            ? ((e = (t._isUTC ? l : R)(t._a)),
              (this._isDSTShifted =
                this.isValid() &&
                0 <
                  (function (e, t, n) {
                    for (
                      var s = Math.min(e.length, t.length),
                        i = Math.abs(e.length - t.length),
                        r = 0,
                        a = 0;
                      a < s;
                      a++
                    )
                      ((n && e[a] !== t[a]) || (!n && M(e[a]) !== M(t[a]))) &&
                        r++;
                    return r + i;
                  })(t._a, e.toArray())))
            : (this._isDSTShifted = !1),
          this._isDSTShifted
        );
      },
    ));
  g = K.prototype;
  function cn(e, t, n, s) {
    var i = P(),
      s = l().set(s, t);
    return i[n](s, e);
  }
  function fn(e, t, n) {
    if ((u(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
      return cn(e, t, n, "month");
    for (var s = [], i = 0; i < 12; i++) s[i] = cn(e, i, n, "month");
    return s;
  }
  function mn(e, t, n, s) {
    t =
      ("boolean" == typeof e
        ? u(t) && ((n = t), (t = void 0))
        : ((t = e), (e = !1), u((n = t)) && ((n = t), (t = void 0))),
      t || "");
    var i,
      r = P(),
      a = e ? r._week.dow : 0,
      o = [];
    if (null != n) return cn(t, (n + a) % 7, s, "day");
    for (i = 0; i < 7; i++) o[i] = cn(t, (i + a) % 7, s, "day");
    return o;
  }
  (g.calendar = function (e, t, n) {
    return h((e = this._calendar[e] || this._calendar.sameElse))
      ? e.call(t, n)
      : e;
  }),
    (g.longDateFormat = function (e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n
            .match(te)
            .map(function (e) {
              return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e
                ? e.slice(1)
                : e;
            })
            .join("")),
          this._longDateFormat[e]);
    }),
    (g.invalidDate = function () {
      return this._invalidDate;
    }),
    (g.ordinal = function (e) {
      return this._ordinal.replace("%d", e);
    }),
    (g.preparse = hn),
    (g.postformat = hn),
    (g.relativeTime = function (e, t, n, s) {
      var i = this._relativeTime[n];
      return h(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (g.pastFuture = function (e, t) {
      return h((e = this._relativeTime[0 < e ? "future" : "past"]))
        ? e(t)
        : e.replace(/%s/i, t);
    }),
    (g.set = function (e) {
      var t, n;
      for (n in e)
        c(e, n) && (h((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            "|" +
            /\d{1,2}/.source,
        ));
    }),
    (g.eras = function (e, t) {
      for (
        var n, s = this._eras || P("en")._eras, i = 0, r = s.length;
        i < r;
        ++i
      )
        switch (
          ("string" == typeof s[i].since &&
            ((n = f(s[i].since).startOf("day")), (s[i].since = n.valueOf())),
          typeof s[i].until)
        ) {
          case "undefined":
            s[i].until = 1 / 0;
            break;
          case "string":
            (n = f(s[i].until).startOf("day").valueOf()),
              (s[i].until = n.valueOf());
        }
      return s;
    }),
    (g.erasParse = function (e, t, n) {
      var s,
        i,
        r,
        a,
        o,
        u = this.eras();
      for (e = e.toUpperCase(), s = 0, i = u.length; s < i; ++s)
        if (
          ((r = u[s].name.toUpperCase()),
          (a = u[s].abbr.toUpperCase()),
          (o = u[s].narrow.toUpperCase()),
          n)
        )
          switch (t) {
            case "N":
            case "NN":
            case "NNN":
              if (a === e) return u[s];
              break;
            case "NNNN":
              if (r === e) return u[s];
              break;
            case "NNNNN":
              if (o === e) return u[s];
          }
        else if (0 <= [r, a, o].indexOf(e)) return u[s];
    }),
    (g.erasConvertYear = function (e, t) {
      var n = e.since <= e.until ? 1 : -1;
      return void 0 === t
        ? f(e.since).year()
        : f(e.since).year() + (t - e.offset) * n;
    }),
    (g.erasAbbrRegex = function (e) {
      return (
        c(this, "_erasAbbrRegex") || an.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
      );
    }),
    (g.erasNameRegex = function (e) {
      return (
        c(this, "_erasNameRegex") || an.call(this),
        e ? this._erasNameRegex : this._erasRegex
      );
    }),
    (g.erasNarrowRegex = function (e) {
      return (
        c(this, "_erasNarrowRegex") || an.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
      );
    }),
    (g.months = function (e, t) {
      return e
        ? (a(this._months)
            ? this._months
            : this._months[
                (this._months.isFormat || Ve).test(t) ? "format" : "standalone"
              ])[e.month()]
        : a(this._months)
          ? this._months
          : this._months.standalone;
    }),
    (g.monthsShort = function (e, t) {
      return e
        ? (a(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort[Ve.test(t) ? "format" : "standalone"])[
            e.month()
          ]
        : a(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
    }),
    (g.monthsParse = function (e, t, n) {
      var s, i;
      if (this._monthsParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            e = e.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                s = 0;
              s < 12;
              ++s
            )
              (r = l([2e3, s])),
                (this._shortMonthsParse[s] = this.monthsShort(
                  r,
                  "",
                ).toLocaleLowerCase()),
                (this._longMonthsParse[s] = this.months(
                  r,
                  "",
                ).toLocaleLowerCase());
          return n
            ? "MMM" === t
              ? -1 !== (i = x.call(this._shortMonthsParse, e))
                ? i
                : null
              : -1 !== (i = x.call(this._longMonthsParse, e))
                ? i
                : null
            : "MMM" === t
              ? -1 !== (i = x.call(this._shortMonthsParse, e)) ||
                -1 !== (i = x.call(this._longMonthsParse, e))
                ? i
                : null
              : -1 !== (i = x.call(this._longMonthsParse, e)) ||
                  -1 !== (i = x.call(this._shortMonthsParse, e))
                ? i
                : null;
        }.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((i = l([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              "^" + this.months(i, "").replace(".", "") + "$",
              "i",
            )),
            (this._shortMonthsParse[s] = new RegExp(
              "^" + this.monthsShort(i, "").replace(".", "") + "$",
              "i",
            ))),
          n ||
            this._monthsParse[s] ||
            ((i = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
            (this._monthsParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && "MMMM" === t && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }),
    (g.monthsRegex = function (e) {
      return this._monthsParseExact
        ? (c(this, "_monthsRegex") || je.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (c(this, "_monthsRegex") || (this._monthsRegex = Ee),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (g.monthsShortRegex = function (e) {
      return this._monthsParseExact
        ? (c(this, "_monthsRegex") || je.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Ge),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (g.week = function (e) {
      return Be(e, this._week.dow, this._week.doy).week;
    }),
    (g.firstDayOfYear = function () {
      return this._week.doy;
    }),
    (g.firstDayOfWeek = function () {
      return this._week.dow;
    }),
    (g.weekdays = function (e, t) {
      return (
        (t = a(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              e && !0 !== e && this._weekdays.isFormat.test(t)
                ? "format"
                : "standalone"
            ]),
        !0 === e ? Je(t, this._week.dow) : e ? t[e.day()] : t
      );
    }),
    (g.weekdaysMin = function (e) {
      return !0 === e
        ? Je(this._weekdaysMin, this._week.dow)
        : e
          ? this._weekdaysMin[e.day()]
          : this._weekdaysMin;
    }),
    (g.weekdaysShort = function (e) {
      return !0 === e
        ? Je(this._weekdaysShort, this._week.dow)
        : e
          ? this._weekdaysShort[e.day()]
          : this._weekdaysShort;
    }),
    (g.weekdaysParse = function (e, t, n) {
      var s, i;
      if (this._weekdaysParseExact)
        return function (e, t, n) {
          var s,
            i,
            r,
            e = e.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                s = 0;
              s < 7;
              ++s
            )
              (r = l([2e3, 1]).day(s)),
                (this._minWeekdaysParse[s] = this.weekdaysMin(
                  r,
                  "",
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[s] = this.weekdaysShort(
                  r,
                  "",
                ).toLocaleLowerCase()),
                (this._weekdaysParse[s] = this.weekdays(
                  r,
                  "",
                ).toLocaleLowerCase());
          return n
            ? "dddd" === t
              ? -1 !== (i = x.call(this._weekdaysParse, e))
                ? i
                : null
              : "ddd" === t
                ? -1 !== (i = x.call(this._shortWeekdaysParse, e))
                  ? i
                  : null
                : -1 !== (i = x.call(this._minWeekdaysParse, e))
                  ? i
                  : null
            : "dddd" === t
              ? -1 !== (i = x.call(this._weekdaysParse, e)) ||
                -1 !== (i = x.call(this._shortWeekdaysParse, e)) ||
                -1 !== (i = x.call(this._minWeekdaysParse, e))
                ? i
                : null
              : "ddd" === t
                ? -1 !== (i = x.call(this._shortWeekdaysParse, e)) ||
                  -1 !== (i = x.call(this._weekdaysParse, e)) ||
                  -1 !== (i = x.call(this._minWeekdaysParse, e))
                  ? i
                  : null
                : -1 !== (i = x.call(this._minWeekdaysParse, e)) ||
                    -1 !== (i = x.call(this._weekdaysParse, e)) ||
                    -1 !== (i = x.call(this._shortWeekdaysParse, e))
                  ? i
                  : null;
        }.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((i = l([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
              "i",
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
              "i",
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
              "i",
            ))),
          this._weekdaysParse[s] ||
            ((i =
              "^" +
              this.weekdays(i, "") +
              "|^" +
              this.weekdaysShort(i, "") +
              "|^" +
              this.weekdaysMin(i, "")),
            (this._weekdaysParse[s] = new RegExp(i.replace(".", ""), "i"))),
          n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }),
    (g.weekdaysRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || st.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = et),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (g.weekdaysShortRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || st.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = tt),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (g.weekdaysMinRegex = function (e) {
      return this._weekdaysParseExact
        ? (c(this, "_weekdaysRegex") || st.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = nt),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (g.isPM = function (e) {
      return "p" === (e + "").toLowerCase().charAt(0);
    }),
    (g.meridiem = function (e, t, n) {
      return 11 < e ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }),
    ft("en", {
      eras: [
        {
          since: "0001-01-01",
          until: 1 / 0,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD",
        },
        {
          since: "0000-12-31",
          until: -1 / 0,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC",
        },
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (e) {
        var t = e % 10;
        return (
          e +
          (1 === M((e % 100) / 10)
            ? "th"
            : 1 == t
              ? "st"
              : 2 == t
                ? "nd"
                : 3 == t
                  ? "rd"
                  : "th")
        );
      },
    }),
    (f.lang = e("moment.lang is deprecated. Use moment.locale instead.", ft)),
    (f.langData = e(
      "moment.langData is deprecated. Use moment.localeData instead.",
      P,
    ));
  var _n = Math.abs;
  function yn(e, t, n, s) {
    t = C(t, n);
    return (
      (e._milliseconds += s * t._milliseconds),
      (e._days += s * t._days),
      (e._months += s * t._months),
      e._bubble()
    );
  }
  function gn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function wn(e) {
    return (4800 * e) / 146097;
  }
  function pn(e) {
    return (146097 * e) / 4800;
  }
  function kn(e) {
    return function () {
      return this.as(e);
    };
  }
  (de = kn("ms")),
    (t = kn("s")),
    (ye = kn("m")),
    (he = kn("h")),
    (Fe = kn("d")),
    (_e = kn("w")),
    (me = kn("M")),
    (Qe = kn("Q")),
    (i = kn("y")),
    (ce = de);
  function Mn(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var we = Mn("milliseconds"),
    fe = Mn("seconds"),
    ge = Mn("minutes"),
    Pe = Mn("hours"),
    g = Mn("days"),
    vn = Mn("months"),
    Dn = Mn("years");
  var Yn = Math.round,
    Sn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  function On(e, t, n, s) {
    var i = C(e).abs(),
      r = Yn(i.as("s")),
      a = Yn(i.as("m")),
      o = Yn(i.as("h")),
      u = Yn(i.as("d")),
      l = Yn(i.as("M")),
      d = Yn(i.as("w")),
      i = Yn(i.as("y")),
      r =
        (r <= n.ss ? ["s", r] : r < n.s && ["ss", r]) ||
        (a <= 1 && ["m"]) ||
        (a < n.m && ["mm", a]) ||
        (o <= 1 && ["h"]) ||
        (o < n.h && ["hh", o]) ||
        (u <= 1 && ["d"]) ||
        (u < n.d && ["dd", u]);
    return (
      ((r = (r =
        null != n.w ? r || (d <= 1 && ["w"]) || (d < n.w && ["ww", d]) : r) ||
        (l <= 1 && ["M"]) ||
        (l < n.M && ["MM", l]) ||
        (i <= 1 && ["y"]) || ["yy", i])[2] = t),
      (r[3] = 0 < +e),
      (r[4] = s),
      function (e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s);
      }.apply(null, r)
    );
  }
  var bn = Math.abs;
  function Tn(e) {
    return (0 < e) - (e < 0) || +e;
  }
  function xn() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
      t,
      n,
      s,
      i,
      r,
      a,
      o = bn(this._milliseconds) / 1e3,
      u = bn(this._days),
      l = bn(this._months),
      d = this.asSeconds();
    return d
      ? ((e = k(o / 60)),
        (t = k(e / 60)),
        (o %= 60),
        (e %= 60),
        (n = k(l / 12)),
        (l %= 12),
        (s = o ? o.toFixed(3).replace(/\.?0+$/, "") : ""),
        (i = Tn(this._months) !== Tn(d) ? "-" : ""),
        (r = Tn(this._days) !== Tn(d) ? "-" : ""),
        (a = Tn(this._milliseconds) !== Tn(d) ? "-" : ""),
        (d < 0 ? "-" : "") +
          "P" +
          (n ? i + n + "Y" : "") +
          (l ? i + l + "M" : "") +
          (u ? r + u + "D" : "") +
          (t || e || o ? "T" : "") +
          (t ? a + t + "H" : "") +
          (e ? a + e + "M" : "") +
          (o ? a + s + "S" : ""))
      : "P0D";
  }
  var U = Ct.prototype;
  return (
    (U.isValid = function () {
      return this._isValid;
    }),
    (U.abs = function () {
      var e = this._data;
      return (
        (this._milliseconds = _n(this._milliseconds)),
        (this._days = _n(this._days)),
        (this._months = _n(this._months)),
        (e.milliseconds = _n(e.milliseconds)),
        (e.seconds = _n(e.seconds)),
        (e.minutes = _n(e.minutes)),
        (e.hours = _n(e.hours)),
        (e.months = _n(e.months)),
        (e.years = _n(e.years)),
        this
      );
    }),
    (U.add = function (e, t) {
      return yn(this, e, t, 1);
    }),
    (U.subtract = function (e, t) {
      return yn(this, e, t, -1);
    }),
    (U.as = function (e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        s = this._milliseconds;
      if ("month" === (e = _(e)) || "quarter" === e || "year" === e)
        switch (((t = this._days + s / 864e5), (n = this._months + wn(t)), e)) {
          case "month":
            return n;
          case "quarter":
            return n / 3;
          case "year":
            return n / 12;
        }
      else
        switch (((t = this._days + Math.round(pn(this._months))), e)) {
          case "week":
            return t / 7 + s / 6048e5;
          case "day":
            return t + s / 864e5;
          case "hour":
            return 24 * t + s / 36e5;
          case "minute":
            return 1440 * t + s / 6e4;
          case "second":
            return 86400 * t + s / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + s;
          default:
            throw new Error("Unknown unit " + e);
        }
    }),
    (U.asMilliseconds = de),
    (U.asSeconds = t),
    (U.asMinutes = ye),
    (U.asHours = he),
    (U.asDays = Fe),
    (U.asWeeks = _e),
    (U.asMonths = me),
    (U.asQuarters = Qe),
    (U.asYears = i),
    (U.valueOf = ce),
    (U._bubble = function () {
      var e = this._milliseconds,
        t = this._days,
        n = this._months,
        s = this._data;
      return (
        (0 <= e && 0 <= t && 0 <= n) ||
          (e <= 0 && t <= 0 && n <= 0) ||
          ((e += 864e5 * gn(pn(n) + t)), (n = t = 0)),
        (s.milliseconds = e % 1e3),
        (e = k(e / 1e3)),
        (s.seconds = e % 60),
        (e = k(e / 60)),
        (s.minutes = e % 60),
        (e = k(e / 60)),
        (s.hours = e % 24),
        (t += k(e / 24)),
        (n += e = k(wn(t))),
        (t -= gn(pn(e))),
        (e = k(n / 12)),
        (n %= 12),
        (s.days = t),
        (s.months = n),
        (s.years = e),
        this
      );
    }),
    (U.clone = function () {
      return C(this);
    }),
    (U.get = function (e) {
      return (e = _(e)), this.isValid() ? this[e + "s"]() : NaN;
    }),
    (U.milliseconds = we),
    (U.seconds = fe),
    (U.minutes = ge),
    (U.hours = Pe),
    (U.days = g),
    (U.weeks = function () {
      return k(this.days() / 7);
    }),
    (U.months = vn),
    (U.years = Dn),
    (U.humanize = function (e, t) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var n = !1,
        s = Sn;
      return (
        "object" == typeof e && ((t = e), (e = !1)),
        "boolean" == typeof e && (n = e),
        "object" == typeof t &&
          ((s = Object.assign({}, Sn, t)),
          null != t.s && null == t.ss && (s.ss = t.s - 1)),
        (e = this.localeData()),
        (t = On(this, !n, s, e)),
        n && (t = e.pastFuture(+this, t)),
        e.postformat(t)
      );
    }),
    (U.toISOString = xn),
    (U.toString = xn),
    (U.toJSON = xn),
    (U.locale = Xt),
    (U.localeData = Kt),
    (U.toIsoString = e(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      xn,
    )),
    (U.lang = Ke),
    s("X", 0, 0, "unix"),
    s("x", 0, 0, "valueOf"),
    w("x", ke),
    w("X", /[+-]?\d+(\.\d{1,3})?/),
    v("X", function (e, t, n) {
      n._d = new Date(1e3 * parseFloat(e));
    }),
    v("x", function (e, t, n) {
      n._d = new Date(M(e));
    }),
    (f.version = "2.30.1"),
    (H = R),
    (f.fn = y),
    (f.min = function () {
      return Pt("isBefore", [].slice.call(arguments, 0));
    }),
    (f.max = function () {
      return Pt("isAfter", [].slice.call(arguments, 0));
    }),
    (f.now = function () {
      return Date.now ? Date.now() : +new Date();
    }),
    (f.utc = l),
    (f.unix = function (e) {
      return R(1e3 * e);
    }),
    (f.months = function (e, t) {
      return fn(e, t, "months");
    }),
    (f.isDate = V),
    (f.locale = ft),
    (f.invalid = I),
    (f.duration = C),
    (f.isMoment = d),
    (f.weekdays = function (e, t, n) {
      return mn(e, t, n, "weekdays");
    }),
    (f.parseZone = function () {
      return R.apply(null, arguments).parseZone();
    }),
    (f.localeData = P),
    (f.isDuration = Ut),
    (f.monthsShort = function (e, t) {
      return fn(e, t, "monthsShort");
    }),
    (f.weekdaysMin = function (e, t, n) {
      return mn(e, t, n, "weekdaysMin");
    }),
    (f.defineLocale = mt),
    (f.updateLocale = function (e, t) {
      var n, s;
      return (
        null != t
          ? ((s = ut),
            null != W[e] && null != W[e].parentLocale
              ? W[e].set(X(W[e]._config, t))
              : ((t = X((s = null != (n = ct(e)) ? n._config : s), t)),
                null == n && (t.abbr = e),
                ((s = new K(t)).parentLocale = W[e]),
                (W[e] = s)),
            ft(e))
          : null != W[e] &&
            (null != W[e].parentLocale
              ? ((W[e] = W[e].parentLocale), e === ft() && ft(e))
              : null != W[e] && delete W[e]),
        W[e]
      );
    }),
    (f.locales = function () {
      return ee(W);
    }),
    (f.weekdaysShort = function (e, t, n) {
      return mn(e, t, n, "weekdaysShort");
    }),
    (f.normalizeUnits = _),
    (f.relativeTimeRounding = function (e) {
      return void 0 === e ? Yn : "function" == typeof e && ((Yn = e), !0);
    }),
    (f.relativeTimeThreshold = function (e, t) {
      return (
        void 0 !== Sn[e] &&
        (void 0 === t ? Sn[e] : ((Sn[e] = t), "s" === e && (Sn.ss = t - 1), !0))
      );
    }),
    (f.calendarFormat = function (e, t) {
      return (e = e.diff(t, "days", !0)) < -6
        ? "sameElse"
        : e < -1
          ? "lastWeek"
          : e < 0
            ? "lastDay"
            : e < 1
              ? "sameDay"
              : e < 2
                ? "nextDay"
                : e < 7
                  ? "nextWeek"
                  : "sameElse";
    }),
    (f.prototype = y),
    (f.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "GGGG-[W]WW",
      MONTH: "YYYY-MM",
    }),
    f
  );
});
