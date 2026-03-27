//#region \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n = {
	bpXS: {
		min: 0,
		max: 600
	},
	bpSM: {
		min: 601,
		max: 900
	},
	bpMED: {
		min: 901,
		max: 1020
	},
	bpLG: {
		min: 1021,
		max: 1200
	},
	bpXL: { min: 1201 }
}, r = /* @__PURE__ */ t({}), i = /* @__PURE__ */ t({}), a = /* @__PURE__ */ t({}), o = /* @__PURE__ */ t({}), s = /* @__PURE__ */ t({}), c = /* @__PURE__ */ t({});
//#endregion
//#region packages/cfpb-design-system/src/utilities/breakpoint-state.js
function l() {
	let e = getComputedStyle(document.body).fontSize;
	return e = e === "" ? -1 : e, parseFloat(e);
}
function u(e, t) {
	let n = e.min, r = e.max;
	return l() > 0 && l() !== 16 && (n = n / 16 * l(), r = r / 16 * l()), (n || 0) <= t && t <= (r || Infinity);
}
function d(e) {
	let t = {};
	e ||= window.innerWidth;
	let r;
	for (r in n) t[r] = u(n[r], e);
	return t;
}
var f = "mobile";
function p(e) {
	let t = !1, n = d();
	return (e === "mobile" && n.bpXS || e === "tablet" && n.bpSM || e === "desktop" && (n.bpMED || n.bpLG || n.bpXL)) && (t = !0), t;
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/standard-type.js
var m = "data-js-hook", h = "behavior_", g = "state_";
//#endregion
//#region packages/cfpb-design-system/src/utilities/event-observer.js
function _() {
	let e = {};
	function t(t, n) {
		return {}.hasOwnProperty.call(e, t) ? e[t].push(n) : e[t] = [n], this;
	}
	function n(t, n) {
		if (!{}.hasOwnProperty.call(e, t)) return this;
		let r = e[t].indexOf(n);
		return r !== -1 && e[t].splice(r, 1), this;
	}
	function r(t, n) {
		if (!{}.hasOwnProperty.call(e, t)) return this;
		n ||= {};
		let r = e[t];
		for (let e = 0, t = r.length; e < t; e++) r[e].call(this, n);
		return this;
	}
	return this.addEventListener = t, this.removeEventListener = n, this.dispatchEvent = r, this.getRegisteredEvents = () => e, this;
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/data-hook.js
function v(e, t) {
	if (!e) return !1;
	let n = e.getAttribute(m);
	return n ? (n = n.split(" "), n.indexOf(t) > -1) : !1;
}
function y(e, t) {
	if (v(e, t)) return t;
	if (t.indexOf(" ") !== -1) {
		let e = m + " values cannot contain spaces!";
		throw Error(e);
	}
	let n = e.getAttribute(m);
	return n !== null && (t = n + " " + t), e.setAttribute(m, t), t;
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/atomic-helpers.js
var b = g + "atomic_init";
function x(e, t) {
	if (!e || !e.classList) {
		let n = e + " is not valid. Check that element is a DOM node with class \"" + t + "\"";
		throw Error(n);
	}
	return e;
}
function S(e, t) {
	let n = e.classList.contains(t) ? e : e.querySelector("." + t);
	if (!n) {
		let e = t + " not found on or in passed DOM node.";
		throw Error(e);
	}
	return n;
}
function C(e, t) {
	return x(e, t), S(e, t);
}
function w(e) {
	return v(e, b) ? !1 : (y(e, b), !0);
}
function T(e, t, n, r = {}) {
	let i = (n || document).querySelectorAll(e), a = [], o, s;
	for (let e = 0, n = i.length; e < n; e++) s = i[e], v(s, b) === !1 && (o = new t(s), o.init(r), a.push(o));
	return a;
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/behavior/behavior.js
function E(e, t) {
	t ||= document;
	let n = [];
	try {
		n = t.querySelectorAll(e);
	} catch (t) {
		let n = `${e} not found in DOM! ${t}`;
		throw Error(n, { cause: t });
	}
	return n.length === 0 && e.indexOf("behavior_") === -1 && (n = O(e, t)), n;
}
function ee(e, t, n, r) {
	let i = [];
	e instanceof NodeList ? i = e : e instanceof Node ? i = [e] : typeof e == "string" && (i = E(e, r));
	for (let e = 0, r = i.length; e < r; e++) i[e].addEventListener(t, n, !1);
	return i;
}
function D(e, t) {
	let n;
	if (v(e, t)) return n = e, n;
	if (e) {
		let r = "[" + m + "=" + t + "]";
		n = e.querySelector(r);
	}
	if (!n) {
		let e = t + " behavior not found on passed DOM node!";
		throw Error(e);
	}
	return n;
}
function O(e, t) {
	return e = m + "*=" + h + e, e = "[" + e + "]", E(e, t);
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/type-checkers.js
var k = Object.prototype.toString;
function te(e) {
	return e === void 0;
}
function ne(e) {
	return e !== void 0;
}
function re(e) {
	return typeof e == "object" && !!e;
}
function ie(e) {
	return k.call(e) === "[object String]";
}
function ae(e) {
	return k.call(e) === "[object Number]";
}
function oe(e) {
	return k.call(e) === "[object Date]";
}
var se = Array.isArray || function(e) {
	return k.call(e) === "[object Array]";
};
function ce(e) {
	return k.call(e) === "[object Function]";
}
function le(e) {
	return te(e) || e === null || ie(e) && e.length <= 0 || /^\s*$/.test(e);
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/media-helpers.js
function ue() {
	return !!(/* @__PURE__ */ new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)).test(navigator.userAgent);
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/transition/base-transition.js
function A(e, t, n) {
	let r = t, i = e;
	if (!n) throw Error("Child transition argument must be defined!");
	let a = n, o, s, c, l = !1, u = !1, d = !1;
	if (r.CSS_PROPERTY === void 0 || r.BASE_CLASS === void 0) throw Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");
	function f() {
		s && l ? (i.addEventListener(s, c), a.dispatchEvent(A.BEGIN_EVENT, {
			target: a,
			type: A.BEGIN_EVENT
		}), i.classList.add(A.ANIMATING_CLASS), u = !0) : (a.dispatchEvent(A.BEGIN_EVENT, {
			target: a,
			type: A.BEGIN_EVENT
		}), c());
	}
	function p() {
		i.removeEventListener(s, c);
	}
	function m(e) {
		return e && e.propertyName !== r.CSS_PROPERTY ? !1 : (p(), i.classList.remove(A.ANIMATING_CLASS), a.dispatchEvent(A.END_EVENT, {
			target: a,
			type: A.END_EVENT
		}), u = !1, !0);
	}
	function h() {
		let e;
		for (e in r) ({}).hasOwnProperty.call(r, e) && r[e] !== r.BASE_CLASS && i.classList.contains(r[e]) && i.classList.remove(r[e]);
	}
	function g() {
		u && (i.style.webkitTransitionDuration = "0", i.style.mozTransitionDuration = "0", i.style.oTransitionDuration = "0", i.style.transitionDuration = "0", i.removeEventListener(s, c), c(), i.style.webkitTransitionDuration = "", i.style.mozTransitionDuration = "", i.style.oTransitionDuration = "", i.style.transitionDuration = "");
	}
	function _() {
		g(), h(), i.classList.remove(r.BASE_CLASS);
	}
	function v() {
		i.classList.remove(A.NO_ANIMATION_CLASS), l = !0;
	}
	function y() {
		i.classList.add(A.NO_ANIMATION_CLASS), l = !1;
	}
	function b(e) {
		if (!e) throw Error("Element does not have TransitionEnd event. It may be null!");
		let t, n = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		}, r;
		for (r in n) if ({}.hasOwnProperty.call(n, r) && e.style[r] !== void 0) {
			t = n[r];
			break;
		}
		return t;
	}
	function x(e) {
		_(), v(), i = e, i.classList.add(r.BASE_CLASS), s = b(i);
	}
	function S(e) {
		if (l = !i.classList.contains(A.NO_ANIMATION_CLASS), c = m.bind(this), x(i), !e) throw Error("Transition needs to be passed an initial CSS class on initialization!");
		return i.classList.add(e), this;
	}
	function C(e) {
		return d ||= (h(), !0), i.classList.contains(e) ? !1 : (p(), i.classList.remove(o), o = e, f(), i.classList.add(o), !0);
	}
	return this.animateOff = y, this.animateOn = v, this.applyClass = C, this.halt = g, this.init = S, this.isAnimated = () => l, this.remove = _, this.setElement = x, this;
}
A.BEGIN_EVENT = "transitionbegin", A.END_EVENT = "transitionend", A.NO_ANIMATION_CLASS = "u-no-animation", A.ANIMATING_CLASS = "u-is-animating";
//#endregion
//#region packages/cfpb-design-system/src/utilities/behavior/flyout-menu.js
var de = h + "flyout-menu", fe = "[" + m + "=" + de;
function j(e, t = !0) {
	let n = D(e, de), r = m(e), i = D(e, de + "_content"), a = 0, o, s, c, l = T.bind(this), u = w.bind(this), d, f = !0, p = !1;
	function m(e) {
		let t = [], n = e.querySelectorAll(`${fe}_trigger]`), r, i, a;
		for (let o = n.length >>> 0; o--;) {
			for (a = !1, r = n[o], i = r.parentElement; i !== e;) i.getAttribute("data-js-hook") && i.getAttribute("data-js-hook").split(" ").indexOf(de) !== -1 ? (a = !0, i = e) : i = i.parentElement;
			a || t.unshift(n[o]);
		}
		return t;
	}
	function h(e = !1) {
		return a = e ? 3 : 0, r.forEach((t) => {
			g("expanded", t, e), t.addEventListener("click", x.bind(this)), t.addEventListener("touchstart", v, { passive: !0 }), t.addEventListener("mouseover", y.bind(this)), t.addEventListener("mouseout", b.bind(this));
		}), i.setAttribute("data-open", e ? "true" : "false"), t && !e && i.setAttribute("hidden", ""), k(), this;
	}
	function g(e, t, n) {
		let r = String(n);
		return t.setAttribute("aria-" + e, r), r;
	}
	function v() {
		p = !0;
	}
	function y(e) {
		f || (p || this.dispatchEvent("triggerover", {
			target: this,
			trigger: e.target,
			type: "triggerover"
		}), p = !1);
	}
	function b(e) {
		f || this.dispatchEvent("triggerout", {
			target: this,
			trigger: e.target,
			type: "triggerout"
		});
	}
	function x(e) {
		if (!f) switch (this.dispatchEvent("triggerclick", {
			target: this,
			trigger: e.target,
			type: "triggerclick"
		}), e.preventDefault(), a) {
			case 0:
			case 1:
				this.expand();
				break;
			case 2:
			case 3:
				this.collapse();
				break;
		}
	}
	function S() {
		if (o?.halt(), a === 2 || a === 3) return this;
		if (a = 2, t && i.removeAttribute("hidden"), this.dispatchEvent("expandbegin", {
			target: this,
			type: "expandbegin"
		}), !s || !c) return u(), this;
		let e = o?.isAnimated();
		return e && o.addEventListener(A.END_EVENT, u), s(), e || u(), this;
	}
	function C() {
		if (o?.halt(), a === 1 || a === 0) return this;
		for (let e = 0, t = r.length; e < t; e++) g("expanded", r[e], !1);
		if (i.setAttribute("data-open", "false"), a = 1, this.dispatchEvent("collapsebegin", {
			target: this,
			type: "collapsebegin"
		}), !c || !s) return l(), this;
		let e = o?.isAnimated();
		return e && o.addEventListener(A.END_EVENT, l), c(), e || l(), this;
	}
	function w() {
		a = 3, i.setAttribute("data-open", "true"), o && o.removeEventListener(A.END_EVENT, u), this.dispatchEvent("expandend", {
			target: this,
			type: "expandend"
		});
		for (let e = 0, t = r.length; e < t; e++) g("expanded", r[e], !0);
	}
	function T() {
		a = 0, t && i.setAttribute("hidden", ""), o && o.removeEventListener(A.END_EVENT, l), this.dispatchEvent("collapseend", {
			target: this,
			type: "collapseend"
		});
	}
	function E(e, t, n) {
		o = e, t && t !== c && (c = t), n && n !== s && (s = n);
	}
	function ee() {
		o && o.remove(), o = void 0, s = void 0, c = void 0;
	}
	function O() {
		return {
			container: n,
			content: i,
			trigger: r
		};
	}
	function k() {
		return f &&= !1, !f;
	}
	function te() {
		return f ||= !0, f;
	}
	function ne(e) {
		return d = e, this;
	}
	let re = new _();
	return this.addEventListener = re.addEventListener, this.removeEventListener = re.removeEventListener, this.dispatchEvent = re.dispatchEvent, this.init = h, this.expand = S, this.collapse = C, this.setTransition = E, this.clearTransition = ee, this.getData = () => d, this.getTransition = () => o, this.getDom = O, this.isAnimating = () => a === 2 || a === 1, this.isExpanded = () => a === 3, this.resume = k, this.setData = ne, this.suspend = te, j.BASE_CLASS = de, this;
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/transition/alpha-transition.js
var pe = {
	CSS_PROPERTY: "opacity",
	BASE_CLASS: "u-alpha-transition",
	ALPHA_100: "u-alpha-100",
	ALPHA_0: "u-alpha-0"
};
function me(e) {
	let t = new _(), n = new A(e, pe, this);
	function r(e) {
		return n.init(e), this;
	}
	function i() {
		return n.applyClass(pe.ALPHA_100), this;
	}
	function a() {
		return n.applyClass(pe.ALPHA_0), this;
	}
	return this.addEventListener = t.addEventListener, this.dispatchEvent = t.dispatchEvent, this.removeEventListener = t.removeEventListener, this.animateOff = n.animateOff, this.animateOn = n.animateOn, this.halt = n.halt, this.isAnimated = n.isAnimated, this.remove = n.remove, this.setElement = n.setElement, this.fadeIn = i, this.fadeOut = a, this.init = r, this;
}
me.CLASSES = pe;
//#endregion
//#region packages/cfpb-design-system/src/utilities/transition/max-height-transition.js
var he = "transitiondir", M = {
	CSS_PROPERTY: "max-height",
	BASE_CLASS: "u-max-height-transition",
	MH_DEFAULT: "u-max-height-default",
	MH_SUMMARY: "u-max-height-summary",
	MH_DYNAMIC: "u-max-height-dynamic",
	MH_ZERO: "u-max-height-zero"
};
function N(e) {
	let t = this, n = new _(), r = new A(e, M, this), i = 0;
	function a() {
		let t = e.scrollHeight + "px";
		e.style.maxHeight = t, e.style.bottom = "auto", e.style.top = "auto";
	}
	function o() {
		let t = e.getBoundingClientRect(), n = window.innerHeight - t.top;
		return {
			rect: t,
			distanceToBottom: n,
			distanceToTop: t.top,
			dir: n <= 140 ? "up" : "down"
		};
	}
	function s() {
		window.removeEventListener("load", s), a();
	}
	function c(e) {
		return r.init(e), window.addEventListener("load", s), window.addEventListener("resize", () => {
			a();
		}), this;
	}
	function l() {
		return a(), r.applyClass(M.MH_DEFAULT), (!i || e.scrollHeight > i) && (i = e.scrollHeight), this;
	}
	function u() {
		return a(), r.applyClass(M.MH_SUMMARY), i = e.scrollHeight, this;
	}
	function d() {
		a(), e.style.top = "100%";
		let n = o(), s = 30, c = e.scrollHeight + s < n.distanceToBottom ? `${e.scrollHeight + 2}px` : `${n.distanceToBottom - s}px`;
		if (n.dir === "up") {
			let t = e.parentElement.offsetHeight;
			s += t, e.style.bottom = `${t - 2}px`, c = e.scrollHeight + s < n.distanceToTop ? `${e.scrollHeight + 2}px` : `${n.distanceToTop - s}px`, e.style.top = "unset";
		}
		return e.style.maxHeight = c, r.applyClass(M.MH_DYNAMIC), t.dispatchEvent(he, {
			target: t,
			type: he,
			dir: n.dir
		}), i = e.scrollHeight, this;
	}
	function f() {
		return r.applyClass(M.MH_ZERO), i = e.scrollHeight, this;
	}
	function p() {
		return e.style.maxHeight = "", r.remove();
	}
	return this.addEventListener = n.addEventListener, this.dispatchEvent = n.dispatchEvent, this.removeEventListener = n.removeEventListener, this.animateOff = r.animateOff, this.animateOn = r.animateOn, this.halt = r.halt, this.isAnimated = r.isAnimated, this.setElement = r.setElement, this.refresh = a, this.remove = p, this.init = c, this.maxHeightDefault = l, this.maxHeightSummary = u, this.maxHeightZero = f, this.maxHeightDynamic = d, this;
}
N.CLASSES = M;
//#endregion
//#region packages/cfpb-design-system/src/utilities/transition/move-transition.js
var P = {
	CSS_PROPERTY: "transform",
	BASE_CLASS: "u-move-transition",
	MOVE_TO_ORIGIN: "u-move-to-origin",
	MOVE_LEFT: "u-move-left",
	MOVE_LEFT_2X: "u-move-left-2x",
	MOVE_LEFT_3X: "u-move-left-3x",
	MOVE_RIGHT: "u-move-right",
	MOVE_UP: "u-move-up"
};
function ge(e) {
	let t = new _(), n = new A(e, P, this);
	function r(e) {
		return n.init(e), this;
	}
	function i() {
		return n.applyClass(P.MOVE_TO_ORIGIN), this;
	}
	function a(e) {
		e ||= 1;
		let t = [
			P.MOVE_LEFT,
			P.MOVE_LEFT_2X,
			P.MOVE_LEFT_3X
		];
		return n.applyClass(t[e - 1]), this;
	}
	function o() {
		return n.applyClass(P.MOVE_RIGHT), this;
	}
	function s() {
		return n.applyClass(P.MOVE_UP), this;
	}
	return this.addEventListener = t.addEventListener, this.dispatchEvent = t.dispatchEvent, this.removeEventListener = t.removeEventListener, this.animateOff = n.animateOff, this.animateOn = n.animateOn, this.halt = n.halt, this.isAnimated = n.isAnimated, this.setElement = n.setElement, this.remove = n.remove, this.init = r, this.moveLeft = () => a(1), this.moveLeft2 = () => a(2), this.moveLeft3 = () => a(3), this.moveRight = o, this.moveToOrigin = i, this.moveUp = s, this;
}
ge.CLASSES = P;
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-expandables/expandable.scss
var _e = /* @__PURE__ */ t({}), F = "o-expandable";
function I(e) {
	let t = C(e, F), n, r, i, a, o;
	function s() {
		if (!w(t)) return this;
		n = t.querySelector(`.${F}__header`), r = t.querySelector(`.${F}__content`), i = t.querySelector(`.${F}__label`);
		let e = t.classList.contains(`${F}--onload-open`);
		y(t, "behavior_flyout-menu"), y(n, "behavior_flyout-menu_trigger"), y(r, "behavior_flyout-menu_content");
		let s = e ? N.CLASSES.MH_DEFAULT : N.CLASSES.MH_ZERO;
		return a = new N(r).init(s), e || r.classList.add("u-hidden"), o = new j(t), o.setTransition(a, a.maxHeightZero, a.maxHeightDefault), o.init(e), o.addEventListener("expandbegin", () => {
			r.classList.remove("u-hidden"), this.dispatchEvent("expandbegin", { target: this });
		}), o.addEventListener("collapseend", () => {
			r.classList.add("u-hidden");
		}), this;
	}
	function c() {
		return i.textContent.trim();
	}
	this.init = s, this.expand = () => o.expand(), this.collapse = () => o.collapse(), this.isExpanded = () => o.isExpanded(), this.refresh = () => o.getTransition().refresh(), this.getLabelText = c;
	let l = new _();
	return this.addEventListener = l.addEventListener, this.removeEventListener = l.removeEventListener, this.dispatchEvent = l.dispatchEvent, this;
}
I.BASE_CLASS = F, I.init = (e) => T(`.${I.BASE_CLASS}`, I, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-expandables/expandable-group.scss
var ve = /* @__PURE__ */ t({}), ye = "o-expandable-group";
function be(e) {
	let t = C(e, ye), n = t.classList.contains(`${ye}--accordion`), r, i;
	function a(e) {
		let t = e.target;
		i && i !== t && i.collapse(), i = t;
	}
	function o(e) {
		return w(t) && n && (r = e, r.forEach((e) => {
			e.addEventListener("expandbegin", a);
		})), this;
	}
	return this.init = o, this;
}
be.BASE_CLASS = ye, be.init = (e) => {
	(e || document).querySelectorAll(`.${ye}`).forEach((e) => {
		let t = T(`.${I.BASE_CLASS}`, I, e);
		new be(e).init(t);
	});
};
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-expandables/summary.scss
var xe = /* @__PURE__ */ t({}), Se = "o-summary";
function Ce(e) {
	let t = C(e, Se), n = t.classList.contains(`${Se}--mobile`), r = t.querySelector(`.${Se}__content`), i = t.querySelector(`.${Se}__btn`), a, o, s;
	function c() {
		return w(t) && window.addEventListener("load", l), this;
	}
	function l() {
		window.removeEventListener("load", l), s = !m(), y(t, "behavior_flyout-menu"), y(r, "behavior_flyout-menu_content"), y(i, "behavior_flyout-menu_trigger"), o = new j(t, !1), a = new N(r), a.init(s ? N.CLASSES.MH_SUMMARY : N.CLASSES.MH_DEFAULT), o.setTransition(a, a.maxHeightSummary, a.maxHeightDefault), o.addEventListener("triggerclick", h), o.init(), f(), window.addEventListener("resize", f), "onorientationchange" in window && window.addEventListener("orientationchange", f), t.addEventListener("focusin", u), r.addEventListener("click", d);
	}
	function u(e) {
		!s && e.target !== i && (i.click(), t.removeEventListener("focusin", u));
	}
	function d(e) {
		e.target.tagName !== "A" && o.isExpanded() && a.refresh();
	}
	function f() {
		m() ? S() : x();
	}
	function m() {
		return n && !p("mobile") || r.scrollHeight <= 88;
	}
	function h() {
		o.addEventListener("expandend", g);
	}
	function g() {
		b(), window.removeEventListener("resize", f), window.removeEventListener("orientationchange", f), o.removeEventListener("expandend", g), o.suspend(), a.remove();
	}
	function v() {
		i.classList.remove("u-hidden");
	}
	function b() {
		i.classList.add("u-hidden");
	}
	function x() {
		return s &&= (o.collapse(), a.animateOn(), v(), !1), !s;
	}
	function S() {
		return s ||= (a.animateOff(), o.expand(), b(), !0), s;
	}
	let T = new _();
	return this.addEventListener = T.addEventListener, this.removeEventListener = T.removeEventListener, this.dispatchEvent = T.dispatchEvent, this.init = c, this;
}
Ce.BASE_CLASS = Se, Ce.init = (e) => T(`.${Se}`, Ce, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-expandables/summary-minimal.js
var we = "o-summary-minimal";
function Te(e) {
	let t = C(e, we), n = t.querySelector(`.${we}__content`), r = t.querySelector(`.${we}__btn`), i, a;
	function o() {
		return w(t) ? (y(t, "behavior_flyout-menu"), y(n, "behavior_flyout-menu_content"), y(r, "behavior_flyout-menu_trigger"), window.addEventListener("load", s), this) : this;
	}
	function s() {
		window.removeEventListener("load", s), a = new j(t, !1), i = new N(n), i.init(N.CLASSES.MH_SUMMARY), a.setTransition(i, i.maxHeightSummary, i.maxHeightDefault), a.init(), t.addEventListener("focusin", c), n.addEventListener("click", l), a.collapse(), i.animateOn();
	}
	function c(e) {
		e.target !== r && (r.click(), t.removeEventListener("focusin", c));
	}
	function l(e) {
		e.target.tagName !== "A" && a.isExpanded() && i.refresh();
	}
	let u = new _();
	return this.addEventListener = u.addEventListener, this.removeEventListener = u.removeEventListener, this.dispatchEvent = u.dispatchEvent, this.init = o, this;
}
Te.BASE_CLASS = we, Te.init = (e) => T(`.${we}`, Te, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-forms/form.scss
var Ee = /* @__PURE__ */ t({}), De = /* @__PURE__ */ t({}), Oe = /* @__PURE__ */ t({}), ke = /* @__PURE__ */ t({}), Ae = /* @__PURE__ */ t({}), je = /* @__PURE__ */ t({}), Me = /* @__PURE__ */ t({}), Ne = /* @__PURE__ */ t({}), Pe = /* @__PURE__ */ t({});
function Fe(e) {
	return e.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Ie(e, t) {
	return RegExp(Fe(t.trim()), "i").test(e);
}
function Le(e, t, n) {
	let r = e, i = t, a = n?.maxSelections || 5, o = [], s = [], c = [], l = [], u = -1;
	function d(e) {
		return i + "-" + e.value.trim().replace(/\s+/g, "-").toLowerCase();
	}
	function f() {
		return s.length >= a;
	}
	function p(e) {
		let t, n = [], r;
		for (let i = 0, a = e.length; i < a; i++) t = e[i], r = f() ? !1 : t.defaultSelected, n.push({
			id: d(t),
			value: t.value,
			text: t.text,
			checked: r
		}), r && s.push(i);
		return n;
	}
	function m() {
		return o = p(r), this;
	}
	function h(e) {
		return o[e].checked = !o[e].checked, s.length < a && o[e].checked ? (s.push(e), s.sort(), !0) : (o[e].checked = !1, s = s.filter(function(t) {
			return t !== e;
		}), !1);
	}
	function g(e, t, n, r) {
		return Ie(t.text, r) && e.push(n), e;
	}
	function _(e) {
		return Object.prototype.toString.call(e) !== "[object String]" && (e = ""), l = c, o.length > 0 && (c = o.reduce(function(t, n, r) {
			return g(t, n, r, e);
		}, [])), u = -1, c;
	}
	function v(e) {
		return o[e];
	}
	function y(e) {
		let t = c.length, n = t === 0 ? o.length : t;
		u = e < 0 ? -1 : e >= n ? n - 1 : e;
	}
	function b() {
		return u;
	}
	return this.init = m, this.toggleOption = h, this.getSelectedIndices = function() {
		return s;
	}, this.isAtMaxSelections = f, this.filterIndices = _, this.clearFilter = function() {
		c = l = [];
	}, this.getFilterIndices = function() {
		return c;
	}, this.getLastFilterIndices = function() {
		return l;
	}, this.getIndex = b, this.setIndex = y, this.resetIndex = function() {
		return u = -1, u;
	}, this.getOption = v, this;
}
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-forms/multiselect-utils.js
function L(e, t, n) {
	let r = document.createElement(e);
	return Object.keys(n).forEach((e) => {
		let t = n[e];
		e in r ? r[e] = t : r.setAttribute(e, t);
	}), t && t.appendChild(r), r;
}
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-icons/icons-lib.js
var Re = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--approved-round\" viewBox=\"0 0 17 19\"><path d=\"M16.417 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-4.105-4.498a.79.79 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.792.792 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 1.294-.111L12.6 6.166a.79.79 0 0 0-.29-1.081z\"/></svg>", ze = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--down\" viewBox=\"0 0 17 19\"><path d=\"M8.5 15.313a1.03 1.03 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.03 1.03 0 0 1-.728.302\"/></svg>", Be = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--error-round\" viewBox=\"0 0 17 19\"><path d=\"M16.417 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-6.804.01 3.032-3.033a.792.792 0 1 0-1.12-1.12L8.494 8.473 5.46 5.44a.792.792 0 0 0-1.12 1.12l3.033 3.033-3.032 3.033a.791.791 0 1 0 1.12 1.119l3.032-3.033 3.033 3.033a.79.79 0 0 0 1.12 0 .79.79 0 0 0 0-1.12z\"/></svg>", Ve = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--error\" viewBox=\"0 0 12 19\"><path d=\"M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z\"/></svg>", He = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--left\" viewBox=\"0 0 10 19\"><path d=\"M8.4 17.269a1.03 1.03 0 0 1-.727-.302l-6.801-6.8a1.03 1.03 0 0 1 0-1.456l6.8-6.8a1.03 1.03 0 0 1 1.456 1.455L3.055 9.439l6.073 6.073A1.03 1.03 0 0 1 8.4 17.27z\"/></svg>", Ue = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--minus-round\" viewBox=\"0 0 17 19\"><path d=\"M16.416 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-2.958.01a.79.79 0 0 0-.792-.792H4.32a.792.792 0 0 0 0 1.583h8.346a.79.79 0 0 0 .792-.791\"/></svg>", We = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--plus-round\" viewBox=\"0 0 17 19\"><path d=\"M16.416 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-2.958.01a.79.79 0 0 0-.792-.792H9.284V5.42a.792.792 0 1 0-1.583 0V8.8H4.32a.792.792 0 0 0 0 1.584H7.7v3.382a.792.792 0 1 0 1.583 0v-3.382h3.382a.79.79 0 0 0 .792-.791z\"/></svg>", Ge = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--right\" viewBox=\"0 0 10 19\"><path d=\"M1.6 17.262a1.03 1.03 0 0 1-.728-1.757l6.073-6.073L.872 3.36a1.03 1.03 0 0 1 1.455-1.455l6.8 6.8a1.03 1.03 0 0 1 0 1.456l-6.8 6.8a1.02 1.02 0 0 1-.727.302z\"/></svg>", Ke = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--search\" viewBox=\"0 0 15 19\"><path d=\"M14.147 15.488a1.11 1.11 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.11 1.11 0 0 1 0 1.568m-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.4 4.4 0 0 0 1.68-.327z\"/></svg>", qe = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--up\" viewBox=\"0 0 17 19\"><path d=\"M15.3 15.32a1.03 1.03 0 0 1-.727-.302L8.5 8.946l-6.073 6.072a1.03 1.03 0 0 1-1.456-1.455l6.801-6.8a1.03 1.03 0 0 1 1.456 0l6.8 6.8a1.03 1.03 0 0 1-.727 1.757z\"/></svg>", Je = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--warning-round\" viewBox=\"0 0 17 19\"><path d=\"M16.406 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0M9.48 13.667a1.003 1.003 0 1 0-2.007 0 1.003 1.003 0 0 0 2.007 0M7.697 10.83a.792.792 0 0 0 1.583 0V4.562a.792.792 0 0 0-1.583 0z\"/></svg>", R = "o-multiselect", Ye = "a-checkbox", Xe = "prev", Ze = "next", Qe = "Enter", $e = " ", et = "Escape", tt = "ArrowUp", nt = "ArrowDown", rt = "Tab", it = {
	renderTags: !0,
	maxSelections: 5
};
function at(e) {
	e.classList.add(R);
	let t = C(e, R), n = !1, r, i, a, o, s, c, l, u, d, f, p, m = [], h;
	function g() {
		p.classList.remove("u-no-results"), p.classList.add("u-filtered");
		let e = a.getLastFilterIndices();
		for (let t = 0, n = e.length; t < n; t++) m[e[t]].classList.remove("u-filter-match");
		e = a.getFilterIndices();
		for (let t = 0, n = e.length; t < n; t++) m[e[t]].classList.add("u-filter-match");
	}
	function v() {
		p.classList.remove("u-filtered", "u-no-results");
		for (let e = 0, t = p.children.length; e < t; e++) p.children[e].classList.remove("u-filter-match");
		a.clearFilter();
	}
	function y() {
		p.classList.add("u-no-results"), p.classList.remove("u-filtered");
	}
	function b(e) {
		return e.length > 0 ? (g(), !0) : (y(), !1);
	}
	function x(e) {
		v(), a.resetIndex(), b(a.filterIndices(e));
	}
	function S() {
		return c.classList.add("u-active"), f.classList.remove("u-invisible"), f.setAttribute("aria-hidden", !1), h.dispatchEvent("expandbegin", { target: h }), h;
	}
	function T() {
		return c.classList.remove("u-active"), f.classList.add("u-invisible"), f.setAttribute("aria-hidden", !0), a.resetIndex(), h.dispatchEvent("collapsebegin", { target: h }), h;
	}
	function E(e) {
		e === Ze ? a.setIndex(a.getIndex() + 1) : e === Xe && a.setIndex(a.getIndex() - 1);
		let t = a.getIndex();
		if (t > -1) {
			let e = t, r = a.getFilterIndices();
			r.length > 0 && (e = r[t]);
			let i = a.getOption(e).value, o = p.querySelector("[data-option=\"" + i + "\"]").querySelector("input");
			n = !0, o.focus();
		} else n = !1, d.focus();
	}
	function ee() {
		d.value = "", v();
	}
	function D(e) {
		let t = e.target;
		t.tagName === "BUTTON" && (e.preventDefault(), t.removeEventListener("click", D), t.querySelector("label").click());
	}
	function O(e) {
		if (e.key === $e || e.key === Qe) {
			let t = e.target.querySelector("label");
			p.querySelector("#" + t.getAttribute("for")).click();
		}
	}
	function k(e) {
		return r + "-" + e.value.trim().replace(/[^\w]/g, "-").toLowerCase();
	}
	function te(e, t) {
		let n = k(t), r = L("li", null, { "data-option": t.value }), i = L("button", r, {
			type: "button",
			class: "a-tag-filter",
			innerHTML: "<label for=" + n + ">" + t.text + Ve + "</label>"
		});
		e.appendChild(r), i.addEventListener("click", D), i.addEventListener("keydown", O);
	}
	function ne(e) {
		let t = a.getOption(e) || a.getOption(a.getIndex());
		if (t) {
			if (t.checked) {
				p.classList.contains("u-max-selections") && p.classList.remove("u-max-selections");
				let e = "[data-option=\"" + t.value + "\"]", n = l.querySelector(e);
				n !== void 0 && n && l?.removeChild(n);
			} else s?.renderTags && l && te(l, t);
			a.toggleOption(e), a.isAtMaxSelections() && p.classList.add("u-max-selections"), h.dispatchEvent("selectionsupdated", { target: h });
		}
		a.resetIndex(), n = !1, f.getAttribute("aria-hidden") === "false" && d.focus();
	}
	function re(e) {
		ne(Number(e.target.getAttribute("data-index"))), ee();
	}
	function ie() {
		u.addEventListener("mousemove", function(e) {
			let t = e.target;
			e.offsetX > t.offsetWidth - 35 ? t.style.cursor = "pointer" : t.style.cursor = "auto";
		}), u.addEventListener("mouseup", function(e) {
			let t = e.target;
			e.offsetX > t.offsetWidth - 35 && f.offsetHeight === 140 && d.blur();
		}), d.addEventListener("input", function() {
			x(this.value);
		}), d.addEventListener("focus", function() {
			f.getAttribute("aria-hidden") === "true" && S();
		}), d.addEventListener("blur", function() {
			!n && f.getAttribute("aria-hidden") === "false" && T();
		}), d.addEventListener("keydown", function(e) {
			let t = e.key;
			f.getAttribute("aria-hidden") === "true" && t !== rt && S(), t === Qe ? (e.preventDefault(), E(Ze)) : t === et ? (ee(), T()) : t === nt ? E(Ze) : t === rt && !e.shiftKey && f.getAttribute("aria-hidden") === "false" && T();
		}), p.addEventListener("mousedown", function() {
			n = !0;
		}), p.addEventListener("keydown", function(e) {
			let t = e.key, n = e.target, r = n.checked;
			if (t === Qe) {
				e.preventDefault(), n.checked = !r;
				let t = new Event("change", {
					bubbles: !1,
					cancelable: !0
				});
				n.dispatchEvent(t);
			} else t === et ? (d.focus(), T()) : t === tt ? E(Xe) : t === nt && E(Ze);
		}), f.addEventListener("mousedown", function(e) {
			e.target.tagName === "LABEL" && (n = !0);
		});
		let e = p.querySelectorAll("input");
		for (let t = 0, n = e.length; t < n; t++) e[t].addEventListener("change", re);
		let t = l.querySelectorAll("button");
		for (let e = 0, n = t.length; e < n; e++) t[e].addEventListener("click", D), t[e].addEventListener("keydown", O);
	}
	function ae() {
		c = document.createElement("div"), c.className = R, l = L("ul", null, { className: "m-tag-group" }), u = L("header", c, { className: R + "__header" }), d = L("input", u, {
			className: R + "__search a-text-input",
			type: "text",
			placeholder: i || "Select up to five",
			id: t.id,
			autocomplete: "off"
		}), f = L("fieldset", c, {
			className: R + "__fieldset u-invisible",
			"aria-hidden": "true"
		});
		let e = R + "__options";
		a.isAtMaxSelections() && (e += " u-max-selections"), p = L("ul", f, { className: e });
		let n, h, g;
		for (let e = 0, t = o.length; e < t; e++) {
			n = o[e], h = k(n), g = a.getOption(e).checked;
			let t = L("li", p, {
				"data-option": n.value,
				"data-cy": "multiselect-option",
				class: "m-form-field m-form-field--checkbox"
			});
			L("input", t, {
				id: h,
				type: "checkbox",
				value: n.value,
				name: r,
				class: Ye + " o-multiselect__checkbox",
				checked: g,
				"data-index": e
			}), L("label", t, {
				for: h,
				textContent: n.text,
				className: R + "__label a-label"
			}), m.push(t), g && s?.renderTags && te(l, n);
		}
		return c.insertBefore(l, u), t.parentNode.insertBefore(c, t), c.appendChild(t), c;
	}
	function oe(e = it) {
		if (!w(t) || ue()) return this;
		if (h = this, r = t.name || t.id, i = t.getAttribute("data-placeholder"), o = t.options || [], s = {
			...it,
			...e
		}, o.length > 0) {
			a = new Le(o, r, s).init();
			let e = ae();
			t.parentNode.removeChild(t), t = e, w(t), ie();
		}
		return this;
	}
	function se() {
		return a;
	}
	this.init = oe, this.expand = S, this.collapse = T;
	let ce = new _();
	return this.addEventListener = ce.addEventListener, this.removeEventListener = ce.removeEventListener, this.dispatchEvent = ce.dispatchEvent, this.getModel = se, this.updateSelections = ne, this.selectionClickHandler = D, this.selectionKeyDownHandler = O, this;
}
at.BASE_CLASS = R, at.init = (e) => T(`.${R}`, at, void 0, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-icons/icon.scss
var ot = /* @__PURE__ */ t({}), st = /* @__PURE__ */ t({}), ct = /* @__PURE__ */ t({}), lt = /* @__PURE__ */ t({}), ut = /* @__PURE__ */ t({}), dt = /* @__PURE__ */ t({}), ft = /* @__PURE__ */ t({}), pt = /* @__PURE__ */ t({}), mt = /* @__PURE__ */ t({}), ht = /* @__PURE__ */ t({}), gt = /* @__PURE__ */ t({}), _t = /* @__PURE__ */ t({}), vt = /* @__PURE__ */ t({}), yt = /* @__PURE__ */ t({}), bt = /* @__PURE__ */ t({}), xt = /* @__PURE__ */ t({}), St = /* @__PURE__ */ t({}), Ct = /* @__PURE__ */ t({}), wt = /* @__PURE__ */ t({}), Tt = /* @__PURE__ */ t({}), Et = globalThis, Dt = Et.ShadowRoot && (Et.ShadyCSS === void 0 || Et.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ot = Symbol(), kt = /* @__PURE__ */ new WeakMap(), At = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== Ot) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (Dt && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = kt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && kt.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, z = (e) => new At(typeof e == "string" ? e : e + "", void 0, Ot), B = (e, ...t) => new At(e.length === 1 ? e[0] : t.reduce(((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1]), e[0]), e, Ot), jt = (e, t) => {
	if (Dt) e.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
	else for (let n of t) {
		let t = document.createElement("style"), r = Et.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, Mt = Dt ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return z(t);
})(e) : e, { is: Nt, defineProperty: Pt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: It, getOwnPropertySymbols: Lt, getPrototypeOf: Rt } = Object, zt = globalThis, Bt = zt.trustedTypes, Vt = Bt ? Bt.emptyScript : "", Ht = zt.reactiveElementPolyfillSupport, Ut = (e, t) => e, Wt = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? Vt : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, Gt = (e, t) => !Nt(e, t), Kt = {
	attribute: !0,
	type: String,
	converter: Wt,
	reflect: !1,
	useDefault: !1,
	hasChanged: Gt
};
Symbol.metadata ??= Symbol("metadata"), zt.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var V = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = Kt) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && Pt(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = Ft(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? Kt;
	}
	static _$Ei() {
		if (this.hasOwnProperty(Ut("elementProperties"))) return;
		let e = Rt(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(Ut("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ut("properties"))) {
			let e = this.properties, t = [...It(e), ...Lt(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(Infinity).reverse());
			for (let e of n) t.unshift(Mt(e));
		} else e !== void 0 && t.push(Mt(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise(((e) => this.enableUpdating = e)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((e) => e(this)));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return jt(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach(((e) => e.hostDisconnected?.()));
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? Wt : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? Wt : e.converter;
			this._$Em = r, this[r] = i.fromAttribute(t, e.type) ?? this._$Ej?.get(r) ?? null, this._$Em = null;
		}
	}
	requestUpdate(e, t, n) {
		if (e !== void 0) {
			let r = this.constructor, i = this[e];
			if (n ??= r.getPropertyOptions(e), !((n.hasChanged ?? Gt)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((e) => e.hostUpdate?.())), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach(((e) => e.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach(((e) => this._$ET(e, this[e]))), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
V.elementStyles = [], V.shadowRootOptions = { mode: "open" }, V[Ut("elementProperties")] = /* @__PURE__ */ new Map(), V[Ut("finalized")] = /* @__PURE__ */ new Map(), Ht?.({ ReactiveElement: V }), (zt.reactiveElementVersions ??= []).push("2.1.0");
//#endregion
//#region node_modules/lit-html/lit-html.js
var qt = globalThis, Jt = qt.trustedTypes, Yt = Jt ? Jt.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Xt = "$lit$", H = `lit$${Math.random().toFixed(9).slice(2)}$`, Zt = "?" + H, Qt = `<${Zt}>`, U = document, $t = () => U.createComment(""), en = (e) => e === null || typeof e != "object" && typeof e != "function", tn = Array.isArray, nn = (e) => tn(e) || typeof e?.[Symbol.iterator] == "function", rn = "[ 	\n\f\r]", an = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, on = /-->/g, sn = />/g, W = RegExp(`>|${rn}(?:([^\\s"'>=/]+)(${rn}*=${rn}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), cn = /'/g, ln = /"/g, un = /^(?:script|style|textarea|title)$/i, G = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), K = Symbol.for("lit-noChange"), q = Symbol.for("lit-nothing"), dn = /* @__PURE__ */ new WeakMap(), J = U.createTreeWalker(U, 129);
function fn(e, t) {
	if (!tn(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return Yt === void 0 ? t : Yt.createHTML(t);
}
var pn = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = an;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === an ? c[1] === "!--" ? o = on : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = W) : (un.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = W) : o = sn : o === W ? c[0] === ">" ? (o = i ?? an, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? W : c[3] === "\"" ? ln : cn) : o === ln || o === cn ? o = W : o === on || o === sn ? o = an : (o = W, i = void 0);
		let d = o === W && e[t + 1].startsWith("/>") ? " " : "";
		a += o === an ? n + Qt : l >= 0 ? (r.push(s), n.slice(0, l) + Xt + n.slice(l) + H + d) : n + H + (l === -2 ? t : d);
	}
	return [fn(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, mn = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = pn(t, n);
		if (this.el = e.createElement(l, r), J.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = J.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(Xt)) {
					let t = u[o++], n = i.getAttribute(e).split(H), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? vn : r[1] === "?" ? yn : r[1] === "@" ? bn : _n
					}), i.removeAttribute(e);
				} else e.startsWith(H) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (un.test(i.tagName)) {
					let e = i.textContent.split(H), t = e.length - 1;
					if (t > 0) {
						i.textContent = Jt ? Jt.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], $t()), J.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], $t());
					}
				}
			} else if (i.nodeType === 8) if (i.data === Zt) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(H, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += H.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = U.createElement("template");
		return n.innerHTML = e, n;
	}
};
function Y(e, t, n = e, r) {
	if (t === K) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = en(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = Y(e, i._$AS(e, t.values), i, r)), t;
}
var hn = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? U).importNode(t, !0);
		J.currentNode = r;
		let i = J.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new gn(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new xn(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = J.nextNode(), a++);
		}
		return J.currentNode = U, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, gn = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = q, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = Y(this, e, t), en(e) ? e === q || e == null || e === "" ? (this._$AH !== q && this._$AR(), this._$AH = q) : e !== this._$AH && e !== K && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? nn(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== q && en(this._$AH) ? this._$AA.nextSibling.data = e : this.T(U.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = mn.createElement(fn(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new hn(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = dn.get(e.strings);
		return t === void 0 && dn.set(e.strings, t = new mn(e)), t;
	}
	k(t) {
		tn(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O($t()), this.O($t()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e && e !== this._$AB;) {
			let t = e.nextSibling;
			e.remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, _n = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = q, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = q;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = Y(this, e, t, 0), a = !en(e) || e !== this._$AH && e !== K, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = Y(this, r[n + o], t, o), s === K && (s = this._$AH[o]), a ||= !en(s) || s !== this._$AH[o], s === q ? e = q : e !== q && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === q ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, vn = class extends _n {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === q ? void 0 : e;
	}
}, yn = class extends _n {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== q);
	}
}, bn = class extends _n {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = Y(this, e, t, 0) ?? q) === K) return;
		let n = this._$AH, r = e === q && n !== q || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== q && (n === q || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, xn = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		Y(this, e);
	}
}, Sn = {
	M: Xt,
	P: H,
	A: Zt,
	C: 1,
	L: pn,
	R: hn,
	D: nn,
	V: Y,
	I: gn,
	H: _n,
	N: yn,
	U: bn,
	B: vn,
	F: xn
}, Cn = qt.litHtmlPolyfillSupport;
Cn?.(mn, gn), (qt.litHtmlVersions ??= []).push("3.3.0");
var wn = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new gn(t.insertBefore($t(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Tn = globalThis, X = class extends V {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = wn(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return K;
	}
};
X._$litElement$ = !0, X.finalized = !0, Tn.litElementHydrateSupport?.({ LitElement: X });
var En = Tn.litElementPolyfillSupport;
En?.({ LitElement: X }), (Tn.litElementVersions ??= []).push("4.2.0");
//#endregion
//#region node_modules/lit-html/directive.js
var Dn = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, On = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), kn = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, An = On(class extends kn {
	constructor(e) {
		if (super(e), e.type !== Dn.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
	}
	render(e) {
		return " " + Object.keys(e).filter(((t) => e[t])).join(" ") + " ";
	}
	update(e, [t]) {
		if (this.st === void 0) {
			this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter(((e) => e !== ""))));
			for (let e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
			return this.render(t);
		}
		let n = e.element.classList;
		for (let e of this.st) e in t || (n.remove(e), this.st.delete(e));
		for (let e in t) {
			let r = !!t[e];
			r === this.st.has(e) || this.nt?.has(e) || (r ? (n.add(e), this.st.add(e)) : (n.remove(e), this.st.delete(e)));
		}
		return K;
	}
}), { I: jn } = Sn, Mn = (e) => e.strings === void 0, Nn = (e, t) => {
	let n = e._$AN;
	if (n === void 0) return !1;
	for (let e of n) e._$AO?.(t, !1), Nn(e, t);
	return !0;
}, Pn = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, Fn = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), Rn(t);
	}
};
function In(e) {
	this._$AN === void 0 ? this._$AM = e : (Pn(this), this._$AM = e, Fn(this));
}
function Ln(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) if (t) if (Array.isArray(r)) for (let e = n; e < r.length; e++) Nn(r[e], !1), Pn(r[e]);
	else r != null && (Nn(r, !1), Pn(r));
	else Nn(this, e);
}
var Rn = (e) => {
	e.type == Dn.CHILD && (e._$AP ??= Ln, e._$AQ ??= In);
}, zn = class extends kn {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), Fn(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (Nn(this, e), Pn(this));
	}
	setValue(e) {
		if (Mn(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, Z = () => new Bn(), Bn = class {}, Vn = /* @__PURE__ */ new WeakMap(), Q = On(class extends zn {
	render(e) {
		return q;
	}
	update(e, [t]) {
		let n = t !== this.G;
		return n && this.G !== void 0 && this.rt(void 0), (n || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), q;
	}
	rt(e) {
		if (this.isConnected || (e = void 0), typeof this.G == "function") {
			let t = this.ht ?? globalThis, n = Vn.get(t);
			n === void 0 && (n = /* @__PURE__ */ new WeakMap(), Vn.set(t, n)), n.get(this.G) !== void 0 && this.G.call(this.ht, void 0), n.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
		} else this.G.value = e;
	}
	get lt() {
		return typeof this.G == "function" ? Vn.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
	}
	disconnected() {
		this.lt === this.ct && this.rt(void 0);
	}
	reconnected() {
		this.rt(this.ct);
	}
}), Hn = "html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-family:sans-serif}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{margin:0;font-family:inherit;font-size:100%}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button{appearance:none}input[type=search]::-webkit-search-decoration{appearance:none}button::-moz-focus-inner{border:0;padding:0}input::-moz-focus-inner{border:0;padding:0}textarea{vertical-align:top;overflow:auto}table{border-collapse:collapse;border-spacing:0}:root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}body{color:var(--text);font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);-webkit-font-smoothing:antialiased;font-size:100%;line-height:1.375}button,input,select,textarea{font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);line-height:1.1875}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size-adjust:var(--font-adjust-h1);letter-spacing:inherit;text-transform:inherit;margin-bottom:.441176em;font-size:2.125em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.76471em}@media only screen and (width<=37.5em){h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}h1,.h1{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.73077em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}}h2,.h2{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.73077em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.15385em}@media only screen and (width<=37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.36364em}h2,.h2{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.36364em}}h3,.h3{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.36364em}@media only screen and (width<=37.5em){h3,.h3{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.66667em}}h4,.h4{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:500;line-height:1.25}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.66667em}@media only screen and (width<=37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size-adjust:var(--font-adjust-h5);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.07143em;font-size:.875em;font-weight:600;line-height:1.25}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.14286em}h6,.h6{font-size-adjust:var(--font-adjust-h6);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.25em;font-size:.75em;font-weight:600;line-height:1.25}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-top:0;margin-bottom:15px;font-size:1.375em;font-weight:400;line-height:1.25}@media only screen and (width<=37.5em){.lead-paragraph{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;font-size:1.125em;font-weight:400;line-height:1.25}}.superheading{margin-bottom:.416667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);-webkit-text-decoration-color:var(--link-underline);-webkit-text-decoration-color:var(--link-underline);text-decoration-color:var(--link-underline);text-underline-offset:4.5px;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:1px}a:visited,a.visited{-webkit-text-decoration-color:var(--link-underline-visited);-webkit-text-decoration-color:var(--link-underline-visited);text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-hover);-webkit-text-decoration-color:var(--link-underline-hover);text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline-offset:1px;outline:thin dotted}a:active,a.active{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-active);-webkit-text-decoration-color:var(--link-underline-active);text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none}caption{text-align:left;margin-bottom:.625em}th,td{padding:.625em}thead th,thead td{background:var(--table-head-bg);color:var(--table-head-text);vertical-align:top;padding:.714286em;font-size:1em}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{text-align:left;font-weight:600}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;margin:0}blockquote{margin-left:.9375em;margin-right:.9375em}@media only screen and (width>=37.5625em){blockquote{margin-left:1.875em;margin-right:1.875em}}img{max-width:100%}figure{margin-left:0;margin-right:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);color:var(--code-text);border-radius:4px;font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.230769em .230769em 0;font-size:.8125em}pre{white-space:pre-wrap;overflow-wrap:break-word;padding:.625em .9375em;display:block}pre code{background-color:#0000;padding:0}:root{--btn-text:var(--white);--btn-bg:var(--pacific);--btn-bg-hover:var(--pacific-dark);--btn-bg-active:var(--navy);--btn-divider:var(--pacific-60);--btn-secondary-text:var(--pacific);--btn-secondary-text-hover:var(--pacific-dark);--btn-secondary-text-active:var(--navy);--btn-secondary-bg:var(--white);--btn-secondary-bg-hover:var(--pacific-10);--btn-secondary-bg-active:var(--pacific-20);--btn-secondary-border:var(--pacific);--btn-secondary-border-hover:var(--pacific-dark);--btn-secondary-border-active:var(--navy);--btn-secondary-divider:var(--pacific-60);--btn-warning-text:var(--white);--btn-warning-bg:var(--red-mid-dark);--btn-warning-bg-hover:var(--red-dark);--btn-warning-bg-active:var(--gray-dark);--btn-warning-divider:var(--red-60);--btn-disabled-text:var(--gray-dark);--btn-disabled-bg:var(--gray-20);--btn-disabled-outline:var(--gray-20);--btn-disabled-divider:var(--gray-60)}:host{--icon-text-divider-default:var(--pacific-60);--icon-text-divider-disabled:var(--gray-60);--icon-text-divider:var(--icon-text-divider-default)}:host .wrapper{align-items:center;gap:.625rem;width:fit-content;display:flex}:host .left-divider:before,:host .right-divider:after{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host slot{display:contents}.left-divider ::slotted(svg:first-of-type){order:-1}.right-divider ::slotted(svg:last-of-type){order:1}:host([disabled]){--icon-text-divider:var(--icon-text-divider-disabled)!important}:host([icon-hidden]) ::slotted(svg){display:none!important}:host button.a-btn::-moz-focus-inner{border:0}:host input.a-btn::-moz-focus-inner{border:0}:host .a-btn{appearance:none;box-sizing:border-box;cursor:pointer;text-align:center;border:0;border-radius:.25em;justify-content:center;align-items:center;gap:.625rem;width:fit-content;height:fit-content;margin:0;padding:.5em .875em;font-size:1em;font-weight:500;line-height:1.1875;text-decoration:none;transition:background-color .1s;display:flex}:host .a-btn,:host .a-btn:link,:host .a-btn:visited{background-color:var(--btn-bg);color:var(--btn-text)}:host .a-btn:hover,:host .a-btn.hover,:host .a-btn:focus,:host .a-btn.focus{background-color:var(--btn-bg-hover);color:var(--btn-text)}:host .a-btn:focus,:host .a-btn.focus{outline:1px dotted var(--btn-bg);outline-offset:1px}:host .a-btn:active,:host .a-btn.active{background-color:var(--btn-bg-active)}:host .a-btn--secondary,:host .a-btn--secondary:link,:host .a-btn--secondary:visited{background-color:var(--btn-secondary-bg);color:var(--btn-secondary-text);box-shadow:0 0 0 1px var(--btn-secondary-border) inset}:host .a-btn--secondary:hover,:host .a-btn--secondary.hover,:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{background-color:var(--btn-secondary-bg-hover);color:var(--btn-secondary-text-hover);box-shadow:0 0 0 1px var(--btn-secondary-border-hover) inset}:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{outline-color:var(--btn-secondary-border)}:host .a-btn--secondary:active,:host .a-btn--secondary.active{background-color:var(--btn-secondary-bg-active);color:var(--btn-secondary-text-active);box-shadow:0 0 0 1px var(--btn-secondary-border-active) inset}:host .a-btn--warning,:host .a-btn--warning:link,:host .a-btn--warning:visited{background-color:var(--btn-warning-bg);color:var(--btn-warning-text)}:host .a-btn--warning:hover,:host .a-btn--warning.hover,:host .a-btn--warning:focus,:host .a-btn--warning.focus{background-color:var(--btn-warning-bg-hover)}:host .a-btn--warning:focus,:host .a-btn--warning.focus{outline-color:var(--btn-warning-bg)}:host .a-btn--warning:active,:host .a-btn--warning.active{background-color:var(--btn-warning-bg-active)}:host .a-btn--disabled,:host .a-btn--disabled:link,:host .a-btn--disabled:visited,:host .a-btn--disabled:hover,:host .a-btn--disabled.hover,:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn--disabled:active,:host .a-btn--disabled.active,:host .a-btn[disabled],:host .a-btn[disabled]:link,:host .a-btn[disabled]:visited,:host .a-btn[disabled]:hover,:host .a-btn[disabled].hover,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[disabled]:active,:host .a-btn[disabled].active,:host .a-btn[aria-disabled=true],:host .a-btn[aria-disabled=true]:link,:host .a-btn[aria-disabled=true]:visited,:host .a-btn[aria-disabled=true]:hover,:host .a-btn[aria-disabled=true].hover,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus,:host .a-btn[aria-disabled=true]:active,:host .a-btn[aria-disabled=true].active{background-color:var(--btn-disabled-bg);color:var(--btn-disabled-text);box-shadow:none;cursor:not-allowed}:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus{outline-color:var(--btn-disabled-outline)}@media only screen and (width<=37.5em){:host .a-btn--full-on-xs{width:100%}}:host .a-btn:has(svg+span) span{order:3}:host .a-btn:has(span+svg) svg{flex:none;order:3}:host .a-btn:not(.a-btn--hide-icon):has(svg+span):before{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host .a-btn:not(.a-btn--hide-icon):has(span+svg):before{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host .a-btn--secondary:has(svg):before{border-color:var(--btn-secondary-divider)!important}:host .a-btn--warning:has(svg):before{border-color:var(--btn-warning-divider)!important}:host .a-btn--disabled:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn[disabled]:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn[aria-disabled=true]:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn--hide-icon svg{display:none}:host .a-btn--link{box-shadow:none;text-underline-offset:4.5px;background-color:#0000;border-radius:0;padding:1.5px 0;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:1px}:host .a-btn--link:has(svg){gap:.3125rem}:host .a-btn--link:has(svg):before{display:none}:host .a-btn--link,:host .a-btn--link:link,:host .a-btn--link:visited{-webkit-text-decoration-color:var(--link-text);-webkit-text-decoration-color:var(--link-text);text-decoration-color:var(--link-text);color:var(--link-text);background-color:#0000}:host .a-btn--link:hover,:host .a-btn--link.hover{-webkit-text-decoration-color:var(--link-text-hover);-webkit-text-decoration-color:var(--link-text-hover);text-decoration-color:var(--link-text-hover);color:var(--link-text-hover);box-shadow:none;background-color:#0000;text-decoration-style:solid}:host .a-btn--link:focus,:host .a-btn--link.focus{outline:1px dotted var(--link-text);color:var(--link-text);background-color:#0000}:host .a-btn--link:active,:host .a-btn--link.active{-webkit-text-decoration-color:var(--link-text-active);-webkit-text-decoration-color:var(--link-text-active);text-decoration-color:var(--link-text-active);color:var(--link-text-active);background-color:#0000;text-decoration-style:solid}:host .a-btn--link.a-btn--warning,:host .a-btn--link.a-btn--warning:link,:host .a-btn--link.a-btn--warning:visited{-webkit-text-decoration-color:var(--btn-warning-bg);-webkit-text-decoration-color:var(--btn-warning-bg);text-decoration-color:var(--btn-warning-bg);color:var(--btn-warning-bg);background-color:#0000}:host .a-btn--link.a-btn--warning:hover,:host .a-btn--link.a-btn--warning.hover{-webkit-text-decoration-color:var(--btn-warning-bg-hover);-webkit-text-decoration-color:var(--btn-warning-bg-hover);text-decoration-color:var(--btn-warning-bg-hover);color:var(--btn-warning-bg-hover);box-shadow:none;background-color:#0000;text-decoration-style:solid}:host .a-btn--link.a-btn--warning:focus,:host .a-btn--link.a-btn--warning.focus{outline:1px dotted var(--btn-warning-bg);color:var(--btn-warning-bg);background-color:#0000}:host .a-btn--link.a-btn--warning:active,:host .a-btn--link.a-btn--warning.active{-webkit-text-decoration-color:var(--btn-warning-bg-active);-webkit-text-decoration-color:var(--btn-warning-bg-active);text-decoration-color:var(--btn-warning-bg-active);color:var(--btn-warning-bg-active);background-color:#0000;text-decoration-style:solid}:host{width:fit-content;display:flex}@media only screen and (width<=37.5em){:host([full-on-mobile]),:host([full-on-mobile]) button,:host([full-on-mobile]) [role=button]{width:100%}}:host([flush-left]) button,:host([flush-left]) [role=button]{border-top-left-radius:0;border-bottom-left-radius:0}:host([flush-right]) button,:host([flush-right]) [role=button]{border-top-right-radius:0;border-bottom-right-radius:0}", Un = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}:host{--icon-text-divider-default:var(--pacific-60);--icon-text-divider-disabled:var(--gray-60);--icon-text-divider:var(--icon-text-divider-default)}:host .wrapper{align-items:center;gap:.625rem;width:fit-content;display:flex}:host .left-divider:before,:host .right-divider:after{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host slot{display:contents}.left-divider ::slotted(svg:first-of-type){order:-1}.right-divider ::slotted(svg:last-of-type){order:1}:host([disabled]){--icon-text-divider:var(--icon-text-divider-disabled)!important}:host([icon-hidden]) ::slotted(svg){display:none!important}", Wn = class e extends X {
	static styles = B`
    ${z(Un)}
  `;
	static properties = {
		disabled: {
			type: Boolean,
			reflect: !0
		},
		iconHidden: {
			type: Boolean,
			reflect: !0,
			attribute: "icon-hidden"
		}
	};
	constructor() {
		super(), this.disabled = !1, this.iconHidden = !1;
	}
	firstUpdated() {
		let e = this.shadowRoot.querySelector("slot");
		this.#e(), e.addEventListener("slotchange", () => this.#e());
	}
	updated(e) {
		e.has("iconHidden") && this.#e();
	}
	#e() {
		let e = this.shadowRoot.querySelector(".wrapper"), t = this.shadowRoot.querySelector("slot").assignedNodes({ flatten: !0 }).filter((e) => e.nodeType === Node.ELEMENT_NODE || e.nodeType === Node.TEXT_NODE && e.textContent.trim()), n = !this.iconHidden && t[0]?.tagName?.toLowerCase() === "svg", r = !this.iconHidden && t[t.length - 1]?.tagName?.toLowerCase() === "svg";
		e.classList.toggle("left-divider", n), e.classList.toggle("right-divider", r);
	}
	hideIcon() {
		this.iconHidden = !0;
	}
	showIcon() {
		this.iconHidden = !1;
	}
	render() {
		return G`<span class="wrapper"><slot></slot></span>`;
	}
	static init() {
		window.customElements.get("cfpb-icon-text") || window.customElements.define("cfpb-icon-text", e);
	}
}, Gn = [
	"primary",
	"secondary",
	"warning"
], Kn = [
	"button",
	"submit",
	"reset"
], qn = class e extends X {
	static styles = B`
    ${z(Hn)}
  `;
	static properties = {
		type: { type: String },
		href: { type: String },
		disabled: {
			type: Boolean,
			reflect: !0
		},
		variant: { type: String },
		fullOnMobile: {
			type: Boolean,
			attribute: "full-on-mobile",
			reflect: !0
		},
		flushLeft: {
			type: Boolean,
			attribute: "flush-left",
			reflect: !0
		},
		flushRight: {
			type: Boolean,
			attribute: "flush-right",
			reflect: !0
		},
		styleAsLink: {
			type: Boolean,
			attribute: "style-as-link",
			reflect: !0
		}
	};
	#e = Z();
	constructor() {
		super(), this.type = "button", this.variant = "primary", this.disabled = !1, this.fullOnMobile = !1, this.styleAsLink = !1;
	}
	hasIcon() {
		return this.#e.value?.hasIcon();
	}
	hideIcon() {
		this.#e.value?.hideIcon();
	}
	showIcon() {
		this.#e.value?.showIcon();
	}
	get dividerColorVar() {
		switch (this.variant) {
			case "warning": return "--btn-warning-divider";
			case "secondary": return "--btn-secondary-divider";
			default: return "--btn-divider";
		}
	}
	get #t() {
		return Gn.includes(this.variant) ? this.variant : "primary";
	}
	get #n() {
		return Kn.includes(this.type) ? this.type : "button";
	}
	get #r() {
		return {
			"a-btn": !0,
			[`a-btn--${this.#t}`]: this.#t !== "primary",
			"a-btn--link": this.styleAsLink === !0
		};
	}
	#i() {
		return G`
      <cfpb-icon-text
        ${Q(this.#e)}
        ?disabled=${this.disabled}
        style="--icon-text-divider: var(${this.dividerColorVar})"
      >
        <slot></slot>
      </cfpb-icon-text>
    `;
	}
	render() {
		let e = An(this.#r);
		return this.href ? G`
        <a
          class=${e}
          href=${this.disabled ? void 0 : this.href}
          role="button"
          aria-disabled=${String(this.disabled)}
          tabindex=${this.disabled ? -1 : 0}
        >
          ${this.#i()}
        </a>
      ` : G`
      <button
        class=${e}
        ?disabled=${this.disabled}
        type=${this.#n}
      >
        ${this.#i()}
      </button>
    `;
	}
	static init() {
		Wn.init(), window.customElements.get("cfpb-button") || window.customElements.define("cfpb-button", e);
	}
}, Jn = class extends kn {
	constructor(e) {
		if (super(e), this.it = q, e.type !== Dn.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === q || e == null) return this._t = void 0, this.it = e;
		if (e === K) return e;
		if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
		if (e === this.it) return this._t;
		this.it = e;
		let t = [e];
		return t.raw = t, this._t = {
			_$litType$: this.constructor.resultType,
			strings: t,
			values: []
		};
	}
};
Jn.directiveName = "unsafeHTML", Jn.resultType = 1;
var Yn = On(Jn), Xn = class extends Jn {};
Xn.directiveName = "unsafeSVG", Xn.resultType = 2;
var $ = On(Xn), Zn = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}.cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}:host .a-form-alert{--form-alert-icon-color:var(--form-alert-icon-color-default);gap:.3125rem;margin-top:.9375rem;display:flex}:host .a-form-alert .cf-icon-svg{color:var(--form-alert-icon-color);flex:none;margin-top:.0625rem}:host .a-form-alert__text{display:block}:host .a-form-alert--success .cf-icon-svg{--form-alert-icon-color:var(--form-alert-icon-color-success)}:host .a-form-alert--warning .cf-icon-svg{--form-alert-icon-color:var(--form-alert-icon-color-warning)}:host .a-form-alert--error .cf-icon-svg{--form-alert-icon-color:var(--form-alert-icon-color-error)}", Qn = class e extends X {
	static styles = B`
    ${z(Zn)}
  `;
	static properties = { validation: { type: String } };
	constructor() {
		super(), this.validation = "error";
	}
	get icon() {
		let e = Be;
		return this.validation === "warning" ? e = Je : this.validation === "success" && (e = Re), e;
	}
	render() {
		return G`<div
      class="a-form-alert a-form-alert--${this.validation}"
      role="alert"
    >
      ${$(this.icon)}
      <div class="a-form-alert__text"><slot></slot></div>
    </div>`;
	}
	static init() {
		window.customElements.get("cfpb-form-alert") || window.customElements.define("cfpb-form-alert", e);
	}
}, $n = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-family:sans-serif}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{margin:0;font-family:inherit;font-size:100%}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button{appearance:none}input[type=search]::-webkit-search-decoration{appearance:none}button::-moz-focus-inner{border:0;padding:0}input::-moz-focus-inner{border:0;padding:0}textarea{vertical-align:top;overflow:auto}table{border-collapse:collapse;border-spacing:0}body{color:var(--text);font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);-webkit-font-smoothing:antialiased;font-size:100%;line-height:1.375}button,input,select,textarea{font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);line-height:1.1875}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size-adjust:var(--font-adjust-h1);letter-spacing:inherit;text-transform:inherit;margin-bottom:.441176em;font-size:2.125em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.76471em}@media only screen and (width<=37.5em){h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}h1,.h1{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.73077em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}}h2,.h2{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.73077em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.15385em}@media only screen and (width<=37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.36364em}h2,.h2{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.36364em}}h3,.h3{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.36364em}@media only screen and (width<=37.5em){h3,.h3{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.66667em}}h4,.h4{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:500;line-height:1.25}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.66667em}@media only screen and (width<=37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size-adjust:var(--font-adjust-h5);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.07143em;font-size:.875em;font-weight:600;line-height:1.25}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.14286em}h6,.h6{font-size-adjust:var(--font-adjust-h6);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.25em;font-size:.75em;font-weight:600;line-height:1.25}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-top:0;margin-bottom:15px;font-size:1.375em;font-weight:400;line-height:1.25}@media only screen and (width<=37.5em){.lead-paragraph{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;font-size:1.125em;font-weight:400;line-height:1.25}}.superheading{margin-bottom:.416667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);-webkit-text-decoration-color:var(--link-underline);-webkit-text-decoration-color:var(--link-underline);text-decoration-color:var(--link-underline);text-underline-offset:4.5px;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:1px}a:visited,a.visited{-webkit-text-decoration-color:var(--link-underline-visited);-webkit-text-decoration-color:var(--link-underline-visited);text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-hover);-webkit-text-decoration-color:var(--link-underline-hover);text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline-offset:1px;outline:thin dotted}a:active,a.active{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-active);-webkit-text-decoration-color:var(--link-underline-active);text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none}caption{text-align:left;margin-bottom:.625em}th,td{padding:.625em}thead th,thead td{background:var(--table-head-bg);color:var(--table-head-text);vertical-align:top;padding:.714286em;font-size:1em}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{text-align:left;font-weight:600}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;margin:0}blockquote{margin-left:.9375em;margin-right:.9375em}@media only screen and (width>=37.5625em){blockquote{margin-left:1.875em;margin-right:1.875em}}img{max-width:100%}figure{margin-left:0;margin-right:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);color:var(--code-text);border-radius:4px;font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.230769em .230769em 0;font-size:.8125em}pre{white-space:pre-wrap;overflow-wrap:break-word;padding:.625em .9375em;display:block}pre code{background-color:#0000;padding:0}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host{--expandable-border:var(--gray-40)}:host .cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}:host ::slotted([slot=header]){color:var(--black)!important;margin-bottom:0!important;font-size:1.125em!important;font-weight:500!important}@media only screen and (width<=37.5em){:host ::slotted([slot=header]){font-size:1em!important}}:host .o-expandable{position:relative}:host .o-expandable__header{cursor:pointer;background-color:#0000;border:0;justify-content:space-between;gap:10px;padding:.625em .9375em;display:flex}:host .o-expandable__header:focus{outline:1px dotted var(--black);outline-offset:2px}:host .o-expandable__header .o-expandable__cue-close,:host .o-expandable__header .o-expandable__cue-open{display:none}:host .o-expandable__header[aria-expanded=false] .o-expandable__cue-open,:host .o-expandable__header[aria-expanded=true] .o-expandable__cue-close{display:block}:host .o-expandable button.o-expandable__header{text-align:left;width:100%}:host .o-expandable__label{flex-grow:1}:host .o-expandable__icon,:host .o-expandable__label{font-size:1.125em!important}@media only screen and (width<=37.5em){:host .o-expandable__icon,:host .o-expandable__label{font-size:1em!important}}:host .o-expandable__cues{color:var(--pacific);align-self:center;font-size:1em;line-height:1.375}:host .o-expandable__content{padding:0 .9375em .9375em}:host .o-expandable__content:before{content:\"\";border-top:1px solid var(--expandable-border);padding-top:.9375em;display:block}:host .o-expandable__content:after{width:100%;padding-bottom:.9375em}:host .o-expandable--background{background:var(--gray-5)}:host .o-expandable--border{border:1px solid var(--expandable-border)}:host .o-expandable-group .o-expandable{border-bottom:1px solid var(--expandable-border)}:host .o-expandable-group .o-expandable:first-child{border-top:1px solid var(--expandable-border)}@media print{:host .o-expandable__header[aria-expanded=true] :host .o-expandable__cue-close,:host .o-expandable__header[aria-expanded=false] :host .o-expandable__cue-open{display:none}:host .o-expandable__content[aria-expanded=false]{display:block;max-height:99999px!important}}html[lang=ar] :host .o-expandable__header{text-align:right}html[lang=ar] :host .o-expandable__cues{text-align:left}", er = class e extends X {
	static styles = B`
    ${z($n)}
  `;
	#e;
	#t;
	static get properties() {
		return { isExpanded: {
			type: Boolean,
			attribute: "open",
			reflect: !0
		} };
	}
	constructor() {
		super();
	}
	firstUpdated() {
		let e = this.shadowRoot.querySelector("div"), t = e.querySelector(".o-expandable__content"), n = this.isExpanded ? N.CLASSES.MH_DEFAULT : N.CLASSES.MH_ZERO;
		this.#t = new N(t).init(n), this.#e = new j(e), this.#e.setTransition(this.#t, this.#t.maxHeightZero, this.#t.maxHeightDefault), this.#e.init(this.isExpanded), this.#e.addEventListener("expandbegin", () => {
			this.isExpanded = !0, t.classList.remove("u-hidden"), this.dispatchEvent(new CustomEvent("expandbegin", {
				detail: { target: this },
				bubbles: !0,
				composed: !0
			}));
		}), this.#e.addEventListener("collapseend", () => {
			this.isExpanded = !1, t.classList.add("u-hidden");
		});
	}
	updated(e) {
		if (e.has("isExpanded")) {
			let t = e.get("isExpanded"), n = this.isExpanded;
			n !== t && (n ? this.#e.expand() : this.#e.collapse());
		}
	}
	render() {
		return G`
      <div
        class="o-expandable o-expandable--background o-expandable--border"
        data-js-hook="behavior_flyout-menu"
      >
        <button
          class="o-expandable__header"
          title="Expand content"
          data-js-hook="behavior_flyout-menu_trigger"
        >
          <slot name="header" class="o-expandable__label"></slot>
          <span class="o-expandable__cues">
            <span class="o-expandable__cue-open" role="img" aria-label="Show">
              ${$(We)}
              <span class="u-visually-hidden">Show</span>
            </span>
            <span class="o-expandable__cue-close" role="img" aria-label="Hide">
              ${$(Ue)}
              <span class="u-visually-hidden">Hide</span>
            </span>
          </span>
        </button>
        <div
          class="o-expandable__content"
          data-js-hook="behavior_flyout-menu_content"
        >
          <slot name="content"></slot>
        </div>
      </div>
    `;
	}
	static init() {
		window.customElements.get("cfpb-expandable") || window.customElements.define("cfpb-expandable", e);
	}
}, tr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host .m-form-field{--choice-border:var(--choice-border-default);--choice-border-hover:var(--choice-border-hover-default);--choice-border-focus:var(--choice-border-focus-default);--choice-outline-focus:var(--choice-outline-focus-default);--choice-bg:var(--choice-bg-default);--choice-bg-selected:var(--choice-bg-selected-default);--choice-bg-selected-focus:var(--choice-bg-selected-focus-default);--choice-label-disabled:var(--choice-label-disabled-default);--choice-border-width-addendum:0;width:max-content}:host .m-form-field .a-label+.a-text-input{margin-top:.3125em}:host .m-form-field--checkbox .a-label,:host .m-form-field--radio .a-label{vertical-align:top;cursor:pointer;overflow-wrap:anywhere;grid-template-columns:1.875em auto;display:inline-grid}:host .m-form-field--checkbox .a-checkbox,:host .m-form-field--checkbox .a-radio,:host .m-form-field--radio .a-checkbox,:host .m-form-field--radio .a-radio{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}:host .m-form-field--checkbox .a-checkbox:focus+.a-label,:host .m-form-field--checkbox .a-checkbox.focus+.a-label,:host .m-form-field--checkbox .a-radio:focus+.a-label,:host .m-form-field--checkbox .a-radio.focus+.a-label,:host .m-form-field--radio .a-checkbox:focus+.a-label,:host .m-form-field--radio .a-checkbox.focus+.a-label,:host .m-form-field--radio .a-radio:focus+.a-label,:host .m-form-field--radio .a-radio.focus+.a-label{outline:1px dotted var(--choice-outline-focus);outline-offset:1px}:host .m-form-field--checkbox .a-checkbox:disabled+.a-label,:host .m-form-field--checkbox .a-radio:disabled+.a-label,:host .m-form-field--radio .a-checkbox:disabled+.a-label,:host .m-form-field--radio .a-radio:disabled+.a-label{cursor:not-allowed;color:var(--choice-label-disabled)}:is(:host .m-form-field--checkbox:has(.a-checkbox:disabled),:host .m-form-field--checkbox:has(.a-radio:disabled),:host .m-form-field--radio:has(.a-checkbox:disabled),:host .m-form-field--radio:has(.a-radio:disabled)){--choice-border:var(--choice-border-disabled);--choice-bg:var(--choice-bg-disabled);--choice-bg-selected:var(--choice-bg-selected-disabled)}:host .m-form-field--checkbox-success,:host .m-form-field--checkbox-warning,:host .m-form-field--checkbox-error,:host .m-form-field--radio-success,:host .m-form-field--radio-warning,:host .m-form-field--radio-error{--choice-border-width-addendum:1px}:host .m-form-field--checkbox-success,:host .m-form-field--radio-success{--choice-border:var(--choice-border-success)}:host .m-form-field--checkbox-warning,:host .m-form-field--radio-warning{--choice-border:var(--choice-border-warning)}:host .m-form-field--checkbox-error,:host .m-form-field--radio-error{--choice-border:var(--choice-border-error)}:host .m-form-field--radio input:disabled:checked+.a-label:before,:host .m-form-field--radio input:disabled:focus+.a-label:before,:host .m-form-field--radio input:disabled.focus+.a-label:before,:host .m-form-field--radio input:disabled:hover+.a-label:before,:host .m-form-field--radio input:disabled.hover+.a-label:before{border-color:var(--choice-border);box-shadow:none;outline:none}:host .m-form-field--radio input:disabled+.a-label:before{outline:none}:host .m-form-field--radio:hover:before,:host .m-form-field--radio.hover:before{border-color:var(--choice-border-hover)}:host .m-form-field--radio .a-label:before{border:1px solid var(--choice-border);outline:var(--choice-border-width-addendum) solid var(--choice-border);background-color:var(--choice-bg);content:\"\";vertical-align:top;border-radius:50%;grid-row:1/3;width:1.125em;height:1.125em;margin-right:10px;display:inline-block;position:relative;top:1px;left:1px;transform:rotate(0)}:host .m-form-field--radio .a-radio:focus+.a-label:before,:host .m-form-field--radio .a-radio.focus+.a-label:before{border-color:var(--choice-border-focus);box-shadow:0 0 0 1px var(--choice-border-focus);outline:none}:host .m-form-field--radio .a-radio:hover+.a-label:before,:host .m-form-field--radio .a-radio.hover+.a-label:before{border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover);outline:none}:host .m-form-field--radio .a-radio:checked+.a-label:before{background-color:var(--choice-bg-selected);box-shadow:inset 0 0 0 2px var(--white)}:host .m-form-field--radio .a-radio:focus:checked+.a-label:before,:host .m-form-field--radio .a-radio.focus:checked+.a-label:before{background-color:var(--choice-bg-selected-focus);border-color:var(--choice-border-focus);box-shadow:0 0 0 1px var(--choice-border-focus), inset 0 0 0 2px var(--white)}:host .m-form-field--radio .a-radio:hover:checked+.a-label:before,:host .m-form-field--radio .a-radio.hover:checked+.a-label:before{border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover), inset 0 0 0 2px var(--white)}:host .m-form-field--radio .a-radio:checked:disabled+.a-label:before,:host .m-form-field--radio .a-radio:hover:checked:disabled+.a-label:before,:host .m-form-field--radio .a-radio.hover:checked:disabled+.a-label:before{background-color:var(--choice-bg-selected);box-shadow:inset 0 0 0 2px var(--gray-10);border-color:var(--choice-border-disabled)}:host .m-form-field--lg-target{width:100%;display:block}:host .m-form-field--lg-target .a-label{box-sizing:border-box;background-color:var(--form-field-input-lg-target-bg);width:100%;padding:15px}:host .m-form-field--lg-target .a-checkbox:checked+.a-label,:host .m-form-field--lg-target .a-radio:checked+.a-label{background-color:var(--form-field-input-lg-target-bg-selected);box-shadow:inset 0 0 0 1px var(--form-field-input-lg-target-border)}:host .m-form-field--lg-target .a-checkbox:hover+.a-label,:host .m-form-field--lg-target .a-checkbox.hover+.a-label,:host .m-form-field--lg-target .a-checkbox:focus+.a-label,:host .m-form-field--lg-target .a-checkbox.focus+.a-label,:host .m-form-field--lg-target .a-radio:hover+.a-label,:host .m-form-field--lg-target .a-radio.hover+.a-label,:host .m-form-field--lg-target .a-radio:focus+.a-label,:host .m-form-field--lg-target .a-radio.focus+.a-label{box-shadow:inset 0 0 0 2px var(--form-field-input-lg-target-border)}:host .m-form-field--lg-target .a-checkbox:focus+.a-label,:host .m-form-field--lg-target .a-checkbox.focus+.a-label,:host .m-form-field--lg-target .a-checkbox:checked+.a-label,:host .m-form-field--lg-target .a-radio:focus+.a-label,:host .m-form-field--lg-target .a-radio.focus+.a-label,:host .m-form-field--lg-target .a-radio:checked+.a-label{outline-offset:1px}:host .m-form-field--lg-target .a-checkbox:disabled+.a-label,:host .m-form-field--lg-target .a-checkbox:checked:disabled+.a-label,:host .m-form-field--lg-target .a-checkbox:hover:disabled+.a-label,:host .m-form-field--lg-target .a-radio:disabled+.a-label,:host .m-form-field--lg-target .a-radio:checked:disabled+.a-label,:host .m-form-field--lg-target .a-radio:hover:disabled+.a-label{color:var(--choice-label-disabled);box-shadow:none;background-color:var(--form-field-input-lg-target-bg-disabled)}:host .m-form-field--lg-target .a-checkbox:checked:disabled+.a-label,:host .m-form-field--lg-target .a-radio:checked:disabled+.a-label{border:1px solid var(--form-field-border-disabled)}", nr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host{--choice-border:var(--choice-border-default);--choice-border-hover:var(--choice-border-hover-default);--choice-bg:var(--choice-bg-default);--choice-bg-selected:var(--choice-bg-selected-default);--choice-border-width-addendum:0}:host .cfpb-checkbox-icon:before{border:1px solid var(--choice-border);outline:var(--choice-border-width-addendum) solid var(--choice-border);background-color:var(--choice-bg);content:\"\";vertical-align:top;grid-row:1/3;width:1.125em;height:1.125em;margin-right:10px;display:inline-block;position:relative;top:1px;left:1px}:host .checked:before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%20class%3D%22cf-icon-svg%20cf-icon-svg--approved%22%20viewBox%3D%220%200%2012%2019%22%3E%3Cpath%20d%3D%22M4.63%2015.638a1.03%201.03%200%200%201-.79-.37L.36%2011.09a1.03%201.03%200%201%201%201.58-1.316l2.535%203.043L9.958%203.32a1.029%201.029%200%200%201%201.783%201.03L5.52%2015.122a1.03%201.03%200%200%201-.803.511l-.088.004z%22%2F%3E%3C%2Fsvg%3E);background-position:50% 0;background-repeat:no-repeat;background-size:auto 1.1875em}:host .disabled:before{cursor:not-allowed;--choice-border:var(--choice-border-disabled);--choice-bg:var(--choice-bg-disabled);--choice-bg-selected:var(--choice-bg-selected-disabled)}:host .checked.disabled:before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%20class%3D%22cf-icon-svg%20cf-icon-svg--approved%22%20viewBox%3D%220%200%2012%2019%22%20fill%3D%22rgb\\(90%2C93%2C97\\)%22%3E%3Cpath%20d%3D%22M4.63%2015.638a1.03%201.03%200%200%201-.79-.37L.36%2011.09a1.03%201.03%200%201%201%201.58-1.316l2.535%203.043L9.958%203.32a1.029%201.029%200%200%201%201.783%201.03L5.52%2015.122a1.03%201.03%200%200%201-.803.511l-.088.004z%22%2F%3E%3C%2Fsvg%3E)}:host .cfpb-checkbox-icon:not(.disabled,.borderless).focus:before,:host .cfpb-checkbox-icon:not(.disabled,.borderless):focus:before,:host .cfpb-checkbox-icon:not(.disabled,.borderless).hover:before,:host .cfpb-checkbox-icon:not(.disabled,.borderless):hover:before{cursor:pointer;border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover);outline-color:var(--choice-border-hover)}:host .validation-error,:host .validation-warning,:host .validation-success{--choice-border-width-addendum:1px}:host .validation-error{--choice-border:var(--choice-border-error)}:host .validation-warning{--choice-border:var(--choice-border-warning)}:host .validation-success{--choice-border:var(--choice-border-success)}:host .borderless:before{background-color:#0000;border-color:#0000;outline-color:#0000}", rr = [
	"error",
	"warning",
	"success"
], ir = class e extends X {
	static styles = B`
    ${z(nr)}
  `;
	#e;
	#t;
	static properties = {
		borderless: {
			type: Boolean,
			reflect: !0
		},
		checked: {
			type: Boolean,
			reflect: !0
		},
		disabled: {
			type: Boolean,
			reflect: !0
		},
		validation: {
			type: String,
			reflect: !0
		}
	};
	constructor() {
		super(), this.borderless = !1, this.checked = !1, this.disabled = !1, this.validation = "", this.#e = !1, this.#t = !1;
	}
	get #n() {
		return rr.includes(this.validation) ? this.validation : void 0;
	}
	mouseover() {
		this.disabled || (this.#e = !0, this.requestUpdate());
	}
	mouseleave() {
		this.#e = !1, this.requestUpdate();
	}
	focus() {
		this.disabled || (this.#t = !0, this.requestUpdate());
	}
	blur() {
		this.#t = !1, this.requestUpdate();
	}
	#r() {
		return [
			"cfpb-checkbox-icon",
			this.checked && "checked",
			this.disabled && "disabled",
			this.borderless && "borderless",
			this.#n && `validation-${this.#n}`,
			this.#e && "hover",
			this.#t && "focus"
		].filter(Boolean).join(" ");
	}
	render() {
		return G`
      <div
        class=${this.#r()}
        ?disabled=${this.disabled}
        aria-hidden="true"
      ></div>
    `;
	}
	static init() {
		window.customElements.get("cfpb-checkbox-icon") || window.customElements.define("cfpb-checkbox-icon", e);
	}
}, ar = [
	"error",
	"warning",
	"success"
], or = ["checkbox", "radio"], sr = class e extends X {
	static styles = B`
    ${z(tr)}
  `;
	#e = Z();
	static properties = {
		checked: {
			type: Boolean,
			reflect: !0
		},
		disabled: { type: Boolean },
		large: { type: Boolean },
		validation: { type: String },
		type: { type: String },
		name: { type: String },
		value: { type: String }
	};
	constructor() {
		super(), this.checked = !1, this.disabled = !1, this.large = !1, this.validation = "", this.type = "checkbox", this.name = "", this.value = "";
	}
	#t(e) {
		this.checked = e.target.checked, this.dispatchEvent(new Event("change", {
			bubbles: !0,
			composed: !0
		}));
	}
	#n() {
		this.dispatchEvent(new Event("input", {
			bubbles: !0,
			composed: !0
		}));
	}
	#r() {
		this.#e.value && this.#e.value.focus();
	}
	#i() {
		this.#e.value && this.#e.value.blur();
	}
	#a() {
		this.#e.value && this.#e.value.mouseover();
	}
	#o() {
		this.#e.value && this.#e.value.mouseleave();
	}
	focus() {
		this.shadowRoot.querySelector("input").focus();
	}
	get #s() {
		return ar.includes(this.validation) ? this.validation : void 0;
	}
	get #c() {
		return or.includes(this.type) ? this.type : "checkbox";
	}
	get #l() {
		let e = {
			"m-form-field": !0,
			[`m-form-field--${this.type}`]: !0,
			"m-form-field--lg-target": this.large
		};
		return this.#s && (e[[`m-form-field--${this.type}-${this.validation}`]] = this.validation), e;
	}
	#u() {
		return G`
      <cfpb-checkbox-icon
        .checked=${this.checked}
        ?disabled=${this.disabled}
        validation=${this.#s}
        ${Q(this.#e)}
      ></cfpb-checkbox-icon>
    `;
	}
	render() {
		return G`
      <div
        class=${An(this.#l)}
        ?large=${this.large}
        @mouseover=${this.#a}
        @mouseleave=${this.#o}
      >
        <input
          class="a-${this.type}"
          type=${this.#c}
          id="choice-input"
          ?disabled=${this.disabled}
          .checked=${this.checked}
          @change=${this.#t}
          @input=${this.#n}
          @focus=${this.#r}
          @blur=${this.#i}
          aria-invalid=${this.#s === "error" ? "true" : "false"}
        />
        <label class="a-label" for="choice-input">
          ${this.type === "checkbox" ? this.#u() : null}
          <slot></slot>
        </label>
      </div>
    `;
	}
	static init() {
		ir.init(), window.customElements.get("cfpb-form-choice") || window.customElements.define("cfpb-form-choice", e);
	}
}, cr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px;--btn-text:var(--white);--btn-bg:var(--pacific);--btn-bg-hover:var(--pacific-dark);--btn-bg-active:var(--navy);--btn-divider:var(--pacific-60);--btn-secondary-text:var(--pacific);--btn-secondary-text-hover:var(--pacific-dark);--btn-secondary-text-active:var(--navy);--btn-secondary-bg:var(--white);--btn-secondary-bg-hover:var(--pacific-10);--btn-secondary-bg-active:var(--pacific-20);--btn-secondary-border:var(--pacific);--btn-secondary-border-hover:var(--pacific-dark);--btn-secondary-border-active:var(--navy);--btn-secondary-divider:var(--pacific-60);--btn-warning-text:var(--white);--btn-warning-bg:var(--red-mid-dark);--btn-warning-bg-hover:var(--red-dark);--btn-warning-bg-active:var(--gray-dark);--btn-warning-divider:var(--red-60);--btn-disabled-text:var(--gray-dark);--btn-disabled-bg:var(--gray-20);--btn-disabled-outline:var(--gray-20);--btn-disabled-divider:var(--gray-60)}:host{flex-direction:column;width:fit-content;display:flex}", lr = class e extends X {
	static styles = B`
    ${z(cr)}
  `;
	static properties = {
		isDetailHidden: {
			type: Boolean,
			attribute: "hidden",
			reflect: !0
		},
		fileName: { type: String },
		accept: { type: String },
		value: { type: String },
		files: { type: FileList }
	};
	constructor() {
		super(), this.#i();
	}
	#e = Z();
	#t = Z();
	#n(e) {
		let t = e;
		if (t.indexOf("\\") > -1) {
			let e = t.split("\\");
			t = e[e.length - 1];
		}
		return t;
	}
	#r() {
		this.fileName = this.#n(this.#e.value.value), this.value = this.#e.value.value, this.files = this.#e.value.files, this.isDetailHidden = !1;
	}
	#i() {
		this.fileName = "", this.value = "", this.files = {}, this.isDetailHidden = !0;
	}
	#a() {
		this.#e.value.value == "" ? this.#i() : this.#r();
	}
	render() {
		return G`
      <cfpb-button
        variant="secondary"
        @click=${() => {
			this.#e.value.click();
		}}
      >
        <slot></slot>
      </cfpb-button>
      <input
        class="a-btn a-btn--secondary"
        type="file"
        hidden
        accept=${this.accept}
        @input=${() => this.#a()}
        @cancel=${() => this.#a()}
        ${Q(this.#e)}
      />
      <div
        part="upload-details"
        ?hidden=${this.isDetailHidden}
        ${Q(this.#t)}
      >
        <h4>File added</h4>
        <ul>
          <li>${this.fileName}</li>
        </ul>
        <p>
          To remove or replace your file, select a new file and upload again.
        </p>
      </div>
    `;
	}
	static init() {
		qn.init(), window.customElements.get("cfpb-file-upload") || window.customElements.define("cfpb-file-upload", e);
	}
}, ur = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}:host .a-label slot{display:inline-block}:host .a-label__helper{color:var(--label-helper);font-size:1rem;font-weight:400}:host .a-label__helper--block{margin-top:.833333em;display:block}:host .a-label--heading{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.555556em;font-size:1.125em;font-weight:500;line-height:1.25;display:block}p+:host .a-label--heading,ul+:host .a-label--heading,ol+:host .a-label--heading,dl+:host .a-label--heading,figure+:host .a-label--heading,img+:host .a-label--heading,table+:host .a-label--heading,blockquote+:host .a-label--heading,h1+:host .a-label--heading,.h1+:host .a-label--heading,h2+:host .a-label--heading,.h2+:host .a-label--heading,h3+:host .a-label--heading,.h3+:host .a-label--heading,h5+:host .a-label--heading,.h5+:host .a-label--heading,h6+:host .a-label--heading,.h6+:host .a-label--heading{margin-top:1.66667em}@media only screen and (width<=37.5em){:host .a-label--heading{margin-bottom:.625em;font-size:1em;line-height:1.125}}:host .a-label--heading .a-label__helper--block{margin-top:.625rem}", dr = (e) => e ?? q, fr = class e extends X {
	static styles = B`
    ${z(ur)}
  `;
	static properties = {
		block: {
			type: Boolean,
			reflect: !0
		},
		for: { type: String }
	};
	constructor() {
		super(), this.block = !1, this.for = "";
	}
	get #e() {
		let e = "a-label__helper";
		return this.block && (e += " a-label__helper--block"), e;
	}
	render() {
		return G`
      <label
        class="a-label a-label--heading"
        for=${dr(this.for && this.for.trim() ? this.for : void 0)}
      >
        <slot name="label"></slot>
        <small class=${this.#e}>
          <slot name="helper"></slot>
        </small>
      </label>
    `;
	}
	static init() {
		window.customElements.get("cfpb-label") || window.customElements.define("cfpb-label", e);
	}
}, pr = ":host ::slotted(cfpb-list-item){margin-top:1px;position:relative}:host ::slotted(cfpb-list-item):before,:host ::slotted(cfpb-list-item):after{content:\"\";width:100%;height:1px;display:block;position:absolute}:host ::slotted(cfpb-list-item):before{border-top:1px solid var(--gray-20);top:-1px}:host ::slotted(cfpb-list-item):after{border-bottom:1px solid var(--gray-20);bottom:-1px}:host :focus{outline:1px dotted var(--pacific);outline-offset:2px}", mr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}:host{--list-item-bg-hover:var(--gray-5);--list-item-border-focus:var(--pacific);display:block}:host .container{padding:6.5px 10px;display:block}:host .checkbox{vertical-align:top;overflow-wrap:anywhere;grid-template-columns:1.875em auto;display:inline-grid}:host .selectable{cursor:pointer}:host .selectable:hover{background:var(--list-item-bg-hover);cursor:pointer;transition:background-color .2s}:host(:focus){outline:none}:host(:not([disabled]):focus-within){outline:1px dotted var(--list-item-border-focus);outline-offset:2px}:host([checked]) .checkbox:before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%20class%3D%22cf-icon-svg%20cf-icon-svg--approved%22%20viewBox%3D%220%200%2012%2019%22%3E%3Cpath%20d%3D%22M4.63%2015.638a1.03%201.03%200%200%201-.79-.37L.36%2011.09a1.03%201.03%200%201%201%201.58-1.316l2.535%203.043L9.958%203.32a1.029%201.029%200%200%201%201.783%201.03L5.52%2015.122a1.03%201.03%200%200%201-.803.511l-.088.004z%22%2F%3E%3C%2Fsvg%3E);background-position:50% 0;background-repeat:no-repeat;background-size:auto 1.1875em}:host([type=plain]) .checkbox:before{background-color:#0000;border-color:#0000;outline-color:#0000}:host([hidden]){display:none}", hr = class e extends X {
	static styles = B`
    ${z(mr)}
  `;
	#e = Z();
	#t;
	#n = !1;
	static properties = {
		type: {
			type: String,
			reflect: !0
		},
		checked: {
			type: Boolean,
			reflect: !0
		},
		disabled: {
			type: Boolean,
			reflect: !0
		},
		hidden: {
			type: Boolean,
			reflect: !0
		},
		href: {
			type: String,
			refrect: !0
		}
	};
	constructor() {
		super(), this.type = "plain", this.checked = !1, this.disabled = !1, this.hidden = !1, this.href = "";
	}
	firstUpdated() {
		this.tabIndex = this.disabled ? -1 : 0, this.#n || this.addEventListener("keydown", this.#a), this.addEventListener("pointerdown", this.#i);
	}
	connectedCallback() {
		super.connectedCallback(), this.#n = this.closest("[role=listbox]") !== null, this.#n ? (this.setAttribute("role", "option"), this.setAttribute("aria-disabled", this.disabled ? "true" : "false"), this.setAttribute("aria-selected", this.checked ? "true" : "false"), this.tabIndex = -1) : (this.removeAttribute("role"), this.removeAttribute("aria-disabled"), this.removeAttribute("aria-selected"));
	}
	updated(e) {
		e.has("checked") && this.#n && this.setAttribute("aria-selected", this.checked ? "true" : "false"), e.has("disabled") && (this.tabIndex = this.disabled ? -1 : 0, this.#n && this.setAttribute("aria-disabled", this.disabled ? "true" : "false")), e.has("hidden") && (this.setAttribute("aria-hidden", this.hidden ? "true" : "false"), this.hidden && (this.tabIndex = -1));
	}
	#r() {
		this.href !== "" && (window.location.href = this.href), this.checked = !this.checked, this.dispatchEvent(new CustomEvent("item-click", {
			detail: {
				checked: this.checked,
				value: this.value
			},
			bubbles: !0,
			composed: !0
		}));
	}
	#i() {
		!this.disabled && !this.hidden && this.#r();
	}
	#a(e) {
		this.disabled || this.hidden || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.#r());
	}
	#o() {
		this.#e.value?.mouseover();
	}
	#s() {
		this.#e.value?.mouseleave();
	}
	get value() {
		if (this.#t) return this.#t;
		let e = this.shadowRoot?.querySelector("slot");
		return e ? (this.#t = e.assignedNodes({ flatten: !0 }).map((e) => e.textContent).join("").trim(), this.#t) : "";
	}
	set value(e) {
		this.#t = e;
	}
	render() {
		return G`
      <div
        part="container"
        class="container
        ${this.disabled ? "" : "selectable"}"
        @mouseover=${this.#o}
        @mouseleave=${this.#s}
      >
        ${this.#c()}
      </div>
    `;
	}
	#c() {
		switch (this.type) {
			case "check": return this.#u();
			case "checkbox": return this.#d();
			default: return this.#l();
		}
	}
	#l() {
		return G`<div><slot></slot></div>`;
	}
	#u() {
		return G`
      <div class="checkbox">
        <cfpb-checkbox-icon
          borderless
          ?disabled=${this.disabled}
          ?checked=${this.checked}
        ></cfpb-checkbox-icon>
        <slot></slot>
      </div>
    `;
	}
	#d() {
		return G`
      <div class="checkbox">
        <cfpb-checkbox-icon
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ${Q(this.#e)}
        ></cfpb-checkbox-icon>
        <slot></slot>
      </div>
    `;
	}
	static init() {
		ir.init(), window.customElements.get("cfpb-list-item") || window.customElements.define("cfpb-list-item", e);
	}
};
//#endregion
//#region packages/cfpb-design-system/src/elements/cfpb-utilities/parse-child-data.js
function gr(e, t = {}) {
	let { allowSingleQuotes: n = !0 } = t;
	if (!e) return null;
	if (Array.isArray(e)) return e;
	if (typeof e != "string") return console.error("childData must be a string or array."), null;
	let r = e.trim();
	if (!r) return null;
	n && (r = r.replace(/'/g, "\""));
	try {
		let e = JSON.parse(r);
		return Array.isArray(e) ? e : (console.error("childData JSON must parse to an array."), null);
	} catch (e) {
		return console.error("Failed to parse childData JSON:", e), null;
	}
}
//#endregion
//#region packages/cfpb-design-system/src/elements/cfpb-list/index.js
var _r = class e extends X {
	static styles = B`
    ${z(pr)}
  `;
	#e = !1;
	#t = Z();
	#n = [];
	#r = [];
	#i = [];
	#a = -1;
	#o = /* @__PURE__ */ new WeakMap();
	static properties = {
		childData: {
			type: Array,
			attribute: "childdata"
		},
		multiple: {
			type: Boolean,
			reflect: !0
		},
		type: {
			type: String,
			reflect: !0
		},
		ariaLabel: {
			type: String,
			attribute: "aria-label"
		}
	};
	constructor() {
		super(), this.childData = "", this.multiple = !1, this.type = "plain", this.ariaLabel = "";
	}
	firstUpdated() {
		this.#c();
	}
	updated(e) {
		if (!this.#e && e.has("childData")) {
			let e = gr(this.childData);
			e && this.#s(e);
		}
		e.has("type") && this.#u();
	}
	get items() {
		return this.#n;
	}
	get checkedItems() {
		return this.#r;
	}
	get visibleItems() {
		return this.#i;
	}
	get visibleCheckedItems() {
		return this.#i.filter((e) => e.checked);
	}
	#s(e) {
		[...this.children].forEach((e) => {
			e.tagName !== "TEMPLATE" && e.tagName !== "NOSCRIPT" && e.remove();
		});
		let t = null;
		e.forEach((e) => {
			let n = document.createElement("cfpb-list-item");
			n.textContent = e.value ?? "", "disabled" in e && (n.disabled = e.disabled), "hidden" in e && (n.hidden = e.hidden), "href" in e && (n.href = e.href), n.type = e.type ?? this.type, this.multiple ? "checked" in e && (n.checked = e.checked) : !t && e.checked && (t = n, n.checked = !0), this.appendChild(n);
		}), this.#c();
	}
	#c() {
		if (this.#n = [...this.querySelectorAll("cfpb-list-item")], this.#n.forEach((e) => {
			e.type ||= this.type;
		}), this.#i = this.#n.filter((e) => !e.hidden), this.multiple) this.#r = this.#n.filter((e) => e.checked);
		else {
			let e = this.#n.find((e) => e.checked);
			this.#r = e ? [e] : [], this.#n.forEach((t) => {
				t !== e && (t.checked = !1);
			});
		}
		this.#n.forEach((e, t) => {
			e.setAttribute("tabindex", "-1"), e.setAttribute("role", "option");
			let n = this.#o.get(e);
			n && e.removeEventListener("item-click", n);
			let r = (n) => {
				n.stopPropagation(), this.#d(e, e.checked, t);
			};
			e.addEventListener("item-click", r), this.#o.set(e, r), e.addEventListener("focus", () => {
				let t = this.#i.indexOf(e);
				t !== -1 && (this.#a = t);
			});
		}), this.dispatchEvent(new CustomEvent("items-ready", {
			detail: {
				items: this.#n,
				checkedItems: this.#r,
				visibleItems: this.#i,
				visibleCheckedItems: this.visibleCheckedItems
			},
			bubbles: !0,
			composed: !0
		}));
	}
	#l() {
		let e = this.#n.map((e) => ({
			value: e.value,
			label: e.textContent.trim(),
			checked: e.checked,
			disabled: e.disabled
		}));
		this.#e = !0, this.childData = e, this.#e = !1;
	}
	#u() {
		if (![
			"plain",
			"check",
			"checkbox"
		].includes(this.type)) {
			console.warn(`<cfpb-list>: invalid type "${this.type}".`);
			return;
		}
		this.#n.forEach((e) => e.type = this.type);
	}
	#d(e, t, n) {
		this.multiple ? t ? this.#r.includes(e) || this.#r.push(e) : this.#r = this.#r.filter((t) => t !== e) : t ? (this.#n.forEach((t) => {
			t !== e && (t.checked = !1);
		}), this.#r = [e]) : (this.#r.forEach((e) => e.checked = !1), this.#r = []), this.#l(), window.queueMicrotask(() => {
			let t = this.#i.indexOf(e);
			this.focusItemAt(t === -1 ? -1 : t);
		}), this.dispatchEvent(new CustomEvent("item-click", {
			detail: {
				index: n,
				value: e.value,
				element: e
			},
			bubbles: !0,
			composed: !0
		}));
	}
	filterItems(e) {
		this.#i = [];
		let t = -1;
		return this.#n.forEach((n) => {
			let r = e.some((e) => n.value.toLowerCase().includes(e.toLowerCase()));
			n.hidden = !r, r && (t === -1 && (t = this.#i.length), this.#i.push(n));
		}), this.#a = t, this.#f(), this.#i;
	}
	showAllItems() {
		this.#n.forEach((e) => e.hidden = !1), this.#i = [...this.#n], this.#a = 0, this.#f();
	}
	#f() {
		this.dispatchEvent(new CustomEvent("items-filter", {
			detail: {
				items: this.#n,
				checkedItems: this.#r,
				visibleItems: this.#i,
				visibleCheckedItems: this.visibleCheckedItems
			},
			bubbles: !0,
			composed: !0
		}));
	}
	#p() {
		this.#t.value.focus(), this.#a = -1;
	}
	focusItemAt(e) {
		let t = this.#i;
		if (!t.length || e == null || typeof e != "number" || Number.isNaN(e) || e === -1) {
			this.#p();
			return;
		}
		let n = (e % t.length + t.length) % t.length;
		t[n].focus(), this.#a = n;
	}
	#m(e) {
		e.target === this.#t.value && this.#p();
	}
	#h(e) {
		let t = this.#i;
		if (!t.length) return;
		let n = t.length - 1;
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), this.focusItemAt(this.#a < 0 ? 0 : this.#a + 1);
				break;
			case "ArrowUp":
				e.preventDefault(), this.focusItemAt(this.#a < 0 ? n : this.#a - 1);
				break;
			case "Home":
				e.preventDefault(), this.focusItemAt(0);
				break;
			case "End":
				e.preventDefault(), this.focusItemAt(n);
				break;
		}
	}
	get focusedIndex() {
		return this.#a;
	}
	render() {
		return G`
      <div
        role="listbox"
        tabindex="0"
        @keydown=${this.#h}
        @focus=${this.#m}
        aria-label=${this.ariaLabel}
        ?aria-multiselectable=${this.multiple}
        ${Q(this.#t)}
      >
        <slot></slot>
      </div>
    `;
	}
	static init() {
		hr.init(), window.customElements.get("cfpb-list") || window.customElements.define("cfpb-list", e);
	}
}, vr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px;--btn-text:var(--white);--btn-bg:var(--pacific);--btn-bg-hover:var(--pacific-dark);--btn-bg-active:var(--navy);--btn-divider:var(--pacific-60);--btn-secondary-text:var(--pacific);--btn-secondary-text-hover:var(--pacific-dark);--btn-secondary-text-active:var(--navy);--btn-secondary-bg:var(--white);--btn-secondary-bg-hover:var(--pacific-10);--btn-secondary-bg-active:var(--pacific-20);--btn-secondary-border:var(--pacific);--btn-secondary-border-hover:var(--pacific-dark);--btn-secondary-border-active:var(--navy);--btn-secondary-divider:var(--pacific-60);--btn-warning-text:var(--white);--btn-warning-bg:var(--red-mid-dark);--btn-warning-bg-hover:var(--red-dark);--btn-warning-bg-active:var(--gray-dark);--btn-warning-divider:var(--red-60);--btn-disabled-text:var(--gray-dark);--btn-disabled-bg:var(--gray-20);--btn-disabled-outline:var(--gray-20);--btn-disabled-divider:var(--gray-60)}:host{--icon-text-divider-default:var(--pacific-60);--icon-text-divider-disabled:var(--gray-60);--icon-text-divider:var(--icon-text-divider-default)}:host .wrapper{align-items:center;gap:.625rem;width:fit-content;display:flex}:host .left-divider:before,:host .right-divider:after{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host slot{display:contents}.left-divider ::slotted(svg:first-of-type){order:-1}.right-divider ::slotted(svg:last-of-type){order:1}:host([disabled]){--icon-text-divider:var(--icon-text-divider-disabled)!important}:host([icon-hidden]) ::slotted(svg){display:none!important}:host button.a-btn::-moz-focus-inner{border:0}:host input.a-btn::-moz-focus-inner{border:0}:host .a-btn{appearance:none;box-sizing:border-box;cursor:pointer;text-align:center;border:0;border-radius:.25em;justify-content:center;align-items:center;gap:.625rem;width:fit-content;height:fit-content;margin:0;padding:.5em .875em;font-size:1em;font-weight:500;line-height:1.1875;text-decoration:none;transition:background-color .1s;display:flex}:host .a-btn,:host .a-btn:link,:host .a-btn:visited{background-color:var(--btn-bg);color:var(--btn-text)}:host .a-btn:hover,:host .a-btn.hover,:host .a-btn:focus,:host .a-btn.focus{background-color:var(--btn-bg-hover);color:var(--btn-text)}:host .a-btn:focus,:host .a-btn.focus{outline:1px dotted var(--btn-bg);outline-offset:1px}:host .a-btn:active,:host .a-btn.active{background-color:var(--btn-bg-active)}:host .a-btn--secondary,:host .a-btn--secondary:link,:host .a-btn--secondary:visited{background-color:var(--btn-secondary-bg);color:var(--btn-secondary-text);box-shadow:0 0 0 1px var(--btn-secondary-border) inset}:host .a-btn--secondary:hover,:host .a-btn--secondary.hover,:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{background-color:var(--btn-secondary-bg-hover);color:var(--btn-secondary-text-hover);box-shadow:0 0 0 1px var(--btn-secondary-border-hover) inset}:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{outline-color:var(--btn-secondary-border)}:host .a-btn--secondary:active,:host .a-btn--secondary.active{background-color:var(--btn-secondary-bg-active);color:var(--btn-secondary-text-active);box-shadow:0 0 0 1px var(--btn-secondary-border-active) inset}:host .a-btn--warning,:host .a-btn--warning:link,:host .a-btn--warning:visited{background-color:var(--btn-warning-bg);color:var(--btn-warning-text)}:host .a-btn--warning:hover,:host .a-btn--warning.hover,:host .a-btn--warning:focus,:host .a-btn--warning.focus{background-color:var(--btn-warning-bg-hover)}:host .a-btn--warning:focus,:host .a-btn--warning.focus{outline-color:var(--btn-warning-bg)}:host .a-btn--warning:active,:host .a-btn--warning.active{background-color:var(--btn-warning-bg-active)}:host .a-btn--disabled,:host .a-btn--disabled:link,:host .a-btn--disabled:visited,:host .a-btn--disabled:hover,:host .a-btn--disabled.hover,:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn--disabled:active,:host .a-btn--disabled.active,:host .a-btn[disabled],:host .a-btn[disabled]:link,:host .a-btn[disabled]:visited,:host .a-btn[disabled]:hover,:host .a-btn[disabled].hover,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[disabled]:active,:host .a-btn[disabled].active,:host .a-btn[aria-disabled=true],:host .a-btn[aria-disabled=true]:link,:host .a-btn[aria-disabled=true]:visited,:host .a-btn[aria-disabled=true]:hover,:host .a-btn[aria-disabled=true].hover,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus,:host .a-btn[aria-disabled=true]:active,:host .a-btn[aria-disabled=true].active{background-color:var(--btn-disabled-bg);color:var(--btn-disabled-text);box-shadow:none;cursor:not-allowed}:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus{outline-color:var(--btn-disabled-outline)}@media only screen and (width<=37.5em){:host .a-btn--full-on-xs{width:100%}}:host .a-btn:has(svg+span) span{order:3}:host .a-btn:has(span+svg) svg{flex:none;order:3}:host .a-btn:not(.a-btn--hide-icon):has(svg+span):before{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host .a-btn:not(.a-btn--hide-icon):has(span+svg):before{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host .a-btn--secondary:has(svg):before{border-color:var(--btn-secondary-divider)!important}:host .a-btn--warning:has(svg):before{border-color:var(--btn-warning-divider)!important}:host .a-btn--disabled:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn[disabled]:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn[aria-disabled=true]:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn--hide-icon svg{display:none}:host ::slotted(ul),:host ::slotted(ol){display:none!important}:host button{line-height:1.1875}:host .o-form-search{flex-direction:column;row-gap:.9375rem;display:flex;position:relative}@media only screen and (width>=37.5625em){:host .o-form-search{border-left:0;flex-direction:row}:host .o-form-search button[type=submit]{border-top-left-radius:0;border-bottom-left-radius:0;flex-basis:25%}}:host .o-form-search .container{width:100%;position:relative}:host .o-form-search .popup{z-index:100;border:1px solid var(--pacific);background:#fff;border-top:0;width:calc(100% - 2px);display:none;position:absolute;top:34px}:host .o-form-search .popup:after{content:\"\";border-bottom:1px solid var(--pacific);width:100%;height:1px;display:block;position:absolute;bottom:-1px}:host .o-form-search .popup.show{display:block}", yr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}.a-text-input{--input-text:var(--input-text-default);--input-text-disabled:var(--input-text-disabled-default);--input-text-placeholder:var(--input-text-placeholder-default);--input-border:var(--input-border-default);--input-border-hover:var(--input-border-hover-default);--input-border-focus:var(--input-border-focus-default);--input-bg:var(--input-bg-default);--input-bg-disabled:var(--input-bg-disabled-default);appearance:none;border:1px solid var(--input-border);outline:0 solid var(--input-border);background:var(--input-bg);color:var(--input-text);box-sizing:border-box;padding:.4375em;display:inline-block}.a-text-input:hover,.a-text-input.hover{border-color:var(--input-border-hover);outline:1px solid var(--input-border-hover)}.a-text-input:focus,.a-text-input.focus{border-color:var(--input-border-focus);box-shadow:0 0 0 1px var(--input-border-focus);outline:1px dotted var(--input-border-focus);outline-offset:2px}.a-text-input:disabled{--input-border:var(--input-border-disabled)}.a-text-input:disabled,.a-text-input:disabled:hover,.a-text-input:disabled.hover,.a-text-input:disabled:focus,.a-text-input:disabled.focus{color:var(--input-text-disabled);background-color:var(--input-bg-disabled);cursor:not-allowed;border-color:var(--input-border);outline:none}.a-text-input--error,.a-text-input--warning,.a-text-input--success{outline-width:1px}.a-text-input--error{--input-border:var(--input-border-error)}.a-text-input--warning{--input-border:var(--input-border-warning)}.a-text-input--success{--input-border:var(--input-border-success)}::-webkit-search-decoration{appearance:none}::placeholder{color:var(--input-text-placeholder)}input[type=date]::-webkit-datetime-edit{color:var(--input-text-placeholder)}.cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}:host{--input-border-default:var(--gray-60);--input-border-disabled:var(--gray-60);--input-border-success:var(--green);--input-border-warning:var(--gold);--input-border-error:var(--red);--input-border:var(--input-border-default);display:flex}:host .o-search-input{width:initial;background:var(--white);border:1px solid var(--input-border);outline:0 solid var(--input-border);flex:0 100%;align-items:center;min-width:300px;display:flex;position:relative}:host .o-search-input label{cursor:pointer;position:absolute;left:10px}:host .o-search-input input{line-height:1.1875}:host .o-search-input input[type=search]{white-space:nowrap;cursor:text;appearance:none;width:100%;box-shadow:none;border:none;outline:none;padding-left:30px;font-size:1rem}:host .o-search-input button[type=reset]{color:var(--gray-40);text-align:right;background-color:#0000;border:1px solid #0000;outline:0;align-self:center;width:44px;font-size:20px;display:none}:host .o-search-input button[type=reset]>svg{pointer-events:none;width:25px}:host .o-search-input button[type=reset]:hover{color:var(--black);cursor:pointer}:host .o-search-input button[type=reset]:focus{color:var(--black)}:host .o-search-input button[type=reset]:focus>svg{outline:1px dotted var(--pacific)}:host .o-search-input input[type=search]:placeholder-shown~button[type=reset]{display:none}:host .o-search-input input[type=search]::-webkit-search-decoration{display:none}:host .o-search-input input[type=search]::-webkit-search-cancel-button{display:none}:host .o-search-input input[type=search]::-webkit-search-results-button{display:none}:host .o-search-input input[type=search]::-webkit-search-results-decoration{display:none}:host .o-search-input:hover,:host .o-search-input:focus-within{border:1px solid var(--pacific);box-shadow:0 0 0 1px var(--pacific);outline-color:var(--pacific)}:host .o-search-input:hover input[type=search],:host .o-search-input:focus-within input[type=search]{outline:none;padding-right:0}:host .o-search-input:focus-within{outline:1px dotted var(--pacific);outline-offset:2px}:host .o-search-input--error,:host .o-search-input--warning,:host .o-search-input--success{outline-width:1px}:host .o-search-input--error{--input-border:var(--input-border-error)}:host .o-search-input--warning{--input-border:var(--input-border-warning)}:host .o-search-input--success{--input-border:var(--input-border-success)}:host .o-search-input:focus-within button[type=reset],:host .o-search-input:hover button[type=reset]{justify-content:flex-end;display:flex}:host .no-js .o-search-input button[type=reset]{display:none!important}:host([borderless]) .o-search-input{border-color:#0000}:host([borderless]) .o-search-input input{padding-top:.3125em;padding-bottom:.3125em}:host([borderless]) .o-search-input:hover,:host([borderless]) .o-search-input:focus-within{border-color:#0000;outline-color:#0000;box-shadow:0 0 0 1px #0000}:host([disabled]){--input-border:var(--input-border-disabled)}:host([disabled]) .o-search-input label,:host([disabled]) .o-search-input input[type=search]{color:var(--input-border)}:host([disabled]) .o-search-input:hover{border:1px solid var(--input-border);box-shadow:none}:host([disabled]) .o-search-input:hover label,:host([disabled]) .o-search-input:hover input[type=search]{cursor:not-allowed}:host([disabled]) .o-search-input:hover button[type=reset]{display:none}:host([disabled]) .o-search-input--error:hover,:host([disabled]) .o-search-input--warning:hover,:host([disabled]) .o-search-input--success:hover{outline-color:var(--input-border)}", br = class e extends X {
	static styles = B`
    ${z(yr)}
  `;
	static properties = {
		disabled: {
			type: Boolean,
			reflect: !0
		},
		validation: {
			type: String,
			reflect: !0
		},
		label: { type: String },
		name: { type: String },
		title: {
			type: String,
			attribute: !0
		},
		value: { type: String },
		maxlength: {
			type: Number,
			reflect: !0
		},
		placeholder: { type: String },
		ariaLabelInput: {
			type: String,
			attribute: "aria-label-input"
		},
		ariaLabelButton: {
			type: String,
			attribute: "aria-label-button"
		},
		borderless: {
			type: Boolean,
			reflect: !0
		}
	};
	#e;
	constructor() {
		super(), this.label = "Search", this.name = "", this.title = "Search", this.value = "", this.maxlength = 75, this.placeholder = "", this.ariaLabelInput = "Search input", this.ariaLabelButton = "Clear search", this.disabled = !1, this.#e = Z(), this.borderless = !1;
	}
	#t(e) {
		this.value = e.target.value;
	}
	#n(e) {
		e.key === "Enter" && this.dispatchEvent(new CustomEvent("enter-down", {
			bubbles: !0,
			composed: !0
		}));
	}
	#r() {
		this.dispatchEvent(new Event("blur", {
			bubbles: !0,
			composed: !0
		}));
	}
	#i(e) {
		e.preventDefault(), !this.disabled && (this.value = "", this.#e.value?.focus(), this.dispatchEvent(new CustomEvent("clear", {
			detail: "",
			bubbles: !0,
			composed: !0
		})));
	}
	focus() {
		this.#e.value.focus();
	}
	render() {
		return G`
      <div
        class="o-search-input ${this.validation ? `o-search-input--${this.validation}` : ""}"
      >
        <label
          for="search-text"
          class="o-search-input__input-label"
          aria-label=${this.label}
        >
          ${$(Ke)}
        </label>
        <input
          id="search-text"
          type="search"
          name=${this.name}
          .value=${this.value}
          ?disabled=${this.disabled}
          class="a-text-input a-text-input__full"
          placeholder=${this.placeholder}
          title=${this.title}
          autocomplete="off"
          maxlength=${this.maxlength}
          aria-label=${this.ariaLabelInput}
          ${Q(this.#e)}
          @input=${this.#t}
          @keydown=${this.#n}
          @blur=${this.#r}
        />
        <button
          type="reset"
          aria-label=${this.ariaLabelButton}
          title=${this.ariaLabelButton}
          @click=${this.#i}
        >
          ${$(Ve)}
        </button>
      </div>
    `;
	}
	static init() {
		window.customElements.get("cfpb-form-search-input") || window.customElements.define("cfpb-form-search-input", e);
	}
}, xr = class {
	constructor(e = [], t = {}) {
		this.items = e, this.fields = t.fields || null;
	}
	setItems(e) {
		this.items = e;
	}
	search(e) {
		if (!e || e.trim() === "") return this.items;
		let t = e.toLowerCase();
		return this.items.filter((e) => typeof e == "string" ? e.toLocaleLowerCase().includes(t) : typeof e == "object" && this.fields ? this.fields.some((n) => {
			let r = e[n];
			return typeof r == "string" && r.toLowerCase().includes(t);
		}) : Object.values(e).some((e) => typeof e == "string" ? e.toLowerCase().includes(t) : !1));
	}
}, Sr = class e extends X {
	static styles = B`
    ${z(vr)}
  `;
	static formAssociated = !0;
	static get properties() {
		return {
			disabled: { type: Boolean },
			validation: { type: String },
			label: { type: String },
			name: { type: String },
			title: {
				type: Boolean,
				attribute: !0
			},
			value: { type: String },
			maxlength: { type: Number },
			placeholder: { type: String },
			ariaLabelInput: {
				type: String,
				attribute: "aria-label-input"
			},
			ariaLabelButton: {
				type: String,
				attribute: "aria-label-button"
			},
			searchList: { type: Array }
		};
	}
	#e = Z();
	#t = Z();
	#n;
	#r;
	constructor() {
		super(), this.value = "", this.#n = this.attachInternals(), this.searchList = [];
	}
	#i(e) {
		let t = e.target.assignedNodes({ flatten: !0 }).filter((e) => e.nodeType === Node.ELEMENT_NODE && (e.tagName === "UL" || e.tagName === "OL"));
		if (!t || !t[0]) return;
		let n = [...t[0].querySelectorAll("li")].map((e) => {
			let t = e.querySelector("a");
			return t ? {
				value: t.textContent.trim(),
				href: t.getAttribute("href")
			} : { value: e.textContent.trim() };
		});
		this.searchList = n, this.#r = new xr(n.map((e) => e.value));
	}
	#a() {
		this.value = "", this.#t.value.classList.remove("show"), this.#e.value.showAllItems();
	}
	#o(e) {
		e.target.value.length > 1 ? (this.#t.value.classList.add("show"), this.#r && this.#e.value.filterItems(this.#r.search(e.target.value))) : this.#t.value.classList.remove("show"), this.value = e.target.value;
	}
	#s(e) {
		this.#l(e);
	}
	#c() {
		this.#t.value.classList.remove("show");
	}
	get isSearchDisabled() {
		return this.disabled || this.isOverMaxLength;
	}
	get isOverMaxLength() {
		let e = this.value.length > this.maxlength;
		return e ? this.validation = "error" : this.validation = "", e;
	}
	#l(e) {
		e.preventDefault(), !this.disabled && (this.#n.setFormValue(this.value), this.#n.form?.requestSubmit());
	}
	render() {
		return G` <!--Light DOM content-->
      <slot @slotchange=${this.#i}></slot>

      <!--Shadow DOM content-->
      <div class="o-form-search">
        <div class="container">
          <cfpb-form-search-input
            ?name=${this.name}
            .value=${this.value}
            ?placeholder=${this.placeholder}
            title=${this.title}
            ?maxlength=${this.maxlength}
            aria-label=${this.ariaLabelInput}
            ?validation=${this.validation}
            @clear=${this.#a}
            @input=${this.#o}
            @enter-down=${this.#s}
            @blur=${this.#c}
          ></cfpb-form-search-input>

          <div class="popup" ${Q(this.#t)}>
            <cfpb-list .childData=${this.searchList} ${Q(this.#e)}>
            </cfpb-list>
          </div>
        </div>

        <button
          class="a-btn"
          type="submit"
          aria-label="Search for term(s)"
          ?disabled=${this.isSearchDisabled}
          @click=${this.#l}
        >
          Search
        </button>
      </div>

      ${this.isOverMaxLength ? G`<cfpb-form-alert validation="error">
            Searches are limited to ${this.maxlength} characters.
          </cfpb-form-alert>` : null}`;
	}
	static init() {
		br.init(), _r.init(), Qn.init(), window.customElements.get("cfpb-form-search") || window.customElements.define("cfpb-form-search", e);
	}
}, Cr = ":host{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAZCAMAAABAf11LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5QTFRF////sxlC7MbQ2YyhxlNxCjFhR2WJV3GSKUt1dYumOFh/GT5rhZiwwszYsr/OlKW6Zn6c0djh8PL1iR9Ko7LE4OXrl0pttKC0pXWRtYKbSuJhRQAAANFJREFUeNrkkctuwyAUREnSuW/ApHYf//+jBVdZVcJi3aORgAXcMyLBAAJEzsVG3m8TkifyI3zfPQ6nJJLo421CArSBmkgjNEWtQE4zXJmClXuCWIlU5hdQxCqbqnE1KdIz79CVDvBwZxyKfQfmHTyzl01UZSvOWSTbhZLSWeDMufWLC/1ls3amT4qQq394EjIjApxBT+/nr8eEBNuKcB9SWMpmEXalNOylmlUZNTr4vE/4VdKhpC+leQf6y/e0wzL3RdJtkfUJyzwW+ZcdfgQYAJmJD3zerW6OAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-size:contain;width:24px;height:13px;display:inline-block}", wr = class e extends X {
	static styles = B`
    ${z(Cr)}
  `;
	static init() {
		globalThis.customElements.get("cfpb-flag-usa") ?? globalThis.customElements.define("cfpb-flag-usa", e);
	}
}, Tr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}:host .a-tagline{grid-template-columns:22px 1fr;column-gap:10px;font-size:.75rem;display:grid}:host .a-tagline__text{display:inline-block}:host .a-tagline cfpb-flag-usa{margin-top:1px}:host .a-tagline--large{font-size:1rem}:host .a-tagline--large cfpb-flag-usa{margin-top:4px}@media print{:host .a-tagline{-webkit-print-color-adjust:exact;print-color-adjust:exact}}:host .u-nowrap{white-space:nowrap}", Er = class e extends X {
	static styles = B`
    ${z(Tr)}
  `;
	static properties = { isLarge: {
		type: Boolean,
		reflect: !0
	} };
	constructor() {
		super(), this.isLarge = !1;
	}
	render() {
		let e = ["a-tagline"];
		return this.isLarge && e.push("a-tagline--large"), G`
      <div
        class="${e.join(" ")}"
        aria-label="Official website of the United States government"
      >
        <cfpb-flag-usa></cfpb-flag-usa>
        <div class="a-tagline__text">
          <slot>
            An official website of the
            <span class="u-nowrap">United States government</span>
          </slot>
        </div>
      </div>
    `;
	}
	static init() {
		wr.init(), globalThis.customElements.get("cfpb-tagline") ?? globalThis.customElements.define("cfpb-tagline", e);
	}
}, Dr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px;--btn-text:var(--white);--btn-bg:var(--pacific);--btn-bg-hover:var(--pacific-dark);--btn-bg-active:var(--navy);--btn-divider:var(--pacific-60);--btn-secondary-text:var(--pacific);--btn-secondary-text-hover:var(--pacific-dark);--btn-secondary-text-active:var(--navy);--btn-secondary-bg:var(--white);--btn-secondary-bg-hover:var(--pacific-10);--btn-secondary-bg-active:var(--pacific-20);--btn-secondary-border:var(--pacific);--btn-secondary-border-hover:var(--pacific-dark);--btn-secondary-border-active:var(--navy);--btn-secondary-divider:var(--pacific-60);--btn-warning-text:var(--white);--btn-warning-bg:var(--red-mid-dark);--btn-warning-bg-hover:var(--red-dark);--btn-warning-bg-active:var(--gray-dark);--btn-warning-divider:var(--red-60);--btn-disabled-text:var(--gray-dark);--btn-disabled-bg:var(--gray-20);--btn-disabled-outline:var(--gray-20);--btn-disabled-divider:var(--gray-60)}:host button{border:1px solid var(--teal);background-color:var(--teal-20);color:var(--black);text-align:left;border-radius:.1875rem;align-items:center;gap:.625rem;min-width:fit-content;padding:4px 6px;font-size:1rem;line-height:1.25;display:flex}:host button:hover{background-color:var(--teal-40);cursor:pointer}:host button:focus{outline:1px dotted var(--teal);outline-offset:1px}:host button:active{background-color:var(--teal-60)}:host svg{pointer-events:none;flex:none;height:1.1875rem}:host label{pointer-events:none;display:contents}", Or = class e extends X {
	static styles = B`
    ${z(Dr)}
  `;
	static properties = {
		for: { type: String },
		value: { type: String }
	};
	constructor() {
		super(), this.for = "", this.value = "";
	}
	async focus() {
		await this.updateComplete, this.shadowRoot.querySelector("button").focus();
	}
	#e() {
		this.dispatchEvent(new CustomEvent("tag-click", {
			detail: { target: this },
			bubbles: !1,
			composed: !1
		}));
	}
	#t() {
		this.value = this.shadowRoot.querySelector("slot").assignedNodes({ flatten: !0 }).map((e) => e.textContent.trim()).join(" ");
	}
	render() {
		let e = this.for === "" ? G`<slot @slotchange=${this.#t}></slot>` : G`<label for=${this.for}><slot></slot></label>`;
		return G`<button @click=${this.#e}>
      ${e} ${Yn(Ve)}
    </button>`;
	}
	static init() {
		window.customElements.get("cfpb-tag-filter") || window.customElements.define("cfpb-tag-filter", e);
	}
}, kr = "html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-family:sans-serif}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{margin:0;font-family:inherit;font-size:100%}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button{appearance:none}input[type=search]::-webkit-search-decoration{appearance:none}button::-moz-focus-inner{border:0;padding:0}input::-moz-focus-inner{border:0;padding:0}textarea{vertical-align:top;overflow:auto}table{border-collapse:collapse;border-spacing:0}:root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}body{color:var(--text);font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);-webkit-font-smoothing:antialiased;font-size:100%;line-height:1.375}button,input,select,textarea{font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);line-height:1.1875}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size-adjust:var(--font-adjust-h1);letter-spacing:inherit;text-transform:inherit;margin-bottom:.441176em;font-size:2.125em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.76471em}@media only screen and (width<=37.5em){h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}h1,.h1{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.73077em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}}h2,.h2{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.73077em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.15385em}@media only screen and (width<=37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.36364em}h2,.h2{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.36364em}}h3,.h3{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.36364em}@media only screen and (width<=37.5em){h3,.h3{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.66667em}}h4,.h4{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:500;line-height:1.25}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.66667em}@media only screen and (width<=37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size-adjust:var(--font-adjust-h5);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.07143em;font-size:.875em;font-weight:600;line-height:1.25}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.14286em}h6,.h6{font-size-adjust:var(--font-adjust-h6);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.25em;font-size:.75em;font-weight:600;line-height:1.25}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-top:0;margin-bottom:15px;font-size:1.375em;font-weight:400;line-height:1.25}@media only screen and (width<=37.5em){.lead-paragraph{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;font-size:1.125em;font-weight:400;line-height:1.25}}.superheading{margin-bottom:.416667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);-webkit-text-decoration-color:var(--link-underline);-webkit-text-decoration-color:var(--link-underline);text-decoration-color:var(--link-underline);text-underline-offset:4.5px;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:1px}a:visited,a.visited{-webkit-text-decoration-color:var(--link-underline-visited);-webkit-text-decoration-color:var(--link-underline-visited);text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-hover);-webkit-text-decoration-color:var(--link-underline-hover);text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline-offset:1px;outline:thin dotted}a:active,a.active{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-active);-webkit-text-decoration-color:var(--link-underline-active);text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none}caption{text-align:left;margin-bottom:.625em}th,td{padding:.625em}thead th,thead td{background:var(--table-head-bg);color:var(--table-head-text);vertical-align:top;padding:.714286em;font-size:1em}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{text-align:left;font-weight:600}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;margin:0}blockquote{margin-left:.9375em;margin-right:.9375em}@media only screen and (width>=37.5625em){blockquote{margin-left:1.875em;margin-right:1.875em}}img{max-width:100%}figure{margin-left:0;margin-right:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);color:var(--code-text);border-radius:4px;font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.230769em .230769em 0;font-size:.8125em}pre{white-space:pre-wrap;overflow-wrap:break-word;padding:.625em .9375em;display:block}pre code{background-color:#0000;padding:0}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host .a-tag-topic{text-transform:uppercase;color:var(--gold-80);letter-spacing:1px;gap:.3125rem;font-size:.875rem;font-weight:600;text-decoration:none;display:flex}:host .a-tag-topic .a-tag-topic__text{color:var(--gray);word-break:break-word}@media only screen and (width<=37.5em){:host .a-tag-topic{box-sizing:border-box;align-items:center;gap:.3125rem;width:100%;padding-top:.625em;padding-bottom:.625em;display:flex;position:relative}:host .a-tag-topic .cf-icon-svg--right{margin-left:auto}:host .a-tag-topic .a-tag-topic__text{flex-shrink:10;text-decoration:none}}:host a.a-tag-topic{border-color:var(--gold-80);color:var(--gold-80);-webkit-text-decoration-color:var(--gold-80);-webkit-text-decoration-color:var(--gold-80);text-decoration-color:var(--gold-80)}:host a.a-tag-topic:visited,:host a.a-tag-topic.visited,:host a.a-tag-topic:hover,:host a.a-tag-topic.hover,:host a.a-tag-topic:focus,:host a.a-tag-topic.focus,:host a.a-tag-topic:active,:host a.a-tag-topic.active{-webkit-text-decoration-color:var(--gold-80);-webkit-text-decoration-color:var(--gold-80);text-decoration-color:var(--gold-80);color:var(--gold-80)}:host a.a-tag-topic .a-tag-topic__text{border-bottom-color:var(--gold-80)}@media only screen and (width<=37.5em){:host a.a-tag-topic{border-top-style:dotted;border-top-width:1px;border-bottom-style:dotted;border-bottom-width:1px;text-decoration:none}:host a.a-tag-topic:hover{border-top-style:solid;border-bottom-style:solid}:host a.a-tag-topic:focus{outline:none}:host a.a-tag-topic:focus:after{content:\"\";outline:1px dotted var(--gray);outline-offset:2px;width:100%;height:100%;display:block;position:absolute}:host a.a-tag-topic--no-top-border{border-top:none;position:relative;border-top-style:none!important}:host a.a-tag-topic:hover:before,:host a.a-tag-topic:focus:before{content:\"\";border-top:1px solid;width:100%;height:1px;display:block;position:absolute;top:-1px}}:host .a-tag-topic__bullet{font-size:1rem;line-height:1rem}@media only screen and (width>=37.5625em){:host a.a-tag-topic__text{color:var(--gray);-webkit-text-decoration-color:var(--gray);-webkit-text-decoration-color:var(--gray);text-decoration-color:var(--gray)}:host a.a-tag-topic__text:visited,:host a.a-tag-topic__text.visited,:host a.a-tag-topic__text:hover,:host a.a-tag-topic__text.hover,:host a.a-tag-topic__text:focus,:host a.a-tag-topic__text.focus,:host a.a-tag-topic__text:active,:host a.a-tag-topic__text.active{-webkit-text-decoration-color:var(--gray);-webkit-text-decoration-color:var(--gray);text-decoration-color:var(--gray);color:var(--gray)}:host a.a-tag-topic,:host a.a-tag-topic:visited,:host a.a-tag-topic:hover,:host a.a-tag-topic:focus,:host a.a-tag-topic:active{outline-offset:1px;border-bottom:none;text-decoration:none}:host a.a-tag-topic .a-tag-topic__text,:host a.a-tag-topic:visited .a-tag-topic__text,:host a.a-tag-topic:hover .a-tag-topic__text,:host a.a-tag-topic:focus .a-tag-topic__text,:host a.a-tag-topic:active .a-tag-topic__text{border-bottom:1px dotted var(--gold-80);padding-bottom:1px}:host a.a-tag-topic:hover .a-tag-topic__text{border-bottom:1px solid var(--gold-80)}:host a.a-tag-topic:focus{outline-color:var(--gray)}:host a.a-tag-topic:focus .a-tag-topic__text{border-bottom-style:solid!important}}", Ar = class e extends X {
	static styles = B`
    ${z(kr)}
  `;
	static properties = {
		href: {
			type: String,
			reflect: !0
		},
		siblingOfJumpLink: { type: Boolean }
	};
	constructor() {
		super(), this.href = "", this.siblingOfJumpLink = !1;
	}
	async focus() {
		await this.updateComplete, this.shadowRoot.querySelector(".a-tag-topic").focus();
	}
	get #e() {
		let e = "a-tag-topic";
		return this.siblingOfJumpLink && (e += " a-tag-topic--no-top-border"), e;
	}
	render() {
		let e = G`<span class="a-tag-topic__bullet" aria-hidden="true"
      >•</span
    >`;
		return G`${this.href === "" ? G`<span class="a-tag-topic"
            >${e}<span class="a-tag-topic__text"><slot></slot></span
          ></span>` : G`<a class=${this.#e} href=${this.href}
            >${e}<span class="a-tag-topic__text"><slot></slot></span
          ></a>`}`;
	}
	static init() {
		window.customElements.get("cfpb-tag-topic") || window.customElements.define("cfpb-tag-topic", e);
	}
}, jr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px;--btn-text:var(--white);--btn-bg:var(--pacific);--btn-bg-hover:var(--pacific-dark);--btn-bg-active:var(--navy);--btn-divider:var(--pacific-60);--btn-secondary-text:var(--pacific);--btn-secondary-text-hover:var(--pacific-dark);--btn-secondary-text-active:var(--navy);--btn-secondary-bg:var(--white);--btn-secondary-bg-hover:var(--pacific-10);--btn-secondary-bg-active:var(--pacific-20);--btn-secondary-border:var(--pacific);--btn-secondary-border-hover:var(--pacific-dark);--btn-secondary-border-active:var(--navy);--btn-secondary-divider:var(--pacific-60);--btn-warning-text:var(--white);--btn-warning-bg:var(--red-mid-dark);--btn-warning-bg-hover:var(--red-dark);--btn-warning-bg-active:var(--gray-dark);--btn-warning-divider:var(--red-60);--btn-disabled-text:var(--gray-dark);--btn-disabled-bg:var(--gray-20);--btn-disabled-outline:var(--gray-20);--btn-disabled-divider:var(--gray-60)}:host ul{padding-left:0;list-style-type:none}:host ul li{margin-bottom:0;display:contents}@media only screen and (width>=37.5625em){:host ul{flex-wrap:wrap;gap:.9375rem;display:flex}:host ul[stacked]{flex-direction:column;width:fit-content}}:host ul:has(cfpb-tag-filter){flex-wrap:wrap;gap:.9375rem;display:flex}:host html[lang=ar]{direction:rtl;padding-right:0}", Mr = ["CFPB-TAG-FILTER", "CFPB-TAG-TOPIC"], Nr = class e extends X {
	static styles = B`
    ${z(jr)}
  `;
	static properties = {
		childData: {
			type: String,
			attribute: "childdata"
		},
		stacked: {
			type: Boolean,
			reflect: !0
		},
		tagList: { type: Array }
	};
	#e;
	#t = !1;
	#n;
	constructor() {
		super(), this.childData = "", this.stacked = !1, this.tagList = [], this.#e = new MutationObserver(this.#s.bind(this));
	}
	connectedCallback() {
		super.connectedCallback(), this.#a();
	}
	disconnectedCallback() {
		this.#e.disconnect(), super.disconnectedCallback();
	}
	firstUpdated() {
		requestAnimationFrame(() => {
			Mr.forEach((e) => {
				this.querySelectorAll(`${e.toLowerCase()}`).forEach((e) => this.addTag(e));
			}), this.#t = !0;
		});
	}
	updated(e) {
		if (e.has("childData")) {
			let e = gr(this.childData);
			e && this.#r(e);
		}
	}
	async focus() {
		await this.updateComplete;
		let e = this.tagList[0];
		e && e.focus();
	}
	#r(e) {
		Array.isArray(e) && (this.#i(), e.forEach((e, t) => {
			let n = document.createElement(e.tagName);
			e.text && (n.textContent = e.text), e.href && (n.href = e.href), this.addTag(n, t);
		}));
	}
	#i() {
		this.#n && (this.#n.forEach((e) => {
			e.parentElement && e.remove();
		}), this.#n.clear()), [...this.children].forEach((e) => {
			Mr.includes(e.tagName) && e.remove();
		}), this.tagList = [];
	}
	#a() {
		this.#e.observe(this, {
			childList: !0,
			subtree: !1
		});
	}
	#o(e) {
		return Mr.includes(e);
	}
	#s(e) {
		if (this.#t) for (let t of e) t.type === "childList" && (t.addedNodes.forEach((e) => this.#c(e)), t.removedNodes.forEach((e) => this.#l(e)));
	}
	#c(e) {
		if (this.#o(e.tagName)) {
			let t = Array.from(this.children).indexOf(e);
			this.addTag(e, t);
		}
	}
	#l(e) {
		this.#o(e.tagName) && this.#m(e);
	}
	#u() {
		if (this.tagList = [...this.renderRoot.querySelectorAll("ul li > *")], this.tagList.length > 0) {
			let e = !1;
			this.tagList.forEach((t) => {
				e &&= (t.siblingOfJumpLink = !0, !1), t.href !== "" && (e = !0);
			});
		}
	}
	addTag(e, t = -1) {
		return Array.from(this.children).includes(e) ? (this.#f(e, t), this.#u(), !0) : (this.#d(e, t), !1);
	}
	#d(e, t) {
		t === -1 || t >= this.children.length ? this.appendChild(e) : this.insertBefore(e, this.children[t]);
	}
	#f(e, t) {
		let n = e.cloneNode(!0), r = document.createElement("li");
		r.appendChild(n);
		let i = this.shadowRoot.querySelector("ul"), a = t;
		t === -1 || t >= i.children.length ? (i.appendChild(r), a = i.children.length - 1) : i.insertBefore(r, i.children[t]), n.addEventListener("tag-click", () => {
			this.dispatchEvent(new CustomEvent("tag-click", {
				detail: {
					target: n,
					index: a
				},
				bubbles: !0,
				composed: !0
			})), this.#m(n);
		}), this.#n ??= /* @__PURE__ */ new Map();
		let o = this.#p(e);
		this.#n.set(o, r), this.dispatchEvent(new CustomEvent("tag-added", {
			detail: {
				target: e,
				index: a
			},
			bubbles: !0,
			composed: !0
		}));
	}
	#p(e) {
		return `${e.tagName}::${e.textContent.trim()}`;
	}
	#m(e) {
		let t = this.#p(e), n = this.#n.get(t);
		if (!n) return !1;
		let r = Array.from(this.children).indexOf(e);
		return r === -1 && n.parentElement && (r = Array.from(n.parentElement.children).indexOf(n)), e.parentElement === this && e.remove(), n.parentElement && n.remove(), this.#n.delete(t), this.dispatchEvent(new CustomEvent("tag-removed", {
			detail: {
				target: e,
				index: r
			},
			bubbles: !0,
			composed: !0
		})), this.#u(), this.focus(), !0;
	}
	removeTag(e) {
		let t = this.#h(e);
		this.#m(t);
	}
	#h(e) {
		return e.tagName === "LI" && e.shadowRoot ? e.querySelector("cfpb-tag-filter") : this.contains(e) ? e : null;
	}
	render() {
		return G`<ul ?stacked=${this.stacked}></ul>`;
	}
	static init() {
		window.customElements.get("cfpb-tag-group") || window.customElements.define("cfpb-tag-group", e);
	}
}, Pr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-family:sans-serif}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{margin:0;font-family:inherit;font-size:100%}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button{appearance:none}input[type=search]::-webkit-search-decoration{appearance:none}button::-moz-focus-inner{border:0;padding:0}input::-moz-focus-inner{border:0;padding:0}textarea{vertical-align:top;overflow:auto}table{border-collapse:collapse;border-spacing:0}body{color:var(--text);font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);-webkit-font-smoothing:antialiased;font-size:100%;line-height:1.375}button,input,select,textarea{font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);line-height:1.1875}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size-adjust:var(--font-adjust-h1);letter-spacing:inherit;text-transform:inherit;margin-bottom:.441176em;font-size:2.125em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.76471em}@media only screen and (width<=37.5em){h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}h1,.h1{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.73077em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}}h2,.h2{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.73077em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.15385em}@media only screen and (width<=37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.36364em}h2,.h2{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.36364em}}h3,.h3{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.36364em}@media only screen and (width<=37.5em){h3,.h3{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.66667em}}h4,.h4{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:500;line-height:1.25}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.66667em}@media only screen and (width<=37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size-adjust:var(--font-adjust-h5);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.07143em;font-size:.875em;font-weight:600;line-height:1.25}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.14286em}h6,.h6{font-size-adjust:var(--font-adjust-h6);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.25em;font-size:.75em;font-weight:600;line-height:1.25}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-top:0;margin-bottom:15px;font-size:1.375em;font-weight:400;line-height:1.25}@media only screen and (width<=37.5em){.lead-paragraph{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;font-size:1.125em;font-weight:400;line-height:1.25}}.superheading{margin-bottom:.416667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);-webkit-text-decoration-color:var(--link-underline);-webkit-text-decoration-color:var(--link-underline);text-decoration-color:var(--link-underline);text-underline-offset:4.5px;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:1px}a:visited,a.visited{-webkit-text-decoration-color:var(--link-underline-visited);-webkit-text-decoration-color:var(--link-underline-visited);text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-hover);-webkit-text-decoration-color:var(--link-underline-hover);text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline-offset:1px;outline:thin dotted}a:active,a.active{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-active);-webkit-text-decoration-color:var(--link-underline-active);text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none}caption{text-align:left;margin-bottom:.625em}th,td{padding:.625em}thead th,thead td{background:var(--table-head-bg);color:var(--table-head-text);vertical-align:top;padding:.714286em;font-size:1em}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{text-align:left;font-weight:600}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;margin:0}blockquote{margin-left:.9375em;margin-right:.9375em}@media only screen and (width>=37.5625em){blockquote{margin-left:1.875em;margin-right:1.875em}}img{max-width:100%}figure{margin-left:0;margin-right:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);color:var(--code-text);border-radius:4px;font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.230769em .230769em 0;font-size:.8125em}pre{white-space:pre-wrap;overflow-wrap:break-word;padding:.625em .9375em;display:block}pre code{background-color:#0000;padding:0}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host{--select-border-default:var(--gray-60);--select-border-width-default:1px;--select-border-error:var(--red);--select-border-width-error:2px;--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-bg-disabled-default:var(--gray-10);--select-icon-bg-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--select-border:var(--select-border-default);--select-border-width:var(--select-border-width-default);--select-border-hover:var(--select-border-hover-default);--select-border-focus:var(--select-border-focus-default)}:host ::slotted(ul),:host ::slotted(ol){display:none!important}:host ::-webkit-scrollbar{appearance:none;width:7px}:host ::-webkit-scrollbar-thumb{background-color:var(--pacific-20);box-shadow:0 0 1px var(--gray-10)}:host button{outline:none;line-height:1.3125}:host .o-select{border:1px solid var(--select-border);grid-template-columns:1fr 35px;min-height:33px;display:grid;position:relative}:host .o-select:hover{border-color:var(--select-border-hover);box-shadow:0 0 0 1px var(--select-border-hover)}:host .o-select:focus,:host .o-select:focus-within{outline:1px dotted var(--select-border-focus);outline-offset:2px;box-shadow:0 0 0 1px var(--select-border-focus)}:host .o-select__cues{cursor:pointer;background-color:#0000;border:0;justify-content:space-evenly;align-items:center;padding:0;display:flex}:host .o-select__cues .o-select__cue-close,:host .o-select__cues .o-select__cue-open{display:none}:host .o-select__cues[aria-expanded=false] .o-select__cue-open{margin-top:-1px;display:block}:host .o-select__cues[aria-expanded=true] .o-select__cue-close{margin-top:-5px;display:block}:host .o-select .no-results{padding:6.5px 10px}:host .o-select button.o-select__cues{background:var(--select-icon-bg-default);border-left:1px solid var(--select-border-default)}:host .o-select__label{cursor:pointer;justify-content:space-between;align-items:center;gap:10px;padding-left:.625em;display:flex}:host .o-select__content{box-sizing:border-box;z-index:10;border:2px solid var(--pacific);background-color:var(--white);width:calc(100% + 2px);padding:0;position:absolute;left:-1px;overflow:hidden scroll}:host .o-select__content:after{width:100%;padding-bottom:.9375em}:host .o-select--down:before{bottom:-1px}:host .o-select--down .o-select__content{border-top:0;top:35px}:host .o-select--up .o-select__content{top:unset;border-bottom:0}@media print{:host .o-select__cues[aria-expanded=true] :host .o-select__cue-close,:host .o-select__cues[aria-expanded=false] :host .o-select__cue-open{display:none}:host .o-select__content[aria-expanded=false]{display:block;max-height:99999px!important}}:host([open]) .o-select:before{z-index:11;content:\"\";border-top:1px solid var(--select-border);pointer-events:none;width:100%;display:block;position:absolute}html[lang=ar] :host .o-select__cues{text-align:left}", Fr = class {
	constructor({ list: e, displayLabel: t, header: n }) {
		this.list = e, this.displayLabel = t, this.header = n;
	}
	onFocus() {
		this.header.focus();
	}
	onBlur(e) {
		e.isExpanded = !1;
	}
	onClick(e, t) {
		e.currentTarget.classList.contains("o-select__label") && (this.header.focus(), t.isExpanded = !t.isExpanded);
	}
	onItemClick(e, t) {
		let n = this.list.checkedItems[0]?.value ?? "";
		this.displayLabel && (this.displayLabel.textContent = n), t.optionList = t.optionList.map((e) => ({
			...e,
			checked: e.value === n
		})), t.isExpanded = !1;
	}
	onKeyDown(e, t) {
		if (t.shadowRoot.activeElement.tagName === "BUTTON") switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), t.isExpanded = !0, this.list.querySelector("cfpb-list-item")?.focus();
				break;
		}
	}
}, Ir = class {
	constructor({ list: e, input: t, tagGroup: n, flyout: r }) {
		this.list = e, this.input = t, this.tagGroup = n, this.flyout = r;
	}
	onFocus() {
		this.input.focus();
	}
	onBlur() {}
	onClick(e, t) {
		e.currentTarget.tagName === "CFPB-FORM-SEARCH-INPUT" ? t.isExpanded ? this.flyout()?.suspend() : this.flyout()?.expand() : this.flyout()?.resume();
	}
	onItemClick(e, t) {
		t.optionList = this.list.childData ?? [], e.currentTarget.focusItemAt(e.detail.index);
	}
	async onTagClick(e, t, n) {
		let r = this.tagGroup.tagList.filter((t) => t !== e.detail.target) ?? [];
		t.optionList = t.optionList.map((e) => ({
			...e,
			checked: r.some((t) => t.value === e.value)
		})), await t.updateComplete, n.focus();
	}
	onKeyDown(e, t) {
		let n = t.shadowRoot.activeElement.tagName;
		if (n === "CFPB-FORM-SEARCH-INPUT") switch (e.key) {
			case "Tab":
				e.shiftKey && (t.isExpanded ? (e.preventDefault(), t.isExpanded = !1, this.input.focus()) : this.tagGroup.tagList.length > 0 && (e.preventDefault(), this.tagGroup.focus()));
				break;
			case "ArrowDown":
				e.preventDefault(), t.isExpanded ? this.list.focusItemAt(0) : t.isExpanded = !0;
				break;
			case "Enter":
				e.preventDefault(), t.isExpanded = !t.isExpanded;
				break;
		}
		else if (n === "CFPB-LIST-ITEM") switch (e.key) {
			case "Tab":
				e.shiftKey && this.list.focusedIndex === 0 && (e.preventDefault(), this.list.focusItemAt(-1), this.input.focus());
				break;
		}
		e.key === "Escape" && (e.preventDefault(), t.isExpanded = !1);
	}
}, Lr = class e extends X {
	static styles = B`
    ${z(Pr)}
  `;
	#e;
	#t;
	#n;
	#r;
	#i = Z();
	#a = Z();
	#o = Z();
	#s = Z();
	#c = Z();
	#l = Z();
	#u = Z();
	#d;
	#f = !1;
	static get properties() {
		return {
			multiple: {
				type: Boolean,
				reflect: !0
			},
			disabled: { type: Boolean },
			validation: { type: String },
			label: { type: String },
			name: { type: String },
			title: {
				type: Boolean,
				attribute: !0
			},
			value: { type: String },
			maxlength: { type: Number },
			placeholder: { type: String },
			ariaLabelInput: {
				type: String,
				attribute: "aria-label-input"
			},
			ariaLabelList: {
				type: String,
				attribute: "aria-label-list"
			},
			isExpanded: {
				type: Boolean,
				attribute: "open",
				reflect: !0
			},
			selectedTexts: { type: Array },
			optionList: { type: Array }
		};
	}
	constructor() {
		super(), this.multiple = !1, this.options = [], this.selectedTexts = [], this.optionList = [], this.#d = this.#p.bind(this);
	}
	firstUpdated() {
		this.#_(), this.addEventListener("focus", () => {
			this.#e.onFocus();
		}), this.addEventListener("blur", () => {
			this.#e.onBlur(this);
		}), this.addEventListener("keydown", (e) => {
			this.#e.onKeyDown(e, this);
		});
	}
	disconnectedCallback() {
		document.removeEventListener("pointerdown", this.#d), document.removeEventListener("focusin", this.#d), super.disconnectedCallback();
	}
	#p(e) {
		e.composedPath().includes(this) || (this.isExpanded = !1);
	}
	#m(e) {
		let t = e.target.assignedNodes({ flatten: !0 }).filter((e) => e.nodeType === Node.ELEMENT_NODE && (e.tagName === "UL" || e.tagName === "OL"));
		if (!t || !t[0]) return;
		let n = [...t[0].querySelectorAll("li")].map((e) => {
			let t = e.hasAttribute("data-checked") || e.hasAttribute("checked"), n = e.textContent.trim();
			return t ? (this.multiple || (this.#u.value.textContent = n), {
				value: n,
				checked: "true"
			}) : { value: n };
		});
		this.optionList = n, this.#r = new xr(n.map((e) => e.value));
	}
	#h(e) {
		this.#t.suspend(), this.isExpanded ||= !0, this.#l.value.filterItems(this.#r.search(e.target.value)).length === 0 ? (this.#f = !0, this.requestUpdate()) : (this.#f = !1, this.requestUpdate(), this.#t.resume());
	}
	#g() {
		this.#t.suspend(), this.isExpanded = !1, this.#l.value.showAllItems(), this.#f = !1, this.requestUpdate(), this.#t.resume();
	}
	#_() {
		let e = this.#i.value, t = this.#o.value, n = this.isExpanded ? N.CLASSES.MH_DEFAULT : N.CLASSES.MH_ZERO;
		this.#n = new N(t).init(n), this.#t = new j(e), this.#t.setTransition(this.#n, this.#n.maxHeightZero, this.#n.maxHeightDynamic), this.#t.init(this.isExpanded), this.#t.addEventListener("expandbegin", () => {
			this.isExpanded = !0, t.classList.remove("u-hidden"), this.dispatchEvent(new CustomEvent("expandbegin", {
				detail: { target: this },
				bubbles: !0,
				composed: !0
			}));
		}), this.#t.addEventListener("collapseend", () => {
			this.isExpanded = !1, t.classList.add("u-hidden"), this.#i.value.classList.remove("o-select--up"), this.#i.value.classList.remove("o-select--down");
		}), this.#n.addEventListener("transitiondir", (e) => {
			this.#i.value.classList.add(`o-select--${e.dir}`);
		});
	}
	updated(e) {
		if (e.has("multiple") && (this.#e = this.#v()), e.has("isExpanded")) {
			let t = e.get("isExpanded"), n = this.isExpanded;
			n !== t && (n ? (this.#t.expand(), document.addEventListener("pointerdown", this.#d), document.addEventListener("focusin", this.#d)) : (this.#t.collapse(), document.removeEventListener("pointerdown", this.#d), document.removeEventListener("focusin", this.#d)));
		}
	}
	#v() {
		let e = {
			list: this.#l.value,
			flyout: () => this.#t
		};
		return this.multiple ? new Ir({
			...e,
			input: this.#s.value,
			tagGroup: this.#c.value
		}) : new Fr({
			...e,
			displayLabel: this.#u.value,
			header: this.#a.value
		});
	}
	#y(e) {
		this.#e?.onClick(e, this);
	}
	#b(e) {
		this.#e?.onItemClick(e, this);
	}
	#x(e) {
		this.#e?.onTagClick(e, this, this.#c.value);
	}
	render() {
		return G`
      <!--Light DOM content-->
      <slot @slotchange=${this.#m}></slot>

      ${this.multiple ? G`<cfpb-tag-group
            ${Q(this.#c)}
            .childData=${this.optionList.filter((e) => e.checked).map((e) => ({
			text: e.value,
			tagName: "cfpb-tag-filter"
		}))}
            @tag-click=${this.#x}
          >
          </cfpb-tag-group>` : q}

      <div
        class="o-select"
        data-js-hook="behavior_flyout-menu"
        ${Q(this.#i)}
      >
        ${this.#S()}

        <button
          tabindex=${this.multiple ? "-1" : "0"}
          class="o-select__cues"
          title="Expand content"
          data-js-hook="behavior_flyout-menu_trigger"
          ${Q(this.#a)}
          @click=${this.#y}
        >
          <span class="o-select__cue-open" role="img" aria-label="Show">
            ${$(ze)}
            <span class="u-visually-hidden">Show</span>
          </span>
          <span class="o-select__cue-close" role="img" aria-label="Hide">
            ${$(qe)}
            <span class="u-visually-hidden">Hide</span>
          </span>
        </button>
        <div
          class="o-select__content"
          data-js-hook="behavior_flyout-menu_content"
          ${Q(this.#o)}
        >
          <cfpb-list
            tabindex=${this.#f ? "-1" : "0"}
            @item-click=${this.#b}
            ?multiple=${this.multiple}
            .childData=${this.optionList}
            type=${this.multiple ? "checkbox" : "check"}
            aria-label=${this.ariaLabelList ? this.ariaLabelList : "Choose an item…"}
            ${Q(this.#l)}
          >
          </cfpb-list>
          <div class=${this.#f ? "no-results" : "u-hidden"}>
            No results found
          </div>
        </div>
      </div>
    `;
	}
	#S() {
		return this.multiple ? G`
          <cfpb-form-search-input
            ${Q(this.#s)}
            borderless
            ?name=${this.name}
            ?value=${this.value}
            ?placeholder=${this.placeholder}
            title=${this.title}
            ?maxlength=${this.maxlength}
            aria-label=${this.ariaLabelInput}
            ?validation=${this.validation}
            @clear=${this.#g}
            @input=${this.#h}
            @click=${this.#y}
          ></cfpb-form-search-input>
        ` : G`<div
          class="o-select__label"
          ${Q(this.#u)}
          @click=${this.#y}
        ></div>`;
	}
	static init() {
		br.init(), _r.init(), Nr.init(), window.customElements.get("cfpb-select") || window.customElements.define("cfpb-select", e);
	}
}, Rr = ":root{--beige:#bea96f;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gold:#ff9e1b;--gold-90:#ffab39;--gold-80:#ffb858;--gold-70:#ffc372;--gold-60:#ffce8d;--gold-50:#ffd8a3;--gold-40:#ffe1b9;--gold-30:#ffe8cb;--gold-20:#fff0dd;--gold-10:#fff6ec;--white:#fff;--black:#101820;--gray-darker:#293037;--gray-dark:#43484e;--gray-mid-dark:#4f5257;--gray:#5a5d61;--gray-90:#676a6f;--gray-80:#75787b;--gray-70:#838588;--gray-60:#919395;--gray-50:#a2a3a4;--gray-40:#b4b5b6;--gray-30:#c3c4c4;--gray-20:#d2d3d5;--gray-15:#dcdddf;--gray-10:#e7e8e9;--gray-5:#f7f8f9;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--green-dark:#1e9642;--green-mid-dark:#1fa040;--green:#20aa3f;--green-90:#48b753;--green-80:#66c368;--green-70:#93cf7c;--green-60:#addc91;--green-50:#bae0a2;--green-40:#c7e5b3;--green-30:#d4eac6;--green-20:#e2efd8;--green-10:#f0f8eb;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--navy:#254b87;--navy-90:#3e5f95;--navy-80:#5674a3;--navy-70:#6f88b2;--navy-60:#889cc0;--navy-50:#9daecc;--navy-40:#b3c0d9;--navy-30:#c3cde2;--navy-20:#d3daeb;--navy-10:#f4f6fa;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--neutral:#8a6c57;--neutral-90:#957865;--neutral-80:#a18573;--neutral-70:#ad9484;--neutral-60:#baa496;--neutral-50:#c6b4a9;--neutral-40:#d3c5bc;--neutral-30:#ddd1c9;--neutral-20:#e7ddd7;--neutral-10:#f8f5f2;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--pacific:#0072ce;--pacific-90:#2284d5;--pacific-80:#4497dc;--pacific-70:#61a7e2;--pacific-60:#7eb7e8;--pacific-50:#96c4ed;--pacific-40:#afd2f2;--pacific-30:#c3ddf6;--pacific-20:#d6e8fa;--pacific-10:#eff8fd;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--purple:#b4267a;--purple-90:#be438b;--purple-80:#c55998;--purple-70:#cd70a5;--purple-60:#d486b2;--purple-50:#dc9cbf;--purple-40:#e3b2cc;--purple-30:#ebc9d9;--purple-20:#f0d8e2;--purple-10:#fdf3f8;--red-dark:#b63014;--red-mid-dark:#c3381c;--red:#d14124;--red-90:#d75a40;--red-80:#dd735d;--red-70:#e28875;--red-60:#e79e8e;--red-50:#ebb0a3;--red-40:#f0c3b8;--red-30:#f3d1c8;--red-20:#f7e0d9;--red-10:#fbefec;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--teal:#257675;--teal-90:#3e8685;--teal-80:#579695;--teal-70:#70a6a5;--teal-60:#89b6b5;--teal-50:#9ec4c3;--teal-40:#b4d2d1;--teal-30:#c4dddc;--teal-20:#d4e7e6;--teal-10:#f0f7f6;--font-stack:system-ui,sans-serif;--text:var(--black);--link-text:var(--pacific);--link-underline:var(--pacific);--link-text-visited:var(--teal);--link-underline-visited:var(--teal);--link-text-hover:var(--pacific-dark);--link-underline-hover:var(--pacific-dark);--link-text-active:var(--navy);--link-underline-active:var(--navy);--table-head-bg:var(--gray-5);--table-border:var(--gray);--code-bg:var(--gray-5);--block-bg:var(--gray-5);--block-border:var(--gray-40);--content-main-border:var(--gray-40);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--input-border-disabled:var(--gray-60);--input-border-default:var(--gray-60);--input-border-hover-default:var(--pacific);--input-border-focus-default:var(--pacific);--input-border-error:var(--red);--input-border-warning:var(--gold);--input-border-success:var(--green);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-alert-icon-color-error:var(--red);--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-icon-bg-default:var(--gray-10);--select-bg-disabled-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-border-error:var(--red);--choice-border-hover-default:var(--pacific);--choice-border-focus-default:var(--pacific);--choice-outline-focus-default:var(--pacific);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-label-disabled-default:var(--gray-dark);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-border:var(--pacific);--label-helper:var(--gray-dark);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--range-bg:var(--gray-10);--range-bg-track:var(--gray-80);--range-bg-focused:var(--pacific-20);--table-head-text:var(--text);--code-text:var(--text);--block-border-top:var(--block-border);--block-border-right:var(--block-border);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}:host{width:100%}:host .m-pagination{grid-template-columns:auto 1fr auto;grid-template-areas:\"pag-btn-prev.pag-btn-next\"\"pag-form pag-form pag-form\";row-gap:.9375rem;display:grid}:host .m-pagination__form{background:var(--gray-5);color:var(--gray);border-radius:.25rem;flex-flow:wrap;grid-area:pag-form;place-content:center;gap:.625rem;padding:.3125rem;display:flex}:host .m-pagination__current-page{text-align:right;width:2.8125rem;font-weight:500}:host .m-pagination__label{white-space:nowrap;display:contents}:host .m-pagination__btn-prev{z-index:1;grid-area:pag-btn-prev}:host .m-pagination__btn-next{z-index:1;grid-area:pag-btn-next}@media only screen and (width>=37.5625em){:host .m-pagination{grid-template-areas:\"pag-btn-prev pag-form pag-btn-next\"}:host .m-pagination__btn-prev{border-top-right-radius:0;border-bottom-right-radius:0}:host .m-pagination__btn-next{border-top-left-radius:0;border-bottom-left-radius:0}}", zr = class e extends HTMLElement {
	#e;
	#t;
	constructor() {
		super(), this.#e = {}, this.#t = "";
	}
	connectedCallback() {
		let e = [], t = this.querySelector("template");
		if (!t) {
			e.push(["missing-template", "No <template> found inside <i18n-service>"]);
			return;
		}
		try {
			let n = t.innerHTML.trim(), r = JSON.parse(n);
			(typeof r != "object" || Array.isArray(r)) && e.push(["invalid-format", "Translations JSON must be an object keyed by the language codes"]), this.#e = r;
			let i = this.availableLanguages;
			i.length > 0 && !this.#t && (this.language = i[0]);
		} catch (t) {
			e.push([
				"parse-error",
				"Failed to parse i18n template JSON",
				{ err: t }
			]);
		}
		requestAnimationFrame(() => {
			e.forEach((e) => {
				this.#n(...e);
			});
		});
	}
	set language(e) {
		if (!this.#e[e]) {
			this.#n("invalid-language", `Unsupported language: ${e}`, { lang: e });
			return;
		}
		this.#t !== e && (this.#t = e, this.dispatchEvent(new CustomEvent("i18n-change", {
			detail: { language: e },
			bubbles: !0,
			composed: !0
		})));
	}
	get language() {
		return this.#t;
	}
	get availableLanguages() {
		return Object.keys(this.#e);
	}
	translate(e) {
		return this.#e[this.#t]?.[e] || e;
	}
	#n(e, t, n = {}) {
		this.dispatchEvent(new CustomEvent("i18n-error", {
			detail: {
				type: e,
				message: t,
				...n
			},
			bubbles: !0,
			composed: !0
		}));
	}
	static init() {
		window.customElements.get("i18n-service") || window.customElements.define("i18n-service", e);
	}
}, Br = class extends EventTarget {
	#e;
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Map();
	#i = !1;
	constructor(e) {
		super(), this.#e = e ?? {
			xs: {
				min: 0,
				max: 600
			},
			sm: {
				min: 601,
				max: 900
			},
			med: {
				min: 901,
				max: 1020
			},
			lg: {
				min: 1021,
				max: 1200
			},
			xl: { min: 1201 }
		};
		for (let [e, t] of Object.entries(this.#e)) {
			let n = this.#a(t), r = window.matchMedia(n);
			this.#t.set(e, r), this.#r.set(e, r.matches);
			let i = (t) => {
				this.#r.set(e, t.matches), this.#i || (this.#i = !0, requestAnimationFrame(() => {
					this.#i = !1, this.#o();
				}));
			};
			r.addEventListener("change", i), this.#n.set(e, i);
		}
		this.#o();
	}
	#a(e) {
		let t = [];
		return e.min != null && t.push(`(min-width: ${e.min}px)`), e.max != null && t.push(`(max-width: ${e.max}px)`), t.join(" and ");
	}
	#o() {
		let e = { matches: Object.fromEntries(this.#r) };
		this.dispatchEvent(new CustomEvent("change", { detail: e }));
	}
	get matches() {
		return Object.fromEntries(this.#r);
	}
	destroy() {
		for (let [e, t] of this.#t.entries()) {
			let n = this.#n.get(e);
			n && t.removeEventListener("change", n);
		}
		this.#t.clear(), this.#n.clear(), this.#r.clear();
	}
}, Vr = class e extends X {
	#e;
	#t;
	#n;
	static styles = B`
    ${z(Rr)}
  `;
	static properties = {
		currentPage: {
			type: Number,
			attribute: "value",
			reflect: !0
		},
		maxPage: {
			type: Number,
			attribute: "max",
			reflect: !0
		},
		lang: {
			type: String,
			reflect: !0
		}
	};
	constructor() {
		super(), this.currentPage = 1, this.maxPage = 1, this.#e = new Br(), this.#t = !1, this.lang = "en";
	}
	connectedCallback() {
		super.connectedCallback(), this.#n = this.querySelector("i18n-service"), this.#n && (this.addEventListener("i18n-change", this.#r), this.#n.language = this.lang);
	}
	#r() {
		let e = (e, t) => {
			let n = this.renderRoot.querySelector(e), r = n.querySelector("span");
			n && (r.innerHTML = this.#n.translate(t), n.requestUpdate());
		};
		e("#previous", "previous"), e("#next", "next"), e("#go", "go"), this.requestUpdate();
	}
	firstUpdated() {
		this.#e.addEventListener("change", this.#i), this.#t = this.#e.matches.xs;
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this.#e.removeEventListener("change", this.#i), this.#e.destroy();
	}
	#i = (e) => {
		let t = e.detail.matches.xs;
		t !== this.#t && (this.#t = t, this.requestUpdate());
	};
	updated(e) {
		(e.has("currentPage") || e.has("maxPage")) && (this.currentPage < 1 ? this.currentPage = 1 : this.currentPage > this.maxPage && (this.currentPage = this.maxPage)), e.has("lang") && (this.#n.language = this.lang, this.requestUpdate());
	}
	get isAtMin() {
		return this.currentPage <= 1;
	}
	get isAtMax() {
		return this.currentPage >= this.maxPage;
	}
	#a(e) {
		this.currentPage = e.target.value;
	}
	#o(e) {
		e.preventDefault();
		let t = parseInt(this.currentPage, 10);
		Number.isNaN(t) || this.#s(t);
	}
	#s(e) {
		let t = Math.max(1, Math.min(e, this.maxPage));
		t !== this.currentPage && (this.currentPage = t, this.dispatchEvent(new CustomEvent("page-change", {
			detail: { page: t },
			bubbles: !0,
			composed: !0
		})));
	}
	render() {
		let e = this.#n && this.#n.translate ? this.#n.translate.bind(this.#n) : (e) => e;
		return G`
      <slot></slot>
      <nav
        class="m-pagination"
        role="navigation"
        aria-label=${e("page number")}
      >
        <cfpb-button
          class="m-pagination__btn-prev"
          id="next"
          href="#"
          ?flush-right=${!this.#t}
          ?disabled=${this.isAtMin}
          @click=${() => this.#s(this.currentPage - 1)}
        >
          ${$(He)} ${e("next")}
        </cfpb-button>

        <form
          class="m-pagination__form"
          action="#pagination_content"
          @submit=${this.#o}
        >
          <label class="m-pagination__label">
            ${e("page")}
            <span class="u-visually-hidden">
              ${this.currentPage} ${e("out of")} ${this.maxPage}
              ${e("total pages")}
            </span>
            <input
              class="m-pagination__current-page"
              name="page"
              type="number"
              min="1"
              max=${this.maxPage}
              pattern="[0-9]*"
              inputmode="numeric"
              .value=${this.currentPage}
              @input=${this.#a}
            />
            ${e("of")} ${this.maxPage}
          </label>
          <cfpb-button id="go" type="submit" style-as-link>
            ${e("go")}
          </cfpb-button>
        </form>

        <cfpb-button
          class="m-pagination__btn-next"
          id="previous"
          href="#"
          ?flush-left=${!this.#t}
          ?disabled=${this.isAtMax}
          @click=${() => this.#s(this.currentPage + 1)}
        >
          ${e("previous")} ${$(Ge)}
        </cfpb-button>
      </nav>
    `;
	}
	static init() {
		zr.init(), window.customElements.get("cfpb-pagination") || window.customElements.define("cfpb-pagination", e);
	}
};
//#endregion
export { me as AlphaTransition, h as BEHAVIOR_PREFIX, A as BaseTransition, qn as CfpbButton, er as CfpbExpandable, lr as CfpbFileUpload, Qn as CfpbFormAlert, sr as CfpbFormChoice, Sr as CfpbFormSearch, br as CfpbFormSearchInput, fr as CfpbLabel, _r as CfpbList, hr as CfpbListItem, Vr as CfpbPagination, Lr as CfpbSelect, Or as CfpbTagFilter, Nr as CfpbTagGroup, Ar as CfpbTagTopic, Er as CfpbTagline, _ as EventObserver, I as Expandable, be as ExpandableGroup, ve as ExpandableGroupStyles, _e as ExpandableStyles, j as FlyoutMenu, m as JS_HOOK, f as MOBILE, N as MaxHeightTransition, ge as MoveTransition, at as Multiselect, g as STATE_PREFIX, Ce as Summary, Te as SummaryMinimal, xe as SummaryStyles, y as add, ht as bannerStyles, i as baseStyles, ee as behaviorAttach, O as behaviorFind, o as buttonGroupStyles, s as buttonLinkStyles, a as buttonStyles, ct as cardGroupStyles, st as cardStyles, D as checkBehaviorDom, C as checkDom, v as contains, yt as dateStyles, lt as emailSignupStyles, ut as featuredContentModuleStyles, De as formAlertStyles, Oe as formFieldStyles, Ee as formStyles, dt as heroStyles, ot as iconStyles, T as instantiateAll, se as isArray, oe as isDate, ne as isDefined, le as isEmpty, ce as isFunction, ue as isMobileUserAgent, ae as isNumber, re as isObject, ie as isString, te as isUndefined, ke as labelStyles, ft as layoutStyles, bt as linkStyles, xt as listStyles, St as metaHeaderStyles, r as normalizeStyles, gt as notificationStyles, _t as paginationStyles, Ct as pullQuoteStyles, Ae as rangeStyles, je as searchInputStyles, Me as selectStyles, w as setInitFlag, wt as slugHeaderStyles, vt as tableStyles, Ne as tagStyles, Tt as taglineStyles, Pe as textInputStyles, pt as textIntroductionStyles, c as utilitiesStyles, n as varsBreakpoints, p as viewportIsIn, mt as wellStyles };
