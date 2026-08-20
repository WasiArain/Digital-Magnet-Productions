(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [857], {
    5402: e => {
      e.exports = function (e, t, r) {
        return e * (1 - r) + t * r
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
    27857: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        default: () => R
      });
      var n = r(37876),
        u = r(15039),
        s = r.n(u),
        c = r(14232),
        o = r(34172),
        l = r(94825),
        a = r(71393),
        i = r(24009),
        y = r.n(i),
        f = r(96941),
        p = r(51607);

      function v(e, {
        elementRef: t
      }) {
        e.fromTo(t.current, {
          scale: .4
        }, {
          duration: .5,
          scale: 1,
          ease: "Expo.easeOut"
        }, 0), e.add((0, p.m)(t.current), 0)
      }

      function d(e, {
        elementRef: t
      }) {
        e.add((0, p._)(t.current, {
          duration: .4,
          ease: "Expo.easeOut"
        })), e.to(t.current, {
          duration: .4,
          scale: .4,
          ease: "Expo.easeOut"
        }, 0)
      }
      var x = r(5402),
        m = r.n(x),
        b = r(39475),
        _ = r(15983),
        h = r(61123),
        k = r(50049),
        A = r(30743);
      let g = {
        amt: {
          x: .1,
          y: .1,
          scale: .2
        },
        strength: .3,
        distanceMultiplier: 1.5,
        scale: 1.3
      },
        E = {
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
      var O = r(84603),
        w = r(17945),
        P = r(48144);

      function R({
        isVisible: e,
        disableTriggerInOnScroll: t = !0,
        triggerInOnce: r = !1,
        type: u = "button",
        isMagnetic: i = !0,
        isPlaying: p = !1,
        ref: x,
        ...C
      }) {
        let B = (0, c.useRef)(void 0),
          T = x || B,
          H = (0, c.useRef)(null),
          N = (0, c.useRef)(null),
          j = (0, c.useRef)(null),
          [M, S] = (0, c.useState)(!0),
          I = (0, w.qJ)(!1),
          {
            isHover: L
          } = function (e, t, r, n = !0) {
            let {
              amt: u,
              strength: s,
              distanceMultiplier: o,
              scale: l
            } = {
              ...g,
              ...r
            }, a = (0, c.useRef)(E), i = (0, A.d)(), y = (0, c.useRef)(void 0), p = (0, c.useRef)(0), v = (0, b.A)(), [d, x] = (0, c.useState)(!1), O = (0, c.useCallback)(() => {
              let e = i ?.scrollStatusRef.current;
              return {
                x: "number" != typeof e ?.offset.x ? 0 : e ?.offset.x,
                y: "number" != typeof e ?.offset.y ? 0 : e ?.offset.y
                            }
            }, [i ?.scrollStatusRef.current]), w = (0, c.useCallback)(() => {
              if (e && n) {
                let e = O(),
                  r = t.element.current ?.getBoundingClientRect();
                y.current = {
                  width: r ?.width || 0,
                  height: r ?.height || 0,
                  top: (r ?.top || 0) + e.y,
                  left: (r ?.left || 0) + e.x
                }, p.current = (y ?.current ?.width || 0) * o
              }
            }, [p, y, t.element.current, o, O, e, n]), P = (e, t, r) => {
              f.Ay.to(e, {
                previous: t,
                current: t,
                duration: .4,
                ease: "Power2.easeOut",
                onUpdate: () => {
                  r && r()
                }
              })
            }, R = (0, c.useCallback)(() => {
              let e = t.element.current,
                r = t.innerElement ?.current,
                n = t.scaleElement ?.current,
                u = a.current;
              f.Ay.set(e, {
                x: u.x.previous,
                y: u.y.previous
              }), r && f.Ay.set(r, {
                x: .2 * u.x.previous,
                y: .2 * u.y.previous
              }), n && f.Ay.set(n, {
                scale: u.scale.previous
              })
            }, [t.element.current, t.scaleElement ?.current, t.innerElement ?.current, a.current]), C = (0, c.useCallback)(t => {
              if (n && e) {
                let e = O(),
                  r = {
                    x: t.clientX,
                    y: t.clientY
                  },
                  n = y ?.current ?.left || 0,
                  c = y ?.current ?.width || 0,
                  o = y ?.current ?.top || 0,
                  i = y ?.current ?.height || 0,
                  f = (0, k.Io)(r.x + e.x, r.y + e.y, n + c / 2, o + i / 2),
                  v = 0,
                  b = 0;
                f < p.current ? (d || (a.current.scale.current = l, x(!0)), v = (r.x + e.x - (n + c / 2)) * s, b = (r.y + e.y - (o + i / 2)) * s, a.current.x.current = v, a.current.y.current = b, a.current.x.previous = m()(a.current.x.previous, a.current.x.current, u ?.x), a.current.y.previous = m()(a.current.y.previous, a.current.y.current, u ?.y), a.current.scale.previous = m()(a.current.scale.previous, a.current.scale.current, u ?.scale), R()) : d && (x(!1), P([a.current.scale], 1), P([a.current.x, a.current.y], 0, () => {
                  R()
                }))
              }
            }, [y, p, d, a, u, s, l, O, n, e, R]);
            return (0, h.A)("mousemove", C), (0, _.A)(() => {
              w()
            }, [w]), (0, _.A)(() => {
              w()
            }, [v, w]), (0, _.A)(() => {
              w()
            }, [w]), {
              isHover: d
            }
          }(i && I, {
            element: T,
            scaleElement: H,
            innerElement: j
          }, {
            strength: .5
          }, !M),
          {
            transitionController: U
          } = (0, l.mt)({
            scroll: {
              disableTriggerInOnScroll: t,
              trigger: T,
              vars: {
                once: r
              }
            },
            setupOptions: () => ({
              ref: T,
              refs: {
                elementRef: T,
                labelRef: j
              },
              onComplete(e) {
                S("out" === e)
              },
              setupTransitionInTimeline: v,
              setupTransitionOutTimeline: d
            })
          });
        (0, o.s)(U, e);
        let D = (0, c.useCallback)(() => {
          I && function ({
            backgroundHoverRef: e,
            labelRef: t
          }) {
            f.Ay.killTweensOf(e.current), f.Ay.killTweensOf(t.current), f.Ay.to(e.current, .4, {
              ease: "Power3.easeOut",
              y: "-75%"
            }), f.Ay.to(t.current, .4, {
              ease: "Expo.easeOut",
              scale: 1
            })
          }({
            backgroundHoverRef: N,
            labelRef: j
          })
        }, [I]),
          Q = (0, c.useCallback)(() => {
            I && function ({
              backgroundHoverRef: e,
              labelRef: t
            }) {
              f.Ay.killTweensOf(e.current), f.Ay.killTweensOf(t.current), f.Ay.to(e.current, .5, {
                ease: "Power3.easeOut",
                startAt: {
                  y: "75%"
                },
                y: "0%"
              }), f.Ay.to(t.current, .4, {
                ease: "Expo.easeOut",
                scale: .8
              })
            }({
              backgroundHoverRef: N,
              labelRef: j
            })
          }, [I]);
        return (0, O.A)(() => {
          L ? Q() : D()
        }, [L, Q, D]), (0, a.j)({
          innerTemplate: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("div", {
              ref: H,
              className: s()(y().background, "abs-fill"),
              children: (0, n.jsx)("div", {
                ref: N,
                className: s()(y().backgroundHover)
              })
            }), (0, n.jsx)(P.A, {
              ref: j,
              size: "medium",
              isPlaying: p
            })]
          }),
          props: {
            type: u,
            "aria-label": "play video",
            ...C,
            className: s()(y().playButton, C.className, {
              [y().isHover]: L
            }),
            onMouseEnter: () => {
              i || Q()
            },
            onMouseLeave: () => {
              i || D()
            }
          },
          elementRef: T
        })
      }
    },
    50049: (e, t, r) => {
      "use strict";
      r.d(t, {
        Io: () => n,
        a6: () => c,
        a7: () => u,
        ix: () => s
      });
      let n = (e, t, r, n) => Math.hypot(e - r, t - n);

      function u(e, t, r, n, u) {
        return (1 - e) * (1 - e) * (1 - e) * t + 3 * (1 - e) * (1 - e) * e * r + 3 * (1 - e) * e * e * n + e * e * e * u
      }

      function s(e, t, r, n, u) {
        return n + (u - n) * (e - t) / (r - t)
      }

      function c(e, t, r, n, u) {
        let s = (e - t) / (r - t);
        return n + s * s * (u - n)
      }
    }
  }
]);
//# sourceMappingURL=857.8b03278598b71fc9.js.map