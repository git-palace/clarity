! function(t) {
    function e(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var i = {};
    e.m = t, e.c = i, e.i = function(t) {
        return t
    }, e.d = function(t, i, n) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 85)
}([function(t, e, i) {
    "use strict";
    var n, o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    /*!
     * Light.js v0.1.107
     * (c) 2016 Nicolas Riciotti
     * Released under the MIT License.
     */
    ! function(s, a) {
        "object" === r(e) && void 0 !== t ? t.exports = a() : (n = a, void 0 !== (o = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = o))
    }(0, function() {
        function t(t) {
            return t.replace(/-([a-zA-Z0-9])/g, function(t) {
                return t[1].toUpperCase()
            })
        }

        function e(e) {
            var i = t(e);
            return i.charAt(0).toUpperCase() + i.slice(1)
        }

        function i(t) {
            return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }

        function n(t) {
            return "[object Array]" === Object.prototype.toString.call(t) || "[object NodeList]" === Object.prototype.toString.call(t)
        }

        function o(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function s() {
            var t, e, i = arguments[0] || {},
                n = 1,
                o = arguments.length;
            for ("object" !== (void 0 === i ? "undefined" : r(i)) && "function" != typeof i && (i = {}); n < o; n++)
                if (null != (t = arguments[n]))
                    for (e in t) void 0 !== t[e] && (i[e] = t[e]);
            return i
        }

        function a(t) {
            return n(t) ? t.slice() : s({}, t)
        }

        function l(t) {
            var e;
            if (n(t)) {
                e = [];
                for (var i = 0, o = t.length; i < o; i++) e.push("object" === r(t[i]) && null !== t[i] ? l(t[i]) : t[i])
            } else {
                e = {};
                for (var s in t) e[s] = "object" === r(t[s]) && null !== t[s] ? l(t[s]) : t[s]
            }
            return e
        }

        function u() {}

        function c(t, e) {
            e = h(e);
            for (var i in e) {
                var o = support.getPrefixed(i);
                if (n(t) || t.length)
                    for (var r = 0, s = t.length; r < s; r++) t[r].style[o] = e[i];
                else t.style[o] = e[i]
            }
        }

        function h(t) {
            var e = "";
            for (var i in t) "translateX" == i && (e += "translateX(" + t.translateX + ") ", delete t.translateX), "translateY" == i && (e += "translateY(" + t.translateY + ") ", delete t.translateY), "translate" == i && (e += "translate(" + t.translateY + ") ", delete t.translate), "scale" == i && (e += "scale(" + t.scale + ") ", delete t.scale), "scaleX" == i && (e += "scaleX(" + t.scaleX + ") ", delete t.scaleX), "scaleY" == i && (e += "scaleY(" + t.scaleY + ") ", delete t.scaleY), "rotate" == i && (e += "rotate(" + t.rotate + ") ", delete t.rotate), "force3d" == i && (e += " " + support.translateZ);
            return t.transform = e, t
        }

        function p(t, e) {
            var i;
            return t.currentStyle ? i = t.currentStyle[e] : window.getComputedStyle && (i = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)), i
        }

        function d(t, e) {
            for (var i = (void 0 !== e || document, t.offsetTop), n = t.offsetLeft; t && t.parentNode && t.parentNode != e;) "static" != p(t.parentNode, "position") && (i += t.parentNode.offsetTop, n += t.parentNode.offsetLeft), t = t.parentNode;
            return {
                top: i,
                left: n
            }
        }

        function f(t, e) {
            console.log("%c[notify]: " + t, "color:#00aeff", e)
        }

        function m(t, e) {
            console.log("%c[warn]: " + t, "color:#ff0084", e)
        }

        function v(t, e, i) {
            void 0 === q[t] && (q[t] = i ? document.registerElement(t, {
                extends: i,
                prototype: Object.create(e.prototype)
            }) : document.registerElement(t, e))
        }

        function g() {
            for (var t = 0, e = W.length; t < e; t++) W[t]._resolveParentBatch();
            requestAnimationFrame(g)
        }

        function b(t) {
            switch (t) {
                case "&":
                    return "&amp;";
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case " ":
                    return "&nbsp;"
            }
        }

        function y(t) {
            return t.replace(ht, b)
        }

        function w() {
            clearTimeout(xt), H.fire("resize"), xt = setTimeout(function() {
                H.fire("resizeend")
            }, 300)
        }

        function x() {
            requestAnimationFrame(x), H.fire("requestAnimationFrame")
        }
        var P = {};
        P.classCallCheck = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }, P.inherits = function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : r(e)));
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }, P.possibleConstructorReturn = function(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== (void 0 === e ? "undefined" : r(e)) && "function" != typeof e ? t : e
            },
            /*!
              Copyright (C) 2014-2015 by WebReflection
               Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
               The above copyright notice and this permission notice shall be included in
              all copies or substantial portions of the Software.
               THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
              THE SOFTWARE.
              */
            function(t, e, i, n) {
                function o(t, e) {
                    for (var i = 0, n = t.length; i < n; i++) v(t[i], e)
                }

                function r(t) {
                    for (var e, i = 0, n = t.length; i < n; i++) e = t[i], P(e, N[a(e)])
                }

                function s(t) {
                    return function(e) {
                        et(e) && (v(e, t), o(e.querySelectorAll(F), t))
                    }
                }

                function a(t) {
                    var e = t.getAttribute("is"),
                        i = t.nodeName.toUpperCase(),
                        n = H.call(I, e ? j + e.toUpperCase() : R + i);
                    return e && -1 < n && !l(i, e) ? -1 : n
                }

                function l(t, e) {
                    return -1 < F.indexOf(t + '[is="' + e + '"]')
                }

                function u(t) {
                    var e = t.currentTarget,
                        i = t.attrChange,
                        n = t.attrName,
                        o = t.target;
                    ft && (!o || o === e) && e.attributeChangedCallback && "style" !== n & t.prevValue !== t.newValue && e.attributeChangedCallback(n, i === t[C] ? null : t.prevValue, i === t[S] ? null : t.newValue)
                }

                function c(t) {
                    var e = s(t);
                    return function(t) {
                        g.push(e, t.target)
                    }
                }

                function h(t) {
                    dt && (dt = !1, t.currentTarget.removeEventListener(O, h)), o((t.target || e).querySelectorAll(F), t.detail === E ? E : k), tt && f()
                }

                function p(t, e) {
                    var i = this;
                    rt.call(i, t, e), b.call(i, {
                        target: i
                    })
                }

                function d(t, e) {
                    Z(t, e), w ? w.observe(t, lt) : (pt && (t.setAttribute = p, t[M] = _(t), t.addEventListener(A, b)), t.addEventListener(T, u)), t.createdCallback && ft && t.createdCallback()
                }

                function f() {
                    for (var t, e = 0, i = it.length; e < i; e++) t = it[e], U.contains(t) || (i--, it.splice(e--, 1), v(t, E))
                }

                function m(t) {
                    throw new Error("A " + t + " type is already registered")
                }

                function v(t, e) {
                    var i, n = a(t); - 1 < n && (x(t, N[n]), n = 0, e !== k || t["_is" + k] ? e !== E || t["_is" + E] || (t["_is" + k] = !1, t["_is" + E] = !0, n = 1) : (t["_is" + E] = !1, t["_is" + k] = !0, n = 1, tt && H.call(it, t) < 0 && it.push(t)), n && (i = t[e + "Callback"]) && i.call(t))
                }
                if (!("registerElement" in e)) {
                    var g, b, y, _, w, x, P, M = "__registerElement" + (1e5 * Math.random() >> 0),
                        k = "attached",
                        E = "detached",
                        C = "ADDITION",
                        S = "REMOVAL",
                        T = "DOMAttrModified",
                        O = "DOMContentLoaded",
                        A = "DOMSubtreeModified",
                        R = "<",
                        j = "=",
                        L = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
                        D = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
                        I = [],
                        N = [],
                        F = "",
                        U = e.documentElement,
                        H = I.indexOf || function(t) {
                            for (var e = this.length; e-- && this[e] !== t;);
                            return e
                        },
                        q = i.prototype,
                        z = q.hasOwnProperty,
                        B = q.isPrototypeOf,
                        V = i.defineProperty,
                        W = i.getOwnPropertyDescriptor,
                        $ = i.getOwnPropertyNames,
                        X = i.getPrototypeOf,
                        Y = i.setPrototypeOf,
                        G = !!i.__proto__,
                        K = i.create || function t(e) {
                            return e ? (t.prototype = e, new t) : this
                        },
                        Z = Y || (G ? function(t, e) {
                            return t.__proto__ = e, t
                        } : $ && W ? function() {
                            function t(t, e) {
                                for (var i, n = $(e), o = 0, r = n.length; o < r; o++) i = n[o], z.call(t, i) || V(t, i, W(e, i))
                            }
                            return function(e, i) {
                                do {
                                    t(e, i)
                                } while ((i = X(i)) && !B.call(i, e));
                                return e
                            }
                        }() : function(t, e) {
                            for (var i in e) t[i] = e[i];
                            return t
                        }),
                        Q = t.MutationObserver || t.WebKitMutationObserver,
                        J = (t.HTMLElement || t.Element || t.Node).prototype,
                        tt = !B.call(J, U),
                        et = tt ? function(t) {
                            return 1 === t.nodeType
                        } : function(t) {
                            return B.call(J, t)
                        },
                        it = tt && [],
                        nt = J.cloneNode,
                        ot = e.importNode,
                        rt = J.setAttribute,
                        st = J.removeAttribute,
                        at = e.createElement,
                        lt = Q && {
                            attributes: !0,
                            characterData: !0,
                            attributeOldValue: !0
                        },
                        ut = Q || function(t) {
                            pt = !1, U.removeEventListener(T, ut)
                        },
                        ct = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                            setTimeout(t, 10)
                        },
                        ht = !1,
                        pt = !0,
                        dt = !0,
                        ft = !0;
                    Y || G ? (x = function(t, e) {
                        B.call(e, t) || d(t, e)
                    }, P = d) : (x = function(t, e) {
                        t[M] || (t[M] = i(!0), d(t, e))
                    }, P = x), tt ? (pt = !1, function() {
                        var t = W(J, "addEventListener"),
                            e = t.value,
                            i = function(t) {
                                var e = new CustomEvent(T, {
                                    bubbles: !0
                                });
                                e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[S] = e.attrChange = 2, st.call(this, t), this.dispatchEvent(e)
                            },
                            n = function(t, e) {
                                var i = this.hasAttribute(t),
                                    n = i && this.getAttribute(t),
                                    o = new CustomEvent(T, {
                                        bubbles: !0
                                    });
                                rt.call(this, t, e), o.attrName = t, o.prevValue = i ? n : null, o.newValue = e, i ? o.MODIFICATION = o.attrChange = 1 : o[C] = o.attrChange = 0, this.dispatchEvent(o)
                            },
                            o = function(t) {
                                var e, i = t.currentTarget,
                                    n = i[M],
                                    o = t.propertyName;
                                n.hasOwnProperty(o) && (n = n[o], e = new CustomEvent(T, {
                                    bubbles: !0
                                }), e.attrName = n.name, e.prevValue = n.value || null, e.newValue = n.value = i[o] || null, null == e.prevValue ? e[C] = e.attrChange = 0 : e.MODIFICATION = e.attrChange = 1, i.dispatchEvent(e))
                            };
                        t.value = function(t, r, s) {
                            t === T && this.attributeChangedCallback && this.setAttribute !== n && (this[M] = {
                                className: {
                                    name: "class",
                                    value: this.className
                                }
                            }, this.setAttribute = n, this.removeAttribute = i, e.call(this, "propertychange", o)), e.call(this, t, r, s)
                        }, V(J, "addEventListener", t)
                    }()) : Q || (U.addEventListener(T, ut), U.setAttribute(M, 1), U.removeAttribute(M), pt && (b = function(t) {
                        var e, i, n, o = this;
                        if (o === t.target) {
                            e = o[M], o[M] = i = _(o);
                            for (n in i) {
                                if (!(n in e)) return y(0, o, n, e[n], i[n], C);
                                if (i[n] !== e[n]) return y(1, o, n, e[n], i[n], "MODIFICATION")
                            }
                            for (n in e)
                                if (!(n in i)) return y(2, o, n, e[n], i[n], S)
                        }
                    }, y = function(t, e, i, n, o, r) {
                        var s = {
                            attrChange: t,
                            currentTarget: e,
                            attrName: i,
                            prevValue: n,
                            newValue: o
                        };
                        s[r] = t, u(s)
                    }, _ = function(t) {
                        for (var e, i, n = {}, o = t.attributes, r = 0, s = o.length; r < s; r++) e = o[r], "setAttribute" !== (i = e.name) && (n[i] = e.value);
                        return n
                    })), e.registerElement = function(t, i) {
                        if (n = t.toUpperCase(), ht || (ht = !0, Q ? (w = function(t, e) {
                                function i(t, e) {
                                    for (var i = 0, n = t.length; i < n; e(t[i++]));
                                }
                                return new Q(function(n) {
                                    for (var o, r, s, a = 0, l = n.length; a < l; a++) o = n[a], "childList" === o.type ? (i(o.addedNodes, t), i(o.removedNodes, e)) : (r = o.target, ft && r.attributeChangedCallback && "style" !== o.attributeName && (s = r.getAttribute(o.attributeName)) !== o.oldValue && r.attributeChangedCallback(o.attributeName, o.oldValue, s))
                                })
                            }(s(k), s(E)), w.observe(e, {
                                childList: !0,
                                subtree: !0
                            })) : (g = [], ct(function t() {
                                for (; g.length;) g.shift().call(null, g.shift());
                                ct(t)
                            }), e.addEventListener("DOMNodeInserted", c(k)), e.addEventListener("DOMNodeRemoved", c(E))), e.addEventListener(O, h), e.addEventListener("readystatechange", h), e.importNode = function(t, i) {
                                var n = ot.call(e, t, !!i);
                                if (n.attributes) {
                                    var o = a(n); - 1 < o && P(n, N[o]), i && r(n.querySelectorAll(F))
                                }
                                return n
                            }, e.createElement = function(t, i) {
                                var n = at.apply(e, arguments),
                                    o = "" + t,
                                    r = H.call(I, (i ? j : R) + (i || o).toUpperCase()),
                                    s = -1 < r;
                                return i && (n.setAttribute("is", i = i.toLowerCase()), s && (s = l(o.toUpperCase(), i))), ft = !e.createElement.innerHTMLHelper, s && P(n, N[r]), n
                            }, J.cloneNode = function(t) {
                                var e = nt.call(this, !!t),
                                    i = a(e);
                                return -1 < i && P(e, N[i]), t && r(e.querySelectorAll(F)), e
                            }), -2 < H.call(I, j + n) + H.call(I, R + n) && m(t), !L.test(n) || -1 < H.call(D, n)) throw new Error("The type " + t + " is invalid");
                        var n, u, p = function() {
                                return f ? e.createElement(v, n) : e.createElement(v)
                            },
                            d = i || q,
                            f = z.call(d, "extends"),
                            v = f ? i.extends.toUpperCase() : n;
                        return f && -1 < H.call(I, R + v) && m(v), u = I.push((f ? j : R) + n) - 1, F = F.concat(F.length ? "," : "", f ? v + '[is="' + t.toLowerCase() + '"]' : v), p.prototype = N[u] = z.call(d, "prototype") ? d.prototype : K(J), o(e.querySelectorAll(F), k), p
                    }
                }
            }(window, document, Object), Array.prototype.includes || (Array.prototype.includes = function(t) {
                var e = Object(this),
                    i = parseInt(e.length) || 0;
                if (0 === i) return !1;
                var n, o = parseInt(arguments[1]) || 0;
                o >= 0 ? n = o : (n = i + o) < 0 && (n = 0);
                for (var r; n < i;) {
                    if (r = e[n], t === r || t !== t && r !== r) return !0;
                    n++
                }
                return !1
            }),
            function() {
                for (var t = 0, e = 0, i = ["ms", "moz", "webkit", "o"]; e < i.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[i[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[e] + "CancelAnimationFrame"] || window[i[e] + "CancelRequestAnimationFrame"];
                window.msRequestAnimationFrame && (window.requestAnimationFrame = function(t) {
                    return window.msRequestAnimationFrame(function() {
                        t(+new Date)
                    })
                }), window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                    var n = Date.now(),
                        o = window.setTimeout(function() {
                            e(n + 1e3 / 60)
                        }, 1e3 / 60);
                    return t = n + 1e3 / 60, o
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }();
        var M = {},
            k = {},
            E = null,
            C = document.createElement("div"),
            S = C.style,
            T = " Webkit WebKit Moz O Ms".split(" "),
            O = " -webkit- -webkit- -moz- -o- -ms-".split(" "),
            A = T.length,
            R = !1,
            j = function(t, e) {
                if (R & t in k) return k[t];
                var i, n = void 0 !== e && e,
                    o = A;
                for (i = t.replace(/(^[a-z])/g, function(t) {
                        return t.toUpperCase()
                    }).replace(/\-([a-z])/g, function(t, e) {
                        return e.toUpperCase()
                    }); o--;) {
                    if (t in S) return t;
                    if (T[o] + i in S) return n ? O[o] + t.toLowerCase() : T[o] + i;
                    if (void 0 !== window[T[o].toLowerCase() + i]) return T[o].toLowerCase() + i;
                    if (void 0 !== window[T[o] + i]) return T[o] + i
                }
                return !1
            };
        E = {
            prefix: function() {
                var t = j("transform");
                return t ? t.replace("Transform", "") : ""
            },
            cssprefix: function() {
                var t = j("transform", !0);
                return t ? t.replace("transform", "") : ""
            },
            transform: function() {
                return j("transform")
            },
            transformCss: function() {
                return j("transform", !0)
            },
            transform3d: function() {
                return "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || !!j("perspective")
            },
            translateZ: function() {
                return this.transform3d() ? "translateZ(0)" : ""
            },
            transformOrigin: function() {
                return j("transformOrigin")
            },
            backfaceVisibility: function() {
                return j("backfaceVisibility")
            },
            perspective: function() {
                return j("perspective")
            },
            perspectiveOrigin: function() {
                return j("perspectiveOrigin")
            },
            transition: function() {
                return j("transition")
            },
            transitionProperty: function() {
                return j("transitionProperty")
            },
            transitionDuration: function() {
                return j("transitionDuration")
            },
            transitionTimingFunction: function() {
                return j("transitionTimingFunction")
            },
            transitionDelay: function() {
                return j("transitionDelay")
            },
            transitionEvent: function() {
                return j("transitionEvent")
            },
            transitionEventPrefix: function() {
                return j("transitionEvent") ? j("transitionEvent").replace("TransitionEvent", "").toLowerCase() : ""
            },
            transitionEnd: function() {
                return "" !== this.transitionEventPrefix() ? this.transitionEventPrefix() + "TransitionEnd" : "transitionend"
            },
            touch: function() {
                return "ontouchstart" in window || navigator.msMaxTouchPoints > 0
            },
            msPointer: function() {
                return !!window.navigator.msPointerEnabled
            },
            pointer: function() {
                return !!window.navigator.pointerEnabled
            },
            ipad: function() {
                return !!navigator.userAgent.match(/.*(iPad).*/)
            },
            iphone: function() {
                return !!navigator.userAgent.match(/.*(iPhone).*/)
            },
            android: function() {
                return !!navigator.userAgent.match(/.*(Android).*/)
            },
            firefox: function() {
                return !!navigator.userAgent.match(/.*((f|F)irefox).*/)
            },
            ltIE9: function() {
                return window.attachEvent && !window.addEventListener
            },
            pointerdown: function() {
                return this.touch() ? "touchstart" : this.pointer() ? "pointerdown" : this.msPointer() ? "MSPointerDown" : "mousedown"
            },
            pointerup: function() {
                return this.touch() ? "touchend" : this.pointer() ? "pointerup" : this.msPointer() ? "MSPointerUp" : "mouseup"
            },
            pointermove: function() {
                return this.touch() ? "touchmove" : this.pointer() ? "pointermove" : this.msPointer() ? "MSPointerMove" : "mousemove"
            },
            pointerenter: function() {
                return this.touch() ? "touchstart" : this.pointer() ? "pointerenter" : this.msPointer() ? "MSPointerEnter" : "mouseenter"
            },
            pointerleave: function() {
                return this.touch() ? "touchend" : this.pointer() ? "pointerleave" : this.msPointer() ? "MSPointerLeave" : "mouseleave"
            },
            pointerover: function() {
                return this.touch() ? "touchstart" : this.pointer() ? "pointerover" : this.msPointer() ? "MSPointerOver" : "mouseover"
            },
            pointerout: function() {
                return this.touch() ? "touchend" : this.pointer() ? "pointerout" : this.msPointer() ? "MSPointerOut" : "mouseout"
            },
            multipointerdown: function() {
                return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mousedown", "touchstart"] : ["touchstart"] : this.pointer() ? ["pointerdown"] : this.msPointer() ? ["MSPointerDown"] : ["mousedown"]
            },
            multipointerup: function() {
                return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseup", "touchend"] : ["touchend"] : this.pointer() ? ["pointerup"] : this.msPointer() ? ["MSPointerUp"] : ["mouseup"]
            },
            multipointermove: function() {
                return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mousemove", "touchmove"] : ["touchmove"] : this.pointer() ? ["pointermove"] : this.msPointer() ? ["MSPointerMove"] : ["mousemove"]
            },
            multipointerenter: function() {
                return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseenter", "touchstart"] : ["touchstart"] : this.pointer() ? ["pointerenter"] : this.msPointer() ? ["MSPointerEnter"] : ["mouseenter"]
            },
            multipointerleave: function() {
                return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseleave", "touchend"] : ["touchend"] : this.pointer() ? ["pointerleave"] : this.msPointer() ? ["MSPointerLeave"] : ["mouseleave"]
            },
            multipointerover: function() {
                return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseover", "touchstart"] : ["touchstart"] : this.pointer() ? ["pointerover"] : this.msPointer() ? ["MSPointerOver"] : ["mouseover"]
            },
            multipointerout: function() {
                return this.touch() ? "onmousedown" in window && !this.ipad() && !this.iphone() ? ["mouseout", "touchend"] : ["touchend"] : this.pointer() ? ["pointerout"] : this.msPointer() ? ["MSPointerOut"] : ["mouseout"]
            },
            smallscreen: function() {
                return window.innerWidth < 700
            }
        };
        var L;
        for (var D in E) E.hasOwnProperty(D) && (L = D, k[L] = E[D]());
        k.test = function(t) {
            return !!j(t)
        }, k.getPrefixed = function(t) {
            return j(t)
        }, k.getCssPrefixed = function(t) {
            return j(t, !0)
        };
        var I = ["moz", "webkit", "", "ms", "o"],
            N = I.length;
        if (void 0 !== document.cancelFullscreen) k.requestFullscreen = "requestFullscreen", k.cancelFullScreen = "exitFullscreen", k.fullscreenchange = "fullscreenchange";
        else
            for (; N--;) "moz" == I[N] && !document.mozFullScreenEnabled || void 0 === document[I[N] + "CancelFullScreen"] || (k.requestFullscreen = I[N] + "RequestFullScreen", k.cancelFullScreen = I[N] + "CancelFullScreen", k.fullScreenChange = I[N] + "fullscreenchange", k.isFullScreen = "webkit" == I[N] ? I[N] + "IsFullScreen" : I[N] + "FullScreen");
        R = !0;
        var F = {
                camelCalise: t,
                pascalise: e,
                hyphenise: i,
                isArray: n,
                isObject: o,
                clone: a,
                cloneDeep: l,
                extend: s,
                nob: M,
                nop: u,
                style: c,
                position: d,
                notify: f,
                warn: m
            },
            U = n,
            H = {
                normalize: function(t) {
                    return t.replace(":", "")
                },
                listeners: [],
                on: function(t, e, i) {
                    if (void 0 === e) F.warn("cannot find callback for " + t + " in context:" + i);
                    else {
                        var t = this.normalize(t);
                        this.listeners.push({
                            name: t,
                            closure: e,
                            target: i
                        })
                    }
                },
                off: function(t, e, i) {
                    for (var n, o = 0, r = this.listeners.length, t = this.normalize(t); o < r; o++) n = this.listeners[o], n.name !== t || n.closure !== e || i && n.target !== i || (this.listeners.splice(o, 1), o--, r--)
                },
                fire: function(t, e) {
                    for (var i, n = 0, o = this.listeners.length, t = this.normalize(t); n < o; n++)(i = this.listeners[n]) && i.name === t && (void 0 !== e ? i.closure.apply(i.target, e) : i.closure.call(i.target))
                },
                handlers: {},
                handlersQueue: {},
                setHandler: function(t, e) {
                    if (t = this.normalize(t), this.handlers[t] = e, void 0 !== this.handlersQueue[t]) {
                        for (var i = 0; i < this.handlersQueue[t].length; i++) this.request(t, this.handlersQueue[t][i]);
                        delete this.handlersQueue[t]
                    }
                },
                request: function(t, e) {
                    if (t = this.normalize(t), void 0 !== this.handlers[t]) return void 0 !== e ? this.handlers[t].apply(this, e) : this.handlers[t]();
                    this.handlersQueue[t] = this.handlersQueue[t] || [], this.handlersQueue[t].push(e)
                },
                subscribe: function(t, e, i) {
                    _.warn("EventDispatcher.on is depreciated and will be removed. Please use EventDispatcher.on instead"), this.subscribe(t, e, i)
                },
                unsubscribe: function(t, e) {
                    _.warn("EventDispatcher.off is depreciated and will be removed. Please use EventDispatcher.off instead"), this.off(t, e, target)
                },
                publish: function(t, e) {
                    _.warn("EventDispatcher.trigger is depreciated and will be removed. Please use EventDispatcher.trigger) instead"), this.fire(t, e)
                },
                trigger: function(t, e) {
                    _.warn("'EventDispatcher.trigger' is depreciated and will be removed. Please use 'EventDispatcher.fire' instead"), this.fire(t, e)
                }
            },
            q = {},
            z = {
                on: function(t, e, i) {
                    this.callbackStack = this.callbackStack || {}, this.callbackStack[t] = this.callbackStack[t] || {
                        evtName: t,
                        evtCbArr: []
                    }, this.callbackStack[t].evtCbArr.push({
                        fn: e,
                        ctx: void 0 !== i ? i : this
                    })
                },
                off: function(t, e) {
                    if (void 0 !== this.callbackStack && void 0 !== this.callbackStack[t])
                        for (var i = 0, n = this.callbackStack[t].evtCbArr.length; i < n; i++) this.callbackStack[t].evtCbArr[i].fn == e && (this.callbackStack[t].evtCbArr.splice(i, 1), i--, n--)
                },
                trigger: function(t) {
                    F.warn("event.trigger is deprecated, please use .fire() from now"), this.fire(t)
                },
                fire: function(t) {
                    if (this.callbackStack && void 0 !== this.callbackStack[t]) {
                        for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        for (var o = 0, r = this.callbackStack[t].evtCbArr.length; o < r; o++) void 0 !== this.callbackStack[t].evtCbArr[o] && this.callbackStack[t].evtCbArr[o].fn.apply(this.callbackStack[t].evtCbArr[o].ctx, i)
                    }
                }
            },
            B = Array.prototype,
            V = Object.create(B),
            W = (Object.getOwnPropertyNames(V), []);
        requestAnimationFrame(g), H.on("force-resolve-binding", g), ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
            var e = B[t];
            Object.defineProperty(B, t, {
                enumerable: !0,
                writable: !0,
                configurable: !0,
                value: function() {
                    for (var i = arguments.length, n = new Array(i); i--;) n[i] = arguments[i];
                    this.__ob__ && this.__ob__.disable();
                    var o = e.apply(this, n);
                    if (this.__ob__) {
                        this.__ob__.enable();
                        var r = void 0;
                        switch (t) {
                            case "push":
                                if (n) {
                                    for (var s = this.length - n.length, a = 0; a < n.length; a++) this.__ob__.observe(this, s + a, n[a]), this.__ob__.defineReactive(this, s + a, n[a]);
                                    r = {
                                        index: s,
                                        numAdded: n.length,
                                        numRemoved: 0
                                    }
                                }
                                break;
                            case "unshift":
                                n && (this.__ob__.observeArrayItems(n), r = {
                                    index: 0,
                                    numAdded: n.length,
                                    numRemoved: 0
                                });
                                break;
                            case "splice":
                                this.__ob__.observeArrayItems(n.slice(2)), r = {
                                    index: Number(n[0]),
                                    numAdded: n.slice(2).length,
                                    numRemoved: Number(n[1])
                                };
                                break;
                            case "pop":
                                this.length > 0 && (r = {
                                    index: this.length + n.length,
                                    numAdded: 0,
                                    numRemoved: 1
                                })
                        }
                        this.__ob__.notify("change:arrayMethod", r, !0)
                    }
                    return o
                }
            })
        });
        var $ = function() {
            function t(e, i, n) {
                P.classCallCheck(this, t), W.push(this), this.obj = n, this.enabled = !0, Object.defineProperty(this.obj, "__ob__", {
                    value: this,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }), this.parents = [], this.keysOnParent = [], void 0 !== e && this.parents.push(e), void 0 !== i && this.keysOnParent.push(i), U(this.obj) ? this.observeArrayItems(this.obj) : this.observeObjectKeys(this.obj)
            }
            return t.prototype.disable = function() {
                this.enabled = !1
            }, t.prototype.enable = function() {
                this.enabled = !0
            }, t.prototype.observeArrayItems = function(t) {
                for (var e = t.length; e--;) this.observe(this.obj, e, t[e]), this.defineReactive(this.obj, e, t[e])
            }, t.prototype.observeObjectKeys = function(t) {
                for (var e = Object.keys(t), i = e.length; i--;) this.defineReactive(this.obj, e[i], t[e[i]])
            }, t.prototype.defineReactive = function(t, e, i) {
                var n = this,
                    o = Object.getOwnPropertyDescriptor(t, e);
                if (!o || !1 !== o.configurable) {
                    o && o.get, o && o.set;
                    var s = (this.observe(t, e, i), "change:" + e);
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            return i
                        },
                        set: function(o) {
                            o !== i && (void 0 === o || null === o || "object" !== (void 0 === o ? "undefined" : r(o)) || void 0 === o.__ob__ || o.__ob__.parents.includes(t) || (o.__ob__.parents.push(t), o.__ob__.keysOnParent.push(e)), i = o, n.observe(t, e, o), n.enabled && n.notify(s, null, !0))
                        }
                    })
                }
            }, t.prototype.notify = function(t, e, i) {
                if (this._notifyBatchList = this._notifyBatchList || {}, void 0 !== this.callbackStack && void 0 !== this.callbackStack[t])
                    if (void 0 === e || "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && (0 !== e.numAdded || 0 !== e.numRemoved)) this.fire(t, e);
                    else {
                        if (void 0 !== this._notifyBatchList[t] && 0 !== this._notifyBatchList[t]) return;
                        this._notifyBatchList[t] = 1
                    }
                if (!this._dirty || "object" === (void 0 === e ? "undefined" : r(e)) && null !== e && (0 !== e.numAdded || 0 !== e.numRemoved)) {
                    this._dirty = !0;
                    for (var n = 0, o = this.parents.length; n < o; n++) void 0 !== this.parents[n].__ob__ && "props" !== this.keysOnParent[n] && this.parents[n].__ob__.notify((i ? "change:" : "subChange:") + this.keysOnParent[n], e)
                }
            }, t.prototype._resolveParentBatch = function() {
                if (void 0 !== this._notifyBatchList) {
                    for (var t = Object.keys(this._notifyBatchList), e = t.length; e--;) {
                        if (0 !== this._notifyBatchList[t[e]] && void 0 !== this.callbackStack && void 0 !== this.callbackStack[t[e]])
                            for (var i = 0, n = this.callbackStack[t[e]].evtCbArr.length; i < n; i++) void 0 !== this.callbackStack[t[e]].evtCbArr[i] && this.callbackStack[t[e]].evtCbArr[i].fn.call(this.callbackStack[t[e]].evtCbArr[i].ctx);
                        this._notifyBatchList[t[e]] = 0
                    }
                    this._dirty = !1
                }
            }, t.prototype.observe = function(e, i, n) {
                if (void 0 !== n && null !== n && "object" === (void 0 === n ? "undefined" : r(n)) && void 0 === n.__ob__) return "object" !== (void 0 === n ? "undefined" : r(n)) || Object.isFrozen(n) ? void 0 : new t(e, i, n)
            }, t
        }();
        for (var X in z) $.prototype[X] = z[X];
        var Y, G = 0,
            K = {
                _isInTemplate: function() {
                    for (var t = !1, e = this; e.parentNode && e.parentNode !== document.body;) {
                        if ("TEMPLATE" === e.parentNode.tagName || e.parentNode._isLightDom) {
                            t = !0;
                            break
                        }
                        e = e.parentNode
                    }
                    return t
                },
                createdCallback: function() {
                    this._isInTemplate() || (this._isCreated = !0, this._id = 0, this.visible = !0, this.context = {}, this.props = {}, this._savePropChange = {}, this._delegateEvents = {}, void 0 === this._defaultProps && (this._defaultProps = this.defaultProps), this._getPropsFromDefaultProps(), this._events = this.events, this._template = this.template, this._styles = void 0 !== this.styles ? this.styles.replace(/\:host/g, this.tagName.toLowerCase()) : null, this._observer = new $(this, "props", this.props), this._defaultPropsChangeCallbacks = {}, this.bindMethods(["_onDelegateEvent", "_resize", "_resizeEnd"]), void 0 !== this.update && (this._update = this._update.bind(this)), this.created && this.created())
                },
                attachedCallback: function() {
                    var t = this;
                    if (!this._isInTemplate() && this._isCreated) {
                        this._deserializeAttributes(), this._retrieveLightDOM(), this._retrieveTemplate(), this._generateCompositedDOM();
                        for (var e in this._defaultProps) ! function(e) {
                            t._defaultProps[e] && t._defaultProps[e].change && (void 0 === t[t._defaultProps[e].change] ? F.warn("Cannot bind change on undefined method:" + t._defaultProps[e].change) : (t._defaultPropsChangeCallbacks[e] = function(i) {
                                if (t._isAttached) return !1 === t.visible ? void(t._savePropChange[e] = i ? "object" == r(t._savePropChange[e]) ? t._savePropChange[e].push(i) : [i] : 1) : void t[t._defaultProps[e].change](i)
                            }, t.props.__ob__.on("change:" + e, t._defaultPropsChangeCallbacks[e])))
                        }(e);
                        this.attached && this.attached(), this.fire("attached", this.index), this._isAttached = !0, (this._template && this._shadowDOM && this._isShadowDOMReady || !this._template) && "TEMPLATE" !== this.tagName && this._ready()
                    }
                },
                _getPropsFromDefaultProps: function() {
                    for (var t in this._defaultProps) F.isObject(this._defaultProps[t]) && void 0 !== this._defaultProps[t].value ? this.props[t] = this._defaultProps[t].value : this.props[t] = this._defaultProps[t]
                },
                _safeParseJSON: function(t, e) {
                    try {
                        return JSON.parse(t)
                    } catch (i) {
                        return void F.warn("invalid value '" + t + "' for the '" + e + "' property; it must be Object type")
                    }
                },
                setProp: function(t, e) {
                    if (void 0 !== this._defaultProps && void 0 !== this._defaultProps[t] && void 0 !== this.props && this.props[t] !== e && ("string" != typeof e || !/\{\{[^{}]*\}\}/g.test(e))) {
                        if ("object" !== r(this._defaultProps[t]) || null === this._defaultProps[t] || "object" === r(this._defaultProps[t]) && void 0 === this._defaultProps[t].type) return void(this.props[t] = e);
                        if (this._defaultProps[t] && this._defaultProps[t].type) {
                            if (("array" == this._defaultProps[t].type || "arr" == this._defaultProps[t].type || "json" == this._defaultProps[t].type || "object" == this._defaultProps[t].type || "obj" == this._defaultProps[t].type) && e)
                                if ("string" == typeof e && (e = this._safeParseJSON(e, t)), "object" !== r(this.props[t]) || null === this.props[t]) this.props[t] = "object" === (void 0 === e ? "undefined" : r(e)) && null !== e ? e : JSON.parse(e);
                                else if (this.props[t] !== e)
                                if (this.props[t] !== e && e.length && this.props[t].length === e.length && !e.__ob__)
                                    for (var i = 0; i < e.length; i++) this.props[t][i] = e[i];
                                else this.props[t] = e;
                                "string" !== this._defaultProps[t].type && "str" !== this._defaultProps[t].type || (this.props[t] = "string" == typeof e ? e : JSON.stringify(e)), "bool" !== this._defaultProps[t].type && "boolean" !== this._defaultProps[t].type || (this.props[t] = !("false" === e || "" === e || !e)), "float" !== this._defaultProps[t].type && "f" !== this._defaultProps[t].type || (this.props[t] = "number" != typeof e ? parseFloat(e, 10) : e), "int" !== this._defaultProps[t].type && "i" !== this._defaultProps[t].type || (this.props[t] = "number" != typeof e ? parseInt(e, 10) : e >> 0), "func" !== this._defaultProps[t].type && "fn" !== this._defaultProps[t].type && "function" !== this._defaultProps[t].type || "function" == typeof e && (!0, this.props[t] = e)
                        }!0 === this._defaultProps[t].reflect && this.setAttribute(F.hyphenise(t), e)
                    }
                },
                _deserializeAttributes: function() {
                    for (var t = 0, e = this.attributes.length; t < e; t++) {
                        var i = F.camelCalise(this.attributes[t].nodeName.replace(/^data\-/, ""));
                        "" !== this.attributes[t].nodeValue && this.setProp(i, this.attributes[t].nodeValue)
                    }
                },
                _retrieveLightDOM: function() {
                    var t = this;
                    if (this._template && "TEMPLATE" !== this.tagName) {
                        for (this._lightDOMUUID = G, this._lightDOM = document.createDocumentFragment(), this._lightDOM._isLightDom = !0; this.hasChildNodes();) this._lightDOM.appendChild(this.childNodes[0]);
                        for (var e = 0, i = this._lightDOM.childNodes.length; e < i; e++) this._eachNodes(this._lightDOM.childNodes[e], function(e) {
                            e.attributes && e.setAttribute("light-dom-id", t._lightDOMUUID)
                        });
                        G++
                    }
                },
                _retrieveTemplate: function() {
                    if ("TEMPLATE" !== this.tagName && this._template) {
                        if (this._styles && (this._stylesTag = document.createElement("style"), this._stylesTag.innerHTML = this._styles, this.appendChild(this._stylesTag)), this._shadowDOM = document.createElement("template", "light-core-template"), this._shadowDOM.setAttribute("shadow-dom", ""), this._shadowDOM.setAttribute("parent-tag", this.tagName.toLowerCase()), this._shadowDOM._scope = this.props, this._shadowDOM._componentContext = this, this._shadowDOM.context = this.context, this._shadowDOM._$slot = this._lightDOM, this._shadowDOM._slotuuid = this._lightDOMUUID, "string" == typeof this._template) {
                            var t = document.createElement("div");
                            for (this._shadowDOM.content.appendChild(t), t.innerHTML = this._template; t.hasChildNodes();) this._shadowDOM.content.appendChild(t.childNodes[0]);
                            this._shadowDOM.content.removeChild(t)
                        } else this._shadowDOM.content.appendChild(this._template);
                        this.bindMethods(["_onShadowDOMReady"]), this._shadowDOM.on("ready", this._onShadowDOMReady, this)
                    }
                },
                _eachNodes: function(t, e) {
                    if (t && (void 0 === t._$parentUUID || void 0 === this._uuid || t._$parentUUID == this._uuid) && (e(t), t && "TEMPLATE" !== t.tagName))
                        for (var i = 0, n = t.childNodes.length; i < n; i++) t.childNodes[i] && 8 != t.childNodes[i].nodeType && this._eachNodes(t.childNodes[i], e)
                },
                _generateCompositedDOM: function() {
                    "TEMPLATE" !== this.tagName && this._template && this._shadowDOM && this.appendChild(this._shadowDOM)
                },
                _ready: function() {
                    this._isReady = !0, this.fire("ready", this.index), this.ready && this.ready(), this.setAttribute("ready", ""), this._initEvents(), H.on("resize", this._resize, this), H.on("resizeend", this._resizeEnd, this), this._resize()
                },
                _onShadowDOMReady: function() {
                    this._shadowDOM.off("ready", this._onShadowDOMReady, this), this._isShadowDOMReady = !0, this._isAttached && !this._isReady && this._ready()
                },
                _initEvents: function() {
                    for (var t in this._events)
                        if (this._events.hasOwnProperty(t)) {
                            var e = this._events[t],
                                i = t.split(" ");
                            this._registerEvent(i[0], i[1], e)
                        }
                },
                _registerEvent: function(t, e, i) {
                    if ("pointerenter" === t ? t = "pointerover" : "pointerleave" === t && (t = "pointerout"), t = /pointer/.test(t) ? k["multi" + t] : [t], void 0 === this[i]) throw new Error("oups, there isnt any " + i + " method defined for this view");
                    this.bindMethods(i);
                    for (var n = 0; n < t.length; n++) void 0 === this._delegateEvents[t[n]] && (this._delegateEvents[t[n]] = [], this.addEventListener(t[n], this._onDelegateEvent)), this._delegateEvents[t[n]].push({
                        selector: e,
                        callback: this[i]
                    })
                },
                _onDelegateEvent: function(t) {
                    if (!(this._eventNeedsCheck && (/touch/.test(t.type) && /mouse/.test(this._eventNeedsCheckType) || /mouse/.test(t.type) && /touch/.test(this._eventNeedsCheckType)) && Date.now() - this._eventNeedsCheckTime < 300)) {
                        "touchstart" === t.type || "touchend" === t.type || "mousedown" === t.type || "mouseup" === t.type ? (this._eventNeedsCheckType = t.type, this._eventNeedsCheck = !0, this._eventNeedsCheckTime = Date.now()) : this._eventNeedsCheck = !1;
                        for (var e = this._delegateEvents[t.type], i = !1, n = 0; n < e.length; n++) {
                            if (i) {
                                F.notify("Event propagation has been stopped");
                                break
                            }
                            if (e[n].selector)
                                for (var o = t.relatedTarget, r = t.target; r && r !== this;) {
                                    if (("string" == typeof e[n].selector && r.classList && r.classList.contains(e[n].selector.replace(".", "")) || e[n].selector === r) && ("mouseover" !== t.type && "mouseout" !== t.type || !r.contains(o))) {
                                        var s = F.clone(t);
                                        s.currentTarget = r, s.stopPropagation = function() {
                                            i = !0
                                        }, e[n].callback(s)
                                    }
                                    r = r.parentNode
                                } else e[n].callback(t)
                        }
                    }
                },
                _removeEvents: function() {
                    for (var t in this._delegateEvents) this.removeEventListener(t, this._onDelegateEvent);
                    void 0 !== this.update && H.off("requestAnimationFrame", this._update, this), H.off("resize", this._resize, this), H.off("resizeend", this._resizeEnd, this)
                },
                detachedCallback: function() {
                    this._isReady = !1, this._isAttached = !1, this._shadowDOM && (this._isShadowDOMReady = !1, this._shadowDOM.off("ready", this._onShadowDOMReady, this)), clearTimeout(this._afterResizeTimer), this._observer = null, this._removeEvents();
                    for (var t in this._defaultPropsChangeCallbacks) this.props.__ob__.off("change:" + t, this._defaultPropsChangeCallbacks[t]);
                    void 0 !== this.detached && this.detached()
                },
                _resize: function() {
                    var t = this;
                    this._isReady && (this.resize && this.resize(), this._afterResizeTimer = setTimeout(function() {
                        t._resized()
                    }, 0))
                },
                _resized: function() {
                    this._isReady && ("function" == typeof this.resized && this.resized(), this.fire("resized"), void 0 !== this.update && (H.off("requestAnimationFrame", this._update, this), H.on("requestAnimationFrame", this._update, this)))
                },
                _resizeEnd: function() {
                    "function" == typeof this.resizeEnd && this.resizeEnd()
                },
                _update: function() {
                    this.visible && this.update()
                },
                _enable: function() {
                    if (this.visible = !0, this.classList) this.classList.remove("is-disabled");
                    else {
                        for (var t = " " + (this.getAttribute("class") || "") + " ", e = " is-disabled "; t.indexOf(e) >= 0;) t = t.replace(e, " ");
                        this.setAttribute("class", t.trim())
                    }
                    this.removeAttribute("is-disabled"), this._shadowDOM && this._shadowDOM.enable();
                    for (var i in this._savePropChange)
                        if (console.log("this._savePropChange", i), "object" == r(this._savePropChange[i]))
                            for (var n = 0, o = this._savePropChange[i].length; n < o; n++) this.props.__ob__.fire("change:" + i, this._savePropChange[i][n]);
                        else this.props.__ob__.fire("change:" + i);
                    this.enable && this.enable()
                },
                _disable: function() {
                    if (this.visible = !1, this.classList) this.classList.add("is-disabled");
                    else {
                        var t = " " + (this.getAttribute("class") || "") + " ";
                        t.indexOf(" is-disabled ") < 0 && this.setAttribute("class", (t + "is-disabled").trim())
                    }
                    this.setAttribute("is-disabled", ""), this._shadowDOM && this._shadowDOM.disable(), this.disable && this.disable()
                },
                bindMethods: function(t) {
                    for (var t = "object" === (void 0 === t ? "undefined" : r(t)) && null !== t && t.length ? t : [t], e = 0, i = t.length; e < i; e++) {
                        var n = this[t[e]];
                        this[t[e]] = n.bind(this)
                    }
                }
            };
        "function" != typeof HTMLElement ? (Y = function() {}, Y.prototype = document.createElement("div")) : Y = HTMLElement;
        var Z = function(t) {
            function e() {
                return P.classCallCheck(this, e), P.possibleConstructorReturn(this, t.apply(this, arguments))
            }
            return P.inherits(e, t), e
        }(Y);
        for (var Q in K) Z.prototype[Q] = K[Q];
        for (var J in z) Z.prototype[J] = z[J];
        var tt = /\((.*?)\)/g,
            et = /(\(\?)?:\w+/g,
            it = /\*\w+/g,
            nt = /[\-{}\[\]+?.,\\\^$|#\s]/g,
            ot = {
                states: {},
                _routeToRegExp: function(t) {
                    return t = t.replace(nt, "\\$&").replace(tt, "(?:$1)?").replace(et, function(t, e) {
                        return e ? t : "([^/?]+)"
                    }).replace(it, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                },
                add: function(t, e) {
                    var e = F.extend({
                        controller: null,
                        route: null
                    }, e || {});
                    if ("object" == r(e.controller)) {
                        var i = e.controller,
                            n = e.method || "index";
                        e.controller = i[n].bind(i)
                    }
                    return e.route && (e.regExp = this._routeToRegExp(e.route), e.paramList = this._extractParamsFromRoute(e.route)), this.states[t] = e, this
                },
                initialize: function(t) {
                    this.lastState = null, this.base = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, H.on("statechange", this.onStateChange, this), window.addEventListener("hashchange", this._onHashChange.bind(this))
                },
                onStateChange: function(t, e) {
                    var i = this;
                    t in this.states && (this.states[t].route && (clearTimeout(this.bypassTimer), this.bypass = !0, window.location.hash = "#" + this.hrefFromParams(t, e), this.bypassTimer = setTimeout(function() {
                        i.bypass = !1
                    }, 50, this)), this.states[t].controller && this.states[t].controller(e))
                },
                _extractParamsFromRoute: function(t) {
                    for (var e = t.match(et), i = 0; i < e.length; i++) e[i] = e[i].replace(":", "");
                    return e
                },
                hrefFromParams: function(t, e) {
                    if (!t in this.states) return "no state found :: " + t;
                    if (!this.states[t].route) return "no route found";
                    var i = this.states[t].route,
                        n = i;
                    for (var o in e) {
                        var r = new RegExp("(\\(\\?)?:" + o, "g");
                        new RegExp("\\([]\\)", "g");
                        i = i.replace(r, e[o]).replace(/(\(|\))/g, ""), console.log("ROUTE", n, i)
                    }
                    return i
                },
                getHashState: function() {
                    this._onHashChange()
                },
                _onHashChange: function() {
                    if (!this.bypass) {
                        var t = this,
                            e = this.getState(),
                            i = [];
                        for (var n in this.states)
                            if (this.states[n].regExp && this.states[n].regExp.test(e)) {
                                e.replace(this.states[n].regExp, function() {
                                    for (var t = 1; t < arguments.length - 3; t++) void 0 === arguments[t] ? i.push("") : i.push(arguments[t])
                                });
                                for (var o = {}, r = 0; r < i.length; r++) o[t.states[n].paramList[r]] = i[r];
                                H.fire("statechange", [n, o]);
                                break
                            }
                    }
                },
                getState: function() {
                    return document.location.hash.replace(/^#\!?\/?/, "")
                }
            },
            rt = ["drag", "dragend", "pointerenter", "pointerleave", "pointerdown", "pointerup", "pointermove", "click", "keyup", "keydown", "keypress", "blur", "change", "focus", "submit", "resize", "scroll"],
            st = "window,Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat,typeof,void",
            at = new RegExp("^(" + st.replace(/,/g, "\\b|") + "\\b)"),
            lt = function() {
                function t(e, i, n, o) {
                    if (P.classCallCheck(this, t), this.enabled = !0, this.node = e, this.attrName = i, this.content = n, this.template = o, this.stringParts = [], this.numStringParts = 0, this.lightDom = [], this.isTextNode = !e.attributes, this.removableAttr = !1, this.onPathChange = this.onPathChange.bind(this), this.isTextNode) {
                        if (/\{\{\s*\@/.test(this.content)) {
                            var r = document.createElement("span");
                            this.content = this.content.replace(/\{\{\s*\@/, "{{"), this.node.parentNode ? (this.node.parentNode.replaceChild(r, this.node), this.node = r) : (this.oldNode = this.node, this._onDOMNodeInserted = this._onDOMNodeInserted.bind(this), this.oldNode.addEventListener("DOMNodeInserted", this._onDOMNodeInserted, !1)), this.node = r
                        }
                    } else this.node.setAttribute("has-binding", ""), /^\:/.test(this.attrName) && (this.removableAttr = !0, this.attrName = this.attrName.replace(/^\:/, ""), this.node.removeAttribute(":" + this.attrName)), this.formatedPropName = F.camelCalise(this.attrName.replace("data-", ""));
                    this.parseExpression(), this.attachListeners(), this.onPathChange()
                }
                return t.prototype._onDOMNodeInserted = function() {
                    this.oldNode.removeEventListener("DOMNodeInserted", this._onDOMNodeInserted, !1), this.oldNode.parentNode && this.oldNode.parentNode.replaceChild(this.node, this.oldNode)
                }, t.prototype.attachListeners = function() {
                    for (var t = 0, e = this.numStringParts; t < e; t++)
                        if ("expression" === this.stringParts[t].type)
                            for (var i = 0, n = this.stringParts[t].value.pathRoots.length; i < n; i++) {
                                var o = !1;
                                if (null !== this.template._item && "$value" === this.stringParts[t].value.pathRoots[i] && (o = !0, this.template._item.__ob__.on("subChange:" + this.template.props.itemIndex, this.onPathChange), this.template._item.__ob__.on("change:" + this.template.props.itemIndex, this.onPathChange)), null !== this.template.props.repeaterKey)
                                    for (var r in this.template.props.repeaterKey) this.stringParts[t].value.pathRoots[i] === r && null !== this.template.props.repeaterKey[r].repeaterParentProps.repeat && (o = !0, this.template.props.repeaterKey[r].repeaterParentProps.repeat.__ob__.on("subChange:" + this.template.props.repeaterKey[r].repeaterProps.itemIndex, this.onPathChange), this.template.props.repeaterKey[r].repeaterParentProps.repeat.__ob__.on("change:" + this.template.props.repeaterKey[r].repeaterProps.itemIndex, this.onPathChange));
                                if (null !== this.template.props.repeaterIndex)
                                    for (var s in this.template.props.repeaterIndex) this.stringParts[t].value.pathRoots[i] === s && null !== this.template.props.repeaterIndex[s].repeaterParentProps.repeat && (o = !0, this.template.props.__ob__.on("subChange:itemIndex", this.onPathChange), this.template.props.__ob__.on("change:itemIndex", this.onPathChange));
                                o || (this.template._scope.__ob__.on("subChange:" + this.stringParts[t].value.pathRoots[i], this.onPathChange), this.template._scope.__ob__.on("change:" + this.stringParts[t].value.pathRoots[i], this.onPathChange))
                            }
                }, t.prototype.parseExpression = function() {
                    var t = this,
                        e = 0;
                    this.content.replace(/\{\{[^{}]*\}\}/g, function(i, n, o) {
                        "" != t.content.slice(e, n) && t.stringParts.push({
                            type: "string",
                            value: t.content.slice(e, n)
                        }), e = n + i.length;
                        var r = i.replace(/(\{\{|\}\})/g, "");
                        /\sin\s/g.test(r) && (r = r.replace(/(?:(\S+)\s?\,)?\s?(\S*)\s+in\s+/g, function(e, i, n) {
                            return t.node._repeaterKey = n, void 0 !== i && (t.node._repeaterIndex = i), ""
                        })), t.stringParts.push({
                            type: "expression",
                            expression: r,
                            value: t._makeGetterFn(r)
                        })
                    }), e < this.content.length && !/^\s+$/g.test(this.content.slice(e)) && this.stringParts.push({
                        type: "string",
                        value: this.content.slice(e)
                    }), this.numStringParts = this.stringParts.length
                }, t.prototype._makeGetterFn = function(t) {
                    var e = this,
                        i = [],
                        n = t.replace(/((?:\.[A-Za-z_$][a-zA-Z0-9\_\$]*)|(?:['][^']*[']|["][^"]*["]))|([A-Za-z_$][a-zA-Z0-9\_\$]*)/g, function(t, n, o, r) {
                            return at.test(o) ? t : (i.push(o), "$index" === o ? "this.props.itemIndex" : "$value" === o ? "(this._item && this._item[this.props.itemIndex] ? this._item[this.props.itemIndex] : {})" : "$length" === o ? "this.props.itemLength" : null !== e.template.props.repeaterKey && o in e.template.props.repeaterKey ? '(this.props.repeaterKey["' + o + '"].repeaterParentProps.repeat[this.props.repeaterKey["' + o + '"].repeaterProps.itemIndex] !== void 0 ? this.props.repeaterKey["' + o + '"].repeaterParentProps.repeat[this.props.repeaterKey["' + o + '"].repeaterProps.itemIndex] : {})' : null !== e.template.props.repeaterIndex && o in e.template.props.repeaterIndex ? '(this.props.repeaterIndex["' + o + '"].repeaterProps.itemIndex !== void 0 ? this.props.repeaterIndex["' + o + '"].repeaterProps.itemIndex : 0)' : void 0 !== o ? "this._scope." + o : t)
                        });
                    try {
                        return {
                            fn: new Function([], "return " + n + ";"),
                            pathRoots: i
                        }
                    } catch (t) {
                        return F.warn("Invalid expression. Generated function body: " + repeaterKey + "\n" + n), {
                            fn: function() {},
                            pathRoots: i
                        }
                    }
                }, t.prototype.disable = function() {
                    this.enabled = !1
                }, t.prototype.enable = function() {
                    this.enabled = !0, this._needsUpdate && (this._needsUpdate = !1, this.onPathChange())
                }, t.prototype.destroy = function() {
                    this.oldNode && this.oldNode.removeEventListener("DOMNodeInserted", this._onDOMNodeInserted);
                    for (var t = 0, e = this.numStringParts; t < e; t++)
                        if ("expression" === this.stringParts[t].type)
                            for (var i = 0, n = this.stringParts[t].value.pathRoots.length; i < n; i++) {
                                var o = !1;
                                if (null !== this.template._item && "$value" === this.stringParts[t].value.pathRoots[i] && (o = !0, this.template._item.__ob__.off("subChange:" + this.template.props.itemIndex, this.onPathChange), this.template._item.__ob__.off("change:" + this.template.props.itemIndex, this.onPathChange)), null !== this.template.props.repeaterKey)
                                    for (var r in this.template.props.repeaterKey) this.stringParts[t].value.pathRoots[i] === r && null !== this.template.props.repeaterKey[r].repeaterParentProps.repeat && (o = !0, this.template.props.repeaterKey[r].repeaterParentProps.repeat.__ob__.off("subChange:" + this.template.props.repeaterKey[r].repeaterProps.itemIndex, this.onPathChange), this.template.props.repeaterKey[r].repeaterParentProps.repeat.__ob__.off("change:" + this.template.props.repeaterKey[r].repeaterProps.itemIndex, this.onPathChange));
                                if (null !== this.template.props.repeaterIndex)
                                    for (var s in this.template.props.repeaterIndex) this.stringParts[t].value.pathRoots[i] === s && null !== this.template.props.repeaterIndex[s].repeaterParentProps.repeat && (o = !0, this.template.props.__ob__.off("subChange:itemIndex", this.onPathChange), this.template.props.__ob__.off("change:itemIndex", this.onPathChange));
                                o || (this.template._scope.__ob__.off("subChange:" + this.stringParts[t].value.pathRoots[i], this.onPathChange), this.template._scope.__ob__.off("change:" + this.stringParts[t].value.pathRoots[i], this.onPathChange))
                            }
                }, t.prototype.safeExecuteGetterFn = function(t, e, i, n, o) {
                    try {
                        return this.stringParts[t].value.fn.call(this.template)
                    } catch (t) {
                        return
                    }
                }, t.prototype.onPathChange = function() {
                    if (!1 === this.enabled || void 0 !== this.node.visible && !1 === this.node.visible) return void(this._needsUpdate = !0);
                    if ("is" === this.attrName) {
                        var t = !1;
                        if ((t = this.safeExecuteGetterFn(0)) && t !== this.node.tagName.toLowerCase()) {
                            for (var e = document.createElement(t), i = 0, n = this.node.attributes.length; i < n; i++) "is" !== this.node.attributes[i].nodeName && e.setAttribute(this.node.attributes[i].nodeName, this.node.attributes[i].nodeValue);
                            if (this.node.hasAttribute("root-node")) {
                                var o = Number(this.node.getAttribute("root-node"));
                                e.setAttribute("root-node", o), this.template._nodes[o] = e
                            }
                            if (this.template._preCheckNode(e), this.node.parentNode && (this.node.nextSibling ? this.node.parentNode.insertBefore(e, this.node.nextSibling) : this.node.parentNode.appendChild(e)), this.template._postCheckNode(e), this.template._checkContent(e), 0 === this.lightDom.length)
                                for (var s = 0; s < this.node.childNodes.length; s++) this.lightDom.push(this.node.childNodes[s]);
                            for (var a = 0; a < this.lightDom.length; a++) e.appendChild(this.lightDom[a]);
                            this.node.parentNode && this.node.parentNode.removeChild(this.node), this.node = e
                        }
                    } else if (this.isTextNode || void 0 === this.node._defaultProps || void 0 === this.node._defaultProps[this.formatedPropName]) {
                        if (this.oldValue = this.newValue, 1 === this.numStringParts && "expression" === this.stringParts[0].type) this.newValue = this.safeExecuteGetterFn(0), null !== this.newValue && "object" === r(this.newValue) && (this.newValue = JSON.stringify(this.newValue));
                        else {
                            this.newValue = "";
                            for (var l = 0; l < this.numStringParts; l++) "expression" === this.stringParts[l].type ? this.newValue += this.safeExecuteGetterFn(l) : this.newValue += this.stringParts[l].value
                        }
                        if (this.isTextNode) void 0 !== this.node.innerHTML ? this.node.innerHTML !== this.newValue && (this.node.innerHTML = this.newValue) : void 0 !== this.node.parentNode && this.node.textContent !== this.newValue && (this.node.textContent = this.newValue);
                        else if (!this.removableAttr || "false" !== this.newValue && this.newValue)
                            if ("$" == this.attrName.charAt(0) && (this.node.removeAttribute(this.attrName), this.attrName = this.attrName.replace("$", "")), "set-class" === this.attrName) {
                                if (void 0 !== this.oldValue)
                                    for (var u = this.oldValue.split(" "), c = 0, h = u.length; c < h; c++) u[c].length && this.node.classList.remove(u[c]);
                                for (var p = this.newValue.split(" "), d = 0, f = p.length; d < f; d++) p[d].length && this.node.classList.add(p[d])
                            } else this.oldValue !== this.newValue && this.node.setAttribute(this.attrName, this.newValue);
                        else this.node.removeAttribute(this.attrName), this.node.removeAttribute(":" + this.attrName)
                    } else {
                        if (1 === this.numStringParts && "expression" === this.stringParts[0].type) this.newValue = this.safeExecuteGetterFn(0);
                        else {
                            this.newValue = "";
                            for (var l = 0; l < this.numStringParts; l++)
                                if ("expression" === this.stringParts[l].type) {
                                    var m = this.safeExecuteGetterFn(l);
                                    this.newValue += "object" === (void 0 === m ? "undefined" : r(m)) ? JSON.stringify(m) : m
                                } else this.newValue += this.stringParts[l].value
                        }
                        void 0 !== this.newValue && this.node.setProp(this.formatedPropName, this.newValue)
                    }
                }, t
            }(),
            ut = 0;
        if (void 0 === window.HTMLTemplateElement) {
            document.implementation.createHTMLDocument("template");
            window.HTMLTemplateElement = function() {}, window.HTMLTemplateElement.prototype = Object.create(HTMLElement.prototype)
        }
        var ct, ht = /[&\u00A0<>]/g,
            pt = {
                onItemIndexChange: function() {
                    this._scope.__ob__.fire("change:$index")
                },
                onItemLengthChange: function() {
                    this._scope.__ob__.fire("change:$length")
                },
                onRepeaterKeyChange: function() {
                    this._scope.__ob__.fire("change:$value");
                    for (var t in this.props.repeaterKey) this.props.repeaterKey[t].repeaterParentProps.repeat.__ob__.fire("subChange:" + this.props.repeaterKey[t].repeaterProps.itemIndex), this.props.repeaterKey[t].repeaterParentProps.repeat.__ob__.fire("change:" + this.props.repeaterKey[t].repeaterProps.itemIndex)
                },
                onRepeaterIndexChange: function() {
                    this._scope.__ob__.fire("change:$index")
                },
                detached: function() {
                    if (this._nodes && this._nodes.length > 0)
                        for (; this._nodes[0];) null != this._nodes[0].parentNode && this._nodes[0].parentNode.removeChild(this._nodes[0]), this._nodes.splice(0, 1);
                    if (this._templateNodes && this._templateNodes.length > 0)
                        for (; this._templateNodes[0];) null !== this._templateNodes[0].parentNode && void 0 !== this._templateNodes[0].parentNode && this._templateNodes[0].parentNode.removeChild(this._templateNodes[0]), this._templateNodes.splice(0, 1);
                    if (void 0 !== this._watchers)
                        for (var t = 0; t < this._watchers.length; t++) this._watchers[t].destroy();
                    this._watchers = []
                },
                _retrieveLightDom: function() {},
                _retrieveTemplate: function() {},
                created: function() {
                    this._uuid = ut++, void 0 === this.content && (this.content = document.createDocumentFragment(), this.isPolyfilled = !0), this._rootNode = this, this._isCreated = !0, this._nodes = [], this._originPreviousSibling = null, this._originNextSibling = null, this._item = null, this._repeaterKey = null, this._repeaterIndex = null, this._scope = null, this._watchers = [], this._templateNodes = [], this._templateNodeReady = 0, Object.defineProperty(this, "innerHTML", {
                        get: function() {
                            for (var t = "", e = this.content.firstChild; e; e = e.nextSibling) t += e.outerHTML || y(e.data);
                            return t
                        },
                        set: function(t) {
                            for (; this.content.firstChild;) this.content.removeChild(this.content.firstChild);
                            var e = document.createElement("div");
                            for (this.content.appendChild(e), e.innerHTML = t; e.hasChildNodes();) this.content.appendChild(e.childNodes[0]);
                            this.content.removeChild(e)
                        },
                        configurable: !0
                    })
                },
                appendChild: function(t) {
                    this.content.appendChild(t)
                },
                insertBefore: function(t, e) {
                    this.content.appendChild(t, e)
                },
                removeChild: function(t) {
                    this.content.removeChild(t)
                },
                ready: function() {},
                attached: function() {
                    if (this._originNextSibling || (this._originNextSibling = this.nextSibling), this._originPreviousSibling || (this._originPreviousSibling = this.previousSibling), this._isAttached = !0, this.isPolyfilled)
                        for (; this.hasChildNodes();) this.content.appendChild(this.childNodes[0]);
                    this.hasRepeatAttr = this.hasAttribute("repeat") || this.hasAttribute("data-repeat"), null !== this.props.if && (this.hasRepeatAttr ? this.onRepeatChange() : this.onIfChange())
                },
                _passContext: function(t) {
                    t.tagName && void 0 !== t.context && (t.context = this.context)
                },
                _scopeNode: function(t) {
                    if (t.tagName && "TEMPLATE" === t.tagName && null === t.getAttribute("shadow-dom") && (t._scope = this._scope, t._componentContext = this._componentContext, t._$slot = this._$slot, t._slotuuid = this._slotuuid, null !== this._item && t.props)) {
                        t._item = this._item, t.props.itemIndex = this.props.itemIndex, t.props.itemLength = this.props.itemLength, t.props.repeaterKey = {}, t.props.repeaterIndex = {};
                        for (var e in this.props.repeaterKey) t.props.repeaterKey[e] = this.props.repeaterKey[e];
                        for (var i in this.props.repeaterIndex) t.props.repeaterIndex[i] = this.props.repeaterIndex[i]
                    }
                    t._$parentUUID = this._uuid
                },
                _addNodesToDom: function() {
                    this._isAddingNodes = !0;
                    for (var t = this._rootNode.nextSibling, e = 0; e < this.content.childNodes.length; e++)
                        if (8 != this.content.childNodes[e].nodeType) {
                            var i = document.importNode(this.content.childNodes[e], !0);
                            this._nodes[e] = i, 1 == i.nodeType && i.setAttribute("root-node", e), this._preCheckNode(this._nodes[e]), this.parentNode && (t ? this.parentNode.insertBefore(this._nodes[e], t) : this.parentNode.appendChild(this._nodes[e]), this._rootNode = this._nodes[e]), this._postCheckNode(this._nodes[e]), this._checkContent(this._nodes[e])
                        }
                    this._ready(), this._isTemplateReady = !0
                },
                _preCheckNode: function(t, e, i) {
                    var n = this;
                    this._eachNodes(t, function(t) {
                        8 != t.nodeType && (n._scopeNode(t), n._passContext(t), n._checkBindingOnNode(t))
                    })
                },
                _postCheckNode: function(t, e, i) {},
                _checkContent: function(t) {
                    var e = this;
                    this._eachNodes(t, function(t) {
                        8 != t.nodeType && (!t.tagName || "content" !== t.tagName.toLowerCase() && "slot" !== t.tagName.toLowerCase() || t.parentNode.replaceChild(e._$slot, t))
                    })
                },
                onRepeatChange: function(t) {
                    if (this.props.if && null !== this.props.repeat) {
                        if (void 0 !== t && null !== t || (t = {}, t.index = 0, t.numRemoved = this._templateNodes.length, t.numAdded = this.props.repeat.length), t.numRemoved > 0) {
                            for (var e = t.index; e < t.index + t.numRemoved; e++) this._templateNodes[e] && (this._templateNodes[e].setAttribute("is-dead-node", ""), void 0 !== this._templateNodes[e].parentNode && null !== this._templateNodes[e].parentNode && this._templateNodes[e].parentNode.removeChild(this._templateNodes[e]), this._templateNodes[e] = null);
                            this._templateNodes.splice(t.index, t.numRemoved)
                        }
                        for (var i = 0; i < this._templateNodes.length; i++) {
                            if (this._templateNodes[i].props.itemIndex = i, this._templateNodes[i].props.itemLength = this.props.repeat.length, this._templateNodes[i].setAttribute("_repeater-index", i), null !== this._repeaterKey) {
                                for (var n in this.props.repeaterKey) this._templateNodes[i].props.repeaterKey[n] = this.props.repeaterKey[n];
                                this._templateNodes[i].props.repeaterKey[this._repeaterKey] = {
                                    repeaterParentProps: this.props,
                                    repeaterProps: this._templateNodes[i].props
                                }
                            }
                            if (null !== this._repeaterIndex) {
                                for (var o in this.props.repeaterIndex) this._templateNodes[i].props.repeaterIndex[o] = this.props.repeaterIndex[o];
                                this._templateNodes[i].props.repeaterIndex[this._repeaterIndex] = {
                                    repeaterParentProps: this.props,
                                    repeaterProps: this._templateNodes[i].props
                                }
                            }
                        }
                        if (t.numAdded > 0) {
                            var s;
                            if (this._templateNodes.length > 0) {
                                var a = this._templateNodes[this._templateNodes.length - 1];
                                s = a._nodes.length > 0 ? a._nodes[a._nodes.length - 1].nextSibling : a.nextSibling
                            } else s = this.nextSibling;
                            for (var l = t.index; l < t.index + t.numAdded; l++) {
                                var u = document.createElement("template", "light-core-template");
                                u.setAttribute("_repeater-index", l);
                                for (var c = 0; c < this.content.childNodes.length; c++) u.content.appendChild(this.content.childNodes[c].cloneNode(!0));
                                if (u._scope = this._scope, u._componentContext = this._componentContext, u._$slot = this._$slot, u._slotuuid = this._slotuuid, u.props.itemIndex = l, u.props.itemLength = this.props.repeat.length, u.props.repeaterKey = {}, u.props.repeaterIndex = {}, "object" === r(this.props.repeat) && (u._item = this.props.repeat), null !== this._repeaterKey) {
                                    for (var h in this.props.repeaterKey) u.props.repeaterKey[h] = this.props.repeaterKey[h];
                                    u.props.repeaterKey[this._repeaterKey] = {
                                        repeaterParentProps: this.props,
                                        repeaterProps: u.props
                                    }
                                }
                                if (null !== this._repeaterIndex) {
                                    for (var p in this.props.repeaterIndex) u.props.repeaterIndex[p] = this.props.repeaterIndex[p];
                                    u.props.repeaterIndex[this._repeaterIndex] = {
                                        repeaterParentProps: this.props,
                                        repeaterProps: u.props
                                    }
                                }
                                this._templateNodes.push(u), void 0 !== this.parentNode && null !== this.parentNode && (s ? s.parentNode.insertBefore(u, s) : this.parentNode.appendChild(u))
                            }
                        }
                    } else this.onIfChange()
                },
                enable: function() {
                    if (this.props.repeat)
                        for (var t = this._templateNodes.length; t--;) this._templateNodes[t]._enable();
                    else {
                        for (var e = this._nodes.length; e--;) this._eachNodes(this._nodes[e], function(t) {
                            if (t._enable ? t._enable() : t.visible = !0, 1 == t.nodeType) {
                                if (t.classList) t.classList.remove("is-disabled");
                                else {
                                    for (var e = " " + (t.getAttribute("class") || "") + " ", i = " is-disabled "; e.indexOf(i) >= 0;) e = e.replace(i, " ");
                                    t.setAttribute("class", e.trim())
                                }
                                t.removeAttribute("is-disabled")
                            }
                        });
                        for (var i = 0; i < this._watchers.length; i++) this._watchers[i].enable()
                    }
                },
                disable: function() {
                    for (var t = 0; t < this._watchers.length; t++) this._watchers[t].disable();
                    if (this.props)
                        if (this.props.repeat)
                            for (var e = this._templateNodes.length; e--;) this._templateNodes[e]._disable();
                        else
                            for (var i = this._nodes.length; i--;) this._eachNodes(this._nodes[i], function(t) {
                                if (t._disable ? t._disable() : t.visible = !1, 1 == t.nodeType) {
                                    if (t.classList) t.classList.add("is-disabled");
                                    else {
                                        var e = " " + (t.getAttribute("class") || "") + " ";
                                        e.indexOf(" is-disabled ") < 0 && t.setAttribute("class", (e + "is-disabled").trim())
                                    }
                                    t.setAttribute("is-disabled", "")
                                }
                            })
                },
                onIfChange: function() {
                    if (this.props.if) this.hasRepeatAttr ? this.props.repeat && this.onRepeatChange() : 0 === this._nodes.length ? this._addNodesToDom() : this.enable();
                    else if (!0 === this.props.removeNodes) {
                        for (var t = 0; t < this._watchers.length; t++) this._watchers[t].destroy();
                        this._watchers = [];
                        for (var e = 0; e < this._nodes.length; e++) void 0 !== this._nodes[e] && this._nodes[e].parentNode && this._nodes[e].parentNode.removeChild(this._nodes[e]);
                        this._nodes = []
                    } else this.disable()
                },
                onBindChange: function() {},
                _checkBindingOnNode: function(t) {
                    if (t.attributes) {
                        var e = [];
                        if (void 0 !== t.getAttribute("is") && /\{\{[^{}]*\}\}/g.test(t.getAttribute("is"))) e.push({
                            nodeName: "is",
                            nodeValue: t.getAttribute("is")
                        });
                        else
                            for (var i = 0, n = t.attributes.length; i < n; i++) e.push({
                                nodeName: t.attributes[i].nodeName,
                                nodeValue: t.attributes[i].nodeValue
                            });
                        for (var o = 0, r = e.length; o < r; o++) {
                            var s = e[o].nodeName,
                                a = e[o].nodeValue,
                                l = F.camelCalise(s.replace("data-", ""));
                            if (/^on/.test(l)) {
                                var u = l.replace("on", "").toLowerCase(); - 1 !== rt.indexOf(u) ? this._componentContext && void 0 !== this._componentContext[a] && this._componentContext._registerEvent(u, t, a) : this._checkCallbackOnAttribute(t, s, a)
                            } else this._addBinding(t, s, a)
                        }
                    } else void 0 !== t.parentNode && t.textContent && this._addBinding(t)
                },
                _checkCallbackOnAttribute: function(t, e, i) {
                    var n = F.camelCalise(e.replace("data-", "")).replace(/\s/g, "");
                    this._componentContext && void 0 !== this._componentContext[i] && t.props && void 0 !== t.props[n] && (t.props[n] = this._componentContext[i].bind(this._componentContext))
                },
                _addBinding: function(t, e, i) {
                    var n = t.attributes ? i : void 0 !== t.parentNode ? t.textContent : "";
                    /\{\{[^{}]*\}\}/g.test(n) && this._watchers.push(new lt(t, e, n, this))
                },
                _defaultProps: {
                    if: {
                        type: "bool",
                        value: !0,
                        change: "onIfChange"
                    },
                    repeat: {
                        type: "json",
                        value: null,
                        change: "onRepeatChange"
                    },
                    bind: {
                        type: "json",
                        value: null,
                        change: "onBindChange"
                    },
                    itemIndex: {
                        type: "int",
                        value: null,
                        change: "onItemIndexChange"
                    },
                    itemLength: {
                        type: "int",
                        value: null,
                        change: "onItemLengthChange"
                    },
                    repeaterKey: {
                        type: "json",
                        value: null,
                        change: "onRepeaterKeyChange"
                    },
                    repeaterIndex: {
                        type: "json",
                        value: null,
                        change: "onRepeaterIndexChange"
                    },
                    removeNodes: {
                        type: "bool",
                        value: !1
                    }
                }
            };
        "function" != typeof HTMLElement ? (ct = function() {}, ct.prototype = document.createElement("template")) : ct = HTMLTemplateElement;
        var dt = function(t) {
            function e() {
                return P.classCallCheck(this, e), P.possibleConstructorReturn(this, t.apply(this, arguments))
            }
            return P.inherits(e, t), e
        }(ct);
        for (var ft in pt) dt.prototype[ft] = pt[ft];
        for (var mt in K) dt.prototype[mt] = K[mt];
        for (var vt in z) dt.prototype[vt] = z[vt];
        v("light-core-template", dt, "template");
        var gt;
        "function" != typeof HTMLElement ? (gt = function() {}, gt.prototype = document.createElement("div")) : gt = HTMLTemplateElement;
        var bt = function(t) {
            function e() {
                return P.classCallCheck(this, e), P.possibleConstructorReturn(this, t.apply(this, arguments))
            }
            return P.inherits(e, t), e
        }(gt);
        for (var yt in pt) bt.prototype[yt] = pt[yt];
        for (var _t in K) bt.prototype[_t] = K[_t];
        for (var wt in z) bt.prototype[wt] = z[wt];
        v("light-template", bt);
        var xt, Pt = {
            Component: Z,
            components: q,
            register: v,
            StateProvider: ot,
            EventDispatcher: H,
            utils: F,
            support: k,
            TemplateComponent: dt,
            EventDispatcherMixin: z,
            ComponentMixin: K
        };
        return window.addEventListener("resize", w, !1), w(), requestAnimationFrame(x), window.console[void 0 === window.console.debug ? "log" : "debug"]("Light.js v107"), Pt
    })
}, function(t, e, i) {
    "use strict";

    function n(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SphereGeometryBuffer = e.BoxGeometryBuffer = e.PlaneGeometryBuffer = e.TriangleGeometryBuffer = e.vec4 = e.vec3 = e.vec2 = e.quat = e.mat4 = e.mat3 = e.mat2d = e.mat2 = e.Scene = e.DepthTexture = e.Light = e.ParticleSystem = e.Sprite = e.FrameBuffer = e.Object3d = e.Camera = e.Renderer = e.Mesh = e.Container = e.CubeTexture = e.Texture = e.Material = e.Program = e.GeometryBuffer = e.ArrayBuffer = void 0;
    var r = i(20);
    Object.defineProperty(e, "ArrayBuffer", {
        enumerable: !0,
        get: function() {
            return o(r).default
        }
    });
    var s = i(3);
    Object.defineProperty(e, "GeometryBuffer", {
        enumerable: !0,
        get: function() {
            return o(s).default
        }
    });
    var a = i(24);
    Object.defineProperty(e, "Program", {
        enumerable: !0,
        get: function() {
            return o(a).default
        }
    });
    var l = i(9);
    Object.defineProperty(e, "Material", {
        enumerable: !0,
        get: function() {
            return o(l).default
        }
    });
    var u = i(12);
    Object.defineProperty(e, "Texture", {
        enumerable: !0,
        get: function() {
            return o(u).default
        }
    });
    var c = i(67);
    Object.defineProperty(e, "CubeTexture", {
        enumerable: !0,
        get: function() {
            return o(c).default
        }
    });
    var h = i(8);
    Object.defineProperty(e, "Container", {
        enumerable: !0,
        get: function() {
            return o(h).default
        }
    });
    var p = i(10);
    Object.defineProperty(e, "Mesh", {
        enumerable: !0,
        get: function() {
            return o(p).default
        }
    });
    var d = i(71);
    Object.defineProperty(e, "Renderer", {
        enumerable: !0,
        get: function() {
            return o(d).default
        }
    });
    var f = i(66);
    Object.defineProperty(e, "Camera", {
        enumerable: !0,
        get: function() {
            return o(f).default
        }
    });
    var m = i(11);
    Object.defineProperty(e, "Object3d", {
        enumerable: !0,
        get: function() {
            return o(m).default
        }
    });
    var v = i(21);
    Object.defineProperty(e, "FrameBuffer", {
        enumerable: !0,
        get: function() {
            return o(v).default
        }
    });
    var g = i(74);
    Object.defineProperty(e, "Sprite", {
        enumerable: !0,
        get: function() {
            return o(g).default
        }
    });
    var b = i(70);
    Object.defineProperty(e, "ParticleSystem", {
        enumerable: !0,
        get: function() {
            return o(b).default
        }
    });
    var y = i(69);
    Object.defineProperty(e, "Light", {
        enumerable: !0,
        get: function() {
            return o(y).default
        }
    });
    var _ = i(68);
    Object.defineProperty(e, "DepthTexture", {
        enumerable: !0,
        get: function() {
            return o(_).default
        }
    });
    var w = i(72);
    Object.defineProperty(e, "Scene", {
        enumerable: !0,
        get: function() {
            return o(w).default
        }
    });
    var x = i(75);
    Object.defineProperty(e, "TriangleGeometryBuffer", {
        enumerable: !0,
        get: function() {
            return o(x).default
        }
    });
    var P = i(23);
    Object.defineProperty(e, "PlaneGeometryBuffer", {
        enumerable: !0,
        get: function() {
            return o(P).default
        }
    });
    var M = i(65);
    Object.defineProperty(e, "BoxGeometryBuffer", {
        enumerable: !0,
        get: function() {
            return o(M).default
        }
    });
    var k = i(73);
    Object.defineProperty(e, "SphereGeometryBuffer", {
        enumerable: !0,
        get: function() {
            return o(k).default
        }
    });
    var E = i(76),
        C = n(E),
        S = i(77),
        T = n(S),
        O = i(13),
        A = n(O),
        R = i(7),
        j = n(R),
        L = i(14),
        D = n(L),
        I = i(78),
        N = n(I),
        F = i(4),
        U = n(F),
        H = i(25),
        q = n(H);
    e.mat2 = C, e.mat2d = T, e.mat3 = A, e.mat4 = j, e.quat = D, e.vec2 = N, e.vec3 = U, e.vec4 = q
}, function(t, e, i) {
    "use strict";

    function n(t) {
        e.ARRAY_TYPE = a = t
    }

    function o(t) {
        return t * l
    }

    function r(t, e) {
        return Math.abs(t - e) <= s * Math.max(1, Math.abs(t), Math.abs(e))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setMatrixArrayType = n, e.toRadian = o, e.equals = r;
    var s = e.EPSILON = 1e-6,
        a = e.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array,
        l = (e.RANDOM = Math.random, Math.PI / 180)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(20),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        a = function() {
            function t(e, i) {
                n(this, t), e && (this.gl = e, this.attributes = {}, this.length = i || 0, this.vertices = [], this.addAttribute("position", new Float32Array(this.vertices), 3))
            }
            return o(t, [{
                key: "addAttribute",
                value: function(t, e, i, n) {
                    this.attributes[t] = new s.default(this.gl, e, i, "index" === t, n)
                }
            }]), t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = new B.ARRAY_TYPE(3);
        return t[0] = 0, t[1] = 0, t[2] = 0, t
    }

    function o(t) {
        var e = new B.ARRAY_TYPE(3);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }

    function r(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return Math.sqrt(e * e + i * i + n * n)
    }

    function s(t, e, i) {
        var n = new B.ARRAY_TYPE(3);
        return n[0] = t, n[1] = e, n[2] = i, n
    }

    function a(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t
    }

    function l(t, e, i, n) {
        return t[0] = e, t[1] = i, t[2] = n, t
    }

    function u(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t
    }

    function c(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t
    }

    function h(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t[2] = e[2] * i[2], t
    }

    function p(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t[2] = e[2] / i[2], t
    }

    function d(t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t
    }

    function f(t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t
    }

    function m(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t[2] = Math.min(e[2], i[2]), t
    }

    function v(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t[2] = Math.max(e[2], i[2]), t
    }

    function g(t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t
    }

    function b(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t
    }

    function y(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t[2] = e[2] + i[2] * n, t
    }

    function _(t, e) {
        var i = e[0] - t[0],
            n = e[1] - t[1],
            o = e[2] - t[2];
        return Math.sqrt(i * i + n * n + o * o)
    }

    function w(t, e) {
        var i = e[0] - t[0],
            n = e[1] - t[1],
            o = e[2] - t[2];
        return i * i + n * n + o * o
    }

    function x(t) {
        var e = t[0],
            i = t[1],
            n = t[2];
        return e * e + i * i + n * n
    }

    function P(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t
    }

    function M(t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t
    }

    function k(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = i * i + n * n + o * o;
        return r > 0 && (r = 1 / Math.sqrt(r), t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r), t
    }

    function E(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }

    function C(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = i[0],
            a = i[1],
            l = i[2];
        return t[0] = o * l - r * a, t[1] = r * s - n * l, t[2] = n * a - o * s, t
    }

    function S(t, e, i, n) {
        var o = e[0],
            r = e[1],
            s = e[2];
        return t[0] = o + n * (i[0] - o), t[1] = r + n * (i[1] - r), t[2] = s + n * (i[2] - s), t
    }

    function T(t, e, i, n, o, r) {
        var s = r * r,
            a = s * (2 * r - 3) + 1,
            l = s * (r - 2) + r,
            u = s * (r - 1),
            c = s * (3 - 2 * r);
        return t[0] = e[0] * a + i[0] * l + n[0] * u + o[0] * c, t[1] = e[1] * a + i[1] * l + n[1] * u + o[1] * c, t[2] = e[2] * a + i[2] * l + n[2] * u + o[2] * c, t
    }

    function O(t, e, i, n, o, r) {
        var s = 1 - r,
            a = s * s,
            l = r * r,
            u = a * s,
            c = 3 * r * a,
            h = 3 * l * s,
            p = l * r;
        return t[0] = e[0] * u + i[0] * c + n[0] * h + o[0] * p, t[1] = e[1] * u + i[1] * c + n[1] * h + o[1] * p, t[2] = e[2] * u + i[2] * c + n[2] * h + o[2] * p, t
    }

    function A(t, e) {
        e = e || 1;
        var i = 2 * B.RANDOM() * Math.PI,
            n = 2 * B.RANDOM() - 1,
            o = Math.sqrt(1 - n * n) * e;
        return t[0] = Math.cos(i) * o, t[1] = Math.sin(i) * o, t[2] = n * e, t
    }

    function R(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = i[3] * n + i[7] * o + i[11] * r + i[15];
        return s = s || 1, t[0] = (i[0] * n + i[4] * o + i[8] * r + i[12]) / s, t[1] = (i[1] * n + i[5] * o + i[9] * r + i[13]) / s, t[2] = (i[2] * n + i[6] * o + i[10] * r + i[14]) / s, t
    }

    function j(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2];
        return t[0] = n * i[0] + o * i[3] + r * i[6], t[1] = n * i[1] + o * i[4] + r * i[7], t[2] = n * i[2] + o * i[5] + r * i[8], t
    }

    function L(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = i[0],
            a = i[1],
            l = i[2],
            u = i[3],
            c = u * n + a * r - l * o,
            h = u * o + l * n - s * r,
            p = u * r + s * o - a * n,
            d = -s * n - a * o - l * r;
        return t[0] = c * u + d * -s + h * -l - p * -a, t[1] = h * u + d * -a + p * -s - c * -l, t[2] = p * u + d * -l + c * -a - h * -s, t
    }

    function D(t, e, i, n) {
        var o = [],
            r = [];
        return o[0] = e[0] - i[0], o[1] = e[1] - i[1], o[2] = e[2] - i[2], r[0] = o[0], r[1] = o[1] * Math.cos(n) - o[2] * Math.sin(n), r[2] = o[1] * Math.sin(n) + o[2] * Math.cos(n), t[0] = r[0] + i[0], t[1] = r[1] + i[1], t[2] = r[2] + i[2], t
    }

    function I(t, e, i, n) {
        var o = [],
            r = [];
        return o[0] = e[0] - i[0], o[1] = e[1] - i[1], o[2] = e[2] - i[2], r[0] = o[2] * Math.sin(n) + o[0] * Math.cos(n), r[1] = o[1], r[2] = o[2] * Math.cos(n) - o[0] * Math.sin(n), t[0] = r[0] + i[0], t[1] = r[1] + i[1], t[2] = r[2] + i[2], t
    }

    function N(t, e, i, n) {
        var o = [],
            r = [];
        return o[0] = e[0] - i[0], o[1] = e[1] - i[1], o[2] = e[2] - i[2], r[0] = o[0] * Math.cos(n) - o[1] * Math.sin(n), r[1] = o[0] * Math.sin(n) + o[1] * Math.cos(n), r[2] = o[2], t[0] = r[0] + i[0], t[1] = r[1] + i[1], t[2] = r[2] + i[2], t
    }

    function F(t, e) {
        var i = s(t[0], t[1], t[2]),
            n = s(e[0], e[1], e[2]);
        k(i, i), k(n, n);
        var o = E(i, n);
        return o > 1 ? 0 : o < -1 ? Math.PI : Math.acos(o)
    }

    function U(t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
    }

    function H(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    }

    function q(t, e) {
        var i = t[0],
            n = t[1],
            o = t[2],
            r = e[0],
            s = e[1],
            a = e[2];
        return Math.abs(i - r) <= B.EPSILON * Math.max(1, Math.abs(i), Math.abs(r)) && Math.abs(n - s) <= B.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(o - a) <= B.EPSILON * Math.max(1, Math.abs(o), Math.abs(a))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0, e.create = n, e.clone = o, e.length = r, e.fromValues = s, e.copy = a, e.set = l, e.add = u, e.subtract = c, e.multiply = h, e.divide = p, e.ceil = d, e.floor = f, e.min = m, e.max = v, e.round = g, e.scale = b, e.scaleAndAdd = y, e.distance = _, e.squaredDistance = w, e.squaredLength = x, e.negate = P, e.inverse = M, e.normalize = k, e.dot = E, e.cross = C, e.lerp = S, e.hermite = T, e.bezier = O, e.random = A, e.transformMat4 = R, e.transformMat3 = j, e.transformQuat = L, e.rotateX = D, e.rotateY = I, e.rotateZ = N, e.angle = F, e.str = U, e.exactEquals = H, e.equals = q;
    var z = i(2),
        B = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(z);
    e.sub = c, e.mul = h, e.div = p, e.dist = _, e.sqrDist = w, e.len = r, e.sqrLen = x, e.forEach = function() {
        var t = n();
        return function(e, i, n, o, r, s) {
            var a = void 0,
                l = void 0;
            for (i || (i = 3), n || (n = 0), l = o ? Math.min(o * i + n, e.length) : e.length, a = n; a < l; a += i) t[0] = e[a], t[1] = e[a + 1], t[2] = e[a + 2], r(t, t, s), e[a] = t[0], e[a + 1] = t[1], e[a + 2] = t[2];
            return e
        }
    }()
}, function(t, e, i) {
    "use strict";
    t.exports = function() {
        var t = function(t) {
                return 1 / (200 * t)
            },
            e = function(e, i, n, o) {
                var r = 3 * e,
                    s = 3 * (n - e) - r,
                    a = 1 - r - s,
                    l = 3 * i,
                    u = 3 * (o - i) - l,
                    c = 1 - l - u,
                    h = function(t) {
                        return ((a * t + s) * t + r) * t
                    },
                    p = function(t) {
                        return ((c * t + u) * t + l) * t
                    },
                    d = function(t) {
                        return (3 * a * t + 2 * s) * t + r
                    },
                    f = function(t, e) {
                        var i, n, o, r, s, a;
                        for (o = t, a = 0; a < 8; a++) {
                            if (r = h(o) - t, Math.abs(r) < e) return o;
                            if (s = d(o), Math.abs(s) < 1e-6) break;
                            o -= r / s
                        }
                        if (i = 0, n = 1, (o = t) < i) return i;
                        if (o > n) return n;
                        for (; i < n;) {
                            if (r = h(o), Math.abs(r - t) < e) return o;
                            t > r ? i = o : n = o, o = .5 * (n - i) + i
                        }
                        return o
                    },
                    m = function(t, e) {
                        return p(f(t, e))
                    };
                return function(e, i) {
                    return m(e, t(+i || 400))
                }
            };
        return function(t, i, n, o, r, s) {
            return e(t, i, n, o)(r, s)
        }
    }()
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        for (var i = e || document, n = t.offsetTop, o = t.offsetLeft; t && t.offsetParent && t.offsetParent != document && t !== i && i !== t.offsetParent;) n += t.offsetParent.offsetTop, o += t.offsetParent.offsetLeft, t = t.offsetParent;
        return {
            top: n,
            left: o
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n;
    var o = i(87);
    ! function(t) {
        t && t.__esModule
    }(o)
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = new Y.ARRAY_TYPE(16);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function o(t) {
        var e = new Y.ARRAY_TYPE(16);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }

    function r(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }

    function s(t, e, i, n, o, r, s, a, l, u, c, h, p, d, f, m) {
        var v = new Y.ARRAY_TYPE(16);
        return v[0] = t, v[1] = e, v[2] = i, v[3] = n, v[4] = o, v[5] = r, v[6] = s, v[7] = a, v[8] = l, v[9] = u, v[10] = c, v[11] = h, v[12] = p, v[13] = d, v[14] = f, v[15] = m, v
    }

    function a(t, e, i, n, o, r, s, a, l, u, c, h, p, d, f, m, v) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = o, t[4] = r, t[5] = s, t[6] = a, t[7] = l, t[8] = u, t[9] = c, t[10] = h, t[11] = p, t[12] = d, t[13] = f, t[14] = m, t[15] = v, t
    }

    function l(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function u(t, e) {
        if (t === e) {
            var i = e[1],
                n = e[2],
                o = e[3],
                r = e[6],
                s = e[7],
                a = e[11];
            t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = i, t[6] = e[9], t[7] = e[13], t[8] = n, t[9] = r, t[11] = e[14], t[12] = o, t[13] = s, t[14] = a
        } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];
        return t
    }

    function c(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            h = e[9],
            p = e[10],
            d = e[11],
            f = e[12],
            m = e[13],
            v = e[14],
            g = e[15],
            b = i * a - n * s,
            y = i * l - o * s,
            _ = i * u - r * s,
            w = n * l - o * a,
            x = n * u - r * a,
            P = o * u - r * l,
            M = c * m - h * f,
            k = c * v - p * f,
            E = c * g - d * f,
            C = h * v - p * m,
            S = h * g - d * m,
            T = p * g - d * v,
            O = b * T - y * S + _ * C + w * E - x * k + P * M;
        return O ? (O = 1 / O, t[0] = (a * T - l * S + u * C) * O, t[1] = (o * S - n * T - r * C) * O, t[2] = (m * P - v * x + g * w) * O, t[3] = (p * x - h * P - d * w) * O, t[4] = (l * E - s * T - u * k) * O, t[5] = (i * T - o * E + r * k) * O, t[6] = (v * _ - f * P - g * y) * O, t[7] = (c * P - p * _ + d * y) * O, t[8] = (s * S - a * E + u * M) * O, t[9] = (n * E - i * S - r * M) * O, t[10] = (f * x - m * _ + g * b) * O, t[11] = (h * _ - c * x - d * b) * O, t[12] = (a * k - s * C - l * M) * O, t[13] = (i * C - n * k + o * M) * O, t[14] = (m * y - f * w - v * b) * O, t[15] = (c * w - h * y + p * b) * O, t) : null
    }

    function h(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            h = e[9],
            p = e[10],
            d = e[11],
            f = e[12],
            m = e[13],
            v = e[14],
            g = e[15];
        return t[0] = a * (p * g - d * v) - h * (l * g - u * v) + m * (l * d - u * p), t[1] = -(n * (p * g - d * v) - h * (o * g - r * v) + m * (o * d - r * p)), t[2] = n * (l * g - u * v) - a * (o * g - r * v) + m * (o * u - r * l), t[3] = -(n * (l * d - u * p) - a * (o * d - r * p) + h * (o * u - r * l)), t[4] = -(s * (p * g - d * v) - c * (l * g - u * v) + f * (l * d - u * p)), t[5] = i * (p * g - d * v) - c * (o * g - r * v) + f * (o * d - r * p), t[6] = -(i * (l * g - u * v) - s * (o * g - r * v) + f * (o * u - r * l)), t[7] = i * (l * d - u * p) - s * (o * d - r * p) + c * (o * u - r * l), t[8] = s * (h * g - d * m) - c * (a * g - u * m) + f * (a * d - u * h), t[9] = -(i * (h * g - d * m) - c * (n * g - r * m) + f * (n * d - r * h)), t[10] = i * (a * g - u * m) - s * (n * g - r * m) + f * (n * u - r * a), t[11] = -(i * (a * d - u * h) - s * (n * d - r * h) + c * (n * u - r * a)), t[12] = -(s * (h * v - p * m) - c * (a * v - l * m) + f * (a * p - l * h)), t[13] = i * (h * v - p * m) - c * (n * v - o * m) + f * (n * p - o * h), t[14] = -(i * (a * v - l * m) - s * (n * v - o * m) + f * (n * l - o * a)), t[15] = i * (a * p - l * h) - s * (n * p - o * h) + c * (n * l - o * a), t
    }

    function p(t) {
        var e = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            r = t[4],
            s = t[5],
            a = t[6],
            l = t[7],
            u = t[8],
            c = t[9],
            h = t[10],
            p = t[11],
            d = t[12],
            f = t[13],
            m = t[14],
            v = t[15];
        return (e * s - i * r) * (h * v - p * m) - (e * a - n * r) * (c * v - p * f) + (e * l - o * r) * (c * m - h * f) + (i * a - n * s) * (u * v - p * d) - (i * l - o * s) * (u * m - h * d) + (n * l - o * a) * (u * f - c * d)
    }

    function d(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = e[6],
            c = e[7],
            h = e[8],
            p = e[9],
            d = e[10],
            f = e[11],
            m = e[12],
            v = e[13],
            g = e[14],
            b = e[15],
            y = i[0],
            _ = i[1],
            w = i[2],
            x = i[3];
        return t[0] = y * n + _ * a + w * h + x * m, t[1] = y * o + _ * l + w * p + x * v, t[2] = y * r + _ * u + w * d + x * g, t[3] = y * s + _ * c + w * f + x * b, y = i[4], _ = i[5], w = i[6], x = i[7], t[4] = y * n + _ * a + w * h + x * m, t[5] = y * o + _ * l + w * p + x * v, t[6] = y * r + _ * u + w * d + x * g, t[7] = y * s + _ * c + w * f + x * b, y = i[8], _ = i[9], w = i[10], x = i[11], t[8] = y * n + _ * a + w * h + x * m, t[9] = y * o + _ * l + w * p + x * v, t[10] = y * r + _ * u + w * d + x * g, t[11] = y * s + _ * c + w * f + x * b, y = i[12], _ = i[13], w = i[14], x = i[15], t[12] = y * n + _ * a + w * h + x * m, t[13] = y * o + _ * l + w * p + x * v, t[14] = y * r + _ * u + w * d + x * g, t[15] = y * s + _ * c + w * f + x * b, t
    }

    function f(t, e, i) {
        var n = i[0],
            o = i[1],
            r = i[2],
            s = void 0,
            a = void 0,
            l = void 0,
            u = void 0,
            c = void 0,
            h = void 0,
            p = void 0,
            d = void 0,
            f = void 0,
            m = void 0,
            v = void 0,
            g = void 0;
        return e === t ? (t[12] = e[0] * n + e[4] * o + e[8] * r + e[12], t[13] = e[1] * n + e[5] * o + e[9] * r + e[13], t[14] = e[2] * n + e[6] * o + e[10] * r + e[14], t[15] = e[3] * n + e[7] * o + e[11] * r + e[15]) : (s = e[0], a = e[1], l = e[2], u = e[3], c = e[4], h = e[5], p = e[6], d = e[7], f = e[8], m = e[9], v = e[10], g = e[11], t[0] = s, t[1] = a, t[2] = l, t[3] = u, t[4] = c, t[5] = h, t[6] = p, t[7] = d, t[8] = f, t[9] = m, t[10] = v, t[11] = g, t[12] = s * n + c * o + f * r + e[12], t[13] = a * n + h * o + m * r + e[13], t[14] = l * n + p * o + v * r + e[14], t[15] = u * n + d * o + g * r + e[15]), t
    }

    function m(t, e, i) {
        var n = i[0],
            o = i[1],
            r = i[2];
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * o, t[5] = e[5] * o, t[6] = e[6] * o, t[7] = e[7] * o, t[8] = e[8] * r, t[9] = e[9] * r, t[10] = e[10] * r, t[11] = e[11] * r, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t
    }

    function v(t, e, i, n) {
        var o = n[0],
            r = n[1],
            s = n[2],
            a = Math.sqrt(o * o + r * r + s * s),
            l = void 0,
            u = void 0,
            c = void 0,
            h = void 0,
            p = void 0,
            d = void 0,
            f = void 0,
            m = void 0,
            v = void 0,
            g = void 0,
            b = void 0,
            y = void 0,
            _ = void 0,
            w = void 0,
            x = void 0,
            P = void 0,
            M = void 0,
            k = void 0,
            E = void 0,
            C = void 0,
            S = void 0,
            T = void 0,
            O = void 0,
            A = void 0;
        return Math.abs(a) < Y.EPSILON ? null : (a = 1 / a, o *= a, r *= a, s *= a, l = Math.sin(i), u = Math.cos(i), c = 1 - u, h = e[0], p = e[1], d = e[2], f = e[3], m = e[4], v = e[5], g = e[6], b = e[7], y = e[8], _ = e[9], w = e[10], x = e[11], P = o * o * c + u, M = r * o * c + s * l, k = s * o * c - r * l, E = o * r * c - s * l, C = r * r * c + u, S = s * r * c + o * l, T = o * s * c + r * l, O = r * s * c - o * l, A = s * s * c + u, t[0] = h * P + m * M + y * k, t[1] = p * P + v * M + _ * k, t[2] = d * P + g * M + w * k, t[3] = f * P + b * M + x * k, t[4] = h * E + m * C + y * S, t[5] = p * E + v * C + _ * S, t[6] = d * E + g * C + w * S, t[7] = f * E + b * C + x * S, t[8] = h * T + m * O + y * A, t[9] = p * T + v * O + _ * A, t[10] = d * T + g * O + w * A, t[11] = f * T + b * O + x * A, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
    }

    function g(t, e, i) {
        var n = Math.sin(i),
            o = Math.cos(i),
            r = e[4],
            s = e[5],
            a = e[6],
            l = e[7],
            u = e[8],
            c = e[9],
            h = e[10],
            p = e[11];
        return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = r * o + u * n, t[5] = s * o + c * n, t[6] = a * o + h * n, t[7] = l * o + p * n, t[8] = u * o - r * n, t[9] = c * o - s * n, t[10] = h * o - a * n, t[11] = p * o - l * n, t
    }

    function b(t, e, i) {
        var n = Math.sin(i),
            o = Math.cos(i),
            r = e[0],
            s = e[1],
            a = e[2],
            l = e[3],
            u = e[8],
            c = e[9],
            h = e[10],
            p = e[11];
        return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = r * o - u * n, t[1] = s * o - c * n, t[2] = a * o - h * n, t[3] = l * o - p * n, t[8] = r * n + u * o, t[9] = s * n + c * o, t[10] = a * n + h * o, t[11] = l * n + p * o, t
    }

    function y(t, e, i) {
        var n = Math.sin(i),
            o = Math.cos(i),
            r = e[0],
            s = e[1],
            a = e[2],
            l = e[3],
            u = e[4],
            c = e[5],
            h = e[6],
            p = e[7];
        return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = r * o + u * n, t[1] = s * o + c * n, t[2] = a * o + h * n, t[3] = l * o + p * n, t[4] = u * o - r * n, t[5] = c * o - s * n, t[6] = h * o - a * n, t[7] = p * o - l * n, t
    }

    function _(t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t
    }

    function w(t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function x(t, e, i) {
        var n = i[0],
            o = i[1],
            r = i[2],
            s = Math.sqrt(n * n + o * o + r * r),
            a = void 0,
            l = void 0,
            u = void 0;
        return Math.abs(s) < Y.EPSILON ? null : (s = 1 / s, n *= s, o *= s, r *= s, a = Math.sin(e), l = Math.cos(e), u = 1 - l, t[0] = n * n * u + l, t[1] = o * n * u + r * a, t[2] = r * n * u - o * a, t[3] = 0, t[4] = n * o * u - r * a, t[5] = o * o * u + l, t[6] = r * o * u + n * a, t[7] = 0, t[8] = n * r * u + o * a, t[9] = o * r * u - n * a, t[10] = r * r * u + l, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
    }

    function P(t, e) {
        var i = Math.sin(e),
            n = Math.cos(e);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = i, t[7] = 0, t[8] = 0, t[9] = -i, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function M(t, e) {
        var i = Math.sin(e),
            n = Math.cos(e);
        return t[0] = n, t[1] = 0, t[2] = -i, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = i, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function k(t, e) {
        var i = Math.sin(e),
            n = Math.cos(e);
        return t[0] = n, t[1] = i, t[2] = 0, t[3] = 0, t[4] = -i, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function E(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = n + n,
            l = o + o,
            u = r + r,
            c = n * a,
            h = n * l,
            p = n * u,
            d = o * l,
            f = o * u,
            m = r * u,
            v = s * a,
            g = s * l,
            b = s * u;
        return t[0] = 1 - (d + m), t[1] = h + b, t[2] = p - g, t[3] = 0, t[4] = h - b, t[5] = 1 - (c + m), t[6] = f + v, t[7] = 0, t[8] = p + g, t[9] = f - v, t[10] = 1 - (c + d), t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t
    }

    function C(t, e) {
        return t[0] = e[12], t[1] = e[13], t[2] = e[14], t
    }

    function S(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[4],
            s = e[5],
            a = e[6],
            l = e[8],
            u = e[9],
            c = e[10];
        return t[0] = Math.sqrt(i * i + n * n + o * o), t[1] = Math.sqrt(r * r + s * s + a * a), t[2] = Math.sqrt(l * l + u * u + c * c), t
    }

    function T(t, e) {
        var i = e[0] + e[5] + e[10],
            n = 0;
        return i > 0 ? (n = 2 * Math.sqrt(i + 1), t[3] = .25 * n, t[0] = (e[6] - e[9]) / n, t[1] = (e[8] - e[2]) / n, t[2] = (e[1] - e[4]) / n) : e[0] > e[5] & e[0] > e[10] ? (n = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / n, t[0] = .25 * n, t[1] = (e[1] + e[4]) / n, t[2] = (e[8] + e[2]) / n) : e[5] > e[10] ? (n = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / n, t[0] = (e[1] + e[4]) / n, t[1] = .25 * n, t[2] = (e[6] + e[9]) / n) : (n = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / n, t[0] = (e[8] + e[2]) / n, t[1] = (e[6] + e[9]) / n, t[2] = .25 * n), t
    }

    function O(t, e, i, n) {
        var o = e[0],
            r = e[1],
            s = e[2],
            a = e[3],
            l = o + o,
            u = r + r,
            c = s + s,
            h = o * l,
            p = o * u,
            d = o * c,
            f = r * u,
            m = r * c,
            v = s * c,
            g = a * l,
            b = a * u,
            y = a * c,
            _ = n[0],
            w = n[1],
            x = n[2];
        return t[0] = (1 - (f + v)) * _, t[1] = (p + y) * _, t[2] = (d - b) * _, t[3] = 0, t[4] = (p - y) * w, t[5] = (1 - (h + v)) * w, t[6] = (m + g) * w, t[7] = 0, t[8] = (d + b) * x, t[9] = (m - g) * x, t[10] = (1 - (h + f)) * x, t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t
    }

    function A(t, e, i, n, o) {
        var r = e[0],
            s = e[1],
            a = e[2],
            l = e[3],
            u = r + r,
            c = s + s,
            h = a + a,
            p = r * u,
            d = r * c,
            f = r * h,
            m = s * c,
            v = s * h,
            g = a * h,
            b = l * u,
            y = l * c,
            _ = l * h,
            w = n[0],
            x = n[1],
            P = n[2],
            M = o[0],
            k = o[1],
            E = o[2];
        return t[0] = (1 - (m + g)) * w, t[1] = (d + _) * w, t[2] = (f - y) * w, t[3] = 0, t[4] = (d - _) * x, t[5] = (1 - (p + g)) * x, t[6] = (v + b) * x, t[7] = 0, t[8] = (f + y) * P, t[9] = (v - b) * P, t[10] = (1 - (p + m)) * P, t[11] = 0, t[12] = i[0] + M - (t[0] * M + t[4] * k + t[8] * E), t[13] = i[1] + k - (t[1] * M + t[5] * k + t[9] * E), t[14] = i[2] + E - (t[2] * M + t[6] * k + t[10] * E), t[15] = 1, t
    }

    function R(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = i + i,
            a = n + n,
            l = o + o,
            u = i * s,
            c = n * s,
            h = n * a,
            p = o * s,
            d = o * a,
            f = o * l,
            m = r * s,
            v = r * a,
            g = r * l;
        return t[0] = 1 - h - f, t[1] = c + g, t[2] = p - v, t[3] = 0, t[4] = c - g, t[5] = 1 - u - f, t[6] = d + m, t[7] = 0, t[8] = p + v, t[9] = d - m, t[10] = 1 - u - h, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }

    function j(t, e, i, n, o, r, s) {
        var a = 1 / (i - e),
            l = 1 / (o - n),
            u = 1 / (r - s);
        return t[0] = 2 * r * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * r * l, t[6] = 0, t[7] = 0, t[8] = (i + e) * a, t[9] = (o + n) * l, t[10] = (s + r) * u, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = s * r * 2 * u, t[15] = 0, t
    }

    function L(t, e, i, n, o) {
        var r = 1 / Math.tan(e / 2),
            s = 1 / (n - o);
        return t[0] = r / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (o + n) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * o * n * s, t[15] = 0, t
    }

    function D(t, e, i, n) {
        var o = Math.tan(e.upDegrees * Math.PI / 180),
            r = Math.tan(e.downDegrees * Math.PI / 180),
            s = Math.tan(e.leftDegrees * Math.PI / 180),
            a = Math.tan(e.rightDegrees * Math.PI / 180),
            l = 2 / (s + a),
            u = 2 / (o + r);
        return t[0] = l, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = -(s - a) * l * .5, t[9] = (o - r) * u * .5, t[10] = n / (i - n), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = n * i / (i - n), t[15] = 0, t
    }

    function I(t, e, i, n, o, r, s) {
        var a = 1 / (e - i),
            l = 1 / (n - o),
            u = 1 / (r - s);
        return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * l, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * u, t[11] = 0, t[12] = (e + i) * a, t[13] = (o + n) * l, t[14] = (s + r) * u, t[15] = 1, t
    }

    function N(t, e, i, n) {
        var o = void 0,
            r = void 0,
            s = void 0,
            a = void 0,
            u = void 0,
            c = void 0,
            h = void 0,
            p = void 0,
            d = void 0,
            f = void 0,
            m = e[0],
            v = e[1],
            g = e[2],
            b = n[0],
            y = n[1],
            _ = n[2],
            w = i[0],
            x = i[1],
            P = i[2];
        return Math.abs(m - w) < Y.EPSILON && Math.abs(v - x) < Y.EPSILON && Math.abs(g - P) < Y.EPSILON ? l(t) : (h = m - w, p = v - x, d = g - P, f = 1 / Math.sqrt(h * h + p * p + d * d), h *= f, p *= f, d *= f, o = y * d - _ * p, r = _ * h - b * d, s = b * p - y * h, f = Math.sqrt(o * o + r * r + s * s), f ? (f = 1 / f, o *= f, r *= f, s *= f) : (o = 0, r = 0, s = 0), a = p * s - d * r, u = d * o - h * s, c = h * r - p * o, f = Math.sqrt(a * a + u * u + c * c), f ? (f = 1 / f, a *= f, u *= f, c *= f) : (a = 0, u = 0, c = 0), t[0] = o, t[1] = a, t[2] = h, t[3] = 0, t[4] = r, t[5] = u, t[6] = p, t[7] = 0, t[8] = s, t[9] = c, t[10] = d, t[11] = 0, t[12] = -(o * m + r * v + s * g), t[13] = -(a * m + u * v + c * g), t[14] = -(h * m + p * v + d * g), t[15] = 1, t)
    }

    function F(t, e, i, n) {
        var o = e[0],
            r = e[1],
            s = e[2],
            a = n[0],
            l = n[1],
            u = n[2],
            c = o - i[0],
            h = r - i[1],
            p = s - i[2],
            d = c * c + h * h + p * p;
        d > 0 && (d = 1 / Math.sqrt(d), c *= d, h *= d, p *= d);
        var f = l * p - u * h,
            m = u * c - a * p,
            v = a * h - l * c;
        return t[0] = f, t[1] = m, t[2] = v, t[3] = 0, t[4] = h * v - p * m, t[5] = p * f - c * v, t[6] = c * m - h * f, t[7] = 0, t[8] = c, t[9] = h, t[10] = p, t[11] = 0, t[12] = o, t[13] = r, t[14] = s, t[15] = 1, t
    }

    function U(t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")"
    }

    function H(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
    }

    function q(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t[8] = e[8] + i[8], t[9] = e[9] + i[9], t[10] = e[10] + i[10], t[11] = e[11] + i[11], t[12] = e[12] + i[12], t[13] = e[13] + i[13], t[14] = e[14] + i[14], t[15] = e[15] + i[15], t
    }

    function z(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t[6] = e[6] - i[6], t[7] = e[7] - i[7], t[8] = e[8] - i[8], t[9] = e[9] - i[9], t[10] = e[10] - i[10], t[11] = e[11] - i[11], t[12] = e[12] - i[12], t[13] = e[13] - i[13], t[14] = e[14] - i[14], t[15] = e[15] - i[15], t
    }

    function B(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * i, t[9] = e[9] * i, t[10] = e[10] * i, t[11] = e[11] * i, t[12] = e[12] * i, t[13] = e[13] * i, t[14] = e[14] * i, t[15] = e[15] * i, t
    }

    function V(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t[2] = e[2] + i[2] * n, t[3] = e[3] + i[3] * n, t[4] = e[4] + i[4] * n, t[5] = e[5] + i[5] * n, t[6] = e[6] + i[6] * n, t[7] = e[7] + i[7] * n, t[8] = e[8] + i[8] * n, t[9] = e[9] + i[9] * n, t[10] = e[10] + i[10] * n, t[11] = e[11] + i[11] * n, t[12] = e[12] + i[12] * n, t[13] = e[13] + i[13] * n, t[14] = e[14] + i[14] * n, t[15] = e[15] + i[15] * n, t
    }

    function W(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
    }

    function $(t, e) {
        var i = t[0],
            n = t[1],
            o = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            l = t[6],
            u = t[7],
            c = t[8],
            h = t[9],
            p = t[10],
            d = t[11],
            f = t[12],
            m = t[13],
            v = t[14],
            g = t[15],
            b = e[0],
            y = e[1],
            _ = e[2],
            w = e[3],
            x = e[4],
            P = e[5],
            M = e[6],
            k = e[7],
            E = e[8],
            C = e[9],
            S = e[10],
            T = e[11],
            O = e[12],
            A = e[13],
            R = e[14],
            j = e[15];
        return Math.abs(i - b) <= Y.EPSILON * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(n - y) <= Y.EPSILON * Math.max(1, Math.abs(n), Math.abs(y)) && Math.abs(o - _) <= Y.EPSILON * Math.max(1, Math.abs(o), Math.abs(_)) && Math.abs(r - w) <= Y.EPSILON * Math.max(1, Math.abs(r), Math.abs(w)) && Math.abs(s - x) <= Y.EPSILON * Math.max(1, Math.abs(s), Math.abs(x)) && Math.abs(a - P) <= Y.EPSILON * Math.max(1, Math.abs(a), Math.abs(P)) && Math.abs(l - M) <= Y.EPSILON * Math.max(1, Math.abs(l), Math.abs(M)) && Math.abs(u - k) <= Y.EPSILON * Math.max(1, Math.abs(u), Math.abs(k)) && Math.abs(c - E) <= Y.EPSILON * Math.max(1, Math.abs(c), Math.abs(E)) && Math.abs(h - C) <= Y.EPSILON * Math.max(1, Math.abs(h), Math.abs(C)) && Math.abs(p - S) <= Y.EPSILON * Math.max(1, Math.abs(p), Math.abs(S)) && Math.abs(d - T) <= Y.EPSILON * Math.max(1, Math.abs(d), Math.abs(T)) && Math.abs(f - O) <= Y.EPSILON * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(m - A) <= Y.EPSILON * Math.max(1, Math.abs(m), Math.abs(A)) && Math.abs(v - R) <= Y.EPSILON * Math.max(1, Math.abs(v), Math.abs(R)) && Math.abs(g - j) <= Y.EPSILON * Math.max(1, Math.abs(g), Math.abs(j))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sub = e.mul = void 0, e.create = n, e.clone = o, e.copy = r, e.fromValues = s, e.set = a, e.identity = l, e.transpose = u, e.invert = c, e.adjoint = h, e.determinant = p, e.multiply = d, e.translate = f, e.scale = m, e.rotate = v, e.rotateX = g, e.rotateY = b, e.rotateZ = y, e.fromTranslation = _, e.fromScaling = w, e.fromRotation = x, e.fromXRotation = P, e.fromYRotation = M, e.fromZRotation = k, e.fromRotationTranslation = E, e.getTranslation = C, e.getScaling = S, e.getRotation = T, e.fromRotationTranslationScale = O, e.fromRotationTranslationScaleOrigin = A, e.fromQuat = R, e.frustum = j, e.perspective = L, e.perspectiveFromFieldOfView = D, e.ortho = I, e.lookAt = N, e.targetTo = F, e.str = U, e.frob = H, e.add = q, e.subtract = z, e.multiplyScalar = B, e.multiplyScalarAndAdd = V, e.exactEquals = W, e.equals = $;
    var X = i(2),
        Y = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(X);
    e.mul = d, e.sub = z
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(e);
                return null === r ? void 0 : t(r, i, n)
            }
            if ("value" in o) return o.value;
            var s = o.get;
            if (void 0 !== s) return s.call(n)
        },
        l = i(11),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(l),
        c = function(t) {
            function e() {
                n(this, e);
                var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.visible = !0, t.parent = null, t.children = [], t
            }
            return r(e, t), s(e, [{
                key: "add",
                value: function(t) {
                    for (var e = 0, i = this.children.length; e < i && this.children[e] != t; e++);
                    this.children.push(t), t.parent = this
                }
            }, {
                key: "remove",
                value: function(t) {
                    for (var e = 0, i = this.children.length; e < i; e++)
                        if (this.children[e] == t) {
                            t.parent = null, this.children.splice(e, 1);
                            break
                        }
                }
            }, {
                key: "destroy",
                value: function() {
                    for (var t = 0, e = this.children.length; t < e; t++) this.children[t].destroy();
                    null !== this.parent && this.parent.removeChild(this)
                }
            }, {
                key: "render",
                value: function(t, i) {
                    a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this);
                    for (var n = 0, o = this.children.length; n < o; n++) this.children[n].visible && this.children[n].render(t, i)
                }
            }]), e
        }(u.default);
    e.default = c
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(24),
        l = n(a),
        u = i(29),
        c = n(u),
        h = i(125),
        p = n(h),
        d = function(t) {
            function e(t, i) {
                o(this, e), i = Object.assign({}, {
                    vertexShader: c.default,
                    fragmentShader: p.default,
                    map: null
                }, i), i.uniforms = Object.assign({}, {
                    color: [1, 1, 1],
                    alpha: 1
                }, i.uniforms), i.defines = Object.assign({}, {
                    USE_MAP: !1
                }, i.defines);
                var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
                return t ? (Object.defineProperty(n, "map", {
                    set: function(t) {
                        t ? (n.defines.USE_MAP = !0, n.compile(), n.uniforms.map && (n.uniforms.map.value = t)) : (n.defines.USE_MAP = !1, n.compile())
                    }
                }), n.map = i.map, n) : r(n)
            }
            return s(e, t), e
        }(l.default);
    e.default = d
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(e);
                return null === r ? void 0 : t(r, i, n)
            }
            if ("value" in o) return o.value;
            var s = o.get;
            if (void 0 !== s) return s.call(n)
        },
        l = i(8),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(l),
        c = i(7),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(c),
        p = function(t) {
            function e() {
                n(this, e);
                var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return t.material = null, t.geometry = null, t._viewMatrix = h.create(), t._modelViewMatrix = h.create(), t
            }
            return r(e, t), s(e, [{
                key: "render",
                value: function(t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this, t, i);
                    var n = i.overrideMaterial || this.material;
                    if (t && n && this.geometry && this.visible) {
                        h.invert(this._viewMatrix, t.worldMatrix), h.multiply(this._modelViewMatrix, this._viewMatrix, this.worldMatrix), void 0 !== n.uniforms.uVMatrix && (n.uniforms.uVMatrix.value = this._viewMatrix), void 0 !== n.uniforms.uMMatrix && (n.uniforms.uMMatrix.value = this.matrix), void 0 !== n.uniforms.uMVMatrix && (n.uniforms.uMVMatrix.value = this._modelViewMatrix), void 0 !== n.uniforms.uPMatrix && (n.uniforms.uPMatrix.value = t.projectionMatrix);
                        for (var o in i.uniforms) void 0 !== n.uniforms[o] && (n.uniforms[o].value = i.uniforms[o]);
                        var r = !1;
                        for (var s in i.defines) n.defines[s] !== i.defines[s] && (n.defines[s] = i.defines[s], r = !0);
                        r && n.compile(), n.draw(this.geometry)
                    }
                }
            }]), e
        }(u.default);
    e.default = p
}, function(t, e, i) {
    "use strict";

    function n(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        s = i(7),
        a = n(s),
        l = i(13),
        u = n(l),
        c = i(14),
        h = n(c),
        p = i(4),
        d = n(p),
        f = function() {
            function t() {
                o(this, t), this.position = d.create(), this.rotation = d.create(), this.scale = d.create(), this.lookAt = null, this.lastPosition = d.create(), this.lastRotation = d.create(), this.lastScale = d.create(), this.lastLookAt = d.create(), d.set(this.scale, 1, 1, 1), this.up = d.create(), d.set(this.up, 0, 1, 0), this.matrix = a.create(), this.worldMatrix = a.create(), this.quaternion = null, this._quaternion = h.create(), this.inverseWorldMatrix = a.create(), this._invLookatMat4 = a.create(), this._m3Rotation = u.create(), this._rotationMat4 = a.create(), this._lookAtMat4 = a.create(), this._lastUpdate = Date.now()
            }
            return r(t, [{
                key: "render",
                value: function() {
                    this.position[0] !== this.lastPosition[0] || this.position[1] !== this.lastPosition[1] || this.position[2] !== this.lastPosition[2] ? (this.lastPosition[0] = this.position[0], this.lastPosition[1] = this.position[1], this.lastPosition[2] = this.position[2]) : this.rotation[0] !== this.lastRotation[0] || this.rotation[1] !== this.lastRotation[1] || this.rotation[2] !== this.lastRotation[2] ? (this.lastScale[0] = this.rotation[0], this.lastScale[1] = this.rotation[1], this.lastScale[2] = this.rotation[2]) : this.scale[0] !== this.lastScale[0] || this.scale[1] !== this.lastScale[1] || this.scale[2] !== this.lastScale[2] ? (this.lastScale[0] = this.scale[0], this.lastScale[1] = this.scale[1], this.lastScale[2] = this.scale[2]) : null === this.lookAt || this.lookAt[0] === this.lastLookAt[0] && this.lookAt[1] === this.lastLookAt[1] && this.lookAt[2] === this.lastLookAt[2] || (this.lastLookAt[0] = this.lookAt[0], this.lastLookAt[1] = this.lookAt[1], this.lastLookAt[2] = this.lookAt[2]), this.updateMatrix(), this.updateWorldMatrix()
                }
            }, {
                key: "updateMatrix",
                value: function() {
                    a.identity(this.matrix), a.identity(this._invLookatMat4), u.identity(this._m3Rotation), a.identity(this._rotationMat4), a.identity(this._lookAtMat4), this.quaternion ? a.fromRotationTranslation(this.matrix, this.quaternion, this.position) : (a.translate(this.matrix, this.matrix, this.position), a.rotateX(this._rotationMat4, this._rotationMat4, this.rotation[0]), a.rotateY(this._rotationMat4, this._rotationMat4, this.rotation[1]), a.rotateZ(this._rotationMat4, this._rotationMat4, this.rotation[2])), null !== this.lookAt ? (a.lookAt(this.matrix, this.position, this.lookAt, this.up), a.invert(this.matrix, this.matrix), a.scale(this.matrix, this.matrix, this.scale)) : (a.scale(this.matrix, this.matrix, this.scale), a.multiply(this.matrix, this.matrix, this._rotationMat4))
                }
            }, {
                key: "updateWorldMatrix",
                value: function() {
                    this.parent ? a.multiply(this.worldMatrix, this.matrix, this.parent.worldMatrix) : this.worldMatrix = this.matrix, a.invert(this.inverseWorldMatrix, this.worldMatrix)
                }
            }]), t
        }();
    e.default = f
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        s = i(17),
        a = n(s),
        l = i(15),
        u = n(l),
        c = i(16),
        h = n(c),
        p = {},
        d = function() {
            function t(e, i) {
                var n = this;
                if (o(this, t), e) {
                    this.options = Object.assign({}, {
                        format: e.RGBA,
                        type: e.UNSIGNED_BYTE,
                        width: 1,
                        height: 1,
                        linear: !0,
                        mipmap: !1,
                        miplinear: !1,
                        wrapS: e.CLAMP_TO_EDGE,
                        wrapT: e.CLAMP_TO_EDGE,
                        anisotropy: 0,
                        flipY: !0,
                        repeat: [1, 1]
                    }, i), this._uid = (0, a.default)(), this.gl = e, this.width = this.options.width, this.height = this.options.height, this.format = this.options.format, this.type = this.options.type, this.flipY = this.options.flipY, this.repeat = this.options.repeat, this._anisotropy = this.options.anisotropy;
                    var r = e.getExtension("OES_texture_float"),
                        s = (e.getExtension("OES_texture_float_linear"), e.getExtension("OES_texture_half_float"));
                    e.getExtension("OES_texture_half_float_linear");
                    if (!r && this.type == e.FLOAT) throw "trying to create a FrameBuffer of with gl.FLOAT type but theres no floating point texture support";
                    if (!s && this.type == e.HALF_FLOAT) throw "trying to create a texture of with gl.HALF_FLOAT type but theres no half floating point texture support";
                    this._texture = this.gl.createTexture(), e.bindTexture(e.TEXTURE_2D, this._texture), e.texImage2D(e.TEXTURE_2D, 0, this.options.format, this.width, this.height, 0, this.options.format, this.options.type, new Uint8Array([0, 0, 0, 255])), Object.defineProperty(this, "wrapS", {
                        set: function(t) {
                            n.gl.texParameteri(n.gl.TEXTURE_2D, n.gl.TEXTURE_WRAP_S, t)
                        }
                    }), Object.defineProperty(this, "wrapT", {
                        set: function(t) {
                            n.gl.texParameteri(n.gl.TEXTURE_2D, n.gl.TEXTURE_WRAP_T, t)
                        }
                    }), this.wrapS = this.options.wrapS, this.wrapT = this.options.wrapT, this.setFilter(this.options.linear, this.options.mipmap, this.options.mipmapLinear), e.bindTexture(e.TEXTURE_2D, null), Object.defineProperty(this, "anisotropy", {
                        set: function(t) {
                            n._anisotropy = t, n.updateAnisotropyFilter()
                        },
                        get: function() {
                            return n._anisotropy
                        }
                    })
                }
            }
            return r(t, [{
                key: "updateAnisotropyFilter",
                value: function() {
                    var t = this.gl;
                    if (t) {
                        var e = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        if (e && this._anisotropy > 0) {
                            t.bindTexture(t.TEXTURE_2D, this._texture);
                            var i = t.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                            t.texParameterf(t.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(this._anisotropy, i))
                        }
                    }
                }
            }, {
                key: "bindImage",
                value: function(t) {
                    if (this.gl) {
                        this.width = t.width, this.height = t.height;
                        var e = (0, h.default)(t.width) && (0, h.default)(t.height);
                        this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.format, this.type, t), e ? (this.setFilter(this.options.linear, this.options.mipmap, this.options.mipmapLinear), this.gl.generateMipmap(this.gl.TEXTURE_2D)) : (this.setFilter(this.options.linear, !1, !1), this.wrapS = this.gl.CLAMP_TO_EDGE, this.wrapT = this.gl.CLAMP_TO_EDGE), this.gl.bindTexture(this.gl.TEXTURE_2D, null)
                    }
                }
            }, {
                key: "bind",
                value: function(t) {
                    this.gl && (void 0 !== t && this.gl.activeTexture(this.gl.TEXTURE0 + (0 | t)), this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture))
                }
            }, {
                key: "delete",
                value: function() {
                    this.gl.deleteTexture(this._texture), this._texture = null, this.gl = null
                }
            }, {
                key: "setFilter",
                value: function(t, e, i) {
                    if (this.gl) {
                        var n = this.gl,
                            o = (0, u.default)(!!t, !!e, !!i);
                        n.bindTexture(n.TEXTURE_2D, this._texture), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, (0, u.default)(!!t, !1, !1)), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, o), this.updateAnisotropyFilter()
                    }
                }
            }]), t
        }();
    d.fromUrl = function(t, e, i) {
        var n = new d(t, i);
        if (void 0 !== p[e]) return void this.fromImage(t, p[e]);
        var o = new Image;
        return o.onload = function() {
            o.onload = null, o.onerror = null, p[e] = o, n.bindImage(o)
        }, o.onerror = function() {
            o.onload = null, o.onerror = null, console.warn("Invalid url provided to Texture.fromUrl() : " + e)
        }, o.src = e, n
    }, d.fromImage = function(t, e, i) {
        if (!e.width || !e.height) return void console.warn("Cannot create texture with provided image\n Please make sure the image is loaded before calling Texture.fromImage() or use Texture.fromUrl()", e);
        var n = new d(t, i);
        return n.bindImage(e), n
    }, e.default = d
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = new L.ARRAY_TYPE(9);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }

    function o(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t
    }

    function r(t) {
        var e = new L.ARRAY_TYPE(9);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }

    function s(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
    }

    function a(t, e, i, n, o, r, s, a, l) {
        var u = new L.ARRAY_TYPE(9);
        return u[0] = t, u[1] = e, u[2] = i, u[3] = n, u[4] = o, u[5] = r, u[6] = s, u[7] = a, u[8] = l, u
    }

    function l(t, e, i, n, o, r, s, a, l, u) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = o, t[4] = r, t[5] = s, t[6] = a, t[7] = l, t[8] = u, t
    }

    function u(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }

    function c(t, e) {
        if (t === e) {
            var i = e[1],
                n = e[2],
                o = e[5];
            t[1] = e[3], t[2] = e[6], t[3] = i, t[5] = e[7], t[6] = n, t[7] = o
        } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];
        return t
    }

    function h(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            h = c * s - a * u,
            p = -c * r + a * l,
            d = u * r - s * l,
            f = i * h + n * p + o * d;
        return f ? (f = 1 / f, t[0] = h * f, t[1] = (-c * n + o * u) * f, t[2] = (a * n - o * s) * f, t[3] = p * f, t[4] = (c * i - o * l) * f, t[5] = (-a * i + o * r) * f, t[6] = d * f, t[7] = (-u * i + n * l) * f, t[8] = (s * i - n * r) * f, t) : null
    }

    function p(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            u = e[7],
            c = e[8];
        return t[0] = s * c - a * u, t[1] = o * u - n * c, t[2] = n * a - o * s, t[3] = a * l - r * c, t[4] = i * c - o * l, t[5] = o * r - i * a, t[6] = r * u - s * l, t[7] = n * l - i * u, t[8] = i * s - n * r, t
    }

    function d(t) {
        var e = t[0],
            i = t[1],
            n = t[2],
            o = t[3],
            r = t[4],
            s = t[5],
            a = t[6],
            l = t[7],
            u = t[8];
        return e * (u * r - s * l) + i * (-u * o + s * a) + n * (l * o - r * a)
    }

    function f(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = e[6],
            c = e[7],
            h = e[8],
            p = i[0],
            d = i[1],
            f = i[2],
            m = i[3],
            v = i[4],
            g = i[5],
            b = i[6],
            y = i[7],
            _ = i[8];
        return t[0] = p * n + d * s + f * u, t[1] = p * o + d * a + f * c, t[2] = p * r + d * l + f * h, t[3] = m * n + v * s + g * u, t[4] = m * o + v * a + g * c, t[5] = m * r + v * l + g * h, t[6] = b * n + y * s + _ * u, t[7] = b * o + y * a + _ * c, t[8] = b * r + y * l + _ * h, t
    }

    function m(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = e[6],
            c = e[7],
            h = e[8],
            p = i[0],
            d = i[1];
        return t[0] = n, t[1] = o, t[2] = r, t[3] = s, t[4] = a, t[5] = l, t[6] = p * n + d * s + u, t[7] = p * o + d * a + c, t[8] = p * r + d * l + h, t
    }

    function v(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = e[6],
            c = e[7],
            h = e[8],
            p = Math.sin(i),
            d = Math.cos(i);
        return t[0] = d * n + p * s, t[1] = d * o + p * a, t[2] = d * r + p * l, t[3] = d * s - p * n, t[4] = d * a - p * o, t[5] = d * l - p * r, t[6] = u, t[7] = c, t[8] = h, t
    }

    function g(t, e, i) {
        var n = i[0],
            o = i[1];
        return t[0] = n * e[0], t[1] = n * e[1], t[2] = n * e[2], t[3] = o * e[3], t[4] = o * e[4], t[5] = o * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
    }

    function b(t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t
    }

    function y(t, e) {
        var i = Math.sin(e),
            n = Math.cos(e);
        return t[0] = n, t[1] = i, t[2] = 0, t[3] = -i, t[4] = n, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }

    function _(t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }

    function w(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t
    }

    function x(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = i + i,
            a = n + n,
            l = o + o,
            u = i * s,
            c = n * s,
            h = n * a,
            p = o * s,
            d = o * a,
            f = o * l,
            m = r * s,
            v = r * a,
            g = r * l;
        return t[0] = 1 - h - f, t[3] = c - g, t[6] = p + v, t[1] = c + g, t[4] = 1 - u - f, t[7] = d - m, t[2] = p - v, t[5] = d + m, t[8] = 1 - u - h, t
    }

    function P(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            u = e[7],
            c = e[8],
            h = e[9],
            p = e[10],
            d = e[11],
            f = e[12],
            m = e[13],
            v = e[14],
            g = e[15],
            b = i * a - n * s,
            y = i * l - o * s,
            _ = i * u - r * s,
            w = n * l - o * a,
            x = n * u - r * a,
            P = o * u - r * l,
            M = c * m - h * f,
            k = c * v - p * f,
            E = c * g - d * f,
            C = h * v - p * m,
            S = h * g - d * m,
            T = p * g - d * v,
            O = b * T - y * S + _ * C + w * E - x * k + P * M;
        return O ? (O = 1 / O, t[0] = (a * T - l * S + u * C) * O, t[1] = (l * E - s * T - u * k) * O, t[2] = (s * S - a * E + u * M) * O, t[3] = (o * S - n * T - r * C) * O, t[4] = (i * T - o * E + r * k) * O, t[5] = (n * E - i * S - r * M) * O, t[6] = (m * P - v * x + g * w) * O, t[7] = (v * _ - f * P - g * y) * O, t[8] = (f * x - m * _ + g * b) * O, t) : null
    }

    function M(t, e, i) {
        return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / i, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t
    }

    function k(t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")"
    }

    function E(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
    }

    function C(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t[8] = e[8] + i[8], t
    }

    function S(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t[6] = e[6] - i[6], t[7] = e[7] - i[7], t[8] = e[8] - i[8], t
    }

    function T(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * i, t
    }

    function O(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t[2] = e[2] + i[2] * n, t[3] = e[3] + i[3] * n, t[4] = e[4] + i[4] * n, t[5] = e[5] + i[5] * n, t[6] = e[6] + i[6] * n, t[7] = e[7] + i[7] * n, t[8] = e[8] + i[8] * n, t
    }

    function A(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
    }

    function R(t, e) {
        var i = t[0],
            n = t[1],
            o = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            l = t[6],
            u = t[7],
            c = t[8],
            h = e[0],
            p = e[1],
            d = e[2],
            f = e[3],
            m = e[4],
            v = e[5],
            g = e[6],
            b = e[7],
            y = e[8];
        return Math.abs(i - h) <= L.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(n - p) <= L.EPSILON * Math.max(1, Math.abs(n), Math.abs(p)) && Math.abs(o - d) <= L.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(r - f) <= L.EPSILON * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(s - m) <= L.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - v) <= L.EPSILON * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(l - g) <= L.EPSILON * Math.max(1, Math.abs(l), Math.abs(g)) && Math.abs(u - b) <= L.EPSILON * Math.max(1, Math.abs(u), Math.abs(b)) && Math.abs(c - y) <= L.EPSILON * Math.max(1, Math.abs(c), Math.abs(y))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sub = e.mul = void 0, e.create = n, e.fromMat4 = o, e.clone = r, e.copy = s, e.fromValues = a, e.set = l, e.identity = u, e.transpose = c, e.invert = h, e.adjoint = p, e.determinant = d, e.multiply = f, e.translate = m, e.rotate = v, e.scale = g, e.fromTranslation = b, e.fromRotation = y, e.fromScaling = _, e.fromMat2d = w, e.fromQuat = x, e.normalFromMat4 = P, e.projection = M, e.str = k, e.frob = E, e.add = C, e.subtract = S, e.multiplyScalar = T, e.multiplyScalarAndAdd = O, e.exactEquals = A, e.equals = R;
    var j = i(2),
        L = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(j);
    e.mul = f, e.sub = S
}, function(t, e, i) {
    "use strict";

    function n(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    }

    function o() {
        var t = new _.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
    }

    function r(t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t
    }

    function s(t, e, i) {
        i *= .5;
        var n = Math.sin(i);
        return t[0] = n * e[0], t[1] = n * e[1], t[2] = n * e[2], t[3] = Math.cos(i), t
    }

    function a(t, e) {
        var i = 2 * Math.acos(e[3]),
            n = Math.sin(i / 2);
        return 0 != n ? (t[0] = e[0] / n, t[1] = e[1] / n, t[2] = e[2] / n) : (t[0] = 1, t[1] = 0, t[2] = 0), i
    }

    function l(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = i[0],
            l = i[1],
            u = i[2],
            c = i[3];
        return t[0] = n * c + s * a + o * u - r * l, t[1] = o * c + s * l + r * a - n * u, t[2] = r * c + s * u + n * l - o * a, t[3] = s * c - n * a - o * l - r * u, t
    }

    function u(t, e, i) {
        i *= .5;
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = Math.sin(i),
            l = Math.cos(i);
        return t[0] = n * l + s * a, t[1] = o * l + r * a, t[2] = r * l - o * a, t[3] = s * l - n * a, t
    }

    function c(t, e, i) {
        i *= .5;
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = Math.sin(i),
            l = Math.cos(i);
        return t[0] = n * l - r * a, t[1] = o * l + s * a, t[2] = r * l + n * a, t[3] = s * l - o * a, t
    }

    function h(t, e, i) {
        i *= .5;
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = Math.sin(i),
            l = Math.cos(i);
        return t[0] = n * l + o * a, t[1] = o * l - n * a, t[2] = r * l + s * a, t[3] = s * l - r * a, t
    }

    function p(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2];
        return t[0] = i, t[1] = n, t[2] = o, t[3] = Math.sqrt(Math.abs(1 - i * i - n * n - o * o)), t
    }

    function d(t, e, i, n) {
        var o = e[0],
            r = e[1],
            s = e[2],
            a = e[3],
            l = i[0],
            u = i[1],
            c = i[2],
            h = i[3],
            p = void 0,
            d = void 0,
            f = void 0,
            m = void 0,
            v = void 0;
        return d = o * l + r * u + s * c + a * h, d < 0 && (d = -d, l = -l, u = -u, c = -c, h = -h), 1 - d > 1e-6 ? (p = Math.acos(d), f = Math.sin(p), m = Math.sin((1 - n) * p) / f, v = Math.sin(n * p) / f) : (m = 1 - n, v = n), t[0] = m * o + v * l, t[1] = m * r + v * u, t[2] = m * s + v * c, t[3] = m * a + v * h, t
    }

    function f(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = i * i + n * n + o * o + r * r,
            a = s ? 1 / s : 0;
        return t[0] = -i * a, t[1] = -n * a, t[2] = -o * a, t[3] = r * a, t
    }

    function m(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t
    }

    function v(t, e) {
        var i = e[0] + e[4] + e[8],
            n = void 0;
        if (i > 0) n = Math.sqrt(i + 1), t[3] = .5 * n, n = .5 / n, t[0] = (e[5] - e[7]) * n, t[1] = (e[6] - e[2]) * n, t[2] = (e[1] - e[3]) * n;
        else {
            var o = 0;
            e[4] > e[0] && (o = 1), e[8] > e[3 * o + o] && (o = 2);
            var r = (o + 1) % 3,
                s = (o + 2) % 3;
            n = Math.sqrt(e[3 * o + o] - e[3 * r + r] - e[3 * s + s] + 1), t[o] = .5 * n, n = .5 / n, t[3] = (e[3 * r + s] - e[3 * s + r]) * n, t[r] = (e[3 * r + o] + e[3 * o + r]) * n, t[s] = (e[3 * s + o] + e[3 * o + s]) * n
        }
        return t
    }

    function g(t, e, i, n) {
        var o = .5 * Math.PI / 180;
        e *= o, i *= o, n *= o;
        var r = Math.sin(e),
            s = Math.cos(e),
            a = Math.sin(i),
            l = Math.cos(i),
            u = Math.sin(n),
            c = Math.cos(n);
        return t[0] = r * l * c - s * a * u, t[1] = s * a * c + r * l * u, t[2] = s * l * u - r * a * c, t[3] = s * l * c + r * a * u, t
    }

    function b(t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setAxes = e.sqlerp = e.rotationTo = e.equals = e.exactEquals = e.normalize = e.sqrLen = e.squaredLength = e.len = e.length = e.lerp = e.dot = e.scale = e.mul = e.add = e.set = e.copy = e.fromValues = e.clone = void 0, e.create = o, e.identity = r, e.setAxisAngle = s, e.getAxisAngle = a, e.multiply = l, e.rotateX = u, e.rotateY = c, e.rotateZ = h, e.calculateW = p, e.slerp = d, e.invert = f, e.conjugate = m, e.fromMat3 = v, e.fromEuler = g, e.str = b;
    var y = i(2),
        _ = n(y),
        w = i(13),
        x = n(w),
        P = i(4),
        M = n(P),
        k = i(25),
        E = n(k),
        C = (e.clone = E.clone, e.fromValues = E.fromValues, e.copy = E.copy, e.set = E.set, e.add = E.add, e.mul = l, e.scale = E.scale, e.dot = E.dot, e.lerp = E.lerp, e.length = E.length),
        S = (e.len = C, e.squaredLength = E.squaredLength),
        T = (e.sqrLen = S, e.normalize = E.normalize);
    e.exactEquals = E.exactEquals, e.equals = E.equals, e.rotationTo = function() {
        var t = M.create(),
            e = M.fromValues(1, 0, 0),
            i = M.fromValues(0, 1, 0);
        return function(n, o, r) {
            var a = M.dot(o, r);
            return a < -.999999 ? (M.cross(t, e, o), M.len(t) < 1e-6 && M.cross(t, i, o), M.normalize(t, t), s(n, t, Math.PI), n) : a > .999999 ? (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n) : (M.cross(t, o, r), n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = 1 + a, T(n, n))
        }
    }(), e.sqlerp = function() {
        var t = o(),
            e = o();
        return function(i, n, o, r, s, a) {
            return d(t, n, s, a), d(e, o, r, a), d(i, t, e, 2 * a * (1 - a)), i
        }
    }(), e.setAxes = function() {
        var t = x.create();
        return function(e, i, n, o) {
            return t[0] = n[0], t[3] = n[1], t[6] = n[2], t[1] = o[0], t[4] = o[1], t[7] = o[2], t[2] = -i[0], t[5] = -i[1], t[8] = -i[2], T(e, v(e, t))
        }
    }()
}, function(t, e, i) {
    "use strict";

    function n(t, e, i) {
        return 9728 | +t | +e << 8 | +(e && i) << 1
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return 0 == (t & t - 1)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function(t, e, i) {
    "use strict";

    function n() {
        for (var t = 0; t < 36; t++) 8 === t || 13 === t || 18 === t || 23 === t ? s[t] = "-" : 14 === t ? s[t] = "4" : (a <= 2 && (a = 33554432 + 16777216 * Math.random() | 0), o = 15 & a, a >>= 4, s[t] = r[19 === t ? 3 & o | 8 : o]);
        return s.join("")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n;
    var o, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        s = new Array(36),
        a = 0
}, function(t, e) {
    t.exports = "precision highp float;\n\n// uniform sampler2D tMask;\nvarying vec2 vUv;\n\n// uniform vec2 resolution;\n// uniform sampler2D tDepth;\n// uniform int pass;\n\nvarying float vRatio;\n\nuniform float alpha;\nuniform float uProgress;\nuniform vec3 color;\n\nuniform int useDash;\n\nuniform int uDirection;\n\n\nvoid main() {\n\n    vec4 outColor;\n\n    outColor.rgb = color;\n\n    if (uDirection == 0) {\n        if ( vRatio < (uProgress) ) {\n            outColor.a = 1.0;\n        }\n        else {\n            if (useDash == 1) {\n                float dasharray = cos( vRatio * 1500. ) - 0.6;\n                outColor.a = dasharray < 0.0 ? 0.0 : 0.75;\n            }\n            else {\n                outColor.a = 0.;\n            }\n        }\n    }\n    else {\n        if ( vRatio > (1.0 - uProgress) ) {\n            outColor.a = 1.0;\n        }\n        else {\n            if (useDash == 1) {\n                float dasharray = cos( vRatio * 1500. ) - 0.6;\n                outColor.a = dasharray < 0.0 ? 0.0 : 0.75;\n            }\n            else {\n                outColor.a = 0.;\n            }\n        }\n    }\n    \n    outColor.a *= alpha;\n    \n    gl_FragColor = outColor;\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nattribute float ratio;\nattribute vec3 direction;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vViewPosition; \n\n\nvarying float vRatio;\n\nuniform vec3 scale;\nuniform float lineWidth;\n\nvoid main(void) {\n\n\tvec3 worldPos = position;\n\n\tvec3 _s = scale;\n\n\tworldPos += (direction * lineWidth) / scale;\n\tvRatio = ratio;\n\tvUv       = uv;\n\n\tvec4 mvPosition = uMVMatrix * vec4( worldPos, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(worldPos, 1.0);\n}\n"
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = function() {
            function t(e, i, o, r, s) {
                n(this, t), this.name = s, this.gl = e, this._buffer = this.gl.createBuffer(), this.type = this.gl.FLOAT, this._target = this.gl[r ? "ELEMENT_ARRAY_BUFFER" : "ARRAY_BUFFER"], this.update(i, o)
            }
            return o(t, [{
                key: "update",
                value: function(t, e) {
                    this.data = t, this.size = e, this.length = this.data.length, this.gl.bindBuffer(this._target, this._buffer), this.gl.bufferData(this._target, this.data, this.gl.STATIC_DRAW)
                }
            }, {
                key: "bind",
                value: function() {
                    this.gl.bindBuffer(this._target, this._buffer)
                }
            }]), t
        }();
    e.default = r
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        s = i(15),
        a = n(s),
        l = i(16),
        u = n(l),
        c = function() {
            function t(e, i) {
                var n = this;
                if (o(this, t), this.options = Object.assign({}, {
                        format: e.RGBA,
                        type: e.UNSIGNED_BYTE,
                        linear: !0,
                        mipmap: !1,
                        mipmapLinear: !1,
                        wrapS: e.CLAMP_TO_EDGE,
                        wrapT: e.CLAMP_TO_EDGE,
                        useDepthTexture: !1,
                        depthTexture: null
                    }, i), this.gl = e, this.width = this.options.width, this.height = this.options.height, this.format = this.options.format, this.type = this.options.type, this.linear = this.options.linear, this.mipmap = this.options.mipmap, this.mipmapLinear = this.options.mipmapLinear, this.type == e.FLOAT) {
                    var r = e.getExtension("OES_texture_float");
                    e.getExtension("OES_texture_float_linear");
                    if (!r) throw "trying to create a FrameBuffer of with gl.FLOAT type but theres no floating point texture support"
                }
                if ("HALF_FLOAT" == this.type) {
                    var s = e.getExtension("OES_texture_half_float");
                    e.getExtension("OES_texture_half_float_linear");
                    if (!s) throw "trying to create a texture of with gl.HALF_FLOAT type but theres no half floating point texture support";
                    this.type = s.HALF_FLOAT_OES
                }
                this._colorTexture = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, null), Object.defineProperty(this, "wrapS", {
                    set: function(t) {
                        n.gl.bindTexture(n.gl.TEXTURE_2D, n._colorTexture), n.gl.texParameteri(n.gl.TEXTURE_2D, n.gl.TEXTURE_WRAP_S, t)
                    }
                }), Object.defineProperty(this, "wrapT", {
                    set: function(t) {
                        n.gl.bindTexture(n.gl.TEXTURE_2D, n._colorTexture), n.gl.texParameteri(n.gl.TEXTURE_2D, n.gl.TEXTURE_WRAP_T, t)
                    }
                }), this.wrapS = this.options.wrapS, this.wrapT = this.options.wrapT, (0, u.default)(this.width) && (0, u.default)(this.height) || (this.wrapS = e.CLAMP_TO_EDGE, this.wrapT = e.CLAMP_TO_EDGE, this.mipmap = !1, this.mipmapLinear = !1), this.setFilter(this.linear, this.mipmap, this.mipmapLinear), this.options.depthTexture || (this.renderbuffer = this.gl.createRenderbuffer(), this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.width, this.height)), this.fbo = this.gl.createFramebuffer(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorTexture, 0), this.options.depthTexture ? this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.options.depthTexture._texture, 0) : this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.renderbuffer), this.unbind()
            }
            return r(t, [{
                key: "setFilter",
                value: function(t, e, i) {
                    var n = this.gl,
                        o = (0, a.default)(!!t, !!e, !!i);
                    n.bindTexture(n.TEXTURE_2D, this._colorTexture), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, (0, a.default)(!!t, !1, !1)), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, o)
                }
            }, {
                key: "resize",
                value: function(t, e) {
                    this.width === t && this.height === e || (this.width = 0 | t, this.height = 0 | e), (0, u.default)(this.width) && (0, u.default)(this.height) || (this.wrapS = this.gl.CLAMP_TO_EDGE, this.wrapT = this.gl.CLAMP_TO_EDGE, this.mipmap = !1, this.mipmapLinear = !1, this.setFilter(this.linear, this.mipmap, this.mipmapLinear)), this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, null), this.options.depthTexture && this.depthTexture.resize(this.width, this.height), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorTexture, 0), this.options.depthTexture ? this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.options.depthTexture._texture, 0) : (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer), this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.width, this.height), this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.renderbuffer)), this.unbind()
                }
            }, {
                key: "bindFrame",
                value: function() {
                    this.gl.viewport(0, 0, this.width, this.height), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo), this.options.depthTexture || this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.renderbuffer), this.clear()
                }
            }, {
                key: "bind",
                value: function(t) {
                    void 0 !== t && this.gl.activeTexture(this.gl.TEXTURE0 + (0 | t)), this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorTexture)
                }
            }, {
                key: "unbind",
                value: function() {
                    this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), this.options.depthTexture || this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null)
                }
            }, {
                key: "clear",
                value: function(t, e, i) {
                    var n = 0;
                    (void 0 === t || t) && (n |= this.gl.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= this.gl.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= this.gl.STENCIL_BUFFER_BIT), this.gl.clear(n)
                }
            }, {
                key: "dispose",
                value: function() {
                    this.gl.deleteFramebuffer(this.fbo), this.fbo = null, this.gl = null
                }
            }]), t
        }();
    e.default = c
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        cache: {},
        loadImage: function(t, e) {
            var i = this;
            if (void 0 !== this.cache[t]) return void e(this.cache[t]);
            var n = new Image;
            n.onload = function() {
                n.onload = null, n.onerror = null, i.cache[t] = n, e(n)
            }, n.onerror = function() {
                n.onload = null, n.onerror = null, console.warn("Cannot load image :" + t)
            }, n.src = t
        }
    }
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(3),
        l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(a),
        u = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 4));
                return i = Object.assign({}, {
                    width: 1e3,
                    height: 1e3,
                    widthSegments: 1,
                    heightSegments: 1
                }, i), t ? (r.width = i.width, r.height = i.height, r.widthSegments = i.widthSegments, r.heightSegments = i.heightSegments, r._build(), r.addAttribute("index", new Uint16Array(r.indices), 1), r.addAttribute("position", new Float32Array(r.vertices), 3), r.addAttribute("normal", new Float32Array(r.normals), 3), r.addAttribute("uv", new Float32Array(r.uvs), 2), r.addAttribute("color", new Float32Array(r.colors), 3), r) : o(r)
            }
            return r(e, t), s(e, [{
                key: "update",
                value: function() {
                    this._build(), this.attributes.index.update(new Uint16Array(this.indices), 1), this.attributes.position.update(new Float32Array(this.vertices), 3), this.attributes.normal.update(new Float32Array(this.normals), 3), this.attributes.uv.update(new Float32Array(this.uvs), 2), this.attributes.color.update(new Float32Array(this.colors), 3)
                }
            }, {
                key: "_build",
                value: function() {
                    this.indices = [], this.vertices = [], this.normals = [], this.uvs = [], this.colors = [];
                    var t, e, i = .5 * this.width,
                        n = .5 * this.height,
                        o = this.widthSegments >> 0,
                        r = this.heightSegments >> 0,
                        s = o + 1,
                        a = r + 1,
                        l = this.width / o,
                        u = this.height / r;
                    for (e = 0; e < a; e++) {
                        var c = e * u - n;
                        for (t = 0; t < s; t++) {
                            var h = t * l - i;
                            this.vertices.push(h, -c, 0), this.normals.push(0, 0, 1), this.uvs.push(t / o, 1 - e / r), this.uvs.push(), this.colors.push(1, 1, 1)
                        }
                    }
                    for (e = 0; e < r; e++)
                        for (t = 0; t < o; t++) {
                            var p = t + s * e,
                                d = t + s * (e + 1),
                                f = t + 1 + s * (e + 1),
                                m = t + 1 + s * e;
                            this.indices.push(p, d, m), this.indices.push(d, f, m)
                        }
                    this.length = this.vertices.length / 3
                }
            }]), e
        }(l.default);
    e.default = u
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t) {
        for (var e = t.split("\n"), i = 0; i < e.length; i++) e[i] = i + 1 + ": " + e[i];
        return e.join("\n")
    }

    function s(t, e, i) {
        return t.shaderSource(e, i), t.compileShader(e), !!t.getShaderParameter(e, t.COMPILE_STATUS) || (console.error("Shader cannot compile: \n" + t.getShaderInfoLog(e) || ""), console.warn(r(i)), !1)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(79),
        u = n(l),
        c = i(29),
        h = n(c),
        p = i(124),
        d = n(p),
        f = i(17),
        m = n(f),
        v = null,
        g = null,
        b = function() {
            function t(e) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o(this, t), this._uuid = (0, m.default)(), e && (i = Object.assign({}, {
                    vertexShader: h.default,
                    fragmentShader: d.default,
                    defines: {},
                    extentions: {},
                    uniforms: {},
                    type: e.TRIANGLES
                }, i), this.options = i, this._vertexShaderSource = i.vertexShader, this._fragmentShaderSource = i.fragmentShader, this.gl = e, this._program = e.createProgram(), this.vertexShader = e.createShader(e.VERTEX_SHADER), this.fragmentShader = e.createShader(e.FRAGMENT_SHADER), e.attachShader(this._program, this.vertexShader), e.attachShader(this._program, this.fragmentShader), this.type = i.type, this.attributes = {}, this.defines = i.defines, this.extentions = i.extentions, this._textureUnit = 0, this.depthTest = void 0 === i.depthTest || i.depthTest, this.blend = void 0 !== i.blend && i.blend, this.blendEquation = void 0 !== i.blendEquation ? i.blendEquation : this.gl.FUNC_ADD, this.blendSrcRGB = void 0 !== i.blendSrcRGB ? i.blendSrcRGB : this.gl.SRC_ALPHA, this.blendDstRGB = void 0 !== i.blendDstRGB ? i.blendDstRGB : this.gl.ONE_MINUS_SRC_ALPHA, this.blendSrcAlpha = void 0 !== i.blendSrcAlpha ? i.blendSrcAlpha : this.gl.ONE, this.blendDstAlpha = void 0 !== i.blendDstAlpha ? i.blendDstAlpha : this.gl.ONE_MINUS_SRC_ALPHA, this.wireframe = void 0 !== i.wireframe && i.wireframe, this.uniforms = {}, this._userDefinedUniforms = i.uniforms, this.compile())
            }
            return a(t, [{
                key: "compile",
                value: function() {
                    if (this.gl && !this.isCompiling) {
                        this.isCompiling = !0;
                        var t = "";
                        for (var e in this.defines) this.defines[e] && (t += "#define " + e + " " + this.defines[e] + "\n");
                        if (!s(this.gl, this.vertexShader, t + this._vertexShaderSource) || !s(this.gl, this.fragmentShader, t + this._fragmentShaderSource)) return console.warn("compile error"), !1;
                        this.gl.linkProgram(this._program), this.gl.getProgramParameter(this._program, this.gl.LINK_STATUS) || (console.error("Cannot link program: \n" + this.gl.getProgramInfoLog(this._program) || ""), console.warn("VERTEX_SHADER:\n" + r(this._vertexShaderSource) + "\n\nFRAGMENT_SHADER:\n" + r(this._fragmentShaderSource))), this.gl.useProgram(this._program), this._retrieveUniformsFromShader(), this.isCompiling = !1
                    }
                }
            }, {
                key: "_retrieveUniformsFromShader",
                value: function() {
                    this._savedUniforms = {};
                    for (var t in this.uniforms) this._savedUniforms[t] = {
                        value: this.uniforms[t].value
                    };
                    this.uniforms = {}, this._textureUnit = 0;
                    for (var e = this.gl.getProgramParameter(this._program, this.gl.ACTIVE_UNIFORMS), i = 0; i < e; ++i) {
                        var n = this.gl.getActiveUniform(this._program, i);
                        if (null !== n) {
                            var o = n.name,
                                r = !1;
                            /\[.*\]/.test(o) && (r = !0, o = o.replace(/\[.*\]/, "")), void 0 !== this.uniforms[o] ? (this.uniforms[o].location = this.gl.getUniformLocation(this._program, o), this.uniforms[o].type = n.type) : (this.uniforms[o] = {
                                isArray: r,
                                location: this.gl.getUniformLocation(this._program, o),
                                type: n.type,
                                value: null,
                                size: n.size
                            }, 35678 === n.type && (this.uniforms[o].unit = this._textureUnit, this._textureUnit++))
                        } else this.gl.getError()
                    }
                    for (var s in this._savedUniforms) void 0 !== this.uniforms[s] && void 0 !== this._savedUniforms[s].value && null !== this._savedUniforms[s].value && (this.uniforms[s].value = this._savedUniforms[s].value);
                    for (var a in this._userDefinedUniforms) void 0 !== this.uniforms[a] && void 0 !== this._userDefinedUniforms[a] && null !== this._userDefinedUniforms[a] && (this.uniforms[a].value = this._userDefinedUniforms[a]);
                    for (var l = this.gl.getProgramParameter(this._program, this.gl.ACTIVE_ATTRIBUTES), u = 0; u < l; ++u) {
                        var c = this.gl.getActiveAttrib(this._program, u);
                        null !== c ? this.attributes[c.name] = {
                            location: this.gl.getAttribLocation(this._program, c.name),
                            type: c.type
                        } : this.gl.getError()
                    }
                }
            }, {
                key: "dispose",
                value: function() {}
            }, {
                key: "use",
                value: function() {
                    this.gl && this.gl.useProgram(this._program)
                }
            }, {
                key: "attribPointer",
                value: function(t, e) {
                    if (this.gl)
                        for (var i in this.attributes) void 0 !== t[i] && (t[i].bind(), this.gl.vertexAttribPointer(this.attributes[i].location, t[i].size, t[i].type, !1, 0, 0), this.gl.enableVertexAttribArray(this.attributes[i].location))
                }
            }, {
                key: "draw",
                value: function(t) {
                    if (this.gl) {
                        this.gl.useProgram(this._program), t !== g && (this.attribPointer(t.attributes, t), g = t), this.depthTest !== v && (this.gl[this.depthTest ? "enable" : "disable"](this.gl.DEPTH_TEST), v = this.depthTest), this.blend ? (this.depthTest && this.gl.depthFunc(this.gl.LESS), this.gl.enable(this.gl.BLEND), this.gl.blendEquation(this.blendEquation), this.gl.blendFuncSeparate(this.blendSrcRGB, this.blendDstRGB, this.blendSrcAlpha, this.blendDstAlpha)) : (this.gl.disable(this.gl.BLEND), this.depthTest && this.gl.depthFunc(this.gl.LESS));
                        for (var e = Object.keys(this.uniforms), i = 0, n = e.length; i < n; i++) {
                            var o = e[i];
                            switch (this.uniforms[o].type) {
                                case this.gl.FLOAT_MAT2:
                                case this.gl.FLOAT_MAT3:
                                case this.gl.FLOAT_MAT4:
                                    null !== this.uniforms[o].value && void 0 !== this.uniforms[o].value && this.gl["uniform" + u.default[this.uniforms[o].type] + "v"](this.uniforms[o].location, !1, this.uniforms[o].value);
                                    break;
                                default:
                                    if (35678 === this.uniforms[o].type) this.uniforms[o].value && (this.uniforms[o].value.bind(this.uniforms[o].unit), this.gl["uniform" + u.default[this.uniforms[o].type]](this.uniforms[o].location, this.uniforms[o].unit));
                                    else {
                                        var r = u.default[this.uniforms[e[i]].type];
                                        this.uniforms[o].isArray && (r += "v"), null !== this.uniforms[o].value && ("2f" == r ? this.gl["uniform" + r](this.uniforms[o].location, this.uniforms[o].value[0], this.uniforms[o].value[1]) : "3f" == r ? this.gl["uniform" + r](this.uniforms[o].location, this.uniforms[o].value[0], this.uniforms[o].value[1], this.uniforms[o].value[2]) : "4f" == r ? this.gl["uniform" + r](this.uniforms[o].location, this.uniforms[o].value[0], this.uniforms[o].value[1], this.uniforms[o].value[2], this.uniforms[o].value[3]) : this.gl["uniform" + r](this.uniforms[o].location, this.uniforms[o].value))
                                    }
                            }
                        }
                        this.type !== this.gl.POINTS && t.attributes.index ? (t.attributes.index.bind(), this.gl.drawElements(this.wireframe ? this.gl.LINE_STRIP : this.type, t.attributes.index.length, this.gl.UNSIGNED_SHORT, 0)) : this.gl.drawArrays(this.wireframe ? this.gl.LINE_STRIP : this.type, 0, t.length)
                    }
                }
            }]), t
        }();
    e.default = b
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = new D.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t
    }

    function o(t) {
        var e = new D.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    function r(t, e, i, n) {
        var o = new D.ARRAY_TYPE(4);
        return o[0] = t, o[1] = e, o[2] = i, o[3] = n, o
    }

    function s(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function a(t, e, i, n, o) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = o, t
    }

    function l(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t
    }

    function u(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t
    }

    function c(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t[2] = e[2] * i[2], t[3] = e[3] * i[3], t
    }

    function h(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t[2] = e[2] / i[2], t[3] = e[3] / i[3], t
    }

    function p(t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t
    }

    function d(t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t
    }

    function f(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t[2] = Math.min(e[2], i[2]), t[3] = Math.min(e[3], i[3]), t
    }

    function m(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t[2] = Math.max(e[2], i[2]), t[3] = Math.max(e[3], i[3]), t
    }

    function v(t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t
    }

    function g(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t
    }

    function b(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t[2] = e[2] + i[2] * n, t[3] = e[3] + i[3] * n, t
    }

    function y(t, e) {
        var i = e[0] - t[0],
            n = e[1] - t[1],
            o = e[2] - t[2],
            r = e[3] - t[3];
        return Math.sqrt(i * i + n * n + o * o + r * r)
    }

    function _(t, e) {
        var i = e[0] - t[0],
            n = e[1] - t[1],
            o = e[2] - t[2],
            r = e[3] - t[3];
        return i * i + n * n + o * o + r * r
    }

    function w(t) {
        var e = t[0],
            i = t[1],
            n = t[2],
            o = t[3];
        return Math.sqrt(e * e + i * i + n * n + o * o)
    }

    function x(t) {
        var e = t[0],
            i = t[1],
            n = t[2],
            o = t[3];
        return e * e + i * i + n * n + o * o
    }

    function P(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t
    }

    function M(t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t
    }

    function k(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = i * i + n * n + o * o + r * r;
        return s > 0 && (s = 1 / Math.sqrt(s), t[0] = i * s, t[1] = n * s, t[2] = o * s, t[3] = r * s), t
    }

    function E(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    }

    function C(t, e, i, n) {
        var o = e[0],
            r = e[1],
            s = e[2],
            a = e[3];
        return t[0] = o + n * (i[0] - o), t[1] = r + n * (i[1] - r), t[2] = s + n * (i[2] - s), t[3] = a + n * (i[3] - a), t
    }

    function S(t, e) {
        return e = e || 1, t[0] = D.RANDOM(), t[1] = D.RANDOM(), t[2] = D.RANDOM(), t[3] = D.RANDOM(), k(t, t), g(t, t, e), t
    }

    function T(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3];
        return t[0] = i[0] * n + i[4] * o + i[8] * r + i[12] * s, t[1] = i[1] * n + i[5] * o + i[9] * r + i[13] * s, t[2] = i[2] * n + i[6] * o + i[10] * r + i[14] * s, t[3] = i[3] * n + i[7] * o + i[11] * r + i[15] * s, t
    }

    function O(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = i[0],
            a = i[1],
            l = i[2],
            u = i[3],
            c = u * n + a * r - l * o,
            h = u * o + l * n - s * r,
            p = u * r + s * o - a * n,
            d = -s * n - a * o - l * r;
        return t[0] = c * u + d * -s + h * -l - p * -a, t[1] = h * u + d * -a + p * -s - c * -l, t[2] = p * u + d * -l + c * -a - h * -s, t[3] = e[3], t
    }

    function A(t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }

    function R(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    }

    function j(t, e) {
        var i = t[0],
            n = t[1],
            o = t[2],
            r = t[3],
            s = e[0],
            a = e[1],
            l = e[2],
            u = e[3];
        return Math.abs(i - s) <= D.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(n - a) <= D.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(o - l) <= D.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(r - u) <= D.EPSILON * Math.max(1, Math.abs(r), Math.abs(u))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.forEach = e.sqrLen = e.len = e.sqrDist = e.dist = e.div = e.mul = e.sub = void 0, e.create = n, e.clone = o, e.fromValues = r, e.copy = s, e.set = a, e.add = l, e.subtract = u, e.multiply = c, e.divide = h, e.ceil = p, e.floor = d, e.min = f, e.max = m, e.round = v, e.scale = g, e.scaleAndAdd = b, e.distance = y, e.squaredDistance = _, e.length = w, e.squaredLength = x, e.negate = P, e.inverse = M, e.normalize = k, e.dot = E, e.lerp = C, e.random = S, e.transformMat4 = T, e.transformQuat = O, e.str = A, e.exactEquals = R, e.equals = j;
    var L = i(2),
        D = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(L);
    e.sub = u, e.mul = c, e.div = h, e.dist = y, e.sqrDist = _, e.len = w, e.sqrLen = x, e.forEach = function() {
        var t = n();
        return function(e, i, n, o, r, s) {
            var a = void 0,
                l = void 0;
            for (i || (i = 4), n || (n = 0), l = o ? Math.min(o * i + n, e.length) : e.length, a = n; a < l; a += i) t[0] = e[a], t[1] = e[a + 1], t[2] = e[a + 2], t[3] = e[a + 3], r(t, t, s), e[a] = t[0], e[a + 1] = t[1], e[a + 2] = t[2], e[a + 3] = t[3];
            return e
        }
    }()
}, function(t, e, i) {
    "use strict";
    (function(e) {
        function n(t, e) {
            if ("function" == typeof t) return n("*", t);
            if ("function" == typeof e)
                for (var i = new a(t), o = 1; o < arguments.length; ++o) n.callbacks.push(i.middleware(arguments[o]));
            else "string" == typeof t ? n["string" == typeof e ? "redirect" : "show"](t, e) : n.start(t)
        }

        function o(t) {
            if (!t.handled) {
                var e;
                e = y ? b + m.hash.replace("#!", "") : m.pathname + m.search, e !== t.canonicalPath && (n.stop(), t.handled = !1, m.href = t.canonicalPath)
            }
        }

        function r(t) {
            return "string" != typeof t ? t : g ? decodeURIComponent(t.replace(/\+/g, " ")) : t
        }

        function s(t, e) {
            "/" === t[0] && 0 !== t.indexOf(b) && (t = b + (y ? "#!" : "") + t);
            var i = t.indexOf("?");
            if (this.canonicalPath = t, this.path = t.replace(b, "") || "/", y && (this.path = this.path.replace("#!", "") || "/"), this.title = document.title, this.state = e || {}, this.state.path = t, this.querystring = ~i ? r(t.slice(i + 1)) : "", this.pathname = r(~i ? t.slice(0, i) : t), this.params = {}, this.hash = "", !y) {
                if (!~this.path.indexOf("#")) return;
                var n = this.path.split("#");
                this.path = n[0], this.hash = r(n[1]) || "", this.querystring = this.querystring.split("#")[0]
            }
        }

        function a(t, e) {
            e = e || {}, this.path = "*" === t ? "(.*)" : t, this.method = "GET", this.regexp = h(this.path, this.keys = [], e)
        }

        function l(t) {
            if (1 === u(t) && !(t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented)) {
                for (var i = t.path ? t.path[0] : t.target; i && "A" !== i.nodeName;) i = i.parentNode;
                if (i && "A" === i.nodeName && !i.hasAttribute("download") && "external" !== i.getAttribute("rel")) {
                    var o = i.getAttribute("href");
                    if ((y || i.pathname !== m.pathname || !i.hash && "#" !== o) && !(o && o.indexOf("mailto:") > -1) && !i.target && c(i.href)) {
                        var r = i.pathname + i.search + (i.hash || "");
                        void 0 !== e && r.match(/^\/[a-zA-Z]:\//) && (r = r.replace(/^\/[a-zA-Z]:\//, "/"));
                        var s = r;
                        0 === r.indexOf(b) && (r = r.substr(b.length)), y && (r = r.replace("#!", "")), b && s === r || (t.preventDefault(), n.show(s))
                    }
                }
            }
        }

        function u(t) {
            return t = t || window.event, null === t.which ? t.button : t.which
        }

        function c(t) {
            var e = m.protocol + "//" + m.hostname;
            return m.port && (e += ":" + m.port), t && 0 === t.indexOf(e)
        }
        var h = i(95);
        t.exports = n;
        var p, d, f = "undefined" != typeof document && document.ontouchstart ? "touchstart" : "click",
            m = "undefined" != typeof window && (window.history.location || window.location),
            v = !0,
            g = !0,
            b = "",
            y = !1;
        n.callbacks = [], n.exits = [], n.current = "", n.len = 0, n.base = function(t) {
            if (0 === arguments.length) return b;
            b = t
        }, n.start = function(t) {
            if (t = t || {}, !p && (p = !0, !1 === t.dispatch && (v = !1), !1 === t.decodeURLComponents && (g = !1), !1 !== t.popstate && window.addEventListener("popstate", _, !1), !1 !== t.click && document.addEventListener(f, l, !1), !0 === t.hashbang && (y = !0), v)) {
                var e = y && ~m.hash.indexOf("#!") ? m.hash.substr(2) + m.search : m.pathname + m.search + m.hash;
                n.replace(e, null, !0, v)
            }
        }, n.stop = function() {
            p && (n.current = "", n.len = 0, p = !1, document.removeEventListener(f, l, !1), window.removeEventListener("popstate", _, !1))
        }, n.show = function(t, e, i, o) {
            var r = new s(t, e);
            return n.current = r.path, !1 !== i && n.dispatch(r), !1 !== r.handled && !1 !== o && r.pushState(), r
        }, n.back = function(t, e) {
            n.len > 0 ? (history.back(), n.len--) : t ? setTimeout(function() {
                n.show(t, e)
            }) : setTimeout(function() {
                n.show(b, e)
            })
        }, n.redirect = function(t, e) {
            "string" == typeof t && "string" == typeof e && n(t, function(t) {
                setTimeout(function() {
                    n.replace(e)
                }, 0)
            }), "string" == typeof t && void 0 === e && setTimeout(function() {
                n.replace(t)
            }, 0)
        }, n.replace = function(t, e, i, o) {
            var r = new s(t, e);
            return n.current = r.path, r.init = i, r.save(), !1 !== o && n.dispatch(r), r
        }, n.dispatch = function(t) {
            function e() {
                var t = n.exits[a++];
                if (!t) return i();
                t(r, e)
            }

            function i() {
                var e = n.callbacks[s++];
                return t.path !== n.current ? void(t.handled = !1) : e ? void e(t, i) : o(t)
            }
            var r = d,
                s = 0,
                a = 0;
            d = t, r ? e() : i()
        }, n.exit = function(t, e) {
            if ("function" == typeof t) return n.exit("*", t);
            for (var i = new a(t), o = 1; o < arguments.length; ++o) n.exits.push(i.middleware(arguments[o]))
        }, n.Context = s, s.prototype.pushState = function() {
            n.len++, history.pushState(this.state, this.title, y && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, s.prototype.save = function() {
            history.replaceState(this.state, this.title, y && "/" !== this.path ? "#!" + this.path : this.canonicalPath)
        }, n.Route = a, a.prototype.middleware = function(t) {
            var e = this;
            return function(i, n) {
                if (e.match(i.path, i.params)) return t(i, n);
                n()
            }
        }, a.prototype.match = function(t, e) {
            var i = this.keys,
                n = t.indexOf("?"),
                o = ~n ? t.slice(0, n) : t,
                s = this.regexp.exec(decodeURIComponent(o));
            if (!s) return !1;
            for (var a = 1, l = s.length; a < l; ++a) {
                var u = i[a - 1],
                    c = r(s[a]);
                void 0 === c && hasOwnProperty.call(e, u.name) || (e[u.name] = c)
            }
            return !0
        };
        var _ = function() {
            var t = !1;
            if ("undefined" != typeof window) return "complete" === document.readyState ? t = !0 : window.addEventListener("load", function() {
                    setTimeout(function() {
                        t = !0
                    }, 0)
                }),
                function(e) {
                    if (t)
                        if (e.state) {
                            var i = e.state.path;
                            n.replace(i, e.state)
                        } else n.show(m.pathname + m.hash, void 0, void 0, !1)
                }
        }();
        n.sameOrigin = c
    }).call(e, i(96))
}, function(t, e, i) {
    function n(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i],
                o = f[n.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
                for (; r < n.parts.length; r++) o.parts.push(c(n.parts[r], e))
            } else {
                for (var s = [], r = 0; r < n.parts.length; r++) s.push(c(n.parts[r], e));
                f[n.id] = {
                    id: n.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function o(t, e) {
        for (var i = [], n = {}, o = 0; o < t.length; o++) {
            var r = t[o],
                s = e.base ? r[0] + e.base : r[0],
                a = r[1],
                l = r[2],
                u = r[3],
                c = {
                    css: a,
                    media: l,
                    sourceMap: u
                };
            n[s] ? n[s].parts.push(c) : i.push(n[s] = {
                id: s,
                parts: [c]
            })
        }
        return i
    }

    function r(t, e) {
        var i = v(t.insertInto);
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n = y[y.length - 1];
        if ("top" === t.insertAt) n ? n.nextSibling ? i.insertBefore(e, n.nextSibling) : i.appendChild(e) : i.insertBefore(e, i.firstChild), y.push(e);
        else {
            if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            i.appendChild(e)
        }
    }

    function s(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = y.indexOf(t);
        e >= 0 && y.splice(e, 1)
    }

    function a(t) {
        var e = document.createElement("style");
        return t.attrs.type = "text/css", u(e, t.attrs), r(t, e), e
    }

    function l(t) {
        var e = document.createElement("link");
        return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", u(e, t.attrs), r(t, e), e
    }

    function u(t, e) {
        Object.keys(e).forEach(function(i) {
            t.setAttribute(i, e[i])
        })
    }

    function c(t, e) {
        var i, n, o, r;
        if (e.transform && t.css) {
            if (!(r = e.transform(t.css))) return function() {};
            t.css = r
        }
        if (e.singleton) {
            var u = b++;
            i = g || (g = a(e)), n = h.bind(null, i, u, !1), o = h.bind(null, i, u, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = l(e), n = d.bind(null, i, e), o = function() {
            s(i), i.href && URL.revokeObjectURL(i.href)
        }) : (i = a(e), n = p.bind(null, i), o = function() {
            s(i)
        });
        return n(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    n(t = e)
                } else o()
            }
    }

    function h(t, e, i, n) {
        var o = i ? "" : n.css;
        if (t.styleSheet) t.styleSheet.cssText = w(e, o);
        else {
            var r = document.createTextNode(o),
                s = t.childNodes;
            s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
        }
    }

    function p(t, e) {
        var i = e.css,
            n = e.media;
        if (n && t.setAttribute("media", n), t.styleSheet) t.styleSheet.cssText = i;
        else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(i))
        }
    }

    function d(t, e, i) {
        var n = i.css,
            o = i.sourceMap,
            r = void 0 === e.convertToAbsoluteUrls && o;
        (e.convertToAbsoluteUrls || r) && (n = _(n)), o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
        var s = new Blob([n], {
                type: "text/css"
            }),
            a = t.href;
        t.href = URL.createObjectURL(s), a && URL.revokeObjectURL(a)
    }
    var f = {},
        m = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }(function() {
            return window && document && document.all && !window.atob
        }),
        v = function(t) {
            var e = {};
            return function(i) {
                return void 0 === e[i] && (e[i] = t.call(this, i)), e[i]
            }
        }(function(t) {
            return document.querySelector(t)
        }),
        g = null,
        b = 0,
        y = [],
        _ = i(120);
    t.exports = function(t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = m()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var i = o(t, e);
        return n(i, e),
            function(t) {
                for (var r = [], s = 0; s < i.length; s++) {
                    var a = i[s],
                        l = f[a.id];
                    l.refs--, r.push(l)
                }
                if (t) {
                    n(o(t, e), e)
                }
                for (var s = 0; s < r.length; s++) {
                    var l = r[s];
                    if (0 === l.refs) {
                        for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                        delete f[l.id]
                    }
                }
            }
    };
    var w = function() {
        var t = [];
        return function(e, i) {
            return t[e] = i, t.filter(Boolean).join("\n")
        }
    }()
}, function(t, e) {
    function i(t) {
        return null != t && "object" == typeof t
    }
    t.exports = i
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nvarying vec2 vUv;\nuniform vec2 resolution;\nuniform float uMaskRadius;\nuniform vec2 uMaskCenter;\n\nuniform vec3 color;\n\nuniform int uInvertMask;\nuniform int useMask;\nuniform float alpha;\n\nvoid main() {\n\t\n    float _maskRadius = uMaskRadius;\n\n    if (useMask == 1) {\n\t    if ( uInvertMask == 1) {\n\t    \tif ( length( gl_FragCoord.xy - (resolution*uMaskCenter) ) < uMaskRadius  ) {\n\t\t        discard;\n\t\t    }\n\t    }\n\t    else {\n\t\t    if ( length( gl_FragCoord.xy - (resolution*uMaskCenter) ) > uMaskRadius  ) {\n\t\t        discard;\n\t\t    }\n\t    }\n    }\n\n    gl_FragColor = vec4( color, alpha);\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uMMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \n\nvoid main(void) {\n\n\tvUv       = uv;\n\tvNormal   = normalize( (uMMatrix * vec4(normal, 0.0)).rgb );\n\tvPosition = (uMMatrix * vec4(position, 1.0)).rgb;\n\n\tvec4 mvPosition = uMVMatrix * vec4( position, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\nvarying vec2 vUv;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main() {\n    gl_FragColor = vec4( color, alpha);\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \n\n\nuniform float uPointSize;\n\nvoid main(void) {\n\n\tvUv       = uv;\n\n\tvec4 mvPosition = uMVMatrix * vec4( position, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n \t\t\n    gl_PointSize = uPointSize;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n"
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    this.$btn = this.querySelector(".js-expand__btn"), this.$content = this.querySelector(".js-expand__content"), this.$content.style.overflow = "hidden", this.$content.style[a.support.transition] = "height 0.6s ease-out"
                }
            }, {
                key: "_onExpandDown",
                value: function() {
                    this.props.isActive = !this.props.isActive, this.$content.style.height = this.props.isActive ? this._contentHeight + "px" : "0px"
                }
            }, {
                key: "resize",
                value: function() {
                    this.$content.style.height = "auto", this._contentHeight = this.$content.clientHeight, this.$content.style.height = "0px"
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        isActive: {
                            type: "bool",
                            value: !1
                        }
                    }
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        "click .js-expand__btn": "_onExpandDown"
                    }
                }
            }, {
                key: "template",
                get: function() {
                    return i(98)
                }
            }]), e
        }(a.Component);
    (0, a.register)("app-accordion", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "defaultProps",
                get: function() {
                    return {}
                }
            }, {
                key: "template",
                get: function() {
                    return i(99)
                }
            }]), e
        }(a.Component);
    (0, a.register)("app-footer", l)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(0),
        u = i(1),
        c = i(89),
        h = n(c),
        p = i(131),
        d = n(p),
        f = i(130),
        m = n(f),
        v = i(90),
        g = n(v),
        b = i(31),
        y = n(b),
        _ = i(30),
        w = n(_),
        x = i(5),
        P = n(x),
        M = new u.Renderer({
            alpha: !0,
            antialias: !0
        });
    if (M.gl) {
        M.setPixelRatio(1), M.resize(window.innerWidth, window.innerHeight);
        var k = new u.Container,
            E = new u.Camera({
                left: -window.innerWidth / 2,
                right: window.innerWidth / 2,
                top: window.innerHeight / 2,
                bottom: -window.innerHeight / 2,
                near: 1,
                far: 1e4,
                type: "orthographic"
            });
        E.position[2] = 400;
        var C = new u.Mesh;
        C.material = new u.Material(M.gl, {
            vertexShader: y.default,
            fragmentShader: w.default,
            uniforms: {
                color: [0, 147 / 255, 229 / 255],
                alpha: 1,
                uInvertMask: !1,
                useMask: !0
            },
            blend: !1
        }), C.geometry = new u.PlaneGeometryBuffer(M.gl, {
            width: 1e4,
            height: 1e4
        }), C.position[2] = -4, k.add(C);
        var S = new u.Mesh;
        S.material = new u.Material(M.gl, {
            vertexShader: d.default,
            fragmentShader: m.default,
            uniforms: {
                color: [1, 1, 1],
                alpha: .5,
                roughness: 1,
                metalness: 0,
                useDash: 0
            },
            blend: !0,
            depthTest: !1
        }), S.geometry = new g.default(M.gl, {
            radius: 1
        }), S.position[2] = 1, k.add(S);
        var T = new u.Mesh;
        T.material = new u.Material(M.gl, {
            vertexShader: d.default,
            fragmentShader: m.default,
            uniforms: {
                color: [1, 1, 1],
                alpha: .5,
                roughness: 1,
                metalness: 0,
                useDash: 0
            },
            blend: !0,
            depthTest: !1
        }), T.geometry = new g.default(M.gl, {
            radius: 1
        }), T.position[2] = 1, k.add(T);
        for (var O = [], A = 0; A < 7; A++) {
            var R = Math.random() * (2 * Math.PI),
                j = new u.Mesh;
            j.material = new u.Material(M.gl, {
                uniforms: {
                    color: [1, 1, 1],
                    alpha: 1,
                    roughness: 1,
                    metalness: 0
                },
                blend: !1,
                depthTest: !1
            }), j.geometry = new h.default(M.gl, {
                radius: 4,
                segments: 10
            }), O.push({
                angle: R,
                mesh: j
            }), k.add(j), j.visible = !1
        }
    }
    var L = function(t) {
        function e() {
            return o(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return s(e, t), a(e, [{
            key: "_onLinkEnter",
            value: function(t) {
                this.props.mode = t.currentTarget.getAttribute("data-mode")
            }
        }, {
            key: "_onLinkLeave",
            value: function(t) {}
        }, {
            key: "created",
            value: function() {
                this.time = 0, this.progress = 1, this._minCircleRadius = 0, this._circleCornerPosition = [0, 0], this._circleCenterPosition = [0, 0], this._deltaX = 0, this._deltaY = 0, this._globalRotation = 0, this._autoRotation = 0
            }
        }, {
            key: "ready",
            value: function() {
                this.$scene = this.querySelector(".js-scene"), this.$scene.appendChild(M.canvas)
            }
        }, {
            key: "resize",
            value: function() {
                if (M.gl) {
                    this._winHeight = window.innerHeight, this._winWidth = window.innerWidth;
                    var t = Math.sqrt(this._winWidth * this._winWidth + this._winHeight * this._winHeight) / 2;
                    this._maxCircleRadius = t, this._winWidth < 700 ? (this._lineCircle1Radius = .5 * Math.min(window.innerWidth, window.innerHeight), this._lineCircle2Radius = .5 * Math.min(window.innerWidth, window.innerHeight)) : (this._lineCircle1Radius = .3 * Math.min(window.innerWidth, window.innerHeight), this._lineCircle2Radius = .3 * Math.min(window.innerWidth, window.innerHeight)), this._currLineCircle1Radius = this._lineCircle1Radius, this._currLineCircle2Radius = this._lineCircle2Radius, this._currLineCircle3Radius = this._lineCircle2Radius, this._isMobile = this._winWidth < 700, M.resize(window.innerWidth, window.innerHeight), E.left = -window.innerWidth / 2, E.right = window.innerWidth / 2, E.top = window.innerHeight / 2, E.bottom = -window.innerHeight / 2, E.updateProjectionMatrix()
                }
            }
        }, {
            key: "_onModeChange",
            value: function() {
                this._globalRotation -= Math.PI / 2
            }
        }, {
            key: "update",
            value: function() {
                if (M.gl && this._playMask && (this.props.isActive || 1 != this.progress) && (this._autoRotation -= .005, !(this._playMask && (this.progress += .02, this.progress > 1 && (this.progress = 1, !this.props.isActive))))) {
                    M.clearColor(0, 0, 0, 0), M.clear(), M.render(k, E), this._circleCornerPosition[0] = this.props.menuPosition[0] - this._winWidth / 2, this._circleCornerPosition[1] = this._winHeight - this.props.menuPosition[1] - this._winHeight / 2;
                    var t = (0, P.default)(.85, .02, .225, .925, this.progress, 1),
                        e = this._minCircleRadius + (this._maxCircleRadius - this._minCircleRadius) * t,
                        i = u.vec2.create();
                    if (i[0] = this._circleCornerPosition[0] + (0 - this._circleCornerPosition[0]) * t, i[1] = this._circleCornerPosition[1] + (0 - this._circleCornerPosition[1]) * t, i[1] += Math.sin(Math.PI * t) * (.5 * this._winHeight) * -1, C.material.uniforms.uInvertMask.value = !this.props.isActive, C.material.uniforms.uMaskRadius.value = e, C.material.uniforms.resolution.value = [window.innerWidth, window.innerHeight], C.material.uniforms.uMaskCenter.value = [(i[0] + .5 * window.innerWidth) / window.innerWidth, (i[1] + .5 * window.innerHeight) / window.innerHeight], this._isMobile) {
                        S.visible = !1, T.visible = !1;
                        for (var n = 0; n < O.length; n++) O[n].mesh.visible = !1
                    } else {
                        S.visible = !0, T.visible = !0, S.rotation[2] += .02 * (this._globalRotation + this._autoRotation - S.rotation[2]), T.rotation[2] += .02 * (this._globalRotation + this._autoRotation - T.rotation[2]);
                        for (var o = 0; o < O.length; o++) O[o].mesh.visible = !0, "solution" == this.props.mode ? (this._currLineCircle1Radius += .0075 * (.8 * this._lineCircle1Radius - this._currLineCircle1Radius), this._currLineCircle2Radius += .015 * (.6 * this._lineCircle2Radius - this._currLineCircle2Radius), this._currLineCircle3Radius += .01 * (.8 * this._lineCircle2Radius - this._currLineCircle3Radius), O[o].mesh.position[0] = Math.cos(O[o].angle + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[1] = Math.sin(O[o].angle + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[2] = 0, O[o].mesh.scale[0] = O[o].mesh.scale[1] = 0 == o ? O[o].mesh.scale[2] = .1 * (0 - O[o].mesh.scale[2]) : O[o].mesh.scale[2] += .1 * (1 - O[o].mesh.scale[2]), S.material.uniforms.uProgress.value += .01 * (1 - S.material.uniforms.uProgress.value), T.material.uniforms.uProgress.value += .01 * (0 - T.material.uniforms.uProgress.value), S.material.uniforms.uDirection.value = 1, T.material.uniforms.uDirection.value = 0, S.scale[0] = this._currLineCircle1Radius, S.scale[1] = S.scale[0], S.material.uniforms.scale.value = S.scale, T.scale[0] = this._currLineCircle2Radius, T.scale[1] = T.scale[0], T.material.uniforms.scale.value = T.scale) : "about" == this.props.mode ? (this._currLineCircle1Radius += .01 * (this._lineCircle1Radius - this._currLineCircle1Radius), this._currLineCircle2Radius += .01 * (.5 * this._lineCircle2Radius - this._currLineCircle2Radius), this._currLineCircle3Radius += .01 * (.5 * this._lineCircle2Radius - this._currLineCircle3Radius), 0 == o ? (O[o].mesh.position[0] = 0, O[o].mesh.position[1] = 0, O[o].mesh.position[2] = 0) : (O[o].mesh.position[0] = Math.cos(2 * Math.PI / 6 * o + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[1] = Math.sin(2 * Math.PI / 6 * o + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[2] = 0), O[o].mesh.scale[0] = O[o].mesh.scale[1] = O[o].mesh.scale[2] += .1 * (1 - O[o].mesh.scale[2]), S.material.uniforms.uProgress.value += .01 * (1 - S.material.uniforms.uProgress.value), T.material.uniforms.uProgress.value += .01 * (0 - T.material.uniforms.uProgress.value), S.material.uniforms.uDirection.value = 1, T.material.uniforms.uDirection.value = 0, S.scale[0] = this._currLineCircle1Radius, S.scale[1] = S.scale[0], S.material.uniforms.scale.value = S.scale, T.scale[0] = this._currLineCircle2Radius, T.scale[1] = T.scale[0], T.material.uniforms.scale.value = T.scale) : "home" == this.props.mode ? (this._currLineCircle1Radius += .01 * (this._lineCircle1Radius - this._currLineCircle1Radius), this._currLineCircle2Radius += .01 * (.7 * this._lineCircle2Radius - this._currLineCircle2Radius), this._currLineCircle3Radius += .01 * (.7 * this._lineCircle2Radius - this._currLineCircle3Radius), 0 == o ? (O[o].mesh.position[0] = Math.cos(O[o].angle + S.rotation[2]) * this._currLineCircle1Radius, O[o].mesh.position[1] = Math.sin(O[o].angle + S.rotation[2]) * this._currLineCircle1Radius, O[o].mesh.position[2] = 2, O[o].mesh.scale[0] = O[o].mesh.scale[1] = O[o].mesh.scale[2] += .1 * (1 - O[o].mesh.scale[2])) : (O[o].mesh.position[0] = Math.cos(O[o].angle + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[1] = Math.sin(O[o].angle + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[2] = 2, O[o].mesh.scale[0] = O[o].mesh.scale[1] = O[o].mesh.scale[2] += .1 * ((1 == o ? 1 : 0) - O[o].mesh.scale[2])), S.material.uniforms.uProgress.value += .01 * (1 - S.material.uniforms.uProgress.value), T.material.uniforms.uProgress.value += .01 * (1 - T.material.uniforms.uProgress.value), S.material.uniforms.uDirection.value = 1, T.material.uniforms.uDirection.value = 1, S.scale[0] = this._currLineCircle1Radius, S.scale[1] = S.scale[0], S.material.uniforms.scale.value = S.scale, T.scale[0] = this._currLineCircle2Radius, T.scale[1] = T.scale[0], T.material.uniforms.scale.value = T.scale) : (this._currLineCircle1Radius += .01 * (.7 * this._lineCircle1Radius - this._currLineCircle1Radius), this._currLineCircle2Radius += .01 * (.5 * this._lineCircle2Radius - this._currLineCircle2Radius), this._currLineCircle3Radius += .01 * (.5 * this._lineCircle2Radius - this._currLineCircle3Radius), O[o].mesh.position[0] = Math.cos(O[o].angle + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[1] = Math.sin(O[o].angle + S.rotation[2]) * this._currLineCircle3Radius, O[o].mesh.position[2] = 2, O[o].mesh.scale[0] = O[o].mesh.scale[1] = O[o].mesh.scale[2] += .1 * (0 - O[o].mesh.scale[2]), S.material.uniforms.uProgress.value += .01 * (0 - S.material.uniforms.uProgress.value), T.material.uniforms.uProgress.value += .01 * (0 - T.material.uniforms.uProgress.value), S.material.uniforms.uDirection.value = 0, T.material.uniforms.uDirection.value = 0, S.scale[0] = this._currLineCircle1Radius, S.scale[1] = S.scale[0], S.material.uniforms.scale.value = S.scale, T.scale[0] = this._currLineCircle2Radius, T.scale[1] = T.scale[0], T.material.uniforms.scale.value = T.scale)
                    }
                }
            }
        }, {
            key: "_onActiveChange",
            value: function() {
                var t = this;
                this.progress = 0, this._playMask = !0, this._globalRotation -= Math.PI / 2, this.props.isActive ? setTimeout(function() {
                    t.props.mode = t.props.defaultMode
                }, 500) : this.props.mode = "default"
            }
        }, {
            key: "detached",
            value: function() {}
        }, {
            key: "events",
            get: function() {
                return {
                    "pointerenter .js-menu-link": "_onLinkEnter",
                    "pointerleave .js-menu-link": "_onLinkLeave"
                }
            }
        }, {
            key: "template",
            get: function() {
                return i(100)
            }
        }, {
            key: "defaultProps",
            get: function() {
                return {
                    menuPosition: {
                        type: "arr",
                        value: [0, 0]
                    },
                    isActive: {
                        type: "bool",
                        value: !1,
                        change: "_onActiveChange"
                    },
                    mode: {
                        type: "string",
                        value: "",
                        change: "_onModeChange"
                    },
                    defaultMode: "home",
                    currentPage: "home"
                }
            }
        }]), e
    }(l.Component);
    (0, l.register)("app-menu", L)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = i(6),
        u = (function(t) {
            t && t.__esModule
        }(l), function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "created",
                value: function() {
                    this._lastWinWidth = 0, this._winWidth = window.innerWidth
                }
            }, {
                key: "ready",
                value: function() {
                    var t = this;
                    this._lines = [], this._words = [], this.$placeholder = this.querySelector(".js-placeholder"), this.originalContent = this.querySelector(".js-content").innerText.replace("-", "&#8209;"), this._words = [];
                    for (var e = this.originalContent.replace(/(\n|\r)/g, " ").replace(/\s+/g, " ").split(" "), i = 0; i < e.length; i++) {
                        var n = document.createElement("span");
                        if (/\*/g.test(e[i])) {
                            var o = document.createElement("span");
                            o.innerHTML = e[i].replace(/\*/g, ""), o.classList.add("u-underline"), n.appendChild(o)
                        } else if ("br" === e[i]) {
                            var r = document.createElement("br");
                            n.appendChild(r)
                        } else n.innerHTML = e[i];
                        if (this._words.push(n), i < e.length - 1) {
                            var s = document.createElement("span");
                            s.innerHTML = " ", this._words.push(s)
                        }
                    }
                    setTimeout(function() {
                        t.resize(!0)
                    }, 2e3)
                }
            }, {
                key: "resize",
                value: function(t) {
                    this._winWidth = window.innerWidth, this._isMobile = this._winWidth < 700;
                    var e = [];
                    if (t || this._isMobile && this._winWidth !== this._lastWinWidth || !this._isMobile) {
                        this._lastWinWidth = this._winWidth, this._words = [];
                        for (var i = this.originalContent.replace(/(\n|\r)/g, " ").replace(/\s+/g, " ").split(" "), n = 0; n < i.length; n++) {
                            var o = document.createElement("span");
                            if (/\*/g.test(i[n])) {
                                var r = document.createElement("span");
                                r.innerHTML = i[n].replace(/\*/g, ""), r.classList.add("u-underline"), o.appendChild(r)
                            } else if ("br" === i[n]) {
                                var s = document.createElement("br");
                                o.appendChild(s)
                            } else o.innerHTML = i[n];
                            if (this._words.push(o), n < i.length - 1) {
                                var a = document.createElement("span");
                                a.innerHTML = " ", this._words.push(a)
                            }
                        }
                        this.$placeholder.innerHTML = "";
                        for (var l = 0, u = "", c = document.createDocumentFragment(), h = 0; h < this._words.length; h++) c.appendChild(this._words[h]);
                        this.$placeholder.appendChild(c);
                        for (var p = 0; p < this._words.length; p++) {
                            var d = this._words[p].getBoundingClientRect().top;
                            0 == l && (l = d), d > l && ("" !== u && " " !== u && "&nbsp;" !== u && e.push(u), u = ""), u += this._words[p].innerHTML, l = d
                        }
                        "" !== u && " " !== u && "&nbsp;" !== u && e.push(u), this.props.lines.splice(0, this.props.lines.length), Array.prototype.push.apply(this.props.lines, e)
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        delay: {
                            type: "f",
                            value: 0
                        },
                        lines: {
                            type: "arr",
                            value: []
                        },
                        minRatio: {
                            type: "f",
                            value: 0
                        },
                        direction: {
                            type: "i",
                            value: 1
                        },
                        useRatio: {
                            type: "bool",
                            value: !0
                        },
                        useMask: {
                            type: "bool",
                            value: !1
                        },
                        debug: {
                            type: "bool",
                            value: !1
                        }
                    }
                }
            }, {
                key: "template",
                get: function() {
                    return i(101)
                }
            }]), e
        }(a.Component));
    (0, a.register)("app-multiline", u)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    for (this.$parent = this.parentNode; this.$parent;) {
                        if ("APP-SLIDESHOW" == this.$parent.tagName) {
                            this.$parent.addItem(this, this.props.index);
                            break
                        }
                        this.$parent = this.$parent.parentNode
                    }
                    this._focusSlide()
                }
            }, {
                key: "detached",
                value: function() {
                    this.$parent && this.$parent.removeItem(this, this.props.index)
                }
            }, {
                key: "_focusSlide",
                value: function() {
                    this.props.index > this.props.currentIndex ? (this.classList.add("is-next"), this.classList.remove("is-prev"), this.classList.remove("is-active")) : this.props.index < this.props.currentIndex ? (this.classList.add("is-prev"), this.classList.remove("is-next"), this.classList.remove("is-active")) : (this.classList.add("is-active"), this.classList.remove("is-prev"), this.classList.remove("is-next"))
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        index: {
                            type: "int",
                            value: 0
                        },
                        currentIndex: {
                            type: "int",
                            value: 0,
                            change: "_focusSlide"
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("app-slide", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "_next",
                value: function() {
                    ++this.props.currentIndex > this.props.items.length - 1 && (this.props.currentIndex = this.props.items.length - 1)
                }
            }, {
                key: "_prev",
                value: function() {
                    --this.props.currentIndex < 0 && (this.props.currentIndex = 0)
                }
            }, {
                key: "_onCurrentIndexChange",
                value: function() {
                    if (this.props.items)
                        for (var t = 0, e = this.props.items.length; t < e; t++) this.props.items[t].props.currentIndex = this.props.currentIndex
                }
            }, {
                key: "addItem",
                value: function(t, e) {
                    t.props.currentIndex = this.props.currentIndex, e ? this.props.items[e] = t : (t.props.index = this.props.items.length, this.props.items.push(t))
                }
            }, {
                key: "removeItem",
                value: function(t, e) {
                    this.props.items.splice(e, 1);
                    for (var i = 0, n = this.props.items.length; i < n; i++) this.props.items[i].props.index = i
                }
            }, {
                key: "template",
                get: function() {
                    return i(102)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        autoplay: {
                            type: "bool",
                            value: !1
                        },
                        active: {
                            type: "bool",
                            value: !1
                        },
                        currentIndex: {
                            type: "int",
                            value: 0,
                            change: "_onCurrentIndexChange"
                        },
                        items: {
                            type: "array",
                            value: []
                        },
                        controls: {
                            type: "bool",
                            value: !0
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("app-slideshow", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "created",
                value: function() {
                    this._vect = [0, 0], this._vectLength = 0, this._pointerX = 0, this._pointerY = 0, this._x = 0, this._y = 0, this._progress = 0, this._offset = [0, 0], this.bindMethods(["_onPointerMove"])
                }
            }, {
                key: "ready",
                value: function() {
                    this._radiusSqrtSmall = this.props.radius * this.props.radius, this._radiusSqrtLarge = 4 * this._radiusSqrtSmall, this._radiusSqrt = this._radiusSqrtSmall, this.$triggerParallax = this.querySelectorAll(".js-trigger-parallax"), this.triggerParallaxRatio = [];
                    for (var t = 0; t < this.$triggerParallax.length; t++) this.triggerParallaxRatio[t] = Number(this.$triggerParallax[t].getAttribute("ratio"))
                }
            }, {
                key: "detached",
                value: function() {
                    document.removeEventListener(a.support.pointermove, this._onPointerMove, !1)
                }
            }, {
                key: "attached",
                value: function() {
                    a.support.touch || document.addEventListener(a.support.pointermove, this._onPointerMove, !1)
                }
            }, {
                key: "resize",
                value: function() {
                    var t = this.getBoundingClientRect();
                    this._offset[0] = t.left, this._offset[1] = t.top
                }
            }, {
                key: "_onPointerMove",
                value: function(t) {
                    this._touchEvent = a.support.touch ? t.touches[0] || t.changedTouches[0] : t, this._pointerX = this._touchEvent.pageX, this._pointerY = this._touchEvent.pageY, this._pointerY -= window.pageYOffset || document.documentElement.scrollTop
                }
            }, {
                key: "update",
                value: function() {
                    if (this.props.active) {
                        if (this._vect[0] = this._offset[0] - this._pointerX, this._vect[1] = this._offset[1] - this._pointerY, this._vectLength = this._vect[0] * this._vect[0] + this._vect[1] * this._vect[1], this._vectLength < this._radiusSqrt && !a.support.touch) {
                            this._isActive = !0, this.classList.add("is-focused"), this._radiusSqrt = this._radiusSqrtLarge, this._x += .25 * (this._pointerX - this._x - this._offset[0] + this.props.marginLeft), this._y += .25 * (this._pointerY - this._y - this._offset[1] + this.props.marginTop), this._progress += .3 * (1 - this._progress);
                            this._vectLength, this._radiusSqrt
                        } else this._x += .2 * (0 - this._x), this._y += .2 * (0 - this._y), this._progress += .3 * (0 - this._progress), this._isActive && (this._isActive = !1, a.EventDispatcher.fire("cursor:unfocus"), this.classList.remove("is-focused"), this._radiusSqrt = this._radiusSqrtSmall);
                        this._x = Math.round(1e3 * this._x) / 1e3, this._y = Math.round(1e3 * this._y) / 1e3;
                        for (var t = 0; t < this.$triggerParallax.length; t++) this.$triggerParallax[t].style[a.support.transform] = "translate(" + this._x * this.triggerParallaxRatio[t] + "px, " + this._y * this.triggerParallaxRatio[t] + "px)" + a.support.translateZ
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        marginLeft: {
                            type: "float",
                            value: 0
                        },
                        marginTop: {
                            type: "float",
                            value: 0
                        },
                        radius: {
                            type: "float",
                            value: 75
                        },
                        active: {
                            type: "bool",
                            value: !0
                        },
                        iconName: ""
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("app-trigger", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    this.$wordsWrapper = this.querySelector(".js-words-wrapper"), this.$originContent = this.querySelector(".js-word-content"), this.words = this.$originContent.innerHTML.trim().split(/\s+/);
                    for (var t = 0; t < this.words.length; t++) this.words[t] += "&nbsp;";
                    Array.prototype.push.apply(this.props.words, this.words)
                }
            }, {
                key: "template",
                get: function() {
                    return i(103)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        delayIn: {
                            type: "f",
                            value: 0
                        },
                        delayOut: {
                            type: "f",
                            value: 0
                        },
                        words: {
                            type: "arr",
                            value: []
                        },
                        step: {
                            type: "f",
                            value: .1
                        },
                        wordClass: ""
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("app-words", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        u = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    this.lastValue = "", this.bindMethods(["_onInputFocus", "_onInputBlur", "onInputReset", "onInputChange"]), this.$input = this.querySelector(".js-input"), this.$input.addEventListener("focus", this._onInputFocus, !1), this.$input.addEventListener("reset", this.onInputReset, !1), this.$input.addEventListener("blur", this._onInputBlur, !1), this.$input.addEventListener("change", this.onInputChange, !1), this.onInputChange()
                }
            }, {
                key: "detached",
                value: function() {
                    this.$input && (this.$input.removeEventListener("focus", this._onInputFocus), this.$input.removeEventListener("reset", this.onInputReset), this.$input.removeEventListener("blur", this._onInputBlur), this.$input.removeEventListener("change", this.onInputChange, !1))
                }
            }, {
                key: "_onInputFocus",
                value: function() {}
            }, {
                key: "_onInputBlur",
                value: function(t) {
                    this.$input.classList.remove("is-focused"), this.props.hasFocusedOnce = !0, this.props.isRequired && "" === this.$input.value ? this.props.isValid = !1 : "email" != this.props.type || l.test(this.$input.value) ? this.props.isValid = !0 : this.props.isValid = !1, this.props.isValid && this.$input.classList.remove("is-error")
                }
            }, {
                key: "onInputReset",
                value: function() {
                    this.props.isValid = !1, this.props.hasFocusedOnce = !1
                }
            }, {
                key: "_clear",
                value: function() {
                    this.$input.value = this.props.value, this.$input.setAttribute("value", this.props.value), this.onInputChange(), this._onInputBlur()
                }
            }, {
                key: "onInputChange",
                value: function(t) {
                    var e = this;
                    this.props.onInputChange(this.$input.value), setTimeout(function() {
                        "" === e.$input.value ? e.classList.remove("is-filled") : e.classList.add("is-filled")
                    }, 0)
                }
            }, {
                key: "template",
                get: function() {
                    return i(104)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        value: "",
                        name: "",
                        label: "",
                        placeholder: "",
                        type: "text",
                        isRequired: {
                            type: "bool",
                            value: !1
                        },
                        isValid: {
                            type: "bool",
                            value: !1
                        },
                        hasFocusedOnce: {
                            type: "bool",
                            value: !1
                        },
                        onInputChange: {
                            type: "function",
                            value: function() {}
                        },
                        maxDate: ""
                    }
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        "focus .js-input": "_onInputFocus",
                        "paste .js-input": "onInputChange",
                        "keyup .js-input": "onInputChange",
                        "pointerdown .js-clear": "_clear"
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("core-input-text", u)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(0),
        u = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), a(e, [{
                key: "_onForceSubmitChange",
                value: function() {
                    this.props.forceSubmit && this.onSubmit()
                }
            }, {
                key: "checkFields",
                value: function() {
                    this.$requiredField = this.querySelectorAll(".js-required"), this.$emailFields = this.querySelectorAll(".js-email"), this.$regFields = this.querySelectorAll("[data-regex]");
                    for (var t = this.props.onCustomCheck(), e = 0, i = this.$requiredField.length; e < i; e++)
                        if ("radio" === this.$requiredField[e].type) {
                            for (var n = !1, o = 0, r = this.$requiredField.length; o < r; o++)
                                if ("radio" == this.$requiredField[o].type && this.$requiredField[e].name == this.$requiredField[o].name && this.$requiredField[o].checked) {
                                    n = !0;
                                    break
                                }
                            n ? (this.$requiredField[e].classList.remove("is-error"), this.$requiredField[e].classList.add("is-success")) : (t = !1, this.$requiredField[e].classList.add("is-error"), this.$requiredField[e].classList.remove("is-success"))
                        } else !this.$requiredField[e].value && "checkbox" !== this.$requiredField[e].type || "" == this.$requiredField[e].value && "checkbox" !== this.$requiredField[e].type || "checkbox" == this.$requiredField[e].type && !this.$requiredField[e].checked ? "file" == this.$requiredField[e].type && this.$requiredField[e].getAttribute("value") && "" !== this.$requiredField[e].getAttribute("value") ? (this.$requiredField[e].classList.remove("is-error"), this.$requiredField[e].classList.add("is-success")) : (t = !1, this.$requiredField[e].classList.add("is-error"), this.$requiredField[e].classList.remove("is-success")) : (this.$requiredField[e].classList.remove("is-error"), this.$requiredField[e].classList.add("is-success"));
                    for (var s = 0, a = this.$emailFields.length; s < a; s++) this.$emailFields[s].value && "" != this.$emailFields[s].value && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.$emailFields[s].value) ? (this.$emailFields[s].classList.remove("is-error"), this.$emailFields[s].classList.add("is-success")) : (t = !1, this.$emailFields[s].classList.add("is-error"), this.$emailFields[s].classList.remove("is-success"));
                    for (var l = 0, u = this.$regFields.length; l < u; l++) new RegExp(this.$regFields[l].getAttribute("data-regex"), "ig").test(this.$regFields[l].value) ? (this.$regFields[l].classList.remove("is-error"), this.$regFields[l].classList.add("is-success")) : (t = !1, this.$regFields[l].classList.add("is-error"), this.$regFields[l].classList.remove("is-success"));
                    return t
                }
            }, {
                key: "onSubmit",
                value: function(t) {
                    t && t.preventDefault(), this.checkFields() && (this.props.formData = this.serialize(this.querySelector(".js-form")))
                }
            }, {
                key: "serialize",
                value: function(t) {
                    var e = void 0,
                        i = {};
                    if ("object" == (void 0 === t ? "undefined" : s(t)) && "FORM" == t.nodeName)
                        for (var n = t.elements.length, o = 0; o < n; o++) {
                            if (e = t.elements[o], e.name && !e.disable && "file" != e.type && "reset" != e.type && "submit" != e.type && "button" != e.type)
                                if ("select-multiple" == e.type)
                                    for (j = t.elements[o].options.length - 1; j >= 0; j--) e.options[j].selected && (i[e.name] = encodeURIComponent(e.options[j].value));
                                else("checkbox" != e.type && "radio" != e.type || e.checked) && (void 0 !== i[e.name] ? ("[object Array]" !== Object.prototype.toString.call(i[e.name]) && (i[e.name] = new Array(i[e.name])), i[e.name].push(encodeURIComponent(e.value))) : i[e.name] = encodeURIComponent(e.value));
                            if ("file" == e.type)
                                for (var r in e.files) e.files.hasOwnProperty(r) && e.files[r] instanceof File && (i[e.name] = e.files[r])
                        }
                    return i
                }
            }, {
                key: "onAjaxSuccess",
                value: function(t) {
                    if (t && "object" !== (void 0 === t ? "undefined" : s(t)) && (t = JSON.parse(t)), this.props.onSuccess(t), this.props.reset) {
                        var e = this.querySelector(".js-form");
                        e.reset();
                        for (var i = e.elements.length, n = i - 1; n >= 0; n--) {
                            if (document.createEventObject) {
                                var o = document.createEventObject();
                                e.elements[n].fireEvent("onchange", o)
                            } else {
                                var o = document.createEvent("HTMLEvents");
                                o.initEvent("change", !0, !0), e.elements[n].dispatchEvent(o)
                            }
                            if (document.createEventObject) {
                                var o = document.createEventObject();
                                e.elements[n].fireEvent("onreset", o)
                            } else {
                                var o = document.createEvent("HTMLEvents");
                                o.initEvent("reset", !0, !0), e.elements[n].dispatchEvent(o)
                            }
                        }
                    }
                }
            }, {
                key: "onAjaxError",
                value: function(t) {
                    this.props.onError(t)
                }
            }, {
                key: "template",
                get: function() {
                    return i(105)
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        submit: "onSubmit"
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        onSuccess: {
                            type: "func",
                            value: function() {}
                        },
                        onError: {
                            type: "func",
                            value: function() {}
                        },
                        action: window.location.href,
                        method: "post",
                        enctype: "multipart/form-data",
                        formData: {
                            value: null
                        },
                        classForm: "",
                        headers: {
                            type: "json",
                            value: null
                        },
                        onCustomCheck: {
                            type: "fn",
                            value: function() {
                                return !0
                            }
                        },
                        forceSubmit: {
                            type: "bool",
                            value: !1,
                            change: "_onForceSubmitChange"
                        },
                        reset: {
                            type: "bool",
                            value: !0
                        },
                        sendOnSrcChange: {
                            type: "bool",
                            value: !0
                        }
                    }
                }
            }]), e
        }(l.Component);
    (0, l.register)("core-ajax-form", u)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = i(121),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(l),
        c = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "_onReload",
                value: function() {
                    this.props.reload && this.load()
                }
            }, {
                key: "ready",
                value: function() {
                    this.props.auto && null != this.props.src && "null" != this.props.src && this.load()
                }
            }, {
                key: "onSrcChange",
                value: function() {
                    this.props.sendOnSrcChange && this.load()
                }
            }, {
                key: "onDataChange",
                value: function() {
                    this.props.sendOnDataChange && this.load()
                }
            }, {
                key: "load",
                value: function() {
                    var t = this;
                    if (this.props.headers.Token = a.EventDispatcher.request("token:get"), this.props.src && "get" == this.props.method.toLowerCase()) {
                        var e = u.default.get(this.props.src);
                        for (var i in this.props.data)
                            if (this.props.data.hasOwnProperty(i))
                                if ("[object Array]" === Object.prototype.toString.call(this.props.data[i]))
                                    for (var n = 0; n < this.props.data[i].length; n++) {
                                        var o = {};
                                        o[i + "[]"] = this.props.data[i][n], e.query(o)
                                    } else {
                                        var r = {};
                                        r[i] = this.props.data[i], e.query(r)
                                    }
                                e.set(this.props.headers).end(function(e, i) {
                            requestAnimationFrame(function() {
                                e ? t.props.onError(e) : t.props.onSuccess(i)
                            })
                        })
                    } else {
                        if (!this.props.src) return;
                        var s = u.default.post(this.props.src);
                        if ("multipart/form-data" !== this.props.contentType) {
                            s.type(this.props.contentType);
                            for (var l in this.props.data)
                                if ("[object Array]" === Object.prototype.toString.call(this.props.data[l])) {
                                    var c = {};
                                    c[l + "[]"] = this.props.data[l], s.send(c)
                                } else {
                                    var h = {};
                                    h[l] = this.props.data[l], s.send(h)
                                }
                        } else
                            for (var l in this.props.data)
                                if (this.props.data[l] instanceof File) s.attach(l, this.props.data[l], this.props.data[l].name);
                                else if ("[object Array]" === Object.prototype.toString.call(this.props.data[l]))
                            for (var p = 0; p < this.props.data[l].length; p++) {
                                var d = {};
                                d[l + "[]"] = this.props.data[l][p], s.field(l + "[]", this.props.data[l][p])
                            } else s.field(l, this.props.data[l]);
                        s.set(this.props.headers).end(function(e, i) {
                            if (!i.body) try {
                                JSON.parse(i.text)
                            } catch (e) {
                                return void t.props.onError("internal server error")
                            }
                            requestAnimationFrame(function() {
                                e ? t.props.onError(e) : t.props.onSuccess(i)
                            })
                        })
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        src: {
                            value: null,
                            change: "onSrcChange"
                        },
                        method: "get",
                        data: {
                            type: "json",
                            value: null,
                            change: "onDataChange"
                        },
                        onSuccess: {
                            type: "func",
                            value: function() {}
                        },
                        onError: {
                            type: "func",
                            value: function() {}
                        },
                        contentType: {
                            type: "string",
                            value: "application/json"
                        },
                        auto: {
                            type: "bool",
                            value: !0
                        },
                        headers: {
                            type: "json",
                            value: {}
                        },
                        reload: {
                            type: "bool",
                            value: !1,
                            change: "_onReload"
                        },
                        sendOnSrcChange: {
                            type: "bool",
                            value: !0
                        },
                        sendOnDataChange: {
                            type: "bool",
                            value: !0
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("core-ajax", c)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "created",
                value: function() {
                    this.bindMethods(["triggerBtn"])
                }
            }, {
                key: "detached",
                value: function() {
                    this.removeEventListener("click", this.triggerBtn, !1)
                }
            }, {
                key: "_onHrefChange",
                value: function() {
                    var t = this.getAttribute("href");
                    this.setAttribute("_href", t), this.setAttribute("href", "javascript:void(0);")
                }
            }, {
                key: "ready",
                value: function() {
                    this._onHrefChange(), this.addEventListener("click", this.triggerBtn, !1)
                }
            }, {
                key: "triggerBtn",
                value: function(t) {
                    t.stopPropagation(), a.EventDispatcher.fire("state:change", [this.props.state, this.props.params])
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        state: null,
                        params: {
                            type: "json",
                            value: null
                        },
                        href: {
                            type: "string",
                            value: "",
                            change: "_onHrefChange"
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("core-btn-state", l), (0, a.register)("core-btn-state-link", l, "a"), (0, a.register)("core-btn-state-button", l, "button")
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    for (this.$parent = this.parentNode; this.$parent;) {
                        if ("CORE-IMG" == this.$parent.tagName) {
                            this._parentNode = this.$parent, this._index = this.$parent.addSource(this.props.src, this.props.query);
                            break
                        }
                        this.$parent = this.$parent.parentNode
                    }
                }
            }, {
                key: "_updateSource",
                value: function() {
                    this._parentNode && this._parentNode.updateSource(this._index, this.props.src, this.props.query)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        src: {
                            type: "string",
                            value: null,
                            change: "_updateSource"
                        },
                        query: {
                            type: "string",
                            value: null,
                            change: "_updateSource"
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("core-img-source", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "created",
                value: function() {
                    this._isLoaded = !1, this._sources = []
                }
            }, {
                key: "ready",
                value: function() {
                    for (this.$parent = this.parentNode; this.$parent;) {
                        if ("SCROLL-OBJECT" == this.$parent.tagName) {
                            this._parentNode = this.$parent, this.$parent._img = this;
                            break
                        }
                        this.$parent = this.$parent.parentNode
                    }
                    this._parentNode || (this.props.isReady = !0)
                }
            }, {
                key: "load",
                value: function() {
                    var t = this;
                    this.props.isReady || this._isLoading || (this._isLoading = !0, this._loadTimer = setTimeout(function() {
                        t.props.isReady = !0, t._onSourceChange()
                    }, 300))
                }
            }, {
                key: "preventLoad",
                value: function() {
                    this._isLoading && (clearTimeout(this._loadTimer), this._isLoading = !1)
                }
            }, {
                key: "_onSourceChange",
                value: function() {
                    var t = this;
                    this._isLoaded = !1, clearTimeout(this._changeTimer), this._changeTimer = setTimeout(function() {
                        for (var e = !1, i = 0; i < t._sources.length; i++) {
                            if ("break" === function(i) {
                                    var n = t._sources[i].query,
                                        o = t._sources[i].src;
                                    if (window.matchMedia(n).matches) {
                                        e = !0;
                                        var r = new Image;
                                        return r.onload = function() {
                                            r = null, t._isLoaded = !0, t.props.hdSrc = o
                                        }, r.src = o, "break"
                                    }
                                }(i)) break
                        }
                        e || console.warn("no query match found for specified source:", t._sources)
                    }, 100)
                }
            }, {
                key: "addSource",
                value: function(t, e) {
                    return this._sources.push({
                        query: e,
                        src: t
                    }), this._onSourceChange(), this._sources.length - 1
                }
            }, {
                key: "updateSource",
                value: function(t, e, i) {
                    void 0 !== this._sources[t] && (this._sources[t].src = e, this._sources[t].query = i, this._onSourceChange())
                }
            }, {
                key: "resize",
                value: function() {
                    this._onSourceChange()
                }
            }, {
                key: "update",
                value: function() {
                    this._isLoaded && this.props.alpha < .99 && (this.props.alpha += .1 * (1 - this.props.alpha), this.props.alpha > .99 && (this.props.alpha = 1))
                }
            }, {
                key: "template",
                get: function() {
                    return i(106)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        alt: "",
                        src: "",
                        hdSrc: "",
                        alpha: {
                            type: "f",
                            value: 0
                        },
                        imgClass: "u-fit-w",
                        onLoaded: {
                            type: "fn",
                            value: function() {}
                        },
                        width: 1,
                        height: 1,
                        cover: {
                            type: "bool",
                            value: !1
                        },
                        isReady: {
                            type: "bool",
                            value: !1
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("core-img", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = i(26),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(l),
        c = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "attached",
                value: function() {
                    u.default.base(this.props.base);
                    for (var t in this.props.routes) this.addRoute(t);
                    (0, u.default)("*", this.notFound.bind(this)), u.default.start(this.props.options)
                }
            }, {
                key: "addRoute",
                value: function(t) {
                    var e = function(e, i) {
                        this.onRoute(t, e, i)
                    };
                    (0, u.default)(t, e.bind(this))
                }
            }, {
                key: "onRoute",
                value: function(t, e, i) {
                    this.props.oldLocation = null == this.props.location ? {
                        path: null,
                        componentId: null
                    } : this.props.location, this.props.location = {
                        regexp: t,
                        path: e.pathname,
                        componentId: this.props.routes[t].componentId,
                        params: e.params,
                        query: e.querystring,
                        completePath: e.path
                    }, this.props.onRouteChange(this.props.location, this.props.oldLocation)
                }
            }, {
                key: "notFound",
                value: function() {
                    setTimeout(function() {
                        (0, u.default)("/404")
                    }, 10)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        routes: {
                            type: "json",
                            value: null
                        },
                        options: {
                            type: "json",
                            value: null
                        },
                        base: "",
                        location: null,
                        oldLocation: null,
                        onRouteChange: {
                            type: "func",
                            value: function() {}
                        },
                        onOpenPopin: {
                            type: "func",
                            value: function() {}
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("core-route", c)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "attached",
                value: function() {
                    this.range = this.props.max - this.props.min, this.sizeProp = "horizontal" === this.props.orientation ? "width" : "height", this.handlerSizeProp = "horizontal" === this.props.orientation ? "handlerWidth" : "handlerHeight", this.offsetProp = "horizontal" === this.props.orientation ? "x" : "y", this.handlerPositionProp = "horizontal" === this.props.orientation ? "x" : "y", this.offset = {
                        x: 0,
                        y: 0
                    }, this.handler = {
                        x: 0,
                        y: 0
                    }, this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this)
                }
            }, {
                key: "detached",
                value: function() {
                    if (a.support.multipointerdown && a.support.multipointerdown.length > 0)
                        for (var t = 0; t < a.support.multipointerdown.length; t++) this.removeEventListener(a.support.multipointerdown[t], this._onPointerDown, !1), document.removeEventListener(a.support.multipointermove[t], this._onPointerMove, !1), document.removeEventListener(a.support.multipointerup[t], this._onPointerUp, !1);
                    else this.removeEventListener(a.support.pointerdown, this._onPointerDown, !1), document.removeEventListener(a.support.pointermove, this._onPointerMove, !1), document.removeEventListener(a.support.pointerup, this._onPointerUp, !1)
                }
            }, {
                key: "ready",
                value: function() {
                    if (this.$handler = this.querySelector(".js-handler"), a.support.multipointerdown && a.support.multipointerdown.length > 0)
                        for (var t = 0; t < a.support.multipointerdown.length; t++) this.addEventListener(a.support.multipointerdown[t], this._onPointerDown, !1), document.addEventListener(a.support.multipointermove[t], this._onPointerMove, !1), document.addEventListener(a.support.multipointerup[t], this._onPointerUp, !1);
                    else this.addEventListener(a.support.pointerdown, this._onPointerDown, !1), document.addEventListener(a.support.pointermove, this._onPointerMove, !1), document.addEventListener(a.support.pointerup, this._onPointerUp, !1);
                    this.resize(), this.onUpdateValue()
                }
            }, {
                key: "onActiveChange",
                value: function() {
                    this.props.active && this.resize()
                }
            }, {
                key: "_onPointerDown",
                value: function(t) {
                    this.resize(), this.isPointerDown = !0;
                    var e = a.support.touch ? t.touches[0].pageX || t.changedTouches[0].pageX : t.clientX,
                        i = a.support.touch ? t.touches[0].pageY || t.changedTouches[0].pageY : t.clientY;
                    this._track(e, i)
                }
            }, {
                key: "_onPointerMove",
                value: function(t) {
                    if (this.isPointerDown) {
                        t && (t.preventDefault(), t.stopPropagation());
                        var e = a.support.touch ? t.touches[0].pageX || t.changedTouches[0].pageX : t.clientX,
                            i = a.support.touch ? t.touches[0].pageY || t.changedTouches[0].pageY : t.clientY;
                        this._track(e, i)
                    }
                }
            }, {
                key: "_onPointerUp",
                value: function() {
                    this.isPointerDown && (this.isPointerDown = !1, this.props.onStop(this.props.value))
                }
            }, {
                key: "_track",
                value: function(t, e) {
                    var i = "horizontal" === this.props.orientation ? t : e,
                        n = this.props.invert ? this.offset[this.offsetProp] + this[this.sizeProp] - i : i - this.offset[this.offsetProp];
                    n < 0 && (n = 0), n > this[this.sizeProp] && (n = this[this.sizeProp]), this.handler[this.handlerPositionProp] = n, this.props.value = this.props.min + this.range / this[this.sizeProp] * n, this.props.onSlide(this.props.value)
                }
            }, {
                key: "resize",
                value: function() {
                    this.height = this.clientHeight, this.width = this.clientWidth, this.hanlderWidth = this.$handler.clientWidth, this.hanlderHeight = this.$handler.clientHeight, this.hanlderHalfWidth = this.hanlderWidth >> 1, this.hanlderHalfHeight = this.hanlderHeight >> 1;
                    this.getBoundingClientRect();
                    this.offset.x = 0, this.offset.y = 0;
                    for (var t = this; t;) t.offsetLeft && (this.offset.x += t.offsetLeft, this.offset.y += t.offsetTop), t = t.parentNode
                }
            }, {
                key: "onUpdateValue",
                value: function() {
                    this.range = this.props.max - this.props.min, this.handler[this.handlerPositionProp] = (this.props.value - this.props.min) / this.range * this[this.sizeProp]
                }
            }, {
                key: "update",
                value: function() {
                    this.$handler && !isNaN(this.handler.x - this.hanlderHalfWidth) && (this.$handler.style[a.support.transform] = "translate(" + this.handler.x + "px, " + this.handler.y + "px) " + a.support.translateZ)
                }
            }, {
                key: "events",
                get: function() {
                    return {}
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        value: {
                            value: 0,
                            change: "onUpdateValue"
                        },
                        min: 0,
                        max: 1,
                        invert: {
                            type: "bool",
                            value: !1
                        },
                        orientation: "horizontal",
                        onSlide: {
                            type: "func",
                            value: function() {}
                        },
                        onStop: {
                            type: "func",
                            value: function() {}
                        },
                        active: {
                            type: "bool",
                            value: !1,
                            change: "onActiveChange"
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("core-slider", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t, e, i, n, o) {
        var r = [i / t, n / e];
        return r = Math.max(r[0], r[1]), {
            width: t * r,
            height: e * r
        }
    }

    function a(t, e) {
        var i = t.split("-");
        return 8 * (i[1] - i[0]) / e
    }
    var l, u, c, h, p = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        d = i(0),
        f = 0,
        m = ["moz", "webkit", "", "ms", "o"],
        v = m.length;
    if (void 0 !== document.cancelFullscreen) l = "requestFullscreen", u = "exitFullscreen", c = "fullscreenchange";
    else
        for (; v--;) "moz" == m[v] && !document.mozFullScreenEnabled || void 0 === document[m[v] + "CancelFullScreen"] || (l = m[v] + "RequestFullScreen", u = m[v] + "CancelFullScreen", c = m[v] + "fullscreenchange", h = "webkit" == m[v] ? m[v] + "IsFullScreen" : m[v] + "FullScreen");
    var g = function(t) {
        function e() {
            return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return r(e, t), p(e, [{
            key: "detached",
            value: function() {
                this.stopProgress()
            }
        }, {
            key: "onCurrentTimeChange",
            value: function() {
                this.seek(this.props.currentTime)
            }
        }, {
            key: "created",
            value: function() {
                f++, this.enabled = !0, this.classList.add("c-video-player"), this.paused = !0, this.muted = !1, this.seeksliding = !1, this.duration = 0, this.currentTime = 0, this.isFullScreen = !1, this.progressTimer = null, this.isFirstPlay = !0, this.mouseMoveTimer = null, this.isControlsHidden = !1, this.onFullScrenChange = this.onFullScrenChange.bind(this), this.onPlayerReady = this.onPlayerReady.bind(this), this.onPlayerStateChange = this.onPlayerStateChange.bind(this), this.onPlayerError = this.onPlayerError.bind(this)
            }
        }, {
            key: "disable",
            value: function() {
                this.enabled = !1, this.pause(), document.getElementById(this.props.uuid + "-video") && (document.getElementById(this.props.uuid + "-video").style.display = "none")
            }
        }, {
            key: "enable",
            value: function() {
                this.enabled = !0, this.props.autoplay && this.play(), document.getElementById(this.props.uuid + "-video") && (document.getElementById(this.props.uuid + "-video").style.display = "block")
            }
        }, {
            key: "_onVolumeDown",
            value: function(t) {
                if (!this.props.controls) return !0;
                this.isPointerDown = !0;
                var e = d.support.touch ? t.touches[0].pageX || t.changedTouches[0].pageX : t.clientX,
                    i = d.support.touch ? t.touches[0].pageY || t.changedTouches[0].pageY : t.clientY;
                this.track(e, i)
            }
        }, {
            key: "_onPointerMove",
            value: function(t) {
                if (this.props.autoHideControls && this.toggleControls(), this.isPointerDown) {
                    t && t.preventDefault();
                    var e = d.support.touch ? t.touches[0].pageX || t.changedTouches[0].pageX : t.clientX,
                        i = d.support.touch ? t.touches[0].pageY || t.changedTouches[0].pageY : t.clientY;
                    this.track(e, i)
                }
            }
        }, {
            key: "_onPointerUp",
            value: function() {
                this.isPointerDown && (this.isPointerDown = !1)
            }
        }, {
            key: "track",
            value: function(t, e) {
                var i = t - this.volumeOffset.x;
                i = Math.min(this.volumeHandlerWidth, Math.max(0, i)), this.props.volume = i / this.volumeHandlerWidth, this.HTMLplayer.volume = this.props.volume
            }
        }, {
            key: "ready",
            value: function() {
                if (this.$content = this.querySelector(".js-content"), this.$volumeHandler = this.querySelector(".js-volume"), null === this.props.src) return void this.props.onReady(this);
                for (l && this.classList.add("is-support-fullscreen"), this._onSrcChange(), this.props.onReady(this), this.$parent = this.parentNode; this.$parent;) {
                    if ("SCROLL-OBJECT" == this.$parent.tagName) {
                        this._parentNode = this.$parent, this.$parent._video = this;
                        break
                    }
                    this.$parent = this.$parent.parentNode
                }
            }
        }, {
            key: "resize",
            value: function() {
                if (d.support.ipad && this.classList.add("is-ipad"), d.support.iphone && this.classList.add("is-iphone"), d.support.touch && this.classList.add("is-touch"), this.props.cover && (this._parentWidth = this.parentNode.clientWidth, this._parentHeight = this.parentNode.clientHeight, this._computedSize = s(1280, 720, this._parentWidth, this._parentHeight, !1), this._offsetX = .5 * Math.round(this._parentWidth - this._computedSize.width), this._offsetY = .5 * Math.round(this._parentHeight - this._computedSize.height), this.$content.style.width = Math.round(this._computedSize.width) + "px", this.$content.style.height = Math.round(this._computedSize.height) + "px", (this._offsetX || this._offsetY) && (this.$content.style[d.support.transform] = "translate(" + this._offsetX + "px, " + this._offsetY + "px) " + d.support.translateZ)), this.props.controls && null !== this.$volumeHandler) {
                    this.volumeHandlerWidth = this.$volumeHandler.clientWidth, this.volumeHandlerHeight = this.$volumeHandler.clientHeight, this.volumeHandlerHalfWidth = this.volumeHandlerWidth >> 1, this.volumeHandlerHalfHeight = this.volumeHandlerHeight >> 1;
                    this.getBoundingClientRect();
                    this.volumeOffset = this.volumeOffset || {}, this.volumeOffset.x = 0, this.volumeOffset.y = 0;
                    for (var t = this.$volumeHandler; t;) t.offsetLeft && (this.volumeOffset.x += t.offsetLeft, this.volumeOffset.y += t.offsetTop), t = t.parentNode
                }
            }
        }, {
            key: "_onSrcChange",
            value: function() {
                var t = this;
                null !== this.props.src && setTimeout(function() {
                    t.HTMLplayer = t.querySelector(".js-native-video"), t.createHTML5Player(), t.classList.add("is-native")
                }, 100)
            }
        }, {
            key: "onSliderSlide",
            value: function(t) {
                this.seeksliding = !0, this.stopProgress()
            }
        }, {
            key: "onSliderStop",
            value: function(t) {
                this.seeksliding = !1, this.seek(t * this.duration), this.startProgress()
            }
        }, {
            key: "getDashParams",
            value: function(t) {
                try {
                    var e = t.querySelectorAll("BaseURL")[0].textContent.toString(),
                        i = t.querySelectorAll("Representation"),
                        n = i[0].getAttribute("mimeType"),
                        o = i[0].getAttribute("codecs"),
                        r = i[0].getAttribute("width"),
                        s = i[0].getAttribute("height"),
                        a = i[0].getAttribute("bandwidth"),
                        l = t.querySelectorAll("Initialization"),
                        u = l[0].getAttribute("range"),
                        c = (t.querySelectorAll("SegmentURL"), t.querySelectorAll("Period"));
                    c[0].getAttribute("duration"), t.querySelectorAll("SegmentList");
                    return console.log("\n          Media file:  " + e + "\n          Type: " + n + "\n          Codecs: " + o + "\n          Width: " + r + "\n          Height: " + s + "\n          Bandwidth: " + a + "\n          range: " + u + "\n          Segment length: 0 seconds\n          Duration: 0\n        "), {
                        file: e,
                        type: n,
                        codecs: o,
                        width: r,
                        height: s,
                        bandwidth: a,
                        range: u,
                        segmentLength: 0,
                        duration: 0
                    }
                } catch (t) {
                    return void console.warn(t)
                }
            }
        }, {
            key: "setupDashVideo",
            value: function() {
                var t = this;
                if (!window.MediaSource) return void console.warn("mediasource or syntax not supported");
                this._dashMediaSource = new window.MediaSource, this.props.currentSrc = URL.createObjectURL(this._dashMediaSource), this._dashMediaSource.addEventListener("sourceopen", function(e) {
                    try {
                        t._dashVideoSource = t._dashMediaSource.addSourceBuffer('video/mp4; codecs="' + t._dashParams.codecs + '"'), t.initDashVideo()
                    } catch (e) {
                        return void console.warn("Exception calling addSourceBuffer for video", e)
                    }
                }, !1)
            }
        }, {
            key: "_onDashVideoSourceUpdate",
            value: function() {}
        }, {
            key: "_dashGetStarted",
            value: function() {}
        }, {
            key: "initDashVideo",
            value: function() {
                var t = this,
                    e = new XMLHttpRequest;
                if (!this._dashParams.range && !this._dashParams.file) return void console.warn('cannot init dash video because no "range" or "file" was found in dashParams');
                e.open("GET", this._dashParams.file), this._dashSegCheck = (.8 * a(this._dashParams.range, this._dashParams.bandwidth)).toFixed(3), e.send(), e.responseType = "arraybuffer";
                try {
                    e.addEventListener("readystatechange", function() {
                        if (e.readyState == e.DONE) try {
                            t._dashVideoSource.appendBuffer(new Uint8Array(e.response)), t._onDashVideoSourceUpdate = t._onDashVideoSourceUpdate.bind(t), t._dashVideoSource.addEventListener("update", t._onDashVideoSourceUpdate, !1)
                        } catch (t) {}
                    }, !1)
                } catch (t) {
                    console.warn(t)
                }
            }
        }, {
            key: "clearDashVars",
            value: function() {}
        }, {
            key: "createHTML5Player",
            value: function() {
                var t = this;
                if (/\.mpd$/g.test(this.props.src)) {
                    console.warn("Dash MPEG4 detected " + this.props.src, this._dashPlayer);
                    var e = this.props.src;
                    if ("" !== e) {
                        var i = new XMLHttpRequest;
                        i.open("GET", e, !0), i.responseType = "text", i.send(), i.onreadystatechange = function() {
                            if (i.readyState == i.DONE) {
                                var e = i.response,
                                    n = new DOMParser,
                                    o = n.parseFromString(e, "text/xml", 0);
                                t._dashParams = t.getDashParams(o), t._dashParams.file = t.props.src.replace(/[^\/]*\.mpd$/g, "") + t._dashParams.file, t.setupDashVideo(), t.clearDashVars()
                            }
                        }, i.addEventListener("error", function(t) {
                            log("Error: " + t + " Could not load url.")
                        }, !1)
                    }
                } else this.props.currentSrc = this.props.src, this.HTMLplayer && (this.HTMLplayer.removeEventListener("loadedmetadata", this.onPlayerReady, !1), this.HTMLplayer.removeEventListener("play", this.onPlayerStateChange, !1), this.HTMLplayer.removeEventListener("pause", this.onPlayerStateChange, !1), this.HTMLplayer.removeEventListener("ended", this.onPlayerStateChange, !1), this.HTMLplayer.removeEventListener("progress", this.onPlayerStateChange, !1), this.HTMLplayer.removeEventListener("error", this.onPlayerError, !1), this.HTMLplayer.addEventListener("loadedmetadata", this.onPlayerReady, !1), this.HTMLplayer.addEventListener("play", this.onPlayerStateChange, !1), this.HTMLplayer.addEventListener("pause", this.onPlayerStateChange, !1), this.HTMLplayer.addEventListener("ended", this.onPlayerStateChange, !1), this.HTMLplayer.addEventListener("progress", this.onPlayerStateChange, !1), this.HTMLplayer.addEventListener("error", this.onPlayerError, !1))
            }
        }, {
            key: "onPlayerReady",
            value: function() {
                this.classList.add("is-ready"), this.duration = this.getDuration(), this.addListenners(), this.fire("ready"), d.support.touch && d.support.smallscreen || d.support.ipad || (this.props.autoplay && !1 !== this.paused && this.enabled && this.play(), this.props.preload && (this._isPreload = !0, this.play()))
            }
        }, {
            key: "onPlayerError",
            value: function(t) {
                if (void 0 !== t.target.error) {
                    switch (t.target.error.code) {
                        case t.target.error.MEDIA_ERR_ABORTED:
                            console.warn("You aborted the video playback.");
                            break;
                        case t.target.error.MEDIA_ERR_NETWORK:
                            console.warn("A network error caused the video download to fail part-way.");
                            break;
                        case t.target.error.MEDIA_ERR_DECODE:
                            console.warn("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");
                            break;
                        case t.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            console.warn("The video could not be loaded, either because the server or network failed or because the format is not supported.");
                            break;
                        default:
                            console.warn("An unknown error occurred.")
                    }
                    this.fire("error")
                }
            }
        }, {
            key: "onPlayerStateChange",
            value: function(t) {
                if (this.ischangingQuality) return void this.classList.add("is-loading");
                1 == this.props.mute && this.mute(), "ended" != t.type && 0 != t.data || this.onPlayerEnded(), "play" != t.type && 1 != t.data || this.onPlayerPlay(), "pause" != t.type && 2 != t.data || this.onPlayerPause(), "progress" == t.type && this.onPlayerBuffer()
            }
        }, {
            key: "onPlayerBuffer",
            value: function() {
                this.fire("buffer"), this.classList.add("is-loading")
            }
        }, {
            key: "addListenners",
            value: function() {
                this.props.controls && d.EventDispatcher.on("key:escape", this.cancelFullScreen, this)
            }
        }, {
            key: "toggleControls",
            value: function() {
                var t = this;
                clearTimeout(this.mouseMoveTimer), this.isControlsHidden && (this.isControlsHidden = !1, this.classList.remove("is-no-controls")), this.mouseMoveTimer = setTimeout(function() {
                    t.isControlsHidden = !0, t.classList.add("is-no-controls")
                }, 2e3)
            }
        }, {
            key: "toggleSound",
            value: function(t) {
                this.muted ? this.unmute() : this.mute()
            }
        }, {
            key: "onPlayerPlay",
            value: function(t) {
                var e = this;
                this.duration = this.getDuration(), this.classList.add("is-playing"), this.classList.remove("is-paused"), this._loadingTimer = setTimeout(function() {
                    e.classList.remove("is-loading")
                }, 10), this.props.isPlaying = !0, this.paused = !1, this.startProgress(), this.props.controls && this.toggleControls(), this.isFirstPlay && (this.isFirstPlay = !1, this.duration = this.getDuration()), this.classList.add("has-started"), this.props.onStart(this), this._isPreload && !this.props.autoplay && (this._isPreload = !1, this.pause()), this.fire("play")
            }
        }, {
            key: "onPlayerPause",
            value: function() {
                this.classList.remove("is-playing"), this.classList.add("is-paused"), this.classList.remove("is-loading"), this.paused = !0, this.props.isPlaying = !1, this.stopProgress(), this.fire("pause"), clearTimeout(this.mouseMoveTimer), this.isControlsHidden && (this.isControlsHidden = !1, this.classList.remove("is-no-controls"))
            }
        }, {
            key: "onPlayerEnded",
            value: function() {
                var t = this;
                this.fire("ended"), this.props.onEnded(this), setTimeout(function() {
                    t.onPlayerPause()
                }, 40)
            }
        }, {
            key: "togglePlay",
            value: function() {
                this[this.paused ? "play" : "pause"]()
            }
        }, {
            key: "toggleFullScreen",
            value: function() {
                this.isFullScreen ? this.cancelFullScreen() : this.requestFullScreen()
            }
        }, {
            key: "requestFullScreen",
            value: function() {
                var t = this;
                this.isFullScreen = !0, this.isPausedBeforeFullScreen = this.paused, this.pause(), this.classList.add("is-fullscreen"), d.EventDispatcher.fire("video:enterfullscreen");
                for (var e = this; e.parentNode && e.parentNode.getAttribute;) e.parentNode.classList.add("is-branch"), e = e.parentNode;
                l ? (document.addEventListener(c, this.onFullScrenChange), this[l]()) : setTimeout(function() {
                    1 == t.isPausedBeforeFullScreen ? t.pause() : t.play()
                }, 0), document.getElementsByTagName("body")[0].classList.add("is-fullscreen")
            }
        }, {
            key: "onFullScrenChange",
            value: function() {
                document[h] || (document.removeEventListener(c, this.onFullScrenChange), this.isFullScreen && this.cancelFullScreen()), 1 == this.isPausedBeforeFullScreen ? this.pause() : this.play()
            }
        }, {
            key: "cancelFullScreen",
            value: function() {
                var t = this;
                this.isFullScreen = !1, this.isPausedBeforeFullScreen = this.paused, this.pause(), this.classList.remove("is-fullscreen");
                for (var e = this; e.parentNode && e.parentNode.getAttribute;) e.parentNode.classList.remove("is-branch"), e = e.parentNode;
                u ? document[u]() : setTimeout(function() {
                    1 == t.isPausedBeforeFullScreen ? t.pause() : t.play()
                }, 0), document.getElementsByTagName("body")[0].classList.remove("is-fullscreen"), d.EventDispatcher.fire("video:leavefullscreen")
            }
        }, {
            key: "play",
            value: function() {
                this.paused && (void 0 !== this._dashPlayer ? this._dashPlayer.play() : this.HTMLplayer && this.HTMLplayer.play())
            }
        }, {
            key: "pause",
            value: function() {
                this.paused || (void 0 !== this._dashPlayer ? this._dashPlayer.pause() : this.HTMLplayer && (this.stopProgress(), this.HTMLplayer.pause()))
            }
        }, {
            key: "onActiveChange",
            value: function() {
                this.props.active ? (this.seek(0, !1), this.play()) : (this.pause(), this.seek(0))
            }
        }, {
            key: "onForceStop",
            value: function() {
                var t = this;
                this.props.forceStop && (this.seek(0, !0), setTimeout(function() {
                    t.pause()
                }, 4))
            }
        }, {
            key: "onSeekChange",
            value: function() {
                this.seek(this.props.seekTo)
            }
        }, {
            key: "changePoster",
            value: function(t) {
                this.props.poster = t
            }
        }, {
            key: "unmute",
            value: function() {
                this.HTMLplayer && (this.HTMLplayer.muted = !1, this.muted = !1, this.classList.remove("is-muted"))
            }
        }, {
            key: "mute",
            value: function() {
                this.HTMLplayer && (this.HTMLplayer.muted = !0, this.muted = !0, this.classList.add("is-muted"))
            }
        }, {
            key: "seek",
            value: function(t, e) {
                void 0 !== this._dashPlayer ? this._dashPlayer.seek(t) : this.HTMLplayer && (this.HTMLplayer.currentTime = t)
            }
        }, {
            key: "startProgress",
            value: function() {
                clearTimeout(this.progressTimer), this.updateTime()
            }
        }, {
            key: "stopProgress",
            value: function() {
                clearTimeout(this.progressTimer), this.progressTimer = null
            }
        }, {
            key: "updateTime",
            value: function(t, e) {
                var i = this;
                this.currentTime = this.getCurrentTime(), this.props.controls && (this.props.timelineValue = this.currentTime / this.duration), this.progressTimer = setTimeout(function() {
                    i.updateTime()
                }, 100), this.props.loop && this.currentTime >= this.duration - .05 && this.seek(0), this.props.onTimeupdate(this, this.currentTime)
            }
        }, {
            key: "setTimeCount",
            value: function() {
                this.formatTime(1e3 * this.currentTime), this.formatTime(1e3 * this.duration)
            }
        }, {
            key: "formatTime",
            value: function(t) {
                var e = t / 1e3 / 60 << 0,
                    i = t / 1e3 % 60 << 0,
                    n = "";
                return n += e < 10 ? "0" : "", n += e + ":", n += i < 10 ? "0" : "", n += i
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.HTMLplayer.currentTime
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.HTMLplayer.duration
            }
        }, {
            key: "destroy",
            value: function() {
                d.EventDispatcher.off("key:escape", this.cancelFullScreen, this)
            }
        }, {
            key: "template",
            get: function() {
                return i(107)
            }
        }, {
            key: "events",
            get: function() {
                return {
                    "click .js-video-big-play": "togglePlay",
                    "click .js-video-play": "togglePlay",
                    "click .js-video-fullscreen": "toggleFullScreen",
                    "pointerdown .js-volume": "_onVolumeDown",
                    pointermove: "_onPointerMove",
                    pointerup: "_onPointerUp"
                }
            }
        }, {
            key: "defaultProps",
            get: function() {
                return {
                    src: {
                        type: "string",
                        value: null,
                        change: "_onSrcChange"
                    },
                    currentSrc: {
                        type: "string",
                        value: null
                    },
                    poster: {
                        type: "string",
                        value: ""
                    },
                    wmode: {
                        type: "string",
                        value: "transparent"
                    },
                    active: {
                        type: "bool",
                        value: !0,
                        change: "onActiveChange"
                    },
                    forceStop: {
                        type: "bool",
                        value: !1,
                        change: "onForceStop"
                    },
                    controls: {
                        type: "bool",
                        value: !0
                    },
                    showBigPlay: {
                        type: "bool",
                        value: !0
                    },
                    autoHideControls: {
                        type: "bool",
                        value: !0
                    },
                    autoplay: {
                        type: "bool",
                        value: !1
                    },
                    mute: {
                        type: "bool",
                        value: !1
                    },
                    loop: {
                        type: "bool",
                        value: !1
                    },
                    showinfo: {
                        type: "bool",
                        value: !1
                    },
                    rel: {
                        type: "int",
                        value: 0
                    },
                    uuid: {
                        type: "string",
                        value: "yt-" + f
                    },
                    quality: "auto",
                    timelineValue: {
                        type: "float",
                        value: null
                    },
                    onReady: {
                        type: "func",
                        value: function() {}
                    },
                    onEnded: {
                        type: "fn",
                        value: function() {}
                    },
                    onPlay: {
                        type: "fn",
                        value: function() {}
                    },
                    onStart: {
                        type: "fn",
                        value: function() {}
                    },
                    onTimeupdate: {
                        type: "fn",
                        value: function() {}
                    },
                    currentTime: {
                        type: "float",
                        value: 0,
                        change: "onCurrentTimeChange"
                    },
                    isPlaying: {
                        type: "bool",
                        value: !1
                    },
                    preload: {
                        type: "bool",
                        value: !1
                    },
                    load: {
                        type: "bool",
                        value: !0
                    },
                    cover: {
                        type: "bool",
                        value: !1
                    },
                    useStripe: {
                        type: "bool",
                        value: !0
                    },
                    stripeColor: "#000000",
                    volume: {
                        type: "f",
                        value: 1
                    }
                }
            }
        }]), e
    }(d.Component);
    (0, d.register)("core-video", g)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "created",
                value: function() {
                    this._selectNode = null
                }
            }, {
                key: "ready",
                value: function() {
                    this.$option = this.querySelector("option"), this._addToSelect()
                }
            }, {
                key: "_addToSelect",
                value: function() {
                    for (var t = this.parentNode; t;) {
                        if ("LIGHT-UI-SELECT" == t.tagName) {
                            this._selectNode = t, this._selectNode.addOption(this);
                            break
                        }
                        t = t.parentNode
                    }
                }
            }, {
                key: "detached",
                value: function() {
                    this._selectNode && this._selectNode.removeOption(this)
                }
            }, {
                key: "template",
                get: function() {
                    return i(108)
                }
            }, {
                key: "events",
                get: function() {
                    return {}
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        value: {
                            type: "string",
                            value: ""
                        },
                        selected: {
                            type: "bool",
                            value: !1
                        },
                        index: {
                            type: "int",
                            value: 0
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("light-ui-select-option", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "created",
                value: function() {
                    this._options = []
                }
            }, {
                key: "ready",
                value: function() {
                    this.$select = this.querySelector(".js-select");
                    for (var t = 0; t < this._options.length; t++) this._options[t]._isAppended || (this.$select.appendChild(this._options[t].$option), this._options[t]._isAppended = !0)
                }
            }, {
                key: "onValueChange",
                value: function(t) {
                    this.currentValue = t.currentTarget.value, this.props.onValueChange({
                        currentTarget: this.$select
                    }, this.currentValue)
                }
            }, {
                key: "addOption",
                value: function(t) {
                    this._options.push(t), this._updateChildNodes(), this.$select && (this.$select.appendChild(t.$option), t._isAppended = !0)
                }
            }, {
                key: "removeOption",
                value: function(t) {
                    if (this._options.splice(t.props.index, 1), this._updateChildNodes(), this.$select)
                        for (var e = 0; e < this._options.length; e++) this._options[e].$option.parentNode && this._options[e].$option.parentNode.removeChild(this._options[e].$option)
                }
            }, {
                key: "_updateChildNodes",
                value: function() {
                    for (var t = 0; t < this._options.length; t++) this._options[t].props.index = t
                }
            }, {
                key: "template",
                get: function() {
                    return i(109)
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        "change .js-select": "onValueChange"
                    }
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        name: {
                            type: "string",
                            value: ""
                        },
                        selectClass: {
                            type: "string",
                            value: ""
                        },
                        onValueChange: {
                            type: "fn",
                            value: function() {}
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("light-ui-select", l)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(0),
        u = i(6),
        c = n(u),
        h = i(5),
        p = n(h),
        d = function(t) {
            function e() {
                return o(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return s(e, t), a(e, [{
                key: "created",
                value: function() {
                    this._smoothedScroll = 0, this._ratio = 0, this._swing = 0, this._offset = [0, 0], this._position = [0, 0], this._worldPosition = [0, 0], this._screenPosition = [0, 0], this._smoothedPosition = [0, 0], this._alpha = 1, this._delta = 0, this._navLeft = 0, this._navTop = 0, this._navWidth = 0, this._navHeight = 0, this._img = null, this._lastPosition = [0, 0], this._zoom = 1
                }
            }, {
                key: "ready",
                value: function() {
                    var t = this;
                    this.props.debug && (this.debug = document.createElement("div"), this.debug.style.color = "red", this.debug.style.position = "absolute", this.debug.style.top = 0, this.debug.style.left = 0, this.debug.style.width = "100%", this.debug.style.height = "100%", this.debug.style.lineHeight = "1", this.debug.style.fontSize = "12px", this.debug.style.border = "solid 1px red", this.debug.style.background = "rgba(0,255,0,0.1)", this.debug.style.pointerEvents = "none", this.debug.style.paddingTop = "10px", this.debug.style.display = "none", this.appendChild(this.debug)), this._scrollParent = this._getScrollParent(), this.props.mask && (this.style.overflow = "hidden"), setTimeout(function() {
                        t.resize()
                    }, 1e3), l.EventDispatcher.on("nav:position", this._getNavPosition, this)
                }
            }, {
                key: "_getNavPosition",
                value: function(t, e, i, n) {
                    this._navLeft = t, this._navTop = e, this._navWidth = i, this._navHeight = n
                }
            }, {
                key: "_getScrollParent",
                value: function() {
                    for (var t = this.parentNode; t;) {
                        if ("SCROLL-OBJECT" == t.tagName) return t;
                        t = t.parentNode
                    }
                    return null
                }
            }, {
                key: "update",
                value: function() {
                    var t = this;
                    this._worldPosition[0] = 0, this._worldPosition[1] = 0, this._scrollParent && (this._worldPosition[0] = this._scrollParent._worldPosition[0], this._worldPosition[1] = this._scrollParent._worldPosition[1]), this._worldPosition[0] += this._offsetLeft, this._worldPosition[1] += this._offsetTop, this._position[0] = 0, this._position[1] = 0, this._ratio = this.props.ratio, this._worldPosition[0] += this.props.position[0], this._worldPosition[1] += this.props.position[1], this._smoothedPosition[0] += (this._worldPosition[0] - this._smoothedPosition[0]) * this.props.ratio, this._smoothedPosition[1] += (this._worldPosition[1] - this._smoothedPosition[1]) * this.props.ratio, this._position[0] += this._smoothedPosition[0] - this._worldPosition[0], this._position[1] += this._smoothedPosition[1] - this._worldPosition[1];
                    var e = this._screenPosition[1] + .5 * this._height - .5 * this._winHeight;
                    if (this._position[1] += e / this._winHeight * .5 * this.props.z, this._worldPosition[0] += this._position[0], this._worldPosition[1] += this._position[1], this._position[0] += this.props.position[0], this._position[1] += this.props.position[1], this.props.sticky && this._smoothedPosition[1] > 0 && (this._position[1] += -1 * this._smoothedPosition[1]), this._screenPosition[0] = this._smoothedPosition[0], this._screenPosition[1] = this._smoothedPosition[1], this.props.zoom) {
                        var i = (0, p.default)(.895, .03, .685, .22, Math.max(0, Math.min(1, this._screenPosition[1] / (1.25 * this._winHeight))), 1);
                        this._zoom = 1 + i
                    }
                    var n = "";
                    this._screenPosition[1] > -this._height && this._screenPosition[1] < this._winHeight ? (n += " translate(" + this._position[0] + "px, " + this._position[1] + "px) translateZ(0)", 0 !== this.props.rotation && (n += " rotate(" + this.props.rotation + "deg)"), 1 === this.props.scale && 1 === this._zoom || (n += " scale(" + this.props.scale * this._zoom + ")"), this._screenPosition[1] < this._winDeltas && this.props.setActive && !this._isActive && (this._isActive = !0, this._setActiveTimer = setTimeout(function() {
                        t.classList.add("is-active")
                    }, this._isMobile ? 1e3 * this.props.delay : 1e3 * this.props.delay + 300)), this._bodyMovin && this._bodyMovin.play(), this._video && this._video.props.autoplay && this._video.play(), this._img && this._img.load(), this.style.visibility = "visible", this.props.setActive ? this._isActive ? this.style.opacity = 1 : this.style.opacity = 0 : this.style.opacity = 1, this.props.isLight && l.EventDispatcher.fire("header:mask", [this._screenPosition[0], this._screenPosition[1], this._width, this._height])) : (this.props.setActive && (clearTimeout(this._setActiveTimer), this._isActive = !1, this.classList.remove("is-active")), this._bodyMovin && this._bodyMovin.pause(), this._img && this._img.preventLoad(), this._video && this._video.pause(), n = "translateY(-200%)", this.style.opacity = 0, this.style.visibility = "hidden", l.EventDispatcher.fire("header:mask", [this._screenPosition[0], this._screenPosition[1], this._width, this._height])), this.props.debug && (this.debug.innerHTML = "active:" + this._offsetTop), this._isMobile ? this.style[l.support.transform] = "none" : this.style[l.support.transform] = n
                }
            }, {
                key: "resize",
                value: function() {
                    this.style.visibility = "visible", this._isActive = !1, this._height = this.clientHeight, this._width = this.clientWidth, this._offsetTop = (0, c.default)(this, this._scrollParent || document).top, this._offsetLeft = (0, c.default)(this, this._scrollParent || document).left, this._winDeltas = window.innerHeight, this._winHeight = window.innerHeight, this._winWidth = window.innerWidth, this._isMobile = window.innerWidth < 700
                }
            }, {
                key: "template",
                get: function() {
                    return i(110)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        scroll: {
                            type: "float",
                            value: 0
                        },
                        ratio: {
                            type: "float",
                            value: 1
                        },
                        swing: {
                            type: "f",
                            value: 0
                        },
                        debug: {
                            type: "bool",
                            value: !1
                        },
                        position: {
                            type: "arr",
                            value: [0, 0]
                        },
                        rotation: {
                            type: "f",
                            value: 0
                        },
                        fade: {
                            type: "bool",
                            value: !0
                        },
                        z: {
                            type: "f",
                            value: 0
                        },
                        setActive: {
                            type: "bool",
                            value: !0
                        },
                        scale: {
                            type: "f",
                            value: 1
                        },
                        parallax: {
                            type: "bool",
                            value: !1
                        },
                        mask: {
                            type: "bool",
                            value: !1
                        },
                        maskDelay: {
                            type: "f",
                            value: 0
                        },
                        maskDirection: "up",
                        maskClass: "",
                        useBackground: {
                            type: "bool",
                            value: !1
                        },
                        backgroundDelay: {
                            type: "f",
                            value: .2
                        },
                        backgroundColor: "#fff",
                        isDark: {
                            type: "bool",
                            value: !1
                        },
                        delay: {
                            type: "f",
                            value: 0
                        },
                        sticky: {
                            type: "bool",
                            value: !1
                        },
                        zoom: {
                            type: "bool",
                            value: !1
                        },
                        isLight: {
                            type: "bool",
                            value: !1
                        }
                    }
                }
            }]), e
        }(l.Component);
    (0, l.register)("scroll-object", d)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    var t = this;
                    this.props.onReady(), setTimeout(function() {
                        t.props.isReady = !0, t.props.onContentChange()
                    }, 1e3)
                }
            }, {
                key: "resize",
                value: function() {
                    this.props.onContentChange()
                }
            }, {
                key: "template",
                get: function() {
                    return i(111)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        scroll: {
                            type: "f",
                            value: 0
                        },
                        direction: {
                            type: "f",
                            value: 1
                        },
                        onReady: {
                            type: "fn",
                            value: function() {}
                        },
                        onContentChange: {
                            type: "fn",
                            value: function() {}
                        },
                        isReady: {
                            type: "bool",
                            value: !1
                        },
                        content: {
                            type: "json",
                            value: null
                        },
                        wsRoot: "",
                        isMenuActive: {
                            type: "bool",
                            value: !1
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("page-404", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "created",
                value: function() {
                    this._slideShowPosition = [0, 0]
                }
            }, {
                key: "ready",
                value: function() {
                    var t = this;
                    this.props.onReady(), setTimeout(function() {
                        t.props.isReady = !0, t.props.onContentChange()
                    }, 1e3), this.$staff = this.querySelectorAll(".js-staff"), this.$staffMobile = this.querySelectorAll(".js-staff-mobile"), this.$teamWrapper = this.querySelector(".js-team-wrapper"), this._staffWidth = 0, this.resize(), a.EventDispatcher.fire("interface:show"), setTimeout(function() {
                        a.EventDispatcher.fire("resize")
                    }, 1e3)
                }
            }, {
                key: "resize",
                value: function() {
                    this.$staff = this.querySelectorAll(".js-staff"), this._isMobile = window.innerWidth < 700, this.props.onContentChange();
                    var t = 0;
                    if (this._isMobile);
                    else
                        for (var e = 0; e < this.$staff.length; e++) t += this.$staff[e].clientWidth;
                    this.totalStaffWidth = t, this._staffWidth = Math.abs(t - this.$teamWrapper.clientWidth)
                }
            }, {
                key: "onSliderSlide",
                value: function(t) {
                    this._slideShowPosition[0] = t * this._staffWidth * -1
                }
            }, {
                key: "onSliderStop",
                value: function(t) {}
            }, {
                key: "update",
                value: function() {
                    this.props.slideshowPosition[0] += .1 * (this._slideShowPosition[0] - this.props.slideshowPosition[0])
                }
            }, {
                key: "template",
                get: function() {
                    return i(112)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        scroll: {
                            type: "f",
                            value: 0
                        },
                        direction: {
                            type: "f",
                            value: 1
                        },
                        onReady: {
                            type: "fn",
                            value: function() {}
                        },
                        onContentChange: {
                            type: "fn",
                            value: function() {}
                        },
                        isReady: {
                            type: "bool",
                            value: !1
                        },
                        content: {
                            type: "json",
                            value: null
                        },
                        data: {
                            type: "json",
                            value: i(94)
                        },
                        slideshowPosition: {
                            type: "arr",
                            value: [0, 0]
                        },
                        wsRoot: ""
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("page-about", l)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    var t = this;
                    this.props.onReady(), setTimeout(function() {
                        t.props.isReady = !0, t.props.onContentChange()
                    }, 1e3), a.EventDispatcher.fire("interface:show")
                }
            }, {
                key: "resize",
                value: function() {
                    this.props.onContentChange()
                }
            }, {
                key: "_backToTop",
                value: function() {
                    window.scrollTo(0, 0)
                }
            }, {
                key: "template",
                get: function() {
                    return i(113)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        scroll: {
                            type: "f",
                            value: 0
                        },
                        direction: {
                            type: "f",
                            value: 1
                        },
                        onReady: {
                            type: "fn",
                            value: function() {}
                        },
                        isReady: {
                            type: "bool",
                            value: !1
                        },
                        onContentChange: {
                            type: "fn",
                            value: function() {}
                        },
                        content: {
                            type: "json",
                            value: null
                        },
                        wsRoot: ""
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("page-article", l)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(0),
        u = i(86),
        c = n(u),
        h = i(6),
        p = n(h),
        d = i(26),
        f = n(d),
        m = function(t) {
            function e() {
                return o(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return s(e, t), a(e, [{
                key: "_onFilterDown",
                value: function(t) {
                    var e = this,
                        i = t.currentTarget.getAttribute("data-filter");
                    this.props.showPosts = !1, this.props.content.filter = i, setTimeout(function() {
                        e.props.dataUrl = null, requestAnimationFrame(function() {
                            e.props.dataUrl = e.props.wsRoot + "community/?filter=" + i
                        })
                    }, 500)
                }
            }, {
                key: "_onDataLoaded",
                value: function(t) {
                    var e = this;
                    this.props.content.filter = t.body.filter, this.props.content.posts.splice(0, this.props.content.posts.length), Array.prototype.push.apply(this.props.content.posts, t.body.posts), requestAnimationFrame(function() {
                        e.props.showPosts = !0, setTimeout(function() {
                            l.EventDispatcher.fire("resize")
                        }, 1e3)
                    })
                }
            }, {
                key: "_onDataError",
                value: function(t) {
                    console.log("DATA ERROR", t)
                }
            }, {
                key: "created",
                value: function() {
                    var t = this;
                    this._heroStartPosition = [0, 0], this._heroStartSize = [0, 0], this._heroEndPosition = [0, 0], this._heroImgScale = [0, 0], this._heroImgPosition = [0, 0], this.heroAnimation = new c.default({
                        step: function(e) {
                            t.props.heroPosition[0] = t._heroStartPosition[0] + (t._heroEndPosition[0] - t._heroStartPosition[0]) * e, t.props.heroPosition[1] = t._heroStartPosition[1] + (t._heroEndPosition[1] - t._heroStartPosition[1]) * e;
                            var i = t._heroStartSize[0] / t.props.heroSize[0],
                                n = t._heroStartSize[1] / t.props.heroSize[1];
                            t.props.heroScale[0] = i + (1 - i) * e, t.props.heroScale[1] = n + (1 - n) * e, t.props.heroImgScale[0] = 1 / t.props.heroScale[0] * (t._heroImgScale[0] + e * (1 - t._heroImgScale[0])), t.props.heroImgScale[1] = 1 / t.props.heroScale[1] * (t._heroImgScale[1] + e * (1 - t._heroImgScale[1]));
                            var o = t.props.heroSize[0] * t.props.heroImgScale[0],
                                r = t.props.heroSize[1] * t.props.heroImgScale[1],
                                s = t.props.heroSize[0] * t.props.heroScale[0],
                                a = t.props.heroSize[1] * t.props.heroScale[1],
                                l = s / 2 * (1 / t.props.heroScale[0]) - o / 2,
                                u = a / 2 * (1 / t.props.heroScale[1]) - r / 2;
                            t.props.heroImgPosition[0] = l, t.props.heroImgPosition[1] = u
                        },
                        end: function(e) {
                            (0, f.default)(t._heroLink)
                        },
                        direction: 1,
                        duration: 800,
                        easing: [.81, 0, .22, 1],
                        delay: 0
                    })
                }
            }, {
                key: "ready",
                value: function() {
                    var t = this;
                    this.props.onReady(), setTimeout(function() {
                        t.props.isReady = !0, t.props.onContentChange()
                    }, 1e3), l.EventDispatcher.fire("interface:show"), this.$filterWrapper = this.querySelector(".js-filter-wrapper")
                }
            }, {
                key: "resize",
                value: function() {
                    this.props.onContentChange(), window.innerWidth < 700 ? (this._heroEndPosition[0] = window.innerWidth / 12 * 1, this._heroEndPosition[1] = 210, this._heroEndWidth = window.innerWidth / 12 * 11) : (this._heroEndPosition[0] = window.innerWidth / 12 * 3, this._heroEndPosition[1] = 170 + 170 * (window.innerWidth - 320) / 960, this._heroEndWidth = window.innerWidth / 12 * 9), this._winWidth = window.innerWidth, this._winHeight = window.innerHeight, this._filterPos = (0, p.default)(this.$filterWrapper)
                }
            }, {
                key: "_onArticleDown",
                value: function(t) {
                    var e = t.currentTarget.querySelector(".js-img");
                    return void(location.href = e.getAttribute("href"))
                }
            }, {
                key: "update",
                value: function() {
                    this.props.scroll > this._filterPos.top - .1 * this._winHeight && (this.props.filterPos = this.props.scroll - this._filterPos.top + .1 * this._winHeight)
                }
            }, {
                key: "_backToTop",
                value: function() {
                    window.scrollTo(0, 0)
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        "click .js-article": "_onArticleDown"
                    }
                }
            }, {
                key: "template",
                get: function() {
                    return i(114)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        scroll: {
                            type: "f",
                            value: 0
                        },
                        direction: {
                            type: "f",
                            value: 1
                        },
                        onReady: {
                            type: "fn",
                            value: function() {}
                        },
                        onContentChange: {
                            type: "fn",
                            value: function() {}
                        },
                        isReady: {
                            type: "bool",
                            value: !1
                        },
                        heroPosition: {
                            type: "arr",
                            value: [0, 0]
                        },
                        heroScale: {
                            type: "arr",
                            value: [0, 0]
                        },
                        heroSize: {
                            type: "arr",
                            value: [0, 0]
                        },
                        heroSrc: "",
                        heroImgPosition: {
                            type: "arr",
                            value: [0, 0]
                        },
                        heroImgScale: {
                            type: "arr",
                            value: [0, 0]
                        },
                        showHero: {
                            type: "bool",
                            value: !1
                        },
                        content: {
                            type: "json",
                            value: null
                        },
                        wsRoot: "",
                        dataUrl: null,
                        showPosts: {
                            type: "bool",
                            value: !0
                        },
                        isMenuActive: {
                            type: "bool",
                            value: !1
                        },
                        filterPos: {
                            type: "f",
                            value: 0
                        }
                    }
                }
            }]), e
        }(l.Component);
    (0, l.register)("page-community", m)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(0),
        u = i(1),
        c = i(33),
        h = n(c),
        p = i(32),
        d = n(p),
        f = i(19),
        m = n(f),
        v = i(18),
        g = n(v),
        b = i(80),
        y = n(b),
        _ = i(5),
        w = n(_),
        x = i(6),
        P = (n(x), new u.Renderer({
            alpha: !0,
            antialias: !0
        }));
    if (P.gl) {
        P.setPixelRatio(1), P.resize(window.innerWidth, window.innerHeight);
        var M = new u.Scene,
            k = new u.Camera({
                fov: 25,
                aspect: window.innerWidth / window.innerHeight,
                near: 1,
                far: 1e4,
                type: "perspective"
            }),
            E = new u.Mesh;
        E.material = new u.Material(P.gl, {
            vertexShader: h.default,
            fragmentShader: d.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .5,
                uPointSize: 1
            },
            blend: !0,
            depthTest: !1,
            type: P.gl.POINTS
        }), E.geometry = new u.SphereGeometryBuffer(P.gl, {
            radius: 1,
            widthSegments: 30,
            heightSegments: 30
        }), M.add(E);
        var C = new u.Mesh;
        C.material = new u.Material(P.gl, {
            vertexShader: m.default,
            fragmentShader: g.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .2,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !0
        }), C.geometry = new y.default(P.gl, {
            radius: 1
        }), C.rotation[2] = Math.PI / 2, C.position[2] = 0, M.add(C);
        var S = new u.Mesh;
        S.material = new u.Material(P.gl, {
            vertexShader: m.default,
            fragmentShader: g.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .2,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !0
        }), S.geometry = new y.default(P.gl, {
            radius: 1
        }), S.rotation[2] = Math.PI / 2, S.position[2] = 0, M.add(S);
        var T = new u.Mesh;
        T.material = new u.Material(P.gl, {
            vertexShader: m.default,
            fragmentShader: g.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .2,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !0
        }), T.geometry = new y.default(P.gl, {
            radius: 1
        }), T.rotation[2] = Math.PI / 2, T.position[2] = 0, M.add(T)
    }
    var O = function(t) {
        function e() {
            return o(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return s(e, t), a(e, [{
            key: "created",
            value: function() {
                this._introCirclePorgress = 0, this._introCircle2Progress = -.35, this._introCircle3Progress = -.7, this._introGridProgress = 0, this._wireSphereProgress = 0, this._autoRotation = 0, this._isMenuActive = !1
            }
        }, {
            key: "detached",
            value: function() {
                l.EventDispatcher.off("menu:open", this._onMenuOpen, this), l.EventDispatcher.off("menu:close", this._onMenuClose, this)
            }
        }, {
            key: "_onMenuOpen",
            value: function() {
                this._isMenuActive = !0, clearTimeout(this._menuTimer)
            }
        }, {
            key: "_onMenuClose",
            value: function() {
                var t = this;
                this._menuTimer = setTimeout(function() {
                    t._isMenuActive = !1
                }, 1e3)
            }
        }, {
            key: "ready",
            value: function() {
                var t = this;
                this.props.onReady(), setTimeout(function() {
                    t.props.isReady = !0, t.props.onContentChange()
                }, 1e3), l.EventDispatcher.fire("interface:show"), this.$scene = this.querySelector(".js-scene"), this.$scene.appendChild(P.canvas), l.EventDispatcher.on("menu:open", this._onMenuOpen, this), l.EventDispatcher.on("menu:close", this._onMenuClose, this)
            }
        }, {
            key: "resize",
            value: function() {
                this.props.onContentChange(), this._winWidth = window.innerWidth, this._winHeight = window.innerHeight, this._isMobile = this._winWidth < 700, P.resize(this._winWidth, this._winHeight), k.aspect = this._winWidth / this._winHeight, k.updateProjectionMatrix(), this._globeRadius = Math.min(.85 * this._winWidth / 2, .7 * window.innerHeight / 2), this._cameraZ = this._winHeight / 2 / Math.tan(25 * Math.PI / 360), this._cameraX = window.innerWidth < 700 ? 0 : .5 * window.innerWidth, this._cameraY = window.innerWidth < 700 ? -.6 * window.innerHeight : 0
            }
        }, {
            key: "_onFormSuccess",
            value: function(t) {
                this.props.showDialog = !0
            }
        }, {
            key: "_onFormError",
            value: function(t) {}
        }, {
            key: "_closeDialog",
            value: function() {
                this.props.showDialog = !1
            }
        }, {
            key: "update",
            value: function() {
                if (P.gl && !this._isMenuActive) {
                    k.position[2] = this._cameraZ, this._introGridProgress += .0066, this._introGridProgress > 1 && (this._introGridProgress = 1);
                    var t = (0, w.default)(.465, .005, .045, .985, this._introGridProgress, 1);
                    E.scale[0] = E.scale[1] = E.scale[2] = this._globeRadius + this._globeRadius * (1 - t), E.material.uniforms.alpha.value = .5 * t, E.rotation[0] = Math.PI / 4 * (1 - t), E.rotation[1] = Math.PI / 4 * (1 - t), E.rotation[2] = Math.PI / 4 * (1 - t) - .2, E.material.uniforms.uPointSize.value = this._isMobile ? 1 : 2.5, this._introGridProgress >= .5 && (this._introCirclePorgress += .003, this._introCirclePorgress > 1 && (this._introCirclePorgress = 0), C.scale[0] = C.scale[1] = C.scale[2] = this._globeRadius + 1.5 * this._globeRadius * this._introCirclePorgress, C.material.uniforms.scale.value = C.scale, C.material.uniforms.alpha.value = .5 * (1 - this._introCirclePorgress), C.material.uniforms.uDirection.value = 1, C.material.uniforms.lineWidth.value = 1, this._introCircle2Progress += .003, this._introCircle2Progress > 1 && (this._introCircle2Progress = 0), this._introCircle2Progress > 0 && (S.scale[0] = S.scale[1] = S.scale[2] = this._globeRadius + 1.5 * this._globeRadius * this._introCircle2Progress, S.material.uniforms.scale.value = S.scale, S.material.uniforms.alpha.value = .5 * (1 - this._introCircle2Progress), S.material.uniforms.uDirection.value = 1, S.material.uniforms.lineWidth.value = 1), this._introCircle3Progress += .003, this._introCircle3Progress > 1 && (this._introCircle3Progress = 0), this._introCircle3Progress > 0 && (T.scale[0] = T.scale[1] = T.scale[2] = this._globeRadius + 1.5 * this._globeRadius * this._introCircle3Progress, T.material.uniforms.scale.value = T.scale, T.material.uniforms.alpha.value = .5 * (1 - this._introCircle3Progress), T.material.uniforms.uDirection.value = 1, T.material.uniforms.lineWidth.value = 1)), E.position[1] = 0, C.position[1] = 0, S.position[1] = 0, T.position[1] = 0, P.clearColor(0, 0, 0, 0), P.clear(), P.render(M, k), k.position[0] = this._cameraX, k.position[1] = -.8 * this.props.scroll + this._cameraY
                }
            }
        }, {
            key: "template",
            get: function() {
                return i(115)
            }
        }, {
            key: "defaultProps",
            get: function() {
                return {
                    scroll: {
                        type: "f",
                        value: 0
                    },
                    direction: {
                        type: "f",
                        value: 1
                    },
                    onReady: {
                        type: "fn",
                        value: function() {}
                    },
                    onContentChange: {
                        type: "fn",
                        value: function() {}
                    },
                    isReady: {
                        type: "bool",
                        value: !1
                    },
                    content: {
                        type: "json",
                        value: null
                    },
                    wsRoot: "",
                    showDialog: {
                        type: "bool",
                        value: !1
                    }
                }
            }
        }]), e
    }(l.Component);
    (0, l.register)("page-contact", O)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(0),
        u = i(1),
        c = i(141),
        h = n(c),
        p = i(140),
        d = n(p),
        f = i(135),
        m = n(f),
        v = i(134),
        g = n(v),
        b = i(143),
        y = n(b),
        _ = i(142),
        w = n(_),
        x = i(137),
        P = n(x),
        M = i(136),
        k = n(M),
        E = i(133),
        C = (n(E), i(132)),
        S = (n(C), i(129)),
        T = (n(S), i(128)),
        O = (n(T), i(19)),
        A = n(O),
        R = i(18),
        j = n(R),
        L = i(83),
        D = n(L),
        I = i(81),
        N = n(I),
        F = i(31),
        U = n(F),
        H = i(30),
        q = n(H),
        z = i(144),
        B = n(z),
        V = i(88),
        W = n(V),
        $ = i(5),
        X = n($),
        Y = i(82),
        G = n(Y),
        K = i(139),
        Z = n(K),
        Q = i(138),
        J = n(Q),
        tt = (window.innerWidth, window.innerWidth < 700 ? "/wp-content/themes/clarity/assets/images/mask-mobile.jpg" : siteValues["global"]["mask_image"]),
        et = new u.Renderer({
            alpha: !0,
            antialias: !0
        });
    if (et.setPixelRatio(1), et.resize(window.innerWidth, window.innerHeight), et.gl) {
        var it = new u.Scene,
            nt = new u.Mesh;
        nt.material = new u.Material(et.gl, {
            vertexShader: U.default,
            fragmentShader: q.default,
            uniforms: {
                color: [42 / 255, .6, 1],
                alpha: 1,
                resolution: [window.innerWidth, window.innerHeight],
                uMaskRadius: 300,
                useMask: 1,
                uInvertMask: 1
            },
            blend: !1
        }), nt.geometry = new u.PlaneGeometryBuffer(et.gl, {
            width: 1e4,
            height: 1e4
        }), nt.position[2] = -4, it.add(nt);
        var ot = new u.Mesh;
        ot.material = new u.Material(et.gl, {
            vertexShader: h.default,
            fragmentShader: d.default,
            uniforms: {
                color: [1, 1, 1],
                alpha: 1,
                tAlbedo: u.Texture.fromUrl(et.gl, siteValues["global"]["world_mobile_image"]),
                resolution: [window.innerWidth, window.innerHeight],
                uMaskRadius: 300,
                useMask: 1
            },
            defines: {},
            blend: !1
        }), ot.geometry = new u.SphereGeometryBuffer(et.gl, {
            radius: 1,
            widthSegments: window.innerWidth < 700 ? 32 : 64,
            heightSegments: window.innerWidth < 700 ? 32 : 64
        }), ot.rotation[1] = 3.5, it.add(ot);
        var rt = new u.Mesh;
        rt.material = new u.Material(et.gl, {
            vertexShader: U.default,
            fragmentShader: q.default,
            uniforms: {
                color: [0, 1, 0],
                alpha: 0,
                roughness: 1,
                metalness: 0,
                useMask: !1
            },
            blend: !0
        }), rt.geometry = new u.SphereGeometryBuffer(et.gl, {
            radius: 0,
            widthSegments: 1,
            heightSegments: 1
        });
        var st = new u.Mesh;
        st.material = new u.Material(et.gl, {
            vertexShader: y.default,
            fragmentShader: w.default,
            uniforms: {
                color: [1, 1, 1],
                alpha: 1,
                roughness: 1,
                metalness: 0,
                resolution: [window.innerWidth, window.innerHeight],
                uMaskRadius: 300,
                tMask: u.Texture.fromUrl(et.gl, siteValues["global"]["world_alpha_mobile_image"]),
                uPointSize: window.innerWidth < 700 ? 2 : 3
            },
            blend: !0,
            depthTest: !1,
            type: et.gl.POINTS
        }), st.geometry = new u.SphereGeometryBuffer(et.gl, {
            radius: 1,
            widthSegments: window.innerWidth < 700 ? 75 : 150,
            heightSegments: window.innerWidth < 700 ? 75 : 150
        }), st.rotation[1] = 3.5, it.add(st);
        var at = new u.Mesh;
        at.material = new u.Material(et.gl, {
            vertexShader: y.default,
            fragmentShader: w.default,
            uniforms: {
                color: [0, 147 / 255, 229 / 255],
                alpha: 1,
                roughness: 1,
                metalness: 0,
                resolution: [window.innerWidth, window.innerHeight],
                uMaskRadius: 300,
                tMask: u.Texture.fromUrl(et.gl, siteValues["global"]["world_mobile_inv_image"]),
                uPointSize: window.innerWidth < 700 ? 2 : 3
            },
            blend: !0,
            depthTest: !0,
            type: et.gl.POINTS
        }), at.geometry = new u.SphereGeometryBuffer(et.gl, {
            radius: 1,
            widthSegments: window.innerWidth < 700 ? 75 : 150,
            heightSegments: window.innerWidth < 700 ? 75 : 150
        }), at.rotation[1] = 3.5, it.add(at);
        var lt = new u.Mesh;
        lt.material = new u.Material(et.gl, {
            vertexShader: P.default,
            fragmentShader: k.default,
            uniforms: {
                color: [0, 0, 1],
                alpha: 1,
                roughness: 1,
                metalness: 0,
                tMask: u.Texture.fromUrl(et.gl, tt),
                resolution: [window.innerWidth, window.innerHeight]
            },
            blend: !0,
            type: et.gl.LINE_STRIP,
            depthTest: !1
        }), lt.geometry = new D.default(et.gl, {
            radius: 1,
            widthSegments: window.innerWidth < 700 ? 75 : 150,
            heightSegments: window.innerWidth < 700 ? 75 : 150
        }), lt.rotation[1] = 3.5, it.add(lt);
        var ut = new u.Mesh;
        ut.material = new u.Material(et.gl, {
            vertexShader: m.default,
            fragmentShader: g.default,
            uniforms: {
                color: [233 / 255, 243 / 255, 251 / 255],
                alpha: .3
            },
            blend: !0
        }), ut.geometry = new u.SphereGeometryBuffer(et.gl, {
            radius: 1,
            widthSegments: window.innerWidth < 700 ? 32 : 64,
            heightSegments: window.innerWidth < 700 ? 32 : 64
        }), it.add(ut);
        var ct = new u.Light({
            color: [1, 1, 1],
            distance: 1e4,
            intensity: 3,
            penumbra: .01,
            decay: 0,
            lookAt: [0, 0, 0],
            angle: Math.PI / 10
        });
        ct.position[1] = 800, it.add(ct);
        var ht = new u.Camera({
                fov: 25,
                aspect: window.innerWidth / window.innerHeight,
                near: 1,
                far: 1e4,
                type: "perspective"
            }),
            pt = new u.Mesh;
        pt.material = new u.Material(et.gl, {
            vertexShader: A.default,
            fragmentShader: j.default,
            uniforms: {
                color: [0, 147 / 255, 9.16],
                alpha: 1,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !1
        }), pt.geometry = new N.default(et.gl, {
            radius: 1
        }), pt.position[2] = -2, pt.rotation[2] = Math.PI / 2, it.add(pt);
        var dt = new u.Mesh;
        dt.material = new u.Material(et.gl, {
            vertexShader: A.default,
            fragmentShader: j.default,
            uniforms: {
                color: [0, 147 / 255, 9.16],
                alpha: 1,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !1
        }), dt.geometry = new N.default(et.gl, {
            radius: 1
        }), dt.position[2] = 2, dt.rotation[2] = Math.PI / 2, it.add(dt);
        var ft = new u.Mesh;
        ft.material = new u.Material(et.gl, {
            vertexShader: A.default,
            fragmentShader: j.default,
            uniforms: {
                color: [0, 147 / 255, 9.16],
                alpha: 1,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !1
        }), ft.geometry = new N.default(et.gl, {
            radius: 1
        }), ft.position[2] = 2, ft.rotation[2] = Math.PI / 2, it.add(ft);
        var mt = new u.Mesh;
        mt.material = new u.Material(et.gl, {
            vertexShader: A.default,
            fragmentShader: j.default,
            uniforms: {
                color: [1, 1, 1],
                alpha: .33,
                roughness: 1,
                useDash: 0,
                uProgress: 1
            },
            blend: !0,
            depthTest: !1,
            lineWidth: 4
        }), mt.geometry = new N.default(et.gl, {
            radius: 1
        }), mt.position[2] = 1, it.add(mt);
        var vt = new u.Mesh;
        vt.material = new u.Material(et.gl, {
            vertexShader: Z.default,
            fragmentShader: J.default,
            uniforms: {
                color: [42 / 255, .6, 10.2],
                alpha: 1
            },
            type: et.gl.LINE_STRIP,
            blend: !0,
            depthTest: !0
        }), vt.geometry = new G.default(et.gl), vt.position[2] = 0;
        var gt = new u.Mesh;
        gt.material = new u.Material(et.gl, {
            vertexShader: U.default,
            fragmentShader: q.default,
            uniforms: {
                color: [42 / 255, .6, 10.2],
                alpha: 1
            },
            blend: !0,
            depthTest: !0
        }), gt.geometry = new u.SphereGeometryBuffer(et.gl, {
            radius: 1
        }), gt.position[2] = 0
    }
    var bt = function(t) {
        function e() {
            return o(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return s(e, t), a(e, [{
            key: "_onVideoBtnDown",
            value: function() {
                this.props.showVideo = !0, l.EventDispatcher.fire("interface:hide"), this.props.forcePlayVideo = !0, this._videoMaskProgress = 0
            }
        }, {
            key: "_closeVideo",
            value: function() {
                this.props.showVideo = !1, l.EventDispatcher.fire("interface:show"), this.props.forcePlayVideo = !1, this._videoMaskProgress = 0
            }
        }, {
            key: "created",
            value: function() {
                this._currentStepProgress = 0, this._cameraLoaderStart = [0, 1.1, .2], this._cameraLoaderEnd = [0, 0, 4], this._hasPlayIntro = !1, this._uCameraPosition = u.vec3.create(), this._circle1Progress = 0, this._onMouseWheel = this._onMouseWheel.bind(this), this._currentIndex = 0, this._maxLineHeight = 0, this._currMaxLineHeight = 0, this._currentStepProgress = 0, this.introMaskProgress = 0, this.introGridRotationProgress = 0, this._loaderMaskRadius = 0, this._loaderAnimationProgress = 0, this._loaderCircleProgress = 0, this._globeRotation = [0, 3.5, 0], this._videoMaskProgress = 1, this._markerLineProgress = 0, this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this._globeUserRotation = [0, 0, 0], this._autoRotation = [0, 0, 0], this._canScroll = !1, this._direction = 1
            }
        }, {
            key: "ready",
            value: function() {
                if (this.$scene = this.querySelector(".js-scene"), this.props.onReady(), this.props.isReady = !0, this.props.onContentChange(), this.$scene.appendChild(et.canvas), l.support.touch && (this._swipeIndicator = new W.default({
                        elem: document,
                        preventMouse: !1,
                        callback: this._onMouseWheel
                    })), this._indicator = new B.default({
                        elem: document,
                        callback: this._onMouseWheel,
                        preventMouse: !0
                    }), this._videoMaskInScale = [0, 0], this._videoMaskOutPosition = [0, 0], this._videoMaskOutRotation = [0, 0], l.EventDispatcher.on("menu:open", this._onMenuOpen, this), l.EventDispatcher.on("menu:close", this._onMenuClose, this), l.support.multipointerdown && l.support.multipointerdown.length > 0)
                    for (var t = 0; t < l.support.multipointerdown.length; t++) this.addEventListener(l.support.multipointerdown[t], this._onPointerDown, !1), document.addEventListener(l.support.multipointermove[t], this._onPointerMove, !1), document.addEventListener(l.support.multipointerup[t], this._onPointerUp, !1);
                else this.addEventListener(l.support.pointerdown, this._onPointerDown, !1), document.addEventListener(l.support.pointermove, this._onPointerMove, !1), document.addEventListener(l.support.pointerup, this._onPointerUp, !1)
            }
        }, {
            key: "_onPointerDown",
            value: function(t) {
                this._isPointerDown = !0, this.touchEvent = l.support.touch ? t.touches[0] || t.changedTouches[0] : t, this.touchEventPageX = this.touchEvent.pageX, this.touchEventPageY = this.touchEvent.pageY, this.touchEventPageX -= window.pageXOffset || document.documentElement.scrollLeft, this.touchEventPageY -= window.pageYOffset || document.documentElement.scrollTop, this._rotationDownX = this._globeUserRotation[0], this._rotationDownY = this._globeUserRotation[1]
            }
        }, {
            key: "_onPointerMove",
            value: function(t) {
                if (this._isPointerDown) {
                    t.preventDefault(), t.stopPropagation();
                    var e = l.support.touch ? t.touches[0] || t.changedTouches[0] : t,
                        i = e.pageX,
                        n = e.pageY;
                    i -= window.pageXOffset || document.documentElement.scrollLeft, n -= window.pageYOffset || document.documentElement.scrollTop, this._globeUserRotation[0] = this._rotationDownX + (n - this.touchEventPageY) / window.innerHeight * Math.PI, this._globeUserRotation[1] = this._rotationDownY + (i - this.touchEventPageX) / window.innerWidth * Math.PI
                }
            }
        }, {
            key: "_onPointerUp",
            value: function() {
                this._isPointerDown = !1
            }
        }, {
            key: "_onMenuOpen",
            value: function() {
                this._isMenuActive = !0, clearTimeout(this._menuTimer), this._swipeIndicator && this._swipeIndicator.disable()
            }
        }, {
            key: "_onMenuClose",
            value: function() {
                var t = this;
                this._menuTimer = setTimeout(function() {
                    t._isMenuActive = !1, t._swipeIndicator && t._swipeIndicator.enable()
                }, 1e3)
            }
        }, {
            key: "_onMouseWheel",
            value: function(t) {
                var e = this;
                if (!this.props.isLoading && this._canScroll) {
                    this._canScroll = !1, setTimeout(function() {
                        e._canScroll = !0
                    }, 1e3);
                    var i = this._currentIndex + ("down" == t.direction ? 1 : -1);
                    i = Math.min(3, Math.max(0, i)), i > this._currentIndex ? this._direction = 1 : this._direction = -1, this._currentIndex = i, setTimeout(function() {
                        e.props.currentIndex = e._currentIndex
                    }, 150)
                }
            }
        }, {
            key: "resize",
            value: function() {
                if (et.gl) {
                    this._winWidth = window.innerWidth, this._winHeight = window.innerHeight, this.props.winHeight = window.innerHeight, this.props.isMobile = window.innerWidth < 700, this.props.onContentChange(), et.resize(this._winWidth, this._winHeight);
                    var t = this._winWidth / 2 + .3 * this._winWidth,
                        e = this._winHeight / 2;
                    this._circleMaskMaxRadius = Math.sqrt(t * t + e * e), this.props.width = this._winWidth;
                    var i = this.props.isMobile ? Math.min(this._winWidth / 2, this._winHeight / 2) : .55 * this._winWidth / 2;
                    this.circle1Radius = i, this.circle2Radius = i, this.circle3Radius = i, ht.aspect = this._winWidth / this._winHeight, ht.updateProjectionMatrix(), this._globeRadius = this.props.isMobile ? Math.min(.66 * this._winWidth / 2, .66 * window.innerHeight / 2) : .33 * this._winWidth / 2, this._cameraZ = this._winHeight / 2 / Math.tan(25 * Math.PI / 360), this._cameraLoaderStart = [0, 1.2 * this._globeRadius, this._cameraZ / 5], this._step1CameraX = this.props.isMobile ? .25 * this._winWidth : .4 * -this._winWidth, this._step1CameraY = this.props.isMobile ? .25 * this._winHeight : 0, this._step1CameraZ = this.props.isMobile ? .8 * this._cameraZ : this._cameraZ, this._cameraLoaderEnd = [0, 0, this._cameraZ], this._cameraLoaderEnd[1] = this.props.isMobile ? .1 * -this._winHeight : 0, gt.scale[0] = gt.scale[1] = gt.scale[2] = this.props.isMobile ? 2 : 5, ct.position[1] = window.innerHeight, ct.position[2] = this._cameraZ, nt.material.uniforms.resolution.value = [window.innerWidth, window.innerHeight], ot.material.uniforms.resolution.value = [window.innerWidth, window.innerHeight]
                }
            }
        }, {
            key: "update",
            value: function() {
                if (!this._isMenuActive && et.gl) {
                    if (et.gl.disable(et.gl.CULL_FACE), this._currMaxLineHeight += .03 * (this._maxLineHeight - this._currMaxLineHeight), this.props.initCircleRadius = this.circle1Radius, pt.scale[0] = pt.scale[1] = pt.scale[2] = this.props.circle1Scale * this.circle1Radius, pt.material.uniforms.scale.value = pt.scale, pt.material.uniforms.alpha.value = this.props.circle1Alpha, pt.material.uniforms.uDirection.value = 1, pt.material.uniforms.uProgress.value = this.props.isMobile ? 0 : this.props.circle1Progress, pt.material.uniforms.lineWidth.value = 1, this.props.handlerPos[0] = Math.cos(2 * Math.PI * pt.material.uniforms.uProgress.value - Math.PI / 2 - .02) * this.props.circle1Scale * this.circle1Radius, this.props.handlerPos[1] = Math.sin(2 * Math.PI * pt.material.uniforms.uProgress.value - Math.PI / 2 - .02) * this.props.circle1Scale * this.circle1Radius, this.props.handlerPos[0] += this._winWidth / 2 + -.9 * ht.position[0], this.props.handlerPos[1] += this._winHeight / 2, this.props.handlerAlpha = pt.material.uniforms.alpha.value, dt.scale[0] = dt.scale[1] = dt.scale[2] = this.props.circle2Scale * this.circle2Radius, dt.material.uniforms.scale.value = dt.scale, dt.material.uniforms.alpha.value = this.props.circle2Alpha, dt.material.uniforms.uDirection.value = 1, dt.material.uniforms.lineWidth.value = 1, ft.scale[0] = ft.scale[1] = ft.scale[2] = this.props.circle3Scale * this.circle3Radius, ft.material.uniforms.scale.value = ft.scale, ft.material.uniforms.alpha.value = this.props.circle3Alpha, ft.material.uniforms.uDirection.value = 1, ft.material.uniforms.lineWidth.value = 1, ot.material.uniforms.cameraPosition && (u.vec3.set(this._uCameraPosition, ht.worldMatrix[12], ht.worldMatrix[13], ht.worldMatrix[14]), ot.material.uniforms.cameraPosition.value = this._uCameraPosition), et.clearColor(0, 0, 0, 0), et.clear(), et.gl.enable(et.gl.CULL_FACE), et.gl.cullFace(et.gl.BACK), lt.material.depthTest = !0, lt.material.uniforms.pass.value = 0, lt.material.uniforms.uMaxHeight.value = this._currMaxLineHeight, et.render(it, ht), this._videoMaskProgress <= 1) {
                        var t = (0, X.default)(.465, .005, .045, .985, this._videoMaskProgress, 1);
                        this.props.showVideo ? (this.props.outterRotation = -20 * (1 - t), this.props.outterScale = 1 - t + 1, this.props.innerRotation = -1 * this.props.outterRotation, this.props.innerScale = 1 / this.props.outterScale, this.props.outterPosition = -2 * this._winHeight * (1 - t), this.props.innerPosition = 2 * this._winHeight * (1 - t)) : (this.props.outterRotation = -20 * t, this.props.outterScale = 1 + t, this.props.innerRotation = -1 * this.props.outterRotation, this.props.innerScale = 1 / this.props.outterScale, this.props.outterPosition = -2 * this._winHeight * t, this.props.innerPosition = 2 * this._winHeight * t), this._videoMaskProgress += .01
                    } else this._videoMaskProgress = 1;
                    this._loaderAnimationProgress += .0045, this._loaderAnimationProgress > 1 && (this._loaderAnimationProgress = 1);
                    var e = (0, X.default)(1, 0, .46, 1, this._loaderAnimationProgress, 1),
                        i = (0, X.default)(.865, .13, .46, 1, this._loaderAnimationProgress, 1);
                    if (this.props.loaderProgress > .99 ? this.props.loaderProgress = 1 : this.props.loaderProgress += .1 * (i - this.props.loaderProgress), e > .7) {
                        mt.visible = !0, this._loaderCircleProgress += .0015, this._loaderCircleProgress > 1 && (this._loaderCircleProgress = 1);
                        var n = (0, X.default)(.04, .96, .13, .999, this._loaderCircleProgress, 1);
                        mt.scale[0] = mt.scale[1] = mt.scale[2] = (.5 + 3 * n) * Math.min(this._winWidth, window.innerHeight) * .3, mt.material.uniforms.alpha.value = .2 * n, mt.material.uniforms.scale.value = mt.scale, mt.material.uniforms.lineWidth.value = 20 * (1 - n), this._loaderAnimationProgress >= .9 && !this._hasPlayIntro && (this._hasPlayIntro = !0, this.props.isLoading = !1)
                    }
                    if (st.material.uniforms.cameraPosition && (st.material.uniforms.cameraPosition.value = this._uCameraPosition), at.material.uniforms.cameraPosition && (at.material.uniforms.cameraPosition.value = this._uCameraPosition), st.rotation[0] = (1 - i) * (-1 * Math.PI), this.props.isLoading) st.visible = !0, at.visible = !1, pt.visible = !1, dt.visible = !1, ft.visible = !1, ot.visible = !1, lt.visible = !1, ht.position[0] = this._cameraLoaderStart[0] + (this._cameraLoaderEnd[0] - this._cameraLoaderStart[0]) * e, ht.position[1] = this._cameraLoaderStart[1] + (0 - this._cameraLoaderStart[1]) * e, ht.position[2] = this._cameraLoaderStart[2] + (this._cameraLoaderEnd[2] - this._cameraLoaderStart[2]) * e, ot.material.uniforms.uMaskRadius.value = 0, nt.material.uniforms.uMaskRadius.value = 0, nt.visible = !0, nt.material.uniforms.uMaskCenter.value = [.5, .5], this._globeRotation[1] = 3.5, ut.material.uniforms.alpha.value = 0;
                    else {
                        if (this._autoRotation[1] += .002, pt.visible = !0, dt.visible = !0, ft.visible = !0, ot.visible = !0, lt.visible = !0, at.visible = !0, this._currentIndex < 1) {
                            this.introMaskProgress <= 1 ? (this.introMaskProgress += .01, this.introMaskProgress > .3 && (this.props.currentIndex = 0, l.EventDispatcher.fire("interface:show"))) : this.introMaskProgress = 1;
                            var o = (0, X.default)(.465, .005, .045, .985, this.introMaskProgress, 1);
                            o > .99 && !this._canScroll && (this._canScroll = !0, st.visible = !1), o > .99 && (nt.visible = !1), 1 == this._direction ? (this._loaderMaskRadius = o * this._circleMaskMaxRadius, ot.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, ot.material.uniforms.uMaskCenter.value = [.5 + .3 * o, .5], nt.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, nt.material.uniforms.uMaskCenter.value = [.5 + .3 * o, .5]) : (this._loaderMaskRadius = this._circleMaskMaxRadius, ot.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, ot.material.uniforms.uMaskCenter.value = [.5, .5], nt.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, nt.material.uniforms.uMaskCenter.value = [.5, .5]), ht.position[0] = this._cameraLoaderEnd[0] + (this._step1CameraX - this._cameraLoaderEnd[0]) * o, ht.position[2] = this._cameraLoaderEnd[2] + (this._step1CameraZ - this._cameraLoaderEnd[2]) * o, 1 == this._direction ? ht.position[1] = 0 + (this._step1CameraY - 0) * o : ht.position[1] = this._cameraLoaderEnd[1] + (this._step1CameraY - this._cameraLoaderEnd[1]) * o, this._globeRotation[1] = 3.5 + (Math.PI / 2 + (this.props.width < 700 ? 1.1 : 0)) * o, this._maxLineHeight = 0, st.material.uniforms.alpha && (st.material.uniforms.alpha.value = 1 - o), at.material.uniforms.alpha && (at.material.uniforms.alpha.value = o), this.props.circle1Progress += .1 * (0 - this.props.circle1Progress), this.props.circle1Alpha += .1 * (0 - this.props.circle1Alpha), this.props.circle1Scale += .1 * (1.25 - this.props.circle1Scale), this.props.circle2Progress += .1 * (0 - this.props.circle2Progress), this.props.circle2Alpha += .1 * (0 - this.props.circle2Alpha), this.props.circle2Scale += .1 * (1.25 - this.props.circle2Scale), ut.material.uniforms.alpha.value = 0
                        }
                        if (1 == this._currentIndex && (this._loaderMaskRadius = this._circleMaskMaxRadius, ot.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, ot.material.uniforms.uMaskCenter.value = [.5, .5], nt.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, nt.material.uniforms.uMaskCenter.value = [.5, .5], this.introMaskProgress > 0)) {
                            this.introMaskProgress -= .01;
                            var r = (0, X.default)(1, 0, .55, 1, this.introMaskProgress, 1);
                            1 == this._direction ? (ht.position[0] = this._cameraLoaderEnd[0] + (this._step1CameraX - this._cameraLoaderEnd[0]) * r, ht.position[1] = this._cameraLoaderEnd[1] + (this._step1CameraY - this._cameraLoaderEnd[1]) * r, ht.position[2] = this._cameraLoaderEnd[2] + (this._step1CameraZ - this._cameraLoaderEnd[2]) * r) : (ht.position[0] = this._cameraLoaderEnd[0], ht.position[1] = this._cameraLoaderEnd[1], ht.position[2] = this._cameraLoaderEnd[2]), 1 == this._direction ? (this._globeRotation[1] = 3.5 + Math.PI / 2 - 1 * (1 - r), this.props.circle1Alpha = 1 - r, this.props.circle1Scale = 1.25 - .25 * (1 - r), this.props.circle1Progress = .33 * (1 - r), this._maxLineHeight = 0) : (this._globeRotation[1] = 3.5 + Math.PI / 2 - 1 + 1 * r, this.props.circle1Alpha = 1, this.props.circle1Scale = 1.25 - .25 * (1 - r), this.props.circle1Progress = .66 - .33 * (1 - r), this._maxLineHeight = 0), st.visible = !1, ut.material.uniforms.alpha.value = 0
                        }
                        if (2 == this._currentIndex) {
                            if (this._loaderMaskRadius = this._circleMaskMaxRadius, ot.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, ot.material.uniforms.uMaskCenter.value = [.5, .5], nt.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, nt.material.uniforms.uMaskCenter.value = [.5, .5], this.introMaskProgress < 1) {
                                this.introMaskProgress += .01;
                                var s = (0, X.default)(.465, .005, .045, .985, this.introMaskProgress, 1);
                                ht.position[0] = this._cameraLoaderEnd[0], ht.position[1] = this._cameraLoaderEnd[1], ht.position[2] = this._cameraLoaderEnd[2], st.visible = !1, 1 == this._direction ? (this._globeRotation[1] = 3.5 + Math.PI / 2 - 1 + 1 * s, this.props.circle1Alpha = 1, this.props.circle1Scale = 1 + .25 * s, this.props.circle1Progress = .33 + .33 * s, this.props.circle2Alpha = .25 * s, this.props.circle2Scale = 1.25 - .25 * s, this._maxLineHeight = s) : (this._globeRotation[1] = 3.5 + Math.PI / 2 + 1 * (1 - s), this.props.circle1Alpha = 1, this.props.circle1Scale = 1.5 - .25 * s, this.props.circle1Progress = .99 - .33 * s, this.props.circle2Alpha = .5 - .25 * s, this.props.circle2Scale = 1.25 - .25 * s, this.props.circle3Alpha += .1 * (0 - this.props.circle3Alpha), this.props.circle3Scale += .1 * (1.25 - this.props.circle3Scale), this._maxLineHeight = s)
                            }
                            ut.scale[0] = ut.scale[1] = ut.scale[2] += .1 * (this._globeRadius - ut.scale[2]), ut.material.uniforms.alpha.value += .1 * (0 - ut.material.uniforms.alpha.value)
                        }
                        if (3 == this._currentIndex) {
                            this._loaderMaskRadius = this._circleMaskMaxRadius, ot.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, ot.material.uniforms.uMaskCenter.value = [.5, .5], nt.material.uniforms.uMaskRadius.value = this._loaderMaskRadius, nt.material.uniforms.uMaskCenter.value = [.5, .5], this.introMaskProgress -= .01, this.introMaskProgress < 0 && (this.introMaskProgress = 0);
                            var a = (0, X.default)(1, 0, .55, 1, this.introMaskProgress, 1);
                            ht.position[0] = this._cameraLoaderEnd[0], ht.position[1] = this._cameraLoaderEnd[1], ht.position[2] = this._cameraLoaderEnd[2], this._maxLineHeight = 1, st.visible = !1, this._globeRotation[1] = 3.5 + Math.PI / 2 + 1 * (1 - a), this.props.circle1Alpha = 1, this.props.circle1Scale = 1.25 + .25 * (1 - a), this.props.circle1Progress = .66 + .34 * (1 - a), this.props.circle2Alpha = .25 + .25 * (1 - a), this.props.circle2Scale = 1 + .25 * (1 - a), this.props.circle3Alpha = .25 * (1 - a), this.props.circle3Scale = 1.25 - .25 * (1 - a), ut.material.uniforms.alpha.value = 1 - a, ut.scale[0] = ut.scale[1] = ut.scale[2] = this._globeRadius * (1 + .3 * (1 - a))
                        }
                    }
                    ut.material.uniforms.cameraPosition && (ut.material.uniforms.cameraPosition.value = this._uCameraPosition), st.rotation[0] += .1 * (this._globeRotation[0] + this._globeUserRotation[0] - st.rotation[0]), st.rotation[1] += .1 * (this._globeRotation[1] + this._globeUserRotation[1] + this._autoRotation[1] - st.rotation[1]), at.rotation[0] += .1 * (this._globeRotation[0] + this._globeUserRotation[0] - at.rotation[0]), at.rotation[1] += .1 * (this._globeRotation[1] + this._globeUserRotation[1] + this._autoRotation[1] - at.rotation[1]), ot.rotation[0] += .1 * (this._globeRotation[0] + this._globeUserRotation[0] - ot.rotation[0]), ot.rotation[1] += .1 * (this._globeRotation[1] + this._globeUserRotation[1] + this._autoRotation[1] - ot.rotation[1]), lt.rotation[0] += .1 * (this._globeRotation[0] + this._globeUserRotation[0] - lt.rotation[0]), lt.rotation[1] += .1 * (this._globeRotation[1] + this._globeUserRotation[1] + this._autoRotation[1] - lt.rotation[1]), rt.render(), rt.rotation[0] = ot.rotation[0], rt.rotation[1] = ot.rotation[1], ot.scale[0] = ot.scale[1] = ot.scale[2] = this._globeRadius, st.scale[0] = st.scale[1] = st.scale[2] = this._globeRadius + 1, at.scale[0] = at.scale[1] = at.scale[2] = this._globeRadius + 1, lt.scale[0] = lt.scale[1] = lt.scale[2] = this._globeRadius + 2, mt.position[0] = .5 * ht.position[0], this.props.isMobile ? (gt.visible = !1, vt.visible = !1) : (gt.visible = !0, vt.visible = !0, this._computeMarkerLinePosition())
                }
            }
        }, {
            key: "_computeMarkerLinePosition",
            value: function() {
                var t = 49.2872 * Math.PI / 180,
                    e = 74.006 * Math.PI / 180,
                    i = u.mat4.create();
                ht.update(), u.mat4.invert(i, ht.worldMatrix);
                var n = u.vec3.create();
                u.vec3.set(n, this._globeRadius * Math.sin(t) * Math.cos(e), this._globeRadius * Math.cos(t), this._globeRadius * Math.sin(t) * Math.sin(e)), u.vec3.transformMat4(n, n, rt.worldMatrix), gt.position[0] = n[0], gt.position[1] = n[1], gt.position[2] = n[2];
                var o = u.vec3.create();
                u.vec3.set(o, 1.5 * this._globeRadius * Math.sin(t) * Math.cos(e), 1.5 * this._globeRadius * Math.cos(t), 1.5 * this._globeRadius * Math.sin(t) * Math.sin(e)), u.vec3.transformMat4(o, o, rt.worldMatrix), vt.material.uniforms.start.value = [n[0], n[1], n[2]], vt.material.uniforms.end.value = [o[0], o[1], o[2]], u.vec3.transformMat4(n, n, i), u.vec3.transformMat4(n, n, ht.projectionMatrix), u.vec3.transformMat4(o, o, i), u.vec3.transformMat4(o, o, ht.projectionMatrix), this.props.cityScreenStartPos[0] = this._winWidth * (n[0] + 1) / 2, this.props.cityScreenStartPos[1] = this._winHeight * (1 - (n[1] + 1) / 2), this.props.cityScreenPos[0] = this._winWidth * (o[0] + 1) / 2, this.props.cityScreenPos[1] = this._winHeight * (1 - (o[1] + 1) / 2), 0 == this.props.currentIndex ? (this._markerLineProgress += .01, this._markerLineProgress > 1 && (this._markerLineProgress = 1)) : (this._markerLineProgress -= .045, this._markerLineProgress < 0 && (this._markerLineProgress = 0));
                var r = (0, X.default)(.465, .005, .045, .985, this._markerLineProgress, 1);
                vt.material.uniforms.alpha.value = r, vt.material.uniforms.uProgress.value = r, gt.material.uniforms.alpha.value = r
            }
        }, {
            key: "detached",
            value: function() {
                if (this._indicator && this._indicator.destroy(), this._swipeIndicator && this._swipeIndicator.destroy(), l.support.multipointerdown && l.support.multipointerdown.length > 0)
                    for (var t = 0; t < l.support.multipointerdown.length; t++) this.removeEventListener(l.support.multipointerdown[t], this._onPointerDown, !1), document.removeEventListener(l.support.multipointermove[t], this._onPointerMove, !1), document.removeEventListener(l.support.multipointerup[t], this._onPointerUp, !1);
                else this.removeEventListener(l.support.pointerdown, this._onPointerDown, !1), document.removeEventListener(l.support.pointermove, this._onPointerMove, !1), document.removeEventListener(l.support.pointerup, this._onPointerUp, !1)
            }
        }, {
            key: "events",
            get: function() {
                return {
                    "pointerdown .js-home-video-btn": "_onVideoBtnDown"
                }
            }
        }, {
            key: "template",
            get: function() {
                return i(116)
            }
        }, {
            key: "defaultProps",
            get: function() {
                return {
                    scroll: {
                        type: "f",
                        value: 0
                    },
                    direction: {
                        type: "f",
                        value: 1
                    },
                    onReady: {
                        type: "fn",
                        value: function() {}
                    },
                    onContentChange: {
                        type: "fn",
                        value: function() {}
                    },
                    isReady: {
                        type: "bool",
                        value: !1
                    },
                    circle1Progress: {
                        type: "f",
                        value: 0
                    },
                    circle1Scale: {
                        type: "f",
                        value: 0
                    },
                    circle2Scale: {
                        type: "f",
                        value: 0
                    },
                    circle3Scale: {
                        type: "f",
                        value: 0
                    },
                    circle1Alpha: {
                        type: "f",
                        value: 0
                    },
                    circle2Alpha: {
                        type: "f",
                        value: 0
                    },
                    circle3Alpha: {
                        type: "f",
                        value: 0
                    },
                    currentIndex: {
                        typr: "int",
                        value: -1
                    },
                    content: {
                        type: "json",
                        value: null
                    },
                    isLoading: {
                        type: "bool",
                        value: !0
                    },
                    loaderProgress: {
                        type: "f",
                        value: 0
                    },
                    initCircleRadius: {
                        type: "f",
                        value: 0
                    },
                    width: {
                        type: "f",
                        value: window.innerWidth
                    },
                    showVideo: {
                        type: "bool",
                        value: !1
                    },
                    forcePlayVideo: {
                        type: "bool",
                        value: !1
                    },
                    outterRotation: {
                        type: "f",
                        value: 0
                    },
                    innerRotation: {
                        type: "f",
                        value: 0
                    },
                    outterScale: {
                        type: "f",
                        value: 0
                    },
                    innerScale: {
                        type: "f",
                        value: 0
                    },
                    outterPosition: {
                        type: "f",
                        value: 0
                    },
                    innerPosition: {
                        type: "f",
                        value: 0
                    },
                    cityScreenPos: {
                        type: "arr",
                        value: [0, 0]
                    },
                    cityScreenStartPos: {
                        type: "arr",
                        value: [0, 0]
                    },
                    isMenuActive: {
                        type: "bool",
                        value: !1
                    },
                    isMobile: {
                        type: "bool",
                        value: window.innerWidth < 700
                    },
                    wsRoot: "",
                    winHeight: {
                        type: "f",
                        value: window.innerHeight
                    },
                    handlerPos: {
                        type: "arr",
                        value: [0, 0]
                    },
                    handlerAlpha: {
                        type: "f",
                        value: 0
                    }
                }
            }
        }]), e
    }(l.Component);
    (0, l.register)("page-home", bt)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "ready",
                value: function() {
                    var t = this;
                    console.log("<page-home> ready()"), this.props.onReady(), setTimeout(function() {
                        t.props.isReady = !0, t.props.onContentChange()
                    }, 1e3), a.EventDispatcher.fire("interface:show")
                }
            }, {
                key: "resize",
                value: function() {
                    this.props.onContentChange()
                }
            }, {
                key: "template",
                get: function() {
                    return i(117)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        scroll: {
                            type: "f",
                            value: 0
                        },
                        direction: {
                            type: "f",
                            value: 1
                        },
                        onReady: {
                            type: "fn",
                            value: function() {}
                        },
                        onContentChange: {
                            type: "fn",
                            value: function() {}
                        },
                        isReady: {
                            type: "bool",
                            value: !1
                        },
                        content: {
                            type: "json",
                            value: null
                        },
                        wsRoot: ""
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("page-policies", l)
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = i(0),
        u = i(1),
        c = i(33),
        h = n(c),
        p = i(32),
        d = n(p),
        f = i(19),
        m = n(f),
        v = i(18),
        g = n(v),
        b = i(84),
        y = n(b),
        _ = i(5),
        w = n(_),
        x = i(6),
        P = n(x),
        M = new u.Renderer({
            alpha: !0,
            antialias: !0
        });
    if (M.gl) {
        M.setPixelRatio(1), M.resize(window.innerWidth, window.innerHeight);
        var k = new u.Scene,
            E = new u.Camera({
                fov: 25,
                aspect: window.innerWidth / window.innerHeight,
                near: 1,
                far: 1e4,
                type: "perspective"
            }),
            C = new u.Mesh;
        C.material = new u.Material(M.gl, {
            vertexShader: h.default,
            fragmentShader: d.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .5,
                uPointSize: 1
            },
            blend: !0,
            depthTest: !1,
            type: M.gl.POINTS
        }), C.geometry = new u.SphereGeometryBuffer(M.gl, {
            radius: 1,
            widthSegments: 30,
            heightSegments: 30
        }), k.add(C);
        var S = new u.Mesh;
        S.material = new u.Material(M.gl, {
            vertexShader: m.default,
            fragmentShader: g.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .2,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !0
        }), S.geometry = new y.default(M.gl, {
            radius: 1
        }), S.rotation[2] = Math.PI / 2, S.position[2] = 0, k.add(S);
        var T = new u.Mesh;
        T.material = new u.Material(M.gl, {
            vertexShader: m.default,
            fragmentShader: g.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .2,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !0
        }), T.geometry = new y.default(M.gl, {
            radius: 1
        }), T.rotation[2] = Math.PI / 2, T.position[2] = 0, k.add(T);
        var O = new u.Mesh;
        O.material = new u.Material(M.gl, {
            vertexShader: m.default,
            fragmentShader: g.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .2,
                roughness: 1,
                metalness: 0,
                useDash: 1
            },
            blend: !0,
            depthTest: !0
        }), O.geometry = new y.default(M.gl, {
            radius: 1
        }), O.rotation[2] = Math.PI / 2, O.position[2] = 0, k.add(O);
        var A = new u.Mesh;
        A.material = new u.Material(M.gl, {
            vertexShader: h.default,
            fragmentShader: d.default,
            uniforms: {
                color: [56 / 255, 56 / 255, 56 / 255],
                alpha: .1
            },
            blend: !0,
            depthTest: !0,
            wireframe: !0
        }), A.geometry = new u.SphereGeometryBuffer(M.gl, {
            radius: 1,
            widthSegments: 30,
            heightSegments: 30
        }), k.add(A);
        var R = new u.Mesh;
        R.material = new u.Material(M.gl, {
            vertexShader: h.default,
            fragmentShader: d.default,
            uniforms: {
                color: [56 / 255, 56 / 255, 56 / 255],
                alpha: .5,
                uPointSize: 3
            },
            blend: !0,
            depthTest: !0,
            type: M.gl.POINTS
        }), R.geometry = new u.SphereGeometryBuffer(M.gl, {
            radius: 1,
            widthSegments: 30,
            heightSegments: 30
        }), k.add(R);
        var j = new u.Mesh;
        j.material = new u.Material(M.gl, {
            vertexShader: h.default,
            fragmentShader: d.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .35
            },
            blend: !0,
            depthTest: !0,
            wireframe: !0
        }), j.geometry = new u.SphereGeometryBuffer(M.gl, {
            radius: 1,
            widthSegments: 15,
            heightSegments: 15
        }), k.add(j);
        var L = new u.Mesh;
        L.material = new u.Material(M.gl, {
            vertexShader: h.default,
            fragmentShader: d.default,
            uniforms: {
                color: [0, 114 / 255, 178 / 255],
                alpha: .5,
                uPointSize: 3
            },
            blend: !0,
            depthTest: !1,
            type: M.gl.POINTS
        }), L.geometry = new u.SphereGeometryBuffer(M.gl, {
            radius: 1,
            widthSegments: 15,
            heightSegments: 15
        }), k.add(L);
        for (var D = [], I = 0; I < 3; I++) {
            var N = new u.Mesh;
            N.material = new u.Material(M.gl, {
                vertexShader: m.default,
                fragmentShader: g.default,
                uniforms: {
                    color: [0, 114 / 255, 178 / 255],
                    alpha: .2,
                    roughness: 1,
                    metalness: 0,
                    useDash: 1,
                    uDirection: 1,
                    lineWidth: 1
                },
                blend: !0,
                depthTest: !0
            }), N.geometry = new y.default(M.gl, {
                radius: 1
            }), k.add(N), D.push({
                progress: .2 * I,
                mesh: N
            })
        }
    }
    var F = function(t) {
        function e() {
            return o(this, e), r(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
        }
        return s(e, t), a(e, [{
            key: "detached",
            value: function() {
                l.EventDispatcher.off("menu:open", this._onMenuOpen, this), l.EventDispatcher.off("menu:close", this._onMenuClose, this)
            }
        }, {
            key: "_onMenuOpen",
            value: function() {
                this._isMenuActive = !0, clearTimeout(this._menuTimer)
            }
        }, {
            key: "_onMenuClose",
            value: function() {
                var t = this;
                this._menuTimer = setTimeout(function() {
                    t._isMenuActive = !1
                }, 1e3)
            }
        }, {
            key: "created",
            value: function() {
                this._introCirclePorgress = 0, this._introCircle2Progress = -.35, this._introCircle3Progress = -.7, this._introGridProgress = 0, this._wireSphereProgress = 0, this._autoRotation = 0, this._isMenuActive = !1
            }
        }, {
            key: "ready",
            value: function() {
                var t = this;
                this.props.onReady(), setTimeout(function() {
                    t.props.isReady = !0, t.props.onContentChange()
                }, 1e3), this.$scene = this.querySelector(".js-scene"), this.$scene.appendChild(M.canvas), l.EventDispatcher.fire("interface:show"), this.$sphere = this.querySelector(".js-sphere"), this.$sphereMobile = this.querySelector(".js-sphere-mobile"), this.$node = this.querySelector(".js-node"), this.$nodeMobile = this.querySelector(".js-node-mobile"), setTimeout(function() {
                    t.resize()
                }, 1e3), setTimeout(function() {
                    t.resize()
                }, 2e3), l.EventDispatcher.on("menu:open", this._onMenuOpen, this), l.EventDispatcher.on("menu:close", this._onMenuClose, this)
            }
        }, {
            key: "resize",
            value: function() {
                M.gl && (this.props.onContentChange(), this._winWidth = window.innerWidth, this._winHeight = window.innerHeight, this._isMobile = this._winWidth < 700, M.resize(this._winWidth, this._winHeight), E.aspect = this._winWidth / this._winHeight, E.updateProjectionMatrix(), this._globeRadius = this._isMobile ? Math.min(.9 * this._winWidth / 2, .9 * window.innerHeight / 2) : Math.min(.6 * this._winWidth / 2, .6 * window.innerHeight / 2), this._cameraZ = this._winHeight / 2 / Math.tan(25 * Math.PI / 360), this._spherePosition = (0, P.default)(this._isMobile ? this.$sphereMobile : this.$sphere), this._sphereWidth = this._isMobile ? this.$sphereMobile.clientWidth : this.$sphere.clientWidth, this._sphereHeight = this._isMobile ? this.$sphereMobile.clientHeight : this.$sphere.clientHeight, this._nodePosition = (0, P.default)(this._isMobile ? this.$nodeMobile : this.$node))
            }
        }, {
            key: "update",
            value: function() {
                if (M.gl && !this._isMenuActive) {
                    this._autoRotation += .001;
                    for (var t = 0; t < D.length; t++) D[t].progress += .006, D[t].progress > 1 && (D[t].progress = 0), D[t].mesh.scale[0] = D[t].mesh.scale[1] = D[t].mesh.scale[2] = .5 * this._winHeight * D[t].progress, D[t].mesh.material.uniforms.alpha.value = .6 * (1 - D[t].progress), D[t].mesh.material.uniforms.scale.value = D[t].mesh.scale, D[t].mesh.position[0] = this._nodePosition.left - this._winWidth / 2, D[t].mesh.position[1] = -1 * this._nodePosition.top;
                    E.position[2] = this._cameraZ, this._introGridProgress += .0066, this._introGridProgress > 1 && (this._introGridProgress = 1);
                    var e = (0, w.default)(.465, .005, .045, .985, this._introGridProgress, 1);
                    if (C.scale[0] = C.scale[1] = C.scale[2] = this._globeRadius + this._globeRadius * (1 - e), C.material.uniforms.alpha.value = .5 * e, C.rotation[0] = Math.PI / 4 * (1 - e), C.rotation[1] = Math.PI / 4 * (1 - e), C.rotation[2] = Math.PI / 4 * (1 - e), C.material.uniforms.uPointSize.value = this._isMobile ? 1 : 2.5, this._introGridProgress >= .5 && (this._introCirclePorgress += .003, this._introCirclePorgress > 1 && (this._introCirclePorgress = 0), S.scale[0] = S.scale[1] = S.scale[2] = this._globeRadius + 1.5 * this._globeRadius * this._introCirclePorgress, S.material.uniforms.scale.value = S.scale, S.material.uniforms.alpha.value = .5 * (1 - this._introCirclePorgress), S.material.uniforms.uDirection.value = 1, S.material.uniforms.lineWidth.value = 1, this._introCircle2Progress += .003, this._introCircle2Progress > 1 && (this._introCircle2Progress = 0), this._introCircle2Progress > 0 && (T.scale[0] = T.scale[1] = T.scale[2] = this._globeRadius + 1.5 * this._globeRadius * this._introCircle2Progress, T.material.uniforms.scale.value = T.scale, T.material.uniforms.alpha.value = .5 * (1 - this._introCircle2Progress), T.material.uniforms.uDirection.value = 1, T.material.uniforms.lineWidth.value = 1), this._introCircle3Progress += .003, this._introCircle3Progress > 1 && (this._introCircle3Progress = 0), this._introCircle3Progress > 0 && (O.scale[0] = O.scale[1] = O.scale[2] = this._globeRadius + 1.5 * this._globeRadius * this._introCircle3Progress, O.material.uniforms.scale.value = O.scale, O.material.uniforms.alpha.value = .5 * (1 - this._introCircle3Progress), O.material.uniforms.uDirection.value = 1, O.material.uniforms.lineWidth.value = 1)), C.position[1] = .1 * this._winHeight, S.position[1] = .1 * this._winHeight, T.position[1] = .1 * this._winHeight, O.position[1] = .1 * this._winHeight, (this._nodePosition.top - this.props.scroll) / this._winHeight < 0) {
                        this._wireSphereProgress += .0066, this._wireSphereProgress > 1 && (this._wireSphereProgress = 1);
                        var i = (0, w.default)(.465, .005, .045, .985, this._wireSphereProgress, 1);
                        j.material.uniforms.alpha.value = .4 * i, j.scale[0] = j.scale[1] = j.scale[2] = this._globeRadius + this._globeRadius * (1 - i), j.position[0] = this._spherePosition.left - this._winWidth / 2 + this._sphereWidth / 2, j.position[1] = -1 * this._spherePosition.top - this._sphereHeight / 2, j.rotation[0] = Math.PI / 4 * (1 - i) + this._autoRotation, j.rotation[1] = Math.PI / 4 * (1 - i) + this._autoRotation, j.rotation[2] = Math.PI / 4 * (1 - i) + this._autoRotation, L.rotation[0] = j.rotation[0], L.rotation[1] = j.rotation[1], L.rotation[2] = j.rotation[2], L.position[0] = j.position[0], L.position[1] = j.position[1], L.position[2] = j.position[2], L.scale[0] = j.scale[0], L.scale[1] = j.scale[1], L.scale[2] = j.scale[2], A.scale[0] = A.scale[1] = A.scale[2] = .6 * this._globeRadius, A.position[0] = this._spherePosition.left - this._winWidth / 2 + this._sphereWidth / 2, A.position[1] = -1 * this._spherePosition.top - this._sphereHeight / 2, A.rotation[0] = j.rotation[0], A.rotation[1] = j.rotation[1], A.rotation[2] = j.rotation[2], R.rotation[0] = A.rotation[0], R.rotation[1] = A.rotation[1], R.rotation[2] = A.rotation[2], R.position[0] = A.position[0], R.position[1] = A.position[1], R.position[2] = A.position[2], R.scale[0] = A.scale[0], R.scale[1] = A.scale[1], R.scale[2] = A.scale[2]
                    } else this._wireSphereProgress = 0;
                    M.clearColor(0, 0, 0, 0), M.clear(), M.render(k, E), E.position[1] = -1 * this.props.scroll - .5 * this._winHeight
                }
            }
        }, {
            key: "template",
            get: function() {
                return i(118)
            }
        }, {
            key: "defaultProps",
            get: function() {
                return {
                    scroll: {
                        type: "f",
                        value: 0
                    },
                    direction: {
                        type: "f",
                        value: 1
                    },
                    onReady: {
                        type: "fn",
                        value: function() {}
                    },
                    onContentChange: {
                        type: "fn",
                        value: function() {}
                    },
                    isReady: {
                        type: "bool",
                        value: !1
                    },
                    content: {
                        type: "json",
                        value: null
                    },
                    wsRoot: "",
                    isMenuActive: {
                        type: "bool",
                        value: !1
                    }
                }
            }
        }]), e
    }(l.Component);
    (0, l.register)("page-solution", F)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(0),
        l = i(6),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(l),
        c = function(t) {
            function e() {
                return n(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
            }
            return r(e, t), s(e, [{
                key: "_toggleMenu",
                value: function() {
                    this.props.isMenuActive = !this.props.isMenuActive, this.props.isMenuActive ? a.EventDispatcher.fire("menu:open") : a.EventDispatcher.fire("menu:close")
                }
            }, {
                key: "created",
                value: function() {
                    this.isScrollEnabled = !0, this._scrollTop = 0, this._onScroll = this._onScroll.bind(this), this._disableScroll = this._disableScroll.bind(this), this._enableScroll = this._enableScroll.bind(this), this._pageIndex = 0, this._cumulatedScroll = 0, this._cumulatedScrollStart = 0, this._headerPosition = 0
                }
            }, {
                key: "attached",
                value: function() {
                    a.support.touch ? document.getElementsByTagName("html")[0].classList.add("has-touch") : document.getElementsByTagName("html")[0].classList.add("has-not-touch"), document.addEventListener("scroll", this._onScroll, !1), this._onScroll()
                }
            }, {
                key: "_onScroll",
                value: function() {
                    var t = this.props.direction;
                    this._lastScroll > this.props.scrollTop && (this.props.direction = -1), this._lastScroll < this.props.scrollTop && (this.props.direction = 1), t !== this.props.direction && (this._cumulatedScrollStart = this._scrollTop), 1 == this.props.direction ? this._headerPosition = -1 * (this._scrollTop - this._cumulatedScrollStart) : (this._headerPosition = -this._headerHeight + (this._cumulatedScrollStart - this._scrollTop), this._headerPosition = Math.min(this._headerPosition, 0)), -1 == this.props.direction && this.props.scroll < this._headerHeight && (this._headerPosition = -this._headerHeight + -1 * this.props.scroll), this._lastScroll = this.props.scrollTop, this._scrollTop = window.pageYOffset || document.documentElement.scrollTop
                }
            }, {
                key: "ready",
                value: function() {
                    var t = this;
                    this.$header = this.querySelector(".js-header"), this.$fakeScroll = this.querySelector(".js-fake-scroll"), this.$content = this.querySelector(".js-content"), a.EventDispatcher.on("scroll:disable", this._disableScroll, this), a.EventDispatcher.on("scroll:enable", this._enableScroll, this), this.$menuButton = this.querySelector(".js-menu-button"), a.EventDispatcher.on("interface:show", function() {
                        t.props.showInterface = !0
                    }, this), a.EventDispatcher.on("interface:hide", function() {
                        t.props.showInterface = !1
                    }, this)
                }
            }, {
                key: "_disableScroll",
                value: function() {
                    this.isScrollEnabled = !1, this.props.scrollTop = this._scrollTop
                }
            }, {
                key: "_enableScroll",
                value: function() {
                    this.isScrollEnabled = !0, this.props.scrollTop = this._scrollTop
                }
            }, {
                key: "update",
                value: function() {
                    if (!this.isScrollEnabled) return !0;
                    this._isMobile ? (this.props.scrollTop = this._scrollTop, this.props.headerPosition = this._headerPosition) : (this.props.scrollTop += .1 * (this._scrollTop - this.props.scrollTop), this.props.headerPosition += .1 * (this._headerPosition - this.props.headerPosition))
                }
            }, {
                key: "resize",
                value: function() {
                    this.props.winHeight = window.innerHeight, this.props.winWidth = window.innerWidth, this.props.isMobile = window.innerWidth < 700, this.props.width = window.innerWidth, this.props.height = window.innerHeight, this._updateContentHeight();
                    var t = (0, u.default)(this.$menuButton);
                    this.props.menuButtonPosition[0] = t.left + this.$menuButton.clientWidth / 2, this.props.menuButtonPosition[1] = t.top + this.$menuButton.clientHeight / 2, this._headerHeight = this.$header.clientHeight, this._isMobile = window.innerWidth < 700
                }
            }, {
                key: "_updateContentHeight",
                value: function() {
                    this.$content && (this._contentHeight = this.$content.clientHeight, this.$fakeScroll.style.height = this._contentHeight + "px")
                }
            }, {
                key: "_onPageReady",
                value: function() {
                    var t = this;
                    console.log("__PAGEREADY__"), this._pageIndex % 2 == 0 ? this.props.pageAltComponentId = null : this.props.pageComponentId = null, this._pageIndex++, "page-home" !== this._pageComponentId && (this.props.showInterface = !0), requestAnimationFrame(function() {
                        t._updateContentHeight(), t.props.showOverlay = !1
                    })
                }
            }, {
                key: "onRouteChange",
                value: function(t, e) {
                    var i = this;
                    if ("" != t.params.page && void 0 != t.params.page || (t.params.page = "home", t.completePath = "/home"), this.props.isMenuActive = !1, t.path != e.path || t.query !== this._lastQuery) {
                        this._lastQuery = t.query, window.scrollTo(0, 0), this._scrollTop = 0, this.props.scrollTop = 0, a.EventDispatcher.fire("scroll:enable"), this.props.isPageLoading = !0, this._pageComponentId = "page-" + t.params.page;
                        var n = void 0;
                        "article" == t.params.page && e && e.params && "community" == e.params.page ? n = 100 : (n = 800, this.props.showOverlay = !0), setTimeout(function() {
                            i.props.pageDataUrl = null, "page-home" == i._pageComponentId && (i.props.showInterface = !1), requestAnimationFrame(function() {
                                i.props.pageDataUrl = i.props.wsRoot + t.completePath.replace(/^\//, "").replace(/^\/?(fr|en)\//g, "")
                            })
                        }, n)
                    }
                }
            }, {
                key: "_onPageDataLoaded",
                value: function(t) {
                    if (console.log("_onPageDataLoaded", t.body), this.props.pageContent = t.body, t.body.meta) {
                        document.title = t.body.meta.title;
                        for (var e = document.getElementsByTagName("meta"), i = 0; i < e.length; i++) "description" == e[i].name.toLowerCase() && (e[i].content = t.body.meta.description)
                    }
                    this._pageIndex % 2 == 0 ? this.props.pageComponentId = t.body["page-template"] : this.props.pageAltComponentId = t.body["page-template"], this.props.currPageComponentId = t.body["page-template"]
                }
            }, {
                key: "template",
                get: function() {
                    return i(119)
                }
            }, {
                key: "defaultProps",
                get: function() {
                    return {
                        wsRoot: "",
                        lang: "",
                        winHeight: {
                            type: "int",
                            value: 0
                        },
                        winWidth: {
                            type: "int",
                            value: 0
                        },
                        pageComponentId: null,
                        pageAltComponentId: null,
                        currPageComponentId: null,
                        pageDataUrl: null,
                        pageContent: {
                            type: "json",
                            value: null
                        },
                        baseUrl: "",
                        routeOptions: {
                            type: "json",
                            value: {
                                hashbang: !1,
                                click: !0
                            }
                        },
                        routes: {
                            "/": {},
                            "/404": {},
                            "/:page/*": {},
                            "/:page": {}
                        },
                        scrollTop: {
                            type: "f",
                            value: 0
                        },
                        direction: {
                            type: "f",
                            value: 1
                        },
                        isMenuActive: {
                            type: "bool",
                            value: !1
                        },
                        menuButtonPosition: {
                            type: "arr",
                            value: [0, 0]
                        },
                        showInterface: {
                            type: "bool",
                            value: !1
                        },
                        showOverlay: {
                            type: "bool",
                            value: !1
                        },
                        isMobile: {
                            type: "bool",
                            value: window.innerWidth < 700
                        },
                        headerPosition: {
                            type: "f",
                            value: 0
                        }
                    }
                }
            }]), e
        }(a.Component);
    (0, a.register)("x-application", c)
}, function(t, e, i) {
    var n = i(92);
    "string" == typeof n && (n = [
        [t.i, n, ""]
    ]);
    var o = {};
    o.transform = void 0;
    i(27)(n, o);
    n.locals && (t.exports = n.locals)
}, function(t, e, i) {
    var n = i(93);
    "string" == typeof n && (n = [
        [t.i, n, ""]
    ]);
    var o = {};
    o.transform = void 0;
    i(27)(n, o);
    n.locals && (t.exports = n.locals)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(3),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        l = i(4),
        u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(l),
        c = function(t) {
            function e(t, i) {
                function r(t, e, i, n, o, r, s, m, v, g) {
                    f = 0;
                    var b, y, _ = r / v,
                        w = s / g,
                        x = r / 2,
                        P = s / 2,
                        M = m / 2,
                        k = v + 1,
                        E = g + 1,
                        C = u.create();
                    for (y = 0; y < E; y++) {
                        var S = y * w - P;
                        for (b = 0; b < k; b++) {
                            var T = b * _ - x;
                            C[t] = T * n, C[e] = S * o, C[i] = M, l.push(C[0], C[1], C[2]), C[t] = 1, C[e] = 1, C[i] = 1, C[t] = 0, C[e] = 0, C[i] = m > 0 ? 1 : -1, c.push(C[0], C[1], C[2]), h.push(b / v, 1 - y / g), p.push(1, 1, 1), f += 1
                        }
                    }
                    for (y = 0; y < g; y++)
                        for (b = 0; b < v; b++) {
                            var O = d + b + k * y,
                                A = d + b + k * (y + 1),
                                R = d + (b + 1) + k * (y + 1),
                                j = d + (b + 1) + k * y;
                            a.push(O, A, j), a.push(A, R, j)
                        }
                    d += f
                }
                n(this, e);
                var s = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 4));
                i = Object.assign({}, {
                    width: 10,
                    height: 10,
                    depth: 10,
                    widthSegments: 1,
                    heightSegments: 1,
                    depthSegments: 1
                }, i);
                var a = [],
                    l = [],
                    c = [],
                    h = [],
                    p = [],
                    d = 0,
                    f = 0;
                return r(2, 1, 0, -1, -1, i.depth, i.height, i.width, Math.floor(i.depthSegments), Math.floor(i.heightSegments)), r(2, 1, 0, 1, -1, i.depth, i.height, -i.width, Math.floor(i.depthSegments), Math.floor(i.heightSegments)), r(0, 2, 1, 1, 1, i.width, i.depth, i.height, Math.floor(i.widthSegments), Math.floor(i.depthSegments)), r(0, 2, 1, 1, -1, i.width, i.depth, -i.height, Math.floor(i.widthSegments), Math.floor(i.depthSegments)), r(0, 1, 2, 1, -1, i.width, i.height, i.depth, Math.floor(i.widthSegments), Math.floor(i.heightSegments)), r(0, 1, 2, -1, -1, i.width, i.height, -i.depth, Math.floor(i.widthSegments), Math.floor(i.heightSegments)), s.length = d, s.addAttribute("index", new Uint16Array(a), 1), s.addAttribute("position", new Float32Array(l), 3), s.addAttribute("normal", new Float32Array(c), 3), s.addAttribute("uv", new Float32Array(h), 2), s.addAttribute("color", new Float32Array(p), 3), s
            }
            return r(e, t), e
        }(a.default);
    e.default = c
}, function(t, e, i) {
    "use strict";

    function n(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    }

    function o(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function l() {
        requestAnimationFrame(l);
        for (var t = 0; t < E.length; t++) E[t]._canUpdate = !0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var u = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        c = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(e);
                return null === r ? void 0 : t(r, i, n)
            }
            if ("value" in o) return o.value;
            var s = o.get;
            if (void 0 !== s) return s.call(n)
        },
        h = i(11),
        p = o(h),
        d = i(8),
        f = o(d),
        m = i(7),
        v = n(m),
        g = i(4),
        b = n(g),
        y = i(14),
        _ = (n(y), "ontouchstart" in window || navigator.msMaxTouchPoints > 0),
        w = !!window.navigator.pointerEnabled,
        x = !!window.navigator.msPointerEnabled,
        P = _ ? "touchstart" : w ? "pointerdown" : x ? "MSPointerDown" : "mousedown",
        M = _ ? "touchmove" : w ? "pointermove" : x ? "MSPointerMove" : "mousemove",
        k = _ ? "touchend" : w ? "pointerup" : x ? "MSPointerUp" : "mouseup",
        E = [];
    l();
    var C = function(t) {
        function e(t) {
            r(this, e);
            var i = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t = Object.assign({}, {
                fov: 45,
                aspect: window.innerWidth / window.innerHeight,
                near: 10,
                far: 1e3,
                type: "perspective",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                orbitControl: !1,
                lookAt: null,
                pointerParent: document,
                firstPerson: !1,
                moveSpeed: 20,
                distance: 20,
                wheel: !0
            }, t), i.fov = t.fov, i.aspect = t.aspect, i.near = t.near, i.far = t.far, i.type = t.type, i.left = t.left, i.right = t.right, i.top = t.top, i.bottom = t.bottom, i.orbitControl = t.orbitControl, i.firstPerson = t.firstPerson, i.wheel = t.wheel, i.projectionMatrix = v.create(), i.updateProjectionMatrix(), (i.orbitControl || i.firstPerson) && (i.lookAt || (i.lookAt = b.create(), b.set(i.lookAt, 0, 0, 0)), i._pointerParent = t.pointerParent, i._initPointerEvents(), i._cameraDistance = t.distance, i._canUpdate = !0, E.push(i)), i.firstPerson && (document.addEventListener("contextmenu", i.onContextMenu.bind(i), !1), document.addEventListener("keydown", i.onKeyDown.bind(i), !1), document.addEventListener("keyup", i.onKeyUp.bind(i), !1)), i.pitchObject = new f.default, i.yawObject = new f.default, i.yawObject.add(i.pitchObject), i.moveSpeed = t.moveSpeed, i.time = Date.now(), i._velocity = b.create(), i._moveForward = !1, i._moveBackward = !1, i._moveLeft = !1, i._moveRight = !1, i._moveUp = !1, i._camera = b.create(), i._oldPosition = b.create(), i
        }
        return a(e, t), u(e, [{
            key: "updateProjectionMatrix",
            value: function() {
                "perspective" == this.type ? v.perspective(this.projectionMatrix, this.fov * Math.PI / 180, this.aspect, this.near, this.far) : "orthographic" != this.type && "ortho" != this.type || v.ortho(this.projectionMatrix, this.left, this.right, this.bottom, this.top, this.near, this.far)
            }
        }, {
            key: "_initPointerEvents",
            value: function() {
                this.winWidth = window.innerWidth, this.winHeight = window.innerHeight, this._isPointerDown = !1, this.isRightClick = !1, this.pointerXMove = 0, this.pointerYMove = 0, this.pointerX = 0, this.pointerY = 0, this.pointerZ = 0, this.lastPointerX = 0, this.lastPointerY = 0, this.lastPointerZ = 0, this.theta = 0, this.phi = 0, this.thetaDown = 0, this.phiDown = 0, this.currTheta = 0, this.currPhi = 0, this._minPolarAngle = -.5 * Math.PI, this._maxPolarAngle = .5 * Math.PI, this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this._onMouseWheel = this._onMouseWheel.bind(this), this.onContextMenu = this.onContextMenu.bind(this), this._pointerParent.addEventListener(P, this._onPointerDown, !1), document.addEventListener(M, this._onPointerMove, !1), document.addEventListener(k, this._onPointerUp, !1), this._pointerParent.addEventListener("contextmenu", this.onContextMenu, !1), this.wheel && (this._pointerParent.addEventListener("DOMMouseScroll", this._onMouseWheel, !1), this._pointerParent.addEventListener("mousewheel", this._onMouseWheel, !1))
            }
        }, {
            key: "delete",
            value: function() {
                this._pointerParent.removeEventListener(P, this._onPointerDown, !1), document.removeEventListener(M, this._onPointerMove, !1), document.removeEventListener(k, this._onPointerUp, !1), this._pointerParent.removeEventListener("contextmenu", this.onContextMenu, !1), this.wheel && (this._pointerParent.removeEventListener("DOMMouseScroll", this._onMouseWheel, !1), this._pointerParent.removeEventListener("mousewheel", this._onMouseWheel, !1))
            }
        }, {
            key: "onContextMenu",
            value: function(t) {
                event.preventDefault()
            }
        }, {
            key: "onKeyDown",
            value: function(t) {
                switch (t.keyCode) {
                    case 87:
                        this._moveForward = !0;
                        break;
                    case 65:
                        this._moveLeft = !0;
                        break;
                    case 83:
                        this._moveBackward = !0;
                        break;
                    case 68:
                        this._moveRight = !0;
                        break;
                    case 32:
                        this._velocity[1] += 5
                }
            }
        }, {
            key: "onKeyUp",
            value: function(t) {
                switch (t.keyCode) {
                    case 38:
                    case 87:
                        this._moveForward = !1;
                        break;
                    case 37:
                    case 65:
                        this._moveLeft = !1;
                        break;
                    case 40:
                    case 83:
                        this._moveBackward = !1;
                        break;
                    case 39:
                    case 68:
                        this._moveRight = !1
                }
            }
        }, {
            key: "_onMouseWheel",
            value: function(t) {
                t.preventDefault();
                var e;
                t.wheelDelta ? e = t.wheelDelta : t.detail ? e = 40 * -t.detail : t.wheelDeltaX ? (e = t.wheelDeltaY / 12, t.wheelDeltaX) : void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS ? e = 0 : e = 0, this._cameraDistance += -2 * e * .1
            }
        }, {
            key: "_onPointerDown",
            value: function(t) {
                3 == t.which && (this.isRightClick = !0, t.preventDefault(), t.stopPropagation()), this._isPointerDown = !0, this.touchEvent = _ ? t.touches[0] || t.changedTouches[0] : t, this.touchEventPageX = this.touchEvent.pageX, this.touchEventPageY = this.touchEvent.pageY, this.touchEventPageX -= window.pageXOffset || document.documentElement.scrollLeft, this.touchEventPageY -= window.pageYOffset || document.documentElement.scrollTop, this.pointerXDown = this.touchEventPageX, this.pointerYDown = this.touchEventPageY, this.isRightClick && (this.startPointerX = this.pointerXMove, this.startPointerY = this.pointerYMove), this.thetaDown = this.theta, this.phiDown = this.phi
            }
        }, {
            key: "_onPointerMove",
            value: function(t) {
                this._isPointerDown && (t.preventDefault(), this.touchEvent = _ ? t.touches[0] || t.changedTouches[0] : t, this.touchEventPageX = this.touchEvent.pageX, this.touchEventPageY = this.touchEvent.pageY, this.touchEventPageX -= window.pageXOffset || document.documentElement.scrollLeft, this.touchEventPageY -= window.pageYOffset || document.documentElement.scrollTop, this.isRightClick ? (this.pointerXMove = this.startPointerX + (this.touchEventPageX - this.pointerXDown), this.pointerYMove = this.startPointerY + (this.touchEventPageY - this.pointerYDown)) : (this.pointerXOrbiter = this.pointerXDown - this.touchEventPageX, this.pointerYOrbiter = this.pointerYDown - this.touchEventPageY, this.theta = this.thetaDown + this.pointerXOrbiter / this.winWidth * 2 * Math.PI, this.phi = this.phiDown + this.pointerYOrbiter / this.winHeight * 2 * Math.PI * -1, this.phi = Math.max(this._minPolarAngle, Math.min(this._maxPolarAngle, this.phi))))
            }
        }, {
            key: "_onPointerUp",
            value: function() {
                this._isPointerDown = !1, this.isRightClick = !1
            }
        }, {
            key: "update",
            value: function(t) {
                if (this.orbitControl)(this._canUpdate || t) && (this.currTheta += .1 * (this.theta - this.currTheta), this.currPhi += .1 * (this.phi - this.currPhi), this.position[0] = Math.sin(this.currTheta) * Math.cos(this.phi) * this._cameraDistance, this.position[1] = Math.sin(this.phi) * this._cameraDistance, this.position[2] = Math.cos(this.currTheta) * Math.cos(this.phi) * this._cameraDistance, this.lookAt[0] = this.pointerXMove / -100, this.lookAt[1] = this.pointerYMove / 100, c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this));
                else if (this.firstPerson) {
                    if (this._canUpdate || t) {
                        var i = Date.now(),
                            n = (i - this.time) / 1e3;
                        this.prevTime = i, this._velocity[0] -= 10 * this._velocity[0] * n, this._velocity[1] -= 10 * this._velocity[1] * n, this._velocity[2] -= 10 * this._velocity[2] * n, this.position[1] < 0 && this._velocity[1] < 0 && (this._velocity[1] = 0, this.position[1] = 0), this._moveForward && (this._velocity[2] -= this.moveSpeed * n), this._moveBackward && (this._velocity[2] += this.moveSpeed * n), this._moveLeft && (this._velocity[0] -= this.moveSpeed * n), this._moveRight && (this._velocity[0] += this.moveSpeed * n), this._camera[0] = this._velocity[0], this._camera[1] = this._velocity[1], this._camera[2] = this._velocity[2], this.currTheta += .2 * (this.theta - this.currTheta), this.currPhi += .2 * (this.phi - this.currPhi), this._oldPosition[0] = this.position[0], this._oldPosition[1] = this.position[1], this._oldPosition[2] = this.position[2], this.position[0] = 0, this.position[1] = 0, this.position[2] = 0, this.lookAt[0] = Math.sin(this.currTheta) * Math.cos(this.currPhi) * this._cameraDistance, this.lookAt[1] = Math.sin(this.currPhi) * this._cameraDistance * -1, this.lookAt[2] = Math.cos(this.currTheta) * Math.cos(this.currPhi) * this._cameraDistance, this.updateMatrix();
                        var o = v.create();
                        v.copy(o, this.matrix), v.translate(o, o, this._camera);
                        var r = b.create();
                        v.getTranslation(r, o), this.position[0] = this._oldPosition[0] + r[0], this.position[1] = this._oldPosition[1] + r[1], this.position[2] = this._oldPosition[2] + r[2], this.lookAt[0] = Math.sin(this.currTheta) * Math.cos(this.currPhi) * this._cameraDistance + this.position[0], this.lookAt[1] = Math.sin(this.currPhi) * this._cameraDistance * -1 + this.position[1], this.lookAt[2] = Math.cos(this.currTheta) * Math.cos(this.currPhi) * this._cameraDistance + this.position[2], this.updateMatrix(), this.updateWorldMatrix(), this.time = i
                    }
                } else c(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this);
                this._canUpdate = !1
            }
        }]), e
    }(p.default);
    e.default = C
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        s = i(17),
        a = n(s),
        l = i(15),
        u = n(l),
        c = i(16),
        h = (n(c), function() {
            function t(e, i) {
                var n = this;
                o(this, t), i = Object.assign({}, {
                    format: e.RGBA,
                    type: e.UNSIGNED_BYTE,
                    width: 1,
                    height: 1,
                    linear: !0,
                    mipmap: !1,
                    miplinear: !1,
                    wrapS: e.CLAMP_TO_EDGE,
                    wrapT: e.CLAMP_TO_EDGE,
                    urls: null
                }, i), this._uid = (0, a.default)(), this.gl = e, this.width = i.width, this.height = i.height, this.format = i.format, this.type = i.type;
                var r = e.getExtension("OES_texture_float");
                e.getExtension("OES_texture_float_linear");
                if (!r) throw "trying to create a FrameBuffer of with gl.FLOAT type but theres no floating point texture support";
                this._texture = this.gl.createTexture(), e.bindTexture(e.TEXTURE_CUBE_MAP, this._texture), e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.format, this.width, this.height, 0, this.format, this.type, new Uint8Array([0, 0, 0, 255])), e.texImage2D(e.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.format, this.width, this.height, 0, this.format, this.type, new Uint8Array([0, 0, 0, 255])), e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.format, this.width, this.height, 0, this.format, this.type, new Uint8Array([0, 0, 0, 255])), e.texImage2D(e.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.format, this.width, this.height, 0, this.format, this.type, new Uint8Array([0, 0, 0, 255])), e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.format, this.width, this.height, 0, this.format, this.type, new Uint8Array([0, 0, 0, 255])), e.texImage2D(e.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.format, this.width, this.height, 0, this.format, this.type, new Uint8Array([0, 0, 0, 255])), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR), Object.defineProperty(this, "wrapS", {
                    set: function(t) {
                        n.gl.bindTexture(n.gl.TEXTURE_CUBE_MAP, n._texture), n.gl.texParameteri(n.gl.TEXTURE_CUBE_MAP, n.gl.TEXTURE_WRAP_S, t)
                    }
                }), Object.defineProperty(this, "wrapT", {
                    set: function(t) {
                        n.gl.bindTexture(n.gl.TEXTURE_CUBE_MAP, n._texture), n.gl.texParameteri(n.gl.TEXTURE_CUBE_MAP, n.gl.TEXTURE_WRAP_T, t)
                    }
                }), this.wrapS = i.wrapS, this.wrapT = i.wrapT, this.setFilter(i.linear, i.mipmap, i.mipmapLinear), null !== i.urls && this.load(i.urls)
            }
            return r(t, [{
                key: "load",
                value: function(t) {
                    for (var e = this, i = [this.gl.TEXTURE_CUBE_MAP_POSITIVE_X, this.gl.TEXTURE_CUBE_MAP_NEGATIVE_X, this.gl.TEXTURE_CUBE_MAP_POSITIVE_Y, this.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, this.gl.TEXTURE_CUBE_MAP_POSITIVE_Z, this.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z], n = 0; n < t.length; n++) ! function(n) {
                        var o = i[n],
                            r = new Image;
                        r.onload = function() {
                            r.onload = null, e.bindFaceImage(o, r)
                        }, r.src = t[n]
                    }(n)
                }
            }, {
                key: "bindFaceImage",
                value: function(t, e) {
                    this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this._texture), this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !0), this.gl.texImage2D(t, 0, this.format, this.format, this.type, e)
                }
            }, {
                key: "bind",
                value: function(t) {
                    void 0 !== t && this.gl.activeTexture(this.gl.TEXTURE0 + (0 | t)), this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, this._texture)
                }
            }, {
                key: "delete",
                value: function() {
                    this.gl.deleteTexture(this._texture), this._texture = null, this.gl = null
                }
            }, {
                key: "setFilter",
                value: function(t, e, i) {
                    var n = this.gl;
                    n.bindTexture(n.TEXTURE_CUBE_MAP, this._texture);
                    var o = (0, u.default)(!!t, !!e, !!i);
                    n.texParameteri(n.TEXTURE_CUBE_MAP, n.TEXTURE_MAG_FILTER, (0, u.default)(!!t, !1, !1)), n.texParameteri(n.TEXTURE_CUBE_MAP, n.TEXTURE_MIN_FILTER, o)
                }
            }]), t
        }());
    e.default = h
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = function() {
            function t(e, i) {
                if (n(this, t), !e.getExtension("WEBGL_depth_texture")) throw "FrameBuffer useDepthTexture:true => Cannot render depth to texture, the browser doesnt support WEBKIT_WEBGL_depth_texture extension";
                i = Object.assign({}, {
                    width: 1,
                    height: 1,
                    type: e.UNSIGNED_SHORT
                }, i), this.gl = e, this.width = i.width, this.height = i.height, this.type = i.type;
                var o = e.getExtension("OES_texture_float");
                e.getExtension("OES_texture_float_linear");
                if (!o && this.type == e.FLOAT) throw "trying to create a DepthTexture of gl.FLOAT type but theres no floating point texture support";
                this._texture = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.DEPTH_COMPONENT, this.width, this.height, 0, this.gl.DEPTH_COMPONENT, this.type, null), e.bindTexture(e.TEXTURE_2D, null)
            }
            return o(t, [{
                key: "bind",
                value: function(t) {
                    void 0 !== t && this.gl.activeTexture(this.gl.TEXTURE0 + (0 | t)), this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture)
                }
            }, {
                key: "delete",
                value: function() {
                    this.gl.deleteTexture(this._texture), this._texture = null, this.gl = null
                }
            }, {
                key: "resize",
                value: function(t, e) {
                    this.width = t, this.height = e, this.gl.bindTexture(this.gl.TEXTURE_2D, this._texture), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.DEPTH_COMPONENT, this.width, this.height, 0, this.gl.DEPTH_COMPONENT, this.type, null), gl.bindTexture(gl.TEXTURE_2D, null)
                }
            }]), t
        }();
    e.default = r
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(1),
        l = function(t) {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(this, e), t = Object.assign({}, {
                    color: [1, 1, 1],
                    direction: [-1, -1, 0],
                    position: [1, 1, 1],
                    intensity: 1,
                    distance: 1e6,
                    decay: 1,
                    angle: Math.PI / 4,
                    exponent: 1,
                    castShadow: !1,
                    penumbra: 0,
                    lookAt: a.vec3.create(),
                    shadowMap: !0,
                    shadowMapWidth: 256,
                    shadowMapHeight: 256
                }, t);
                var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                return i.color = t.color, i.intensity = t.intensity, i.position = t.position, i.distance = t.distance, i.decay = t.decay, i.angle = t.angle, i.exponent = t.exponent, i.penumbra = t.penumbra, i.castShadow = t.castShadow, i.lookAt = t.lookAt, t.shadowMap && (i.shadowMap = !0, i._cacheAngle = i.angle, i.shadowMapCamera = new a.Camera({
                    near: .1,
                    far: i.distance,
                    type: "perspective",
                    fov: 2 * i._cacheAngle * 180 / Math.PI,
                    aspect: 1
                }), i.shadowMapCamera.lookAt = a.vec3.create()), i
            }
            return r(e, t), s(e, [{
                key: "update",
                value: function() {
                    this.updateMatrix(), this.updateWorldMatrix(), this.shadowMap && (this._cacheAngle !== this.angle && (this._cacheAngle = this.angle, this.shadowMapCamera.fov = 2 * this._cacheAngle * 180 / Math.PI, this.shadowMapCamera.updateProjectionMatrix()), this.shadowMapCamera.position[0] = this.position[0], this.shadowMapCamera.position[1] = this.position[1], this.shadowMapCamera.position[2] = this.position[2], this.shadowMapCamera.lookAt[0] = this.lookAt[0], this.shadowMapCamera.lookAt[1] = this.lookAt[1], this.shadowMapCamera.lookAt[2] = this.lookAt[2], this.shadowMapCamera.rotation[0] = this.rotation[0], this.shadowMapCamera.rotation[1] = this.rotation[1], this.shadowMapCamera.rotation[2] = this.rotation[2], this.shadowMapCamera.updateMatrix(), this.shadowMapCamera.updateWorldMatrix())
                }
            }]), e
        }(a.Object3d);
    e.default = l
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        l = (n(a), i(10)),
        u = n(l),
        c = i(9),
        h = n(c),
        p = i(12),
        d = (n(p), i(3)),
        f = n(d),
        m = i(21),
        v = (n(m), i(127)),
        g = n(v),
        b = i(126),
        y = n(b),
        _ = function(t) {
            function e(t, i) {
                o(this, e);
                var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                n.gl = t, i = Object.assign({}, {
                    width: 10,
                    height: 10,
                    depth: 10,
                    map: null,
                    count: 100
                }, i), n.count = i.count, n.width = i.width, n.heigth = i.heigth, n.depth = i.depth, n.material = new h.default(n.gl, {
                    blend: !0,
                    map: i.map,
                    vertexShader: g.default,
                    fragmentShader: y.default
                }), n.indices = [], n.vertices = [], n.normals = [], n.colors = [], n.uvs = [], n.vertexIndices = [], n.particleIndices = [];
                for (var s = 0, a = 0, l = 0, u = n.count; l < u; l++) n.vertices.push(Math.random() * n.width - n.width / 2), n.vertices.push(Math.random() * n.heigth - n.heigth / 2), n.vertices.push(Math.random() * n.depth - n.depth / 2), n.normals.push(0), n.normals.push(1), n.normals.push(1), n.colors.push(1), n.colors.push(1), n.colors.push(1), n.vertexIndices.push(s), n.particleIndices.push(a), ++s > 3 && (s = 0, a++);
                for (var c = 0, p = 0; p < n.count; c += 6, p += 4) n.indices.push(p + 0), n.indices.push(p + 2), n.indices.push(p + 1), n.indices.push(p + 2), n.indices.push(p + 3), n.indices.push(p + 1), n.uvs.push(0), n.uvs.push(1), n.uvs.push(1), n.uvs.push(1), n.uvs.push(0), n.uvs.push(0), n.uvs.push(1), n.uvs.push(0);
                return n.geometry = new f.default(n.gl, n.count), n.geometry.addAttribute("index", new Uint16Array(n.indices), 1), n.geometry.addAttribute("position", new Float32Array(n.vertices), 3), n.geometry.addAttribute("color", new Float32Array(n.colors), 3), n.geometry.addAttribute("normal", new Float32Array(n.normals), 3), n.geometry.addAttribute("uv", new Float32Array(n.uvs), 2, "ParticleSystem"), n.geometry.addAttribute("particleIndex", new Float32Array(n.particleIndices), 1), n.geometry.addAttribute("vertexIndex", new Float32Array(n.vertexIndices), 1), n.geometry.length = n.vertexIndices.length, n
            }
            return s(e, t), e
        }(u.default);
    e.default = _
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = function() {
            function t(e) {
                n(this, t), this.canvas = e && e.canvas || document.createElement("canvas"), this.canvas.style.transformOrigin = "0 0", this.contextAttributes = Object.assign({}, {
                    alpha: !1,
                    depth: !0,
                    stencil: !0,
                    antialias: !1,
                    premultipliedAlpha: !0,
                    preserveDrawingBuffer: !1,
                    failIfMajorPerformanceCaveat: !1
                }, e || {}), this._pixelRatio = 1, this.gl = this.canvas.getContext("experimental-webgl", this.contextAttributes), this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.canvas.addEventListener("webglcontextlost", this.handleContextLost, !1), this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored, !1)
            }
            return o(t, [{
                key: "handleContextLost",
                value: function(t) {
                    t.preventDefault()
                }
            }, {
                key: "handleContextRestored",
                value: function() {}
            }, {
                key: "handleContextRestored",
                value: function() {}
            }, {
                key: "render",
                value: function(t, e, i) {
                    this.gl && (e.update(), i ? (i.bindFrame(), t.render(e), i.unbind()) : (this.gl.viewport(0, 0, this._width * this._pixelRatio, this._height * this._pixelRatio), t.render(e)))
                }
            }, {
                key: "resize",
                value: function(t, e) {
                    this.gl && (this._width = t, this._height = e, this.canvas.width = this._width * this._pixelRatio, this.canvas.height = this._height * this._pixelRatio, this.canvas.style.transform = "scale(" + 1 / this._pixelRatio + ") translateZ(0)", this.gl.viewport(0, 0, this._width * this._pixelRatio, this._height * this._pixelRatio))
                }
            }, {
                key: "clearColor",
                value: function(t, e, i, n) {
                    this.gl && this.gl.clearColor(t, e, i, n)
                }
            }, {
                key: "clear",
                value: function(t, e, i) {
                    if (this.gl) {
                        var n = 0;
                        (void 0 === t || t) && (n |= this.gl.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= this.gl.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= this.gl.STENCIL_BUFFER_BIT), this.gl.clear(n)
                    }
                }
            }, {
                key: "setPixelRatio",
                value: function(t) {
                    this._pixelRatio = t, this.resize(this._width, this._height)
                }
            }]), t
        }();
    e.default = r
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s() {
        requestAnimationFrame(s);
        for (var t = 0; t < c.length; t++) c[t]._needsUpdate = !0
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        l = function t(e, i, n) {
            null === e && (e = Function.prototype);
            var o = Object.getOwnPropertyDescriptor(e, i);
            if (void 0 === o) {
                var r = Object.getPrototypeOf(e);
                return null === r ? void 0 : t(r, i, n)
            }
            if ("value" in o) return o.value;
            var s = o.get;
            if (void 0 !== s) return s.call(n)
        },
        u = i(1),
        c = [];
    s();
    var h = function(t) {
        function e() {
            n(this, e);
            var t = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return t.lights = [], t.defines = {}, t.uniforms = {
                lightAngleCos: [],
                lightColor: [],
                lightDecay: [],
                lightDirection: [],
                lightDistance: [],
                lightExponent: [],
                lightPosition: [],
                lightPenumbraCos: []
            }, t.overrideMaterial = null, t._lightColor = u.vec3.create(), t._lightPosition = u.vec3.create(), t._lightDirection = u.vec3.create(), t._needsUpdate = !0, c.push(t), t
        }
        return r(e, t), a(e, [{
            key: "add",
            value: function(t) {
                t instanceof u.Light ? this.lights.push(t) : l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "add", this).call(this, t)
            }
        }, {
            key: "render",
            value: function(t) {
                if (this._needsUpdate) {
                    this.uniforms.lightAngleCos = [], this.uniforms.lightColor = [], this.uniforms.lightDecay = [], this.uniforms.lightDirection = [], this.uniforms.lightDistance = [], this.uniforms.lightExponent = [], this.uniforms.lightPosition = [], this.uniforms.lightPenumbraCos = [];
                    for (var i = 0; i < this.lights.length; i++) this.lights[i].update(), this.uniforms.lightAngleCos.push(Math.cos(this.lights[i].angle)), this.uniforms.lightDecay.push(this.lights[i].decay), this.uniforms.lightDistance.push(this.lights[i].distance), this.uniforms.lightExponent.push(this.lights[i].exponent), this.uniforms.lightPenumbraCos.push(Math.cos(this.lights[i].angle * (1 - this.lights[i].penumbra))), u.vec3.copy(this._lightColor, this.lights[i].color), u.vec3.scale(this._lightColor, this._lightColor, this.lights[i].intensity), this.uniforms.lightColor.push(this._lightColor[0], this._lightColor[1], this._lightColor[2]), u.vec3.set(this._lightPosition, this.lights[i].worldMatrix[12], this.lights[i].worldMatrix[13], this.lights[i].worldMatrix[14]), this.uniforms.lightPosition.push(this._lightPosition[0], this._lightPosition[1], this._lightPosition[2]), u.vec3.copy(this._lightDirection, this._lightPosition), u.vec3.subtract(this._lightDirection, this._lightDirection, this.lights[i].lookAt), u.vec3.normalize(this._lightDirection, this._lightDirection), this.uniforms.lightDirection.push(this._lightDirection[0], this._lightDirection[1], this._lightDirection[2])
                }
                this.defines.NUM_LIGHTS = this.lights.length, this._needsUpdate = !1, l(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "render", this).call(this, t, this)
            }
        }]), e
    }(u.Container);
    e.default = h
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(3),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        l = i(4),
        u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(l),
        c = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (i = Object.assign({}, {
                        radius: 50,
                        widthSegments: 8,
                        heightSegments: 6,
                        phiStart: 0,
                        phiLength: 2 * Math.PI,
                        thetaStart: 0,
                        thetaLength: Math.PI
                    }, i), !t) return o(r);
                var s, a, l = i.radius || 50,
                    c = Math.max(3, Math.floor(i.widthSegments) || 8),
                    h = Math.max(2, Math.floor(i.heightSegments) || 6),
                    p = void 0 !== p ? i.phiStart : 0,
                    d = void 0 !== d ? i.phiLength : 2 * Math.PI,
                    f = void 0 !== f ? i.thetaStart : 0,
                    m = void 0 !== m ? i.thetaLength : Math.PI,
                    v = f + m,
                    g = 0,
                    b = [],
                    y = u.create(),
                    _ = u.create(),
                    w = [],
                    x = [],
                    P = [],
                    M = [],
                    k = [];
                for (a = 0; a <= h; a++) {
                    var E = [],
                        C = a / h;
                    for (s = 0; s <= c; s++) {
                        var S = s / c;
                        y[0] = -l * Math.cos(p + S * d) * Math.sin(f + C * m), y[1] = l * Math.cos(f + C * m), y[2] = l * Math.sin(p + S * d) * Math.sin(f + C * m), x.push(y[0], y[1], y[2]), u.set(_, y[0], y[1], y[2]), u.normalize(_, _), P.push(_[0], _[1], _[2]), M.push(S, 1 - C), E.push(g++), k.push(1, 1, 1)
                    }
                    b.push(E)
                }
                for (a = 0; a < h; a++)
                    for (s = 0; s < c; s++) {
                        var T = b[a][s + 1],
                            O = b[a][s],
                            A = b[a + 1][s],
                            R = b[a + 1][s + 1];
                        (0 !== a || f > 0) && w.push(T, O, R), (a !== h - 1 || v < Math.PI) && w.push(O, A, R)
                    }
                return r.length = x.length / 3, r.addAttribute("index", new Uint16Array(w), 1), r.addAttribute("position", new Float32Array(x), 3), r.addAttribute("normal", new Float32Array(P), 3), r.addAttribute("color", new Float32Array(k), 3), r.addAttribute("uv", new Float32Array(M), 2, "Sphere"), r
            }
            return r(e, t), e
        }(a.default);
    e.default = c
}, function(t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(22),
        l = n(a),
        u = i(10),
        c = n(u),
        h = i(9),
        p = n(h),
        d = i(12),
        f = n(d),
        m = i(23),
        v = n(m),
        g = function(t) {
            function e(t, i) {
                o(this, e);
                var n = r(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                return n.gl = t, l.default.loadImage(i, function(t) {
                    n.texture = f.default.fromImage(n.gl, t), n.material = new p.default(n.gl, {
                        blend: !0
                    }), n.material.map = n.texture, n.geometry = new v.default(n.gl, {
                        width: Math.floor(t.width / 10),
                        height: Math.floor(t.height / 10)
                    })
                }), n
            }
            return s(e, t), e
        }(c.default);
    e.default = g
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(3),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        l = function(t) {
            function e(t) {
                n(this, e);
                var i = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 3));
                return i.addAttribute("position", new Float32Array([-1, -1, 0, 0, 1, 0, 1, -1, 0]), 3), i.addAttribute("uv", new Float32Array([0, 0, .5, 1, 1, 0]), 2, "triangle"), i.addAttribute("color", new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1]), 3), i
            }
            return r(e, t), e
        }(a.default);
    e.default = l
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = new S.ARRAY_TYPE(4);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
    }

    function o(t) {
        var e = new S.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }

    function r(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function s(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
    }

    function a(t, e, i, n) {
        var o = new S.ARRAY_TYPE(4);
        return o[0] = t, o[1] = e, o[2] = i, o[3] = n, o
    }

    function l(t, e, i, n, o) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = o, t
    }

    function u(t, e) {
        if (t === e) {
            var i = e[1];
            t[1] = e[2], t[2] = i
        } else t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3];
        return t
    }

    function c(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = i * r - o * n;
        return s ? (s = 1 / s, t[0] = r * s, t[1] = -n * s, t[2] = -o * s, t[3] = i * s, t) : null
    }

    function h(t, e) {
        var i = e[0];
        return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = i, t
    }

    function p(t) {
        return t[0] * t[3] - t[2] * t[1]
    }

    function d(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = i[0],
            l = i[1],
            u = i[2],
            c = i[3];
        return t[0] = n * a + r * l, t[1] = o * a + s * l, t[2] = n * u + r * c, t[3] = o * u + s * c, t
    }

    function f(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = Math.sin(i),
            l = Math.cos(i);
        return t[0] = n * l + r * a, t[1] = o * l + s * a, t[2] = n * -a + r * l, t[3] = o * -a + s * l, t
    }

    function m(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = i[0],
            l = i[1];
        return t[0] = n * a, t[1] = o * a, t[2] = r * l, t[3] = s * l, t
    }

    function v(t, e) {
        var i = Math.sin(e),
            n = Math.cos(e);
        return t[0] = n, t[1] = i, t[2] = -i, t[3] = n, t
    }

    function g(t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t
    }

    function b(t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")"
    }

    function y(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
    }

    function _(t, e, i, n) {
        return t[2] = n[2] / n[0], i[0] = n[0], i[1] = n[1], i[3] = n[3] - t[2] * i[1], [t, e, i]
    }

    function w(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t
    }

    function x(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t
    }

    function P(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    }

    function M(t, e) {
        var i = t[0],
            n = t[1],
            o = t[2],
            r = t[3],
            s = e[0],
            a = e[1],
            l = e[2],
            u = e[3];
        return Math.abs(i - s) <= S.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(n - a) <= S.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(o - l) <= S.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(r - u) <= S.EPSILON * Math.max(1, Math.abs(r), Math.abs(u))
    }

    function k(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t
    }

    function E(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t[2] = e[2] + i[2] * n, t[3] = e[3] + i[3] * n, t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sub = e.mul = void 0, e.create = n, e.clone = o, e.copy = r, e.identity = s, e.fromValues = a, e.set = l, e.transpose = u, e.invert = c, e.adjoint = h, e.determinant = p, e.multiply = d, e.rotate = f, e.scale = m, e.fromRotation = v, e.fromScaling = g, e.str = b, e.frob = y, e.LDU = _, e.add = w, e.subtract = x, e.exactEquals = P, e.equals = M, e.multiplyScalar = k, e.multiplyScalarAndAdd = E;
    var C = i(2),
        S = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(C);
    e.mul = d, e.sub = x
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = new C.ARRAY_TYPE(6);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function o(t) {
        var e = new C.ARRAY_TYPE(6);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e
    }

    function r(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function s(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function a(t, e, i, n, o, r) {
        var s = new C.ARRAY_TYPE(6);
        return s[0] = t, s[1] = e, s[2] = i, s[3] = n, s[4] = o, s[5] = r, s
    }

    function l(t, e, i, n, o, r, s) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = o, t[4] = r, t[5] = s, t
    }

    function u(t, e) {
        var i = e[0],
            n = e[1],
            o = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = i * r - n * o;
        return l ? (l = 1 / l, t[0] = r * l, t[1] = -n * l, t[2] = -o * l, t[3] = i * l, t[4] = (o * a - r * s) * l, t[5] = (n * s - i * a) * l, t) : null
    }

    function c(t) {
        return t[0] * t[3] - t[1] * t[2]
    }

    function h(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = i[0],
            c = i[1],
            h = i[2],
            p = i[3],
            d = i[4],
            f = i[5];
        return t[0] = n * u + r * c, t[1] = o * u + s * c, t[2] = n * h + r * p, t[3] = o * h + s * p, t[4] = n * d + r * f + a, t[5] = o * d + s * f + l, t
    }

    function p(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = Math.sin(i),
            c = Math.cos(i);
        return t[0] = n * c + r * u, t[1] = o * c + s * u, t[2] = n * -u + r * c, t[3] = o * -u + s * c, t[4] = a, t[5] = l, t
    }

    function d(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = i[0],
            c = i[1];
        return t[0] = n * u, t[1] = o * u, t[2] = r * c, t[3] = s * c, t[4] = a, t[5] = l, t
    }

    function f(t, e, i) {
        var n = e[0],
            o = e[1],
            r = e[2],
            s = e[3],
            a = e[4],
            l = e[5],
            u = i[0],
            c = i[1];
        return t[0] = n, t[1] = o, t[2] = r, t[3] = s, t[4] = n * u + r * c + a, t[5] = o * u + s * c + l, t
    }

    function m(t, e) {
        var i = Math.sin(e),
            n = Math.cos(e);
        return t[0] = n, t[1] = i, t[2] = -i, t[3] = n, t[4] = 0, t[5] = 0, t
    }

    function v(t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t
    }

    function g(t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t
    }

    function b(t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")"
    }

    function y(t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
    }

    function _(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t
    }

    function w(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t
    }

    function x(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t
    }

    function P(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t[2] = e[2] + i[2] * n, t[3] = e[3] + i[3] * n, t[4] = e[4] + i[4] * n, t[5] = e[5] + i[5] * n, t
    }

    function M(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
    }

    function k(t, e) {
        var i = t[0],
            n = t[1],
            o = t[2],
            r = t[3],
            s = t[4],
            a = t[5],
            l = e[0],
            u = e[1],
            c = e[2],
            h = e[3],
            p = e[4],
            d = e[5];
        return Math.abs(i - l) <= C.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(n - u) <= C.EPSILON * Math.max(1, Math.abs(n), Math.abs(u)) && Math.abs(o - c) <= C.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(r - h) <= C.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(s - p) <= C.EPSILON * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(a - d) <= C.EPSILON * Math.max(1, Math.abs(a), Math.abs(d))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.sub = e.mul = void 0, e.create = n, e.clone = o, e.copy = r, e.identity = s, e.fromValues = a, e.set = l, e.invert = u, e.determinant = c, e.multiply = h, e.rotate = p, e.scale = d, e.translate = f, e.fromRotation = m, e.fromScaling = v, e.fromTranslation = g, e.str = b, e.frob = y, e.add = _, e.subtract = w, e.multiplyScalar = x, e.multiplyScalarAndAdd = P, e.exactEquals = M, e.equals = k;
    var E = i(2),
        C = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(E);
    e.mul = h, e.sub = w
}, function(t, e, i) {
    "use strict";

    function n() {
        var t = new F.ARRAY_TYPE(2);
        return t[0] = 0, t[1] = 0, t
    }

    function o(t) {
        var e = new F.ARRAY_TYPE(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function r(t, e) {
        var i = new F.ARRAY_TYPE(2);
        return i[0] = t, i[1] = e, i
    }

    function s(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function a(t, e, i) {
        return t[0] = e, t[1] = i, t
    }

    function l(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
    }

    function u(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
    }

    function c(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
    }

    function h(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
    }

    function p(t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t
    }

    function d(t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t
    }

    function f(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
    }

    function m(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
    }

    function v(t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t
    }

    function g(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t
    }

    function b(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
    }

    function y(t, e) {
        var i = e[0] - t[0],
            n = e[1] - t[1];
        return Math.sqrt(i * i + n * n)
    }

    function _(t, e) {
        var i = e[0] - t[0],
            n = e[1] - t[1];
        return i * i + n * n
    }

    function w(t) {
        var e = t[0],
            i = t[1];
        return Math.sqrt(e * e + i * i)
    }

    function x(t) {
        var e = t[0],
            i = t[1];
        return e * e + i * i
    }

    function P(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function M(t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t
    }

    function k(t, e) {
        var i = e[0],
            n = e[1],
            o = i * i + n * n;
        return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o), t
    }

    function E(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function C(t, e, i) {
        var n = e[0] * i[1] - e[1] * i[0];
        return t[0] = t[1] = 0, t[2] = n, t
    }

    function S(t, e, i, n) {
        var o = e[0],
            r = e[1];
        return t[0] = o + n * (i[0] - o), t[1] = r + n * (i[1] - r), t
    }

    function T(t, e) {
        e = e || 1;
        var i = 2 * F.RANDOM() * Math.PI;
        return t[0] = Math.cos(i) * e, t[1] = Math.sin(i) * e, t
    }

    function O(t, e, i) {
        var n = e[0],
            o = e[1];
        return t[0] = i[0] * n + i[2] * o, t[1] = i[1] * n + i[3] * o, t
    }

    function A(t, e, i) {
        var n = e[0],
            o = e[1];
        return t[0] = i[0] * n + i[2] * o + i[4], t[1] = i[1] * n + i[3] * o + i[5], t
    }

    function R(t, e, i) {
        var n = e[0],
            o = e[1];
        return t[0] = i[0] * n + i[3] * o + i[6], t[1] = i[1] * n + i[4] * o + i[7], t
    }

    function j(t, e, i) {
        var n = e[0],
            o = e[1];
        return t[0] = i[0] * n + i[4] * o + i[12], t[1] = i[1] * n + i[5] * o + i[13], t
    }

    function L(t) {
        return "vec2(" + t[0] + ", " + t[1] + ")"
    }

    function D(t, e) {
        return t[0] === e[0] && t[1] === e[1]
    }

    function I(t, e) {
        var i = t[0],
            n = t[1],
            o = e[0],
            r = e[1];
        return Math.abs(i - o) <= F.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - r) <= F.EPSILON * Math.max(1, Math.abs(n), Math.abs(r))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.forEach = e.sqrLen = e.sqrDist = e.dist = e.div = e.mul = e.sub = e.len = void 0, e.create = n, e.clone = o, e.fromValues = r, e.copy = s, e.set = a, e.add = l, e.subtract = u, e.multiply = c, e.divide = h, e.ceil = p, e.floor = d, e.min = f, e.max = m, e.round = v, e.scale = g, e.scaleAndAdd = b, e.distance = y, e.squaredDistance = _, e.length = w, e.squaredLength = x, e.negate = P, e.inverse = M, e.normalize = k, e.dot = E, e.cross = C, e.lerp = S, e.random = T, e.transformMat2 = O, e.transformMat2d = A, e.transformMat3 = R, e.transformMat4 = j, e.str = L, e.exactEquals = D, e.equals = I;
    var N = i(2),
        F = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(N);
    e.len = w, e.sub = u, e.mul = c, e.div = h, e.dist = y, e.sqrDist = _, e.sqrLen = x, e.forEach = function() {
        var t = n();
        return function(e, i, n, o, r, s) {
            var a = void 0,
                l = void 0;
            for (i || (i = 2), n || (n = 0), l = o ? Math.min(o * i + n, e.length) : e.length, a = n; a < l; a += i) t[0] = e[a], t[1] = e[a + 1], r(t, t, s), e[a] = t[0], e[a + 1] = t[1];
            return e
        }
    }()
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = {};
    n[5126] = "1f", n[35664] = "2f", n[35665] = "3f", n[35666] = "4f", n[35670] = n[5124] = n[35678] = n[35680] = "1i", n[35671] = n[35667] = "2i", n[35672] = n[35668] = "3i", n[35673] = n[35669] = "4i", n[35674] = "Matrix2f", n[35675] = "Matrix3f", n[35676] = "Matrix4f", e.default = n
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(1),
        a = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (!t) return o(r);
                i = Object.assign({}, {
                    radius: 1,
                    segments: 100,
                    lineWidth: .5
                }, i);
                for (var a = (i.radius, []), l = [], u = [], c = [], h = [], p = [], d = [], f = 2 * Math.PI / i.segments, m = 0; m < i.segments + 1; m++) {
                    var v = f * m;
                    a.push(Math.cos(v) * i.radius, Math.sin(v) * i.radius, 0), a.push(Math.cos(v) * i.radius, Math.sin(v) * i.radius, 0);
                    var g = s.vec3.create();
                    s.vec3.set(g, Math.cos(v), Math.sin(v), 0), s.vec3.normalize(g, g), d.push(-1 * g[0], -1 * g[1], -1 * g[2]), d.push(g[0], g[1], g[2]), c.push(1, 1, 1, 1, 1, 1), l.push(0, 1, 0, 0, 1, 0), u.push(0, 1, 0, 1), h.push(m / (i.segments + 1), m / (i.segments + 1))
                }
                for (var b = 0, y = 0; b < i.segments; b++, y += 2) p.push(y, y + 1, y + 3, y, y + 3, y + 2);
                return r.length = a.length / 3, r.addAttribute("direction", new Float32Array(d), 3), r.addAttribute("ratio", new Float32Array(h), 1), r.addAttribute("index", new Uint16Array(p), 1), r.addAttribute("position", new Float32Array(a), 3), r.addAttribute("normal", new Float32Array(l), 3), r.addAttribute("color", new Float32Array(c), 3), r.addAttribute("uv", new Float32Array(u), 2), r
            }
            return r(e, t), e
        }(s.GeometryBuffer);
    e.default = a
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(1),
        a = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (!t) return o(r);
                i = Object.assign({}, {
                    radius: 1,
                    segments: 100,
                    lineWidth: .5
                }, i);
                for (var a = (i.radius, []), l = [], u = [], c = [], h = [], p = [], d = [], f = 2 * Math.PI / i.segments, m = 0; m < i.segments + 1; m++) {
                    var v = f * m;
                    a.push(Math.cos(v) * i.radius, Math.sin(v) * i.radius, 0), a.push(Math.cos(v) * i.radius, Math.sin(v) * i.radius, 0);
                    var g = s.vec3.create();
                    s.vec3.set(g, Math.cos(v), Math.sin(v), 0), s.vec3.normalize(g, g), d.push(-1 * g[0], -1 * g[1], -1 * g[2]), d.push(g[0], g[1], g[2]), c.push(1, 1, 1, 1, 1, 1), l.push(0, 1, 0, 0, 1, 0), u.push(0, 1, 0, 1), h.push(m / (i.segments + 1), m / (i.segments + 1))
                }
                for (var b = 0, y = 0; b < i.segments; b++, y += 2) p.push(y, y + 1, y + 3, y, y + 3, y + 2);
                return r.length = a.length / 3, r.addAttribute("direction", new Float32Array(d), 3), r.addAttribute("ratio", new Float32Array(h), 1), r.addAttribute("index", new Uint16Array(p), 1), r.addAttribute("position", new Float32Array(a), 3), r.addAttribute("normal", new Float32Array(l), 3), r.addAttribute("color", new Float32Array(c), 3), r.addAttribute("uv", new Float32Array(u), 2), r
            }
            return r(e, t), e
        }(s.GeometryBuffer);
    e.default = a
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(1),
        a = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (!t) return o(r);
                i = Object.assign({}, {
                    radius: 1,
                    segments: 100,
                    lineWidth: .5
                }, i);
                var s = (i.radius, []),
                    a = [],
                    l = [],
                    u = [],
                    c = [];
                return s.push(0, 0, 0, 0, 0, 0), u.push(1, 1, 1, 1, 1, 1), a.push(0, 1, 0, 0, 1, 0), l.push(0, 1, 0, 1), c.push(0, 1), r.length = s.length / 3, r.addAttribute("side", new Float32Array(c), 1), r.addAttribute("position", new Float32Array(s), 3), r.addAttribute("normal", new Float32Array(a), 3), r.addAttribute("color", new Float32Array(u), 3), r.addAttribute("uv", new Float32Array(l), 2), r
            }
            return r(e, t), e
        }(s.GeometryBuffer);
    e.default = a
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(1),
        a = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (!t) return o(r);
                i = Object.assign({}, {
                    radius: 50,
                    widthSegments: 8,
                    heightSegments: 6,
                    phiStart: 0,
                    phiLength: 2 * Math.PI,
                    thetaStart: 0,
                    thetaLength: Math.PI
                }, i);
                var a, l, u = i.radius || 50,
                    c = Math.max(3, Math.floor(i.widthSegments) || 8),
                    h = Math.max(2, Math.floor(i.heightSegments) || 6),
                    p = void 0 !== p ? i.phiStart : 0,
                    d = void 0 !== d ? i.phiLength : 2 * Math.PI,
                    f = void 0 !== f ? i.thetaStart : 0,
                    m = void 0 !== m ? i.thetaLength : Math.PI,
                    v = 0,
                    g = [],
                    b = s.vec3.create(),
                    y = s.vec3.create(),
                    _ = [],
                    w = [],
                    x = [],
                    P = [],
                    M = [],
                    k = 0;
                for (l = 0; l <= h; l++) {
                    var E = [],
                        C = l / h;
                    for (a = 0; a <= c; a++) {
                        var S = a / c;
                        b[0] = -u * Math.cos(p + S * d) * Math.sin(f + C * m), b[1] = u * Math.cos(f + C * m), b[2] = u * Math.sin(p + S * d) * Math.sin(f + C * m), _.push(b[0], b[1], b[2]), _.push(b[0], b[1], b[2]), _.push(b[0], b[1], b[2]), _.push(b[0], b[1], b[2]), k += 4, s.vec3.set(y, b[0], b[1], b[2]), s.vec3.normalize(y, y), w.push(y[0], y[1], y[2]), w.push(y[0], y[1], y[2]), w.push(y[0], y[1], y[2]), w.push(y[0], y[1], y[2]), x.push(S, 1 - C), x.push(S, 1 - C), x.push(S, 1 - C), x.push(S, 1 - C), P.push(1, 1, 1), P.push(1, 1, 1), P.push(1, 1, 1), P.push(1, 1, 1), M.push(0), M.push(1), M.push(2), M.push(3), E.push(v++)
                    }
                    g.push(E)
                }
                return r.length = _.length / 3, r.addAttribute("linePointIndex", new Float32Array(M), 1), r.addAttribute("position", new Float32Array(_), 3), r.addAttribute("normal", new Float32Array(w), 3), r.addAttribute("color", new Float32Array(P), 3), r.addAttribute("uv", new Float32Array(x), 2), r
            }
            return r(e, t), e
        }(s.GeometryBuffer);
    e.default = a
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(1),
        a = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (!t) return o(r);
                i = Object.assign({}, {
                    radius: 1,
                    segments: 100,
                    lineWidth: .5
                }, i);
                for (var a = (i.radius, []), l = [], u = [], c = [], h = [], p = [], d = [], f = 2 * Math.PI / i.segments, m = 0; m < i.segments + 1; m++) {
                    var v = f * m;
                    a.push(Math.cos(v) * i.radius, Math.sin(v) * i.radius, 0), a.push(Math.cos(v) * i.radius, Math.sin(v) * i.radius, 0);
                    var g = s.vec3.create();
                    s.vec3.set(g, Math.cos(v), Math.sin(v), 0), s.vec3.normalize(g, g), d.push(-1 * g[0], -1 * g[1], -1 * g[2]), d.push(g[0], g[1], g[2]), c.push(1, 1, 1, 1, 1, 1), l.push(0, 1, 0, 0, 1, 0), u.push(0, 1, 0, 1), h.push(m / (i.segments + 1), m / (i.segments + 1))
                }
                for (var b = 0, y = 0; b < i.segments; b++, y += 2) p.push(y, y + 1, y + 3, y, y + 3, y + 2);
                return r.length = a.length / 3, r.addAttribute("direction", new Float32Array(d), 3), r.addAttribute("ratio", new Float32Array(h), 1), r.addAttribute("index", new Uint16Array(p), 1), r.addAttribute("position", new Float32Array(a), 3), r.addAttribute("normal", new Float32Array(l), 3), r.addAttribute("color", new Float32Array(c), 3), r.addAttribute("uv", new Float32Array(u), 2), r
            }
            return r(e, t), e
        }(s.GeometryBuffer);
    e.default = a
}, function(t, e, i) {
    "use strict";
    "function" != typeof Object.assign && (Object.assign = function(t, e) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        for (var i = Object(t), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (null != o)
                for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o[r])
        }
        return i
    }), console.log("Clarity Movement Co. v7"), i(63), i(64), i(48), i(45), i(50), i(49), i(44), i(43), i(47), i(46), i(53), i(52), i(51), i(35), i(39), i(38), i(37), i(40), i(41), i(36), i(34), i(42), i(59), i(61), i(55), i(58), i(60), i(56), i(57), i(54), i(62)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(5),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        a = i(0),
        l = function() {
            function t(e) {
                n(this, t), this.step = e.step || function() {}, this.end = e.end || function() {}, this.direction = e.direction || 1, this.duration = e.duration || 1e3, this.easing = e.easing || [.55, .085, .68, .53], this.delay = e.delay || 0, this._progress = 0, this._easedProgress = 0, this.update = this.update.bind(this), a.EventDispatcher.on("requestAnimationFrame", this.update, this), this.update()
            }
            return o(t, [{
                key: "destroy",
                value: function() {
                    a.EventDispatcher.off("requestAnimationFrame", this.update, this)
                }
            }, {
                key: "play",
                value: function() {
                    var t = this;
                    clearTimeout(this._delayTimer), this._delayTimer = setTimeout(function() {
                        t._progress = 1 == t.direction ? 0 : 1, t._easedProgress = 1 == t.direction ? 0 : 1, t.isPlaying = !0
                    }, this.delay)
                }
            }, {
                key: "pause",
                value: function() {
                    clearTimeout(this._delayTimer), this.isPlaying = !1
                }
            }, {
                key: "reset",
                value: function() {
                    this._progress = 0
                }
            }, {
                key: "update",
                value: function() {
                    this.isPlaying && (this._progress += 1 / (this.duration / (1e3 / 60)) * this.direction, this._easedProgress = (0, s.default)(this.easing[0], this.easing[1], this.easing[2], this.easing[3], Math.max(0, Math.min(1, this._progress)), 1), 1 == this.direction && this._easedProgress < 1 || -1 == this.direction && this._easedProgress > 0 ? this.step(this._easedProgress, this._progress) : (this.isPlaying = !1, this._progress = 1 == this.direction ? 1 : 0, this._easedProgress = 1 == this.direction ? 1 : 0, this.step(this._easedProgress, this._progress), this.end()))
                }
            }]), t
        }();
    e.default = l
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        var i;
        return t.currentStyle ? i = t.currentStyle[e] : window.getComputedStyle && (i = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)), i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            return function(e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        r = i(0),
        s = function() {
            function t(e) {
                n(this, t), e = Object.assign({}, {
                    elem: document,
                    callback: function() {},
                    maxDelta: 50,
                    preventMouse: !0
                }, e), this.elem = e.elem, this.callback = e.callback, this.maxDelta = e.maxDelta, this.preventMouse = e.preventMouse, this._onPointerDown = this._onPointerDown.bind(this), this._onPointerMove = this._onPointerMove.bind(this), this._onPointerUp = this._onPointerUp.bind(this), this.elem.addEventListener(r.support.pointerdown, this._onPointerDown, !1), document.addEventListener(r.support.pointermove, this._onPointerMove, !1), document.addEventListener(r.support.pointerup, this._onPointerUp, !1), this._isPointerDown = !1, this._enabled = !0
            }
            return o(t, [{
                key: "disable",
                value: function() {
                    this._enabled = !1
                }
            }, {
                key: "enable",
                value: function() {
                    this._enabled = !0
                }
            }, {
                key: "destroy",
                value: function() {
                    this.elem.removeEventListener(r.support.pointerdown, this._onPointerDown), document.removeEventListener(r.support.pointermove, this._onPointerMove), document.removeEventListener(r.support.pointerup, this._onPointerUp)
                }
            }, {
                key: "_onPointerDown",
                value: function(t) {
                    this._enabled && (this._isPointerDown = !0, this._moveDelta = 0, this._pointerStartEvent = r.support.touch && "mousemove" != t.type ? t.touches[0] || t.changedTouches[0] : t, this._pointerStart = this._pointerStartEvent.pageY - (window.pageYOffset || document.documentElement.scrollTop))
                }
            }, {
                key: "_onPointerMove",
                value: function(t) {
                    if (this._enabled && this._isPointerDown) {
                        this.preventMouse && t.preventDefault();
                        var e = r.support.touch && "mousemove" != t.type ? t.touches[0] || t.changedTouches[0] : t,
                            i = e.pageY - (window.pageYOffset || document.documentElement.scrollTop);
                        this._moveDelta = i - this._pointerStartEvent.pageY
                    }
                }
            }, {
                key: "_onPointerUp",
                value: function(t) {
                    this._enabled && this._isPointerDown && Math.abs(this._moveDelta) > this.maxDelta && this.callback({
                        direction: this._moveDelta > 0 ? "up" : "down"
                    }), this._isPointerDown = !1
                }
            }]), t
        }();
    e.default = s
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(1),
        a = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (!t) return o(r);
                i = Object.assign({}, {
                    radius: 1,
                    segments: 100,
                    lineWidth: 1,
                    thetaStart: 0,
                    thetaLength: 2 * Math.PI
                }, i);
                var a, l, u = i.radius || 50,
                    c = [],
                    h = [],
                    p = [],
                    d = [],
                    f = [],
                    d = [],
                    m = s.vec3.create(),
                    v = s.vec2.create();
                for (c.push(0, 0, 0), h.push(0, 0, 1), d.push(1, 1, 1), p.push(.5, .5), l = 0, a = 3; l <= i.segments; l++, a += 3) {
                    var g = i.thetaStart + l / i.segments * i.thetaLength;
                    m[0] = u * Math.cos(g), m[1] = u * Math.sin(g), c.push(m[0], m[1], m[2]), h.push(0, 0, 1), d.push(1, 1, 1), v[0] = (c[a] / u + 1) / 2, v[1] = (c[a + 1] / u + 1) / 2, p.push(v[0], v[1])
                }
                for (a = 1; a <= i.segments; a++) f.push(a, a + 1, 0);
                return r.length = c.length / 3, r.addAttribute("index", new Uint16Array(f), 1), r.addAttribute("position", new Float32Array(c), 3), r.addAttribute("normal", new Float32Array(h), 3), r.addAttribute("color", new Float32Array(d), 3), r.addAttribute("uv", new Float32Array(p), 2), r
            }
            return r(e, t), e
        }(s.GeometryBuffer);
    e.default = a
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function r(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(1),
        a = function(t) {
            function e(t, i) {
                n(this, e);
                var r = o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, 0));
                if (!t) return o(r);
                i = Object.assign({}, {
                    radius: 1,
                    segments: 100,
                    lineWidth: .5
                }, i);
                for (var a = (i.radius, []), l = [], u = [], c = [], h = [], p = [], d = [], f = 2 * Math.PI / i.segments, m = 0; m < i.segments + 1; m++) {
                    var v = f * m;
                    a.push(Math.cos(v) * (i.radius + .001), Math.sin(v) * (i.radius + .001), 0), a.push(Math.cos(v) * (i.radius - .001), Math.sin(v) * (i.radius - .001), 0);
                    var g = s.vec3.create();
                    s.vec3.set(g, Math.cos(v), Math.sin(v), 0), s.vec3.normalize(g, g), d.push(g[0], g[1], g[2]), d.push(-1 * g[0], -1 * g[1], -1 * g[2]), c.push(1, 1, 1, 1, 1, 1), l.push(0, 1, 0, 0, 1, 0), u.push(0, 1, 0, 1), h.push(m / (i.segments + 1), m / (i.segments + 1))
                }
                for (var b = 0, y = 0; b < i.segments; b++, y += 2) p.push(y, y + 1, y + 3, y, y + 3, y + 2);
                return r.length = a.length / 3, r.addAttribute("direction", new Float32Array(d), 3), r.addAttribute("ratio", new Float32Array(h), 1), r.addAttribute("index", new Uint16Array(p), 1), r.addAttribute("position", new Float32Array(a), 3), r.addAttribute("normal", new Float32Array(l), 3), r.addAttribute("color", new Float32Array(c), 3), r.addAttribute("uv", new Float32Array(u), 2), r
            }
            return r(e, t), e
        }(s.GeometryBuffer);
    e.default = a
}, function(t, e, i) {
    function n(t) {
        if (t) return o(t)
    }

    function o(t) {
        for (var e in n.prototype) t[e] = n.prototype[e];
        return t
    }
    t.exports = n, n.prototype.on = n.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, n.prototype.once = function(t, e) {
        function i() {
            this.off(t, i), e.apply(this, arguments)
        }
        return i.fn = e, this.on(t, i), this
    }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var i = this._callbacks["$" + t];
        if (!i) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var n, o = 0; o < i.length; o++)
            if ((n = i[o]) === e || n.fn === e) {
                i.splice(o, 1);
                break
            }
        return this
    }, n.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        var e = [].slice.call(arguments, 1),
            i = this._callbacks["$" + t];
        if (i) {
            i = i.slice(0);
            for (var n = 0, o = i.length; n < o; ++n) i[n].apply(this, e)
        }
        return this
    }, n.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, n.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
    }
}, function(t, e) {}, function(t, e) {}, function(t, e) {
    t.exports = {
        team: [{
            img: "/wp-content/themes/clarity/assets/uploads/about/p1.jpg",
            name: "David Lu",
            role: "Co-Founder"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p10.jpg",
            name: "Paolo Micalizzi",
            role: "Co-Founder"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p4.jpg",
            name: "Meiling Gao, PhD",
            role: "COO"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p6.jpg",
            name: "Baljot Singh",
            role: "Co-Founder"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p5.jpg",
            name: "Deepak Talwar",
            role: "Co-Founder"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p2.jpg",
            name: "Sean Wihera",
            role: "Director of Business Development"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p9.jpg",
            name: "Yuchen Shi",
            role: "Software Lead"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p12.jpg",
            name: "James Stevick",
            role: "Hardware Engineer"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p3.jpg",
            name: "Vivian Bi",
            role: "Communications Manager"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/jianan.jpg",
            name: "Dean Ding",
            role: "Software Engineer"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/hsuchen.jpg",
            name: "Hsuchen Chou",
            role: "Software Engineer"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/haonan.jpg",
            name: "Stephen Fu",
            role: "Software Engineer"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/sunfeng.jpg",
            name: "Feng Sun",
            role: "Software Engineer"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/christelle.jpg",
            name: "Christelle Rohaut",
            role: "Business Development Associate"
        }, {
            img: "/wp-content/themes/clarity/assets/uploads/about/p11.jpg",
            name: "Mochi",
            role: "Head of Security"
        }]
    }
}, function(t, e) {
    function i(t, e, o) {
        o = o || {}, e = e || [];
        var r, s = o.strict,
            a = !1 !== o.end,
            l = o.sensitive ? "" : "i",
            u = 0,
            c = e.length,
            h = 0,
            p = 0;
        if (t instanceof RegExp) {
            for (; r = n.exec(t.source);) e.push({
                name: p++,
                optional: !1,
                offset: r.index
            });
            return t
        }
        if (Array.isArray(t)) return t = t.map(function(t) {
            return i(t, e, o).source
        }), new RegExp("(?:" + t.join("|") + ")", l);
        for (t = ("^" + t + (s ? "" : "/" === t[t.length - 1] ? "?" : "/?")).replace(/\/\(/g, "/(?:").replace(/([\/\.])/g, "\\$1").replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function(t, i, n, o, r, s, a, l) {
                i = i || "", n = n || "", r = r || "([^\\/" + n + "]+?)", a = a || "", e.push({
                    name: o,
                    optional: !!a,
                    offset: l + u
                });
                var c = (a ? "" : i) + "(?:" + n + (a ? i : "") + r + (s ? "((?:[\\/" + n + "].+?)?)" : "") + ")" + a;
                return u += c.length - t.length, c
            }).replace(/\*/g, function(t, i) {
                for (var n = e.length; n-- > c && e[n].offset > i;) e[n].offset += 3;
                return "(.*)"
            }); r = n.exec(t);) {
            for (var d = 0, f = r.index;
                "\\" === t.charAt(--f);) d++;
            d % 2 != 1 && ((c + h === e.length || e[c + h].offset > r.index) && e.splice(c + h, 0, {
                name: p++,
                optional: !1,
                offset: r.index
            }), h++)
        }
        return t += a ? "$" : "/" === t[t.length - 1] ? "" : "(?=\\/|$)", new RegExp(t, l)
    }
    t.exports = i;
    var n = /\((?!\?)/g
}, function(t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(t) {
        if (c === setTimeout) return setTimeout(t, 0);
        if ((c === i || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);
        try {
            return c(t, 0)
        } catch (e) {
            try {
                return c.call(null, t, 0)
            } catch (e) {
                return c.call(this, t, 0)
            }
        }
    }

    function r(t) {
        if (h === clearTimeout) return clearTimeout(t);
        if ((h === n || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
        try {
            return h(t)
        } catch (e) {
            try {
                return h.call(null, t)
            } catch (e) {
                return h.call(this, t)
            }
        }
    }

    function s() {
        m && d && (m = !1, d.length ? f = d.concat(f) : v = -1, f.length && a())
    }

    function a() {
        if (!m) {
            var t = o(s);
            m = !0;
            for (var e = f.length; e;) {
                for (d = f, f = []; ++v < e;) d && d[v].run();
                v = -1, e = f.length
            }
            d = null, m = !1, r(t)
        }
    }

    function l(t, e) {
        this.fun = t, this.array = e
    }

    function u() {}
    var c, h, p = t.exports = {};
    ! function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            c = i
        }
        try {
            h = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
            h = n
        }
    }();
    var d, f = [],
        m = !1,
        v = -1;
    p.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        f.push(new l(t, e)), 1 !== f.length || m || o(a)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = u, p.addListener = u, p.once = u, p.off = u, p.removeListener = u, p.removeAllListeners = u, p.emit = u, p.prependListener = u, p.prependOnceListener = u, p.listeners = function(t) {
        return []
    }, p.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}, function(t, e) {
    t.exports = function(t, e, i) {
        for (var n = 0, o = t.length, r = 3 == arguments.length ? i : t[n++]; n < o;) r = e.call(null, r, t[n], ++n, t);
        return r
    }
}, function(t, e) {
    t.exports = '<button class="u-pointer-auto js-expand__btn c-button c-text--md u-color--brand ">\t{{!isActive ? "Expand +":"Close -"}}</button><div class="u-relative | js-expand__content">\t<content></content>\t</div>'
}, function(t, e) {
    t.exports = '\t<div class="u-flex u-justify-space-between u-marg-b-md | u-block@sm u-marg-r-0@sm u-align-center@sm u-marg-b-sm@sm">\t\t<a href="#" class="c-link u-inline-block">\t\t\t<img src="' + siteValues["global"]["logo"] + '" alt="" class="c-logo" />\t\t</a>\t\t<ul class="o-list--inline | u-fit-w@sm u-marg-b-sm@sm u-hide@sm">\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["facebook_link"] + '" class="c-link">\t\t\t\t\t<svg width="18px" height="18px" viewBox="88.428 12.828 107.543 207.085" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<path fill="#959595" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["twitter_link"] + '" class="c-link">\t\t\t\t\t<svg width="18px" height="18px" viewBox="0 0 300.00006 244.18703" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<g transform="translate(-539.18 -568.86)">\t\t\t\t\t\t\t<path fill="#959595" d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464" fill="#1da1f2"/>\t\t\t\t\t\t</g>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["linkedin_link"] + '" class="c-link">\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 510 510">\t\t\t\t\t\t<path fill="#959595" d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9    S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204    V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z" />\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["medium_link"] + '" class="c-link">\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"  viewBox="0 0 1792 1792" width="1792">\t\t\t\t\t\t<path fill="#959595" d="M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zm64 101l534 866-534-266v-600zm1131 18v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zm-3-120q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t\t\t</ul>\t</div>\t\t<div class="u-flex u-justify-space-between | u-block@sm u-marg-r-0@sm u-align-center@sm">\t\t<ul class="o-list--inline | u-fit-w@sm u-marg-b-md@sm">\t\t\t<li class="u-inline-block u-marg-r-sm | u-block@sm u-marg-r-0@sm u-marg-b-xs@sm">\t\t\t\t<a href="/" class="c-link c-text--nano u-color--grey">Home</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-sm | u-block@sm u-marg-r-0@sm u-marg-b-xs@sm">\t\t\t\t<a href="/solution" class="c-link c-text--nano u-color--grey">Solution</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-sm | u-block@sm u-marg-r-0@sm u-marg-b-xs@sm">\t\t\t\t<a href="' + siteValues["global"]["community_link"] + '" class="c-link c-text--nano u-color--grey">Community</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-sm | u-block@sm u-marg-r-0@sm u-marg-b-xs@sm">\t\t\t\t<a href="/about" class="c-link c-text--nano u-color--grey">About</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-sm | u-block@sm u-marg-r-0@sm u-marg-b-xs@sm">\t\t\t\t<a href="/contact" class="c-link c-text--nano u-color--grey">Contact</a>\t\t\t</li>\t\t</ul>\t\t<ul class="o-list--inline | u-fit-w@sm u-marg-b-sm@sm u-hide u-block@sm">\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["facebook_link"] + '" class="c-link">\t\t\t\t\t<svg width="18px" height="18px" viewBox="88.428 12.828 107.543 207.085" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<path fill="#959595" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["twitter_link"] + '" class="c-link">\t\t\t\t\t<svg width="18px" height="18px" viewBox="0 0 300.00006 244.18703" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<g transform="translate(-539.18 -568.86)">\t\t\t\t\t\t\t<path fill="#959595" d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464" fill="#1da1f2"/>\t\t\t\t\t\t</g>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["linkedin_link"] + '" class="c-link">\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 510 510">\t\t\t\t\t\t<path fill="#959595" d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9    S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204    V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z" />\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="u-inline-block u-marg-r-xs">\t\t\t\t<a href="' + siteValues["global"]["medium_link"] + '" class="c-link">\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"  viewBox="0 0 1792 1792" width="1792">\t\t\t\t\t\t<path fill="#959595" d="M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zm64 101l534 866-534-266v-600zm1131 18v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zm-3-120q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t</ul>\t\t<ul class="o-list--inline | u-fit-w@sm">\t\t\t<li class="u-inline-block u-marg-r-sm | u-block@sm u-marg-r-0@sm u-marg-b-sm@sm">\t\t\t\t<a href="/privacy-policy" class="c-link u-underline c-text--nano u-color--grey">Privacy Policy</a>\t\t\t</li>\t\t\t<li class="u-inline-block c-text--nano u-color--grey | u-block@sm u-marg-r-0@sm u-marg-b-xs@sm">\t\t\t\t© Clarity 2017 — All rights reserved\t\t\t</li>\t\t</ul>\t</div>'
}, function(t, e) {
    t.exports = '<div class="u-block u-viewport-fit-h u-fit-w u-fixed u-pos-tl js-scene"><div class="c-menu u-viewport-fit-h  u-fit-w u-fixed u-pos-tl u-pad-y-md u-pad-x-vw1of24 {{isActive?\'is-active\':\'\'}} u-overflow-a">\t<div class="u-inline-block u-fit-w u-valign-middle valign-top@sm u-pad-t-xl@sm">\t\t<div class="u-flex u-justify-space-between u-align-items-center | u-block@sm u-justify-center@sm">\t\t\t<div class="u-inline-block | u-block@sm u-w10of10@sm u-align-center@sm u-marg-b-0@sm">\t\t\t\t<a href="/" data-mode="home" class="js-menu-link c-menu__link c-anim--slide-x c-anim--3 c-link u-color--white c-h3 u-inline-block u-marg-r-vw1of24 | u-marg-r-0@sm u-pad-r-0@sm u-marg-b-sm@sm {{currentPage == \'page-home\'?\'is-active\':\'\'}}">Home</a>\t\t\t\t<br class="u-hide u-block@sm"/>\t\t\t\t<a href="/solution" data-mode="solution" class="js-menu-link c-menu__link c-anim--slide-x c-anim--4 c-link u-color--white c-h3 u-inline-block u-marg-r-vw1of24 | u-marg-r-0@sm u-pad-r-0@s u-marg-b-sm@sm {{currentPage == \'page-solution\'?\'is-active\':\'\'}}">Solution</a>\t\t\t\t<br class="u-hide u-block@sm"/>\t\t\t\t<a  href="/contact" data-mode="about" class="js-menu-link c-menu__link c-anim--slide-x c-anim--5 c-link u-color--white c-h3 u-inline-block | u-marg-r-0@sm u-marg-b-sm@sm {{currentPage == \'page-contact\'?\'is-active\':\'\'}}">Contact</a>\t\t\t</div>\t\t\t<div class="u-inline-block | u-hide@sm" >\t\t\t\t<div class="c-anim--fade-in c-anim--9 u-inline-block u-marg-r-vw1of24">\t\t\t\t\t<a href="/about" class="c-link c-menu__small-link u-inline-block c-text--md u-color--white {{currentPage == \'page-about\'?\'is-active\':\'\'}}">\t\t\t\t\t\tAbout\t\t\t\t\t</a>\t\t\t\t</div>\t\t\t\t<div class="c-anim--fade-in c-anim--10 u-inline-block ">\t\t\t\t\t<a href="' + siteValues["global"]["community_link"] + '" class="c-link c-menu__small-link u-inline-block c-text--md u-color--white {{currentPage == \'page-community\'?\'is-active\':\'\'}}">\t\t\t\t\t\tCommunity\t\t\t\t\t</a>\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="u-hide | u-block@sm u-w10of10 u-align-center u-marg-b-sm" >\t\t\t\t<div class="c-anim--slide-x c-anim--6 u-block@">\t\t\t\t\t<a href="/about" class="c-link c-menu__small-link u-inline-block c-text--md u-color--white {{currentPage == \'page-about\'?\'is-active\':\'\'}} | u-marg-b-sm@sm">\t\t\t\t\t\tAbout\t\t\t\t\t</a>\t\t\t\t</div>\t\t\t\t<div class="c-anim--slide-x c-anim--7 u-block">\t\t\t\t\t<a href="' + siteValues["global"]["community_link"] + '" class="c-link c-menu__small-link u-inline-block c-text--md u-color--white {{currentPage == \'page-community\'?\'is-active\':\'\'}} | u-marg-b-md@sm">\t\t\t\t\t\tCommunity\t\t\t\t\t</a>\t\t\t\t</div>\t\t\t</div>\t\t\t<div class="u-hide u-block@sm u-align-center">\t\t\t\t<a href="' + siteValues["global"]["open_map_link"] + '" target="_blank" class="c-link u-inline-block u-valign-middle  c-button--login u-marg-b-xs c-anim--slide-x c-anim--8 | u-marg-b-md@sm " onclick="ga(\'send\', \'event\', {eventCategory:\'Navigation\', eventAction:\'click\', eventLabel:\'openmap-event\', transport: \'beacon\'});">Open map</a>\t\t\t\t<br />\t\t\t\t<a href="' + siteValues["global"]["login_link"] + '" target="_blank"  class="c-link u-inline-block u-valign-middle  c-button--login c-anim--slide-x c-anim--9 | u-marg-b-lg@sm"\t\t\t\tstyle="min-width:134px;" onclick="ga(\'send\', \'event\', {eventCategory:\'Navigation\', eventAction:\'click\', eventLabel:\'login-event\', transport: \'beacon\'});">Login</a>\t\t\t</div>\t\t</div>\t</div>\t<div class="c-anim--fade-in c-anim--10 u-absolute u-vacuum u-pad-x-vw1of24 u-pos-bl u-fit-w u-pad-y-md u-flex u-justify-space-between u-align-items-bottom | u-relative@sm u-pad-a-0@sm u-fit-w@sm u-justify-center@sm">\t\t<div class="u-block | u-align-center@sm">\t\t\t<ul class="o-list--inline u-inline-block u-valign-bottom | u-marg-b-sm@sm">\t\t\t\t<li class="o-list__item u-valign-bottom u-marg-r-sm | u-marg-r-md@sm">\t\t\t\t\t<a href="' + siteValues["global"]["facebook_link"] + '" target="_blank" class="c-link" onclick="ga(\'send\', \'event\', {eventCategory:\'Social Media\', eventAction:\'click\', eventLabel:\'facebook-event\', transport: \'beacon\'});">\t\t\t\t\t\t<svg width="18px" height="18px" viewBox="88.428 12.828 107.543 207.085" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t\t<path fill="#fff" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>\t\t\t\t\t\t</svg>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t\t<li class="o-list__item u-valign-bottom u-marg-r-sm | u-marg-r-md@sm">\t\t\t\t\t<a href="' + siteValues["global"]["twitter_link"] + '" target="_blank" class="c-link" onclick="ga(\'send\', \'event\', {eventCategory:\'Social Media\', eventAction:\'click\', eventLabel:\'twitter-event\', transport: \'beacon\'});">\t\t\t\t\t\t<svg width="18px" height="18px" viewBox="0 0 300.00006 244.18703" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t\t<g transform="translate(-539.18 -568.86)">\t\t\t\t\t\t\t\t<path fill="#fff" d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464" fill="#1da1f2"/>\t\t\t\t\t\t\t</g>\t\t\t\t\t\t</svg>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t\t<li class="o-list__item u-valign-bottom u-marg-r-sm | u-marg-r-md@sm">\t\t\t\t\t<a href="' + siteValues["global"]["linkedin_link"] + '" target="_blank" class="c-link" onclick="ga(\'send\', \'event\', {eventCategory:\'Social Media\', eventAction:\'click\', eventLabel:\'linkedin-event\', transport: \'beacon\'});">\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 510 510">\t\t\t\t\t\t\t<path fill="#FFFFFF" d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z     M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9    S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204    V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z" />\t\t\t\t\t\t</svg>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t\t<li class="o-list__item u-valign-bottom u-marg-r-sm | u-marg-r-md@sm">\t\t\t\t\t<a href="' + siteValues["global"]["medium_link"] + '" target="_blank" class="c-link" onclick="ga(\'send\', \'event\', {eventCategory:\'Social Media\', eventAction:\'click\', eventLabel:\'medium-event\', transport: \'beacon\'});">\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"  viewBox="0 0 1792 1792" width="1792">\t\t\t\t\t\t<path fill="#FFFFFF" d="M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zm64 101l534 866-534-266v-600zm1131 18v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zm-3-120q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z"/>\t\t\t\t\t</svg>\t\t\t\t\t</a>\t\t\t\t</li>\t\t\t</ul>\t\t\t<br class="u-hide u-block@sm"/>\t\t\t<div class="u-inline-block u-valign-bottom c-text--nano u-color--white | u-marg-t-sm@sm u-marg-b-lg@sm"\t\t\t\tstyle="opacity:0.5">\t\t\t\t© Clarity 2017 — All rights reserved\t\t\t</div>\t\t</div>\t\t<div class="u-hide@sm">\t\t\t<a href="' + siteValues["global"]["open_map_link"] + '" target="_blank" class="c-link u-inline-block u-valign-middle  c-button--login u-marg-r-sm" onclick="ga(\'send\', \'event\', {eventCategory:\'Navigation\', eventAction:\'click\', eventLabel:\'openmap-event\', transport: \'beacon\'});">Open map</a>\t\t\t<a href="' + siteValues["global"]["login_link"] + '" target="_blank"  class="c-link u-inline-block u-valign-middle  c-button--login" onclick="ga(\'send\', \'event\', {eventCategory:\'Navigation\', eventAction:\'click\', eventLabel:\'login-event\', transport: \'beacon\'});">Login</a>\t\t</div>\t</div></div>'
}, function(t, e) {
    t.exports = '<div class="js-content u-hide" style="opacity: 0">\t<content></content></div><div class="u-fit-w | js-placeholder" style="opacity: 0;transform: translateZ(0); padding-right: 10px;"></div><div class="u-absolute u-pos-tl u-fit-w" style="transform: translateZ(0)">\t<template is="light-core-template" if="{{useMask === false}}" remove-nodes="true">\t\t<template is="light-core-template" repeat="{{line in lines}}" remove-nodes="true">\t\t\t<span class="u-inline-block u-relative c-anim c-anim--slide-y" \t\t\t\t  style="padding-right: 10px;transition-delay:{{$index*0.1+delay}}s">\t\t\t\t{{@line}}\t\t\t</span>\t\t</template>\t</template></div>'
}, function(t, e) {
    t.exports = '<content></content><template is="light-core-template" if="{{controls === true}}">\t<div class="c-btn c-slideshow__prev-btn {{currentIndex==items.length - 1?\'\':\'is-active\'}}" on-pointerdown="_next"></div>\t<div class="c-btn c-slideshow__next-btn {{currentIndex==0?\'\':\'is-active\'}}" on-pointerdown="_prev"></div></template>'
}, function(t, e) {
    t.exports = '<div class="u-relative">\t<div class="js-word-content {{wordClass}}" style="opacity: 0; visibility: hidden;">\t\t<content></content>\t</div>\t<div class="u-absolute u-pos-tl u-fit js-words-wrapper">\t\t<template is="light-core-template" repeat="{{word in words}}">\t\t\t<span class="{{wordClass}} c-anim c-anim--slide-x u-inline-block"\t\t\t\tstyle="transition-delay: {{step*$index}}s">{{@word}}</span>\t\t</template>\t\t</div></div>'
}, function(t, e) {
    t.exports = '<input id="core-input-{{name}}" name="{{name}}" type="text" value="{{value}}"\t   class="t-input c-input--text__text js-input {{isRequired?\'js-required\':\'\'}} {{type===\'email\'?\'js-email\':\'\'}} {{!isValid && hasFocusedOnce?\'is-error\':\'\'}}" /><label for="core-input-{{name}}" class="c-input--text__label">\t{{label}} <span class="c-input--text__placeholder">{{placeholder}}</span></label><div class="c-input--text__border"></div><span class="c-input--text__check {{isValid && hasFocusedOnce ?\'\':\'u-hide\'}}"></span>'
}, function(t, e) {
    t.exports = '<form enctype="{{enctype}}" method="{{method}}" action="{{action}}" class="js-form {{classForm}}">    <content></content></form><core-ajax src="{{action}}" method="{{method}}" send-on-src-change="{{sendOnSrcChange}}" content-type="{{enctype}}"  data="{{formData}}" on-success="onAjaxSuccess" on-error="onAjaxError" auto="false" headers="{{headers}}"></core-ajax>'
}, function(t, e) {
    t.exports = '<content></content><template is="light-core-template" if="{{cover}}">\t<template is="light-core-template" if="{{isReady}}">\t\t<div class="u-absolute u-fit u-pos-tl" style="background-size: cover; background-position: center center; background-image: url(\'{{hdSrc}}\'); -webkit-backface-visibility: hidden; transform: translateZ(0);""></div>\t</template></template><template is="light-core-template" if="{{!cover}}">\t<img src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D\'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\' viewBox%3D\'0 0 {{width}} {{height}}\'%2F%3E" alt="{{alt}}" class="{{imgClass}}" style="; -webkit-backface-visibility: hidden; visibility: hidden;"/>\t\t<img $src="{{hdSrc}}" alt="{{alt}}" class="{{imgClass}} u-pos-tl u-absolute" style="opacity: {{alpha}}; transform: translateZ(0); -webkit-backface-visibility: hidden;"/></template>'
}, function(t, e) {
    t.exports = '<div class="js-content">            <template is="light-core-template" if="{{load}}" remove-nodes="true">        <template is="light-core-template" if="{{useNative && src !== null}}" remove-nodes="true">            <video class="o-wrapper--panel u-fit js-native-video" $src="{{src}}" ></video>        </template>        <template is="light-core-template" if="{{!useNative}}" remove-nodes="true">            <div class="o-wrapper--panel u-fit c-video__yt-wrapper" id="{{uuid}}-video" style=""></div>        </template>    </template>        <template is="light-core-template" if="{{poster!==\'\' && poster!==null && poster!==\'null\'}}">        <div class="u-absolute u-pos-tl c-video-player__poster u-fit u-bg-cover" style="transform: translateZ(0); z-index: 1;background-image:url(\'{{poster}}\'); background-position: 50% 50%; top: 0px; left: 0px; width: 100%; height: 100%; background-repeat: none;"></div>    </template>    <div style="padding-top: 56.25%;"></div>    <template is="light-core-template" if="{{showBigPlay}}" remove-nodes="true">        <button class="c-button--none u-align-left o-wrapper--panel u-fit js-video-big-play u-pad-a-vw1of12" style="z-index: 3">            <span class="u-inline-block u-relative u-fit {{!controls?\'u-hide\':\'\'}}">                <span class="u-absolute u-pos-bl c-h3 u-color--white u-inline-block u-marg-b-md">Play video</span>            </span>        </button>    </template>    <template is="light-core-template" if="{{controls}}">        <div class="c-video-player__controls u-marg-b-md u-absolute u-pos-bl u-align-center u-fit-w" style="z-index: 3">            <a href="javascript:void(0);" class="u-inline-block u-valign-middle js-video-play">                <svg class="c-video__play" viewBox="0 0 13.1 15.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">                    <path d="M0,0l13.1,7.9L0,15.8"/>                </svg>                <svg class="c-video__pause" viewBox="0 0 13.1 15.8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px">                    <rect x="0.9" y="1.4" width="3.3" height="13"/>                    <rect x="8.9" y="1.4" width="3.3" height="13"/>                </svg>            </a>            <core-slider active="{{active}}" class="c-video-player__progressbar u-inline-block u-valign-middle u-overflow-h" on-slide="onSliderSlide" on-stop="onSliderStop" value="{{timelineValue}}">                <div class="js-handler c-video-player__track u-fit-h u-relative">                    <svg width="24" height="24" class="c-video-player__handler">                        <circle fill="#0093e5" cx="12" cy="12" r="3.5" />                                                <circle stroke="#0093e5" cx="12" cy="12" r="11" fill="none" />                    </svg>                </div>            </core-slider>            <svg class="c-video__fullscreen u-inline-block u-valign-middle js-video-fullscreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 18">              <rect x="2" y="2" width="21" height="14"/>            </svg>            <div class="c-video-player__volume-wrapper u-inline-block u-valign-middle u-relative u-marg-r-sm js-volume">                <div class="c-video-player__volume u-relative ">                    <span class="c-video-player__volume-bar"></span>                    <span class="c-video-player__volume-bar"></span>                    <span class="c-video-player__volume-bar"></span>                    <span class="c-video-player__volume-bar"></span>                </div>                <div class="c-video-player__volume u-absolute u-pos-tl u-fit u-overflow-h" style="transform: translateX({{volume*100-100}}%) translateZ(0)">                    <div class="u-absolute u-pos-tl u-fit" style="transform: translateX({{100 - volume*100}}%) translateZ(0)">                        <span class="c-video-player__volume-bar--light"></span>                        <span class="c-video-player__volume-bar--light"></span>                        <span class="c-video-player__volume-bar--light"></span>                        <span class="c-video-player__volume-bar--light"></span>                    </div>                </div>            </div>                   </div>    </template></div>'
}, function(t, e) {
    t.exports = '<option value="{{value}}" :selected="{{selected}}" index="{{index}}"><content></content></option>'
}, function(t, e) {
    t.exports = '<select name="{{name}}" class="js-select | {{selectClass}}"></select><content></content>'
}, function(t, e) {
    t.exports = '\x3c!-- <template is="light-core-template" if="{{mask===true}}">\t\t<div class="c-mask is-{{maskDirection}} u-overflow-h {{maskClass}}" style="transition-delay: {{maskDelay+(useBackground?backgroundDelay:0)}}s">\t\t<div class="c-mask__mask is-{{maskDirection}} {{maskClass}} u-relative" style="transition-delay: {{maskDelay+(useBackground?backgroundDelay:0)}}s">\t\t\t<template is="light-core-template" if="{{parallax===true}}">\t\t\t\t<scroll-object class="u-relative u-block" z="-300" scale="1.3">\t\t\t\t\t<content></content>\t\t\t\t</scroll-object>\t\t\t</template>\t\t\t<template is="light-core-template" if="{{mask===true}}">\t\t\t\t<content></content>\t\t\t</template>\t\t</div>\t</div>\t\t<template is="light-core-template" if="{{useBackground===true}}">\t\t<div class="c-mask is-{{maskDirection}} u-overflow-h u-fit u-absolute u-pos-tl" style="transition-delay: {{maskDelay}}s">\t\t\t<div class="c-mask__mask is-{{maskDirection}} u-overflow-h u-fit u-absolute u-pos-tl" style="transition-delay: {{maskDelay}}s">\t\t\t\t<div class="c-mask__bg is-{{maskDirection}} u-fit u-absolute u-pos-tl"\t\t\t\t\t\tstyle="transition-delay: {{maskDelay+backgroundDelay}}s; background-color: {{backgroundColor}};">\t\t\t\t</div>\t\t\t</div>\t\t</div>\t</template></template><template is="light-core-template" if="{{mask !== true}}">\t<content></content></template> --\x3e <template is="light-core-template" if="{{mask===true}}">\t\t<div class="c-mask is-{{maskDirection}} u-overflow-h {{maskClass}}" style="transition-delay: {{maskDelay+(useBackground?backgroundDelay:0)}}s">\t\t<div class="c-mask__mask is-{{maskDirection}} {{maskClass}} u-relative" style="transition-delay: {{maskDelay+(useBackground?backgroundDelay:0)}}s">\t\t\t<template is="light-core-template" if="{{parallax===true}}">\t\t\t\t<scroll-object class="u-relative u-block" z="-300" scale="1.3">\t\t\t\t\t<content></content>\t\t\t\t</scroll-object>\t\t\t</template>\t\t\t<template is="light-core-template" if="{{mask===true}}">\t\t\t\t<content></content>\t\t\t</template>\t\t</div>\t</div>\t\t<template is="light-core-template" if="{{useBackground===true}}">\t\t<div class="c-mask is-{{maskDirection}} u-overflow-h u-fit u-absolute u-pos-tl" style="transition-delay: {{maskDelay}}s">\t\t\t<div class="c-mask__mask is-{{maskDirection}} u-overflow-h u-fit u-absolute u-pos-tl" style="transition-delay: {{maskDelay}}s">\t\t\t\t<div class="c-mask__bg is-{{maskDirection}} u-fit u-absolute u-pos-tl"\t\t\t\t\t\tstyle="transition-delay: {{maskDelay+backgroundDelay}}s; background-color: {{backgroundColor}};">\t\t\t\t</div>\t\t\t</div>\t\t</div>\t</template></template><template is="light-core-template" if="{{mask !== true}}">\t<template is="light-core-template" if="{{parallax===true}}">\t\t<scroll-object class="u-relative u-block" z="-200" scale="1.3">\t\t\t<content></content>\t\t</scroll-object>\t</template>\t<template is="light-core-template" if="{{parallax===false}}">\t\t<content></content>\t</template></template>'
}, function(t, e) {
    t.exports = '<scroll-object set-active="true" position="{{[0, scroll * -1]}}"  \t\t\tclass=" u-viewport-fit-h o-wrapper--valign  u-block u-relative u-align-center u-vacuum u-pad-y-xxl | u-height-a@sm ">\t\t<div class="u-inline-block u-valign-middle ">\t\t<h1 class="c-hgiga u-color--brand">\t\t\t404\t\t</h1>\t\t\t<h1 class="c-h1 u-color--grey u-marg-b-md">\t\t\tPage not found\t\t</h1>\t\t\t<a href="/" class="c-link c-text--xs u-color--brand u-uppercase u-marg-b-md">Back to Home</a>\t</div></scroll-object>\x3c!-- fOOTER --\x3e<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-pad-b-lg u-bg--almost-white u-pad-x-vw1of12">\t<app-footer class="u-block"></app-footer></scroll-object>'
}, function(t, e) {
    t.exports = '<scroll-object position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-left u-pad-t-xl u-marg-b-xl | u-pad-t-xxl@sm">\t<h1 class="u-vacuum  u-color--brand u-marg-l-vw3of12 u-vw7of12 u-marg-b-sm | u-marg-l-vw1of12@sm u-vw10of12@sm u-marg-b-md@sm">\t\t<app-words word-class="c-hgiga--tall" class="u-block" step="0.04">\t\t\tEveryone has the right to breathe clean air.\t\t</app-words>\t</h1>\t<p class="c-text--sm u-color--grey u-marg-l-vw3of12 u-vw5of12 u-marg-b-xl c-anim--fade-in c-anim--10 | u-marg-l-vw1of12@sm u-vw10of12@sm">\t\tAt Clarity, we leverage our expertise in air sensing technology, IoT devices, and data analytics to create solutions that revolutionize the way we understand and respond to air pollution. Founded in 2014, we are now deploying the next generation of dense air quality monitoring networks around the world to build smarter cities through smarter data.\t</p></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-inline-block u-relative u-marg-b-xl u-vacuum u-fit-w">\t<div class="c-slideshow__meet u-relative u-w4of24 u-inline-block u-valign-top u-marg-x-w1of24 | u-marg-x-vw1of12@sm u-vw10of12@sm u-marg-b-md@sm">\t\t<h4 class="c-h4 u-color--brand | u-hide@sm">Meet the Team</h4>\t\t<h4 class="c-h3 u-color--brand u-hide | u-block@sm">Meet the Team</h4>\t\t<core-slider active="{{active}}" class=" c-slideshow-slider u-inline-block u-valign-middle u-hide@sm"\t\t\t\ton-slide="onSliderSlide" on-stop="onSliderStop" value="0">\t\t    <svg class="js-handler c-slideshow-handler" width="26" height="26">\t\t    \t<circle fill="#fff" cx="13" cy="13" r="13"></circle>\t\t    \t<circle stroke="#c6c6c6" fill="none" cx="13" cy="13" r="9"></circle>\t\t    \t<circle fill="#0093e5" cx="13" cy="13" r="3"></circle>\t\t    </svg>\t\t</core-slider>\t</div>\t<div class="u-w9of12 u-inline-block u-valign-top u-overflow-h | u-marg-l-vw1of12@sm u-vw11of12@sm u-relative">\t\t<div class="u-marg-b-xs@sm u-overflow-s@sm js-team-wrapper">\t\t\t<div class="u-vw7of24 u-relative u-force-inline u-vacuum | u-vw9of12@sm u-marg-b-md@sm">\t\t\t\t<template is="light-core-template" repeat="{{team in data.team}}">\t\t\t\t\t<scroll-object position="{{slideshowPosition}}" ratio="{{0.3 - $index*0.01}}"\t\t\t\t\t\t\t\t\tclass="u-inline-block u-fit-w js-staff | u-hide@sm">\t\t\t\t\t\t<core-img width="375" height="484" \t\t\t\t\t\t\t\t\tclass="u-marg-b-md u-inline-block u-relative u-fit-w" alt="">\t\t\t\t\t\t\t<core-img-source src="{{team.img}}" query="(max-width: 3000px)"></core-img-source>\t\t\t\t\t\t</core-img>\t\t\t\t\t\t<h5 class="c-text--sm u-color--dark-grey">{{team.name}}</h5>\t\t\t\t\t\t<h6 class="c-text--sm u-color--grey">{{team.role}}</h6>\t\t\t\t\t</scroll-object>\t\t\t\t\t<div class="u-hide u-fit-w js-staff-mobile | u-inline-block@sm" >\t\t\t\t\t\t<core-img width="375" height="484" \t\t\t\t\t\t\t\t\tclass="u-marg-b-md u-inline-block u-relative u-fit-w" alt="">\t\t\t\t\t\t\t<core-img-source src="{{team.img}}" query="(max-width: 3000px)"></core-img-source>\t\t\t\t\t\t</core-img>\t\t\t\t\t\t<h5 class="c-text--sm u-color--dark-grey">{{team.name}}</h5>\t\t\t\t\t\t<h6 class="c-text--sm u-color--grey">{{team.role}}</h6>\t\t\t\t\t</div>\t\t\t\t</template>\t\t\t</div>\t\t</div>\t\t\x3c!-- <core-slider active="{{active}}" \t\t\t\tclass="u-marg-l-vw1of24 c-slideshow-slider u-inline-block u-valign-middle u-hide | u-block@sm u-marg-l-0@sm"\t\t\t\ton-slide="onSliderSlide" on-stop="onSliderStop" >\t\t    <svg class="js-handler c-slideshow-handler" viewBox=\'0 0 26 26\'>\t\t    \t<circle fill="#fff" cx="13" cy="13" r="13"></circle>\t\t    \t<circle stroke="#c6c6c6" fill="none" cx="13" cy="13" r="9"></circle>\t\t    \t<circle fill="#0093e5" cx="13" cy="13" r="3"></circle>\t\t    </svg>\t\t</core-slider> --\x3e\t</div></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-marg-b-xl u-vacuum">\t<div class="u-relative u-w4of24 u-inline-block u-valign-top u-marg-x-w1of24 | u-marg-x-vw1of12@sm u-vw10of12@sm u-marg-b-md@sm">\t\t<h4 class="c-h4 u-color--brand | u-hide@sm">Clarity is Hiring!</h4>\t\t<h4 class="c-h4 u-color--brand u-hide u-marg-b-md | u-block@sm">Clarity is Hiring!</h4>\t</div>\t<div class="u-w9of12 u-inline-block u-valign-top u-overflow-h | u-marg-l-vw1of12@sm u-vw11of12@sm u-relative">\t\t<p class="c-text--sm u-color--grey u-marg-b-lg u-vw13of24 | u-fit-w@sm">\t\t\tPassionate about using technology to change the world? We are accepting rolling applications for the following positions to join our team:\t\t</p>\t\t<h3 class="c-text--xs u-color--dark-grey u-marg-b-md">OPEN POSITIONS</h3>\t\t<ul class="o-list--none">\t\t\t<li class="u-vw8of12 u-flex u-justify-space-between u-marg-b-sm | u-fit-w@sm u-block@sm u-marg-b-lg@sm">\t\t\t\t<div class="u-marg-b-md@sm">\t\t\t\t\t<h3 class="c-h3 u-color--dark-grey">Software Engineer - Full Stack Developer</h3>\t\t\t\t\t<p class="c-text--sm u-color--grey">Berkeley · Full Time · $80K – $150K · 0.1% – 0.5%</p>\t\t\t\t</div>\t\t\t\t<div>\t\t\t\t\t<a href="https://angel.co/claritymovement/jobs/171087-software-engineer-full-stack-developer" target="_blank" class="c-link c-button--rounded c-button--primary">Apply</a>\t\t\t\t</div>\t\t\t</li>\t\t</ul>\t</div></scroll-object>\x3c!-- fOOTER --\x3e<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-pad-b-lg u-bg--almost-white u-pad-x-vw1of12">\t<app-footer class="u-block"></app-footer></scroll-object>'
}, function(t, e) {
    t.exports = '<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-right u-vacuum u-pad-t-xxl u-marg-b-xl | u-align-left@sm | u-marg-b-md@sm">\t\t<div class="u-w2of12 u-marg-r-w1of12 u-align-right u-inline-block u-valign-top u-relative">\t\t<a href="' + siteValues["global"]["community_link"] + '" class="u-inline-block c-link c-text--xs u-color--brand u-uppercase u-marg-b-md">Back</a>\t</div>\t\t<img class="u-w9of12 u-inline-block u-valign-top | u-vw11of12@sm u-marg-l-w1of12@sm" src="{{content.img.sizes.medium_large}}" alt="" />\t</scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-align-left u-relative u-vacuum">\t\t\t<div class="u-vw2of12 u-marg-r-vw1of12 u-align-right u-inline-block u-valign-top u-pad-t-xxs | u-marg-r-0@sm u-marg-l-vw1of12@sm u-vw5of12@sm u-align-left@sm u-pad-t-0@sm">\t\t<p class="c-text--xs u-color--brand u-uppercase u-marg-b-md | u-inline-block@sm u-marg-r-sm@sm">{{content.category[0].name}}</p>\t\t<h3 class="c-text--nano u-uppercase u-color--dark u-marg-b-xx u-marg-b-xxs | u-inline-block@sm u-marg-r-sm@sm | u-hide@sm">{{content.date}}</h3>\t\t<h4 class="c-text--nano u-uppercase u-color--dark | u-inline-block@sm u-marg-r-sm@sm u-marg-b-md@sm | u-hide@sm">by {{content.author}}</h4>\t</div>\t<div class="u-vw5of12 u-align-right u-hide u-valign-top | u-inline-block@sm u-marg-b-md@sm">\t\t<p class="c-text--xs u-color--dark u-uppercase u-marg-b-sm">SHARE</p>\t\t<ul class="o-list--inline">\t\t\t<li class="o-list__item u-marg-r-xs">\t\t\t\t<a href="#" class="c-link">\t\t\t\t\t<svg width="20px" height="20px" viewBox="0 0 300.00006 244.18703" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<g transform="translate(-539.18 -568.86)">\t\t\t\t\t\t\t<path fill="#d5d5d5" d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464" fill="#1da1f2"/>\t\t\t\t\t\t</g>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="o-list__item">\t\t\t\t<a href="#" class="c-link">\t\t\t\t\t<svg width="20px" height="20px" viewBox="88.428 12.828 107.543 207.085" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<path fill="#d5d5d5" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t</ul>\t</div>\t\t<div class="u-marg-l-vw1of12@sm u-vw5of12@sm u-align-left@sm u-hide | u-block@sm u-marg-b-sm@sm">\t\t<h3 class="c-text--nano u-uppercase u-color--dark u-marg-b-xx u-marg-b-xxs | u-inline-block@sm u-marg-r-sm@sm">{{content.date}}</h3>\t\t<h4 class="c-text--nano u-uppercase u-color--dark | u-inline-block@sm u-marg-r-sm@sm u-marg-b-md@sm">by {{content.author}}</h4>\t</div>\t<div class="u-inline-block u-valign-top u-vw7of12 | u-vw10of12@sm u-marg-l-vw1of12@sm">\t\t<h1 class="c-hgiga u-color--dark-grey u-marg-b-sm">{{content.title}}</h1>\t</div>\t<div class="u-vw2of12 u-marg-r-vw1of12 u-align-right u-inline-block u-valign-top | u-hide@sm">\t\t<p class="c-text--xs u-color--dark u-uppercase u-marg-b-xs">SHARE</p>\t\t<ul class="o-list--inline">\t\t\t<li class="o-list__item u-marg-r-xs">\t\t\t\t<a href="#" class="c-link">\t\t\t\t\t<svg width="20px" height="20px" viewBox="0 0 300.00006 244.18703" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<g transform="translate(-539.18 -568.86)">\t\t\t\t\t\t\t<path fill="#d5d5d5" d="m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464" fill="#1da1f2"/>\t\t\t\t\t\t</g>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t\t<li class="o-list__item">\t\t\t\t<a href="#" class="c-link">\t\t\t\t\t<svg width="20px" height="20px" viewBox="88.428 12.828 107.543 207.085" version="1.1"  xmlns="http://www.w3.org/2000/svg">\t\t\t\t\t\t<path fill="#d5d5d5" d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"/>\t\t\t\t\t</svg>\t\t\t\t</a>\t\t\t</li>\t\t</ul>\t</div>\t<div class="u-inline-block u-valign-top u-vw7of12 u-marg-b-md | u-vw10of12@sm u-marg-l-vw1of12@sm">\t\t<ul class="o-list--inline u-color--dark u-uppercase">\t\t\t<template is="light-core-template" repeat="{{tag in content.tags}}">\t\t\t\t<li class="o-list__item c-text--nano u-marg-r-sm">{{tag.name}}</li>\t\t\t</template>\t\t</ul>\t</div>\t</scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-align-left u-relative u-marg-b-xl u-vacuum">\t{{@content.content}}</scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-align-left u-relative u-marg-b-xl u-vacuum | u-marg-l-vw1of12@sm u-vw10of12@sm ">\t\t<div class="u-flex | u-justify-space-between@sm">\t\t<div class="u-vw2of12 u-marg-r-vw1of12 u-align-right u-inline-block u-valign-top | u-align-left@sm u-marg-r-0@sm">\t\t\t<a href="' + siteValues["global"]["community_link"] + '" class="c-link c-text--xs u-color--brand u-uppercase u-marg-b-md">Back</a>\t\t</div>\t\t<div class="u-align-left u-inline-block u-valign-top">\t\t\t<button on-click="_backToTop" class="c-button--none c-text--xs u-color--dark u-uppercase u-marg-b-sm u-force-inline">Back to top</button>\t\t</div>\t</div></scroll-object>\x3c!-- fOOTER --\x3e<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-pad-b-lg u-bg--almost-white u-pad-x-vw1of12">\t<app-footer class="u-block"></app-footer></scroll-object>'
}, function(t, e) {
    t.exports = '<template is="light-core-template" if="{{dataUrl !== null}}" remove-nodes>\t<core-ajax src="{{dataUrl}}" on-success="_onDataLoaded" on-error="_onDataError"></core-ajax></template>    <scroll-object position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-left u-vacuum u-pad-t-xxl">\t<h1 class="u-vw6of12 u-marg-l-vw3of12 u-inline-block u-color--brand u-marg-b-lg | u-marg-l-vw1of12@sm u-vw10of12@sm u-marg-b-md@sm">\t\t<app-words  word-class="c-hgiga--tall" class="u-block u-relative" step="0.04">\t\t\tThis is where we share thoughts, case studies, news, and resources.\t\t</app-words>\t</h1></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-align-left u-relative u-marg-b-lg u-vacuum">\t\t<div class="u-vw2of12 u-marg-l-vw1of12 u-inline-block u-valign-top | u-marg-l-vw1of12@sm u-vw11of12@sm u-marg-b-md@sm u-overflow-s@sm | js-filter-wrapper" _style="transform: translateY({{filterPos}}px) translateZ(0);">\t\t<ul class="o-list--none | u-force-inline@sm">\t\t\t<li class="u-marg-b-sm | u-inline-block@sm u-marg-r-sm@sm u-pad-x-xs@sm">\t\t\t\t<button data-filter="all" on-click="_onFilterDown" \t\t\t\t\t\tclass="c-link c-button--none u-color--dark-grey c-filter c-h4 {{\'all\' == content.filter?\'is-active\':\'\'}}">\t\t\t\t\tAll\t\t\t\t</button>\t\t\t</li>\t\t\t<template is="light-core-template" repeat="{{filter in content.filters}}">\t\t\t\t<template is="light-core-template" if="{{filter.term_id !==1}}">\t\t\t\t\t<li class="u-marg-b-sm | u-inline-block@sm u-marg-r-sm@sm u-pad-x-xs@sm">\t\t\t\t\t\t<button data-filter="{{filter.slug}}" \t\t\t\t\t\t\ton-click="_onFilterDown" class="c-link c-button--none u-color--dark-grey c-filter c-h4 {{filter.slug == content.filter?\'is-active\':\'\'}}">\t\t\t\t\t\t\t{{filter.name}}<sup class="{{!filter.count?\'u-hide\':\'\'}}\'">{{filter.count}}</sup>\t\t\t\t\t\t</button>\t\t\t\t\t</li>\t\t\t\t</template>\t\t\t</template>\t\t</ul>\t</div>\t<div class="u-inline-block u-valign-top u-vw8of12 u-align-left | u-marg-l-vw1of12@sm u-vw10of12@sm | c-overlay--fast {{showPosts?\'is-active\':\'\'}}">\t\t\t\t<div class="u-inline-block u-valign-top u-vw4of12 | u-w10of10@sm">\t\t\t<template is="light-core-template" repeat="{{article in content.posts}}">\t\t\t\t<template is="light-core-template" if="{{ $index % 2 == 0 }}">\t\t\t\t\t<scroll-object class="u-block u-relative u-marg-b-md | u-marg-b-lg@sm">\t\t\t\t\t\t\t<div class="u-inline-block c-anim--slide-y u-align-left {{article.type==\'large\' && $index>0?\'u-vw7of24 | u-w10of10@sm\':\'u-vw2of12 | u-w10of10@sm\'}} | u-cursor-pointer js-article">\t\t\t\t\t\t\t\t<div href="https://medium.com/clarity-movement/{{article.name}}"\t\t\t\t\t\t\t\t\t\t    class="c-zoom u-marg-b-sm js-img | u-marg-b-md@sm" \t\t\t\t\t\t\t\t\t\t\tdata-src="{{article.img.sizes.medium_large}}"\t\t\t\t\t\t\t\t\t\t\tdata-width="{{article.img.width}}"\t\t\t\t\t\t\t\t\t\t\tdata-height="{{article.img.height}}"\t\t\t\t\t\t\t\t\t\t\tstyle="padding-top: 100%;">\t\t\t\t\t\t\t\t\t<div class="u-absolute u-pos-tl u-fit u-bg-cover u-bg-center" \t\t\t\t\t\t\t\t\t\tstyle="background-image: url(\'{{article.img.sizes[article.type==\'large\'? \'medium_large\' : \'medium\']}}\')">\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--left"></span>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--right"></span>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--bottom"></span>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--top"></span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<h4 class="c-text--xs u-color--brand u-marg-b-xs u-uppercase">{{article.category[0].name}}</h4>\t\t\t\t\t\t\t\t<h3 class="u-vw6of24 c-h4--alt u-color--dark-grey | u-fit-w@sm">{{article.title}}</h3>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</scroll-object>\t\t\t\t</template>\t\t\t</template>\t\t</div>\t\t<div class="u-inline-block u-valign-top u-vw4of12  | u-w10of10@sm">\t\t\t<template is="light-core-template" repeat="{{article in content.posts}}">\t\t\t\t<template is="light-core-template" if="{{ $index % 2 != 0 }}">\t\t\t\t\t<scroll-object class="u-block u-relative u-marg-b-md  | u-marg-b-lg@sm">\t\t\t\t\t\t<div class="u-inline-block c-anim--slide-y u-align-left {{article.type==\'large\' && $index>0?\'u-vw7of24 | u-w10of10@sm\':\'u-vw2of12 | u-w10of10@sm\'}} | u-cursor-pointer  js-article ">\t\t\t\t\t\t\t<div href="https://medium.com/clarity-movement/{{article.name}}"\t\t\t\t\t\t\t\t\t\t    class="c-zoom u-marg-b-sm js-img | u-marg-b-md@sm" \t\t\t\t\t\t\t\t\t\t\tdata-src="{{article.img.sizes.medium_large}}"\t\t\t\t\t\t\t\t\t\t\tdata-width="{{article.img.width}}"\t\t\t\t\t\t\t\t\t\t\tdata-height="{{article.img.height}}"\t\t\t\t\t\t\t\t\t\t\tstyle="padding-top: 100%;">\t\t\t\t\t\t\t\t\t<div class="u-absolute u-pos-tl u-fit u-bg-cover u-bg-center" \t\t\t\t\t\t\t\t\t\tstyle="background-image: url(\'{{article.img.sizes[article.type==\'large\'? \'medium_large\' : \'medium\']}}\')">\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--left"></span>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--right"></span>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--bottom"></span>\t\t\t\t\t\t\t\t\t<span class="c-zoom__border--top"></span>\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t<h4 class="c-text--xs u-color--brand u-marg-b-xs u-uppercase">{{article.category[0].name}}</h4>\t\t\t\t\t\t\t\t<h3 class="u-vw6of24 c-h4--alt u-color--dark-grey | u-fit-w@sm">{{article.title}}</h3>\t\t\t\t\t\t</div>\t\t\t\t\t</scroll-object>\t\t\t\t</template>\t\t\t</template>\t\t</div>\t</div></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-align-left u-relative u-marg-b-xl u-vacuum | u-hide@sm">\t\t<div class="u-vw2of12 u-marg-r-vw1of12 u-align-right u-inline-block u-valign-top">\t\t\x3c!-- <a href="' + siteValues["global"]["community_link"] + '" class="c-link c-text--xs u-color--brand u-uppercase u-marg-b-md">Back</a> --\x3e\t</div>\t<div class="u-vw2of12 u-align-left u-inline-block u-valign-top | u-vw6of12@sm">\t\t<button on-click="_backToTop" class="c-button--none c-text--xs u-color--dark u-uppercase u-marg-b-sm">Back to top</button>\t</div></scroll-object>\x3c!-- fOOTER --\x3e<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-pad-b-lg u-bg--almost-white u-pad-x-vw1of12">\t<app-footer class="u-block"></app-footer></scroll-object>\x3c!-- HERO TRANSITION --\x3e<div class="u-absolute u-pos-tl u-fit u-bg--white u-pointer-none c-overlay {{showHero?\'is-active\': \'\'}}"></div><div class="u-absolute u-pos-tl u-overflow-h" \tstyle="transform-origin: 0 0; transform: translate({{heroPosition[0]}}px,{{heroPosition[1]}}px) scaleX({{heroScale[0]}}) scaleY({{heroScale[1]}}) translateZ(0); width: {{heroSize[0]}}px; height: {{heroSize[1]}}px; z-index: 2;">\t\t<img class="u-block u-absolute u-pos-tl" src="{{heroSrc}}" \t\t\tstyle="transform-origin: 0 0; transform: translate({{heroImgPosition[0]}}px,{{heroImgPosition[1]}}px) scaleX({{heroImgScale[0]}}) scaleY({{heroImgScale[1]}}); width: {{heroSize[0]}}px; height: {{heroSize[1]}}px" alt="" /></div>'
}, function(t, e) {
    t.exports = '<div class="js-scene u-absolute u-pos-tl u-pointer-none"></div><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-right u-pad-t-xl u-marg-b-xl u-vacuum | u-align-left@sm">\t\t<scroll-object class="u-block u-relative u-align-left u-pad-t-xl u-marg-b-xl">\t\t\t<h1 class="u-vacuum u-color--brand u-marg-l-vw3of12 u-vw7of12 u-marg-b-sm  | u-marg-l-vw1of12@sm u-vw10of12@sm u-marg-b-md@sm">\t\t\t\t<app-words  word-class="c-hgiga" class="u-block" step="0.04">\t\t\t\t\tGet in Touch.\t\t\t\t</app-words>\t\t\t</h1>\t\t\t<h1 class="c-text--sm u-color--grey u-marg-l-vw3of12 u-vw5of12 u-marg-b-xl c-anim--slide-y c-anim--2 | u-marg-l-vw1of12@sm u-vw10of12@sm">\t\t\t\t Clarity is looking to partner with leading government agencies, smart city solution aggregators, and other forward thinking institutions to deploy the next generation of distributed air quality monitoring networks.<br/><br/>\t\t\t\t Please fill out the following form and someone from Clarity will be in touch. <br/><br/>\t\t\t\t For individuals looking to purchase a personal air monitoring device, feel free to join our <a href="http://eepurl.com/cDJYlX" target="_blank" class="c-link u-color--grey u-underline">mailing list</a> for an announcement when we launch our online store in 2018.\t\t\t</h1>\t\t</scroll-object>\t\t<scroll-object class="u-relative u-vw9of12 u-inline-block u-align-left | u-marg-l-vw1of12@sm u-vw10of12@sm u-marg-b-md@sm">\t\t\t<core-ajax-form on-success="_onFormSuccess" on-error="_onFormError" action="{{wsRoot}}mail" method="POST" class="">\t\t\t\t<light-ui-select name="interest" class="c-input--select u-vw3of12 u-marg-r-vw1of12 u-marg-b-md c-anim c-anim--slide-y c-anim--3 | u-w10of10@sm">\t\t\t\t\t<light-ui-select-option value="">Interested in</light-ui-select-option>\t\t\t\t\t<light-ui-select-option value="Learning More">Learning More</light-ui-select-option>\t\t\t\t\t<light-ui-select-option value="Requesting a Quote">Requesting a Quote</light-ui-select-option>\t\t\t\t\t<light-ui-select-option value="Becoming a Partner">Becoming a Partner</light-ui-select-option>\t\t\t\t\t<light-ui-select-option value="Technical Support">Technical Support</light-ui-select-option>\t\t\t\t\t<light-ui-select-option value="Working at Clarity">Working at Clarity</light-ui-select-option>\t\t\t\t\t<light-ui-select-option value="Something Else">Something Else</light-ui-select-option>\t\t\t\t</light-ui-select>\t\t\t\t\t<core-input-text name="company" label="Company" type="text" class="c-input--text u-vw3of12 u-marg-r-vw1of12 u-marg-b-md  c-anim c-anim--slide-y c-anim--4 | u-w10of10@sm"></core-input-text>\t\t\t\t<core-input-text is-required="true" name="name" label="Name" type="text" class="c-input--text u-vw3of12 u-marg-r-vw1of12 u-marg-b-md  c-anim c-anim--slide-y c-anim--5 | u-w10of10@sm"></core-input-text>\t\t\t\t\t<core-input-text type="email" is-required="true" name="email" label="Email" type="text" class="c-input--text u-vw3of12 u-marg-r-vw1of12 u-marg-b-md  c-anim c-anim--slide-y c-anim--6 | u-w10of10@sm"></core-input-text>\t\t\t\t<div class="u-vw7of12 u-marg-b-md c-anim c-anim--slide-y c-anim--7 | u-w10of10@sm u-marg-b-lg@sm">\t\t\t\t\t<textarea name="message" placeholder="Your message..." rows="5" class="u-block c-textarea  js-required"></textarea>\t\t\t\t</div>\t\t\t\t<div class="c-anim c-anim--slide-y c-anim--8 | u-align-center@sm">\t\t\t\t\t\t\t\t\t<button type="submit" class="c-button--rounded c-button--primary">Submit</button>\t\t\t\t</div>\t\t\t</core-ajax-form>\t\t</scroll-object>\t</scroll-object><div class="u-fixed u-pos-tl o-wrapper--valign u-viewport-fit u-bg--white c-overlay {{showDialog?\'is-active\':\'\'}}  u-align-center" \t\tstyle="background: #fff; z-index: 10000">\t<div class="u-inline-block u-valign-middle u-vw10of12 u-relative">\t\t<h1 class="u-color--brand c-h1 u-marg-b-xs c-anim c-anim--slide-y">\t\t\tThank you\t\t</h1>\t\t\t<p class="c-text--sm u-color--grey c-anim c-anim--slide-y c-anim--2 u-marg-b-md">Your message has been sent. We will be in touch shortly.</p>\t\t<div class="c-anim c-anim--slide-y">\t\t\t\t\t<a href="/" class="c-link c-button--rounded c-button--primary ">Go to Homepage</a>\t\t</div>\t</div></div>\x3c!-- fOOTER --\x3e<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-pad-b-lg u-bg--almost-white u-pad-x-vw1of12">\t<app-footer class="u-block"></app-footer></scroll-object>'
}, function(t, e) {
    t.exports = '<div class="u-absolute u-fit u-pos-tl u-bg-cover u-bg-center" style="background-image:url(\'/wp-content/themes/clarity/assets/images/bg.jpg\'); height:{{winHeight}}px;">\t</div><div class="u-absolute u-viewport-fit u-pos-tl {{currentIndex > 0 ? \'is-active\':\'\'}} u-hide@sm" style="height:{{winHeight}}px;">\t<div class="u-overflow-h u-force-inline c-hgiga u-absolute c-number-wrapper u-inline-block u-vacuum">\t\t<span class="u-inline-block u-valign-middle c-number c-anim--slide-x c-anim--2">0</span>\t\t<span class="u-inline-block u-relative u-valign-middle c-anim--slide-x c-anim--3">\t\t\t<span class="u-inline-block c-slide-mask__inner c-number" style="opacity:0">0</span>\t\t\t<span class="u-inline-block  u-absolute  u-pos-tl  c-number c-slide-mask {{currentIndex==1?\'is-active\':currentIndex>1?\'is-prev\':\'is-next\'}}">\t\t\t\t<span class="u-inline-block c-slide-mask__inner">1</span>\t\t\t</span>\t\t\t<span class="u-inline-block u-absolute  u-pos-tl c-number c-slide-mask {{currentIndex==2?\'is-active\':currentIndex>2?\'is-prev\':\'is-next\'}}">\t\t\t\t<span class="u-inline-block c-slide-mask__inner">2</span>\t\t\t</span>\t\t\t<span class="u-inline-block u-absolute  u-pos-tl c-number c-slide-mask {{currentIndex==3?\'is-active\':currentIndex>3?\'is-prev\':\'is-next\'}}">\t\t\t\t<span class="u-inline-block c-slide-mask__inner">3</span>\t\t\t</span>\t\t</span>\t</div></div><div class="js-scene u-relative u-pointer-none"></div><div class="u-viewport-fit u-absolute u-pos-tl o-wrapper--valign u-pointer-none {{currentIndex>0?\'is-prev\':currentIndex==0?\'is-active\' : \'is-next\'}}" style="height:{{winHeight}}px;">\t<div class="u-inline-block u-valign-middle u-marg-l-vw2of12 u-vw6of12 | u-fit-w@sm u-marg-l-0@sm u-align-center@sm u-marg-b-vh2of10@sm">\t\t<h2 class="c-h4 u-color--grey u-force-inline c-anim--slide-x c-anim--2 | u-marg-b-0@sm" >\t\t\t' + siteValues["home"]["main_title_1"] + '\t\t</h2>\t\t<h1 class="u-vacuum u-color--brand u-marg-b-xs u-marg-t-0@sm">\t\t\t<app-words word-class="c-hgiga--alt" class="u-inline-block u-fit-w">\t\t\t\t' + siteValues["home"]["main_title_2"] + '\t\t\t</app-words>\t\t</h1>\t\t\t</div></div><div class="u-viewport-fit u-absolute u-pos-tl o-wrapper--valign u-pointer-none {{currentIndex>1?\'is-prev\':currentIndex==1?\'is-active\' : \'is-next\'}} | o-wrapper--valign-bottom@sm u-pad-x-vw1of12@sm u-pad-b-md@sm" style="height:{{winHeight}}px;">\t<div class="u-relative u-inline-block u-valign-middle u-marg-l-vw2of12 u-vw10of12 | u-fit-w@sm u-valign-bottom@sm u-marg-l-0@sm">\t\t<div class="c-home__title-wrapper">\t\t\t<h1 class="u-marg-b-xs c-h4 u-color--grey c-anim--slide-x c-anim--0 | u-marg-b-0@sm">' + siteValues["home"]["section-1_main_title_1"] + '</h1>\t\t\t<h2 class="u-vacuum u-color--brand" style="line-height: 1">\t\t\t\t<app-words word-class="c-hgiga--small">' + siteValues["home"]["section-1_main_title_2"] + '</app-words>\t\t\t</h2>\t\t</div>\t\t<div class="u-relative u-vw4of12 c-anim--slide-x c-anim--1 | u-vw8of12@sm">\t\t\t<app-accordion class="u-block u-fit-w u-absolute u-offset-l-0 u-offset-t-w10of10 | u-offset-t-0@sm u-relative@sm u-hide@sm">\t\t\t\t\t\t<div class="c-text--md u-color--grey">\t\t\t\t\t' + siteValues["home"]["section-1_description"] + '\t\t\t\t</div>\t\t\t</app-accordion>\t\t</div>\t</div></div><div class="u-viewport-fit u-absolute u-pos-tl o-wrapper--valign u-pointer-none {{currentIndex>2?\'is-prev\':currentIndex==2?\'is-active\' : \'is-next\'}} | o-wrapper--valign-bottom@sm u-pad-x-vw1of12@sm u-pad-b-md@sm" style="height:{{winHeight}}px;">\t<div class="u-inline-block u-valign-middle u-marg-l-vw2of12 u-vw10of12 | u-fit-w@sm u-valign-bottom@sm u-marg-l-0@sm">\t\t<div class="c-home__title-wrapper">\t\t\t<h1 class="u-marg-b-xs c-h4 u-color--grey c-anim--slide-x c-anim--0 | u-marg-b-0@sm">' + siteValues["home"]["section-2_main_title_1"] + '</h1>\t\t\t<h2 class="u-vacuum u-color--brand" style="line-height: 1">\t\t\t\t<app-words word-class="c-hgiga--small">' + siteValues["home"]["section-2_main_title_2"] + '</app-words>\t\t\t</h2>\t\t</div>\t\t<div class="u-relative u-vw4of12 c-anim--slide-x c-anim--1 | u-vw8of12@sm">\t\t\t<app-accordion class="u-block u-fit-w u-absolute u-offset-l-0 u-offset-t-w10of10 | u-offset-t-0@sm u-relative@sm u-hide@sm">\t\t\t\t\t\t<div class="c-text--md u-color--grey">\t\t\t\t\t' + siteValues["home"]["section-2_description"] + '\t\t\t\t</div>\t\t\t</app-accordion>\t\t</div>\t</div></div><div class="u-pointer-none u-viewport-fit u-absolute u-pos-tl o-wrapper--valign {{currentIndex>3?\'is-prev\':currentIndex==3?\'is-active\' : \'is-next\'}}  | o-wrapper--valign-bottom@sm u-pad-x-vw1of12@sm u-pad-b-md@sm" style="height:{{winHeight}}px;">\t<div class="u-inline-block u-valign-middle u-marg-l-vw2of12 u-vw10of12 | u-fit-w@sm u-valign-bottom@sm u-marg-l-0@sm">\t\t\t\t<div class="c-home__title-wrapper">\t\t\t<h1 class="u-marg-b-xs c-h4 u-color--grey c-anim--slide-x c-anim--0 | u-marg-b-0@sm">' + siteValues["home"]["section-3_main_title_1"] + '</h1>\t\t\t<h2 class="u-vacuum u-color--brand u-force-inline" style="line-height: 1">\t\t\t\t<app-words word-class="c-hgiga--small">' + siteValues["home"]["section-3_main_title_2"] + '</app-words>\t\t\t</h2>\t\t</div>\t\t\t\t<div class="u-relative u-vw4of12 c-anim--slide-x c-anim--1 | u-vw8of12@sm">\t\t\t<app-accordion class="u-block u-fit-w u-absolute u-offset-l-0 u-offset-t-w10of10 | u-offset-t-0@sm u-relative@sm u-hide@sm">\t\t\t\t<div class="c-text--md u-color--grey">\t\t\t\t\t' + siteValues["home"]["section-3_description"] + '\t\t\t\t</div>\t\t\t</app-accordion>\t\t</div>\t\t<div class="u-hide u-block@sm u-pad-t-sm" style="padding-left: 25px;">\t\t\t<button class="u-pointer-auto u-marg-b-xxs c-button--expand {{currentIndex==3?\'is-active\':\'\'}} js-home-video-btn">\t\t\t\t<svg  class="c-button--expand__left-block" viewbox="0 0 24 24">\t\t\t\t\t<circle cx="12" cy="12" r="12" />\t\t\t\t</svg>\t\t\t\t<span class="c-button--expand__center-block"></span>\t\t\t\t<svg  class="c-button--expand__right-block" viewbox="0 0 24 24">\t\t\t\t\t<circle cx="12" cy="12" r="12" />\t\t\t\t</svg>\t\t\t\t<span class="c-button--expand__text">Discover video</span>\t\t\t</button>\t\t\t\t\t\t<br/>\t\t\t<a href="/solution" class="u-pointer-auto c-link u-inline-block c-button--expand2 {{currentIndex==3?\'is-active\':\'\'}}">\t\t\t\t<svg  class="c-button--expand2__left-block" viewbox="0 0 24 24">\t\t\t\t\t<circle  cx="12" cy="12" r="12" />\t\t\t\t</svg>\t\t\t\t<span class="c-button--expand2__center-block"></span>\t\t\t\t<svg  class="c-button--expand2__right-block" viewbox="0 0 24 24">\t\t\t\t\t<circle  cx="12" cy="12" r="12" />\t\t\t\t</svg>\t\t\t\t<span class="c-button--expand2__text">Our solution</span>\t\t\t</a>\t\t</div>\t</div>\t<div class="u-align-center u-pointer-auto u-absolute u-block u-force-inline  c-home__video-btn u-hide@sm"\t\tstyle="left: {{width*0.5 + initCircleRadius*1.5}}px; top: 50%; transform: translate(-50%,-50%) translateZ(0)">\t\t<button class="c-button--expand u-marg-b-xxs {{currentIndex==3?\'is-active\':\'\'}} js-home-video-btn">\t\t\t<svg  class="c-button--expand__left-block" viewbox="0 0 24 24">\t\t\t\t<circle cx="12" cy="12" r="12" />\t\t\t</svg>\t\t\t<span class="c-button--expand__center-block"></span>\t\t\t<svg  class="c-button--expand__right-block" viewbox="0 0 24 24">\t\t\t\t<circle cx="12" cy="12" r="12" />\t\t\t</svg>\t\t\t<span class="c-button--expand__text">Discover video</span>\t\t</button>\t\t<br/>\t\t<a href="/solution" class="c-link u-inline-block c-button--expand2 {{currentIndex==3?\'is-active\':\'\'}}">\t\t\t<svg  class="c-button--expand2__left-block" viewbox="0 0 24 24">\t\t\t\t<circle  cx="12" cy="12" r="12" />\t\t\t</svg>\t\t\t<span class="c-button--expand2__center-block"></span>\t\t\t<svg  class="c-button--expand2__right-block" viewbox="0 0 24 24">\t\t\t\t<circle  cx="12" cy="12" r="12" />\t\t\t</svg>\t\t\t<span class="c-button--expand2__text">Our solution</span>\t\t</a>\t</div></div><div id="number" class="u-viewport-fit u-absolute  u-pos-tl o-wrapper--valign u-pointer-none | u-align-right@sm o-wrapper--valign-bottom@sm u-pad-r-vw1of12@sm u-pad-b-md@sm" style="height:{{winHeight}}px;">\t<div class="u-relative u-inline-block u-valign-middle u-pad-l-vw1of24 u-color--grey u-vacuum u-align-center | u-valign-bottom@sm ">\t\t<div class="u-relative u-inline-block u-fit-w">\t\t\t<span class="c-counter__number c-text--md {{currentIndex==1?\'is-active\':\'\'}}">1</span>\t\t\t<span class="c-counter__number c-text--md u-pos-tl u-absolute {{currentIndex==2?\'is-active\':\'\'}}">2</span>\t\t\t<span class="c-counter__number c-text--md u-pos-tl u-absolute {{currentIndex==3?\'is-active\':\'\'}}">3</span>\t\t</div>\t\t<div class="c-counter__sepa u-block u-bg--grey u-marg-y-xxs {{currentIndex>0?\'is-active\':\'\'}}"></div>\t\t<div class="u-inline-block u-fit-w c-text--md c-counter__total {{currentIndex>0?\'is-active\':\'\'}}">3</div>\t</div></div><div class="u-fixed u-pos-br u-marg-r-vw1of24 c-scroll-btn u-force-inline {{!isLoading && !isMenuActive && ((isMobile && currentIndex<=0) || !isMobile) ?\'is-active\':\'\'}}" \tstyle="z-index: 10000">\t<span class="u-valign-middle u-inline-block c-scroll-btn__line">\t\t<span class="c-scroll-btn__progress" style="transform: scaleX({{circle1Progress}}) translateZ(0)"></span>\t</span>\t<span class="u-valign-middle u-inline-block c-text--sm u-color--brand c-anim--slide-x c-anim--2">scroll</span></div><div class="u-pointer-none u-fixed u-pos-tl u-viewport-fit u-flex u-align-center u-align-items-center u-justify-center c-overlay {{isLoading?\'is-active\':\'\'}}"\tstyle="transform: scale({{1 - 0.4 * loaderProgress}}) translateZ(0); height:{{winHeight}}px;">\t<svg width="170" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 543.4 164.1" xml:space="preserve">\t\t<g fill="#fff">\t\t\t<path d="M70.2,126.2c-3.9-1.9-7.9-3.8-11.8-5.6c0.6-0.8,0.4-1.7-0.4-2.1c-2.7-1.6-5.6-3-8.3-4.8 c-1.5-0.9-0.9-4.2-4-3.5c-0.4-0.1-0.8-0.3-1.2-0.4c-0.2,0-0.3,0-0.5,0.1c-0.2-0.1-0.4-0.1-0.5-0.2c-0.1,0-0.3,0-0.4,0 c-0.8-1.2-1.6-2.4-2.3-3.6c-0.1-1-0.1-1.9-0.2-2.9c1.8,1.2,3.7,2.4,5.5,3.6c0.1,0.5,0.1,1.7,0.8,1.1c1.2-1.1,2.5-2.6,2.6-4.1 c0.3-2.1-1.7-0.2-2.5-0.8c-3-2.4-6-4.7-8.9-7.1c-0.1-0.1-0.2-0.3-0.3-0.4c-0.6-0.8-1.2-1.6-1.9-2.4c0.8-0.8,0.1-0.9-0.5-1.1 c-0.5-0.7-0.9-1.3-1.4-2c-0.1-0.4-0.2-0.8-0.3-1.2c-0.2-0.8-0.5-1.5-0.7-2.3l0,0c-0.3-1-0.8-2-1-3c-0.7-3.8-3.1-7.7,0-11.5l0,0 c-0.3-1.7,2-1,2.3-2.5c0.4-1.9,0.3-3.9,0.6-5.7c0.4-2.5,3-4.6,3.7-7.4c0.2-0.6,0.9-1.1,1.4-1.7c0.1,0.5,0.2,1.1,0.3,1.6l0,0 c0,0.3,0,0.5,0,0.8c-0.6,0.5-1.3,1-0.9,2c0,0.2,0,0.3,0,0.5c-1.7,1.4-0.2,3.5-1.3,5c0,0,0.4,0.5,0.6,0.4c0.2,0,0.6-0.3,0.7-0.5 c0.4-1,0.7-2.1,1-3.1c0.2-0.4,0.5-0.9,0.7-1.3c0.5-1,1-2,1.6-2.9l0,0c1.7-3.6,4.4-6.1,8-7.6c2-1.3,3.9-3,6.6-2c3-0.1,6-0.1,9-0.3 c0.7,0,1.4-0.5,2.1-0.7c-0.2-0.3-0.2-0.8-0.5-1c-2-1.3-3.8-2.9-6.2-3c-6.9-0.2-13.4-2.7-17.9-7.9c-6.2-7.3-12.1-7.7-18-3.7 C15.4,37.9,7.6,47,3.4,59.3c-5.2,15.1-5.1,29.6,2.8,43.8c4.6,8.3,12,13.2,19.9,17.7c0.7,0.3,1.4,0.6,2.1,0.9v0 c0.2,0.1,0.4,0.2,0.5,0.4c1,1.1,2.4,1.1,3.7,1.2c1,0.4,2,0.7,3,1.1c1.1,0.7,2.2,0.8,3.4,0.4c0.6,0.2,1,0.3,1.6,0.5 c2.6,3.7,6.5,2.3,9.9,2.8c3.7,0.3,7.4,0.7,11.1,0.9c3.2,0.1,6.5,0,9.7-0.1C69.8,128.2,68.5,127.7,70.2,126.2z M30.8,83.2 c0.1,0.5,0.1,1.3,0.4,2C31,84.5,31,83.6,30.8,83.2c-0.7-2.9-1.3-5.8-1.2-8.7C29.5,77.3,30.1,80.3,30.8,83.2z M41.9,53.3 c-0.8,0.5-0.4,1.6-0.8,2.4C41.5,54.9,41.1,53.8,41.9,53.3c0.4-0.2,0.8-0.3,1.2-0.4c-0.1,0-0.2-0.1-0.3-0.1c0.1,0,0.2,0.1,0.3,0.1 C42.7,53,42.3,53.1,41.9,53.3z M41.6,52.3c-0.1,0-0.3,0-0.3,0c-0.5,0.3-1.1,0.7-1.6,1c0.5-0.3,1.1-0.7,1.6-1 C41.3,52.3,41.4,52.3,41.6,52.3z"/>\t\t\t<path d="M92.2,24c-0.6-0.7-1.4-1.4-0.8-2.5c-0.6-0.4-1.2-0.8-1.8-1.2c-2.4-3.8-6-6-9.9-7.9c-0.6-0.4-1.3-0.7-1.9-1.1 c-0.2-0.1-0.5-0.3-0.7-0.4c-5-3.5-9.9-7.1-15-10.6c-1.7-1.2-6.9,1.6-7.1,3.6c-0.3,4.2,10.4,14.9,15.8,15.9c0,0,0,0,0,0 c0.5,1.4,3,2.7,3.9,2l0,0c0.2,0.1,0.3,0.1,0.5,0.2c1.4-0.1,1.4,2.7,3.3,1.6c1.2,0.7,2.5,1.4,3.7,2.1c0.9,0.1,1.8,0.1,2.6-0.1 c-0.1-1.2,0.5-1.5,2.6,0.1c0.2,0.1,0.7,0.1,0.7,0.1c0.8-3.2,2.3,0.2,3.4-0.4c0.2-0.2,0.8-0.2,0.8-0.3 C92.5,24.7,92.4,24.3,92.2,24z"/>\t\t\t<path d="M43.2,24.8c3.1,1.2,6.7,1.9,9.1,3.9c3.5,2.8,7.3,4.9,11.2,6.9c0,0,0,0,0-0.1c0,0,0,0,0,0.1 c1.3,0.7,2.6,1.4,4,0.3c-0.7-0.7-1.4-1.4-2.3-1.8c0.8,0.4,1.6,1.1,2.3,1.8c1.1,0.4,2.2,0.9,3.2,1.3c0.1,0,0.2,0,0.3,0 c0.6,0.1,1.2-0.1,1.8-0.3c0.1-0.1,0.3-0.2,0.5-0.4c1.4-0.8,0.8-1.9,0.4-3.3c-1.6-6.7-7.6-7.9-12.4-10.8c-3.5-2.1-8.5-2.8-9.8-7.8 c-0.4-0.4-0.8-0.8-1.2-1.1c-1-1.2-2.2-1.8-3.7-1.1c-0.3,0-0.6,0.1-0.9,0.1c-0.2,0-0.4,0-0.7-0.1c-2.6,1.6-4.2,3.1-4.6,6.9 C40,22.6,40.4,23.8,43.2,24.8z M70.3,30.4C70.3,30.4,70.3,30.4,70.3,30.4C70.3,30.4,70.3,30.4,70.3,30.4c0-0.1-0.1-0.1-0.1-0.2 C70.2,30.3,70.2,30.3,70.3,30.4z"/>\t\t\t<path d="M80.2,117.1c-2.4,0.8-3.7-3.9-6.3-1c-1.1-4.4-6.1-1.4-8.1-4.4c-0.5-0.8-2.2-0.7-2.4,1.1 c-0.2,2.2,0,4.5,2.8,3.9c2.3-0.5,2.7,4.1,5.3,1.5c0.3-0.1,0.6-0.1,1-0.2c0.7,3.6,3.5,1.6,5.4,1.9c1.2,1.4,2.5,1.1,3.9,0.5l0-0.1 l0.1,0c0-0.2,0.1-0.4,0.1-0.7C81.9,118.5,82.1,116.5,80.2,117.1z"/>\t\t\t<path d="M59.4,112.8c0.4,0.1,0.8,0.3,1.2,0.4c3.2-1.4-0.5-2.6-0.1-3.8c0.9-3.1-1.9-2.2-2.7-2.2 c-1.9-0.1-0.2,1.3-0.4,2C56.8,111,58,112,59.4,112.8z"/>\t\t\t<path d="M72.1,128.2c0.6-0.1,1.2-0.2,1.7-0.2c-0.9-0.7-1.7-1.5-2.6-2.2C70.2,127,70.5,127.8,72.1,128.2z"/>\t\t\t<polygon points="33,72.2 33,72.2 33,72.2"/>\t\t\t<polygon points="33,72.2 33,72.2 32.9,72.1"/>\t\t\t<path d="M34.8,69.2c-0.3-0.7-0.4-1.5-0.6-2c-0.7-2.1-1.3-4.4-1.7-6.6c0.3,2.2,0.9,4.4,1.7,6.6 C34.4,67.7,34.5,68.5,34.8,69.2z"/>\t\t</g>\t\t<g fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="7">\t\t\t<path d="M175.3,37.5l-1.4,0.1c-7.7-2.4-15.6-4.1-23.6-4.1c-28.5,0-39.8,21-39.8,45.6 c0,24.9,13.2,39.5,38.5,39.5c7.2,0,14.4-1.5,21.5-3.3l1.2,0.1"/>\t\t\t<path d="M233.6,38.7c10-3.6,20.7-5.6,30.5-5.6c16.9,0,29.1,4.6,29.1,18.4c0,2-0.2,11.7-0.3,14.3l0,0 c-1,16-1.8,38.2-2.7,56.5"/>\t\t\t<path d="M293.2,57.6c-6.2,19.7-66.7,13.4-66.7,44.5c0,17.3,17.5,19.3,27.3,19.3c6.7,0,13.3-1.1,19.7-3 l1.7,0.2"/>\t\t\t<line x1="202" y1="0.3" x2="196.4" y2="120.6"/>\t\t\t<path d="M324.1,120.6c0-1.2,0-6.1,0.1-7.3c0.3-20.3,2.2-38.7,3.2-46.3c1.4-10.2,4.5-16.7,5.9-19 c0-0.1,0.2-0.3,0.3-0.3c4.7-8.5,12.3-13,21.5-13.7c1.8-0.1,3.7-0.1,5.5,0c2.1,0.2,4.3,0.6,6.5,1.2l1.2,0"/>\t\t\t<polyline points="326.3,76.1 328.4,33.1 328.4,31.5"/>\t\t\t<line x1="386.8" y1="120.6" x2="390.6" y2="31.5"/>\t\t\t<line x1="390.8" y1="11.1" x2="391.3" y2="0.3"/>\t\t\t<path d="M457.5,116.5l-1.8-0.3c-4.7,1.4-9.5,2.4-14.3,2.4c-12.8,0-16.5-7.1-16.5-18.9 c0-15.3,2.1-37,2.8-60.2l1.1-24.5l-0.5-1.4"/>\t\t\t<path d="M423.1,31.5"/>\t\t\t<polyline points="458.4,34.9 457.6,34.7 413.5,34.7 412.7,34.5"/>\t\t\t<path d="M537.2,30.2v1.3c-5,13.8-32.9,72.9-38.3,86.3l-5.4,11.7c-8.9,21.3-16.1,29.7-29.3,29.8 c-0.3,0-0.6,0-1,0c-4.5-0.1-9-1.2-13.2-2.8l-2.2,0.4"/>\t\t\t<polyline points="497.7,120.6 467.7,31.5 467.7,30.8"/>\t\t</g>\t\t<g fill="none" stroke="#fff" stroke-width="7" stroke-dasharray="175" $stroke-dashoffset="{{175 - (175*loaderProgress)}}">\t\t\t<path d="M175.3,37.5l-1.4,0.1c-7.7-2.4-15.6-4.1-23.6-4.1c-28.5,0-39.8,21-39.8,45.6 c0,24.9,13.2,39.5,38.5,39.5c7.2,0,14.4-1.5,21.5-3.3l1.2,0.1"/>\t\t\t<path d="M233.6,38.7c10-3.6,20.7-5.6,30.5-5.6c16.9,0,29.1,4.6,29.1,18.4c0,2-0.2,11.7-0.3,14.3l0,0 c-1,16-1.8,38.2-2.7,56.5"/>\t\t\t<path d="M293.2,57.6c-6.2,19.7-66.7,13.4-66.7,44.5c0,17.3,17.5,19.3,27.3,19.3c6.7,0,13.3-1.1,19.7-3 l1.7,0.2"/>\t\t\t<line x1="202" y1="0.3" x2="196.4" y2="120.6"/>\t\t\t<path d="M324.1,120.6c0-1.2,0-6.1,0.1-7.3c0.3-20.3,2.2-38.7,3.2-46.3c1.4-10.2,4.5-16.7,5.9-19 c0-0.1,0.2-0.3,0.3-0.3c4.7-8.5,12.3-13,21.5-13.7c1.8-0.1,3.7-0.1,5.5,0c2.1,0.2,4.3,0.6,6.5,1.2l1.2,0"/>\t\t\t<polyline points="326.3,76.1 328.4,33.1 328.4,31.5"/>\t\t\t<line x1="386.8" y1="120.6" x2="390.6" y2="31.5"/>\t\t\t<line x1="390.8" y1="11.1" x2="391.3" y2="0.3"/>\t\t\t<path d="M457.5,116.5l-1.8-0.3c-4.7,1.4-9.5,2.4-14.3,2.4c-12.8,0-16.5-7.1-16.5-18.9 c0-15.3,2.1-37,2.8-60.2l1.1-24.5l-0.5-1.4"/>\t\t\t<path d="M423.1,31.5"/>\t\t\t<polyline points="458.4,34.9 457.6,34.7 413.5,34.7 412.7,34.5"/>\t\t\t<path d="M537.2,30.2v1.3c-5,13.8-32.9,72.9-38.3,86.3l-5.4,11.7c-8.9,21.3-16.1,29.7-29.3,29.8 c-0.3,0-0.6,0-1,0c-4.5-0.1-9-1.2-13.2-2.8l-2.2,0.4"/>\t\t\t<polyline points="497.7,120.6 467.7,31.5 467.7,30.8"/>\t\t</g>\t\t\t</svg></div><div class=" u-viewport-fit u-align-center u-absolute u-pos-tl  c-skew-mask u-overflow-h {{showVideo && !isLoading?\'is-active\':\'u-pointer-none is-prev\'}}"\tstyle="z-index:10000">\t<div class="u-overflow-h u-absolute u-pos-tl u-fit c-skew-mask__inner o-wrapper--valign u-overflow-h js-video-mask-out"\t\t\tstyle="transform: translateY({{outterPosition}}px) scale({{outterScale}}) rotate({{outterRotation}}deg)  translateZ(0)"> \t\t\t\t<div class="u-overflow-h  u-bg--white u-absolute u-pos-tl u-fit c-skew-mask__inner__inner o-wrapper--valign js-video-mask-in"\t\t\t style="transform: scale({{innerScale}}) rotate({{innerRotation}}deg) translateY({{innerPosition}}px) translateZ(0)">\t\t\t\t\t\t<div class="u-bg--brand u-relative u-inline-block u-vw10of12 u-valign-middle" style="padding-top: 47%; background-color: #000;">\t\t\t\t<core-video active="{{forcePlayVideo}}" autoplay="false" controls="true" loop="false"\t\t\t\t\t\t\tsrc="' + siteValues["solution"]["section_4_video"] + '"\t\t\t\t\t\t\tposter="' + siteValues["solution"]["section_4_image_for_video"] + '"\t\t\t\t\t\t\tclass="u-absolute u-pos-tl u-fit u-block c-anim--fade-in c-anim--8">\t\t\t\t</core-video>\t\t\t</div>\t\t</div>\t</div>\t<button class="u-absolute u-pos-tr u-inline-block c-button u-marg-r-vw1of24 u-marg-t-md c-anim c-anim--fade-in" on-click="_closeVideo" style="top:2px; right:2px;">\t\t<svg height="18" width="18" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 57.599998 57.599998" xml:space="preserve">\t\t   <g transform="translate(-21.2,-21.2)">\t\t      <path fill="#0093e5" d="m 21.2,73.8 5,5 L 50,55 l 23.8,23.8 5,-5 L 55,50 78.8,26.2 73.8,21.2 50,45 26.2,21.2 l -5,5 L 45,50 Z"/>\t\t    </g>\t\t</svg>\t</button></div>\x3c!-- <div class="u-absolute u-pos-tl u-force-inline {{currentIndex == 0 ? \'is-active\' : \'is-next\'}} | u-hide@sm"\tstyle="transform: translate({{cityScreenPos[0]}}px, {{cityScreenPos[1]}}px) translateZ(0);">\t<div class="u-absolute u-pos-tl" style="transform: translate(-100%, -100%)">\t\t<h1 class="c-h4 u-color--grey c-anim--slide-y c-anim--{{currentIndex==0?8:0}}">\t\t\tTransform your city\t\t</h1>\t\t<h2 class="c-h2 u-color--dark-grey c-anim--slide-y c-anim--{{currentIndex==0?9:0}}" style="line-height: 1">\t\t\tNew York\t\t</h2>\t</div></div><div class="u-absolute u-pos-tl u-force-inline {{currentIndex == 0 ? \'is-active\' : \'is-next\'}}"\tstyle="transform: translate({{cityScreenStartPos[0]}}px, {{cityScreenStartPos[1]}}px) translateZ(0);">\t<div class="u-absolute u-pos-tl u-bg--brand c-anim--fade-in" style="width: 6px; height: 6px; top:-3px;left:-3px;border-radius: 6px;"></div></div> --\x3e<div class="u-absolute u-pos-tl u-force-inline {{currentIndex == 0 ? \'is-active\' : \'is-next\'}} | u-hide@sm"\tstyle="transform: translate({{handlerPos[0]}}px, {{handlerPos[1]}}px) translateZ(0); opacity: {{handlerAlpha}}">\t<svg width="24" height="24" class="u-absolute u-pos-tl" style="transform: translate(-50%, -50%)">\t\t<circle fill="#fff"  cx="12" cy="12" r="8" />\t\t<circle stroke="#000" fill="none" opacity="0.3" cx="12" cy="12" r="8" />\t\t<circle fill="#0093e5" cx="12" cy="12" r="2.5" />\t</svg></div>'
}, function(t, e) {
    t.exports = '<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-marg-b-xl u-vacuum u-pad-t-xl">\t<h4 class="c-h3 u-color--brand u-marg-l-vw4of12 u-align-left u-marg-b-lg | u-marg-l-vw1of12@sm u-marg-t-lg@sm">Privacy Policy</h4>\t<img class="u-vw11of12 u-inline-block | u-vw12of12@sm u-marg-b-md" src="/wp-content/themes/clarity/assets/uploads/policies/hero.jpg" alt="" />\t\t<div class="u-inline-block u-vw8of12 u-align-left  | u-vw10of12@sm u-marg-l-vw1of123@sm">\t\t\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tThis Privacy Policy (“Policy”) describes how Clarity Movement Co. and its affiliates (“Clarity” or “we” or “our”) treat information collected or provided in connection with an end user’s (“you” or “your” or “user”) use of the Clarity website (the “Site”) and all services provided by Clarity in connection with the Site (such services together with the Site, the “Services”) including without limitation our environmental air monitoring services and technologies.  Please note that your use of the Services constitutes your acceptance of this Policy as set forth below:\t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">1</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Effective Date Changes</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tThis Policy applies to all information collected by or provided to us in connection with the Services.  When we make any material changes to this Policy, we will change the Effective Date above and will inform you by e-mail sent to the address associated with your Services account and/or through the Services the next time you login.  We will treat your continued use of the Services following such notice as your acceptance of the changes.   \t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">2</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Third Parties</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tThe Services may contain, and we may send to registered users, offers from third parties or links to third-party websites.  This Policy does not apply to information that you may provide to or that may be collected by third parties.  We encourage you to request that such third parties provide you with their applicable privacy policies and other terms and conditions before engaging with or making a purchase from such third parties. \t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">3</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Collected Information</h3>\t\t<h5 class="u-marg-l-vw2of12 c-text--sm u-color--dark-grey | u-marg-l-0@sm">Information You Submit</h5>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tWhen you log-in to or create an account with the Services, we collect the information you provide.  This information may include personally identifiable information such as your mailing address, e-mail address and password.  When we refer to “personally identifiable information” in this Policy, we mean information that we can directly associate with a specific person or entity without additional information.  To the extent you decline to share certain personally identifiable information with us, we may not be able to provide some or all of the features and functionalities found on the Services.\t\t</p>\t\t<h5 class="u-marg-l-vw2of12 c-text--sm u-color--dark-grey | u-marg-l-0@sm">Information Collected Automatically</h5>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tWhen you use the Services, we automatically gather certain non-personally identifiable information from you.  This includes usage information, such as information on when, how often and for how long you use the Services and the content you submit and view.  This also includes server log data such as the IP address, operating system, or the webpage you were visiting before you came to our Site.  As described below, we collect this information through a number of means, including server logs, cookies and other online tracking mechanisms.  We may associate such non-personally identifiable information with the personally identifiable information that you provide in connection with the Services.\t\t</p>\t\t<h5 class="u-marg-l-vw2of12 c-text--sm u-color--dark-grey | u-marg-l-0@sm">Analytics Sites</h5>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tWe use certain third-party services to assist us in analysis, auditing, research, and reporting regarding the Services.  These third parties may use web logs or web beacons, and they may set and access cookies on your computer or other device.  In particular, we use Google Analytics to help collect and analyze certain information for the purposes discussed in this Policy.  For information about the privacy practices of Google Analytics, you can visit http://www.google.com/policies/privacy/partners/.  You can learn how to opt out of the use of cookies by Google Analytics at https://tools.google.com/dlpage/gaoptout.\t\t</p>\t\t<h5 class="u-marg-l-vw2of12 c-text--sm u-color--dark-grey | u-marg-l-0@sm">Transactions</h5>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tIf you participate in a transaction through the Services, such as making a payment through the Services for a product or setting up a recurring payment for our subscription services, our third-party payment processor will receive your payment information for purposes of processing such transaction and Clarity will receive such payment after any applicable fees have been deducted in accordance with Clarity’s agreement with such third party payment processor.  Note that Clarity does not receive your credit card or bank information.  \t\t</p>\t\t\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">4</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Use of Information</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tWe use the personally identifiable and non-personally identifiable information that we collect about you as follows:\t\t</p>\t\t<ul class="u-marg-l-vw2of12 o-list--none c-text--sm u-color--grey | u-marg-l-0@sm">\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We will use submitted information for the purposes for which you provided the information, including, for example, to create and maintain a Services account for you or respond to a question that you e-mail to us or submit through our customer service chat functionality.  We also use submitted information and collected information as necessary to provide the features and functionality of the Services to you.\t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We may send you e-mails regarding updates or modifications to the Services.\t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We may analyze collected information relating to your use of the Services in order to help us improve the Services and develop and improve other products and services.  \t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We may use submitted information and collected information to help troubleshoot problems, provide you with required notices, enforce our Terms and Conditions of Service or to alert you to changes in our policies or agreements that may affect your use of the Services.\t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We may combine personally identifiable information collected through the Services with other information that we collect about you in other contexts—such as our communications with you via e-mail, phone or postal mail.  We will handle such combined information in accordance with this Policy.\t\t\t</li>\t\t</ul>\t\t\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">5</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Disclosure of Information</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tWe disclose the personally identifiable and non-personally identifiable information that we collect about you as follows: \t\t</p>\t\t\t<ul class="u-marg-l-vw2of12 o-list--none c-text--sm u-color--grey | u-marg-l-0@sm">\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We may provide advertisers and other third parties with aggregated, non-personally identifiable information about our user base and its usage patterns. \t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We may disclose personally identifiable information to third-party partners, including (without limitation) organizations and institutions with which you indicate an affiliation, in furtherance of our business arrangements with them, including without limitation to jointly offer a product or service to you or create interoperability between our products and services and the products and services of such partners. \t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— Clarity uses contractors and third-party service providers to provide the Services to our users and to help us provide services in connection with the Services.  For example, we use third parties for email marketing and product fulfillment.  Such third parties may receive information from us for use for such purposes.\t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We may report aggregated, de-identified data relating to activity on the Services to third parties or the general public. We may combine such data with data obtained from third-party sources in order to generate such reports. \t\t\t</li>\t\t\t<li class="u-marg-b-sm">\t\t\t\t— We will use and disclose information where we, in good faith, believe that the law or legal process (such as a court order, search warrant or subpoena) requires us to do so; to investigate, prevent, or take action regarding illegal activities, suspected fraud, or violations of our terms and conditions; or in other circumstances where we believe is necessary to protect the rights or property of Clarity, our users, and third parties.\t\t\t</li>\t\t</ul>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">6</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Viewing and Amending Information</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tYou can contact Clarity to amend or delete your user account information at any time.  Please note that while changes or deletions to your account information are reflected promptly in active user databases, our servers may retain previously provided information.  Note that changes to, or deletion of, your Services account user information does not affect any other information collected by Clarity, which Clarity may retain and continue to use or disclose in accordance with this Policy. \t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">7</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Online Behavioral Advertising</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tWe may engage third party online advertising technology service providers to help us deliver advertisements to you on websites you visit after using the Services. This is a common practice known as “re-targeting.” For information about these practices, visit the Network Advertising Initiative website at <a href="http://www.networkadvertising.org/understanding-online-advertising" class="c-link u-color--dark-grey" target="_blank">http://www.networkadvertising.org/understanding-online-advertising</a> or the Digital Advertising Alliance website at <a href="http://www.aboutads.info/" class="c-link u-color--dark-grey" target="_blank">http://www.aboutads.info/</a>. You may remove yourself from targeted advertising of companies within the Network Advertising Initiative by opting out at <a href="http://www.networkadvertising.org/choices/" class="c-link u-color--dark-grey" target="_blank">http://www.networkadvertising.org/choices/</a>, or of companies participating in the Digital Advertising Alliance program by opting out at <a href="http://www.aboutads.info/choices" class="c-link u-color--dark-grey" target="_blank">http://www.aboutads.info/choices</a>. Like many websites, the Services does not currently respond to “do not track” browser headers, but you can limit tracking through these third-party programs by taking the steps discussed above.\t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">8</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Security</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tThe personally identifiable information we collect about you is stored in limited access servers. We will maintain reasonable safeguards to protect the security of these servers and your personally identifiable information.  However, no security measures are 100% effective and we cannot guarantee the security of your personally identifiable information.\t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">9</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Transfer As Corporate Asset</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tIn the event of a merger, sale of capital stock or assets, reorganization, consolidation or similar transaction involving Clarity, the information we possess (including personally identifiable information) shall be transferred as a corporate asset to the acquiring entity, provided that such entity will continue to handle such information in accordance with this Policy.    \t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">10</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Transfer to the U.S. or other Countries</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tClarity is established in and uses facilities in the United States.  Your information will be stored and processed in the United States or other countries where Clarity has facilities.  By using the Services, you consent to the transfer of information outside of your country, even if your country has more rigorous data protection standards.\t\t</p>\t\t<h2 class="c-hgiga u-color--light-grey | u-marg-b-md@sm u-marg-t-lg@sm u-relative@sm u-offset-t-sm@sm">11</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md">Children Under 13</h3>\t\t<p class="u-marg-l-vw2of12 c-text--sm u-color--grey u-marg-b-md | u-marg-l-0@sm">\t\t\tClarity does not knowingly collect information from children under 13 and the Services are intended for adults over the age of 18.  If you are a parent and believe that your child under the age of 13 has used the Services and provided personally identifiable information to us through the Services, please contact us at contact@clarity.io and we will work to delete that Services account and any such personally identifiable information. \t\t</p>\t</div></scroll-object>\x3c!-- fOOTER --\x3e<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-pad-b-lg u-bg--almost-white u-pad-x-vw1of12">\t<app-footer class="u-block"></app-footer></scroll-object>'
}, function(t, e) {
    t.exports = '<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-marg-b-xl | u-marg-b-lg@sm">\t<scroll-object class="u-relative u-block u-pad-x-vw1of12@sm">\t\t<div class="u-relative">\t\t\t<h3 class="c-h4 u-color--brand u-marg-t-md u-absolute u-pos-tl u-fit-w c-anim--slide-y c-anim--0 | u-marg-b-xs@sm u-relative@sm" style="z-index: 2;">\t\t\t\t' + siteValues["solution"]["hero_title"] + '\t\t\t</h3>\t\t\t<img class="u-w6of12 u-inline-block c-anim--scale-down c-anim--1 | u-fit-w@sm" \t\t\t\tsrc="' + siteValues["solution"]["hero_image"] + '" alt="" />\t\t</div>\t\t<h2 class="c-h1 u-color--brand u-marg-b-lg c-anim--slide-y c-anim--4 | u-marg-b-0@sm">' + siteValues["solution"]["product_name"] + '</h2>\t</scroll-object>\t<hr class="u-vw2of12 u-vw7of10@sm u-marg-b-lg u-marg-y-lg@sm" style="opacity: 0.1">\t<scroll-object class="u-relative u-block">\t\t<h3 class="c-h5 u-marg-b-md c-anim--slide-y">How It Works</h3>\t\t<p class="u-inline-block c-text--md u-color--grey u-marg-b-xl u-vw7of12 | u-vw10of12@sm u-marg-b-0@sm">\t\t\t<app-multiline delay="0.1" class="u-block u-relative">\t\t\t\t' + siteValues["solution"]["how_it_works"] + '\t\t\t</app-multiline>\t\t</p>\t</scroll-object></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center  u-marg-b-xl | u-align-left@sm u-marg-b-lg@sm u-pad-t-lg@sm">\t<scroll-object class="u-inline-block u-relative u-w4of12 u-valign-middle u-align-left u-marg-r-w1of12 | u-marg-r-0@sm u-vw10of12@sm u-marg-l-vw1of12@sm">\t\t<h2 class="c-h2 u-color--light-grey u-marg-b-sm c-anim--slide-y c-anim--1">01</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-sm c-anim--slide-y c-anim--2 | u-marg-b-md@sm">' + siteValues["solution"]["section_1_title"] + '</h3>\t\t<img class="u-hide u-fit-w c-anim--slide-y c-anim--3 | u-block@sm u-marg-b-md@sm" \t\t\t\tsrc="' + siteValues["solution"]["section_1_mobile_image_for_video"] + '" alt=""/>\t\t<p class="c-text--md u-color--grey u-marg-b-md">\t\t\t<app-multiline delay="0.3" class="u-block u-relative">\t\t\t\t' + siteValues["solution"]["section_1_description"] + '\t\t\t</app-multiline>\t\t</p>\t\t<p class="c-text--xs u-color--brand u-uppercase u-marg-b-xxs c-anim--slide-y c-anim--6">' + siteValues["solution"]["section_1_option_title"] + '</p>\t\t<ul class="o-list--inline u-color--grey u-uppercase">\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--7">' + siteValues["solution"]["section_1_option_1"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--8">' + siteValues["solution"]["section_1_option_2"] + '</li>\t\t</ul>\t</scroll-object>\t<scroll-object class="u-inline-block u-relative u-w5of12 u-valign-middle u-relative | u-vw12of12@sm | u-hide@sm">\t\t<img class="u-fit-w c-anim--slide-y c-anim--0" src="' + siteValues["solution"]["section_1_image"] + '" alt=""/>\t\t<core-video autoplay="true" controls="false" loop="true"\t\t\t\t\tsrc="' + siteValues["solution"]["section_1_video"] + '"\t\t\t\t\tposter="' + siteValues["solution"]["section_1_image"] + '"\t\t\t\t\tclass="u-block u-fit u-absolute u-pos-tl | u-hide@sm"></core-video>\t</scroll-object></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center  u-marg-b-xl  | u-align-left@sm">\t<scroll-object class="u-inline-block u-relative u-w5of12 u-valign-middle u-marg-r-w3of24  | u-hide@sm">\t\t<img class="u-fit-w c-anim--slide-y c-anim--0" src="' + siteValues["solution"]["section_2_image_for_video"] + '" />\t\t<core-video autoplay="true" controls="false" loop="true"\t\t\t\t\tsrc="' + siteValues["solution"]["section_2_video"] + '"\t\t\t\t\tposter="' + siteValues["solution"]["section_2_image_for_video"] + '"\t\t\t\t\tclass="u-block u-fit u-absolute u-pos-tl | u-hide@sm"></core-video>\t</scroll-object>\t<scroll-object class="u-relative u-inline-block u-w9of24 u-valign-middle u-align-left | u-marg-r-0@sm u-vw10of12@sm u-marg-l-vw1of12@sm">\t\t<h2 class="c-h2 u-color--light-grey u-marg-b-sm c-anim--slide-y c-anim--1">02</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-sm  c-anim--slide-y c-anim--2  | u-marg-b-md@sm">' + siteValues["solution"]["section_2_title"] + '</h3>\t\t<img class="u-hide u-fit-w c-anim--slide-y c-anim--3 | u-block@sm u-marg-b-md@sm" src="' + siteValues["solution"]["section_2_mobile_image_for_video"] + '" alt=""/>\t\t<p class="c-text--md u-color--grey u-marg-b-md">\t\t\t<app-multiline delay="0.3" class="u-block u-relative">\t\t\t\t' + siteValues["solution"]["section_2_description"] + '\t\t\t</app-multiline>\t\t</p>\t\t<p class="c-text--xs u-color--brand u-uppercase u-marg-b-xxs c-anim--slide-y c-anim--6">' + siteValues["solution"]["section_2_option_title"] + '</p>\t\t<ul class="o-list--inline u-color--grey ">\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm  c-anim--slide-y c-anim--7 u-uppercase">' + siteValues["solution"]["section_2_option_1"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm  c-anim--slide-y c-anim--8">' + siteValues["solution"]["section_2_option_2"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm  c-anim--slide-y c-anim--9 u-uppercase">' + siteValues["solution"]["section_2_option_3"] + '</li>\t\t</ul>\t</scroll-object></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-left u-marg-b-xl  | u-align-left@sm">\t<scroll-object class="u-relative u-inline-block u-w4of12 u-valign-middle u-align-left u-marg-l-w1of12  u-marg-r-w3of24  | u-marg-r-0@sm u-vw10of12@sm u-marg-l-vw1of12@sm u-marg-b-md@sm">\t\t<h2 class="c-h2 u-color--light-grey u-marg-b-sm c-anim--slide-y c-anim--1">03</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-md c-anim--slide-y c-anim--3 | u-marg-b-md@sm">' + siteValues["solution"]["section_3_title"] + '</h3>\t\t<img class="u-hide u-fit-w c-anim--slide-y c-anim--3 | u-block@sm u-marg-b-md@sm  js-node-mobile" src="' + siteValues["solution"]["section_3_image_for_video"] + '" alt=""/>\t\t<p class="c-text--md u-color--grey u-marg-b-md">\t\t\t<app-multiline delay="0.3" class="u-block u-relative">\t\t\t\t' + siteValues["solution"]["section_3_description"] + '\t\t\t</app-multiline>\t\t</p>\t\t<p class="c-text--xs u-color--brand u-uppercase u-marg-b-xxs c-anim--slide-y c-anim--6">' + siteValues["solution"]["section_3_option_title"] + '</p>\t\t<ul class="o-list--inline u-color--grey ">\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--7 u-uppercase">' + siteValues["solution"]["section_3_option_1"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--8 u-uppercase">' + siteValues["solution"]["section_3_option_2"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--9">' + siteValues["solution"]["section_3_option_3"] + '</li>\t\t</ul>\t</scroll-object>\t<scroll-object class="u-relative u-inline-block u-w5of12 u-valign-middle | u-hide@sm ">\t\t<img class="u-fit-w" src="' + siteValues["solution"]["section_3_image_for_video"] + '" alt=""/>\t\t<div class="u-absolute u-pos-tl | js-node" style="width: 1px; height: 1px; left: 18%;"></div>\t</scroll-object></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-left  u-marg-b-xl  | u-align-left@sm">\t<div class="u-inline-block u-w5of12 u-valign-middle u-marg-r-w2of24  | u-hide@sm js-sphere">\t\t<img class="u-fit-w c-solution__smart" src="' + siteValues["solution"]["section_4_image_for_video"] + '" alt="" />\t\t</div>\t<scroll-object class="u-inline-block u-relative u-w4of12 u-valign-middle u-align-left  | u-marg-r-0@sm u-vw10of12@sm u-marg-l-vw1of12@sm">\t\t<h2 class="c-h2 u-color--light-grey u-marg-b-sm c-anim--slide-y c-anim--1">04</h2>\t\t<h3 class="c-h4 u-color--brand u-marg-b-sm  c-anim--slide-y c-anim--3  | u-marg-b-md@sm">' + siteValues["solution"]["section_4_title"] + '</h3>\t\t<img class="u-fit-w h-hide u-block@sm u-hide | u-block@sm u-marg-b-md@sm  js-sphere-mobile" src="' + siteValues["solution"]["section_4_mobile_image_for_video"] + '" alt="" />\t\t\t<p class="c-text--md u-color--grey u-marg-b-md">\t\t\t<app-multiline delay="0.3" class="u-block u-relative">\t\t\t' + siteValues["solution"]["section_4_description"] + '\t\t\t</app-multiline>\t\t</p>\t\t<p class="c-text--xs u-color--brand u-uppercase u-marg-b-xxs c-anim--slide-y c-anim--6">' + siteValues["solution"]["section_4_option_title"] + '</p>\t\t<ul class="o-list--inline u-color--grey u-uppercase">\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--7">' + siteValues["solution"]["section_4_option_1"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--8">' + siteValues["solution"]["section_4_option_2"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--9">' + siteValues["solution"]["section_4_option_3"] + '</li>\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--10">' + siteValues["solution"]["section_4_option_4"] + '</li>\t\t</ul>\t</scroll-object></scroll-object> <scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-right u-marg-b-xl | u-align-left@sm">\t<scroll-object class="u-relative u-inline-block u-w4of12 u-valign-middle u-align-left u-marg-r-w1of24  |  u-vw12of12@sm u-marg-l-0@sm u-marg-b-md@sm">\t\t<div class="u-pad-x-vw1of12@sm">\t\t\t<h2 class="c-h2 u-color--light-grey u-marg-b-sm c-anim--slide-y c-anim--1">05</h2>\t\t\t<h3 class="c-h4 u-color--brand u-marg-b-sm  c-anim--slide-y c-anim--3  | u-marg-b-0@sm">'+ siteValues["solution"]["section_5_title"] +'</h3>\t\t</div>\t\t<img class="u-fit-w h-hide u-hide | u-block@sm u-marg-b-md@sm" src="' + siteValues["solution"]["section_5_gmap_image"] + '" alt="" />\t\t\t<div class="u-pad-x-vw1of12@sm">\t\t\t<p class="c-text--md u-color--grey u-marg-b-md">\t\t\t\t<app-multiline delay="0.3" class="u-block u-relative">\t\t\t\t\t'+ siteValues["solution"]["section_5_description"] +'\t\t\t\t</app-multiline>\t\t\t</p>\t\t\t<p class="c-text--xs u-color--brand u-uppercase u-marg-b-xxs c-anim--slide-y c-anim--6">' + siteValues["solution"]["section_5_option_title"] + '</p>\t\t\t<ul class="o-list--inline u-color--grey u-uppercase">\t\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--7">' + siteValues["solution"]["section_5_option_1"] + '</li>\t\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--8">' + siteValues["solution"]["section_5_option_2"] + '</li>\t\t\t\t<li class="o-list__item c-text--xs u-marg-r-sm c-anim--slide-y c-anim--9">' + siteValues["solution"]["section_5_option_3"] + '</li>\t\t\t</ul>\t\t</div>\t</scroll-object>\t<scroll-object class="u-relative u-inline-block u-w13of24 u-valign-middle | u-hide@sm">\t\t<div class="u-relative  c-anim--slide-y c-anim--0">\t\t\t<img class="u-fit-w" src="' + siteValues["solution"]["section_5_image_for_video"] + '" alt=""/>\t\t\t<div class="c-gmap-ui u-overflow-h">\t\t\t\t<core-video autoplay="true" controls="false" loop="true"\t\t\t\t\t\t\tsrc="' + siteValues["solution"]["section_5_video"] + '"\t\t\t\t\t\t   class="u-block u-fit u-absolute u-pos-tl"></core-video>\t\t\t\t<img src="' + siteValues["solution"]["section_5_gmap_image"] + '" class="u-block u-fit u-absolute u-pos-tl" />\t\t\t</div>\t\t</div>\t</scroll-object></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-marg-b-xl">\t<div class="c-zoom u-inline-block u-w10of12 | u-vw12of12@sm" style="background-color: #000;">\t\t<core-video autoplay="false" controls="true" loop="false"\t\t\t\t\tsrc="' + siteValues["solution"]["section_6_video"] + '"\t\t\t\t\tposter="/wp-content/uploads/2018/05/poster.jpg"\t\t\t\t\tclass="u-block u-fitc-zoom__content"></core-video>\t</div></scroll-object><scroll-object  position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-marg-b-xl u-vw10of12@sm u-marg-l-vw1of12@sm">\t<h2 class="c-h1 u-marg-b-lg u-color--brand c-anim--slide-y c-anim--0 u-hide | u-block@sm ">' + siteValues["solution"]["benefits_main_title"] + '</h2>\t<img class="u-inline-block u-w5of12 u-marg-r-w1of12 u-inline-block u-valign-middle  | u-marg-r-0@sm u-fit-w@sm u-marg-b-md@sm" \t\tsrc="' + siteValues["solution"]["benefits_hero_image"] + '" alt=""/>\t<div class="u-inline-block u-w4of12 u-valign-middle u-align-left | u-marg-r-0@sm u-fit-w@sm u-align-center@sm">\t\t<h2 class="c-h2 u-marg-b-md u-color--brand  c-anim--slide-y c-anim--0 | u-hide@sm">' + siteValues["solution"]["benefits_main_title"] + '</h2>\t\t<ul class="o-list--none u-marg-b-md u-inline-block u-align-left u-color--grey">\t\t\t<li class="u-inline-block c-text--sm u-marg-b-xs c-list--check  c-anim--slide-y c-anim--1">' + siteValues["solution"]["benefit_option_1"] + '</li><br/>\t\t\t<li class="u-inline-block c-text--sm u-marg-b-xs c-list--check  c-anim--slide-y c-anim--2">' + siteValues["solution"]["benefit_option_2"] + '</li><br/>\t\t\t<li class="u-inline-block c-text--sm u-marg-b-xs c-list--check  c-anim--slide-y c-anim--3">' + siteValues["solution"]["benefit_option_3"] + '</li><br/>\t\t\t<li class="u-inline-block c-text--sm u-marg-b-xs c-list--check  c-anim--slide-y c-anim--4">' + siteValues["solution"]["benefit_option_4"] + '/li><br/>\t\t\t<li class="u-inline-block c-text--sm u-marg-b-xs c-list--check  c-anim--slide-y c-anim--5">' + siteValues["solution"]["benefit_option_5"] + '</li><br/>\t\t\t<li class="u-inline-block c-text--sm u-marg-b-xs c-list--check  c-anim--slide-y c-anim--6">' + siteValues["solution"]["benefit_option_6"] + '</li><br/>\t\t\t<li class="u-inline-block c-text--sm u-marg-b-xs c-list--check  c-anim--slide-y c-anim--7">' + siteValues["solution"]["benefit_option_7"] + '</li>\t\t</ul><br/>\t\t<div class="c-anim c-anim--slide-y c-anim--8 u-align-center@sm">\t\t\t\t\t<a href="/contact" class="c-button--rounded c-button--primary" onclick="ga(\'send\', \'event\', \'navigation\', \'click\', \'solution page-learn more\')";>Learn more</a>\t\t</div>\t</div></scroll-object><scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-marg-b-xl">\t<h3 class="c-h2 u-color--brand u-w3of12 u-inline-block u-valign-top u-align-left | u-hide@sm">\t\tPartners\t</h3>\t<h3 class="c-h1 u-color--brand u-inline-block u-valign-top u-hide u-marg-b-lg@sm | u-block@sm">\t\tPartners\t</h3>\t<ul class="o-list--inline u-w7of12 u-inline-block u-valign-top u-align-left u-vacuum  | u-marg-r-0@sm u-fit-w@sm u-marg-l-0@sm">\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_1"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_2"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_3"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_4"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_5"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_6"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_7"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_8"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_9"] + '" class="u-fit-w" alt="" />\t\t</li>\t\t<li class="o-list__item u-w1of4 u-marg-b-md | u-w1of2@sm">\t\t\t<img src="' + siteValues["solution"]["partner_logo_10"] + '" class="u-fit-w" alt="" />\t\t</li>\t</ul></scroll-object>\x3c!-- fOOTER --\x3e<scroll-object set-active="false" position="{{[0, scroll * -1]}}"  \t\t\tclass="u-block u-relative u-align-center u-pad-t-xl u-pad-b-lg u-bg--almost-white u-pad-x-vw1of12">\t<app-footer class="u-block"></app-footer></scroll-object><div class="js-scene u-absolute u-pos-tl  u-pointer-none"></div>'
}, function(t, e) {
    t.exports = '\x3c!-- <light-core-state-machine>    <light-core-state state="page" on-state-change="_onPageChange" route="(/)(:page)(/:project)(/)" /></light-core-state-machine> --\x3e<core-route routes="{{routes}}" base="{{baseUrl}}" options="{{routeOptions}}" on-route-change="onRouteChange" class="u-hide"></core-route><template is="light-core-template" if="{{pageDataUrl !== null}}" remove-nodes>\t<core-ajax src="{{pageDataUrl}}" on-success="_onPageDataLoaded" on-error="_onDataError"></core-ajax></template>    <div id="fake-scroll" class="js-fake-scroll {{isMobile?\'u-hide\':\'u-block\'}}"></div><header class="c-header u-pad-x-vw1of24 u-pad-t-md u-flex u-justify-space-between {{!showInterface?\'u-pointer-none\':\'\'}} | u-pad-x-vw1of12@sm | js-header" style="transform: translateY({{headerPosition}}px) translateZ(0)">\t<a href="" class="c-link u-relative ">\t\t<span class="u-inline-block c-logo {{showInterface && !isMenuActive ?\'is-active\':\'\'}}">\t\t\t<img src="' + siteValues["global"]["logo"] + '" alt="" class="u-fit-w c-anim--fade-in c-anim--4" />\t\t</span>\t\t<span class="u-inline-block c-logo u-absolute u-pos-tl {{showInterface && isMenuActive ?\'is-active\':\'\'}}">\t\t\t<img src="' + siteValues["global"]["logo-light"] + '" alt="" class="u-fit-w c-anim--fade-in c-anim--3" />\t\t</span>\t</a>\t<div>\t\t<button class="u-valign-middle u-inline-block c-button {{isMenuActive?\'u-color--white\':\'u-color--grey\'}} {{showInterface?\'is-active\':\'is-prev\'}}"\t\t\t\ton-click="_toggleMenu">\t\t\t<span  class="u-inline-block u-valign-middle c-anim--fade-in c-anim--5"\t\t\t\tstyle="margin-right: 5px;">\t\t\t\tmenu\t\t\t</span>\t\t\t<span class="u-inline-block u-valign-middle u-relative c-anim--scale-up c-anim--6">\t\t\t\t<app-trigger class="u-inline-block js-menu-button">\t\t\t\t\t<div class="u-vacuum js-trigger-parallax" ratio="0.2" >\t\t\t\t\t\t<svg width="24" height="24" class="c-button--menu__dot">\t\t\t\t\t\t\t<circle fill="{{isMenuActive?\'#fff\':\'#0093e5\'}}" cx="12" cy="12" r="3.5" />\t\t\t\t\t\t</svg>\t\t\t\t\t</div>\t\t\t\t\t<div class="u-absolute u-pos-tl" style="top:50%;left:50%; width: 72px; height: 72px; margin-top:-38px;margin-left:-36px;">\t\t\t\t\t\t<div class="js-trigger-parallax" ratio="0.3">\t\t\t\t\t\t\t<svg class="c-button--menu__stroke" width="72" height="72">\t\t\t\t\t\t\t\t<circle stroke="{{isMenuActive?\'#fff\':\'#0093e5\'}}" cx="36" cy="36" r="34" fill="none" />\t\t\t\t\t\t\t</svg>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t</app-trigger>\t\t\t</span>\t\t</button>\t</div>\t</header><div class="u-fixed u-pos-bl u-pad-x-vw1of24  u-fit-w u-pad-y-md u-pointer-none {{currPageComponentId == \'page-home\' && showInterface && !isMenuActive ?\'is-active\':\'\'}} u-hide@sm" style="z-index: 3">\t<div class="u-vacuum u-color--brand c-anim--fade-in">\t\t<app-words word-class="c-text--sm c-footer-text" class="u-block ">\t\t\tLeading the clean air movement™\t\t</app-words>\t</div></div>\x3c!-- <app-scene  menu-position="{{menuButtonPosition}}"\t\t   class="u-block u-viewport-fit u-fixed u-pos-tl"></app-scene> --\x3e<div class="{{isMobile?\'u-relative\':\'u-fixed\'}} u-pos-tl u-fit-w js-content">\t<template is="light-core-template" if="{{pageComponentId !== null}}" remove-nodes="true">\t\t<div is="{{pageComponentId}}" class="u-block u-pos-tl {{currPageComponentId!=pageComponentId?\'u-absolute\':\'\'}}"\t\t\t scroll="{{scrollTop}}" content="{{pageContent}}" direction="{{direction}}" \t\t\t on-ready="_onPageReady" on-content-change="_updateContentHeight"\t\t\t ws-root="{{wsRoot}}"\t\t\t is-menu-active="{{isMenuActive}}"></div>\t</template>\t<template is="light-core-template" if="{{pageAltComponentId !== null}}" remove-nodes="true">\t\t<div is="{{pageAltComponentId}}" class="u-block u-pos-tl {{currPageComponentId!=pageAltComponentId?\'u-absolute\':\'\'}}"  \t\t\t\tscroll="{{scrollTop}}" content="{{pageContent}}" direction="{{direction}}" \t\t\t\ton-ready="_onPageReady" on-content-change="_updateContentHeight"\t\t\t\tws-root="{{wsRoot}}"\t\t\t\tis-menu-active="{{isMenuActive}}"></div>\t</template></div><div class="u-fixed u-pos-tl u-viewport-fit u-bg--white c-overlay {{showOverlay?\'is-active\':\'\'}}">\t</div><app-menu is-active="{{isMenuActive}}"\t\t  current-page="{{currPageComponentId}}"\t\t  menu-position="{{menuButtonPosition}}"\t\t  default-mode="{{currPageComponentId==\'page-solution\'?\'solution\':currPageComponentId==\'page-about\'?\'about\':\'home\'}}"\t\t  class="c-app-menu u-viewport-fit-h u-fit-w u-fixed u-pos-tl {{isMenuActive?\'is-active\':\'u-pointer-none\'}}"></app-menu>\x3c!-- <div class="u-fixed u-viewport-fit u-pos-tl u-pointer-none" style="z-index: 100;">\t<div class="u-relative u-fit-h">\t\t<div class="u-absolute u-fit-h u-offset-l-w0of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w1of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w2of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w3of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w4of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w5of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w6of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w7of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w8of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w9of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w10of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w11of12" style="top: 0; width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w12of12" style="top: 0; margin-left:-1px;width: 1px; background: #00ffff; opacity:0.75"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w1of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w3of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w5of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w7of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w9of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w11of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w13of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w15of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w17of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w19of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w21of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t\t<div class="u-absolute u-fit-h u-offset-l-w23of24" style="top: 0; width: 1px; background: #ff0000; opacity: 0.15"></div>\t</div></div> --\x3e'
}, function(t, e) {
    t.exports = function(t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var i = e.protocol + "//" + e.host,
            n = i + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
            var o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                return e
            }).replace(/^'(.*)'$/, function(t, e) {
                return e
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return t;
            var r;
            return r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? i + o : n + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")"
        })
    }
}, function(t, e, i) {
    function n() {}

    function o(t) {
        switch ({}.toString.call(t)) {
            case "[object File]":
            case "[object Blob]":
            case "[object FormData]":
                return !0;
            default:
                return !1
        }
    }

    function r(t) {
        if (!y(t)) return t;
        var e = [];
        for (var i in t) null != t[i] && s(e, i, t[i]);
        return e.join("&")
    }

    function s(t, e, i) {
        if (Array.isArray(i)) return i.forEach(function(i) {
            s(t, e, i)
        });
        t.push(encodeURIComponent(e) + "=" + encodeURIComponent(i))
    }

    function a(t) {
        for (var e, i, n = {}, o = t.split("&"), r = 0, s = o.length; r < s; ++r) i = o[r], e = i.split("="), n[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
        return n
    }

    function l(t) {
        var e, i, n, o, r = t.split(/\r?\n/),
            s = {};
        r.pop();
        for (var a = 0, l = r.length; a < l; ++a) i = r[a], e = i.indexOf(":"), n = i.slice(0, e).toLowerCase(), o = w(i.slice(e + 1)), s[n] = o;
        return s
    }

    function u(t) {
        return /[\/+]json\b/.test(t)
    }

    function c(t) {
        return t.split(/ *; */).shift()
    }

    function h(t) {
        return g(t.split(/ *; */), function(t, e) {
            var i = e.split(/ *= */),
                n = i.shift(),
                o = i.shift();
            return n && o && (t[n] = o), t
        }, {})
    }

    function p(t, e) {
        e = e || {}, this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this.setStatusProperties(this.xhr.status), this.header = this.headers = l(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this.setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this.parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function d(t, e) {
        var i = this;
        this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", function() {
            var t = null,
                e = null;
            try {
                e = new p(i)
            } catch (e) {
                return t = new Error("Parser is unable to parse the response"), t.parse = !0, t.original = e, t.rawResponse = i.xhr && i.xhr.responseText ? i.xhr.responseText : null, t.statusCode = i.xhr && i.xhr.status ? i.xhr.status : null, i.callback(t)
            }
            if (i.emit("response", e), t) return i.callback(t, e);
            if (e.status >= 200 && e.status < 300) return i.callback(t, e);
            var n = new Error(e.statusText || "Unsuccessful HTTP response");
            n.original = t, n.response = e, n.status = e.status, i.callback(n, e)
        })
    }

    function f(t, e) {
        var i = _("DELETE", t);
        return e && i.end(e), i
    }
    var m, v = i(91),
        g = i(97),
        b = i(122),
        y = i(28);
    m = "undefined" != typeof window ? window : "undefined" != typeof self ? self : this;
    var _ = t.exports = i(123).bind(null, d);
    _.getXHR = function() {
        if (!(!m.XMLHttpRequest || m.location && "file:" == m.location.protocol && m.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {}
        return !1
    };
    var w = "".trim ? function(t) {
        return t.trim()
    } : function(t) {
        return t.replace(/(^\s*|\s*$)/g, "")
    };
    _.serializeObject = r, _.parseString = a, _.types = {
        html: "text/html",
        json: "application/json",
        xml: "application/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, _.serialize = {
        "application/x-www-form-urlencoded": r,
        "application/json": JSON.stringify
    }, _.parse = {
        "application/x-www-form-urlencoded": a,
        "application/json": JSON.parse
    }, p.prototype.get = function(t) {
        return this.header[t.toLowerCase()]
    }, p.prototype.setHeaderProperties = function(t) {
        var e = this.header["content-type"] || "";
        this.type = c(e);
        var i = h(e);
        for (var n in i) this[n] = i[n]
    }, p.prototype.parseBody = function(t) {
        var e = _.parse[this.type];
        return !e && u(this.type) && (e = _.parse["application/json"]), e && t && (t.length || t instanceof Object) ? e(t) : null
    }, p.prototype.setStatusProperties = function(t) {
        1223 === t && (t = 204);
        var e = t / 100 | 0;
        this.status = this.statusCode = t, this.statusType = e, this.info = 1 == e, this.ok = 2 == e, this.clientError = 4 == e, this.serverError = 5 == e, this.error = (4 == e || 5 == e) && this.toError(), this.accepted = 202 == t, this.noContent = 204 == t, this.badRequest = 400 == t, this.unauthorized = 401 == t, this.notAcceptable = 406 == t, this.notFound = 404 == t, this.forbidden = 403 == t
    }, p.prototype.toError = function() {
        var t = this.req,
            e = t.method,
            i = t.url,
            n = "cannot " + e + " " + i + " (" + this.status + ")",
            o = new Error(n);
        return o.status = this.status, o.method = e, o.url = i, o
    }, _.Response = p, v(d.prototype);
    for (var x in b) d.prototype[x] = b[x];
    d.prototype.abort = function() {
        if (!this.aborted) return this.aborted = !0, this.xhr && this.xhr.abort(), this.clearTimeout(), this.emit("abort"), this
    }, d.prototype.type = function(t) {
        return this.set("Content-Type", _.types[t] || t), this
    }, d.prototype.responseType = function(t) {
        return this._responseType = t, this
    }, d.prototype.accept = function(t) {
        return this.set("Accept", _.types[t] || t), this
    }, d.prototype.auth = function(t, e, i) {
        switch (i || (i = {
            type: "basic"
        }), i.type) {
            case "basic":
                var n = btoa(t + ":" + e);
                this.set("Authorization", "Basic " + n);
                break;
            case "auto":
                this.username = t, this.password = e
        }
        return this
    }, d.prototype.query = function(t) {
        return "string" != typeof t && (t = r(t)), t && this._query.push(t), this
    }, d.prototype.attach = function(t, e, i) {
        return this._getFormData().append(t, e, i || e.name), this
    }, d.prototype._getFormData = function() {
        return this._formData || (this._formData = new m.FormData), this._formData
    }, d.prototype.send = function(t) {
        var e = y(t),
            i = this._header["content-type"];
        if (e && y(this._data))
            for (var n in t) this._data[n] = t[n];
        else "string" == typeof t ? (i || this.type("form"), i = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == i ? this._data ? this._data + "&" + t : t : (this._data || "") + t) : this._data = t;
        return !e || o(t) ? this : (i || this.type("json"), this)
    }, p.prototype.parse = function(t) {
        return m.console && console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0"), this.serialize(t), this
    }, p.prototype.serialize = function(t) {
        return this._parser = t, this
    }, d.prototype.callback = function(t, e) {
        var i = this._callback;
        this.clearTimeout(), i(t, e)
    }, d.prototype.crossDomainError = function() {
        var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
    }, d.prototype.timeoutError = function() {
        var t = this._timeout,
            e = new Error("timeout of " + t + "ms exceeded");
        e.timeout = t, this.callback(e)
    }, d.prototype.withCredentials = function() {
        return this._withCredentials = !0, this
    }, d.prototype.end = function(t) {
        var e = this,
            i = this.xhr = _.getXHR(),
            r = this._query.join("&"),
            s = this._timeout,
            a = this._formData || this._data;
        this._callback = t || n, i.onreadystatechange = function() {
            if (4 == i.readyState) {
                var t;
                try {
                    t = i.status
                } catch (e) {
                    t = 0
                }
                if (0 == t) {
                    if (e.timedout) return e.timeoutError();
                    if (e.aborted) return;
                    return e.crossDomainError()
                }
                e.emit("end")
            }
        };
        var l = function(t) {
            t.total > 0 && (t.percent = t.loaded / t.total * 100), t.direction = "download", e.emit("progress", t)
        };
        this.hasListeners("progress") && (i.onprogress = l);
        try {
            i.upload && this.hasListeners("progress") && (i.upload.onprogress = l)
        } catch (t) {}
        if (s && !this._timer && (this._timer = setTimeout(function() {
                e.timedout = !0, e.abort()
            }, s)), r && (r = _.serializeObject(r), this.url += ~this.url.indexOf("?") ? "&" + r : "?" + r), this.username && this.password ? i.open(this.method, this.url, !0, this.username, this.password) : i.open(this.method, this.url, !0), this._withCredentials && (i.withCredentials = !0), "GET" != this.method && "HEAD" != this.method && "string" != typeof a && !o(a)) {
            var c = this._header["content-type"],
                h = this._parser || _.serialize[c ? c.split(";")[0] : ""];
            !h && u(c) && (h = _.serialize["application/json"]), h && (a = h(a))
        }
        for (var p in this.header) null != this.header[p] && i.setRequestHeader(p, this.header[p]);
        return this._responseType && (i.responseType = this._responseType), this.emit("request", this), i.send(void 0 !== a ? a : null), this
    }, _.Request = d, _.get = function(t, e, i) {
        var n = _("GET", t);
        return "function" == typeof e && (i = e, e = null), e && n.query(e), i && n.end(i), n
    }, _.head = function(t, e, i) {
        var n = _("HEAD", t);
        return "function" == typeof e && (i = e, e = null), e && n.send(e), i && n.end(i), n
    }, _.del = f, _.delete = f, _.patch = function(t, e, i) {
        var n = _("PATCH", t);
        return "function" == typeof e && (i = e, e = null), e && n.send(e), i && n.end(i), n
    }, _.post = function(t, e, i) {
        var n = _("POST", t);
        return "function" == typeof e && (i = e, e = null), e && n.send(e), i && n.end(i), n
    }, _.put = function(t, e, i) {
        var n = _("PUT", t);
        return "function" == typeof e && (i = e, e = null), e && n.send(e), i && n.end(i), n
    }
}, function(t, e, i) {
    var n = i(28);
    e.clearTimeout = function() {
        return this._timeout = 0, clearTimeout(this._timer), this
    }, e.parse = function(t) {
        return this._parser = t, this
    }, e.timeout = function(t) {
        return this._timeout = t, this
    }, e.then = function(t, e) {
        return this.end(function(i, n) {
            i ? e(i) : t(n)
        })
    }, e.use = function(t) {
        return t(this), this
    }, e.get = function(t) {
        return this._header[t.toLowerCase()]
    }, e.getHeader = e.get, e.set = function(t, e) {
        if (n(t)) {
            for (var i in t) this.set(i, t[i]);
            return this
        }
        return this._header[t.toLowerCase()] = e, this.header[t] = e, this
    }, e.unset = function(t) {
        return delete this._header[t.toLowerCase()], delete this.header[t], this
    }, e.field = function(t, e) {
        return this._getFormData().append(t, e), this
    }
}, function(t, e) {
    function i(t, e, i) {
        return "function" == typeof i ? new t("GET", e).end(i) : 2 == arguments.length ? new t("GET", e) : new t(e, i)
    }
    t.exports = i
}, function(t, e) {
    t.exports = "precision highp float;\n\nuniform float alpha;\nvarying vec2 vUv;\n\nvoid main(void) {\n    gl_FragColor = vec4( vec3(1., 1., 1.), alpha);\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nuniform float alpha;\nvarying vec3 vColor;\nvarying vec2 vUv;\n\nuniform vec2 offset;\n\n#ifdef USE_MAP\n\tuniform sampler2D map;\n\tuniform vec2 mapOffset;\n#endif\n\n#ifdef USE_ALPHA_MAP\n\tuniform sampler2D alphaMap;\n\tuniform vec2 alphaMapOffset;\n#endif\n\n\nuniform vec3 color;\n\nvoid main(void) {\n\n\tvec4 color = vec4(color, alpha);\n\n\t#ifdef USE_MAP\n\t\tcolor = texture2D(map, vUv + offset);\n\t\tcolor.a *= alpha;\n\t#endif\n\n\n    gl_FragColor = color;\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\n\nvarying vec2 vUv;\n\nvoid main(void) {\n\n    vec4 outColor = vec4(1., 0., 0., 1.0);\n    gl_FragColor = outColor;\n\n}"
}, function(t, e) {
    t.exports = "\nattribute vec2 uv;\nattribute vec3 color;\nattribute vec3 position;\nattribute float vertexIndex;\nattribute float particleIndex;\n\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n// uniform float pointSize;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n\n    vec3 newPosition = position;\n\n    if (vertexIndex == 0.0) {\n      newPosition += vec3(-1.,1.,0.);\n    }\n    else if (vertexIndex == 1.0) {\n      newPosition += vec3(1.,1.,0.);\n    }\n    else if (vertexIndex == 2.0) {\n      newPosition += vec3(-1.,-1.,0.);\n    }\n    else if (vertexIndex == 3.0) {\n      newPosition += vec3(1.,-1.,0.);\n    }\n\n    newPosition *= 10.;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4( newPosition, 1.0 );\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\n#define BLUR_ITERATION 3.0\n\nuniform sampler2D tInput;\nuniform vec2 uDirection;\n\nvarying vec2 vUv;\n\nfloat randomize(vec3 scale, float seed) {\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main() {\n\n    vec4 color   = vec4(0.0);\n    float total  = 0.0;\n\n   \tfloat offset = 0.;//randomize(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -BLUR_ITERATION; t <= BLUR_ITERATION; t++) \n    {\n        float percent = (t + offset - 0.5) / BLUR_ITERATION;\n        float weight  = 1.0 - abs(percent);\n        vec4 sample   = texture2D( tInput, vUv + uDirection * percent );\n        color += sample * weight;\n        total += weight;\n    }\n\n    color = color / total;\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = vec4(color.rgb, 1.);\n\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nvoid main(void) {\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\n// uniform sampler2D tMask;\nvarying vec2 vUv;\n\n// uniform vec2 resolution;\n// uniform sampler2D tDepth;\n// uniform int pass;\n\nvarying float vRatio;\n\nuniform float alpha;\nuniform float uProgress;\nuniform vec3 color;\n\nuniform int useDash;\n\nuniform int uDirection;\n\n\nvoid main() {\n\n\tvec4 outColor;\n\n\toutColor.rgb = color;\n\n    if (uDirection == 0) {\n        if ( vRatio < (uProgress) ) {\n    \t    outColor.a = 1.0;\n        }\n        else {\n        \tif (useDash == 1) {\n    \t\t    float dasharray = cos( vRatio * 1500. ) - 0.6;\n    \t    \toutColor.a = dasharray < 0.0 ? 0.0 : 0.75;\n        \t}\n        \telse {\n        \t\toutColor.a = 0.;\n        \t}\n        }\n    }\n    else {\n        if ( vRatio > (1.0 - uProgress) ) {\n            outColor.a = 1.0;\n        }\n        else {\n            if (useDash == 1) {\n                float dasharray = cos( vRatio * 1500. ) - 0.6;\n                outColor.a = dasharray < 0.0 ? 0.0 : 0.75;\n            }\n            else {\n                outColor.a = 0.;\n            }\n        }\n    }\n    // if (pass == 1) {\n\t   //  float depth = texture2D(tDepth, gl_FragCoord.xy/resolution).r;\n\t   //  float currDepth = gl_FragCoord.z;\n\t   //  if (depth > currDepth) {\n\t   //  \tdiscard;\n\t   //  }\n    // }\n\n    outColor.a *= alpha;\n    \n\n    gl_FragColor = outColor;\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nattribute float ratio;\nattribute vec3 direction;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \n\n\nvarying float vRatio;\n\nuniform vec3 scale;\n\nvoid main(void) {\n\n\tvec3 worldPos = position;\n\n\tworldPos += (direction * 1.) / scale;\n\n\n\tvRatio = ratio;\n\tvUv       = uv;\n\n\tvec4 mvPosition = uMVMatrix * vec4( worldPos, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(worldPos, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\nuniform sampler2D tFront;\n// uniform sampler2D tBack;\n// uniform sampler2D tOcean;\nvarying vec2 vUv;\n\nvoid main() {\n\n\t// vec4 outColor = vec4(1.);\n\n\tvec4 frontColor = texture2D(tFront, vUv);\n\t// vec4 backColor  = texture2D(tBack, vUv);\n\t// float oceanMask = texture2D(tOcean, vUv).r;\n\n\t// outColor.rgb = mix(\n\t// \tfrontColor.rgb,\n\t// \tmix( backColor.rgb , frontColor.rgb, 0.6),\n //        oceanMask);\n\n\t// //darken the continents parts\n\t// outColor.rgb = mix( \n\t// \toutColor.rgb,\n\t// \toutColor.rgb * vec3(0.95),\n\t// \t1. - oceanMask\n\t// );\n\n    gl_FragColor = frontColor;\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\n\nvoid main(void) {\n\tvUv = uv;\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec3 cameraPosition;\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \n\nvoid main() {\n\n\n\tvec3 worldPos = vPosition;\n    vec3 normal = vNormal;\n\n\tvec3 N      = normal;\n\tvec3 V      = normalize(cameraPosition - worldPos);\n\n\tfloat NdotV = abs( dot (N , V )) + 0.001;\n\n\tif (NdotV>0.5) {\n\t\tNdotV = 1.;\n\t}\n\telse {\n\t\tNdotV = (NdotV)/0.5; \n\t}\n\n\tgl_FragColor = vec4(color, alpha*(1.-NdotV) );\n\n\n\n}\n\n\n\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uMMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \n\nvoid main(void) {\n\n\tvNormal   = normalize( (uMMatrix * vec4(normal, 1.0)).rgb );\n\tvPosition = (uMMatrix * vec4(position, 1.0)).rgb;\n\tvUv       = uv;\n\t\t\n\tvec4 mvPosition = uMVMatrix * vec4( position, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\nuniform sampler2D tMask;\nvarying vec2 vUv;\n\nuniform vec2 resolution;\nuniform sampler2D tDepth;\nuniform int pass;\n\nvarying float vLinePointIndex;\nvarying float vOpacity;\n\nvoid main() {\n\n\tvec4 outColor;\n\n\toutColor.rgb = vec3(0./255.,147./255.,229./255.);\n\n    outColor.a = vOpacity;\n\n    if (pass == 1) {\n\t    float depth = texture2D(tDepth, gl_FragCoord.xy/resolution).r;\n\t    float currDepth = gl_FragCoord.z;\n\n\t    if (depth > currDepth) {\n\t    \tdiscard;\n\t    }\n    }\n\n    gl_FragColor = outColor;\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nattribute float linePointIndex;\nattribute float lineHeight;\n\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vViewPosition; \n\nvarying float vLinePointIndex;\nvarying float vOpacity;\n\n\nuniform sampler2D tMask;\nuniform float uMaxHeight;\n\nvoid main(void) {\n\n\tvec3 worldPos = position;\n\n\tvNormal   = normalize( (vec4(normal, 0.0)).rgb );\n\tvLinePointIndex = linePointIndex;\n\tvUv       = uv;\n\n\tvOpacity = 1.;\n\n\tif (linePointIndex == 0. ||\n\t\tlinePointIndex == 3.) {\n\t\tvOpacity = 0.;\n\t}\n\n\tif (linePointIndex == 2. ||\n\t\t linePointIndex == 3. ) {\n\n    \tfloat h = texture2D(tMask, vUv).r;\n    \th = pow(h, 2.2) * 0.25 * uMaxHeight;\n\n\t    worldPos += vNormal * h;\n\t}\n\t\n\n\tvec4 mvPosition = uMVMatrix * vec4( worldPos, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(worldPos, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\n\nvarying float vSide;\nuniform vec3 color;\nuniform float alpha;\nuniform float uProgress;\n\nvoid main() {\n\n\tif ( vSide > uProgress ) {\n\t\tdiscard;\n\t}\n\n\tgl_FragColor = vec4(color, alpha);\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute float side;\nvarying float vSide;\n\nuniform vec3 color;\nuniform vec3 start;\nuniform vec3 end;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n\n    vSide = side;\n\n    vec3 newPosition;\n\n    if (side == 0.) {\n        newPosition = start;\n    }\n    else{\n        newPosition = end;\n    }\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(newPosition, 1.0);\n    \n}"
}, function(t, e) {
    t.exports = 'precision highp float;\n\n#define PI 3.34159265359\n#define RECIPROCAL_PI 0.31830988618\n#define saturate(a) clamp( a, 0.0, 1.0 )\n\n#ifdef NUM_LIGHTS\n    // uniform float lightAngleCos[NUM_LIGHTS];\n    // uniform vec3  lightColor[NUM_LIGHTS];\n    // uniform float lightDecay[NUM_LIGHTS];\n    // uniform vec3  lightDirection[NUM_LIGHTS];\n    // uniform float lightDistance[NUM_LIGHTS];\n    // uniform float lightExponent[NUM_LIGHTS];\n    uniform vec3  lightPosition[NUM_LIGHTS];\n    // uniform float lightPenumbraCos[NUM_LIGHTS];\n#endif\n\nuniform float alpha;\n\n// uniform int useDepth;\n// uniform int useAlpha;\n// \n// #ifdef USE_METALNESS_MAP\n    // uniform sampler2D tMetalness;\n// #endif\n\n// #ifdef USE_ROUGHNESS_MAP\n    // uniform sampler2D tRoughness;\n// #endif\n\n// #ifdef USE_ALBEDO_MAP\n    uniform sampler2D tAlbedo;\n// #endif\n\n// #ifdef USE_ALPHA_MAP\n//     uniform sampler2D tAlpha;\n// #endif\n\n\nuniform vec2 resolution;\nuniform float uMaskRadius;\nuniform vec2 uMaskCenter;\nuniform vec3 cameraPosition;\n\n// uniform int uInvertMask;\n// uniform int useMask;\n\nstruct IncidentLight {\n    float angleCos;\n    vec3  color;\n    vec3  position;\n    vec3  direction;\n    float distance;\n    float decay;\n    float exponent;\n    float penumbraCos;\n};\n\nstruct ReflectedLight {\n    vec3 directDiffuse;\n    vec3 directSpecular;\n    vec3 indirectDiffuse;\n    vec3 indirectSpecular;\n};\n\nstruct PBRMaterial {\n    vec3  diffuseColor;\n    float specularRoughness;\n    vec3  specularColor;\n    float clearCoat;\n    float clearCoatRoughness;\n};\n\nstruct GeometricContext {\n    vec3 position;\n    vec3 normal;\n    vec3 viewDir;\n};\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n    if ( decayExponent > 0.0 ) {\n      return pow( clamp( -lightDistance / cutoffDistance + 1.0 , 0., 1.), decayExponent );\n    }\n    return 1.0;\n}\n\n// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n    // Original approximation by Christophe Schlick \'94\n    //;float fresnel = pow( 1.0 - dotLH, 5.0 );\n    // Optimized variant (presented by Epic at SIGGRAPH \'13)\n    float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n    return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_Frostbite (in vec3 f0 , in float f90 , in float u )\n{\n    return f0 + ( f90 - f0 ) * pow (1. - u, 5.);\n}\n// Microfacet Models for Refraction through Rough Surfaces - equation (34)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat V_SmithGGXCorrelated ( float NdotL , float NdotV , float alphaG )\n{\n    // This is the optimize version\n    float alphaG2 = alphaG * alphaG ;\n    // Caution : the " NdotL *" and " NdotV *" are explicitely inversed , this is not a mistake .\n    float Lambda_GGXV = NdotL * sqrt (( - NdotV * alphaG2 + NdotV ) * NdotV + alphaG2 );\n    float Lambda_GGXL = NdotV * sqrt (( - NdotL * alphaG2 + NdotL ) * NdotL + alphaG2 );\n\n    return 0.5 / ( Lambda_GGXV + Lambda_GGXL );\n}\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is "roughness squared" in Disney’s reparameterization\nfloat D_GGX ( float NdotH, float m )\n{\n    // Divide by PI is apply later\n    float m2 = m * m ;\n    float f  = ( NdotH * m2 - NdotH ) * NdotH + 1.;\n    return m2 / (f * f) ;\n}\nfloat Fr_DisneyDiffuse ( float NdotV, float NdotL, float LdotH,\n                         float linearRoughness )\n{\n    float energyBias   = mix(0., 0.5, linearRoughness );\n    float energyFactor = mix(1.0, 1.0 / 1.51, linearRoughness );\n    float f90 = energyBias + 2.0 * LdotH * LdotH * linearRoughness ;\n    vec3 f0    = vec3(1.0, 1.0, 1.0);\n    float lightScatter = F_Schlick_Frostbite ( f0 , f90 , NdotL ) .r;\n    float viewScatter  = F_Schlick_Frostbite (f0 , f90 , NdotV ).r;\n    return lightScatter * viewScatter * energyFactor ;\n}\n\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \n\n\nfloat blendScreen(float base, float blend) {\n    return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\n\nvoid main() {\n\n\n\n        if ( length( gl_FragCoord.xy - (resolution*uMaskCenter) ) > uMaskRadius  ) {\n            discard;\n        }\n    \n\n\n    vec3 worldPos = vPosition;\n    vec3 normal = vNormal;\n\n    vec3 outColor = vec3(0.);\n\n    float _alpha = alpha;\n\n    // #ifdef USE_ALPHA_MAP\n    //     _alpha = texture2D(tAlpha, vUv).r;\n    // #endif\n\n    vec3 _albedo     = vec3(1.);\n    float _roughness = 1.;\n    float _metalness = 0.;\n    float _ior       = 0.;\n\n    // #ifdef USE_ALBEDO_MAP\n        _albedo = texture2D(tAlbedo, vUv).rgb;\n        _albedo = pow(_albedo, vec3(2.2));\n    // #endif\n\n    // #ifdef USE_ROUGHNESS_MAP\n    //     _roughness = texture2D(tRoughness, vUv).r;\n    // #endif\n    \n    // #ifdef USE_METALNESS_MAP\n    //     _metalness = texture2D(tMetalness, vUv).r;\n    // #endif\n\n\n\n    vec3 diffuseColor = _albedo;\n\n\n\n        PBRMaterial material;\n        material.diffuseColor      = diffuseColor.rgb * ( 1.0 - _metalness );\n        material.specularRoughness = clamp( _roughness, 0.04, 1.0 );\n        material.specularColor     = mix( vec3( 0.00 ), diffuseColor.rgb, _metalness );\n\n        vec3 N      = normal;\n        vec3 V      = normalize(cameraPosition - worldPos);\n        float NdotV = abs( dot (N , V )) + 0.001;\n\n        #ifdef NUM_LIGHTS\n\n            for (int i=0; i<NUM_LIGHTS; i++) {\n\n                IncidentLight directLight;\n                directLight.angleCos    = 0.9510565162951535;//lightAngleCos[i];\n                directLight.color       = vec3(3.);//lightColor[i];\n                directLight.direction   = vec3(0.,-1.,0.);//lightDirection[i];\n                directLight.distance    = 10000.;//lightDistance[i];\n                directLight.decay       = 0.;//lightDecay[i];\n                directLight.position    = lightPosition[i];\n                // directLight.penumbraCos = lightPenumbraCos[i];\n\n                // calculate per-light radiance\n                vec3 L = normalize(directLight.position - worldPos);\n                vec3 H = normalize(V + L);\n\n                float LdotH = saturate ( dot (L , H ));\n                float NdotH = saturate ( dot (N , H ));\n                float NdotL = saturate ( dot (N , L ));\n\n                vec3 radiance  = vec3(0.);        \n                float angleCos = dot(L, directLight.direction);\n\n                // if ( angleCos > directLight.angleCos ) {\n                //     float penumbra = smoothstep( directLight.angleCos, 0.0, angleCos );\n                //     directLight.color *= penumbra;\n                // }\n                // else{\n                //     directLight.color *= 0.;\n                // }\n\n                vec3 irradiance = NdotL * directLight.color;\n                irradiance *= PI;// punctual light\n\n                // BRDF_Specular_GGX\n                float a   = material.specularRoughness;// * material.specularRoughness;\n                vec3 F    = F_Schlick( material.specularColor, LdotH );\n                float Vis = V_SmithGGXCorrelated ( NdotV , NdotL , a );\n                float D   = D_GGX ( NdotH , a );\n                vec3 Fr   =  F * Vis * D;// / PI;\n                vec3 directSpecular = Fr * irradiance / PI;\n        \n                // Diffuse BRDF   \n                float Fd  = Fr_DisneyDiffuse( NdotV , NdotL , LdotH , material.specularRoughness ) / PI;\n                vec3 directDiffuse  = Fd * irradiance * material.diffuseColor  / PI;\n\n                float attenuation = calcLightAttenuation(length(directLight.position - worldPos), directLight.distance, directLight.decay);\n                attenuation = 1.;\n\n                vec3 F0      = mix(vec3(_ior), vec3(1.)/*diffuseColor*/, 0.);\n                vec3 fresnel = F0 + (1.0 - F0) * pow(1.0 - NdotV, 5.0);\n                    \n                outColor.rgb += (directDiffuse + directSpecular) * attenuation;\n                outColor.rgb += vec3(1.) * fresnel;\n                //irradiance  * material.diffuseColor;//(directDiffuse + directSpecular) * attenuation;\n\n            }\n\n        #endif\n\n        float gamma = 2.2;\n        outColor.rgb = pow(outColor.rgb, vec3(1.0 / gamma));\n\n\n        outColor.r = max(0.8666666667, 0.8666666667+(1.-0.866666666)*outColor.r   );\n        outColor.g = max(0.8823529412, 0.8823529412+(1.-0.8823529412)*outColor.g  );\n        outColor.b = max(0.917647058,  0.917647058 +(1.-0.917647058)*outColor.b   );\n        \n        \n        gl_FragColor = vec4(outColor.rgb, 1.0 );\n\n\n\n}\n\n\n\n'
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform mat4 uMMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \n\nvoid main(void) {\n\n\tvNormal   = normalize( (uMMatrix * vec4(normal, 1.0)).rgb );\n\tvPosition = (uMMatrix * vec4(position, 1.0)).rgb;\n\tvUv       = uv;\n\t\t\n\tvec4 mvPosition = uMVMatrix * vec4( position, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n"
}, function(t, e) {
    t.exports = "precision highp float;\n\nuniform sampler2D tMask;\nuniform sampler2D tParticle;\nvarying vec2 vUv;\n\n\nuniform vec2 resolution;\nuniform float uMaskRadius;\nuniform vec2 uMaskCenter;\n\nuniform vec3 color;\nuniform int useMask;\nuniform vec3 cameraPosition;\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\n\n\nuniform float alpha;\n\nfloat randomize(vec3 scale, float seed, vec3 coords) {\n    return fract(sin(dot(coords + seed, scale)) * 43758.5453 + seed);\n}\n//;\n//\nvoid main() {\n\n    // float _maskRadius = uMaskRadius;\n    // if ( length( gl_FragCoord.xy - (resolution*0.5) ) > uMaskRadius  ) {\n    //     discard;\n    // }\n\n    float maskColor = texture2D(tMask, vUv ).r ;\n\n    maskColor = maskColor > 0.5 ? 1.0 : maskColor;\n\n    vec3 worldPos = vPosition;\n\n\tvec3 N      = vNormal;\n\tvec3 V      = normalize(cameraPosition - worldPos);\n\tfloat NdotV = abs( dot (N , V )) + 0.001;\n\n    vec3 F0      = mix(vec3(1.4), vec3(1.)/*diffuseColor*/, 0.);\n    vec3 fresnel = F0 + (1.0 - F0) * pow(1.0 - NdotV, 5.0);\n    \n    float numX = 1. / 1000.;\n    float numY = 1. / 1000.;\n\n    vec2 _localUvs = vec2( mod(vUv.x, numX) / numX, mod(vUv.y, numY) / numY );\n\n    float indexX =  floor(vUv.x / numX) / 600.;\n    float indexY =  floor(vUv.y / numY) / 600.;\n\n    float randRadius = randomize(vec3(12.9898, 78.233, 151.7182), 0.0, vec3(indexX, indexY, 0.));\n\n    vec3 outColor;\n\n    // float particleMask = texture2D(tParticle, vec2(mod(vUv.x * 2., 1.), mod(vUv.y * 2., 1.)) ).r;\n\n    // particleMask = particleMask > 0.4 ? 1. : particleMask;\n\n    float _a = alpha;\n\n    // if ( length( _localUvs - 0.5 ) < randRadius  ) {\n        outColor = vec3(color) ;\n        gl_FragColor = vec4( outColor,  /*particleMask * */(1.-NdotV) * maskColor * randRadius * 0.5 );\n    \n    // }\n    // else {\n    //     discard;\n    // }\n\n\n    // vec3 outColor = vec3( mod(vUv.x, numX) / numX, mod(vUv.y, numY) / numY, 0. );\n\n\n}"
}, function(t, e) {
    t.exports = "precision highp float;\n\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vViewPosition; \nuniform vec3 cameraPosition;\n\nuniform float uPointSize;\n\nfloat randomize(vec3 scale, float seed, vec3 coords) {\n    return fract(sin(dot(coords + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void) {\n\n\tvUv       = uv;\n\n\tvec4 mvPosition = uMVMatrix * vec4( position, 1.0 );\n \tvViewPosition = mvPosition.xyz;\n \t\t\n\n \tfloat numX = 1. / 1000.;\n    float numY = 1. / 1000.;\n\n    float indexX =  floor(vUv.x / numX) / 1000.;\n    float indexY =  floor(vUv.y / numY) / 1000.;\n    float randRadius = 0.2 + 0.8 * randomize(vec3(12.9898, 78.233, 151.7182), 0.0, vec3(indexX, indexY, 0.));\n\n    gl_PointSize = uPointSize * randRadius;\n\n    gl_Position = uPMatrix * uMVMatrix * vec4(position, 1.0);\n}\n"
}, function(t, e, i) {
    /**
     * Generates event when user makes new movement (like a swipe on a touchscreen).
     * @version 1.1.4
     * @link https://github.com/Promo/wheel-indicator
     * @license MIT
     */
    var n = function(t, e) {
        function i(t) {
            this._options = u(h, t), this._deltaArray = [0, 0, 0], this._isAcceleration = !1, this._isStopped = !0, this._direction = "", this._timer = "", this._isWorking = !0;
            var e = this;
            this._wheelHandler = function(t) {
                e._isWorking && (r.call(e, t), e._options.preventMouse && o(t))
            }, a(this._options.elem, c, this._wheelHandler)
        }

        function n(t) {
            t.direction = this._direction, this._options.callback.call(this, t)
        }

        function o(e) {
            e = e || t.event, e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }

        function r(t) {
            var e = this,
                i = p(t);
            if (0 !== i) {
                var o, r = i > 0 ? "down" : "up",
                    a = e._deltaArray.length,
                    l = !1,
                    u = 0;
                for (clearTimeout(e._timer), e._timer = setTimeout(function() {
                        e._deltaArray = [0, 0, 0], e._isStopped = !0, e._direction = r
                    }, 150), o = 0; o < a; o++) 0 !== e._deltaArray[o] && (e._deltaArray[o] > 0 ? ++u : --u);
                Math.abs(u) === a && (u > 0 ? "down" : "up") !== e._direction && (l = !0, e._direction = r), e._isStopped || (l ? (e._isAcceleration = !0, n.call(this, t)) : Math.abs(u) === a && s.call(this, t)), e._isStopped && (e._isStopped = !1, e._isAcceleration = !0, e._direction = r, n.call(this, t)), e._deltaArray.shift(), e._deltaArray.push(i)
            }
        }

        function s(t) {
            var e = Math.abs(this._deltaArray[0]),
                i = Math.abs(this._deltaArray[1]),
                o = Math.abs(this._deltaArray[2]),
                r = Math.abs(p(t));
            r > o && o > i && i > e && (this._isAcceleration || (n.call(this, t), this._isAcceleration = !0)), r < o && o <= i && (this._isAcceleration = !1)
        }

        function a(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i)
        }

        function l(t, e, i) {
            t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i)
        }

        function u(t, e) {
            var i, n = {};
            for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
            for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
            return n
        }
        var c = "onwheel" in e ? "wheel" : "mousewheel",
            h = {
                callback: function() {},
                elem: e,
                preventMouse: !0
            };
        i.prototype = {
            constructor: i,
            turnOn: function() {
                return this._isWorking = !0, this
            },
            turnOff: function() {
                return this._isWorking = !1, this
            },
            setOptions: function(t) {
                return this._options = u(this._options, t), this
            },
            getOption: function(t) {
                var e = this._options[t];
                if (void 0 !== e) return e;
                throw new Error("Unknown option")
            },
            destroy: function() {
                return l(this._options.elem, c, this._wheelHandler), this
            }
        };
        var p = function(t) {
            return (p = t.wheelDelta && !t.deltaY ? function(t) {
                return -1 * t.wheelDelta
            } : function(t) {
                return t.deltaY
            })(t)
        };
        return i
    }(window, document);
    t.exports = n
}]);