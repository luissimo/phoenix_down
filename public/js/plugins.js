!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function () {
    "use strict";
    function e() {
        return Bi.apply(null, arguments)
    }

    function t(e) {
        Bi = e
    }

    function n(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function i(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function a(e, t) {
        var n, i = [];
        for (n = 0; n < e.length; ++n)i.push(t(e[n], n));
        return i
    }

    function s(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function r(e, t) {
        for (var n in t)s(t, n) && (e[n] = t[n]);
        return s(t, "toString") && (e.toString = t.toString), s(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function o(e, t, n, i) {
        return xe(e, t, n, i, !0).utc()
    }

    function d() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function l(e) {
        return null == e._pf && (e._pf = d()), e._pf
    }

    function u(e) {
        if (null == e._isValid) {
            var t = l(e);
            e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
        }
        return e._isValid
    }

    function c(e) {
        var t = o(NaN);
        return null != e ? r(l(t), e) : l(t).userInvalidated = !0, t
    }

    function p(e) {
        return void 0 === e
    }

    function m(e, t) {
        var n, i, a;
        if (p(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), p(t._i) || (e._i = t._i), p(t._f) || (e._f = t._f), p(t._l) || (e._l = t._l), p(t._strict) || (e._strict = t._strict), p(t._tzm) || (e._tzm = t._tzm), p(t._isUTC) || (e._isUTC = t._isUTC), p(t._offset) || (e._offset = t._offset), p(t._pf) || (e._pf = l(t)), p(t._locale) || (e._locale = t._locale), qi.length > 0)for (n in qi)i = qi[n], a = t[i], p(a) || (e[i] = a);
        return e
    }

    function _(t) {
        m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), Vi === !1 && (Vi = !0, e.updateOffset(this), Vi = !1)
    }

    function h(e) {
        return e instanceof _ || null != e && null != e._isAMomentObject
    }

    function f(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }

    function g(e) {
        var t = +e, n = 0;
        return 0 !== t && isFinite(t) && (n = f(t)), n
    }

    function y(e, t, n) {
        var i, a = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), r = 0;
        for (i = 0; a > i; i++)(n && e[i] !== t[i] || !n && g(e[i]) !== g(t[i])) && r++;
        return r + s
    }

    function v() {
    }

    function M(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }

    function w(e) {
        for (var t, n, i, a, s = 0; s < e.length;) {
            for (a = M(e[s]).split("-"), t = a.length, n = M(e[s + 1]), n = n ? n.split("-") : null; t > 0;) {
                if (i = b(a.slice(0, t).join("-")))return i;
                if (n && n.length >= t && y(a, n, !0) >= t - 1)break;
                t--
            }
            s++
        }
        return null
    }

    function b(e) {
        var t = null;
        if (!Gi[e] && "undefined" != typeof module && module && module.exports)try {
            t = Ui._abbr, require("./locale/" + e), L(t)
        } catch (n) {
        }
        return Gi[e]
    }

    function L(e, t) {
        var n;
        return e && (n = p(t) ? Y(e) : k(e, t), n && (Ui = n)), Ui._abbr
    }

    function k(e, t) {
        return null !== t ? (t.abbr = e, Gi[e] = Gi[e] || new v, Gi[e].set(t), L(e), Gi[e]) : (delete Gi[e], null)
    }

    function Y(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)return Ui;
        if (!n(e)) {
            if (t = b(e))return t;
            e = [e]
        }
        return w(e)
    }

    function D(e, t) {
        var n = e.toLowerCase();
        Ji[n] = Ji[n + "s"] = Ji[t] = e
    }

    function T(e) {
        return "string" == typeof e ? Ji[e] || Ji[e.toLowerCase()] : void 0
    }

    function S(e) {
        var t, n, i = {};
        for (n in e)s(e, n) && (t = T(n), t && (i[t] = e[n]));
        return i
    }

    function x(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }

    function H(t, n) {
        return function (i) {
            return null != i ? (C(this, t, i), e.updateOffset(this, n), this) : j(this, t)
        }
    }

    function j(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }

    function C(e, t, n) {
        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function P(e, t) {
        var n;
        if ("object" == typeof e)for (n in e)this.set(n, e[n]); else if (e = T(e), x(this[e]))return this[e](t);
        return this
    }

    function E(e, t, n) {
        var i = "" + Math.abs(e), a = t - i.length, s = e >= 0;
        return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
    }

    function A(e, t, n, i) {
        var a = i;
        "string" == typeof i && (a = function () {
            return this[i]()
        }), e && (Ki[e] = a), t && (Ki[t[0]] = function () {
            return E(a.apply(this, arguments), t[1], t[2])
        }), n && (Ki[n] = function () {
            return this.localeData().ordinal(a.apply(this, arguments), e)
        })
    }

    function F(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function O(e) {
        var t, n, i = e.match(Xi);
        for (t = 0, n = i.length; n > t; t++)Ki[i[t]] ? i[t] = Ki[i[t]] : i[t] = F(i[t]);
        return function (a) {
            var s = "";
            for (t = 0; n > t; t++)s += i[t] instanceof Function ? i[t].call(a, e) : i[t];
            return s
        }
    }

    function W(e, t) {
        return e.isValid() ? (t = I(t, e.localeData()), Qi[t] = Qi[t] || O(t), Qi[t](e)) : e.localeData().invalidDate()
    }

    function I(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }

        var i = 5;
        for (Zi.lastIndex = 0; i >= 0 && Zi.test(e);)e = e.replace(Zi, n), Zi.lastIndex = 0, i -= 1;
        return e
    }

    function z(e, t, n) {
        ga[e] = x(t) ? t : function (e, i) {
            return e && n ? n : t
        }
    }

    function $(e, t) {
        return s(ga, e) ? ga[e](t._strict, t._locale) : new RegExp(R(e))
    }

    function R(e) {
        return N(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, a) {
            return t || n || i || a
        }))
    }

    function N(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function B(e, t) {
        var n, i = t;
        for ("string" == typeof e && (e = [e]), "number" == typeof t && (i = function (e, n) {
            n[t] = g(e)
        }), n = 0; n < e.length; n++)ya[e[n]] = i
    }

    function U(e, t) {
        B(e, function (e, n, i, a) {
            i._w = i._w || {}, t(e, i._w, i, a)
        })
    }

    function q(e, t, n) {
        null != t && s(ya, e) && ya[e](t, n._a, n, e)
    }

    function V(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function G(e, t) {
        return n(this._months) ? this._months[e.month()] : this._months[Sa.test(t) ? "format" : "standalone"][e.month()]
    }

    function J(e, t) {
        return n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Sa.test(t) ? "format" : "standalone"][e.month()]
    }

    function X(e, t, n) {
        var i, a, s;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
            if (a = o([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e))return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e))return i;
            if (!n && this._monthsParse[i].test(e))return i
        }
    }

    function Z(e, t) {
        var n;
        return e.isValid() ? "string" == typeof t && (t = e.localeData().monthsParse(t), "number" != typeof t) ? e : (n = Math.min(e.date(), V(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e) : e
    }

    function Q(t) {
        return null != t ? (Z(this, t), e.updateOffset(this, !0), this) : j(this, "Month")
    }

    function K() {
        return V(this.year(), this.month())
    }

    function ee(e) {
        return this._monthsParseExact ? (s(this, "_monthsRegex") || ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function te(e) {
        return this._monthsParseExact ? (s(this, "_monthsRegex") || ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
    }

    function ne() {
        function e(e, t) {
            return t.length - e.length
        }

        var t, n, i = [], a = [], s = [];
        for (t = 0; 12 > t; t++)n = o([2e3, t]), i.push(this.monthsShort(n, "")), a.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
        for (i.sort(e), a.sort(e), s.sort(e), t = 0; 12 > t; t++)i[t] = N(i[t]), a[t] = N(a[t]), s[t] = N(s[t]);
        this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")$", "i")
    }

    function ie(e) {
        var t, n = e._a;
        return n && -2 === l(e).overflow && (t = n[Ma] < 0 || n[Ma] > 11 ? Ma : n[wa] < 1 || n[wa] > V(n[va], n[Ma]) ? wa : n[ba] < 0 || n[ba] > 24 || 24 === n[ba] && (0 !== n[La] || 0 !== n[ka] || 0 !== n[Ya]) ? ba : n[La] < 0 || n[La] > 59 ? La : n[ka] < 0 || n[ka] > 59 ? ka : n[Ya] < 0 || n[Ya] > 999 ? Ya : -1, l(e)._overflowDayOfYear && (va > t || t > wa) && (t = wa), l(e)._overflowWeeks && -1 === t && (t = Da), l(e)._overflowWeekday && -1 === t && (t = Ta), l(e).overflow = t), e
    }

    function ae(t) {
        e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function se(e, t) {
        var n = !0;
        return r(function () {
            return n && (ae(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
        }, t)
    }

    function re(e, t) {
        Pa[e] || (ae(t), Pa[e] = !0)
    }

    function oe(e) {
        var t, n, i, a, s, r, o = e._i, d = Ea.exec(o) || Aa.exec(o);
        if (d) {
            for (l(e).iso = !0, t = 0, n = Oa.length; n > t; t++)if (Oa[t][1].exec(d[1])) {
                a = Oa[t][0], i = Oa[t][2] !== !1;
                break
            }
            if (null == a)return void(e._isValid = !1);
            if (d[3]) {
                for (t = 0, n = Wa.length; n > t; t++)if (Wa[t][1].exec(d[3])) {
                    s = (d[2] || " ") + Wa[t][0];
                    break
                }
                if (null == s)return void(e._isValid = !1)
            }
            if (!i && null != s)return void(e._isValid = !1);
            if (d[4]) {
                if (!Fa.exec(d[4]))return void(e._isValid = !1);
                r = "Z"
            }
            e._f = a + (s || "") + (r || ""), be(e)
        } else e._isValid = !1
    }

    function de(t) {
        var n = Ia.exec(t._i);
        return null !== n ? void(t._d = new Date(+n[1])) : (oe(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
    }

    function le(e, t, n, i, a, s, r) {
        var o = new Date(e, t, n, i, a, s, r);
        return 100 > e && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
    }

    function ue(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
    }

    function ce(e) {
        return pe(e) ? 366 : 365
    }

    function pe(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }

    function me() {
        return pe(this.year())
    }

    function _e(e, t, n) {
        var i = 7 + t - n, a = (7 + ue(e, 0, i).getUTCDay() - t) % 7;
        return -a + i - 1
    }

    function he(e, t, n, i, a) {
        var s, r, o = (7 + n - i) % 7, d = _e(e, i, a), l = 1 + 7 * (t - 1) + o + d;
        return 0 >= l ? (s = e - 1, r = ce(s) + l) : l > ce(e) ? (s = e + 1, r = l - ce(e)) : (s = e, r = l), {
            year: s,
            dayOfYear: r
        }
    }

    function fe(e, t, n) {
        var i, a, s = _e(e.year(), t, n), r = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
        return 1 > r ? (a = e.year() - 1, i = r + ge(a, t, n)) : r > ge(e.year(), t, n) ? (i = r - ge(e.year(), t, n), a = e.year() + 1) : (a = e.year(), i = r), {
            week: i,
            year: a
        }
    }

    function ge(e, t, n) {
        var i = _e(e, t, n), a = _e(e + 1, t, n);
        return (ce(e) - i + a) / 7
    }

    function ye(e, t, n) {
        return null != e ? e : null != t ? t : n
    }

    function ve(t) {
        var n = new Date(e.now());
        return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }

    function Me(e) {
        var t, n, i, a, s = [];
        if (!e._d) {
            for (i = ve(e), e._w && null == e._a[wa] && null == e._a[Ma] && we(e), e._dayOfYear && (a = ye(e._a[va], i[va]), e._dayOfYear > ce(a) && (l(e)._overflowDayOfYear = !0), n = ue(a, 0, e._dayOfYear), e._a[Ma] = n.getUTCMonth(), e._a[wa] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t)e._a[t] = s[t] = i[t];
            for (; 7 > t; t++)e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ba] && 0 === e._a[La] && 0 === e._a[ka] && 0 === e._a[Ya] && (e._nextDay = !0, e._a[ba] = 0), e._d = (e._useUTC ? ue : le).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ba] = 24)
        }
    }

    function we(e) {
        var t, n, i, a, s, r, o, d;
        t = e._w, null != t.GG || null != t.W || null != t.E ? (s = 1, r = 4, n = ye(t.GG, e._a[va], fe(He(), 1, 4).year), i = ye(t.W, 1), a = ye(t.E, 1), (1 > a || a > 7) && (d = !0)) : (s = e._locale._week.dow, r = e._locale._week.doy, n = ye(t.gg, e._a[va], fe(He(), s, r).year), i = ye(t.w, 1), null != t.d ? (a = t.d, (0 > a || a > 6) && (d = !0)) : null != t.e ? (a = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : a = s), 1 > i || i > ge(n, s, r) ? l(e)._overflowWeeks = !0 : null != d ? l(e)._overflowWeekday = !0 : (o = he(n, i, a, s, r), e._a[va] = o.year, e._dayOfYear = o.dayOfYear)
    }

    function be(t) {
        if (t._f === e.ISO_8601)return void oe(t);
        t._a = [], l(t).empty = !0;
        var n, i, a, s, r, o = "" + t._i, d = o.length, u = 0;
        for (a = I(t._f, t._locale).match(Xi) || [], n = 0; n < a.length; n++)s = a[n], i = (o.match($(s, t)) || [])[0], i && (r = o.substr(0, o.indexOf(i)), r.length > 0 && l(t).unusedInput.push(r), o = o.slice(o.indexOf(i) + i.length), u += i.length), Ki[s] ? (i ? l(t).empty = !1 : l(t).unusedTokens.push(s), q(s, i, t)) : t._strict && !i && l(t).unusedTokens.push(s);
        l(t).charsLeftOver = d - u, o.length > 0 && l(t).unusedInput.push(o), l(t).bigHour === !0 && t._a[ba] <= 12 && t._a[ba] > 0 && (l(t).bigHour = void 0), t._a[ba] = Le(t._locale, t._a[ba], t._meridiem), Me(t), ie(t)
    }

    function Le(e, t, n) {
        var i;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && 12 > t && (t += 12), i || 12 !== t || (t = 0), t) : t
    }

    function ke(e) {
        var t, n, i, a, s;
        if (0 === e._f.length)return l(e).invalidFormat = !0, void(e._d = new Date(NaN));
        for (a = 0; a < e._f.length; a++)s = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], be(t), u(t) && (s += l(t).charsLeftOver, s += 10 * l(t).unusedTokens.length, l(t).score = s, (null == i || i > s) && (i = s, n = t));
        r(e, n || t)
    }

    function Ye(e) {
        if (!e._d) {
            var t = S(e._i);
            e._a = a([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
                return e && parseInt(e, 10)
            }), Me(e)
        }
    }

    function De(e) {
        var t = new _(ie(Te(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }

    function Te(e) {
        var t = e._i, a = e._f;
        return e._locale = e._locale || Y(e._l), null === t || void 0 === a && "" === t ? c({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), h(t) ? new _(ie(t)) : (n(a) ? ke(e) : a ? be(e) : i(t) ? e._d = t : Se(e), u(e) || (e._d = null), e))
    }

    function Se(t) {
        var s = t._i;
        void 0 === s ? t._d = new Date(e.now()) : i(s) ? t._d = new Date(+s) : "string" == typeof s ? de(t) : n(s) ? (t._a = a(s.slice(0), function (e) {
            return parseInt(e, 10)
        }), Me(t)) : "object" == typeof s ? Ye(t) : "number" == typeof s ? t._d = new Date(s) : e.createFromInputFallback(t)
    }

    function xe(e, t, n, i, a) {
        var s = {};
        return "boolean" == typeof n && (i = n, n = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = a, s._l = n, s._i = e, s._f = t, s._strict = i, De(s)
    }

    function He(e, t, n, i) {
        return xe(e, t, n, i, !1)
    }

    function je(e, t) {
        var i, a;
        if (1 === t.length && n(t[0]) && (t = t[0]), !t.length)return He();
        for (i = t[0], a = 1; a < t.length; ++a)(!t[a].isValid() || t[a][e](i)) && (i = t[a]);
        return i
    }

    function Ce() {
        var e = [].slice.call(arguments, 0);
        return je("isBefore", e)
    }

    function Pe() {
        var e = [].slice.call(arguments, 0);
        return je("isAfter", e)
    }

    function Ee(e) {
        var t = S(e), n = t.year || 0, i = t.quarter || 0, a = t.month || 0, s = t.week || 0, r = t.day || 0, o = t.hour || 0, d = t.minute || 0, l = t.second || 0, u = t.millisecond || 0;
        this._milliseconds = +u + 1e3 * l + 6e4 * d + 36e5 * o, this._days = +r + 7 * s, this._months = +a + 3 * i + 12 * n, this._data = {}, this._locale = Y(), this._bubble()
    }

    function Ae(e) {
        return e instanceof Ee
    }

    function Fe(e, t) {
        A(e, 0, 0, function () {
            var e = this.utcOffset(), n = "+";
            return 0 > e && (e = -e, n = "-"), n + E(~~(e / 60), 2) + t + E(~~e % 60, 2)
        })
    }

    function Oe(e, t) {
        var n = (t || "").match(e) || [], i = n[n.length - 1] || [], a = (i + "").match(Ba) || ["-", 0, 0], s = +(60 * a[1]) + g(a[2]);
        return "+" === a[0] ? s : -s
    }

    function We(t, n) {
        var a, s;
        return n._isUTC ? (a = n.clone(), s = (h(t) || i(t) ? +t : +He(t)) - +a, a._d.setTime(+a._d + s), e.updateOffset(a, !1), a) : He(t).local()
    }

    function Ie(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function ze(t, n) {
        var i, a = this._offset || 0;
        return this.isValid() ? null != t ? ("string" == typeof t ? t = Oe(_a, t) : Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (i = Ie(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), a !== t && (!n || this._changeInProgress ? nt(this, Ze(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? a : Ie(this) : null != t ? this : NaN
    }

    function $e(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }

    function Re(e) {
        return this.utcOffset(0, e)
    }

    function Ne(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ie(this), "m")), this
    }

    function Be() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Oe(ma, this._i)), this
    }

    function Ue(e) {
        return this.isValid() ? (e = e ? He(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
    }

    function qe() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Ve() {
        if (!p(this._isDSTShifted))return this._isDSTShifted;
        var e = {};
        if (m(e, this), e = Te(e), e._a) {
            var t = e._isUTC ? o(e._a) : He(e._a);
            this._isDSTShifted = this.isValid() && y(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function Ge() {
        return this.isValid() ? !this._isUTC : !1
    }

    function Je() {
        return this.isValid() ? this._isUTC : !1
    }

    function Xe() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function Ze(e, t) {
        var n, i, a, r = e, o = null;
        return Ae(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : "number" == typeof e ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (o = Ua.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: 0,
            d: g(o[wa]) * n,
            h: g(o[ba]) * n,
            m: g(o[La]) * n,
            s: g(o[ka]) * n,
            ms: g(o[Ya]) * n
        }) : (o = qa.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: Qe(o[2], n),
            M: Qe(o[3], n),
            d: Qe(o[4], n),
            h: Qe(o[5], n),
            m: Qe(o[6], n),
            s: Qe(o[7], n),
            w: Qe(o[8], n)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (a = et(He(r.from), He(r.to)), r = {}, r.ms = a.milliseconds, r.M = a.months), i = new Ee(r), Ae(e) && s(e, "_locale") && (i._locale = e._locale), i
    }

    function Qe(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }

    function Ke(e, t) {
        var n = {milliseconds: 0, months: 0};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function et(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = We(t, e), e.isBefore(t) ? n = Ke(e, t) : (n = Ke(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        }
    }

    function tt(e, t) {
        return function (n, i) {
            var a, s;
            return null === i || isNaN(+i) || (re(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, a = Ze(n, i), nt(this, a, e), this
        }
    }

    function nt(t, n, i, a) {
        var s = n._milliseconds, r = n._days, o = n._months;
        t.isValid() && (a = null == a ? !0 : a, s && t._d.setTime(+t._d + s * i), r && C(t, "Date", j(t, "Date") + r * i), o && Z(t, j(t, "Month") + o * i), a && e.updateOffset(t, r || o))
    }

    function it(e, t) {
        var n = e || He(), i = We(n, this).startOf("day"), a = this.diff(i, "days", !0), s = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse", r = t && (x(t[s]) ? t[s]() : t[s]);
        return this.format(r || this.localeData().calendar(s, this, He(n)))
    }

    function at() {
        return new _(this)
    }

    function st(e, t) {
        var n = h(e) ? e : He(e);
        return this.isValid() && n.isValid() ? (t = T(p(t) ? "millisecond" : t), "millisecond" === t ? +this > +n : +n < +this.clone().startOf(t)) : !1
    }

    function rt(e, t) {
        var n = h(e) ? e : He(e);
        return this.isValid() && n.isValid() ? (t = T(p(t) ? "millisecond" : t), "millisecond" === t ? +n > +this : +this.clone().endOf(t) < +n) : !1
    }

    function ot(e, t, n) {
        return this.isAfter(e, n) && this.isBefore(t, n)
    }

    function dt(e, t) {
        var n, i = h(e) ? e : He(e);
        return this.isValid() && i.isValid() ? (t = T(t || "millisecond"), "millisecond" === t ? +this === +i : (n = +i, +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))) : !1
    }

    function lt(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }

    function ut(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }

    function ct(e, t, n) {
        var i, a, s, r;
        return this.isValid() ? (i = We(e, this), i.isValid() ? (a = 6e4 * (i.utcOffset() - this.utcOffset()), t = T(t), "year" === t || "month" === t || "quarter" === t ? (r = pt(this, i), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (s = this - i, r = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - a) / 864e5 : "week" === t ? (s - a) / 6048e5 : s), n ? r : f(r)) : NaN) : NaN
    }

    function pt(e, t) {
        var n, i, a = 12 * (t.year() - e.year()) + (t.month() - e.month()), s = e.clone().add(a, "months");
        return 0 > t - s ? (n = e.clone().add(a - 1, "months"), i = (t - s) / (s - n)) : (n = e.clone().add(a + 1, "months"), i = (t - s) / (n - s)), -(a + i)
    }

    function mt() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function _t() {
        var e = this.clone().utc();
        return 0 < e.year() && e.year() <= 9999 ? x(Date.prototype.toISOString) ? this.toDate().toISOString() : W(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : W(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function ht(t) {
        var n = W(this, t || e.defaultFormat);
        return this.localeData().postformat(n)
    }

    function ft(e, t) {
        return this.isValid() && (h(e) && e.isValid() || He(e).isValid()) ? Ze({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function gt(e) {
        return this.from(He(), e)
    }

    function yt(e, t) {
        return this.isValid() && (h(e) && e.isValid() || He(e).isValid()) ? Ze({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function vt(e) {
        return this.to(He(), e)
    }

    function Mt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (t = Y(e), null != t && (this._locale = t), this)
    }

    function wt() {
        return this._locale
    }

    function bt(e) {
        switch (e = T(e)) {
            case"year":
                this.month(0);
            case"quarter":
            case"month":
                this.date(1);
            case"week":
            case"isoWeek":
            case"day":
                this.hours(0);
            case"hour":
                this.minutes(0);
            case"minute":
                this.seconds(0);
            case"second":
                this.milliseconds(0)
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function Lt(e) {
        return e = T(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    }

    function kt() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function Yt() {
        return Math.floor(+this / 1e3)
    }

    function Dt() {
        return this._offset ? new Date(+this) : this._d
    }

    function Tt() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }

    function St() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }

    function xt() {
        return this.isValid() ? this.toISOString() : "null"
    }

    function Ht() {
        return u(this)
    }

    function jt() {
        return r({}, l(this))
    }

    function Ct() {
        return l(this).overflow
    }

    function Pt() {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }

    function Et(e, t) {
        A(0, [e, e.length], 0, t)
    }

    function At(e) {
        return It.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Ft(e) {
        return It.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Ot() {
        return ge(this.year(), 1, 4)
    }

    function Wt() {
        var e = this.localeData()._week;
        return ge(this.year(), e.dow, e.doy)
    }

    function It(e, t, n, i, a) {
        var s;
        return null == e ? fe(this, i, a).year : (s = ge(e, i, a), t > s && (t = s), zt.call(this, e, t, n, i, a))
    }

    function zt(e, t, n, i, a) {
        var s = he(e, t, n, i, a), r = ue(s.year, 0, s.dayOfYear);
        return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
    }

    function $t(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }

    function Rt(e) {
        return fe(e, this._week.dow, this._week.doy).week
    }

    function Nt() {
        return this._week.dow
    }

    function Bt() {
        return this._week.doy
    }

    function Ut(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }

    function qt(e) {
        var t = fe(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }

    function Vt(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
    }

    function Gt(e, t) {
        return n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
    }

    function Jt(e) {
        return this._weekdaysShort[e.day()]
    }

    function Xt(e) {
        return this._weekdaysMin[e.day()]
    }

    function Zt(e, t, n) {
        var i, a, s;
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
            if (a = He([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e))return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e))return i;
            if (!n && this._weekdaysParse[i].test(e))return i
        }
    }

    function Qt(e) {
        if (!this.isValid())return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = Vt(e, this.localeData()), this.add(e - t, "d")) : t
    }

    function Kt(e) {
        if (!this.isValid())return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }

    function en(e) {
        return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN
    }

    function tn(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }

    function nn() {
        return this.hours() % 12 || 12
    }

    function an(e, t) {
        A(e, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function sn(e, t) {
        return t._meridiemParse
    }

    function rn(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }

    function on(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }

    function dn(e, t) {
        t[Ya] = g(1e3 * ("0." + e))
    }

    function ln() {
        return this._isUTC ? "UTC" : ""
    }

    function un() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function cn(e) {
        return He(1e3 * e)
    }

    function pn() {
        return He.apply(null, arguments).parseZone()
    }

    function mn(e, t, n) {
        var i = this._calendar[e];
        return x(i) ? i.call(t, n) : i
    }

    function _n(e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }

    function hn() {
        return this._invalidDate
    }

    function fn(e) {
        return this._ordinal.replace("%d", e)
    }

    function gn(e) {
        return e
    }

    function yn(e, t, n, i) {
        var a = this._relativeTime[n];
        return x(a) ? a(e, t, n, i) : a.replace(/%d/i, e)
    }

    function vn(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return x(n) ? n(t) : n.replace(/%s/i, t)
    }

    function Mn(e) {
        var t, n;
        for (n in e)t = e[n], x(t) ? this[n] = t : this["_" + n] = t;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function wn(e, t, n, i) {
        var a = Y(), s = o().set(i, t);
        return a[n](s, e)
    }

    function bn(e, t, n, i, a) {
        if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t)return wn(e, t, n, a);
        var s, r = [];
        for (s = 0; i > s; s++)r[s] = wn(e, s, n, a);
        return r
    }

    function Ln(e, t) {
        return bn(e, t, "months", 12, "month")
    }

    function kn(e, t) {
        return bn(e, t, "monthsShort", 12, "month")
    }

    function Yn(e, t) {
        return bn(e, t, "weekdays", 7, "day")
    }

    function Dn(e, t) {
        return bn(e, t, "weekdaysShort", 7, "day")
    }

    function Tn(e, t) {
        return bn(e, t, "weekdaysMin", 7, "day")
    }

    function Sn() {
        var e = this._data;
        return this._milliseconds = fs(this._milliseconds), this._days = fs(this._days), this._months = fs(this._months), e.milliseconds = fs(e.milliseconds), e.seconds = fs(e.seconds), e.minutes = fs(e.minutes), e.hours = fs(e.hours), e.months = fs(e.months), e.years = fs(e.years), this
    }

    function xn(e, t, n, i) {
        var a = Ze(t, n);
        return e._milliseconds += i * a._milliseconds, e._days += i * a._days, e._months += i * a._months, e._bubble()
    }

    function Hn(e, t) {
        return xn(this, e, t, 1)
    }

    function jn(e, t) {
        return xn(this, e, t, -1)
    }

    function Cn(e) {
        return 0 > e ? Math.floor(e) : Math.ceil(e)
    }

    function Pn() {
        var e, t, n, i, a, s = this._milliseconds, r = this._days, o = this._months, d = this._data;
        return s >= 0 && r >= 0 && o >= 0 || 0 >= s && 0 >= r && 0 >= o || (s += 864e5 * Cn(An(o) + r), r = 0, o = 0), d.milliseconds = s % 1e3, e = f(s / 1e3), d.seconds = e % 60, t = f(e / 60), d.minutes = t % 60, n = f(t / 60), d.hours = n % 24, r += f(n / 24), a = f(En(r)), o += a, r -= Cn(An(a)), i = f(o / 12), o %= 12, d.days = r, d.months = o, d.years = i, this
    }

    function En(e) {
        return 4800 * e / 146097
    }

    function An(e) {
        return 146097 * e / 4800
    }

    function Fn(e) {
        var t, n, i = this._milliseconds;
        if (e = T(e), "month" === e || "year" === e)return t = this._days + i / 864e5, n = this._months + En(t), "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(An(this._months)), e) {
            case"week":
                return t / 7 + i / 6048e5;
            case"day":
                return t + i / 864e5;
            case"hour":
                return 24 * t + i / 36e5;
            case"minute":
                return 1440 * t + i / 6e4;
            case"second":
                return 86400 * t + i / 1e3;
            case"millisecond":
                return Math.floor(864e5 * t) + i;
            default:
                throw new Error("Unknown unit " + e)
        }
    }

    function On() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
    }

    function Wn(e) {
        return function () {
            return this.as(e)
        }
    }

    function In(e) {
        return e = T(e), this[e + "s"]()
    }

    function zn(e) {
        return function () {
            return this._data[e]
        }
    }

    function $n() {
        return f(this.days() / 7)
    }

    function Rn(e, t, n, i, a) {
        return a.relativeTime(t || 1, !!n, e, i)
    }

    function Nn(e, t, n) {
        var i = Ze(e).abs(), a = Cs(i.as("s")), s = Cs(i.as("m")), r = Cs(i.as("h")), o = Cs(i.as("d")), d = Cs(i.as("M")), l = Cs(i.as("y")), u = a < Ps.s && ["s", a] || 1 >= s && ["m"] || s < Ps.m && ["mm", s] || 1 >= r && ["h"] || r < Ps.h && ["hh", r] || 1 >= o && ["d"] || o < Ps.d && ["dd", o] || 1 >= d && ["M"] || d < Ps.M && ["MM", d] || 1 >= l && ["y"] || ["yy", l];
        return u[2] = t, u[3] = +e > 0, u[4] = n, Rn.apply(null, u)
    }

    function Bn(e, t) {
        return void 0 === Ps[e] ? !1 : void 0 === t ? Ps[e] : (Ps[e] = t, !0)
    }

    function Un(e) {
        var t = this.localeData(), n = Nn(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
    }

    function qn() {
        var e, t, n, i = Es(this._milliseconds) / 1e3, a = Es(this._days), s = Es(this._months);
        e = f(i / 60), t = f(e / 60), i %= 60, e %= 60, n = f(s / 12), s %= 12;
        var r = n, o = s, d = a, l = t, u = e, c = i, p = this.asSeconds();
        return p ? (0 > p ? "-" : "") + "P" + (r ? r + "Y" : "") + (o ? o + "M" : "") + (d ? d + "D" : "") + (l || u || c ? "T" : "") + (l ? l + "H" : "") + (u ? u + "M" : "") + (c ? c + "S" : "") : "P0D"
    }

    function Vn(e, t) {
        var n = e.split("_");
        return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function Gn(e, t, n) {
        var i = {
            mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
        };
        return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + Vn(i[n], +e)
    }

    function Jn(e, t, n) {
        var i = {mm: "munutenn", MM: "miz", dd: "devezh"};
        return e + " " + Qn(i[n], e)
    }

    function Xn(e) {
        switch (Zn(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return e + " bloaz";
            default:
                return e + " vloaz"
        }
    }

    function Zn(e) {
        return e > 9 ? Zn(e % 10) : e
    }

    function Qn(e, t) {
        return 2 === t ? Kn(e) : e
    }

    function Kn(e) {
        var t = {m: "v", b: "v", d: "z"};
        return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
    }

    function ei(e, t, n) {
        var i = e + " ";
        switch (n) {
            case"m":
                return t ? "jedna minuta" : "jedne minute";
            case"mm":
                return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case"h":
                return t ? "jedan sat" : "jednog sata";
            case"hh":
                return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case"dd":
                return i += 1 === e ? "dan" : "dana";
            case"MM":
                return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case"yy":
                return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }

    function ti(e) {
        return e > 1 && 5 > e && 1 !== ~~(e / 10)
    }

    function ni(e, t, n, i) {
        var a = e + " ";
        switch (n) {
            case"s":
                return t || i ? "pár sekund" : "pár sekundami";
            case"m":
                return t ? "minuta" : i ? "minutu" : "minutou";
            case"mm":
                return t || i ? a + (ti(e) ? "minuty" : "minut") : a + "minutami";
            case"h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";
            case"hh":
                return t || i ? a + (ti(e) ? "hodiny" : "hodin") : a + "hodinami";
            case"d":
                return t || i ? "den" : "dnem";
            case"dd":
                return t || i ? a + (ti(e) ? "dny" : "dní") : a + "dny";
            case"M":
                return t || i ? "měsíc" : "měsícem";
            case"MM":
                return t || i ? a + (ti(e) ? "měsíce" : "měsíců") : a + "měsíci";
            case"y":
                return t || i ? "rok" : "rokem";
            case"yy":
                return t || i ? a + (ti(e) ? "roky" : "let") : a + "lety"
        }
    }

    function ii(e, t, n, i) {
        var a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? a[n][0] : a[n][1]
    }

    function ai(e, t, n, i) {
        var a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? a[n][0] : a[n][1]
    }

    function si(e, t, n, i) {
        var a = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [e + " minuti", e + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [e + " tunni", e + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [e + " kuu", e + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [e + " aasta", e + " aastat"]
        };
        return t ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
    }

    function ri(e, t, n, i) {
        var a = "";
        switch (n) {
            case"s":
                return i ? "muutaman sekunnin" : "muutama sekunti";
            case"m":
                return i ? "minuutin" : "minuutti";
            case"mm":
                a = i ? "minuutin" : "minuuttia";
                break;
            case"h":
                return i ? "tunnin" : "tunti";
            case"hh":
                a = i ? "tunnin" : "tuntia";
                break;
            case"d":
                return i ? "päivän" : "päivä";
            case"dd":
                a = i ? "päivän" : "päivää";
                break;
            case"M":
                return i ? "kuukauden" : "kuukausi";
            case"MM":
                a = i ? "kuukauden" : "kuukautta";
                break;
            case"y":
                return i ? "vuoden" : "vuosi";
            case"yy":
                a = i ? "vuoden" : "vuotta"
        }
        return a = oi(e, i) + " " + a
    }

    function oi(e, t) {
        return 10 > e ? t ? sr[e] : ar[e] : e
    }

    function di(e, t, n) {
        var i = e + " ";
        switch (n) {
            case"m":
                return t ? "jedna minuta" : "jedne minute";
            case"mm":
                return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
            case"h":
                return t ? "jedan sat" : "jednog sata";
            case"hh":
                return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
            case"dd":
                return i += 1 === e ? "dan" : "dana";
            case"MM":
                return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
            case"yy":
                return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
        }
    }

    function li(e, t, n, i) {
        var a = e;
        switch (n) {
            case"s":
                return i || t ? "néhány másodperc" : "néhány másodperce";
            case"m":
                return "egy" + (i || t ? " perc" : " perce");
            case"mm":
                return a + (i || t ? " perc" : " perce");
            case"h":
                return "egy" + (i || t ? " óra" : " órája");
            case"hh":
                return a + (i || t ? " óra" : " órája");
            case"d":
                return "egy" + (i || t ? " nap" : " napja");
            case"dd":
                return a + (i || t ? " nap" : " napja");
            case"M":
                return "egy" + (i || t ? " hónap" : " hónapja");
            case"MM":
                return a + (i || t ? " hónap" : " hónapja");
            case"y":
                return "egy" + (i || t ? " év" : " éve");
            case"yy":
                return a + (i || t ? " év" : " éve")
        }
        return ""
    }

    function ui(e) {
        return (e ? "" : "[múlt] ") + "[" + hr[this.day()] + "] LT[-kor]"
    }

    function ci(e) {
        return e % 100 === 11 ? !0 : e % 10 === 1 ? !1 : !0
    }

    function pi(e, t, n, i) {
        var a = e + " ";
        switch (n) {
            case"s":
                return t || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case"m":
                return t ? "mínúta" : "mínútu";
            case"mm":
                return ci(e) ? a + (t || i ? "mínútur" : "mínútum") : t ? a + "mínúta" : a + "mínútu";
            case"hh":
                return ci(e) ? a + (t || i ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
            case"d":
                return t ? "dagur" : i ? "dag" : "degi";
            case"dd":
                return ci(e) ? t ? a + "dagar" : a + (i ? "daga" : "dögum") : t ? a + "dagur" : a + (i ? "dag" : "degi");
            case"M":
                return t ? "mánuður" : i ? "mánuð" : "mánuði";
            case"MM":
                return ci(e) ? t ? a + "mánuðir" : a + (i ? "mánuði" : "mánuðum") : t ? a + "mánuður" : a + (i ? "mánuð" : "mánuði");
            case"y":
                return t || i ? "ár" : "ári";
            case"yy":
                return ci(e) ? a + (t || i ? "ár" : "árum") : a + (t || i ? "ár" : "ári")
        }
    }

    function mi(e, t, n, i) {
        var a = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return t ? a[n][0] : a[n][1]
    }

    function _i(e) {
        var t = e.substr(0, e.indexOf(" "));
        return fi(t) ? "a " + e : "an " + e
    }

    function hi(e) {
        var t = e.substr(0, e.indexOf(" "));
        return fi(t) ? "viru " + e : "virun " + e
    }

    function fi(e) {
        if (e = parseInt(e, 10), isNaN(e))return !1;
        if (0 > e)return !0;
        if (10 > e)return e >= 4 && 7 >= e ? !0 : !1;
        if (100 > e) {
            var t = e % 10, n = e / 10;
            return fi(0 === t ? n : t)
        }
        if (1e4 > e) {
            for (; e >= 10;)e /= 10;
            return fi(e)
        }
        return e /= 1e3, fi(e)
    }

    function gi(e, t, n, i) {
        return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
    }

    function yi(e, t, n, i) {
        return t ? Mi(n)[0] : i ? Mi(n)[1] : Mi(n)[2]
    }

    function vi(e) {
        return e % 10 === 0 || e > 10 && 20 > e
    }

    function Mi(e) {
        return gr[e].split("_")
    }

    function wi(e, t, n, i) {
        var a = e + " ";
        return 1 === e ? a + yi(e, t, n[0], i) : t ? a + (vi(e) ? Mi(n)[1] : Mi(n)[0]) : i ? a + Mi(n)[1] : a + (vi(e) ? Mi(n)[1] : Mi(n)[2])
    }

    function bi(e, t, n) {
        return n ? t % 10 === 1 && 11 !== t ? e[2] : e[3] : t % 10 === 1 && 11 !== t ? e[0] : e[1]
    }

    function Li(e, t, n) {
        return e + " " + bi(yr[n], e, t)
    }

    function ki(e, t, n) {
        return bi(yr[n], e, t)
    }

    function Yi(e, t) {
        return t ? "dažas sekundes" : "dažām sekundēm"
    }

    function Di(e, t, n, i) {
        var a = "";
        if (t)switch (n) {
            case"s":
                a = "काही सेकंद";
                break;
            case"m":
                a = "एक मिनिट";
                break;
            case"mm":
                a = "%d मिनिटे";
                break;
            case"h":
                a = "एक तास";
                break;
            case"hh":
                a = "%d तास";
                break;
            case"d":
                a = "एक दिवस";
                break;
            case"dd":
                a = "%d दिवस";
                break;
            case"M":
                a = "एक महिना";
                break;
            case"MM":
                a = "%d महिने";
                break;
            case"y":
                a = "एक वर्ष";
                break;
            case"yy":
                a = "%d वर्षे"
        } else switch (n) {
            case"s":
                a = "काही सेकंदां";
                break;
            case"m":
                a = "एका मिनिटा";
                break;
            case"mm":
                a = "%d मिनिटां";
                break;
            case"h":
                a = "एका तासा";
                break;
            case"hh":
                a = "%d तासां";
                break;
            case"d":
                a = "एका दिवसा";
                break;
            case"dd":
                a = "%d दिवसां";
                break;
            case"M":
                a = "एका महिन्या";
                break;
            case"MM":
                a = "%d महिन्यां";
                break;
            case"y":
                a = "एका वर्षा";
                break;
            case"yy":
                a = "%d वर्षां"
        }
        return a.replace(/%d/i, e)
    }

    function Ti(e) {
        return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
    }

    function Si(e, t, n) {
        var i = e + " ";
        switch (n) {
            case"m":
                return t ? "minuta" : "minutę";
            case"mm":
                return i + (Ti(e) ? "minuty" : "minut");
            case"h":
                return t ? "godzina" : "godzinę";
            case"hh":
                return i + (Ti(e) ? "godziny" : "godzin");
            case"MM":
                return i + (Ti(e) ? "miesiące" : "miesięcy");
            case"yy":
                return i + (Ti(e) ? "lata" : "lat")
        }
    }

    function xi(e, t, n) {
        var i = {mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, a = " ";
        return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (a = " de "), e + a + i[n]
    }

    function Hi(e, t) {
        var n = e.split("_");
        return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function ji(e, t, n) {
        var i = {
            mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        };
        return "m" === n ? t ? "минута" : "минуту" : e + " " + Hi(i[n], +e)
    }

    function Ci(e) {
        return e > 1 && 5 > e
    }

    function Pi(e, t, n, i) {
        var a = e + " ";
        switch (n) {
            case"s":
                return t || i ? "pár sekúnd" : "pár sekundami";
            case"m":
                return t ? "minúta" : i ? "minútu" : "minútou";
            case"mm":
                return t || i ? a + (Ci(e) ? "minúty" : "minút") : a + "minútami";
            case"h":
                return t ? "hodina" : i ? "hodinu" : "hodinou";
            case"hh":
                return t || i ? a + (Ci(e) ? "hodiny" : "hodín") : a + "hodinami";
            case"d":
                return t || i ? "deň" : "dňom";
            case"dd":
                return t || i ? a + (Ci(e) ? "dni" : "dní") : a + "dňami";
            case"M":
                return t || i ? "mesiac" : "mesiacom";
            case"MM":
                return t || i ? a + (Ci(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
            case"y":
                return t || i ? "rok" : "rokom";
            case"yy":
                return t || i ? a + (Ci(e) ? "roky" : "rokov") : a + "rokmi"
        }
    }

    function Ei(e, t, n, i) {
        var a = e + " ";
        switch (n) {
            case"s":
                return t || i ? "nekaj sekund" : "nekaj sekundami";
            case"m":
                return t ? "ena minuta" : "eno minuto";
            case"mm":
                return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || i ? "minuti" : "minutama" : 5 > e ? t || i ? "minute" : "minutami" : t || i ? "minut" : "minutami";
            case"h":
                return t ? "ena ura" : "eno uro";
            case"hh":
                return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || i ? "uri" : "urama" : 5 > e ? t || i ? "ure" : "urami" : t || i ? "ur" : "urami";
            case"d":
                return t || i ? "en dan" : "enim dnem";
            case"dd":
                return a += 1 === e ? t || i ? "dan" : "dnem" : 2 === e ? t || i ? "dni" : "dnevoma" : t || i ? "dni" : "dnevi";
            case"M":
                return t || i ? "en mesec" : "enim mesecem";
            case"MM":
                return a += 1 === e ? t || i ? "mesec" : "mesecem" : 2 === e ? t || i ? "meseca" : "mesecema" : 5 > e ? t || i ? "mesece" : "meseci" : t || i ? "mesecev" : "meseci";
            case"y":
                return t || i ? "eno leto" : "enim letom";
            case"yy":
                return a += 1 === e ? t || i ? "leto" : "letom" : 2 === e ? t || i ? "leti" : "letoma" : 5 > e ? t || i ? "leta" : "leti" : t || i ? "let" : "leti"
        }
    }

    function Ai(e) {
        var t = e;
        return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
    }

    function Fi(e) {
        var t = e;
        return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
    }

    function Oi(e, t, n, i) {
        var a = Wi(e);
        switch (n) {
            case"mm":
                return a + " tup";
            case"hh":
                return a + " rep";
            case"dd":
                return a + " jaj";
            case"MM":
                return a + " jar";
            case"yy":
                return a + " DIS"
        }
    }

    function Wi(e) {
        var t = Math.floor(e % 1e3 / 100), n = Math.floor(e % 100 / 10), i = e % 10, a = "";
        return t > 0 && (a += Or[t] + "vatlh"), n > 0 && (a += ("" !== a ? " " : "") + Or[n] + "maH"), i > 0 && (a += ("" !== a ? " " : "") + Or[i]), "" === a ? "pagh" : a
    }

    function Ii(e, t, n, i) {
        var a = {
            s: ["viensas secunds", "'iensas secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [e + " míuts", "" + e + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [e + " þoras", "" + e + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + " ziuas", "" + e + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [e + " mesen", "" + e + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [e + " ars", "" + e + " ars"]
        };
        return i ? a[n][0] : t ? a[n][0] : a[n][1]
    }

    function zi(e, t) {
        var n = e.split("_");
        return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
    }

    function $i(e, t, n) {
        var i = {
            mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: t ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
        };
        return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + zi(i[n], +e)
    }

    function Ri(e, t) {
        var n = {
            nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
            accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
            genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
        }, i = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
        return n[i][e.day()]
    }

    function Ni(e) {
        return function () {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
        }
    }

    var Bi, Ui, qi = e.momentProperties = [], Vi = !1, Gi = {}, Ji = {}, Xi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Zi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Qi = {}, Ki = {}, ea = /\d/, ta = /\d\d/, na = /\d{3}/, ia = /\d{4}/, aa = /[+-]?\d{6}/, sa = /\d\d?/, ra = /\d\d\d\d?/, oa = /\d\d\d\d\d\d?/, da = /\d{1,3}/, la = /\d{1,4}/, ua = /[+-]?\d{1,6}/, ca = /\d+/, pa = /[+-]?\d+/, ma = /Z|[+-]\d\d:?\d\d/gi, _a = /Z|[+-]\d\d(?::?\d\d)?/gi, ha = /[+-]?\d+(\.\d{1,3})?/, fa = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ga = {}, ya = {}, va = 0, Ma = 1, wa = 2, ba = 3, La = 4, ka = 5, Ya = 6, Da = 7, Ta = 8;
    A("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), A("MMM", 0, 0, function (e) {
        return this.localeData().monthsShort(this, e)
    }), A("MMMM", 0, 0, function (e) {
        return this.localeData().months(this, e)
    }), D("month", "M"), z("M", sa), z("MM", sa, ta), z("MMM", function (e, t) {
        return t.monthsShortRegex(e)
    }), z("MMMM", function (e, t) {
        return t.monthsRegex(e)
    }), B(["M", "MM"], function (e, t) {
        t[Ma] = g(e) - 1
    }), B(["MMM", "MMMM"], function (e, t, n, i) {
        var a = n._locale.monthsParse(e, i, n._strict);
        null != a ? t[Ma] = a : l(n).invalidMonth = e
    });
    var Sa = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/, xa = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Ha = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ja = fa, Ca = fa, Pa = {};
    e.suppressDeprecationWarnings = !1;
    var Ea = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Aa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/, Fa = /Z|[+-]\d\d(?::?\d\d)?/, Oa = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Wa = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Ia = /^\/?Date\((\-?\d+)/i;
    e.createFromInputFallback = se("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), A("Y", 0, 0, function () {
        var e = this.year();
        return 9999 >= e ? "" + e : "+" + e
    }), A(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), A(0, ["YYYY", 4], 0, "year"), A(0, ["YYYYY", 5], 0, "year"), A(0, ["YYYYYY", 6, !0], 0, "year"), D("year", "y"), z("Y", pa), z("YY", sa, ta), z("YYYY", la, ia), z("YYYYY", ua, aa), z("YYYYYY", ua, aa), B(["YYYYY", "YYYYYY"], va), B("YYYY", function (t, n) {
        n[va] = 2 === t.length ? e.parseTwoDigitYear(t) : g(t)
    }), B("YY", function (t, n) {
        n[va] = e.parseTwoDigitYear(t)
    }), B("Y", function (e, t) {
        t[va] = parseInt(e, 10)
    }), e.parseTwoDigitYear = function (e) {
        return g(e) + (g(e) > 68 ? 1900 : 2e3)
    };
    var za = H("FullYear", !1);
    e.ISO_8601 = function () {
    };
    var $a = se("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
        var e = He.apply(null, arguments);
        return this.isValid() && e.isValid() ? this > e ? this : e : c()
    }), Ra = se("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
        var e = He.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : c()
    }), Na = function () {
        return Date.now ? Date.now() : +new Date
    };
    Fe("Z", ":"), Fe("ZZ", ""), z("Z", _a), z("ZZ", _a), B(["Z", "ZZ"], function (e, t, n) {
        n._useUTC = !0, n._tzm = Oe(_a, e)
    });
    var Ba = /([\+\-]|\d\d)/gi;
    e.updateOffset = function () {
    };
    var Ua = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, qa = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Ze.fn = Ee.prototype;
    var Va = tt(1, "add"), Ga = tt(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var Ja = se("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    A(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), A(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Et("gggg", "weekYear"), Et("ggggg", "weekYear"), Et("GGGG", "isoWeekYear"), Et("GGGGG", "isoWeekYear"), D("weekYear", "gg"), D("isoWeekYear", "GG"), z("G", pa), z("g", pa), z("GG", sa, ta), z("gg", sa, ta), z("GGGG", la, ia), z("gggg", la, ia), z("GGGGG", ua, aa), z("ggggg", ua, aa), U(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
        t[i.substr(0, 2)] = g(e)
    }), U(["gg", "GG"], function (t, n, i, a) {
        n[a] = e.parseTwoDigitYear(t)
    }), A("Q", 0, "Qo", "quarter"), D("quarter", "Q"), z("Q", ea), B("Q", function (e, t) {
        t[Ma] = 3 * (g(e) - 1)
    }), A("w", ["ww", 2], "wo", "week"), A("W", ["WW", 2], "Wo", "isoWeek"), D("week", "w"), D("isoWeek", "W"), z("w", sa), z("ww", sa, ta), z("W", sa), z("WW", sa, ta), U(["w", "ww", "W", "WW"], function (e, t, n, i) {
        t[i.substr(0, 1)] = g(e)
    });
    var Xa = {dow: 0, doy: 6};
    A("D", ["DD", 2], "Do", "date"), D("date", "D"), z("D", sa), z("DD", sa, ta), z("Do", function (e, t) {
        return e ? t._ordinalParse : t._ordinalParseLenient
    }), B(["D", "DD"], wa), B("Do", function (e, t) {
        t[wa] = g(e.match(sa)[0], 10)
    });
    var Za = H("Date", !0);
    A("d", 0, "do", "day"), A("dd", 0, 0, function (e) {
        return this.localeData().weekdaysMin(this, e)
    }), A("ddd", 0, 0, function (e) {
        return this.localeData().weekdaysShort(this, e)
    }), A("dddd", 0, 0, function (e) {
        return this.localeData().weekdays(this, e)
    }), A("e", 0, 0, "weekday"), A("E", 0, 0, "isoWeekday"), D("day", "d"), D("weekday", "e"), D("isoWeekday", "E"), z("d", sa), z("e", sa), z("E", sa), z("dd", fa), z("ddd", fa), z("dddd", fa), U(["dd", "ddd", "dddd"], function (e, t, n, i) {
        var a = n._locale.weekdaysParse(e, i, n._strict);
        null != a ? t.d = a : l(n).invalidWeekday = e
    }), U(["d", "e", "E"], function (e, t, n, i) {
        t[i] = g(e)
    });
    var Qa = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ka = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), es = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), D("dayOfYear", "DDD"), z("DDD", da), z("DDDD", na), B(["DDD", "DDDD"], function (e, t, n) {
        n._dayOfYear = g(e)
    }), A("H", ["HH", 2], 0, "hour"), A("h", ["hh", 2], 0, nn), A("hmm", 0, 0, function () {
        return "" + nn.apply(this) + E(this.minutes(), 2)
    }), A("hmmss", 0, 0, function () {
        return "" + nn.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
    }), A("Hmm", 0, 0, function () {
        return "" + this.hours() + E(this.minutes(), 2)
    }), A("Hmmss", 0, 0, function () {
        return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
    }), an("a", !0), an("A", !1), D("hour", "h"), z("a", sn), z("A", sn), z("H", sa), z("h", sa), z("HH", sa, ta), z("hh", sa, ta), z("hmm", ra), z("hmmss", oa), z("Hmm", ra), z("Hmmss", oa), B(["H", "HH"], ba), B(["a", "A"], function (e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
    }), B(["h", "hh"], function (e, t, n) {
        t[ba] = g(e), l(n).bigHour = !0
    }), B("hmm", function (e, t, n) {
        var i = e.length - 2;
        t[ba] = g(e.substr(0, i)), t[La] = g(e.substr(i)), l(n).bigHour = !0
    }), B("hmmss", function (e, t, n) {
        var i = e.length - 4, a = e.length - 2;
        t[ba] = g(e.substr(0, i)), t[La] = g(e.substr(i, 2)), t[ka] = g(e.substr(a)), l(n).bigHour = !0
    }), B("Hmm", function (e, t, n) {
        var i = e.length - 2;
        t[ba] = g(e.substr(0, i)), t[La] = g(e.substr(i))
    }), B("Hmmss", function (e, t, n) {
        var i = e.length - 4, a = e.length - 2;
        t[ba] = g(e.substr(0, i)), t[La] = g(e.substr(i, 2)), t[ka] = g(e.substr(a))
    });
    var ts = /[ap]\.?m?\.?/i, ns = H("Hours", !0);
    A("m", ["mm", 2], 0, "minute"), D("minute", "m"), z("m", sa), z("mm", sa, ta), B(["m", "mm"], La);
    var is = H("Minutes", !1);
    A("s", ["ss", 2], 0, "second"), D("second", "s"), z("s", sa), z("ss", sa, ta), B(["s", "ss"], ka);
    var as = H("Seconds", !1);
    A("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), A(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), A(0, ["SSS", 3], 0, "millisecond"), A(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), A(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), A(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), A(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), A(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), A(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), D("millisecond", "ms"), z("S", da, ea), z("SS", da, ta), z("SSS", da, na);
    var ss;
    for (ss = "SSSS"; ss.length <= 9; ss += "S")z(ss, ca);
    for (ss = "S"; ss.length <= 9; ss += "S")B(ss, dn);
    var rs = H("Milliseconds", !1);
    A("z", 0, 0, "zoneAbbr"), A("zz", 0, 0, "zoneName");
    var os = _.prototype;
    os.add = Va, os.calendar = it, os.clone = at, os.diff = ct, os.endOf = Lt, os.format = ht, os.from = ft, os.fromNow = gt, os.to = yt, os.toNow = vt, os.get = P, os.invalidAt = Ct, os.isAfter = st, os.isBefore = rt, os.isBetween = ot, os.isSame = dt, os.isSameOrAfter = lt, os.isSameOrBefore = ut, os.isValid = Ht, os.lang = Ja, os.locale = Mt, os.localeData = wt, os.max = Ra, os.min = $a, os.parsingFlags = jt, os.set = P, os.startOf = bt, os.subtract = Ga, os.toArray = Tt, os.toObject = St, os.toDate = Dt, os.toISOString = _t, os.toJSON = xt, os.toString = mt, os.unix = Yt, os.valueOf = kt, os.creationData = Pt, os.year = za, os.isLeapYear = me, os.weekYear = At, os.isoWeekYear = Ft, os.quarter = os.quarters = $t, os.month = Q, os.daysInMonth = K, os.week = os.weeks = Ut, os.isoWeek = os.isoWeeks = qt, os.weeksInYear = Wt, os.isoWeeksInYear = Ot, os.date = Za, os.day = os.days = Qt, os.weekday = Kt, os.isoWeekday = en, os.dayOfYear = tn, os.hour = os.hours = ns, os.minute = os.minutes = is, os.second = os.seconds = as, os.millisecond = os.milliseconds = rs, os.utcOffset = ze, os.utc = Re, os.local = Ne, os.parseZone = Be, os.hasAlignedHourOffset = Ue, os.isDST = qe, os.isDSTShifted = Ve, os.isLocal = Ge, os.isUtcOffset = Je, os.isUtc = Xe, os.isUTC = Xe, os.zoneAbbr = ln, os.zoneName = un, os.dates = se("dates accessor is deprecated. Use date instead.", Za), os.months = se("months accessor is deprecated. Use month instead", Q), os.years = se("years accessor is deprecated. Use year instead", za), os.zone = se("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", $e);
    var ds = os, ls = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, us = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, cs = "Invalid date", ps = "%d", ms = /\d{1,2}/, _s = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, hs = v.prototype;
    hs._calendar = ls, hs.calendar = mn, hs._longDateFormat = us, hs.longDateFormat = _n, hs._invalidDate = cs, hs.invalidDate = hn, hs._ordinal = ps, hs.ordinal = fn, hs._ordinalParse = ms, hs.preparse = gn, hs.postformat = gn, hs._relativeTime = _s, hs.relativeTime = yn, hs.pastFuture = vn, hs.set = Mn, hs.months = G, hs._months = xa, hs.monthsShort = J, hs._monthsShort = Ha, hs.monthsParse = X, hs._monthsRegex = Ca, hs.monthsRegex = te, hs._monthsShortRegex = ja, hs.monthsShortRegex = ee, hs.week = Rt, hs._week = Xa, hs.firstDayOfYear = Bt, hs.firstDayOfWeek = Nt, hs.weekdays = Gt, hs._weekdays = Qa, hs.weekdaysMin = Xt, hs._weekdaysMin = es, hs.weekdaysShort = Jt, hs._weekdaysShort = Ka, hs.weekdaysParse = Zt, hs.isPM = rn, hs._meridiemParse = ts, hs.meridiem = on, L("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
            var t = e % 10, n = 1 === g(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), e.lang = se("moment.lang is deprecated. Use moment.locale instead.", L), e.langData = se("moment.langData is deprecated. Use moment.localeData instead.", Y);
    var fs = Math.abs, gs = Wn("ms"), ys = Wn("s"), vs = Wn("m"), Ms = Wn("h"), ws = Wn("d"), bs = Wn("w"), Ls = Wn("M"), ks = Wn("y"), Ys = zn("milliseconds"), Ds = zn("seconds"), Ts = zn("minutes"), Ss = zn("hours"), xs = zn("days"), Hs = zn("months"), js = zn("years"), Cs = Math.round, Ps = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, Es = Math.abs, As = Ee.prototype;
    As.abs = Sn, As.add = Hn, As.subtract = jn, As.as = Fn, As.asMilliseconds = gs, As.asSeconds = ys, As.asMinutes = vs, As.asHours = Ms, As.asDays = ws, As.asWeeks = bs, As.asMonths = Ls, As.asYears = ks, As.valueOf = On, As._bubble = Pn, As.get = In, As.milliseconds = Ys, As.seconds = Ds, As.minutes = Ts, As.hours = Ss, As.days = xs, As.weeks = $n, As.months = Hs, As.years = js, As.humanize = Un, As.toISOString = qn, As.toString = qn, As.toJSON = qn, As.locale = Mt, As.localeData = wt, As.toIsoString = se("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", qn), As.lang = Ja, A("X", 0, 0, "unix"), A("x", 0, 0, "valueOf"), z("x", pa), z("X", ha), B("X", function (e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }), B("x", function (e, t, n) {
        n._d = new Date(g(e))
    }), e.version = "2.11.1", t(He), e.fn = ds, e.min = Ce, e.max = Pe, e.now = Na, e.utc = o, e.unix = cn, e.months = Ln, e.isDate = i, e.locale = L, e.invalid = c, e.duration = Ze, e.isMoment = h, e.weekdays = Yn, e.parseZone = pn, e.localeData = Y, e.isDuration = Ae, e.monthsShort = kn, e.weekdaysMin = Tn, e.defineLocale = k, e.weekdaysShort = Dn, e.normalizeUnits = T, e.relativeTimeThreshold = Bn, e.prototype = ds;
    var Fs = e, Os = (Fs.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function (e) {
            return /^nm$/i.test(e)
        },
        meridiem: function (e, t, n) {
            return 12 > e ? n ? "vm" : "VM" : n ? "nm" : "NM"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {dow: 6, doy: 12}
    }), {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}), Ws = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    }, Is = (Fs.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
            return "م" === e
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "ص" : "م"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        preparse: function (e) {
            return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                return Ws[e]
            }).replace(/،/g, ",")
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Os[e]
            }).replace(/,/g, "،")
        },
        week: {dow: 6, doy: 12}
    }), Fs.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {dow: 1, doy: 4}
    }), {1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠"}), zs = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    }, $s = function (e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
    }, Rs = {
        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    }, Ns = function (e) {
        return function (t, n, i, a) {
            var s = $s(t), r = Rs[e][$s(t)];
            return 2 === s && (r = r[n ? 0 : 1]), r.replace(/%d/i, t)
        }
    }, Bs = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"], Us = (Fs.defineLocale("ar", {
        months: Bs,
        monthsShort: Bs,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function (e) {
            return "م" === e
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "ص" : "م"
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: Ns("s"),
            m: Ns("m"),
            mm: Ns("m"),
            h: Ns("h"),
            hh: Ns("h"),
            d: Ns("d"),
            dd: Ns("d"),
            M: Ns("M"),
            MM: Ns("M"),
            y: Ns("y"),
            yy: Ns("y")
        },
        preparse: function (e) {
            return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                return zs[e]
            }).replace(/،/g, ",")
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Is[e]
            }).replace(/,/g, "،")
        },
        week: {dow: 6, doy: 12}
    }), {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
    }), qs = (Fs.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birneçə saniyyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function (e) {
            return /^(gündüz|axşam)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "gecə" : 12 > e ? "səhər" : 17 > e ? "gündüz" : "axşam"
        },
        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function (e) {
            if (0 === e)return e + "-ıncı";
            var t = e % 10, n = e % 100 - t, i = e >= 100 ? 100 : null;
            return e + (Us[t] || Us[n] || Us[i])
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("be", {
        months: {
            format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
            standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
            format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
            standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function () {
                return "[У] dddd [ў] LT"
            }, lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return "[У мінулую] dddd [ў] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[У мінулы] dddd [ў] LT"
                }
            }, sameElse: "L"
        },
        relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: Gn,
            mm: Gn,
            h: Gn,
            hh: Gn,
            d: "дзень",
            dd: Gn,
            M: "месяц",
            MM: Gn,
            y: "год",
            yy: Gn
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function (e) {
            return /^(дня|вечара)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "ночы" : 12 > e ? "раніцы" : 17 > e ? "дня" : "вечара"
        },
        ordinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (e, t) {
            switch (t) {
                case"M":
                case"d":
                case"DDD":
                case"w":
                case"W":
                    return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                case"D":
                    return e + "-га";
                default:
                    return e
            }
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[В изминалата] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[В изминалия] dddd [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дни",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
            var t = e % 10, n = e % 100;
            return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
        },
        week: {dow: 1, doy: 7}
    }), {1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০"}), Vs = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
    }, Gs = (Fs.defineLocale("bn", {
        months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি".split("_"),
        weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"),
        longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর"
        },
        preparse: function (e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                return Vs[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return qs[e]
            })
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        isPM: function (e) {
            return /^(দুপুর|বিকাল|রাত)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "রাত" : 10 > e ? "সকাল" : 17 > e ? "দুপুর" : 20 > e ? "বিকাল" : "রাত"
        },
        week: {dow: 0, doy: 6}
    }), {1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠"}), Js = {
        "༡": "1",
        "༢": "2",
        "༣": "3",
        "༤": "4",
        "༥": "5",
        "༦": "6",
        "༧": "7",
        "༨": "8",
        "༩": "9",
        "༠": "0"
    }, Xs = (Fs.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ"
        },
        preparse: function (e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                return Js[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Gs[e]
            })
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        isPM: function (e) {
            return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "མཚན་མོ" : 10 > e ? "ཞོགས་ཀས" : 17 > e ? "ཉིན་གུང" : 20 > e ? "དགོང་དག" : "མཚན་མོ"
        },
        week: {dow: 0, doy: 6}
    }), Fs.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            m: "ur vunutenn",
            mm: Jn,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: Jn,
            M: "ur miz",
            MM: Jn,
            y: "ur bloaz",
            yy: Xn
        },
        ordinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function (e) {
            var t = 1 === e ? "añ" : "vet";
            return e + t
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            }, lastDay: "[jučer u] LT", lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                }
            }, sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: ei,
            mm: ei,
            h: ei,
            hh: ei,
            d: "dan",
            dd: ei,
            M: "mjesec",
            MM: ei,
            y: "godinu",
            yy: ei
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("ca", {
        months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: function () {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            }, nextDay: function () {
                return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            }, nextWeek: function () {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            }, lastDay: function () {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            }, lastWeek: function () {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            }, sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "fa %s",
            s: "uns segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function (e, t) {
            var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
            return ("w" === t || "W" === t) && (n = "a"), e + n
        },
        week: {dow: 1, doy: 4}
    }), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")), Zs = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), Qs = (Fs.defineLocale("cs", {
        months: Xs,
        monthsShort: Zs,
        monthsParse: function (e, t) {
            var n, i = [];
            for (n = 0; 12 > n; n++)i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
            return i
        }(Xs, Zs),
        shortMonthsParse: function (e) {
            var t, n = [];
            for (t = 0; 12 > t; t++)n[t] = new RegExp("^" + e[t] + "$", "i");
            return n
        }(Zs),
        longMonthsParse: function (e) {
            var t, n = [];
            for (t = 0; 12 > t; t++)n[t] = new RegExp("^" + e[t] + "$", "i");
            return n
        }(Xs),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[v neděli v] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [v] LT";
                    case 3:
                        return "[ve středu v] LT";
                    case 4:
                        return "[ve čtvrtek v] LT";
                    case 5:
                        return "[v pátek v] LT";
                    case 6:
                        return "[v sobotu v] LT"
                }
            }, lastDay: "[včera v] LT", lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[minulou neděli v] LT";
                    case 1:
                    case 2:
                        return "[minulé] dddd [v] LT";
                    case 3:
                        return "[minulou středu v] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [v] LT";
                    case 6:
                        return "[minulou sobotu v] LT"
                }
            }, sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "před %s",
            s: ni,
            m: ni,
            mm: ni,
            h: ni,
            hh: ni,
            d: ni,
            dd: ni,
            M: ni,
            MM: ni,
            y: ni,
            yy: ni
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L"
        },
        relativeTime: {
            future: function (e) {
                var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                return e + t
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул"
        },
        ordinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        },
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function (e) {
            var t = e, n = "", i = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
            return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = i[t]), e + n
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[I dag kl.] LT",
            nextDay: "[I morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[I går kl.] LT",
            lastWeek: "[sidste] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: ii,
            mm: "%d Minuten",
            h: ii,
            hh: "%d Stunden",
            d: ii,
            dd: ii,
            M: ii,
            MM: ii,
            y: ii,
            yy: ii
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: ai,
            mm: "%d Minuten",
            h: ai,
            hh: "%d Stunden",
            d: ai,
            dd: ai,
            M: ai,
            MM: ai,
            y: ai,
            yy: ai
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]), Ks = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"], er = (Fs.defineLocale("dv", {
        months: Qs,
        monthsShort: Qs,
        weekdays: Ks,
        weekdaysShort: Ks,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function (e) {
            return "" === e
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "މކ" : "މފ"
        },
        calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d"
        },
        preparse: function (e) {
            return e.replace(/،/g, ",")
        },
        postformat: function (e) {
            return e.replace(/,/g, "،")
        },
        week: {dow: 7, doy: 12}
    }), Fs.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function (e, t) {
            return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function (e, t, n) {
            return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
        },
        isPM: function (e) {
            return "μ" === (e + "").toLowerCase()[0]
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 6:
                        return "[το προηγούμενο] dddd [{}] LT";
                    default:
                        return "[την προηγούμενη] dddd [{}] LT"
                }
            },
            sameElse: "L"
        },
        calendar: function (e, t) {
            var n = this._calendarEl[e], i = t && t.hours();
            return x(n) && (n = n.apply(t)), n.replace("{}", i % 12 === 1 ? "στη" : "στις")
        },
        relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
        },
        ordinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "D MMMM, YYYY",
            LLL: "D MMMM, YYYY h:mm A",
            LLLL: "dddd, D MMMM, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        }
    }), Fs.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function (e) {
            var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
            return e + n
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
        weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-an de] MMMM, YYYY",
            LLL: "D[-an de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (e) {
            return "p" === e.charAt(0).toLowerCase()
        },
        meridiem: function (e, t, n) {
            return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
        },
        calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "je %s",
            past: "antaŭ %s",
            s: "sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        },
        ordinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {dow: 1, doy: 7}
    }), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")), tr = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), nr = (Fs.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function (e, t) {
            return /-MMM-/.test(t) ? tr[e.month()] : er[e.month()]
        },
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            }, nextDay: function () {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            }, nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            }, lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            }, lastWeek: function () {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            }, sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: si,
            m: si,
            mm: si,
            h: si,
            hh: si,
            d: si,
            dd: "%d päeva",
            M: si,
            MM: si,
            y: si,
            yy: si
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), {1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰"}), ir = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0"
    }, ar = (Fs.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (e) {
            return /بعد از ظهر/.test(e)
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "قبل از ظهر" : "بعد از ظهر"
        },
        calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چندین ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
        },
        preparse: function (e) {
            return e.replace(/[۰-۹]/g, function (e) {
                return ir[e]
            }).replace(/،/g, ",")
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return nr[e]
            }).replace(/,/g, "،")
        },
        ordinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {dow: 6, doy: 12}
    }), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")), sr = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", ar[7], ar[8], ar[9]], rr = (Fs.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: ri,
            m: ri,
            mm: ri,
            h: ri,
            hh: ri,
            d: ri,
            dd: ri,
            M: ri,
            MM: ri,
            y: ri,
            yy: ri
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            m: "ein minutt",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaði",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e) {
            return e + (1 === e ? "er" : "e")
        }
    }), Fs.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function (e) {
            return e + (1 === e ? "er" : "e")
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal: function (e) {
            return e + (1 === e ? "er" : "")
        },
        week: {dow: 1, doy: 4}
    }), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")), or = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), dr = (Fs.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function (e, t) {
            return /-MMM-/.test(t) ? or[e.month()] : rr[e.month()]
        },
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
    }), ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]), lr = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], ur = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], cr = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], pr = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"], mr = (Fs.defineLocale("gd", {
        months: dr,
        monthsShort: lr,
        monthsParseExact: !0,
        weekdays: ur,
        weekdaysShort: cr,
        weekdaysMin: pr,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna"
        },
        ordinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (e) {
            var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
            return e + t
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("gl", {
        months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
        monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
        weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
        weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: function () {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            }, nextDay: function () {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            }, nextWeek: function () {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
            }, lastDay: function () {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
            }, lastWeek: function () {
                return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
            }, sameElse: "L"
        },
        relativeTime: {
            future: function (e) {
                return "uns segundos" === e ? "nuns segundos" : "en " + e
            },
            past: "hai %s",
            s: "uns segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function (e) {
                return 2 === e ? "שעתיים" : e + " שעות"
            },
            d: "יום",
            dd: function (e) {
                return 2 === e ? "יומיים" : e + " ימים"
            },
            M: "חודש",
            MM: function (e) {
                return 2 === e ? "חודשיים" : e + " חודשים"
            },
            y: "שנה",
            yy: function (e) {
                return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
            }
        }
    }), {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}), _r = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    }, hr = (Fs.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
        },
        preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return _r[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return mr[e]
            })
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "रात" === t ? 4 > e ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "रात" : 10 > e ? "सुबह" : 17 > e ? "दोपहर" : 20 > e ? "शाम" : "रात"
        },
        week: {dow: 0, doy: 6}
    }), Fs.defineLocale("hr", {
        months: {
            format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            }, lastDay: "[jučer u] LT", lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return "[prošlu] dddd [u] LT";
                    case 6:
                        return "[prošle] [subote] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prošli] dddd [u] LT"
                }
            }, sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: di,
            mm: di,
            h: di,
            hh: di,
            d: "dan",
            dd: di,
            M: "mjesec",
            MM: di,
            y: "godinu",
            yy: di
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")), fr = (Fs.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function (e) {
            return "u" === e.charAt(1).toLowerCase()
        },
        meridiem: function (e, t, n) {
            return 12 > e ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
        },
        calendar: {
            sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () {
                return ui.call(this, !0)
            }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () {
                return ui.call(this, !1)
            }, sameElse: "L"
        },
        relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: li,
            m: li,
            mm: li,
            h: li,
            hh: li,
            d: li,
            dd: li,
            M: li,
            MM: li,
            y: li,
            yy: li
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("hy-am", {
        months: {
            format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
            standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
            sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () {
                return "dddd [օրը ժամը] LT"
            }, lastWeek: function () {
                return "[անցած] dddd [օրը ժամը] LT"
            }, sameElse: "L"
        },
        relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e)
        },
        meridiem: function (e) {
            return 4 > e ? "գիշերվա" : 12 > e ? "առավոտվա" : 17 > e ? "ցերեկվա" : "երեկոյան"
        },
        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (e, t) {
            switch (t) {
                case"DDD":
                case"w":
                case"W":
                case"DDDo":
                    return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                    return e
            }
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: pi,
            m: pi,
            mm: pi,
            h: "klukkustund",
            hh: pi,
            d: pi,
            dd: pi,
            M: pi,
            MM: pi,
            y: pi,
            yy: pi
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
        weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
        weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[la scorsa] dddd [alle] LT";
                    default:
                        return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function (e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
            },
            past: "%s fa",
            s: "alcuni secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
            LT: "Ah時m分",
            LTS: "Ah時m分s秒",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah時m分",
            LLLL: "YYYY年M月D日Ah時m分 dddd"
        },
        meridiemParse: /午前|午後/i,
        isPM: function (e) {
            return "午後" === e
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "午前" : "午後"
        },
        calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: "[来週]dddd LT",
            lastDay: "[昨日] LT",
            lastWeek: "[前週]dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
        }
    }), Fs.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 11 > e ? "enjing" : 15 > e ? "siyang" : 19 > e ? "sonten" : "ndalu"
        },
        calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("ka", {
        months: {
            standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
            format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
            standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
            format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
        },
        relativeTime: {
            future: function (e) {
                return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
            },
            past: function (e) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
            },
            s: "რამდენიმე წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
        },
        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function (e) {
            return 0 === e ? e : 1 === e ? e + "-ლი" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
        },
        week: {dow: 1, doy: 7}
    }), {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
    }), gr = (Fs.defineLocale("kk", {
        months: "Қаңтар_Ақпан_Наурыз_Сәуір_Мамыр_Маусым_Шілде_Тамыз_Қыркүйек_Қазан_Қараша_Желтоқсан".split("_"),
        monthsShort: "Қаң_Ақп_Нау_Сәу_Мам_Мау_Шіл_Там_Қыр_Қаз_Қар_Жел".split("_"),
        weekdays: "Жексенбі_Дүйсенбі_Сейсенбі_Сәрсенбі_Бейсенбі_Жұма_Сенбі".split("_"),
        weekdaysShort: "Жек_Дүй_Сей_Сәр_Бей_Жұм_Сен".split("_"),
        weekdaysMin: "Жк_Дй_Сй_Ср_Бй_Жм_Сн".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл"
        },
        ordinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function (e) {
            var t = e % 10, n = e >= 100 ? 100 : null;
            return e + (fr[e] || fr[t] || fr[n])
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ"
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
            LT: "A h시 m분",
            LTS: "A h시 m분 s초",
            L: "YYYY.MM.DD",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h시 m분",
            LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
        },
        calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇초",
            ss: "%d초",
            m: "일분",
            mm: "%d분",
            h: "한시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한달",
            MM: "%d달",
            y: "일년",
            yy: "%d년"
        },
        ordinalParse: /\d{1,2}일/,
        ordinal: "%d일",
        meridiemParse: /오전|오후/,
        isPM: function (e) {
            return "오후" === e
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "오전" : "오후"
        }
    }), Fs.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 2:
                    case 4:
                        return "[Leschten] dddd [um] LT";
                    default:
                        return "[Leschte] dddd [um] LT"
                }
            }
        },
        relativeTime: {
            future: _i,
            past: hi,
            s: "e puer Sekonnen",
            m: mi,
            mm: "%d Minutten",
            h: mi,
            hh: "%d Stonnen",
            d: mi,
            dd: "%d Deeg",
            M: mi,
            MM: "%d Méint",
            y: mi,
            yy: "%d Joer"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (e) {
            return "ຕອນແລງ" === e
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
        },
        calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ"
        },
        ordinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function (e) {
            return "ທີ່" + e
        }
    }), {
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
    }), yr = (Fs.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_")
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: gi,
            m: yi,
            mm: wi,
            h: yi,
            hh: wi,
            d: yi,
            dd: wi,
            M: yi,
            MM: wi,
            y: yi,
            yy: wi
        },
        ordinalParse: /\d{1,2}-oji/,
        ordinal: function (e) {
            return e + "-oji"
        },
        week: {dow: 1, doy: 4}
    }), {
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
    }), vr = (Fs.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: Yi,
            m: ki,
            mm: Li,
            h: ki,
            hh: Li,
            d: ki,
            dd: Li,
            M: ki,
            MM: Li,
            y: ki,
            yy: Li
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), {
        words: {
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
        }, translate: function (e, t, n) {
            var i = vr.words[n];
            return 1 === n.length ? t ? i[0] : i[1] : e + " " + vr.correctGrammaticalCase(e, i)
        }
    }), Mr = (Fs.defineLocale("me", {
        months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
        monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
        weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
        weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
        weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedjelju] [u] LT";
                    case 3:
                        return "[u] [srijedu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            }, lastDay: "[juče u] LT", lastWeek: function () {
                var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                return e[this.day()]
            }, sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            m: vr.translate,
            mm: vr.translate,
            h: vr.translate,
            hh: vr.translate,
            d: "dan",
            dd: vr.translate,
            M: "mjesec",
            MM: vr.translate,
            y: "godinu",
            yy: vr.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return "[Изминатата] dddd [во] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[Изминатиот] dddd [во] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "после %s",
            past: "пред %s",
            s: "неколку секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            M: "месец",
            MM: "%d месеци",
            y: "година",
            yy: "%d години"
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function (e) {
            var t = e % 10, n = e % 100;
            return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && 20 > n ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        isPM: function (e) {
            return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "രാത്രി" : 12 > e ? "രാവിലെ" : 17 > e ? "ഉച്ച കഴിഞ്ഞ്" : 20 > e ? "വൈകുന്നേരം" : "രാത്രി"
        }
    }), {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}), wr = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    }, br = (Fs.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: Di,
            m: Di,
            mm: Di,
            h: Di,
            hh: Di,
            d: Di,
            dd: Di,
            M: Di,
            MM: Di,
            y: Di,
            yy: Di
        },
        preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return wr[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Mr[e]
            })
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "रात्री" === t ? 4 > e ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "रात्री" : 10 > e ? "सकाळी" : 17 > e ? "दुपारी" : 20 > e ? "सायंकाळी" : "रात्री"
        },
        week: {dow: 0, doy: 6}
    }), Fs.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {dow: 1, doy: 7}
    }), {1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀"}), Lr = {
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        "၀": "0"
    }, kr = (Fs.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L"
        },
        relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်"
        },
        preparse: function (e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                return Lr[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return br[e]
            })
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "for %s siden",
            s: "noen sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), {1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०"}), Yr = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    }, Dr = (Fs.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function (e) {
            return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return Yr[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return kr[e]
            })
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "राति" === t ? 4 > e ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 3 > e ? "राति" : 12 > e ? "बिहान" : 16 > e ? "दिउँसो" : 20 > e ? "साँझ" : "राति"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष"
        },
        week: {dow: 0, doy: 6}
    }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")), Tr = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), Sr = (Fs.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function (e, t) {
            return /-MMM-/.test(t) ? Tr[e.month()] : Dr[e.month()]
        },
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function (e) {
            return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "for %s sidan",
            s: "nokre sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")), xr = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), Hr = (Fs.defineLocale("pl", {
        months: function (e, t) {
            return "" === t ? "(" + xr[e.month()] + "|" + Sr[e.month()] + ")" : /D MMMM/.test(t) ? xr[e.month()] : Sr[e.month()]
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[W zeszłą niedzielę o] LT";
                    case 3:
                        return "[W zeszłą środę o] LT";
                    case 6:
                        return "[W zeszłą sobotę o] LT";
                    default:
                        return "[W zeszły] dddd [o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: Si,
            mm: Si,
            h: Si,
            hh: Si,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: Si,
            y: "rok",
            yy: Si
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "%s atrás",
            s: "poucos segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº"
    }), Fs.defineLocale("pt", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function () {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            m: "un minut",
            mm: xi,
            h: "o oră",
            hh: xi,
            d: "o zi",
            dd: xi,
            M: "o lună",
            MM: xi,
            y: "un an",
            yy: xi
        },
        week: {dow: 1, doy: 7}
    }), [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]), jr = (Fs.defineLocale("ru", {
        months: {
            format: "Января_Февраля_Марта_Апреля_Мая_Июня_Июля_Августа_Сентября_Октября_Ноября_Декабря".split("_"),
            standalone: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_")
        },
        monthsShort: {
            format: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_"),
            standalone: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_")
        },
        weekdays: {
            standalone: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split("_"),
            format: "Воскресенье_Понедельник_Вторник_Среду_Четверг_Пятницу_Субботу".split("_"),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
        weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
        monthsParse: Hr,
        longMonthsParse: Hr,
        shortMonthsParse: Hr,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function (e) {
                if (e.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                    case 0:
                        return "[В следующее] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В следующий] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В следующую] dddd [в] LT"
                }
            },
            lastWeek: function (e) {
                if (e.week() === this.week())return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                    case 0:
                        return "[В прошлое] dddd [в] LT";
                    case 1:
                    case 2:
                    case 4:
                        return "[В прошлый] dddd [в] LT";
                    case 3:
                    case 5:
                    case 6:
                        return "[В прошлую] dddd [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: ji,
            mm: ji,
            h: "час",
            hh: ji,
            d: "день",
            dd: ji,
            M: "месяц",
            MM: ji,
            y: "год",
            yy: ji
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
            return /^(дня|вечера)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "ночи" : 12 > e ? "утра" : 17 > e ? "дня" : "вечера"
        },
        ordinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
            switch (t) {
                case"M":
                case"d":
                case"DDD":
                    return e + "-й";
                case"D":
                    return e + "-го";
                case"w":
                case"W":
                    return e + "-я";
                default:
                    return e
            }
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d"
        },
        ordinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
            return e + " වැනි"
        },
        meridiem: function (e, t, n) {
            return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
        }
    }), "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")), Cr = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), Pr = (Fs.defineLocale("sk", {
        months: jr,
        monthsShort: Cr,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[v nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[v] dddd [o] LT";
                    case 3:
                        return "[v stredu o] LT";
                    case 4:
                        return "[vo štvrtok o] LT";
                    case 5:
                        return "[v piatok o] LT";
                    case 6:
                        return "[v sobotu o] LT"
                }
            }, lastDay: "[včera o] LT", lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[minulú nedeľu o] LT";
                    case 1:
                    case 2:
                        return "[minulý] dddd [o] LT";
                    case 3:
                        return "[minulú stredu o] LT";
                    case 4:
                    case 5:
                        return "[minulý] dddd [o] LT";
                    case 6:
                        return "[minulú sobotu o] LT"
                }
            }, sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: Pi,
            m: Pi,
            mm: Pi,
            h: Pi,
            hh: Pi,
            d: Pi,
            dd: Pi,
            M: Pi,
            MM: Pi,
            y: Pi,
            yy: Pi
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[v] [nedeljo] [ob] LT";
                    case 3:
                        return "[v] [sredo] [ob] LT";
                    case 6:
                        return "[v] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[v] dddd [ob] LT"
                }
            }, lastDay: "[včeraj ob] LT", lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[prejšnjo] [nedeljo] [ob] LT";
                    case 3:
                        return "[prejšnjo] [sredo] [ob] LT";
                    case 6:
                        return "[prejšnjo] [soboto] [ob] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[prejšnji] dddd [ob] LT"
                }
            }, sameElse: "L"
        },
        relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: Ei,
            m: Ei,
            mm: Ei,
            h: Ei,
            hh: Ei,
            d: Ei,
            dd: Ei,
            M: Ei,
            MM: Ei,
            y: Ei,
            yy: Ei
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        meridiemParse: /PD|MD/,
        isPM: function (e) {
            return "M" === e.charAt(0)
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "PD" : "MD"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), {
        words: {
            m: ["један минут", "једне минуте"],
            mm: ["минут", "минуте", "минута"],
            h: ["један сат", "једног сата"],
            hh: ["сат", "сата", "сати"],
            dd: ["дан", "дана", "дана"],
            MM: ["месец", "месеца", "месеци"],
            yy: ["година", "године", "година"]
        }, correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
        }, translate: function (e, t, n) {
            var i = Pr.words[n];
            return 1 === n.length ? t ? i[0] : i[1] : e + " " + Pr.correctGrammaticalCase(e, i)
        }
    }), Er = (Fs.defineLocale("sr-cyrl", {
        months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
        monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."],
        weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"],
        weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."],
        weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"],
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[у] [недељу] [у] LT";
                    case 3:
                        return "[у] [среду] [у] LT";
                    case 6:
                        return "[у] [суботу] [у] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[у] dddd [у] LT"
                }
            }, lastDay: "[јуче у] LT", lastWeek: function () {
                var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                return e[this.day()]
            }, sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            m: Pr.translate,
            mm: Pr.translate,
            h: Pr.translate,
            hh: Pr.translate,
            d: "дан",
            dd: Pr.translate,
            M: "месец",
            MM: Pr.translate,
            y: "годину",
            yy: Pr.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), {
        words: {
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"]
        }, correctGrammaticalCase: function (e, t) {
            return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
        }, translate: function (e, t, n) {
            var i = Er.words[n];
            return 1 === n.length ? t ? i[0] : i[1] : e + " " + Er.correctGrammaticalCase(e, i)
        }
    }), Ar = (Fs.defineLocale("sr", {
        months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
        monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
        weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
        weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
        weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return "[u] [nedelju] [u] LT";
                    case 3:
                        return "[u] [sredu] [u] LT";
                    case 6:
                        return "[u] [subotu] [u] LT";
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return "[u] dddd [u] LT"
                }
            }, lastDay: "[juče u] LT", lastWeek: function () {
                var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                return e[this.day()]
            }, sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            m: Er.translate,
            mm: Er.translate,
            h: Er.translate,
            hh: Er.translate,
            d: "dan",
            dd: Er.translate,
            M: "mesec",
            MM: Er.translate,
            y: "godinu",
            yy: Er.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal: function (e) {
            var t = e % 10, n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
            return e + n
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
        },
        week: {dow: 1, doy: 7}
    }), {1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦"}), Fr = {
        "௧": "1",
        "௨": "2",
        "௩": "3",
        "௪": "4",
        "௫": "5",
        "௬": "6",
        "௭": "7",
        "௮": "8",
        "௯": "9",
        "௦": "0"
    }, Or = (Fs.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்"
        },
        ordinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
            return e + "வது"
        },
        preparse: function (e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                return Fr[e]
            })
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return Ar[e]
            })
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
            return 2 > e ? " யாமம்" : 6 > e ? " வைகறை" : 10 > e ? " காலை" : 14 > e ? " நண்பகல்" : 18 > e ? " எற்பாடு" : 22 > e ? " மாலை" : " யாமம்"
        },
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "யாமம்" === t ? 2 > e ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
        },
        week: {dow: 0, doy: 6}
    }), Fs.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు"
        },
        ordinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "రాత్రి" === t ? 4 > e ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "రాత్రి" : 10 > e ? "ఉదయం" : 17 > e ? "మధ్యాహ్నం" : 20 > e ? "సాయంత్రం" : "రాత్రి"
        },
        week: {dow: 0, doy: 6}
    }), Fs.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        longDateFormat: {
            LT: "H นาฬิกา m นาที",
            LTS: "H นาฬิกา m นาที s วินาที",
            L: "YYYY/MM/DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H นาฬิกา m นาที",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
            return "หลังเที่ยง" === e
        },
        meridiem: function (e, t, n) {
            return 12 > e ? "ก่อนเที่ยง" : "หลังเที่ยง"
        },
        calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
        }
    }), Fs.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Ngayon sa] LT",
            nextDay: "[Bukas sa] LT",
            nextWeek: "dddd [sa] LT",
            lastDay: "[Kahapon sa] LT",
            lastWeek: "dddd [huling linggo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function (e) {
            return e
        },
        week: {dow: 1, doy: 4}
    }), "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")), Wr = (Fs.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: Ai,
            past: Fi,
            s: "puS lup",
            m: "wa’ tup",
            mm: Oi,
            h: "wa’ rep",
            hh: Oi,
            d: "wa’ jaj",
            dd: Oi,
            M: "wa’ jar",
            MM: Oi,
            y: "wa’ DIS",
            yy: Oi
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
    }), Ir = (Fs.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[haftaya] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen hafta] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl"
        },
        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: function (e) {
            if (0 === e)return e + "'ıncı";
            var t = e % 10, n = e % 100 - t, i = e >= 100 ? 100 : null;
            return e + (Wr[t] || Wr[n] || Wr[i])
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiem: function (e, t, n) {
            return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
        },
        calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: Ii,
            m: Ii,
            mm: Ii,
            h: Ii,
            hh: Ii,
            d: Ii,
            dd: Ii,
            M: Ii,
            MM: Ii,
            y: Ii,
            yy: Ii
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
        },
        week: {dow: 6, doy: 12}
    }), Fs.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {dow: 6, doy: 12}
    }), Fs.defineLocale("uk", {
        months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: Ri,
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
            sameDay: Ni("[Сьогодні "),
            nextDay: Ni("[Завтра "),
            lastDay: Ni("[Вчора "),
            nextWeek: Ni("[У] dddd ["),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return Ni("[Минулої] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return Ni("[Минулого] dddd [").call(this)
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            m: $i,
            mm: $i,
            h: "годину",
            hh: $i,
            d: "день",
            dd: $i,
            M: "місяць",
            MM: $i,
            y: "рік",
            yy: $i
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
            return /^(дня|вечора)$/.test(e)
        },
        meridiem: function (e, t, n) {
            return 4 > e ? "ночі" : 12 > e ? "ранку" : 17 > e ? "дня" : "вечора"
        },
        ordinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
            switch (t) {
                case"M":
                case"d":
                case"DDD":
                case"w":
                case"W":
                    return e + "-й";
                case"D":
                    return e + "-го";
                default:
                    return e
            }
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
        },
        week: {dow: 1, doy: 7}
    }), Fs.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần rồi lúc] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function (e) {
            return e
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah点mm分",
            LTS: "Ah点m分s秒",
            L: "YYYY-MM-DD",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah点mm分",
            LLLL: "YYYY年MMMD日ddddAh点mm分",
            l: "YYYY-MM-DD",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah点mm分",
            llll: "YYYY年MMMD日ddddAh点mm分"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
        },
        meridiem: function (e, t, n) {
            var i = 100 * e + t;
            return 600 > i ? "凌晨" : 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
        },
        calendar: {
            sameDay: function () {
                return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
            }, nextDay: function () {
                return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
            }, lastDay: function () {
                return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
            }, nextWeek: function () {
                var e, t;
                return e = Fs().startOf("week"), t = this.unix() - e.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
            }, lastWeek: function () {
                var e, t;
                return e = Fs().startOf("week"), t = this.unix() < e.unix() ? "[上]" : "[本]", 0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
            }, sameElse: "LL"
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
            switch (t) {
                case"d":
                case"D":
                case"DDD":
                    return e + "日";
                case"M":
                    return e + "月";
                case"w":
                case"W":
                    return e + "周";
                default:
                    return e
            }
        },
        relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
        },
        week: {dow: 1, doy: 4}
    }), Fs.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah點mm分",
            LTS: "Ah點m分s秒",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah點mm分",
            LLLL: "YYYY年MMMD日ddddAh點mm分",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah點mm分",
            llll: "YYYY年MMMD日ddddAh點mm分"
        },
        meridiemParse: /早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
            return 12 === e && (e = 0), "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function (e, t, n) {
            var i = 100 * e + t;
            return 900 > i ? "早上" : 1130 > i ? "上午" : 1230 > i ? "中午" : 1800 > i ? "下午" : "晚上"
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
            switch (t) {
                case"d":
                case"D":
                case"DDD":
                    return e + "日";
                case"M":
                    return e + "月";
                case"w":
                case"W":
                    return e + "週";
                default:
                    return e
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "一分鐘",
            mm: "%d分鐘",
            h: "一小時",
            hh: "%d小時",
            d: "一天",
            dd: "%d天",
            M: "一個月",
            MM: "%d個月",
            y: "一年",
            yy: "%d年"
        }
    }), Fs);
    return Ir.locale("en"), Ir
});
var ResponsiveBootstrapToolkit = function (e) {
    var t = {
        detectionDivs: {
            bootstrap: {
                xs: e('<div class="device-xs visible-xs visible-xs-block"></div>'),
                sm: e('<div class="device-sm visible-sm visible-sm-block"></div>'),
                md: e('<div class="device-md visible-md visible-md-block"></div>'),
                lg: e('<div class="device-lg visible-lg visible-lg-block"></div>')
            },
            foundation: {
                small: e('<div class="device-xs show-for-small-only"></div>'),
                medium: e('<div class="device-sm show-for-medium-only"></div>'),
                large: e('<div class="device-md show-for-large-only"></div>'),
                xlarge: e('<div class="device-lg show-for-xlarge-only"></div>')
            }
        }, applyDetectionDivs: function () {
            e(document).ready(function () {
                e.each(n.breakpoints, function (e) {
                    n.breakpoints[e].appendTo(".responsive-bootstrap-toolkit")
                })
            })
        }, isAnExpression: function (e) {
            return "<" == e.charAt(0) || ">" == e.charAt(0)
        }, splitExpression: function (e) {
            var t = e.charAt(0), n = "=" == e.charAt(1) ? !0 : !1, i = 1 + (n ? 1 : 0), a = e.slice(i);
            return {operator: t, orEqual: n, breakpointName: a}
        }, isAnyActive: function (t) {
            var i = !1;
            return e.each(t, function (e, t) {
                return n.breakpoints[t].is(":visible") ? (i = !0, !1) : void 0
            }), i
        }, isMatchingExpression: function (e) {
            var i = t.splitExpression(e), a = Object.keys(n.breakpoints), s = a.indexOf(i.breakpointName);
            if (-1 !== s) {
                var r = 0, o = 0;
                "<" == i.operator && (r = 0, o = i.orEqual ? ++s : s), ">" == i.operator && (r = i.orEqual ? s : ++s, o = void 0);
                var d = a.slice(r, o);
                return t.isAnyActive(d)
            }
        }
    }, n = {
        interval: 300, framework: null, breakpoints: null, is: function (e) {
            return t.isAnExpression(e) ? t.isMatchingExpression(e) : n.breakpoints[e] && n.breakpoints[e].is(":visible")
        }, use: function (e, i) {
            n.framework = e.toLowerCase(), n.breakpoints = "bootstrap" === n.framework || "foundation" === n.framework ? t.detectionDivs[n.framework] : i, t.applyDetectionDivs()
        }, current: function () {
            var t = "unrecognized";
            return e.each(n.breakpoints, function (e) {
                n.is(e) && (t = e)
            }), t
        }, changed: function (e, t) {
            var i;
            return function () {
                clearTimeout(i), i = setTimeout(function () {
                    e()
                }, t || n.interval)
            }
        }
    };
    return e(document).ready(function () {
        e('<div class="responsive-bootstrap-toolkit"></div>').appendTo("body")
    }), null === n.framework && n.use("bootstrap"), n
}(jQuery);
!function (e) {
    var t = -1, n = -1, i = function (e) {
        return parseFloat(e) || 0
    }, a = function (t) {
        var n = 1, a = e(t), s = null, r = [];
        return a.each(function () {
            var t = e(this), a = t.offset().top - i(t.css("margin-top")), o = r.length > 0 ? r[r.length - 1] : null;
            null === o ? r.push(t) : Math.floor(Math.abs(s - a)) <= n ? r[r.length - 1] = o.add(t) : r.push(t), s = a
        }), r
    }, s = function (t) {
        var n = {byRow: !0, property: "height", target: null, remove: !1};
        return "object" == typeof t ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n)
    }, r = e.fn.matchHeight = function (t) {
        var n = s(t);
        if (n.remove) {
            var i = this;
            return this.css(n.property, ""), e.each(r._groups, function (e, t) {
                t.elements = t.elements.not(i)
            }), this
        }
        return this.length <= 1 && !n.target ? this : (r._groups.push({
            elements: this,
            options: n
        }), r._apply(this, n), this)
    };
    r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._apply = function (t, n) {
        var o = s(n), d = e(t), l = [d], u = e(window).scrollTop(), c = e("html").outerHeight(!0), p = d.parents().filter(":hidden");
        return p.each(function () {
            var t = e(this);
            t.data("style-cache", t.attr("style"))
        }), p.css("display", "block"), o.byRow && !o.target && (d.each(function () {
            var t = e(this), n = "inline-block" === t.css("display") ? "inline-block" : "block";
            t.data("style-cache", t.attr("style")), t.css({
                display: n,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px"
            })
        }), l = a(d), d.each(function () {
            var t = e(this);
            t.attr("style", t.data("style-cache") || "")
        })), e.each(l, function (t, n) {
            var a = e(n), s = 0;
            if (o.target)s = o.target.outerHeight(!1); else {
                if (o.byRow && a.length <= 1)return void a.css(o.property, "");
                a.each(function () {
                    var t = e(this), n = "inline-block" === t.css("display") ? "inline-block" : "block", i = {display: n};
                    i[o.property] = "", t.css(i), t.outerHeight(!1) > s && (s = t.outerHeight(!1)), t.css("display", "")
                })
            }
            a.each(function () {
                var t = e(this), n = 0;
                o.target && t.is(o.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(o.property, s - n))
            })
        }), p.each(function () {
            var t = e(this);
            t.attr("style", t.data("style-cache") || null)
        }), r._maintainScroll && e(window).scrollTop(u / c * e("html").outerHeight(!0)), this
    }, r._applyDataApi = function () {
        var t = {};
        e("[data-match-height], [data-mh]").each(function () {
            var n = e(this), i = n.attr("data-mh") || n.attr("data-match-height");
            i in t ? t[i] = t[i].add(n) : t[i] = n
        }), e.each(t, function () {
            this.matchHeight(!0)
        })
    };
    var o = function (t) {
        r._beforeUpdate && r._beforeUpdate(t, r._groups), e.each(r._groups, function () {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(t, r._groups)
    };
    r._update = function (i, a) {
        if (a && "resize" === a.type) {
            var s = e(window).width();
            if (s === t)return;
            t = s
        }
        i ? -1 === n && (n = setTimeout(function () {
            o(a), n = -1
        }, r._throttle)) : o(a)
    }, e(r._applyDataApi), e(window).bind("load", function (e) {
        r._update(!1, e)
    }), e(window).bind("resize orientationchange", function (e) {
        r._update(!0, e)
    })
}(jQuery), !function (e) {
    "use strict";
    if ("function" == typeof define && define.amd)define(["jquery", "moment"], e); else if ("object" == typeof exports)e(require("jquery"), require("moment")); else {
        if ("undefined" == typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";
        if ("undefined" == typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";
        e(jQuery, moment)
    }
}(function (e, t) {
    "use strict";
    if (!t)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    var n = function (n, i) {
        var a, s, r, o, d, l, u, c = {}, p = !0, m = !1, _ = !1, h = 0, f = [{
            clsName: "days",
            navFnc: "M",
            navStep: 1
        }, {clsName: "months", navFnc: "y", navStep: 1}, {
            clsName: "years",
            navFnc: "y",
            navStep: 10
        }, {
            clsName: "decades",
            navFnc: "y",
            navStep: 100
        }], g = ["days", "months", "years", "decades"], y = ["top", "bottom", "auto"], v = ["left", "right", "auto"], M = ["default", "top", "bottom"], w = {
            up: 38,
            38: "up",
            down: 40,
            40: "down",
            left: 37,
            37: "left",
            right: 39,
            39: "right",
            tab: 9,
            9: "tab",
            escape: 27,
            27: "escape",
            enter: 13,
            13: "enter",
            pageUp: 33,
            33: "pageUp",
            pageDown: 34,
            34: "pageDown",
            shift: 16,
            16: "shift",
            control: 17,
            17: "control",
            space: 32,
            32: "space",
            t: 84,
            84: "t",
            "delete": 46,
            46: "delete"
        }, b = {}, L = function (e) {
            var n, a, s, r, o, d = !1;
            return void 0 !== t.tz && void 0 !== i.timeZone && null !== i.timeZone && "" !== i.timeZone && (d = !0), void 0 === e || null === e ? n = d ? t().tz(i.timeZone).startOf("d") : t().startOf("d") : d ? (a = t().tz(i.timeZone).utcOffset(), s = t(e, l, i.useStrict).utcOffset(), s !== a ? (r = t().tz(i.timeZone).format("Z"), o = t(e, l, i.useStrict).format("YYYY-MM-DD[T]HH:mm:ss") + r, n = t(o, l, i.useStrict).tz(i.timeZone)) : n = t(e, l, i.useStrict).tz(i.timeZone)) : n = t(e, l, i.useStrict), n
        }, k = function (e) {
            if ("string" != typeof e || e.length > 1)throw new TypeError("isEnabled expects a single character string parameter");
            switch (e) {
                case"y":
                    return -1 !== d.indexOf("Y");
                case"M":
                    return -1 !== d.indexOf("M");
                case"d":
                    return -1 !== d.toLowerCase().indexOf("d");
                case"h":
                case"H":
                    return -1 !== d.toLowerCase().indexOf("h");
                case"m":
                    return -1 !== d.indexOf("m");
                case"s":
                    return -1 !== d.indexOf("s");
                default:
                    return !1
            }
        }, Y = function () {
            return k("h") || k("m") || k("s")
        }, D = function () {
            return k("y") || k("M") || k("d")
        }, T = function () {
            var t = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<span>").addClass(i.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", i.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<span>").addClass(i.icons.next)))), n = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", i.calendarWeeks ? "8" : "7")));
            return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]
        }, S = function () {
            var t = e("<tr>"), n = e("<tr>"), a = e("<tr>");
            return k("h") && (t.append(e("<td>").append(e("<a>").attr({
                href: "#",
                tabindex: "-1",
                title: i.tooltips.incrementHour
            }).addClass("btn").attr("data-action", "incrementHours").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({
                "data-time-component": "hours",
                title: i.tooltips.pickHour
            }).attr("data-action", "showHours"))), a.append(e("<td>").append(e("<a>").attr({
                href: "#",
                tabindex: "-1",
                title: i.tooltips.decrementHour
            }).addClass("btn").attr("data-action", "decrementHours").append(e("<span>").addClass(i.icons.down))))), k("m") && (k("h") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), a.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                href: "#",
                tabindex: "-1",
                title: i.tooltips.incrementMinute
            }).addClass("btn").attr("data-action", "incrementMinutes").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({
                "data-time-component": "minutes",
                title: i.tooltips.pickMinute
            }).attr("data-action", "showMinutes"))), a.append(e("<td>").append(e("<a>").attr({
                href: "#",
                tabindex: "-1",
                title: i.tooltips.decrementMinute
            }).addClass("btn").attr("data-action", "decrementMinutes").append(e("<span>").addClass(i.icons.down))))), k("s") && (k("m") && (t.append(e("<td>").addClass("separator")), n.append(e("<td>").addClass("separator").html(":")), a.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
                href: "#",
                tabindex: "-1",
                title: i.tooltips.incrementSecond
            }).addClass("btn").attr("data-action", "incrementSeconds").append(e("<span>").addClass(i.icons.up)))), n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({
                "data-time-component": "seconds",
                title: i.tooltips.pickSecond
            }).attr("data-action", "showSeconds"))), a.append(e("<td>").append(e("<a>").attr({
                href: "#",
                tabindex: "-1",
                title: i.tooltips.decrementSecond
            }).addClass("btn").attr("data-action", "decrementSeconds").append(e("<span>").addClass(i.icons.down))))), o || (t.append(e("<td>").addClass("separator")), n.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({
                "data-action": "togglePeriod",
                tabindex: "-1",
                title: i.tooltips.togglePeriod
            }))), a.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, n, a]))
        }, x = function () {
            var t = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")), n = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")), i = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")), a = [S()];
            return k("h") && a.push(t), k("m") && a.push(n), k("s") && a.push(i), a
        }, H = function () {
            var t = [];
            return i.showTodayButton && t.push(e("<td>").append(e("<a>").attr({
                "data-action": "today",
                title: i.tooltips.today
            }).append(e("<span>").addClass(i.icons.today)))), !i.sideBySide && D() && Y() && t.push(e("<td>").append(e("<a>").attr({
                "data-action": "togglePicker",
                title: i.tooltips.selectTime
            }).append(e("<span>").addClass(i.icons.time)))), i.showClear && t.push(e("<td>").append(e("<a>").attr({
                "data-action": "clear",
                title: i.tooltips.clear
            }).append(e("<span>").addClass(i.icons.clear)))), i.showClose && t.push(e("<td>").append(e("<a>").attr({
                "data-action": "close",
                title: i.tooltips.close
            }).append(e("<span>").addClass(i.icons.close)))), e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
        }, j = function () {
            var t = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"), n = e("<div>").addClass("datepicker").append(T()), a = e("<div>").addClass("timepicker").append(x()), s = e("<ul>").addClass("list-unstyled"), r = e("<li>").addClass("picker-switch" + (i.collapse ? " accordion-toggle" : "")).append(H());
            return i.inline && t.removeClass("dropdown-menu"), o && t.addClass("usetwentyfour"), k("s") && !o && t.addClass("wider"), i.sideBySide && D() && Y() ? (t.addClass("timepicker-sbs"), "top" === i.toolbarPlacement && t.append(r), t.append(e("<div>").addClass("row").append(n.addClass("col-md-6")).append(a.addClass("col-md-6"))), "bottom" === i.toolbarPlacement && t.append(r), t) : ("top" === i.toolbarPlacement && s.append(r), D() && s.append(e("<li>").addClass(i.collapse && Y() ? "collapse in" : "").append(n)), "default" === i.toolbarPlacement && s.append(r), Y() && s.append(e("<li>").addClass(i.collapse && D() ? "collapse" : "").append(a)), "bottom" === i.toolbarPlacement && s.append(r), t.append(s))
        }, C = function () {
            var t, a = {};
            return t = n.is("input") || i.inline ? n.data() : n.find("input").data(), t.dateOptions && t.dateOptions instanceof Object && (a = e.extend(!0, a, t.dateOptions)), e.each(i, function (e) {
                var n = "date" + e.charAt(0).toUpperCase() + e.slice(1);
                void 0 !== t[n] && (a[e] = t[n])
            }), a
        }, P = function () {
            var t, a = (m || n).position(), s = (m || n).offset(), r = i.widgetPositioning.vertical, o = i.widgetPositioning.horizontal;
            if (i.widgetParent)t = i.widgetParent.append(_); else if (n.is("input"))t = n.after(_).parent(); else {
                if (i.inline)return void(t = n.append(_));
                t = n, n.children().first().after(_)
            }
            if ("auto" === r && (r = s.top + 1.5 * _.height() >= e(window).height() + e(window).scrollTop() && _.height() + n.outerHeight() < s.top ? "top" : "bottom"), "auto" === o && (o = t.width() < s.left + _.outerWidth() / 2 && s.left + _.outerWidth() > e(window).width() ? "right" : "left"), "top" === r ? _.addClass("top").removeClass("bottom") : _.addClass("bottom").removeClass("top"), "right" === o ? _.addClass("pull-right") : _.removeClass("pull-right"), "relative" !== t.css("position") && (t = t.parents().filter(function () {
                    return "relative" === e(this).css("position")
                }).first()), 0 === t.length)throw new Error("datetimepicker component should be placed within a relative positioned container");
            _.css({
                top: "top" === r ? "auto" : a.top + n.outerHeight(),
                bottom: "top" === r ? a.top + n.outerHeight() : "auto",
                left: "left" === o ? t === n ? 0 : a.left : "auto",
                right: "left" === o ? "auto" : t.outerWidth() - n.outerWidth() - (t === n ? 0 : a.left)
            })
        }, E = function (e) {
            "dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || n.trigger(e)
        }, A = function (e) {
            "y" === e && (e = "YYYY"), E({type: "dp.update", change: e, viewDate: s.clone()})
        }, F = function (e) {
            _ && (e && (u = Math.max(h, Math.min(3, u + e))), _.find(".datepicker > div").hide().filter(".datepicker-" + f[u].clsName).show())
        }, O = function () {
            var t = e("<tr>"), n = s.clone().startOf("w").startOf("d");
            for (i.calendarWeeks === !0 && t.append(e("<th>").addClass("cw").text("#")); n.isBefore(s.clone().endOf("w"));)t.append(e("<th>").addClass("dow").text(n.format("dd"))), n.add(1, "d");
            _.find(".datepicker-days thead").append(t)
        }, W = function (e) {
            return i.disabledDates[e.format("YYYY-MM-DD")] === !0
        }, I = function (e) {
            return i.enabledDates[e.format("YYYY-MM-DD")] === !0
        }, z = function (e) {
            return i.disabledHours[e.format("H")] === !0
        }, $ = function (e) {
            return i.enabledHours[e.format("H")] === !0
        }, R = function (t, n) {
            if (!t.isValid())return !1;
            if (i.disabledDates && "d" === n && W(t))return !1;
            if (i.enabledDates && "d" === n && !I(t))return !1;
            if (i.minDate && t.isBefore(i.minDate, n))return !1;
            if (i.maxDate && t.isAfter(i.maxDate, n))return !1;
            if (i.daysOfWeekDisabled && "d" === n && -1 !== i.daysOfWeekDisabled.indexOf(t.day()))return !1;
            if (i.disabledHours && ("h" === n || "m" === n || "s" === n) && z(t))return !1;
            if (i.enabledHours && ("h" === n || "m" === n || "s" === n) && !$(t))return !1;
            if (i.disabledTimeIntervals && ("h" === n || "m" === n || "s" === n)) {
                var a = !1;
                if (e.each(i.disabledTimeIntervals, function () {
                        return t.isBetween(this[0], this[1]) ? (a = !0, !1) : void 0
                    }), a)return !1
            }
            return !0
        }, N = function () {
            for (var t = [], n = s.clone().startOf("y").startOf("d"); n.isSame(s, "y");)t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(n.format("MMM"))), n.add(1, "M");
            _.find(".datepicker-months td").empty().append(t)
        }, B = function () {
            var t = _.find(".datepicker-months"), n = t.find("th"), r = t.find("tbody").find("span");
            n.eq(0).find("span").attr("title", i.tooltips.prevYear), n.eq(1).attr("title", i.tooltips.selectYear), n.eq(2).find("span").attr("title", i.tooltips.nextYear), t.find(".disabled").removeClass("disabled"), R(s.clone().subtract(1, "y"), "y") || n.eq(0).addClass("disabled"), n.eq(1).text(s.year()), R(s.clone().add(1, "y"), "y") || n.eq(2).addClass("disabled"), r.removeClass("active"), a.isSame(s, "y") && !p && r.eq(a.month()).addClass("active"), r.each(function (t) {
                R(s.clone().month(t), "M") || e(this).addClass("disabled")
            })
        }, U = function () {
            var e = _.find(".datepicker-years"), t = e.find("th"), n = s.clone().subtract(5, "y"), r = s.clone().add(6, "y"), o = "";
            for (t.eq(0).find("span").attr("title", i.tooltips.prevDecade), t.eq(1).attr("title", i.tooltips.selectDecade), t.eq(2).find("span").attr("title", i.tooltips.nextDecade), e.find(".disabled").removeClass("disabled"), i.minDate && i.minDate.isAfter(n, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(n.year() + "-" + r.year()), i.maxDate && i.maxDate.isBefore(r, "y") && t.eq(2).addClass("disabled"); !n.isAfter(r, "y");)o += '<span data-action="selectYear" class="year' + (n.isSame(a, "y") && !p ? " active" : "") + (R(n, "y") ? "" : " disabled") + '">' + n.year() + "</span>", n.add(1, "y");
            e.find("td").html(o)
        }, q = function () {
            var e = _.find(".datepicker-decades"), n = e.find("th"), r = t({y: s.year() - s.year() % 100 - 1}), o = r.clone().add(100, "y"), d = r.clone(), l = "";
            for (n.eq(0).find("span").attr("title", i.tooltips.prevCentury), n.eq(2).find("span").attr("title", i.tooltips.nextCentury), e.find(".disabled").removeClass("disabled"), (r.isSame(t({y: 1900})) || i.minDate && i.minDate.isAfter(r, "y")) && n.eq(0).addClass("disabled"), n.eq(1).text(r.year() + "-" + o.year()), (r.isSame(t({y: 2e3})) || i.maxDate && i.maxDate.isBefore(o, "y")) && n.eq(2).addClass("disabled"); !r.isAfter(o, "y");)l += '<span data-action="selectDecade" class="decade' + (r.isSame(a, "y") ? " active" : "") + (R(r, "y") ? "" : " disabled") + '" data-selection="' + (r.year() + 6) + '">' + (r.year() + 1) + " - " + (r.year() + 12) + "</span>", r.add(12, "y");
            l += "<span></span><span></span><span></span>", e.find("td").html(l), n.eq(1).text(d.year() + 1 + "-" + r.year())
        }, V = function () {
            var t, n, r, o, d = _.find(".datepicker-days"), l = d.find("th"), u = [];
            if (D()) {
                for (l.eq(0).find("span").attr("title", i.tooltips.prevMonth), l.eq(1).attr("title", i.tooltips.selectMonth), l.eq(2).find("span").attr("title", i.tooltips.nextMonth), d.find(".disabled").removeClass("disabled"), l.eq(1).text(s.format(i.dayViewHeaderFormat)), R(s.clone().subtract(1, "M"), "M") || l.eq(0).addClass("disabled"), R(s.clone().add(1, "M"), "M") || l.eq(2).addClass("disabled"), t = s.clone().startOf("M").startOf("w").startOf("d"), o = 0; 42 > o; o++)0 === t.weekday() && (n = e("<tr>"), i.calendarWeeks && n.append('<td class="cw">' + t.week() + "</td>"), u.push(n)), r = "", t.isBefore(s, "M") && (r += " old"), t.isAfter(s, "M") && (r += " new"), t.isSame(a, "d") && !p && (r += " active"), R(t, "d") || (r += " disabled"), t.isSame(L(), "d") && (r += " today"), (0 === t.day() || 6 === t.day()) && (r += " weekend"), n.append('<td data-action="selectDay" data-day="' + t.format("L") + '" class="day' + r + '">' + t.date() + "</td>"), t.add(1, "d");
                d.find("tbody").empty().append(u), B(), U(), q()
            }
        }, G = function () {
            var t = _.find(".timepicker-hours table"), n = s.clone().startOf("d"), i = [], a = e("<tr>");
            for (s.hour() > 11 && !o && n.hour(12); n.isSame(s, "d") && (o || s.hour() < 12 && n.hour() < 12 || s.hour() > 11);)n.hour() % 4 === 0 && (a = e("<tr>"), i.push(a)), a.append('<td data-action="selectHour" class="hour' + (R(n, "h") ? "" : " disabled") + '">' + n.format(o ? "HH" : "hh") + "</td>"), n.add(1, "h");
            t.empty().append(i)
        }, J = function () {
            for (var t = _.find(".timepicker-minutes table"), n = s.clone().startOf("h"), a = [], r = e("<tr>"), o = 1 === i.stepping ? 5 : i.stepping; s.isSame(n, "h");)n.minute() % (4 * o) === 0 && (r = e("<tr>"), a.push(r)), r.append('<td data-action="selectMinute" class="minute' + (R(n, "m") ? "" : " disabled") + '">' + n.format("mm") + "</td>"), n.add(o, "m");
            t.empty().append(a)
        }, X = function () {
            for (var t = _.find(".timepicker-seconds table"), n = s.clone().startOf("m"), i = [], a = e("<tr>"); s.isSame(n, "m");)n.second() % 20 === 0 && (a = e("<tr>"), i.push(a)), a.append('<td data-action="selectSecond" class="second' + (R(n, "s") ? "" : " disabled") + '">' + n.format("ss") + "</td>"), n.add(5, "s");
            t.empty().append(i)
        }, Z = function () {
            var e, t, n = _.find(".timepicker span[data-time-component]");
            o || (e = _.find(".timepicker [data-action=togglePeriod]"), t = a.clone().add(a.hours() >= 12 ? -12 : 12, "h"), e.text(a.format("A")), R(t, "h") ? e.removeClass("disabled") : e.addClass("disabled")), n.filter("[data-time-component=hours]").text(a.format(o ? "HH" : "hh")), n.filter("[data-time-component=minutes]").text(a.format("mm")), n.filter("[data-time-component=seconds]").text(a.format("ss")), G(), J(), X()
        }, Q = function () {
            _ && (V(), Z())
        }, K = function (e) {
            var t = p ? null : a;
            return e ? (e = e.clone().locale(i.locale), 1 !== i.stepping && e.minutes(Math.round(e.minutes() / i.stepping) * i.stepping % 60).seconds(0), void(R(e) ? (a = e, s = a.clone(), r.val(a.format(d)), n.data("date", a.format(d)), p = !1, Q(), E({
                type: "dp.change",
                date: a.clone(),
                oldDate: t
            })) : (i.keepInvalid || r.val(p ? "" : a.format(d)), E({
                type: "dp.error",
                date: e
            })))) : (p = !0, r.val(""), n.data("date", ""), E({type: "dp.change", date: !1, oldDate: t}), void Q())
        }, ee = function () {
            var t = !1;
            return _ ? (_.find(".collapse").each(function () {
                var n = e(this).data("collapse");
                return n && n.transitioning ? (t = !0, !1) : !0
            }), t ? c : (m && m.hasClass("btn") && m.toggleClass("active"), _.hide(), e(window).off("resize", P), _.off("click", "[data-action]"), _.off("mousedown", !1), _.remove(), _ = !1, E({
                type: "dp.hide",
                date: a.clone()
            }), r.blur(), c)) : c
        }, te = function () {
            K(null)
        }, ne = {
            next: function () {
                var e = f[u].navFnc;
                s.add(f[u].navStep, e), V(), A(e)
            }, previous: function () {
                var e = f[u].navFnc;
                s.subtract(f[u].navStep, e), V(), A(e)
            }, pickerSwitch: function () {
                F(1)
            }, selectMonth: function (t) {
                var n = e(t.target).closest("tbody").find("span").index(e(t.target));
                s.month(n), u === h ? (K(a.clone().year(s.year()).month(s.month())), i.inline || ee()) : (F(-1), V()), A("M")
            }, selectYear: function (t) {
                var n = parseInt(e(t.target).text(), 10) || 0;
                s.year(n), u === h ? (K(a.clone().year(s.year())), i.inline || ee()) : (F(-1), V()), A("YYYY")
            }, selectDecade: function (t) {
                var n = parseInt(e(t.target).data("selection"), 10) || 0;
                s.year(n), u === h ? (K(a.clone().year(s.year())), i.inline || ee()) : (F(-1), V()), A("YYYY")
            }, selectDay: function (t) {
                var n = s.clone();
                e(t.target).is(".old") && n.subtract(1, "M"), e(t.target).is(".new") && n.add(1, "M"), K(n.date(parseInt(e(t.target).text(), 10))), Y() || i.keepOpen || i.inline || ee()
            }, incrementHours: function () {
                var e = a.clone().add(1, "h");
                R(e, "h") && K(e)
            }, incrementMinutes: function () {
                var e = a.clone().add(i.stepping, "m");
                R(e, "m") && K(e)
            }, incrementSeconds: function () {
                var e = a.clone().add(1, "s");
                R(e, "s") && K(e)
            }, decrementHours: function () {
                var e = a.clone().subtract(1, "h");
                R(e, "h") && K(e)
            }, decrementMinutes: function () {
                var e = a.clone().subtract(i.stepping, "m");
                R(e, "m") && K(e)
            }, decrementSeconds: function () {
                var e = a.clone().subtract(1, "s");
                R(e, "s") && K(e)
            }, togglePeriod: function () {
                K(a.clone().add(a.hours() >= 12 ? -12 : 12, "h"))
            }, togglePicker: function (t) {
                var n, a = e(t.target), s = a.closest("ul"), r = s.find(".in"), o = s.find(".collapse:not(.in)");
                if (r && r.length) {
                    if (n = r.data("collapse"), n && n.transitioning)return;
                    r.collapse ? (r.collapse("hide"), o.collapse("show")) : (r.removeClass("in"), o.addClass("in")), a.is("span") ? a.toggleClass(i.icons.time + " " + i.icons.date) : a.find("span").toggleClass(i.icons.time + " " + i.icons.date)
                }
            }, showPicker: function () {
                _.find(".timepicker > div:not(.timepicker-picker)").hide(), _.find(".timepicker .timepicker-picker").show()
            }, showHours: function () {
                _.find(".timepicker .timepicker-picker").hide(), _.find(".timepicker .timepicker-hours").show()
            }, showMinutes: function () {
                _.find(".timepicker .timepicker-picker").hide(), _.find(".timepicker .timepicker-minutes").show()
            }, showSeconds: function () {
                _.find(".timepicker .timepicker-picker").hide(), _.find(".timepicker .timepicker-seconds").show()
            }, selectHour: function (t) {
                var n = parseInt(e(t.target).text(), 10);
                o || (a.hours() >= 12 ? 12 !== n && (n += 12) : 12 === n && (n = 0)), K(a.clone().hours(n)), ne.showPicker.call(c)
            }, selectMinute: function (t) {
                K(a.clone().minutes(parseInt(e(t.target).text(), 10))), ne.showPicker.call(c)
            }, selectSecond: function (t) {
                K(a.clone().seconds(parseInt(e(t.target).text(), 10))), ne.showPicker.call(c)
            }, clear: te, today: function () {
                var e = L();
                R(e, "d") && K(e)
            }, close: ee
        }, ie = function (t) {
            return e(t.currentTarget).is(".disabled") ? !1 : (ne[e(t.currentTarget).data("action")].apply(c, arguments), !1)
        }, ae = function () {
            var t, n = {
                year: function (e) {
                    return e.month(0).date(1).hours(0).seconds(0).minutes(0)
                }, month: function (e) {
                    return e.date(1).hours(0).seconds(0).minutes(0)
                }, day: function (e) {
                    return e.hours(0).seconds(0).minutes(0)
                }, hour: function (e) {
                    return e.seconds(0).minutes(0)
                }, minute: function (e) {
                    return e.seconds(0)
                }
            };
            return r.prop("disabled") || !i.ignoreReadonly && r.prop("readonly") || _ ? c : (void 0 !== r.val() && 0 !== r.val().trim().length ? K(re(r.val().trim())) : i.useCurrent && p && (r.is("input") && 0 === r.val().trim().length || i.inline) && (t = L(), "string" == typeof i.useCurrent && (t = n[i.useCurrent](t)), K(t)), _ = j(), O(), N(), _.find(".timepicker-hours").hide(), _.find(".timepicker-minutes").hide(), _.find(".timepicker-seconds").hide(), Q(), F(), e(window).on("resize", P), _.on("click", "[data-action]", ie), _.on("mousedown", !1), m && m.hasClass("btn") && m.toggleClass("active"), _.show(), P(), i.focusOnShow && !r.is(":focus") && r.focus(), E({type: "dp.show"}), c)
        }, se = function () {
            return _ ? ee() : ae()
        }, re = function (e) {
            return e = void 0 === i.parseInputDate ? t.isMoment(e) || e instanceof Date ? t(e) : L(e) : i.parseInputDate(e), e.locale(i.locale), e
        }, oe = function (e) {
            var t, n, a, s, r = null, o = [], d = {}, l = e.which, u = "p";
            b[l] = u;
            for (t in b)b.hasOwnProperty(t) && b[t] === u && (o.push(t), parseInt(t, 10) !== l && (d[t] = !0));
            for (t in i.keyBinds)if (i.keyBinds.hasOwnProperty(t) && "function" == typeof i.keyBinds[t] && (a = t.split(" "), a.length === o.length && w[l] === a[a.length - 1])) {
                for (s = !0, n = a.length - 2; n >= 0; n--)if (!(w[a[n]] in d)) {
                    s = !1;
                    break
                }
                if (s) {
                    r = i.keyBinds[t];
                    break
                }
            }
            r && (r.call(c, _), e.stopPropagation(), e.preventDefault())
        }, de = function (e) {
            b[e.which] = "r", e.stopPropagation(), e.preventDefault()
        }, le = function (t) {
            var n = e(t.target).val().trim(), i = n ? re(n) : null;
            return K(i), t.stopImmediatePropagation(), !1
        }, ue = function () {
            r.on({
                change: le,
                blur: i.debug ? "" : ee,
                keydown: oe,
                keyup: de,
                focus: i.allowInputToggle ? ae : ""
            }), n.is("input") ? r.on({focus: ae}) : m && (m.on("click", se), m.on("mousedown", !1))
        }, ce = function () {
            r.off({
                change: le,
                blur: blur,
                keydown: oe,
                keyup: de,
                focus: i.allowInputToggle ? ee : ""
            }), n.is("input") ? r.off({focus: ae}) : m && (m.off("click", se), m.off("mousedown", !1))
        }, pe = function (t) {
            var n = {};
            return e.each(t, function () {
                var e = re(this);
                e.isValid() && (n[e.format("YYYY-MM-DD")] = !0)
            }), Object.keys(n).length ? n : !1
        }, me = function (t) {
            var n = {};
            return e.each(t, function () {
                n[this] = !0
            }), Object.keys(n).length ? n : !1
        }, _e = function () {
            var e = i.format || "L LT";
            d = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (e) {
                var t = a.localeData().longDateFormat(e) || e;
                return t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (e) {
                    return a.localeData().longDateFormat(e) || e
                })
            }), l = i.extraFormats ? i.extraFormats.slice() : [], l.indexOf(e) < 0 && l.indexOf(d) < 0 && l.push(d), o = d.toLowerCase().indexOf("a") < 1 && d.replace(/\[.*?\]/g, "").indexOf("h") < 1, k("y") && (h = 2), k("M") && (h = 1), k("d") && (h = 0), u = Math.max(h, u), p || K(a)
        };
        if (c.destroy = function () {
                ee(), ce(), n.removeData("DateTimePicker"), n.removeData("date")
            }, c.toggle = se, c.show = ae, c.hide = ee, c.disable = function () {
                return ee(), m && m.hasClass("btn") && m.addClass("disabled"), r.prop("disabled", !0), c
            }, c.enable = function () {
                return m && m.hasClass("btn") && m.removeClass("disabled"), r.prop("disabled", !1), c
            }, c.ignoreReadonly = function (e) {
                if (0 === arguments.length)return i.ignoreReadonly;
                if ("boolean" != typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter");
                return i.ignoreReadonly = e, c
            }, c.options = function (t) {
                if (0 === arguments.length)return e.extend(!0, {}, i);
                if (!(t instanceof Object))throw new TypeError("options() options parameter should be an object");
                return e.extend(!0, i, t), e.each(i, function (e, t) {
                    if (void 0 === c[e])throw new TypeError("option " + e + " is not recognized!");
                    c[e](t)
                }), c
            }, c.date = function (e) {
                if (0 === arguments.length)return p ? null : a.clone();
                if (!(null === e || "string" == typeof e || t.isMoment(e) || e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                return K(null === e ? null : re(e)), c
            }, c.format = function (e) {
                if (0 === arguments.length)return i.format;
                if ("string" != typeof e && ("boolean" != typeof e || e !== !1))throw new TypeError("format() expects a sting or boolean:false parameter " + e);
                return i.format = e, d && _e(), c
            }, c.timeZone = function (e) {
                return 0 === arguments.length ? i.timeZone : (i.timeZone = e, c)
            }, c.dayViewHeaderFormat = function (e) {
                if (0 === arguments.length)return i.dayViewHeaderFormat;
                if ("string" != typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                return i.dayViewHeaderFormat = e, c
            }, c.extraFormats = function (e) {
                if (0 === arguments.length)return i.extraFormats;
                if (e !== !1 && !(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");
                return i.extraFormats = e, l && _e(), c
            }, c.disabledDates = function (t) {
                if (0 === arguments.length)return i.disabledDates ? e.extend({}, i.disabledDates) : i.disabledDates;
                if (!t)return i.disabledDates = !1, Q(), c;
                if (!(t instanceof Array))throw new TypeError("disabledDates() expects an array parameter");
                return i.disabledDates = pe(t), i.enabledDates = !1, Q(), c
            }, c.enabledDates = function (t) {
                if (0 === arguments.length)return i.enabledDates ? e.extend({}, i.enabledDates) : i.enabledDates;
                if (!t)return i.enabledDates = !1, Q(), c;
                if (!(t instanceof Array))throw new TypeError("enabledDates() expects an array parameter");
                return i.enabledDates = pe(t), i.disabledDates = !1, Q(), c
            }, c.daysOfWeekDisabled = function (e) {
                if (0 === arguments.length)return i.daysOfWeekDisabled.splice(0);
                if ("boolean" == typeof e && !e)return i.daysOfWeekDisabled = !1, Q(), c;
                if (!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                if (i.daysOfWeekDisabled = e.reduce(function (e, t) {
                        return t = parseInt(t, 10), t > 6 || 0 > t || isNaN(t) ? e : (-1 === e.indexOf(t) && e.push(t), e)
                    }, []).sort(), i.useCurrent && !i.keepInvalid) {
                    for (var t = 0; !R(a, "d");) {
                        if (a.add(1, "d"), 7 === t)throw"Tried 7 times to find a valid date";
                        t++
                    }
                    K(a)
                }
                return Q(), c
            }, c.maxDate = function (e) {
                if (0 === arguments.length)return i.maxDate ? i.maxDate.clone() : i.maxDate;
                if ("boolean" == typeof e && e === !1)return i.maxDate = !1, Q(), c;
                "string" == typeof e && ("now" === e || "moment" === e) && (e = L());
                var t = re(e);
                if (!t.isValid())throw new TypeError("maxDate() Could not parse date parameter: " + e);
                if (i.minDate && t.isBefore(i.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: " + t.format(d));
                return i.maxDate = t, i.useCurrent && !i.keepInvalid && a.isAfter(e) && K(i.maxDate), s.isAfter(t) && (s = t.clone().subtract(i.stepping, "m")), Q(), c
            }, c.minDate = function (e) {
                if (0 === arguments.length)return i.minDate ? i.minDate.clone() : i.minDate;
                if ("boolean" == typeof e && e === !1)return i.minDate = !1, Q(), c;
                "string" == typeof e && ("now" === e || "moment" === e) && (e = L());
                var t = re(e);
                if (!t.isValid())throw new TypeError("minDate() Could not parse date parameter: " + e);
                if (i.maxDate && t.isAfter(i.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: " + t.format(d));
                return i.minDate = t, i.useCurrent && !i.keepInvalid && a.isBefore(e) && K(i.minDate), s.isBefore(t) && (s = t.clone().add(i.stepping, "m")), Q(), c
            }, c.defaultDate = function (e) {
                if (0 === arguments.length)return i.defaultDate ? i.defaultDate.clone() : i.defaultDate;
                if (!e)return i.defaultDate = !1, c;
                "string" == typeof e && ("now" === e || "moment" === e) && (e = L());
                var t = re(e);
                if (!t.isValid())throw new TypeError("defaultDate() Could not parse date parameter: " + e);
                if (!R(t))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                return i.defaultDate = t, (i.defaultDate && i.inline || "" === r.val().trim()) && K(i.defaultDate), c
            }, c.locale = function (e) {
                if (0 === arguments.length)return i.locale;
                if (!t.localeData(e))throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
                return i.locale = e, a.locale(i.locale), s.locale(i.locale), d && _e(), _ && (ee(), ae()), c
            }, c.stepping = function (e) {
                return 0 === arguments.length ? i.stepping : (e = parseInt(e, 10), (isNaN(e) || 1 > e) && (e = 1), i.stepping = e, c)
            }, c.useCurrent = function (e) {
                var t = ["year", "month", "day", "hour", "minute"];
                if (0 === arguments.length)return i.useCurrent;
                if ("boolean" != typeof e && "string" != typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter");
                if ("string" == typeof e && -1 === t.indexOf(e.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of " + t.join(", "));
                return i.useCurrent = e, c
            }, c.collapse = function (e) {
                if (0 === arguments.length)return i.collapse;
                if ("boolean" != typeof e)throw new TypeError("collapse() expects a boolean parameter");
                return i.collapse === e ? c : (i.collapse = e, _ && (ee(), ae()), c)
            }, c.icons = function (t) {
                if (0 === arguments.length)return e.extend({}, i.icons);
                if (!(t instanceof Object))throw new TypeError("icons() expects parameter to be an Object");
                return e.extend(i.icons, t), _ && (ee(), ae()), c
            }, c.tooltips = function (t) {
                if (0 === arguments.length)return e.extend({}, i.tooltips);
                if (!(t instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");
                return e.extend(i.tooltips, t), _ && (ee(), ae()), c
            }, c.useStrict = function (e) {
                if (0 === arguments.length)return i.useStrict;
                if ("boolean" != typeof e)throw new TypeError("useStrict() expects a boolean parameter");
                return i.useStrict = e, c
            }, c.sideBySide = function (e) {
                if (0 === arguments.length)return i.sideBySide;
                if ("boolean" != typeof e)throw new TypeError("sideBySide() expects a boolean parameter");
                return i.sideBySide = e, _ && (ee(), ae()), c
            }, c.viewMode = function (e) {
                if (0 === arguments.length)return i.viewMode;
                if ("string" != typeof e)throw new TypeError("viewMode() expects a string parameter");
                if (-1 === g.indexOf(e))throw new TypeError("viewMode() parameter must be one of (" + g.join(", ") + ") value");
                return i.viewMode = e, u = Math.max(g.indexOf(e), h), F(), c
            }, c.toolbarPlacement = function (e) {
                if (0 === arguments.length)return i.toolbarPlacement;
                if ("string" != typeof e)throw new TypeError("toolbarPlacement() expects a string parameter");
                if (-1 === M.indexOf(e))throw new TypeError("toolbarPlacement() parameter must be one of (" + M.join(", ") + ") value");
                return i.toolbarPlacement = e, _ && (ee(), ae()), c
            }, c.widgetPositioning = function (t) {
                if (0 === arguments.length)return e.extend({}, i.widgetPositioning);
                if ("[object Object]" !== {}.toString.call(t))throw new TypeError("widgetPositioning() expects an object variable");
                if (t.horizontal) {
                    if ("string" != typeof t.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");
                    if (t.horizontal = t.horizontal.toLowerCase(), -1 === v.indexOf(t.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + v.join(", ") + ")");
                    i.widgetPositioning.horizontal = t.horizontal
                }
                if (t.vertical) {
                    if ("string" != typeof t.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");
                    if (t.vertical = t.vertical.toLowerCase(), -1 === y.indexOf(t.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + y.join(", ") + ")");
                    i.widgetPositioning.vertical = t.vertical
                }
                return Q(), c
            }, c.calendarWeeks = function (e) {
                if (0 === arguments.length)return i.calendarWeeks;
                if ("boolean" != typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                return i.calendarWeeks = e, Q(), c
            }, c.showTodayButton = function (e) {
                if (0 === arguments.length)return i.showTodayButton;
                if ("boolean" != typeof e)throw new TypeError("showTodayButton() expects a boolean parameter");
                return i.showTodayButton = e, _ && (ee(), ae()), c
            }, c.showClear = function (e) {
                if (0 === arguments.length)return i.showClear;
                if ("boolean" != typeof e)throw new TypeError("showClear() expects a boolean parameter");
                return i.showClear = e, _ && (ee(), ae()), c
            }, c.widgetParent = function (t) {
                if (0 === arguments.length)return i.widgetParent;
                if ("string" == typeof t && (t = e(t)), null !== t && "string" != typeof t && !(t instanceof e))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                return i.widgetParent = t, _ && (ee(), ae()), c
            }, c.keepOpen = function (e) {
                if (0 === arguments.length)return i.keepOpen;
                if ("boolean" != typeof e)throw new TypeError("keepOpen() expects a boolean parameter");
                return i.keepOpen = e, c
            }, c.focusOnShow = function (e) {
                if (0 === arguments.length)return i.focusOnShow;
                if ("boolean" != typeof e)throw new TypeError("focusOnShow() expects a boolean parameter");
                return i.focusOnShow = e, c
            }, c.inline = function (e) {
                if (0 === arguments.length)return i.inline;
                if ("boolean" != typeof e)throw new TypeError("inline() expects a boolean parameter");
                return i.inline = e, c
            }, c.clear = function () {
                return te(), c
            }, c.keyBinds = function (e) {
                return i.keyBinds = e, c
            }, c.getMoment = function (e) {
                return L(e)
            }, c.debug = function (e) {
                if ("boolean" != typeof e)throw new TypeError("debug() expects a boolean parameter");
                return i.debug = e, c
            }, c.allowInputToggle = function (e) {
                if (0 === arguments.length)return i.allowInputToggle;
                if ("boolean" != typeof e)throw new TypeError("allowInputToggle() expects a boolean parameter");
                return i.allowInputToggle = e, c
            }, c.showClose = function (e) {
                if (0 === arguments.length)return i.showClose;
                if ("boolean" != typeof e)throw new TypeError("showClose() expects a boolean parameter");
                return i.showClose = e, c
            }, c.keepInvalid = function (e) {
                if (0 === arguments.length)return i.keepInvalid;
                if ("boolean" != typeof e)throw new TypeError("keepInvalid() expects a boolean parameter");
                return i.keepInvalid = e, c
            }, c.datepickerInput = function (e) {
                if (0 === arguments.length)return i.datepickerInput;
                if ("string" != typeof e)throw new TypeError("datepickerInput() expects a string parameter");
                return i.datepickerInput = e, c
            }, c.parseInputDate = function (e) {
                if (0 === arguments.length)return i.parseInputDate;
                if ("function" != typeof e)throw new TypeError("parseInputDate() sholud be as function");
                return i.parseInputDate = e, c
            }, c.disabledTimeIntervals = function (t) {
                if (0 === arguments.length)return i.disabledTimeIntervals ? e.extend({}, i.disabledTimeIntervals) : i.disabledTimeIntervals;
                if (!t)return i.disabledTimeIntervals = !1, Q(), c;
                if (!(t instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");
                return i.disabledTimeIntervals = t, Q(), c
            }, c.disabledHours = function (t) {
                if (0 === arguments.length)return i.disabledHours ? e.extend({}, i.disabledHours) : i.disabledHours;
                if (!t)return i.disabledHours = !1, Q(), c;
                if (!(t instanceof Array))throw new TypeError("disabledHours() expects an array parameter");
                if (i.disabledHours = me(t), i.enabledHours = !1, i.useCurrent && !i.keepInvalid) {
                    for (var n = 0; !R(a, "h");) {
                        if (a.add(1, "h"), 24 === n)throw"Tried 24 times to find a valid date";
                        n++
                    }
                    K(a)
                }
                return Q(), c
            }, c.enabledHours = function (t) {
                if (0 === arguments.length)return i.enabledHours ? e.extend({}, i.enabledHours) : i.enabledHours;
                if (!t)return i.enabledHours = !1, Q(), c;
                if (!(t instanceof Array))throw new TypeError("enabledHours() expects an array parameter");
                if (i.enabledHours = me(t), i.disabledHours = !1, i.useCurrent && !i.keepInvalid) {
                    for (var n = 0; !R(a, "h");) {
                        if (a.add(1, "h"), 24 === n)throw"Tried 24 times to find a valid date";
                        n++
                    }
                    K(a)
                }
                return Q(), c
            }, c.viewDate = function (e) {
                if (0 === arguments.length)return s.clone();
                if (!e)return s = a.clone(), c;
                if (!("string" == typeof e || t.isMoment(e) || e instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
                return s = re(e), A(), c
            }, n.is("input"))r = n; else if (r = n.find(i.datepickerInput), 0 === r.size())r = n.find("input"); else if (!r.is("input"))throw new Error('CSS class "' + i.datepickerInput + '" cannot be applied to non input element');
        if (n.hasClass("input-group") && (m = 0 === n.find(".datepickerbutton").size() ? n.find(".input-group-addon") : n.find(".datepickerbutton")), !i.inline && !r.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");
        return a = L(), s = a.clone(), e.extend(!0, i, C()), c.options(i), _e(), ue(), r.prop("disabled") && c.disable(), r.is("input") && 0 !== r.val().trim().length ? K(re(r.val().trim())) : i.defaultDate && void 0 === r.attr("placeholder") && K(i.defaultDate), i.inline && ae(), c
    };
    e.fn.datetimepicker = function (t) {
        return this.each(function () {
            var i = e(this);
            i.data("DateTimePicker") || (t = e.extend(!0, {}, e.fn.datetimepicker.defaults, t), i.data("DateTimePicker", n(i, t)))
        })
    }, e.fn.datetimepicker.defaults = {
        timeZone: "Etc/UTC",
        format: !1,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: !1,
        stepping: 1,
        minDate: !1,
        maxDate: !1,
        useCurrent: !0,
        collapse: !0,
        locale: t.locale(),
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down",
            previous: "glyphicon glyphicon-chevron-left",
            next: "glyphicon glyphicon-chevron-right",
            today: "glyphicon glyphicon-screenshot",
            clear: "glyphicon glyphicon-trash",
            close: "glyphicon glyphicon-remove"
        },
        tooltips: {
            today: "Go to today",
            clear: "Clear selection",
            close: "Close the picker",
            selectMonth: "Select Month",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            selectYear: "Select Year",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            selectDecade: "Select Decade",
            prevDecade: "Previous Decade",
            nextDecade: "Next Decade",
            prevCentury: "Previous Century",
            nextCentury: "Next Century",
            pickHour: "Pick Hour",
            incrementHour: "Increment Hour",
            decrementHour: "Decrement Hour",
            pickMinute: "Pick Minute",
            incrementMinute: "Increment Minute",
            decrementMinute: "Decrement Minute",
            pickSecond: "Pick Second",
            incrementSecond: "Increment Second",
            decrementSecond: "Decrement Second",
            togglePeriod: "Toggle Period",
            selectTime: "Select Time"
        },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: !1,
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: {horizontal: "auto", vertical: "auto"},
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        focusOnShow: !0,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function (e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(7, "d")) : this.date(t.clone().add(this.stepping(), "m"))
                }
            }, down: function (e) {
                if (!e)return void this.show();
                var t = this.date() || this.getMoment();
                e.find(".datepicker").is(":visible") ? this.date(t.clone().add(7, "d")) : this.date(t.clone().subtract(this.stepping(), "m"))
            }, "control up": function (e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(1, "y")) : this.date(t.clone().add(1, "h"))
                }
            }, "control down": function (e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") ? this.date(t.clone().add(1, "y")) : this.date(t.clone().subtract(1, "h"))
                }
            }, left: function (e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "d"))
                }
            }, right: function (e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "d"))
                }
            }, pageUp: function (e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "M"))
                }
            }, pageDown: function (e) {
                if (e) {
                    var t = this.date() || this.getMoment();
                    e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "M"))
                }
            }, enter: function () {
                this.hide()
            }, escape: function () {
                this.hide()
            }, "control space": function (e) {
                e.find(".timepicker").is(":visible") && e.find('.btn[data-action="togglePeriod"]').click()
            }, t: function () {
                this.date(this.getMoment())
            }, "delete": function () {
                this.clear()
            }
        },
        debug: !1,
        allowInputToggle: !1,
        disabledTimeIntervals: !1,
        disabledHours: !1,
        enabledHours: !1,
        viewDate: !1
    }
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
    function t(t) {
        var r = t || window.event, o = d.call(arguments, 1), l = 0, c = 0, p = 0, m = 0, _ = 0, h = 0;
        if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (p = -1 * r.detail), "wheelDelta" in r && (p = r.wheelDelta), "wheelDeltaY" in r && (p = r.wheelDeltaY), "wheelDeltaX" in r && (c = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (c = -1 * p, p = 0), l = 0 === p ? c : p, "deltaY" in r && (p = -1 * r.deltaY, l = p), "deltaX" in r && (c = r.deltaX, 0 === p && (l = -1 * c)), 0 !== p || 0 !== c) {
            if (1 === r.deltaMode) {
                var f = e.data(this, "mousewheel-line-height");
                l *= f, p *= f, c *= f
            } else if (2 === r.deltaMode) {
                var g = e.data(this, "mousewheel-page-height");
                l *= g, p *= g, c *= g
            }
            if (m = Math.max(Math.abs(p), Math.abs(c)), (!s || s > m) && (s = m, i(r, m) && (s /= 40)), i(r, m) && (l /= 40, c /= 40, p /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / s), c = Math[c >= 1 ? "floor" : "ceil"](c / s), p = Math[p >= 1 ? "floor" : "ceil"](p / s), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var y = this.getBoundingClientRect();
                _ = t.clientX - y.left, h = t.clientY - y.top
            }
            return t.deltaX = c, t.deltaY = p, t.deltaFactor = s, t.offsetX = _, t.offsetY = h, t.deltaMode = 0, o.unshift(t, l, c, p), a && clearTimeout(a), a = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, o)
        }
    }

    function n() {
        s = null
    }

    function i(e, t) {
        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }

    var a, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], o = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], d = Array.prototype.slice;
    if (e.event.fixHooks)for (var l = r.length; l;)e.event.fixHooks[r[--l]] = e.event.mouseHooks;
    var u = e.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener)for (var n = o.length; n;)this.addEventListener(o[--n], t, !1); else this.onmousewheel = t;
            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)for (var n = o.length; n;)this.removeEventListener(o[--n], t, !1); else this.onmousewheel = null;
            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (t) {
            var n = e(t), i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
        }, getPageHeight: function (t) {
            return e(t).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    e.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
}), !function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    e.fn.jScrollPane = function (t) {
        function n(t, n) {
            function i(n) {
                var s, o, l, u, c, _, h = !1, f = !1;
                if (I = n, void 0 === z)c = t.scrollTop(), _ = t.scrollLeft(), t.css({
                    overflow: "hidden",
                    padding: 0
                }), $ = t.innerWidth() + ge, R = t.innerHeight(), t.width($), z = e('<div class="jspPane" />').css("padding", fe).append(t.children()), N = e('<div class="jspContainer" />').css({
                    width: $ + "px",
                    height: R + "px"
                }).append(z).appendTo(t); else {
                    if (t.css("width", ""), h = I.stickToBottom && D(), f = I.stickToRight && T(), u = t.innerWidth() + ge != $ || t.outerHeight() != R, u && ($ = t.innerWidth() + ge, R = t.innerHeight(), N.css({
                            width: $ + "px",
                            height: R + "px"
                        })), !u && ye == B && z.outerHeight() == U)return void t.width($);
                    ye = B, z.css("width", ""), t.width($), N.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                z.css("overflow", "auto"), B = n.contentWidth ? n.contentWidth : z[0].scrollWidth, U = z[0].scrollHeight, z.css("overflow", ""), q = B / $, V = U / R, G = V > 1, J = q > 1, J || G ? (t.addClass("jspScrollable"), s = I.maintainPosition && (Q || te), s && (o = k(), l = Y()), a(), r(), d(), s && (b(f ? B - $ : o, !1), w(h ? U - R : l, !1)), j(), S(), O(), I.enableKeyboardNavigation && P(), I.clickOnTrack && p(), A(), I.hijackInternalLinks && F()) : (t.removeClass("jspScrollable"), z.css({
                    top: 0,
                    left: 0,
                    width: N.width() - ge
                }), x(), C(), E(), m()), I.autoReinitialise && !he ? he = setInterval(function () {
                    i(I)
                }, I.autoReinitialiseDelay) : !I.autoReinitialise && he && clearInterval(he), c && t.scrollTop(0) && w(c, !1), _ && t.scrollLeft(0) && b(_, !1), t.trigger("jsp-initialised", [J || G])
            }

            function a() {
                G && (N.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), ne = N.find(">.jspVerticalBar"), ie = ne.find(">.jspTrack"), X = ie.find(">.jspDrag"), I.showArrows && (oe = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", u(0, -1)).bind("click.jsp", H), de = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", u(0, 1)).bind("click.jsp", H), I.arrowScrollOnHover && (oe.bind("mouseover.jsp", u(0, -1, oe)), de.bind("mouseover.jsp", u(0, 1, de))), l(ie, I.verticalArrowPositions, oe, de)), se = R, N.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    se -= e(this).outerHeight()
                }), X.hover(function () {
                    X.addClass("jspHover")
                }, function () {
                    X.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", H), X.addClass("jspActive");
                    var n = t.pageY - X.position().top;
                    return e("html").bind("mousemove.jsp", function (e) {
                        h(e.pageY - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", _), !1
                }), s())
            }

            function s() {
                ie.height(se + "px"), Q = 0, ae = I.verticalGutter + ie.outerWidth(), z.width($ - ae - ge);
                try {
                    0 === ne.position().left && z.css("margin-left", ae + "px")
                } catch (e) {
                }
            }

            function r() {
                J && (N.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), le = N.find(">.jspHorizontalBar"), ue = le.find(">.jspTrack"), K = ue.find(">.jspDrag"), I.showArrows && (me = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", u(-1, 0)).bind("click.jsp", H), _e = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", u(1, 0)).bind("click.jsp", H), I.arrowScrollOnHover && (me.bind("mouseover.jsp", u(-1, 0, me)), _e.bind("mouseover.jsp", u(1, 0, _e))), l(ue, I.horizontalArrowPositions, me, _e)), K.hover(function () {
                    K.addClass("jspHover")
                }, function () {
                    K.removeClass("jspHover")
                }).bind("mousedown.jsp", function (t) {
                    e("html").bind("dragstart.jsp selectstart.jsp", H), K.addClass("jspActive");
                    var n = t.pageX - K.position().left;
                    return e("html").bind("mousemove.jsp", function (e) {
                        g(e.pageX - n, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", _), !1
                }), ce = N.innerWidth(), o())
            }

            function o() {
                N.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    ce -= e(this).outerWidth()
                }), ue.width(ce + "px"), te = 0
            }

            function d() {
                if (J && G) {
                    var t = ue.outerHeight(), n = ie.outerWidth();
                    se -= t, e(le).find(">.jspCap:visible,>.jspArrow").each(function () {
                        ce += e(this).outerWidth()
                    }), ce -= n, R -= n, $ -= t, ue.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), s(), o()
                }
                J && z.width(N.outerWidth() - ge + "px"), U = z.outerHeight(), V = U / R, J && (pe = Math.ceil(1 / q * ce), pe > I.horizontalDragMaxWidth ? pe = I.horizontalDragMaxWidth : pe < I.horizontalDragMinWidth && (pe = I.horizontalDragMinWidth), K.width(pe + "px"), ee = ce - pe, y(te)), G && (re = Math.ceil(1 / V * se), re > I.verticalDragMaxHeight ? re = I.verticalDragMaxHeight : re < I.verticalDragMinHeight && (re = I.verticalDragMinHeight), X.height(re + "px"), Z = se - re, f(Q))
            }

            function l(e, t, n, i) {
                var a, s = "before", r = "after";
                "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == s ? r = t : t == r && (s = t, a = n, n = i, i = a), e[s](n)[r](i)
            }

            function u(e, t, n) {
                return function () {
                    return c(e, t, this, n), this.blur(), !1
                }
            }

            function c(t, n, i, a) {
                i = e(i).addClass("jspActive");
                var s, r, o = !0, d = function () {
                    0 !== t && ve.scrollByX(t * I.arrowButtonSpeed), 0 !== n && ve.scrollByY(n * I.arrowButtonSpeed), r = setTimeout(d, o ? I.initialDelay : I.arrowRepeatFreq), o = !1
                };
                d(), s = a ? "mouseout.jsp" : "mouseup.jsp", a = a || e("html"), a.bind(s, function () {
                    i.removeClass("jspActive"), r && clearTimeout(r), r = null, a.unbind(s)
                })
            }

            function p() {
                m(), G && ie.bind("mousedown.jsp", function (t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this), a = i.offset(), s = t.pageY - a.top - Q, r = !0, o = function () {
                            var e = i.offset(), a = t.pageY - e.top - re / 2, l = R * I.scrollPagePercent, u = Z * l / (U - R);
                            if (0 > s)Q - u > a ? ve.scrollByY(-l) : h(a); else {
                                if (!(s > 0))return void d();
                                a > Q + u ? ve.scrollByY(l) : h(a)
                            }
                            n = setTimeout(o, r ? I.initialDelay : I.trackClickRepeatFreq), r = !1
                        }, d = function () {
                            n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", d)
                        };
                        return o(), e(document).bind("mouseup.jsp", d), !1
                    }
                }), J && ue.bind("mousedown.jsp", function (t) {
                    if (void 0 === t.originalTarget || t.originalTarget == t.currentTarget) {
                        var n, i = e(this), a = i.offset(), s = t.pageX - a.left - te, r = !0, o = function () {
                            var e = i.offset(), a = t.pageX - e.left - pe / 2, l = $ * I.scrollPagePercent, u = ee * l / (B - $);
                            if (0 > s)te - u > a ? ve.scrollByX(-l) : g(a); else {
                                if (!(s > 0))return void d();
                                a > te + u ? ve.scrollByX(l) : g(a)
                            }
                            n = setTimeout(o, r ? I.initialDelay : I.trackClickRepeatFreq), r = !1
                        }, d = function () {
                            n && clearTimeout(n), n = null, e(document).unbind("mouseup.jsp", d)
                        };
                        return o(), e(document).bind("mouseup.jsp", d), !1
                    }
                })
            }

            function m() {
                ue && ue.unbind("mousedown.jsp"), ie && ie.unbind("mousedown.jsp")
            }

            function _() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), X && X.removeClass("jspActive"), K && K.removeClass("jspActive")
            }

            function h(e, t) {
                G && (0 > e ? e = 0 : e > Z && (e = Z), void 0 === t && (t = I.animateScroll), t ? ve.animate(X, "top", e, f) : (X.css("top", e), f(e)))
            }

            function f(e) {
                void 0 === e && (e = X.position().top), N.scrollTop(0), Q = e || 0;
                var n = 0 === Q, i = Q == Z, a = e / Z, s = -a * (U - R);
                (Me != n || be != i) && (Me = n, be = i, t.trigger("jsp-arrow-change", [Me, be, we, Le])), v(n, i), z.css("top", s), t.trigger("jsp-scroll-y", [-s, n, i]).trigger("scroll")
            }

            function g(e, t) {
                J && (0 > e ? e = 0 : e > ee && (e = ee), void 0 === t && (t = I.animateScroll), t ? ve.animate(K, "left", e, y) : (K.css("left", e), y(e)))
            }

            function y(e) {
                void 0 === e && (e = K.position().left), N.scrollTop(0), te = e || 0;
                var n = 0 === te, i = te == ee, a = e / ee, s = -a * (B - $);
                (we != n || Le != i) && (we = n, Le = i, t.trigger("jsp-arrow-change", [Me, be, we, Le])), M(n, i), z.css("left", s), t.trigger("jsp-scroll-x", [-s, n, i]).trigger("scroll")
            }

            function v(e, t) {
                I.showArrows && (oe[e ? "addClass" : "removeClass"]("jspDisabled"), de[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function M(e, t) {
                I.showArrows && (me[e ? "addClass" : "removeClass"]("jspDisabled"), _e[t ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function w(e, t) {
                var n = e / (U - R);
                h(n * Z, t)
            }

            function b(e, t) {
                var n = e / (B - $);
                g(n * ee, t)
            }

            function L(t, n, i) {
                var a, s, r, o, d, l, u, c, p, m = 0, _ = 0;
                try {
                    a = e(t)
                } catch (h) {
                    return
                }
                for (s = a.outerHeight(), r = a.outerWidth(), N.scrollTop(0), N.scrollLeft(0); !a.is(".jspPane");)if (m += a.position().top, _ += a.position().left, a = a.offsetParent(), /^body|html$/i.test(a[0].nodeName))return;
                o = Y(), l = o + R, o > m || n ? c = m - I.horizontalGutter : m + s > l && (c = m - R + s + I.horizontalGutter), isNaN(c) || w(c, i), d = k(), u = d + $, d > _ || n ? p = _ - I.horizontalGutter : _ + r > u && (p = _ - $ + r + I.horizontalGutter), isNaN(p) || b(p, i)
            }

            function k() {
                return -z.position().left
            }

            function Y() {
                return -z.position().top
            }

            function D() {
                var e = U - R;
                return e > 20 && e - Y() < 10
            }

            function T() {
                var e = B - $;
                return e > 20 && e - k() < 10
            }

            function S() {
                N.unbind(Ye).bind(Ye, function (e, t, n, i) {
                    te || (te = 0), Q || (Q = 0);
                    var a = te, s = Q, r = e.deltaFactor || I.mouseWheelSpeed;
                    return ve.scrollBy(n * r, -i * r, !1), a == te && s == Q
                })
            }

            function x() {
                N.unbind(Ye)
            }

            function H() {
                return !1
            }

            function j() {
                z.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (e) {
                    L(e.target, !1)
                })
            }

            function C() {
                z.find(":input,a").unbind("focus.jsp")
            }

            function P() {
                function n() {
                    var e = te, t = Q;
                    switch (i) {
                        case 40:
                            ve.scrollByY(I.keyboardSpeed, !1);
                            break;
                        case 38:
                            ve.scrollByY(-I.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            ve.scrollByY(R * I.scrollPagePercent, !1);
                            break;
                        case 33:
                            ve.scrollByY(-R * I.scrollPagePercent, !1);
                            break;
                        case 39:
                            ve.scrollByX(I.keyboardSpeed, !1);
                            break;
                        case 37:
                            ve.scrollByX(-I.keyboardSpeed, !1)
                    }
                    return a = e != te || t != Q
                }

                var i, a, s = [];
                J && s.push(le[0]), G && s.push(ne[0]), z.bind("focus.jsp", function () {
                    t.focus()
                }), t.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (t) {
                    if (t.target === this || s.length && e(t.target).closest(s).length) {
                        var r = te, o = Q;
                        switch (t.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                i = t.keyCode, n();
                                break;
                            case 35:
                                w(U - R), i = null;
                                break;
                            case 36:
                                w(0), i = null
                        }
                        return a = t.keyCode == i && r != te || o != Q, !a
                    }
                }).bind("keypress.jsp", function (e) {
                    return e.keyCode == i && n(), !a
                }), I.hideFocus ? (t.css("outline", "none"), "hideFocus" in N[0] && t.attr("hideFocus", !0)) : (t.css("outline", ""), "hideFocus" in N[0] && t.attr("hideFocus", !1))
            }

            function E() {
                t.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), z.unbind(".jsp")
            }

            function A() {
                if (location.hash && location.hash.length > 1) {
                    var t, n, i = escape(location.hash.substr(1));
                    try {
                        t = e("#" + i + ', a[name="' + i + '"]')
                    } catch (a) {
                        return
                    }
                    t.length && z.find(i) && (0 === N.scrollTop() ? n = setInterval(function () {
                        N.scrollTop() > 0 && (L(t, !0), e(document).scrollTop(N.position().top), clearInterval(n))
                    }, 50) : (L(t, !0), e(document).scrollTop(N.position().top)))
                }
            }

            function F() {
                e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function (t) {
                    var n, i, a, s, r, o, d = this.href.substr(0, this.href.indexOf("#")), l = location.href;
                    if (-1 !== location.href.indexOf("#") && (l = location.href.substr(0, location.href.indexOf("#"))), d === l) {
                        n = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            i = e("#" + n + ', a[name="' + n + '"]')
                        } catch (u) {
                            return
                        }
                        i.length && (a = i.closest(".jspScrollable"), s = a.data("jsp"), s.scrollToElement(i, !0), a[0].scrollIntoView && (r = e(window).scrollTop(), o = i.offset().top, (r > o || o > r + e(window).height()) && a[0].scrollIntoView()), t.preventDefault())
                    }
                }))
            }

            function O() {
                var e, t, n, i, a, s = !1;
                N.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (r) {
                    var o = r.originalEvent.touches[0];
                    e = k(), t = Y(), n = o.pageX, i = o.pageY, a = !1, s = !0
                }).bind("touchmove.jsp", function (r) {
                    if (s) {
                        var o = r.originalEvent.touches[0], d = te, l = Q;
                        return ve.scrollTo(e + n - o.pageX, t + i - o.pageY), a = a || Math.abs(n - o.pageX) > 5 || Math.abs(i - o.pageY) > 5, d == te && l == Q
                    }
                }).bind("touchend.jsp", function (e) {
                    s = !1
                }).bind("click.jsp-touchclick", function (e) {
                    return a ? (a = !1, !1) : void 0
                })
            }

            function W() {
                var e = Y(), n = k();
                t.removeClass("jspScrollable").unbind(".jsp"), z.unbind(".jsp"), t.replaceWith(ke.append(z.children())), ke.scrollTop(e), ke.scrollLeft(n), he && clearInterval(he)
            }

            var I, z, $, R, N, B, U, q, V, G, J, X, Z, Q, K, ee, te, ne, ie, ae, se, re, oe, de, le, ue, ce, pe, me, _e, he, fe, ge, ye, ve = this, Me = !0, we = !0, be = !1, Le = !1, ke = t.clone(!1, !1).empty(), Ye = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === t.css("box-sizing") ? (fe = 0, ge = 0) : (fe = t.css("paddingTop") + " " + t.css("paddingRight") + " " + t.css("paddingBottom") + " " + t.css("paddingLeft"), ge = (parseInt(t.css("paddingLeft"), 10) || 0) + (parseInt(t.css("paddingRight"), 10) || 0)), e.extend(ve, {
                reinitialise: function (t) {
                    t = e.extend({}, I, t), i(t)
                }, scrollToElement: function (e, t, n) {
                    L(e, t, n)
                }, scrollTo: function (e, t, n) {
                    b(e, n), w(t, n)
                }, scrollToX: function (e, t) {
                    b(e, t)
                }, scrollToY: function (e, t) {
                    w(e, t)
                }, scrollToPercentX: function (e, t) {
                    b(e * (B - $), t)
                }, scrollToPercentY: function (e, t) {
                    w(e * (U - R), t)
                }, scrollBy: function (e, t, n) {
                    ve.scrollByX(e, n), ve.scrollByY(t, n)
                }, scrollByX: function (e, t) {
                    var n = k() + Math[0 > e ? "floor" : "ceil"](e), i = n / (B - $);
                    g(i * ee, t)
                }, scrollByY: function (e, t) {
                    var n = Y() + Math[0 > e ? "floor" : "ceil"](e), i = n / (U - R);
                    h(i * Z, t)
                }, positionDragX: function (e, t) {
                    g(e, t)
                }, positionDragY: function (e, t) {
                    h(e, t)
                }, animate: function (e, t, n, i) {
                    var a = {};
                    a[t] = n, e.animate(a, {duration: I.animateDuration, easing: I.animateEase, queue: !1, step: i})
                }, getContentPositionX: function () {
                    return k()
                }, getContentPositionY: function () {
                    return Y()
                }, getContentWidth: function () {
                    return B
                }, getContentHeight: function () {
                    return U
                }, getPercentScrolledX: function () {
                    return k() / (B - $)
                }, getPercentScrolledY: function () {
                    return Y() / (U - R)
                }, getIsScrollableH: function () {
                    return J
                }, getIsScrollableV: function () {
                    return G
                }, getContentPane: function () {
                    return z
                }, scrollToBottom: function (e) {
                    h(Z, e);
                }, hijackInternalLinks: e.noop, destroy: function () {
                    W()
                }
            }), i(n)
        }

        return t = e.extend({}, e.fn.jScrollPane.defaults, t), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            t[this] = t[this] || t.speed
        }), this.each(function () {
            var i = e(this), a = i.data("jsp");
            a ? a.reinitialise(t) : (e("script", i).filter('[type="text/javascript"],:not([type])').remove(), a = new n(i, t), i.data("jsp", a))
        })
    }, e.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
}), !function (window, document, $, undefined) {
    function _buildRegexFromString(e) {
        function t() {
        }

        if (!e || "string" != typeof e && !(e instanceof RegExp))return t(), !1;
        "string" != typeof e && (e = e.toString());
        for (var n, i, a, s = e.charAt(0), r = e.length - 1; r > 0 && /[gimsxeU]/.test(e.charAt(r));)r--;
        e.charAt(r) !== s && (s = null), s && r !== e.length - 1 && (i = e.substr(r + 1, e.length - 1)), n = s ? e.substr(1, r - 1) : e;
        try {
            a = new RegExp(n, i)
        } catch (o) {
            return t(), !1
        }
        return a
    }

    function isEmpty(e) {
        for (var t in e)if (e.hasOwnProperty(t))return !1;
        return !0
    }

    window.Validation = {
        form: [],
        labels: {},
        hasScrolled: !1
    }, "function" != typeof Object.preventExtensions && (Object.preventExtensions = function (e) {
        return e
    });
    var _rules = {
        NOTEMPTY: /\S/,
        INTEGER: /^\d+$/,
        NUMERIC: /^\d+(?:[,\s]\d{3})*(?:\.\d+)?$/,
        MIXED: /^[\w\s-]+$/,
        NAME: /^['a-zãàáäâẽèéëêìíïîõòóöôùúüûñç\s-]+$/i,
        NOSPACE: /^(?!\s)\S*$/,
        TRIM: /^[^\s].*[^\s]$/,
        DATE: /^\d{4}-\d{2}-\d{2}(\s\d{2}:\d{2}(:\d{2})?)?$/,
        EMAIL: /^([^@]+?)@(([a-z0-9]-*)*[a-z0-9]+\.)+([a-z0-9]+)$/i,
        URL: /^(https?:\/\/)?((([a-z0-9]-*)*[a-z0-9]+\.?)*([a-z0-9]+))(\/[\w?=\.-]*)*$/,
        PHONE: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
        OPTIONAL: /\S/,
        COMPARISON: /^\s*([LV])\s*([<>]=?|==|!=)\s*([^<>=!]+?)\s*$/
    }, _messages = {
        "default": "$ contain error(s).",
        NOTEMPTY: "$ must not be empty.",
        INTEGER: "$ must be an integer.",
        NUMERIC: "$ must be numeric.",
        MIXED: "$ must be letters or numbers (no special characters).",
        NAME: "$ must not contain special characters.",
        NOSPACE: "$ must not contain spaces.",
        TRIM: "$ must not start or end with space character.",
        DATE: "$ is not a valid with format YYYY-MM-DD.",
        EMAIL: "$ is not valid.",
        URL: "$ is not valid.",
        PHONE: "$ is not a valid phone number.",
        "<": "$ must be less than % characters.",
        "<=": "$ must be less or equal to % characters.",
        ">": "$ must be greater than % characters.",
        ">=": "$ must be greater or equal to % characters.",
        "==": "$ must be equal to %",
        "!=": "$ must be different than %"
    }, _data = {
        validation: "data-validation",
        validationMessage: "data-validation-message",
        regex: "data-validation-regex",
        regexReverse: "data-validation-regex-reverse",
        regexMessage: "data-validation-regex-message",
        group: "data-validation-group",
        label: "data-validation-label",
        errorList: "data-error-list"
    }, _options = {
        submit: {
            settings: {
                form: null,
                display: "inline",
                insertion: "append",
                allErrors: !1,
                trigger: "click",
                button: "[type='submit']",
                errorClass: "error",
                errorListClass: "error-list",
                errorListContainer: null,
                inputContainer: null,
                clear: "focusin",
                scrollToError: !1
            },
            callback: {
                onInit: null,
                onValidate: null,
                onError: null,
                onBeforeSubmit: null,
                onSubmit: null,
                onAfterSubmit: null
            }
        },
        dynamic: {settings: {trigger: null, delay: 300}, callback: {onSuccess: null, onError: null, onComplete: null}},
        rules: {},
        messages: {},
        labels: {},
        debug: !1
    }, _supported = {
        submit: {
            settings: {
                display: ["inline", "block"],
                insertion: ["append", "prepend"],
                allErrors: [!0, !1],
                clear: ["focusin", "keypress", !1],
                trigger: ["click", "dblclick", "focusout", "hover", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "toggle"]
            }
        }, dynamic: {settings: {trigger: ["focusout", "keydown", "keypress", "keyup"]}}, debug: [!0, !1]
    }, Validation = function (node, options) {
        function extendRules() {
            options.rules = $.extend(!0, {}, _rules, options.rules)
        }

        function extendMessages() {
            options.messages = $.extend(!0, {}, _messages, options.messages)
        }

        function extendOptions() {
            options instanceof Object || (options = {});
            var e = Object.preventExtensions($.extend(!0, {}, _options));
            for (var t in options)if (options.hasOwnProperty(t) && "debug" !== t)if (~["labels", "messages", "rules"].indexOf(t) && options[t] instanceof Object)e[t] = options[t]; else if (_options[t] && options[t] instanceof Object)for (var n in options[t])if (options[t].hasOwnProperty(n) && _options[t][n] && options[t][n] instanceof Object) {
                for (var i in options[t][n])options[t][n].hasOwnProperty(i) && _supported[t] && _supported[t][n] && _supported[t][n][i] && -1 === $.inArray(options[t][n][i], _supported[t][n][i]) && delete options[t][n][i];
                e[t] && e[t][n] && (e[t][n] = $.extend(Object.preventExtensions(e[t][n]), options[t][n]))
            }
            e.dynamic.settings.trigger && "keypress" === e.dynamic.settings.trigger && "keypress" === e.submit.settings.clear && (e.dynamic.settings.trigger = "keydown"), options = e
        }

        function delegateDynamicValidation() {
            if (!options.dynamic.settings.trigger)return !1;
            if (!node.find("[" + _data.validation + "],[" + _data.regex + "]")[0])return !1;
            var e = options.dynamic.settings.trigger + delegateSuffix;
            "focusout" !== options.dynamic.settings.trigger && (e += " change" + delegateSuffix + " paste" + delegateSuffix), $.each(node.find("[" + _data.validation + "],[" + _data.regex + "]"), function (t, n) {
                $(n).unbind(e).on(e, function (e) {
                    if ($(this).is(":disabled"))return !1;
                    var t = this, n = e.keyCode || null;
                    _typeWatch(function () {
                        validateInput(t) ? _executeCallback(options.dynamic.callback.onSuccess, [node, t, n]) : (displayOneError(t.name), _executeCallback(options.dynamic.callback.onError, [node, t, n, errors[t.name]])), _executeCallback(options.dynamic.callback.onComplete, [node, t, n])
                    }, options.dynamic.settings.delay)
                })
            })
        }

        function delegateValidation() {
            _executeCallback(options.submit.callback.onInit, [node]);
            var e = options.submit.settings.trigger + ".vd";
            return node.find(options.submit.settings.button)[0] ? (node.on("submit", !1), void node.find(options.submit.settings.button).off(".vd").on(e, function (e) {
                return e.preventDefault(), resetErrors(), _executeCallback(options.submit.callback.onValidate, [node]), validateForm() ? (_executeCallback(options.submit.callback.onBeforeSubmit, [node]), options.submit.callback.onSubmit ? _executeCallback(options.submit.callback.onSubmit, [node, formData]) : submitForm(), _executeCallback(options.submit.callback.onAfterSubmit, [node])) : (displayErrors(), _executeCallback(options.submit.callback.onError, [node, errors, formData])), !1
            })) : !1
        }

        function validateForm() {
            var e = isEmpty(errors);
            return formData = {}, $.each(node.find('input:not([type="submit"]), select, textarea').not(":disabled"), function (t, n) {
                n = $(n);
                var i = _getInputValue(n[0]), a = n.attr("name");
                a && (/\[]$/.test(a) ? (a = a.replace(/\[]$/, ""), formData[a] instanceof Array || (formData[a] = []), formData[a].push(i)) : formData[a] = i), (n.attr(_data.validation) || n.attr(_data.regex)) && (validateInput(n[0], i) || (e = !1))
            }), prepareFormData(), e
        }

        function prepareFormData() {
            var e, t, n = {};
            for (var i in formData)if (formData.hasOwnProperty(i)) {
                t = 0, e = i.split(/\[(.+?)]/g);
                for (var a = {}, s = [], r = e.length - 1; r >= 0; r--)"" !== e[r] ? (s.length < 1 ? a[e[r]] = Number(formData[i]) || formData[i] : (a = {}, a[e[r]] = s[s.length - 1]), s.push(a)) : e.splice(r, 1);
                n = $.extend(!0, n, a)
            }
            formData = n
        }

        function validateInput(e, t) {
            var n = $(e).attr("name"), t = t || _getInputValue(e);
            if (!n)return !1;
            var i = n.replace(/]$/, "").split(/]\[|[[\]]/g), a = window.Validation.labels[n] || options.labels[n] || $(e).attr(_data.label) || i[i.length - 1], s = $(e).attr(_data.validation), r = $(e).attr(_data.validationMessage), o = $(e).attr(_data.regex), d = !($(e).attr(_data.regexReverse) === undefined), l = $(e).attr(_data.regexMessage), u = !1;
            if (s && (s = _api._splitValidation(s)), s instanceof Array && s.length > 0) {
                if ("" === $.trim(t) && ~s.indexOf("OPTIONAL"))return !0;
                $.each(s, function (e, i) {
                    if (u === !0)return !0;
                    try {
                        validateRule(t, i)
                    } catch (s) {
                        (r || !options.submit.settings.allErrors) && (u = !0), s[0] = r || s[0], registerError(n, s[0].replace("$", a).replace("%", s[1]))
                    }
                })
            }
            if (o) {
                var c = _buildRegexFromString(o);
                if (!(c instanceof RegExp))return !0;
                try {
                    validateRule(t, c, d)
                } catch (p) {
                    p[0] = l || p[0], registerError(n, p[0].replace("$", a))
                }
            }
            return !errors[n] || errors[n] instanceof Array && 0 === errors[n].length
        }

        function validateRule(value, rule, reversed) {
            if (rule instanceof RegExp) {
                var isValid = rule.test(value);
                if (reversed && (isValid = !isValid), !isValid)throw[options.messages["default"], ""]
            } else if (options.rules[rule]) {
                if (!options.rules[rule].test(value))throw[options.messages[rule], ""]
            } else {
                var comparison = rule.match(options.rules.COMPARISON);
                if (comparison && 4 === comparison.length) {
                    var type = comparison[1], operator = comparison[2], compared = comparison[3], comparedValue;
                    switch (type) {
                        case"L":
                            if (isNaN(compared))return !1;
                            if (!value || eval(value.length + operator + parseFloat(compared)) === !1)throw[options.messages[operator], compared];
                            break;
                        case"V":
                        default:
                            if (isNaN(compared)) {
                                if (comparedValue = node.find('[name="' + compared + '"]').val(), !comparedValue)return !1;
                                if (!value || !eval('"' + encodeURIComponent(value) + '"' + operator + '"' + encodeURIComponent(comparedValue) + '"'))throw[options.messages[operator].replace(" characters", ""), compared]
                            } else if (!value || isNaN(value) || !eval(value + operator + parseFloat(compared)))throw[options.messages[operator].replace(" characters", ""), compared]
                    }
                }
            }
        }

        function registerError(e, t) {
            errors[e] || (errors[e] = []), t = t.capitalize();
            for (var n = !1, i = 0; i < errors[e].length; i++)if (errors[e][i] === t) {
                n = !0;
                break
            }
            n || errors[e].push(t)
        }

        function displayOneError(e) {
            var t, n, i, a, s, r, o = '<div class="' + options.submit.settings.errorListClass + '" ' + _data.errorList + "><ul></ul></div>";
            if (!errors.hasOwnProperty(e))return !1;
            if (t = node.find('[name="' + e + '"]'), a = null, !t[0])return !1;
            if (s = t.attr(_data.group), s ? (r = node.find('[name="' + e + '"]'), a = node.find('[id="' + s + '"]'), a[0] && (a.addClass(options.submit.settings.errorClass), i = a)) : (t.addClass(options.submit.settings.errorClass), options.submit.settings.inputContainer && t.parentsUntil(node, options.submit.settings.inputContainer).addClass(options.submit.settings.errorClass), n = t.attr("id"), n && (a = node.find('label[for="' + n + '"]')[0]), a || (a = t.parentsUntil(node, "label")[0]), a && (a = $(a), a.addClass(options.submit.settings.errorClass))), "inline" === options.submit.settings.display ? i = options.submit.settings.errorListContainer ? t.parentsUntil(node, options.submit.settings.errorListContainer) : i || t.parent() : "block" === options.submit.settings.display && (i = node), "inline" === options.submit.settings.display && i.find("[" + _data.errorList + "]")[0])return !1;
            ("inline" === options.submit.settings.display || "block" === options.submit.settings.display && !i.find("[" + _data.errorList + "]")[0]) && ("append" === options.submit.settings.insertion ? i.append(o) : "prepend" === options.submit.settings.insertion && i.prepend(o));
            for (var d = 0; d < errors[e].length; d++)i.find("[" + _data.errorList + "] ul").append("<li>" + errors[e][d] + "</li>");
            if (options.submit.settings.clear || options.dynamic.settings.trigger) {
                s && r && (t = r);
                var l = "coucou" + resetSuffix;
                options.submit.settings.clear && (l += " " + options.submit.settings.clear + resetSuffix, ~["radio", "checkbox"].indexOf(t[0].type) && (l += " change" + resetSuffix)), options.dynamic.settings.trigger && (l += " " + options.dynamic.settings.trigger + resetSuffix, "focusout" === options.dynamic.settings.trigger || ~["radio", "checkbox"].indexOf(t[0].type) || (l += " change" + resetSuffix + " paste" + resetSuffix)), t.unbind(l).on(l, function (e, t, n, i, a) {
                    return function () {
                        a ? $(n).hasClass(options.submit.settings.errorClass) && resetOneError(e, t, n, i, a) : $(t).hasClass(options.submit.settings.errorClass) && resetOneError(e, t, n, i)
                    }
                }(e, t, a, i, s))
            }
            if (options.submit.settings.scrollToError && !window.Validation.hasScrolled) {
                window.Validation.hasScrolled = !0;
                var u = parseFloat(options.submit.settings.scrollToError.offset) || 0, c = parseFloat(options.submit.settings.scrollToError.duration) || 500, p = "block" === options.submit.settings.display ? i : t;
                $("html, body").animate({scrollTop: p.offset().top + u}, c)
            }
        }

        function displayErrors() {
            for (var e in errors)errors.hasOwnProperty(e) && displayOneError(e)
        }

        function resetOneError(e, t, n, i, a) {
            if (delete errors[e], i)options.submit.settings.inputContainer && (a ? n : t).parentsUntil(node, options.submit.settings.inputContainer).removeClass(options.submit.settings.errorClass), n && n.removeClass(options.submit.settings.errorClass), t.removeClass(options.submit.settings.errorClass), "inline" === options.submit.settings.display && i.find("[" + _data.errorList + "]").remove(); else {
                if (!t && (t = node.find('[name="' + e + '"]'), !t[0]))return !1;
                t.trigger("coucou" + resetSuffix)
            }
        }

        function resetErrors() {
            errors = [], window.Validation.hasScrolled = !1, node.find("[" + _data.errorList + "]").remove(), node.find("." + options.submit.settings.errorClass).removeClass(options.submit.settings.errorClass)
        }

        function submitForm() {
            node[0].submit()
        }

        function destroy() {
            return resetErrors(), node.find("[" + _data.validation + "],[" + _data.regex + "]").off(delegateSuffix + " " + resetSuffix), node.find(options.submit.settings.button).off(delegateSuffix).on("click" + delegateSuffix, function () {
                $(this).closest("form")[0].submit()
            }), !0
        }

        var errors = [], messages = {}, formData = {}, delegateSuffix = ".vd", resetSuffix = ".vr";
        window.Validation.hasScrolled = !1;
        var _getInputValue = function (e) {
            var t;
            switch ($(e).attr("type")) {
                case"checkbox":
                    t = $(e).is(":checked") ? 1 : "";
                    break;
                case"radio":
                    t = node.find('input[name="' + $(e).attr("name") + '"]:checked').val() || "";
                    break;
                default:
                    t = $(e).val()
            }
            return t
        }, _typeWatch = function () {
            var e = 0;
            return function (t, n) {
                clearTimeout(e), e = setTimeout(t, n)
            }
        }(), _executeCallback = function (e, t) {
            if (!e)return !1;
            var n;
            if ("function" == typeof e)n = e; else if ("string" == typeof e || e instanceof Array) {
                n = window, "string" == typeof e && (e = [e, []]);
                for (var i = e[0].split("."), a = e[1], s = !0, r = 0; r < i.length;) {
                    if ("undefined" == typeof n) {
                        s = !1;
                        break
                    }
                    n = n[i[r++]]
                }
                if (!s || "function" != typeof n)return !1
            }
            return n.apply(this, $.merge(a || [], t ? t : [])), !0
        };
        return this.__construct = function () {
            extendOptions(), extendRules(), extendMessages(), delegateDynamicValidation(), delegateValidation()
        }(), {
            registerError: registerError,
            displayOneError: displayOneError,
            displayErrors: displayErrors,
            resetOneError: resetOneError,
            resetErrors: resetErrors,
            destroy: destroy
        }
    };
    $.fn.validate = $.validate = function (e) {
        return _api.validate(this, e)
    }, $.fn.addValidation = function (e) {
        return _api.addValidation(this, e)
    }, $.fn.removeValidation = function (e) {
        return _api.removeValidation(this, e)
    }, $.fn.addError = function (e) {
        return _api.addError(this, e)
    }, $.fn.removeError = function (e) {
        return _api.removeError(this, e)
    }, $.fn.alterValidationRules = $.alterValidationRules = function (e) {
        e instanceof Array || (e = [e]);
        for (var t = 0; t < e.length; t++)_api.alterValidationRules(e[t])
    };
    var _api = {
        _formatValidation: function (e) {
            return e = e.toString().replace(/\s/g, ""), "[" === e.charAt(0) && "]" === e.charAt(e.length - 1) && (e = e.replace(/^\[|]$/g, "")), e
        }, _splitValidation: function (e) {
            for (var t, n = this._formatValidation(e).split(","), i = 0; i < n.length; i++)t = n[i], /^[a-z]+$/i.test(t) && (n[i] = t.toUpperCase());
            return n
        }, _joinValidation: function (e) {
            return "[" + e.join(", ") + "]"
        }, validate: function (e, t) {
            if ("function" == typeof e) {
                if (!t.submit.settings.form)return;
                if (e = $(t.submit.settings.form), !e[0] || "form" !== e[0].nodeName.toLowerCase())return
            } else if ("undefined" == typeof e[0])return;
            if ("destroy" === t) {
                if (!window.Validation.form[e.selector])return;
                return void window.Validation.form[e.selector].destroy()
            }
            return e.each(function () {
                window.Validation.form[e.selector] = new Validation($(this), t)
            })
        }, addValidation: function (e, t) {
            var n = this;
            return t = n._splitValidation(t), t ? e.each(function () {
                for (var e, i = $(this), a = i.attr(_data.validation), s = a && a.length ? n._splitValidation(a) : [], r = 0; r < t.length; r++)e = n._formatValidation(t[r]), -1 === $.inArray(e, s) && s.push(e);
                s.length && i.attr(_data.validation, n._joinValidation(s))
            }) : !1
        }, removeValidation: function (e, t) {
            var n = this;
            return t = n._splitValidation(t), t ? e.each(function () {
                var e, i, a = $(this), s = a.attr(_data.validation), r = s && s.length ? n._splitValidation(s) : [];
                if (!r.length)return a.removeAttr(_data.validation), !0;
                for (var o = 0; o < t.length; o++)e = n._formatValidation(t[o]), i = $.inArray(e, r), -1 !== i && r.splice(i, 1);
                return r.length ? void a.attr(_data.validation, n._joinValidation(r)) : (a.removeAttr(_data.validation), !0)
            }) : !1
        }, addError: function (e, t) {
            if (!window.Validation.form[e.selector])return !1;
            if ("object" != typeof t || "[object Object]" !== Object.prototype.toString.call(t))return !1;
            var n, i = !0;
            for (var a in t)if (t.hasOwnProperty(a) && (t[a] instanceof Array || (t[a] = [t[a]]), n = $(e.selector).find('[name="' + a + '"]'), n[0])) {
                i && (window.Validation.hasScrolled = !1, i = !1), window.Validation.form[e.selector].resetOneError(a, n);
                for (var s = 0; s < t[a].length; s++)"string" == typeof t[a][s] && window.Validation.form[e.selector].registerError(a, t[a][s]);
                window.Validation.form[e.selector].displayOneError(a)
            }
        }, removeError: function (e, t) {
            if (!window.Validation.form[e.selector])return !1;
            if (!t)return window.Validation.form[e.selector].resetErrors(), !1;
            if ("object" == typeof t && "[object Array]" !== Object.prototype.toString.call(t))return !1;
            t instanceof Array || (t = [t]);
            for (var n, i = 0; i < t.length; i++)n = $(e.selector).find('[name="' + t[i] + '"]'), n[0] && window.Validation.form[e.selector].resetOneError(t[i], n)
        }, alterValidationRules: function (e) {
            if (!e.rule || !e.regex && !e.message)return !1;
            if (e.rule = e.rule.toUpperCase(), e.regex) {
                var t = _buildRegexFromString(e.regex);
                if (!(t instanceof RegExp))return !1;
                _rules[e.rule] = t
            }
            return e.message && (_messages[e.rule] = e.message), !0
        }
    };
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }, Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
        var t = this.length >>> 0, n = Number(arguments[1]) || 0;
        for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += t); t > n; n++)if (n in this && this[n] === e)return n;
        return -1
    })
}(window, document, window.jQuery), !function (e, t) {
    function n(t) {
        var n = h(), i = n.querySelector("h2"), a = n.querySelector("p"), s = n.querySelector("button.cancel"), r = n.querySelector("button.confirm");
        if (i.innerHTML = M(t.title).split("\n").join("<br>"), a.innerHTML = M(t.text || "").split("\n").join("<br>"), t.text && b(a), k(n.querySelectorAll(".icon")), t.type) {
            for (var o = !1, d = 0; d < m.length; d++)if (t.type === m[d]) {
                o = !0;
                break
            }
            if (!o)return e.console.error("Unknown alert type: " + t.type), !1;
            var l = n.querySelector(".icon." + t.type);
            switch (b(l), t.type) {
                case"success":
                    y(l, "animate"), y(l.querySelector(".tip"), "animateSuccessTip"), y(l.querySelector(".long"), "animateSuccessLong");
                    break;
                case"error":
                    y(l, "animateErrorIcon"), y(l.querySelector(".x-mark"), "animateXMark");
                    break;
                case"warning":
                    y(l, "pulseWarning"), y(l.querySelector(".body"), "pulseWarningIns"), y(l.querySelector(".dot"), "pulseWarningIns")
            }
        }
        if (t.imageUrl) {
            var u = n.querySelector(".icon.custom");
            u.style.backgroundImage = "url(" + t.imageUrl + ")", b(u);
            var c = 80, p = 80;
            if (t.imageSize) {
                var _ = t.imageSize.split("x")[0], f = t.imageSize.split("x")[1];
                _ && f ? (c = _, p = f, u.css({
                    width: _ + "px",
                    height: f + "px"
                })) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
            }
            u.setAttribute("style", u.getAttribute("style") + "width:" + c + "px; height:" + p + "px")
        }
        n.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? s.style.display = "inline-block" : k(s), n.setAttribute("data-has-confirm-button", t.showConfirmButton), t.showConfirmButton ? r.style.display = "inline-block" : k(r), t.cancelButtonText && (s.innerHTML = M(t.cancelButtonText)), t.confirmButtonText && (r.innerHTML = M(t.confirmButtonText)), r.className = "confirm btn btn-lg", y(n, t.containerClass), y(r, t.confirmButtonClass), y(s, t.cancelButtonClass), y(i, t.titleClass), y(a, t.textClass), n.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
        var g = t.doneFunction ? !0 : !1;
        n.setAttribute("data-has-done-function", g), n.setAttribute("data-timer", t.timer)
    }

    function i(e, t) {
        for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }

    function a() {
        var e = h();
        T(f(), 10), b(e), y(e, "showSweetAlert"), v(e, "hideSweetAlert"), o = t.activeElement;
        var n = e.querySelector("button.confirm");
        n.focus(), setTimeout(function () {
            y(e, "visible")
        }, 500);
        var i = e.getAttribute("data-timer");
        "null" !== i && "" !== i && setTimeout(function () {
            s()
        }, i)
    }

    function s() {
        var n = h();
        S(f(), 5), S(n, 5), v(n, "showSweetAlert"), y(n, "hideSweetAlert"), v(n, "visible");
        var i = n.querySelector(".icon.success");
        v(i, "animate"), v(i.querySelector(".tip"), "animateSuccessTip"), v(i.querySelector(".long"), "animateSuccessLong");
        var a = n.querySelector(".icon.error");
        v(a, "animateErrorIcon"), v(a.querySelector(".x-mark"), "animateXMark");
        var s = n.querySelector(".icon.warning");
        v(s, "pulseWarning"), v(s.querySelector(".body"), "pulseWarningIns"), v(s.querySelector(".dot"), "pulseWarningIns"), e.onkeydown = l, t.onclick = d, o && o.focus(), u = void 0
    }

    function r() {
        var e = h();
        e.style.marginTop = D(h())
    }

    var o, d, l, u, c = ".sweet-alert", p = ".sweet-overlay", m = ["error", "warning", "info", "success"], _ = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showCancelButton: !1,
        showConfirmButton: !0,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonClass: "btn-primary",
        cancelButtonText: "Cancel",
        cancelButtonClass: "btn-default",
        containerClass: "",
        titleClass: "",
        textClass: "",
        imageUrl: null,
        imageSize: null,
        timer: null
    }, h = function () {
        return t.querySelector(c)
    }, f = function () {
        return t.querySelector(p)
    }, g = function (e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ")
    }, y = function (e, t) {
        t && !g(e, t) && (e.className += " " + t)
    }, v = function (e, t) {
        var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
        if (g(e, t)) {
            for (; n.indexOf(" " + t + " ") >= 0;)n = n.replace(" " + t + " ", " ");
            e.className = n.replace(/^\s+|\s+$/g, "")
        }
    }, M = function (e) {
        var n = t.createElement("div");
        return n.appendChild(t.createTextNode(e)), n.innerHTML
    }, w = function (e) {
        e.style.opacity = "", e.style.display = "block"
    }, b = function (e) {
        if (e && !e.length)return w(e);
        for (var t = 0; t < e.length; ++t)w(e[t])
    }, L = function (e) {
        e.style.opacity = "", e.style.display = "none"
    }, k = function (e) {
        if (e && !e.length)return L(e);
        for (var t = 0; t < e.length; ++t)L(e[t])
    }, Y = function (e, t) {
        for (var n = t.parentNode; null !== n;) {
            if (n === e)return !0;
            n = n.parentNode
        }
        return !1
    }, D = function (e) {
        e.style.left = "-9999px", e.style.display = "block";
        var t = e.clientHeight, n = parseInt(getComputedStyle(e).getPropertyValue("padding"), 10);
        return e.style.left = "", e.style.display = "none", "-" + parseInt(t / 2 + n) + "px"
    }, T = function (e, t) {
        if (+e.style.opacity < 1) {
            t = t || 16, e.style.opacity = 0, e.style.display = "block";
            var n = +new Date, i = function () {
                e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(i, t)
            };
            i()
        }
    }, S = function (e, t) {
        t = t || 16, e.style.opacity = 1;
        var n = +new Date, i = function () {
            e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
        };
        i()
    }, x = function (n) {
        if (MouseEvent) {
            var i = new MouseEvent("click", {view: e, bubbles: !1, cancelable: !0});
            n.dispatchEvent(i)
        } else if (t.createEvent) {
            var a = t.createEvent("MouseEvents");
            a.initEvent("click", !1, !1), n.dispatchEvent(a)
        } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
    }, H = function (t) {
        "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
    };
    e.sweetAlertInitialize = function () {
        var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p class="lead text-muted">Text</p><p><button class="cancel btn btn-lg" tabIndex="2">Cancel</button> <button class="confirm btn btn-lg" tabIndex="1">OK</button></p></div>', n = t.createElement("div");
        n.innerHTML = e, t.body.appendChild(n)
    }, e.sweetAlert = e.swal = function () {
        function o(e) {
            var t = e.keyCode || e.which;
            if (-1 !== [9, 13, 32, 27].indexOf(t)) {
                for (var n = e.target || e.srcElement, i = -1, a = 0; a < b.length; a++)if (n === b[a]) {
                    i = a;
                    break
                }
                9 === t ? (n = -1 === i ? M : i === b.length - 1 ? b[0] : b[i + 1], H(e), n.focus()) : (n = 13 === t || 32 === t ? -1 === i ? M : void 0 : 27 !== t || w.hidden || "none" === w.style.display ? void 0 : w, void 0 !== n && x(n, e))
            }
        }

        function c(e) {
            var t = e.target || e.srcElement, n = e.relatedTarget, i = g(m, "visible");
            if (i) {
                var a = -1;
                if (null !== n) {
                    for (var s = 0; s < b.length; s++)if (n === b[s]) {
                        a = s;
                        break
                    }
                    -1 === a && t.focus()
                } else u = t
            }
        }

        if (void 0 === arguments[0])return e.console.error("sweetAlert expects at least 1 attribute!"), !1;
        var p = i({}, _);
        switch (typeof arguments[0]) {
            case"string":
                p.title = arguments[0], p.text = arguments[1] || "", p.type = arguments[2] || "";
                break;
            case"object":
                if (void 0 === arguments[0].title)return e.console.error('Missing "title" argument!'), !1;
                p.title = arguments[0].title, p.text = arguments[0].text || _.text, p.type = arguments[0].type || _.type, p.allowOutsideClick = arguments[0].allowOutsideClick || _.allowOutsideClick, p.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : _.showCancelButton, p.showConfirmButton = void 0 !== arguments[0].showConfirmButton ? arguments[0].showConfirmButton : _.showConfirmButton, p.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : _.closeOnConfirm, p.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : _.closeOnCancel, p.timer = arguments[0].timer || _.timer, p.confirmButtonText = _.showCancelButton ? "Confirm" : _.confirmButtonText, p.confirmButtonText = arguments[0].confirmButtonText || _.confirmButtonText, p.confirmButtonClass = arguments[0].confirmButtonClass || (arguments[0].type ? "btn-" + arguments[0].type : null) || _.confirmButtonClass, p.cancelButtonText = arguments[0].cancelButtonText || _.cancelButtonText, p.cancelButtonClass = arguments[0].cancelButtonClass || _.cancelButtonClass, p.containerClass = arguments[0].containerClass || _.containerClass, p.titleClass = arguments[0].titleClass || _.titleClass, p.textClass = arguments[0].textClass || _.textClass, p.imageUrl = arguments[0].imageUrl || _.imageUrl, p.imageSize = arguments[0].imageSize || _.imageSize, p.doneFunction = arguments[1] || null;
                break;
            default:
                return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]), !1
        }
        n(p), r(), a();
        for (var m = h(), f = function (e) {
            var t = e.target || e.srcElement, n = t.className.indexOf("confirm") > -1, i = g(m, "visible"), a = p.doneFunction && "true" === m.getAttribute("data-has-done-function");
            switch (e.type) {
                case"click":
                    if (n && a && i)p.doneFunction(!0), p.closeOnConfirm && s(); else if (a && i) {
                        var r = String(p.doneFunction).replace(/\s/g, ""), o = "function(" === r.substring(0, 9) && ")" !== r.substring(9, 10);
                        o && p.doneFunction(!1), p.closeOnCancel && s()
                    } else s()
            }
        }, y = m.querySelectorAll("button"), v = 0; v < y.length; v++)y[v].onclick = f;
        d = t.onclick, t.onclick = function (e) {
            var t = e.target || e.srcElement, n = m === t, i = Y(m, e.target), a = g(m, "visible"), r = "true" === m.getAttribute("data-allow-ouside-click");
            !n && !i && a && r && s()
        };
        var M = m.querySelector("button.confirm"), w = m.querySelector("button.cancel"), b = m.querySelectorAll("button:not([type=hidden])");
        l = e.onkeydown, e.onkeydown = o, M.onblur = c, w.onblur = c, e.onfocus = function () {
            e.setTimeout(function () {
                void 0 !== u && (u.focus(), u = void 0)
            }, 0)
        }
    }, e.swal.setDefaults = function (e) {
        if (!e)throw new Error("userParams is required");
        if ("object" != typeof e)throw new Error("userParams has to be a object");
        i(_, e)
    }, e.swal.close = function () {
        s()
    }, function () {
        "complete" === t.readyState || "interactive" === t.readyState && t.body ? sweetAlertInitialize() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function e() {
            t.removeEventListener("DOMContentLoaded", e, !1), sweetAlertInitialize()
        }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function n() {
            "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), sweetAlertInitialize())
        })
    }()
}(window, document), function (e, t, n, i) {
    var a = e.fn.peity = function (t, n) {
        return d && this.each(function () {
            var i = e(this), r = i.data("_peity");
            r ? (t && (r.type = t), e.extend(r.opts, n)) : (r = new s(i, t, e.extend({}, a.defaults[t], i.data("peity"), n)), i.change(function () {
                r.draw()
            }).data("_peity", r)), r.draw()
        }), this
    }, s = function (e, t, n) {
        this.$el = e, this.type = t, this.opts = n
    }, r = s.prototype, o = r.svgElement = function (n, i) {
        return e(t.createElementNS("http://www.w3.org/2000/svg", n)).attr(i)
    }, d = "createElementNS" in t && o("svg", {})[0].createSVGRect;
    r.draw = function () {
        var e = this.opts;
        a.graphers[this.type].call(this, e), e.after && e.after.call(this, e)
    }, r.fill = function () {
        var t = this.opts.fill;
        return e.isFunction(t) ? t : function (e, n) {
            return t[n % t.length]
        }
    }, r.prepare = function (e, t) {
        return this.$svg || this.$el.hide().after(this.$svg = o("svg", {"class": "peity"})), this.$svg.empty().data("peity", this).attr({
            height: t,
            width: e
        })
    }, r.values = function () {
        return e.map(this.$el.text().split(this.opts.delimiter), function (e) {
            return parseFloat(e)
        })
    }, a.defaults = {}, a.graphers = {}, a.register = function (e, t, n) {
        this.defaults[e] = t, this.graphers[e] = n
    }, a.register("pie", {fill: ["#ff9900", "#fff4dd", "#ffc66e"], radius: 8}, function (t) {
        if (!t.delimiter) {
            var i = this.$el.text().match(/[^0-9\.]/);
            t.delimiter = i ? i[0] : ","
        }
        if (i = e.map(this.values(), function (e) {
                return e > 0 ? e : 0
            }), "/" == t.delimiter)var a = i[0], i = [a, n.max(0, i[1] - a)];
        for (var s = 0, a = i.length, r = 0; a > s; s++)r += i[s];
        r || (a = 2, r = 1, i = [0, 1]);
        var d = 2 * t.radius, d = this.prepare(t.width || d, t.height || d), s = d.width(), l = d.height(), u = s / 2, c = l / 2, l = n.min(u, c), t = t.innerRadius;
        "donut" == this.type && !t && (t = .5 * l);
        for (var p = n.PI, m = this.fill(), _ = this.scale = function (e, t) {
            var i = e / r * p * 2 - p / 2;
            return [t * n.cos(i) + u, t * n.sin(i) + c]
        }, h = 0, s = 0; a > s; s++) {
            var f = i[s], g = f / r;
            if (0 != g) {
                if (1 == g)if (t)var g = u - .01, y = c - l, v = c - t, g = o("path", {d: ["M", u, y, "A", l, l, 0, 1, 1, g, y, "L", g, v, "A", t, t, 0, 1, 0, u, v].join(" ")}); else g = o("circle", {
                    cx: u,
                    cy: c,
                    r: l
                }); else y = h + f, v = ["M"].concat(_(h, l), "A", l, l, 0, g > .5 ? 1 : 0, 1, _(y, l), "L"), t ? v = v.concat(_(y, t), "A", t, t, 0, g > .5 ? 1 : 0, 0, _(h, t)) : v.push(u, c), h += f, g = o("path", {d: v.join(" ")});
                g.attr("fill", m.call(this, f, s, i)), d.append(g)
            }
        }
    }), a.register("donut", e.extend(!0, {}, a.defaults.pie), function (e) {
        a.graphers.pie.call(this, e)
    }), a.register("line", {
        delimiter: ",",
        fill: "#c6d9fd",
        height: 16,
        min: 0,
        stroke: "#4d89f9",
        strokeWidth: 1,
        width: 32
    }, function (e) {
        var t = this.values();
        1 == t.length && t.push(t[0]);
        for (var a = n.max.apply(n, e.max == i ? t : t.concat(e.max)), s = n.min.apply(n, e.min == i ? t : t.concat(e.min)), r = this.prepare(e.width, e.height), d = e.strokeWidth, l = r.width(), u = r.height() - d, c = a - s, a = this.x = function (e) {
            return e * (l / (t.length - 1))
        }, p = this.y = function (e) {
            var t = u;
            return c && (t -= (e - s) / c * u), t + d / 2
        }, m = p(n.max(s, 0)), _ = [0, m], h = 0; h < t.length; h++)_.push(a(h), p(t[h]));
        _.push(l, m), e.fill && r.append(o("polygon", {
            fill: e.fill,
            points: _.join(" ")
        })), d && r.append(o("polyline", {
            fill: "none",
            points: _.slice(2, _.length - 2).join(" "),
            stroke: e.stroke,
            "stroke-width": d,
            "stroke-linecap": "square"
        }))
    }), a.register("bar", {
        delimiter: ",",
        fill: ["#4D89F9"],
        height: 16,
        min: 0,
        padding: .1,
        width: 32
    }, function (e) {
        for (var t = this.values(), a = n.max.apply(n, e.max == i ? t : t.concat(e.max)), s = n.min.apply(n, e.min == i ? t : t.concat(e.min)), r = this.prepare(e.width, e.height), d = r.width(), l = r.height(), u = a - s, e = e.padding, c = this.fill(), p = this.x = function (e) {
            return e * d / t.length
        }, m = this.y = function (e) {
            return l - (u ? (e - s) / u * l : 1)
        }, _ = 0; _ < t.length; _++) {
            var h, f = p(_ + e), g = p(_ + 1 - e) - f, y = t[_], v = m(y), M = v;
            u ? 0 > y ? M = m(n.min(a, 0)) : v = m(n.max(s, 0)) : h = 1, h = v - M, 0 == h && (h = 1, a > 0 && u && M--), r.append(o("rect", {
                fill: c.call(this, y, _, t),
                x: f,
                y: M,
                width: g,
                height: h
            }))
        }
    })
}(jQuery, document, Math), !function (e, t) {
    if ("function" == typeof define && define.amd)define(["exports", "module"], t); else if ("undefined" != typeof exports && "undefined" != typeof module)t(exports, module); else {
        var n = {exports: {}};
        t(n.exports, n), e.autosize = n.exports
    }
}(this, function (e, t) {
    "use strict";
    function n(e) {
        function t() {
            var t = window.getComputedStyle(e, null);
            m = t.overflowY, "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), p = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(p) && (p = 0), a()
        }

        function n(t) {
            var n = e.style.width;
            e.style.width = "0px", e.offsetWidth, e.style.width = n, m = t, c && (e.style.overflowY = t), i()
        }

        function i() {
            var t = window.pageYOffset, n = document.body.scrollTop, i = e.style.height;
            e.style.height = "auto";
            var a = e.scrollHeight + p;
            return 0 === e.scrollHeight ? void(e.style.height = i) : (e.style.height = a + "px",
                _ = e.clientWidth, document.documentElement.scrollTop = t, void(document.body.scrollTop = n))
        }

        function a() {
            var t = e.style.height;
            i();
            var a = window.getComputedStyle(e, null);
            if (a.height !== e.style.height ? "visible" !== m && n("visible") : "hidden" !== m && n("hidden"), t !== e.style.height) {
                var s = r("autosize:resized");
                e.dispatchEvent(s)
            }
        }

        var o = void 0 === arguments[1] ? {} : arguments[1], d = o.setOverflowX, l = void 0 === d ? !0 : d, u = o.setOverflowY, c = void 0 === u ? !0 : u;
        if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
            var p = null, m = null, _ = e.clientWidth, h = function () {
                e.clientWidth !== _ && a()
            }, f = function (t) {
                window.removeEventListener("resize", h, !1), e.removeEventListener("input", a, !1), e.removeEventListener("keyup", a, !1), e.removeEventListener("autosize:destroy", f, !1), e.removeEventListener("autosize:update", a, !1), s["delete"](e), Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n]
                })
            }.bind(e, {
                height: e.style.height,
                resize: e.style.resize,
                overflowY: e.style.overflowY,
                overflowX: e.style.overflowX,
                wordWrap: e.style.wordWrap
            });
            e.addEventListener("autosize:destroy", f, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", a, !1), window.addEventListener("resize", h, !1), e.addEventListener("input", a, !1), e.addEventListener("autosize:update", a, !1), s.add(e), l && (e.style.overflowX = "hidden", e.style.wordWrap = "break-word"), t()
        }
    }

    function i(e) {
        if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
            var t = r("autosize:destroy");
            e.dispatchEvent(t)
        }
    }

    function a(e) {
        if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
            var t = r("autosize:update");
            e.dispatchEvent(t)
        }
    }

    var s = "function" == typeof Set ? new Set : function () {
        var e = [];
        return {
            has: function (t) {
                return Boolean(e.indexOf(t) > -1)
            }, add: function (t) {
                e.push(t)
            }, "delete": function (t) {
                e.splice(e.indexOf(t), 1)
            }
        }
    }(), r = function (e) {
        return new Event(e)
    };
    try {
        new Event("test")
    } catch (o) {
        r = function (e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !1), t
        }
    }
    var d = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (d = function (e) {
        return e
    }, d.destroy = function (e) {
        return e
    }, d.update = function (e) {
        return e
    }) : (d = function (e, t) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
            return n(e, t)
        }), e
    }, d.destroy = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
    }, d.update = function (e) {
        return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
    }), t.exports = d
}), function (e, t, n, i) {
    var a = n("html"), s = n(e), r = n(t), o = n.fancybox = function () {
        o.open.apply(this, arguments)
    }, d = navigator.userAgent.match(/msie/i), l = null, u = t.createTouch !== i, c = function (e) {
        return e && e.hasOwnProperty && e instanceof n
    }, p = function (e) {
        return e && "string" === n.type(e)
    }, m = function (e) {
        return p(e) && 0 < e.indexOf("%")
    }, _ = function (e, t) {
        var n = parseInt(e, 10) || 0;
        return t && m(e) && (n *= o.getViewport()[t] / 100), Math.ceil(n)
    }, h = function (e, t) {
        return _(e, t) + "px"
    };
    n.extend(o, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !u,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (d ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== o.close(!0)) ? (n.isArray(e) || (e = c(e) ? n(e).get() : [e]), n.each(e, function (a, s) {
                var r, d, l, u, m, _ = {};
                "object" === n.type(s) && (s.nodeType && (s = n(s)), c(s) ? (_ = {
                    href: s.data("fancybox-href") || s.attr("href"),
                    title: s.data("fancybox-title") || s.attr("title"),
                    isDom: !0,
                    element: s
                }, n.metadata && n.extend(!0, _, s.metadata())) : _ = s), r = t.href || _.href || (p(s) ? s : null), d = t.title !== i ? t.title : _.title || "", u = (l = t.content || _.content) ? "html" : t.type || _.type, !u && _.isDom && (u = s.data("fancybox-type"), u || (u = (u = s.prop("class").match(/fancybox\.(\w+)/)) ? u[1] : null)), p(r) && (u || (o.isImage(r) ? u = "image" : o.isSWF(r) ? u = "swf" : "#" === r.charAt(0) ? u = "inline" : p(s) && (u = "html", l = s)), "ajax" === u && (m = r.split(/\s+/, 2), r = m.shift(), m = m.shift())), l || ("inline" === u ? r ? l = n(p(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : _.isDom && (l = s) : "html" === u ? l = r : !u && !r && _.isDom && (u = "inline", l = s)), n.extend(_, {
                    href: r,
                    type: u,
                    content: l,
                    title: d,
                    selector: m
                }), e[a] = _
            }), o.opts = n.extend(!0, {}, o.defaults, t), t.keys !== i && (o.opts.keys = t.keys ? n.extend({}, o.defaults.keys, t.keys) : !1), o.group = e, o._start(o.opts.index)) : void 0
        },
        cancel: function () {
            var e = o.coming;
            e && !1 !== o.trigger("onCancel") && (o.hideLoading(), o.ajaxLoad && o.ajaxLoad.abort(), o.ajaxLoad = null, o.imgPreload && (o.imgPreload.onload = o.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), o.coming = null, o.current || o._afterZoomOut(e))
        },
        close: function (e) {
            o.cancel(), !1 !== o.trigger("beforeClose") && (o.unbindEvents(), o.isActive && (o.isOpen && !0 !== e ? (o.isOpen = o.isOpened = !1, o.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), o.wrap.stop(!0, !0).removeClass("fancybox-opened"), o.transitions[o.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), o._afterZoomOut())))
        },
        play: function (e) {
            var t = function () {
                clearTimeout(o.player.timer)
            }, n = function () {
                t(), o.current && o.player.isActive && (o.player.timer = setTimeout(o.next, o.current.playSpeed))
            }, i = function () {
                t(), r.unbind(".player"), o.player.isActive = !1, o.trigger("onPlayEnd")
            };
            !0 === e || !o.player.isActive && !1 !== e ? o.current && (o.current.loop || o.current.index < o.group.length - 1) && (o.player.isActive = !0, r.bind({
                "onCancel.player beforeClose.player": i,
                "onUpdate.player": n,
                "beforeLoad.player": t
            }), n(), o.trigger("onPlayStart")) : i()
        },
        next: function (e) {
            var t = o.current;
            t && (p(e) || (e = t.direction.next), o.jumpto(t.index + 1, e, "next"))
        },
        prev: function (e) {
            var t = o.current;
            t && (p(e) || (e = t.direction.prev), o.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function (e, t, n) {
            var a = o.current;
            a && (e = _(e), o.direction = t || a.direction[e >= a.index ? "next" : "prev"], o.router = n || "jumpto", a.loop && (0 > e && (e = a.group.length + e % a.group.length), e %= a.group.length), a.group[e] !== i && (o.cancel(), o._start(e)))
        },
        reposition: function (e, t) {
            var i, a = o.current, s = a ? a.wrap : null;
            s && (i = o._getPosition(t), e && "scroll" === e.type ? (delete i.position, s.stop(!0, !0).animate(i, 200)) : (s.css(i), a.pos = n.extend({}, a.dim, i)))
        },
        update: function (e) {
            var t = e && e.type, n = !t || "orientationchange" === t;
            n && (clearTimeout(l), l = null), o.isOpen && !l && (l = setTimeout(function () {
                var i = o.current;
                i && !o.isClosing && (o.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && o._setDimension(), "scroll" === t && i.canShrink || o.reposition(e), o.trigger("onUpdate"), l = null)
            }, n && !u ? 0 : 300))
        },
        toggle: function (e) {
            o.isOpen && (o.current.fitToView = "boolean" === n.type(e) ? e : !o.current.fitToView, u && (o.wrap.removeAttr("style").addClass("fancybox-tmp"), o.trigger("onUpdate")), o.update())
        },
        hideLoading: function () {
            r.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function () {
            var e, t;
            o.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body"), r.bind("keydown.loading", function (e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), o.cancel())
            }), o.defaults.fixed || (t = o.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function () {
            var t = o.current && o.current.locked || !1, n = {x: s.scrollLeft(), y: s.scrollTop()};
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = u && e.innerWidth ? e.innerWidth : s.width(), n.h = u && e.innerHeight ? e.innerHeight : s.height()), n
        },
        unbindEvents: function () {
            o.wrap && c(o.wrap) && o.wrap.unbind(".fb"), r.unbind(".fb"), s.unbind(".fb")
        },
        bindEvents: function () {
            var e, t = o.current;
            t && (s.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), o.update), (e = t.keys) && r.bind("keydown.fb", function (a) {
                var s = a.which || a.keyCode, r = a.target || a.srcElement;
                return 27 === s && o.coming ? !1 : void(!a.ctrlKey && !a.altKey && !a.shiftKey && !a.metaKey && (!r || !r.type && !n(r).is("[contenteditable]")) && n.each(e, function (e, r) {
                    return 1 < t.group.length && r[s] !== i ? (o[e](r[s]), a.preventDefault(), !1) : -1 < n.inArray(s, r) ? (o[e](), a.preventDefault(), !1) : void 0
                }))
            }), n.fn.mousewheel && t.mouseWheel && o.wrap.bind("mousewheel.fb", function (e, i, a, s) {
                for (var r = n(e.target || null), d = !1; r.length && !d && !r.is(".fancybox-skin") && !r.is(".fancybox-wrap");)d = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight), r = n(r).parent();
                0 !== i && !d && 1 < o.group.length && !t.canShrink && (s > 0 || a > 0 ? o.prev(s > 0 ? "down" : "left") : (0 > s || 0 > a) && o.next(0 > s ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function (e, t) {
            var i, a = t || o.coming || o.current;
            if (a) {
                if (n.isFunction(a[e]) && (i = a[e].apply(a, Array.prototype.slice.call(arguments, 1))), !1 === i)return !1;
                a.helpers && n.each(a.helpers, function (t, i) {
                    i && o.helpers[t] && n.isFunction(o.helpers[t][e]) && o.helpers[t][e](n.extend(!0, {}, o.helpers[t].defaults, i), a)
                }), r.trigger(e)
            }
        },
        isImage: function (e) {
            return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (e) {
            return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (e) {
            var t, i, a = {};
            if (e = _(e), t = o.group[e] || null, !t)return !1;
            if (a = n.extend(!0, {}, o.opts, t), t = a.margin, i = a.padding, "number" === n.type(t) && (a.margin = [t, t, t, t]), "number" === n.type(i) && (a.padding = [i, i, i, i]), a.modal && n.extend(!0, a, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {overlay: {closeClick: !1}}
                }), a.autoSize && (a.autoWidth = a.autoHeight = !0), "auto" === a.width && (a.autoWidth = !0), "auto" === a.height && (a.autoHeight = !0), a.group = o.group, a.index = e, o.coming = a, !1 === o.trigger("beforeLoad"))o.coming = null; else {
                if (i = a.type, t = a.href, !i)return o.coming = null, o.current && o.router && "jumpto" !== o.router ? (o.current.index = e, o[o.router](o.direction)) : !1;
                if (o.isActive = !0, ("image" === i || "swf" === i) && (a.autoHeight = a.autoWidth = !1, a.scrolling = "visible"), "image" === i && (a.aspectRatio = !0), "iframe" === i && u && (a.scrolling = "scroll"), a.wrap = n(a.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + a.wrapCSS).appendTo(a.parent || "body"), n.extend(a, {
                        skin: n(".fancybox-skin", a.wrap),
                        outer: n(".fancybox-outer", a.wrap),
                        inner: n(".fancybox-inner", a.wrap)
                    }), n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                        a.skin.css("padding" + t, h(a.padding[e]))
                    }), o.trigger("onReady"), "inline" === i || "html" === i) {
                    if (!a.content || !a.content.length)return o._error("content")
                } else if (!t)return o._error("href");
                "image" === i ? o._loadImage() : "ajax" === i ? o._loadAjax() : "iframe" === i ? o._loadIframe() : o._afterLoad()
            }
        },
        _error: function (e) {
            n.extend(o.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: o.coming.tpl.error
            }), o._afterLoad()
        },
        _loadImage: function () {
            var e = o.imgPreload = new Image;
            e.onload = function () {
                this.onload = this.onerror = null, o.coming.width = this.width / o.opts.pixelRatio, o.coming.height = this.height / o.opts.pixelRatio, o._afterLoad()
            }, e.onerror = function () {
                this.onload = this.onerror = null, o._error("image")
            }, e.src = o.coming.href, !0 !== e.complete && o.showLoading()
        },
        _loadAjax: function () {
            var e = o.coming;
            o.showLoading(), o.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href, error: function (e, t) {
                    o.coming && "abort" !== t ? o._error("ajax", e) : o.hideLoading()
                }, success: function (t, n) {
                    "success" === n && (e.content = t, o._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var e = o.coming, t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {
                }
            }), e.iframe.preload && (o.showLoading(), t.one("load", function () {
                n(this).data("ready", 1), u || n(this).bind("load.fb", o.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), o._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || o._afterLoad()
        },
        _preloadImages: function () {
            var e, t, n = o.group, i = o.current, a = n.length, s = i.preload ? Math.min(i.preload, a - 1) : 0;
            for (t = 1; s >= t; t += 1)e = n[(i.index + t) % a], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function () {
            var e, t, i, a, s, r = o.coming, d = o.current;
            if (o.hideLoading(), r && !1 !== o.isActive)if (!1 === o.trigger("afterLoad", r, d))r.wrap.stop(!0).trigger("onReset").remove(), o.coming = null; else {
                switch (d && (o.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), o.unbindEvents(), e = r.content, t = r.type, i = r.scrolling, n.extend(o, {
                    wrap: r.wrap,
                    skin: r.skin,
                    outer: r.outer,
                    inner: r.inner,
                    current: r,
                    previous: d
                }), a = r.href, t) {
                    case"inline":
                    case"ajax":
                    case"html":
                        r.selector ? e = n("<div>").html(e).find(r.selector) : c(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), r.wrap.bind("onReset", function () {
                            n(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case"image":
                        e = r.tpl.image.replace("{href}", a);
                        break;
                    case"swf":
                        e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', s = "", n.each(r.swf, function (t, n) {
                            e += '<param name="' + t + '" value="' + n + '"></param>', s += " " + t + '="' + n + '"'
                        }), e += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + s + "></embed></object>"
                }
                (!c(e) || !e.parent().is(r.inner)) && r.inner.append(e), o.trigger("beforeShow"), r.inner.css("overflow", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), o._setDimension(), o.reposition(), o.isOpen = !1, o.coming = null, o.bindEvents(), o.isOpened ? d.prevMethod && o.transitions[d.prevMethod]() : n(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(), o.transitions[o.isOpened ? r.nextMethod : r.openMethod](), o._preloadImages()
            }
        },
        _setDimension: function () {
            var e, t, i, a, s, r, d, l, u, c = o.getViewport(), p = 0, f = !1, g = !1, f = o.wrap, y = o.skin, v = o.inner, M = o.current, g = M.width, w = M.height, b = M.minWidth, L = M.minHeight, k = M.maxWidth, Y = M.maxHeight, D = M.scrolling, T = M.scrollOutside ? M.scrollbarWidth : 0, S = M.margin, x = _(S[1] + S[3]), H = _(S[0] + S[2]);
            if (f.add(y).add(v).width("auto").height("auto").removeClass("fancybox-tmp"), S = _(y.outerWidth(!0) - y.width()), e = _(y.outerHeight(!0) - y.height()), t = x + S, i = H + e, a = m(g) ? (c.w - t) * _(g) / 100 : g, s = m(w) ? (c.h - i) * _(w) / 100 : w, "iframe" === M.type) {
                if (u = M.content, M.autoHeight && 1 === u.data("ready"))try {
                    u[0].contentWindow.document.location && (v.width(a).height(9999), r = u.contents().find("body"), T && r.css("overflow-x", "hidden"), s = r.outerHeight(!0))
                } catch (j) {
                }
            } else(M.autoWidth || M.autoHeight) && (v.addClass("fancybox-tmp"), M.autoWidth || v.width(a), M.autoHeight || v.height(s), M.autoWidth && (a = v.width()), M.autoHeight && (s = v.height()), v.removeClass("fancybox-tmp"));
            if (g = _(a), w = _(s), l = a / s, b = _(m(b) ? _(b, "w") - t : b), k = _(m(k) ? _(k, "w") - t : k), L = _(m(L) ? _(L, "h") - i : L), Y = _(m(Y) ? _(Y, "h") - i : Y), r = k, d = Y, M.fitToView && (k = Math.min(c.w - t, k), Y = Math.min(c.h - i, Y)), t = c.w - x, H = c.h - H, M.aspectRatio ? (g > k && (g = k, w = _(g / l)), w > Y && (w = Y, g = _(w * l)), b > g && (g = b, w = _(g / l)), L > w && (w = L, g = _(w * l))) : (g = Math.max(b, Math.min(g, k)), M.autoHeight && "iframe" !== M.type && (v.width(g), w = v.height()), w = Math.max(L, Math.min(w, Y))), M.fitToView)if (v.width(g).height(w), f.width(g + S), c = f.width(), x = f.height(), M.aspectRatio)for (; (c > t || x > H) && g > b && w > L && !(19 < p++);)w = Math.max(L, Math.min(Y, w - 10)), g = _(w * l), b > g && (g = b, w = _(g / l)), g > k && (g = k, w = _(g / l)), v.width(g).height(w), f.width(g + S), c = f.width(), x = f.height(); else g = Math.max(b, Math.min(g, g - (c - t))), w = Math.max(L, Math.min(w, w - (x - H)));
            T && "auto" === D && s > w && t > g + S + T && (g += T), v.width(g).height(w), f.width(g + S), c = f.width(), x = f.height(), f = (c > t || x > H) && g > b && w > L, g = M.aspectRatio ? r > g && d > w && a > g && s > w : (r > g || d > w) && (a > g || s > w), n.extend(M, {
                dim: {
                    width: h(c),
                    height: h(x)
                },
                origWidth: a,
                origHeight: s,
                canShrink: f,
                canExpand: g,
                wPadding: S,
                hPadding: e,
                wrapSpace: x - y.outerHeight(!0),
                skinSpace: y.height() - w
            }), !u && M.autoHeight && w > L && Y > w && !g && v.height("auto")
        },
        _getPosition: function (e) {
            var t = o.current, n = o.getViewport(), i = t.margin, a = o.wrap.width() + i[1] + i[3], s = o.wrap.height() + i[0] + i[2], i = {
                position: "absolute",
                top: i[0],
                left: i[3]
            };
            return t.autoCenter && t.fixed && !e && s <= n.h && a <= n.w ? i.position = "fixed" : t.locked || (i.top += n.y, i.left += n.x), i.top = h(Math.max(i.top, i.top + (n.h - s) * t.topRatio)), i.left = h(Math.max(i.left, i.left + (n.w - a) * t.leftRatio)), i
        },
        _afterZoomIn: function () {
            var e = o.current;
            e && (o.isOpen = o.isOpened = !0, o.wrap.css("overflow", "visible").addClass("fancybox-opened"), o.update(), (e.closeClick || e.nextClick && 1 < o.group.length) && o.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), o[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(o.skin).bind("click.fb", function (e) {
                e.preventDefault(), o.close()
            }), e.arrows && 1 < o.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(o.outer).bind("click.fb", o.prev), (e.loop || e.index < o.group.length - 1) && n(e.tpl.next).appendTo(o.outer).bind("click.fb", o.next)), o.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? o.opts.autoPlay && !o.player.isActive && (o.opts.autoPlay = !1, o.play()) : o.play(!1))
        },
        _afterZoomOut: function (e) {
            e = e || o.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(o, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), o.trigger("afterClose", e)
        }
    }), o.transitions = {
        getOrigPosition: function () {
            var e = o.current, t = e.element, n = e.orig, i = {}, a = 50, s = 50, r = e.hPadding, d = e.wPadding, l = o.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), c(n) ? (i = n.offset(), n.is("img") && (a = n.outerWidth(), s = n.outerHeight())) : (i.top = l.y + (l.h - s) * e.topRatio, i.left = l.x + (l.w - a) * e.leftRatio), ("fixed" === o.wrap.css("position") || e.locked) && (i.top -= l.y, i.left -= l.x), i = {
                top: h(i.top - r * e.topRatio),
                left: h(i.left - d * e.leftRatio),
                width: h(a + d),
                height: h(s + r)
            }
        }, step: function (e, t) {
            var n, i, a = t.prop;
            i = o.current;
            var s = i.wrapSpace, r = i.skinSpace;
            ("width" === a || "height" === a) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), o.isClosing && (n = 1 - n), i = "width" === a ? i.wPadding : i.hPadding, i = e - i, o.skin[a](_("width" === a ? i : i - s * n)), o.inner[a](_("width" === a ? i : i - s * n - r * n)))
        }, zoomIn: function () {
            var e = o.current, t = e.pos, i = e.openEffect, a = "elastic" === i, s = n.extend({opacity: 1}, t);
            delete s.position, a ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), o.wrap.css(t).animate(s, {
                duration: "none" === i ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: a ? this.step : null,
                complete: o._afterZoomIn
            })
        }, zoomOut: function () {
            var e = o.current, t = e.closeEffect, n = "elastic" === t, i = {opacity: .1};
            n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), o.wrap.animate(i, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: o._afterZoomOut
            })
        }, changeIn: function () {
            var e, t = o.current, n = t.nextEffect, i = t.pos, a = {opacity: 1}, s = o.direction;
            i.opacity = .1, "elastic" === n && (e = "down" === s || "up" === s ? "top" : "left", "down" === s || "right" === s ? (i[e] = h(_(i[e]) - 200), a[e] = "+=200px") : (i[e] = h(_(i[e]) + 200), a[e] = "-=200px")), "none" === n ? o._afterZoomIn() : o.wrap.css(i).animate(a, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: o._afterZoomIn
            })
        }, changeOut: function () {
            var e = o.previous, t = e.prevEffect, i = {opacity: .1}, a = o.direction;
            "elastic" === t && (i["down" === a || "up" === a ? "top" : "left"] = ("up" === a || "left" === a ? "-" : "+") + "=200px"), e.wrap.animate(i, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function () {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, o.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !u, fixed: !0},
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function (e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(o.coming ? o.coming.parent : e.parent), this.fixed = !1, e.fixed && o.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                return n(e.target).hasClass("fancybox-overlay") ? (o.isActive ? o.close() : t.close(), !1) : void 0
            }), this.overlay.css(e.css).show()
        },
        close: function () {
            var e, t;
            s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function () {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), d ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (n = r.width())) : r.width() > s.width() && (n = r.width()), this.overlay.width(n).height(r.height())
        },
        onReady: function (e, t) {
            var i = this.overlay;
            n(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = r.height() > s.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (e, t) {
            var i, a;
            t.locked && (!1 !== this.margin && (n("*").filter(function () {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = s.scrollTop(), a = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(i).scrollLeft(a)), this.open(e)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (e) {
            this.overlay && !o.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, o.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (e) {
            var t = o.current, i = t.title, a = e.type;
            if (n.isFunction(i) && (i = i.call(t.element, t)), p(i) && "" !== n.trim(i)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + i + "</div>"), a) {
                    case"inside":
                        a = o.skin;
                        break;
                    case"outside":
                        a = o.wrap;
                        break;
                    case"over":
                        a = o.inner;
                        break;
                    default:
                        a = o.skin, t.appendTo("body"), d && t.width(t.width()), t.wrapInner('<span class="child"></span>'), o.current.margin[2] += Math.abs(_(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](a)
            }
        }
    }, n.fn.fancybox = function (e) {
        var t, i = n(this), a = this.selector || "", s = function (s) {
            var r, d, l = n(this).blur(), u = t;
            !s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && !l.is(".fancybox-wrap") && (r = e.groupAttr || "data-fancybox-group", d = l.attr(r), d || (r = "rel", d = l.get(0)[r]), d && "" !== d && "nofollow" !== d && (l = a.length ? n(a) : i, l = l.filter("[" + r + '="' + d + '"]'), u = l.index(this)), e.index = u, !1 !== o.open(l, e) && s.preventDefault())
        };
        return e = e || {}, t = e.index || 0, a && !1 !== e.live ? r.undelegate(a, "click.fb-start").delegate(a + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : i.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function () {
        var t, s;
        if (n.scrollbarWidth === i && (n.scrollbarWidth = function () {
                var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), t = e.children(), t = t.innerWidth() - t.height(99).innerWidth();
                return e.remove(), t
            }), n.support.fixedPosition === i) {
            t = n.support, s = n('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var r = 20 === s[0].offsetTop || 15 === s[0].offsetTop;
            s.remove(), t.fixedPosition = r
        }
        n.extend(o.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        }), t = n(e).width(), a.addClass("fancybox-lock-test"), s = n(e).width(), a.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery), !function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = window.Slick || {};
    t = function () {
        function t(t, i) {
            var a, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (t + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, a = e(t).data("slick") || {}, s.options = e.extend({}, s.defaults, a, i), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
        }

        var n = 0;
        return t
    }(), t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var a = this;
        if ("boolean" == typeof n)i = n, n = null; else if (0 > n || n >= a.slideCount)return !1;
        a.unload(), "number" == typeof n ? 0 === n && 0 === a.$slides.length ? e(t).appendTo(a.$slideTrack) : i ? e(t).insertBefore(a.$slides.eq(n)) : e(t).insertAfter(a.$slides.eq(n)) : i === !0 ? e(t).prependTo(a.$slideTrack) : e(t).appendTo(a.$slideTrack), a.$slides = a.$slideTrack.children(this.options.slide), a.$slideTrack.children(this.options.slide).detach(), a.$slideTrack.append(a.$slides), a.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t)
        }), a.$slidesCache = a.$slides, a.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({height: t}, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, n) {
        var i = {}, a = this;
        a.animateHeight(), a.options.rtl === !0 && a.options.vertical === !1 && (t = -t), a.transformsEnabled === !1 ? a.options.vertical === !1 ? a.$slideTrack.animate({left: t}, a.options.speed, a.options.easing, n) : a.$slideTrack.animate({top: t}, a.options.speed, a.options.easing, n) : a.cssTransitions === !1 ? (a.options.rtl === !0 && (a.currentLeft = -a.currentLeft), e({animStart: a.currentLeft}).animate({animStart: t}, {
            duration: a.options.speed,
            easing: a.options.easing,
            step: function (e) {
                e = Math.ceil(e), a.options.vertical === !1 ? (i[a.animType] = "translate(" + e + "px, 0px)", a.$slideTrack.css(i)) : (i[a.animType] = "translate(0px," + e + "px)", a.$slideTrack.css(i))
            },
            complete: function () {
                n && n.call()
            }
        })) : (a.applyTransition(), t = Math.ceil(t), a.options.vertical === !1 ? i[a.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[a.animType] = "translate3d(0px," + t + "px, 0px)", a.$slideTrack.css(i), n && setTimeout(function () {
            a.disableTransition(), n.call()
        }, a.options.speed))
    }, t.prototype.asNavFor = function (t) {
        var n = this, i = n.options.asNavFor;
        i && null !== i && (i = e(i).not(n.$slider)), null !== i && "object" == typeof i && i.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this, n = {};
        t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this;
        e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) : (e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) : e.slideHandler(e.currentSlide + e.options.slidesToScroll)
    }, t.prototype.buildArrows = function () {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (n = '<ul class="' + i.options.dotsClass + '">', t = 0; t <= i.getDotCount(); t += 1)n += "<li>" + i.options.customPaging.call(this, i, t) + "</li>";
            n += "</ul>", i.$dots = e(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, n, i, a, s, r, o = this;
        if (i = document.createDocumentFragment(), s = o.$slider.children(), o.options.rows > 1) {
            for (r = o.options.slidesPerRow * o.options.rows, a = Math.ceil(s.length / r), e = 0; a > e; e++) {
                var d = document.createElement("div");
                for (t = 0; t < o.options.rows; t++) {
                    var l = document.createElement("div");
                    for (n = 0; n < o.options.slidesPerRow; n++) {
                        var u = e * r + (t * o.options.slidesPerRow + n);
                        s.get(u) && l.appendChild(s.get(u))
                    }
                    d.appendChild(l)
                }
                i.appendChild(d)
            }
            o.$slider.html(i), o.$slider.children().children().children().css({
                width: 100 / o.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, n) {
        var i, a, s, r = this, o = !1, d = r.$slider.width(), l = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = l : "slider" === r.respondTo ? s = d : "min" === r.respondTo && (s = Math.min(l, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            a = null;
            for (i in r.breakpoints)r.breakpoints.hasOwnProperty(i) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[i] && (a = r.breakpoints[i]) : s > r.breakpoints[i] && (a = r.breakpoints[i]));
            null !== a ? null !== r.activeBreakpoint ? (a !== r.activeBreakpoint || n) && (r.activeBreakpoint = a, "unslick" === r.breakpointSettings[a] ? r.unslick(a) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[a]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = a) : (r.activeBreakpoint = a, "unslick" === r.breakpointSettings[a] ? r.unslick(a) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[a]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), o = a) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), o = a), t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
        }
    }, t.prototype.changeSlide = function (t, n) {
        var i, a, s, r = this, o = e(t.target);
        switch (o.is("a") && t.preventDefault(), o.is("li") || (o = o.closest("li")), s = r.slideCount % r.options.slidesToScroll !== 0, i = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case"previous":
                a = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - a, !1, n);
                break;
            case"next":
                a = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + a, !1, n);
                break;
            case"index":
                var d = 0 === t.data.index ? 0 : t.data.index || o.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, n), o.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, n, i = this;
        if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1])e = t[t.length - 1]; else for (var a in t) {
            if (e < t[a]) {
                e = n;
                break
            }
            n = t[a]
        }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide), t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).off("mouseenter.slick", e.proxy(t.setPaused, t, !0)).off("mouseleave.slick", e.proxy(t.setPaused, t, !1))), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.$list.off("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.html(e))
    }, t.prototype.clickHandler = function (e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function (e) {
        var t = this, n = {};
        n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function (e, t) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function () {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        var e = this;
        return e.currentSlide
    }, t.prototype.getDotCount = function () {
        var e = this, t = 0, n = 0, i = 0;
        if (e.options.infinite === !0)for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (e.options.centerMode === !0)i = e.slideCount; else for (; t < e.slideCount;)++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return i - 1
    }, t.prototype.getLeft = function (e) {
        var t, n, i, a = this, s = 0;
        return a.slideOffset = 0, n = a.$slides.first().outerHeight(!0), a.options.infinite === !0 ? (a.slideCount > a.options.slidesToShow && (a.slideOffset = a.slideWidth * a.options.slidesToShow * -1, s = n * a.options.slidesToShow * -1), a.slideCount % a.options.slidesToScroll !== 0 && e + a.options.slidesToScroll > a.slideCount && a.slideCount > a.options.slidesToShow && (e > a.slideCount ? (a.slideOffset = (a.options.slidesToShow - (e - a.slideCount)) * a.slideWidth * -1, s = (a.options.slidesToShow - (e - a.slideCount)) * n * -1) : (a.slideOffset = a.slideCount % a.options.slidesToScroll * a.slideWidth * -1, s = a.slideCount % a.options.slidesToScroll * n * -1))) : e + a.options.slidesToShow > a.slideCount && (a.slideOffset = (e + a.options.slidesToShow - a.slideCount) * a.slideWidth, s = (e + a.options.slidesToShow - a.slideCount) * n), a.slideCount <= a.options.slidesToShow && (a.slideOffset = 0, s = 0), a.options.centerMode === !0 && a.options.infinite === !0 ? a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2) - a.slideWidth : a.options.centerMode === !0 && (a.slideOffset = 0, a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2)), t = a.options.vertical === !1 ? e * a.slideWidth * -1 + a.slideOffset : e * n * -1 + s, a.options.variableWidth === !0 && (i = a.slideCount <= a.options.slidesToShow || a.options.infinite === !1 ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow), t = a.options.rtl === !0 ? i[0] ? -1 * (a.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, a.options.centerMode === !0 && (i = a.slideCount <= a.options.slidesToShow || a.options.infinite === !1 ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow + 1), t = a.options.rtl === !0 ? i[0] ? -1 * (a.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (a.$list.width() - i.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        var t = this;
        return t.options[e]
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this, n = 0, i = 0, a = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;)a.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return a
    }, t.prototype.getSlick = function () {
        return this
    }, t.prototype.getSlideCount = function () {
        var t, n, i, a = this;
        return i = a.options.centerMode === !0 ? a.slideWidth * Math.floor(a.options.slidesToShow / 2) : 0, a.options.swipeToSlide === !0 ? (a.$slideTrack.find(".slick-slide").each(function (t, s) {
            return s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * a.swipeLeft ? (n = s, !1) : void 0
        }), t = Math.abs(e(n).attr("data-slick-index") - a.currentSlide) || 1) : a.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        var n = this;
        n.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
    }, t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.on("click.slick", {message: "next"}, e.changeSlide))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.setPaused, t, !0)).on("mouseleave.slick", e.proxy(t.setPaused, t, !1))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.$list.on("mouseenter.slick", e.proxy(t.setPaused, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.setPaused, t, !1)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({data: {message: "previous"}}) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({data: {message: "next"}}))
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this), n = e(this).attr("data-lazy"), i = document.createElement("img");
                i.onload = function () {
                    t.animate({opacity: 0}, 100, function () {
                        t.attr("src", n).animate({opacity: 1}, 200, function () {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, i.src = n
            })
        }

        var n, i, a, s, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (a = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = a + r.options.slidesToShow + 2) : (a = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (a = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = a + r.options.slidesToShow, r.options.fade === !0 && (a > 0 && a--, s <= r.slideCount && s++)), n = r.$slider.find(".slick-slide").slice(a, s), t(n), r.slideCount <= r.options.slidesToShow ? (i = r.$slider.find(".slick-slide"), t(i)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (i = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(i)) : 0 === r.currentSlide && (i = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {
        var e = this;
        e.changeSlide({data: {message: "next"}})
    }, t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.paused = !1, e.autoPlay()
    }, t.prototype.postSlide = function (e) {
        var t = this;
        t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.initADA()
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        var e = this;
        e.changeSlide({data: {message: "previous"}})
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function () {
        var t, n, i = this;
        t = e("img[data-lazy]", i.$slider).length, t > 0 && (n = e("img[data-lazy]", i.$slider).first(), n.attr("src", null), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function () {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad(), i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function () {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }))
    }, t.prototype.refresh = function (t) {
        var n, i, a = this;
        i = a.slideCount - a.options.slidesToShow, a.options.infinite || (a.slideCount <= a.options.slidesToShow ? a.currentSlide = 0 : a.currentSlide > i && (a.currentSlide = i)), n = a.currentSlide, a.destroy(!0), e.extend(a, a.initials, {currentSlide: n}), a.init(), t || a.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, n, i, a = this, s = a.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            a.respondTo = a.options.respondTo || "window";
            for (t in s)if (i = a.breakpoints.length - 1, n = s[t].breakpoint, s.hasOwnProperty(t)) {
                for (; i >= 0;)a.breakpoints[i] && a.breakpoints[i] === n && a.breakpoints.splice(i, 1), i--;
                a.breakpoints.push(n), a.breakpointSettings[n] = s[t].settings
            }
            a.breakpoints.sort(function (e, t) {
                return a.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [t]), t.options.autoplay === !0 && t.focusHandler()
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, i.slideCount < 1 || 0 > e || e > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function (e) {
        var t, n, i = this, a = {};
        i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", a[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(a) : (a = {}, i.cssTransitions === !1 ? (a[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(a)) : (a[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(a)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, n = this;
        n.$slides.each(function (i, a) {
            t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(a).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(a).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
        }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function (t, n, i) {
        var a, s, r = this;
        if ("responsive" === t && "array" === e.type(n))for (s in n)if ("array" !== e.type(r.options.responsive))r.options.responsive = [n[s]]; else {
            for (a = r.options.responsive.length - 1; a >= 0;)r.options.responsive[a].breakpoint === n[s].breakpoint && r.options.responsive.splice(a, 1), a--;
            r.options.responsive.push(n[s])
        } else r.options[t] = n;
        i === !0 && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this, t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }, t.prototype.setSlideClasses = function (e) {
        var t, n, i, a, s = this;
        n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), s.options.centerMode === !0 ? (t = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (a = s.slideCount % s.options.slidesToShow, i = s.options.infinite === !0 ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - a), i + a).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, n, i, a = this;
        if (a.options.fade === !0 && (a.options.centerMode = !1), a.options.infinite === !0 && a.options.fade === !1 && (n = null, a.slideCount > a.options.slidesToShow)) {
            for (i = a.options.centerMode === !0 ? a.options.slidesToShow + 1 : a.options.slidesToShow, t = a.slideCount; t > a.slideCount - i; t -= 1)n = t - 1, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1)n = t, e(a.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned");
            a.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.setPaused = function (e) {
        var t = this;
        t.options.autoplay === !0 && t.options.pauseOnHover === !0 && (t.paused = e, e ? t.autoPlayClear() : t.autoPlay())
    }, t.prototype.selectHandler = function (t) {
        var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"), a = parseInt(i.attr("data-slick-index"));
        return a || (a = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(a), void n.asNavFor(a)) : void n.slideHandler(a)
    }, t.prototype.slideHandler = function (e, t, n) {
        var i, a, s, r, o = null, d = this;
        return t = t || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === e || d.slideCount <= d.options.slidesToShow ? void 0 : (t === !1 && d.asNavFor(e), i = e, o = d.getLeft(i), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > e || e > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 ? d.animateSlide(r, function () {
            d.postSlide(i)
        }) : d.postSlide(i))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > e || e > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (i = d.currentSlide, n !== !0 ? d.animateSlide(r, function () {
            d.postSlide(i)
        }) : d.postSlide(i))) : (d.options.autoplay === !0 && clearInterval(d.autoPlayTimer), a = 0 > i ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, a]), s = d.currentSlide, d.currentSlide = a, d.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (n !== !0 ? (d.fadeSlideOut(s), d.fadeSlide(a, function () {
            d.postSlide(a)
        })) : d.postSlide(a), void d.animateHeight()) : void(n !== !0 ? d.animateSlide(o, function () {
            d.postSlide(a)
        }) : d.postSlide(a))))
    }, t.prototype.startLoad = function () {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, n, i, a = this;
        return e = a.touchObject.startX - a.touchObject.curX, t = a.touchObject.startY - a.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? a.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? a.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? a.options.rtl === !1 ? "right" : "left" : a.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "left" : "right" : "vertical"
    }, t.prototype.swipeEnd = function (e) {
        var t, n = this;
        if (n.dragging = !1, n.shouldClick = n.touchObject.swipeLength > 10 ? !1 : !0, void 0 === n.touchObject.curX)return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe)switch (n.swipeDirection()) {
            case"left":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(t), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                break;
            case"right":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(t), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")))switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case"start":
                t.swipeStart(e);
                break;
            case"move":
                t.swipeMove(e);
                break;
            case"end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, n, i, a, s, r = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !r.dragging || s && 1 !== s.length ? !1 : (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), n = r.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), a = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (a = r.touchObject.curY > r.touchObject.startY ? 1 : -1), i = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === n || r.currentSlide >= r.getDotCount() && "left" === n) && (i = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = t + i * a : r.swipeLeft = t + i * (r.$list.height() / r.listWidth) * a, r.options.verticalSwiping === !0 && (r.swipeLeft = t + i * a), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
    }, t.prototype.swipeStart = function (e) {
        var t, n = this;
        return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function () {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function () {
        var e = this;
        document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) : e.options.autoplay === !0 && (e.paused = !1, e.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
            e(this).attr({role: "option", "aria-describedby": "slick-slide" + t.instanceUid + n})
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
    }, t.prototype.activateADA = function () {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.on("focus.slick blur.slick", "*", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
                t.isPlay && (i.is(":focus") ? (t.autoPlayClear(), t.paused = !0) : (t.paused = !1, t.autoPlay()))
            }, 0)
        })
    }, e.fn.slick = function () {
        var e, n, i = this, a = arguments[0], s = Array.prototype.slice.call(arguments, 1), r = i.length;
        for (e = 0; r > e; e++)if ("object" == typeof a || "undefined" == typeof a ? i[e].slick = new t(i[e], a) : n = i[e].slick[a].apply(i[e].slick, s), "undefined" != typeof n)return n;
        return i
    }
}), !function (e) {
    "use strict";
    function t(e, t) {
        return e + ".touchspin_" + t
    }

    function n(n, i) {
        return e.map(n, function (e) {
            return t(e, i)
        })
    }

    var i = 0;
    e.fn.TouchSpin = function (t) {
        if ("destroy" === t)return void this.each(function () {
            var t = e(this), i = t.data();
            e(document).off(n(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], i.spinnerid).join(" "))
        });
        var a = {
            min: 0,
            max: 100,
            initval: "",
            replacementval: "",
            step: 1,
            decimals: 0,
            stepinterval: 100,
            forcestepdivisibility: "round",
            stepintervaldelay: 500,
            verticalbuttons: !1,
            verticalupclass: "glyphicon glyphicon-chevron-up",
            verticaldownclass: "glyphicon glyphicon-chevron-down",
            prefix: "",
            postfix: "",
            prefix_extraclass: "",
            postfix_extraclass: "",
            booster: !0,
            boostat: 10,
            maxboostedstep: !1,
            mousewheel: !0,
            buttondown_class: "btn btn-default",
            buttonup_class: "btn btn-default",
            buttondown_txt: "-",
            buttonup_txt: "+"
        }, s = {
            min: "min",
            max: "max",
            initval: "init-val",
            replacementval: "replacement-val",
            step: "step",
            decimals: "decimals",
            stepinterval: "step-interval",
            verticalbuttons: "vertical-buttons",
            verticalupclass: "vertical-up-class",
            verticaldownclass: "vertical-down-class",
            forcestepdivisibility: "force-step-divisibility",
            stepintervaldelay: "step-interval-delay",
            prefix: "prefix",
            postfix: "postfix",
            prefix_extraclass: "prefix-extra-class",
            postfix_extraclass: "postfix-extra-class",
            booster: "booster",
            boostat: "boostat",
            maxboostedstep: "max-boosted-step",
            mousewheel: "mouse-wheel",
            buttondown_class: "button-down-class",
            buttonup_class: "button-up-class",
            buttondown_txt: "button-down-txt",
            buttonup_txt: "button-up-txt"
        };
        return this.each(function () {
            function r() {
                if (!A.data("alreadyinitialized")) {
                    if (A.data("alreadyinitialized", !0), i += 1, A.data("spinnerid", i), !A.is("input"))return void console.log("Must be an input.");
                    l(), o(), M(), p(), h(), f(), g(), y(), x.input.css("display", "block")
                }
            }

            function o() {
                "" !== T.initval && "" === A.val() && A.val(T.initval)
            }

            function d(e) {
                c(e), M();
                var t = x.input.val();
                "" !== t && (t = Number(x.input.val()), x.input.val(t.toFixed(T.decimals)))
            }

            function l() {
                T = e.extend({}, a, F, u(), t)
            }

            function u() {
                var t = {};
                return e.each(s, function (e, n) {
                    var i = "bts-" + n;
                    A.is("[data-" + i + "]") && (t[e] = A.data(i))
                }), t
            }

            function c(t) {
                T = e.extend({}, T, t)
            }

            function p() {
                var e = A.val(), t = A.parent();
                "" !== e && (e = Number(e).toFixed(T.decimals)), A.data("initvalue", e).val(e), A.addClass("form-control"), t.hasClass("input-group") ? m(t) : _()
            }

            function m(t) {
                t.addClass("bootstrap-touchspin");
                var n, i, a = A.prev(), s = A.next(), r = '<span class="input-group-addon bootstrap-touchspin-prefix">' + T.prefix + "</span>", o = '<span class="input-group-addon bootstrap-touchspin-postfix">' + T.postfix + "</span>";
                a.hasClass("input-group-btn") ? (n = '<button class="' + T.buttondown_class + ' bootstrap-touchspin-down" type="button">' + T.buttondown_txt + "</button>", a.append(n)) : (n = '<span class="input-group-btn"><button class="' + T.buttondown_class + ' bootstrap-touchspin-down" type="button">' + T.buttondown_txt + "</button></span>", e(n).insertBefore(A)), s.hasClass("input-group-btn") ? (i = '<button class="' + T.buttonup_class + ' bootstrap-touchspin-up" type="button">' + T.buttonup_txt + "</button>", s.prepend(i)) : (i = '<span class="input-group-btn"><button class="' + T.buttonup_class + ' bootstrap-touchspin-up" type="button">' + T.buttonup_txt + "</button></span>", e(i).insertAfter(A)), e(r).insertBefore(A), e(o).insertAfter(A), S = t
            }

            function _() {
                var t;
                t = T.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + T.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + T.postfix + '</span><span class="input-group-btn-vertical"><button class="' + T.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + T.verticalupclass + '"></i></button><button class="' + T.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + T.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + T.buttondown_class + ' bootstrap-touchspin-down" type="button">' + T.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + T.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + T.postfix + '</span><span class="input-group-btn"><button class="' + T.buttonup_class + ' bootstrap-touchspin-up" type="button">' + T.buttonup_txt + "</button></span></div>", S = e(t).insertBefore(A), e(".bootstrap-touchspin-prefix", S).after(A), A.hasClass("input-sm") ? S.addClass("input-group-sm") : A.hasClass("input-lg") && S.addClass("input-group-lg")
            }

            function h() {
                x = {
                    down: e(".bootstrap-touchspin-down", S),
                    up: e(".bootstrap-touchspin-up", S),
                    input: e("input", S),
                    prefix: e(".bootstrap-touchspin-prefix", S).addClass(T.prefix_extraclass),
                    postfix: e(".bootstrap-touchspin-postfix", S).addClass(T.postfix_extraclass)
                }
            }

            function f() {
                "" === T.prefix && x.prefix.hide(), "" === T.postfix && x.postfix.hide()
            }

            function g() {
                A.on("keydown", function (e) {
                    var t = e.keyCode || e.which;
                    38 === t ? ("up" !== W && (b(), Y()), e.preventDefault()) : 40 === t && ("down" !== W && (L(), k()), e.preventDefault())
                }), A.on("keyup", function (e) {
                    var t = e.keyCode || e.which;
                    38 === t ? D() : 40 === t && D()
                }), A.on("blur", function () {
                    M()
                }), x.down.on("keydown", function (e) {
                    var t = e.keyCode || e.which;
                    (32 === t || 13 === t) && ("down" !== W && (L(), k()), e.preventDefault())
                }), x.down.on("keyup", function (e) {
                    var t = e.keyCode || e.which;
                    (32 === t || 13 === t) && D()
                }), x.up.on("keydown", function (e) {
                    var t = e.keyCode || e.which;
                    (32 === t || 13 === t) && ("up" !== W && (b(), Y()), e.preventDefault())
                }), x.up.on("keyup", function (e) {
                    var t = e.keyCode || e.which;
                    (32 === t || 13 === t) && D()
                }), x.down.on("mousedown.touchspin", function (e) {
                    x.down.off("touchstart.touchspin"), A.is(":disabled") || (L(), k(), e.preventDefault(), e.stopPropagation())
                }), x.down.on("touchstart.touchspin", function (e) {
                    x.down.off("mousedown.touchspin"), A.is(":disabled") || (L(), k(), e.preventDefault(), e.stopPropagation())
                }), x.up.on("mousedown.touchspin", function (e) {
                    x.up.off("touchstart.touchspin"), A.is(":disabled") || (b(), Y(), e.preventDefault(), e.stopPropagation())
                }), x.up.on("touchstart.touchspin", function (e) {
                    x.up.off("mousedown.touchspin"), A.is(":disabled") || (b(), Y(), e.preventDefault(), e.stopPropagation())
                }), x.up.on("mouseout touchleave touchend touchcancel", function (e) {
                    W && (e.stopPropagation(), D())
                }), x.down.on("mouseout touchleave touchend touchcancel", function (e) {
                    W && (e.stopPropagation(), D())
                }), x.down.on("mousemove touchmove", function (e) {
                    W && (e.stopPropagation(), e.preventDefault())
                }), x.up.on("mousemove touchmove", function (e) {
                    W && (e.stopPropagation(), e.preventDefault())
                }), e(document).on(n(["mouseup", "touchend", "touchcancel"], i).join(" "), function (e) {
                    W && (e.preventDefault(), D())
                }), e(document).on(n(["mousemove", "touchmove", "scroll", "scrollstart"], i).join(" "), function (e) {
                    W && (e.preventDefault(), D())
                }), A.on("mousewheel DOMMouseScroll", function (e) {
                    if (T.mousewheel && A.is(":focus")) {
                        var t = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
                        e.stopPropagation(), e.preventDefault(), 0 > t ? L() : b()
                    }
                })
            }

            function y() {
                A.on("touchspin.uponce", function () {
                    D(), b()
                }), A.on("touchspin.downonce", function () {
                    D(), L()
                }), A.on("touchspin.startupspin", function () {
                    Y()
                }), A.on("touchspin.startdownspin", function () {
                    k()
                }), A.on("touchspin.stopspin", function () {
                    D()
                }), A.on("touchspin.updatesettings", function (e, t) {
                    d(t)
                })
            }

            function v(e) {
                switch (T.forcestepdivisibility) {
                    case"round":
                        return (Math.round(e / T.step) * T.step).toFixed(T.decimals);
                    case"floor":
                        return (Math.floor(e / T.step) * T.step).toFixed(T.decimals);
                    case"ceil":
                        return (Math.ceil(e / T.step) * T.step).toFixed(T.decimals);
                    default:
                        return e
                }
            }

            function M() {
                var e, t, n;
                return e = A.val(), "" === e ? void("" !== T.replacementval && (A.val(T.replacementval), A.trigger("change"))) : void(T.decimals > 0 && "." === e || (t = parseFloat(e), isNaN(t) && (t = "" !== T.replacementval ? T.replacementval : 0), n = t, t.toString() !== e && (n = t), t < T.min && (n = T.min), t > T.max && (n = T.max), n = v(n), Number(e).toString() !== n.toString() && (A.val(n), A.trigger("change"))))
            }

            function w() {
                if (T.booster) {
                    var e = Math.pow(2, Math.floor(O / T.boostat)) * T.step;
                    return T.maxboostedstep && e > T.maxboostedstep && (e = T.maxboostedstep, H = Math.round(H / e) * e), Math.max(T.step, e)
                }
                return T.step
            }

            function b() {
                M(), H = parseFloat(x.input.val()), isNaN(H) && (H = 0);
                var e = H, t = w();
                H += t, H > T.max && (H = T.max, A.trigger("touchspin.on.max"), D()), x.input.val(Number(H).toFixed(T.decimals)), e !== H && A.trigger("change")
            }

            function L() {
                M(), H = parseFloat(x.input.val()), isNaN(H) && (H = 0);
                var e = H, t = w();
                H -= t, H < T.min && (H = T.min, A.trigger("touchspin.on.min"), D()), x.input.val(H.toFixed(T.decimals)), e !== H && A.trigger("change")
            }

            function k() {
                D(), O = 0, W = "down", A.trigger("touchspin.on.startspin"), A.trigger("touchspin.on.startdownspin"), P = setTimeout(function () {
                    j = setInterval(function () {
                        O++, L()
                    }, T.stepinterval)
                }, T.stepintervaldelay)
            }

            function Y() {
                D(), O = 0, W = "up", A.trigger("touchspin.on.startspin"), A.trigger("touchspin.on.startupspin"), E = setTimeout(function () {
                    C = setInterval(function () {
                        O++, b()
                    }, T.stepinterval)
                }, T.stepintervaldelay)
            }

            function D() {
                switch (clearTimeout(P), clearTimeout(E), clearInterval(j), clearInterval(C), W) {
                    case"up":
                        A.trigger("touchspin.on.stopupspin"), A.trigger("touchspin.on.stopspin");
                        break;
                    case"down":
                        A.trigger("touchspin.on.stopdownspin"), A.trigger("touchspin.on.stopspin")
                }
                O = 0, W = !1
            }

            var T, S, x, H, j, C, P, E, A = e(this), F = A.data(), O = 0, W = !1;
            r()
        })
    }
}(jQuery), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    var t = 0, n = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (n) {
            var i, a, s;
            for (s = 0; null != (a = n[s]); s++)try {
                i = e._data(a, "events"), i && i.remove && e(a).triggerHandler("remove")
            } catch (r) {
            }
            t(n)
        }
    }(e.cleanData), e.widget = function (t, n, i) {
        var a, s, r, o, d = {}, l = t.split(".")[0];
        return t = t.split(".")[1], a = l + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
            return !!e.data(t, a)
        }, e[l] = e[l] || {}, s = e[l][t], r = e[l][t] = function (e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
        }, e.extend(r, s, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), o = new n, o.options = e.widget.extend({}, o.options), e.each(i, function (t, i) {
            return e.isFunction(i) ? void(d[t] = function () {
                var e = function () {
                    return n.prototype[t].apply(this, arguments)
                }, a = function (e) {
                    return n.prototype[t].apply(this, e)
                };
                return function () {
                    var t, n = this._super, s = this._superApply;
                    return this._super = e, this._superApply = a, t = i.apply(this, arguments), this._super = n, this._superApply = s, t
                }
            }()) : void(d[t] = i)
        }), r.prototype = e.widget.extend(o, {widgetEventPrefix: s ? o.widgetEventPrefix || t : t}, d, {
            constructor: r,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), s ? (e.each(s._childConstructors, function (t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, r, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(r), e.widget.bridge(t, r), r
    }, e.widget.extend = function (t) {
        for (var i, a, s = n.call(arguments, 1), r = 0, o = s.length; o > r; r++)for (i in s[r])a = s[r][i], s[r].hasOwnProperty(i) && void 0 !== a && (e.isPlainObject(a) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], a) : e.widget.extend({}, a) : t[i] = a);
        return t
    }, e.widget.bridge = function (t, i) {
        var a = i.prototype.widgetFullName || t;
        e.fn[t] = function (s) {
            var r = "string" == typeof s, o = n.call(arguments, 1), d = this;
            return r ? this.each(function () {
                var n, i = e.data(this, a);
                return "instance" === s ? (d = i, !1) : i ? e.isFunction(i[s]) && "_" !== s.charAt(0) ? (n = i[s].apply(i, o), n !== i && void 0 !== n ? (d = n && n.jquery ? d.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
            }) : (o.length && (s = e.widget.extend.apply(null, [s].concat(o))), this.each(function () {
                var t = e.data(this, a);
                t ? (t.option(s || {}), t._init && t._init()) : e.data(this, a, new i(s, this))
            })), d
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (n, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, n) {
            var i, a, s, r = t;
            if (0 === arguments.length)return e.widget.extend({}, this.options);
            if ("string" == typeof t)if (r = {}, i = t.split("."), t = i.shift(), i.length) {
                for (a = r[t] = e.widget.extend({}, this.options[t]), s = 0; s < i.length - 1; s++)a[i[s]] = a[i[s]] || {}, a = a[i[s]];
                if (t = i.pop(), 1 === arguments.length)return void 0 === a[t] ? null : a[t];
                a[t] = n
            } else {
                if (1 === arguments.length)return void 0 === this.options[t] ? null : this.options[t];
                r[t] = n
            }
            return this._setOptions(r), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e)this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (t, n, i) {
            var a, s = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = a = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, a = this.widget()), e.each(i, function (i, r) {
                function o() {
                    return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? s[r] : r).apply(s, arguments) : void 0
                }

                "string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
                var d = i.match(/^([\w:-]*)\s*(.*)$/), l = d[1] + s.eventNamespace, u = d[2];
                u ? a.delegate(u, l, o) : n.bind(l, o)
            })
        },
        _off: function (t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }

            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, n, i) {
            var a, s, r = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent)for (a in s)a in n || (n[a] = s[a]);
            return this.element.trigger(n, i), !(e.isFunction(r) && r.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, n) {
        e.Widget.prototype["_" + t] = function (i, a, s) {
            "string" == typeof a && (a = {effect: a});
            var r, o = a ? a === !0 || "number" == typeof a ? n : a.effect || n : t;
            a = a || {}, "number" == typeof a && (a = {duration: a}), r = !e.isEmptyObject(a), a.complete = s, a.delay && i.delay(a.delay), r && e.effects && e.effects.effect[o] ? i[t](a) : o !== t && i[o] ? i[o](a.duration, a.easing, s) : i.queue(function (n) {
                e(this)[t](), s && s.call(i[0]), n()
            })
        }
    });
    e.widget
}), !function (e) {
    "use strict";
    var t = function (e, n) {
        var i = /[^\w\-\.:]/.test(e) ? new Function(t.arg + ",tmpl", "var _e=tmpl.encode" + t.helper + ",_s='" + e.replace(t.regexp, t.func) + "';return _s;") : t.cache[e] = t.cache[e] || t(t.load(e));
        return n ? i(n, t) : function (e) {
            return i(e, t)
        }
    };
    t.cache = {}, t.load = function (e) {
        return document.getElementById(e).innerHTML
    }, t.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g, t.func = function (e, t, n, i, a, s) {
        return t ? {
            "\n": "\\n",
            "\r": "\\r",
            "	": "\\t",
            " ": " "
        }[t] || "\\" + t : n ? "=" === n ? "'+_e(" + i + ")+'" : "'+(" + i + "==null?'':" + i + ")+'" : a ? "';" : s ? "_s+='" : void 0
    }, t.encReg = /[<>&"'\x00]/g, t.encMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;"
    }, t.encode = function (e) {
        return (null == e ? "" : "" + e).replace(t.encReg, function (e) {
            return t.encMap[e] || ""
        })
    }, t.arg = "o", t.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}", "function" == typeof define && define.amd ? define(function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : e.tmpl = t
}(this), !function (e) {
    "use strict";
    var t = function (e, n, i) {
        var a, s, r = document.createElement("img");
        if (r.onerror = n, r.onload = function () {
                !s || i && i.noRevoke || t.revokeObjectURL(s), n && n(t.scale(r, i))
            }, t.isInstanceOf("Blob", e) || t.isInstanceOf("File", e))a = s = t.createObjectURL(e), r._type = e.type; else {
            if ("string" != typeof e)return !1;
            a = e, i && i.crossOrigin && (r.crossOrigin = i.crossOrigin)
        }
        return a ? (r.src = a, r) : t.readFile(e, function (e) {
            var t = e.target;
            t && t.result ? r.src = t.result : n && n(e)
        })
    }, n = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL && webkitURL;
    t.isInstanceOf = function (e, t) {
        return Object.prototype.toString.call(t) === "[object " + e + "]"
    }, t.transformCoordinates = function () {
    }, t.getTransformedOptions = function (e, t) {
        var n, i, a, s, r = t.aspectRatio;
        if (!r)return t;
        n = {};
        for (i in t)t.hasOwnProperty(i) && (n[i] = t[i]);
        return n.crop = !0, a = e.naturalWidth || e.width, s = e.naturalHeight || e.height, a / s > r ? (n.maxWidth = s * r, n.maxHeight = s) : (n.maxWidth = a, n.maxHeight = a / r), n
    }, t.renderImageToCanvas = function (e, t, n, i, a, s, r, o, d, l) {
        return e.getContext("2d").drawImage(t, n, i, a, s, r, o, d, l), e
    }, t.hasCanvasOption = function (e) {
        return e.canvas || e.crop || e.aspectRatio
    }, t.scale = function (e, n) {
        n = n || {};
        var i, a, s, r, o, d, l, u, c, p = document.createElement("canvas"), m = e.getContext || t.hasCanvasOption(n) && p.getContext, _ = e.naturalWidth || e.width, h = e.naturalHeight || e.height, f = _, g = h, y = function () {
            var e = Math.max((s || f) / f, (r || g) / g);
            e > 1 && (f *= e, g *= e)
        }, v = function () {
            var e = Math.min((i || f) / f, (a || g) / g);
            1 > e && (f *= e, g *= e)
        };
        return m && (n = t.getTransformedOptions(e, n), l = n.left || 0, u = n.top || 0, n.sourceWidth ? (o = n.sourceWidth, void 0 !== n.right && void 0 === n.left && (l = _ - o - n.right)) : o = _ - l - (n.right || 0), n.sourceHeight ? (d = n.sourceHeight, void 0 !== n.bottom && void 0 === n.top && (u = h - d - n.bottom)) : d = h - u - (n.bottom || 0), f = o, g = d), i = n.maxWidth, a = n.maxHeight, s = n.minWidth, r = n.minHeight, m && i && a && n.crop ? (f = i, g = a, c = o / d - i / a, 0 > c ? (d = a * o / i, void 0 === n.top && void 0 === n.bottom && (u = (h - d) / 2)) : c > 0 && (o = i * d / a, void 0 === n.left && void 0 === n.right && (l = (_ - o) / 2))) : ((n.contain || n.cover) && (s = i = i || s, r = a = a || r), n.cover ? (v(), y()) : (y(), v())), m ? (p.width = f, p.height = g, t.transformCoordinates(p, n), t.renderImageToCanvas(p, e, l, u, o, d, 0, 0, f, g)) : (e.width = f, e.height = g, e)
    }, t.createObjectURL = function (e) {
        return n ? n.createObjectURL(e) : !1
    }, t.revokeObjectURL = function (e) {
        return n ? n.revokeObjectURL(e) : !1
    }, t.readFile = function (e, t, n) {
        if (window.FileReader) {
            var i = new FileReader;
            if (i.onload = i.onerror = t, n = n || "readAsDataURL", i[n])return i[n](e), i
        }
        return !1
    }, "function" == typeof define && define.amd ? define(function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : e.loadImage = t
}(window), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function (e) {
    "use strict";
    if (window.navigator && window.navigator.platform && /iP(hone|od|ad)/.test(window.navigator.platform)) {
        var t = e.renderImageToCanvas;
        e.detectSubsampling = function (e) {
            var t, n;
            return e.width * e.height > 1048576 ? (t = document.createElement("canvas"), t.width = t.height = 1, n = t.getContext("2d"), n.drawImage(e, -e.width + 1, 0), 0 === n.getImageData(0, 0, 1, 1).data[3]) : !1
        }, e.detectVerticalSquash = function (e, t) {
            var n, i, a, s, r, o = e.naturalHeight || e.height, d = document.createElement("canvas"), l = d.getContext("2d");
            for (t && (o /= 2), d.width = 1, d.height = o, l.drawImage(e, 0, 0), n = l.getImageData(0, 0, 1, o).data, i = 0, a = o, s = o; s > i;)r = n[4 * (s - 1) + 3], 0 === r ? a = s : i = s, s = a + i >> 1;
            return s / o || 1
        }, e.renderImageToCanvas = function (n, i, a, s, r, o, d, l, u, c) {
            if ("image/jpeg" === i._type) {
                var p, m, _, h, f = n.getContext("2d"), g = document.createElement("canvas"), y = 1024, v = g.getContext("2d");
                if (g.width = y, g.height = y, f.save(), p = e.detectSubsampling(i), p && (a /= 2, s /= 2, r /= 2, o /= 2), m = e.detectVerticalSquash(i, p), p || 1 !== m) {
                    for (s *= m, u = Math.ceil(y * u / r), c = Math.ceil(y * c / o / m), l = 0, h = 0; o > h;) {
                        for (d = 0, _ = 0; r > _;)v.clearRect(0, 0, y, y), v.drawImage(i, a, s, r, o, -_, -h, r, o), f.drawImage(g, 0, 0, y, y, d, l, u, c), _ += y, d += u;
                        h += y, l += c
                    }
                    return f.restore(), n
                }
            }
            return t(n, i, a, s, r, o, d, l, u, c)
        }
    }
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function (e) {
    "use strict";
    var t = e.hasCanvasOption, n = e.transformCoordinates, i = e.getTransformedOptions;
    e.hasCanvasOption = function (n) {
        return t.call(e, n) || n.orientation
    }, e.transformCoordinates = function (t, i) {
        n.call(e, t, i);
        var a = t.getContext("2d"), s = t.width, r = t.height, o = i.orientation;
        if (o && !(o > 8))switch (o > 4 && (t.width = r, t.height = s), o) {
            case 2:
                a.translate(s, 0), a.scale(-1, 1);
                break;
            case 3:
                a.translate(s, r), a.rotate(Math.PI);
                break;
            case 4:
                a.translate(0, r), a.scale(1, -1);
                break;
            case 5:
                a.rotate(.5 * Math.PI), a.scale(1, -1);
                break;
            case 6:
                a.rotate(.5 * Math.PI), a.translate(0, -r);
                break;
            case 7:
                a.rotate(.5 * Math.PI), a.translate(s, -r), a.scale(-1, 1);
                break;
            case 8:
                a.rotate(-.5 * Math.PI), a.translate(-s, 0)
        }
    }, e.getTransformedOptions = function (t, n) {
        var a, s, r = i.call(e, t, n), o = r.orientation;
        if (!o || o > 8 || 1 === o)return r;
        a = {};
        for (s in r)r.hasOwnProperty(s) && (a[s] = r[s]);
        switch (r.orientation) {
            case 2:
                a.left = r.right, a.right = r.left;
                break;
            case 3:
                a.left = r.right, a.top = r.bottom, a.right = r.left, a.bottom = r.top;
                break;
            case 4:
                a.top = r.bottom, a.bottom = r.top;
                break;
            case 5:
                a.left = r.top, a.top = r.left, a.right = r.bottom, a.bottom = r.right;
                break;
            case 6:
                a.left = r.top, a.top = r.right, a.right = r.bottom, a.bottom = r.left;
                break;
            case 7:
                a.left = r.bottom, a.top = r.right, a.right = r.top, a.bottom = r.left;
                break;
            case 8:
                a.left = r.bottom, a.top = r.left, a.right = r.top, a.bottom = r.right
        }
        return r.orientation > 4 && (a.maxWidth = r.maxHeight, a.maxHeight = r.maxWidth, a.minWidth = r.minHeight, a.minHeight = r.minWidth, a.sourceWidth = r.sourceHeight, a.sourceHeight = r.sourceWidth), a
    }
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image"], e) : e("object" == typeof module && module.exports ? require("./load-image") : window.loadImage)
}(function (e) {
    "use strict";
    var t = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    e.blobSlice = t && function () {
            var e = this.slice || this.webkitSlice || this.mozSlice;
            return e.apply(this, arguments)
        }, e.metaDataParsers = {jpeg: {65505: []}}, e.parseMetaData = function (t, n, i) {
        i = i || {};
        var a = this, s = i.maxMetaDataSize || 262144, r = {}, o = !(window.DataView && t && t.size >= 12 && "image/jpeg" === t.type && e.blobSlice);
        (o || !e.readFile(e.blobSlice.call(t, 0, s), function (t) {
            if (t.target.error)return console.log(t.target.error), void n(r);
            var s, o, d, l, u = t.target.result, c = new DataView(u), p = 2, m = c.byteLength - 4, _ = p;
            if (65496 === c.getUint16(0)) {
                for (; m > p && (s = c.getUint16(p), s >= 65504 && 65519 >= s || 65534 === s);) {
                    if (o = c.getUint16(p + 2) + 2, p + o > c.byteLength) {
                        console.log("Invalid meta data: Invalid segment size.");
                        break
                    }
                    if (d = e.metaDataParsers.jpeg[s])for (l = 0; l < d.length; l += 1)d[l].call(a, c, p, o, r, i);
                    p += o, _ = p
                }
                !i.disableImageHead && _ > 6 && (u.slice ? r.imageHead = u.slice(0, _) : r.imageHead = new Uint8Array(u).subarray(0, _))
            } else console.log("Invalid JPEG file: Missing JPEG marker.");
            n(r)
        }, "readAsArrayBuffer")) && n(r)
    }
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image", "load-image-meta"], e) : "object" == typeof module && module.exports ? e(require("./load-image"), require("./load-image-meta")) : e(window.loadImage)
}(function (e) {
    "use strict";
    e.ExifMap = function () {
        return this
    }, e.ExifMap.prototype.map = {Orientation: 274}, e.ExifMap.prototype.get = function (e) {
        return this[e] || this[this.map[e]]
    }, e.getExifThumbnail = function (e, t, n) {
        var i, a, s;
        if (!n || t + n > e.byteLength)return void console.log("Invalid Exif data: Invalid thumbnail data.");
        for (i = [], a = 0; n > a; a += 1)s = e.getUint8(t + a), i.push((16 > s ? "0" : "") + s.toString(16));
        return "data:image/jpeg,%" + i.join("%")
    }, e.exifTagTypes = {
        1: {
            getValue: function (e, t) {
                return e.getUint8(t)
            }, size: 1
        }, 2: {
            getValue: function (e, t) {
                return String.fromCharCode(e.getUint8(t))
            }, size: 1, ascii: !0
        }, 3: {
            getValue: function (e, t, n) {
                return e.getUint16(t, n)
            }, size: 2
        }, 4: {
            getValue: function (e, t, n) {
                return e.getUint32(t, n)
            }, size: 4
        }, 5: {
            getValue: function (e, t, n) {
                return e.getUint32(t, n) / e.getUint32(t + 4, n)
            }, size: 8
        }, 9: {
            getValue: function (e, t, n) {
                return e.getInt32(t, n)
            }, size: 4
        }, 10: {
            getValue: function (e, t, n) {
                return e.getInt32(t, n) / e.getInt32(t + 4, n)
            }, size: 8
        }
    }, e.exifTagTypes[7] = e.exifTagTypes[1], e.getExifValue = function (t, n, i, a, s, r) {
        var o, d, l, u, c, p, m = e.exifTagTypes[a];
        if (!m)return void console.log("Invalid Exif data: Invalid tag type.");
        if (o = m.size * s, d = o > 4 ? n + t.getUint32(i + 8, r) : i + 8, d + o > t.byteLength)return void console.log("Invalid Exif data: Invalid data offset.");
        if (1 === s)return m.getValue(t, d, r);
        for (l = [], u = 0; s > u; u += 1)l[u] = m.getValue(t, d + u * m.size, r);
        if (m.ascii) {
            for (c = "", u = 0; u < l.length && (p = l[u], "\x00" !== p); u += 1)c += p;
            return c
        }
        return l
    }, e.parseExifTag = function (t, n, i, a, s) {
        var r = t.getUint16(i, a);
        s.exif[r] = e.getExifValue(t, n, i, t.getUint16(i + 2, a), t.getUint32(i + 4, a), a)
    }, e.parseExifTags = function (e, t, n, i, a) {
        var s, r, o;
        if (n + 6 > e.byteLength)return void console.log("Invalid Exif data: Invalid directory offset.");
        if (s = e.getUint16(n, i), r = n + 2 + 12 * s, r + 4 > e.byteLength)return void console.log("Invalid Exif data: Invalid directory size.");
        for (o = 0; s > o; o += 1)this.parseExifTag(e, t, n + 2 + 12 * o, i, a);
        return e.getUint32(r, i)
    }, e.parseExifData = function (t, n, i, a, s) {
        if (!s.disableExif) {
            var r, o, d, l = n + 10;
            if (1165519206 === t.getUint32(n + 4)) {
                if (l + 8 > t.byteLength)return void console.log("Invalid Exif data: Invalid segment size.");
                if (0 !== t.getUint16(n + 8))return void console.log("Invalid Exif data: Missing byte alignment offset.");
                switch (t.getUint16(l)) {
                    case 18761:
                        r = !0;
                        break;
                    case 19789:
                        r = !1;
                        break;
                    default:
                        return void console.log("Invalid Exif data: Invalid byte alignment marker.")
                }
                if (42 !== t.getUint16(l + 2, r))return void console.log("Invalid Exif data: Missing TIFF marker.");
                o = t.getUint32(l + 4, r), a.exif = new e.ExifMap, o = e.parseExifTags(t, l, l + o, r, a), o && !s.disableExifThumbnail && (d = {exif: {}}, o = e.parseExifTags(t, l, l + o, r, d), d.exif[513] && (a.exif.Thumbnail = e.getExifThumbnail(t, l + d.exif[513], d.exif[514]))), a.exif[34665] && !s.disableExifSub && e.parseExifTags(t, l, l + a.exif[34665], r, a), a.exif[34853] && !s.disableExifGps && e.parseExifTags(t, l, l + a.exif[34853], r, a)
            }
        }
    }, e.metaDataParsers.jpeg[65505].push(e.parseExifData)
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["load-image", "load-image-exif"], e) : "object" == typeof module && module.exports ? e(require("./load-image"), require("./load-image-exif")) : e(window.loadImage)
}(function (e) {
    "use strict";
    e.ExifMap.prototype.tags = {
        256: "ImageWidth",
        257: "ImageHeight",
        34665: "ExifIFDPointer",
        34853: "GPSInfoIFDPointer",
        40965: "InteroperabilityIFDPointer",
        258: "BitsPerSample",
        259: "Compression",
        262: "PhotometricInterpretation",
        274: "Orientation",
        277: "SamplesPerPixel",
        284: "PlanarConfiguration",
        530: "YCbCrSubSampling",
        531: "YCbCrPositioning",
        282: "XResolution",
        283: "YResolution",
        296: "ResolutionUnit",
        273: "StripOffsets",
        278: "RowsPerStrip",
        279: "StripByteCounts",
        513: "JPEGInterchangeFormat",
        514: "JPEGInterchangeFormatLength",
        301: "TransferFunction",
        318: "WhitePoint",
        319: "PrimaryChromaticities",
        529: "YCbCrCoefficients",
        532: "ReferenceBlackWhite",
        306: "DateTime",
        270: "ImageDescription",
        271: "Make",
        272: "Model",
        305: "Software",
        315: "Artist",
        33432: "Copyright",
        36864: "ExifVersion",
        40960: "FlashpixVersion",
        40961: "ColorSpace",
        40962: "PixelXDimension",
        40963: "PixelYDimension",
        42240: "Gamma",
        37121: "ComponentsConfiguration",
        37122: "CompressedBitsPerPixel",
        37500: "MakerNote",
        37510: "UserComment",
        40964: "RelatedSoundFile",
        36867: "DateTimeOriginal",
        36868: "DateTimeDigitized",
        37520: "SubSecTime",
        37521: "SubSecTimeOriginal",
        37522: "SubSecTimeDigitized",
        33434: "ExposureTime",
        33437: "FNumber",
        34850: "ExposureProgram",
        34852: "SpectralSensitivity",
        34855: "PhotographicSensitivity",
        34856: "OECF",
        34864: "SensitivityType",
        34865: "StandardOutputSensitivity",
        34866: "RecommendedExposureIndex",
        34867: "ISOSpeed",
        34868: "ISOSpeedLatitudeyyy",
        34869: "ISOSpeedLatitudezzz",
        37377: "ShutterSpeedValue",
        37378: "ApertureValue",
        37379: "BrightnessValue",
        37380: "ExposureBias",
        37381: "MaxApertureValue",
        37382: "SubjectDistance",
        37383: "MeteringMode",
        37384: "LightSource",
        37385: "Flash",
        37396: "SubjectArea",
        37386: "FocalLength",
        41483: "FlashEnergy",
        41484: "SpatialFrequencyResponse",
        41486: "FocalPlaneXResolution",
        41487: "FocalPlaneYResolution",
        41488: "FocalPlaneResolutionUnit",
        41492: "SubjectLocation",
        41493: "ExposureIndex",
        41495: "SensingMethod",
        41728: "FileSource",
        41729: "SceneType",
        41730: "CFAPattern",
        41985: "CustomRendered",
        41986: "ExposureMode",
        41987: "WhiteBalance",
        41988: "DigitalZoomRatio",
        41989: "FocalLengthIn35mmFilm",
        41990: "SceneCaptureType",
        41991: "GainControl",
        41992: "Contrast",
        41993: "Saturation",
        41994: "Sharpness",
        41995: "DeviceSettingDescription",
        41996: "SubjectDistanceRange",
        42016: "ImageUniqueID",
        42032: "CameraOwnerName",
        42033: "BodySerialNumber",
        42034: "LensSpecification",
        42035: "LensMake",
        42036: "LensModel",
        42037: "LensSerialNumber",
        0: "GPSVersionID",
        1: "GPSLatitudeRef",
        2: "GPSLatitude",
        3: "GPSLongitudeRef",
        4: "GPSLongitude",
        5: "GPSAltitudeRef",
        6: "GPSAltitude",
        7: "GPSTimeStamp",
        8: "GPSSatellites",
        9: "GPSStatus",
        10: "GPSMeasureMode",
        11: "GPSDOP",
        12: "GPSSpeedRef",
        13: "GPSSpeed",
        14: "GPSTrackRef",
        15: "GPSTrack",
        16: "GPSImgDirectionRef",
        17: "GPSImgDirection",
        18: "GPSMapDatum",
        19: "GPSDestLatitudeRef",
        20: "GPSDestLatitude",
        21: "GPSDestLongitudeRef",
        22: "GPSDestLongitude",
        23: "GPSDestBearingRef",
        24: "GPSDestBearing",
        25: "GPSDestDistanceRef",
        26: "GPSDestDistance",
        27: "GPSProcessingMethod",
        28: "GPSAreaInformation",
        29: "GPSDateStamp",
        30: "GPSDifferential",
        31: "GPSHPositioningError"
    }, e.ExifMap.prototype.stringValues = {
        ExposureProgram: {
            0: "Undefined",
            1: "Manual",
            2: "Normal program",
            3: "Aperture priority",
            4: "Shutter priority",
            5: "Creative program",
            6: "Action program",
            7: "Portrait mode",
            8: "Landscape mode"
        },
        MeteringMode: {
            0: "Unknown",
            1: "Average",
            2: "CenterWeightedAverage",
            3: "Spot",
            4: "MultiSpot",
            5: "Pattern",
            6: "Partial",
            255: "Other"
        },
        LightSource: {
            0: "Unknown",
            1: "Daylight",
            2: "Fluorescent",
            3: "Tungsten (incandescent light)",
            4: "Flash",
            9: "Fine weather",
            10: "Cloudy weather",
            11: "Shade",
            12: "Daylight fluorescent (D 5700 - 7100K)",
            13: "Day white fluorescent (N 4600 - 5400K)",
            14: "Cool white fluorescent (W 3900 - 4500K)",
            15: "White fluorescent (WW 3200 - 3700K)",
            17: "Standard light A",
            18: "Standard light B",
            19: "Standard light C",
            20: "D55",
            21: "D65",
            22: "D75",
            23: "D50",
            24: "ISO studio tungsten",
            255: "Other"
        },
        Flash: {
            0: "Flash did not fire",
            1: "Flash fired",
            5: "Strobe return light not detected",
            7: "Strobe return light detected",
            9: "Flash fired, compulsory flash mode",
            13: "Flash fired, compulsory flash mode, return light not detected",
            15: "Flash fired, compulsory flash mode, return light detected",
            16: "Flash did not fire, compulsory flash mode",
            24: "Flash did not fire, auto mode",
            25: "Flash fired, auto mode",
            29: "Flash fired, auto mode, return light not detected",
            31: "Flash fired, auto mode, return light detected",
            32: "No flash function",
            65: "Flash fired, red-eye reduction mode",
            69: "Flash fired, red-eye reduction mode, return light not detected",
            71: "Flash fired, red-eye reduction mode, return light detected",
            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            89: "Flash fired, auto mode, red-eye reduction mode",
            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod: {
            1: "Undefined",
            2: "One-chip color area sensor",
            3: "Two-chip color area sensor",
            4: "Three-chip color area sensor",
            5: "Color sequential area sensor",
            7: "Trilinear sensor",
            8: "Color sequential linear sensor"
        },
        SceneCaptureType: {0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene"},
        SceneType: {1: "Directly photographed"},
        CustomRendered: {0: "Normal process", 1: "Custom process"},
        WhiteBalance: {0: "Auto white balance", 1: "Manual white balance"},
        GainControl: {0: "None", 1: "Low gain up", 2: "High gain up", 3: "Low gain down", 4: "High gain down"},
        Contrast: {0: "Normal", 1: "Soft", 2: "Hard"},
        Saturation: {0: "Normal", 1: "Low saturation", 2: "High saturation"},
        Sharpness: {0: "Normal", 1: "Soft", 2: "Hard"},
        SubjectDistanceRange: {0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view"},
        FileSource: {3: "DSC"},
        ComponentsConfiguration: {0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B"},
        Orientation: {
            1: "top-left",
            2: "top-right",
            3: "bottom-right",
            4: "bottom-left",
            5: "left-top",
            6: "right-top",
            7: "right-bottom",
            8: "left-bottom"
        }
    }, e.ExifMap.prototype.getText = function (e) {
        var t = this.get(e);
        switch (e) {
            case"LightSource":
            case"Flash":
            case"MeteringMode":
            case"ExposureProgram":
            case"SensingMethod":
            case"SceneCaptureType":
            case"SceneType":
            case"CustomRendered":
            case"WhiteBalance":
            case"GainControl":
            case"Contrast":
            case"Saturation":
            case"Sharpness":
            case"SubjectDistanceRange":
            case"FileSource":
            case"Orientation":
                return this.stringValues[e][t];
            case"ExifVersion":
            case"FlashpixVersion":
                return String.fromCharCode(t[0], t[1], t[2], t[3]);
            case"ComponentsConfiguration":
                return this.stringValues[e][t[0]] + this.stringValues[e][t[1]] + this.stringValues[e][t[2]] + this.stringValues[e][t[3]];
            case"GPSVersionID":
                return t[0] + "." + t[1] + "." + t[2] + "." + t[3]
        }
        return String(t)
    }, function (e) {
        var t, n = e.tags, i = e.map;
        for (t in n)n.hasOwnProperty(t) && (i[n[t]] = t)
    }(e.ExifMap.prototype), e.ExifMap.prototype.getAll = function () {
        var e, t, n = {};
        for (e in this)this.hasOwnProperty(e) && (t = this.tags[e], t && (n[t] = this.getText(t)));
        return n
    }
}), !function (e) {
    "use strict";
    var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype, n = e.Blob && function () {
            try {
                return Boolean(new Blob)
            } catch (e) {
                return !1
            }
        }(), i = n && e.Uint8Array && function () {
            try {
                return 100 === new Blob([new Uint8Array(100)]).size
            } catch (e) {
                return !1
            }
        }(), a = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder, s = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, r = (n || a) && e.atob && e.ArrayBuffer && e.Uint8Array && function (e) {
            var t, r, o, d, l, u, c, p, m;
            if (t = e.match(s), !t)throw new Error("invalid data URI");
            for (r = t[2] ? t[1] : "text/plain" + (t[3] || ";charset=US-ASCII"), o = !!t[4], d = e.slice(t[0].length), l = o ? atob(d) : decodeURIComponent(d), u = new ArrayBuffer(l.length), c = new Uint8Array(u), p = 0; p < l.length; p += 1)c[p] = l.charCodeAt(p);
            return n ? new Blob([i ? c : u], {type: r}) : (m = new a, m.append(u), m.getBlob(r))
        };
    e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function (e, n, i) {
        e(i && t.toDataURL && r ? r(this.toDataURL(n, i)) : this.mozGetAsFile("blob", n))
    } : t.toDataURL && r && (t.toBlob = function (e, t, n) {
        e(r(this.toDataURL(t, n)))
    })), "function" == typeof define && define.amd ? define(function () {
        return r
    }) : "object" == typeof module && module.exports ? module.exports = r : e.dataURLtoBlob = r
}(window), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery)
}(function (e) {
    "use strict";
    var t = 0;
    e.ajaxTransport("iframe", function (n) {
        if (n.async) {
            var i, a, s, r = n.initialIframeSrc || "javascript:false;";
            return {
                send: function (o, d) {
                    i = e('<form style="display:none;"></form>'), i.attr("accept-charset", n.formAcceptCharset), s = /\?/.test(n.url) ? "&" : "?", "DELETE" === n.type ? (n.url = n.url + s + "_method=DELETE", n.type = "POST") : "PUT" === n.type ? (n.url = n.url + s + "_method=PUT", n.type = "POST") : "PATCH" === n.type && (n.url = n.url + s + "_method=PATCH", n.type = "POST"), t += 1, a = e('<iframe src="' + r + '" name="iframe-transport-' + t + '"></iframe>').bind("load", function () {
                        var t, s = e.isArray(n.paramName) ? n.paramName : [n.paramName];
                        a.unbind("load").bind("load", function () {
                            var t;
                            try {
                                if (t = a.contents(), !t.length || !t[0].firstChild)throw new Error
                            } catch (n) {
                                t = void 0
                            }
                            d(200, "success", {iframe: t}), e('<iframe src="' + r + '"></iframe>').appendTo(i), window.setTimeout(function () {
                                i.remove()
                            }, 0)
                        }), i.prop("target", a.prop("name")).prop("action", n.url).prop("method", n.type), n.formData && e.each(n.formData, function (t, n) {
                            e('<input type="hidden"/>').prop("name", n.name).val(n.value).appendTo(i)
                        }), n.fileInput && n.fileInput.length && "POST" === n.type && (t = n.fileInput.clone(), n.fileInput.after(function (e) {
                            return t[e]
                        }), n.paramName && n.fileInput.each(function (t) {
                            e(this).prop("name", s[t] || n.paramName)
                        }), i.append(n.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"), n.fileInput.removeAttr("form")), i.submit(), t && t.length && n.fileInput.each(function (n, i) {
                            var a = e(t[n]);
                            e(i).prop("name", a.prop("name")).attr("form", a.attr("form")), a.replaceWith(i)
                        })
                    }), i.append(a).appendTo(document.body)
                }, abort: function () {
                    a && a.unbind("load").prop("src", r), i && i.remove()
                }
            }
        }
    }), e.ajaxSetup({
        converters: {
            "iframe text": function (t) {
                return t && e(t[0].body).text()
            }, "iframe json": function (t) {
                return t && e.parseJSON(e(t[0].body).text())
            }, "iframe html": function (t) {
                return t && e(t[0].body).html()
            }, "iframe xml": function (t) {
                var n = t && t[0];
                return n && e.isXMLDoc(n) ? n : e.parseXML(n.XMLDocument && n.XMLDocument.xml || e(n.body).html())
            }, "iframe script": function (t) {
                return t && e.globalEval(e(t[0].body).text())
            }
        }
    })
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery)
}(function (e) {
    "use strict";
    function t(t) {
        var n = "dragover" === t;
        return function (i) {
            i.dataTransfer = i.originalEvent && i.originalEvent.dataTransfer;
            var a = i.dataTransfer;
            a && -1 !== e.inArray("Files", a.types) && this._trigger(t, e.Event(t, {delegatedEvent: i})) !== !1 && (i.preventDefault(), n && (a.dropEffect = "copy"))
        }
    }

    e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file">').prop("disabled")), e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), e.support.xhrFormDataFileUpload = !!window.FormData, e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), e.widget("blueimp.fileupload", {
        options: {
            dropZone: e(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {uploadedBytes: "Uploaded bytes exceed file size"},
            i18n: function (t, n) {
                return t = this.messages[t] || t.toString(), n && e.each(n, function (e, n) {
                    t = t.replace("{" + e + "}", n)
                }), t
            },
            formData: function (e) {
                return e.serializeArray()
            },
            add: function (t, n) {
                return t.isDefaultPrevented() ? !1 : void((n.autoUpload || n.autoUpload !== !1 && e(this).fileupload("option", "autoUpload")) && n.process().done(function () {
                    n.submit()
                }))
            },
            processData: !1,
            contentType: !1,
            cache: !1,
            timeout: 0
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: e.support.blobSlice && function () {
            var e = this.slice || this.webkitSlice || this.mozSlice;
            return e.apply(this, arguments)
        },
        _BitrateTimer: function () {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function (e, t, n) {
                var i = e - this.timestamp;
                return (!this.bitrate || !n || i > n) && (this.bitrate = (t - this.loaded) * (1e3 / i) * 8, this.loaded = t, this.timestamp = e), this.bitrate
            }
        },
        _isXHRUpload: function (t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload)
        },
        _getFormData: function (t) {
            var n;
            return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : "object" === e.type(t.formData) ? (n = [], e.each(t.formData, function (e, t) {
                n.push({name: e, value: t})
            }), n) : []
        },
        _getTotal: function (t) {
            var n = 0;
            return e.each(t, function (e, t) {
                n += t.size || 1
            }), n
        },
        _initProgressObject: function (t) {
            var n = {loaded: 0, total: 0, bitrate: 0};
            t._progress ? e.extend(t._progress, n) : t._progress = n
        },
        _initResponseObject: function (e) {
            var t;
            if (e._response)for (t in e._response)e._response.hasOwnProperty(t) && delete e._response[t]; else e._response = {}
        },
        _onProgress: function (t, n) {
            if (t.lengthComputable) {
                var i, a = Date.now ? Date.now() : (new Date).getTime();
                if (n._time && n.progressInterval && a - n._time < n.progressInterval && t.loaded !== t.total)return;
                n._time = a, i = Math.floor(t.loaded / t.total * (n.chunkSize || n._progress.total)) + (n.uploadedBytes || 0), this._progress.loaded += i - n._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(a, this._progress.loaded, n.bitrateInterval), n._progress.loaded = n.loaded = i, n._progress.bitrate = n.bitrate = n._bitrateTimer.getBitrate(a, i, n.bitrateInterval), this._trigger("progress", e.Event("progress", {delegatedEvent: t}), n), this._trigger("progressall", e.Event("progressall", {delegatedEvent: t}), this._progress)
            }
        },
        _initProgressListener: function (t) {
            var n = this, i = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            i.upload && (e(i.upload).bind("progress", function (e) {
                var i = e.originalEvent;
                e.lengthComputable = i.lengthComputable, e.loaded = i.loaded, e.total = i.total, n._onProgress(e, t)
            }), t.xhr = function () {
                return i
            })
        },
        _isInstanceOf: function (e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]"
        },
        _initXHRData: function (t) {
            var n, i = this, a = t.files[0], s = t.multipart || !e.support.xhrFileUpload, r = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
            t.headers = e.extend({}, t.headers), t.contentRange && (t.headers["Content-Range"] = t.contentRange), s && !t.blob && this._isInstanceOf("File", a) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(a.name) + '"'), s ? e.support.xhrFormDataFileUpload && (t.postMessage ? (n = this._getFormData(t), t.blob ? n.push({
                name: r,
                value: t.blob
            }) : e.each(t.files, function (i, a) {
                n.push({name: "array" === e.type(t.paramName) && t.paramName[i] || r, value: a})
            })) : (i._isInstanceOf("FormData", t.formData) ? n = t.formData : (n = new FormData, e.each(this._getFormData(t), function (e, t) {
                n.append(t.name, t.value)
            })), t.blob ? n.append(r, t.blob, a.name) : e.each(t.files, function (a, s) {
                (i._isInstanceOf("File", s) || i._isInstanceOf("Blob", s)) && n.append("array" === e.type(t.paramName) && t.paramName[a] || r, s, s.uploadName || s.name)
            })), t.data = n) : (t.contentType = a.type || "application/octet-stream", t.data = t.blob || a), t.blob = null
        },
        _initIframeSettings: function (t) {
            var n = e("<a></a>").prop("href", t.url).prop("host");
            t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && n && n !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            })
        },
        _initDataSettings: function (e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
        },
        _getParamName: function (t) {
            var n = e(t.fileInput), i = t.paramName;
            return i ? e.isArray(i) || (i = [i]) : (i = [], n.each(function () {
                for (var t = e(this), n = t.prop("name") || "files[]", a = (t.prop("files") || [1]).length; a;)i.push(n), a -= 1
            }), i.length || (i = [n.prop("name") || "files[]"])), i
        },
        _initFormSettings: function (t) {
            t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))), t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(), "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"))
        },
        _getAJAXSettings: function (t) {
            var n = e.extend({}, this.options, t);
            return this._initFormSettings(n), this._initDataSettings(n), n
        },
        _getDeferredState: function (e) {
            return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function (e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e
        },
        _getXHRPromise: function (t, n, i) {
            var a = e.Deferred(), s = a.promise();
            return n = n || this.options.context || s, t === !0 ? a.resolveWith(n, i) : t === !1 && a.rejectWith(n, i), s.abort = a.promise, this._enhancePromise(s)
        },
        _addConvenienceMethods: function (t, n) {
            var i = this, a = function (t) {
                return e.Deferred().resolveWith(i, t).promise()
            };
            n.process = function (t, s) {
                return (t || s) && (n._processQueue = this._processQueue = (this._processQueue || a([this])).pipe(function () {
                    return n.errorThrown ? e.Deferred().rejectWith(i, [n]).promise() : a(arguments)
                }).pipe(t, s)), this._processQueue || a([this])
            }, n.submit = function () {
                return "pending" !== this.state() && (n.jqXHR = this.jqXHR = i._trigger("submit", e.Event("submit", {delegatedEvent: t}), this) !== !1 && i._onSend(t, this)), this.jqXHR || i._getXHRPromise()
            }, n.abort = function () {
                return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", i._trigger("fail", null, this), i._getXHRPromise(!1))
            }, n.state = function () {
                return this.jqXHR ? i._getDeferredState(this.jqXHR) : this._processQueue ? i._getDeferredState(this._processQueue) : void 0
            }, n.processing = function () {
                return !this.jqXHR && this._processQueue && "pending" === i._getDeferredState(this._processQueue)
            }, n.progress = function () {
                return this._progress
            }, n.response = function () {
                return this._response
            }
        },
        _getUploadedBytes: function (e) {
            var t = e.getResponseHeader("Range"), n = t && t.split("-"), i = n && n.length > 1 && parseInt(n[1], 10);
            return i && i + 1
        },
        _chunkedUpload: function (t, n) {
            t.uploadedBytes = t.uploadedBytes || 0;
            var i, a, s = this, r = t.files[0], o = r.size, d = t.uploadedBytes, l = t.maxChunkSize || o, u = this._blobSlice, c = e.Deferred(), p = c.promise();
            return this._isXHRUpload(t) && u && (d || o > l) && !t.data ? n ? !0 : d >= o ? (r.error = t.i18n("uploadedBytes"), this._getXHRPromise(!1, t.context, [null, "error", r.error])) : (a = function () {
                var n = e.extend({}, t), p = n._progress.loaded;
                n.blob = u.call(r, d, d + l, r.type), n.chunkSize = n.blob.size, n.contentRange = "bytes " + d + "-" + (d + n.chunkSize - 1) + "/" + o, s._initXHRData(n), s._initProgressListener(n), i = (s._trigger("chunksend", null, n) !== !1 && e.ajax(n) || s._getXHRPromise(!1, n.context)).done(function (i, r, l) {
                    d = s._getUploadedBytes(l) || d + n.chunkSize, p + n.chunkSize - n._progress.loaded && s._onProgress(e.Event("progress", {
                        lengthComputable: !0,
                        loaded: d - n.uploadedBytes,
                        total: d - n.uploadedBytes
                    }), n), t.uploadedBytes = n.uploadedBytes = d, n.result = i, n.textStatus = r, n.jqXHR = l, s._trigger("chunkdone", null, n), s._trigger("chunkalways", null, n), o > d ? a() : c.resolveWith(n.context, [i, r, l])
                }).fail(function (e, t, i) {
                    n.jqXHR = e, n.textStatus = t, n.errorThrown = i, s._trigger("chunkfail", null, n), s._trigger("chunkalways", null, n), c.rejectWith(n.context, [e, t, i])
                })
            }, this._enhancePromise(p), p.abort = function () {
                return i.abort()
            }, a(), p) : !1
        },
        _beforeSend: function (e, t) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
        },
        _onDone: function (t, n, i, a) {
            var s = a._progress.total, r = a._response;
            a._progress.loaded < s && this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: s,
                total: s
            }), a), r.result = a.result = t, r.textStatus = a.textStatus = n, r.jqXHR = a.jqXHR = i, this._trigger("done", null, a)
        },
        _onFail: function (e, t, n, i) {
            var a = i._response;
            i.recalculateProgress && (this._progress.loaded -= i._progress.loaded, this._progress.total -= i._progress.total), a.jqXHR = i.jqXHR = e, a.textStatus = i.textStatus = t, a.errorThrown = i.errorThrown = n, this._trigger("fail", null, i)
        },
        _onAlways: function (e, t, n, i) {
            this._trigger("always", null, i)
        },
        _onSend: function (t, n) {
            n.submit || this._addConvenienceMethods(t, n);
            var i, a, s, r, o = this, d = o._getAJAXSettings(n), l = function () {
                return o._sending += 1, d._bitrateTimer = new o._BitrateTimer, i = i || ((a || o._trigger("send", e.Event("send", {delegatedEvent: t}), d) === !1) && o._getXHRPromise(!1, d.context, a) || o._chunkedUpload(d) || e.ajax(d)).done(function (e, t, n) {
                        o._onDone(e, t, n, d)
                    }).fail(function (e, t, n) {
                        o._onFail(e, t, n, d)
                    }).always(function (e, t, n) {
                        if (o._onAlways(e, t, n, d), o._sending -= 1, o._active -= 1, d.limitConcurrentUploads && d.limitConcurrentUploads > o._sending)for (var i = o._slots.shift(); i;) {
                            if ("pending" === o._getDeferredState(i)) {
                                i.resolve();
                                break
                            }
                            i = o._slots.shift()
                        }
                        0 === o._active && o._trigger("stop")
                    })
            };
            return this._beforeSend(t, d), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (s = e.Deferred(), this._slots.push(s), r = s.pipe(l)) : (this._sequence = this._sequence.pipe(l, l), r = this._sequence), r.abort = function () {
                return a = [void 0, "abort", "abort"], i ? i.abort() : (s && s.rejectWith(d.context, a), l())
            }, this._enhancePromise(r)) : l()
        },
        _onAdd: function (t, n) {
            var i, a, s, r, o = this, d = !0, l = e.extend({}, this.options, n), u = n.files, c = u.length, p = l.limitMultiFileUploads, m = l.limitMultiFileUploadSize, _ = l.limitMultiFileUploadSizeOverhead, h = 0, f = this._getParamName(l), g = 0;
            if (!c)return !1;
            if (m && void 0 === u[0].size && (m = void 0), (l.singleFileUploads || p || m) && this._isXHRUpload(l))if (l.singleFileUploads || m || !p)if (!l.singleFileUploads && m)for (s = [], i = [], r = 0; c > r; r += 1)h += u[r].size + _, (r + 1 === c || h + u[r + 1].size + _ > m || p && r + 1 - g >= p) && (s.push(u.slice(g, r + 1)), a = f.slice(g, r + 1), a.length || (a = f), i.push(a), g = r + 1, h = 0); else i = f; else for (s = [], i = [], r = 0; c > r; r += p)s.push(u.slice(r, r + p)), a = f.slice(r, r + p), a.length || (a = f), i.push(a); else s = [u], i = [f];
            return n.originalFiles = u, e.each(s || u, function (a, r) {
                var l = e.extend({}, n);
                return l.files = s ? r : [r], l.paramName = i[a], o._initResponseObject(l), o._initProgressObject(l), o._addConvenienceMethods(t, l), d = o._trigger("add", e.Event("add", {delegatedEvent: t}), l)
            }), d
        },
        _replaceFileInput: function (t) {
            var n = t.fileInput, i = n.clone(!0), a = n.is(document.activeElement);
            t.fileInputClone = i, e("<form></form>").append(i)[0].reset(), n.after(i).detach(), a && i.focus(), e.cleanData(n.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, t) {
                return t === n[0] ? i[0] : t
            }), n[0] === this.element[0] && (this.element = i)
        },
        _handleFileTreeEntry: function (t, n) {
            var i, a = this, s = e.Deferred(), r = function (e) {
                e && !e.entry && (e.entry = t), s.resolve([e])
            }, o = function (e) {
                a._handleFileTreeEntries(e, n + t.name + "/").done(function (e) {
                    s.resolve(e)
                }).fail(r)
            }, d = function () {
                i.readEntries(function (e) {
                    e.length ? (l = l.concat(e), d()) : o(l)
                }, r)
            }, l = [];
            return n = n || "", t.isFile ? t._file ? (t._file.relativePath = n, s.resolve(t._file)) : t.file(function (e) {
                e.relativePath = n, s.resolve(e)
            }, r) : t.isDirectory ? (i = t.createReader(), d()) : s.resolve([]), s.promise()
        },
        _handleFileTreeEntries: function (t, n) {
            var i = this;
            return e.when.apply(e, e.map(t, function (e) {
                return i._handleFileTreeEntry(e, n)
            })).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function (t) {
            t = t || {};
            var n = t.items;
            return n && n.length && (n[0].webkitGetAsEntry || n[0].getAsEntry) ? this._handleFileTreeEntries(e.map(n, function (e) {
                var t;
                return e.webkitGetAsEntry ? (t = e.webkitGetAsEntry(), t && (t._file = e.getAsFile()), t) : e.getAsEntry()
            })) : e.Deferred().resolve(e.makeArray(t.files)).promise()
        },
        _getSingleFileInputFiles: function (t) {
            t = e(t);
            var n, i, a = t.prop("webkitEntries") || t.prop("entries");
            if (a && a.length)return this._handleFileTreeEntries(a);
            if (n = e.makeArray(t.prop("files")), n.length)void 0 === n[0].name && n[0].fileName && e.each(n, function (e, t) {
                t.name = t.fileName, t.size = t.fileSize
            }); else {
                if (i = t.prop("value"), !i)return e.Deferred().resolve([]).promise();
                n = [{name: i.replace(/^.*\\/, "")}]
            }
            return e.Deferred().resolve(n).promise()
        },
        _getFileInputFiles: function (t) {
            return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(t)
        },
        _onChange: function (t) {
            var n = this, i = {fileInput: e(t.target), form: e(t.target.form)};
            this._getFileInputFiles(i.fileInput).always(function (a) {
                i.files = a, n.options.replaceFileInput && n._replaceFileInput(i), n._trigger("change", e.Event("change", {delegatedEvent: t}), i) !== !1 && n._onAdd(t, i)
            })
        },
        _onPaste: function (t) {
            var n = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items, i = {files: []};
            n && n.length && (e.each(n, function (e, t) {
                var n = t.getAsFile && t.getAsFile();
                n && i.files.push(n)
            }), this._trigger("paste", e.Event("paste", {delegatedEvent: t}), i) !== !1 && this._onAdd(t, i))
        },
        _onDrop: function (t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var n = this, i = t.dataTransfer, a = {};
            i && i.files && i.files.length && (t.preventDefault(), this._getDroppedFiles(i).always(function (i) {
                a.files = i, n._trigger("drop", e.Event("drop", {delegatedEvent: t}), a) !== !1 && n._onAdd(t, a)
            }))
        },
        _onDragOver: t("dragover"),
        _onDragEnter: t("dragenter"),
        _onDragLeave: t("dragleave"),
        _initEventHandlers: function () {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {paste: this._onPaste})), e.support.fileInput && this._on(this.options.fileInput, {change: this._onChange})
        },
        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
        },
        _setOption: function (t, n) {
            var i = -1 !== e.inArray(t, this._specialOptions);
            i && this._destroyEventHandlers(), this._super(t, n), i && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function () {
            var t = this.options;
            void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone))
        },
        _getRegExp: function (e) {
            var t = e.split("/"), n = t.pop();
            return t.shift(), new RegExp(t.join("/"), n)
        },
        _isRegExpOption: function (t, n) {
            return "url" !== t && "string" === e.type(n) && /^\/.*\/[igm]{0,3}$/.test(n)
        },
        _initDataAttributes: function () {
            var t = this, n = this.options, i = this.element.data();
            e.each(this.element[0].attributes, function (e, a) {
                var s, r = a.name.toLowerCase();
                /^data-/.test(r) && (r = r.slice(5).replace(/-[a-z]/g, function (e) {
                    return e.charAt(1).toUpperCase()
                }), s = i[r], t._isRegExpOption(r, s) && (s = t._getRegExp(s)), n[r] = s)
            })
        },
        _create: function () {
            this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
        },
        active: function () {
            return this._active
        },
        progress: function () {
            return this._progress
        },
        add: function (t) {
            var n = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function (e) {
                t.files = e, n._onAdd(null, t)
            }) : (t.files = e.makeArray(t.files), this._onAdd(null, t)))
        },
        send: function (t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var n, i, a = this, s = e.Deferred(), r = s.promise();
                    return r.abort = function () {
                        return i = !0, n ? n.abort() : (s.reject(null, "abort", "abort"), r)
                    }, this._getFileInputFiles(t.fileInput).always(function (e) {
                        if (!i) {
                            if (!e.length)return void s.reject();
                            t.files = e, n = a._onSend(null, t), n.then(function (e, t, n) {
                                s.resolve(e, t, n)
                            }, function (e, t, n) {
                                s.reject(e, t, n)
                            })
                        }
                    }), this._enhancePromise(r)
                }
                if (t.files = e.makeArray(t.files), t.files.length)return this._onSend(null, t)
            }
            return this._getXHRPromise(!1, t && t.context)
        }
    })
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.fileupload"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery)
}(function (e) {
    "use strict";
    var t = e.blueimp.fileupload.prototype.options.add;
    e.widget("blueimp.fileupload", e.blueimp.fileupload, {
        options: {
            processQueue: [], add: function (n, i) {
                var a = e(this);
                i.process(function () {
                    return a.fileupload("process", i)
                }), t.call(this, n, i)
            }
        }, processActions: {}, _processFile: function (t, n) {
            var i = this, a = e.Deferred().resolveWith(i, [t]), s = a.promise();
            return this._trigger("process", null, t), e.each(t.processQueue, function (t, a) {
                var r = function (t) {
                    return n.errorThrown ? e.Deferred().rejectWith(i, [n]).promise() : i.processActions[a.action].call(i, t, a)
                };
                s = s.pipe(r, a.always && r)
            }), s.done(function () {
                i._trigger("processdone", null, t), i._trigger("processalways", null, t)
            }).fail(function () {
                i._trigger("processfail", null, t), i._trigger("processalways", null, t)
            }), s
        }, _transformProcessQueue: function (t) {
            var n = [];
            e.each(t.processQueue, function () {
                var i = {}, a = this.action, s = this.prefix === !0 ? a : this.prefix;
                e.each(this, function (n, a) {
                    "string" === e.type(a) && "@" === a.charAt(0) ? i[n] = t[a.slice(1) || (s ? s + n.charAt(0).toUpperCase() + n.slice(1) : n)] : i[n] = a
                }), n.push(i)
            }), t.processQueue = n
        }, processing: function () {
            return this._processing
        }, process: function (t) {
            var n = this, i = e.extend({}, this.options, t);
            return i.processQueue && i.processQueue.length && (this._transformProcessQueue(i), 0 === this._processing && this._trigger("processstart"), e.each(t.files, function (a) {
                var s = a ? e.extend({}, i) : i, r = function () {
                    return t.errorThrown ? e.Deferred().rejectWith(n, [t]).promise() : n._processFile(s, t)
                };
                s.index = a, n._processing += 1, n._processingQueue = n._processingQueue.pipe(r, r).always(function () {
                    n._processing -= 1, 0 === n._processing && n._trigger("processstop")
                })
            })), this._processingQueue
        }, _create: function () {
            this._super(), this._processing = 0, this._processingQueue = e.Deferred().resolveWith(this).promise()
        }
    })
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "load-image", "load-image-meta", "load-image-exif", "load-image-ios", "canvas-to-blob", "./jquery.fileupload-process"], e) : "object" == typeof exports ? e(require("jquery"), require("load-image")) : e(window.jQuery, window.loadImage)
}(function (e, t) {
    "use strict";
    e.blueimp.fileupload.prototype.options.processQueue.unshift({
        action: "loadImageMetaData",
        disableImageHead: "@",
        disableExif: "@",
        disableExifThumbnail: "@",
        disableExifSub: "@",
        disableExifGps: "@",
        disabled: "@disableImageMetaDataLoad"
    }, {
        action: "loadImage",
        prefix: !0,
        fileTypes: "@",
        maxFileSize: "@",
        noRevoke: "@",
        disabled: "@disableImageLoad"
    }, {
        action: "resizeImage",
        prefix: "image",
        maxWidth: "@",
        maxHeight: "@",
        minWidth: "@",
        minHeight: "@",
        crop: "@",
        orientation: "@",
        forceResize: "@",
        disabled: "@disableImageResize"
    }, {
        action: "saveImage",
        quality: "@imageQuality",
        type: "@imageType",
        disabled: "@disableImageResize"
    }, {action: "saveImageMetaData", disabled: "@disableImageMetaDataSave"}, {
        action: "resizeImage",
        prefix: "preview",
        maxWidth: "@",
        maxHeight: "@",
        minWidth: "@",
        minHeight: "@",
        crop: "@",
        orientation: "@",
        thumbnail: "@",
        canvas: "@",
        disabled: "@disableImagePreview"
    }, {
        action: "setImage",
        name: "@imagePreviewName",
        disabled: "@disableImagePreview"
    }, {
        action: "deleteImageReferences",
        disabled: "@disableImageReferencesDeletion"
    }), e.widget("blueimp.fileupload", e.blueimp.fileupload, {
        options: {
            loadImageFileTypes: /^image\/(gif|jpeg|png|svg\+xml)$/,
            loadImageMaxFileSize: 1e7,
            imageMaxWidth: 1920,
            imageMaxHeight: 1080,
            imageOrientation: !1,
            imageCrop: !1,
            disableImageResize: !0,
            previewMaxWidth: 80,
            previewMaxHeight: 80,
            previewOrientation: !0,
            previewThumbnail: !0,
            previewCrop: !1,
            previewCanvas: !0
        }, processActions: {
            loadImage: function (n, i) {
                if (i.disabled)return n;
                var a = this, s = n.files[n.index], r = e.Deferred();
                return "number" === e.type(i.maxFileSize) && s.size > i.maxFileSize || i.fileTypes && !i.fileTypes.test(s.type) || !t(s, function (e) {
                    e.src && (n.img = e), r.resolveWith(a, [n])
                }, i) ? n : r.promise()
            }, resizeImage: function (n, i) {
                if (i.disabled || !n.canvas && !n.img)return n;
                i = e.extend({canvas: !0}, i);
                var a, s = this, r = e.Deferred(), o = i.canvas && n.canvas || n.img, d = function (e) {
                    e && (e.width !== o.width || e.height !== o.height || i.forceResize) && (n[e.getContext ? "canvas" : "img"] = e), n.preview = e, r.resolveWith(s, [n])
                };
                if (n.exif) {
                    if (i.orientation === !0 && (i.orientation = n.exif.get("Orientation")), i.thumbnail && (a = n.exif.get("Thumbnail")))return t(a, d, i), r.promise();
                    n.orientation ? delete i.orientation : n.orientation = i.orientation
                }
                return o ? (d(t.scale(o, i)), r.promise()) : n
            }, saveImage: function (t, n) {
                if (!t.canvas || n.disabled)return t;
                var i = this, a = t.files[t.index], s = e.Deferred();
                return t.canvas.toBlob ? (t.canvas.toBlob(function (e) {
                    e.name || (a.type === e.type ? e.name = a.name : a.name && (e.name = a.name.replace(/\.\w+$/, "." + e.type.substr(6)))), a.type !== e.type && delete t.imageHead, t.files[t.index] = e, s.resolveWith(i, [t])
                }, n.type || a.type, n.quality), s.promise()) : t
            }, loadImageMetaData: function (n, i) {
                if (i.disabled)return n;
                var a = this, s = e.Deferred();
                return t.parseMetaData(n.files[n.index], function (t) {
                    e.extend(n, t), s.resolveWith(a, [n])
                }, i), s.promise()
            }, saveImageMetaData: function (e, t) {
                if (!(e.imageHead && e.canvas && e.canvas.toBlob) || t.disabled)return e;
                var n = e.files[e.index], i = new Blob([e.imageHead, this._blobSlice.call(n, 20)], {type: n.type});
                return i.name = n.name, e.files[e.index] = i, e
            }, setImage: function (e, t) {
                return e.preview && !t.disabled && (e.files[e.index][t.name || "preview"] = e.preview), e
            }, deleteImageReferences: function (e, t) {
                return t.disabled || (delete e.img, delete e.canvas, delete e.preview, delete e.imageHead), e
            }
        }
    })
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "load-image", "./jquery.fileupload-process"], e) : "object" == typeof exports ? e(require("jquery"), require("load-image")) : e(window.jQuery, window.loadImage)
}(function (e, t) {
    "use strict";
    e.blueimp.fileupload.prototype.options.processQueue.unshift({
        action: "loadAudio",
        prefix: !0,
        fileTypes: "@",
        maxFileSize: "@",
        disabled: "@disableAudioPreview"
    }, {
        action: "setAudio",
        name: "@audioPreviewName",
        disabled: "@disableAudioPreview"
    }), e.widget("blueimp.fileupload", e.blueimp.fileupload, {
        options: {loadAudioFileTypes: /^audio\/.*$/},
        _audioElement: document.createElement("audio"),
        processActions: {
            loadAudio: function (n, i) {
                if (i.disabled)return n;
                var a, s, r = n.files[n.index];
                return this._audioElement.canPlayType && this._audioElement.canPlayType(r.type) && ("number" !== e.type(i.maxFileSize) || r.size <= i.maxFileSize) && (!i.fileTypes || i.fileTypes.test(r.type)) && (a = t.createObjectURL(r)) ? (s = this._audioElement.cloneNode(!1), s.src = a, s.controls = !0, n.audio = s, n) : n
            }, setAudio: function (e, t) {
                return e.audio && !t.disabled && (e.files[e.index][t.name || "preview"] = e.audio), e
            }
        }
    })
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "load-image", "./jquery.fileupload-process"], e) : "object" == typeof exports ? e(require("jquery"), require("load-image")) : e(window.jQuery, window.loadImage)
}(function (e, t) {
    "use strict";
    e.blueimp.fileupload.prototype.options.processQueue.unshift({
        action: "loadVideo",
        prefix: !0,
        fileTypes: "@",
        maxFileSize: "@",
        disabled: "@disableVideoPreview"
    }, {
        action: "setVideo",
        name: "@videoPreviewName",
        disabled: "@disableVideoPreview"
    }), e.widget("blueimp.fileupload", e.blueimp.fileupload, {
        options: {loadVideoFileTypes: /^video\/.*$/}, _videoElement: document.createElement("video"), processActions: {
            loadVideo: function (n, i) {
                if (i.disabled)return n;
                var a, s, r = n.files[n.index];
                return this._videoElement.canPlayType && this._videoElement.canPlayType(r.type) && ("number" !== e.type(i.maxFileSize) || r.size <= i.maxFileSize) && (!i.fileTypes || i.fileTypes.test(r.type)) && (a = t.createObjectURL(r)) ? (s = this._videoElement.cloneNode(!1),
                    s.src = a, s.controls = !0, n.video = s, n) : n
            }, setVideo: function (e, t) {
                return e.video && !t.disabled && (e.files[e.index][t.name || "preview"] = e.video), e
            }
        }
    })
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "./jquery.fileupload-process"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery)
}(function (e) {
    "use strict";
    e.blueimp.fileupload.prototype.options.processQueue.push({
        action: "validate",
        always: !0,
        acceptFileTypes: "@",
        maxFileSize: "@",
        minFileSize: "@",
        maxNumberOfFiles: "@",
        disabled: "@disableValidation"
    }), e.widget("blueimp.fileupload", e.blueimp.fileupload, {
        options: {
            getNumberOfFiles: e.noop,
            messages: {
                maxNumberOfFiles: "Maximum number of files exceeded",
                acceptFileTypes: "File type not allowed",
                maxFileSize: "File is too large",
                minFileSize: "File is too small"
            }
        }, processActions: {
            validate: function (t, n) {
                if (n.disabled)return t;
                var i, a = e.Deferred(), s = this.options, r = t.files[t.index];
                return (n.minFileSize || n.maxFileSize) && (i = r.size), "number" === e.type(n.maxNumberOfFiles) && (s.getNumberOfFiles() || 0) + t.files.length > n.maxNumberOfFiles ? r.error = s.i18n("maxNumberOfFiles") : !n.acceptFileTypes || n.acceptFileTypes.test(r.type) || n.acceptFileTypes.test(r.name) ? i > n.maxFileSize ? r.error = s.i18n("maxFileSize") : "number" === e.type(i) && i < n.minFileSize ? r.error = s.i18n("minFileSize") : delete r.error : r.error = s.i18n("acceptFileTypes"), r.error || t.files.error ? (t.files.error = !0, a.rejectWith(this, [t])) : a.resolveWith(this, [t]), a.promise()
            }
        }
    })
}), function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery", "tmpl", "./jquery.fileupload-image", "./jquery.fileupload-audio", "./jquery.fileupload-video", "./jquery.fileupload-validate"], e) : "object" == typeof exports ? e(require("jquery"), require("tmpl")) : e(window.jQuery, window.tmpl)
}(function (e, t) {
    "use strict";
    e.blueimp.fileupload.prototype._specialOptions.push("filesContainer", "uploadTemplateId", "downloadTemplateId"), e.widget("blueimp.fileupload", e.blueimp.fileupload, {
        options: {
            autoUpload: !1,
            uploadTemplateId: "template-upload",
            downloadTemplateId: "template-download",
            filesContainer: void 0,
            prependFiles: !1,
            dataType: "json",
            messages: {unknownError: "Unknown error"},
            getNumberOfFiles: function () {
                return this.filesContainer.children().not(".processing").length
            },
            getFilesFromResponse: function (t) {
                return t.result && e.isArray(t.result.files) ? t.result.files : []
            },
            add: function (t, n) {
                if (t.isDefaultPrevented())return !1;
                var i = e(this), a = i.data("blueimp-fileupload") || i.data("fileupload"), s = a.options;
                n.context = a._renderUpload(n.files).data("data", n).addClass("processing"), s.filesContainer[s.prependFiles ? "prepend" : "append"](n.context), a._forceReflow(n.context), a._transition(n.context), n.process(function () {
                    return i.fileupload("process", n)
                }).always(function () {
                    n.context.each(function (t) {
                        e(this).find(".size").text(a._formatFileSize(n.files[t].size))
                    }).removeClass("processing"), a._renderPreviews(n)
                }).done(function () {
                    n.context.find(".start").prop("disabled", !1), a._trigger("added", t, n) !== !1 && (s.autoUpload || n.autoUpload) && n.autoUpload !== !1 && n.submit()
                }).fail(function () {
                    n.files.error && n.context.each(function (t) {
                        var i = n.files[t].error;
                        i && e(this).find(".error").text(i)
                    })
                })
            },
            send: function (t, n) {
                if (t.isDefaultPrevented())return !1;
                var i = e(this).data("blueimp-fileupload") || e(this).data("fileupload");
                return n.context && n.dataType && "iframe" === n.dataType.substr(0, 6) && n.context.find(".progress").addClass(!e.support.transition && "progress-animated").attr("aria-valuenow", 100).children().first().css("width", "100%"), i._trigger("sent", t, n)
            },
            done: function (t, n) {
                if (t.isDefaultPrevented())return !1;
                var i, a, s = e(this).data("blueimp-fileupload") || e(this).data("fileupload"), r = n.getFilesFromResponse || s.options.getFilesFromResponse, o = r(n);
                n.context ? n.context.each(function (r) {
                    var d = o[r] || {error: "Empty file upload result"};
                    a = s._addFinishedDeferreds(), s._transition(e(this)).done(function () {
                        var r = e(this);
                        i = s._renderDownload([d]).replaceAll(r), s._forceReflow(i), s._transition(i).done(function () {
                            n.context = e(this), s._trigger("completed", t, n), s._trigger("finished", t, n), a.resolve()
                        })
                    })
                }) : (i = s._renderDownload(o)[s.options.prependFiles ? "prependTo" : "appendTo"](s.options.filesContainer), s._forceReflow(i), a = s._addFinishedDeferreds(), s._transition(i).done(function () {
                    n.context = e(this), s._trigger("completed", t, n), s._trigger("finished", t, n), a.resolve()
                }))
            },
            fail: function (t, n) {
                if (t.isDefaultPrevented())return !1;
                var i, a, s = e(this).data("blueimp-fileupload") || e(this).data("fileupload");
                n.context ? n.context.each(function (r) {
                    if ("abort" !== n.errorThrown) {
                        var o = n.files[r];
                        o.error = o.error || n.errorThrown || n.i18n("unknownError"), a = s._addFinishedDeferreds(), s._transition(e(this)).done(function () {
                            var r = e(this);
                            i = s._renderDownload([o]).replaceAll(r), s._forceReflow(i), s._transition(i).done(function () {
                                n.context = e(this), s._trigger("failed", t, n), s._trigger("finished", t, n), a.resolve()
                            })
                        })
                    } else a = s._addFinishedDeferreds(), s._transition(e(this)).done(function () {
                        e(this).remove(), s._trigger("failed", t, n), s._trigger("finished", t, n), a.resolve()
                    })
                }) : "abort" !== n.errorThrown ? (n.context = s._renderUpload(n.files)[s.options.prependFiles ? "prependTo" : "appendTo"](s.options.filesContainer).data("data", n), s._forceReflow(n.context), a = s._addFinishedDeferreds(), s._transition(n.context).done(function () {
                    n.context = e(this), s._trigger("failed", t, n), s._trigger("finished", t, n), a.resolve()
                })) : (s._trigger("failed", t, n), s._trigger("finished", t, n), s._addFinishedDeferreds().resolve())
            },
            progress: function (t, n) {
                if (t.isDefaultPrevented())return !1;
                var i = Math.floor(n.loaded / n.total * 100);
                n.context && n.context.each(function () {
                    e(this).find(".progress").attr("aria-valuenow", i).children().first().css("width", i + "%")
                })
            },
            progressall: function (t, n) {
                if (t.isDefaultPrevented())return !1;
                var i = e(this), a = Math.floor(n.loaded / n.total * 100), s = i.find(".fileupload-progress"), r = s.find(".progress-extended");
                r.length && r.html((i.data("blueimp-fileupload") || i.data("fileupload"))._renderExtendedProgress(n)), s.find(".progress").attr("aria-valuenow", a).children().first().css("width", a + "%")
            },
            start: function (t) {
                if (t.isDefaultPrevented())return !1;
                var n = e(this).data("blueimp-fileupload") || e(this).data("fileupload");
                n._resetFinishedDeferreds(), n._transition(e(this).find(".fileupload-progress")).done(function () {
                    n._trigger("started", t)
                })
            },
            stop: function (t) {
                if (t.isDefaultPrevented())return !1;
                var n = e(this).data("blueimp-fileupload") || e(this).data("fileupload"), i = n._addFinishedDeferreds();
                e.when.apply(e, n._getFinishedDeferreds()).done(function () {
                    n._trigger("stopped", t)
                }), n._transition(e(this).find(".fileupload-progress")).done(function () {
                    e(this).find(".progress").attr("aria-valuenow", "0").children().first().css("width", "0%"), e(this).find(".progress-extended").html("&nbsp;"), i.resolve()
                })
            },
            processstart: function (t) {
                return t.isDefaultPrevented() ? !1 : void e(this).addClass("fileupload-processing")
            },
            processstop: function (t) {
                return t.isDefaultPrevented() ? !1 : void e(this).removeClass("fileupload-processing")
            },
            destroy: function (t, n) {
                if (t.isDefaultPrevented())return !1;
                var i = e(this).data("blueimp-fileupload") || e(this).data("fileupload"), a = function () {
                    i._transition(n.context).done(function () {
                        e(this).remove(), i._trigger("destroyed", t, n)
                    })
                };
                n.url ? (n.dataType = n.dataType || i.options.dataType, e.ajax(n).done(a).fail(function () {
                    i._trigger("destroyfailed", t, n)
                })) : a()
            }
        }, _resetFinishedDeferreds: function () {
            this._finishedUploads = []
        }, _addFinishedDeferreds: function (t) {
            return t || (t = e.Deferred()), this._finishedUploads.push(t), t
        }, _getFinishedDeferreds: function () {
            return this._finishedUploads
        }, _enableDragToDesktop: function () {
            var t = e(this), n = t.prop("href"), i = t.prop("download"), a = "application/octet-stream";
            t.bind("dragstart", function (e) {
                try {
                    e.originalEvent.dataTransfer.setData("DownloadURL", [a, i, n].join(":"))
                } catch (t) {
                }
            })
        }, _formatFileSize: function (e) {
            return "number" != typeof e ? "" : e >= 1e9 ? (e / 1e9).toFixed(2) + " GB" : e >= 1e6 ? (e / 1e6).toFixed(2) + " MB" : (e / 1e3).toFixed(2) + " KB"
        }, _formatBitrate: function (e) {
            return "number" != typeof e ? "" : e >= 1e9 ? (e / 1e9).toFixed(2) + " Gbit/s" : e >= 1e6 ? (e / 1e6).toFixed(2) + " Mbit/s" : e >= 1e3 ? (e / 1e3).toFixed(2) + " kbit/s" : e.toFixed(2) + " bit/s"
        }, _formatTime: function (e) {
            var t = new Date(1e3 * e), n = Math.floor(e / 86400);
            return n = n ? n + "d " : "", n + ("0" + t.getUTCHours()).slice(-2) + ":" + ("0" + t.getUTCMinutes()).slice(-2) + ":" + ("0" + t.getUTCSeconds()).slice(-2)
        }, _formatPercentage: function (e) {
            return (100 * e).toFixed(2) + " %"
        }, _renderExtendedProgress: function (e) {
            return this._formatBitrate(e.bitrate) + " | " + this._formatTime(8 * (e.total - e.loaded) / e.bitrate) + " | " + this._formatPercentage(e.loaded / e.total) + " | " + this._formatFileSize(e.loaded) + " / " + this._formatFileSize(e.total)
        }, _renderTemplate: function (t, n) {
            if (!t)return e();
            var i = t({files: n, formatFileSize: this._formatFileSize, options: this.options});
            return i instanceof e ? i : e(this.options.templatesContainer).html(i).children()
        }, _renderPreviews: function (t) {
            t.context.find(".preview").each(function (n, i) {
                e(i).append(t.files[n].preview)
            })
        }, _renderUpload: function (e) {
            return this._renderTemplate(this.options.uploadTemplate, e)
        }, _renderDownload: function (e) {
            return this._renderTemplate(this.options.downloadTemplate, e).find("a[download]").each(this._enableDragToDesktop).end()
        }, _startHandler: function (t) {
            t.preventDefault();
            var n = e(t.currentTarget), i = n.closest(".template-upload"), a = i.data("data");
            n.prop("disabled", !0), a && a.submit && a.submit()
        }, _cancelHandler: function (t) {
            t.preventDefault();
            var n = e(t.currentTarget).closest(".template-upload,.template-download"), i = n.data("data") || {};
            i.context = i.context || n, i.abort ? i.abort() : (i.errorThrown = "abort", this._trigger("fail", t, i))
        }, _deleteHandler: function (t) {
            t.preventDefault();
            var n = e(t.currentTarget);
            this._trigger("destroy", t, e.extend({context: n.closest(".template-download"), type: "DELETE"}, n.data()))
        }, _forceReflow: function (t) {
            return e.support.transition && t.length && t[0].offsetWidth
        }, _transition: function (t) {
            var n = e.Deferred();
            return e.support.transition && t.hasClass("fade") && t.is(":visible") ? t.bind(e.support.transition.end, function (i) {
                i.target === t[0] && (t.unbind(e.support.transition.end), n.resolveWith(t))
            }).toggleClass("in") : (t.toggleClass("in"), n.resolveWith(t)), n
        }, _initButtonBarEventHandlers: function () {
            var t = this.element.find(".fileupload-buttonbar"), n = this.options.filesContainer;
            this._on(t.find(".start"), {
                click: function (e) {
                    e.preventDefault(), n.find(".start").click()
                }
            }), this._on(t.find(".cancel"), {
                click: function (e) {
                    e.preventDefault(), n.find(".cancel").click()
                }
            }), this._on(t.find(".delete"), {
                click: function (e) {
                    e.preventDefault(), n.find(".toggle:checked").closest(".template-download").find(".delete").click(), t.find(".toggle").prop("checked", !1)
                }
            }), this._on(t.find(".toggle"), {
                change: function (t) {
                    n.find(".toggle").prop("checked", e(t.currentTarget).is(":checked"))
                }
            })
        }, _destroyButtonBarEventHandlers: function () {
            this._off(this.element.find(".fileupload-buttonbar").find(".start, .cancel, .delete"), "click"), this._off(this.element.find(".fileupload-buttonbar .toggle"), "change.")
        }, _initEventHandlers: function () {
            this._super(), this._on(this.options.filesContainer, {
                "click .start": this._startHandler,
                "click .cancel": this._cancelHandler,
                "click .delete": this._deleteHandler
            }), this._initButtonBarEventHandlers()
        }, _destroyEventHandlers: function () {
            this._destroyButtonBarEventHandlers(), this._off(this.options.filesContainer, "click"), this._super()
        }, _enableFileInputButton: function () {
            this.element.find(".fileinput-button input").prop("disabled", !1).parent().removeClass("disabled")
        }, _disableFileInputButton: function () {
            this.element.find(".fileinput-button input").prop("disabled", !0).parent().addClass("disabled")
        }, _initTemplates: function () {
            var e = this.options;
            e.templatesContainer = this.document[0].createElement(e.filesContainer.prop("nodeName")), t && (e.uploadTemplateId && (e.uploadTemplate = t(e.uploadTemplateId)), e.downloadTemplateId && (e.downloadTemplate = t(e.downloadTemplateId)))
        }, _initFilesContainer: function () {
            var t = this.options;
            void 0 === t.filesContainer ? t.filesContainer = this.element.find(".files") : t.filesContainer instanceof e || (t.filesContainer = e(t.filesContainer))
        }, _initSpecialOptions: function () {
            this._super(), this._initFilesContainer(), this._initTemplates()
        }, _create: function () {
            this._super(), this._resetFinishedDeferreds(), e.support.fileInput || this._disableFileInputButton()
        }, enable: function () {
            var e = !1;
            this.options.disabled && (e = !0), this._super(), e && (this.element.find("input, button").prop("disabled", !1), this._enableFileInputButton())
        }, disable: function () {
            this.options.disabled || (this.element.find("input, button").prop("disabled", !0), this._disableFileInputButton()), this._super()
        }
    })
}), function (e) {
    e.fn.clickoutside = function (e) {
        var t = 1, n = $(this);
        return n.cb = e, this.click(function () {
            t = 0
        }), $(document).click(function () {
            t && n.cb(), t = 1
        }), $(this)
    }
}(jQuery), !function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    "use strict";
    function t() {
        return "undefined" != typeof window.performance && window.performance.now ? window.performance.now() : Date.now()
    }

    function n(e) {
        return "string" == typeof e && -1 != e.indexOf("%")
    }

    Date.now || (Date.now = function () {
        return (new Date).getTime()
    });
    for (var i = ["webkit", "moz"], a = 0; a < i.length && !window.requestAnimationFrame; ++a) {
        var s = i[a];
        window.requestAnimationFrame = window[s + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s + "CancelAnimationFrame"] || window[s + "CancelRequestAnimationFrame"]
    }
    if (/iP(ad|hone|od).*OS (6|7)/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var r = 0;
        window.requestAnimationFrame = function (e) {
            var n = t(), i = Math.max(r + 16, n);
            return setTimeout(function () {
                e(r = i)
            }, i - n)
        }, window.cancelAnimationFrame = clearTimeout
    }
    var o = function (t, n) {
        var i = document.createElementNS("http://www.w3.org/2000/svg", t);
        return e.each(n, function (e, t) {
            i.setAttribute(e, t)
        }), i
    }, d = "createElementNS" in document && new o("svg", {}).createSVGRect, l = "asPieProgress", u = e[l] = function (t, n) {
        this.element = t, this.$element = e(t), this.options = e.extend({}, u.defaults, n, this.$element.data()), this.namespace = this.options.namespace, this.classes = this.options.classes, this.easing = u.easing[this.options.easing] || u.easing.ease, this.$element.addClass(this.classes.element), this.min = this.$element.attr("aria-valuemin"), this.max = this.$element.attr("aria-valuemax"), this.min = this.min ? parseInt(this.min, 10) : this.options.min, this.max = this.max ? parseInt(this.max, 10) : this.options.max, this.first = this.$element.attr("aria-valuenow"), this.first = this.first ? parseInt(this.first, 10) : this.options.first ? this.options.first : this.min, this.now = this.first, this.goal = this.options.goal, this._frameId = null, this.initialized = !1, this._trigger("init"), this.init()
    };
    u.defaults = {
        namespace: "asPieProgress",
        classes: {
            svg: "pie_progress__svg",
            element: "pie_progress",
            number: "pie_progress__number",
            content: "pie_progress__content"
        },
        min: 0,
        max: 100,
        goal: 100,
        size: 160,
        speed: 15,
        barcolor: "#ef1e25",
        barsize: "4",
        trackcolor: "#f2f2f2",
        fillcolor: "none",
        easing: "ease",
        numberCallback: function (e) {
            var t = Math.round(this.getPercentage(e));
            return t + "%"
        },
        contentCallback: null
    };
    var c = function (e, t, n, i) {
        function a(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function s(e, t) {
            return 3 * t - 6 * e
        }

        function r(e) {
            return 3 * e
        }

        function o(e, t, n) {
            return ((a(t, n) * e + s(t, n)) * e + r(t)) * e
        }

        function d(e, t, n) {
            return 3 * a(t, n) * e * e + 2 * s(t, n) * e + r(t)
        }

        function l(t) {
            for (var i = t, a = 0; 4 > a; ++a) {
                var s = d(i, e, n);
                if (0 === s)return i;
                var r = o(i, e, n) - t;
                i -= r / s
            }
            return i
        }

        return e === t && n === i ? {
            css: "linear", fn: function (e) {
                return e
            }
        } : {
            css: "cubic-bezier(" + e + "," + t + "," + n + "," + i + ")", fn: function (e) {
                return o(l(e), t, i)
            }
        }
    };
    e.extend(u.easing = {}, {
        ease: c(.25, .1, .25, 1),
        linear: c(0, 0, 1, 1),
        "ease-in": c(.42, 0, 1, 1),
        "ease-out": c(0, 0, .58, 1),
        "ease-in-out": c(.42, 0, .58, 1)
    }), u.prototype = {
        constructor: u, init: function () {
            this.$number = this.$element.find("." + this.classes.number), this.$content = this.$element.find("." + this.classes.content), this.size = this.options.size, this.width = this.size, this.height = this.size, this.prepare(), this.initialized = !0, this._trigger("ready")
        }, prepare: function () {
            d && (this.svg = new o("svg", {
                version: "1.1",
                preserveAspectRatio: "xMinYMin meet",
                viewBox: "0 0 " + this.width + " " + this.height
            }), this.buildTrack(), this.buildBar(), e('<div class="' + this.classes.svg + '"></div>').append(this.svg).appendTo(this.$element))
        }, buildTrack: function () {
            var e = this.size, t = this.size, n = e / 2, i = t / 2, a = this.options.barsize, s = new o("ellipse", {
                rx: n - a / 2,
                ry: i - a / 2,
                cx: n,
                cy: i,
                stroke: this.options.trackcolor,
                fill: this.options.fillcolor,
                "stroke-width": a
            });
            this.svg.appendChild(s)
        }, buildBar: function () {
            if (d) {
                var e = new o("path", {
                    fill: "none",
                    "stroke-width": this.options.barsize,
                    stroke: this.options.barcolor
                });
                this.bar = e, this.svg.appendChild(e), this._drawBar(this.first), this._updateBar()
            }
        }, _drawBar: function (e) {
            if (d) {
                this.bar_goal = e;
                var t = this.size, n = this.size, i = t / 2, a = n / 2, s = 0, r = this.options.barsize, o = Math.min(i, a) - r / 2;
                this.r = o;
                var l = this.getPercentage(e);
                100 === l && (l -= 1e-4);
                var u = s + l * Math.PI * 2 / 100, c = i + o * Math.sin(s), p = a - o * Math.cos(s), m = i + o * Math.sin(u), _ = a - o * Math.cos(u), h = 0;
                u - s > Math.PI && (h = 1);
                var f = "M" + c + "," + p + " A" + o + "," + o + " 0 " + h + " 1 " + m + "," + _;
                this.bar.setAttribute("d", f)
            }
        }, _updateBar: function () {
            if (d) {
                var e = this.getPercentage(this.now), t = this.bar.getTotalLength(), n = t * (1 - e / this.getPercentage(this.bar_goal));
                this.bar.style.strokeDasharray = t + " " + t, this.bar.style.strokeDashoffset = n
            }
        }, _trigger: function (e) {
            var t = Array.prototype.slice.call(arguments, 1), n = [this].concat(t);
            this.$element.trigger(l + "::" + e, n), e = e.replace(/\b\w+\b/g, function (e) {
                return e.substring(0, 1).toUpperCase() + e.substring(1)
            });
            var i = "on" + e;
            "function" == typeof this.options[i] && this.options[i].apply(this, t)
        }, getPercentage: function (e) {
            return 100 * (e - this.min) / (this.max - this.min)
        }, go: function (e) {
            var i = this;
            this._clear(), n(e) && (e = parseInt(e.replace("%", ""), 10), e = Math.round(this.min + e / 100 * (this.max - this.min))), "undefined" == typeof e && (e = this.goal), e > this.max ? e = this.max : e < this.min && (e = this.min), this.bar_goal < e && this._drawBar(e);
            var a = i.now, s = t(), r = s + 100 * Math.abs(a - e) * i.options.speed / (i.max - i.min), o = function (t) {
                var n;
                if (t > r)n = e; else {
                    var d = (t - s) / i.options.speed;
                    n = Math.round(i.easing.fn(d / 100) * (i.max - i.min)), e > a ? (n = a + n, n > e && (n = e)) : (n = a - n, e > n && (n = e))
                }
                i._update(n), n === e ? (window.cancelAnimationFrame(i._frameId), i._frameId = null, i.now === i.goal && i._trigger("finish")) : i._frameId = window.requestAnimationFrame(o)
            };
            i._frameId = window.requestAnimationFrame(o)
        }, _update: function (e) {
            this.now = e, this._updateBar(), this.$element.attr("aria-valuenow", this.now), this.$number.length > 0 && "function" == typeof this.options.numberCallback && this.$number.html(this.options.numberCallback.call(this, [this.now])), this.$content.length > 0 && "function" == typeof this.options.contentCallback && this.$content.html(this.options.contentCallback.call(this, [this.now])), this._trigger("update", e)
        }, _clear: function () {
            this._frameId && (window.cancelAnimationFrame(this._frameId), this._frameId = null)
        }, get: function () {
            return this.now
        }, start: function () {
            this._clear(), this._trigger("start"), this.go(this.goal)
        }, reset: function () {
            this._clear(), this._drawBar(this.first), this._update(this.first), this._trigger("reset")
        }, stop: function () {
            this._clear(), this._trigger("stop")
        }, finish: function () {
            this._clear(), this._update(this.goal), this._trigger("finish")
        }, destory: function () {
            this.$element.data(l, null), this._trigger("destory")
        }
    }, e.fn[l] = function (t) {
        if ("string" != typeof t)return this.each(function () {
            e.data(this, l) || e.data(this, l, new u(this, t))
        });
        var n = t, i = Array.prototype.slice.call(arguments, 1);
        if (/^\_/.test(n))return !1;
        if (!/^(get)$/.test(n))return this.each(function () {
            var t = e.data(this, l);
            t && "function" == typeof t[n] && t[n].apply(t, i)
        });
        var a = this.first().data(l);
        return a && "function" == typeof a[n] ? a[n].apply(a, i) : void 0
    }
});