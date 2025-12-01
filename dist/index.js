var Yl = Object.defineProperty;
var Rl = (e, n, t) => n in e ? Yl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var me = (e, n, t) => Rl(e, typeof n != "symbol" ? n + "" : n, t);
import { watch as ct, computed as X, toValue as qt, reactive as aa, shallowRef as Sr, unref as c, ref as he, getCurrentScope as El, onScopeDispose as Il, shallowReadonly as ia, defineComponent as Ke, mergeDefaults as $r, useSlots as Qt, useTemplateRef as Fe, createBlock as $e, openBlock as q, createSlots as at, renderList as We, withCtx as Oe, renderSlot as fe, normalizeProps as mt, guardReactiveProps as At, provide as Bl, readonly as Fl, toRef as nr, onMounted as et, nextTick as dt, onUnmounted as _a, createElementBlock as ne, normalizeClass as Me, createVNode as ft, Teleport as Wl, createElementVNode as Ae, normalizeStyle as ht, Transition as Da, createCommentVNode as re, inject as Nl, withModifiers as Ea, Fragment as Pe, toDisplayString as st, resolveDynamicComponent as Nn, h as Xe, mergeProps as gt, createTextVNode as Wt, onBeforeUpdate as Ll, withDirectives as Xa, vShow as Za, withKeys as Hl } from "vue";
const Vl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ql = Object.prototype.toString, jl = (e) => ql.call(e) === "[object Object]", Qa = () => {
};
function Dn(e) {
  return Array.isArray(e) ? e : [e];
}
function zl(e, n, t) {
  return ct(e, n, {
    ...t,
    immediate: !0
  });
}
const Cr = Vl ? window : void 0;
function Ze(e) {
  var n;
  const t = qt(e);
  return (n = t == null ? void 0 : t.$el) !== null && n !== void 0 ? n : t;
}
function ha(...e) {
  const n = (a, r, l, s) => (a.addEventListener(r, l, s), () => a.removeEventListener(r, l, s)), t = X(() => {
    const a = Dn(qt(e[0])).filter((r) => r != null);
    return a.every((r) => typeof r != "string") ? a : void 0;
  });
  return zl(() => {
    var a, r;
    return [
      (a = (r = t.value) === null || r === void 0 ? void 0 : r.map((l) => Ze(l))) !== null && a !== void 0 ? a : [Cr].filter((l) => l != null),
      Dn(qt(t.value ? e[1] : e[0])),
      Dn(c(t.value ? e[2] : e[1])),
      qt(t.value ? e[3] : e[2])
    ];
  }, ([a, r, l, s], o, i) => {
    if (!(a != null && a.length) || !(r != null && r.length) || !(l != null && l.length)) return;
    const m = jl(s) ? { ...s } : s, f = a.flatMap((h) => r.flatMap((b) => l.map((p) => n(h, b, p, m))));
    i(() => {
      f.forEach((h) => h());
    });
  }, { flush: "post" });
}
function Ql(e, n, t = {}) {
  const { window: a = Cr, ignore: r = [], capture: l = !0, detectIframe: s = !1, controls: o = !1 } = t;
  if (!a) return o ? {
    stop: Qa,
    cancel: Qa,
    trigger: Qa
  } : Qa;
  let i = !0;
  const m = (g) => qt(r).some((u) => {
    if (typeof u == "string") return Array.from(a.document.querySelectorAll(u)).some((d) => d === g.target || g.composedPath().includes(d));
    {
      const d = Ze(u);
      return d && (g.target === d || g.composedPath().includes(d));
    }
  });
  function f(g) {
    const u = qt(g);
    return u && u.$.subTree.shapeFlag === 16;
  }
  function h(g, u) {
    const d = qt(g), v = d.$.subTree && d.$.subTree.children;
    return v == null || !Array.isArray(v) ? !1 : v.some((S) => S.el === u.target || u.composedPath().includes(S.el));
  }
  const b = (g) => {
    const u = Ze(e);
    if (g.target != null && !(!(u instanceof Element) && f(e) && h(e, g)) && !(!u || u === g.target || g.composedPath().includes(u))) {
      if ("detail" in g && g.detail === 0 && (i = !m(g)), !i) {
        i = !0;
        return;
      }
      n(g);
    }
  };
  let p = !1;
  const _ = [
    ha(a, "click", (g) => {
      p || (p = !0, setTimeout(() => {
        p = !1;
      }, 0), b(g));
    }, {
      passive: !0,
      capture: l
    }),
    ha(a, "pointerdown", (g) => {
      const u = Ze(e);
      i = !m(g) && !!(u && !g.composedPath().includes(u));
    }, { passive: !0 }),
    s && ha(a, "blur", (g) => {
      setTimeout(() => {
        var u;
        const d = Ze(e);
        ((u = a.document.activeElement) === null || u === void 0 ? void 0 : u.tagName) === "IFRAME" && !(d != null && d.contains(a.document.activeElement)) && n(g);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), w = () => _.forEach((g) => g());
  return o ? {
    stop: w,
    cancel: () => {
      i = !1;
    },
    trigger: (g) => {
      i = !0, b(g), i = !1;
    }
  } : w;
}
function Ul(e, n = {}) {
  const { threshold: t = 50, onSwipe: a, onSwipeEnd: r, onSwipeStart: l, passive: s = !0 } = n, o = aa({
    x: 0,
    y: 0
  }), i = aa({
    x: 0,
    y: 0
  }), m = X(() => o.x - i.x), f = X(() => o.y - i.y), { max: h, abs: b } = Math, p = X(() => h(b(m.value), b(f.value)) >= t), _ = Sr(!1), w = X(() => p.value ? b(m.value) > b(f.value) ? m.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), g = (T) => [T.touches[0].clientX, T.touches[0].clientY], u = (T, D) => {
    o.x = T, o.y = D;
  }, d = (T, D) => {
    i.x = T, i.y = D;
  }, v = {
    passive: s,
    capture: !s
  }, S = (T) => {
    _.value && (r == null || r(T, w.value)), _.value = !1;
  }, N = [
    ha(e, "touchstart", (T) => {
      if (T.touches.length !== 1) return;
      const [D, F] = g(T);
      u(D, F), d(D, F), l == null || l(T);
    }, v),
    ha(e, "touchmove", (T) => {
      if (T.touches.length !== 1) return;
      const [D, F] = g(T);
      d(D, F), v.capture && !v.passive && Math.abs(m.value) > Math.abs(f.value) && T.preventDefault(), !_.value && p.value && (_.value = !0), _.value && (a == null || a(T));
    }, v),
    ha(e, ["touchend", "touchcancel"], S, v)
  ];
  return {
    isSwiping: _,
    direction: w,
    coordsStart: o,
    coordsEnd: i,
    lengthX: m,
    lengthY: f,
    stop: () => N.forEach((T) => T())
  };
}
const ya = Math.min, ea = Math.max, Ja = Math.round, Ua = Math.floor, $t = (e) => ({
  x: e,
  y: e
}), Gl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Kl = {
  start: "end",
  end: "start"
};
function Cn(e, n, t) {
  return ea(e, ya(n, t));
}
function Ba(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function na(e) {
  return e.split("-")[0];
}
function Fa(e) {
  return e.split("-")[1];
}
function Yr(e) {
  return e === "x" ? "y" : "x";
}
function Ln(e) {
  return e === "y" ? "height" : "width";
}
const Xl = /* @__PURE__ */ new Set(["top", "bottom"]);
function Vt(e) {
  return Xl.has(na(e)) ? "y" : "x";
}
function Hn(e) {
  return Yr(Vt(e));
}
function Zl(e, n, t) {
  t === void 0 && (t = !1);
  const a = Fa(e), r = Hn(e), l = Ln(r);
  let s = r === "x" ? a === (t ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return n.reference[l] > n.floating[l] && (s = en(s)), [s, en(s)];
}
function Jl(e) {
  const n = en(e);
  return [Yn(e), n, Yn(n)];
}
function Yn(e) {
  return e.replace(/start|end/g, (n) => Kl[n]);
}
const rr = ["left", "right"], lr = ["right", "left"], es = ["top", "bottom"], ts = ["bottom", "top"];
function as(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? lr : rr : n ? rr : lr;
    case "left":
    case "right":
      return n ? es : ts;
    default:
      return [];
  }
}
function ns(e, n, t, a) {
  const r = Fa(e);
  let l = as(na(e), t === "start", a);
  return r && (l = l.map((s) => s + "-" + r), n && (l = l.concat(l.map(Yn)))), l;
}
function en(e) {
  return e.replace(/left|right|bottom|top/g, (n) => Gl[n]);
}
function rs(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Rr(e) {
  return typeof e != "number" ? rs(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function tn(e) {
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
function sr(e, n, t) {
  let {
    reference: a,
    floating: r
  } = e;
  const l = Vt(n), s = Hn(n), o = Ln(s), i = na(n), m = l === "y", f = a.x + a.width / 2 - r.width / 2, h = a.y + a.height / 2 - r.height / 2, b = a[o] / 2 - r[o] / 2;
  let p;
  switch (i) {
    case "top":
      p = {
        x: f,
        y: a.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: f,
        y: a.y + a.height
      };
      break;
    case "right":
      p = {
        x: a.x + a.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: a.x - r.width,
        y: h
      };
      break;
    default:
      p = {
        x: a.x,
        y: a.y
      };
  }
  switch (Fa(n)) {
    case "start":
      p[s] -= b * (t && m ? -1 : 1);
      break;
    case "end":
      p[s] += b * (t && m ? -1 : 1);
      break;
  }
  return p;
}
const ls = async (e, n, t) => {
  const {
    placement: a = "bottom",
    strategy: r = "absolute",
    middleware: l = [],
    platform: s
  } = t, o = l.filter(Boolean), i = await (s.isRTL == null ? void 0 : s.isRTL(n));
  let m = await s.getElementRects({
    reference: e,
    floating: n,
    strategy: r
  }), {
    x: f,
    y: h
  } = sr(m, a, i), b = a, p = {}, _ = 0;
  for (let w = 0; w < o.length; w++) {
    const {
      name: g,
      fn: u
    } = o[w], {
      x: d,
      y: v,
      data: S,
      reset: N
    } = await u({
      x: f,
      y: h,
      initialPlacement: a,
      placement: b,
      strategy: r,
      middlewareData: p,
      rects: m,
      platform: s,
      elements: {
        reference: e,
        floating: n
      }
    });
    f = d ?? f, h = v ?? h, p = {
      ...p,
      [g]: {
        ...p[g],
        ...S
      }
    }, N && _ <= 50 && (_++, typeof N == "object" && (N.placement && (b = N.placement), N.rects && (m = N.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: n,
      strategy: r
    }) : N.rects), {
      x: f,
      y: h
    } = sr(m, b, i)), w = -1);
  }
  return {
    x: f,
    y: h,
    placement: b,
    strategy: r,
    middlewareData: p
  };
};
async function Er(e, n) {
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
    boundary: m = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: h = "floating",
    altBoundary: b = !1,
    padding: p = 0
  } = Ba(n, e), _ = Rr(p), g = o[b ? h === "floating" ? "reference" : "floating" : h], u = tn(await l.getClippingRect({
    element: (t = await (l.isElement == null ? void 0 : l.isElement(g))) == null || t ? g : g.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(o.floating)),
    boundary: m,
    rootBoundary: f,
    strategy: i
  })), d = h === "floating" ? {
    x: a,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(o.floating)), S = await (l.isElement == null ? void 0 : l.isElement(v)) ? await (l.getScale == null ? void 0 : l.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, N = tn(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: d,
    offsetParent: v,
    strategy: i
  }) : d);
  return {
    top: (u.top - N.top + _.top) / S.y,
    bottom: (N.bottom - u.bottom + _.bottom) / S.y,
    left: (u.left - N.left + _.left) / S.x,
    right: (N.right - u.right + _.right) / S.x
  };
}
const ss = (e) => ({
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
      element: m,
      padding: f = 0
    } = Ba(e, n) || {};
    if (m == null)
      return {};
    const h = Rr(f), b = {
      x: t,
      y: a
    }, p = Hn(r), _ = Ln(p), w = await s.getDimensions(m), g = p === "y", u = g ? "top" : "left", d = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", S = l.reference[_] + l.reference[p] - b[p] - l.floating[_], N = b[p] - l.reference[p], J = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(m));
    let T = J ? J[v] : 0;
    (!T || !await (s.isElement == null ? void 0 : s.isElement(J))) && (T = o.floating[v] || l.floating[_]);
    const D = S / 2 - N / 2, F = T / 2 - w[_] / 2 - 1, $ = ya(h[u], F), U = ya(h[d], F), z = $, Z = T - w[_] - U, j = T / 2 - w[_] / 2 + D, Y = Cn(z, j, Z), H = !i.arrow && Fa(r) != null && j !== Y && l.reference[_] / 2 - (j < z ? $ : U) - w[_] / 2 < 0, P = H ? j < z ? j - z : j - Z : 0;
    return {
      [p]: b[p] + P,
      data: {
        [p]: Y,
        centerOffset: j - Y - P,
        ...H && {
          alignmentOffset: P
        }
      },
      reset: H
    };
  }
}), os = function(e) {
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
        elements: m
      } = n, {
        mainAxis: f = !0,
        crossAxis: h = !0,
        fallbackPlacements: b,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: w = !0,
        ...g
      } = Ba(e, n);
      if ((t = l.arrow) != null && t.alignmentOffset)
        return {};
      const u = na(r), d = Vt(o), v = na(o) === o, S = await (i.isRTL == null ? void 0 : i.isRTL(m.floating)), N = b || (v || !w ? [en(o)] : Jl(o)), J = _ !== "none";
      !b && J && N.push(...ns(o, w, _, S));
      const T = [o, ...N], D = await Er(n, g), F = [];
      let $ = ((a = l.flip) == null ? void 0 : a.overflows) || [];
      if (f && F.push(D[u]), h) {
        const j = Zl(r, s, S);
        F.push(D[j[0]], D[j[1]]);
      }
      if ($ = [...$, {
        placement: r,
        overflows: F
      }], !F.every((j) => j <= 0)) {
        var U, z;
        const j = (((U = l.flip) == null ? void 0 : U.index) || 0) + 1, Y = T[j];
        if (Y && (!(h === "alignment" ? d !== Vt(Y) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        $.every((C) => Vt(C.placement) === d ? C.overflows[0] > 0 : !0)))
          return {
            data: {
              index: j,
              overflows: $
            },
            reset: {
              placement: Y
            }
          };
        let H = (z = $.filter((P) => P.overflows[0] <= 0).sort((P, C) => P.overflows[1] - C.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!H)
          switch (p) {
            case "bestFit": {
              var Z;
              const P = (Z = $.filter((C) => {
                if (J) {
                  const W = Vt(C.placement);
                  return W === d || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  W === "y";
                }
                return !0;
              }).map((C) => [C.placement, C.overflows.filter((W) => W > 0).reduce((W, E) => W + E, 0)]).sort((C, W) => C[1] - W[1])[0]) == null ? void 0 : Z[0];
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
}, is = /* @__PURE__ */ new Set(["left", "top"]);
async function us(e, n) {
  const {
    placement: t,
    platform: a,
    elements: r
  } = e, l = await (a.isRTL == null ? void 0 : a.isRTL(r.floating)), s = na(t), o = Fa(t), i = Vt(t) === "y", m = is.has(s) ? -1 : 1, f = l && i ? -1 : 1, h = Ba(n, e);
  let {
    mainAxis: b,
    crossAxis: p,
    alignmentAxis: _
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return o && typeof _ == "number" && (p = o === "end" ? _ * -1 : _), i ? {
    x: p * f,
    y: b * m
  } : {
    x: b * m,
    y: p * f
  };
}
const cs = function(e) {
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
      } = n, i = await us(n, e);
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
}, ds = function(e) {
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
          fn: (g) => {
            let {
              x: u,
              y: d
            } = g;
            return {
              x: u,
              y: d
            };
          }
        },
        ...i
      } = Ba(e, n), m = {
        x: t,
        y: a
      }, f = await Er(n, i), h = Vt(na(r)), b = Yr(h);
      let p = m[b], _ = m[h];
      if (l) {
        const g = b === "y" ? "top" : "left", u = b === "y" ? "bottom" : "right", d = p + f[g], v = p - f[u];
        p = Cn(d, p, v);
      }
      if (s) {
        const g = h === "y" ? "top" : "left", u = h === "y" ? "bottom" : "right", d = _ + f[g], v = _ - f[u];
        _ = Cn(d, _, v);
      }
      const w = o.fn({
        ...n,
        [b]: p,
        [h]: _
      });
      return {
        ...w,
        data: {
          x: w.x - t,
          y: w.y - a,
          enabled: {
            [b]: l,
            [h]: s
          }
        }
      };
    }
  };
};
function rn() {
  return typeof window < "u";
}
function sa(e) {
  return Vn(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function vt(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Rt(e) {
  var n;
  return (n = (Vn(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Vn(e) {
  return rn() ? e instanceof Node || e instanceof vt(e).Node : !1;
}
function Mt(e) {
  return rn() ? e instanceof Element || e instanceof vt(e).Element : !1;
}
function Ct(e) {
  return rn() ? e instanceof HTMLElement || e instanceof vt(e).HTMLElement : !1;
}
function or(e) {
  return !rn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof vt(e).ShadowRoot;
}
const fs = /* @__PURE__ */ new Set(["inline", "contents"]);
function Wa(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: a,
    display: r
  } = Tt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + a + t) && !fs.has(r);
}
const ms = /* @__PURE__ */ new Set(["table", "td", "th"]);
function hs(e) {
  return ms.has(sa(e));
}
const vs = [":popover-open", ":modal"];
function ln(e) {
  return vs.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const ps = ["transform", "translate", "scale", "rotate", "perspective"], ys = ["transform", "translate", "scale", "rotate", "perspective", "filter"], gs = ["paint", "layout", "strict", "content"];
function qn(e) {
  const n = jn(), t = Mt(e) ? Tt(e) : e;
  return ps.some((a) => t[a] ? t[a] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || ys.some((a) => (t.willChange || "").includes(a)) || gs.some((a) => (t.contain || "").includes(a));
}
function ws(e) {
  let n = jt(e);
  for (; Ct(n) && !ga(n); ) {
    if (qn(n))
      return n;
    if (ln(n))
      return null;
    n = jt(n);
  }
  return null;
}
function jn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const bs = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ga(e) {
  return bs.has(sa(e));
}
function Tt(e) {
  return vt(e).getComputedStyle(e);
}
function sn(e) {
  return Mt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function jt(e) {
  if (sa(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    or(e) && e.host || // Fallback.
    Rt(e)
  );
  return or(n) ? n.host : n;
}
function Ir(e) {
  const n = jt(e);
  return ga(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(n) && Wa(n) ? n : Ir(n);
}
function Ia(e, n, t) {
  var a;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const r = Ir(e), l = r === ((a = e.ownerDocument) == null ? void 0 : a.body), s = vt(r);
  if (l) {
    const o = Rn(s);
    return n.concat(s, s.visualViewport || [], Wa(r) ? r : [], o && t ? Ia(o) : []);
  }
  return n.concat(r, Ia(r, [], t));
}
function Rn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Br(e) {
  const n = Tt(e);
  let t = parseFloat(n.width) || 0, a = parseFloat(n.height) || 0;
  const r = Ct(e), l = r ? e.offsetWidth : t, s = r ? e.offsetHeight : a, o = Ja(t) !== l || Ja(a) !== s;
  return o && (t = l, a = s), {
    width: t,
    height: a,
    $: o
  };
}
function zn(e) {
  return Mt(e) ? e : e.contextElement;
}
function va(e) {
  const n = zn(e);
  if (!Ct(n))
    return $t(1);
  const t = n.getBoundingClientRect(), {
    width: a,
    height: r,
    $: l
  } = Br(n);
  let s = (l ? Ja(t.width) : t.width) / a, o = (l ? Ja(t.height) : t.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!o || !Number.isFinite(o)) && (o = 1), {
    x: s,
    y: o
  };
}
const ks = /* @__PURE__ */ $t(0);
function Fr(e) {
  const n = vt(e);
  return !jn() || !n.visualViewport ? ks : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function _s(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== vt(e) ? !1 : n;
}
function ra(e, n, t, a) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const r = e.getBoundingClientRect(), l = zn(e);
  let s = $t(1);
  n && (a ? Mt(a) && (s = va(a)) : s = va(e));
  const o = _s(l, t, a) ? Fr(l) : $t(0);
  let i = (r.left + o.x) / s.x, m = (r.top + o.y) / s.y, f = r.width / s.x, h = r.height / s.y;
  if (l) {
    const b = vt(l), p = a && Mt(a) ? vt(a) : a;
    let _ = b, w = Rn(_);
    for (; w && a && p !== _; ) {
      const g = va(w), u = w.getBoundingClientRect(), d = Tt(w), v = u.left + (w.clientLeft + parseFloat(d.paddingLeft)) * g.x, S = u.top + (w.clientTop + parseFloat(d.paddingTop)) * g.y;
      i *= g.x, m *= g.y, f *= g.x, h *= g.y, i += v, m += S, _ = vt(w), w = Rn(_);
    }
  }
  return tn({
    width: f,
    height: h,
    x: i,
    y: m
  });
}
function on(e, n) {
  const t = sn(e).scrollLeft;
  return n ? n.left + t : ra(Rt(e)).left + t;
}
function Wr(e, n) {
  const t = e.getBoundingClientRect(), a = t.left + n.scrollLeft - on(e, t), r = t.top + n.scrollTop;
  return {
    x: a,
    y: r
  };
}
function Ds(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: a,
    strategy: r
  } = e;
  const l = r === "fixed", s = Rt(a), o = n ? ln(n.floating) : !1;
  if (a === s || o && l)
    return t;
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  }, m = $t(1);
  const f = $t(0), h = Ct(a);
  if ((h || !h && !l) && ((sa(a) !== "body" || Wa(s)) && (i = sn(a)), Ct(a))) {
    const p = ra(a);
    m = va(a), f.x = p.x + a.clientLeft, f.y = p.y + a.clientTop;
  }
  const b = s && !h && !l ? Wr(s, i) : $t(0);
  return {
    width: t.width * m.x,
    height: t.height * m.y,
    x: t.x * m.x - i.scrollLeft * m.x + f.x + b.x,
    y: t.y * m.y - i.scrollTop * m.y + f.y + b.y
  };
}
function xs(e) {
  return Array.from(e.getClientRects());
}
function Ms(e) {
  const n = Rt(e), t = sn(e), a = e.ownerDocument.body, r = ea(n.scrollWidth, n.clientWidth, a.scrollWidth, a.clientWidth), l = ea(n.scrollHeight, n.clientHeight, a.scrollHeight, a.clientHeight);
  let s = -t.scrollLeft + on(e);
  const o = -t.scrollTop;
  return Tt(a).direction === "rtl" && (s += ea(n.clientWidth, a.clientWidth) - r), {
    width: r,
    height: l,
    x: s,
    y: o
  };
}
const ir = 25;
function Ts(e, n) {
  const t = vt(e), a = Rt(e), r = t.visualViewport;
  let l = a.clientWidth, s = a.clientHeight, o = 0, i = 0;
  if (r) {
    l = r.width, s = r.height;
    const f = jn();
    (!f || f && n === "fixed") && (o = r.offsetLeft, i = r.offsetTop);
  }
  const m = on(a);
  if (m <= 0) {
    const f = a.ownerDocument, h = f.body, b = getComputedStyle(h), p = f.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0, _ = Math.abs(a.clientWidth - h.clientWidth - p);
    _ <= ir && (l -= _);
  } else m <= ir && (l += m);
  return {
    width: l,
    height: s,
    x: o,
    y: i
  };
}
const Ps = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Os(e, n) {
  const t = ra(e, !0, n === "fixed"), a = t.top + e.clientTop, r = t.left + e.clientLeft, l = Ct(e) ? va(e) : $t(1), s = e.clientWidth * l.x, o = e.clientHeight * l.y, i = r * l.x, m = a * l.y;
  return {
    width: s,
    height: o,
    x: i,
    y: m
  };
}
function ur(e, n, t) {
  let a;
  if (n === "viewport")
    a = Ts(e, t);
  else if (n === "document")
    a = Ms(Rt(e));
  else if (Mt(n))
    a = Os(n, t);
  else {
    const r = Fr(e);
    a = {
      x: n.x - r.x,
      y: n.y - r.y,
      width: n.width,
      height: n.height
    };
  }
  return tn(a);
}
function Nr(e, n) {
  const t = jt(e);
  return t === n || !Mt(t) || ga(t) ? !1 : Tt(t).position === "fixed" || Nr(t, n);
}
function As(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let a = Ia(e, [], !1).filter((o) => Mt(o) && sa(o) !== "body"), r = null;
  const l = Tt(e).position === "fixed";
  let s = l ? jt(e) : e;
  for (; Mt(s) && !ga(s); ) {
    const o = Tt(s), i = qn(s);
    !i && o.position === "fixed" && (r = null), (l ? !i && !r : !i && o.position === "static" && !!r && Ps.has(r.position) || Wa(s) && !i && Nr(e, s)) ? a = a.filter((f) => f !== s) : r = o, s = jt(s);
  }
  return n.set(e, a), a;
}
function Ss(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: a,
    strategy: r
  } = e;
  const s = [...t === "clippingAncestors" ? ln(n) ? [] : As(n, this._c) : [].concat(t), a], o = s[0], i = s.reduce((m, f) => {
    const h = ur(n, f, r);
    return m.top = ea(h.top, m.top), m.right = ya(h.right, m.right), m.bottom = ya(h.bottom, m.bottom), m.left = ea(h.left, m.left), m;
  }, ur(n, o, r));
  return {
    width: i.right - i.left,
    height: i.bottom - i.top,
    x: i.left,
    y: i.top
  };
}
function $s(e) {
  const {
    width: n,
    height: t
  } = Br(e);
  return {
    width: n,
    height: t
  };
}
function Cs(e, n, t) {
  const a = Ct(n), r = Rt(n), l = t === "fixed", s = ra(e, !0, l, n);
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const i = $t(0);
  function m() {
    i.x = on(r);
  }
  if (a || !a && !l)
    if ((sa(n) !== "body" || Wa(r)) && (o = sn(n)), a) {
      const p = ra(n, !0, l, n);
      i.x = p.x + n.clientLeft, i.y = p.y + n.clientTop;
    } else r && m();
  l && !a && r && m();
  const f = r && !a && !l ? Wr(r, o) : $t(0), h = s.left + o.scrollLeft - i.x - f.x, b = s.top + o.scrollTop - i.y - f.y;
  return {
    x: h,
    y: b,
    width: s.width,
    height: s.height
  };
}
function xn(e) {
  return Tt(e).position === "static";
}
function cr(e, n) {
  if (!Ct(e) || Tt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Rt(e) === t && (t = t.ownerDocument.body), t;
}
function Lr(e, n) {
  const t = vt(e);
  if (ln(e))
    return t;
  if (!Ct(e)) {
    let r = jt(e);
    for (; r && !ga(r); ) {
      if (Mt(r) && !xn(r))
        return r;
      r = jt(r);
    }
    return t;
  }
  let a = cr(e, n);
  for (; a && hs(a) && xn(a); )
    a = cr(a, n);
  return a && ga(a) && xn(a) && !qn(a) ? t : a || ws(e) || t;
}
const Ys = async function(e) {
  const n = this.getOffsetParent || Lr, t = this.getDimensions, a = await t(e.floating);
  return {
    reference: Cs(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function Rs(e) {
  return Tt(e).direction === "rtl";
}
const Es = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ds,
  getDocumentElement: Rt,
  getClippingRect: Ss,
  getOffsetParent: Lr,
  getElementRects: Ys,
  getClientRects: xs,
  getDimensions: $s,
  getScale: va,
  isElement: Mt,
  isRTL: Rs
};
function Hr(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function Is(e, n) {
  let t = null, a;
  const r = Rt(e);
  function l() {
    var o;
    clearTimeout(a), (o = t) == null || o.disconnect(), t = null;
  }
  function s(o, i) {
    o === void 0 && (o = !1), i === void 0 && (i = 1), l();
    const m = e.getBoundingClientRect(), {
      left: f,
      top: h,
      width: b,
      height: p
    } = m;
    if (o || n(), !b || !p)
      return;
    const _ = Ua(h), w = Ua(r.clientWidth - (f + b)), g = Ua(r.clientHeight - (h + p)), u = Ua(f), v = {
      rootMargin: -_ + "px " + -w + "px " + -g + "px " + -u + "px",
      threshold: ea(0, ya(1, i)) || 1
    };
    let S = !0;
    function N(J) {
      const T = J[0].intersectionRatio;
      if (T !== i) {
        if (!S)
          return s();
        T ? s(!1, T) : a = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      T === 1 && !Hr(m, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      t = new IntersectionObserver(N, {
        ...v,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(N, v);
    }
    t.observe(e);
  }
  return s(!0), l;
}
function Bs(e, n, t, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: l = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: o = typeof IntersectionObserver == "function",
    animationFrame: i = !1
  } = a, m = zn(e), f = r || l ? [...m ? Ia(m) : [], ...Ia(n)] : [];
  f.forEach((u) => {
    r && u.addEventListener("scroll", t, {
      passive: !0
    }), l && u.addEventListener("resize", t);
  });
  const h = m && o ? Is(m, t) : null;
  let b = -1, p = null;
  s && (p = new ResizeObserver((u) => {
    let [d] = u;
    d && d.target === m && p && (p.unobserve(n), cancelAnimationFrame(b), b = requestAnimationFrame(() => {
      var v;
      (v = p) == null || v.observe(n);
    })), t();
  }), m && !i && p.observe(m), p.observe(n));
  let _, w = i ? ra(e) : null;
  i && g();
  function g() {
    const u = ra(e);
    w && !Hr(w, u) && t(), w = u, _ = requestAnimationFrame(g);
  }
  return t(), () => {
    var u;
    f.forEach((d) => {
      r && d.removeEventListener("scroll", t), l && d.removeEventListener("resize", t);
    }), h == null || h(), (u = p) == null || u.disconnect(), p = null, i && cancelAnimationFrame(_);
  };
}
const Fs = cs, Ws = ds, Ns = os, Ls = ss, Hs = (e, n, t) => {
  const a = /* @__PURE__ */ new Map(), r = {
    platform: Es,
    ...t
  }, l = {
    ...r.platform,
    _c: a
  };
  return ls(e, n, {
    ...r,
    platform: l
  });
};
function Vs(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function En(e) {
  if (Vs(e)) {
    const n = e.$el;
    return Vn(n) && sa(n) === "#comment" ? null : n;
  }
  return e;
}
function ca(e) {
  return typeof e == "function" ? e() : c(e);
}
function dr(e) {
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const t = En(ca(e.element));
      return t == null ? {} : Ls({
        element: t,
        padding: e.padding
      }).fn(n);
    }
  };
}
function Vr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function fr(e, n) {
  const t = Vr(e);
  return Math.round(n * t) / t;
}
function qs(e, n, t) {
  t === void 0 && (t = {});
  const a = t.whileElementsMounted, r = X(() => {
    var T;
    return (T = ca(t.open)) != null ? T : !0;
  }), l = X(() => ca(t.middleware)), s = X(() => {
    var T;
    return (T = ca(t.placement)) != null ? T : "bottom";
  }), o = X(() => {
    var T;
    return (T = ca(t.strategy)) != null ? T : "absolute";
  }), i = X(() => {
    var T;
    return (T = ca(t.transform)) != null ? T : !0;
  }), m = X(() => En(e.value)), f = X(() => En(n.value)), h = he(0), b = he(0), p = he(o.value), _ = he(s.value), w = Sr({}), g = he(!1), u = X(() => {
    const T = {
      position: p.value,
      left: "0",
      top: "0"
    };
    if (!f.value)
      return T;
    const D = fr(f.value, h.value), F = fr(f.value, b.value);
    return i.value ? {
      ...T,
      transform: "translate(" + D + "px, " + F + "px)",
      ...Vr(f.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: p.value,
      left: D + "px",
      top: F + "px"
    };
  });
  let d;
  function v() {
    if (m.value == null || f.value == null)
      return;
    const T = r.value;
    Hs(m.value, f.value, {
      middleware: l.value,
      placement: s.value,
      strategy: o.value
    }).then((D) => {
      h.value = D.x, b.value = D.y, p.value = D.strategy, _.value = D.placement, w.value = D.middlewareData, g.value = T !== !1;
    });
  }
  function S() {
    typeof d == "function" && (d(), d = void 0);
  }
  function N() {
    if (S(), a === void 0) {
      v();
      return;
    }
    if (m.value != null && f.value != null) {
      d = a(m.value, f.value, v);
      return;
    }
  }
  function J() {
    r.value || (g.value = !1);
  }
  return ct([l, s, o, r], v, {
    flush: "sync"
  }), ct([m, f], N, {
    flush: "sync"
  }), ct(r, J, {
    flush: "sync"
  }), El() && Il(S), {
    x: ia(h),
    y: ia(b),
    strategy: ia(p),
    placement: ia(_),
    middlewareData: ia(w),
    isPositioned: ia(g),
    floatingStyles: u,
    update: v
  };
}
const qr = 6048e5, js = 864e5, zs = 6e4, Qs = 36e5, Us = 1e3, mr = Symbol.for("constructDateFrom");
function Ie(e, n) {
  return typeof e == "function" ? e(n) : e && typeof e == "object" && mr in e ? e[mr](n) : e instanceof Date ? new e.constructor(n) : new Date(n);
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
function jr(e, n, t) {
  const {
    years: a = 0,
    months: r = 0,
    weeks: l = 0,
    days: s = 0,
    hours: o = 0,
    minutes: i = 0,
    seconds: m = 0
  } = n, f = ke(e, t == null ? void 0 : t.in), h = r || a ? xt(f, r + a * 12) : f, b = s || l ? yt(h, s + l * 7) : h, p = i + o * 60, w = (m + p * 60) * 1e3;
  return Ie(e, +b + w);
}
let Gs = {};
function oa() {
  return Gs;
}
function wt(e, n) {
  var o, i, m, f;
  const t = oa(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((i = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : i.weekStartsOn) ?? t.weekStartsOn ?? ((f = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : f.weekStartsOn) ?? 0, r = ke(e, n == null ? void 0 : n.in), l = r.getDay(), s = (l < a ? 7 : 0) + l - a;
  return r.setDate(r.getDate() - s), r.setHours(0, 0, 0, 0), r;
}
function wa(e, n) {
  return wt(e, { ...n, weekStartsOn: 1 });
}
function zr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear(), r = Ie(t, 0);
  r.setFullYear(a + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = wa(r), s = Ie(t, 0);
  s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0);
  const o = wa(s);
  return t.getTime() >= l.getTime() ? a + 1 : t.getTime() >= o.getTime() ? a : a - 1;
}
function an(e) {
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
function Na(e, ...n) {
  const t = Ie.bind(
    null,
    n.find((a) => typeof a == "object")
  );
  return n.map(t);
}
function hr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return t.setHours(0, 0, 0, 0), t;
}
function Qr(e, n, t) {
  const [a, r] = Na(
    t == null ? void 0 : t.in,
    e,
    n
  ), l = hr(a), s = hr(r), o = +l - an(l), i = +s - an(s);
  return Math.round((o - i) / js);
}
function Ks(e, n) {
  const t = zr(e, n), a = Ie(e, 0);
  return a.setFullYear(t, 0, 4), a.setHours(0, 0, 0, 0), wa(a);
}
function Xs(e, n, t) {
  return xt(e, n * 3, t);
}
function Qn(e, n, t) {
  return xt(e, n * 12, t);
}
function vr(e, n) {
  const t = +ke(e) - +ke(n);
  return t < 0 ? -1 : t > 0 ? 1 : t;
}
function Ur(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ya(e) {
  return !(!Ur(e) && typeof e != "number" || isNaN(+ke(e)));
}
function pr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Zs(e, n, t) {
  const [a, r] = Na(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return a.getFullYear() - r.getFullYear();
}
function Js(e) {
  return (n) => {
    const a = (e ? Math[e] : Math.trunc)(n);
    return a === 0 ? 0 : a;
  };
}
function eo(e, n, t) {
  const [a, r] = Na(
    t == null ? void 0 : t.in,
    e,
    n
  ), l = vr(a, r), s = Math.abs(Zs(a, r));
  a.setFullYear(1584), r.setFullYear(1584);
  const o = vr(a, r) === -l, i = l * (s - +o);
  return i === 0 ? 0 : i;
}
function Gr(e, n) {
  const [t, a] = Na(e, n.start, n.end);
  return { start: t, end: a };
}
function Un(e, n) {
  const { start: t, end: a } = Gr(n == null ? void 0 : n.in, e);
  let r = +t > +a;
  const l = r ? +t : +a, s = r ? a : t;
  s.setHours(0, 0, 0, 0);
  let o = 1;
  const i = [];
  for (; +s <= l; )
    i.push(Ie(t, s)), s.setDate(s.getDate() + o), s.setHours(0, 0, 0, 0);
  return r ? i.reverse() : i;
}
function Zt(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getMonth(), r = a - a % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function to(e, n) {
  const { start: t, end: a } = Gr(n == null ? void 0 : n.in, e);
  let r = +t > +a;
  const l = r ? +Zt(t) : +Zt(a);
  let s = Zt(r ? a : t), o = 1;
  const i = [];
  for (; +s <= l; )
    i.push(Ie(t, s)), s = Xs(s, o);
  return r ? i.reverse() : i;
}
function ao(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Kr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear();
  return t.setFullYear(a + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function pa(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return t.setFullYear(t.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Gn(e, n) {
  var o, i, m, f;
  const t = oa(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((i = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : i.weekStartsOn) ?? t.weekStartsOn ?? ((f = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : f.weekStartsOn) ?? 0, r = ke(e, n == null ? void 0 : n.in), l = r.getDay(), s = (l < a ? -7 : 0) + 6 - (l - a);
  return r.setDate(r.getDate() + s), r.setHours(23, 59, 59, 999), r;
}
function yr(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getMonth(), r = a - a % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const no = {
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
}, ro = (e, n, t) => {
  let a;
  const r = no[e];
  return typeof r == "string" ? a = r : n === 1 ? a = r.one : a = r.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + a : a + " ago" : a;
};
function Mn(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const lo = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, so = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, oo = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, io = {
  date: Mn({
    formats: lo,
    defaultWidth: "full"
  }),
  time: Mn({
    formats: so,
    defaultWidth: "full"
  }),
  dateTime: Mn({
    formats: oo,
    defaultWidth: "full"
  })
}, uo = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, co = (e, n, t, a) => uo[e];
function Oa(e) {
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
const fo = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, mo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ho = {
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
}, vo = {
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
}, po = {
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
}, yo = {
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
}, go = (e, n) => {
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
}, wo = {
  ordinalNumber: go,
  era: Oa({
    values: fo,
    defaultWidth: "wide"
  }),
  quarter: Oa({
    values: mo,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Oa({
    values: ho,
    defaultWidth: "wide"
  }),
  day: Oa({
    values: vo,
    defaultWidth: "wide"
  }),
  dayPeriod: Oa({
    values: po,
    defaultWidth: "wide",
    formattingValues: yo,
    defaultFormattingWidth: "wide"
  })
};
function Aa(e) {
  return (n, t = {}) => {
    const a = t.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], l = n.match(r);
    if (!l)
      return null;
    const s = l[0], o = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(o) ? ko(o, (h) => h.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      bo(o, (h) => h.test(s))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(i) : i, m = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(m)
    ) : m;
    const f = n.slice(s.length);
    return { value: m, rest: f };
  };
}
function bo(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function ko(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function _o(e) {
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
const Do = /^(\d+)(th|st|nd|rd)?/i, xo = /\d+/i, Mo = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, To = {
  any: [/^b/i, /^(a|c)/i]
}, Po = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Oo = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ao = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, So = {
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
}, $o = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Co = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Yo = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ro = {
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
}, Eo = {
  ordinalNumber: _o({
    matchPattern: Do,
    parsePattern: xo,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Aa({
    matchPatterns: Mo,
    defaultMatchWidth: "wide",
    parsePatterns: To,
    defaultParseWidth: "any"
  }),
  quarter: Aa({
    matchPatterns: Po,
    defaultMatchWidth: "wide",
    parsePatterns: Oo,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Aa({
    matchPatterns: Ao,
    defaultMatchWidth: "wide",
    parsePatterns: So,
    defaultParseWidth: "any"
  }),
  day: Aa({
    matchPatterns: $o,
    defaultMatchWidth: "wide",
    parsePatterns: Co,
    defaultParseWidth: "any"
  }),
  dayPeriod: Aa({
    matchPatterns: Yo,
    defaultMatchWidth: "any",
    parsePatterns: Ro,
    defaultParseWidth: "any"
  })
}, Xr = {
  code: "en-US",
  formatDistance: ro,
  formatLong: io,
  formatRelative: co,
  localize: wo,
  match: Eo,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Io(e, n) {
  const t = ke(e, n == null ? void 0 : n.in);
  return Qr(t, pa(t)) + 1;
}
function Kn(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = +wa(t) - +Ks(t);
  return Math.round(a / qr) + 1;
}
function Xn(e, n) {
  var f, h, b, p;
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear(), r = oa(), l = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((h = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = Ie((n == null ? void 0 : n.in) || e, 0);
  s.setFullYear(a + 1, 0, l), s.setHours(0, 0, 0, 0);
  const o = wt(s, n), i = Ie((n == null ? void 0 : n.in) || e, 0);
  i.setFullYear(a, 0, l), i.setHours(0, 0, 0, 0);
  const m = wt(i, n);
  return +t >= +o ? a + 1 : +t >= +m ? a : a - 1;
}
function Bo(e, n) {
  var o, i, m, f;
  const t = oa(), a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((i = (o = n == null ? void 0 : n.locale) == null ? void 0 : o.options) == null ? void 0 : i.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((f = (m = t.locale) == null ? void 0 : m.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, r = Xn(e, n), l = Ie((n == null ? void 0 : n.in) || e, 0);
  return l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0), wt(l, n);
}
function Zn(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = +wt(t, n) - +Bo(t, n);
  return Math.round(a / qr) + 1;
}
function Ee(e, n) {
  const t = e < 0 ? "-" : "", a = Math.abs(e).toString().padStart(n, "0");
  return t + a;
}
const Ht = {
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
}, ua = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, gr = {
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
    return Ht.y(e, n);
  },
  // Local week-numbering year
  Y: function(e, n, t, a) {
    const r = Xn(e, a), l = r > 0 ? r : 1 - r;
    if (n === "YY") {
      const s = l % 100;
      return Ee(s, 2);
    }
    return n === "Yo" ? t.ordinalNumber(l, { unit: "year" }) : Ee(l, n.length);
  },
  // ISO week-numbering year
  R: function(e, n) {
    const t = zr(e);
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
        return Ht.M(e, n);
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
    const r = Zn(e, a);
    return n === "wo" ? t.ordinalNumber(r, { unit: "week" }) : Ee(r, n.length);
  },
  // ISO week of year
  I: function(e, n, t) {
    const a = Kn(e);
    return n === "Io" ? t.ordinalNumber(a, { unit: "week" }) : Ee(a, n.length);
  },
  // Day of the month
  d: function(e, n, t) {
    return n === "do" ? t.ordinalNumber(e.getDate(), { unit: "date" }) : Ht.d(e, n);
  },
  // Day of year
  D: function(e, n, t) {
    const a = Io(e);
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
    switch (a === 12 ? r = ua.noon : a === 0 ? r = ua.midnight : r = a / 12 >= 1 ? "pm" : "am", n) {
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
    switch (a >= 17 ? r = ua.evening : a >= 12 ? r = ua.afternoon : a >= 4 ? r = ua.morning : r = ua.night, n) {
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
    return Ht.h(e, n);
  },
  // Hour [0-23]
  H: function(e, n, t) {
    return n === "Ho" ? t.ordinalNumber(e.getHours(), { unit: "hour" }) : Ht.H(e, n);
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
    return n === "mo" ? t.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ht.m(e, n);
  },
  // Second
  s: function(e, n, t) {
    return n === "so" ? t.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ht.s(e, n);
  },
  // Fraction of second
  S: function(e, n) {
    return Ht.S(e, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, n, t) {
    const a = e.getTimezoneOffset();
    if (a === 0)
      return "Z";
    switch (n) {
      case "X":
        return br(a);
      case "XXXX":
      case "XX":
        return Xt(a);
      case "XXXXX":
      case "XXX":
      default:
        return Xt(a, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, n, t) {
    const a = e.getTimezoneOffset();
    switch (n) {
      case "x":
        return br(a);
      case "xxxx":
      case "xx":
        return Xt(a);
      case "xxxxx":
      case "xxx":
      default:
        return Xt(a, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, n, t) {
    const a = e.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wr(a, ":");
      case "OOOO":
      default:
        return "GMT" + Xt(a, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, n, t) {
    const a = e.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wr(a, ":");
      case "zzzz":
      default:
        return "GMT" + Xt(a, ":");
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
function wr(e, n = "") {
  const t = e > 0 ? "-" : "+", a = Math.abs(e), r = Math.trunc(a / 60), l = a % 60;
  return l === 0 ? t + String(r) : t + String(r) + n + Ee(l, 2);
}
function br(e, n) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ee(Math.abs(e) / 60, 2) : Xt(e, n);
}
function Xt(e, n = "") {
  const t = e > 0 ? "-" : "+", a = Math.abs(e), r = Ee(Math.trunc(a / 60), 2), l = Ee(a % 60, 2);
  return t + r + n + l;
}
const kr = (e, n) => {
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
}, Zr = (e, n) => {
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
}, Fo = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], a = t[1], r = t[2];
  if (!r)
    return kr(e, n);
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
  return l.replace("{{date}}", kr(a, n)).replace("{{time}}", Zr(r, n));
}, In = {
  p: Zr,
  P: Fo
}, Wo = /^D+$/, No = /^Y+$/, Lo = ["D", "DD", "YY", "YYYY"];
function Jr(e) {
  return Wo.test(e);
}
function el(e) {
  return No.test(e);
}
function Bn(e, n, t) {
  const a = Ho(e, n, t);
  if (console.warn(a), Lo.includes(e)) throw new RangeError(a);
}
function Ho(e, n, t) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${a} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Vo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, qo = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, jo = /^'([^]*?)'?$/, zo = /''/g, Qo = /[a-zA-Z]/;
function pt(e, n, t) {
  var f, h, b, p, _, w, g, u;
  const a = oa(), r = (t == null ? void 0 : t.locale) ?? a.locale ?? Xr, l = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((h = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : h.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((p = (b = a.locale) == null ? void 0 : b.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = (t == null ? void 0 : t.weekStartsOn) ?? ((w = (_ = t == null ? void 0 : t.locale) == null ? void 0 : _.options) == null ? void 0 : w.weekStartsOn) ?? a.weekStartsOn ?? ((u = (g = a.locale) == null ? void 0 : g.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ke(e, t == null ? void 0 : t.in);
  if (!Ya(o))
    throw new RangeError("Invalid time value");
  let i = n.match(qo).map((d) => {
    const v = d[0];
    if (v === "p" || v === "P") {
      const S = In[v];
      return S(d, r.formatLong);
    }
    return d;
  }).join("").match(Vo).map((d) => {
    if (d === "''")
      return { isToken: !1, value: "'" };
    const v = d[0];
    if (v === "'")
      return { isToken: !1, value: Uo(d) };
    if (gr[v])
      return { isToken: !0, value: d };
    if (v.match(Qo))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: d };
  });
  r.localize.preprocessor && (i = r.localize.preprocessor(o, i));
  const m = {
    firstWeekContainsDate: l,
    weekStartsOn: s,
    locale: r
  };
  return i.map((d) => {
    if (!d.isToken) return d.value;
    const v = d.value;
    (!(t != null && t.useAdditionalWeekYearTokens) && el(v) || !(t != null && t.useAdditionalDayOfYearTokens) && Jr(v)) && Bn(v, n, String(e));
    const S = gr[v[0]];
    return S(o, v, r.localize, m);
  }).join("");
}
function Uo(e) {
  const n = e.match(jo);
  return n ? n[1].replace(zo, "'") : e;
}
function Go(e, n) {
  return ke(e, n == null ? void 0 : n.in).getDay();
}
function Ko(e, n) {
  const t = ke(e, n == null ? void 0 : n.in), a = t.getFullYear(), r = t.getMonth(), l = Ie(t, 0);
  return l.setFullYear(a, r + 1, 0), l.setHours(0, 0, 0, 0), l.getDate();
}
function Xo() {
  return Object.assign({}, oa());
}
function Yt(e, n) {
  return ke(e, n == null ? void 0 : n.in).getHours();
}
function Zo(e, n) {
  const t = ke(e, n == null ? void 0 : n.in).getDay();
  return t === 0 ? 7 : t;
}
function Nt(e, n) {
  return ke(e, n == null ? void 0 : n.in).getMinutes();
}
function Ce(e, n) {
  return ke(e, n == null ? void 0 : n.in).getMonth();
}
function zt(e) {
  return ke(e).getSeconds();
}
function De(e, n) {
  return ke(e, n == null ? void 0 : n.in).getFullYear();
}
function la(e, n) {
  return +ke(e) > +ke(n);
}
function ba(e, n) {
  return +ke(e) < +ke(n);
}
function da(e, n) {
  return +ke(e) == +ke(n);
}
function Jo(e, n) {
  const t = ei(n) ? new n(0) : Ie(n, 0);
  return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), t.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), t;
}
function ei(e) {
  var n;
  return typeof e == "function" && ((n = e.prototype) == null ? void 0 : n.constructor) === e;
}
const ti = 10;
class tl {
  constructor() {
    me(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class ai extends tl {
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
class ni extends tl {
  constructor(t, a) {
    super();
    me(this, "priority", ti);
    me(this, "subPriority", -1);
    this.context = t || ((r) => Ie(a, r));
  }
  set(t, a) {
    return a.timestampIsSet ? t : Ie(t, Jo(t, this.context));
  }
}
class Re {
  run(n, t, a, r) {
    const l = this.parse(n, t, a, r);
    return l ? {
      setter: new ai(
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
class ri extends Re {
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
const Ue = {
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
    value: a * (r * Qs + l * zs + s * Us),
    rest: n.slice(t[0].length)
  };
}
function al(e) {
  return qe(Ue.anyDigitsSigned, e);
}
function ze(e, n) {
  switch (e) {
    case 1:
      return qe(Ue.singleDigit, n);
    case 2:
      return qe(Ue.twoDigits, n);
    case 3:
      return qe(Ue.threeDigits, n);
    case 4:
      return qe(Ue.fourDigits, n);
    default:
      return qe(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function nn(e, n) {
  switch (e) {
    case 1:
      return qe(Ue.singleDigitSigned, n);
    case 2:
      return qe(Ue.twoDigitsSigned, n);
    case 3:
      return qe(Ue.threeDigitsSigned, n);
    case 4:
      return qe(Ue.fourDigitsSigned, n);
    default:
      return qe(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function Jn(e) {
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
function nl(e, n) {
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
function rl(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class li extends Re {
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
        return Ge(ze(4, t), l);
      case "yo":
        return Ge(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          l
        );
      default:
        return Ge(ze(a.length, t), l);
    }
  }
  validate(t, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(t, a, r) {
    const l = t.getFullYear();
    if (r.isTwoDigitYear) {
      const o = nl(
        r.year,
        l
      );
      return t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const s = !("era" in a) || a.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(s, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class si extends Re {
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
        return Ge(ze(4, t), l);
      case "Yo":
        return Ge(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          l
        );
      default:
        return Ge(ze(a.length, t), l);
    }
  }
  validate(t, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(t, a, r, l) {
    const s = Xn(t, l);
    if (r.isTwoDigitYear) {
      const i = nl(
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
class oi extends Re {
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
    return nn(a === "R" ? 4 : a.length, t);
  }
  set(t, a, r) {
    const l = Ie(t, 0);
    return l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0), wa(l);
  }
}
class ii extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 130);
    me(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, a) {
    return nn(a === "u" ? 4 : a.length, t);
  }
  set(t, a, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ui extends Re {
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
        return ze(a.length, t);
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
class ci extends Re {
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
        return ze(a.length, t);
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
class di extends Re {
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
          qe(Ue.month, t),
          l
        );
      case "MM":
        return Ge(ze(2, t), l);
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
class fi extends Re {
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
          qe(Ue.month, t),
          l
        );
      case "LL":
        return Ge(ze(2, t), l);
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
function mi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = Zn(a, t) - n;
  return a.setDate(a.getDate() - r * 7), ke(a, t == null ? void 0 : t.in);
}
class hi extends Re {
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
        return qe(Ue.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 53;
  }
  set(t, a, r, l) {
    return wt(mi(t, r, l), l);
  }
}
function vi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = Kn(a, t) - n;
  return a.setDate(a.getDate() - r * 7), a;
}
class pi extends Re {
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
        return qe(Ue.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 53;
  }
  set(t, a, r) {
    return wa(vi(t, r));
  }
}
const yi = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], gi = [
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
class wi extends Re {
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
        return qe(Ue.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    const r = t.getFullYear(), l = rl(r), s = t.getMonth();
    return l ? a >= 1 && a <= gi[s] : a >= 1 && a <= yi[s];
  }
  set(t, a, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
}
class bi extends Re {
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
        return qe(Ue.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    const r = t.getFullYear();
    return rl(r) ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
  }
  set(t, a, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
}
function er(e, n, t) {
  var h, b, p, _;
  const a = oa(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((b = (h = t == null ? void 0 : t.locale) == null ? void 0 : h.options) == null ? void 0 : b.weekStartsOn) ?? a.weekStartsOn ?? ((_ = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : _.weekStartsOn) ?? 0, l = ke(e, t == null ? void 0 : t.in), s = l.getDay(), i = (n % 7 + 7) % 7, m = 7 - r, f = n < 0 || n > 6 ? n - (s + m) % 7 : (i + m) % 7 - (s + m) % 7;
  return yt(l, f, t);
}
class ki extends Re {
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
    return t = er(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
class _i extends Re {
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
        return Ge(ze(a.length, t), s);
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
    return t = er(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
class Di extends Re {
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
        return Ge(ze(a.length, t), s);
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
    return t = er(t, r, l), t.setHours(0, 0, 0, 0), t;
  }
}
function xi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = Zo(a, t), l = n - r;
  return yt(a, l, t);
}
class Mi extends Re {
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
        return ze(a.length, t);
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
    return t = xi(t, r), t.setHours(0, 0, 0, 0), t;
  }
}
class Ti extends Re {
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
    return t.setHours(Jn(r), 0, 0, 0), t;
  }
}
class Pi extends Re {
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
    return t.setHours(Jn(r), 0, 0, 0), t;
  }
}
class Oi extends Re {
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
    return t.setHours(Jn(r), 0, 0, 0), t;
  }
}
class Ai extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "h":
        return qe(Ue.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ze(a.length, t);
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
class Si extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "H":
        return qe(Ue.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 23;
  }
  set(t, a, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
}
class $i extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "K":
        return qe(Ue.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 11;
  }
  set(t, a, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Ci extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 70);
    me(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "k":
        return qe(Ue.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return ze(a.length, t);
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
class Yi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 60);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "m":
        return qe(Ue.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 59;
  }
  set(t, a, r) {
    return t.setMinutes(r, 0, 0), t;
  }
}
class Ri extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 50);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "s":
        return qe(Ue.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return ze(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 59;
  }
  set(t, a, r) {
    return t.setSeconds(r, 0), t;
  }
}
class Ei extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 30);
    me(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a) {
    const r = (l) => Math.trunc(l * Math.pow(10, -a.length + 3));
    return Ge(ze(a.length, t), r);
  }
  set(t, a, r) {
    return t.setMilliseconds(r), t;
  }
}
class Ii extends Re {
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
      t.getTime() - an(t) - r
    );
  }
}
class Bi extends Re {
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
      t.getTime() - an(t) - r
    );
  }
}
class Fi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 40);
    me(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return al(t);
  }
  set(t, a, r) {
    return [Ie(t, r * 1e3), { timestampIsSet: !0 }];
  }
}
class Wi extends Re {
  constructor() {
    super(...arguments);
    me(this, "priority", 20);
    me(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return al(t);
  }
  set(t, a, r) {
    return [Ie(t, r), { timestampIsSet: !0 }];
  }
}
const Ni = {
  G: new ri(),
  y: new li(),
  Y: new si(),
  R: new oi(),
  u: new ii(),
  Q: new ui(),
  q: new ci(),
  M: new di(),
  L: new fi(),
  w: new hi(),
  I: new pi(),
  d: new wi(),
  D: new bi(),
  E: new ki(),
  e: new _i(),
  c: new Di(),
  i: new Mi(),
  a: new Ti(),
  b: new Pi(),
  B: new Oi(),
  h: new Ai(),
  H: new Si(),
  K: new $i(),
  k: new Ci(),
  m: new Yi(),
  s: new Ri(),
  S: new Ei(),
  X: new Ii(),
  x: new Bi(),
  t: new Fi(),
  T: new Wi()
}, Li = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Hi = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Vi = /^'([^]*?)'?$/, qi = /''/g, ji = /\S/, zi = /[a-zA-Z]/;
function Fn(e, n, t, a) {
  var g, u, d, v, S, N, J, T;
  const r = () => Ie((a == null ? void 0 : a.in) || t, NaN), l = Xo(), s = (a == null ? void 0 : a.locale) ?? l.locale ?? Xr, o = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((u = (g = a == null ? void 0 : a.locale) == null ? void 0 : g.options) == null ? void 0 : u.firstWeekContainsDate) ?? l.firstWeekContainsDate ?? ((v = (d = l.locale) == null ? void 0 : d.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, i = (a == null ? void 0 : a.weekStartsOn) ?? ((N = (S = a == null ? void 0 : a.locale) == null ? void 0 : S.options) == null ? void 0 : N.weekStartsOn) ?? l.weekStartsOn ?? ((T = (J = l.locale) == null ? void 0 : J.options) == null ? void 0 : T.weekStartsOn) ?? 0;
  if (!n)
    return e ? r() : ke(t, a == null ? void 0 : a.in);
  const m = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: s
  }, f = [new ni(a == null ? void 0 : a.in, t)], h = n.match(Hi).map((D) => {
    const F = D[0];
    if (F in In) {
      const $ = In[F];
      return $(D, s.formatLong);
    }
    return D;
  }).join("").match(Li), b = [];
  for (let D of h) {
    !(a != null && a.useAdditionalWeekYearTokens) && el(D) && Bn(D, n, e), !(a != null && a.useAdditionalDayOfYearTokens) && Jr(D) && Bn(D, n, e);
    const F = D[0], $ = Ni[F];
    if ($) {
      const { incompatibleTokens: U } = $;
      if (Array.isArray(U)) {
        const Z = b.find(
          (j) => U.includes(j.token) || j.token === F
        );
        if (Z)
          throw new RangeError(
            `The format string mustn't contain \`${Z.fullToken}\` and \`${D}\` at the same time`
          );
      } else if ($.incompatibleTokens === "*" && b.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${D}\` and any other token at the same time`
        );
      b.push({ token: F, fullToken: D });
      const z = $.run(
        e,
        D,
        s.match,
        m
      );
      if (!z)
        return r();
      f.push(z.setter), e = z.rest;
    } else {
      if (F.match(zi))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + F + "`"
        );
      if (D === "''" ? D = "'" : F === "'" && (D = Qi(D)), e.indexOf(D) === 0)
        e = e.slice(D.length);
      else
        return r();
    }
  }
  if (e.length > 0 && ji.test(e))
    return r();
  const p = f.map((D) => D.priority).sort((D, F) => F - D).filter((D, F, $) => $.indexOf(D) === F).map(
    (D) => f.filter((F) => F.priority === D).sort((F, $) => $.subPriority - F.subPriority)
  ).map((D) => D[0]);
  let _ = ke(t, a == null ? void 0 : a.in);
  if (isNaN(+_)) return r();
  const w = {};
  for (const D of p) {
    if (!D.validate(_, m))
      return r();
    const F = D.set(_, w, m);
    Array.isArray(F) ? (_ = F[0], Object.assign(w, F[1])) : _ = F;
  }
  return _;
}
function Qi(e) {
  return e.match(Vi)[1].replace(qi, "'");
}
function _r(e, n, t) {
  const [a, r] = Na(
    t == null ? void 0 : t.in,
    e,
    n
  );
  return +Zt(a) == +Zt(r);
}
function ll(e, n, t) {
  return yt(e, -n, t);
}
function Ui(e, n) {
  const t = (n == null ? void 0 : n.nearestTo) ?? 1;
  if (t < 1 || t > 30) return Ie(e, NaN);
  const a = ke(e, n == null ? void 0 : n.in), r = a.getSeconds() / 60, l = a.getMilliseconds() / 1e3 / 60, s = a.getMinutes() + r + l, o = (n == null ? void 0 : n.roundingMethod) ?? "round", m = Js(o)(s / t) * t;
  return a.setMinutes(m, 0, 0), a;
}
function sl(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in), r = a.getFullYear(), l = a.getDate(), s = Ie(e, 0);
  s.setFullYear(r, n, 15), s.setHours(0, 0, 0, 0);
  const o = Ko(s);
  return a.setMonth(n, Math.min(l, o)), a;
}
function Se(e, n, t) {
  let a = ke(e, t == null ? void 0 : t.in);
  return isNaN(+a) ? Ie(e, NaN) : (n.year != null && a.setFullYear(n.year), n.month != null && (a = sl(a, n.month)), n.date != null && a.setDate(n.date), n.hours != null && a.setHours(n.hours), n.minutes != null && a.setMinutes(n.minutes), n.seconds != null && a.setSeconds(n.seconds), n.milliseconds != null && a.setMilliseconds(n.milliseconds), a);
}
function Gi(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  return a.setMilliseconds(n), a;
}
function Ki(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  return a.setSeconds(n), a;
}
function Dt(e, n, t) {
  const a = ke(e, t == null ? void 0 : t.in);
  return isNaN(+a) ? Ie(e, NaN) : (a.setFullYear(n), a);
}
function ka(e, n, t) {
  return xt(e, -n, t);
}
function Xi(e, n, t) {
  const {
    years: a = 0,
    months: r = 0,
    weeks: l = 0,
    days: s = 0,
    hours: o = 0,
    minutes: i = 0,
    seconds: m = 0
  } = n, f = ka(e, r + a * 12, t), h = ll(f, s + l * 7, t), b = i + o * 60, _ = (m + b * 60) * 1e3;
  return Ie(e, +h - _);
}
function ol(e, n, t) {
  return Qn(e, -n, t);
}
function Zi(e, n, t = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: t
  }).format(n).split(/\s/g).slice(2).join(" ");
}
const Tn = {}, Ca = {};
function Jt(e, n) {
  try {
    const a = (Tn[e] || (Tn[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(n).split("GMT")[1];
    return a in Ca ? Ca[a] : Dr(a, a.split(":"));
  } catch {
    if (e in Ca) return Ca[e];
    const t = e == null ? void 0 : e.match(Ji);
    return t ? Dr(e, t.slice(1)) : NaN;
  }
}
const Ji = /([+-]\d\d):?(\d\d)?/;
function Dr(e, n) {
  const t = +(n[0] || 0), a = +(n[1] || 0), r = +(n[2] || 0) / 60;
  return Ca[e] = t * 60 + a > 0 ? t * 60 + a + r : t * 60 - a - r;
}
class St extends Date {
  //#region static
  constructor(...n) {
    super(), n.length > 1 && typeof n[n.length - 1] == "string" && (this.timeZone = n.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Jt(this.timeZone, this)) ? this.setTime(NaN) : n.length ? typeof n[0] == "number" && (n.length === 1 || n.length === 2 && typeof n[1] != "number") ? this.setTime(n[0]) : typeof n[0] == "string" ? this.setTime(+new Date(n[0])) : n[0] instanceof Date ? this.setTime(+n[0]) : (this.setTime(+new Date(...n)), il(this), Wn(this)) : this.setTime(Date.now());
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
    const n = -Jt(this.timeZone, this);
    return n > 0 ? Math.floor(n) : Math.ceil(n);
  }
  //#endregion
  //#region time
  setTime(n) {
    return Date.prototype.setTime.apply(this, arguments), Wn(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](n) {
    return new St(+new Date(n), this.timeZone);
  }
  //#endregion
}
const xr = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!xr.test(e)) return;
  const n = e.replace(xr, "$1UTC");
  St.prototype[n] && (e.startsWith("get") ? St.prototype[e] = function() {
    return this.internal[n]();
  } : (St.prototype[e] = function() {
    return Date.prototype[n].apply(this.internal, arguments), eu(this), +this;
  }, St.prototype[n] = function() {
    return Date.prototype[n].apply(this, arguments), Wn(this), +this;
  }));
});
function Wn(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Jt(e.timeZone, e) * 60));
}
function eu(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), il(e);
}
function il(e) {
  const n = Jt(e.timeZone, e), t = n > 0 ? Math.floor(n) : Math.ceil(n), a = /* @__PURE__ */ new Date(+e);
  a.setUTCHours(a.getUTCHours() - 1);
  const r = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), l = -(/* @__PURE__ */ new Date(+a)).getTimezoneOffset(), s = r - l, o = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && o && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const i = r - t;
  i && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + i);
  const m = /* @__PURE__ */ new Date(+e);
  m.setUTCSeconds(0);
  const f = r > 0 ? m.getSeconds() : (m.getSeconds() - 60) % 60, h = Math.round(-(Jt(e.timeZone, e) * 60)) % 60;
  (h || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + h), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + h + f));
  const b = Jt(e.timeZone, e), p = b > 0 ? Math.floor(b) : Math.ceil(b), w = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, g = p !== t, u = w - i;
  if (g && u) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + u);
    const d = Jt(e.timeZone, e), v = d > 0 ? Math.floor(d) : Math.ceil(d), S = p - v;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class fa extends St {
  //#region static
  static tz(n, ...t) {
    return t.length ? new fa(...t, n) : new fa(Date.now(), n);
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
    return `${n} GMT${t}${a}${r} (${Zi(this.timeZone, this)})`;
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
    return new fa(+this, n);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](n) {
    return new fa(+new Date(n), this.timeZone);
  }
  //#endregion
}
function La() {
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
function tu() {
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
function ul() {
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
function cl() {
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
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Xe("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
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
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
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
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const He = aa({
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
}), Pn = he(null), Ga = he(!1), On = he(!1), An = he(!1), Sn = he(!1), rt = he(0), Qe = he(0), Ut = () => {
  const e = X(() => Ga.value ? [...He.selectionGrid, He.actionRow].filter((h) => h.length) : On.value ? [
    ...He.timePicker[0],
    ...He.timePicker[1],
    Sn.value ? [] : [Pn.value],
    He.actionRow
  ].filter((h) => h.length) : An.value ? [...He.monthPicker, He.actionRow] : [He.monthYear, ...He.calendar, He.time, He.actionRow].filter((h) => h.length)), n = (h) => {
    rt.value = h ? rt.value + 1 : rt.value - 1;
    let b = null;
    e.value[Qe.value] && (b = e.value[Qe.value][rt.value]), !b && e.value[Qe.value + (h ? 1 : -1)] ? (Qe.value = Qe.value + (h ? 1 : -1), rt.value = h ? 0 : e.value[Qe.value].length - 1) : b || (rt.value = h ? rt.value - 1 : rt.value + 1);
  }, t = (h) => {
    Qe.value === 0 && !h || Qe.value === e.value.length && h || (Qe.value = h ? Qe.value + 1 : Qe.value - 1, e.value[Qe.value] ? e.value[Qe.value] && !e.value[Qe.value][rt.value] && rt.value !== 0 && (rt.value = e.value[Qe.value].length - 1) : Qe.value = h ? Qe.value - 1 : Qe.value + 1);
  }, a = (h) => {
    let b = null;
    e.value[Qe.value] && (b = e.value[Qe.value][rt.value]), b ? b.focus({ preventScroll: !Ga.value }) : rt.value = h ? rt.value - 1 : rt.value + 1;
  }, r = () => {
    n(!0), a(!0);
  }, l = () => {
    n(!1), a(!1);
  }, s = () => {
    t(!1), a(!0);
  }, o = () => {
    t(!0), a(!0);
  }, i = (h, b) => {
    He[b] = h;
  }, m = (h, b) => {
    He[b] = h;
  }, f = () => {
    rt.value = 0, Qe.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: m,
    setTimePickerBackRef: (h) => {
      Pn.value = h;
    },
    setSelectionGrid: (h) => {
      Ga.value = h, f(), h || (He.selectionGrid = []);
    },
    setTimePicker: (h, b = !1) => {
      On.value = h, Sn.value = b, f(), h || (He.timePicker[0] = [], He.timePicker[1] = []);
    },
    setTimePickerElements: (h, b = 0) => {
      He.timePicker[b] = h;
    },
    arrowRight: r,
    arrowLeft: l,
    arrowUp: s,
    arrowDown: o,
    clearArrowNav: () => {
      He.monthYear = [], He.calendar = [], He.time = [], He.actionRow = [], He.selectionGrid = [], He.timePicker[0] = [], He.timePicker[1] = [], Ga.value = !1, On.value = !1, Sn.value = !1, An.value = !1, f(), Pn.value = null;
    },
    setMonthPicker: (h) => {
      An.value = h, f();
    },
    refSets: He
    // exposed for testing
  };
};
var _t = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(_t || {}), ta = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(ta || {}), ut = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(ut || {});
const au = ["timestamp", "date", "iso"];
var it = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(it || {}), Ve = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Ve || {}), ma = /* @__PURE__ */ ((e) => (e.MONTH_AND_YEAR = "MM-yyyy", e.YEAR = "yyyy", e.DATE = "dd-MM-yyyy", e))(ma || {});
const nu = () => {
  const { checkPartialRangeValue: e, checkRangeEnabled: n, isValidDate: t } = bt(), { convertType: a, errorMapper: r } = Je(), {
    getDate: l,
    rootEmit: s,
    state: o,
    rootProps: i,
    inputValue: m,
    defaults: { textInput: f, range: h, multiDates: b, timeConfig: p, formats: _ },
    modelValue: w,
    updateTime: g
  } = Ye(), { setTime: u, getWeekFromDate: d } = ot(), { formatSelectedDate: v, formatForTextInput: S } = Kt();
  ct(
    w,
    (x, ee) => {
      s("internal-model-change", w.value), JSON.stringify(ee ?? {}) !== JSON.stringify(x ?? {}) && g();
    },
    { deep: !0 }
  ), ct(h, (x, ee) => {
    x.enabled !== ee.enabled && (w.value = null);
  }), ct(
    () => _.value.input,
    () => {
      se();
    }
  );
  const N = (x) => x ? i.modelType ? ve(x) : {
    hours: Yt(x),
    minutes: Nt(x),
    seconds: p.value.enableSeconds ? zt(x) : 0
  } : null, J = (x) => i.modelType ? ve(x) : { month: Ce(x), year: De(x) }, T = (x) => Array.isArray(x) ? b.value.enabled ? x.map((ee) => D(ee, Dt(l(), ee))) : n(
    () => [
      Dt(l(), x[0]),
      x[1] ? Dt(l(), x[1]) : e(h.value.partialRange)
    ],
    h.value.enabled
  ) : Dt(l(), +x), D = (x, ee) => (typeof x == "string" || typeof x == "number") && i.modelType ? ce(x) : ee, F = (x) => Array.isArray(x) ? [
    D(x[0], u(x[0])),
    D(x[1], u(x[1]))
  ] : D(x, u(x)), $ = (x) => {
    const ee = Se(l(), { date: 1 });
    return Array.isArray(x) ? b.value.enabled ? x.map(
      (ue) => D(ue, Se(ee, { month: +ue.month, year: +ue.year }))
    ) : n(
      () => [
        D(x[0], Se(ee, { month: +x[0].month, year: +x[0].year })),
        D(
          x[1],
          x[1] ? Se(ee, { month: +x[1].month, year: +x[1].year }) : e(h.value.partialRange)
        )
      ],
      h.value.enabled
    ) : D(x, Se(ee, { month: +x.month, year: +x.year }));
  }, U = (x) => {
    if (Array.isArray(x))
      return x.map((ee) => ce(ee));
    throw new Error(r.dateArr("multi-dates"));
  }, z = (x) => {
    if (Array.isArray(x) && h.value.enabled) {
      const ee = x[0], ue = x[1];
      return [
        l(Array.isArray(ee) ? ee[0] : null),
        Array.isArray(ue) && ue.length ? l(ue[0]) : null
      ];
    }
    return l(x[0]);
  }, Z = (x) => i.modelAuto ? Array.isArray(x) ? [ce(x[0]), ce(x[1])] : i.autoApply ? [ce(x)] : [ce(x), null] : Array.isArray(x) ? n(
    () => x[1] ? [
      ce(x[0]),
      x[1] ? ce(x[1]) : e(h.value.partialRange)
    ] : [ce(x[0])],
    h.value.enabled
  ) : ce(x), j = () => {
    Array.isArray(w.value) && h.value.enabled && w.value.length === 1 && w.value.push(e(h.value.partialRange));
  }, Y = () => {
    const x = w.value;
    return [
      ve(x[0]),
      x[1] ? ve(x[1]) : e(h.value.partialRange)
    ];
  }, H = () => Array.isArray(w.value) ? w.value[1] ? Y() : ve(a(w.value[0])) : [], P = () => (w.value || []).map((x) => ve(x)), C = (x = !1) => (x || j(), i.modelAuto ? H() : b.value.enabled ? P() : Array.isArray(w.value) ? n(() => Y(), h.value.enabled) : ve(a(w.value))), W = (x) => !x || Array.isArray(x) && !x.length ? null : i.timePicker ? F(a(x)) : i.monthPicker ? $(a(x)) : i.yearPicker ? T(a(x)) : b.value.enabled ? U(a(x)) : i.weekPicker ? z(a(x)) : Z(a(x)), E = (x) => {
    if (o.isTextInputDate) return;
    const ee = W(x);
    t(a(ee)) ? (w.value = a(ee), se()) : (w.value = null, m.value = "");
  }, Q = () => w.value ? b.value.enabled ? w.value.map((x) => v(x)).join("; ") : f.value.enabled ? S() : v(w.value) : "", se = () => {
    m.value = Q();
  }, ce = (x) => i.modelType ? au.includes(i.modelType) ? l(x) : i.modelType === "format" && typeof _.value.input == "string" ? Fn(x, _.value.input, l(), { locale: i.locale }) : Fn(x, i.modelType, l(), { locale: i.locale }) : l(x), ve = (x) => x ? i.modelType ? i.modelType === "timestamp" ? +x : i.modelType === "iso" ? x.toISOString() : i.modelType === "format" && typeof _.value.input == "string" ? v(x) : v(x, i.modelType) : x : null, be = (x) => {
    s("update:model-value", x);
  }, xe = (x) => Array.isArray(w.value) ? b.value.enabled ? w.value.map((ee) => x(ee)) : [x(w.value[0]), w.value[1] ? x(w.value[1]) : null] : x(a(w.value)), ie = () => {
    if (Array.isArray(w.value)) {
      const x = d(w.value[0], i.weekStart), ee = w.value[1] ? d(w.value[1], i.weekStart) : [];
      return [x.map((ue) => l(ue)), ee.map((ue) => l(ue))];
    }
    return d(w.value, i.weekStart).map((x) => l(x));
  }, ye = (x) => be(a(xe(x))), B = () => s("update:model-value", ie());
  return {
    checkBeforeEmit: () => w.value ? h.value.enabled ? h.value.partialRange ? w.value.length >= 1 : w.value.length === 2 : !!w.value : !1,
    parseExternalModelValue: E,
    formatInputValue: se,
    emitModelValue: () => (se(), i.monthPicker ? ye(J) : i.timePicker ? ye(N) : i.yearPicker ? ye(De) : i.weekPicker ? B() : be(C()))
  };
}, Ft = [
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
], Mr = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ru = {
  all: () => Ft,
  root: () => Ft.concat(Mr),
  monthYear: () => Ft.filter((e) => e.use.includes("month-year")),
  input: () => Mr,
  timePicker: () => Ft.filter((e) => e.use.includes("time")),
  action: () => Ft.filter((e) => e.use.includes("action")),
  calendar: () => Ft.filter((e) => e.use.includes("calendar")),
  menu: () => Ft.filter((e) => e.use.includes("menu")),
  shared: () => Ft.filter((e) => e.use.includes("shared")),
  yearMode: () => Ft.filter((e) => e.use.includes("year-mode"))
}, Gt = () => ({
  mapSlots: (e, n, t) => {
    const a = [];
    for (const r of ru[n]())
      e[r.name] && a.push(r.name);
    if (t != null && t.length)
      for (const r of t)
        r.slot && a.push(r.slot);
    return a;
  }
}), hl = Symbol("ContextKey"), lu = (e, n) => {
  const { setTimeModelValue: t } = Je(), a = Gu(e), r = he(null), l = aa({
    menuFocused: !1,
    shiftKeyInMenu: !1,
    isInputFocused: !1,
    isTextInputDate: !1
  }), s = a.getDate(/* @__PURE__ */ new Date()), o = he(""), i = he([{ month: Ce(s), year: De(s) }]), m = aa({ hours: 0, minutes: 0, seconds: 0 });
  t(m, null, s, a.range.value.enabled);
  const f = X({
    get: () => r.value,
    set: (w) => {
      r.value = w;
    }
  }), h = X(
    () => (w) => i.value[w] ? i.value[w].month : 0
  ), b = X(
    () => (w) => i.value[w] ? i.value[w].year : 0
  ), p = (w, g) => {
    l[w] = g;
  }, _ = () => {
    t(m, f.value, s, a.range.value.enabled);
  };
  Bl(hl, {
    rootProps: e,
    defaults: a,
    modelValue: f,
    state: Fl(l),
    rootEmit: n,
    calendars: i,
    month: h,
    year: b,
    time: m,
    today: s,
    inputValue: o,
    setState: p,
    updateTime: _,
    getDate: a.getDate
  });
}, Ye = () => {
  const e = Nl(hl);
  if (!e)
    throw new Error("Can't use context");
  return e;
}, Ha = () => {
  const {
    defaults: { transitions: e }
  } = Ye(), n = X(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), t = X(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: n, showTransition: !!e.value, menuTransition: t };
}, Va = (e) => {
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
  } = Ye(), { getMapKeyType: o, getMapDate: i, errorMapper: m, convertType: f } = Je(), { isDateBefore: h, isDateAfter: b, isDateEqual: p, resetDate: _, getDaysInBetween: w, setTimeValue: g, getTimeObj: u, setTime: d } = ot(), v = (O) => e.value.disabledDates ? typeof e.value.disabledDates == "function" ? e.value.disabledDates(s(O)) : !!i(O, e.value.disabledDates) : !1, S = (O) => e.value.maxDate ? l.yearPicker ? De(O) > De(e.value.maxDate) : b(O, e.value.maxDate) : !1, N = (O) => e.value.minDate ? l.yearPicker ? De(O) < De(e.value.minDate) : h(O, e.value.minDate) : !1, J = (O) => {
    var A;
    if (!O) return !1;
    const M = S(O), k = N(O), V = v(O), le = a.value.months.map((y) => +y).includes(Ce(O)), oe = (A = a.value.weekDays) != null && A.length ? a.value.weekDays.some((y) => +y === Go(O)) : !1, L = U(O), ae = De(O), I = ae < +l.yearRange[0] || ae > +l.yearRange[1];
    return !(M || k || V || le || I || oe || L);
  }, T = (O, M) => h(...B(e.value.minDate, O, M)) || p(...B(e.value.minDate, O, M)), D = (O, M) => b(...B(e.value.maxDate, O, M)) || p(...B(e.value.maxDate, O, M)), F = (O, M, k) => {
    let V = !1;
    return e.value.maxDate && k && D(O, M) && (V = !0), e.value.minDate && !k && T(O, M) && (V = !0), V;
  }, $ = (O, M, k, V) => {
    let le = !1;
    return V && (e.value.minDate || e.value.maxDate) ? e.value.minDate && e.value.maxDate ? le = F(O, M, k) : (e.value.minDate && T(O, M) || e.value.maxDate && D(O, M)) && (le = !0) : le = !0, le;
  }, U = (O) => Array.isArray(e.value.allowedDates) && !e.value.allowedDates.length ? !0 : e.value.allowedDates ? !i(
    O,
    e.value.allowedDates,
    o(l.monthPicker, l.yearPicker)
  ) : !1, z = (O) => !J(O), Z = (O) => n.value.noDisabledRange ? !Un({ start: O[0], end: O[1] }).some((M) => z(M)) : !0, j = (O) => {
    if (O) {
      const M = De(O);
      return M >= +l.yearRange[0] && M <= l.yearRange[1];
    }
    return !0;
  }, Y = (O, M) => !!(Array.isArray(O) && O[M] && (n.value.maxRange || n.value.minRange) && j(O[M])), H = (O, M, k = 0) => {
    if (Y(M, k) && j(O)) {
      const V = Qr(O, M[k]), le = w(M[k], O), oe = le.length === 1 ? 0 : le.filter((ae) => z(ae)).length, L = Math.abs(V) - (n.value.minMaxRawRange ? 0 : oe);
      if (n.value.minRange && n.value.maxRange)
        return L >= +n.value.minRange && L <= +n.value.maxRange;
      if (n.value.minRange) return L >= +n.value.minRange;
      if (n.value.maxRange) return L <= +n.value.maxRange;
    }
    return !0;
  }, P = () => !r.value.enableTimePicker || l.monthPicker || l.yearPicker || r.value.ignoreTimeValidation, C = (O) => Array.isArray(O) ? [O[0] ? g(O[0]) : null, O[1] ? g(O[1]) : null] : g(O), W = (O, M, k) => M ? O.find(
    (V) => +V.hours === Yt(M) && V.minutes === "*" ? !0 : +V.minutes === Nt(M) && +V.hours === Yt(M)
  ) && k : !1, E = (O, M, k) => {
    const [V, le] = O, [oe, L] = M;
    return !W(V, oe, k) && !W(le, L, k) && k;
  }, Q = (O, M) => {
    const k = Array.isArray(M) ? M : [M];
    return Array.isArray(l.disabledTimes) ? Array.isArray(l.disabledTimes[0]) ? E(l.disabledTimes, k, O) : !k.some((V) => W(l.disabledTimes, V, O)) : O;
  }, se = (O, M) => {
    const k = Array.isArray(M) ? [u(M[0]), M[1] ? u(M[1]) : void 0] : u(M), V = !l.disabledTimes(k);
    return O && V;
  }, ce = (O, M) => l.disabledTimes ? Array.isArray(l.disabledTimes) ? Q(M, O) : se(M, O) : M, ve = (O) => {
    let M = !0;
    if (!O || P()) return !0;
    const k = !e.value.minDate && !e.value.maxDate ? C(O) : O;
    return (l.maxTime || e.value.maxDate) && (M = ee(
      l.maxTime,
      e.value.maxDate,
      "max",
      f(k),
      M
    )), (l.minTime || e.value.minDate) && (M = ee(
      l.minTime,
      e.value.minDate,
      "min",
      f(k),
      M
    )), ce(O, M);
  }, be = (O) => {
    if (!l.monthPicker) return !0;
    let M = !0;
    const k = s(_(O));
    if (e.value.minDate && e.value.maxDate) {
      const V = s(_(e.value.minDate)), le = s(_(e.value.maxDate));
      return b(k, V) && h(k, le) || p(k, V) || p(k, le);
    }
    if (e.value.minDate) {
      const V = s(_(e.value.minDate));
      M = b(k, V) || p(k, V);
    }
    if (e.value.maxDate) {
      const V = s(_(e.value.maxDate));
      M = h(k, V) || p(k, V);
    }
    return M;
  }, xe = X(() => (O) => !r.value.enableTimePicker || r.value.ignoreTimeValidation ? !0 : ve(O)), ie = X(() => (O) => l.monthPicker ? Array.isArray(O) && (n.value.enabled || t.value.enabled) ? !O.filter((M) => !be(M)).length : be(O) : !0), ye = (O, M, k) => {
    if (!M || k && !e.value.maxDate || !k && !e.value.minDate) return !1;
    const V = k ? xt(O, 1) : ka(O, 1), le = [Ce(V), De(V)];
    return k ? !D(...le) : !T(...le);
  }, B = (O, M, k) => [Se(s(O), { date: 1 }), Se(s(), { month: M, year: k, date: 1 })], x = (O, M, k, V) => {
    if (!O) return !0;
    if (V) {
      const le = k === "max" ? ba(O, M) : la(O, M), oe = { seconds: 0, milliseconds: 0 };
      return le || da(Se(O, oe), Se(M, oe));
    }
    return k === "max" ? O.getTime() <= M.getTime() : O.getTime() >= M.getTime();
  }, ee = (O, M, k, V, le) => {
    if (Array.isArray(V)) {
      const L = ue(O, V[0], M), ae = ue(O, V[1], M);
      return x(V[0], L, k, !!M) && x(V[1], ae, k, !!M) && le;
    }
    const oe = ue(O, V, M);
    return x(V, oe, k, !!M) && le;
  }, ue = (O, M, k) => O ? d(O, M) : s(k ?? M);
  return {
    isDisabled: z,
    validateDate: J,
    validateMonthYearInRange: $,
    isDateRangeAllowed: Z,
    checkMinMaxRange: H,
    isValidTime: ve,
    validateMonthYear: ye,
    validateMinDate: T,
    validateMaxDate: D,
    isValidDate: (O) => Array.isArray(O) ? Ya(O[0]) && (O[1] ? Ya(O[1]) : !0) : O ? Ya(O) : !1,
    checkPartialRangeValue: (O) => {
      if (O) return null;
      throw new Error(m.prop("partial-range"));
    },
    checkRangeEnabled: (O, M) => {
      if (M) return O();
      throw new Error(m.prop("range"));
    },
    checkMinMaxValue: (O, M, k) => {
      const V = k != null, le = M != null;
      if (!V && !le) return !1;
      const oe = +k, L = +M;
      return V && le ? +O > oe || +O < L : V ? +O > oe : le ? +O < L : !1;
    },
    isTimeValid: xe,
    isMonthValid: ie
  };
}, su = (e) => {
  const {
    rootEmit: n,
    rootProps: t,
    defaults: { timeConfig: a, flow: r }
  } = Ye(), l = he(0), s = aa({
    [ta.timePicker]: !a.value.enableTimePicker || t.timePicker || t.monthPicker,
    [ta.calendar]: !1,
    [ta.header]: !1
  }), o = X(() => t.monthPicker || t.timePicker), i = (p) => {
    var _, w;
    if ((w = (_ = r.value) == null ? void 0 : _.steps) != null && w.length) {
      if (!p && o.value) return b();
      s[p] = !0, Object.keys(s).filter((g) => !s[g]).length || b();
    }
  }, m = () => {
    var p, _, w, g;
    (_ = (p = r.value) == null ? void 0 : p.steps) != null && _.length && l.value !== -1 && (l.value += 1, n("flow-step", l.value), b()), ((g = (w = r.value) == null ? void 0 : w.steps) == null ? void 0 : g.length) === l.value && dt().then(() => f());
  }, f = () => {
    l.value = -1;
  }, h = (p, _, ...w) => {
    var g, u, d;
    ((g = r.value) == null ? void 0 : g.steps[l.value]) === p && e.value && ((d = (u = e.value)[_]) == null || d.call(u, ...w));
  }, b = (p = 0) => {
    var w;
    p && (l.value += p), h(ut.month, "toggleMonthPicker", !0), h(ut.year, "toggleYearPicker", !0), h(ut.calendar, "toggleTimePicker", !1, !0), h(ut.time, "toggleTimePicker", !0, !0);
    const _ = (w = r.value) == null ? void 0 : w.steps[l.value];
    (_ === ut.hours || _ === ut.minutes || _ === ut.seconds) && h(_, "toggleTimePicker", !0, !0, _);
  };
  return { childMount: i, updateFlowStep: m, resetFlow: f, handleFlow: b, flowStep: l };
};
function $n(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
function Sa(e) {
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
function $a(e) {
  return (n, t = {}) => {
    const a = t.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], l = n.match(r);
    if (!l)
      return null;
    const s = l[0], o = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(o) ? iu(o, (h) => h.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      ou(o, (h) => h.test(s))
    );
    let m;
    m = e.valueCallback ? e.valueCallback(i) : i, m = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(m)
    ) : m;
    const f = n.slice(s.length);
    return { value: m, rest: f };
  };
}
function ou(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function iu(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function uu(e) {
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
const cu = {
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
}, du = (e, n, t) => {
  let a;
  const r = cu[e];
  return typeof r == "string" ? a = r : n === 1 ? a = r.one : a = r.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + a : a + " ago" : a;
}, fu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, mu = (e, n, t, a) => fu[e], hu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, pu = {
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
}, yu = {
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
}, gu = {
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
}, wu = {
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
}, bu = (e, n) => {
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
}, ku = {
  ordinalNumber: bu,
  era: Sa({
    values: hu,
    defaultWidth: "wide"
  }),
  quarter: Sa({
    values: vu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Sa({
    values: pu,
    defaultWidth: "wide"
  }),
  day: Sa({
    values: yu,
    defaultWidth: "wide"
  }),
  dayPeriod: Sa({
    values: gu,
    defaultWidth: "wide",
    formattingValues: wu,
    defaultFormattingWidth: "wide"
  })
}, _u = /^(\d+)(th|st|nd|rd)?/i, Du = /\d+/i, xu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Mu = {
  any: [/^b/i, /^(a|c)/i]
}, Tu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ou = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Au = {
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
}, Su = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, $u = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Cu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Yu = {
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
}, Ru = {
  ordinalNumber: uu({
    matchPattern: _u,
    parsePattern: Du,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: $a({
    matchPatterns: xu,
    defaultMatchWidth: "wide",
    parsePatterns: Mu,
    defaultParseWidth: "any"
  }),
  quarter: $a({
    matchPatterns: Tu,
    defaultMatchWidth: "wide",
    parsePatterns: Pu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: $a({
    matchPatterns: Ou,
    defaultMatchWidth: "wide",
    parsePatterns: Au,
    defaultParseWidth: "any"
  }),
  day: $a({
    matchPatterns: Su,
    defaultMatchWidth: "wide",
    parsePatterns: $u,
    defaultParseWidth: "any"
  }),
  dayPeriod: $a({
    matchPatterns: Cu,
    defaultMatchWidth: "any",
    parsePatterns: Yu,
    defaultParseWidth: "any"
  })
}, Eu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Iu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Bu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fu = {
  date: $n({
    formats: Eu,
    defaultWidth: "full"
  }),
  time: $n({
    formats: Iu,
    defaultWidth: "full"
  }),
  dateTime: $n({
    formats: Bu,
    defaultWidth: "full"
  })
}, Wu = {
  code: "en-US",
  formatDistance: du,
  formatLong: Fu,
  formatRelative: mu,
  localize: ku,
  match: Ru,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Tr = {
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
}, Nu = {
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
}, Pr = {
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: "open",
  selectOnFocus: !1,
  rangeSeparator: " - ",
  escClose: !0,
  format: void 0,
  maskFormat: void 0
}, Lu = {
  dates: [],
  years: [],
  months: [],
  quarters: [],
  weeks: [],
  weekdays: [],
  options: { highlightDisabled: !1 }
}, Hu = {
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  selectBtnLabel: "Select",
  cancelBtnLabel: "Cancel",
  nowBtnLabel: "Now",
  nowBtnRound: void 0
}, Vu = {
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
}, Or = {
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down"
}, qu = {
  weekDays: [],
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] }
}, ju = {
  month: "LLL",
  year: "yyyy",
  weekDay: "EEEEEE",
  quarter: "MMMM",
  day: "d",
  input: void 0,
  preview: void 0
}, zu = {
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
}, Qu = {
  flowStep: 0,
  menuWrapRef: null,
  collapse: !1
}, Uu = {
  weekStart: 1,
  yearRange: () => [1900, 2100],
  ui: () => ({}),
  locale: () => Wu,
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
}, Ar = {
  name: void 0,
  required: !1,
  autocomplete: "off",
  state: void 0,
  clearable: !0,
  alwaysClearable: !1,
  hideInputIcon: !1,
  id: void 0,
  inputmode: "none"
}, Ka = {
  type: "local",
  hideOnOffsetDates: !1,
  label: "W"
}, Gu = (e) => {
  const { getMapKey: n, getMapKeyType: t, getTimeObjFromCurrent: a } = Je();
  function r(P, C) {
    let W;
    return e.timezone ? W = new fa(P ?? /* @__PURE__ */ new Date(), e.timezone) : W = P ? new Date(P) : /* @__PURE__ */ new Date(), C ? Se(W, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }) : W;
  }
  const l = () => {
    const P = Z.value.enableSeconds ? ":ss" : "", C = Z.value.enableMinutes ? ":mm" : "";
    return Z.value.is24 ? `HH${C}${P}` : `hh${C}${P} aa`;
  }, s = () => {
    var P;
    return e.monthPicker ? "MM/yyyy" : e.timePicker ? l() : e.weekPicker ? `${((P = J.value) == null ? void 0 : P.type) === "iso" ? "II" : "ww"}-RR` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : Z.value.enableTimePicker ? `MM/dd/yyyy, ${l()}` : "MM/dd/yyyy";
  }, o = (P) => a(r(), P, Z.value.enableSeconds), i = () => F.value.enabled ? Z.value.startTime && Array.isArray(Z.value.startTime) ? [o(Z.value.startTime[0]), o(Z.value.startTime[1])] : null : Z.value.startTime && !Array.isArray(Z.value.startTime) ? o(Z.value.startTime) : null, m = (P) => P ? typeof P == "boolean" ? P ? 2 : 0 : Math.max(+P, 2) : 0, f = (P) => {
    const C = t(e.monthPicker, e.yearPicker);
    return new Map(
      P.map((W) => {
        const E = r(W, h.value);
        return [n(E, C), E];
      })
    );
  }, h = X(() => e.monthPicker || e.yearPicker || e.quarterPicker), b = X(() => {
    const P = typeof e.multiCalendars == "object" && e.multiCalendars, C = {
      static: !0,
      solo: !1
    };
    if (!e.multiCalendars) return { ...C, count: m(!1) };
    const W = P ? e.multiCalendars : {}, E = P ? W.count ?? !0 : e.multiCalendars, Q = m(E);
    return Object.assign(C, W, { count: Q });
  }), p = X(() => i()), _ = X(() => ({ ...Vu, ...e.ariaLabels })), w = X(() => ({ ...qu, ...e.filters })), g = X(() => typeof e.transitions == "boolean" ? e.transitions ? Or : !1 : { ...Or, ...e.transitions }), u = X(() => ({ ...Hu, ...e.actionRow })), d = X(() => typeof e.textInput == "object" ? {
    ...Pr,
    ...e.textInput,
    format: typeof e.textInput.format == "string" ? e.textInput.format : U.value.input,
    pattern: e.textInput.format ?? U.value.input,
    enabled: !0
  } : {
    ...Pr,
    format: U.value.input,
    pattern: U.value.input,
    enabled: e.textInput
  }), v = X(() => {
    const P = { input: !1 };
    return typeof e.inline == "object" ? { ...P, ...e.inline, enabled: !0 } : {
      enabled: e.inline,
      ...P
    };
  }), S = X(() => ({ ...Nu, ...e.config })), N = X(() => typeof e.highlight == "function" ? e.highlight : {
    ...Lu,
    ...e.highlight
  }), J = X(() => {
    var P, C;
    return typeof e.weekNumbers == "object" ? {
      type: ((P = e.weekNumbers) == null ? void 0 : P.type) ?? Ka.type,
      hideOnOffsetDates: ((C = e.weekNumbers) == null ? void 0 : C.hideOnOffsetDates) ?? Ka.hideOnOffsetDates,
      label: e.weekNumbers.label ?? Ka.label
    } : e.weekNumbers ? Ka : void 0;
  }), T = X(() => {
    var P, C;
    return typeof e.multiDates == "boolean" ? { enabled: e.multiDates, dragSelect: !0, limit: null } : {
      enabled: !!e.multiDates,
      limit: (P = e.multiDates) != null && P.limit ? +e.multiDates.limit : null,
      dragSelect: ((C = e.multiDates) == null ? void 0 : C.dragSelect) ?? !0
    };
  }), D = X(() => {
    var P;
    return {
      minDate: e.minDate ? r(e.minDate) : null,
      maxDate: e.maxDate ? r(e.maxDate) : null,
      disabledDates: Array.isArray(e.disabledDates) ? f(e.disabledDates) : e.disabledDates,
      allowedDates: Array.isArray(e.allowedDates) ? f(e.allowedDates) : null,
      highlight: typeof N.value == "object" && Array.isArray(N.value.dates) ? f(N.value.dates) : N.value,
      markers: (P = e.markers) != null && P.length ? new Map(
        e.markers.map((C) => {
          const W = r(C.date);
          return [n(W, ma.DATE), C];
        })
      ) : null
    };
  }), F = X(() => typeof e.range == "object" ? { enabled: !0, ...Tr, ...e.range } : {
    enabled: e.range,
    ...Tr
  }), $ = X(() => ({
    ...Object.fromEntries(
      Object.keys(e.ui).map((P) => {
        const C = P, W = e.ui[C];
        if (C === "dayClass") return [C, e.ui[C]];
        const E = typeof e.ui[C] == "string" ? { [W]: !0 } : Object.fromEntries(W.map((Q) => [Q, !0]));
        return [P, E];
      })
    )
  })), U = X(() => {
    var P, C;
    return {
      ...ju,
      ...e.formats,
      input: ((P = e.formats) == null ? void 0 : P.input) ?? s(),
      preview: ((C = e.formats) == null ? void 0 : C.preview) ?? s()
    };
  }), z = X(() => {
    if (e.teleport)
      return typeof e.teleport == "string" ? e.teleport : typeof e.teleport == "boolean" ? "body" : e.teleport;
  }), Z = X(() => ({ ...zu, ...e.timeConfig })), j = X(() => {
    if (e.flow)
      return { steps: [], partial: !1, ...e.flow };
  }), Y = X(() => {
    const P = d.value.enabled ? "text" : "none";
    return e.inputAttrs ? { ...Ar, inputmode: P, ...e.inputAttrs } : { ...Ar, inputmode: P };
  }), H = X(() => {
    var P, C, W, E;
    return {
      offset: ((P = e.floating) == null ? void 0 : P.offset) ?? 10,
      arrow: ((C = e.floating) == null ? void 0 : C.arrow) ?? !0,
      strategy: ((W = e.floating) == null ? void 0 : W.strategy) ?? void 0,
      placement: ((E = e.floating) == null ? void 0 : E.placement) ?? void 0
    };
  });
  return {
    transitions: g,
    multiCalendars: b,
    startTime: p,
    ariaLabels: _,
    filters: w,
    actionRow: u,
    textInput: d,
    inline: v,
    config: S,
    highlight: N,
    weekNumbers: J,
    range: F,
    safeDates: D,
    multiDates: T,
    ui: $,
    formats: U,
    teleport: z,
    timeConfig: Z,
    flow: j,
    inputAttrs: Y,
    floatingConfig: H,
    getDate: r
  };
}, Je = () => {
  const e = (d, v) => pt(d, v ?? ma.DATE), n = (d, v) => d ? ma.MONTH_AND_YEAR : v ? ma.YEAR : ma.DATE, t = (d, v, S) => v.get(e(d, S)), a = (d) => d, r = (d) => d === 0 ? d : !d || Number.isNaN(+d) ? null : +d, l = () => [
    "a[href]",
    "area[href]",
    "input:not([disabled]):not([type='hidden'])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "[tabindex]:not([tabindex='-1'])",
    "[data-datepicker-instance]"
  ].join(", "), s = (d, v) => {
    let S = [...document.querySelectorAll(l())];
    S = S.filter((J) => !d.contains(J) || "datepicker-instance" in J.dataset);
    const N = S.indexOf(d);
    if (N >= 0 && (v ? N - 1 >= 0 : N + 1 <= S.length))
      return S[N + (v ? -1 : 1)];
  }, o = (d) => String(d).padStart(2, "0"), i = (d, v) => d == null ? void 0 : d.querySelector(`[data-dp-element="${v}"]`), m = (d, v, S = !1) => {
    d && v.allowStopPropagation && (S && d.stopImmediatePropagation(), d.stopPropagation());
  }, f = (d, v, S = !1, N) => {
    if (d.key === Ve.enter || d.key === Ve.space)
      return S && d.preventDefault(), v();
    if (N) return N(d);
  }, h = (d, v) => {
    v.allowStopPropagation && d.stopPropagation(), v.allowPreventDefault && d.preventDefault();
  }, b = (d) => {
    if (d)
      return [...d.querySelectorAll("input, button, select, textarea, a[href]")][0];
  }, p = () => "ontouchstart" in globalThis || navigator.maxTouchPoints > 0, _ = (d) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][d], w = (d) => {
    const v = [], S = (N) => N.filter((J) => !!J);
    for (let N = 0; N < d.length; N += 3) {
      const J = [d[N], d[N + 1], d[N + 2]];
      v.push(S(J));
    }
    return v;
  }, g = {
    prop: (d) => `"${d}" prop must be enabled!`,
    dateArr: (d) => `You need to use array as "model-value" binding in order to support "${d}"`
  }, u = (d, v, S, N, J) => {
    const T = {
      hours: Yt,
      minutes: Nt,
      seconds: zt
    };
    if (!v) return N ? [T[d](S), T[d](S)] : T[d](S);
    if (Array.isArray(v) && N) {
      const D = v[0] ?? S, F = v[1];
      return [T[d](D), F ? T[d](F) : J[d][1] ?? T[d](S)];
    }
    return Array.isArray(v) && !N ? T[d](v[v.length - 1] ?? S) : T[d](v);
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
    checkStopPropagation: m,
    checkKeyDown: f,
    handleEventPropagation: h,
    findFocusableEl: b,
    isTouchDevice: p,
    hoursToAmPmHours: _,
    getGroupedList: w,
    setTimeModelValue: (d, v, S, N) => {
      d.hours = u("hours", v, S, N, d), d.minutes = u("minutes", v, S, N, d), d.seconds = u("seconds", v, S, N, d);
    },
    getTimeObjFromCurrent: (d, v, S) => {
      const N = {
        hours: Yt(d),
        minutes: Nt(d),
        seconds: S ? zt(d) : 0
      };
      return Object.assign(N, v);
    },
    errorMapper: g
  };
}, ot = () => {
  const { getDate: e } = Ye(), { getMapDate: n, getGroupedList: t } = Je(), a = (u, d) => {
    if (!u) return e();
    const v = e(u), S = Se(v, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    return d ? ao(S) : S;
  }, r = (u, d) => {
    const v = e(d);
    return Se(v, {
      hours: +(u.hours ?? Yt(v)),
      minutes: +(u.minutes ?? Nt(v)),
      seconds: +(u.seconds ?? zt(v)),
      milliseconds: 0
    });
  }, l = (u, d) => {
    const v = wt(u, { weekStartsOn: +d }), S = Gn(u, { weekStartsOn: +d });
    return [v, S];
  }, s = (u, d) => !u || !d ? !1 : ba(a(u), a(d)), o = (u, d) => !u || !d ? !1 : da(a(u), a(d)), i = (u, d) => !u || !d ? !1 : la(a(u), a(d)), m = (u, d, v) => u != null && u[0] && (u != null && u[1]) ? i(v, u[0]) && s(v, u[1]) : u != null && u[0] && d ? i(v, u[0]) && s(v, d) || s(v, u[0]) && i(v, d) : !1, f = (u, d) => {
    const v = i(u, d) ? d : u, S = i(d, u) ? d : u;
    return Un({ start: v, end: S });
  }, h = (u) => `dp-${pt(u, "yyyy-MM-dd")}`, b = (u) => a(Se(e(u), { date: 1 })), p = (u, d) => {
    if (d) {
      const v = De(e(d));
      if (v > u) return 12;
      if (v === u) return Ce(e(d));
    }
  }, _ = (u, d) => {
    if (d) {
      const v = De(e(d));
      return v < u ? -1 : v === u ? Ce(e(d)) : void 0;
    }
  }, w = (u) => {
    if (u) return De(e(u));
  }, g = (u) => ({
    hours: Yt(u),
    minutes: Nt(u),
    seconds: zt(u)
  });
  return {
    resetDateTime: a,
    groupListAndMap: (u, d) => t(u).map((v) => v.map((S) => {
      const { active: N, disabled: J, isBetween: T, highlighted: D } = d(S);
      return {
        ...S,
        active: N,
        disabled: J,
        className: {
          dp__overlay_cell_active: N,
          dp__overlay_cell: !N,
          dp__overlay_cell_disabled: J,
          dp__overlay_cell_pad: !0,
          dp__overlay_cell_active_disabled: J && N,
          dp__cell_in_between: T,
          "dp--highlighted": D
        }
      };
    })),
    setTime: r,
    getWeekFromDate: l,
    isDateAfter: i,
    isDateBefore: s,
    isDateBetween: m,
    isDateEqual: o,
    getDaysInBetween: f,
    getCellId: h,
    resetDate: b,
    getMinMonth: p,
    getMaxMonth: _,
    getYearFromDate: w,
    getTimeObj: g,
    setTimeValue: (u) => Se(e(), g(u)),
    sanitizeTime: (u, d, v) => d && (v || v === 0) ? Object.fromEntries(
      ["hours", "minutes", "seconds"].map((S) => S === d ? [S, v] : [S, Number.isNaN(+u[S]) ? void 0 : +u[S]])
    ) : {
      hours: Number.isNaN(+u.hours) ? void 0 : +u.hours,
      minutes: Number.isNaN(+u.minutes) ? void 0 : +u.minutes,
      seconds: Number.isNaN(+(u.seconds ?? "")) ? void 0 : +u.seconds
    },
    getBeforeAndAfterInRange: (u, d) => {
      const v = ll(a(d), u), S = yt(a(d), u);
      return { before: v, after: S };
    },
    isModelAuto: (u) => Array.isArray(u) ? !!u[0] && !!u[1] : !1,
    matchDate: (u, d) => u ? d ? d instanceof Map ? !!n(u, d) : d(e(u)) : !1 : !0,
    checkHighlightMonth: (u, d, v) => typeof u == "function" ? u({ month: d, year: v }) : u.months.some((S) => S.month === d && S.year === v),
    checkHighlightYear: (u, d) => typeof u == "function" ? u(d) : u.years.includes(d)
  };
}, un = () => {
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
}, Kt = () => {
  const {
    getDate: e,
    state: n,
    modelValue: t,
    rootProps: a,
    defaults: { formats: r, textInput: l }
  } = Ye(), s = (_) => pt(Dt(e(), _), r.value.year, { locale: a.locale }), o = (_) => pt(sl(e(), _), r.value.month, { locale: a.locale }), i = (_) => pt(_, r.value.weekDay, { locale: a.locale }), m = (_) => pt(_, r.value.quarter, { locale: a.locale }), f = (_, w) => [_, w].map((g) => m(g)).join("-"), h = (_) => pt(_, r.value.day, { locale: a.locale }), b = (_, w, g) => {
    const u = g ? r.value.preview : r.value.input;
    if (!_) return "";
    if (typeof u == "function") return u(_);
    const d = w ?? u, v = { locale: a.locale };
    return Array.isArray(_) ? `${pt(_[0], d, v)}${a.modelAuto && !_[1] ? "" : l.value.rangeSeparator}${_[1] ? pt(_[1], d, v) : ""}` : pt(_, d, v);
  }, p = () => {
    const _ = (w) => pt(w, l.value.format);
    return Array.isArray(t.value) ? `${_(t.value[0])} ${l.value.rangeSeparator} ${t.value[1] ? _(t.value[1]) : ""}` : "";
  };
  return {
    formatYear: s,
    formatMonth: o,
    formatWeekDay: i,
    formatQuarter: m,
    formatSelectedDate: b,
    formatForTextInput: () => n.isInputFocused && t.value ? Array.isArray(t.value) ? p() : pt(t.value, l.value.format) : b(t.value),
    formatPreview: (_) => b(_, void 0, !0),
    formatQuarterText: f,
    formatDay: h
  };
}, cn = () => {
  const { rootProps: e } = Ye(), { formatYear: n, formatMonth: t } = Kt();
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
}, Ku = (e) => ({
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
}), xa = () => ({
  boolHtmlAttribute: (e) => e ? !0 : void 0
}), Xu = () => {
  const {
    getDate: e,
    rootProps: n,
    defaults: { textInput: t, startTime: a, timeConfig: r }
  } = Ye(), { getTimeObjFromCurrent: l } = Je(), s = he(!1), o = X(
    () => Array.isArray(a.value) ? a.value[0] : a.value ?? l(e(), {}, r.value.enableSeconds)
  ), i = (m, f, h) => {
    const b = Fn(m, f.slice(0, m.length), e(), { locale: n.locale });
    return Ya(b) && Ur(b) ? h || s.value ? b : Se(b, {
      hours: +o.value.hours,
      minutes: +o.value.minutes,
      seconds: +(o.value.seconds ?? 0),
      milliseconds: 0
    }) : null;
  };
  return {
    textPasted: s,
    parseFreeInput: (m, f) => {
      if (typeof t.value.pattern == "string")
        return i(m, t.value.pattern, f);
      if (Array.isArray(t.value.pattern)) {
        let h = null;
        for (const b of t.value.pattern)
          if (h = i(m, b, f), h)
            break;
        return h;
      }
      return typeof t.value.pattern == "function" ? t.value.pattern(m) : null;
    },
    applyMaxValues: (m, f) => {
      const h = {
        MM: 12,
        DD: 31,
        hh: 23,
        mm: 59,
        ss: 59
      };
      let b = "", p = 0;
      for (let _ = 0; _ < f.length; _++) {
        const w = f[_], g = w.length, u = m.slice(p, p + g);
        if (!u) break;
        if (u.length < g)
          b += u;
        else {
          let d = Number.parseInt(u, 10);
          h[w] && d > h[w] && (d = h[w]), b += d.toString().padStart(g, "0").slice(0, g);
        }
        p += g;
      }
      return b;
    },
    createMaskedValue: (m, f) => {
      const h = /(YYYY|MM|DD|hh|mm|ss)/g, b = [...f.matchAll(h)].map((u) => u[0]), p = f.replace(h, "|").split("|").filter(Boolean), _ = b.map((u) => u.length);
      let w = "", g = 0;
      for (let u = 0; u < b.length; u++) {
        const d = _[u], v = m.slice(g, g + d);
        if (!v) break;
        w += v, v.length === d && p[u] && (w += p[u]), g += d;
      }
      return w;
    }
  };
}, Zu = {
  key: 1,
  class: "dp__input_wrap"
}, Ju = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], ec = {
  key: 2,
  class: "dp--clear-btn"
}, tc = ["aria-label"], ac = /* @__PURE__ */ Ke({
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
      defaults: { textInput: i, ariaLabels: m, inline: f, config: h, range: b, multiDates: p, ui: _, inputAttrs: w }
    } = Ye(), { checkMinMaxRange: g, isValidDate: u } = bt(), { parseFreeInput: d, textPasted: v, createMaskedValue: S, applyMaxValues: N } = Xu(), { checkKeyDown: J, checkStopPropagation: T } = Je(), { boolHtmlAttribute: D } = xa(), F = Fe("dp-input"), $ = he(null), U = he(!1), z = X(
      () => ({
        dp__pointer: !o.disabled && !o.readonly && !i.value.enabled,
        dp__disabled: o.disabled,
        dp__input_readonly: !i.value.enabled,
        dp__input: !0,
        dp__input_not_clearable: !w.value.clearable,
        dp__input_icon_pad: !w.value.hideInputIcon,
        dp__input_valid: typeof w.value.state == "boolean" ? w.value.state : !1,
        dp__input_invalid: typeof w.value.state == "boolean" ? !w.value.state : !1,
        dp__input_focus: U.value || r.isMenuOpen,
        dp__input_reg: !i.value.enabled,
        ..._.value.input
      })
    ), Z = () => {
      a("set-input-date", null), w && o.autoApply && (a("set-empty-date"), $.value = null);
    }, j = (B) => {
      const { rangeSeparator: x } = i.value, [ee, ue] = B.split(`${x}`);
      if (ee) {
        const O = d(ee.trim(), s.value), M = ue ? d(ue.trim(), s.value) : void 0;
        if (la(O, M)) return;
        const k = O && M ? [O, M] : [O];
        g(M, k, 0) && ($.value = O ? k : null);
      }
    }, Y = () => {
      v.value = !0;
    }, H = (B) => {
      if (b.value.enabled)
        j(B);
      else if (p.value.enabled) {
        const x = B.split(";");
        $.value = x.map((ee) => d(ee.trim())).filter((ee) => !!ee);
      } else
        $.value = d(B, s.value);
    }, P = (B) => {
      var O, M;
      const x = typeof B == "string" ? B : (O = B.target) == null ? void 0 : O.value, ee = (M = i == null ? void 0 : i.value) == null ? void 0 : M.maskFormat;
      let ue = x;
      if (typeof ee == "string") {
        const k = /(YYYY|MM|DD|hh|mm|ss)/g, V = [...ee.matchAll(k)].map((L) => L[0]), le = x.replace(/\D/g, ""), oe = N(le, V);
        ue = S(oe, ee);
      }
      ue === "" ? Z() : (i.value.openMenu && !r.isMenuOpen && a("open"), H(ue), a("set-input-date", $.value)), v.value = !1, s.value = ue, l("text-input", B, $.value);
    }, C = (B) => {
      i.value.enabled ? (H(B.target.value), i.value.enterSubmit && u($.value) && s.value !== "" ? (a("set-input-date", $.value, !0), $.value = null) : i.value.enterSubmit && s.value === "" && ($.value = null, a("clear"))) : Q(B);
    }, W = (B, x) => {
      i.value.enabled && i.value.tabSubmit && !x && H(B.target.value), i.value.tabSubmit && u($.value) && s.value !== "" ? (a("set-input-date", $.value, !0, !0), $.value = null) : i.value.tabSubmit && s.value === "" && ($.value = null, a("clear"));
    }, E = () => {
      U.value = !0, a("focus"), dt().then(() => {
        var B;
        i.value.enabled && i.value.selectOnFocus && ((B = F.value) == null || B.select());
      });
    }, Q = (B) => {
      if (T(B, h.value, !0), i.value.enabled && i.value.openMenu && !f.value.input) {
        if (i.value.openMenu === "open" && !r.isMenuOpen) return a("open");
        if (i.value.openMenu === "toggle") return a("toggle");
      } else i.value.enabled || a("toggle");
    }, se = () => {
      a("real-blur"), U.value = !1, (!r.isMenuOpen || f.value.enabled && f.value.input) && a("blur"), o.autoApply && i.value.enabled && $.value && !r.isMenuOpen && (a("set-input-date", $.value), a("select-date"), $.value = null);
    }, ce = (B) => {
      T(B, h.value, !0), a("clear");
    }, ve = () => {
      a("close");
    }, be = (B) => {
      if (B.key === "Tab" && W(B), B.key === "Enter" && C(B), B.key === "Escape" && i.value.escClose && ve(), !i.value.enabled) {
        if (B.code === "Tab") return;
        B.preventDefault();
      }
    }, xe = () => {
      var B;
      (B = F.value) == null || B.focus({ preventScroll: !0 });
    }, ie = (B) => {
      $.value = B;
    }, ye = (B) => {
      B.key === Ve.tab && W(B, !0);
    };
    return n({
      focusInput: xe,
      setParsedDate: ie
    }), (B, x) => {
      var ee, ue;
      return q(), ne("div", { onClick: Q }, [
        B.$slots.trigger && !B.$slots["dp-input"] && !c(f).enabled ? fe(B.$slots, "trigger", { key: 0 }) : re("", !0),
        !B.$slots.trigger && (!c(f).enabled || c(f).input) ? (q(), ne("div", Zu, [
          B.$slots["dp-input"] && !B.$slots.trigger && (!c(f).enabled || c(f).enabled && c(f).input) ? fe(B.$slots, "dp-input", {
            key: 0,
            value: c(s),
            isMenuOpen: e.isMenuOpen,
            onInput: P,
            onEnter: C,
            onTab: W,
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
            id: c(w).id,
            ref: "dp-input",
            "data-test-id": "dp-input",
            name: c(w).name,
            class: Me(z.value),
            inputmode: c(w).inputmode,
            placeholder: c(o).placeholder,
            disabled: c(D)(c(o).disabled),
            readonly: c(D)(c(o).readonly),
            required: c(D)(c(w).required),
            value: c(s),
            autocomplete: c(w).autocomplete,
            "aria-label": c(m).input,
            "aria-disabled": c(o).disabled || void 0,
            "aria-invalid": c(w).state === !1 ? !0 : void 0,
            onInput: P,
            onBlur: se,
            onFocus: E,
            onKeypress: be,
            onKeydown: x[0] || (x[0] = (O) => be(O)),
            onPaste: Y,
            onInvalid: x[1] || (x[1] = (O) => c(l)("invalid", O))
          }, null, 42, Ju)),
          Ae("div", {
            onClick: x[4] || (x[4] = (O) => a("toggle"))
          }, [
            B.$slots["input-icon"] && !c(w).hideInputIcon ? (q(), ne("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: x[2] || (x[2] = (O) => a("toggle"))
            }, [
              fe(B.$slots, "input-icon")
            ])) : re("", !0),
            !B.$slots["input-icon"] && !c(w).hideInputIcon && !B.$slots["dp-input"] ? (q(), $e(c(La), {
              key: 1,
              "aria-label": (ee = c(m)) == null ? void 0 : ee.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: x[3] || (x[3] = (O) => a("toggle"))
            }, null, 8, ["aria-label"])) : re("", !0)
          ]),
          B.$slots["clear-icon"] && (c(w).alwaysClearable || c(s) && c(w).clearable && !c(o).disabled && !c(o).readonly) ? (q(), ne("span", ec, [
            fe(B.$slots, "clear-icon", { clear: ce })
          ])) : re("", !0),
          !B.$slots["clear-icon"] && (c(w).alwaysClearable || c(w).clearable && c(s) && !c(o).disabled && !c(o).readonly) ? (q(), ne("button", {
            key: 3,
            "aria-label": (ue = c(m)) == null ? void 0 : ue.clearInput,
            class: "dp--clear-btn",
            type: "button",
            "data-test-id": "clear-input-value-btn",
            onKeydown: x[5] || (x[5] = (O) => c(J)(O, () => ce(O), !0, ye)),
            onClick: x[6] || (x[6] = Ea((O) => ce(O), ["prevent"]))
          }, [
            ft(c(tu), { class: "dp__input_icons" })
          ], 40, tc)) : re("", !0)
        ])) : re("", !0)
      ]);
    };
  }
}), nc = {
  ref: "action-row",
  class: "dp__action_row"
}, rc = ["title"], lc = {
  ref: "action-buttons-container",
  class: "dp__action_buttons",
  "data-dp-element": "action-row"
}, sc = ["disabled"], oc = /* @__PURE__ */ Ke({
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
      defaults: { actionRow: o, multiCalendars: i, inline: m, range: f, multiDates: h, formats: b }
    } = Ye(), { isTimeValid: p, isMonthValid: _ } = bt(), { buildMatrix: w } = Ut(), { formatPreview: g } = Kt(), { checkKeyDown: u, convertType: d } = Je(), { boolHtmlAttribute: v } = xa(), S = Fe("cancel-btn"), N = Fe("select-btn"), J = Fe("action-buttons-container"), T = Fe("action-row"), D = he(!1), F = he({});
    et(() => {
      l.arrowNavigation && w([Ze(S), Ze(N)], "actionRow"), $(), globalThis.addEventListener("resize", $);
    }), _a(() => {
      globalThis.removeEventListener("resize", $);
    });
    const $ = () => {
      D.value = !1, setTimeout(() => {
        var Q, se;
        const W = (Q = J.value) == null ? void 0 : Q.getBoundingClientRect(), E = (se = T.value) == null ? void 0 : se.getBoundingClientRect();
        W && E && (F.value.maxWidth = `${E.width - W.width - 20}px`), D.value = !0;
      }, 0);
    }, U = X(() => f.value.enabled && !f.value.partialRange && s.value ? s.value.length === 2 : !0), z = X(
      () => !p.value(s.value) || !_.value(s.value) || !U.value
    ), Z = () => {
      const W = b.value.preview;
      return l.timePicker || l.monthPicker, W(d(s.value));
    }, j = () => {
      const W = s.value;
      return i.value.count > 0 ? `${g(W[0])} - ${g(W[1])}` : [g(W[0]), g(W[1])];
    }, Y = X(() => !s.value || !a.menuMount ? "" : typeof b.value.preview == "string" ? Array.isArray(s.value) ? s.value.length === 2 && s.value[1] ? j() : h.value.enabled ? s.value.map((W) => `${g(W)}`) : l.modelAuto ? `${g(s.value[0])}` : `${g(s.value[0])} -` : g(s.value) : Z()), H = () => h.value.enabled ? "; " : " - ", P = X(
      () => Array.isArray(Y.value) ? Y.value.join(H()) : Y.value
    ), C = () => {
      p.value(s.value) && _.value(s.value) && U.value ? t("select-date") : r("invalid-select");
    };
    return (W, E) => (q(), ne("div", nc, [
      W.$slots["action-row"] ? fe(W.$slots, "action-row", mt(gt({ key: 0 }, {
        modelValue: c(s),
        disabled: z.value,
        selectDate: () => W.$emit("select-date"),
        closePicker: () => W.$emit("close-picker")
      }))) : (q(), ne(Pe, { key: 1 }, [
        c(o).showPreview ? (q(), ne("div", {
          key: 0,
          class: "dp__selection_preview",
          title: P.value || void 0,
          style: ht(F.value)
        }, [
          W.$slots["action-preview"] && D.value ? fe(W.$slots, "action-preview", {
            key: 0,
            value: c(s)
          }) : re("", !0),
          !W.$slots["action-preview"] && D.value ? (q(), ne(Pe, { key: 1 }, [
            Wt(st(P.value), 1)
          ], 64)) : re("", !0)
        ], 12, rc)) : re("", !0),
        Ae("div", lc, [
          W.$slots["action-buttons"] ? fe(W.$slots, "action-buttons", {
            key: 0,
            value: c(s)
          }) : re("", !0),
          W.$slots["action-buttons"] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
            !c(m).enabled && c(o).showCancel ? (q(), ne("button", {
              key: 0,
              ref: "cancel-btn",
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: E[0] || (E[0] = (Q) => W.$emit("close-picker")),
              onKeydown: E[1] || (E[1] = (Q) => c(u)(Q, () => W.$emit("close-picker")))
            }, st(c(o).cancelBtnLabel), 545)) : re("", !0),
            c(o).showNow ? (q(), ne("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: E[2] || (E[2] = (Q) => W.$emit("select-now")),
              onKeydown: E[3] || (E[3] = (Q) => c(u)(Q, () => W.$emit("select-now")))
            }, st(c(o).nowBtnLabel), 33)) : re("", !0),
            c(o).showSelect ? (q(), ne("button", {
              key: 2,
              ref: "select-btn",
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: c(v)(z.value),
              "data-test-id": "select-button",
              onKeydown: E[4] || (E[4] = (Q) => c(u)(Q, () => C())),
              onClick: C
            }, st(c(o).selectBtnLabel), 41, sc)) : re("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), dn = () => {
  const {
    rootProps: e,
    defaults: { multiCalendars: n }
  } = Ye(), t = X(() => (l) => {
    var s;
    return (s = e.hideNavigation) == null ? void 0 : s.includes(l);
  }), a = X(() => (l) => n.value.count ? n.value.solo ? !0 : l === 0 : !0), r = X(() => (l) => n.value.count ? n.value.solo ? !0 : l === n.value.count - 1 : !0);
  return { hideNavigationButtons: t, showLeftIcon: a, showRightIcon: r };
}, ic = ["role", "aria-label", "tabindex"], uc = { class: "dp__selection_grid_header" }, cc = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], dc = ["aria-label"], qa = /* @__PURE__ */ Ke({
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
    const { setSelectionGrid: a, buildMultiLevelMatrix: r, setMonthPicker: l } = Ut(), s = t, o = e, {
      rootProps: i,
      defaults: { ariaLabels: m, textInput: f, config: h }
    } = Ye(), { hideNavigationButtons: b } = dn(), { handleEventPropagation: p, convertType: _, checkKeyDown: w, checkStopPropagation: g, getElWithin: u, findFocusableEl: d } = Je(), v = Fe("toggle-button"), S = Fe("overlay-container"), N = Fe("grid-wrap"), J = he(!1), T = he(null), D = he([]), F = he(), $ = he(0);
    Ll(() => {
      T.value = null;
    }), et(() => {
      dt().then(() => C()), o.noOverlayFocus || z(), U(!0);
    }), _a(() => U(!1));
    const U = (B) => {
      var x;
      i.arrowNavigation && ((x = o.headerRefs) != null && x.length ? l(B) : a(B));
    }, z = () => {
      var x;
      const B = Ze(N);
      B && (f.value.enabled || (T.value ? (x = T.value) == null || x.focus({ preventScroll: !0 }) : B.focus({ preventScroll: !0 })), J.value = B.clientHeight < B.scrollHeight);
    }, Z = X(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !o.useRelative,
        "dp--overlay-relative": o.useRelative
      })
    ), j = X(
      () => o.useRelative ? { height: `${o.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), Y = X(() => ({
      dp__overlay_col: !0
    })), H = X(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: J.value,
        dp__button_bottom: o.isLast
      })
    ), P = X(() => {
      var B, x;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((B = o.items) == null ? void 0 : B.length) <= 6,
        dp__container_block: ((x = o.items) == null ? void 0 : x.length) > 6
      };
    });
    ct(
      () => o.items,
      () => C(!1),
      { deep: !0 }
    );
    const C = (B = !0) => {
      dt().then(() => {
        const x = Ze(T), ee = Ze(N), ue = Ze(v), O = Ze(S), M = ue ? ue.getBoundingClientRect().height : 0;
        ee && (ee.getBoundingClientRect().height ? $.value = ee.getBoundingClientRect().height - M : $.value = h.value.modeHeight - M), x && O && B && (O.scrollTop = x.offsetTop - O.offsetTop - ($.value / 2 - x.getBoundingClientRect().height) - M);
      });
    }, W = (B) => {
      B.disabled || s("selected", B.value);
    }, E = () => {
      s("toggle"), s("reset-flow");
    }, Q = (B) => {
      h.value.escClose && (E(), p(B, h.value));
    }, se = (B, x, ee, ue) => {
      B && ((x.active || x.value === o.focusValue) && (T.value = B), i.arrowNavigation && (Array.isArray(D.value[ee]) ? D.value[ee][ue] = B : D.value[ee] = [B], ce()));
    }, ce = () => {
      var x, ee;
      const B = (x = o.headerRefs) != null && x.length ? [o.headerRefs].concat(D.value) : D.value.concat([o.skipButtonRef ? [] : [v.value]]);
      r(_(B), (ee = o.headerRefs) != null && ee.length ? "monthPicker" : "selectionGrid");
    }, ve = (B) => {
      i.arrowNavigation || g(B, h.value, !0);
    }, be = (B) => {
      F.value = B, s("hover-value", B);
    }, xe = () => {
      var B;
      if (E(), !o.isLast) {
        const x = u(o.menuWrapRef ?? null, "action-row");
        x && ((B = d(x)) == null || B.focus());
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
    return n({ focusGrid: z }), (B, x) => {
      var ee;
      return q(), ne("div", {
        ref: "grid-wrap",
        class: Me(Z.value),
        style: ht(j.value),
        role: e.useRelative ? void 0 : "dialog",
        "aria-label": e.overlayLabel,
        tabindex: e.useRelative ? void 0 : "0",
        onKeydown: ie,
        onClick: x[0] || (x[0] = Ea(() => {
        }, ["prevent"]))
      }, [
        Ae("div", {
          ref: "overlay-container",
          class: Me(P.value),
          style: ht({ "--dp-overlay-height": `${$.value}px` }),
          role: "grid"
        }, [
          Ae("div", uc, [
            fe(B.$slots, "header")
          ]),
          B.$slots.overlay ? fe(B.$slots, "overlay", { key: 0 }) : (q(!0), ne(Pe, { key: 1 }, We(e.items, (ue, O) => (q(), ne("div", {
            key: O,
            class: Me(["dp__overlay_row", { dp__flex_row: e.items.length >= 3 }]),
            role: "row"
          }, [
            (q(!0), ne(Pe, null, We(ue, (M, k) => (q(), ne("div", {
              key: M.value,
              ref_for: !0,
              ref: (V) => se(V, M, O, k),
              role: "gridcell",
              class: Me(Y.value),
              "aria-selected": M.active || void 0,
              "aria-disabled": M.disabled || void 0,
              tabindex: "0",
              "data-test-id": M.text,
              onClick: Ea((V) => W(M), ["prevent"]),
              onKeydown: (V) => c(w)(V, () => W(M), !0),
              onMouseover: (V) => be(M.value)
            }, [
              Ae("div", {
                class: Me(M.className)
              }, [
                B.$slots.item ? fe(B.$slots, "item", {
                  key: 0,
                  item: M
                }) : re("", !0),
                B.$slots.item ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                  Wt(st(M.text), 1)
                ], 64))
              ], 2)
            ], 42, cc))), 128))
          ], 2))), 128))
        ], 6),
        B.$slots["button-icon"] ? Xa((q(), ne("button", {
          key: 0,
          ref: "toggle-button",
          type: "button",
          "aria-label": (ee = c(m)) == null ? void 0 : ee.toggleOverlay,
          class: Me(H.value),
          tabindex: "0",
          onClick: E,
          onKeydown: ye
        }, [
          fe(B.$slots, "button-icon")
        ], 42, dc)), [
          [Za, !c(b)(e.type)]
        ]) : re("", !0)
      ], 46, ic);
    };
  }
}), fc = ["data-dp-mobile"], fn = /* @__PURE__ */ Ke({
  __name: "InstanceWrap",
  props: {
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const {
      defaults: { multiCalendars: n }
    } = Ye(), { isMobile: t } = un(), a = X(
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
    ], 10, fc));
  }
}), mc = ["data-dp-element", "aria-label", "aria-disabled"], Ra = /* @__PURE__ */ Ke({
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: n }) {
    const { checkKeyDown: t } = Je(), a = n, r = Fe("arrow-btn");
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
    ], 40, mc));
  }
}), hc = ["aria-label", "data-test-id"], vl = /* @__PURE__ */ Ke({
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
    const t = n, a = e, { showRightIcon: r, showLeftIcon: l } = dn(), {
      rootProps: s,
      defaults: { config: o, ariaLabels: i, ui: m }
    } = Ye(), { showTransition: f, transitionName: h } = Ha(), { formatYear: b } = Kt(), { boolHtmlAttribute: p } = xa(), _ = he(!1), w = X(() => b(a.year)), g = (v = !1, S) => {
      _.value = !_.value, t("toggle-year-picker", { flow: v, show: S });
    }, u = (v) => {
      _.value = !1, t("year-select", v);
    }, d = (v = !1) => {
      t("handle-year", v);
    };
    return (v, S) => {
      var N, J, T, D, F;
      return q(), ne(Pe, null, [
        Ae("div", {
          class: Me(["dp--year-mode-picker", { "dp--hidden-el": _.value }])
        }, [
          c(l)(e.instance) ? (q(), $e(Ra, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (N = c(i)) == null ? void 0 : N.prevYear,
            disabled: c(p)(e.isDisabled(!1)),
            class: Me((J = c(m)) == null ? void 0 : J.navBtnPrev),
            onActivate: S[0] || (S[0] = ($) => d(!1))
          }, {
            default: Oe(() => [
              v.$slots["arrow-left"] ? fe(v.$slots, "arrow-left", { key: 0 }) : re("", !0),
              v.$slots["arrow-left"] ? re("", !0) : (q(), $e(c(ul), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : re("", !0),
          Ae("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(T = c(i)) == null ? void 0 : T.openYearsOverlay}`,
            "data-test-id": `year-mode-btn-${e.instance}`,
            onClick: S[1] || (S[1] = () => g(!1)),
            onKeydown: S[2] || (S[2] = Hl(() => g(!1), ["enter"]))
          }, [
            v.$slots.year ? fe(v.$slots, "year", {
              key: 0,
              text: w.value,
              value: e.year
            }) : re("", !0),
            v.$slots.year ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
              Wt(st(e.year), 1)
            ], 64))
          ], 40, hc),
          c(r)(e.instance) ? (q(), $e(Ra, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (D = c(i)) == null ? void 0 : D.nextYear,
            disabled: c(p)(e.isDisabled(!0)),
            class: Me((F = c(m)) == null ? void 0 : F.navBtnNext),
            onActivate: S[3] || (S[3] = ($) => d(!0))
          }, {
            default: Oe(() => [
              v.$slots["arrow-right"] ? fe(v.$slots, "arrow-right", { key: 0 }) : re("", !0),
              v.$slots["arrow-right"] ? re("", !0) : (q(), $e(c(cl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : re("", !0)
        ], 2),
        ft(Da, {
          name: c(h)(e.showYearPicker),
          css: c(f)
        }, {
          default: Oe(() => {
            var $, U;
            return [
              e.showYearPicker ? (q(), $e(qa, {
                key: 0,
                items: e.items,
                config: c(o),
                "is-last": c(s).autoApply && !c(o).keepActionRow,
                "overlay-label": (U = ($ = c(i)) == null ? void 0 : $.yearPicker) == null ? void 0 : U.call($, !0),
                type: "year",
                onToggle: g,
                onSelected: S[4] || (S[4] = (z) => u(z))
              }, at({
                "button-icon": Oe(() => [
                  v.$slots["calendar-icon"] ? fe(v.$slots, "calendar-icon", { key: 0 }) : re("", !0),
                  v.$slots["calendar-icon"] ? re("", !0) : (q(), $e(c(La), { key: 1 }))
                ]),
                _: 2
              }, [
                v.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: Oe(({ item: z }) => [
                    fe(v.$slots, "year-overlay-value", {
                      text: z.text,
                      value: z.value
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
}), pl = (e) => {
  const {
    getDate: n,
    rootEmit: t,
    state: a,
    month: r,
    year: l,
    modelValue: s,
    calendars: o,
    rootProps: i,
    defaults: { multiCalendars: m, range: f, safeDates: h, filters: b, highlight: p }
  } = Ye(), { resetDate: _, getYearFromDate: w, checkHighlightYear: g, groupListAndMap: u } = ot(), { getYears: d } = cn(), { validateMonthYear: v, checkMinMaxValue: S } = bt(), N = he([!1]), J = X(() => d()), T = X(() => (E, Q) => {
    const se = Se(_(n()), {
      month: r.value(E),
      year: l.value(E)
    }), ce = Q ? Kr(se) : pa(se);
    return v(ce, i.preventMinMaxNavigation, Q);
  }), D = () => Array.isArray(s.value) && m.value.solo && s.value[1], F = () => {
    for (let E = 0; E < m.value.count; E++)
      if (E === 0)
        o.value[E] = o.value[0];
      else if (E === m.value.count - 1 && D())
        o.value[E] = {
          month: Ce(s.value[1]),
          year: De(s.value[1])
        };
      else {
        const Q = Se(n(), o.value[E - 1]);
        o.value[E] = { month: Ce(Q), year: De(Qn(Q, 1)) };
      }
  }, $ = (E) => {
    if (!E) return F();
    const Q = Se(n(), o.value[E]);
    return o.value[0].year = De(ol(Q, m.value.count - 1)), F();
  }, U = (E, Q) => {
    const se = eo(Q, E);
    return f.value.showLastInRange && se > 1 ? Q : E;
  }, z = (E) => i.focusStartDate || m.value.solo ? E[0] : E[1] ? U(E[0], E[1]) : E[0], Z = () => {
    if (s.value) {
      const E = Array.isArray(s.value) ? z(s.value) : s.value;
      o.value[0] = { month: Ce(E), year: De(E) };
    }
  }, j = () => {
    Z(), m.value.count && F();
  };
  ct(s, (E, Q) => {
    a.isTextInputDate && JSON.stringify(E ?? {}) !== JSON.stringify(Q ?? {}) && j();
  }), et(() => {
    j();
  });
  const Y = (E, Q) => {
    o.value[Q].year = E, t("update-month-year", { instance: Q, year: E, month: o.value[Q].month }), m.value.count && !m.value.solo && $(Q);
  }, H = X(() => (E) => u(J.value, (Q) => {
    var be;
    const se = l.value(E) === Q.value, ce = S(
      Q.value,
      w(h.value.minDate),
      w(h.value.maxDate)
    ) || ((be = b.value.years) == null ? void 0 : be.includes(l.value(E))), ve = g(p.value, Q.value);
    return { active: se, disabled: ce, highlighted: ve };
  })), P = (E, Q) => {
    Y(E, Q), W(Q);
  }, C = (E, Q = !1) => {
    if (!T.value(E, Q)) {
      const se = Q ? l.value(E) + 1 : l.value(E) - 1;
      Y(se, E);
    }
  }, W = (E, Q = !1, se) => {
    Q || e("reset-flow"), se === void 0 ? N.value[E] = !N.value[E] : N.value[E] = se, N.value[E] ? t("overlay-toggle", { open: !0, overlay: ut.year }) : t("overlay-toggle", { open: !1, overlay: ut.year });
  };
  return {
    isDisabled: T,
    groupedYears: H,
    showYearPicker: N,
    selectYear: Y,
    setStartDate: () => {
      i.startDate && (s.value && i.focusStartDate || !s.value) && Y(De(n(i.startDate)), 0);
    },
    toggleYearPicker: W,
    handleYearSelect: P,
    handleYear: C
  };
}, mn = () => {
  const { isDateAfter: e, isDateBefore: n, isDateEqual: t } = ot(), {
    getDate: a,
    rootEmit: r,
    rootProps: l,
    modelValue: s,
    defaults: { range: o }
  } = Ye();
  return {
    getRangeWithFixedDate: (i) => Array.isArray(s.value) && (s.value.length === 2 || s.value.length === 1 && o.value.partialRange) ? o.value.fixedStart && (e(i, s.value[0]) || t(i, s.value[0])) ? [s.value[0], i] : o.value.fixedEnd && (n(i, s.value[1]) || t(i, s.value[1])) ? [i, s.value[1]] : (r("invalid-fixed-range", i), s.value) : [],
    setPresetDate: (i) => {
      Array.isArray(i.value) && i.value.length <= 2 && o.value.enabled ? s.value = i.value.map((m) => a(m)) : Array.isArray(i.value) || (s.value = a(i.value));
    },
    checkRangeAutoApply: (i, m, f) => {
      o && (i[0] && i[1] && l.autoApply && m("auto-apply", f), i[0] && !i[1] && (l.modelAuto || o.value.partialRange) && l.autoApply && m("auto-apply", f));
    },
    setMonthOrYearRange: (i) => {
      let m = s.value ? s.value.slice() : [];
      return m.length === 2 && m[1] !== null && (m = []), m.length ? (n(i, m[0]) ? m.unshift(i) : m[1] = i, r("range-end", i)) : (m = [i], r("range-start", i)), m;
    },
    handleMultiDatesSelect: (i, m) => {
      if (s.value && Array.isArray(s.value))
        if (s.value.some((f) => t(i, f))) {
          const f = s.value.filter((h) => !t(h, i));
          s.value = f.length ? f : null;
        } else (m && +m > s.value.length || !m) && s.value.push(i);
      else
        s.value = [i];
    }
  };
}, vc = (e, n) => {
  const {
    getDate: t,
    rootEmit: a,
    state: r,
    calendars: l,
    year: s,
    modelValue: o,
    rootProps: i,
    defaults: { range: m, highlight: f, safeDates: h, filters: b, multiDates: p }
  } = Ye();
  Va(() => {
    r.isTextInputDate && P(De(t(i.startDate)), 0);
  });
  const { checkMinMaxRange: _, checkMinMaxValue: w } = bt(), { isDateBetween: g, resetDateTime: u, resetDate: d, getMinMonth: v, getMaxMonth: S, checkHighlightMonth: N, groupListAndMap: J } = ot(), { checkRangeAutoApply: T, getRangeWithFixedDate: D, handleMultiDatesSelect: F, setMonthOrYearRange: $, setPresetDate: U } = mn(), { padZero: z } = Je(), { getMonths: Z, isOutOfYearRange: j } = cn(), Y = X(() => Z()), H = he(null), {
    selectYear: P,
    groupedYears: C,
    showYearPicker: W,
    toggleYearPicker: E,
    handleYearSelect: Q,
    handleYear: se,
    isDisabled: ce,
    setStartDate: ve
  } = pl(n);
  et(() => {
    ve();
  });
  const be = (A) => A ? { month: Ce(A), year: De(A) } : { month: null, year: null }, xe = () => o.value ? Array.isArray(o.value) ? o.value.map((A) => be(A)) : be(o.value) : be(), ie = (A, y) => {
    const G = l.value[A], de = xe();
    return Array.isArray(de) ? de.some((K) => K.year === (G == null ? void 0 : G.year) && K.month === y) : (G == null ? void 0 : G.year) === de.year && y === de.month;
  }, ye = (A, y, G) => {
    var K, _e;
    const de = xe();
    return Array.isArray(de) ? s.value(y) === ((K = de[G]) == null ? void 0 : K.year) && A === ((_e = de[G]) == null ? void 0 : _e.month) : !1;
  }, B = (A, y) => {
    if (m.value.enabled) {
      const G = xe();
      if (Array.isArray(o.value) && Array.isArray(G)) {
        const de = ye(A, y, 0) || ye(A, y, 1), K = Se(d(t()), { month: A, year: s.value(y) });
        return g(o.value, H.value, K) && !de;
      }
      return !1;
    }
    return !1;
  }, x = X(() => (A) => J(Y.value, (y) => {
    var we;
    const G = ie(A, y.value), de = w(
      y.value,
      v(s.value(A), h.value.minDate),
      S(s.value(A), h.value.maxDate)
    ) || ae(h.value.disabledDates, s.value(A), y.value) || ((we = b.value.months) == null ? void 0 : we.includes(y.value)) || !I(h.value.allowedDates, s.value(A), y.value) || j(s.value(A)), K = B(y.value, A), _e = N(f.value, y.value, s.value(A));
    return { active: G, disabled: de, isBetween: K, highlighted: _e };
  })), ee = (A, y) => Se(d(t()), { month: A, year: s.value(y) }), ue = (A, y) => {
    const G = o.value ? o.value : d(t());
    o.value = Se(G, { month: A, year: s.value(y) }), n("auto-apply"), n("update-flow-step");
  }, O = (A, y) => {
    const G = ee(A, y);
    m.value.fixedEnd || m.value.fixedStart ? o.value = D(G) : o.value ? _(G, o.value) && (o.value = $(ee(A, y))) : o.value = [ee(A, y)], dt().then(() => {
      T(o.value, n, o.value.length < 2);
    });
  }, M = (A, y) => {
    F(ee(A, y), p.value.limit), n("auto-apply", !0);
  }, k = (A, y) => (l.value[y].month = A, le(y, l.value[y].year, A), p.value.enabled ? M(A, y) : m.value.enabled ? O(A, y) : ue(A, y)), V = (A, y) => {
    P(A, y), le(y, A, null);
  }, le = (A, y, G) => {
    let de = G;
    if (!de && de !== 0) {
      const K = xe();
      de = Array.isArray(K) ? K[A].month : K.month;
    }
    a("update-month-year", { instance: A, year: y, month: de });
  }, oe = (A, y) => {
    H.value = ee(A, y);
  }, L = (A) => {
    U({
      value: A
    }), n("auto-apply");
  }, ae = (A, y, G) => {
    if (A instanceof Map) {
      const de = `${z(G + 1)}-${y}`;
      return A.size ? A.has(de) : !1;
    }
    return typeof A == "function" ? A(u(Se(t(), { month: G, year: y }), !0)) : !1;
  }, I = (A, y, G) => {
    if (A instanceof Map) {
      const de = `${z(G + 1)}-${y}`;
      return A.size ? A.has(de) : !0;
    }
    return !0;
  };
  return {
    groupedMonths: x,
    groupedYears: C,
    year: s,
    isDisabled: ce,
    showYearPicker: W,
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
}, pc = /* @__PURE__ */ Ke({
  __name: "MonthPicker",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["reset-flow", "auto-apply", "update-flow-step", "mount"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, l = Qt(), { mapSlots: s } = Gt(), {
      rootProps: o,
      defaults: { config: i }
    } = Ye(), m = s(l, "yearMode");
    et(() => {
      a("mount");
    });
    const {
      groupedMonths: f,
      groupedYears: h,
      year: b,
      isDisabled: p,
      showYearPicker: _,
      modelValue: w,
      presetDate: g,
      setHoverDate: u,
      selectMonth: d,
      selectYear: v,
      toggleYearPicker: S,
      handleYearSelect: N,
      handleYear: J,
      getModelMonthYear: T
    } = vc(r, a);
    return n({ getSidebarProps: () => ({
      modelValue: w,
      year: b,
      getModelMonthYear: T,
      selectMonth: d,
      selectYear: v,
      handleYear: J
    }), presetDate: g, toggleYearPicker: (D) => S(0, D) }), (D, F) => (q(), $e(fn, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: Oe(({ instances: $, wrapClass: U }) => [
        (q(!0), ne(Pe, null, We($, (z) => (q(), ne("div", {
          key: z,
          class: Me(U)
        }, [
          D.$slots["top-extra"] ? fe(D.$slots, "top-extra", {
            key: 0,
            value: c(w)
          }) : re("", !0),
          D.$slots["month-year"] ? fe(D.$slots, "month-year", gt({
            key: 1,
            ref_for: !0
          }, {
            year: c(b),
            months: c(f)(z),
            years: c(h)(z),
            selectMonth: c(d),
            selectYear: c(v),
            instance: z
          })) : (q(), $e(qa, {
            key: 2,
            items: c(f)(z),
            "is-last": c(o).autoApply && !c(i).keepActionRow,
            height: c(i).modeHeight,
            "no-overlay-focus": !!(e.noOverlayFocus || c(o).textInput),
            "use-relative": "",
            type: "month",
            onSelected: (Z) => c(d)(Z, z),
            onHoverValue: (Z) => c(u)(Z, z)
          }, at({
            header: Oe(() => [
              ft(vl, {
                items: c(h)(z),
                instance: z,
                "show-year-picker": c(_)[z],
                year: c(b)(z),
                "is-disabled": (Z) => c(p)(z, Z),
                onHandleYear: (Z) => c(J)(z, Z),
                onYearSelect: (Z) => c(N)(Z, z),
                onToggleYearPicker: (Z) => c(S)(z, Z == null ? void 0 : Z.flow, Z == null ? void 0 : Z.show)
              }, at({ _: 2 }, [
                We(c(m), (Z, j) => ({
                  name: Z,
                  fn: Oe((Y) => [
                    fe(D.$slots, Z, gt({ ref_for: !0 }, Y))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            _: 2
          }, [
            D.$slots["month-overlay-value"] ? {
              name: "item",
              fn: Oe(({ item: Z }) => [
                fe(D.$slots, "month-overlay-value", {
                  text: Z.text,
                  value: Z.value
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
}), yc = (e, n) => {
  const {
    rootEmit: t,
    getDate: a,
    state: r,
    modelValue: l,
    rootProps: s,
    defaults: { highlight: o, multiDates: i, filters: m, range: f, safeDates: h }
  } = Ye(), { getYears: b } = cn(), { isDateBetween: p, resetDate: _, resetDateTime: w, getYearFromDate: g, checkHighlightYear: u, groupListAndMap: d } = ot(), { checkRangeAutoApply: v, setMonthOrYearRange: S } = mn(), { checkMinMaxValue: N, checkMinMaxRange: J } = bt();
  Va(() => {
    r.isTextInputDate && (D.value = De(a(s.startDate)));
  });
  const T = he(null), D = he();
  et(() => {
    s.startDate && (l.value && s.focusStartDate || !l.value) && (D.value = De(a(s.startDate)));
  });
  const F = (Y) => Array.isArray(l.value) ? l.value.some((H) => De(H) === Y) : l.value ? De(l.value) === Y : !1, $ = (Y) => f.value.enabled && Array.isArray(l.value) ? p(l.value, T.value, j(Y)) : !1, U = (Y) => {
    var H;
    return (H = h.value.allowedDates) != null && H.size ? h.value.allowedDates.has(`${Y}`) : !0;
  }, z = (Y) => h.value.disabledDates instanceof Map ? h.value.disabledDates.size ? h.value.disabledDates.has(`${Y}`) : !1 : typeof h.value.disabledDates == "function" ? h.value.disabledDates(Dt(w(pa(a())), Y)) : !0, Z = X(() => d(b(), (Y) => {
    const H = F(Y.value), P = N(
      Y.value,
      g(h.value.minDate),
      g(h.value.maxDate)
    ) || m.value.years.includes(Y.value) || !U(Y.value) || z(Y.value), C = $(Y.value) && !H, W = u(o.value, Y.value);
    return { active: H, disabled: P, isBetween: C, highlighted: W };
  })), j = (Y) => Dt(_(pa(a())), Y);
  return {
    groupedYears: Z,
    focusYear: D,
    setHoverValue: (Y) => {
      T.value = Dt(_(a()), Y);
    },
    selectYear: (Y) => {
      var H;
      if (t("update-month-year", { instance: 0, year: Y, month: Number.NaN }), i.value.enabled)
        return l.value ? Array.isArray(l.value) && (((H = l.value) == null ? void 0 : H.map((P) => De(P))).includes(Y) ? l.value = l.value.filter((P) => De(P) !== Y) : l.value.push(Dt(w(a()), Y))) : l.value = [Dt(w(pa(a())), Y)], n("auto-apply", !0);
      f.value.enabled ? J(j(Y), l.value) && (l.value = S(j(Y)), dt().then(() => {
        v(l.value, n, l.value.length < 2);
      })) : (l.value = j(Y), n("auto-apply"));
    }
  };
}, gc = /* @__PURE__ */ Ke({
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
    } = Ye(), { groupedYears: i, focusYear: m, selectYear: f, setHoverValue: h } = yc(r, a);
    return n({ getSidebarProps: () => ({
      modelValue: l,
      selectYear: f
    }) }), (b, p) => (q(), ne("div", null, [
      b.$slots["top-extra"] ? fe(b.$slots, "top-extra", {
        key: 0,
        value: c(l)
      }) : re("", !0),
      b.$slots["month-year"] ? fe(b.$slots, "month-year", mt(gt({ key: 1 }, {
        years: c(i),
        selectYear: c(f)
      }))) : (q(), $e(qa, {
        key: 2,
        items: c(i),
        "is-last": c(o).autoApply && !c(s).keepActionRow,
        height: c(s).modeHeight,
        "no-overlay-focus": !!(e.noOverlayFocus || c(o).textInput),
        "focus-value": c(m),
        type: "year",
        "use-relative": "",
        onSelected: c(f),
        onHoverValue: c(h)
      }, at({ _: 2 }, [
        b.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Oe(({ item: _ }) => [
            fe(b.$slots, "year-overlay-value", {
              text: _.text,
              value: _.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), wc = {
  key: 0,
  class: "dp__time_input"
}, bc = ["data-compact", "data-collapsed"], kc = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], _c = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], Dc = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], xc = { key: 0 }, Mc = ["aria-label", "data-compact"], Tc = /* @__PURE__ */ Ke({
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
    const a = t, r = e, { setTimePickerElements: l, setTimePickerBackRef: s } = Ut(), {
      getDate: o,
      rootEmit: i,
      rootProps: m,
      defaults: { ariaLabels: f, filters: h, config: b, range: p, multiCalendars: _, timeConfig: w }
    } = Ye(), { checkKeyDown: g, hoursToAmPmHours: u } = Je(), { boolHtmlAttribute: d } = xa(), { sanitizeTime: v, groupListAndMap: S } = ot(), { transitionName: N, showTransition: J } = Ha(), T = aa({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), D = he("AM"), F = he(null), $ = he([]), U = he(), z = he(!1);
    et(() => {
      a("mounted");
    });
    const Z = (y) => Se(o(), {
      hours: y.hours,
      minutes: y.minutes,
      seconds: w.value.enableSeconds ? y.seconds : 0,
      milliseconds: 0
    }), j = X(
      () => (y) => ie(y, r[y]) || H(y, r[y])
    ), Y = X(() => ({ hours: r.hours, minutes: r.minutes, seconds: r.seconds })), H = (y, G) => p.value.enabled && !p.value.disableTimeRangeValidation ? !r.validateTime(y, G) : !1, P = (y, G) => {
      if (p.value.enabled && !p.value.disableTimeRangeValidation) {
        const de = G ? +w.value[`${y}Increment`] : -+w.value[`${y}Increment`], K = r[y] + de;
        return !r.validateTime(y, K);
      }
      return !1;
    }, C = X(() => (y) => !ue(+r[y] + +w.value[`${y}Increment`], y) || P(y, !0)), W = X(() => (y) => !ue(+r[y] - +w.value[`${y}Increment`], y) || P(y, !1)), E = (y, G) => jr(Se(o(), y), G), Q = (y, G) => Xi(Se(o(), y), G), se = X(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !w.value.timePickerInline,
        dp__time_col_reg_block: !w.value.enableSeconds && w.value.is24 && !w.value.timePickerInline,
        dp__time_col_reg_inline: !w.value.enableSeconds && w.value.is24 && w.value.timePickerInline,
        dp__time_col_reg_with_button: !w.value.enableSeconds && !w.value.is24,
        dp__time_col_sec: w.value.enableSeconds && w.value.is24,
        dp__time_col_sec_with_button: w.value.enableSeconds && !w.value.is24
      })
    ), ce = X(
      () => w.value.timePickerInline && p.value.enabled && !_.value.count
    ), ve = X(() => {
      const y = [{ type: "hours" }];
      return w.value.enableMinutes && y.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), w.value.enableSeconds && y.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), y;
    }), be = X(() => ve.value.filter((y) => !y.separator)), xe = X(() => (y) => {
      if (y === "hours") {
        const G = oe(+r.hours);
        return { text: G < 10 ? `0${G}` : `${G}`, value: G };
      }
      return { text: r[y] < 10 ? `0${r[y]}` : `${r[y]}`, value: r[y] };
    }), ie = (y, G) => {
      var K;
      if (!r.disabledTimesConfig) return !1;
      const de = r.disabledTimesConfig(r.order, y === "hours" ? G : void 0);
      return de[y] ? !!((K = de[y]) != null && K.includes(G)) : !0;
    }, ye = (y, G) => G !== "hours" || D.value === "AM" ? y : y + 12, B = (y) => {
      const G = w.value.is24 ? 24 : 12, de = y === "hours" ? G : 60, K = +w.value[`${y}GridIncrement`], _e = y === "hours" && !w.value.is24 ? K : 0, we = [];
      for (let Le = _e; Le < de; Le += K)
        we.push({
          value: w.value.is24 ? Le : ye(Le, y),
          text: Le < 10 ? `0${Le}` : `${Le}`
        });
      return y === "hours" && !w.value.is24 && we.unshift({ value: D.value === "PM" ? 12 : 0, text: "12" }), S(we, (Le) => ({ active: !1, disabled: h.value.times[y].includes(Le.value) || !ue(Le.value, y) || ie(y, Le.value) || H(y, Le.value) }));
    }, x = (y) => y >= 0 ? y : 59, ee = (y) => y >= 0 ? y : 23, ue = (y, G) => {
      const de = m.minTime ? Z(v(m.minTime)) : null, K = m.maxTime ? Z(v(m.maxTime)) : null, _e = Z(
        v(
          Y.value,
          G,
          G === "minutes" || G === "seconds" ? x(y) : ee(y)
        )
      );
      return de && K ? (ba(_e, K) || da(_e, K)) && (la(_e, de) || da(_e, de)) : de ? la(_e, de) || da(_e, de) : K ? ba(_e, K) || da(_e, K) : !0;
    }, O = (y) => w.value[`no${y[0].toUpperCase() + y.slice(1)}Overlay`], M = (y) => {
      O(y) || (T[y] = !T[y], T[y] ? (z.value = !0, a("overlay-opened", y)) : (z.value = !1, a("overlay-closed", y)));
    }, k = (y) => y === "hours" ? Yt : y === "minutes" ? Nt : zt, V = () => {
      U.value && clearTimeout(U.value);
    }, le = (y, G = !0, de) => {
      const K = G ? E : Q, _e = G ? +w.value[`${y}Increment`] : -+w.value[`${y}Increment`];
      ue(+r[y] + _e, y) && a(
        `update:${y}`,
        k(y)(
          K({ [y]: +r[y] }, { [y]: +w.value[`${y}Increment`] })
        )
      ), !(de != null && de.keyboard) && b.value.timeArrowHoldThreshold && (U.value = setTimeout(() => {
        le(y, G);
      }, b.value.timeArrowHoldThreshold));
    }, oe = (y) => w.value.is24 ? y : (y >= 12 ? D.value = "PM" : D.value = "AM", u(y)), L = () => {
      D.value === "PM" ? (D.value = "AM", a("update:hours", r.hours - 12)) : (D.value = "PM", a("update:hours", r.hours + 12)), i("am-pm-change", D.value);
    }, ae = (y) => {
      T[y] = !0;
    }, I = (y, G, de) => {
      if (y && m.arrowNavigation) {
        Array.isArray($.value[G]) ? $.value[G][de] = y : $.value[G] = [y];
        const K = $.value.reduce(
          (_e, we) => we.map((Le, nt) => [..._e[nt] || [], we[nt]]),
          []
        );
        s(r.closeTimePickerBtn), F.value && (K[1] = K[1].concat(F.value)), l(K, r.order);
      }
    }, A = (y, G) => (M(y), a(`update:${y}`, G));
    return n({ openChildCmp: ae }), (y, G) => {
      var de;
      return c(m).disabled ? re("", !0) : (q(), ne("div", wc, [
        (q(!0), ne(Pe, null, We(ve.value, (K, _e) => {
          var we, Le, nt;
          return q(), ne("div", {
            key: _e,
            class: Me(se.value),
            "data-compact": ce.value && !c(w).enableSeconds,
            "data-collapsed": ce.value && c(w).enableSeconds
          }, [
            K.separator ? (q(), ne(Pe, { key: 0 }, [
              z.value ? re("", !0) : (q(), ne(Pe, { key: 0 }, [
                Wt(":")
              ], 64))
            ], 64)) : (q(), ne(Pe, { key: 1 }, [
              Ae("button", {
                ref_for: !0,
                ref: (je) => I(je, _e, 0),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !c(w).timePickerInline,
                  dp__inc_dec_button_inline: c(w).timePickerInline,
                  dp__tp_inline_btn_top: c(w).timePickerInline,
                  dp__inc_dec_button_disabled: C.value(K.type),
                  "dp--hidden-el": z.value
                }),
                "data-test-id": `${K.type}-time-inc-btn-${r.order}`,
                "aria-label": (we = c(f)) == null ? void 0 : we.incrementValue(K.type),
                tabindex: "0",
                onKeydown: (je) => c(g)(je, () => le(K.type, !0, { keyboard: !0 }), !0),
                onClick: (je) => c(b).timeArrowHoldThreshold ? void 0 : le(K.type, !0),
                onMousedown: (je) => c(b).timeArrowHoldThreshold ? le(K.type, !0) : void 0,
                onMouseup: V
              }, [
                c(w).timePickerInline ? (q(), ne(Pe, { key: 1 }, [
                  y.$slots["tp-inline-arrow-up"] ? fe(y.$slots, "tp-inline-arrow-up", { key: 0 }) : (q(), ne(Pe, { key: 1 }, [
                    G[2] || (G[2] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    G[3] || (G[3] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (q(), ne(Pe, { key: 0 }, [
                  y.$slots["arrow-up"] ? fe(y.$slots, "arrow-up", { key: 0 }) : re("", !0),
                  y.$slots["arrow-up"] ? re("", !0) : (q(), $e(c(fl), { key: 1 }))
                ], 64))
              ], 42, kc),
              Ae("button", {
                ref_for: !0,
                ref: (je) => I(je, _e, 1),
                type: "button",
                "aria-label": `${xe.value(K.type).text}-${(Le = c(f)) == null ? void 0 : Le.openTpOverlay(K.type)}`,
                class: Me({
                  dp__time_display: !0,
                  dp__time_display_block: !c(w).timePickerInline,
                  dp__time_display_inline: c(w).timePickerInline,
                  "dp--time-invalid": j.value(K.type),
                  "dp--time-overlay-btn": !j.value(K.type),
                  "dp--hidden-el": z.value
                }),
                disabled: c(d)(O(K.type)),
                tabindex: "0",
                "data-test-id": `${K.type}-toggle-overlay-btn-${r.order}`,
                onKeydown: (je) => c(g)(je, () => M(K.type), !0),
                onClick: (je) => M(K.type)
              }, [
                y.$slots[K.type] ? fe(y.$slots, K.type, {
                  key: 0,
                  text: xe.value(K.type).text,
                  value: xe.value(K.type).value
                }) : re("", !0),
                y.$slots[K.type] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                  Wt(st(xe.value(K.type).text), 1)
                ], 64))
              ], 42, _c),
              Ae("button", {
                ref_for: !0,
                ref: (je) => I(je, _e, 2),
                type: "button",
                class: Me({
                  dp__btn: !0,
                  dp__inc_dec_button: !c(w).timePickerInline,
                  dp__inc_dec_button_inline: c(w).timePickerInline,
                  dp__tp_inline_btn_bottom: c(w).timePickerInline,
                  dp__inc_dec_button_disabled: W.value(K.type),
                  "dp--hidden-el": z.value
                }),
                "data-test-id": `${K.type}-time-dec-btn-${r.order}`,
                "aria-label": (nt = c(f)) == null ? void 0 : nt.decrementValue(K.type),
                tabindex: "0",
                onKeydown: (je) => c(g)(je, () => le(K.type, !1, { keyboard: !0 }), !0),
                onClick: (je) => c(b).timeArrowHoldThreshold ? void 0 : le(K.type, !1),
                onMousedown: (je) => c(b).timeArrowHoldThreshold ? le(K.type, !1) : void 0,
                onMouseup: V
              }, [
                c(w).timePickerInline ? (q(), ne(Pe, { key: 1 }, [
                  y.$slots["tp-inline-arrow-down"] ? fe(y.$slots, "tp-inline-arrow-down", { key: 0 }) : (q(), ne(Pe, { key: 1 }, [
                    G[4] || (G[4] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    G[5] || (G[5] = Ae("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (q(), ne(Pe, { key: 0 }, [
                  y.$slots["arrow-down"] ? fe(y.$slots, "arrow-down", { key: 0 }) : re("", !0),
                  y.$slots["arrow-down"] ? re("", !0) : (q(), $e(c(ml), { key: 1 }))
                ], 64))
              ], 42, Dc)
            ], 64))
          ], 10, bc);
        }), 128)),
        c(w).is24 ? re("", !0) : (q(), ne("div", xc, [
          y.$slots["am-pm-button"] ? fe(y.$slots, "am-pm-button", {
            key: 0,
            toggle: L,
            value: D.value
          }) : re("", !0),
          y.$slots["am-pm-button"] ? re("", !0) : (q(), ne("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: F,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (de = c(f)) == null ? void 0 : de.amPmButton,
            tabindex: "0",
            "data-compact": ce.value,
            onClick: L,
            onKeydown: G[0] || (G[0] = (K) => c(g)(K, () => L(), !0))
          }, st(D.value), 41, Mc))
        ])),
        (q(!0), ne(Pe, null, We(be.value, (K, _e) => (q(), $e(Da, {
          key: _e,
          name: c(N)(T[K.type]),
          css: c(J)
        }, {
          default: Oe(() => {
            var we, Le;
            return [
              T[K.type] ? (q(), $e(qa, {
                key: 0,
                items: B(K.type),
                "is-last": c(m).autoApply && !c(b).keepActionRow,
                type: K.type,
                "aria-labels": c(f),
                "overlay-label": (Le = (we = c(f)).timeOverlay) == null ? void 0 : Le.call(we, K.type),
                onSelected: (nt) => A(K.type, nt),
                onToggle: (nt) => M(K.type),
                onResetFlow: G[1] || (G[1] = (nt) => y.$emit("reset-flow"))
              }, at({
                "button-icon": Oe(() => [
                  y.$slots["clock-icon"] ? fe(y.$slots, "clock-icon", { key: 0 }) : re("", !0),
                  y.$slots["clock-icon"] ? re("", !0) : (q(), $e(Nn(c(w).timePickerInline ? c(La) : c(dl)), { key: 1 }))
                ]),
                _: 2
              }, [
                y.$slots[`${K.type}-overlay-value`] ? {
                  name: "item",
                  fn: Oe(({ item: nt }) => [
                    fe(y.$slots, `${K.type}-overlay-value`, {
                      text: nt.text,
                      value: nt.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                y.$slots[`${K.type}-overlay-header`] ? {
                  name: "header",
                  fn: Oe(() => [
                    fe(y.$slots, `${K.type}-overlay-header`, {
                      toggle: () => M(K.type)
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
}), Pc = ["data-dp-mobile"], Oc = ["aria-label", "tabindex"], Ac = ["role", "aria-label", "tabindex"], Sc = ["aria-label"], yl = /* @__PURE__ */ Ke({
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
      defaults: { ariaLabels: i, textInput: m, config: f, range: h, timeConfig: b }
    } = Ye(), { isModelAuto: p } = ot(), { checkKeyDown: _, findFocusableEl: w } = Je(), { buildMatrix: g, setTimePicker: u } = Ut(), { transitionName: d, showTransition: v } = Ha(), { hideNavigationButtons: S } = dn(), { mapSlots: N } = Gt(), { isMobile: J } = un(), T = Qt(), D = Fe("overlay"), F = Fe("open-tp-btn"), $ = Fe("close-tp-btn"), U = Fe("tp-input"), z = he(!1);
    et(() => {
      a("mount"), !o.timePicker && o.arrowNavigation ? g([Ze(F.value)], "time") : u(!0, o.timePicker);
    });
    const Z = X(() => h.value.enabled && o.modelAuto ? p(s.value) : !0), j = he(!1), Y = (ie) => ({
      hours: Array.isArray(r.hours) ? r.hours[ie] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[ie] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[ie] : r.seconds
    }), H = X(() => {
      const ie = [];
      if (h.value.enabled)
        for (let ye = 0; ye < 2; ye++)
          ie.push(Y(ye));
      else
        ie.push(Y(0));
      return ie;
    }), P = (ie, ye = !1, B = "") => {
      ye || a("reset-flow"), j.value = ie, l("overlay-toggle", { open: ie, overlay: ut.time }), o.arrowNavigation && u(ie), dt(() => {
        var x;
        B !== "" && ((x = U.value) != null && x[0]) && U.value[0].openChildCmp(B);
      });
    }, C = X(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: o.autoApply && !f.value.keepActionRow
    })), W = N(T, "timePicker"), E = (ie, ye, B) => h.value.enabled ? ye === 0 ? [ie, H.value[1][B]] : [H.value[0][B], ie] : ie, Q = (ie) => {
      a("update:hours", ie);
    }, se = (ie) => {
      a("update:minutes", ie);
    }, ce = (ie) => {
      a("update:seconds", ie);
    }, ve = () => {
      if (D.value && !m.value.enabled && !r.noOverlayFocus) {
        const ie = w(D.value);
        ie && ie.focus({ preventScroll: !0 });
      }
    }, be = (ie) => {
      z.value = !1, l("overlay-toggle", { open: !1, overlay: ie });
    }, xe = (ie) => {
      z.value = !0, l("overlay-toggle", { open: !0, overlay: ie });
    };
    return n({ toggleTimePicker: P }), (ie, ye) => {
      var B;
      return q(), ne("div", {
        class: "dp--tp-wrap",
        "data-dp-mobile": c(J)
      }, [
        !c(o).timePicker && !c(b).timePickerInline ? Xa((q(), ne("button", {
          key: 0,
          ref: "open-tp-btn",
          type: "button",
          class: Me({ ...C.value, "dp--hidden-el": j.value }),
          "aria-label": (B = c(i)) == null ? void 0 : B.openTimePicker,
          tabindex: e.noOverlayFocus ? void 0 : 0,
          "data-test-id": "open-time-picker-btn",
          onKeydown: ye[0] || (ye[0] = (x) => c(_)(x, () => P(!0))),
          onClick: ye[1] || (ye[1] = (x) => P(!0))
        }, [
          ie.$slots["clock-icon"] ? fe(ie.$slots, "clock-icon", { key: 0 }) : re("", !0),
          ie.$slots["clock-icon"] ? re("", !0) : (q(), $e(c(dl), { key: 1 }))
        ], 42, Oc)), [
          [Za, !c(S)("time")]
        ]) : re("", !0),
        ft(Da, {
          name: c(d)(j.value),
          css: c(v) && !c(b).timePickerInline
        }, {
          default: Oe(() => {
            var x, ee;
            return [
              j.value || c(o).timePicker || c(b).timePickerInline ? (q(), ne("div", {
                key: 0,
                ref: "overlay",
                role: c(b).timePickerInline ? void 0 : "dialog",
                class: Me({
                  dp__overlay: !c(b).timePickerInline,
                  "dp--overlay-absolute": !c(o).timePicker && !c(b).timePickerInline,
                  "dp--overlay-relative": c(o).timePicker
                }),
                style: ht(c(o).timePicker ? { height: `${c(f).modeHeight}px` } : void 0),
                "aria-label": (x = c(i)) == null ? void 0 : x.timePicker,
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
                    (q(!0), ne(Pe, null, We(H.value, (ue, O) => Xa((q(), $e(Tc, gt({ key: O }, { ref_for: !0 }, {
                      order: O,
                      hours: ue.hours,
                      minutes: ue.minutes,
                      seconds: ue.seconds,
                      closeTimePickerBtn: $.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: O === 0 ? c(h).fixedStart : c(h).fixedEnd
                    }, {
                      ref_for: !0,
                      ref: "tp-input",
                      "validate-time": (M, k) => e.validateTime(M, E(k, O, M)),
                      "onUpdate:hours": (M) => Q(E(M, O, "hours")),
                      "onUpdate:minutes": (M) => se(E(M, O, "minutes")),
                      "onUpdate:seconds": (M) => ce(E(M, O, "seconds")),
                      onMounted: ve,
                      onOverlayClosed: be,
                      onOverlayOpened: xe
                    }), at({ _: 2 }, [
                      We(c(W), (M, k) => ({
                        name: M,
                        fn: Oe((V) => [
                          fe(ie.$slots, M, gt({ ref_for: !0 }, V))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Za, O === 0 ? !0 : Z.value]
                    ])), 128))
                  ], 2)),
                  !c(o).timePicker && !c(b).timePickerInline ? Xa((q(), ne("button", {
                    key: 2,
                    ref: "close-tp-btn",
                    type: "button",
                    class: Me({ ...C.value, "dp--hidden-el": z.value }),
                    "aria-label": (ee = c(i)) == null ? void 0 : ee.closeTimePicker,
                    tabindex: "0",
                    onKeydown: ye[2] || (ye[2] = (ue) => c(_)(ue, () => P(!1))),
                    onClick: ye[3] || (ye[3] = (ue) => P(!1))
                  }, [
                    ie.$slots["calendar-icon"] ? fe(ie.$slots, "calendar-icon", { key: 0 }) : re("", !0),
                    ie.$slots["calendar-icon"] ? re("", !0) : (q(), $e(c(La), { key: 1 }))
                  ], 42, Sc)), [
                    [Za, !c(S)("time")]
                  ]) : re("", !0)
                ], 2)
              ], 14, Ac)) : re("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 8, Pc);
    };
  }
}), gl = (e) => {
  const {
    getDate: n,
    modelValue: t,
    time: a,
    rootProps: r,
    defaults: { range: l, timeConfig: s }
  } = Ye(), { isDateEqual: o, setTime: i } = ot(), m = (T, D) => Array.isArray(a[T]) ? a[T][D] : a[T], f = (T) => s.value.enableSeconds ? Array.isArray(a.seconds) ? a.seconds[T] : a.seconds : 0, h = (T, D) => T ? i(
    D !== void 0 ? { hours: m("hours", D), minutes: m("minutes", D), seconds: f(D) } : { hours: a.hours, minutes: a.minutes, seconds: f() },
    T
  ) : Ki(n(), f(D)), b = (T, D) => {
    a[T] = D;
  }, p = X(() => r.modelAuto && l.value.enabled ? Array.isArray(t.value) ? t.value.length > 1 : !1 : l.value.enabled), _ = (T, D) => {
    const F = Object.fromEntries(
      Object.keys(a).map(($) => $ === T ? [$, D] : [$, a[$]].slice())
    );
    if (p.value && !l.value.disableTimeRangeValidation) {
      const $ = (z) => t.value ? i(
        {
          hours: F.hours[z],
          minutes: F.minutes[z],
          seconds: F.seconds[z]
        },
        t.value[z]
      ) : null, U = (z) => Gi(t.value[z], 0);
      return !(o($(0), $(1)) && (la($(0), U(1)) || ba($(1), U(0))));
    }
    return !0;
  }, w = (T, D) => {
    _(T, D) && (b(T, D), e && e());
  }, g = (T) => {
    w("hours", T);
  }, u = (T) => {
    w("minutes", T);
  }, d = (T) => {
    w("seconds", T);
  }, v = (T, D) => {
    g(T.hours), u(T.minutes), d(T.seconds), t.value && D(t.value);
  }, S = (T) => {
    if (T) {
      const D = Array.isArray(T), F = D ? [+T[0].hours, +T[1].hours] : +T.hours, $ = D ? [+T[0].minutes, +T[1].minutes] : +T.minutes, U = D ? [+(T[0].seconds ?? 0), +(T[1].seconds ?? 0)] : +(T.seconds ?? 0);
      b("hours", F), b("minutes", $), s.value.enableSeconds && b("seconds", U);
    }
  }, N = (T, D) => {
    const F = {
      hours: Array.isArray(a.hours) ? a.hours[T] : a.hours,
      disabledArr: []
    };
    return (D || D === 0) && (F.hours = D), Array.isArray(r.disabledTimes) && (F.disabledArr = l.value.enabled && Array.isArray(r.disabledTimes[T]) ? r.disabledTimes[T] : r.disabledTimes), F;
  }, J = X(() => (T, D) => {
    var F;
    if (Array.isArray(r.disabledTimes)) {
      const { disabledArr: $, hours: U } = N(T, D), z = $.filter((Z) => +Z.hours === U);
      return ((F = z[0]) == null ? void 0 : F.minutes) === "*" ? { hours: [U], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (z == null ? void 0 : z.map((Z) => +Z.minutes)) ?? [],
        seconds: (z == null ? void 0 : z.map((Z) => Z.seconds ? +Z.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    assignTime: b,
    updateHours: g,
    updateMinutes: u,
    updateSeconds: d,
    getSetDateTime: h,
    updateTimeValues: v,
    getSecondsValue: f,
    assignStartTime: S,
    validateTime: _,
    disabledTimesConfig: J
  };
}, $c = (e) => {
  const {
    getDate: n,
    time: t,
    modelValue: a,
    state: r,
    defaults: { startTime: l, range: s, timeConfig: o }
  } = Ye(), { getTimeObj: i } = ot();
  Va(() => {
    r.isTextInputDate && N();
  });
  const { updateTimeValues: m, getSetDateTime: f, assignTime: h, assignStartTime: b, disabledTimesConfig: p, validateTime: _ } = gl(w);
  function w() {
    e("update-flow-step");
  }
  const g = (T) => {
    const { hours: D, minutes: F, seconds: $ } = T;
    return { hours: +D, minutes: +F, seconds: $ ? +$ : 0 };
  }, u = () => {
    if (o.value.startTime) {
      if (Array.isArray(o.value.startTime)) {
        const D = g(o.value.startTime[0]), F = g(o.value.startTime[1]);
        return [Se(n(), D), Se(n(), F)];
      }
      const T = g(o.value.startTime);
      return Se(n(), T);
    }
    return s.value.enabled ? [null, null] : null;
  }, d = () => {
    if (s.value.enabled) {
      const [T, D] = u();
      a.value = [f(T, 0), f(D, 1)];
    } else
      a.value = f(u());
  }, v = (T) => Array.isArray(T) ? [i(n(T[0])), i(n(T[1]))] : [i(T ?? n())], S = (T, D, F) => {
    h("hours", T), h("minutes", D), h("seconds", o.value.enableSeconds ? F : 0);
  }, N = () => {
    const [T, D] = v(a.value);
    return s.value.enabled ? S(
      [T.hours, D.hours],
      [T.minutes, D.minutes],
      [T.seconds, D.seconds]
    ) : S(T.hours, T.minutes, T.seconds);
  };
  et(() => (b(l.value), a.value ? N() : d()));
  const J = () => {
    Array.isArray(a.value) ? a.value = a.value.map((T, D) => T && f(T, D)) : a.value = f(a.value), e("time-update");
  };
  return {
    modelValue: a,
    time: t,
    disabledTimesConfig: p,
    validateTime: _,
    updateTime: (T) => {
      m(T, J);
    }
  };
}, Cc = /* @__PURE__ */ Ke({
  __name: "TimePickerSolo",
  props: {
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  },
  emits: ["time-update", "mount", "reset-flow", "update-flow-step"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = Qt(), { mapSlots: l } = Gt(), s = l(r, "timePicker"), o = Fe("time-input"), { time: i, modelValue: m, disabledTimesConfig: f, updateTime: h, validateTime: b } = $c(a);
    return et(() => {
      a("mount");
    }), n({ getSidebarProps: () => ({
      modelValue: m,
      time: i,
      updateTime: h
    }), toggleTimePicker: (p, _ = !1, w = "") => {
      var g;
      (g = o.value) == null || g.toggleTimePicker(p, _, w);
    } }), (p, _) => (q(), $e(fn, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Oe(({ wrapClass: w }) => [
        Ae("div", {
          class: Me(w)
        }, [
          ft(yl, gt({ ref: "time-input" }, p.$props, {
            hours: c(i).hours,
            minutes: c(i).minutes,
            seconds: c(i).seconds,
            "disabled-times-config": c(f),
            "validate-time": c(b),
            "onUpdate:hours": _[0] || (_[0] = (g) => c(h)({ hours: g, minutes: c(i).minutes, seconds: c(i).seconds })),
            "onUpdate:minutes": _[1] || (_[1] = (g) => c(h)({ hours: c(i).hours, minutes: g, seconds: c(i).seconds })),
            "onUpdate:seconds": _[2] || (_[2] = (g) => c(h)({ hours: c(i).hours, minutes: c(i).minutes, seconds: g })),
            onResetFlow: _[3] || (_[3] = (g) => p.$emit("reset-flow"))
          }), at({ _: 2 }, [
            We(c(s), (g, u) => ({
              name: g,
              fn: Oe((d) => [
                fe(p.$slots, g, mt(At(d)))
              ])
            }))
          ]), 1040, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time"])
        ], 2)
      ]),
      _: 3
    }));
  }
}), Yc = (e, n) => {
  const {
    getDate: t,
    rootProps: a,
    defaults: { filters: r }
  } = Ye(), { validateMonthYearInRange: l, validateMonthYear: s } = bt(), o = (b, p) => {
    let _ = b;
    return r.value.months.includes(Ce(_)) ? (_ = p ? xt(b, 1) : ka(b, 1), o(_, p)) : _;
  }, i = (b, p) => {
    let _ = b;
    return r.value.years.includes(De(_)) ? (_ = p ? Qn(b, 1) : ol(b, 1), i(_, p)) : _;
  }, m = (b, p = !1) => {
    const _ = Se(t(), { month: e.month, year: e.year });
    let w = b ? xt(_, 1) : ka(_, 1);
    a.disableYearSelect && (w = Dt(w, e.year));
    let g = Ce(w), u = De(w);
    r.value.months.includes(g) && (w = o(w, b), g = Ce(w), u = De(w)), r.value.years.includes(u) && (w = i(w, b), u = De(w)), l(g, u, b, a.preventMinMaxNavigation) && f(g, u, p);
  }, f = (b, p, _) => {
    n("update-month-year", { month: b, year: p, fromNav: _ });
  }, h = X(() => (b) => s(
    Se(t(), { month: e.month, year: e.year }),
    a.preventMinMaxNavigation,
    b
  ));
  return { handleMonthYearChange: m, isDisabled: h, updateMonthYear: f };
}, Rc = { class: "dp--header-wrap" }, Ec = {
  key: 0,
  class: "dp__month_year_wrap"
}, Ic = { key: 0 }, Bc = { class: "dp__month_year_wrap" }, Fc = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], Wc = /* @__PURE__ */ Ke({
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
      defaults: { ariaLabels: i, filters: m, config: f, highlight: h, safeDates: b, ui: p }
    } = Ye(), { transitionName: _, showTransition: w } = Ha(), { showLeftIcon: g, showRightIcon: u } = dn(), { buildMatrix: d } = Ut(), { handleMonthYearChange: v, isDisabled: S, updateMonthYear: N } = Yc(r, a), { getMaxMonth: J, getMinMonth: T, getYearFromDate: D, groupListAndMap: F, checkHighlightYear: $, checkHighlightMonth: U } = ot(), { checkKeyDown: z } = Je(), { formatYear: Z } = Kt(), { checkMinMaxValue: j } = bt(), { boolHtmlAttribute: Y } = xa(), H = he(!1), P = he(!1), C = he(!1), W = he([null, null, null, null]);
    et(() => {
      a("mount");
    });
    const E = (M) => ({
      get: () => r[M],
      set: (k) => {
        const V = M === _t.month ? _t.year : _t.month;
        a("update-month-year", { [M]: k, [V]: r[V] }), M === _t.month ? ye(!0) : B(!0);
      }
    }), Q = X(E(_t.month)), se = X(E(_t.year)), ce = X(() => (M) => ({
      month: r.month,
      year: r.year,
      items: M === _t.month ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: N,
      toggle: M === _t.month ? ye : B
    })), ve = X(() => r.months.find((k) => k.value === r.month) || { text: "", value: 0 }), be = X(() => F(r.months, (M) => {
      const k = r.month === M.value, V = j(
        M.value,
        T(r.year, b.value.minDate),
        J(r.year, b.value.maxDate)
      ) || m.value.months.includes(M.value), le = U(h.value, M.value, r.year);
      return { active: k, disabled: V, highlighted: le };
    })), xe = X(() => F(r.years, (M) => {
      const k = r.year === M.value, V = j(
        M.value,
        D(b.value.minDate),
        D(b.value.maxDate)
      ) || m.value.years.includes(M.value), le = $(h.value, M.value);
      return { active: k, disabled: V, highlighted: le };
    })), ie = (M, k, V) => {
      V === void 0 ? M.value = !M.value : M.value = V, M.value ? (C.value = !0, l("overlay-toggle", { open: !0, overlay: k })) : (C.value = !1, l("overlay-toggle", { open: !1, overlay: k }));
    }, ye = (M = !1, k) => {
      x(M), ie(H, ut.month, k);
    }, B = (M = !1, k) => {
      x(M), ie(P, ut.year, k);
    }, x = (M) => {
      M || a("reset-flow");
    }, ee = (M, k) => {
      s.arrowNavigation && (W.value[k] = Ze(M), d(W.value, "monthYear"));
    }, ue = X(() => {
      var M, k, V, le, oe, L;
      return [
        {
          type: _t.month,
          index: 1,
          toggle: ye,
          modelValue: Q.value,
          updateModelValue: (ae) => Q.value = ae,
          text: ve.value.text,
          showSelectionGrid: H.value,
          items: be.value,
          ariaLabel: (M = i.value) == null ? void 0 : M.openMonthsOverlay,
          overlayLabel: ((V = (k = i.value).monthPicker) == null ? void 0 : V.call(k, !0)) ?? void 0
        },
        {
          type: _t.year,
          index: 2,
          toggle: B,
          modelValue: se.value,
          updateModelValue: (ae) => se.value = ae,
          text: Z(r.year),
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
    }), (M, k) => {
      var V, le, oe, L, ae, I;
      return q(), ne("div", Rc, [
        M.$slots["month-year"] ? (q(), ne("div", Ec, [
          fe(M.$slots, "month-year", mt(At({
            month: e.month,
            year: e.year,
            months: e.months,
            years: e.years,
            updateMonthYear: c(N),
            handleMonthYearChange: c(v),
            instance: e.instance,
            isDisabled: c(S)
          })))
        ])) : (q(), ne(Pe, { key: 1 }, [
          M.$slots["top-extra"] ? (q(), ne("div", Ic, [
            fe(M.$slots, "top-extra", { value: c(o) })
          ])) : re("", !0),
          Ae("div", Bc, [
            c(g)(e.instance) && !c(s).vertical ? (q(), $e(Ra, {
              key: 0,
              "aria-label": (V = c(i)) == null ? void 0 : V.prevMonth,
              disabled: c(Y)(c(S)(!1)),
              class: Me((le = c(p)) == null ? void 0 : le.navBtnPrev),
              "el-name": "action-prev",
              onActivate: k[0] || (k[0] = (A) => c(v)(!1, !0)),
              onSetRef: k[1] || (k[1] = (A) => ee(A, 0))
            }, {
              default: Oe(() => [
                M.$slots["arrow-left"] ? fe(M.$slots, "arrow-left", { key: 0 }) : re("", !0),
                M.$slots["arrow-left"] ? re("", !0) : (q(), $e(c(ul), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : re("", !0),
            Ae("div", {
              class: Me(["dp__month_year_wrap", {
                dp__year_disable_select: c(s).disableYearSelect
              }])
            }, [
              (q(!0), ne(Pe, null, We(O.value, (A, y) => (q(), ne(Pe, {
                key: A.type
              }, [
                Ae("button", {
                  ref_for: !0,
                  ref: (G) => ee(G, y + 1),
                  type: "button",
                  "data-dp-element": `overlay-${A.type}`,
                  class: Me(["dp__btn dp__month_year_select", { "dp--hidden-el": C.value }]),
                  "aria-label": `${A.text}-${A.ariaLabel}`,
                  "data-test-id": `${A.type}-toggle-overlay-${e.instance}`,
                  onClick: (G) => A.toggle(!1),
                  onKeydown: (G) => c(z)(G, () => A.toggle(), !0)
                }, [
                  M.$slots[A.type] ? fe(M.$slots, A.type, {
                    key: 0,
                    text: A.text,
                    value: r[A.type]
                  }) : re("", !0),
                  M.$slots[A.type] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                    Wt(st(A.text), 1)
                  ], 64))
                ], 42, Fc),
                ft(Da, {
                  name: c(_)(A.showSelectionGrid),
                  css: c(w)
                }, {
                  default: Oe(() => [
                    A.showSelectionGrid ? (q(), $e(qa, {
                      key: 0,
                      items: A.items,
                      "is-last": c(s).autoApply && !c(f).keepActionRow,
                      "skip-button-ref": !1,
                      type: A.type,
                      "header-refs": [],
                      "menu-wrap-ref": e.menuWrapRef,
                      "overlay-label": A.overlayLabel,
                      onSelected: A.updateModelValue,
                      onToggle: A.toggle
                    }, at({
                      "button-icon": Oe(() => [
                        M.$slots["calendar-icon"] ? fe(M.$slots, "calendar-icon", { key: 0 }) : re("", !0),
                        M.$slots["calendar-icon"] ? re("", !0) : (q(), $e(c(La), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      M.$slots[`${A.type}-overlay-value`] ? {
                        name: "item",
                        fn: Oe(({ item: G }) => [
                          fe(M.$slots, `${A.type}-overlay-value`, {
                            text: G.text,
                            value: G.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      M.$slots[`${A.type}-overlay`] ? {
                        name: "overlay",
                        fn: Oe(() => [
                          fe(M.$slots, `${A.type}-overlay`, gt({ ref_for: !0 }, ce.value(A.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      M.$slots[`${A.type}-overlay-header`] ? {
                        name: "header",
                        fn: Oe(() => [
                          fe(M.$slots, `${A.type}-overlay-header`, {
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
            c(g)(e.instance) && c(s).vertical ? (q(), $e(Ra, {
              key: 1,
              "aria-label": (oe = c(i)) == null ? void 0 : oe.prevMonth,
              "el-name": "action-prev",
              disabled: c(Y)(c(S)(!1)),
              class: Me((L = c(p)) == null ? void 0 : L.navBtnPrev),
              onActivate: k[2] || (k[2] = (A) => c(v)(!1, !0))
            }, {
              default: Oe(() => [
                M.$slots["arrow-up"] ? fe(M.$slots, "arrow-up", { key: 0 }) : re("", !0),
                M.$slots["arrow-up"] ? re("", !0) : (q(), $e(c(fl), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : re("", !0),
            c(u)(e.instance) ? (q(), $e(Ra, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: c(Y)(c(S)(!0)),
              "aria-label": (ae = c(i)) == null ? void 0 : ae.nextMonth,
              class: Me((I = c(p)) == null ? void 0 : I.navBtnNext),
              onActivate: k[3] || (k[3] = (A) => c(v)(!0, !0)),
              onSetRef: k[4] || (k[4] = (A) => ee(A, c(s).disableYearSelect ? 2 : 3))
            }, {
              default: Oe(() => [
                M.$slots[c(s).vertical ? "arrow-down" : "arrow-right"] ? fe(M.$slots, c(s).vertical ? "arrow-down" : "arrow-right", { key: 0 }) : re("", !0),
                M.$slots[c(s).vertical ? "arrow-down" : "arrow-right"] ? re("", !0) : (q(), $e(Nn(c(s).vertical ? c(ml) : c(cl)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : re("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Nc = {
  class: "dp__calendar_header",
  role: "row"
}, Lc = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Hc = ["aria-label"], Vc = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, qc = { class: "dp__cell_inner" }, jc = ["id", "aria-selected", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], zc = /* @__PURE__ */ Ke({
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
      defaults: { transitions: i, config: m, ariaLabels: f, multiCalendars: h, weekNumbers: b, multiDates: p, ui: _ }
    } = Ye(), { buildMultiLevelMatrix: w } = Ut(), { isDateAfter: g, isDateEqual: u, resetDateTime: d, getCellId: v } = ot(), { checkKeyDown: S, checkStopPropagation: N, isTouchDevice: J } = Je(), { formatWeekDay: T } = Kt(), D = Fe("calendar-wrap"), F = Fe("active-tooltip"), $ = he([]), U = he(null), z = he(!0), Z = he(!1), j = he(""), Y = he({
      bottom: "",
      left: "",
      transform: ""
    }), H = he({ left: "50%" });
    Ul(D, {
      onSwipeEnd: (L, ae) => {
        m.value.noSwipe || (o.vertical ? (ae === "up" || ae === "down") && a("handle-swipe", ae === "up" ? "left" : "right") : (ae === "left" || ae === "right") && a("handle-swipe", ae === "right" ? "left" : "right"));
      }
    });
    const P = X(() => o.calendar ? o.calendar(r.mappedDates) : r.mappedDates), C = X(() => o.dayNames ? Array.isArray(o.dayNames) ? o.dayNames : o.dayNames() : oe());
    et(() => {
      a("mount", { cmp: "calendar", dayRefs: $.value }), m.value.monthChangeOnScroll && D.value && D.value.addEventListener("wheel", ue, { passive: !1 });
    }), _a(() => {
      m.value.monthChangeOnScroll && D.value && D.value.removeEventListener("wheel", ue);
    });
    const W = (L) => L ? o.vertical ? "vNext" : "next" : o.vertical ? "vPrevious" : "previous", E = (L, ae) => {
      if (o.transitions) {
        const I = d(Se(l(), { month: r.month, year: r.year }));
        j.value = g(d(Se(l(), { month: L, year: ae })), I) ? i.value[W(!0)] : i.value[W(!1)], z.value = !1, dt(() => {
          z.value = !0;
        });
      }
    }, Q = X(
      () => ({
        ..._.value.calendar
      })
    ), se = (L) => ({ type: "dot", ...L }), ce = X(() => (L) => {
      const ae = se(L);
      return {
        dp__marker_dot: ae.type === "dot",
        dp__marker_line: ae.type === "line"
      };
    }), ve = X(() => (L) => u(L, U.value)), be = X(() => ({
      dp__calendar: !0,
      dp__calendar_next: h.value.count > 0 && r.instance !== 0
    })), xe = X(() => (L) => o.hideOffsetDates ? L.current : !0), ie = async (L, ae) => {
      var de;
      const { width: I, height: A } = L.getBoundingClientRect();
      U.value = ae.value;
      let y = { left: `${I / 2}px` }, G = -50;
      if (await dt(), (de = F.value) == null ? void 0 : de[0]) {
        const { left: K, width: _e } = F.value[0].getBoundingClientRect();
        K < 0 && (y = { left: "0" }, G = 0, H.value.left = `${I / 2}px`), globalThis.innerWidth < K + _e && (y = { right: "0" }, G = 0, H.value.left = `${_e - I / 2}px`);
      }
      Y.value = {
        bottom: `${A}px`,
        ...y,
        transform: `translateX(${G}%)`
      };
    }, ye = async (L, ae, I) => {
      var y, G, de, K, _e;
      const A = Ze((G = (y = $.value) == null ? void 0 : y[ae]) == null ? void 0 : G[I]);
      A && ((de = L.marker) != null && de.customPosition && ((_e = (K = L.marker) == null ? void 0 : K.tooltip) != null && _e.length) ? Y.value = L.marker.customPosition(A) : await ie(A, L), s("tooltip-open", L.marker));
    }, B = async (L, ae, I) => {
      var A, y;
      if (Z.value && p.value.enabled && p.value.dragSelect)
        return a("select-date", L);
      if (a("set-hover-date", L), (y = (A = L.marker) == null ? void 0 : A.tooltip) == null ? void 0 : y.length) {
        if (o.hideOffsetDates && !L.current) return;
        await ye(L, ae, I);
      }
    }, x = (L) => {
      U.value && (U.value = null, Y.value = structuredClone({ bottom: "", left: "", transform: "" }), s("tooltip-close", L.marker));
    }, ee = (L, ae, I) => {
      L && (Array.isArray($.value[ae]) ? $.value[ae][I] = L : $.value[ae] = [L]), o.arrowNavigation && w($.value, "calendar");
    }, ue = (L) => {
      m.value.monthChangeOnScroll && (L.preventDefault(), a("handle-scroll", L));
    }, O = (L) => b.value ? b.value.type === "local" ? Zn(L.value, {
      weekStartsOn: +o.weekStart,
      locale: o.locale
    }) : b.value.type === "iso" ? Kn(L.value) : typeof b.value.type == "function" ? b.value.type(L.value) : "" : "", M = (L) => {
      var I;
      const ae = L[0];
      return (I = b.value) != null && I.hideOnOffsetDates ? L.some((A) => A.current) ? O(ae) : "" : O(ae);
    }, k = (L, ae, I = !0) => {
      !I && J() || (!p.value.enabled || m.value.allowPreventDefault) && (N(L, m.value), a("select-date", ae));
    }, V = (L) => {
      N(L, m.value);
    }, le = (L) => {
      p.value.enabled && p.value.dragSelect ? (Z.value = !0, a("select-date", L)) : p.value.enabled && a("select-date", L);
    }, oe = () => {
      const L = l(), ae = wt(L, { locale: o.locale, weekStartsOn: +o.weekStart }), I = Gn(L, { locale: o.locale, weekStartsOn: +o.weekStart });
      return Un({ start: ae, end: I }).map((A) => T(A));
    };
    return n({ triggerTransition: E }), (L, ae) => (q(), ne("div", {
      class: Me(be.value)
    }, [
      Ae("div", {
        ref: "calendar-wrap",
        class: Me(Q.value),
        role: "grid"
      }, [
        Ae("div", Nc, [
          c(b) ? (q(), ne("div", Lc, st(c(b).label), 1)) : re("", !0),
          (q(!0), ne(Pe, null, We(C.value, (I, A) => {
            var y, G;
            return q(), ne("div", {
              key: A,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test-id": "calendar-header",
              "aria-label": (G = (y = c(f)) == null ? void 0 : y.weekDay) == null ? void 0 : G.call(y, A)
            }, [
              L.$slots["calendar-header"] ? fe(L.$slots, "calendar-header", {
                key: 0,
                day: I,
                index: A
              }) : re("", !0),
              L.$slots["calendar-header"] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                Wt(st(I), 1)
              ], 64))
            ], 8, Hc);
          }), 128))
        ]),
        ae[2] || (ae[2] = Ae("div", { class: "dp__calendar_header_separator" }, null, -1)),
        ft(Da, {
          name: j.value,
          css: !!c(i)
        }, {
          default: Oe(() => [
            z.value ? (q(), ne("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: ae[1] || (ae[1] = (I) => Z.value = !1)
            }, [
              (q(!0), ne(Pe, null, We(P.value, (I, A) => (q(), ne("div", {
                key: A,
                class: "dp__calendar_row",
                role: "row"
              }, [
                c(b) ? (q(), ne("div", Vc, [
                  Ae("div", qc, st(M(I.days)), 1)
                ])) : re("", !0),
                (q(!0), ne(Pe, null, We(I.days, (y, G) => {
                  var de, K, _e;
                  return q(), ne("div", {
                    id: c(v)(y.value),
                    ref_for: !0,
                    ref: (we) => ee(we, A, G),
                    key: G + A,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-selected": (y.classData.dp__active_date || y.classData.dp__range_start || y.classData.dp__range_end) ?? void 0,
                    "aria-disabled": y.classData.dp__cell_disabled || void 0,
                    "aria-label": (K = (de = c(f)) == null ? void 0 : de.day) == null ? void 0 : K.call(de, y),
                    tabindex: !y.current && c(o).hideOffsetDates ? void 0 : 0,
                    "data-test-id": c(v)(y.value),
                    onClick: Ea((we) => k(we, y), ["prevent"]),
                    onTouchend: (we) => k(we, y, !1),
                    onKeydown: (we) => c(S)(we, () => L.$emit("select-date", y)),
                    onMouseenter: (we) => B(y, A, G),
                    onMouseleave: (we) => x(y),
                    onMousedown: (we) => le(y),
                    onMouseup: ae[0] || (ae[0] = (we) => Z.value = !1)
                  }, [
                    Ae("div", {
                      class: Me(["dp__cell_inner", y.classData])
                    }, [
                      L.$slots.day && xe.value(y) ? fe(L.$slots, "day", {
                        key: 0,
                        day: +y.text,
                        date: y.value
                      }) : re("", !0),
                      L.$slots.day ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                        Wt(st(y.text), 1)
                      ], 64)),
                      y.marker && xe.value(y) ? (q(), ne(Pe, { key: 2 }, [
                        L.$slots.marker ? fe(L.$slots, "marker", {
                          key: 0,
                          marker: y.marker,
                          day: +y.text,
                          date: y.value
                        }) : (q(), ne("div", {
                          key: 1,
                          class: Me(ce.value(y.marker)),
                          style: ht(y.marker.color ? { backgroundColor: y.marker.color } : {})
                        }, null, 6))
                      ], 64)) : re("", !0),
                      ve.value(y.value) ? (q(), ne("div", {
                        key: 3,
                        ref_for: !0,
                        ref: "active-tooltip",
                        class: "dp__marker_tooltip",
                        style: ht(Y.value)
                      }, [
                        (_e = y.marker) != null && _e.tooltip ? (q(), ne("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: V
                        }, [
                          (q(!0), ne(Pe, null, We(y.marker.tooltip, (we, Le) => (q(), ne("div", {
                            key: Le,
                            class: "dp__tooltip_text"
                          }, [
                            L.$slots["marker-tooltip"] ? fe(L.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: we,
                              day: y.value
                            }) : re("", !0),
                            L.$slots["marker-tooltip"] ? re("", !0) : (q(), ne(Pe, { key: 1 }, [
                              Ae("div", {
                                class: "dp__tooltip_mark",
                                style: ht(we.color ? { backgroundColor: we.color } : {})
                              }, null, 4),
                              Ae("div", null, st(we.text), 1)
                            ], 64))
                          ]))), 128)),
                          Ae("div", {
                            class: "dp__arrow_bottom_tp",
                            style: ht(H.value)
                          }, null, 4)
                        ])) : re("", !0)
                      ], 4)) : re("", !0)
                    ], 2)
                  ], 40, jc);
                }), 128))
              ]))), 128))
            ], 32)) : re("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), Qc = (e, n, t, a) => {
  const r = he([]), l = he(/* @__PURE__ */ new Date()), s = he(), {
    getDate: o,
    rootEmit: i,
    calendars: m,
    month: f,
    year: h,
    time: b,
    modelValue: p,
    rootProps: _,
    today: w,
    state: g,
    defaults: { multiCalendars: u, startTime: d, range: v, config: S, safeDates: N, multiDates: J, timeConfig: T, flow: D }
  } = Ye(), { validateMonthYearInRange: F, isDisabled: $, isDateRangeAllowed: U, checkMinMaxRange: z } = bt(), { updateTimeValues: Z, getSetDateTime: j, assignTime: Y, assignStartTime: H, validateTime: P, disabledTimesConfig: C } = gl(a), { formatDay: W } = Kt(), { resetDateTime: E, setTime: Q, isDateBefore: se, isDateEqual: ce, getDaysInBetween: ve } = ot(), { checkRangeAutoApply: be, getRangeWithFixedDate: xe, handleMultiDatesSelect: ie, setPresetDate: ye } = mn(), { getMapDate: B } = Je();
  Va(() => V(g.isTextInputDate));
  const x = (R) => !S.value.keepViewOnOffsetClick || R ? !0 : !s.value, ee = (R, te, ge, Te = !1) => {
    var Be, kt, Bt;
    x(Te) && ((Be = m.value)[R] ?? (Be[R] = m.value[R] = { month: 0, year: 0 }), m.value[R].month = te ?? ((kt = m.value[R]) == null ? void 0 : kt.month), m.value[R].year = ge ?? ((Bt = m.value[R]) == null ? void 0 : Bt.year));
  }, ue = () => {
    _.autoApply && n("select-date");
  }, O = () => {
    d.value && H(d.value);
  };
  et(() => {
    p.value || (we(), O()), V(!0), _.focusStartDate && _.startDate && we();
  });
  const M = X(() => {
    var R, te, ge;
    return (te = (R = D.value) == null ? void 0 : R.steps) != null && te.length && !((ge = D.value) != null && ge.partial) ? e.flowStep === D.value.steps.length : !0;
  }), k = () => {
    var R, te, ge;
    _.autoApply && M.value && n("auto-apply", (R = D.value) != null && R.partial ? e.flowStep !== ((ge = (te = D.value) == null ? void 0 : te.steps) == null ? void 0 : ge.length) : !1);
  }, V = (R = !1) => {
    if (p.value)
      return Array.isArray(p.value) ? (r.value = p.value, G(R)) : ae(p.value, R);
    if (u.value.count && R && !_.startDate)
      return L(o(), R);
  }, le = () => Array.isArray(p.value) && v.value.enabled ? Ce(p.value[0]) === Ce(p.value[1] ?? p.value[0]) : !1, oe = (R) => {
    const te = xt(R, 1);
    return { month: Ce(te), year: De(te) };
  }, L = (R = o(), te = !1) => {
    if ((!u.value.count || !u.value.static || te) && ee(0, Ce(R), De(R)), u.value.count && (!p.value || le() || !u.value.solo) && (!u.value.solo || te))
      for (let ge = 1; ge < u.value.count; ge++) {
        const Te = Se(o(), { month: f.value(ge - 1), year: h.value(ge - 1) }), Be = jr(Te, { months: 1 });
        m.value[ge] = { month: Ce(Be), year: De(Be) };
      }
  }, ae = (R, te) => {
    L(R), Y("hours", Yt(R)), Y("minutes", Nt(R)), Y("seconds", zt(R)), u.value.count && te && _e();
  }, I = (R) => {
    if (u.value.count) {
      if (u.value.solo) return 0;
      const te = Ce(R[0]), ge = Ce(R[1]);
      return Math.abs(ge - te) < u.value.count ? 0 : 1;
    }
    return 1;
  }, A = (R, te) => {
    R[1] && v.value.showLastInRange ? L(R[I(R)], te) : L(R[0], te);
    const ge = (Te, Be) => [
      Te(R[0]),
      R != null && R[1] ? Te(R[1]) : b[Be][1]
    ];
    Y("hours", ge(Yt, "hours")), Y("minutes", ge(Nt, "minutes")), Y("seconds", ge(zt, "seconds"));
  }, y = (R, te) => {
    if ((v.value.enabled || _.weekPicker) && !J.value.enabled)
      return A(R, te);
    if (J.value.enabled && te) {
      const ge = R[R.length - 1];
      return ae(ge, te);
    }
  }, G = (R) => {
    const te = p.value;
    y(te, R), u.value.count && u.value.solo && _e();
  }, de = (R, te) => {
    const ge = Se(o(), { month: f.value(te), year: h.value(te) }), Te = R < 0 ? xt(ge, 1) : ka(ge, 1);
    F(Ce(Te), De(Te), R < 0, _.preventMinMaxNavigation) && (ee(te, Ce(Te), De(Te)), i("update-month-year", { instance: te, month: Ce(Te), year: De(Te) }), u.value.count && !u.value.solo && K(te), t());
  }, K = (R) => {
    for (let te = R - 1; te >= 0; te--) {
      const ge = ka(Se(o(), { month: f.value(te + 1), year: h.value(te + 1) }), 1);
      ee(te, Ce(ge), De(ge));
    }
    for (let te = R + 1; te <= u.value.count - 1; te++) {
      const ge = xt(Se(o(), { month: f.value(te - 1), year: h.value(te - 1) }), 1);
      ee(te, Ce(ge), De(ge));
    }
  }, _e = () => {
    if (Array.isArray(p.value) && p.value.length === 2) {
      const R = o(o(p.value[1] ?? xt(p.value[0], 1))), [te, ge] = [Ce(p.value[0]), De(p.value[0])], [Te, Be] = [Ce(p.value[1]), De(p.value[1])];
      (te !== Te || te === Te && ge !== Be) && u.value.solo && ee(1, Ce(R), De(R));
    } else p.value && !Array.isArray(p.value) && (ee(0, Ce(p.value), De(p.value)), L(o()));
  }, we = () => {
    _.startDate && (ee(0, Ce(o(_.startDate)), De(o(_.startDate))), u.value.count && K(0));
  }, Le = (R, te) => {
    if (S.value.monthChangeOnScroll) {
      const ge = Date.now() - l.value.getTime(), Te = Math.abs(R.deltaY);
      let Be = 500;
      Te > 1 && (Be = 100), Te > 100 && (Be = 0), ge > Be && (l.value = /* @__PURE__ */ new Date(), de(
        S.value.monthChangeOnScroll === "inverse" ? R.deltaY : -R.deltaY,
        te
      ));
    }
  }, nt = (R, te, ge = !1) => {
    S.value.monthChangeOnArrows && _.vertical === ge && je(R, te);
  }, je = (R, te) => {
    de(R === "right" ? -1 : 1, te);
  }, hn = (R) => {
    if (N.value.markers)
      return B(R.value, N.value.markers);
  }, vn = (R, te) => {
    switch (_.sixWeeks === !0 ? "append" : _.sixWeeks) {
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
  }, pn = (R, te, ge, Te) => {
    if (_.sixWeeks && R.length < 6) {
      const Be = 6 - R.length, kt = (te.getDay() + 7 - Te) % 7, Bt = 6 - (ge.getDay() + 7 - Te) % 7, [Ta, za] = vn(kt, Bt);
      for (let Pa = 1; Pa <= Be; Pa++)
        if (za ? !!(Pa % 2) == Ta : Ta) {
          const Lt = R[0].days[0], _n = Ma(yt(Lt.value, -7), Ce(te));
          R.unshift({ days: _n });
        } else {
          const Lt = R[R.length - 1], _n = Lt.days[Lt.days.length - 1], Cl = Ma(yt(_n.value, 1), Ce(te));
          R.push({ days: Cl });
        }
    }
    return R;
  }, Ma = (R, te) => {
    const ge = o(R), Te = [];
    for (let Be = 0; Be < 7; Be++) {
      const kt = yt(ge, Be), Bt = Ce(kt) !== te;
      Te.push({
        text: _.hideOffsetDates && Bt ? "" : W(kt),
        value: kt,
        current: !Bt,
        classData: {}
      });
    }
    return Te;
  }, yn = (R, te) => {
    const ge = [], Te = o(new Date(te, R)), Be = o(new Date(te, R + 1, 0)), kt = _.weekStart, Bt = wt(Te, { weekStartsOn: kt }), Ta = (za) => {
      const Pa = Ma(za, R);
      if (ge.push({ days: Pa }), !ge[ge.length - 1].days.some((Lt) => ce(o(Lt.value), E(Be)))) {
        const Lt = yt(za, 7);
        Ta(Lt);
      }
    };
    return Ta(Bt), pn(ge, Te, Be, kt);
  }, gn = (R) => {
    const te = Q(
      { hours: b.hours, minutes: b.minutes, seconds: Et() },
      o(R.value)
    );
    i("date-click", te), J.value.enabled ? ie(te, J.value.limit) : p.value = te, a(), dt().then(() => {
      k();
    });
  }, ja = (R) => v.value.noDisabledRange ? ve(r.value[0], R).some((te) => $(te)) : !1, wn = () => {
    r.value = p.value ? p.value.slice().filter((R) => !!R) : [], r.value.length === 2 && !(v.value.fixedStart || v.value.fixedEnd) && (r.value = []);
  }, bn = (R, te) => {
    const ge = [o(R.value), yt(o(R.value), +v.value.autoRange)];
    U(ge) ? (te && pe(R.value), r.value = ge) : i("invalid-date", R.value);
  }, pe = (R) => {
    const te = Ce(o(R)), ge = De(o(R));
    if (ee(0, te, ge), u.value.count > 0)
      for (let Te = 1; Te < u.value.count; Te++) {
        const Be = oe(
          Se(o(R), { year: h.value(Te - 1), month: f.value(Te - 1) })
        );
        ee(Te, Be.month, Be.year);
      }
  }, Ne = (R) => {
    if (ja(R.value) || !z(R.value, p.value, v.value.fixedStart ? 0 : 1))
      return i("invalid-date", R.value);
    r.value = xe(o(R.value));
  }, tt = (R, te) => {
    if (wn(), v.value.autoRange) return bn(R, te);
    if (v.value.fixedStart || v.value.fixedEnd) return Ne(R);
    r.value[0] ? z(o(R.value), p.value) && !ja(R.value) ? se(o(R.value), o(r.value[0])) ? (r.value.unshift(o(R.value)), i("range-end", r.value[0])) : (r.value[1] = o(R.value), i("range-end", r.value[1])) : i("invalid-date", R.value) : (r.value[0] = o(R.value), i("range-start", r.value[0]));
  }, Et = (R = !0) => T.value.enableSeconds ? Array.isArray(b.seconds) ? R ? b.seconds[0] : b.seconds[1] : b.seconds : 0, It = (R) => {
    r.value[R] = Q(
      {
        hours: b.hours[R],
        minutes: b.minutes[R],
        seconds: Et(R !== 1)
      },
      r.value[R]
    );
  }, kn = () => {
    var R, te;
    r.value[0] && r.value[1] && +((R = r.value) == null ? void 0 : R[0]) > +((te = r.value) == null ? void 0 : te[1]) && (r.value.reverse(), i("range-start", r.value[0]), i("range-end", r.value[1]));
  }, Dl = () => {
    var R, te, ge;
    r.value.length && (r.value[0] && !r.value[1] ? It(0) : (It(0), It(1), a()), kn(), p.value = r.value.slice(), be(
      r.value,
      n,
      r.value.length < 2 || (R = D.value) != null && R.steps.length ? e.flowStep !== ((ge = (te = D.value) == null ? void 0 : te.steps) == null ? void 0 : ge.length) : !1
    ));
  }, xl = (R, te = !1) => {
    if ($(R.value) || !R.current && _.hideOffsetDates)
      return i("invalid-date", R.value);
    if (s.value = structuredClone(R), !v.value.enabled) return gn(R);
    Array.isArray(b.hours) && Array.isArray(b.minutes) && !J.value.enabled && (tt(R, te), Dl());
  }, Ml = (R, te) => {
    var Te, Be;
    ee(R, te.month, te.year, !0), u.value.count && !u.value.solo && K(R), i("update-month-year", { instance: R, month: te.month, year: te.year }), t(u.value.solo ? R : void 0);
    const ge = (Be = (Te = D.value) == null ? void 0 : Te.steps) != null && Be.length ? D.value.steps[e.flowStep] : void 0;
    !te.fromNav && (ge === ut.month || ge === ut.year) && a();
  }, Tl = (R) => {
    ye({
      value: R
    }), ue(), _.multiCalendars && dt().then(() => V(!0));
  }, Pl = () => {
    var te;
    let R = o();
    return (te = _.actionRow) != null && te.nowBtnRound && (R = Ui(R, {
      roundingMethod: _.actionRow.nowBtnRound.rounding ?? "ceil",
      nearestTo: _.actionRow.nowBtnRound.roundTo ?? 15
    })), R;
  }, Ol = () => {
    const R = Pl();
    !v.value.enabled && !J.value.enabled ? p.value = R : p.value && Array.isArray(p.value) && p.value[0] ? J.value.enabled ? p.value = [...p.value, R] : p.value = se(R, p.value[0]) ? [R, p.value[0]] : [p.value[0], R] : p.value = [R], ue();
  }, Al = () => {
    if (Array.isArray(p.value))
      if (J.value.enabled) {
        const R = Sl();
        p.value[p.value.length - 1] = j(R);
      } else
        p.value = p.value.map((R, te) => R && j(R, te));
    else
      p.value = j(p.value);
    n("time-update");
  }, Sl = () => Array.isArray(p.value) && p.value.length ? p.value[p.value.length - 1] : null, $l = (R) => {
    let te = "";
    if (v.value.enabled && Array.isArray(p.value))
      for (const ge of Object.keys(R)) {
        const Te = R[ge];
        Array.isArray(Te) && (b[ge][0] !== Te[0] && (te = "range-start"), b[ge][1] !== Te[1] && (te = "range-start"));
      }
    return te;
  };
  return {
    calendars: m,
    modelValue: p,
    month: f,
    year: h,
    time: b,
    disabledTimesConfig: C,
    today: w,
    validateTime: P,
    getCalendarDays: yn,
    getMarker: hn,
    handleScroll: Le,
    handleSwipe: je,
    handleArrow: nt,
    selectDate: xl,
    updateMonthYear: Ml,
    presetDate: Tl,
    selectCurrentDate: Ol,
    updateTime: (R) => {
      const te = $l(R);
      Z(R, Al), te && i(te, p.value[te === "range-start" ? 0 : 1]);
    },
    assignMonthAndYear: L,
    setStartTime: O
  };
}, Uc = () => {
  const {
    isModelAuto: e,
    matchDate: n,
    isDateAfter: t,
    isDateBefore: a,
    isDateBetween: r,
    isDateEqual: l,
    getWeekFromDate: s,
    getBeforeAndAfterInRange: o
  } = ot(), {
    getDate: i,
    today: m,
    rootProps: f,
    defaults: { multiCalendars: h, multiDates: b, ui: p, highlight: _, safeDates: w, range: g },
    modelValue: u
  } = Ye(), { isDisabled: d } = bt(), v = he(null), S = (k) => {
    !k.current && f.hideOffsetDates || (v.value = k.value);
  }, N = () => {
    v.value = null;
  }, J = (k) => Array.isArray(u.value) && g.value.enabled && u.value[0] && v.value ? k ? t(v.value, u.value[0]) : a(v.value, u.value[0]) : !0, T = (k, V) => {
    const le = () => u.value ? V ? u.value[0] || null : u.value[1] : null, oe = u.value && Array.isArray(u.value) ? le() : null;
    return l(i(k.value), oe);
  }, D = (k) => {
    const V = Array.isArray(u.value) ? u.value[0] : null;
    return k ? !a(v.value, V) : !0;
  }, F = (k, V = !0) => (g.value.enabled || f.weekPicker) && Array.isArray(u.value) && u.value.length === 2 ? f.hideOffsetDates && !k.current ? !1 : l(i(k.value), u.value[V ? 0 : 1]) : g.value.enabled ? T(k, V) && D(V) || l(k.value, Array.isArray(u.value) ? u.value[0] : null) && J(V) : !1, $ = (k, V) => {
    if (Array.isArray(u.value) && u.value[0] && u.value.length === 1) {
      const le = l(k.value, v.value);
      return V ? t(u.value[0], k.value) && le : a(u.value[0], k.value) && le;
    }
    return !1;
  }, U = (k) => !u.value || f.hideOffsetDates && !k.current ? !1 : g.value.enabled ? f.modelAuto && Array.isArray(u.value) ? l(k.value, u.value[0] ?? m) : !1 : b.value.enabled && Array.isArray(u.value) ? u.value.some((V) => l(V, k.value)) : l(k.value, u.value ? u.value : m), z = (k) => {
    if (g.value.autoRange || f.weekPicker) {
      if (v.value) {
        if (f.hideOffsetDates && !k.current) return !1;
        const V = yt(v.value, +g.value.autoRange), le = s(i(v.value), f.weekStart);
        return f.weekPicker ? l(le[1], i(k.value)) : l(V, i(k.value));
      }
      return !1;
    }
    return !1;
  }, Z = (k) => {
    if (g.value.autoRange || f.weekPicker) {
      if (v.value) {
        const V = yt(v.value, +g.value.autoRange);
        if (f.hideOffsetDates && !k.current) return !1;
        const le = s(i(v.value), f.weekStart);
        return f.weekPicker ? t(k.value, le[0]) && a(k.value, le[1]) : t(k.value, v.value) && a(k.value, V);
      }
      return !1;
    }
    return !1;
  }, j = (k) => {
    if (g.value.autoRange || f.weekPicker) {
      if (v.value) {
        if (f.hideOffsetDates && !k.current) return !1;
        const V = s(i(v.value), f.weekStart);
        return f.weekPicker ? l(V[0], k.value) : l(v.value, k.value);
      }
      return !1;
    }
    return !1;
  }, Y = (k) => r(u.value, v.value, k.value), H = () => f.modelAuto && Array.isArray(u.value) ? !!u.value[0] : !1, P = () => f.modelAuto ? e(u.value) : !0, C = (k) => {
    if (f.weekPicker) return !1;
    const V = g.value.enabled ? !F(k) && !F(k, !1) : !0;
    return !d(k.value) && !U(k) && !(!k.current && f.hideOffsetDates) && V;
  }, W = (k) => g.value.enabled ? f.modelAuto ? H() && U(k) : !1 : U(k), E = (k) => _.value ? n(k.value, w.value.highlight) : !1, Q = (k) => {
    const V = d(k.value);
    return V && (typeof _.value == "function" ? !_.value(k.value, V) : !_.value.options.highlightDisabled);
  }, se = (k) => {
    var V;
    return typeof _.value == "function" ? _.value(k.value) : (V = _.value.weekdays) == null ? void 0 : V.includes(k.value.getDay());
  }, ce = (k) => (g.value.enabled || f.weekPicker) && (!(h.value.count > 0) || k.current) && P() && !(!k.current && f.hideOffsetDates) && !U(k) ? Y(k) : !1, ve = (k) => {
    if (Array.isArray(u.value) && u.value.length === 1) {
      const { before: V, after: le } = o(+g.value.maxRange, u.value[0]);
      return ba(k.value, V) || la(k.value, le);
    }
    return !1;
  }, be = (k) => {
    if (Array.isArray(u.value) && u.value.length === 1) {
      const { before: V, after: le } = o(+g.value.minRange, u.value[0]);
      return r([V, le], u.value[0], k.value);
    }
    return !1;
  }, xe = (k) => g.value.enabled && (g.value.maxRange || g.value.minRange) ? g.value.maxRange && g.value.minRange ? ve(k) || be(k) : g.value.maxRange ? ve(k) : be(k) : !1, ie = (k) => {
    const { isRangeStart: V, isRangeEnd: le } = ee(k), oe = g.value.enabled ? V || le : !1;
    return {
      dp__cell_offset: !k.current,
      dp__pointer: !f.disabled && !(!k.current && f.hideOffsetDates) && !d(k.value) && !xe(k),
      dp__cell_disabled: d(k.value) || xe(k),
      dp__cell_highlight: !Q(k) && (E(k) || se(k)) && !W(k) && !oe && !j(k) && !(ce(k) && f.weekPicker) && !le,
      dp__cell_highlight_active: !Q(k) && (E(k) || se(k)) && W(k),
      dp__today: !f.noToday && l(k.value, m) && k.current,
      "dp--past": a(k.value, m),
      "dp--future": t(k.value, m)
    };
  }, ye = (k) => ({
    dp__active_date: W(k),
    dp__date_hover: C(k)
  }), B = (k) => {
    if (u.value && !Array.isArray(u.value)) {
      const V = s(u.value, f.weekStart);
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
  }, x = (k) => {
    if (u.value && Array.isArray(u.value)) {
      const V = s(u.value[0], f.weekStart), le = u.value[1] ? s(u.value[1], f.weekStart) : [];
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
    const V = h.value.count > 0 ? k.current && F(k) && P() : F(k) && P(), le = h.value.count > 0 ? k.current && F(k, !1) && P() : F(k, !1) && P();
    return { isRangeStart: V, isRangeEnd: le };
  }, ue = (k) => {
    const { isRangeStart: V, isRangeEnd: le } = ee(k);
    return {
      dp__range_start: V,
      dp__range_end: le,
      dp__range_between: ce(k),
      dp__date_hover: l(k.value, v.value) && !V && !le && !f.weekPicker,
      dp__date_hover_start: $(k, !0),
      dp__date_hover_end: $(k, !1)
    };
  }, O = (k) => ({
    ...ue(k),
    dp__cell_auto_range: Z(k),
    dp__cell_auto_range_start: j(k),
    dp__cell_auto_range_end: z(k)
  }), M = (k) => g.value.enabled ? g.value.autoRange ? O(k) : f.modelAuto ? { ...ye(k), ...ue(k) } : f.weekPicker ? x(k) : ue(k) : f.weekPicker ? B(k) : ye(k);
  return {
    setHoverDate: S,
    clearHoverDate: N,
    getDayClassData: (k) => f.hideOffsetDates && !k.current ? {} : {
      ...ie(k),
      ...M(k),
      [p.value.dayClass ? p.value.dayClass(k.value, u.value) : ""]: !0,
      ...p.value.calendarCell
    }
  };
}, Gc = { key: 0 }, Kc = /* @__PURE__ */ Ke({
  __name: "DatePicker",
  props: /* @__PURE__ */ $r({
    flowStep: {},
    collapse: { type: Boolean },
    menuWrapRef: {},
    noOverlayFocus: { type: Boolean }
  }, Qu),
  emits: ["mount", "update-flow-step", "reset-flow", "focus-menu", "select-date", "time-update", "auto-apply"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e, {
      month: l,
      year: s,
      modelValue: o,
      time: i,
      disabledTimesConfig: m,
      today: f,
      validateTime: h,
      getCalendarDays: b,
      getMarker: p,
      handleArrow: _,
      handleScroll: w,
      handleSwipe: g,
      selectDate: u,
      updateMonthYear: d,
      presetDate: v,
      selectCurrentDate: S,
      updateTime: N,
      assignMonthAndYear: J,
      setStartTime: T
    } = Qc(r, a, B, x), D = Qt(), { setHoverDate: F, getDayClassData: $, clearHoverDate: U } = Uc(), {
      getDate: z,
      rootEmit: Z,
      rootProps: j,
      defaults: { multiCalendars: Y, timeConfig: H }
    } = Ye(), { getYears: P, getMonths: C } = cn(), { getCellId: W } = ot(), { mapSlots: E } = Gt(), Q = Fe("calendar-header"), se = Fe("calendar"), ce = Fe("time-picker"), ve = E(D, "calendar"), be = E(D, "monthYear"), xe = E(D, "timePicker"), ie = (oe) => {
      a("mount", oe);
    };
    ct(
      Y,
      (oe, L) => {
        oe.count - L.count > 0 && J();
      },
      { deep: !0 }
    );
    const ye = X(() => (oe) => b(l.value(oe), s.value(oe)).map((L) => ({
      ...L,
      days: L.days.map((ae) => (ae.marker = p(ae), ae.classData = $(ae), ae))
    })));
    function B(oe) {
      var L, ae, I;
      oe || oe === 0 ? (ae = (L = se.value) == null ? void 0 : L[oe]) == null || ae.triggerTransition(l.value(oe), s.value(oe)) : (I = se.value) == null || I.forEach((A, y) => A == null ? void 0 : A.triggerTransition(l.value(y), s.value(y)));
    }
    function x() {
      a("update-flow-step");
    }
    const ee = (oe, L, ae = 0) => {
      var I, A;
      (A = (I = Q.value) == null ? void 0 : I[ae]) == null || A.toggleMonthPicker(oe, L);
    }, ue = (oe, L, ae = 0) => {
      var I, A;
      (A = (I = Q.value) == null ? void 0 : I[ae]) == null || A.toggleYearPicker(oe, L);
    }, O = (oe, L, ae) => {
      var I;
      (I = ce.value) == null || I.toggleTimePicker(oe, L, ae);
    }, M = (oe, L) => {
      var ae;
      if (!j.range) {
        const I = o.value ? o.value : f, A = L ? z(L) : I, y = oe ? wt(A, { weekStartsOn: 1 }) : Gn(A, { weekStartsOn: 1 });
        u({
          value: y,
          current: Ce(A) === l.value(0),
          text: "",
          classData: {}
        }), (ae = document.getElementById(W(y))) == null || ae.focus();
      }
    }, k = (oe) => {
      var L, ae;
      (ae = (L = Q.value) == null ? void 0 : L[0]) == null || ae.handleMonthYearChange(oe, !0);
    }, V = (oe) => {
      d(0, { month: l.value(0), year: s.value(0) + (oe ? 1 : -1), fromNav: !0 });
    }, le = (oe) => {
      Z("overlay-toggle", { open: !1, overlay: oe }), a("focus-menu");
    };
    return n({
      clearHoverDate: U,
      presetDate: v,
      selectCurrentDate: S,
      handleArrow: _,
      updateMonthYear: d,
      setStartTime: T,
      toggleMonthPicker: ee,
      toggleYearPicker: ue,
      toggleTimePicker: O,
      getSidebarProps: () => ({
        modelValue: o,
        month: l,
        year: s,
        time: i,
        updateTime: N,
        updateMonthYear: d,
        selectDate: u,
        presetDate: v
      }),
      changeMonth: k,
      changeYear: V,
      selectWeekDate: M
    }), (oe, L) => (q(), ne(Pe, null, [
      ft(fn, { collapse: e.collapse }, {
        default: Oe(({ instances: ae, wrapClass: I }) => [
          (q(!0), ne(Pe, null, We(ae, (A) => (q(), ne("div", {
            key: A,
            class: Me(I)
          }, [
            c(j).hideMonthYearSelect ? re("", !0) : (q(), $e(Wc, {
              key: 0,
              ref_for: !0,
              ref: "calendar-header",
              months: c(C)(),
              years: c(P)(),
              month: c(l)(A),
              year: c(s)(A),
              instance: A,
              "menu-wrap-ref": e.menuWrapRef,
              onMount: L[0] || (L[0] = (y) => ie(c(ta).header)),
              onResetFlow: L[1] || (L[1] = (y) => oe.$emit("reset-flow")),
              onUpdateMonthYear: (y) => c(d)(A, y),
              onOverlayClosed: le
            }, at({ _: 2 }, [
              We(c(be), (y, G) => ({
                name: y,
                fn: Oe((de) => [
                  fe(oe.$slots, y, gt({ ref_for: !0 }, de))
                ])
              }))
            ]), 1032, ["months", "years", "month", "year", "instance", "menu-wrap-ref", "onUpdateMonthYear"])),
            ft(zc, {
              ref_for: !0,
              ref: "calendar",
              "mapped-dates": ye.value(A),
              instance: A,
              month: c(l)(A),
              year: c(s)(A),
              onSelectDate: (y) => c(u)(y, A !== 1),
              onSetHoverDate: L[2] || (L[2] = (y) => c(F)(y)),
              onHandleScroll: (y) => c(w)(y, A),
              onHandleSwipe: (y) => c(g)(y, A),
              onMount: L[3] || (L[3] = (y) => ie(c(ta).calendar))
            }, at({ _: 2 }, [
              We(c(ve), (y, G) => ({
                name: y,
                fn: Oe((de) => [
                  fe(oe.$slots, y, gt({ ref_for: !0 }, { ...de }))
                ])
              }))
            ]), 1032, ["mapped-dates", "instance", "month", "year", "onSelectDate", "onHandleScroll", "onHandleSwipe"])
          ], 2))), 128))
        ]),
        _: 3
      }, 8, ["collapse"]),
      c(H).enableTimePicker ? (q(), ne("div", Gc, [
        oe.$slots["time-picker"] ? fe(oe.$slots, "time-picker", mt(gt({ key: 0 }, { time: c(i), updateTime: c(N) }))) : (q(), $e(yl, {
          key: 1,
          ref: "time-picker",
          hours: c(i).hours,
          minutes: c(i).minutes,
          seconds: c(i).seconds,
          "disabled-times-config": c(m),
          "validate-time": c(h),
          "no-overlay-focus": e.noOverlayFocus,
          onMount: L[4] || (L[4] = (ae) => ie(c(ta).timePicker)),
          "onUpdate:hours": L[5] || (L[5] = (ae) => c(N)({ hours: ae, minutes: c(i).minutes, seconds: c(i).seconds })),
          "onUpdate:minutes": L[6] || (L[6] = (ae) => c(N)({ hours: c(i).hours, minutes: ae, seconds: c(i).seconds })),
          "onUpdate:seconds": L[7] || (L[7] = (ae) => c(N)({ hours: c(i).hours, minutes: c(i).minutes, seconds: ae })),
          onResetFlow: L[8] || (L[8] = (ae) => oe.$emit("reset-flow"))
        }, at({ _: 2 }, [
          We(c(xe), (ae, I) => ({
            name: ae,
            fn: Oe((A) => [
              fe(oe.$slots, ae, mt(At(A)))
            ])
          }))
        ]), 1032, ["hours", "minutes", "seconds", "disabled-times-config", "validate-time", "no-overlay-focus"]))
      ])) : re("", !0)
    ], 64));
  }
}), Xc = (e, n) => {
  const {
    getDate: t,
    modelValue: a,
    year: r,
    calendars: l,
    defaults: { highlight: s, range: o, multiDates: i }
  } = Ye(), { isDateBetween: m, isDateEqual: f } = ot(), { checkRangeAutoApply: h, handleMultiDatesSelect: b, setMonthOrYearRange: p } = mn();
  Va();
  const { isDisabled: _ } = bt(), { formatQuarterText: w } = Kt(), {
    selectYear: g,
    groupedYears: u,
    showYearPicker: d,
    isDisabled: v,
    toggleYearPicker: S,
    handleYearSelect: N,
    handleYear: J,
    setStartDate: T
  } = pl(n), D = he();
  et(() => {
    T();
  });
  const F = X(() => (P) => a.value ? Array.isArray(a.value) ? a.value.some((C) => _r(P, C)) : _r(a.value, P) : !1), $ = (P) => {
    if (o.value.enabled) {
      if (Array.isArray(a.value)) {
        const C = f(P, a.value[0]) || f(P, a.value[1]);
        return m(a.value, D.value, P) && !C;
      }
      return !1;
    }
    return !1;
  }, U = (P, C) => P.quarter === pr(C) && P.year === De(C), z = (P) => typeof s.value == "function" ? s.value({ quarter: pr(P), year: De(P) }) : s.value.quarters.some((C) => U(C, P)), Z = X(() => (P) => {
    const C = Se(t(), { year: r.value(P) });
    return to({
      start: pa(C),
      end: Kr(C)
    }).map((W) => {
      const E = Zt(W), Q = yr(W), se = _(W), ce = $(E), ve = z(E);
      return {
        text: w(E, Q),
        value: E,
        active: F.value(E),
        highlighted: ve,
        disabled: se,
        isBetween: ce
      };
    });
  }), j = (P) => {
    b(P, i.value.limit), n("auto-apply", !0);
  }, Y = (P) => {
    a.value = p(P), h(a.value, n, a.value.length < 2);
  }, H = (P) => {
    a.value = P, n("auto-apply");
  };
  return {
    groupedYears: u,
    year: r,
    isDisabled: v,
    quarters: Z,
    showYearPicker: d,
    modelValue: a,
    selectYear: g,
    toggleYearPicker: S,
    handleYearSelect: N,
    handleYear: J,
    setHoverDate: (P) => {
      D.value = P;
    },
    selectQuarter: (P, C, W) => {
      if (!W)
        return l.value[C].month = Ce(yr(P)), i.value.enabled ? j(P) : o.value.enabled ? Y(P) : H(P);
    }
  };
}, Zc = { class: "dp--quarter-items" }, Jc = ["data-test-id", "disabled", "onClick", "onMouseover"], ed = /* @__PURE__ */ Ke({
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
    } = Ye(), s = Qt(), { mapSlots: o } = Gt(), { boolHtmlAttribute: i } = xa(), m = o(s, "yearMode"), {
      groupedYears: f,
      year: h,
      isDisabled: b,
      quarters: p,
      modelValue: _,
      showYearPicker: w,
      setHoverDate: g,
      selectQuarter: u,
      toggleYearPicker: d,
      handleYearSelect: v,
      handleYear: S
    } = Xc(r, a);
    return n({ getSidebarProps: () => ({
      modelValue: _,
      year: h,
      selectQuarter: u,
      handleYearSelect: v,
      handleYear: S
    }) }), (N, J) => (q(), $e(fn, {
      collapse: e.collapse,
      stretch: ""
    }, {
      default: Oe(({ instances: T, wrapClass: D }) => [
        (q(!0), ne(Pe, null, We(T, (F) => (q(), ne("div", {
          key: F,
          class: Me(D)
        }, [
          Ae("div", {
            class: "dp-quarter-picker-wrap",
            style: ht({ minHeight: `${c(l).modeHeight}px` })
          }, [
            N.$slots["top-extra"] ? fe(N.$slots, "top-extra", {
              key: 0,
              value: c(_)
            }) : re("", !0),
            Ae("div", null, [
              ft(vl, {
                items: c(f)(F),
                instance: F,
                "show-year-picker": c(w)[F],
                year: c(h)(F),
                "is-disabled": ($) => c(b)(F, $),
                onHandleYear: ($) => c(S)(F, $),
                onYearSelect: ($) => c(v)($, F),
                onToggleYearPicker: ($) => c(d)(F, $ == null ? void 0 : $.flow, $ == null ? void 0 : $.show)
              }, at({ _: 2 }, [
                We(c(m), ($, U) => ({
                  name: $,
                  fn: Oe((z) => [
                    fe(N.$slots, $, gt({ ref_for: !0 }, z))
                  ])
                }))
              ]), 1032, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
            ]),
            Ae("div", Zc, [
              (q(!0), ne(Pe, null, We(c(p)(F), ($, U) => (q(), ne("div", { key: U }, [
                Ae("button", {
                  type: "button",
                  class: Me(["dp--qr-btn", {
                    "dp--qr-btn-active": $.active,
                    "dp--qr-btn-between": $.isBetween,
                    "dp--qr-btn-disabled": $.disabled,
                    "dp--highlighted": $.highlighted
                  }]),
                  "data-test-id": $.value,
                  disabled: c(i)($.disabled),
                  onClick: (z) => c(u)($.value, F, $.disabled),
                  onMouseover: (z) => c(g)($.value)
                }, [
                  N.$slots.quarter ? fe(N.$slots, "quarter", {
                    key: 0,
                    value: $.value,
                    text: $.text
                  }) : (q(), ne(Pe, { key: 1 }, [
                    Wt(st($.text), 1)
                  ], 64))
                ], 42, Jc)
              ]))), 128))
            ])
          ], 4)
        ], 2))), 128))
      ]),
      _: 3
    }, 8, ["collapse"]));
  }
}), td = ["id", "tabindex", "role", "aria-label"], ad = {
  key: 0,
  class: "dp--menu-load-container"
}, nd = {
  key: 1,
  class: "dp--menu-header"
}, rd = ["data-dp-mobile"], ld = {
  key: 0,
  class: "dp__sidebar_left"
}, sd = ["data-dp-mobile"], od = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], id = { class: "dp__instance_calendar" }, ud = {
  key: 2,
  class: "dp__sidebar_right"
}, cd = {
  key: 3,
  class: "dp__action_extra"
}, dd = /* @__PURE__ */ Ke({
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
      defaults: { textInput: o, inline: i, config: m, ui: f, ariaLabels: h },
      setState: b
    } = Ye(), { isMobile: p } = un(), { mapSlots: _ } = Gt(), { handleEventPropagation: w, getElWithin: g, checkStopPropagation: u, checkKeyDown: d } = Je(), { arrowRight: v, arrowLeft: S, arrowDown: N, arrowUp: J } = Ut(), T = Fe("inner-menu"), D = Fe("dp-menu"), F = Fe("dyn-cmp"), $ = he(0), U = he(!1), z = he(!1), { flowStep: Z, updateFlowStep: j, childMount: Y, resetFlow: H, handleFlow: P } = su(F), C = (I) => {
      z.value = !0, m.value.allowPreventDefault && I.preventDefault(), u(I, m.value, !0);
    };
    et(() => {
      U.value = !0, W(), globalThis.addEventListener("resize", W);
      const I = Ze(D);
      I && !o.value.enabled && !i.value.enabled && (b("menuFocused", !0), Q()), I && (I.addEventListener("pointerdown", C), I.addEventListener("mousedown", C)), document.addEventListener("mousedown", ae);
    }), _a(() => {
      globalThis.removeEventListener("resize", W), document.removeEventListener("mousedown", ae);
      const I = Ze(D);
      I && (I.removeEventListener("pointerdown", C), I.removeEventListener("mousedown", C));
    });
    const W = () => {
      const I = Ze(T);
      I && ($.value = I.getBoundingClientRect().width);
    }, E = X(() => s.monthPicker ? pc : s.yearPicker ? gc : s.timePicker ? Cc : s.quarterPicker ? ed : Kc), Q = () => {
      const I = Ze(D);
      I && I.focus({ preventScroll: !0 });
    }, se = X(() => {
      var I;
      return ((I = F.value) == null ? void 0 : I.getSidebarProps()) || {};
    }), ce = _(r, "action"), ve = X(() => s.monthPicker || s.yearPicker ? _(r, "monthYear") : s.timePicker ? _(r, "timePicker") : _(r, "shared")), be = X(() => ({
      dp__menu_disabled: s.disabled,
      dp__menu_readonly: s.readonly,
      "dp-menu-loading": s.loading
    })), xe = X(
      () => ({
        dp__menu: !0,
        dp__menu_index: !i.value.enabled,
        dp__relative: i.value.enabled,
        ...f.value.menu
      })
    ), ie = (I) => {
      u(I, m.value, !0);
    }, ye = (I) => {
      m.value.escClose && (a("close-picker"), w(I, m.value));
    }, B = (I) => {
      if (s.arrowNavigation) {
        if (I === it.up) return J();
        if (I === it.down) return N();
        if (I === it.left) return S();
        if (I === it.right) return v();
      } else I === it.left || I === it.up ? O("handleArrow", it.left, 0, I === it.up) : O("handleArrow", it.right, 0, I === it.down);
    }, x = (I) => {
      b("shiftKeyInMenu", I.shiftKey), !s.hideMonthYearSelect && I.code === Ve.tab && I.target.classList.contains("dp__menu") && l.shiftKeyInMenu && (I.preventDefault(), u(I, m.value, !0), a("close-picker"));
    }, ee = (I) => {
      var A, y, G;
      (A = F.value) == null || A.toggleTimePicker(!1, !1), (y = F.value) == null || y.toggleMonthPicker(!1, !1, I), (G = F.value) == null || G.toggleYearPicker(!1, !1, I);
    }, ue = (I, A = 0) => {
      var y, G, de;
      return I === "month" ? (y = F.value) == null ? void 0 : y.toggleMonthPicker(!1, !0, A) : I === "year" ? (G = F.value) == null ? void 0 : G.toggleYearPicker(!1, !0, A) : I === "time" ? (de = F.value) == null ? void 0 : de.toggleTimePicker(!0, !1) : ee(A);
    }, O = (I, ...A) => {
      var y, G;
      (y = F.value) != null && y[I] && ((G = F.value) == null || G[I](...A));
    }, M = () => {
      O("selectCurrentDate");
    }, k = (I) => {
      O("presetDate", qt(I));
    }, V = () => {
      O("clearHoverDate");
    }, le = (I, A) => {
      O("updateMonthYear", I, A);
    }, oe = (I, A) => {
      I.preventDefault(), B(A);
    }, L = (I) => {
      var A, y, G;
      if (x(I), I.key === Ve.home || I.key === Ve.end)
        return O(
          "selectWeekDate",
          I.key === Ve.home,
          I.target.getAttribute("id")
        );
      switch ((I.key === Ve.pageUp || I.key === Ve.pageDown) && (I.shiftKey ? (O("changeYear", I.key === Ve.pageUp), (A = g(D.value, "overlay-year")) == null || A.focus()) : (O("changeMonth", I.key === Ve.pageUp), (y = g(D.value, I.key === Ve.pageUp ? "action-prev" : "action-next")) == null || y.focus()), I.target.getAttribute("id") && ((G = D.value) == null || G.focus({ preventScroll: !0 }))), I.key) {
        case Ve.esc:
          return ye(I);
        case Ve.arrowLeft:
          return oe(I, it.left);
        case Ve.arrowRight:
          return oe(I, it.right);
        case Ve.arrowUp:
          return oe(I, it.up);
        case Ve.arrowDown:
          return oe(I, it.down);
        default:
          return;
      }
    }, ae = (I) => {
      var A;
      i.value.enabled && !i.value.input && !((A = D.value) != null && A.contains(I.target)) && z.value && (z.value = !1, a("menu-blur"));
    };
    return n({
      updateMonthYear: le,
      switchView: ue,
      onValueCleared: () => {
        var I, A;
        (A = (I = F.value) == null ? void 0 : I.setStartTime) == null || A.call(I);
      },
      handleFlow: P
    }), (I, A) => {
      var y, G, de;
      return q(), ne("div", {
        id: c(s).menuId,
        ref: "dp-menu",
        tabindex: c(i).enabled ? void 0 : "0",
        role: c(i).enabled ? void 0 : "dialog",
        "aria-label": (y = c(h)) == null ? void 0 : y.menu,
        class: Me(xe.value),
        onMouseleave: V,
        onClick: ie,
        onKeydown: L
      }, [
        (c(s).disabled || c(s).readonly) && c(i).enabled || c(s).loading ? (q(), ne("div", {
          key: 0,
          class: Me(be.value)
        }, [
          c(s).loading ? (q(), ne("div", ad, [...A[5] || (A[5] = [
            Ae("span", { class: "dp--menu-loader" }, null, -1)
          ])])) : re("", !0)
        ], 2)) : re("", !0),
        I.$slots["menu-header"] ? (q(), ne("div", nd, [
          fe(I.$slots, "menu-header")
        ])) : re("", !0),
        fe(I.$slots, "arrow"),
        Ae("div", {
          ref: "inner-menu",
          class: Me({
            dp__menu_content_wrapper: ((G = c(s).presetDates) == null ? void 0 : G.length) || !!I.$slots["left-sidebar"] || !!I.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((de = c(s).presetDates) == null ? void 0 : de.length) || !!I.$slots["left-sidebar"] || !!I.$slots["right-sidebar"])
          }),
          "data-dp-mobile": c(p),
          style: ht({ "--dp-menu-width": `${$.value}px` })
        }, [
          I.$slots["left-sidebar"] ? (q(), ne("div", ld, [
            fe(I.$slots, "left-sidebar", mt(At(se.value)))
          ])) : re("", !0),
          c(s).presetDates.length ? (q(), ne("div", {
            key: 1,
            class: Me({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
            "data-dp-mobile": c(p)
          }, [
            (q(!0), ne(Pe, null, We(c(s).presetDates, (K, _e) => (q(), ne(Pe, { key: _e }, [
              K.slot ? fe(I.$slots, K.slot, {
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
                "data-dp-mobile": c(p),
                onClick: Ea((we) => k(K.value), ["prevent"]),
                onKeydown: (we) => c(d)(we, () => k(K.value), !0)
              }, st(K.label), 47, od))
            ], 64))), 128))
          ], 10, sd)) : re("", !0),
          Ae("div", id, [
            (q(), $e(Nn(E.value), {
              ref: "dyn-cmp",
              "flow-step": c(Z),
              collapse: e.collapse,
              "no-overlay-focus": e.noOverlayFocus,
              "menu-wrap-ref": D.value,
              onMount: c(Y),
              onUpdateFlowStep: c(j),
              onResetFlow: c(H),
              onFocusMenu: Q,
              onSelectDate: A[0] || (A[0] = (K) => I.$emit("select-date")),
              onAutoApply: A[1] || (A[1] = (K) => I.$emit("auto-apply", K)),
              onTimeUpdate: A[2] || (A[2] = (K) => I.$emit("time-update"))
            }, at({ _: 2 }, [
              We(ve.value, (K, _e) => ({
                name: K,
                fn: Oe((we) => [
                  fe(I.$slots, K, mt(At({ ...we })))
                ])
              }))
            ]), 1064, ["flow-step", "collapse", "no-overlay-focus", "menu-wrap-ref", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ]),
          I.$slots["right-sidebar"] ? (q(), ne("div", ud, [
            fe(I.$slots, "right-sidebar", mt(At(se.value)))
          ])) : re("", !0),
          I.$slots["action-extra"] ? (q(), ne("div", cd, [
            I.$slots["action-extra"] ? fe(I.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: M
            }) : re("", !0)
          ])) : re("", !0)
        ], 14, rd),
        !c(s).autoApply || c(m).keepActionRow ? (q(), $e(oc, {
          key: 2,
          "menu-mount": U.value,
          "calendar-width": $.value,
          onClosePicker: A[3] || (A[3] = (K) => I.$emit("close-picker")),
          onSelectDate: A[4] || (A[4] = (K) => I.$emit("select-date")),
          onSelectNow: M
        }, at({ _: 2 }, [
          We(c(ce), (K, _e) => ({
            name: K,
            fn: Oe((we) => [
              fe(I.$slots, K, mt(At({ ...we })))
            ])
          }))
        ]), 1032, ["menu-mount", "calendar-width"])) : re("", !0)
      ], 42, td);
    };
  }
}), fd = ["data-dp-mobile"], md = /* @__PURE__ */ Ke({
  __name: "VueDatePicker",
  setup(e, { expose: n }) {
    const {
      rootEmit: t,
      setState: a,
      inputValue: r,
      modelValue: l,
      rootProps: s,
      defaults: { inline: o, config: i, textInput: m, range: f, multiDates: h, teleport: b, floatingConfig: p }
    } = Ye(), { clearArrowNav: _ } = Ut(), { validateDate: w, isValidTime: g } = bt(), { menuTransition: u, showTransition: d } = Ha(), { isMobile: v } = un(), { mapSlots: S } = Gt(), { findNextFocusableElement: N, getNumVal: J } = Je(), T = Qt(), D = he(!1), F = he(o.value.enabled || s.centered), $ = nr(s, "modelValue"), U = nr(s, "timezone"), z = Fe("dp-menu-wrap"), Z = Fe("dp-menu"), j = Fe("input-cmp"), Y = Fe("picker-wrapper"), H = Fe("menu-arrow"), P = he(!1), C = he(!1), W = he(!1), E = he(!0), Q = (pe) => (p.value.arrow && (p.value.arrow === !0 ? pe.push(dr({ element: H })) : pe.push(dr({ element: p.value.arrow }))), pe), { floatingStyles: se, middlewareData: ce, placement: ve, y: be } = qs(
      j,
      z,
      {
        strategy: p.value.strategy,
        placement: p.value.placement,
        middleware: Q([Fs(p.value.offset), Ns(), Ws()]),
        whileElementsMounted: Bs
      }
    );
    et(() => {
      ye(s.modelValue), dt().then(() => {
        o.value.enabled || globalThis.addEventListener("resize", le);
      }), o.value.enabled && (D.value = !0), globalThis.addEventListener("keyup", oe), globalThis.addEventListener("keydown", L);
    }), _a(() => {
      o.value.enabled || globalThis.removeEventListener("resize", le), globalThis.removeEventListener("keyup", oe), globalThis.removeEventListener("keydown", L);
    });
    const xe = S(T, "all", s.presetDates), ie = S(T, "input");
    ct(
      [$, U],
      () => {
        ye($.value);
      },
      { deep: !0 }
    ), ct([ve, be], () => {
      !o.value.enabled && !s.centered && E.value && (F.value = !1, dt().then(() => {
        E.value = !1, F.value = !0;
      }));
    });
    const { parseExternalModelValue: ye, emitModelValue: B, formatInputValue: x, checkBeforeEmit: ee } = nu(), ue = X(
      () => ({
        dp__main: !0,
        dp__theme_dark: s.dark,
        dp__theme_light: !s.dark,
        dp__flex_display: o.value.enabled,
        "dp--flex-display-collapsed": W.value,
        dp__flex_display_with_input: o.value.input
      })
    ), O = X(() => s.dark ? "dp__theme_dark" : "dp__theme_light"), M = X(() => o.value.enabled && (s.timePicker || s.monthPicker || s.yearPicker || s.quarterPicker)), k = () => {
      var pe, Ne;
      return ((Ne = (pe = j.value) == null ? void 0 : pe.$el) == null ? void 0 : Ne.getBoundingClientRect()) ?? { width: 0, left: 0, right: 0 };
    }, V = () => {
      D.value && i.value.closeOnScroll && we();
    }, le = () => {
      var Ne;
      const pe = ((Ne = Z.value) == null ? void 0 : Ne.$el.getBoundingClientRect().width) ?? 0;
      W.value = document.body.offsetWidth <= pe;
    }, oe = (pe) => {
      pe.key === "Tab" && !o.value.enabled && !s.teleport && i.value.tabOutClosesMenu && (Y.value.contains(document.activeElement) || we()), C.value = pe.shiftKey;
    }, L = (pe) => {
      C.value = pe.shiftKey;
    }, ae = () => {
      !s.disabled && !s.readonly && (E.value = !0, D.value = !0, D.value && t("open"), D.value || _e(), ye(s.modelValue));
    }, I = () => {
      var pe, Ne;
      r.value = "", _e(), (pe = Z.value) == null || pe.onValueCleared(), (Ne = j.value) == null || Ne.setParsedDate(null), t("update:model-value", null), t("cleared"), i.value.closeOnClearValue && we();
    }, A = () => {
      const pe = l.value;
      return !pe || !Array.isArray(pe) && w(pe) ? !0 : Array.isArray(pe) ? h.value.enabled || pe.length === 2 && w(pe[0]) && w(pe[1]) ? !0 : f.value.partialRange && !s.timePicker ? w(pe[0]) : !1 : !1;
    }, y = () => {
      ee() && A() ? (B(), we()) : t("invalid-select");
    }, G = (pe) => {
      de(), B(), i.value.closeOnAutoApply && !pe && we();
    }, de = () => {
      j.value && m.value.enabled && j.value.setParsedDate(l.value);
    }, K = (pe = !1) => {
      s.autoApply && g(l.value) && A() && (f.value.enabled && Array.isArray(l.value) ? (f.value.partialRange || l.value.length === 2) && G(pe) : G(pe));
    }, _e = () => {
      m.value.enabled || (l.value = null);
    }, we = (pe = !1) => {
      E.value = !0, pe && l.value && i.value.setDateOnMenuClose && y(), o.value.enabled || (D.value && (D.value = !1, a("menuFocused", !1), a("shiftKeyInMenu", !1), _(), t("closed"), r.value && ye($.value)), _e(), t("blur"));
    }, Le = (pe, Ne, tt = !1) => {
      if (!pe) {
        l.value = null;
        return;
      }
      const Et = Array.isArray(pe) ? !pe.some((kn) => !w(kn)) : w(pe), It = g(pe);
      Et && It ? (a("isTextInputDate", !0), l.value = pe, Ne ? (P.value = tt, y(), t("text-submit")) : s.autoApply && K(!0), dt().then(() => {
        a("isTextInputDate", !1);
      })) : t("invalid-date", pe);
    }, nt = () => {
      s.autoApply && g(l.value) && B(), de();
    }, je = () => D.value ? we() : ae(), hn = (pe) => {
      l.value = pe;
    }, vn = () => {
      m.value.enabled && (a("isInputFocused", !0), x()), t("focus");
    }, pn = () => {
      var pe;
      m.value.enabled && (a("isInputFocused", !1), ye(s.modelValue), P.value && ((pe = N(Y.value, C.value)) == null || pe.focus())), t("blur");
    }, Ma = (pe, Ne) => {
      Z.value && Z.value.updateMonthYear(Ne ?? 0, {
        month: J(pe.month),
        year: J(pe.year)
      });
    }, yn = (pe) => {
      ye(pe ?? s.modelValue);
    }, gn = (pe, Ne) => {
      var tt;
      (tt = Z.value) == null || tt.switchView(pe, Ne);
    }, ja = (pe, Ne) => {
      if (D.value)
        return i.value.onClickOutside ? i.value.onClickOutside(pe, Ne) : we(!0);
    }, wn = (pe = 0) => {
      var Ne;
      (Ne = Z.value) == null || Ne.handleFlow(pe);
    }, bn = () => z;
    return Ql(z, (pe) => ja(A, pe), {
      ignore: [j]
    }), n({
      closeMenu: we,
      selectDate: y,
      clearValue: I,
      openMenu: ae,
      onScroll: V,
      formatInputValue: x,
      // exposed for testing purposes
      updateInternalModelValue: hn,
      // modify internal modelValue
      setMonthYear: Ma,
      parseModel: yn,
      switchView: gn,
      toggleMenu: je,
      handleFlow: wn,
      getDpWrapMenuRef: bn
    }), (pe, Ne) => (q(), ne("div", {
      ref: "picker-wrapper",
      class: Me(ue.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": c(v)
    }, [
      ft(ac, {
        ref: "input-cmp",
        "is-menu-open": D.value,
        onClear: I,
        onOpen: ae,
        onSetInputDate: Le,
        onSetEmptyDate: c(B),
        onSelectDate: y,
        onToggle: je,
        onClose: we,
        onFocus: vn,
        onBlur: pn,
        onRealBlur: Ne[0] || (Ne[0] = (tt) => c(a)("isInputFocused", !1))
      }, at({ _: 2 }, [
        We(c(ie), (tt, Et) => ({
          name: tt,
          fn: Oe((It) => [
            fe(pe.$slots, tt, mt(At(It)))
          ])
        }))
      ]), 1032, ["is-menu-open", "onSetEmptyDate"]),
      (q(), $e(Wl, {
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
          ft(Da, {
            name: c(u)(c(ve).startsWith("top")),
            css: c(d) && !c(o).enabled && !c(s).centered && F.value
          }, {
            default: Oe(() => [
              D.value && F.value ? (q(), $e(dd, {
                key: 0,
                ref: "dp-menu",
                class: Me({ [O.value]: !0 }),
                "no-overlay-focus": M.value,
                collapse: W.value,
                "get-input-rect": k,
                onClosePicker: we,
                onSelectDate: y,
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
                !c(o).enabled && !c(s).centered && c(p).arrow === !0 ? {
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
    ], 10, fd));
  }
}), wl = /* @__PURE__ */ Ke({
  __name: "VueDatePickerRoot",
  props: /* @__PURE__ */ $r({
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
  }, Uu),
  emits: ["update:model-value", "internal-model-change", "text-submit", "text-input", "open", "closed", "focus", "blur", "cleared", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "invalid-date", "tooltip-open", "tooltip-close", "am-pm-change", "range-start", "range-end", "date-click", "overlay-toggle", "invalid"],
  setup(e, { expose: n, emit: t }) {
    const a = t, r = e;
    lu(r, a);
    const l = Qt(), { mapSlots: s } = Gt(), o = s(l, "root", r.presetDates), i = Fe("date-picker");
    return n(Ku(i)), (m, f) => (q(), $e(md, { ref: "date-picker" }, at({ _: 2 }, [
      We(c(o), (h, b) => ({
        name: h,
        fn: Oe((p) => [
          fe(m.$slots, h, mt(At(p)))
        ])
      }))
    ]), 1536));
  }
}), hd = /* @__PURE__ */ Ke({
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
    return (r, l) => (q(), $e(c(wl), {
      "model-value": e.modelValue,
      "min-date": e.minDate,
      "disabled-dates": e.disabledDates,
      formats: { input: "dd/MM/yyyy" },
      "time-config": { enableTimePicker: !1 },
      "prevent-min-max-navigation": "",
      "auto-apply": "",
      placeholder: e.placeholder,
      "input-class-name": e.inputClass,
      "onUpdate:modelValue": a
    }, null, 8, ["model-value", "min-date", "disabled-dates", "placeholder", "input-class-name"]));
  }
}), vd = /* @__PURE__ */ Ke({
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
    return (r, l) => (q(), $e(c(wl), {
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
var tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bl = { exports: {} };
(function(e, n) {
  (function(t, a) {
    e.exports = a();
  })(tr, function() {
    var t = 1e3, a = 6e4, r = 36e5, l = "millisecond", s = "second", o = "minute", i = "hour", m = "day", f = "week", h = "month", b = "quarter", p = "year", _ = "date", w = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(j) {
      var Y = ["th", "st", "nd", "rd"], H = j % 100;
      return "[" + j + (Y[(H - 20) % 10] || Y[H] || Y[0]) + "]";
    } }, v = function(j, Y, H) {
      var P = String(j);
      return !P || P.length >= Y ? j : "" + Array(Y + 1 - P.length).join(H) + j;
    }, S = { s: v, z: function(j) {
      var Y = -j.utcOffset(), H = Math.abs(Y), P = Math.floor(H / 60), C = H % 60;
      return (Y <= 0 ? "+" : "-") + v(P, 2, "0") + ":" + v(C, 2, "0");
    }, m: function j(Y, H) {
      if (Y.date() < H.date()) return -j(H, Y);
      var P = 12 * (H.year() - Y.year()) + (H.month() - Y.month()), C = Y.clone().add(P, h), W = H - C < 0, E = Y.clone().add(P + (W ? -1 : 1), h);
      return +(-(P + (H - C) / (W ? C - E : E - C)) || 0);
    }, a: function(j) {
      return j < 0 ? Math.ceil(j) || 0 : Math.floor(j);
    }, p: function(j) {
      return { M: h, y: p, w: f, d: m, D: _, h: i, m: o, s, ms: l, Q: b }[j] || String(j || "").toLowerCase().replace(/s$/, "");
    }, u: function(j) {
      return j === void 0;
    } }, N = "en", J = {};
    J[N] = d;
    var T = "$isDayjsObject", D = function(j) {
      return j instanceof z || !(!j || !j[T]);
    }, F = function j(Y, H, P) {
      var C;
      if (!Y) return N;
      if (typeof Y == "string") {
        var W = Y.toLowerCase();
        J[W] && (C = W), H && (J[W] = H, C = W);
        var E = Y.split("-");
        if (!C && E.length > 1) return j(E[0]);
      } else {
        var Q = Y.name;
        J[Q] = Y, C = Q;
      }
      return !P && C && (N = C), C || !P && N;
    }, $ = function(j, Y) {
      if (D(j)) return j.clone();
      var H = typeof Y == "object" ? Y : {};
      return H.date = j, H.args = arguments, new z(H);
    }, U = S;
    U.l = F, U.i = D, U.w = function(j, Y) {
      return $(j, { locale: Y.$L, utc: Y.$u, x: Y.$x, $offset: Y.$offset });
    };
    var z = function() {
      function j(H) {
        this.$L = F(H.locale, null, !0), this.parse(H), this.$x = this.$x || H.x || {}, this[T] = !0;
      }
      var Y = j.prototype;
      return Y.parse = function(H) {
        this.$d = function(P) {
          var C = P.date, W = P.utc;
          if (C === null) return /* @__PURE__ */ new Date(NaN);
          if (U.u(C)) return /* @__PURE__ */ new Date();
          if (C instanceof Date) return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var E = C.match(g);
            if (E) {
              var Q = E[2] - 1 || 0, se = (E[7] || "0").substring(0, 3);
              return W ? new Date(Date.UTC(E[1], Q, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, se)) : new Date(E[1], Q, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, se);
            }
          }
          return new Date(C);
        }(H), this.init();
      }, Y.init = function() {
        var H = this.$d;
        this.$y = H.getFullYear(), this.$M = H.getMonth(), this.$D = H.getDate(), this.$W = H.getDay(), this.$H = H.getHours(), this.$m = H.getMinutes(), this.$s = H.getSeconds(), this.$ms = H.getMilliseconds();
      }, Y.$utils = function() {
        return U;
      }, Y.isValid = function() {
        return this.$d.toString() !== w;
      }, Y.isSame = function(H, P) {
        var C = $(H);
        return this.startOf(P) <= C && C <= this.endOf(P);
      }, Y.isAfter = function(H, P) {
        return $(H) < this.startOf(P);
      }, Y.isBefore = function(H, P) {
        return this.endOf(P) < $(H);
      }, Y.$g = function(H, P, C) {
        return U.u(H) ? this[P] : this.set(C, H);
      }, Y.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, Y.valueOf = function() {
        return this.$d.getTime();
      }, Y.startOf = function(H, P) {
        var C = this, W = !!U.u(P) || P, E = U.p(H), Q = function(B, x) {
          var ee = U.w(C.$u ? Date.UTC(C.$y, x, B) : new Date(C.$y, x, B), C);
          return W ? ee : ee.endOf(m);
        }, se = function(B, x) {
          return U.w(C.toDate()[B].apply(C.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(x)), C);
        }, ce = this.$W, ve = this.$M, be = this.$D, xe = "set" + (this.$u ? "UTC" : "");
        switch (E) {
          case p:
            return W ? Q(1, 0) : Q(31, 11);
          case h:
            return W ? Q(1, ve) : Q(0, ve + 1);
          case f:
            var ie = this.$locale().weekStart || 0, ye = (ce < ie ? ce + 7 : ce) - ie;
            return Q(W ? be - ye : be + (6 - ye), ve);
          case m:
          case _:
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
        var C, W = U.p(H), E = "set" + (this.$u ? "UTC" : ""), Q = (C = {}, C[m] = E + "Date", C[_] = E + "Date", C[h] = E + "Month", C[p] = E + "FullYear", C[i] = E + "Hours", C[o] = E + "Minutes", C[s] = E + "Seconds", C[l] = E + "Milliseconds", C)[W], se = W === m ? this.$D + (P - this.$W) : P;
        if (W === h || W === p) {
          var ce = this.clone().set(_, 1);
          ce.$d[Q](se), ce.init(), this.$d = ce.set(_, Math.min(this.$D, ce.daysInMonth())).$d;
        } else Q && this.$d[Q](se);
        return this.init(), this;
      }, Y.set = function(H, P) {
        return this.clone().$set(H, P);
      }, Y.get = function(H) {
        return this[U.p(H)]();
      }, Y.add = function(H, P) {
        var C, W = this;
        H = Number(H);
        var E = U.p(P), Q = function(ve) {
          var be = $(W);
          return U.w(be.date(be.date() + Math.round(ve * H)), W);
        };
        if (E === h) return this.set(h, this.$M + H);
        if (E === p) return this.set(p, this.$y + H);
        if (E === m) return Q(1);
        if (E === f) return Q(7);
        var se = (C = {}, C[o] = a, C[i] = r, C[s] = t, C)[E] || 1, ce = this.$d.getTime() + H * se;
        return U.w(ce, this);
      }, Y.subtract = function(H, P) {
        return this.add(-1 * H, P);
      }, Y.format = function(H) {
        var P = this, C = this.$locale();
        if (!this.isValid()) return C.invalidDate || w;
        var W = H || "YYYY-MM-DDTHH:mm:ssZ", E = U.z(this), Q = this.$H, se = this.$m, ce = this.$M, ve = C.weekdays, be = C.months, xe = C.meridiem, ie = function(x, ee, ue, O) {
          return x && (x[ee] || x(P, W)) || ue[ee].slice(0, O);
        }, ye = function(x) {
          return U.s(Q % 12 || 12, x, "0");
        }, B = xe || function(x, ee, ue) {
          var O = x < 12 ? "AM" : "PM";
          return ue ? O.toLowerCase() : O;
        };
        return W.replace(u, function(x, ee) {
          return ee || function(ue) {
            switch (ue) {
              case "YY":
                return String(P.$y).slice(-2);
              case "YYYY":
                return U.s(P.$y, 4, "0");
              case "M":
                return ce + 1;
              case "MM":
                return U.s(ce + 1, 2, "0");
              case "MMM":
                return ie(C.monthsShort, ce, be, 3);
              case "MMMM":
                return ie(be, ce);
              case "D":
                return P.$D;
              case "DD":
                return U.s(P.$D, 2, "0");
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
                return U.s(Q, 2, "0");
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
                return U.s(se, 2, "0");
              case "s":
                return String(P.$s);
              case "ss":
                return U.s(P.$s, 2, "0");
              case "SSS":
                return U.s(P.$ms, 3, "0");
              case "Z":
                return E;
            }
            return null;
          }(x) || E.replace(":", "");
        });
      }, Y.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, Y.diff = function(H, P, C) {
        var W, E = this, Q = U.p(P), se = $(H), ce = (se.utcOffset() - this.utcOffset()) * a, ve = this - se, be = function() {
          return U.m(E, se);
        };
        switch (Q) {
          case p:
            W = be() / 12;
            break;
          case h:
            W = be();
            break;
          case b:
            W = be() / 3;
            break;
          case f:
            W = (ve - ce) / 6048e5;
            break;
          case m:
            W = (ve - ce) / 864e5;
            break;
          case i:
            W = ve / r;
            break;
          case o:
            W = ve / a;
            break;
          case s:
            W = ve / t;
            break;
          default:
            W = ve;
        }
        return C ? W : U.a(W);
      }, Y.daysInMonth = function() {
        return this.endOf(h).$D;
      }, Y.$locale = function() {
        return J[this.$L];
      }, Y.locale = function(H, P) {
        if (!H) return this.$L;
        var C = this.clone(), W = F(H, P, !0);
        return W && (C.$L = W), C;
      }, Y.clone = function() {
        return U.w(this.$d, this);
      }, Y.toDate = function() {
        return new Date(this.valueOf());
      }, Y.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, Y.toISOString = function() {
        return this.$d.toISOString();
      }, Y.toString = function() {
        return this.$d.toUTCString();
      }, j;
    }(), Z = z.prototype;
    return $.prototype = Z, [["$ms", l], ["$s", s], ["$m", o], ["$H", i], ["$W", m], ["$M", h], ["$y", p], ["$D", _]].forEach(function(j) {
      Z[j[1]] = function(Y) {
        return this.$g(Y, j[0], j[1]);
      };
    }), $.extend = function(j, Y) {
      return j.$i || (j(Y, z, $), j.$i = !0), $;
    }, $.locale = F, $.isDayjs = D, $.unix = function(j) {
      return $(1e3 * j);
    }, $.en = J[N], $.Ls = J, $.p = {}, $;
  });
})(bl);
var pd = bl.exports;
const lt = /* @__PURE__ */ ar(pd);
var kl = { exports: {} };
(function(e, n) {
  (function(t, a) {
    e.exports = a();
  })(tr, function() {
    return function(t, a, r) {
      a.prototype.isBetween = function(l, s, o, i) {
        var m = r(l), f = r(s), h = (i = i || "()")[0] === "(", b = i[1] === ")";
        return (h ? this.isAfter(m, o) : !this.isBefore(m, o)) && (b ? this.isBefore(f, o) : !this.isAfter(f, o)) || (h ? this.isBefore(m, o) : !this.isAfter(m, o)) && (b ? this.isAfter(f, o) : !this.isBefore(f, o));
      };
    };
  });
})(kl);
var yd = kl.exports;
const gd = /* @__PURE__ */ ar(yd);
var _l = { exports: {} };
(function(e, n) {
  (function(t, a) {
    e.exports = a();
  })(tr, function() {
    var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d/, l = /\d\d/, s = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, i = {}, m = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, f = function(g) {
      return function(u) {
        this[g] = +u;
      };
    }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(u) {
        if (!u || u === "Z") return 0;
        var d = u.match(/([+-]|\d\d)/g), v = 60 * d[1] + (+d[2] || 0);
        return v === 0 ? 0 : d[0] === "+" ? -v : v;
      }(g);
    }], b = function(g) {
      var u = i[g];
      return u && (u.indexOf ? u : u.s.concat(u.f));
    }, p = function(g, u) {
      var d, v = i.meridiem;
      if (v) {
        for (var S = 1; S <= 24; S += 1) if (g.indexOf(v(S, 0, u)) > -1) {
          d = S > 12;
          break;
        }
      } else d = g === (u ? "pm" : "PM");
      return d;
    }, _ = { A: [o, function(g) {
      this.afternoon = p(g, !1);
    }], a: [o, function(g) {
      this.afternoon = p(g, !0);
    }], Q: [r, function(g) {
      this.month = 3 * (g - 1) + 1;
    }], S: [r, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [l, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [s, f("seconds")], ss: [s, f("seconds")], m: [s, f("minutes")], mm: [s, f("minutes")], H: [s, f("hours")], h: [s, f("hours")], HH: [s, f("hours")], hh: [s, f("hours")], D: [s, f("day")], DD: [l, f("day")], Do: [o, function(g) {
      var u = i.ordinal, d = g.match(/\d+/);
      if (this.day = d[0], u) for (var v = 1; v <= 31; v += 1) u(v).replace(/\[|\]/g, "") === g && (this.day = v);
    }], w: [s, f("week")], ww: [l, f("week")], M: [s, f("month")], MM: [l, f("month")], MMM: [o, function(g) {
      var u = b("months"), d = (b("monthsShort") || u.map(function(v) {
        return v.slice(0, 3);
      })).indexOf(g) + 1;
      if (d < 1) throw new Error();
      this.month = d % 12 || d;
    }], MMMM: [o, function(g) {
      var u = b("months").indexOf(g) + 1;
      if (u < 1) throw new Error();
      this.month = u % 12 || u;
    }], Y: [/[+-]?\d+/, f("year")], YY: [l, function(g) {
      this.year = m(g);
    }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
    function w(g) {
      var u, d;
      u = g, d = i && i.formats;
      for (var v = (g = u.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function($, U, z) {
        var Z = z && z.toUpperCase();
        return U || d[z] || t[z] || d[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(j, Y, H) {
          return Y || H.slice(1);
        });
      })).match(a), S = v.length, N = 0; N < S; N += 1) {
        var J = v[N], T = _[J], D = T && T[0], F = T && T[1];
        v[N] = F ? { regex: D, parser: F } : J.replace(/^\[|\]$/g, "");
      }
      return function($) {
        for (var U = {}, z = 0, Z = 0; z < S; z += 1) {
          var j = v[z];
          if (typeof j == "string") Z += j.length;
          else {
            var Y = j.regex, H = j.parser, P = $.slice(Z), C = Y.exec(P)[0];
            H.call(U, C), $ = $.replace(C, "");
          }
        }
        return function(W) {
          var E = W.afternoon;
          if (E !== void 0) {
            var Q = W.hours;
            E ? Q < 12 && (W.hours += 12) : Q === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(U), U;
      };
    }
    return function(g, u, d) {
      d.p.customParseFormat = !0, g && g.parseTwoDigitYear && (m = g.parseTwoDigitYear);
      var v = u.prototype, S = v.parse;
      v.parse = function(N) {
        var J = N.date, T = N.utc, D = N.args;
        this.$u = T;
        var F = D[1];
        if (typeof F == "string") {
          var $ = D[2] === !0, U = D[3] === !0, z = $ || U, Z = D[2];
          U && (Z = D[2]), i = this.$locale(), !$ && Z && (i = d.Ls[Z]), this.$d = function(P, C, W, E) {
            try {
              if (["x", "X"].indexOf(C) > -1) return new Date((C === "X" ? 1e3 : 1) * P);
              var Q = w(C)(P), se = Q.year, ce = Q.month, ve = Q.day, be = Q.hours, xe = Q.minutes, ie = Q.seconds, ye = Q.milliseconds, B = Q.zone, x = Q.week, ee = /* @__PURE__ */ new Date(), ue = ve || (se || ce ? 1 : ee.getDate()), O = se || ee.getFullYear(), M = 0;
              se && !ce || (M = ce > 0 ? ce - 1 : ee.getMonth());
              var k, V = be || 0, le = xe || 0, oe = ie || 0, L = ye || 0;
              return B ? new Date(Date.UTC(O, M, ue, V, le, oe, L + 60 * B.offset * 1e3)) : W ? new Date(Date.UTC(O, M, ue, V, le, oe, L)) : (k = new Date(O, M, ue, V, le, oe, L), x && (k = E(k).week(x).toDate()), k);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(J, F, T, d), this.init(), Z && Z !== !0 && (this.$L = this.locale(Z).$L), z && J != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), i = {};
        } else if (F instanceof Array) for (var j = F.length, Y = 1; Y <= j; Y += 1) {
          D[1] = F[Y - 1];
          var H = d.apply(this, D);
          if (H.isValid()) {
            this.$d = H.$d, this.$L = H.$L, this.init();
            break;
          }
          Y === j && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else S.call(this, N);
      };
    };
  });
})(_l);
var wd = _l.exports;
const bd = /* @__PURE__ */ ar(wd);
lt.extend(gd);
lt.extend(bd);
function kd(e) {
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
    const g = /* @__PURE__ */ new Date();
    return new Date(g.getFullYear(), g.getMonth(), g.getDate());
  }), m = he(null), f = he(null), h = X(() => m.value ? lt(m.value).add(1, "day").toDate() : i.value), b = X(() => {
    const g = [];
    return o.value && o.value.length > 0 && o.value.forEach((u) => {
      const d = lt(u.start), v = lt(u.end);
      let S = d.add(1, "day");
      for (; S.isBefore(v, "day"); )
        g.push(S.toDate()), S = S.add(1, "day");
    }), g;
  }), p = X(() => {
    const g = [];
    if (o.value && o.value.length > 0 && o.value.forEach((u) => {
      const d = lt(u.start), v = lt(u.end);
      let S = d.add(1, "day");
      for (; S.isBefore(v, "day"); )
        g.push(S.toDate()), S = S.add(1, "day");
    }), m.value && o.value && o.value.length > 0) {
      const u = lt(m.value);
      o.value.forEach((d) => {
        const v = lt(d.start), S = lt(d.end);
        if (u.isBefore(S)) {
          let N = v.add(1, "day");
          for (; N.isBefore(S, "day"); )
            g.push(N.toDate()), N = N.add(1, "day");
        }
      });
    }
    return g;
  });
  return {
    checkInDate: m,
    checkOutDate: f,
    minCheckOutDate: h,
    disabledCheckInDates: b,
    disabledCheckOutDates: p,
    handleCheckInChange: (g) => {
      if (m.value = g, g) {
        const u = lt(g).format(s);
        t == null || t(u), f.value = null, a == null || a(null);
      } else
        t == null || t(null), f.value = null, a == null || a(null);
    },
    handleCheckOutChange: (g) => {
      var u;
      if (!m.value) {
        f.value = null;
        return;
      }
      if (g) {
        const d = lt(m.value), v = lt(g);
        if (v.isBefore(d, "day")) {
          r == null || r("Check-out date cannot be before check-in date. Please select a different date."), f.value = null, a == null || a(null);
          return;
        }
        if ((u = o.value) == null ? void 0 : u.some((J) => {
          const T = lt(J.start), D = lt(J.end);
          return d.isBefore(D, "day") && v.isAfter(T, "day");
        })) {
          r == null || r("The selected date range contains unavailable dates. Please select a different range."), f.value = null, a == null || a(null);
          return;
        }
        const N = lt(g).format(s);
        f.value = g, a == null || a(N);
      } else
        f.value = null, a == null || a(null);
    },
    today: i
  };
}
const _d = { class: "flex flex-col sm:flex-row gap-4 justify-start items-center w-full" }, Dd = { class: "flex flex-col gap-1.5 justify-center items-start w-full sm:flex-1" }, xd = { class: "flex flex-col gap-1.5 justify-center items-start w-full sm:flex-1" }, Pd = /* @__PURE__ */ Ke({
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
      today: m
    } = kd({
      bookedDates: n.bookedDates,
      onCheckInChange: n.onCheckInChange,
      onCheckOutChange: n.onCheckOutChange,
      onValidationError: n.onValidationError,
      minDate: n.minDate,
      dateFormat: n.dateFormat,
      displayFormat: n.displayFormat
    });
    return n.checkInDate && (t.value = n.checkInDate), n.checkOutDate && (a.value = n.checkOutDate), (f, h) => (q(), ne("div", _d, [
      Ae("div", Dd, [
        ft(hd, {
          "model-value": c(t),
          "min-date": c(m),
          "disabled-dates": c(l),
          placeholder: e.checkInPlaceholder,
          "input-class": e.checkInInputClass,
          "onUpdate:modelValue": c(o)
        }, null, 8, ["model-value", "min-date", "disabled-dates", "placeholder", "input-class", "onUpdate:modelValue"])
      ]),
      Ae("div", xd, [
        ft(vd, {
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
  Pd as BookingDateRange,
  hd as CheckInDatePicker,
  vd as CheckOutDatePicker,
  kd as useBookingDatePicker
};
