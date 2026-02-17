var El = Object.defineProperty;
var Il = (e, n, t) => n in e ? El(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var me = (e, n, t) => Il(e, typeof n != "symbol" ? n + "" : n, t);
import { watch as ct, computed as X, toValue as zt, reactive as na, shallowRef as Cr, unref as c, ref as he, getCurrentScope as Fl, onScopeDispose as Bl, shallowReadonly as ua, defineComponent as Ke, mergeDefaults as Yr, useSlots as Qt, useTemplateRef as Be, createBlock as $e, openBlock as q, createSlots as at, renderList as We, withCtx as Oe, renderSlot as fe, normalizeProps as mt, guardReactiveProps as At, provide as Wl, readonly as Nl, toRef as rr, onMounted as et, nextTick as dt, onUnmounted as _a, createElementBlock as ne, normalizeClass as Me, createVNode as ft, Teleport as Ll, createElementVNode as Ae, normalizeStyle as ht, Transition as xa, createCommentVNode as re, inject as Hl, withModifiers as Ia, Fragment as Pe, toDisplayString as lt, resolveDynamicComponent as Ln, h as Xe, mergeProps as gt, createTextVNode as Nt, onBeforeUpdate as Vl, withDirectives as Za, vShow as Ja, withKeys as ql } from "vue";
const zl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const jl = Object.prototype.toString, Ul = (e) => jl.call(e) === "[object Object]", Qa = () => {
};
function xn(e) {
  return Array.isArray(e) ? e : [e];
}
function Ql(e, n, t) {
  return ct(e, n, {
    ...t,
    immediate: !0
  });
}
const Rr = zl ? window : void 0;
function Ze(e) {
  var n;
  const t = zt(e);
  return (n = t == null ? void 0 : t.$el) !== null && n !== void 0 ? n : t;
}
function va(...e) {
  const n = (a, r, l, s) => (a.addEventListener(r, l, s), () => a.removeEventListener(r, l, s)), t = X(() => {
    const a = xn(zt(e[0])).filter((r) => r != null);
    return a.every((r) => typeof r != "string") ? a : void 0;
  });
  return Ql(() => {
    var a, r;
    return [
      (a = (r = t.value) === null || r === void 0 ? void 0 : r.map((l) => Ze(l))) !== null && a !== void 0 ? a : [Rr].filter((l) => l != null),
      xn(zt(t.value ? e[1] : e[0])),
      xn(c(t.value ? e[2] : e[1])),
      zt(t.value ? e[3] : e[2])
    ];
  }, ([a, r, l, s], o, i) => {
    if (!(a != null && a.length) || !(r != null && r.length) || !(l != null && l.length)) return;
    const h = Ul(s) ? { ...s } : s, m = a.flatMap((y) => r.flatMap((b) => l.map((g) => n(y, b, g, h))));
    i(() => {
      m.forEach((y) => y());
    });
  }, { flush: "post" });
}
function Gl(e, n, t = {}) {
  const { window: a = Rr, ignore: r = [], capture: l = !0, detectIframe: s = !1, controls: o = !1 } = t;
  if (!a) return o ? {
    stop: Qa,
    cancel: Qa,
    trigger: Qa
  } : Qa;
  let i = !0;
  const h = (p) => zt(r).some((u) => {
    if (typeof u == "string") return Array.from(a.document.querySelectorAll(u)).some((d) => d === p.target || p.composedPath().includes(d));
    {
      const d = Ze(u);
      return d && (p.target === d || p.composedPath().includes(d));
    }
  });
  function m(p) {
    const u = zt(p);
    return u && u.$.subTree.shapeFlag === 16;
  }
  function y(p, u) {
    const d = zt(p), v = d.$.subTree && d.$.subTree.children;
    return v == null || !Array.isArray(v) ? !1 : v.some(($) => $.el === u.target || u.composedPath().includes($.el));
  }
  const b = (p) => {
    const u = Ze(e);
    if (p.target != null && !(!(u instanceof Element) && m(e) && y(e, p)) && !(!u || u === p.target || p.composedPath().includes(u))) {
      if ("detail" in p && p.detail === 0 && (i = !h(p)), !i) {
        i = !0;
        return;
      }
      n(p);
    }
  };
  let g = !1;
  const D = [
    va(a, "click", (p) => {
      g || (g = !0, setTimeout(() => {
        g = !1;
      }, 0), b(p));
    }, {
      passive: !0,
      capture: l
    }),
    va(a, "pointerdown", (p) => {
      const u = Ze(e);
      i = !h(p) && !!(u && !p.composedPath().includes(u));
    }, { passive: !0 }),
    s && va(a, "blur", (p) => {
      setTimeout(() => {
        var u;
        const d = Ze(e);
        ((u = a.document.activeElement) === null || u === void 0 ? void 0 : u.tagName) === "IFRAME" && !(d != null && d.contains(a.document.activeElement)) && n(p);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), f = () => D.forEach((p) => p());
  return o ? {
    stop: f,
    cancel: () => {
      i = !1;
    },
    trigger: (p) => {
      i = !0, b(p), i = !1;
    }
  } : f;
}
function Kl(e, n = {}) {
  const { threshold: t = 50, onSwipe: a, onSwipeEnd: r, onSwipeStart: l, passive: s = !0 } = n, o = na({
    x: 0,
    y: 0
  }), i = na({
    x: 0,
    y: 0
  }), h = X(() => o.x - i.x), m = X(() => o.y - i.y), { max: y, abs: b } = Math, g = X(() => y(b(h.value), b(m.value)) >= t), D = Cr(!1), f = X(() => g.value ? b(h.value) > b(m.value) ? h.value > 0 ? "left" : "right" : m.value > 0 ? "up" : "down" : "none"), p = (x) => [x.touches[0].clientX, x.touches[0].clientY], u = (x, _) => {
    o.x = x, o.y = _;
  }, d = (x, _) => {
    i.x = x, i.y = _;
  }, v = {
    passive: s,
    capture: !s
  }, $ = (x) => {
    D.value && (r == null || r(x, f.value)), D.value = !1;
  }, W = [
    va(e, "touchstart", (x) => {
      if (x.touches.length !== 1) return;
      const [_, I] = p(x);
      u(_, I), d(_, I), l == null || l(x);
    }, v),
    va(e, "touchmove", (x) => {
      if (x.touches.length !== 1) return;
      const [_, I] = p(x);
      d(_, I), v.capture && !v.passive && Math.abs(h.value) > Math.abs(m.value) && x.preventDefault(), !D.value && g.value && (D.value = !0), D.value && (a == null || a(x));
    }, v),
    va(e, ["touchend", "touchcancel"], $, v)
  ];
  return {
    isSwiping: D,
    direction: f,
    coordsStart: o,
    coordsEnd: i,
    lengthX: h,
    lengthY: m,
    stop: () => W.forEach((x) => x())
  };
}
const ga = Math.min, ta = Math.max, en = Math.round, Ga = Math.floor, $t = (e) => ({
  x: e,
  y: e
}), Xl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Zl = {
  start: "end",
  end: "start"
};
function Yn(e, n, t) {
  return ta(e, ga(n, t));
}
function Ba(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function ra(e) {
  return e.split("-")[0];
}
function Wa(e) {
  return e.split("-")[1];
}
function Er(e) {
  return e === "x" ? "y" : "x";
}
function Hn(e) {
  return e === "y" ? "height" : "width";
}
const Jl = /* @__PURE__ */ new Set(["top", "bottom"]);
function qt(e) {
  return Jl.has(ra(e)) ? "y" : "x";
}
function Vn(e) {
  return Er(qt(e));
}
function es(e, n, t) {
  t === void 0 && (t = !1);
  const a = Wa(e), r = Vn(e), l = Hn(r);
  let s = r === "x" ? a === (t ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return n.reference[l] > n.floating[l] && (s = tn(s)), [s, tn(s)];
}
function ts(e) {
  const n = tn(e);
  return [Rn(e), n, Rn(n)];
}
function Rn(e) {
  return e.replace(/start|end/g, (n) => Zl[n]);
}
const lr = ["left", "right"], sr = ["right", "left"], as = ["top", "bottom"], ns = ["bottom", "top"];
function rs(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? sr : lr : n ? lr : sr;
    case "left":
    case "right":
      return n ? as : ns;
    default:
      return [];
  }
}
function ls(e, n, t, a) {
  const r = Wa(e);
  let l = rs(ra(e), t === "start", a);
  return r && (l = l.map((s) => s + "-" + r), n && (l = l.concat(l.map(Rn)))), l;
}
function tn(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Xl[n]);
}
function ss(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ir(e) {
  return typeof e != "number" ? ss(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function an(e) {
  const {
    x: n,
    y: t,
    width: a,
    height: r
  } = e;
  return {
    width: a,
    height: r,
    top: t,
    left: n,
    right: n + a,
    bottom: t + r,
    x: n,
    y: t
  };
}
function or(e, n, t) {
  let {
    reference: a,
    floating: r
  } = e;
  const l = qt(n), s = Vn(n), o = Hn(s), i = ra(n), h = l === "y", m = a.x + a.width / 2 - r.width / 2, y = a.y + a.height / 2 - r.height / 2, b = a[o] / 2 - r[o] / 2;
  let g;
  switch (i) {
    case "top":
      g = {
        x: m,
        y: a.y - r.height
      };
      break;
    case "bottom":
      g = {
        x: m,
        y: a.y + a.height
      };
      break;
    case "right":
      g = {
        x: a.x + a.width,
        y
      };
      break;
    case "left":
      g = {
        x: a.x - r.width,
        y
      };
      break;
    default:
      g = {
        x: a.x,
        y: a.y
      };
  }
  switch (Wa(n)) {
    case "start":
      g[s] -= b * (t && h ? -1 : 1);
      break;
    case "end":
      g[s] += b * (t && h ? -1 : 1);
      break;
  }
  return g;
}
const os = async (e, n, t) => {
  const {
    placement: a = "bottom",
    strategy: r = "absolute",
    middleware: l = [],
    platform: s
  } = t, o = l.filter(Boolean), i = await (s.isRTL == null ? void 0 : s.isRTL(n));
  let h = await s.getElementRects({
    reference: e,
    floating: n,
    strategy: r
  }), {
    x: m,
    y
  } = or(h, a, i), b = a, g = {}, D = 0;
  for (let f = 0; f < o.length; f++) {
    const {
      name: p,
      fn: u
    } = o[f], {
      x: d,
      y: v,
      data: $,
      reset: W
    } = await u({
      x: m,
      y,
      initialPlacement: a,
      placement: b,
      strategy: r,
      middlewareData: g,
      rects: h,
      platform: s,
      elements: {
        reference: e,
        floating: n
      }
    });
    m = d ?? m, y = v ?? y, g = {
      ...g,
      [p]: {
        ...g[p],
        ...$
      }
    }, W && D <= 50 && (D++, typeof W == "object" && (W.placement && (b = W.placement), W.rects && (h = W.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : W.rects), {
      x: m,
      y
    } = or(h, b, i)), f = -1);
  }
  return {
    x: m,
    y,
    placement: b,
    strategy: r,
    middlewareData: g
  };
};
async function Fr(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: a,
    y: r,
    platform: l,
    rects: s,
    elements: o,
    strategy: i
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: m = "viewport",
    elementContext: y = "floating",
    altBoundary: b = !1,
    padding: g = 0
  } = Ba(n, e), D = Ir(g), p = o[b ? y === "floating" ? "reference" : "floating" : y], u = an(await l.getClippingRect({
    element: (t = await (l.isElement == null ? void 0 : l.isElement(p))) == null || t ? p : p.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(o.floating)),
    boundary: h,
    rootBoundary: m,
    strategy: i
  })), d = y === "floating" ? {
    x: a,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)), $ = await (l.isElement == null ? void 0 : l.isElement(v)) ? await (l.getScale == null ? void 0 : l.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, W = an(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: d,
    offsetParent: v,
    strategy: i
  }) : d);
  return {
    top: (u.top - W.top + D.top) / $.y,
    bottom: (W.bottom - u.bottom + D.bottom) / $.y,
    left: (u.left - W.left + D.left) / $.x,
    right: (W.right - u.right + D.right) / $.x
  };
}
const is = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: a,
      placement: r,
      rects: l,
      platform: s,
      elements: o,
      middlewareData: i
    } = n, {
      element: h,
      padding: m = 0
    } = Ba(e, n) || {};
    if (h == null)
      return {};
    const y = Ir(m), b = {
      x: t,
      y: a
    }, g = Vn(r), D = Hn(g), f = await s.getDimensions(h), p = g === "y", u = p ? "top" : "left", d = p ? "bottom" : "right", v = p ? "clientHeight" : "clientWidth", $ = l.reference[D] + l.reference[g] - b[g] - l.floating[D], W = b[g] - l.reference[g], Z = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(h));
    let x = Z ? Z[v] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(Z))) && (x = o.floating[v] || l.floating[D]);
    const _ = $ / 2 - W / 2, I = x / 2 - f[D] / 2 - 1, S = ga(y[u], I), j = ga(y[d], I), U = S, J = x - f[D] - j, z = x / 2 - f[D] / 2 + _, Y = Yn(U, z, J), H = !i.arrow && Wa(r) != null && z !== Y && l.reference[D] / 2 - (z < U ? S : j) - f[D] / 2 < 0, P = H ? z < U ? z - U : z - J : 0;
    return {
      [g]: b[g] + P,
      data: {
        [g]: Y,
        centerOffset: z - Y - P,
        ...H && {
          alignmentOffset: P
        }
      },
      reset: H
    };
  }
}), us = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, a;
      const {
        placement: r,
        middlewareData: l,
        rects: s,
        initialPlacement: o,
        platform: i,
        elements: h
      } = n, {
        mainAxis: m = !0,
        crossAxis: y = !0,
        fallbackPlacements: b,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: D = "none",
        flipAlignment: f = !0,
        ...p
      } = Ba(e, n);
      if ((t = l.arrow) != null && t.alignmentOffset)
        return {};
      const u = ra(r), d = qt(o), v = ra(o) === o, $ = await (i.isRTL == null ? void 0 : i.isRTL(h.floating)), W = b || (v || !f ? [tn(o)] : ts(o)), Z = D !== "none";
      !b && Z && W.push(...ls(o, f, D, $));
      const x = [o, ...W], _ = await Fr(n, p), I = [];
      let S = ((a = l.flip) == null ? void 0 : a.overflows) || [];
      if (m && I.push(_[u]), y) {
        const z = es(r, s, $);
        I.push(_[z[0]], _[z[1]]);
      }
      if (S = [...S, {
        placement: r,
        overflows: I
      }], !I.every((z) => z <= 0)) {
        var j, U;
        const z = (((j = l.flip) == null ? void 0 : j.index) || 0) + 1, Y = x[z];
        if (Y && (!(y === "alignment" ? d !== qt(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        S.every((C) => qt(C.placement) === d ? C.overflows[0] > 0 : !0)))
          return {
            data: {
              index: z,
              overflows: S
            },
            reset: {
              placement: Y
            }
          };
        let H = (U = S.filter((P) => P.overflows[0] <= 0).sort((P, C) => P.overflows[1] - C.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var J;
              const P = (J = S.filter((C) => {
                if (Z) {
                  const N = qt(C.placement);
                  return N === d || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((N) => N > 0).reduce((N, E) => N + E, 0)]).sort((C, N) => C[1] - N[1])[0]) == null ? void 0 : J[0];
              P && (H = P);
              break;
            }
            case "initialPlacement":
              H = o;
              break;
          }
        if (r !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
}, cs = /* @__PURE__ */ new Set(["left", "top"]);
async function ds(e, n) {
  const {
    placement: t,
    platform: a,
    elements: r
  } = e, l = await (a.isRTL == null ? void 0 : a.isRTL(r.floating)), s = ra(t), o = Wa(t), i = qt(t) === "y", h = cs.has(s) ? -1 : 1, m = l && i ? -1 : 1, y = Ba(n, e);
  let {
    mainAxis: b,
    crossAxis: g,
    alignmentAxis: D
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return o && typeof D == "number" && (g = o === "end" ? D * -1 : D), i ? {
    x: g * m,
    y: b * h
  } : {
    x: b * h,
    y: g * m
  };
}
const fs = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, a;
      const {
        x: r,
        y: l,
        placement: s,
        middlewareData: o
      } = n, i = await ds(n, e);
      return s === ((t = o.offset) == null ? void 0 : t.placement) && (a = o.arrow) != null && a.alignmentOffset ? {} : {
        x: r + i.x,
        y: l + i.y,
        data: {
          ...i,
          placement: s
        }
      };
    }
  };
}, ms = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: a,
        placement: r
      } = n, {
        mainAxis: l = !0,
        crossAxis: s = !1,
        limiter: o = {
          fn: (p) => {
            let {
              x: u,
              y: d
            } = p;
            return {
              x: u,
              y: d
            };
          }
        },
        ...i
      } = Ba(e, n), h = {
        x: t,
        y: a
      }, m = await Fr(n, i), y = qt(ra(r)), b = Er(y);
      let g = h[b], D = h[y];
      if (l) {
        const p = b === "y" ? "top" : "left", u = b === "y" ? "bottom" : "right", d = g + m[p], v = g - m[u];
        g = Yn(d, g, v);
      }
      if (s) {
        const p = y === "y" ? "top" : "left", u = y === "y" ? "bottom" : "right", d = D + m[p], v = D - m[u];
        D = Yn(d, D, v);
      }
      const f = o.fn({
        ...n,
        [b]: g,
        [y]: D
      });
      return {
        ...f,
        data: {
          x: f.x - t,
          y: f.y - a,
          enabled: {
            [b]: l,
            [y]: s
          }
        }
      };
    }
  };
};
function ln() {
  return typeof window < "u";
}
function oa(e) {
  return qn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Rt(e) {
  var n;
  return (n = (qn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function qn(e) {
  return ln() ? e instanceof Node || e instanceof vt(e).Node : !1;
}
function Mt(e) {
  return ln() ? e instanceof Element || e instanceof vt(e).Element : !1;
}
function Ct(e) {
  return ln() ? e instanceof HTMLElement || e instanceof vt(e).HTMLElement : !1;
}
function ir(e) {
  return !ln() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot;
}
const hs = /* @__PURE__ */ new Set(["inline", "contents"]);
function Na(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: a,
    display: r
  } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + a + t) && !hs.has(r);
}
const vs = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ps(e) {
  return vs.has(oa(e));
}
const ys = [":popover-open", ":modal"];
function sn(e) {
  return ys.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const gs = ["transform", "translate", "scale", "rotate", "perspective"], ws = ["transform", "translate", "scale", "rotate", "perspective", "filter"], bs = ["paint", "layout", "strict", "content"];
function zn(e) {
  const n = jn(), t = Mt(e) ? Tt(e) : e;
  return gs.some((a) => t[a] ? t[a] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ws.some((a) => (t.willChange || "").includes(a)) || bs.some((a) => (t.contain || "").includes(a));
}
function ks(e) {
  let n = jt(e);
  for (; Ct(n) && !wa(n); ) {
    if (zn(n))
      return n;
    if (sn(n))
      return null;
    n = jt(n);
  }
  return null;
}
function jn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Ds = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function wa(e) {
  return Ds.has(oa(e));
}
function Tt(e) {
  return vt(e).getComputedStyle(e);
}
function on(e) {
  return Mt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jt(e) {
  if (oa(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ir(e) && e.host || // Fallback.
    Rt(e)
  );
  return ir(n) ? n.host : n;
}
function Br(e) {
  const n = jt(e);
  return wa(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(n) && Na(n) ? n : Br(n);
}
function Fa(e, n, t) {
  var a;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = Br(e), l = r === ((a = e.ownerDocument) == null ? void 0 : a.body), s = vt(r);
  if (l) {
    const o = En(s);
    return n.concat(s, s.visualViewport || [], Na(r) ? r : [], o && t ? Fa(o) : []);
  }
  return n.concat(r, Fa(r, [], t));
}
function En(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wr(e) {
  const n = Tt(e);
  let t = parseFloat(n.width) || 0, a = parseFloat(n.height) || 0;
  const r = Ct(e), l = r ? e.offsetWidth : t, s = r ? e.offsetHeight : a, o = en(t) !== l || en(a) !== s;
  return o && (t = l, a = s), {
    width: t,
    height: a,
    $: o
  };
}
function Un(e) {
  return Mt(e) ? e : e.contextElement;
}
function pa(e) {
  const n = Un(e);
  if (!Ct(n))
    return $t(1);
  const t = n.getBoundingClientRect(), {
    width: a,
    height: r,
    $: l
  } = Wr(n);
  let s = (l ? en(t.width) : t.width) / a, o = (l ? en(t.height) : t.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: s,
    y: o
  };
}
const _s = /* @__PURE__ */ $t(0);
function Nr(e) {
  const n = vt(e);
  return !jn() || !n.visualViewport ? _s : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function xs(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== vt(e) ? !1 : n;
}
function la(e, n, t, a) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = Un(e);
  let s = $t(1);
  n && (a ? Mt(a) && (s = pa(a)) : s = pa(e));
  const o = xs(l, t, a) ? Nr(l) : $t(0);
  let i = (r.left + o.x) / s.x, h = (r.top + o.y) / s.y, m = r.width / s.x, y = r.height / s.y;
  if (l) {
    const b = vt(l), g = a && Mt(a) ? vt(a) : a;
    let D = b, f = En(D);
    for (; f && a && g !== D; ) {
      const p = pa(f), u = f.getBoundingClientRect(), d = Tt(f), v = u.left + (f.clientLeft + parseFloat(d.paddingLeft)) * p.x, $ = u.top + (f.clientTop + parseFloat(d.paddingTop)) * p.y;
      i *= p.x, h *= p.y, m *= p.x, y *= p.y, i += v, h += $, D = vt(f), f = En(D);
    }
  }
  return an({
    width: m,
    height: y,
    x: i,
    y: h
  });
}
function un(e, n) {
  const t = on(e).scrollLeft;
  return n ? n.left + t : la(Rt(e)).left + t;
}
function Lr(e, n) {
  const t = e.getBoundingClientRect(), a = t.left + n.scrollLeft - un(e, t), r = t.top + n.scrollTop;
  return {
    x: a,
    y: r
  };
}
function Ms(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: a,
    strategy: r
  } = e;
  const l = r === "fixed", s = Rt(a), o = n ? sn(n.floating) : !1;
  if (a === s || o && l)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, h = $t(1);
  const m = $t(0), y = Ct(a);
  if ((y || !y && !l) && ((oa(a) !== "body" || Na(s)) && (i = on(a)), Ct(a))) {
    const g = la(a);
    h = pa(a), m.x = g.x + a.clientLeft, m.y = g.y + a.clientTop;
  }
  const b = s && !y && !l ? Lr(s, i) : $t(0);
  return {
    width: t.width * h.x,
    height: t.height * h.y,
    x: t.x * h.x - i.scrollLeft * h.x + m.x + b.x,
    y: t.y * h.y - i.scrollTop * h.y + m.y + b.y
  };
}
function Ts(e) {
  return Array.from(e.getClientRects());
}
function Ps(e) {
  const n = Rt(e), t = on(e), a = e.ownerDocument.body, r = ta(n.scrollWidth, n.clientWidth, a.scrollWidth, a.clientWidth), l = ta(n.scrollHeight, n.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -t.scrollLeft + un(e);
  const o = -t.scrollTop;
  return Tt(a).direction === "rtl" && (s += ta(n.clientWidth, a.clientWidth) - r), {
    width: r,
    height: l,
    x: s,
    y: o
  };
}
const ur = 25;
function Os(e, n) {
  const t = vt(e), a = Rt(e), r = t.visualViewport;
  let l = a.clientWidth, s = a.clientHeight, o = 0, i = 0;
  if (r) {
    l = r.width, s = r.height;
    const m = jn();
    (!m || m && n === "fixed") && (o = r.offsetLeft, i = r.offsetTop);
  }
  const h = un(a);
  if (h <= 0) {
    const m = a.ownerDocument, y = m.body, b = getComputedStyle(y), g = m.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0, D = Math.abs(a.clientWidth - y.clientWidth - g);
    D <= ur && (l -= D);
  } else h <= ur && (l += h);
  return {
    width: l,
    height: s,
    x: o,
    y: i
  };
}
const As = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ss(e, n) {
  const t = la(e, !0, n === "fixed"), a = t.top + e.clientTop, r = t.left + e.clientLeft, l = Ct(e) ? pa(e) : $t(1), s = e.clientWidth * l.x, o = e.clientHeight * l.y, i = r * l.x, h = a * l.y;
  return {
    width: s,
    height: o,
    x: i,
    y: h
  };
}
function cr(e, n, t) {
  let a;
  if (n === "viewport")
    a = Os(e, t);
  else if (n === "document")
    a = Ps(Rt(e));
  else if (Mt(n))
    a = Ss(n, t);
  else {
    const r = Nr(e);
    a = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return an(a);
}
function Hr(e, n) {
  const t = jt(e);
  return t === n || !Mt(t) || wa(t) ? !1 : Tt(t).position === "fixed" || Hr(t, n);
}
function $s(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let a = Fa(e, [], !1).filter((o) => Mt(o) && oa(o) !== "body"), r = null;
  const l = Tt(e).position === "fixed";
  let s = l ? jt(e) : e;
  for (; Mt(s) && !wa(s); ) {
    const o = Tt(s), i = zn(s);
    !i && o.position === "fixed" && (r = null), (l ? !i && !r : !i && o.position === "static" && !!r && As.has(r.position) || Na(s) && !i && Hr(e, s)) ? a = a.filter((m) => m !== s) : r = o, s = jt(s);
  }
  return n.set(e, a), a;
}
function Cs(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: a,
    strategy: r
  } = e;
  const s = [...t === "clippingAncestors" ? sn(n) ? [] : $s(n, this._c) : [].concat(t), a], o = s[0], i = s.reduce((h, m) => {
    const y = cr(n, m, r);
    return h.top = ta(y.top, h.top), h.right = ga(y.right, h.right), h.bottom = ga(y.bottom, h.bottom), h.left = ta(y.left, h.left), h;
  }, cr(n, o, r));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function Ys(e) {
  const {
    width: n,
    height: t
  } = Wr(e);
  return {
    width: n,
    height: t
  };
}
function Rs(e, n, t) {
  const a = Ct(n), r = Rt(n), l = t === "fixed", s = la(e, !0, l, n);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = $t(0);
  function h() {
    i.x = un(r);
  }
  if (a || !a && !l)
    if ((oa(n) !== "body" || Na(r)) && (o = on(n)), a) {
      const g = la(n, !0, l, n);
      i.x = g.x + n.clientLeft, i.y = g.y + n.clientTop;
    } else r && h();
  l && !a && r && h();
  const m = r && !a && !l ? Lr(r, o) : $t(0), y = s.left + o.scrollLeft - i.x - m.x, b = s.top + o.scrollTop - i.y - m.y;
  return {
    x: y,
    y: b,
    width: s.width,
    height: s.height
  };
}
function Mn(e) {
  return Tt(e).position === "static";
}
function dr(e, n) {
  if (!Ct(e) || Tt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Rt(e) === t && (t = t.ownerDocument.body), t;
}
function Vr(e, n) {
  const t = vt(e);
  if (sn(e))
    return t;
  if (!Ct(e)) {
    let r = jt(e);
    for (; r && !wa(r); ) {
      if (Mt(r) && !Mn(r))
        return r;
      r = jt(r);
    }
    return t;
  }
  let a = dr(e, n);
  for (; a && ps(a) && Mn(a); )
    a = dr(a, n);
  return a && wa(a) && Mn(a) && !zn(a) ? t : a || ks(e) || t;
}
const Es = async function(e) {
  const n = this.getOffsetParent || Vr, t = this.getDimensions, a = await t(e.floating);
  return {
    reference: Rs(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function Is(e) {
  return Tt(e).direction === "rtl";
}
const Fs = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ms,
  getDocumentElement: Rt,
  getClippingRect: Cs,
  getOffsetParent: Vr,
  getElementRects: Es,
  getClientRects: Ts,
  getDimensions: Ys,
  getScale: pa,
  isElement: Mt,
  isRTL: Is
};
function qr(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function Bs(e, n) {
  let t = null, a;
  const r = Rt(e);
  function l() {
    var o;
    clearTimeout(a), (o = t) == null || o.disconnect(), t = null;
  }
  function s(o, i) {
    o === void 0 && (o = !1), i === void 0 && (i = 1), l();
    const h = e.getBoundingClientRect(), {
      left: m,
      top: y,
      width: b,
      height: g
    } = h;
    if (o || n(), !b || !g)
      return;
    const D = Ga(y), f = Ga(r.clientWidth - (m + b)), p = Ga(r.clientHeight - (y + g)), u = Ga(m), v = {
      rootMargin: -D + "px " + -f + "px " + -p + "px " + -u + "px",
      threshold: ta(0, ga(1, i)) || 1
    };
    let $ = !0;
    function W(Z) {
      const x = Z[0].intersectionRatio;
      if (x !== i) {
        if (!$)
          return s();
        x ? s(!1, x) : a = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      x === 1 && !qr(h, e.getBoundingClientRect()) && s(), $ = !1;
    }
    try {
      t = new IntersectionObserver(W, {
        ...v,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(W, v);
    }
    t.observe(e);
  }
  return s(!0), l;
}
function Ws(e, n, t, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: l = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: o = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = a, h = Un(e), m = r || l ? [...h ? Fa(h) : [], ...Fa(n)] : [];
  m.forEach((u) => {
    r && u.addEventListener("scroll", t, {
      passive: !0
    }), l && u.addEventListener("resize", t);
  });
  const y = h && o ? Bs(h, t) : null;
  let b = -1, g = null;
  s && (g = new ResizeObserver((u) => {
    let [d] = u;
    d && d.target === h && g && (g.unobserve(n), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var v;
      (v = g) == null || v.observe(n);
    })), t();
  }), h && !i && g.observe(h), g.observe(n));
  let D, f = i ? la(e) : null;
  i && p();
  function p() {
    const u = la(e);
    f && !qr(f, u) && t(), f = u, D = requestAnimationFrame(p);
  }
  return t(), () => {
    var u;
    m.forEach((d) => {
      r && d.removeEventListener("scroll", t), l && d.removeEventListener("resize", t);
    }), y == null || y(), (u = g) == null || u.disconnect(), g = null, i && cancelAnimationFrame(D);
  };
}
const Ns = fs, Ls = ms, Hs = us, Vs = is, qs = (e, n, t) => {
  const a = /* @__PURE__ */ new Map(), r = {
    platform: Fs,
    ...t
  }, l = {
    ...r.platform,
    _c: a
  };
  return os(e, n, {
    ...r,
    platform: l
  });
};
function zs(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function In(e) {
  if (zs(e)) {
    const n = e.$el;
    return qn(n) && oa(n) === "#comment" ? null : n;
  }
  return e;
}
function da(e) {
  return typeof e == "function" ? e() : c(e);
}
function fr(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = In(da(e.element));
      return t == null ? {} : Vs({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function zr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mr(e, n) {
  const t = zr(e);
  return Math.round(n * t) / t;
}
function js(e, n, t) {
  t === void 0 && (t = {});
  const a = t.whileElementsMounted, r = X(() => {
    var x;
    return (x = da(t.open)) != null ? x : !0;
  }), l = X(() => da(t.middleware)), s = X(() => {
    var x;
    return (x = da(t.placement)) != null ? x : "bottom";
  }), o = X(() => {
    var x;
    return (x = da(t.strategy)) != null ? x : "absolute";
  }), i = X(() => {
    var x;
    return (x = da(t.transform)) != null ? x : !0;
  }), h = X(() => In(e.value)), m = X(() => In(n.value)), y = he(0), b = he(0), g = he(o.value), D = he(s.value), f = Cr({}), p = he(!1), u = X(() => {
    const x = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!m.value)
      return x;
    const _ = mr(m.value, y.value), I = mr(m.value, b.value);
    return i.value ? {
      ...x,
      transform: "translate(" + _ + "px, " + I + "px)",
      ...zr(m.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: _ + "px",
      top: I + "px"
    };
  });
  let d;
  function v() {
    if (h.value == null || m.value == null)
      return;
    const x = r.value;
    qs(h.value, m.value, {
      middleware: l.value,
      placement: s.value,
      strategy: o.value
    }).then((_) => {
      y.value = _.x, b.value = _.y, g.value = _.strategy, D.value = _.placement, f.value = _.middlewareData, p.value = x !== !1;
    });
  }
  function $() {
    typeof d == "function" && (d(), d = void 0);
  }
  function W() {
    if ($(), a === void 0) {
      v();
      return;
    }
    if (h.value != null && m.value != null) {
      d = a(h.value, m.value, v);
      return;
    }
  }
  function Z() {
    r.value || (p.value = !1);
  }
  return ct([l, s, o, r], v, {
    flush: "sync"
  }), ct([h, m], W, {
    flush: "sync"
  }), ct(r, Z, {
    flush: "sync"
  }), Fl() && Bl($), {
    x: ua(y),
    y: ua(b),
    strategy: ua(g),
    placement: ua(D),
    middlewareData: ua(f),
    isPositioned: ua(p),
    floatingStyles: u,
    update: v
  };
}
const jr = 6048e5, Us = 864e5, Qs = 6e4, Gs = 36e5, Ks = 1e3, hr = Symbol.for("constructDateFrom");
function Ie(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && hr in e ? e[hr](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
}
function ke(e, n) {
  return Ie(n || e, e);
}
function yt(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  return isNaN(n) ? Ie((t == null ? void 0 : t.in) || e, NaN) : (n && a.setDate(a.getDate() + n), a);
}
function xt(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  if (isNaN(n)) return Ie(e, NaN);
  if (!n)
    return a;
  const r = a.getDate(), l = Ie(e, a.getTime());
  l.setMonth(a.getMonth() + n + 1, 0);
  const s = l.getDate();
  return r >= s ? l : (a.setFullYear(
    l.getFullYear(),
    l.getMonth(),
    r
  ), a);
}
function Ur(e, n, t) {
  const {
    years: a = 0,
    months: r = 0,
    weeks: l = 0,
    days: s = 0,
    hours: o = 0,
    minutes: i = 0,
    seconds: h = 0
  } = n, m = ke(e, t == null ? void 0 : t.in), y = r || a ? xt(m, r + a * 12) : m, b = s || l ? yt(y, s + l * 7) : y, g = i + o * 60, f = (h + g * 60) * 1e3;
  return Ie(e, +b + f);
}
let Xs = {};
function ia() {
  return Xs;
}
function wt(e, n) {
  var o, i, h, m;
  const t = ia(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((i = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : i.weekStartsOn) ?? t.weekStartsOn ?? ((m = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? 0, r = ke(e, n == null ? void 0 : n.in), l = r.getDay(), s = (l < a ? 7 : 0) + l - a;
  return r.setDate(r.getDate() - s), r.setHours(0, 0, 0, 0), r;
}
function ba(e, n) {
  return wt(e, { ...n, weekStartsOn: 1 });
}
function Qr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear(), r = Ie(t, 0);
  r.setFullYear(a + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = ba(r), s = Ie(t, 0);
  s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0);
  const o = ba(s);
  return t.getTime() >= l.getTime() ? a + 1 : t.getTime() >= o.getTime() ? a : a - 1;
}
function nn(e) {
  const n = ke(e), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +e - +t;
}
function La(e, ...n) {
  const t = Ie.bind(
    null,
    n.find((a) => typeof a == "object")
  );
  return n.map(t);
}
function vr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Gr(e, n, t) {
  const [a, r] = La(
    t == null ? void 0 : t.in,
    e,
    n
  ), l = vr(a), s = vr(r), o = +l - nn(l), i = +s - nn(s);
  return Math.round((o - i) / Us);
}
function Zs(e, n) {
  const t = Qr(e, n), a = Ie(e, 0);
  return a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0), ba(a);
}
function Js(e, n, t) {
  return xt(e, n * 3, t);
}
function Qn(e, n, t) {
  return xt(e, n * 12, t);
}
function pr(e, n) {
  const t = +ke(e) - +ke(n);
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Kr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ra(e) {
  return !(!Kr(e) && typeof e != "number" || isNaN(+ke(e)));
}
function yr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function eo(e, n, t) {
  const [a, r] = La(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return a.getFullYear() - r.getFullYear();
}
function to(e) {
  return (n) => {
    const a = (e ? Math[e] : Math.trunc)(n);
    return a === 0 ? 0 : a;
  };
}
function ao(e, n, t) {
  const [a, r] = La(
    t == null ? void 0 : t.in,
    e,
    n
  ), l = pr(a, r), s = Math.abs(eo(a, r));
  a.setFullYear(1584), r.setFullYear(1584);
  const o = pr(a, r) === -l, i = l * (s - +o);
  return i === 0 ? 0 : i;
}
function Xr(e, n) {
  const [t, a] = La(e, n.start, n.end);
  return { start: t, end: a };
}
function Gn(e, n) {
  const { start: t, end: a } = Xr(n == null ? void 0 : n.in, e);
  let r = +t > +a;
  const l = r ? +t : +a, s = r ? a : t;
  s.setHours(0, 0, 0, 0);
  let o = 1;
  const i = [];
  for (; +s <= l; )
    i.push(Ie(t, s)), s.setDate(s.getDate() + o), s.setHours(0, 0, 0, 0);
  return r ? i.reverse() : i;
}
function Jt(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getMonth(), r = a - a % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function no(e, n) {
  const { start: t, end: a } = Xr(n == null ? void 0 : n.in, e);
  let r = +t > +a;
  const l = r ? +Jt(t) : +Jt(a);
  let s = Jt(r ? a : t), o = 1;
  const i = [];
  for (; +s <= l; )
    i.push(Ie(t, s)), s = Js(s, o);
  return r ? i.reverse() : i;
}
function ro(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Zr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear();
  return t.setFullYear(a + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function ya(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Kn(e, n) {
  var o, i, h, m;
  const t = ia(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((i = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : i.weekStartsOn) ?? t.weekStartsOn ?? ((m = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : m.weekStartsOn) ?? 0, r = ke(e, n == null ? void 0 : n.in), l = r.getDay(), s = (l < a ? -7 : 0) + 6 - (l - a);
  return r.setDate(r.getDate() + s), r.setHours(23, 59, 59, 999), r;
}
function gr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getMonth(), r = a - a % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const lo = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, so = (e, n, t) => {
  let a;
  const r = lo[e];
  return typeof r == "string" ? a = r : n === 1 ? a = r.one : a = r.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + a : a + " ago" : a;
};
function Tn(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const oo = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, io = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, uo = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, co = {
  date: Tn({
    formats: oo,
    defaultWidth: "full"
  }),
  time: Tn({
    formats: io,
    defaultWidth: "full"
  }),
  dateTime: Tn({
    formats: uo,
    defaultWidth: "full"
  })
}, fo = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, mo = (e, n, t, a) => fo[e];
function Aa(e) {
  return (n, t) => {
    const a = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (a === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, o = t != null && t.width ? String(t.width) : s;
      r = e.formattingValues[o] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, o = t != null && t.width ? String(t.width) : e.defaultWidth;
      r = e.values[o] || e.values[s];
    }
    const l = e.argumentCallback ? e.argumentCallback(n) : n;
    return r[l];
  };
}
const ho = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, po = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, yo = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, go = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, wo = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, bo = (e, n) => {
  const t = Number(e), a = t % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, ko = {
  ordinalNumber: bo,
  era: Aa({
    values: ho,
    defaultWidth: "wide"
  }),
  quarter: Aa({
    values: vo,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Aa({
    values: po,
    defaultWidth: "wide"
  }),
  day: Aa({
    values: yo,
    defaultWidth: "wide"
  }),
  dayPeriod: Aa({
    values: go,
    defaultWidth: "wide",
    formattingValues: wo,
    defaultFormattingWidth: "wide"
  })
};
function Sa(e) {
  return (n, t = {}) => {
    const a = t.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], l = n.match(r);
    if (!l)
      return null;
    const s = l[0], o = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(o) ? _o(o, (y) => y.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Do(o, (y) => y.test(s))
    );
    let h;
    h = e.valueCallback ? e.valueCallback(i) : i, h = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(h)
    ) : h;
    const m = n.slice(s.length);
    return { value: h, rest: m };
  };
}
function Do(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function _o(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function xo(e) {
  return (n, t = {}) => {
    const a = n.match(e.matchPattern);
    if (!a) return null;
    const r = a[0], l = n.match(e.parsePattern);
    if (!l) return null;
    let s = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const o = n.slice(r.length);
    return { value: s, rest: o };
  };
}
const Mo = /^(\d+)(th|st|nd|rd)?/i, To = /\d+/i, Po = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Oo = {
  any: [/^b/i, /^(a|c)/i]
}, Ao = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, So = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, $o = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Co = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Yo = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ro = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Eo = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Io = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Fo = {
  ordinalNumber: xo({
    matchPattern: Mo,
    parsePattern: To,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Sa({
    matchPatterns: Po,
    defaultMatchWidth: "wide",
    parsePatterns: Oo,
    defaultParseWidth: "any"
  }),
  quarter: Sa({
    matchPatterns: Ao,
    defaultMatchWidth: "wide",
    parsePatterns: So,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Sa({
    matchPatterns: $o,
    defaultMatchWidth: "wide",
    parsePatterns: Co,
    defaultParseWidth: "any"
  }),
  day: Sa({
    matchPatterns: Yo,
    defaultMatchWidth: "wide",
    parsePatterns: Ro,
    defaultParseWidth: "any"
  }),
  dayPeriod: Sa({
    matchPatterns: Eo,
    defaultMatchWidth: "any",
    parsePatterns: Io,
    defaultParseWidth: "any"
  })
}, Jr = {
  code: "en-US",
  formatDistance: so,
  formatLong: co,
  formatRelative: mo,
  localize: ko,
  match: Fo,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Bo(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return Gr(t, ya(t)) + 1;
}
function Xn(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = +ba(t) - +Zs(t);
  return Math.round(a / jr) + 1;
}
function Zn(e, n) {
  var m, y, b, g;
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear(), r = ia(), l = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((y = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = Ie((n == null ? void 0 : n.in) || e, 0);
  s.setFullYear(a + 1, 0, l), s.setHours(0, 0, 0, 0);
  const o = wt(s, n), i = Ie((n == null ? void 0 : n.in) || e, 0);
  i.setFullYear(a, 0, l), i.setHours(0, 0, 0, 0);
  const h = wt(i, n);
  return +t >= +o ? a + 1 : +t >= +h ? a : a - 1;
}
function Wo(e, n) {
  var o, i, h, m;
  const t = ia(), a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((i = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : i.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((m = (h = t.locale) == null ? void 0 : h.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, r = Zn(e, n), l = Ie((n == null ? void 0 : n.in) || e, 0);
  return l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0), wt(l, n);
}
function Jn(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = +wt(t, n) - +Wo(t, n);
  return Math.round(a / jr) + 1;
}
function Ee(e, n) {
  const t = e < 0 ? "-" : "", a = Math.abs(e).toString().padStart(n, "0");
  return t + a;
}
const Vt = {
  // Year
  y(e, n) {
    const t = e.getFullYear(), a = t > 0 ? t : 1 - t;
    return Ee(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M(e, n) {
    const t = e.getMonth();
    return n === "M" ? String(t + 1) : Ee(t + 1, 2);
  },
  // Day of the month
  d(e, n) {
    return Ee(e.getDate(), n.length);
  },
  // AM or PM
  a(e, n) {
    const t = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.toUpperCase();
      case "aaa":
        return t;
      case "aaaaa":
        return t[0];
      case "aaaa":
      default:
        return t === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, n) {
    return Ee(e.getHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H(e, n) {
    return Ee(e.getHours(), n.length);
  },
  // Minute
  m(e, n) {
    return Ee(e.getMinutes(), n.length);
  },
  // Second
  s(e, n) {
    return Ee(e.getSeconds(), n.length);
  },
  // Fraction of second
  S(e, n) {
    const t = n.length, a = e.getMilliseconds(), r = Math.trunc(
      a * Math.pow(10, t - 3)
    );
    return Ee(r, n.length);
  }
}, ca = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, wr = {
  // Era
  G: function(e, n, t) {
    const a = e.getFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return t.era(a, { width: "abbreviated" });
      case "GGGGG":
        return t.era(a, { width: "narrow" });
      case "GGGG":
      default:
        return t.era(a, { width: "wide" });
    }
  },
  // Year
  y: function(e, n, t) {
    if (n === "yo") {
      const a = e.getFullYear(), r = a > 0 ? a : 1 - a;
      return t.ordinalNumber(r, { unit: "year" });
    }
    return Vt.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, a) {
    const r = Zn(e, a), l = r > 0 ? r : 1 - r;
    if (n === "YY") {
      const s = l % 100;
      return Ee(s, 2);
    }
    return n === "Yo" ? t.ordinalNumber(l, { unit: "year" }) : Ee(l, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = Qr(e);
    return Ee(t, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, n) {
    const t = e.getFullYear();
    return Ee(t, n.length);
  },
  // Quarter
  Q: function(e, n, t) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return Ee(a, 2);
      case "Qo":
        return t.ordinalNumber(a, { unit: "quarter" });
      case "QQQ":
        return t.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, n, t) {
    const a = Math.ceil((e.getMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return Ee(a, 2);
      case "qo":
        return t.ordinalNumber(a, { unit: "quarter" });
      case "qqq":
        return t.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return t.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return t.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, n, t) {
    const a = e.getMonth();
    switch (n) {
      case "M":
      case "MM":
        return Vt.M(e, n);
      case "Mo":
        return t.ordinalNumber(a + 1, { unit: "month" });
      case "MMM":
        return t.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return t.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return t.month(a, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, n, t) {
    const a = e.getMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return Ee(a + 1, 2);
      case "Lo":
        return t.ordinalNumber(a + 1, { unit: "month" });
      case "LLL":
        return t.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return t.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(a, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, n, t, a) {
    const r = Jn(e, a);
    return n === "wo" ? t.ordinalNumber(r, { unit: "week" }) : Ee(r, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const a = Xn(e);
    return n === "Io" ? t.ordinalNumber(a, { unit: "week" }) : Ee(a, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Vt.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const a = Bo(e);
    return n === "Do" ? t.ordinalNumber(a, { unit: "dayOfYear" }) : Ee(a, n.length);
  },
  // Day of week
  E: function(e, n, t) {
    const a = e.getDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return t.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return t.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return t.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return t.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, n, t, a) {
    const r = e.getDay(), l = (r - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(l);
      case "ee":
        return Ee(l, 2);
      case "eo":
        return t.ordinalNumber(l, { unit: "day" });
      case "eee":
        return t.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return t.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return t.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, n, t, a) {
    const r = e.getDay(), l = (r - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(l);
      case "cc":
        return Ee(l, n.length);
      case "co":
        return t.ordinalNumber(l, { unit: "day" });
      case "ccc":
        return t.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return t.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return t.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return t.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, n, t) {
    const a = e.getDay(), r = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(r);
      case "ii":
        return Ee(r, n.length);
      case "io":
        return t.ordinalNumber(r, { unit: "day" });
      case "iii":
        return t.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return t.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return t.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return t.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, n, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, n, t) {
    const a = e.getHours();
    let r;
    switch (a === 12 ? r = ca.noon : a === 0 ? r = ca.midnight : r = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, n, t) {
    const a = e.getHours();
    let r;
    switch (a >= 17 ? r = ca.evening : a >= 12 ? r = ca.afternoon : a >= 4 ? r = ca.morning : r = ca.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return t.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return t.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return t.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, n, t) {
    if (n === "ho") {
      let a = e.getHours() % 12;
      return a === 0 && (a = 12), t.ordinalNumber(a, { unit: "hour" });
    }
    return Vt.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Vt.H(e, n);
  },
  // Hour [0-11]
  K: function(e, n, t) {
    const a = e.getHours() % 12;
    return n === "Ko" ? t.ordinalNumber(a, { unit: "hour" }) : Ee(a, n.length);
  },
  // Hour [1-24]
  k: function(e, n, t) {
    let a = e.getHours();
    return a === 0 && (a = 24), n === "ko" ? t.ordinalNumber(a, { unit: "hour" }) : Ee(a, n.length);
  },
  // Minute
  m: function(e, n, t) {
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Vt.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Vt.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return Vt.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const a = e.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (n) {
      case "X":
        return kr(a);
      case "XXXX":
      case "XX":
        return Zt(a);
      case "XXXXX":
      case "XXX":
      default:
        return Zt(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const a = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return kr(a);
      case "xxxx":
      case "xx":
        return Zt(a);
      case "xxxxx":
      case "xxx":
      default:
        return Zt(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const a = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + br(a, ":");
      case "OOOO":
      default:
        return "GMT" + Zt(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const a = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + br(a, ":");
      case "zzzz":
      default:
        return "GMT" + Zt(a, ":");
    }
  },
  // Seconds timestamp
  t: function(e, n, t) {
    const a = Math.trunc(+e / 1e3);
    return Ee(a, n.length);
  },
  // Milliseconds timestamp
  T: function(e, n, t) {
    return Ee(+e, n.length);
  }
};
function br(e, n = "") {
  const t = e > 0 ? "-" : "+", a = Math.abs(e), r = Math.trunc(a / 60), l = a % 60;
  return l === 0 ? t + String(r) : t + String(r) + n + Ee(l, 2);
}
function kr(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ee(Math.abs(e) / 60, 2) : Zt(e, n);
}
function Zt(e, n = "") {
  const t = e > 0 ? "-" : "+", a = Math.abs(e), r = Ee(Math.trunc(a / 60), 2), l = Ee(a % 60, 2);
  return t + r + n + l;
}
const Dr = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, el = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, No = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], a = t[1], r = t[2];
  if (!r)
    return Dr(e, n);
  let l;
  switch (a) {
    case "P":
      l = n.dateTime({ width: "short" });
      break;
    case "PP":
      l = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      l = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      l = n.dateTime({ width: "full" });
      break;
  }
  return l.replace("{{date}}", Dr(a, n)).replace("{{time}}", el(r, n));
}, Fn = {
  p: el,
  P: No
}, Lo = /^D+$/, Ho = /^Y+$/, Vo = ["D", "DD", "YY", "YYYY"];
function tl(e) {
  return Lo.test(e);
}
function al(e) {
  return Ho.test(e);
}
function Bn(e, n, t) {
  const a = qo(e, n, t);
  if (console.warn(a), Vo.includes(e)) throw new RangeError(a);
}
function qo(e, n, t) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${a} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const zo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, jo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Uo = /^'([^]*?)'?$/, Qo = /''/g, Go = /[a-zA-Z]/;
function pt(e, n, t) {
  var m, y, b, g, D, f, p, u;
  const a = ia(), r = (t == null ? void 0 : t.locale) ?? a.locale ?? Jr, l = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((y = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : y.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((g = (b = a.locale) == null ? void 0 : b.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((f = (D = t == null ? void 0 : t.locale) == null ? void 0 : D.options) == null ? void 0 : f.weekStartsOn) ?? a.weekStartsOn ?? ((u = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ke(e, t == null ? void 0 : t.in);
  if (!Ra(o))
    throw new RangeError("Invalid time value");
  let i = n.match(jo).map((d) => {
    const v = d[0];
    if (v === "p" || v === "P") {
      const $ = Fn[v];
      return $(d, r.formatLong);
    }
    return d;
  }).join("").match(zo).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const v = d[0];
    if (v === "'")
      return { isToken: !1, value: Ko(d) };
    if (wr[v])
      return { isToken: !0, value: d };
    if (v.match(Go))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: d };
  });
  r.localize.preprocessor && (i = r.localize.preprocessor(o, i));
  const h = {
    firstWeekContainsDate: l,
    weekStartsOn: s,
    locale: r
  };
  return i.map((d) => {
    if (!d.isToken) return d.value;
    const v = d.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && al(v) || !(t != null && t.useAdditionalDayOfYearTokens) && tl(v)) && Bn(v, n, String(e));
    const $ = wr[v[0]];
    return $(o, v, r.localize, h);
  }).join("");
}
function Ko(e) {
  const n = e.match(Uo);
  return n ? n[1].replace(Qo, "'") : e;
}
function Xo(e, n) {
  return ke(e, n == null ? void 0 : n.in).getDay();
}
function Zo(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear(), r = t.getMonth(), l = Ie(t, 0);
  return l.setFullYear(a, r + 1, 0), l.setHours(0, 0, 0, 0), l.getDate();
}
function Jo() {
  return Object.assign({}, ia());
}
function Yt(e, n) {
  return ke(e, n == null ? void 0 : n.in).getHours();
}
function ei(e, n) {
  const t = ke(e, n == null ? void 0 : n.in).getDay();
  return t === 0 ? 7 : t;
}
function Lt(e, n) {
  return ke(e, n == null ? void 0 : n.in).getMinutes();
}
function Ce(e, n) {
  return ke(e, n == null ? void 0 : n.in).getMonth();
}
function Ut(e) {
  return ke(e).getSeconds();
}
function _e(e, n) {
  return ke(e, n == null ? void 0 : n.in).getFullYear();
}
function sa(e, n) {
  return +ke(e) > +ke(n);
}
function ka(e, n) {
  return +ke(e) < +ke(n);
}
function fa(e, n) {
  return +ke(e) == +ke(n);
}
function ti(e, n) {
  const t = ai(n) ? new n(0) : Ie(n, 0);
  return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), t.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), t;
}
function ai(e) {
  var n;
  return typeof e == "function" && ((n = e.prototype) == null ? void 0 : n.constructor) === e;
}
const ni = 10;
class nl {
  constructor() {
    me(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class ri extends nl {
  constructor(n, t, a, r, l) {
    super(), this.value = n, this.validateValue = t, this.setValue = a, this.priority = r, l && (this.subPriority = l);
  }
  validate(n, t) {
    return this.validateValue(n, this.value, t);
  }
  set(n, t, a) {
    return this.setValue(n, t, this.value, a);
  }
}
class li extends nl {
  constructor(t, a) {
    super();
    me(this, "priority", ni);
    me(this, "subPriority", -1);
    this.context = t || ((r) => Ie(a, r));
  }
  set(t, a) {
    return a.timestampIsSet ? t : Ie(t, ti(t, this.context));
  }
}
class Re {
  run(n, t, a, r) {
    const l = this.parse(n, t, a, r);
    return l ? {
      setter: new ri(
        l.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: l.rest
    } : null;
  }
  validate(n, t, a) {
    return !0;
  }
}
class si extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 140);
    me(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, a, r) {
    return a.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const Qe = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, Pt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ge(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function qe(e, n) {
  const t = n.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function Ot(e, n) {
  const t = n.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const a = t[1] === "+" ? 1 : -1, r = t[2] ? parseInt(t[2], 10) : 0, l = t[3] ? parseInt(t[3], 10) : 0, s = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: a * (r * Gs + l * Qs + s * Ks),
    rest: n.slice(t[0].length)
  };
}
function rl(e) {
  return qe(Qe.anyDigitsSigned, e);
}
function je(e, n) {
  switch (e) {
    case 1:
      return qe(Qe.singleDigit, n);
    case 2:
      return qe(Qe.twoDigits, n);
    case 3:
      return qe(Qe.threeDigits, n);
    case 4:
      return qe(Qe.fourDigits, n);
    default:
      return qe(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function rn(e, n) {
  switch (e) {
    case 1:
      return qe(Qe.singleDigitSigned, n);
    case 2:
      return qe(Qe.twoDigitsSigned, n);
    case 3:
      return qe(Qe.threeDigitsSigned, n);
    case 4:
      return qe(Qe.fourDigitsSigned, n);
    default:
      return qe(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function er(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function ll(e, n) {
  const t = n > 0, a = t ? n : 1 - n;
  let r;
  if (a <= 50)
    r = e || 100;
  else {
    const l = a + 50, s = Math.trunc(l / 100) * 100, o = e >= l % 100;
    r = e + s - (o ? 100 : 0);
  }
  return t ? r : 1 - r;
}
function sl(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class oi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, a, r) {
    const l = (s) => ({
      year: s,
      isTwoDigitYear: a === "yy"
    });
    switch (a) {
      case "y":
        return Ge(je(4, t), l);
      case "yo":
        return Ge(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          l
        );
      default:
        return Ge(je(a.length, t), l);
    }
  }
  validate(t, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(t, a, r) {
    const l = t.getFullYear();
    if (r.isTwoDigitYear) {
      const o = ll(
        r.year,
        l
      );
      return t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in a) || a.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ii extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    const l = (s) => ({
      year: s,
      isTwoDigitYear: a === "YY"
    });
    switch (a) {
      case "Y":
        return Ge(je(4, t), l);
      case "Yo":
        return Ge(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          l
        );
      default:
        return Ge(je(a.length, t), l);
    }
  }
  validate(t, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(t, a, r, l) {
    const s = Zn(t, l);
    if (r.isTwoDigitYear) {
      const i = ll(
        r.year,
        s
      );
      return t.setFullYear(
        i,
        0,
        l.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), wt(t, l);
    }
    const o = !("era" in a) || a.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(o, 0, l.firstWeekContainsDate), t.setHours(0, 0, 0, 0), wt(t, l);
  }
}
class ui extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a) {
    return rn(a === "R" ? 4 : a.length, t);
  }
  set(t, a, r) {
    const l = Ie(t, 0);
    return l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0), ba(l);
  }
}
class ci extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, a) {
    return rn(a === "u" ? 4 : a.length, t);
  }
  set(t, a, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class di extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 120);
    me(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "Q":
      case "QQ":
        return je(a.length, t);
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 4;
  }
  set(t, a, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class fi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 120);
    me(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "q":
      case "qq":
        return je(a.length, t);
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 4;
  }
  set(t, a, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class mi extends Re {
  constructor() {
    super(...arguments);
    me(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    me(this, "priority", 110);
  }
  parse(t, a, r) {
    const l = (s) => s - 1;
    switch (a) {
      case "M":
        return Ge(
          qe(Qe.month, t),
          l
        );
      case "MM":
        return Ge(je(2, t), l);
      case "Mo":
        return Ge(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          l
        );
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 11;
  }
  set(t, a, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class hi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 110);
    me(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    const l = (s) => s - 1;
    switch (a) {
      case "L":
        return Ge(
          qe(Qe.month, t),
          l
        );
      case "LL":
        return Ge(je(2, t), l);
      case "Lo":
        return Ge(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          l
        );
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 11;
  }
  set(t, a, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function vi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = Jn(a, t) - n;
  return a.setDate(a.getDate() - r * 7), ke(a, t == null ? void 0 : t.in);
}
class pi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 100);
    me(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "w":
        return qe(Qe.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 53;
  }
  set(t, a, r, l) {
    return wt(vi(t, r, l), l);
  }
}
function yi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = Xn(a, t) - n;
  return a.setDate(a.getDate() - r * 7), a;
}
class gi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 100);
    me(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "I":
        return qe(Qe.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 53;
  }
  set(t, a, r) {
    return ba(yi(t, r));
  }
}
const wi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], bi = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class ki extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "subPriority", 1);
    me(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "d":
        return qe(Qe.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    const r = t.getFullYear(), l = sl(r), s = t.getMonth();
    return l ? a >= 1 && a <= bi[s] : a >= 1 && a <= wi[s];
  }
  set(t, a, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
}
class Di extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "subpriority", 1);
    me(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "D":
      case "DD":
        return qe(Qe.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    const r = t.getFullYear();
    return sl(r) ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
  }
  set(t, a, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
}
function tr(e, n, t) {
  var y, b, g, D;
  const a = ia(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((b = (y = t == null ? void 0 : t.locale) == null ? void 0 : y.options) == null ? void 0 : b.weekStartsOn) ?? a.weekStartsOn ?? ((D = (g = a.locale) == null ? void 0 : g.options) == null ? void 0 : D.weekStartsOn) ?? 0, l = ke(e, t == null ? void 0 : t.in), s = l.getDay(), i = (n % 7 + 7) % 7, h = 7 - r, m = n < 0 || n > 6 ? n - (s + h) % 7 : (i + h) % 7 - (s + h) % 7;
  return yt(l, m, t);
}
class _i extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 6;
  }
  set(t, a, r, l) {
    return t = tr(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
class xi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r, l) {
    const s = (o) => {
      const i = Math.floor((o - 1) / 7) * 7;
      return (o + l.weekStartsOn + 6) % 7 + i;
    };
    switch (a) {
      case "e":
      case "ee":
        return Ge(je(a.length, t), s);
      case "eo":
        return Ge(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 6;
  }
  set(t, a, r, l) {
    return t = tr(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
class Mi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, a, r, l) {
    const s = (o) => {
      const i = Math.floor((o - 1) / 7) * 7;
      return (o + l.weekStartsOn + 6) % 7 + i;
    };
    switch (a) {
      case "c":
      case "cc":
        return Ge(je(a.length, t), s);
      case "co":
        return Ge(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 6;
  }
  set(t, a, r, l) {
    return t = tr(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
function Ti(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = ei(a, t), l = n - r;
  return yt(a, l, t);
}
class Pi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 90);
    me(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    const l = (s) => s === 0 ? 7 : s;
    switch (a) {
      case "i":
      case "ii":
        return je(a.length, t);
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      case "iii":
        return Ge(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiiii":
        return Ge(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiiiii":
        return Ge(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
      case "iiii":
      default:
        return Ge(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          l
        );
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 7;
  }
  set(t, a, r) {
    return t = Ti(t, r), t.setHours(0, 0, 0, 0), t;
  }
}
class Oi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 80);
    me(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, a, r) {
    return t.setHours(er(r), 0, 0, 0), t;
  }
}
class Ai extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 80);
    me(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, a, r) {
    return t.setHours(er(r), 0, 0, 0), t;
  }
}
class Si extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 80);
    me(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, a, r) {
    return t.setHours(er(r), 0, 0, 0), t;
  }
}
class $i extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "h":
        return qe(Qe.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 12;
  }
  set(t, a, r) {
    const l = t.getHours() >= 12;
    return l && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !l && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Ci extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "H":
        return qe(Qe.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 23;
  }
  set(t, a, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
}
class Yi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "K":
        return qe(Qe.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 11;
  }
  set(t, a, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Ri extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "k":
        return qe(Qe.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 24;
  }
  set(t, a, r) {
    const l = r <= 24 ? r % 24 : r;
    return t.setHours(l, 0, 0, 0), t;
  }
}
class Ei extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 60);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "m":
        return qe(Qe.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 59;
  }
  set(t, a, r) {
    return t.setMinutes(r, 0, 0), t;
  }
}
class Ii extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 50);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "s":
        return qe(Qe.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return je(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 59;
  }
  set(t, a, r) {
    return t.setSeconds(r, 0), t;
  }
}
class Fi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 30);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a) {
    const r = (l) => Math.trunc(l * Math.pow(10, -a.length + 3));
    return Ge(je(a.length, t), r);
  }
  set(t, a, r) {
    return t.setMilliseconds(r), t;
  }
}
class Bi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 10);
    me(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, a) {
    switch (a) {
      case "X":
        return Ot(
          Pt.basicOptionalMinutes,
          t
        );
      case "XX":
        return Ot(Pt.basic, t);
      case "XXXX":
        return Ot(
          Pt.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Ot(
          Pt.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Ot(Pt.extended, t);
    }
  }
  set(t, a, r) {
    return a.timestampIsSet ? t : Ie(
      t,
      t.getTime() - nn(t) - r
    );
  }
}
class Wi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 10);
    me(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, a) {
    switch (a) {
      case "x":
        return Ot(
          Pt.basicOptionalMinutes,
          t
        );
      case "xx":
        return Ot(Pt.basic, t);
      case "xxxx":
        return Ot(
          Pt.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Ot(
          Pt.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Ot(Pt.extended, t);
    }
  }
  set(t, a, r) {
    return a.timestampIsSet ? t : Ie(
      t,
      t.getTime() - nn(t) - r
    );
  }
}
class Ni extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 40);
    me(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return rl(t);
  }
  set(t, a, r) {
    return [Ie(t, r * 1e3), { timestampIsSet: !0 }];
  }
}
class Li extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 20);
    me(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return rl(t);
  }
  set(t, a, r) {
    return [Ie(t, r), { timestampIsSet: !0 }];
  }
}
const Hi = {
  G: new si(),
  y: new oi(),
  Y: new ii(),
  R: new ui(),
  u: new ci(),
  Q: new di(),
  q: new fi(),
  M: new mi(),
  L: new hi(),
  w: new pi(),
  I: new gi(),
  d: new ki(),
  D: new Di(),
  E: new _i(),
  e: new xi(),
  c: new Mi(),
  i: new Pi(),
  a: new Oi(),
  b: new Ai(),
  B: new Si(),
  h: new $i(),
  H: new Ci(),
  K: new Yi(),
  k: new Ri(),
  m: new Ei(),
  s: new Ii(),
  S: new Fi(),
  X: new Bi(),
  x: new Wi(),
  t: new Ni(),
  T: new Li()
}, Vi = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, qi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, zi = /^'([^]*?)'?$/, ji = /''/g, Ui = /\S/, Qi = /[a-zA-Z]/;
function Wn(e, n, t, a) {
  var p, u, d, v, $, W, Z, x;
  const r = () => Ie((a == null ? void 0 : a.in) || t, NaN), l = Jo(), s = (a == null ? void 0 : a.locale) ?? l.locale ?? Jr, o = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((u = (p = a == null ? void 0 : a.locale) == null ? void 0 : p.options) == null ? void 0 : u.firstWeekContainsDate) ?? l.firstWeekContainsDate ?? ((v = (d = l.locale) == null ? void 0 : d.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (a == null ? void 0 : a.weekStartsOn) ?? ((W = ($ = a == null ? void 0 : a.locale) == null ? void 0 : $.options) == null ? void 0 : W.weekStartsOn) ?? l.weekStartsOn ?? ((x = (Z = l.locale) == null ? void 0 : Z.options) == null ? void 0 : x.weekStartsOn) ?? 0;
  if (!n)
    return e ? r() : ke(t, a == null ? void 0 : a.in);
  const h = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: s
  }, m = [new li(a == null ? void 0 : a.in, t)], y = n.match(qi).map((_) => {
    const I = _[0];
    if (I in Fn) {
      const S = Fn[I];
      return S(_, s.formatLong);
    }
    return _;
  }).join("").match(Vi), b = [];
  for (let _ of y) {
    !(a != null && a.useAdditionalWeekYearTokens) && al(_) && Bn(_, n, e), !(a != null && a.useAdditionalDayOfYearTokens) && tl(_) && Bn(_, n, e);
    const I = _[0], S = Hi[I];
    if (S) {
      const { incompatibleTokens: j } = S;
      if (Array.isArray(j)) {
        const J = b.find(
          (z) => j.includes(z.token) || z.token === I
        );
        if (J)
          throw new RangeError(
            `The format string mustn't contain \`${J.fullToken}\` and \`${_}\` at the same time`
          );
      } else if (S.incompatibleTokens === "*" && b.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${_}\` and any other token at the same time`
        );
      b.push({ token: I, fullToken: _ });
      const U = S.run(
        e,
        _,
        s.match,
        h
      );
      if (!U)
        return r();
      m.push(U.setter), e = U.rest;
    } else {
      if (I.match(Qi))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + I + "`"
        );
      if (_ === "''" ? _ = "'" : I === "'" && (_ = Gi(_)), e.indexOf(_) === 0)
        e = e.slice(_.length);
      else
        return r();
    }
  }
  if (e.length > 0 && Ui.test(e))
    return r();
  const g = m.map((_) => _.priority).sort((_, I) => I - _).filter((_, I, S) => S.indexOf(_) === I).map(
    (_) => m.filter((I) => I.priority === _).sort((I, S) => S.subPriority - I.subPriority)
  ).map((_) => _[0]);
  let D = ke(t, a == null ? void 0 : a.in);
  if (isNaN(+D)) return r();
  const f = {};
  for (const _ of g) {
    if (!_.validate(D, h))
      return r();
    const I = _.set(D, f, h);
    Array.isArray(I) ? (D = I[0], Object.assign(f, I[1])) : D = I;
  }
  return D;
}
function Gi(e) {
  return e.match(zi)[1].replace(ji, "'");
}
function _r(e, n, t) {
  const [a, r] = La(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +Jt(a) == +Jt(r);
}
function ol(e, n, t) {
  return yt(e, -n, t);
}
function Ki(e, n) {
  const t = (n == null ? void 0 : n.nearestTo) ?? 1;
  if (t < 1 || t > 30) return Ie(e, NaN);
  const a = ke(e, n == null ? void 0 : n.in), r = a.getSeconds() / 60, l = a.getMilliseconds() / 1e3 / 60, s = a.getMinutes() + r + l, o = (n == null ? void 0 : n.roundingMethod) ?? "round", h = to(o)(s / t) * t;
  return a.setMinutes(h, 0, 0), a;
}
function il(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = a.getFullYear(), l = a.getDate(), s = Ie(e, 0);
  s.setFullYear(r, n, 15), s.setHours(0, 0, 0, 0);
  const o = Zo(s);
  return a.setMonth(n, Math.min(l, o)), a;
}
function Se(e, n, t) {
  let a = ke(e, t == null ? void 0 : t.in);
  return isNaN(+a) ? Ie(e, NaN) : (n.year != null && a.setFullYear(n.year), n.month != null && (a = il(a, n.month)), n.date != null && a.setDate(n.date), n.hours != null && a.setHours(n.hours), n.minutes != null && a.setMinutes(n.minutes), n.seconds != null && a.setSeconds(n.seconds), n.milliseconds != null && a.setMilliseconds(n.milliseconds), a);
}
function Xi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  return a.setMilliseconds(n), a;
}
function Zi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  return a.setSeconds(n), a;
}
function _t(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  return isNaN(+a) ? Ie(e, NaN) : (a.setFullYear(n), a);
}
function Da(e, n, t) {
  return xt(e, -n, t);
}
function Ji(e, n, t) {
  const {
    years: a = 0,
    months: r = 0,
    weeks: l = 0,
    days: s = 0,
    hours: o = 0,
    minutes: i = 0,
    seconds: h = 0
  } = n, m = Da(e, r + a * 12, t), y = ol(m, s + l * 7, t), b = i + o * 60, D = (h + b * 60) * 1e3;
  return Ie(e, +y - D);
}
function ul(e, n, t) {
  return Qn(e, -n, t);
}
function eu(e, n, t = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: t
  }).format(n).split(/\s/g).slice(2).join(" ");
}
const Pn = {}, Ya = {};
function ea(e, n) {
  try {
    const a = (Pn[e] || (Pn[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(n).split("GMT")[1];
    return a in Ya ? Ya[a] : xr(a, a.split(":"));
  } catch {
    if (e in Ya) return Ya[e];
    const t = e == null ? void 0 : e.match(tu);
    return t ? xr(e, t.slice(1)) : NaN;
  }
}
const tu = /([+-]\d\d):?(\d\d)?/;
function xr(e, n) {
  const t = +(n[0] || 0), a = +(n[1] || 0), r = +(n[2] || 0) / 60;
  return Ya[e] = t * 60 + a > 0 ? t * 60 + a + r : t * 60 - a - r;
}
class St extends Date {
  //#region static
  constructor(...n) {
    super(), n.length > 1 && typeof n[n.length - 1] == "string" && (this.timeZone = n.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(ea(this.timeZone, this)) ? this.setTime(NaN) : n.length ? typeof n[0] == "number" && (n.length === 1 || n.length === 2 && typeof n[1] != "number") ? this.setTime(n[0]) : typeof n[0] == "string" ? this.setTime(+new Date(n[0])) : n[0] instanceof Date ? this.setTime(+n[0]) : (this.setTime(+new Date(...n)), cl(this), Nn(this)) : this.setTime(Date.now());
  }
  static tz(n, ...t) {
    return t.length ? new St(...t, n) : new St(Date.now(), n);
  }
  //#endregion
  //#region time zone
  withTimeZone(n) {
    return new St(+this, n);
  }
  getTimezoneOffset() {
    const n = -ea(this.timeZone, this);
    return n > 0 ? Math.floor(n) : Math.ceil(n);
  }
  //#endregion
  //#region time
  setTime(n) {
    return Date.prototype.setTime.apply(this, arguments), Nn(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](n) {
    return new St(+new Date(n), this.timeZone);
  }
  //#endregion
}
const Mr = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Mr.test(e)) return;
  const n = e.replace(Mr, "$1UTC");
  St.prototype[n] && (e.startsWith("get") ? St.prototype[e] = function() {
    return this.internal[n]();
  } : (St.prototype[e] = function() {
    return Date.prototype[n].apply(this.internal, arguments), au(this), +this;
  }, St.prototype[n] = function() {
    return Date.prototype[n].apply(this, arguments), Nn(this), +this;
  }));
});
function Nn(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-ea(e.timeZone, e) * 60));
}
function au(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), cl(e);
}
function cl(e) {
  const n = ea(e.timeZone, e), t = n > 0 ? Math.floor(n) : Math.ceil(n), a = /* @__PURE__ */ new Date(+e);
  a.setUTCHours(a.getUTCHours() - 1);
  const r = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), l = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), s = r - l, o = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && o && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const i = r - t;
  i && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + i);
  const h = /* @__PURE__ */ new Date(+e);
  h.setUTCSeconds(0);
  const m = r > 0 ? h.getSeconds() : (h.getSeconds() - 60) % 60, y = Math.round(-(ea(e.timeZone, e) * 60)) % 60;
  (y || m) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + y), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + y + m));
  const b = ea(e.timeZone, e), g = b > 0 ? Math.floor(b) : Math.ceil(b), f = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - g, p = g !== t, u = f - i;
  if (p && u) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
    const d = ea(e.timeZone, e), v = d > 0 ? Math.floor(d) : Math.ceil(d), $ = g - v;
    $ && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + $), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + $));
  }
}
class ma extends St {
  //#region static
  static tz(n, ...t) {
    return t.length ? new ma(...t, n) : new ma(Date.now(), n);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [n, t, a] = this.tzComponents(), r = `${n}${t}:${a}`;
    return this.internal.toISOString().slice(0, -1) + r;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [n, t, a, r] = this.internal.toUTCString().split(" ");
    return `${n == null ? void 0 : n.slice(0, -1)} ${a} ${t} ${r}`;
  }
  toTimeString() {
    const n = this.internal.toUTCString().split(" ")[4], [t, a, r] = this.tzComponents();
    return `${n} GMT${t}${a}${r} (${eu(this.timeZone, this)})`;
  }
  toLocaleString(n, t) {
    return Date.prototype.toLocaleString.call(this, n, {
      ...t,
      timeZone: (t == null ? void 0 : t.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(n, t) {
    return Date.prototype.toLocaleDateString.call(this, n, {
      ...t,
      timeZone: (t == null ? void 0 : t.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(n, t) {
    return Date.prototype.toLocaleTimeString.call(this, n, {
      ...t,
      timeZone: (t == null ? void 0 : t.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const n = this.getTimezoneOffset(), t = n > 0 ? "-" : "+", a = String(Math.floor(Math.abs(n) / 60)).padStart(2, "0"), r = String(Math.abs(n) % 60).padStart(2, "0");
    return [t, a, r];
  }
  //#endregion
  withTimeZone(n) {
    return new ma(+this, n);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](n) {
    return new ma(+new Date(n), this.timeZone);
  }
  //#endregion
}
function Ha() {
  return Xe(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Xe("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Xe("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Xe("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Xe("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function nu() {
  return Xe(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Xe("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Xe("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function dl() {
  return Xe(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Xe("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function fl() {
  return Xe(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Xe("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function ml() {
  return Xe(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Xe("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Xe("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function hl() {
  return Xe(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Xe("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function vl() {
  return Xe(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      Xe("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const He = na({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), On = he(null), Ka = he(!1), An = he(!1), Sn = he(!1), $n = he(!1), rt = he(0), Ue = he(0), Gt = () => {
  const e = X(() => Ka.value ? [...He.selectionGrid, He.actionRow].filter((y) => y.length) : An.value ? [
    ...He.timePicker[0],
    ...He.timePicker[1],
    $n.value ? [] : [On.value],
    He.actionRow
  ].filter((y) => y.length) : Sn.value ? [...He.monthPicker, He.actionRow] : [He.monthYear, ...He.calendar, He.time, He.actionRow].filter((y) => y.length)), n = (y) => {
    rt.value = y ? rt.value + 1 : rt.value - 1;
    let b = null;
    e.value[Ue.value] && (b = e.value[Ue.value][rt.value]), !b && e.value[Ue.value + (y ? 1 : -1)] ? (Ue.value = Ue.value + (y ? 1 : -1), rt.value = y ? 0 : e.value[Ue.value].length - 1) : b || (rt.value = y ? rt.value - 1 : rt.value + 1);
  }, t = (y) => {
    Ue.value === 0 && !y || Ue.value === e.value.length && y || (Ue.value = y ? Ue.value + 1 : Ue.value - 1, e.value[Ue.value] ? e.value[Ue.value] && !e.value[Ue.value][rt.value] && rt.value !== 0 && (rt.value = e.value[Ue.value].length - 1) : Ue.value = y ? Ue.value - 1 : Ue.value + 1);
  }, a = (y) => {
    let b = null;
    e.value[Ue.value] && (b = e.value[Ue.value][rt.value]), b ? b.focus({ preventScroll: !Ka.value }) : rt.value = y ? rt.value - 1 : rt.value + 1;
  }, r = () => {
    n(!0), a(!0);
  }, l = () => {
    n(!1), a(!1);
  }, s = () => {
    t(!1), a(!0);
  }, o = () => {
    t(!0), a(!0);
  }, i = (y, b) => {
    He[b] = y;
  }, h = (y, b) => {
    He[b] = y;
  }, m = () => {
    rt.value = 0, Ue.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: h,
    setTimePickerBackRef: (y) => {
      On.value = y;
    },
    setSelectionGrid: (y) => {
      Ka.value = y, m(), y || (He.selectionGrid = []);
    },
    setTimePicker: (y, b = !1) => {
      An.value = y, $n.value = b, m(), y || (He.timePicker[0] = [], He.timePicker[1] = []);
    },
    setTimePickerElements: (y, b = 0) => {
      He.timePicker[b] = y;
    },
    arrowRight: r,
    arrowLeft: l,
    arrowUp: s,
    arrowDown: o,
    clearArrowNav: () => {
      He.monthYear = [], He.calendar = [], He.time = [], He.actionRow = [], He.selectionGrid = [], He.timePicker[0] = [], He.timePicker[1] = [], Ka.value = !1, An.value = !1, $n.value = !1, Sn.value = !1, m(), On.value = null;
    },
    setMonthPicker: (y) => {
      Sn.value = y, m();
    },
    refSets: He
    // exposed for testing
  };
};
var Dt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Dt || {}), aa = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(aa || {}), ut = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(ut || {});
const ru = ["timestamp", "date", "iso"];
var ot = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(ot || {}), Ve = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Ve || {}), ha = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(ha || {});
const lu = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: n, isValidDate: t } = bt(), { convertType: a, errorMapper: r } = Je(), {
    getDate: l,
    rootEmit: s,
    state: o,
    rootProps: i,
    inputValue: h,
    defaults: { textInput: m, range: y, multiDates: b, timeConfig: g, formats: D },
    modelValue: f,
    updateTime: p
  } = Ye(), { setTime: u, getWeekFromDate: d } = st(), { formatSelectedDate: v, formatForTextInput: $ } = Xt();
  ct(
    f,
    (M, ee) => {
      s("internal-model-change", f.value), JSON.stringify(ee ?? {}) !== JSON.stringify(M ?? {}) && p();
    },
    { deep: !0 }
  ), ct(y, (M, ee) => {
    M.enabled !== ee.enabled && (f.value = null);
  }), ct(
    () => D.value.input,
    () => {
      se();
    }
  );
  const W = (M) => M ? i.modelType ? ve(M) : {
    hours: Yt(M),
    minutes: Lt(M),
    seconds: g.value.enableSeconds ? Ut(M) : 0
  } : null, Z = (M) => i.modelType ? ve(M) : { month: Ce(M), year: _e(M) }, x = (M) => Array.isArray(M) ? b.value.enabled ? M.map((ee) => _(ee, _t(l(), ee))) : n(
    () => [
      _t(l(), M[0]),
      M[1] ? _t(l(), M[1]) : e(y.value.partialRange)
    ],
    y.value.enabled
  ) : _t(l(), +M), _ = (M, ee) => (typeof M == "string" || typeof M == "number") && i.modelType ? ce(M) : ee, I = (M) => Array.isArray(M) ? [
    _(M[0], u(M[0])),
    _(M[1], u(M[1]))
  ] : _(M, u(M)), S = (M) => {
    const ee = Se(l(), { date: 1 });
    return Array.isArray(M) ? b.value.enabled ? M.map(
      (ue) => _(ue, Se(ee, { month: +ue.month, year: +ue.year }))
    ) : n(
      () => [
        _(M[0], Se(ee, { month: +M[0].month, year: +M[0].year })),
        _(
          M[1],
          M[1] ? Se(ee, { month: +M[1].month, year: +M[1].year }) : e(y.value.partialRange)
        )
      ],
      y.value.enabled
    ) : _(M, Se(ee, { month: +M.month, year: +M.year }));
  }, j = (M) => {
    if (Array.isArray(M))
      return M.map((ee) => ce(ee));
    throw new Error(r.dateArr("multi-dates"));
  }, U = (M) => {
    if (Array.isArray(M) && y.value.enabled) {
      const ee = M[0], ue = M[1];
      return [
        l(Array.isArray(ee) ? ee[0] : null),
        Array.isArray(ue) && ue.length ? l(ue[0]) : null
      ];
    }
    return l(M[0]);
  }, J = (M) => i.modelAuto ? Array.isArray(M) ? [ce(M[0]), ce(M[1])] : i.autoApply ? [ce(M)] : [ce(M), null] : Array.isArray(M) ? n(
    () => M[1] ? [
      ce(M[0]),
      M[1] ? ce(M[1]) : e(y.value.partialRange)
    ] : [ce(M[0])],
    y.value.enabled
  ) : ce(M), z = () => {
    Array.isArray(f.value) && y.value.enabled && f.value.length === 1 && f.value.push(e(y.value.partialRange));
  }, Y = () => {
    const M = f.value;
    return [
      ve(M[0]),
      M[1] ? ve(M[1]) : e(y.value.partialRange)
    ];
  }, H = () => Array.isArray(f.value) ? f.value[1] ? Y() : ve(a(f.value[0])) : [], P = () => (f.value || []).map((M) => ve(M)), C = (M = !1) => (M || z(), i.modelAuto ? H() : b.value.enabled ? P() : Array.isArray(f.value) ? n(() => Y(), y.value.enabled) : ve(a(f.value))), N = (M) => !M || Array.isArray(M) && !M.length ? null : i.timePicker ? I(a(M)) : i.monthPicker ? S(a(M)) : i.yearPicker ? x(a(M)) : b.value.enabled ? j(a(M)) : i.weekPicker ? U(a(M)) : J(a(M)), E = (M) => {
    if (o.isTextInputDate) return;
    const ee = N(M);
    t(a(ee)) ? (f.value = a(ee), se()) : (f.value = null, h.value = "");
  }, Q = () => f.value ? b.value.enabled ? f.value.map((M) => v(M)).join("; ") : m.value.enabled ? $() : v(f.value) : "", se = () => {
    h.value = Q();
  }, ce = (M) => i.modelType ? ru.includes(i.modelType) ? l(M) : i.modelType === "format" && typeof D.value.input == "string" ? Wn(M, D.value.input, l(), { locale: i.locale }) : Wn(M, i.modelType, l(), { locale: i.locale }) : l(M), ve = (M) => M ? i.modelType ? i.modelType === "timestamp" ? +M : i.modelType === "iso" ? M.toISOString() : i.modelType === "format" && typeof D.value.input == "string" ? v(M) : v(M, i.modelType) : M : null, be = (M) => {
    s("update:model-value", M);
  }, xe = (M) => Array.isArray(f.value) ? b.value.enabled ? f.value.map((ee) => M(ee)) : [M(f.value[0]), f.value[1] ? M(f.value[1]) : null] : M(a(f.value)), ie = () => {
    if (Array.isArray(f.value)) {
      const M = d(f.value[0], i.weekStart), ee = f.value[1] ? d(f.value[1], i.weekStart) : [];
      return [M.map((ue) => l(ue)), ee.map((ue) => l(ue))];
    }
    return d(f.value, i.weekStart).map((M) => l(M));
  }, ye = (M) => be(a(xe(M))), B = () => s("update:model-value", ie());
  return {
    checkBeforeEmit: () => f.value ? y.value.enabled ? y.value.partialRange ? f.value.length >= 1 : f.value.length === 2 : !!f.value : !1,
    parseExternalModelValue: E,
    formatInputValue: se,
    emitModelValue: () => (se(), i.monthPicker ? ye(Z) : i.timePicker ? ye(W) : i.yearPicker ? ye(_e) : i.weekPicker ? B() : be(C()))
  };
}, Bt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], Tr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], su = {
  all: () => Bt,
  root: () => Bt.concat(Tr),
  monthYear: () => Bt.filter((e) => e.use.includes("month-year")),
  input: () => Tr,
  timePicker: () => Bt.filter((e) => e.use.includes("time")),
  action: () => Bt.filter((e) => e.use.includes("action")),
  calendar: () => Bt.filter((e) => e.use.includes("calendar")),
  menu: () => Bt.filter((e) => e.use.includes("menu")),
  shared: () => Bt.filter((e) => e.use.includes("shared")),
  yearMode: () => Bt.filter((e) => e.use.includes("year-mode"))
}, Kt = () => ({
  mapSlots: (e, n, t) => {
    const a = [];
    for (const r of su[n]())
      e[r.name] && a.push(r.name);
    if (t != null && t.length)
      for (const r of t)
        r.slot && a.push(r.slot);
    return a;
  }
}), pl = Symbol("ContextKey"), ou = (e, n) => {
  const { setTimeModelValue: t } = Je(), a = Xu(e), r = he(null), l = na({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), s = a.getDate(/* @__PURE__ */ new Date()), o = he(""), i = he([{ month: Ce(s), year: _e(s) }]), h = na({ hours: 0, minutes: 0, seconds: 0 });
  t(h, null, s, a.range.value.enabled);
  const m = X({
    get: () => r.value,
    set: (f) => {
      r.value = f;
    }
  }), y = X(
    () => (f) => i.value[f] ? i.value[f].month : 0
  ), b = X(
    () => (f) => i.value[f] ? i.value[f].year : 0
  ), g = (f, p) => {
    l[f] = p;
  }, D = () => {
    t(h, m.value, s, a.range.value.enabled);
  };
  Wl(pl, {
    rootProps: e,
    defaults: a,
    modelValue: m,
    state: Nl(l),
    rootEmit: n,
    calendars: i,
    month: y,
    year: b,
    time: h,
    today: s,
    inputValue: o,
    setState: g,
    updateTime: D,
    getDate: a.getDate
  });
}, Ye = () => {
  const e = Hl(pl);
  if (!e)
    throw new Error("Can't use context");
  return e;
}, Va = () => {
  const {
    defaults: { transitions: e }
  } = Ye(), n = X(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), t = X(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: n, showTransition: !!e.value, menuTransition: t };
}, qa = (e) => {
  const {
    today: n,
    time: t,
    modelValue: a,
    defaults: { range: r }
  } = Ye(), { setTimeModelValue: l } = Je();
  ct(
    r,
    (s, o) => {
      s.enabled !== o.enabled && l(t, a.value, n, r.value.enabled);
    },
    { deep: !0 }
  ), ct(
    a,
    (s, o) => {
      e && JSON.stringify(s ?? {}) !== JSON.stringify(o ?? {}) && e();
    },
    { deep: !0 }
  );
}, bt = () => {
  const {
    defaults: { safeDates: e, range: n, multiDates: t, filters: a, timeConfig: r },
    rootProps: l,
    getDate: s
  } = Ye(), { getMapKeyType: o, getMapDate: i, errorMapper: h, convertType: m } = Je(), { isDateBefore: y, isDateAfter: b, isDateEqual: g, resetDate: D, getDaysInBetween: f, setTimeValue: p, getTimeObj: u, setTime: d } = st(), v = (O) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(O)) : !!i(O, e.value.disabledDates) : !1, $ = (O) => e.value.maxDate ? l.yearPicker ? _e(O) > _e(e.value.maxDate) : b(O, e.value.maxDate) : !1, W = (O) => e.value.minDate ? l.yearPicker ? _e(O) < _e(e.value.minDate) : y(O, e.value.minDate) : !1, Z = (O) => {
    var A;
    if (!O) return !1;
    const T = $(O), k = W(O), V = v(O), le = a.value.months.map((w) => +w).includes(Ce(O)), oe = (A = a.value.weekDays) != null && A.length ? a.value.weekDays.some((w) => +w === Xo(O)) : !1, L = j(O), ae = _e(O), F = ae < +l.yearRange[0] || ae > +l.yearRange[1];
    return !(T || k || V || le || F || oe || L);
  }, x = (O, T) => y(...B(e.value.minDate, O, T)) || g(...B(e.value.minDate, O, T)), _ = (O, T) => b(...B(e.value.maxDate, O, T)) || g(...B(e.value.maxDate, O, T)), I = (O, T, k) => {
    let V = !1;
    return e.value.maxDate && k && _(O, T) && (V = !0), e.value.minDate && !k && x(O, T) && (V = !0), V;
  }, S = (O, T, k, V) => {
    let le = !1;
    return V && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? le = I(O, T, k) : (e.value.minDate && x(O, T) || e.value.maxDate && _(O, T)) && (le = !0) : le = !0, le;
  }, j = (O) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !i(
    O,
    e.value.allowedDates,
    o(l.monthPicker, l.yearPicker)
  ) : !1, U = (O) => !Z(O), J = (O) => n.value.noDisabledRange ? !Gn({ start: O[0], end: O[1] }).some((T) => U(T)) : !0, z = (O) => {
    if (O) {
      const T = _e(O);
      return T >= +l.yearRange[0] && T <= l.yearRange[1];
    }
    return !0;
  }, Y = (O, T) => !!(Array.isArray(O) && O[T] && (n.value.maxRange || n.value.minRange) && z(O[T])), H = (O, T, k = 0) => {
    if (Y(T, k) && z(O)) {
      const V = Gr(O, T[k]), le = f(T[k], O), oe = le.length === 1 ? 0 : le.filter((ae) => U(ae)).length, L = Math.abs(V) - (n.value.minMaxRawRange ? 0 : oe);
      if (n.value.minRange && n.value.maxRange)
        return L >= +n.value.minRange && L <= +n.value.maxRange;
      if (n.value.minRange) return L >= +n.value.minRange;
      if (n.value.maxRange) return L <= +n.value.maxRange;
    }
    return !0;
  }, P = () => !r.value.enableTimePicker || l.monthPicker || l.yearPicker || r.value.ignoreTimeValidation, C = (O) => Array.isArray(O) ? [O[0] ? p(O[0]) : null, O[1] ? p(O[1]) : null] : p(O), N = (O, T, k) => T ? O.find(
    (V) => +V.hours === Yt(T) && V.minutes === "*" ? !0 : +V.minutes === Lt(T) && +V.hours === Yt(T)
  ) && k : !1, E = (O, T, k) => {
    const [V, le] = O, [oe, L] = T;
    return !N(V, oe, k) && !N(le, L, k) && k;
  }, Q = (O, T) => {
    const k = Array.isArray(T) ? T : [T];
    return Array.isArray(l.disabledTimes) ? Array.isArray(l.disabledTimes[0]) ? E(l.disabledTimes, k, O) : !k.some((V) => N(l.disabledTimes, V, O)) : O;
  }, se = (O, T) => {
    const k = Array.isArray(T) ? [u(T[0]), T[1] ? u(T[1]) : void 0] : u(T), V = !l.disabledTimes(k);
    return O && V;
  }, ce = (O, T) => l.disabledTimes ? Array.isArray(l.disabledTimes) ? Q(T, O) : se(T, O) : T, ve = (O) => {
    let T = !0;
    if (!O || P()) return !0;
    const k = !e.value.minDate && !e.value.maxDate ? C(O) : O;
    return (l.maxTime || e.value.maxDate) && (T = ee(
      l.maxTime,
      e.value.maxDate,
      "max",
      m(k),
      T
    )), (l.minTime || e.value.minDate) && (T = ee(
      l.minTime,
      e.value.minDate,
      "min",
      m(k),
      T
    )), ce(O, T);
  }, be = (O) => {
    if (!l.monthPicker) return !0;
    let T = !0;
    const k = s(D(O));
    if (e.value.minDate && e.value.maxDate) {
      const V = s(D(e.value.minDate)), le = s(D(e.value.maxDate));
      return b(k, V) && y(k, le) || g(k, V) || g(k, le);
    }
    if (e.value.minDate) {
      const V = s(D(e.value.minDate));
      T = b(k, V) || g(k, V);
    }
    if (e.value.maxDate) {
      const V = s(D(e.value.maxDate));
      T = y(k, V) || g(k, V);
    }
    return T;
  }, xe = X(() => (O) => !r.value.enableTimePicker || r.value.ignoreTimeValidation ? !0 : ve(O)), ie = X(() => (O) => l.monthPicker ? Array.isArray(O) && (n.value.enabled || t.value.enabled) ? !O.filter((T) => !be(T)).length : be(O) : !0), ye = (O, T, k) => {
    if (!T || k && !e.value.maxDate || !k && !e.value.minDate) return !1;
    const V = k ? xt(O, 1) : Da(O, 1), le = [Ce(V), _e(V)];
    return k ? !_(...le) : !x(...le);
  }, B = (O, T, k) => [Se(s(O), { date: 1 }), Se(s(), { month: T, year: k, date: 1 })], M = (O, T, k, V) => {
    if (!O) return !0;
    if (V) {
      const le = k === "max" ? ka(O, T) : sa(O, T), oe = { seconds: 0, milliseconds: 0 };
      return le || fa(Se(O, oe), Se(T, oe));
    }
    return k === "max" ? O.getTime() <= T.getTime() : O.getTime() >= T.getTime();
  }, ee = (O, T, k, V, le) => {
    if (Array.isArray(V)) {
      const L = ue(O, V[0], T), ae = ue(O, V[1], T);
      return M(V[0], L, k, !!T) && M(V[1], ae, k, !!T) && le;
    }
    const oe = ue(O, V, T);
    return M(V, oe, k, !!T) && le;
  }, ue = (O, T, k) => O ? d(O, T) : s(k ?? T);
  return {
    isDisabled: U,
    validateDate: Z,
    validateMonthYearInRange: S,
    isDateRangeAllowed: J,
    checkMinMaxRange: H,
    isValidTime: ve,
    validateMonthYear: ye,
    validateMinDate: x,
    validateMaxDate: _,
    isValidDate: (O) => Array.isArray(O) ? Ra(O[0]) && (O[1] ? Ra(O[1]) : !0) : O ? Ra(O) : !1,
    checkPartialRangeValue: (O) => {
      if (O) return null;
      throw new Error(h.prop("partial-range"));
    },
    checkRangeEnabled: (O, T) => {
      if (T) return O();
      throw new Error(h.prop("range"));
    },
    checkMinMaxValue: (O, T, k) => {
      const V = k != null, le = T != null;
      if (!V && !le) return !1;
      const oe = +k, L = +T;
      return V && le ? +O > oe || +O < L : V ? +O > oe : le ? +O < L : !1;
    },
    isTimeValid: xe,
    isMonthValid: ie
  };
}, iu = (e) => {
  const {
    rootEmit: n,
    rootProps: t,
    defaults: { timeConfig: a, flow: r }
  } = Ye(), l = he(0), s = na({
    [aa.timePicker]: !a.value.enableTimePicker || t.timePicker || t.monthPicker,
    [aa.calendar]: !1,
    [aa.header]: !1
  }), o = X(() => t.monthPicker || t.timePicker), i = (g) => {
    var D, f;
    if ((f = (D = r.value) == null ? void 0 : D.steps) != null && f.length) {
      if (!g && o.value) return b();
      s[g] = !0, Object.keys(s).filter((p) => !s[p]).length || b();
    }
  }, h = () => {
    var g, D, f, p;
    (D = (g = r.value) == null ? void 0 : g.steps) != null && D.length && l.value !== -1 && (l.value += 1, n("flow-step", l.value), b()), ((p = (f = r.value) == null ? void 0 : f.steps) == null ? void 0 : p.length) === l.value && dt().then(() => m());
  }, m = () => {
    l.value = -1;
  }, y = (g, D, ...f) => {
    var p, u, d;
    ((p = r.value) == null ? void 0 : p.steps[l.value]) === g && e.value && ((d = (u = e.value)[D]) == null || d.call(u, ...f));
  }, b = (g = 0) => {
    var f;
    g && (l.value += g), y(ut.month, "toggleMonthPicker", !0), y(ut.year, "toggleYearPicker", !0), y(ut.calendar, "toggleTimePicker", !1, !0), y(ut.time, "toggleTimePicker", !0, !0);
    const D = (f = r.value) == null ? void 0 : f.steps[l.value];
    (D === ut.hours || D === ut.minutes || D === ut.seconds) && y(D, "toggleTimePicker", !0, !0, D);
  };
  return { childMount: i, updateFlowStep: h, resetFlow: m, handleFlow: b, flowStep: l };
};
function Cn(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
function $a(e) {
  return (n, t) => {
    const a = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (a === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, o = t != null && t.width ? String(t.width) : s;
      r = e.formattingValues[o] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, o = t != null && t.width ? String(t.width) : e.defaultWidth;
      r = e.values[o] || e.values[s];
    }
    const l = e.argumentCallback ? e.argumentCallback(n) : n;
    return r[l];
  };
}
function Ca(e) {
  return (n, t = {}) => {
    const a = t.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], l = n.match(r);
    if (!l)
      return null;
    const s = l[0], o = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(o) ? cu(o, (y) => y.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      uu(o, (y) => y.test(s))
    );
    let h;
    h = e.valueCallback ? e.valueCallback(i) : i, h = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(h)
    ) : h;
    const m = n.slice(s.length);
    return { value: h, rest: m };
  };
}
function uu(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function cu(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function du(e) {
  return (n, t = {}) => {
    const a = n.match(e.matchPattern);
    if (!a) return null;
    const r = a[0], l = n.match(e.parsePattern);
    if (!l) return null;
    let s = e.valueCallback ? e.valueCallback(l[0]) : l[0];
    s = t.valueCallback ? t.valueCallback(s) : s;
    const o = n.slice(r.length);
    return { value: s, rest: o };
  };
}
const fu = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, mu = (e, n, t) => {
  let a;
  const r = fu[e];
  return typeof r == "string" ? a = r : n === 1 ? a = r.one : a = r.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + a : a + " ago" : a;
}, hu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, vu = (e, n, t, a) => hu[e], pu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, yu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gu = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, wu = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, bu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ku = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Du = (e, n) => {
  const t = Number(e), a = t % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, _u = {
  ordinalNumber: Du,
  era: $a({
    values: pu,
    defaultWidth: "wide"
  }),
  quarter: $a({
    values: yu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $a({
    values: gu,
    defaultWidth: "wide"
  }),
  day: $a({
    values: wu,
    defaultWidth: "wide"
  }),
  dayPeriod: $a({
    values: bu,
    defaultWidth: "wide",
    formattingValues: ku,
    defaultFormattingWidth: "wide"
  })
}, xu = /^(\d+)(th|st|nd|rd)?/i, Mu = /\d+/i, Tu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Pu = {
  any: [/^b/i, /^(a|c)/i]
}, Ou = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Au = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Su = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, $u = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Cu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Yu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ru = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Eu = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Iu = {
  ordinalNumber: du({
    matchPattern: xu,
    parsePattern: Mu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ca({
    matchPatterns: Tu,
    defaultMatchWidth: "wide",
    parsePatterns: Pu,
    defaultParseWidth: "any"
  }),
  quarter: Ca({
    matchPatterns: Ou,
    defaultMatchWidth: "wide",
    parsePatterns: Au,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ca({
    matchPatterns: Su,
    defaultMatchWidth: "wide",
    parsePatterns: $u,
    defaultParseWidth: "any"
  }),
  day: Ca({
    matchPatterns: Cu,
    defaultMatchWidth: "wide",
    parsePatterns: Yu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ca({
    matchPatterns: Ru,
    defaultMatchWidth: "any",
    parsePatterns: Eu,
    defaultParseWidth: "any"
  })
}, Fu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Bu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Wu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Nu = {
  date: Cn({
    formats: Fu,
    defaultWidth: "full"
  }),
  time: Cn({
    formats: Bu,
    defaultWidth: "full"
  }),
  dateTime: Cn({
    formats: Wu,
    defaultWidth: "full"
  })
}, Lu = {
  code: "en-US",
  formatDistance: mu,
  formatLong: Nu,
  formatRelative: vu,
  localize: _u,
  match: Iu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Pr = {
  noDisabledRange: !1,
  showLastInRange: !0,
  minMaxRawRange: !1,
  partialRange: !0,
  disableTimeRangeValidation: !1,
  maxRange: void 0,
  minRange: void 0,
  autoRange: void 0,
  fixedStart: !1,
  fixedEnd: !1
}, Hu = {
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0,
  arrowLeft: void 0,
  keepViewOnOffsetClick: !1,
  timeArrowHoldThreshold: 0,
  shadowDom: !1,
  mobileBreakpoint: 600,
  setDateOnMenuClose: !1,
  escClose: !0,
  spaceConfirm: !0,
  monthChangeOnArrows: !0,
  monthChangeOnScroll: !0
}, Or = {
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: "open",
  selectOnFocus: !1,
  rangeSeparator: " - ",
  escClose: !0,
  format: void 0,
  maskFormat: void 0
}, Vu = {
  dates: [],
  years: [],
  months: [],
  quarters: [],
  weeks: [],
  weekdays: [],
  options: { highlightDisabled: !1 }
}, qu = {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  selectBtnLabel: "Select",
  cancelBtnLabel: "Cancel",
  nowBtnLabel: "Now",
  nowBtnRound: void 0
}, zu = {
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (e) => `Increment ${e}`,
  decrementValue: (e) => `Decrement ${e}`,
  openTpOverlay: (e) => `Open ${e} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (e) => `Month picker${e ? " overlay" : ""}`,
  yearPicker: (e) => `Year picker${e ? " overlay" : ""}`,
  timeOverlay: (e) => `${e} overlay`
}, Ar = {
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down"
}, ju = {
  weekDays: [],
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}, Uu = {
  month: "LLL",
  year: "yyyy",
  weekDay: "EEEEEE",
  quarter: "MMMM",
  day: "d",
  input: void 0,
  preview: void 0
}, Qu = {
  enableTimePicker: !0,
  ignoreTimeValidation: !1,
  enableSeconds: !1,
  enableMinutes: !0,
  is24: !0,
  noHoursOverlay: !1,
  noMinutesOverlay: !1,
  noSecondsOverlay: !1,
  hoursGridIncrement: 1,
  minutesGridIncrement: 5,
  secondsGridIncrement: 5,
  hoursIncrement: 1,
  minutesIncrement: 1,
  secondsIncrement: 1,
  timePickerInline: !1,
  startTime: void 0
}, Gu = {
  flowStep: 0,
  menuWrapRef: null,
  collapse: !1
}, Ku = {
  weekStart: 1,
  yearRange: () => [1900, 2100],
  ui: () => ({}),
  locale: () => Lu,
  dark: !1,
  transitions: !0,
  hideNavigation: () => [],
  vertical: !1,
  hideMonthYearSelect: !1,
  disableYearSelect: !1,
  autoApply: !1,
  disabledDates: () => [],
  hideOffsetDates: !1,
  noToday: !1,
  markers: () => [],
  presetDates: () => [],
  preventMinMaxNavigation: !1,
  reverseYears: !1,
  weekPicker: !1,
  arrowNavigation: !1,
  monthPicker: !1,
  yearPicker: !1,
  quarterPicker: !1,
  timePicker: !1,
  modelAuto: !1,
  multiDates: !1,
  range: !1,
  inline: !1,
  sixWeeks: !1,
  focusStartDate: !1,
  yearFirst: !1,
  loading: !1,
  centered: !1
}, Sr = {
  name: void 0,
  required: !1,
  autocomplete: "off",
  state: void 0,
  clearable: !0,
  alwaysClearable: !1,
  hideInputIcon: !1,
  id: void 0,
  inputmode: "none"
}, Xa = {
  type: "local",
  hideOnOffsetDates: !1,
  label: "W"
}, Xu = (e) => {
  const { getMapKey: n, getMapKeyType: t, getTimeObjFromCurrent: a } = Je();
  function r(P, C) {
    let N;
    return e.timezone ? N = new ma(P ?? /* @__PURE__ */ new Date(), e.timezone) : N = P ? new Date(P) : /* @__PURE__ */ new Date(), C ? Se(N, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : N;
  }
  const l = () => {
    const P = J.value.enableSeconds ? ":ss" : "", C = J.value.enableMinutes ? ":mm" : "";
    return J.value.is24 ? `HH${C}${P}` : `hh${C}${P} aa`;
  }, s = () => {
    var P;
    return e.monthPicker ? "MM/yyyy" : e.timePicker ? l() : e.weekPicker ? `${((P = Z.value) == null ? void 0 : P.type) === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : J.value.enableTimePicker ? `MM/dd/yyyy, ${l()}` : "MM/dd/yyyy";
  }, o = (P) => a(r(), P, J.value.enableSeconds), i = () => I.value.enabled ? J.value.startTime && Array.isArray(J.value.startTime) ? [o(J.value.startTime[0]), o(J.value.startTime[1])] : null : J.value.startTime && !Array.isArray(J.value.startTime) ? o(J.value.startTime) : null, h = (P) => P ? typeof P == "boolean" ? P ? 2 : 0 : Math.max(+P, 2) : 0, m = (P) => {
    const C = t(e.monthPicker, e.yearPicker);
    return new Map(
      P.map((N) => {
        const E = r(N, y.value);
        return [n(E, C), E];
      })
    );
  }, y = X(() => e.monthPicker || e.yearPicker || e.quarterPicker), b = X(() => {
    const P = typeof e.multiCalendars == "object" && e.multiCalendars, C = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...C, count: h(!1) };
    const N = P ? e.multiCalendars : {}, E = P ? N.count ?? !0 : e.multiCalendars, Q = h(E);
    return Object.assign(C, N, { count: Q });
  }), g = X(() => i()), D = X(() => ({ ...zu, ...e.ariaLabels })), f = X(() => ({ ...ju, ...e.filters })), p = X(() => typeof e.transitions == "boolean" ? e.transitions ? Ar : !1 : { ...Ar, ...e.transitions }), u = X(() => ({ ...qu, ...e.actionRow })), d = X(() => typeof e.textInput == "object" ? {
    ...Or,
    ...e.textInput,
    format: typeof e.textInput.format == "string" ? e.textInput.format : j.value.input,
    pattern: e.textInput.format ?? j.value.input,
    enabled: !0
  } : {
    ...Or,
    format: j.value.input,
    pattern: j.value.input,
    enabled: e.textInput
  }), v = X(() => {
    const P = { input: !1 };
    return typeof e.inline == "object" ? { ...P, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...P
    };
  }), $ = X(() => ({ ...Hu, ...e.config })), W = X(() => typeof e.highlight == "function" ? e.highlight : {
    ...Vu,
    ...e.highlight
  }), Z = X(() => {
    var P, C;
    return typeof e.weekNumbers == "object" ? {
      type: ((P = e.weekNumbers) == null ? void 0 : P.type) ?? Xa.type,
      hideOnOffsetDates: ((C = e.weekNumbers) == null ? void 0 : C.hideOnOffsetDates) ?? Xa.hideOnOffsetDates,
      label: e.weekNumbers.label ?? Xa.label
    } : e.weekNumbers ? Xa : void 0;
  }), x = X(() => {
    var P, C;
    return typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
      enabled: !!e.multiDates,
      limit: (P = e.multiDates) != null && P.limit ? +e.multiDates.limit : null,
      dragSelect: ((C = e.multiDates) == null ? void 0 : C.dragSelect) ?? !0
    };
  }), _ = X(() => {
    var P;
    return {
      minDate: e.minDate ? r(e.minDate) : null,
      maxDate: e.maxDate ? r(e.maxDate) : null,
      disabledDates: Array.isArray(e.disabledDates) ? m(e.disabledDates) : e.disabledDates,
      allowedDates: Array.isArray(e.allowedDates) ? m(e.allowedDates) : null,
      highlight: typeof W.value == "object" && Array.isArray(W.value.dates) ? m(W.value.dates) : W.value,
      markers: (P = e.markers) != null && P.length ? new Map(
        e.markers.map((C) => {
          const N = r(C.date);
          return [n(N, ha.DATE), C];
        })
      ) : null
    };
  }), I = X(() => typeof e.range == "object" ? { enabled: !0, ...Pr, ...e.range } : {
    enabled: e.range,
    ...Pr
  }), S = X(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((P) => {
        const C = P, N = e.ui[C];
        if (C === "dayClass") return [C, e.ui[C]];
        const E = typeof e.ui[C] == "string" ? { [N]: !0 } : Object.fromEntries(N.map((Q) => [Q, !0]));
        return [P, E];
      })
    )
  })), j = X(() => {
    var P, C;
    return {
      ...Uu,
      ...e.formats,
      input: ((P = e.formats) == null ? void 0 : P.input) ?? s(),
      preview: ((C = e.formats) == null ? void 0 : C.preview) ?? s()
    };
  }), U = X(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), J = X(() => ({ ...Qu, ...e.timeConfig })), z = X(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), Y = X(() => {
    const P = d.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Sr, inputmode: P, ...e.inputAttrs } : { ...Sr, inputmode: P };
  }), H = X(() => {
    var P, C, N, E;
    return {
      offset: ((P = e.floating) == null ? void 0 : P.offset) ?? 10,
      arrow: ((C = e.floating) == null ? void 0 : C.arrow) ?? !0,
      strategy: ((N = e.floating) == null ? void 0 : N.strategy) ?? void 0,
      placement: ((E = e.floating) == null ? void 0 : E.placement) ?? void 0
    };
  });
  return {
    transitions: p,
    multiCalendars: b,
    startTime: g,
    ariaLabels: D,
    filters: f,
    actionRow: u,
    textInput: d,
    inline: v,
    config: $,
    highlight: W,
    weekNumbers: Z,
    range: I,
    safeDates: _,
    multiDates: x,
    ui: S,
    formats: j,
    teleport: U,
    timeConfig: J,
    flow: z,
    inputAttrs: Y,
    floatingConfig: H,
    getDate: r
  };
}, Je = () => {
  const e = (d, v) => pt(d, v ?? ha.DATE), n = (d, v) => d ? ha.MONTH_AND_YEAR : v ? ha.YEAR : ha.DATE, t = (d, v, $) => v.get(e(d, $)), a = (d) => d, r = (d) => d === 0 ? d : !d || Number.isNaN(+d) ? null : +d, l = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), s = (d, v) => {
    let $ = [...document.querySelectorAll(l())];
    $ = $.filter((Z) => !d.contains(Z) || "datepicker-instance" in Z.dataset);
    const W = $.indexOf(d);
    if (W >= 0 && (v ? W - 1 >= 0 : W + 1 <= $.length))
      return $[W + (v ? -1 : 1)];
  }, o = (d) => String(d).padStart(2, "0"), i = (d, v) => d == null ? void 0 : d.querySelector(`[data-dp-element="${v}"]`), h = (d, v, $ = !1) => {
    d && v.allowStopPropagation && ($ && d.stopImmediatePropagation(), d.stopPropagation());
  }, m = (d, v, $ = !1, W) => {
    if (d.key === Ve.enter || d.key === Ve.space)
      return $ && d.preventDefault(), v();
    if (W) return W(d);
  }, y = (d, v) => {
    v.allowStopPropagation && d.stopPropagation(), v.allowPreventDefault && d.preventDefault();
  }, b = (d) => {
    if (d)
      return [...d.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, g = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, D = (d) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][d], f = (d) => {
    const v = [], $ = (W) => W.filter((Z) => !!Z);
    for (let W = 0; W < d.length; W += 3) {
      const Z = [d[W], d[W + 1], d[W + 2]];
      v.push($(Z));
    }
    return v;
  }, p = {
    prop: (d) => `"${d}" prop must be enabled!`,
    dateArr: (d) => `You need to use array as "model-value" binding in order to support "${d}"`
  }, u = (d, v, $, W, Z) => {
    const x = {
      hours: Yt,
      minutes: Lt,
      seconds: Ut
    };
    if (!v) return W ? [x[d]($), x[d]($)] : x[d]($);
    if (Array.isArray(v) && W) {
      const _ = v[0] ?? $, I = v[1];
      return [x[d](_), I ? x[d](I) : Z[d][1] ?? x[d]($)];
    }
    return Array.isArray(v) && !W ? x[d](v[v.length - 1] ?? $) : x[d](v);
  };
  return {
    getMapKey: e,
    getMapKeyType: n,
    getMapDate: t,
    convertType: a,
    getNumVal: r,
    findNextFocusableElement: s,
    padZero: o,
    getElWithin: i,
    checkStopPropagation: h,
    checkKeyDown: m,
    handleEventPropagation: y,
    findFocusableEl: b,
    isTouchDevice: g,
    hoursToAmPmHours: D,
    getGroupedList: f,
    setTimeModelValue: (d, v, $, W) => {
      d.hours = u("hours", v, $, W, d), d.minutes = u("minutes", v, $, W, d), d.seconds = u("seconds", v, $, W, d);
    },
    getTimeObjFromCurrent: (d, v, $) => {
      const W = {
        hours: Yt(d),
        minutes: Lt(d),
        seconds: $ ? Ut(d) : 0
      };
      return Object.assign(W, v);
    },
    errorMapper: p
  };
}, st = () => {
  const { getDate: e } = Ye(), { getMapDate: n, getGroupedList: t } = Je(), a = (u, d) => {
    if (!u) return e();
    const v = e(u), $ = Se(v, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return d ? ro($) : $;
  }, r = (u, d) => {
    const v = e(d);
    return Se(v, {
      hours: +(u.hours ?? Yt(v)),
      minutes: +(u.minutes ?? Lt(v)),
      seconds: +(u.seconds ?? Ut(v)),
      milliseconds: 0
    });
  }, l = (u, d) => {
    const v = wt(u, { weekStartsOn: +d }), $ = Kn(u, { weekStartsOn: +d });
    return [v, $];
  }, s = (u, d) => !u || !d ? !1 : ka(a(u), a(d)), o = (u, d) => !u || !d ? !1 : fa(a(u), a(d)), i = (u, d) => !u || !d ? !1 : sa(a(u), a(d)), h = (u, d, v) => u != null && u[0] && (u != null && u[1]) ? i(v, u[0]) && s(v, u[1]) : u != null && u[0] && d ? i(v, u[0]) && s(v, d) || s(v, u[0]) && i(v, d) : !1, m = (u, d) => {
    const v = i(u, d) ? d : u, $ = i(d, u) ? d : u;
    return Gn({ start: v, end: $ });
  }, y = (u) => `dp-${pt(u, "yyyy-MM-dd")}`, b = (u) => a(Se(e(u), { date: 1 })), g = (u, d) => {
    if (d) {
      const v = _e(e(d));
      if (v > u) return 12;
      if (v === u) return Ce(e(d));
    }
  }, D = (u, d) => {
    if (d) {
      const v = _e(e(d));
      return v < u ? -1 : v === u ? Ce(e(d)) : void 0;
    }
  }, f = (u) => {
    if (u) return _e(e(u));
  }, p = (u) => ({
    hours: Yt(u),
    minutes: Lt(u),
    seconds: Ut(u)
  });
  return {
    resetDateTime: a,
    groupListAndMap: (u, d) => t(u).map((v) => v.map(($) => {
      const { active: W, disabled: Z, isBetween: x, highlighted: _ } = d($);
      return {
        ...$,
        active: W,
        disabled: Z,
        className: {
          dp__overlay_cell_active: W,
          dp__overlay_cell: !W,
          dp__overlay_cell_disabled: Z,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: Z && W,
          dp__cell_in_between: x,
          "dp--highlighted": _
        }
      };
    })),
    setTime: r,
    getWeekFromDate: l,
    isDateAfter: i,
    isDateBefore: s,
    isDateBetween: h,
    isDateEqual: o,
    getDaysInBetween: m,
    getCellId: y,
    resetDate: b,
    getMinMonth: g,
    getMaxMonth: D,
    getYearFromDate: f,
    getTimeObj: p,
    setTimeValue: (u) => Se(e(), p(u)),
    sanitizeTime: (u, d, v) => d && (v || v === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map(($) => $ === d ? [$, v] : [$, Number.isNaN(+u[$]) ? void 0 : +u[$]])
    ) : {
      hours: Number.isNaN(+u.hours) ? void 0 : +u.hours,
      minutes: Number.isNaN(+u.minutes) ? void 0 : +u.minutes,
      seconds: Number.isNaN(+(u.seconds ?? "")) ? void 0 : +u.seconds
    },
    getBeforeAndAfterInRange: (u, d) => {
      const v = ol(a(d), u), $ = yt(a(d), u);
      return { before: v, after: $ };
    },
    isModelAuto: (u) => Array.isArray(u) ? !!u[0] && !!u[1] : !1,
    matchDate: (u, d) => u ? d ? d instanceof Map ? !!n(u, d) : d(e(u)) : !1 : !0,
    checkHighlightMonth: (u, d, v) => typeof u == "function" ? u({ month: d, year: v }) : u.months.some(($) => $.month === d && $.year === v),
    checkHighlightYear: (u, d) => typeof u == "function" ? u(d) : u.years.includes(d)
  };
}, cn = () => {
  const {
    defaults: { config: e }
  } = Ye(), n = he(0);
  et(() => {
    t(), globalThis.addEventListener("resize", t, { passive: !0 });
  }), _a(() => {
    globalThis.removeEventListener("resize", t);
  });
  const t = () => {
    n.value = globalThis.document.documentElement.clientWidth;
  };
  return {
    isMobile: X(() => n.value <= e.value.mobileBreakpoint ? !0 : void 0)
  };
}, Xt = () => {
  const {
    getDate: e,
    state: n,
    modelValue: t,
    rootProps: a,
    defaults: { formats: r, textInput: l }
  } = Ye(), s = (D) => pt(_t(e(), D), r.value.year, { locale: a.locale }), o = (D) => pt(il(e(), D), r.value.month, { locale: a.locale }), i = (D) => pt(D, r.value.weekDay, { locale: a.locale }), h = (D) => pt(D, r.value.quarter, { locale: a.locale }), m = (D, f) => [D, f].map((p) => h(p)).join("-"), y = (D) => pt(D, r.value.day, { locale: a.locale }), b = (D, f, p) => {
    const u = p ? r.value.preview : r.value.input;
    if (!D) return "";
    if (typeof u == "function") return u(D);
    const d = f ?? u, v = { locale: a.locale };
    return Array.isArray(D) ? `${pt(D[0], d, v)}${a.modelAuto && !D[1] ? "" : l.value.rangeSeparator}${D[1] ? pt(D[1], d, v) : ""}` : pt(D, d, v);
  }, g = () => {
    const D = (f) => pt(f, l.value.format);
    return Array.isArray(t.value) ? `${D(t.value[0])} ${l.value.rangeSeparator} ${t.value[1] ? D(t.value[1]) : ""}` : "";
  };
  return {
    formatYear: s,
    formatMonth: o,
    formatWeekDay: i,
    formatQuarter: h,
    formatSelectedDate: b,
    formatForTextInput: () => n.isInputFocused && t.value ? Array.isArray(t.value) ? g() : pt(t.value, l.value.format) : b(t.value),
    formatPreview: (D) => b(D, void 0, !0),
    formatQuarterText: m,
    formatDay: y
  };
}, dn = () => {
  const { rootProps: e } = Ye(), { formatYear: n, formatMonth: t } = Xt();
  return {
    getMonths: () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => ({
      text: t(a),
      value: a
    })),
    getYears: () => {
      const a = [];
      for (let r = +e.yearRange[0]; r <= +e.yearRange[1]; r++)
        a.push({ value: +r, text: n(r) });
      return e.reverseYears ? a.reverse() : a;
    },
    isOutOfYearRange: (a) => a < +e.yearRange[0] || a > +e.yearRange[1]
  };
}, Zu = (e) => ({
  openMenu: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.openMenu();
  },
  closeMenu: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.closeMenu();
  },
  selectDate: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.selectDate();
  },
  clearValue: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.clearValue();
  },
  formatInputValue: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.formatInputValue();
  },
  updateInternalModelValue: (n) => {
    var t;
    return (t = e.value) == null ? void 0 : t.updateInternalModelValue(n);
  },
  setMonthYear: (n, t) => {
    var a;
    return (a = e.value) == null ? void 0 : a.setMonthYear(n, t);
  },
  parseModel: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.parseModel();
  },
  switchView: (n, t) => {
    var a;
    return (a = e.value) == null ? void 0 : a.switchView(n, t);
  },
  handleFlow: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.handleFlow();
  },
  toggleMenu: () => {
    var n;
    return (n = e.value) == null ? void 0 : n.toggleMenu();
  }
}), Ma = () => ({
  boolHtmlAttribute: (e) => e ? !0 : void 0
}), Ju = () => {
  const {
    getDate: e,
    rootProps: n,
    defaults: { textInput: t, startTime: a, timeConfig: r }
  } = Ye(), { getTimeObjFromCurrent: l } = Je(), s = he(!1), o = X(
    () => Array.isArray(a.value) ? a.value[0] : a.value ?? l(e(), {}, r.value.enableSeconds)
  ), i = (h, m, y) => {
    const b = Wn(h, m.slice(0, h.length), e(), { locale: n.locale });
    return Ra(b) && Kr(b) ? y || s.value ? b : Se(b, {
      hours: +o.value.hours,
      minutes: +o.value.minutes,
      seconds: +(o.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: s,
    parseFreeInput: (h, m) => {
      if (typeof t.value.pattern == "string")
        return i(h, t.value.pattern, m);
      if (Array.isArray(t.value.pattern)) {
        let y = null;
        for (const b of t.value.pattern)
          if (y = i(h, b, m), y)
            break;
        return y;
      }
      return typeof t.value.pattern == "function" ? t.value.pattern(h) : null;
    },
    applyMaxValues: (h, m) => {
      const y = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let b = "", g = 0;
      for (let D = 0; D < m.length; D++) {
        const f = m[D], p = f.length, u = h.slice(g, g + p);
        if (!u) break;
        if (u.length < p)
          b += u;
        else {
          let d = Number.parseInt(u, 10);
          y[f] && d > y[f] && (d = y[f]), b += d.toString().padStart(p, "0").slice(0, p);
        }
        g += p;
      }
      return b;
    },
    createMaskedValue: (h, m) => {
      const y = /(YYYY|MM|DD|hh|mm|ss)/g, b = [...m.matchAll(y)].map((u) => u[0]), g = m.replace(y, "|").split("|").filter(Boolean), D = b.map((u) => u.length);
      let f = "", p = 0;
      for (let u = 0; u < b.length; u++) {
        const d = D[u], v = h.slice(p, p + d);
        if (!v) break;
        f += v, v.length === d && g[u] && (f += g[u]), p += d;
      }
      return f;
    }
  };
}, ec = {
  key: 1,
  class: "dp__input_wrap"
}, tc = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], ac = {
  key: 2,
  class: "dp--clear-btn"
}, nc = ["aria-label"], rc = /* @__PURE__ */ Ke({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 }
  },
  emits: ["clear", "open", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus", "blur", "real-blur"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      rootEmit: l,
      inputValue: s,
      rootProps: o,
      defaults: { textInput: i, ariaLabels: h, inline: m, config: y, range: b, multiDates: g, ui: D, inputAttrs: f }
    } = Ye(), { checkMinMaxRange: p, isValidDate: u } = bt(), { parseFreeInput: d, textPasted: v, createMaskedValue: $, applyMaxValues: W } = Ju(), { checkKeyDown: Z, checkStopPropagation: x } = Je(), { boolHtmlAttribute: _ } = Ma(), I = Be("dp-input"), S = he(null), j = he(!1), U = X(
      () => ({
        dp__pointer: !o.disabled && !o.readonly && !i.value.enabled,
        dp__disabled: o.disabled,
        dp__input_readonly: !i.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !f.value.clearable,
        dp__input_icon_pad: !f.value.hideInputIcon,
        dp__input_valid: typeof f.value.state == "boolean" ? f.value.state : !1,
        dp__input_invalid: typeof f.value.state == "boolean" ? !f.value.state : !1,
        dp__input_focus: j.value || r.isMenuOpen,
        dp__input_reg: !i.value.enabled,
        ...D.value.input
      })
    ), J = () => {
      a("set-input-date", null), f && o.autoApply && (a("set-empty-date"), S.value = null);
    }, z = (B) => {
      const { rangeSeparator: M } = i.value, [ee, ue] = B.split(`${M}`);
      if (ee) {
        const O = d(ee.trim(), s.value), T = ue ? d(ue.trim(), s.value) : void 0;
        if (sa(O, T)) return;
        const k = O && T ? [O, T] : [O];
        p(T, k, 0) && (S.value = O ? k : null);
      }
    }, Y = () => {
      v.value = !0;
    }, H = (B) => {
      if (b.value.enabled)
        z(B);
      else if (g.value.enabled) {
        const M = B.split(";");
        S.value = M.map((ee) => d(ee.trim())).filter((ee) => !!ee);
      } else
        S.value = d(B, s.value);
    }, P = (B) => {
      var O, T;
      const M = typeof B == "string" ? B : (O = B.target) == null ? void 0 : O.value, ee = (T = i == null ? void 0 : i.value) == null ? void 0 : T.maskFormat;
      let ue = M;
      if (typeof ee == "string") {
        const k = /(YYYY|MM|DD|hh|mm|ss)/g, V = [...ee.matchAll(k)].map((L) => L[0]), le = M.replace(/\D/g, ""), oe = W(le, V);
        ue = $(oe, ee);
      }
      ue === "" ? J() : (i.value.openMenu && !r.isMenuOpen && a("open"), H(ue), a("set-input-date", S.value)), v.value = !1, s.value = ue, l("text-input", B, S.value);
    }, C = (B) => {
      i.value.enabled ? (H(B.target.value), i.value.enterSubmit && u(S.value) && s.value !== "" ? (a("set-input-date", S.value, !0), S.value = null) : i.value.enterSubmit && s.value === "" && (S.value = null, a("clear"))) : Q(B);
    }, N = (B, M) => {
      i.value.enabled && i.value.tabSubmit && !M && H(B.target.value), i.value.tabSubmit && u(S.value) && s.value !== "" ? (a("set-input-date", S.value, !0, !0), S.value = null) : i.value.tabSubmit && s.value === "" && (S.value = null, a("clear"));
    }, E = () => {
      j.value = !0, a("focus"), dt().then(() => {
        var B;
        i.value.enabled && i.value.selectOnFocus && ((B = I.value) == null || B.select());
      });
    }, Q = (B) => {
      if (x(B, y.value, !0), i.value.enabled && i.value.openMenu && !m.value.input) {
        if (i.value.openMenu === "open" && !r.isMenuOpen) return a("open");
        if (i.value.openMenu === "toggle") return a("toggle");
      } else i.value.enabled || a("toggle");
    }, se = () => {
      a("real-blur"), j.value = !1, (!r.isMenuOpen || m.value.enabled && m.value.input) && a("blur"), o.autoApply && i.value.enabled && S.value && !r.isMenuOpen && (a("set-input-date", S.value), a("select-date"), S.value = null);
    }, ce = (B) => {
      x(B, y.value, !0), a("clear");
    }, ve = () => {
      a("close");
    }, be = (B) => {
      if (B.key === "Tab" && N(B), B.key === "Enter" && C(B), B.key === "Escape" && i.value.escClose && ve(), !i.value.enabled) {
        if (B.code === "Tab") return;
        B.preventDefault();
      }
    }, xe = () => {
      var B;
      (B = I.value) == null || B.focus({ preventScroll: !0 });
    }, ie = (B) => {
      S.value = B;
    }, ye = (B) => {
      B.key === Ve.tab && N(B, !0);
    };
    return n({
      focusInput: xe,
      setParsedDate: ie
    }), (B, M) => {
      var ee, ue;
      return q(), ne("div", { onClick: Q }, [
        B.$slots.trigger && !B.$slots["dp-input"] && !c(m).enabled ? fe(B.$slots, "trigger", { key: 0 }) : re("", !0),
        !B.$slots.trigger && (!c(m).enabled || c(m).input) ? (q(), ne("div", ec, [
          B.$slots["dp-input"] && !B.$slots.trigger && (!c(m).enabled || c(m).enabled && c(m).input) ? fe(B.$slots, "dp-input", {
            key: 0,
            value: c(s),
            isMenuOpen: e.isMenuOpen,
            onInput: P,
            onEnter: C,
            onTab: N,
            onClear: ce,
            onBlur: se,
            onKeypress: be,
            onPaste: Y,
            onFocus: E,
            openMenu: () => B.$emit("open"),
            closeMenu: () => B.$emit("close"),
            toggleMenu: () => B.$emit("toggle")
          }) : re("", !0),
          B.$slots["dp-input"] ? re("", !0) : (q(), ne("input", {
            key: 1,
            id: c(f).id,
            ref: "dp-input",
            "data-test-id": "dp-input",
            name: c(f).name,
            class: Me(U.value),
            inputmode: c(f).inputmode,
            placeholder: c(o).placeholder,
            disabled: c(_)(c(o).disabled),
            readonly: c(_)(c(o).readonly),
            required: c(_)(c(f).required),
            value: c(s),
            autocomplete: c(f).autocomplete,
            "aria-label": c(h).input,
            "aria-disabled": c(o).disabled || void 0,
            "aria-invalid": c(f).state === !1 ? !0 : void 0,
            onInput: P,
            onBlur: se,
            onFocus: E,
            onKeypress: be,
            onKeydown: M[0] || (M[0] = (O) => be(O)),
            onPaste: Y,
            onInvalid: M[1] || (M[1] = (O) => c(l)("invalid", O))
          }, null, 42, tc)),
          Ae("div", {
            onClick: M[4] || (M[4] = (O) => a("toggle"))
          }, [
            B.$slots["input-icon"] && !c(f).hideInputIcon ? (q(), ne("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: M[2] || (M[2] = (O) => a("toggle"))
            }, [
              fe(B.$slots, "input-icon")
            ])) : re("", !0),
            !B.$slots["input-icon"] && !c(f).hideInputIcon && !B.$slots["dp-input"] ? (q(), $e(c(Ha), {
              key: 1,
              "aria-label": (ee = c(h)) == null ? void 0 : ee.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: M[3] || (M[3] = (O) => a("toggle"))
            }, null, 8, ["aria-label"])) : re("", !0)
          ]),
          B.$slots["clear-icon"] && (c(f).alwaysClearable || c(s) && c(f).clearable && !c(o).disabled && !c(o).readonly) ? (q(), ne("span", ac, [
            fe(B.$slots, "clear-icon", { clear: ce })
          ])) : re("", !0),
          !B.$slots["clear-icon"] && (c(f).alwaysClearable || c(f).clearable && c(s) && !c(o).disabled && !c(o).readonly) ? (q(), ne("button", {
            key: 3,
            "aria-label": (ue = c(h)) == null ? void 0 : ue.clearInput,
            class: "dp--clear-btn",
            type: "button",
            "data-test-id": "clear-input-value-btn",
            onKeydown: M[5] || (M[5] = (O) => c(Z)(O, () => ce(O), !0, ye)),
            onClick: M[6] || (M[6] = Ia((O) => ce(O), ["prevent"]))
          }, [
            ft(c(nu), { class: "dp__input_icons" })
          ], 40, nc)) : re("", !0)
        ])) : re("", !0)
      ]);
    };
  }
}), lc = {
  ref: "action-row",
  class: "dp__action_row"
}, sc = ["title"], oc = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, ic = ["disabled"], uc = /* @__PURE__ */ Ke({
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { default: 0 }
  },
  emits: ["close-picker", "select-date", "select-now"],
  setup(e, { emit: n }) {
    const t = n, a = e, {
      rootEmit: r,
      rootProps: l,
      modelValue: s,
      defaults: { actionRow: o, multiCalendars: i, inline: h, range: m, multiDates: y, formats: b }
    } = Ye(), { isTimeValid: g, isMonthValid: D } = bt(), { buildMatrix: f } = Gt(), { formatPreview: p } = Xt(), { checkKeyDown: u, convertType: d } = Je(), { boolHtmlAttribute: v } = Ma(), $ = Be("cancel-btn"), W = Be("select-btn"), Z = Be("action-buttons-container"), x = Be("action-row"), _ = he(!1), I = he({});
    et(() => {
      l.arrowNavigation && f([Ze($), Ze(W)], "actionRow"), S(), globalThis.addEventListener("resize", S);
    }), _a(() => {
      globalThis.removeEventListener("resize", S);
    });
    const S = () => {
      _.value = !1, setTimeout(() => {
        var Q, se;
        const N = (Q = Z.value) == null ? void 0 : Q.getBoundingClientRect(), E = (se = x.value) == null ? void 0 : se.getBoundingClientRect();
        N && E && (I.value.maxWidth = `${E.width - N.width - 20}px`), _.value = !0;
      }, 0);
    }, j = X(() => m.value.enabled && !m.value.partialRange && s.value ? s.value.length === 2 : !0), U = X(
      () => !g.value(s.value) || !D.value(s.value) || !j.value
    ), J = () => {
      const N = b.value.preview;
      return l.timePicker || l.monthPicker, N(d(s.value));
    }, z = () => {
      const N = s.value;
      return i.value.count > 0 ? `${p(N[0])} - ${p(N[1])}` : [p(N[0]), p(N[1])];
    }, Y = X(() => !s.value || !a.menuMount ? "" : typeof b.value.preview == "string" ? Array.isArray(s.value) ? s.value.length === 2 && s.value[1] ? z() : y.value.enabled ? s.value.map((N) => `${p(N)}`) : l.modelAuto ? `${p(s.value[0])}` : `${p(s.value[0])} -` : p(s.value) : J()), H = () => y.value.enabled ? "; " : " - ", P = X(
      () => Array.isArray(Y.value) ? Y.value.join(H()) : Y.value
    ), C = () => {
      g.value(s.value) && D.value(s.value) && j.value ? t("select-date") : r("invalid-select");
    };
    return (N, E) => (q(), ne("div", lc, [
      N.$slots["action-row"] ? fe(N.$slots, "action-row", mt(gt({ key: 0 }, {
        modelValue: c(s),
        disabled: U.value,
        selectDate: () => N.$emit("select-date"),
        closePicker: () => N.$emit("close-picker")
      }))) : (q(), ne(Pe, { key: 1 }, [
        c(o).showPreview ? (q(), ne("div", {
          key: 0,
          class: "dp__selection_preview",
          title: P.value || void 0,
          style: ht(I.value)
        }, [
          N.$slots["action-preview"] && _.value ? fe(N.$slots, "action-preview", {
            key: 0,
            value: c(s)
          }) : re("", !0),
          !N.$slots["action-preview"] && _.value ? (q(), ne(Pe, { key: 1 }, [
            Nt(lt(P.value), 1)
          ], 64)) : re("", !0)
        ], 12, sc)) : re("", !0),
        Ae("div", oc, [
          N.$slots["action-buttons"] ? fe(N.$slots, "action-buttons", {
            key: 0,
            value: c(s)
          }) : re("", !0),
          N.$slots["action-buttons"] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
            !c(h).enabled && c(o).showCancel ? (q(), ne("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: E[0] || (E[0] = (Q) => N.$emit("close-picker")),
              onKeydown: E[1] || (E[1] = (Q) => c(u)(Q, () => N.$emit("close-picker")))
            }, lt(c(o).cancelBtnLabel), 545)) : re("", !0),
            c(o).showNow ? (q(), ne("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: E[2] || (E[2] = (Q) => N.$emit("select-now")),
              onKeydown: E[3] || (E[3] = (Q) => c(u)(Q, () => N.$emit("select-now")))
            }, lt(c(o).nowBtnLabel), 33)) : re("", !0),
            c(o).showSelect ? (q(), ne("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: c(v)(U.value),
              "data-test-id": "select-button",
              onKeydown: E[4] || (E[4] = (Q) => c(u)(Q, () => C())),
              onClick: C
            }, lt(c(o).selectBtnLabel), 41, ic)) : re("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), fn = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: n }
  } = Ye(), t = X(() => (l) => {
    var s;
    return (s = e.hideNavigation) == null ? void 0 : s.includes(l);
  }), a = X(() => (l) => n.value.count ? n.value.solo ? !0 : l === 0 : !0), r = X(() => (l) => n.value.count ? n.value.solo ? !0 : l === n.value.count - 1 : !0);
  return { hideNavigationButtons: t, showLeftIcon: a, showRightIcon: r };
}, cc = ["role", "aria-label", "tabindex"], dc = { class: "dp__selection_grid_header" }, fc = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], mc = ["aria-label"], za = /* @__PURE__ */ Ke({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    useRelative: { type: Boolean },
    height: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: n, emit: t }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: r, setMonthPicker: l } = Gt(), s = t, o = e, {
      rootProps: i,
      defaults: { ariaLabels: h, textInput: m, config: y }
    } = Ye(), { hideNavigationButtons: b } = fn(), { handleEventPropagation: g, convertType: D, checkKeyDown: f, checkStopPropagation: p, getElWithin: u, findFocusableEl: d } = Je(), v = Be("toggle-button"), $ = Be("overlay-container"), W = Be("grid-wrap"), Z = he(!1), x = he(null), _ = he([]), I = he(), S = he(0);
    Vl(() => {
      x.value = null;
    }), et(() => {
      dt().then(() => C()), o.noOverlayFocus || U(), j(!0);
    }), _a(() => j(!1));
    const j = (B) => {
      var M;
      i.arrowNavigation && ((M = o.headerRefs) != null && M.length ? l(B) : a(B));
    }, U = () => {
      var M;
      const B = Ze(W);
      B && (m.value.enabled || (x.value ? (M = x.value) == null || M.focus({ preventScroll: !0 }) : B.focus({ preventScroll: !0 })), Z.value = B.clientHeight < B.scrollHeight);
    }, J = X(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !o.useRelative,
        "dp--overlay-relative": o.useRelative
      })
    ), z = X(
      () => o.useRelative ? { height: `${o.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), Y = X(() => ({
      dp__overlay_col: !0
    })), H = X(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: Z.value,
        dp__button_bottom: o.isLast
      })
    ), P = X(() => {
      var B, M;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((B = o.items) == null ? void 0 : B.length) <= 6,
        dp__container_block: ((M = o.items) == null ? void 0 : M.length) > 6
      };
    });
    ct(
      () => o.items,
      () => C(!1),
      { deep: !0 }
    );
    const C = (B = !0) => {
      dt().then(() => {
        const M = Ze(x), ee = Ze(W), ue = Ze(v), O = Ze($), T = ue ? ue.getBoundingClientRect().height : 0;
        ee && (ee.getBoundingClientRect().height ? S.value = ee.getBoundingClientRect().height - T : S.value = y.value.modeHeight - T), M && O && B && (O.scrollTop = M.offsetTop - O.offsetTop - (S.value / 2 - M.getBoundingClientRect().height) - T);
      });
    }, N = (B) => {
      B.disabled || s("selected", B.value);
    }, E = () => {
      s("toggle"), s("reset-flow");
    }, Q = (B) => {
      y.value.escClose && (E(), g(B, y.value));
    }, se = (B, M, ee, ue) => {
      B && ((M.active || M.value === o.focusValue) && (x.value = B), i.arrowNavigation && (Array.isArray(_.value[ee]) ? _.value[ee][ue] = B : _.value[ee] = [B], ce()));
    }, ce = () => {
      var M, ee;
      const B = (M = o.headerRefs) != null && M.length ? [o.headerRefs].concat(_.value) : _.value.concat([o.skipButtonRef ? [] : [v.value]]);
      r(D(B), (ee = o.headerRefs) != null && ee.length ? "monthPicker" : "selectionGrid");
    }, ve = (B) => {
      i.arrowNavigation || p(B, y.value, !0);
    }, be = (B) => {
      I.value = B, s("hover-value", B);
    }, xe = () => {
      var B;
      if (E(), !o.isLast) {
        const M = u(o.menuWrapRef ?? null, "action-row");
        M && ((B = d(M)) == null || B.focus());
      }
    }, ie = (B) => {
      switch (B.key) {
        case Ve.esc:
          return Q(B);
        case Ve.arrowLeft:
          return ve(B);
        case Ve.arrowRight:
          return ve(B);
        case Ve.arrowUp:
          return ve(B);
        case Ve.arrowDown:
          return ve(B);
        default:
          return;
      }
    }, ye = (B) => {
      if (B.key === Ve.enter) return E();
      if (B.key === Ve.tab) return xe();
    };
    return n({ focusGrid: U }), (B, M) => {
      var ee;
      return q(), ne("div", {
        ref: "grid-wrap",
        class: Me(J.value),
        style: ht(z.value),
        role: e.useRelative ? void 0 : "dialog",
        "aria-label": e.overlayLabel,
        tabindex: e.useRelative ? void 0 : "0",
        onKeydown: ie,
        onClick: M[0] || (M[0] = Ia(() => {
        }, ["prevent"]))
      }, [
        Ae("div", {
          ref: "overlay-container",
          class: Me(P.value),
          style: ht({ "--dp-overlay-height": `${S.value}px` }),
          role: "grid"
        }, [
          Ae("div", dc, [
            fe(B.$slots, "header")
          ]),
          B.$slots.overlay ? fe(B.$slots, "overlay", { key: 0 }) : (q(!0), ne(Pe, { key: 1 }, We(e.items, (ue, O) => (q(), ne("div", {
            key: O,
            class: Me(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
            role: "row"
          }, [
            (q(!0), ne(Pe, null, We(ue, (T, k) => (q(), ne("div", {
              key: T.value,
              ref_for: !0,
              ref: (V) => se(V, T, O, k),
              role: "gridcell",
              class: Me(Y.value),
              "aria-selected": T.active || void 0,
              "aria-disabled": T.disabled || void 0,
              tabindex: "0",
              "data-test-id": T.text,
              onClick: Ia((V) => N(T), ["prevent"]),
              onKeydown: (V) => c(f)(V, () => N(T), !0),
              onMouseover: (V) => be(T.value)
            }, [
              Ae("div", {
                class: Me(T.className)
              }, [
                B.$slots.item ? fe(B.$slots, "item", {
                  key: 0,
                  item: T
                }) : re("", !0),
                B.$slots.item ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                  Nt(lt(T.text), 1)
                ], 64))
              ], 2)
            ], 42, fc))), 128))
          ], 2))), 128))
        ], 6),
        B.$slots["button-icon"] ? Za((q(), ne("button", {
          key: 0,
          ref: "toggle-button",
          type: "button",
          "aria-label": (ee = c(h)) == null ? void 0 : ee.toggleOverlay,
          class: Me(H.value),
          tabindex: "0",
          onClick: E,
          onKeydown: ye
        }, [
          fe(B.$slots, "button-icon")
        ], 42, mc)), [
          [Ja, !c(b)(e.type)]
        ]) : re("", !0)
      ], 46, cc);
    };
  }
}), hc = ["data-dp-mobile"], mn = /* @__PURE__ */ Ke({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: n }
    } = Ye(), { isMobile: t } = cn(), a = X(
      () => n.value.count > 0 ? [...new Array(n.value.count).keys()] : [0]
    );
    return (r, l) => (q(), ne("div", {
      class: Me({
        dp__menu_inner: !e.stretch,
        "dp--menu--inner-stretched": e.stretch,
        dp__flex_display: c(n).count > 0,
        "dp--flex-display-collapsed": e.collapse
      }),
      "data-dp-mobile": c(t)
    }, [
      fe(r.$slots, "default", {
        instances: a.value,
        wrapClass: { dp__instance_calendar: c(n).count > 0 }
      })
    ], 10, hc));
  }
}), vc = ["data-dp-element", "aria-label", "aria-disabled"], Ea = /* @__PURE__ */ Ke({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const { checkKeyDown: t } = Je(), a = n, r = Be("arrow-btn");
    return et(() => a("set-ref", r)), (l, s) => (q(), ne("button", {
      ref: "arrow-btn",
      type: "button",
      "data-dp-element": e.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled || void 0,
      onClick: s[0] || (s[0] = (o) => a("activate")),
      onKeydown: s[1] || (s[1] = (o) => c(t)(o, () => a("activate"), !0))
    }, [
      Ae("span", {
        class: Me(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        fe(l.$slots, "default")
      ], 2)
    ], 40, vc));
  }
}), pc = ["aria-label", "data-test-id"], yl = /* @__PURE__ */ Ke({
  __name: "YearModePicker",
  props: {
    items: {},
    instance: {},
    year: {},
    showYearPicker: { type: Boolean, default: !1 },
    isDisabled: {}
  },
  emits: ["handle-year", "year-select", "toggle-year-picker"],
  setup(e, { emit: n }) {
    const t = n, a = e, { showRightIcon: r, showLeftIcon: l } = fn(), {
      rootProps: s,
      defaults: { config: o, ariaLabels: i, ui: h }
    } = Ye(), { showTransition: m, transitionName: y } = Va(), { formatYear: b } = Xt(), { boolHtmlAttribute: g } = Ma(), D = he(!1), f = X(() => b(a.year)), p = (v = !1, $) => {
      D.value = !D.value, t("toggle-year-picker", { flow: v, show: $ });
    }, u = (v) => {
      D.value = !1, t("year-select", v);
    }, d = (v = !1) => {
      t("handle-year", v);
    };
    return (v, $) => {
      var W, Z, x, _, I;
      return q(), ne(Pe, null, [
        Ae("div", {
          class: Me(["dp--year-mode-picker", { "dp--hidden-el": D.value }])
        }, [
          c(l)(e.instance) ? (q(), $e(Ea, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (W = c(i)) == null ? void 0 : W.prevYear,
            disabled: c(g)(e.isDisabled(!1)),
            class: Me((Z = c(h)) == null ? void 0 : Z.navBtnPrev),
            onActivate: $[0] || ($[0] = (S) => d(!1))
          }, {
            default: Oe(() => [
              v.$slots["arrow-left"] ? fe(v.$slots, "arrow-left", { key: 0 }) : re("", !0),
              v.$slots["arrow-left"] ? re("", !0) : (q(), $e(c(dl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : re("", !0),
          Ae("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(x = c(i)) == null ? void 0 : x.openYearsOverlay}`,
            "data-test-id": `year-mode-btn-${e.instance}`,
            onClick: $[1] || ($[1] = () => p(!1)),
            onKeydown: $[2] || ($[2] = ql(() => p(!1), ["enter"]))
          }, [
            v.$slots.year ? fe(v.$slots, "year", {
              key: 0,
              text: f.value,
              value: e.year
            }) : re("", !0),
            v.$slots.year ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
              Nt(lt(e.year), 1)
            ], 64))
          ], 40, pc),
          c(r)(e.instance) ? (q(), $e(Ea, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (_ = c(i)) == null ? void 0 : _.nextYear,
            disabled: c(g)(e.isDisabled(!0)),
            class: Me((I = c(h)) == null ? void 0 : I.navBtnNext),
            onActivate: $[3] || ($[3] = (S) => d(!0))
          }, {
            default: Oe(() => [
              v.$slots["arrow-right"] ? fe(v.$slots, "arrow-right", { key: 0 }) : re("", !0),
              v.$slots["arrow-right"] ? re("", !0) : (q(), $e(c(fl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : re("", !0)
        ], 2),
        ft(xa, {
          name: c(y)(e.showYearPicker),
          css: c(m)
        }, {
          default: Oe(() => {
            var S, j;
            return [
              e.showYearPicker ? (q(), $e(za, {
                key: 0,
                items: e.items,
                config: c(o),
                "is-last": c(s).autoApply && !c(o).keepActionRow,
                "overlay-label": (j = (S = c(i)) == null ? void 0 : S.yearPicker) == null ? void 0 : j.call(S, !0),
                type: "year",
                onToggle: p,
                onSelected: $[4] || ($[4] = (U) => u(U))
              }, at({
                "button-icon": Oe(() => [
                  v.$slots["calendar-icon"] ? fe(v.$slots, "calendar-icon", { key: 0 }) : re("", !0),
                  v.$slots["calendar-icon"] ? re("", !0) : (q(), $e(c(Ha), { key: 1 }))
                ]),
                _: 2
              }, [
                v.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: Oe(({ item: U }) => [
                    fe(v.$slots, "year-overlay-value", {
                      text: U.text,
                      value: U.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["items", "config", "is-last", "overlay-label"])) : re("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 64);
    };
  }
}), gl = (e) => {
  const {
    getDate: n,
    rootEmit: t,
    state: a,
    month: r,
    year: l,
    modelValue: s,
    calendars: o,
    rootProps: i,
    defaults: { multiCalendars: h, range: m, safeDates: y, filters: b, highlight: g }
  } = Ye(), { resetDate: D, getYearFromDate: f, checkHighlightYear: p, groupListAndMap: u } = st(), { getYears: d } = dn(), { validateMonthYear: v, checkMinMaxValue: $ } = bt(), W = he([!1]), Z = X(() => d()), x = X(() => (E, Q) => {
    const se = Se(D(n()), {
      month: r.value(E),
      year: l.value(E)
    }), ce = Q ? Zr(se) : ya(se);
    return v(ce, i.preventMinMaxNavigation, Q);
  }), _ = () => Array.isArray(s.value) && h.value.solo && s.value[1], I = () => {
    for (let E = 0; E < h.value.count; E++)
      if (E === 0)
        o.value[E] = o.value[0];
      else if (E === h.value.count - 1 && _())
        o.value[E] = {
          month: Ce(s.value[1]),
          year: _e(s.value[1])
        };
      else {
        const Q = Se(n(), o.value[E - 1]);
        o.value[E] = { month: Ce(Q), year: _e(Qn(Q, 1)) };
      }
  }, S = (E) => {
    if (!E) return I();
    const Q = Se(n(), o.value[E]);
    return o.value[0].year = _e(ul(Q, h.value.count - 1)), I();
  }, j = (E, Q) => {
    const se = ao(Q, E);
    return m.value.showLastInRange && se > 1 ? Q : E;
  }, U = (E) => i.focusStartDate || h.value.solo ? E[0] : E[1] ? j(E[0], E[1]) : E[0], J = () => {
    if (s.value) {
      const E = Array.isArray(s.value) ? U(s.value) : s.value;
      o.value[0] = { month: Ce(E), year: _e(E) };
    }
  }, z = () => {
    J(), h.value.count && I();
  };
  ct(s, (E, Q) => {
    a.isTextInputDate && JSON.stringify(E ?? {}) !== JSON.stringify(Q ?? {}) && z();
  }), et(() => {
    z();
  });
  const Y = (E, Q) => {
    o.value[Q].year = E, t("update-month-year", { instance: Q, year: E, month: o.value[Q].month }), h.value.count && !h.value.solo && S(Q);
  }, H = X(() => (E) => u(Z.value, (Q) => {
    var be;
    const se = l.value(E) === Q.value, ce = $(
      Q.value,
      f(y.value.minDate),
      f(y.value.maxDate)
    ) || ((be = b.value.years) == null ? void 0 : be.includes(l.value(E))), ve = p(g.value, Q.value);
    return { active: se, disabled: ce, highlighted: ve };
  })), P = (E, Q) => {
    Y(E, Q), N(Q);
  }, C = (E, Q = !1) => {
    if (!x.value(E, Q)) {
      const se = Q ? l.value(E) + 1 : l.value(E) - 1;
      Y(se, E);
    }
  }, N = (E, Q = !1, se) => {
    Q || e("reset-flow"), se === void 0 ? W.value[E] = !W.value[E] : W.value[E] = se, W.value[E] ? t("overlay-toggle", { open: !0, overlay: ut.year }) : t("overlay-toggle", { open: !1, overlay: ut.year });
  };
  return {
    isDisabled: x,
    groupedYears: H,
    showYearPicker: W,
    selectYear: Y,
    setStartDate: () => {
      i.startDate && (s.value && i.focusStartDate || !s.value) && Y(_e(n(i.startDate)), 0);
    },
    toggleYearPicker: N,
    handleYearSelect: P,
    handleYear: C
  };
}, hn = () => {
  const { isDateAfter: e, isDateBefore: n, isDateEqual: t } = st(), {
    getDate: a,
    rootEmit: r,
    rootProps: l,
    modelValue: s,
    defaults: { range: o }
  } = Ye();
  return {
    getRangeWithFixedDate: (i) => Array.isArray(s.value) && (s.value.length === 2 || s.value.length === 1 && o.value.partialRange) ? o.value.fixedStart && (e(i, s.value[0]) || t(i, s.value[0])) ? [s.value[0], i] : o.value.fixedEnd && (n(i, s.value[1]) || t(i, s.value[1])) ? [i, s.value[1]] : (r("invalid-fixed-range", i), s.value) : [],
    setPresetDate: (i) => {
      Array.isArray(i.value) && i.value.length <= 2 && o.value.enabled ? s.value = i.value.map((h) => a(h)) : Array.isArray(i.value) || (s.value = a(i.value));
    },
    checkRangeAutoApply: (i, h, m) => {
      o && (i[0] && i[1] && l.autoApply && h("auto-apply", m), i[0] && !i[1] && (l.modelAuto || o.value.partialRange) && l.autoApply && h("auto-apply", m));
    },
    setMonthOrYearRange: (i) => {
      let h = s.value ? s.value.slice() : [];
      return h.length === 2 && h[1] !== null && (h = []), h.length ? (n(i, h[0]) ? h.unshift(i) : h[1] = i, r("range-end", i)) : (h = [i], r("range-start", i)), h;
    },
    handleMultiDatesSelect: (i, h) => {
      if (s.value && Array.isArray(s.value))
        if (s.value.some((m) => t(i, m))) {
          const m = s.value.filter((y) => !t(y, i));
          s.value = m.length ? m : null;
        } else (h && +h > s.value.length || !h) && s.value.push(i);
      else
        s.value = [i];
    }
  };
}, yc = (e, n) => {
  const {
    getDate: t,
    rootEmit: a,
    state: r,
    calendars: l,
    year: s,
    modelValue: o,
    rootProps: i,
    defaults: { range: h, highlight: m, safeDates: y, filters: b, multiDates: g }
  } = Ye();
  qa(() => {
    r.isTextInputDate && P(_e(t(i.startDate)), 0);
  });
  const { checkMinMaxRange: D, checkMinMaxValue: f } = bt(), { isDateBetween: p, resetDateTime: u, resetDate: d, getMinMonth: v, getMaxMonth: $, checkHighlightMonth: W, groupListAndMap: Z } = st(), { checkRangeAutoApply: x, getRangeWithFixedDate: _, handleMultiDatesSelect: I, setMonthOrYearRange: S, setPresetDate: j } = hn(), { padZero: U } = Je(), { getMonths: J, isOutOfYearRange: z } = dn(), Y = X(() => J()), H = he(null), {
    selectYear: P,
    groupedYears: C,
    showYearPicker: N,
    toggleYearPicker: E,
    handleYearSelect: Q,
    handleYear: se,
    isDisabled: ce,
    setStartDate: ve
  } = gl(n);
  et(() => {
    ve();
  });
  const be = (A) => A ? { month: Ce(A), year: _e(A) } : { month: null, year: null }, xe = () => o.value ? Array.isArray(o.value) ? o.value.map((A) => be(A)) : be(o.value) : be(), ie = (A, w) => {
    const G = l.value[A], de = xe();
    return Array.isArray(de) ? de.some((K) => K.year === (G == null ? void 0 : G.year) && K.month === w) : (G == null ? void 0 : G.year) === de.year && w === de.month;
  }, ye = (A, w, G) => {
    var K, De;
    const de = xe();
    return Array.isArray(de) ? s.value(w) === ((K = de[G]) == null ? void 0 : K.year) && A === ((De = de[G]) == null ? void 0 : De.month) : !1;
  }, B = (A, w) => {
    if (h.value.enabled) {
      const G = xe();
      if (Array.isArray(o.value) && Array.isArray(G)) {
        const de = ye(A, w, 0) || ye(A, w, 1), K = Se(d(t()), { month: A, year: s.value(w) });
        return p(o.value, H.value, K) && !de;
      }
      return !1;
    }
    return !1;
  }, M = X(() => (A) => Z(Y.value, (w) => {
    var we;
    const G = ie(A, w.value), de = f(
      w.value,
      v(s.value(A), y.value.minDate),
      $(s.value(A), y.value.maxDate)
    ) || ae(y.value.disabledDates, s.value(A), w.value) || ((we = b.value.months) == null ? void 0 : we.includes(w.value)) || !F(y.value.allowedDates, s.value(A), w.value) || z(s.value(A)), K = B(w.value, A), De = W(m.value, w.value, s.value(A));
    return { active: G, disabled: de, isBetween: K, highlighted: De };
  })), ee = (A, w) => Se(d(t()), { month: A, year: s.value(w) }), ue = (A, w) => {
    const G = o.value ? o.value : d(t());
    o.value = Se(G, { month: A, year: s.value(w) }), n("auto-apply"), n("update-flow-step");
  }, O = (A, w) => {
    const G = ee(A, w);
    h.value.fixedEnd || h.value.fixedStart ? o.value = _(G) : o.value ? D(G, o.value) && (o.value = S(ee(A, w))) : o.value = [ee(A, w)], dt().then(() => {
      x(o.value, n, o.value.length < 2);
    });
  }, T = (A, w) => {
    I(ee(A, w), g.value.limit), n("auto-apply", !0);
  }, k = (A, w) => (l.value[w].month = A, le(w, l.value[w].year, A), g.value.enabled ? T(A, w) : h.value.enabled ? O(A, w) : ue(A, w)), V = (A, w) => {
    P(A, w), le(w, A, null);
  }, le = (A, w, G) => {
    let de = G;
    if (!de && de !== 0) {
      const K = xe();
      de = Array.isArray(K) ? K[A].month : K.month;
    }
    a("update-month-year", { instance: A, year: w, month: de });
  }, oe = (A, w) => {
    H.value = ee(A, w);
  }, L = (A) => {
    j({
      value: A
    }), n("auto-apply");
  }, ae = (A, w, G) => {
    if (A instanceof Map) {
      const de = `${U(G + 1)}-${w}`;
      return A.size ? A.has(de) : !1;
    }
    return typeof A == "function" ? A(u(Se(t(), { month: G, year: w }), !0)) : !1;
  }, F = (A, w, G) => {
    if (A instanceof Map) {
      const de = `${U(G + 1)}-${w}`;
      return A.size ? A.has(de) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: M,
    groupedYears: C,
    year: s,
    isDisabled: ce,
    showYearPicker: N,
    modelValue: o,
    toggleYearPicker: E,
    handleYearSelect: Q,
    handleYear: se,
    presetDate: L,
    setHoverDate: oe,
    selectMonth: k,
    selectYear: V,
    getModelMonthYear: xe
  };
}, gc = /* @__PURE__ */ Ke({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, l = Qt(), { mapSlots: s } = Kt(), {
      rootProps: o,
      defaults: { config: i }
    } = Ye(), h = s(l, "yearMode");
    et(() => {
      a("mount");
    });
    const {
      groupedMonths: m,
      groupedYears: y,
      year: b,
      isDisabled: g,
      showYearPicker: D,
      modelValue: f,
      presetDate: p,
      setHoverDate: u,
      selectMonth: d,
      selectYear: v,
      toggleYearPicker: $,
      handleYearSelect: W,
      handleYear: Z,
      getModelMonthYear: x
    } = yc(r, a);
    return n({ getSidebarProps: () => ({
      modelValue: f,
      year: b,
      getModelMonthYear: x,
      selectMonth: d,
      selectYear: v,
      handleYear: Z
    }), presetDate: p, toggleYearPicker: (_) => $(0, _) }), (_, I) => (q(), $e(mn, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: Oe(({ instances: S, wrapClass: j }) => [
        (q(!0), ne(Pe, null, We(S, (U) => (q(), ne("div", {
          key: U,
          class: Me(j)
        }, [
          _.$slots["top-extra"] ? fe(_.$slots, "top-extra", {
            key: 0,
            value: c(f)
          }) : re("", !0),
          _.$slots["month-year"] ? fe(_.$slots, "month-year", gt({
            key: 1,
            ref_for: !0
          }, {
            year: c(b),
            months: c(m)(U),
            years: c(y)(U),
            selectMonth: c(d),
            selectYear: c(v),
            instance: U
          })) : (q(), $e(za, {
            key: 2,
            items: c(m)(U),
            "is-last": c(o).autoApply && !c(i).keepActionRow,
            height: c(i).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || c(o).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (J) => c(d)(J, U),
            onHoverValue: (J) => c(u)(J, U)
          }, at({
            header: Oe(() => [
              ft(yl, {
                items: c(y)(U),
                instance: U,
                "show-year-picker": c(D)[U],
                year: c(b)(U),
                "is-disabled": (J) => c(g)(U, J),
                onHandleYear: (J) => c(Z)(U, J),
                onYearSelect: (J) => c(W)(J, U),
                onToggleYearPicker: (J) => c($)(U, J == null ? void 0 : J.flow, J == null ? void 0 : J.show)
              }, at({ _: 2 }, [
                We(c(h), (J, z) => ({
                  name: J,
                  fn: Oe((Y) => [
                    fe(_.$slots, J, gt({ ref_for: !0 }, Y))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            _.$slots["month-overlay-value"] ? {
              name: "item",
              fn: Oe(({ item: J }) => [
                fe(_.$slots, "month-overlay-value", {
                  text: J.text,
                  value: J.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "onSelected", "onHoverValue"]))
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), wc = (e, n) => {
  const {
    rootEmit: t,
    getDate: a,
    state: r,
    modelValue: l,
    rootProps: s,
    defaults: { highlight: o, multiDates: i, filters: h, range: m, safeDates: y }
  } = Ye(), { getYears: b } = dn(), { isDateBetween: g, resetDate: D, resetDateTime: f, getYearFromDate: p, checkHighlightYear: u, groupListAndMap: d } = st(), { checkRangeAutoApply: v, setMonthOrYearRange: $ } = hn(), { checkMinMaxValue: W, checkMinMaxRange: Z } = bt();
  qa(() => {
    r.isTextInputDate && (_.value = _e(a(s.startDate)));
  });
  const x = he(null), _ = he();
  et(() => {
    s.startDate && (l.value && s.focusStartDate || !l.value) && (_.value = _e(a(s.startDate)));
  });
  const I = (Y) => Array.isArray(l.value) ? l.value.some((H) => _e(H) === Y) : l.value ? _e(l.value) === Y : !1, S = (Y) => m.value.enabled && Array.isArray(l.value) ? g(l.value, x.value, z(Y)) : !1, j = (Y) => {
    var H;
    return (H = y.value.allowedDates) != null && H.size ? y.value.allowedDates.has(`${Y}`) : !0;
  }, U = (Y) => y.value.disabledDates instanceof Map ? y.value.disabledDates.size ? y.value.disabledDates.has(`${Y}`) : !1 : typeof y.value.disabledDates == "function" ? y.value.disabledDates(_t(f(ya(a())), Y)) : !0, J = X(() => d(b(), (Y) => {
    const H = I(Y.value), P = W(
      Y.value,
      p(y.value.minDate),
      p(y.value.maxDate)
    ) || h.value.years.includes(Y.value) || !j(Y.value) || U(Y.value), C = S(Y.value) && !H, N = u(o.value, Y.value);
    return { active: H, disabled: P, isBetween: C, highlighted: N };
  })), z = (Y) => _t(D(ya(a())), Y);
  return {
    groupedYears: J,
    focusYear: _,
    setHoverValue: (Y) => {
      x.value = _t(D(a()), Y);
    },
    selectYear: (Y) => {
      var H;
      if (t("update-month-year", { instance: 0, year: Y, month: Number.NaN }), i.value.enabled)
        return l.value ? Array.isArray(l.value) && (((H = l.value) == null ? void 0 : H.map((P) => _e(P))).includes(Y) ? l.value = l.value.filter((P) => _e(P) !== Y) : l.value.push(_t(f(a()), Y))) : l.value = [_t(f(ya(a())), Y)], n("auto-apply", !0);
      m.value.enabled ? Z(z(Y), l.value) && (l.value = $(z(Y)), dt().then(() => {
        v(l.value, n, l.value.length < 2);
      })) : (l.value = z(Y), n("auto-apply"));
    }
  };
}, bc = /* @__PURE__ */ Ke({
  __name: "YearPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      modelValue: l,
      defaults: { config: s },
      rootProps: o
    } = Ye(), { groupedYears: i, focusYear: h, selectYear: m, setHoverValue: y } = wc(r, a);
    return n({ getSidebarProps: () => ({
      modelValue: l,
      selectYear: m
    }) }), (b, g) => (q(), ne("div", null, [
      b.$slots["top-extra"] ? fe(b.$slots, "top-extra", {
        key: 0,
        value: c(l)
      }) : re("", !0),
      b.$slots["month-year"] ? fe(b.$slots, "month-year", mt(gt({ key: 1 }, {
        years: c(i),
        selectYear: c(m)
      }))) : (q(), $e(za, {
        key: 2,
        items: c(i),
        "is-last": c(o).autoApply && !c(s).keepActionRow,
        height: c(s).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || c(o).textInput),
        "focus-value": c(h),
        type: "year",
        "use-relative": "",
        onSelected: c(m),
        onHoverValue: c(y)
      }, at({ _: 2 }, [
        b.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Oe(({ item: D }) => [
            fe(b.$slots, "year-overlay-value", {
              text: D.text,
              value: D.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), kc = {
  key: 0,
  class: "dp__time_input"
}, Dc = ["data-compact", "data-collapsed"], _c = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], xc = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], Mc = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], Tc = { key: 0 }, Pc = ["aria-label", "data-compact"], Oc = /* @__PURE__ */ Ke({
  __name: "TimeInput",
  props: {
    hours: {},
    minutes: {},
    seconds: {},
    order: {},
    closeTimePickerBtn: {},
    disabledTimesConfig: {},
    validateTime: {}
  },
  emits: ["update:hours", "update:minutes", "update:seconds", "overlay-opened", "overlay-closed", "set-hours", "set-minutes", "reset-flow", "mounted"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, { setTimePickerElements: l, setTimePickerBackRef: s } = Gt(), {
      getDate: o,
      rootEmit: i,
      rootProps: h,
      defaults: { ariaLabels: m, filters: y, config: b, range: g, multiCalendars: D, timeConfig: f }
    } = Ye(), { checkKeyDown: p, hoursToAmPmHours: u } = Je(), { boolHtmlAttribute: d } = Ma(), { sanitizeTime: v, groupListAndMap: $ } = st(), { transitionName: W, showTransition: Z } = Va(), x = na({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), _ = he("AM"), I = he(null), S = he([]), j = he(), U = he(!1);
    et(() => {
      a("mounted");
    });
    const J = (w) => Se(o(), {
      hours: w.hours,
      minutes: w.minutes,
      seconds: f.value.enableSeconds ? w.seconds : 0,
      milliseconds: 0
    }), z = X(
      () => (w) => ie(w, r[w]) || H(w, r[w])
    ), Y = X(() => ({ hours: r.hours, minutes: r.minutes, seconds: r.seconds })), H = (w, G) => g.value.enabled && !g.value.disableTimeRangeValidation ? !r.validateTime(w, G) : !1, P = (w, G) => {
      if (g.value.enabled && !g.value.disableTimeRangeValidation) {
        const de = G ? +f.value[`${w}Increment`] : -+f.value[`${w}Increment`], K = r[w] + de;
        return !r.validateTime(w, K);
      }
      return !1;
    }, C = X(() => (w) => !ue(+r[w] + +f.value[`${w}Increment`], w) || P(w, !0)), N = X(() => (w) => !ue(+r[w] - +f.value[`${w}Increment`], w) || P(w, !1)), E = (w, G) => Ur(Se(o(), w), G), Q = (w, G) => Ji(Se(o(), w), G), se = X(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !f.value.timePickerInline,
        dp__time_col_reg_block: !f.value.enableSeconds && f.value.is24 && !f.value.timePickerInline,
        dp__time_col_reg_inline: !f.value.enableSeconds && f.value.is24 && f.value.timePickerInline,
        dp__time_col_reg_with_button: !f.value.enableSeconds && !f.value.is24,
        dp__time_col_sec: f.value.enableSeconds && f.value.is24,
        dp__time_col_sec_with_button: f.value.enableSeconds && !f.value.is24
      })
    ), ce = X(
      () => f.value.timePickerInline && g.value.enabled && !D.value.count
    ), ve = X(() => {
      const w = [{ type: "hours" }];
      return f.value.enableMinutes && w.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), f.value.enableSeconds && w.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), w;
    }), be = X(() => ve.value.filter((w) => !w.separator)), xe = X(() => (w) => {
      if (w === "hours") {
        const G = oe(+r.hours);
        return { text: G < 10 ? `0${G}` : `${G}`, value: G };
      }
      return { text: r[w] < 10 ? `0${r[w]}` : `${r[w]}`, value: r[w] };
    }), ie = (w, G) => {
      var K;
      if (!r.disabledTimesConfig) return !1;
      const de = r.disabledTimesConfig(r.order, w === "hours" ? G : void 0);
      return de[w] ? !!((K = de[w]) != null && K.includes(G)) : !0;
    }, ye = (w, G) => G !== "hours" || _.value === "AM" ? w : w + 12, B = (w) => {
      const G = f.value.is24 ? 24 : 12, de = w === "hours" ? G : 60, K = +f.value[`${w}GridIncrement`], De = w === "hours" && !f.value.is24 ? K : 0, we = [];
      for (let Le = De; Le < de; Le += K)
        we.push({
          value: f.value.is24 ? Le : ye(Le, w),
          text: Le < 10 ? `0${Le}` : `${Le}`
        });
      return w === "hours" && !f.value.is24 && we.unshift({ value: _.value === "PM" ? 12 : 0, text: "12" }), $(we, (Le) => ({ active: !1, disabled: y.value.times[w].includes(Le.value) || !ue(Le.value, w) || ie(w, Le.value) || H(w, Le.value) }));
    }, M = (w) => w >= 0 ? w : 59, ee = (w) => w >= 0 ? w : 23, ue = (w, G) => {
      const de = h.minTime ? J(v(h.minTime)) : null, K = h.maxTime ? J(v(h.maxTime)) : null, De = J(
        v(
          Y.value,
          G,
          G === "minutes" || G === "seconds" ? M(w) : ee(w)
        )
      );
      return de && K ? (ka(De, K) || fa(De, K)) && (sa(De, de) || fa(De, de)) : de ? sa(De, de) || fa(De, de) : K ? ka(De, K) || fa(De, K) : !0;
    }, O = (w) => f.value[`no${w[0].toUpperCase() + w.slice(1)}Overlay`], T = (w) => {
      O(w) || (x[w] = !x[w], x[w] ? (U.value = !0, a("overlay-opened", w)) : (U.value = !1, a("overlay-closed", w)));
    }, k = (w) => w === "hours" ? Yt : w === "minutes" ? Lt : Ut, V = () => {
      j.value && clearTimeout(j.value);
    }, le = (w, G = !0, de) => {
      const K = G ? E : Q, De = G ? +f.value[`${w}Increment`] : -+f.value[`${w}Increment`];
      ue(+r[w] + De, w) && a(
        `update:${w}`,
        k(w)(
          K({ [w]: +r[w] }, { [w]: +f.value[`${w}Increment`] })
        )
      ), !(de != null && de.keyboard) && b.value.timeArrowHoldThreshold && (j.value = setTimeout(() => {
        le(w, G);
      }, b.value.timeArrowHoldThreshold));
    }, oe = (w) => f.value.is24 ? w : (w >= 12 ? _.value = "PM" : _.value = "AM", u(w)), L = () => {
      _.value === "PM" ? (_.value = "AM", a("update:hours", r.hours - 12)) : (_.value = "PM", a("update:hours", r.hours + 12)), i("am-pm-change", _.value);
    }, ae = (w) => {
      x[w] = !0;
    }, F = (w, G, de) => {
      if (w && h.arrowNavigation) {
        Array.isArray(S.value[G]) ? S.value[G][de] = w : S.value[G] = [w];
        const K = S.value.reduce(
          (De, we) => we.map((Le, nt) => [...De[nt] || [], we[nt]]),
          []
        );
        s(r.closeTimePickerBtn), I.value && (K[1] = K[1].concat(I.value)), l(K, r.order);
      }
    }, A = (w, G) => (T(w), a(`update:${w}`, G));
    return n({ openChildCmp: ae }), (w, G) => {
      var de;
      return c(h).disabled ? re("", !0) : (q(), ne("div", kc, [
        (q(!0), ne(Pe, null, We(ve.value, (K, De) => {
          var we, Le, nt;
          return q(), ne("div", {
            key: De,
            class: Me(se.value),
            "data-compact": ce.value && !c(f).enableSeconds,
            "data-collapsed": ce.value && c(f).enableSeconds
          }, [
            K.separator ? (q(), ne(Pe, { key: 0 }, [
              U.value ? re("", !0) : (q(), ne(Pe, { key: 0 }, [
                Nt(":")
              ], 64))
            ], 64)) : (q(), ne(Pe, { key: 1 }, [
              Ae("button", {
                ref_for: !0,
                ref: (ze) => F(ze, De, 0),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !c(f).timePickerInline,
                  dp__inc_dec_button_inline: c(f).timePickerInline,
                  dp__tp_inline_btn_top: c(f).timePickerInline,
                  dp__inc_dec_button_disabled: C.value(K.type),
                  "dp--hidden-el": U.value
                }),
                "data-test-id": `${K.type}-time-inc-btn-${r.order}`,
                "aria-label": (we = c(m)) == null ? void 0 : we.incrementValue(K.type),
                tabindex: "0",
                onKeydown: (ze) => c(p)(ze, () => le(K.type, !0, { keyboard: !0 }), !0),
                onClick: (ze) => c(b).timeArrowHoldThreshold ? void 0 : le(K.type, !0),
                onMousedown: (ze) => c(b).timeArrowHoldThreshold ? le(K.type, !0) : void 0,
                onMouseup: V
              }, [
                c(f).timePickerInline ? (q(), ne(Pe, { key: 1 }, [
                  w.$slots["tp-inline-arrow-up"] ? fe(w.$slots, "tp-inline-arrow-up", { key: 0 }) : (q(), ne(Pe, { key: 1 }, [
                    G[2] || (G[2] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    G[3] || (G[3] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (q(), ne(Pe, { key: 0 }, [
                  w.$slots["arrow-up"] ? fe(w.$slots, "arrow-up", { key: 0 }) : re("", !0),
                  w.$slots["arrow-up"] ? re("", !0) : (q(), $e(c(hl), { key: 1 }))
                ], 64))
              ], 42, _c),
              Ae("button", {
                ref_for: !0,
                ref: (ze) => F(ze, De, 1),
                type: "button",
                "aria-label": `${xe.value(K.type).text}-${(Le = c(m)) == null ? void 0 : Le.openTpOverlay(K.type)}`,
                class: Me({
                  dp__time_display: !0,
                  dp__time_display_block: !c(f).timePickerInline,
                  dp__time_display_inline: c(f).timePickerInline,
                  "dp--time-invalid": z.value(K.type),
                  "dp--time-overlay-btn": !z.value(K.type),
                  "dp--hidden-el": U.value
                }),
                disabled: c(d)(O(K.type)),
                tabindex: "0",
                "data-test-id": `${K.type}-toggle-overlay-btn-${r.order}`,
                onKeydown: (ze) => c(p)(ze, () => T(K.type), !0),
                onClick: (ze) => T(K.type)
              }, [
                w.$slots[K.type] ? fe(w.$slots, K.type, {
                  key: 0,
                  text: xe.value(K.type).text,
                  value: xe.value(K.type).value
                }) : re("", !0),
                w.$slots[K.type] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                  Nt(lt(xe.value(K.type).text), 1)
                ], 64))
              ], 42, xc),
              Ae("button", {
                ref_for: !0,
                ref: (ze) => F(ze, De, 2),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !c(f).timePickerInline,
                  dp__inc_dec_button_inline: c(f).timePickerInline,
                  dp__tp_inline_btn_bottom: c(f).timePickerInline,
                  dp__inc_dec_button_disabled: N.value(K.type),
                  "dp--hidden-el": U.value
                }),
                "data-test-id": `${K.type}-time-dec-btn-${r.order}`,
                "aria-label": (nt = c(m)) == null ? void 0 : nt.decrementValue(K.type),
                tabindex: "0",
                onKeydown: (ze) => c(p)(ze, () => le(K.type, !1, { keyboard: !0 }), !0),
                onClick: (ze) => c(b).timeArrowHoldThreshold ? void 0 : le(K.type, !1),
                onMousedown: (ze) => c(b).timeArrowHoldThreshold ? le(K.type, !1) : void 0,
                onMouseup: V
              }, [
                c(f).timePickerInline ? (q(), ne(Pe, { key: 1 }, [
                  w.$slots["tp-inline-arrow-down"] ? fe(w.$slots, "tp-inline-arrow-down", { key: 0 }) : (q(), ne(Pe, { key: 1 }, [
                    G[4] || (G[4] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    G[5] || (G[5] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (q(), ne(Pe, { key: 0 }, [
                  w.$slots["arrow-down"] ? fe(w.$slots, "arrow-down", { key: 0 }) : re("", !0),
                  w.$slots["arrow-down"] ? re("", !0) : (q(), $e(c(vl), { key: 1 }))
                ], 64))
              ], 42, Mc)
            ], 64))
          ], 10, Dc);
        }), 128)),
        c(f).is24 ? re("", !0) : (q(), ne("div", Tc, [
          w.$slots["am-pm-button"] ? fe(w.$slots, "am-pm-button", {
            key: 0,
            toggle: L,
            value: _.value
          }) : re("", !0),
          w.$slots["am-pm-button"] ? re("", !0) : (q(), ne("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: I,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (de = c(m)) == null ? void 0 : de.amPmButton,
            tabindex: "0",
            "data-compact": ce.value,
            onClick: L,
            onKeydown: G[0] || (G[0] = (K) => c(p)(K, () => L(), !0))
          }, lt(_.value), 41, Pc))
        ])),
        (q(!0), ne(Pe, null, We(be.value, (K, De) => (q(), $e(xa, {
          key: De,
          name: c(W)(x[K.type]),
          css: c(Z)
        }, {
          default: Oe(() => {
            var we, Le;
            return [
              x[K.type] ? (q(), $e(za, {
                key: 0,
                items: B(K.type),
                "is-last": c(h).autoApply && !c(b).keepActionRow,
                type: K.type,
                "aria-labels": c(m),
                "overlay-label": (Le = (we = c(m)).timeOverlay) == null ? void 0 : Le.call(we, K.type),
                onSelected: (nt) => A(K.type, nt),
                onToggle: (nt) => T(K.type),
                onResetFlow: G[1] || (G[1] = (nt) => w.$emit("reset-flow"))
              }, at({
                "button-icon": Oe(() => [
                  w.$slots["clock-icon"] ? fe(w.$slots, "clock-icon", { key: 0 }) : re("", !0),
                  w.$slots["clock-icon"] ? re("", !0) : (q(), $e(Ln(c(f).timePickerInline ? c(Ha) : c(ml)), { key: 1 }))
                ]),
                _: 2
              }, [
                w.$slots[`${K.type}-overlay-value`] ? {
                  name: "item",
                  fn: Oe(({ item: nt }) => [
                    fe(w.$slots, `${K.type}-overlay-value`, {
                      text: nt.text,
                      value: nt.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                w.$slots[`${K.type}-overlay-header`] ? {
                  name: "header",
                  fn: Oe(() => [
                    fe(w.$slots, `${K.type}-overlay-header`, {
                      toggle: () => T(K.type)
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["items", "is-last", "type", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : re("", !0)
            ];
          }),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Ac = ["data-dp-mobile"], Sc = ["aria-label", "tabindex"], $c = ["role", "aria-label", "tabindex"], Cc = ["aria-label"], wl = /* @__PURE__ */ Ke({
  __name: "TimePicker",
  props: {
    hours: {},
    minutes: {},
    seconds: {},
    disabledTimesConfig: { type: [Function, null] },
    noOverlayFocus: { type: Boolean },
    validateTime: { type: Function }
  },
  emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      rootEmit: l,
      modelValue: s,
      rootProps: o,
      defaults: { ariaLabels: i, textInput: h, config: m, range: y, timeConfig: b }
    } = Ye(), { isModelAuto: g } = st(), { checkKeyDown: D, findFocusableEl: f } = Je(), { buildMatrix: p, setTimePicker: u } = Gt(), { transitionName: d, showTransition: v } = Va(), { hideNavigationButtons: $ } = fn(), { mapSlots: W } = Kt(), { isMobile: Z } = cn(), x = Qt(), _ = Be("overlay"), I = Be("open-tp-btn"), S = Be("close-tp-btn"), j = Be("tp-input"), U = he(!1);
    et(() => {
      a("mount"), !o.timePicker && o.arrowNavigation ? p([Ze(I.value)], "time") : u(!0, o.timePicker);
    });
    const J = X(() => y.value.enabled && o.modelAuto ? g(s.value) : !0), z = he(!1), Y = (ie) => ({
      hours: Array.isArray(r.hours) ? r.hours[ie] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[ie] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[ie] : r.seconds
    }), H = X(() => {
      const ie = [];
      if (y.value.enabled)
        for (let ye = 0; ye < 2; ye++)
          ie.push(Y(ye));
      else
        ie.push(Y(0));
      return ie;
    }), P = (ie, ye = !1, B = "") => {
      ye || a("reset-flow"), z.value = ie, l("overlay-toggle", { open: ie, overlay: ut.time }), o.arrowNavigation && u(ie), dt(() => {
        var M;
        B !== "" && ((M = j.value) != null && M[0]) && j.value[0].openChildCmp(B);
      });
    }, C = X(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: o.autoApply && !m.value.keepActionRow
    })), N = W(x, "timePicker"), E = (ie, ye, B) => y.value.enabled ? ye === 0 ? [ie, H.value[1][B]] : [H.value[0][B], ie] : ie, Q = (ie) => {
      a("update:hours", ie);
    }, se = (ie) => {
      a("update:minutes", ie);
    }, ce = (ie) => {
      a("update:seconds", ie);
    }, ve = () => {
      if (_.value && !h.value.enabled && !r.noOverlayFocus) {
        const ie = f(_.value);
        ie && ie.focus({ preventScroll: !0 });
      }
    }, be = (ie) => {
      U.value = !1, l("overlay-toggle", { open: !1, overlay: ie });
    }, xe = (ie) => {
      U.value = !0, l("overlay-toggle", { open: !0, overlay: ie });
    };
    return n({ toggleTimePicker: P }), (ie, ye) => {
      var B;
      return q(), ne("div", {
        class: "dp--tp-wrap",
        "data-dp-mobile": c(Z)
      }, [
        !c(o).timePicker && !c(b).timePickerInline ? Za((q(), ne("button", {
          key: 0,
          ref: "open-tp-btn",
          type: "button",
          class: Me({ ...C.value, "dp--hidden-el": z.value }),
          "aria-label": (B = c(i)) == null ? void 0 : B.openTimePicker,
          tabindex: e.noOverlayFocus ? void 0 : 0,
          "data-test-id": "open-time-picker-btn",
          onKeydown: ye[0] || (ye[0] = (M) => c(D)(M, () => P(!0))),
          onClick: ye[1] || (ye[1] = (M) => P(!0))
        }, [
          ie.$slots["clock-icon"] ? fe(ie.$slots, "clock-icon", { key: 0 }) : re("", !0),
          ie.$slots["clock-icon"] ? re("", !0) : (q(), $e(c(ml), { key: 1 }))
        ], 42, Sc)), [
          [Ja, !c($)("time")]
        ]) : re("", !0),
        ft(xa, {
          name: c(d)(z.value),
          css: c(v) && !c(b).timePickerInline
        }, {
          default: Oe(() => {
            var M, ee;
            return [
              z.value || c(o).timePicker || c(b).timePickerInline ? (q(), ne("div", {
                key: 0,
                ref: "overlay",
                role: c(b).timePickerInline ? void 0 : "dialog",
                class: Me({
                  dp__overlay: !c(b).timePickerInline,
                  "dp--overlay-absolute": !c(o).timePicker && !c(b).timePickerInline,
                  "dp--overlay-relative": c(o).timePicker
                }),
                style: ht(c(o).timePicker ? { height: `${c(m).modeHeight}px` } : void 0),
                "aria-label": (M = c(i)) == null ? void 0 : M.timePicker,
                tabindex: c(b).timePickerInline ? void 0 : 0
              }, [
                Ae("div", {
                  class: Me(
                    c(b).timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  ie.$slots["time-picker-overlay"] ? fe(ie.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: Q,
                    setMinutes: se,
                    setSeconds: ce
                  }) : re("", !0),
                  ie.$slots["time-picker-overlay"] ? re("", !0) : (q(), ne("div", {
                    key: 1,
                    class: Me(c(b).timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (q(!0), ne(Pe, null, We(H.value, (ue, O) => Za((q(), $e(Oc, gt({ key: O }, { ref_for: !0 }, {
                      order: O,
                      hours: ue.hours,
                      minutes: ue.minutes,
                      seconds: ue.seconds,
                      closeTimePickerBtn: S.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: O === 0 ? c(y).fixedStart : c(y).fixedEnd
                    }, {
                      ref_for: !0,
                      ref: "tp-input",
                      "validate-time": (T, k) => e.validateTime(T, E(k, O, T)),
                      "onUpdate:hours": (T) => Q(E(T, O, "hours")),
                      "onUpdate:minutes": (T) => se(E(T, O, "minutes")),
                      "onUpdate:seconds": (T) => ce(E(T, O, "seconds")),
                      onMounted: ve,
                      onOverlayClosed: be,
                      onOverlayOpened: xe
                    }), at({ _: 2 }, [
                      We(c(N), (T, k) => ({
                        name: T,
                        fn: Oe((V) => [
                          fe(ie.$slots, T, gt({ ref_for: !0 }, V))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ja, O === 0 ? !0 : J.value]
                    ])), 128))
                  ], 2)),
                  !c(o).timePicker && !c(b).timePickerInline ? Za((q(), ne("button", {
                    key: 2,
                    ref: "close-tp-btn",
                    type: "button",
                    class: Me({ ...C.value, "dp--hidden-el": U.value }),
                    "aria-label": (ee = c(i)) == null ? void 0 : ee.closeTimePicker,
                    tabindex: "0",
                    onKeydown: ye[2] || (ye[2] = (ue) => c(D)(ue, () => P(!1))),
                    onClick: ye[3] || (ye[3] = (ue) => P(!1))
                  }, [
                    ie.$slots["calendar-icon"] ? fe(ie.$slots, "calendar-icon", { key: 0 }) : re("", !0),
                    ie.$slots["calendar-icon"] ? re("", !0) : (q(), $e(c(Ha), { key: 1 }))
                  ], 42, Cc)), [
                    [Ja, !c($)("time")]
                  ]) : re("", !0)
                ], 2)
              ], 14, $c)) : re("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 8, Ac);
    };
  }
}), bl = (e) => {
  const {
    getDate: n,
    modelValue: t,
    time: a,
    rootProps: r,
    defaults: { range: l, timeConfig: s }
  } = Ye(), { isDateEqual: o, setTime: i } = st(), h = (x, _) => Array.isArray(a[x]) ? a[x][_] : a[x], m = (x) => s.value.enableSeconds ? Array.isArray(a.seconds) ? a.seconds[x] : a.seconds : 0, y = (x, _) => x ? i(
    _ !== void 0 ? { hours: h("hours", _), minutes: h("minutes", _), seconds: m(_) } : { hours: a.hours, minutes: a.minutes, seconds: m() },
    x
  ) : Zi(n(), m(_)), b = (x, _) => {
    a[x] = _;
  }, g = X(() => r.modelAuto && l.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : l.value.enabled), D = (x, _) => {
    const I = Object.fromEntries(
      Object.keys(a).map((S) => S === x ? [S, _] : [S, a[S]].slice())
    );
    if (g.value && !l.value.disableTimeRangeValidation) {
      const S = (U) => t.value ? i(
        {
          hours: I.hours[U],
          minutes: I.minutes[U],
          seconds: I.seconds[U]
        },
        t.value[U]
      ) : null, j = (U) => Xi(t.value[U], 0);
      return !(o(S(0), S(1)) && (sa(S(0), j(1)) || ka(S(1), j(0))));
    }
    return !0;
  }, f = (x, _) => {
    D(x, _) && (b(x, _), e && e());
  }, p = (x) => {
    f("hours", x);
  }, u = (x) => {
    f("minutes", x);
  }, d = (x) => {
    f("seconds", x);
  }, v = (x, _) => {
    p(x.hours), u(x.minutes), d(x.seconds), t.value && _(t.value);
  }, $ = (x) => {
    if (x) {
      const _ = Array.isArray(x), I = _ ? [+x[0].hours, +x[1].hours] : +x.hours, S = _ ? [+x[0].minutes, +x[1].minutes] : +x.minutes, j = _ ? [+(x[0].seconds ?? 0), +(x[1].seconds ?? 0)] : +(x.seconds ?? 0);
      b("hours", I), b("minutes", S), s.value.enableSeconds && b("seconds", j);
    }
  }, W = (x, _) => {
    const I = {
      hours: Array.isArray(a.hours) ? a.hours[x] : a.hours,
      disabledArr: []
    };
    return (_ || _ === 0) && (I.hours = _), Array.isArray(r.disabledTimes) && (I.disabledArr = l.value.enabled && Array.isArray(r.disabledTimes[x]) ? r.disabledTimes[x] : r.disabledTimes), I;
  }, Z = X(() => (x, _) => {
    var I;
    if (Array.isArray(r.disabledTimes)) {
      const { disabledArr: S, hours: j } = W(x, _), U = S.filter((J) => +J.hours === j);
      return ((I = U[0]) == null ? void 0 : I.minutes) === "*" ? { hours: [j], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (U == null ? void 0 : U.map((J) => +J.minutes)) ?? [],
        seconds: (U == null ? void 0 : U.map((J) => J.seconds ? +J.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: b,
    updateHours: p,
    updateMinutes: u,
    updateSeconds: d,
    getSetDateTime: y,
    updateTimeValues: v,
    getSecondsValue: m,
    assignStartTime: $,
    validateTime: D,
    disabledTimesConfig: Z
  };
}, Yc = (e) => {
  const {
    getDate: n,
    time: t,
    modelValue: a,
    state: r,
    defaults: { startTime: l, range: s, timeConfig: o }
  } = Ye(), { getTimeObj: i } = st();
  qa(() => {
    r.isTextInputDate && W();
  });
  const { updateTimeValues: h, getSetDateTime: m, assignTime: y, assignStartTime: b, disabledTimesConfig: g, validateTime: D } = bl(f);
  function f() {
    e("update-flow-step");
  }
  const p = (x) => {
    const { hours: _, minutes: I, seconds: S } = x;
    return { hours: +_, minutes: +I, seconds: S ? +S : 0 };
  }, u = () => {
    if (o.value.startTime) {
      if (Array.isArray(o.value.startTime)) {
        const _ = p(o.value.startTime[0]), I = p(o.value.startTime[1]);
        return [Se(n(), _), Se(n(), I)];
      }
      const x = p(o.value.startTime);
      return Se(n(), x);
    }
    return s.value.enabled ? [null, null] : null;
  }, d = () => {
    if (s.value.enabled) {
      const [x, _] = u();
      a.value = [m(x, 0), m(_, 1)];
    } else
      a.value = m(u());
  }, v = (x) => Array.isArray(x) ? [i(n(x[0])), i(n(x[1]))] : [i(x ?? n())], $ = (x, _, I) => {
    y("hours", x), y("minutes", _), y("seconds", o.value.enableSeconds ? I : 0);
  }, W = () => {
    const [x, _] = v(a.value);
    return s.value.enabled ? $(
      [x.hours, _.hours],
      [x.minutes, _.minutes],
      [x.seconds, _.seconds]
    ) : $(x.hours, x.minutes, x.seconds);
  };
  et(() => (b(l.value), a.value ? W() : d()));
  const Z = () => {
    Array.isArray(a.value) ? a.value = a.value.map((x, _) => x && m(x, _)) : a.value = m(a.value), e("time-update");
  };
  return {
    modelValue: a,
    time: t,
    disabledTimesConfig: g,
    validateTime: D,
    updateTime: (x) => {
      h(x, Z);
    }
  };
}, Rc = /* @__PURE__ */ Ke({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = Qt(), { mapSlots: l } = Kt(), s = l(r, "timePicker"), o = Be("time-input"), { time: i, modelValue: h, disabledTimesConfig: m, updateTime: y, validateTime: b } = Yc(a);
    return et(() => {
      a("mount");
    }), n({ getSidebarProps: () => ({
      modelValue: h,
      time: i,
      updateTime: y
    }), toggleTimePicker: (g, D = !1, f = "") => {
      var p;
      (p = o.value) == null || p.toggleTimePicker(g, D, f);
    } }), (g, D) => (q(), $e(mn, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Oe(({ wrapClass: f }) => [
        Ae("div", {
          class: Me(f)
        }, [
          ft(wl, gt({ ref: "time-input" }, g.$props, {
            hours: c(i).hours,
            minutes: c(i).minutes,
            seconds: c(i).seconds,
            "disabled-times-config": c(m),
            "validate-time": c(b),
            "onUpdate:hours": D[0] || (D[0] = (p) => c(y)({ hours: p, minutes: c(i).minutes, seconds: c(i).seconds })),
            "onUpdate:minutes": D[1] || (D[1] = (p) => c(y)({ hours: c(i).hours, minutes: p, seconds: c(i).seconds })),
            "onUpdate:seconds": D[2] || (D[2] = (p) => c(y)({ hours: c(i).hours, minutes: c(i).minutes, seconds: p })),
            onResetFlow: D[3] || (D[3] = (p) => g.$emit("reset-flow"))
          }), at({ _: 2 }, [
            We(c(s), (p, u) => ({
              name: p,
              fn: Oe((d) => [
                fe(g.$slots, p, mt(At(d)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), Ec = (e, n) => {
  const {
    getDate: t,
    rootProps: a,
    defaults: { filters: r }
  } = Ye(), { validateMonthYearInRange: l, validateMonthYear: s } = bt(), o = (b, g) => {
    let D = b;
    return r.value.months.includes(Ce(D)) ? (D = g ? xt(b, 1) : Da(b, 1), o(D, g)) : D;
  }, i = (b, g) => {
    let D = b;
    return r.value.years.includes(_e(D)) ? (D = g ? Qn(b, 1) : ul(b, 1), i(D, g)) : D;
  }, h = (b, g = !1) => {
    const D = Se(t(), { month: e.month, year: e.year });
    let f = b ? xt(D, 1) : Da(D, 1);
    a.disableYearSelect && (f = _t(f, e.year));
    let p = Ce(f), u = _e(f);
    r.value.months.includes(p) && (f = o(f, b), p = Ce(f), u = _e(f)), r.value.years.includes(u) && (f = i(f, b), u = _e(f)), l(p, u, b, a.preventMinMaxNavigation) && m(p, u, g);
  }, m = (b, g, D) => {
    n("update-month-year", { month: b, year: g, fromNav: D });
  }, y = X(() => (b) => s(
    Se(t(), { month: e.month, year: e.year }),
    a.preventMinMaxNavigation,
    b
  ));
  return { handleMonthYearChange: h, isDisabled: y, updateMonthYear: m };
}, Ic = { class: "dp--header-wrap" }, Fc = {
  key: 0,
  class: "dp__month_year_wrap"
}, Bc = { key: 0 }, Wc = { class: "dp__month_year_wrap" }, Nc = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], Lc = /* @__PURE__ */ Ke({
  __name: "DpHeader",
  props: {
    month: {},
    year: {},
    instance: {},
    years: {},
    months: {},
    menuWrapRef: {}
  },
  emits: ["mount", "reset-flow", "update-month-year"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      rootEmit: l,
      rootProps: s,
      modelValue: o,
      defaults: { ariaLabels: i, filters: h, config: m, highlight: y, safeDates: b, ui: g }
    } = Ye(), { transitionName: D, showTransition: f } = Va(), { showLeftIcon: p, showRightIcon: u } = fn(), { buildMatrix: d } = Gt(), { handleMonthYearChange: v, isDisabled: $, updateMonthYear: W } = Ec(r, a), { getMaxMonth: Z, getMinMonth: x, getYearFromDate: _, groupListAndMap: I, checkHighlightYear: S, checkHighlightMonth: j } = st(), { checkKeyDown: U } = Je(), { formatYear: J } = Xt(), { checkMinMaxValue: z } = bt(), { boolHtmlAttribute: Y } = Ma(), H = he(!1), P = he(!1), C = he(!1), N = he([null, null, null, null]);
    et(() => {
      a("mount");
    });
    const E = (T) => ({
      get: () => r[T],
      set: (k) => {
        const V = T === Dt.month ? Dt.year : Dt.month;
        a("update-month-year", { [T]: k, [V]: r[V] }), T === Dt.month ? ye(!0) : B(!0);
      }
    }), Q = X(E(Dt.month)), se = X(E(Dt.year)), ce = X(() => (T) => ({
      month: r.month,
      year: r.year,
      items: T === Dt.month ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: W,
      toggle: T === Dt.month ? ye : B
    })), ve = X(() => r.months.find((k) => k.value === r.month) || { text: "", value: 0 }), be = X(() => I(r.months, (T) => {
      const k = r.month === T.value, V = z(
        T.value,
        x(r.year, b.value.minDate),
        Z(r.year, b.value.maxDate)
      ) || h.value.months.includes(T.value), le = j(y.value, T.value, r.year);
      return { active: k, disabled: V, highlighted: le };
    })), xe = X(() => I(r.years, (T) => {
      const k = r.year === T.value, V = z(
        T.value,
        _(b.value.minDate),
        _(b.value.maxDate)
      ) || h.value.years.includes(T.value), le = S(y.value, T.value);
      return { active: k, disabled: V, highlighted: le };
    })), ie = (T, k, V) => {
      V === void 0 ? T.value = !T.value : T.value = V, T.value ? (C.value = !0, l("overlay-toggle", { open: !0, overlay: k })) : (C.value = !1, l("overlay-toggle", { open: !1, overlay: k }));
    }, ye = (T = !1, k) => {
      M(T), ie(H, ut.month, k);
    }, B = (T = !1, k) => {
      M(T), ie(P, ut.year, k);
    }, M = (T) => {
      T || a("reset-flow");
    }, ee = (T, k) => {
      s.arrowNavigation && (N.value[k] = Ze(T), d(N.value, "monthYear"));
    }, ue = X(() => {
      var T, k, V, le, oe, L;
      return [
        {
          type: Dt.month,
          index: 1,
          toggle: ye,
          modelValue: Q.value,
          updateModelValue: (ae) => Q.value = ae,
          text: ve.value.text,
          showSelectionGrid: H.value,
          items: be.value,
          ariaLabel: (T = i.value) == null ? void 0 : T.openMonthsOverlay,
          overlayLabel: ((V = (k = i.value).monthPicker) == null ? void 0 : V.call(k, !0)) ?? void 0
        },
        {
          type: Dt.year,
          index: 2,
          toggle: B,
          modelValue: se.value,
          updateModelValue: (ae) => se.value = ae,
          text: J(r.year),
          showSelectionGrid: P.value,
          items: xe.value,
          ariaLabel: (le = i.value) == null ? void 0 : le.openYearsOverlay,
          overlayLabel: ((L = (oe = i.value).yearPicker) == null ? void 0 : L.call(oe, !0)) ?? void 0
        }
      ];
    }), O = X(() => s.disableYearSelect ? [ue.value[0]] : s.yearFirst ? [...ue.value].reverse() : ue.value);
    return n({
      toggleMonthPicker: ye,
      toggleYearPicker: B,
      handleMonthYearChange: v
    }), (T, k) => {
      var V, le, oe, L, ae, F;
      return q(), ne("div", Ic, [
        T.$slots["month-year"] ? (q(), ne("div", Fc, [
          fe(T.$slots, "month-year", mt(At({
            month: e.month,
            year: e.year,
            months: e.months,
            years: e.years,
            updateMonthYear: c(W),
            handleMonthYearChange: c(v),
            instance: e.instance,
            isDisabled: c($)
          })))
        ])) : (q(), ne(Pe, { key: 1 }, [
          T.$slots["top-extra"] ? (q(), ne("div", Bc, [
            fe(T.$slots, "top-extra", { value: c(o) })
          ])) : re("", !0),
          Ae("div", Wc, [
            c(p)(e.instance) && !c(s).vertical ? (q(), $e(Ea, {
              key: 0,
              "aria-label": (V = c(i)) == null ? void 0 : V.prevMonth,
              disabled: c(Y)(c($)(!1)),
              class: Me((le = c(g)) == null ? void 0 : le.navBtnPrev),
              "el-name": "action-prev",
              onActivate: k[0] || (k[0] = (A) => c(v)(!1, !0)),
              onSetRef: k[1] || (k[1] = (A) => ee(A, 0))
            }, {
              default: Oe(() => [
                T.$slots["arrow-left"] ? fe(T.$slots, "arrow-left", { key: 0 }) : re("", !0),
                T.$slots["arrow-left"] ? re("", !0) : (q(), $e(c(dl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : re("", !0),
            Ae("div", {
              class: Me(["dp__month_year_wrap", {
                dp__year_disable_select: c(s).disableYearSelect
              }])
            }, [
              (q(!0), ne(Pe, null, We(O.value, (A, w) => (q(), ne(Pe, {
                key: A.type
              }, [
                Ae("button", {
                  ref_for: !0,
                  ref: (G) => ee(G, w + 1),
                  type: "button",
                  "data-dp-element": `overlay-${A.type}`,
                  class: Me(["dp__btn dp__month_year_select", { "dp--hidden-el": C.value }]),
                  "aria-label": `${A.text}-${A.ariaLabel}`,
                  "data-test-id": `${A.type}-toggle-overlay-${e.instance}`,
                  onClick: (G) => A.toggle(!1),
                  onKeydown: (G) => c(U)(G, () => A.toggle(), !0)
                }, [
                  T.$slots[A.type] ? fe(T.$slots, A.type, {
                    key: 0,
                    text: A.text,
                    value: r[A.type]
                  }) : re("", !0),
                  T.$slots[A.type] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                    Nt(lt(A.text), 1)
                  ], 64))
                ], 42, Nc),
                ft(xa, {
                  name: c(D)(A.showSelectionGrid),
                  css: c(f)
                }, {
                  default: Oe(() => [
                    A.showSelectionGrid ? (q(), $e(za, {
                      key: 0,
                      items: A.items,
                      "is-last": c(s).autoApply && !c(m).keepActionRow,
                      "skip-button-ref": !1,
                      type: A.type,
                      "header-refs": [],
                      "menu-wrap-ref": e.menuWrapRef,
                      "overlay-label": A.overlayLabel,
                      onSelected: A.updateModelValue,
                      onToggle: A.toggle
                    }, at({
                      "button-icon": Oe(() => [
                        T.$slots["calendar-icon"] ? fe(T.$slots, "calendar-icon", { key: 0 }) : re("", !0),
                        T.$slots["calendar-icon"] ? re("", !0) : (q(), $e(c(Ha), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      T.$slots[`${A.type}-overlay-value`] ? {
                        name: "item",
                        fn: Oe(({ item: G }) => [
                          fe(T.$slots, `${A.type}-overlay-value`, {
                            text: G.text,
                            value: G.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      T.$slots[`${A.type}-overlay`] ? {
                        name: "overlay",
                        fn: Oe(() => [
                          fe(T.$slots, `${A.type}-overlay`, gt({ ref_for: !0 }, ce.value(A.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      T.$slots[`${A.type}-overlay-header`] ? {
                        name: "header",
                        fn: Oe(() => [
                          fe(T.$slots, `${A.type}-overlay-header`, {
                            toggle: A.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "is-last", "type", "menu-wrap-ref", "overlay-label", "onSelected", "onToggle"])) : re("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            c(p)(e.instance) && c(s).vertical ? (q(), $e(Ea, {
              key: 1,
              "aria-label": (oe = c(i)) == null ? void 0 : oe.prevMonth,
              "el-name": "action-prev",
              disabled: c(Y)(c($)(!1)),
              class: Me((L = c(g)) == null ? void 0 : L.navBtnPrev),
              onActivate: k[2] || (k[2] = (A) => c(v)(!1, !0))
            }, {
              default: Oe(() => [
                T.$slots["arrow-up"] ? fe(T.$slots, "arrow-up", { key: 0 }) : re("", !0),
                T.$slots["arrow-up"] ? re("", !0) : (q(), $e(c(hl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : re("", !0),
            c(u)(e.instance) ? (q(), $e(Ea, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: c(Y)(c($)(!0)),
              "aria-label": (ae = c(i)) == null ? void 0 : ae.nextMonth,
              class: Me((F = c(g)) == null ? void 0 : F.navBtnNext),
              onActivate: k[3] || (k[3] = (A) => c(v)(!0, !0)),
              onSetRef: k[4] || (k[4] = (A) => ee(A, c(s).disableYearSelect ? 2 : 3))
            }, {
              default: Oe(() => [
                T.$slots[c(s).vertical ? "arrow-down" : "arrow-right"] ? fe(T.$slots, c(s).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : re("", !0),
                T.$slots[c(s).vertical ? "arrow-down" : "arrow-right"] ? re("", !0) : (q(), $e(Ln(c(s).vertical ? c(vl) : c(fl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : re("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Hc = {
  class: "dp__calendar_header",
  role: "row"
}, Vc = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, qc = ["aria-label"], zc = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, jc = { class: "dp__cell_inner" }, Uc = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Qc = /* @__PURE__ */ Ke({
  __name: "DpCalendar",
  props: {
    instance: {},
    mappedDates: {},
    month: {},
    year: {}
  },
  emits: ["mount", "select-date", "set-hover-date", "handle-scroll", "handle-swipe"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      getDate: l,
      rootEmit: s,
      rootProps: o,
      defaults: { transitions: i, config: h, ariaLabels: m, multiCalendars: y, weekNumbers: b, multiDates: g, ui: D }
    } = Ye(), { buildMultiLevelMatrix: f } = Gt(), { isDateAfter: p, isDateEqual: u, resetDateTime: d, getCellId: v } = st(), { checkKeyDown: $, checkStopPropagation: W, isTouchDevice: Z } = Je(), { formatWeekDay: x } = Xt(), _ = Be("calendar-wrap"), I = Be("active-tooltip"), S = he([]), j = he(null), U = he(!0), J = he(!1), z = he(""), Y = he({
      bottom: "",
      left: "",
      transform: ""
    }), H = he({ left: "50%" });
    Kl(_, {
      onSwipeEnd: (L, ae) => {
        h.value.noSwipe || (o.vertical ? (ae === "up" || ae === "down") && a("handle-swipe", ae === "up" ? "left" : "right") : (ae === "left" || ae === "right") && a("handle-swipe", ae === "right" ? "left" : "right"));
      }
    });
    const P = X(() => o.calendar ? o.calendar(r.mappedDates) : r.mappedDates), C = X(() => o.dayNames ? Array.isArray(o.dayNames) ? o.dayNames : o.dayNames() : oe());
    et(() => {
      a("mount", { cmp: "calendar", dayRefs: S.value }), h.value.monthChangeOnScroll && _.value && _.value.addEventListener("wheel", ue, { passive: !1 });
    }), _a(() => {
      h.value.monthChangeOnScroll && _.value && _.value.removeEventListener("wheel", ue);
    });
    const N = (L) => L ? o.vertical ? "vNext" : "next" : o.vertical ? "vPrevious" : "previous", E = (L, ae) => {
      if (o.transitions) {
        const F = d(Se(l(), { month: r.month, year: r.year }));
        z.value = p(d(Se(l(), { month: L, year: ae })), F) ? i.value[N(!0)] : i.value[N(!1)], U.value = !1, dt(() => {
          U.value = !0;
        });
      }
    }, Q = X(
      () => ({
        ...D.value.calendar
      })
    ), se = (L) => ({ type: "dot", ...L }), ce = X(() => (L) => {
      const ae = se(L);
      return {
        dp__marker_dot: ae.type === "dot",
        dp__marker_line: ae.type === "line"
      };
    }), ve = X(() => (L) => u(L, j.value)), be = X(() => ({
      dp__calendar: !0,
      dp__calendar_next: y.value.count > 0 && r.instance !== 0
    })), xe = X(() => (L) => o.hideOffsetDates ? L.current : !0), ie = async (L, ae) => {
      var de;
      const { width: F, height: A } = L.getBoundingClientRect();
      j.value = ae.value;
      let w = { left: `${F / 2}px` }, G = -50;
      if (await dt(), (de = I.value) == null ? void 0 : de[0]) {
        const { left: K, width: De } = I.value[0].getBoundingClientRect();
        K < 0 && (w = { left: "0" }, G = 0, H.value.left = `${F / 2}px`), globalThis.innerWidth < K + De && (w = { right: "0" }, G = 0, H.value.left = `${De - F / 2}px`);
      }
      Y.value = {
        bottom: `${A}px`,
        ...w,
        transform: `translateX(${G}%)`
      };
    }, ye = async (L, ae, F) => {
      var w, G, de, K, De;
      const A = Ze((G = (w = S.value) == null ? void 0 : w[ae]) == null ? void 0 : G[F]);
      A && ((de = L.marker) != null && de.customPosition && ((De = (K = L.marker) == null ? void 0 : K.tooltip) != null && De.length) ? Y.value = L.marker.customPosition(A) : await ie(A, L), s("tooltip-open", L.marker));
    }, B = async (L, ae, F) => {
      var A, w;
      if (J.value && g.value.enabled && g.value.dragSelect)
        return a("select-date", L);
      if (a("set-hover-date", L), (w = (A = L.marker) == null ? void 0 : A.tooltip) == null ? void 0 : w.length) {
        if (o.hideOffsetDates && !L.current) return;
        await ye(L, ae, F);
      }
    }, M = (L) => {
      j.value && (j.value = null, Y.value = structuredClone({ bottom: "", left: "", transform: "" }), s("tooltip-close", L.marker));
    }, ee = (L, ae, F) => {
      L && (Array.isArray(S.value[ae]) ? S.value[ae][F] = L : S.value[ae] = [L]), o.arrowNavigation && f(S.value, "calendar");
    }, ue = (L) => {
      h.value.monthChangeOnScroll && (L.preventDefault(), a("handle-scroll", L));
    }, O = (L) => b.value ? b.value.type === "local" ? Jn(L.value, {
      weekStartsOn: +o.weekStart,
      locale: o.locale
    }) : b.value.type === "iso" ? Xn(L.value) : typeof b.value.type == "function" ? b.value.type(L.value) : "" : "", T = (L) => {
      var F;
      const ae = L[0];
      return (F = b.value) != null && F.hideOnOffsetDates ? L.some((A) => A.current) ? O(ae) : "" : O(ae);
    }, k = (L, ae, F = !0) => {
      !F && Z() || (!g.value.enabled || h.value.allowPreventDefault) && (W(L, h.value), a("select-date", ae));
    }, V = (L) => {
      W(L, h.value);
    }, le = (L) => {
      g.value.enabled && g.value.dragSelect ? (J.value = !0, a("select-date", L)) : g.value.enabled && a("select-date", L);
    }, oe = () => {
      const L = l(), ae = wt(L, { locale: o.locale, weekStartsOn: +o.weekStart }), F = Kn(L, { locale: o.locale, weekStartsOn: +o.weekStart });
      return Gn({ start: ae, end: F }).map((A) => x(A));
    };
    return n({ triggerTransition: E }), (L, ae) => (q(), ne("div", {
      class: Me(be.value)
    }, [
      Ae("div", {
        ref: "calendar-wrap",
        class: Me(Q.value),
        role: "grid"
      }, [
        Ae("div", Hc, [
          c(b) ? (q(), ne("div", Vc, lt(c(b).label), 1)) : re("", !0),
          (q(!0), ne(Pe, null, We(C.value, (F, A) => {
            var w, G;
            return q(), ne("div", {
              key: A,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test-id": "calendar-header",
              "aria-label": (G = (w = c(m)) == null ? void 0 : w.weekDay) == null ? void 0 : G.call(w, A)
            }, [
              L.$slots["calendar-header"] ? fe(L.$slots, "calendar-header", {
                key: 0,
                day: F,
                index: A
              }) : re("", !0),
              L.$slots["calendar-header"] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                Nt(lt(F), 1)
              ], 64))
            ], 8, qc);
          }), 128))
        ]),
        ae[2] || (ae[2] = Ae("div", { class: "dp__calendar_header_separator" }, null, -1)),
        ft(xa, {
          name: z.value,
          css: !!c(i)
        }, {
          default: Oe(() => [
            U.value ? (q(), ne("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: ae[1] || (ae[1] = (F) => J.value = !1)
            }, [
              (q(!0), ne(Pe, null, We(P.value, (F, A) => (q(), ne("div", {
                key: A,
                class: "dp__calendar_row",
                role: "row"
              }, [
                c(b) ? (q(), ne("div", zc, [
                  Ae("div", jc, lt(T(F.days)), 1)
                ])) : re("", !0),
                (q(!0), ne(Pe, null, We(F.days, (w, G) => {
                  var de, K, De;
                  return q(), ne("div", {
                    id: c(v)(w.value),
                    ref_for: !0,
                    ref: (we) => ee(we, A, G),
                    key: G + A,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-selected": (w.classData.dp__active_date || w.classData.dp__range_start || w.classData.dp__range_end) ?? void 0,
                    "aria-disabled": w.classData.dp__cell_disabled || void 0,
                    "aria-label": (K = (de = c(m)) == null ? void 0 : de.day) == null ? void 0 : K.call(de, w),
                    tabindex: !w.current && c(o).hideOffsetDates ? void 0 : 0,
                    "data-test-id": c(v)(w.value),
                    onClick: Ia((we) => k(we, w), ["prevent"]),
                    onTouchend: (we) => k(we, w, !1),
                    onKeydown: (we) => c($)(we, () => L.$emit("select-date", w)),
                    onMouseenter: (we) => B(w, A, G),
                    onMouseleave: (we) => M(w),
                    onMousedown: (we) => le(w),
                    onMouseup: ae[0] || (ae[0] = (we) => J.value = !1)
                  }, [
                    Ae("div", {
                      class: Me(["dp__cell_inner", w.classData])
                    }, [
                      L.$slots.day && xe.value(w) ? fe(L.$slots, "day", {
                        key: 0,
                        day: +w.text,
                        date: w.value
                      }) : re("", !0),
                      L.$slots.day ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                        Nt(lt(w.text), 1)
                      ], 64)),
                      w.marker && xe.value(w) ? (q(), ne(Pe, { key: 2 }, [
                        L.$slots.marker ? fe(L.$slots, "marker", {
                          key: 0,
                          marker: w.marker,
                          day: +w.text,
                          date: w.value
                        }) : (q(), ne("div", {
                          key: 1,
                          class: Me(ce.value(w.marker)),
                          style: ht(w.marker.color ? { backgroundColor: w.marker.color } : {})
                        }, null, 6))
                      ], 64)) : re("", !0),
                      ve.value(w.value) ? (q(), ne("div", {
                        key: 3,
                        ref_for: !0,
                        ref: "active-tooltip",
                        class: "dp__marker_tooltip",
                        style: ht(Y.value)
                      }, [
                        (De = w.marker) != null && De.tooltip ? (q(), ne("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: V
                        }, [
                          (q(!0), ne(Pe, null, We(w.marker.tooltip, (we, Le) => (q(), ne("div", {
                            key: Le,
                            class: "dp__tooltip_text"
                          }, [
                            L.$slots["marker-tooltip"] ? fe(L.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: we,
                              day: w.value
                            }) : re("", !0),
                            L.$slots["marker-tooltip"] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                              Ae("div", {
                                class: "dp__tooltip_mark",
                                style: ht(we.color ? { backgroundColor: we.color } : {})
                              }, null, 4),
                              Ae("div", null, lt(we.text), 1)
                            ], 64))
                          ]))), 128)),
                          Ae("div", {
                            class: "dp__arrow_bottom_tp",
                            style: ht(H.value)
                          }, null, 4)
                        ])) : re("", !0)
                      ], 4)) : re("", !0)
                    ], 2)
                  ], 40, Uc);
                }), 128))
              ]))), 128))
            ], 32)) : re("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Gc = (e, n, t, a) => {
  const r = he([]), l = he(/* @__PURE__ */ new Date()), s = he(), {
    getDate: o,
    rootEmit: i,
    calendars: h,
    month: m,
    year: y,
    time: b,
    modelValue: g,
    rootProps: D,
    today: f,
    state: p,
    defaults: { multiCalendars: u, startTime: d, range: v, config: $, safeDates: W, multiDates: Z, timeConfig: x, flow: _ }
  } = Ye(), { validateMonthYearInRange: I, isDisabled: S, isDateRangeAllowed: j, checkMinMaxRange: U } = bt(), { updateTimeValues: J, getSetDateTime: z, assignTime: Y, assignStartTime: H, validateTime: P, disabledTimesConfig: C } = bl(a), { formatDay: N } = Xt(), { resetDateTime: E, setTime: Q, isDateBefore: se, isDateEqual: ce, getDaysInBetween: ve } = st(), { checkRangeAutoApply: be, getRangeWithFixedDate: xe, handleMultiDatesSelect: ie, setPresetDate: ye } = hn(), { getMapDate: B } = Je();
  qa(() => V(p.isTextInputDate));
  const M = (R) => !$.value.keepViewOnOffsetClick || R ? !0 : !s.value, ee = (R, te, ge, Te = !1) => {
    var Fe, kt, Ft;
    M(Te) && ((Fe = h.value)[R] ?? (Fe[R] = h.value[R] = { month: 0, year: 0 }), h.value[R].month = te ?? ((kt = h.value[R]) == null ? void 0 : kt.month), h.value[R].year = ge ?? ((Ft = h.value[R]) == null ? void 0 : Ft.year));
  }, ue = () => {
    D.autoApply && n("select-date");
  }, O = () => {
    d.value && H(d.value);
  };
  et(() => {
    g.value || (we(), O()), V(!0), D.focusStartDate && D.startDate && we();
  });
  const T = X(() => {
    var R, te, ge;
    return (te = (R = _.value) == null ? void 0 : R.steps) != null && te.length && !((ge = _.value) != null && ge.partial) ? e.flowStep === _.value.steps.length : !0;
  }), k = () => {
    var R, te, ge;
    D.autoApply && T.value && n("auto-apply", (R = _.value) != null && R.partial ? e.flowStep !== ((ge = (te = _.value) == null ? void 0 : te.steps) == null ? void 0 : ge.length) : !1);
  }, V = (R = !1) => {
    if (g.value)
      return Array.isArray(g.value) ? (r.value = g.value, G(R)) : ae(g.value, R);
    if (u.value.count && R && !D.startDate)
      return L(o(), R);
  }, le = () => Array.isArray(g.value) && v.value.enabled ? Ce(g.value[0]) === Ce(g.value[1] ?? g.value[0]) : !1, oe = (R) => {
    const te = xt(R, 1);
    return { month: Ce(te), year: _e(te) };
  }, L = (R = o(), te = !1) => {
    if ((!u.value.count || !u.value.static || te) && ee(0, Ce(R), _e(R)), u.value.count && (!g.value || le() || !u.value.solo) && (!u.value.solo || te))
      for (let ge = 1; ge < u.value.count; ge++) {
        const Te = Se(o(), { month: m.value(ge - 1), year: y.value(ge - 1) }), Fe = Ur(Te, { months: 1 });
        h.value[ge] = { month: Ce(Fe), year: _e(Fe) };
      }
  }, ae = (R, te) => {
    L(R), Y("hours", Yt(R)), Y("minutes", Lt(R)), Y("seconds", Ut(R)), u.value.count && te && De();
  }, F = (R) => {
    if (u.value.count) {
      if (u.value.solo) return 0;
      const te = Ce(R[0]), ge = Ce(R[1]);
      return Math.abs(ge - te) < u.value.count ? 0 : 1;
    }
    return 1;
  }, A = (R, te) => {
    R[1] && v.value.showLastInRange ? L(R[F(R)], te) : L(R[0], te);
    const ge = (Te, Fe) => [
      Te(R[0]),
      R != null && R[1] ? Te(R[1]) : b[Fe][1]
    ];
    Y("hours", ge(Yt, "hours")), Y("minutes", ge(Lt, "minutes")), Y("seconds", ge(Ut, "seconds"));
  }, w = (R, te) => {
    if ((v.value.enabled || D.weekPicker) && !Z.value.enabled)
      return A(R, te);
    if (Z.value.enabled && te) {
      const ge = R[R.length - 1];
      return ae(ge, te);
    }
  }, G = (R) => {
    const te = g.value;
    w(te, R), u.value.count && u.value.solo && De();
  }, de = (R, te) => {
    const ge = Se(o(), { month: m.value(te), year: y.value(te) }), Te = R < 0 ? xt(ge, 1) : Da(ge, 1);
    I(Ce(Te), _e(Te), R < 0, D.preventMinMaxNavigation) && (ee(te, Ce(Te), _e(Te)), i("update-month-year", { instance: te, month: Ce(Te), year: _e(Te) }), u.value.count && !u.value.solo && K(te), t());
  }, K = (R) => {
    for (let te = R - 1; te >= 0; te--) {
      const ge = Da(Se(o(), { month: m.value(te + 1), year: y.value(te + 1) }), 1);
      ee(te, Ce(ge), _e(ge));
    }
    for (let te = R + 1; te <= u.value.count - 1; te++) {
      const ge = xt(Se(o(), { month: m.value(te - 1), year: y.value(te - 1) }), 1);
      ee(te, Ce(ge), _e(ge));
    }
  }, De = () => {
    if (Array.isArray(g.value) && g.value.length === 2) {
      const R = o(o(g.value[1] ?? xt(g.value[0], 1))), [te, ge] = [Ce(g.value[0]), _e(g.value[0])], [Te, Fe] = [Ce(g.value[1]), _e(g.value[1])];
      (te !== Te || te === Te && ge !== Fe) && u.value.solo && ee(1, Ce(R), _e(R));
    } else g.value && !Array.isArray(g.value) && (ee(0, Ce(g.value), _e(g.value)), L(o()));
  }, we = () => {
    D.startDate && (ee(0, Ce(o(D.startDate)), _e(o(D.startDate))), u.value.count && K(0));
  }, Le = (R, te) => {
    if ($.value.monthChangeOnScroll) {
      const ge = Date.now() - l.value.getTime(), Te = Math.abs(R.deltaY);
      let Fe = 500;
      Te > 1 && (Fe = 100), Te > 100 && (Fe = 0), ge > Fe && (l.value = /* @__PURE__ */ new Date(), de(
        $.value.monthChangeOnScroll === "inverse" ? R.deltaY : -R.deltaY,
        te
      ));
    }
  }, nt = (R, te, ge = !1) => {
    $.value.monthChangeOnArrows && D.vertical === ge && ze(R, te);
  }, ze = (R, te) => {
    de(R === "right" ? -1 : 1, te);
  }, vn = (R) => {
    if (W.value.markers)
      return B(R.value, W.value.markers);
  }, pn = (R, te) => {
    switch (D.sixWeeks === !0 ? "append" : D.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [R == 0, !0];
      case "fair":
        return [R == 0 || te > R, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, yn = (R, te, ge, Te) => {
    if (D.sixWeeks && R.length < 6) {
      const Fe = 6 - R.length, kt = (te.getDay() + 7 - Te) % 7, Ft = 6 - (ge.getDay() + 7 - Te) % 7, [Pa, Ua] = pn(kt, Ft);
      for (let Oa = 1; Oa <= Fe; Oa++)
        if (Ua ? !!(Oa % 2) == Pa : Pa) {
          const Ht = R[0].days[0], _n = Ta(yt(Ht.value, -7), Ce(te));
          R.unshift({ days: _n });
        } else {
          const Ht = R[R.length - 1], _n = Ht.days[Ht.days.length - 1], Rl = Ta(yt(_n.value, 1), Ce(te));
          R.push({ days: Rl });
        }
    }
    return R;
  }, Ta = (R, te) => {
    const ge = o(R), Te = [];
    for (let Fe = 0; Fe < 7; Fe++) {
      const kt = yt(ge, Fe), Ft = Ce(kt) !== te;
      Te.push({
        text: D.hideOffsetDates && Ft ? "" : N(kt),
        value: kt,
        current: !Ft,
        classData: {}
      });
    }
    return Te;
  }, gn = (R, te) => {
    const ge = [], Te = o(new Date(te, R)), Fe = o(new Date(te, R + 1, 0)), kt = D.weekStart, Ft = wt(Te, { weekStartsOn: kt }), Pa = (Ua) => {
      const Oa = Ta(Ua, R);
      if (ge.push({ days: Oa }), !ge[ge.length - 1].days.some((Ht) => ce(o(Ht.value), E(Fe)))) {
        const Ht = yt(Ua, 7);
        Pa(Ht);
      }
    };
    return Pa(Ft), yn(ge, Te, Fe, kt);
  }, wn = (R) => {
    const te = Q(
      { hours: b.hours, minutes: b.minutes, seconds: Et() },
      o(R.value)
    );
    i("date-click", te), Z.value.enabled ? ie(te, Z.value.limit) : g.value = te, a(), dt().then(() => {
      k();
    });
  }, ja = (R) => v.value.noDisabledRange ? ve(r.value[0], R).some((te) => S(te)) : !1, bn = () => {
    r.value = g.value ? g.value.slice().filter((R) => !!R) : [], r.value.length === 2 && !(v.value.fixedStart || v.value.fixedEnd) && (r.value = []);
  }, kn = (R, te) => {
    const ge = [o(R.value), yt(o(R.value), +v.value.autoRange)];
    j(ge) ? (te && pe(R.value), r.value = ge) : i("invalid-date", R.value);
  }, pe = (R) => {
    const te = Ce(o(R)), ge = _e(o(R));
    if (ee(0, te, ge), u.value.count > 0)
      for (let Te = 1; Te < u.value.count; Te++) {
        const Fe = oe(
          Se(o(R), { year: y.value(Te - 1), month: m.value(Te - 1) })
        );
        ee(Te, Fe.month, Fe.year);
      }
  }, Ne = (R) => {
    if (ja(R.value) || !U(R.value, g.value, v.value.fixedStart ? 0 : 1))
      return i("invalid-date", R.value);
    r.value = xe(o(R.value));
  }, tt = (R, te) => {
    if (bn(), v.value.autoRange) return kn(R, te);
    if (v.value.fixedStart || v.value.fixedEnd) return Ne(R);
    r.value[0] ? U(o(R.value), g.value) && !ja(R.value) ? se(o(R.value), o(r.value[0])) ? (r.value.unshift(o(R.value)), i("range-end", r.value[0])) : (r.value[1] = o(R.value), i("range-end", r.value[1])) : i("invalid-date", R.value) : (r.value[0] = o(R.value), i("range-start", r.value[0]));
  }, Et = (R = !0) => x.value.enableSeconds ? Array.isArray(b.seconds) ? R ? b.seconds[0] : b.seconds[1] : b.seconds : 0, It = (R) => {
    r.value[R] = Q(
      {
        hours: b.hours[R],
        minutes: b.minutes[R],
        seconds: Et(R !== 1)
      },
      r.value[R]
    );
  }, Dn = () => {
    var R, te;
    r.value[0] && r.value[1] && +((R = r.value) == null ? void 0 : R[0]) > +((te = r.value) == null ? void 0 : te[1]) && (r.value.reverse(), i("range-start", r.value[0]), i("range-end", r.value[1]));
  }, Ml = () => {
    var R, te, ge;
    r.value.length && (r.value[0] && !r.value[1] ? It(0) : (It(0), It(1), a()), Dn(), g.value = r.value.slice(), be(
      r.value,
      n,
      r.value.length < 2 || (R = _.value) != null && R.steps.length ? e.flowStep !== ((ge = (te = _.value) == null ? void 0 : te.steps) == null ? void 0 : ge.length) : !1
    ));
  }, Tl = (R, te = !1) => {
    if (S(R.value) || !R.current && D.hideOffsetDates)
      return i("invalid-date", R.value);
    if (s.value = structuredClone(R), !v.value.enabled) return wn(R);
    Array.isArray(b.hours) && Array.isArray(b.minutes) && !Z.value.enabled && (tt(R, te), Ml());
  }, Pl = (R, te) => {
    var Te, Fe;
    ee(R, te.month, te.year, !0), u.value.count && !u.value.solo && K(R), i("update-month-year", { instance: R, month: te.month, year: te.year }), t(u.value.solo ? R : void 0);
    const ge = (Fe = (Te = _.value) == null ? void 0 : Te.steps) != null && Fe.length ? _.value.steps[e.flowStep] : void 0;
    !te.fromNav && (ge === ut.month || ge === ut.year) && a();
  }, Ol = (R) => {
    ye({
      value: R
    }), ue(), D.multiCalendars && dt().then(() => V(!0));
  }, Al = () => {
    var te;
    let R = o();
    return (te = D.actionRow) != null && te.nowBtnRound && (R = Ki(R, {
      roundingMethod: D.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: D.actionRow.nowBtnRound.roundTo ?? 15
    })), R;
  }, Sl = () => {
    const R = Al();
    !v.value.enabled && !Z.value.enabled ? g.value = R : g.value && Array.isArray(g.value) && g.value[0] ? Z.value.enabled ? g.value = [...g.value, R] : g.value = se(R, g.value[0]) ? [R, g.value[0]] : [g.value[0], R] : g.value = [R], ue();
  }, $l = () => {
    if (Array.isArray(g.value))
      if (Z.value.enabled) {
        const R = Cl();
        g.value[g.value.length - 1] = z(R);
      } else
        g.value = g.value.map((R, te) => R && z(R, te));
    else
      g.value = z(g.value);
    n("time-update");
  }, Cl = () => Array.isArray(g.value) && g.value.length ? g.value[g.value.length - 1] : null, Yl = (R) => {
    let te = "";
    if (v.value.enabled && Array.isArray(g.value))
      for (const ge of Object.keys(R)) {
        const Te = R[ge];
        Array.isArray(Te) && (b[ge][0] !== Te[0] && (te = "range-start"), b[ge][1] !== Te[1] && (te = "range-start"));
      }
    return te;
  };
  return {
    calendars: h,
    modelValue: g,
    month: m,
    year: y,
    time: b,
    disabledTimesConfig: C,
    today: f,
    validateTime: P,
    getCalendarDays: gn,
    getMarker: vn,
    handleScroll: Le,
    handleSwipe: ze,
    handleArrow: nt,
    selectDate: Tl,
    updateMonthYear: Pl,
    presetDate: Ol,
    selectCurrentDate: Sl,
    updateTime: (R) => {
      const te = Yl(R);
      J(R, $l), te && i(te, g.value[te === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: L,
    setStartTime: O
  };
}, Kc = () => {
  const {
    isModelAuto: e,
    matchDate: n,
    isDateAfter: t,
    isDateBefore: a,
    isDateBetween: r,
    isDateEqual: l,
    getWeekFromDate: s,
    getBeforeAndAfterInRange: o
  } = st(), {
    getDate: i,
    today: h,
    rootProps: m,
    defaults: { multiCalendars: y, multiDates: b, ui: g, highlight: D, safeDates: f, range: p },
    modelValue: u
  } = Ye(), { isDisabled: d } = bt(), v = he(null), $ = (k) => {
    !k.current && m.hideOffsetDates || (v.value = k.value);
  }, W = () => {
    v.value = null;
  }, Z = (k) => Array.isArray(u.value) && p.value.enabled && u.value[0] && v.value ? k ? t(v.value, u.value[0]) : a(v.value, u.value[0]) : !0, x = (k, V) => {
    const le = () => u.value ? V ? u.value[0] || null : u.value[1] : null, oe = u.value && Array.isArray(u.value) ? le() : null;
    return l(i(k.value), oe);
  }, _ = (k) => {
    const V = Array.isArray(u.value) ? u.value[0] : null;
    return k ? !a(v.value, V) : !0;
  }, I = (k, V = !0) => (p.value.enabled || m.weekPicker) && Array.isArray(u.value) && u.value.length === 2 ? m.hideOffsetDates && !k.current ? !1 : l(i(k.value), u.value[V ? 0 : 1]) : p.value.enabled ? x(k, V) && _(V) || l(k.value, Array.isArray(u.value) ? u.value[0] : null) && Z(V) : !1, S = (k, V) => {
    if (Array.isArray(u.value) && u.value[0] && u.value.length === 1) {
      const le = l(k.value, v.value);
      return V ? t(u.value[0], k.value) && le : a(u.value[0], k.value) && le;
    }
    return !1;
  }, j = (k) => !u.value || m.hideOffsetDates && !k.current ? !1 : p.value.enabled ? m.modelAuto && Array.isArray(u.value) ? l(k.value, u.value[0] ?? h) : !1 : b.value.enabled && Array.isArray(u.value) ? u.value.some((V) => l(V, k.value)) : l(k.value, u.value ? u.value : h), U = (k) => {
    if (p.value.autoRange || m.weekPicker) {
      if (v.value) {
        if (m.hideOffsetDates && !k.current) return !1;
        const V = yt(v.value, +p.value.autoRange), le = s(i(v.value), m.weekStart);
        return m.weekPicker ? l(le[1], i(k.value)) : l(V, i(k.value));
      }
      return !1;
    }
    return !1;
  }, J = (k) => {
    if (p.value.autoRange || m.weekPicker) {
      if (v.value) {
        const V = yt(v.value, +p.value.autoRange);
        if (m.hideOffsetDates && !k.current) return !1;
        const le = s(i(v.value), m.weekStart);
        return m.weekPicker ? t(k.value, le[0]) && a(k.value, le[1]) : t(k.value, v.value) && a(k.value, V);
      }
      return !1;
    }
    return !1;
  }, z = (k) => {
    if (p.value.autoRange || m.weekPicker) {
      if (v.value) {
        if (m.hideOffsetDates && !k.current) return !1;
        const V = s(i(v.value), m.weekStart);
        return m.weekPicker ? l(V[0], k.value) : l(v.value, k.value);
      }
      return !1;
    }
    return !1;
  }, Y = (k) => r(u.value, v.value, k.value), H = () => m.modelAuto && Array.isArray(u.value) ? !!u.value[0] : !1, P = () => m.modelAuto ? e(u.value) : !0, C = (k) => {
    if (m.weekPicker) return !1;
    const V = p.value.enabled ? !I(k) && !I(k, !1) : !0;
    return !d(k.value) && !j(k) && !(!k.current && m.hideOffsetDates) && V;
  }, N = (k) => p.value.enabled ? m.modelAuto ? H() && j(k) : !1 : j(k), E = (k) => D.value ? n(k.value, f.value.highlight) : !1, Q = (k) => {
    const V = d(k.value);
    return V && (typeof D.value == "function" ? !D.value(k.value, V) : !D.value.options.highlightDisabled);
  }, se = (k) => {
    var V;
    return typeof D.value == "function" ? D.value(k.value) : (V = D.value.weekdays) == null ? void 0 : V.includes(k.value.getDay());
  }, ce = (k) => (p.value.enabled || m.weekPicker) && (!(y.value.count > 0) || k.current) && P() && !(!k.current && m.hideOffsetDates) && !j(k) ? Y(k) : !1, ve = (k) => {
    if (Array.isArray(u.value) && u.value.length === 1) {
      const { before: V, after: le } = o(+p.value.maxRange, u.value[0]);
      return ka(k.value, V) || sa(k.value, le);
    }
    return !1;
  }, be = (k) => {
    if (Array.isArray(u.value) && u.value.length === 1) {
      const { before: V, after: le } = o(+p.value.minRange, u.value[0]);
      return r([V, le], u.value[0], k.value);
    }
    return !1;
  }, xe = (k) => p.value.enabled && (p.value.maxRange || p.value.minRange) ? p.value.maxRange && p.value.minRange ? ve(k) || be(k) : p.value.maxRange ? ve(k) : be(k) : !1, ie = (k) => {
    const { isRangeStart: V, isRangeEnd: le } = ee(k), oe = p.value.enabled ? V || le : !1;
    return {
      dp__cell_offset: !k.current,
      dp__pointer: !m.disabled && !(!k.current && m.hideOffsetDates) && !d(k.value) && !xe(k),
      dp__cell_disabled: d(k.value) || xe(k),
      dp__cell_highlight: !Q(k) && (E(k) || se(k)) && !N(k) && !oe && !z(k) && !(ce(k) && m.weekPicker) && !le,
      dp__cell_highlight_active: !Q(k) && (E(k) || se(k)) && N(k),
      dp__today: !m.noToday && l(k.value, h) && k.current,
      "dp--past": a(k.value, h),
      "dp--future": t(k.value, h)
    };
  }, ye = (k) => ({
    dp__active_date: N(k),
    dp__date_hover: C(k)
  }), B = (k) => {
    if (u.value && !Array.isArray(u.value)) {
      const V = s(u.value, m.weekStart);
      return {
        ...O(k),
        dp__range_start: l(V[0], k.value),
        dp__range_end: l(V[1], k.value),
        dp__range_between_week: t(k.value, V[0]) && a(k.value, V[1])
      };
    }
    return {
      ...O(k)
    };
  }, M = (k) => {
    if (u.value && Array.isArray(u.value)) {
      const V = s(u.value[0], m.weekStart), le = u.value[1] ? s(u.value[1], m.weekStart) : [];
      return {
        ...O(k),
        dp__range_start: l(V[0], k.value) || l(le[0], k.value),
        dp__range_end: l(V[1], k.value) || l(le[1], k.value),
        dp__range_between_week: t(k.value, V[0]) && a(k.value, V[1]) || t(k.value, le[0]) && a(k.value, le[1]),
        dp__range_between: t(k.value, V[1]) && a(k.value, le[0])
      };
    }
    return {
      ...O(k)
    };
  }, ee = (k) => {
    const V = y.value.count > 0 ? k.current && I(k) && P() : I(k) && P(), le = y.value.count > 0 ? k.current && I(k, !1) && P() : I(k, !1) && P();
    return { isRangeStart: V, isRangeEnd: le };
  }, ue = (k) => {
    const { isRangeStart: V, isRangeEnd: le } = ee(k);
    return {
      dp__range_start: V,
      dp__range_end: le,
      dp__range_between: ce(k),
      dp__date_hover: l(k.value, v.value) && !V && !le && !m.weekPicker,
      dp__date_hover_start: S(k, !0),
      dp__date_hover_end: S(k, !1)
    };
  }, O = (k) => ({
    ...ue(k),
    dp__cell_auto_range: J(k),
    dp__cell_auto_range_start: z(k),
    dp__cell_auto_range_end: U(k)
  }), T = (k) => p.value.enabled ? p.value.autoRange ? O(k) : m.modelAuto ? { ...ye(k), ...ue(k) } : m.weekPicker ? M(k) : ue(k) : m.weekPicker ? B(k) : ye(k);
  return {
    setHoverDate: $,
    clearHoverDate: W,
    getDayClassData: (k) => m.hideOffsetDates && !k.current ? {} : {
      ...ie(k),
      ...T(k),
      [g.value.dayClass ? g.value.dayClass(k.value, u.value) : ""]: !0,
      ...g.value.calendarCell
    }
  };
}, Xc = { key: 0 }, Zc = /* @__PURE__ */ Ke({
  __name: "DatePicker",
  props: /* @__PURE__ */ Yr({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, Gu),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      month: l,
      year: s,
      modelValue: o,
      time: i,
      disabledTimesConfig: h,
      today: m,
      validateTime: y,
      getCalendarDays: b,
      getMarker: g,
      handleArrow: D,
      handleScroll: f,
      handleSwipe: p,
      selectDate: u,
      updateMonthYear: d,
      presetDate: v,
      selectCurrentDate: $,
      updateTime: W,
      assignMonthAndYear: Z,
      setStartTime: x
    } = Gc(r, a, B, M), _ = Qt(), { setHoverDate: I, getDayClassData: S, clearHoverDate: j } = Kc(), {
      getDate: U,
      rootEmit: J,
      rootProps: z,
      defaults: { multiCalendars: Y, timeConfig: H }
    } = Ye(), { getYears: P, getMonths: C } = dn(), { getCellId: N } = st(), { mapSlots: E } = Kt(), Q = Be("calendar-header"), se = Be("calendar"), ce = Be("time-picker"), ve = E(_, "calendar"), be = E(_, "monthYear"), xe = E(_, "timePicker"), ie = (oe) => {
      a("mount", oe);
    };
    ct(
      Y,
      (oe, L) => {
        oe.count - L.count > 0 && Z();
      },
      { deep: !0 }
    );
    const ye = X(() => (oe) => b(l.value(oe), s.value(oe)).map((L) => ({
      ...L,
      days: L.days.map((ae) => (ae.marker = g(ae), ae.classData = S(ae), ae))
    })));
    function B(oe) {
      var L, ae, F;
      oe || oe === 0 ? (ae = (L = se.value) == null ? void 0 : L[oe]) == null || ae.triggerTransition(l.value(oe), s.value(oe)) : (F = se.value) == null || F.forEach((A, w) => A == null ? void 0 : A.triggerTransition(l.value(w), s.value(w)));
    }
    function M() {
      a("update-flow-step");
    }
    const ee = (oe, L, ae = 0) => {
      var F, A;
      (A = (F = Q.value) == null ? void 0 : F[ae]) == null || A.toggleMonthPicker(oe, L);
    }, ue = (oe, L, ae = 0) => {
      var F, A;
      (A = (F = Q.value) == null ? void 0 : F[ae]) == null || A.toggleYearPicker(oe, L);
    }, O = (oe, L, ae) => {
      var F;
      (F = ce.value) == null || F.toggleTimePicker(oe, L, ae);
    }, T = (oe, L) => {
      var ae;
      if (!z.range) {
        const F = o.value ? o.value : m, A = L ? U(L) : F, w = oe ? wt(A, { weekStartsOn: 1 }) : Kn(A, { weekStartsOn: 1 });
        u({
          value: w,
          current: Ce(A) === l.value(0),
          text: "",
          classData: {}
        }), (ae = document.getElementById(N(w))) == null || ae.focus();
      }
    }, k = (oe) => {
      var L, ae;
      (ae = (L = Q.value) == null ? void 0 : L[0]) == null || ae.handleMonthYearChange(oe, !0);
    }, V = (oe) => {
      d(0, { month: l.value(0), year: s.value(0) + (oe ? 1 : -1), fromNav: !0 });
    }, le = (oe) => {
      J("overlay-toggle", { open: !1, overlay: oe }), a("focus-menu");
    };
    return n({
      clearHoverDate: j,
      presetDate: v,
      selectCurrentDate: $,
      handleArrow: D,
      updateMonthYear: d,
      setStartTime: x,
      toggleMonthPicker: ee,
      toggleYearPicker: ue,
      toggleTimePicker: O,
      getSidebarProps: () => ({
        modelValue: o,
        month: l,
        year: s,
        time: i,
        updateTime: W,
        updateMonthYear: d,
        selectDate: u,
        presetDate: v
      }),
      changeMonth: k,
      changeYear: V,
      selectWeekDate: T
    }), (oe, L) => (q(), ne(Pe, null, [
      ft(mn, { collapse: e.collapse }, {
        default: Oe(({ instances: ae, wrapClass: F }) => [
          (q(!0), ne(Pe, null, We(ae, (A) => (q(), ne("div", {
            key: A,
            class: Me(F)
          }, [
            c(z).hideMonthYearSelect ? re("", !0) : (q(), $e(Lc, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: c(C)(),
              years: c(P)(),
              month: c(l)(A),
              year: c(s)(A),
              instance: A,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: L[0] || (L[0] = (w) => ie(c(aa).header)),
              onResetFlow: L[1] || (L[1] = (w) => oe.$emit("reset-flow")),
              onUpdateMonthYear: (w) => c(d)(A, w),
              onOverlayClosed: le
            }, at({ _: 2 }, [
              We(c(be), (w, G) => ({
                name: w,
                fn: Oe((de) => [
                  fe(oe.$slots, w, gt({ ref_for: !0 }, de))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            ft(Qc, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": ye.value(A),
              instance: A,
              month: c(l)(A),
              year: c(s)(A),
              onSelectDate: (w) => c(u)(w, A !== 1),
              onSetHoverDate: L[2] || (L[2] = (w) => c(I)(w)),
              onHandleScroll: (w) => c(f)(w, A),
              onHandleSwipe: (w) => c(p)(w, A),
              onMount: L[3] || (L[3] = (w) => ie(c(aa).calendar))
            }, at({ _: 2 }, [
              We(c(ve), (w, G) => ({
                name: w,
                fn: Oe((de) => [
                  fe(oe.$slots, w, gt({ ref_for: !0 }, { ...de }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      c(H).enableTimePicker ? (q(), ne("div", Xc, [
        oe.$slots["time-picker"] ? fe(oe.$slots, "time-picker", mt(gt({ key: 0 }, { time: c(i), updateTime: c(W) }))) : (q(), $e(wl, {
          key: 1,
          ref: "time-picker",
          hours: c(i).hours,
          minutes: c(i).minutes,
          seconds: c(i).seconds,
          "disabled-times-config": c(h),
          "validate-time": c(y),
          "no-overlay-focus": e.noOverlayFocus,
          onMount: L[4] || (L[4] = (ae) => ie(c(aa).timePicker)),
          "onUpdate:hours": L[5] || (L[5] = (ae) => c(W)({ hours: ae, minutes: c(i).minutes, seconds: c(i).seconds })),
          "onUpdate:minutes": L[6] || (L[6] = (ae) => c(W)({ hours: c(i).hours, minutes: ae, seconds: c(i).seconds })),
          "onUpdate:seconds": L[7] || (L[7] = (ae) => c(W)({ hours: c(i).hours, minutes: c(i).minutes, seconds: ae })),
          onResetFlow: L[8] || (L[8] = (ae) => oe.$emit("reset-flow"))
        }, at({ _: 2 }, [
          We(c(xe), (ae, F) => ({
            name: ae,
            fn: Oe((A) => [
              fe(oe.$slots, ae, mt(At(A)))
            ])
          }))
        ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"]))
      ])) : re("", !0)
    ], 64));
  }
}), Jc = (e, n) => {
  const {
    getDate: t,
    modelValue: a,
    year: r,
    calendars: l,
    defaults: { highlight: s, range: o, multiDates: i }
  } = Ye(), { isDateBetween: h, isDateEqual: m } = st(), { checkRangeAutoApply: y, handleMultiDatesSelect: b, setMonthOrYearRange: g } = hn();
  qa();
  const { isDisabled: D } = bt(), { formatQuarterText: f } = Xt(), {
    selectYear: p,
    groupedYears: u,
    showYearPicker: d,
    isDisabled: v,
    toggleYearPicker: $,
    handleYearSelect: W,
    handleYear: Z,
    setStartDate: x
  } = gl(n), _ = he();
  et(() => {
    x();
  });
  const I = X(() => (P) => a.value ? Array.isArray(a.value) ? a.value.some((C) => _r(P, C)) : _r(a.value, P) : !1), S = (P) => {
    if (o.value.enabled) {
      if (Array.isArray(a.value)) {
        const C = m(P, a.value[0]) || m(P, a.value[1]);
        return h(a.value, _.value, P) && !C;
      }
      return !1;
    }
    return !1;
  }, j = (P, C) => P.quarter === yr(C) && P.year === _e(C), U = (P) => typeof s.value == "function" ? s.value({ quarter: yr(P), year: _e(P) }) : s.value.quarters.some((C) => j(C, P)), J = X(() => (P) => {
    const C = Se(t(), { year: r.value(P) });
    return no({
      start: ya(C),
      end: Zr(C)
    }).map((N) => {
      const E = Jt(N), Q = gr(N), se = D(N), ce = S(E), ve = U(E);
      return {
        text: f(E, Q),
        value: E,
        active: I.value(E),
        highlighted: ve,
        disabled: se,
        isBetween: ce
      };
    });
  }), z = (P) => {
    b(P, i.value.limit), n("auto-apply", !0);
  }, Y = (P) => {
    a.value = g(P), y(a.value, n, a.value.length < 2);
  }, H = (P) => {
    a.value = P, n("auto-apply");
  };
  return {
    groupedYears: u,
    year: r,
    isDisabled: v,
    quarters: J,
    showYearPicker: d,
    modelValue: a,
    selectYear: p,
    toggleYearPicker: $,
    handleYearSelect: W,
    handleYear: Z,
    setHoverDate: (P) => {
      _.value = P;
    },
    selectQuarter: (P, C, N) => {
      if (!N)
        return l.value[C].month = Ce(gr(P)), i.value.enabled ? z(P) : o.value.enabled ? Y(P) : H(P);
    }
  };
}, ed = { class: "dp--quarter-items" }, td = ["data-test-id", "disabled", "onClick", "onMouseover"], ad = /* @__PURE__ */ Ke({
  __name: "QuarterPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      defaults: { config: l }
    } = Ye(), s = Qt(), { mapSlots: o } = Kt(), { boolHtmlAttribute: i } = Ma(), h = o(s, "yearMode"), {
      groupedYears: m,
      year: y,
      isDisabled: b,
      quarters: g,
      modelValue: D,
      showYearPicker: f,
      setHoverDate: p,
      selectQuarter: u,
      toggleYearPicker: d,
      handleYearSelect: v,
      handleYear: $
    } = Jc(r, a);
    return n({ getSidebarProps: () => ({
      modelValue: D,
      year: y,
      selectQuarter: u,
      handleYearSelect: v,
      handleYear: $
    }) }), (W, Z) => (q(), $e(mn, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: Oe(({ instances: x, wrapClass: _ }) => [
        (q(!0), ne(Pe, null, We(x, (I) => (q(), ne("div", {
          key: I,
          class: Me(_)
        }, [
          Ae("div", {
            class: "dp-quarter-picker-wrap",
            style: ht({ minHeight: `${c(l).modeHeight}px` })
          }, [
            W.$slots["top-extra"] ? fe(W.$slots, "top-extra", {
              key: 0,
              value: c(D)
            }) : re("", !0),
            Ae("div", null, [
              ft(yl, {
                items: c(m)(I),
                instance: I,
                "show-year-picker": c(f)[I],
                year: c(y)(I),
                "is-disabled": (S) => c(b)(I, S),
                onHandleYear: (S) => c($)(I, S),
                onYearSelect: (S) => c(v)(S, I),
                onToggleYearPicker: (S) => c(d)(I, S == null ? void 0 : S.flow, S == null ? void 0 : S.show)
              }, at({ _: 2 }, [
                We(c(h), (S, j) => ({
                  name: S,
                  fn: Oe((U) => [
                    fe(W.$slots, S, gt({ ref_for: !0 }, U))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Ae("div", ed, [
              (q(!0), ne(Pe, null, We(c(g)(I), (S, j) => (q(), ne("div", { key: j }, [
                Ae("button", {
                  type: "button",
                  class: Me(["dp--qr-btn", {
                    "dp--qr-btn-active": S.active,
                    "dp--qr-btn-between": S.isBetween,
                    "dp--qr-btn-disabled": S.disabled,
                    "dp--highlighted": S.highlighted
                  }]),
                  "data-test-id": S.value,
                  disabled: c(i)(S.disabled),
                  onClick: (U) => c(u)(S.value, I, S.disabled),
                  onMouseover: (U) => c(p)(S.value)
                }, [
                  W.$slots.quarter ? fe(W.$slots, "quarter", {
                    key: 0,
                    value: S.value,
                    text: S.text
                  }) : (q(), ne(Pe, { key: 1 }, [
                    Nt(lt(S.text), 1)
                  ], 64))
                ], 42, td)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), nd = ["id", "tabindex", "role", "aria-label"], rd = {
  key: 0,
  class: "dp--menu-load-container"
}, ld = {
  key: 1,
  class: "dp--menu-header"
}, sd = ["data-dp-mobile"], od = {
  key: 0,
  class: "dp__sidebar_left"
}, id = ["data-dp-mobile"], ud = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], cd = { class: "dp__instance_calendar" }, dd = {
  key: 2,
  class: "dp__sidebar_right"
}, fd = {
  key: 3,
  class: "dp__action_extra"
}, md = /* @__PURE__ */ Ke({
  __name: "DatepickerMenu",
  props: {
    collapse: { type: Boolean },
    noOverlayFocus: { type: Boolean },
    getInputRect: { type: Function }
  },
  emits: ["close-picker", "select-date", "auto-apply", "time-update", "menu-blur"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = Qt(), {
      state: l,
      rootProps: s,
      defaults: { textInput: o, inline: i, config: h, ui: m, ariaLabels: y },
      setState: b
    } = Ye(), { isMobile: g } = cn(), { mapSlots: D } = Kt(), { handleEventPropagation: f, getElWithin: p, checkStopPropagation: u, checkKeyDown: d } = Je(), { arrowRight: v, arrowLeft: $, arrowDown: W, arrowUp: Z } = Gt(), x = Be("inner-menu"), _ = Be("dp-menu"), I = Be("dyn-cmp"), S = he(0), j = he(!1), U = he(!1), { flowStep: J, updateFlowStep: z, childMount: Y, resetFlow: H, handleFlow: P } = iu(I), C = (F) => {
      U.value = !0, h.value.allowPreventDefault && F.preventDefault(), u(F, h.value, !0);
    };
    et(() => {
      j.value = !0, N(), globalThis.addEventListener("resize", N);
      const F = Ze(_);
      F && !o.value.enabled && !i.value.enabled && (b("menuFocused", !0), Q()), F && (F.addEventListener("pointerdown", C), F.addEventListener("mousedown", C)), document.addEventListener("mousedown", ae);
    }), _a(() => {
      globalThis.removeEventListener("resize", N), document.removeEventListener("mousedown", ae);
      const F = Ze(_);
      F && (F.removeEventListener("pointerdown", C), F.removeEventListener("mousedown", C));
    });
    const N = () => {
      const F = Ze(x);
      F && (S.value = F.getBoundingClientRect().width);
    }, E = X(() => s.monthPicker ? gc : s.yearPicker ? bc : s.timePicker ? Rc : s.quarterPicker ? ad : Zc), Q = () => {
      const F = Ze(_);
      F && F.focus({ preventScroll: !0 });
    }, se = X(() => {
      var F;
      return ((F = I.value) == null ? void 0 : F.getSidebarProps()) || {};
    }), ce = D(r, "action"), ve = X(() => s.monthPicker || s.yearPicker ? D(r, "monthYear") : s.timePicker ? D(r, "timePicker") : D(r, "shared")), be = X(() => ({
      dp__menu_disabled: s.disabled,
      dp__menu_readonly: s.readonly,
      "dp-menu-loading": s.loading
    })), xe = X(
      () => ({
        dp__menu: !0,
        dp__menu_index: !i.value.enabled,
        dp__relative: i.value.enabled,
        ...m.value.menu
      })
    ), ie = (F) => {
      u(F, h.value, !0);
    }, ye = (F) => {
      h.value.escClose && (a("close-picker"), f(F, h.value));
    }, B = (F) => {
      if (s.arrowNavigation) {
        if (F === ot.up) return Z();
        if (F === ot.down) return W();
        if (F === ot.left) return $();
        if (F === ot.right) return v();
      } else F === ot.left || F === ot.up ? O("handleArrow", ot.left, 0, F === ot.up) : O("handleArrow", ot.right, 0, F === ot.down);
    }, M = (F) => {
      b("shiftKeyInMenu", F.shiftKey), !s.hideMonthYearSelect && F.code === Ve.tab && F.target.classList.contains("dp__menu") && l.shiftKeyInMenu && (F.preventDefault(), u(F, h.value, !0), a("close-picker"));
    }, ee = (F) => {
      var A, w, G;
      (A = I.value) == null || A.toggleTimePicker(!1, !1), (w = I.value) == null || w.toggleMonthPicker(!1, !1, F), (G = I.value) == null || G.toggleYearPicker(!1, !1, F);
    }, ue = (F, A = 0) => {
      var w, G, de;
      return F === "month" ? (w = I.value) == null ? void 0 : w.toggleMonthPicker(!1, !0, A) : F === "year" ? (G = I.value) == null ? void 0 : G.toggleYearPicker(!1, !0, A) : F === "time" ? (de = I.value) == null ? void 0 : de.toggleTimePicker(!0, !1) : ee(A);
    }, O = (F, ...A) => {
      var w, G;
      (w = I.value) != null && w[F] && ((G = I.value) == null || G[F](...A));
    }, T = () => {
      O("selectCurrentDate");
    }, k = (F) => {
      O("presetDate", zt(F));
    }, V = () => {
      O("clearHoverDate");
    }, le = (F, A) => {
      O("updateMonthYear", F, A);
    }, oe = (F, A) => {
      F.preventDefault(), B(A);
    }, L = (F) => {
      var A, w, G;
      if (M(F), F.key === Ve.home || F.key === Ve.end)
        return O(
          "selectWeekDate",
          F.key === Ve.home,
          F.target.getAttribute("id")
        );
      switch ((F.key === Ve.pageUp || F.key === Ve.pageDown) && (F.shiftKey ? (O("changeYear", F.key === Ve.pageUp), (A = p(_.value, "overlay-year")) == null || A.focus()) : (O("changeMonth", F.key === Ve.pageUp), (w = p(_.value, F.key === Ve.pageUp ? "action-prev" : "action-next")) == null || w.focus()), F.target.getAttribute("id") && ((G = _.value) == null || G.focus({ preventScroll: !0 }))), F.key) {
        case Ve.esc:
          return ye(F);
        case Ve.arrowLeft:
          return oe(F, ot.left);
        case Ve.arrowRight:
          return oe(F, ot.right);
        case Ve.arrowUp:
          return oe(F, ot.up);
        case Ve.arrowDown:
          return oe(F, ot.down);
        default:
          return;
      }
    }, ae = (F) => {
      var A;
      i.value.enabled && !i.value.input && !((A = _.value) != null && A.contains(F.target)) && U.value && (U.value = !1, a("menu-blur"));
    };
    return n({
      updateMonthYear: le,
      switchView: ue,
      onValueCleared: () => {
        var F, A;
        (A = (F = I.value) == null ? void 0 : F.setStartTime) == null || A.call(F);
      },
      handleFlow: P
    }), (F, A) => {
      var w, G, de;
      return q(), ne("div", {
        id: c(s).menuId,
        ref: "dp-menu",
        tabindex: c(i).enabled ? void 0 : "0",
        role: c(i).enabled ? void 0 : "dialog",
        "aria-label": (w = c(y)) == null ? void 0 : w.menu,
        class: Me(xe.value),
        onMouseleave: V,
        onClick: ie,
        onKeydown: L
      }, [
        (c(s).disabled || c(s).readonly) && c(i).enabled || c(s).loading ? (q(), ne("div", {
          key: 0,
          class: Me(be.value)
        }, [
          c(s).loading ? (q(), ne("div", rd, [...A[5] || (A[5] = [
            Ae("span", { class: "dp--menu-loader" }, null, -1)
          ])])) : re("", !0)
        ], 2)) : re("", !0),
        F.$slots["menu-header"] ? (q(), ne("div", ld, [
          fe(F.$slots, "menu-header")
        ])) : re("", !0),
        fe(F.$slots, "arrow"),
        Ae("div", {
          ref: "inner-menu",
          class: Me({
            dp__menu_content_wrapper: ((G = c(s).presetDates) == null ? void 0 : G.length) || !!F.$slots["left-sidebar"] || !!F.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((de = c(s).presetDates) == null ? void 0 : de.length) || !!F.$slots["left-sidebar"] || !!F.$slots["right-sidebar"])
          }),
          "data-dp-mobile": c(g),
          style: ht({ "--dp-menu-width": `${S.value}px` })
        }, [
          F.$slots["left-sidebar"] ? (q(), ne("div", od, [
            fe(F.$slots, "left-sidebar", mt(At(se.value)))
          ])) : re("", !0),
          c(s).presetDates.length ? (q(), ne("div", {
            key: 1,
            class: Me({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
            "data-dp-mobile": c(g)
          }, [
            (q(!0), ne(Pe, null, We(c(s).presetDates, (K, De) => (q(), ne(Pe, { key: De }, [
              K.slot ? fe(F.$slots, K.slot, {
                key: 0,
                presetDate: k,
                label: K.label,
                value: K.value
              }) : (q(), ne("button", {
                key: 1,
                type: "button",
                style: ht(K.style || {}),
                class: Me(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test-id": K.testId ?? void 0,
                "data-dp-mobile": c(g),
                onClick: Ia((we) => k(K.value), ["prevent"]),
                onKeydown: (we) => c(d)(we, () => k(K.value), !0)
              }, lt(K.label), 47, ud))
            ], 64))), 128))
          ], 10, id)) : re("", !0),
          Ae("div", cd, [
            (q(), $e(Ln(E.value), {
              ref: "dyn-cmp",
              "flow-step": c(J),
              collapse: e.collapse,
              "no-overlay-focus": e.noOverlayFocus,
              "menu-wrap-ref": _.value,
              onMount: c(Y),
              onUpdateFlowStep: c(z),
              onResetFlow: c(H),
              onFocusMenu: Q,
              onSelectDate: A[0] || (A[0] = (K) => F.$emit("select-date")),
              onAutoApply: A[1] || (A[1] = (K) => F.$emit("auto-apply", K)),
              onTimeUpdate: A[2] || (A[2] = (K) => F.$emit("time-update"))
            }, at({ _: 2 }, [
              We(ve.value, (K, De) => ({
                name: K,
                fn: Oe((we) => [
                  fe(F.$slots, K, mt(At({ ...we })))
                ])
              }))
            ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ]),
          F.$slots["right-sidebar"] ? (q(), ne("div", dd, [
            fe(F.$slots, "right-sidebar", mt(At(se.value)))
          ])) : re("", !0),
          F.$slots["action-extra"] ? (q(), ne("div", fd, [
            F.$slots["action-extra"] ? fe(F.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: T
            }) : re("", !0)
          ])) : re("", !0)
        ], 14, sd),
        !c(s).autoApply || c(h).keepActionRow ? (q(), $e(uc, {
          key: 2,
          "menu-mount": j.value,
          "calendar-width": S.value,
          onClosePicker: A[3] || (A[3] = (K) => F.$emit("close-picker")),
          onSelectDate: A[4] || (A[4] = (K) => F.$emit("select-date")),
          onSelectNow: T
        }, at({ _: 2 }, [
          We(c(ce), (K, De) => ({
            name: K,
            fn: Oe((we) => [
              fe(F.$slots, K, mt(At({ ...we })))
            ])
          }))
        ]), 1032, ["menu-mount", "calendar-width"])) : re("", !0)
      ], 42, nd);
    };
  }
}), hd = ["data-dp-mobile"], vd = /* @__PURE__ */ Ke({
  __name: "VueDatePicker",
  setup(e, { expose: n }) {
    const {
      rootEmit: t,
      setState: a,
      inputValue: r,
      modelValue: l,
      rootProps: s,
      defaults: { inline: o, config: i, textInput: h, range: m, multiDates: y, teleport: b, floatingConfig: g }
    } = Ye(), { clearArrowNav: D } = Gt(), { validateDate: f, isValidTime: p } = bt(), { menuTransition: u, showTransition: d } = Va(), { isMobile: v } = cn(), { mapSlots: $ } = Kt(), { findNextFocusableElement: W, getNumVal: Z } = Je(), x = Qt(), _ = he(!1), I = he(o.value.enabled || s.centered), S = rr(s, "modelValue"), j = rr(s, "timezone"), U = Be("dp-menu-wrap"), J = Be("dp-menu"), z = Be("input-cmp"), Y = Be("picker-wrapper"), H = Be("menu-arrow"), P = he(!1), C = he(!1), N = he(!1), E = he(!0), Q = (pe) => (g.value.arrow && (g.value.arrow === !0 ? pe.push(fr({ element: H })) : pe.push(fr({ element: g.value.arrow }))), pe), { floatingStyles: se, middlewareData: ce, placement: ve, y: be } = js(
      z,
      U,
      {
        strategy: g.value.strategy,
        placement: g.value.placement,
        middleware: Q([Ns(g.value.offset), Hs(), Ls()]),
        whileElementsMounted: Ws
      }
    );
    et(() => {
      ye(s.modelValue), dt().then(() => {
        o.value.enabled || globalThis.addEventListener("resize", le);
      }), o.value.enabled && (_.value = !0), globalThis.addEventListener("keyup", oe), globalThis.addEventListener("keydown", L);
    }), _a(() => {
      o.value.enabled || globalThis.removeEventListener("resize", le), globalThis.removeEventListener("keyup", oe), globalThis.removeEventListener("keydown", L);
    });
    const xe = $(x, "all", s.presetDates), ie = $(x, "input");
    ct(
      [S, j],
      () => {
        ye(S.value);
      },
      { deep: !0 }
    ), ct([ve, be], () => {
      !o.value.enabled && !s.centered && E.value && (I.value = !1, dt().then(() => {
        E.value = !1, I.value = !0;
      }));
    });
    const { parseExternalModelValue: ye, emitModelValue: B, formatInputValue: M, checkBeforeEmit: ee } = lu(), ue = X(
      () => ({
        dp__main: !0,
        dp__theme_dark: s.dark,
        dp__theme_light: !s.dark,
        dp__flex_display: o.value.enabled,
        "dp--flex-display-collapsed": N.value,
        dp__flex_display_with_input: o.value.input
      })
    ), O = X(() => s.dark ? "dp__theme_dark" : "dp__theme_light"), T = X(() => o.value.enabled && (s.timePicker || s.monthPicker || s.yearPicker || s.quarterPicker)), k = () => {
      var pe, Ne;
      return ((Ne = (pe = z.value) == null ? void 0 : pe.$el) == null ? void 0 : Ne.getBoundingClientRect()) ?? { width: 0, left: 0, right: 0 };
    }, V = () => {
      _.value && i.value.closeOnScroll && we();
    }, le = () => {
      var Ne;
      const pe = ((Ne = J.value) == null ? void 0 : Ne.$el.getBoundingClientRect().width) ?? 0;
      N.value = document.body.offsetWidth <= pe;
    }, oe = (pe) => {
      pe.key === "Tab" && !o.value.enabled && !s.teleport && i.value.tabOutClosesMenu && (Y.value.contains(document.activeElement) || we()), C.value = pe.shiftKey;
    }, L = (pe) => {
      C.value = pe.shiftKey;
    }, ae = () => {
      !s.disabled && !s.readonly && (E.value = !0, _.value = !0, _.value && t("open"), _.value || De(), ye(s.modelValue));
    }, F = () => {
      var pe, Ne;
      r.value = "", De(), (pe = J.value) == null || pe.onValueCleared(), (Ne = z.value) == null || Ne.setParsedDate(null), t("update:model-value", null), t("cleared"), i.value.closeOnClearValue && we();
    }, A = () => {
      const pe = l.value;
      return !pe || !Array.isArray(pe) && f(pe) ? !0 : Array.isArray(pe) ? y.value.enabled || pe.length === 2 && f(pe[0]) && f(pe[1]) ? !0 : m.value.partialRange && !s.timePicker ? f(pe[0]) : !1 : !1;
    }, w = () => {
      ee() && A() ? (B(), we()) : t("invalid-select");
    }, G = (pe) => {
      de(), B(), i.value.closeOnAutoApply && !pe && we();
    }, de = () => {
      z.value && h.value.enabled && z.value.setParsedDate(l.value);
    }, K = (pe = !1) => {
      s.autoApply && p(l.value) && A() && (m.value.enabled && Array.isArray(l.value) ? (m.value.partialRange || l.value.length === 2) && G(pe) : G(pe));
    }, De = () => {
      h.value.enabled || (l.value = null);
    }, we = (pe = !1) => {
      E.value = !0, pe && l.value && i.value.setDateOnMenuClose && w(), o.value.enabled || (_.value && (_.value = !1, a("menuFocused", !1), a("shiftKeyInMenu", !1), D(), t("closed"), r.value && ye(S.value)), De(), t("blur"));
    }, Le = (pe, Ne, tt = !1) => {
      if (!pe) {
        l.value = null;
        return;
      }
      const Et = Array.isArray(pe) ? !pe.some((Dn) => !f(Dn)) : f(pe), It = p(pe);
      Et && It ? (a("isTextInputDate", !0), l.value = pe, Ne ? (P.value = tt, w(), t("text-submit")) : s.autoApply && K(!0), dt().then(() => {
        a("isTextInputDate", !1);
      })) : t("invalid-date", pe);
    }, nt = () => {
      s.autoApply && p(l.value) && B(), de();
    }, ze = () => _.value ? we() : ae(), vn = (pe) => {
      l.value = pe;
    }, pn = () => {
      h.value.enabled && (a("isInputFocused", !0), M()), t("focus");
    }, yn = () => {
      var pe;
      h.value.enabled && (a("isInputFocused", !1), ye(s.modelValue), P.value && ((pe = W(Y.value, C.value)) == null || pe.focus())), t("blur");
    }, Ta = (pe, Ne) => {
      J.value && J.value.updateMonthYear(Ne ?? 0, {
        month: Z(pe.month),
        year: Z(pe.year)
      });
    }, gn = (pe) => {
      ye(pe ?? s.modelValue);
    }, wn = (pe, Ne) => {
      var tt;
      (tt = J.value) == null || tt.switchView(pe, Ne);
    }, ja = (pe, Ne) => {
      if (_.value)
        return i.value.onClickOutside ? i.value.onClickOutside(pe, Ne) : we(!0);
    }, bn = (pe = 0) => {
      var Ne;
      (Ne = J.value) == null || Ne.handleFlow(pe);
    }, kn = () => U;
    return Gl(U, (pe) => ja(A, pe), {
      ignore: [z]
    }), n({
      closeMenu: we,
      selectDate: w,
      clearValue: F,
      openMenu: ae,
      onScroll: V,
      formatInputValue: M,
      // exposed for testing purposes
      updateInternalModelValue: vn,
      // modify internal modelValue
      setMonthYear: Ta,
      parseModel: gn,
      switchView: wn,
      toggleMenu: ze,
      handleFlow: bn,
      getDpWrapMenuRef: kn
    }), (pe, Ne) => (q(), ne("div", {
      ref: "picker-wrapper",
      class: Me(ue.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": c(v)
    }, [
      ft(rc, {
        ref: "input-cmp",
        "is-menu-open": _.value,
        onClear: F,
        onOpen: ae,
        onSetInputDate: Le,
        onSetEmptyDate: c(B),
        onSelectDate: w,
        onToggle: ze,
        onClose: we,
        onFocus: pn,
        onBlur: yn,
        onRealBlur: Ne[0] || (Ne[0] = (tt) => c(a)("isInputFocused", !1))
      }, at({ _: 2 }, [
        We(c(ie), (tt, Et) => ({
          name: tt,
          fn: Oe((It) => [
            fe(pe.$slots, tt, mt(At(It)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      (q(), $e(Ll, {
        to: c(b),
        disabled: !c(b)
      }, [
        Ae("div", {
          ref: "dp-menu-wrap",
          class: Me({
            "dp--menu-wrapper": !c(o).enabled,
            dp__outer_menu_wrap: !0,
            "dp--centered": c(s).centered
          }),
          style: ht(!c(o).enabled && !c(s).centered ? c(se) : void 0)
        }, [
          ft(xa, {
            name: c(u)(c(ve).startsWith("top")),
            css: c(d) && !c(o).enabled && !c(s).centered && I.value
          }, {
            default: Oe(() => [
              _.value && I.value ? (q(), $e(md, {
                key: 0,
                ref: "dp-menu",
                class: Me({ [O.value]: !0 }),
                "no-overlay-focus": T.value,
                collapse: N.value,
                "get-input-rect": k,
                onClosePicker: we,
                onSelectDate: w,
                onAutoApply: K,
                onTimeUpdate: nt,
                onMenuBlur: Ne[1] || (Ne[1] = (tt) => c(t)("blur"))
              }, at({ _: 2 }, [
                We(c(xe), (tt, Et) => ({
                  name: tt,
                  fn: Oe((It) => [
                    fe(pe.$slots, tt, mt(At({ ...It })))
                  ])
                })),
                !c(o).enabled && !c(s).centered && c(g).arrow === !0 ? {
                  name: "arrow",
                  fn: Oe(() => {
                    var tt, Et;
                    return [
                      Ae("div", {
                        ref: "menu-arrow",
                        class: Me({
                          dp__arrow_top: c(ve) === "bottom",
                          dp__arrow_bottom: c(ve) === "top"
                        }),
                        style: ht({
                          left: ((tt = c(ce).arrow) == null ? void 0 : tt.x) != null ? `${c(ce).arrow.x}px` : "",
                          top: ((Et = c(ce).arrow) == null ? void 0 : Et.y) != null ? `${c(ce).arrow.y}px` : ""
                        })
                      }, null, 6)
                    ];
                  }),
                  key: "0"
                } : void 0
              ]), 1032, ["class", "no-overlay-focus", "collapse"])) : re("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ], 6)
      ], 8, ["to", "disabled"]))
    ], 10, hd));
  }
}), kl = /* @__PURE__ */ Ke({
  __name: "VueDatePickerRoot",
  props: /* @__PURE__ */ Yr({
    multiCalendars: { type: [Boolean, Number, String, Object] },
    modelValue: {},
    modelType: {},
    dark: { type: Boolean },
    transitions: { type: [Boolean, Object] },
    ariaLabels: {},
    hideNavigation: {},
    timezone: {},
    vertical: { type: Boolean },
    hideMonthYearSelect: { type: Boolean },
    disableYearSelect: { type: Boolean },
    yearRange: {},
    autoApply: { type: Boolean },
    disabledDates: { type: [Array, Function] },
    startDate: {},
    hideOffsetDates: { type: Boolean },
    noToday: { type: Boolean },
    allowedDates: {},
    markers: {},
    presetDates: {},
    flow: {},
    preventMinMaxNavigation: { type: Boolean },
    reverseYears: { type: Boolean },
    weekPicker: { type: Boolean },
    filters: {},
    arrowNavigation: { type: Boolean },
    highlight: { type: [Function, Object] },
    teleport: { type: [String, Boolean] },
    centered: { type: Boolean },
    locale: {},
    weekStart: {},
    weekNumbers: { type: [Boolean, Object] },
    dayNames: { type: [Function, Array] },
    monthPicker: { type: Boolean },
    yearPicker: { type: Boolean },
    modelAuto: { type: Boolean },
    formats: {},
    multiDates: { type: [Boolean, Object] },
    minDate: {},
    maxDate: {},
    minTime: {},
    maxTime: {},
    inputAttrs: {},
    timeConfig: {},
    placeholder: {},
    timePicker: { type: Boolean },
    range: { type: [Boolean, Object] },
    menuId: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    inline: { type: [Boolean, Object] },
    textInput: { type: [Boolean, Object] },
    sixWeeks: { type: [Boolean, String] },
    actionRow: {},
    focusStartDate: { type: Boolean },
    disabledTimes: { type: [Function, Array] },
    calendar: { type: Function },
    config: {},
    quarterPicker: { type: Boolean },
    yearFirst: { type: Boolean },
    loading: { type: Boolean },
    ui: {},
    floating: {}
  }, Ku),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle", "invalid"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e;
    ou(r, a);
    const l = Qt(), { mapSlots: s } = Kt(), o = s(l, "root", r.presetDates), i = Be("date-picker");
    return n(Zu(i)), (h, m) => (q(), $e(vd, { ref: "date-picker" }, at({ _: 2 }, [
      We(c(o), (y, b) => ({
        name: y,
        fn: Oe((g) => [
          fe(h.$slots, y, mt(At(g)))
        ])
      }))
    ]), 1536));
  }
}), pd = /* @__PURE__ */ Ke({
  __name: "CheckInDatePicker",
  props: {
    modelValue: { default: null },
    disabledDates: { default: () => [] },
    minDate: { default: void 0 },
    placeholder: { default: "Check In Date" },
    inputClass: { default: "w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = n, a = (r) => {
      t("update:modelValue", r);
    };
    return (r, l) => (q(), $e(c(kl), {
      "model-value": e.modelValue,
      "min-date": e.minDate,
      "disabled-dates": e.disabledDates,
      formats: { input: "dd/MM/yyyy" },
      "time-config": { enableTimePicker: !1 },
      "prevent-min-max-navigation": e.minDate !== void 0,
      "auto-apply": "",
      placeholder: e.placeholder,
      "input-class-name": e.inputClass,
      "onUpdate:modelValue": a
    }, null, 8, ["model-value", "min-date", "disabled-dates", "prevent-min-max-navigation", "placeholder", "input-class-name"]));
  }
}), yd = /* @__PURE__ */ Ke({
  __name: "CheckOutDatePicker",
  props: {
    modelValue: { default: null },
    startDate: { default: null },
    disabled: { type: Boolean, default: !1 },
    disabledDates: { default: () => [] },
    minDate: { default: void 0 },
    placeholder: { default: "Check Out Date" },
    inputClass: { default: "w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = n, a = (r) => {
      t("update:modelValue", r);
    };
    return (r, l) => (q(), $e(c(kl), {
      "model-value": e.modelValue,
      "min-date": e.minDate,
      "start-date": e.startDate || e.minDate,
      disabled: e.disabled,
      "disabled-dates": e.disabledDates,
      formats: { input: "dd/MM/yyyy" },
      "time-config": { enableTimePicker: !1 },
      "auto-apply": "",
      placeholder: e.placeholder,
      "input-class-name": e.inputClass,
      "onUpdate:modelValue": a
    }, null, 8, ["model-value", "min-date", "start-date", "disabled", "disabled-dates", "placeholder", "input-class-name"]));
  }
});
var ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dl = { exports: {} };
(function(e, n) {
  (function(t, a) {
    e.exports = a();
  })(ar, function() {
    var t = 1e3, a = 6e4, r = 36e5, l = "millisecond", s = "second", o = "minute", i = "hour", h = "day", m = "week", y = "month", b = "quarter", g = "year", D = "date", f = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(z) {
      var Y = ["th", "st", "nd", "rd"], H = z % 100;
      return "[" + z + (Y[(H - 20) % 10] || Y[H] || Y[0]) + "]";
    } }, v = function(z, Y, H) {
      var P = String(z);
      return !P || P.length >= Y ? z : "" + Array(Y + 1 - P.length).join(H) + z;
    }, $ = { s: v, z: function(z) {
      var Y = -z.utcOffset(), H = Math.abs(Y), P = Math.floor(H / 60), C = H % 60;
      return (Y <= 0 ? "+" : "-") + v(P, 2, "0") + ":" + v(C, 2, "0");
    }, m: function z(Y, H) {
      if (Y.date() < H.date()) return -z(H, Y);
      var P = 12 * (H.year() - Y.year()) + (H.month() - Y.month()), C = Y.clone().add(P, y), N = H - C < 0, E = Y.clone().add(P + (N ? -1 : 1), y);
      return +(-(P + (H - C) / (N ? C - E : E - C)) || 0);
    }, a: function(z) {
      return z < 0 ? Math.ceil(z) || 0 : Math.floor(z);
    }, p: function(z) {
      return { M: y, y: g, w: m, d: h, D, h: i, m: o, s, ms: l, Q: b }[z] || String(z || "").toLowerCase().replace(/s$/, "");
    }, u: function(z) {
      return z === void 0;
    } }, W = "en", Z = {};
    Z[W] = d;
    var x = "$isDayjsObject", _ = function(z) {
      return z instanceof U || !(!z || !z[x]);
    }, I = function z(Y, H, P) {
      var C;
      if (!Y) return W;
      if (typeof Y == "string") {
        var N = Y.toLowerCase();
        Z[N] && (C = N), H && (Z[N] = H, C = N);
        var E = Y.split("-");
        if (!C && E.length > 1) return z(E[0]);
      } else {
        var Q = Y.name;
        Z[Q] = Y, C = Q;
      }
      return !P && C && (W = C), C || !P && W;
    }, S = function(z, Y) {
      if (_(z)) return z.clone();
      var H = typeof Y == "object" ? Y : {};
      return H.date = z, H.args = arguments, new U(H);
    }, j = $;
    j.l = I, j.i = _, j.w = function(z, Y) {
      return S(z, { locale: Y.$L, utc: Y.$u, x: Y.$x, $offset: Y.$offset });
    };
    var U = function() {
      function z(H) {
        this.$L = I(H.locale, null, !0), this.parse(H), this.$x = this.$x || H.x || {}, this[x] = !0;
      }
      var Y = z.prototype;
      return Y.parse = function(H) {
        this.$d = function(P) {
          var C = P.date, N = P.utc;
          if (C === null) return /* @__PURE__ */ new Date(NaN);
          if (j.u(C)) return /* @__PURE__ */ new Date();
          if (C instanceof Date) return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var E = C.match(p);
            if (E) {
              var Q = E[2] - 1 || 0, se = (E[7] || "0").substring(0, 3);
              return N ? new Date(Date.UTC(E[1], Q, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, se)) : new Date(E[1], Q, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, se);
            }
          }
          return new Date(C);
        }(H), this.init();
      }, Y.init = function() {
        var H = this.$d;
        this.$y = H.getFullYear(), this.$M = H.getMonth(), this.$D = H.getDate(), this.$W = H.getDay(), this.$H = H.getHours(), this.$m = H.getMinutes(), this.$s = H.getSeconds(), this.$ms = H.getMilliseconds();
      }, Y.$utils = function() {
        return j;
      }, Y.isValid = function() {
        return this.$d.toString() !== f;
      }, Y.isSame = function(H, P) {
        var C = S(H);
        return this.startOf(P) <= C && C <= this.endOf(P);
      }, Y.isAfter = function(H, P) {
        return S(H) < this.startOf(P);
      }, Y.isBefore = function(H, P) {
        return this.endOf(P) < S(H);
      }, Y.$g = function(H, P, C) {
        return j.u(H) ? this[P] : this.set(C, H);
      }, Y.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, Y.valueOf = function() {
        return this.$d.getTime();
      }, Y.startOf = function(H, P) {
        var C = this, N = !!j.u(P) || P, E = j.p(H), Q = function(B, M) {
          var ee = j.w(C.$u ? Date.UTC(C.$y, M, B) : new Date(C.$y, M, B), C);
          return N ? ee : ee.endOf(h);
        }, se = function(B, M) {
          return j.w(C.toDate()[B].apply(C.toDate("s"), (N ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(M)), C);
        }, ce = this.$W, ve = this.$M, be = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (E) {
          case g:
            return N ? Q(1, 0) : Q(31, 11);
          case y:
            return N ? Q(1, ve) : Q(0, ve + 1);
          case m:
            var ie = this.$locale().weekStart || 0, ye = (ce < ie ? ce + 7 : ce) - ie;
            return Q(N ? be - ye : be + (6 - ye), ve);
          case h:
          case D:
            return se(xe + "Hours", 0);
          case i:
            return se(xe + "Minutes", 1);
          case o:
            return se(xe + "Seconds", 2);
          case s:
            return se(xe + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, Y.endOf = function(H) {
        return this.startOf(H, !1);
      }, Y.$set = function(H, P) {
        var C, N = j.p(H), E = "set" + (this.$u ? "UTC" : ""), Q = (C = {}, C[h] = E + "Date", C[D] = E + "Date", C[y] = E + "Month", C[g] = E + "FullYear", C[i] = E + "Hours", C[o] = E + "Minutes", C[s] = E + "Seconds", C[l] = E + "Milliseconds", C)[N], se = N === h ? this.$D + (P - this.$W) : P;
        if (N === y || N === g) {
          var ce = this.clone().set(D, 1);
          ce.$d[Q](se), ce.init(), this.$d = ce.set(D, Math.min(this.$D, ce.daysInMonth())).$d;
        } else Q && this.$d[Q](se);
        return this.init(), this;
      }, Y.set = function(H, P) {
        return this.clone().$set(H, P);
      }, Y.get = function(H) {
        return this[j.p(H)]();
      }, Y.add = function(H, P) {
        var C, N = this;
        H = Number(H);
        var E = j.p(P), Q = function(ve) {
          var be = S(N);
          return j.w(be.date(be.date() + Math.round(ve * H)), N);
        };
        if (E === y) return this.set(y, this.$M + H);
        if (E === g) return this.set(g, this.$y + H);
        if (E === h) return Q(1);
        if (E === m) return Q(7);
        var se = (C = {}, C[o] = a, C[i] = r, C[s] = t, C)[E] || 1, ce = this.$d.getTime() + H * se;
        return j.w(ce, this);
      }, Y.subtract = function(H, P) {
        return this.add(-1 * H, P);
      }, Y.format = function(H) {
        var P = this, C = this.$locale();
        if (!this.isValid()) return C.invalidDate || f;
        var N = H || "YYYY-MM-DDTHH:mm:ssZ", E = j.z(this), Q = this.$H, se = this.$m, ce = this.$M, ve = C.weekdays, be = C.months, xe = C.meridiem, ie = function(M, ee, ue, O) {
          return M && (M[ee] || M(P, N)) || ue[ee].slice(0, O);
        }, ye = function(M) {
          return j.s(Q % 12 || 12, M, "0");
        }, B = xe || function(M, ee, ue) {
          var O = M < 12 ? "AM" : "PM";
          return ue ? O.toLowerCase() : O;
        };
        return N.replace(u, function(M, ee) {
          return ee || function(ue) {
            switch (ue) {
              case "YY":
                return String(P.$y).slice(-2);
              case "YYYY":
                return j.s(P.$y, 4, "0");
              case "M":
                return ce + 1;
              case "MM":
                return j.s(ce + 1, 2, "0");
              case "MMM":
                return ie(C.monthsShort, ce, be, 3);
              case "MMMM":
                return ie(be, ce);
              case "D":
                return P.$D;
              case "DD":
                return j.s(P.$D, 2, "0");
              case "d":
                return String(P.$W);
              case "dd":
                return ie(C.weekdaysMin, P.$W, ve, 2);
              case "ddd":
                return ie(C.weekdaysShort, P.$W, ve, 3);
              case "dddd":
                return ve[P.$W];
              case "H":
                return String(Q);
              case "HH":
                return j.s(Q, 2, "0");
              case "h":
                return ye(1);
              case "hh":
                return ye(2);
              case "a":
                return B(Q, se, !0);
              case "A":
                return B(Q, se, !1);
              case "m":
                return String(se);
              case "mm":
                return j.s(se, 2, "0");
              case "s":
                return String(P.$s);
              case "ss":
                return j.s(P.$s, 2, "0");
              case "SSS":
                return j.s(P.$ms, 3, "0");
              case "Z":
                return E;
            }
            return null;
          }(M) || E.replace(":", "");
        });
      }, Y.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, Y.diff = function(H, P, C) {
        var N, E = this, Q = j.p(P), se = S(H), ce = (se.utcOffset() - this.utcOffset()) * a, ve = this - se, be = function() {
          return j.m(E, se);
        };
        switch (Q) {
          case g:
            N = be() / 12;
            break;
          case y:
            N = be();
            break;
          case b:
            N = be() / 3;
            break;
          case m:
            N = (ve - ce) / 6048e5;
            break;
          case h:
            N = (ve - ce) / 864e5;
            break;
          case i:
            N = ve / r;
            break;
          case o:
            N = ve / a;
            break;
          case s:
            N = ve / t;
            break;
          default:
            N = ve;
        }
        return C ? N : j.a(N);
      }, Y.daysInMonth = function() {
        return this.endOf(y).$D;
      }, Y.$locale = function() {
        return Z[this.$L];
      }, Y.locale = function(H, P) {
        if (!H) return this.$L;
        var C = this.clone(), N = I(H, P, !0);
        return N && (C.$L = N), C;
      }, Y.clone = function() {
        return j.w(this.$d, this);
      }, Y.toDate = function() {
        return new Date(this.valueOf());
      }, Y.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, Y.toISOString = function() {
        return this.$d.toISOString();
      }, Y.toString = function() {
        return this.$d.toUTCString();
      }, z;
    }(), J = U.prototype;
    return S.prototype = J, [["$ms", l], ["$s", s], ["$m", o], ["$H", i], ["$W", h], ["$M", y], ["$y", g], ["$D", D]].forEach(function(z) {
      J[z[1]] = function(Y) {
        return this.$g(Y, z[0], z[1]);
      };
    }), S.extend = function(z, Y) {
      return z.$i || (z(Y, U, S), z.$i = !0), S;
    }, S.locale = I, S.isDayjs = _, S.unix = function(z) {
      return S(1e3 * z);
    }, S.en = Z[W], S.Ls = Z, S.p = {}, S;
  });
})(Dl);
var gd = Dl.exports;
const it = /* @__PURE__ */ nr(gd);
var _l = { exports: {} };
(function(e, n) {
  (function(t, a) {
    e.exports = a();
  })(ar, function() {
    var t = "minute", a = /[+-]\d\d(?::?\d\d)?/g, r = /([+-]|\d\d)/g;
    return function(l, s, o) {
      var i = s.prototype;
      o.utc = function(f) {
        var p = { date: f, utc: !0, args: arguments };
        return new s(p);
      }, i.utc = function(f) {
        var p = o(this.toDate(), { locale: this.$L, utc: !0 });
        return f ? p.add(this.utcOffset(), t) : p;
      }, i.local = function() {
        return o(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var h = i.parse;
      i.parse = function(f) {
        f.utc && (this.$u = !0), this.$utils().u(f.$offset) || (this.$offset = f.$offset), h.call(this, f);
      };
      var m = i.init;
      i.init = function() {
        if (this.$u) {
          var f = this.$d;
          this.$y = f.getUTCFullYear(), this.$M = f.getUTCMonth(), this.$D = f.getUTCDate(), this.$W = f.getUTCDay(), this.$H = f.getUTCHours(), this.$m = f.getUTCMinutes(), this.$s = f.getUTCSeconds(), this.$ms = f.getUTCMilliseconds();
        } else m.call(this);
      };
      var y = i.utcOffset;
      i.utcOffset = function(f, p) {
        var u = this.$utils().u;
        if (u(f)) return this.$u ? 0 : u(this.$offset) ? y.call(this) : this.$offset;
        if (typeof f == "string" && (f = function(W) {
          W === void 0 && (W = "");
          var Z = W.match(a);
          if (!Z) return null;
          var x = ("" + Z[0]).match(r) || ["-", 0, 0], _ = x[0], I = 60 * +x[1] + +x[2];
          return I === 0 ? 0 : _ === "+" ? I : -I;
        }(f), f === null)) return this;
        var d = Math.abs(f) <= 16 ? 60 * f : f;
        if (d === 0) return this.utc(p);
        var v = this.clone();
        if (p) return v.$offset = d, v.$u = !1, v;
        var $ = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return (v = this.local().add(d + $, t)).$offset = d, v.$x.$localOffset = $, v;
      };
      var b = i.format;
      i.format = function(f) {
        var p = f || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return b.call(this, p);
      }, i.valueOf = function() {
        var f = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * f;
      }, i.isUTC = function() {
        return !!this.$u;
      }, i.toISOString = function() {
        return this.toDate().toISOString();
      }, i.toString = function() {
        return this.toDate().toUTCString();
      };
      var g = i.toDate;
      i.toDate = function(f) {
        return f === "s" && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : g.call(this);
      };
      var D = i.diff;
      i.diff = function(f, p, u) {
        if (f && this.$u === f.$u) return D.call(this, f, p, u);
        var d = this.local(), v = o(f).local();
        return D.call(d, v, p, u);
      };
    };
  });
})(_l);
var wd = _l.exports;
const bd = /* @__PURE__ */ nr(wd);
var xl = { exports: {} };
(function(e, n) {
  (function(t, a) {
    e.exports = a();
  })(ar, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d/, l = /\d\d/, s = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, i = {}, h = function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, m = function(p) {
      return function(u) {
        this[p] = +u;
      };
    }, y = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
      (this.zone || (this.zone = {})).offset = function(u) {
        if (!u || u === "Z") return 0;
        var d = u.match(/([+-]|\d\d)/g), v = 60 * d[1] + (+d[2] || 0);
        return v === 0 ? 0 : d[0] === "+" ? -v : v;
      }(p);
    }], b = function(p) {
      var u = i[p];
      return u && (u.indexOf ? u : u.s.concat(u.f));
    }, g = function(p, u) {
      var d, v = i.meridiem;
      if (v) {
        for (var $ = 1; $ <= 24; $ += 1) if (p.indexOf(v($, 0, u)) > -1) {
          d = $ > 12;
          break;
        }
      } else d = p === (u ? "pm" : "PM");
      return d;
    }, D = { A: [o, function(p) {
      this.afternoon = g(p, !1);
    }], a: [o, function(p) {
      this.afternoon = g(p, !0);
    }], Q: [r, function(p) {
      this.month = 3 * (p - 1) + 1;
    }], S: [r, function(p) {
      this.milliseconds = 100 * +p;
    }], SS: [l, function(p) {
      this.milliseconds = 10 * +p;
    }], SSS: [/\d{3}/, function(p) {
      this.milliseconds = +p;
    }], s: [s, m("seconds")], ss: [s, m("seconds")], m: [s, m("minutes")], mm: [s, m("minutes")], H: [s, m("hours")], h: [s, m("hours")], HH: [s, m("hours")], hh: [s, m("hours")], D: [s, m("day")], DD: [l, m("day")], Do: [o, function(p) {
      var u = i.ordinal, d = p.match(/\d+/);
      if (this.day = d[0], u) for (var v = 1; v <= 31; v += 1) u(v).replace(/\[|\]/g, "") === p && (this.day = v);
    }], w: [s, m("week")], ww: [l, m("week")], M: [s, m("month")], MM: [l, m("month")], MMM: [o, function(p) {
      var u = b("months"), d = (b("monthsShort") || u.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(p) + 1;
      if (d < 1) throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(p) {
      var u = b("months").indexOf(p) + 1;
      if (u < 1) throw new Error();
      this.month = u % 12 || u;
    }], Y: [/[+-]?\d+/, m("year")], YY: [l, function(p) {
      this.year = h(p);
    }], YYYY: [/\d{4}/, m("year")], Z: y, ZZ: y };
    function f(p) {
      var u, d;
      u = p, d = i && i.formats;
      for (var v = (p = u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(S, j, U) {
        var J = U && U.toUpperCase();
        return j || d[U] || t[U] || d[J].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(z, Y, H) {
          return Y || H.slice(1);
        });
      })).match(a), $ = v.length, W = 0; W < $; W += 1) {
        var Z = v[W], x = D[Z], _ = x && x[0], I = x && x[1];
        v[W] = I ? { regex: _, parser: I } : Z.replace(/^\[|\]$/g, "");
      }
      return function(S) {
        for (var j = {}, U = 0, J = 0; U < $; U += 1) {
          var z = v[U];
          if (typeof z == "string") J += z.length;
          else {
            var Y = z.regex, H = z.parser, P = S.slice(J), C = Y.exec(P)[0];
            H.call(j, C), S = S.replace(C, "");
          }
        }
        return function(N) {
          var E = N.afternoon;
          if (E !== void 0) {
            var Q = N.hours;
            E ? Q < 12 && (N.hours += 12) : Q === 12 && (N.hours = 0), delete N.afternoon;
          }
        }(j), j;
      };
    }
    return function(p, u, d) {
      d.p.customParseFormat = !0, p && p.parseTwoDigitYear && (h = p.parseTwoDigitYear);
      var v = u.prototype, $ = v.parse;
      v.parse = function(W) {
        var Z = W.date, x = W.utc, _ = W.args;
        this.$u = x;
        var I = _[1];
        if (typeof I == "string") {
          var S = _[2] === !0, j = _[3] === !0, U = S || j, J = _[2];
          j && (J = _[2]), i = this.$locale(), !S && J && (i = d.Ls[J]), this.$d = function(P, C, N, E) {
            try {
              if (["x", "X"].indexOf(C) > -1) return new Date((C === "X" ? 1e3 : 1) * P);
              var Q = f(C)(P), se = Q.year, ce = Q.month, ve = Q.day, be = Q.hours, xe = Q.minutes, ie = Q.seconds, ye = Q.milliseconds, B = Q.zone, M = Q.week, ee = /* @__PURE__ */ new Date(), ue = ve || (se || ce ? 1 : ee.getDate()), O = se || ee.getFullYear(), T = 0;
              se && !ce || (T = ce > 0 ? ce - 1 : ee.getMonth());
              var k, V = be || 0, le = xe || 0, oe = ie || 0, L = ye || 0;
              return B ? new Date(Date.UTC(O, T, ue, V, le, oe, L + 60 * B.offset * 1e3)) : N ? new Date(Date.UTC(O, T, ue, V, le, oe, L)) : (k = new Date(O, T, ue, V, le, oe, L), M && (k = E(k).week(M).toDate()), k);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(Z, I, x, d), this.init(), J && J !== !0 && (this.$L = this.locale(J).$L), U && Z != this.format(I) && (this.$d = /* @__PURE__ */ new Date("")), i = {};
        } else if (I instanceof Array) for (var z = I.length, Y = 1; Y <= z; Y += 1) {
          _[1] = I[Y - 1];
          var H = d.apply(this, _);
          if (H.isValid()) {
            this.$d = H.$d, this.$L = H.$L, this.init();
            break;
          }
          Y === z && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else $.call(this, W);
      };
    };
  });
})(xl);
var kd = xl.exports;
const Dd = /* @__PURE__ */ nr(kd);
it.extend(bd);
it.extend(Dd);
function Wt(e) {
  if (typeof e == "string") return it(e).format("YYYY-MM-DD");
  const n = e.getFullYear(), t = String(e.getMonth() + 1).padStart(2, "0"), a = String(e.getDate()).padStart(2, "0");
  return `${n}-${t}-${a}`;
}
function $r(e) {
  const [n, t, a] = e.split("-").map(Number);
  return new Date(n, t - 1, a);
}
function _d(e) {
  const {
    bookedDates: n,
    onCheckInChange: t,
    onCheckOutChange: a,
    onValidationError: r,
    minDate: l,
    dateFormat: s = "YYYY-MM-DD"
  } = e, o = X(() => typeof n == "function" ? n() : n), i = X(() => {
    if (l)
      return new Date(l.getFullYear(), l.getMonth(), l.getDate());
    const p = /* @__PURE__ */ new Date();
    return new Date(p.getFullYear(), p.getMonth(), p.getDate());
  }), h = he(null), m = he(null), y = X(() => h.value ? it(h.value).add(1, "day").toDate() : i.value), b = X(() => {
    if (!o.value || o.value.length === 0) return [];
    const p = /* @__PURE__ */ new Set();
    return o.value.forEach((u) => {
      const d = Wt(u.start), v = Wt(u.end), $ = it.utc(d), W = it.utc(v);
      let Z = $;
      for (; Z.isBefore(W, "day") || Z.isSame(W, "day"); )
        p.add(Z.format("YYYY-MM-DD")), Z = Z.add(1, "day");
    }), Array.from(p).map($r);
  }), g = X(() => {
    const p = h.value;
    if (!o.value || o.value.length === 0) return [];
    const u = /* @__PURE__ */ new Set();
    return o.value.forEach((d) => {
      const v = Wt(d.start), $ = Wt(d.end), W = it.utc(v), x = it.utc($).add(1, "day");
      if (p) {
        const _ = Wt(p);
        if (it.utc(_).isBefore(x, "day")) {
          let j = W.add(1, "day");
          for (; j.isBefore(x, "day"); )
            u.add(j.format("YYYY-MM-DD")), j = j.add(1, "day");
          j = x;
          const U = x.add(365, "day");
          for (; j.isBefore(U, "day") || j.isSame(U, "day"); )
            u.add(j.format("YYYY-MM-DD")), j = j.add(1, "day");
        }
      } else
        u.add(x.format("YYYY-MM-DD"));
    }), Array.from(u).map($r);
  });
  return {
    checkInDate: h,
    checkOutDate: m,
    minCheckOutDate: y,
    disabledCheckInDates: b,
    disabledCheckOutDates: g,
    handleCheckInChange: (p) => {
      if (h.value = p, p) {
        const u = it(p).format(s);
        t == null || t(u), m.value = null, a == null || a(null);
      } else
        t == null || t(null), m.value = null, a == null || a(null);
    },
    handleCheckOutChange: (p) => {
      var u;
      if (!h.value) {
        m.value = null;
        return;
      }
      if (p) {
        const d = Wt(h.value), v = Wt(p), $ = it.utc(d), W = it.utc(v);
        if (W.isBefore($, "day")) {
          r == null || r("Check-out date cannot be before check-in date. Please select a different date."), m.value = null, a == null || a(null);
          return;
        }
        if ((u = o.value) == null ? void 0 : u.some((x) => {
          const _ = Wt(x.start), I = Wt(x.end), S = it.utc(_), U = it.utc(I).add(1, "day");
          return $.isBefore(U, "day") && W.isAfter(S, "day");
        })) {
          r == null || r("The selected date range contains unavailable dates. Please select a different range."), m.value = null, a == null || a(null);
          return;
        }
        m.value = p, a == null || a(it(p).format(s));
      } else
        m.value = null, a == null || a(null);
    },
    today: i
  };
}
const xd = { class: "flex flex-col sm:flex-row gap-4 justify-start items-center w-full" }, Md = { class: "flex flex-col gap-1.5 justify-center items-start w-full sm:flex-1" }, Td = { class: "flex flex-col gap-1.5 justify-center items-start w-full sm:flex-1" }, Ad = /* @__PURE__ */ Ke({
  __name: "BookingDateRange",
  props: {
    checkInDate: { default: null },
    checkOutDate: { default: null },
    bookedDates: { type: [Array, Function], default: () => [] },
    onCheckInChange: {},
    onCheckOutChange: {},
    onValidationError: {},
    minDate: { default: void 0 },
    dateFormat: { default: "YYYY-MM-DD" },
    displayFormat: { default: "dd/MM/yyyy" },
    checkInPlaceholder: { default: "Check In Date" },
    checkOutPlaceholder: { default: "Check Out Date" },
    checkInInputClass: { default: "w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900" },
    checkOutInputClass: { default: "w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900" }
  },
  setup(e) {
    const n = e, {
      checkInDate: t,
      checkOutDate: a,
      minCheckOutDate: r,
      disabledCheckInDates: l,
      disabledCheckOutDates: s,
      handleCheckInChange: o,
      handleCheckOutChange: i,
      today: h
    } = _d({
      bookedDates: n.bookedDates,
      onCheckInChange: n.onCheckInChange,
      onCheckOutChange: n.onCheckOutChange,
      onValidationError: n.onValidationError,
      minDate: n.minDate,
      dateFormat: n.dateFormat,
      displayFormat: n.displayFormat
    });
    return n.checkInDate && (t.value = n.checkInDate), n.checkOutDate && (a.value = n.checkOutDate), (m, y) => (q(), ne("div", xd, [
      Ae("div", Md, [
        ft(pd, {
          "model-value": c(t),
          "min-date": c(h),
          "disabled-dates": c(l),
          placeholder: e.checkInPlaceholder,
          "input-class": e.checkInInputClass,
          "onUpdate:modelValue": c(o)
        }, null, 8, ["model-value", "min-date", "disabled-dates", "placeholder", "input-class", "onUpdate:modelValue"])
      ]),
      Ae("div", Td, [
        ft(yd, {
          "model-value": c(a),
          "min-date": c(r),
          "start-date": c(t) || c(r),
          disabled: !c(t),
          "disabled-dates": c(s),
          placeholder: e.checkOutPlaceholder,
          "input-class": e.checkOutInputClass,
          "onUpdate:modelValue": c(i)
        }, null, 8, ["model-value", "min-date", "start-date", "disabled", "disabled-dates", "placeholder", "input-class", "onUpdate:modelValue"])
      ])
    ]));
  }
});
export {
  Ad as BookingDateRange,
  pd as CheckInDatePicker,
  yd as CheckOutDatePicker,
  _d as useBookingDatePicker
};
