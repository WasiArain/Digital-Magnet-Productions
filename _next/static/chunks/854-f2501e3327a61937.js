(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [532, 854], {
        47: e => {
            e.exports = {
                imageContainer: "PersonDetails_imageContainer__FZd2k",
                name: "PersonDetails_name__T_39k",
                functionContainer: "PersonDetails_functionContainer__s8thG",
                label: "PersonDetails_label__YbuBL",
                personsContainer: "PersonDetails_personsContainer__dHBHc",
                threeColumn: "PersonDetails_threeColumn__igPYW",
                fourColumn: "PersonDetails_fourColumn__UKa87",
                flexContainer: "PersonDetails_flexContainer__fa3JS",
                topSeparator: "PersonDetails_topSeparator__04W8N",
                leftContainer: "PersonDetails_leftContainer__o2pCv",
                leftPersonsContainer: "PersonDetails_leftPersonsContainer__ZEOrQ",
                pronouns: "PersonDetails_pronouns__2Z6wa",
                socialLinksContainer: "PersonDetails_socialLinksContainer__ClvHy",
                socialsTitle: "PersonDetails_socialsTitle__j4U22",
                social: "PersonDetails_social__XvIJj",
                textContainer: "PersonDetails_textContainer__it5QR",
                description: "PersonDetails_description__X_6Ge"
            }
        },
        799: e => {
            e.exports = {
                header: "IntegratedSolutions_header__g9gjr",
                title: "IntegratedSolutions_title__w_led",
                card: "IntegratedSolutions_card__sQWZ7",
                "cards-container": "IntegratedSolutions_cards-container__iX_v7",
                cardsContainer: "IntegratedSolutions_cards-container__iX_v7",
                "integrated-solutions": "IntegratedSolutions_integrated-solutions__KM9My",
                integratedSolutions: "IntegratedSolutions_integrated-solutions__KM9My",
                subtitle: "IntegratedSolutions_subtitle__IZRZb"
            }
        },
        1354: e => {
            e.exports = {
                "text-slide": "TextSlide_text-slide__10y0K",
                textSlide: "TextSlide_text-slide__10y0K",
                "content-frame": "TextSlide_content-frame__pCA3W",
                contentFrame: "TextSlide_content-frame__pCA3W",
                "top-left-title": "TextSlide_top-left-title__uCZLG",
                topLeftTitle: "TextSlide_top-left-title__uCZLG",
                "kanji-text": "TextSlide_kanji-text__G5mON",
                kanjiText: "TextSlide_kanji-text__G5mON",
                "bottom-right-title": "TextSlide_bottom-right-title__IhWMp",
                bottomRightTitle: "TextSlide_bottom-right-title__IhWMp"
            }
        },
        1397: e => {
            e.exports = {
                button: "NoFilterResultMessage_button__gPcFo"
            }
        },
        1680: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => cr
            });
            var n, i = r(37876),
                a = r(84113),
                s = r(15039),
                l = r.n(s),
                o = r(96941),
                c = r(14232),
                u = r(44876),
                d = r(83287),
                _ = r(7239),
                m = r(58291),
                p = r.n(m),
                g = r(69215),
                f = r.n(g),
                h = r(50355);

            function x(e, {
                elementRef: t
            }) {
                let r = Array.from(t.current ? .children ? ? []).filter(e => e instanceof HTMLElement);
                r.length > 0 && e.add((0, h.HT)(r, {
                    from: "bottom",
                    duration: .5,
                    stagger: .1
                }), 0)
            }

            function v(e, {
                imageItemRefs: t
            }) {
                t.current.forEach((t, r) => {
                    t && e.to(t, {
                        yPercent: (r + 1) * 5,
                        ease: "none"
                    }, 0)
                })
            }

            function b() {}
            var y = r(34172),
                T = r(94825),
                I = r(54587),
                C = r.n(I),
                w = r(93517),
                k = r(75555),
                j = r.n(k),
                S = r(51607);

            function N(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function R(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var A = r(5562),
                O = r.n(A),
                P = r(21429);

            function L(e, {
                elementRef: t,
                titleRef: r,
                textRef: n,
                index: i
            }) {
                let a = (0, P.xy)(r),
                    s = (0, P.xy)(n);
                t ? .current && e.add((0, h.HT)(t.current, {
                    from: "bottom",
                    duration: .5
                })), a && e.add(a.getTimeline("in")), s && e.add(s.getTimeline("in"), "<0.2")
            }

            function M(e, {
                titleRef: t,
                textRef: r
            }) {
                let n = (0, P.xy)(t),
                    i = (0, P.xy)(r);
                n && e.add(n.getTimeline("out")), i && e.add(i.getTimeline("out"))
            }
            var z = r(5338);

            function H({
                isVisible: e,
                className: t,
                note: r,
                index: n,
                ref: a
            }) {
                let s = (0, c.useRef)(null),
                    o = a || s,
                    u = (0, z.B)(o, {
                        threshold: [0, .5]
                    }),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, T.zW)(() => ({
                        ref: o,
                        refs: {
                            elementRef: o,
                            titleRef: m,
                            textRef: p,
                            index: n
                        },
                        setupTransitionInTimeline: L,
                        setupTransitionOutTimeline: M
                    }), []);
                return (0, y.s)(g, {
                    onMount: e ? .onMount ? ? !0,
                    value: (e ? .value ? ? !0) && u
                }), (0, i.jsxs)("div", {
                    ref: o,
                    className: l()(O().stickyNote, t),
                    children: [(0, i.jsx)(d.A, {
                        ref: m,
                        className: l()(O().title),
                        as: "h4",
                        size: "heading-04",
                        children: r.title
                    }), r.text && (0, i.jsx)(_.A, {
                        ref: p,
                        className: l()(O().text),
                        as: "p",
                        size: "body-standard",
                        children: r.text
                    })]
                })
            }
            var B = r(7932);
            let F = function(e, t, r, n) {
                let [i, a] = (0, c.useState)(!1), {
                    registerBlock: s,
                    removeBlock: l,
                    setForceRefresh: o
                } = (0, B.u2)();
                (0, c.useEffect)(() => (s(e, t, r), n && !i && (o(e => e + 1), a(!0)), () => {
                    l(e)
                }), [e, t, s, l, r, n, i, o])
            };
            var E = r(66087),
                W = r.n(E),
                D = r(49672),
                U = r(39475),
                $ = r(30743),
                X = r(28272),
                V = r.n(X);

            function G(e, {
                titleRef: t,
                descriptionRef: r,
                imageRef: n
            }) {
                let i = (0, P.xy)(t),
                    a = (0, P.xy)(r);
                n && e.fromTo(n.current, {
                    scale: 1.15
                }, {
                    scale: 1,
                    duration: .6
                }, 0), i && e.add(i.getTimeline("in"), 0), a && e.add(a.getTimeline("in"), .2)
            }

            function q(e, {
                titleRef: t,
                descriptionRef: r,
                imageRef: n
            }) {
                let i = (0, P.xy)(t),
                    a = (0, P.xy)(r);
                n && e.to(n.current, {
                    scale: 1.15
                }, 0), i && e.add(i.getTimeline("out"), 0), a && e.add(a.getTimeline("out"), 0)
            }
            let Y = {
                    "slash-circle": {
                        clipRule: "evenodd",
                        path: "M0 1426.51C240.95 1667.46 631.608 1667.46 872.559 1426.51C1113.51 1185.56 1113.51 794.899 872.559 553.948L0 1426.51ZM1212.16 180.713C971.206 -60.2375 580.548 -60.2376 339.598 180.713C98.6473 421.663 98.6473 812.321 339.598 1053.27L1212.16 180.713Z",
                        viewBox: "0 0 1213 1608",
                        maskPosition: "68% 50%",
                        maskSize: "auto 180%"
                    },
                    "clover-1": {
                        path: "M447.033 270.266C409.577 255.247 368.731 246.904 325.913 246.904C145.915 246.904 0 392.902 0 573C0 753.098 145.915 899.098 325.911 899.098C368.729 899.098 409.575 890.752 447.031 875.736C473.514 1029.22 607.128 1146 768.087 1146C948.083 1146 1094 1000 1094 819.902C1094 721.193 1050.11 632.799 980.856 573C1050.11 513.201 1094 424.806 1094 326.098C1094 145.998 948.085 0 768.087 0C607.127 0 473.514 116.782 447.033 270.266Z",
                        viewBox: "0 0 1094 1146",
                        maskSize: "auto 135%"
                    },
                    "halved-pair": {
                        path: "M417 0C647.303 0.000166288 834 186.697 834 417C834 647.303 647.303 834 417 834C186.697 834 0 647.303 0 417C0 186.697 186.697 0 417 0ZM836.575 18.7217C1055.36 20.1071 1232.28 197.89 1232.28 416.998C1232.28 636.965 1053.97 815.283 834 815.283L836.575 18.7217Z",
                        viewBox: "0 0 1233 834",
                        maskSize: "auto 105%",
                        maskPosition: "73% 50%"
                    },
                    pinwheel: {
                        clipRule: "evenodd",
                        path: "M1339.7 1335.4C1706.47 1337.73 2003.07 1635.77 2003.07 2003.09C2003.07 2371.84 1704.14 2670.78 1335.38 2670.78L1339.7 1335.4ZM1335.4 1331.09C1337.72 964.314 1635.76 667.707 2003.08 667.707C2371.84 667.707 2670.77 966.645 2670.77 1335.4L1335.4 1331.09ZM1335.38 1339.72C1333.06 1706.49 1035.01 2003.1 667.697 2003.1C298.939 2003.1 0.000921769 1704.16 0.000846242 1335.4L1335.38 1339.72ZM667.685 667.696C667.685 298.938 966.623 0.000253739 1335.38 0.00022137L1331.06 1335.38C964.291 1333.06 667.685 1035.01 667.685 667.696Z",
                        viewBox: "0 0 2671 2671",
                        maskPosition: "49% 50%",
                        maskSize: "auto 300%"
                    },
                    "clover-2": {
                        path: "M236.778 566.54C223.62 599.339 216.31 635.108 216.31 672.603C216.31 830.224 344.218 958 502 958C659.782 958 787.691 830.224 787.691 672.605C787.691 635.11 780.38 599.341 767.224 566.542C901.688 543.351 1004 426.347 1004 285.397C1004 127.778 876.092 0 718.309 0C631.831 0 554.389 38.4371 502 99.0785C449.611 38.4371 372.169 0 285.691 0C127.908 0 0 127.776 0 285.397C0 426.347 102.312 543.351 236.778 566.54Z",
                        viewBox: "0 0 1004 958",
                        maskPosition: "100% 0",
                        maskSize: "auto 125%"
                    },
                    "twin-circle": {
                        path: "M1444.9 0C1712.76 0 1929.9 217.142 1929.9 485C1929.9 752.858 1712.76 970 1444.9 970C1200.9 970 998.977 789.811 964.948 555.239C930.919 789.811 729.003 970 485 970C217.142 970 0 752.858 0 485C0 217.142 217.142 0 485 0C729.003 0.00020365 930.918 180.188 964.948 414.759C998.978 180.187 1200.9 0 1444.9 0Z",
                        viewBox: "0 0 1930 970",
                        maskPosition: "100% 50%",
                        maskSize: "auto 125%"
                    },
                    "double-stack": {
                        path: "M798.311 0.000941667C798.311 192.548 661.974 353.251 480.57 390.845L798.311 390.845C798.311 611.292 619.602 790 399.155 790C178.708 790 0 611.292 0 390.845L317.739 390.845C136.336 353.251 0 192.548 0 0.000976562L798.311 0.000941667Z",
                        viewBox: "0 0 799 790",
                        maskPosition: "100% 50%",
                        maskSize: "auto 105%"
                    },
                    "clover-3": {
                        path: "M355.501 215.081C325.715 203.129 293.232 196.489 259.181 196.489C116.039 196.489 0 312.676 0 456C0 599.324 116.039 715.512 259.179 715.512C293.23 715.512 325.713 708.871 355.5 696.921C376.56 819.064 482.816 912 610.819 912C753.96 912 870 795.813 870 652.487C870 573.934 835.094 503.588 780.023 456C835.094 408.411 870 338.066 870 259.512C870 116.187 753.961 0 610.819 0C482.816 0 376.56 92.9363 355.501 215.081Z",
                        viewBox: "0 0 870 912",
                        maskSize: "auto 105%"
                    },
                    "horizontal-split": {
                        clipRule: "evenodd",
                        path: "M1085.82 400.32C1085.82 613.205 913.241 785.783 700.356 785.784C487.471 785.784 314.893 613.207 314.894 400.321L1085.82 400.32ZM-0.000237 385.465C0.000191886 172.579 172.578 0.00143779 385.463 0.000957651C598.349 0.000542251 770.926 172.578 770.926 385.463L-0.000237 385.465Z",
                        viewBox: "0 0 1086 786",
                        maskSize: "auto 105%"
                    }
                },
                Q = Object.fromEntries(Object.entries(Y).map(([e, t]) => [e, function({
                    clipRule: e,
                    path: t,
                    viewBox: r
                }) {
                    let n = e ? ` clip-rule="${e}"` : "";
                    return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r}"><path${n} d="${t}"/></svg>`)}")`
                }(t)]));

            function J({
                isVisible: e,
                className: t,
                ref: r,
                card: n
            }) {
                let a = (0, c.useRef)(null),
                    s = r || a,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    [p, g] = (0, c.useState)(!1),
                    f = Y[n.icon_shape.icon],
                    h = Q[n.icon_shape.icon],
                    x = {
                        WebkitMaskImage: h,
                        WebkitMaskPosition: f.maskPosition || "center",
                        WebkitMaskSize: f.maskSize,
                        maskImage: h,
                        maskPosition: f.maskPosition || "center",
                        maskSize: f.maskSize
                    },
                    v = (0, T.zW)(() => ({
                        ref: s,
                        refs: {
                            elementRef: s,
                            titleRef: o,
                            descriptionRef: u,
                            imageRef: m
                        },
                        setupTransitionInTimeline: G,
                        setupTransitionOutTimeline: q
                    }), []);
                return (0, c.useEffect)(() => {
                    let e = s.current;
                    if (!e) return void g(!1);
                    let t = new IntersectionObserver(([e]) => {
                        g(e.isIntersecting)
                    }, {
                        root: null,
                        threshold: .5
                    });
                    return t.observe(e), () => {
                        t.disconnect()
                    }
                }, [s]), (0, y.s)(v, {
                    onMount: e ? .onMount ? ? !1,
                    value: (e ? .value ? ? !0) && p
                }), (0, i.jsxs)("div", {
                    ref: s,
                    className: l()(V().storyCard, t),
                    children: [(0, i.jsx)("div", {
                        className: V().imageContainer,
                        children: (0, i.jsx)("div", {
                            className: V().imageMask,
                            style: x,
                            children: (0, i.jsx)(C(), {
                                ref: m,
                                src: n.image.filename,
                                alt: n.image.alt || "",
                                className: V().image,
                                fill: !0,
                                sizes: "(min-width: 768px) 50vw, 100vw"
                            })
                        })
                    }), (0, i.jsxs)("div", {
                        className: V().textContainer,
                        children: [(0, i.jsx)(d.A, {
                            className: V().title,
                            as: "h3",
                            size: "heading-03",
                            ref: o,
                            children: n.title
                        }), (0, i.jsx)(_.A, {
                            ref: u,
                            as: "p",
                            size: "body-standard",
                            className: l()(V().description),
                            children: n.description
                        })]
                    })]
                })
            }
            var Z = r(9324),
                K = r(32212),
                ee = r.n(K);

            function et(e, {
                titleTopLeftRef: t,
                titleBottomRightRef: r,
                titleTopLeftMaskRef: n,
                titleBottomRightMaskRef: i
            }) {
                let a = (0, P.xy)(t),
                    s = (0, P.xy)(n),
                    l = (0, P.xy)(r),
                    o = (0, P.xy)(i);
                a && e.add(a ? .getTimeline("in")), e.addLabel("startTopLeftMaskIn", "-=0"), s && e.add(s ? .getTimeline("in"), "<"), l && e.add(l ? .getTimeline("in"), "startTopLeftMaskIn+=0.2"), o && e.add(o ? .getTimeline("in"), "<0.1")
            }

            function er(e, {
                titleTopLeftRef: t,
                titleBottomRightRef: r,
                titleTopLeftMaskRef: n,
                titleBottomRightMaskRef: i
            }) {
                let a = (0, P.xy)(t),
                    s = (0, P.xy)(n),
                    l = (0, P.xy)(r),
                    o = (0, P.xy)(i);
                a && e.add(a ? .getTimeline("out")), e.addLabel("outComplete", "-=0"), l && e.add(l ? .getTimeline("out"), "outComplete"), s && e.add(s ? .getTimeline("out"), 0), o && e.add(o ? .getTimeline("out"), "outComplete")
            }
            var en = r(15573),
                ei = r(85843);
            let ea = {
                top: "60%",
                left: "80%"
            };

            function es({
                iconColor: e = "#fff",
                isVisible: t,
                disableRevealOnVisibilityChange: r = !1,
                position: n = ea,
                revealDelay: a = 1.5,
                ref: s
            }) {
                let l = (0, c.useRef)(null),
                    u = (0, c.useId)(),
                    d = (0, c.useRef)(null),
                    _ = (0, c.useRef)(null),
                    m = (0, c.useRef)(o.Ay.timeline({
                        paused: !0
                    })),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    {
                        width: h,
                        height: x
                    } = (0, U.A)(),
                    v = 2 * h,
                    b = 100 * x / 75;
                (0, c.useLayoutEffect)(() => {
                    if (!_.current || !p.current || !d.current) return;
                    let e = m.current;
                    return e.clear(), e.fromTo([p.current, d.current], {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .1,
                        ease: "power2.in"
                    }, 0).fromTo(_.current, {
                        attr: {
                            rx: "50%",
                            ry: "50%"
                        },
                        "--mask-scale": 0
                    }, {
                        attr: {
                            rx: 0,
                            ry: 0
                        },
                        "--mask-scale": 1,
                        duration: .8,
                        ease: "power2.inOut"
                    }, a).pause(0), () => {
                        e.clear()
                    }
                }, [a, h, x]), (0, c.useEffect)(() => {
                    if (d.current) return o.Ay.set(d.current, {
                        rotation: -25,
                        transformOrigin: "50% 50%"
                    }), g.current = o.Ay.to(d.current, {
                        rotation: "+=360",
                        duration: 180,
                        ease: "none",
                        repeat: -1,
                        transformOrigin: "50% 50%"
                    }), () => {
                        f.current ? .kill(), f.current = null, g.current ? .kill(), g.current = null
                    }
                }, []), (0, c.useEffect)(() => {
                    "boolean" == typeof t && (t ? m.current ? .play() : m.current ? .reverse())
                }, [t]);
                let y = (0, c.useCallback)(e => {
                    g.current && !(e <= 0) && (f.current ? .kill(), f.current = o.Ay.to(g.current, {
                        timeScale: 180 / e,
                        duration: .4,
                        ease: "power2.out",
                        overwrite: !0
                    }))
                }, []);
                return (0, c.useImperativeHandle)(s, () => ({
                    elementRef: l,
                    revealTimelineRef: m,
                    setRotationDuration: y
                }), [y]), (0, i.jsxs)("svg", {
                    width: 15e3,
                    height: 15e3,
                    viewBox: "0 0 15000 15000",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: ee().backgroundIcon,
                    style: n,
                    ref: l,
                    children: [(0, i.jsx)("defs", {
                        children: (0, i.jsx)("clipPath", {
                            id: u,
                            clipPathUnits: "userSpaceOnUse",
                            children: (0, i.jsx)("rect", {
                                ref: _,
                                className: ee().backgroundIconMask,
                                style: {
                                    "--mask-scale": 0
                                },
                                width: v,
                                height: b,
                                x: 7500 - v / 2,
                                y: 7500 - b / 2
                            })
                        })
                    }), (0, i.jsx)("g", {
                        clipPath: `url(#${u})`,
                        children: (0, i.jsxs)("g", {
                            ref: d,
                            className: ee().backgroundIconSpin,
                            children: [(0, i.jsx)("rect", {
                                width: 15e3,
                                height: 15e3,
                                fill: e,
                                ref: p
                            }), (0, i.jsx)("path", {
                                d: "M7500.02 7499.99C9215.75 9215.72 9215.75 11997.5 7500.02 13713.2C5784.28 15428.9 3002.53 15428.9 1286.79 13713.2",
                                fill: "var(--background-color)"
                            }), (0, i.jsx)("path", {
                                d: "M7500.02 7500.01C5784.28 5784.28 5784.28 3002.53 7500.02 1286.8C9215.75 -428.933 11997.5 -428.933 13713.2 1286.8",
                                fill: "var(--background-color)"
                            }), (0, i.jsx)("path", {
                                d: "M7500.03 7500C5784.29 9215.73 3002.54 9215.73 1286.8 7500C-428.934 5784.27 -428.933 3002.52 1286.8 1286.79",
                                fill: "var(--background-color)"
                            }), (0, i.jsx)("path", {
                                d: "M7500.01 7500C9215.74 5784.27 11997.5 5784.27 13713.2 7500C15429 9215.73 15429 11997.5 13713.2 13713.2",
                                fill: "var(--background-color)"
                            })]
                        })
                    })]
                })
            }
            let el = {
                    top: "50",
                    left: "50%"
                },
                eo = ({
                    iconColor: e = "#fff",
                    isVisible: t,
                    initialRotation: r = 0,
                    position: n = el,
                    revealDelay: a = 1.5,
                    ref: s
                }) => {
                    let u = (0, c.useRef)(null),
                        d = (0, c.useId)(),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(o.Ay.timeline({
                            paused: !0
                        })),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(null),
                        x = (0, c.useRef)(null),
                        {
                            width: v,
                            height: b
                        } = (0, U.A)(),
                        y = 2 * v,
                        T = 100 * b / 80;
                    return (0, c.useLayoutEffect)(() => {
                        if (!m.current || !g.current || !_.current) return;
                        let e = p.current;
                        return e.clear(), e.fromTo([g.current, _.current], {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .1,
                            ease: "power2.in"
                        }, 0).fromTo(m.current, {
                            attr: {
                                rx: "50%",
                                ry: "50%"
                            },
                            "--mask-scale": 0
                        }, {
                            attr: {
                                rx: 0,
                                ry: 0
                            },
                            "--mask-scale": 1,
                            duration: .8,
                            ease: "power2.inOut"
                        }, a).pause(0), () => {
                            e.clear()
                        }
                    }, [a, v, b]), (0, c.useEffect)(() => {
                        if (_.current) return o.Ay.set(_.current, {
                            rotation: r,
                            transformOrigin: "50% 50%"
                        }), f.current = o.Ay.to(_.current, {
                            rotation: "+=360",
                            duration: 180,
                            ease: "none",
                            repeat: -1,
                            transformOrigin: "50% 50%"
                        }), x.current = o.Ay.fromTo(_.current, {
                            scale: .65
                        }, {
                            scale: .3,
                            duration: 45,
                            ease: "none",
                            repeat: -1,
                            yoyo: !0,
                            transformOrigin: "50% 50%"
                        }), () => {
                            x.current ? .kill(), x.current = null, h.current ? .kill(), h.current = null, f.current ? .kill(), f.current = null
                        }
                    }, []), (0, c.useEffect)(() => {
                        "boolean" == typeof t && (t ? p.current ? .play() : p.current ? .reverse())
                    }, [t]), (0, c.useImperativeHandle)(s, () => ({
                        elementRef: u,
                        revealTimelineRef: p
                    }), []), (0, i.jsxs)("svg", {
                        width: 15e3,
                        height: 15e3,
                        viewBox: "0 0 15000 15000",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: l()(ee().backgroundIcon, ee().largeCurve),
                        style: n,
                        ref: u,
                        children: [(0, i.jsx)("defs", {
                            children: (0, i.jsx)("clipPath", {
                                id: d,
                                clipPathUnits: "userSpaceOnUse",
                                children: (0, i.jsx)("rect", {
                                    ref: m,
                                    className: ee().backgroundIconMask,
                                    style: {
                                        "--mask-scale": 0
                                    },
                                    width: y,
                                    height: T,
                                    x: 7500 - y / 2,
                                    y: 7500 - T / 2
                                })
                            })
                        }), (0, i.jsx)("g", {
                            clipPath: `url(#${d})`,
                            children: (0, i.jsxs)("g", {
                                ref: _,
                                className: ee().backgroundIconSpin,
                                children: [(0, i.jsx)("rect", {
                                    width: 15e3,
                                    height: 15e3,
                                    fill: e,
                                    ref: g
                                }), (0, i.jsx)("path", {
                                    d: "M7500.02 7500.02C9215.75 9215.75 9215.75 11997.5 7500.02 13713.2C5784.28 15429 3002.53 15429 1286.79 13713.2",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M7500.02 7500.05C5784.28 5784.32 5784.28 3002.57 7500.02 1286.83C9215.75 -428.897 11997.5 -428.897 13713.2 1286.84",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M1286.87 13713.2C-428.866 11997.5 -428.866 9215.71 1286.87 7499.98C3002.61 5784.25 5784.36 5784.25 7500.1 7499.98",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M7499.29 7500.32C9215.02 9216.06 11996.8 9216.06 13712.5 7500.32C15428.2 5784.59 15428.2 3002.83 13712.5 1287.1",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M7500.03 7500.04C5784.29 9215.77 3002.54 9215.77 1286.8 7500.04C-428.934 5784.3 -428.934 3002.56 1286.8 1286.82",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M13713.2 13713.2C11997.4 15428.9 9215.67 15428.9 7499.94 13713.2C5784.2 11997.4 5784.2 9215.69 7499.94 7499.96",
                                    fill: "var(--background-color)"
                                })]
                            })
                        })]
                    })
                };
            var ec = r(5254);
            let eu = {
                    top: "50%",
                    left: "75%"
                },
                ed = ({
                    iconColor: e = "#fff",
                    isVisible: t,
                    initialRotation: r = 0,
                    position: n = eu,
                    revealDelay: a = 1.5,
                    ref: s
                }) => {
                    let u = (0, c.useRef)(null),
                        d = (0, c.useId)(),
                        _ = (0, c.useId)(),
                        m = (0, c.useId)(),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(o.Ay.timeline({
                            paused: !0
                        })),
                        x = (0, c.useRef)(null),
                        v = (0, c.useRef)(null),
                        b = (0, c.useRef)(null),
                        y = (0, c.useRef)(null),
                        [T, I] = (0, c.useState)(!1),
                        {
                            width: C,
                            height: w
                        } = (0, U.A)(),
                        k = 2 * C,
                        j = 100 * w / 75;
                    return (0, c.useEffect)(() => {
                        I(!("u" < typeof navigator) && /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(navigator.userAgent))
                    }, []), (0, c.useLayoutEffect)(() => {
                        if (!g.current || !f.current || !x.current || !p.current) return;
                        let e = h.current,
                            t = [g.current, f.current];
                        return e.clear(), e.fromTo([x.current, p.current], {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .1,
                            ease: "power2.in"
                        }, 0).fromTo(t, {
                            attr: {
                                rx: "50%",
                                ry: "50%"
                            },
                            "--mask-scale": 0
                        }, {
                            attr: {
                                rx: 0,
                                ry: 0
                            },
                            "--mask-scale": 1,
                            duration: .8,
                            ease: "power2.inOut"
                        }, a).pause(0), () => {
                            e.clear()
                        }
                    }, [a, C, w]), (0, c.useEffect)(() => {
                        if (p.current) return o.Ay.set(p.current, {
                            rotation: r,
                            transformOrigin: "50% 50%"
                        }), v.current = o.Ay.to(p.current, {
                            rotation: "+=360",
                            duration: 180,
                            ease: "none",
                            repeat: -1,
                            transformOrigin: "50% 50%"
                        }), y.current = o.Ay.to(p.current, {
                            scaleY: 1.5,
                            duration: 22.5,
                            ease: "power1.inOut",
                            repeat: -1,
                            yoyo: !0,
                            transformOrigin: "50% 50%"
                        }), () => {
                            y.current ? .kill(), y.current = null, b.current ? .kill(), b.current = null, v.current ? .kill(), v.current = null
                        }
                    }, [r]), (0, c.useEffect)(() => {
                        "boolean" == typeof t && (t ? h.current ? .play() : h.current ? .reverse())
                    }, [t]), (0, c.useImperativeHandle)(s, () => ({
                        elementRef: u,
                        revealTimelineRef: h
                    }), []), (0, i.jsxs)("svg", {
                        width: 5e3,
                        height: 5e3,
                        viewBox: "0 0 5000 5000",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: l()(ee().backgroundIcon, ee().smallCurve),
                        style: { ...n
                        },
                        ref: u,
                        children: [(0, i.jsxs)("defs", {
                            children: [(0, i.jsx)("clipPath", {
                                id: _,
                                clipPathUnits: "userSpaceOnUse",
                                children: (0, i.jsx)("rect", {
                                    ref: f,
                                    className: ee().backgroundIconMask,
                                    style: {
                                        "--mask-scale": 0
                                    },
                                    width: k,
                                    height: j,
                                    x: 2500 - k / 2,
                                    y: 2500 - j / 2
                                })
                            }), (0, i.jsx)("filter", {
                                id: m,
                                x: "-20%",
                                y: "-20%",
                                width: "140%",
                                height: "140%",
                                children: (0, i.jsx)("feGaussianBlur", {
                                    stdDeviation: "90"
                                })
                            }), (0, i.jsx)("mask", {
                                id: d,
                                maskUnits: "userSpaceOnUse",
                                x: 0,
                                y: 0,
                                width: 5e3,
                                height: 5e3,
                                children: (0, i.jsx)("rect", {
                                    ref: g,
                                    className: ee().backgroundIconMask,
                                    style: {
                                        "--mask-scale": 0
                                    },
                                    width: k,
                                    height: j,
                                    x: 2500 - k / 2,
                                    y: 2500 - j / 2,
                                    fill: "#fff",
                                    filter: `url(#${m})`
                                })
                            })]
                        }), (0, i.jsx)("g", {
                            clipPath: T ? `url(#${_})` : void 0,
                            mask: T ? void 0 : `url(#${d})`,
                            children: (0, i.jsxs)("g", {
                                ref: p,
                                className: ee().backgroundIconSpin,
                                children: [(0, i.jsx)("rect", {
                                    width: 5e3,
                                    height: 5e3,
                                    fill: e,
                                    ref: x
                                }), (0, i.jsx)("path", {
                                    d: "M2500.01 2500.01C3071.92 3071.92 3071.92 3999.17 2500.01 4571.08C1928.09 5142.99 1000.84 5142.99 428.932 4571.08",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M2499.05 2499C2108.32 2108.27 2108.32 1474.78 2499.05 1084.05C2889.78 693.318 3523.28 693.318 3914.01 1084.05",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M428.957 4571.06C-142.955 3999.15 -142.955 3071.9 428.957 2499.99C1000.87 1928.08 1928.12 1928.08 2500.03 2499.99",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M2499.01 2498.95C2889.73 2889.68 3523.23 2889.68 3913.96 2498.95C4304.69 2108.22 4304.69 1474.73 3913.96 1084",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M2500.01 2500.01C1928.1 3071.92 1000.85 3071.92 428.934 2500.01C-142.978 1928.1 -142.978 1000.85 428.934 428.941",
                                    fill: "var(--background-color)"
                                }), (0, i.jsx)("path", {
                                    d: "M4571.06 4569.72C3999.14 5141.64 3071.89 5141.64 2499.98 4569.72C1928.07 3997.81 1928.07 3070.56 2499.98 2498.65",
                                    fill: "var(--background-color)"
                                })]
                            })
                        })]
                    })
                },
                e_ = function(e) {
                    let t = (0, $.d)();
                    (0, c.useLayoutEffect)(() => {
                        let r = e.current;
                        if (!r) return;
                        let n = () => {
                                r.style.setProperty("overflow-block", "clip")
                            },
                            i = () => {
                                r.style.removeProperty("overflow-block")
                            },
                            a = (0, ec.KE)(r, void 0, {
                                scroller: t ? .hasSmoothScroll ? .current && t ? .scrollWrapperRef ? .current || void 0,
                                start: "top-=1px top",
                                end: "30%",
                                onEnter: () => {
                                    console.log("enter"), i()
                                },
                                onLeave: () => {
                                    console.log("leave"), n()
                                },
                                onEnterBack: () => {
                                    console.log("onEnterBack"), i()
                                },
                                onLeaveBack: () => {
                                    console.log("onLeaveBack"), n()
                                }
                            });
                        return (a.isActive || 1 === a.progress) && i(), () => {
                            a.kill()
                        }
                    }, [e, t])
                };

            function em({
                blok: e,
                ref: t,
                disableScrollTrigger: r = !1,
                ...n
            }) {
                let a = (0, c.useRef)(null),
                    s = t || a,
                    o = (0, c.useRef)(null),
                    _ = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, $.d)(),
                    v = (0, en.E)(ei.S4.MIN_768, !0),
                    b = e.topTitle.split("\n"),
                    I = e.bottomTitle.split("\n"),
                    C = b.length > 1,
                    [w, k] = (0, c.useState)(!1),
                    [j, S] = (0, c.useState)(!1),
                    N = (0, T.zW)(() => ({
                        refs: {
                            titleBottomRightRef: m,
                            titleTopLeftRef: p,
                            titleTopLeftMaskRef: g,
                            titleBottomRightMaskRef: f
                        },
                        setupTransitionInTimeline: et,
                        setupTransitionOutTimeline: er
                    }), [v]);
                return F(s, e.use_accent_color, {
                    foreground: e.accent_color_foreground ? .color || "",
                    background: e.accent_color_background ? .color || ""
                }), e_(s), (0, y.s)(N, {
                    onMount: !0,
                    value: w && j
                }), (0, u.A)({
                    trigger: s,
                    vars: {
                        start: "top center",
                        end: "bottom top",
                        onEnter() {
                            k(!0)
                        },
                        onLeaveBack() {
                            k(!1)
                        },
                        onLeave() {
                            k(!1)
                        },
                        onEnterBack() {
                            k(!0)
                        }
                    }
                }), (0, c.useLayoutEffect)(() => {
                    if (r) return;
                    let e = s.current,
                        t = h.current ? .revealTimelineRef.current;
                    if (!e || !t) return;
                    let n = e => {
                            t.pause(), t.progress(1 - e)
                        },
                        i = (0, ec.KE)(e, void 0, {
                            scroller: x ? .hasSmoothScroll ? .current && x ? .scrollWrapperRef ? .current || void 0,
                            scrub: !0,
                            start: "top top",
                            end: "bottom top",
                            onUpdate: e => {
                                n(e.progress)
                            },
                            onRefresh: e => {
                                n(e.progress)
                            }
                        });
                    return n(i.progress), () => {
                        i.kill()
                    }
                }, [e.icon, r, s, x, v]), (0, c.useLayoutEffect)(() => {
                    S(!1);
                    let e = window.requestAnimationFrame(() => {
                        S([p, m, g, f].every(e => e.current && (0, T.xy)(e)))
                    });
                    return () => {
                        window.cancelAnimationFrame(e)
                    }
                }, [v]), (0, c.useLayoutEffect)(() => {
                    let e = _.current,
                        t = p.current,
                        r = m.current;
                    if (!e || !t || !r) return;
                    let n = () => {
                        let n = Math.max(t.getBoundingClientRect().width, r.getBoundingClientRect().width);
                        n ? e.style.maxWidth = `${1.1*n}px` : e.style.removeProperty("max-width")
                    };
                    n();
                    let i = new ResizeObserver(n);
                    return i.observe(t), window.addEventListener("resize", n), () => {
                        i.disconnect(), window.removeEventListener("resize", n)
                    }
                }, [v]), (0, i.jsx)("div", {
                    ref: s,
                    className: l()(ee().section, n.className, ee()[e.icon]),
                    id: "headerRotatingShape",
                    style: {
                        "--icon-color": e ? .icon_color ? .color,
                        ...n.style
                    },
                    children: (0, i.jsx)("div", {
                        className: ee().container,
                        children: (0, i.jsxs)("div", {
                            ref: o,
                            className: l()(ee().headerRotatingShape),
                            children: ["small" === e.icon && (0, i.jsx)(ed, {
                                ref: h,
                                iconColor: e ? .icon_color ? .color,
                                isVisible: w,
                                initialRotation: 220
                            }), "large" === e.icon && (0, i.jsx)(eo, {
                                ref: h,
                                iconColor: e ? .icon_color ? .color,
                                isVisible: w,
                                initialRotation: -25
                            }), "pinwheel" === e.icon && (0, i.jsx)(es, {
                                ref: h,
                                iconColor: e ? .icon_color ? .color,
                                isVisible: w,
                                revealDelay: 1.5,
                                position: "center" === e.position ? {
                                    top: "50%",
                                    left: "50%"
                                } : void 0
                            }), (0, i.jsxs)("div", {
                                ref: _,
                                className: ee().textContainer,
                                children: [(0, i.jsx)("span", {
                                    className: "text-outline",
                                    children: (0, i.jsx)(d.A, {
                                        ref: p,
                                        as: "h2",
                                        size: "heading-03",
                                        className: l()(ee().topLeftTitle, {
                                            [ee().isMultiline]: C
                                        }),
                                        transitionOutType: "splitCharsSlideOutUp",
                                        children: b.map((e, t) => (0, i.jsx)("div", {
                                            children: e
                                        }, `${e}-${t}`))
                                    }, `top-left-${v}`)
                                }), (0, i.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(d.A, {
                                        ref: g,
                                        as: "h2",
                                        size: "heading-03",
                                        className: l()(ee().topLeftTitle, ee().solid, {
                                            [ee().isMultiline]: C
                                        }),
                                        transitionInType: "revealLinesInOut",
                                        transitionOutType: "splitCharsSlideOutUp",
                                        children: b.map((e, t) => (0, i.jsx)("div", {
                                            children: e
                                        }, `${e}-${t}`))
                                    }, `top-left-mask-${v}`)
                                }), (0, i.jsx)("span", {
                                    className: "text-outline",
                                    children: (0, i.jsx)(d.A, {
                                        ref: m,
                                        as: "h2",
                                        size: "heading-03",
                                        className: l()(ee().bottomRightTitle),
                                        transitionOutType: "splitCharsSlideOutUp",
                                        children: I.map((e, t) => (0, i.jsx)("div", {
                                            children: e
                                        }, `${e}-${t}`))
                                    }, `bottom-right-${v}`)
                                }), (0, i.jsx)("span", {
                                    "aria-hidden": "true",
                                    children: (0, i.jsx)(d.A, {
                                        ref: f,
                                        as: "h2",
                                        size: "heading-03",
                                        className: l()(ee().bottomRightTitle, ee().solid),
                                        transitionInType: "revealLinesIn",
                                        transitionOutType: "splitCharsSlideOutUp",
                                        children: I.map((e, t) => (0, i.jsx)("div", {
                                            children: e
                                        }, `${e}-${t}`))
                                    }, `bottom-right-mask-${v}`)
                                })]
                            })]
                        })
                    })
                })
            }
            var ep = r(80429),
                eg = r.n(ep);

            function ef(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function eh(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var ex = r(24280),
                ev = r(44137),
                eb = r(24697),
                ey = r.n(eb);

            function eT(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function eI(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var eC = r(17945);

            function ew({
                isVisible: e,
                className: t,
                children: r,
                blok: n,
                canTransitionIn: s,
                ref: o
            }) {
                let u = (0, c.useRef)(null),
                    m = o || u,
                    p = (0, eC.qJ)(!1),
                    g = (0, T.zW)(() => ({
                        ref: m,
                        refs: {
                            elementRef: m
                        },
                        setupTransitionInTimeline: eT,
                        setupTransitionOutTimeline: eI
                    }), []),
                    f = e => 6 === e ? "label-small" : `heading-0${e}`;
                return ((0, y.s)(g, e), F(m, n.use_accent_color), n.text.content.length <= 1 && (0 === n.text.content.length || !n.text.content ? .[0].content)) ? (0, i.jsx)("div", {
                    ref: m,
                    ...(0, a.m)(n)
                }) : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        ref: m,
                        className: l()(ey().richText, t),
                        ...(0, a.m)(n),
                        children: [(0, ex.XX)(n.text, {
                            markResolvers: {
                                [ex.UQ]: e => (0, i.jsx)(i.Fragment, {
                                    children: e
                                }),
                                [ex.Dr]: (e, t) => {
                                    let {
                                        target: r
                                    } = t;
                                    return t.href ? .startsWith("http") && (r = "_blank"), (0, i.jsx)(ev.A, {
                                        link: {
                                            href: t.href
                                        },
                                        label: e,
                                        className: l()(ey().link, "link-underline-decoration"),
                                        target: r || void 0
                                    })
                                },
                                [ex.gL]: e => (0, i.jsx)(i.Fragment, {
                                    children: e
                                }),
                                [ex.R7]: e => (0, i.jsx)(i.Fragment, {
                                    children: e
                                })
                            },
                            nodeResolvers: {
                                [ex.q0]: (e, {
                                    level: t
                                }) => {
                                    let r = e;
                                    return e ? .[0] && "object" == typeof e[0] && (r = e[0] ? .props ? .children ? ? e[0]), (0, i.jsx)(d.A, {
                                        as: `h${t}`,
                                        className: l()(ey()[f(t)]),
                                        size: f(t),
                                        transitionInType: p ? "splitLineRotateInRichText" : "none",
                                        disableTriggerInOnScroll: !1,
                                        canTransitionIn: s,
                                        children: r
                                    })
                                },
                                [ex.Uv]: e => (0, i.jsx)(_.A, {
                                    className: ey().paragraph,
                                    as: "p",
                                    size: "body-large",
                                    transitionInType: p ? "splitCharsWordsRichText" : "none",
                                    disableTriggerInOnScroll: !1,
                                    canTransitionIn: s,
                                    children: e
                                }),
                                [ex.U]: () => (0, i.jsx)("span", {
                                    className: ey().spacer,
                                    children: (0, i.jsx)("br", {})
                                })
                            },
                            blokResolvers: {
                                heading: e => {
                                    let {
                                        display_size: t,
                                        size: r,
                                        text: n
                                    } = e;
                                    return n && t ? (0, i.jsx)(d.A, {
                                        size: t,
                                        as: r,
                                        disableTriggerInOnScroll: !1,
                                        children: n
                                    }) : null
                                }
                            },
                            defaultBlokResolver: (e, t) => {
                                let r = { ...t,
                                    component: e
                                };
                                return (0, i.jsx)(cr, {
                                    blok: r
                                }, r._uid)
                            }
                        }), r]
                    })
                })
            }
            var ek = r(26276),
                ej = r.n(ek),
                eS = r(50179),
                eN = r.n(eS);

            function eR(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function eA(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var eO = r(77059),
                eP = r.n(eO);

            function eL(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function eM(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var ez = r(29668);

            function eH({
                isVisible: e,
                className: t,
                blok: r,
                ref: n
            }) {
                let s = (0, c.useRef)(null),
                    o = n || s,
                    u = (0, T.zW)(() => ({
                        ref: o,
                        refs: {
                            elementRef: o
                        },
                        setupTransitionInTimeline: eL,
                        setupTransitionOutTimeline: eM
                    }), []);
                return (0, y.s)(u, e), F(o, r.use_accent_color), (0, i.jsxs)("div", {
                    ref: o,
                    className: l()(eP().headerHighlight, t),
                    ...(0, a.m)(r),
                    children: [(0, ex.XX)(r.title, {
                        nodeResolvers: {
                            [ex.q0]: (e, {
                                level: t
                            }) => (0, i.jsx)(d.A, {
                                as: `h${t}`,
                                className: l()(eP()[`heading-0${t}`], eP().title),
                                size: `heading-0${t}`,
                                disableTriggerInOnScroll: !1,
                                enableChineseTransitionFallback: !0,
                                children: e
                            })
                        },
                        markResolvers: {
                            [ex.lM]: e => {
                                let t = [];
                                if (Array.isArray(e)) t = e;
                                else {
                                    if ("string" != typeof e) return (0, i.jsx)(i.Fragment, {
                                        children: e
                                    });
                                    t = e.split(" ")
                                }
                                return (0, i.jsx)(i.Fragment, {
                                    children: t.map((e, r) => (0, i.jsxs)("span", {
                                        className: eP().highlight,
                                        children: [e, r !== t.length - 1 ? " " : ""]
                                    }, e))
                                })
                            }
                        }
                    }), r.button ? .[0] && (0, i.jsx)(ez.A, {
                        className: l()(eP().button),
                        link: {
                            href: r ? .button[0] ? .link ? .cached_url,
                            uuid: r ? .button[0] ? .link ? .id
                        },
                        label: r.button[0].label,
                        disableTriggerInOnScroll: !1
                    })]
                })
            }
            var eB = r(5278),
                eF = r.n(eB);

            function eE(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var eW = r(48523),
                eD = r.n(eW);
            let eU = e => {
                if (e.current) {
                    e.current.style.height = "0px";
                    let {
                        scrollHeight: t
                    } = e.current;
                    o.Ay.set(e.current, {
                        height: t
                    })
                }
            };

            function e$({
                type: e,
                maxlength: t,
                label: r,
                name: n,
                register: a,
                error: s,
                placeholder: o,
                hidden: u,
                required: d,
                Autocomplete: m,
                options: p,
                ref: g,
                ...f
            }) {
                let h, x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null);
                return (0, c.useEffect)(() => {
                    eU(v)
                }, [v]), h = new URLSearchParams(window.location.search), (0, i.jsxs)("div", {
                    ref: g || x,
                    className: l()(eD().inputField, f.className, {
                        [eD().isInvalid]: !!s,
                        [eD().hidden]: u
                    }),
                    children: [(0, i.jsxs)("div", {
                        className: l()(eD().inputContainer),
                        children: [(0, i.jsxs)(_.A, {
                            disableTriggerInOnScroll: !1,
                            as: "label",
                            htmlFor: n,
                            size: "label-small",
                            className: l()(eD().label),
                            transitionInType: "splitWordsSlideInUp",
                            children: [r, " ", d ? "*" : ""]
                        }), m ? (0, i.jsx)(m, {
                            register: a,
                            name: n,
                            menuClassName: eD().autocompleteMenu,
                            options: p,
                            index: f.index,
                            defaultProps: {
                                inputProps: {
                                    className: l()(eD().input, eD()["input-field"], "input-field"),
                                    id: n,
                                    placeholder: o,
                                    maxLength: t,
                                    spellCheck: "false",
                                    autoComplete: "off",
                                    ...a(n)
                                }
                            }
                        }) : (0, i.jsx)("textarea" === e ? "textarea" : "input", {
                            className: l()(eD().input, "input-field"),
                            ...a(n),
                            ref: t => {
                                "textarea" === e && (v.current = t), a(n).ref(t)
                            },
                            id: n,
                            type: e,
                            name: n,
                            maxLength: t,
                            placeholder: o,
                            spellCheck: "false",
                            autoComplete: "off",
                            defaultValue: h ? .get(n) || void 0,
                            required: d,
                            onChange: () => {
                                eU(v)
                            }
                        })]
                    }), (0, i.jsx)("div", {
                        className: l()(eD().errorContainer),
                        children: s ? .message && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(Z.A, {
                                className: l()(eD().icon),
                                name: "error"
                            }), (0, i.jsx)(_.A, {
                                as: "span",
                                size: "foot-note",
                                className: l()(eD().errorMessage),
                                transitionInType: "none",
                                children: (0, i.jsx)(i.Fragment, {
                                    children: s ? .message
                                })
                            })]
                        })
                    })]
                })
            }
            var eX = r(88992),
                eV = r(71090),
                eG = r(39091),
                eq = r(8145),
                eY = r.n(eq);
            let eQ = {
                submitPdfForm(e, t) {
                    let r = new URLSearchParams(t);
                    return eY().post(`/api/pardot-form/?url=${e}`, r)
                }
            };
            var eJ = r(78140),
                eZ = r(84603),
                eK = r(57553);
            let e0 = [{
                value: "Afghanistan"
            }, {
                value: "Albania"
            }, {
                value: "Algeria"
            }, {
                value: "American Samoa"
            }, {
                value: "Andorra"
            }, {
                value: "Angola"
            }, {
                value: "Anguilla"
            }, {
                value: "Antarctica"
            }, {
                value: "Antigua and Barbuda"
            }, {
                value: "Argentina"
            }, {
                value: "Armenia"
            }, {
                value: "Aruba"
            }, {
                value: "Australia"
            }, {
                value: "Austria"
            }, {
                value: "Azerbaijan"
            }, {
                value: "Bahamas"
            }, {
                value: "Bahrain"
            }, {
                value: "Bangladesh"
            }, {
                value: "Barbados"
            }, {
                value: "Belarus"
            }, {
                value: "Belgium"
            }, {
                value: "Belize"
            }, {
                value: "Benin"
            }, {
                value: "Bermuda"
            }, {
                value: "Bhutan"
            }, {
                value: "Bolivia"
            }, {
                value: "Bosnia and Herzegovina"
            }, {
                value: "Botswana"
            }, {
                value: "Brazil"
            }, {
                value: "British Indian Ocean Territory"
            }, {
                value: "British Virgin Islands"
            }, {
                value: "Brunei"
            }, {
                value: "Bulgaria"
            }, {
                value: "Burkina Faso"
            }, {
                value: "Burundi"
            }, {
                value: "Cambodia"
            }, {
                value: "Cameroon"
            }, {
                value: "Canada"
            }, {
                value: "Cape Verde"
            }, {
                value: "Cayman Islands"
            }, {
                value: "Central African Republic"
            }, {
                value: "Chad"
            }, {
                value: "Chile"
            }, {
                value: "Mainland China"
            }, {
                value: "Christmas Island"
            }, {
                value: "Cocos (Keeling) Islands"
            }, {
                value: "Colombia"
            }, {
                value: "Comoros"
            }, {
                value: "Congo"
            }, {
                value: "Cook Islands"
            }, {
                value: "Costa Rica"
            }, {
                value: "Croatia"
            }, {
                value: "Cuba"
            }, {
                value: "Cura\xe7ao",
                alias: "curacao"
            }, {
                value: "Cyprus"
            }, {
                value: "Czech Republic"
            }, {
                value: "C\xf4te d’Ivoire",
                alias: "cote d'ivoire, ivory"
            }, {
                value: "Democratic Republic of the Congo"
            }, {
                value: "Denmark"
            }, {
                value: "Djibouti"
            }, {
                value: "Dominica"
            }, {
                value: "Dominican Republic"
            }, {
                value: "Ecuador"
            }, {
                value: "Egypt"
            }, {
                value: "El Salvador"
            }, {
                value: "Equatorial Guinea"
            }, {
                value: "Eritrea"
            }, {
                value: "Estonia"
            }, {
                value: "Ethiopia"
            }, {
                value: "Falkland Islands"
            }, {
                value: "Faroe Islands"
            }, {
                value: "Fiji"
            }, {
                value: "Finland"
            }, {
                value: "France"
            }, {
                value: "French Guiana"
            }, {
                value: "French Polynesia"
            }, {
                value: "French Southern Territories"
            }, {
                value: "Gabon"
            }, {
                value: "Gambia"
            }, {
                value: "Georgia"
            }, {
                value: "Germany",
                alias: "deutschland"
            }, {
                value: "Ghana"
            }, {
                value: "Gibraltar"
            }, {
                value: "Greece"
            }, {
                value: "Greenland"
            }, {
                value: "Grenada"
            }, {
                value: "Guadeloupe"
            }, {
                value: "Guam"
            }, {
                value: "Guatemala"
            }, {
                value: "Guernsey"
            }, {
                value: "Guinea"
            }, {
                value: "Guinea-Bissau"
            }, {
                value: "Guyana"
            }, {
                value: "Haiti"
            }, {
                value: "Honduras"
            }, {
                value: "Hong Kong S.A.R., People's Republic of China"
            }, {
                value: "Hungary"
            }, {
                value: "Iceland"
            }, {
                value: "India"
            }, {
                value: "Indonesia"
            }, {
                value: "Iran"
            }, {
                value: "Iraq"
            }, {
                value: "Ireland"
            }, {
                value: "Isle of Man"
            }, {
                value: "Israel"
            }, {
                value: "Italy"
            }, {
                value: "Jamaica"
            }, {
                value: "Japan"
            }, {
                value: "Jersey"
            }, {
                value: "Jordan"
            }, {
                value: "Kazakhstan"
            }, {
                value: "Kenya"
            }, {
                value: "Kiribati"
            }, {
                value: "Kuwait"
            }, {
                value: "Kyrgyzstan"
            }, {
                value: "Laos"
            }, {
                value: "Latvia"
            }, {
                value: "Lebanon"
            }, {
                value: "Lesotho"
            }, {
                value: "Liberia"
            }, {
                value: "Libya"
            }, {
                value: "Liechtenstein"
            }, {
                value: "Lithuania"
            }, {
                value: "Luxembourg"
            }, {
                value: "Macao S.A.R., People's Republic of China"
            }, {
                value: "Macedonia"
            }, {
                value: "Madagascar"
            }, {
                value: "Malawi"
            }, {
                value: "Malaysia"
            }, {
                value: "Maldives"
            }, {
                value: "Mali"
            }, {
                value: "Malta"
            }, {
                value: "Marshall Islands"
            }, {
                value: "Martinique"
            }, {
                value: "Mauritania"
            }, {
                value: "Mauritius"
            }, {
                value: "Mayotte"
            }, {
                value: "Mexico"
            }, {
                value: "Micronesia"
            }, {
                value: "Moldova"
            }, {
                value: "Monaco"
            }, {
                value: "Mongolia"
            }, {
                value: "Montenegro"
            }, {
                value: "Montserrat"
            }, {
                value: "Morocco"
            }, {
                value: "Mozambique"
            }, {
                value: "Myanmar"
            }, {
                value: "Namibia"
            }, {
                value: "Nauru"
            }, {
                value: "Nepal"
            }, {
                value: "Netherlands",
                alias: "nl, nederlands"
            }, {
                value: "New Caledonia"
            }, {
                value: "New Zealand"
            }, {
                value: "Nicaragua"
            }, {
                value: "Niger"
            }, {
                value: "Nigeria"
            }, {
                value: "Niue"
            }, {
                value: "Norfolk Island"
            }, {
                value: "North Korea"
            }, {
                value: "Northern Mariana Islands"
            }, {
                value: "Norway"
            }, {
                value: "Oman"
            }, {
                value: "Pakistan"
            }, {
                value: "Palau"
            }, {
                value: "Palestinian Territory"
            }, {
                value: "Panama"
            }, {
                value: "Papua New Guinea"
            }, {
                value: "Paraguay"
            }, {
                value: "Peru"
            }, {
                value: "Philippines"
            }, {
                value: "Pitcairn"
            }, {
                value: "Poland"
            }, {
                value: "Portugal"
            }, {
                value: "Puerto Rico"
            }, {
                value: "Qatar"
            }, {
                value: "Romania"
            }, {
                value: "Russia"
            }, {
                value: "Rwanda"
            }, {
                value: "R\xe9union",
                alias: "reunion"
            }, {
                value: "Saint Barth\xe9lemy"
            }, {
                value: "Saint Helena"
            }, {
                value: "Saint Kitts and Nevis"
            }, {
                value: "Saint Lucia"
            }, {
                value: "Saint Pierre and Miquelon"
            }, {
                value: "Saint Vincent and the Grenadines"
            }, {
                value: "Samoa"
            }, {
                value: "San Marino"
            }, {
                value: "Sao Tome and Principe"
            }, {
                value: "Saudi Arabia"
            }, {
                value: "Senegal"
            }, {
                value: "Serbia"
            }, {
                value: "Seychelles"
            }, {
                value: "Sierra Leone"
            }, {
                value: "Singapore"
            }, {
                value: "Slovakia"
            }, {
                value: "Slovenia"
            }, {
                value: "Solomon Islands"
            }, {
                value: "Somalia"
            }, {
                value: "South Africa"
            }, {
                value: "South Korea"
            }, {
                value: "South Sudan"
            }, {
                value: "Spain"
            }, {
                value: "Sri Lanka"
            }, {
                value: "Sudan"
            }, {
                value: "Suriname"
            }, {
                value: "Svalbard and Jan Mayen"
            }, {
                value: "Swaziland"
            }, {
                value: "Sweden"
            }, {
                value: "Switzerland"
            }, {
                value: "Syria"
            }, {
                value: "Taiwan"
            }, {
                value: "Tajikistan"
            }, {
                value: "Tanzania"
            }, {
                value: "Thailand"
            }, {
                value: "Timor-Leste"
            }, {
                value: "Togo"
            }, {
                value: "Tokelau"
            }, {
                value: "Tonga"
            }, {
                value: "Trinidad and Tobago"
            }, {
                value: "Tunisia"
            }, {
                value: "Turkey"
            }, {
                value: "Turkmenistan"
            }, {
                value: "Turks and Caicos Islands"
            }, {
                value: "Tuvalu"
            }, {
                value: "U.S. Virgin Islands"
            }, {
                value: "Uganda"
            }, {
                value: "Ukraine"
            }, {
                value: "United Arab Emirates"
            }, {
                value: "United Kingdom",
                alias: "gb, uk, great britain, england, scotland, ireland, wales"
            }, {
                value: "United States",
                alias: "us, usa, america"
            }, {
                value: "United States Minor Outlying Islands"
            }, {
                value: "Uruguay"
            }, {
                value: "Uzbekistan"
            }, {
                value: "Vanuatu"
            }, {
                value: "Vatican"
            }, {
                value: "Venezuela"
            }, {
                value: "Viet Nam",
                alias: "vietnam"
            }, {
                value: "Wallis and Futuna"
            }, {
                value: "Western Sahara"
            }, {
                value: "Yemen"
            }, {
                value: "Zambia"
            }, {
                value: "Zimbabwe"
            }].map(e => ({ ...e,
                key: e.value
            }));
            var e1 = r(18257),
                e2 = r.n(e1),
                e5 = r(4917),
                e3 = r.n(e5);
            let e7 = ({
                    defaultProps: e = {},
                    ...t
                }) => {
                    let [r, n] = (0, c.useState)(""), a = e0.filter(e => e.alias ? .toLowerCase().includes(r.toLowerCase()) || e.value.toLowerCase().includes(r.toLowerCase())), {
                        lock: s,
                        unLock: o
                    } = (0, $.d)(), {
                        isOpen: u,
                        getMenuProps: d,
                        getInputProps: _,
                        getItemProps: m,
                        highlightedIndex: p,
                        selectItem: g
                    } = (0, eK.Bp)({
                        items: a,
                        itemToString: e => e ? .value || "",
                        inputValue: r,
                        onInputValueChange: ({
                            inputValue: e
                        }) => {
                            n(e || "")
                        },
                        onSelectedItemChange: ({
                            selectedItem: e
                        }) => {
                            o(), e ? (n(e.value), g(e)) : n("")
                        }
                    }), f = e3()(o, 150);
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)("div", {
                            className: l()(e2().dropdownWrapper),
                            style: {
                                width: "100%",
                                position: "relative",
                                zIndex: 1e7 - (t.index || 0)
                            },
                            children: [(0, i.jsx)("input", { ..._({ ...e.inputProps,
                                    ...t ? .register ? .(t.name || ""),
                                    onBlur : e => {
                                        a.length > 0 && r ? (n(a[0].value), g(a[0])) : (n(""), g(null)), t.register ? .(t.name || "").onBlur && t.register(t.name || "").onBlur(e), o()
                                    }
                                }),
                                className: l()(e2().dropdownInput, e.inputProps ? .className)
                            }), (0, i.jsx)("ul", { ...d({
                                    style: { ...e.menuStyle
                                    },
                                    className: l()(e2().customDropdown, t.menuClassName, u && e2().isOpen)
                                }),
                                onScroll: () => {
                                    s(), f()
                                },
                                children: u && a.map((e, t) => (0, i.jsx)("li", { ...m({
                                        item: e,
                                        index: t
                                    }),
                                    className: l()(e2().listItem),
                                    children: (0, i.jsx)(ev.A, {
                                        textVariant: "body-standard",
                                        className: l()(e2().button, {
                                            [e2().isHighlighted]: p === t
                                        }),
                                        label: e.value
                                    })
                                }, e.key))
                            })]
                        })
                    })
                },
                e4 = [{
                    value: "AMER"
                }, {
                    value: "APAC"
                }, {
                    value: "EMEA"
                }].map(e => ({ ...e,
                    key: e.value
                })),
                e9 = ({
                    defaultProps: e = {},
                    ...t
                }) => {
                    let [r, n] = (0, c.useState)(""), a = e4.filter(e => e.value.toLowerCase().includes(r.toLowerCase())), {
                        lock: s,
                        unLock: o
                    } = (0, $.d)(), {
                        isOpen: u,
                        getMenuProps: d,
                        getInputProps: _,
                        getItemProps: m,
                        highlightedIndex: p,
                        selectItem: g
                    } = (0, eK.Bp)({
                        items: a,
                        itemToString: e => e ? .value || "",
                        inputValue: r,
                        onInputValueChange: ({
                            inputValue: e
                        }) => {
                            n(e || "")
                        },
                        onSelectedItemChange: ({
                            selectedItem: e
                        }) => {
                            o(), e ? (n(e.value), g(e)) : n("")
                        }
                    }), f = e3()(o, 150);
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)("div", {
                            className: l()(e2().dropdownWrapper),
                            style: {
                                width: "100%",
                                position: "relative",
                                zIndex: 1e7 - (t.index || 0)
                            },
                            children: [(0, i.jsx)("input", { ..._({ ...e.inputProps,
                                    ...t ? .register ? .(t.name || ""),
                                    onBlur : e => {
                                        a.length > 0 && r ? (n(a[0].value), g(a[0])) : (n(""), g(null)), t.register ? .(t.name || "").onBlur && t.register(t.name || "").onBlur(e), o()
                                    }
                                }),
                                className: l()(e2().dropdownInput, e.inputProps ? .className)
                            }), (0, i.jsx)("ul", { ...d({
                                    style: { ...e.menuStyle
                                    },
                                    className: l()(e2().customDropdown, t.menuClassName, u && e2().isOpen)
                                }),
                                onScroll: () => {
                                    s(), f()
                                },
                                children: u && a.map((e, t) => (0, i.jsx)("li", { ...m({
                                        item: e,
                                        index: t
                                    }),
                                    className: l()(e2().listItem),
                                    children: (0, i.jsx)(ev.A, {
                                        textVariant: "body-standard",
                                        className: l()(e2().button, {
                                            [e2().isHighlighted]: p === t
                                        }),
                                        label: e.value
                                    })
                                }, e.key))
                            })]
                        })
                    })
                };
            var e8 = r(92238),
                e6 = r.n(e8),
                te = r(82493);

            function tt({
                style: e,
                imgSrcBack: t,
                imgSrcFront: r,
                ref: n
            }) {
                let a = (0, c.useRef)(null),
                    s = (0, c.useRef)(null),
                    l = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    setTimeout(() => {
                        a.current && o.Ay.set([a.current, s.current, l.current], {
                            height: 0,
                            width: 0
                        })
                    }, 500)
                }, []);
                let {
                    width: u
                } = (0, U.A)();
                return (0, i.jsxs)(te.A, {
                    ref: n,
                    isStatic: u < 800,
                    cursorPointer: !1,
                    style: {
                        width: "var(--width)",
                        height: "var(--height)",
                        backgroundImage: `url(${t})`,
                        backgroundSize: "contain",
                        userSelect: "none",
                        ...e
                    },
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)("div", {
                            ref: a,
                            className: e6().emptyDivForDepthEffect
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)("div", {
                            ref: s,
                            className: e6().emptyDivForDepthEffect
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)("div", {
                            ref: l,
                            className: e6().emptyDivForDepthEffect
                        })
                    }), (0, i.jsx)("div", {
                        children: (0, i.jsx)("img", {
                            alt: "front of the card",
                            src: r,
                            style: {
                                top: 0,
                                left: 0,
                                width: "var(--width)",
                                height: "var(--height)"
                            }
                        })
                    })]
                })
            }
            let tr = ({
                defaultProps: e = {},
                options: t,
                ...r
            }) => {
                let [n, a] = (0, c.useState)(""), s = t.filter(e => e.value.toLowerCase().includes(n.toLowerCase())), {
                    lock: o,
                    unLock: u
                } = (0, $.d)(), {
                    isOpen: d,
                    getMenuProps: _,
                    getInputProps: m,
                    getItemProps: p,
                    highlightedIndex: g,
                    selectItem: f
                } = (0, eK.Bp)({
                    items: s,
                    itemToString: e => e ? .value || "",
                    inputValue: n,
                    onInputValueChange: ({
                        inputValue: e
                    }) => {
                        a(e || "")
                    },
                    onSelectedItemChange: ({
                        selectedItem: e
                    }) => {
                        u(), e ? (a(e.value), f(e)) : a("")
                    }
                }), h = e3()(u, 150);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: l()(e2().dropdownWrapper),
                        style: {
                            width: "100%",
                            position: "relative",
                            zIndex: 1e7 - (r.index || 0)
                        },
                        children: [(0, i.jsx)("input", { ...m({ ...e.inputProps,
                                ...r ? .register ? .(r.name || ""),
                                onBlur : e => {
                                    s.length > 0 && n ? (a(s[0].value), f(s[0])) : (a(""), f(null)), r.register ? .(r.name || "").onBlur && r.register(r.name || "").onBlur(e), u()
                                }
                            }),
                            className: l()(e2().dropdownInput, e.inputProps ? .className)
                        }), (0, i.jsx)("ul", { ..._({
                                style: { ...e.menuStyle
                                },
                                className: l()(e2().customDropdown, r.menuClassName, d && e2().isOpen)
                            }),
                            onScroll: () => {
                                o(), h()
                            },
                            children: d && s.map((e, t) => (0, i.jsx)("li", { ...p({
                                    item: e,
                                    index: t
                                }),
                                className: l()(e2().listItem),
                                children: (0, i.jsx)(ev.A, {
                                    textVariant: "body-standard",
                                    className: l()(e2().button, {
                                        [e2().isHighlighted]: g === t
                                    }),
                                    label: e.value
                                })
                            }, e.key))
                        })]
                    })
                })
            };
            var tn = ((n = {})[n.Default = 0] = "Default", n[n.SubmitSuccess = 1] = "SubmitSuccess", n[n.SubmitError = 2] = "SubmitError", n);

            function ti({
                blok: e,
                parentHandleSubmit: t,
                ref: r,
                ...n
            }) {
                let s = (0, c.useRef)(null),
                    o = (0, eJ.o)(),
                    u = (0, c.useRef)(!1),
                    [m, p] = (0, c.useState)(0),
                    g = (0, c.useRef)(null),
                    {
                        width: f
                    } = (0, U.A)(),
                    {
                        isDarkTheme: h
                    } = (0, B.u2)(),
                    x = {};
                e.pardot_input_fields ? .forEach(e => {
                    let t = eG.Yj();
                    e.required && (t = t.required(`${e.label} is required`)), "email" === e.type && (t = t.email("Email is invalid")), x[e.pardot_key] = t
                }), e.pardot_checkboxes ? .forEach(e => {
                    e.required && (x[e.id] = eG.lc().oneOf([!0], e.error_message))
                });
                let v = eG.Ik().shape(x);
                (0, T.mt)({
                    scroll: {
                        trigger: s,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: s
                        },
                        setupTransitionInTimeline: eE
                    })
                });
                let b = (0, $.d)(),
                    y = {
                        resolver: (0, eV.t)(v)
                    },
                    {
                        register: I,
                        handleSubmit: C,
                        formState: w
                    } = (0, eX.mN)(y),
                    {
                        errors: k
                    } = w;
                (0, eZ.A)(() => {
                    if (ej().refresh(), t) b.scrollTo(0, 0, 600);
                    else {
                        let e = s.current ? .getBoundingClientRect(),
                            t = b.scrollStatusRef.current ? .offset.y || 0;
                        b.scrollTo(0, (e ? .top || 0) + t - 200, 600)
                    }
                }, [m]);
                let j = (0, c.useCallback)(async r => {
                        if (!u.current) {
                            u.current = !0;
                            try {
                                (await eQ.submitPdfForm(e.pardot_id, r)).data.success ? (e.linkedin_tracking_id && window.lintrk("track", {
                                    conversion_id: e.linkedin_tracking_id
                                }), p(1), t ? .(1)) : (p(2), t ? .(2))
                            } catch ({
                                error: e
                            }) {
                                p(2), t ? .(2)
                            }
                            u.current = !1
                        }
                    }, [e.pardot_id, e.linkedin_tracking_id, t]),
                    S = h && !e.use_accent_color || !h && e.use_accent_color,
                    N = !h && !e.use_accent_color || h && e.use_accent_color;
                return (0, c.useImperativeHandle)(r, () => ({
                    formLayoutState: m
                }), [m]), (0, i.jsx)("div", {
                    ref: s,
                    className: l()(eF().pardotPdfForm, n.className, {
                        [eF().darkTheme]: S,
                        [eF().lightTheme]: N
                    }),
                    ...(0, a.m)(e),
                    "data-scroll-to": "download-pdf",
                    style: {
                        "--height": `min(600px, ${(f-40)*4/3}px)`,
                        "--width": `min(450px, ${f-40}px)`
                    },
                    children: (0, i.jsx)("div", {
                        className: l()(eF().container, "grid-gutter max-content-width"),
                        children: (0, i.jsxs)("form", {
                            onSubmit: C(j),
                            className: l()(eF().form),
                            children: [(0, i.jsxs)("div", {
                                className: l()(eF().header),
                                children: [0 === m && (0, i.jsxs)(i.Fragment, {
                                    children: [e.imageFront ? .filename && (0, i.jsx)(tt, {
                                        imgSrcBack: e.imageBack ? .filename,
                                        imgSrcFront: e.imageFront ? .filename,
                                        width: "450px",
                                        height: "600px",
                                        style: {
                                            margin: "auto",
                                            marginBottom: 80
                                        }
                                    }), (0, i.jsx)(d.A, {
                                        transitionInType: "splitWordsSlideInUp",
                                        className: l()(eF().title),
                                        as: "h3",
                                        size: "heading-03",
                                        disableTriggerInOnScroll: !1,
                                        children: e.title
                                    }), (0, ex.XX)(e.description, {
                                        nodeResolvers: {
                                            [ex.Uv]: e => (0, i.jsx)(_.A, {
                                                transitionInType: "splitWordsSlideInUp",
                                                className: l()(eF().description),
                                                as: "p",
                                                size: "body-standard",
                                                disableTriggerInOnScroll: !1,
                                                children: e
                                            })
                                        }
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: eF().center,
                                    children: [1 === m && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(d.A, {
                                            transitionInType: "splitWordsSlideInUp",
                                            className: l()(eF().title),
                                            as: "h3",
                                            size: "heading-03",
                                            disableTriggerInOnScroll: !1,
                                            children: e.success_title
                                        }), (0, ex.XX)(e.success_description, {
                                            nodeResolvers: {
                                                [ex.Uv]: e => (0, i.jsx)(_.A, {
                                                    transitionInType: "splitWordsSlideInUp",
                                                    className: l()(eF().description),
                                                    as: "p",
                                                    size: "body-standard",
                                                    disableTriggerInOnScroll: !1,
                                                    children: e
                                                })
                                            }
                                        })]
                                    }), 2 === m && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(d.A, {
                                            transitionInType: "splitWordsSlideInUp",
                                            className: l()(eF().title),
                                            as: "h3",
                                            size: "heading-03",
                                            disableTriggerInOnScroll: !1,
                                            children: "Apologies"
                                        }), (0, i.jsx)(_.A, {
                                            transitionInType: "splitWordsSlideInUp",
                                            className: l()(eF().description),
                                            as: "p",
                                            size: "body-standard",
                                            disableTriggerInOnScroll: !1,
                                            children: "Something went wrong, please try again later."
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: eF().center,
                                children: 0 === m && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsxs)("fieldset", {
                                        className: l()(eF().fieldset),
                                        children: [e.pardot_input_fields ? .map((e, t) => {
                                            let r;
                                            return "country" === e.type && (r = e7), "region" === e.type && (r = e9), (e.dropdown_options ? .length || 0) > 0 && (r = tr), (0, i.jsx)(e$, {
                                                register: I,
                                                error: k[e.pardot_key],
                                                className: l()(eF().inputField),
                                                type: "country" === e.type || "region" === e.type ? "text" : e.type || "text",
                                                name: e.pardot_key,
                                                label: e.label,
                                                hidden: e.hidden,
                                                placeholder: e.placeholder,
                                                required: e.required,
                                                options: e.dropdown_options,
                                                index: t,
                                                Autocomplete: r
                                            }, e.pardot_key)
                                        }), e.pardot_checkboxes ? .map(e => (0, i.jsxs)("div", {
                                            className: l()(eF().checkboxContainer, eF().inputContainer),
                                            children: [(0, i.jsx)("input", {
                                                type: "checkbox",
                                                id: e.id,
                                                ...I(e.id)
                                            }), (0, i.jsx)("div", {
                                                className: eF().labelContainer,
                                                children: (0, ex.XX)(e.label, {
                                                    nodeResolvers: {
                                                        [ex.Uv]: t => (0, i.jsxs)(_.A, {
                                                            as: "label",
                                                            size: "body-standard",
                                                            transitionInType: "none",
                                                            htmlFor: e.id,
                                                            children: [t, " ", e.required ? "*" : ""]
                                                        })
                                                    }
                                                })
                                            }), k ? .[e.id] ? .message && (0, i.jsxs)("div", {
                                                className: l()(eF().errorContainer),
                                                children: [(0, i.jsx)(Z.A, {
                                                    className: l()(eF().icon),
                                                    name: "error"
                                                }), (0, i.jsx)(_.A, {
                                                    as: "span",
                                                    size: "foot-note",
                                                    className: l()(eF().errorMessage),
                                                    transitionInType: "none",
                                                    children: (0, i.jsx)(i.Fragment, {
                                                        children: k[e.id] ? .message
                                                    })
                                                })]
                                            })]
                                        }, e.id))]
                                    }), (0, i.jsx)("div", {
                                        className: l()(eF().submitHolder),
                                        children: (0, i.jsx)(ez.A, {
                                            ref: g,
                                            className: l()(eF().button),
                                            label: e.button_label || o.globalSettings.form_submit,
                                            type: "submit",
                                            disableTriggerInOnScroll: !1
                                        })
                                    }), (0, ex.XX)(e.disclaimer, {
                                        nodeResolvers: {
                                            [ex.Uv]: e => (0, i.jsx)(_.A, {
                                                transitionInType: "none",
                                                className: l()(eF().disclaimer),
                                                as: "p",
                                                size: "foot-note",
                                                disableTriggerInOnScroll: !1,
                                                children: e
                                            })
                                        }
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            var ta = r(36096),
                ts = r(68655),
                tl = r.n(ts);

            function to(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function tc({
                blok: e,
                parentHandleSubmit: t,
                ref: r,
                ...n
            }) {
                let s = (0, c.useRef)(null),
                    o = (0, eJ.o)(),
                    u = (0, c.useRef)(!1),
                    [m, p] = (0, c.useState)(0),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    {
                        isDarkTheme: h
                    } = (0, B.u2)(),
                    x = {};
                e.input_fields ? .forEach(e => {
                    let t = eG.Yj();
                    e.required && (t = t.required(`${e.label} is required`)), "email" === e.type && (t = t.email("Email is invalid")), x[e.id] = t
                }), e.checkboxes ? .forEach(e => {
                    e.required && (x[e.id] = eG.lc().oneOf([!0], e.error_message))
                });
                let v = eG.Ik().shape(x);
                (0, T.mt)({
                    scroll: {
                        trigger: s,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: s
                        },
                        setupTransitionInTimeline: to
                    })
                });
                let b = (0, $.d)(),
                    y = {
                        resolver: (0, eV.t)(v)
                    },
                    {
                        register: I,
                        handleSubmit: C,
                        formState: w
                    } = (0, eX.mN)(y),
                    {
                        errors: k
                    } = w;
                (0, eZ.A)(() => {
                    if (ej().refresh(), t) b.scrollTo(0, 0, 600);
                    else {
                        let e = s.current ? .getBoundingClientRect(),
                            t = b.scrollStatusRef.current ? .offset.y || 0;
                        b.scrollTo(0, (e ? .top || 0) + t - 200, 600)
                    }
                }, [m]);
                let j = (0, c.useCallback)(async () => {
                    if (!u.current) {
                        u.current = !0;
                        try {
                            await ta.Ay.sendForm("service_zd2bjm6", "template_4xu2dsd", f.current || "", "PDOITsFO5QR77-P_J").then(e => {
                                console.log("SUCCESS!", e.status, e.text)
                            }, e => {
                                console.log("FAILED...", e)
                            }), p(1), t ? .(1)
                        } catch (e) {
                            p(2), t ? .(2)
                        } finally {
                            u.current = !1
                        }
                    }
                }, [t]);
                (0, c.useImperativeHandle)(r, () => ({
                    formLayoutState: m
                }), [m]);
                let S = h && !e.use_accent_color || !h && e.use_accent_color,
                    N = !h && !e.use_accent_color || h && e.use_accent_color;
                return (0, i.jsx)("div", {
                    ref: s,
                    className: l()(tl().emailForm, n.className, {
                        [tl().darkTheme]: S,
                        [tl().lightTheme]: N
                    }),
                    ...(0, a.m)(e),
                    "data-scroll-to": "download-pdf",
                    children: (0, i.jsx)("div", {
                        className: l()(tl().container, "grid-gutter max-content-width"),
                        children: (0, i.jsxs)("form", {
                            onSubmit: C(j),
                            className: l()(tl().form),
                            ref: f,
                            children: [(0, i.jsxs)("div", {
                                className: l()(tl().header),
                                children: [0 === m && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(d.A, {
                                        transitionInType: "splitWordsSlideInUp",
                                        className: l()(tl().title),
                                        as: "h3",
                                        size: "heading-03",
                                        disableTriggerInOnScroll: !1,
                                        children: e.title
                                    }), (0, ex.XX)(e.description, {
                                        nodeResolvers: {
                                            [ex.Uv]: e => (0, i.jsx)(_.A, {
                                                transitionInType: "splitWordsSlideInUp",
                                                className: l()(tl().description),
                                                as: "p",
                                                size: "body-large",
                                                disableTriggerInOnScroll: !1,
                                                children: e
                                            })
                                        }
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: tl().center,
                                    children: (1 === m || 2 === m) && (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsxs)(d.A, {
                                            transitionInType: "splitWordsSlideInUp",
                                            className: l()(tl().title),
                                            as: "h3",
                                            size: "heading-03",
                                            disableTriggerInOnScroll: !1,
                                            children: [1 === m && e.success_title, 2 === m && (e.error_title || "Apologies")]
                                        }), (0, ex.XX)(1 === m && e.success_description || 2 === m && (e.error_description || "Something went wrong, please try again later."), {
                                            nodeResolvers: {
                                                [ex.Uv]: e => (0, i.jsx)(_.A, {
                                                    transitionInType: "splitWordsSlideInUp",
                                                    className: l()(tl().description),
                                                    as: "p",
                                                    size: "body-standard",
                                                    disableTriggerInOnScroll: !1,
                                                    children: e
                                                })
                                            }
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: tl().center,
                                children: 0 === m && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsxs)("fieldset", {
                                        className: l()(tl().fieldset),
                                        children: [(0, i.jsx)("input", {
                                            name: "url",
                                            defaultValue: window.location.href,
                                            hidden: !0
                                        }), (0, i.jsx)("input", {
                                            name: "email_to",
                                            defaultValue: e.email_to,
                                            hidden: !0
                                        }), e.input_fields ? .map(e => {
                                            let t;
                                            return "country" === e.type && (t = e7), "region" === e.type && (t = e9), (0, i.jsx)(e$, {
                                                register: I,
                                                error: k[e.id],
                                                className: l()(tl().inputField),
                                                type: "country" === e.type || "region" === e.type ? "text" : e.type || "text",
                                                name: e.id,
                                                label: e.label,
                                                hidden: e.hidden,
                                                placeholder: e.placeholder,
                                                required: e.required,
                                                Autocomplete: t
                                            }, e.id)
                                        }), e.checkboxes ? .map(e => (0, i.jsxs)("div", {
                                            className: l()(tl().checkboxContainer, tl().inputContainer),
                                            children: [(0, i.jsx)("input", {
                                                type: "checkbox",
                                                id: e.id,
                                                ...I(e.id)
                                            }), (0, ex.XX)(e.label, {
                                                nodeResolvers: {
                                                    [ex.Uv]: t => (0, i.jsxs)(_.A, {
                                                        as: "label",
                                                        size: "body-standard",
                                                        transitionInType: "none",
                                                        htmlFor: e.id,
                                                        children: [t, " ", e.required ? "*" : ""]
                                                    })
                                                }
                                            }), k ? .[e.id] ? .message && (0, i.jsxs)("div", {
                                                className: l()(tl().errorContainer),
                                                children: [(0, i.jsx)(Z.A, {
                                                    className: l()(tl().icon),
                                                    name: "error"
                                                }), (0, i.jsx)(_.A, {
                                                    as: "span",
                                                    size: "foot-note",
                                                    className: l()(tl().errorMessage),
                                                    transitionInType: "none",
                                                    children: (0, i.jsx)(i.Fragment, {
                                                        children: k[e.id] ? .message
                                                    })
                                                })]
                                            })]
                                        }, e.id))]
                                    }), (0, i.jsx)("div", {
                                        className: l()(tl().submitHolder),
                                        children: (0, i.jsx)(ez.A, {
                                            ref: g,
                                            className: l()(tl().button),
                                            label: e.button_label || o.globalSettings.form_submit,
                                            type: "submit",
                                            disableTriggerInOnScroll: !1
                                        })
                                    }), (0, ex.XX)(e.disclaimer, {
                                        nodeResolvers: {
                                            [ex.Uv]: e => (0, i.jsx)(_.A, {
                                                transitionInType: "none",
                                                className: l()(tl().disclaimer),
                                                as: "p",
                                                size: "foot-note",
                                                disableTriggerInOnScroll: !1,
                                                children: e
                                            })
                                        }
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            var tu = r(45105),
                td = r.n(tu),
                t_ = r(89099),
                tm = r(65364),
                tp = r(16832),
                tg = r.n(tp);

            function tf(e, {
                elementRef: t
            }) {
                t ? .current && e.fromTo(t.current, {}, {})
            }

            function th(e, {
                elementRef: t
            }) {
                t ? .current && e.add((0, S._)(t.current))
            }

            function tx(e, {
                backgroundRef: t,
                iconRef: r
            }) {
                t ? .current && (e.set(t.current, {
                    opacity: 1
                }), e.fromTo(t.current, {
                    scaleY: 0
                }, {
                    scaleY: 1,
                    duration: .4,
                    ease: "Expo.easeOut"
                })), r ? .current && e.fromTo(r.current, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: .4,
                    ease: "Expo.easeOut"
                }, "<")
            }

            function tv(e, {
                backgroundRef: t,
                iconRef: r
            }) {
                t ? .current && e.to(t.current, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    scaleY: 0,
                    opacity: 0
                }), r ? .current && e.to(r.current, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    opacity: 0
                }, "<")
            }
            var tb = r(48230),
                ty = r.n(tb);
            let tT = ({
                item: e
            }) => {
                let t = (0, c.useRef)(null),
                    r = (0, c.useRef)(null),
                    n = (0, T.zW)(() => ({
                        refs: {
                            backgroundRef: t,
                            iconRef: r
                        },
                        setupTransitionInTimeline: tx,
                        setupTransitionOutTimeline: tv
                    }), []);
                return (0, i.jsxs)(ty(), {
                    href: e.link.cached_url || e.link.url,
                    target: e.link.target,
                    className: tg().item,
                    onMouseEnter: () => n.transitionIn(),
                    onMouseLeave: () => n.transitionOut(),
                    children: [(0, i.jsx)("div", {
                        ref: t,
                        className: l()(tg().background, "abs-fill")
                    }), (0, i.jsx)(d.A, {
                        transitionInType: "splitWordsSlideInUp",
                        className: l()(tg().title),
                        as: "h4",
                        size: "heading-04",
                        disableTriggerInOnScroll: !1,
                        children: e.title
                    }), (0, i.jsx)(Z.A, {
                        ref: r,
                        className: tg().arrowRight,
                        name: "arrow-right"
                    })]
                })
            };
            var tI = r(8889),
                tC = r.n(tI);

            function tw(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function tk(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var tj = r(47),
                tS = r.n(tj);

            function tN(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function tR(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var tA = r(86307),
                tO = r(28788),
                tP = r(9927),
                tL = r.n(tP);

            function tM(e, {
                emailTitleRef: t,
                emailAddressRef: r
            }) {
                let n = (0, P.xy)(t),
                    i = (0, P.xy)(r);
                n && e.add(n.getTimeline("in"), 0), i && e.add(i.getTimeline("in"), .05)
            }

            function tz(e, {
                emailTitleRef: t,
                emailAddressRef: r
            }) {
                let n = (0, P.xy)(t),
                    i = (0, P.xy)(r);
                n && e.add(n.getTimeline("out"), 0), i && e.add(i.getTimeline("out"), 0)
            }
            var tH = r(17682),
                tB = r.n(tH);
            let tF = ({
                email: e
            }) => {
                let t = (0, c.useRef)(null),
                    r = (0, c.useRef)(null),
                    n = (0, c.useRef)(null);
                return (0, T.mt)({
                    scroll: {
                        trigger: n
                    },
                    setupOptions: () => ({
                        ref: n,
                        refs: {
                            emailTitleRef: t,
                            emailAddressRef: r
                        },
                        setupTransitionInTimeline: tM,
                        setupTransitionOutTimeline: tz
                    })
                }), (0, i.jsxs)("li", {
                    className: tB().emailContainer,
                    ref: n,
                    children: [(0, i.jsx)(d.A, {
                        as: "span",
                        size: "label-small",
                        disableTriggerInOnScroll: !0,
                        transitionInType: "splitWordsSlideInUp",
                        transitionOutType: "fadeOut",
                        className: tB().emailTitle,
                        ref: t,
                        children: e.title
                    }), (0, i.jsx)(_.A, {
                        as: "p",
                        size: "body-standard",
                        disableTriggerInOnScroll: !0,
                        transitionInType: "splitLineRotateIn",
                        transitionOutType: "fadeOut",
                        className: tB().emailAddress,
                        ref: r,
                        children: (0, i.jsx)("a", {
                            href: `mailto:${e.email_address}`,
                            children: e.email_address
                        })
                    })]
                })
            };

            function tE({
                className: e,
                details: t,
                ref: r
            }) {
                let n = (0, c.useRef)(null),
                    a = (0, c.useRef)(null),
                    s = (0, c.useRef)(null);
                return (0, i.jsxs)("div", {
                    ref: r || n,
                    className: l()(tL().personContactInfo, e),
                    children: [(0, i.jsx)("div", {
                        className: tL().locationContainer,
                        children: t.location ? .story ? .name && (0, i.jsxs)(i.Fragment, {
                            children: [t.label && (0, i.jsx)(d.A, {
                                as: "span",
                                size: "label-small",
                                disableTriggerInOnScroll: !1,
                                transitionInType: "slideUpFadeIn",
                                transitionOutType: "fadeOut",
                                className: tL().label,
                                ref: a,
                                children: t.label
                            }), (0, i.jsx)(_.A, {
                                as: "p",
                                size: "body-standard",
                                disableTriggerInOnScroll: !1,
                                transitionInType: "splitLineRotateIn",
                                transitionOutType: "fadeOut",
                                ref: s,
                                className: tL().linkContainer,
                                children: (0, i.jsx)(ty(), {
                                    href: t.location.url || t.location.cached_url,
                                    passHref: !0,
                                    target: t.location.target,
                                    rel: "noreferrer",
                                    children: t.location.story.name
                                })
                            })]
                        })
                    }), t.emails && t.emails.length > 0 && (0, i.jsx)("ul", {
                        children: t.emails.map(e => (0, i.jsx)(tF, {
                            email: e
                        }, e._uid))
                    })]
                })
            }

            function tW({
                isVisible: e,
                className: t,
                blok: r,
                ref: n
            }) {
                let s = (0, c.useRef)(null),
                    o = n || s,
                    {
                        imageModalRef: u
                    } = (0, c.useContext)(tA.Z),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, T.zW)(() => ({
                        ref: o,
                        refs: {
                            elementRef: o
                        },
                        setupTransitionInTimeline: tN,
                        setupTransitionOutTimeline: tR
                    }), []);
                return (0, y.s)(h, e), F(o, r.use_accent_color), (0, i.jsx)("div", {
                    ref: o,
                    className: l()(tS().personDetails, t),
                    ...(0, a.m)(r),
                    children: (0, i.jsxs)("div", {
                        className: l()(tS().flexContainer),
                        children: [(0, i.jsxs)("div", {
                            className: l()(tS().leftContainer),
                            children: [(0, i.jsx)("div", {
                                className: tS().imageContainer,
                                children: r.portrait ? .filename && (0, i.jsx)(tO.A, {
                                    src: r.portrait.filename,
                                    srcDesktop: r.portrait.filename,
                                    alt: r.portrait.alt
                                })
                            }), (0, i.jsxs)("div", {
                                children: [r.name && (0, i.jsx)(d.A, {
                                    ref: m,
                                    as: "h5",
                                    size: "heading-05",
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "slideUpFadeIn",
                                    transitionOutType: "fadeOut",
                                    className: tS().name,
                                    children: r.name
                                }), r.pronouns && (0, i.jsx)(_.A, {
                                    ref: p,
                                    as: "p",
                                    className: tS().pronouns,
                                    size: "body-standard",
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "slideUpFadeIn",
                                    transitionOutType: "fadeOut",
                                    children: r.pronouns
                                })]
                            }), (0, i.jsx)("div", {
                                className: l()(tS().leftPersonsContainer),
                                children: (0, i.jsxs)("div", {
                                    children: [r.job_title && (0, i.jsxs)("div", {
                                        className: tS().functionContainer,
                                        children: [(0, i.jsx)(d.A, {
                                            as: "span",
                                            size: "label-small",
                                            disableTriggerInOnScroll: !1,
                                            transitionInType: "slideUpFadeIn",
                                            transitionOutType: "fadeOut",
                                            className: tS().label,
                                            ref: g,
                                            children: r.label_function
                                        }), (0, i.jsx)(_.A, {
                                            ref: f,
                                            as: "p",
                                            size: "body-standard",
                                            disableTriggerInOnScroll: !1,
                                            transitionInType: "splitLineRotateIn",
                                            transitionOutType: "fadeOut",
                                            children: r.job_title
                                        })]
                                    }), r.contact ? .[0] && (0, i.jsx)(tE, {
                                        details: r.contact[0]
                                    })]
                                })
                            }), r.socials_links ? .length > 0 && (0, i.jsxs)("div", {
                                className: tS().socialLinksContainer,
                                children: [(0, i.jsx)(d.A, {
                                    as: "h6",
                                    size: "label-small",
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "slideUpFadeIn",
                                    transitionOutType: "fadeOut",
                                    className: tS().socialsTitle,
                                    children: r.socials_title
                                }), r.socials_links.map(e => "image_link" === e.component ? (0, i.jsx)(ev.A, {
                                    textVariant: "body-standard",
                                    className: l()(tS().social),
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "splitLineRotateIn",
                                    label: e.title,
                                    onClick: () => u ? .current ? .open({
                                        image: e ? .image,
                                        title: e.title
                                    })
                                }, e._uid) : (0, i.jsx)(ev.A, {
                                    textVariant: "body-standard",
                                    className: l()(tS().social),
                                    link: {
                                        href: e ? .link.url || e ? .link.cached_url
                                    },
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "splitLineRotateIn",
                                    label: e.title,
                                    target: e ? .link.target
                                }, e._uid))]
                            })]
                        }), (0, i.jsx)("div", {
                            className: tS().textContainer,
                            children: (0, ex.XX)(r.description, {
                                nodeResolvers: {
                                    [ex.Uv]: e => (0, i.jsx)(_.A, {
                                        className: tS().description,
                                        as: "p",
                                        size: "body-large",
                                        transitionInType: "splitCharsWordsRichText",
                                        disableTriggerInOnScroll: !1,
                                        children: e
                                    })
                                },
                                markResolvers: {
                                    [ex.Dr]: (e, t) => "story" === t.linktype ? (0, i.jsx)(ty(), {
                                        href: `${t.href}#${t.anchor}`,
                                        passHref: !0,
                                        children: e
                                    }) : (0, i.jsx)("a", { ...t,
                                        children: e
                                    })
                                }
                            })
                        })]
                    })
                })
            }
            var tD = r(46717),
                tU = r.n(tD);

            function t$(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var tX = r(6950),
                tV = r(65364),
                tG = r(23181),
                tq = r.n(tG),
                tY = r(11428),
                tQ = r.n(tY);

            function tJ(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function tZ(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var tK = r(18419),
                t0 = r.n(tK);

            function t1(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var t2 = r(90572),
                t5 = r(35215),
                t3 = r.n(t5);

            function t7(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var t4 = r(93862),
                t9 = r.n(t4);

            function t8(e, {
                lineRef: t,
                numberRef: r,
                descriptionRef: n,
                titleRef: i
            }) {
                let a = (0, P.xy)(r),
                    s = (0, P.xy)(i),
                    l = (0, P.xy)(n);
                t ? .current && e.fromTo(t.current, {
                    scaleX: 0,
                    transformOrigin: "left center"
                }, {
                    duration: .5,
                    ease: "Quad.easeInOut",
                    scaleX: 1
                }), a && e.add(a.getTimeline("in"), 0), s && e.add(s.getTimeline("in"), 0), l && e.add(l.getTimeline("in"), .1)
            }

            function t6({
                blok: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(null),
                    s = t || n,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null);
                return (0, T.mt)({
                    scroll: {
                        trigger: s,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: s,
                            lineRef: o,
                            numberRef: u,
                            titleRef: m,
                            descriptionRef: p
                        },
                        setupTransitionInTimeline: t8
                    })
                }), (0, i.jsxs)("div", {
                    ref: s,
                    className: l()(t9().descriptionListItem, r.className, "grid-gutter"),
                    ...(0, a.m)(e),
                    children: [(0, i.jsx)("span", {
                        ref: o,
                        className: l()(t9().line)
                    }), (0, i.jsx)(d.A, {
                        ref: u,
                        disableTriggerInOnScroll: !0,
                        as: "span",
                        size: "heading-04",
                        className: l()(t9().number),
                        children: `0${r.index+1}`.slice(-2)
                    }), e.title && (0, i.jsx)(d.A, {
                        className: t9().itemTitle,
                        as: "h3",
                        size: "heading-04",
                        ref: m,
                        children: e.title
                    }), (0, i.jsx)(_.A, {
                        ref: p,
                        className: l()(t9().description),
                        as: "p",
                        size: "body-large",
                        disableTriggerInOnScroll: !0,
                        children: e.description
                    })]
                })
            }
            var re = r(17011),
                rt = r.n(re);

            function rr(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var rn = r(46264),
                ri = r.n(rn);

            function ra(e, {
                elementRef: t,
                lineRef: r,
                headingRef: n
            }) {
                let i = (0, P.xy)(n);
                t ? .current && e.fromTo(t.current, {
                    yPercent: 50
                }, {
                    yPercent: 0,
                    clearProps: "yPercent",
                    ease: "Power2.easeOut",
                    duration: .5
                }), r ? .current && e.fromTo(r.current, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    clearProps: "scaleX",
                    duration: .4,
                    ease: "Quad.easeInOut"
                }, .1), i && e.add(i.getTimeline("in"), 0)
            }

            function rs({
                transitionInDelay: e,
                blok: t,
                ref: r,
                ...n
            }) {
                let s = (0, c.useRef)(null),
                    o = r || s,
                    u = (0, c.useRef)(null),
                    _ = (0, c.useRef)(null);
                return (0, eC.qJ)(!1), (0, T.mt)({
                    scroll: {
                        transitionInDelay: e,
                        trigger: o,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: o,
                            lineRef: u,
                            headingRef: _
                        },
                        setupTransitionInTimeline: ra
                    })
                }), (0, i.jsxs)("li", {
                    ref: o,
                    className: l()(ri().gridListItem, n.className),
                    ...(0, a.m)(t),
                    children: [(0, i.jsx)("span", {
                        ref: u,
                        className: l()(ri().line)
                    }), (0, i.jsx)(d.A, {
                        ref: _,
                        as: "p",
                        size: "heading-05",
                        className: l()(ri().description),
                        transitionInType: "splitLineRotateIn",
                        disableTriggerInOnScroll: !0,
                        children: (0, ex.XX)(t.title, {
                            nodeResolvers: {
                                [ex.Uv]: e => (0, i.jsx)(i.Fragment, {
                                    children: e
                                })
                            }
                        })
                    })]
                })
            }
            var rl = r(40138),
                ro = r.n(rl);

            function rc(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var ru = r(95510),
                rd = r.n(ru);

            function r_(e, {
                headingRef: t,
                descriptionRef: r,
                lineRef: n,
                iconRef: i
            }) {
                let a = (0, P.xy)(t),
                    s = (0, P.xy)(r);
                n ? .current && e.fromTo(n.current, {
                    scaleX: 0,
                    transformOrigin: "left center"
                }, {
                    duration: .5,
                    ease: "Quad.easeInOut",
                    scaleX: 1
                }), i ? .current && e.fromTo(i.current, {
                    opacity: 0,
                    scale: .4
                }, {
                    scale: 1,
                    opacity: 1,
                    ease: "Quad.easeInOut",
                    clearProps: "scale, opacity",
                    duration: .4
                }, .3), a && e.add(a.getTimeline("in"), 0), s && e.add(s.getTimeline("in"), .05)
            }

            function rm(e, t, r, n = !1) {
                o.Ay.to(e.current, {
                    height: t ? e.current ? .scrollHeight : 0,
                    duration: .6 * !n,
                    ease: "Quad.easeInOut",
                    clearProps: t ? "height" : "",
                    onComplete: () => {
                        r && r()
                    }
                })
            }

            function rp(e, {
                headingRef: t
            }) {
                t ? .current && e.fromTo(t.current, {
                    x: 0
                }, {
                    duration: .4,
                    ease: "Power2.easeOut",
                    x: 20
                }, 0)
            }

            function rg(e, {
                headingRef: t
            }) {
                t ? .current && e.to(t.current, {
                    duration: .4,
                    ease: "Power2.easeOut",
                    x: 0
                }, 0)
            }
            var rf = r(27834),
                rh = r(84700);

            function rx({
                isOpen: e,
                onClick: t,
                index: r,
                blok: n,
                ref: s,
                ...u
            }) {
                let m = (0, c.useRef)(null),
                    p = s || m,
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, c.useRef)(null),
                    y = (0, eC.qJ)(!1),
                    I = (0, c.useRef)(null),
                    C = (0, eJ.o)();
                (0, T.mt)({
                    scroll: {
                        trigger: p,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: p,
                            headingRef: v,
                            descriptionRef: b,
                            lineRef: I,
                            iconRef: h
                        },
                        setupTransitionInTimeline: r_
                    })
                });
                let {
                    start: w
                } = (0, rh.Z)(() => {
                    ej().refresh()
                }, 0, !1);
                (0, eZ.A)(() => {
                    g.current && rm(g, e, w, !1)
                }, [e]), (0, rf.A)(() => {
                    !e && g.current && rm(g, e, w, !0)
                });
                let k = (0, T.zW)(() => ({
                    refs: {
                        headingRef: v,
                        descriptionRef: b
                    },
                    setupTransitionInTimeline: rp,
                    setupTransitionOutTimeline: rg
                }), []);
                (0, eZ.A)(() => {
                    var t;
                    e && k.transitionOut(), (t = {
                        iconRef: h,
                        verticalLineRef: x
                    }).iconRef && (o.Ay.to(t.iconRef.current, {
                        rotation: 180 * !!e,
                        duration: .4,
                        ease: "Power2.easeOut"
                    }), o.Ay.to(t.verticalLineRef.current, {
                        rotation: 90 * !!e,
                        duration: .5,
                        ease: "Power2.easeInOut"
                    }))
                }, [e]);
                let j = (0, c.useCallback)(() => {
                        !e && y && k.transitionIn()
                    }, [k, e, y]),
                    S = (0, c.useCallback)(() => {
                        !e && y && k.transitionOut()
                    }, [k, e, y]),
                    N = n.bullet_list ? .content[0],
                    R = n.image ? .filename || N ? .content ? .length > 0 || n.long_description;
                return (0, i.jsxs)("div", {
                    ref: p,
                    className: l()(rd().accordionItem, u.className),
                    ...(0, a.m)(n),
                    children: [(0, i.jsxs)("button", {
                        type: "button",
                        className: l()(rd().header, "button", {
                            [rd().disabled]: !R
                        }),
                        onClick: t,
                        onMouseEnter: j,
                        onMouseLeave: S,
                        children: [(0, i.jsxs)("div", {
                            className: l()(rd().headerContent),
                            children: [(0, i.jsxs)(d.A, {
                                ref: v,
                                className: l()(rd().title),
                                as: "h4",
                                size: "heading-05",
                                transitionInType: "splitRotateX3dIn",
                                children: [void 0 !== r && (0, i.jsx)("span", {
                                    className: rd().index,
                                    children: `0${r+1}`.slice(-2)
                                }), n.title]
                            }), (0, i.jsx)(_.A, {
                                ref: b,
                                className: rd().description,
                                as: "p",
                                size: "body-standard",
                                transitionInType: y ? "splitCharsSlideInUp" : "slideUpFadeIn",
                                children: n.short_description
                            })]
                        }), R && (0, i.jsxs)("div", {
                            ref: h,
                            className: l()(rd().icon),
                            children: [(0, i.jsx)("span", {
                                className: l()(rd().line)
                            }), (0, i.jsx)("span", {
                                ref: x,
                                className: l()(rd().line)
                            })]
                        })]
                    }), (0, i.jsxs)("div", {
                        className: rd().content,
                        ref: g,
                        children: [(0, i.jsxs)("div", {
                            className: rd().ctaContainer,
                            children: [n.long_description && (0, i.jsx)(_.A, {
                                className: rd().longDescription,
                                as: "p",
                                size: "body-standard",
                                disableTriggerInOnScroll: !1,
                                children: n.long_description
                            }), n ? .link ? .cached_url && (0, i.jsx)(ez.A, {
                                label: C.globalSettings.view_service,
                                disableTriggerInOnScroll: !1,
                                link: {
                                    href: n.link.cached_url
                                },
                                className: rd().cta
                            })]
                        }), N && N ? .content ? .length > 0 && (0, i.jsx)("ul", {
                            ref: f,
                            className: l()(rd().list),
                            children: (0, ex.XX)(n.bullet_list, {
                                nodeResolvers: {
                                    [ex.Uv]: e => (0, i.jsx)("li", {
                                        className: l()(rd().listItem, "grid-gutter"),
                                        children: (0, i.jsx)(d.A, {
                                            className: l()(rd().listTitle),
                                            as: "h5",
                                            size: "heading-05",
                                            transitionInType: "none",
                                            children: e
                                        })
                                    })
                                }
                            })
                        })]
                    }), (0, i.jsx)("span", {
                        ref: I,
                        className: rd().listLine
                    })]
                })
            }

            function rv({
                blok: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(null),
                    s = t || n,
                    [o, u] = (0, c.useState)(() => e.items.map(() => !1));
                (0, c.useEffect)(() => {
                    u(t => e.items.map((e, r) => t[r] ? ? !1))
                }, [e.items]), (0, T.mt)({
                    scroll: {
                        trigger: s,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: s
                        },
                        setupTransitionInTimeline: rc
                    })
                });
                let d = (0, c.useCallback)(e => {
                    u(t => {
                        let r = [...t];
                        return r[e] = !r[e], r
                    })
                }, []);
                return (0, i.jsx)("div", {
                    ref: s,
                    className: l()(ro().accordion, r.className),
                    ...(0, a.m)(e),
                    children: e.items.map((e, t) => (0, i.jsx)(rx, {
                        blok: e,
                        isOpen: o[t] ? ? !1,
                        onClick: () => d(t),
                        index: r.numbered ? t : void 0
                    }, e._uid))
                })
            }
            var rb = r(59848),
                ry = r.n(rb);

            function rT(e, {
                lottieRef: t,
                itemsRef: r
            }) {
                let n = {
                    progress: 0
                };
                t ? .current ? .elementRef ? .current && (e.add((0, S.m)(t.current.elementRef.current, {
                    duration: .1
                }), 0), e.fromTo(n, {
                    progress: 0
                }, {
                    progress: .3592233009708738,
                    ease: "none",
                    duration: .33,
                    onUpdate: () => {
                        t ? .current ? .setProgress(n.progress)
                    }
                }, 0), e.fromTo(n, {
                    progress: .3592233009708738
                }, {
                    progress: .7572815533980582,
                    ease: "none",
                    duration: .33,
                    onUpdate: () => {
                        t ? .current ? .setProgress(n.progress)
                    }
                }, .33), e.fromTo(n, {
                    progress: .7572815533980582
                }, {
                    progress: 1,
                    ease: "none",
                    duration: .25,
                    onUpdate: () => {
                        t ? .current ? .setProgress(n.progress)
                    }
                }, .66)), r && r ? .current ? .forEach((t, r) => {
                    window.innerWidth < 1024 && e.fromTo(t.current, {
                        y: 0
                    }, {
                        y: -100,
                        duration: .4,
                        ease: "Power2.easeIn"
                    }, .33 * r)
                })
            }

            function rI(e, {
                itemsRef: t
            }) {
                e.addLabel("slide_-1"), t && t ? .current ? .forEach((t, r) => {
                    let n = (0, P.xy)(t);
                    n && (e.add(n.getTimeline("in"), ">"), e.addLabel(`slide_${r}`), e.add(n.getTimeline("out"), ">"))
                })
            }
            var rC = r(46099),
                rw = r.n(rC);

            function rk(e, {
                elementRef: t,
                titleRef: r,
                descriptionRef: n,
                linkRef: i,
                categoryRef: a
            }) {
                let s = (0, P.xy)(r),
                    l = (0, P.xy)(n),
                    o = (0, P.xy)(i),
                    c = (0, P.xy)(a);
                t ? .current && e.fromTo(t.current, {
                    pointerEvents: "none"
                }, {
                    pointerEvents: "all",
                    duration: .01
                }, 0), c && e.add(c.getTimeline("in"), 0), s && e.add(s.getTimeline("in"), 0), l && e.add(l.getTimeline("in"), .1), o && e.add(o.getTimeline("in"), .2)
            }

            function rj(e, {
                titleRef: t,
                descriptionRef: r,
                linkRef: n,
                categoryRef: i
            }) {
                let a = (0, P.xy)(t),
                    s = (0, P.xy)(r),
                    l = (0, P.xy)(n),
                    o = (0, P.xy)(i);
                o && e.add(o.getTimeline("out"), 0), a && e.add(a.getTimeline("out"), 0), s && e.add(s.getTimeline("out"), 0), l && e.add(l.getTimeline("out"), 0)
            }
            var rS = r(74114);

            function rN({
                isVisible: e,
                transitionOnMount: t = !1,
                transitionOnUnMount: r = !1,
                className: n,
                blok: s,
                link: o,
                category: u,
                ref: m
            }) {
                let p = (0, c.useRef)(null),
                    g = m || p,
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, T.zW)(() => ({
                        ref: g,
                        refs: {
                            elementRef: g,
                            titleRef: f,
                            descriptionRef: x,
                            linkRef: v,
                            categoryRef: h
                        },
                        setupTransitionInTimeline: rk,
                        setupTransitionOutTimeline: rj
                    }), []);
                return (0, y.s)(b, e), (0, T.SX)(b, t), (0, T.fE)(b, r), (0, i.jsxs)("div", {
                    ref: g,
                    className: l()(rw().modernCreativityInfoItem, n),
                    ...(0, a.m)(s),
                    children: [(0, i.jsx)(d.A, {
                        ref: h,
                        as: "h2",
                        size: "label-large",
                        className: l()(rw().category),
                        disableTriggerInOnScroll: !0,
                        transitionOutType: eC.CI ? "splitWordsSlideOutUp" : "splitCharsSlideOutUp",
                        transitionInType: eC.CI ? "splitWordsSlideInUp" : "splitCharsSlideInUp",
                        children: u
                    }), (0, i.jsx)(d.A, {
                        ref: f,
                        as: "h3",
                        size: "heading-03",
                        className: l()(rw().title),
                        disableTriggerInOnScroll: !0,
                        transitionOutType: eC.CI ? "splitWordsSlideOutUp" : "splitCharsSlideOutUp",
                        transitionInType: eC.CI ? "splitWordsSlideInUp" : "splitCharsSlideInUp",
                        children: (0, ex.XX)(s.title, {
                            nodeResolvers: {
                                [ex.Uv]: e => (0, i.jsxs)(i.Fragment, {
                                    children: [e, (0, i.jsx)("br", {})]
                                })
                            }
                        })
                    }), (0, i.jsx)(_.A, {
                        ref: x,
                        transitionInType: "splitWordsSlideInUp",
                        transitionOutType: "splitWordsSlideOutUp",
                        className: l()(rw().description),
                        as: "p",
                        size: "body-large",
                        disableTriggerInOnScroll: !0,
                        children: s.description
                    }), (0, i.jsx)(ez.A, {
                        ref: v,
                        className: l()(rw().button),
                        link: {
                            href: `${o?.link?.cached_url}${s?.filter?`?category=${(0,rS.O7)(s.filter)}`:""}`
                        },
                        label: o.title,
                        disableTriggerInOnScroll: !0
                    })]
                })
            }
            var rR = r(88599),
                rA = r(94836),
                rO = r.n(rA);

            function rP(e, {
                buttonsRef: t,
                labelRef: r
            }) {
                let n = (0, P.xy)(r);
                e.add(n ? .getTimeline("in"), 0), t ? .current ? .forEach((t, r) => {
                    let n = (0, P.xy)(t);
                    n && e.add(n.getTimeline("in"), .1 + .1 * r)
                })
            }

            function rL({
                blok: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(null),
                    s = t || n,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(e.button.map(() => (0, c.createRef)()));
                return (0, T.zW)(() => ({
                    ref: s,
                    refs: {
                        elementRef: s,
                        labelRef: o,
                        buttonsRef: u
                    },
                    setupTransitionInTimeline: rP
                })), (0, i.jsxs)("div", {
                    ref: s,
                    className: l()(rO().buttonGridItem, r.className),
                    ...(0, a.m)(e),
                    children: [(0, i.jsx)(d.A, {
                        ref: o,
                        as: "h5",
                        size: "heading-05",
                        transitionInType: "splitWordsSlideInUp",
                        className: rO().label,
                        disableTriggerInOnScroll: !0,
                        children: e.label
                    }), e.button.map((e, t) => (0, i.jsx)(ev.A, {
                        ref: u.current[t],
                        textVariant: "body-standard",
                        className: l()(rO().link),
                        link: {
                            href: e ? .link ? .url || e ? .link ? .cached_url
                        },
                        label: e.title,
                        disableTriggerInOnScroll: !0,
                        transitionInType: "splitLineRotateIn",
                        target: e ? .link ? .target
                    }, e._uid))]
                })
            }
            var rM = r(11622),
                rz = r.n(rM);

            function rH(e, {
                topTitleRef: t,
                bottomTitleRef: r,
                maskTopTitleRef: n,
                maskBottomTitleRef: i,
                previewContainerRef: a
            }) {
                let s = (0, P.xy)(t),
                    l = (0, P.xy)(n),
                    o = (0, P.xy)(r),
                    c = (0, P.xy)(i);
                a ? .current && e.add((0, h.HT)(a.current, {
                    clearProps: "clipPath, webkitClipPath"
                }), 0), e.addLabel("startText", ">-0.2"), s && e.add(s.getTimeline("in"), "startText"), l && e.add(l.getTimeline("in"), "startText"), o && e.add(o.getTimeline("in"), "startText+=0.2"), c && e.add(c.getTimeline("in"), "startText+=0.2")
            }

            function rB(e, {
                topTitleRef: t,
                bottomTitleRef: r,
                maskTopTitleRef: n,
                maskBottomTitleRef: i,
                siteHeaderElementRef: a
            }) {
                i && n && t && r && e.add((0, S._)([t.current, n.current, i.current, r.current], {
                    duration: .2
                })), a ? .current && e.add((0, S._)(a ? .current, {
                    duration: .2
                }), 0)
            }

            function rF(e, {
                topTitleRef: t,
                bottomTitleRef: r,
                maskTopTitleRef: n,
                maskBottomTitleRef: i,
                siteHeaderElementRef: a
            }) {
                i && n && t && r && e.add((0, S._)([t.current, i.current, n.current, r.current], {
                    to: 1,
                    duration: .3
                })), a ? .current && e.add((0, S._)(a ? .current, {
                    to: 1,
                    duration: .3
                }), 0)
            }

            function rE(e, {
                title: t,
                maskTitle: r
            }) {
                t && r && e.to([t.current, r.current], {
                    yPercent: -25
                })
            }
            var rW = r(27857),
                rD = r(45086),
                rU = r(69246),
                r$ = r(71705);
            let rX = (e = !1) => {
                let [t, r] = (0, c.useState)(e);
                return [t, (0, c.useCallback)(() => r(e => !e), [])]
            };
            var rV = r(67999),
                rG = r.n(rV),
                rq = r(45860),
                rY = r.n(rq);
            o.os.registerPlugin(rY());
            let rQ = rY().create("curveOutInOut1", ".32,.67,.88,.22");

            function rJ(e, {
                title1Ref: t,
                title2Ref: r,
                titleOutline1Ref: n,
                titleOutline2Ref: i,
                shapeRef: a
            }) {
                let s = window.innerWidth >= 768 ? 250 : -80;
                a ? .current && e.fromTo(a.current, {
                    y: s
                }, {
                    y: -s,
                    ease: "none",
                    duration: 1
                }, 0);
                let l = window.innerWidth >= 768 ? -150 : 20;
                n ? .current && i ? .current && e.fromTo([n ? .current, i ? .current], {
                    y: -s - l
                }, {
                    y: s + l,
                    ease: "none",
                    duration: 1
                }, 0), t ? .current && r ? .current && e.fromTo([t ? .current, r ? .current], {
                    y: -l
                }, {
                    y: l,
                    ease: "none",
                    duration: 1
                }, 0), t ? .current && n ? .current && e.fromTo([t.current, n ? .current], {
                    xPercent: -50
                }, {
                    xPercent: 75,
                    ease: rQ,
                    duration: 1
                }, 0), r ? .current && i ? .current && e.fromTo([r ? .current, i ? .current], {
                    xPercent: 50
                }, {
                    xPercent: -75,
                    ease: rQ,
                    duration: 1
                }, 0)
            }

            function rZ(e, {
                slidesRef: t,
                slideImagesRef: r,
                shapeInnerRef: n,
                imageRef: i
            }) {
                e.addLabel("slide_-1"), n ? .current && e.add((0, h.HT)(n.current, {
                    from: "center-full",
                    duration: .4,
                    ease: "Quad.easeInOut"
                }), 0), i ? .current && e.fromTo(i.current, {
                    scale: 1.5
                }, {
                    scale: 1,
                    clearProps: "scale",
                    ease: "Quad.easeInOut",
                    duration: .3
                }, "-=0.2"), t ? .current && t ? .current.forEach((t, n) => {
                    e.addLabel(`slide_${n}`), e.fromTo(t, {
                        xPercent: -100,
                        yPercent: 100
                    }, {
                        xPercent: 0,
                        yPercent: 0,
                        ease: "Quad.easeInOut",
                        duration: .3
                    }, ">"), r ? .current && e.fromTo(r.current[n], {
                        scale: 1.5
                    }, {
                        scale: 1,
                        clearProps: "scale",
                        ease: "Quad.easeInOut",
                        duration: .3
                    }, "<0.2")
                }), e.addLabel("slide_4"), n ? .current && e.addLabel("slide_5")
            }
            var rK = r(52412),
                r0 = r(42435),
                r1 = r.n(r0);

            function r2(e) {
                return (window.innerWidth + e.getBoundingClientRect().width) / 2
            }

            function r5(e, {
                title1Ref: t,
                title2Ref: r,
                titleOutline1Ref: n,
                titleOutline2Ref: i,
                shapeRef: a,
                imageRef: s,
                containerRef: l
            }) {
                if (t ? .current && n ? .current) {
                    let r = () => r2(t.current);
                    e.fromTo([t.current, n ? .current], {
                        x: r
                    }, {
                        x: () => -(1.01 * r()),
                        ease: "Power1.easeInOut",
                        duration: 1
                    }, "<")
                }
                if (r ? .current && i ? .current) {
                    let t = () => r2(r.current);
                    e.fromTo([r ? .current, i ? .current], {
                        x: () => -t()
                    }, {
                        x: t,
                        ease: "Power1.easeInOut",
                        duration: 1
                    }, "<")
                }
                a ? .current && e.fromTo(a.current, {
                    clipPath: "inset(0% 0% 0% 0% round 4px)",
                    webkitClipPath: "inset(0% 0% 0% 0% round 4px)"
                }, {
                    clipPath: "inset(calc(50% - min(25vw, 25vh)) calc(50% - min(25vw, 25vh)) calc(50% - min(25vw, 25vh)) calc(50% - min(25vw, 25vh)) round min(25vw, 25vh))",
                    webkitClipPath: "inset(calc(50% - min(25vw, 25vh)) calc(50% - min(25vw, 25vh)) calc(50% - min(25vw, 25vh)) calc(50% - min(25vw, 25vh)) round min(25vw, 25vh))",
                    duration: .3,
                    ease: "Power1.easeInOut"
                }, "<"), s ? .current && e.fromTo(s.current, {
                    scale: 1.5
                }, {
                    scale: .6,
                    ease: "Quad.easeInOut",
                    duration: .4
                }, "<25%"), l ? .current && e.fromTo(l.current, {
                    height: "80svh",
                    top: "10svh"
                }, {
                    height: "90svh",
                    top: "5svh",
                    duration: .4
                }, "<")
            }
            var r3 = r(20945),
                r7 = r.n(r3);

            function r4(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var r9 = r(21876),
                r8 = r.n(r9);

            function r6(e, {
                titleRef: t,
                descriptionRef: r,
                categoryRef: n,
                mediaWrapperRef: i,
                mediaInnerHolderRef: a
            }) {
                let s = (0, P.xy)(n),
                    l = (0, P.xy)(t),
                    o = (0, P.xy)(r);
                a ? .current && e.fromTo(a.current, {
                    scale: 1.2
                }, {
                    scale: 1,
                    duration: .8,
                    ease: "Power3.easeInOut",
                    clearProps: "scale"
                }, 0), i ? .current && e.add((0, h.HT)(i.current), 0), e.addLabel("startText", ">-0.4"), e.add(s ? .getTimeline("in"), "startText"), e.add(l ? .getTimeline("in"), "startText+=0.1"), e.add(o ? .getTimeline("in"), "<0.2")
            }

            function ne({
                blok: e,
                canTransitionIn: t,
                ref: r,
                ...n
            }) {
                let a, s, o = (0, c.useRef)(null),
                    u = r || o,
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null);
                return (0, T.mt)({
                    scroll: {
                        canTransitionIn: t,
                        trigger: u
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: u,
                            titleRef: m,
                            categoryRef: g,
                            descriptionRef: p,
                            mediaWrapperRef: f,
                            mediaInnerHolderRef: h
                        },
                        setupTransitionInTimeline: r6
                    })
                }), e ? .key_image && e.key_image.length > 0 && (a = e.key_image[0]), e ? .key_video && e.key_video.length > 0 && (s = e.key_video[0]), (0, i.jsxs)("div", {
                    ref: u,
                    className: l()(r8().pageHeader, n.className),
                    children: [(0, i.jsxs)("div", {
                        className: l()(r8().header, "grid-gutter"),
                        children: [(0, i.jsx)(d.A, {
                            ref: g,
                            disableTriggerInOnScroll: !0,
                            as: "h2",
                            size: "label-large",
                            transitionInType: "splitLineRotateIn",
                            className: l()(r8().category),
                            children: e ? .category
                        }), (0, i.jsx)(d.A, {
                            ref: m,
                            disableTriggerInOnScroll: !0,
                            as: "h1",
                            size: "heading-02",
                            transitionInType: "splitCharsSlideInUp",
                            className: l()(r8().title),
                            children: e ? .title
                        }), (0, i.jsx)(_.A, {
                            ref: p,
                            disableTriggerInOnScroll: !0,
                            as: "p",
                            size: "body-large",
                            transitionInType: "splitLineRotateIn",
                            className: l()(r8().description),
                            children: e ? .short_description
                        })]
                    }), (a ? .image_landscape || a ? .image_portrait || s) && (0, i.jsx)("div", {
                        ref: f,
                        className: l()(r8().mediaWrapper),
                        children: (0, i.jsx)("div", {
                            className: l()(r8().mediaHolder),
                            children: (0, i.jsxs)("div", {
                                ref: h,
                                className: l()(r8().mediaInnerHolder, "abs-fill"),
                                children: [(a ? .image_landscape || a ? .image_portrait) && !s && (0, i.jsx)(tO.A, {
                                    src: a.image_landscape || a.image_portrait,
                                    srcDesktop: a.image_landscape || a.image_portrait,
                                    className: l()(r8().image, "abs-fill"),
                                    innerTransition: e.no_inner_parallax ? void 0 : {
                                        type: "scaleUp"
                                    },
                                    layout: "fill",
                                    alt: a ? .alt_text
                                }), s && (0, i.jsx)(rD.default, {
                                    blok: s,
                                    objectFit: "cover",
                                    controls: !0,
                                    playButton: !0,
                                    innerTransition: e.no_inner_parallax ? void 0 : {
                                        type: "scaleUp"
                                    },
                                    muted: !1,
                                    className: l()(r8().video, "abs-fill")
                                })]
                            })
                        })
                    })]
                })
            }
            ne.displayName = "PageHeader";
            var nt = r(50072),
                nr = r.n(nt);

            function nn(e, {
                titleRef: t
            }) {
                let r = (0, P.xy)(t);
                r && e.add(r.getTimeline("in"), 0)
            }

            function ni({
                canTransitionIn: e,
                blok: t,
                ref: r,
                ...n
            }) {
                let s = (0, c.useRef)(null),
                    o = r || s,
                    u = (0, c.useRef)(null),
                    m = (0, t_.useRouter)();
                (0, T.mt)({
                    scroll: {
                        trigger: o,
                        canTransitionIn: e,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: o,
                            titleRef: u
                        },
                        setupTransitionInTimeline: nn
                    })
                });
                let p = e => e ? `heading-0${e}` : "heading-05";
                return (0, i.jsxs)("div", {
                    ref: o,
                    className: l()(nr().introColumnText, n.className, "grid-gutter max-content-width"),
                    ...(0, a.m)(t),
                    children: [(0, i.jsxs)("div", {
                        className: l()(nr().titleHolder),
                        children: ["string" == typeof t.title && t.title && (0, i.jsx)(d.A, {
                            ref: u,
                            as: "h3",
                            size: "heading-05",
                            className: l()(nr().title),
                            enableChineseTransitionFallback: !0,
                            canTransitionIn: e,
                            children: t.title
                        }), "string" != typeof t.title && t.title ? .content && (0, ex.XX)(t.title, {
                            nodeResolvers: {
                                [ex.q0]: (t, {
                                    level: r
                                }) => (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsxs)(d.A, {
                                        ref: u,
                                        as: "h3",
                                        className: l()(nr()[p(r)], nr().title),
                                        size: p(r),
                                        enableChineseTransitionFallback: !0,
                                        canTransitionIn: e,
                                        children: [t, (0, i.jsx)("br", {})]
                                    })
                                })
                            }
                        })]
                    }), (0, i.jsxs)("div", {
                        className: l()(nr().content),
                        children: [t.description && (0, ex.XX)(t.description, {
                            markResolvers: {
                                [ex.e5]: e => "string" == typeof e ? e.split(" ").map(e => (0, i.jsxs)("span", {
                                    children: [e, " "]
                                }, e)) : (0, i.jsx)("span", {
                                    children: e
                                })
                            },
                            nodeResolvers: {
                                [ex.Uv]: t => (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsxs)(_.A, {
                                        transitionInType: eC.CI ? "none" : "splitLineRotateIn",
                                        className: l()(nr().description),
                                        as: "p",
                                        size: "quote",
                                        canTransitionIn: e,
                                        disableTriggerInOnScroll: !1,
                                        children: [t, (0, i.jsx)("br", {})]
                                    })
                                })
                            }
                        }), (0, i.jsx)("div", {
                            className: l()(nr().buttonHolder),
                            children: t ? .buttons ? .map(t => {
                                let r = (0, rS.TE)(t.link, m.locale);
                                return r ? (0, i.jsx)(ez.A, {
                                    className: l()(nr().button),
                                    link: {
                                        href: r
                                    },
                                    label: t.title,
                                    canTransitionIn: e,
                                    disableTriggerInOnScroll: !1
                                }, t._uid) : null
                            })
                        })]
                    })]
                })
            }
            var na = r(65364),
                ns = r(66670),
                nl = r.n(ns),
                no = r(44032);

            function nc(e, {
                imageRef: t,
                labelRef: r,
                jobTitleRef: n,
                imageHolderRef: i,
                imageContainerRef: a,
                linkRef: s
            }) {
                let l = (0, P.xy)(n),
                    o = (0, P.xy)(r),
                    c = (0, P.xy)(s);
                i ? .current && e.add((0, no.Vd)(i.current, {
                    from: 100,
                    duration: .5
                }), 0), a ? .current && e.fromTo(a.current, {
                    scale: 1.3
                }, {
                    scale: 1,
                    clearProps: "scale",
                    ease: "Quad.easeInOut",
                    duration: .5
                }, 0), t ? .current && e.add((0, h.HT)(t.current, {
                    from: "bottom",
                    duration: .5
                }), 0), o && e.add(o.getTimeline("in"), .2), l && e.add(l.getTimeline("in"), .4), c && e.add(c.getTimeline("in"), .5)
            }
            var nu = r(24500),
                nd = r.n(nu),
                n_ = r(51575);

            function nm({
                includeImage: e,
                blok: t,
                transitionInDelay: r,
                figCaptionMaxHeight: n,
                ref: a,
                ...s
            }) {
                let u, m = (0, c.useRef)(null),
                    p = a ? .current ? .elementRef || m,
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, c.useRef)(null),
                    {
                        canPlayWebm: y
                    } = (0, n_.O)(),
                    I = (0, t_.useRouter)();
                t ? .buttons && (u = (0, rS.TE)(t ? .buttons[0] ? .link, I.locale)), (0, c.useImperativeHandle)(a, () => ({
                    imageRef: g,
                    elementRef: p
                }), [g, p]), (0, T.mt)({
                    scroll: {
                        transitionInDelay: r,
                        trigger: p,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: p,
                            imageRef: g,
                            labelRef: f,
                            jobTitleRef: x,
                            imageHolderRef: h,
                            imageContainerRef: v,
                            linkRef: b
                        },
                        setupTransitionInTimeline: nc
                    })
                });
                let [C, w] = (0, c.useState)(!1);
                (0, c.useEffect)(() => {
                    ! function(e, t = !0, r = 1.1) {
                        if (e ? .current) {
                            let n = e ? .current;
                            e ? .current ? .elementRef ? .current && (n = e.current.elementRef.current), o.Ay.to(n, {
                                scale: t ? r : 1,
                                ease: "Quad.easeInOut",
                                duration: .5
                            })
                        }
                    }(g, C)
                }, [C]);
                let k = (0, c.useCallback)(() => {
                        w(!0)
                    }, []),
                    j = (0, c.useCallback)(() => {
                        setTimeout(() => {
                            w(!1)
                        }, 0)
                    }, []),
                    S = u ? ty() : "div";
                return (0, i.jsx)(S, {
                    href: u,
                    className: l()(s.className, nl().imageSliderItem, {
                        [nl().link]: u
                    }),
                    ref: p,
                    children: e ? (0, i.jsxs)("figure", {
                        className: l()(nl().parentFigure),
                        children: [t.image.filename && (0, i.jsx)("div", {
                            ref: h,
                            className: l()(nl().imageHolder, {
                                [nl().pointer]: C
                            }),
                            onMouseEnter: u ? k : void 0,
                            onMouseLeave: u ? j : void 0,
                            children: (0, i.jsx)("div", {
                                ref: v,
                                className: l()(nl().imageContainer),
                                children: t ? .animated_image ? .filename && y ? (0, i.jsx)("video", {
                                    src: t.animated_image.filename,
                                    autoPlay: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    loop: !0,
                                    className: l()(nl().animatedImage)
                                }) : (0, i.jsx)(tO.A, {
                                    ref: g,
                                    src: t.image.filename,
                                    srcDesktop: t.image.filename,
                                    className: l()(nl().image),
                                    layout: "responsive",
                                    objectFit: "cover",
                                    alt: t.image.alt
                                })
                            })
                        }), t.caption && (0, i.jsxs)("figcaption", {
                            className: nl().caption,
                            style: n ? {
                                height: n
                            } : void 0,
                            children: [(0, ex.XX)(t.caption, {
                                nodeResolvers: {
                                    [ex.q0]: e => (0, i.jsx)(d.A, {
                                        ref: f,
                                        as: "h6",
                                        size: "label-large",
                                        transitionInType: "splitWordsSlideInUp",
                                        disableTriggerInOnScroll: !0,
                                        children: e
                                    }),
                                    [ex.Uv]: e => (0, i.jsx)(_.A, {
                                        ref: x,
                                        className: nl().jobTitle,
                                        as: "p",
                                        size: "body-standard",
                                        disableTriggerInOnScroll: !0,
                                        children: e
                                    })
                                }
                            }), t ? .buttons && t ? .buttons[0] && u && (0, i.jsx)(ev.A, {
                                ref: b,
                                textVariant: "button-label-small",
                                className: l()(nl().button),
                                link: {
                                    href: u
                                },
                                label: t ? .buttons[0].label,
                                disableTriggerInOnScroll: !0,
                                transitionInType: "splitLineRotateIn",
                                isActive: C
                            })]
                        })]
                    }) : (0, i.jsxs)("figcaption", {
                        ref: p,
                        className: l()(nl().imageSliderItem, s.className),
                        children: [(0, ex.XX)(t.caption, {
                            nodeResolvers: {
                                [ex.q0]: e => (0, i.jsx)(d.A, {
                                    ref: f,
                                    as: "h5",
                                    size: "heading-05",
                                    transitionInType: "splitWordsSlideInUp",
                                    className: nl().label,
                                    disableTriggerInOnScroll: !0,
                                    children: nd()(e)
                                }),
                                [ex.Uv]: e => (0, i.jsx)(_.A, {
                                    ref: x,
                                    className: nl().jobTitle,
                                    as: "p",
                                    size: "body-standard",
                                    disableTriggerInOnScroll: !0,
                                    children: e
                                })
                            }
                        }), t ? .buttons && t ? .buttons[0] && u && (0, i.jsx)(ev.A, {
                            ref: b,
                            textVariant: "button-label-small",
                            className: l()(nl().button),
                            link: {
                                href: u
                            },
                            label: t ? .buttons[0].label,
                            disableTriggerInOnScroll: !0,
                            transitionInType: "splitLineRotateIn"
                        })]
                    })
                })
            }
            var np = r(78390),
                ng = r.n(np);

            function nf(e, {
                imageRef: t,
                labelRef: r,
                jobTitleRef: n,
                imageHolderRef: i,
                imageContainerRef: a,
                linkRef: s
            }) {
                let l = (0, P.xy)(n),
                    o = (0, P.xy)(r),
                    c = (0, P.xy)(s);
                i ? .current && e.add((0, no.Vd)(i.current, {
                    from: 100,
                    duration: .5
                }), 0), a ? .current && e.fromTo(a.current, {
                    scale: 1.3
                }, {
                    scale: 1,
                    clearProps: "scale",
                    ease: "Quad.easeInOut",
                    duration: .5
                }, 0), t ? .current && e.add((0, h.HT)(t.current, {
                    from: "bottom",
                    duration: .5
                }), 0), o && e.add(o.getTimeline("in"), .2), l && e.add(l.getTimeline("in"), .4), c && e.add(c.getTimeline("in"), .5)
            }
            var nh = r(52214),
                nx = r(66056),
                nv = r.n(nx);

            function nb({
                ref: e,
                label: t,
                fullBleed: r = !1,
                onTimelineCreate: n,
                ...a
            }) {
                let s = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    d = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    let e = s.current;
                    if (!e) return;
                    let t = o.Ay.timeline({
                        paused: !0
                    }).set(e, {
                        opacity: 1
                    }).to(e, {
                        width: r ? "clamp(200px, 100%, 300px)" : "100%",
                        duration: r ? .5 : .3,
                        ease: (0, nh.Vm)(d, "power2.inOut", "power2.in")
                    }, "<").fromTo(u.current, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: "power2.inOut"
                    }, "<");
                    return n ? .(t), d.current = t, () => {
                        t.kill()
                    }
                }, [r, n]);
                let m = (0, c.useCallback)(() => {
                        d.current ? .play()
                    }, []),
                    p = (0, c.useCallback)(() => {
                        d.current ? .reverse()
                    }, []);
                return (0, c.useImperativeHandle)(e, () => ({
                    elementRef: s,
                    play: m,
                    reverse: p
                }), [m, p]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("button", { ...a,
                        className: l()(nv().button, a.className),
                        type: a.type ? ? "button",
                        children: (0, i.jsx)(Z.A, {
                            name: "arrow-right-light",
                            className: l()(nv().icon)
                        })
                    }), (0, i.jsxs)("button", { ...a,
                        ref: s,
                        className: l()(nv().button, nv().animatedButton, a.className),
                        type: a.type ? ? "button",
                        children: [(0, i.jsx)(Z.A, {
                            name: "arrow-right-light",
                            className: l()(nv().icon)
                        }), (0, i.jsx)(_.A, {
                            ref: u,
                            disableTriggerInOnScroll: !1,
                            as: "span",
                            size: "button-label-small",
                            className: l()(nv().buttonText),
                            transitionInType: "none",
                            transitionOutType: "none",
                            children: t
                        })]
                    })]
                })
            }

            function ny({
                includeImage: e,
                blok: t,
                transitionInDelay: r,
                figCaptionMaxHeight: n,
                viewTextLabel: a,
                ref: s,
                ...u
            }) {
                let m = (0, c.useRef)(null),
                    p = s ? .current ? .elementRef || m,
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, c.useRef)(null),
                    y = (0, c.useRef)(null),
                    I = (0, c.useRef)(null),
                    {
                        canPlayWebm: C
                    } = (0, n_.O)(),
                    w = (0, rS.TE)(t.link),
                    {
                        name: k,
                        job_title: j
                    } = t;
                (0, c.useImperativeHandle)(s, () => ({
                    imageRef: g,
                    elementRef: p
                }), [g, p]), (0, T.mt)({
                    scroll: {
                        transitionInDelay: r,
                        trigger: p,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: p,
                            imageRef: g,
                            labelRef: f,
                            jobTitleRef: x,
                            imageHolderRef: h,
                            imageContainerRef: v
                        },
                        setupTransitionInTimeline: nf
                    })
                });
                let [S, N] = (0, c.useState)(!1);
                (0, c.useEffect)(() => {
                    ! function(e, t = !0, r = 1.1) {
                        if (e ? .current) {
                            let n = e ? .current;
                            e ? .current ? .elementRef ? .current && (n = e.current.elementRef.current), o.Ay.to(n, {
                                scale: t ? r : 1,
                                ease: "Quad.easeInOut",
                                duration: .5
                            })
                        }
                    }(g, S)
                }, [S]), (0, c.useEffect)(() => {
                    let e = b.current;
                    if (e) return y.current = o.Ay.timeline({
                        paused: !0
                    }).to(e, {
                        autoAlpha: 0,
                        duration: .3,
                        ease: "power2.inOut"
                    }).to({}, {
                        duration: .4
                    }), () => {
                        y.current ? .kill(), y.current = null
                    }
                }, []);
                let R = (0, c.useCallback)(() => {
                        N(!0)
                    }, []),
                    A = (0, c.useCallback)(() => {
                        setTimeout(() => {
                            N(!1)
                        }, 0)
                    }, []),
                    O = (0, c.useCallback)(() => {
                        I.current ? .reverse(), y.current ? .reverse()
                    }, []),
                    P = (0, c.useCallback)(() => {
                        I.current ? .play(), y.current ? .play()
                    }, []),
                    L = w ? ty() : "div";
                return (0, i.jsx)(L, {
                    href: w,
                    className: l()(u.className, ng().peopleSliderItem, {
                        [ng().link]: w
                    }),
                    ref: p,
                    onMouseLeave: O,
                    onMouseEnter: P,
                    children: e ? (0, i.jsxs)("article", {
                        className: l()(ng().card),
                        children: [t.image.filename && (0, i.jsx)("div", {
                            ref: h,
                            className: l()(ng().imageContainer, {
                                [ng().pointer]: S
                            }),
                            onMouseEnter: w ? R : void 0,
                            onMouseLeave: w ? A : void 0,
                            children: (0, i.jsx)("div", {
                                ref: v,
                                className: l()(ng().imageHolder),
                                children: t ? .animated_image ? .filename && C ? (0, i.jsx)("video", {
                                    src: t.animated_image.filename,
                                    autoPlay: !0,
                                    muted: !0,
                                    controls: !1,
                                    playsInline: !0,
                                    loop: !0,
                                    className: l()(ng().animatedImage)
                                }) : (0, i.jsx)(tO.A, {
                                    ref: g,
                                    src: t.image.filename,
                                    srcDesktop: t.image.filename,
                                    className: l()(ng().image),
                                    layout: "responsive",
                                    objectFit: "cover",
                                    alt: t.image.alt
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            id: "identityDetails",
                            className: ng().identityDetails,
                            style: n ? {
                                height: n
                            } : void 0,
                            children: [(0, i.jsx)("div", {
                                className: ng().textContentWrapper,
                                children: (0, i.jsxs)("div", {
                                    ref: b,
                                    className: ng().textContent,
                                    children: [k && (0, i.jsx)(_.A, {
                                        ref: x,
                                        transitionInType: "none",
                                        as: "p",
                                        size: "body-standard",
                                        className: l()(ng().client),
                                        children: k
                                    }), j && (0, i.jsx)(d.A, {
                                        ref: f,
                                        transitionInType: "none",
                                        as: "h4",
                                        size: "label-large",
                                        className: ng().title,
                                        children: j
                                    })]
                                })
                            }), w && (0, i.jsx)(nb, {
                                ref: I,
                                label: a ? ? "",
                                className: ng().button
                            })]
                        })]
                    }) : (0, i.jsx)("article", {
                        className: l()(ng().card, ng().noImageCard),
                        children: (0, i.jsxs)("div", {
                            id: "identityDetails",
                            className: ng().identityDetails,
                            style: n ? {
                                height: n
                            } : void 0,
                            children: [(0, i.jsx)("div", {
                                className: ng().textContentWrapper,
                                children: (0, i.jsxs)("div", {
                                    ref: b,
                                    className: ng().textContent,
                                    children: [k && (0, i.jsx)(_.A, {
                                        ref: x,
                                        transitionInType: "none",
                                        as: "p",
                                        size: "body-standard",
                                        className: l()(ng().client),
                                        children: k
                                    }), j && (0, i.jsx)(d.A, {
                                        ref: f,
                                        transitionInType: "none",
                                        as: "h4",
                                        size: "label-large",
                                        className: ng().title,
                                        children: j
                                    })]
                                })
                            }), w && (0, i.jsx)(nb, {
                                ref: I,
                                label: a ? ? "",
                                className: ng().button
                            })]
                        })
                    })
                })
            }
            var nT = r(95410),
                nI = r.n(nT);

            function nC(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var nw = r(65364),
                nk = r(74584),
                nj = r.n(nk);

            function nS(e, {
                elementRef: t,
                imageHolderRef: r,
                lineRef: n,
                categoryRef: i,
                titleRef: a,
                dateRef: s,
                imageRef: l,
                downloadLinkRef: o
            }) {
                let c = (0, P.xy)(i),
                    u = (0, P.xy)(a),
                    d = (0, P.xy)(s),
                    _ = (0, P.xy)(o);
                r ? .current && e.add((0, no.Vd)(r.current, {
                    from: 100,
                    duration: .5
                }), 0), t.current && e.add((0, h.HT)(t.current, {
                    from: "bottom",
                    duration: .5
                }), 0), l ? .current && e.fromTo(l.current, {
                    scale: 1.3
                }, {
                    scale: 1,
                    clearProps: "scale",
                    ease: "Quad.easeInOut",
                    duration: .5
                }, 0), c && e.add(c.getTimeline("in"), .2), u && e.add(u.getTimeline("in"), .3), d && e.add(d.getTimeline("in"), .6), _ && e.add(_.getTimeline("in"), .6), n ? .current && e.fromTo(n ? .current, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    clearProps: "scaleX",
                    ease: "Power2.easeOut",
                    duration: .5
                }, .4)
            }
            var nN = r(15983);
            let nR = {
                    0: "Sunday",
                    1: "Monday",
                    2: "Tuesday",
                    3: "Wednesday",
                    4: "Thursday",
                    5: "Friday",
                    6: "Saturday"
                },
                nA = {
                    0: "Sun",
                    1: "Mon",
                    2: "Tue",
                    3: "Wed",
                    4: "Thu",
                    5: "Fri",
                    6: "Sat"
                },
                nO = {
                    0: "January",
                    1: "February",
                    2: "March",
                    3: "April",
                    4: "May",
                    5: "June",
                    6: "July",
                    7: "August",
                    8: "September",
                    9: "October",
                    10: "November",
                    11: "December"
                },
                nP = (e, t = "D MMM YYYY") => {
                    if (e) {
                        let r = new Date(e);
                        Number.isNaN(r.getTime()) && "string" == typeof e && (r = new Date(e.split(" ")[0]));
                        let n = r.getFullYear(),
                            i = `${n}` [2] + `${n}` [3],
                            a = r.getMonth() + 1,
                            s = 1 === `${a}`.length ? `0${a}` : a,
                            l = nO[a - 1],
                            o = r.getDate(),
                            c = 1 === `${o}`.length ? `0${o}` : o,
                            u = nR[o],
                            d = nA[o];
                        return t.replace("YYYY", String(n)).replace("YY", i).replace("MMM", l).replace("MM", String(s)).replace(/M(?![a-z])/, String(a)).replace("DDDD", u).replace("DDD", d).replace("DD", String(c)).replace(/D(?![a-z])/, String(o))
                    }
                    return e
                };
            var nL = r(71393);

            function nM(e) {
                return !!(e && e.length > 0 && (e[0] ? .vimeo_url ? .length > 0 || e[0] ? .hosted_video && e[0] ? .hosted_video ? .filename ? .length > 0))
            }

            function nz(e, t) {
                return e && nM(e) ? e[0] : t[0]
            }

            function nH(e, t) {
                return t && !e ? .poster_image ? .filename ? { ...e,
                    poster_image: {
                        filename: t
                    }
                } : e
            }
            var nB = r(61791);

            function nF({
                blok: e,
                full_slug: t,
                textOnly: r,
                transitionInDelay: n,
                ref: a,
                ...s
            }) {
                let u, m, p = (0, c.useRef)(null),
                    g = a || p,
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    [v, b] = (0, c.useState)(nP(e ? .publish_date, "D MMM YYYY")),
                    y = (0, c.useRef)(null),
                    I = (0, c.useRef)(null),
                    C = (0, c.useRef)(null),
                    w = (0, c.useRef)(null),
                    k = (0, c.useRef)(null),
                    j = (0, c.useRef)(null),
                    S = (0, c.useRef)(null),
                    N = (0, eJ.o)(),
                    [R, A] = (0, c.useState)(!1),
                    O = (0, c.useRef)(!1),
                    P = (0, c.useRef)(void 0),
                    {
                        canPlayWebm: L
                    } = (0, n_.O)(),
                    {
                        inView: M
                    } = (0, T.mt)({
                        scroll: {
                            trigger: g,
                            transitionInDelay: n,
                            vars: {},
                            enableInView: !0
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: g,
                                imageHolderRef: h,
                                lineRef: x,
                                categoryRef: y,
                                titleRef: I,
                                dateRef: C,
                                imageRef: w,
                                downloadLinkRef: j
                            },
                            setupTransitionInTimeline: nS
                        })
                    }),
                    {
                        key_image: z,
                        key_video: H,
                        thumbnail_video: B
                    } = e;
                z && z ? .length > 0 && (u = (0, rS.YQ)(z[0].image_portrait), m = (0, rS.YQ)(z[0].image_landscape), u || (u = (0, rS.YQ)(z[0].image_landscape))), (0, nB.A)(() => {
                    P ? .current && clearTimeout(P.current)
                }), (0, nN.A)(() => {
                    e ? .publish_date && b(nP(e ? .publish_date, "D MMM YYYY"))
                }, [nP, e.publish_date]);
                let F = (0, c.useCallback)(() => {
                        A(!0)
                    }, []),
                    E = (0, c.useCallback)(() => {
                        P.current = setTimeout(() => {
                            O.current || A(!1)
                        }, 0)
                    }, []),
                    W = (0, c.useCallback)(() => {
                        O.current = !0
                    }, []),
                    D = (0, c.useCallback)(() => {
                        O.current = !1
                    }, []);
                (0, c.useEffect)(() => {
                    R ? o.Ay.fromTo(S.current, {
                            yPercent: 100 * !!R
                        }, {
                            yPercent: 0,
                            duration: .5,
                            ease: "Power2.easeOut"
                        }) : o.Ay.to(S.current, {
                            yPercent: -100,
                            duration: .5,
                            ease: "Power2.easeOut"
                        }),
                        function(e, t = !0, r = 1.1) {
                            if (e ? .current) {
                                let n = e ? .current;
                                e ? .current ? .elementRef ? .current && (n = e.current.elementRef.current), o.Ay.to(n, {
                                    scale: t ? r : 1,
                                    ease: "Quad.easeInOut",
                                    duration: .5
                                })
                            }
                        }(w, R)
                }, [R]);
                let U = (0, i.jsx)(i.Fragment, {});
                return H && nM(H) || B && nM(B) ? U = (0, i.jsx)(rD.default, {
                    blok: nH(nz(B, H), m || u),
                    objectFit: "cover",
                    controls: !1,
                    playButton: !1,
                    muted: !0,
                    loop: !0,
                    openInModal: !1,
                    playing: M,
                    className: l()(nj().video, "abs-fill")
                }) : z ? .[0] ? .animated_image ? .filename && L ? U = (0, i.jsx)("video", {
                    ref: k,
                    src: z ? .[0] ? .animated_image.filename,
                    autoPlay: !0,
                    muted: !0,
                    controls: !1,
                    playsInline: !0,
                    loop: !0,
                    className: l()(nj().animatedImage)
                }) : z ? .[0] && u && !nM(H) && !nM(B) && (U = (0, i.jsx)(tO.A, {
                    ref: w,
                    src: u,
                    srcDesktop: m || u,
                    layout: "fill",
                    className: l()(nj().image, "abs-fill"),
                    sizes: `${rK.K.MIN_768} 1200px, ${rK.K.MIN_1920} 1680px, 100vw`,
                    alt: z[0].alt_text
                })), (0, i.jsxs)("div", {
                    ref: g,
                    className: l()(nj().newsOverviewItem, s.className, {
                        [nj().isHighlight]: "Thought Leadership" === e.category
                    }),
                    children: [(0, nL.j)({
                        elementRef: f,
                        blok: e,
                        props: {
                            link: {
                                href: t,
                                uuid: e._uid
                            },
                            className: l()(nj().button),
                            onMouseEnter: F,
                            onMouseLeave: E
                        },
                        innerTemplate: (0, i.jsxs)(i.Fragment, {
                            children: [!r && (0, i.jsx)("div", {
                                ref: h,
                                className: nj().imageHolder,
                                children: U
                            }), (0, i.jsxs)("div", {
                                className: l()(nj().content),
                                children: [(0, i.jsx)("div", {
                                    ref: S,
                                    className: l()(nj().backgroundHover, "abs-fill")
                                }), (0, i.jsx)(d.A, {
                                    ref: y,
                                    transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                    transitionOutType: eC.CI ? "none" : "splitWordsSlideOutUp",
                                    className: l()(nj().category),
                                    as: "h3",
                                    size: "label-small",
                                    children: e.category
                                }), (0, i.jsx)(d.A, {
                                    ref: I,
                                    transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                    transitionOutType: eC.CI ? "none" : "splitWordsSlideOutUp",
                                    className: l()(nj().title),
                                    as: "h2",
                                    size: "quote-small",
                                    children: e.title
                                }), (0, i.jsx)(_.A, {
                                    ref: C,
                                    transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                    transitionOutType: eC.CI ? "none" : "splitWordsSlideOutUp",
                                    className: l()(nj().date),
                                    as: "time",
                                    size: "body-standard",
                                    children: v
                                }), (0, i.jsx)("span", {
                                    ref: x,
                                    className: l()(nj().line)
                                })]
                            })]
                        })
                    }), !!e.pardot_id && (0, i.jsx)(ev.A, {
                        ref: j,
                        textVariant: "label-small",
                        className: l()(nj().downloadLink),
                        link: {
                            href: `${t}#download-pdf`
                        },
                        label: e ? .pardot_download_label || N.globalSettings.form_pardot_pdf_download_label,
                        transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                        icon: "download",
                        onMouseEnter: W,
                        onMouseLeave: D
                    })]
                })
            }
            var nE = r(80387),
                nW = r.n(nE);

            function nD(e, {
                categoryRef: t,
                titleRef: r,
                dateRef: n,
                downloadLinkRef: i
            }) {
                let a = (0, P.xy)(t),
                    s = (0, P.xy)(r),
                    l = (0, P.xy)(n),
                    o = (0, P.xy)(i);
                a && e.add(a.getTimeline("in"), 0), s && e.add(s.getTimeline("in"), .1), l && e.add(l.getTimeline("in"), .2), o && e.add(o.getTimeline("in"), .2)
            }
            var nU = r(5734),
                n$ = r(24548);

            function nX({
                blok: e,
                className: t,
                alignRight: r,
                canTransitionIn: n,
                ref: a
            }) {
                let s, o, u = (0, c.useRef)(null),
                    m = a || u,
                    {
                        content: p
                    } = e.news,
                    g = (0, c.useRef)(null),
                    [f, h] = (0, c.useState)(nP(p ? .date || p ? .publish_date, "D MMM YYYY")),
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, c.useRef)(null),
                    y = (0, c.useRef)(null),
                    I = (0, en.E)(ei.S4.MIN_768, !1),
                    C = (0, c.useRef)(null),
                    w = (0, c.useRef)(null),
                    k = (0, c.useRef)(null),
                    j = (0, n$.A)(),
                    {
                        locale: S
                    } = (0, t_.useRouter)(),
                    N = (0, eJ.o)(),
                    R = !(0, en.E)(ei.S4.MIN_1024, !0),
                    [A, O] = (0, c.useState)(!1),
                    {
                        canPlayWebm: P
                    } = (0, n_.O)(),
                    {
                        inView: L
                    } = (0, T.mt)({
                        scroll: {
                            canTransitionIn: n,
                            trigger: m,
                            vars: {},
                            enableInView: !0
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: m,
                                titleRef: x,
                                categoryRef: v,
                                dateRef: b,
                                downloadLinkRef: k
                            },
                            setupTransitionInTimeline: nD
                        })
                    }),
                    {
                        key_image: M,
                        key_video: z,
                        thumbnail_video: H
                    } = p;
                M && M ? .length > 0 && (s = (0, rS.YQ)(M[0].image_portrait), o = (0, rS.YQ)(M[0].image_landscape), s || (s = (0, rS.YQ)(M[0].image_landscape))), (0, nN.A)(() => {
                    h(nP(p ? .date || p ? .publish_date, "D MMM YYYY"))
                }, [nP, p.date, p.publish_date]);
                let B = (0, c.useCallback)(() => {
                        O(!0)
                    }, []),
                    F = (0, c.useCallback)(() => {
                        O(!1)
                    }, []),
                    E = (0, c.useCallback)(() => {
                        let t = (0, rS.kD)(e.news.full_slug, S);
                        j(`${t}#download-pdf`)
                    }, [e.news.full_slug, S, j]),
                    W = (0, i.jsx)(i.Fragment, {});
                return z && nM(z) || H && nM(H) ? W = (0, i.jsx)(rD.default, {
                    ref: C,
                    blok: nH(nz(H, z), o || s),
                    objectFit: "cover",
                    controls: !1,
                    playButton: !1,
                    muted: !0,
                    loop: !0,
                    openInModal: !1,
                    playing: L,
                    innerTransition: {
                        type: "parallax",
                        config: {
                            speed: -2
                        }
                    },
                    className: l()(nW().video, "abs-fill")
                }) : M ? .[0] ? .animated_image ? .filename && P ? W = (0, i.jsx)("video", {
                    ref: w,
                    src: M ? .[0] ? .animated_image.filename,
                    autoPlay: !0,
                    muted: !0,
                    controls: !1,
                    playsInline: !0,
                    loop: !0,
                    className: l()(nW().animatedImage)
                }) : M ? .[0] && s && !nM(z) && !nM(H) && (W = (0, i.jsx)(tO.A, {
                    ref: C,
                    src: s,
                    srcDesktop: o || s,
                    layout: "fill",
                    className: l()(nW().image, "abs-fill"),
                    sizes: `${rK.K.MIN_768} 1200px, ${rK.K.MIN_1920} 1680px, 100vw`,
                    alt: M[0].alt_text,
                    innerTransition: {
                        type: "parallax",
                        config: {
                            speed: -2
                        }
                    }
                })), (0, nL.j)({
                    elementRef: m,
                    blok: e,
                    props: {
                        link: {
                            href: e.news.full_slug,
                            uuid: e._uid
                        },
                        className: l()(nW().featuredNewsItem, t, {
                            [nW().alignRight]: r
                        }),
                        onMouseEnter: B,
                        onMouseLeave: F
                    },
                    innerTemplate: (0, i.jsxs)(i.Fragment, {
                        children: [(M ? .[0] && s || z && nM(z) || H && nM(H)) && (0, i.jsx)("div", {
                            ref: g,
                            className: nW().imageHolder,
                            children: (0, i.jsx)(nU.A, {
                                as: "div",
                                disableTriggerInOnScroll: I,
                                className: l()(nW().imageContainer, "abs-fill"),
                                type: "parallax",
                                config: {
                                    speed: 1.5,
                                    ease: "Power2.easeOut"
                                },
                                vars: {
                                    start: "top bottom",
                                    end: "center top"
                                },
                                children: W
                            })
                        }), (0, i.jsx)("div", {
                            ref: y,
                            className: l()(nW().content),
                            children: (0, i.jsxs)("div", {
                                className: l()(nW().innerContent),
                                children: [(0, i.jsx)(d.A, {
                                    ref: v,
                                    transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                    transitionOutType: eC.CI ? "none" : "splitWordsSlideOutUp",
                                    className: l()(nW().category),
                                    as: "h3",
                                    size: "label-small",
                                    disableTriggerInOnScroll: !eC.CI,
                                    canTransitionIn: n,
                                    children: p.category
                                }), (0, i.jsx)(d.A, {
                                    ref: x,
                                    transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                    transitionOutType: eC.CI ? "none" : "splitWordsSlideOutUp",
                                    className: l()(nW().title),
                                    as: "h2",
                                    size: "quote",
                                    disableTriggerInOnScroll: !eC.CI,
                                    canTransitionIn: n,
                                    children: p.title
                                }), !!p.pardot_id && (0, i.jsx)(ev.A, {
                                    ref: k,
                                    textVariant: "body-standard",
                                    className: l()(nW().downloadLink),
                                    label: p.pardot_download_label || N.globalSettings.form_pardot_pdf_download_label,
                                    forceTag: "div",
                                    disableTriggerInOnScroll: !eC.CI,
                                    transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                    icon: "download",
                                    onClick: E
                                }), (0, i.jsx)(_.A, {
                                    ref: b,
                                    transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                    transitionOutType: eC.CI ? "none" : "splitWordsSlideOutUp",
                                    className: l()(nW().date),
                                    as: "p",
                                    size: "body-standard",
                                    disableTriggerInOnScroll: !eC.CI,
                                    canTransitionIn: n,
                                    children: f
                                }), R && (0, i.jsx)(ev.A, {
                                    textVariant: "body-standard",
                                    className: l()(nW().cta),
                                    label: N.globalSettings.view_article,
                                    forceTag: "div",
                                    disableTriggerInOnScroll: !0,
                                    isVisible: {
                                        onMount: !1,
                                        value: A
                                    },
                                    transitionInType: "splitWordsSlideInUp",
                                    transitionOutType: "fadeOut"
                                })]
                            })
                        })]
                    })
                })
            }
            var nV = r(65309),
                nG = r.n(nV);

            function nq(e, {
                lineRef: t,
                topLineRef: r
            }) {
                !eC.CI && (r ? .current && e.fromTo(r.current, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    duration: 1,
                    ease: "Quad.easeInOut",
                    clearProps: "scaleX"
                }), t ? .current && e.fromTo(t.current, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    duration: 1,
                    ease: "Quad.easeInOut",
                    clearProps: "scaleX"
                }, .2))
            }

            function nY(e, t) {
                let r = t ? "auto" : e.current ? .offsetHeight;
                return o.Ay.to(e.current, {
                    height: r,
                    duration: .8 * !!t,
                    ease: "Power2.easeOut"
                })
            }

            function nQ(e, {
                elementRef: t,
                labelRef: r
            }) {
                let n = (0, P.xy)(r);
                t ? .current && (e.fromTo(t.current, {
                    scaleX: .4
                }, {
                    duration: .5,
                    scaleX: 1,
                    ease: "Expo.easeOut",
                    clearProps: "scale"
                }, 0), e.add((0, S.m)(t.current), 0)), n && e.add(n.getTimeline("in"), 0)
            }

            function nJ(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var nZ = r(61123);
            let nK = function(e, t, r = "mousedown") {
                (0, nZ.A)(r, r => {
                    let n = e ? .current;
                    !n || n.contains(r.target) || t(r)
                })
            };
            var n0 = r(64281);

            function n1({
                isVisible: e,
                filters: t,
                onFilterClick: r,
                className: n,
                activeFilter: a,
                canTransitionIn: s,
                type: u,
                disableTriggerInOnScroll: d,
                textVariant: m = "body-standard",
                size: p = "medium",
                ref: g
            }) {
                let f = (0, c.useRef)(null),
                    h = g || f,
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, c.useRef)(null),
                    I = (0, c.useRef)(null),
                    C = (0, c.useRef)(void 0),
                    k = (0, c.useRef)(null),
                    j = (0, c.useRef)(null),
                    [S, N] = rX(!1),
                    {
                        transitionController: R
                    } = (0, T.mt)({
                        scroll: {
                            canTransitionIn: s,
                            disableTriggerInOnScroll: d,
                            trigger: h
                        },
                        setupOptions: () => ({
                            ref: h,
                            refs: {
                                elementRef: h,
                                labelRef: v
                            },
                            setupTransitionInTimeline: nQ,
                            setupTransitionOutTimeline: nJ
                        })
                    });
                (0, y.s)(R, e), C.current = (0, w.A)(n0.KQ, {
                    backgroundHoverRef: b,
                    hoverLabelRef: I,
                    labelRef: v
                });
                let A = (0, c.useCallback)(() => {
                        S || C ? .current ? .reverse()
                    }, [C, S]),
                    O = (0, c.useCallback)(() => {
                        S || C ? .current ? .play()
                    }, [C, S]);
                return nK(h, () => {
                    S && N()
                }), (0, c.useEffect)(() => {
                    ! function(e, t = !0) {
                        o.Ay.to(e.current, {
                            height: t ? "auto" : 0,
                            duration: .3,
                            ease: "Quad.easeInOut"
                        })
                    }(x, S), S || C ? .current ? .reverse()
                }, [S]), (0, c.useEffect)(() => {
                    let e = o.Ay.getProperty(k.current, "width");
                    o.Ay.set(j.current, {
                        width: e
                    })
                }, []), (0, i.jsxs)("div", {
                    ref: h,
                    className: l()(e2().primaryDropdown, n, e2()[`size-${p}`], {
                        [e2().isOpen]: S
                    }),
                    children: [(0, i.jsxs)("button", {
                        ref: j,
                        onClick: N,
                        type: "button",
                        className: l()(e2().selector, "button"),
                        onMouseEnter: O,
                        onMouseLeave: A,
                        children: [(0, i.jsx)(_.A, {
                            ref: v,
                            as: "p",
                            size: m,
                            className: l()(e2().selectedValue),
                            children: a || t[0]
                        }), (0, i.jsx)(_.A, {
                            ref: I,
                            transitionInType: "splitCharsNone",
                            className: l()(e2().selectedValue, e2().hoverLabel),
                            as: "span",
                            size: m,
                            children: a || t[0]
                        })]
                    }), (0, i.jsxs)("div", {
                        ref: k,
                        className: l()(e2().wrapper),
                        children: [(0, i.jsx)(Z.A, {
                            name: "chevron-down",
                            className: l()(e2().icon)
                        }), (0, i.jsx)("div", {
                            ref: b,
                            className: l()(e2().backgroundHover)
                        }), (0, i.jsx)("ul", {
                            ref: x,
                            className: l()(e2().list),
                            children: t.map(e => (0, i.jsx)("li", {
                                className: l()(e2().listItem),
                                children: (0, i.jsx)(ev.A, {
                                    textVariant: m,
                                    className: l()(e2().button, {
                                        [e2().isActive]: a === e
                                    }),
                                    label: e,
                                    onClick: () => {
                                        N(), r(e, u)
                                    }
                                })
                            }, e))
                        }), (0, i.jsx)("div", {
                            className: l()(e2().border)
                        })]
                    })]
                })
            }
            var n2 = r(43785),
                n5 = r.n(n2);

            function n3(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var n7 = r(49581),
                n4 = r.n(n7);

            function n9(e, {
                elementRef: t,
                labelRef: r
            }) {
                let n = (0, P.xy)(r);
                t ? .current && (e.fromTo(t.current, {
                    scaleX: .4
                }, {
                    duration: .5,
                    scaleX: 1,
                    ease: "Expo.easeOut",
                    clearProps: "scale"
                }, 0), e.add((0, S.m)(t.current), 0)), n && e.add(n.getTimeline("in"), 0)
            }

            function n8(e, {
                elementRef: t
            }) {
                t ? .current && (e.add((0, S._)(t.current, {
                    duration: .4,
                    ease: "Expo.easeOut"
                })), e.to(t.current, {
                    duration: .4,
                    scaleX: .4,
                    ease: "Expo.easeOut"
                }, 0))
            }

            function n6({
                isVisible: e,
                revertColor: t = !1,
                hasOutline: r = !1,
                isSelected: n = !1,
                disableTriggerInOnScroll: a = !1,
                backgroundHoverOpacity: s = .75,
                iconOnHover: o = !0,
                ref: u,
                ...d
            }) {
                let m = (0, c.useRef)(void 0),
                    p = u || m,
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(void 0),
                    v = t;
                n && (v = !t), x.current = (0, w.A)(n0.KQ, {
                    backgroundHoverRef: f,
                    hoverLabelRef: h,
                    labelRef: g
                });
                let b = (0, c.useCallback)(() => {
                        x ? .current ? .reverse()
                    }, [x]),
                    I = (0, c.useCallback)(() => {
                        x ? .current ? .play()
                    }, [x]),
                    {
                        transitionController: C
                    } = (0, T.mt)({
                        scroll: {
                            disableTriggerInOnScroll: a,
                            trigger: p
                        },
                        setupOptions: () => ({
                            ref: p,
                            refs: {
                                elementRef: p,
                                labelRef: g
                            },
                            setupTransitionInTimeline: n9,
                            setupTransitionOutTimeline: n8
                        })
                    });
                return (0, y.s)(C, e), (0, nL.j)({
                    innerTemplate: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            ref: f,
                            className: l()(n4().backgroundHover),
                            style: {
                                "--background-hover-opacity": s
                            }
                        }), (0, i.jsxs)("div", {
                            className: l()(n4().textHolder),
                            children: [d.label && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(_.A, {
                                    ref: g,
                                    transitionInType: "splitCharsSlideInUp",
                                    className: l()(n4().label),
                                    as: "span",
                                    size: "button-label-large",
                                    children: d.label
                                }), (0, i.jsx)(_.A, {
                                    ref: h,
                                    transitionInType: "splitCharsNone",
                                    className: l()(n4().label, n4().hoverLabel),
                                    as: "span",
                                    size: "button-label-large",
                                    children: d.label
                                })]
                            }), d.icon && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(Z.A, {
                                    ref: g,
                                    name: d.icon,
                                    className: l()(n4().icon)
                                }), o && (0, i.jsx)(Z.A, {
                                    ref: h,
                                    name: d.icon,
                                    className: l()(n4().icon, n4().hoverLabel)
                                })]
                            })]
                        })]
                    }),
                    props: { ...d,
                        className: l()(n4().circleButton, d.className, {
                            [n4().revertColor]: v,
                            [n4().hasOutline]: r,
                            [n4().isSelected]: n
                        }),
                        onMouseEnter: I,
                        onMouseLeave: b
                    },
                    elementRef: p
                })
            }

            function ie({
                total: e,
                activeIndex: t,
                onPaginationClick: r,
                max: n = 5,
                ref: a,
                ...s
            }) {
                let o = (0, c.useRef)(null),
                    u = a || o,
                    d = (0, c.useMemo)(() => {
                        let r = [],
                            i = n;
                        e < n && (i = e);
                        let a = t - Math.floor(i / 2),
                            s = t + Math.ceil(i / 2);
                        for (let n = -Math.floor(i / 2); n < i / 2; n++) {
                            let i = t + n;
                            a < 0 && (i -= a), s > e && (i -= s - e), r.push(i)
                        }
                        return r
                    }, [e, t, n]);
                return (0, T.mt)({
                    scroll: {
                        trigger: u,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: u
                        },
                        setupTransitionInTimeline: n3
                    })
                }), (0, i.jsx)("div", {
                    ref: u,
                    className: l()(n5().primaryPagination, s.className, {
                        [n5().isHidden]: e <= 1
                    }),
                    children: (0, i.jsxs)("ul", {
                        className: l()(n5().list),
                        children: [(0, i.jsx)("li", {
                            className: l()(n5().listItem),
                            children: (0, i.jsx)(n6, {
                                icon: "arrow-left",
                                revertColor: !0,
                                hasOutline: !0,
                                className: l()(n5().button),
                                onClick: () => {
                                    r(Math.max(t - 1, 0))
                                },
                                isVisible: {
                                    onMount: !0,
                                    value: t > 0 && e > n
                                },
                                disableTriggerInOnScroll: !0
                            })
                        }), d.map(e => (0, i.jsx)("li", {
                            className: l()(n5().listItem),
                            children: (0, i.jsx)(n6, {
                                label: e + 1,
                                isSelected: e === t,
                                revertColor: !0,
                                className: l()(n5().button),
                                onClick: () => r(e)
                            })
                        }, e)), (0, i.jsx)("li", {
                            className: l()(n5().listItem),
                            children: (0, i.jsx)(n6, {
                                icon: "arrow-right",
                                revertColor: !0,
                                hasOutline: !0,
                                className: l()(n5().button),
                                onClick: () => {
                                    r(Math.min(t + 1, e - 1))
                                },
                                isVisible: {
                                    onMount: !0,
                                    value: t + 1 < e && e > n
                                },
                                disableTriggerInOnScroll: !0
                            })
                        })]
                    })
                })
            }
            let it = e => {
                let {
                    asPath: t,
                    query: r
                } = (0, t_.useRouter)();
                return (0, c.useMemo)(() => {
                    if (r[e]) return r[e];
                    let n = t.match(RegExp(`[&?]${e}=(.*?)(&|$)`));
                    if (n) return decodeURIComponent(n[1])
                }, [t, e, r])
            };
            var ir = r(1397),
                ii = r.n(ir);

            function ia(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function is({
                onResetClick: e,
                message: t,
                cta: r,
                ref: n,
                ...a
            }) {
                let s = (0, c.useRef)(null),
                    o = n || s,
                    u = (0, c.useRef)(null);
                return (0, T.mt)({
                    scroll: {
                        trigger: o,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: o
                        },
                        setupTransitionInTimeline: ia
                    })
                }), (0, i.jsxs)("div", {
                    ref: o,
                    className: l()(ii().noFilterResultMessage, a.className, "grid-gutter", "max-content-width"),
                    children: [(0, i.jsx)(_.A, {
                        as: "span",
                        size: "quote-small",
                        className: l()(ii().description),
                        disableTriggerInOnScroll: !1,
                        children: t
                    }), (0, i.jsx)(ez.A, {
                        ref: u,
                        className: l()(ii().button),
                        label: r,
                        disableTriggerInOnScroll: !1,
                        onClick: e
                    })]
                })
            }
            var il = r(22124),
                io = r.n(il),
                ic = r(78858),
                iu = r.n(ic);

            function id(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function i_(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var im = r(73007),
                ip = r.n(im);

            function ig(e, {
                itemsRef: t,
                titleRef: r,
                backgroundRef: n
            }) {
                if (n ? .current && e.fromTo(n.current, {
                        scaleX: 0
                    }, {
                        scaleX: 1,
                        clearProps: "scaleX",
                        duration: .5,
                        ease: "Quad.easeInOut"
                    }, 0), r ? .current) {
                    let t = (0, P.xy)(r);
                    e.add(t ? .getTimeline("in"), .2)
                }
                t ? .current ? .forEach((t, r) => {
                    let n = (0, P.xy)(t);
                    n && e.add(n.getTimeline("in"), .3 + .075 * r)
                })
            }

            function ih({
                disableTriggerInOnScroll: e,
                canTransitionIn: t,
                className: r,
                blok: n,
                ref: s
            }) {
                let o = (0, t_.useRouter)(),
                    u = n.text_items.filter(e => (0, rS.TE)(e.button[0] ? .link, o.locale)),
                    _ = u.length,
                    m = (0, c.useRef)(null),
                    p = s || m,
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(u.map(() => (0, c.createRef)())),
                    h = (0, c.useRef)(null);
                return ((0, T.mt)({
                    scroll: {
                        canTransitionIn: t,
                        disableTriggerInOnScroll: e,
                        trigger: p
                    },
                    setupOptions: () => ({
                        ref: p,
                        refs: {
                            elementRef: p,
                            itemsRef: f,
                            titleRef: g,
                            backgroundRef: h
                        },
                        setupTransitionInTimeline: ig
                    })
                }), 0 === _) ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)("div", {
                    ref: p,
                    className: l()(ip().buttonGrid, r),
                    ...(0, a.m)(n),
                    children: [(0, i.jsx)("div", {
                        ref: h,
                        className: l()(ip().background)
                    }), n.title && (0, i.jsx)(d.A, {
                        ref: g,
                        as: "h4",
                        size: "label-large",
                        className: l()(ip().title),
                        transitionInType: "slideUpFadeIn",
                        children: n.title
                    }), (0, i.jsx)("div", {
                        className: l()(ip().flexContainer, ip().threeColumn, {
                            [ip().fourColumn]: _ % 4 == 0 || _ % 3 != 0 && _ % 3 != 2
                        }),
                        children: u.map((e, t) => (0, i.jsx)(rL, {
                            ref: f.current[t],
                            blok: e
                        }, e._uid))
                    })]
                })
            }
            var ix = r(3383),
                iv = r.n(ix);

            function ib(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function iy(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var iT = r(60182),
                iI = r.n(iT);

            function iC(e, t = 0) {
                let r = -(100 * (1.1 - 1)),
                    n = (0, c.useRef)(Array(t).fill(0).fill((0, c.createRef)())),
                    i = (0, c.useRef)(0),
                    a = (0, c.useRef)(void 0),
                    s = (0, c.useCallback)(e => {
                        a.current = e
                    }, []);
                (0, rf.A)(() => {
                    e && (s(n ? .current ? .map(e => ({
                        left: e ? .elementRef ? .current ? .offsetLeft || 0,
                        right: (e ? .elementRef ? .current ? .offsetLeft || 0) + (e ? .elementRef ? .current ? .offsetWidth || 0)
                    }))), n ? .current ? .forEach(e => {
                        o.Ay.set(e.imageRef.current, {
                            scale: 1.1
                        })
                    }))
                });
                let l = (0, c.useCallback)(() => {
                        a ? .current ? .forEach((e, t) => {
                            if (e.right > Math.abs(i.current) && e.left - Math.abs(i.current) < window.innerWidth && n ? .current[t] ? .imageRef ? .current) {
                                let a = e.right - e.left,
                                    s = e.left + a,
                                    l = Math.abs(i.current);
                                o.Ay.set(n ? .current[t] ? .imageRef ? .current, {
                                    scale: 1.1,
                                    xPercent: r / 2 + -(l / s * r)
                                })
                            }
                        })
                    }, [n, r]),
                    u = (0, c.useCallback)(t => {
                        i.current = t, e && l()
                    }, [e, l]);
                return (0, c.useEffect)(() => {
                    e && l()
                }, [e, l]), {
                    itemsRef: n,
                    setCurrentPosition: u
                }
            }
            let iw = e => e.endsWith("%") ? Number(e.replace("%", "")) / 100 * 255 : Number(e),
                ik = e => {
                    let t, r, n;
                    if (!e) return !1;
                    let i = (n = (r = getComputedStyle(e).getPropertyValue("--background-color").trim()).startsWith("#") ? 3 === (t = r.replace("#", "")).length ? {
                        red: parseInt(t[0] + t[0], 16),
                        green: parseInt(t[1] + t[1], 16),
                        blue: parseInt(t[2] + t[2], 16)
                    } : 6 === t.length || 8 === t.length ? {
                        red: parseInt(t.slice(0, 2), 16),
                        green: parseInt(t.slice(2, 4), 16),
                        blue: parseInt(t.slice(4, 6), 16)
                    } : null : (e => {
                        let t = e.match(/^rgba?\((.+)\)$/i);
                        if (!t) return null;
                        let r = t[1].replace(/\//g, " ").split(/[,\s]+/).filter(Boolean);
                        return r.length < 3 ? null : {
                            red: iw(r[0]),
                            green: iw(r[1]),
                            blue: iw(r[2])
                        }
                    })(r)) && Object.values(n).every(Number.isFinite) ? n : null;
                    return !!i && .5 > (({
                        red: e,
                        green: t,
                        blue: r
                    }) => (.299 * e + .587 * t + .114 * r) / 255)(i)
                };
            var ij = r(98361),
                iS = r.n(ij),
                iN = r(17309),
                iR = r.n(iN);

            function iA(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function iO(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var iP = r(28539),
                iL = r.n(iP);

            function iM({
                className: e,
                office: t,
                ref: r
            }) {
                let n = (0, c.useRef)(null),
                    a = t.address.replace("\n", "\n").trim().split("\n");
                return (0, i.jsxs)("div", {
                    ref: r || n,
                    className: l()(iL().officeContactInfo, e),
                    children: [t.location && (0, i.jsx)(d.A, {
                        as: "h5",
                        size: "heading-05",
                        disableTriggerInOnScroll: !1,
                        className: iL().location,
                        transitionInType: "splitWordsSlideInUp",
                        children: t.location
                    }), t.address && (0, i.jsx)("ul", {
                        className: l()(iL().address),
                        children: a.map(e => (0, i.jsx)(_.A, {
                            as: "li",
                            size: "body-standard",
                            disableTriggerInOnScroll: !1,
                            transitionInType: "splitWordsSlideInUp",
                            transitionOutType: "fadeOut",
                            children: e
                        }, e))
                    }), (0, i.jsx)("ul", {
                        children: t.emails.map(e => (0, i.jsx)(tF, {
                            email: e
                        }, e._uid))
                    })]
                })
            }

            function iz({
                isVisible: e,
                className: t,
                blok: r,
                ref: n
            }) {
                let s = (0, c.useRef)(null),
                    o = n || s,
                    {
                        imageModalRef: u
                    } = (0, c.useContext)(tA.Z),
                    m = (0, T.zW)(() => ({
                        ref: o,
                        refs: {
                            elementRef: o
                        },
                        setupTransitionInTimeline: iA,
                        setupTransitionOutTimeline: iO
                    }), []);
                (0, y.s)(m, e), F(o, r.use_accent_color);
                let p = r.offices.length;
                return (0, i.jsxs)("div", {
                    ref: o,
                    className: l()(iR().officeDetails, t),
                    ...(0, a.m)(r),
                    children: [(0, i.jsx)("div", {
                        className: l()(iR().officesContainer, iR().threeColumn, {
                            [iR().fourColumn]: p % 4 == 0 || p % 3 != 0 && p % 3 != 2,
                            [iR().hiddenDesktop]: p < 3
                        }),
                        children: r.offices.map(e => (0, i.jsx)(iM, {
                            office: e
                        }, e._uid))
                    }), (0, i.jsxs)("div", {
                        className: l()(iR().flexContainer, {
                            [iR().topSeparator]: p > 2
                        }),
                        children: [(0, i.jsxs)("div", {
                            className: l()(iR().leftContainer),
                            children: [(0, i.jsx)("div", {
                                className: l()(iR().leftOfficesContainer, {
                                    [iR().hiddenMobile]: p < 3,
                                    [iR().hidden]: p > 2
                                }),
                                children: r.offices.map(e => (0, i.jsx)(iM, {
                                    office: e
                                }, e._uid))
                            }), (0, i.jsxs)("div", {
                                className: iR().socialLinksContainer,
                                children: [r.global_emails ? .length > 0 && (0, i.jsx)("ul", {
                                    className: iR().emailsContainer,
                                    children: r.global_emails.map(e => (0, i.jsx)(tF, {
                                        email: e
                                    }, e._uid))
                                }), r.socials_title && (0, i.jsx)(d.A, {
                                    as: "h6",
                                    size: "label-small",
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "slideUpFadeIn",
                                    transitionOutType: "fadeOut",
                                    className: iR().socialsTitle,
                                    children: r.socials_title
                                }), r.socials_links.map(e => "image_link" === e.component ? (0, i.jsx)(ev.A, {
                                    textVariant: "body-standard",
                                    className: l()(iR().social),
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "splitLineRotateIn",
                                    label: e.title,
                                    onClick: () => u ? .current ? .open({
                                        image: e ? .image,
                                        title: e.title
                                    })
                                }, e._uid) : (0, i.jsx)(ev.A, {
                                    textVariant: "body-standard",
                                    className: l()(iR().social),
                                    link: {
                                        href: e ? .link.url || e ? .link.cached_url
                                    },
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "splitLineRotateIn",
                                    label: e.title,
                                    target: e ? .link.target
                                }, e._uid))]
                            })]
                        }), (0, i.jsx)("div", {
                            className: iR().textContainer,
                            children: (0, ex.XX)(r.description, {
                                nodeResolvers: {
                                    [ex.Uv]: e => (0, i.jsx)(_.A, {
                                        className: iR().description,
                                        as: "p",
                                        size: "body-large",
                                        transitionInType: "splitCharsWordsRichText",
                                        disableTriggerInOnScroll: !1,
                                        children: e
                                    })
                                },
                                markResolvers: {
                                    [ex.Dr]: (e, t) => "story" === t.linktype ? (0, i.jsx)(ty(), {
                                        href: `${t.href}#${t.anchor}`,
                                        passHref: !0,
                                        children: e
                                    }) : (0, i.jsx)("a", { ...t,
                                        children: e
                                    })
                                }
                            })
                        })]
                    })]
                })
            }
            var iH = r(64621),
                iB = r.n(iH);

            function iF(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function iE(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var iW = r(94838),
                iD = r.n(iW);

            function iU(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function i$(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var iX = r(77033),
                iV = r.n(iX);

            function iG(e, {
                imageHolderRef: t
            }) {
                t ? .current && e.add((0, h.HT)(t.current), 0), e.addLabel("startText", ">-0.2")
            }
            var iq = r(65364),
                iY = r(11607),
                iQ = r.n(iY),
                iJ = r(46786),
                iZ = r.n(iJ),
                iK = r(72785),
                i0 = r.n(iK);

            function i1(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function i2(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            let i5 = e => {
                let t = e.trim().split(/\s+/).length;
                return t % 3 == 0 ? 3 : t % 2 == 0 ? 2 : 1
            };
            var i3 = r(65253),
                i7 = r.n(i3);

            function i4(e, {
                titleRef: t,
                subtitleRef: r,
                descriptionRef: n,
                playButtonRef: i,
                mediaHolderRef: a,
                buttonRef: s
            }) {
                let l = (0, P.xy)(t),
                    o = (0, P.xy)(r),
                    c = (0, P.xy)(n),
                    u = (0, P.xy)(i),
                    d = (0, P.xy)(s);
                a ? .current && e.fromTo(a ? .current, {
                    scale: 1.1,
                    opacity: 0
                }, {
                    scale: 1,
                    ease: "Quad.easeOut",
                    duration: .6,
                    opacity: 1
                }), l && e.add(l.getTimeline("in"), "<-0.2"), o && e.add(o.getTimeline("in"), ">-0.2"), c && e.add(c.getTimeline("in"), "<0.2"), u && e.add(u.getTimeline("in"), "<0.2"), d && e.add(d.getTimeline("in"), "<0.2")
            }
            var i9 = r(43612),
                i8 = r.n(i9),
                i6 = r(799),
                ae = r.n(i6);

            function at(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function ar(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var an = r(8598),
                ai = r.n(an),
                aa = r(19444),
                as = r.n(aa);

            function al(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function ao(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }

            function ac({
                isVisible: e,
                className: t,
                blok: r,
                ref: n
            }) {
                let s = (0, c.useRef)(null),
                    u = n || s,
                    m = (0, eJ.o)(),
                    [p, g] = (0, c.useState)(!1),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    v = (0, t_.useRouter)(),
                    b = (0, eC.qJ)(!1),
                    I = (0, T.zW)(() => ({
                        ref: u,
                        refs: {
                            elementRef: u
                        },
                        setupTransitionInTimeline: al,
                        setupTransitionOutTimeline: ao
                    }), []);
                (0, y.s)(I, e);
                let C = (0, rS.TE)(r ? .link, v.locale),
                    w = (0, c.useCallback)(() => {
                        C && b && g(!0)
                    }, [b, C]),
                    k = (0, c.useCallback)(() => {
                        b && g(!1)
                    }, [b]),
                    j = (0, c.useCallback)(() => {
                        C && f ? .current && f.current.click()
                    }, [C]);
                return (0, c.useEffect)(() => {
                    p ? o.Ay.fromTo(x.current, {
                            yPercent: 100 * !!p
                        }, {
                            yPercent: 0,
                            duration: .5,
                            ease: "Power2.easeOut"
                        }) : o.Ay.to(x.current, {
                            yPercent: -100,
                            duration: .5,
                            ease: "Power2.easeOut"
                        }),
                        function(e, t = !0, r = 1.1) {
                            e ? .current && o.Ay.to(e.current, {
                                scale: t ? r : 1,
                                ease: "Quad.easeInOut",
                                duration: .5
                            })
                        }(h, p)
                }, [p]), (0, i.jsxs)("div", {
                    ref: u,
                    className: l()(as().solutionCard, t, {
                        [as().isButton]: C
                    }),
                    ...(0, a.m)(r),
                    onMouseLeave: k,
                    onMouseEnter: w,
                    onClick: j,
                    children: [(0, i.jsx)("div", {
                        className: as().imageContainer,
                        children: (0, i.jsx)(tO.A, {
                            ref: h,
                            src: r.image.filename,
                            srcDesktop: r.image.filename,
                            layout: "fill",
                            className: l()(as().image, "abs-fill"),
                            sizes: `${rK.K.MIN_768} 384px, ${rK.K.MIN_1920} 640px, 100vw`,
                            alt: r.image.alt,
                            innerTransition: {
                                type: "parallax",
                                config: {
                                    speed: -2
                                }
                            }
                        })
                    }), (0, i.jsxs)("div", {
                        className: as().textContainer,
                        children: [(0, i.jsx)("div", {
                            ref: x,
                            className: l()(as().backgroundHover, "abs-fill")
                        }), (0, i.jsx)("div", {
                            className: l()(as().titleHolder),
                            children: (0, i.jsx)(d.A, {
                                as: "h4",
                                size: "label-large",
                                disableTriggerInOnScroll: !1,
                                className: as().title,
                                transitionInType: b ? "splitLineRotateIn" : "none",
                                children: r.title
                            })
                        }), (0, i.jsxs)("div", {
                            className: l()(as().descriptionHolder),
                            children: [(0, i.jsx)(_.A, {
                                as: "p",
                                size: "body-standard",
                                transitionInType: !b || ai().safari ? "none" : "splitLineRotateIn",
                                disableTriggerInOnScroll: !1,
                                className: l()(as().description),
                                children: r.description
                            }), C && (0, i.jsx)(ev.A, {
                                ref: f,
                                textVariant: "button-label-small",
                                className: l()(as().link),
                                link: {
                                    href: C
                                },
                                label: m.globalSettings.view_solution,
                                disableTriggerInOnScroll: !1,
                                transitionInType: eC.CI ? "none" : "splitLineRotateIn",
                                isActive: p
                            })]
                        })]
                    })]
                })
            }
            var au = r(10050),
                ad = r.n(au);
            let a_ = {
                duration: .8,
                ease: "none",
                direction: "right",
                rightAlpha: .5,
                leftAlpha: 1
            };
            var am = r(88871);

            function ap(e, {
                textRef: t
            }) {
                t ? .current && e.add(function(e, t) {
                    let {
                        duration: r,
                        ease: n,
                        rightAlpha: i,
                        leftAlpha: a,
                        direction: s
                    } = { ...a_,
                        ...t
                    }, l = o.Ay.timeline();
                    return (0, am.Xf)(e, "lines", {
                        linesClass: ""
                    }, !1).forEach(e => l.fromTo(e, {
                        maskImage: `linear-gradient(to ${s}, rgba(0, 0, 0, ${a}) 0%, rgba(0, 0, 0, ${i}) 0%)`,
                        width: "fit-content"
                    }, {
                        duration: r,
                        ease: n,
                        maskImage: `linear-gradient(to ${s}, rgba(0, 0, 0, ${a}) 100%, rgba(0, 0, 0, ${i}) 100%)`
                    })), l
                }(t.current, {
                    rightAlpha: .375
                }))
            }

            function ag(e, {
                textRef: t
            }) {
                t && e.fromTo(t.current, {
                    transform: "translate3d(0, 25vh,0)"
                }, {
                    ease: "none",
                    transform: "translate3d(0,-15vh,0)"
                })
            }

            function af(e, {
                elementRef: t
            }) {
                t ? .current && e.add((0, S.m)(t.current, {
                    from: .1
                }))
            }
            var ah = r(89558),
                ax = r.n(ah),
                av = r(71519),
                ab = r.n(av);
            let ay = (e, t) => {
                let r = t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "");
                return e.city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").includes(r) || e.country.toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").includes(r) || (e.title || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036F]/g, "").includes(r)
            };

            function aT({
                className: e,
                title: t,
                search_placeholder: r,
                quick_links_label: n,
                quick_links: a,
                parentSetSearchValue: s,
                ref: u
            }) {
                let m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(o.Ay.timeline()),
                    x = (0, t_.useRouter)(),
                    [v, b] = (0, c.useState)(-1),
                    [y, T] = (0, c.useState)(""),
                    I = e => {
                        T(e), s ? .(e)
                    },
                    {
                        locationsList: C
                    } = (0, eJ.o)(),
                    w = [];
                return y && (w = C ? .filter(e => ay(e, y)).sort((e, t) => e.city.localeCompare(t.city)) || []), (0, nZ.A)("keydown", ({
                    key: e
                }) => {
                    let t = w.length || a.length;
                    "ArrowDown" === e && b(e => (e + 1) % t), "ArrowUp" === e && b(e => -1 === e ? t - 1 : e - 1), "Enter" === e && v > -1 && (y ? x.push(w[v].office_link.cached_url) : x.push(a[v].full_slug)), "Escape" === e && (b(-1), setTimeout(() => f.current ? .blur(), 0))
                }), (0, c.useEffect)(() => (document.activeElement === f.current && h.current.to(p.current, {
                    maxHeight: (g.current ? .scrollHeight || 0) + 80,
                    paddingBottom: 32 * (w.length > 0 || !y)
                }), () => {
                    h.current.clear()
                }), [y]), (0, i.jsxs)("div", {
                    ref: u || m,
                    className: l()(ab().locationSearchBar, e),
                    children: [(0, i.jsx)(_.A, {
                        transitionInType: "splitCharsSlideInUp",
                        className: l()(ab().label),
                        as: "p",
                        size: "label-large",
                        disableTriggerInOnScroll: !1,
                        children: t
                    }), (0, i.jsxs)("div", {
                        className: ab().searchContainer,
                        children: [(0, i.jsxs)("div", {
                            className: ab().searchBoxContainer,
                            children: [(0, i.jsx)("input", {
                                ref: f,
                                type: "text",
                                className: ab().searchBox,
                                placeholder: r,
                                value: y,
                                onChange: e => I(e.target.value),
                                onFocus: () => {
                                    h.current.to(p.current, {
                                        maxHeight: (g.current ? .scrollHeight || 0) + 80,
                                        paddingBottom: 32 * (w.length > 0 || !y),
                                        overwrite: !0
                                    })
                                },
                                onBlur: () => {
                                    setTimeout(() => {
                                        v < 0 && h.current.to(p.current, {
                                            maxHeight: 0,
                                            paddingBottom: 0,
                                            overwrite: !0
                                        })
                                    }, 0)
                                }
                            }), (0, i.jsx)(Z.A, {
                                name: "search",
                                className: l()(ab().searchIcon)
                            }), (0, i.jsx)(Z.A, {
                                name: "close",
                                className: l()(ab().crossIcon),
                                onClick: () => I(""),
                                role: "button"
                            })]
                        }), (0, i.jsx)("div", {
                            ref: p,
                            className: l()(ab().resultsContainer, {
                                [ab().empty]: y && 0 === w.length
                            }),
                            children: y ? (0, i.jsx)("ul", {
                                className: ab().results,
                                ref: g,
                                children: w.map((e, t) => (0, i.jsx)(ty(), {
                                    href: e.office_link.cached_url,
                                    onFocus: () => b(t),
                                    children: (0, i.jsx)(d.A, {
                                        className: l()(ab().result, {
                                            [ab().focused]: v === t
                                        }),
                                        as: "li",
                                        size: "heading-05",
                                        transitionInType: "none",
                                        disableTriggerInOnScroll: !1,
                                        dangerouslySetInnerHTML: {
                                            __html: e.city.replace(RegExp(y, "gi"), `<span style="color:black;">${y}</span>`)
                                        }
                                    })
                                }, e._uid))
                            }) : (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(_.A, {
                                    transitionInType: "splitCharsSlideInUp",
                                    className: l()(ab().quickLinksLabel),
                                    as: "p",
                                    size: "label-small",
                                    disableTriggerInOnScroll: !1,
                                    children: n
                                }), (0, i.jsx)("ul", {
                                    className: ab().results,
                                    ref: g,
                                    children: a.map((e, t) => (0, i.jsx)(ty(), {
                                        href: e.full_slug,
                                        onFocus: () => b(t),
                                        children: (0, i.jsx)(d.A, {
                                            className: l()(ab().quickLink, {
                                                [ab().focused]: v === t
                                            }),
                                            as: "li",
                                            size: "heading-05",
                                            transitionInType: "splitCharsSlideInUp",
                                            disableTriggerInOnScroll: !1,
                                            children: e.content.title
                                        })
                                    }, e.uuid))
                                })]
                            })
                        })]
                    })]
                })
            }
            var aI = r(12509),
                aC = r.n(aI),
                aw = r(93282),
                ak = r.n(aw);

            function aj(e, {
                headingRef: t,
                lineRef: r,
                iconRef: n
            }) {
                let i = (0, P.xy)(t);
                r ? .current && e.fromTo(r.current, {
                    scaleX: 0,
                    transformOrigin: "left center"
                }, {
                    duration: .5,
                    ease: "Quad.easeInOut",
                    scaleX: 1
                }), n ? .current && e.fromTo(n.current, {
                    opacity: 0,
                    scale: .4
                }, {
                    scale: 1,
                    opacity: 1,
                    ease: "Quad.easeInOut",
                    clearProps: "scale, opacity",
                    duration: .4
                }, .3), i && e.add(i.getTimeline("in"), 0)
            }

            function aS(e, t, r, n = !1) {
                o.Ay.to(e.current, {
                    height: t ? e.current.scrollHeight : 0,
                    duration: .6 * !n,
                    ease: "Quad.easeInOut",
                    clearProps: t ? "height" : "",
                    onComplete: () => {
                        r && r()
                    }
                })
            }

            function aN(e, {
                backgroundRef: t,
                iconRef: r
            }) {
                t ? .current && e.fromTo(t.current, {
                    scaleY: 0
                }, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    scaleY: 1
                }), r ? .current && e.fromTo(r.current, {
                    rotate: 0,
                    scale: 1
                }, {
                    duration: .4,
                    ease: "Power2.easeOut",
                    rotate: 90,
                    scale: 1
                }, 0)
            }

            function aR(e, {
                backgroundRef: t,
                iconRef: r
            }) {
                t ? .current && e.to(t.current, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    scaleY: 0
                }), r ? .current && e.to(r.current, {
                    duration: .4,
                    ease: "Power2.easeOut",
                    rotate: 0
                }, 0)
            }

            function aA(e, {
                headingRef: t,
                lineRef: r,
                index: n
            }) {
                let i = (0, P.xy)(t);
                i && e.add(i.getTimeline("in"), .05 * (n || 0)), r ? .current && e.fromTo(r.current, {
                    scaleX: 0,
                    transformOrigin: "left center"
                }, {
                    duration: 1,
                    ease: "Quad.easeInOut",
                    scaleX: 1
                })
            }

            function aO() {}

            function aP(e, {
                backgroundRef: t,
                headingRef: r
            }) {
                t ? .current && e.fromTo(t.current, {
                    scaleY: 0
                }, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    scaleY: 1
                }), r ? .current && e.fromTo(r.current, {
                    x: 0,
                    y: 0
                }, {
                    duration: .4,
                    ease: "Power2.easeOut",
                    x: 20
                }, 0)
            }

            function aL(e, {
                backgroundRef: t,
                headingRef: r
            }) {
                t ? .current && e.to(t.current, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    scaleY: 0
                }), r ? .current && e.to(r.current, {
                    duration: .4,
                    ease: "Power2.easeOut",
                    x: 0
                }, 0)
            }

            function aM({
                ref: e,
                className: t,
                isOpen: r,
                location: n,
                index: a,
                iconColor: s
            }) {
                let o = (0, c.useRef)(null),
                    u = e || o,
                    _ = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, T.zW)(() => ({
                        ref: u,
                        refs: {
                            elementRef: u,
                            headingRef: p,
                            lineRef: m,
                            index: a
                        },
                        setupTransitionInTimeline: aA,
                        setupTransitionOutTimeline: aO
                    }), []),
                    f = (0, T.zW)(() => ({
                        refs: {
                            backgroundRef: _,
                            headingRef: p
                        },
                        setupTransitionInTimeline: aP,
                        setupTransitionOutTimeline: aL
                    }), []);
                return (0, c.useEffect)(() => {
                    r ? g.transitionIn() : g.transitionOut()
                }, [r]), (0, i.jsx)("li", {
                    className: t,
                    onMouseEnter: () => f.transitionIn(),
                    onMouseLeave: () => f.transitionOut(),
                    style: s ? {
                        "--accent-color": s
                    } : void 0,
                    children: (0, i.jsxs)(ty(), {
                        href: n.office_link.cached_url,
                        className: aC().locationItemLink,
                        children: [(0, i.jsx)("div", {
                            ref: _,
                            className: l()(aC().background, "abs-fill")
                        }), (0, i.jsx)("span", {
                            ref: m,
                            className: aC().listLine
                        }), (0, i.jsx)(d.A, {
                            ref: p,
                            as: "h4",
                            size: "heading-04",
                            transitionInType: "slideUpFadeIn",
                            children: n.city
                        })]
                    })
                })
            }

            function az({
                className: e,
                region: t,
                iconColor: r,
                link: n,
                region_link_label: a,
                ref: s
            }) {
                let u = (0, c.useRef)(null),
                    _ = s || u,
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    v = (0, eC.qJ)(!1),
                    b = (0, c.useRef)(null),
                    [y, I] = rX(!1),
                    {
                        locationsList: C
                    } = (0, eJ.o)();
                (0, T.mt)({
                    scroll: {
                        trigger: _,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: _,
                            headingRef: h,
                            lineRef: b,
                            iconRef: p
                        },
                        setupTransitionInTimeline: aj
                    })
                });
                let {
                    start: w
                } = (0, rh.Z)(() => {
                    ej().refresh()
                }, 0, !1);
                (0, eZ.A)(() => {
                    m.current && aS(m, y, w, !1)
                }, [y]), (0, rf.A)(() => {
                    !y && m.current && aS(m, y, w, !0)
                });
                let k = (0, T.zW)(() => ({
                    refs: {
                        backgroundRef: x,
                        headingRef: h,
                        iconRef: p
                    },
                    setupTransitionInTimeline: aN,
                    setupTransitionOutTimeline: aR
                }), []);
                (0, c.useEffect)(() => {
                    var e;
                    let t;
                    y && k.transitionOut(), e = {
                        iconRef: p,
                        iconPlusRef: g,
                        iconMinusRef: f
                    }, t = o.Ay.timeline(), e.iconRef && (t.to(e.iconRef.current, {
                        rotation: 180 * !!y,
                        duration: .4,
                        ease: "Power2.easeOut"
                    }), e.iconRef.current ? .firstElementChild ? .firstElementChild && t.to(e.iconRef.current.firstElementChild.firstElementChild, {
                        morphSVG: y ? e.iconMinusRef.current ? .firstElementChild ? .firstElementChild : e.iconPlusRef.current ? .firstElementChild ? .firstElementChild,
                        duration: .05,
                        ease: "none"
                    }, "<"))
                }, [y]);
                let j = (0, c.useCallback)(() => {
                        !y && v && k.transitionIn()
                    }, [k, y, v]),
                    S = (0, c.useCallback)(() => {
                        !y && v && k.transitionOut()
                    }, [k, y, v]);
                return (0, i.jsxs)("div", {
                    ref: _,
                    className: e,
                    style: r ? {
                        "--accent-color": r
                    } : void 0,
                    children: [(0, i.jsxs)("button", {
                        type: "button",
                        className: l()(aC().container, "button"),
                        onClick: I,
                        onMouseEnter: j,
                        onMouseLeave: S,
                        children: [(0, i.jsx)("div", {
                            ref: x,
                            className: l()(aC().background, "abs-fill")
                        }), (0, i.jsx)("span", {
                            ref: b,
                            className: aC().line
                        }), (0, i.jsxs)("div", {
                            className: aC().regionContainer,
                            children: [(0, i.jsx)(d.A, {
                                as: "h2",
                                size: "heading-01",
                                className: l()(aC().region),
                                ref: h,
                                transitionInType: "splitCharsSlideInUp",
                                children: t
                            }), (0, i.jsx)(Z.A, {
                                ref: g,
                                name: "plus",
                                className: aC().hidden
                            }), (0, i.jsx)(Z.A, {
                                ref: f,
                                name: "minus",
                                className: aC().hidden
                            }), (0, i.jsx)(Z.A, {
                                ref: p,
                                name: "plus",
                                className: aC().icon
                            })]
                        }), n ? .cached_url && (0, i.jsx)(ev.A, {
                            textVariant: "label-small",
                            className: l()(aC().link),
                            link: {
                                href: n.cached_url
                            },
                            label: a,
                            disableTriggerInOnScroll: !1,
                            transitionInType: "splitCharsSlideInUp",
                            target: n.target,
                            onClick: e => e ? .stopPropagation()
                        })]
                    }), (0, i.jsx)("ul", {
                        ref: m,
                        className: l()(aC().list),
                        children: C ? .filter(e => e.region.includes(t)).sort((e, t) => e.city.localeCompare(t.city)).map((e, t) => (0, i.jsx)(aM, {
                            className: l()(aC().cityContainer),
                            location: e,
                            isOpen: y,
                            index: t
                        }, e._uid))
                    })]
                })
            }
            o.Ay.registerPlugin(ak());
            var aH = r(92284),
                aB = r.n(aH);

            function aF(e, {
                titleRef: t,
                subtitleRef: r,
                backgroundRef: n
            }) {
                let i = (0, P.xy)(t),
                    a = (0, P.xy)(r);
                n ? .current && e.add((0, S.m)(n.current), 0), i && a && (e.add(i.getTimeline("in"), 0), e.add(a.getTimeline("in"), 0))
            }

            function aE(e, {
                titleRef: t
            }) {
                let r = (0, P.xy)(t);
                r && e.add(r.getTimeline("out"), 0)
            }

            function aW(e, {
                titleHolderRef: t
            }) {
                t ? .current && e.fromTo(t.current, {
                    transform: "translate3d(0, 0vh,0)"
                }, {
                    duration: 1.5,
                    ease: "none",
                    transform: "translate3d(0, -14vh,0)"
                }).to(t.current, {
                    duration: .3,
                    ease: "Power1.easeIn",
                    transform: "translate3d(0, -70vh,0)"
                })
            }

            function aD(e, {
                subtitleHolderRef: t
            }) {
                t ? .current && e.fromTo(t.current, {
                    transform: "translate3d(0, 0vh,0)"
                }, {
                    duration: 1,
                    ease: "none",
                    transform: "translate3d(0, -4vh,0)"
                }).to(t.current, {
                    duration: .2,
                    opacity: 0,
                    ease: "Power1.easeIn",
                    transform: "translate3d(0, -5vh,0)"
                })
            }
            var aU = r(50049);

            function a$({
                blok: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(null),
                    s = t.current ? .elementRef || n,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    _ = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(!1),
                    f = (0, T.zW)(() => ({
                        ref: s,
                        refs: {
                            titleRef: o,
                            subtitleRef: _,
                            backgroundRef: p
                        },
                        setupTransitionInTimeline: aF,
                        setupTransitionOutTimeline: aE
                    }), []),
                    h = (0, c.useRef)((0, w.A)(aW, {
                        titleHolderRef: u
                    })),
                    x = (0, c.useRef)((0, w.A)(aD, {
                        subtitleHolderRef: m
                    })),
                    v = (0, c.useCallback)((e, t) => {
                        t === r.slideIndex && (h.current.progress((0, aU.ix)(e, 0, 100, 0, 110)), x.current.progress((0, aU.ix)(e, 0, 50, 0, 100))), e > 0 && e < 1 && !g.current ? (g.current = !0, f.transitionIn()) : (e <= 0 || e >= 1) && g.current && (g.current = !1, f.transitionOut())
                    }, [r.slideIndex]);
                return (0, c.useImperativeHandle)(t, () => ({
                    setProgress: v,
                    elementRef: s
                }), [v, s]), (0, i.jsxs)("div", {
                    ref: s,
                    style: {
                        "--foreground-color": r.config.foregroundColor
                    },
                    className: l()(aB().servicePowerSlideBackground, r.className, "grid-gutter"),
                    ...(0, a.m)(e),
                    children: [(0, i.jsx)("div", {
                        style: {
                            "--background-color": r.config.backgroundColor
                        },
                        ref: p,
                        className: l()(aB().background, "abs-fill")
                    }), (0, i.jsx)("div", {
                        ref: u,
                        className: l()(aB().titleContent),
                        children: (0, i.jsx)(d.A, {
                            ref: o,
                            as: "h2",
                            size: "heading-01",
                            className: l()(aB().title),
                            disableTriggerInOnScroll: !0,
                            transitionOutType: "splitCharsSlideOutUp",
                            transitionOnMount: !0,
                            children: e.background_title ? .split(" ").map(e => (0, i.jsx)("span", {
                                className: l()(aB().line, "text-outline"),
                                children: e
                            }, e))
                        })
                    }), (0, i.jsx)("div", {
                        ref: m,
                        className: l()(aB().textContent),
                        children: e.background_subtitle && (0, i.jsx)(d.A, {
                            ref: _,
                            transitionInType: "splitWordsSlideInUp",
                            transitionOutType: "fadeOut",
                            as: "h4",
                            size: "heading-05",
                            className: l()(aB().title),
                            children: e.background_subtitle
                        })
                    })]
                })
            }
            var aX = r(14525),
                aV = r.n(aX);

            function aG(e, {
                titleRef: t,
                descriptionRef: r
            }) {
                let n = (0, P.xy)(t),
                    i = (0, P.xy)(r);
                n && e.add(n.getTimeline("in"), 0), i && e.add(i.getTimeline("in"), .2)
            }

            function aq(e, {
                titleRef: t,
                descriptionRef: r
            }) {
                let n = (0, P.xy)(t),
                    i = (0, P.xy)(r);
                n && e.add(n.getTimeline("out"), 0), i && e.add(i.getTimeline("out"), 0)
            }

            function aY(e, {
                textContentRef: t
            }) {
                t ? .current && e.fromTo(t.current, {
                    transform: "translate3d(0, 20vh,0)"
                }, {
                    duration: 1,
                    ease: "Power1.easeOut",
                    transform: "translate3d(0, 0vh,0)"
                }, .5).to(t.current, {
                    duration: .3,
                    ease: "Power1.easeIn",
                    transform: "translate3d(0, -90vh,0)"
                }, 1.5).to(t.current, {
                    opacity: 0,
                    duration: .2,
                    ease: "Power1.easeIn"
                }, 1.5)
            }

            function aQ({
                blok: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(null),
                    s = t.current ? .elementRef || n,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(!1),
                    g = (0, T.zW)(() => ({
                        ref: s,
                        refs: {
                            titleRef: o,
                            descriptionRef: u
                        },
                        setupTransitionInTimeline: aG,
                        setupTransitionOutTimeline: aq
                    }), []),
                    f = (0, c.useRef)((0, w.A)(aY, {
                        titleRef: o,
                        descriptionRef: u,
                        textContentRef: m
                    })),
                    h = (0, c.useCallback)((e, t) => {
                        t === r.slideIndex && (f.current.progress(e), e > .5 && e < 1 && !p.current ? (p.current = !0, g.transitionIn()) : (e <= .5 || e >= 1) && p.current && (p.current = !1, g.transitionOut()))
                    }, [r.slideIndex]);
                return (0, c.useImperativeHandle)(t, () => ({
                    setProgress: h,
                    elementRef: s
                }), [h, s]), (0, i.jsx)("div", {
                    ref: s,
                    style: {
                        "--foreground-color": r.config.foregroundColor
                    },
                    className: l()(aV().servicePowerSlide, r.className, "grid-gutter"),
                    ...(0, a.m)(e),
                    children: (0, i.jsxs)("div", {
                        ref: m,
                        className: l()(aV().textContent),
                        children: [e.title && (0, i.jsx)(d.A, {
                            ref: o,
                            transitionInType: "splitWordsSlideInUp",
                            transitionOutType: "fadeOut",
                            as: "h4",
                            size: "heading-05",
                            className: l()(aV().title),
                            children: e.title
                        }), e.description && (0, i.jsx)(_.A, {
                            ref: u,
                            transitionInType: "splitLineRotateIn",
                            transitionOutType: "fadeOut",
                            as: "p",
                            size: "body-standard",
                            className: l()(aV().description),
                            children: e.description
                        })]
                    })
                })
            }
            var aJ = r(78660),
                aZ = r(45302),
                aK = r(59341),
                a0 = r(98070),
                a1 = r(94892),
                a2 = r(71384),
                a5 = r(14796);
            let a3 = ({
                    color: e,
                    position: t,
                    rotation: r,
                    scale: n
                }) => {
                    let {
                        nodes: a
                    } = (0, a2.p)("/assets/3d/Crane-draco.glb"), s = (0, c.useRef)(null), l = (0, c.useRef)(null), o = new a5.MeshPhongMaterial({
                        color: e || "#070707",
                        shininess: 7
                    });
                    return (0, i.jsxs)("group", {
                        ref: s,
                        position: t,
                        rotation: r,
                        scale: n,
                        dispose: null,
                        children: [(0, i.jsx)("mesh", {
                            ref: l,
                            geometry: a.crane.geometry,
                            material: o,
                            position: [-0, -3, 0],
                            scale: [.5, .5, .5],
                            rotation: [0, 0, 0],
                            castShadow: !0
                        }), (0, i.jsx)("meshStandardMaterial", {
                            color: "#003300",
                            attach: "material"
                        })]
                    })
                },
                a7 = ({
                    color: e,
                    position: t,
                    rotation: r,
                    scale: n
                }) => {
                    let {
                        nodes: a
                    } = (0, a2.p)("/assets/3d/Dragon-draco.glb"), s = (0, c.useRef)(null), l = (0, c.useRef)(null), o = new a5.MeshPhongMaterial({
                        color: e || "#030303",
                        shininess: 7
                    });
                    return (0, i.jsxs)("group", {
                        ref: s,
                        position: t,
                        rotation: r,
                        scale: n,
                        dispose: null,
                        children: [(0, i.jsx)("mesh", {
                            ref: l,
                            geometry: a.dragon.geometry,
                            material: o,
                            position: [0, 0, 0],
                            scale: [.5, .5, .5],
                            rotation: [0, 0, 0],
                            castShadow: !0
                        }), (0, i.jsx)("meshStandardMaterial", {
                            color: "#003300",
                            attach: "material"
                        })]
                    })
                },
                a4 = ({
                    color: e,
                    position: t,
                    rotation: r,
                    scale: n
                }) => {
                    let {
                        nodes: a
                    } = (0, a2.p)("/assets/3d/Fox-draco.glb"), s = (0, c.useRef)(null), l = (0, c.useRef)(null), o = new a5.MeshPhongMaterial({
                        color: e || "#070707",
                        shininess: 7
                    });
                    return (0, i.jsxs)("group", {
                        ref: s,
                        position: t,
                        rotation: r,
                        scale: n,
                        dispose: null,
                        children: [(0, i.jsx)("mesh", {
                            ref: l,
                            geometry: a.fox.geometry,
                            material: o,
                            position: [0, 0, 0],
                            scale: [2, 2, 2],
                            rotation: [0, 0, 0],
                            castShadow: !0
                        }), (0, i.jsx)("meshStandardMaterial", {
                            color: "#003300",
                            attach: "material"
                        })]
                    })
                },
                a9 = ({
                    color: e,
                    position: t,
                    rotation: r,
                    scale: n
                }) => {
                    let a = (0, c.useRef)(null),
                        s = (0, c.useRef)(null),
                        l = new a5.MeshPhongMaterial({
                            color: e || "#030303",
                            shininess: 7
                        }),
                        {
                            nodes: o
                        } = (0, a2.p)("/assets/3d/Koi-draco.glb");
                    return (0, i.jsx)("group", {
                        ref: a,
                        position: t,
                        rotation: r,
                        scale: n,
                        dispose: null,
                        children: (0, i.jsx)("mesh", {
                            ref: s,
                            material: l,
                            position: [0, 0, 0],
                            scale: [.9, .9, .9],
                            rotation: [0, 0, 0],
                            castShadow: !0,
                            receiveShadow: !0,
                            geometry: o.koi.geometry,
                            children: (0, i.jsx)("mesh", {
                                geometry: o.sphere.geometry,
                                material: l,
                                position: [.65, 1.08, -2.24]
                            })
                        })
                    })
                };

            function a8({
                slides: e,
                ref: t
            }) {
                let r = (0, c.useRef)(0),
                    n = (0, c.useRef)(0),
                    a = (0, c.useRef)(null),
                    s = (0, c.useRef)(void 0),
                    l = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    d = new a5.Color,
                    _ = (0, c.useRef)(void 0),
                    m = (0, c.useRef)([]),
                    p = (0, c.useRef)([]),
                    g = (0, c.useRef)([]),
                    f = (0, c.useCallback)(e => {
                        r.current = e
                    }, []);
                (0, c.useEffect)(() => {
                    e.forEach((e, t) => {
                        m.current[t] && (m.current[t].position.y = 20)
                    })
                }, [e]), (0, c.useEffect)(() => {
                    l.current && (l.current.target.position.set(0, 0, -20), l.current.target.updateMatrixWorld()), u.current && u.current.target.position.set(0, 0, -20)
                }, [l, u]);
                let h = (0, c.useCallback)(e => {
                        if (n.current !== e) {
                            let t = n.current;
                            n.current = e, a.current && m.current[n.current] && o.Ay.timeline({}).to(m.current[e].rotation, {
                                y: t > n.current ? "+=3" : "-=3",
                                duration: 1,
                                ease: "Power2.easeInOut"
                            }, 0)
                        }
                    }, []),
                    x = (0, c.useCallback)(e => {
                        g.current = e
                    }, []);
                return (0, c.useImperativeHandle)(t, () => ({
                    setProgress: f,
                    setProgressData: x,
                    setCurrentSlide: h
                }), [x, f, h]), (0, aJ.D)(() => {
                    if (r.current > 0 && r.current < 1) {
                        if (a.current && g.current[0] ? .progress) {
                            let e = m.current[n.current],
                                {
                                    progress: t
                                } = g.current[n.current],
                                r = 0;
                            t >= .3 && (r = (0, aU.ix)(t, .3, 1, 0, 1)), r < .3 && (e.position.y = (0, aU.ix)(r, 0, .3, -7, -.6), e.position.z = (0, aU.ix)(r, 0, .3, 20, 3), e.rotation.y = (0, aU.ix)(r, 0, .3, 0, 1.5 * Math.PI)), r >= .3 && r <= .7 && (e.position.y = (0, aU.ix)(r, .3, .7, -.61, .6), e.position.z = (0, aU.ix)(r, .3, .7, 3, -3), e.rotation.y = (0, aU.ix)(r, .3, .7, 1.5 * Math.PI, 2 * Math.PI)), r > .7 && (e.position.y = (0, aU.ix)(r, .7, 1, .6, 12), e.position.z = (0, aU.ix)(r, .7, 1, -3, -10), e.rotation.y = (0, aU.ix)(r, .7, 1, 2 * Math.PI, 3.5 * Math.PI))
                        }
                        _.current && _.current ? .color.lerp(d.set(e[n.current].backgroundColor), .05), s.current && s.current.r.toFixed(6) !== d.r.toFixed(6) && s.current ? .lerp(d.set(e[n.current].backgroundColor), .05)
                    }
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(c.Suspense, {
                        fallback: null,
                        children: [(0, i.jsx)(aK.u, {
                            fov: 30,
                            position: [0, 0, 20],
                            makeDefault: !0
                        }), (0, i.jsx)("ambientLight", {
                            intensity: .1
                        }), (0, i.jsx)("directionalLight", {
                            position: [-20, 20, 20],
                            intensity: .4
                        }), (0, i.jsx)("directionalLight", {
                            position: [-20, -20, -20],
                            intensity: .2,
                            color: d
                        }), (0, i.jsx)("pointLight", {
                            position: [0, 0, 5],
                            distance: 5,
                            intensity: 1,
                            color: d
                        }), (0, i.jsx)("pointLight", {
                            position: [14, 10, -5],
                            distance: 200,
                            intensity: 1.8
                        }), (0, i.jsx)("group", {
                            ref: a,
                            position: [0, 1, 0],
                            rotation: [0, 0, 0],
                            children: e.map((e, t) => (0, i.jsx)("group", {
                                children: (0, i.jsx)("group", {
                                    position: [0, -10, 0],
                                    ref: e => {
                                        m.current[t] = e
                                    },
                                    children: (0, i.jsx)("group", {
                                        ref: e => {
                                            p.current[t] = e
                                        },
                                        children: (0, i.jsx)(a0.n, {
                                            position: [0, 0, 0],
                                            speed: 2,
                                            rotationIntensity: .2,
                                            floatIntensity: 1.5,
                                            children: {
                                                kitsune: (0, i.jsx)(a4, {
                                                    position: [1.5, -3, 0],
                                                    rotation: [0, Math.PI / 3, 0],
                                                    color: e.animalColor
                                                }),
                                                dragon: (0, i.jsx)(a7, {
                                                    position: [0, 0, 0],
                                                    color: e.animalColor
                                                }),
                                                koi: (0, i.jsx)(a9, {
                                                    scale: [.8, .8, .8],
                                                    position: [0, 0, 0],
                                                    rotation: [Math.PI / 10, 0, 0],
                                                    color: e.animalColor
                                                }),
                                                crane: (0, i.jsx)(a3, {
                                                    position: [0, 3, 0],
                                                    scale: [.8, .8, .8],
                                                    color: e.animalColor
                                                })
                                            }[e.id]
                                        })
                                    })
                                })
                            }, e.id.concat("-animal")))
                        }), (0, i.jsx)(a1._, {
                            position: [0, -2.5, 0],
                            resolution: 1024,
                            opacity: .25,
                            blur: .7,
                            width: 100,
                            height: 100,
                            far: 10,
                            smooth: !0,
                            scale: 1
                        })]
                    })
                })
            }
            var a6 = r(76901),
                se = r.n(a6),
                st = r(11588);

            function sr({
                slides: e,
                className: t,
                ref: r
            }) {
                let n = (0, c.useRef)(null),
                    a = r.current ? .elementRef || n,
                    s = (0, c.useRef)(null),
                    o = (0, c.useRef)(0),
                    u = (0, c.useCallback)(e => {
                        s ? .current && s.current.setProgress(e)
                    }, []),
                    d = (0, c.useCallback)(e => {
                        o.current = e, s ? .current && s.current.setCurrentSlide(e)
                    }, []),
                    _ = (0, c.useCallback)(e => {
                        s ? .current && s.current.setProgressData(e)
                    }, []);
                (0, c.useImperativeHandle)(r, () => ({
                    setProgress: u,
                    setCurrentSlide: d,
                    setProgressData: _,
                    elementRef: a
                }), [_, a, u, d]);
                let m = (0, c.useRef)(null),
                    p = (0, z.B)(m, {
                        threshold: [0, 1]
                    }),
                    [g] = (0, st.p)();
                return (0, i.jsx)("div", {
                    ref: a,
                    className: l()(se().servicePowerWebgl, t),
                    children: (0, i.jsx)("div", {
                        className: l()(se().isInViewWrap, t),
                        ref: m,
                        children: (0, i.jsxs)(aZ.Hl, {
                            shadows: !0,
                            children: [g || !p && (0, i.jsx)(() => (0, aJ.D)(() => null, 1e3), {}), (0, i.jsx)(a8, {
                                ref: s,
                                slides: e
                            })]
                        })
                    })
                })
            }
            let sn = {
                kitsune: {
                    path: "path/to/model?",
                    foregroundColor: "#fff",
                    animalColor: "#ECE7C4",
                    backgroundColor: "#000"
                },
                dragon: {
                    path: "path/to/model?",
                    foregroundColor: "#000000",
                    animalColor: "#000000",
                    backgroundColor: "#fff"
                },
                koi: {
                    path: "path/to/model?",
                    foregroundColor: "#fff",
                    animalColor: "#ECE7C4",
                    backgroundColor: "#000"
                },
                crane: {
                    path: "path/to/model?",
                    foregroundColor: "#000000",
                    animalColor: "#000000",
                    backgroundColor: "#fff"
                }
            };
            var si = r(51897),
                sa = r.n(si);

            function ss(e, {
                elementRef: t
            }) {
                t ? .current && e.fromTo(t.current, {}, {})
            }
            var sl = r(42820),
                so = r.n(sl);

            function sc(e, {
                elementRef: t
            }) {
                t ? .current && e.add((0, S.m)(t.current), 0)
            }

            function su(e, {
                servicesRef: t
            }) {
                e.addLabel("slide_-1"), t && t ? .current ? .forEach((t, r) => {
                    let n = (0, P.xy)(t);
                    n && (e.add(n.getTimeline("in"), ">"), e.addLabel(`slide_${r}`), e.add(n.getTimeline("out"), ">"))
                })
            }

            function sd(e, {
                imageContainers: t
            }) {
                e.addLabel("slide_-1"), t ? .current && t ? .current.forEach((t, r) => {
                    e.fromTo(t.current, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: "Quad.easeInOut",
                        duration: 1
                    }, "<"), e.addLabel(`slide_${r}`), e.to(t.current, {
                        opacity: 0,
                        ease: "Quad.easeInOut",
                        duration: 1
                    }, ">")
                })
            }

            function s_(e, {
                lottieRef: t
            }) {
                e.addLabel("slide_0");
                let r = {
                    progress: 0
                };
                if (t ? .current ? .elementRef ? .current)
                    for (let n = 0; n < 5; n++) e.to(r, {
                        progress: (n + 1) / 5,
                        ease: "none",
                        duration: 2,
                        onUpdate: () => {
                            t ? .current ? .setProgress(r.progress)
                        }
                    }, "<"), e.addLabel(`slide_${n+1}`), e.to(r, {
                        progress: (n - 1) / 5,
                        ease: "none",
                        duration: 2
                    }, ">")
            }
            var sm = r(14048),
                sp = r.n(sm);

            function sg(e, {
                elementRef: t,
                indexRef: r,
                titleRef: n,
                subtitleRef: i,
                descriptionRef: a,
                linkRef: s
            }) {
                let l = (0, P.xy)(r),
                    c = (0, P.xy)(n),
                    u = (0, P.xy)(i),
                    d = (0, P.xy)(a),
                    _ = (0, P.xy)(s);
                t ? .current && e.to(t.current, {
                    opacity: 1,
                    pointerEvents: "all",
                    onComplete: () => {
                        o.Ay.set(t.current, {
                            pointerEvents: "all"
                        })
                    },
                    onReverseComplete: () => {
                        o.Ay.set(t.current, {
                            pointerEvents: "none"
                        })
                    }
                }), l && e.add(l.getTimeline("in"), 0), c && e.add(c.getTimeline("in"), 0), u && e.add(u.getTimeline("in"), .1), d && e.add(d.getTimeline("in"), .2), _ && e.add(_.getTimeline("in"), .3)
            }

            function sf(e, {
                elementRef: t,
                indexRef: r,
                titleRef: n,
                subtitleRef: i,
                descriptionRef: a,
                linkRef: s
            }) {
                let l = (0, P.xy)(r),
                    c = (0, P.xy)(n),
                    u = (0, P.xy)(i),
                    d = (0, P.xy)(a),
                    _ = (0, P.xy)(s);
                t ? .current && e.to(t.current, {
                    clearProps: "pointerEvents",
                    opacity: 0,
                    onComplete: () => {
                        o.Ay.set(t.current, {
                            clearProps: "pointerEvents"
                        })
                    },
                    onReverseComplete: () => {
                        o.Ay.set(t.current, {
                            pointerEvents: "all"
                        })
                    }
                }), l && e.add(l.getTimeline("out"), 0), c && e.add(c.getTimeline("out"), 0), u && e.add(u.getTimeline("out"), 0), d && e.add(d.getTimeline("out"), 0), _ && e.add(_.getTimeline("out"), 0)
            }

            function sh({
                isVisible: e,
                className: t,
                blok: r,
                index: n,
                ref: s
            }) {
                let o = (0, c.useRef)(null),
                    u = s || o,
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, eJ.o)(),
                    v = (0, t_.useRouter)(),
                    b = (0, T.zW)(() => ({
                        ref: u,
                        refs: {
                            elementRef: u,
                            indexRef: m,
                            titleRef: p,
                            subtitleRef: g,
                            descriptionRef: f,
                            linkRef: h
                        },
                        setupTransitionInTimeline: sg,
                        setupTransitionOutTimeline: sf
                    }), []);
                (0, y.s)(b, e);
                let I = (0, rS.TE)(r ? .link, v.locale);
                return (0, i.jsxs)("div", {
                    ref: u,
                    className: l()(sp().service, t),
                    ...(0, a.m)(r),
                    children: [(0, i.jsx)(d.A, {
                        as: "h5",
                        size: "heading-05",
                        className: l()(sp().index),
                        disableTriggerInOnScroll: !0,
                        transitionOutType: eC.CI ? "splitWordsSlideOutUp" : "splitCharsSlideOutUp",
                        transitionInType: eC.CI ? "splitWordsSlideInUp" : "splitCharsSlideInUp",
                        ref: m,
                        children: `${n}`.padStart(2, "0")
                    }), (0, i.jsx)(d.A, {
                        as: "h2",
                        size: "heading-02",
                        className: l()(sp().title),
                        disableTriggerInOnScroll: !0,
                        transitionOutType: eC.CI ? "splitWordsSlideOutUp" : "splitCharsSlideOutUp",
                        transitionInType: eC.CI ? "splitWordsSlideInUp" : "splitCharsSlideInUp",
                        ref: p,
                        children: r.title
                    }), (0, i.jsx)(d.A, {
                        as: "h3",
                        size: "label-small",
                        className: l()(sp().subtitle),
                        disableTriggerInOnScroll: !0,
                        transitionOutType: eC.CI ? "splitWordsSlideOutUp" : "splitCharsSlideOutUp",
                        transitionInType: eC.CI ? "splitWordsSlideInUp" : "splitCharsSlideInUp",
                        ref: g,
                        children: r.subtitle
                    }), (0, i.jsx)(_.A, {
                        as: "p",
                        size: "body-standard",
                        className: l()(sp().description),
                        disableTriggerInOnScroll: !0,
                        transitionInType: "splitWordsSlideInUp",
                        transitionOutType: "splitWordsSlideOutUp",
                        ref: f,
                        children: r.description
                    }), I && (0, i.jsx)("div", {
                        children: (0, i.jsx)(ez.A, {
                            ref: h,
                            className: l()(sp().button),
                            link: {
                                href: I
                            },
                            label: x.globalSettings.view_service,
                            disableTriggerInOnScroll: !0
                        })
                    })]
                })
            }
            var sx = r(88959),
                sv = r.n(sx),
                sb = r(95328);

            function sy(e, {
                carouselRef: t,
                marginsRef: r,
                carouselItemsRef: n,
                imagesRef: i,
                imageScale: a = 1.15
            }) {
                let s = o.Ay.quickSetter(t.current, eC.xl && ai().safari && 15.2 > parseFloat(`${ai().version}`) ? "left" : "x", "px"),
                    l = [];
                if (i.current ? .forEach(e => {
                        l.push(o.Ay.quickSetter(e, "x", "%"))
                    }), t ? .current) {
                    let c = 0,
                        {
                            scrollWidth: u,
                            clientWidth: d
                        } = t.current;
                    r ? .current && (c = r.current.clientWidth);
                    let _ = {
                            from: 0,
                            to: u <= d ? 0 : `-${u-(d-c)}`
                        },
                        m = n ? .current ? .map(e => ({
                            item: e,
                            left: e ? .offsetLeft || 0,
                            right: (e ? .offsetLeft || 0) + (e ? .offsetWidth || 0)
                        })),
                        p = -(100 * (a - 1)),
                        g = () => {
                            a > 1 && m ? .forEach((e, t) => {
                                if (e.right > Math.abs(_.from) && e.left - Math.abs(_.from) < d && i ? .current) {
                                    let r = e.right - e.left,
                                        n = e.left + r,
                                        i = Math.abs(_.from);
                                    l[t](p / 2 + -(i / n * p))
                                }
                            })
                        };
                    a > 1 && i ? .current ? .forEach(e => {
                        o.Ay.set(e, {
                            scale: a
                        })
                    }), g(), e.to(_, {
                        from: _.to,
                        onUpdate: () => {
                            g(), s(_.from)
                        },
                        ease: "none"
                    })
                }
            }

            function sT(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function sI(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            let sC = (e, {
                numberRef: t
            }) => {
                if (!t ? .current || "0" === t.current.textContent) return;
                let r = t.current.textContent ? .split("."),
                    n = r ? .[0] ? .length || 0,
                    i = r ? .[1] ? .length || 0,
                    a = 10 ** (-1 * i);
                e.from(t.current, {
                    textContent: 0,
                    duration: 1,
                    ease: "power1.out",
                    snap: {
                        textContent: a
                    },
                    modifiers: {
                        textContent: e => e.toFixed(i).padStart(n, "0")
                    },
                    stagger: {
                        each: a
                    }
                })
            };
            var sw = r(7554),
                sk = r.n(sw);
            let sj = ({
                stat: e
            }) => {
                let t = (0, c.useRef)(null);
                return (0, u.A)({
                    trigger: t,
                    animation: (0, w.A)(sC, {
                        numberRef: t
                    }),
                    vars: {
                        start: "bottom bottom"
                    }
                }), (0, i.jsxs)(d.A, {
                    as: "h3",
                    size: "heading-03",
                    className: l()(sk().number),
                    disableTriggerInOnScroll: !1,
                    transitionInType: "slideUpFadeIn",
                    children: [e.unit_left, (0, i.jsx)("span", {
                        ref: t,
                        children: e.number
                    }), e.unit_right]
                })
            };
            var sS = r(28559),
                sN = r.n(sS);

            function sR(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function sA(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var sO = r(67632),
                sP = r.n(sO);

            function sL(e, {
                titleRef: t,
                descriptionRef: r,
                clientTitleRef: n,
                layoutState: i,
                skipTransitionIn: a,
                mediaWrapperRef: s,
                mediaInnerHolderRef: l,
                setCanCitiesNavigationTransitionIn: o
            }) {
                if ("previewNext" === i) s ? .current && e.add((0, h.HT)(s.current), 0), l.current && e.fromTo(l.current, {
                    scale: 1.2
                }, {
                    scale: 1,
                    duration: 1,
                    ease: "Power3.easeInOut",
                    clearProps: "scale"
                }, 0), e.fromTo(t.current, {
                    scale: .61
                }, {
                    duration: 1,
                    scale: 1
                }, 0), e.fromTo(r.current, {
                    scale: .75
                }, {
                    duration: 1,
                    scale: 1
                }, 0);
                else if (a) {
                    if (a) {
                        let t = (0, P.xy)(n);
                        e.add(t ? .getTimeline("in"), 0)
                    }
                } else {
                    let i = (0, P.xy)(n),
                        a = (0, P.xy)(t),
                        c = (0, P.xy)(r);
                    l.current && e.fromTo(l.current, {
                        scale: 1.2
                    }, {
                        scale: 1,
                        duration: .8,
                        ease: "Power3.easeInOut",
                        clearProps: "scale"
                    }, 0), s ? .current && e.add((0, h.HT)(s.current), 0), e.addLabel("startText", ">-0.4"), e.add(i ? .getTimeline("in"), "startText"), e.add(a ? .getTimeline("in"), "startText+=0.1"), e.add(c ? .getTimeline("in"), "<0.2"), e.call(o, [!0], "<0.1")
                }
            }
            var sM = r(98894),
                sz = r.n(sM);

            function sH(e, {
                createdByRef: t,
                locationsRef: r,
                exploreRef: n,
                allWorkRef: i,
                skipTransitionIn: a,
                onTransitionInComplete: s
            }) {
                if (a) return;
                let l = (0, P.xy)(t),
                    o = (0, P.xy)(n),
                    c = (0, P.xy)(i);
                e.add(l ? .getTimeline("in"), "<0.1"), r ? .current ? .forEach(t => {
                    let r = (0, P.xy)(t);
                    r && e.add(r.getTimeline("in"), "<0.1")
                }), e.add(o ? .getTimeline("in"), "<0.1"), e.add(c ? .getTimeline("in"), "<0.1"), "function" == typeof s && e.call(s, void 0, ">")
            }
            var sB = r(76155);
            let sF = function({
                blok: e,
                layoutState: t = "heroHeader",
                disableTriggerInOnScroll: r = !1,
                canTransitionIn: n,
                skipTransitionIn: a = !1,
                onTransitionInComplete: s,
                ref: o,
                ...u
            }) {
                let d = (0, c.useRef)(null),
                    m = o || d,
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)((e.locations || []).map(() => (0, c.createRef)())),
                    x = (0, eJ.o)();
                return (0, T.mt)({
                    scroll: {
                        canTransitionIn: n,
                        disableTriggerInOnScroll: r,
                        trigger: m,
                        vars: {
                            start: "top bottom"
                        }
                    },
                    setupOptions: () => ({
                        refs: {
                            createdByRef: p,
                            locationsRef: h,
                            exploreRef: g,
                            allWorkRef: f,
                            skipTransitionIn: a,
                            onTransitionInComplete: s
                        },
                        setupTransitionInTimeline: sH
                    })
                }), (0, i.jsxs)("div", {
                    ref: m,
                    className: l()(sz().citiesNavigation, u.className),
                    children: [(0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(_.A, {
                            as: "p",
                            size: "body-standard",
                            disableTriggerInOnScroll: "previewNext" !== t,
                            transitionInType: `${a?"none":"splitLineRotateIn"}`,
                            ref: p,
                            children: [x.globalSettings.label_case_created_by, ":"]
                        }), (0, i.jsx)("ul", {
                            children: e.custom_locations ? .length ? e.custom_locations ? .map((e, r) => (0, i.jsx)("li", {
                                children: (0, i.jsx)(ev.A, {
                                    ref: h.current[r],
                                    textVariant: "button-label-large",
                                    link: {
                                        href: e.link.cached_url
                                    },
                                    label: e.label,
                                    disableTriggerInOnScroll: "previewNext" !== t,
                                    transitionInType: `${a?"none":"splitLineRotateIn"}`,
                                    target: e.link.target
                                })
                            }, e._uid)) : e.locations ? .map((e, r) => e.full_slug && (0, i.jsx)("li", {
                                children: (0, i.jsx)(ev.A, {
                                    ref: h.current[r],
                                    textVariant: "button-label-large",
                                    link: {
                                        href: e.full_slug
                                    },
                                    label: e ? .content ? .country || e ? .content ? .title || e ? .name,
                                    disableTriggerInOnScroll: "previewNext" !== t,
                                    transitionInType: `${a?"none":"splitLineRotateIn"}`
                                })
                            }, e.uuid))
                        })]
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)(_.A, {
                            as: "p",
                            size: "body-standard",
                            disableTriggerInOnScroll: "previewNext" !== t,
                            transitionInType: `${a?"none":"splitLineRotateIn"}`,
                            ref: g,
                            children: [x.globalSettings.label_case_explore, ":"]
                        }), (0, i.jsx)(ev.A, {
                            textVariant: "button-label-large",
                            link: {
                                href: sB.fB.Work
                            },
                            label: x.globalSettings.label_case_all_work,
                            disableTriggerInOnScroll: "previewNext" !== t,
                            transitionInType: `${a?"none":"splitLineRotateIn"}`,
                            ref: f
                        })]
                    })]
                })
            };

            function sE({
                blok: e,
                layoutState: t = "heroHeader",
                disableTriggerInOnScroll: r = !1,
                scrubTransitionIn: n = !1,
                skipTransitionIn: a = !1,
                canTransitionIn: s,
                ref: o,
                ...u
            }) {
                let m, p, g, f = (0, c.useRef)(null),
                    h = o || f,
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, c.useRef)(null),
                    y = (0, c.useRef)(null),
                    I = (0, c.useRef)(null),
                    [C, w] = (0, c.useState)(!1);
                return e ? .accent_color_foreground ? .color && e ? .accent_color_background ? .color && (m = {
                    foreground: e.accent_color_foreground.color,
                    background: e.accent_color_background.color
                }), F(h, e.has_header_accent, m), (0, T.mt)({
                    scroll: {
                        canTransitionIn: s,
                        disableTriggerInOnScroll: r,
                        trigger: h,
                        vars: {
                            start: "top bottom-=120px",
                            end: n ? "top top" : "bottom top",
                            scrub: n
                        }
                    },
                    setupOptions: () => ({
                        refs: {
                            layoutState: t,
                            clientTitleRef: b,
                            titleRef: x,
                            descriptionRef: v,
                            mediaWrapperRef: y,
                            skipTransitionIn: a,
                            mediaInnerHolderRef: I,
                            setCanCitiesNavigationTransitionIn: w
                        },
                        setupTransitionInTimeline: sL
                    })
                }), e ? .key_image && e.key_image.length > 0 && (p = e.key_image[0]), e ? .video && e.video.length > 0 && (g = e.video[0]), (0, i.jsxs)("div", {
                    ref: h,
                    className: l()(sP().caseHeader, u.className, sP()[t]),
                    children: [(0, i.jsxs)("div", {
                        className: l()(sP().header, "grid-gutter"),
                        children: [(0, i.jsx)(d.A, {
                            ref: b,
                            disableTriggerInOnScroll: "previewNext" !== t,
                            as: "h1",
                            size: "label-large",
                            transitionInType: `${a?"none":"splitLineRotateIn"}`,
                            className: l()(sP().clientTitle),
                            children: e ? .client
                        }), (0, i.jsx)(d.A, {
                            ref: x,
                            disableTriggerInOnScroll: "previewNext" !== t,
                            as: "h2",
                            size: "heading-02",
                            transitionInType: `${a?"splitCharsNone":"splitCharsSlideInUp"}`,
                            className: l()(sP().title),
                            children: e ? .title
                        }), (0, i.jsx)(_.A, {
                            ref: v,
                            as: "p",
                            size: "body-large",
                            disableTriggerInOnScroll: "previewNext" !== t,
                            transitionInType: `${a?"none":"splitLineRotateIn"}`,
                            className: l()(sP().description),
                            children: e ? .short_description
                        })]
                    }), (0, i.jsx)(sF, {
                        className: sP().citiesNavigation,
                        blok: e,
                        layoutState: t,
                        canTransitionIn: C,
                        onTransitionInComplete: () => w(!1),
                        skipTransitionIn: a
                    }), (0, i.jsx)("div", {
                        ref: y,
                        className: l()(sP().mediaWrapper),
                        children: (0, i.jsx)("div", {
                            className: l()(sP().mediaHolder),
                            children: (0, i.jsxs)("div", {
                                ref: I,
                                className: l()(sP().mediaInnerHolder, "abs-fill"),
                                children: [(p ? .image_landscape || p ? .image_portrait) && !g && (0, i.jsx)(tO.A, {
                                    src: p.image_landscape || p.image_portrait,
                                    srcDesktop: p.image_landscape || p.image_portrait,
                                    className: l()(sP().image, "abs-fill"),
                                    innerTransition: {
                                        type: "scaleUp"
                                    },
                                    layout: "fill",
                                    alt: p ? .alt_text
                                }), g && (0, i.jsx)(rD.default, {
                                    blok: g,
                                    objectFit: "cover",
                                    controls: !0,
                                    pauseWhenOutViewport: !0,
                                    playButton: !0,
                                    innerTransition: {
                                        type: "scaleUp"
                                    },
                                    muted: !1,
                                    className: l()(sP().video, "abs-fill")
                                })]
                            })
                        })
                    }), !!e ? .tag_list ? .length && (0, i.jsx)("ul", {
                        className: l()(sP().tagList, "grid-gutter"),
                        children: e.tag_list.map(e => (0, i.jsx)(_.A, {
                            disableTriggerInOnScroll: !1,
                            as: "li",
                            size: "button-label-small",
                            className: l()(sP().tagListItem),
                            children: e
                        }, e))
                    })]
                })
            }
            sE.displayName = "CaseHeader";
            var sW = r(11398),
                sD = r.n(sW);

            function sU(e, {
                contentRef: t
            }) {
                t ? .current && e.add((0, S._)(t.current))
            }

            function s$({
                blok: e,
                full_slug: t,
                className: r,
                canTransitionIn: n,
                ref: a
            }) {
                let s, _ = (0, c.useRef)(null),
                    m = a || _,
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, n$.A)(),
                    h = (0, t_.useRouter)(),
                    x = `${h.locale}/${(0,rS.kD)(t)}`,
                    v = (0, c.useRef)(!1),
                    b = (0, c.useRef)(null),
                    {
                        lock: y,
                        scaleDelta: T,
                        resetScaleDelta: I
                    } = (0, $.d)(),
                    {
                        inView: C
                    } = (0, u.A)({
                        trigger: g,
                        vars: {
                            start: "top 20%"
                        },
                        enableInView: !0
                    });
                e ? .accent_color_foreground ? .color && e ? .accent_color_background ? .color && (s = {
                    foreground: e.accent_color_foreground.color,
                    background: e.accent_color_background.color
                }), F(m, e.has_header_accent, s, !0), (0, u.A)({
                    trigger: g,
                    vars: {
                        scrub: !0,
                        start: "200 bottom",
                        end: "top top",
                        onLeaveBack() {
                            I()
                        },
                        onEnter() {
                            T()
                        }
                    }
                }), (0, u.A)({
                    trigger: g,
                    endTrigger: g,
                    animation: (0, w.A)(sU, {
                        contentRef: p
                    }),
                    vars: {
                        scrub: !0,
                        start: "top 20%",
                        end: "top top"
                    }
                });
                let {
                    scrollTo: k,
                    hasGsapScrollSmootherRef: j,
                    scrollStatusRef: S
                } = (0, $.d)();
                return (0, eZ.A)(() => {
                    C && n && !v.current && (v.current = !0, y(), setTimeout(() => {
                        let e = 0;
                        if (!j.current) {
                            let t = S.current ? .offset.y;
                            "number" != typeof t && (t = 0), e = t + g.current ? .getBoundingClientRect().top
                        }
                        k(0, e, 500, {
                            target: g.current,
                            easing: r$.kO.easeInOut,
                            callback: () => {
                                !eC.xl && b ? .current && (o.Ay.fromTo(b.current, {
                                    scaleX: 0
                                }, {
                                    duration: .2,
                                    scaleX: 1
                                }), o.Ay.to(b.current, {
                                    duration: .2,
                                    xPercent: 100,
                                    delay: .2
                                })), setTimeout(() => {
                                    f(x)
                                }, 400 * !eC.xl)
                            }
                        })
                    }, 0))
                }, [C, n]), (0, i.jsxs)("div", {
                    ref: m,
                    className: l()(sD().nextCase, r),
                    children: [(0, i.jsx)("div", {
                        ref: p,
                        className: l()(sD().content, "grid-gutter", "max-content-width"),
                        children: (0, i.jsx)(d.A, {
                            as: "span",
                            size: "label-large",
                            disableTriggerInOnScroll: !1,
                            className: sD().kanjiVertical,
                            children: e ? .vertical_text ? .replace(" ", "\xa0")
                        })
                    }), (0, i.jsx)(sE, {
                        ref: g,
                        blok: { ...e
                        },
                        layoutState: "previewNext",
                        canTransitionIn: n,
                        scrubTransitionIn: !0
                    }), (0, i.jsx)("div", {
                        ref: b,
                        className: l()(sD().loader)
                    })]
                })
            }
            s$.displayName = "NextCase";
            var sX = r(73908),
                sV = r.n(sX),
                sG = r(29369),
                sq = r(57731),
                sY = r.n(sq),
                sQ = r(73902),
                sJ = r.n(sQ);
            let sZ = ({
                ref: e,
                ...t
            }) => (0, i.jsxs)("figure", {
                ref: e,
                className: l()(sJ().parentFigure, t.className, {
                    [sJ().smallInline]: "small" === t.blok.layout_size,
                    [sJ().largeInline]: "large" === t.blok.layout_size,
                    [sJ().fullWidth]: "full-width" === t.blok.layout_size,
                    [sJ().noMargins]: t.blok.no_margins
                }),
                ...(0, a.m)(t.blok),
                children: [t.children, t.blok.caption && (0, i.jsx)(_.A, {
                    as: "figcaption",
                    size: "body-standard",
                    disableTriggerInOnScroll: !1,
                    children: t.blok.caption
                })]
            });
            var sK = r(67982),
                s0 = r.n(sK);

            function s1(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function s2(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current))
            }
            var s5 = r(78287),
                s3 = r.n(s5),
                s7 = r(72770),
                s4 = r.n(s7),
                s9 = r(45069),
                s8 = r.n(s9),
                s6 = r(37343),
                le = r.n(s6);

            function lt(e, {
                imageContainerRef: t,
                elementRef: r
            }) {
                if (t ? .current && r ? .current) {
                    let n = r.current.offsetHeight,
                        i = t.current.offsetHeight;
                    e.fromTo(t.current, {
                        yPercent: -((i - n) / i * 100)
                    }, {
                        duration: .5,
                        ease: "none",
                        yPercent: 0,
                        scale: 1.1
                    })
                }
            }

            function lr(e, {
                dateHolderRef: t,
                ctaRef: r,
                ctaHolderRef: n
            }) {
                if (t ? .current && (e.to(t.current, {
                        duration: .3,
                        ease: "Quad.easeInOut",
                        xPercent: -50
                    }, 0), n ? .current)) {
                    let t = r ? .current ? .offsetWidth;
                    e.fromTo(n.current, {
                        width: 0
                    }, {
                        width: t,
                        duration: .3,
                        ease: "Quad.easeInOut"
                    }, 0)
                }
            }

            function ln(e, {
                dateHolderRef: t,
                ctaHolderRef: r
            }) {
                t ? .current && (e.to(t.current, {
                    duration: .3,
                    ease: "Quad.easeInOut",
                    xPercent: 0
                }), r ? .current && e.to(r.current, {
                    duration: .3,
                    ease: "Quad.easeInOut",
                    width: 0
                }, 0))
            }

            function li({
                blok: e,
                date: t,
                full_slug: r,
                textOnly: n,
                ref: a,
                ...s
            }) {
                let o, m, p = (0, c.useRef)(null),
                    g = a || p,
                    [f, h] = (0, c.useState)(t),
                    x = (0, c.useRef)(null),
                    v = (0, c.useRef)(null),
                    b = (0, c.useRef)(null),
                    y = (0, c.useRef)(null),
                    I = (0, c.useRef)(null),
                    C = (0, c.useRef)(null),
                    k = (0, eJ.o)(),
                    j = (0, c.useRef)(null),
                    {
                        canPlayWebm: N
                    } = (0, n_.O)();
                (0, nN.A)(() => {
                    h(nP(t, "D MMM YYYY"))
                }, [nP, t]);
                let {
                    inView: R
                } = (0, u.A)({
                    trigger: g,
                    animation: (0, w.A)(lt, {
                        imageContainerRef: b,
                        elementRef: g
                    }),
                    enableInView: !0,
                    vars: {
                        scrub: !0
                    }
                }), A = (0, T.zW)(() => ({
                    refs: {
                        imageContainerRef: b,
                        dateHolderRef: y,
                        ctaRef: I,
                        ctaHolderRef: C
                    },
                    setupTransitionInTimeline: lr,
                    setupTransitionOutTimeline: ln
                }), []), O = (0, c.useCallback)(() => {
                    (0, S._)(b.current, {
                        to: .7,
                        duration: .3
                    }), A.transitionIn()
                }, [A]), P = (0, c.useCallback)(() => {
                    (0, S._)(b.current, {
                        to: 1,
                        duration: .3
                    }), A.transitionOut()
                }, [A]), {
                    key_image: L,
                    key_video: M,
                    thumbnail_video: z
                } = e;
                L && L ? .length > 0 && (o = (0, rS.YQ)(L[0].image_portrait), m = (0, rS.YQ)(L[0].image_landscape), o || (o = (0, rS.YQ)(L[0].image_landscape)));
                let H = (0, i.jsx)(i.Fragment, {});
                return M && nM(M) || z && nM(z) ? H = (0, i.jsx)(rD.default, {
                    ref: x,
                    blok: nH(nz(z, M), m || o),
                    objectFit: "cover",
                    controls: !1,
                    playButton: !1,
                    muted: !0,
                    loop: !0,
                    openInModal: !1,
                    playing: R,
                    className: l()(le().video, "abs-fill")
                }) : L ? .[0] ? .animated_image ? .filename && N ? H = (0, i.jsx)("video", {
                    ref: j,
                    src: L ? .[0] ? .animated_image.filename,
                    autoPlay: !0,
                    muted: !0,
                    controls: !1,
                    playsInline: !0,
                    loop: !0,
                    className: l()(le().animatedImage)
                }) : L ? .[0] && o && !nM(M) && !nM(z) && (H = (0, i.jsx)(tO.A, {
                    ref: x,
                    src: o,
                    srcDesktop: m || o,
                    layout: "fill",
                    className: l()(le().image, "abs-fill"),
                    sizes: `${rK.K.MIN_768} 1200px, ${rK.K.MIN_1920} 1680px, 100vw`,
                    alt: L[0].alt_text
                })), (0, nL.j)({
                    innerTemplate: (0, i.jsxs)(i.Fragment, {
                        children: [!n && (L ? .[0] && o || M && nM(M) || z && nM(z)) && (0, i.jsx)("div", {
                            ref: v,
                            className: l()(le().imageHolder, "abs-fill"),
                            children: (0, i.jsx)("div", {
                                ref: b,
                                className: l()(le().imageContainer),
                                children: H
                            })
                        }), e.category && (0, i.jsx)(d.A, {
                            as: "span",
                            size: "label-large",
                            disableTriggerInOnScroll: !1,
                            className: le().category,
                            children: e.category
                        }), e.title && (0, i.jsx)(d.A, {
                            as: "h5",
                            size: "heading-03",
                            transitionInType: (eC.CI, "splitLineRotateIn"),
                            disableTriggerInOnScroll: !1,
                            className: le().articleTitle,
                            children: e.title
                        }), (0, i.jsxs)("div", {
                            ref: y,
                            className: l()(le().dateHolder),
                            children: [t && (0, i.jsx)(_.A, {
                                as: "p",
                                size: "body-standard",
                                disableTriggerInOnScroll: !1,
                                className: le().date,
                                transitionInType: (eC.CI, "splitLineRotateIn"),
                                children: f
                            }), (0, i.jsx)("div", {
                                ref: C,
                                className: l()(le().ctaHolder),
                                children: (0, i.jsxs)(_.A, {
                                    ref: I,
                                    as: "p",
                                    size: "body-standard",
                                    disableTriggerInOnScroll: !0,
                                    className: le().cta,
                                    transitionInType: "none",
                                    children: [(0, i.jsx)("span", {
                                        className: l()(le().circle)
                                    }), k.globalSettings.view_article]
                                })
                            })]
                        })]
                    }),
                    props: { ...s,
                        onMouseEnter: O,
                        onMouseLeave: P,
                        className: l()(le().articlePreview, s.className, {
                            [le().fullbleed]: ["fullbleed", "center"].includes(s.layout),
                            [le().center]: "center" === s.layout,
                            [le().textOnly]: n
                        }),
                        "aria-label": e.title,
                        link: {
                            uuid: e._uid,
                            href: r
                        }
                    },
                    elementRef: g
                })
            }

            function la({
                className: e,
                canTransitionIn: t,
                blok: r,
                ref: n
            }) {
                let s = (0, c.useRef)(null),
                    {
                        recentNews: o
                    } = (0, eJ.o)(),
                    u = (0, en.E)(ei.S4.MIN_768, !1);
                return (0, i.jsxs)("div", {
                    ref: n || s,
                    className: l()(s8().latestNews, e, {
                        [s8().fullbleed]: ["fullbleed", "center"].includes(r.layout),
                        [s8().center]: "center" === r.layout
                    }),
                    ...(0, a.m)(r),
                    children: [(0, i.jsx)(d.A, {
                        as: "h4",
                        size: "heading-04",
                        className: s8().title,
                        disableTriggerInOnScroll: !1,
                        canTransitionIn: t,
                        children: r.title
                    }), (0, i.jsx)("div", {
                        className: s8().previewsContainer,
                        children: o && o ? .slice(0, r.per_page).map(({
                            content: e,
                            published_at: n,
                            full_slug: a
                        }, s) => "center" === r.layout ? (0, i.jsx)(li, {
                            blok: { ...e
                            },
                            full_slug: a,
                            layout: r.layout,
                            canTransitionIn: t,
                            className: l()(s8().item),
                            date: e.publish_date || n,
                            textOnly: r.text_only
                        }, a) : (0, i.jsx)(nF, {
                            transitionInDelay: u ? 0 : s % 3 * .15,
                            className: l()(s8().item),
                            blok: { ...e
                            },
                            full_slug: a,
                            textOnly: r.text_only
                        }, `${a}`))
                    })]
                })
            }
            var ls = r(37450),
                ll = r.n(ls);

            function lo(e, {
                titleRef: t,
                categoryRef: r,
                dateRef: n,
                headerButtonRef: i,
                imageHolder: a,
                gifRef: s,
                lineRef: l,
                shareTitleRef: o,
                buttonRef: c
            }) {
                let u = (0, P.xy)(r),
                    d = (0, P.xy)(t),
                    _ = (0, P.xy)(o),
                    m = (0, P.xy)(c);
                if (a ? .current && e.add((0, h.HT)(a.current), 0), s ? .current && e.add((0, h.HT)(s.current), 0), e.addLabel("startText", ">-0.2"), u && e.add(u ? .getTimeline("in"), "startText"), d && e.add(d ? .getTimeline("in"), "startText+=0.1"), n) {
                    let t = (0, P.xy)(n);
                    e.add(t ? .getTimeline("in"), "<0.2")
                }
                if (i) {
                    let t = (0, P.xy)(i);
                    e.add(t ? .getTimeline("in"), ">-=0.2")
                }
                l ? .current && e.fromTo(l.current, {
                    scaleX: 0,
                    transformOrigin: "left center"
                }, {
                    scaleX: 1,
                    clearProps: "scaleX",
                    ease: "Quad.easeOut",
                    duration: .5
                }, ">-0.2"), _ && e.add(_ ? .getTimeline("in"), "<0.2"), m && e.add(m ? .getTimeline("in"), "<0.2")
            }
            var lc = r(56445),
                lu = r.n(lc);

            function ld(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {
                    scale: .4
                }, {
                    duration: .5,
                    scale: 1,
                    ease: "Expo.easeOut",
                    clearProps: "scale"
                }, 0), e.add((0, S.m)(t.current), 0)
            }

            function l_(e, {
                elementRef: t
            }) {
                e.add((0, S._)(t.current, {
                    duration: .4,
                    ease: "Expo.easeOut"
                })), e.to(t.current, {
                    duration: .4,
                    scale: .4,
                    ease: "Expo.easeOut"
                }, 0)
            }

            function lm({
                isVisible: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(void 0),
                    a = t || n,
                    s = (0, T.zW)(() => ({
                        ref: a,
                        refs: {
                            elementRef: a
                        },
                        setupTransitionInTimeline: ld,
                        setupTransitionOutTimeline: l_
                    }), []);
                return (0, y.s)(s, e), (0, nL.j)({
                    innerTemplate: (0, i.jsx)(Z.A, {
                        name: r.icon,
                        className: l()(lu().icon),
                        transparent: !0
                    }),
                    props: { ...r,
                        className: l()(lu().iconButton, r.className)
                    },
                    elementRef: a
                })
            }
            var lp = r(73105);

            function lg({
                className: e,
                blok: t,
                canTransitionIn: r,
                ref: n
            }) {
                let a, s, o = (0, c.useRef)(null),
                    u = n || o,
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(null),
                    x = (0, c.useRef)(null),
                    v = (0, t2.J)(),
                    b = (0, c.useRef)(null),
                    y = (0, c.useRef)(null),
                    I = (0, c.useRef)(null),
                    C = (0, en.E)(ei.S4.MIN_768),
                    [w, k] = (0, c.useState)(t.publish_date),
                    {
                        canPlayWebm: j
                    } = (0, n_.O)(),
                    {
                        isInEditorMode: S
                    } = (0, lp.r)(),
                    {
                        globalSettings: N
                    } = (0, eJ.o)();
                (0, nN.A)(() => {
                    k(nP(t.publish_date, "D MMM YYYY"))
                }, [nP, t.publish_date]), (0, T.mt)({
                    scroll: {
                        canTransitionIn: r,
                        trigger: u
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: u,
                            titleRef: m,
                            categoryRef: p,
                            dateRef: g,
                            headerButtonRef: f,
                            imageHolder: h,
                            gifRef: x,
                            lineRef: b,
                            shareTitleRef: y,
                            buttonRef: I
                        },
                        setupTransitionInTimeline: lo
                    })
                });
                let [R, A] = (0, c.useState)(!1), O = () => {
                    navigator.clipboard && (navigator.clipboard.writeText(window.location.href), A(!0), setTimeout(() => A(!1), 3e3))
                }, {
                    key_image: P,
                    key_video: L
                } = t;
                P && P ? .length > 0 && (a = (0, rS.YQ)(P[0].image_portrait), s = (0, rS.YQ)(P[0].image_landscape), a || (a = (0, rS.YQ)(P[0].image_landscape)));
                let {
                    scrollIntoView: M
                } = (0, $.d)(), z = (0, i.jsx)(i.Fragment, {});
                return L && nM(L) ? z = (0, i.jsx)("div", {
                    ref: h,
                    className: ll().videoHolder,
                    children: (0, i.jsx)(rD.default, {
                        blok: nH(L[0], s || a),
                        objectFit: "cover",
                        controls: !0,
                        pauseWhenOutViewport: !0,
                        playButton: !0,
                        innerTransition: {
                            type: "parallax",
                            config: {
                                speed: -2
                            }
                        },
                        muted: !1,
                        className: l()(ll().video, "abs-fill")
                    })
                }) : P ? .[0] ? .animated_image ? .filename && j ? z = (0, i.jsx)("video", {
                    ref: x,
                    src: P ? .[0] ? .animated_image.filename,
                    autoPlay: !0,
                    muted: !0,
                    controls: !1,
                    playsInline: !0,
                    loop: !0,
                    className: l()(ll().animatedImage)
                }) : P ? .[0] && a && (z = (0, i.jsxs)("div", {
                    ref: h,
                    className: ll().imageHolder,
                    children: [S && (a.endsWith(".gif") || a.endsWith(".GIF")) && (0, i.jsxs)("div", {
                        className: ll().noGifWarning,
                        children: [(0, i.jsx)("p", {
                            children: "Dont upload gifs here!"
                        }), (0, i.jsxs)("p", {
                            children: ["Their size is too large, instead use the ", (0, i.jsx)("i", {
                                children: "Animated Image"
                            }), " field to upload a webm format"]
                        })]
                    }), (0, i.jsx)(tO.A, {
                        src: a,
                        srcDesktop: s || a,
                        className: l()(ll().image),
                        alt: P[0].alt_text,
                        innerTransition: {
                            type: "parallax",
                            config: {
                                speed: -2
                            }
                        }
                    })]
                })), (0, i.jsxs)("div", {
                    ref: u,
                    className: l()(ll().container, e),
                    children: [(0, i.jsxs)("header", {
                        className: ll().articleHeader,
                        children: [(0, i.jsx)(d.A, {
                            ref: p,
                            as: "span",
                            size: "label-large",
                            transitionInType: "splitLineRotateIn",
                            className: ll().newsLabel,
                            children: t.category
                        }), (0, i.jsx)(d.A, {
                            ref: m,
                            as: "h1",
                            size: "heading-03",
                            transitionInType: "splitCharsSlideInUp",
                            className: ll().title,
                            children: t.title
                        }), t ? .publish_date && (0, i.jsx)(_.A, {
                            ref: g,
                            as: "time",
                            size: "body-standard",
                            transitionInType: "splitLineRotateIn",
                            className: ll().publishDate,
                            children: w
                        }), t ? .pardot_id && t.pardot_download_label && (0, i.jsx)(ez.A, {
                            ref: f,
                            className: l()(ll().headerButton),
                            label: t.pardot_download_label,
                            onClick: () => {
                                let e = document ? .querySelector("[data-scroll-to=download-pdf]");
                                e && M(e)
                            }
                        }), (0, i.jsx)("hr", {
                            ref: b
                        }), (0, i.jsxs)("div", {
                            className: ll().shareSection,
                            children: [(0, i.jsx)(_.A, {
                                ref: y,
                                as: "p",
                                size: "body-standard",
                                transitionInType: "slideUpFadeIn",
                                className: ll().shareText,
                                children: N.label_news_share
                            }), (0, i.jsxs)("span", {
                                className: ll().copySection,
                                children: [(0, i.jsx)(_.A, {
                                    as: "p",
                                    size: "body-standard",
                                    transitionInType: "none",
                                    className: ll().linkCopied,
                                    style: {
                                        opacity: R ? "1" : "0"
                                    },
                                    children: "Link copied!"
                                }), v && (navigator ? .share || navigator ? .clipboard) && (0, i.jsx)(lm, {
                                    ref: I,
                                    icon: C ? "upload" : "link",
                                    onClick: () => {
                                        if (void 0 !== navigator.share) {
                                            let e = window.location.href;
                                            navigator.share({
                                                title: "Dentsu Creative",
                                                text: "Check this out!",
                                                url: e
                                            }).catch(e => {
                                                console.error(e), O()
                                            })
                                        } else O()
                                    },
                                    isVisible: {
                                        onMount: !0,
                                        value: !0
                                    },
                                    "aria-label": C ? "Share link" : "Copy link",
                                    title: C ? "Share link" : "Copy link"
                                })]
                            })]
                        })]
                    }), (0, i.jsxs)("figure", {
                        className: ll().titleImage,
                        children: [z, P ? .[0] ? .image_caption && (0, i.jsx)(_.A, {
                            as: "figcaption",
                            size: "body-standard",
                            transitionInType: "none",
                            children: P[0].image_caption
                        })]
                    })]
                })
            }
            lg.displayName = "ArticleHeader";
            var lf = r(65364),
                lh = r(90997),
                lx = r.n(lh);

            function lv(e, {
                titleRef: t,
                buttons: r
            }) {
                let n = (0, P.xy)(t);
                n && e.add(n.getTimeline("in"), 0), r ? .current ? .forEach((t, r) => {
                    let n = (0, P.xy)(t);
                    n && e.add(n.getTimeline("in"), .5 + .1 * r)
                })
            }

            function lb(e, {
                titleRef: t,
                buttons: r
            }) {
                let n = (0, P.xy)(t);
                n && e.add(n.getTimeline("out")), e.addLabel("outComplete", "-=0"), r ? .current ? .forEach(t => {
                    let r = (0, P.xy)(t);
                    r && e.add(r.getTimeline("out"), "outComplete")
                })
            }
            var ly = r(49984),
                lT = r.n(ly);

            function lI(e, {
                circle1Ref: t,
                circle2Ref: r
            }) {
                t.current && (e.fromTo(t.current, {
                    scale: 0
                }, {
                    scale: .35,
                    ease: "Quad.easeInOut",
                    duration: 1.1
                }), e.addLabel("afterFirstExpand", ">0.2"), e.fromTo({
                    progress: 0
                }, {
                    progress: 0
                }, {
                    progress: 1,
                    ease: "none",
                    duration: .6,
                    onUpdate: () => {}
                }, "afterFirstExpand+=0.4"), e.to(t.current, {
                    scale: 1,
                    ease: "Quad.easeIn",
                    duration: 1
                }, "afterFirstExpand")), r.current && (e.addLabel("startExpand", ">-0.5"), e.fromTo({
                    progress: 0
                }, {
                    progress: 0
                }, {
                    progress: 1,
                    ease: "none",
                    duration: 1.9,
                    onUpdate: () => {}
                }, "startExpand+=0.1"), e.fromTo(r.current, {
                    scale: 0
                }, {
                    scale: .23,
                    ease: "Quad.easeInOut",
                    duration: 1
                }, "startExpand"), e.to(r.current, {
                    scale: 1,
                    ease: "Quad.easeIn",
                    duration: 1
                }, ">0.2"))
            }
            var lC = r(1354),
                lw = r.n(lC);

            function lk(e, {
                topLeftTitleRef: t,
                bottomRightTitleRef: r,
                kanjiTextRef: n
            }) {
                let i = (0, P.xy)(t),
                    a = (0, P.xy)(r),
                    s = (0, P.xy)(n);
                i && e.add(i.getTimeline("in")), a && e.add(a.getTimeline("in"), .1), s && e.add(s.getTimeline("in"), .1)
            }

            function lj(e, {
                topLeftTitleRef: t,
                bottomRightTitleRef: r,
                kanjiTextRef: n
            }) {
                let i = (0, P.xy)(t),
                    a = (0, P.xy)(r),
                    s = (0, P.xy)(n);
                i && e.add(i.getTimeline("out"), 0), a && e.add(a.getTimeline("out"), .1), s && e.add(s.getTimeline("out"), 0)
            }

            function lS({
                isVisible: e,
                transitionOnMount: t = !1,
                transitionOnUnMount: r = !1,
                ref: n,
                ...a
            }) {
                let s = (0, c.useRef)(null),
                    o = n || s,
                    u = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, T.zW)(() => ({
                        ref: o,
                        refs: {
                            topLeftTitleRef: u,
                            bottomRightTitleRef: m,
                            kanjiTextRef: g
                        },
                        setupTransitionInTimeline: lk,
                        setupTransitionOutTimeline: lj
                    }), []);
                return (0, T.SX)(f, t), (0, T.fE)(f, r), (0, y.s)(f, e), (0, i.jsx)("div", {
                    ref: o,
                    className: l()(lw().textSlide, a.className),
                    children: (0, i.jsxs)("div", {
                        ref: p,
                        className: l()(lw().contentFrame, "grid-gutter"),
                        children: [(0, i.jsx)(d.A, {
                            ref: u,
                            as: "h3",
                            size: "heading-01",
                            className: l()(lw().topLeftTitle),
                            transitionOutType: "splitCharsSlideOutUp",
                            children: (0, ex.XX)(a.blok.topLeftTitle, {
                                nodeResolvers: {
                                    [ex.Uv]: e => (0, i.jsxs)(i.Fragment, {
                                        children: [e, (0, i.jsx)("br", {})]
                                    })
                                }
                            })
                        }), (0, i.jsx)(d.A, {
                            ref: m,
                            as: "h3",
                            size: "heading-01",
                            className: l()(lw().bottomRightTitle),
                            transitionOutType: "splitCharsSlideOutUp",
                            children: (0, ex.XX)(a.blok.bottomRightTitle, {
                                nodeResolvers: {
                                    [ex.Uv]: e => (0, i.jsxs)(i.Fragment, {
                                        children: [e, (0, i.jsx)("br", {})]
                                    })
                                }
                            })
                        }), (0, i.jsx)(_.A, {
                            ref: g,
                            as: "span",
                            size: "kanji-medium",
                            className: l()(lw().kanjiText),
                            transitionInType: "slideUpFadeIn",
                            lang: "ja",
                            children: a.blok.kanjiText
                        })]
                    })
                })
            }
            var lN = r(51251),
                lR = r.n(lN);

            function lA(e, {
                logoIntroSectionRef: t
            }) {
                let r = (0, P.xy)(t);
                r && e.add(r.getTimeline("in"), 0)
            }
            var lO = r(48555),
                lP = r.n(lO),
                lL = r(79452),
                lM = r.n(lL);

            function lz(e, {
                tlRef: t,
                elementRef: r
            }) {
                let n = t ? .current,
                    i = r ? .current;
                n && i && (e.pause(0), e.progress(0), e.fromTo(n, {
                    progress: 0
                }, {
                    duration: 1.35,
                    ease: "none",
                    progress: .6,
                    overwrite: "auto"
                }), e.to(i, {
                    opacity: 1,
                    duration: .05
                }, "<"))
            }

            function lH(e, {
                logoTextRef: t,
                kanjiTextRef: r,
                leftLogoRef: n,
                rightLogoRef: i
            }) {
                ! function(e, {
                    logoTextRef: t,
                    kanjiTextRef: r,
                    leftLogoRef: n,
                    rightLogoRef: i
                }) {
                    let a = (0, P.xy)(t),
                        s = (0, P.xy)(r);
                    a && e.add(a.getTimeline("in"), ""), s && e.add(s.getTimeline("in"), ">-0.3"), n ? .current && i ? .current && (e.fromTo(n ? .current, {
                        drawSVG: "0% 0%"
                    }, {
                        drawSVG: "0% -100%",
                        ease: "easeInOut",
                        duration: 1.1
                    }, "<"), e.fromTo(i ? .current, {
                        drawSVG: "0% 0%"
                    }, {
                        drawSVG: "0% -100%",
                        ease: "easeInOut",
                        duration: 1.1
                    }, "<")), e.addLabel("transitionInComplete")
                }(e, {
                    logoTextRef: t,
                    kanjiTextRef: r,
                    leftLogoRef: n,
                    rightLogoRef: i
                }),
                function(e, {
                    logoTextRef: t,
                    kanjiTextRef: r,
                    leftLogoRef: n,
                    rightLogoRef: i
                }) {
                    let a = (0, P.xy)(t),
                        s = (0, P.xy)(r);
                    n ? .current && i ? .current && (e.fromTo(n ? .current, {
                        drawSVG: "0% 100%"
                    }, {
                        drawSVG: "0% 0%",
                        ease: "Quad.easeInOut",
                        duration: 1
                    }, ">"), e.fromTo(i ? .current, {
                        drawSVG: "0% 100%"
                    }, {
                        drawSVG: "0% 0%",
                        ease: "Quad.easeInOut",
                        duration: 1
                    }, "<")), a && e.add(a.getTimeline("out"), "<20%"), s && e.add(s.getTimeline("out"), ">-0.3")
                }(e, {
                    logoTextRef: t,
                    kanjiTextRef: r,
                    leftLogoRef: n,
                    rightLogoRef: i
                })
            }

            function lB({
                title: e,
                kanjiText: t,
                className: r,
                ref: n
            }) {
                let a = (0, c.useRef)(null),
                    s = n || a,
                    o = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(null),
                    g = (0, c.useRef)(null),
                    f = (0, c.useRef)(null),
                    h = (0, c.useRef)(void 0);
                return h.current = (0, w.A)(lH, {
                    logoTextRef: m,
                    kanjiTextRef: f,
                    leftLogoRef: p,
                    rightLogoRef: g
                }), (0, T.mt)({
                    scroll: {
                        trigger: s,
                        disableTriggerInOnScroll: !0,
                        vars: {}
                    },
                    setupOptions: () => ({
                        ref: s,
                        refs: {
                            tlRef: h,
                            elementRef: s
                        },
                        setupTransitionInTimeline: lz
                    })
                }), (0, u.A)({
                    trigger: s,
                    pin: s,
                    vars: {
                        scrub: !0,
                        start: "top top",
                        end: "50%",
                        onUpdate: ({
                            progress: e
                        }) => {
                            h.current ? .progress(.6 + .4 * e)
                        },
                        onLeaveBack: () => {
                            h.current ? .progress(.6)
                        }
                    }
                }), (0, i.jsx)("div", {
                    ref: s,
                    className: l()(lP().logoIntroSection, r),
                    children: (0, i.jsxs)("div", {
                        className: l()(lP().logoHolder),
                        children: [(0, i.jsx)("div", {
                            ref: o,
                            className: l()(lP().logo),
                            children: (0, i.jsxs)("svg", {
                                viewBox: "0 0 488 310",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, i.jsx)("path", {
                                    d: "M0 276.55C0 276.55 39.9908 276.55 77 276.55C144.379 276.55 199 221.929 199 154.55C199 87.1711 144.379 32.5498 77 32.5498C39.9909 32.5498 0 32.5498 0 32.5498",
                                    ref: p,
                                    stroke: "currentColor",
                                    strokeWidth: "67"
                                }), (0, i.jsx)("path", {
                                    d: "M488 32.5498C488 32.5498 448.009 32.5498 411 32.5498C343.621 32.5498 289 87.1711 289 154.55C289 221.929 343.621 276.55 411 276.55C448.009 276.55 488 276.55 488 276.55",
                                    ref: g,
                                    stroke: "currentColor",
                                    strokeWidth: "67"
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: l()(lP().textHolder),
                            children: [(0, i.jsx)(d.A, {
                                ref: m,
                                transitionInType: "splitCharsSlideInUp",
                                transitionOutType: "splitCharsSlideOutUp",
                                className: l()(lP().logoText),
                                as: "h1",
                                size: "heading-05",
                                children: e
                            }), (0, i.jsx)(_.A, {
                                ref: f,
                                transitionInType: "splitCharsSlideInUp",
                                transitionOutType: "splitCharsSlideOutUp",
                                className: l()(lP().kanjiText),
                                as: "p",
                                size: "kanji-large",
                                lang: "ja",
                                children: t
                            })]
                        })]
                    })
                })
            }
            o.os.registerPlugin(lM());
            var lF = r(16751),
                lE = r.n(lF);

            function lW(e, {
                carouselItemsRef: t,
                windowWidth: r,
                isInCenterChange: n,
                imagesRef: i
            }) {
                if (t ? .current) {
                    var a;
                    let s, l = t.current.map(e => e),
                        c = l[0].offsetWidth,
                        u = r / 2 + .75 * c,
                        d = -(r / 2 + .75 * c),
                        _ = [];
                    l.forEach((e, t) => {
                        var r, a, s;
                        let l, c;
                        i ? .current && (l = i.current[t]), _.push((r = e, a = l, s = {
                            startPosition: u,
                            endPosition: d,
                            index: t,
                            isInCenterChange: n
                        }, (c = o.os.timeline({
                            onUpdate: () => {
                                let e = c.progress();
                                s.isInCenterChange(s.index, e > .35 && e < .65)
                            }
                        })).fromTo(r, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            yoyo: !0,
                            duration: .5,
                            repeat: 1,
                            ease: "none",
                            immediateRender: !0
                        }, 0), c.fromTo(r, {
                            willChange: "transform",
                            z: 0,
                            rotateX: 0
                        }, {
                            willChange: "transform",
                            z: -150,
                            rotateX: -30,
                            yoyo: !0,
                            duration: 1,
                            ease: "Power2.easeIn",
                            immediateRender: !0
                        }, 0), c.fromTo(r, {
                            x: s.startPosition
                        }, {
                            x: s.endPosition,
                            duration: 1,
                            ease: r$.WG.easeNone,
                            immediateRender: !0
                        }, 0), a && c.fromTo(a, {
                            willChange: "transform",
                            xPercent: -10,
                            scale: 1.2
                        }, {
                            willChange: "transform",
                            scale: 1.2,
                            xPercent: 10,
                            duration: 1,
                            ease: "none",
                            immediateRender: !0
                        }, 0), c))
                    }), a = 1 / Math.abs(d - u) * (c + 40), s = e || o.Ay.timeline({
                        paused: !0
                    }), _.forEach((e, t) => {
                        s.add(e, t * a)
                    })
                }
            }
            var lD = r(18847);
            let lU = r.n(lD)()(() => Promise.resolve().then(r.bind(r, 45086)), {
                loadableGenerated: {
                    webpack: () => [45086]
                }
            });
            var l$ = r(19046),
                lX = r.n(l$);

            function lV(e, {
                lineRef: t,
                numberRef: r,
                titleRef: n
            }) {
                let i = (0, P.xy)(r),
                    a = (0, P.xy)(n);
                t ? .current && e.fromTo(t.current, {
                    scaleX: 0,
                    transformOrigin: "left center"
                }, {
                    duration: .5,
                    ease: "Quad.easeInOut",
                    scaleX: 1
                }), i && e.add(i.getTimeline("in"), 0), a && e.add(a.getTimeline("in"), .05)
            }

            function lG(e, {
                hoverTextRef: t,
                backgroundRef: r
            }) {
                let n = (0, P.xy)(t);
                r ? .current && e.fromTo(r.current, {
                    scaleY: 0
                }, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    scaleY: 1
                }), n && e.add(n.getTimeline("in"), 0)
            }

            function lq(e, {
                hoverTextRef: t,
                backgroundRef: r
            }) {
                let n = (0, P.xy)(t);
                r ? .current && e.to(r.current, {
                    duration: .4,
                    ease: "Expo.easeOut",
                    scaleY: 0
                }), n && e.add(n.getTimeline("out"), 0)
            }
            var lY = r(58021),
                lQ = r.n(lY),
                lJ = r(36457),
                lZ = r.n(lJ);

            function lK(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }
            var l0 = r(42875),
                l1 = r.n(l0);

            function l2({
                className: e,
                blok: t,
                ref: r
            }) {
                let n = (0, c.useRef)(null);
                return (0, i.jsxs)("div", {
                    ref: r || n,
                    className: l()(l1().tickerTextItem, e),
                    ...(0, a.m)(t),
                    children: [(0, i.jsx)("div", {
                        className: l()(l1().iconHolder),
                        children: (0, i.jsx)(rR.A, {
                            id: t.symbol.icon,
                            loop: !0,
                            autoplay: !0,
                            pauseWhenOutViewport: !0
                        })
                    }), (0, i.jsx)(d.A, {
                        className: l()(l1().title),
                        as: "h2",
                        transitionInType: "none",
                        size: "heading-02",
                        children: t.text
                    })]
                })
            }
            var l5 = r(61793),
                l3 = r.n(l5),
                l7 = r(77473),
                l4 = r.n(l7);

            function l9(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function l8({
                filters: e,
                colorVariation: t,
                disabled: r,
                activeFilter: n,
                type: a,
                onFilterClick: s,
                ref: o,
                ...u
            }) {
                let d = (0, c.useRef)(null),
                    _ = o || d,
                    m = (0, c.useRef)(null);
                return (0, T.mt)({
                    scroll: {
                        trigger: _,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: _
                        },
                        setupTransitionInTimeline: l9
                    })
                }), (0, c.useEffect)(() => {
                    ! function(e, t = !1) {
                        e.elementRef ? .current && (0, S._)(e.elementRef.current, {
                            to: +!t
                        })
                    }({
                        elementRef: _
                    }, r)
                }, [r, _]), (0, D.P)(m, {
                    type: "x",
                    edgeResistance: 1,
                    lockAxis: !0,
                    inertia: !0,
                    cursor: "grab"
                }, {
                    bounds: _
                }), (0, i.jsx)("div", {
                    ref: _,
                    className: l()(l4().draggableFilterButtons, u.className),
                    children: (0, i.jsx)("div", {
                        ref: m,
                        className: l()(l4().buttonsHolder),
                        children: e.map((o, c) => (0, i.jsx)(ez.A, {
                            className: l()(l4().button),
                            label: o.filter,
                            icon: o.icon,
                            disabled: r,
                            isSelected: o.filter === n,
                            onClick: () => s(o.filter, a),
                            disableTriggerInOnScroll: !1,
                            colorVariation: t,
                            transitionInDelay: c % e.length * .1
                        }, o.filter))
                    })
                })
            }
            var l6 = r(60731),
                oe = r.n(l6);

            function ot(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {}, {})
            }

            function or(e, t, r, n = !1) {
                e ? .current && o.Ay.to(e.current, {
                    height: t ? Math.max((r ? .elementRef ? .current).offsetHeight, (r ? .animationRef ? .current).offsetHeight) : 0,
                    duration: .6 * !n,
                    ease: "Quad.easeInOut",
                    onComplete: () => {}
                })
            }
            var on = r(92279),
                oi = r.n(on);

            function oa(e, {
                titleRef: t,
                animationRef: r
            }) {
                let n = (0, P.xy)(t);
                n && e.add(n.getTimeline("in"), 0), r ? .current && (e.add((0, S.m)(r.current), 0), e.fromTo(r.current, {
                    scale: .7
                }, {
                    scale: 1,
                    duration: .5,
                    clearProps: "scale",
                    ease: "Power2.easeOut"
                }, 0))
            }

            function os(e, {
                titleRef: t,
                animationRef: r
            }) {
                let n = (0, P.xy)(t);
                n && e.add(n.getTimeline("out"), 0), r ? .current && (e.add((0, S._)(r.current), 0), e.to(r.current, {
                    scale: .7,
                    duration: .5,
                    ease: "Power2.easeOut"
                }, 0))
            }

            function ol(e, {
                titleRef: t,
                isMobileViewport: r
            }) {
                t ? .current && !r && e.fromTo([t.current], {
                    y: 80
                }, {
                    y: 0,
                    ease: "none"
                })
            }

            function oo({
                title: e,
                icon: t,
                ref: r,
                ...n
            }) {
                let a = (0, c.useRef)(null),
                    s = r.current ? .elementRef || a,
                    o = (0, c.useRef)(null),
                    _ = (0, c.useRef)(null),
                    [m, p] = (0, c.useState)(!1),
                    g = (0, c.useRef)(void 0),
                    f = (0, c.useRef)(!1),
                    h = (0, en.E)(ei.S4.MIN_768);
                return (0, c.useEffect)(() => {
                    f.current = m
                }, [m]), g.current = (0, w.A)(ol, {
                    titleRef: o,
                    animationRef: _,
                    isMobileViewport: h
                }), (0, u.A)({
                    trigger: o,
                    vars: {
                        scrub: !0,
                        start: "top bottom",
                        end: "top top",
                        onUpdate: ({
                            progress: e
                        }) => {
                            f.current && g ? .current ? .progress(e)
                        }
                    }
                }), (0, T.zW)(() => ({
                    ref: s,
                    refs: {
                        elementRef: s,
                        titleRef: o,
                        animationRef: _
                    },
                    setupTransitionInTimeline: oa,
                    setupTransitionOutTimeline: os,
                    onStart: e => {
                        "in" === e && p(!0)
                    },
                    onComplete: e => {
                        "out" === e && p(!1)
                    }
                }), []), (0, c.useImperativeHandle)(r, () => ({
                    elementRef: s,
                    animationRef: _
                }), [s, _]), (0, i.jsxs)("div", {
                    ref: s,
                    className: l()(oi().workFilterVisualItem, n.className),
                    children: [(0, i.jsx)(d.A, {
                        ref: o,
                        as: "h2",
                        size: "heading-01",
                        className: oi().title,
                        transitionOutType: "splitCharsSlideOutUp",
                        disableTriggerInOnScroll: !0,
                        children: e.split(" ").map((e, t) => (0, i.jsxs)("span", {
                            children: [e, " ", 0 === t ? (0, i.jsx)("br", {}) : " "]
                        }, e))
                    }), (0, i.jsx)("div", {
                        ref: _,
                        className: l()(oi().animationHolder),
                        children: (0, i.jsx)(rR.A, {
                            id: t,
                            loop: !0,
                            autoplay: m,
                            pauseWhenOutViewport: !0,
                            className: l()(oi().animation, "abs-fill")
                        })
                    })]
                })
            }

            function oc({
                activeCategory: e,
                categories: t,
                ref: r,
                ...n
            }) {
                let a = (0, c.useRef)(null),
                    s = r || a,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(void 0),
                    d = (0, c.useRef)([]),
                    {
                        width: _,
                        height: m
                    } = (0, U.A)();
                (0, T.mt)({
                    scroll: {
                        trigger: s,
                        vars: {}
                    },
                    setupOptions: () => ({
                        refs: {
                            elementRef: s
                        },
                        setupTransitionInTimeline: ot
                    })
                });
                let p = (0, c.useMemo)(() => e ? t ? .indexOf(e) : -1, [e, t]);
                return (0, eZ.A)(() => {
                    let e = "number" == typeof p && p >= 0;
                    or(o, e, e ? d ? .current[p] : void 0, !1), (async () => {
                        if ("number" == typeof u ? .current && u ? .current >= 0) {
                            let e = (0, T.xy)(d ? .current[u.current].elementRef);
                            await e ? .transitionOut()
                        }
                        if (e) {
                            let e = (0, T.xy)(d.current[p].elementRef);
                            e ? .transitionIn()
                        }
                    })(), u.current = p
                }, [p]), (0, eZ.A)(() => {
                    let e = "number" == typeof p && p >= 0;
                    if (e) {
                        let t = d.current[p];
                        or(o, !0, e ? t : void 0, !0)
                    }
                }, [_, m]), (0, rf.A)(() => {
                    let e = "number" == typeof p && p >= 0;
                    if (e) {
                        let t = d.current[p];
                        or(o, !0, e ? t : void 0, !0);
                        let r = (0, T.xy)(t.elementRef);
                        r && r.transitionIn()
                    }
                    u.current = p
                }), (0, i.jsx)("div", {
                    ref: s,
                    className: l()(oe().workFilterVisuals, n.className),
                    children: (0, i.jsx)("div", {
                        ref: o,
                        className: l()(oe().container),
                        children: t ? .map((e, t) => (0, i.jsx)(oo, {
                            ref: e => {
                                d.current[t] = e
                            },
                            title: e,
                            icon: (0, rS.O7)(e),
                            className: l()(oe().item)
                        }, e))
                    })
                })
            }
            oo.displayName = "WorkFilterVisualItem";
            let ou = "location",
                od = "category",
                o_ = (e, t) => e.name === t || e.content.title === t || e.content.country === t || e.content.countries ? .includes(t);

            function om(e, t, r, n = !1) {
                e ? .current && o.Ay.to(e.current, {
                    height: t ? "auto" : 0,
                    duration: .6 * !n,
                    ease: "Quad.easeInOut",
                    onComplete: () => {
                        r && r()
                    }
                })
            }
            var op = r(28803),
                og = r.n(op),
                of = r(37883),
                oh = r.n( of );

            function ox({
                className: e,
                fullBleed: t,
                imageInnerTransition: r,
                srcDesktop: n,
                src: a,
                altText: s,
                ref: o
            }) {
                let u = (0, c.useRef)(null);
                return (0, i.jsx)(i.Fragment, {
                    children: (a || n) && (0, i.jsx)(tO.A, {
                        ref: o || u,
                        src: a || n,
                        srcDesktop: n || a,
                        className: l()(oh().image, e),
                        sizes: t ? "100vw" : `${rK.K.MIN_768} 768px, ${rK.K.MIN_1024} 1024px, ${rK.K.MIN_1920} 1024px, 100vw`,
                        innerTransition: r,
                        layout: "fill",
                        objectFit: "cover",
                        alt: s ? ? ""
                    })
                })
            }
            let ov = {
                client: "",
                key_image: null,
                short_description: "",
                title: "",
                video: void 0
            };

            function ob({
                className: e,
                blok: t,
                imageInnerTransition: r,
                isPinnedToTop: n = !1,
                ref: a
            }) {
                let {
                    fullBleed: s
                } = t, {
                    content: u = ov
                } = t.case, m = (0, eJ.o)(), p = (0, c.useRef)(null), g = (0, c.useRef)(null), f = a ? .current ? .elementRef || p, h = (0, c.useRef)(null), x = (0, c.useRef)(null), v = (0, c.useRef)(null), b = (0, c.useRef)(null), y = (0, c.useRef)(null), T = (0, c.useRef)(null), I = (0, c.useRef)(null), C = (0, c.useRef)(null), w = (0, c.useRef)(null), k = (0, c.useRef)(null), j = (0, c.useRef)(null), S = (0, c.useRef)(null);
                (0, c.useImperativeHandle)(a, () => ({
                    mediaRef: h,
                    elementRef: f,
                    cardVideoRef: g
                }), [h, f, g]);
                let {
                    isDarkTheme: N
                } = (0, B.u2)(), {
                    client: R,
                    key_image: A,
                    title: O,
                    video: P,
                    short_description: L
                } = u, M = null, z = null, H = null;
                A ? .[0] ? (M = (0, rS.YQ)(A[0].image_portrait), z = (0, rS.YQ)(A[0].image_landscape), H = A[0].alt_text) : P ? .[0] ? .poster_image ? .filename && (M = (0, rS.YQ)(P[0] ? .poster_image.filename));
                let F = (0, c.useCallback)(e => {
                    let t = k.current;
                    t && e.to(t, {
                        opacity: +!!s,
                        ease: "power2.out",
                        duration: .3
                    }, "<")
                }, [s]);
                (0, c.useLayoutEffect)(() => {
                    let e = y.current,
                        r = T.current,
                        n = x.current,
                        i = j.current,
                        a = k.current;
                    if (!e || !r || !n || !i || !a || !f.current) return;
                    let l = f.current,
                        c = e => Math.ceil(Math.max(e.getBoundingClientRect().height, e.scrollHeight)),
                        u = () => {
                            o.Ay.set(r, {
                                clearProps: "height"
                            }), o.Ay.set(l, {
                                clearProps: "height"
                            });
                            let u = c(e),
                                d = e.getBoundingClientRect().width;
                            o.Ay.set(i, {
                                clearProps: "maxHeight"
                            });
                            let _ = c(a),
                                m = 4 >= Math.abs(u - _),
                                p = Math.max(u, _),
                                g = m ? p : u,
                                f = m ? p : _;
                            g === f && o.Ay.set(n, {
                                maxHeight: `${c(n)+Math.min(u,_)-Math.abs(u-_)}px`
                            }), w.current ? .kill(), w.current = o.Ay.timeline({
                                paused: !0
                            }).fromTo(n, {
                                width: "100%"
                            }, {
                                width: s ? `calc(100% - ${d+12}px)` : "100%",
                                ease: "power2.inOut",
                                duration: .5
                            }, "<").fromTo(r, {
                                height: 0
                            }, {
                                height: g,
                                ease: "power2.out",
                                duration: .4
                            }, "<").fromTo(i, {
                                maxHeight: f + "px",
                                opacity: 1
                            }, {
                                maxHeight: t.fullBleed ? f + "px" : 0,
                                ease: "power2.out",
                                duration: .4,
                                opacity: +!!t.fullBleed
                            }, t.fullBleed ? "<20%" : "<").fromTo(e, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "power2.inOut"
                            }, "<10%").fromTo(r, {
                                overflow: "hidden"
                            }, {
                                overflow: "visible",
                                duration: 0
                            }, "<")
                        };
                    window.addEventListener("resize", u);
                    let d = new ResizeObserver(() => {
                        u()
                    });
                    d.observe(l), d.observe(e), d.observe(a);
                    let _ = document.fonts;
                    return _ ? .ready.then(() => {
                        u()
                    }), () => {
                        window.removeEventListener("resize", u), d.disconnect(), S.current && cancelAnimationFrame(S.current), w.current ? .kill()
                    }
                }, []);
                let E = (0, c.useCallback)(() => {
                        C.current ? .reverse(), w.current ? .reverse()
                    }, []),
                    W = (0, c.useCallback)(() => {
                        C.current ? .play(), w.current ? .play()
                    }, []);
                if (!t.case || "string" == typeof t.case) return (0, i.jsx)(i.Fragment, {});
                let D = n ? f.current ? .getBoundingClientRect().top ? ? 0 : 0;
                return (0, i.jsx)(ty(), {
                    ref: I,
                    href: t.case.full_slug,
                    className: l()(og().link, e),
                    children: (0, i.jsxs)("div", {
                        ref: f,
                        className: l()(og().card, {
                            [og().fullBleed]: s,
                            [og().darkTheme]: N,
                            [og().lightTheme]: !N
                        }),
                        onMouseLeave: E,
                        onMouseEnter: W,
                        style: {
                            "--padding-from-top": D
                        },
                        children: [(0, i.jsx)("div", {
                            className: og().imageContainer,
                            ref: x,
                            children: (0, i.jsx)(ox, {
                                ref: h,
                                src: M,
                                srcDesktop: z,
                                fullBleed: s,
                                imageInnerTransition: r,
                                altText: H,
                                className: og().cardImage
                            })
                        }), (0, i.jsx)("div", {
                            ref: T,
                            className: og().descriptionWrapper,
                            children: (0, i.jsx)(_.A, {
                                ref: y,
                                transitionInType: "none",
                                as: "p",
                                size: "body-standard",
                                className: l()(og().description),
                                children: L
                            })
                        }), (0, i.jsxs)("div", {
                            className: og().projectInfo,
                            children: [(0, i.jsx)("div", {
                                className: og().textContentWrapper,
                                ref: j,
                                children: (0, i.jsxs)("div", {
                                    className: og().textContent,
                                    ref: k,
                                    children: [(0, i.jsx)(_.A, {
                                        ref: b,
                                        transitionInType: "none",
                                        as: "p",
                                        size: "body-standard",
                                        className: l()(og().client),
                                        children: R
                                    }), (0, i.jsx)(d.A, {
                                        ref: v,
                                        transitionInType: "none",
                                        as: "h4",
                                        size: "label-large",
                                        className: og().title,
                                        children: O
                                    })]
                                })
                            }), (0, i.jsx)(nb, {
                                ref: C,
                                fullBleed: s,
                                label: m.globalSettings.view_case,
                                onTimelineCreate: F,
                                className: og().growingArrowButton
                            })]
                        })]
                    })
                })
            }
            var oy = r(2501),
                oT = r.n(oy);
            let oI = (e, t, r, n) => {
                    let i = 2 * Math.PI / t,
                        a = [];
                    for (let s = 1; s <= t; s++) {
                        let t = r + Math.sin(s * i) * e,
                            l = n + Math.cos(s * i) * e;
                        a.push({
                            x: t,
                            y: l
                        })
                    }
                    return a
                },
                oC = 344,
                ow = 590;

            function ok(e, {
                title1Ref: t,
                title2Ref: r,
                maskedContainerRef: n,
                shapeContainerRef: i,
                title1MaskRef: a,
                title2MaskRef: s,
                playButtonRef: l
            }) {
                let o = (0, P.xy)(t),
                    c = (0, P.xy)(r),
                    u = (0, P.xy)(l),
                    d = t ? .current ? .offsetHeight,
                    _ = t ? .current ? .offsetTop || 0,
                    m = i ? .current ? .offsetHeight,
                    p = 0;
                if (e.add(o ? .getTimeline("in"), 0), e.add(c ? .getTimeline("in"), .1), e.addLabel("beforeTitleExpand", "-=0"), m && d && (p = m / 2 - d - 1.2 * _), t && r && a && s && ([a, s].forEach(e => {
                        (0, am.Xf)(e.current, "chars", {
                            linesClass: "mask-split-line"
                        }, !0)
                    }), e.fromTo([t.current, a.current], {
                        y: p
                    }, {
                        y: 0,
                        duration: .5,
                        ease: "power3.easeIn"
                    }, "beforeTitleExpand"), e.fromTo([r.current, s.current], {
                        y: -p
                    }, {
                        y: 0,
                        duration: .5,
                        ease: "power3.easeIn"
                    }, "beforeTitleExpand")), n ? .current && i ? .current) {
                    let t = .5 * window.innerWidth,
                        r = i.current.getBoundingClientRect(),
                        a = n.current.getBoundingClientRect(),
                        s = r.left + r.width / 2,
                        l = r.top - a.top + .41108090914348505 * r.height,
                        o = oI(.5 * r.width, 4, s, l),
                        c = oI(r.width, 4, s, l);
                    e.fromTo(n.current, {
                        clipPath: `polygon(
          ${t}px ${o[1].y}px, 
          ${t}px ${o[1].y}px, 
          ${t}px ${o[3].y}px, 
          ${t}px ${o[3].y}px)`
                    }, {
                        duration: 1,
                        ease: "Expo.easeInOut",
                        clipPath: `polygon(
          ${c[2].x}px ${o[1].y}px, 
          ${c[0].x}px ${o[1].y}px, 
          ${t}px ${o[3].y}px,
           ${t}px ${o[3].y}px)`,
                        clearProps: "clipPath"
                    }, "-=0.6")
                }
                u && e.add(u.getTimeline("in"), "-=0.4")
            }

            function oj(e, {
                title1MaskRef: t,
                title2MaskRef: r,
                playButtonRef: n,
                title1Ref: i,
                title2Ref: a,
                siteHeaderElementRef: s
            }) {
                let l = (0, P.xy)(n);
                t && r && i && a && (e.add((0, S._)([t.current, r.current], {
                    duration: .2
                })), e.add((0, S._)([i.current, a.current], {
                    duration: .2
                }), .3), e.add(l ? .getTimeline("out"), 0)), s ? .current && e.add((0, S._)(s ? .current, {
                    duration: .2
                }), 0)
            }

            function oS(e, {
                title1MaskRef: t,
                title2MaskRef: r,
                playButtonRef: n,
                title1Ref: i,
                title2Ref: a,
                siteHeaderElementRef: s
            }) {
                let l = (0, P.xy)(n);
                t && r && i && a && (e.add((0, S._)([t.current, r.current, i.current, a.current], {
                    to: 1,
                    duration: .3
                })), e.add(l ? .getTimeline("in"), .2)), s ? .current && e.add((0, S._)(s ? .current, {
                    to: 1,
                    duration: .3
                }), 0)
            }

            function oN(e, {
                title1MaskRef: t,
                title2MaskRef: r,
                title1Ref: n,
                title2Ref: i
            }) {
                t && r && n && i && e.to([t.current, r.current, n.current, i.current], {
                    yPercent: 50
                })
            }
            var oR = r(26403),
                oA = r.n(oR);

            function oO(e, {
                caseCardsRef: t,
                buttonsContainerRef: r
            }) {
                t ? .current ? .length > 0 && t.current.forEach(t => {
                    t ? .elementRef ? .current && e.add((0, h.HT)(t ? .elementRef ? .current, {
                        from: "bottom",
                        duration: .5
                    }), "<25%")
                });
                let n = r ? .current ? .querySelectorAll("button");
                n ? .length && e.add((0, S.m)(Array.from(n), {
                    duration: .4,
                    stagger: .08
                }), "<")
            }

            function oP() {}
            var oL = r(24594),
                oM = r.n(oL);
            let oz = ({
                    componentName: e
                }) => (0, i.jsxs)("div", {
                    className: l()("grid-gutter"),
                    style: {
                        height: "50vh",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "var(--foreground-color)",
                        justifyContent: "center",
                        flexDirection: "column",
                        borderTop: "solid 1px var(--background-color)",
                        color: "var(--background-color)",
                        textAlign: "center"
                    },
                    children: [(0, i.jsx)(d.A, {
                        as: "h3",
                        size: "heading-05",
                        isVisible: {
                            onMount: !0,
                            value: !0
                        },
                        children: "Placeholder"
                    }), (0, i.jsxs)(_.A, {
                        as: "p",
                        size: "body-large",
                        isVisible: {
                            onMount: !0,
                            value: !0
                        },
                        children: ["The component ", (0, i.jsx)("strong", {
                            children: e
                        }), " has not been created yet."]
                    })]
                }),
                oH = {
                    moon: {
                        path: "path/to/model?",
                        foregroundColor: "#000",
                        backgroundColor: "#E8A9A8",
                        shapeColor: "#f29a9a"
                    },
                    pinwheel: {
                        path: "path/to/model?",
                        foregroundColor: "#000",
                        backgroundColor: "#F8F0E4",
                        shapeColor: "#fff4bb"
                    },
                    bonsai: {
                        path: "path/to/model?",
                        foregroundColor: "#fff",
                        backgroundColor: "#1F4037",
                        shapeColor: "#39594d"
                    },
                    scale: {
                        path: "path/to/model?",
                        foregroundColor: "#fff",
                        backgroundColor: "#171717",
                        shapeColor: "#312e2c"
                    }
                };
            var oB = r(87706),
                oF = r.n(oB),
                oE = r(99382),
                oW = r.n(oE);

            function oD(e, {
                titleRef: t,
                subtitleRef: r,
                backgroundRef: n
            }) {
                let i = (0, P.xy)(t),
                    a = (0, P.xy)(r);
                n ? .current && e.add((0, S.m)(n.current), 0), i && a && (e.add(i.getTimeline("in"), 0), e.add(a.getTimeline("in"), 0))
            }

            function oU(e, {
                titleRef: t
            }) {
                let r = (0, P.xy)(t);
                r && e.add(r.getTimeline("out"), 0)
            }

            function o$(e, {
                titleHolderRef: t
            }) {
                t ? .current && e.fromTo(t.current, {
                    transform: "translate3d(0, 0vh,0)"
                }, {
                    duration: 3,
                    ease: "none",
                    transform: "translate3d(0, -20vh,0)"
                }).to(t.current, {
                    duration: .3,
                    ease: "Power1.easeIn",
                    transform: "translate3d(0, -80vh,0)"
                })
            }

            function oX({
                blok: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(null),
                    s = t.current ? .elementRef || n,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    _ = (0, c.useRef)(null),
                    m = (0, c.useRef)(null),
                    p = (0, c.useRef)(!1),
                    g = (0, T.zW)(() => ({
                        ref: s,
                        refs: {
                            titleRef: o,
                            subtitleRef: _,
                            backgroundRef: m
                        },
                        setupTransitionInTimeline: oD,
                        setupTransitionOutTimeline: oU
                    }), []),
                    f = (0, c.useRef)((0, w.A)(o$, {
                        titleHolderRef: u
                    })),
                    h = (0, c.useCallback)((e, t) => {
                        t === r.slideIndex && f.current.progress(e), e > 0 && e < 1 && !p.current ? (p.current = !0, g.transitionIn()) : (e <= 0 || e >= 1) && p.current && (p.current = !1, g.transitionOut())
                    }, [r.slideIndex]);
                return (0, c.useImperativeHandle)(t, () => ({
                    setProgress: h,
                    elementRef: s
                }), [h, s]), (0, i.jsxs)("div", {
                    ref: s,
                    style: {
                        "--foreground-color": r.config.foregroundColor
                    },
                    className: l()(oW().superpowerSlideBackground, r.className, "grid-gutter"),
                    ...(0, a.m)(e),
                    children: [(0, i.jsx)("div", {
                        style: {
                            "--background-color": r.config.backgroundColor
                        },
                        ref: m,
                        className: l()(oW().background, "abs-fill")
                    }), (0, i.jsx)("div", {
                        ref: u,
                        className: l()(oW().titleContent),
                        id: "superpower-title",
                        children: (0, i.jsx)(d.A, {
                            ref: o,
                            as: "h2",
                            size: "heading-01",
                            className: l()(oW().title),
                            disableTriggerInOnScroll: !0,
                            transitionOutType: "splitCharsSlideOutUp",
                            transitionOnMount: !0,
                            children: e.title ? .split(" ").map(e => (0, i.jsx)("span", {
                                className: l()(oW().line),
                                children: e
                            }, e))
                        })
                    })]
                })
            }
            var oV = r(23387),
                oG = r.n(oV);

            function oq(e, {
                titleRef: t,
                descriptionRef: r
            }) {
                let n = (0, P.xy)(t),
                    i = (0, P.xy)(r);
                n && e.add(n.getTimeline("in"), 0), i && e.add(i.getTimeline("in"), .2)
            }

            function oY(e, {
                titleRef: t,
                descriptionRef: r
            }) {
                let n = (0, P.xy)(t),
                    i = (0, P.xy)(r);
                n && e.add(n.getTimeline("out"), 0), i && e.add(i.getTimeline("out"), 0)
            }

            function oQ(e, {
                textContentRef: t
            }) {
                t ? .current && e.fromTo(t.current, {
                    transform: "translate3d(0, 20vh,0)"
                }, {
                    duration: 1,
                    ease: "Power1.easeOut",
                    transform: "translate3d(0, 0vh,0)"
                }, .5).to(t.current, {
                    duration: 2.3,
                    ease: "Power1.easeIn",
                    transform: "translate3d(0, -7.5vh,0)"
                }, 1.5).to(t.current, {
                    duration: .3,
                    ease: "Power1.easeIn",
                    transform: "translate3d(0, -90vh,0)"
                }, 3.8).to(t.current, {
                    opacity: 0,
                    duration: .2,
                    ease: "Power1.easeIn"
                }, 3.8)
            }

            function oJ({
                blok: e,
                ref: t,
                ...r
            }) {
                let n = (0, c.useRef)(null),
                    s = t.current ? .elementRef || n,
                    o = (0, c.useRef)(null),
                    u = (0, c.useRef)(null),
                    d = (0, c.useRef)(!1),
                    [m, p] = (0, c.useState)(),
                    g = (0, T.zW)(() => ({
                        ref: s,
                        refs: {
                            descriptionRef: o
                        },
                        setupTransitionInTimeline: oq,
                        setupTransitionOutTimeline: oY
                    }), []),
                    f = (0, c.useRef)((0, w.A)(oQ, {
                        descriptionRef: o,
                        textContentRef: u
                    })),
                    h = (0, c.useCallback)((e, t) => {
                        t === r.slideIndex && (f.current.progress(e), e > .4 && e < 1 && !d.current ? (d.current = !0, g.transitionIn()) : (e <= .4 || e >= 1) && d.current && (d.current = !1, g.transitionOut()))
                    }, [r.slideIndex]);
                return (0, c.useImperativeHandle)(t, () => ({
                    setProgress: h,
                    elementRef: s
                }), [h, s]), (0, nN.A)(() => {
                    setTimeout(() => {
                        let e;
                        "u" > typeof document && (e = document.querySelector("#superpower-title") ? .getBoundingClientRect().height), p(e)
                    }, 100)
                }, []), (0, i.jsx)("div", {
                    ref: s,
                    style: {
                        "--foreground-color": r.config.foregroundColor
                    },
                    className: l()(oG().superpowerSlide, r.className, "grid-gutter"),
                    ...(0, a.m)(e),
                    children: (0, i.jsx)("div", {
                        ref: u,
                        className: l()(oG().textContent),
                        style: {
                            "--superpower-title-height": m ? `${m}px` : void 0
                        },
                        children: e.description && (0, i.jsx)(_.A, {
                            ref: o,
                            transitionInType: "splitLineRotateIn",
                            transitionOutType: "fadeOut",
                            as: "p",
                            size: "body-standard",
                            className: l()(oG().description),
                            children: e.description
                        })
                    })
                })
            }
            var oZ = r(90779),
                oK = r.n(oZ),
                o0 = r(19520),
                o1 = r(33061),
                o2 = r(17597);

            function o5(e) {
                let t = (0, c.useRef)(null),
                    {
                        nodes: r,
                        animations: n
                    } = (0, a2.p)("/assets/3d/Shapes/Bonsai.glb"),
                    {
                        width: a
                    } = (0, U.A)(),
                    s = (0, c.useRef)(void 0),
                    l = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    t.current && (s.current = new a5.AnimationMixer(t.current), s.current.clipAction(n[0]).play())
                }, [n]), (0, aJ.D)(() => {
                    if (s ? .current && e.progressRef && e.isCurrent && l.current && e.progressRef.current < 100) {
                        let t = e.progressRef.current,
                            r = (0, aU.a7)(t / 100, 0, .5, .5, 1) * n[0].duration,
                            i = t * n[0].duration / 100;
                        s.current.setTime(e.homepage ? r : i), l.current.position.z = (0, aU.ix)(e.progressRef.current, 0, 100, 800, 200)
                    }
                });
                let o = e.homepage ? (0, i.jsx)(o2.$, {
                    backside: !0,
                    samples: 1,
                    iridescence: 1,
                    iridescenceIOR: .6,
                    backsideResolution: 32,
                    iridescenceThicknessRange: [0, 200],
                    envMapIntensity: .7,
                    background: new a5.Color("#4C4744"),
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    clearcoat: 1
                }) : (0, i.jsx)(o2.$, {
                    backside: !0,
                    transparent: !0,
                    samples: 1,
                    iridescence: .5 * !eC.CI,
                    iridescenceIOR: .65,
                    backsideResolution: eC.CI ? 6 : 32,
                    iridescenceThicknessRange: [0, 100],
                    clearcoat: 1,
                    envMapIntensity: eC.CI ? .1 : .8,
                    opacity: .85,
                    transmission: 1,
                    backsideThickness: 0,
                    chromaticAberration: .03,
                    transmissionSampler: !1,
                    roughness: 0,
                    clearcoatRoughness: 0,
                    reflectivity: .5,
                    sheenColor: e.shapeColor || "#FFFFFF",
                    sheen: .5,
                    metalness: 0,
                    ior: eC.CI ? .8 : 1.5,
                    specularColor: "white",
                    specularIntensity: eC.CI ? .1 : .5,
                    attenuationColor: "white",
                    thickness: 0,
                    anisotropicBlur: .1 * !eC.CI,
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    background: new a5.Color(e.shapeColor || "#4C4744"),
                    emissive: e.shapeColor,
                    emissiveIntensity: .25
                });
                return (0, i.jsx)("group", {
                    ref: t,
                    ...e,
                    dispose: null,
                    visible: e.isCurrent,
                    children: (0, i.jsx)("group", {
                        ref: l,
                        position: [0, 7, 0],
                        children: (0, i.jsxs)("group", {
                            name: "Bonsai",
                            position: [0, 0, 300],
                            rotation: [0, 0, 0],
                            children: [e.homepage && (0, i.jsx)("mesh", {
                                visible: !1,
                                geometry: r.Bonsai_1.geometry,
                                children: o
                            }), (0, i.jsx)("mesh", {
                                name: "Bonsai_1",
                                geometry: r.Bonsai_1.geometry,
                                scale: Math.min(.475, (0, aU.ix)(a, 320, 650, .275, .475)),
                                children: o
                            })]
                        })
                    })
                })
            }

            function o3(e) {
                let t = (0, c.useRef)(null),
                    {
                        nodes: r,
                        animations: n
                    } = (0, a2.p)("/assets/3d/Shapes/Enso.glb"),
                    {
                        width: a
                    } = (0, U.A)(),
                    s = (0, c.useRef)(void 0),
                    l = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    t.current && (s.current = new a5.AnimationMixer(t.current), s.current.clipAction(n[0]).play())
                }, [n]), (0, aJ.D)(() => {
                    if (s ? .current && e.progressRef && e.isCurrent && e.progressRef.current < 100) {
                        let t = e.progressRef.current,
                            r = (0, aU.a7)(t / 100, 0, .5, .5, 1) * n[0].duration,
                            i = t * n[0].duration / 100;
                        s.current.setTime(e.homepage ? r : i)
                    }
                });
                let o = e.homepage ? (0, i.jsx)(o2.$, {
                    backside: !0,
                    samples: 1,
                    roughness: .1,
                    iridescence: 1,
                    iridescenceIOR: .65,
                    backsideResolution: 32,
                    iridescenceThicknessRange: [0, 200],
                    envMapIntensity: .7,
                    background: new a5.Color(!e.homepage && e.shapeColor ? e.shapeColor : "#4C4744"),
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    transparent: !e.homepage,
                    opacity: e.homepage ? 1 : .85,
                    clearcoat: 1
                }) : (0, i.jsx)(o2.$, {
                    backside: !0,
                    transparent: !0,
                    samples: 1,
                    roughness: .1 * !eC.CI,
                    iridescence: .8 * !eC.CI,
                    iridescenceIOR: eC.CI ? .1 : .65,
                    backsideResolution: 32,
                    iridescenceThicknessRange: [0, 100],
                    envMapIntensity: .7,
                    opacity: e.homepage ? 1 : .85,
                    transmission: 1,
                    backsideThickness: 0,
                    chromaticAberration: .03,
                    transmissionSampler: !1,
                    clearcoat: 1,
                    clearcoatRoughness: .1 * !eC.CI,
                    reflectivity: .5,
                    sheenColor: "#FFFFFF",
                    sheen: 0,
                    metalness: 0,
                    ior: 1.5,
                    specularColor: "white",
                    specularIntensity: eC.CI ? .1 : .5,
                    attenuationColor: "white",
                    thickness: 0,
                    anisotropicBlur: .1 * !eC.CI,
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    background: new a5.Color(e.shapeColor || "#4C4744")
                });
                return (0, i.jsx)("group", {
                    ref: t,
                    ...e,
                    dispose: null,
                    visible: e.isCurrent,
                    children: (0, i.jsx)("group", {
                        children: (0, i.jsx)("group", {
                            ref: l,
                            position: [0, 4, -150],
                            children: (0, i.jsxs)("group", {
                                name: "Enso",
                                position: [0, 0, -608.548],
                                rotation: [-.611, 0, 0],
                                scale: Math.min(.95, (0, aU.ix)(a, 320, 650, .575, .95)),
                                children: [e.homepage && (0, i.jsx)("mesh", {
                                    visible: !1,
                                    geometry: r.Enso_1.geometry,
                                    children: o
                                }), (0, i.jsx)("mesh", {
                                    name: "Enso_1",
                                    geometry: r.Enso_1.geometry,
                                    children: o
                                })]
                            })
                        })
                    })
                })
            }

            function o7(e) {
                let t = (0, c.useRef)(null),
                    {
                        nodes: r,
                        animations: n
                    } = (0, a2.p)("/assets/3d/Shapes/TsukiMoon.glb"),
                    {
                        width: a
                    } = (0, U.A)(),
                    s = (0, c.useRef)(void 0),
                    l = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    t.current && (s.current = new a5.AnimationMixer(t.current), s.current.clipAction(n[0]).play())
                }, [n]), (0, aJ.D)(() => {
                    if (s ? .current && e.progressRef && e.isCurrent && l.current && e.progressRef.current < 100) {
                        let t = e.progressRef.current,
                            r = (0, aU.a7)(t / 100, 0, .5, .5, 1) * n[0].duration,
                            i = t * n[0].duration / 100;
                        s.current.setTime(e.homepage ? r : i), l.current.position.z = (0, aU.ix)(e.progressRef.current, 0, 100, 30, -10)
                    }
                });
                let o = e.homepage ? (0, i.jsx)(o2.$, {
                    backside: !0,
                    samples: 1,
                    iridescence: 1,
                    iridescenceIOR: .65,
                    backsideResolution: 512,
                    iridescenceThicknessRange: [0, 200],
                    envMapIntensity: .7,
                    background: new a5.Color("#4C4744"),
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    clearcoat: 1
                }) : (0, i.jsx)(o2.$, {
                    backside: !0,
                    transparent: !0,
                    samples: 1,
                    iridescence: +!eC.CI,
                    iridescenceIOR: .65 * !eC.CI,
                    backsideThickness: 0,
                    backsideResolution: eC.CI ? 256 : 512,
                    iridescenceThicknessRange: [0, 200],
                    clearcoat: eC.CI ? .3 : .4,
                    envMapIntensity: eC.CI ? 1 : 2,
                    opacity: .85,
                    transmission: 1,
                    chromaticAberration: 0,
                    transmissionSampler: !1,
                    roughness: .2 * !!eC.CI,
                    clearcoatRoughness: 0,
                    reflectivity: eC.CI ? .5 : 1,
                    sheenColor: "#f29a9a",
                    sheen: +!eC.CI,
                    metalness: 0,
                    ior: 1,
                    specularColor: "white",
                    specularIntensity: eC.CI ? .2 : .3,
                    attenuationColor: "white",
                    thickness: eC.CI ? .05 : .1,
                    anisotropicBlur: .1 * !eC.CI,
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    background: new a5.Color(e.shapeColor || "#4C4744")
                });
                return (0, i.jsx)("group", {
                    ref: t,
                    ...e,
                    dispose: null,
                    visible: e.isCurrent,
                    children: (0, i.jsx)("group", {
                        ref: l,
                        position: [-1, 4, 0],
                        children: (0, i.jsxs)("group", {
                            name: "Moon",
                            position: [0, 0, -450],
                            rotation: [-.873, 0, 0],
                            scale: Math.min(e.homepage ? .6 : .7, (0, aU.ix)(a, 320, 650, .3, e.homepage ? .6 : .7)),
                            children: [e.homepage && (0, i.jsx)("mesh", {
                                visible: !1,
                                geometry: r.Left.geometry,
                                position: [4.163, -14.247, -.392],
                                rotation: [-.009, .11, .125],
                                children: o
                            }), (0, i.jsx)("mesh", {
                                name: "Left",
                                geometry: r.Left.geometry,
                                position: [4.163, -14.247, -.392],
                                rotation: [-.009, .11, .125],
                                children: o
                            }), (0, i.jsx)("mesh", {
                                name: "Right",
                                geometry: r.Right.geometry,
                                position: [-5.153, -3.259, 0],
                                rotation: [0, 0, -Math.PI],
                                children: o
                            })]
                        })
                    })
                })
            }

            function o4(e) {
                let t = (0, c.useRef)(null),
                    {
                        nodes: r,
                        animations: n
                    } = (0, a2.p)("/assets/3d/Shapes/Pinwheel.glb"),
                    {
                        width: a
                    } = (0, U.A)(),
                    s = (0, c.useRef)(void 0),
                    l = (0, c.useRef)(null);
                (0, c.useEffect)(() => {
                    t.current && (s.current = new a5.AnimationMixer(t.current), s.current.clipAction(n[0]).play())
                }, [n]), (0, aJ.D)(() => {
                    if (s ? .current && e.progressRef && e.isCurrent && l.current && e.progressRef.current < 100) {
                        let t = e.progressRef.current,
                            r = (0, aU.a7)(t / 100, 0, .5, .5, 1) * n[0].duration,
                            i = t * n[0].duration / 100;
                        s.current.setTime(e.homepage ? r : i), l.current.position.z = (0, aU.ix)(e.progressRef.current, 0, 100, 100, -50)
                    }
                });
                let o = e.homepage ? (0, i.jsx)(o2.$, {
                    backside: !0,
                    samples: 1,
                    iridescence: 1,
                    iridescenceIOR: .7,
                    backsideResolution: 512,
                    iridescenceThicknessRange: [0, 200],
                    envMapIntensity: .7,
                    background: new a5.Color("#4C4744"),
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    clearcoat: 1
                }) : (0, i.jsx)(o2.$, {
                    backside: !0,
                    transparent: !0,
                    samples: 1,
                    iridescence: .8 * !eC.CI,
                    iridescenceIOR: 0,
                    backsideThickness: 0,
                    backsideResolution: eC.CI ? 128 : 512,
                    iridescenceThicknessRange: [0, 200],
                    clearcoat: 0,
                    envMapIntensity: eC.CI ? .1 : 4,
                    opacity: .85,
                    transmission: 1,
                    chromaticAberration: 0,
                    transmissionSampler: !1,
                    roughness: 0,
                    clearcoatRoughness: 0,
                    reflectivity: 0,
                    sheenColor: "#fff",
                    sheen: (eC.CI, .6),
                    metalness: 0,
                    ior: 1,
                    specularColor: "white",
                    specularIntensity: .3 * !eC.CI,
                    attenuationColor: "white",
                    thickness: .2 * !eC.CI,
                    anisotropicBlur: .1 * !eC.CI,
                    distortion: 0,
                    distortionScale: 0,
                    temporalDistortion: 0,
                    background: new a5.Color(e.shapeColor || "#4C4744")
                });
                return (0, i.jsx)("group", {
                    ref: t,
                    ...e,
                    dispose: null,
                    visible: e.isCurrent,
                    children: (0, i.jsx)("group", {
                        ref: l,
                        children: (0, i.jsx)("group", {
                            children: (0, i.jsxs)("group", {
                                name: "Pinwheel",
                                position: [0, 1, -500],
                                scale: Math.min(.4, (0, aU.ix)(a, 320, 650, .275, .4)),
                                children: [e.homepage && (0, i.jsx)("mesh", {
                                    visible: !1,
                                    geometry: r["1"].geometry,
                                    position: [-149.533, 42.054, 0],
                                    rotation: [.12, .897, 2.948],
                                    children: o
                                }), (0, i.jsx)("mesh", {
                                    name: "1",
                                    geometry: r["1"].geometry,
                                    position: [-149.533, 42.054, 0],
                                    rotation: [.12, .897, 2.948],
                                    children: o
                                }), (0, i.jsx)("mesh", {
                                    name: "2",
                                    geometry: r["2"].geometry,
                                    position: [137.746, 73.393, 187.902],
                                    rotation: [-2.195, .109, -2.76],
                                    children: o
                                }), (0, i.jsx)("mesh", {
                                    name: "3",
                                    geometry: r["3"].geometry,
                                    position: [164.698, 204.833, 143.402],
                                    rotation: [-2.44, .292, -1.203],
                                    children: o
                                }), (0, i.jsx)("mesh", {
                                    name: "4",
                                    geometry: r["4"].geometry,
                                    position: [-94.382, -96.64, -14.425],
                                    rotation: [-2.644, 1.064, -2.417],
                                    children: o
                                })]
                            })
                        })
                    })
                })
            }

            function o9({
                slides: e,
                ref: t
            }) {
                let r = (0, c.useRef)(0),
                    n = (0, c.useRef)(0),
                    a = (0, c.useRef)(null),
                    s = (0, c.useRef)(0),
                    l = (0, c.useRef)(null),
                    o = (0, c.useRef)([]),
                    u = (0, c.useRef)([]),
                    d = (0, c.useRef)([]),
                    _ = (0, c.useCallback)(e => {
                        r.current = e
                    }, []);
                (0, c.useEffect)(() => {
                    e.forEach((e, t) => {
                        o.current[t] && (o.current[t].position.y = 100)
                    })
                }, [e]);
                let m = (0, c.useCallback)(e => {
                        s.current !== e && (s.current = e)
                    }, []),
                    p = (0, c.useCallback)(e => {
                        d.current = e
                    }, []);
                return (0, c.useImperativeHandle)(t, () => ({
                    setProgress: _,
                    setProgressData: p,
                    setCurrentSlide: m
                }), [p, _, m]), (0, aJ.D)(() => {
                    if (!a.current) return;
                    let e = r.current;
                    if (a.current.position.z = (0, aU.ix)(e, 0, 1, -200, -50), r.current > 0 && r.current < 1 && l.current && d.current[0] ? .progress) {
                        let e = o.current[s.current],
                            {
                                progress: t
                            } = d.current[s.current];
                        e && (n.current = Math.min(2 * t * 100, 99.9999), e.position.x = 0, (1 === t || t <= .05) && (e.position.y = 200), t > .05 && t < .5 && (e.position.y = 0), t >= .5 && t <= .9 && (e.position.y = (0, aU.ix)(t, .5, .9, 0, 7)), t >= .9 && t <= .91 && (e.position.y = 7), t > .91 && (e.position.y = (0, aU.a6)(t, .91, 1, 7, 80)))
                    }
                }), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(c.Suspense, {
                        fallback: null,
                        children: [(0, i.jsx)(aK.u, {
                            fov: 8,
                            ref: a,
                            position: [0, 0, 0],
                            makeDefault: !0,
                            far: 1e4,
                            near: .01
                        }), (0, i.jsx)("group", {
                            ref: l,
                            position: [0, 1, 0],
                            rotation: [0, 0, 0],
                            children: e.map((e, t) => (0, i.jsx)("group", {
                                children: (0, i.jsx)("group", {
                                    position: [0, 0, .2],
                                    ref: e => {
                                        o.current[t] = e
                                    },
                                    children: (0, i.jsx)("group", {
                                        ref: e => {
                                            u.current[t] = e
                                        },
                                        children: {
                                            moon: (0, i.jsx)(o7, {
                                                progressRef: n,
                                                backgroundColor: e.backgroundColor,
                                                shapeColor: e.shapeColor,
                                                isCurrent: s.current === t
                                            }),
                                            pinwheel: (0, i.jsx)(o4, {
                                                progressRef: n,
                                                backgroundColor: e.backgroundColor,
                                                shapeColor: e.shapeColor,
                                                isCurrent: s.current === t
                                            }),
                                            bonsai: (0, i.jsx)(o5, {
                                                progressRef: n,
                                                backgroundColor: e.backgroundColor,
                                                shapeColor: e.shapeColor,
                                                isCurrent: s.current === t
                                            }),
                                            scale: (0, i.jsx)(o3, {
                                                progressRef: n,
                                                backgroundColor: e.backgroundColor,
                                                shapeColor: e.shapeColor,
                                                isCurrent: s.current === t
                                            })
                                        }[e.id]
                                    })
                                })
                            }, e.id.concat("-animal")))
                        }), (0, i.jsxs)(o0.OH, {
                            files: "/assets/hdr/studio_small_05_1k_desaturated.hdr",
                            resolution: 256,
                            children: [(0, i.jsx)(o1.O, {
                                form: "circle",
                                color: "#AEA89F",
                                intensity: .1,
                                position: [2, 5, 1],
                                rotation: [-.31, -.28, 0],
                                scale: [3, 20, 1]
                            }), (0, i.jsx)(o1.O, {
                                form: "circle",
                                color: "#AEA89F",
                                intensity: 10,
                                position: [-4, 7, 2],
                                scale: [3, 8, 9],
                                rotation: [.68, -1.68, -.07]
                            })]
                        })]
                    })
                })
            }
            a2.p.preload("/assets/3d/Shapes/Bonsai.glb"), a2.p.preload("/assets/3d/Shapes/Enso.glb"), a2.p.preload("/assets/3d/Shapes/TsukiMoon.glb"), a2.p.preload("/assets/3d/Shapes/Pinwheel.glb");
            var o8 = r(65900),
                o6 = r(40963);

            function ce({
                ref: e,
                slides: t,
                className: r
            }) {
                let n = (0, c.useRef)(null),
                    a = e.current ? .elementRef || n,
                    s = (0, c.useRef)(null),
                    o = (0, c.useRef)(0),
                    u = (0, c.useCallback)(e => {
                        s ? .current && (s.current.setProgress(e), (0, aJ.m)())
                    }, []),
                    d = (0, c.useCallback)(e => {
                        o.current = e, s ? .current && s.current.setCurrentSlide(e)
                    }, []),
                    _ = (0, c.useCallback)(e => {
                        s ? .current && s.current.setProgressData(e)
                    }, []);
                return (0, c.useImperativeHandle)(e, () => ({
                    setProgress: u,
                    setCurrentSlide: d,
                    setProgressData: _,
                    elementRef: a
                }), [_, a, u, d]), (0, i.jsx)("div", {
                    ref: a,
                    className: l()(oK().superpowerWebgl, r),
                    children: (0, i.jsx)("div", {
                        className: l()(oK().isInViewWrap, r),
                        children: (0, i.jsxs)(aZ.Hl, {
                            frameloop: "always",
                            gl: {
                                logarithmicDepthBuffer: !0,
                                toneMappingExposure: 1.5
                            },
                            dpr: eC.CI ? [1, 1.4] : [1, ai().safari && 14 >= parseFloat(`${ai().version}`) || ai().android && 9 >= parseFloat(`${ai().osversion}`) ? 1 : 2],
                            children: [(0, i.jsx)(o9, {
                                ref: s,
                                slides: t
                            }), (0, i.jsx)(o8.X, {
                                pixelated: !0
                            }), (0, i.jsx)(o6.Q, {})]
                        })
                    })
                })
            }
            let ct = {
                auto_accordion: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        m = (0, c.useRef)(null),
                        g = (0, c.useRef)(0),
                        [f, h] = (0, c.useState)(0),
                        x = e.items ? ? [],
                        v = (0, c.useMemo)(() => o.Ay.timeline({
                            paused: !0
                        }), []),
                        b = (0, c.useCallback)(e => {
                            let t = Math.min(Math.max(e, 0), Math.max(x.length - 1, 0));
                            g.current !== t && (g.current = t, h(t))
                        }, [x.length]),
                        y = (0, c.useCallback)(() => {
                            let e = m.current;
                            return e ? -Math.max(e.offsetHeight - window.innerHeight, 0) : 0
                        }, []);
                    return (0, c.useEffect)(() => {
                        let e = m.current;
                        return v.clear(), e && v.fromTo(e, {
                            y: 0
                        }, {
                            y: y,
                            duration: 1,
                            ease: "none"
                        }), () => {
                            v.clear(), o.Ay.set(e, {
                                clearProps: "transform"
                            })
                        }
                    }, [y, x.length, v]), (0, c.useEffect)(() => () => {
                        v.kill()
                    }, [v]), (0, c.useEffect)(() => {
                        b(g.current)
                    }, [x.length, b]), (0, u.A)({
                        trigger: s,
                        pin: s,
                        animation: v,
                        disabled: 0 === x.length,
                        vars: {
                            start: "top top",
                            end: () => `+=${Math.max(x.length,1)*window.innerHeight/2}`,
                            pinType: "transform",
                            anticipatePin: 1,
                            scrub: !0,
                            invalidateOnRefresh: !0,
                            onUpdate: e => {
                                b(Math.floor(e.progress * x.length))
                            },
                            onLeaveBack: () => {
                                b(0)
                            }
                        }
                    }), (0, i.jsx)("section", {
                        ref: s,
                        className: l()(p().autoAccordion, r.className),
                        ...(0, a.m)(e),
                        children: (0, i.jsxs)("div", {
                            ref: m,
                            className: l()(p().wrapper, "grid-gutter"),
                            children: [e.title && (0, i.jsx)(d.A, {
                                className: p().title,
                                as: "h2",
                                size: "heading-03",
                                transitionInType: "splitRotateX3dIn",
                                disableTriggerInOnScroll: !1,
                                children: e.title
                            }), (0, i.jsx)("div", {
                                className: p().list,
                                children: x.map((e, t) => {
                                    let r = f === t,
                                        n = e.long_description || e.short_description;
                                    return (0, i.jsxs)("article", {
                                        className: l()(p().item, {
                                            [p().open]: r
                                        }),
                                        onClick: () => b(t),
                                        children: [(0, i.jsxs)("button", {
                                            type: "button",
                                            className: l()(p().header, "button"),
                                            "aria-expanded": r,
                                            onClick: () => b(t),
                                            children: [(0, i.jsx)("span", {
                                                className: p().index,
                                                children: `0${t+1}`.slice(-2)
                                            }), (0, i.jsx)(d.A, {
                                                className: p().itemTitle,
                                                as: "h3",
                                                size: "heading-05",
                                                transitionInType: "none",
                                                disableTriggerInOnScroll: !0,
                                                children: e.title
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: p().content,
                                            "aria-hidden": !r,
                                            children: n && (0, i.jsx)(_.A, {
                                                className: p().description,
                                                as: "p",
                                                size: "body-large",
                                                transitionInType: "none",
                                                disableTriggerInOnScroll: !0,
                                                children: n
                                            })
                                        })]
                                    }, e._uid)
                                })
                            })]
                        })
                    })
                },
                image_grid_5: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        d = (0, c.useRef)([]),
                        _ = (0, c.useRef)([]),
                        m = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: x,
                            setupTransitionOutTimeline: b
                        }), []),
                        {
                            inView: p
                        } = (0, u.A)({
                            trigger: o,
                            enableInView: !0
                        });
                    return (0, y.s)(m, {
                        onMount: e ? .onMount ? ? !0,
                        value: (e ? .value ? ? !0) && !!p
                    }), (0, u.A)({
                        trigger: o,
                        animation: (0, w.A)(v, {
                            imageItemRefs: d
                        }),
                        vars: {
                            scrub: !0,
                            start: "center bottom",
                            end: "center top"
                        }
                    }), (0, i.jsx)("div", {
                        ref: o,
                        className: l()(f().imageGrid5, t),
                        ...(0, a.m)(r),
                        children: r.images.slice(0, 5).map((e, t) => (0, i.jsx)("div", {
                            ref: e => {
                                d.current[t] = e
                            },
                            className: f().imageItem,
                            children: (0, i.jsx)(C(), {
                                ref: e => {
                                    _.current[t] = e
                                },
                                src: e.filename,
                                alt: e.alt || "",
                                className: f().image,
                                fill: !0,
                                sizes: "33vw"
                            })
                        }, e.id))
                    })
                },
                sticky_notes: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: N,
                            setupTransitionOutTimeline: R
                        }), []);
                    return (0, y.s)(u, e), F(o, r.use_accent_color, {
                        foreground: r.accent_color_foreground ? .color || "",
                        background: r.accent_color_background ? .color || ""
                    }), (0, i.jsx)("div", {
                        ref: o,
                        className: l()(j().stickyNotes, t),
                        ...(0, a.m)(r),
                        children: r.notes.map((e, t) => (0, i.jsx)(H, {
                            note: e,
                            className: j().note,
                            index: t
                        }, e._uid))
                    })
                },
                story_cards: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n,
                        u = (0, c.useRef)(null),
                        d = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(t.cards.map(() => (0, c.createRef)())),
                        [f, h] = (0, c.useState)(!0),
                        [x, v] = (0, c.useState)(!1),
                        {
                            lock: b,
                            unLock: y
                        } = (0, $.d)(),
                        T = (0, c.useCallback)(() => {
                            if (!p ? .current) return;
                            let {
                                x: e,
                                minX: t,
                                maxX: r
                            } = p.current, n = o.Ay.utils.normalize(r, t, e);
                            h(e >= r), v(e <= t), _.current && o.Ay.set(_.current, {
                                left: `${100*n}%`,
                                translateX: `${-100*n}%`
                            })
                        }, [p]);
                    p.current = (0, D.P)(u, {
                        type: "x",
                        edgeResistance: .8,
                        lockAxis: !0,
                        inertia: !0,
                        cursor: "grab",
                        onDrag: T,
                        onThrowUpdate: T
                    }, {
                        bounds: m
                    });
                    let I = m ? .current ? .getBoundingClientRect().width || 0,
                        C = u ? .current ? .getBoundingClientRect().width || 0;
                    p.current && (I >= C ? p.current.disable() : p.current.enable());
                    let {
                        width: w
                    } = (0, U.A)();
                    (0, c.useEffect)(() => {
                        if (!_.current || !d.current) return;
                        let e = m ? .current ? .getBoundingClientRect(),
                            t = u ? .current ? .getBoundingClientRect();
                        e && t && (o.Ay.set(_.current, {
                            width: `${100*Math.min(1,e.width/t.width)}%`
                        }), o.Ay.set(d.current, {
                            visibility: e.width < t.width ? "visible" : "hidden"
                        }))
                    }, [m, u, _, d, w]);
                    let k = (0, c.useRef)(null),
                        j = (0, c.useRef)(null),
                        S = {
                            currentX: 0,
                            minX: 0,
                            maxX: 0,
                            width: 0
                        },
                        N = () => {
                            if (!g.current[0] ? .current || !p.current) return S;
                            let e = o.Ay.getProperty(u.current, "x"),
                                t = o.Ay.getProperty(g.current[0].current, "width"),
                                r = o.Ay.getProperty(j.current, "width"),
                                {
                                    minX: n,
                                    maxX: i
                                } = p.current;
                            return {
                                currentX: e,
                                minX: n,
                                maxX: i,
                                width: t + r
                            }
                        },
                        {
                            minX: R,
                            maxX: A
                        } = N();
                    return F(s, t.use_accent_color, {
                        foreground: t.accent_color_foreground ? .color || "",
                        background: t.accent_color_background ? .color || ""
                    }), (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(W().storyCards, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)("div", {
                            className: W().gridGutterWidth,
                            ref: k
                        }), (0, i.jsx)("div", {
                            className: W().gapBetweenImages,
                            ref: j
                        }), (0, i.jsx)("div", {
                            className: l()(W().title, W().flexContainer),
                            children: p.current && A !== R && (0, i.jsxs)("div", {
                                className: l()(W().buttonsContainer),
                                children: [(0, i.jsx)("button", {
                                    className: W().arrowButton,
                                    disabled: f,
                                    onClick: () => {
                                        let {
                                            maxX: e,
                                            currentX: t,
                                            width: r
                                        } = N(), n = Math.min(e, (Math.ceil(t / r) + +(t % r < 1)) * r);
                                        h(n === e), v(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    children: (0, i.jsx)(Z.A, {
                                        name: "arrow-left-light",
                                        className: l()(W().icon)
                                    })
                                }), (0, i.jsx)("button", {
                                    className: W().arrowButton,
                                    disabled: x,
                                    onClick: () => {
                                        let {
                                            minX: e,
                                            currentX: t,
                                            width: r
                                        } = N(), n = Math.max(e, (Math.floor(t / r) - (t % r < 1)) * r);
                                        v(n === e), h(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    children: (0, i.jsx)(Z.A, {
                                        name: "arrow-right-light",
                                        className: l()(W().icon)
                                    })
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            ref: m,
                            className: W().draggableBounds,
                            children: (0, i.jsx)("div", {
                                ref: u,
                                className: W().slider,
                                onWheel: e => {
                                    let t = Math.abs(e.deltaX),
                                        r = Math.abs(e.deltaY);
                                    if (!(t > 0) || !(t > r)) return void y();
                                    if (b(), p.current) {
                                        let {
                                            minX: t,
                                            maxX: r
                                        } = p.current, n = parseInt(o.Ay.getProperty(u.current, "x"), 10) - e.deltaX, i = Math.min(r, Math.max(t, n));
                                        h(i === r), v(i === t), o.Ay.set(u.current, {
                                            x: i
                                        });
                                        let a = o.Ay.utils.normalize(r, t, n);
                                        _.current && o.Ay.set(_.current, {
                                            left: `${100*a}%`,
                                            translateX: `${-100*a}%`
                                        })
                                    }
                                },
                                onMouseLeave: y,
                                children: t.cards.map((e, t) => (0, i.jsx)(J, {
                                    card: e,
                                    className: W().card,
                                    ref: g.current[t]
                                }, e._uid))
                            })
                        })]
                    })
                },
                header_rotating_shape: em,
                text_dropdown: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        u = n || s,
                        d = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        [p, g] = (0, c.useState)(!1),
                        f = (0, T.zW)(() => ({
                            ref: u,
                            refs: {
                                elementRef: u
                            },
                            setupTransitionInTimeline: ef,
                            setupTransitionOutTimeline: eh
                        }), []);
                    (0, y.s)(f, e);
                    let h = () => {
                        g(e => !e)
                    };
                    return (0, c.useEffect)(() => {
                        d.current && o.Ay.to(d.current, {
                            scaleY: p ? -1 : 1,
                            duration: .4
                        }), o.Ay.to(m.current, {
                            height: p ? m.current ? .scrollHeight : 0,
                            paddingBottom: p ? void 0 : 0,
                            ease: "Quad.easeInOut",
                            clearProps: p ? "height,paddingBottom" : "",
                            onComplete: () => {
                                ej().refresh()
                            }
                        })
                    }, [p]), (0, i.jsxs)("div", {
                        ref: u,
                        className: l()(eg().textDropdown, t),
                        ...(0, a.m)(r),
                        children: [(0, i.jsx)("div", {
                            onKeyDown: e => {
                                ("Enter" === e.code || "Space" === e.code) && (e.preventDefault(), h())
                            },
                            role: "button",
                            onClick: h,
                            tabIndex: 0,
                            className: l()(eg().header),
                            children: (0, i.jsxs)("div", {
                                className: l()(eg().headerContent),
                                children: [(0, i.jsx)(ew, {
                                    blok: {
                                        text: r.title
                                    },
                                    className: eg().title
                                }), (0, i.jsx)(Z.A, {
                                    name: "chevron-down",
                                    className: l()(eg().icon),
                                    ref: d
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            ref: m,
                            className: eg().content,
                            children: r.modules.map(e => (0, i.jsx)(cr, {
                                blok: e,
                                className: l()({
                                    [eg().childRichText]: "rich_text" === e.component,
                                    [eg().childDropdown]: "text_dropdown" === e.component
                                })
                            }, e._uid))
                        }), (0, i.jsx)("div", {
                            ref: _,
                            className: eg().listLine
                        })]
                    })
                },
                contact_page: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, c.useRef)(null),
                        d = (0, t_.useRouter)(),
                        _ = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: eR,
                            setupTransitionOutTimeline: eA
                        }), []),
                        m = {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [{
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: `${tm.env.SITE_URL}`
                            }, {
                                "@type": "ListItem",
                                position: 2,
                                name: "Contact",
                                item: `${tm.env.SITE_URL}/contact`
                            }, {
                                "@type": "ListItem",
                                position: 3,
                                name: r.seo_title,
                                item: `${tm.env.SITE_URL}/${d.asPath}`
                            }]
                        };
                    (0, y.s)(_, e);
                    let [, p] = (0, c.useState)(tn.Default);
                    return (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(eN().contactPage, t),
                        ...(0, a.m)(r),
                        children: [(0, i.jsx)(eH, {
                            blok: {
                                title: u.current ? .formLayoutState === tn.SubmitSuccess ? r.title_submission_success : r.title,
                                button: r.button,
                                use_accent_color: !1,
                                _uid: "",
                                component: ""
                            }
                        }), "email_form" === r.form[0].component && (0, i.jsx)(tc, {
                            blok: r.form[0],
                            ref: u,
                            parentHandleSubmit: e => p(e)
                        }), "pardot_pdf_form" === r.form[0].component && (0, i.jsx)(ti, {
                            blok: r.form[0],
                            ref: u,
                            parentHandleSubmit: e => p(e)
                        }), (0, i.jsx)(td(), {
                            id: "breadcrumbs-schema",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(m)
                            }
                        })]
                    })
                },
                list_link_items: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: tf,
                            setupTransitionOutTimeline: th
                        }), []);
                    return (0, y.s)(u, e), F(o, r.use_accent_color), (0, i.jsx)("div", {
                        ref: o,
                        className: l()(tg().listLinkItems, t),
                        ...(0, a.m)(r),
                        children: r.items.map(e => (0, i.jsx)(tT, {
                            item: e
                        }, e._uid))
                    })
                },
                header_highlight: eH,
                read_more: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: tw,
                            setupTransitionOutTimeline: tk
                        }), []);
                    (0, y.s)(u, e);
                    let d = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        {
                            scrollIntoView: m
                        } = (0, $.d)();
                    return F(o, r.use_accent_color), (0, i.jsx)("div", {
                        ref: o,
                        className: l()(tC().readMore, t),
                        ...(0, a.m)(r),
                        children: (0, i.jsx)(ew, {
                            blok: {
                                text: r.preview_text
                            },
                            className: tC().previewText,
                            ref: d,
                            children: (0, i.jsx)(ez.A, {
                                disableTriggerInOnScroll: !1,
                                ref: _,
                                className: tC().button,
                                label: r.button_label,
                                onClick: () => {
                                    let e = document ? .querySelector("[data-scroll-to=download-pdf]");
                                    e && m(e)
                                }
                            })
                        })
                    })
                },
                person_details: tW,
                person_overview: function({
                    canTransitionIn: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, c.useRef)(null),
                        d = (0, t_.useRouter)(),
                        m = (0, c.useRef)(null);
                    (0, T.mt)({
                        scroll: {
                            canTransitionIn: e,
                            trigger: o
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: o,
                                imageHolderRef: m
                            },
                            setupTransitionInTimeline: t$
                        })
                    });
                    let {
                        history: p
                    } = (0, tX.l)(), g = {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [{
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: `${tV.env.SITE_URL}`
                        }, {
                            "@type": "ListItem",
                            position: 2,
                            name: r.seo_title,
                            item: `${tV.env.SITE_URL}/${d.asPath}`
                        }]
                    };
                    return (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(tU().personOverview, t),
                        ...(0, a.m)(r),
                        children: [p.length >= 2 && (0, i.jsx)("div", {
                            className: tU().backToContainer,
                            children: (0, i.jsx)(_.A, {
                                as: "p",
                                size: "body-standard",
                                disableTriggerInOnScroll: !1,
                                transitionInType: "splitLineRotateIn",
                                ref: u,
                                children: (0, i.jsx)(ty(), {
                                    href: p[p.length - 2],
                                    passHref: !0,
                                    children: r.label_back_to
                                })
                            })
                        }), r ? .person_details ? .[0] && (0, i.jsx)(tW, {
                            blok: r.person_details[0],
                            className: l()(tU().personDetails)
                        }), r.sections ? .map(t => (0, i.jsx)(cr, {
                            blok: t,
                            canTransitionIn: e
                        }, t._uid)), (0, i.jsx)(td(), {
                            id: "breadcrumbs-schema",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(g)
                            }
                        })]
                    })
                },
                cookie_settings: function(e) {
                    return (0, i.jsx)("div", {
                        className: l()(tq().cookieSettings),
                        children: (0, i.jsx)(ev.A, {
                            className: l()(tq().button, "ot-sdk-show-settings", "link-underline-decoration"),
                            type: "button",
                            label: "Cookie Settings",
                            id: "ot-sdk-btn"
                        })
                    })
                },
                title_text_columns: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: tJ,
                            setupTransitionOutTimeline: tZ
                        }), []);
                    return (0, y.s)(u, e), (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(tQ().titleTextColumns, t),
                        ...(0, a.m)(r),
                        children: [(0, i.jsx)(d.A, {
                            as: "h3",
                            size: "heading-03",
                            disableTriggerInOnScroll: !1,
                            transitionInType: "splitCharsSlideInUp",
                            className: tQ().title,
                            children: r.title
                        }), (0, i.jsx)("div", {
                            className: tQ().textContainer,
                            children: (0, ex.XX)(r.text, {
                                nodeResolvers: {
                                    [ex.Uv]: e => (0, i.jsx)(_.A, {
                                        className: tQ().paragraph,
                                        as: "p",
                                        size: "body-large",
                                        transitionInType: "splitCharsWordsRichText",
                                        disableTriggerInOnScroll: !1,
                                        children: e
                                    })
                                }
                            })
                        })]
                    })
                },
                asset_list: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        o = (0, t2.J)(),
                        u = (0, t_.useRouter)();
                    (0, T.mt)({
                        scroll: {
                            trigger: s,
                            vars: {}
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: s
                            },
                            setupTransitionInTimeline: t1
                        })
                    });
                    let m = (0, c.useCallback)(e => {
                            let t = `https://${window.location.host}/files`;
                            return e.replace("https://a.storyblok.com", t)
                        }, []),
                        p = (0, c.useCallback)(e => {
                            let t = e.split("/");
                            return t[t.length - 1]
                        }, []),
                        g = (0, c.useCallback)(e => {
                            window.open(e, "_blank")
                        }, []),
                        f = (0, c.useMemo)(() => {
                            let t = u.asPath.split("#")[1];
                            return e.assets.filter(e => p(e.asset.filename).split(".")[0] === t)
                        }, [e.assets, p, u.asPath]);
                    return (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(t0().assetList, r.className),
                        ...(0, a.m)(e),
                        children: [(0, i.jsxs)("div", {
                            className: l()(t0().header, "grid-gutter"),
                            children: [e ? .title && (0, i.jsx)(d.A, {
                                disableTriggerInOnScroll: !1,
                                as: "h2",
                                size: "heading-01",
                                className: l()(t0().title),
                                children: e ? .title
                            }), e ? .description && (0, i.jsx)(_.A, {
                                disableTriggerInOnScroll: !1,
                                as: "p",
                                size: "body-large",
                                className: l()(t0().description),
                                children: e ? .description
                            })]
                        }), o && (0, i.jsx)("ul", {
                            className: l()(t0().list),
                            children: f.map(e => (0, i.jsxs)("li", {
                                className: l()(t0().listItem, "grid-gutter"),
                                children: [(0, i.jsx)("span", {
                                    className: l()(t0().line)
                                }), (0, i.jsxs)("div", {
                                    className: l()(t0().info),
                                    children: [(0, i.jsx)(d.A, {
                                        disableTriggerInOnScroll: !1,
                                        as: "span",
                                        size: "heading-05",
                                        className: l()(t0().name),
                                        transitionInType: "splitLineRotateIn",
                                        children: e.title
                                    }), (0, i.jsx)(_.A, {
                                        disableTriggerInOnScroll: !1,
                                        as: "span",
                                        size: "foot-note",
                                        className: l()(t0().file),
                                        transitionInType: "splitLineRotateIn",
                                        children: p(e.asset.filename)
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: l()(t0().buttonHolder),
                                    children: [(0, i.jsx)(ez.A, {
                                        className: l()(t0().button),
                                        label: "open",
                                        disableTriggerInOnScroll: !1,
                                        onClick: () => g(m(e.asset.filename))
                                    }), (0, i.jsx)(ez.A, {
                                        className: l()(t0().button),
                                        label: "copy link",
                                        disableTriggerInOnScroll: !1,
                                        onClick: () => {
                                            var t;
                                            return t = m(e.asset.filename), void(navigator.clipboard && navigator.clipboard.writeText(t))
                                        }
                                    })]
                                })]
                            }, e._uid))
                        })]
                    })
                },
                pardot_pdf_form: ti,
                email_form: tc,
                description_list: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n;
                    return (0, T.mt)({
                        scroll: {
                            trigger: s,
                            vars: {}
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: s
                            },
                            setupTransitionInTimeline: t7
                        })
                    }), (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(t3().descriptionList, r.className),
                        ...(0, a.m)(e),
                        children: [e.title && (0, i.jsx)(d.A, {
                            className: t3().title,
                            as: "h2",
                            size: "heading-03",
                            transitionInType: "splitCharsSlideInUp",
                            disableTriggerInOnScroll: !1,
                            children: e.title.split("\n").map((e, t) => (0, i.jsx)("div", {
                                children: e
                            }, `${e}-${t}`))
                        }), e.list.map((e, t) => (0, i.jsx)(t6, {
                            blok: e,
                            index: t,
                            className: l()(t3().item)
                        }, e._uid))]
                    })
                },
                grid_list: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        o = (0, en.E)(ei.S4.MIN_1280, !1),
                        u = (0, en.E)(ei.S4.MIN_1024, !1),
                        d = (0, en.E)(ei.S4.MIN_768, !1),
                        _ = (0, c.useMemo)(() => d ? 1 : u ? 2 : o ? 3 : 4, [d, u, o]);
                    return (0, T.mt)({
                        scroll: {
                            trigger: s,
                            vars: {}
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: s
                            },
                            setupTransitionInTimeline: rr
                        })
                    }), (0, i.jsx)("ul", {
                        ref: s,
                        className: l()(rt().gridList, r.className, "grid-gutter"),
                        ...(0, a.m)(e),
                        children: e.list.map((e, t) => (0, i.jsx)(rs, {
                            blok: e,
                            transitionInDelay: t % _ * .15,
                            className: l()(rt().item)
                        }, e._uid))
                    })
                },
                accordion: rv,
                modern_creativity_info: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        d = (0, c.useRef)(null),
                        _ = (0, c.useRef)(void 0),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(e.items.map(() => (0, c.createRef)())),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(void 0);
                    f.current = (0, w.A)(rI, {
                        itemsRef: p
                    });
                    let {
                        width: h,
                        height: x
                    } = (0, U.A)(0);
                    return (0, c.useEffect)(() => {
                        let e = Math.max(...p.current.map(e => e ? .current ? .offsetHeight || 0));
                        o.Ay.set(g.current, {
                            minHeight: `${e}px`
                        })
                    }, [h, x, p]), (0, u.A)({
                        trigger: s,
                        animation: (0, w.A)(rT, {
                            lottieRef: m,
                            itemsRef: p
                        }),
                        vars: {
                            start: "top center",
                            end: "bottom top-=250%",
                            scrub: 1,
                            onUpdate: ({
                                progress: e
                            }) => {
                                let t;
                                e <= 0 && (t = -1), e > 0 && e < .33 ? t = 0 : e > .33 && e < .66 ? t = 1 : e > .66 && (t = 2), "number" == typeof t && _.current !== t && f ? .current ? .tweenTo(`slide_${t}`), _.current = t
                            }
                        }
                    }), (0, u.A)({
                        trigger: s,
                        pin: d,
                        vars: {
                            start: "center center",
                            end: "bottom top-=250%",
                            pinType: "transform",
                            anticipatePin: 1
                        }
                    }), (0, i.jsx)("div", {
                        ref: s,
                        className: l()(ry().modernCreativityInfo, r.className, "grid-gutter max-content-width"),
                        ...(0, a.m)(e),
                        children: (0, i.jsxs)("div", {
                            ref: d,
                            className: l()(ry().container),
                            children: [(0, i.jsx)("div", {
                                className: l()(ry().animationHolder),
                                children: (0, i.jsx)("div", {
                                    className: l()(ry().animation),
                                    children: (0, i.jsx)(rR.A, {
                                        ref: m,
                                        id: "modern-creativity",
                                        loop: !1,
                                        className: l()(ry().symbol, "abs-center")
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                ref: g,
                                className: l()(ry().content),
                                children: e.items.map((t, r) => (0, i.jsx)(rN, {
                                    ref: p.current[r],
                                    blok: t,
                                    category: e.title,
                                    link: e.link[0],
                                    className: l()(ry().item)
                                }, t._uid))
                            })]
                        })
                    })
                },
                button_grid_item: rL,
                header_showreal_large: function({
                    canTransitionIn: e,
                    blok: t,
                    ref: r,
                    ...n
                }) {
                    let s = (0, c.useRef)(null),
                        _ = r || s,
                        {
                            isFullScreen: m,
                            toggleFullScreen: p,
                            onPlayClick: g,
                            topTitleRef: f,
                            maskTopTitleRef: h,
                            maskBottomTitleRef: x,
                            bottomTitleRef: v,
                            maskedContentRef: b,
                            previewContainerRef: y,
                            videoContainerRef: I,
                            videoRef: C
                        } = function(e, t) {
                            let r = (0, c.useRef)(null),
                                n = (0, c.useRef)(null),
                                i = (0, c.useRef)(null),
                                a = (0, c.useRef)(null),
                                s = (0, c.useRef)(null),
                                l = (0, c.useRef)(null),
                                d = (0, c.useRef)(null),
                                _ = (0, c.useRef)(null),
                                {
                                    siteHeaderElementRef: m
                                } = (0, c.useContext)(rU.a),
                                [p, g] = rX(!1),
                                {
                                    width: f,
                                    height: h
                                } = (0, U.A)(),
                                x = (0, $.d)(),
                                v = (0, w.A)(rB, {
                                    topTitleRef: r,
                                    bottomTitleRef: n,
                                    maskTopTitleRef: i,
                                    maskBottomTitleRef: a,
                                    siteHeaderElementRef: m
                                }),
                                b = (0, w.A)(rF, {
                                    topTitleRef: r,
                                    bottomTitleRef: n,
                                    maskTopTitleRef: i,
                                    maskBottomTitleRef: a,
                                    siteHeaderElementRef: m
                                });

                            function y(e, t = !1) {
                                t ? o.Ay.to(s.current, { ...e,
                                    duration: .4,
                                    ease: "Quad.easeInOut"
                                }) : o.Ay.set(s.current, e)
                            }
                            let T = (0, c.useCallback)((e = !1) => e ? window.innerHeight : "100%", []);

                            function I(e, t = !1) {
                                t ? o.Ay.to(d.current, {
                                    height: e,
                                    duration: .4,
                                    ease: "Quad.easeInOut",
                                    onUpdate: () => {
                                        _ ? .current ? .updateVideoSize()
                                    }
                                }) : (o.Ay.set(d.current, {
                                    height: e
                                }), _ ? .current ? .updateVideoSize())
                            }
                            let C = (0, c.useCallback)((e = !1) => {
                                let t = l ? .current ? .getBoundingClientRect(),
                                    r = s ? .current ? .getBoundingClientRect(),
                                    n = 0,
                                    i = 0,
                                    a = 0;
                                return t && r && (a = (t.top - r.top) / r.height * 100, n = 0, i = 0, e ? (n = 100 - (r.bottom - (t.top + window.innerHeight)) / r.height * 100, i = 0) : (n = 100 - (r.bottom - t.bottom) / r.height * 100, i = (t.left - r.left) / r.width * 100)), {
                                    clipPath: `polygon(
          ${i}% ${a}%, 
          ${100-i}% ${a}%,
          ${100-i}% ${n}%,
          ${i}% ${n}%
        )`
                                }
                            }, [s, l]);
                            (0, rf.A)(() => {
                                y(C(p))
                            });
                            let k = (0, c.useRef)(!1);
                            (0, eZ.A)(() => {
                                if (p) {
                                    var e;
                                    let t, r;
                                    y(C(p), !0), I(T(p), !0), e = () => {
                                        b.kill(), v.restart(), k.current = p
                                    }, "number" != typeof(t = x.scrollStatusRef.current ? .offset.y) && (t = 0), (r = t + l.current ? .getBoundingClientRect().top) === t ? e() : x.scrollTo(0, r, 400, {
                                        easing: r$.kO.easeInOut,
                                        callback: () => {
                                            e()
                                        }
                                    })
                                } else k.current = p, v.kill(), b.restart(), y(C(p), !0), I(T(p), !0)
                            }, [p]), (0, eZ.A)(() => {
                                I(T(p), !1), y(C(p), !1)
                            }, [f, h]);
                            let j = (0, eJ.o)(),
                                S = (0, eC.qJ)(),
                                N = (0, c.useCallback)(() => {
                                    S ? g() : j.openVideoModal({
                                        video: e.video[0]
                                    })
                                }, [S, g, j, e.video]);
                            return (0, u.A)({
                                trigger: t,
                                vars: {
                                    start: "top bottom",
                                    end: "bottom top",
                                    onUpdate() {
                                        k.current && g()
                                    }
                                }
                            }), {
                                isFullScreen: p,
                                onPlayClick: N,
                                toggleFullScreen: g,
                                maskTopTitleRef: i,
                                maskBottomTitleRef: a,
                                topTitleRef: r,
                                bottomTitleRef: n,
                                maskedContentRef: s,
                                previewContainerRef: l,
                                videoContainerRef: d,
                                videoRef: _
                            }
                        }(t, _),
                        {
                            inView: k
                        } = (0, T.mt)({
                            scroll: {
                                canTransitionIn: e,
                                trigger: _,
                                vars: {},
                                enableInView: !0
                            },
                            setupOptions: () => ({
                                refs: {
                                    elementRef: _,
                                    maskTopTitleRef: h,
                                    maskBottomTitleRef: x,
                                    bottomTitleRef: v,
                                    topTitleRef: f,
                                    previewContainerRef: y
                                },
                                setupTransitionInTimeline: rH
                            })
                        });
                    return (0, u.A)({
                        canTransitionIn: e,
                        trigger: _,
                        endTrigger: f,
                        animation: (0, w.A)(rE, {
                            title: h,
                            maskTitle: f
                        }),
                        vars: {
                            scrub: !0,
                            start: "top top",
                            end: "bottom top"
                        }
                    }), (0, u.A)({
                        canTransitionIn: e,
                        trigger: v,
                        endTrigger: v,
                        animation: (0, w.A)(rE, {
                            title: x,
                            maskTitle: v
                        }),
                        vars: {
                            scrub: !0,
                            start: "top bottom",
                            end: "bottom top"
                        }
                    }), (0, i.jsx)("div", {
                        ref: _,
                        className: l()(rz().headerShowrealLarge, n.className, rz()[`top-title-size-${t.title_top.content.length}`], rz()[`bottom-title-size-${t.title_bottom.content.length}`]),
                        ...(0, a.m)(t),
                        children: (0, i.jsxs)("div", {
                            className: l()(rz().content),
                            children: [(0, i.jsxs)("div", {
                                className: l()("grid-gutter max-content-width"),
                                children: [(0, i.jsx)(d.A, {
                                    ref: f,
                                    as: "h1",
                                    size: "heading-01",
                                    className: l()(rz().topTitle),
                                    disableTriggerInOnScroll: !0,
                                    children: (0, ex.XX)(t.title_top, {
                                        nodeResolvers: {
                                            [ex.Uv]: e => (0, i.jsxs)(i.Fragment, {
                                                children: [e, (0, i.jsx)("br", {})]
                                            })
                                        }
                                    })
                                }), (0, i.jsx)("div", {
                                    className: l()(rz().previewContainer)
                                })]
                            }), (0, i.jsx)("div", {
                                ref: b,
                                className: l()(rz().maskedContent),
                                children: (0, i.jsxs)("div", {
                                    className: l()("grid-gutter max-content-width"),
                                    children: [(0, i.jsx)(d.A, {
                                        ref: h,
                                        as: "h1",
                                        size: "heading-01",
                                        className: l()(rz().topTitle, "text-outline"),
                                        disableTriggerInOnScroll: !0,
                                        children: (0, ex.XX)(t.title_top, {
                                            nodeResolvers: {
                                                [ex.Uv]: e => (0, i.jsxs)(i.Fragment, {
                                                    children: [e, (0, i.jsx)("br", {})]
                                                })
                                            }
                                        })
                                    }), (0, i.jsx)("div", {
                                        ref: y,
                                        className: l()(rz().previewContainer),
                                        children: (0, i.jsxs)("div", {
                                            ref: I,
                                            className: l()(rz().videoContainer),
                                            children: [(0, i.jsx)(rD.default, {
                                                ref: C,
                                                className: l()(rz().video, "abs-fill"),
                                                blok: t.video[0],
                                                playing: k,
                                                playsinline: !0,
                                                controls: !0,
                                                removeOnPause: !1,
                                                openInModal: !1,
                                                innerTransition: {
                                                    type: "scaleUp"
                                                },
                                                controlsVisible: m,
                                                loop: !0,
                                                isFullScreen: m,
                                                muted: !m,
                                                exitFullScreen: p
                                            }), (0, i.jsx)(rW.default, {
                                                className: l()(rz().playButton, "abs-center"),
                                                isPlaying: m,
                                                isVisible: {
                                                    onMount: !0,
                                                    value: !m
                                                },
                                                onClick: g
                                            })]
                                        })
                                    }), (0, i.jsx)(d.A, {
                                        ref: x,
                                        as: "h1",
                                        size: "heading-01",
                                        className: l()(rz().bottomTitle, "text-outline"),
                                        disableTriggerInOnScroll: !0,
                                        children: (0, ex.XX)(t.title_bottom, {
                                            nodeResolvers: {
                                                [ex.Uv]: e => (0, i.jsxs)(i.Fragment, {
                                                    children: [e, (0, i.jsx)("br", {})]
                                                })
                                            }
                                        })
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: l()("grid-gutter max-content-width"),
                                children: (0, i.jsx)(d.A, {
                                    ref: v,
                                    as: "h1",
                                    size: "heading-01",
                                    className: l()(rz().bottomTitle),
                                    disableTriggerInOnScroll: !0,
                                    children: (0, ex.XX)(t.title_bottom, {
                                        nodeResolvers: {
                                            [ex.Uv]: e => (0, i.jsxs)(i.Fragment, {
                                                children: [e, (0, i.jsx)("br", {})]
                                            })
                                        }
                                    })
                                })
                            })]
                        })
                    })
                },
                horizontal_creativity: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(null),
                        x = (0, c.useRef)(null),
                        v = (0, c.useRef)(null),
                        b = (0, c.useRef)([]),
                        y = (0, c.useRef)([]),
                        T = (0, c.useRef)(null),
                        I = (0, c.useRef)(null),
                        C = (0, c.useRef)(null),
                        k = (0, c.useRef)(void 0),
                        j = (0, c.useRef)(void 0),
                        S = (0, c.useRef)(null),
                        N = (0, c.useRef)(null),
                        R = (0, en.E)(ei.S4.MIN_768, !1);
                    k.current = (0, w.A)(rJ, {
                        title1Ref: p,
                        title2Ref: g,
                        titleOutline1Ref: f,
                        titleOutline2Ref: h,
                        shapeRef: v
                    }), j.current = (0, w.A)(rZ, {
                        slidesRef: b,
                        slideImagesRef: y,
                        shapeInnerRef: S,
                        imageRef: C
                    });
                    let {
                        width: A,
                        height: O
                    } = (0, U.A)(), P = (0, c.useCallback)(() => {
                        let e = v ? .current ? .getBoundingClientRect();
                        return (e ? .width || 0) / 799
                    }, [v]), L = (0, c.useCallback)(e => {
                        o.Ay.set(x.current, {
                            attr: {
                                transform: `scale(${e})`
                            }
                        })
                    }, [x]);
                    (0, c.useEffect)(() => {
                        L(P())
                    }, [A, O, L, P]);
                    let M = (0, c.useRef)(void 0),
                        z = R ? "0%" : "300%";
                    (0, u.A)({
                        trigger: s,
                        endTrigger: T,
                        animation: k.current,
                        vars: {
                            scrub: !0,
                            start: "top bottom",
                            end: `bottom top-=${z}`,
                            anticipatePin: 1,
                            onUpdate: ({
                                progress: e
                            }) => {
                                let t;
                                e > 0 && (t = -1), e > .1 && (t = 0), e > .25 && (t = 1), e > .4 && (t = 2), e > .55 && (t = 3), e > .7 && (t = 4), e > .9 && (t = 5), "number" == typeof t && M.current !== t && j ? .current ? .tweenTo(`slide_${t}`), M.current = t
                            }
                        }
                    }), (0, u.A)({
                        trigger: T,
                        pin: m,
                        disabled: R,
                        vars: {
                            scrub: !0,
                            start: "center center",
                            end: `+=${z}`,
                            pinType: "transform",
                            anticipatePin: 1
                        }
                    }), (0, u.A)({
                        trigger: I,
                        transition: {
                            ref: I
                        }
                    });
                    let H = "drop";
                    return (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(rG().horizontalCreativity, r.className),
                        ...(0, a.m)(e),
                        children: [(0, i.jsx)("svg", {
                            preserveAspectRatio: "xMinYMin meet",
                            viewBox: "0 0 799 799",
                            className: l()(rG().svg),
                            children: (0, i.jsx)("defs", {
                                children: (0, i.jsx)("clipPath", {
                                    id: H,
                                    clipPathUnits: "userSpaceOnUse",
                                    children: (0, i.jsx)("path", {
                                        fill: "white",
                                        ref: x,
                                        d: "M399.167 0C178.715 0 0 178.715 0 399.167C0 619.618 178.715 798.333 399.167 798.333C619.618 798.333 798.333 619.618 798.333 399.167V0H399.167Z"
                                    })
                                })
                            })
                        }), (0, i.jsx)("div", {
                            ref: T,
                            className: l()(rG().pinWrapper),
                            children: (0, i.jsx)("div", {
                                ref: m,
                                className: l()(rG().contentFrame, "grid-gutter"),
                                children: (0, i.jsxs)("div", {
                                    className: l()(rG().container),
                                    children: [(0, i.jsxs)("div", {
                                        className: l()(rG().titleWrapper),
                                        children: [(0, i.jsx)(d.A, {
                                            ref: p,
                                            as: "h2",
                                            size: "heading-01",
                                            className: l()(rG().title, rG().line1),
                                            disableTriggerInOnScroll: !0,
                                            transitionInType: "none",
                                            children: e.line_1
                                        }), (0, i.jsx)(d.A, {
                                            ref: g,
                                            as: "h2",
                                            size: "heading-01",
                                            className: l()(rG().title, rG().line2),
                                            disableTriggerInOnScroll: !0,
                                            transitionInType: "none",
                                            children: e.line_2
                                        })]
                                    }), (0, i.jsx)("div", {
                                        ref: v,
                                        style: {
                                            clipPath: `url(#${H})`,
                                            WebkitClipPath: `url(#${H})`
                                        },
                                        className: l()(rG().shape),
                                        children: (0, i.jsxs)("div", {
                                            ref: S,
                                            className: l()(rG().shapeInner),
                                            children: [(0, i.jsxs)("div", {
                                                ref: N,
                                                className: l()(rG().imageHolder),
                                                children: [(0, i.jsx)(tO.A, {
                                                    ref: C,
                                                    src: e.image_1,
                                                    srcDesktop: e.image_1,
                                                    className: l()(rG().image, "abs-fill"),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: `${e.line_1} ${e.line_2}`,
                                                    sizes: `${rK.K.MIN_768} 828px, ${rK.K.MIN_1920} 828px, 100vw`
                                                }), [e.image_2, e.image_3, e.image_4, e.image_5].map((t, r) => (0, i.jsx)("div", {
                                                    ref: e => {
                                                        b.current[r] = e
                                                    },
                                                    style: {
                                                        clipPath: `url(#${H})`,
                                                        WebkitClipPath: `url(#${H})`
                                                    },
                                                    className: l()(rG().imageContainer, "abs-fill"),
                                                    children: (0, i.jsx)(tO.A, {
                                                        ref: e => {
                                                            y.current[r] = e
                                                        },
                                                        src: t,
                                                        srcDesktop: t,
                                                        className: l()(rG().image, "abs-fill"),
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        sizes: `${rK.K.MIN_768} 828px, ${rK.K.MIN_1920} 828px, 100vw`,
                                                        alt: `${e.line_1} ${e.line_2}`
                                                    })
                                                }, t))]
                                            }), (0, i.jsxs)("div", {
                                                className: l()(rG().titleWrapper),
                                                children: [(0, i.jsx)(d.A, {
                                                    ref: f,
                                                    as: "h2",
                                                    size: "heading-01",
                                                    className: l()(rG().title, rG().line1, "text-outline"),
                                                    disableTriggerInOnScroll: !0,
                                                    transitionInType: "none",
                                                    children: e.line_1
                                                }), (0, i.jsx)(d.A, {
                                                    ref: h,
                                                    as: "h2",
                                                    size: "heading-01",
                                                    className: l()(rG().title, rG().line2, "text-outline"),
                                                    disableTriggerInOnScroll: !0,
                                                    transitionInType: "none",
                                                    children: e.line_2
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: l()("grid-gutter max-content-width"),
                            children: (0, ex.XX)(e.description, {
                                nodeResolvers: {
                                    [ex.Uv]: e => (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsxs)(_.A, {
                                            ref: I,
                                            transitionInType: eC.CI ? "none" : "splitLineRotateIn",
                                            className: l()(rG().description),
                                            as: "p",
                                            size: "quote",
                                            disableTriggerInOnScroll: !0,
                                            children: [e, (0, i.jsx)("br", {})]
                                        })
                                    })
                                }
                            })
                        })]
                    })
                },
                horizontal_creativity_single_image: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(null),
                        x = (0, c.useRef)(null),
                        v = (0, c.useRef)(null),
                        b = (0, c.useRef)(null),
                        y = (0, c.useRef)(null),
                        T = (0, c.useRef)(null),
                        I = (0, c.useRef)(void 0),
                        C = (0, c.useRef)(null),
                        k = (0, c.useRef)(null);
                    I.current = (0, w.A)(r5, {
                        title1Ref: p,
                        title2Ref: g,
                        titleOutline1Ref: f,
                        titleOutline2Ref: h,
                        shapeRef: v,
                        imageRef: T,
                        containerRef: m
                    });
                    let {
                        width: j,
                        height: S
                    } = (0, U.A)(), N = (0, c.useCallback)(() => {
                        let e = v ? .current ? .getBoundingClientRect();
                        return (e ? .width || 0) / 799
                    }, [v]), R = (0, c.useCallback)(e => {
                        o.Ay.set(x.current, {
                            attr: {
                                transform: `scale(${e})`
                            }
                        })
                    }, [x]);
                    (0, c.useEffect)(() => {
                        R(N())
                    }, [j, S, R, N]), (0, u.A)({
                        trigger: s,
                        pin: s,
                        vars: {
                            scrub: !0,
                            start: "top top",
                            end: "100%",
                            anticipatePin: 1
                        }
                    }), (0, u.A)({
                        trigger: s,
                        animation: I.current,
                        vars: {
                            scrub: !0,
                            start: "top center",
                            end: "150%"
                        }
                    });
                    let A = "drop";
                    return F(s, e.use_accent_color, {
                        foreground: e.accent_color_foreground.color,
                        background: e.accent_color_background.color
                    }), (0, i.jsx)("div", {
                        ref: s,
                        className: l()(r1().horizontalCreativity, r.className),
                        ...(0, a.m)(e),
                        children: (0, i.jsx)("div", {
                            ref: b,
                            className: l()(r1().pinWrapper),
                            children: (0, i.jsx)("div", {
                                ref: _,
                                className: l()(r1().contentFrame, "grid-gutter"),
                                children: (0, i.jsxs)("div", {
                                    ref: m,
                                    className: l()(r1().container),
                                    children: [(0, i.jsxs)("div", {
                                        className: l()(r1().titleWrapper),
                                        children: [(0, i.jsx)(d.A, {
                                            ref: f,
                                            as: "h2",
                                            size: "heading-01",
                                            className: l()(r1().title, r1().line1),
                                            disableTriggerInOnScroll: !0,
                                            transitionInType: "none",
                                            children: e.line_1
                                        }), (0, i.jsx)(d.A, {
                                            ref: h,
                                            as: "h2",
                                            size: "heading-01",
                                            className: l()(r1().title, r1().line2),
                                            disableTriggerInOnScroll: !0,
                                            transitionInType: "none",
                                            children: e.line_2
                                        })]
                                    }), (0, i.jsx)("div", {
                                        ref: v,
                                        style: {
                                            clipPath: `url(#${A})`,
                                            WebkitClipPath: `url(#${A})`
                                        },
                                        className: l()(r1().shape),
                                        children: (0, i.jsxs)("div", {
                                            ref: C,
                                            className: l()(r1().shapeInner),
                                            children: [(0, i.jsx)("div", {
                                                ref: k,
                                                className: l()(r1().imageHolder),
                                                children: (0, i.jsx)(tO.A, {
                                                    ref: T,
                                                    src: e.image ? .filename,
                                                    srcDesktop: e.image ? .filename,
                                                    className: l()(r1().image, "abs-fill"),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: `${e.line_1} ${e.line_2}`
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: l()(r1().titleWrapper),
                                                ref: y,
                                                children: [(0, i.jsx)(d.A, {
                                                    ref: p,
                                                    as: "h2",
                                                    size: "heading-01",
                                                    className: l()(r1().title, r1().line1),
                                                    disableTriggerInOnScroll: !0,
                                                    transitionInType: "none",
                                                    children: e.line_1
                                                }), (0, i.jsx)(d.A, {
                                                    ref: g,
                                                    as: "h2",
                                                    size: "heading-01",
                                                    className: l()(r1().title, r1().line2),
                                                    disableTriggerInOnScroll: !0,
                                                    transitionInType: "none",
                                                    children: e.line_2
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                service_page: function({
                    blok: e,
                    canTransitionIn: t,
                    ref: r,
                    ...n
                }) {
                    let s = (0, c.useRef)(null),
                        o = r || s,
                        u = (0, t_.useRouter)();
                    (0, T.mt)({
                        scroll: {
                            trigger: o,
                            vars: {}
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: r4
                        })
                    });
                    let {
                        modules: d,
                        ..._
                    } = e, m = _.intro_description ? .content[0], p = {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [{
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: `${na.env.SITE_URL}`
                        }, {
                            "@type": "ListItem",
                            position: 2,
                            name: "Services",
                            item: `${na.env.SITE_URL}/services`
                        }, {
                            "@type": "ListItem",
                            position: 3,
                            name: e.title,
                            item: `${na.env.SITE_URL}/${u.asPath}`
                        }]
                    };
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("section", {
                            ref: o,
                            className: l()(r7().servicePage, n.className),
                            ...(0, a.m)(e),
                            children: [(0, i.jsx)(ne, {
                                blok: _,
                                canTransitionIn: t
                            }), (_ ? .intro_button && _ ? .intro_button ? .length > 0 && _ ? .intro_button[0] || _.intro_title || m && m ? .content ? .length > 0) && (0, i.jsx)(ni, {
                                blok: {
                                    _uid: _._uid,
                                    component: "intro_column_text",
                                    title: _.intro_title,
                                    description: _.intro_description,
                                    buttons: _.intro_button
                                }
                            }), d ? .map(e => (0, i.jsx)(cr, {
                                blok: e,
                                canTransitionIn: t
                            }, e._uid))]
                        }), (0, i.jsx)(td(), {
                            id: "breadcrumbs-schema",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(p)
                            }
                        })]
                    })
                },
                image_slider_item: nm,
                people_slider_item: ny,
                intro_column_text: ni,
                solution: function({
                    blok: e,
                    canTransitionIn: t,
                    ref: r,
                    ...n
                }) {
                    let s = (0, c.useRef)(null),
                        o = r || s,
                        u = (0, t_.useRouter)();
                    (0, T.mt)({
                        scroll: {
                            trigger: o,
                            vars: {}
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: nC
                        })
                    });
                    let {
                        modules: d,
                        ..._
                    } = e, m = _.intro_description ? .content[0], p = {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [{
                            "@type": "ListItem",
                            position: 1,
                            name: "Home",
                            item: `${nw.env.SITE_URL}`
                        }, {
                            "@type": "ListItem",
                            position: 2,
                            name: e.title,
                            item: `${nw.env.SITE_URL}/${u.asPath}`
                        }]
                    };
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("section", {
                            ref: o,
                            className: l()(nI().solution, n.className),
                            ...(0, a.m)(e),
                            children: [(0, i.jsx)(ne, {
                                blok: _,
                                canTransitionIn: t
                            }), (_ ? .intro_button && _ ? .intro_button ? .length > 0 && _ ? .intro_button[0] || _.intro_title || m && m ? .content ? .length > 0) && (0, i.jsx)(ni, {
                                blok: {
                                    _uid: _._uid,
                                    component: "intro_column_text",
                                    title: _.intro_title,
                                    description: _.intro_description,
                                    buttons: _.intro_button
                                }
                            }), d ? .map(e => (0, i.jsx)(cr, {
                                blok: e,
                                canTransitionIn: t
                            }, e._uid))]
                        }), (0, i.jsx)(td(), {
                            id: "breadcrumbs-schema",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(p)
                            }
                        })]
                    })
                },
                news_overview_item: nF,
                featured_news_item: nX,
                news_overview: function({
                    ref: e,
                    isVisible: t,
                    className: r,
                    blok: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = e || s,
                        u = (0, c.useRef)(null),
                        d = (0, en.E)(ei.S4.MIN_768, !1),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        {
                            transitionController: p
                        } = (0, T.mt)({
                            scroll: {
                                trigger: o,
                                vars: {}
                            },
                            setupOptions: () => ({
                                refs: {
                                    elementRef: o,
                                    lineRef: _,
                                    topLineRef: m
                                },
                                setupTransitionInTimeline: nq
                            })
                        });
                    (0, y.s)(p, t), F(o, n.use_accent_color);
                    let {
                        onFilterClick: g,
                        activeFilter: f,
                        activeCountryFilter: h,
                        newsItems: x,
                        totalPages: v,
                        pageIndex: b,
                        onPaginationClick: I,
                        showNoResultMessage: C,
                        resetFilters: w
                    } = function(e, t, r) {
                        let n = (it("page") || 1) - 1,
                            i = (it("category") || r.news_category_all).replace(/[-_+#]/g, " ").trim().toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" "),
                            a = (0, en.E)(ei.S4.MIN_768, !1),
                            {
                                recentNews: s,
                                featuredNews: l
                            } = (0, eJ.o)(),
                            [o, u] = (0, c.useState)(i),
                            [d, _] = (0, c.useState)(r.news_country_all),
                            [m, p] = (0, c.useState)(),
                            [g, f] = (0, c.useState)(n),
                            [h, x] = (0, c.useState)(0),
                            [v, b] = (0, c.useState)(!1),
                            y = (0, $.d)(),
                            T = (0, c.useMemo)(() => a ? +r.mobile_items_per_page : +r.desktop_items_per_page, [r.desktop_items_per_page, r.mobile_items_per_page, a]),
                            I = (0, c.useCallback)(e => Math.ceil((e ? .length || 0) / T), [T]),
                            C = (0, t_.useRouter)(),
                            w = (0, n$.A)(),
                            k = (0, c.useCallback)(e => {
                                f(e);
                                let t = { ...C.query,
                                    page: e + 1
                                };
                                0 === e && delete t.page, w({
                                    pathname: C.pathname,
                                    query: t
                                }, void 0, {
                                    shallow: !0
                                })
                            }, [C.pathname, C.query, w]),
                            j = (0, c.useCallback)(e => {
                                u(e);
                                let t = { ...C.query,
                                    category: e
                                };
                                e === r.news_category_all && delete t.category, delete t.page, w({
                                    pathname: C.pathname,
                                    query: t
                                }, void 0, {
                                    shallow: !0
                                })
                            }, [r.news_category_all, C.pathname, C.query, w]);
                        (0, c.useEffect)(() => {
                            let e;
                            e = o === r.news_category_all ? s ? .filter(e => !l ? .map(e => e.news.slug).includes(e.slug)) : s ? .filter(e => e.content.category === o), d !== r.news_country_all && (e = e ? .filter(e => e.content.location === d));
                            let n = g * T,
                                i = e ? .slice(n, n + T);
                            p(i), b(i ? .length === 0), x(I(e)), (async () => {
                                await nY(t, !0), ej().refresh()
                            })()
                        }, [l, o, s, r.news_category_all, d, r.news_country_all, g, T, I, t]);
                        let N = (0, c.useCallback)(async () => {
                                nY(t, !1), t.current && await (0, S._)(t.current, {
                                    duration: .2
                                })
                            }, [t]),
                            R = (0, c.useCallback)(() => {
                                t.current && (0, S.m)(t.current, {
                                    duration: .2
                                })
                            }, [t]),
                            A = (0, c.useCallback)(async () => {
                                j(r.news_category_all), _(r.news_country_all)
                            }, [r.news_category_all, r.news_country_all, j]),
                            O = (0, c.useCallback)(async e => {
                                e !== g && (await N(), k(e), R())
                            }, [N, g, k, R]);
                        async function P(e, t) {
                            let n;
                            t === r.news_category_all ? n = o : t === r.news_country_all && (n = d), e !== n && (await N(), p([]), f(0), R()), t === r.news_category_all ? j(e) : t === r.news_country_all && _(e)
                        }
                        return (0, eZ.A)(() => {
                            let t = e.current ? .getBoundingClientRect(),
                                r = y.scrollStatusRef.current ? .offset.y || 0;
                            y.scrollTo(0, (t ? .top || 0) + r - 100, 600)
                        }, [g]), (0, c.useEffect)(() => {
                            ej().refresh()
                        }, [m]), {
                            onFilterClick: P,
                            activeFilter: o,
                            activeCountryFilter: d,
                            newsItems: m,
                            totalPages: h,
                            pageIndex: g,
                            onPaginationClick: O,
                            showNoResultMessage: v,
                            resetFilters: A
                        }
                    }(o, u, n);
                    return (0, c.useEffect)(() => {
                        if (window.location.hash) {
                            let e = window.location.hash.replace(/[-_+#]/g, " ").trim().toLowerCase().split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
                            n.category_filter.includes(e) && g(e, n.news_category_all)
                        }
                    }, [n.news_category_all]), (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(nG().newsOverview, r),
                        ...(0, a.m)(n),
                        children: [(0, i.jsxs)("div", {
                            className: l()(nG().filters),
                            children: [(n.category_filter && n.category_filter.length > 0 && n.news_category_all || n.country_filter && n.country_filter.length > 0 && n.news_country_all) && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    ref: m,
                                    className: l()(nG().line, nG().topLine)
                                }), (0, i.jsx)("span", {
                                    ref: _,
                                    className: l()(nG().line)
                                })]
                            }), (0, i.jsxs)("div", {
                                className: l()(nG().filterContainer, "grid-gutter", "max-content-width"),
                                children: [n.category_filter && n.category_filter.length > 0 && n.news_category_all && (0, i.jsx)(n1, {
                                    className: l()(nG().filter),
                                    filters: [n.news_category_all, ...n.category_filter],
                                    activeFilter: f,
                                    type: n.news_category_all,
                                    size: "large",
                                    onFilterClick: g
                                }), n.country_filter && n.country_filter.length > 0 && n.news_country_all && (0, i.jsx)(n1, {
                                    className: l()(nG().filter),
                                    filters: [n.news_country_all, ...n.country_filter],
                                    activeFilter: h,
                                    type: n.news_country_all,
                                    size: "large",
                                    onFilterClick: g
                                })]
                            })]
                        }), C && (n.category_filter && n.category_filter.length > 0 && n.news_category_all || n.country_filter && n.country_filter.length > 0 && n.news_country_all) && (0, i.jsx)(is, {
                            message: n.no_result_message,
                            cta: n.no_result_cta,
                            onResetClick: w
                        }), (0, i.jsxs)("div", {
                            className: l()(nG().contentFrame, "grid-gutter", "max-content-width"),
                            children: [(0, i.jsx)("div", {
                                ref: u,
                                className: l()(nG().grid),
                                children: x ? .map((e, t) => (0, i.jsx)(nF, {
                                    transitionInDelay: d ? 0 : t % 3 * .15,
                                    className: l()(nG().newsItem),
                                    blok: { ...e.content
                                    },
                                    full_slug: e.full_slug
                                }, `${e.uuid}_${n._uid}`))
                            }), (0, i.jsx)(ie, {
                                className: l()(nG().pagination),
                                total: v,
                                activeIndex: b,
                                max: 5,
                                onPaginationClick: I
                            })]
                        })]
                    })
                },
                featured_news_overview: function({
                    canTransitionIn: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        o = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(!0),
                        p = (0, c.useRef)(0),
                        g = (0, c.useRef)(e),
                        f = (0, c.useCallback)(() => {
                            if (p.current > 0 && p.current < .1 && m.current) {
                                let e = (0, T.xy)(o);
                                e ? .transitionIn(), m.current = !1
                            } else if (p.current >= .1 && !m.current) {
                                let e = (0, T.xy)(o);
                                e ? .transitionOut(), m.current = !0
                            }
                        }, [p, m]),
                        h = (0, c.useCallback)(() => {
                            g.current = !0, f()
                        }, [f]);
                    return (0, c.useEffect)(() => {
                        e && h()
                    }, [e, h]), (0, u.A)({
                        trigger: s,
                        endTrigger: o,
                        pin: _,
                        vars: {
                            scrub: !1,
                            start: "top top",
                            end: "top top",
                            pinType: "transform",
                            anticipatePin: 1,
                            pinSpacing: !1,
                            async onUpdate({
                                progress: e
                            }) {
                                p.current = e, g.current && f()
                            }
                        }
                    }), (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(io().featuredNewsOverview, r.className, "no-padding-top-after-title"),
                        ...(0, a.m)(r.blok),
                        children: [(0, i.jsx)("div", {
                            ref: _,
                            className: l()(io().titleWrapper),
                            children: (0, i.jsx)(d.A, {
                                ref: o,
                                transitionInType: "splitCharsSlideInUp",
                                transitionOutType: "splitCharsSlideOutUp",
                                className: l()(io().title),
                                as: "span",
                                size: "heading-01",
                                canTransitionIn: e,
                                disableTriggerInOnScroll: !0,
                                children: r.blok.title
                            })
                        }), (0, i.jsx)("div", {
                            className: l()(io().contentFrame, "grid-gutter", "max-content-width"),
                            children: r.blok ? .news_items ? .map((t, r) => (0, i.jsx)(nX, {
                                canTransitionIn: e,
                                className: l()(io().newsItem),
                                blok: { ...t
                                },
                                alignRight: r % 2 == 0
                            }, t._uid))
                        })]
                    })
                },
                header_title_h1: function({
                    isVisible: e,
                    className: t,
                    canTransitionIn: r,
                    blok: n,
                    ref: s
                }) {
                    let o = (0, c.useRef)(null),
                        u = s || o,
                        _ = (0, c.useRef)(null),
                        [m, p] = (0, c.useState)(0),
                        {
                            width: g
                        } = (0, U.A)(),
                        f = (0, T.zW)(() => ({
                            ref: u,
                            refs: {
                                elementRef: u
                            },
                            setupTransitionInTimeline: id,
                            setupTransitionOutTimeline: i_
                        }), []);
                    return (0, y.s)(f, e), (0, nN.A)(() => {
                        _ ? .current && _ ? .current ? .scrollWidth <= _ ? .current ? .offsetWidth && p(0)
                    }, [g]), (0, nN.A)(() => {
                        if (!_ ? .current) return;
                        let e = _ ? .current.querySelectorAll(".split-words"),
                            t = 0;
                        if (e ? .forEach(e => {
                                e.offsetWidth > t && (t = e.offsetWidth)
                            }), t > _ ? .current ? .offsetWidth) {
                            let e = window ? .getComputedStyle(_.current, null).getPropertyValue("font-size");
                            p(_.current.offsetWidth / t * parseInt(e, 10))
                        }
                    }, [_ ? .current ? .offsetWidth, m]), (0, i.jsx)("div", {
                        ref: u,
                        className: l()(iu().headerTitleH1, t),
                        ...(0, a.m)(n),
                        style: n.use_accent_color ? {
                            background: n.background_color ? .color,
                            color: n.foreground_color ? .color
                        } : {},
                        children: (0, i.jsx)(d.A, {
                            as: "h1",
                            size: "heading-01",
                            disableTriggerInOnScroll: !1,
                            canTransitionIn: r,
                            transitionInType: "splitWordsSlideInUp",
                            className: l()(iu().title, {
                                [iu().fontsizeOverflowing]: m
                            }),
                            ref: _,
                            enableChineseTransitionFallback: !0,
                            style: {
                                "--overflowFontsize": m ? `${m}px` : void 0
                            },
                            children: n.title
                        })
                    })
                },
                button_grid: ih,
                text_grid: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: ib,
                            setupTransitionOutTimeline: iy
                        }), []);
                    (0, y.s)(u, e);
                    let m = r.text_items.length;
                    return (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(iv().textGrid, t),
                        ...(0, a.m)(r),
                        children: [r.title && m > 0 && (0, i.jsx)(d.A, {
                            as: "h4",
                            size: "heading-04",
                            className: l()(iv().title),
                            transitionInType: "slideUpFadeIn",
                            disableTriggerInOnScroll: !1,
                            children: r.title
                        }), (0, i.jsx)("div", {
                            className: l()(iv().flexContainer, iv().threeColumn, {
                                [iv().fourColumn]: m % 4 == 0 || m % 3 != 0 && m % 3 != 2
                            }),
                            children: r.text_items.map(e => (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(d.A, {
                                    as: "h5",
                                    size: "heading-05",
                                    transitionInType: "splitLineRotateIn",
                                    className: iv().label,
                                    disableTriggerInOnScroll: !1,
                                    children: e.label
                                }), (0, i.jsx)(_.A, {
                                    className: iv().description,
                                    as: "p",
                                    size: "body-standard",
                                    disableTriggerInOnScroll: !1,
                                    children: e.description
                                })]
                            }, e._uid))
                        })]
                    })
                },
                image_slider_draggable: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n,
                        u = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = t.assets.every(e => e ? .image ? .filename),
                        g = t.assets.length,
                        f = (0, c.useRef)(null),
                        {
                            itemsRef: h,
                            setCurrentPosition: x
                        } = iC(p && !t.no_inner_parallax, g),
                        v = (0, c.useRef)(null),
                        [b, y] = (0, c.useState)(0),
                        [T, I] = (0, c.useState)(!0),
                        [C, w] = (0, c.useState)(!1),
                        {
                            lock: k,
                            unLock: j
                        } = (0, $.d)(),
                        S = (0, c.useCallback)(() => {
                            if (!v ? .current) return;
                            let {
                                x: e,
                                minX: t,
                                maxX: r
                            } = v.current, n = o.Ay.utils.normalize(r, t, e);
                            I(e >= r), w(e <= t), m.current && o.Ay.set(m.current, {
                                left: `${100*n}%`,
                                translateX: `${-100*n}%`
                            }), x(Number(u ? .current ? o.Ay.getProperty(u ? .current, "x") : 0))
                        }, [v, x]);
                    v.current = (0, D.P)(u, {
                        type: "x",
                        edgeResistance: .8,
                        lockAxis: !0,
                        inertia: !0,
                        cursor: "grab",
                        onDrag: S,
                        onThrowUpdate: S
                    }, {
                        bounds: f
                    });
                    let N = f ? .current ? .getBoundingClientRect().width || 0,
                        R = u ? .current ? .getBoundingClientRect().width || 0;
                    v.current && (N >= R ? v.current.disable() : v.current.enable());
                    let {
                        width: A
                    } = (0, U.A)();
                    (0, c.useEffect)(() => {
                        if (!m.current || !_.current) return;
                        let e = f ? .current ? .getBoundingClientRect(),
                            t = u ? .current ? .getBoundingClientRect();
                        e && t && (o.Ay.set(m.current, {
                            width: `${100*Math.min(1,e.width/t.width)}%`
                        }), o.Ay.set(_.current, {
                            visibility: e.width < t.width ? "visible" : "hidden"
                        }))
                    }, [f, u, m, _, A]), (0, c.useEffect)(() => {
                        let e = 0;
                        [...s.current ? .querySelectorAll("figcaption")].forEach(t => {
                            e = Math.max(e, t.clientHeight)
                        }), y(e)
                    }, [s]);
                    let O = (0, c.useRef)(null),
                        P = (0, c.useRef)(null);
                    F(s, t.use_accent_color);
                    let {
                        themeWrapperRef: L
                    } = (0, B.u2)(), [M, z] = (0, c.useState)(null), H = (0, c.useCallback)(() => {
                        z(ik(s.current))
                    }, [s]);
                    (0, c.useEffect)(() => {
                        H();
                        let e = L.current || document.documentElement;
                        if ("u" < typeof MutationObserver) return;
                        let t = new MutationObserver(H);
                        return t.observe(e, {
                            attributes: !0,
                            attributeFilter: ["style", "class"]
                        }), () => {
                            t.disconnect()
                        }
                    }, [L, H]);
                    let E = {
                            currentX: 0,
                            minX: 0,
                            maxX: 0,
                            width: 0
                        },
                        W = () => {
                            if (!h ? .current ? .[0] || !v.current) return E;
                            let e = o.Ay.getProperty(u.current, "x"),
                                t = o.Ay.getProperty(h.current[0].imageRef.current, "width"),
                                r = o.Ay.getProperty(P.current, "width"),
                                {
                                    minX: n,
                                    maxX: i
                                } = v.current;
                            return {
                                currentX: e,
                                minX: n,
                                maxX: i,
                                width: t + r
                            }
                        },
                        {
                            minX: X,
                            maxX: V
                        } = W();
                    return (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(iI().imageSliderDraggable, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)("div", {
                            className: iI().gridGutterWidth,
                            ref: O
                        }), (0, i.jsx)("div", {
                            className: iI().gapBetweenImages,
                            ref: P
                        }), (0, i.jsxs)("div", {
                            className: l()(iI().title, iI().flexContainer),
                            children: [t.title && (0, i.jsx)(d.A, {
                                as: "h3",
                                size: "heading-03",
                                transitionInType: "splitCharsSlideInUp",
                                disableTriggerInOnScroll: !1,
                                children: t.title
                            }), v.current && V !== X && (0, i.jsxs)("div", {
                                className: l()(iI().buttonsContainer, {
                                    [iI().lightTheme]: !M,
                                    [iI().darkTheme]: M
                                }),
                                children: [(0, i.jsx)(n6, {
                                    icon: "arrow-left",
                                    revertColor: !0,
                                    className: l()(iI().button),
                                    onClick: () => {
                                        let {
                                            maxX: e,
                                            currentX: t,
                                            width: r
                                        } = W(), n = Math.min(e, (Math.ceil(t / r) + +(t % r < 1)) * r);
                                        I(n === e), w(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    isVisible: {
                                        onMount: !0,
                                        value: !0
                                    },
                                    disabled: T,
                                    disableTriggerInOnScroll: !0
                                }), (0, i.jsx)(n6, {
                                    icon: "arrow-right",
                                    revertColor: !0,
                                    className: l()(iI().button),
                                    onClick: () => {
                                        let {
                                            minX: e,
                                            currentX: t,
                                            width: r
                                        } = W(), n = Math.max(e, (Math.floor(t / r) - (t % r < 1)) * r);
                                        w(n === e), I(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    isVisible: {
                                        onMount: !0,
                                        value: !0
                                    },
                                    disabled: C,
                                    disableTriggerInOnScroll: !0
                                })]
                            })]
                        }), p ? (0, i.jsx)("div", {
                            ref: f,
                            className: iI().draggableBounds,
                            children: (0, i.jsx)("div", {
                                ref: u,
                                className: iI().slider,
                                onWheel: e => {
                                    let t = Math.abs(e.deltaX),
                                        r = Math.abs(e.deltaY);
                                    if (t > 0 && r < t ? k() : j(), v.current) {
                                        let {
                                            minX: t,
                                            maxX: r
                                        } = v.current, n = parseInt(o.Ay.getProperty(u.current, "x"), 10) - e.deltaX, i = Math.min(r, Math.max(t, n));
                                        I(i === r), w(i === t), o.Ay.set(u.current, {
                                            x: i
                                        }), x(Number(i));
                                        let a = o.Ay.utils.normalize(r, t, n);
                                        m.current && o.Ay.set(m.current, {
                                            left: `${100*a}%`,
                                            translateX: `${-100*a}%`
                                        })
                                    }
                                },
                                onMouseLeave: j,
                                children: t.assets.map((e, t) => (0, i.jsx)(nm, {
                                    ref: e => {
                                        h ? .current ? .[t] && e && (h.current[t] = e)
                                    },
                                    blok: e,
                                    includeImage: !0,
                                    transitionInDelay: .15 * t,
                                    figCaptionMaxHeight: b
                                }, e._uid))
                            })
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                ref: f
                            }), (0, i.jsx)("div", {
                                className: l()(iI().imageContainer, iI().threeColumn, {
                                    [iI().fourColumn]: g % 4 == 0 || g % 3 != 0 && g % 3 != 2
                                }),
                                children: t.assets.map((e, t) => (0, i.jsx)(nm, {
                                    ref: e => {
                                        h ? .current ? .[t] && (h.current[t] = e)
                                    },
                                    blok: e,
                                    includeImage: !1,
                                    transitionInDelay: .1 * t
                                }, e._uid))
                            })]
                        })]
                    })
                },
                people_slider: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n,
                        u = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = t.assets.every(e => e ? .image ? .filename),
                        g = t.assets.length,
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(null),
                        {
                            itemsRef: x,
                            setCurrentPosition: v
                        } = iC(p && !t.no_inner_parallax, g),
                        b = (0, c.useRef)(null),
                        [y, T] = (0, c.useState)(0),
                        [I, C] = (0, c.useState)(!0),
                        [w, k] = (0, c.useState)(!1),
                        {
                            lock: j,
                            unLock: S
                        } = (0, $.d)(),
                        N = (0, c.useCallback)(() => {
                            if (!b ? .current) return;
                            let {
                                x: e,
                                minX: t,
                                maxX: r
                            } = b.current, n = o.Ay.utils.normalize(r, t, e);
                            C(e >= r), k(e <= t), m.current && o.Ay.set(m.current, {
                                left: `${100*n}%`,
                                translateX: `${-100*n}%`
                            }), v(Number(u ? .current ? o.Ay.getProperty(u ? .current, "x") : 0))
                        }, [b, v]);
                    b.current = (0, D.P)(u, {
                        type: "x",
                        edgeResistance: .8,
                        lockAxis: !0,
                        inertia: !0,
                        cursor: "grab",
                        onDrag: N,
                        onThrowUpdate: N
                    }, {
                        bounds: f
                    });
                    let R = f ? .current ? .getBoundingClientRect().width || 0,
                        A = u ? .current ? .getBoundingClientRect().width || 0;
                    b.current && (R >= A ? b.current.disable() : b.current.enable());
                    let {
                        width: O
                    } = (0, U.A)();
                    (0, c.useEffect)(() => {
                        if (!m.current || !_.current) return;
                        let e = f ? .current ? .getBoundingClientRect(),
                            t = u ? .current ? .getBoundingClientRect();
                        e && t && (o.Ay.set(m.current, {
                            width: `${100*Math.min(1,e.width/t.width)}%`
                        }), o.Ay.set(_.current, {
                            visibility: e.width < t.width ? "visible" : "hidden"
                        }))
                    }, [f, u, m, _, O]), (0, c.useEffect)(() => {
                        let e = 0;
                        [...s.current ? .querySelectorAll("#identityDetails")].forEach(t => {
                            e = Math.max(e, t.clientHeight)
                        }), T(e)
                    }, [s]);
                    let P = (0, c.useRef)(null),
                        L = (0, c.useRef)(null);
                    F(s, t.use_accent_color);
                    let {
                        themeWrapperRef: M
                    } = (0, B.u2)(), [z, H] = (0, c.useState)(null), E = (0, c.useCallback)(() => {
                        H(ik(s.current))
                    }, [s]);
                    (0, c.useEffect)(() => {
                        E();
                        let e = M.current || document.documentElement;
                        if ("u" < typeof MutationObserver) return;
                        let t = new MutationObserver(E);
                        return t.observe(e, {
                            attributes: !0,
                            attributeFilter: ["style", "class"]
                        }), () => {
                            t.disconnect()
                        }
                    }, [M, E]);
                    let W = {
                            currentX: 0,
                            minX: 0,
                            maxX: 0,
                            width: 0
                        },
                        X = () => {
                            if (!x ? .current ? .[0] || !b.current) return W;
                            let e = o.Ay.getProperty(u.current, "x"),
                                t = o.Ay.getProperty(x.current[0].imageRef.current, "width"),
                                r = o.Ay.getProperty(L.current, "width"),
                                {
                                    minX: n,
                                    maxX: i
                                } = b.current;
                            return {
                                currentX: e,
                                minX: n,
                                maxX: i,
                                width: t + r
                            }
                        },
                        {
                            minX: V,
                            maxX: G
                        } = X();
                    return (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(iS().peopleSlider, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)("div", {
                            className: iS().gridGutterWidth,
                            ref: P
                        }), (0, i.jsx)("div", {
                            className: iS().gapBetweenImages,
                            ref: L
                        }), (0, i.jsxs)("div", {
                            className: l()(iS().title, iS().flexContainer),
                            children: [t.title && (0, i.jsx)(d.A, {
                                as: "h3",
                                size: "heading-03",
                                transitionInType: "splitCharsSlideInUp",
                                disableTriggerInOnScroll: !1,
                                className: iS().title,
                                children: t.title.split("\n").map((e, t) => (0, i.jsx)("div", {
                                    children: e
                                }, `${e}-${t}`))
                            }), b.current && G !== V && (0, i.jsxs)("div", {
                                className: l()(iS().buttonsContainer, {
                                    [iS().lightTheme]: !z,
                                    [iS().darkTheme]: z
                                }),
                                ref: h,
                                children: [(0, i.jsx)("button", {
                                    className: iS().arrowButton,
                                    disabled: I,
                                    onClick: () => {
                                        let {
                                            maxX: e,
                                            currentX: t,
                                            width: r
                                        } = X(), n = Math.min(e, (Math.ceil(t / r) + +(t % r < 1)) * r);
                                        C(n === e), k(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    children: (0, i.jsx)(Z.A, {
                                        name: "arrow-left-light",
                                        className: l()(iS().icon)
                                    })
                                }), (0, i.jsx)("button", {
                                    className: iS().arrowButton,
                                    disabled: w,
                                    onClick: () => {
                                        let {
                                            minX: e,
                                            currentX: t,
                                            width: r
                                        } = X(), n = Math.max(e, (Math.floor(t / r) - (t % r < 1)) * r);
                                        k(n === e), C(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    children: (0, i.jsx)(Z.A, {
                                        name: "arrow-right-light",
                                        className: l()(iS().icon)
                                    })
                                })]
                            })]
                        }), p ? (0, i.jsx)("div", {
                            ref: f,
                            className: iS().draggableBounds,
                            children: (0, i.jsx)("div", {
                                ref: u,
                                className: iS().slider,
                                onWheel: e => {
                                    let t = Math.abs(e.deltaX),
                                        r = Math.abs(e.deltaY);
                                    if (t > 0 && r < t ? j() : S(), b.current) {
                                        let {
                                            minX: t,
                                            maxX: r
                                        } = b.current, n = parseInt(o.Ay.getProperty(u.current, "x"), 10) - e.deltaX, i = Math.min(r, Math.max(t, n));
                                        C(i === r), k(i === t), o.Ay.set(u.current, {
                                            x: i
                                        }), v(Number(i));
                                        let a = o.Ay.utils.normalize(r, t, n);
                                        m.current && o.Ay.set(m.current, {
                                            left: `${100*a}%`,
                                            translateX: `${-100*a}%`
                                        })
                                    }
                                },
                                onMouseLeave: S,
                                children: t.assets.map((e, r) => (0, i.jsx)(ny, {
                                    ref: e => {
                                        x ? .current ? .[r] && e && (x.current[r] = e)
                                    },
                                    blok: e,
                                    includeImage: !0,
                                    transitionInDelay: .15 * r,
                                    figCaptionMaxHeight: y,
                                    viewTextLabel: t.view_text_label
                                }, e._uid))
                            })
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                ref: f
                            }), (0, i.jsx)("div", {
                                className: l()(iS().imageContainer, iS().threeColumn, {
                                    [iS().fourColumn]: g % 4 == 0 || g % 3 != 0 && g % 3 != 2
                                }),
                                children: t.assets.map((e, t) => (0, i.jsx)(ny, {
                                    ref: e => {
                                        x ? .current ? .[t] && (x.current[t] = e)
                                    },
                                    blok: e,
                                    includeImage: !1,
                                    transitionInDelay: .1 * t
                                }, e._uid))
                            })]
                        })]
                    })
                },
                office_details: iz,
                image_text: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: iF,
                            setupTransitionOutTimeline: iE
                        }), []);
                    return (0, y.s)(u, e), (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(iB().imageText, "max-content-width", t),
                        ...(0, a.m)(r),
                        children: [r.image ? .filename && (0, i.jsx)("div", {
                            className: l()(iB().imageContainer, {
                                [iB().right]: "right" === r.image_position
                            }),
                            children: (0, i.jsx)(tO.A, {
                                src: r.image.filename,
                                srcDesktop: r.image.filename,
                                alt: r.image.alt,
                                className: l()(iB().image, "abs-fill"),
                                layout: "fill",
                                objectFit: "cover",
                                innerTransition: {
                                    type: "scaleUp"
                                }
                            })
                        }), (0, i.jsx)("div", {
                            className: l()(iB().textContent),
                            children: (0, i.jsx)(ew, {
                                blok: {
                                    text: r.text
                                },
                                className: iB().richText
                            })
                        })]
                    })
                },
                title_and_text: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: iU,
                            setupTransitionOutTimeline: i$
                        }), []);
                    (0, y.s)(u, e), F(o, r.use_accent_color);
                    let m = e => `heading-0${e}`,
                        p = (0, c.useRef)(3);
                    return (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(iD().titleAndText, t, "grid-gutter"),
                        ...(0, a.m)(r),
                        children: [(0, ex.XX)(r.title, {
                            nodeResolvers: {
                                [ex.q0]: (e, {
                                    level: t
                                }) => (p.current = t, (0, i.jsx)(d.A, {
                                    as: `h${t}`,
                                    className: l()(iD()[m(t)], iD().title),
                                    size: m(t),
                                    disableTriggerInOnScroll: !1,
                                    enableChineseTransitionFallback: !0,
                                    children: e
                                }))
                            }
                        }), r.text && r.text.content[0] && (0, ex.XX)(r.text, {
                            nodeResolvers: {
                                [ex.Uv]: e => e ? (0, i.jsx)(_.A, {
                                    className: l()(iD().description),
                                    as: "p",
                                    size: p.current > 2 ? "body-standard" : "body-large",
                                    transitionInType: "splitCharsWordsRichText",
                                    disableTriggerInOnScroll: !1,
                                    children: e
                                }) : null
                            }
                        })]
                    })
                },
                location_overview: function({
                    className: e,
                    blok: t,
                    canTransitionIn: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, c.useRef)(null),
                        _ = (0, t_.useRouter)(),
                        m = {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [{
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: `${iq.env.SITE_URL}`
                            }, {
                                "@type": "ListItem",
                                position: 2,
                                name: "Locations",
                                item: `${iq.env.SITE_URL}/locations`
                            }, {
                                "@type": "ListItem",
                                position: 3,
                                name: t.title,
                                item: `${iq.env.SITE_URL}/${_.asPath}`
                            }]
                        };
                    return (0, T.mt)({
                        scroll: {
                            canTransitionIn: r,
                            trigger: o
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: o,
                                imageHolderRef: u
                            },
                            setupTransitionInTimeline: iG
                        })
                    }), (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(iV().officeOverview, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)("div", {
                            className: l()(iV().titleWrapper),
                            children: (0, i.jsx)(d.A, {
                                transitionInType: "splitWordsSlideInUp",
                                className: l()(iV().title),
                                as: "h1",
                                size: "heading-01",
                                canTransitionIn: r,
                                disableTriggerInOnScroll: !1,
                                children: t.title
                            })
                        }), t ? .office_details ? .[0] && (0, i.jsx)(iz, {
                            blok: t.office_details[0],
                            className: l()(iV().officeDetails)
                        }), t.sections ? .map(e => (0, i.jsx)(cr, {
                            blok: e,
                            canTransitionIn: r
                        }, e._uid)), (0, i.jsx)(td(), {
                            id: "breadcrumbs-schema",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(m)
                            }
                        })]
                    })
                },
                table_block: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: sR,
                            setupTransitionOutTimeline: sA
                        }), []);
                    (0, y.s)(u, e);
                    let d = (0, c.useMemo)(() => {
                            let e = !0;
                            return r.table.tbody.some(t => {
                                let r = !1;
                                return t.body.some(t => !!t.value && (e = !1, r = !0, !0)), r
                            }), !e
                        }, [r.table.tbody]),
                        _ = (0, c.useMemo)(() => {
                            let e = !0;
                            return r.table.thead.some(t => !!t.value && (e = !1, !0)), !e
                        }, [r.table.thead]);
                    return _ || d ? (0, i.jsx)("div", {
                        ref: o,
                        className: l()(sN().tableBlock, t),
                        ...(0, a.m)(r),
                        children: (0, i.jsxs)("table", {
                            children: [_ && (0, i.jsx)("thead", {
                                children: (0, i.jsx)("tr", {
                                    children: r.table.thead && r.table.thead.map(e => (0, i.jsx)("th", {
                                        children: (0, i.jsx)("div", {
                                            className: sN().tableTitle,
                                            children: e.value
                                        })
                                    }, e.value))
                                })
                            }), d && (0, i.jsx)("tbody", {
                                children: r.table.tbody && r.table.tbody.map(e => (0, i.jsx)("tr", {
                                    children: e.body.map(e => (0, i.jsx)("td", {
                                        children: (0, i.jsx)("div", {
                                            className: sN().paragraph,
                                            children: e.value
                                        })
                                    }, `cell${e.value}`))
                                }, e._uid))
                            })]
                        })
                    }) : (0, i.jsx)("div", {
                        ref: o,
                        ...(0, a.m)(r)
                    })
                },
                cookie_list: function(e) {
                    return (0, i.jsx)("div", {
                        className: l()(iQ().cookieList),
                        children: (0, i.jsx)("div", {
                            id: "ot-sdk-cookie-policy"
                        })
                    })
                },
                service_powers: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        o = (0, c.useRef)(null),
                        d = e._uid,
                        [_, m] = (0, c.useState)(-1),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(e.slides.map(e => ({
                            id: e.animal_type,
                            progress: 0
                        })));
                    return (0, T.mt)({
                        scroll: {
                            trigger: s,
                            vars: {}
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: s
                            },
                            setupTransitionInTimeline: ss
                        })
                    }), (0, u.A)({
                        trigger: s,
                        endTrigger: o,
                        pin: o,
                        vars: {
                            start: "top top",
                            end: `bottom bottom-=${100*e.slides.length*4}%`,
                            pinType: "transform",
                            anticipatePin: 1,
                            scrub: !0,
                            onUpdate: ({
                                progress: t
                            }) => {
                                let r = e.slides.length,
                                    n = 1 / r,
                                    i = Math.max(-1, t > 0 ? Math.floor(t / n) : -1);
                                i > r - 1 && (i = -1);
                                let a = (t - i * n) / n;
                                _ !== i && (m(i), p ? .current && p.current.setCurrentSlide(i)), i > -1 && (h.current[i].progress = a, p ? .current && p.current.setProgressData(h.current), g ? .current && g.current.setProgress(a, i), f ? .current && f.current.setProgress(a, i)), p.current && p.current.setProgress(t)
                            }
                        }
                    }), (0, i.jsx)("div", {
                        ref: s,
                        className: l()(sa().servicePowers, r.className),
                        ...(0, a.m)(e),
                        children: (0, i.jsxs)("div", {
                            ref: o,
                            className: l()(sa().wrapper),
                            children: [(0, i.jsx)("div", {
                                className: l()(sa().slideBackgroundHolder),
                                children: (0, i.jsx)(T.BF, {
                                    children: _ >= 0 && (0, i.jsx)(a$, {
                                        ref: g,
                                        blok: e.slides[_],
                                        config: sn[e.slides[_].animal_type],
                                        className: l()(sa().backgroundSlide),
                                        slideIndex: _,
                                        transitionOnMount: !0,
                                        transitionOnUnMount: !0
                                    }, `${d}_slide_bg_${e.slides[_]._uid}`)
                                })
                            }), (0, i.jsx)("div", {
                                className: l()(sa().webglContainer),
                                children: (0, i.jsx)(sr, {
                                    ref: p,
                                    slides: e.slides.map(e => ({
                                        id: e.animal_type,
                                        background_title: e.background_title,
                                        ...sn[e.animal_type]
                                    }))
                                })
                            }), (0, i.jsx)("div", {
                                className: l()(sa().slideHolder),
                                children: (0, i.jsx)(T.BF, {
                                    children: _ >= 0 && (0, i.jsx)(aQ, {
                                        ref: f,
                                        blok: e.slides[_],
                                        config: sn[e.slides[_].animal_type],
                                        className: l()(sa().slide),
                                        slideIndex: _,
                                        transitionOnMount: !0,
                                        transitionOnUnMount: !0
                                    }, `${d}_slide_${e.slides[_]._uid}`)
                                })
                            })]
                        })
                    })
                },
                superpowers: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        o = (0, c.useRef)(null),
                        d = e._uid,
                        [_, m] = (0, c.useState)(-1),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(e.slides.map(e => ({
                            id: e.animation_type,
                            progress: 0
                        })));
                    (0, u.A)({
                        trigger: s,
                        endTrigger: o,
                        pin: o,
                        vars: {
                            start: "top top",
                            end: `bottom bottom-=${100*e.slides.length*4}%`,
                            pinType: "fixed",
                            anticipatePin: 1,
                            scrub: !0,
                            onUpdate: ({
                                progress: t
                            }) => {
                                let r = e.slides.length,
                                    n = 1 / r,
                                    i = Math.max(-1, t > 0 ? Math.floor(t / n) : -1);
                                i > r - 1 && (i = -1);
                                let a = (t - i * n) / n;
                                _ !== i && (m(i), p ? .current && p.current.setCurrentSlide(i)), i > -1 && (h.current[i].progress = a, p ? .current && p.current.setProgressData(h.current), g ? .current && g.current.setProgress(a, i), f ? .current && f.current.setProgress(a, i)), p.current && p.current.setProgress(t)
                            }
                        }
                    });
                    let x = e.slides[_];
                    return (0, i.jsx)("div", {
                        ref: s,
                        className: l()(oF().superpowers, r.className),
                        ...(0, a.m)(e),
                        children: (0, i.jsxs)("div", {
                            ref: o,
                            className: l()(oF().wrapper),
                            children: [(0, i.jsx)("div", {
                                className: l()(oF().slideBackgroundHolder),
                                style: {
                                    "--background-color": _ >= 0 ? oH[x.animation_type].backgroundColor : ""
                                },
                                children: (0, i.jsx)(T.BF, {
                                    children: _ >= 0 && (0, i.jsx)(oX, {
                                        ref: g,
                                        blok: x,
                                        config: oH[x.animation_type],
                                        className: l()(oF().backgroundSlide),
                                        slideIndex: _,
                                        transitionOnMount: !0,
                                        transitionOnUnMount: !0
                                    }, `${d}_slide_bg_${x._uid}`)
                                })
                            }), (0, i.jsx)("div", {
                                className: l()(oF().webglContainer),
                                children: (0, i.jsx)(ce, {
                                    ref: p,
                                    slides: e.slides.map(e => ({
                                        id: e.animation_type,
                                        background_title: e.background_title,
                                        ...oH[e.animation_type]
                                    }))
                                })
                            }), (0, i.jsx)("div", {
                                className: l()(oF().slideHolder),
                                children: (0, i.jsx)(T.BF, {
                                    children: _ >= 0 && (0, i.jsx)(oJ, {
                                        ref: f,
                                        blok: x,
                                        config: oH[x.animation_type],
                                        className: l()(oF().slide),
                                        slideIndex: _,
                                        transitionOnMount: !0,
                                        transitionOnUnMount: !0
                                    }, `${d}_slide_${x._uid}`)
                                })
                            })]
                        })
                    })
                },
                blackhole_cta: function({
                    ref: e,
                    blok: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = e || n,
                        o = (0, c.useRef)(null),
                        u = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(t ? .buttons.map(() => (0, c.createRef)())),
                        p = (0, $.d)();
                    (0, T.mt)({
                        scroll: {
                            enableInView: !0,
                            canTransitionIn: r.canTransitionIn,
                            trigger: s,
                            reverseOnLeaveBack: !0,
                            vars: {
                                start: "top 40%"
                            }
                        },
                        setupOptions: () => ({
                            refs: {
                                buttons: m,
                                titleRef: u,
                                elementRef: s
                            },
                            setupTransitionInTimeline: lv,
                            setupTransitionOutTimeline: lb
                        })
                    }), (0, c.useEffect)(() => {
                        if (!s.current || !_.current ? .revealTimelineRef.current) return;
                        let e = (0, ec.KE)(s.current, _.current.revealTimelineRef.current, {
                            scroller: p ? .hasSmoothScroll ? .current && p ? .scrollWrapperRef ? .current || void 0,
                            scrub: !0,
                            start: "center-=20% bottom",
                            end: "bottom bottom"
                        });
                        return () => {
                            e.kill()
                        }
                    }, [s, p]);
                    let g = () => {
                        _.current ? .setRotationDuration(180)
                    };
                    return F(o, t.use_accent_color, {
                        foreground: t.accent_color_foreground ? .color,
                        background: t.accent_color_background ? .color
                    }), (0, i.jsx)("div", {
                        ref: s,
                        className: l()(lx().blackholeCta, r.className),
                        id: "BlackholeCta",
                        ...(0, a.m)(t),
                        children: (0, i.jsxs)("div", {
                            ref: o,
                            className: l()(lx().wrapper),
                            children: [(0, i.jsx)("div", {
                                className: l()(lx().canvasContainer),
                                onMouseDown: () => {
                                    _.current ? .setRotationDuration(.25)
                                },
                                onMouseUp: g,
                                onMouseLeave: g,
                                children: (0, i.jsx)(es, {
                                    ref: _,
                                    iconColor: t ? .icon_color ? .color,
                                    position: {
                                        top: "50%",
                                        left: "50%"
                                    },
                                    revealDelay: 0
                                })
                            }), (0, i.jsx)(d.A, {
                                ref: u,
                                as: "h3",
                                size: "heading-02",
                                className: lx().title,
                                disableTriggerInOnScroll: !0,
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [t.line1, (0, i.jsx)("br", {}), t.line2]
                                })
                            }), (0, i.jsx)("div", {
                                className: l()(lx().buttonHolder),
                                children: t ? .buttons && t ? .buttons ? .map((e, t) => (0, i.jsx)(ez.A, {
                                    ref: m.current[t],
                                    className: l()(lx().button),
                                    link: {
                                        href: e ? .link ? .cached_url
                                    },
                                    label: e.title,
                                    disableTriggerInOnScroll: !0
                                }, e.title))
                            })]
                        })
                    })
                },
                header_full_width_title: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: i1,
                            setupTransitionOutTimeline: i2
                        }), []);
                    (0, y.s)(u, e);
                    let _ = (0, en.E)(ei.S4.MIN_1024),
                        m = (0, en.E)(ei.S4.MIN_1920),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        [, h] = (0, c.useState)(0);
                    return (0, nN.A)(() => {
                        if (!g ? .current ? .clientWidth || !f ? .current ? .offsetWidth || !p ? .current) return;
                        let e = g.current.clientWidth / f.current.offsetWidth;
                        (!e || Number.isNaN(e)) && (e = 1);
                        let t = window.getComputedStyle(p.current, null).getPropertyValue("font-size"),
                            n = 1;
                        _ && e > 1.01 && (n = i5(r.title)), _ || m || !(e < .99) || (n = 1 / i5(r.title));
                        let i = Math.max(e * parseInt(t, 10) * n, 90);
                        p.current.style.fontSize = `${i}px`, (e > 1.01 || e < .99) && document.fonts.ready.then(() => {
                            h(i)
                        })
                    }, [g ? .current ? .clientWidth, f ? .current ? .offsetWidth, _, r.title]), F(o, r.use_accent_color), (0, i.jsx)("div", {
                        ref: o,
                        className: l()(i0().fullWidthTitle, t),
                        ...(0, a.m)(r),
                        children: (0, i.jsx)(d.A, {
                            as: "h1",
                            size: "heading-01",
                            disableTriggerInOnScroll: !1,
                            transitionInType: "slideUpFadeIn",
                            className: i0().title,
                            ref: p,
                            children: (0, i.jsx)("div", {
                                ref: g,
                                className: i0().insideTitleContainer,
                                children: (0, i.jsx)("div", {
                                    ref: f,
                                    className: i0().insideTitle,
                                    children: r.title
                                })
                            })
                        })
                    })
                },
                solution_card: ac,
                integrated_solutions: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: at,
                            setupTransitionOutTimeline: ar
                        }), []);
                    return (0, y.s)(u, e), F(o, r.use_accent_color), (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(ae().integratedSolutions, t, "max-content-width"),
                        ...(0, a.m)(r),
                        children: [(0, i.jsxs)("div", {
                            className: ae().header,
                            children: [(0, i.jsx)(d.A, {
                                as: "h3",
                                size: "heading-03",
                                disableTriggerInOnScroll: !1,
                                className: ae().title,
                                transitionInType: eC.CI ? "none" : "splitWordsSlideInUp",
                                children: r.title
                            }), (0, i.jsx)(_.A, {
                                as: "p",
                                size: "body-standard",
                                disableTriggerInOnScroll: !1,
                                className: l()(ae().subtitle),
                                transitionInType: eC.CI ? "none" : "splitLineRotateIn",
                                children: r.subtitle
                            })]
                        }), (0, i.jsx)("div", {
                            className: ae().cardsContainer,
                            children: r.cards.map(e => (0, i.jsx)(ac, {
                                blok: e,
                                className: ae().card
                            }, e._uid))
                        })]
                    })
                },
                services: function({
                    canTransitionIn: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        d = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(r.services.map(() => (0, c.createRef)())),
                        p = (0, c.useRef)(r.services.map(() => (0, c.createRef)())),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(void 0),
                        h = (0, c.useRef)(r.services.map(() => (0, c.createRef)())),
                        x = (0, c.useRef)(void 0);
                    x.current = (0, w.A)(su, {
                        servicesRef: h
                    });
                    let v = (0, c.useRef)(void 0);
                    v.current = (0, w.A)(sd, {
                        elementRef: o,
                        imageContainers: m
                    });
                    let b = (0, c.useRef)(void 0);
                    b.current = (0, w.A)(s_, {
                        lottieRef: g
                    }), (0, T.mt)({
                        scroll: {
                            canTransitionIn: e,
                            trigger: o,
                            vars: {
                                start: "top center",
                                onEnter: () => {
                                    v ? .current ? .tweenTo("slide_0"), b ? .current ? .tweenTo("slide_0")
                                }
                            }
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: o,
                                imagesContainerRef: _
                            },
                            setupTransitionInTimeline: sc
                        })
                    }), (0, u.A)({
                        trigger: o,
                        pin: o,
                        vars: {
                            start: "top top",
                            end: `bottom top-=${250*r.services.length}%`,
                            snap: {
                                snapTo: 1 / (r.services.length - 1),
                                directional: !1
                            },
                            onUpdate: ({
                                progress: e
                            }) => {
                                let t = r.services.length,
                                    n = Math.floor(t * e);
                                g ? .current && g ? .current ? .setProgress(e * (t - 1) / 6 % 1), "number" == typeof n && f.current !== n && e < 1 && (x ? .current ? .tweenTo(`slide_${n}`), v ? .current ? .tweenTo(`slide_${n}`)), f.current = n
                            }
                        }
                    });
                    let [y, I] = (0, c.useState)(0);
                    return (0, c.useEffect)(() => {
                        m ? .current[0].current ? .clientHeight && I(m ? .current[0].current ? .clientHeight)
                    }, [m ? .current[0] ? .current ? .clientHeight]), (0, c.useEffect)(() => {
                        ej().refresh(), ej().isTouch && ej().normalizeScroll(!0)
                    }, [y]), (0, i.jsxs)("div", {
                        "data-block": "services",
                        ref: o,
                        className: l()(so().services, t),
                        ...(0, a.m)(r),
                        children: [(0, i.jsxs)("div", {
                            className: so().imagesContainer,
                            ref: _,
                            children: [r.services.map(({
                                image: e,
                                _uid: t
                            }, r) => (0, i.jsx)("div", {
                                className: so().imageContainer,
                                ref: m.current[r],
                                children: (0, i.jsx)(tO.A, {
                                    src: e.filename,
                                    srcDesktop: e.filename,
                                    layout: "fill",
                                    alt: e.alt,
                                    className: l()(so().image, "abs-fill"),
                                    sizes: `${rK.K.MIN_768} 512px, ${rK.K.MIN_1920} 512px, 100vw`,
                                    ref: p.current[r]
                                })
                            }, t)), (0, i.jsx)(rR.A, {
                                ref: g,
                                id: "services-full-looping",
                                loop: !1,
                                className: l()(so().symbol, "abs-center"),
                                children: (0, i.jsx)("div", {
                                    className: so().blackBackground
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: so().servicesContainer,
                            ref: d,
                            children: r.services.map((e, t) => (0, i.jsx)(sh, {
                                ref: h.current[t],
                                blok: e,
                                index: t + 1,
                                className: so().service
                            }, e._uid))
                        })]
                    })
                },
                header_standard: function({
                    blok: e,
                    canTransitionIn: t,
                    ref: r,
                    ...n
                }) {
                    let s, o = (0, c.useRef)(null),
                        m = r || o,
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(null),
                        x = (0, c.useRef)(null),
                        v = (0, c.useRef)(null),
                        [b, y] = (0, c.useState)(!1),
                        [I, C] = (0, c.useState)(!1),
                        w = (0, c.useRef)(null),
                        {
                            inView: k
                        } = (0, T.mt)({
                            scroll: {
                                canTransitionIn: t,
                                trigger: m,
                                vars: {},
                                enableInView: !0
                            },
                            setupOptions: () => ({
                                refs: {
                                    titleRef: h,
                                    subtitleRef: x,
                                    descriptionRef: v,
                                    playButtonRef: p,
                                    mediaHolderRef: f,
                                    buttonRef: w
                                },
                                setupTransitionInTimeline: i4
                            })
                        });
                    (0, c.useEffect)(() => {
                        k || y(!1)
                    }, [k]), F(m, !!e ? .use_accent_color);
                    let {
                        siteHeaderElementRef: j
                    } = (0, c.useContext)(rU.a);
                    (0, eZ.A)(() => {
                        ! function({
                            titleRef: e,
                            subtitleRef: t,
                            descriptionRef: r,
                            siteHeaderElementRef: n
                        }, i) {
                            let a = (0, P.xy)(e),
                                s = (0, P.xy)(t),
                                l = (0, P.xy)(r),
                                o = (0, P.xy)(n),
                                c = i ? "transitionIn" : "transitionOut";
                            a && a[c](), s && s[c](), l && l[c](), o && o[c]()
                        }({
                            titleRef: h,
                            subtitleRef: x,
                            descriptionRef: v,
                            siteHeaderElementRef: j
                        }, !b)
                    }, [b]);
                    let S = (0, c.useCallback)(e => {
                        (e || 0) && y(e), C(e)
                    }, []);
                    e ? .video && e.video.length > 0 && (s = e.video[0]), e ? .image ? .filename && !s ? .poster_image ? .filename && (s = { ...s,
                        poster_image: { ...e ? .image
                        }
                    });
                    let N = (0, eC.qJ)(),
                        R = (0, eJ.o)(),
                        A = (0, $.d)(),
                        O = (0, c.useCallback)(() => {
                            if (N) {
                                let e, t;
                                "number" != typeof(e = A.scrollStatusRef.current ? .offset.y) && (e = 0), (t = e + m.current ? .getBoundingClientRect().top) === e ? (() => y(!0))() : A.scrollTo(0, t, 400, {
                                    easing: r$.kO.easeInOut,
                                    callback: () => {
                                        (() => y(!0))()
                                    }
                                })
                            } else R.openVideoModal({
                                video: s
                            })
                        }, [s, R, N]);
                    (0, u.A)({
                        trigger: m,
                        vars: {
                            start: "top bottom",
                            end: "bottom bottom-=5",
                            onLeave() {
                                y(!1)
                            }
                        }
                    }), (0, nZ.A)("keydown", ({
                        key: e
                    }) => {
                        I && "Escape" === e && y(!1)
                    });
                    let L = !!(s ? .vimeo_url || s ? .hosted_video ? .filename),
                        M = e => e ? `heading-0${e}` : "heading-02";
                    return (0, i.jsxs)("div", {
                        ref: m,
                        className: l()(i7().headerStandard, n.className, {
                            [i7().noFullHeight]: e.no_full_height
                        }),
                        ...(0, a.m)(e),
                        children: [(e ? .image ? .filename || L) && (0, i.jsxs)("div", {
                            ref: f,
                            className: l()(i7().mediaHolder, "abs-fill"),
                            children: [L && (0, i.jsx)(rD.default, {
                                ref: g,
                                blok: s,
                                objectFit: "contain",
                                controls: !0,
                                playing: b,
                                playButton: !1,
                                muted: !1,
                                innerTransition: {
                                    type: "scaleUp"
                                },
                                removeOnPause: !1,
                                onPlayStateChange: S,
                                className: l()(i7().video, "abs-fill"),
                                isFullScreen: !0,
                                exitFullScreen: () => {
                                    y(!1)
                                }
                            }), e ? .image ? .filename && !L && (0, i.jsx)(tO.A, {
                                src: e.image.filename,
                                srcDesktop: e.image.filename,
                                className: l()(i7().image, "abs-fill"),
                                layout: "fill",
                                objectFit: "cover",
                                innerTransition: {
                                    type: "scaleUp"
                                },
                                alt: e.image.alt
                            })]
                        }), (0, i.jsxs)("div", {
                            className: l()(i7().content, "grid-gutter max-content-width"),
                            style: {
                                pointerEvents: b ? "none" : "all"
                            },
                            children: ["string" == typeof e.title && e.title && (0, i.jsx)(d.A, {
                                ref: h,
                                as: "h1",
                                size: "heading-02",
                                disableTriggerInOnScroll: !0,
                                childClassName: l()(i7().title),
                                enableChineseTransitionFallback: !0,
                                parallax: {
                                    config: {
                                        speed: 3
                                    },
                                    trigger: m
                                },
                                children: e.title
                            }), "string" != typeof e.title && e.title ? .content && (0, ex.XX)(e.title, {
                                nodeResolvers: {
                                    [ex.q0]: (t, {
                                        level: r
                                    }) => (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsxs)(d.A, {
                                            ref: 1 === e.title.content.length || 1 === r ? h : x,
                                            as: "h1",
                                            disableTriggerInOnScroll: !0,
                                            enableChineseTransitionFallback: !0,
                                            parallax: {
                                                config: {
                                                    speed: 3
                                                },
                                                trigger: m
                                            },
                                            className: l()(i7()[M(r)], i7().title),
                                            size: M(r),
                                            children: [t, (0, i.jsx)("br", {})]
                                        }, t ? .[0])
                                    })
                                }
                            }), e.description && (0, i.jsx)(_.A, {
                                ref: v,
                                as: "p",
                                size: "body-large",
                                parallax: {
                                    config: {
                                        speed: 1.5
                                    },
                                    trigger: m
                                },
                                disableTriggerInOnScroll: !0,
                                className: l()(i7().description),
                                children: e.description
                            }), e ? .link && e ? .link.length > 0 && e ? .link[0] && (0, i.jsx)(ez.A, {
                                ref: w,
                                className: l()(i7().button),
                                link: {
                                    href: e ? .link[0] ? .link ? .cached_url,
                                    uuid: e ? .link[0] ? .link ? .id
                                },
                                label: e ? .link[0].title,
                                disableTriggerInOnScroll: !0
                            }), L && (0, i.jsx)(rW.default, {
                                ref: p,
                                className: l()(i7().playButton),
                                isPlaying: I,
                                onClick: O,
                                disableTriggerInOnScroll: !0,
                                triggerInOnce: !0,
                                isVisible: {
                                    onMount: !1,
                                    value: !b
                                }
                            })]
                        })]
                    })
                },
                karaoke: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n,
                        o = (0, c.useRef)(null),
                        d = (0, c.useRef)(null);
                    return (0, u.A)({
                        trigger: s,
                        animation: (0, w.A)(af, {
                            elementRef: s
                        }),
                        vars: {
                            scrub: !0,
                            start: "top bottom",
                            end: "bottom bottom"
                        }
                    }), (0, u.A)({
                        trigger: s,
                        animation: (0, w.A)(ag, {
                            textRef: o
                        }),
                        vars: {
                            scrub: !0,
                            start: "top bottom",
                            end: "300%"
                        }
                    }), (0, u.A)({
                        trigger: s,
                        pin: s,
                        animation: (0, w.A)(ap, {
                            textRef: o
                        }),
                        vars: {
                            pinType: "transform",
                            anticipatePin: 1,
                            scrub: !0,
                            start: "top top",
                            end: "200%"
                        }
                    }), (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(ad().karaoke, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)(_.A, {
                            as: "p",
                            size: "kanji-large",
                            transitionInType: "none",
                            disableTriggerInOnScroll: !1,
                            className: ad().backgroundKanji,
                            ref: d,
                            lang: "ja",
                            children: t.background_kanji
                        }), (0, i.jsx)(_.A, {
                            as: "p",
                            size: "body-standard",
                            transitionInType: "none",
                            disableTriggerInOnScroll: !1,
                            className: ad().text,
                            ref: o,
                            children: t.text
                        })]
                    })
                },
                latest_news: la,
                emails_blok: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n;
                    return F(s, t.use_accent_color), (0, i.jsx)("div", {
                        ref: s,
                        className: l()(iZ().emails, e),
                        ...(0, a.m)(t),
                        children: t.emails.map(e => (0, i.jsxs)("div", {
                            className: iZ().emailContainer,
                            children: [(0, i.jsx)(d.A, {
                                as: "h4",
                                size: "heading-04",
                                disableTriggerInOnScroll: !1,
                                className: iZ().title,
                                children: e.title
                            }), (0, i.jsx)(_.A, {
                                as: "p",
                                size: "body-large",
                                disableTriggerInOnScroll: !1,
                                children: (0, i.jsx)("a", {
                                    href: `mailto:${e?.email_link?.email||e?.email_link?.url}`,
                                    children: e ? .email_address
                                })
                            })]
                        }, e._uid))
                    })
                },
                locations_blok: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n,
                        [o, u] = (0, c.useState)(""),
                        [d, _] = (0, c.useState)(""),
                        {
                            locationsList: m
                        } = (0, eJ.o)(),
                        p = (0, c.useMemo)(() => {
                            if (!m ? .length) return [];
                            let e = [];
                            return m.forEach(t => {
                                let r = t.region[0];
                                e.includes(r) || e.push(r)
                            }), e.sort()
                        }, [m]);
                    return F(s, t.use_accent_color), (0, c.useEffect)(() => {
                        let e = () => {
                            let e = document.getElementById("headerRotatingShape");
                            _(e ? window.getComputedStyle(e).getPropertyValue("--icon-color").trim() : "")
                        };
                        e();
                        let t = window.requestAnimationFrame(e);
                        return () => {
                            window.cancelAnimationFrame(t)
                        }
                    }, []), (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(ax().offices, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)(aT, {
                            search_placeholder: t.search_placeholder,
                            title: t.title,
                            quick_links: t.quick_links,
                            quick_links_label: t.quick_links_label,
                            parentSetSearchValue: u
                        }), (0, i.jsx)(ih, {
                            blok: {
                                text_items: t.global_regions,
                                _uid: "",
                                component: "buttonGrid"
                            },
                            className: ax().buttonGrid
                        }), o && m ? (0, i.jsx)("ul", {
                            children: (m.filter(e => ay(e, o)).sort((e, t) => e.city.localeCompare(t.city)) || []).map((e, t) => (0, i.jsx)(aM, {
                                className: l()(ax().cityContainer),
                                location: e,
                                isOpen: !!o,
                                index: t,
                                iconColor: d
                            }, e._uid + o))
                        }) : p.map(e => (0, i.jsx)(az, {
                            region: e,
                            iconColor: d,
                            link: t.regions.find(t => t.label.toLowerCase() === e.toLowerCase()) ? .button ? .[0].link,
                            region_link_label: t.region_link_label
                        }, e))]
                    })
                },
                locations: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        a = (0, c.useRef)(null);
                    return (0, nL.j)({
                        innerTemplate: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("div", {
                                className: l()(tB().background, "abs-fill")
                            }), (0, i.jsx)("div", {
                                className: tB().container,
                                ref: a,
                                children: (0, i.jsxs)("div", {
                                    className: tB().alwaysVisiblePart,
                                    children: [(0, i.jsxs)("div", {
                                        className: tB().countryAndCity,
                                        children: [(0, i.jsx)(d.A, {
                                            as: "h3",
                                            size: "heading-03",
                                            transitionInType: "splitRotateX3dIn",
                                            transitionOutType: "fadeOut",
                                            disableTriggerInOnScroll: !1,
                                            className: tB().city,
                                            children: t.city
                                        }), t.country && (0, i.jsx)(d.A, {
                                            as: "span",
                                            size: "label-small",
                                            transitionInType: "splitRotateX3dIn",
                                            transitionOutType: "fadeOut",
                                            disableTriggerInOnScroll: !1,
                                            className: tB().country,
                                            children: t.country
                                        })]
                                    }), (0, i.jsx)(Z.A, {
                                        className: tB().arrowRight,
                                        name: "arrow-right"
                                    })]
                                })
                            })]
                        }),
                        props: {
                            className: l()(tB().office, tB().resetButtonStyle, e),
                            link: {
                                href: t ? .office_link ? .cached_url || t ? .office_link ? .url || "",
                                uuid: t._uid
                            },
                            "aria-label": "Go to location details"
                        },
                        elementRef: r || n
                    })
                },
                statistics: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        u = (0, T.zW)(() => ({
                            ref: o,
                            refs: {
                                elementRef: o
                            },
                            setupTransitionInTimeline: sT,
                            setupTransitionOutTimeline: sI
                        }), []);
                    return F(o, r.use_accent_color), (0, y.s)(u, e), (0, i.jsx)("div", {
                        ref: o,
                        className: l()(sk().container, t),
                        ...(0, a.m)(r),
                        children: (0, i.jsx)("div", {
                            ref: o,
                            className: l()(sk().statistics, t, {
                                [sk().fewStats]: r.values.length <= 2
                            }),
                            ...(0, a.m)(r),
                            children: r.values.map(e => (e.number || 0 === e.number) && (0, i.jsxs)("div", {
                                className: sk().stat,
                                children: [(0, i.jsx)(sj, {
                                    stat: e
                                }), (0, i.jsx)(_.A, {
                                    as: "p",
                                    size: "body-standard",
                                    disableTriggerInOnScroll: !1,
                                    transitionInType: "slideUpFadeIn",
                                    className: sk().description,
                                    children: e.description
                                })]
                            }, e._uid))
                        })
                    })
                },
                slider_content: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, U.A)(),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)([]),
                        x = (0, c.useRef)([]);
                    return (0, c.useEffect)(() => {
                        if (p ? .current) {
                            let e = p.current.offsetHeight;
                            o.Ay.set(m.current, {
                                paddingBottom: `${e}px`
                            })
                        }
                    }, [g, p, m]), F(s, e.use_accent_color), ((e, t) => {
                        let {
                            trigger: r
                        } = t;
                        (0, u.A)({
                            pin: r,
                            animation: (0, w.A)(sy, e),
                            vars: {
                                scrub: !0,
                                start: "top top",
                                pinType: "transform",
                                anticipatePin: 1,
                                onUpdate: e ? .onUpdate,
                                end: () => `+=${(e?.carouselRef?.current?.scrollWidth||0)-(e?.carouselRef?.current?.offsetWidth||0)}`,
                                ...void 0
                            },
                            ...t,
                            trigger: r
                        })
                    })({
                        carouselRef: m,
                        marginsRef: f,
                        carouselItemsRef: h,
                        imagesRef: x,
                        imageScale: e.no_inner_parallax ? 1 : void 0
                    }, {
                        trigger: s,
                        pin: s
                    }), (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(sv().sliderContent, r.className, {
                            [sv().withTitle]: !!e.title
                        }),
                        ...(0, a.m)(e),
                        children: [(0, i.jsx)("div", {
                            className: sv().gridGutterWidth,
                            ref: f
                        }), e.title && (0, i.jsx)("div", {
                            ref: p,
                            className: sv().head,
                            children: (0, i.jsx)(d.A, {
                                as: "h4",
                                size: "quote",
                                className: l()(sv().title, "grid-gutter"),
                                transitionInType: "slideUpFadeIn",
                                disableTriggerInOnScroll: !1,
                                children: e.title
                            })
                        }), (0, i.jsx)("div", {
                            ref: m,
                            className: l()(sv().carouselWrapper, "grid-gutter"),
                            children: e ? .assets ? .map((e, t) => (0, i.jsxs)("div", {
                                ref: e => {
                                    h.current[t] = e
                                },
                                className: l()(sv().itemHolder),
                                children: [(0, i.jsx)("canvas", {
                                    width: (0, sb.p)(e.filename).width,
                                    height: (0, sb.p)(e.filename).height
                                }), (0, i.jsx)(tO.A, {
                                    ref: e => {
                                        x.current[t] = e
                                    },
                                    layout: "fill",
                                    src: e.filename,
                                    srcDesktop: e.filename,
                                    sizes: `${rK.K.MIN_768} 768px, ${rK.K.MIN_1920} 1024px, 100vw`,
                                    className: l()(sv().item),
                                    alt: e.alt
                                }), e.name && h.current[t] && (0, i.jsx)(_.A, {
                                    as: "figcaption",
                                    size: "body-standard",
                                    disableTriggerInOnScroll: !1,
                                    scrollTransitionVars: {
                                        start: "top bottom"
                                    },
                                    className: sv().caption,
                                    style: {
                                        width: h.current[t].clientWidth
                                    },
                                    children: e.name
                                })]
                            }, e.id))
                        })]
                    })
                },
                image_grid_fluid: function({
                    blok: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n;
                    return F(s, e.use_accent_color), (0, i.jsx)("div", {
                        ref: s,
                        className: l()(i8().imageGridFluid, r.className, "grid-gutter", "max-content-width"),
                        ...(0, a.m)(e),
                        children: e ? .images ? .map((t, r) => (0, i.jsx)(tO.A, {
                            src: t.filename,
                            srcDesktop: t.filename,
                            sizes: "40vw",
                            innerTransition: e.no_inner_parallax ? void 0 : {
                                type: "parallax",
                                config: {
                                    speed: r % 2 == 0 ? 1 : -1
                                }
                            },
                            transition: {
                                type: "parallax",
                                config: {
                                    speed: (r % 3 + .5) * (r % 2 == 0 ? 1 : -1)
                                }
                            },
                            className: l()(i8().item),
                            alt: t.alt
                        }, t.id))
                    })
                },
                case: function({
                    blok: e,
                    canTransitionIn: t,
                    ref: r,
                    ...n
                }) {
                    let s = (0, c.useRef)(null),
                        o = r || s,
                        {
                            modules: d,
                            ..._
                        } = e,
                        m = (0, eJ.o)(),
                        p = (0, t_.useRouter)(),
                        {
                            nextStory: g
                        } = m,
                        [f, h] = (0, c.useState)(!1),
                        [x, v] = (0, c.useState)(!0);
                    return (0, nN.A)(() => {
                        let {
                            countryCode: e
                        } = m;
                        if (!e) return;
                        let t = !0;
                        (async () => {
                            _.countries ? .length > 0 && (t = _.exclude_countries ? !_.countries ? .includes(e) : _.countries ? .includes(e)), t || (v(!1), await p.push("/work"))
                        })()
                    }, [m.countryCode]), (0, u.A)({
                        trigger: o,
                        vars: {
                            scrub: !0,
                            start: "bottom-=10% bottom",
                            end: "bottom bottom",
                            onEnter: () => {
                                h(!0)
                            }
                        }
                    }), (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("section", {
                            ref: o,
                            className: l()(sV().case, n.className),
                            ...(0, a.m)(e),
                            children: [(0, i.jsx)(sE, {
                                blok: _,
                                skipTransitionIn: (0, sG.P)(m.toPath, m.fromPath),
                                canTransitionIn: t
                            }), !x && (0, i.jsx)("div", {
                                className: sV().fullHeightContainer,
                                children: (0, i.jsx)("div", {
                                    className: l()(sV().screenHeightContainer),
                                    children: (0, i.jsx)("div", {
                                        className: l()(sV().lottieHolder),
                                        children: (0, i.jsx)(rR.A, {
                                            id: "loader-dc",
                                            loop: !0,
                                            autoplay: !0,
                                            pauseWhenOutViewport: !1,
                                            className: l()(sV().lottieIcon, "abs-fill")
                                        })
                                    })
                                })
                            }), d ? .map(e => (0, i.jsx)(cr, {
                                blok: e,
                                canTransitionIn: t
                            }, e._uid)), (0, i.jsx)(sF, {
                                blok: _
                            })]
                        }), (f && m.fromPath ? .startsWith(sB.fB.Work) || m.fromPath ? .startsWith(sB.fB.Cases) || ["", "/", "?"].includes(m.fromPath)) && (0, i.jsx)("section", {
                            children: g && (0, i.jsx)(s$, {
                                blok: g.content,
                                full_slug: g.full_slug,
                                uuid: g.uuid,
                                canTransitionIn: t
                            })
                        })]
                    })
                },
                image_block: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        a = r || n,
                        s = `${rK.K.MIN_768} 768px, ${rK.K.MIN_1920} 1024px, 100vw`,
                        o = {};
                    return "small" !== t.layout_size && (s = "100vw", t.no_inner_parallax || (o = {
                        innerTransition: {
                            type: "scaleUp"
                        }
                    })), F(a, t.use_accent_color), (0, i.jsx)(sZ, {
                        ref: a,
                        className: l()(sY().imageBlock, e, {
                            [sY().noMargins]: t.no_margins
                        }),
                        blok: t,
                        children: (0, i.jsx)(tO.A, {
                            src: t.image.filename,
                            srcDesktop: t.image.filename,
                            className: l()(sY().image),
                            ...o,
                            sizes: s,
                            layout: "responsive",
                            objectFit: "cover",
                            alt: t.image.alt
                        })
                    })
                },
                video_block: function({
                    className: e,
                    blok: t,
                    canTransitionIn: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = n || s,
                        d = `${rK.K.MIN_768} 768px, ${rK.K.MIN_1920} 1024px, 100vw`;
                    "small" !== t.layout_size && (d = "100vw");
                    let {
                        inView: _
                    } = (0, u.A)({
                        trigger: o,
                        canTransitionIn: r,
                        enableInView: !0
                    });
                    return F(o, t.use_accent_color), (0, i.jsx)(sZ, {
                        ref: o,
                        className: l()(s3().videoBlock, e, {
                            [s3().noMargins]: t.no_margins
                        }),
                        blok: t,
                        ...(0, a.m)(t),
                        children: (0, i.jsx)(rD.default, {
                            openInModal: !t.is_background && !eC.xl,
                            pauseWhenOutViewport: !0,
                            imageSizes: d,
                            playing: t.is_background && _,
                            blok: t.video[0],
                            objectFit: "contain",
                            controls: !t.is_background,
                            innerTransition: {
                                type: "scaleUp"
                            },
                            loop: t.is_background,
                            playButton: !t.is_background,
                            muted: t.is_background
                        })
                    })
                },
                quote_block: function({
                    isVisible: e,
                    className: t,
                    blok: r,
                    canTransitionIn: n,
                    ref: s
                }) {
                    let o = (0, c.useRef)(null),
                        u = s || o,
                        d = (0, T.zW)(() => ({
                            ref: u,
                            refs: {
                                elementRef: u
                            },
                            setupTransitionInTimeline: s1,
                            setupTransitionOutTimeline: s2
                        }), []);
                    return (0, y.s)(d, e), F(u, r.use_accent_color), (0, i.jsxs)("figure", {
                        ref: u,
                        className: l()(s0().quote, t, "grid-gutter"),
                        ...(0, a.m)(r),
                        children: [(0, i.jsx)(_.A, {
                            as: "blockquote",
                            size: "quote",
                            className: l()({
                                [s0().withQuotationMarks]: r.credit
                            }),
                            disableTriggerInOnScroll: !1,
                            canTransitionIn: n,
                            children: r.quote
                        }), r.credit && (0, i.jsx)(_.A, {
                            as: "figcaption",
                            size: "body-standard",
                            disableTriggerInOnScroll: !1,
                            canTransitionIn: n,
                            children: r.credit
                        })]
                    })
                },
                rich_text: ew,
                article: function({
                    className: e,
                    blok: t,
                    canTransitionIn: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null),
                        o = (0, eJ.o)(),
                        {
                            modules: u,
                            ...d
                        } = t,
                        _ = (0, c.useMemo)(() => u ? .find(e => "pardot_pdf_form" === e.component), [u]),
                        m = (0, t_.useRouter)(),
                        p = {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            headline: t.title,
                            image: [t.key_image ? .[0] ? .image_portrait, t.key_image ? .[0] ? .image_landscape].filter(e => e),
                            datePublished: nP(t.publish_date, "YYYY-MM-DD"),
                            publisher: {
                                "@type": "Organization",
                                name: "Dentsu Creative"
                            }
                        },
                        g = {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [{
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: `${lf.env.SITE_URL}`
                            }, {
                                "@type": "ListItem",
                                position: 2,
                                name: "News",
                                item: `${lf.env.SITE_URL}/news`
                            }, {
                                "@type": "ListItem",
                                position: 3,
                                name: t.title,
                                item: `${lf.env.SITE_URL}/${m.asPath}`
                            }]
                        },
                        f = (0, c.useMemo)(() => {
                            if (t.pardot_id) return {
                                pardot_id: t.pardot_id,
                                success_title: t.pardot_title || o.globalSettings.form_pardot_pdf_success_title,
                                success_description: t.pardot_success_description || o.globalSettings.form_pardot_pdf_success_description,
                                imageBack: t.pardot_image_back,
                                imageFront: t.pardot_image_front,
                                title: t.pardot_title || o.globalSettings.form_pardot_pdf_title,
                                description: t.pardot_description || o.globalSettings.form_pardot_pdf_description,
                                button_label: t.pardot_button_label,
                                disclaimer: t.pardot_disclaimer || o.globalSettings.form_pardot_pdf_disclaimer,
                                pardot_input_fields: t.pardot_input_fields,
                                pardot_checkboxes: t.pardot_checkboxes,
                                component: "pardot_pdf_form",
                                _uid: t._uid,
                                linkedin_tracking_id: t.linkedin_tracking_id || o.globalSettings.linkedin_tracking_id,
                                use_accent_color: t.use_accent_color
                            }
                        }, [t._uid, t.pardot_description, t.pardot_disclaimer, t.pardot_id, t.pardot_image_back, t.pardot_image_front, t.pardot_title, t.pardot_success_description, t.pardot_checkboxes, t.pardot_input_fields, t.linkedin_tracking_id, t.pardot_button_label, o.globalSettings.form_pardot_pdf_description, o.globalSettings.form_pardot_pdf_disclaimer, o.globalSettings.form_pardot_pdf_success_description, o.globalSettings.form_pardot_pdf_success_title, o.globalSettings.form_pardot_pdf_title, o.globalSettings.linkedin_tracking_id, t.use_accent_color]);
                    return (0, i.jsxs)("article", {
                        ref: n || s,
                        className: l()(s4().article, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)(lg, {
                            blok: { ...d,
                                publish_date: t.publish_date || t.published_at
                            },
                            className: s4().articleHeader,
                            canTransitionIn: r
                        }), u && u.map(e => "pardot_pdf_form" === e.component ? f && (0, i.jsx)(ti, {
                            canTransitionIn: r,
                            blok: f
                        }, e._uid) : (0, i.jsx)(cr, {
                            blok: e,
                            canTransitionIn: r,
                            className: l()({
                                [s4().richText]: "rich_text" === e.component,
                                [s4().quote]: "quote_block" === e.component,
                                [s4().imageBlock]: "image_block" === e.component,
                                [s4().videoBlock]: "video_block" === e.component
                            })
                        }, e._uid)), !_ && f && (0, i.jsx)(ti, {
                            canTransitionIn: r,
                            blok: f
                        }), (0, i.jsx)(la, {
                            canTransitionIn: r,
                            blok: {
                                _uid: t._uid,
                                component: "latest_news",
                                title: "Latest News",
                                layout: "column"
                            }
                        }), (0, i.jsx)(td(), {
                            id: "organization-schema",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(p)
                            }
                        }), (0, i.jsx)(td(), {
                            id: "organization-schema-breadcrumbs",
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {
                                __html: JSON.stringify(g)
                            }
                        })]
                    })
                },
                modern_creativity: function({
                    ref: e,
                    ...t
                }) {
                    let r = (0, c.useRef)(null),
                        n = e || r,
                        s = t.blok._uid,
                        o = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)([]),
                        g = (0, c.useRef)([]),
                        f = (0, U.A)(),
                        h = (0, c.useRef)(void 0),
                        x = (0, c.useRef)(-1),
                        [v, b] = (0, c.useState)(-1),
                        y = (0, eC.qJ)();
                    h.current = (0, w.A)(lW, {
                        carouselItemsRef: p,
                        imagesRef: g,
                        windowWidth: f.width,
                        isInCenterChange: async (e, t) => {
                            t ? (b(e), x.current = e) : e !== x.current || t || (x.current = -1, b(-1))
                        }
                    }), (0, u.A)({
                        trigger: n,
                        pin: o,
                        vars: {
                            scrub: !0,
                            start: "top top",
                            end: () => `+=${(m?.current?.offsetWidth||0)+f.width*t.blok.items.length}`,
                            pinType: "transform",
                            anticipatePin: 1
                        }
                    });
                    let {
                        inView: I
                    } = (0, u.A)({
                        trigger: n,
                        enableInView: !0,
                        vars: {
                            scrub: !0,
                            start: `top center+=${f.width/2}`,
                            end: () => `+=${(m?.current?.offsetWidth||0)+f.width*t.blok.items.length+f.width+f.height}`,
                            onUpdate: ({
                                progress: e
                            }) => {
                                h ? .current ? .progress(e)
                            }
                        }
                    });
                    return (0, i.jsxs)("div", {
                        ref: n,
                        className: l()(lE().modernCreativity, t.className),
                        ...(0, a.m)(t.blok),
                        children: [(0, i.jsxs)("div", {
                            ref: o,
                            className: l()(lE().contentFrame, "grid-gutter"),
                            children: [(0, i.jsx)(d.A, {
                                as: "h2",
                                size: "heading-04",
                                className: l()(lE().title),
                                disableTriggerInOnScroll: !1,
                                transitionInType: "splitLineRotateIn",
                                children: t.blok.title
                            }), (0, i.jsx)(_.A, {
                                as: "span",
                                size: "kanji-medium",
                                className: l()(lE().kanjiText),
                                disableTriggerInOnScroll: !1,
                                transitionInType: "slideUpFadeIn",
                                lang: "ja",
                                children: t.blok.kanjiText
                            }), (0, i.jsx)("div", {
                                className: l()(lE().carouselWrapper),
                                ref: m,
                                children: (0, i.jsx)("div", {
                                    className: l()(lE().carouselContainer),
                                    children: t ? .blok ? .items ? .map((e, t) => (0, i.jsxs)("div", { ...(0, a.m)(e),
                                        ref: e => {
                                            p.current[t] = e
                                        },
                                        className: l()(lE().carouselItem),
                                        children: [(!(e.video && nM(e.video)) || !y) && (0, i.jsx)(tO.A, {
                                            ref: e => {
                                                g.current[t] = e
                                            },
                                            src: e.image,
                                            srcDesktop: e.image,
                                            className: l()(lE().image),
                                            layout: "fill",
                                            objectFit: "cover",
                                            alt: e.title
                                        }), e.video && nM(e.video) && y && (0, i.jsx)(lU, {
                                            blok: { ...e.video[0],
                                                poster_image: {
                                                    filename: e.image
                                                }
                                            },
                                            removeOnPause: !I,
                                            playing: v === t,
                                            requireClickListener: !0
                                        })]
                                    }, `${e._uid}`))
                                })
                            }), (0, i.jsx)(T.BF, {
                                children: v >= 0 && (0, i.jsx)(d.A, {
                                    as: "h3",
                                    size: "heading-01",
                                    className: l()(lE().carouselTitle),
                                    transitionOnMount: !0,
                                    transitionOnUnMount: !0,
                                    transitionOutType: "splitCharsSlideOutUp",
                                    children: (0, ex.XX)(t.blok.items[v].title)
                                }, `${s}_itemTitle_${v}`)
                            }), (0, i.jsx)(T.BF, {
                                children: v >= 0 && (0, i.jsx)(_.A, {
                                    as: "p",
                                    size: "link-large",
                                    className: l()(lE().carouselSubTitle),
                                    transitionOnMount: !0,
                                    transitionOnUnMount: !0,
                                    children: t.blok.items[v].subTitle
                                }, `${s}_itemSubTitle_${v}`)
                            })]
                        }), (0, i.jsx)("div", {
                            className: l()(lE().safariScrollVideoFix, "abs-fill")
                        })]
                    })
                },
                services_cta_item: function({
                    ref: e,
                    ...t
                }) {
                    let r = (0, c.useRef)(null),
                        n = e || r,
                        s = (0, c.useRef)(null),
                        o = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null);
                    (0, u.A)({
                        trigger: n,
                        animation: (0, w.A)(lV, {
                            lineRef: p,
                            titleRef: g,
                            numberRef: f
                        }),
                        vars: {
                            start: "bottom bottom"
                        }
                    });
                    let h = (0, T.zW)(() => ({
                            refs: {
                                hoverTextRef: o,
                                backgroundRef: m
                            },
                            setupTransitionInTimeline: lG,
                            setupTransitionOutTimeline: lq
                        }), []),
                        x = (0, c.useCallback)(() => {
                            h.transitionIn()
                        }, [h]),
                        v = (0, c.useCallback)(() => {
                            h.transitionOut()
                        }, [h]),
                        b = (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("span", {
                                ref: p,
                                className: lX().line
                            }), (0, i.jsx)("div", {
                                ref: m,
                                className: l()(lX().background, "abs-fill")
                            }), (0, i.jsx)(d.A, {
                                ref: f,
                                disableTriggerInOnScroll: !0,
                                as: "span",
                                size: "heading-04",
                                className: l()(lX().number),
                                children: `0${t.index+1}`.slice(-2)
                            }), (0, i.jsx)(d.A, {
                                ref: g,
                                disableTriggerInOnScroll: !0,
                                as: "h4",
                                size: "heading-04",
                                transitionInType: "splitRotateX3dIn",
                                className: l()(lX().title),
                                children: t.blok.title
                            }), (0, i.jsx)(_.A, {
                                ref: o,
                                as: "span",
                                size: "kanji-large",
                                className: l()(lX().hoverText),
                                transitionInType: "slideUpFadeIn",
                                children: t.blok.hover_title
                            })]
                        });
                    return (0, i.jsxs)("li", {
                        onMouseEnter: x,
                        onMouseLeave: v,
                        ref: n,
                        className: l()(lX().servicesCtaItem, t.className),
                        ...(0, a.m)(t.blok),
                        children: [t ? .blok ? .link ? .id && (0, nL.j)({
                            innerTemplate: b,
                            props: {
                                label: t.blok.title,
                                link: {
                                    href: t.blok.link.cached_url,
                                    uuid: t.blok.link.id
                                },
                                className: l()(lX().anchor)
                            },
                            elementRef: s
                        }), !t ? .blok ? .link ? .id && (0, i.jsx)("div", {
                            ref: s,
                            className: l()(lX().anchor),
                            children: b
                        })]
                    })
                },
                born_and_raised: function({
                    ref: e,
                    ...t
                }) {
                    let r = (0, c.useRef)(null),
                        n = e || r,
                        s = t.blok._uid,
                        d = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        [f, h] = (0, c.useState)(-1),
                        x = (0, U.A)();
                    (0, c.useEffect)(() => {
                        let e = Math.hypot(x.width, x.height);
                        o.Ay.set([_.current, m.current], {
                            width: e,
                            height: e
                        })
                    }, [x.width, x.height]), (0, u.A)({
                        trigger: n,
                        animation: (0, w.A)(lI, {
                            circle1Ref: _,
                            circle2Ref: m,
                            circle1LottieRef: p,
                            circle2LottieRef: g
                        }),
                        vars: {
                            scrub: !0,
                            start: "top center",
                            end: "bottom bottom-=50%"
                        }
                    }), (0, u.A)({
                        trigger: n,
                        pin: d,
                        vars: {
                            start: "top top",
                            end: "bottom top",
                            pinType: "transform",
                            anticipatePin: 1,
                            scrub: !0,
                            onUpdate: ({
                                progress: e
                            }) => {
                                e > 0 && e < .4 ? h(0) : e >= .4 && e < .8 ? h(1) : h(-1)
                            }
                        }
                    });
                    let v = {
                        section1: {
                            topLeftTitle: t.blok.section1_top_left_title,
                            bottomRightTitle: t.blok.section1_bottom_right_title,
                            kanjiText: t.blok.section1_kanji_text
                        },
                        section2: {
                            topLeftTitle: t.blok.section2_top_left_title,
                            bottomRightTitle: t.blok.section2_bottom_right_title,
                            kanjiText: t.blok.section2_kanji_text
                        }
                    };
                    return (0, i.jsx)("div", {
                        ref: n,
                        className: l()(lT().bornAndRaised, t.className),
                        ...(0, a.m)(t.blok),
                        children: (0, i.jsxs)("div", {
                            ref: d,
                            className: lT().contentFrame,
                            children: [(0, i.jsx)("div", {
                                ref: _,
                                className: l()(lT().circle)
                            }), (0, i.jsx)("div", {
                                ref: m,
                                className: l()(lT().circle, lT().circle2)
                            }), (0, i.jsx)(T.BF, {
                                children: f >= 0 && (0, i.jsx)(lS, {
                                    blok: 1 === f ? { ...v.section2
                                    } : { ...v.section1
                                    },
                                    className: lT().textSlide,
                                    transitionOnMount: !0,
                                    transitionOnUnMount: !0
                                }, `${s}_textSlide_${f}`)
                            })]
                        })
                    })
                },
                services_cta: function({
                    ref: e,
                    ...t
                }) {
                    let r = (0, c.useRef)(null);
                    return (0, i.jsxs)("div", {
                        ref: e || r,
                        className: l()(lQ().servicesCta, t.className, {
                            [lQ().hasNoCopy]: !t ? .blok ? .title && !t ? .blok ? .description
                        }),
                        ...(0, a.m)(t.blok),
                        children: [(0, i.jsxs)("div", {
                            className: l()(lQ().header, "grid-gutter"),
                            children: [t ? .blok ? .title && (0, i.jsx)(d.A, {
                                disableTriggerInOnScroll: !1,
                                as: "h2",
                                size: "heading-03",
                                className: l()(lQ().title),
                                transitionInType: "splitCharsSlideInUp",
                                children: t.blok.title.split("\n").map((e, t) => (0, i.jsx)("div", {
                                    children: e
                                }, `${e}-${t}`))
                            }), t ? .blok ? .description && (0, i.jsx)(_.A, {
                                disableTriggerInOnScroll: !1,
                                as: "p",
                                size: "body-large",
                                className: l()(lQ().description),
                                children: t ? .blok ? .description
                            })]
                        }), t.blok.accordion ? .[0] && (0, i.jsx)(rv, {
                            blok: t.blok.accordion[0],
                            className: lQ().accordion,
                            numbered: !0
                        })]
                    })
                },
                header_intro: function({
                    canTransitionIn: e,
                    ref: t,
                    blok: r,
                    ...n
                }) {
                    let s = (0, c.useRef)(null),
                        o = t || s,
                        d = (0, c.useRef)(null),
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null);
                    return (0, T.mt)({
                        scroll: {
                            canTransitionIn: e,
                            trigger: o
                        },
                        setupOptions: () => ({
                            refs: {
                                elementRef: o,
                                logoIntroSectionRef: _
                            },
                            setupTransitionInTimeline: lA
                        })
                    }), F(_, r.use_accent_color, {
                        foreground: "#fff",
                        background: "#000"
                    }), F(d, r.use_accent_color, {
                        foreground: r.accent_color_foreground.color,
                        background: r.accent_color_background.color
                    }), (0, u.A)({
                        trigger: m,
                        pin: m,
                        vars: {
                            scrub: !0,
                            start: "top top",
                            end: "bottom top",
                            pinType: "transform",
                            anticipatePin: 1
                        }
                    }), (0, i.jsxs)("div", {
                        ref: o,
                        className: l()(lR().headerIntro, n.className),
                        ...(0, a.m)(r),
                        children: [(0, i.jsx)(lB, {
                            title: r ? .title,
                            kanjiText: r ? .kanjiText,
                            ref: _
                        }), (0, i.jsx)("div", {
                            className: l()(lR().content),
                            children: (0, i.jsx)("div", {
                                ref: d,
                                className: l()(lR().innerContent),
                                children: (0, i.jsx)(em, {
                                    ref: m,
                                    className: lR().header,
                                    disableScrollTrigger: !0,
                                    style: {
                                        "--container-min-height": "calc(var(--vh) * 100)"
                                    },
                                    blok: {
                                        topTitle: r ? .topLeftTitle,
                                        bottomTitle: r ? .bottomRightTitle,
                                        icon: "pinwheel",
                                        ...r
                                    }
                                })
                            })
                        })]
                    })
                },
                ticker_text: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n,
                        u = (0, c.useRef)([]),
                        d = (0, c.useRef)(void 0),
                        {
                            inView: _
                        } = (0, T.mt)({
                            scroll: {
                                trigger: s,
                                vars: {},
                                enableInView: !0
                            },
                            setupOptions: () => ({
                                refs: {
                                    elementRef: s
                                },
                                setupTransitionInTimeline: lK
                            })
                        });
                    return (0, c.useEffect)(() => {
                        let e = u ? .current ? .map(e => e);
                        s ? .current && (d.current = ((e, t, r = 3) => {
                            let n = o.Ay.timeline({
                                    repeat: -1
                                }),
                                i = o.Ay.timeline({
                                    paused: !0
                                }),
                                a = 0,
                                s = t.offsetWidth || 0;
                            e.forEach(e => {
                                a += e ? .offsetWidth || 0
                            });
                            let l = 0,
                                c = 0,
                                u = 0;
                            return [, , , ].fill(0).forEach((t, n) => {
                                l = 0, e.forEach((e, t) => {
                                    let o = e ? .offsetWidth || 0,
                                        u = l,
                                        d = r * Math.min(100, Math.max(30, .1 * s)),
                                        _ = s - u,
                                        m = -o - u,
                                        p = Math.abs(m - _),
                                        g = (u + a * n) / d;
                                    l = (e ? .offsetLeft || 0) + o, i.fromTo(e, {
                                        x: `${_/o*100}%`
                                    }, {
                                        duration: p / d,
                                        ease: "none",
                                        x: `${m/o*100}%`
                                    }, g), 0 === t && 0 === n && (c = Math.abs(_ - u) / d)
                                }), 0 === n && (u = i.duration())
                            }), n.fromTo(i, {
                                time: u
                            }, {
                                time: `+=${u-c}`,
                                duration: u - c,
                                ease: r$.WG.easeNone
                            }), n
                        })(e, s.current))
                    }, [s, d, u]), (0, c.useEffect)(() => {
                        _ ? d ? .current ? .play() : d ? .current ? .pause()
                    }, [_, s]), (0, i.jsx)("div", {
                        ref: s,
                        className: l()(lZ().tickerText, e),
                        ...(0, a.m)(t),
                        children: t ? .items ? .map((e, t) => (0, i.jsx)(l2, {
                            ref: e => {
                                u.current[t] = e
                            },
                            blok: e
                        }, e._uid))
                    })
                },
                case_listing: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = (0, en.E)(ei.S4.MIN_768, !0),
                        o = (0, c.useRef)(null),
                        {
                            allCases: u,
                            countryCode: _
                        } = (0, eJ.o)(),
                        m = (0, c.useMemo)(() => {
                            let e = [];
                            return _ ? e = t.cards ? .filter(e => "string" == typeof e.case || !(e.case.content.countries ? .length > 0) || (e.case.content.exclude_countries ? !e.case.content.countries ? .includes(_) : e.case.content.countries ? .includes(_))) : t.cards
                        }, [t.cards, _]),
                        {
                            cases: p,
                            activeCategoryFilter: g,
                            onFilterClick: f,
                            activeLocationFilter: h
                        } = function(e, t) {
                            let r = (0, t_.useRouter)(),
                                n = (0, c.useCallback)((e, t) => e ? .find(e => (0, rS.O7)(e) === t), []),
                                [i, a] = (0, c.useState)(n(e ? .category_filters, r.query.category) || e.category_all),
                                [s, l] = (0, c.useState)(n(e ? .locations_filter ? .map(e => e.content.country), r.query.location) || e.location_all),
                                o = (0, c.useCallback)((t, r) => {
                                    let n, i;
                                    r === ou && t !== e.location_all && (n = e.category_all), s !== e.location_all && r === od && (i = e.location_all), r === ou && (i = t), r === od && (n = t), n && a(n), i && l(i)
                                }, [e.location_all, e.category_all, s]);
                            return {
                                cases: (0, c.useMemo)(() => {
                                    let r;
                                    return r = s !== e.location_all ? t : e.cards.map(e => e.case), i !== e.category_all && (r = r ? .filter(e => e.content.category.includes(i))), s !== e.location_all && (r = r ? .filter(e => (e.content.locations || []).some(e => o_(e, s)))), r
                                }, [i, s, t, e.cards, e.category_all, e.location_all]),
                                activeCategoryFilter: i,
                                onFilterClick: o,
                                activeLocationFilter: s
                            }
                        }({ ...t,
                            cards: m
                        }, u || []),
                        [x, v] = (0, c.useState)(p),
                        [b, y] = (0, c.useState)(12),
                        T = (0, c.useRef)(null),
                        I = (0, c.useRef)(null),
                        C = (0, c.useMemo)(() => x ? .filter(e => e.uuid) ? ? [], [x]),
                        w = (0, c.useMemo)(() => C.slice(0, b), [C, b]),
                        k = b < C.length;
                    (0, eZ.A)(() => {
                        (async () => {
                            T ? .current && (await (0, S._)(T.current, {
                                duration: .2,
                                to: 0
                            }), v(p), y(12), (0, S.m)(T.current, {
                                duration: .2,
                                to: 1,
                                from: 0
                            }))
                        })()
                    }, [p]), (0, c.useEffect)(() => {
                        ej().refresh()
                    }, [x, b]);
                    let {
                        start: j
                    } = (0, rh.Z)(() => {
                        ej().refresh()
                    }, 0, !1);
                    (0, c.useEffect)(() => {
                        g !== t.category_all ? om(I, !1, j) : om(I, !0, j)
                    }, [g, t.category_all]);
                    let N = (0, c.useMemo)(() => {
                            let e = ["changes-society", "creates-culture", "invents-the-future"],
                                r = [{
                                    filter: t.category_all
                                }],
                                n = t ? .category_filters ? .map(t => e.includes((0, rS.O7)(t)) ? {
                                    icon: (0, rS.O7)(t),
                                    filter: t
                                } : {
                                    filter: t
                                });
                            return r.concat(n)
                        }, [t.category_all, t ? .category_filters]),
                        R = (0, c.useMemo)(() => {
                            let e = [];
                            return t.locations_filter ? .forEach(t => {
                                if (t.content.countries ? .length) t.content.countries.forEach(t => {
                                    try {
                                        u ? .some(e => e.content ? .locations ? .some(e => o_(e, t))) && e.push(t)
                                    } catch (r) {
                                        console.error(r), e.push(t)
                                    }
                                });
                                else try {
                                    u ? .some(e => e.content ? .locations ? .some(e => o_(e, t.content.country || t.content.title))) && e.push(t.content.country || t.content.title)
                                } catch (r) {
                                    console.error(r), e.push(t.content.country || t.content.title)
                                }
                            }), e.sort((e, t) => e.localeCompare(t, void 0, {
                                sensitivity: "base"
                            })), [...new Set(e)]
                        }, [t, u]);
                    return (0, i.jsxs)("div", {
                        ref: r || n,
                        className: l()(l3().caseListing, e, "max-content-width"),
                        ...(0, a.m)(t),
                        children: [t.title && (0, i.jsx)("div", {
                            className: l()("grid-gutter"),
                            children: (0, i.jsx)(d.A, {
                                as: "h2",
                                size: "heading-03",
                                className: l()(l3().title, l3().fullBleed),
                                disableTriggerInOnScroll: !1,
                                children: t.title
                            })
                        }), (t.category_filters && t.category_filters.length > 0 || t.locations_filter && t.locations_filter.length > 0) && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)("div", {
                                className: l()(l3().filters, "grid-gutter"),
                                children: [t.category_filters && t.category_filters.length > 0 && t.category_all && (0, i.jsx)(l8, {
                                    filters: N,
                                    activeFilter: g,
                                    onFilterClick: f,
                                    colorVariation: "dark7",
                                    type: od,
                                    className: l()(l3().categoryFilter)
                                }), t.locations_filter ? .length && t.location_all && (0, i.jsx)(n1, {
                                    className: l()(l3().locationFilter),
                                    filters: [t.location_all, ...R],
                                    activeFilter: h,
                                    type: ou,
                                    textVariant: "button-label-large",
                                    onFilterClick: f
                                })]
                            }), (0, i.jsx)("div", {
                                ref: I,
                                className: l()(l3().filterSpacingWrapper),
                                children: (0, i.jsx)("div", {
                                    className: l()(l3().filterSpacing)
                                })
                            }), t.category_filters && t.category_filters.length > 0 && (0, i.jsx)(oc, {
                                ref: o,
                                categories: t.category_filters,
                                activeCategory: g,
                                className: l()(l3().visuals)
                            })]
                        }), (0, i.jsxs)("div", {
                            ref: T,
                            className: l()(l3().listContainer, {
                                "grid-row": !s
                            }),
                            children: [t.highlighted_case ? .[0] && (0, i.jsx)(ob, {
                                className: l()(l3().cardItem, {
                                    [l3().fullBleed]: !0
                                }),
                                blok: {
                                    case: t.highlighted_case[0].case,
                                    fullBleed: !0
                                }
                            }), w.map(e => (0, i.jsx)(ob, {
                                className: l()(l3().cardItem, {
                                    [l3().fullBleed]: !1
                                }),
                                blok: {
                                    case: e,
                                    fullBleed: !1
                                }
                            }, e.uuid))]
                        }), k && (0, i.jsx)("div", {
                            className: l()(l3().showMoreWrapper),
                            children: (0, i.jsx)(ez.A, {
                                label: "Show more",
                                disableTriggerInOnScroll: !1,
                                onClick: () => y(e => e + 12)
                            })
                        })]
                    })
                },
                header_showreel: function({
                    canTransitionIn: e,
                    ref: t,
                    ...r
                }) {
                    let n = (0, c.useRef)(null),
                        s = t || n,
                        _ = (0, c.useRef)(null),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(null),
                        x = (0, c.useRef)(null),
                        v = (0, c.useRef)(null),
                        b = (0, c.useRef)(null),
                        y = (0, c.useRef)(null),
                        I = r.blok._uid,
                        C = `${I}_mask`,
                        {
                            enterFullScreen: k,
                            exitFullScreen: j,
                            isFullScreen: S
                        } = function(e, t, r, n, i, a, s, l, d, _) {
                            let {
                                siteHeaderElementRef: m
                            } = (0, c.useContext)(rU.a), p = (0, c.useRef)(!1), {
                                goFullScreen: g,
                                isFullScreen: f
                            } = function(e, t, r, n) {
                                let [i, a] = (0, c.useState)(!1), {
                                    width: s,
                                    height: l
                                } = (0, U.A)(), u = (0, c.useCallback)((e = !1) => {
                                    let n = t ? .current ? .getBoundingClientRect(),
                                        i = {
                                            width: r ? .current ? .offsetWidth || 0,
                                            height: r ? .current ? .offsetHeight || 0
                                        },
                                        a = i.width / i.height,
                                        s = 0,
                                        l = 0,
                                        o = 0;
                                    return n && (s = n.width / 1026.74, e && (s = i.height / 518.73 * (518.73 / oC), a > ow / oC && (s = i.width / 1026.74 * (1026.74 / ow))), l = (i.width - 1026.74 * s) / 2, o = (i.height - 518.73 * s) / 2), {
                                        x: l,
                                        y: o,
                                        scale: s
                                    }
                                }, [t, r]), d = (0, c.useCallback)((t, r, n) => {
                                    o.Ay.set(e.current, {
                                        attr: {
                                            transform: `translate(${t}, ${r}), scale(${n})`
                                        }
                                    })
                                }, [e]), _ = (0, c.useCallback)((t = !0) => {
                                    let i = u(t);
                                    o.Ay.to(e.current, {
                                        duration: 1,
                                        ease: "Expo.easeOut",
                                        attr: {
                                            transform: `translate(${i.x}, ${i.y}), scale(${i.scale})`
                                        },
                                        onUpdate: () => {
                                            r.current && ai().safari && (o.Ay.set(r.current, {
                                                clipPath: "none"
                                            }), o.Ay.set(r.current, {
                                                clipPath: `url(#${n})`
                                            }))
                                        },
                                        onComplete: () => {
                                            a(t)
                                        }
                                    })
                                }, [u, e, r, n]);
                                return (0, c.useEffect)(() => {
                                    let {
                                        x: e,
                                        y: t,
                                        scale: r
                                    } = u(i);
                                    d(e, t, r)
                                }, [l, s, i, u, d]), {
                                    goFullScreen: _,
                                    isFullScreen: i,
                                    getSize: u
                                }
                            }(i, a, d, _), h = (0, w.A)(oj, {
                                title1MaskRef: t,
                                title2MaskRef: r,
                                playButtonRef: n,
                                title1Ref: s,
                                title2Ref: l,
                                siteHeaderElementRef: m
                            }), x = (0, w.A)(oS, {
                                title1MaskRef: t,
                                title2MaskRef: r,
                                playButtonRef: n,
                                title1Ref: s,
                                title2Ref: l,
                                siteHeaderElementRef: m
                            }), v = (0, $.d)(), b = (0, c.useCallback)(() => {
                                let t = v.scrollStatusRef.current ? .offset.y;
                                "number" != typeof t && (t = 0);
                                let r = t + e.current ? .getBoundingClientRect().top,
                                    n = () => {
                                        p.current = !0, x.kill(), h.restart(), g(!0)
                                    };
                                r === t ? n() : v.scrollTo(0, r, 400, {
                                    easing: r$.kO.easeInOut,
                                    callback: () => {
                                        n()
                                    }
                                })
                            }, [p, x, h, g, v, e]), y = (0, c.useCallback)(() => {
                                p.current = !1, h.kill(), x.restart(), g(!1)
                            }, [p, h, x, g]);
                            return (0, u.A)({
                                trigger: e,
                                vars: {
                                    start: "top bottom",
                                    end: "bottom top",
                                    onUpdate() {
                                        p.current && y()
                                    }
                                }
                            }), {
                                exitFullScreen: y,
                                enterFullScreen: b,
                                isFullScreen: f
                            }
                        }(s, p, g, v, x, h, _, m, y, C),
                        {
                            inView: N
                        } = (0, T.mt)({
                            scroll: {
                                canTransitionIn: e,
                                trigger: s,
                                vars: {},
                                enableInView: !0
                            },
                            setupOptions: () => ({
                                refs: {
                                    elementRef: s,
                                    playButtonRef: v,
                                    title1Ref: _,
                                    title2Ref: m,
                                    title1MaskRef: p,
                                    title2MaskRef: g,
                                    maskedContainerRef: f,
                                    shapeContainerRef: h
                                },
                                setupTransitionInTimeline: ok
                            })
                        }),
                        R = (0, eJ.o)(),
                        A = (0, eC.qJ)(),
                        O = (0, c.useCallback)(() => {
                            A ? k() : R.openVideoModal({
                                video: r.blok.video[0]
                            })
                        }, [A, R, r.blok.video, k]);
                    return (0, u.A)({
                        canTransitionIn: e,
                        trigger: s,
                        animation: (0, w.A)(oN, {
                            title1MaskRef: p,
                            title2MaskRef: g,
                            title1Ref: _,
                            title2Ref: m
                        }),
                        vars: {
                            scrub: !0,
                            start: "top top",
                            end: "bottom top"
                        }
                    }), (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(oT().headerShowreel, r.className),
                        ...(0, a.m)(r.blok),
                        children: [(0, i.jsx)("svg", {
                            preserveAspectRatio: "xMinYMin meet",
                            className: l()(oT().shape),
                            children: (0, i.jsx)("defs", {
                                children: (0, i.jsx)("clipPath", {
                                    id: C,
                                    clipPathUnits: "userSpaceOnUse",
                                    children: (0, i.jsx)("path", {
                                        ref: x,
                                        fill: "white",
                                        d: "M1026.74 213.242L721.248 518.735C606.51 403.997 420.489 403.997 305.751 518.735L0.257812 213.242C283.259 -69.7593 743.74 -69.7593 1026.74 213.242Z"
                                    })
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            ref: h,
                            className: l()(oT().shapeContainer, "abs-center"),
                            children: [(0, i.jsx)(d.A, {
                                as: "h1",
                                ref: _,
                                size: "heading-01",
                                transitionInType: "splitCharsSlideInUp",
                                className: l()(oT().title, oT().firstTitle),
                                children: r.blok.title_line1
                            }), (0, i.jsx)(d.A, {
                                as: "h1",
                                ref: m,
                                size: "heading-01",
                                transitionInType: "splitCharsSlideInDown",
                                className: l()(oT().title, oT().secondTitle),
                                children: r.blok.title_line2
                            })]
                        }), (0, i.jsx)("div", {
                            ref: y,
                            style: {
                                clipPath: `url(#${C})`,
                                WebkitClipPath: `url(#${C})`
                            },
                            className: l()(oT().maskedElements, "abs-fill"),
                            children: (0, i.jsxs)("div", {
                                ref: f,
                                className: l()(oT().maskedWrapper, "abs-fill"),
                                children: [(0, i.jsx)("div", {
                                    className: l()(oT().videoContainer, "abs-center"),
                                    children: (0, i.jsx)("div", {
                                        ref: b,
                                        className: l()(oT().videoWrapper, "abs-center"),
                                        children: (0, i.jsx)(rD.default, {
                                            className: l()(oT().video, "abs-fill"),
                                            blok: r.blok.video[0],
                                            playing: N,
                                            playsinline: !0,
                                            controls: !0,
                                            removeOnPause: !1,
                                            openInModal: !1,
                                            innerTransition: {
                                                type: "scaleUp"
                                            },
                                            controlsVisible: S,
                                            loop: !0,
                                            isFullScreen: S,
                                            muted: !S,
                                            exitFullScreen: j
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: l()(oT().shapeContainer, "abs-center"),
                                    children: [(0, i.jsx)(rW.default, {
                                        ref: v,
                                        className: l()(oT().playButton, "abs-center"),
                                        isPlaying: S,
                                        onClick: O
                                    }), (0, i.jsx)(d.A, {
                                        as: "h1",
                                        size: "heading-01",
                                        ref: p,
                                        transitionInType: "none",
                                        className: l()(oT().title, oT().firstTitle),
                                        children: r.blok.title_line1
                                    }), (0, i.jsx)(d.A, {
                                        as: "h1",
                                        size: "heading-01",
                                        ref: g,
                                        transitionInType: "none",
                                        className: l()(oT().title, oT().secondTitle),
                                        children: r.blok.title_line2
                                    })]
                                })]
                            })
                        })]
                    })
                },
                case_carousel: function({
                    className: e,
                    blok: t,
                    ref: r
                }) {
                    let n = (0, c.useRef)(null),
                        s = r || n,
                        u = (0, c.useRef)(null),
                        _ = (0, c.useRef)([]),
                        m = (0, c.useRef)(null),
                        p = (0, c.useRef)(null),
                        g = (0, c.useRef)(null),
                        f = (0, c.useRef)(null),
                        h = (0, c.useRef)(null),
                        [x, v] = (0, c.useState)(!0),
                        [b, I] = (0, c.useState)(!1),
                        {
                            lock: C,
                            unLock: w
                        } = (0, $.d)(),
                        k = (0, c.useCallback)(() => {
                            if (!h ? .current) return;
                            let {
                                x: e,
                                minX: t,
                                maxX: r
                            } = h.current, n = o.Ay.utils.normalize(r, t, e);
                            v(e >= r), I(e <= t), p.current && o.Ay.set(p.current, {
                                left: `${100*n}%`,
                                translateX: `${-100*n}%`
                            })
                        }, [h]);
                    h.current = (0, D.P)(u, {
                        type: "x",
                        edgeResistance: .8,
                        lockAxis: !0,
                        inertia: !0,
                        cursor: "grab",
                        onDrag: k,
                        onThrowUpdate: k
                    }, {
                        bounds: g
                    });
                    let j = g ? .current ? .getBoundingClientRect().width || 0,
                        S = u ? .current ? .getBoundingClientRect().width || 0;
                    h.current && (j >= S ? h.current.disable() : h.current.enable());
                    let [N, R] = (0, c.useState)(!1);
                    (0, c.useEffect)(() => {
                        let e = s.current;
                        if (!e) return void R(!1);
                        let t = new IntersectionObserver(([e]) => {
                            R(e.isIntersecting)
                        }, {
                            root: null,
                            threshold: 0,
                            rootMargin: "0px 0px -40% 0px"
                        });
                        return t.observe(e), () => {
                            t.disconnect()
                        }
                    }, [s]);
                    let A = (0, T.zW)(() => ({
                        ref: s,
                        refs: {
                            elementRef: s,
                            caseCardsRef: _,
                            buttonsContainerRef: f
                        },
                        setupTransitionInTimeline: oO,
                        setupTransitionOutTimeline: oP
                    }), [h.current]);
                    (0, y.s)(A, {
                        onMount: !1,
                        value: N
                    });
                    let {
                        width: O
                    } = (0, U.A)();
                    (0, c.useEffect)(() => {
                        if (!p.current || !m.current) return;
                        let e = g ? .current ? .getBoundingClientRect(),
                            t = u ? .current ? .getBoundingClientRect();
                        e && t && (o.Ay.set(p.current, {
                            width: `${100*Math.min(1,e.width/t.width)}%`
                        }), o.Ay.set(m.current, {
                            visibility: e.width < t.width ? "visible" : "hidden"
                        }))
                    }, [g, u, p, m, O]);
                    let P = (0, c.useRef)(null),
                        L = (0, c.useRef)(null);
                    F(s, !0, {
                        foreground: "#000",
                        background: "#fff"
                    });
                    let {
                        isDarkTheme: M
                    } = (0, B.u2)(), z = M && !t.use_accent_color || !M && t.use_accent_color, H = !M && !t.use_accent_color || M && t.use_accent_color, E = {
                        currentX: 0,
                        minX: 0,
                        maxX: 0,
                        width: 0
                    }, W = () => {
                        if (!_ ? .current ? .[0] || !h.current) return E;
                        let e = o.Ay.getProperty(u.current, "x"),
                            t = o.Ay.getProperty(_.current[0].mediaRef.current, "width"),
                            r = o.Ay.getProperty(L.current, "width"),
                            {
                                minX: n,
                                maxX: i
                            } = h.current;
                        return {
                            currentX: e,
                            minX: n,
                            maxX: i,
                            width: t + r
                        }
                    }, {
                        minX: X,
                        maxX: V
                    } = W(), {
                        countryCode: G
                    } = (0, eJ.o)(), q = (0, c.useMemo)(() => {
                        let e = [],
                            r = t ? .cards;
                        return G ? e = r ? .filter(e => "string" == typeof e.case || !(e.case.content.countries ? .length > 0) || (e.case.content.exclude_countries ? !e.case.content.countries ? .includes(G) : e.case.content.countries ? .includes(G))) : r
                    }, [t ? .cards, G]);
                    return (0, i.jsxs)("div", {
                        ref: s,
                        className: l()(oA().imageSliderDraggable, e),
                        ...(0, a.m)(t),
                        children: [(0, i.jsx)("div", {
                            className: oA().gridGutterWidth,
                            ref: P
                        }), (0, i.jsx)("div", {
                            className: oA().gapBetweenImages,
                            ref: L
                        }), (0, i.jsxs)("div", {
                            className: l()(oA().titleContainer, oA().flexContainer),
                            children: [t.title && (0, i.jsx)(d.A, {
                                as: "h3",
                                size: "heading-03",
                                transitionInType: "splitCharsSlideInUp",
                                disableTriggerInOnScroll: !1,
                                className: oA().title,
                                children: t.title.split("\n").map((e, t) => (0, i.jsx)("div", {
                                    children: e
                                }, `${e}-${t}`))
                            }), h.current && V !== X && (0, i.jsxs)("div", {
                                className: l()(oA().buttonsContainer, {
                                    [oA().lightTheme]: H,
                                    [oA().darkTheme]: z
                                }),
                                ref: f,
                                children: [(0, i.jsx)("button", {
                                    className: oA().arrowButton,
                                    disabled: x,
                                    onClick: () => {
                                        let {
                                            maxX: e,
                                            currentX: t,
                                            width: r
                                        } = W(), n = Math.min(e, (Math.ceil(t / r) + +(t % r < 1)) * r);
                                        v(n === e), I(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    children: (0, i.jsx)(Z.A, {
                                        name: "arrow-left-light",
                                        className: l()(oA().icon)
                                    })
                                }), (0, i.jsx)("button", {
                                    className: oA().arrowButton,
                                    disabled: b,
                                    onClick: () => {
                                        let {
                                            minX: e,
                                            currentX: t,
                                            width: r
                                        } = W(), n = Math.max(e, (Math.floor(t / r) - (t % r < 1)) * r);
                                        I(n === e), v(!1), o.Ay.to(u.current, {
                                            x: n
                                        })
                                    },
                                    children: (0, i.jsx)(Z.A, {
                                        name: "arrow-right-light",
                                        className: l()(oA().icon)
                                    })
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            ref: g,
                            className: oA().draggableBounds,
                            children: (0, i.jsx)("div", {
                                ref: u,
                                className: oA().slider,
                                onWheel: e => {
                                    let t = Math.abs(e.deltaX),
                                        r = Math.abs(e.deltaY);
                                    if (!(t > 0) || !(t > r)) return void w();
                                    if (C(), h.current) {
                                        let {
                                            minX: t,
                                            maxX: r
                                        } = h.current, n = parseInt(o.Ay.getProperty(u.current, "x"), 10) - e.deltaX, i = Math.min(r, Math.max(t, n));
                                        v(i === r), I(i === t), o.Ay.set(u.current, {
                                            x: i
                                        });
                                        let a = o.Ay.utils.normalize(r, t, n);
                                        p.current && o.Ay.set(p.current, {
                                            left: `${100*a}%`,
                                            translateX: `${-100*a}%`
                                        })
                                    }
                                },
                                onMouseLeave: w,
                                children: q ? .map((e, t) => (0, i.jsx)(ob, {
                                    ref: e => {
                                        _.current[t] = e
                                    },
                                    isCarousel: !0,
                                    imageInnerTransition: void 0,
                                    className: l()(oA().card),
                                    blok: e
                                }, e._uid))
                            })
                        })]
                    })
                },
                page: function({
                    className: e,
                    canTransitionIn: t,
                    blok: r,
                    ref: n
                }) {
                    let s = (0, c.useRef)(null);
                    return (0, c.createElement)("main", {
                        ref: n || s,
                        className: l()(oM().page, e),
                        id: "main-content",
                        ...(0, a.m)(r),
                        key: r._uid
                    }, r ? .modules ? .map(e => (0, i.jsx)(cr, {
                        blok: e,
                        canTransitionIn: t
                    }, e._uid)))
                }
            };

            function cr({
                className: e,
                blok: t,
                canTransitionIn: r,
                ref: n
            }) {
                if (t && void 0 !== ct[t.component]) {
                    let a = ct[t.component];
                    return (0, i.jsx)(a, {
                        blok: t,
                        className: e,
                        ref: n,
                        canTransitionIn: r
                    }, t._uid)
                }
                return t && t.component ? (0, i.jsx)(oz, {
                    componentName: t.component
                }, t.component) : null
            }
        },
        2501: e => {
            e.exports = {
                "header-showreel": "HeaderShowreel_header-showreel__KxZHU",
                headerShowreel: "HeaderShowreel_header-showreel__KxZHU",
                video: "HeaderShowreel_video__A_Gy2",
                title: "HeaderShowreel_title__IuBRG",
                "first-title": "HeaderShowreel_first-title__3wrfl",
                firstTitle: "HeaderShowreel_first-title__3wrfl",
                "second-title": "HeaderShowreel_second-title__Fecvp",
                secondTitle: "HeaderShowreel_second-title__Fecvp",
                "video-container": "HeaderShowreel_video-container__ckyIt",
                videoContainer: "HeaderShowreel_video-container__ckyIt",
                "shape-container": "HeaderShowreel_shape-container__4sIxV",
                shapeContainer: "HeaderShowreel_shape-container__4sIxV",
                shape: "HeaderShowreel_shape__MLrVp",
                "masked-elements": "HeaderShowreel_masked-elements__Vp85A",
                maskedElements: "HeaderShowreel_masked-elements__Vp85A",
                "play-button": "HeaderShowreel_play-button__LiV7_",
                playButton: "HeaderShowreel_play-button__LiV7_",
                "video-wrapper": "HeaderShowreel_video-wrapper__zljjw",
                videoWrapper: "HeaderShowreel_video-wrapper__zljjw"
            }
        },
        3383: e => {
            e.exports = {
                "text-grid": "TextGrid_text-grid__EtTFp",
                textGrid: "TextGrid_text-grid__EtTFp",
                title: "TextGrid_title__FXIJO",
                flexContainer: "TextGrid_flexContainer__NBo88",
                threeColumn: "TextGrid_threeColumn__xExU8",
                fourColumn: "TextGrid_fourColumn__X3gsV",
                label: "TextGrid_label__xM4_b",
                description: "TextGrid_description__tCT__"
            }
        },
        5278: e => {
            e.exports = {
                "pardot-pdf-form": "PardotPdfForm_pardot-pdf-form__rtzfi",
                pardotPdfForm: "PardotPdfForm_pardot-pdf-form__rtzfi",
                lightTheme: "PardotPdfForm_lightTheme__acvJk",
                darkTheme: "PardotPdfForm_darkTheme__Thgzb",
                description: "PardotPdfForm_description__g4vUl",
                header: "PardotPdfForm_header__OiQXz",
                form: "PardotPdfForm_form__FqGLo",
                center: "PardotPdfForm_center__X57Lt",
                fieldset: "PardotPdfForm_fieldset__2zUuO",
                inputContainer: "PardotPdfForm_inputContainer__1Hb7D",
                "input-field": "PardotPdfForm_input-field__n3_Md",
                inputField: "PardotPdfForm_input-field__n3_Md",
                disclaimer: "PardotPdfForm_disclaimer__V_DnI",
                "submit-holder": "PardotPdfForm_submit-holder__GPbt_",
                submitHolder: "PardotPdfForm_submit-holder__GPbt_",
                checkboxContainer: "PardotPdfForm_checkboxContainer__Jnjpk",
                labelContainer: "PardotPdfForm_labelContainer__SaHHV",
                "error-container": "PardotPdfForm_error-container__WsI4j",
                errorContainer: "PardotPdfForm_error-container__WsI4j",
                "error-message": "PardotPdfForm_error-message__yv2Vd",
                errorMessage: "PardotPdfForm_error-message__yv2Vd",
                icon: "PardotPdfForm_icon__6oRqt"
            }
        },
        5562: e => {
            e.exports = {
                "sticky-note": "StickyNote_sticky-note__5t2bX",
                stickyNote: "StickyNote_sticky-note__5t2bX",
                title: "StickyNote_title__c5EpA",
                text: "StickyNote_text__oyLDl"
            }
        },
        7554: e => {
            e.exports = {
                container: "Statistics_container__o_nJB",
                statistics: "Statistics_statistics__CXWmn",
                stat: "Statistics_stat__TatlY",
                number: "Statistics_number__sIryP",
                description: "Statistics_description__P01aT",
                "few-stats": "Statistics_few-stats__yJ9F1",
                fewStats: "Statistics_few-stats__yJ9F1"
            }
        },
        8889: e => {
            e.exports = {
                "read-more": "ReadMore_read-more__e7UCL",
                readMore: "ReadMore_read-more__e7UCL",
                richTextContainer: "ReadMore_richTextContainer____OFV",
                previewTextContainer: "ReadMore_previewTextContainer__VGtbH",
                previewText: "ReadMore_previewText__G_JWQ",
                button: "ReadMore_button__8rTuK"
            }
        },
        9927: e => {
            e.exports = {
                personContactInfo: "PersonDetailsInfo_personContactInfo__cFPCa",
                label: "PersonDetailsInfo_label__AB71m"
            }
        },
        10050: e => {
            e.exports = {
                karaoke: "Karaoke_karaoke__sVGs4",
                "background-kanji": "Karaoke_background-kanji__P5kcV",
                backgroundKanji: "Karaoke_background-kanji__P5kcV",
                text: "Karaoke_text__J6qWO",
                "end-trigger": "Karaoke_end-trigger__LOKrp",
                endTrigger: "Karaoke_end-trigger__LOKrp"
            }
        },
        11398: e => {
            e.exports = {
                "next-case": "NextCase_next-case__ozkYY",
                nextCase: "NextCase_next-case__ozkYY",
                "kanji-vertical": "NextCase_kanji-vertical__2nrK_",
                kanjiVertical: "NextCase_kanji-vertical__2nrK_",
                content: "NextCase_content__xtDJY",
                loader: "NextCase_loader__ih6Ez"
            }
        },
        11428: e => {
            e.exports = {
                "title-text-columns": "TitleTextColumns_title-text-columns__gzP4C",
                titleTextColumns: "TitleTextColumns_title-text-columns__gzP4C",
                title: "TitleTextColumns_title__sZkLQ",
                textContainer: "TitleTextColumns_textContainer__yyTjh",
                paragraph: "TitleTextColumns_paragraph__bK8DG"
            }
        },
        11607: e => {
            e.exports = {
                "cookie-list": "CookieList_cookie-list__oQtiQ",
                cookieList: "CookieList_cookie-list__oQtiQ"
            }
        },
        11622: e => {
            e.exports = {
                "header-showreal-large": "HeaderShowrealLarge_header-showreal-large__Se5_l",
                headerShowrealLarge: "HeaderShowrealLarge_header-showreal-large__Se5_l",
                content: "HeaderShowrealLarge_content__bCYpv",
                "preview-container": "HeaderShowrealLarge_preview-container__X_BJ1",
                previewContainer: "HeaderShowrealLarge_preview-container__X_BJ1",
                "bottom-title": "HeaderShowrealLarge_bottom-title__tkoOg",
                bottomTitle: "HeaderShowrealLarge_bottom-title__tkoOg",
                "top-title": "HeaderShowrealLarge_top-title__1hkXT",
                topTitle: "HeaderShowrealLarge_top-title__1hkXT",
                "play-button": "HeaderShowrealLarge_play-button__Ntzya",
                playButton: "HeaderShowrealLarge_play-button__Ntzya",
                "masked-content": "HeaderShowrealLarge_masked-content__l3RSL",
                maskedContent: "HeaderShowrealLarge_masked-content__l3RSL",
                "video-container": "HeaderShowrealLarge_video-container__yA7WF",
                videoContainer: "HeaderShowrealLarge_video-container__yA7WF",
                "top-title-size-2": "HeaderShowrealLarge_top-title-size-2__Gd7MZ",
                topTitleSize2: "HeaderShowrealLarge_top-title-size-2__Gd7MZ",
                "top-title-size-3": "HeaderShowrealLarge_top-title-size-3__K6YqL",
                topTitleSize3: "HeaderShowrealLarge_top-title-size-3__K6YqL",
                "top-title-size-4": "HeaderShowrealLarge_top-title-size-4__G5NnG",
                topTitleSize4: "HeaderShowrealLarge_top-title-size-4__G5NnG",
                "bottom-title-size-2": "HeaderShowrealLarge_bottom-title-size-2__1Qacq",
                bottomTitleSize2: "HeaderShowrealLarge_bottom-title-size-2__1Qacq",
                "bottom-title-size-3": "HeaderShowrealLarge_bottom-title-size-3__uJZ4I",
                bottomTitleSize3: "HeaderShowrealLarge_bottom-title-size-3__uJZ4I",
                "bottom-title-size-4": "HeaderShowrealLarge_bottom-title-size-4__q5qWG",
                bottomTitleSize4: "HeaderShowrealLarge_bottom-title-size-4__q5qWG"
            }
        },
        12509: e => {
            e.exports = {
                container: "LocationDropdown_container__Ai5xN",
                regionContainer: "LocationDropdown_regionContainer__nnQFA",
                icon: "LocationDropdown_icon__M98TG",
                locationItemLink: "LocationDropdown_locationItemLink__SgHfo",
                background: "LocationDropdown_background__Dn1NQ",
                iconLine: "LocationDropdown_iconLine__ZoMGF",
                list: "LocationDropdown_list__9fl8l",
                line: "LocationDropdown_line__1wDnX",
                cityContainer: "LocationDropdown_cityContainer__mMX4n",
                hidden: "LocationDropdown_hidden__Umg5k",
                link: "LocationDropdown_link__2BY5c"
            }
        },
        14048: e => {
            e.exports = {
                service: "Service_service__aBB_V",
                index: "Service_index__ip3Di",
                title: "Service_title__bmQNx",
                subtitle: "Service_subtitle__FHJFG",
                description: "Service_description__MDSUN",
                button: "Service_button___URfs",
                "image-container": "Service_image-container__rf6Yh",
                imageContainer: "Service_image-container__rf6Yh",
                image: "Service_image__aYY5L"
            }
        },
        14525: e => {
            e.exports = {
                "service-power-slide": "ServicePowerSlide_service-power-slide__NZtcq",
                servicePowerSlide: "ServicePowerSlide_service-power-slide__NZtcq",
                description: "ServicePowerSlide_description__8N0aW",
                "text-content": "ServicePowerSlide_text-content__Qovot",
                textContent: "ServicePowerSlide_text-content__Qovot"
            }
        },
        16751: e => {
            e.exports = {
                "modern-creativity": "ModernCreativity_modern-creativity__tdc1k",
                modernCreativity: "ModernCreativity_modern-creativity__tdc1k",
                title: "ModernCreativity_title__SCazi",
                "content-frame": "ModernCreativity_content-frame__Hxb1T",
                contentFrame: "ModernCreativity_content-frame__Hxb1T",
                "carousel-wrapper": "ModernCreativity_carousel-wrapper__N1ZuE",
                carouselWrapper: "ModernCreativity_carousel-wrapper__N1ZuE",
                "carousel-container": "ModernCreativity_carousel-container__0GeYj",
                carouselContainer: "ModernCreativity_carousel-container__0GeYj",
                "carousel-item": "ModernCreativity_carousel-item__7Unnm",
                carouselItem: "ModernCreativity_carousel-item__7Unnm",
                image: "ModernCreativity_image__W11aO",
                "carousel-title": "ModernCreativity_carousel-title__ROLLF",
                carouselTitle: "ModernCreativity_carousel-title__ROLLF",
                "carousel-sub-title": "ModernCreativity_carousel-sub-title__aBvcq",
                carouselSubTitle: "ModernCreativity_carousel-sub-title__aBvcq",
                "kanji-text": "ModernCreativity_kanji-text__mh5pR",
                kanjiText: "ModernCreativity_kanji-text__mh5pR"
            }
        },
        16832: e => {
            e.exports = {
                "list-link-items": "ListLinkItems_list-link-items__mf0Rq",
                listLinkItems: "ListLinkItems_list-link-items__mf0Rq",
                item: "ListLinkItems_item__m11Yd",
                title: "ListLinkItems_title__3_03Z",
                arrowRight: "ListLinkItems_arrowRight__i_JwI",
                background: "ListLinkItems_background__BRqNI"
            }
        },
        17011: e => {
            e.exports = {
                "grid-list": "GridList_grid-list__Sqld8",
                gridList: "GridList_grid-list__Sqld8",
                item: "GridList_item__FT_8L"
            }
        },
        17309: e => {
            e.exports = {
                officesContainer: "OfficeDetails_officesContainer__JLXLH",
                threeColumn: "OfficeDetails_threeColumn__C3UPp",
                fourColumn: "OfficeDetails_fourColumn___nLQF",
                flexContainer: "OfficeDetails_flexContainer___8jTq",
                topSeparator: "OfficeDetails_topSeparator__fYiO5",
                leftContainer: "OfficeDetails_leftContainer__tp6w7",
                leftOfficesContainer: "OfficeDetails_leftOfficesContainer__FPc9z",
                socialLinksContainer: "OfficeDetails_socialLinksContainer__t2WYO",
                emailsContainer: "OfficeDetails_emailsContainer__yL5TT",
                socialsTitle: "OfficeDetails_socialsTitle__nrdBd",
                social: "OfficeDetails_social__hU42C",
                textContainer: "OfficeDetails_textContainer__JRYG2",
                description: "OfficeDetails_description__eVCtg",
                hidden: "OfficeDetails_hidden__6VpYE",
                hiddenDesktop: "OfficeDetails_hiddenDesktop__b5Iv3",
                hiddenMobile: "OfficeDetails_hiddenMobile__OIOPU"
            }
        },
        17682: e => {
            e.exports = {
                office: "Location_office__sbicF",
                background: "Location_background__u_ukc",
                arrowRight: "Location_arrowRight__633HZ",
                container: "Location_container___QEuO",
                "reset-button-style": "Location_reset-button-style__WT_GD",
                resetButtonStyle: "Location_reset-button-style__WT_GD",
                country: "Location_country__piytH",
                "email-title": "Location_email-title__NgWuJ",
                emailTitle: "Location_email-title__NgWuJ",
                "always-visible-part": "Location_always-visible-part__6fC_b",
                alwaysVisiblePart: "Location_always-visible-part__6fC_b",
                city: "Location_city__wBrtB",
                "country-and-city": "Location_country-and-city__9cumP",
                countryAndCity: "Location_country-and-city__9cumP",
                address: "Location_address__rEORT",
                "email-container": "Location_email-container__il4un",
                emailContainer: "Location_email-container__il4un",
                "email-address": "Location_email-address__0tf9C",
                emailAddress: "Location_email-address__0tf9C",
                "additional-info-container": "Location_additional-info-container__OMkU8",
                additionalInfoContainer: "Location_additional-info-container__OMkU8"
            }
        },
        18257: e => {
            e.exports = {
                "primary-dropdown": "PrimaryDropdown_primary-dropdown__M_PpK",
                primaryDropdown: "PrimaryDropdown_primary-dropdown__M_PpK",
                "is-open": "PrimaryDropdown_is-open__S8FBv",
                isOpen: "PrimaryDropdown_is-open__S8FBv",
                icon: "PrimaryDropdown_icon__TV0KM",
                list: "PrimaryDropdown_list__z5S55",
                border: "PrimaryDropdown_border__bIdkf",
                selector: "PrimaryDropdown_selector__KTr8C",
                "hover-label": "PrimaryDropdown_hover-label__U4fxV",
                hoverLabel: "PrimaryDropdown_hover-label__U4fxV",
                "background-hover": "PrimaryDropdown_background-hover__9Xe0R",
                backgroundHover: "PrimaryDropdown_background-hover__9Xe0R",
                wrapper: "PrimaryDropdown_wrapper___usEP",
                "selected-value": "PrimaryDropdown_selected-value__1yH4K",
                selectedValue: "PrimaryDropdown_selected-value__1yH4K",
                listItem: "PrimaryDropdown_listItem__Ju2in",
                button: "PrimaryDropdown_button__ZuiXJ",
                isHighlighted: "PrimaryDropdown_isHighlighted__0NcYl",
                "is-active": "PrimaryDropdown_is-active__4kL0G",
                isActive: "PrimaryDropdown_is-active__4kL0G",
                "size-large": "PrimaryDropdown_size-large__vhDhn",
                sizeLarge: "PrimaryDropdown_size-large__vhDhn",
                hiddenInput: "PrimaryDropdown_hiddenInput__UkFPw",
                customDropdown: "PrimaryDropdown_customDropdown__qzNEL"
            }
        },
        18419: e => {
            e.exports = {
                "asset-list": "AssetList_asset-list__qVlkV",
                assetList: "AssetList_asset-list__qVlkV",
                title: "AssetList_title__eXCvH",
                description: "AssetList_description__Ml6b_",
                "list-item": "AssetList_list-item__fCup_",
                listItem: "AssetList_list-item__fCup_",
                "button-holder": "AssetList_button-holder__wH2iH",
                buttonHolder: "AssetList_button-holder__wH2iH",
                button: "AssetList_button__mqOrr",
                list: "AssetList_list__BJlpO",
                line: "AssetList_line__3gk4l"
            }
        },
        19046: e => {
            e.exports = {
                "services-cta-item": "ServicesCtaItem_services-cta-item__7qgGr",
                servicesCtaItem: "ServicesCtaItem_services-cta-item__7qgGr",
                anchor: "ServicesCtaItem_anchor__2MXHJ",
                line: "ServicesCtaItem_line__b75XW",
                number: "ServicesCtaItem_number__pjlC8",
                "hover-text": "ServicesCtaItem_hover-text__1CzMt",
                hoverText: "ServicesCtaItem_hover-text__1CzMt",
                background: "ServicesCtaItem_background__TTUFY"
            }
        },
        19444: e => {
            e.exports = {
                "solution-card": "SolutionCard_solution-card__ITRGY",
                solutionCard: "SolutionCard_solution-card__ITRGY",
                "image-container": "SolutionCard_image-container__pnz_2",
                imageContainer: "SolutionCard_image-container__pnz_2",
                "text-container": "SolutionCard_text-container__bq2eC",
                textContainer: "SolutionCard_text-container__bq2eC",
                title: "SolutionCard_title__IJLmA",
                "description-holder": "SolutionCard_description-holder__I4AHe",
                descriptionHolder: "SolutionCard_description-holder__I4AHe",
                link: "SolutionCard_link__icXXO",
                "background-hover": "SolutionCard_background-hover__lGSLS",
                backgroundHover: "SolutionCard_background-hover__lGSLS",
                "is-button": "SolutionCard_is-button__9mtXS",
                isButton: "SolutionCard_is-button__9mtXS",
                "title-holder": "SolutionCard_title-holder__FNrtR",
                titleHolder: "SolutionCard_title-holder__FNrtR"
            }
        },
        20945: e => {
            e.exports = {
                "service-page": "ServicePage_service-page___CSgs",
                servicePage: "ServicePage_service-page___CSgs"
            }
        },
        21876: e => {
            e.exports = {
                "page-header": "PageHeader_page-header__XlftE",
                pageHeader: "PageHeader_page-header__XlftE",
                header: "PageHeader_header__qjii_",
                category: "PageHeader_category__zHRz5",
                title: "PageHeader_title__H9WRW",
                "media-holder": "PageHeader_media-holder__nFfB0",
                mediaHolder: "PageHeader_media-holder__nFfB0",
                video: "PageHeader_video__lDm_N",
                "media-wrapper": "PageHeader_media-wrapper__ddSjY",
                mediaWrapper: "PageHeader_media-wrapper__ddSjY",
                description: "PageHeader_description__lJZvg"
            }
        },
        22124: e => {
            e.exports = {
                "featured-news-overview": "FeaturedNewsOverview_featured-news-overview__sfw04",
                featuredNewsOverview: "FeaturedNewsOverview_featured-news-overview__sfw04",
                "news-item": "FeaturedNewsOverview_news-item__js4L5",
                newsItem: "FeaturedNewsOverview_news-item__js4L5",
                "content-frame": "FeaturedNewsOverview_content-frame___896c",
                contentFrame: "FeaturedNewsOverview_content-frame___896c",
                "title-wrapper": "FeaturedNewsOverview_title-wrapper__qlbXO",
                titleWrapper: "FeaturedNewsOverview_title-wrapper__qlbXO",
                title: "FeaturedNewsOverview_title__eiLTI"
            }
        },
        23181: e => {
            e.exports = {
                "cookie-settings": "CookieSettings_cookie-settings__5EtfP",
                cookieSettings: "CookieSettings_cookie-settings__5EtfP",
                button: "CookieSettings_button__zWN49"
            }
        },
        23387: e => {
            e.exports = {
                "superpower-slide": "SuperpowerSlide_superpower-slide__dnrll",
                superpowerSlide: "SuperpowerSlide_superpower-slide__dnrll",
                description: "SuperpowerSlide_description__exBa2",
                "text-content": "SuperpowerSlide_text-content__cz5dd",
                textContent: "SuperpowerSlide_text-content__cz5dd"
            }
        },
        24009: e => {
            e.exports = {
                "play-button": "PlayButton_play-button__ouvPH",
                playButton: "PlayButton_play-button__ouvPH",
                "is-hover": "PlayButton_is-hover__7iQsx",
                isHover: "PlayButton_is-hover__7iQsx",
                "background-hover": "PlayButton_background-hover__bLRUD",
                backgroundHover: "PlayButton_background-hover__bLRUD",
                background: "PlayButton_background__r4CR5"
            }
        },
        24548: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r(89099),
                i = r(14232);

            function a() {
                let e = (0, n.useRouter)(),
                    t = (0, i.useRef)(e);
                t.current = e;
                let [{
                    push: r
                }] = (0, i.useState)({
                    push: e => t.current.push(e)
                });
                return r
            }
        },
        24594: e => {
            e.exports = {
                page: "Page_page__ctpoL"
            }
        },
        24697: e => {
            e.exports = {
                "rich-text": "RichText_rich-text__5Qcqk",
                richText: "RichText_rich-text__5Qcqk",
                link: "RichText_link__Uv1xI",
                paragraph: "RichText_paragraph__k6umM",
                "heading-05": "RichText_heading-05__XzP3B",
                heading05: "RichText_heading-05__XzP3B",
                "heading-01": "RichText_heading-01__6oAg5",
                heading01: "RichText_heading-01__6oAg5",
                "heading-02": "RichText_heading-02__kXg9s",
                heading02: "RichText_heading-02__kXg9s",
                "heading-03": "RichText_heading-03__v2vRZ",
                heading03: "RichText_heading-03__v2vRZ",
                "heading-04": "RichText_heading-04__eiyMg",
                heading04: "RichText_heading-04__eiyMg",
                "label-small": "RichText_label-small__AzsJK",
                labelSmall: "RichText_label-small__AzsJK",
                spacer: "RichText_spacer__lkOAr"
            }
        },
        26403: e => {
            e.exports = {
                "image-slider-draggable": "CaseCarousel_image-slider-draggable__uR_5F",
                imageSliderDraggable: "CaseCarousel_image-slider-draggable__uR_5F",
                titleContainer: "CaseCarousel_titleContainer__i_Z9r",
                title: "CaseCarousel_title__Z_owz",
                "draggable-bounds": "CaseCarousel_draggable-bounds__9_vuz",
                draggableBounds: "CaseCarousel_draggable-bounds__9_vuz",
                slider: "CaseCarousel_slider__3bSDN",
                flexContainer: "CaseCarousel_flexContainer__4jhs2",
                card: "CaseCarousel_card__XzC36",
                buttonsContainer: "CaseCarousel_buttonsContainer__QUQB5",
                arrowButton: "CaseCarousel_arrowButton__SSDVu",
                icon: "CaseCarousel_icon__Qmof5",
                progressContainer: "CaseCarousel_progressContainer__HoPp6",
                progressBar: "CaseCarousel_progressBar__8mGmy",
                gridGutterWidth: "CaseCarousel_gridGutterWidth__FFSa1",
                gapBetweenImages: "CaseCarousel_gapBetweenImages__6x9aW"
            }
        },
        27857: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => S
            });
            var n = r(37876),
                i = r(15039),
                a = r.n(i),
                s = r(14232),
                l = r(34172),
                o = r(94825),
                c = r(71393),
                u = r(24009),
                d = r.n(u),
                _ = r(96941),
                m = r(51607);

            function p(e, {
                elementRef: t
            }) {
                e.fromTo(t.current, {
                    scale: .4
                }, {
                    duration: .5,
                    scale: 1,
                    ease: "Expo.easeOut"
                }, 0), e.add((0, m.m)(t.current), 0)
            }

            function g(e, {
                elementRef: t
            }) {
                e.add((0, m._)(t.current, {
                    duration: .4,
                    ease: "Expo.easeOut"
                })), e.to(t.current, {
                    duration: .4,
                    scale: .4,
                    ease: "Expo.easeOut"
                }, 0)
            }
            var f = r(5402),
                h = r.n(f),
                x = r(39475),
                v = r(15983),
                b = r(61123),
                y = r(50049),
                T = r(30743);
            let I = {
                    amt: {
                        x: .1,
                        y: .1,
                        scale: .2
                    },
                    strength: .3,
                    distanceMultiplier: 1.5,
                    scale: 1.3
                },
                C = {
                    x: {
                        current: 0,
                        previous: 0
                    },
                    y: {
                        current: 0,
                        previous: 0
                    },
                    scale: {
                        current: 1,
                        previous: 1
                    }
                };
            var w = r(84603),
                k = r(17945),
                j = r(48144);

            function S({
                isVisible: e,
                disableTriggerInOnScroll: t = !0,
                triggerInOnce: r = !1,
                type: i = "button",
                isMagnetic: u = !0,
                isPlaying: m = !1,
                ref: f,
                ...N
            }) {
                let R = (0, s.useRef)(void 0),
                    A = f || R,
                    O = (0, s.useRef)(null),
                    P = (0, s.useRef)(null),
                    L = (0, s.useRef)(null),
                    [M, z] = (0, s.useState)(!0),
                    H = (0, k.qJ)(!1),
                    {
                        isHover: B
                    } = function(e, t, r, n = !0) {
                        let {
                            amt: i,
                            strength: a,
                            distanceMultiplier: l,
                            scale: o
                        } = { ...I,
                            ...r
                        }, c = (0, s.useRef)(C), u = (0, T.d)(), d = (0, s.useRef)(void 0), m = (0, s.useRef)(0), p = (0, x.A)(), [g, f] = (0, s.useState)(!1), w = (0, s.useCallback)(() => {
                            let e = u ? .scrollStatusRef.current;
                            return {
                                x: "number" != typeof e ? .offset.x ? 0 : e ? .offset.x,
                                y: "number" != typeof e ? .offset.y ? 0 : e ? .offset.y
                            }
                        }, [u ? .scrollStatusRef.current]), k = (0, s.useCallback)(() => {
                            if (e && n) {
                                let e = w(),
                                    r = t.element.current ? .getBoundingClientRect();
                                d.current = {
                                    width: r ? .width || 0,
                                    height: r ? .height || 0,
                                    top: (r ? .top || 0) + e.y,
                                    left: (r ? .left || 0) + e.x
                                }, m.current = (d ? .current ? .width || 0) * l
                            }
                        }, [m, d, t.element.current, l, w, e, n]), j = (e, t, r) => {
                            _.Ay.to(e, {
                                previous: t,
                                current: t,
                                duration: .4,
                                ease: "Power2.easeOut",
                                onUpdate: () => {
                                    r && r()
                                }
                            })
                        }, S = (0, s.useCallback)(() => {
                            let e = t.element.current,
                                r = t.innerElement ? .current,
                                n = t.scaleElement ? .current,
                                i = c.current;
                            _.Ay.set(e, {
                                x: i.x.previous,
                                y: i.y.previous
                            }), r && _.Ay.set(r, {
                                x: .2 * i.x.previous,
                                y: .2 * i.y.previous
                            }), n && _.Ay.set(n, {
                                scale: i.scale.previous
                            })
                        }, [t.element.current, t.scaleElement ? .current, t.innerElement ? .current, c.current]), N = (0, s.useCallback)(t => {
                            if (n && e) {
                                let e = w(),
                                    r = {
                                        x: t.clientX,
                                        y: t.clientY
                                    },
                                    n = d ? .current ? .left || 0,
                                    s = d ? .current ? .width || 0,
                                    l = d ? .current ? .top || 0,
                                    u = d ? .current ? .height || 0,
                                    _ = (0, y.Io)(r.x + e.x, r.y + e.y, n + s / 2, l + u / 2),
                                    p = 0,
                                    x = 0;
                                _ < m.current ? (g || (c.current.scale.current = o, f(!0)), p = (r.x + e.x - (n + s / 2)) * a, x = (r.y + e.y - (l + u / 2)) * a, c.current.x.current = p, c.current.y.current = x, c.current.x.previous = h()(c.current.x.previous, c.current.x.current, i ? .x), c.current.y.previous = h()(c.current.y.previous, c.current.y.current, i ? .y), c.current.scale.previous = h()(c.current.scale.previous, c.current.scale.current, i ? .scale), S()) : g && (f(!1), j([c.current.scale], 1), j([c.current.x, c.current.y], 0, () => {
                                    S()
                                }))
                            }
                        }, [d, m, g, c, i, a, o, w, n, e, S]);
                        return (0, b.A)("mousemove", N), (0, v.A)(() => {
                            k()
                        }, [k]), (0, v.A)(() => {
                            k()
                        }, [p, k]), (0, v.A)(() => {
                            k()
                        }, [k]), {
                            isHover: g
                        }
                    }(u && H, {
                        element: A,
                        scaleElement: O,
                        innerElement: L
                    }, {
                        strength: .5
                    }, !M),
                    {
                        transitionController: F
                    } = (0, o.mt)({
                        scroll: {
                            disableTriggerInOnScroll: t,
                            trigger: A,
                            vars: {
                                once: r
                            }
                        },
                        setupOptions: () => ({
                            ref: A,
                            refs: {
                                elementRef: A,
                                labelRef: L
                            },
                            onComplete(e) {
                                z("out" === e)
                            },
                            setupTransitionInTimeline: p,
                            setupTransitionOutTimeline: g
                        })
                    });
                (0, l.s)(F, e);
                let E = (0, s.useCallback)(() => {
                        H && function({
                            backgroundHoverRef: e,
                            labelRef: t
                        }) {
                            _.Ay.killTweensOf(e.current), _.Ay.killTweensOf(t.current), _.Ay.to(e.current, .4, {
                                ease: "Power3.easeOut",
                                y: "-75%"
                            }), _.Ay.to(t.current, .4, {
                                ease: "Expo.easeOut",
                                scale: 1
                            })
                        }({
                            backgroundHoverRef: P,
                            labelRef: L
                        })
                    }, [H]),
                    W = (0, s.useCallback)(() => {
                        H && function({
                            backgroundHoverRef: e,
                            labelRef: t
                        }) {
                            _.Ay.killTweensOf(e.current), _.Ay.killTweensOf(t.current), _.Ay.to(e.current, .5, {
                                ease: "Power3.easeOut",
                                startAt: {
                                    y: "75%"
                                },
                                y: "0%"
                            }), _.Ay.to(t.current, .4, {
                                ease: "Expo.easeOut",
                                scale: .8
                            })
                        }({
                            backgroundHoverRef: P,
                            labelRef: L
                        })
                    }, [H]);
                return (0, w.A)(() => {
                    B ? W() : E()
                }, [B, W, E]), (0, c.j)({
                    innerTemplate: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            ref: O,
                            className: a()(d().background, "abs-fill"),
                            children: (0, n.jsx)("div", {
                                ref: P,
                                className: a()(d().backgroundHover)
                            })
                        }), (0, n.jsx)(j.A, {
                            ref: L,
                            size: "medium",
                            isPlaying: m
                        })]
                    }),
                    props: {
                        type: i,
                        "aria-label": "play video",
                        ...N,
                        className: a()(d().playButton, N.className, {
                            [d().isHover]: B
                        }),
                        onMouseEnter: () => {
                            u || W()
                        },
                        onMouseLeave: () => {
                            u || E()
                        }
                    },
                    elementRef: A
                })
            }
        },
        28272: e => {
            e.exports = {
                "story-card": "StoryCard_story-card__wu6hW",
                storyCard: "StoryCard_story-card__wu6hW",
                imageContainer: "StoryCard_imageContainer__wJZvE",
                textContainer: "StoryCard_textContainer__I3ybS",
                title: "StoryCard_title__OohFS",
                imageMask: "StoryCard_imageMask__dfVNW",
                image: "StoryCard_image__c0C9A"
            }
        },
        28539: e => {
            e.exports = {
                officeContactInfo: "OfficeContactInfo_officeContactInfo__jDX1W",
                address: "OfficeContactInfo_address__uRUQD"
            }
        },
        28559: e => {
            e.exports = {
                "table-block": "TableBlock_table-block__dKIbu",
                tableBlock: "TableBlock_table-block__dKIbu",
                link: "TableBlock_link__SrHg1",
                "table-title": "TableBlock_table-title__9yZ5F",
                tableTitle: "TableBlock_table-title__9yZ5F",
                paragraph: "TableBlock_paragraph__rFzYM",
                "heading-05": "TableBlock_heading-05__rb_8B",
                heading05: "TableBlock_heading-05__rb_8B",
                "heading-01": "TableBlock_heading-01__EUFa0",
                heading01: "TableBlock_heading-01__EUFa0",
                "heading-02": "TableBlock_heading-02__3woeD",
                heading02: "TableBlock_heading-02__3woeD",
                "heading-03": "TableBlock_heading-03__5SqhZ",
                heading03: "TableBlock_heading-03__5SqhZ",
                "heading-04": "TableBlock_heading-04__ME7Pe",
                heading04: "TableBlock_heading-04__ME7Pe",
                "label-small": "TableBlock_label-small__6oNuE",
                labelSmall: "TableBlock_label-small__6oNuE",
                spacer: "TableBlock_spacer__12l2d"
            }
        },
        28803: e => {
            e.exports = {
                link: "CaseCard_link__f_OED",
                card: "CaseCard_card__LTQL6",
                fullBleed: "CaseCard_fullBleed__tgGgz",
                imageContainer: "CaseCard_imageContainer__cRfYv",
                projectInfo: "CaseCard_projectInfo__YU7_0",
                textContent: "CaseCard_textContent__9eMHH",
                textContentWrapper: "CaseCard_textContentWrapper__1z7Zz",
                company: "CaseCard_company__zNWIe",
                title: "CaseCard_title__8Nkt6",
                description: "CaseCard_description__3E5Q1",
                descriptionWrapper: "CaseCard_descriptionWrapper__Twg8y",
                growingArrowButton: "CaseCard_growingArrowButton__WaTmv"
            }
        },
        29369: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => a,
                P: () => i
            });
            var n = r(76155);
            let i = (e, t) => !!(e ? .includes(`${n.fB.Cases}/`) && t ? .includes(`${n.fB.Cases}/`)),
                a = (e, t) => !!((e ? .includes(`${n.fB.Location}/`) || e ? .includes(`${n.fB.Locations}`)) && (t ? .includes(`${n.fB.Location}/`) || t ? .includes(`${n.fB.Locations}`)))
        },
        32212: e => {
            e.exports = {
                section: "HeaderRotatingShape_section__FkxAS",
                container: "HeaderRotatingShape_container__1voQz",
                headerRotatingShape: "HeaderRotatingShape_headerRotatingShape__93IMU",
                "top-left-title": "HeaderRotatingShape_top-left-title__mDIbH",
                topLeftTitle: "HeaderRotatingShape_top-left-title__mDIbH",
                "is-multiline": "HeaderRotatingShape_is-multiline__Xo5IF",
                isMultiline: "HeaderRotatingShape_is-multiline__Xo5IF",
                solid: "HeaderRotatingShape_solid__AYoia",
                "bottom-right-title": "HeaderRotatingShape_bottom-right-title__F3znG",
                bottomRightTitle: "HeaderRotatingShape_bottom-right-title__F3znG",
                backgroundIcon: "HeaderRotatingShape_backgroundIcon__sMw_3",
                largeCurve: "HeaderRotatingShape_largeCurve__xPudB",
                backgroundIconMask: "HeaderRotatingShape_backgroundIconMask__UjUgi",
                backgroundIconSpin: "HeaderRotatingShape_backgroundIconSpin__ZSsGa",
                textContainer: "HeaderRotatingShape_textContainer__dpxk7"
            }
        },
        35215: e => {
            e.exports = {
                "description-list": "DescriptionList_description-list__3o46J",
                descriptionList: "DescriptionList_description-list__3o46J",
                title: "DescriptionList_title__cwcMZ"
            }
        },
        36457: e => {
            e.exports = {
                "ticker-text": "TickerText_ticker-text__ccYeU",
                tickerText: "TickerText_ticker-text__ccYeU"
            }
        },
        37343: e => {
            e.exports = {
                "article-preview": "ArticlePreview_article-preview__BH8YW",
                articlePreview: "ArticlePreview_article-preview__BH8YW",
                "text-only": "ArticlePreview_text-only__PHiOZ",
                textOnly: "ArticlePreview_text-only__PHiOZ",
                category: "ArticlePreview_category__lZaSX",
                "article-title": "ArticlePreview_article-title__ZEZVi",
                articleTitle: "ArticlePreview_article-title__ZEZVi",
                "image-holder": "ArticlePreview_image-holder__aiK9c",
                imageHolder: "ArticlePreview_image-holder__aiK9c",
                "image-container": "ArticlePreview_image-container__nM8lb",
                imageContainer: "ArticlePreview_image-container__nM8lb",
                animatedImage: "ArticlePreview_animatedImage__J1ek9",
                video: "ArticlePreview_video__aaL6r",
                fullbleed: "ArticlePreview_fullbleed__0eutE",
                date: "ArticlePreview_date__lE4CJ",
                "date-holder": "ArticlePreview_date-holder__Sa30X",
                dateHolder: "ArticlePreview_date-holder__Sa30X",
                "cta-holder": "ArticlePreview_cta-holder__zMe8l",
                ctaHolder: "ArticlePreview_cta-holder__zMe8l",
                circle: "ArticlePreview_circle__VYUmS",
                cta: "ArticlePreview_cta__2s_hZ"
            }
        },
        37450: e => {
            e.exports = {
                container: "ArticleHeader_container__JORmN",
                "article-header": "ArticleHeader_article-header__CnR0A",
                articleHeader: "ArticleHeader_article-header__CnR0A",
                "news-label": "ArticleHeader_news-label__9X3Hp",
                newsLabel: "ArticleHeader_news-label__9X3Hp",
                title: "ArticleHeader_title__mcahX",
                "publish-date": "ArticleHeader_publish-date__HHZIX",
                publishDate: "ArticleHeader_publish-date__HHZIX",
                headerButton: "ArticleHeader_headerButton__gfkwA",
                shareText: "ArticleHeader_shareText__ZFhyM",
                "share-section": "ArticleHeader_share-section__uLgPJ",
                shareSection: "ArticleHeader_share-section__uLgPJ",
                "copy-section": "ArticleHeader_copy-section__G_zHp",
                copySection: "ArticleHeader_copy-section__G_zHp",
                "link-copied": "ArticleHeader_link-copied__Y5Cew",
                linkCopied: "ArticleHeader_link-copied__Y5Cew",
                "video-holder": "ArticleHeader_video-holder__On4Al",
                videoHolder: "ArticleHeader_video-holder__On4Al",
                "image-holder": "ArticleHeader_image-holder__6mE5j",
                imageHolder: "ArticleHeader_image-holder__6mE5j",
                animatedImage: "ArticleHeader_animatedImage__NjAWM",
                video: "ArticleHeader_video__ppb3M",
                "title-image": "ArticleHeader_title-image__Zg5O2",
                titleImage: "ArticleHeader_title-image__Zg5O2",
                noGifWarning: "ArticleHeader_noGifWarning__j7H1R"
            }
        },
        37883: e => {
            e.exports = {
                image: "CardImage_image__wP05k"
            }
        },
        40138: e => {
            e.exports = {
                accordion: "Accordion_accordion__SrwSn"
            }
        },
        42435: e => {
            e.exports = {
                "horizontal-creativity": "HorizontalCreativitySingleImage_horizontal-creativity__seopN",
                horizontalCreativity: "HorizontalCreativitySingleImage_horizontal-creativity__seopN",
                "pin-wrapper": "HorizontalCreativitySingleImage_pin-wrapper__kGQIf",
                pinWrapper: "HorizontalCreativitySingleImage_pin-wrapper__kGQIf",
                "content-frame": "HorizontalCreativitySingleImage_content-frame__1J_EO",
                contentFrame: "HorizontalCreativitySingleImage_content-frame__1J_EO",
                container: "HorizontalCreativitySingleImage_container__y_1xH",
                "title-wrapper": "HorizontalCreativitySingleImage_title-wrapper__x1XpR",
                titleWrapper: "HorizontalCreativitySingleImage_title-wrapper__x1XpR",
                "shape-inner": "HorizontalCreativitySingleImage_shape-inner__ici9J",
                shapeInner: "HorizontalCreativitySingleImage_shape-inner__ici9J",
                line2: "HorizontalCreativitySingleImage_line2__PRw9Q",
                line1: "HorizontalCreativitySingleImage_line1__RWLt3",
                title: "HorizontalCreativitySingleImage_title__oSk9r",
                "image-holder": "HorizontalCreativitySingleImage_image-holder__klfv7",
                imageHolder: "HorizontalCreativitySingleImage_image-holder__klfv7",
                shape: "HorizontalCreativitySingleImage_shape__MnT1G"
            }
        },
        42820: e => {
            e.exports = {
                services: "Services_services__zb2Ht",
                "images-container": "Services_images-container__CMJf_",
                imagesContainer: "Services_images-container__CMJf_",
                "image-container": "Services_image-container__wO_5A",
                imageContainer: "Services_image-container__wO_5A",
                image: "Services_image__wnAMj",
                symbol: "Services_symbol__C2AuH",
                "services-container": "Services_services-container__Y0jsH",
                servicesContainer: "Services_services-container__Y0jsH",
                service: "Services_service__Mc5CR",
                blackBackground: "Services_blackBackground__OtOiA"
            }
        },
        42875: e => {
            e.exports = {
                "ticker-text-item": "TickerTextItem_ticker-text-item__sceQK",
                tickerTextItem: "TickerTextItem_ticker-text-item__sceQK",
                "icon-holder": "TickerTextItem_icon-holder__wHJ2_",
                iconHolder: "TickerTextItem_icon-holder__wHJ2_"
            }
        },
        43612: e => {
            e.exports = {
                "image-grid-fluid": "ImageGridFluid_image-grid-fluid__7iUBL",
                imageGridFluid: "ImageGridFluid_image-grid-fluid__7iUBL",
                item: "ImageGridFluid_item__txzEW"
            }
        },
        43785: e => {
            e.exports = {
                "primary-pagination": "PrimaryPagination_primary-pagination__CX_78",
                primaryPagination: "PrimaryPagination_primary-pagination__CX_78",
                "is-hidden": "PrimaryPagination_is-hidden__VupYJ",
                isHidden: "PrimaryPagination_is-hidden__VupYJ",
                list: "PrimaryPagination_list__OCHZa",
                "list-item": "PrimaryPagination_list-item__5JCl5",
                listItem: "PrimaryPagination_list-item__5JCl5",
                button: "PrimaryPagination_button__7REls"
            }
        },
        45069: e => {
            e.exports = {
                "latest-news": "LatestNews_latest-news__K5xy5",
                latestNews: "LatestNews_latest-news__K5xy5",
                title: "LatestNews_title__i9SgF",
                item: "LatestNews_item__mrV2F",
                fullbleed: "LatestNews_fullbleed__kjqpA",
                "previews-container": "LatestNews_previews-container__NEO2S",
                previewsContainer: "LatestNews_previews-container__NEO2S"
            }
        },
        46099: e => {
            e.exports = {
                description: "ModernCreativityInfoItem_description__ObiYK",
                button: "ModernCreativityInfoItem_button__9nKu4",
                category: "ModernCreativityInfoItem_category__Dd0z8"
            }
        },
        46264: e => {
            e.exports = {
                "grid-list-item": "GridListItem_grid-list-item__Mg9mK",
                gridListItem: "GridListItem_grid-list-item__Mg9mK",
                line: "GridListItem_line__0_c_d"
            }
        },
        46717: e => {
            e.exports = {
                "person-overview": "PersonOverview_person-overview__n0KoI",
                personOverview: "PersonOverview_person-overview__n0KoI",
                backToContainer: "PersonOverview_backToContainer__qpKD_"
            }
        },
        46786: e => {
            e.exports = {
                emails: "Emails_emails__owWpV",
                title: "Emails_title__yMKqg",
                "email-container": "Emails_email-container__RrWlO",
                emailContainer: "Emails_email-container__RrWlO"
            }
        },
        48523: e => {
            e.exports = {
                "input-field": "InputField_input-field__9bWuD",
                inputField: "InputField_input-field__9bWuD",
                "input-container": "InputField_input-container__qkGQ1",
                inputContainer: "InputField_input-container__qkGQ1",
                suggestion: "InputField_suggestion__4NUc5",
                label: "InputField_label__4Ak4_",
                input: "InputField_input__wJp_q",
                placeholder: "InputField_placeholder__LKqsZ",
                autocompleteMenu: "InputField_autocompleteMenu__C4GuS",
                "is-invalid": "InputField_is-invalid__LP8_h",
                isInvalid: "InputField_is-invalid__LP8_h",
                "error-container": "InputField_error-container____D1G",
                errorContainer: "InputField_error-container____D1G",
                "error-message": "InputField_error-message__8q3H0",
                errorMessage: "InputField_error-message__8q3H0",
                icon: "InputField_icon__gOtO2",
                hidden: "InputField_hidden__GQans"
            }
        },
        48555: e => {
            e.exports = {
                "logo-intro-section": "LogoIntroSection_logo-intro-section__R8UMh",
                logoIntroSection: "LogoIntroSection_logo-intro-section__R8UMh",
                "logo-holder": "LogoIntroSection_logo-holder__CfGVO",
                logoHolder: "LogoIntroSection_logo-holder__CfGVO",
                logo: "LogoIntroSection_logo__P_Gyq",
                "text-holder": "LogoIntroSection_text-holder__rN_t_",
                textHolder: "LogoIntroSection_text-holder__rN_t_",
                "logo-text": "LogoIntroSection_logo-text__A3FeW",
                logoText: "LogoIntroSection_logo-text__A3FeW",
                "kanji-text": "LogoIntroSection_kanji-text__zUO_N",
                kanjiText: "LogoIntroSection_kanji-text__zUO_N"
            }
        },
        49581: e => {
            e.exports = {
                "circle-button": "CircleButton_circle-button__8pMOG",
                circleButton: "CircleButton_circle-button__8pMOG",
                "text-holder": "CircleButton_text-holder__tJUM6",
                textHolder: "CircleButton_text-holder__tJUM6",
                label: "CircleButton_label__SZtEN",
                "hover-label": "CircleButton_hover-label__pgr7T",
                hoverLabel: "CircleButton_hover-label__pgr7T",
                "background-hover": "CircleButton_background-hover__ULas_",
                backgroundHover: "CircleButton_background-hover__ULas_",
                "has-outline": "CircleButton_has-outline__aMw7U",
                hasOutline: "CircleButton_has-outline__aMw7U",
                "is-selected": "CircleButton_is-selected__2EnA8",
                isSelected: "CircleButton_is-selected__2EnA8",
                icon: "CircleButton_icon__icjV7",
                "revert-color": "CircleButton_revert-color__2hxmA",
                revertColor: "CircleButton_revert-color__2hxmA"
            }
        },
        49984: e => {
            e.exports = {
                "born-and-raised": "BornAndRaised_born-and-raised__SNKD7",
                bornAndRaised: "BornAndRaised_born-and-raised__SNKD7",
                "content-frame": "BornAndRaised_content-frame__oxejp",
                contentFrame: "BornAndRaised_content-frame__oxejp",
                "text-slide": "BornAndRaised_text-slide__mDvh9",
                textSlide: "BornAndRaised_text-slide__mDvh9",
                circle: "BornAndRaised_circle__JyssH",
                "lottie-icon": "BornAndRaised_lottie-icon__bullM",
                lottieIcon: "BornAndRaised_lottie-icon__bullM",
                "circle-2": "BornAndRaised_circle-2__8axLS",
                circle2: "BornAndRaised_circle-2__8axLS"
            }
        },
        50049: (e, t, r) => {
            "use strict";
            r.d(t, {
                Io: () => n,
                a6: () => s,
                a7: () => i,
                ix: () => a
            });
            let n = (e, t, r, n) => Math.hypot(e - r, t - n);

            function i(e, t, r, n, i) {
                return (1 - e) * (1 - e) * (1 - e) * t + 3 * (1 - e) * (1 - e) * e * r + 3 * (1 - e) * e * e * n + e * e * e * i
            }

            function a(e, t, r, n, i) {
                return n + (i - n) * (e - t) / (r - t)
            }

            function s(e, t, r, n, i) {
                let a = (e - t) / (r - t);
                return n + a * a * (i - n)
            }
        },
        50072: e => {
            e.exports = {
                "intro-column-text": "IntroColumnText_intro-column-text___5CGM",
                introColumnText: "IntroColumnText_intro-column-text___5CGM",
                content: "IntroColumnText_content__tJyAX",
                description: "IntroColumnText_description__vjT_g",
                "button-holder": "IntroColumnText_button-holder__A_4uy",
                buttonHolder: "IntroColumnText_button-holder__A_4uy",
                button: "IntroColumnText_button__dnGdE",
                "title-holder": "IntroColumnText_title-holder__b3Shf",
                titleHolder: "IntroColumnText_title-holder__b3Shf"
            }
        },
        50179: () => {},
        51251: e => {
            e.exports = {
                "header-intro": "HeaderIntro_header-intro__w1Kf2",
                headerIntro: "HeaderIntro_header-intro__w1Kf2",
                header: "HeaderIntro_header__uEtzt",
                "webgl-container": "HeaderIntro_webgl-container__Z2Nqz",
                webglContainer: "HeaderIntro_webgl-container__Z2Nqz",
                content: "HeaderIntro_content__93yas",
                "inner-content": "HeaderIntro_inner-content__ycLHM",
                innerContent: "HeaderIntro_inner-content__ycLHM"
            }
        },
        51897: e => {
            e.exports = {
                "service-powers": "ServicePowers_service-powers__hPbnF",
                servicePowers: "ServicePowers_service-powers__hPbnF",
                "webgl-container": "ServicePowers_webgl-container__2BSQE",
                webglContainer: "ServicePowers_webgl-container__2BSQE",
                "slide-holder": "ServicePowers_slide-holder____XAw",
                slideHolder: "ServicePowers_slide-holder____XAw",
                slide: "ServicePowers_slide__mFHQY",
                "slide-background-holder": "ServicePowers_slide-background-holder__78Xel",
                slideBackgroundHolder: "ServicePowers_slide-background-holder__78Xel",
                "background-slide": "ServicePowers_background-slide__1Oiwp",
                backgroundSlide: "ServicePowers_background-slide__1Oiwp"
            }
        },
        56445: e => {
            e.exports = {
                "icon-button": "IconButton_icon-button__hSDQo",
                iconButton: "IconButton_icon-button__hSDQo",
                icon: "IconButton_icon__Av0O8",
                hoverIcon: "IconButton_hoverIcon__RUBXa"
            }
        },
        56618: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: () => j,
                default: () => N,
                getStoryParams: () => S
            });
            var n = r(37876),
                i = r(96941),
                a = r(14232),
                s = r(15039),
                l = r.n(s),
                o = r(98591),
                c = r(79510),
                u = r(1680),
                d = r(76155),
                _ = r(29369),
                m = r(78140),
                p = r(51607);

            function g(e, {
                skipWipeIn: t,
                scrollWrapperRef: r,
                hasFadeTransition: n
            }) {
                n() && r.current ? e.add((0, p.m)(r.current, {
                    duration: .2
                })) : !t && r ? .current && e.fromTo(r.current, {
                    y: 300
                }, {
                    duration: .5,
                    y: 0,
                    ease: "Quad.easeIn"
                }, 0)
            }

            function f(e, {
                elementRef: t,
                skipWipeOut: r,
                hasFadeTransition: n
            }) {
                n() && t ? .current ? e.add((0, p._)(t.current, {
                    duration: .2
                })) : !r() && t ? .current ? (e.to(t.current, {
                    duration: .5,
                    y: -300,
                    ease: "Quad.easeOut"
                }, 0), e.add(() => {}, "+=0.1")) : e.to(t.current, {
                    opacity: 1,
                    duration: .001
                })
            }
            var h = r(61791),
                x = r(7932),
                v = r(15983),
                b = r(30743),
                y = r(5254);
            let T = function(e, t, r) {
                let {
                    setDarkTheme: n,
                    setAccentThemeColor: s,
                    themeWrapperRef: l,
                    accentThemeColor: o,
                    primaryThemeColor: c,
                    blocks: u,
                    forceRefresh: d
                } = (0, x.u2)(), _ = (0, a.useRef)([]), m = (0, a.useRef)([]), p = (0, b.d)(), g = (0, a.useRef)(i.Ay.quickSetter(l.current, "--background-color")), f = (0, a.useRef)(i.Ay.quickSetter(l.current, "--foreground-color"));
                (0, v.A)(() => {
                    n("boolean" != typeof e || e), s(t && r ? {
                        background: r,
                        foreground: t
                    } : void 0)
                }, [n, s]), (0, a.useEffect)(() => {
                    let e;
                    Array.from(u).forEach(t => {
                        let r = t.accentColor ? ? o.current,
                            n = t.useAccent ? r : c.current;
                        e || (e = c.current), (e ? .foreground !== n ? .foreground || e ? .background !== n ? .background) && m.current.push({
                            previousTheme: e,
                            theme: n,
                            ref: t.ref
                        }), e = n
                    }), i.Ay.set(l.current, {
                        "--background-color": c ? .current ? .background,
                        "--foreground-color": c ? .current ? .foreground
                    }), m.current.forEach(e => {
                        let t = e.previousTheme || e.theme,
                            r = {
                                background: t ? .background,
                                foreground: t ? .foreground
                            },
                            n = {
                                background: t ? .background,
                                foreground: t ? .foreground
                            };
                        _.current.push(i.Ay.fromTo(r, { ...t
                        }, { ...e.theme,
                            ease: "Power2.easeOut",
                            repeatRefresh: !0,
                            scrollTrigger: { ...(0, y.Ve)({
                                    trigger: e.ref.current,
                                    scrub: !0,
                                    start: "top 60%",
                                    end: "top 20%",
                                    scroller: p ? .hasSmoothScroll ? .current ? p ? .scrollWrapperRef ? .current : void 0
                                }),
                                onUpdate() {
                                    r ? .background !== n.background && (g.current(r ? .background), n.background = r.background), r ? .foreground !== n ? .foreground && (f.current(r ? .foreground), n.foreground = r.foreground)
                                }
                            }
                        }))
                    })
                }, [u, o, c, m, l, p.scrollWrapperRef, p ? .hasSmoothScroll, d]), (0, h.A)(() => {
                    _ ? .current.forEach(e => {
                        e ? .kill()
                    }), _.current = []
                })
            };
            var I = r(79840),
                C = r(66910),
                w = r(89099),
                k = r(17945),
                j = !0;
            let S = e => {
                    let t = {
                        resolve_relations: "case_card.case,featured_news_item.news,case.locations,case_listing.locations_filter,locations_blok.quick_links"
                    };
                    switch (e) {
                        case "asset-list":
                            t.resolve_relations = "case_card.case,featured_news_item.news";
                            break;
                        case d.fB.People:
                            t.resolve_links = "url"
                    }
                    return t
                },
                N = ({
                    nextStory: e,
                    recentNews: t,
                    allCases: r,
                    ...s
                }) => {
                    let d = (0, a.useRef)(null),
                        {
                            flowHijacked: p
                        } = (0, C.e)(),
                        h = (0, o.E)(s.story, s.preview, s.locale),
                        v = (0, w.useRouter)(),
                        y = (0, m.o)(),
                        [j, S] = (0, a.useState)(!1),
                        N = (0, a.useCallback)(() => (0, _.P)(y.toPath, y.fromPath), [y.fromPath, y.toPath]),
                        R = (0, a.useCallback)(() => (0, _.I)(y.toPath, y.fromPath), [y.fromPath, y.toPath]),
                        A = (0, a.useRef)(void 0),
                        {
                            scrollWrapperRef: O,
                            unLock: P,
                            scrollTo: L,
                            lock: M,
                            scrollStatusRef: z
                        } = (0, b.d)(),
                        H = h ? .content ? .modules ? .find(e => "featured_news_overview" === e.component);
                    H && H ? .news_items ? .length > 0 && y.setFeaturedNews(H ? .news_items), y.setRecentNewsData(t), y.setNextStoryData(e), r && y.setAllCases(r);
                    let {
                        setForceRefresh: B,
                        setPrimaryThemeColor: F
                    } = (0, x.u2)();
                    F(h ? .content ? .main_color_background ? .color, h ? .content ? .main_color_foreground ? .color), T(h ? .content ? .is_dark_theme, h ? .content ? .accent_color_foreground ? .color, h ? .content ? .accent_color_background ? .color);
                    let E = (0, a.useCallback)(e => {
                        k.xl || (document.body.style.maxHeight = e ? "100vh" : "unset", document.body.style.overflow = e ? "hidden" : "auto")
                    }, []);
                    return (0, c.w)({
                        beforeTransitionOut(e) {
                            y.setMenuOpenState(!1), S(!1), N() || R() || y.coverPageWipeEffect(!0), L(0, (z ? .current ? .offset ? .y || 0) - 1, 0), e()
                        },
                        onDispose() {
                            A ? .current ? .kill()
                        },
                        beforeTransitionIn: async e => {
                            E(!0), L(0, 0, 0), M(), y.fromPath || (A.current = i.Ay.delayedCall(.5, () => (0, I.l)()), await A.current), y.showPageWipeEffect && await i.Ay.delayedCall(.4, () => y.coverPageWipeEffect(!1)), e(), i.Ay.delayedCall(.1 * !k.xl, async () => {
                                await p.current, S(!0), P(), E(!1), L(0, 0, 0);
                                let e = v.asPath.split("#")[1];
                                if (e) {
                                    let t = document.querySelector(`[data-scroll-to=${e}]`);
                                    t && L(0, t.getBoundingClientRect().top, 2e3)
                                }
                            })
                        },
                        crossFlow: () => N(),
                        setupOptions: () => ({
                            ref: d,
                            refs: {
                                elementRef: d,
                                scrollWrapperRef: O,
                                skipWipeIn: N() || R(),
                                skipWipeOut: () => N() || R(),
                                hasFadeTransition: () => R()
                            },
                            setupTransitionInTimeline: g,
                            setupTransitionOutTimeline: f
                        })
                    }), (0, a.useEffect)(() => {
                        let e = document.querySelector("#__NEXT_DATA__");
                        if (!e) return;
                        let t = JSON.parse(e.innerHTML);
                        t ? .props ? .pageProps ? .story ? .content ? .seo_title && t ? .props ? .globalSettings ? .seo_title && delete t.props.globalSettings.seo_title, t ? .props ? .pageProps ? .story ? .content ? .seo_description && t ? .props ? .globalSettings ? .seo_description && delete t.props.globalSettings.seo_description, e.innerHTML = JSON.stringify(t), B(e => e + 1)
                    }, [B]), (0, n.jsx)("div", {
                        ref: d,
                        className: l()(s.className),
                        children: (0, n.jsx)(u.A, {
                            blok: { ...h.content,
                                published_at: h.published_at,
                                tag_list: h.tag_list
                            },
                            canTransitionIn: j
                        })
                    })
                }
        },
        57731: e => {
            e.exports = {
                "image-block": "ImageBlock_image-block__d7g8t",
                imageBlock: "ImageBlock_image-block__d7g8t",
                "no-margins": "ImageBlock_no-margins__mKOcx",
                noMargins: "ImageBlock_no-margins__mKOcx"
            }
        },
        58021: e => {
            e.exports = {
                "services-cta": "ServicesCta_services-cta__4e_KJ",
                servicesCta: "ServicesCta_services-cta__4e_KJ",
                description: "ServicesCta_description__BNvIx",
                button: "ServicesCta_button__r_fya",
                title: "ServicesCta_title__IV3bt",
                line: "ServicesCta_line__WqxBe",
                "has-no-copy": "ServicesCta_has-no-copy__9vBgj",
                hasNoCopy: "ServicesCta_has-no-copy__9vBgj",
                accordion: "ServicesCta_accordion__OYLSV"
            }
        },
        58291: e => {
            e.exports = {
                "auto-accordion": "AutoAccordion_auto-accordion__D7MhF",
                autoAccordion: "AutoAccordion_auto-accordion__D7MhF",
                wrapper: "AutoAccordion_wrapper__s8PR9",
                title: "AutoAccordion_title__uklgT",
                list: "AutoAccordion_list__crS8g",
                item: "AutoAccordion_item__v_NCH",
                header: "AutoAccordion_header__IdfuG",
                index: "AutoAccordion_index__RvWh7",
                "item-title": "AutoAccordion_item-title__qeO9p",
                itemTitle: "AutoAccordion_item-title__qeO9p",
                content: "AutoAccordion_content__shn6c",
                description: "AutoAccordion_description__crFxH",
                open: "AutoAccordion_open__c43_n"
            }
        },
        59848: e => {
            e.exports = {
                "modern-creativity-info": "ModernCreativityInfo_modern-creativity-info__uAwgB",
                modernCreativityInfo: "ModernCreativityInfo_modern-creativity-info__uAwgB",
                "animation-holder": "ModernCreativityInfo_animation-holder__Hhzkr",
                animationHolder: "ModernCreativityInfo_animation-holder__Hhzkr",
                content: "ModernCreativityInfo_content__X_eFt",
                animation: "ModernCreativityInfo_animation__zzir3",
                container: "ModernCreativityInfo_container__Psicv",
                item: "ModernCreativityInfo_item__GoNPb"
            }
        },
        60182: e => {
            e.exports = {
                "image-slider-draggable": "ImageSliderDraggable_image-slider-draggable__GDnEh",
                imageSliderDraggable: "ImageSliderDraggable_image-slider-draggable__GDnEh",
                title: "ImageSliderDraggable_title__iINau",
                "draggable-bounds": "ImageSliderDraggable_draggable-bounds__gR1hJ",
                draggableBounds: "ImageSliderDraggable_draggable-bounds__gR1hJ",
                slider: "ImageSliderDraggable_slider__OE7FC",
                flexContainer: "ImageSliderDraggable_flexContainer__24W3S",
                buttonsContainer: "ImageSliderDraggable_buttonsContainer__1sOnX",
                lightTheme: "ImageSliderDraggable_lightTheme__EXhw0",
                button: "ImageSliderDraggable_button__P_rJi",
                darkTheme: "ImageSliderDraggable_darkTheme__2hvJU",
                progressContainer: "ImageSliderDraggable_progressContainer__y0VeI",
                progressBar: "ImageSliderDraggable_progressBar__XCc14",
                gridGutterWidth: "ImageSliderDraggable_gridGutterWidth__1a_Mw",
                gapBetweenImages: "ImageSliderDraggable_gapBetweenImages__A5iO3",
                imageContainer: "ImageSliderDraggable_imageContainer__cN6FP",
                threeColumn: "ImageSliderDraggable_threeColumn__AwvQN",
                fourColumn: "ImageSliderDraggable_fourColumn__Jtcvp"
            }
        },
        60731: e => {
            e.exports = {
                "work-filter-visuals": "WorkFilterVisuals_work-filter-visuals__LuECN",
                workFilterVisuals: "WorkFilterVisuals_work-filter-visuals__LuECN",
                item: "WorkFilterVisuals_item__sKRu6",
                container: "WorkFilterVisuals_container__raUvA"
            }
        },
        61793: e => {
            e.exports = {
                "case-listing": "CaseListing_case-listing__44Vjv",
                caseListing: "CaseListing_case-listing__44Vjv",
                title: "CaseListing_title__ZitW_",
                "card-item": "CaseListing_card-item__v6wO3",
                cardItem: "CaseListing_card-item__v6wO3",
                "full-bleed": "CaseListing_full-bleed__CUJjL",
                fullBleed: "CaseListing_full-bleed__CUJjL",
                "list-container": "CaseListing_list-container__1e_Sr",
                listContainer: "CaseListing_list-container__1e_Sr",
                "show-more-wrapper": "CaseListing_show-more-wrapper___zrTx",
                showMoreWrapper: "CaseListing_show-more-wrapper___zrTx",
                filters: "CaseListing_filters__okKTl",
                "filter-spacing-wrapper": "CaseListing_filter-spacing-wrapper__4T_DE",
                filterSpacingWrapper: "CaseListing_filter-spacing-wrapper__4T_DE",
                "filter-spacing": "CaseListing_filter-spacing__xOzjF",
                filterSpacing: "CaseListing_filter-spacing__xOzjF",
                "category-filter": "CaseListing_category-filter__Xd3V2",
                categoryFilter: "CaseListing_category-filter__Xd3V2",
                "location-filter": "CaseListing_location-filter__NlBBk",
                locationFilter: "CaseListing_location-filter__NlBBk"
            }
        },
        64621: e => {
            e.exports = {
                "image-text": "ImageText_image-text__oPg4G",
                imageText: "ImageText_image-text__oPg4G",
                richText: "ImageText_richText__Fk0IR",
                imageContainer: "ImageText_imageContainer__yZQHa",
                textContent: "ImageText_textContent__SbnvS",
                large: "ImageText_large__lSR_j",
                right: "ImageText_right__LS7pP"
            }
        },
        65253: e => {
            e.exports = {
                "header-standard": "HeaderStandard_header-standard__WPLZQ",
                headerStandard: "HeaderStandard_header-standard__WPLZQ",
                video: "HeaderStandard_video__SBJpW",
                title: "HeaderStandard_title__6bUbd",
                description: "HeaderStandard_description__flk59",
                button: "HeaderStandard_button__2UIeG",
                "media-holder": "HeaderStandard_media-holder__YFLX5",
                mediaHolder: "HeaderStandard_media-holder__YFLX5",
                "no-full-height": "HeaderStandard_no-full-height__AIrgx",
                noFullHeight: "HeaderStandard_no-full-height__AIrgx"
            }
        },
        65309: e => {
            e.exports = {
                "news-overview": "NewsOverview_news-overview__Z7yII",
                newsOverview: "NewsOverview_news-overview__Z7yII",
                filters: "NewsOverview_filters__QrehM",
                filter: "NewsOverview_filter__J6bp_",
                line: "NewsOverview_line__8mSBB",
                "top-line": "NewsOverview_top-line__lyXyq",
                topLine: "NewsOverview_top-line__lyXyq",
                grid: "NewsOverview_grid__MEP8u",
                "news-item": "NewsOverview_news-item__E1aI0",
                newsItem: "NewsOverview_news-item__E1aI0",
                "filter-container": "NewsOverview_filter-container__puajA",
                filterContainer: "NewsOverview_filter-container__puajA"
            }
        },
        66056: e => {
            e.exports = {
                button: "GrowingArrowButton_button__O_wb_",
                animatedButton: "GrowingArrowButton_animatedButton__qo2v5",
                buttonText: "GrowingArrowButton_buttonText__eM45V",
                icon: "GrowingArrowButton_icon__rJDxu"
            }
        },
        66087: e => {
            e.exports = {
                "story-cards": "StoryCards_story-cards__fFZTU",
                storyCards: "StoryCards_story-cards__fFZTU",
                "draggable-bounds": "StoryCards_draggable-bounds__xCVb1",
                draggableBounds: "StoryCards_draggable-bounds__xCVb1",
                slider: "StoryCards_slider__Gm1Mz",
                flexContainer: "StoryCards_flexContainer___IXeL",
                buttonsContainer: "StoryCards_buttonsContainer__ARjrm",
                arrowButton: "StoryCards_arrowButton__nD5J3",
                icon: "StoryCards_icon__LT1TP",
                gridGutterWidth: "StoryCards_gridGutterWidth__E840r",
                gapBetweenImages: "StoryCards_gapBetweenImages__vDDaO",
                card: "StoryCards_card__9YL0t"
            }
        },
        66670: e => {
            e.exports = {
                "image-slider-item": "ImageSliderItem_image-slider-item__xkFrX",
                imageSliderItem: "ImageSliderItem_image-slider-item__xkFrX",
                "parent-figure": "ImageSliderItem_parent-figure__00G70",
                parentFigure: "ImageSliderItem_parent-figure__00G70",
                caption: "ImageSliderItem_caption__t6vu_",
                "image-holder": "ImageSliderItem_image-holder__XfDmN",
                imageHolder: "ImageSliderItem_image-holder__XfDmN",
                "image-container": "ImageSliderItem_image-container__LUZ1F",
                imageContainer: "ImageSliderItem_image-container__LUZ1F",
                image: "ImageSliderItem_image__oL_At",
                jobTitle: "ImageSliderItem_jobTitle__Z_W6U",
                label: "ImageSliderItem_label__PGmlX",
                button: "ImageSliderItem_button__Wr0XE",
                description: "ImageSliderItem_description__Wqnkp",
                link: "ImageSliderItem_link__SVCX8",
                pointer: "ImageSliderItem_pointer__m5kjH",
                animatedImage: "ImageSliderItem_animatedImage__X4C_b"
            }
        },
        67632: e => {
            e.exports = {
                "case-header": "CaseHeader_case-header__7MfFt",
                caseHeader: "CaseHeader_case-header__7MfFt",
                header: "CaseHeader_header__iknrf",
                "client-title": "CaseHeader_client-title__UWX87",
                clientTitle: "CaseHeader_client-title__UWX87",
                title: "CaseHeader_title__vhFMK",
                "media-holder": "CaseHeader_media-holder__PgoaS",
                mediaHolder: "CaseHeader_media-holder__PgoaS",
                "tag-list": "CaseHeader_tag-list__wZnIf",
                tagList: "CaseHeader_tag-list__wZnIf",
                "tag-list-item": "CaseHeader_tag-list-item__Esye0",
                tagListItem: "CaseHeader_tag-list-item__Esye0",
                citiesNavigation: "CaseHeader_citiesNavigation__1Z2Xf",
                video: "CaseHeader_video__qxb29",
                "media-wrapper": "CaseHeader_media-wrapper__vgQSN",
                mediaWrapper: "CaseHeader_media-wrapper__vgQSN"
            }
        },
        67982: e => {
            e.exports = {
                quote: "Quote_quote__DI9aM",
                "with-quotation-marks": "Quote_with-quotation-marks__POQ_s",
                withQuotationMarks: "Quote_with-quotation-marks__POQ_s"
            }
        },
        67999: e => {
            e.exports = {
                "horizontal-creativity": "HorizontalCreativity_horizontal-creativity__TsVvR",
                horizontalCreativity: "HorizontalCreativity_horizontal-creativity__TsVvR",
                "pin-wrapper": "HorizontalCreativity_pin-wrapper__zygld",
                pinWrapper: "HorizontalCreativity_pin-wrapper__zygld",
                "content-frame": "HorizontalCreativity_content-frame__MaoWU",
                contentFrame: "HorizontalCreativity_content-frame__MaoWU",
                container: "HorizontalCreativity_container__6x4zK",
                "title-wrapper": "HorizontalCreativity_title-wrapper__xQinY",
                titleWrapper: "HorizontalCreativity_title-wrapper__xQinY",
                title: "HorizontalCreativity_title__xY1_1",
                svg: "HorizontalCreativity_svg__He9ab",
                "image-holder": "HorizontalCreativity_image-holder___Ydhu",
                imageHolder: "HorizontalCreativity_image-holder___Ydhu",
                "shape-inner": "HorizontalCreativity_shape-inner__g5OB_",
                shapeInner: "HorizontalCreativity_shape-inner__g5OB_",
                shape: "HorizontalCreativity_shape__5UD_b",
                description: "HorizontalCreativity_description__pdWrg"
            }
        },
        68655: e => {
            e.exports = {
                "email-form": "EmailForm_email-form__0NoRY",
                emailForm: "EmailForm_email-form__0NoRY",
                lightTheme: "EmailForm_lightTheme__xTSVk",
                darkTheme: "EmailForm_darkTheme__WBI41",
                description: "EmailForm_description__l90XI",
                header: "EmailForm_header__XM8r4",
                form: "EmailForm_form__Dzzh_",
                center: "EmailForm_center__uKECz",
                fieldset: "EmailForm_fieldset__meWdm",
                inputContainer: "EmailForm_inputContainer__e0lyw",
                "input-field": "EmailForm_input-field__iQbsL",
                inputField: "EmailForm_input-field__iQbsL",
                disclaimer: "EmailForm_disclaimer__07wzM",
                "submit-holder": "EmailForm_submit-holder__1HILX",
                submitHolder: "EmailForm_submit-holder__1HILX",
                checkboxContainer: "EmailForm_checkboxContainer__0wBhE",
                "error-container": "EmailForm_error-container__oqrJW",
                errorContainer: "EmailForm_error-container__oqrJW",
                "error-message": "EmailForm_error-message__TWFdG",
                errorMessage: "EmailForm_error-message__TWFdG",
                icon: "EmailForm_icon__0IgZB"
            }
        },
        69215: e => {
            e.exports = {
                "image-grid5": "ImageGrid5_image-grid5__7Ac1T",
                imageGrid5: "ImageGrid5_image-grid5__7Ac1T",
                imageItem: "ImageGrid5_imageItem__BGmQO",
                image: "ImageGrid5_image__1Q7eM"
            }
        },
        71519: e => {
            e.exports = {
                "location-search-bar": "LocationSearchBar_location-search-bar__Ns9zN",
                locationSearchBar: "LocationSearchBar_location-search-bar__Ns9zN",
                label: "LocationSearchBar_label__Go9mH",
                searchContainer: "LocationSearchBar_searchContainer__PuGJL",
                searchBoxContainer: "LocationSearchBar_searchBoxContainer__1gtW_",
                searchBox: "LocationSearchBar_searchBox__IyMYG",
                resultsContainer: "LocationSearchBar_resultsContainer__OjFpw",
                empty: "LocationSearchBar_empty__L8PyG",
                quickLinksLabel: "LocationSearchBar_quickLinksLabel__Qpi7T",
                results: "LocationSearchBar_results__RymGW",
                result: "LocationSearchBar_result__qptuk",
                quickLink: "LocationSearchBar_quickLink__6hsK_",
                focused: "LocationSearchBar_focused__xMcME",
                searchIcon: "LocationSearchBar_searchIcon__R2Wvj",
                crossIcon: "LocationSearchBar_crossIcon__6LxfX"
            }
        },
        72770: e => {
            e.exports = {
                article: "Article_article__uf2Kf",
                "article-header": "Article_article-header__v95dd",
                articleHeader: "Article_article-header__v95dd"
            }
        },
        72785: e => {
            e.exports = {
                "full-width-title": "HeaderFullWidthTitle_full-width-title__JpqKO",
                fullWidthTitle: "HeaderFullWidthTitle_full-width-title__JpqKO",
                title: "HeaderFullWidthTitle_title__JAWKu",
                "inside-title-container": "HeaderFullWidthTitle_inside-title-container__yGvkt",
                insideTitleContainer: "HeaderFullWidthTitle_inside-title-container__yGvkt",
                "inside-title": "HeaderFullWidthTitle_inside-title__4mf2z",
                insideTitle: "HeaderFullWidthTitle_inside-title__4mf2z"
            }
        },
        73007: e => {
            e.exports = {
                "button-grid": "ButtonGrid_button-grid__BeBBn",
                buttonGrid: "ButtonGrid_button-grid__BeBBn",
                background: "ButtonGrid_background___6zgg",
                title: "ButtonGrid_title__SqbBl",
                "flex-container": "ButtonGrid_flex-container__Be9ca",
                flexContainer: "ButtonGrid_flex-container__Be9ca",
                "three-column": "ButtonGrid_three-column__BVcAZ",
                threeColumn: "ButtonGrid_three-column__BVcAZ",
                "four-column": "ButtonGrid_four-column__jsHcE",
                fourColumn: "ButtonGrid_four-column__jsHcE"
            }
        },
        73902: e => {
            e.exports = {
                "parent-figure": "MediaLayout_parent-figure__aQuRA",
                parentFigure: "MediaLayout_parent-figure__aQuRA",
                "small-inline": "MediaLayout_small-inline___gwjM",
                smallInline: "MediaLayout_small-inline___gwjM",
                "large-inline": "MediaLayout_large-inline__XabQH",
                largeInline: "MediaLayout_large-inline__XabQH",
                "full-width": "MediaLayout_full-width__zZfcV",
                fullWidth: "MediaLayout_full-width__zZfcV",
                "image-block": "MediaLayout_image-block__d1EiL",
                imageBlock: "MediaLayout_image-block__d1EiL",
                "no-margins": "MediaLayout_no-margins__yKTWi",
                noMargins: "MediaLayout_no-margins__yKTWi"
            }
        },
        73908: e => {
            e.exports = {
                case: "Case_case__jutHD",
                fullHeightContainer: "Case_fullHeightContainer__dJ8bm",
                screenHeightContainer: "Case_screenHeightContainer__PjAqd",
                "lottie-holder": "Case_lottie-holder__diXZm",
                lottieHolder: "Case_lottie-holder__diXZm",
                "lottie-icon": "Case_lottie-icon__cdYgA",
                lottieIcon: "Case_lottie-icon__cdYgA"
            }
        },
        74584: e => {
            e.exports = {
                "news-overview-item": "NewsOverviewItem_news-overview-item__EPjZS",
                newsOverviewItem: "NewsOverviewItem_news-overview-item__EPjZS",
                button: "NewsOverviewItem_button__qIa2M",
                line: "NewsOverviewItem_line__de4Rt",
                "image-holder": "NewsOverviewItem_image-holder__VOnzy",
                imageHolder: "NewsOverviewItem_image-holder__VOnzy",
                animatedImage: "NewsOverviewItem_animatedImage__ddpQ7",
                video: "NewsOverviewItem_video__HUaF2",
                content: "NewsOverviewItem_content__6lwVe",
                title: "NewsOverviewItem_title__BhQ7P",
                date: "NewsOverviewItem_date__PJZwP",
                category: "NewsOverviewItem_category__WYtSp",
                "download-link": "NewsOverviewItem_download-link__adpZ0",
                downloadLink: "NewsOverviewItem_download-link__adpZ0",
                "background-hover": "NewsOverviewItem_background-hover__VNe3i",
                backgroundHover: "NewsOverviewItem_background-hover__VNe3i",
                "is-highlight": "NewsOverviewItem_is-highlight__859NO",
                isHighlight: "NewsOverviewItem_is-highlight__859NO"
            }
        },
        75555: e => {
            e.exports = {
                "sticky-notes": "StickyNotes_sticky-notes__7cpse",
                stickyNotes: "StickyNotes_sticky-notes__7cpse",
                note: "StickyNotes_note__u5hgV"
            }
        },
        76901: e => {
            e.exports = {
                "service-power-webgl": "ServicePowerWebgl_service-power-webgl__vc5U6",
                servicePowerWebgl: "ServicePowerWebgl_service-power-webgl__vc5U6",
                isInViewWrap: "ServicePowerWebgl_isInViewWrap__JsNBM"
            }
        },
        77033: e => {
            e.exports = {
                titleWrapper: "LocationOverview_titleWrapper__tm5SH",
                title: "LocationOverview_title__rMkWR",
                titleImage: "LocationOverview_titleImage__r8Qlh",
                imageHolder: "LocationOverview_imageHolder__DEeVv"
            }
        },
        77059: e => {
            e.exports = {
                "header-highlight": "HeaderHighlight_header-highlight__0iNp9",
                headerHighlight: "HeaderHighlight_header-highlight__0iNp9",
                highlight: "HeaderHighlight_highlight__mZoYb",
                button: "HeaderHighlight_button__kMWE6"
            }
        },
        77473: e => {
            e.exports = {
                "buttons-holder": "DraggableFilterButtons_buttons-holder__IrbO5",
                buttonsHolder: "DraggableFilterButtons_buttons-holder__IrbO5",
                button: "DraggableFilterButtons_button__eUsnS"
            }
        },
        78287: e => {
            e.exports = {
                "video-block": "VideoBlock_video-block__7IW3Z",
                videoBlock: "VideoBlock_video-block__7IW3Z",
                "no-margins": "VideoBlock_no-margins__YVJMA",
                noMargins: "VideoBlock_no-margins__YVJMA"
            }
        },
        78390: e => {
            e.exports = {
                "people-slider-item": "PeopleSliderItem_people-slider-item__AgNNb",
                peopleSliderItem: "PeopleSliderItem_people-slider-item__AgNNb",
                card: "PeopleSliderItem_card__vuXP4",
                imageContainer: "PeopleSliderItem_imageContainer___JhQK",
                imageHolder: "PeopleSliderItem_imageHolder__QUois",
                image: "PeopleSliderItem_image__yngDy",
                identityDetails: "PeopleSliderItem_identityDetails__wwieM",
                textContent: "PeopleSliderItem_textContent__ptqxZ",
                textContentWrapper: "PeopleSliderItem_textContentWrapper__waa0E",
                client: "PeopleSliderItem_client__8vJqv",
                title: "PeopleSliderItem_title__25F0l",
                button: "PeopleSliderItem_button__ZIIUd",
                icon: "PeopleSliderItem_icon__c0GAY",
                link: "PeopleSliderItem_link__az2D7",
                pointer: "PeopleSliderItem_pointer__AfKsJ",
                animatedImage: "PeopleSliderItem_animatedImage__P5jaf",
                noImageCard: "PeopleSliderItem_noImageCard__yxTC2"
            }
        },
        78858: e => {
            e.exports = {
                headerTitleH1: "HeaderTitleH1_headerTitleH1__FSrQM",
                title: "HeaderTitleH1_title__jGsUl",
                fontsizeOverflowing: "HeaderTitleH1_fontsizeOverflowing__J0YgH"
            }
        },
        79510: (e, t, r) => {
            "use strict";
            r.d(t, {
                w: () => _
            });
            var n = r(89099),
                i = r(21429),
                a = r(14023),
                s = r(15983),
                l = r(66910),
                o = r(14232),
                c = r(24548),
                u = r(78140),
                d = r(74114);

            function _(e) {
                let t, r, _, m, p, g, f = (0, a.z)(e.setupOptions);
                ! function(e, t, r) {
                    let {
                        flowHijacked: n
                    } = (0, l.e)();
                    (0, s.A)(() => ((async () => {
                        (0, i.ah)(async () => {
                            await n.current, e ? .transitionIn()
                        }, t ? .beforeTransitionIn)
                    })(), () => {
                        r && r()
                    }), [e])
                }(f, {
                    beforeTransitionIn: e.beforeTransitionIn
                }, e.onDispose);
                let h = (0, n.useRouter)(),
                    {
                        start: x
                    } = (0, l.e)();
                t = (0, o.useRef)(!1), r = (0, o.useRef)(t => {
                    (0, i.ah)(() => x(f, e.crossFlow(), t, h.asPath), e.beforeTransitionOut)
                }), _ = (0, n.useRouter)(), m = (0, o.useRef)((0, d.kD)(_.asPath)), p = (0, c.A)(), g = (0, u.o)(), (0, o.useEffect)(() => {
                    let e = e => {
                            let r = (0, d.kD)(e, _.locale);
                            if (!t.current && (0, d.OE)(r) !== (0, d.OE)(m.current)) throw _.events.emit("routeChangeError", r, m.current), `Route change to "${e}" was aborted (this error can be safely ignored)`
                        },
                        n = (a, s) => {
                            g.setBeforeHistoryChangePath(a, s), (0, i.ah)(() => {
                                _.events.off("beforeHistoryChange", e), _.events.off("routeChangeError", n), t.current = !0, p(a)
                            }, r.current)
                        };
                    return _.events.on("routeChangeError", n), _.events.on("beforeHistoryChange", e), () => {
                        _.events.off("beforeHistoryChange", e), _.events.off("routeChangeError", n)
                    }
                }, [])
            }
        },
        80387: e => {
            e.exports = {
                "featured-news-item": "FeaturedNewsItem_featured-news-item__UJ7Aa",
                featuredNewsItem: "FeaturedNewsItem_featured-news-item__UJ7Aa",
                "image-holder": "FeaturedNewsItem_image-holder___TbtC",
                imageHolder: "FeaturedNewsItem_image-holder___TbtC",
                content: "FeaturedNewsItem_content__FN4nB",
                "inner-content": "FeaturedNewsItem_inner-content__X8GhE",
                innerContent: "FeaturedNewsItem_inner-content__X8GhE",
                "download-link": "FeaturedNewsItem_download-link__SxLBk",
                downloadLink: "FeaturedNewsItem_download-link__SxLBk",
                category: "FeaturedNewsItem_category__bmyEN",
                title: "FeaturedNewsItem_title__hos0q",
                date: "FeaturedNewsItem_date__1SpIo",
                "image-container": "FeaturedNewsItem_image-container__qd7qg",
                imageContainer: "FeaturedNewsItem_image-container__qd7qg",
                animatedImage: "FeaturedNewsItem_animatedImage__H_KF8",
                video: "FeaturedNewsItem_video__k_QVc",
                cta: "FeaturedNewsItem_cta__1LCHJ",
                "align-right": "FeaturedNewsItem_align-right__p2jm4",
                alignRight: "FeaturedNewsItem_align-right__p2jm4"
            }
        },
        80429: e => {
            e.exports = {
                "text-dropdown": "TextDropdown_text-dropdown__cJF_I",
                textDropdown: "TextDropdown_text-dropdown__cJF_I",
                "header-content": "TextDropdown_header-content__LC4yp",
                headerContent: "TextDropdown_header-content__LC4yp",
                title: "TextDropdown_title__Em7WF",
                listLine: "TextDropdown_listLine__3NAUE",
                childDropdown: "TextDropdown_childDropdown__C66Kt",
                childRichText: "TextDropdown_childRichText__pW8T_",
                header: "TextDropdown_header__zLzgn",
                icon: "TextDropdown_icon__GYefw",
                content: "TextDropdown_content__CeMdV",
                hidden: "TextDropdown_hidden__Jq8zt"
            }
        },
        87706: e => {
            e.exports = {
                superpowers: "Superpowers_superpowers__uM3Nx",
                "webgl-container": "Superpowers_webgl-container__oTHI_",
                webglContainer: "Superpowers_webgl-container__oTHI_",
                wrapper: "Superpowers_wrapper___jy3g",
                "slide-holder": "Superpowers_slide-holder__84j9o",
                slideHolder: "Superpowers_slide-holder__84j9o",
                slide: "Superpowers_slide__u1HUr",
                "slide-background-holder": "Superpowers_slide-background-holder__3TrmL",
                slideBackgroundHolder: "Superpowers_slide-background-holder__3TrmL",
                "background-slide": "Superpowers_background-slide__UYc9O",
                backgroundSlide: "Superpowers_background-slide__UYc9O"
            }
        },
        88959: e => {
            e.exports = {
                "slider-content": "SliderContent_slider-content__cKyV4",
                sliderContent: "SliderContent_slider-content__cKyV4",
                "with-title": "SliderContent_with-title__Athm8",
                withTitle: "SliderContent_with-title__Athm8",
                title: "SliderContent_title__AieEC",
                "item-holder": "SliderContent_item-holder__3sa3_",
                itemHolder: "SliderContent_item-holder__3sa3_",
                item: "SliderContent_item__77PYu",
                "grid-gutter-width": "SliderContent_grid-gutter-width__Tqbp5",
                gridGutterWidth: "SliderContent_grid-gutter-width__Tqbp5",
                "carousel-wrapper": "SliderContent_carousel-wrapper__yux5k",
                carouselWrapper: "SliderContent_carousel-wrapper__yux5k",
                caption: "SliderContent_caption__x0P6U"
            }
        },
        89558: e => {
            e.exports = {
                cityContainer: "Locations_cityContainer__x0y4V",
                buttonGrid: "Locations_buttonGrid__GjQP_"
            }
        },
        90779: e => {
            e.exports = {
                "superpower-webgl": "SuperpowerWebgl_superpower-webgl__05Htd",
                superpowerWebgl: "SuperpowerWebgl_superpower-webgl__05Htd",
                isInViewWrap: "SuperpowerWebgl_isInViewWrap__sQyVT"
            }
        },
        90997: e => {
            e.exports = {
                "blackhole-cta": "BlackholeCta_blackhole-cta__DztOT",
                blackholeCta: "BlackholeCta_blackhole-cta__DztOT",
                "canvas-container": "BlackholeCta_canvas-container___nNIv",
                canvasContainer: "BlackholeCta_canvas-container___nNIv",
                "canvas-starfield": "BlackholeCta_canvas-starfield__ArD7F",
                canvasStarfield: "BlackholeCta_canvas-starfield__ArD7F",
                wrapper: "BlackholeCta_wrapper__fmCGm",
                title: "BlackholeCta_title__SZX4b",
                "button-holder": "BlackholeCta_button-holder__5D8FM",
                buttonHolder: "BlackholeCta_button-holder__5D8FM",
                button: "BlackholeCta_button__29Y_t"
            }
        },
        92238: e => {
            e.exports = {
                emptyDivForDepthEffect: "ParallaxCardHover_emptyDivForDepthEffect__8LHhD"
            }
        },
        92279: e => {
            e.exports = {
                "work-filter-visual-item": "WorkFilterVisualItem_work-filter-visual-item__lBANx",
                workFilterVisualItem: "WorkFilterVisualItem_work-filter-visual-item__lBANx",
                title: "WorkFilterVisualItem_title__9VeMM",
                "animation-holder": "WorkFilterVisualItem_animation-holder__dLAWE",
                animationHolder: "WorkFilterVisualItem_animation-holder__dLAWE",
                animation: "WorkFilterVisualItem_animation__8DFhl"
            }
        },
        92284: e => {
            e.exports = {
                "service-power-slide-background": "ServicePowerSlideBackground_service-power-slide-background__h9G3Z",
                servicePowerSlideBackground: "ServicePowerSlideBackground_service-power-slide-background__h9G3Z",
                background: "ServicePowerSlideBackground_background__tPLf1",
                "title-content": "ServicePowerSlideBackground_title-content__Flssy",
                titleContent: "ServicePowerSlideBackground_title-content__Flssy",
                title: "ServicePowerSlideBackground_title__gJDEf",
                line: "ServicePowerSlideBackground_line__R_2vt",
                "text-content": "ServicePowerSlideBackground_text-content__YXXnD",
                textContent: "ServicePowerSlideBackground_text-content__YXXnD"
            }
        },
        93862: e => {
            e.exports = {
                "description-list-item": "DescriptionListItem_description-list-item__OjGo3",
                descriptionListItem: "DescriptionListItem_description-list-item__OjGo3",
                line: "DescriptionListItem_line__V72Ic",
                number: "DescriptionListItem_number__aPczt",
                description: "DescriptionListItem_description__piB5Y"
            }
        },
        94836: e => {
            e.exports = {
                "button-grid-item": "ButtonGridItem_button-grid-item__swwfv",
                buttonGridItem: "ButtonGridItem_button-grid-item__swwfv",
                label: "ButtonGridItem_label__pWSgW",
                link: "ButtonGridItem_link__J8wkM"
            }
        },
        94838: e => {
            e.exports = {
                "title-and-text": "TitleAndText_title-and-text__kmLbI",
                titleAndText: "TitleAndText_title-and-text__kmLbI",
                description: "TitleAndText_description__Iip2U",
                "body-standard": "TitleAndText_body-standard__dATBs",
                bodyStandard: "TitleAndText_body-standard__dATBs",
                title: "TitleAndText_title__PHlOs",
                "heading-01": "TitleAndText_heading-01__LbmzV",
                heading01: "TitleAndText_heading-01__LbmzV",
                "heading-02": "TitleAndText_heading-02__s_2__",
                heading02: "TitleAndText_heading-02__s_2__"
            }
        },
        95410: e => {
            e.exports = {
                solution: "Solution_solution__TrjAc"
            }
        },
        95510: e => {
            e.exports = {
                content: "AccordionItem_content__BywVz",
                header: "AccordionItem_header__9uIJZ",
                disabled: "AccordionItem_disabled__21nWC",
                description: "AccordionItem_description__4b7xm",
                index: "AccordionItem_index__mHSya",
                title: "AccordionItem_title__zrWEF",
                icon: "AccordionItem_icon__d68Wc",
                line: "AccordionItem_line__8_OXD",
                background: "AccordionItem_background__h4LCz",
                "list-item": "AccordionItem_list-item__JQV7_",
                listItem: "AccordionItem_list-item__JQV7_",
                "list-line": "AccordionItem_list-line__M2wdC",
                listLine: "AccordionItem_list-line__M2wdC",
                imageContainer: "AccordionItem_imageContainer__gPYuU",
                image: "AccordionItem_image__dSA5t",
                ctaContainer: "AccordionItem_ctaContainer__N3ieo",
                cta: "AccordionItem_cta__7WErX",
                longDescription: "AccordionItem_longDescription__qI6jY"
            }
        },
        98361: e => {
            e.exports = {
                "people-slider": "PeopleSlider_people-slider__JDtIP",
                peopleSlider: "PeopleSlider_people-slider__JDtIP",
                title: "PeopleSlider_title__QulIv",
                "draggable-bounds": "PeopleSlider_draggable-bounds__ZR7qU",
                draggableBounds: "PeopleSlider_draggable-bounds__ZR7qU",
                slider: "PeopleSlider_slider__YxC_Z",
                flexContainer: "PeopleSlider_flexContainer__MsG_4",
                buttonsContainer: "PeopleSlider_buttonsContainer__kKWXK",
                lightTheme: "PeopleSlider_lightTheme__LAGfw",
                button: "PeopleSlider_button__i7CAw",
                darkTheme: "PeopleSlider_darkTheme__6R6vj",
                arrowButton: "PeopleSlider_arrowButton__Co9EO",
                icon: "PeopleSlider_icon__LL_XJ",
                progressContainer: "PeopleSlider_progressContainer__erIxY",
                progressBar: "PeopleSlider_progressBar__O7rs9",
                gridGutterWidth: "PeopleSlider_gridGutterWidth__8m2iq",
                gapBetweenImages: "PeopleSlider_gapBetweenImages__N4WbG",
                imageContainer: "PeopleSlider_imageContainer__lb3pw",
                threeColumn: "PeopleSlider_threeColumn__bBps7",
                fourColumn: "PeopleSlider_fourColumn__wZaQl"
            }
        },
        98591: (e, t, r) => {
            "use strict";
            let n, i;
            r.d(t, {
                E: () => m
            });
            var a = r(14232),
                s = r(46134),
                l = r(26276),
                o = r.n(l),
                c = r(56618);
            let u = !1;
            var d = r(61791),
                _ = r(73105);

            function m(e, t, r) {
                let [l, m] = (0, a.useState)(e), p = (0, a.useRef)(!1), {
                    setIsInEditorMode: g
                } = (0, _.r)(), f = (0, a.useCallback)(e => {
                    p.current || m(e)
                }, []);
                return (0, d.A)(() => {
                    p.current = !0
                }), (0, a.useEffect)(() => {
                    t && function(e) {
                        if (document.querySelector("#storyblokBridge")) n ? .then(() => {
                            e()
                        });
                        else {
                            n = new Promise(e => {
                                i = e
                            });
                            let t = document.createElement("script");
                            t.src = "https://app.storyblok.com/f/storyblok-v2-latest.js", t.id = "storyblokBridge", document.body.appendChild(t), t.onload = () => {
                                i && i(), e()
                            }
                        }
                    }(() => {
                        p.current || function(e, t, r, n) {
                            let {
                                StoryblokBridge: i
                            } = window;
                            if (void 0 !== i && !u) {
                                u = !0;
                                let a = new URLSearchParams(window.location.search).get("_storyblok_lang");
                                console.log(n, a);
                                let l = new i({
                                    language: a
                                });
                                l.on(["change"], () => {
                                    window.location.reload()
                                }), l.on(["published"], async () => {
                                    window.location.reload()
                                }), l.on("input", r => {
                                    e && r.story ? .content ? ._uid === e.content._uid && (t(r.story), o().refresh())
                                }), l.on("enterEditmode", async n => {
                                    try {
                                        r(!0);
                                        let {
                                            data: i
                                        } = await (0, s.IH)(`${n.storyId}`, {
                                            language: a,
                                            ...(0, c.getStoryParams)(e.full_slug[0]),
                                            version: "draft",
                                            cv: Date.now()
                                        }, !0, !0);
                                        i.story && t(i.story)
                                    } catch (e) {
                                        console.log(e)
                                    }
                                })
                            }
                        }(l, f, g, r)
                    })
                }, [t, r, l, f, g]), (0, a.useEffect)(() => {
                    m(e)
                }, [e]), l
            }
        },
        98894: e => {
            e.exports = {
                "case-header": "CitiesNavigation_case-header__bUgTn",
                caseHeader: "CitiesNavigation_case-header__bUgTn",
                header: "CitiesNavigation_header__iEVKR",
                "client-title": "CitiesNavigation_client-title__o6AC8",
                clientTitle: "CitiesNavigation_client-title__o6AC8",
                title: "CitiesNavigation_title__xUdDY",
                "media-holder": "CitiesNavigation_media-holder___iqz5",
                mediaHolder: "CitiesNavigation_media-holder___iqz5",
                "tag-list": "CitiesNavigation_tag-list__UkDwT",
                tagList: "CitiesNavigation_tag-list__UkDwT",
                "tag-list-item": "CitiesNavigation_tag-list-item__v84ir",
                tagListItem: "CitiesNavigation_tag-list-item__v84ir",
                citiesNavigation: "CitiesNavigation_citiesNavigation__z7_87",
                video: "CitiesNavigation_video__xFExJ",
                "media-wrapper": "CitiesNavigation_media-wrapper__VUGQH",
                mediaWrapper: "CitiesNavigation_media-wrapper__VUGQH"
            }
        },
        99382: e => {
            e.exports = {
                "superpower-slide-background": "SuperpowerSlideBackground_superpower-slide-background__gpXgi",
                superpowerSlideBackground: "SuperpowerSlideBackground_superpower-slide-background__gpXgi",
                background: "SuperpowerSlideBackground_background__XCQEB",
                "title-content": "SuperpowerSlideBackground_title-content__mp_Z4",
                titleContent: "SuperpowerSlideBackground_title-content__mp_Z4",
                title: "SuperpowerSlideBackground_title__zR3uD",
                line: "SuperpowerSlideBackground_line___7wkw",
                "text-content": "SuperpowerSlideBackground_text-content__b3tjA",
                textContent: "SuperpowerSlideBackground_text-content__b3tjA"
            }
        }
    }
]);
//# sourceMappingURL=854-f2501e3327a61937.js.map