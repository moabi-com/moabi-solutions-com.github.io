jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});
var bootstrap = function(t, e) {
    "use strict";

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function r(t, e) {
        if (1 !== t.nodeType) return [];
        var n = window.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function o(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function s(t) {
        if (!t || -1 !== ["HTML", "BODY", "#document"].indexOf(t.nodeName)) return window.document.body;
        var e = r(t),
            n = e.overflow,
            i = e.overflowX;
        return /(auto|scroll)/.test(n + e.overflowY + i) ? t : s(o(t))
    }

    function a(t) {
        var e = t && t.offsetParent,
            n = e && e.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === r(e, "position") ? a(e) : e : window.document.documentElement
    }

    function l(t) {
        var e = t.nodeName;
        return "BODY" !== e && ("HTML" === e || a(t.firstElementChild) === t)
    }

    function c(t) {
        return null !== t.parentNode ? c(t.parentNode) : t
    }

    function f(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return window.document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s = o.commonAncestorContainer;
        if (t !== s && e !== s || i.contains(r)) return l(s) ? s : a(s);
        var h = c(t);
        return h.host ? f(h.host, e) : f(t, c(e).host)
    }

    function h(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = window.document.documentElement;
            return (window.document.scrollingElement || i)[e]
        }
        return t[e]
    }

    function u(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = h(e, "top"),
            r = h(e, "left"),
            o = n ? -1 : 1;
        return t.top += i * o, t.bottom += i * o, t.left += r * o, t.right += r * o, t
    }

    function d(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return +t["border" + n + "Width"].split("px")[0] + +t["border" + i + "Width"].split("px")[0]
    }

    function p(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], lt() ? n["offset" + t] + i["margin" + ("Height" === t ? "Top" : "Left")] + i["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }

    function g() {
        var t = window.document.body,
            e = window.document.documentElement,
            n = lt() && window.getComputedStyle(e);
        return {
            height: p("Height", t, e, n),
            width: p("Width", t, e, n)
        }
    }

    function m(t) {
        return ut({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function _(t) {
        var e = {};
        if (lt()) try {
            e = t.getBoundingClientRect();
            var n = h(t, "top"),
                i = h(t, "left");
            e.top += n, e.left += i, e.bottom += n, e.right += i
        } catch (t) {} else e = t.getBoundingClientRect();
        var o = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            s = "HTML" === t.nodeName ? g() : {},
            a = s.width || t.clientWidth || o.right - o.left,
            l = s.height || t.clientHeight || o.bottom - o.top,
            c = t.offsetWidth - a,
            f = t.offsetHeight - l;
        if (c || f) {
            var u = r(t);
            c -= d(u, "x"), f -= d(u, "y"), o.width -= c, o.height -= f
        }
        return m(o)
    }

    function v(t, e) {
        var n = lt(),
            i = "HTML" === e.nodeName,
            o = _(t),
            a = _(e),
            l = s(t),
            c = r(e),
            f = +c.borderTopWidth.split("px")[0],
            h = +c.borderLeftWidth.split("px")[0],
            d = m({
                top: o.top - a.top - f,
                left: o.left - a.left - h,
                width: o.width,
                height: o.height
            });
        if (d.marginTop = 0, d.marginLeft = 0, !n && i) {
            var p = +c.marginTop.split("px")[0],
                g = +c.marginLeft.split("px")[0];
            d.top -= f - p, d.bottom -= f - p, d.left -= h - g, d.right -= h - g, d.marginTop = p, d.marginLeft = g
        }
        return (n ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (d = u(d, e)), d
    }

    function E(t) {
        var e = window.document.documentElement,
            n = v(t, e),
            i = Math.max(e.clientWidth, window.innerWidth || 0),
            r = Math.max(e.clientHeight, window.innerHeight || 0),
            o = h(e),
            s = h(e, "left");
        return m({
            top: o - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        })
    }

    function T(t) {
        var e = t.nodeName;
        return "BODY" !== e && "HTML" !== e && ("fixed" === r(t, "position") || T(o(t)))
    }

    function b(t, e, n, i) {
        var r = {
                top: 0,
                left: 0
            },
            a = f(t, e);
        if ("viewport" === i) r = E(a);
        else {
            var l = void 0;
            "scrollParent" === i ? "BODY" === (l = s(o(t))).nodeName && (l = window.document.documentElement) : l = "window" === i ? window.document.documentElement : i;
            var c = v(l, a);
            if ("HTML" !== l.nodeName || T(a)) r = c;
            else {
                var h = g(),
                    u = h.height,
                    d = h.width;
                r.top += c.top - c.marginTop, r.bottom = u + c.top, r.left += c.left - c.marginLeft, r.right = d + c.left
            }
        }
        return r.left += n, r.top += n, r.right -= n, r.bottom -= n, r
    }

    function C(t) {
        return t.width * t.height
    }

    function A(t, e, n, i, r) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = b(n, i, o, r),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(t) {
                return ut({
                    key: t
                }, a[t], {
                    area: C(a[t])
                })
            }).sort(function(t, e) {
                return e.area - t.area
            }),
            c = l.filter(function(t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            }),
            f = c.length > 0 ? c[0].key : l[0].key,
            h = t.split("-")[1];
        return f + (h ? "-" + h : "")
    }

    function I(t, e, n) {
        return v(n, f(e, n))
    }

    function O(t) {
        var e = window.getComputedStyle(t),
            n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function y(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }

    function D(t, e, n) {
        n = n.split("-")[0];
        var i = O(t),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = e[s] + e[l] / 2 - i[l] / 2, r[a] = n === a ? e[a] - i[c] : e[y(a)], r
    }

    function S(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function w(t, e, n) {
        if (Array.prototype.findIndex) return t.findIndex(function(t) {
            return t[e] === n
        });
        var i = S(t, function(t) {
            return t[e] === n
        });
        return t.indexOf(i)
    }

    function N(t, e, n) {
        return (void 0 === n ? t : t.slice(0, w(t, "name", n))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && i(n) && (e.offsets.popper = m(e.offsets.popper), e.offsets.reference = m(e.offsets.reference), e = n(e, t))
        }), e
    }

    function L() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = I(this.state, this.popper, this.reference), t.placement = A(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = D(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = N(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function P(t, e) {
        return t.some(function(t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }

    function R(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
            var r = e[i],
                o = r ? "" + r + n : t;
            if ("undefined" != typeof window.document.body.style[o]) return o
        }
        return null
    }

    function H() {
        return this.state.isDestroyed = !0, P(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[R("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function k(t, e, n, i) {
        var r = "BODY" === t.nodeName,
            o = r ? window : t;
        o.addEventListener(e, n, {
            passive: !0
        }), r || k(s(o.parentNode), e, n, i), i.push(o)
    }

    function W(t, e, n, i) {
        n.updateBound = i, window.addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = s(t);
        return k(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function x() {
        this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function M(t, e) {
        return window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e
    }

    function U() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = M(this.reference, this.state))
    }

    function V(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function F(t, e) {
        Object.keys(e).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && V(e[n]) && (i = "px"), t.style[n] = e[n] + i
        })
    }

    function j(t, e) {
        Object.keys(e).forEach(function(n) {
            !1 !== e[n] ? t.setAttribute(n, e[n]) : t.removeAttribute(n)
        })
    }

    function B(t, e, n) {
        var i = S(t, function(t) {
                return t.name === e
            }),
            r = !!i && t.some(function(t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!r) {
            var o = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function G(t) {
        return "end" === t ? "start" : "start" === t ? "end" : t
    }

    function K(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = pt.indexOf(t),
            i = pt.slice(n + 1).concat(pt.slice(0, n));
        return e ? i.reverse() : i
    }

    function Q(t, e, n, i) {
        var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +r[1],
            s = r[2];
        if (!o) return t;
        if (0 === s.indexOf("%")) {
            var a = void 0;
            switch (s) {
                case "%p":
                    a = n;
                    break;
                case "%":
                case "%r":
                default:
                    a = i
            }
            return m(a)[e] / 100 * o
        }
        if ("vh" === s || "vw" === s) {
            return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
        }
        return o
    }

    function Y(t, e, n, i) {
        var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function(t) {
                return t.trim()
            }),
            a = s.indexOf(S(s, function(t) {
                return -1 !== t.search(/,|\s/)
            }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function(t, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }, []).map(function(t) {
                return Q(t, r, e, n)
            })
        })).forEach(function(t, e) {
            t.forEach(function(n, i) {
                V(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }), r
    }
    e = e && e.hasOwnProperty("default") ? e.default : e;
    for (var X = function() {
            function t(t) {
                return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function n() {
                return {
                    bindType: o.end,
                    delegateType: o.end,
                    handle: function(t) {
                        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function i() {
                if (window.QUnit) return !1;
                var t = document.createElement("bootstrap");
                for (var e in s)
                    if ("undefined" != typeof t.style[e]) return {
                        end: s[e]
                    };
                return !1
            }

            function r(t) {
                var n = this,
                    i = !1;
                return e(this).one(a.TRANSITION_END, function() {
                    i = !0
                }), setTimeout(function() {
                    i || a.triggerTransitionEnd(n)
                }, t), this
            }
            var o = !1,
                s = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                a = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        do {
                            t += ~~(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    },
                    getSelectorFromElement: function(t) {
                        var n = t.getAttribute("data-target");
                        n && "#" !== n || (n = t.getAttribute("href") || "");
                        try {
                            return e(document).find(n).length > 0 ? n : null
                        } catch (t) {
                            return null
                        }
                    },
                    reflow: function(t) {
                        return t.offsetHeight
                    },
                    triggerTransitionEnd: function(t) {
                        e(t).trigger(o.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(o)
                    },
                    isElement: function(t) {
                        return (t[0] || t).nodeType
                    },
                    typeCheckConfig: function(e, n, i) {
                        for (var r in i)
                            if (Object.prototype.hasOwnProperty.call(i, r)) {
                                var o = i[r],
                                    s = n[r],
                                    l = s && a.isElement(s) ? "element" : t(s);
                                if (!new RegExp(o).test(l)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + o + '".')
                            }
                    }
                };
            return o = i(), e.fn.emulateTransitionEnd = r, a.supportsTransitionEnd() && (e.event.special[a.TRANSITION_END] = n()), a
        }(), q = function(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
        }, z = function(t, e) {
            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }, Z = function() {
            var t = "alert",
                n = e.fn[t],
                i = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                r = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                o = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.close = function(t) {
                        t = t || this._element;
                        var e = this._getRootElement(t);
                        this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.alert"), this._element = null
                    }, n._getRootElement = function(t) {
                        var n = X.getSelectorFromElement(t),
                            i = !1;
                        return n && (i = e(n)[0]), i || (i = e(t).closest("." + r.ALERT)[0]), i
                    }, n._triggerCloseEvent = function(t) {
                        var n = e.Event(i.CLOSE);
                        return e(t).trigger(n), n
                    }, n._removeElement = function(t) {
                        var n = this;
                        e(t).removeClass(r.SHOW), X.supportsTransitionEnd() && e(t).hasClass(r.FADE) ? e(t).one(X.TRANSITION_END, function(e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(150) : this._destroyElement(t)
                    }, n._destroyElement = function(t) {
                        e(t).detach().trigger(i.CLOSED).remove()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                r = i.data("bs.alert");
                            r || (r = new t(this), i.data("bs.alert", r)), "close" === n && r[n](this)
                        })
                    }, t._handleDismiss = function(t) {
                        return function(e) {
                            e && e.preventDefault(), t.close(this)
                        }
                    }, q(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), t
                }();
            return e(document).on(i.CLICK_DATA_API, {
                DISMISS: '[data-dismiss="alert"]'
            }.DISMISS, o._handleDismiss(new o)), e.fn[t] = o._jQueryInterface, e.fn[t].Constructor = o, e.fn[t].noConflict = function() {
                return e.fn[t] = n, o._jQueryInterface
            }, o
        }(), J = function() {
            var t = "button",
                n = e.fn[t],
                i = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                r = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                o = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                },
                s = function() {
                    function t(t) {
                        this._element = t
                    }
                    var n = t.prototype;
                    return n.toggle = function() {
                        var t = !0,
                            n = !0,
                            o = e(this._element).closest(r.DATA_TOGGLE)[0];
                        if (o) {
                            var s = e(this._element).find(r.INPUT)[0];
                            if (s) {
                                if ("radio" === s.type)
                                    if (s.checked && e(this._element).hasClass(i.ACTIVE)) t = !1;
                                    else {
                                        var a = e(o).find(r.ACTIVE)[0];
                                        a && e(a).removeClass(i.ACTIVE)
                                    }
                                if (t) {
                                    if (s.hasAttribute("disabled") || o.hasAttribute("disabled") || s.classList.contains("disabled") || o.classList.contains("disabled")) return;
                                    s.checked = !e(this._element).hasClass(i.ACTIVE), e(s).trigger("change")
                                }
                                s.focus(), n = !1
                            }
                        }
                        n && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(i.ACTIVE)), t && e(this._element).toggleClass(i.ACTIVE)
                    }, n.dispose = function() {
                        e.removeData(this._element, "bs.button"), this._element = null
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this).data("bs.button");
                            i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
                        })
                    }, q(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), t
                }();
            return e(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE_CARROT, function(t) {
                t.preventDefault();
                var n = t.target;
                e(n).hasClass(i.BUTTON) || (n = e(n).closest(r.BUTTON)), s._jQueryInterface.call(e(n), "toggle")
            }).on(o.FOCUS_BLUR_DATA_API, r.DATA_TOGGLE_CARROT, function(t) {
                var n = e(t.target).closest(r.BUTTON)[0];
                e(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(t.type))
            }), e.fn[t] = s._jQueryInterface, e.fn[t].Constructor = s, e.fn[t].noConflict = function() {
                return e.fn[t] = n, s._jQueryInterface
            }, s
        }(), $ = function() {
            var t = "carousel",
                n = "bs.carousel",
                i = "." + n,
                r = e.fn[t],
                o = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                s = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                a = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                l = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    TOUCHEND: "touchend" + i,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                },
                c = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                },
                f = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                h = function() {
                    function r(t, n) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(f.INDICATORS)[0], this._addEventListeners()
                    }
                    var h = r.prototype;
                    return h.next = function() {
                        this._isSliding || this._slide(a.NEXT)
                    }, h.nextWhenVisible = function() {
                        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                    }, h.prev = function() {
                        this._isSliding || this._slide(a.PREV)
                    }, h.pause = function(t) {
                        t || (this._isPaused = !0), e(this._element).find(f.NEXT_PREV)[0] && X.supportsTransitionEnd() && (X.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, h.cycle = function(t) {
                        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, h.to = function(t) {
                        var n = this;
                        this._activeElement = e(this._element).find(f.ACTIVE_ITEM)[0];
                        var i = this._getItemIndex(this._activeElement);
                        if (!(t > this._items.length - 1 || t < 0))
                            if (this._isSliding) e(this._element).one(l.SLID, function() {
                                return n.to(t)
                            });
                            else {
                                if (i === t) return this.pause(), void this.cycle();
                                var r = t > i ? a.NEXT : a.PREV;
                                this._slide(r, this._items[t])
                            }
                    }, h.dispose = function() {
                        e(this._element).off(i), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, h._getConfig = function(n) {
                        return n = e.extend({}, o, n), X.typeCheckConfig(t, n, s), n
                    }, h._addEventListeners = function() {
                        var t = this;
                        this._config.keyboard && e(this._element).on(l.KEYDOWN, function(e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (e(this._element).on(l.MOUSEENTER, function(e) {
                            return t.pause(e)
                        }).on(l.MOUSELEAVE, function(e) {
                            return t.cycle(e)
                        }), "ontouchstart" in document.documentElement && e(this._element).on(l.TOUCHEND, function() {
                            t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval)
                        }))
                    }, h._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, h._getItemIndex = function(t) {
                        return this._items = e.makeArray(e(t).parent().find(f.ITEM)), this._items.indexOf(t)
                    }, h._getItemByDirection = function(t, e) {
                        var n = t === a.NEXT,
                            i = t === a.PREV,
                            r = this._getItemIndex(e),
                            o = this._items.length - 1;
                        if ((i && 0 === r || n && r === o) && !this._config.wrap) return e;
                        var s = (r + (t === a.PREV ? -1 : 1)) % this._items.length;
                        return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                    }, h._triggerSlideEvent = function(t, n) {
                        var i = this._getItemIndex(t),
                            r = this._getItemIndex(e(this._element).find(f.ACTIVE_ITEM)[0]),
                            o = e.Event(l.SLIDE, {
                                relatedTarget: t,
                                direction: n,
                                from: r,
                                to: i
                            });
                        return e(this._element).trigger(o), o
                    }, h._setActiveIndicatorElement = function(t) {
                        if (this._indicatorsElement) {
                            e(this._indicatorsElement).find(f.ACTIVE).removeClass(c.ACTIVE);
                            var n = this._indicatorsElement.children[this._getItemIndex(t)];
                            n && e(n).addClass(c.ACTIVE)
                        }
                    }, h._slide = function(t, n) {
                        var i, r, o, s = this,
                            h = e(this._element).find(f.ACTIVE_ITEM)[0],
                            u = this._getItemIndex(h),
                            d = n || h && this._getItemByDirection(t, h),
                            p = this._getItemIndex(d),
                            g = Boolean(this._interval);
                        if (t === a.NEXT ? (i = c.LEFT, r = c.NEXT, o = a.LEFT) : (i = c.RIGHT, r = c.PREV, o = a.RIGHT), d && e(d).hasClass(c.ACTIVE)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && h && d) {
                            this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(d);
                            var m = e.Event(l.SLID, {
                                relatedTarget: d,
                                direction: o,
                                from: u,
                                to: p
                            });
                            X.supportsTransitionEnd() && e(this._element).hasClass(c.SLIDE) ? (e(d).addClass(r), X.reflow(d), e(h).addClass(i), e(d).addClass(i), e(h).one(X.TRANSITION_END, function() {
                                e(d).removeClass(i + " " + r).addClass(c.ACTIVE), e(h).removeClass(c.ACTIVE + " " + r + " " + i), s._isSliding = !1, setTimeout(function() {
                                    return e(s._element).trigger(m)
                                }, 0)
                            }).emulateTransitionEnd(600)) : (e(h).removeClass(c.ACTIVE), e(d).addClass(c.ACTIVE), this._isSliding = !1, e(this._element).trigger(m)), g && this.cycle()
                        }
                    }, r._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                s = e.extend({}, o, e(this).data());
                            "object" == typeof t && e.extend(s, t);
                            var a = "string" == typeof t ? t : s.slide;
                            if (i || (i = new r(this, s), e(this).data(n, i)), "number" == typeof t) i.to(t);
                            else if ("string" == typeof a) {
                                if ("undefined" == typeof i[a]) throw new Error('No method named "' + a + '"');
                                i[a]()
                            } else s.interval && (i.pause(), i.cycle())
                        })
                    }, r._dataApiClickHandler = function(t) {
                        var i = X.getSelectorFromElement(this);
                        if (i) {
                            var o = e(i)[0];
                            if (o && e(o).hasClass(c.CAROUSEL)) {
                                var s = e.extend({}, e(o).data(), e(this).data()),
                                    a = this.getAttribute("data-slide-to");
                                a && (s.interval = !1), r._jQueryInterface.call(e(o), s), a && e(o).data(n).to(a), t.preventDefault()
                            }
                        }
                    }, q(r, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), r
                }();
            return e(document).on(l.CLICK_DATA_API, f.DATA_SLIDE, h._dataApiClickHandler), e(window).on(l.LOAD_DATA_API, function() {
                e(f.DATA_RIDE).each(function() {
                    var t = e(this);
                    h._jQueryInterface.call(t, t.data())
                })
            }), e.fn[t] = h._jQueryInterface, e.fn[t].Constructor = h, e.fn[t].noConflict = function() {
                return e.fn[t] = r, h._jQueryInterface
            }, h
        }(), tt = function() {
            var t = "collapse",
                n = "bs.collapse",
                i = e.fn[t],
                r = {
                    toggle: !0,
                    parent: ""
                },
                o = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                s = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                },
                a = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                l = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                c = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                f = function() {
                    function i(t, n) {
                        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                        for (var i = e(c.DATA_TOGGLE), r = 0; r < i.length; r++) {
                            var o = i[r],
                                s = X.getSelectorFromElement(o);
                            null !== s && e(s).filter(t).length > 0 && this._triggerArray.push(o)
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var f = i.prototype;
                    return f.toggle = function() {
                        e(this._element).hasClass(a.SHOW) ? this.hide() : this.show()
                    }, f.show = function() {
                        var t = this;
                        if (!this._isTransitioning && !e(this._element).hasClass(a.SHOW)) {
                            var r, o;
                            if (this._parent && ((r = e.makeArray(e(this._parent).children().children(c.ACTIVES))).length || (r = null)), !(r && (o = e(r).data(n)) && o._isTransitioning)) {
                                var l = e.Event(s.SHOW);
                                if (e(this._element).trigger(l), !l.isDefaultPrevented()) {
                                    r && (i._jQueryInterface.call(e(r), "hide"), o || e(r).data(n, null));
                                    var f = this._getDimension();
                                    e(this._element).removeClass(a.COLLAPSE).addClass(a.COLLAPSING), this._element.style[f] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(a.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var h = function() {
                                        e(t._element).removeClass(a.COLLAPSING).addClass(a.COLLAPSE).addClass(a.SHOW), t._element.style[f] = "", t.setTransitioning(!1), e(t._element).trigger(s.SHOWN)
                                    };
                                    if (X.supportsTransitionEnd()) {
                                        var u = "scroll" + (f[0].toUpperCase() + f.slice(1));
                                        e(this._element).one(X.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[f] = this._element[u] + "px"
                                    } else h()
                                }
                            }
                        }
                    }, f.hide = function() {
                        var t = this;
                        if (!this._isTransitioning && e(this._element).hasClass(a.SHOW)) {
                            var n = e.Event(s.HIDE);
                            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                var i = this._getDimension();
                                if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", X.reflow(this._element), e(this._element).addClass(a.COLLAPSING).removeClass(a.COLLAPSE).removeClass(a.SHOW), this._triggerArray.length)
                                    for (var r = 0; r < this._triggerArray.length; r++) {
                                        var o = this._triggerArray[r],
                                            l = X.getSelectorFromElement(o);
                                        null !== l && (e(l).hasClass(a.SHOW) || e(o).addClass(a.COLLAPSED).attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var c = function() {
                                    t.setTransitioning(!1), e(t._element).removeClass(a.COLLAPSING).addClass(a.COLLAPSE).trigger(s.HIDDEN)
                                };
                                this._element.style[i] = "", X.supportsTransitionEnd() ? e(this._element).one(X.TRANSITION_END, c).emulateTransitionEnd(600) : c()
                            }
                        }
                    }, f.setTransitioning = function(t) {
                        this._isTransitioning = t
                    }, f.dispose = function() {
                        e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, f._getConfig = function(n) {
                        return n = e.extend({}, r, n), n.toggle = Boolean(n.toggle), X.typeCheckConfig(t, n, o), n
                    }, f._getDimension = function() {
                        return e(this._element).hasClass(l.WIDTH) ? l.WIDTH : l.HEIGHT
                    }, f._getParent = function() {
                        var t = this,
                            n = null;
                        X.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return e(n).find(r).each(function(e, n) {
                            t._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                        }), n
                    }, f._addAriaAndCollapsedClass = function(t, n) {
                        if (t) {
                            var i = e(t).hasClass(a.SHOW);
                            n.length && e(n).toggleClass(a.COLLAPSED, !i).attr("aria-expanded", i)
                        }
                    }, i._getTargetFromElement = function(t) {
                        var n = X.getSelectorFromElement(t);
                        return n ? e(n)[0] : null
                    }, i._jQueryInterface = function(t) {
                        return this.each(function() {
                            var o = e(this),
                                s = o.data(n),
                                a = e.extend({}, r, o.data(), "object" == typeof t && t);
                            if (!s && a.toggle && /show|hide/.test(t) && (a.toggle = !1), s || (s = new i(this, a), o.data(n, s)), "string" == typeof t) {
                                if ("undefined" == typeof s[t]) throw new Error('No method named "' + t + '"');
                                s[t]()
                            }
                        })
                    }, q(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return r
                        }
                    }]), i
                }();
            return e(document).on(s.CLICK_DATA_API, c.DATA_TOGGLE, function(t) {
                "A" === t.currentTarget.tagName && t.preventDefault();
                var i = e(this),
                    r = X.getSelectorFromElement(this);
                e(r).each(function() {
                    var t = e(this),
                        r = t.data(n) ? "toggle" : i.data();
                    f._jQueryInterface.call(t, r)
                })
            }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
                return e.fn[t] = i, f._jQueryInterface
            }, f
        }(), et = ["native code", "[object MutationObserverConstructor]"], nt = "undefined" != typeof window, it = ["Edge", "Trident", "Firefox"], rt = 0, ot = 0; ot < it.length; ot += 1)
        if (nt && navigator.userAgent.indexOf(it[ot]) >= 0) {
            rt = 1;
            break
        }
    var st = nt && function(t) {
            return et.some(function(e) {
                return (t || "").toString().indexOf(e) > -1
            })
        }(window.MutationObserver) ? function(t) {
            var e = !1,
                n = 0,
                i = document.createElement("span");
            return new MutationObserver(function() {
                    t(), e = !1
                }).observe(i, {
                    attributes: !0
                }),
                function() {
                    e || (e = !0, i.setAttribute("x-index", n), n += 1)
                }
        } : function(t) {
            var e = !1;
            return function() {
                e || (e = !0, setTimeout(function() {
                    e = !1, t()
                }, rt))
            }
        },
        at = void 0,
        lt = function() {
            return void 0 === at && (at = -1 !== navigator.appVersion.indexOf("MSIE 10")), at
        },
        ct = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        ft = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        ht = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        ut = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        },
        dt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        pt = dt.slice(3),
        gt = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        mt = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var r = t.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                f = {
                                    start: ht({}, l, o[l]),
                                    end: ht({}, l, o[l] + o[c] - s[c])
                                };
                            t.offsets.popper = ut({}, s, f[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            r = t.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = V(+n) ? [+n, 0] : Y(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), t.popper = o, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || a(t.instance.popper);
                        t.instance.reference === n && (n = a(n));
                        var i = b(t.instance.popper, t.instance.reference, e.padding, n);
                        e.boundaries = i;
                        var r = e.priority,
                            o = t.offsets.popper,
                            s = {
                                primary: function(t) {
                                    var n = o[t];
                                    return o[t] < i[t] && !e.escapeWithReference && (n = Math.max(o[t], i[t])), ht({}, t, n)
                                },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        r = o[n];
                                    return o[t] > i[t] && !e.escapeWithReference && (r = Math.min(o[n], i[t] - ("right" === t ? o.width : o.height))), ht({}, n, r)
                                }
                            };
                        return r.forEach(function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            o = ut({}, o, s[e](t))
                        }), t.offsets.popper = o, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            r = t.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (t.offsets.popper[l] = o(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        if (!B(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var n = e.element;
                        if ("string" == typeof n) {
                            if (!(n = t.instance.popper.querySelector(n))) return t
                        } else if (!t.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var i = t.placement.split("-")[0],
                            o = t.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(i),
                            c = l ? "height" : "width",
                            f = l ? "Top" : "Left",
                            h = f.toLowerCase(),
                            u = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = O(n)[c];
                        a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)), a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]);
                        var g = a[h] + a[c] / 2 - p / 2,
                            _ = r(t.instance.popper, "margin" + f).replace("px", ""),
                            v = g - m(t.offsets.popper)[h] - _;
                        return v = Math.max(Math.min(s[c] - p, v), 0), t.arrowElement = n, t.offsets.arrow = {}, t.offsets.arrow[h] = Math.round(v), t.offsets.arrow[u] = "", t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (P(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = b(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                            i = t.placement.split("-")[0],
                            r = y(i),
                            o = t.placement.split("-")[1] || "",
                            s = [];
                        switch (e.behavior) {
                            case gt.FLIP:
                                s = [i, r];
                                break;
                            case gt.CLOCKWISE:
                                s = K(i);
                                break;
                            case gt.COUNTERCLOCKWISE:
                                s = K(i, !0);
                                break;
                            default:
                                s = e.behavior
                        }
                        return s.forEach(function(a, l) {
                            if (i !== a || s.length === l + 1) return t;
                            i = t.placement.split("-")[0], r = y(i);
                            var c = t.offsets.popper,
                                f = t.offsets.reference,
                                h = Math.floor,
                                u = "left" === i && h(c.right) > h(f.left) || "right" === i && h(c.left) < h(f.right) || "top" === i && h(c.bottom) > h(f.top) || "bottom" === i && h(c.top) < h(f.bottom),
                                d = h(c.left) < h(n.left),
                                p = h(c.right) > h(n.right),
                                g = h(c.top) < h(n.top),
                                m = h(c.bottom) > h(n.bottom),
                                _ = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                v = -1 !== ["top", "bottom"].indexOf(i),
                                E = !!e.flipVariations && (v && "start" === o && d || v && "end" === o && p || !v && "start" === o && g || !v && "end" === o && m);
                            (u || _ || E) && (t.flipped = !0, (u || _) && (i = s[l + 1]), E && (o = G(o)), t.placement = i + (o ? "-" + o : ""), t.offsets.popper = ut({}, t.offsets.popper, D(t.instance.popper, t.offsets.reference, t.placement)), t = N(t.instance.modifiers, t, "flip"))
                        }), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), t.placement = y(e), t.offsets.popper = m(r), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!B(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = S(t.instance.modifiers, function(t) {
                                return "preventOverflow" === t.name
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            r = t.offsets.popper,
                            o = S(t.instance.modifiers, function(t) {
                                return "applyStyle" === t.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : e.gpuAcceleration,
                            l = _(a(t.instance.popper)),
                            c = {
                                position: r.position
                            },
                            f = {
                                left: Math.floor(r.left),
                                top: Math.floor(r.top),
                                bottom: Math.floor(r.bottom),
                                right: Math.floor(r.right)
                            },
                            h = "bottom" === n ? "top" : "bottom",
                            u = "right" === i ? "left" : "right",
                            d = R("transform"),
                            p = void 0,
                            g = void 0;
                        if (g = "bottom" === h ? -l.height + f.bottom : f.top, p = "right" === u ? -l.width + f.right : f.left, s && d) c[d] = "translate3d(" + p + "px, " + g + "px, 0)", c[h] = 0, c[u] = 0, c.willChange = "transform";
                        else {
                            var m = "bottom" === h ? -1 : 1,
                                v = "right" === u ? -1 : 1;
                            c[h] = g * m, c[u] = p * v, c.willChange = h + ", " + u
                        }
                        var E = {
                            "x-placement": t.placement
                        };
                        return t.attributes = ut({}, E, t.attributes), t.styles = ut({}, c, t.styles), t.arrowStyles = ut({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        return F(t.instance.popper, t.styles), j(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, r) {
                        var o = I(r, e, t),
                            s = A(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), F(e, {
                            position: "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        _t = function() {
            function t(e, n) {
                var r = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                ct(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update)
                }, this.update = st(this.update.bind(this)), this.options = ut({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e.jquery ? e[0] : e, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(ut({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                    r.options.modifiers[e] = ut({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return ut({
                        name: t
                    }, r.options.modifiers[t])
                }).sort(function(t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && i(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                }), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }
            return ft(t, [{
                key: "update",
                value: function() {
                    return L.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return H.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return x.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return U.call(this)
                }
            }]), t
        }();
    _t.Utils = ("undefined" != typeof window ? window : global).PopperUtils, _t.placements = dt, _t.Defaults = mt;
    var vt = function() {
            if ("undefined" == typeof _t) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
            var t = "dropdown",
                n = "bs.dropdown",
                i = "." + n,
                r = e.fn[t],
                o = new RegExp("38|40|27"),
                s = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    CLICK: "click" + i,
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                },
                a = {
                    DISABLED: "disabled",
                    SHOW: "show",
                    DROPUP: "dropup",
                    MENURIGHT: "dropdown-menu-right",
                    MENULEFT: "dropdown-menu-left"
                },
                l = {
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    MENU: ".dropdown-menu",
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
                },
                c = {
                    TOP: "top-start",
                    TOPEND: "top-end",
                    BOTTOM: "bottom-start",
                    BOTTOMEND: "bottom-end"
                },
                f = {
                    offset: 0,
                    flip: !0
                },
                h = {
                    offset: "(number|string|function)",
                    flip: "boolean"
                },
                u = function() {
                    function r(t, e) {
                        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var u = r.prototype;
                    return u.toggle = function() {
                        if (!this._element.disabled && !e(this._element).hasClass(a.DISABLED)) {
                            var t = r._getParentFromElement(this._element),
                                n = e(this._menu).hasClass(a.SHOW);
                            if (r._clearMenus(), !n) {
                                var i = {
                                        relatedTarget: this._element
                                    },
                                    o = e.Event(s.SHOW, i);
                                if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                    var c = this._element;
                                    e(t).hasClass(a.DROPUP) && (e(this._menu).hasClass(a.MENULEFT) || e(this._menu).hasClass(a.MENURIGHT)) && (c = t), this._popper = new _t(c, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !e(t).closest(l.NAVBAR_NAV).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(a.SHOW), e(t).toggleClass(a.SHOW).trigger(e.Event(s.SHOWN, i))
                                }
                            }
                        }
                    }, u.dispose = function() {
                        e.removeData(this._element, n), e(this._element).off(i), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
                    }, u.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, u._addEventListeners = function() {
                        var t = this;
                        e(this._element).on(s.CLICK, function(e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                    }, u._getConfig = function(n) {
                        return n = e.extend({}, this.constructor.Default, e(this._element).data(), n), X.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, u._getMenuElement = function() {
                        if (!this._menu) {
                            var t = r._getParentFromElement(this._element);
                            this._menu = e(t).find(l.MENU)[0]
                        }
                        return this._menu
                    }, u._getPlacement = function() {
                        var t = e(this._element).parent(),
                            n = c.BOTTOM;
                        return t.hasClass(a.DROPUP) ? (n = c.TOP, e(this._menu).hasClass(a.MENURIGHT) && (n = c.TOPEND)) : e(this._menu).hasClass(a.MENURIGHT) && (n = c.BOTTOMEND), n
                    }, u._detectNavbar = function() {
                        return e(this._element).closest(".navbar").length > 0
                    }, u._getPopperConfig = function() {
                        var t = this,
                            n = {};
                        "function" == typeof this._config.offset ? n.fn = function(n) {
                            return n.offsets = e.extend({}, n.offsets, t._config.offset(n.offsets) || {}), n
                        } : n.offset = this._config.offset;
                        var i = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: n,
                                flip: {
                                    enabled: this._config.flip
                                }
                            }
                        };
                        return this._inNavbar && (i.modifiers.applyStyle = {
                            enabled: !this._inNavbar
                        }), i
                    }, r._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data(n),
                                o = "object" == typeof t ? t : null;
                            if (i || (i = new r(this, o), e(this).data(n, i)), "string" == typeof t) {
                                if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, r._clearMenus = function(t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var i = e.makeArray(e(l.DATA_TOGGLE)), o = 0; o < i.length; o++) {
                                var c = r._getParentFromElement(i[o]),
                                    f = e(i[o]).data(n),
                                    h = {
                                        relatedTarget: i[o]
                                    };
                                if (f) {
                                    var u = f._menu;
                                    if (e(c).hasClass(a.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(c, t.target))) {
                                        var d = e.Event(s.HIDE, h);
                                        e(c).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), e(u).removeClass(a.SHOW), e(c).removeClass(a.SHOW).trigger(e.Event(s.HIDDEN, h)))
                                    }
                                }
                            }
                    }, r._getParentFromElement = function(t) {
                        var n, i = X.getSelectorFromElement(t);
                        return i && (n = e(i)[0]), n || t.parentNode
                    }, r._dataApiKeydownHandler = function(t) {
                        if (!(!o.test(t.which) || /button/i.test(t.target.tagName) && 32 === t.which || /input|textarea/i.test(t.target.tagName) || (t.preventDefault(), t.stopPropagation(), this.disabled || e(this).hasClass(a.DISABLED)))) {
                            var n = r._getParentFromElement(this),
                                i = e(n).hasClass(a.SHOW);
                            if ((i || 27 === t.which && 32 === t.which) && (!i || 27 !== t.which && 32 !== t.which)) {
                                var s = e(n).find(l.VISIBLE_ITEMS).get();
                                if (s.length) {
                                    var c = s.indexOf(t.target);
                                    38 === t.which && c > 0 && c--, 40 === t.which && c < s.length - 1 && c++, c < 0 && (c = 0), s[c].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var f = e(n).find(l.DATA_TOGGLE)[0];
                                    e(f).trigger("focus")
                                }
                                e(this).trigger("click")
                            }
                        }
                    }, q(r, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return f
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return h
                        }
                    }]), r
                }();
            return e(document).on(s.KEYDOWN_DATA_API, l.DATA_TOGGLE, u._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, l.MENU, u._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.KEYUP_DATA_API, u._clearMenus).on(s.CLICK_DATA_API, l.DATA_TOGGLE, function(t) {
                t.preventDefault(), t.stopPropagation(), u._jQueryInterface.call(e(this), "toggle")
            }).on(s.CLICK_DATA_API, l.FORM_CHILD, function(t) {
                t.stopPropagation()
            }), e.fn[t] = u._jQueryInterface, e.fn[t].Constructor = u, e.fn[t].noConflict = function() {
                return e.fn[t] = r, u._jQueryInterface
            }, u
        }(),
        Et = function() {
            var t = "modal",
                n = ".bs.modal",
                i = e.fn[t],
                r = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                o = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                s = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                a = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                },
                l = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                c = function() {
                    function i(t, n) {
                        this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(l.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var c = i.prototype;
                    return c.toggle = function(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    }, c.show = function(t) {
                        var n = this;
                        if (!this._isTransitioning && !this._isShown) {
                            X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE) && (this._isTransitioning = !0);
                            var i = e.Event(s.SHOW, {
                                relatedTarget: t
                            });
                            e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(a.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(s.CLICK_DISMISS, l.DATA_DISMISS, function(t) {
                                return n.hide(t)
                            }), e(this._dialog).on(s.MOUSEDOWN_DISMISS, function() {
                                e(n._element).one(s.MOUSEUP_DISMISS, function(t) {
                                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                })
                            }), this._showBackdrop(function() {
                                return n._showElement(t)
                            }))
                        }
                    }, c.hide = function(t) {
                        var n = this;
                        if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                            var i = e.Event(s.HIDE);
                            if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                                this._isShown = !1;
                                var r = X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE);
                                r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(s.FOCUSIN), e(this._element).removeClass(a.SHOW), e(this._element).off(s.CLICK_DISMISS), e(this._dialog).off(s.MOUSEDOWN_DISMISS), r ? e(this._element).one(X.TRANSITION_END, function(t) {
                                    return n._hideModal(t)
                                }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, c.dispose = function() {
                        e.removeData(this._element, "bs.modal"), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, c.handleUpdate = function() {
                        this._adjustDialog()
                    }, c._getConfig = function(n) {
                        return n = e.extend({}, r, n), X.typeCheckConfig(t, n, o), n
                    }, c._showElement = function(t) {
                        var n = this,
                            i = X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && X.reflow(this._element), e(this._element).addClass(a.SHOW), this._config.focus && this._enforceFocus();
                        var r = e.Event(s.SHOWN, {
                                relatedTarget: t
                            }),
                            o = function() {
                                n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                            };
                        i ? e(this._dialog).one(X.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                    }, c._enforceFocus = function() {
                        var t = this;
                        e(document).off(s.FOCUSIN).on(s.FOCUSIN, function(n) {
                            document === n.target || t._element === n.target || e(t._element).has(n.target).length || t._element.focus()
                        })
                    }, c._setEscapeEvent = function() {
                        var t = this;
                        this._isShown && this._config.keyboard ? e(this._element).on(s.KEYDOWN_DISMISS, function(e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || e(this._element).off(s.KEYDOWN_DISMISS)
                    }, c._setResizeEvent = function() {
                        var t = this;
                        this._isShown ? e(window).on(s.RESIZE, function(e) {
                            return t.handleUpdate(e)
                        }) : e(window).off(s.RESIZE)
                    }, c._hideModal = function() {
                        var t = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            e(document.body).removeClass(a.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(s.HIDDEN)
                        })
                    }, c._removeBackdrop = function() {
                        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                    }, c._showBackdrop = function(t) {
                        var n = this,
                            i = e(this._element).hasClass(a.FADE) ? a.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var r = X.supportsTransitionEnd() && i;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = a.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(s.CLICK_DISMISS, function(t) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), r && X.reflow(this._backdrop), e(this._backdrop).addClass(a.SHOW), !t) return;
                            if (!r) return void t();
                            e(this._backdrop).one(X.TRANSITION_END, t).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            e(this._backdrop).removeClass(a.SHOW);
                            var o = function() {
                                n._removeBackdrop(), t && t()
                            };
                            X.supportsTransitionEnd() && e(this._element).hasClass(a.FADE) ? e(this._backdrop).one(X.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                        } else t && t()
                    }, c._adjustDialog = function() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, c._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, c._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, c._setScrollbar = function() {
                        var t = this;
                        if (this._isBodyOverflowing) {
                            e(l.FIXED_CONTENT).each(function(n, i) {
                                var r = e(i)[0].style.paddingRight,
                                    o = e(i).css("padding-right");
                                e(i).data("padding-right", r).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                            }), e(l.STICKY_CONTENT).each(function(n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                            }), e(l.NAVBAR_TOGGLER).each(function(n, i) {
                                var r = e(i)[0].style.marginRight,
                                    o = e(i).css("margin-right");
                                e(i).data("margin-right", r).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                            });
                            var n = document.body.style.paddingRight,
                                i = e("body").css("padding-right");
                            e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                        }
                    }, c._resetScrollbar = function() {
                        e(l.FIXED_CONTENT).each(function(t, n) {
                            var i = e(n).data("padding-right");
                            "undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right")
                        }), e(l.STICKY_CONTENT + ", " + l.NAVBAR_TOGGLER).each(function(t, n) {
                            var i = e(n).data("margin-right");
                            "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right")
                        });
                        var t = e("body").data("padding-right");
                        "undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right")
                    }, c._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = a.SCROLLBAR_MEASURER, document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, i._jQueryInterface = function(t, n) {
                        return this.each(function() {
                            var r = e(this).data("bs.modal"),
                                o = e.extend({}, i.Default, e(this).data(), "object" == typeof t && t);
                            if (r || (r = new i(this, o), e(this).data("bs.modal", r)), "string" == typeof t) {
                                if ("undefined" == typeof r[t]) throw new Error('No method named "' + t + '"');
                                r[t](n)
                            } else o.show && r.show(n)
                        })
                    }, q(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return r
                        }
                    }]), i
                }();
            return e(document).on(s.CLICK_DATA_API, l.DATA_TOGGLE, function(t) {
                var n, i = this,
                    r = X.getSelectorFromElement(this);
                r && (n = e(r)[0]);
                var o = e(n).data("bs.modal") ? "toggle" : e.extend({}, e(n).data(), e(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
                var a = e(n).one(s.SHOW, function(t) {
                    t.isDefaultPrevented() || a.one(s.HIDDEN, function() {
                        e(i).is(":visible") && i.focus()
                    })
                });
                c._jQueryInterface.call(e(n), o, this)
            }), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function() {
                return e.fn[t] = i, c._jQueryInterface
            }, c
        }(),
        Tt = function() {
            if ("undefined" == typeof _t) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            var t = "tooltip",
                n = ".bs.tooltip",
                i = e.fn[t],
                r = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                o = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)"
                },
                s = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                a = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip"
                },
                l = {
                    SHOW: "show",
                    OUT: "out"
                },
                c = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                f = {
                    FADE: "fade",
                    SHOW: "show"
                },
                h = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner",
                    ARROW: ".arrow"
                },
                u = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                d = function() {
                    function i(t, e) {
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var d = i.prototype;
                    return d.enable = function() {
                        this._isEnabled = !0
                    }, d.disable = function() {
                        this._isEnabled = !1
                    }, d.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, d.toggle = function(t) {
                        if (this._isEnabled)
                            if (t) {
                                var n = this.constructor.DATA_KEY,
                                    i = e(t.currentTarget).data(n);
                                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (e(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, d.dispose = function() {
                        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, d.show = function() {
                        var t = this;
                        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var n = e.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            e(this.element).trigger(n);
                            var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                            if (n.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                s = X.getUID(this.constructor.NAME);
                            o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(f.FADE);
                            var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                c = this._getAttachment(a);
                            this.addAttachmentClass(c);
                            var u = !1 === this.config.container ? document.body : e(this.config.container);
                            e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(u), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new _t(this.element, o, {
                                placement: c,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: h.ARROW
                                    }
                                },
                                onCreate: function(e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function(e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), e(o).addClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                            var d = function() {
                                t.config.animation && t._fixTransition();
                                var n = t._hoverState;
                                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === l.OUT && t._leave(null, t)
                            };
                            X.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(this.tip).one(X.TRANSITION_END, d).emulateTransitionEnd(i._TRANSITION_DURATION) : d()
                        }
                    }, d.hide = function(t) {
                        var n = this,
                            i = this.getTipElement(),
                            r = e.Event(this.constructor.Event.HIDE),
                            o = function() {
                                n._hoverState !== l.SHOW && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                            };
                        e(this.element).trigger(r), r.isDefaultPrevented() || (e(i).removeClass(f.SHOW), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[u.CLICK] = !1, this._activeTrigger[u.FOCUS] = !1, this._activeTrigger[u.HOVER] = !1, X.supportsTransitionEnd() && e(this.tip).hasClass(f.FADE) ? e(i).one(X.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                    }, d.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, d.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, d.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-tooltip-" + t)
                    }, d.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, d.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(h.TOOLTIP_INNER), this.getTitle()), t.removeClass(f.FADE + " " + f.SHOW)
                    }, d.setElementContent = function(t, n) {
                        var i = this.config.html;
                        "object" == typeof n && (n.nodeType || n.jquery) ? i ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[i ? "html" : "text"](n)
                    }, d.getTitle = function() {
                        var t = this.element.getAttribute("data-original-title");
                        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                    }, d._getAttachment = function(t) {
                        return s[t.toUpperCase()]
                    }, d._setListeners = function() {
                        var t = this;
                        this.config.trigger.split(" ").forEach(function(n) {
                            if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function(e) {
                                return t.toggle(e)
                            });
                            else if (n !== u.MANUAL) {
                                var i = n === u.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                    r = n === u.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                e(t.element).on(i, t.config.selector, function(e) {
                                    return t._enter(e)
                                }).on(r, t.config.selector, function(e) {
                                    return t._leave(e)
                                })
                            }
                            e(t.element).closest(".modal").on("hide.bs.modal", function() {
                                return t.hide()
                            })
                        }), this.config.selector ? this.config = e.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, d._fixTitle = function() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, d._enter = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? u.FOCUS : u.HOVER] = !0), e(n.getTipElement()).hasClass(f.SHOW) || n._hoverState === l.SHOW ? n._hoverState = l.SHOW : (clearTimeout(n._timeout), n._hoverState = l.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                            n._hoverState === l.SHOW && n.show()
                        }, n.config.delay.show) : n.show())
                    }, d._leave = function(t, n) {
                        var i = this.constructor.DATA_KEY;
                        (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? u.FOCUS : u.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = l.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                            n._hoverState === l.OUT && n.hide()
                        }, n.config.delay.hide) : n.hide())
                    }, d._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, d._getConfig = function(n) {
                        return "number" == typeof(n = e.extend({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), X.typeCheckConfig(t, n, this.constructor.DefaultType), n
                    }, d._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, d._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(r);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, d._handlePopperPlacementChange = function(t) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                    }, d._fixTransition = function() {
                        var t = this.getTipElement(),
                            n = this.config.animation;
                        null === t.getAttribute("x-placement") && (e(t).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                    }, i._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.tooltip"),
                                r = "object" == typeof t && t;
                            if ((n || !/dispose|hide/.test(t)) && (n || (n = new i(this, r), e(this).data("bs.tooltip", n)), "string" == typeof t)) {
                                if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, q(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return a
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return o
                        }
                    }]), i
                }();
            return e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function() {
                return e.fn[t] = i, d._jQueryInterface
            }, d
        }(),
        bt = function() {
            var t = "popover",
                n = ".bs.popover",
                i = e.fn[t],
                r = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                o = e.extend({}, Tt.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                }),
                s = e.extend({}, Tt.DefaultType, {
                    content: "(string|element|function)"
                }),
                a = {
                    FADE: "fade",
                    SHOW: "show"
                },
                l = {
                    TITLE: ".popover-header",
                    CONTENT: ".popover-body"
                },
                c = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                f = function(i) {
                    function f() {
                        return i.apply(this, arguments) || this
                    }
                    z(f, i);
                    var h = f.prototype;
                    return h.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, h.addAttachmentClass = function(t) {
                        e(this.getTipElement()).addClass("bs-popover-" + t)
                    }, h.getTipElement = function() {
                        return this.tip = this.tip || e(this.config.template)[0], this.tip
                    }, h.setContent = function() {
                        var t = e(this.getTipElement());
                        this.setElementContent(t.find(l.TITLE), this.getTitle()), this.setElementContent(t.find(l.CONTENT), this._getContent()), t.removeClass(a.FADE + " " + a.SHOW)
                    }, h._getContent = function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }, h._cleanTipClass = function() {
                        var t = e(this.getTipElement()),
                            n = t.attr("class").match(r);
                        null !== n && n.length > 0 && t.removeClass(n.join(""))
                    }, f._jQueryInterface = function(t) {
                        return this.each(function() {
                            var n = e(this).data("bs.popover"),
                                i = "object" == typeof t ? t : null;
                            if ((n || !/destroy|hide/.test(t)) && (n || (n = new f(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                                if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                                n[t]()
                            }
                        })
                    }, q(f, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return t
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return c
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return s
                        }
                    }]), f
                }(Tt);
            return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
                return e.fn[t] = i, f._jQueryInterface
            }, f
        }(),
        Ct = function() {
            var t = "scrollspy",
                n = e.fn[t],
                i = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                r = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                o = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                },
                s = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active"
                },
                a = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                l = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                c = function() {
                    function n(t, n) {
                        var i = this;
                        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + a.NAV_LINKS + "," + this._config.target + " " + a.LIST_ITEMS + "," + this._config.target + " " + a.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(o.SCROLL, function(t) {
                            return i._process(t)
                        }), this.refresh(), this._process()
                    }
                    var c = n.prototype;
                    return c.refresh = function() {
                        var t = this,
                            n = this._scrollElement !== this._scrollElement.window ? l.POSITION : l.OFFSET,
                            i = "auto" === this._config.method ? n : this._config.method,
                            r = i === l.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function(t) {
                            var n, o = X.getSelectorFromElement(t);
                            if (o && (n = e(o)[0]), n) {
                                var s = n.getBoundingClientRect();
                                if (s.width || s.height) return [e(n)[i]().top + r, o]
                            }
                            return null
                        }).filter(function(t) {
                            return t
                        }).sort(function(t, e) {
                            return t[0] - e[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                    }, c.dispose = function() {
                        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, c._getConfig = function(n) {
                        if ("string" != typeof(n = e.extend({}, i, n)).target) {
                            var o = e(n.target).attr("id");
                            o || (o = X.getUID(t), e(n.target).attr("id", o)), n.target = "#" + o
                        }
                        return X.typeCheckConfig(t, n, r), n
                    }, c._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, c._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, c._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, c._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            n = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= n) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i)
                        } else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                        }
                    }, c._activate = function(t) {
                        this._activeTarget = t, this._clear();
                        var n = this._selector.split(",");
                        n = n.map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = e(n.join(","));
                        i.hasClass(s.DROPDOWN_ITEM) ? (i.closest(a.DROPDOWN).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE), i.addClass(s.ACTIVE)) : (i.addClass(s.ACTIVE), i.parents(a.NAV_LIST_GROUP).prev(a.NAV_LINKS + ", " + a.LIST_ITEMS).addClass(s.ACTIVE), i.parents(a.NAV_LIST_GROUP).prev(a.NAV_ITEMS).children(a.NAV_LINKS).addClass(s.ACTIVE)), e(this._scrollElement).trigger(o.ACTIVATE, {
                            relatedTarget: t
                        })
                    }, c._clear = function() {
                        e(this._selector).filter(a.ACTIVE).removeClass(s.ACTIVE)
                    }, n._jQueryInterface = function(t) {
                        return this.each(function() {
                            var i = e(this).data("bs.scrollspy"),
                                r = "object" == typeof t && t;
                            if (i || (i = new n(this, r), e(this).data("bs.scrollspy", i)), "string" == typeof t) {
                                if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }, q(n, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return i
                        }
                    }]), n
                }();
            return e(window).on(o.LOAD_DATA_API, function() {
                for (var t = e.makeArray(e(a.DATA_SPY)), n = t.length; n--;) {
                    var i = e(t[n]);
                    c._jQueryInterface.call(i, i.data())
                }
            }), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function() {
                return e.fn[t] = n, c._jQueryInterface
            }, c
        }(),
        At = function() {
            var t = e.fn.tab,
                n = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                i = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                },
                r = {
                    DROPDOWN: ".dropdown",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    ACTIVE: ".active",
                    ACTIVE_UL: "> li > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                o = function() {
                    function t(t) {
                        this._element = t
                    }
                    var o = t.prototype;
                    return o.show = function() {
                        var t = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(i.ACTIVE) || e(this._element).hasClass(i.DISABLED))) {
                            var o, s, a = e(this._element).closest(r.NAV_LIST_GROUP)[0],
                                l = X.getSelectorFromElement(this._element);
                            if (a) {
                                var c = "UL" === a.nodeName ? r.ACTIVE_UL : r.ACTIVE;
                                s = e.makeArray(e(a).find(c)), s = s[s.length - 1]
                            }
                            var f = e.Event(n.HIDE, {
                                    relatedTarget: this._element
                                }),
                                h = e.Event(n.SHOW, {
                                    relatedTarget: s
                                });
                            if (s && e(s).trigger(f), e(this._element).trigger(h), !h.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                l && (o = e(l)[0]), this._activate(this._element, a);
                                var u = function() {
                                    var i = e.Event(n.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                        r = e.Event(n.SHOWN, {
                                            relatedTarget: s
                                        });
                                    e(s).trigger(i), e(t._element).trigger(r)
                                };
                                o ? this._activate(o, o.parentNode, u) : u()
                            }
                        }
                    }, o.dispose = function() {
                        e.removeData(this._element, "bs.tab"), this._element = null
                    }, o._activate = function(t, n, o) {
                        var s, a = this,
                            l = (s = "UL" === n.nodeName ? e(n).find(r.ACTIVE_UL) : e(n).children(r.ACTIVE))[0],
                            c = o && X.supportsTransitionEnd() && l && e(l).hasClass(i.FADE),
                            f = function() {
                                return a._transitionComplete(t, l, c, o)
                            };
                        l && c ? e(l).one(X.TRANSITION_END, f).emulateTransitionEnd(150) : f(), l && e(l).removeClass(i.SHOW)
                    }, o._transitionComplete = function(t, n, o, s) {
                        if (n) {
                            e(n).removeClass(i.ACTIVE);
                            var a = e(n.parentNode).find(r.DROPDOWN_ACTIVE_CHILD)[0];
                            a && e(a).removeClass(i.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                        }
                        if (e(t).addClass(i.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), o ? (X.reflow(t), e(t).addClass(i.SHOW)) : e(t).removeClass(i.FADE), t.parentNode && e(t.parentNode).hasClass(i.DROPDOWN_MENU)) {
                            var l = e(t).closest(r.DROPDOWN)[0];
                            l && e(l).find(r.DROPDOWN_TOGGLE).addClass(i.ACTIVE), t.setAttribute("aria-expanded", !0)
                        }
                        s && s()
                    }, t._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = e(this),
                                r = i.data("bs.tab");
                            if (r || (r = new t(this), i.data("bs.tab", r)), "string" == typeof n) {
                                if ("undefined" == typeof r[n]) throw new Error('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, q(t, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), t
                }();
            return e(document).on(n.CLICK_DATA_API, r.DATA_TOGGLE, function(t) {
                t.preventDefault(), o._jQueryInterface.call(e(this), "show")
            }), e.fn.tab = o._jQueryInterface, e.fn.tab.Constructor = o, e.fn.tab.noConflict = function() {
                return e.fn.tab = t, o._jQueryInterface
            }, o
        }();
    return function() {
        if ("undefined" == typeof e) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(), t.Util = X, t.Alert = Z, t.Button = J, t.Carousel = $, t.Collapse = tt, t.Dropdown = vt, t.Modal = Et, t.Popover = bt, t.Scrollspy = Ct, t.Tab = At, t.Tooltip = Tt, t
}({}, $);
/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

;(function($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; }
  };

  $.fn.bxSlider = function(options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // apply css to all slider children
      slider.children.css({
        float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete) { $(this).trigger('load'); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth);
        }
      // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
        }
      // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
      // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      // cycle through each child
      slider.children.each(function(index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
        // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };

    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
      // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(function() {
          el.startAuto();
        }).blur(function() {
          el.stopAuto();
        });
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function() {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function() {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function(e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          //we don't go to undefined slides
          return slider.active.index;
        }
      // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
      // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        } else {
          slider.working = false;
        }
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);


! function(t) {
    function e(i) {
        if (r[i]) return r[i].exports;
        var n = r[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }
    var r = {};
    e.m = t, e.c = r, e.d = function(t, r, i) {
        e.o(t, r) || Object.defineProperty(t, r, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 4)
}([function(t, e, r) {
    "use strict";
    r.d(e, "b", function() {
        return n
    }), r.d(e, "h", function() {
        return o
    }), r.d(e, "i", function() {
        return s
    }), r.d(e, "g", function() {
        return a
    }), r.d(e, "e", function() {
        return l
    }), r.d(e, "j", function() {
        return u
    }), r.d(e, "f", function() {
        return c
    }), r.d(e, "k", function() {
        return f
    }), r.d(e, "c", function() {
        return p
    }), r.d(e, "d", function() {
        return h
    }), r.d(e, "l", function() {
        return d
    }), r.d(e, "a", function() {
        return v
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        n = function(t, e) {
            for (var r = 0; r < t.length; r++) {
                for (var i = !1, n = t[r], o = 0; o < e.length; o++) n === e[o] && (i = !0);
                if (!i) return !1
            }
            return !0
        },
        o = function(t) {
            var e = {};
            for (var r in t) e[r] = t[r];
            return e
        },
        s = function t(e, r) {
            var n = o(r);
            for (var s in e) s in n ? "object" !== i(n[s]) || "object" !== i(e[s]) || Array.isArray(e[s]) || (n[s] = t("object" === i(n[s]) ? n[s] : {}, e[s])) : n[s] = e[s];
            return n
        },
        a = function(t, e) {
            return Array.prototype.filter.call(t, function(t) {
                return e.includes(t)
            })
        },
        l = function(t, e, r) {
            var i = void 0;
            return function() {
                var n = this,
                    o = arguments;
                clearTimeout(i), i = setTimeout(function() {
                    i = null, r || t.apply(n, o)
                }, e), r && !i && t.apply(n, o)
            }
        },
        u = function(t) {
            for (var e = t.slice(0), r = []; 0 !== e.length;) {
                var i = Math.floor(e.length * Math.random());
                r.push(e[i]), e.splice(i, 1)
            }
            return r
        },
        c = function(t, e) {
            if (t.length !== e.length) return !1;
            for (var r = 0; r < t.length; r++)
                if (t[r].props.index !== e[r].props.index) return !1;
            return !0
        },
        f = function(t, e) {
            return t.slice(0).sort(function(t) {
                return function(e, r) {
                    var i = t(e),
                        n = t(r);
                    return i < n ? -1 : i > n ? 1 : 0
                }
            }(e))
        },
        p = function(t, e, r, n, o) {
            if (void 0 !== e) {
                var s = new Error('Filterizr: expected type of option "' + t + '" to be "' + r + '", but its type is: "' + (void 0 === e ? "undefined" : i(e)) + '"'),
                    a = !1,
                    l = !1,
                    u = r.includes("array");
                if ((void 0 === e ? "undefined" : i(e)).match(r) ? a = !0 : !a && u && (l = Array.isArray(e)), !a && !u) throw s;
                if (!a && u && !l) throw s;
                var c = function(t) {
                    return t ? " For further help read here: " + t : ""
                };
                if (Array.isArray(n)) {
                    var f = !1;
                    if (n.forEach(function(t) {
                            t === e && (f = !0)
                        }), !f) throw new Error('Filterizr: allowed values for option "' + t + '" are: ' + n.map(function(t) {
                        return '"' + t + '"'
                    }).join(", ") + '. Value received: "' + e + '".' + c(o))
                } else if (n instanceof RegExp) {
                    var p = e.match(n);
                    if (!p) throw new Error('Filterizr: invalid value "' + e + '" for option "' + t + '" received.' + c(o))
                }
            }
        },
        h = /(^linear$)|(^ease-in-out$)|(^ease-in$)|(^ease-out$)|(^ease$)|(^step-start$)|(^step-end$)|(^steps\(\d\s*,\s*(end|start)\))$|(^cubic-bezier\((\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\s*,\s*(\d*\.*\d+)\))$/,
        d = "\n  webkitTransitionEnd.Filterizr \n  otransitionend.Filterizr \n  oTransitionEnd.Filterizr \n  msTransitionEnd.Filterizr \n  transitionend.Filterizr\n",
        v = {
            IDLE: "IDLE",
            FILTERING: "FILTERING",
            SORTING: "SORTING",
            SHUFFLING: "SHUFFLING"
        }
}, function(t, e, r) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var n = r(2),
        o = r(0),
        s = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(),
        a = window.jQuery,
        l = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".filtr-container",
                    r = arguments[1];
                i(this, t), this.$node = a(e), this.$node.css({
                    padding: 0,
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    "flex-wrap": "wrap"
                }), this.props = {
                    FilterItems: this.getFilterItems(r),
                    w: this.getWidth(),
                    h: 0
                }, this.updateFilterItemsDimensions()
            }
            return s(t, [{
                key: "destroy",
                value: function() {
                    this.$node.attr("style", "").find(".filtr-item").attr("style", ""), this.unbindEvents()
                }
            }, {
                key: "getFilterItems",
                value: function(t) {
                    return a.map(this.$node.find(".filtr-item"), function(e, r) {
                        return new n.a(a(e), r, t)
                    })
                }
            }, {
                key: "push",
                value: function(t, e) {
                    var r = this.props.FilterItems;
                    this.$node.append(t);
                    var i = r.length,
                        o = new n.a(t, i, e);
                    this.props.FilterItems.push(o)
                }
            }, {
                key: "calcColumns",
                value: function() {
                    return Math.round(this.props.w / this.props.FilterItems[0].props.w)
                }
            }, {
                key: "updateFilterItemsTransitionStyle",
                value: function(t, e, r, i) {
                    this.props.FilterItems.forEach(function(n) {
                        return n.$node.css({
                            transition: "all " + t + "s " + e + " " + n.calcDelay(r, i) + "ms"
                        })
                    })
                }
            }, {
                key: "updateHeight",
                value: function(t) {
                    this.props.h = t, this.$node.css("height", t)
                }
            }, {
                key: "updateWidth",
                value: function() {
                    this.props.w = this.getWidth()
                }
            }, {
                key: "updateFilterItemsDimensions",
                value: function() {
                    this.props.FilterItems.forEach(function(t) {
                        return t.updateDimensions()
                    })
                }
            }, {
                key: "getWidth",
                value: function() {
                    return this.$node.innerWidth()
                }
            }, {
                key: "bindTransitionEnd",
                value: function(t, e) {
                    this.$node.on(o.l, Object(o.e)(function() {
                        t()
                    }, e))
                }
            }, {
                key: "bindEvents",
                value: function(t) {
                    this.$node.on("filteringStart.Filterizr", t.onFilteringStart), this.$node.on("filteringEnd.Filterizr", t.onFilteringEnd), this.$node.on("shufflingStart.Filterizr", t.onShufflingStart), this.$node.on("shufflingEnd.Filterizr", t.onShufflingEnd), this.$node.on("sortingStart.Filterizr", t.onSortingStart), this.$node.on("sortingEnd.Filterizr", t.onSortingEnd)
                }
            }, {
                key: "unbindEvents",
                value: function() {
                    this.$node.off(o.l + "\n      filteringStart.Filterizr \n      filteringEnd.Filterizr \n      shufflingStart.Filterizr \n      shufflingEnd.Filterizr \n      sortingStart.Filterizr \n      sortingEnd.Filterizr")
                }
            }, {
                key: "trigger",
                value: function(t) {
                    this.$node.trigger(t)
                }
            }]), t
        }();
    e.a = l
}, function(t, e, r) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var n = r(0),
        o = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(),
        s = function() {
            function t(e, r, n) {
                var o = this;
                i(this, t);
                var s = n.delay,
                    a = n.delayMode,
                    l = n.filterOutCss,
                    u = n.animationDuration,
                    c = n.easing;
                this.$node = e, this.props = {
                    data: function() {
                        var t = o.$node.data();
                        return delete t.category, delete t.sort, t
                    }(),
                    index: r,
                    sortData: this.$node.data("sort"),
                    lastPosition: {
                        left: 0,
                        top: 0
                    },
                    filteredOut: !1,
                    w: this.getWidth(),
                    h: this.getHeight()
                }, this.$node.css(l).css({
                    "-webkit-backface-visibility": "hidden",
                    perspective: "1000px",
                    "-webkit-perspective": "1000px",
                    "-webkit-transform-style": "preserve-3d",
                    position: "absolute",
                    transition: "all " + u + "s " + c + " " + this.calcDelay(s, a) + "ms"
                }), this.bindEvents()
            }
            return o(t, [{
                key: "filterIn",
                value: function(t, e) {
                    var r = Object(n.h)(e);
                    r.transform += " translate3d(" + t.left + "px," + t.top + "px, 0)", this.$node.css(r), this.props.lastPosition = t, this.props.filteredOut = !1
                }
            }, {
                key: "filterOut",
                value: function(t) {
                    var e = Object(n.h)(t),
                        r = this.props.lastPosition;
                    e.transform += " translate3d(" + r.left + "px," + r.top + "px, 0)", this.$node.css(e), this.props.filteredOut = !0
                }
            }, {
                key: "calcDelay",
                value: function(t, e) {
                    var r = 0;
                    return "progressive" === e ? r = t * this.props.index : this.props.index % 2 == 0 && (r = t), r
                }
            }, {
                key: "contentsMatchSearch",
                value: function(t) {
                    return Boolean(this.getContentsLowercase().includes(t))
                }
            }, {
                key: "getContentsLowercase",
                value: function() {
                    return this.$node.text().toLowerCase()
                }
            }, {
                key: "getCategories",
                value: function() {
                    return this.$node.attr("data-category").split(/\s*,\s*/g)
                }
            }, {
                key: "getHeight",
                value: function() {
                    return this.$node.innerHeight()
                }
            }, {
                key: "getWidth",
                value: function() {
                    return this.$node.innerWidth()
                }
            }, {
                key: "trigger",
                value: function(t) {
                    this.$node.trigger(t)
                }
            }, {
                key: "updateDimensions",
                value: function() {
                    this.props.w = this.getWidth(), this.props.h = this.getHeight()
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this;
                    this.$node.on(n.l, function() {
                        var e = t.props.filteredOut;
                        t.$node.toggleClass("filteredOut", e), t.$node.css("z-index", e ? -1e3 : "")
                    })
                }
            }, {
                key: "unbindEvents",
                value: function() {
                    this.$node.off(n.l)
                }
            }]), t
        }();
    e.a = s
}, function(t, e, r) {
    "use strict";
    var i = {
        animationDuration: .5,
        callbacks: {
            onFilteringStart: function() {},
            onFilteringEnd: function() {},
            onShufflingStart: function() {},
            onShufflingEnd: function() {},
            onSortingStart: function() {},
            onSortingEnd: function() {}
        },
        controlsSelector: "",
        delay: 0,
        delayMode: "progressive",
        easing: "ease-out",
        filter: "all",
        filterOutCss: {
            opacity: 0,
            transform: "scale(0.5)"
        },
        filterInCss: {
            opacity: 1,
            transform: "scale(1)"
        },
        layout: "sameSize",
        multifilterLogicalOperator: "or",
        setupControls: !0
    };
    e.a = i
}, function(t, e, r) {
    t.exports = r(5)
}, function(t, e, r) {
    "use strict";

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r
        }
        return Array.from(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = r(6),
        o = r(1),
        s = r(2),
        a = r(3),
        l = r(15);
    r.d(e, "Filterizr", function() {
        return n.a
    }), r.d(e, "FilterContainer", function() {
        return o.a
    }), r.d(e, "FilterItem", function() {
        return s.a
    }), r.d(e, "DefaultOptions", function() {
        return a.a
    });
    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        c = void 0,
        f = void 0;
    c = f = window.jQuery,
        function(t) {
            if (!t) throw new Error("Filterizr requires jQuery to work.");
            Object(l.a)(), t.fn.filterizr = function() {
                var e = "." + t.trim(this.get(0).className).replace(/\s+/g, "."),
                    r = arguments;
                if (!this._fltr && 0 === r.length || 1 === r.length && "object" === u(r[0])) {
                    var o = r.length > 0 ? r[0] : a.a;
                    this._fltr = new n.a(e, o)
                } else if (r.length >= 1 && "string" == typeof r[0]) {
                    var s = r[0],
                        l = Array.prototype.slice.call(r, 1),
                        c = this._fltr;
                    switch (s) {
                        case "filter":
                            return c.filter.apply(c, i(l)), this;
                        case "insertItem":
                            return c.insertItem.apply(c, i(l)), this;
                        case "toggleFilter":
                            return c.toggleFilter.apply(c, i(l)), this;
                        case "sort":
                            return c.sort.apply(c, i(l)), this;
                        case "shuffle":
                            return c.shuffle.apply(c, i(l)), this;
                        case "search":
                            return c.search.apply(c, i(l)), this;
                        case "setOptions":
                            return c.setOptions.apply(c, i(l)), this;
                        case "destroy":
                            return c.destroy.apply(c, i(l)), delete this._fltr, this;
                        default:
                            throw new Error("Filterizr: " + s + " is not part of the Filterizr API. Please refer to the docs for more information.")
                    }
                }
                return this
            }
        }(f), e.default = c, r(16)
}, function(t, e, r) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var n = r(7),
        o = r(1),
        s = r(8),
        a = r(3),
        l = r(0),
        u = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(),
        c = window.jQuery,
        f = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".filtr-container",
                    r = arguments[1];
                i(this, t), this.options = Object(l.i)(a.a, r);
                var s = new o.a(e, this.options);
                if (!s.$node.length) throw new Error("Filterizr: could not find a container with the selector " + e + ", to initialize Filterizr.");
                new n.a(this, this.options.controlsSelector), this.props = {
                    filterizrState: l.a.IDLE,
                    searchTerm: "",
                    sort: "index",
                    sortOrder: "asc",
                    FilterContainer: s,
                    FilterItems: s.props.FilterItems,
                    FilteredItems: []
                }, this.bindEvents(), this.filter(this.options.filter)
            }
            return u(t, [{
                key: "filter",
                value: function(t) {
                    var e = this.props,
                        r = e.searchTerm,
                        i = e.FilterContainer,
                        n = e.FilterItems;
                    i.trigger("filteringStart"), this.props.filterizrState = l.a.FILTERING, t = Array.isArray(t) ? t.map(function(t) {
                        return t.toString()
                    }) : t.toString();
                    var o = this.searchFilterItems(this.filterFilterItems(n, t), r);
                    this.props.FilteredItems = o, this.render(o)
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this.props.FilterContainer,
                        e = this.options.controlsSelector;
                    t.destroy(), c(window).off("resize.Filterizr"), c(e + "[data-filter]").off("click.Filterizr"), c(e + "[data-multifilter]").off("click.Filterizr"), c(e + "[data-shuffle]").off("click.Filterizr"), c(e + "[data-search]").off("keyup.Filterizr"), c(e + "[data-sortAsc]").off("click.Filterizr"), c(e + "[data-sortDesc]").off("click.Filterizr")
                }
            }, {
                key: "insertItem",
                value: function(t) {
                    var e = this.props.FilterContainer,
                        r = t.clone().attr("style", "");
                    e.push(r, this.options);
                    var i = this.filterFilterItems(this.props.FilterItems, this.options.filter);
                    this.render(i)
                }
            }, {
                key: "sort",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "index",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "asc",
                        r = this.props,
                        i = r.FilterContainer,
                        n = r.FilterItems;
                    i.trigger("sortingStart"), this.props.filterizrState = l.a.SORTING, this.props.FilterItems = this.sortFilterItems(n, t, e);
                    var o = this.filterFilterItems(this.props.FilterItems, this.options.filter);
                    this.props.FilteredItems = o, this.render(o)
                }
            }, {
                key: "search",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.searchTerm,
                        e = this.props.FilterItems,
                        r = this.searchFilterItems(this.filterFilterItems(e, this.options.filter), t);
                    this.props.FilteredItems = r, this.render(r)
                }
            }, {
                key: "shuffle",
                value: function() {
                    var t = this.props,
                        e = t.FilterContainer,
                        r = t.FilteredItems;
                    e.trigger("shufflingStart"), this.props.filterizrState = l.a.SHUFFLING;
                    var i = this.shuffleFilterItems(r);
                    this.props.FilteredItems = i, this.render(i)
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    Object(l.c)("animationDuration", t.animationDuration, "number"), Object(l.c)("callbacks", t.callbacks, "object"), Object(l.c)("controlsSelector", t.controlsSelector, "string"), Object(l.c)("delay", t.delay, "number"), Object(l.c)("easing", t.easing, "string", l.d, "https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp"), Object(l.c)("delayMode", t.delayMode, "string", ["progressive", "alternate"]), Object(l.c)("filter", t.filter, "string|number|array"), Object(l.c)("filterOutCss", t.filterOutCss, "object"), Object(l.c)("filterInCss", t.filterOutCss, "object"), Object(l.c)("layout", t.layout, "string", ["sameSize", "vertical", "horizontal", "sameHeight", "sameWidth", "packed"]), Object(l.c)("multifilterLogicalOperator", t.multifilterLogicalOperator, "string", ["and", "or"]), Object(l.c)("setupControls", t.setupControls, "boolean"), this.options = Object(l.i)(this.options, t), (t.animationDuration || t.delay || t.delayMode || t.easing) && this.props.FilterContainer.updateFilterItemsTransitionStyle(t.animationDuration, t.easing, t.delay, t.delayMode), (t.callbacks || t.animationDuration) && this.rebindFilterContainerEvents(), t.filter && this.filter(t.filter), t.multifilterLogicalOperator && this.filter(this.options.filter)
                }
            }, {
                key: "toggleFilter",
                value: function(t) {
                    var e = this.options.filter;
                    "all" === e ? e = t : Array.isArray(e) ? e.includes(t) ? (e = e.filter(function(e) {
                        return e !== t
                    }), 1 === e.length && (e = e[0])) : e.push(t) : e = e === t ? "all" : [e, t], this.options.filter = e, this.filter(this.options.filter)
                }
            }, {
                key: "filterFilterItems",
                value: function(t, e) {
                    var r = this.options.multifilterLogicalOperator;
                    return "all" === e ? t : t.filter(function(t) {
                        var i = t.getCategories();
                        return Array.isArray(e) ? "or" === r ? Object(l.g)(i, e).length : Object(l.b)(e, i) : i.includes(e)
                    })
                }
            }, {
                key: "sortFilterItems",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "index",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "asc",
                        i = Object(l.k)(t, function(t) {
                            return "index" !== e && "sortData" !== e ? t.props.data[e] : t.props[e]
                        });
                    return "asc" === r ? i : i.reverse()
                }
            }, {
                key: "searchFilterItems",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.props.searchTerm;
                    return e ? t.filter(function(t) {
                        return t.contentsMatchSearch(e)
                    }) : t
                }
            }, {
                key: "shuffleFilterItems",
                value: function(t) {
                    for (var e = Object(l.j)(t); t.length > 1 && Object(l.f)(t, e);) e = Object(l.j)(t);
                    return e
                }
            }, {
                key: "render",
                value: function(t) {
                    var e = this,
                        r = this.options,
                        i = r.filter,
                        n = r.filterInCss,
                        o = r.filterOutCss,
                        a = r.layout,
                        u = r.multifilterLogicalOperator;
                    this.props.FilterItems.filter(function(t) {
                        var r = t.getCategories(),
                            n = Array.isArray(i),
                            o = t.contentsMatchSearch(e.props.searchTerm);
                        return !(n ? "or" === u ? Object(l.g)(r, i).length : Object(l.b)(i, r) : r.includes(i)) || !o
                    }).forEach(function(t) {
                        t.filterOut(o)
                    });
                    var c = Object(s.a)(a, this);
                    t.forEach(function(t, e) {
                        t.filterIn(c[e], n)
                    })
                }
            }, {
                key: "onTransitionEndCallback",
                value: function() {
                    var t = this.props,
                        e = t.filterizrState,
                        r = t.FilterContainer;
                    switch (e) {
                        case l.a.FILTERING:
                            r.trigger("filteringEnd");
                            break;
                        case l.a.SORTING:
                            r.trigger("sortingEnd");
                            break;
                        case l.a.SHUFFLING:
                            r.trigger("shufflingEnd")
                    }
                    this.props.filterizrState = l.a.IDLE
                }
            }, {
                key: "rebindFilterContainerEvents",
                value: function() {
                    var t = this,
                        e = this.props.FilterContainer,
                        r = this.options,
                        i = r.animationDuration,
                        n = r.callbacks;
                    e.unbindEvents(), e.bindEvents(n), e.bindTransitionEnd(function() {
                        t.onTransitionEndCallback()
                    }, i)
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var t = this,
                        e = this.props.FilterContainer;
                    this.rebindFilterContainerEvents(), c(window).on("resize.Filterizr", Object(l.e)(function() {
                        e.updateWidth(), e.updateFilterItemsDimensions(), t.filter(t.options.filter)
                    }, 250))
                }
            }]), t
        }();
    e.a = f
}, function(t, e, r) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var n = r(0),
        o = function() {
            function t(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, r, i) {
                return r && t(e.prototype, r), i && t(e, i), e
            }
        }(),
        s = window.jQuery,
        a = function() {
            function t(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                i(this, t), this.props = {
                    Filterizr: e,
                    selector: r
                }, this.setupFilterControls(), this.setupShuffleControls(), this.setupSearchControls(), this.setupSortControls()
            }
            return o(t, [{
                key: "setupFilterControls",
                value: function() {
                    var t = this.props,
                        e = t.Filterizr,
                        r = t.selector;
                    s(r + "[data-filter]").on("click.Filterizr", function(t) {
                        var r = s(t.currentTarget),
                            i = r.attr("data-filter");
                        e.options.filter = i, e.filter(e.options.filter)
                    }), s(r + "[data-multifilter]").on("click.Filterizr", function(t) {
                        var r = s(t.target),
                            i = r.attr("data-multifilter");
                        e.toggleFilter(i)
                    })
                }
            }, {
                key: "setupShuffleControls",
                value: function() {
                    var t = this.props,
                        e = t.Filterizr,
                        r = t.selector;
                    s(r + "[data-shuffle]").on("click.Filterizr", function() {
                        e.shuffle()
                    })
                }
            }, {
                key: "setupSearchControls",
                value: function() {
                    var t = this.props,
                        e = t.Filterizr,
                        r = t.selector;
                    s(r + "[data-search]").on("keyup.Filterizr", Object(n.e)(function(t) {
                        var r = s(t.target),
                            i = r.val();
                        e.props.searchTerm = i.toLowerCase(), e.search(e.props.searchTerm)
                    }, 250))
                }
            }, {
                key: "setupSortControls",
                value: function() {
                    var t = this.props,
                        e = t.Filterizr,
                        r = t.selector;
                    s(r + "[data-sortAsc]").on("click.Filterizr", function() {
                        var t = s(r + "[data-sortOrder]").val();
                        e.props.sortOrder = "asc", e.sort(t, "asc")
                    }), s(r + "[data-sortDesc]").on("click.Filterizr", function() {
                        var t = s(r + "[data-sortOrder]").val();
                        e.props.sortOrder = "desc", e.sort(t, "desc")
                    })
                }
            }]), t
        }();
    e.a = a
}, function(t, e, r) {
    "use strict";
    var i = r(9),
        n = r(10),
        o = r(11),
        s = r(12),
        a = r(13),
        l = r(14),
        u = function(t, e) {
            switch (t) {
                case "horizontal":
                    return Object(i.a)(e);
                case "vertical":
                    return Object(n.a)(e);
                case "sameHeight":
                    return Object(o.a)(e);
                case "sameWidth":
                    return Object(s.a)(e);
                case "sameSize":
                    return Object(a.a)(e);
                case "packed":
                    return Object(l.a)(e);
                default:
                    return Object(a.a)(e)
            }
        };
    e.a = u
}, function(t, e, r) {
    "use strict";
    var i = function(t) {
        var e = t.props,
            r = e.FilterContainer,
            i = e.FilteredItems,
            n = 0,
            o = 0,
            s = i.map(function(t) {
                var e = t.props,
                    r = e.w,
                    i = e.h,
                    s = {
                        left: n,
                        top: 0
                    };
                return n += r, i > o && (o = i), s
            });
        return r.updateHeight(o), s
    };
    e.a = i
}, function(t, e, r) {
    "use strict";
    var i = function(t) {
        var e = t.props,
            r = e.FilterContainer,
            i = e.FilteredItems,
            n = 0,
            o = i.map(function(t) {
                var e = t.props.h,
                    r = {
                        left: 0,
                        top: n
                    };
                return n += e, r
            });
        return r.updateHeight(n), o
    };
    e.a = i
}, function(t, e, r) {
    "use strict";
    var i = function(t) {
        var e = t.props,
            r = e.FilterContainer,
            i = e.FilteredItems,
            n = r.props.w,
            o = i[0].props.h,
            s = 0,
            a = 0,
            l = i.map(function(t) {
                var e = t.props.w;
                a + e > n && (s++, a = 0);
                var r = {
                    left: a,
                    top: o * s
                };
                return a += e, r
            });
        return r.updateHeight((s + 1) * i[0].props.h), l
    };
    e.a = i
}, function(t, e, r) {
    "use strict";

    function i(t) {
        if (Array.isArray(t)) {
            for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
            return r
        }
        return Array.from(t)
    }
    var n = function(t) {
            var e = t.props,
                r = e.FilterContainer,
                n = e.FilteredItems,
                s = r.calcColumns(),
                a = 0,
                l = Array.apply(null, Array(s)).map(Number.prototype.valueOf, 0),
                u = n.map(function(t, e) {
                    var r = t.props,
                        i = r.w,
                        u = r.h;
                    e % s == 0 && e >= s && a++;
                    var c = e - s * a;
                    return l[c] += u, {
                        left: c * i,
                        top: o(n, s, e)
                    }
                });
            return r.updateHeight(Math.max.apply(Math, i(l))), u
        },
        o = function(t, e, r) {
            if (e <= 0) return 0;
            var i = 0;
            if (r < e - 1) return 0;
            for (r -= e; r >= 0;) i += t[r].props.h, r -= e;
            return i
        };
    e.a = n
}, function(t, e, r) {
    "use strict";
    var i = function(t) {
        var e = t.props,
            r = e.FilterContainer,
            i = e.FilteredItems,
            n = r.calcColumns(),
            o = 0,
            s = i.map(function(t, e) {
                return e % n == 0 && e >= n && o++, {
                    left: (e - n * o) * t.props.w,
                    top: o * t.props.h
                }
            }),
            a = i[0] && i[0].props.h || 0;
        return r.updateHeight((o + 1) * a), s
    };
    e.a = i
}, function(t, e, r) {
    "use strict";
    var i = function(t) {
            var e = t.props,
                r = e.FilterContainer,
                i = e.FilteredItems,
                o = new n(r.props.w),
                s = i.map(function(t) {
                    var e = t.props;
                    return {
                        w: e.w,
                        h: e.h
                    }
                });
            o.fit(s);
            var a = s.map(function(t) {
                var e = t.fit;
                return {
                    left: e.x,
                    top: e.y
                }
            });
            return r.updateHeight(o.root.h), a
        },
        n = function(t) {
            this.init(t)
        };
    n.prototype = {
        init: function(t) {
            this.root = {
                x: 0,
                y: 0,
                w: t
            }
        },
        fit: function(t) {
            var e, r, i, n = t.length,
                o = n > 0 ? t[0].h : 0;
            for (this.root.h = o, e = 0; e < n; e++) i = t[e], (r = this.findNode(this.root, i.w, i.h)) ? i.fit = this.splitNode(r, i.w, i.h) : i.fit = this.growDown(i.w, i.h)
        },
        findNode: function(t, e, r) {
            return t.used ? this.findNode(t.right, e, r) || this.findNode(t.down, e, r) : e <= t.w && r <= t.h ? t : null
        },
        splitNode: function(t, e, r) {
            return t.used = !0, t.down = {
                x: t.x,
                y: t.y + r,
                w: t.w,
                h: t.h - r
            }, t.right = {
                x: t.x + e,
                y: t.y,
                w: t.w - e,
                h: r
            }, t
        },
        growDown: function(t, e) {
            var r;
            return this.root = {
                used: !0,
                x: 0,
                y: 0,
                w: this.root.w,
                h: this.root.h + e,
                down: {
                    x: 0,
                    y: this.root.h,
                    w: this.root.w,
                    h: e
                },
                right: this.root
            }, (r = this.findNode(this.root, t, e)) ? this.splitNode(r, t, e) : null
        }
    }, e.a = i
}, function(t, e, r) {
    "use strict";

    function i() {
        String.prototype.includes || (String.prototype.includes = function(t, e) {
            return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
        }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(t, e) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var r = Object(this),
                    i = r.length >>> 0;
                if (0 === i) return !1;
                for (var n = 0 | e, o = Math.max(n >= 0 ? n : i - Math.abs(n), 0); o < i;) {
                    if (function(t, e) {
                            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
                        }(r[o], t)) return !0;
                    o++
                }
                return !1
            }
        })
    }
    e.a = i
}, function(t, e, r) {}]);
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
                if (void 0 === c || c === !1) return !0;
                if (e = a.split("_"), e.length > 1) {
                    var d = b.find(p + "-" + e[0]);
                    if (d.length > 0) {
                        var f = e[1];
                        "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                    }
                } else b.find(p + "-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery",
                    g = Boolean(a.fn.mfpFastClick);
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                            h = g ? "mfpFastClick" : "click";
                        e[h](function() {
                            b.prev()
                        }), f[h](function() {
                            b.next()
                        }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(a) {
                    return a.src.replace(/\.\w+$/, function(a) {
                        return "@2x" + a
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var a = b.st.retina,
                            c = a.ratio;
                        c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                            b.img.css({
                                "max-width": b.img[0].naturalWidth / c,
                                width: "100%"
                            })
                        }), w("ElementParse." + U, function(b, d) {
                            d.src = a.replaceSrc(d, c)
                        }))
                    }
                }
            }
        }),
        function() {
            var b = 1e3,
                c = "ontouchstart" in window,
                d = function() {
                    v.off("touchmove" + f + " touchend" + f)
                },
                e = "mfpFastClick",
                f = "." + e;
            a.fn.mfpFastClick = function(e) {
                return a(this).each(function() {
                    var g, h = a(this);
                    if (c) {
                        var i, j, k, l, m, n;
                        h.on("touchstart" + f, function(a) {
                            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                            }).on("touchend" + f, function(a) {
                                d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                    g = !1
                                }, b), e())
                            })
                        })
                    }
                    h.on("click" + f, function() {
                        g || e()
                    })
                })
            }, a.fn.destroyMfpFastClick = function() {
                a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
            }
        }(), A()
});
if (typeof Object.create !== "function") {
    Object.create = function(e) {
        function t() {}
        t.prototype = e;
        return new t
    }
}(function(e, t, n, r) {
    "use strict";
    var i = {
        init: function(n, r) {
            this.options = e.extend({}, e.fn.singlePageNav.defaults, n);
            this.container = r;
            this.$container = e(r);
            this.$links = this.$container.find("a");
            if (this.options.filter !== "") {
                this.$links = this.$links.filter(this.options.filter)
            }
            this.$window = e(t);
            this.$htmlbody = e("html, body");
            this.$links.on("click.singlePageNav", e.proxy(this.handleClick, this));
            this.didScroll = false;
            this.checkPosition();
            this.setTimer()
        },
        handleClick: function(t) {
            var n = this,
                r = t.currentTarget,
                i = e(r.hash);
            t.preventDefault();
            if (i.length) {
                n.clearTimer();
                if (typeof n.options.beforeStart === "function") {
                    n.options.beforeStart()
                }
                n.setActiveLink(r.hash);
                n.scrollTo(i, function() {
                    if (n.options.updateHash && history.pushState) {
                        history.pushState(null, null, r.hash)
                    }
                    n.setTimer();
                    if (typeof n.options.onComplete === "function") {
                        n.options.onComplete()
                    }
                })
            }
        },
        scrollTo: function(e, t) {
            var n = this;
            var r = n.getCoords(e).top;
            var i = false;
            n.$htmlbody.stop().animate({
                scrollTop: r
            }, {
                duration: n.options.speed,
                easing: n.options.easing,
                complete: function() {
                    if (typeof t === "function" && !i) {
                        t()
                    }
                    i = true
                }
            })
        },
        setTimer: function() {
            var e = this;
            e.$window.on("scroll.singlePageNav", function() {
                e.didScroll = true
            });
            e.timer = setInterval(function() {
                if (e.didScroll) {
                    e.didScroll = false;
                    e.checkPosition()
                }
            }, 250)
        },
        clearTimer: function() {
            clearInterval(this.timer);
            this.$window.off("scroll.singlePageNav");
            this.didScroll = false
        },
        checkPosition: function() {
            var e = this.$window.scrollTop();
            var t = this.getCurrentSection(e);
            this.setActiveLink(t)
        },
        getCoords: function(e) {
            return {
                top: Math.round(e.offset().top) - this.options.offset
            }
        },
        setActiveLink: function(e) {
            var t = this.$container.find("a[href$='" + e + "']");
            if (!t.hasClass(this.options.currentClass)) {
                this.$links.removeClass(this.options.currentClass);
                t.addClass(this.options.currentClass)
            }
        },
        getCurrentSection: function(t) {
            var n, r, i, s;
            for (n = 0; n < this.$links.length; n++) {
                r = this.$links[n].hash;
                if (e(r).length) {
                    i = this.getCoords(e(r));
                    if (t >= i.top - this.options.threshold) {
                        s = r
                    }
                }
            }
            return s || this.$links[0].hash
        }
    };
    e.fn.singlePageNav = function(e) {
        return this.each(function() {
            var t = Object.create(i);
            t.init(e, this)
        })
    };
    e.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: "current",
        easing: "swing",
        updateHash: false,
        filter: "",
        onComplete: false,
        beforeStart: false
    }
})(jQuery, window, document)
