/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
function appendSearchIcon(t) {
    t.find("span.search-input-icon").length || (t.addClass("search-icon-field").append('<span class="search-input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M17.7857 16.7509L14.0229 12.9881C15.1655 11.6142 15.8538 9.84937 15.8538 7.92668C15.8538 3.55605 12.2977 0 7.92674 0C3.55608 0 0 3.55605 0 7.92668C0 12.2977 3.55608 15.8537 7.92674 15.8537C9.84945 15.8537 11.614 15.1654 12.9882 14.0228L16.751 17.7855C16.8941 17.9286 17.0811 18 17.2682 18C17.4552 18 17.6426 17.9286 17.7853 17.7855C18.0715 17.5001 18.0715 17.0367 17.7857 16.7509ZM1.46357 7.92668C1.46357 4.36289 4.36292 1.4632 7.92709 1.4632C11.4913 1.4632 14.3906 4.36254 14.3906 7.92668C14.3906 11.4908 11.4909 14.3902 7.92709 14.3902C4.36327 14.3902 1.46357 11.4908 1.46357 7.92668Z" fill="#21212A"/></svg></span>'),
    t.find(".search-input-icon").css({
        height: t.find("input").outerHeight()
    }));
}
function filter_events_fields(t) {
    jQuery(once("events-filter-section", ".events-filter-section")).find(".content-wrap #edit-actions").before('<div class="js-form-item form-item js-form-type-select form-type-select form-item-field-details-upcoming-past-filter"><label for="upcoming_checkbox" class="checkbox active"><input type="checkbox" name="upcoming_checkbox" checked="checked" />Upcoming</label><label for="past_checkbox" class="checkbox"><input type="checkbox" name="past_checkbox" />Past</label></div>'),
    jQuery(once("label-checkbox", "label.checkbox")).on("click", (function() {
        let t = jQuery(this).find("input").prop("checked");
        if (jQuery(this).parent().find("label.checkbox").removeClass("active"),
        jQuery(this).parent().find("input").prop("checked", !1),
        jQuery(".view-events .upcoming-teaser, .view-events .past-teasers").fadeIn(),
        !t) {
            jQuery(this).addClass("active"),
            jQuery(this).find("input").prop("checked", !0);
            let t = jQuery(this).find("input").attr("name");
            "past_checkbox" == t && jQuery(".view-events .upcoming-teaser").fadeOut(),
            "upcoming_checkbox" == t && jQuery(".view-events .past-teasers").fadeOut();
        }
    }
    ));
}
function fix_reset_button(t) {
    setTimeout((function() {
        t('#views-exposed-form-partners-block-1 input[id*="edit-reset"]').click((function(e) {
            e.preventDefault(),
            t(":input", ".views-exposed-form").not(":button, :submit, :reset, :hidden").val("").prop("checked", !1).prop("selected", !1),
            t(".views-exposed-form").attr("action", window.location.href + "#" + t(".views-exposed-form").attr("id")).submit();
        }
        ));
    }
    ), 100);
}
!function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.ScrollMagic = e();
}(this, (function() {
    "use strict";
    var t = function() {
        o.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.");
    };
    t.version = "2.0.7",
    window.addEventListener("mousewheel", (function() {}
    ));
    var e = "data-scrollmagic-pin-spacer";
    t.Controller = function(i) {
        var r, s, a = "ScrollMagic.Controller", l = "REVERSE", c = "PAUSED", d = n.defaults, u = this, p = o.extend({}, d, i), h = [], f = !1, g = 0, m = c, v = !0, y = 0, b = !0, w = function() {
            p.refreshInterval > 0 && (s = window.setTimeout(k, p.refreshInterval));
        }, x = function() {
            return p.vertical ? o.get.scrollTop(p.container) : o.get.scrollLeft(p.container);
        }, _ = function() {
            return p.vertical ? o.get.height(p.container) : o.get.width(p.container);
        }, S = this._setScrollPos = function(t) {
            p.vertical ? v ? window.scrollTo(o.get.scrollLeft(), t) : p.container.scrollTop = t : v ? window.scrollTo(t, o.get.scrollTop()) : p.container.scrollLeft = t;
        }
        , T = function() {
            if (b && f) {
                var t = o.type.Array(f) ? f : h.slice(0);
                f = !1;
                var e = g
                  , n = (g = u.scrollPos()) - e;
                0 !== n && (m = n > 0 ? "FORWARD" : l),
                m === l && t.reverse(),
                t.forEach((function(e, n) {
                    A(3, "updating Scene " + (n + 1) + "/" + t.length + " (" + h.length + " total)"),
                    e.update(!0);
                }
                )),
                0 === t.length && p.loglevel >= 3 && A(3, "updating 0 Scenes (nothing added to controller)");
            }
        }, $ = function() {
            r = o.rAF(T);
        }, C = function(t) {
            A(3, "event fired causing an update:", t.type),
            "resize" == t.type && (y = _(),
            m = c),
            !0 !== f && (f = !0,
            $());
        }, k = function() {
            if (!v && y != _()) {
                var t;
                try {
                    t = new Event("resize",{
                        bubbles: !1,
                        cancelable: !1
                    });
                } catch (e) {
                    (t = document.createEvent("Event")).initEvent("resize", !1, !1);
                }
                p.container.dispatchEvent(t);
            }
            h.forEach((function(t, e) {
                t.refresh();
            }
            )),
            w();
        }, A = this._log = function(t, e) {
            p.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
            o.log.apply(window, arguments));
        }
        ;
        this._options = p;
        var E = function(t) {
            if (t.length <= 1)
                return t;
            var e = t.slice(0);
            return e.sort((function(t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1;
            }
            )),
            e;
        };
        return this.addScene = function(e) {
            if (o.type.Array(e))
                e.forEach((function(t, e) {
                    u.addScene(t);
                }
                ));
            else if (e instanceof t.Scene)
                if (e.controller() !== u)
                    e.addTo(u);
                else {
                    if (h.indexOf(e) < 0) {
                        for (var n in h.push(e),
                        h = E(h),
                        e.on("shift.controller_sort", (function() {
                            h = E(h);
                        }
                        )),
                        p.globalSceneOptions)
                            e[n] && e[n].call(e, p.globalSceneOptions[n]);
                        A(3, "adding Scene (now " + h.length + " total)");
                    }
                }
            else
                A(1, "ERROR: invalid argument supplied for '.addScene()'");
            return u;
        }
        ,
        this.removeScene = function(t) {
            if (o.type.Array(t))
                t.forEach((function(t, e) {
                    u.removeScene(t);
                }
                ));
            else {
                var e = h.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"),
                h.splice(e, 1),
                A(3, "removing Scene (now " + h.length + " left)"),
                t.remove());
            }
            return u;
        }
        ,
        this.updateScene = function(e, n) {
            return o.type.Array(e) ? e.forEach((function(t, e) {
                u.updateScene(t, n);
            }
            )) : n ? e.update(!0) : !0 !== f && e instanceof t.Scene && (-1 == (f = f || []).indexOf(e) && f.push(e),
            f = E(f),
            $()),
            u;
        }
        ,
        this.update = function(t) {
            return C({
                type: "resize"
            }),
            t && T(),
            u;
        }
        ,
        this.scrollTo = function(n, i) {
            if (o.type.Number(n))
                S.call(p.container, n, i);
            else if (n instanceof t.Scene)
                n.controller() === u ? u.scrollTo(n.scrollOffset(), i) : A(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", n);
            else if (o.type.Function(n))
                S = n;
            else {
                var r = o.get.elements(n)[0];
                if (r) {
                    for (; r.parentNode.hasAttribute(e); )
                        r = r.parentNode;
                    var s = p.vertical ? "top" : "left"
                      , a = o.get.offset(p.container)
                      , l = o.get.offset(r);
                    v || (a[s] -= u.scrollPos()),
                    u.scrollTo(l[s] - a[s], i);
                } else
                    A(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", n);
            }
            return u;
        }
        ,
        this.scrollPos = function(t) {
            return arguments.length ? (o.type.Function(t) ? x = t : A(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),
            u) : x.call(u);
        }
        ,
        this.info = function(t) {
            var e = {
                size: y,
                vertical: p.vertical,
                scrollPos: g,
                scrollDirection: m,
                container: p.container,
                isDocument: v
            };
            return arguments.length ? void 0 !== e[t] ? e[t] : void A(1, 'ERROR: option "' + t + '" is not available') : e;
        }
        ,
        this.loglevel = function(t) {
            return arguments.length ? (p.loglevel != t && (p.loglevel = t),
            u) : p.loglevel;
        }
        ,
        this.enabled = function(t) {
            return arguments.length ? (b != t && (b = !!t,
            u.updateScene(h, !0)),
            u) : b;
        }
        ,
        this.destroy = function(t) {
            window.clearTimeout(s);
            for (var e = h.length; e--; )
                h[e].destroy(t);
            return p.container.removeEventListener("resize", C),
            p.container.removeEventListener("scroll", C),
            o.cAF(r),
            A(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"),
            null;
        }
        ,
        function() {
            for (var e in p)
                d.hasOwnProperty(e) || (A(2, 'WARNING: Unknown option "' + e + '"'),
                delete p[e]);
            if (p.container = o.get.elements(p.container)[0],
            !p.container)
                throw A(1, "ERROR creating object " + a + ": No valid scroll container supplied"),
                a + " init failed.";
            (v = p.container === window || p.container === document.body || !document.body.contains(p.container)) && (p.container = window),
            y = _(),
            p.container.addEventListener("resize", C),
            p.container.addEventListener("scroll", C);
            var n = parseInt(p.refreshInterval, 10);
            p.refreshInterval = o.type.Number(n) ? n : d.refreshInterval,
            w(),
            A(3, "added new " + a + " controller (v" + t.version + ")");
        }(),
        u;
    }
    ;
    var n = {
        defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
        }
    };
    t.Controller.addOption = function(t, e) {
        n.defaults[t] = e;
    }
    ,
    t.Controller.extend = function(e) {
        var n = this;
        t.Controller = function() {
            return n.apply(this, arguments),
            this.$super = o.extend({}, this),
            e.apply(this, arguments) || this;
        }
        ,
        o.extend(t.Controller, n),
        t.Controller.prototype = n.prototype,
        t.Controller.prototype.constructor = t.Controller;
    }
    ,
    t.Scene = function(n) {
        var r, s, a = "ScrollMagic.Scene", l = "BEFORE", c = "DURING", d = "AFTER", u = i.defaults, p = this, h = o.extend({}, u, n), f = l, g = 0, m = {
            start: 0,
            end: 0
        }, v = 0, y = !0, b = {};
        this.on = function(t, e) {
            return o.type.Function(e) ? (t = t.trim().split(" ")).forEach((function(t) {
                var n = t.split(".")
                  , i = n[0]
                  , o = n[1];
                "*" != i && (b[i] || (b[i] = []),
                b[i].push({
                    namespace: o || "",
                    callback: e
                }));
            }
            )) : w(1, "ERROR when calling '.on()': Supplied callback for '" + t + "' is not a valid function!"),
            p;
        }
        ,
        this.off = function(t, e) {
            return t ? ((t = t.trim().split(" ")).forEach((function(t, n) {
                var i = t.split(".")
                  , o = i[0]
                  , r = i[1] || "";
                ("*" === o ? Object.keys(b) : [o]).forEach((function(t) {
                    for (var n = b[t] || [], i = n.length; i--; ) {
                        var o = n[i];
                        !o || r !== o.namespace && "*" !== r || e && e != o.callback || n.splice(i, 1);
                    }
                    n.length || delete b[t];
                }
                ));
            }
            )),
            p) : (w(1, "ERROR: Invalid event name supplied."),
            p);
        }
        ,
        this.trigger = function(e, n) {
            if (e) {
                var i = e.trim().split(".")
                  , o = i[0]
                  , r = i[1]
                  , s = b[o];
                w(3, "event fired:", o, n ? "->" : "", n || ""),
                s && s.forEach((function(e, i) {
                    r && r !== e.namespace || e.callback.call(p, new t.Event(o,e.namespace,p,n));
                }
                ));
            } else
                w(1, "ERROR: Invalid event name supplied.");
            return p;
        }
        ,
        p.on("change.internal", (function(t) {
            "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? $() : "reverse" === t.what && p.update());
        }
        )).on("shift.internal", (function(t) {
            S(),
            p.update();
        }
        ));
        var w = this._log = function(t, e) {
            h.loglevel >= t && (Array.prototype.splice.call(arguments, 1, 0, "(" + a + ") ->"),
            o.log.apply(window, arguments));
        }
        ;
        this.addTo = function(e) {
            return e instanceof t.Controller ? s != e && (s && s.removeScene(p),
            s = e,
            A(),
            T(!0),
            $(!0),
            S(),
            s.info("container").addEventListener("resize", C),
            e.addScene(p),
            p.trigger("add", {
                controller: s
            }),
            w(3, "added " + a + " to controller"),
            p.update()) : w(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),
            p;
        }
        ,
        this.enabled = function(t) {
            return arguments.length ? (y != t && (y = !!t,
            p.update(!0)),
            p) : y;
        }
        ,
        this.remove = function() {
            if (s) {
                s.info("container").removeEventListener("resize", C);
                var t = s;
                s = void 0,
                t.removeScene(p),
                p.trigger("remove"),
                w(3, "removed " + a + " from controller");
            }
            return p;
        }
        ,
        this.destroy = function(t) {
            return p.trigger("destroy", {
                reset: t
            }),
            p.remove(),
            p.off("*.*"),
            w(3, "destroyed " + a + " (reset: " + (t ? "true" : "false") + ")"),
            null;
        }
        ,
        this.update = function(t) {
            if (s)
                if (t)
                    if (s.enabled() && y) {
                        var e, n = s.info("scrollPos");
                        e = h.duration > 0 ? (n - m.start) / (m.end - m.start) : n >= m.start ? 1 : 0,
                        p.trigger("update", {
                            startPos: m.start,
                            endPos: m.end,
                            scrollPos: n
                        }),
                        p.progress(e);
                    } else
                        x && f === c && O(!0);
                else
                    s.updateScene(p, !1);
            return p;
        }
        ,
        this.refresh = function() {
            return T(),
            $(),
            p;
        }
        ,
        this.progress = function(t) {
            if (arguments.length) {
                var e = !1
                  , n = f
                  , i = s ? s.info("scrollDirection") : "PAUSED"
                  , o = h.reverse || t >= g;
                if (0 === h.duration ? (e = g != t,
                f = 0 === (g = t < 1 && o ? 0 : 1) ? l : c) : t < 0 && f !== l && o ? (g = 0,
                f = l,
                e = !0) : t >= 0 && t < 1 && o ? (g = t,
                f = c,
                e = !0) : t >= 1 && f !== d ? (g = 1,
                f = d,
                e = !0) : f !== c || o || O(),
                e) {
                    var r = {
                        progress: g,
                        state: f,
                        scrollDirection: i
                    }
                      , a = f != n
                      , u = function(t) {
                        p.trigger(t, r);
                    };
                    a && n !== c && (u("enter"),
                    u(n === l ? "start" : "end")),
                    u("progress"),
                    a && f !== c && (u(f === l ? "start" : "end"),
                    u("leave"));
                }
                return p;
            }
            return g;
        }
        ;
        var x, _, S = function() {
            m = {
                start: v + h.offset
            },
            s && h.triggerElement && (m.start -= s.info("size") * h.triggerHook),
            m.end = m.start + h.duration;
        }, T = function(t) {
            if (r) {
                var e = "duration";
                E(e, r.call(p)) && !t && (p.trigger("change", {
                    what: e,
                    newval: h.duration
                }),
                p.trigger("shift", {
                    reason: e
                }));
            }
        }, $ = function(t) {
            var n = 0
              , i = h.triggerElement;
            if (s && (i || v > 0)) {
                if (i)
                    if (i.parentNode) {
                        for (var r = s.info(), a = o.get.offset(r.container), l = r.vertical ? "top" : "left"; i.parentNode.hasAttribute(e); )
                            i = i.parentNode;
                        var c = o.get.offset(i);
                        r.isDocument || (a[l] -= s.scrollPos()),
                        n = c[l] - a[l];
                    } else
                        w(2, "WARNING: triggerElement was removed from DOM and will be reset to", void 0),
                        p.triggerElement(void 0);
                var d = n != v;
                v = n,
                d && !t && p.trigger("shift", {
                    reason: "triggerElementPosition"
                });
            }
        }, C = function(t) {
            h.triggerHook > 0 && p.trigger("shift", {
                reason: "containerResize"
            });
        }, k = o.extend(i.validate, {
            duration: function(t) {
                if (o.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                    var e = parseFloat(t) / 100;
                    t = function() {
                        return s ? s.info("size") * e : 0;
                    }
                    ;
                }
                if (o.type.Function(t)) {
                    r = t;
                    try {
                        t = parseFloat(r.call(p));
                    } catch (e) {
                        t = -1;
                    }
                }
                if (t = parseFloat(t),
                !o.type.Number(t) || t < 0)
                    throw r ? (r = void 0,
                    ['Invalid return value of supplied function for option "duration":', t]) : ['Invalid value for option "duration":', t];
                return t;
            }
        }), A = function(t) {
            (t = arguments.length ? [t] : Object.keys(k)).forEach((function(t, e) {
                var n;
                if (k[t])
                    try {
                        n = k[t](h[t]);
                    } catch (e) {
                        n = u[t];
                        var i = o.type.String(e) ? [e] : e;
                        o.type.Array(i) ? (i[0] = "ERROR: " + i[0],
                        i.unshift(1),
                        w.apply(this, i)) : w(1, "ERROR: Problem executing validation callback for option '" + t + "':", e.message);
                    } finally {
                        h[t] = n;
                    }
            }
            ));
        }, E = function(t, e) {
            var n = !1
              , i = h[t];
            return h[t] != e && (h[t] = e,
            A(t),
            n = i != h[t]),
            n;
        }, P = function(t) {
            p[t] || (p[t] = function(e) {
                return arguments.length ? ("duration" === t && (r = void 0),
                E(t, e) && (p.trigger("change", {
                    what: t,
                    newval: h[t]
                }),
                i.shifts.indexOf(t) > -1 && p.trigger("shift", {
                    reason: t
                })),
                p) : h[t];
            }
            );
        };
        this.controller = function() {
            return s;
        }
        ,
        this.state = function() {
            return f;
        }
        ,
        this.scrollOffset = function() {
            return m.start;
        }
        ,
        this.triggerPosition = function() {
            var t = h.offset;
            return s && (h.triggerElement ? t += v : t += s.info("size") * p.triggerHook()),
            t;
        }
        ,
        p.on("shift.internal", (function(t) {
            var e = "duration" === t.reason;
            (f === d && e || f === c && 0 === h.duration) && O(),
            e && M();
        }
        )).on("progress.internal", (function(t) {
            O();
        }
        )).on("add.internal", (function(t) {
            M();
        }
        )).on("destroy.internal", (function(t) {
            p.removePin(t.reset);
        }
        ));
        var O = function(t) {
            if (x && s) {
                var e = s.info()
                  , n = _.spacer.firstChild;
                if (t || f !== c) {
                    var i = {
                        position: _.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }
                      , r = o.css(n, "position") != i.position;
                    _.pushFollowers ? h.duration > 0 && (f === d && 0 === parseFloat(o.css(_.spacer, "padding-top")) || f === l && 0 === parseFloat(o.css(_.spacer, "padding-bottom"))) && (r = !0) : i[e.vertical ? "top" : "left"] = h.duration * g,
                    o.css(n, i),
                    r && M();
                } else {
                    "fixed" != o.css(n, "position") && (o.css(n, {
                        position: "fixed"
                    }),
                    M());
                    var a = o.get.offset(_.spacer, !0)
                      , u = h.reverse || 0 === h.duration ? e.scrollPos - m.start : Math.round(g * h.duration * 10) / 10;
                    a[e.vertical ? "top" : "left"] += u,
                    o.css(_.spacer.firstChild, {
                        top: a.top,
                        left: a.left
                    });
                }
            }
        }
          , M = function() {
            if (x && s && _.inFlow) {
                var t = f === c
                  , e = s.info("vertical")
                  , n = _.spacer.firstChild
                  , i = o.isMarginCollapseType(o.css(_.spacer, "display"))
                  , r = {};
                _.relSize.width || _.relSize.autoFullWidth ? t ? o.css(x, {
                    width: o.get.width(_.spacer)
                }) : o.css(x, {
                    width: "100%"
                }) : (r["min-width"] = o.get.width(e ? x : n, !0, !0),
                r.width = t ? r["min-width"] : "auto"),
                _.relSize.height ? t ? o.css(x, {
                    height: o.get.height(_.spacer) - (_.pushFollowers ? h.duration : 0)
                }) : o.css(x, {
                    height: "100%"
                }) : (r["min-height"] = o.get.height(e ? n : x, !0, !i),
                r.height = t ? r["min-height"] : "auto"),
                _.pushFollowers && (r["padding" + (e ? "Top" : "Left")] = h.duration * g,
                r["padding" + (e ? "Bottom" : "Right")] = h.duration * (1 - g)),
                o.css(_.spacer, r);
            }
        }
          , D = function() {
            s && x && f === c && !s.info("isDocument") && O();
        }
          , L = function() {
            s && x && f === c && ((_.relSize.width || _.relSize.autoFullWidth) && o.get.width(window) != o.get.width(_.spacer.parentNode) || _.relSize.height && o.get.height(window) != o.get.height(_.spacer.parentNode)) && M();
        }
          , z = function(t) {
            s && x && f === c && !s.info("isDocument") && (t.preventDefault(),
            s._setScrollPos(s.info("scrollPos") - ((t.wheelDelta || t[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)));
        };
        this.setPin = function(t, n) {
            var i = n && n.hasOwnProperty("pushFollowers");
            if (n = o.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
            }, n),
            !(t = o.get.elements(t)[0]))
                return w(1, "ERROR calling method 'setPin()': Invalid pin element supplied."),
                p;
            if ("fixed" === o.css(t, "position"))
                return w(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),
                p;
            if (x) {
                if (x === t)
                    return p;
                p.removePin();
            }
            var r = (x = t).parentNode.style.display
              , s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            x.parentNode.style.display = "none";
            var a = "absolute" != o.css(x, "position")
              , l = o.css(x, s.concat(["display"]))
              , c = o.css(x, ["width", "height"]);
            x.parentNode.style.display = r,
            !a && n.pushFollowers && (w(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),
            n.pushFollowers = !1),
            window.setTimeout((function() {
                x && 0 === h.duration && i && n.pushFollowers && w(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.");
            }
            ), 0);
            var d = x.parentNode.insertBefore(document.createElement("div"), x)
              , u = o.extend(l, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || o.extend(u, o.css(x, ["width", "height"])),
            o.css(d, u),
            d.setAttribute(e, ""),
            o.addClass(d, n.spacerClass),
            _ = {
                spacer: d,
                relSize: {
                    width: "%" === c.width.slice(-1),
                    height: "%" === c.height.slice(-1),
                    autoFullWidth: "auto" === c.width && a && o.isMarginCollapseType(l.display)
                },
                pushFollowers: n.pushFollowers,
                inFlow: a
            },
            !x.___origStyle) {
                x.___origStyle = {};
                var f = x.style;
                s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach((function(t) {
                    x.___origStyle[t] = f[t] || "";
                }
                ));
            }
            return _.relSize.width && o.css(d, {
                width: c.width
            }),
            _.relSize.height && o.css(d, {
                height: c.height
            }),
            d.appendChild(x),
            o.css(x, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }),
            (_.relSize.width || _.relSize.autoFullWidth) && o.css(x, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }),
            window.addEventListener("scroll", D),
            window.addEventListener("resize", D),
            window.addEventListener("resize", L),
            x.addEventListener("mousewheel", z),
            x.addEventListener("DOMMouseScroll", z),
            w(3, "added pin"),
            O(),
            p;
        }
        ,
        this.removePin = function(t) {
            if (x) {
                if (f === c && O(!0),
                t || !s) {
                    var n = _.spacer.firstChild;
                    if (n.hasAttribute(e)) {
                        var i = _.spacer.style
                          , r = {};
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach((function(t) {
                            r[t] = i[t] || "";
                        }
                        )),
                        o.css(n, r);
                    }
                    _.spacer.parentNode.insertBefore(n, _.spacer),
                    _.spacer.parentNode.removeChild(_.spacer),
                    x.parentNode.hasAttribute(e) || (o.css(x, x.___origStyle),
                    delete x.___origStyle);
                }
                window.removeEventListener("scroll", D),
                window.removeEventListener("resize", D),
                window.removeEventListener("resize", L),
                x.removeEventListener("mousewheel", z),
                x.removeEventListener("DOMMouseScroll", z),
                x = void 0,
                w(3, "removed pin (reset: " + (t ? "true" : "false") + ")");
            }
            return p;
        }
        ;
        var I, R = [];
        return p.on("destroy.internal", (function(t) {
            p.removeClassToggle(t.reset);
        }
        )),
        this.setClassToggle = function(t, e) {
            var n = o.get.elements(t);
            return 0 !== n.length && o.type.String(e) ? (R.length > 0 && p.removeClassToggle(),
            I = e,
            R = n,
            p.on("enter.internal_class leave.internal_class", (function(t) {
                var e = "enter" === t.type ? o.addClass : o.removeClass;
                R.forEach((function(t, n) {
                    e(t, I);
                }
                ));
            }
            )),
            p) : (w(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === n.length ? "element" : "classes") + " supplied."),
            p);
        }
        ,
        this.removeClassToggle = function(t) {
            return t && R.forEach((function(t, e) {
                o.removeClass(t, I);
            }
            )),
            p.off("start.internal_class end.internal_class"),
            I = void 0,
            R = [],
            p;
        }
        ,
        function() {
            for (var t in h)
                u.hasOwnProperty(t) || (w(2, 'WARNING: Unknown option "' + t + '"'),
                delete h[t]);
            for (var e in u)
                P(e);
            A();
        }(),
        p;
    }
    ;
    var i = {
        defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
        },
        validate: {
            offset: function(t) {
                if (t = parseFloat(t),
                !o.type.Number(t))
                    throw ['Invalid value for option "offset":', t];
                return t;
            },
            triggerElement: function(t) {
                if (t = t || void 0) {
                    var e = o.get.elements(t)[0];
                    if (!e || !e.parentNode)
                        throw ['Element defined in option "triggerElement" was not found:', t];
                    t = e;
                }
                return t;
            },
            triggerHook: function(t) {
                var e = {
                    onCenter: .5,
                    onEnter: 1,
                    onLeave: 0
                };
                if (o.type.Number(t))
                    t = Math.max(0, Math.min(parseFloat(t), 1));
                else {
                    if (!(t in e))
                        throw ['Invalid value for option "triggerHook": ', t];
                    t = e[t];
                }
                return t;
            },
            reverse: function(t) {
                return !!t;
            },
            loglevel: function(t) {
                if (t = parseInt(t),
                !o.type.Number(t) || t < 0 || t > 3)
                    throw ['Invalid value for option "loglevel":', t];
                return t;
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    t.Scene.addOption = function(e, n, o, r) {
        e in i.defaults ? t._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + e + "', because it already exists.") : (i.defaults[e] = n,
        i.validate[e] = o,
        r && i.shifts.push(e));
    }
    ,
    t.Scene.extend = function(e) {
        var n = this;
        t.Scene = function() {
            return n.apply(this, arguments),
            this.$super = o.extend({}, this),
            e.apply(this, arguments) || this;
        }
        ,
        o.extend(t.Scene, n),
        t.Scene.prototype = n.prototype,
        t.Scene.prototype.constructor = t.Scene;
    }
    ,
    t.Event = function(t, e, n, i) {
        for (var o in i = i || {})
            this[o] = i[o];
        return this.type = t,
        this.target = this.currentTarget = n,
        this.namespace = e || "",
        this.timeStamp = this.timestamp = Date.now(),
        this;
    }
    ;
    var o = t._util = function(t) {
        var e, n = {}, i = function(t) {
            return parseFloat(t) || 0;
        }, o = function(e) {
            return e.currentStyle ? e.currentStyle : t.getComputedStyle(e);
        }, r = function(e, n, r, s) {
            if ((n = n === document ? t : n) === t)
                s = !1;
            else {
                if (!f.DomElement(n))
                    return 0;
            }
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var a = (r ? n["offset" + e] || n["outer" + e] : n["client" + e] || n["inner" + e]) || 0;
            if (r && s) {
                var l = o(n);
                a += "Height" === e ? i(l.marginTop) + i(l.marginBottom) : i(l.marginLeft) + i(l.marginRight);
            }
            return a;
        }, s = function(t) {
            return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, (function(t) {
                return t[1].toUpperCase();
            }
            ));
        };
        n.extend = function(t) {
            for (t = t || {},
            e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var n in arguments[e])
                        arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
            return t;
        }
        ,
        n.isMarginCollapseType = function(t) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1;
        }
        ;
        var a = 0
          , l = ["ms", "moz", "webkit", "o"]
          , c = t.requestAnimationFrame
          , d = t.cancelAnimationFrame;
        for (e = 0; !c && e < l.length; ++e)
            c = t[l[e] + "RequestAnimationFrame"],
            d = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
        c || (c = function(e) {
            var n = (new Date()).getTime()
              , i = Math.max(0, 16 - (n - a))
              , o = t.setTimeout((function() {
                e(n + i);
            }
            ), i);
            return a = n + i,
            o;
        }
        ),
        d || (d = function(e) {
            t.clearTimeout(e);
        }
        ),
        n.rAF = c.bind(t),
        n.cAF = d.bind(t);
        var u = ["error", "warn", "log"]
          , p = t.console || {};
        for (p.log = p.log || function() {}
        ,
        e = 0; e < u.length; e++) {
            var h = u[e];
            p[h] || (p[h] = p.log);
        }
        n.log = function(t) {
            (t > u.length || t <= 0) && (t = u.length);
            var e = new Date()
              , n = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2) + ":" + ("0" + e.getSeconds()).slice(-2) + ":" + ("00" + e.getMilliseconds()).slice(-3)
              , i = u[t - 1]
              , o = Array.prototype.splice.call(arguments, 1)
              , r = Function.prototype.bind.call(p[i], p);
            o.unshift(n),
            r.apply(p, o);
        }
        ;
        var f = n.type = function(t) {
            return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
        }
        ;
        f.String = function(t) {
            return "string" === f(t);
        }
        ,
        f.Function = function(t) {
            return "function" === f(t);
        }
        ,
        f.Array = function(t) {
            return Array.isArray(t);
        }
        ,
        f.Number = function(t) {
            return !f.Array(t) && t - parseFloat(t) + 1 >= 0;
        }
        ,
        f.DomElement = function(t) {
            return "object" == typeof HTMLElement || "function" == typeof HTMLElement ? t instanceof HTMLElement || t instanceof SVGElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName;
        }
        ;
        var g = n.get = {};
        return g.elements = function(e) {
            var n = [];
            if (f.String(e))
                try {
                    e = document.querySelectorAll(e);
                } catch (t) {
                    return n;
                }
            if ("nodelist" === f(e) || f.Array(e) || e instanceof NodeList)
                for (var i = 0, o = n.length = e.length; i < o; i++) {
                    var r = e[i];
                    n[i] = f.DomElement(r) ? r : g.elements(r);
                }
            else
                (f.DomElement(e) || e === document || e === t) && (n = [e]);
            return n;
        }
        ,
        g.scrollTop = function(e) {
            return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0;
        }
        ,
        g.scrollLeft = function(e) {
            return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0;
        }
        ,
        g.width = function(t, e, n) {
            return r("width", t, e, n);
        }
        ,
        g.height = function(t, e, n) {
            return r("height", t, e, n);
        }
        ,
        g.offset = function(t, e) {
            var n = {
                top: 0,
                left: 0
            };
            if (t && t.getBoundingClientRect) {
                var i = t.getBoundingClientRect();
                n.top = i.top,
                n.left = i.left,
                e || (n.top += g.scrollTop(),
                n.left += g.scrollLeft());
            }
            return n;
        }
        ,
        n.addClass = function(t, e) {
            e && (t.classList ? t.classList.add(e) : t.className += " " + e);
        }
        ,
        n.removeClass = function(t, e) {
            e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " "));
        }
        ,
        n.css = function(t, e) {
            if (f.String(e))
                return o(t)[s(e)];
            if (f.Array(e)) {
                var n = {}
                  , i = o(t);
                return e.forEach((function(t, e) {
                    n[t] = i[s(t)];
                }
                )),
                n;
            }
            for (var r in e) {
                var a = e[r];
                a == parseFloat(a) && (a += "px"),
                t.style[s(r)] = a;
            }
        }
        ,
        n;
    }(window || {});
    return t.Scene.prototype.addIndicators = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this;
    }
    ,
    t.Scene.prototype.removeIndicators = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),
        this;
    }
    ,
    t.Scene.prototype.setTween = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this;
    }
    ,
    t.Scene.prototype.removeTween = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),
        this;
    }
    ,
    t.Scene.prototype.setVelocity = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this;
    }
    ,
    t.Scene.prototype.removeVelocity = function() {
        return t._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),
        this;
    }
    ,
    t;
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], e) : "object" == typeof exports ? e(require("scrollmagic")) : e(t.ScrollMagic || t.jQuery && t.jQuery.ScrollMagic);
}(this, (function(t) {
    "use strict";
    var e = "0.85em"
      , n = "9999"
      , i = t._util
      , o = 0;
    t.Scene.extend((function() {
        var t, e = this;
        e.addIndicators = function(n) {
            if (!t)
                n = i.extend({}, {
                    name: "",
                    indent: 0,
                    parent: void 0,
                    colorStart: "green",
                    colorEnd: "red",
                    colorTrigger: "blue"
                }, n),
                o++,
                t = new r(e,n),
                e.on("add.plugin_addIndicators", t.add),
                e.on("remove.plugin_addIndicators", t.remove),
                e.on("destroy.plugin_addIndicators", e.removeIndicators),
                e.controller() && t.add();
            return e;
        }
        ,
        e.removeIndicators = function() {
            return t && (t.remove(),
            this.off("*.plugin_addIndicators"),
            t = void 0),
            e;
        }
        ;
    }
    )),
    t.Controller.addOption("addIndicators", !1),
    t.Controller.extend((function() {
        var e = this
          , n = e.info()
          , o = n.container
          , r = n.isDocument
          , s = n.vertical
          , a = {
            groups: []
        };
        this._indicators = a;
        var l = function() {
            a.updateBoundsPositions();
        }
          , c = function() {
            a.updateTriggerGroupPositions();
        };
        return o.addEventListener("resize", c),
        r || (window.addEventListener("resize", c),
        window.addEventListener("scroll", c)),
        o.addEventListener("resize", l),
        o.addEventListener("scroll", l),
        this._indicators.updateBoundsPositions = function(t) {
            for (var e, n, r, l = t ? [i.extend({}, t.triggerGroup, {
                members: [t]
            })] : a.groups, c = l.length, d = {}, u = s ? "left" : "top", p = s ? "width" : "height", h = s ? i.get.scrollLeft(o) + i.get.width(o) - 15 : i.get.scrollTop(o) + i.get.height(o) - 15; c--; )
                for (e = (r = l[c]).members.length,
                n = i.get[p](r.element.firstChild); e--; )
                    d[u] = h - n,
                    i.css(r.members[e].bounds, d);
        }
        ,
        this._indicators.updateTriggerGroupPositions = function(t) {
            for (var n, l, c, d, u = t ? [t] : a.groups, p = u.length, h = r ? document.body : o, f = r ? {
                top: 0,
                left: 0
            } : i.get.offset(h, !0), g = s ? i.get.width(o) - 15 : i.get.height(o) - 15, m = s ? "width" : "height", v = s ? "Y" : "X"; p--; )
                l = (n = u[p]).element,
                c = n.triggerHook * e.info("size"),
                d = i.get[m](l.firstChild.firstChild) < c ? "translate" + v + "(-100%)" : "",
                i.css(l, {
                    top: f.top + (s ? c : g - n.members[0].options.indent),
                    left: f.left + (s ? g - n.members[0].options.indent : c)
                }),
                i.css(l.firstChild.firstChild, {
                    "-ms-transform": d,
                    "-webkit-transform": d,
                    transform: d
                });
        }
        ,
        this._indicators.updateTriggerGroupLabel = function(t) {
            var e = "trigger" + (1 < t.members.length ? "" : " " + t.members[0].options.name)
              , n = t.element.firstChild.firstChild;
            n.textContent !== e && (n.textContent = e,
            s && a.updateBoundsPositions());
        }
        ,
        this.addScene = function(n) {
            this._options.addIndicators && n instanceof t.Scene && n.controller() === e && n.addIndicators(),
            this.$super.addScene.apply(this, arguments);
        }
        ,
        this.destroy = function() {
            o.removeEventListener("resize", c),
            r || (window.removeEventListener("resize", c),
            window.removeEventListener("scroll", c)),
            o.removeEventListener("resize", l),
            o.removeEventListener("scroll", l),
            this.$super.destroy.apply(this, arguments);
        }
        ,
        e;
    }
    ));
    var r = function(t, e) {
        var n, r, a = this, l = s.bounds(), c = s.start(e.colorStart), d = s.end(e.colorEnd), u = e.parent && i.get.elements(e.parent)[0];
        e.name = e.name || o,
        c.firstChild.textContent += " " + e.name,
        d.textContent += " " + e.name,
        l.appendChild(c),
        l.appendChild(d),
        a.options = e,
        a.bounds = l,
        a.triggerGroup = void 0,
        this.add = function() {
            r = t.controller(),
            n = r.info("vertical");
            var e = r.info("isDocument");
            u || (u = e ? document.body : r.info("container")),
            e || "static" !== i.css(u, "position") || i.css(u, {
                position: "relative"
            }),
            t.on("change.plugin_addIndicators", h),
            t.on("shift.plugin_addIndicators", p),
            v(),
            g(),
            setTimeout((function() {
                r._indicators.updateBoundsPositions(a);
            }
            ), 0);
        }
        ,
        this.remove = function() {
            if (a.triggerGroup) {
                if (t.off("change.plugin_addIndicators", h),
                t.off("shift.plugin_addIndicators", p),
                1 < a.triggerGroup.members.length) {
                    var e = a.triggerGroup;
                    e.members.splice(e.members.indexOf(a), 1),
                    r._indicators.updateTriggerGroupLabel(e),
                    r._indicators.updateTriggerGroupPositions(e),
                    a.triggerGroup = void 0;
                } else
                    m();
                f();
            }
        }
        ;
        var p = function() {
            g();
        }
          , h = function(t) {
            "triggerHook" === t.what && v();
        }
          , f = function() {
            l.parentNode.removeChild(l);
        }
          , g = function() {
            var o;
            l.parentNode !== u && (o = r.info("vertical"),
            i.css(c.firstChild, {
                "border-bottom-width": o ? 1 : 0,
                "border-right-width": o ? 0 : 1,
                bottom: o ? -1 : e.indent,
                right: o ? e.indent : -1,
                padding: o ? "0 8px" : "2px 4px"
            }),
            i.css(d, {
                "border-top-width": o ? 1 : 0,
                "border-left-width": o ? 0 : 1,
                top: o ? "100%" : "",
                right: o ? e.indent : "",
                bottom: o ? "" : e.indent,
                left: o ? "" : "100%",
                padding: o ? "0 8px" : "2px 4px"
            }),
            u.appendChild(l));
            var s = {};
            s[n ? "top" : "left"] = t.triggerPosition(),
            s[n ? "height" : "width"] = t.duration(),
            i.css(l, s),
            i.css(d, {
                display: 0 < t.duration() ? "" : "none"
            });
        }
          , m = function() {
            r._indicators.groups.splice(r._indicators.groups.indexOf(a.triggerGroup), 1),
            a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element),
            a.triggerGroup = void 0;
        }
          , v = function() {
            var o = t.triggerHook();
            if (!(a.triggerGroup && Math.abs(a.triggerGroup.triggerHook - o) < 1e-4)) {
                for (var l, c = r._indicators.groups, d = c.length; d--; )
                    if (l = c[d],
                    Math.abs(l.triggerHook - o) < 1e-4)
                        return a.triggerGroup && (1 === a.triggerGroup.members.length ? m() : (a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1),
                        r._indicators.updateTriggerGroupLabel(a.triggerGroup),
                        r._indicators.updateTriggerGroupPositions(a.triggerGroup))),
                        l.members.push(a),
                        a.triggerGroup = l,
                        void r._indicators.updateTriggerGroupLabel(l);
                if (a.triggerGroup) {
                    if (1 === a.triggerGroup.members.length)
                        return a.triggerGroup.triggerHook = o,
                        void r._indicators.updateTriggerGroupPositions(a.triggerGroup);
                    a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1),
                    r._indicators.updateTriggerGroupLabel(a.triggerGroup),
                    r._indicators.updateTriggerGroupPositions(a.triggerGroup),
                    a.triggerGroup = void 0;
                }
                !function() {
                    var o = s.trigger(e.colorTrigger)
                      , l = {};
                    l[n ? "right" : "bottom"] = 0,
                    l[n ? "border-top-width" : "border-left-width"] = 1,
                    i.css(o.firstChild, l),
                    i.css(o.firstChild.firstChild, {
                        padding: n ? "0 8px 3px 8px" : "3px 4px"
                    }),
                    document.body.appendChild(o);
                    var c = {
                        triggerHook: t.triggerHook(),
                        element: o,
                        members: [a]
                    };
                    r._indicators.groups.push(c),
                    a.triggerGroup = c,
                    r._indicators.updateTriggerGroupLabel(c),
                    r._indicators.updateTriggerGroupPositions(c);
                }();
            }
        };
    }
      , s = {
        start: function(t) {
            var e = document.createElement("div");
            e.textContent = "start",
            i.css(e, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            });
            var n = document.createElement("div");
            return i.css(n, {
                position: "absolute",
                overflow: "visible",
                width: 0,
                height: 0
            }),
            n.appendChild(e),
            n;
        },
        end: function(t) {
            var e = document.createElement("div");
            return e.textContent = "end",
            i.css(e, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            }),
            e;
        },
        bounds: function() {
            var t = document.createElement("div");
            return i.css(t, {
                position: "absolute",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": e
            }),
            t.style.zIndex = n,
            t;
        },
        trigger: function(t) {
            var o = document.createElement("div");
            o.textContent = "trigger",
            i.css(o, {
                position: "relative"
            });
            var r = document.createElement("div");
            i.css(r, {
                position: "absolute",
                overflow: "visible",
                "border-width": 0,
                "border-style": "solid",
                color: t,
                "border-color": t
            }),
            r.appendChild(o);
            var s = document.createElement("div");
            return i.css(s, {
                position: "fixed",
                overflow: "visible",
                "white-space": "nowrap",
                "pointer-events": "none",
                "font-size": e
            }),
            s.style.zIndex = n,
            s.appendChild(r),
            s;
        }
    };
}
)),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, (function(t) {
    "use strict";
    function e(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e;
    }
    function n(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function i(t) {
        return "string" == typeof t;
    }
    function o(t) {
        return "function" == typeof t;
    }
    function r(t) {
        return "number" == typeof t;
    }
    function s(t) {
        return void 0 === t;
    }
    function a(t) {
        return "object" == typeof t;
    }
    function l(t) {
        return !1 !== t;
    }
    function c() {
        return "undefined" != typeof window;
    }
    function d(t) {
        return o(t) || i(t);
    }
    function u(t) {
        return (yt = pe(t, ie)) && un;
    }
    function p(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    }
    function h(t, e) {
        return !e && console.warn(t);
    }
    function f(t, e) {
        return t && (ie[t] = e) && yt && (yt[t] = e) || ie;
    }
    function g() {
        return 0;
    }
    function m(t) {
        var e, n, i = t[0];
        if (a(i) || o(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (n = de.length; n-- && !de[n].targetTest(i); )
                ;
            e = de[n];
        }
        for (n = t.length; n--; )
            t[n] && (t[n]._gsap || (t[n]._gsap = new Le(t[n],e))) || t.splice(n, 1);
        return t;
    }
    function v(t) {
        return t._gsap || m(ve(t))[0]._gsap;
    }
    function y(t, e, n) {
        return (n = t[e]) && o(n) ? t[e]() : s(n) && t.getAttribute && t.getAttribute(e) || n;
    }
    function b(t, e) {
        return (t = t.split(",")).forEach(e) || t;
    }
    function w(t) {
        return Math.round(1e5 * t) / 1e5 || 0;
    }
    function x(t, e) {
        for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n; )
            ;
        return i < n;
    }
    function _(t, e, n) {
        var i, o = r(t[1]), s = (o ? 2 : 1) + (e < 2 ? 0 : 1), a = t[s];
        if (o && (a.duration = t[1]),
        a.parent = n,
        e) {
            for (i = a; n && !("immediateRender"in i); )
                i = n.vars.defaults || {},
                n = l(n.vars.inherit) && n.parent;
            a.immediateRender = l(i.immediateRender),
            e < 2 ? a.runBackwards = 1 : a.startAt = t[s - 1];
        }
        return a;
    }
    function S() {
        var t, e, n = re.length, i = re.slice(0);
        for (se = {},
        t = re.length = 0; t < n; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function T(t, e, n, i) {
        re.length && S(),
        t.render(e, n, i),
        re.length && S();
    }
    function $(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(ne).length < 2 ? e : i(t) ? t.trim() : t;
    }
    function C(t) {
        return t;
    }
    function k(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t;
    }
    function A(t, e) {
        for (var n in e)
            n in t || "duration" === n || "ease" === n || (t[n] = e[n]);
    }
    function E(t, e) {
        for (var n in e)
            t[n] = a(e[n]) ? E(t[n] || (t[n] = {}), e[n]) : e[n];
        return t;
    }
    function P(t, e) {
        var n, i = {};
        for (n in t)
            n in e || (i[n] = t[n]);
        return i;
    }
    function O(t) {
        var e = t.parent || ft
          , n = t.keyframes ? A : k;
        if (l(t.inherit))
            for (; e; )
                n(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t;
    }
    function M(t, e, n, i) {
        void 0 === n && (n = "_first"),
        void 0 === i && (i = "_last");
        var o = e._prev
          , r = e._next;
        o ? o._next = r : t[n] === e && (t[n] = r),
        r ? r._prev = o : t[i] === e && (t[i] = o),
        e._next = e._prev = e.parent = null;
    }
    function D(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t),
        t._act = 0;
    }
    function L(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; )
                n._dirty = 1,
                n = n.parent;
        return t;
    }
    function z(t) {
        return t._repeat ? he(t._tTime, t = t.duration() + t._rDelay) * t : 0;
    }
    function I(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    }
    function R(t) {
        return t._end = w(t._start + (t._tDur / Math.abs(t._ts || t._rts || Nt) || 0));
    }
    function F(t, e) {
        var n = t._dp;
        return n && n.smoothChildTiming && t._ts && (t._start = w(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        R(t),
        n._dirty || L(n, t)),
        t;
    }
    function j(t, e) {
        var n;
        if ((e._time || e._initted && !e._dur) && (n = I(t.rawTime(), e),
        (!e._dur || ge(0, e.totalDuration(), n) - e._tTime > Nt) && e.render(n, !0)),
        L(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp; )
                    0 <= n.rawTime() && n.totalTime(n._tTime),
                    n = n._dp;
            t._zTime = -Nt;
        }
    }
    function H(t, e, n, i) {
        return e.parent && D(e),
        e._start = w(n + e._delay),
        e._end = w(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        function(t, e, n, i, o) {
            void 0 === n && (n = "_first"),
            void 0 === i && (i = "_last");
            var r, s = t[i];
            if (o)
                for (r = e[o]; s && s[o] > r; )
                    s = s._prev;
            s ? (e._next = s._next,
            s._next = e) : (e._next = t[n],
            t[n] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = s,
            e.parent = e._dp = t;
        }(t, e, "_first", "_last", t._sort ? "_start" : 0),
        t._recent = e,
        i || j(t, e),
        t;
    }
    function q(t, e) {
        return (ie.ScrollTrigger || p("scrollTrigger", e)) && ie.ScrollTrigger.create(e, t);
    }
    function N(t, e, n, i) {
        return qe(t, e),
        t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && wt !== Te.frame ? (re.push(t),
        t._lazy = [e, i],
        1) : void 0 : 1;
    }
    function B(t, e, n, i) {
        var o = t._repeat
          , r = w(e) || 0
          , s = t._tTime / t._tDur;
        return s && !i && (t._time *= r / t._dur),
        t._dur = r,
        t._tDur = o ? o < 0 ? 1e10 : w(r * (o + 1) + t._rDelay * o) : r,
        s && !i ? F(t, t._tTime = t._tDur * s) : t.parent && R(t),
        n || L(t.parent, t),
        t;
    }
    function U(t) {
        return t instanceof Re ? L(t) : B(t, t._dur);
    }
    function G(t, e) {
        var n, o, r = t.labels, s = t._recent || fe, a = t.duration() >= qt ? s.endTime(!1) : t._dur;
        return i(e) && (isNaN(e) || e in r) ? "<" === (n = e.charAt(0)) || ">" === n ? ("<" === n ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (n = e.indexOf("=")) < 0 ? (e in r || (r[e] = a),
        r[e]) : (o = +(e.charAt(n - 1) + e.substr(n + 1)),
        1 < n ? G(t, e.substr(0, n - 1)) + o : a + o) : null == e ? a : +e;
    }
    function W(t, e) {
        return t || 0 === t ? e(t) : e;
    }
    function Y(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : "";
    }
    function X(t, e) {
        return t && a(t) && "length"in t && (!e && !t.length || t.length - 1 in t && a(t[0])) && !t.nodeType && t !== gt;
    }
    function V(t) {
        return t.sort((function() {
            return .5 - Math.random();
        }
        ));
    }
    function Q(t) {
        if (o(t))
            return t;
        var e = a(t) ? t : {
            each: t
        }
          , n = Pe(e.ease)
          , r = e.from || 0
          , s = parseFloat(e.base) || 0
          , l = {}
          , c = 0 < r && r < 1
          , d = isNaN(r) || c
          , u = e.axis
          , p = r
          , h = r;
        return i(r) ? p = h = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !c && d && (p = r[0],
        h = r[1]),
        function(t, i, o) {
            var a, c, f, g, m, v, y, b, x, _ = (o || e).length, S = l[_];
            if (!S) {
                if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, qt])[1])) {
                    for (y = -qt; y < (y = o[x++].getBoundingClientRect().left) && x < _; )
                        ;
                    x--;
                }
                for (S = l[_] = [],
                a = d ? Math.min(x, _) * p - .5 : r % x,
                c = d ? _ * h / x - .5 : r / x | 0,
                b = qt,
                v = y = 0; v < _; v++)
                    f = v % x - a,
                    g = c - (v / x | 0),
                    S[v] = m = u ? Math.abs("y" === u ? g : f) : Wt(f * f + g * g),
                    y < m && (y = m),
                    m < b && (b = m);
                "random" === r && V(S),
                S.max = y - b,
                S.min = b,
                S.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (_ < x ? _ - 1 : u ? "y" === u ? _ / x : x : Math.max(x, _ / x)) || 0) * ("edges" === r ? -1 : 1),
                S.b = _ < 0 ? s - _ : s,
                S.u = Y(e.amount || e.each) || 0,
                n = n && _ < 0 ? Ee(n) : n;
            }
            return _ = (S[t] - S.min) / S.max || 0,
            w(S.b + (n ? n(_) : _) * S.v) + S.u;
        }
        ;
    }
    function Z(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function(n) {
            return Math.floor(Math.round(parseFloat(n) / t) * t * e) / e + (r(n) ? 0 : Y(n));
        }
        ;
    }
    function K(t, e) {
        var n, i, s = Qt(t);
        return !s && a(t) && (n = s = t.radius || qt,
        t.values ? (t = ve(t.values),
        (i = !r(t[0])) && (n *= n)) : t = Z(t.increment)),
        W(e, s ? o(t) ? function(e) {
            return i = t(e),
            Math.abs(i - e) <= n ? i : e;
        }
        : function(e) {
            for (var o, s, a = parseFloat(i ? e.x : e), l = parseFloat(i ? e.y : 0), c = qt, d = 0, u = t.length; u--; )
                (o = i ? (o = t[u].x - a) * o + (s = t[u].y - l) * s : Math.abs(t[u] - a)) < c && (c = o,
                d = u);
            return d = !n || c <= n ? t[d] : e,
            i || d === e || r(e) ? d : d + Y(e);
        }
        : Z(t));
    }
    function J(t, e, n, i) {
        return W(Qt(t) ? !e : !0 === n ? !!(n = 0) : !i, (function() {
            return Qt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / n) * n * i) / i;
        }
        ));
    }
    function tt(t, e, n) {
        return W(n, (function(n) {
            return t[~~e(n)];
        }
        ));
    }
    function et(t) {
        for (var e, n, i, o, r = 0, s = ""; ~(e = t.indexOf("random(", r)); )
            i = t.indexOf(")", e),
            o = "[" === t.charAt(e + 7),
            n = t.substr(e + 7, i - e - 7).match(o ? ne : Zt),
            s += t.substr(r, e - r) + J(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5),
            r = i + 1;
        return s + t.substr(r, t.length - r);
    }
    function nt(t, e, n) {
        var i, o, r, s = t.labels, a = qt;
        for (i in s)
            (o = s[i] - e) < 0 == !!n && o && a > (o = Math.abs(o)) && (r = i,
            a = o);
        return r;
    }
    function it(t) {
        return D(t),
        t.progress() < 1 && be(t, "onInterrupt"),
        t;
    }
    function ot(t, e, n) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * we + .5 | 0;
    }
    function rt(t, e, n) {
        var i, o, s, a, l, c, d, u, p, h, f = t ? r(t) ? [t >> 16, t >> 8 & we, t & we] : 0 : xe.black;
        if (!f) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            xe[t])
                f = xe[t];
            else if ("#" === t.charAt(0))
                4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (o = t.charAt(2)) + o + (s = t.charAt(3)) + s),
                f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & we, t & we];
            else if ("hsl" === t.substr(0, 3))
                if (f = h = t.match(Zt),
                e) {
                    if (~t.indexOf("="))
                        return f = t.match(Kt),
                        n && f.length < 4 && (f[3] = 1),
                        f;
                } else
                    a = +f[0] % 360 / 360,
                    l = f[1] / 100,
                    i = 2 * (c = f[2] / 100) - (o = c <= .5 ? c * (l + 1) : c + l - c * l),
                    3 < f.length && (f[3] *= 1),
                    f[0] = ot(a + 1 / 3, i, o),
                    f[1] = ot(a, i, o),
                    f[2] = ot(a - 1 / 3, i, o);
            else
                f = t.match(Zt) || xe.transparent;
            f = f.map(Number);
        }
        return e && !h && (i = f[0] / we,
        o = f[1] / we,
        s = f[2] / we,
        c = ((d = Math.max(i, o, s)) + (u = Math.min(i, o, s))) / 2,
        d === u ? a = l = 0 : (p = d - u,
        l = .5 < c ? p / (2 - d - u) : p / (d + u),
        a = d === i ? (o - s) / p + (o < s ? 6 : 0) : d === o ? (s - i) / p + 2 : (i - o) / p + 4,
        a *= 60),
        f[0] = ~~(a + .5),
        f[1] = ~~(100 * l + .5),
        f[2] = ~~(100 * c + .5)),
        n && f.length < 4 && (f[3] = 1),
        f;
    }
    function st(t) {
        var e = []
          , n = []
          , i = -1;
        return t.split(_e).forEach((function(t) {
            var o = t.match(Jt) || [];
            e.push.apply(e, o),
            n.push(i += o.length + 1);
        }
        )),
        e.c = n,
        e;
    }
    function at(t, e, n) {
        var i, o, r, s, a = "", l = (t + a).match(_e), c = e ? "hsla(" : "rgba(", d = 0;
        if (!l)
            return t;
        if (l = l.map((function(t) {
            return (t = rt(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
        }
        )),
        n && (r = st(t),
        (i = n.c).join(a) !== r.c.join(a)))
            for (s = (o = t.replace(_e, "1").split(Jt)).length - 1; d < s; d++)
                a += o[d] + (~i.indexOf(d) ? l.shift() || c + "0,0,0,0)" : (r.length ? r : l.length ? l : n).shift());
        if (!o)
            for (s = (o = t.split(_e)).length - 1; d < s; d++)
                a += o[d] + l[d];
        return a + o[s];
    }
    function lt(t) {
        var e, n = t.join(" ");
        if (_e.lastIndex = 0,
        _e.test(n))
            return e = Se.test(n),
            t[1] = at(t[1], e),
            t[0] = at(t[0], e, st(t[1])),
            !0;
    }
    function ct(t, e) {
        for (var n, i = t._first; i; )
            i instanceof Re ? ct(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? ct(i.timeline, e) : (n = i._ease,
            i._ease = i._yEase,
            i._yEase = n,
            i._yoyo = e)),
            i = i._next;
    }
    function dt(t, e, n, i) {
        void 0 === n && (n = function(t) {
            return 1 - e(1 - t);
        }
        ),
        void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        }
        );
        var o, r = {
            easeIn: e,
            easeOut: n,
            easeInOut: i
        };
        return b(t, (function(t) {
            for (var e in Ce[t] = ie[t] = r,
            Ce[o = t.toLowerCase()] = n,
            r)
                Ce[o + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ce[t + "." + e] = r[e];
        }
        )),
        r;
    }
    function ut(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2;
        }
        ;
    }
    function pt(t, e, n) {
        function i(t) {
            return 1 === t ? 1 : o * Math.pow(2, -10 * t) * Xt((t - s) * r) + 1;
        }
        var o = 1 <= e ? e : 1
          , r = (n || (t ? .3 : .45)) / (e < 1 ? e : 1)
          , s = r / Bt * (Math.asin(1 / o) || 0)
          , a = "out" === t ? i : "in" === t ? function(t) {
            return 1 - i(1 - t);
        }
        : ut(i);
        return r = Bt / r,
        a.config = function(e, n) {
            return pt(t, e, n);
        }
        ,
        a;
    }
    function ht(t, e) {
        function n(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
        }
        void 0 === e && (e = 1.70158);
        var i = "out" === t ? n : "in" === t ? function(t) {
            return 1 - n(1 - t);
        }
        : ut(n);
        return i.config = function(e) {
            return ht(t, e);
        }
        ,
        i;
    }
    var ft, gt, mt, vt, yt, bt, wt, xt, _t, St, Tt, $t, Ct, kt, At, Et, Pt, Ot, Mt, Dt, Lt, zt, It, Rt, Ft, jt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, Ht = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, qt = 1e8, Nt = 1 / qt, Bt = 2 * Math.PI, Ut = Bt / 4, Gt = 0, Wt = Math.sqrt, Yt = Math.cos, Xt = Math.sin, Vt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , Qt = Array.isArray, Zt = /(?:-?\.?\d|\.)+/gi, Kt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, Jt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, te = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, ee = /[+-]=-?[\.\d]+/, ne = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ie = {}, oe = {}, re = [], se = {}, ae = {}, le = {}, ce = 30, de = [], ue = "", pe = function(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t;
    }, he = function(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    }, fe = {
        _start: 0,
        endTime: g
    }, ge = function(t, e, n) {
        return n < t ? t : e < n ? e : n;
    }, me = [].slice, ve = function(t, e) {
        return !i(t) || e || !mt && $e() ? Qt(t) ? function(t, e, n) {
            return void 0 === n && (n = []),
            t.forEach((function(t) {
                return i(t) && !e || X(t, 1) ? n.push.apply(n, ve(t)) : n.push(t);
            }
            )) || n;
        }(t, e) : X(t) ? me.call(t, 0) : t ? [t] : [] : me.call(vt.querySelectorAll(t), 0);
    }, ye = function(t, e, n, i, o) {
        var r = e - t
          , s = i - n;
        return W(o, (function(e) {
            return n + ((e - t) / r * s || 0);
        }
        ));
    }, be = function(t, e, n) {
        var i, o, r = t.vars, s = r[e];
        if (s)
            return i = r[e + "Params"],
            o = r.callbackScope || t,
            n && re.length && S(),
            i ? s.apply(o, i) : s.call(o);
    }, we = 255, xe = {
        aqua: [0, we, we],
        lime: [0, we, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, we],
        navy: [0, 0, 128],
        white: [we, we, we],
        olive: [128, 128, 0],
        yellow: [we, we, 0],
        orange: [we, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [we, 0, 0],
        pink: [we, 192, 203],
        cyan: [0, we, we],
        transparent: [we, we, we, 0]
    }, _e = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in xe)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi");
    }(), Se = /hsl[a]?\(/, Te = (Et = Date.now,
    Pt = 500,
    Ot = 33,
    Mt = Et(),
    Dt = Mt,
    zt = Lt = 1e3 / 240,
    Ct = {
        time: 0,
        frame: 0,
        tick: function() {
            Oe(!0);
        },
        deltaRatio: function(t) {
            return kt / (1e3 / (t || 60));
        },
        wake: function() {
            bt && (!mt && c() && (gt = mt = window,
            vt = gt.document || {},
            ie.gsap = un,
            (gt.gsapVersions || (gt.gsapVersions = [])).push(un.version),
            u(yt || gt.GreenSockGlobals || !gt.gsap && gt || {}),
            $t = gt.requestAnimationFrame),
            St && Ct.sleep(),
            Tt = $t || function(t) {
                return setTimeout(t, zt - 1e3 * Ct.time + 1 | 0);
            }
            ,
            _t = 1,
            Oe(2));
        },
        sleep: function() {
            ($t ? gt.cancelAnimationFrame : clearTimeout)(St),
            _t = 0,
            Tt = g;
        },
        lagSmoothing: function(t, e) {
            Pt = t || 1e8,
            Ot = Math.min(e, Pt, 0);
        },
        fps: function(t) {
            Lt = 1e3 / (t || 240),
            zt = 1e3 * Ct.time + Lt;
        },
        add: function(t) {
            It.indexOf(t) < 0 && It.push(t),
            $e();
        },
        remove: function(t) {
            var e;
            ~(e = It.indexOf(t)) && It.splice(e, 1) && e <= At && At--;
        },
        _listeners: It = []
    }), $e = function() {
        return !_t && Te.wake();
    }, Ce = {}, ke = /^[\d.\-M][\d.\-,\s]/, Ae = /["']/g, Ee = function(t) {
        return function(e) {
            return 1 - t(1 - e);
        }
        ;
    }, Pe = function(t, e) {
        return t && (o(t) ? t : Ce[t] || function(t) {
            var e = (t + "").split("(")
              , n = Ce[e[0]];
            return n && 1 < e.length && n.config ? n.config.apply(null, ~t.indexOf("{") ? [function(t) {
                for (var e, n, i, o = {}, r = t.substr(1, t.length - 3).split(":"), s = r[0], a = 1, l = r.length; a < l; a++)
                    n = r[a],
                    e = a !== l - 1 ? n.lastIndexOf(",") : n.length,
                    i = n.substr(0, e),
                    o[s] = isNaN(i) ? i.replace(Ae, "").trim() : +i,
                    s = n.substr(e + 1).trim();
                return o;
            }(e[1])] : function(t) {
                var e = t.indexOf("(") + 1
                  , n = t.indexOf(")")
                  , i = t.indexOf("(", e);
                return t.substring(e, ~i && i < n ? t.indexOf(")", n + 1) : n);
            }(t).split(",").map($)) : Ce._CE && ke.test(t) ? Ce._CE("", t) : n;
        }(t)) || e;
    };
    function Oe(t) {
        var e, n, i, o, r = Et() - Dt, s = !0 === t;
        if (Pt < r && (Mt += r - Ot),
        (0 < (e = (i = (Dt += r) - Mt) - zt) || s) && (o = ++Ct.frame,
        kt = i - 1e3 * Ct.time,
        Ct.time = i /= 1e3,
        zt += e + (Lt <= e ? 4 : Lt - e),
        n = 1),
        s || (St = Tt(Oe)),
        n)
            for (At = 0; At < It.length; At++)
                It[At](i, kt, o, t);
    }
    function Me(t) {
        return t < Ft ? Rt * t * t : t < .7272727272727273 ? Rt * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Rt * (t -= 2.25 / 2.75) * t + .9375 : Rt * Math.pow(t - 2.625 / 2.75, 2) + .984375;
    }
    b("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var n = e < 5 ? e + 1 : e;
        dt(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n);
        }
        : function(t) {
            return t;
        }
        , (function(t) {
            return 1 - Math.pow(1 - t, n);
        }
        ), (function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2;
        }
        ));
    }
    )),
    Ce.Linear.easeNone = Ce.none = Ce.Linear.easeIn,
    dt("Elastic", pt("in"), pt("out"), pt()),
    Rt = 7.5625,
    Ft = 1 / 2.75,
    dt("Bounce", (function(t) {
        return 1 - Me(1 - t);
    }
    ), Me),
    dt("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }
    )),
    dt("Circ", (function(t) {
        return -(Wt(1 - t * t) - 1);
    }
    )),
    dt("Sine", (function(t) {
        return 1 === t ? 1 : 1 - Yt(t * Ut);
    }
    )),
    dt("Back", ht("in"), ht("out"), ht()),
    Ce.SteppedEase = Ce.steps = ie.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t
              , i = t + (e ? 0 : 1)
              , o = e ? 1 : 0;
            return function(t) {
                return ((i * ge(0, .99999999, t) | 0) + o) * n;
            }
            ;
        }
    },
    Ht.ease = Ce["quad.out"],
    b("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return ue += t + "," + t + "Params,";
    }
    ));
    var De, Le = function(t, e) {
        this.id = Gt++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : y,
        this.set = e ? e.getSetter : Ze;
    }, ze = ((De = Ie.prototype).delay = function(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay;
    }
    ,
    De.duration = function(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }
    ,
    De.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        B(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }
    ,
    De.totalTime = function(t, e) {
        if ($e(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (F(this, t); n.parent; )
                n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && H(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Nt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        T(this, t, e)),
        this;
    }
    ,
    De.time = function(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + z(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
    }
    ,
    De.totalProgress = function(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }
    ,
    De.progress = function(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + z(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }
    ,
    De.iteration = function(t, e) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? he(this._tTime, n) + 1 : 1;
    }
    ,
    De.timeScale = function(t) {
        if (!arguments.length)
            return this._rts === -Nt ? 0 : this._rts;
        if (this._rts === t)
            return this;
        var e = this.parent && this._ts ? I(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0,
        this._ts = this._ps || t === -Nt ? 0 : this._rts,
        function(t) {
            for (var e = t.parent; e && e.parent; )
                e._dirty = 1,
                e.totalDuration(),
                e = e.parent;
            return t;
        }(this.totalTime(ge(-this._delay, this._tDur, e), !0));
    }
    ,
    De.paused = function(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : ($e(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Nt) && Math.abs(this._zTime) !== Nt))),
        this) : this._ps;
    }
    ,
    De.startTime = function(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || H(e, this, t - this._delay),
            this;
        }
        return this._start;
    }
    ,
    De.endTime = function(t) {
        return this._start + (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    }
    ,
    De.rawTime = function(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? I(e.rawTime(t), this) : this._tTime : this._tTime;
    }
    ,
    De.globalTime = function(t) {
        for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
            n = e._start + n / (e._ts || 1),
            e = e._dp;
        return n;
    }
    ,
    De.repeat = function(t) {
        return arguments.length ? (this._repeat = t,
        U(this)) : this._repeat;
    }
    ,
    De.repeatDelay = function(t) {
        return arguments.length ? (this._rDelay = t,
        U(this)) : this._rDelay;
    }
    ,
    De.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo;
    }
    ,
    De.seek = function(t, e) {
        return this.totalTime(G(this, t), l(e));
    }
    ,
    De.restart = function(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, l(e));
    }
    ,
    De.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1);
    }
    ,
    De.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1);
    }
    ,
    De.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0);
    }
    ,
    De.resume = function() {
        return this.paused(!1);
    }
    ,
    De.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Nt : 0)),
        this) : this._rts < 0;
    }
    ,
    De.invalidate = function() {
        return this._initted = 0,
        this._zTime = -Nt,
        this;
    }
    ,
    De.isActive = function() {
        var t, e = this.parent || this._dp, n = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - Nt));
    }
    ,
    De.eventCallback = function(t, e, n) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e,
        n && (i[t + "Params"] = n),
        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
        this) : i[t];
    }
    ,
    De.then = function(t) {
        var e = this;
        return new Promise((function(n) {
            function i() {
                var t = e.then;
                e.then = null,
                o(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                n(r),
                e.then = t;
            }
            var r = o(t) ? t : C;
            e._initted && 1 === e.totalProgress() && 0 <= e._ts || !e._tTime && e._ts < 0 ? i() : e._prom = i;
        }
        ));
    }
    ,
    De.kill = function() {
        it(this);
    }
    ,
    Ie);
    function Ie(t, e) {
        var n = t.parent || ft;
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        B(this, +t.duration, 1, 1),
        this.data = t.data,
        _t || Te.wake(),
        n && H(n, this, e || 0 === e ? e : n._time, 1),
        t.reversed && this.reverse(),
        t.paused && this.paused(!0);
    }
    k(ze.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Nt,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Re = function(t) {
        function s(e, i) {
            var o;
            return void 0 === e && (e = {}),
            (o = t.call(this, e, i) || this).labels = {},
            o.smoothChildTiming = !!e.smoothChildTiming,
            o.autoRemoveChildren = !!e.autoRemoveChildren,
            o._sort = l(e.sortChildren),
            o.parent && j(o.parent, n(o)),
            e.scrollTrigger && q(n(o), e.scrollTrigger),
            o;
        }
        e(s, t);
        var a = s.prototype;
        return a.to = function(t, e, n, i) {
            return new Ge(t,_(arguments, 0, this),G(this, r(e) ? i : n)),
            this;
        }
        ,
        a.from = function(t, e, n, i) {
            return new Ge(t,_(arguments, 1, this),G(this, r(e) ? i : n)),
            this;
        }
        ,
        a.fromTo = function(t, e, n, i, o) {
            return new Ge(t,_(arguments, 2, this),G(this, r(e) ? o : i)),
            this;
        }
        ,
        a.set = function(t, e, n) {
            return e.duration = 0,
            e.parent = this,
            O(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new Ge(t,e,G(this, n),1),
            this;
        }
        ,
        a.call = function(t, e, n) {
            return H(this, Ge.delayedCall(0, t, e), G(this, n));
        }
        ,
        a.staggerTo = function(t, e, n, i, o, r, s) {
            return n.duration = e,
            n.stagger = n.stagger || i,
            n.onComplete = r,
            n.onCompleteParams = s,
            n.parent = this,
            new Ge(t,n,G(this, o)),
            this;
        }
        ,
        a.staggerFrom = function(t, e, n, i, o, r, s) {
            return n.runBackwards = 1,
            O(n).immediateRender = l(n.immediateRender),
            this.staggerTo(t, e, n, i, o, r, s);
        }
        ,
        a.staggerFromTo = function(t, e, n, i, o, r, s, a) {
            return i.startAt = n,
            O(i).immediateRender = l(i.immediateRender),
            this.staggerTo(t, e, i, o, r, s, a);
        }
        ,
        a.render = function(t, e, n) {
            var i, o, r, s, a, l, c, d, u, p, h, f, g = this._time, m = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, y = this !== ft && m - Nt < t && 0 <= t ? m : t < Nt ? 0 : t, b = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (y !== this._tTime || n || b) {
                if (g !== this._time && v && (y += this._time - g,
                t += this._time - g),
                i = y,
                u = this._start,
                l = !(d = this._ts),
                b && (v || (g = this._zTime),
                !t && e || (this._zTime = t)),
                this._repeat && (h = this._yoyo,
                i = w(y % (a = v + this._rDelay)),
                y === m ? (s = this._repeat,
                i = v) : ((s = ~~(y / a)) && s === y / a && (i = v,
                s--),
                v < i && (i = v)),
                p = he(this._tTime, a),
                !g && this._tTime && p !== s && (p = s),
                h && 1 & s && (i = v - i,
                f = 1),
                s !== p && !this._lock)) {
                    var x = h && 1 & p
                      , _ = x === (h && 1 & s);
                    if (s < p && (x = !x),
                    g = x ? 0 : v,
                    this._lock = 1,
                    this.render(g || (f ? 0 : w(s * a)), e, !v)._lock = 0,
                    !e && this.parent && be(this, "onRepeat"),
                    this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                    g !== this._time || l != !this._ts)
                        return this;
                    if (v = this._dur,
                    m = this._tDur,
                    _ && (this._lock = 2,
                    g = x ? v : -1e-4,
                    this.render(g, !0),
                    this.vars.repeatRefresh && !f && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !l)
                        return this;
                    ct(this, f);
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = function(t, e, n) {
                    var i;
                    if (e < n)
                        for (i = t._first; i && i._start <= n; ) {
                            if (!i._dur && "isPause" === i.data && i._start > e)
                                return i;
                            i = i._next;
                        }
                    else
                        for (i = t._last; i && i._start >= n; ) {
                            if (!i._dur && "isPause" === i.data && i._start < e)
                                return i;
                            i = i._prev;
                        }
                }(this, w(g), w(i))) && (y -= i - (i = c._start)),
                this._tTime = y,
                this._time = i,
                this._act = !d,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t),
                g || !i || e || be(this, "onStart"),
                g <= i && 0 <= t)
                    for (o = this._first; o; ) {
                        if (r = o._next,
                        (o._act || i >= o._start) && o._ts && c !== o) {
                            if (o.parent !== this)
                                return this.render(t, e, n);
                            if (o.render(0 < o._ts ? (i - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (i - o._start) * o._ts, e, n),
                            i !== this._time || !this._ts && !l) {
                                c = 0,
                                r && (y += this._zTime = -Nt);
                                break;
                            }
                        }
                        o = r;
                    }
                else {
                    o = this._last;
                    for (var S = t < 0 ? t : i; o; ) {
                        if (r = o._prev,
                        (o._act || S <= o._end) && o._ts && c !== o) {
                            if (o.parent !== this)
                                return this.render(t, e, n);
                            if (o.render(0 < o._ts ? (S - o._start) * o._ts : (o._dirty ? o.totalDuration() : o._tDur) + (S - o._start) * o._ts, e, n),
                            i !== this._time || !this._ts && !l) {
                                c = 0,
                                r && (y += this._zTime = S ? -Nt : Nt);
                                break;
                            }
                        }
                        o = r;
                    }
                }
                if (c && !e && (this.pause(),
                c.render(g <= i ? 0 : -Nt)._zTime = g <= i ? 1 : -1,
                this._ts))
                    return this._start = u,
                    R(this),
                    this.render(t, e, n);
                this._onUpdate && !e && be(this, "onUpdate", !0),
                (y === m && m >= this.totalDuration() || !y && g) && (u !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || (!t && v || !(y === m && 0 < this._ts || !y && this._ts < 0) || D(this, 1),
                e || t < 0 && !g || !y && !g || (be(this, y === m ? "onComplete" : "onReverseComplete", !0),
                !this._prom || y < m && 0 < this.timeScale() || this._prom())));
            }
            return this;
        }
        ,
        a.add = function(t, e) {
            var n = this;
            if (r(e) || (e = G(this, e)),
            !(t instanceof ze)) {
                if (Qt(t))
                    return t.forEach((function(t) {
                        return n.add(t, e);
                    }
                    )),
                    this;
                if (i(t))
                    return this.addLabel(t, e);
                if (!o(t))
                    return this;
                t = Ge.delayedCall(0, t);
            }
            return this !== t ? H(this, t, e) : this;
        }
        ,
        a.getChildren = function(t, e, n, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === n && (n = !0),
            void 0 === i && (i = -qt);
            for (var o = [], r = this._first; r; )
                r._start >= i && (r instanceof Ge ? e && o.push(r) : (n && o.push(r),
                t && o.push.apply(o, r.getChildren(!0, e, n)))),
                r = r._next;
            return o;
        }
        ,
        a.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
                if (e[n].vars.id === t)
                    return e[n];
        }
        ,
        a.remove = function(t) {
            return i(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (M(this, t),
            t === this._recent && (this._recent = this._last),
            L(this));
        }
        ,
        a.totalTime = function(e, n) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = w(Te.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
            t.prototype.totalTime.call(this, e, n),
            this._forcing = 0,
            this) : this._tTime;
        }
        ,
        a.addLabel = function(t, e) {
            return this.labels[t] = G(this, e),
            this;
        }
        ,
        a.removeLabel = function(t) {
            return delete this.labels[t],
            this;
        }
        ,
        a.addPause = function(t, e, n) {
            var i = Ge.delayedCall(0, e || g, n);
            return i.data = "isPause",
            this._hasPause = 1,
            H(this, i, G(this, t));
        }
        ,
        a.removePause = function(t) {
            var e = this._first;
            for (t = G(this, t); e; )
                e._start === t && "isPause" === e.data && D(e),
                e = e._next;
        }
        ,
        a.killTweensOf = function(t, e, n) {
            for (var i = this.getTweensOf(t, n), o = i.length; o--; )
                je !== i[o] && i[o].kill(t, e);
            return this;
        }
        ,
        a.getTweensOf = function(t, e) {
            for (var n, i = [], o = ve(t), s = this._first, a = r(e); s; )
                s instanceof Ge ? x(s._targets, o) && (a ? (!je || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (n = s.getTweensOf(o, e)).length && i.push.apply(i, n),
                s = s._next;
            return i;
        }
        ,
        a.tweenTo = function(t, e) {
            e = e || {};
            var n = this
              , i = G(n, t)
              , o = e.startAt
              , r = e.onStart
              , s = e.onStartParams
              , a = Ge.to(n, k(e, {
                ease: "none",
                lazy: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (o && "time"in o ? o.time : n._time)) / n.timeScale()) || Nt,
                onStart: function() {
                    n.pause();
                    var t = e.duration || Math.abs((i - n._time) / n.timeScale());
                    a._dur !== t && B(a, t, 0, 1).render(a._time, !0, !0),
                    r && r.apply(a, s || []);
                }
            }));
            return a;
        }
        ,
        a.tweenFromTo = function(t, e, n) {
            return this.tweenTo(e, k({
                startAt: {
                    time: G(this, t)
                }
            }, n));
        }
        ,
        a.recent = function() {
            return this._recent;
        }
        ,
        a.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            nt(this, G(this, t));
        }
        ,
        a.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            nt(this, G(this, t), 1);
        }
        ,
        a.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Nt);
        }
        ,
        a.shiftChildren = function(t, e, n) {
            void 0 === n && (n = 0);
            for (var i, o = this._first, r = this.labels; o; )
                o._start >= n && (o._start += t,
                o._end += t),
                o = o._next;
            if (e)
                for (i in r)
                    r[i] >= n && (r[i] += t);
            return L(this);
        }
        ,
        a.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e; )
                e.invalidate(),
                e = e._next;
            return t.prototype.invalidate.call(this);
        }
        ,
        a.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n; )
                e = n._next,
                this.remove(n),
                n = e;
            return this._time = this._tTime = this._pTime = 0,
            t && (this.labels = {}),
            L(this);
        }
        ,
        a.totalDuration = function(t) {
            var e, n, i, o = 0, r = this, s = r._last, a = qt;
            if (arguments.length)
                return r.timeScale((r._repeat < 0 ? r.duration() : r.totalDuration()) / (r.reversed() ? -t : t));
            if (r._dirty) {
                for (i = r.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    a < (n = s._start) && r._sort && s._ts && !r._lock ? (r._lock = 1,
                    H(r, s, n - s._delay, 1)._lock = 0) : a = n,
                    n < 0 && s._ts && (o -= n,
                    (!i && !r._dp || i && i.smoothChildTiming) && (r._start += n / r._ts,
                    r._time -= n,
                    r._tTime -= n),
                    r.shiftChildren(-n, !1, -1 / 0),
                    a = 0),
                    s._end > o && s._ts && (o = s._end),
                    s = e;
                B(r, r === ft && r._time > o ? r._time : o, 1, 1),
                r._dirty = 0;
            }
            return r._tDur;
        }
        ,
        s.updateRoot = function(t) {
            if (ft._ts && (T(ft, I(t, ft)),
            wt = Te.frame),
            Te.frame >= ce) {
                ce += jt.autoSleep || 120;
                var e = ft._first;
                if ((!e || !e._ts) && jt.autoSleep && Te._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || Te.sleep();
                }
            }
        }
        ,
        s;
    }(ze);
    function Fe(t, e, n, r, s, l) {
        var c, d, u, p;
        if (ae[t] && !1 !== (c = new ae[t]()).init(s, c.rawVars ? e[t] : function(t, e, n, r, s) {
            if (o(t) && (t = Ne(t, s, e, n, r)),
            !a(t) || t.style && t.nodeType || Qt(t) || Vt(t))
                return i(t) ? Ne(t, s, e, n, r) : t;
            var l, c = {};
            for (l in t)
                c[l] = Ne(t[l], s, e, n, r);
            return c;
        }(e[t], r, s, l, n), n, r, l) && (n._pt = d = new sn(n._pt,s,t,0,1,c.render,c,0,c.priority),
        n !== xt))
            for (u = n._ptLookup[n._targets.indexOf(s)],
            p = c._props.length; p--; )
                u[c._props[p]] = d;
        return c;
    }
    k(Re.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var je, He = function(t, e, n, r, s, a, l, c, d) {
        o(r) && (r = r(s || 0, t, a));
        var u, h = t[e], f = "get" !== n ? n : o(h) ? d ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](d) : t[e]() : h, g = o(h) ? d ? Qe : Ve : Xe;
        if (i(r) && (~r.indexOf("random(") && (r = et(r)),
        "=" === r.charAt(1) && (r = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (Y(f) || 0))),
        f !== r)
            return isNaN(f * r) ? (h || e in t || p(e, r),
            function(t, e, n, i, o, r, s) {
                var a, l, c, d, u, p, h, f, g = new sn(this._pt,t,e,0,1,tn,null,o), m = 0, v = 0;
                for (g.b = n,
                g.e = i,
                n += "",
                (h = ~(i += "").indexOf("random(")) && (i = et(i)),
                r && (r(f = [n, i], t, e),
                n = f[0],
                i = f[1]),
                l = n.match(te) || []; a = te.exec(i); )
                    d = a[0],
                    u = i.substring(m, a.index),
                    c ? c = (c + 1) % 5 : "rgba(" === u.substr(-5) && (c = 1),
                    d !== l[v++] && (p = parseFloat(l[v - 1]) || 0,
                    g._pt = {
                        _next: g._pt,
                        p: u || 1 === v ? u : ",",
                        s: p,
                        c: "=" === d.charAt(1) ? parseFloat(d.substr(2)) * ("-" === d.charAt(0) ? -1 : 1) : parseFloat(d) - p,
                        m: c && c < 4 ? Math.round : 0
                    },
                    m = te.lastIndex);
                return g.c = m < i.length ? i.substring(m, i.length) : "",
                g.fp = s,
                (ee.test(i) || h) && (g.e = 0),
                this._pt = g;
            }
            .call(this, t, e, f, r, g, c || jt.stringFilter, d)) : (u = new sn(this._pt,t,e,+f || 0,r - (f || 0),"boolean" == typeof h ? Je : Ke,0,g),
            d && (u.fp = d),
            l && u.modifier(l, this, t),
            this._pt = u);
    }, qe = function t(e, n) {
        var i, o, r, s, a, c, d, u, p, h, f, g, y, b = e.vars, w = b.ease, x = b.startAt, _ = b.immediateRender, T = b.lazy, $ = b.onUpdate, C = b.onUpdateParams, A = b.callbackScope, E = b.runBackwards, O = b.yoyoEase, M = b.keyframes, L = b.autoRevert, z = e._dur, I = e._startAt, R = e._targets, F = e.parent, j = F && "nested" === F.data ? F.parent._targets : R, H = "auto" === e._overwrite, q = e.timeline;
        if (!q || M && w || (w = "none"),
        e._ease = Pe(w, Ht.ease),
        e._yEase = O ? Ee(Pe(!0 === O ? w : O, Ht.ease)) : 0,
        O && e._yoyo && !e._repeat && (O = e._yEase,
        e._yEase = e._ease,
        e._ease = O),
        !q) {
            if (g = (u = R[0] ? v(R[0]).harness : 0) && b[u.prop],
            i = P(b, oe),
            I && I.render(-1, !0).kill(),
            x) {
                if (D(e._startAt = Ge.set(R, k({
                    data: "isStart",
                    overwrite: !1,
                    parent: F,
                    immediateRender: !0,
                    lazy: l(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: $,
                    onUpdateParams: C,
                    callbackScope: A,
                    stagger: 0
                }, x))),
                _)
                    if (0 < n)
                        L || (e._startAt = 0);
                    else {
                        if (z && !(n < 0 && I))
                            return void (n && (e._zTime = n));
                    }
            } else {
                if (E && z)
                    if (I)
                        L || (e._startAt = 0);
                    else if (n && (_ = !1),
                    r = k({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: _ && l(T),
                        immediateRender: _,
                        stagger: 0,
                        parent: F
                    }, i),
                    g && (r[u.prop] = g),
                    D(e._startAt = Ge.set(R, r)),
                    _) {
                        if (!n)
                            return;
                    } else
                        t(e._startAt, Nt);
            }
            for (e._pt = 0,
            T = z && l(T) || T && !z,
            o = 0; o < R.length; o++) {
                if (d = (a = R[o])._gsap || m(R)[o]._gsap,
                e._ptLookup[o] = h = {},
                se[d.id] && re.length && S(),
                f = j === R ? o : j.indexOf(a),
                u && !1 !== (p = new u()).init(a, g || i, e, f, j) && (e._pt = s = new sn(e._pt,a,p.name,0,1,p.render,p,0,p.priority),
                p._props.forEach((function(t) {
                    h[t] = s;
                }
                )),
                p.priority && (c = 1)),
                !u || g)
                    for (r in i)
                        ae[r] && (p = Fe(r, i, e, f, a, j)) ? p.priority && (c = 1) : h[r] = s = He.call(e, a, r, "get", i[r], f, j, 0, b.stringFilter);
                e._op && e._op[o] && e.kill(a, e._op[o]),
                H && e._pt && (je = e,
                ft.killTweensOf(a, h, e.globalTime(0)),
                y = !e.parent,
                je = 0),
                e._pt && T && (se[d.id] = 1);
            }
            c && rn(e),
            e._onInit && e._onInit(e);
        }
        e._from = !q && !!b.runBackwards,
        e._onUpdate = $,
        e._initted = (!e._op || e._pt) && !y;
    }, Ne = function(t, e, n, r, s) {
        return o(t) ? t.call(e, n, r, s) : i(t) && ~t.indexOf("random(") ? et(t) : t;
    }, Be = ue + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Ue = (Be + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Ge = function(t) {
        function o(e, i, o, s) {
            var c;
            "number" == typeof i && (o.duration = i,
            i = o,
            o = null);
            var u, p, f, v, y, b, x, _, S = (c = t.call(this, s ? i : O(i), o) || this).vars, T = S.duration, $ = S.delay, C = S.immediateRender, A = S.stagger, E = S.overwrite, P = S.keyframes, M = S.defaults, D = S.scrollTrigger, L = S.yoyoEase, z = c.parent, I = (Qt(e) || Vt(e) ? r(e[0]) : "length"in i) ? [e] : ve(e);
            if (c._targets = I.length ? m(I) : h("GSAP target " + e + " not found. https://greensock.com", !jt.nullTargetWarn) || [],
            c._ptLookup = [],
            c._overwrite = E,
            P || A || d(T) || d($)) {
                if (i = c.vars,
                (u = c.timeline = new Re({
                    data: "nested",
                    defaults: M || {}
                })).kill(),
                u.parent = n(c),
                P)
                    k(u.vars.defaults, {
                        ease: "none"
                    }),
                    P.forEach((function(t) {
                        return u.to(I, t, ">");
                    }
                    ));
                else {
                    if (v = I.length,
                    x = A ? Q(A) : g,
                    a(A))
                        for (y in A)
                            ~Be.indexOf(y) && ((_ = _ || {})[y] = A[y]);
                    for (p = 0; p < v; p++) {
                        for (y in f = {},
                        i)
                            Ue.indexOf(y) < 0 && (f[y] = i[y]);
                        f.stagger = 0,
                        L && (f.yoyoEase = L),
                        _ && pe(f, _),
                        b = I[p],
                        f.duration = +Ne(T, n(c), p, b, I),
                        f.delay = (+Ne($, n(c), p, b, I) || 0) - c._delay,
                        !A && 1 === v && f.delay && (c._delay = $ = f.delay,
                        c._start += $,
                        f.delay = 0),
                        u.to(b, f, x(p, b, I));
                    }
                    u.duration() ? T = $ = 0 : c.timeline = 0;
                }
                T || c.duration(T = u.duration());
            } else
                c.timeline = 0;
            return !0 === E && (je = n(c),
            ft.killTweensOf(I),
            je = 0),
            z && j(z, n(c)),
            (C || !T && !P && c._start === w(z._time) && l(C) && function t(e) {
                return !e || e._ts && t(e.parent);
            }(n(c)) && "nested" !== z.data) && (c._tTime = -Nt,
            c.render(Math.max(0, -$))),
            D && q(n(c), D),
            c;
        }
        e(o, t);
        var s = o.prototype;
        return s.render = function(t, e, n) {
            var i, o, r, s, a, l, c, d, u, p = this._time, h = this._tDur, f = this._dur, g = h - Nt < t && 0 <= t ? h : t < Nt ? 0 : t;
            if (f) {
                if (g !== this._tTime || !t || n || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = g,
                    d = this.timeline,
                    this._repeat) {
                        if (i = w(g % (s = f + this._rDelay)),
                        g === h ? (r = this._repeat,
                        i = f) : ((r = ~~(g / s)) && r === g / s && (i = f,
                        r--),
                        f < i && (i = f)),
                        (l = this._yoyo && 1 & r) && (u = this._yEase,
                        i = f - i),
                        a = he(this._tTime, s),
                        i === p && !n && this._initted)
                            return this;
                        r !== a && (d && this._yEase && ct(d, l),
                        !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1,
                        this.render(w(s * r), !0).invalidate()._lock = 0));
                    }
                    if (!this._initted) {
                        if (N(this, t < 0 ? t : i, n, e))
                            return this._tTime = 0,
                            this;
                        if (f !== this._dur)
                            return this.render(t, e, n);
                    }
                    for (this._tTime = g,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = c = (u || this._ease)(i / f),
                    this._from && (this.ratio = c = 1 - c),
                    !i || p || e || be(this, "onStart"),
                    o = this._pt; o; )
                        o.r(c, o.d),
                        o = o._next;
                    d && d.render(t < 0 ? t : !i && l ? -Nt : d._dur * c, e, n) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                    be(this, "onUpdate")),
                    this._repeat && r !== a && this.vars.onRepeat && !e && this.parent && be(this, "onRepeat"),
                    g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    !t && f || !(g === this._tDur && 0 < this._ts || !g && this._ts < 0) || D(this, 1),
                    e || t < 0 && !p || !g && !p || (be(this, g === h ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || g < h && 0 < this.timeScale() || this._prom()));
                }
            } else
                !function(t, e, n, i) {
                    var o, r, s = t.ratio, a = e < 0 || !e && s && !t._start && t._zTime > Nt && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1, l = t._rDelay, c = 0;
                    if (l && t._repeat && (c = ge(0, t._tDur, e),
                    he(c, l) !== (r = he(t._tTime, l)) && (s = 1 - a,
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                    a !== s || i || t._zTime === Nt || !e && t._zTime) {
                        if (!t._initted && N(t, e, i, n))
                            return;
                        for (r = t._zTime,
                        t._zTime = e || (n ? Nt : 0),
                        n = n || e && !r,
                        t.ratio = a,
                        t._from && (a = 1 - a),
                        t._time = 0,
                        t._tTime = c,
                        n || be(t, "onStart"),
                        o = t._pt; o; )
                            o.r(a, o.d),
                            o = o._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                        t._onUpdate && !n && be(t, "onUpdate"),
                        c && t._repeat && !n && t.parent && be(t, "onRepeat"),
                        (e >= t._tDur || e < 0) && t.ratio === a && (a && D(t, 1),
                        n || (be(t, a ? "onComplete" : "onReverseComplete", !0),
                        t._prom && t._prom()));
                    } else
                        t._zTime || (t._zTime = e);
                }(this, t, e, n);
            return this;
        }
        ,
        s.targets = function() {
            return this._targets;
        }
        ,
        s.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this);
        }
        ,
        s.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !(t || e && "all" !== e) && (this._lazy = 0,
            this.parent))
                return it(this);
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, je && !0 !== je.vars.overwrite)._first || it(this),
                this.parent && n !== this.timeline.totalDuration() && B(this, this._dur * this.timeline._tDur / n, 0, 1),
                this;
            }
            var o, r, s, a, l, c, d, u = this._targets, p = t ? ve(t) : u, h = this._ptLookup, f = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n]; )
                    ;
                return n < 0;
            }(u, p))
                return "all" === e && (this._pt = 0),
                it(this);
            for (o = this._op = this._op || [],
            "all" !== e && (i(e) && (l = {},
            b(e, (function(t) {
                return l[t] = 1;
            }
            )),
            e = l),
            e = function(t, e) {
                var n, i, o, r, s = t[0] ? v(t[0]).harness : 0, a = s && s.aliases;
                if (!a)
                    return e;
                for (i in n = pe({}, e),
                a)
                    if (i in n)
                        for (o = (r = a[i].split(",")).length; o--; )
                            n[r[o]] = n[i];
                return n;
            }(u, e)),
            d = u.length; d--; )
                if (~p.indexOf(u[d]))
                    for (l in r = h[d],
                    "all" === e ? (o[d] = e,
                    a = r,
                    s = {}) : (s = o[d] = o[d] || {},
                    a = e),
                    a)
                        (c = r && r[l]) && ("kill"in c.d && !0 !== c.d.kill(l) || M(this, c, "_pt"),
                        delete r[l]),
                        "all" !== s && (s[l] = 1);
            return this._initted && !this._pt && f && it(this),
            this;
        }
        ,
        o.to = function(t, e, n) {
            return new o(t,e,n);
        }
        ,
        o.from = function(t, e) {
            return new o(t,_(arguments, 1));
        }
        ,
        o.delayedCall = function(t, e, n, i) {
            return new o(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: n,
                onReverseCompleteParams: n,
                callbackScope: i
            });
        }
        ,
        o.fromTo = function(t, e, n) {
            return new o(t,_(arguments, 2));
        }
        ,
        o.set = function(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new o(t,e);
        }
        ,
        o.killTweensOf = function(t, e, n) {
            return ft.killTweensOf(t, e, n);
        }
        ,
        o;
    }(ze);
    function We(t, e, n) {
        return t.setAttribute(e, n);
    }
    function Ye(t, e, n, i) {
        i.mSet(t, e, i.m.call(i.tween, n, i.mt), i);
    }
    k(Ge.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    b("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        Ge[t] = function() {
            var e = new Re()
              , n = me.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, n);
        }
        ;
    }
    ));
    var Xe = function(t, e, n) {
        return t[e] = n;
    }
      , Ve = function(t, e, n) {
        return t[e](n);
    }
      , Qe = function(t, e, n, i) {
        return t[e](i.fp, n);
    }
      , Ze = function(t, e) {
        return o(t[e]) ? Ve : s(t[e]) && t.setAttribute ? We : Xe;
    }
      , Ke = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    }
      , Je = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    }
      , tn = function(t, e) {
        var n = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; n; )
                i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i,
                n = n._next;
            i += e.c;
        }
        e.set(e.t, e.p, i, e);
    }
      , en = function(t, e) {
        for (var n = e._pt; n; )
            n.r(t, n.d),
            n = n._next;
    }
      , nn = function(t, e, n, i) {
        for (var o, r = this._pt; r; )
            o = r._next,
            r.p === i && r.modifier(t, e, n),
            r = o;
    }
      , on = function(t) {
        for (var e, n, i = this._pt; i; )
            n = i._next,
            i.p === t && !i.op || i.op === t ? M(this, i, "_pt") : i.dep || (e = 1),
            i = n;
        return !e;
    }
      , rn = function(t) {
        for (var e, n, i, o, r = t._pt; r; ) {
            for (e = r._next,
            n = i; n && n.pr > r.pr; )
                n = n._next;
            (r._prev = n ? n._prev : o) ? r._prev._next = r : i = r,
            (r._next = n) ? n._prev = r : o = r,
            r = e;
        }
        t._pt = i;
    }
      , sn = (an.prototype.modifier = function(t, e, n) {
        this.mSet = this.mSet || this.set,
        this.set = Ye,
        this.m = t,
        this.mt = n,
        this.tween = e;
    }
    ,
    an);
    function an(t, e, n, i, o, r, s, a, l) {
        this.t = e,
        this.s = i,
        this.c = o,
        this.p = n,
        this.r = r || Ke,
        this.d = s || this,
        this.set = a || Xe,
        this.pr = l || 0,
        (this._next = t) && (t._prev = this);
    }
    b(ue + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return oe[t] = 1;
    }
    )),
    ie.TweenMax = ie.TweenLite = Ge,
    ie.TimelineLite = ie.TimelineMax = Re,
    ft = new Re({
        sortChildren: !1,
        defaults: Ht,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    jt.stringFilter = lt;
    var ln = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach((function(t) {
                return function(t) {
                    var e = (t = !t.name && t.default || t).name
                      , n = o(t)
                      , i = e && !n && t.init ? function() {
                        this._props = [];
                    }
                    : t
                      , r = {
                        init: g,
                        render: en,
                        add: He,
                        kill: on,
                        modifier: nn,
                        rawVars: 0
                    }
                      , s = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Ze,
                        aliases: {},
                        register: 0
                    };
                    if ($e(),
                    t !== i) {
                        if (ae[e])
                            return;
                        k(i, k(P(t, r), s)),
                        pe(i.prototype, pe(r, P(t, s))),
                        ae[i.prop = e] = i,
                        t.targetTest && (de.push(i),
                        oe[e] = 1),
                        e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
                    }
                    f(e, i),
                    t.register && t.register(un, i, sn);
                }(t);
            }
            ));
        },
        timeline: function(t) {
            return new Re(t);
        },
        getTweensOf: function(t, e) {
            return ft.getTweensOf(t, e);
        },
        getProperty: function(t, e, n, o) {
            i(t) && (t = ve(t)[0]);
            var r = v(t || {}).get
              , s = n ? C : $;
            return "native" === n && (n = ""),
            t ? e ? s((ae[e] && ae[e].get || r)(t, e, n, o)) : function(e, n, i) {
                return s((ae[e] && ae[e].get || r)(t, e, n, i));
            }
            : t;
        },
        quickSetter: function(t, e, n) {
            if (1 < (t = ve(t)).length) {
                var i = t.map((function(t) {
                    return un.quickSetter(t, e, n);
                }
                ))
                  , o = i.length;
                return function(t) {
                    for (var e = o; e--; )
                        i[e](t);
                }
                ;
            }
            t = t[0] || {};
            var r = ae[e]
              , s = v(t)
              , a = s.harness && (s.harness.aliases || {})[e] || e
              , l = r ? function(e) {
                var i = new r();
                xt._pt = 0,
                i.init(t, n ? e + n : e, xt, 0, [t]),
                i.render(1, i),
                xt._pt && en(1, xt);
            }
            : s.set(t, a);
            return r ? l : function(e) {
                return l(t, a, n ? e + n : e, s, 1);
            }
            ;
        },
        isTweening: function(t) {
            return 0 < ft.getTweensOf(t, !0).length;
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Pe(t.ease, Ht.ease)),
            E(Ht, t || {});
        },
        config: function(t) {
            return E(jt, t || {});
        },
        registerEffect: function(t) {
            var e = t.name
              , n = t.effect
              , i = t.plugins
              , o = t.defaults
              , r = t.extendTimeline;
            (i || "").split(",").forEach((function(t) {
                return t && !ae[t] && !ie[t] && h(e + " effect requires " + t + " plugin.");
            }
            )),
            le[e] = function(t, e, i) {
                return n(ve(t), k(e || {}, o), i);
            }
            ,
            r && (Re.prototype[e] = function(t, n, i) {
                return this.add(le[e](t, a(n) ? n : (i = n) && {}, this), i);
            }
            );
        },
        registerEase: function(t, e) {
            Ce[t] = Pe(e);
        },
        parseEase: function(t, e) {
            return arguments.length ? Pe(t, e) : Ce;
        },
        getById: function(t) {
            return ft.getById(t);
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, i, o = new Re(t);
            for (o.smoothChildTiming = l(t.smoothChildTiming),
            ft.remove(o),
            o._dp = 0,
            o._time = o._tTime = ft._time,
            n = ft._first; n; )
                i = n._next,
                !e && !n._dur && n instanceof Ge && n.vars.onComplete === n._targets[0] || H(o, n, n._start - n._delay),
                n = i;
            return H(ft, o, 0),
            o;
        },
        utils: {
            wrap: function t(e, n, i) {
                var o = n - e;
                return Qt(e) ? tt(e, t(0, e.length), n) : W(i, (function(t) {
                    return (o + (t - e) % o) % o + e;
                }
                ));
            },
            wrapYoyo: function t(e, n, i) {
                var o = n - e
                  , r = 2 * o;
                return Qt(e) ? tt(e, t(0, e.length - 1), n) : W(i, (function(t) {
                    return e + (o < (t = (r + (t - e) % r) % r || 0) ? r - t : t);
                }
                ));
            },
            distribute: Q,
            random: J,
            snap: K,
            normalize: function(t, e, n) {
                return ye(t, e, 0, 1, n);
            },
            getUnit: Y,
            clamp: function(t, e, n) {
                return W(n, (function(n) {
                    return ge(t, e, n);
                }
                ));
            },
            splitColor: rt,
            toArray: ve,
            mapRange: ye,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t);
                    }
                    ), t);
                }
                ;
            },
            unitize: function(t, e) {
                return function(n) {
                    return t(parseFloat(n)) + (e || Y(n));
                }
                ;
            },
            interpolate: function t(e, n, o, r) {
                var s = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n;
                }
                ;
                if (!s) {
                    var a, l, c, d, u, p = i(e), h = {};
                    if (!0 === o && (r = 1) && (o = null),
                    p)
                        e = {
                            p: e
                        },
                        n = {
                            p: n
                        };
                    else if (Qt(e) && !Qt(n)) {
                        for (c = [],
                        d = e.length,
                        u = d - 2,
                        l = 1; l < d; l++)
                            c.push(t(e[l - 1], e[l]));
                        d--,
                        s = function(t) {
                            t *= d;
                            var e = Math.min(u, ~~t);
                            return c[e](t - e);
                        }
                        ,
                        o = n;
                    } else
                        r || (e = pe(Qt(e) ? [] : {}, e));
                    if (!c) {
                        for (a in n)
                            He.call(h, e, a, "get", n[a]);
                        s = function(t) {
                            return en(t, h) || (p ? e.p : e);
                        }
                        ;
                    }
                }
                return W(o, s);
            },
            shuffle: V
        },
        install: u,
        effects: le,
        ticker: Te,
        updateRoot: Re.updateRoot,
        plugins: ae,
        globalTimeline: ft,
        core: {
            PropTween: sn,
            globals: f,
            Tween: Ge,
            Timeline: Re,
            Animation: ze,
            getCache: v,
            _removeLinkedListItem: M
        }
    };
    function cn(t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next;
        return n;
    }
    function dn(t, e) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, n, o) {
                o._onInit = function(t) {
                    var o, r;
                    if (i(n) && (o = {},
                    b(n, (function(t) {
                        return o[t] = 1;
                    }
                    )),
                    n = o),
                    e) {
                        for (r in o = {},
                        n)
                            o[r] = e(n[r]);
                        n = o;
                    }
                    !function(t, e) {
                        var n, i, o, r = t._targets;
                        for (n in e)
                            for (i = r.length; i--; )
                                (o = (o = t._ptLookup[i][n]) && o.d) && (o._pt && (o = cn(o, n)),
                                o && o.modifier && o.modifier(e[n], t, r[i], n));
                    }(t, n);
                }
                ;
            }
        };
    }
    b("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return ln[t] = Ge[t];
    }
    )),
    Te.add(Re.updateRoot),
    xt = ln.to({}, {
        duration: 0
    });
    var un = ln.registerPlugin({
        name: "attr",
        init: function(t, e, n, i, o) {
            var r, s;
            for (r in e)
                (s = this.add(t, "setAttribute", (t.getAttribute(r) || 0) + "", e[r], i, o, 0, 0, r)) && (s.op = r),
                this._props.push(r);
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var n = e.length; n--; )
                this.add(t, n, t[n] || 0, e[n]);
        }
    }, dn("roundProps", Z), dn("modifiers"), dn("snap", K)) || ln;
    function pn(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function hn(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function fn(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
    }
    function gn(t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e);
    }
    function mn(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function vn(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function yn(t, e, n) {
        return t.style[e] = n;
    }
    function bn(t, e, n) {
        return t.style.setProperty(e, n);
    }
    function wn(t, e, n) {
        return t._gsap[e] = n;
    }
    function xn(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n;
    }
    function _n(t, e, n, i, o) {
        var r = t._gsap;
        r.scaleX = r.scaleY = n,
        r.renderTransform(o, r);
    }
    function Sn(t, e, n, i, o) {
        var r = t._gsap;
        r[e] = n,
        r.renderTransform(o, r);
    }
    function Tn(t, e) {
        var n = Wn.createElementNS ? Wn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Wn.createElement(t);
        return n.style ? n : Wn.createElement(t);
    }
    function $n(t, e, n) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(xi, "-$1").toLowerCase()) || i.getPropertyValue(e) || !n && $n(t, Ai(e) || e, 1) || "";
    }
    function Cn() {
        "undefined" != typeof window && window.document && (Gn = window,
        Wn = Gn.document,
        Yn = Wn.documentElement,
        Vn = Tn("div") || {
            style: {}
        },
        Qn = Tn("div"),
        $i = Ai($i),
        Ci = $i + "Origin",
        Vn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Kn = !!Ai("perspective"),
        Xn = 1);
    }
    function kn(t) {
        var e, n = Tn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, o = this.nextSibling, r = this.style.cssText;
        if (Yn.appendChild(n),
        n.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = kn;
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
        Yn.removeChild(n),
        this.style.cssText = r,
        e;
    }
    function An(t, e) {
        for (var n = e.length; n--; )
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n]);
    }
    function En(t) {
        var e;
        try {
            e = t.getBBox();
        } catch (n) {
            e = kn.call(t, !0);
        }
        return e && (e.width || e.height) || t.getBBox === kn || (e = kn.call(t, !0)),
        !e || e.width || e.x || e.y ? e : {
            x: +An(t, ["x", "cx", "x1"]) || 0,
            y: +An(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        };
    }
    function Pn(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !En(t));
    }
    function On(t, e) {
        if (e) {
            var n = t.style;
            e in vi && e !== Ci && (e = $i),
            n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            n.removeProperty(e.replace(xi, "-$1").toLowerCase())) : n.removeAttribute(e);
        }
    }
    function Mn(t, e, n, i, o, r) {
        var s = new sn(t._pt,e,n,0,1,r ? vn : mn);
        return (t._pt = s).b = i,
        s.e = o,
        t._props.push(n),
        s;
    }
    function Dn(t, e, n, i) {
        var o, r, s, a, l = parseFloat(n) || 0, c = (n + "").trim().substr((l + "").length) || "px", d = Vn.style, u = _i.test(e), p = "svg" === t.tagName.toLowerCase(), h = (p ? "client" : "offset") + (u ? "Width" : "Height"), f = "px" === i, g = "%" === i;
        return i === c || !l || Ei[i] || Ei[c] ? l : ("px" === c || f || (l = Dn(t, e, n, "px")),
        a = t.getCTM && Pn(t),
        g && (vi[e] || ~e.indexOf("adius")) ? w(l / (a ? t.getBBox()[u ? "width" : "height"] : t[h]) * 100) : (d[u ? "width" : "height"] = 100 + (f ? c : i),
        r = ~e.indexOf("adius") || "em" === i && t.appendChild && !p ? t : t.parentNode,
        a && (r = (t.ownerSVGElement || {}).parentNode),
        r && r !== Wn && r.appendChild || (r = Wn.body),
        (s = r._gsap) && g && s.width && u && s.time === Te.time ? w(l / s.width * 100) : (!g && "%" !== c || (d.position = $n(t, "position")),
        r === t && (d.position = "static"),
        r.appendChild(Vn),
        o = Vn[h],
        r.removeChild(Vn),
        d.position = "absolute",
        u && g && ((s = v(r)).time = Te.time,
        s.width = r[h]),
        w(f ? o * l / 100 : o && l ? 100 / o * l : 0))));
    }
    function Ln(t, e, n, i) {
        var o;
        return Xn || Cn(),
        e in Ti && "transform" !== e && ~(e = Ti[e]).indexOf(",") && (e = e.split(",")[0]),
        vi[e] && "transform" !== e ? (o = Li(t, i),
        o = "transformOrigin" !== e ? o[e] : zi($n(t, Ci)) + " " + o.zOrigin + "px") : (o = t.style[e]) && "auto" !== o && !i && !~(o + "").indexOf("calc(") || (o = Oi[e] && Oi[e](t, e, n) || $n(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)),
        n && !~(o + "").indexOf(" ") ? Dn(t, e, o, n) + n : o;
    }
    function zn(t, e, n, i) {
        if (!n || "none" === n) {
            var o = Ai(e, t, 1)
              , r = o && $n(t, o, 1);
            r && r !== n ? (e = o,
            n = r) : "borderColor" === e && (n = $n(t, "borderTopColor"));
        }
        var s, a, l, c, d, u, p, h, f, g, m, v, y = new sn(this._pt,t.style,e,0,1,tn), b = 0, w = 0;
        if (y.b = n,
        y.e = i,
        n += "",
        "auto" == (i += "") && (t.style[e] = i,
        i = $n(t, e) || i,
        t.style[e] = n),
        lt(s = [n, i]),
        i = s[1],
        l = (n = s[0]).match(Jt) || [],
        (i.match(Jt) || []).length) {
            for (; a = Jt.exec(i); )
                p = a[0],
                f = i.substring(b, a.index),
                d ? d = (d + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (d = 1),
                p !== (u = l[w++] || "") && (c = parseFloat(u) || 0,
                m = u.substr((c + "").length),
                (v = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                h = parseFloat(p),
                g = p.substr((h + "").length),
                b = Jt.lastIndex - g.length,
                g || (g = g || jt.units[e] || m,
                b === i.length && (i += g,
                y.e += g)),
                m !== g && (c = Dn(t, e, u, g) || 0),
                y._pt = {
                    _next: y._pt,
                    p: f || 1 === w ? f : ",",
                    s: c,
                    c: v ? v * h : h - c,
                    m: d && d < 4 ? Math.round : 0
                });
            y.c = b < i.length ? i.substring(b, i.length) : "";
        } else
            y.r = "display" === e && "none" === i ? vn : mn;
        return ee.test(i) && (y.e = 0),
        this._pt = y;
    }
    function In(t) {
        var e = t.split(" ")
          , n = e[0]
          , i = e[1] || "50%";
        return "top" !== n && "bottom" !== n && "left" !== i && "right" !== i || (t = n,
        n = i,
        i = t),
        e[0] = Pi[n] || n,
        e[1] = Pi[i] || i,
        e.join(" ");
    }
    function Rn(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, i, o, r = e.t, s = r.style, a = e.u, l = r._gsap;
            if ("all" === a || !0 === a)
                s.cssText = "",
                i = 1;
            else
                for (o = (a = a.split(",")).length; -1 < --o; )
                    n = a[o],
                    vi[n] && (i = 1,
                    n = "transformOrigin" === n ? Ci : $i),
                    On(r, n);
            i && (On(r, $i),
            l && (l.svg && r.removeAttribute("transform"),
            Li(r, 1),
            l.uncache = 1));
        }
    }
    function Fn(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function jn(t) {
        var e = $n(t, $i);
        return Fn(e) ? Mi : e.substr(7).match(Kt).map(w);
    }
    function Hn(t, e) {
        var n, i, o, r, s = t._gsap || v(t), a = t.style, l = jn(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(o = t.transform.baseVal.consolidate().matrix).a, o.b, o.c, o.d, o.e, o.f]).join(",") ? Mi : l : (l !== Mi || t.offsetParent || t === Yn || s.svg || (o = a.display,
        a.display = "block",
        (n = t.parentNode) && t.offsetParent || (r = 1,
        i = t.nextSibling,
        Yn.appendChild(t)),
        l = jn(t),
        o ? a.display = o : On(t, "display"),
        r && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : Yn.removeChild(t))),
        e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
    }
    function qn(t, e, n, i, o, r) {
        var s, a, l, c = t._gsap, d = o || Hn(t, !0), u = c.xOrigin || 0, p = c.yOrigin || 0, h = c.xOffset || 0, f = c.yOffset || 0, g = d[0], m = d[1], v = d[2], y = d[3], b = d[4], w = d[5], x = e.split(" "), _ = parseFloat(x[0]) || 0, S = parseFloat(x[1]) || 0;
        n ? d !== Mi && (a = g * y - m * v) && (l = _ * (-m / a) + S * (g / a) - (g * w - m * b) / a,
        _ = _ * (y / a) + S * (-v / a) + (v * w - y * b) / a,
        S = l) : (_ = (s = En(t)).x + (~x[0].indexOf("%") ? _ / 100 * s.width : _),
        S = s.y + (~(x[1] || x[0]).indexOf("%") ? S / 100 * s.height : S)),
        i || !1 !== i && c.smooth ? (b = _ - u,
        w = S - p,
        c.xOffset = h + (b * g + w * v) - b,
        c.yOffset = f + (b * m + w * y) - w) : c.xOffset = c.yOffset = 0,
        c.xOrigin = _,
        c.yOrigin = S,
        c.smooth = !!i,
        c.origin = e,
        c.originIsAbsolute = !!n,
        t.style[Ci] = "0px 0px",
        r && (Mn(r, c, "xOrigin", u, _),
        Mn(r, c, "yOrigin", p, S),
        Mn(r, c, "xOffset", h, c.xOffset),
        Mn(r, c, "yOffset", f, c.yOffset)),
        t.setAttribute("data-svg-origin", _ + " " + S);
    }
    function Nn(t, e, n) {
        var i = Y(e);
        return w(parseFloat(e) + parseFloat(Dn(t, "x", n + "px", i))) + i;
    }
    function Bn(t, e, n, o, r, s) {
        var a, l, c = 360, d = i(r), u = parseFloat(r) * (d && ~r.indexOf("rad") ? yi : 1), p = s ? u * s : u - o, h = o + p + "deg";
        return d && ("short" === (a = r.split("_")[1]) && (p %= c) != p % 180 && (p += p < 0 ? c : -c),
        "cw" === a && p < 0 ? p = (p + 36e9) % c - ~~(p / c) * c : "ccw" === a && 0 < p && (p = (p - 36e9) % c - ~~(p / c) * c)),
        t._pt = l = new sn(t._pt,e,n,o,p,hn),
        l.e = h,
        l.u = "deg",
        t._props.push(n),
        l;
    }
    function Un(t, e, n) {
        var i, o, r, s, a, l, c, d = Qn.style, u = n._gsap;
        for (o in d.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;",
        d[$i] = e,
        Wn.body.appendChild(Qn),
        i = Li(Qn, 1),
        vi)
            (r = u[o]) !== (s = i[o]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) < 0 && (a = Y(r) !== (c = Y(s)) ? Dn(n, o, r, c) : parseFloat(r),
            l = parseFloat(s),
            t._pt = new sn(t._pt,u,o,a,l - a,pn),
            t._pt.u = c || 0,
            t._props.push(o));
        Wn.body.removeChild(Qn);
    }
    Ge.version = Re.version = un.version = "3.5.1",
    bt = 1,
    c() && $e();
    var Gn, Wn, Yn, Xn, Vn, Qn, Zn, Kn, Jn = Ce.Power0, ti = Ce.Power1, ei = Ce.Power2, ni = Ce.Power3, ii = Ce.Power4, oi = Ce.Linear, ri = Ce.Quad, si = Ce.Cubic, ai = Ce.Quart, li = Ce.Quint, ci = Ce.Strong, di = Ce.Elastic, ui = Ce.Back, pi = Ce.SteppedEase, hi = Ce.Bounce, fi = Ce.Sine, gi = Ce.Expo, mi = Ce.Circ, vi = {}, yi = 180 / Math.PI, bi = Math.PI / 180, wi = Math.atan2, xi = /([A-Z])/g, _i = /(?:left|right|width|margin|padding|x)/i, Si = /[\s,\(]\S/, Ti = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, $i = "transform", Ci = $i + "Origin", ki = "O,Moz,ms,Ms,Webkit".split(","), Ai = function(t, e, n) {
        var i = (e || Vn).style
          , o = 5;
        if (t in i && !n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(ki[o] + t in i); )
            ;
        return o < 0 ? null : (3 === o ? "ms" : 0 <= o ? ki[o] : "") + t;
    }, Ei = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Pi = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Oi = {
        clearProps: function(t, e, n, i, o) {
            if ("isFromStart" !== o.data) {
                var r = t._pt = new sn(t._pt,e,n,0,0,Rn);
                return r.u = i,
                r.pr = -10,
                r.tween = o,
                t._props.push(n),
                1;
            }
        }
    }, Mi = [1, 0, 0, 1, 0, 0], Di = {}, Li = function(t, e) {
        var n = t._gsap || new Le(t);
        if ("x"in n && !e && !n.uncache)
            return n;
        var i, o, r, s, a, l, c, d, u, p, h, f, g, m, v, y, b, x, _, S, T, $, C, k, A, E, P, O, M, D, L, z, I = t.style, R = n.scaleX < 0, F = "deg", j = $n(t, Ci) || "0";
        return i = o = r = l = c = d = u = p = h = 0,
        s = a = 1,
        n.svg = !(!t.getCTM || !Pn(t)),
        m = Hn(t, n.svg),
        n.svg && (k = !n.uncache && t.getAttribute("data-svg-origin"),
        qn(t, k || j, !!k || n.originIsAbsolute, !1 !== n.smooth, m)),
        f = n.xOrigin || 0,
        g = n.yOrigin || 0,
        m !== Mi && (x = m[0],
        _ = m[1],
        S = m[2],
        T = m[3],
        i = $ = m[4],
        o = C = m[5],
        6 === m.length ? (s = Math.sqrt(x * x + _ * _),
        a = Math.sqrt(T * T + S * S),
        l = x || _ ? wi(_, x) * yi : 0,
        (u = S || T ? wi(S, T) * yi + l : 0) && (a *= Math.cos(u * bi)),
        n.svg && (i -= f - (f * x + g * S),
        o -= g - (f * _ + g * T))) : (z = m[6],
        D = m[7],
        P = m[8],
        O = m[9],
        M = m[10],
        L = m[11],
        i = m[12],
        o = m[13],
        r = m[14],
        c = (v = wi(z, M)) * yi,
        v && (k = $ * (y = Math.cos(-v)) + P * (b = Math.sin(-v)),
        A = C * y + O * b,
        E = z * y + M * b,
        P = $ * -b + P * y,
        O = C * -b + O * y,
        M = z * -b + M * y,
        L = D * -b + L * y,
        $ = k,
        C = A,
        z = E),
        d = (v = wi(-S, M)) * yi,
        v && (y = Math.cos(-v),
        L = T * (b = Math.sin(-v)) + L * y,
        x = k = x * y - P * b,
        _ = A = _ * y - O * b,
        S = E = S * y - M * b),
        l = (v = wi(_, x)) * yi,
        v && (k = x * (y = Math.cos(v)) + _ * (b = Math.sin(v)),
        A = $ * y + C * b,
        _ = _ * y - x * b,
        C = C * y - $ * b,
        x = k,
        $ = A),
        c && 359.9 < Math.abs(c) + Math.abs(l) && (c = l = 0,
        d = 180 - d),
        s = w(Math.sqrt(x * x + _ * _ + S * S)),
        a = w(Math.sqrt(C * C + z * z)),
        v = wi($, C),
        u = 2e-4 < Math.abs(v) ? v * yi : 0,
        h = L ? 1 / (L < 0 ? -L : L) : 0),
        n.svg && (k = t.getAttribute("transform"),
        n.forceCSS = t.setAttribute("transform", "") || !Fn($n(t, $i)),
        k && t.setAttribute("transform", k))),
        90 < Math.abs(u) && Math.abs(u) < 270 && (R ? (s *= -1,
        u += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (a *= -1,
        u += u <= 0 ? 180 : -180)),
        n.x = ((n.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px",
        n.y = ((n.yPercent = o && Math.round(t.offsetHeight / 2) === Math.round(-o) ? -50 : 0) ? 0 : o) + "px",
        n.z = r + "px",
        n.scaleX = w(s),
        n.scaleY = w(a),
        n.rotation = w(l) + F,
        n.rotationX = w(c) + F,
        n.rotationY = w(d) + F,
        n.skewX = u + F,
        n.skewY = p + F,
        n.transformPerspective = h + "px",
        (n.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (I[Ci] = zi(j)),
        n.xOffset = n.yOffset = 0,
        n.force3D = jt.force3D,
        n.renderTransform = n.svg ? qi : Kn ? Hi : Ii,
        n.uncache = 0,
        n;
    }, zi = function(t) {
        return (t = t.split(" "))[0] + " " + t[1];
    }, Ii = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        Hi(t, e);
    }, Ri = "0deg", Fi = "0px", ji = ") ", Hi = function(t, e) {
        var n = e || this
          , i = n.xPercent
          , o = n.yPercent
          , r = n.x
          , s = n.y
          , a = n.z
          , l = n.rotation
          , c = n.rotationY
          , d = n.rotationX
          , u = n.skewX
          , p = n.skewY
          , h = n.scaleX
          , f = n.scaleY
          , g = n.transformPerspective
          , m = n.force3D
          , v = n.target
          , y = n.zOrigin
          , b = ""
          , w = "auto" === m && t && 1 !== t || !0 === m;
        if (y && (d !== Ri || c !== Ri)) {
            var x, _ = parseFloat(c) * bi, S = Math.sin(_), T = Math.cos(_);
            _ = parseFloat(d) * bi,
            r = Nn(v, r, S * (x = Math.cos(_)) * -y),
            s = Nn(v, s, -Math.sin(_) * -y),
            a = Nn(v, a, T * x * -y + y);
        }
        g !== Fi && (b += "perspective(" + g + ji),
        (i || o) && (b += "translate(" + i + "%, " + o + "%) "),
        !w && r === Fi && s === Fi && a === Fi || (b += a !== Fi || w ? "translate3d(" + r + ", " + s + ", " + a + ") " : "translate(" + r + ", " + s + ji),
        l !== Ri && (b += "rotate(" + l + ji),
        c !== Ri && (b += "rotateY(" + c + ji),
        d !== Ri && (b += "rotateX(" + d + ji),
        u === Ri && p === Ri || (b += "skew(" + u + ", " + p + ji),
        1 === h && 1 === f || (b += "scale(" + h + ", " + f + ji),
        v.style[$i] = b || "translate(0, 0)";
    }, qi = function(t, e) {
        var n, i, o, r, s, a = e || this, l = a.xPercent, c = a.yPercent, d = a.x, u = a.y, p = a.rotation, h = a.skewX, f = a.skewY, g = a.scaleX, m = a.scaleY, v = a.target, y = a.xOrigin, b = a.yOrigin, x = a.xOffset, _ = a.yOffset, S = a.forceCSS, T = parseFloat(d), $ = parseFloat(u);
        p = parseFloat(p),
        h = parseFloat(h),
        (f = parseFloat(f)) && (h += f = parseFloat(f),
        p += f),
        p || h ? (p *= bi,
        h *= bi,
        n = Math.cos(p) * g,
        i = Math.sin(p) * g,
        o = Math.sin(p - h) * -m,
        r = Math.cos(p - h) * m,
        h && (f *= bi,
        s = Math.tan(h - f),
        o *= s = Math.sqrt(1 + s * s),
        r *= s,
        f && (s = Math.tan(f),
        n *= s = Math.sqrt(1 + s * s),
        i *= s)),
        n = w(n),
        i = w(i),
        o = w(o),
        r = w(r)) : (n = g,
        r = m,
        i = o = 0),
        (T && !~(d + "").indexOf("px") || $ && !~(u + "").indexOf("px")) && (T = Dn(v, "x", d, "px"),
        $ = Dn(v, "y", u, "px")),
        (y || b || x || _) && (T = w(T + y - (y * n + b * o) + x),
        $ = w($ + b - (y * i + b * r) + _)),
        (l || c) && (T = w(T + l / 100 * (s = v.getBBox()).width),
        $ = w($ + c / 100 * s.height)),
        s = "matrix(" + n + "," + i + "," + o + "," + r + "," + T + "," + $ + ")",
        v.setAttribute("transform", s),
        S && (v.style[$i] = s);
    };
    b("padding,margin,Width,Radius", (function(t, e) {
        var n = "Right"
          , i = "Bottom"
          , o = "Left"
          , r = (e < 3 ? ["Top", n, i, o] : ["Top" + o, "Top" + n, i + n, i + o]).map((function(n) {
            return e < 2 ? t + n : "border" + n + t;
        }
        ));
        Oi[1 < e ? "border" + t : t] = function(t, e, n, i, o) {
            var s, a;
            if (arguments.length < 4)
                return s = r.map((function(e) {
                    return Ln(t, e, n);
                }
                )),
                5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (i + "").split(" "),
            a = {},
            r.forEach((function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0];
            }
            )),
            t.init(e, a, o);
        }
        ;
    }
    ));
    var Ni, Bi, Ui = {
        name: "css",
        register: Cn,
        targetTest: function(t) {
            return t.style && t.nodeType;
        },
        init: function(t, e, n, i, o) {
            var r, s, a, l, c, d, u, h, f, g, m, v, y, b, w, x = this._props, _ = t.style;
            for (u in Xn || Cn(),
            e)
                if ("autoRound" !== u && (s = e[u],
                !ae[u] || !Fe(u, e, n, i, t, o)))
                    if (c = typeof s,
                    d = Oi[u],
                    "function" === c && (c = typeof (s = s.call(n, i, t, o))),
                    "string" === c && ~s.indexOf("random(") && (s = et(s)),
                    d)
                        d(this, t, u, s, n) && (w = 1);
                    else if ("--" === u.substr(0, 2))
                        this.add(_, "setProperty", getComputedStyle(t).getPropertyValue(u) + "", s + "", i, o, 0, 0, u);
                    else {
                        if ("undefined" !== c) {
                            if (r = Ln(t, u),
                            l = parseFloat(r),
                            (g = "string" === c && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)),
                            a = parseFloat(s),
                            u in Ti && ("autoAlpha" === u && (1 === l && "hidden" === Ln(t, "visibility") && a && (l = 0),
                            Mn(this, _, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                            "scale" !== u && "transform" !== u && ~(u = Ti[u]).indexOf(",") && (u = u.split(",")[0])),
                            m = u in vi)
                                if (v || ((y = t._gsap).renderTransform || Li(t),
                                b = !1 !== e.smoothOrigin && y.smooth,
                                (v = this._pt = new sn(this._pt,_,$i,0,1,y.renderTransform,y,0,-1)).dep = 1),
                                "scale" === u)
                                    this._pt = new sn(this._pt,y,"scaleY",y.scaleY,g ? g * a : a - y.scaleY),
                                    x.push("scaleY", u),
                                    u += "X";
                                else {
                                    if ("transformOrigin" === u) {
                                        s = In(s),
                                        y.svg ? qn(t, s, 0, b, 0, this) : ((f = parseFloat(s.split(" ")[2]) || 0) !== y.zOrigin && Mn(this, y, "zOrigin", y.zOrigin, f),
                                        Mn(this, _, u, zi(r), zi(s)));
                                        continue;
                                    }
                                    if ("svgOrigin" === u) {
                                        qn(t, s, 1, b, 0, this);
                                        continue;
                                    }
                                    if (u in Di) {
                                        Bn(this, y, u, l, s, g);
                                        continue;
                                    }
                                    if ("smoothOrigin" === u) {
                                        Mn(this, y, "smooth", y.smooth, s);
                                        continue;
                                    }
                                    if ("force3D" === u) {
                                        y[u] = s;
                                        continue;
                                    }
                                    if ("transform" === u) {
                                        Un(this, s, t);
                                        continue;
                                    }
                                }
                            else
                                u in _ || (u = Ai(u) || u);
                            if (m || (a || 0 === a) && (l || 0 === l) && !Si.test(s) && u in _)
                                a = a || 0,
                                (h = (r + "").substr((l + "").length)) !== (f = Y(s) || (u in jt.units ? jt.units[u] : h)) && (l = Dn(t, u, r, f)),
                                this._pt = new sn(this._pt,m ? y : _,u,l,g ? g * a : a - l,"px" !== f || !1 === e.autoRound || m ? pn : gn),
                                this._pt.u = f || 0,
                                h !== f && (this._pt.b = r,
                                this._pt.r = fn);
                            else if (u in _)
                                zn.call(this, t, u, r, s);
                            else {
                                if (!(u in t)) {
                                    p(u, s);
                                    continue;
                                }
                                this.add(t, u, t[u], s, i, o);
                            }
                            x.push(u);
                        }
                    }
            w && rn(this);
        },
        get: Ln,
        aliases: Ti,
        getSetter: function(t, e, n) {
            var i = Ti[e];
            return i && i.indexOf(",") < 0 && (e = i),
            e in vi && e !== Ci && (t._gsap.x || Ln(t, "x")) ? n && Zn === n ? "scale" === e ? xn : wn : (Zn = n || {}) && ("scale" === e ? _n : Sn) : t.style && !s(t.style[e]) ? yn : ~e.indexOf("-") ? bn : Ze(t, e);
        },
        core: {
            _removeProperty: On,
            _getMatrix: Hn
        }
    };
    un.utils.checkPrefix = Ai,
    Bi = b("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ni = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        vi[t] = 1;
    }
    )),
    b(Ni, (function(t) {
        jt.units[t] = "deg",
        Di[t] = 1;
    }
    )),
    Ti[Bi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ni,
    b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        Ti[e[1]] = Bi[e[0]];
    }
    )),
    b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        jt.units[t] = "px";
    }
    )),
    un.registerPlugin(Ui);
    var Gi = un.registerPlugin(Ui) || un
      , Wi = Gi.core.Tween;
    t.Back = ui,
    t.Bounce = hi,
    t.CSSPlugin = Ui,
    t.Circ = mi,
    t.Cubic = si,
    t.Elastic = di,
    t.Expo = gi,
    t.Linear = oi,
    t.Power0 = Jn,
    t.Power1 = ti,
    t.Power2 = ei,
    t.Power3 = ni,
    t.Power4 = ii,
    t.Quad = ri,
    t.Quart = ai,
    t.Quint = li,
    t.Sine = fi,
    t.SteppedEase = pi,
    t.Strong = ci,
    t.TimelineLite = Re,
    t.TimelineMax = Re,
    t.TweenLite = Ge,
    t.TweenMax = Wi,
    t.default = Gi,
    t.gsap = Gi,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default;
}
)),
function(t, e, n, i) {
    "use strict";
    if (t.console = t.console || {
        info: function(t) {}
    },
    n)
        if (n.fn.fancybox)
            console.info("fancyBox already initialized");
        else {
            var o, r, s, a, l = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop,
                onActivate: n.noop,
                onDeactivate: n.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom";
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls";
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close";
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom";
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom";
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schlie&szlig;en",
                        NEXT: "Weiter",
                        PREV: "Zur&uuml;ck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Vergr&ouml;&szlig;ern"
                    }
                }
            }, c = n(t), d = n(e), u = 0, p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60);
            }
            , h = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                t.clearTimeout(e);
            }
            , f = function() {
                var t, n = e.createElement("fakeelement"), o = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (t in o)
                    if (n.style[t] !== i)
                        return o[t];
                return "transitionend";
            }(), g = function(t) {
                return t && t.length && t[0].offsetHeight;
            }, m = function(t, e) {
                var i = n.extend(!0, {}, t, e);
                return n.each(e, (function(t, e) {
                    n.isArray(e) && (i[t] = e);
                }
                )),
                i;
            }, v = function(t, e, i) {
                var o = this;
                o.opts = m({
                    index: i
                }, n.fancybox.defaults),
                n.isPlainObject(e) && (o.opts = m(o.opts, e)),
                n.fancybox.isMobile && (o.opts = m(o.opts, o.opts.mobile)),
                o.id = o.opts.id || ++u,
                o.currIndex = parseInt(o.opts.index, 10) || 0,
                o.prevIndex = null,
                o.prevPos = null,
                o.currPos = 0,
                o.firstRun = !0,
                o.group = [],
                o.slides = {},
                o.addContent(t),
                o.group.length && o.init();
            };
            n.extend(v.prototype, {
                init: function() {
                    var i, o, r = this, s = r.group[r.currIndex].opts;
                    s.closeExisting && n.fancybox.close(!0),
                    n("body").addClass("fancybox-active"),
                    !n.fancybox.getInstance() && !1 !== s.hideScrollbar && !n.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"),
                    n("body").addClass("compensate-for-scrollbar")),
                    o = "",
                    n.each(s.buttons, (function(t, e) {
                        o += s.btnTpl[e] || "";
                    }
                    )),
                    i = n(r.translate(r, s.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", s.btnTpl.arrowLeft + s.btnTpl.arrowRight))).attr("id", "fancybox-container-" + r.id).addClass(s.baseClass).data("FancyBox", r).appendTo(s.parentEl),
                    r.$refs = {
                        container: i
                    },
                    ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach((function(t) {
                        r.$refs[t] = i.find(".fancybox-" + t);
                    }
                    )),
                    r.trigger("onInit"),
                    r.activate(),
                    r.jumpTo(r.currIndex);
                },
                translate: function(t, e) {
                    var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                    return e.replace(/\{\{(\w+)\}\}/g, (function(t, e) {
                        return n[e] === i ? t : n[e];
                    }
                    ));
                },
                addContent: function(t) {
                    var e, o = this, r = n.makeArray(t);
                    n.each(r, (function(t, e) {
                        var r, s, a, l, c, d = {}, u = {};
                        n.isPlainObject(e) ? (d = e,
                        u = e.opts || e) : "object" === n.type(e) && n(e).length ? (u = (r = n(e)).data() || {},
                        (u = n.extend(!0, {}, u, u.options)).$orig = r,
                        d.src = o.opts.src || u.src || r.attr("href"),
                        d.type || d.src || (d.type = "inline",
                        d.src = e)) : d = {
                            type: "html",
                            src: e + ""
                        },
                        d.opts = n.extend(!0, {}, o.opts, u),
                        n.isArray(u.buttons) && (d.opts.buttons = u.buttons),
                        n.fancybox.isMobile && d.opts.mobile && (d.opts = m(d.opts, d.opts.mobile)),
                        s = d.type || d.opts.type,
                        l = d.src || "",
                        !s && l && ((a = l.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s = "video",
                        d.opts.video.format || (d.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? (s = "iframe",
                        d = n.extend(!0, d, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === l.charAt(0) && (s = "inline")),
                        s ? d.type = s : o.trigger("objectNeedsType", d),
                        d.contentType || (d.contentType = n.inArray(d.type, ["html", "inline", "ajax"]) > -1 ? "html" : d.type),
                        d.index = o.group.length,
                        "auto" == d.opts.smallBtn && (d.opts.smallBtn = n.inArray(d.type, ["html", "inline", "ajax"]) > -1),
                        "auto" === d.opts.toolbar && (d.opts.toolbar = !d.opts.smallBtn),
                        d.$thumb = d.opts.$thumb || null,
                        d.opts.$trigger && d.index === o.opts.index && (d.$thumb = d.opts.$trigger.find("img:first"),
                        d.$thumb.length && (d.opts.$orig = d.opts.$trigger)),
                        d.$thumb && d.$thumb.length || !d.opts.$orig || (d.$thumb = d.opts.$orig.find("img:first")),
                        d.$thumb && !d.$thumb.length && (d.$thumb = null),
                        d.thumb = d.opts.thumb || (d.$thumb ? d.$thumb[0].src : null),
                        "function" === n.type(d.opts.caption) && (d.opts.caption = d.opts.caption.apply(e, [o, d])),
                        "function" === n.type(o.opts.caption) && (d.opts.caption = o.opts.caption.apply(e, [o, d])),
                        d.opts.caption instanceof n || (d.opts.caption = d.opts.caption === i ? "" : d.opts.caption + ""),
                        "ajax" === d.type && (c = l.split(/\s+/, 2)).length > 1 && (d.src = c.shift(),
                        d.opts.filter = c.shift()),
                        d.opts.modal && (d.opts = n.extend(!0, d.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })),
                        o.group.push(d);
                    }
                    )),
                    Object.keys(o.slides).length && (o.updateControls(),
                    (e = o.Thumbs) && e.isActive && (e.create(),
                    e.focus()));
                },
                addEvents: function() {
                    var e = this;
                    e.removeEvents(),
                    e.$refs.container.on("click.fb-close", "[data-fancybox-close]", (function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        e.close(t);
                    }
                    )).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", (function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        e.previous();
                    }
                    )).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", (function(t) {
                        t.stopPropagation(),
                        t.preventDefault(),
                        e.next();
                    }
                    )).on("click.fb", "[data-fancybox-zoom]", (function(t) {
                        e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                    }
                    )),
                    c.on("orientationchange.fb resize.fb", (function(t) {
                        t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && h(e.requestId),
                        e.requestId = p((function() {
                            e.update(t);
                        }
                        ))) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(),
                        setTimeout((function() {
                            e.$refs.stage.show(),
                            e.update(t);
                        }
                        ), n.fancybox.isMobile ? 600 : 250));
                    }
                    )),
                    d.on("keydown.fb", (function(t) {
                        var i = (n.fancybox ? n.fancybox.getInstance() : null).current
                          , o = t.keyCode || t.which;
                        if (9 != o) {
                            if (!(!i.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || n(t.target).is("input,textarea,video,audio,select")))
                                return 8 === o || 27 === o ? (t.preventDefault(),
                                void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(),
                                void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(),
                                void e.next()) : void e.trigger("afterKeydown", t, o);
                        } else
                            i.opts.trapFocus && e.focus(t);
                    }
                    )),
                    e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0,
                    d.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", (function(t) {
                        e.idleSecondsCounter = 0,
                        e.isIdle && e.showControls(),
                        e.isIdle = !1;
                    }
                    )),
                    e.idleInterval = t.setInterval((function() {
                        e.idleSecondsCounter++,
                        e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0,
                        e.idleSecondsCounter = 0,
                        e.hideControls());
                    }
                    ), 1e3));
                },
                removeEvents: function() {
                    var e = this;
                    c.off("orientationchange.fb resize.fb"),
                    d.off("keydown.fb .fb-idle"),
                    this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                    e.idleInterval && (t.clearInterval(e.idleInterval),
                    e.idleInterval = null);
                },
                previous: function(t) {
                    return this.jumpTo(this.currPos - 1, t);
                },
                next: function(t) {
                    return this.jumpTo(this.currPos + 1, t);
                },
                jumpTo: function(t, e) {
                    var o, r, s, a, l, c, d, u, p, h = this, f = h.group.length;
                    if (!(h.isDragging || h.isClosing || h.isAnimating && h.firstRun)) {
                        if (t = parseInt(t, 10),
                        !(s = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || t >= f))
                            return !1;
                        if (o = h.firstRun = !Object.keys(h.slides).length,
                        l = h.current,
                        h.prevIndex = h.currIndex,
                        h.prevPos = h.currPos,
                        a = h.createSlide(t),
                        f > 1 && ((s || a.index < f - 1) && h.createSlide(t + 1),
                        (s || a.index > 0) && h.createSlide(t - 1)),
                        h.current = a,
                        h.currIndex = a.index,
                        h.currPos = a.pos,
                        h.trigger("beforeShow", o),
                        h.updateControls(),
                        a.forcedDuration = i,
                        n.isNumeric(e) ? a.forcedDuration = e : e = a.opts[o ? "animationDuration" : "transitionDuration"],
                        e = parseInt(e, 10),
                        r = h.isMoved(a),
                        a.$slide.addClass("fancybox-slide--current"),
                        o)
                            return a.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"),
                            h.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                            h.loadSlide(a),
                            void h.preload("image");
                        c = n.fancybox.getTranslate(l.$slide),
                        d = n.fancybox.getTranslate(h.$refs.stage),
                        n.each(h.slides, (function(t, e) {
                            n.fancybox.stop(e.$slide, !0);
                        }
                        )),
                        l.pos !== a.pos && (l.isComplete = !1),
                        l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),
                        r ? (p = c.left - (l.pos * c.width + l.pos * l.opts.gutter),
                        n.each(h.slides, (function(t, i) {
                            i.$slide.removeClass("fancybox-animated").removeClass((function(t, e) {
                                return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                            }
                            ));
                            var o = i.pos * c.width + i.pos * i.opts.gutter;
                            n.fancybox.setTranslate(i.$slide, {
                                top: 0,
                                left: o - d.left + p
                            }),
                            i.pos !== a.pos && i.$slide.addClass("fancybox-slide--" + (i.pos > a.pos ? "next" : "previous")),
                            g(i.$slide),
                            n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: (i.pos - a.pos) * c.width + (i.pos - a.pos) * i.opts.gutter
                            }, e, (function() {
                                i.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"),
                                i.pos === h.currPos && h.complete();
                            }
                            ));
                        }
                        ))) : e && a.opts.transitionEffect && (u = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect,
                        l.$slide.addClass("fancybox-slide--" + (l.pos > a.pos ? "next" : "previous")),
                        n.fancybox.animate(l.$slide, u, e, (function() {
                            l.$slide.removeClass(u).removeClass("fancybox-slide--next fancybox-slide--previous");
                        }
                        ), !1)),
                        a.isLoaded ? h.revealContent(a) : h.loadSlide(a),
                        h.preload("image");
                    }
                },
                createSlide: function(t) {
                    var e, i, o = this;
                    return i = (i = t % o.group.length) < 0 ? o.group.length + i : i,
                    !o.slides[t] && o.group[i] && (e = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),
                    o.slides[t] = n.extend(!0, {}, o.group[i], {
                        pos: t,
                        $slide: e,
                        isLoaded: !1
                    }),
                    o.updateSlide(o.slides[t])),
                    o.slides[t];
                },
                scaleToActual: function(t, e, o) {
                    var r, s, a, l, c, d = this, u = d.current, p = u.$content, h = n.fancybox.getTranslate(u.$slide).width, f = n.fancybox.getTranslate(u.$slide).height, g = u.width, m = u.height;
                    d.isAnimating || d.isMoved() || !p || "image" != u.type || !u.isLoaded || u.hasError || (d.isAnimating = !0,
                    n.fancybox.stop(p),
                    t = t === i ? .5 * h : t,
                    e = e === i ? .5 * f : e,
                    (r = n.fancybox.getTranslate(p)).top -= n.fancybox.getTranslate(u.$slide).top,
                    r.left -= n.fancybox.getTranslate(u.$slide).left,
                    l = g / r.width,
                    c = m / r.height,
                    s = .5 * h - .5 * g,
                    a = .5 * f - .5 * m,
                    g > h && ((s = r.left * l - (t * l - t)) > 0 && (s = 0),
                    s < h - g && (s = h - g)),
                    m > f && ((a = r.top * c - (e * c - e)) > 0 && (a = 0),
                    a < f - m && (a = f - m)),
                    d.updateCursor(g, m),
                    n.fancybox.animate(p, {
                        top: a,
                        left: s,
                        scaleX: l,
                        scaleY: c
                    }, o || 366, (function() {
                        d.isAnimating = !1;
                    }
                    )),
                    d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
                },
                scaleToFit: function(t) {
                    var e, i = this, o = i.current, r = o.$content;
                    i.isAnimating || i.isMoved() || !r || "image" != o.type || !o.isLoaded || o.hasError || (i.isAnimating = !0,
                    n.fancybox.stop(r),
                    e = i.getFitPos(o),
                    i.updateCursor(e.width, e.height),
                    n.fancybox.animate(r, {
                        top: e.top,
                        left: e.left,
                        scaleX: e.width / r.width(),
                        scaleY: e.height / r.height()
                    }, t || 366, (function() {
                        i.isAnimating = !1;
                    }
                    )));
                },
                getFitPos: function(t) {
                    var e, i, o, r, s = t.$content, a = t.$slide, l = t.width || t.opts.width, c = t.height || t.opts.height, d = {};
                    return !!(t.isLoaded && s && s.length) && (e = n.fancybox.getTranslate(this.$refs.stage).width,
                    i = n.fancybox.getTranslate(this.$refs.stage).height,
                    e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")),
                    i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")),
                    l && c || (l = e,
                    c = i),
                    (l *= o = Math.min(1, e / l, i / c)) > e - .5 && (l = e),
                    (c *= o) > i - .5 && (c = i),
                    "image" === t.type ? (d.top = Math.floor(.5 * (i - c)) + parseFloat(a.css("paddingTop")),
                    d.left = Math.floor(.5 * (e - l)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (c > l / (r = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / r : l > c * r && (l = c * r)),
                    d.width = l,
                    d.height = c,
                    d);
                },
                update: function(t) {
                    var e = this;
                    n.each(e.slides, (function(n, i) {
                        e.updateSlide(i, t);
                    }
                    ));
                },
                updateSlide: function(t, e) {
                    var i = this
                      , o = t && t.$content
                      , r = t.width || t.opts.width
                      , s = t.height || t.opts.height
                      , a = t.$slide;
                    i.adjustCaption(t),
                    o && (r || s || "video" === t.contentType) && !t.hasError && (n.fancybox.stop(o),
                    n.fancybox.setTranslate(o, i.getFitPos(t)),
                    t.pos === i.currPos && (i.isAnimating = !1,
                    i.updateCursor())),
                    i.adjustLayout(t),
                    a.length && (a.trigger("refresh"),
                    t.pos === i.currPos && i.$refs.toolbar.add(i.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)),
                    i.trigger("onUpdate", t, e);
                },
                centerSlide: function(t) {
                    var e = this
                      , o = e.current
                      , r = o.$slide;
                    !e.isClosing && o && (r.siblings().css({
                        transform: "",
                        opacity: ""
                    }),
                    r.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),
                    n.fancybox.animate(r, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, t === i ? 0 : t, (function() {
                        r.css({
                            transform: "",
                            opacity: ""
                        }),
                        o.isComplete || e.complete();
                    }
                    ), !1));
                },
                isMoved: function(t) {
                    var e, i, o = t || this.current;
                    return !!o && (i = n.fancybox.getTranslate(this.$refs.stage),
                    e = n.fancybox.getTranslate(o.$slide),
                    !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - i.top) > .5 || Math.abs(e.left - i.left) > .5));
                },
                updateCursor: function(t, e) {
                    var i, o, r = this, s = r.current, a = r.$refs.container;
                    s && !r.isClosing && r.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),
                    o = !!(i = r.canPan(t, e)) || r.isZoomable(),
                    a.toggleClass("fancybox-is-zoomable", o),
                    n("[data-fancybox-zoom]").prop("disabled", !o),
                    i ? a.addClass("fancybox-can-pan") : o && ("zoom" === s.opts.clickContent || n.isFunction(s.opts.clickContent) && "zoom" == s.opts.clickContent(s)) ? a.addClass("fancybox-can-zoomIn") : s.opts.touch && (s.opts.touch.vertical || r.group.length > 1) && "video" !== s.contentType && a.addClass("fancybox-can-swipe"));
                },
                isZoomable: function() {
                    var t, e = this, n = e.current;
                    if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                        if (!n.isLoaded)
                            return !0;
                        if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height))
                            return !0;
                    }
                    return !1;
                },
                isScaledDown: function(t, e) {
                    var o = !1
                      , r = this.current
                      , s = r.$content;
                    return t !== i && e !== i ? o = t < r.width && e < r.height : s && (o = (o = n.fancybox.getTranslate(s)).width < r.width && o.height < r.height),
                    o;
                },
                canPan: function(t, e) {
                    var o = this.current
                      , r = null
                      , s = !1;
                    return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (s = this.getFitPos(o),
                    t !== i && e !== i ? r = {
                        width: t,
                        height: e
                    } : o.isComplete && (r = n.fancybox.getTranslate(o.$content)),
                    r && s && (s = Math.abs(r.width - s.width) > 1.5 || Math.abs(r.height - s.height) > 1.5)),
                    s;
                },
                loadSlide: function(t) {
                    var e, i, o, r = this;
                    if (!t.isLoading && !t.isLoaded) {
                        if (t.isLoading = !0,
                        !1 === r.trigger("beforeLoad", t))
                            return t.isLoading = !1,
                            !1;
                        switch (e = t.type,
                        (i = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass),
                        e) {
                        case "image":
                            r.setImage(t);
                            break;
                        case "iframe":
                            r.setIframe(t);
                            break;
                        case "html":
                            r.setContent(t, t.src || t.content);
                            break;
                        case "video":
                            r.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                            break;
                        case "inline":
                            n(t.src).length ? r.setContent(t, n(t.src)) : r.setError(t);
                            break;
                        case "ajax":
                            r.showLoading(t),
                            o = n.ajax(n.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function(e, n) {
                                    "success" === n && r.setContent(t, e);
                                },
                                error: function(e, n) {
                                    e && "abort" !== n && r.setError(t);
                                }
                            })),
                            i.one("onReset", (function() {
                                o.abort();
                            }
                            ));
                            break;
                        default:
                            r.setError(t);
                        }
                        return !0;
                    }
                },
                setImage: function(t) {
                    var i, o = this;
                    setTimeout((function() {
                        var e = t.$image;
                        o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t);
                    }
                    ), 50),
                    o.checkSrcset(t),
                    t.$content = n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),
                    !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width,
                    t.height = t.opts.height,
                    (i = e.createElement("img")).onerror = function() {
                        n(this).remove(),
                        t.$ghost = null;
                    }
                    ,
                    i.onload = function() {
                        o.afterLoad(t);
                    }
                    ,
                    t.$ghost = n(i).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)),
                    o.setBigImage(t);
                },
                checkSrcset: function(e) {
                    var n, i, o, r, s = e.opts.srcset || e.opts.image.srcset;
                    if (s) {
                        o = t.devicePixelRatio || 1,
                        r = t.innerWidth * o,
                        i = s.split(",").map((function(t) {
                            var e = {};
                            return t.trim().split(/\s+/).forEach((function(t, n) {
                                var i = parseInt(t.substring(0, t.length - 1), 10);
                                if (0 === n)
                                    return e.url = t;
                                i && (e.value = i,
                                e.postfix = t[t.length - 1]);
                            }
                            )),
                            e;
                        }
                        )),
                        i.sort((function(t, e) {
                            return t.value - e.value;
                        }
                        ));
                        for (var a = 0; a < i.length; a++) {
                            var l = i[a];
                            if ("w" === l.postfix && l.value >= r || "x" === l.postfix && l.value >= o) {
                                n = l;
                                break;
                            }
                        }
                        !n && i.length && (n = i[i.length - 1]),
                        n && (e.src = n.url,
                        e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value,
                        e.width = n.value),
                        e.opts.srcset = s);
                    }
                },
                setBigImage: function(t) {
                    var i = this
                      , o = e.createElement("img")
                      , r = n(o);
                    t.$image = r.one("error", (function() {
                        i.setError(t);
                    }
                    )).one("load", (function() {
                        var e;
                        t.$ghost || (i.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight),
                        i.afterLoad(t)),
                        i.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && c.width() / c.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"),
                        r.attr("sizes", e).attr("srcset", t.opts.srcset)),
                        t.$ghost && setTimeout((function() {
                            t.$ghost && !i.isClosing && t.$ghost.hide();
                        }
                        ), Math.min(300, Math.max(1e3, t.height / 1600))),
                        i.hideLoading(t));
                    }
                    )).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                    (o.complete || "complete" == o.readyState) && r.naturalWidth && r.naturalHeight ? r.trigger("load") : o.error && r.trigger("error");
                },
                resolveImageSlideSize: function(t, e, n) {
                    var i = parseInt(t.opts.width, 10)
                      , o = parseInt(t.opts.height, 10);
                    t.width = e,
                    t.height = n,
                    i > 0 && (t.width = i,
                    t.height = Math.floor(i * n / e)),
                    o > 0 && (t.width = Math.floor(o * e / n),
                    t.height = o);
                },
                setIframe: function(t) {
                    var e, o = this, r = t.opts.iframe, s = t.$slide;
                    t.$content = n('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(s),
                    s.addClass("fancybox-slide--" + t.contentType),
                    t.$iframe = e = n(r.tpl.replace(/\{rnd\}/g, (new Date()).getTime())).attr(r.attr).appendTo(t.$content),
                    r.preload ? (o.showLoading(t),
                    e.on("load.fb error.fb", (function(e) {
                        this.isReady = 1,
                        t.$slide.trigger("refresh"),
                        o.afterLoad(t);
                    }
                    )),
                    s.on("refresh.fb", (function() {
                        var n, o = t.$content, a = r.css.width, l = r.css.height;
                        if (1 === e[0].isReady) {
                            try {
                                n = e.contents().find("body");
                            } catch (t) {}
                            n && n.length && n.children().length && (s.css("overflow", "visible"),
                            o.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }),
                            a === i && (a = Math.ceil(Math.max(n[0].clientWidth, n.outerWidth(!0)))),
                            o.css("width", a || "").css("max-width", ""),
                            l === i && (l = Math.ceil(Math.max(n[0].clientHeight, n.outerHeight(!0)))),
                            o.css("height", l || ""),
                            s.css("overflow", "auto")),
                            o.removeClass("fancybox-is-hidden");
                        }
                    }
                    ))) : o.afterLoad(t),
                    e.attr("src", t.src),
                    s.one("onReset", (function() {
                        try {
                            n(this).find("iframe").hide().unbind().attr("src", "//about:blank");
                        } catch (t) {}
                        n(this).off("refresh.fb").empty(),
                        t.isLoaded = !1,
                        t.isRevealed = !1;
                    }
                    ));
                },
                setContent: function(t, e) {
                    var i, o = this;
                    o.isClosing || (o.hideLoading(t),
                    t.$content && n.fancybox.stop(t.$content),
                    t.$slide.empty(),
                    (i = e) && i.hasOwnProperty && i instanceof n && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"),
                    t.$placeholder = n("<div>").hide().insertAfter(e),
                    e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents()),
                    t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                    t.$slide.one("onReset", (function() {
                        n(this).find("video,audio").trigger("pause"),
                        t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),
                        t.$placeholder = null),
                        t.$smallBtn && (t.$smallBtn.remove(),
                        t.$smallBtn = null),
                        t.hasError || (n(this).empty(),
                        t.isLoaded = !1,
                        t.isRevealed = !1);
                    }
                    )),
                    n(e).appendTo(t.$slide),
                    n(e).is("video,audio") && (n(e).addClass("fancybox-video"),
                    n(e).wrap("<div></div>"),
                    t.contentType = "video",
                    t.opts.width = t.opts.width || n(e).attr("width"),
                    t.opts.height = t.opts.height || n(e).attr("height")),
                    t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),
                    t.$content.siblings().hide(),
                    t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()),
                    t.$content.addClass("fancybox-content"),
                    t.$slide.addClass("fancybox-slide--" + t.contentType),
                    o.afterLoad(t));
                },
                setError: function(t) {
                    t.hasError = !0,
                    t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"),
                    t.contentType = "html",
                    this.setContent(t, this.translate(t, t.opts.errorTpl)),
                    t.pos === this.currPos && (this.isAnimating = !1);
                },
                showLoading: function(t) {
                    var e = this;
                    (t = t || e.current) && !t.$spinner && (t.$spinner = n(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"));
                },
                hideLoading: function(t) {
                    (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(),
                    delete t.$spinner);
                },
                afterLoad: function(t) {
                    var e = this;
                    e.isClosing || (t.isLoading = !1,
                    t.isLoaded = !0,
                    e.trigger("afterLoad", t),
                    e.hideLoading(t),
                    !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                    t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", (function(t) {
                        return 2 == t.button && t.preventDefault(),
                        !0;
                    }
                    )),
                    "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                    e.adjustCaption(t),
                    e.adjustLayout(t),
                    t.pos === e.currPos && e.updateCursor(),
                    e.revealContent(t));
                },
                adjustCaption: function(t) {
                    var e, n = this, i = t || n.current, o = i.opts.caption, r = i.opts.preventCaptionOverlap, s = n.$refs.caption, a = !1;
                    s.toggleClass("fancybox-caption--separate", r),
                    r && o && o.length && (i.pos !== n.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(o),
                    a = e.outerHeight(!0),
                    e.empty().remove()) : n.$caption && (a = n.$caption.outerHeight(!0)),
                    i.$slide.css("padding-bottom", a || ""));
                },
                adjustLayout: function(t) {
                    var e, n, i, o, r = t || this.current;
                    r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""),
                    r.$content.outerHeight() > r.$slide.height() + .5 && (i = r.$slide[0].style["padding-bottom"],
                    o = r.$slide.css("padding-bottom"),
                    parseFloat(o) > 0 && (e = r.$slide[0].scrollHeight,
                    r.$slide.css("padding-bottom", 0),
                    Math.abs(e - r.$slide[0].scrollHeight) < 1 && (n = o),
                    r.$slide.css("padding-bottom", i))),
                    r.$content.css("margin-bottom", n));
                },
                revealContent: function(t) {
                    var e, o, r, s, a = this, l = t.$slide, c = !1, d = !1, u = a.isMoved(t), p = t.isRevealed;
                    return t.isRevealed = !0,
                    e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"],
                    r = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"],
                    r = parseInt(t.forcedDuration === i ? r : t.forcedDuration, 10),
                    !u && t.pos === a.currPos && r || (e = !1),
                    "zoom" === e && (t.pos === a.currPos && r && "image" === t.type && !t.hasError && (d = a.getThumbPos(t)) ? c = a.getFitPos(t) : e = "fade"),
                    "zoom" === e ? (a.isAnimating = !0,
                    c.scaleX = c.width / d.width,
                    c.scaleY = c.height / d.height,
                    "auto" == (s = t.opts.zoomOpacity) && (s = Math.abs(t.width / t.height - d.width / d.height) > .1),
                    s && (d.opacity = .1,
                    c.opacity = 1),
                    n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), d),
                    g(t.$content),
                    void n.fancybox.animate(t.$content, c, r, (function() {
                        a.isAnimating = !1,
                        a.complete();
                    }
                    ))) : (a.updateSlide(t),
                    e ? (n.fancybox.stop(l),
                    o = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e,
                    l.addClass(o).removeClass("fancybox-slide--current"),
                    t.$content.removeClass("fancybox-is-hidden"),
                    g(l),
                    "image" !== t.type && t.$content.hide().show(0),
                    void n.fancybox.animate(l, "fancybox-slide--current", r, (function() {
                        l.removeClass(o).css({
                            transform: "",
                            opacity: ""
                        }),
                        t.pos === a.currPos && a.complete();
                    }
                    ), !0)) : (t.$content.removeClass("fancybox-is-hidden"),
                    p || !u || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"),
                    void (t.pos === a.currPos && a.complete())));
                },
                getThumbPos: function(t) {
                    var i, o, r, s, a, l, c = t.$thumb;
                    return !(!c || !function(t) {
                        var i, o;
                        return !(!t || t.ownerDocument !== e) && (n(".fancybox-container").css("pointer-events", "none"),
                        i = {
                            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                            y: t.getBoundingClientRect().top + t.offsetHeight / 2
                        },
                        o = e.elementFromPoint(i.x, i.y) === t,
                        n(".fancybox-container").css("pointer-events", ""),
                        o);
                    }(c[0])) && (o = n.fancybox.getTranslate(c),
                    r = parseFloat(c.css("border-top-width") || 0),
                    s = parseFloat(c.css("border-right-width") || 0),
                    a = parseFloat(c.css("border-bottom-width") || 0),
                    l = parseFloat(c.css("border-left-width") || 0),
                    i = {
                        top: o.top + r,
                        left: o.left + l,
                        width: o.width - s - l,
                        height: o.height - r - a,
                        scaleX: 1,
                        scaleY: 1
                    },
                    o.width > 0 && o.height > 0 && i);
                },
                complete: function() {
                    var t, e = this, i = e.current, o = {};
                    !e.isMoved() && i.isLoaded && (i.isComplete || (i.isComplete = !0,
                    i.$slide.siblings().trigger("onReset"),
                    e.preload("inline"),
                    g(i.$slide),
                    i.$slide.addClass("fancybox-slide--complete"),
                    n.each(e.slides, (function(t, i) {
                        i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide),
                        i.$slide.off().remove());
                    }
                    )),
                    e.slides = o),
                    e.isAnimating = !1,
                    e.updateCursor(),
                    e.trigger("afterShow"),
                    i.opts.video.autoStart && i.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", (function() {
                        Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                        e.next();
                    }
                    )),
                    i.opts.autoFocus && "html" === i.contentType && ((t = i.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)),
                    i.$slide.scrollTop(0).scrollLeft(0));
                },
                preload: function(t) {
                    var e, n, i = this;
                    i.group.length < 2 || (n = i.slides[i.currPos + 1],
                    (e = i.slides[i.currPos - 1]) && e.type === t && i.loadSlide(e),
                    n && n.type === t && i.loadSlide(n));
                },
                focus: function(t, i) {
                    var o, r, s = this, a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                    s.isClosing || ((o = (o = !t && s.current && s.current.isComplete ? s.current.$slide.find("*:visible" + (i ? ":not(.fancybox-close-small)" : "")) : s.$refs.container.find("*:visible")).filter(a).filter((function() {
                        return "hidden" !== n(this).css("visibility") && !n(this).hasClass("disabled");
                    }
                    ))).length ? (r = o.index(e.activeElement),
                    t && t.shiftKey ? (r < 0 || 0 == r) && (t.preventDefault(),
                    o.eq(o.length - 1).trigger("focus")) : (r < 0 || r == o.length - 1) && (t && t.preventDefault(),
                    o.eq(0).trigger("focus"))) : s.$refs.container.trigger("focus"));
                },
                activate: function() {
                    var t = this;
                    n(".fancybox-container").each((function() {
                        var e = n(this).data("FancyBox");
                        e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"),
                        e.removeEvents(),
                        e.isVisible = !1);
                    }
                    )),
                    t.isVisible = !0,
                    (t.current || t.isIdle) && (t.update(),
                    t.updateControls()),
                    t.trigger("onActivate"),
                    t.addEvents();
                },
                close: function(t, e) {
                    var i, o, r, s, a, l, c, d = this, u = d.current, h = function() {
                        d.cleanUp(t);
                    };
                    return !d.isClosing && (d.isClosing = !0,
                    !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1,
                    p((function() {
                        d.update();
                    }
                    )),
                    !1) : (d.removeEvents(),
                    r = u.$content,
                    i = u.opts.animationEffect,
                    o = n.isNumeric(e) ? e : i ? u.opts.animationDuration : 0,
                    u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                    !0 !== t ? n.fancybox.stop(u.$slide) : i = !1,
                    u.$slide.siblings().trigger("onReset").remove(),
                    o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"),
                    d.hideLoading(u),
                    d.hideControls(!0),
                    d.updateCursor(),
                    "zoom" !== i || r && o && "image" === u.type && !d.isMoved() && !u.hasError && (c = d.getThumbPos(u)) || (i = "fade"),
                    "zoom" === i ? (n.fancybox.stop(r),
                    l = {
                        top: (s = n.fancybox.getTranslate(r)).top,
                        left: s.left,
                        scaleX: s.width / c.width,
                        scaleY: s.height / c.height,
                        width: c.width,
                        height: c.height
                    },
                    "auto" == (a = u.opts.zoomOpacity) && (a = Math.abs(u.width / u.height - c.width / c.height) > .1),
                    a && (c.opacity = 0),
                    n.fancybox.setTranslate(r, l),
                    g(r),
                    n.fancybox.animate(r, c, o, h),
                    !0) : (i && o ? n.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + i, o, h) : !0 === t ? setTimeout(h, o) : h(),
                    !0)));
                },
                cleanUp: function(e) {
                    var i, o, r, s = this, a = s.current.opts.$orig;
                    s.current.$slide.trigger("onReset"),
                    s.$refs.container.empty().remove(),
                    s.trigger("afterClose", e),
                    s.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = s.$trigger),
                    a && a.length && (o = t.scrollX,
                    r = t.scrollY,
                    a.trigger("focus"),
                    n("html, body").scrollTop(r).scrollLeft(o))),
                    s.current = null,
                    (i = n.fancybox.getInstance()) ? i.activate() : (n("body").removeClass("fancybox-active compensate-for-scrollbar"),
                    n("#fancybox-style-noscroll").remove());
                },
                trigger: function(t, e) {
                    var i, o = Array.prototype.slice.call(arguments, 1), r = this, s = e && e.opts ? e : r.current;
                    if (s ? o.unshift(s) : s = r,
                    o.unshift(r),
                    n.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, o)),
                    !1 === i)
                        return i;
                    "afterClose" !== t && r.$refs ? r.$refs.container.trigger(t + ".fb", o) : d.trigger(t + ".fb", o);
                },
                updateControls: function() {
                    var t = this
                      , i = t.current
                      , o = i.index
                      , r = t.$refs.container
                      , s = t.$refs.caption
                      , a = i.opts.caption;
                    i.$slide.trigger("refresh"),
                    a && a.length ? (t.$caption = s,
                    s.children().eq(0).html(a)) : t.$caption = null,
                    t.hasHiddenControls || t.isIdle || t.showControls(),
                    r.find("[data-fancybox-count]").html(t.group.length),
                    r.find("[data-fancybox-index]").html(o + 1),
                    r.find("[data-fancybox-prev]").prop("disabled", !i.opts.loop && o <= 0),
                    r.find("[data-fancybox-next]").prop("disabled", !i.opts.loop && o >= t.group.length - 1),
                    "image" === i.type ? r.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", i.opts.image.src || i.src).show() : i.opts.toolbar && r.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
                    n(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus");
                },
                hideControls: function(t) {
                    var e = ["infobar", "toolbar", "nav"];
                    !t && this.current.opts.preventCaptionOverlap || e.push("caption"),
                    this.$refs.container.removeClass(e.map((function(t) {
                        return "fancybox-show-" + t;
                    }
                    )).join(" ")),
                    this.hasHiddenControls = !0;
                },
                showControls: function() {
                    var t = this
                      , e = t.current ? t.current.opts : t.opts
                      , n = t.$refs.container;
                    t.hasHiddenControls = !1,
                    t.idleSecondsCounter = 0,
                    n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal);
                },
                toggleControls: function() {
                    this.hasHiddenControls ? this.showControls() : this.hideControls();
                }
            }),
            n.fancybox = {
                version: "3.5.7",
                defaults: l,
                getInstance: function(t) {
                    var e = n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox")
                      , i = Array.prototype.slice.call(arguments, 1);
                    return e instanceof v && ("string" === n.type(t) ? e[t].apply(e, i) : "function" === n.type(t) && t.apply(e, i),
                    e);
                },
                open: function(t, e, n) {
                    return new v(t,e,n);
                },
                close: function(t) {
                    var e = this.getInstance();
                    e && (e.close(),
                    !0 === t && this.close(t));
                },
                destroy: function() {
                    this.close(!0),
                    d.add("body").off("click.fb-start", "**");
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: (o = e.createElement("div"),
                t.getComputedStyle && t.getComputedStyle(o) && t.getComputedStyle(o).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                getTranslate: function(t) {
                    var e;
                    return !(!t || !t.length) && {
                        top: (e = t[0].getBoundingClientRect()).top || 0,
                        left: e.left || 0,
                        width: e.width,
                        height: e.height,
                        opacity: parseFloat(t.css("opacity"))
                    };
                },
                setTranslate: function(t, e) {
                    var n = ""
                      , o = {};
                    if (t && e)
                        return e.left === i && e.top === i || (n = (e.left === i ? t.position().left : e.left) + "px, " + (e.top === i ? t.position().top : e.top) + "px",
                        n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                        e.scaleX !== i && e.scaleY !== i ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== i && (n += " scaleX(" + e.scaleX + ")"),
                        n.length && (o.transform = n),
                        e.opacity !== i && (o.opacity = e.opacity),
                        e.width !== i && (o.width = e.width),
                        e.height !== i && (o.height = e.height),
                        t.css(o);
                },
                animate: function(t, e, o, r, s) {
                    var a, l = this;
                    n.isFunction(o) && (r = o,
                    o = null),
                    l.stop(t),
                    a = l.getTranslate(t),
                    t.on(f, (function(c) {
                        (!c || !c.originalEvent || t.is(c.originalEvent.target) && "z-index" != c.originalEvent.propertyName) && (l.stop(t),
                        n.isNumeric(o) && t.css("transition-duration", ""),
                        n.isPlainObject(e) ? e.scaleX !== i && e.scaleY !== i && l.setTranslate(t, {
                            top: e.top,
                            left: e.left,
                            width: a.width * e.scaleX,
                            height: a.height * e.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== s && t.removeClass(e),
                        n.isFunction(r) && r(c));
                    }
                    )),
                    n.isNumeric(o) && t.css("transition-duration", o + "ms"),
                    n.isPlainObject(e) ? (e.scaleX !== i && e.scaleY !== i && (delete e.width,
                    delete e.height,
                    t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")),
                    n.fancybox.setTranslate(t, e)) : t.addClass(e),
                    t.data("timer", setTimeout((function() {
                        t.trigger(f);
                    }
                    ), o + 33));
                },
                stop: function(t, e) {
                    t && t.length && (clearTimeout(t.data("timer")),
                    e && t.trigger(f),
                    t.off(f).css("transition-duration", ""),
                    t.parent().removeClass("fancybox-is-scaling"));
                }
            },
            n.fn.fancybox = function(t) {
                var e;
                return (e = (t = t || {}).selector || !1) ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                    options: t
                }, y) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: t
                }, y),
                this;
            }
            ,
            d.on("click.fb-start", "[data-fancybox]", y),
            d.on("click.fb-start", "[data-fancybox-trigger]", (function(t) {
                n('[data-fancybox="' + n(this).attr("data-fancybox-trigger") + '"]').eq(n(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: n(this)
                });
            }
            )),
            r = ".fancybox-button",
            s = "fancybox-focus",
            a = null,
            d.on("mousedown mouseup focus blur", r, (function(t) {
                switch (t.type) {
                case "mousedown":
                    a = n(this);
                    break;
                case "mouseup":
                    a = null;
                    break;
                case "focusin":
                    n(r).removeClass(s),
                    n(this).is(a) || n(this).is("[disabled]") || n(this).addClass(s);
                    break;
                case "focusout":
                    n(r).removeClass(s);
                }
            }
            ));
        }
    function y(t, e) {
        var i, o, r, s = [], a = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(),
        e = e || {},
        t && t.data && (e = m(t.data.options, e)),
        i = e.$target || n(t.currentTarget).trigger("blur"),
        (r = n.fancybox.getInstance()) && r.$trigger && r.$trigger.is(i) || (s = e.selector ? n(e.selector) : (o = i.attr("data-fancybox") || "") ? (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + o + '"]') : n('[data-fancybox="' + o + '"]') : [i],
        (a = n(s).index(i)) < 0 && (a = 0),
        (r = n.fancybox.open(s, e, a)).$trigger = i));
    }
}(window, document, jQuery),
function(t) {
    "use strict";
    var e = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
            }
        }
    }
      , n = function(e, n, i) {
        if (e)
            return i = i || "",
            "object" === t.type(i) && (i = t.param(i, !0)),
            t.each(n, (function(t, n) {
                e = e.replace("$" + t, n || "");
            }
            )),
            i.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + i),
            e;
    };
    t(document).on("objectNeedsType.fb", (function(i, o, r) {
        var s, a, l, c, d, u, p, h = r.src || "", f = !1;
        s = t.extend(!0, {}, e, r.opts.media),
        t.each(s, (function(e, i) {
            if (l = h.match(i.matcher)) {
                if (f = i.type,
                p = e,
                u = {},
                i.paramPlace && l[i.paramPlace]) {
                    "?" == (d = l[i.paramPlace])[0] && (d = d.substring(1)),
                    d = d.split("&");
                    for (var o = 0; o < d.length; ++o) {
                        var s = d[o].split("=", 2);
                        2 == s.length && (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, " ")));
                    }
                }
                return c = t.extend(!0, {}, i.params, r.opts[e], u),
                h = "function" === t.type(i.url) ? i.url.call(this, l, c, r) : n(i.url, l, c),
                a = "function" === t.type(i.thumb) ? i.thumb.call(this, l, c, r) : n(i.thumb, l),
                "youtube" === e ? h = h.replace(/&t=((\d+)m)?(\d+)s/, (function(t, e, n, i) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(i, 10));
                }
                )) : "vimeo" === e && (h = h.replace("&%23", "#")),
                !1;
            }
        }
        )),
        f ? (r.opts.thumb || r.opts.$thumb && r.opts.$thumb.length || (r.opts.thumb = a),
        "iframe" === f && (r.opts = t.extend(!0, r.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })),
        t.extend(r, {
            type: f,
            src: h,
            origSrc: r.src,
            contentSource: p,
            contentType: "image" === f ? "image" : "gmap_place" == p || "gmap_search" == p ? "map" : "video"
        })) : h && (r.type = r.opts.defaultType);
    }
    ));
    var i = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function(t) {
            var e, n = this;
            this[t].loaded ? setTimeout((function() {
                n.done(t);
            }
            )) : this[t].loading || (this[t].loading = !0,
            (e = document.createElement("script")).type = "text/javascript",
            e.src = this[t].src,
            "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                n[t].loaded = !0,
                n.done(t);
            }
            : e.onload = function() {
                n[t].loaded = !0,
                n.done(t);
            }
            ,
            document.body.appendChild(e));
        },
        done: function(e) {
            var n, i;
            "youtube" === e && delete window.onYouTubeIframeAPIReady,
            (n = t.fancybox.getInstance()) && (i = n.current.$content.find("iframe"),
            "youtube" === e && void 0 !== YT && YT ? new YT.Player(i.attr("id"),{
                events: {
                    onStateChange: function(t) {
                        0 == t.data && n.next();
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", (function() {
                n.next();
            }
            )));
        }
    };
    t(document).on({
        "afterShow.fb": function(t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource);
        }
    });
}(jQuery),
function(t, e, n) {
    "use strict";
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
        return t.setTimeout(e, 1e3 / 60);
    }
      , o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
        t.clearTimeout(e);
    }
      , r = function(e) {
        var n = [];
        for (var i in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e])
            e[i].pageX ? n.push({
                x: e[i].pageX,
                y: e[i].pageY
            }) : e[i].clientX && n.push({
                x: e[i].clientX,
                y: e[i].clientY
            });
        return n;
    }
      , s = function(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
    }
      , a = function(t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || n.isFunction(t.get(0).onclick) || t.data("selectable"))
            return !0;
        for (var e = 0, i = t[0].attributes, o = i.length; e < o; e++)
            if ("data-fancybox-" === i[e].nodeName.substr(0, 14))
                return !0;
        return !1;
    }
      , l = function(e) {
        for (var n, i, o, r, s, a = !1; n = e.get(0),
        i = void 0,
        o = void 0,
        r = void 0,
        s = void 0,
        i = t.getComputedStyle(n)["overflow-y"],
        o = t.getComputedStyle(n)["overflow-x"],
        r = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight,
        s = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth,
        !(a = r || s) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"); )
            ;
        return a;
    }
      , c = function(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"));
    };
    c.prototype.destroy = function() {
        var t = this;
        t.$container.off(".fb.touch"),
        n(e).off(".fb.touch"),
        t.requestId && (o(t.requestId),
        t.requestId = null),
        t.tapped && (clearTimeout(t.tapped),
        t.tapped = null);
    }
    ,
    c.prototype.ontouchstart = function(i) {
        var o = this
          , c = n(i.target)
          , d = o.instance
          , u = d.current
          , p = u.$slide
          , h = u.$content
          , f = "touchstart" == i.type;
        if (f && o.$container.off("mousedown.fb.touch"),
        (!i.originalEvent || 2 != i.originalEvent.button) && p.length && c.length && !a(c) && !a(c.parent()) && (c.is("img") || !(i.originalEvent.clientX > c[0].clientWidth + c.offset().left))) {
            if (!u || d.isAnimating || u.$slide.hasClass("fancybox-animated"))
                return i.stopPropagation(),
                void i.preventDefault();
            o.realPoints = o.startPoints = r(i),
            o.startPoints.length && (u.touch && i.stopPropagation(),
            o.startEvent = i,
            o.canTap = !0,
            o.$target = c,
            o.$content = h,
            o.opts = u.opts.touch,
            o.isPanning = !1,
            o.isSwiping = !1,
            o.isZooming = !1,
            o.isScrolling = !1,
            o.canPan = d.canPan(),
            o.startTime = (new Date()).getTime(),
            o.distanceX = o.distanceY = o.distance = 0,
            o.canvasWidth = Math.round(p[0].clientWidth),
            o.canvasHeight = Math.round(p[0].clientHeight),
            o.contentLastPos = null,
            o.contentStartPos = n.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
            },
            o.sliderStartPos = n.fancybox.getTranslate(p),
            o.stagePos = n.fancybox.getTranslate(d.$refs.stage),
            o.sliderStartPos.top -= o.stagePos.top,
            o.sliderStartPos.left -= o.stagePos.left,
            o.contentStartPos.top -= o.stagePos.top,
            o.contentStartPos.left -= o.stagePos.left,
            n(e).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")),
            n.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0),
            ((o.opts || o.canPan) && (c.is(o.$stage) || o.$stage.find(c).length) || (c.is(".fancybox-image") && i.preventDefault(),
            n.fancybox.isMobile && c.parents(".fancybox-caption").length)) && (o.isScrollable = l(c) || l(c.parent()),
            n.fancybox.isMobile && o.isScrollable || i.preventDefault(),
            (1 === o.startPoints.length || u.hasError) && (o.canPan ? (n.fancybox.stop(o.$content),
            o.isPanning = !0) : o.isSwiping = !0,
            o.$container.addClass("fancybox-is-grabbing")),
            2 === o.startPoints.length && "image" === u.type && (u.isLoaded || u.$ghost) && (o.canTap = !1,
            o.isSwiping = !1,
            o.isPanning = !1,
            o.isZooming = !0,
            n.fancybox.stop(o.$content),
            o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(t).scrollLeft(),
            o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(t).scrollTop(),
            o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width,
            o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height,
            o.startDistanceBetweenFingers = s(o.startPoints[0], o.startPoints[1]))));
        }
    }
    ,
    c.prototype.onscroll = function(t) {
        this.isScrolling = !0,
        e.removeEventListener("scroll", this.onscroll, !0);
    }
    ,
    c.prototype.ontouchmove = function(t) {
        var e = this;
        void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? e.isScrolling ? e.canTap = !1 : (e.newPoints = r(t),
        (e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(),
        e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = s(e.newPoints[0], e.startPoints[0]),
        e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))) : e.ontouchend(t);
    }
    ,
    c.prototype.onSwipe = function(e) {
        var r, s = this, a = s.instance, l = s.isSwiping, c = s.sliderStartPos.left || 0;
        if (!0 !== l)
            "x" == l && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? c += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? c -= Math.pow(-s.distanceX, .8) : c += s.distanceX),
            s.sliderLastPos = {
                top: "x" == l ? 0 : s.sliderStartPos.top + s.distanceY,
                left: c
            },
            s.requestId && (o(s.requestId),
            s.requestId = null),
            s.requestId = i((function() {
                s.sliderLastPos && (n.each(s.instance.slides, (function(t, e) {
                    var i = e.pos - s.instance.currPos;
                    n.fancybox.setTranslate(e.$slide, {
                        top: s.sliderLastPos.top,
                        left: s.sliderLastPos.left + i * s.canvasWidth + i * e.opts.gutter
                    });
                }
                )),
                s.$container.addClass("fancybox-is-sliding"));
            }
            ));
        else {
            if (Math.abs(s.distance) > 10) {
                if (s.canTap = !1,
                a.group.length < 2 && s.opts.vertical ? s.isSwiping = "y" : a.isDragging || !1 === s.opts.vertical || "auto" === s.opts.vertical && n(t).width() > 800 ? s.isSwiping = "x" : (r = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI),
                s.isSwiping = r > 45 && r < 135 ? "y" : "x"),
                "y" === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
                    return void (s.isScrolling = !0);
                a.isDragging = s.isSwiping,
                s.startPoints = s.newPoints,
                n.each(a.slides, (function(t, e) {
                    var i, o;
                    n.fancybox.stop(e.$slide),
                    i = n.fancybox.getTranslate(e.$slide),
                    o = n.fancybox.getTranslate(a.$refs.stage),
                    e.$slide.css({
                        transform: "",
                        opacity: "",
                        "transition-duration": ""
                    }).removeClass("fancybox-animated").removeClass((function(t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                    }
                    )),
                    e.pos === a.current.pos && (s.sliderStartPos.top = i.top - o.top,
                    s.sliderStartPos.left = i.left - o.left),
                    n.fancybox.setTranslate(e.$slide, {
                        top: i.top - o.top,
                        left: i.left - o.left
                    });
                }
                )),
                a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop();
            }
        }
    }
    ,
    c.prototype.onPan = function() {
        var t = this;
        s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1,
        t.contentLastPos = t.limitMovement(),
        t.requestId && o(t.requestId),
        t.requestId = i((function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
        }
        )));
    }
    ,
    c.prototype.limitMovement = function() {
        var t, e, n, i, o, r, s = this, a = s.canvasWidth, l = s.canvasHeight, c = s.distanceX, d = s.distanceY, u = s.contentStartPos, p = u.left, h = u.top, f = u.width, g = u.height;
        return o = f > a ? p + c : p,
        r = h + d,
        t = Math.max(0, .5 * a - .5 * f),
        e = Math.max(0, .5 * l - .5 * g),
        n = Math.min(a - f, .5 * a - .5 * f),
        i = Math.min(l - g, .5 * l - .5 * g),
        c > 0 && o > t && (o = t - 1 + Math.pow(-t + p + c, .8) || 0),
        c < 0 && o < n && (o = n + 1 - Math.pow(n - p - c, .8) || 0),
        d > 0 && r > e && (r = e - 1 + Math.pow(-e + h + d, .8) || 0),
        d < 0 && r < i && (r = i + 1 - Math.pow(i - h - d, .8) || 0),
        {
            top: r,
            left: o
        };
    }
    ,
    c.prototype.limitPosition = function(t, e, n, i) {
        var o = this.canvasWidth
          , r = this.canvasHeight;
        return t = n > o ? (t = t > 0 ? 0 : t) < o - n ? o - n : t : Math.max(0, o / 2 - n / 2),
        {
            top: e = i > r ? (e = e > 0 ? 0 : e) < r - i ? r - i : e : Math.max(0, r / 2 - i / 2),
            left: t
        };
    }
    ,
    c.prototype.onZoom = function() {
        var e = this
          , r = e.contentStartPos
          , a = r.width
          , l = r.height
          , c = r.left
          , d = r.top
          , u = s(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers
          , p = Math.floor(a * u)
          , h = Math.floor(l * u)
          , f = (a - p) * e.percentageOfImageAtPinchPointX
          , g = (l - h) * e.percentageOfImageAtPinchPointY
          , m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft()
          , v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop()
          , y = m - e.centerPointStartX
          , b = {
            top: d + (g + (v - e.centerPointStartY)),
            left: c + (f + y),
            scaleX: u,
            scaleY: u
        };
        e.canTap = !1,
        e.newWidth = p,
        e.newHeight = h,
        e.contentLastPos = b,
        e.requestId && o(e.requestId),
        e.requestId = i((function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
        }
        ));
    }
    ,
    c.prototype.ontouchend = function(t) {
        var i = this
          , s = i.isSwiping
          , a = i.isPanning
          , l = i.isZooming
          , c = i.isScrolling;
        if (i.endPoints = r(t),
        i.dMs = Math.max((new Date()).getTime() - i.startTime, 1),
        i.$container.removeClass("fancybox-is-grabbing"),
        n(e).off(".fb.touch"),
        e.removeEventListener("scroll", i.onscroll, !0),
        i.requestId && (o(i.requestId),
        i.requestId = null),
        i.isSwiping = !1,
        i.isPanning = !1,
        i.isZooming = !1,
        i.isScrolling = !1,
        i.instance.isDragging = !1,
        i.canTap)
            return i.onTap(t);
        i.speed = 100,
        i.velocityX = i.distanceX / i.dMs * .5,
        i.velocityY = i.distanceY / i.dMs * .5,
        a ? i.endPanning() : l ? i.endZooming() : i.endSwiping(s, c);
    }
    ,
    c.prototype.endSwiping = function(t, e) {
        var i = this
          , o = !1
          , r = i.instance.group.length
          , s = Math.abs(i.distanceX)
          , a = "x" == t && r > 1 && (i.dMs > 130 && s > 10 || s > 50);
        i.sliderLastPos = null,
        "y" == t && !e && Math.abs(i.distanceY) > 50 ? (n.fancybox.animate(i.instance.current.$slide, {
            top: i.sliderStartPos.top + i.distanceY + 150 * i.velocityY,
            opacity: 0
        }, 200),
        o = i.instance.close(!0, 250)) : a && i.distanceX > 0 ? o = i.instance.previous(300) : a && i.distanceX < 0 && (o = i.instance.next(300)),
        !1 !== o || "x" != t && "y" != t || i.instance.centerSlide(200),
        i.$container.removeClass("fancybox-is-sliding");
    }
    ,
    c.prototype.endPanning = function() {
        var t, e, i, o = this;
        o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left,
        e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX,
        e = o.contentLastPos.top + 500 * o.velocityY),
        (i = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width,
        i.height = o.contentStartPos.height,
        n.fancybox.animate(o.$content, i, 366));
    }
    ,
    c.prototype.endZooming = function() {
        var t, e, i, o, r = this, s = r.instance.current, a = r.newWidth, l = r.newHeight;
        r.contentLastPos && (t = r.contentLastPos.left,
        o = {
            top: e = r.contentLastPos.top,
            left: t,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        },
        n.fancybox.setTranslate(r.$content, o),
        a < r.canvasWidth && l < r.canvasHeight ? r.instance.scaleToFit(150) : a > s.width || l > s.height ? r.instance.scaleToActual(r.centerPointStartX, r.centerPointStartY, 150) : (i = r.limitPosition(t, e, a, l),
        n.fancybox.animate(r.$content, i, 150)));
    }
    ,
    c.prototype.onTap = function(e) {
        var i, o = this, s = n(e.target), a = o.instance, l = a.current, c = e && r(e) || o.startPoints, d = c[0] ? c[0].x - n(t).scrollLeft() - o.stagePos.left : 0, u = c[0] ? c[0].y - n(t).scrollTop() - o.stagePos.top : 0, p = function(t) {
            var i = l.opts[t];
            if (n.isFunction(i) && (i = i.apply(a, [l, e])),
            i)
                switch (i) {
                case "close":
                    a.close(o.startEvent);
                    break;
                case "toggleControls":
                    a.toggleControls();
                    break;
                case "next":
                    a.next();
                    break;
                case "nextOrClose":
                    a.group.length > 1 ? a.next() : a.close(o.startEvent);
                    break;
                case "zoom":
                    "image" == l.type && (l.isLoaded || l.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(d, u) : a.group.length < 2 && a.close(o.startEvent));
                }
        };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (s.is("img") || !(d > s[0].clientWidth + s.offset().left))) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                i = "Outside";
            else if (s.is(".fancybox-slide"))
                i = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(s).addBack().filter(s).length)
                    return;
                i = "Content";
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped),
                o.tapped = null,
                Math.abs(d - o.tapX) > 50 || Math.abs(u - o.tapY) > 50)
                    return this;
                p("dblclick" + i);
            } else
                o.tapX = d,
                o.tapY = u,
                l.opts["dblclick" + i] && l.opts["dblclick" + i] !== l.opts["click" + i] ? o.tapped = setTimeout((function() {
                    o.tapped = null,
                    a.isAnimating || p("click" + i);
                }
                ), 500) : p("click" + i);
            return this;
        }
    }
    ,
    n(e).on("onActivate.fb", (function(t, e) {
        e && !e.Guestures && (e.Guestures = new c(e));
    }
    )).on("beforeClose.fb", (function(t, e) {
        e && e.Guestures && e.Guestures.destroy();
    }
    ));
}(window, document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var n = function(t) {
        this.instance = t,
        this.init();
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var t = this
              , n = t.instance
              , i = n.group[n.currIndex].opts.slideShow;
            t.$button = n.$refs.toolbar.find("[data-fancybox-play]").on("click", (function() {
                t.toggle();
            }
            )),
            n.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner));
        },
        set: function(t) {
            var n = this
              , i = n.instance
              , o = i.current;
            o && (!0 === t || o.opts.loop || i.currIndex < i.group.length - 1) ? n.isActive && "video" !== o.contentType && (n.$progress && e.fancybox.animate(n.$progress.show(), {
                scaleX: 1
            }, o.opts.slideShow.speed),
            n.timer = setTimeout((function() {
                i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0);
            }
            ), o.opts.slideShow.speed)) : (n.stop(),
            i.idleSecondsCounter = 0,
            i.showControls());
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer),
            t.timer = null,
            t.$progress && t.$progress.removeAttr("style").hide();
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),
            t.isActive = !0,
            e.isComplete && t.set(!0),
            t.instance.trigger("onSlideShowChange", !0));
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),
            t.isActive = !1,
            t.instance.trigger("onSlideShowChange", !1),
            t.$progress && t.$progress.removeAttr("style").hide();
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start();
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
        },
        "afterShow.fb": function(t, e, n) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set();
        },
        "afterKeydown.fb": function(n, i, o, r, s) {
            var a = i && i.SlideShow;
            !a || !o.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (r.preventDefault(),
            a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop();
        }
    }),
    e(t).on("visibilitychange", (function() {
        var n = e.fancybox.getInstance()
          , i = n && n.SlideShow;
        i && i.isActive && (t.hidden ? i.clear() : i.set());
    }
    ));
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = {}, i = 0; i < e.length; i++) {
            var o = e[i];
            if (o && o[1]in t) {
                for (var r = 0; r < o.length; r++)
                    n[e[0][r]] = o[r];
                return n;
            }
        }
        return !1;
    }();
    if (n) {
        var i = {
            request: function(e) {
                (e = e || t.documentElement)[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
            },
            exit: function() {
                t[n.exitFullscreen]();
            },
            toggle: function(e) {
                e = e || t.documentElement,
                this.isFullscreen() ? this.exit() : this.request(e);
            },
            isFullscreen: function() {
                return Boolean(t[n.fullscreenElement]);
            },
            enabled: function() {
                return Boolean(t[n.fullscreenEnabled]);
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
            },
            fullScreen: {
                autoStart: !1
            }
        }),
        e(t).on(n.fullscreenchange, (function() {
            var t = i.isFullscreen()
              , n = e.fancybox.getInstance();
            n && (n.current && "image" === n.current.type && n.isAnimating && (n.isAnimating = !1,
            n.update(!0, !0, 0),
            n.isComplete || n.complete()),
            n.trigger("onFullscreenChange", t),
            n.$refs.container.toggleClass("fancybox-is-fullscreen", t),
            n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t));
        }
        ));
    }
    e(t).on({
        "onInit.fb": function(t, e) {
            n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", (function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                i.toggle();
            }
            )),
            e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(),
            e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            e && e.FullScreen && 70 === o && (i.preventDefault(),
            e.FullScreen.toggle());
        },
        "beforeClose.fb": function(t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit();
        }
    });
}(document, jQuery),
function(t, e) {
    "use strict";
    var n = "fancybox-thumbs"
      , i = n + "-active";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, e.fancybox.defaults);
    var o = function(t) {
        this.init(t);
    };
    e.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(t) {
            var e = this
              , n = t.group
              , i = 0;
            e.instance = t,
            e.opts = n[t.currIndex].opts.thumbs,
            t.Thumbs = e,
            e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, r = n.length; o < r && (n[o].thumb && i++,
            !(i > 1)); o++)
                ;
            i > 1 && e.opts ? (e.$button.removeAttr("style").on("click", (function() {
                e.toggle();
            }
            )),
            e.isActive = !0) : e.$button.hide();
        },
        create: function() {
            var t, i = this, o = i.instance, r = i.opts.parentEl, s = [];
            i.$grid || (i.$grid = e('<div class="' + n + " " + n + "-" + i.opts.axis + '"></div>').appendTo(o.$refs.container.find(r).addBack().filter(r)),
            i.$grid.on("click", "a", (function() {
                o.jumpTo(e(this).attr("data-index"));
            }
            ))),
            i.$list || (i.$list = e('<div class="' + n + '__list">').appendTo(i.$grid)),
            e.each(o.group, (function(e, n) {
                (t = n.thumb) || "image" !== n.type || (t = n.src),
                s.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
            }
            )),
            i.$list[0].innerHTML = s.join(""),
            "x" === i.opts.axis && i.$list.width(parseInt(i.$grid.css("padding-right"), 10) + o.group.length * i.$list.children().eq(0).outerWidth(!0));
        },
        focus: function(t) {
            var e, n, o = this, r = o.$list, s = o.$grid;
            o.instance.current && (n = (e = r.children().removeClass(i).filter('[data-index="' + o.instance.current.index + '"]').addClass(i)).position(),
            "y" === o.opts.axis && (n.top < 0 || n.top > r.height() - e.outerHeight()) ? r.stop().animate({
                scrollTop: r.scrollTop() + n.top
            }, t) : "x" === o.opts.axis && (n.left < s.scrollLeft() || n.left > s.scrollLeft() + (s.width() - e.outerWidth())) && r.parent().stop().animate({
                scrollLeft: n.left
            }, t));
        },
        update: function() {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            t.isVisible ? (t.$grid || t.create(),
            t.instance.trigger("onThumbsShow"),
            t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"),
            t.instance.update();
        },
        hide: function() {
            this.isVisible = !1,
            this.update();
        },
        show: function() {
            this.isVisible = !0,
            this.update();
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update();
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            var n;
            e && !e.Thumbs && (n = new o(e)).isActive && !0 === n.opts.autoStart && n.show();
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(i ? 0 : 250);
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            var r = e && e.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(),
            r.toggle());
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        }
    });
}(document, jQuery),
function(t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location;
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }),
    e(t).on("click", "[data-fancybox-share]", (function() {
        var t, n, i, o, r = e.fancybox.getInstance(), s = r.current || null;
        s && ("function" === e.type(s.opts.share.url) && (t = s.opts.share.url.apply(s, [r, s])),
        n = s.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === s.type ? encodeURIComponent(s.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (i = t,
        o = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        String(i).replace(/[&<>"'`=\/]/g, (function(t) {
            return o[t];
        }
        )))).replace(/\{\{descr\}\}/g, r.$caption ? encodeURIComponent(r.$caption.text()) : ""),
        e.fancybox.open({
            src: r.translate(r, n),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(t, e) {
                    r.$refs.container.one("beforeClose.fb", (function() {
                        t.close(null, 0);
                    }
                    )),
                    e.$content.find(".fancybox-share__button").click((function() {
                        return window.open(this.href, "Share", "width=550, height=450"),
                        !1;
                    }
                    ));
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }));
    }
    ));
}(document, jQuery),
function(t, e, n) {
    "use strict";
    function i() {
        var e = t.location.hash.substr(1)
          , n = e.split("-")
          , i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) && parseInt(n.pop(-1), 10) || 1;
        return {
            hash: e,
            index: i < 1 ? 1 : i,
            gallery: n.join("-")
        };
    }
    function o(t) {
        "" !== t.gallery && n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start");
    }
    function r(t) {
        var e, n;
        return !!t && ("" !== (n = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n);
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, (function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        }
        ));
    }
    ),
    n((function() {
        !1 !== n.fancybox.defaults.hash && (n(e).on({
            "onInit.fb": function(t, e) {
                var n, o;
                !1 !== e.group[e.currIndex].opts.hash && (n = i(),
                (o = r(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function(n, i, o, s) {
                var a;
                o && !1 !== o.opts.hash && (a = r(i)) && (i.currentHash = a + (i.group.length > 1 ? "-" + (o.index + 1) : ""),
                t.location.hash !== "#" + i.currentHash && (s && !i.origHash && (i.origHash = t.location.hash),
                i.hashTimer && clearTimeout(i.hashTimer),
                i.hashTimer = setTimeout((function() {
                    "replaceState"in t.history ? (t.history[s ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + i.currentHash),
                    s && (i.hasCreatedHistory = !0)) : t.location.hash = i.currentHash,
                    i.hashTimer = null;
                }
                ), 300)));
            },
            "beforeClose.fb": function(n, i, o) {
                o && !1 !== o.opts.hash && (clearTimeout(i.hashTimer),
                i.currentHash && i.hasCreatedHistory ? t.history.back() : i.currentHash && ("replaceState"in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (i.origHash || "")) : t.location.hash = i.origHash),
                i.currentHash = null);
            }
        }),
        n(t).on("hashchange.fb", (function() {
            var t = i()
              , e = null;
            n.each(n(".fancybox-container").get().reverse(), (function(t, i) {
                var o = n(i).data("FancyBox");
                if (o && o.currentHash)
                    return e = o,
                    !1;
            }
            )),
            e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null,
            e.close()) : "" !== t.gallery && o(t);
        }
        )),
        setTimeout((function() {
            n.fancybox.getInstance() || o(i());
        }
        ), 50));
    }
    ));
}(window, document, jQuery),
function(t, e) {
    "use strict";
    var n = (new Date()).getTime();
    e(t).on({
        "onInit.fb": function(t, e, i) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", (function(t) {
                var i = e.current
                  , o = (new Date()).getTime();
                e.group.length < 2 || !1 === i.opts.wheel || "auto" === i.opts.wheel && "image" !== i.type || (t.preventDefault(),
                t.stopPropagation(),
                i.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t,
                o - n < 250 || (n = o,
                e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())));
            }
            ));
        }
    });
}(document, jQuery),
window.Modernizr = function(t, e, n) {
    function i(t) {
        g.cssText = t;
    }
    function o(t, e) {
        return typeof t === e;
    }
    function r(t, e) {
        return !!~("" + t).indexOf(e);
    }
    function s(t, e) {
        for (var i in t) {
            var o = t[i];
            if (!r(o, "-") && g[o] !== n)
                return "pfx" != e || o;
        }
        return !1;
    }
    function a(t, e, i) {
        for (var r in t) {
            var s = e[t[r]];
            if (s !== n)
                return !1 === i ? t[r] : o(s, "function") ? s.bind(i || e) : s;
        }
        return !1;
    }
    function l(t, e, n) {
        var i = t.charAt(0).toUpperCase() + t.slice(1)
          , r = (t + " " + x.join(i + " ") + i).split(" ");
        return o(e, "string") || o(e, "undefined") ? s(r, e) : a(r = (t + " " + _.join(i + " ") + i).split(" "), e, n);
    }
    var c, d, u = {}, p = e.documentElement, h = "modernizr", f = e.createElement(h), g = f.style, m = e.createElement("input"), v = ":)", y = {}.toString, b = " -webkit- -moz- -o- -ms- ".split(" "), w = "Webkit Moz O ms", x = w.split(" "), _ = w.toLowerCase().split(" "), S = "http://www.w3.org/2000/svg", T = {}, $ = {}, C = {}, k = [], A = k.slice, E = function(t, n, i, o) {
        var r, s, a, l, c = e.createElement("div"), d = e.body, u = d || e.createElement("body");
        if (parseInt(i, 10))
            for (; i--; )
                (a = e.createElement("div")).id = o ? o[i] : h + (i + 1),
                c.appendChild(a);
        return r = ["&#173;", '<style id="s', h, '">', t, "</style>"].join(""),
        c.id = h,
        (d ? c : u).innerHTML += r,
        u.appendChild(c),
        d || (u.style.background = "",
        u.style.overflow = "hidden",
        l = p.style.overflow,
        p.style.overflow = "hidden",
        p.appendChild(u)),
        s = n(c, t),
        d ? c.parentNode.removeChild(c) : (u.parentNode.removeChild(u),
        p.style.overflow = l),
        !!s;
    }, P = function() {
        var t = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(i, r) {
            r = r || e.createElement(t[i] || "div");
            var s = (i = "on" + i)in r;
            return s || (r.setAttribute || (r = e.createElement("div")),
            r.setAttribute && r.removeAttribute && (r.setAttribute(i, ""),
            s = o(r[i], "function"),
            o(r[i], "undefined") || (r[i] = n),
            r.removeAttribute(i))),
            r = null,
            s;
        }
        ;
    }(), O = {}.hasOwnProperty;
    for (var M in d = o(O, "undefined") || o(O.call, "undefined") ? function(t, e) {
        return e in t && o(t.constructor.prototype[e], "undefined");
    }
    : function(t, e) {
        return O.call(t, e);
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(t) {
        var e = this;
        if ("function" != typeof e)
            throw new TypeError();
        var n = A.call(arguments, 1)
          , i = function() {
            if (this instanceof i) {
                var o = function() {};
                o.prototype = e.prototype;
                var r = new o()
                  , s = e.apply(r, n.concat(A.call(arguments)));
                return Object(s) === s ? s : r;
            }
            return e.apply(t, n.concat(A.call(arguments)));
        };
        return i;
    }
    ),
    T.flexbox = function() {
        return l("flexWrap");
    }
    ,
    T.flexboxlegacy = function() {
        return l("boxDirection");
    }
    ,
    T.canvas = function() {
        var t = e.createElement("canvas");
        return !!t.getContext && !!t.getContext("2d");
    }
    ,
    T.canvastext = function() {
        return !!u.canvas && !!o(e.createElement("canvas").getContext("2d").fillText, "function");
    }
    ,
    T.webgl = function() {
        return !!t.WebGLRenderingContext;
    }
    ,
    T.touch = function() {
        var n;
        return "ontouchstart"in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : E(["@media (", b.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), (function(t) {
            n = 9 === t.offsetTop;
        }
        )),
        n;
    }
    ,
    T.geolocation = function() {
        return "geolocation"in navigator;
    }
    ,
    T.postmessage = function() {
        return !!t.postMessage;
    }
    ,
    T.websqldatabase = function() {
        return !!t.openDatabase;
    }
    ,
    T.indexedDB = function() {
        return !!l("indexedDB", t);
    }
    ,
    T.hashchange = function() {
        return P("hashchange", t) && (e.documentMode === n || e.documentMode > 7);
    }
    ,
    T.history = function() {
        return !!t.history && !!history.pushState;
    }
    ,
    T.draganddrop = function() {
        var t = e.createElement("div");
        return "draggable"in t || "ondragstart"in t && "ondrop"in t;
    }
    ,
    T.websockets = function() {
        return "WebSocket"in t || "MozWebSocket"in t;
    }
    ,
    T.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"),
        r(g.backgroundColor, "rgba");
    }
    ,
    T.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"),
        r(g.backgroundColor, "rgba") || r(g.backgroundColor, "hsla");
    }
    ,
    T.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(g.background);
    }
    ,
    T.backgroundsize = function() {
        return l("backgroundSize");
    }
    ,
    T.borderimage = function() {
        return l("borderImage");
    }
    ,
    T.borderradius = function() {
        return l("borderRadius");
    }
    ,
    T.boxshadow = function() {
        return l("boxShadow");
    }
    ,
    T.textshadow = function() {
        return "" === e.createElement("div").style.textShadow;
    }
    ,
    T.opacity = function() {
        return function(t, e) {
            i(b.join(t + ";") + (e || ""));
        }("opacity:.55"),
        /^0.55$/.test(g.opacity);
    }
    ,
    T.cssanimations = function() {
        return l("animationName");
    }
    ,
    T.csscolumns = function() {
        return l("columnCount");
    }
    ,
    T.cssgradients = function() {
        var t = "background-image:";
        return i((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + b.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)),
        r(g.backgroundImage, "gradient");
    }
    ,
    T.cssreflections = function() {
        return l("boxReflect");
    }
    ,
    T.csstransforms = function() {
        return !!l("transform");
    }
    ,
    T.csstransforms3d = function() {
        var t = !!l("perspective");
        return t && "webkitPerspective"in p.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", (function(e, n) {
            t = 9 === e.offsetLeft && 3 === e.offsetHeight;
        }
        )),
        t;
    }
    ,
    T.csstransitions = function() {
        return l("transition");
    }
    ,
    T.generatedcontent = function() {
        var t;
        return E(["#", h, "{font:0/0 a}#", h, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), (function(e) {
            t = e.offsetHeight >= 3;
        }
        )),
        t;
    }
    ,
    T.video = function() {
        var t = e.createElement("video")
          , n = !1;
        try {
            (n = !!t.canPlayType) && ((n = new Boolean(n)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (t) {}
        return n;
    }
    ,
    T.audio = function() {
        var t = e.createElement("audio")
          , n = !1;
        try {
            (n = !!t.canPlayType) && ((n = new Boolean(n)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (t) {}
        return n;
    }
    ,
    T.localstorage = function() {
        try {
            return localStorage.setItem(h, h),
            localStorage.removeItem(h),
            !0;
        } catch (t) {
            return !1;
        }
    }
    ,
    T.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h),
            sessionStorage.removeItem(h),
            !0;
        } catch (t) {
            return !1;
        }
    }
    ,
    T.webworkers = function() {
        return !!t.Worker;
    }
    ,
    T.applicationcache = function() {
        return !!t.applicationCache;
    }
    ,
    T.svg = function() {
        return !!e.createElementNS && !!e.createElementNS(S, "svg").createSVGRect;
    }
    ,
    T.inlinesvg = function() {
        var t = e.createElement("div");
        return t.innerHTML = "<svg/>",
        (t.firstChild && t.firstChild.namespaceURI) == S;
    }
    ,
    T.smil = function() {
        return !!e.createElementNS && /SVGAnimate/.test(y.call(e.createElementNS(S, "animate")));
    }
    ,
    T.svgclippaths = function() {
        return !!e.createElementNS && /SVGClipPath/.test(y.call(e.createElementNS(S, "clipPath")));
    }
    ,
    T)
        d(T, M) && (c = M.toLowerCase(),
        u[c] = T[M](),
        k.push((u[c] ? "" : "no-") + c));
    return u.input || (u.input = function(n) {
        for (var i = 0, o = n.length; i < o; i++)
            C[n[i]] = n[i]in m;
        return C.list && (C.list = !!e.createElement("datalist") && !!t.HTMLDataListElement),
        C;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
    u.inputtypes = function(t) {
        for (var i, o, r, s = 0, a = t.length; s < a; s++)
            m.setAttribute("type", o = t[s]),
            (i = "text" !== m.type) && (m.value = v,
            m.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(o) && m.style.WebkitAppearance !== n ? (p.appendChild(m),
            i = (r = e.defaultView).getComputedStyle && "textfield" !== r.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight,
            p.removeChild(m)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? m.checkValidity && !1 === m.checkValidity() : m.value != v)),
            $[t[s]] = !!i;
        return $;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))),
    u.addTest = function(t, e) {
        if ("object" == typeof t)
            for (var i in t)
                d(t, i) && u.addTest(i, t[i]);
        else {
            if (t = t.toLowerCase(),
            u[t] !== n)
                return u;
            e = "function" == typeof e ? e() : e,
            p.className += " " + (e ? "" : "no-") + t,
            u[t] = e;
        }
        return u;
    }
    ,
    i(""),
    f = m = null,
    u._version = "2.8.3",
    u._prefixes = b,
    u._domPrefixes = _,
    u._cssomPrefixes = x,
    u.mq = function(e) {
        var n, i = t.matchMedia || t.msMatchMedia;
        return i ? i(e) && i(e).matches || !1 : (E("@media " + e + " { #" + h + " { position: absolute; } }", (function(e) {
            n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position;
        }
        )),
        n);
    }
    ,
    u.hasEvent = P,
    u.testProp = function(t) {
        return s([t]);
    }
    ,
    u.testAllProps = l,
    u.testStyles = E,
    u.prefixed = function(t, e, n) {
        return e ? l(t, e, n) : l(t, "pfx");
    }
    ,
    p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + k.join(" "),
    u;
}(this, this.document),
function(t, e) {
    function n(t, e) {
        var n = t.createElement("p")
          , i = t.getElementsByTagName("head")[0] || t.documentElement;
        return n.innerHTML = "x<style>" + e + "</style>",
        i.insertBefore(n.lastChild, i.firstChild);
    }
    function i() {
        var t = v.elements;
        return "string" == typeof t ? t.split(" ") : t;
    }
    function o(t) {
        var e = m[t[f]];
        return e || (e = {},
        g++,
        t[f] = g,
        m[g] = e),
        e;
    }
    function r(t, n, i) {
        return n || (n = e),
        d ? n.createElement(t) : (i || (i = o(n)),
        !(r = i.cache[t] ? i.cache[t].cloneNode() : h.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren || p.test(t) || r.tagUrn ? r : i.frag.appendChild(r));
        var r;
    }
    function s(t) {
        t || (t = e);
        var s = o(t);
        return v.shivCSS && !c && !s.hasCSS && (s.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
        d || function(t, e) {
            e.cache || (e.cache = {},
            e.createElem = t.createElement,
            e.createFrag = t.createDocumentFragment,
            e.frag = e.createFrag()),
            t.createElement = function(n) {
                return v.shivMethods ? r(n, t, e) : e.createElem(n);
            }
            ,
            t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, (function(t) {
                return e.createElem(t),
                e.frag.createElement(t),
                'c("' + t + '")';
            }
            )) + ");return n}")(v, e.frag);
        }(t, s),
        t;
    }
    function a(t) {
        for (var e, n = t.attributes, i = n.length, o = t.ownerDocument.createElement(b + ":" + t.nodeName); i--; )
            (e = n[i]).specified && o.setAttribute(e.nodeName, e.nodeValue);
        return o.style.cssText = t.style.cssText,
        o;
    }
    function l(t) {
        function e() {
            clearTimeout(l._removeSheetTimer),
            r && r.removeNode(!0),
            r = null;
        }
        var r, s, l = o(t), c = t.namespaces, d = t.parentWindow;
        return !w || t.printShived || (void 0 === c[b] && c.add(b),
        d.attachEvent("onbeforeprint", (function() {
            e();
            for (var o, l, c, d = t.styleSheets, u = [], p = d.length, h = Array(p); p--; )
                h[p] = d[p];
            for (; c = h.pop(); )
                if (!c.disabled && y.test(c.media)) {
                    try {
                        l = (o = c.imports).length;
                    } catch (t) {
                        l = 0;
                    }
                    for (p = 0; p < l; p++)
                        h.push(o[p]);
                    try {
                        u.push(c.cssText);
                    } catch (t) {}
                }
            u = function(t) {
                for (var e, n = t.split("{"), o = n.length, r = RegExp("(^|[\\s,>+~])(" + i().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), s = "$1" + b + "\\:$2"; o--; )
                    (e = n[o] = n[o].split("}"))[e.length - 1] = e[e.length - 1].replace(r, s),
                    n[o] = e.join("}");
                return n.join("{");
            }(u.reverse().join("")),
            s = function(t) {
                for (var e, n = t.getElementsByTagName("*"), o = n.length, r = RegExp("^(?:" + i().join("|") + ")$", "i"), s = []; o--; )
                    e = n[o],
                    r.test(e.nodeName) && s.push(e.applyElement(a(e)));
                return s;
            }(t),
            r = n(t, u);
        }
        )),
        d.attachEvent("onafterprint", (function() {
            (function(t) {
                for (var e = t.length; e--; )
                    t[e].removeNode();
            }
            )(s),
            clearTimeout(l._removeSheetTimer),
            l._removeSheetTimer = setTimeout(e, 500);
        }
        )),
        t.printShived = !0),
        t;
    }
    var c, d, u = t.html5 || {}, p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f = "_html5shiv", g = 0, m = {};
    !function() {
        try {
            var t = e.createElement("a");
            t.innerHTML = "<xyz></xyz>",
            c = "hidden"in t,
            d = 1 == t.childNodes.length || function() {
                e.createElement("a");
                var t = e.createDocumentFragment();
                return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement;
            }();
        } catch (t) {
            c = !0,
            d = !0;
        }
    }();
    var v = {
        elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== u.shivCSS,
        supportsUnknownElements: d,
        shivMethods: !1 !== u.shivMethods,
        type: "default",
        shivDocument: s,
        createElement: r,
        createDocumentFragment: function(t, n) {
            if (t || (t = e),
            d)
                return t.createDocumentFragment();
            for (var r = (n = n || o(t)).frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++)
                r.createElement(a[s]);
            return r;
        }
    };
    t.html5 = v,
    s(e);
    var y = /^$|\b(?:all|print)\b/
      , b = "html5shiv"
      , w = !d && function() {
        var n = e.documentElement;
        return void 0 !== e.namespaces && void 0 !== e.parentWindow && void 0 !== n.applyElement && void 0 !== n.removeNode && void 0 !== t.attachEvent;
    }();
    v.type += " print",
    v.shivPrint = l,
    l(e);
}(this, document),
function(t, e, n) {
    function i(t) {
        return "[object Function]" == m.call(t);
    }
    function o(t) {
        return "string" == typeof t;
    }
    function r() {}
    function s(t) {
        return !t || "loaded" == t || "complete" == t || "uninitialized" == t;
    }
    function a() {
        var t = v.shift();
        y = 1,
        t ? t.t ? f((function() {
            ("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1);
        }
        ), 0) : (t(),
        a()) : y = 0;
    }
    function l(t, n, i, o, r, l, c) {
        function d(e) {
            if (!h && s(u.readyState) && (b.r = h = 1,
            !y && a(),
            u.onload = u.onreadystatechange = null,
            e))
                for (var i in "img" != t && f((function() {
                    x.removeChild(u);
                }
                ), 50),
                C[n])
                    C[n].hasOwnProperty(i) && C[n][i].onload();
        }
        c = c || p.errorTimeout;
        var u = e.createElement(t)
          , h = 0
          , m = 0
          , b = {
            t: i,
            s: n,
            e: r,
            a: l,
            x: c
        };
        1 === C[n] && (m = 1,
        C[n] = []),
        "object" == t ? u.data = n : (u.src = n,
        u.type = t),
        u.width = u.height = "0",
        u.onerror = u.onload = u.onreadystatechange = function() {
            d.call(this, m);
        }
        ,
        v.splice(o, 0, b),
        "img" != t && (m || 2 === C[n] ? (x.insertBefore(u, w ? null : g),
        f(d, c)) : C[n].push(u));
    }
    function c(t, e, n, i, r) {
        return y = 0,
        e = e || "j",
        o(t) ? l("c" == e ? S : _, t, e, this.i++, n, i, r) : (v.splice(this.i++, 0, t),
        1 == v.length && a()),
        this;
    }
    function d() {
        var t = p;
        return t.loader = {
            load: c,
            i: 0
        },
        t;
    }
    var u, p, h = e.documentElement, f = t.setTimeout, g = e.getElementsByTagName("script")[0], m = {}.toString, v = [], y = 0, b = "MozAppearance"in h.style, w = b && !!e.createRange().compareNode, x = w ? h : g.parentNode, _ = (h = t.opera && "[object Opera]" == m.call(t.opera),
    h = !!e.attachEvent && !h,
    b ? "object" : h ? "script" : "img"), S = h ? "script" : _, T = Array.isArray || function(t) {
        return "[object Array]" == m.call(t);
    }
    , $ = [], C = {}, k = {
        timeout: function(t, e) {
            return e.length && (t.timeout = e[0]),
            t;
        }
    };
    p = function(t) {
        function e(t, e, n, o, r) {
            var s = function(t) {
                t = t.split("!");
                var e, n, i, o = $.length, r = t.pop(), s = t.length;
                for (r = {
                    url: r,
                    origUrl: r,
                    prefixes: t
                },
                n = 0; n < s; n++)
                    i = t[n].split("="),
                    (e = k[i.shift()]) && (r = e(r, i));
                for (n = 0; n < o; n++)
                    r = $[n](r);
                return r;
            }(t)
              , a = s.autoCallback;
            s.url.split(".").pop().split("?").shift(),
            s.bypass || (e && (e = i(e) ? e : e[t] || e[o] || e[t.split("/").pop().split("?")[0]]),
            s.instead ? s.instead(t, e, n, o, r) : (C[s.url] ? s.noexec = !0 : C[s.url] = 1,
            n.load(s.url, s.forceCSS || !s.forceJS && "css" == s.url.split(".").pop().split("?").shift() ? "c" : undefined, s.noexec, s.attrs, s.timeout),
            (i(e) || i(a)) && n.load((function() {
                d(),
                e && e(s.origUrl, r, o),
                a && a(s.origUrl, r, o),
                C[s.url] = 2;
            }
            ))));
        }
        function n(t, n) {
            function s(t, r) {
                if (t)
                    if (o(t))
                        r || (u = function() {
                            var t = [].slice.call(arguments);
                            p.apply(this, t),
                            h();
                        }
                        ),
                        e(t, u, n, 0, c);
                    else {
                        if (Object(t) === t)
                            for (l in a = function() {
                                var e, n = 0;
                                for (e in t)
                                    t.hasOwnProperty(e) && n++;
                                return n;
                            }(),
                            t)
                                t.hasOwnProperty(l) && (!r && !--a && (i(u) ? u = function() {
                                    var t = [].slice.call(arguments);
                                    p.apply(this, t),
                                    h();
                                }
                                : u[l] = function(t) {
                                    return function() {
                                        var e = [].slice.call(arguments);
                                        t && t.apply(this, e),
                                        h();
                                    }
                                    ;
                                }(p[l])),
                                e(t[l], u, n, l, c));
                    }
                else
                    !r && h();
            }
            var a, l, c = !!t.test, d = t.load || t.both, u = t.callback || r, p = u, h = t.complete || r;
            s(c ? t.yep : t.nope, !!d),
            d && s(d);
        }
        var s, a, l = this.yepnope.loader;
        if (o(t))
            e(t, 0, l, 0);
        else if (T(t))
            for (s = 0; s < t.length; s++)
                o(a = t[s]) ? e(a, 0, l, 0) : T(a) ? p(a) : Object(a) === a && n(a, l);
        else
            Object(t) === t && n(t, l);
    }
    ,
    p.addPrefix = function(t, e) {
        k[t] = e;
    }
    ,
    p.addFilter = function(t) {
        $.push(t);
    }
    ,
    p.errorTimeout = 1e4,
    null == e.readyState && e.addEventListener && (e.readyState = "loading",
    e.addEventListener("DOMContentLoaded", u = function() {
        e.removeEventListener("DOMContentLoaded", u, 0),
        e.readyState = "complete";
    }
    , 0)),
    t.yepnope = d(),
    t.yepnope.executeStack = a,
    t.yepnope.injectJs = function(t, n, i, o, l, c) {
        var d, u, h = e.createElement("script");
        o = o || p.errorTimeout;
        for (u in h.src = t,
        i)
            h.setAttribute(u, i[u]);
        n = c ? a : n || r,
        h.onreadystatechange = h.onload = function() {
            !d && s(h.readyState) && (d = 1,
            n(),
            h.onload = h.onreadystatechange = null);
        }
        ,
        f((function() {
            d || (d = 1,
            n(1));
        }
        ), o),
        l ? h.onload() : g.parentNode.insertBefore(h, g);
    }
    ,
    t.yepnope.injectCss = function(t, n, i, o, s, l) {
        var c;
        o = e.createElement("link"),
        n = l ? a : n || r;
        for (c in o.href = t,
        o.rel = "stylesheet",
        o.type = "text/css",
        i)
            o.setAttribute(c, i[c]);
        s || (g.parentNode.insertBefore(o, g),
        f(n, 0));
    }
    ;
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0));
}
,
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
        t(n),
        n;
    }
    : t(jQuery);
}((function(t) {
    var e = function() {
        if (t && t.fn && t.fn.select2 && t.fn.select2.amd)
            var e = t.fn.select2.amd;
        return function() {
            var t, n, i;
            e && e.requirejs || (e ? n = e : e = {},
            function(e) {
                var o, r, s, a, l = {}, c = {}, d = {}, u = {}, p = Object.prototype.hasOwnProperty, h = [].slice, f = /\.js$/;
                function g(t, e) {
                    return p.call(t, e);
                }
                function m(t, e) {
                    var n, i, o, r, s, a, l, c, u, p, h, g = e && e.split("/"), m = d.map, v = m && m["*"] || {};
                    if (t) {
                        for (s = (t = t.split("/")).length - 1,
                        d.nodeIdCompat && f.test(t[s]) && (t[s] = t[s].replace(f, "")),
                        "." === t[0].charAt(0) && g && (t = g.slice(0, g.length - 1).concat(t)),
                        u = 0; u < t.length; u++)
                            if ("." === (h = t[u]))
                                t.splice(u, 1),
                                u -= 1;
                            else {
                                if (".." === h) {
                                    if (0 === u || 1 === u && ".." === t[2] || ".." === t[u - 1])
                                        continue;
                                    u > 0 && (t.splice(u - 1, 2),
                                    u -= 2);
                                }
                            }
                        t = t.join("/");
                    }
                    if ((g || v) && m) {
                        for (u = (n = t.split("/")).length; u > 0; u -= 1) {
                            if (i = n.slice(0, u).join("/"),
                            g)
                                for (p = g.length; p > 0; p -= 1)
                                    if ((o = m[g.slice(0, p).join("/")]) && (o = o[i])) {
                                        r = o,
                                        a = u;
                                        break;
                                    }
                            if (r)
                                break;
                            !l && v && v[i] && (l = v[i],
                            c = u);
                        }
                        !r && l && (r = l,
                        a = c),
                        r && (n.splice(0, a, r),
                        t = n.join("/"));
                    }
                    return t;
                }
                function v(t, n) {
                    return function() {
                        var i = h.call(arguments, 0);
                        return "string" != typeof i[0] && 1 === i.length && i.push(null),
                        r.apply(e, i.concat([t, n]));
                    }
                    ;
                }
                function y(t) {
                    return function(e) {
                        l[t] = e;
                    }
                    ;
                }
                function b(t) {
                    if (g(c, t)) {
                        var n = c[t];
                        delete c[t],
                        u[t] = !0,
                        o.apply(e, n);
                    }
                    if (!g(l, t) && !g(u, t))
                        throw new Error("No " + t);
                    return l[t];
                }
                function w(t) {
                    var e, n = t ? t.indexOf("!") : -1;
                    return n > -1 && (e = t.substring(0, n),
                    t = t.substring(n + 1, t.length)),
                    [e, t];
                }
                function x(t) {
                    return t ? w(t) : [];
                }
                function _(t) {
                    return function() {
                        return d && d.config && d.config[t] || {};
                    }
                    ;
                }
                s = function(t, e) {
                    var n, i, o = w(t), r = o[0], s = e[1];
                    return t = o[1],
                    r && (n = b(r = m(r, s))),
                    r ? t = n && n.normalize ? n.normalize(t, (i = s,
                    function(t) {
                        return m(t, i);
                    }
                    )) : m(t, s) : (r = (o = w(t = m(t, s)))[0],
                    t = o[1],
                    r && (n = b(r))),
                    {
                        f: r ? r + "!" + t : t,
                        n: t,
                        pr: r,
                        p: n
                    };
                }
                ,
                a = {
                    require: function(t) {
                        return v(t);
                    },
                    exports: function(t) {
                        var e = l[t];
                        return void 0 !== e ? e : l[t] = {};
                    },
                    module: function(t) {
                        return {
                            id: t,
                            uri: "",
                            exports: l[t],
                            config: _(t)
                        };
                    }
                },
                o = function(t, n, i, o) {
                    var r, d, p, h, f, m, w, _ = [], S = typeof i;
                    if (m = x(o = o || t),
                    "undefined" === S || "function" === S) {
                        for (n = !n.length && i.length ? ["require", "exports", "module"] : n,
                        f = 0; f < n.length; f += 1)
                            if ("require" === (d = (h = s(n[f], m)).f))
                                _[f] = a.require(t);
                            else if ("exports" === d)
                                _[f] = a.exports(t),
                                w = !0;
                            else if ("module" === d)
                                r = _[f] = a.module(t);
                            else if (g(l, d) || g(c, d) || g(u, d))
                                _[f] = b(d);
                            else {
                                if (!h.p)
                                    throw new Error(t + " missing " + d);
                                h.p.load(h.n, v(o, !0), y(d), {}),
                                _[f] = l[d];
                            }
                        p = i ? i.apply(l[t], _) : void 0,
                        t && (r && r.exports !== e && r.exports !== l[t] ? l[t] = r.exports : p === e && w || (l[t] = p));
                    } else
                        t && (l[t] = i);
                }
                ,
                t = n = r = function(t, n, i, l, c) {
                    if ("string" == typeof t)
                        return a[t] ? a[t](n) : b(s(t, x(n)).f);
                    if (!t.splice) {
                        if ((d = t).deps && r(d.deps, d.callback),
                        !n)
                            return;
                        n.splice ? (t = n,
                        n = i,
                        i = null) : t = e;
                    }
                    return n = n || function() {}
                    ,
                    "function" == typeof i && (i = l,
                    l = c),
                    l ? o(e, t, n, i) : setTimeout((function() {
                        o(e, t, n, i);
                    }
                    ), 4),
                    r;
                }
                ,
                r.config = function(t) {
                    return r(t);
                }
                ,
                t._defined = l,
                (i = function(t, e, n) {
                    if ("string" != typeof t)
                        throw new Error("See almond README: incorrect module build, no module name");
                    e.splice || (n = e,
                    e = []),
                    g(l, t) || g(c, t) || (c[t] = [t, e, n]);
                }
                ).amd = {
                    jQuery: !0
                };
            }(),
            e.requirejs = t,
            e.require = n,
            e.define = i);
        }(),
        e.define("almond", (function() {}
        )),
        e.define("jquery", [], (function() {
            var e = t || $;
            return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            e;
        }
        )),
        e.define("select2/utils", ["jquery"], (function(t) {
            var e = {};
            function n(t) {
                var e = t.prototype
                  , n = [];
                for (var i in e)
                    "function" == typeof e[i] && ("constructor" !== i && n.push(i));
                return n;
            }
            e.Extend = function(t, e) {
                var n = {}.hasOwnProperty;
                function i() {
                    this.constructor = t;
                }
                for (var o in e)
                    n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype,
                t.prototype = new i(),
                t.__super__ = e.prototype,
                t;
            }
            ,
            e.Decorate = function(t, e) {
                var i = n(e)
                  , o = n(t);
                function r() {
                    var n = Array.prototype.unshift
                      , i = e.prototype.constructor.length
                      , o = t.prototype.constructor;
                    i > 0 && (n.call(arguments, t.prototype.constructor),
                    o = e.prototype.constructor),
                    o.apply(this, arguments);
                }
                e.displayName = t.displayName,
                r.prototype = new function() {
                    this.constructor = r;
                }
                ();
                for (var s = 0; s < o.length; s++) {
                    var a = o[s];
                    r.prototype[a] = t.prototype[a];
                }
                for (var l = function(t) {
                    var n = function() {};
                    t in r.prototype && (n = r.prototype[t]);
                    var i = e.prototype[t];
                    return function() {
                        var t = Array.prototype.unshift;
                        return t.call(arguments, n),
                        i.apply(this, arguments);
                    }
                    ;
                }, c = 0; c < i.length; c++) {
                    var d = i[c];
                    r.prototype[d] = l(d);
                }
                return r;
            }
            ;
            var i = function() {
                this.listeners = {};
            };
            i.prototype.on = function(t, e) {
                this.listeners = this.listeners || {},
                t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e];
            }
            ,
            i.prototype.trigger = function(t) {
                var e = Array.prototype.slice
                  , n = e.call(arguments, 1);
                this.listeners = this.listeners || {},
                null == n && (n = []),
                0 === n.length && n.push({}),
                n[0]._type = t,
                t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)),
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments);
            }
            ,
            i.prototype.invoke = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    t[n].apply(this, e);
            }
            ,
            e.Observable = i,
            e.generateChars = function(t) {
                for (var e = "", n = 0; n < t; n++)
                    e += Math.floor(36 * Math.random()).toString(36);
                return e;
            }
            ,
            e.bind = function(t, e) {
                return function() {
                    t.apply(e, arguments);
                }
                ;
            }
            ,
            e._convertData = function(t) {
                for (var e in t) {
                    var n = e.split("-")
                      , i = t;
                    if (1 !== n.length) {
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o];
                            (r = r.substring(0, 1).toLowerCase() + r.substring(1))in i || (i[r] = {}),
                            o == n.length - 1 && (i[r] = t[e]),
                            i = i[r];
                        }
                        delete t[e];
                    }
                }
                return t;
            }
            ,
            e.hasScroll = function(e, n) {
                var i = t(n)
                  , o = n.style.overflowX
                  , r = n.style.overflowY;
                return (o !== r || "hidden" !== r && "visible" !== r) && ("scroll" === o || "scroll" === r || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth));
            }
            ,
            e.escapeMarkup = function(t) {
                var e = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, (function(t) {
                    return e[t];
                }
                ));
            }
            ,
            e.appendMany = function(e, n) {
                if ("1.7" === t.fn.jquery.substr(0, 3)) {
                    var i = t();
                    t.map(n, (function(t) {
                        i = i.add(t);
                    }
                    )),
                    n = i;
                }
                e.append(n);
            }
            ,
            e.__cache = {};
            var o = 0;
            return e.GetUniqueElementId = function(t) {
                var e = t.getAttribute("data-select2-id");
                return null == e && (t.id ? (e = t.id,
                t.setAttribute("data-select2-id", e)) : (t.setAttribute("data-select2-id", ++o),
                e = o.toString())),
                e;
            }
            ,
            e.StoreData = function(t, n, i) {
                var o = e.GetUniqueElementId(t);
                e.__cache[o] || (e.__cache[o] = {}),
                e.__cache[o][n] = i;
            }
            ,
            e.GetData = function(n, i) {
                var o = e.GetUniqueElementId(n);
                return i ? e.__cache[o] && null != e.__cache[o][i] ? e.__cache[o][i] : t(n).data(i) : e.__cache[o];
            }
            ,
            e.RemoveData = function(t) {
                var n = e.GetUniqueElementId(t);
                null != e.__cache[n] && delete e.__cache[n],
                t.removeAttribute("data-select2-id");
            }
            ,
            e;
        }
        )),
        e.define("select2/results", ["jquery", "./utils"], (function(t, e) {
            function n(t, e, i) {
                this.$element = t,
                this.data = i,
                this.options = e,
                n.__super__.constructor.call(this);
            }
            return e.Extend(n, e.Observable),
            n.prototype.render = function() {
                var e = t('<ul class="select2-results__options" role="listbox"></ul>');
                return this.options.get("multiple") && e.attr("aria-multiselectable", "true"),
                this.$results = e,
                e;
            }
            ,
            n.prototype.clear = function() {
                this.$results.empty();
            }
            ,
            n.prototype.displayMessage = function(e) {
                var n = this.options.get("escapeMarkup");
                this.clear(),
                this.hideLoading();
                var i = t('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')
                  , o = this.options.get("translations").get(e.message);
                i.append(n(o(e.args))),
                i[0].className += " select2-results__message",
                this.$results.append(i);
            }
            ,
            n.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove();
            }
            ,
            n.prototype.append = function(t) {
                this.hideLoading();
                var e = [];
                if (null != t.results && 0 !== t.results.length) {
                    t.results = this.sort(t.results);
                    for (var n = 0; n < t.results.length; n++) {
                        var i = t.results[n]
                          , o = this.option(i);
                        e.push(o);
                    }
                    this.$results.append(e);
                } else
                    0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    });
            }
            ,
            n.prototype.position = function(t, e) {
                e.find(".select2-results").append(t);
            }
            ,
            n.prototype.sort = function(t) {
                return this.options.get("sorter")(t);
            }
            ,
            n.prototype.highlightFirstItem = function() {
                var t = this.$results.find(".select2-results__option[aria-selected]")
                  , e = t.filter("[aria-selected=true]");
                e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }
            ,
            n.prototype.setClasses = function() {
                var n = this;
                this.data.current((function(i) {
                    var o = t.map(i, (function(t) {
                        return t.id.toString();
                    }
                    ));
                    n.$results.find(".select2-results__option[aria-selected]").each((function() {
                        var n = t(this)
                          , i = e.GetData(this, "data")
                          , r = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && t.inArray(r, o) > -1 ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false");
                    }
                    ));
                }
                ));
            }
            ,
            n.prototype.showLoading = function(t) {
                this.hideLoading();
                var e = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(t)
                }
                  , n = this.option(e);
                n.className += " loading-results",
                this.$results.prepend(n);
            }
            ,
            n.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove();
            }
            ,
            n.prototype.option = function(n) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var o = {
                    role: "option",
                    "aria-selected": "false"
                }
                  , r = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                for (var s in (null != n.element && r.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete o["aria-selected"],
                o["aria-disabled"] = "true"),
                null == n.id && delete o["aria-selected"],
                null != n._resultId && (i.id = n._resultId),
                n.title && (i.title = n.title),
                n.children && (o.role = "group",
                o["aria-label"] = n.text,
                delete o["aria-selected"]),
                o) {
                    var a = o[s];
                    i.setAttribute(s, a);
                }
                if (n.children) {
                    var l = t(i)
                      , c = document.createElement("strong");
                    c.className = "select2-results__group";
                    t(c);
                    this.template(n, c);
                    for (var d = [], u = 0; u < n.children.length; u++) {
                        var p = n.children[u]
                          , h = this.option(p);
                        d.push(h);
                    }
                    var f = t("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested"
                    });
                    f.append(d),
                    l.append(c),
                    l.append(f);
                } else
                    this.template(n, i);
                return e.StoreData(i, "data", n),
                i;
            }
            ,
            n.prototype.bind = function(n, i) {
                var o = this
                  , r = n.id + "-results";
                this.$results.attr("id", r),
                n.on("results:all", (function(t) {
                    o.clear(),
                    o.append(t.data),
                    n.isOpen() && (o.setClasses(),
                    o.highlightFirstItem());
                }
                )),
                n.on("results:append", (function(t) {
                    o.append(t.data),
                    n.isOpen() && o.setClasses();
                }
                )),
                n.on("query", (function(t) {
                    o.hideMessages(),
                    o.showLoading(t);
                }
                )),
                n.on("select", (function() {
                    n.isOpen() && (o.setClasses(),
                    o.options.get("scrollAfterSelect") && o.highlightFirstItem());
                }
                )),
                n.on("unselect", (function() {
                    n.isOpen() && (o.setClasses(),
                    o.options.get("scrollAfterSelect") && o.highlightFirstItem());
                }
                )),
                n.on("open", (function() {
                    o.$results.attr("aria-expanded", "true"),
                    o.$results.attr("aria-hidden", "false"),
                    o.setClasses(),
                    o.ensureHighlightVisible();
                }
                )),
                n.on("close", (function() {
                    o.$results.attr("aria-expanded", "false"),
                    o.$results.attr("aria-hidden", "true"),
                    o.$results.removeAttr("aria-activedescendant");
                }
                )),
                n.on("results:toggle", (function() {
                    var t = o.getHighlightedResults();
                    0 !== t.length && t.trigger("mouseup");
                }
                )),
                n.on("results:select", (function() {
                    var t = o.getHighlightedResults();
                    if (0 !== t.length) {
                        var n = e.GetData(t[0], "data");
                        "true" == t.attr("aria-selected") ? o.trigger("close", {}) : o.trigger("select", {
                            data: n
                        });
                    }
                }
                )),
                n.on("results:previous", (function() {
                    var t = o.getHighlightedResults()
                      , e = o.$results.find("[aria-selected]")
                      , n = e.index(t);
                    if (!(n <= 0)) {
                        var i = n - 1;
                        0 === t.length && (i = 0);
                        var r = e.eq(i);
                        r.trigger("mouseenter");
                        var s = o.$results.offset().top
                          , a = r.offset().top
                          , l = o.$results.scrollTop() + (a - s);
                        0 === i ? o.$results.scrollTop(0) : a - s < 0 && o.$results.scrollTop(l);
                    }
                }
                )),
                n.on("results:next", (function() {
                    var t = o.getHighlightedResults()
                      , e = o.$results.find("[aria-selected]")
                      , n = e.index(t) + 1;
                    if (!(n >= e.length)) {
                        var i = e.eq(n);
                        i.trigger("mouseenter");
                        var r = o.$results.offset().top + o.$results.outerHeight(!1)
                          , s = i.offset().top + i.outerHeight(!1)
                          , a = o.$results.scrollTop() + s - r;
                        0 === n ? o.$results.scrollTop(0) : s > r && o.$results.scrollTop(a);
                    }
                }
                )),
                n.on("results:focus", (function(t) {
                    t.element.addClass("select2-results__option--highlighted");
                }
                )),
                n.on("results:message", (function(t) {
                    o.displayMessage(t);
                }
                )),
                t.fn.mousewheel && this.$results.on("mousewheel", (function(t) {
                    var e = o.$results.scrollTop()
                      , n = o.$results.get(0).scrollHeight - e + t.deltaY
                      , i = t.deltaY > 0 && e - t.deltaY <= 0
                      , r = t.deltaY < 0 && n <= o.$results.height();
                    i ? (o.$results.scrollTop(0),
                    t.preventDefault(),
                    t.stopPropagation()) : r && (o.$results.scrollTop(o.$results.get(0).scrollHeight - o.$results.height()),
                    t.preventDefault(),
                    t.stopPropagation());
                }
                )),
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) {
                    var i = t(this)
                      , r = e.GetData(this, "data");
                    "true" !== i.attr("aria-selected") ? o.trigger("select", {
                        originalEvent: n,
                        data: r
                    }) : o.options.get("multiple") ? o.trigger("unselect", {
                        originalEvent: n,
                        data: r
                    }) : o.trigger("close", {});
                }
                )),
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function(n) {
                    var i = e.GetData(this, "data");
                    o.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                    o.trigger("results:focus", {
                        data: i,
                        element: t(this)
                    });
                }
                ));
            }
            ,
            n.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted");
            }
            ,
            n.prototype.destroy = function() {
                this.$results.remove();
            }
            ,
            n.prototype.ensureHighlightVisible = function() {
                var t = this.getHighlightedResults();
                if (0 !== t.length) {
                    var e = this.$results.find("[aria-selected]").index(t)
                      , n = this.$results.offset().top
                      , i = t.offset().top
                      , o = this.$results.scrollTop() + (i - n)
                      , r = i - n;
                    o -= 2 * t.outerHeight(!1),
                    e <= 2 ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || r < 0) && this.$results.scrollTop(o);
                }
            }
            ,
            n.prototype.template = function(e, n) {
                var i = this.options.get("templateResult")
                  , o = this.options.get("escapeMarkup")
                  , r = i(e, n);
                null == r ? n.style.display = "none" : "string" == typeof r ? n.innerHTML = o(r) : t(n).append(r);
            }
            ,
            n;
        }
        )),
        e.define("select2/keys", [], (function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            };
        }
        )),
        e.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(t, e, n) {
            function i(t, e) {
                this.$element = t,
                this.options = e,
                i.__super__.constructor.call(this);
            }
            return e.Extend(i, e.Observable),
            i.prototype.render = function() {
                var n = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0,
                null != e.GetData(this.$element[0], "old-tabindex") ? this._tabindex = e.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                n.attr("title", this.$element.attr("title")),
                n.attr("tabindex", this._tabindex),
                n.attr("aria-disabled", "false"),
                this.$selection = n,
                n;
            }
            ,
            i.prototype.bind = function(t, e) {
                var i = this
                  , o = t.id + "-results";
                this.container = t,
                this.$selection.on("focus", (function(t) {
                    i.trigger("focus", t);
                }
                )),
                this.$selection.on("blur", (function(t) {
                    i._handleBlur(t);
                }
                )),
                this.$selection.on("keydown", (function(t) {
                    i.trigger("keypress", t),
                    t.which === n.SPACE && t.preventDefault();
                }
                )),
                t.on("results:focus", (function(t) {
                    i.$selection.attr("aria-activedescendant", t.data._resultId);
                }
                )),
                t.on("selection:update", (function(t) {
                    i.update(t.data);
                }
                )),
                t.on("open", (function() {
                    i.$selection.attr("aria-expanded", "true"),
                    i.$selection.attr("aria-owns", o),
                    i._attachCloseHandler(t);
                }
                )),
                t.on("close", (function() {
                    i.$selection.attr("aria-expanded", "false"),
                    i.$selection.removeAttr("aria-activedescendant"),
                    i.$selection.removeAttr("aria-owns"),
                    i.$selection.trigger("focus"),
                    i._detachCloseHandler(t);
                }
                )),
                t.on("enable", (function() {
                    i.$selection.attr("tabindex", i._tabindex),
                    i.$selection.attr("aria-disabled", "false");
                }
                )),
                t.on("disable", (function() {
                    i.$selection.attr("tabindex", "-1"),
                    i.$selection.attr("aria-disabled", "true");
                }
                ));
            }
            ,
            i.prototype._handleBlur = function(e) {
                var n = this;
                window.setTimeout((function() {
                    document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e);
                }
                ), 1);
            }
            ,
            i.prototype._attachCloseHandler = function(n) {
                t(document.body).on("mousedown.select2." + n.id, (function(n) {
                    var i = t(n.target).closest(".select2");
                    t(".select2.select2-container--open").each((function() {
                        this != i[0] && e.GetData(this, "element").select2("close");
                    }
                    ));
                }
                ));
            }
            ,
            i.prototype._detachCloseHandler = function(e) {
                t(document.body).off("mousedown.select2." + e.id);
            }
            ,
            i.prototype.position = function(t, e) {
                e.find(".selection").append(t);
            }
            ,
            i.prototype.destroy = function() {
                this._detachCloseHandler(this.container);
            }
            ,
            i.prototype.update = function(t) {
                throw new Error("The `update` method must be defined in child classes.");
            }
            ,
            i.prototype.isEnabled = function() {
                return !this.isDisabled();
            }
            ,
            i.prototype.isDisabled = function() {
                return this.options.get("disabled");
            }
            ,
            i;
        }
        )),
        e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(t, e, n, i) {
            function o() {
                o.__super__.constructor.apply(this, arguments);
            }
            return n.Extend(o, e),
            o.prototype.render = function() {
                var t = o.__super__.render.call(this);
                return t.addClass("select2-selection--single"),
                t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                t;
            }
            ,
            o.prototype.bind = function(t, e) {
                var n = this;
                o.__super__.bind.apply(this, arguments);
                var i = t.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", i).attr("role", "textbox").attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", i),
                this.$selection.on("mousedown", (function(t) {
                    1 === t.which && n.trigger("toggle", {
                        originalEvent: t
                    });
                }
                )),
                this.$selection.on("focus", (function(t) {}
                )),
                this.$selection.on("blur", (function(t) {}
                )),
                t.on("focus", (function(e) {
                    t.isOpen() || n.$selection.trigger("focus");
                }
                ));
            }
            ,
            o.prototype.clear = function() {
                var t = this.$selection.find(".select2-selection__rendered");
                t.empty(),
                t.removeAttr("title");
            }
            ,
            o.prototype.display = function(t, e) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(t, e));
            }
            ,
            o.prototype.selectionContainer = function() {
                return t("<span></span>");
            }
            ,
            o.prototype.update = function(t) {
                if (0 !== t.length) {
                    var e = t[0]
                      , n = this.$selection.find(".select2-selection__rendered")
                      , i = this.display(e, n);
                    n.empty().append(i);
                    var o = e.title || e.text;
                    o ? n.attr("title", o) : n.removeAttr("title");
                } else
                    this.clear();
            }
            ,
            o;
        }
        )),
        e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(t, e, n) {
            function i(t, e) {
                i.__super__.constructor.apply(this, arguments);
            }
            return n.Extend(i, e),
            i.prototype.render = function() {
                var t = i.__super__.render.call(this);
                return t.addClass("select2-selection--multiple"),
                t.html('<ul class="select2-selection__rendered"></ul>'),
                t;
            }
            ,
            i.prototype.bind = function(e, o) {
                var r = this;
                i.__super__.bind.apply(this, arguments),
                this.$selection.on("click", (function(t) {
                    r.trigger("toggle", {
                        originalEvent: t
                    });
                }
                )),
                this.$selection.on("click", ".select2-selection__choice__remove", (function(e) {
                    if (!r.isDisabled()) {
                        var i = t(this).parent()
                          , o = n.GetData(i[0], "data");
                        r.trigger("unselect", {
                            originalEvent: e,
                            data: o
                        });
                    }
                }
                ));
            }
            ,
            i.prototype.clear = function() {
                var t = this.$selection.find(".select2-selection__rendered");
                t.empty(),
                t.removeAttr("title");
            }
            ,
            i.prototype.display = function(t, e) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(t, e));
            }
            ,
            i.prototype.selectionContainer = function() {
                return t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
            }
            ,
            i.prototype.update = function(t) {
                if (this.clear(),
                0 !== t.length) {
                    for (var e = [], i = 0; i < t.length; i++) {
                        var o = t[i]
                          , r = this.selectionContainer()
                          , s = this.display(o, r);
                        r.append(s);
                        var a = o.title || o.text;
                        a && r.attr("title", a),
                        n.StoreData(r[0], "data", o),
                        e.push(r);
                    }
                    var l = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(l, e);
                }
            }
            ,
            i;
        }
        )),
        e.define("select2/selection/placeholder", ["../utils"], (function(t) {
            function e(t, e, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                t.call(this, e, n);
            }
            return e.prototype.normalizePlaceholder = function(t, e) {
                return "string" == typeof e && (e = {
                    id: "",
                    text: e
                }),
                e;
            }
            ,
            e.prototype.createPlaceholder = function(t, e) {
                var n = this.selectionContainer();
                return n.html(this.display(e)),
                n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                n;
            }
            ,
            e.prototype.update = function(t, e) {
                var n = 1 == e.length && e[0].id != this.placeholder.id;
                if (e.length > 1 || n)
                    return t.call(this, e);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i);
            }
            ,
            e;
        }
        )),
        e.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(t, e, n) {
            function i() {}
            return i.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                this.$selection.on("mousedown", ".select2-selection__clear", (function(t) {
                    i._handleClear(t);
                }
                )),
                e.on("keypress", (function(t) {
                    i._handleKeyboardClear(t, e);
                }
                ));
            }
            ,
            i.prototype._handleClear = function(t, e) {
                if (!this.isDisabled()) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        e.stopPropagation();
                        var o = n.GetData(i[0], "data")
                          , r = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var s = {
                            data: o
                        };
                        if (this.trigger("clear", s),
                        s.prevented)
                            this.$element.val(r);
                        else {
                            for (var a = 0; a < o.length; a++)
                                if (s = {
                                    data: o[a]
                                },
                                this.trigger("unselect", s),
                                s.prevented)
                                    return void this.$element.val(r);
                            this.$element.trigger("input").trigger("change"),
                            this.trigger("toggle", {});
                        }
                    }
                }
            }
            ,
            i.prototype._handleKeyboardClear = function(t, n, i) {
                i.isOpen() || n.which != e.DELETE && n.which != e.BACKSPACE || this._handleClear(n);
            }
            ,
            i.prototype.update = function(e, i) {
                if (e.call(this, i),
                !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                    var o = this.options.get("translations").get("removeAllItems")
                      , r = t('<span class="select2-selection__clear" title="' + o() + '">&times;</span>');
                    n.StoreData(r[0], "data", i),
                    this.$selection.find(".select2-selection__rendered").prepend(r);
                }
            }
            ,
            i;
        }
        )),
        e.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(t, e, n) {
            function i(t, e, n) {
                t.call(this, e, n);
            }
            return i.prototype.render = function(e) {
                var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = n,
                this.$search = n.find("input");
                var i = e.call(this);
                return this._transferTabIndex(),
                i;
            }
            ,
            i.prototype.bind = function(t, i, o) {
                var r = this
                  , s = i.id + "-results";
                t.call(this, i, o),
                i.on("open", (function() {
                    r.$search.attr("aria-controls", s),
                    r.$search.trigger("focus");
                }
                )),
                i.on("close", (function() {
                    r.$search.val(""),
                    r.$search.removeAttr("aria-controls"),
                    r.$search.removeAttr("aria-activedescendant"),
                    r.$search.trigger("focus");
                }
                )),
                i.on("enable", (function() {
                    r.$search.prop("disabled", !1),
                    r._transferTabIndex();
                }
                )),
                i.on("disable", (function() {
                    r.$search.prop("disabled", !0);
                }
                )),
                i.on("focus", (function(t) {
                    r.$search.trigger("focus");
                }
                )),
                i.on("results:focus", (function(t) {
                    t.data._resultId ? r.$search.attr("aria-activedescendant", t.data._resultId) : r.$search.removeAttr("aria-activedescendant");
                }
                )),
                this.$selection.on("focusin", ".select2-search--inline", (function(t) {
                    r.trigger("focus", t);
                }
                )),
                this.$selection.on("focusout", ".select2-search--inline", (function(t) {
                    r._handleBlur(t);
                }
                )),
                this.$selection.on("keydown", ".select2-search--inline", (function(t) {
                    if (t.stopPropagation(),
                    r.trigger("keypress", t),
                    r._keyUpPrevented = t.isDefaultPrevented(),
                    t.which === n.BACKSPACE && "" === r.$search.val()) {
                        var i = r.$searchContainer.prev(".select2-selection__choice");
                        if (i.length > 0) {
                            var o = e.GetData(i[0], "data");
                            r.searchRemoveChoice(o),
                            t.preventDefault();
                        }
                    }
                }
                )),
                this.$selection.on("click", ".select2-search--inline", (function(t) {
                    r.$search.val() && t.stopPropagation();
                }
                ));
                var a = document.documentMode
                  , l = a && a <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", (function(t) {
                    l ? r.$selection.off("input.search input.searchcheck") : r.$selection.off("keyup.search");
                }
                )),
                this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(t) {
                    if (l && "input" === t.type)
                        r.$selection.off("input.search input.searchcheck");
                    else {
                        var e = t.which;
                        e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && r.handleSearch(t);
                    }
                }
                ));
            }
            ,
            i.prototype._transferTabIndex = function(t) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1");
            }
            ,
            i.prototype.createPlaceholder = function(t, e) {
                this.$search.attr("placeholder", e.text);
            }
            ,
            i.prototype.update = function(t, e) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                t.call(this, e),
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                this.resizeSearch(),
                n && this.$search.trigger("focus");
            }
            ,
            i.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", {
                        term: t
                    });
                }
                this._keyUpPrevented = !1;
            }
            ,
            i.prototype.searchRemoveChoice = function(t, e) {
                this.trigger("unselect", {
                    data: e
                }),
                this.$search.val(e.text),
                this.handleSearch();
            }
            ,
            i.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var t = "";
                "" !== this.$search.attr("placeholder") ? t = this.$selection.find(".select2-selection__rendered").width() : t = .75 * (this.$search.val().length + 1) + "em";
                this.$search.css("width", t);
            }
            ,
            i;
        }
        )),
        e.define("select2/selection/eventRelay", ["jquery"], (function(t) {
            function e() {}
            return e.prototype.bind = function(e, n, i) {
                var o = this
                  , r = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                  , s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                e.call(this, n, i),
                n.on("*", (function(e, n) {
                    if (-1 !== t.inArray(e, r)) {
                        n = n || {};
                        var i = t.Event("select2:" + e, {
                            params: n
                        });
                        o.$element.trigger(i),
                        -1 !== t.inArray(e, s) && (n.prevented = i.isDefaultPrevented());
                    }
                }
                ));
            }
            ,
            e;
        }
        )),
        e.define("select2/translation", ["jquery", "require"], (function(t, e) {
            function n(t) {
                this.dict = t || {};
            }
            return n.prototype.all = function() {
                return this.dict;
            }
            ,
            n.prototype.get = function(t) {
                return this.dict[t];
            }
            ,
            n.prototype.extend = function(e) {
                this.dict = t.extend({}, e.all(), this.dict);
            }
            ,
            n._cache = {},
            n.loadPath = function(t) {
                if (!(t in n._cache)) {
                    var i = e(t);
                    n._cache[t] = i;
                }
                return new n(n._cache[t]);
            }
            ,
            n;
        }
        )),
        e.define("select2/diacritics", [], (function() {
            return {
                "Ⓐ": "A",
                "Ａ": "A",
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ầ": "A",
                "Ấ": "A",
                "Ẫ": "A",
                "Ẩ": "A",
                "Ã": "A",
                "Ā": "A",
                "Ă": "A",
                "Ằ": "A",
                "Ắ": "A",
                "Ẵ": "A",
                "Ẳ": "A",
                "Ȧ": "A",
                "Ǡ": "A",
                "Ä": "A",
                "Ǟ": "A",
                "Ả": "A",
                "Å": "A",
                "Ǻ": "A",
                "Ǎ": "A",
                "Ȁ": "A",
                "Ȃ": "A",
                "Ạ": "A",
                "Ậ": "A",
                "Ặ": "A",
                "Ḁ": "A",
                "Ą": "A",
                "Ⱥ": "A",
                "Ɐ": "A",
                "Ꜳ": "AA",
                "Æ": "AE",
                "Ǽ": "AE",
                "Ǣ": "AE",
                "Ꜵ": "AO",
                "Ꜷ": "AU",
                "Ꜹ": "AV",
                "Ꜻ": "AV",
                "Ꜽ": "AY",
                "Ⓑ": "B",
                "Ｂ": "B",
                "Ḃ": "B",
                "Ḅ": "B",
                "Ḇ": "B",
                "Ƀ": "B",
                "Ƃ": "B",
                "Ɓ": "B",
                "Ⓒ": "C",
                "Ｃ": "C",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "Ç": "C",
                "Ḉ": "C",
                "Ƈ": "C",
                "Ȼ": "C",
                "Ꜿ": "C",
                "Ⓓ": "D",
                "Ｄ": "D",
                "Ḋ": "D",
                "Ď": "D",
                "Ḍ": "D",
                "Ḑ": "D",
                "Ḓ": "D",
                "Ḏ": "D",
                "Đ": "D",
                "Ƌ": "D",
                "Ɗ": "D",
                "Ɖ": "D",
                "Ꝺ": "D",
                "Ǳ": "DZ",
                "Ǆ": "DZ",
                "ǲ": "Dz",
                "ǅ": "Dz",
                "Ⓔ": "E",
                "Ｅ": "E",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ề": "E",
                "Ế": "E",
                "Ễ": "E",
                "Ể": "E",
                "Ẽ": "E",
                "Ē": "E",
                "Ḕ": "E",
                "Ḗ": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ë": "E",
                "Ẻ": "E",
                "Ě": "E",
                "Ȅ": "E",
                "Ȇ": "E",
                "Ẹ": "E",
                "Ệ": "E",
                "Ȩ": "E",
                "Ḝ": "E",
                "Ę": "E",
                "Ḙ": "E",
                "Ḛ": "E",
                "Ɛ": "E",
                "Ǝ": "E",
                "Ⓕ": "F",
                "Ｆ": "F",
                "Ḟ": "F",
                "Ƒ": "F",
                "Ꝼ": "F",
                "Ⓖ": "G",
                "Ｇ": "G",
                "Ǵ": "G",
                "Ĝ": "G",
                "Ḡ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ǧ": "G",
                "Ģ": "G",
                "Ǥ": "G",
                "Ɠ": "G",
                "Ꞡ": "G",
                "Ᵹ": "G",
                "Ꝿ": "G",
                "Ⓗ": "H",
                "Ｈ": "H",
                "Ĥ": "H",
                "Ḣ": "H",
                "Ḧ": "H",
                "Ȟ": "H",
                "Ḥ": "H",
                "Ḩ": "H",
                "Ḫ": "H",
                "Ħ": "H",
                "Ⱨ": "H",
                "Ⱶ": "H",
                "Ɥ": "H",
                "Ⓘ": "I",
                "Ｉ": "I",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "İ": "I",
                "Ï": "I",
                "Ḯ": "I",
                "Ỉ": "I",
                "Ǐ": "I",
                "Ȉ": "I",
                "Ȋ": "I",
                "Ị": "I",
                "Į": "I",
                "Ḭ": "I",
                "Ɨ": "I",
                "Ⓙ": "J",
                "Ｊ": "J",
                "Ĵ": "J",
                "Ɉ": "J",
                "Ⓚ": "K",
                "Ｋ": "K",
                "Ḱ": "K",
                "Ǩ": "K",
                "Ḳ": "K",
                "Ķ": "K",
                "Ḵ": "K",
                "Ƙ": "K",
                "Ⱪ": "K",
                "Ꝁ": "K",
                "Ꝃ": "K",
                "Ꝅ": "K",
                "Ꞣ": "K",
                "Ⓛ": "L",
                "Ｌ": "L",
                "Ŀ": "L",
                "Ĺ": "L",
                "Ľ": "L",
                "Ḷ": "L",
                "Ḹ": "L",
                "Ļ": "L",
                "Ḽ": "L",
                "Ḻ": "L",
                "Ł": "L",
                "Ƚ": "L",
                "Ɫ": "L",
                "Ⱡ": "L",
                "Ꝉ": "L",
                "Ꝇ": "L",
                "Ꞁ": "L",
                "Ǉ": "LJ",
                "ǈ": "Lj",
                "Ⓜ": "M",
                "Ｍ": "M",
                "Ḿ": "M",
                "Ṁ": "M",
                "Ṃ": "M",
                "Ɱ": "M",
                "Ɯ": "M",
                "Ⓝ": "N",
                "Ｎ": "N",
                "Ǹ": "N",
                "Ń": "N",
                "Ñ": "N",
                "Ṅ": "N",
                "Ň": "N",
                "Ṇ": "N",
                "Ņ": "N",
                "Ṋ": "N",
                "Ṉ": "N",
                "Ƞ": "N",
                "Ɲ": "N",
                "Ꞑ": "N",
                "Ꞥ": "N",
                "Ǌ": "NJ",
                "ǋ": "Nj",
                "Ⓞ": "O",
                "Ｏ": "O",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Ồ": "O",
                "Ố": "O",
                "Ỗ": "O",
                "Ổ": "O",
                "Õ": "O",
                "Ṍ": "O",
                "Ȭ": "O",
                "Ṏ": "O",
                "Ō": "O",
                "Ṑ": "O",
                "Ṓ": "O",
                "Ŏ": "O",
                "Ȯ": "O",
                "Ȱ": "O",
                "Ö": "O",
                "Ȫ": "O",
                "Ỏ": "O",
                "Ő": "O",
                "Ǒ": "O",
                "Ȍ": "O",
                "Ȏ": "O",
                "Ơ": "O",
                "Ờ": "O",
                "Ớ": "O",
                "Ỡ": "O",
                "Ở": "O",
                "Ợ": "O",
                "Ọ": "O",
                "Ộ": "O",
                "Ǫ": "O",
                "Ǭ": "O",
                "Ø": "O",
                "Ǿ": "O",
                "Ɔ": "O",
                "Ɵ": "O",
                "Ꝋ": "O",
                "Ꝍ": "O",
                "Œ": "OE",
                "Ƣ": "OI",
                "Ꝏ": "OO",
                "Ȣ": "OU",
                "Ⓟ": "P",
                "Ｐ": "P",
                "Ṕ": "P",
                "Ṗ": "P",
                "Ƥ": "P",
                "Ᵽ": "P",
                "Ꝑ": "P",
                "Ꝓ": "P",
                "Ꝕ": "P",
                "Ⓠ": "Q",
                "Ｑ": "Q",
                "Ꝗ": "Q",
                "Ꝙ": "Q",
                "Ɋ": "Q",
                "Ⓡ": "R",
                "Ｒ": "R",
                "Ŕ": "R",
                "Ṙ": "R",
                "Ř": "R",
                "Ȑ": "R",
                "Ȓ": "R",
                "Ṛ": "R",
                "Ṝ": "R",
                "Ŗ": "R",
                "Ṟ": "R",
                "Ɍ": "R",
                "Ɽ": "R",
                "Ꝛ": "R",
                "Ꞧ": "R",
                "Ꞃ": "R",
                "Ⓢ": "S",
                "Ｓ": "S",
                "ẞ": "S",
                "Ś": "S",
                "Ṥ": "S",
                "Ŝ": "S",
                "Ṡ": "S",
                "Š": "S",
                "Ṧ": "S",
                "Ṣ": "S",
                "Ṩ": "S",
                "Ș": "S",
                "Ş": "S",
                "Ȿ": "S",
                "Ꞩ": "S",
                "Ꞅ": "S",
                "Ⓣ": "T",
                "Ｔ": "T",
                "Ṫ": "T",
                "Ť": "T",
                "Ṭ": "T",
                "Ț": "T",
                "Ţ": "T",
                "Ṱ": "T",
                "Ṯ": "T",
                "Ŧ": "T",
                "Ƭ": "T",
                "Ʈ": "T",
                "Ⱦ": "T",
                "Ꞇ": "T",
                "Ꜩ": "TZ",
                "Ⓤ": "U",
                "Ｕ": "U",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ũ": "U",
                "Ṹ": "U",
                "Ū": "U",
                "Ṻ": "U",
                "Ŭ": "U",
                "Ü": "U",
                "Ǜ": "U",
                "Ǘ": "U",
                "Ǖ": "U",
                "Ǚ": "U",
                "Ủ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ǔ": "U",
                "Ȕ": "U",
                "Ȗ": "U",
                "Ư": "U",
                "Ừ": "U",
                "Ứ": "U",
                "Ữ": "U",
                "Ử": "U",
                "Ự": "U",
                "Ụ": "U",
                "Ṳ": "U",
                "Ų": "U",
                "Ṷ": "U",
                "Ṵ": "U",
                "Ʉ": "U",
                "Ⓥ": "V",
                "Ｖ": "V",
                "Ṽ": "V",
                "Ṿ": "V",
                "Ʋ": "V",
                "Ꝟ": "V",
                "Ʌ": "V",
                "Ꝡ": "VY",
                "Ⓦ": "W",
                "Ｗ": "W",
                "Ẁ": "W",
                "Ẃ": "W",
                "Ŵ": "W",
                "Ẇ": "W",
                "Ẅ": "W",
                "Ẉ": "W",
                "Ⱳ": "W",
                "Ⓧ": "X",
                "Ｘ": "X",
                "Ẋ": "X",
                "Ẍ": "X",
                "Ⓨ": "Y",
                "Ｙ": "Y",
                "Ỳ": "Y",
                "Ý": "Y",
                "Ŷ": "Y",
                "Ỹ": "Y",
                "Ȳ": "Y",
                "Ẏ": "Y",
                "Ÿ": "Y",
                "Ỷ": "Y",
                "Ỵ": "Y",
                "Ƴ": "Y",
                "Ɏ": "Y",
                "Ỿ": "Y",
                "Ⓩ": "Z",
                "Ｚ": "Z",
                "Ź": "Z",
                "Ẑ": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "Ẓ": "Z",
                "Ẕ": "Z",
                "Ƶ": "Z",
                "Ȥ": "Z",
                "Ɀ": "Z",
                "Ⱬ": "Z",
                "Ꝣ": "Z",
                "ⓐ": "a",
                "ａ": "a",
                "ẚ": "a",
                "à": "a",
                "á": "a",
                "â": "a",
                "ầ": "a",
                "ấ": "a",
                "ẫ": "a",
                "ẩ": "a",
                "ã": "a",
                "ā": "a",
                "ă": "a",
                "ằ": "a",
                "ắ": "a",
                "ẵ": "a",
                "ẳ": "a",
                "ȧ": "a",
                "ǡ": "a",
                "ä": "a",
                "ǟ": "a",
                "ả": "a",
                "å": "a",
                "ǻ": "a",
                "ǎ": "a",
                "ȁ": "a",
                "ȃ": "a",
                "ạ": "a",
                "ậ": "a",
                "ặ": "a",
                "ḁ": "a",
                "ą": "a",
                "ⱥ": "a",
                "ɐ": "a",
                "ꜳ": "aa",
                "æ": "ae",
                "ǽ": "ae",
                "ǣ": "ae",
                "ꜵ": "ao",
                "ꜷ": "au",
                "ꜹ": "av",
                "ꜻ": "av",
                "ꜽ": "ay",
                "ⓑ": "b",
                "ｂ": "b",
                "ḃ": "b",
                "ḅ": "b",
                "ḇ": "b",
                "ƀ": "b",
                "ƃ": "b",
                "ɓ": "b",
                "ⓒ": "c",
                "ｃ": "c",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "ç": "c",
                "ḉ": "c",
                "ƈ": "c",
                "ȼ": "c",
                "ꜿ": "c",
                "ↄ": "c",
                "ⓓ": "d",
                "ｄ": "d",
                "ḋ": "d",
                "ď": "d",
                "ḍ": "d",
                "ḑ": "d",
                "ḓ": "d",
                "ḏ": "d",
                "đ": "d",
                "ƌ": "d",
                "ɖ": "d",
                "ɗ": "d",
                "ꝺ": "d",
                "ǳ": "dz",
                "ǆ": "dz",
                "ⓔ": "e",
                "ｅ": "e",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ề": "e",
                "ế": "e",
                "ễ": "e",
                "ể": "e",
                "ẽ": "e",
                "ē": "e",
                "ḕ": "e",
                "ḗ": "e",
                "ĕ": "e",
                "ė": "e",
                "ë": "e",
                "ẻ": "e",
                "ě": "e",
                "ȅ": "e",
                "ȇ": "e",
                "ẹ": "e",
                "ệ": "e",
                "ȩ": "e",
                "ḝ": "e",
                "ę": "e",
                "ḙ": "e",
                "ḛ": "e",
                "ɇ": "e",
                "ɛ": "e",
                "ǝ": "e",
                "ⓕ": "f",
                "ｆ": "f",
                "ḟ": "f",
                "ƒ": "f",
                "ꝼ": "f",
                "ⓖ": "g",
                "ｇ": "g",
                "ǵ": "g",
                "ĝ": "g",
                "ḡ": "g",
                "ğ": "g",
                "ġ": "g",
                "ǧ": "g",
                "ģ": "g",
                "ǥ": "g",
                "ɠ": "g",
                "ꞡ": "g",
                "ᵹ": "g",
                "ꝿ": "g",
                "ⓗ": "h",
                "ｈ": "h",
                "ĥ": "h",
                "ḣ": "h",
                "ḧ": "h",
                "ȟ": "h",
                "ḥ": "h",
                "ḩ": "h",
                "ḫ": "h",
                "ẖ": "h",
                "ħ": "h",
                "ⱨ": "h",
                "ⱶ": "h",
                "ɥ": "h",
                "ƕ": "hv",
                "ⓘ": "i",
                "ｉ": "i",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "ï": "i",
                "ḯ": "i",
                "ỉ": "i",
                "ǐ": "i",
                "ȉ": "i",
                "ȋ": "i",
                "ị": "i",
                "į": "i",
                "ḭ": "i",
                "ɨ": "i",
                "ı": "i",
                "ⓙ": "j",
                "ｊ": "j",
                "ĵ": "j",
                "ǰ": "j",
                "ɉ": "j",
                "ⓚ": "k",
                "ｋ": "k",
                "ḱ": "k",
                "ǩ": "k",
                "ḳ": "k",
                "ķ": "k",
                "ḵ": "k",
                "ƙ": "k",
                "ⱪ": "k",
                "ꝁ": "k",
                "ꝃ": "k",
                "ꝅ": "k",
                "ꞣ": "k",
                "ⓛ": "l",
                "ｌ": "l",
                "ŀ": "l",
                "ĺ": "l",
                "ľ": "l",
                "ḷ": "l",
                "ḹ": "l",
                "ļ": "l",
                "ḽ": "l",
                "ḻ": "l",
                "ſ": "l",
                "ł": "l",
                "ƚ": "l",
                "ɫ": "l",
                "ⱡ": "l",
                "ꝉ": "l",
                "ꞁ": "l",
                "ꝇ": "l",
                "ǉ": "lj",
                "ⓜ": "m",
                "ｍ": "m",
                "ḿ": "m",
                "ṁ": "m",
                "ṃ": "m",
                "ɱ": "m",
                "ɯ": "m",
                "ⓝ": "n",
                "ｎ": "n",
                "ǹ": "n",
                "ń": "n",
                "ñ": "n",
                "ṅ": "n",
                "ň": "n",
                "ṇ": "n",
                "ņ": "n",
                "ṋ": "n",
                "ṉ": "n",
                "ƞ": "n",
                "ɲ": "n",
                "ŉ": "n",
                "ꞑ": "n",
                "ꞥ": "n",
                "ǌ": "nj",
                "ⓞ": "o",
                "ｏ": "o",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "ồ": "o",
                "ố": "o",
                "ỗ": "o",
                "ổ": "o",
                "õ": "o",
                "ṍ": "o",
                "ȭ": "o",
                "ṏ": "o",
                "ō": "o",
                "ṑ": "o",
                "ṓ": "o",
                "ŏ": "o",
                "ȯ": "o",
                "ȱ": "o",
                "ö": "o",
                "ȫ": "o",
                "ỏ": "o",
                "ő": "o",
                "ǒ": "o",
                "ȍ": "o",
                "ȏ": "o",
                "ơ": "o",
                "ờ": "o",
                "ớ": "o",
                "ỡ": "o",
                "ở": "o",
                "ợ": "o",
                "ọ": "o",
                "ộ": "o",
                "ǫ": "o",
                "ǭ": "o",
                "ø": "o",
                "ǿ": "o",
                "ɔ": "o",
                "ꝋ": "o",
                "ꝍ": "o",
                "ɵ": "o",
                "œ": "oe",
                "ƣ": "oi",
                "ȣ": "ou",
                "ꝏ": "oo",
                "ⓟ": "p",
                "ｐ": "p",
                "ṕ": "p",
                "ṗ": "p",
                "ƥ": "p",
                "ᵽ": "p",
                "ꝑ": "p",
                "ꝓ": "p",
                "ꝕ": "p",
                "ⓠ": "q",
                "ｑ": "q",
                "ɋ": "q",
                "ꝗ": "q",
                "ꝙ": "q",
                "ⓡ": "r",
                "ｒ": "r",
                "ŕ": "r",
                "ṙ": "r",
                "ř": "r",
                "ȑ": "r",
                "ȓ": "r",
                "ṛ": "r",
                "ṝ": "r",
                "ŗ": "r",
                "ṟ": "r",
                "ɍ": "r",
                "ɽ": "r",
                "ꝛ": "r",
                "ꞧ": "r",
                "ꞃ": "r",
                "ⓢ": "s",
                "ｓ": "s",
                "ß": "s",
                "ś": "s",
                "ṥ": "s",
                "ŝ": "s",
                "ṡ": "s",
                "š": "s",
                "ṧ": "s",
                "ṣ": "s",
                "ṩ": "s",
                "ș": "s",
                "ş": "s",
                "ȿ": "s",
                "ꞩ": "s",
                "ꞅ": "s",
                "ẛ": "s",
                "ⓣ": "t",
                "ｔ": "t",
                "ṫ": "t",
                "ẗ": "t",
                "ť": "t",
                "ṭ": "t",
                "ț": "t",
                "ţ": "t",
                "ṱ": "t",
                "ṯ": "t",
                "ŧ": "t",
                "ƭ": "t",
                "ʈ": "t",
                "ⱦ": "t",
                "ꞇ": "t",
                "ꜩ": "tz",
                "ⓤ": "u",
                "ｕ": "u",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ũ": "u",
                "ṹ": "u",
                "ū": "u",
                "ṻ": "u",
                "ŭ": "u",
                "ü": "u",
                "ǜ": "u",
                "ǘ": "u",
                "ǖ": "u",
                "ǚ": "u",
                "ủ": "u",
                "ů": "u",
                "ű": "u",
                "ǔ": "u",
                "ȕ": "u",
                "ȗ": "u",
                "ư": "u",
                "ừ": "u",
                "ứ": "u",
                "ữ": "u",
                "ử": "u",
                "ự": "u",
                "ụ": "u",
                "ṳ": "u",
                "ų": "u",
                "ṷ": "u",
                "ṵ": "u",
                "ʉ": "u",
                "ⓥ": "v",
                "ｖ": "v",
                "ṽ": "v",
                "ṿ": "v",
                "ʋ": "v",
                "ꝟ": "v",
                "ʌ": "v",
                "ꝡ": "vy",
                "ⓦ": "w",
                "ｗ": "w",
                "ẁ": "w",
                "ẃ": "w",
                "ŵ": "w",
                "ẇ": "w",
                "ẅ": "w",
                "ẘ": "w",
                "ẉ": "w",
                "ⱳ": "w",
                "ⓧ": "x",
                "ｘ": "x",
                "ẋ": "x",
                "ẍ": "x",
                "ⓨ": "y",
                "ｙ": "y",
                "ỳ": "y",
                "ý": "y",
                "ŷ": "y",
                "ỹ": "y",
                "ȳ": "y",
                "ẏ": "y",
                "ÿ": "y",
                "ỷ": "y",
                "ẙ": "y",
                "ỵ": "y",
                "ƴ": "y",
                "ɏ": "y",
                "ỿ": "y",
                "ⓩ": "z",
                "ｚ": "z",
                "ź": "z",
                "ẑ": "z",
                "ż": "z",
                "ž": "z",
                "ẓ": "z",
                "ẕ": "z",
                "ƶ": "z",
                "ȥ": "z",
                "ɀ": "z",
                "ⱬ": "z",
                "ꝣ": "z",
                "Ά": "Α",
                "Έ": "Ε",
                "Ή": "Η",
                "Ί": "Ι",
                "Ϊ": "Ι",
                "Ό": "Ο",
                "Ύ": "Υ",
                "Ϋ": "Υ",
                "Ώ": "Ω",
                "ά": "α",
                "έ": "ε",
                "ή": "η",
                "ί": "ι",
                "ϊ": "ι",
                "ΐ": "ι",
                "ό": "ο",
                "ύ": "υ",
                "ϋ": "υ",
                "ΰ": "υ",
                "ώ": "ω",
                "ς": "σ",
                "’": "'"
            };
        }
        )),
        e.define("select2/data/base", ["../utils"], (function(t) {
            function e(t, n) {
                e.__super__.constructor.call(this);
            }
            return t.Extend(e, t.Observable),
            e.prototype.current = function(t) {
                throw new Error("The `current` method must be defined in child classes.");
            }
            ,
            e.prototype.query = function(t, e) {
                throw new Error("The `query` method must be defined in child classes.");
            }
            ,
            e.prototype.bind = function(t, e) {}
            ,
            e.prototype.destroy = function() {}
            ,
            e.prototype.generateResultId = function(e, n) {
                var i = e.id + "-result-";
                return i += t.generateChars(4),
                null != n.id ? i += "-" + n.id.toString() : i += "-" + t.generateChars(4),
                i;
            }
            ,
            e;
        }
        )),
        e.define("select2/data/select", ["./base", "../utils", "jquery"], (function(t, e, n) {
            function i(t, e) {
                this.$element = t,
                this.options = e,
                i.__super__.constructor.call(this);
            }
            return e.Extend(i, t),
            i.prototype.current = function(t) {
                var e = []
                  , i = this;
                this.$element.find(":selected").each((function() {
                    var t = n(this)
                      , o = i.item(t);
                    e.push(o);
                }
                )),
                t(e);
            }
            ,
            i.prototype.select = function(t) {
                var e = this;
                if (t.selected = !0,
                n(t.element).is("option"))
                    return t.element.selected = !0,
                    void this.$element.trigger("input").trigger("change");
                if (this.$element.prop("multiple"))
                    this.current((function(i) {
                        var o = [];
                        (t = [t]).push.apply(t, i);
                        for (var r = 0; r < t.length; r++) {
                            var s = t[r].id;
                            -1 === n.inArray(s, o) && o.push(s);
                        }
                        e.$element.val(o),
                        e.$element.trigger("input").trigger("change");
                    }
                    ));
                else {
                    var i = t.id;
                    this.$element.val(i),
                    this.$element.trigger("input").trigger("change");
                }
            }
            ,
            i.prototype.unselect = function(t) {
                var e = this;
                if (this.$element.prop("multiple")) {
                    if (t.selected = !1,
                    n(t.element).is("option"))
                        return t.element.selected = !1,
                        void this.$element.trigger("input").trigger("change");
                    this.current((function(i) {
                        for (var o = [], r = 0; r < i.length; r++) {
                            var s = i[r].id;
                            s !== t.id && -1 === n.inArray(s, o) && o.push(s);
                        }
                        e.$element.val(o),
                        e.$element.trigger("input").trigger("change");
                    }
                    ));
                }
            }
            ,
            i.prototype.bind = function(t, e) {
                var n = this;
                this.container = t,
                t.on("select", (function(t) {
                    n.select(t.data);
                }
                )),
                t.on("unselect", (function(t) {
                    n.unselect(t.data);
                }
                ));
            }
            ,
            i.prototype.destroy = function() {
                this.$element.find("*").each((function() {
                    e.RemoveData(this);
                }
                ));
            }
            ,
            i.prototype.query = function(t, e) {
                var i = []
                  , o = this;
                this.$element.children().each((function() {
                    var e = n(this);
                    if (e.is("option") || e.is("optgroup")) {
                        var r = o.item(e)
                          , s = o.matches(t, r);
                        null !== s && i.push(s);
                    }
                }
                )),
                e({
                    results: i
                });
            }
            ,
            i.prototype.addOptions = function(t) {
                e.appendMany(this.$element, t);
            }
            ,
            i.prototype.option = function(t) {
                var i;
                t.children ? (i = document.createElement("optgroup")).label = t.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = t.text : i.innerText = t.text,
                void 0 !== t.id && (i.value = t.id),
                t.disabled && (i.disabled = !0),
                t.selected && (i.selected = !0),
                t.title && (i.title = t.title);
                var o = n(i)
                  , r = this._normalizeItem(t);
                return r.element = i,
                e.StoreData(i, "data", r),
                o;
            }
            ,
            i.prototype.item = function(t) {
                var i = {};
                if (null != (i = e.GetData(t[0], "data")))
                    return i;
                if (t.is("option"))
                    i = {
                        id: t.val(),
                        text: t.text(),
                        disabled: t.prop("disabled"),
                        selected: t.prop("selected"),
                        title: t.prop("title")
                    };
                else {
                    if (t.is("optgroup")) {
                        i = {
                            text: t.prop("label"),
                            children: [],
                            title: t.prop("title")
                        };
                        for (var o = t.children("option"), r = [], s = 0; s < o.length; s++) {
                            var a = n(o[s])
                              , l = this.item(a);
                            r.push(l);
                        }
                        i.children = r;
                    }
                }
                return (i = this._normalizeItem(i)).element = t[0],
                e.StoreData(t[0], "data", i),
                i;
            }
            ,
            i.prototype._normalizeItem = function(t) {
                t !== Object(t) && (t = {
                    id: t,
                    text: t
                });
                return null != (t = n.extend({}, {
                    text: ""
                }, t)).id && (t.id = t.id.toString()),
                null != t.text && (t.text = t.text.toString()),
                null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)),
                n.extend({}, {
                    selected: !1,
                    disabled: !1
                }, t);
            }
            ,
            i.prototype.matches = function(t, e) {
                return this.options.get("matcher")(t, e);
            }
            ,
            i;
        }
        )),
        e.define("select2/data/array", ["./select", "../utils", "jquery"], (function(t, e, n) {
            function i(t, e) {
                this._dataToConvert = e.get("data") || [],
                i.__super__.constructor.call(this, t, e);
            }
            return e.Extend(i, t),
            i.prototype.bind = function(t, e) {
                i.__super__.bind.call(this, t, e),
                this.addOptions(this.convertToOptions(this._dataToConvert));
            }
            ,
            i.prototype.select = function(t) {
                var e = this.$element.find("option").filter((function(e, n) {
                    return n.value == t.id.toString();
                }
                ));
                0 === e.length && (e = this.option(t),
                this.addOptions(e)),
                i.__super__.select.call(this, t);
            }
            ,
            i.prototype.convertToOptions = function(t) {
                var i = this
                  , o = this.$element.find("option")
                  , r = o.map((function() {
                    return i.item(n(this)).id;
                }
                )).get()
                  , s = [];
                function a(t) {
                    return function() {
                        return n(this).val() == t.id;
                    }
                    ;
                }
                for (var l = 0; l < t.length; l++) {
                    var c = this._normalizeItem(t[l]);
                    if (n.inArray(c.id, r) >= 0) {
                        var d = o.filter(a(c))
                          , u = this.item(d)
                          , p = n.extend(!0, {}, c, u)
                          , h = this.option(p);
                        d.replaceWith(h);
                    } else {
                        var f = this.option(c);
                        if (c.children) {
                            var g = this.convertToOptions(c.children);
                            e.appendMany(f, g);
                        }
                        s.push(f);
                    }
                }
                return s;
            }
            ,
            i;
        }
        )),
        e.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(t, e, n) {
            function i(t, e) {
                this.ajaxOptions = this._applyDefaults(e.get("ajax")),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                i.__super__.constructor.call(this, t, e);
            }
            return e.Extend(i, t),
            i.prototype._applyDefaults = function(t) {
                var e = {
                    data: function(t) {
                        return n.extend({}, t, {
                            q: t.term
                        });
                    },
                    transport: function(t, e, i) {
                        var o = n.ajax(t);
                        return o.then(e),
                        o.fail(i),
                        o;
                    }
                };
                return n.extend({}, e, t, !0);
            }
            ,
            i.prototype.processResults = function(t) {
                return t;
            }
            ,
            i.prototype.query = function(t, e) {
                var i = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                var o = n.extend({
                    type: "GET"
                }, this.ajaxOptions);
                function r() {
                    var r = o.transport(o, (function(o) {
                        var r = i.processResults(o, t);
                        i.options.get("debug") && window.console && console.error && (r && r.results && n.isArray(r.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                        e(r);
                    }
                    ), (function() {
                        (!("status"in r) || 0 !== r.status && "0" !== r.status) && i.trigger("results:message", {
                            message: "errorLoading"
                        });
                    }
                    ));
                    i._request = r;
                }
                "function" == typeof o.url && (o.url = o.url.call(this.$element, t)),
                "function" == typeof o.data && (o.data = o.data.call(this.$element, t)),
                this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(r, this.ajaxOptions.delay)) : r();
            }
            ,
            i;
        }
        )),
        e.define("select2/data/tags", ["jquery"], (function(t) {
            function e(e, n, i) {
                var o = i.get("tags")
                  , r = i.get("createTag");
                void 0 !== r && (this.createTag = r);
                var s = i.get("insertTag");
                if (void 0 !== s && (this.insertTag = s),
                e.call(this, n, i),
                t.isArray(o))
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a]
                          , c = this._normalizeItem(l)
                          , d = this.option(c);
                        this.$element.append(d);
                    }
            }
            return e.prototype.query = function(t, e, n) {
                var i = this;
                this._removeOldTags(),
                null != e.term && null == e.page ? t.call(this, e, (function t(o, r) {
                    for (var s = o.results, a = 0; a < s.length; a++) {
                        var l = s[a]
                          , c = null != l.children && !t({
                            results: l.children
                        }, !0);
                        if ((l.text || "").toUpperCase() === (e.term || "").toUpperCase() || c)
                            return !r && (o.data = s,
                            void n(o));
                    }
                    if (r)
                        return !0;
                    var d = i.createTag(e);
                    if (null != d) {
                        var u = i.option(d);
                        u.attr("data-select2-tag", !0),
                        i.addOptions([u]),
                        i.insertTag(s, d);
                    }
                    o.results = s,
                    n(o);
                }
                )) : t.call(this, e, n);
            }
            ,
            e.prototype.createTag = function(e, n) {
                var i = t.trim(n.term);
                return "" === i ? null : {
                    id: i,
                    text: i
                };
            }
            ,
            e.prototype.insertTag = function(t, e, n) {
                e.unshift(n);
            }
            ,
            e.prototype._removeOldTags = function(e) {
                this.$element.find("option[data-select2-tag]").each((function() {
                    this.selected || t(this).remove();
                }
                ));
            }
            ,
            e;
        }
        )),
        e.define("select2/data/tokenizer", ["jquery"], (function(t) {
            function e(t, e, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i),
                t.call(this, e, n);
            }
            return e.prototype.bind = function(t, e, n) {
                t.call(this, e, n),
                this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field");
            }
            ,
            e.prototype.query = function(e, n, i) {
                var o = this;
                n.term = n.term || "";
                var r = this.tokenizer(n, this.options, (function(e) {
                    var n = o._normalizeItem(e);
                    if (!o.$element.find("option").filter((function() {
                        return t(this).val() === n.id;
                    }
                    )).length) {
                        var i = o.option(n);
                        i.attr("data-select2-tag", !0),
                        o._removeOldTags(),
                        o.addOptions([i]);
                    }
                    !function(t) {
                        o.trigger("select", {
                            data: t
                        });
                    }(n);
                }
                ));
                r.term !== n.term && (this.$search.length && (this.$search.val(r.term),
                this.$search.trigger("focus")),
                n.term = r.term),
                e.call(this, n, i);
            }
            ,
            e.prototype.tokenizer = function(e, n, i, o) {
                for (var r = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(t) {
                    return {
                        id: t.term,
                        text: t.term
                    };
                }
                ; a < s.length; ) {
                    var c = s[a];
                    if (-1 !== t.inArray(c, r)) {
                        var d = s.substr(0, a)
                          , u = l(t.extend({}, n, {
                            term: d
                        }));
                        null != u ? (o(u),
                        s = s.substr(a + 1) || "",
                        a = 0) : a++;
                    } else
                        a++;
                }
                return {
                    term: s
                };
            }
            ,
            e;
        }
        )),
        e.define("select2/data/minimumInputLength", [], (function() {
            function t(t, e, n) {
                this.minimumInputLength = n.get("minimumInputLength"),
                t.call(this, e, n);
            }
            return t.prototype.query = function(t, e, n) {
                e.term = e.term || "",
                e.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: e.term,
                        params: e
                    }
                }) : t.call(this, e, n);
            }
            ,
            t;
        }
        )),
        e.define("select2/data/maximumInputLength", [], (function() {
            function t(t, e, n) {
                this.maximumInputLength = n.get("maximumInputLength"),
                t.call(this, e, n);
            }
            return t.prototype.query = function(t, e, n) {
                e.term = e.term || "",
                this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: e.term,
                        params: e
                    }
                }) : t.call(this, e, n);
            }
            ,
            t;
        }
        )),
        e.define("select2/data/maximumSelectionLength", [], (function() {
            function t(t, e, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"),
                t.call(this, e, n);
            }
            return t.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                e.on("select", (function() {
                    i._checkIfMaximumSelected();
                }
                ));
            }
            ,
            t.prototype.query = function(t, e, n) {
                var i = this;
                this._checkIfMaximumSelected((function() {
                    t.call(i, e, n);
                }
                ));
            }
            ,
            t.prototype._checkIfMaximumSelected = function(t, e) {
                var n = this;
                this.current((function(t) {
                    var i = null != t ? t.length : 0;
                    n.maximumSelectionLength > 0 && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: n.maximumSelectionLength
                        }
                    }) : e && e();
                }
                ));
            }
            ,
            t;
        }
        )),
        e.define("select2/dropdown", ["jquery", "./utils"], (function(t, e) {
            function n(t, e) {
                this.$element = t,
                this.options = e,
                n.__super__.constructor.call(this);
            }
            return e.Extend(n, e.Observable),
            n.prototype.render = function() {
                var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return e.attr("dir", this.options.get("dir")),
                this.$dropdown = e,
                e;
            }
            ,
            n.prototype.bind = function() {}
            ,
            n.prototype.position = function(t, e) {}
            ,
            n.prototype.destroy = function() {
                this.$dropdown.remove();
            }
            ,
            n;
        }
        )),
        e.define("select2/dropdown/search", ["jquery", "../utils"], (function(t, e) {
            function n() {}
            return n.prototype.render = function(e) {
                var n = e.call(this)
                  , i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                return this.$searchContainer = i,
                this.$search = i.find("input"),
                n.prepend(i),
                n;
            }
            ,
            n.prototype.bind = function(e, n, i) {
                var o = this
                  , r = n.id + "-results";
                e.call(this, n, i),
                this.$search.on("keydown", (function(t) {
                    o.trigger("keypress", t),
                    o._keyUpPrevented = t.isDefaultPrevented();
                }
                )),
                this.$search.on("input", (function(e) {
                    t(this).off("keyup");
                }
                )),
                this.$search.on("keyup input", (function(t) {
                    o.handleSearch(t);
                }
                )),
                n.on("open", (function() {
                    o.$search.attr("tabindex", 0),
                    o.$search.attr("aria-controls", r),
                    o.$search.trigger("focus"),
                    window.setTimeout((function() {
                        o.$search.trigger("focus");
                    }
                    ), 0);
                }
                )),
                n.on("close", (function() {
                    o.$search.attr("tabindex", -1),
                    o.$search.removeAttr("aria-controls"),
                    o.$search.removeAttr("aria-activedescendant"),
                    o.$search.val(""),
                    o.$search.trigger("blur");
                }
                )),
                n.on("focus", (function() {
                    n.isOpen() || o.$search.trigger("focus");
                }
                )),
                n.on("results:all", (function(t) {
                    null != t.query.term && "" !== t.query.term || (o.showSearch(t) ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide"));
                }
                )),
                n.on("results:focus", (function(t) {
                    t.data._resultId ? o.$search.attr("aria-activedescendant", t.data._resultId) : o.$search.removeAttr("aria-activedescendant");
                }
                ));
            }
            ,
            n.prototype.handleSearch = function(t) {
                if (!this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    });
                }
                this._keyUpPrevented = !1;
            }
            ,
            n.prototype.showSearch = function(t, e) {
                return !0;
            }
            ,
            n;
        }
        )),
        e.define("select2/dropdown/hidePlaceholder", [], (function() {
            function t(t, e, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                t.call(this, e, n, i);
            }
            return t.prototype.append = function(t, e) {
                e.results = this.removePlaceholder(e.results),
                t.call(this, e);
            }
            ,
            t.prototype.normalizePlaceholder = function(t, e) {
                return "string" == typeof e && (e = {
                    id: "",
                    text: e
                }),
                e;
            }
            ,
            t.prototype.removePlaceholder = function(t, e) {
                for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                    var o = e[i];
                    this.placeholder.id === o.id && n.splice(i, 1);
                }
                return n;
            }
            ,
            t;
        }
        )),
        e.define("select2/dropdown/infiniteScroll", ["jquery"], (function(t) {
            function e(t, e, n, i) {
                this.lastParams = {},
                t.call(this, e, n, i),
                this.$loadingMore = this.createLoadingMore(),
                this.loading = !1;
            }
            return e.prototype.append = function(t, e) {
                this.$loadingMore.remove(),
                this.loading = !1,
                t.call(this, e),
                this.showLoadingMore(e) && (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded());
            }
            ,
            e.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                e.on("query", (function(t) {
                    i.lastParams = t,
                    i.loading = !0;
                }
                )),
                e.on("query:append", (function(t) {
                    i.lastParams = t,
                    i.loading = !0;
                }
                )),
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this));
            }
            ,
            e.prototype.loadMoreIfNeeded = function() {
                var e = t.contains(document.documentElement, this.$loadingMore[0]);
                !this.loading && e && (this.$results.offset().top + this.$results.outerHeight(!1) + 50 >= this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) && this.loadMore());
            }
            ,
            e.prototype.loadMore = function() {
                this.loading = !0;
                var e = t.extend({}, {
                    page: 1
                }, this.lastParams);
                e.page++,
                this.trigger("query:append", e);
            }
            ,
            e.prototype.showLoadingMore = function(t, e) {
                return e.pagination && e.pagination.more;
            }
            ,
            e.prototype.createLoadingMore = function() {
                var e = t('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>')
                  , n = this.options.get("translations").get("loadingMore");
                return e.html(n(this.lastParams)),
                e;
            }
            ,
            e;
        }
        )),
        e.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(t, e) {
            function n(e, n, i) {
                this.$dropdownParent = t(i.get("dropdownParent") || document.body),
                e.call(this, n, i);
            }
            return n.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                e.on("open", (function() {
                    i._showDropdown(),
                    i._attachPositioningHandler(e),
                    i._bindContainerResultHandlers(e);
                }
                )),
                e.on("close", (function() {
                    i._hideDropdown(),
                    i._detachPositioningHandler(e);
                }
                )),
                this.$dropdownContainer.on("mousedown", (function(t) {
                    t.stopPropagation();
                }
                ));
            }
            ,
            n.prototype.destroy = function(t) {
                t.call(this),
                this.$dropdownContainer.remove();
            }
            ,
            n.prototype.position = function(t, e, n) {
                e.attr("class", n.attr("class")),
                e.removeClass("select2"),
                e.addClass("select2-container--open"),
                e.css({
                    position: "absolute",
                    top: -999999
                }),
                this.$container = n;
            }
            ,
            n.prototype.render = function(e) {
                var n = t("<span></span>")
                  , i = e.call(this);
                return n.append(i),
                this.$dropdownContainer = n,
                n;
            }
            ,
            n.prototype._hideDropdown = function(t) {
                this.$dropdownContainer.detach();
            }
            ,
            n.prototype._bindContainerResultHandlers = function(t, e) {
                if (!this._containerResultsHandlersBound) {
                    var n = this;
                    e.on("results:all", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown();
                    }
                    )),
                    e.on("results:append", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown();
                    }
                    )),
                    e.on("results:message", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown();
                    }
                    )),
                    e.on("select", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown();
                    }
                    )),
                    e.on("unselect", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown();
                    }
                    )),
                    this._containerResultsHandlersBound = !0;
                }
            }
            ,
            n.prototype._attachPositioningHandler = function(n, i) {
                var o = this
                  , r = "scroll.select2." + i.id
                  , s = "resize.select2." + i.id
                  , a = "orientationchange.select2." + i.id
                  , l = this.$container.parents().filter(e.hasScroll);
                l.each((function() {
                    e.StoreData(this, "select2-scroll-position", {
                        x: t(this).scrollLeft(),
                        y: t(this).scrollTop()
                    });
                }
                )),
                l.on(r, (function(n) {
                    var i = e.GetData(this, "select2-scroll-position");
                    t(this).scrollTop(i.y);
                }
                )),
                t(window).on(r + " " + s + " " + a, (function(t) {
                    o._positionDropdown(),
                    o._resizeDropdown();
                }
                ));
            }
            ,
            n.prototype._detachPositioningHandler = function(n, i) {
                var o = "scroll.select2." + i.id
                  , r = "resize.select2." + i.id
                  , s = "orientationchange.select2." + i.id;
                this.$container.parents().filter(e.hasScroll).off(o),
                t(window).off(o + " " + r + " " + s);
            }
            ,
            n.prototype._positionDropdown = function() {
                var e = t(window)
                  , n = this.$dropdown.hasClass("select2-dropdown--above")
                  , i = this.$dropdown.hasClass("select2-dropdown--below")
                  , o = null
                  , r = this.$container.offset();
                r.bottom = r.top + this.$container.outerHeight(!1);
                var s = {
                    height: this.$container.outerHeight(!1)
                };
                s.top = r.top,
                s.bottom = r.top + s.height;
                var a = this.$dropdown.outerHeight(!1)
                  , l = e.scrollTop()
                  , c = e.scrollTop() + e.height()
                  , d = l < r.top - a
                  , u = c > r.bottom + a
                  , p = {
                    left: r.left,
                    top: s.bottom
                }
                  , h = this.$dropdownParent;
                "static" === h.css("position") && (h = h.offsetParent());
                var f = {
                    top: 0,
                    left: 0
                };
                (t.contains(document.body, h[0]) || h[0].isConnected) && (f = h.offset()),
                p.top -= f.top,
                p.left -= f.left,
                n || i || (o = "below"),
                u || !d || n ? !d && u && n && (o = "below") : o = "above",
                ("above" == o || n && "below" !== o) && (p.top = s.top - f.top - a),
                null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o),
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)),
                this.$dropdownContainer.css(p);
            }
            ,
            n.prototype._resizeDropdown = function() {
                var t = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (t.minWidth = t.width,
                t.position = "relative",
                t.width = "auto"),
                this.$dropdown.css(t);
            }
            ,
            n.prototype._showDropdown = function(t) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown();
            }
            ,
            n;
        }
        )),
        e.define("select2/dropdown/minimumResultsForSearch", [], (function() {
            function t(e) {
                for (var n = 0, i = 0; i < e.length; i++) {
                    var o = e[i];
                    o.children ? n += t(o.children) : n++;
                }
                return n;
            }
            function e(t, e, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                t.call(this, e, n, i);
            }
            return e.prototype.showSearch = function(e, n) {
                return !(t(n.data.results) < this.minimumResultsForSearch) && e.call(this, n);
            }
            ,
            e;
        }
        )),
        e.define("select2/dropdown/selectOnClose", ["../utils"], (function(t) {
            function e() {}
            return e.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                e.on("close", (function(t) {
                    i._handleSelectOnClose(t);
                }
                ));
            }
            ,
            e.prototype._handleSelectOnClose = function(e, n) {
                if (n && null != n.originalSelect2Event) {
                    var i = n.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type)
                        return;
                }
                var o = this.getHighlightedResults();
                if (!(o.length < 1)) {
                    var r = t.GetData(o[0], "data");
                    null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                        data: r
                    });
                }
            }
            ,
            e;
        }
        )),
        e.define("select2/dropdown/closeOnSelect", [], (function() {
            function t() {}
            return t.prototype.bind = function(t, e, n) {
                var i = this;
                t.call(this, e, n),
                e.on("select", (function(t) {
                    i._selectTriggered(t);
                }
                )),
                e.on("unselect", (function(t) {
                    i._selectTriggered(t);
                }
                ));
            }
            ,
            t.prototype._selectTriggered = function(t, e) {
                var n = e.originalEvent;
                n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: e
                });
            }
            ,
            t;
        }
        )),
        e.define("select2/i18n/en", [], (function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded.";
                },
                inputTooLong: function(t) {
                    var e = t.input.length - t.maximum
                      , n = "Please delete " + e + " character";
                    return 1 != e && (n += "s"),
                    n;
                },
                inputTooShort: function(t) {
                    return "Please enter " + (t.minimum - t.input.length) + " or more characters";
                },
                loadingMore: function() {
                    return "Loading more results…";
                },
                maximumSelected: function(t) {
                    var e = "You can only select " + t.maximum + " item";
                    return 1 != t.maximum && (e += "s"),
                    e;
                },
                noResults: function() {
                    return "No results found";
                },
                searching: function() {
                    return "Searching…";
                },
                removeAllItems: function() {
                    return "Remove all items";
                }
            };
        }
        )),
        e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(t, e, n, i, o, r, s, a, l, c, d, u, p, h, f, g, m, v, y, b, w, x, _, S, T, $, C, k, A) {
            function E() {
                this.reset();
            }
            return E.prototype.apply = function(d) {
                if (null == (d = t.extend(!0, {}, this.defaults, d)).dataAdapter) {
                    if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = h : d.dataAdapter = p,
                    d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)),
                    d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)),
                    d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)),
                    d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)),
                    null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = c.Decorate(d.dataAdapter, m)),
                    null != d.query) {
                        var u = e(d.amdBase + "compat/query");
                        d.dataAdapter = c.Decorate(d.dataAdapter, u);
                    }
                    if (null != d.initSelection) {
                        var A = e(d.amdBase + "compat/initSelection");
                        d.dataAdapter = c.Decorate(d.dataAdapter, A);
                    }
                }
                if (null == d.resultsAdapter && (d.resultsAdapter = n,
                null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, S)),
                null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, _)),
                d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C))),
                null == d.dropdownAdapter) {
                    if (d.multiple)
                        d.dropdownAdapter = w;
                    else {
                        var E = c.Decorate(w, x);
                        d.dropdownAdapter = E;
                    }
                    if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, $)),
                    d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, k)),
                    null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                        var P = e(d.amdBase + "compat/dropdownCss");
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, P);
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T);
                }
                if (null == d.selectionAdapter) {
                    if (d.multiple ? d.selectionAdapter = o : d.selectionAdapter = i,
                    null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, r)),
                    d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)),
                    d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)),
                    null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                        var O = e(d.amdBase + "compat/containerCss");
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, O);
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l);
                }
                d.language = this._resolveLanguage(d.language),
                d.language.push("en");
                for (var M = [], D = 0; D < d.language.length; D++) {
                    var L = d.language[D];
                    -1 === M.indexOf(L) && M.push(L);
                }
                return d.language = M,
                d.translations = this._processTranslations(d.language, d.debug),
                d;
            }
            ,
            E.prototype.reset = function() {
                function e(t) {
                    return t.replace(/[^\u0000-\u007E]/g, (function(t) {
                        return u[t] || t;
                    }
                    ));
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: {},
                    matcher: function n(i, o) {
                        if ("" === t.trim(i.term))
                            return o;
                        if (o.children && o.children.length > 0) {
                            for (var r = t.extend(!0, {}, o), s = o.children.length - 1; s >= 0; s--)
                                null == n(i, o.children[s]) && r.children.splice(s, 1);
                            return r.children.length > 0 ? r : n(i, r);
                        }
                        var a = e(o.text).toUpperCase()
                          , l = e(i.term).toUpperCase();
                        return a.indexOf(l) > -1 ? o : null;
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function(t) {
                        return t;
                    },
                    templateResult: function(t) {
                        return t.text;
                    },
                    templateSelection: function(t) {
                        return t.text;
                    },
                    theme: "default",
                    width: "resolve"
                };
            }
            ,
            E.prototype.applyFromElement = function(t, e) {
                var n = t.language
                  , i = this.defaults.language
                  , o = e.prop("lang")
                  , r = e.closest("[lang]").prop("lang")
                  , s = Array.prototype.concat.call(this._resolveLanguage(o), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(r));
                return t.language = s,
                t;
            }
            ,
            E.prototype._resolveLanguage = function(e) {
                if (!e)
                    return [];
                if (t.isEmptyObject(e))
                    return [];
                if (t.isPlainObject(e))
                    return [e];
                var n;
                n = t.isArray(e) ? e : [e];
                for (var i = [], o = 0; o < n.length; o++)
                    if (i.push(n[o]),
                    "string" == typeof n[o] && n[o].indexOf("-") > 0) {
                        var r = n[o].split("-")[0];
                        i.push(r);
                    }
                return i;
            }
            ,
            E.prototype._processTranslations = function(e, n) {
                for (var i = new d(), o = 0; o < e.length; o++) {
                    var r = new d()
                      , s = e[o];
                    if ("string" == typeof s)
                        try {
                            r = d.loadPath(s);
                        } catch (t) {
                            try {
                                s = this.defaults.amdLanguageBase + s,
                                r = d.loadPath(s);
                            } catch (t) {
                                n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.');
                            }
                        }
                    else
                        r = t.isPlainObject(s) ? new d(s) : s;
                    i.extend(r);
                }
                return i;
            }
            ,
            E.prototype.set = function(e, n) {
                var i = {};
                i[t.camelCase(e)] = n;
                var o = c._convertData(i);
                t.extend(!0, this.defaults, o);
            }
            ,
            new E();
        }
        )),
        e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(t, e, n, i) {
            function o(e, o) {
                if (this.options = e,
                null != o && this.fromElement(o),
                null != o && (this.options = n.applyFromElement(this.options, o)),
                this.options = n.apply(this.options),
                o && o.is("input")) {
                    var r = t(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, r);
                }
            }
            return o.prototype.fromElement = function(t) {
                var n = ["select2"];
                null == this.options.multiple && (this.options.multiple = t.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = t.prop("disabled")),
                null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                t.prop("disabled", this.options.disabled),
                t.prop("multiple", this.options.multiple),
                i.GetData(t[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                i.StoreData(t[0], "data", i.GetData(t[0], "select2Tags")),
                i.StoreData(t[0], "tags", !0)),
                i.GetData(t[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                t.attr("ajax--url", i.GetData(t[0], "ajaxUrl")),
                i.StoreData(t[0], "ajax-Url", i.GetData(t[0], "ajaxUrl")));
                var o = {};
                function r(t, e) {
                    return e.toUpperCase();
                }
                for (var s = 0; s < t[0].attributes.length; s++) {
                    var a = t[0].attributes[s].name
                      , l = "data-";
                    if (a.substr(0, l.length) == l) {
                        var c = a.substring(l.length)
                          , d = i.GetData(t[0], c);
                        o[c.replace(/-([a-z])/g, r)] = d;
                    }
                }
                e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset && (o = e.extend(!0, {}, t[0].dataset, o));
                var u = e.extend(!0, {}, i.GetData(t[0]), o);
                for (var p in u = i._convertData(u))
                    e.inArray(p, n) > -1 || (e.isPlainObject(this.options[p]) ? e.extend(this.options[p], u[p]) : this.options[p] = u[p]);
                return this;
            }
            ,
            o.prototype.get = function(t) {
                return this.options[t];
            }
            ,
            o.prototype.set = function(t, e) {
                this.options[t] = e;
            }
            ,
            o;
        }
        )),
        e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(t, e, n, i) {
            var o = function(t, i) {
                null != n.GetData(t[0], "select2") && n.GetData(t[0], "select2").destroy(),
                this.$element = t,
                this.id = this._generateId(t),
                i = i || {},
                this.options = new e(i,t),
                o.__super__.constructor.call(this);
                var r = t.attr("tabindex") || 0;
                n.StoreData(t[0], "old-tabindex", r),
                t.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(t,this.options);
                var a = this.render();
                this._placeContainer(a);
                var l = this.options.get("selectionAdapter");
                this.selection = new l(t,this.options),
                this.$selection = this.selection.render(),
                this.selection.position(this.$selection, a);
                var c = this.options.get("dropdownAdapter");
                this.dropdown = new c(t,this.options),
                this.$dropdown = this.dropdown.render(),
                this.dropdown.position(this.$dropdown, a);
                var d = this.options.get("resultsAdapter");
                this.results = new d(t,this.options,this.dataAdapter),
                this.$results = this.results.render(),
                this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current((function(t) {
                    u.trigger("selection:update", {
                        data: t
                    });
                }
                )),
                t.addClass("select2-hidden-accessible"),
                t.attr("aria-hidden", "true"),
                this._syncAttributes(),
                n.StoreData(t[0], "select2", this),
                t.data("select2", this);
            };
            return n.Extend(o, n.Observable),
            o.prototype._generateId = function(t) {
                return "select2-" + (null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "");
            }
            ,
            o.prototype._placeContainer = function(t) {
                t.insertAfter(this.$element);
                var e = this._resolveWidth(this.$element, this.options.get("width"));
                null != e && t.css("width", e);
            }
            ,
            o.prototype._resolveWidth = function(t, e) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == e) {
                    var i = this._resolveWidth(t, "style");
                    return null != i ? i : this._resolveWidth(t, "element");
                }
                if ("element" == e) {
                    var o = t.outerWidth(!1);
                    return o <= 0 ? "auto" : o + "px";
                }
                if ("style" == e) {
                    var r = t.attr("style");
                    if ("string" != typeof r)
                        return null;
                    for (var s = r.split(";"), a = 0, l = s.length; a < l; a += 1) {
                        var c = s[a].replace(/\s/g, "").match(n);
                        if (null !== c && c.length >= 1)
                            return c[1];
                    }
                    return null;
                }
                return "computedstyle" == e ? window.getComputedStyle(t[0]).width : e;
            }
            ,
            o.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container);
            }
            ,
            o.prototype._registerDomEvents = function() {
                var t = this;
                this.$element.on("change.select2", (function() {
                    t.dataAdapter.current((function(e) {
                        t.trigger("selection:update", {
                            data: e
                        });
                    }
                    ));
                }
                )),
                this.$element.on("focus.select2", (function(e) {
                    t.trigger("focus", e);
                }
                )),
                this._syncA = n.bind(this._syncAttributes, this),
                this._syncS = n.bind(this._syncSubtree, this),
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != e ? (this._observer = new e((function(e) {
                    t._syncA(),
                    t._syncS(null, e);
                }
                )),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1),
                this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1),
                this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1));
            }
            ,
            o.prototype._registerDataEvents = function() {
                var t = this;
                this.dataAdapter.on("*", (function(e, n) {
                    t.trigger(e, n);
                }
                ));
            }
            ,
            o.prototype._registerSelectionEvents = function() {
                var e = this
                  , n = ["toggle", "focus"];
                this.selection.on("toggle", (function() {
                    e.toggleDropdown();
                }
                )),
                this.selection.on("focus", (function(t) {
                    e.focus(t);
                }
                )),
                this.selection.on("*", (function(i, o) {
                    -1 === t.inArray(i, n) && e.trigger(i, o);
                }
                ));
            }
            ,
            o.prototype._registerDropdownEvents = function() {
                var t = this;
                this.dropdown.on("*", (function(e, n) {
                    t.trigger(e, n);
                }
                ));
            }
            ,
            o.prototype._registerResultsEvents = function() {
                var t = this;
                this.results.on("*", (function(e, n) {
                    t.trigger(e, n);
                }
                ));
            }
            ,
            o.prototype._registerEvents = function() {
                var t = this;
                this.on("open", (function() {
                    t.$container.addClass("select2-container--open");
                }
                )),
                this.on("close", (function() {
                    t.$container.removeClass("select2-container--open");
                }
                )),
                this.on("enable", (function() {
                    t.$container.removeClass("select2-container--disabled");
                }
                )),
                this.on("disable", (function() {
                    t.$container.addClass("select2-container--disabled");
                }
                )),
                this.on("blur", (function() {
                    t.$container.removeClass("select2-container--focus");
                }
                )),
                this.on("query", (function(e) {
                    t.isOpen() || t.trigger("open", {}),
                    this.dataAdapter.query(e, (function(n) {
                        t.trigger("results:all", {
                            data: n,
                            query: e
                        });
                    }
                    ));
                }
                )),
                this.on("query:append", (function(e) {
                    this.dataAdapter.query(e, (function(n) {
                        t.trigger("results:append", {
                            data: n,
                            query: e
                        });
                    }
                    ));
                }
                )),
                this.on("keypress", (function(e) {
                    var n = e.which;
                    t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(e),
                    e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}),
                    e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}),
                    e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}),
                    e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}),
                    e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(),
                    e.preventDefault());
                }
                ));
            }
            ,
            o.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                this.isDisabled() ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {});
            }
            ,
            o.prototype._isChangeMutation = function(e, n) {
                var i = !1
                  , o = this;
                if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                    if (n)
                        if (n.addedNodes && n.addedNodes.length > 0)
                            for (var r = 0; r < n.addedNodes.length; r++)
                                n.addedNodes[r].selected && (i = !0);
                        else
                            n.removedNodes && n.removedNodes.length > 0 ? i = !0 : t.isArray(n) && t.each(n, (function(t, e) {
                                if (o._isChangeMutation(t, e))
                                    return i = !0,
                                    !1;
                            }
                            ));
                    else
                        i = !0;
                    return i;
                }
            }
            ,
            o.prototype._syncSubtree = function(t, e) {
                var n = this._isChangeMutation(t, e)
                  , i = this;
                n && this.dataAdapter.current((function(t) {
                    i.trigger("selection:update", {
                        data: t
                    });
                }
                ));
            }
            ,
            o.prototype.trigger = function(t, e) {
                var n = o.__super__.trigger
                  , i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === e && (e = {}),
                t in i) {
                    var r = i[t]
                      , s = {
                        prevented: !1,
                        name: t,
                        args: e
                    };
                    if (n.call(this, r, s),
                    s.prevented)
                        return void (e.prevented = !0);
                }
                n.call(this, t, e);
            }
            ,
            o.prototype.toggleDropdown = function() {
                this.isDisabled() || (this.isOpen() ? this.close() : this.open());
            }
            ,
            o.prototype.open = function() {
                this.isOpen() || this.isDisabled() || this.trigger("query", {});
            }
            ,
            o.prototype.close = function(t) {
                this.isOpen() && this.trigger("close", {
                    originalEvent: t
                });
            }
            ,
            o.prototype.isEnabled = function() {
                return !this.isDisabled();
            }
            ,
            o.prototype.isDisabled = function() {
                return this.options.get("disabled");
            }
            ,
            o.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open");
            }
            ,
            o.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus");
            }
            ,
            o.prototype.focus = function(t) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}));
            }
            ,
            o.prototype.enable = function(t) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                null != t && 0 !== t.length || (t = [!0]);
                var e = !t[0];
                this.$element.prop("disabled", e);
            }
            ,
            o.prototype.data = function() {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var t = [];
                return this.dataAdapter.current((function(e) {
                    t = e;
                }
                )),
                t;
            }
            ,
            o.prototype.val = function(e) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == e || 0 === e.length)
                    return this.$element.val();
                var n = e[0];
                t.isArray(n) && (n = t.map(n, (function(t) {
                    return t.toString();
                }
                ))),
                this.$element.val(n).trigger("input").trigger("change");
            }
            ,
            o.prototype.destroy = function() {
                this.$container.remove(),
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer ? (this._observer.disconnect(),
                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                this._syncA = null,
                this._syncS = null,
                this.$element.off(".select2"),
                this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                n.RemoveData(this.$element[0]),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                this.dataAdapter = null,
                this.selection = null,
                this.dropdown = null,
                this.results = null;
            }
            ,
            o.prototype.render = function() {
                var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return e.attr("dir", this.options.get("dir")),
                this.$container = e,
                this.$container.addClass("select2-container--" + this.options.get("theme")),
                n.StoreData(e[0], "element", this.$element),
                e;
            }
            ,
            o;
        }
        )),
        e.define("jquery-mousewheel", ["jquery"], (function(t) {
            return t;
        }
        )),
        e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(t, e, n, i, o) {
            if (null == t.fn.select2) {
                var r = ["open", "close", "destroy"];
                t.fn.select2 = function(e) {
                    if ("object" == typeof (e = e || {}))
                        return this.each((function() {
                            var i = t.extend(!0, {}, e);
                            new n(t(this),i);
                        }
                        )),
                        this;
                    if ("string" == typeof e) {
                        var i, s = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            var t = o.GetData(this, "select2");
                            null == t && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."),
                            i = t[e].apply(t, s);
                        }
                        )),
                        t.inArray(e, r) > -1 ? this : i;
                    }
                    throw new Error("Invalid arguments for Select2: " + e);
                }
                ;
            }
            return null == t.fn.select2.defaults && (t.fn.select2.defaults = i),
            n;
        }
        )),
        {
            define: e.define,
            require: e.require
        };
    }()
      , n = e.require("jquery.select2");
    return t.fn.select2.amd = e,
    n;
}
)),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
}((function(t) {
    "use strict";
    var e, n = window.Slick || {};
    e = 0,
    (n = function(n, i) {
        var o, r = this;
        r.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: t(n),
            appendDots: t(n),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(e, n) {
                return t('<button type="button" />').text(n + 1);
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
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
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        },
        r.initials = {
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
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        },
        t.extend(r, r.initials),
        r.activeBreakpoint = null,
        r.animType = null,
        r.animProp = null,
        r.breakpoints = [],
        r.breakpointSettings = [],
        r.cssTransitions = !1,
        r.focussed = !1,
        r.interrupted = !1,
        r.hidden = "hidden",
        r.paused = !0,
        r.positionProp = null,
        r.respondTo = null,
        r.rowCount = 1,
        r.shouldClick = !0,
        r.$slider = t(n),
        r.$slidesCache = null,
        r.transformType = null,
        r.transitionType = null,
        r.visibilityChange = "visibilitychange",
        r.windowWidth = 0,
        r.windowTimer = null,
        o = t(n).data("slick") || {},
        r.options = t.extend({}, r.defaults, i, o),
        r.currentSlide = r.options.initialSlide,
        r.originalSettings = r.options,
        void 0 !== document.mozHidden ? (r.hidden = "mozHidden",
        r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden",
        r.visibilityChange = "webkitvisibilitychange"),
        r.autoPlay = t.proxy(r.autoPlay, r),
        r.autoPlayClear = t.proxy(r.autoPlayClear, r),
        r.autoPlayIterator = t.proxy(r.autoPlayIterator, r),
        r.changeSlide = t.proxy(r.changeSlide, r),
        r.clickHandler = t.proxy(r.clickHandler, r),
        r.selectHandler = t.proxy(r.selectHandler, r),
        r.setPosition = t.proxy(r.setPosition, r),
        r.swipeHandler = t.proxy(r.swipeHandler, r),
        r.dragHandler = t.proxy(r.dragHandler, r),
        r.keyHandler = t.proxy(r.keyHandler, r),
        r.instanceUid = e++,
        r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        r.registerBreakpoints(),
        r.init(!0);
    }
    ).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }
    ,
    n.prototype.addSlide = n.prototype.slickAdd = function(e, n, i) {
        var o = this;
        if ("boolean" == typeof n)
            i = n,
            n = null;
        else {
            if (n < 0 || n >= o.slideCount)
                return !1;
        }
        o.unload(),
        "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : !0 === i ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each((function(e, n) {
            t(n).attr("data-slick-index", e);
        }
        )),
        o.$slidesCache = o.$slides,
        o.reinit();
    }
    ,
    n.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed);
        }
    }
    ,
    n.prototype.animateSlide = function(e, n) {
        var i = {}
          , o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
        t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === o.options.vertical ? (i[o.animType] = "translate(" + t + "px, 0px)",
                o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)",
                o.$slideTrack.css(i));
            },
            complete: function() {
                n && n.call();
            }
        })) : (o.applyTransition(),
        e = Math.ceil(e),
        !1 === o.options.vertical ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)",
        o.$slideTrack.css(i),
        n && setTimeout((function() {
            o.disableTransition(),
            n.call();
        }
        ), o.options.speed));
    }
    ,
    n.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)),
        e;
    }
    ,
    n.prototype.asNavFor = function(e) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each((function() {
            var n = t(this).slick("getSlick");
            n.unslicked || n.slideHandler(e, !0);
        }
        ));
    }
    ,
    n.prototype.applyTransition = function(t) {
        var e = this
          , n = {};
        !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
    }
    ,
    n.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
    }
    ,
    n.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }
    ,
    n.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e));
    }
    ,
    n.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }
    ,
    n.prototype.buildDots = function() {
        var e, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"),
            n = t("<ul />").addClass(i.options.dotsClass),
            e = 0; e <= i.getDotCount(); e += 1)
                n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
            i.$dots = n.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active");
        }
    }
    ,
    n.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each((function(e, n) {
            t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "");
        }
        )),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }
    ,
    n.prototype.buildRows = function() {
        var t, e, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 0) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = t * s + (e * a.options.slidesPerRow + n);
                        r.get(d) && c.appendChild(r.get(d));
                    }
                    l.appendChild(c);
                }
                i.appendChild(l);
            }
            a.$slider.empty().append(i),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }
    ,
    n.prototype.checkResponsive = function(e, n) {
        var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (i in o = null,
            s.breakpoints)
                s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = o) : (s.activeBreakpoint = o,
            "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e),
            a = o),
            e || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
        }
    }
    ,
    n.prototype.changeSlide = function(e, n) {
        var i, o, r = this, s = t(e.currentTarget);
        switch (s.is("a") && e.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        i = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;
        case "next":
            o = 0 === i ? r.options.slidesToScroll : i,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;
        case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || s.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(a), !1, n),
            s.children().trigger("focus");
            break;
        default:
            return;
        }
    }
    ,
    n.prototype.checkNavigable = function(t) {
        var e, n;
        if (n = 0,
        t > (e = this.getNavigableIndexes())[e.length - 1])
            t = e[e.length - 1];
        else
            for (var i in e) {
                if (t < e[i]) {
                    t = n;
                    break;
                }
                n = e[i];
            }
        return t;
    }
    ,
    n.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }
    ,
    n.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
    }
    ,
    n.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(t));
    }
    ,
    n.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault());
    }
    ,
    n.prototype.destroy = function(e) {
        var n = this;
        n.autoPlayClear(),
        n.touchObject = {},
        n.cleanUpEvents(),
        t(".slick-cloned", n.$slider).detach(),
        n.$dots && n.$dots.remove(),
        n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
        n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
        n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            t(this).attr("style", t(this).data("originalStyling"));
        }
        )),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.detach(),
        n.$list.detach(),
        n.$slider.append(n.$slides)),
        n.cleanUpRows(),
        n.$slider.removeClass("slick-slider"),
        n.$slider.removeClass("slick-initialized"),
        n.$slider.removeClass("slick-dotted"),
        n.unslicked = !0,
        e || n.$slider.trigger("destroy", [n]);
    }
    ,
    n.prototype.disableTransition = function(t) {
        var e = this
          , n = {};
        n[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n);
    }
    ,
    n.prototype.fadeSlide = function(t, e) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(t).css({
            zIndex: n.options.zIndex
        }),
        n.$slides.eq(t).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t),
        n.$slides.eq(t).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }),
        e && setTimeout((function() {
            n.disableTransition(t),
            e.call();
        }
        ), n.options.speed));
    }
    ,
    n.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }));
    }
    ,
    n.prototype.filterSlides = n.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit());
    }
    ,
    n.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
            n.stopImmediatePropagation();
            var i = t(this);
            setTimeout((function() {
                e.options.pauseOnFocus && (e.focussed = i.is(":focus"),
                e.autoPlay());
            }
            ), 0);
        }
        ));
    }
    ,
    n.prototype.getCurrent = n.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }
    ,
    n.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , n = 0
          , i = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow)
                ++i;
            else
                for (; e < t.slideCount; )
                    ++i,
                    e = n + t.options.slidesToScroll,
                    n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            i = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++i,
                e = n + t.options.slidesToScroll,
                n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return i - 1;
    }
    ,
    n.prototype.getLeft = function(t) {
        var e, n, i, o, r = this, s = 0;
        return r.slideOffset = 0,
        n = r.$slides.first().outerHeight(!0),
        !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1,
        o = -1,
        !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)),
        s = n * r.options.slidesToShow * o),
        r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1,
        s = (r.options.slidesToShow - (t - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1,
        s = r.slideCount % r.options.slidesToScroll * n * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth,
        s = (t + r.options.slidesToShow - r.slideCount) * n),
        r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0,
        s = 0),
        !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0,
        r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)),
        e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * n * -1 + s,
        !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow),
        e = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1),
        e = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0,
        e += (r.$list.width() - i.outerWidth()) / 2)),
        e;
    }
    ,
    n.prototype.getOption = n.prototype.slickGetOption = function(t) {
        return this.options[t];
    }
    ,
    n.prototype.getNavigableIndexes = function() {
        var t, e = this, n = 0, i = 0, o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll,
        i = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); n < t; )
            o.push(n),
            n = i + e.options.slidesToScroll,
            i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o;
    }
    ,
    n.prototype.getSlick = function() {
        return this;
    }
    ,
    n.prototype.getSlideCount = function() {
        var e, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each((function(o, r) {
            if (r.offsetLeft - n + t(r).outerWidth() / 2 > -1 * i.swipeLeft)
                return e = r,
                !1;
        }
        )),
        Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll;
    }
    ,
    n.prototype.goTo = n.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e);
    }
    ,
    n.prototype.init = function(e) {
        var n = this;
        t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"),
        n.buildRows(),
        n.buildOut(),
        n.setProps(),
        n.startLoad(),
        n.loadSlider(),
        n.initializeEvents(),
        n.updateArrows(),
        n.updateDots(),
        n.checkResponsive(!0),
        n.focusHandler()),
        e && n.$slider.trigger("init", [n]),
        !0 === n.options.accessibility && n.initADA(),
        n.options.autoplay && (n.paused = !1,
        n.autoPlay());
    }
    ,
    n.prototype.initADA = function() {
        var e = this
          , n = Math.ceil(e.slideCount / e.options.slidesToShow)
          , i = e.getNavigableIndexes().filter((function(t) {
            return t >= 0 && t < e.slideCount;
        }
        ));
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(n) {
            var o = i.indexOf(n);
            if (t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + n,
                tabindex: -1
            }),
            -1 !== o) {
                var r = "slick-slide-control" + e.instanceUid + o;
                t("#" + r).length && t(this).attr({
                    "aria-describedby": r
                });
            }
        }
        )),
        e.$dots.attr("role", "tablist").find("li").each((function(o) {
            var r = i[o];
            t(this).attr({
                role: "presentation"
            }),
            t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + o,
                "aria-controls": "slick-slide" + e.instanceUid + r,
                "aria-label": o + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            });
        }
        )).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = e.currentSlide, r = o + e.options.slidesToShow; o < r; o++)
            e.options.focusOnChange ? e.$slides.eq(o).attr({
                tabindex: "0"
            }) : e.$slides.eq(o).removeAttr("tabindex");
        e.activateADA();
    }
    ,
    n.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide),
        !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler),
        t.$nextArrow.on("keydown.slick", t.keyHandler)));
    }
    ,
    n.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
    }
    ,
    n.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
    }
    ,
    n.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(e.setPosition);
    }
    ,
    n.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
    }
    ,
    n.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }));
    }
    ,
    n.prototype.lazyLoad = function() {
        var e, n, i, o = this;
        function r(e) {
            t("img[data-lazy]", e).each((function() {
                var e = t(this)
                  , n = t(this).attr("data-lazy")
                  , i = t(this).attr("data-srcset")
                  , r = t(this).attr("data-sizes") || o.$slider.attr("data-sizes")
                  , s = document.createElement("img");
                s.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, (function() {
                        i && (e.attr("srcset", i),
                        r && e.attr("sizes", r)),
                        e.attr("src", n).animate({
                            opacity: 1
                        }, 200, (function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        }
                        )),
                        o.$slider.trigger("lazyLoaded", [o, e, n]);
                    }
                    ));
                }
                ,
                s.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    o.$slider.trigger("lazyLoadError", [o, e, n]);
                }
                ,
                s.src = n;
            }
            ));
        }
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? i = (n = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)),
        i = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide,
        i = Math.ceil(n + o.options.slidesToShow),
        !0 === o.options.fade && (n > 0 && n--,
        i <= o.slideCount && i++)),
        e = o.$slider.find(".slick-slide").slice(n, i),
        "anticipated" === o.options.lazyLoad)
            for (var s = n - 1, a = i, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++)
                s < 0 && (s = o.slideCount - 1),
                e = (e = e.add(l.eq(s))).add(l.eq(a)),
                s--,
                a++;
        r(e),
        o.slideCount <= o.options.slidesToShow ? r(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? r(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && r(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
    }
    ,
    n.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
    }
    ,
    n.prototype.next = n.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }
    ,
    n.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition();
    }
    ,
    n.prototype.pause = n.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0;
    }
    ,
    n.prototype.play = n.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1;
    }
    ,
    n.prototype.postSlide = function(e) {
        var n = this;
        n.unslicked || (n.$slider.trigger("afterChange", [n, e]),
        n.animating = !1,
        n.slideCount > n.options.slidesToShow && n.setPosition(),
        n.swipeLeft = null,
        n.options.autoplay && n.autoPlay(),
        !0 === n.options.accessibility && (n.initADA(),
        n.options.focusOnChange && t(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()));
    }
    ,
    n.prototype.prev = n.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }
    ,
    n.prototype.preventDefault = function(t) {
        t.preventDefault();
    }
    ,
    n.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var n, i, o, r, s, a = this, l = t("img[data-lazy]", a.$slider);
        l.length ? (n = l.first(),
        i = n.attr("data-lazy"),
        o = n.attr("data-srcset"),
        r = n.attr("data-sizes") || a.$slider.attr("data-sizes"),
        (s = document.createElement("img")).onload = function() {
            o && (n.attr("srcset", o),
            r && n.attr("sizes", r)),
            n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === a.options.adaptiveHeight && a.setPosition(),
            a.$slider.trigger("lazyLoaded", [a, n, i]),
            a.progressiveLazyLoad();
        }
        ,
        s.onerror = function() {
            e < 3 ? setTimeout((function() {
                a.progressiveLazyLoad(e + 1);
            }
            ), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            a.$slider.trigger("lazyLoadError", [a, n, i]),
            a.progressiveLazyLoad());
        }
        ,
        s.src = i) : a.$slider.trigger("allImagesLoaded", [a]);
    }
    ,
    n.prototype.refresh = function(e) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        n = o.currentSlide,
        o.destroy(!0),
        t.extend(o, o.initials, {
            currentSlide: n
        }),
        o.init(),
        e || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1);
    }
    ,
    n.prototype.registerBreakpoints = function() {
        var e, n, i, o = this, r = o.options.responsive || null;
        if ("array" === t.type(r) && r.length) {
            for (e in o.respondTo = o.options.respondTo || "window",
            r)
                if (i = o.breakpoints.length - 1,
                r.hasOwnProperty(e)) {
                    for (n = r[e].breakpoint; i >= 0; )
                        o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1),
                        i--;
                    o.breakpoints.push(n),
                    o.breakpointSettings[n] = r[e].settings;
                }
            o.breakpoints.sort((function(t, e) {
                return o.options.mobileFirst ? t - e : e - t;
            }
            ));
        }
    }
    ,
    n.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }
    ,
    n.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout((function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }
        ), 50));
    }
    ,
    n.prototype.removeSlide = n.prototype.slickRemove = function(t, e, n) {
        var i = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : i.slideCount - 1 : !0 === e ? --t : t,
        i.slideCount < 1 || t < 0 || t > i.slideCount - 1)
            return !1;
        i.unload(),
        !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slidesCache = i.$slides,
        i.reinit();
    }
    ,
    n.prototype.setCSS = function(t) {
        var e, n, i = this, o = {};
        !0 === i.options.rtl && (t = -t),
        e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px",
        o[i.positionProp] = t,
        !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {},
        !1 === i.cssTransitions ? (o[i.animType] = "translate(" + e + ", " + n + ")",
        i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)",
        i.$slideTrack.css(o)));
    }
    ,
    n.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
    }
    ,
    n.prototype.setFade = function() {
        var e, n = this;
        n.$slides.each((function(i, o) {
            e = n.slideWidth * i * -1,
            !0 === n.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            });
        }
        )),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        });
    }
    ,
    n.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e);
        }
    }
    ,
    n.prototype.setOption = n.prototype.slickSetOption = function() {
        var e, n, i, o, r, s = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (i = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0],
        o = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")),
        "single" === r)
            s.options[i] = o;
        else if ("multiple" === r)
            t.each(i, (function(t, e) {
                s.options[t] = e;
            }
            ));
        else {
            if ("responsive" === r)
                for (n in o)
                    if ("array" !== t.type(s.options.responsive))
                        s.options.responsive = [o[n]];
                    else {
                        for (e = s.options.responsive.length - 1; e >= 0; )
                            s.options.responsive[e].breakpoint === o[n].breakpoint && s.options.responsive.splice(e, 1),
                            e--;
                        s.options.responsive.push(o[n]);
                    }
        }
        a && (s.unload(),
        s.reinit());
    }
    ,
    n.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t]);
    }
    ,
    n.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType;
    }
    ,
    n.prototype.setSlideClasses = function(t) {
        var e, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(t).addClass("slick-current"),
        !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(r.options.slidesToShow / 2),
            !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e + s, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + t,
            n.slice(i - e + 1 + s, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === t ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(t).addClass("slick-center");
        } else
            t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
            i = !0 === r.options.infinite ? r.options.slidesToShow + t : t,
            r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad();
    }
    ,
    n.prototype.setupInfinite = function() {
        var e, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1),
        !0 === o.options.infinite && !1 === o.options.fade && (n = null,
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            e = o.slideCount; e > o.slideCount - i; e -= 1)
                n = e - 1,
                t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i + o.slideCount; e += 1)
                n = e,
                t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                t(this).attr("id", "");
            }
            ));
        }
    }
    ,
    n.prototype.interrupt = function(t) {
        t || this.autoPlay(),
        this.interrupted = t;
    }
    ,
    n.prototype.selectHandler = function(e) {
        var n = this
          , i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , o = parseInt(i.attr("data-slick-index"));
        o || (o = 0),
        n.slideCount <= n.options.slidesToShow ? n.slideHandler(o, !1, !0) : n.slideHandler(o);
    }
    ,
    n.prototype.slideHandler = function(t, e, n) {
        var i, o, r, s, a, l, c = this;
        if (e = e || !1,
        !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t))
            if (!1 === e && c.asNavFor(t),
            i = t,
            a = c.getLeft(i),
            s = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
                    c.postSlide(i);
                }
                )) : c.postSlide(i));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                !1 === c.options.fade && (i = c.currentSlide,
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
                    c.postSlide(i);
                }
                )) : c.postSlide(i));
            else {
                if (c.options.autoplay && clearInterval(c.autoPlayTimer),
                o = i < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i,
                c.animating = !0,
                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                r = c.currentSlide,
                c.currentSlide = o,
                c.setSlideClasses(c.currentSlide),
                c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                c.updateDots(),
                c.updateArrows(),
                !0 === c.options.fade)
                    return !0 !== n ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, (function() {
                        c.postSlide(o);
                    }
                    ))) : c.postSlide(o),
                    void c.animateHeight();
                !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(a, (function() {
                    c.postSlide(o);
                }
                )) : c.postSlide(o);
            }
    }
    ,
    n.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading");
    }
    ,
    n.prototype.swipeDirection = function() {
        var t, e, n, i, o = this;
        return t = o.touchObject.startX - o.touchObject.curX,
        e = o.touchObject.startY - o.touchObject.curY,
        n = Math.atan2(e, t),
        (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
        i <= 45 && i >= 0 || i <= 360 && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && i <= 135 ? "down" : "up" : "vertical";
    }
    ,
    n.prototype.swipeEnd = function(t) {
        var e, n, i = this;
        if (i.dragging = !1,
        i.swiping = !1,
        i.scrolling)
            return i.scrolling = !1,
            !1;
        if (i.interrupted = !1,
        i.shouldClick = !(i.touchObject.swipeLength > 10),
        void 0 === i.touchObject.curX)
            return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1;
            }
            "vertical" != n && (i.slideHandler(e),
            i.touchObject = {},
            i.$slider.trigger("swipe", [i, n]));
        } else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {});
    }
    ,
    n.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t);
            }
    }
    ,
    n.prototype.swipeMove = function(t) {
        var e, n, i, o, r, s, a = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!a.dragging || a.scrolling || r && 1 !== r.length) && (e = a.getLeft(a.currentSlide),
        a.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
        a.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
        a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))),
        s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))),
        !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0,
        !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
        n = a.swipeDirection(),
        void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0,
        t.preventDefault()),
        o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1),
        !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
        i = a.touchObject.swipeLength,
        a.touchObject.edgeHit = !1,
        !1 === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction,
        a.touchObject.edgeHit = !0),
        !1 === a.options.vertical ? a.swipeLeft = e + i * o : a.swipeLeft = e + i * (a.$list.height() / a.listWidth) * o,
        !0 === a.options.verticalSwiping && (a.swipeLeft = e + i * o),
        !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null,
        !1) : void a.setCSS(a.swipeLeft))));
    }
    ,
    n.prototype.swipeStart = function(t) {
        var e, n = this;
        if (n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)
            return n.touchObject = {},
            !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        n.dragging = !0;
    }
    ,
    n.prototype.unfilterSlides = n.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit());
    }
    ,
    n.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }
    ,
    n.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy();
    }
    ,
    n.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }
    ,
    n.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"));
    }
    ,
    n.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1);
    }
    ,
    t.fn.slick = function() {
        var t, e, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof o || void 0 === o ? i[t].slick = new n(i[t],o) : e = i[t].slick[o].apply(i[t].slick, r),
            void 0 !== e)
                return e;
        return i;
    }
    ;
}
)),
jQuery(document).ready((function(t) {
    filter_events_fields(),
    jQuery("body").css("opacity", "1"),
    t("body").hasClass("page-node-type-template-d") && t("title").addClass("notranslate"),
    t("a").not(".show-more, .moreless-button, .accordion-click-mobile").each((function() {
        this.host !== window.location.host && t(this).attr("target", "_blank");
    }
    )),
    t(window).width() < 980 && (t("#block-gtranslate-2").insertBefore(".tb-megamenu-nav li:last"),
    t("#block-gtranslate-2").wrap("<li class='tb-megamenu-item level-1 mega gt-wrap'></li>")),
    t(".js__action--print").click((function() {
        return window.print(),
        !1;
    }
    )),
    t("button.tb-megamenu-button").append("<span>menu</span>"),
    t(window).width() < 980 && (t(".tb-megamenu-item .dropdown-toggle").each((function() {
        t(this).attr("href", "javascript:void(0);");
    }
    )),
    t(".tb-megamenu-item .dropdown-toggle").on("click", (function(e) {
        e.preventDefault(),
        t(this).parent().toggleClass("open-subnav");
    }
    ))),
    t(".loader").delay(2500).fadeOut("slow"),
    t(".loader-inner").delay(2e3).fadeOut("slow"),
    t("button.tb-megamenu-button").append("<div class='three col'><div class='hamburger' id='hamburger-1'><span class='line'></span><span class='line'></span><span class='line'></span></div></div>"),
    t(".hamburger").click((function() {
        t(this).toggleClass("is-active");
    }
    ));
    const e = t("#header .search-block-form")
      , n = t("body");
    e.find("form").after('<a href="#" class="close">Close</a>'),
    e.find(".close").on("click", (function(t) {
        t.preventDefault(),
        e.fadeOut("fast"),
        n.removeClass("hide-scroll");
    }
    )),
    t(".search-toggle").on("click", (function(t) {
        t.preventDefault(),
        e.fadeIn("fast"),
        e.find("input#edit-keys").focus(),
        n.addClass("hide-scroll");
    }
    )),
    t(".paragraph--type--cb35-homepage-banner .video-pause").on("click", (function(e) {
        e.preventDefault(),
        t(this).hasClass("paused") ? (t(this).removeClass("paused").parents(".paragraph").find("video").get(0).play(),
        t(".pause-text").text("Play")) : (t(this).addClass("paused").parents(".paragraph").find("video").get(0).pause(),
        t(".pause-text").text("Paused"));
    }
    )),
    t(".paragraph--type--cb35-homepage-banner .video-mute").on("click", (function(e) {
        e.preventDefault(),
        t(this).hasClass("video-mute") ? (t(this).removeClass("video-mute").parents(".paragraph").find("video").prop("muted", !1),
        t(".mute-text").text("Mute")) : (t(this).addClass("video-mute").parents(".paragraph").find("video").prop("muted", !0),
        t(".mute-text").text("Unmute"));
    }
    )),
    t(".show-more").on("click", (function() {
        t(this).prev().toggleClass("show-me"),
        "Less -" == t(this).text() ? t(this).text("Expand +") : t(this).text("Less -");
    }
    ));
    var o = t(".paragraph--type--cb36-faces-of-ipa .col-one .field-items-wrapper");
    o.length && t(o).each((function() {
        var e = t(this).parent().parent().next().find(".current-count strong")
          , n = t(this);
        o.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            fade: !0,
            asNavFor: t(".paragraph--type--cb36-faces-of-ipa .col-two .field-items-wrapper")
        }),
        n.on("init reInit afterChange", (function(t, n, i, o) {
            if ((r = (i || 0) + 1) < 10)
                var r = r.toString().padStart(2, "0");
            e.text(r);
        }
        ));
    }
    ));
    var r = t(".faces-slide").length / 2;
    2 == r || 1 == r ? t(".paragraph--type--cb36-faces-of-ipa .col-two .field-items-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: t(".prev"),
        nextArrow: t(".next"),
        asNavFor: t(".paragraph--type--cb36-faces-of-ipa .col-one .field-items-wrapper")
    }) : t(".paragraph--type--cb36-faces-of-ipa .col-two .field-items-wrapper").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: t(".prev"),
        nextArrow: t(".next"),
        asNavFor: t(".paragraph--type--cb36-faces-of-ipa .col-one .field-items-wrapper")
    }),
    t(".moreless-button").click((function() {
        t(this).toggleClass("less-text"),
        t(this).prev().slideToggle(),
        t(this).parent().toggleClass("show-text"),
        "Read more" == t(this).text() ? t(this).text("Read less") : t(this).text("Read more");
    }
    )),
    t(window).width() < 640 && t(".announcements-wrapper .inner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1
    }),
    t(document).ready((function() {
        t(".row").slice(0, 3).show(),
        t("#loadMore").on("click", (function(e) {
            e.preventDefault(),
            t(".row:hidden").slice(0, 3).slideDown(),
            0 == t(".row:hidden").length && t("#loadMore").hide();
        }
        ));
    }
    )),
    t(".video-wrapper button").click((function() {
        t(this).parent().addClass("remove-br");
    }
    )),
    t(".video-slider .field__items").length && t(".video-slider .field__items").each((function() {
        var e = t(this).parent().parent().prev().find(".current-count strong")
          , n = t(this);
        n.slick({
            dots: !1,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: !0,
            prevArrow: t(".video-prev-slide"),
            nextArrow: t(".video-next-slide"),
            speed: 300
        }),
        n.on("init reInit afterChange", (function(t, n, i, o) {
            if ((r = (i || 0) + 1) < 10)
                var r = r.toString().padStart(2, "0");
            e.text(r);
        }
        ));
    }
    )),
    t(".news-slider .field-items-wrapper").length && t(".news-slider .field-items-wrapper").each((function() {
        var e = t(this).parent().parent().prev().find(".current-count strong")
          , n = t(this);
        n.slick({
            speed: 300,
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: t(".video-prev-slide"),
            nextArrow: t(".video-next-slide"),
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }]
        }),
        n.on("init reInit afterChange", (function(t, n, i, o) {
            if ((r = (i || 0) + 1) < 10)
                var r = r.toString().padStart(2, "0");
            e.text(r);
        }
        ));
    }
    )),
    t("#play").on("click", (function(e) {
        e.preventDefault(),
        t("iframe")[0].src += "?autoplay=1",
        t("iframe").show(),
        t("#video-cover").hide(),
        t("#play").hide();
    }
    )),
    t(".bio-testimonial-slider .field__items").slick({
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        prevArrow: t(".testimonial-prev-slide"),
        nextArrow: t(".testimonial-next-slide")
    }),
    t(".timeline-slider .field__items").slick({
        infinite: !0,
        speed: 800,
        slidesToShow: 1,
        prevArrow: t(".time-prev-slide"),
        nextArrow: t(".time-next-slide"),
        asNavFor: ".timeline-nav .field__items"
    }),
    t(".timeline-nav .field__items").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: !1,
        asNavFor: ".timeline-slider .field__items",
        focusOnSelect: !0,
        responsive: [{
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    document.querySelectorAll(".accordion").forEach(( (t) => {
        t.onclick = function() {
            this.classList.toggle("is-open");
            let t = this.nextElementSibling;
            t.style.maxHeight ? t.style.maxHeight = null : t.style.maxHeight = t.scrollHeight + "px";
        }
        ;
    }
    )),
    t("div[class*=field-view-more-people] .field__item a").each((function() {
        let e = t(this).attr("href");
        const n = window.location.href;
        document.referrer;
        if (e == n)
            return t(this).addClass("active"),
            !1;
        if (t(".field--name-field-view-more-people a").each((function() {
            let e = t(this).attr("href");
            e.includes("#people_filter") || t(this).attr("href", e + "#people_filter");
        }
        )),
        "#people_filter" == window.location.hash) {
            let e = t(".paragraph--type--cb05-people").offset().top;
            window.scrollTo({
                top: e,
                left: 0,
                behavior: "smooth"
            });
        }
    }
    )),
    t("div[class*=cb12-discover-more] a").each((function() {
        t(this).attr("href");
        window.location.href,
        document.referrer;
        if (t(".cb12-discover-more a").each((function() {
            let e = t(this).attr("href");
            e.includes("#news_filter") || t(this).attr("href", e + "#news_filter");
        }
        )),
        "#news_filter" == window.location.hash) {
            let e = t(".cb12-discover-more").offset().top;
            window.scrollTo({
                top: e,
                left: 0,
                behavior: "smooth"
            });
        }
    }
    )),
    t(".pt-teasers-wrapper .field__items").addClass((function() {
        return t(this).children(".field__item").length % 2 == 0 ? "counted-even-lis" : "counted-odd-lis";
    }
    ));
    var s = document.getElementsByClassName("accordionItem")
      , a = document.getElementsByClassName("accordionItemHeading");
    for (i = 0; i < a.length; i++)
        a[i].addEventListener("click", l, !1);
    function l() {
        var t = this.parentNode.className;
        for (i = 0; i < s.length; i++)
            s[i].className = "accordionItem close";
        "accordionItem close" == t && (this.parentNode.className = "accordionItem open");
    }
    t((function() {
        var e = t(".to-fix")
          , n = e.offset().top
          , i = t(window);
        i.scroll((function(t) {
            i.scrollTop() >= n ? e.css({
                position: "fixed",
                top: 0,
                marginTop: 0
            }) : "fixed" === e.css("position") && e.css({
                position: "",
                top: "",
                marginTop: "0px"
            });
        }
        ));
    }
    ));
    var c = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: t("#d1").height()
        }
    });
    new ScrollMagic.Scene({
        triggerElement: ".t1"
    }).setClassToggle("#high1, #dot1, .color-scheme", "active1").addTo(c),
    new ScrollMagic.Scene({
        triggerElement: ".t2"
    }).setClassToggle("#high2, #dot2, .color-scheme", "active2").addTo(c),
    new ScrollMagic.Scene({
        triggerElement: ".t3"
    }).setClassToggle("#high4, #dot4, .color-scheme", "active3").addTo(c),
    new ScrollMagic.Scene({
        triggerElement: ".t4"
    }).setClassToggle("#high3, #dot3, .color-scheme", "active4").addTo(c),
    new ScrollMagic.Scene({
        triggerElement: ".test-trigger"
    }).setClassToggle("#to-fix", "unfix").addTo(c);
}
)),
function(t) {
    Drupal.behaviors.myModuleBehaviours = {
        attach: function(e, n) {
            t(".al-bottom .views-summary.views-summary-unformatted a").click((function(e) {
                var n = setInterval((function() {
                    0 == t(".ajax-progress.ajax-progress-fullscreen").length && (clearInterval(n),
                    setTimeout((function() {
                        0 == t("#views-exposed-form-partners-block-1 input[id*=edit-reset]").length && (t("#views-exposed-form-partners-block-1 div[id*=edit-actions]").append('<input data-drupal-selector="edit-reset" type="submit" id="edit-reset--BF9B8nbF6u8" name="op" value="Reset" class="button js-form-submit form-submit">'),
                        fix_reset_button(t));
                    }
                    ), 500));
                }
                ), 300);
            }
            ));
            var i = setInterval((function() {
                t('#search-block-form input[data-once="drupal-ajax"]').length > 0 && (clearInterval(i),
                t('#search-block-form input[type="submit"]').unbind("click"));
            }
            ), 300);
        }
    },
    appendSearchIcon(t(".form-item-field-bio-name-value")),
    appendSearchIcon(t(".js-form-item-title.form-item-title"));
}(jQuery),
jQuery(document).ready((function(t) {}
)),
jQuery(document).ready((function(t) {
    !function() {
        t(".scroll-watch").each((function(e) {
            t(this).attr("id", "scroll-" + e),
            t(this).addClass("scroll-ready");
        }
        ));
        var e = new ScrollMagic.Controller();
        t(".scroll-ready").each((function() {
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .75
            }).on("start", (function() {
                t("#" + this.triggerElement().id).toggleClass("init");
            }
            )).addTo(e);
        }
        ));
    }();
}
)),
jQuery(document).ready((function(t) {
    t("select").length && t("select").select2({
        minimumResultsForSearch: -1
    });
}
)),
jQuery(document).ready((function(t) {
    t(".slick-arrow").length && (t(".slick-next").each((function() {
        t(this).append('<svg class="slider-arrow" aria-label="next slide arrow icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>');
    }
    )),
    t(".slick-prev").each((function() {
        t(this).append('<svg class="slider-arrow" aria-label="previous slide arrow icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M20,21l-3.1,3L5,12L16.9,0L20,3l-9,9L20,21z"/></svg>');
    }
    )));
}
)),
jQuery(document).ready((function(t) {
    if (t("#map").length) {
        t("div.view-id-location_categories").find("ul.filter-list").prepend('<li><a href="javascript:void(0);" class="view-all active-filter">View All</a></li>'),
        mapboxgl.accessToken = "pk.eyJ1Ijoic2FicmluYXBmYXV0eiIsImEiOiJkZmZGazRvIn0.yqUCCzwjhdG_QVdjKEJ-eQ";
        const n = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/sabrinapfautz/cl7z4u2r3003l15mkmz3v6t6h",
            zoom: 1.5
        });
        if (n.scrollZoom.disable(),
        t(".map-zoom").on("click", (function(e) {
            e.preventDefault();
            var i = n.getZoom();
            if (t(this).hasClass("zoom-in")) {
                var o = i + 1;
                n.setZoom(o);
            }
            if (t(this).hasClass("zoom-out")) {
                o = i - 1;
                n.setZoom(o);
            }
        }
        )),
        t(".country-render").length) {
            function e(t) {
                var e = ["in", "iso_3166_1_alpha_3"];
                if (0 === t.length)
                    return e;
                for (var n = 0; n < t.length; n += 1)
                    e.push(t[n]);
                return e;
            }
            n.on("load", (function() {
                n.addLayer({
                    id: "country-boundaries",
                    source: {
                        type: "vector",
                        url: "mapbox://mapbox.country-boundaries-v1"
                    },
                    "source-layer": "country_boundaries",
                    type: "fill",
                    paint: {
                        "fill-color": "#84D0D4",
                        "fill-outline-color": "#0c2166",
                        "fill-opacity": 1
                    }
                }, "country-label");
                var i = [];
                t(".country-render").each((function() {
                    var e = t(this).attr("data-country");
                    i.push(e);
                }
                ));
                var o = e(i);
                n.setFilter("country-boundaries", o),
                n.addSource("states", {
                    type: "geojson",
                    data: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson"
                }),
                n.addLayer({
                    id: "states-layer",
                    type: "fill",
                    source: "states",
                    paint: {
                        "fill-color": "rgba(200, 100, 240, 0)",
                        "fill-outline-color": "rgba(200, 100, 240, 0)"
                    }
                });
            }
            ));
        }
        t(".marker-render").each((function() {
            var e = t(this).attr("data-lng")
              , i = t(this).attr("data-lat")
              , o = t(this).attr("data-categories")
              , r = t(this).attr("data-set")
              , s = [e, i]
              , a = t(this).children(".module-render").html()
              , l = document.createElement("a")
              , c = document.createAttribute("href")
              , d = document.createAttribute("data-cords")
              , u = document.createAttribute("data-lat")
              , p = document.createAttribute("data-lng")
              , h = document.createAttribute("data-cats")
              , f = document.createAttribute("data-set");
            d.value = s,
            u.value = i,
            p.value = e,
            c.value = "javascript:void(0);",
            l.className = "marker",
            h.value = o,
            f.value = r,
            l.setAttributeNode(u),
            l.setAttributeNode(p),
            l.setAttributeNode(c),
            l.setAttributeNode(d),
            l.setAttributeNode(h),
            l.setAttributeNode(f);
            const g = new mapboxgl.Popup({
                offset: 20
            }).setHTML(a);
            new mapboxgl.Marker(l).setLngLat(s).setPopup(g).addTo(n);
        }
        )),
        t(document).on("click", ".marker", (function() {
            var e = [t(this).attr("data-lng"), t(this).attr("data-lat")];
            n.flyTo({
                center: e,
                curve: 1,
                speed: 3.5,
                easing: function(t) {
                    return t;
                }
            });
        }
        )),
        n.on("click", (function(e) {
            var i = n.queryRenderedFeatures(e.point, {
                layers: ["states-layer"]
            });
            if (i.length) {
                var o = i[0].properties.adm0_a3;
                if (t("#" + o).length) {
                    var r = t("#" + o).children(".module-render").html();
                    (new mapboxgl.Popup()).setLngLat(e.lngLat).setHTML(r).addTo(n);
                    n.flyTo({
                        center: e.lngLat,
                        curve: 1,
                        speed: 3.5,
                        easing: function(t) {
                            return t;
                        }
                    });
                }
            }
        }
        )),
        t(".filter-container a").on("click", (function(i) {
            i.preventDefault(),
            t(".active-filter").removeClass("active-filter"),
            t(this).addClass("active-filter"),
            t(".mapboxgl-popup").hide(),
            t(".filter-country").removeClass("filter-country"),
            t(".hide-country").removeClass("hide-country"),
            n.setFilter("country-boundaries", null);
            var o = [];
            if (t(this).hasClass("view-all"))
                t(".marker").show(),
                t(".country-render").each((function() {
                    var e = t(this).attr("data-country");
                    o.push(e);
                }
                ));
            else {
                var r = t(this).text();
                t(".marker").each((function() {
                    t(this).attr("data-cats").includes(r) ? t(this).show() : t(this).hide();
                }
                )),
                t(".country-render").each((function() {
                    var e = t(this).attr("data-categories")
                      , n = t(this).attr("data-country");
                    e.includes(r) ? t(this).addClass("filter-country") : t(this).addClass("hide-country"),
                    t(this).hasClass("filter-country") && o.push(n);
                }
                ));
            }
            var s = e(o);
            n.setFilter("country-boundaries", s);
        }
        )),
        t(window).width() < 651 && n.flyTo({
            center: [-90.786331, 40.039461],
            zoom: 1
        });
    }
}
));
;