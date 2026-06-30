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
}, r = class e extends HTMLElement {
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
}, i = class extends EventTarget {
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
};
//#endregion
//#region packages/cfpb-design-system/src/elements/utilities/parse-child-data.js
function a(e, t = {}) {
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
//#region packages/cfpb-design-system/src/elements/utilities/search-service.js
var o = class {
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
}, s = { iconPath: "./icons/" }, c = { ...s }, l = !1, u = Object.keys(s);
function d(e) {
	if (l) {
		console.warn("CFPB Design System config already initialized");
		return;
	}
	for (let t of Object.keys(e)) u.includes(t) || console.warn(`CFPB Design System invalid config key: ${t}`);
	c = {
		...c,
		...e
	}, l = !0;
}
function f() {
	return c;
}
function p(e, t) {
	globalThis.customElements.get(e) || globalThis.customElements.define(e, t);
}
function m(e, t) {
	let n = e.constructor.themeProperties ?? [], r = e.tagName.toLowerCase().replace(/^cfpb-/, "");
	for (let i of n) {
		if (!t.has(i)) continue;
		let n = `--${r}-${i.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)}`, a = e[i];
		a ? e.style.setProperty(n, `var(--${a})`) : e.style.removeProperty(n);
	}
}
//#endregion
//#region node_modules/@lit/reactive-element/css-tag.js
var h = globalThis, g = h.ShadowRoot && (h.ShadyCSS === void 0 || h.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, _ = Symbol(), v = /* @__PURE__ */ new WeakMap(), y = class {
	constructor(e, t, n) {
		if (this._$cssResult$ = !0, n !== _) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, t = this.t;
		if (g && e === void 0) {
			let n = t !== void 0 && t.length === 1;
			n && (e = v.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && v.set(t, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, b = (e) => new y(typeof e == "string" ? e : e + "", void 0, _), x = (e, ...t) => new y(e.length === 1 ? e[0] : t.reduce(((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1]), e[0]), e, _), S = (e, t) => {
	if (g) e.adoptedStyleSheets = t.map(((e) => e instanceof CSSStyleSheet ? e : e.styleSheet));
	else for (let n of t) {
		let t = document.createElement("style"), r = h.litNonce;
		r !== void 0 && t.setAttribute("nonce", r), t.textContent = n.cssText, e.appendChild(t);
	}
}, C = g ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return b(t);
})(e) : e, { is: ee, defineProperty: te, getOwnPropertyDescriptor: ne, getOwnPropertyNames: re, getOwnPropertySymbols: ie, getPrototypeOf: ae } = Object, w = globalThis, T = w.trustedTypes, oe = T ? T.emptyScript : "", se = w.reactiveElementPolyfillSupport, E = (e, t) => e, D = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? oe : null;
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
}, ce = (e, t) => !ee(e, t), le = {
	attribute: !0,
	type: String,
	converter: D,
	reflect: !1,
	useDefault: !1,
	hasChanged: ce
};
Symbol.metadata ??= Symbol("metadata"), w.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var O = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = le) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && te(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = ne(this.prototype, e) ?? {
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
		return this.elementProperties.get(e) ?? le;
	}
	static _$Ei() {
		if (this.hasOwnProperty(E("elementProperties"))) return;
		let e = ae(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(E("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E("properties"))) {
			let e = this.properties, t = [...re(e), ...ie(e)];
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
			for (let e of n) t.unshift(C(e));
		} else e !== void 0 && t.push(C(e));
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
		return S(e, this.constructor.elementStyles), e;
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
			let i = (n.converter?.toAttribute === void 0 ? D : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? D : e.converter;
			this._$Em = r, this[r] = i.fromAttribute(t, e.type) ?? this._$Ej?.get(r) ?? null, this._$Em = null;
		}
	}
	requestUpdate(e, t, n) {
		if (e !== void 0) {
			let r = this.constructor, i = this[e];
			if (n ??= r.getPropertyOptions(e), !((n.hasChanged ?? ce)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(r._$Eu(e, n)))) return;
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
O.elementStyles = [], O.shadowRootOptions = { mode: "open" }, O[E("elementProperties")] = /* @__PURE__ */ new Map(), O[E("finalized")] = /* @__PURE__ */ new Map(), se?.({ ReactiveElement: O }), (w.reactiveElementVersions ??= []).push("2.1.0");
//#endregion
//#region node_modules/lit-html/lit-html.js
var ue = globalThis, de = ue.trustedTypes, fe = de ? de.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, pe = "$lit$", k = `lit$${Math.random().toFixed(9).slice(2)}$`, me = "?" + k, he = `<${me}>`, A = document, ge = () => A.createComment(""), _e = (e) => e === null || typeof e != "object" && typeof e != "function", ve = Array.isArray, ye = (e) => ve(e) || typeof e?.[Symbol.iterator] == "function", be = "[ 	\n\f\r]", xe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Se = /-->/g, Ce = />/g, j = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), we = /'/g, Te = /"/g, Ee = /^(?:script|style|textarea|title)$/i, M = ((e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}))(1), N = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), De = /* @__PURE__ */ new WeakMap(), F = A.createTreeWalker(A, 129);
function Oe(e, t) {
	if (!ve(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return fe === void 0 ? t : fe.createHTML(t);
}
var ke = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = xe;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === xe ? c[1] === "!--" ? o = Se : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = j) : (Ee.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = j) : o = Ce : o === j ? c[0] === ">" ? (o = i ?? xe, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? j : c[3] === "\"" ? Te : we) : o === Te || o === we ? o = j : o === Se || o === Ce ? o = xe : (o = j, i = void 0);
		let d = o === j && e[t + 1].startsWith("/>") ? " " : "";
		a += o === xe ? n + he : l >= 0 ? (r.push(s), n.slice(0, l) + pe + n.slice(l) + k + d) : n + k + (l === -2 ? t : d);
	}
	return [Oe(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, Ae = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = ke(t, n);
		if (this.el = e.createElement(l, r), F.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = F.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(pe)) {
					let t = u[o++], n = i.getAttribute(e).split(k), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? Pe : r[1] === "?" ? Fe : r[1] === "@" ? Ie : Ne
					}), i.removeAttribute(e);
				} else e.startsWith(k) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (Ee.test(i.tagName)) {
					let e = i.textContent.split(k), t = e.length - 1;
					if (t > 0) {
						i.textContent = de ? de.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], ge()), F.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], ge());
					}
				}
			} else if (i.nodeType === 8) if (i.data === me) c.push({
				type: 2,
				index: a
			});
			else {
				let e = -1;
				for (; (e = i.data.indexOf(k, e + 1)) !== -1;) c.push({
					type: 7,
					index: a
				}), e += k.length - 1;
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = A.createElement("template");
		return n.innerHTML = e, n;
	}
};
function I(e, t, n = e, r) {
	if (t === N) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = _e(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = I(e, i._$AS(e, t.values), i, r)), t;
}
var je = class {
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
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? A).importNode(t, !0);
		F.currentNode = r;
		let i = F.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new Me(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Le(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = F.nextNode(), a++);
		}
		return F.currentNode = A, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, Me = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
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
		e = I(this, e, t), _e(e) ? e === P || e == null || e === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : e !== this._$AH && e !== N && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? ye(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== P && _e(this._$AH) ? this._$AA.nextSibling.data = e : this.T(A.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = Ae.createElement(Oe(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new je(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = De.get(e.strings);
		return t === void 0 && De.set(e.strings, t = new Ae(e)), t;
	}
	k(t) {
		ve(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(ge()), this.O(ge()), this, this.options)) : r = n[i], r._$AI(a), i++;
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
}, Ne = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = P, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = P;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = I(this, e, t, 0), a = !_e(e) || e !== this._$AH && e !== N, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = I(this, r[n + o], t, o), s === N && (s = this._$AH[o]), a ||= !_e(s) || s !== this._$AH[o], s === P ? e = P : e !== P && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, Pe = class extends Ne {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === P ? void 0 : e;
	}
}, Fe = class extends Ne {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== P);
	}
}, Ie = class extends Ne {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = I(this, e, t, 0) ?? P) === N) return;
		let n = this._$AH, r = e === P && n !== P || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== P && (n === P || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Le = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		I(this, e);
	}
}, Re = {
	M: pe,
	P: k,
	A: me,
	C: 1,
	L: ke,
	R: je,
	D: ye,
	V: I,
	I: Me,
	H: Ne,
	N: Fe,
	U: Ie,
	B: Pe,
	F: Le
}, ze = ue.litHtmlPolyfillSupport;
ze?.(Ae, Me), (ue.litHtmlVersions ??= []).push("3.3.0");
var Be = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new Me(t.insertBefore(ge(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Ve = globalThis, L = class extends O {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Be(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return N;
	}
};
L._$litElement$ = !0, L.finalized = !0, Ve.litElementHydrateSupport?.({ LitElement: L });
var He = Ve.litElementPolyfillSupport;
He?.({ LitElement: L }), (Ve.litElementVersions ??= []).push("4.2.0");
//#endregion
//#region packages/cfpb-design-system/src/elements/cfpb-alert/styles.component.scss?inline
var Ue = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}:host{--alert-bg-default:var(--gray-5);--alert-bg-success:var(--green-10);--alert-bg-warning:var(--gold-10);--alert-bg-error:var(--red-10);--alert-border-default:var(--gray-40);--alert-border-success:var(--green);--alert-border-warning:var(--gold);--alert-border-error:var(--red);--alert-icon-color-default:var(--gray);--alert-icon-color-success:var(--green);--alert-icon-color-warning:var(--gold);--alert-icon-color-error:var(--red);--alert-icon-color-loading:var(--gray);--alert-bg:var(--alert-bg-default);--alert-border:var(--alert-border-default);--alert-icon-color:var(--alert-icon-color-default)}:host([status=success]){--alert-bg:var(--alert-bg-success);--alert-border:var(--alert-border-success);--alert-icon-color:var(--alert-icon-color-success)}:host([status=warning]){--alert-bg:var(--alert-bg-warning);--alert-border:var(--alert-border-warning);--alert-icon-color:var(--alert-icon-color-warning)}:host([status=error]){--alert-bg:var(--alert-bg-error);--alert-border:var(--alert-border-error);--alert-icon-color:var(--alert-icon-color-error)}:host([status]) a{color:var(--pacific-mid-dark);-webkit-text-decoration-color:var(--pacific-mid-dark);-webkit-text-decoration-color:var(--pacific-mid-dark);text-decoration-color:var(--pacific-mid-dark)}:host([status]) a:visited,:host([status]) a.visited{-webkit-text-decoration-color:var(--teal);-webkit-text-decoration-color:var(--teal);text-decoration-color:var(--teal);color:var(--teal)}:host([status]) a:hover,:host([status]) a.hover{-webkit-text-decoration-color:var(--pacific-dark);-webkit-text-decoration-color:var(--pacific-dark);text-decoration-color:var(--pacific-dark);color:var(--pacific-dark)}:host([status]) a:focus,:host([status]) a.focus{-webkit-text-decoration-color:var(--pacific-mid-dark);-webkit-text-decoration-color:var(--pacific-mid-dark);text-decoration-color:var(--pacific-mid-dark);color:var(--pacific-mid-dark)}:host([status]) a:active,:host([status]) a.active{-webkit-text-decoration-color:var(--navy-dark);-webkit-text-decoration-color:var(--navy-dark);text-decoration-color:var(--navy-dark);color:var(--navy-dark)}::slotted(*){margin-top:.3125rem;margin-bottom:.9375rem;display:block}@media only screen and (width>=37.5625em){::slotted(*){margin-bottom:0}}::slotted(cfpb-list){margin-top:.9375rem}@media only screen and (width>=37.5625em){::slotted(cfpb-list){margin-top:.3125rem}}cfpb-icon{color:var(--alert-icon-color);flex:none}cfpb-icon+.content{flex-grow:1}@media only screen and (width>=37.5625em){cfpb-icon{font-size:1.125rem}}.container{background:var(--alert-bg);border:1px solid var(--alert-border);gap:.3125rem;padding:.9375rem;display:flex}.content{max-width:41.875rem}.message{font-size:1rem;font-weight:500;line-height:1.25}@media only screen and (width>=37.5625em){.message{font-size:1.125rem}}", We = ":host{--icon-mask-image-url:\"\";vertical-align:middle;height:1.1875em;color:var(--icon-color,inherit);display:inline-block}:host([spin]){transform-origin:50%;animation:1.25s linear infinite spin-animation}@keyframes spin-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}span{-webkit-mask-image:var(--icon-mask-image-url);-webkit-mask-image:var(--icon-mask-image-url);mask-image:var(--icon-mask-image-url);background-color:currentColor;line-height:0;display:inline-block;-webkit-mask-position:50%;mask-position:50%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}img{opacity:0;height:1.1875em}", R = class e extends L {
	static styles = x`
    ${b(We)}
  `;
	static themeProperties = ["color"];
	static properties = {
		color: { type: String },
		name: { type: String },
		spin: {
			type: Boolean,
			attribute: !0
		}
	};
	updated(e) {
		m(this, e);
	}
	render() {
		if (!this.name) return null;
		let e = `${f().iconPath + this.name}.svg`;
		return M`<span style="--icon-mask-image-url:url('${e}')">
      <img
        src="${e}"
        loading="lazy"
        decoding="async"
        alt=""
        aria-hidden="true"
      />
    </span>`;
	}
	static init() {
		p("cfpb-icon", e);
	}
}, Ge = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}:host{--cfpb-list-gap:10px}:host([horizontal]) ul{flex-direction:row;width:fit-content}@media only screen and (width<=37.5em){:host([horizontal]) ul:has(cfpb-link:not([inline])){flex-direction:column;width:100%}}@media only screen and (width>=37.5625em){:host([gap=compact]) ul{--cfpb-list-gap:5px}:host([gap=wide]) ul{--cfpb-list-gap:30px}}ul{margin:0;padding-left:0;list-style-type:none}ul li{margin-bottom:0;display:contents}ul{gap:calc(var(--cfpb-list-gap) / 16px * 1rem);flex-flow:column wrap;display:flex}ul:has(cfpb-tag-filter){--cfpb-list-gap:15px}@media only screen and (width<=37.5em){:is(ul:has(cfpb-tag-topic),ul:has(cfpb-link:not([inline]))){--cfpb-list-gap:0}}html[lang=ar]{direction:rtl;padding-right:0}", Ke = [
	"CFPB-TAG-FILTER",
	"CFPB-TAG-TOPIC",
	"CFPB-LIST-ITEM",
	"CFPB-LINK"
], qe = class e extends L {
	static styles = x`
    ${b(Ge)}
  `;
	#e = [];
	static properties = {
		childData: {
			type: String,
			attribute: "childdata"
		},
		colorTheme: {
			type: String,
			reflect: !0,
			attribute: "color-theme"
		}
	};
	get items() {
		return [...this.renderRoot.querySelectorAll("ul li > *")];
	}
	#t;
	#n = !1;
	#r;
	#i = /* @__PURE__ */ new WeakMap();
	constructor() {
		super(), this.childData = "", this.#t = new MutationObserver(this.#l.bind(this)), this.#r = /* @__PURE__ */ new Map();
	}
	connectedCallback() {
		super.connectedCallback(), this.#s();
	}
	disconnectedCallback() {
		this.#t.disconnect(), super.disconnectedCallback();
	}
	firstUpdated() {
		requestAnimationFrame(() => {
			Ke.forEach((e) => {
				this.querySelectorAll(`${e.toLowerCase()}`).forEach((e) => this.addTag(e));
			}), this.#n = !0;
		});
	}
	updated(e) {
		if (e.has("childData")) {
			let e = a(this.childData);
			e && this.#a(e);
		}
	}
	async focus() {
		await this.updateComplete;
		let e = this.#e[0];
		e && e.focus();
	}
	#a(e) {
		Array.isArray(e) && (this.#o(), e.forEach((e, t) => {
			let n = document.createElement(e.tagName);
			e.text && (n.textContent = e.text), e.href && n.setAttribute("href", e.href), this.addTag(n, t);
		}));
	}
	#o() {
		this.#r && (this.#r.forEach((e) => {
			e.parentElement && e.remove();
		}), this.#r.clear()), [...this.children].forEach((e) => {
			Ke.includes(e.tagName) && e.remove();
		}), this.#e = [];
	}
	#s() {
		this.#t.observe(this, {
			childList: !0,
			subtree: !1
		});
	}
	#c(e) {
		return Ke.includes(e);
	}
	#l(e) {
		if (this.#n) for (let t of e) t.type === "childList" && (t.addedNodes.forEach((e) => this.#u(e)), t.removedNodes.forEach((e) => this.#d(e)));
	}
	#u(e) {
		if (this.#c(e.tagName)) {
			let t = Array.from(this.children).indexOf(e);
			this.addTag(e, t);
		}
	}
	#d(e) {
		this.#c(e.tagName) && this.#h(e);
	}
	#f() {
		if (this.#e = this.items, this.#e.length > 0) {
			let e = !1;
			this.#e.forEach((t) => {
				e &&= (t.siblingOfJumpLink = !0, !1), t.href !== "" && (e = !0);
			});
		}
	}
	addTag(e, t = -1) {
		return Array.from(this.children).includes(e) ? (this.#m(e, t), this.#f(), !0) : (this.#p(e, t), !1);
	}
	#p(e, t) {
		t === -1 || t >= this.children.length ? this.appendChild(e) : this.insertBefore(e, this.children[t]);
	}
	#m(e, t) {
		let n = e.cloneNode(!0);
		this.#i.set(n, e);
		let r = document.createElement("li");
		r.appendChild(n);
		let i = this.shadowRoot.querySelector("ul"), a = t;
		t === -1 || t >= i.children.length ? (i.appendChild(r), a = i.children.length - 1) : i.insertBefore(r, i.children[t]), this.colorTheme && n.tagName === "CFPB-LINK" && (n.colorTheme = this.colorTheme), n.addEventListener("item-click", () => {
			this.dispatchEvent(new CustomEvent("item-click", {
				detail: {
					target: n,
					index: a
				},
				bubbles: !0,
				composed: !0
			})), this.#h(n);
		}), this.#r.set(e, r), this.dispatchEvent(new CustomEvent("item-added", {
			detail: {
				target: e,
				index: a
			},
			bubbles: !0,
			composed: !0
		}));
	}
	#h(e) {
		let t = this.#i.get(e) || e, n = this.#r.get(t);
		if (!n) return !1;
		let r = Array.from(this.children).indexOf(e);
		return r === -1 && n.parentElement && (r = Array.from(n.parentElement.children).indexOf(n)), e.parentElement === this && e.remove(), n.parentElement && n.remove(), this.#r.delete(t), this.dispatchEvent(new CustomEvent("item-removed", {
			detail: {
				target: e,
				index: r
			},
			bubbles: !0,
			composed: !0
		})), this.#f(), this.focus(), !0;
	}
	removeTag(e) {
		let t = this.#g(e);
		this.#h(t);
	}
	#g(e) {
		return e.tagName === "LI" && e.shadowRoot ? e.querySelector("cfpb-tag-filter") : this.contains(e) ? e : null;
	}
	render() {
		return M`<ul></ul>`;
	}
	static init() {
		p("cfpb-list", e);
	}
}, Je = class e extends L {
	static styles = x`
    ${b(Ue)}
  `;
	static themeProperties = [
		"iconColor",
		"border",
		"bg"
	];
	static properties = {
		bg: { type: String },
		border: { type: String },
		iconColor: {
			type: String,
			attribute: "icon-color"
		},
		status: { type: String },
		message: { type: String }
	};
	constructor() {
		super(), this.status = "info", this.message = "Alert";
	}
	updated(e) {
		m(this, e);
	}
	get icon() {
		let e = {
			info: { name: "warning-round" },
			warning: { name: "warning-round" },
			success: { name: "approved-round" },
			error: { name: "error-round" },
			loading: { name: "update" }
		};
		return e[this.status] || e.info;
	}
	render() {
		return M`
      <div class="container" role="alert">
        <cfpb-icon
          name=${this.icon.name}
          ?spin=${this.status === "loading"}
        ></cfpb-icon>
        <div class="content">
          <div class="message">${this.message}</div>

          <div class="explanation">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
	}
	static init() {
		R.init(), qe.init(), p("cfpb-alert", e);
	}
}, Ye = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Xe = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), Ze = class {
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
}, Qe = Xe(class extends Ze {
	constructor(e) {
		if (super(e), e.type !== Ye.ATTRIBUTE || e.name !== "class" || e.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
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
		return N;
	}
}), { I: $e } = Re, et = (e) => e.strings === void 0, tt = (e, t) => {
	let n = e._$AN;
	if (n === void 0) return !1;
	for (let e of n) e._$AO?.(t, !1), tt(e, t);
	return !0;
}, nt = (e) => {
	let t, n;
	do {
		if ((t = e._$AM) === void 0) break;
		n = t._$AN, n.delete(e), e = t;
	} while (n?.size === 0);
}, rt = (e) => {
	for (let t; t = e._$AM; e = t) {
		let n = t._$AN;
		if (n === void 0) t._$AN = n = /* @__PURE__ */ new Set();
		else if (n.has(e)) break;
		n.add(e), ot(t);
	}
};
function it(e) {
	this._$AN === void 0 ? this._$AM = e : (nt(this), this._$AM = e, rt(this));
}
function at(e, t = !1, n = 0) {
	let r = this._$AH, i = this._$AN;
	if (i !== void 0 && i.size !== 0) if (t) if (Array.isArray(r)) for (let e = n; e < r.length; e++) tt(r[e], !1), nt(r[e]);
	else r != null && (tt(r, !1), nt(r));
	else tt(this, e);
}
var ot = (e) => {
	e.type == Ye.CHILD && (e._$AP ??= at, e._$AQ ??= it);
}, st = class extends Ze {
	constructor() {
		super(...arguments), this._$AN = void 0;
	}
	_$AT(e, t, n) {
		super._$AT(e, t, n), rt(this), this.isConnected = e._$AU;
	}
	_$AO(e, t = !0) {
		e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (tt(this, e), nt(this));
	}
	setValue(e) {
		if (et(this._$Ct)) this._$Ct._$AI(e, this);
		else {
			let t = [...this._$Ct._$AH];
			t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
		}
	}
	disconnected() {}
	reconnected() {}
}, z = () => new ct(), ct = class {}, lt = /* @__PURE__ */ new WeakMap(), B = Xe(class extends st {
	render(e) {
		return P;
	}
	update(e, [t]) {
		let n = t !== this.G;
		return n && this.G !== void 0 && this.rt(void 0), (n || this.lt !== this.ct) && (this.G = t, this.ht = e.options?.host, this.rt(this.ct = e.element)), P;
	}
	rt(e) {
		if (this.isConnected || (e = void 0), typeof this.G == "function") {
			let t = this.ht ?? globalThis, n = lt.get(t);
			n === void 0 && (n = /* @__PURE__ */ new WeakMap(), lt.set(t, n)), n.get(this.G) !== void 0 && this.G.call(this.ht, void 0), n.set(this.G, e), e !== void 0 && this.G.call(this.ht, e);
		} else this.G.value = e;
	}
	get lt() {
		return typeof this.G == "function" ? lt.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
	}
	disconnected() {
		this.lt === this.ct && this.rt(void 0);
	}
	reconnected() {
		this.rt(this.ct);
	}
}), ut = "button.a-btn::-moz-focus-inner{border:0}input.a-btn::-moz-focus-inner{border:0}.a-btn{appearance:none;box-sizing:border-box;cursor:pointer;text-align:center;border:0;border-radius:.25em;justify-content:center;align-items:center;gap:.625rem;width:fit-content;height:fit-content;margin:0;padding:.5em .875em;font-size:1em;font-weight:500;line-height:1.1875;text-decoration:none;transition:background-color .1s;display:flex}.a-btn,.a-btn:link,.a-btn:visited{background-color:var(--btn-bg);color:var(--btn-text)}.a-btn:hover,.a-btn.hover,.a-btn:focus,.a-btn.focus{background-color:var(--btn-bg-hover);color:var(--btn-text)}.a-btn:focus,.a-btn.focus{outline:1px dotted var(--btn-bg);outline-offset:1px}.a-btn:active,.a-btn.active{background-color:var(--btn-bg-active)}.a-btn--secondary,.a-btn--secondary:link,.a-btn--secondary:visited{background-color:var(--btn-secondary-bg);color:var(--btn-secondary-text);box-shadow:0 0 0 1px var(--btn-secondary-border) inset}.a-btn--secondary:hover,.a-btn--secondary.hover,.a-btn--secondary:focus,.a-btn--secondary.focus{background-color:var(--btn-secondary-bg-hover);color:var(--btn-secondary-text-hover);box-shadow:0 0 0 1px var(--btn-secondary-border-hover) inset}.a-btn--secondary:focus,.a-btn--secondary.focus{outline-color:var(--btn-secondary-border)}.a-btn--secondary:active,.a-btn--secondary.active{background-color:var(--btn-secondary-bg-active);color:var(--btn-secondary-text-active);box-shadow:0 0 0 1px var(--btn-secondary-border-active) inset}.a-btn--warning,.a-btn--warning:link,.a-btn--warning:visited{background-color:var(--btn-warning-bg);color:var(--btn-warning-text)}.a-btn--warning:hover,.a-btn--warning.hover,.a-btn--warning:focus,.a-btn--warning.focus{background-color:var(--btn-warning-bg-hover)}.a-btn--warning:focus,.a-btn--warning.focus{outline-color:var(--btn-warning-bg)}.a-btn--warning:active,.a-btn--warning.active{background-color:var(--btn-warning-bg-active)}.a-btn--disabled,.a-btn--disabled:link,.a-btn--disabled:visited,.a-btn--disabled:hover,.a-btn--disabled.hover,.a-btn--disabled:focus,.a-btn--disabled.focus,.a-btn--disabled:active,.a-btn--disabled.active,.a-btn[disabled],.a-btn[disabled]:link,.a-btn[disabled]:visited,.a-btn[disabled]:hover,.a-btn[disabled].hover,.a-btn[disabled]:focus,.a-btn[disabled].focus,.a-btn[disabled]:active,.a-btn[disabled].active,.a-btn[aria-disabled=true],.a-btn[aria-disabled=true]:link,.a-btn[aria-disabled=true]:visited,.a-btn[aria-disabled=true]:hover,.a-btn[aria-disabled=true].hover,.a-btn[aria-disabled=true]:focus,.a-btn[aria-disabled=true].focus,.a-btn[aria-disabled=true]:active,.a-btn[aria-disabled=true].active{background-color:var(--btn-disabled-bg);color:var(--btn-disabled-text);box-shadow:none;cursor:not-allowed}.a-btn--disabled:focus,.a-btn--disabled.focus,.a-btn[disabled]:focus,.a-btn[disabled].focus,.a-btn[aria-disabled=true]:focus,.a-btn[aria-disabled=true].focus{outline-color:var(--btn-disabled-outline)}@media only screen and (width<=37.5em){.a-btn--full-on-xs{width:100%}}.a-btn--link{box-shadow:none;border-radius:0;padding:1.5px 0;background-color:#0000!important}.a-btn--link,.a-btn--link:link,.a-btn--link:visited{-webkit-text-decoration-color:var(--link-text);-webkit-text-decoration-color:var(--link-text);text-decoration-color:var(--link-text);color:var(--link-text);background-color:#0000}.a-btn--link:hover,.a-btn--link.hover{-webkit-text-decoration-color:var(--link-text-hover);-webkit-text-decoration-color:var(--link-text-hover);text-decoration-color:var(--link-text-hover);color:var(--link-text-hover);box-shadow:none;background-color:#0000;text-decoration-style:solid}.a-btn--link:focus-visible,.a-btn--link.focus{outline:1px dotted var(--link-text);color:var(--link-text);background-color:#0000}.a-btn--link:active,.a-btn--link.active{-webkit-text-decoration-color:var(--link-text-active);-webkit-text-decoration-color:var(--link-text-active);text-decoration-color:var(--link-text-active);color:var(--link-text-active);background-color:#0000;text-decoration-style:solid}.a-btn--link.a-btn--warning,.a-btn--link.a-btn--warning:link,.a-btn--link.a-btn--warning:visited{-webkit-text-decoration-color:var(--btn-warning-bg);-webkit-text-decoration-color:var(--btn-warning-bg);text-decoration-color:var(--btn-warning-bg);color:var(--btn-warning-bg);background-color:#0000}.a-btn--link.a-btn--warning:hover,.a-btn--link.a-btn--warning.hover{-webkit-text-decoration-color:var(--btn-warning-bg-hover);-webkit-text-decoration-color:var(--btn-warning-bg-hover);text-decoration-color:var(--btn-warning-bg-hover);color:var(--btn-warning-bg-hover);box-shadow:none;background-color:#0000;text-decoration-style:solid}.a-btn--link.a-btn--warning:focus-visible,.a-btn--link.a-btn--warning.focus{outline:1px dotted var(--btn-warning-bg);color:var(--btn-warning-bg);background-color:#0000}.a-btn--link.a-btn--warning:active,.a-btn--link.a-btn--warning.active{-webkit-text-decoration-color:var(--btn-warning-bg-active);-webkit-text-decoration-color:var(--btn-warning-bg-active);text-decoration-color:var(--btn-warning-bg-active);color:var(--btn-warning-bg-active);background-color:#0000;text-decoration-style:solid}:host{width:fit-content;display:flex}@media only screen and (width<=37.5em){:host([full-on-mobile]),:host([full-on-mobile]) button,:host([full-on-mobile]) [role=button]{width:100%}}:host([flush-left]) button,:host([flush-left]) [role=button]{border-top-left-radius:0;border-bottom-left-radius:0}:host([flush-right]) button,:host([flush-right]) [role=button]{border-top-right-radius:0;border-bottom-right-radius:0}button{font:inherit}", dt = ":host{--icon-text-div-color-default:var(--pacific-60);--icon-text-div-color-disabled:var(--gray-60);--icon-text-div-color:var(--icon-text-div-color-default)}:host([inline]) .wrap{display:inline}:host([inline]) cfpb-icon{position:relative;top:-1px}:host(:not([has-div])) .wrap{gap:.3125rem}:host(:not([has-div])) .div{display:none}:host(:not([mobile-icon-align-end])) .wrap{width:fit-content}@media only screen and (width<=37.5em){:host(:not([inline])[mobile-icon-align-end]) .wrap{justify-content:right;display:flex}:host(:not([inline])[mobile-icon-align-end]) .text{width:100%}:host([underline=tablet-up]) .text{text-decoration:none!important}}:host([underline=none]) .text{text-decoration:none}:host([disabled]){--icon-text-div-color:var(--icon-text-div-color-disabled)!important}:host(:not([disabled])[underline=all]) .text,:host(:not([disabled])[underline=tablet-up]) .text{text-underline-offset:4.5px;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:1px}:host(:not([disabled])[underline=all]:hover) .text,:host(:not([disabled])[underline=tablet-up]:hover) .text{text-decoration-style:solid}@media only screen and (width>=37.5625em){:host(:not([disabled])[underline=none]:hover) .text{text-underline-offset:4.5px;text-decoration-line:underline;text-decoration-style:solid;text-decoration-thickness:1px}}.wrap{vertical-align:top;align-items:center;gap:.625rem;display:inline-flex}.div{background:var(--icon-text-div-color);align-self:stretch;width:1px}.text{overflow-wrap:break-word}slot{display:contents}", ft = class e extends L {
	static styles = x`
    ${b(dt)}
  `;
	static themeProperties = ["divColor"];
	static properties = {
		divColor: {
			type: String,
			attribute: "div-color",
			reflect: !0
		},
		disabled: {
			type: Boolean,
			reflect: !0
		},
		iconLeft: {
			type: String,
			attribute: "icon-left"
		},
		iconRight: {
			type: String,
			attribute: "icon-right"
		},
		isIconLeftSpin: {
			type: Boolean,
			attribute: "icon-left-spin"
		},
		isIconRightSpin: {
			type: Boolean,
			attribute: "icon-right-spin"
		},
		hasDiv: {
			type: Boolean,
			attribute: "has-div",
			reflect: !0
		},
		underline: {
			type: String,
			attribute: "underline",
			reflect: !0
		},
		mobileIconAlignEnd: {
			type: Boolean,
			attribute: "mobile-icon-align-end",
			reflect: !0
		},
		inline: {
			type: Boolean,
			reflect: !0
		}
	};
	constructor() {
		super(), this.disabled = !1, this.isIconLeftSpin = !1, this.isIconRightSpin = !1;
	}
	updated(e) {
		m(this, e);
	}
	render() {
		return M`<span class="wrap">
      ${this.iconLeft ? M`<cfpb-icon
                name="${this.iconLeft}"
                ?spin=${this.isIconLeftSpin}
              ></cfpb-icon
              ><span class="div"></span>` : ""}
      <span class="text"><slot></slot></span>${this.iconRight ? M` <span class="div"></span
              ><cfpb-icon
                name="${this.iconRight}"
                ?spin=${this.isIconRightSpin}
              ></cfpb-icon>` : ""}
    </span>`;
	}
	static init() {
		R.init(), p("cfpb-icon-text", e);
	}
}, pt = [
	"primary",
	"secondary",
	"warning"
], mt = [
	"button",
	"submit",
	"reset"
], ht = class e extends L {
	static styles = x`
    ${b(ut)}
  `;
	static properties = {
		type: { type: String },
		href: { type: String },
		disabled: {
			type: Boolean,
			reflect: !0
		},
		variant: { type: String },
		iconLeft: {
			type: String,
			attribute: "icon-left"
		},
		iconRight: {
			type: String,
			attribute: "icon-right"
		},
		isIconLeftSpin: {
			type: Boolean,
			attribute: "icon-left-spin"
		},
		isIconRightSpin: {
			type: Boolean,
			attribute: "icon-right-spin"
		},
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
	#e = z();
	constructor() {
		super(), this.type = "button", this.variant = "primary", this.disabled = !1, this.fullOnMobile = !1, this.styleAsLink = !1, this.iconLeftSpin = !1, this.iconRightSpin = !1;
	}
	hideIcon() {
		this.#e.value?.hideIcon();
	}
	showIcon() {
		this.#e.value?.showIcon();
	}
	get dividerColorVar() {
		switch (this.variant) {
			case "warning": return "btn-warning-divider";
			case "secondary": return "btn-secondary-divider";
			default: return "btn-divider";
		}
	}
	get #t() {
		return pt.includes(this.variant) ? this.variant : "primary";
	}
	get #n() {
		return mt.includes(this.type) ? this.type : "button";
	}
	get #r() {
		return {
			"a-btn": !0,
			[`a-btn--${this.#t}`]: this.#t !== "primary",
			"a-btn--link": this.styleAsLink === !0
		};
	}
	#i() {
		let e = this.styleAsLink ? "all" : "";
		return M`
      <cfpb-icon-text
        ${B(this.#e)}
        ?disabled=${this.disabled}
        div-color="${this.dividerColorVar}"
        icon-left=${this.iconLeft}
        icon-right=${this.iconRight}
        ?icon-left-spin=${this.isIconLeftSpin}
        ?icon-right-spin=${this.isIconRightSpin}
        ?has-div=${!this.styleAsLink}
        .underline=${e}
        ?inline=${this.styleAsLink}
        ><slot></slot
      ></cfpb-icon-text>
    `;
	}
	render() {
		let e = Qe(this.#r);
		return this.href ? M`
        <a
          class=${e}
          href=${this.disabled ? void 0 : this.href}
          role="button"
          aria-disabled=${String(this.disabled)}
          tabindex=${this.disabled ? -1 : 0}
        >
          ${this.#i()}
        </a>
      ` : M`
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
		ft.init(), p("cfpb-button", e);
	}
}, gt = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.a-form-alert{align-items:center;gap:.3125rem;margin-top:.9375rem;display:flex}.a-form-alert__text{display:block}", _t = class e extends L {
	static styles = x`
    ${b(gt)}
  `;
	static properties = { validation: { type: String } };
	constructor() {
		super(), this.validation = "error";
	}
	get icon() {
		let e = {
			name: "error",
			colorVar: "form-alert-icon-color-error"
		};
		return this.validation === "warning" ? e = {
			name: "warning",
			colorVar: "form-alert-icon-color-warning"
		} : this.validation === "success" && (e = {
			name: "approved",
			colorVar: "form-alert-icon-color-success"
		}), e;
	}
	render() {
		return M`<div
      class="a-form-alert a-form-alert--${this.validation}"
      role="alert"
    >
      <cfpb-icon
        name="${this.icon.name}-round"
        color="${this.icon.colorVar}"
      ></cfpb-icon>
      <div class="a-form-alert__text"><slot></slot></div>
    </div>`;
	}
	static init() {
		R.init(), p("cfpb-form-alert", e);
	}
}, vt = "html{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%;font-family:sans-serif}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{margin:.67em 0;font-size:2em}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{margin:0;font-family:inherit;font-size:100%}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button{appearance:none}input[type=search]::-webkit-search-decoration{appearance:none}button::-moz-focus-inner{border:0;padding:0}input::-moz-focus-inner{border:0;padding:0}textarea{vertical-align:top;overflow:auto}table{border-collapse:collapse;border-spacing:0}:not(:defined){border-radius:4px;width:100%;animation:1.5s infinite pulse-background;display:block;box-shadow:inset 0 0 3px #5a5d611a}@keyframes pulse-background{0%{background-color:#0000}50%{background-color:#5a5d610d}to{background-color:#0000}}cfpb-tagline:not(:defined){min-height:16.5px}cfpb-tagline[islarge]:not(:defined){min-height:22px}cfpb-form-search:not(:defined){min-height:35px}@media only screen and (width<=37.5625em){cfpb-form-search:not(:defined){min-height:85px}}body{color:var(--text);font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);-webkit-font-smoothing:antialiased;font-size:100%;line-height:1.375}button,input,select,textarea{font-family:var(--font-stack);font-size-adjust:var(--font-adjust-body);line-height:1.1875}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size-adjust:var(--font-adjust-h1);letter-spacing:inherit;text-transform:inherit;margin-bottom:.441176em;font-size:2.125em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.76471em}@media only screen and (width<=37.5em){h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}h1,.h1{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.73077em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.15385em}}h2,.h2{font-size-adjust:var(--font-adjust-h2);letter-spacing:inherit;text-transform:inherit;margin-bottom:.576923em;font-size:1.625em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.73077em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.15385em}@media only screen and (width<=37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.36364em}h2,.h2{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:600;line-height:1.25}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.36364em}}h3,.h3{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-bottom:.681818em;font-size:1.375em;font-weight:400;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.36364em}@media only screen and (width<=37.5em){h3,.h3{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:500;line-height:1.25}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.66667em}}h4,.h4{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.833333em;font-size:1.125em;font-weight:500;line-height:1.25}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.66667em}@media only screen and (width<=37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size-adjust:var(--font-adjust-h5);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.07143em;font-size:.875em;font-weight:600;line-height:1.25}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.14286em}h6,.h6{font-size-adjust:var(--font-adjust-h6);letter-spacing:1px;text-transform:uppercase;margin-bottom:1.25em;font-size:.75em;font-weight:600;line-height:1.25}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{font-size-adjust:var(--font-adjust-h3);letter-spacing:inherit;text-transform:inherit;margin-top:0;margin-bottom:15px;font-size:1.375em;font-weight:400;line-height:1.25}@media only screen and (width<=37.5em){.lead-paragraph{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;font-size:1.125em;font-weight:500;line-height:1.25}}.superheading{margin-bottom:.416667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);-webkit-text-decoration-color:var(--link-underline);-webkit-text-decoration-color:var(--link-underline);text-decoration-color:var(--link-underline);text-underline-offset:4.5px;text-decoration-line:underline;text-decoration-style:dotted;text-decoration-thickness:1px}a:visited,a.visited{-webkit-text-decoration-color:var(--link-underline-visited);-webkit-text-decoration-color:var(--link-underline-visited);text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-hover);-webkit-text-decoration-color:var(--link-underline-hover);text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline-offset:1px;outline:thin dotted}a:active,a.active{text-decoration-style:solid;-webkit-text-decoration-color:var(--link-underline-active);-webkit-text-decoration-color:var(--link-underline-active);text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none}caption{text-align:left;margin-bottom:.625em}th,td{padding:.625em}thead th,thead td{background:var(--table-head-bg);color:var(--table-head-text);vertical-align:top;padding:.714286em;font-size:1em}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{text-align:left;font-weight:600}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit;margin:0}blockquote{margin-left:.9375em;margin-right:.9375em}@media only screen and (width>=37.5625em){blockquote{margin-left:1.875em;margin-right:1.875em}}img{max-width:100%}figure{margin-left:0;margin-right:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);color:var(--code-text);border-radius:4px;font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.230769em .230769em 0;font-size:.8125em}pre{white-space:pre-wrap;overflow-wrap:break-word;padding:.625em .9375em;display:block}pre code{background-color:#0000;padding:0}:root{--beige:#bea96f;--beige-30:#f0e8d8;--beige-60:#d8c8a0;--black:#101820;--font-stack:var(--font-stack-branded,system-ui, sans-serif);--font-stack-branded:initial;--gold:#ff9e1b;--gold-10:#fff6ec;--gold-20:#fff0dd;--gold-30:#ffe8cb;--gold-40:#ffe1b9;--gold-50:#ffd8a3;--gold-60:#ffce8d;--gold-70:#ffc372;--gold-80:#ffb858;--gold-90:#ffab39;--gold-dark:#dc731c;--gold-mid-dark:#ed881b;--gray:#5a5d61;--gray-10:#e7e8e9;--gray-15:#dcdddf;--gray-20:#d2d3d5;--gray-30:#c3c4c4;--gray-40:#b4b5b6;--gray-5:#f7f8f9;--gray-50:#a2a3a4;--gray-60:#919395;--gray-70:#838588;--gray-80:#75787b;--gray-90:#676a6f;--gray-dark:#43484e;--gray-darker:#293037;--gray-mid-dark:#4f5257;--green:#20aa3f;--green-10:#f0f8eb;--green-20:#e2efd8;--green-30:#d4eac6;--green-40:#c7e5b3;--green-50:#bae0a2;--green-60:#addc91;--green-70:#93cf7c;--green-80:#66c368;--green-90:#48b753;--green-dark:#1e9642;--green-mid-dark:#1fa040;--navy:#254b87;--navy-10:#f4f6fa;--navy-20:#d3daeb;--navy-30:#c3cde2;--navy-40:#b3c0d9;--navy-50:#9daecc;--navy-60:#889cc0;--navy-70:#6f88b2;--navy-80:#5674a3;--navy-90:#3e5f95;--navy-dark:#002d72;--navy-mid-dark:#123c7c;--neutral:#8a6c57;--neutral-10:#f8f5f2;--neutral-20:#e7ddd7;--neutral-30:#ddd1c9;--neutral-40:#d3c5bc;--neutral-50:#c6b4a9;--neutral-60:#baa496;--neutral-70:#ad9484;--neutral-80:#a18573;--neutral-90:#957865;--neutral-dark:#745745;--neutral-mid-dark:#7d604b;--pacific:#0072ce;--pacific-10:#eff8fd;--pacific-20:#d6e8fa;--pacific-30:#c3ddf6;--pacific-40:#afd2f2;--pacific-50:#96c4ed;--pacific-60:#7eb7e8;--pacific-70:#61a7e2;--pacific-80:#4497dc;--pacific-90:#2284d5;--pacific-dark:#0050b4;--pacific-mid-dark:#0061c1;--purple:#b4267a;--purple-10:#fdf3f8;--purple-20:#f0d8e2;--purple-30:#ebc9d9;--purple-40:#e3b2cc;--purple-50:#dc9cbf;--purple-60:#d486b2;--purple-70:#cd70a5;--purple-80:#c55998;--purple-90:#be438b;--purple-dark:#a01b68;--purple-mid-dark:#aa2071;--red:#d14124;--red-10:#fbefec;--red-20:#f7e0d9;--red-30:#f3d1c8;--red-40:#f0c3b8;--red-50:#ebb0a3;--red-60:#e79e8e;--red-70:#e28875;--red-80:#dd735d;--red-90:#d75a40;--red-dark:#b63014;--red-mid-dark:#c3381c;--teal:#257675;--teal-10:#f0f7f6;--teal-20:#d4e7e6;--teal-30:#c4dddc;--teal-40:#b4d2d1;--teal-50:#9ec4c3;--teal-60:#89b6b5;--teal-70:#70a6a5;--teal-80:#579695;--teal-90:#3e8685;--teal-dark:#005e5d;--teal-mid-dark:#126b69;--white:#fff;--font-adjust-base:.517;--font-adjust-step:.0054;--font-adjust-h1:calc(var(--font-size-adjust-base) + (5 * var(--font-adjust-step)));--font-adjust-h2:calc(var(--font-size-adjust-base) + (4 * var(--font-adjust-step)));--font-adjust-h3:calc(var(--font-size-adjust-base) + (3 * var(--font-adjust-step)));--font-adjust-h4:calc(var(--font-size-adjust-base) + (2 * var(--font-adjust-step)));--font-adjust-h5:calc(var(--font-size-adjust-base) + (1 * var(--font-adjust-step)));--font-adjust-h6:var(--font-adjust-base);--font-adjust-body:var(--font-adjust-base);--select-border-width-default:1px;--select-border-width-error:2px;--block-bg:var(--gray-5);--block-border:var(--gray-40);--btn-bg:var(--pacific);--btn-bg-active:var(--navy);--btn-bg-hover:var(--pacific-dark);--btn-disabled-bg:var(--gray-20);--btn-disabled-divider:var(--gray-60);--btn-disabled-outline:var(--gray-20);--btn-disabled-text:var(--gray-dark);--btn-divider:var(--pacific-60);--btn-secondary-bg:var(--white);--btn-secondary-bg-active:var(--pacific-20);--btn-secondary-bg-hover:var(--pacific-10);--btn-secondary-border:var(--pacific);--btn-secondary-border-active:var(--navy);--btn-secondary-border-hover:var(--pacific-dark);--btn-secondary-divider:var(--pacific-60);--btn-secondary-text:var(--pacific);--btn-secondary-text-active:var(--navy);--btn-secondary-text-hover:var(--pacific-dark);--btn-text:var(--white);--btn-warning-bg:var(--red-mid-dark);--btn-warning-bg-active:var(--gray-dark);--btn-warning-bg-hover:var(--red-dark);--btn-warning-divider:var(--red-60);--btn-warning-text:var(--white);--choice-bg-default:var(--white);--choice-bg-disabled:var(--gray-10);--choice-bg-selected-default:var(--pacific);--choice-bg-selected-disabled:var(--gray-40);--choice-bg-selected-focus-default:var(--pacific);--choice-border-default:var(--gray-60);--choice-border-disabled:var(--gray-60);--choice-border-error:var(--red);--choice-border-focus-default:var(--pacific);--choice-border-hover-default:var(--pacific);--choice-border-success:var(--green);--choice-border-warning:var(--gold);--choice-label-disabled-default:var(--gray-dark);--choice-mark-default:var(--black);--choice-mark-disabled-default:var(--gray-60);--choice-outline-focus-default:var(--pacific);--code-bg:var(--gray-5);--content-main-border:var(--gray-40);--form-alert-icon-color-default:var(--gray);--form-alert-icon-color-error:var(--red);--form-alert-icon-color-success:var(--green);--form-alert-icon-color-warning:var(--gold);--form-field-input-lg-target-bg:var(--gray-10);--form-field-input-lg-target-bg-disabled:var(--gray-20);--form-field-input-lg-target-bg-selected:var(--pacific-20);--form-field-input-lg-target-border:var(--pacific);--input-bg-default:var(--white);--input-bg-disabled-default:var(--gray-10);--input-border-default:var(--gray-60);--input-border-disabled:var(--gray-60);--input-border-error:var(--red);--input-border-focus-default:var(--pacific);--input-border-hover-default:var(--pacific);--input-border-success:var(--green);--input-border-warning:var(--gold);--input-text-default:var(--black);--input-text-disabled-default:var(--gray-dark);--input-text-placeholder-default:var(--gray-dark);--label-helper:var(--gray-dark);--link-text:var(--pacific);--link-text-active:var(--navy);--link-text-hover:var(--pacific-dark);--link-text-visited:var(--teal);--link-underline:var(--pacific);--link-underline-active:var(--navy);--link-underline-hover:var(--pacific-dark);--link-underline-visited:var(--teal);--range-bg:var(--gray-10);--range-bg-focused:var(--pacific-20);--range-bg-track:var(--gray-80);--range-border:var(--gray-40);--range-border-focused:var(--pacific);--select-bg-disabled-default:var(--gray-10);--select-border-default:var(--gray-60);--select-border-error:var(--red);--select-border-focus-default:var(--pacific);--select-border-hover-default:var(--pacific);--select-icon-bg-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--table-border:var(--gray);--table-head-bg:var(--gray-5);--text:var(--black);--block-border-bottom:var(--block-border);--block-border-left:var(--block-border);--block-border-right:var(--block-border);--block-border-top:var(--block-border);--code-text:var(--text);--table-head-text:var(--text)}.u-hidden{display:none!important}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host{--expandable-border:var(--gray-40)}::slotted([slot=header]){color:var(--black)!important;margin-bottom:0!important;font-size:1.125em!important;font-weight:500!important}@media only screen and (width<=37.5em){::slotted([slot=header]){font-size:1em!important}}.o-expandable{position:relative}.o-expandable__header{cursor:pointer;background-color:#0000;border:0;justify-content:space-between;gap:10px;padding:.625em .9375em;display:flex}.o-expandable__header:focus{outline:1px dotted var(--black);outline-offset:2px}.o-expandable__header .o-expandable__cue-close,.o-expandable__header .o-expandable__cue-open{display:none}.o-expandable__header[aria-expanded=false] .o-expandable__cue-open,.o-expandable__header[aria-expanded=true] .o-expandable__cue-close{display:block}.o-expandable button.o-expandable__header{text-align:left;width:100%}.o-expandable__label{flex-grow:1}.o-expandable__icon,.o-expandable__label{font-size:1.125em!important}@media only screen and (width<=37.5em){.o-expandable__icon,.o-expandable__label{font-size:1em!important}}.o-expandable__cues{color:var(--pacific);align-self:center;font-size:1em;line-height:1.375}.o-expandable__content{padding:0 .9375em .9375em}.o-expandable__content:before{content:\"\";border-top:1px solid var(--expandable-border);padding-top:.9375em;display:block}.o-expandable__content:after{width:100%;padding-bottom:.9375em}.o-expandable--background{background:var(--gray-5)}.o-expandable--border{border:1px solid var(--expandable-border)}.o-expandable-group .o-expandable{border-bottom:1px solid var(--expandable-border)}.o-expandable-group .o-expandable:first-child{border-top:1px solid var(--expandable-border)}@media print{.o-expandable__header[aria-expanded=true] .o-expandable__cue-close,.o-expandable__header[aria-expanded=false] .o-expandable__cue-open{display:none}.o-expandable__content[aria-expanded=false]{display:block;max-height:99999px!important}}html[lang=ar] :host .o-expandable__header{text-align:right}html[lang=ar] :host .o-expandable__cues{text-align:left}";
//#endregion
//#region packages/cfpb-design-system/src/utilities/transition/base-transition.js
function V(e, t, n) {
	let r = t, i = e;
	if (!n) throw Error("Child transition argument must be defined!");
	let a = n, o, s, c, l = !1, u = !1, d = !1;
	if (r.CSS_PROPERTY === void 0 || r.BASE_CLASS === void 0) throw Error("Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.");
	function f() {
		s && l ? (i.addEventListener(s, c), a.dispatchEvent(V.BEGIN_EVENT, {
			target: a,
			type: V.BEGIN_EVENT
		}), i.classList.add(V.ANIMATING_CLASS), u = !0) : (a.dispatchEvent(V.BEGIN_EVENT, {
			target: a,
			type: V.BEGIN_EVENT
		}), c());
	}
	function p() {
		i.removeEventListener(s, c);
	}
	function m(e) {
		return e && e.propertyName !== r.CSS_PROPERTY ? !1 : (p(), i.classList.remove(V.ANIMATING_CLASS), a.dispatchEvent(V.END_EVENT, {
			target: a,
			type: V.END_EVENT
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
		i.classList.remove(V.NO_ANIMATION_CLASS), l = !0;
	}
	function y() {
		i.classList.add(V.NO_ANIMATION_CLASS), l = !1;
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
		if (l = !i.classList.contains(V.NO_ANIMATION_CLASS), c = m.bind(this), x(i), !e) throw Error("Transition needs to be passed an initial CSS class on initialization!");
		return i.classList.add(e), this;
	}
	function C(e) {
		return d ||= (h(), !0), i.classList.contains(e) ? !1 : (p(), i.classList.remove(o), o = e, f(), i.classList.add(o), !0);
	}
	return this.animateOff = y, this.animateOn = v, this.applyClass = C, this.halt = g, this.init = S, this.isAnimated = () => l, this.remove = _, this.setElement = x, this;
}
V.BEGIN_EVENT = "transitionbegin", V.END_EVENT = "transitionend", V.NO_ANIMATION_CLASS = "u-no-animation", V.ANIMATING_CLASS = "u-is-animating";
//#endregion
//#region packages/cfpb-design-system/src/utilities/event-observer.js
function H() {
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
//#region packages/cfpb-design-system/src/utilities/transition/max-height-transition.js
var yt = "transitiondir", U = {
	CSS_PROPERTY: "max-height",
	BASE_CLASS: "u-max-height-transition",
	MH_DEFAULT: "u-max-height-default",
	MH_SUMMARY: "u-max-height-summary",
	MH_DYNAMIC: "u-max-height-dynamic",
	MH_ZERO: "u-max-height-zero"
};
function W(e) {
	let t = this, n = new H(), r = new V(e, U, this), i = 0;
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
		return a(), r.applyClass(U.MH_DEFAULT), (!i || e.scrollHeight > i) && (i = e.scrollHeight), this;
	}
	function u() {
		return a(), r.applyClass(U.MH_SUMMARY), i = e.scrollHeight, this;
	}
	function d() {
		a(), e.style.top = "100%";
		let n = o(), s = 30, c = e.scrollHeight + s < n.distanceToBottom ? `${e.scrollHeight + 2}px` : `${n.distanceToBottom - s}px`;
		if (n.dir === "up") {
			let t = e.parentElement.offsetHeight;
			s += t, e.style.bottom = `${t - 2}px`, c = e.scrollHeight + s < n.distanceToTop ? `${e.scrollHeight + 2}px` : `${n.distanceToTop - s}px`, e.style.top = "unset";
		}
		return e.style.maxHeight = c, r.applyClass(U.MH_DYNAMIC), t.dispatchEvent(yt, {
			target: t,
			type: yt,
			dir: n.dir
		}), i = e.scrollHeight, this;
	}
	function f() {
		return r.applyClass(U.MH_ZERO), i = e.scrollHeight, this;
	}
	function p() {
		return e.style.maxHeight = "", r.remove();
	}
	return this.addEventListener = n.addEventListener, this.dispatchEvent = n.dispatchEvent, this.removeEventListener = n.removeEventListener, this.animateOff = r.animateOff, this.animateOn = r.animateOn, this.halt = r.halt, this.isAnimated = r.isAnimated, this.setElement = r.setElement, this.refresh = a, this.remove = p, this.init = c, this.maxHeightDefault = l, this.maxHeightSummary = u, this.maxHeightZero = f, this.maxHeightDynamic = d, this;
}
W.CLASSES = U;
//#endregion
//#region packages/cfpb-design-system/src/utilities/standard-type.js
var G = "data-js-hook", bt = "behavior_", xt = "state_";
//#endregion
//#region packages/cfpb-design-system/src/utilities/data-hook.js
function St(e, t) {
	if (!e) return !1;
	let n = e.getAttribute(G);
	return n ? (n = n.split(" "), n.indexOf(t) > -1) : !1;
}
function K(e, t) {
	if (St(e, t)) return t;
	if (t.indexOf(" ") !== -1) {
		let e = G + " values cannot contain spaces!";
		throw Error(e);
	}
	let n = e.getAttribute(G);
	return n !== null && (t = n + " " + t), e.setAttribute(G, t), t;
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/behavior/behavior.js
function Ct(e, t) {
	t ||= document;
	let n = [];
	try {
		n = t.querySelectorAll(e);
	} catch (t) {
		let n = `${e} not found in DOM! ${t}`;
		throw Error(n, { cause: t });
	}
	return n.length === 0 && e.indexOf("behavior_") === -1 && (n = Et(e, t)), n;
}
function wt(e, t, n, r) {
	let i = [];
	e instanceof NodeList ? i = e : e instanceof Node ? i = [e] : typeof e == "string" && (i = Ct(e, r));
	for (let e = 0, r = i.length; e < r; e++) i[e].addEventListener(t, n, !1);
	return i;
}
function Tt(e, t) {
	let n;
	if (St(e, t)) return n = e, n;
	if (e) {
		let r = "[" + G + "=" + t + "]";
		n = e.querySelector(r);
	}
	if (!n) {
		let e = t + " behavior not found on passed DOM node!";
		throw Error(e);
	}
	return n;
}
function Et(e, t) {
	return e = G + "*=" + bt + e, e = "[" + e + "]", Ct(e, t);
}
//#endregion
//#region packages/cfpb-design-system/src/utilities/behavior/flyout-menu.js
var Dt = bt + "flyout-menu", Ot = "[" + G + "=" + Dt;
function q(e, t = !0) {
	let n = Tt(e, Dt), r = m(e), i = Tt(e, Dt + "_content"), a = 0, o, s, c, l = ee.bind(this), u = C.bind(this), d, f = !0, p = !1;
	function m(e) {
		let t = [], n = e.querySelectorAll(`${Ot}_trigger]`), r, i, a;
		for (let o = n.length >>> 0; o--;) {
			for (a = !1, r = n[o], i = r.parentElement; i !== e;) i.getAttribute("data-js-hook") && i.getAttribute("data-js-hook").split(" ").indexOf(Dt) !== -1 ? (a = !0, i = e) : i = i.parentElement;
			a || t.unshift(n[o]);
		}
		return t;
	}
	function h(e = !1) {
		return a = e ? 3 : 0, r.forEach((t) => {
			g("expanded", t, e), t.addEventListener("click", b.bind(this)), t.addEventListener("touchstart", _, { passive: !0 }), t.addEventListener("mouseover", v.bind(this)), t.addEventListener("mouseout", y.bind(this));
		}), i.setAttribute("data-open", e ? "true" : "false"), t && !e && i.setAttribute("hidden", ""), ie(), this;
	}
	function g(e, t, n) {
		let r = String(n);
		return t.setAttribute("aria-" + e, r), r;
	}
	function _() {
		p = !0;
	}
	function v(e) {
		f || (p || this.dispatchEvent("triggerover", {
			target: this,
			trigger: e.target,
			type: "triggerover"
		}), p = !1);
	}
	function y(e) {
		f || this.dispatchEvent("triggerout", {
			target: this,
			trigger: e.target,
			type: "triggerout"
		});
	}
	function b(e) {
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
	function x() {
		if (o?.halt(), a === 2 || a === 3) return this;
		if (a = 2, t && i.removeAttribute("hidden"), this.dispatchEvent("expandbegin", {
			target: this,
			type: "expandbegin"
		}), !s || !c) return u(), this;
		let e = o?.isAnimated();
		return e && o.addEventListener(V.END_EVENT, u), s(), e || u(), this;
	}
	function S() {
		if (o?.halt(), a === 1 || a === 0) return this;
		for (let e = 0, t = r.length; e < t; e++) g("expanded", r[e], !1);
		if (i.setAttribute("data-open", "false"), a = 1, this.dispatchEvent("collapsebegin", {
			target: this,
			type: "collapsebegin"
		}), !c || !s) return l(), this;
		let e = o?.isAnimated();
		return e && o.addEventListener(V.END_EVENT, l), c(), e || l(), this;
	}
	function C() {
		a = 3, i.setAttribute("data-open", "true"), o && o.removeEventListener(V.END_EVENT, u), this.dispatchEvent("expandend", {
			target: this,
			type: "expandend"
		});
		for (let e = 0, t = r.length; e < t; e++) g("expanded", r[e], !0);
	}
	function ee() {
		a = 0, t && i.setAttribute("hidden", ""), o && o.removeEventListener(V.END_EVENT, l), this.dispatchEvent("collapseend", {
			target: this,
			type: "collapseend"
		});
	}
	function te(e, t, n) {
		o = e, t && t !== c && (c = t), n && n !== s && (s = n);
	}
	function ne() {
		o && o.remove(), o = void 0, s = void 0, c = void 0;
	}
	function re() {
		return {
			container: n,
			content: i,
			trigger: r
		};
	}
	function ie() {
		return f &&= !1, !f;
	}
	function ae() {
		return f ||= !0, f;
	}
	function w(e) {
		return d = e, this;
	}
	let T = new H();
	return this.addEventListener = T.addEventListener, this.removeEventListener = T.removeEventListener, this.dispatchEvent = T.dispatchEvent, this.init = h, this.expand = x, this.collapse = S, this.setTransition = te, this.clearTransition = ne, this.getData = () => d, this.getTransition = () => o, this.getDom = re, this.isAnimating = () => a === 2 || a === 1, this.isExpanded = () => a === 3, this.resume = ie, this.setData = w, this.suspend = ae, q.BASE_CLASS = Dt, this;
}
//#endregion
//#region packages/cfpb-design-system/src/elements/cfpb-expandable/index.js
var kt = class e extends L {
	static styles = x`
    ${b(vt)}
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
		let e = this.shadowRoot.querySelector("div"), t = e.querySelector(".o-expandable__content"), n = this.isExpanded ? W.CLASSES.MH_DEFAULT : W.CLASSES.MH_ZERO;
		this.#t = new W(t).init(n), this.#e = new q(e), this.#e.setTransition(this.#t, this.#t.maxHeightZero, this.#t.maxHeightDefault), this.#e.init(this.isExpanded), this.#e.addEventListener("expandbegin", () => {
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
		return M`
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
              <cfpb-icon name="plus-round" color="pacific"></cfpb-icon>
              <span class="u-visually-hidden">Show</span>
            </span>
            <span class="o-expandable__cue-close" role="img" aria-label="Hide">
              <cfpb-icon name="minus-round" color="pacific"></cfpb-icon>
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
		R.init(), p("cfpb-expandable", e);
	}
}, At = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.m-form-field{--choice-border:var(--choice-border-default);--choice-border-hover:var(--choice-border-hover-default);--choice-border-focus:var(--choice-border-focus-default);--choice-outline-focus:var(--choice-outline-focus-default);--choice-bg:var(--choice-bg-default);--choice-bg-selected:var(--choice-bg-selected-default);--choice-bg-selected-focus:var(--choice-bg-selected-focus-default);--choice-label-disabled:var(--choice-label-disabled-default);--choice-border-width-addendum:0;width:max-content}.m-form-field .a-label+.a-text-input{margin-top:.3125rem}.m-form-field--checkbox .a-label,.m-form-field--radio .a-label{vertical-align:top;cursor:pointer;overflow-wrap:anywhere;grid-template-columns:1.875rem auto;display:inline-grid}.m-form-field--checkbox .a-checkbox,.m-form-field--checkbox .a-radio,.m-form-field--radio .a-checkbox,.m-form-field--radio .a-radio{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.m-form-field--checkbox .a-checkbox:focus+.a-label,.m-form-field--checkbox .a-checkbox.focus+.a-label,.m-form-field--checkbox .a-radio:focus+.a-label,.m-form-field--checkbox .a-radio.focus+.a-label,.m-form-field--radio .a-checkbox:focus+.a-label,.m-form-field--radio .a-checkbox.focus+.a-label,.m-form-field--radio .a-radio:focus+.a-label,.m-form-field--radio .a-radio.focus+.a-label{outline:1px dotted var(--choice-outline-focus);outline-offset:1px}.m-form-field--checkbox .a-checkbox:disabled+.a-label,.m-form-field--checkbox .a-radio:disabled+.a-label,.m-form-field--radio .a-checkbox:disabled+.a-label,.m-form-field--radio .a-radio:disabled+.a-label{cursor:not-allowed;color:var(--choice-label-disabled)}:is(.m-form-field--checkbox:has(.a-checkbox:disabled),.m-form-field--checkbox:has(.a-radio:disabled),.m-form-field--radio:has(.a-checkbox:disabled),.m-form-field--radio:has(.a-radio:disabled)){--choice-border:var(--choice-border-disabled);--choice-bg:var(--choice-bg-disabled);--choice-bg-selected:var(--choice-bg-selected-disabled)}.m-form-field--checkbox-success,.m-form-field--checkbox-warning,.m-form-field--checkbox-error,.m-form-field--radio-success,.m-form-field--radio-warning,.m-form-field--radio-error{--choice-border-width-addendum:1px}.m-form-field--checkbox-success,.m-form-field--radio-success{--choice-border:var(--choice-border-success)}.m-form-field--checkbox-warning,.m-form-field--radio-warning{--choice-border:var(--choice-border-warning)}.m-form-field--checkbox-error,.m-form-field--radio-error{--choice-border:var(--choice-border-error)}.m-form-field--radio input:disabled:checked+.a-label:before,.m-form-field--radio input:disabled:focus+.a-label:before,.m-form-field--radio input:disabled.focus+.a-label:before,.m-form-field--radio input:disabled:hover+.a-label:before,.m-form-field--radio input:disabled.hover+.a-label:before{border-color:var(--choice-border);box-shadow:none;outline:none}.m-form-field--radio input:disabled+.a-label:before{outline:none}.m-form-field--radio:hover:before,.m-form-field--radio.hover:before{border-color:var(--choice-border-hover)}.m-form-field--radio .a-label:before{border:1px solid var(--choice-border);outline:var(--choice-border-width-addendum) solid var(--choice-border);background-color:var(--choice-bg);content:\"\";vertical-align:top;border-radius:50%;grid-row:1/3;width:1.125rem;height:1.125rem;margin-right:10px;display:inline-block;position:relative;top:1px;left:1px;transform:rotate(0)}.m-form-field--radio .a-radio:focus+.a-label:before,.m-form-field--radio .a-radio.focus+.a-label:before{border-color:var(--choice-border-focus);box-shadow:0 0 0 1px var(--choice-border-focus);outline:none}.m-form-field--radio .a-radio:hover+.a-label:before,.m-form-field--radio .a-radio.hover+.a-label:before{border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover);outline:none}.m-form-field--radio .a-radio:checked+.a-label:before{background-color:var(--choice-bg-selected);box-shadow:inset 0 0 0 2px var(--white)}.m-form-field--radio .a-radio:focus:checked+.a-label:before,.m-form-field--radio .a-radio.focus:checked+.a-label:before{background-color:var(--choice-bg-selected-focus);border-color:var(--choice-border-focus);box-shadow:0 0 0 1px var(--choice-border-focus), inset 0 0 0 2px var(--white)}.m-form-field--radio .a-radio:hover:checked+.a-label:before,.m-form-field--radio .a-radio.hover:checked+.a-label:before{border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover), inset 0 0 0 2px var(--white)}.m-form-field--radio .a-radio:checked:disabled+.a-label:before,.m-form-field--radio .a-radio:hover:checked:disabled+.a-label:before,.m-form-field--radio .a-radio.hover:checked:disabled+.a-label:before{background-color:var(--choice-bg-selected);box-shadow:inset 0 0 0 2px var(--gray-10);border-color:var(--choice-border-disabled)}.m-form-field--lg-target{width:100%;display:block}.m-form-field--lg-target .a-label{box-sizing:border-box;background-color:var(--form-field-input-lg-target-bg);width:100%;padding:15px}.m-form-field--lg-target .a-checkbox:checked+.a-label,.m-form-field--lg-target .a-radio:checked+.a-label{background-color:var(--form-field-input-lg-target-bg-selected);box-shadow:inset 0 0 0 1px var(--form-field-input-lg-target-border)}.m-form-field--lg-target .a-checkbox:hover+.a-label,.m-form-field--lg-target .a-checkbox.hover+.a-label,.m-form-field--lg-target .a-checkbox:focus+.a-label,.m-form-field--lg-target .a-checkbox.focus+.a-label,.m-form-field--lg-target .a-radio:hover+.a-label,.m-form-field--lg-target .a-radio.hover+.a-label,.m-form-field--lg-target .a-radio:focus+.a-label,.m-form-field--lg-target .a-radio.focus+.a-label{box-shadow:inset 0 0 0 2px var(--form-field-input-lg-target-border)}.m-form-field--lg-target .a-checkbox:focus+.a-label,.m-form-field--lg-target .a-checkbox.focus+.a-label,.m-form-field--lg-target .a-checkbox:checked+.a-label,.m-form-field--lg-target .a-radio:focus+.a-label,.m-form-field--lg-target .a-radio.focus+.a-label,.m-form-field--lg-target .a-radio:checked+.a-label{outline-offset:1px}.m-form-field--lg-target .a-checkbox:disabled+.a-label,.m-form-field--lg-target .a-checkbox:checked:disabled+.a-label,.m-form-field--lg-target .a-checkbox:hover:disabled+.a-label,.m-form-field--lg-target .a-radio:disabled+.a-label,.m-form-field--lg-target .a-radio:checked:disabled+.a-label,.m-form-field--lg-target .a-radio:hover:disabled+.a-label{color:var(--choice-label-disabled);box-shadow:none;background-color:var(--form-field-input-lg-target-bg-disabled)}.m-form-field--lg-target .a-checkbox:checked:disabled+.a-label,.m-form-field--lg-target .a-radio:checked:disabled+.a-label{border:1px solid var(--form-field-border-disabled)}", jt = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}:host{--choice-border:var(--choice-border-default);--choice-border-hover:var(--choice-border-hover-default);--choice-bg:var(--choice-bg-default);--choice-mark:var(--choice-mark-default);--choice-mark-disabled:var(--choice-mark-disabled-default);--choice-border-width-addendum:0}.cfpb-checkbox-icon{border:1px solid var(--choice-border);outline:var(--choice-border-width-addendum) solid var(--choice-border);background-color:var(--choice-bg);flex-direction:column;align-items:center;width:1.125em;height:1.125em;display:flex;position:relative;top:1px;left:1px}.disabled{cursor:not-allowed;--choice-border:var(--choice-border-disabled);--choice-bg:var(--choice-bg-disabled)}:not(.checked) cfpb-icon{display:none}.checked.disabled cfpb-icon{color:var(--choice-mark-disabled)}.cfpb-checkbox-icon:not(.disabled,.borderless).focus,.cfpb-checkbox-icon:not(.disabled,.borderless):focus,.cfpb-checkbox-icon:not(.disabled,.borderless).hover,.cfpb-checkbox-icon:not(.disabled,.borderless):hover{cursor:pointer;border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover);outline-color:var(--choice-border-hover)}.validation-error,.validation-warning,.validation-success{--choice-border-width-addendum:1px}.validation-error{--choice-border:var(--choice-border-error)}.validation-warning{--choice-border:var(--choice-border-warning)}.validation-success{--choice-border:var(--choice-border-success)}.borderless{background-color:#0000;border-color:#0000;outline-color:#0000}", Mt = [
	"error",
	"warning",
	"success"
], Nt = class e extends L {
	static styles = x`
    ${b(jt)}
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
		return Mt.includes(this.validation) ? this.validation : void 0;
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
		return M`
      <span class=${this.#r()} ?disabled=${this.disabled}>
        <cfpb-icon name="approved"></cfpb-icon>
      </span>
    `;
	}
	static init() {
		R.init(), p("cfpb-checkbox-icon", e);
	}
}, Pt = [
	"error",
	"warning",
	"success"
], Ft = ["checkbox", "radio"], It = class e extends L {
	static styles = x`
    ${b(At)}
  `;
	#e = z();
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
		return Pt.includes(this.validation) ? this.validation : void 0;
	}
	get #c() {
		return Ft.includes(this.type) ? this.type : "checkbox";
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
		return M`
      <cfpb-checkbox-icon
        .checked=${this.checked}
        ?disabled=${this.disabled}
        validation=${this.#s}
        ${B(this.#e)}
      ></cfpb-checkbox-icon>
    `;
	}
	render() {
		return M`
      <div
        class=${Qe(this.#l)}
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
		Nt.init(), p("cfpb-form-choice", e);
	}
}, Lt = ":host{flex-direction:column;width:fit-content;display:flex}", Rt = class e extends L {
	static styles = x`
    ${b(Lt)}
  `;
	#e = z();
	static properties = {
		accept: {
			type: String,
			reflect: !0
		},
		isDetailHidden: {
			type: Boolean,
			state: !0
		},
		fileName: {
			type: String,
			state: !0
		},
		files: {
			type: FileList,
			state: !0
		}
	};
	constructor() {
		super(), this.isDetailHidden = !0, this.fileName = "", this.files = null;
	}
	#t() {
		let e = this.#e.value.files;
		if (!e?.length) {
			this.#n();
			return;
		}
		this.fileName = e[0].name, this.files = e, this.isDetailHidden = !1, this.dispatchEvent(new CustomEvent("file-change", {
			detail: { files: e },
			bubbles: !0,
			composed: !0
		}));
	}
	#n() {
		this.fileName = "", this.files = null, this.isDetailHidden = !0;
	}
	#r() {
		this.#e.value.value == "" ? this.#n() : this.#t();
	}
	render() {
		return M`
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
        accept=${this.accept ?? ""}
        @change=${() => this.#r()}
        ${B(this.#e)}
      />
      <div part="upload-details" ?hidden=${this.isDetailHidden}>
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
		ht.init(), p("cfpb-file-upload", e);
	}
}, zt = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.a-label slot{display:inline-block}.a-label__helper{color:var(--label-helper);font-size:1rem;font-weight:400}.a-label__helper--block{margin-top:.625rem;display:block}.a-label--heading{font-size-adjust:var(--font-adjust-h4);letter-spacing:inherit;text-transform:inherit;margin-bottom:.625rem;font-size:1.125em;font-weight:500;line-height:1.25;display:block}p+.a-label--heading,ul+.a-label--heading,ol+.a-label--heading,dl+.a-label--heading,figure+.a-label--heading,img+.a-label--heading,table+.a-label--heading,blockquote+.a-label--heading,h1+.a-label--heading,.h1+.a-label--heading,h2+.a-label--heading,.h2+.a-label--heading,h3+.a-label--heading,.h3+.a-label--heading,h5+.a-label--heading,.h5+.a-label--heading,h6+.a-label--heading,.h6+.a-label--heading{margin-top:1.66667em}@media only screen and (width<=37.5em){.a-label--heading{margin-bottom:.625em;font-size:1em;line-height:1.125}}.a-label--heading .a-label__helper--block{margin-top:.625rem}", Bt = (e) => e ?? P, Vt = class e extends L {
	static styles = x`
    ${b(zt)}
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
		return M`
      <label
        class="a-label a-label--heading"
        for=${Bt(this.for && this.for.trim() ? this.for : void 0)}
      >
        <slot name="label"></slot>
        <small class=${this.#e}>
          <slot name="helper"></slot>
        </small>
      </label>
    `;
	}
	static init() {
		p("cfpb-label", e);
	}
}, Ht = ":host{cursor:inherit;--cfpb-link-border-top-width:1px;--cfpb-link-border-top-hover-width:0}:host a{position:relative;border-top-width:var(--cfpb-link-border-top-width)!important}@media only screen and (width<=37.5em){:host a:hover:before{top:calc(-1 * var(--cfpb-link-border-top-hover-width));content:\"\";height:var(--cfpb-link-border-top-hover-width);border-top:var(--cfpb-link-border-top-hover-width) solid currentcolor;width:100%;display:block;position:absolute}}:host a:not([href]){border:none;text-decoration:none}@media only screen and (width<=37.5em){:host(:not([inline])) a{box-sizing:border-box;border-top-style:dotted;border-bottom-style:dotted;border-top-width:var(--cfpb-link-border-top-width);border-bottom-width:1px;padding-top:.625em;padding-bottom:.625em;text-decoration:none;display:block}:host(:not([inline])) a:hover{border-top-style:solid;border-bottom-style:solid}:host(:not([inline])) a:focus-visible{outline:none;position:relative}:host(:not([inline])) a:focus-visible:after{content:\"\";outline:1px dotted var(--gray);outline-offset:2px;width:100%;height:100%;display:block;position:absolute;top:0}}:host([size=h4]) a{font-size-adjust:var(--font-adjust-h4);font-size:1.125em}:host([color-theme=dark]) a{color:var(--black);-webkit-text-decoration-color:var(--black);-webkit-text-decoration-color:var(--black);text-decoration-color:var(--black)}:host([color-theme=dark]) a:visited,:host([color-theme=dark]) a.visited,:host([color-theme=dark]) a:hover,:host([color-theme=dark]) a.hover,:host([color-theme=dark]) a:focus,:host([color-theme=dark]) a.focus,:host([color-theme=dark]) a:active,:host([color-theme=dark]) a.active{-webkit-text-decoration-color:var(--black);-webkit-text-decoration-color:var(--black);text-decoration-color:var(--black);color:var(--black)}a{font-weight:500;text-decoration-line:none;display:inline}a:focus-visible,a.focus{outline-offset:1px;outline:thin dotted}a[href]{color:var(--link-text)}a[href]:visited,a[href].visited{color:var(--link-text-visited)}a[href]:visited cfpb-icon-text,a[href].visited cfpb-icon-text{-webkit-text-decoration-color:var(--link-underline-visited);-webkit-text-decoration-color:var(--link-underline-visited);text-decoration-color:var(--link-underline-visited)}a[href]:hover,a[href].hover{color:var(--link-text-hover)}a[href]:hover cfpb-icon-text,a[href].hover cfpb-icon-text{-webkit-text-decoration-color:var(--link-underline-hover);-webkit-text-decoration-color:var(--link-underline-hover);text-decoration-color:var(--link-underline-hover)}a[href]:active,a[href].active{color:var(--link-text-active)}a[href]:active cfpb-icon-text,a[href].active cfpb-icon-text{-webkit-text-decoration-color:var(--link-underline-active);-webkit-text-decoration-color:var(--link-underline-active);text-decoration-color:var(--link-underline-active)}slot{display:none}", Ut = (e) => class extends e {
	static styles = x`
      ${b(Ht)}
    `;
	#e = z();
	static properties = {
		linkText: {
			type: String,
			state: !0
		},
		linkAttributes: {
			type: Object,
			state: !0
		},
		linkVariant: {
			type: String,
			reflect: !0,
			attribute: "link-variant"
		},
		size: {
			type: String,
			reflect: !0
		},
		colorTheme: {
			type: String,
			reflect: !0,
			attribute: "color-theme"
		},
		noUnderline: {
			type: Boolean,
			reflect: !0,
			attribute: "no-underline"
		},
		noTopBorder: {
			type: Boolean,
			reflect: !0,
			attribute: "no-top-border"
		},
		inline: {
			type: Boolean,
			reflect: !0
		}
	};
	static variants = /* @__PURE__ */ new Set([
		"external",
		"download",
		"nav-left",
		"nav-right"
	]);
	constructor() {
		super(), this.linkText = "", this.linkAttributes = {};
	}
	connectedCallback() {
		super.connectedCallback();
		let e = this.previousElementSibling;
		e?.tagName === this.tagName && !this.inline && !e.inline && this.#t();
	}
	#t() {
		this.style.setProperty("--cfpb-link-border-top-width", "0"), this.style.setProperty("--cfpb-link-border-top-hover-width", "1px");
	}
	willUpdate(e) {
		e.has("linkVariant") && (this.constructor.variants.has(this.linkVariant) || (console.warn(`Invalid link variant "${this.linkVariant}"`), this.linkVariant = void 0)), e.has("noTopBorder") && this.#t();
	}
	firstUpdated(e) {
		super.firstUpdated?.(e), this.#r(), ft.init();
	}
	get #n() {
		return (this.renderRoot.querySelector("slot")?.assignedElements({ flatten: !0 }) ?? []).find((e) => e instanceof HTMLAnchorElement) ?? null;
	}
	#r() {
		let e = this.#n;
		if (!e) {
			console.warn(`${this.tagName.toLowerCase()} expects a slotted <a>`);
			return;
		}
		this.linkText = e.textContent.trim();
		let t = [
			"class",
			"style",
			"id",
			"slot"
		];
		this.linkAttributes = Object.fromEntries([...e.attributes].filter((e) => !t.includes(e.name)).map((e) => [e.name, e.value]));
	}
	get #i() {
		return this.linkVariant === "nav-left" ? "left" : "";
	}
	get #a() {
		switch (this.linkVariant) {
			case "nav-right": return "right";
			case "download": return "download";
			case "external": return "external-link";
		}
		return "";
	}
	get #o() {
		return this.linkAttributes.href ? this.inline ? "all" : this.noUnderline ? "none" : "tablet-up" : "";
	}
	renderLink() {
		return M`
        <slot></slot>

        <a ${B(this.#e)}>
          <cfpb-icon-text
            icon-left=${this.#i}
            icon-right=${this.#a}
            .underline=${this.#o}
            ?mobile-icon-align-end=${this.linkVariant === "nav-right"}
            ?inline=${this.inline}
            >${this.linkText}</cfpb-icon-text
          >
        </a>
      `;
	}
	updated() {
		let e = this.#e.value;
		e && Object.entries(this.linkAttributes).forEach(([t, n]) => {
			e.setAttribute(t, n);
		});
	}
}, Wt = class e extends Ut(L) {
	render() {
		return this.renderLink();
	}
	static init() {
		p("cfpb-link", e);
	}
}, Gt = class e extends L {
	static styles = x`
    ${b("")}
  `;
	render() {
		return M`<slot></slot>`;
	}
	static init() {
		p("cfpb-list-item", e);
	}
}, Kt = ":host(:focus){outline:1px dotted var(--pacific);outline-offset:2px}::slotted(cfpb-listbox-item){margin-top:1px;position:relative}::slotted(cfpb-listbox-item):before,::slotted(cfpb-listbox-item):after{content:\"\";width:100%;height:1px;display:block;position:absolute}::slotted(cfpb-listbox-item):before{border-top:1px solid var(--gray-20);top:-1px}::slotted(cfpb-listbox-item):after{border-bottom:1px solid var(--gray-20);bottom:-1px}", qt = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}:host{--list-item-bg-hover:var(--gray-5);--list-item-border-focus:var(--pacific);display:block}:host(:focus){outline:none}:host(:not([disabled]):focus-within){outline:1px dotted var(--list-item-border-focus);outline-offset:2px}:host([checked]) .checkbox:before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20aria-hidden%3D%22true%22%20class%3D%22cf-icon-svg%20cf-icon-svg--approved%22%20viewBox%3D%220%200%2012%2019%22%3E%3Cpath%20d%3D%22M4.63%2015.638a1.03%201.03%200%200%201-.79-.37L.36%2011.09a1.03%201.03%200%201%201%201.58-1.316l2.535%203.043L9.958%203.32a1.029%201.029%200%200%201%201.783%201.03L5.52%2015.122a1.03%201.03%200%200%201-.803.511l-.088.004z%22%2F%3E%3C%2Fsvg%3E);background-position:50% 0;background-repeat:no-repeat;background-size:auto 1.1875em}:host([type=plain]) .checkbox:before{background-color:#0000;border-color:#0000;outline-color:#0000}:host([hidden]){display:none}.container{padding:6.5px 10px;display:block}.checkbox{vertical-align:top;overflow-wrap:anywhere;grid-template-columns:1.875rem auto;display:inline-grid}.selectable{cursor:pointer}.selectable:hover{background:var(--list-item-bg-hover);cursor:pointer;transition:background-color .2s}", Jt = class e extends L {
	static styles = x`
    ${b(qt)}
  `;
	#e = z();
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
		return M`
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
		return M`<div><slot></slot></div>`;
	}
	#u() {
		return M`
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
		return M`
      <div class="checkbox">
        <cfpb-checkbox-icon
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ${B(this.#e)}
        ></cfpb-checkbox-icon>
        <slot></slot>
      </div>
    `;
	}
	static init() {
		Nt.init(), p("cfpb-listbox-item", e);
	}
}, Yt = class e extends L {
	static styles = x`
    ${b(Kt)}
  `;
	#e = !1;
	#t = z();
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
			let e = a(this.childData);
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
			let n = document.createElement("cfpb-listbox-item");
			n.textContent = e.value ?? "", "disabled" in e && (n.disabled = e.disabled), "hidden" in e && (n.hidden = e.hidden), "href" in e && (n.href = e.href), n.type = e.type ?? this.type, this.multiple ? "checked" in e && (n.checked = e.checked) : !t && e.checked && (t = n, n.checked = !0), this.appendChild(n);
		}), this.#c();
	}
	#c() {
		if (this.#n = [...this.querySelectorAll("cfpb-listbox-item")], this.#n.forEach((e) => {
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
			console.warn(`<cfpb-listbox>: invalid type "${this.type}".`);
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
		return M`
      <div
        role="listbox"
        tabindex="0"
        @keydown=${this.#h}
        @focus=${this.#m}
        aria-label=${this.ariaLabel}
        ?aria-multiselectable=${this.multiple}
        ${B(this.#t)}
      >
        <slot></slot>
      </div>
    `;
	}
	static init() {
		Jt.init(), p("cfpb-listbox", e);
	}
}, Xt = "button.a-btn::-moz-focus-inner{border:0}input.a-btn::-moz-focus-inner{border:0}.a-btn{appearance:none;box-sizing:border-box;cursor:pointer;text-align:center;border:0;border-radius:.25em;justify-content:center;align-items:center;gap:.625rem;width:fit-content;height:fit-content;margin:0;padding:.5em .875em;font-size:1em;font-weight:500;line-height:1.1875;text-decoration:none;transition:background-color .1s;display:flex}.a-btn,.a-btn:link,.a-btn:visited{background-color:var(--btn-bg);color:var(--btn-text)}.a-btn:hover,.a-btn.hover,.a-btn:focus,.a-btn.focus{background-color:var(--btn-bg-hover);color:var(--btn-text)}.a-btn:focus,.a-btn.focus{outline:1px dotted var(--btn-bg);outline-offset:1px}.a-btn:active,.a-btn.active{background-color:var(--btn-bg-active)}.a-btn--secondary,.a-btn--secondary:link,.a-btn--secondary:visited{background-color:var(--btn-secondary-bg);color:var(--btn-secondary-text);box-shadow:0 0 0 1px var(--btn-secondary-border) inset}.a-btn--secondary:hover,.a-btn--secondary.hover,.a-btn--secondary:focus,.a-btn--secondary.focus{background-color:var(--btn-secondary-bg-hover);color:var(--btn-secondary-text-hover);box-shadow:0 0 0 1px var(--btn-secondary-border-hover) inset}.a-btn--secondary:focus,.a-btn--secondary.focus{outline-color:var(--btn-secondary-border)}.a-btn--secondary:active,.a-btn--secondary.active{background-color:var(--btn-secondary-bg-active);color:var(--btn-secondary-text-active);box-shadow:0 0 0 1px var(--btn-secondary-border-active) inset}.a-btn--warning,.a-btn--warning:link,.a-btn--warning:visited{background-color:var(--btn-warning-bg);color:var(--btn-warning-text)}.a-btn--warning:hover,.a-btn--warning.hover,.a-btn--warning:focus,.a-btn--warning.focus{background-color:var(--btn-warning-bg-hover)}.a-btn--warning:focus,.a-btn--warning.focus{outline-color:var(--btn-warning-bg)}.a-btn--warning:active,.a-btn--warning.active{background-color:var(--btn-warning-bg-active)}.a-btn--disabled,.a-btn--disabled:link,.a-btn--disabled:visited,.a-btn--disabled:hover,.a-btn--disabled.hover,.a-btn--disabled:focus,.a-btn--disabled.focus,.a-btn--disabled:active,.a-btn--disabled.active,.a-btn[disabled],.a-btn[disabled]:link,.a-btn[disabled]:visited,.a-btn[disabled]:hover,.a-btn[disabled].hover,.a-btn[disabled]:focus,.a-btn[disabled].focus,.a-btn[disabled]:active,.a-btn[disabled].active,.a-btn[aria-disabled=true],.a-btn[aria-disabled=true]:link,.a-btn[aria-disabled=true]:visited,.a-btn[aria-disabled=true]:hover,.a-btn[aria-disabled=true].hover,.a-btn[aria-disabled=true]:focus,.a-btn[aria-disabled=true].focus,.a-btn[aria-disabled=true]:active,.a-btn[aria-disabled=true].active{background-color:var(--btn-disabled-bg);color:var(--btn-disabled-text);box-shadow:none;cursor:not-allowed}.a-btn--disabled:focus,.a-btn--disabled.focus,.a-btn[disabled]:focus,.a-btn[disabled].focus,.a-btn[aria-disabled=true]:focus,.a-btn[aria-disabled=true].focus{outline-color:var(--btn-disabled-outline)}@media only screen and (width<=37.5em){.a-btn--full-on-xs{width:100%}}.cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}::slotted(ul),::slotted(ol){display:none!important}button{line-height:1.1875}.o-form-search{flex-direction:column;row-gap:.9375rem;display:flex;position:relative}@media only screen and (width>=37.5625em){.o-form-search{border-left:0;flex-direction:row}.o-form-search button[type=submit]{border-top-left-radius:0;border-bottom-left-radius:0;flex-basis:25%}}.o-form-search .container{width:100%;position:relative}.o-form-search .popup{z-index:100;border:1px solid var(--pacific);background:#fff;border-top:0;width:calc(100% - 2px);display:none;position:absolute;top:34px}.o-form-search .popup:after{content:\"\";border-bottom:1px solid var(--pacific);width:100%;height:1px;display:block;position:absolute;bottom:-1px}.o-form-search .popup.show{display:block}", Zt = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}:host{--input-border-default:var(--gray-60);--input-border-disabled:var(--gray-60);--input-border-success:var(--green);--input-border-warning:var(--gold);--input-border-error:var(--red);--input-border:var(--input-border-default);display:flex}:host([borderless]) .o-search-input{border-color:#0000}:host([borderless]) .o-search-input input{padding-top:.3125rem;padding-bottom:.3125rem}:host([borderless]) .o-search-input:hover,:host([borderless]) .o-search-input:focus-within{border-color:#0000;outline-color:#0000;box-shadow:0 0 0 1px #0000}:host([disabled]){--input-border:var(--input-border-disabled)}:host([disabled]) .o-search-input label,:host([disabled]) .o-search-input input[type=search]{color:var(--input-border)}:host([disabled]) .o-search-input:hover{border:1px solid var(--input-border);box-shadow:none}:host([disabled]) .o-search-input:hover label,:host([disabled]) .o-search-input:hover input[type=search]{cursor:not-allowed}:host([disabled]) .o-search-input:hover button[type=reset]{display:none}:host([disabled]) .o-search-input--error:hover,:host([disabled]) .o-search-input--warning:hover,:host([disabled]) .o-search-input--success:hover{outline-color:var(--input-border)}.o-search-input{width:initial;background:var(--white);border:1px solid var(--input-border);outline:0 solid var(--input-border);flex:0 100%;align-items:center;min-width:300px;display:flex;position:relative}.o-search-input label{cursor:pointer;position:absolute;left:10px}.o-search-input input{font:inherit;line-height:1.1875}.o-search-input input[type=search]{appearance:none;border:1px solid var(--input-border);outline:0 solid var(--input-border);background:var(--input-bg);color:var(--input-text);box-sizing:border-box;white-space:nowrap;cursor:text;width:100%;box-shadow:none;border:none;outline:none;padding:.4375em .4375em .4375em 30px;font-size:1rem;display:inline-block}.o-search-input button[type=reset]{color:var(--gray-40);background-color:#0000;border:1px solid #0000;outline:0;align-self:center;width:44px;font-size:20px;display:none}.o-search-input button[type=reset]>cfpb-icon{pointer-events:none;width:25px}.o-search-input button[type=reset]:hover{color:var(--black);cursor:pointer}.o-search-input button[type=reset]:focus{color:var(--black)}.o-search-input button[type=reset]:focus>cfpb-icon{outline:1px dotted var(--pacific)}.o-search-input input[type=search]:placeholder-shown~button[type=reset]{display:none}.o-search-input input[type=search]::-webkit-search-decoration{display:none}.o-search-input input[type=search]::-webkit-search-cancel-button{display:none}.o-search-input input[type=search]::-webkit-search-results-button{display:none}.o-search-input input[type=search]::-webkit-search-results-decoration{display:none}.o-search-input:hover,.o-search-input:focus-within{border:1px solid var(--pacific);box-shadow:0 0 0 1px var(--pacific);outline-color:var(--pacific)}.o-search-input:hover input[type=search],.o-search-input:focus-within input[type=search]{outline:none;padding-right:0}.o-search-input:focus-within{outline:1px dotted var(--pacific);outline-offset:2px}.o-search-input--error,.o-search-input--warning,.o-search-input--success{outline-width:1px}.o-search-input--error{--input-border:var(--input-border-error)}.o-search-input--warning{--input-border:var(--input-border-warning)}.o-search-input--success{--input-border:var(--input-border-success)}.o-search-input:focus-within button[type=reset],.o-search-input:hover button[type=reset]{justify-content:flex-end;display:flex}.no-js .o-search-input button[type=reset]{display:none!important}::placeholder{color:var(--input-text-placeholder-default)}", Qt = class e extends L {
	static styles = x`
    ${b(Zt)}
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
		super(), this.label = "Search", this.name = "", this.title = "Search", this.value = "", this.maxlength = 75, this.placeholder = "", this.ariaLabelInput = "Search input", this.ariaLabelButton = "Clear search", this.disabled = !1, this.#e = z(), this.borderless = !1;
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
		return M`
      <div
        class="o-search-input ${this.validation ? `o-search-input--${this.validation}` : ""}"
      >
        <label
          for="search-text"
          class="o-search-input__input-label"
          aria-label=${this.label}
        >
          <cfpb-icon name="search"></cfpb-icon>
        </label>
        <input
          id="search-text"
          type="search"
          name=${this.name}
          .value=${this.value}
          ?disabled=${this.disabled}
          class="a-text-input"
          placeholder=${this.placeholder}
          title=${this.title}
          autocomplete="off"
          maxlength=${this.maxlength}
          aria-label=${this.ariaLabelInput}
          ${B(this.#e)}
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
          <cfpb-icon name="error"></cfpb-icon>
        </button>
      </div>
    `;
	}
	static init() {
		R.init(), p("cfpb-form-search-input", e);
	}
}, $t = class e extends L {
	static styles = x`
    ${b(Xt)}
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
	#e = z();
	#t = z();
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
		this.searchList = n, this.#r = new o(n.map((e) => e.value));
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
		return M` <!--Light DOM content-->
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

          <div class="popup" ${B(this.#t)}>
            <cfpb-listbox .childData=${this.searchList} ${B(this.#e)}>
            </cfpb-listbox>
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

      ${this.isOverMaxLength ? M`<cfpb-form-alert validation="error">
              Searches are limited to ${this.maxlength} characters.
            </cfpb-form-alert>` : null}`;
	}
	static init() {
		Qt.init(), Yt.init(), _t.init(), p("cfpb-form-search", e);
	}
}, en = ":host{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAZCAMAAABAf11LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5QTFRF////sxlC7MbQ2YyhxlNxCjFhR2WJV3GSKUt1dYumOFh/GT5rhZiwwszYsr/OlKW6Zn6c0djh8PL1iR9Ko7LE4OXrl0pttKC0pXWRtYKbSuJhRQAAANFJREFUeNrkkctuwyAUREnSuW/ApHYf//+jBVdZVcJi3aORgAXcMyLBAAJEzsVG3m8TkifyI3zfPQ6nJJLo421CArSBmkgjNEWtQE4zXJmClXuCWIlU5hdQxCqbqnE1KdIz79CVDvBwZxyKfQfmHTyzl01UZSvOWSTbhZLSWeDMufWLC/1ls3amT4qQq394EjIjApxBT+/nr8eEBNuKcB9SWMpmEXalNOylmlUZNTr4vE/4VdKhpC+leQf6y/e0wzL3RdJtkfUJyzwW+ZcdfgQYAJmJD3zerW6OAAAAAElFTkSuQmCC);background-repeat:no-repeat;background-size:contain;width:24px;height:13px;display:inline-block}", tn = class e extends L {
	static styles = x`
    ${b(en)}
  `;
	static init() {
		p("cfpb-flag-usa", e);
	}
}, nn = ".a-tagline{grid-template-columns:22px 1fr;column-gap:10px;font-size:.75rem;display:grid}.a-tagline__text{display:inline-block}.a-tagline cfpb-flag-usa{margin-top:1px}.a-tagline--large{font-size:1rem}.a-tagline--large cfpb-flag-usa{margin-top:4px}@media print{.a-tagline{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.u-nowrap{white-space:nowrap}", rn = class e extends L {
	static styles = x`
    ${b(nn)}
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
		return this.isLarge && e.push("a-tagline--large"), M`
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
		tn.init(), p("cfpb-tagline", e);
	}
}, an = class extends Ze {
	constructor(e) {
		if (super(e), this.it = P, e.type !== Ye.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === P || e == null) return this._t = void 0, this.it = e;
		if (e === N) return e;
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
an.directiveName = "unsafeHTML", an.resultType = 1;
var on = Xe(an), sn = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}button{font:inherit;border:1px solid var(--teal);background-color:var(--teal-20);color:var(--black);text-align:left;border-radius:.1875rem;align-items:center;gap:.625rem;min-width:fit-content;padding:4px 6px;font-size:1rem;line-height:1.25;display:flex}button:hover{background-color:var(--teal-40);cursor:pointer}button:focus{outline:1px dotted var(--teal);outline-offset:1px}button:active{background-color:var(--teal-60)}svg{pointer-events:none;flex:none;height:1.1875rem}label{pointer-events:none;display:contents}", cn = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" class=\"cf-icon-svg cf-icon-svg--error\" viewBox=\"0 0 12 19\"><path d=\"M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z\"/></svg>", ln = class e extends L {
	static styles = x`
    ${b(sn)}
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
		this.dispatchEvent(new CustomEvent("item-click", {
			detail: { target: this },
			bubbles: !1,
			composed: !1
		}));
	}
	#t() {
		let e = this.shadowRoot.querySelector("slot");
		this.value = e.assignedNodes({ flatten: !0 }).map((e) => e.textContent.trim()).join(" ");
	}
	render() {
		let e = this.for === "" ? M`<slot @slotchange=${this.#t}></slot>` : M`<label for=${this.for}><slot></slot></label>`;
		return M`<button @click=${this.#e}>
      ${e} ${on(cn)}
    </button>`;
	}
	static init() {
		p("cfpb-tag-filter", e);
	}
}, un = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.a-tag-topic{text-transform:uppercase;color:var(--gold-80);letter-spacing:1px;gap:.3125rem;font-size:.875rem;font-weight:600;text-decoration:none;display:flex}.a-tag-topic .a-tag-topic__text{color:var(--gray);word-break:break-word}@media only screen and (width<=37.5em){.a-tag-topic{box-sizing:border-box;align-items:center;gap:.3125rem;width:100%;padding-top:.625em;padding-bottom:.625em;display:flex;position:relative}.a-tag-topic .cf-icon-svg--right{margin-left:auto}.a-tag-topic .a-tag-topic__text{flex-shrink:10;text-decoration:none}}a.a-tag-topic{border-color:var(--gold-80);color:var(--gold-80);-webkit-text-decoration-color:var(--gold-80);-webkit-text-decoration-color:var(--gold-80);text-decoration-color:var(--gold-80)}a.a-tag-topic:visited,a.a-tag-topic.visited,a.a-tag-topic:hover,a.a-tag-topic.hover,a.a-tag-topic:focus,a.a-tag-topic.focus,a.a-tag-topic:active,a.a-tag-topic.active{-webkit-text-decoration-color:var(--gold-80);-webkit-text-decoration-color:var(--gold-80);text-decoration-color:var(--gold-80);color:var(--gold-80)}a.a-tag-topic .a-tag-topic__text{border-bottom-color:var(--gold-80)}@media only screen and (width<=37.5em){a.a-tag-topic{border-top-style:dotted;border-top-width:1px;border-bottom-style:dotted;border-bottom-width:1px;text-decoration:none}a.a-tag-topic:hover{border-top-style:solid;border-bottom-style:solid}a.a-tag-topic:focus{outline:none}a.a-tag-topic:focus:after{content:\"\";outline:1px dotted var(--gray);outline-offset:2px;width:100%;height:100%;display:block;position:absolute}a.a-tag-topic--no-top-border{border-top:none;position:relative;border-top-style:none!important}a.a-tag-topic:hover:before,a.a-tag-topic:focus:before{content:\"\";border-top:1px solid;width:100%;height:1px;display:block;position:absolute;top:-1px}}.a-tag-topic__bullet{font-size:1rem;line-height:1rem}@media only screen and (width>=37.5625em){a.a-tag-topic__text{color:var(--gray);-webkit-text-decoration-color:var(--gray);-webkit-text-decoration-color:var(--gray);text-decoration-color:var(--gray)}a.a-tag-topic__text:visited,a.a-tag-topic__text.visited,a.a-tag-topic__text:hover,a.a-tag-topic__text.hover,a.a-tag-topic__text:focus,a.a-tag-topic__text.focus,a.a-tag-topic__text:active,a.a-tag-topic__text.active{-webkit-text-decoration-color:var(--gray);-webkit-text-decoration-color:var(--gray);text-decoration-color:var(--gray);color:var(--gray)}a.a-tag-topic,a.a-tag-topic:visited,a.a-tag-topic:hover,a.a-tag-topic:focus,a.a-tag-topic:active{outline-offset:1px;border-bottom:none;text-decoration:none}a.a-tag-topic .a-tag-topic__text,a.a-tag-topic:visited .a-tag-topic__text,a.a-tag-topic:hover .a-tag-topic__text,a.a-tag-topic:focus .a-tag-topic__text,a.a-tag-topic:active .a-tag-topic__text{border-bottom:1px dotted var(--gold-80);padding-bottom:1px}a.a-tag-topic:hover .a-tag-topic__text{border-bottom:1px solid var(--gold-80)}a.a-tag-topic:focus{outline-color:var(--gray)}a.a-tag-topic:focus .a-tag-topic__text{border-bottom-style:solid!important}}", dn = class e extends L {
	static styles = x`
    ${b(un)}
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
		let e = M`<span class="a-tag-topic__bullet" aria-hidden="true"
      >•</span
    >`;
		return M`${this.href === "" ? M`<span class="a-tag-topic"
            >${e}<span class="a-tag-topic__text"><slot></slot></span
          ></span>` : M`<a class=${this.#e} href=${this.href}
            >${e}<span class="a-tag-topic__text"><slot></slot></span
          ></a>`}`;
	}
	static init() {
		p("cfpb-tag-topic", e);
	}
}, fn = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}:host{--select-border-default:var(--gray-60);--select-border-width-default:1px;--select-border-error:var(--red);--select-border-width-error:2px;--select-border-hover-default:var(--pacific);--select-border-focus-default:var(--pacific);--select-bg-disabled-default:var(--gray-10);--select-icon-bg-default:var(--gray-10);--select-text-disabled-default:var(--gray-dark);--select-border:var(--select-border-default);--select-border-width:var(--select-border-width-default);--select-border-hover:var(--select-border-hover-default);--select-border-focus:var(--select-border-focus-default);flex-direction:column;gap:.9375rem;display:flex}:host([open]) .o-select:before{z-index:11;content:\"\";border-top:1px solid var(--select-border);pointer-events:none;width:100%;display:block;position:absolute}::slotted(ul),::slotted(ol){display:none!important}::-webkit-scrollbar{appearance:none;width:7px}::-webkit-scrollbar-thumb{background-color:var(--pacific-20);box-shadow:0 0 1px var(--gray-10)}button{outline:none;line-height:1.3125}.o-select{border:1px solid var(--select-border);grid-template-columns:1fr 35px;min-height:33px;display:grid;position:relative}.o-select:hover{border-color:var(--select-border-hover);box-shadow:0 0 0 1px var(--select-border-hover)}.o-select:focus,.o-select:focus-within{outline:1px dotted var(--select-border-focus);outline-offset:2px;box-shadow:0 0 0 1px var(--select-border-focus)}.o-select__cues{cursor:pointer;background-color:#0000;border:0;justify-content:space-evenly;align-items:center;padding:0;display:flex}.o-select__cues .o-select__cue-close,.o-select__cues .o-select__cue-open{display:none}.o-select__cues[aria-expanded=false] .o-select__cue-open{margin-top:-1px;display:block}.o-select__cues[aria-expanded=true] .o-select__cue-close{margin-top:-5px;display:block}.o-select .no-results{padding:6.5px 10px}.o-select button.o-select__cues{background:var(--select-icon-bg-default);border-left:1px solid var(--select-border-default)}.o-select__label{cursor:pointer;justify-content:space-between;align-items:center;gap:10px;padding-left:.625rem;display:flex}.o-select__content{box-sizing:border-box;z-index:10;border:2px solid var(--pacific);background-color:var(--white);width:calc(100% + 2px);padding:0;position:absolute;left:-1px;overflow:hidden scroll}.o-select__content:after{width:100%;padding-bottom:.9375rem}.o-select--down:before{bottom:-1px}.o-select--down .o-select__content{border-top:0;top:35px}.o-select--up .o-select__content{top:unset;border-bottom:0}@media print{.o-select__cues[aria-expanded=true] .o-select__cue-close,.o-select__cues[aria-expanded=false] .o-select__cue-open{display:none}.o-select__content[aria-expanded=false]{display:block;max-height:99999px!important}}html[lang=ar] :host .o-select__cues{text-align:left}select{font:inherit}", pn = class {
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
				e.preventDefault(), t.isExpanded = !0, this.list.querySelector("cfpb-listbox-item")?.focus();
				break;
		}
	}
}, mn = class {
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
		let r = this.tagGroup.items.filter((t) => t !== e.detail.target) ?? [];
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
		else if (n === "CFPB-LISTBOX-ITEM") switch (e.key) {
			case "Tab":
				e.shiftKey && this.list.focusedIndex === 0 && (e.preventDefault(), this.list.focusItemAt(-1), this.input.focus());
				break;
		}
		e.key === "Escape" && (e.preventDefault(), t.isExpanded = !1);
	}
}, hn = class e extends L {
	static styles = x`
    ${b(fn)}
  `;
	#e;
	#t;
	#n;
	#r;
	#i = z();
	#a = z();
	#o = z();
	#s = z();
	#c = z();
	#l = z();
	#u = z();
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
		this.optionList = n, this.#r = new o(n.map((e) => e.value));
	}
	#h(e) {
		this.#t.suspend(), this.isExpanded ||= !0, this.#l.value.filterItems(this.#r.search(e.target.value)).length === 0 ? (this.#f = !0, this.requestUpdate()) : (this.#f = !1, this.requestUpdate(), this.#t.resume());
	}
	#g() {
		this.#t.suspend(), this.isExpanded = !1, this.#l.value.showAllItems(), this.#f = !1, this.requestUpdate(), this.#t.resume();
	}
	#_() {
		let e = this.#i.value, t = this.#o.value, n = this.isExpanded ? W.CLASSES.MH_DEFAULT : W.CLASSES.MH_ZERO;
		this.#n = new W(t).init(n), this.#t = new q(e), this.#t.setTransition(this.#n, this.#n.maxHeightZero, this.#n.maxHeightDynamic), this.#t.init(this.isExpanded), this.#t.addEventListener("expandbegin", () => {
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
		return this.multiple ? new mn({
			...e,
			input: this.#s.value,
			tagGroup: this.#c.value
		}) : new pn({
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
		return M`
      <!--Light DOM content-->
      <slot @slotchange=${this.#m}></slot>

      ${this.multiple ? M`<cfpb-list
              ${B(this.#c)}
              horizontal
              .childData=${this.optionList.filter((e) => e.checked).map((e) => ({
			text: e.value,
			tagName: "cfpb-tag-filter"
		}))}
              @item-click=${this.#x}
            >
            </cfpb-list>` : P}

      <div
        class="o-select"
        data-js-hook="behavior_flyout-menu"
        ${B(this.#i)}
      >
        ${this.#S()}

        <button
          tabindex=${this.multiple ? "-1" : "0"}
          class="o-select__cues"
          title="Expand content"
          data-js-hook="behavior_flyout-menu_trigger"
          ${B(this.#a)}
          @click=${this.#y}
        >
          <span class="o-select__cue-open" role="img" aria-label="Show">
            <cfpb-icon name="down"></cfpb-icon>
            <span class="u-visually-hidden">Show</span>
          </span>
          <span class="o-select__cue-close" role="img" aria-label="Hide">
            <cfpb-icon name="up"></cfpb-icon>
            <span class="u-visually-hidden">Hide</span>
          </span>
        </button>
        <div
          class="o-select__content"
          data-js-hook="behavior_flyout-menu_content"
          ${B(this.#o)}
        >
          <cfpb-listbox
            tabindex=${this.#f ? "-1" : "0"}
            @item-click=${this.#b}
            ?multiple=${this.multiple}
            .childData=${this.optionList}
            type=${this.multiple ? "checkbox" : "check"}
            aria-label=${this.ariaLabelList ? this.ariaLabelList : "Choose an item…"}
            ${B(this.#l)}
          >
          </cfpb-listbox>
          <div class=${this.#f ? "no-results" : "u-hidden"}>
            No results found
          </div>
        </div>
      </div>
    `;
	}
	#S() {
		return this.multiple ? M`
          <cfpb-form-search-input
            ${B(this.#s)}
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
        ` : M`<div
          class="o-select__label"
          ${B(this.#u)}
          @click=${this.#y}
        ></div>`;
	}
	static init() {
		R.init(), Qt.init(), Yt.init(), qe.init(), p("cfpb-select", e);
	}
}, gn = ".cf-icon-svg{vertical-align:middle;fill:currentColor;height:1.1875em}.cf-icon-svg--updating,.cf-icon-svg--updating-round{transform-origin:50%;animation:1.25s linear infinite updating-animation}@keyframes updating-animation{0%{transform:rotate(0)}to{transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{transform:scaleX(-1)}.u-no-animation{transition-duration:0s!important}.u-move-transition{transition:transform .25s ease-out}.u-move-to-origin{transform:translate(0)}.u-move-left{transform:translate(-100%)}.u-move-left-2x{transform:translate(-200%)}.u-move-left-3x{transform:translate(-300%)}.u-move-right{transform:translate(100%)}.u-move-up{transform:translateY(-100%)}.u-alpha-transition{transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{contain:paint;transition:max-height .2s ease-out;overflow:hidden}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";clear:both;display:table}.u-visually-hidden{clip:rect(0 0 0 0);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}@media only screen and (width<=37.5em){.u-hide-on-mobile{display:none}}@media only screen and (width>=37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{height:0;padding-bottom:56.25%;position:relative}.u-flexible-container__inner{width:100%;height:100%;position:absolute;top:0;left:0}.u-flexible-container--4-3{height:0;padding-bottom:75%;position:relative}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6667%}.u-w33pct{width:33.3333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}:host{width:100%}.m-pagination{grid-template-columns:auto 1fr auto;grid-template-areas:\"pag-btn-prev.pag-btn-next\"\"pag-form pag-form pag-form\";row-gap:.9375rem;display:grid}.m-pagination__form{background:var(--gray-5);color:var(--gray);border-radius:.25rem;flex-flow:wrap;grid-area:pag-form;place-content:center;gap:.625rem;padding:.3125rem;display:flex}.m-pagination__current-page{text-align:right;width:2.8125rem;font-weight:500}.m-pagination__label{white-space:nowrap;display:contents}.m-pagination__btn-prev{z-index:1;grid-area:pag-btn-prev}.m-pagination__btn-next{z-index:1;grid-area:pag-btn-next}@media only screen and (width>=37.5625em){.m-pagination{grid-template-areas:\"pag-btn-prev pag-form pag-btn-next\"}.m-pagination__btn-prev{border-top-right-radius:0;border-bottom-right-radius:0}.m-pagination__btn-next{border-top-left-radius:0;border-bottom-left-radius:0}}", _n = class e extends L {
	#e;
	#t;
	#n;
	static styles = x`
    ${b(gn)}
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
		super(), this.currentPage = 1, this.maxPage = 1, this.#e = new i(), this.#t = !1, this.lang = "en";
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
		return M`
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
          icon-left="left"
        >
          ${e("next")}
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
          iconright="right"
        >
          ${e("previous")}
        </cfpb-button>
      </nav>
    `;
	}
	static init() {
		R.init(), r.init(), p("cfpb-pagination", e);
	}
}, vn = /* @__PURE__ */ t({}), yn = /* @__PURE__ */ t({}), bn = /* @__PURE__ */ t({}), xn = xt + "atomic_init";
function Sn(e, t) {
	if (!e || !e.classList) {
		let n = e + " is not valid. Check that element is a DOM node with class \"" + t + "\"";
		throw Error(n);
	}
	return e;
}
function Cn(e, t) {
	let n = e.classList.contains(t) ? e : e.querySelector("." + t);
	if (!n) {
		let e = t + " not found on or in passed DOM node.";
		throw Error(e);
	}
	return n;
}
function wn(e, t) {
	return Sn(e, t), Cn(e, t);
}
function J(e) {
	return St(e, xn) ? !1 : (K(e, xn), !0);
}
function Tn(e, t, n, r = {}) {
	let i = (n || document).querySelectorAll(e), a = [], o, s;
	for (let e = 0, n = i.length; e < n; e++) s = i[e], St(s, xn) === !1 && (o = new t(s), o.init(r), a.push(o));
	return a;
}
//#endregion
//#region packages/cfpb-design-system/src/components/utilities/breakpoint-state.js
function En() {
	let e = getComputedStyle(document.body).fontSize;
	return e = e === "" ? -1 : e, parseFloat(e);
}
function Dn(e, t) {
	let n = e.min, r = e.max;
	return En() > 0 && En() !== 16 && (n = n / 16 * En(), r = r / 16 * En()), (n || 0) <= t && t <= (r || Infinity);
}
function On(e) {
	let t = {};
	e ||= window.innerWidth;
	let r;
	for (r in n) t[r] = Dn(n[r], e);
	return t;
}
var kn = "mobile", An = "tablet", jn = "desktop";
function Mn(e) {
	let t = !1, n = On();
	return (e === "mobile" && n.bpXS || e === "tablet" && n.bpSM || e === "desktop" && (n.bpMED || n.bpLG || n.bpXL)) && (t = !0), t;
}
//#endregion
//#region packages/cfpb-design-system/src/components/utilities/type-checkers.js
var Nn = Object.prototype.toString;
function Pn(e) {
	return e === void 0;
}
function Fn(e) {
	return e !== void 0;
}
function In(e) {
	return typeof e == "object" && !!e;
}
function Ln(e) {
	return Nn.call(e) === "[object String]";
}
function Rn(e) {
	return Nn.call(e) === "[object Number]";
}
function zn(e) {
	return Nn.call(e) === "[object Date]";
}
var Bn = Array.isArray || function(e) {
	return Nn.call(e) === "[object Array]";
};
function Vn(e) {
	return Nn.call(e) === "[object Function]";
}
function Hn(e) {
	return Pn(e) || e === null || Ln(e) && e.length <= 0 || /^\s*$/.test(e);
}
//#endregion
//#region packages/cfpb-design-system/src/components/utilities/media-helpers.js
function Un() {
	return !!(/* @__PURE__ */ new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)).test(navigator.userAgent);
}
//#endregion
//#region packages/cfpb-design-system/src/components/utilities/transition/alpha-transition.js
var Wn = {
	CSS_PROPERTY: "opacity",
	BASE_CLASS: "u-alpha-transition",
	ALPHA_100: "u-alpha-100",
	ALPHA_0: "u-alpha-0"
};
function Gn(e) {
	let t = new H(), n = new V(e, Wn, this);
	function r(e) {
		return n.init(e), this;
	}
	function i() {
		return n.applyClass(Wn.ALPHA_100), this;
	}
	function a() {
		return n.applyClass(Wn.ALPHA_0), this;
	}
	return this.addEventListener = t.addEventListener, this.dispatchEvent = t.dispatchEvent, this.removeEventListener = t.removeEventListener, this.animateOff = n.animateOff, this.animateOn = n.animateOn, this.halt = n.halt, this.isAnimated = n.isAnimated, this.remove = n.remove, this.setElement = n.setElement, this.fadeIn = i, this.fadeOut = a, this.init = r, this;
}
Gn.CLASSES = Wn;
//#endregion
//#region packages/cfpb-design-system/src/components/utilities/transition/move-transition.js
var Y = {
	CSS_PROPERTY: "transform",
	BASE_CLASS: "u-move-transition",
	MOVE_TO_ORIGIN: "u-move-to-origin",
	MOVE_LEFT: "u-move-left",
	MOVE_LEFT_2X: "u-move-left-2x",
	MOVE_LEFT_3X: "u-move-left-3x",
	MOVE_RIGHT: "u-move-right",
	MOVE_UP: "u-move-up"
};
function Kn(e) {
	let t = new H(), n = new V(e, Y, this);
	function r(e) {
		return n.init(e), this;
	}
	function i() {
		return n.applyClass(Y.MOVE_TO_ORIGIN), this;
	}
	function a(e) {
		e ||= 1;
		let t = [
			Y.MOVE_LEFT,
			Y.MOVE_LEFT_2X,
			Y.MOVE_LEFT_3X
		];
		return n.applyClass(t[e - 1]), this;
	}
	function o() {
		return n.applyClass(Y.MOVE_RIGHT), this;
	}
	function s() {
		return n.applyClass(Y.MOVE_UP), this;
	}
	return this.addEventListener = t.addEventListener, this.dispatchEvent = t.dispatchEvent, this.removeEventListener = t.removeEventListener, this.animateOff = n.animateOff, this.animateOn = n.animateOn, this.halt = n.halt, this.isAnimated = n.isAnimated, this.setElement = n.setElement, this.remove = n.remove, this.init = r, this.moveLeft = () => a(1), this.moveLeft2 = () => a(2), this.moveLeft3 = () => a(3), this.moveRight = o, this.moveToOrigin = i, this.moveUp = s, this;
}
Kn.CLASSES = Y;
//#endregion
//#region packages/cfpb-design-system/src/utilities/utilities.scss
var qn = /* @__PURE__ */ t({}), Jn = /* @__PURE__ */ t({}), X = "o-expandable";
function Z(e) {
	let t = wn(e, X), n, r, i, a, o;
	function s() {
		if (!J(t)) return this;
		n = t.querySelector(`.${X}__header`), r = t.querySelector(`.${X}__content`), i = t.querySelector(`.${X}__label`);
		let e = t.classList.contains(`${X}--onload-open`);
		K(t, "behavior_flyout-menu"), K(n, "behavior_flyout-menu_trigger"), K(r, "behavior_flyout-menu_content");
		let s = e ? W.CLASSES.MH_DEFAULT : W.CLASSES.MH_ZERO;
		return a = new W(r).init(s), e || r.classList.add("u-hidden"), o = new q(t), o.setTransition(a, a.maxHeightZero, a.maxHeightDefault), o.init(e), o.addEventListener("expandbegin", () => {
			r.classList.remove("u-hidden"), this.dispatchEvent("expandbegin", { target: this });
		}), o.addEventListener("collapseend", () => {
			r.classList.add("u-hidden");
		}), this;
	}
	function c() {
		return i.textContent.trim();
	}
	this.init = s, this.expand = () => o.expand(), this.collapse = () => o.collapse(), this.isExpanded = () => o.isExpanded(), this.refresh = () => o.getTransition().refresh(), this.getLabelText = c;
	let l = new H();
	return this.addEventListener = l.addEventListener, this.removeEventListener = l.removeEventListener, this.dispatchEvent = l.dispatchEvent, this;
}
Z.BASE_CLASS = X, Z.init = (e) => Tn(`.${Z.BASE_CLASS}`, Z, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-expandables/expandable-group.scss
var Yn = /* @__PURE__ */ t({}), Xn = "o-expandable-group";
function Zn(e) {
	let t = wn(e, Xn), n = t.classList.contains(`${Xn}--accordion`), r, i;
	function a(e) {
		let t = e.target;
		i && i !== t && i.collapse(), i = t;
	}
	function o(e) {
		return J(t) && n && (r = e, r.forEach((e) => {
			e.addEventListener("expandbegin", a);
		})), this;
	}
	return this.init = o, this;
}
Zn.BASE_CLASS = Xn, Zn.init = (e) => {
	(e || document).querySelectorAll(`.${Xn}`).forEach((e) => {
		let t = Tn(`.${Z.BASE_CLASS}`, Z, e);
		new Zn(e).init(t);
	});
};
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-expandables/summary.scss
var Qn = /* @__PURE__ */ t({}), Q = "o-summary";
function $n(e) {
	let t = wn(e, Q), n = t.classList.contains(`${Q}--mobile`), r = t.querySelector(`.${Q}__content`), i = t.querySelector(`.${Q}__btn`), a, o, s;
	function c() {
		return J(t) && window.addEventListener("load", l), this;
	}
	function l() {
		window.removeEventListener("load", l), s = !p(), K(t, "behavior_flyout-menu"), K(r, "behavior_flyout-menu_content"), K(i, "behavior_flyout-menu_trigger"), o = new q(t, !1), a = new W(r), a.init(s ? W.CLASSES.MH_SUMMARY : W.CLASSES.MH_DEFAULT), o.setTransition(a, a.maxHeightSummary, a.maxHeightDefault), o.addEventListener("triggerclick", m), o.init(), f(), window.addEventListener("resize", f), "onorientationchange" in window && window.addEventListener("orientationchange", f), t.addEventListener("focusin", u), r.addEventListener("click", d);
	}
	function u(e) {
		!s && e.target !== i && (i.click(), t.removeEventListener("focusin", u));
	}
	function d(e) {
		e.target.tagName !== "A" && o.isExpanded() && a.refresh();
	}
	function f() {
		p() ? y() : v();
	}
	function p() {
		return n && !Mn("mobile") || r.scrollHeight <= 88;
	}
	function m() {
		o.addEventListener("expandend", h);
	}
	function h() {
		_(), window.removeEventListener("resize", f), window.removeEventListener("orientationchange", f), o.removeEventListener("expandend", h), o.suspend(), a.remove();
	}
	function g() {
		i.classList.remove("u-hidden");
	}
	function _() {
		i.classList.add("u-hidden");
	}
	function v() {
		return s &&= (o.collapse(), a.animateOn(), g(), !1), !s;
	}
	function y() {
		return s ||= (a.animateOff(), o.expand(), _(), !0), s;
	}
	let b = new H();
	return this.addEventListener = b.addEventListener, this.removeEventListener = b.removeEventListener, this.dispatchEvent = b.dispatchEvent, this.init = c, this;
}
$n.BASE_CLASS = Q, $n.init = (e) => Tn(`.${Q}`, $n, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-expandables/summary-minimal.js
var er = "o-summary-minimal";
function tr(e) {
	let t = wn(e, er), n = t.querySelector(`.${er}__content`), r = t.querySelector(`.${er}__btn`), i, a;
	function o() {
		return J(t) ? (K(t, "behavior_flyout-menu"), K(n, "behavior_flyout-menu_content"), K(r, "behavior_flyout-menu_trigger"), window.addEventListener("load", s), this) : this;
	}
	function s() {
		window.removeEventListener("load", s), a = new q(t, !1), i = new W(n), i.init(W.CLASSES.MH_SUMMARY), a.setTransition(i, i.maxHeightSummary, i.maxHeightDefault), a.init(), t.addEventListener("focusin", c), n.addEventListener("click", l), a.collapse(), i.animateOn();
	}
	function c(e) {
		e.target !== r && (r.click(), t.removeEventListener("focusin", c));
	}
	function l(e) {
		e.target.tagName !== "A" && a.isExpanded() && i.refresh();
	}
	let u = new H();
	return this.addEventListener = u.addEventListener, this.removeEventListener = u.removeEventListener, this.dispatchEvent = u.dispatchEvent, this.init = o, this;
}
tr.BASE_CLASS = er, tr.init = (e) => Tn(`.${er}`, tr, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-forms/form.scss
var nr = /* @__PURE__ */ t({}), rr = /* @__PURE__ */ t({}), ir = /* @__PURE__ */ t({}), ar = /* @__PURE__ */ t({}), or = /* @__PURE__ */ t({}), sr = /* @__PURE__ */ t({}), cr = /* @__PURE__ */ t({}), lr = /* @__PURE__ */ t({}), ur = /* @__PURE__ */ t({});
function dr(e) {
	return e.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
}
function fr(e, t) {
	return RegExp(dr(t.trim()), "i").test(e);
}
function pr(e, t, n) {
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
		return fr(t.text, r) && e.push(n), e;
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
function $(e, t, n) {
	let r = document.createElement(e);
	return Object.keys(n).forEach((e) => {
		let t = n[e];
		e in r ? r[e] = t : r.setAttribute(e, t);
	}), t && t.appendChild(r), r;
}
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-forms/multiselect.js
var mr = "o-multiselect", hr = "prev", gr = "next", _r = "Enter", vr = " ", yr = "Escape", br = "ArrowUp", xr = "ArrowDown", Sr = "Tab", Cr = {
	renderTags: !0,
	maxSelections: 5
};
function wr(e) {
	e.classList.add(mr);
	let t = wn(e, mr), n = !1, r, i, a, o, s, c, l, u, d, f, p, m = [], h;
	function g() {
		p.classList.remove("u-no-results"), p.classList.add("u-filtered");
		let e = a.getLastFilterIndices();
		for (let t = 0, n = e.length; t < n; t++) m[e[t]].classList.remove("u-filter-match");
		e = a.getFilterIndices();
		for (let t = 0, n = e.length; t < n; t++) m[e[t]].classList.add("u-filter-match");
	}
	function _() {
		p.classList.remove("u-filtered", "u-no-results");
		for (let e = 0, t = p.children.length; e < t; e++) p.children[e].classList.remove("u-filter-match");
		a.clearFilter();
	}
	function v() {
		p.classList.add("u-no-results"), p.classList.remove("u-filtered");
	}
	function y(e) {
		return e.length > 0 ? (g(), !0) : (v(), !1);
	}
	function b(e) {
		_(), a.resetIndex(), y(a.filterIndices(e));
	}
	function x() {
		return c.classList.add("u-active"), f.classList.remove("u-invisible"), f.setAttribute("aria-hidden", !1), h.dispatchEvent("expandbegin", { target: h }), h;
	}
	function S() {
		return c.classList.remove("u-active"), f.classList.add("u-invisible"), f.setAttribute("aria-hidden", !0), a.resetIndex(), h.dispatchEvent("collapsebegin", { target: h }), h;
	}
	function C(e) {
		e === gr ? a.setIndex(a.getIndex() + 1) : e === hr && a.setIndex(a.getIndex() - 1);
		let t = a.getIndex();
		if (t > -1) {
			let e = t, r = a.getFilterIndices();
			r.length > 0 && (e = r[t]);
			let i = a.getOption(e).value, o = p.querySelector("[data-option=\"" + i + "\"]").querySelector("input");
			n = !0, o.focus();
		} else n = !1, d.focus();
	}
	function ee() {
		d.value = "", _();
	}
	function te(e) {
		let t = e.target;
		t.tagName === "BUTTON" && (e.preventDefault(), t.removeEventListener("click", te), t.querySelector("label").click());
	}
	function ne(e) {
		if (e.key === vr || e.key === _r) {
			let t = e.target.querySelector("label");
			p.querySelector("#" + t.getAttribute("for")).click();
		}
	}
	function re(e) {
		return r + "-" + e.value.trim().replace(/[^\w]/g, "-").toLowerCase();
	}
	function ie(e, t) {
		let n = re(t), r = $("li", null, { "data-option": t.value }), i = $("button", r, {
			type: "button",
			class: "a-tag-filter",
			innerHTML: "<label for=" + n + ">" + t.text + cn + "</label>"
		});
		e.appendChild(r), i.addEventListener("click", te), i.addEventListener("keydown", ne);
	}
	function ae(e) {
		let t = a.getOption(e) || a.getOption(a.getIndex());
		if (t) {
			if (t.checked) {
				p.classList.contains("u-max-selections") && p.classList.remove("u-max-selections");
				let e = "[data-option=\"" + t.value + "\"]", n = l.querySelector(e);
				n !== void 0 && n && l?.removeChild(n);
			} else s?.renderTags && l && ie(l, t);
			a.toggleOption(e), a.isAtMaxSelections() && p.classList.add("u-max-selections"), h.dispatchEvent("selectionsupdated", { target: h });
		}
		a.resetIndex(), n = !1, f.getAttribute("aria-hidden") === "false" && d.focus();
	}
	function w(e) {
		ae(Number(e.target.getAttribute("data-index"))), ee();
	}
	function T() {
		u.addEventListener("mousemove", function(e) {
			let t = e.target;
			e.offsetX > t.offsetWidth - 35 ? t.style.cursor = "pointer" : t.style.cursor = "auto";
		}), u.addEventListener("mouseup", function(e) {
			let t = e.target;
			e.offsetX > t.offsetWidth - 35 && f.offsetHeight === 140 && d.blur();
		}), d.addEventListener("input", function() {
			b(this.value);
		}), d.addEventListener("focus", function() {
			f.getAttribute("aria-hidden") === "true" && x();
		}), d.addEventListener("blur", function() {
			!n && f.getAttribute("aria-hidden") === "false" && S();
		}), d.addEventListener("keydown", function(e) {
			let t = e.key;
			f.getAttribute("aria-hidden") === "true" && t !== Sr && x(), t === _r ? (e.preventDefault(), C(gr)) : t === yr ? (ee(), S()) : t === xr ? C(gr) : t === Sr && !e.shiftKey && f.getAttribute("aria-hidden") === "false" && S();
		}), p.addEventListener("mousedown", function() {
			n = !0;
		}), p.addEventListener("keydown", function(e) {
			let t = e.key, n = e.target, r = n.checked;
			if (t === _r) {
				e.preventDefault(), n.checked = !r;
				let t = new Event("change", {
					bubbles: !1,
					cancelable: !0
				});
				n.dispatchEvent(t);
			} else t === yr ? (d.focus(), S()) : t === br ? C(hr) : t === xr && C(gr);
		}), f.addEventListener("mousedown", function(e) {
			e.target.tagName === "LABEL" && (n = !0);
		});
		let e = p.querySelectorAll("input");
		for (let t = 0, n = e.length; t < n; t++) e[t].addEventListener("change", w);
		let t = l.querySelectorAll("button");
		for (let e = 0, n = t.length; e < n; e++) t[e].addEventListener("click", te), t[e].addEventListener("keydown", ne);
	}
	function oe() {
		c = document.createElement("div"), c.className = mr, l = $("ul", null, { className: "m-tag-group" }), u = $("header", c, { className: "o-multiselect__header" }), d = $("input", u, {
			className: "o-multiselect__search a-text-input",
			type: "text",
			placeholder: i || "Select up to five",
			id: t.id,
			autocomplete: "off"
		}), f = $("fieldset", c, {
			className: "o-multiselect__fieldset u-invisible",
			"aria-hidden": "true"
		});
		let e = "o-multiselect__options";
		a.isAtMaxSelections() && (e += " u-max-selections"), p = $("ul", f, { className: e });
		let n, h, g;
		for (let e = 0, t = o.length; e < t; e++) {
			n = o[e], h = re(n), g = a.getOption(e).checked;
			let t = $("li", p, {
				"data-option": n.value,
				"data-cy": "multiselect-option",
				class: "m-form-field m-form-field--checkbox"
			});
			$("input", t, {
				id: h,
				type: "checkbox",
				value: n.value,
				name: r,
				class: "a-checkbox o-multiselect__checkbox",
				checked: g,
				"data-index": e
			}), $("label", t, {
				for: h,
				textContent: n.text,
				className: "o-multiselect__label a-label"
			}), m.push(t), g && s?.renderTags && ie(l, n);
		}
		return c.insertBefore(l, u), t.parentNode.insertBefore(c, t), c.appendChild(t), c;
	}
	function se(e = Cr) {
		if (!J(t) || Un()) return this;
		if (h = this, r = t.name || t.id, i = t.getAttribute("data-placeholder"), o = t.options || [], s = {
			...Cr,
			...e
		}, o.length > 0) {
			a = new pr(o, r, s).init();
			let e = oe();
			t.parentNode.removeChild(t), t = e, J(t), T();
		}
		return this;
	}
	function E() {
		return a;
	}
	this.init = se, this.expand = x, this.collapse = S;
	let D = new H();
	return this.addEventListener = D.addEventListener, this.removeEventListener = D.removeEventListener, this.dispatchEvent = D.dispatchEvent, this.getModel = E, this.updateSelections = ae, this.selectionClickHandler = te, this.selectionKeyDownHandler = ne, this;
}
wr.BASE_CLASS = mr, wr.init = (e) => Tn(`.${mr}`, wr, void 0, e);
//#endregion
//#region packages/cfpb-design-system/src/components/cfpb-icons/icon.scss
var Tr = /* @__PURE__ */ t({}), Er = /* @__PURE__ */ t({}), Dr = /* @__PURE__ */ t({}), Or = /* @__PURE__ */ t({}), kr = /* @__PURE__ */ t({}), Ar = /* @__PURE__ */ t({}), jr = /* @__PURE__ */ t({}), Mr = /* @__PURE__ */ t({}), Nr = /* @__PURE__ */ t({}), Pr = /* @__PURE__ */ t({}), Fr = /* @__PURE__ */ t({}), Ir = /* @__PURE__ */ t({}), Lr = /* @__PURE__ */ t({}), Rr = /* @__PURE__ */ t({}), zr = /* @__PURE__ */ t({}), Br = /* @__PURE__ */ t({}), Vr = /* @__PURE__ */ t({}), Hr = /* @__PURE__ */ t({}), Ur = /* @__PURE__ */ t({}), Wr = /* @__PURE__ */ t({});
//#endregion
export { Gn as AlphaTransition, bt as BEHAVIOR_PREFIX, V as BaseTransition, Je as CfpbAlert, ht as CfpbButton, kt as CfpbExpandable, Rt as CfpbFileUpload, _t as CfpbFormAlert, It as CfpbFormChoice, $t as CfpbFormSearch, Qt as CfpbFormSearchInput, R as CfpbIcon, Vt as CfpbLabel, Wt as CfpbLink, qe as CfpbList, Gt as CfpbListItem, Yt as CfpbListbox, Jt as CfpbListboxItem, _n as CfpbPagination, hn as CfpbSelect, ln as CfpbTagFilter, dn as CfpbTagTopic, rn as CfpbTagline, jn as DESKTOP, H as EventObserver, Z as Expandable, Zn as ExpandableGroup, Yn as ExpandableGroupStyles, Jn as ExpandableStyles, q as FlyoutMenu, r as I18nService, G as JS_HOOK, kn as MOBILE, W as MaxHeightTransition, i as MediaQueryService, Kn as MoveTransition, wr as Multiselect, xt as STATE_PREFIX, o as SearchService, $n as Summary, tr as SummaryMinimal, Qn as SummaryStyles, An as TABLET, K as add, m as applyThemeProperties, Pr as bannerStyles, wt as behaviorAttach, Et as behaviorFind, yn as buttonGroupStyles, bn as buttonLinkStyles, vn as buttonStyles, Dr as cardGroupStyles, Er as cardStyles, Tt as checkBehaviorDom, wn as checkDom, St as contains, Rr as dateStyles, p as defineComponent, Or as emailSignupStyles, kr as featuredContentModuleStyles, rr as formAlertStyles, ir as formFieldStyles, nr as formStyles, On as getBreakpointState, f as getSharedConfig, Ar as heroStyles, Tr as iconStyles, Tn as instantiateAll, Bn as isArray, zn as isDate, Fn as isDefined, Hn as isEmpty, Vn as isFunction, Un as isMobileUserAgent, Rn as isNumber, In as isObject, Ln as isString, Pn as isUndefined, ar as labelStyles, jr as layoutStyles, zr as linkStyles, Br as listStyles, Vr as metaHeaderStyles, Fr as notificationStyles, Ir as paginationStyles, a as parseChildData, Hr as pullQuoteStyles, or as rangeStyles, sr as searchInputStyles, cr as selectStyles, J as setInitFlag, d as setSharedConfig, Ur as slugHeaderStyles, Lr as tableStyles, lr as tagStyles, Wr as taglineStyles, ur as textInputStyles, Mr as textIntroductionStyles, qn as utilitiesStyles, n as varsBreakpoints, Mn as viewportIsIn, Nr as wellStyles };
