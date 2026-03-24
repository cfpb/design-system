const vt = {
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
  bpXL: {
    min: 1201
  }
};
const Se = globalThis, tt = Se.ShadowRoot && (Se.ShadyCSS === void 0 || Se.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, at = /* @__PURE__ */ Symbol(), mt = /* @__PURE__ */ new WeakMap();
let Mt = class {
  constructor(e, t, a) {
    if (this._$cssResult$ = !0, a !== at) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (tt && e === void 0) {
      const a = t !== void 0 && t.length === 1;
      a && (e = mt.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), a && mt.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const oa = (r) => new Mt(typeof r == "string" ? r : r + "", void 0, at), A = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce(((a, i, o) => a + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[o + 1]), r[0]);
  return new Mt(t, r, at);
}, na = (r, e) => {
  if (tt) r.adoptedStyleSheets = e.map(((t) => t instanceof CSSStyleSheet ? t : t.styleSheet));
  else for (const t of e) {
    const a = document.createElement("style"), i = Se.litNonce;
    i !== void 0 && a.setAttribute("nonce", i), a.textContent = t.cssText, r.appendChild(a);
  }
}, yt = tt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const a of e.cssRules) t += a.cssText;
  return oa(t);
})(r) : r;
const { is: da, defineProperty: sa, getOwnPropertyDescriptor: la, getOwnPropertyNames: ca, getOwnPropertySymbols: ha, getPrototypeOf: fa } = Object, Oe = globalThis, xt = Oe.trustedTypes, ua = xt ? xt.emptyScript : "", ba = Oe.reactiveElementPolyfillSupport, ue = (r, e) => r, Ke = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? ua : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, qt = (r, e) => !da(r, e), kt = { attribute: !0, type: String, converter: Ke, reflect: !1, useDefault: !1, hasChanged: qt };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), Oe.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let re = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ??= []).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = kt) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const a = /* @__PURE__ */ Symbol(), i = this.getPropertyDescriptor(e, a, t);
      i !== void 0 && sa(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, a) {
    const { get: i, set: o } = la(this.prototype, e) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get: i, set(n) {
      const s = i?.call(this);
      o?.call(this, n), this.requestUpdate(e, s, a);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? kt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ue("elementProperties"))) return;
    const e = fa(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ue("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ue("properties"))) {
      const t = this.properties, a = [...ca(t), ...ha(t)];
      for (const i of a) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [a, i] of t) this.elementProperties.set(a, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, a] of this.elementProperties) {
      const i = this._$Eu(t, a);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const a = new Set(e.flat(1 / 0).reverse());
      for (const i of a) t.unshift(yt(i));
    } else e !== void 0 && t.push(yt(e));
    return t;
  }
  static _$Eu(e, t) {
    const a = t.attribute;
    return a === !1 ? void 0 : typeof a == "string" ? a : typeof e == "string" ? e.toLowerCase() : void 0;
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
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const a of t.keys()) this.hasOwnProperty(a) && (e.set(a, this[a]), delete this[a]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return na(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((e) => e.hostConnected?.()));
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    this._$EO?.forEach(((e) => e.hostDisconnected?.()));
  }
  attributeChangedCallback(e, t, a) {
    this._$AK(e, a);
  }
  _$ET(e, t) {
    const a = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, a);
    if (i !== void 0 && a.reflect === !0) {
      const o = (a.converter?.toAttribute !== void 0 ? a.converter : Ke).toAttribute(t, a.type);
      this._$Em = e, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(e, t) {
    const a = this.constructor, i = a._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const o = a.getPropertyOptions(i), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : Ke;
      this._$Em = i, this[i] = n.fromAttribute(t, o.type) ?? this._$Ej?.get(i) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, t, a) {
    if (e !== void 0) {
      const i = this.constructor, o = this[e];
      if (a ??= i.getPropertyOptions(e), !((a.hasChanged ?? qt)(o, t) || a.useDefault && a.reflect && o === this._$Ej?.get(e) && !this.hasAttribute(i._$Eu(e, a)))) return;
      this.C(e, t, a);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: a, reflect: i, wrapped: o }, n) {
    a && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, n ?? t ?? this[e]), o !== !0 || n !== void 0) || (this._$AL.has(e) || (this.hasUpdated || a || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [i, o] of this._$Ep) this[i] = o;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [i, o] of a) {
        const { wrapped: n } = o, s = this[i];
        n !== !0 || this._$AL.has(i) || s === void 0 || this.C(i, void 0, o, s);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach(((a) => a.hostUpdate?.())), this.update(t)) : this._$EM();
    } catch (a) {
      throw e = !1, this._$EM(), a;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    this._$EO?.forEach(((t) => t.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
    this._$Eq &&= this._$Eq.forEach(((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
re.elementStyles = [], re.shadowRootOptions = { mode: "open" }, re[ue("elementProperties")] = /* @__PURE__ */ new Map(), re[ue("finalized")] = /* @__PURE__ */ new Map(), ba?.({ ReactiveElement: re }), (Oe.reactiveElementVersions ??= []).push("2.1.0");
const rt = globalThis, Ae = rt.trustedTypes, wt = Ae ? Ae.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Nt = "$lit$", W = `lit$${Math.random().toFixed(9).slice(2)}$`, Dt = "?" + W, pa = `<${Dt}>`, te = document, ge = () => te.createComment(""), ve = (r) => r === null || typeof r != "object" && typeof r != "function", it = Array.isArray, ga = (r) => it(r) || typeof r?.[Symbol.iterator] == "function", Fe = `[ 	
\f\r]`, he = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, jt = /-->/g, zt = />/g, Q = RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), _t = /'/g, Et = /"/g, Pt = /^(?:script|style|textarea|title)$/i, va = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), x = va(1), Z = /* @__PURE__ */ Symbol.for("lit-noChange"), _ = /* @__PURE__ */ Symbol.for("lit-nothing"), St = /* @__PURE__ */ new WeakMap(), ee = te.createTreeWalker(te, 129);
function Ht(r, e) {
  if (!it(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return wt !== void 0 ? wt.createHTML(e) : e;
}
const ma = (r, e) => {
  const t = r.length - 1, a = [];
  let i, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", n = he;
  for (let s = 0; s < t; s++) {
    const d = r[s];
    let f, c, u = -1, p = 0;
    for (; p < d.length && (n.lastIndex = p, c = n.exec(d), c !== null); ) p = n.lastIndex, n === he ? c[1] === "!--" ? n = jt : c[1] !== void 0 ? n = zt : c[2] !== void 0 ? (Pt.test(c[2]) && (i = RegExp("</" + c[2], "g")), n = Q) : c[3] !== void 0 && (n = Q) : n === Q ? c[0] === ">" ? (n = i ?? he, u = -1) : c[1] === void 0 ? u = -2 : (u = n.lastIndex - c[2].length, f = c[1], n = c[3] === void 0 ? Q : c[3] === '"' ? Et : _t) : n === Et || n === _t ? n = Q : n === jt || n === zt ? n = he : (n = Q, i = void 0);
    const g = n === Q && r[s + 1].startsWith("/>") ? " " : "";
    o += n === he ? d + pa : u >= 0 ? (a.push(f), d.slice(0, u) + Nt + d.slice(u) + W + g) : d + W + (u === -2 ? s : g);
  }
  return [Ht(r, o + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), a];
};
class me {
  constructor({ strings: e, _$litType$: t }, a) {
    let i;
    this.parts = [];
    let o = 0, n = 0;
    const s = e.length - 1, d = this.parts, [f, c] = ma(e, t);
    if (this.el = me.createElement(f, a), ee.currentNode = this.el.content, t === 2 || t === 3) {
      const u = this.el.content.firstChild;
      u.replaceWith(...u.childNodes);
    }
    for (; (i = ee.nextNode()) !== null && d.length < s; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const u of i.getAttributeNames()) if (u.endsWith(Nt)) {
          const p = c[n++], g = i.getAttribute(u).split(W), y = /([.?@])?(.*)/.exec(p);
          d.push({ type: 1, index: o, name: y[2], strings: g, ctor: y[1] === "." ? xa : y[1] === "?" ? ka : y[1] === "@" ? wa : Ie }), i.removeAttribute(u);
        } else u.startsWith(W) && (d.push({ type: 6, index: o }), i.removeAttribute(u));
        if (Pt.test(i.tagName)) {
          const u = i.textContent.split(W), p = u.length - 1;
          if (p > 0) {
            i.textContent = Ae ? Ae.emptyScript : "";
            for (let g = 0; g < p; g++) i.append(u[g], ge()), ee.nextNode(), d.push({ type: 2, index: ++o });
            i.append(u[p], ge());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Dt) d.push({ type: 2, index: o });
      else {
        let u = -1;
        for (; (u = i.data.indexOf(W, u + 1)) !== -1; ) d.push({ type: 7, index: o }), u += W.length - 1;
      }
      o++;
    }
  }
  static createElement(e, t) {
    const a = te.createElement("template");
    return a.innerHTML = e, a;
  }
}
function se(r, e, t = r, a) {
  if (e === Z) return e;
  let i = a !== void 0 ? t._$Co?.[a] : t._$Cl;
  const o = ve(e) ? void 0 : e._$litDirective$;
  return i?.constructor !== o && (i?._$AO?.(!1), o === void 0 ? i = void 0 : (i = new o(r), i._$AT(r, t, a)), a !== void 0 ? (t._$Co ??= [])[a] = i : t._$Cl = i), i !== void 0 && (e = se(r, i._$AS(r, e.values), i, a)), e;
}
class ya {
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
    const { el: { content: t }, parts: a } = this._$AD, i = (e?.creationScope ?? te).importNode(t, !0);
    ee.currentNode = i;
    let o = ee.nextNode(), n = 0, s = 0, d = a[0];
    for (; d !== void 0; ) {
      if (n === d.index) {
        let f;
        d.type === 2 ? f = new ye(o, o.nextSibling, this, e) : d.type === 1 ? f = new d.ctor(o, d.name, d.strings, this, e) : d.type === 6 && (f = new ja(o, this, e)), this._$AV.push(f), d = a[++s];
      }
      n !== d?.index && (o = ee.nextNode(), n++);
    }
    return ee.currentNode = te, i;
  }
  p(e) {
    let t = 0;
    for (const a of this._$AV) a !== void 0 && (a.strings !== void 0 ? (a._$AI(e, a, t), t += a.strings.length - 2) : a._$AI(e[t])), t++;
  }
}
class ye {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(e, t, a, i) {
    this.type = 2, this._$AH = _, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = a, this.options = i, this._$Cv = i?.isConnected ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = se(this, e, t), ve(e) ? e === _ || e == null || e === "" ? (this._$AH !== _ && this._$AR(), this._$AH = _) : e !== this._$AH && e !== Z && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ga(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== _ && ve(this._$AH) ? this._$AA.nextSibling.data = e : this.T(te.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    const { values: t, _$litType$: a } = e, i = typeof a == "number" ? this._$AC(e) : (a.el === void 0 && (a.el = me.createElement(Ht(a.h, a.h[0]), this.options)), a);
    if (this._$AH?._$AD === i) this._$AH.p(t);
    else {
      const o = new ya(i, this), n = o.u(this.options);
      o.p(t), this.T(n), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = St.get(e.strings);
    return t === void 0 && St.set(e.strings, t = new me(e)), t;
  }
  k(e) {
    it(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let a, i = 0;
    for (const o of e) i === t.length ? t.push(a = new ye(this.O(ge()), this.O(ge()), this, this.options)) : a = t[i], a._$AI(o), i++;
    i < t.length && (this._$AR(a && a._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    for (this._$AP?.(!1, !0, t); e && e !== this._$AB; ) {
      const a = e.nextSibling;
      e.remove(), e = a;
    }
  }
  setConnected(e) {
    this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
  }
}
class Ie {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, a, i, o) {
    this.type = 1, this._$AH = _, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = o, a.length > 2 || a[0] !== "" || a[1] !== "" ? (this._$AH = Array(a.length - 1).fill(new String()), this.strings = a) : this._$AH = _;
  }
  _$AI(e, t = this, a, i) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) e = se(this, e, t, 0), n = !ve(e) || e !== this._$AH && e !== Z, n && (this._$AH = e);
    else {
      const s = e;
      let d, f;
      for (e = o[0], d = 0; d < o.length - 1; d++) f = se(this, s[a + d], t, d), f === Z && (f = this._$AH[d]), n ||= !ve(f) || f !== this._$AH[d], f === _ ? e = _ : e !== _ && (e += (f ?? "") + o[d + 1]), this._$AH[d] = f;
    }
    n && !i && this.j(e);
  }
  j(e) {
    e === _ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class xa extends Ie {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === _ ? void 0 : e;
  }
}
class ka extends Ie {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== _);
  }
}
class wa extends Ie {
  constructor(e, t, a, i, o) {
    super(e, t, a, i, o), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = se(this, e, t, 0) ?? _) === Z) return;
    const a = this._$AH, i = e === _ && a !== _ || e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive, o = e !== _ && (a === _ || i);
    i && this.element.removeEventListener(this.name, this, a), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ja {
  constructor(e, t, a) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = a;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    se(this, e);
  }
}
const za = rt.litHtmlPolyfillSupport;
za?.(me, ye), (rt.litHtmlVersions ??= []).push("3.3.0");
const _a = (r, e, t) => {
  const a = t?.renderBefore ?? e;
  let i = a._$litPart$;
  if (i === void 0) {
    const o = t?.renderBefore ?? null;
    a._$litPart$ = i = new ye(e.insertBefore(ge(), o), o, void 0, t ?? {});
  }
  return i._$AI(r), i;
};
const ot = globalThis;
let E = class extends re {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const e = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= e.firstChild, e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = _a(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Z;
  }
};
E._$litElement$ = !0, E.finalized = !0, ot.litElementHydrateSupport?.({ LitElement: E });
const Ea = ot.litElementPolyfillSupport;
Ea?.({ LitElement: E });
(ot.litElementVersions ??= []).push("4.2.0");
const Sa = A`@charset \"UTF-8\";html{font-family:sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}`, Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sa
}, Symbol.toStringTag, { value: "Module" })), $a = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}body{color:var(--text);font-family:var(--font-stack);font-size:100%;font-size-adjust:var(--font-adjust-body);line-height:1.375;-webkit-font-smoothing:antialiased}button,input,select,textarea{font-family:var(--font-stack);line-height:1.1875;font-size-adjust:var(--font-adjust-body)}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size:2.125em;font-size-adjust:var(--font-adjust-h1);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.4411764706em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7647058824em}@media only screen and (max-width:37.5em){p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}@media only screen and (max-width:37.5em){h1,.h1{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}h2,.h2{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.7307692308em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.1538461538em}@media only screen and (max-width:37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.3636363636em}}@media only screen and (max-width:37.5em){h2,.h2{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.3636363636em}}h3,.h3{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.3636363636em}@media only screen and (max-width:37.5em){h3,.h3{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.6666666667em}}h4,.h4{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:500;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.6666666667em}@media only screen and (max-width:37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size:.875em;font-size-adjust:var(--font-adjust-h5);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.0714285714em}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.1428571429em}h6,.h6{font-size:.75em;font-size-adjust:var(--font-adjust-h6);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.25em}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{margin-top:0;margin-bottom:15px;font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}@media only screen and (max-width:37.5em){.lead-paragraph{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}}.superheading{margin-bottom:.4166666667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);text-decoration-color:var(--link-underline);text-decoration-line:underline;text-decoration-thickness:1px;text-decoration-style:dotted;text-underline-offset:4.5px}a:visited,a.visited{text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline:thin dotted;outline-offset:1px}a:active,a.active{text-decoration-style:solid;text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none;list-style-image:none}caption{margin-bottom:.625em;text-align:left}th,td{padding:.625em}thead th,thead td{padding:.7142857143em;background:var(--table-head-bg);color:var(--table-head-text);font-size:1em;vertical-align:top}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{font-weight:600;text-align:left}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{margin:0;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit}blockquote{margin-right:.9375em;margin-left:.9375em}@media only screen and (min-width:37.5625em){blockquote{margin-right:1.875em;margin-left:1.875em}}img{max-width:100%}figure{margin-right:0;margin-left:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);border-radius:4px;color:var(--code-text);font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.2307692308em .2307692308em 0;font-size:.8125em}pre{display:block;padding:.625em .9375em;white-space:pre-wrap;overflow-wrap:break-word}pre code{padding:0;background-color:transparent}`, Xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $a
}, Symbol.toStringTag, { value: "Module" })), Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
function _e() {
  let r = getComputedStyle(document.body).fontSize;
  return r = r === "" ? -1 : r, parseFloat(r);
}
function Aa(r, e) {
  let t = r.min, a = r.max;
  _e() > 0 && _e() !== 16 && (t = t / 16 * _e(), a = a / 16 * _e());
  const o = t || 0, n = a || Number.POSITIVE_INFINITY;
  return o <= e && e <= n;
}
function La(r) {
  const e = {};
  r = r || window.innerWidth;
  let t;
  for (t in vt)
    e[t] = Aa(
      vt[t],
      r
    );
  return e;
}
const Bt = "mobile", Ca = "tablet", Ta = "desktop";
function Oa(r) {
  let e = !1;
  const t = La();
  return (r === Bt && t.bpXS || r === Ca && t.bpSM || r === Ta && (t.bpMED || t.bpLG || t.bpXL)) && (e = !0), e;
}
const G = "data-js-hook", nt = "behavior_", Ia = "state_";
function Y() {
  const r = {};
  function e(i, o) {
    return {}.hasOwnProperty.call(r, i) ? r[i].push(o) : r[i] = [o], this;
  }
  function t(i, o) {
    if (!{}.hasOwnProperty.call(r, i))
      return this;
    const n = r[i].indexOf(o);
    return n !== -1 && r[i].splice(n, 1), this;
  }
  function a(i, o) {
    if (!{}.hasOwnProperty.call(r, i))
      return this;
    o = o || {};
    const n = r[i];
    for (let s = 0, d = n.length; s < d; s++)
      n[s].call(this, o);
    return this;
  }
  return this.addEventListener = e, this.removeEventListener = t, this.dispatchEvent = a, this.getRegisteredEvents = () => r, this;
}
function Me(r, e) {
  if (!r)
    return !1;
  let t = r.getAttribute(G);
  return t ? (t = t.split(" "), t.indexOf(e) > -1) : !1;
}
function U(r, e) {
  if (Me(r, e)) return e;
  if (e.indexOf(" ") !== -1) {
    const a = G + " values cannot contain spaces!";
    throw new Error(a);
  }
  const t = r.getAttribute(G);
  return t !== null && (e = t + " " + e), r.setAttribute(G, e), e;
}
const We = Ia + "atomic_init";
function Ma(r, e) {
  if (!r || !r.classList) {
    const t = r + ' is not valid. Check that element is a DOM node with class "' + e + '"';
    throw new Error(t);
  }
  return r;
}
function qa(r, e) {
  const t = r.classList.contains(e) ? r : r.querySelector("." + e);
  if (!t) {
    const a = e + " not found on or in passed DOM node.";
    throw new Error(a);
  }
  return t;
}
function xe(r, e) {
  return Ma(r, e), qa(r, e);
}
function le(r) {
  return Me(r, We) ? !1 : (U(r, We), !0);
}
function ke(r, e, t, a = {}) {
  const o = (t || document).querySelectorAll(r), n = [];
  let s, d;
  for (let f = 0, c = o.length; f < c; f++)
    d = o[f], Me(d, We) === !1 && (s = new e(d), s.init(a), n.push(s));
  return n;
}
function Ut(r, e) {
  e = e || document;
  let t = [];
  try {
    t = e.querySelectorAll(r);
  } catch (a) {
    const i = `${r} not found in DOM! ${a}`;
    throw new Error(i, {
      cause: a
    });
  }
  return t.length === 0 && r.indexOf(nt) === -1 && (t = Na(r, e)), t;
}
function Jr(r, e, t, a) {
  let i = [];
  r instanceof NodeList ? i = r : r instanceof Node ? i = [r] : typeof r == "string" && (i = Ut(r, a));
  for (let o = 0, n = i.length; o < n; o++)
    i[o].addEventListener(e, t, !1);
  return i;
}
function $t(r, e) {
  let t;
  if (Me(r, e))
    return t = r, t;
  if (r) {
    const a = "[" + G + "=" + e + "]";
    t = r.querySelector(a);
  }
  if (!t) {
    const a = e + " behavior not found on passed DOM node!";
    throw new Error(a);
  }
  return t;
}
function Na(r, e) {
  return r = G + "*=" + nt + r, r = "[" + r + "]", Ut(r, e);
}
const we = Object.prototype.toString;
function Da(r) {
  return typeof r > "u";
}
function Qr(r) {
  return typeof r < "u";
}
function ei(r) {
  return r !== null && typeof r == "object";
}
function Pa(r) {
  return we.call(r) === "[object String]";
}
function ti(r) {
  return we.call(r) === "[object Number]";
}
function ai(r) {
  return we.call(r) === "[object Date]";
}
const ri = Array.isArray || function(e) {
  return we.call(e) === "[object Array]";
};
function ii(r) {
  return we.call(r) === "[object Function]";
}
function oi(r) {
  return Da(r) || r === null || Pa(r) && r.length <= 0 || /^\s*$/.test(r);
}
function Ha() {
  return !!new RegExp(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  ).test(navigator.userAgent);
}
function S(r, e, t) {
  const a = e;
  let i = r;
  if (!t) throw new Error("Child transition argument must be defined!");
  const o = t;
  let n, s, d, f = !1, c = !1, u = !1;
  if (typeof a.CSS_PROPERTY > "u" || typeof a.BASE_CLASS > "u")
    throw new Error(
      "Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition."
    );
  function p() {
    s && f ? (i.addEventListener(s, d), o.dispatchEvent(S.BEGIN_EVENT, {
      target: o,
      type: S.BEGIN_EVENT
    }), i.classList.add(S.ANIMATING_CLASS), c = !0) : (o.dispatchEvent(S.BEGIN_EVENT, {
      target: o,
      type: S.BEGIN_EVENT
    }), d());
  }
  function g() {
    i.removeEventListener(s, d);
  }
  function y(k) {
    return k && k.propertyName !== a.CSS_PROPERTY ? !1 : (g(), i.classList.remove(S.ANIMATING_CLASS), o.dispatchEvent(S.END_EVENT, {
      target: o,
      type: S.END_EVENT
    }), c = !1, !0);
  }
  function w() {
    let k;
    for (k in a)
      ({}).hasOwnProperty.call(a, k) && a[k] !== a.BASE_CLASS && i.classList.contains(a[k]) && i.classList.remove(a[k]);
  }
  function j() {
    c && (i.style.webkitTransitionDuration = "0", i.style.mozTransitionDuration = "0", i.style.oTransitionDuration = "0", i.style.transitionDuration = "0", i.removeEventListener(s, d), d(), i.style.webkitTransitionDuration = "", i.style.mozTransitionDuration = "", i.style.oTransitionDuration = "", i.style.transitionDuration = "");
  }
  function L() {
    j(), w(), i.classList.remove(a.BASE_CLASS);
  }
  function q() {
    i.classList.remove(S.NO_ANIMATION_CLASS), f = !0;
  }
  function R() {
    i.classList.add(S.NO_ANIMATION_CLASS), f = !1;
  }
  function N(k) {
    if (!k) {
      const ae = "Element does not have TransitionEnd event. It may be null!";
      throw new Error(ae);
    }
    let M;
    const D = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    let F;
    for (F in D)
      if ({}.hasOwnProperty.call(D, F) && typeof k.style[F] < "u") {
        M = D[F];
        break;
      }
    return M;
  }
  function m(k) {
    L(), q(), i = k, i.classList.add(a.BASE_CLASS), s = N(i);
  }
  function z(k) {
    if (f = !i.classList.contains(S.NO_ANIMATION_CLASS), d = y.bind(this), m(i), !k)
      throw new Error(
        "Transition needs to be passed an initial CSS class on initialization!"
      );
    return i.classList.add(k), this;
  }
  function C(k) {
    return u || (w(), u = !0), i.classList.contains(k) ? !1 : (g(), i.classList.remove(n), n = k, p(), i.classList.add(n), !0);
  }
  return this.animateOff = R, this.animateOn = q, this.applyClass = C, this.halt = j, this.init = z, this.isAnimated = () => f, this.remove = L, this.setElement = m, this;
}
S.BEGIN_EVENT = "transitionbegin";
S.END_EVENT = "transitionend";
S.NO_ANIMATION_CLASS = "u-no-animation";
S.ANIMATING_CLASS = "u-is-animating";
const fe = nt + "flyout-menu", Ba = "[" + G + "=" + fe;
function ce(r, e = !0) {
  const t = $t(r, fe), a = q(r), i = $t(r, fe + "_content");
  let o = 0;
  const n = 0, s = 1, d = 2, f = 3;
  let c, u, p;
  const g = ae.bind(this), y = F.bind(this);
  let w, j = !0, L = !1;
  function q(l) {
    const h = [], b = l.querySelectorAll(`${Ba}_trigger]`);
    let v, $, V;
    for (let H = b.length >>> 0; H--; ) {
      for (V = !1, v = b[H], $ = v.parentElement; $ !== l; )
        $.getAttribute(G) && $.getAttribute(G).split(" ").indexOf(fe) !== -1 ? (V = !0, $ = l) : $ = $.parentElement;
      V || h.unshift(b[H]);
    }
    return h;
  }
  function R(l = !1) {
    return o = l ? f : n, a.forEach((h) => {
      N("expanded", h, l), h.addEventListener("click", k.bind(this)), h.addEventListener("touchstart", m, {
        passive: !0
      }), h.addEventListener("mouseover", z.bind(this)), h.addEventListener("mouseout", C.bind(this));
    }), i.setAttribute("data-open", l ? "true" : "false"), e && !l && i.setAttribute("hidden", ""), ze(), this;
  }
  function N(l, h, b) {
    const v = String(b);
    return h.setAttribute("aria-" + l, v), v;
  }
  function m() {
    L = !0;
  }
  function z(l) {
    j || (L || this.dispatchEvent("triggerover", {
      target: this,
      trigger: l.target,
      type: "triggerover"
    }), L = !1);
  }
  function C(l) {
    j || this.dispatchEvent("triggerout", {
      target: this,
      trigger: l.target,
      type: "triggerout"
    });
  }
  function k(l) {
    if (!j)
      switch (this.dispatchEvent("triggerclick", {
        target: this,
        trigger: l.target,
        type: "triggerclick"
      }), l.preventDefault(), o) {
        case n:
        case s:
          this.expand();
          break;
        case d:
        case f:
          this.collapse();
          break;
      }
  }
  function M() {
    if (c?.halt(), o === d || o === f) return this;
    if (o = d, e && i.removeAttribute("hidden"), this.dispatchEvent("expandbegin", { target: this, type: "expandbegin" }), !u || !p)
      return y(), this;
    const l = c?.isAnimated();
    return l && c.addEventListener(S.END_EVENT, y), u(), l || y(), this;
  }
  function D() {
    if (c?.halt(), o === s || o === n) return this;
    for (let h = 0, b = a.length; h < b; h++)
      N("expanded", a[h], !1);
    if (i.setAttribute("data-open", "false"), o = s, this.dispatchEvent("collapsebegin", {
      target: this,
      type: "collapsebegin"
    }), !p || !u)
      return g(), this;
    const l = c?.isAnimated();
    return l && c.addEventListener(
      S.END_EVENT,
      g
    ), p(), l || g(), this;
  }
  function F() {
    o = f, i.setAttribute("data-open", "true"), c && c.removeEventListener(
      S.END_EVENT,
      y
    ), this.dispatchEvent("expandend", { target: this, type: "expandend" });
    for (let l = 0, h = a.length; l < h; l++)
      N("expanded", a[l], !0);
  }
  function ae() {
    o = n, e && i.setAttribute("hidden", ""), c && c.removeEventListener(
      S.END_EVENT,
      g
    ), this.dispatchEvent("collapseend", { target: this, type: "collapseend" });
  }
  function je(l, h, b) {
    c = l, h && h !== p && (p = h), b && b !== u && (u = b);
  }
  function He() {
    c && c.remove(), c = void 0, u = void 0, p = void 0;
  }
  function Be() {
    return {
      container: t,
      content: i,
      trigger: a
    };
  }
  function ze() {
    return j && (j = !1), !j;
  }
  function Ue() {
    return j || (j = !0), j;
  }
  function Re(l) {
    return w = l, this;
  }
  const J = new Y();
  return this.addEventListener = J.addEventListener, this.removeEventListener = J.removeEventListener, this.dispatchEvent = J.dispatchEvent, this.init = R, this.expand = M, this.collapse = D, this.setTransition = je, this.clearTransition = He, this.getData = () => w, this.getTransition = () => c, this.getDom = Be, this.isAnimating = () => o === d || o === s, this.isExpanded = () => o === f, this.resume = ze, this.setData = Re, this.suspend = Ue, ce.BASE_CLASS = fe, this;
}
const $e = {
  CSS_PROPERTY: "opacity",
  BASE_CLASS: "u-alpha-transition",
  ALPHA_100: "u-alpha-100",
  ALPHA_0: "u-alpha-0"
};
function Ua(r) {
  const e = new Y(), t = new S(r, $e, this);
  function a(n) {
    return t.init(n), this;
  }
  function i() {
    return t.applyClass($e.ALPHA_100), this;
  }
  function o() {
    return t.applyClass($e.ALPHA_0), this;
  }
  return this.addEventListener = e.addEventListener, this.dispatchEvent = e.dispatchEvent, this.removeEventListener = e.removeEventListener, this.animateOff = t.animateOff, this.animateOn = t.animateOn, this.halt = t.halt, this.isAnimated = t.isAnimated, this.remove = t.remove, this.setElement = t.setElement, this.fadeIn = i, this.fadeOut = o, this.init = a, this;
}
Ua.CLASSES = $e;
const At = "transitiondir", ie = {
  CSS_PROPERTY: "max-height",
  BASE_CLASS: "u-max-height-transition",
  MH_DEFAULT: "u-max-height-default",
  MH_SUMMARY: "u-max-height-summary",
  MH_DYNAMIC: "u-max-height-dynamic",
  MH_ZERO: "u-max-height-zero"
};
function I(r) {
  const e = this, t = new Y(), a = new S(r, ie, this);
  let i = 0;
  function o() {
    const w = r.scrollHeight + "px";
    r.style.maxHeight = w, r.style.bottom = "auto", r.style.top = "auto";
  }
  function n() {
    const y = r.getBoundingClientRect(), w = window.innerHeight - y.top, j = y.top, L = w <= 140 ? "up" : "down";
    return {
      rect: y,
      distanceToBottom: w,
      distanceToTop: j,
      dir: L
    };
  }
  function s() {
    window.removeEventListener("load", s), o();
  }
  function d(y) {
    return a.init(y), window.addEventListener("load", s), window.addEventListener("resize", () => {
      o();
    }), this;
  }
  function f() {
    return o(), a.applyClass(ie.MH_DEFAULT), (!i || r.scrollHeight > i) && (i = r.scrollHeight), this;
  }
  function c() {
    return o(), a.applyClass(ie.MH_SUMMARY), i = r.scrollHeight, this;
  }
  function u() {
    o(), r.style.top = "100%";
    const y = n();
    let w = 30;
    const j = 2;
    let L = r.scrollHeight + w < y.distanceToBottom ? `${r.scrollHeight + j}px` : `${y.distanceToBottom - w}px`;
    if (y.dir === "up") {
      const q = r.parentElement.offsetHeight;
      w += q, r.style.bottom = `${q - j}px`, L = r.scrollHeight + w < y.distanceToTop ? `${r.scrollHeight + j}px` : `${y.distanceToTop - w}px`, r.style.top = "unset";
    }
    return r.style.maxHeight = L, a.applyClass(ie.MH_DYNAMIC), e.dispatchEvent(At, {
      target: e,
      type: At,
      dir: y.dir
    }), i = r.scrollHeight, this;
  }
  function p() {
    return a.applyClass(ie.MH_ZERO), i = r.scrollHeight, this;
  }
  function g() {
    return r.style.maxHeight = "", a.remove();
  }
  return this.addEventListener = t.addEventListener, this.dispatchEvent = t.dispatchEvent, this.removeEventListener = t.removeEventListener, this.animateOff = a.animateOff, this.animateOn = a.animateOn, this.halt = a.halt, this.isAnimated = a.isAnimated, this.setElement = a.setElement, this.refresh = o, this.remove = g, this.init = d, this.maxHeightDefault = f, this.maxHeightSummary = c, this.maxHeightZero = p, this.maxHeightDynamic = u, this;
}
I.CLASSES = ie;
const K = {
  CSS_PROPERTY: "transform",
  BASE_CLASS: "u-move-transition",
  MOVE_TO_ORIGIN: "u-move-to-origin",
  MOVE_LEFT: "u-move-left",
  MOVE_LEFT_2X: "u-move-left-2x",
  MOVE_LEFT_3X: "u-move-left-3x",
  MOVE_RIGHT: "u-move-right",
  MOVE_UP: "u-move-up"
};
function Ra(r) {
  const e = new Y(), t = new S(r, K, this);
  function a(d) {
    return t.init(d), this;
  }
  function i() {
    return t.applyClass(K.MOVE_TO_ORIGIN), this;
  }
  function o(d) {
    d = d || 1;
    const f = [
      K.MOVE_LEFT,
      K.MOVE_LEFT_2X,
      K.MOVE_LEFT_3X
    ];
    return t.applyClass(f[d - 1]), this;
  }
  function n() {
    return t.applyClass(K.MOVE_RIGHT), this;
  }
  function s() {
    return t.applyClass(K.MOVE_UP), this;
  }
  return this.addEventListener = e.addEventListener, this.dispatchEvent = e.dispatchEvent, this.removeEventListener = e.removeEventListener, this.animateOff = t.animateOff, this.animateOn = t.animateOn, this.halt = t.halt, this.isAnimated = t.isAnimated, this.setElement = t.setElement, this.remove = t.remove, this.init = a, this.moveLeft = () => o(1), this.moveLeft2 = () => o(2), this.moveLeft3 = () => o(3), this.moveRight = n, this.moveToOrigin = i, this.moveUp = s, this;
}
Ra.CLASSES = K;
const ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), oe = "o-expandable";
function de(r) {
  const e = xe(r, oe);
  let t, a, i, o, n;
  function s() {
    if (!le(e))
      return this;
    t = e.querySelector(`.${oe}__header`), a = e.querySelector(`.${oe}__content`), i = e.querySelector(`.${oe}__label`);
    const c = e.classList.contains(`${oe}--onload-open`);
    U(e, "behavior_flyout-menu"), U(t, "behavior_flyout-menu_trigger"), U(a, "behavior_flyout-menu_content");
    const u = c ? I.CLASSES.MH_DEFAULT : I.CLASSES.MH_ZERO;
    return o = new I(a).init(u), c || a.classList.add("u-hidden"), n = new ce(e), n.setTransition(
      o,
      o.maxHeightZero,
      o.maxHeightDefault
    ), n.init(c), n.addEventListener("expandbegin", () => {
      a.classList.remove("u-hidden"), this.dispatchEvent("expandbegin", { target: this });
    }), n.addEventListener("collapseend", () => {
      a.classList.add("u-hidden");
    }), this;
  }
  function d() {
    return i.textContent.trim();
  }
  this.init = s, this.expand = () => n.expand(), this.collapse = () => n.collapse(), this.isExpanded = () => n.isExpanded(), this.refresh = () => n.getTransition().refresh(), this.getLabelText = d;
  const f = new Y();
  return this.addEventListener = f.addEventListener, this.removeEventListener = f.removeEventListener, this.dispatchEvent = f.dispatchEvent, this;
}
de.BASE_CLASS = oe;
de.init = (r) => ke(`.${de.BASE_CLASS}`, de, r);
const di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Le = "o-expandable-group";
function Ze(r) {
  const e = xe(r, Le), t = e.classList.contains(`${Le}--accordion`);
  let a, i;
  function o(s) {
    const d = s.target;
    i && i !== d && i.collapse(), i = d;
  }
  function n(s) {
    return le(e) ? (t && (a = s, a.forEach((d) => {
      d.addEventListener("expandbegin", o);
    })), this) : this;
  }
  return this.init = n, this;
}
Ze.BASE_CLASS = Le;
Ze.init = (r) => {
  (r || document).querySelectorAll(`.${Le}`).forEach((a) => {
    const i = ke(
      `.${de.BASE_CLASS}`,
      de,
      a
    );
    new Ze(a).init(i);
  });
};
const si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ne = "o-summary";
function Ye(r) {
  const e = xe(r, ne), t = e.classList.contains(`${ne}--mobile`), a = e.querySelector(`.${ne}__content`), i = e.querySelector(`.${ne}__btn`);
  let o, n, s;
  function d() {
    return le(e) ? (window.addEventListener("load", f), this) : this;
  }
  function f() {
    window.removeEventListener("load", f), s = !g(), U(e, "behavior_flyout-menu"), U(a, "behavior_flyout-menu_content"), U(i, "behavior_flyout-menu_trigger"), n = new ce(e, !1), o = new I(a), o.init(
      s ? I.CLASSES.MH_SUMMARY : I.CLASSES.MH_DEFAULT
    ), n.setTransition(
      o,
      o.maxHeightSummary,
      o.maxHeightDefault
    ), n.addEventListener("triggerclick", y), n.init(), p(), window.addEventListener("resize", p), "onorientationchange" in window && window.addEventListener("orientationchange", p), e.addEventListener("focusin", c), a.addEventListener("click", u);
  }
  function c(m) {
    !s && m.target !== i && (i.click(), e.removeEventListener("focusin", c));
  }
  function u(m) {
    m.target.tagName !== "A" && n.isExpanded() && o.refresh();
  }
  function p() {
    g() ? R() : q();
  }
  function g() {
    return t && !Oa(Bt) || a.scrollHeight <= 88;
  }
  function y() {
    n.addEventListener("expandend", w);
  }
  function w() {
    L(), window.removeEventListener("resize", p), window.removeEventListener("orientationchange", p), n.removeEventListener("expandend", w), n.suspend(), o.remove();
  }
  function j() {
    i.classList.remove("u-hidden");
  }
  function L() {
    i.classList.add("u-hidden");
  }
  function q() {
    return s && (n.collapse(), o.animateOn(), j(), s = !1), !s;
  }
  function R() {
    return s || (o.animateOff(), n.expand(), L(), s = !0), s;
  }
  const N = new Y();
  return this.addEventListener = N.addEventListener, this.removeEventListener = N.removeEventListener, this.dispatchEvent = N.dispatchEvent, this.init = d, this;
}
Ye.BASE_CLASS = ne;
Ye.init = (r) => ke(`.${ne}`, Ye, r);
const be = "o-summary-minimal";
function Je(r) {
  const e = xe(r, be), t = e.querySelector(`.${be}__content`), a = e.querySelector(`.${be}__btn`);
  let i, o;
  function n() {
    return le(e) ? (U(e, "behavior_flyout-menu"), U(t, "behavior_flyout-menu_content"), U(a, "behavior_flyout-menu_trigger"), window.addEventListener("load", s), this) : this;
  }
  function s() {
    window.removeEventListener("load", s), o = new ce(e, !1), i = new I(t), i.init(I.CLASSES.MH_SUMMARY), o.setTransition(
      i,
      i.maxHeightSummary,
      i.maxHeightDefault
    ), o.init(), e.addEventListener("focusin", d), t.addEventListener("click", f), o.collapse(), i.animateOn();
  }
  function d(u) {
    u.target !== a && (a.click(), e.removeEventListener("focusin", d));
  }
  function f(u) {
    u.target.tagName !== "A" && o.isExpanded() && i.refresh();
  }
  const c = new Y();
  return this.addEventListener = c.addEventListener, this.removeEventListener = c.removeEventListener, this.dispatchEvent = c.dispatchEvent, this.init = n, this;
}
Je.BASE_CLASS = be;
Je.init = (r) => ke(`.${be}`, Je, r);
const li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), hi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), bi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), pi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), gi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Rt = 5;
function Fa(r) {
  return r.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Va(r, e) {
  return RegExp(Fa(e.trim()), "i").test(r);
}
function Ga(r, e, t) {
  const a = r, i = e, o = t?.maxSelections || Rt;
  let n = [], s = [], d = [], f = [], c = -1;
  function u(m) {
    return i + "-" + m.value.trim().replace(/\s+/g, "-").toLowerCase();
  }
  function p() {
    return s.length >= o;
  }
  function g(m) {
    let z;
    const C = [];
    let k;
    for (let M = 0, D = m.length; M < D; M++)
      z = m[M], k = p() ? !1 : z.defaultSelected, C.push({
        id: u(z),
        value: z.value,
        text: z.text,
        checked: k
      }), k && s.push(M);
    return C;
  }
  function y() {
    return n = g(a), this;
  }
  function w(m) {
    return n[m].checked = !n[m].checked, s.length < o && n[m].checked ? (s.push(m), s.sort(), !0) : (n[m].checked = !1, s = s.filter(function(z) {
      return z !== m;
    }), !1);
  }
  function j(m, z, C, k) {
    return Va(z.text, k) && m.push(C), m;
  }
  function L(m) {
    return Object.prototype.toString.call(m) !== "[object String]" && (m = ""), f = d, n.length > 0 && (d = n.reduce(function(z, C, k) {
      return j(z, C, k, m);
    }, [])), c = -1, d;
  }
  function q(m) {
    return n[m];
  }
  function R(m) {
    const z = d.length, C = z === 0 ? n.length : z;
    m < 0 ? c = -1 : m >= C ? c = C - 1 : c = m;
  }
  function N() {
    return c;
  }
  return this.init = y, this.toggleOption = w, this.getSelectedIndices = function() {
    return s;
  }, this.isAtMaxSelections = p, this.filterIndices = L, this.clearFilter = function() {
    d = f = [];
  }, this.getFilterIndices = function() {
    return d;
  }, this.getLastFilterIndices = function() {
    return f;
  }, this.getIndex = N, this.setIndex = R, this.resetIndex = function() {
    return c = -1, c;
  }, this.getOption = q, this;
}
function B(r, e, t) {
  const a = document.createElement(r);
  return Object.keys(t).forEach((i) => {
    const o = t[i];
    i in a ? a[i] = o : a.setAttribute(i, o);
  }), e && e.appendChild(a), a;
}
const dt = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--error" viewBox="0 0 12 19"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>', Xa = dt, P = "o-multiselect", Ka = "a-checkbox", Wa = "a-text-input", Lt = "prev", Ee = "next", Ve = "Enter", Za = " ", Ct = "Escape", Ya = "ArrowUp", Tt = "ArrowDown", Ot = "Tab", It = {
  // TODO: renderTags was added as a workaround for DS icons not rendering correctly when integrating with a React implementation.
  renderTags: !0,
  // Allow the Multiselect to generate the Tag elements in the DOM
  maxSelections: Rt
  // Maximum number of options a user can select
};
function Qe(r) {
  r.classList.add(P);
  let e = xe(r, P), t = !1, a, i, o, n, s, d, f, c, u, p, g;
  const y = [];
  let w;
  function j() {
    g.classList.remove("u-no-results"), g.classList.add("u-filtered");
    let l = o.getLastFilterIndices();
    for (let h = 0, b = l.length; h < b; h++)
      y[l[h]].classList.remove("u-filter-match");
    l = o.getFilterIndices();
    for (let h = 0, b = l.length; h < b; h++)
      y[l[h]].classList.add("u-filter-match");
  }
  function L() {
    g.classList.remove("u-filtered", "u-no-results");
    for (let l = 0, h = g.children.length; l < h; l++)
      g.children[l].classList.remove("u-filter-match");
    o.clearFilter();
  }
  function q() {
    g.classList.add("u-no-results"), g.classList.remove("u-filtered");
  }
  function R(l) {
    return l.length > 0 ? (j(), !0) : (q(), !1);
  }
  function N(l) {
    L(), o.resetIndex();
    const h = o.filterIndices(l);
    R(h);
  }
  function m() {
    return d.classList.add("u-active"), p.classList.remove("u-invisible"), p.setAttribute("aria-hidden", !1), w.dispatchEvent("expandbegin", { target: w }), w;
  }
  function z() {
    return d.classList.remove("u-active"), p.classList.add("u-invisible"), p.setAttribute("aria-hidden", !0), o.resetIndex(), w.dispatchEvent("collapsebegin", { target: w }), w;
  }
  function C(l) {
    l === Ee ? o.setIndex(o.getIndex() + 1) : l === Lt && o.setIndex(o.getIndex() - 1);
    const h = o.getIndex();
    if (h > -1) {
      let b = h;
      const v = o.getFilterIndices();
      v.length > 0 && (b = v[h]);
      const V = o.getOption(b).value, ia = g.querySelector('[data-option="' + V + '"]').querySelector("input");
      t = !0, ia.focus();
    } else
      t = !1, u.focus();
  }
  function k() {
    u.value = "", L();
  }
  function M(l) {
    const h = l.target;
    h.tagName === "BUTTON" && (l.preventDefault(), h.removeEventListener("click", M), h.querySelector("label").click());
  }
  function D(l) {
    if (l.key === Za || l.key === Ve) {
      const h = l.target.querySelector("label");
      g.querySelector(
        "#" + h.getAttribute("for")
      ).click();
    }
  }
  function F(l) {
    return a + "-" + l.value.trim().replace(/[^\w]/g, "-").toLowerCase();
  }
  function ae(l, h) {
    const b = F(h), v = B("li", null, {
      "data-option": h.value
    }), $ = B("button", v, {
      type: "button",
      class: "a-tag-filter",
      innerHTML: "<label for=" + b + ">" + h.text + Xa + "</label>"
    });
    l.appendChild(v), $.addEventListener("click", M), $.addEventListener(
      "keydown",
      D
    );
  }
  function je(l) {
    const h = o.getOption(l) || o.getOption(o.getIndex());
    if (h) {
      if (h.checked) {
        g.classList.contains("u-max-selections") && g.classList.remove("u-max-selections");
        const b = '[data-option="' + h.value + '"]', v = f.querySelector(b);
        typeof v < "u" && v && f?.removeChild(v);
      } else s?.renderTags && f && ae(f, h);
      o.toggleOption(l), o.isAtMaxSelections() && g.classList.add("u-max-selections"), w.dispatchEvent("selectionsupdated", { target: w });
    }
    o.resetIndex(), t = !1, p.getAttribute("aria-hidden") === "false" && u.focus();
  }
  function He(l) {
    je(Number(l.target.getAttribute("data-index"))), k();
  }
  function Be() {
    c.addEventListener("mousemove", function(b) {
      const v = b.target;
      b.offsetX > v.offsetWidth - 35 ? v.style.cursor = "pointer" : v.style.cursor = "auto";
    }), c.addEventListener("mouseup", function(b) {
      const v = b.target;
      b.offsetX > v.offsetWidth - 35 && p.offsetHeight === 140 && u.blur();
    }), u.addEventListener("input", function() {
      N(this.value);
    }), u.addEventListener("focus", function() {
      p.getAttribute("aria-hidden") === "true" && m();
    }), u.addEventListener("blur", function() {
      !t && p.getAttribute("aria-hidden") === "false" && z();
    }), u.addEventListener("keydown", function(b) {
      const v = b.key;
      p.getAttribute("aria-hidden") === "true" && v !== Ot && m(), v === Ve ? (b.preventDefault(), C(Ee)) : v === Ct ? (k(), z()) : v === Tt ? C(Ee) : v === Ot && !b.shiftKey && p.getAttribute("aria-hidden") === "false" && z();
    }), g.addEventListener("mousedown", function() {
      t = !0;
    }), g.addEventListener("keydown", function(b) {
      const v = b.key, $ = b.target, V = $.checked;
      if (v === Ve) {
        b.preventDefault(), $.checked = !V;
        const H = new Event("change", { bubbles: !1, cancelable: !0 });
        $.dispatchEvent(H);
      } else v === Ct ? (u.focus(), z()) : v === Ya ? C(Lt) : v === Tt && C(Ee);
    }), p.addEventListener("mousedown", function(b) {
      b.target.tagName === "LABEL" && (t = !0);
    });
    const l = g.querySelectorAll("input");
    for (let b = 0, v = l.length; b < v; b++)
      l[b].addEventListener("change", He);
    const h = f.querySelectorAll("button");
    for (let b = 0, v = h.length; b < v; b++)
      h[b].addEventListener("click", M), h[b].addEventListener("keydown", D);
  }
  function ze() {
    d = document.createElement("div"), d.className = P, f = B("ul", null, {
      className: "m-tag-group"
    }), c = B("header", d, {
      className: P + "__header"
    }), u = B("input", c, {
      className: P + "__search " + Wa,
      type: "text",
      placeholder: i || "Select up to five",
      id: e.id,
      autocomplete: "off"
    }), p = B("fieldset", d, {
      className: P + "__fieldset u-invisible",
      "aria-hidden": "true"
    });
    let l = P + "__options";
    o.isAtMaxSelections() && (l += " u-max-selections"), g = B("ul", p, {
      className: l
    });
    let h, b, v;
    for (let $ = 0, V = n.length; $ < V; $++) {
      h = n[$], b = F(h), v = o.getOption($).checked;
      const H = B("li", g, {
        "data-option": h.value,
        "data-cy": "multiselect-option",
        class: "m-form-field m-form-field--checkbox"
      });
      B("input", H, {
        id: b,
        // Type must come before value or IE fails
        type: "checkbox",
        value: h.value,
        name: a,
        class: Ka + " " + P + "__checkbox",
        checked: v,
        "data-index": $
      }), B("label", H, {
        for: b,
        textContent: h.text,
        className: P + "__label a-label"
      }), y.push(H), v && s?.renderTags && ae(f, h);
    }
    return d.insertBefore(f, c), e.parentNode.insertBefore(d, e), d.appendChild(e), d;
  }
  function Ue(l = It) {
    if (!le(e))
      return this;
    if (Ha())
      return this;
    if (w = this, a = e.name || e.id, i = e.getAttribute("data-placeholder"), n = e.options || [], s = { ...It, ...l }, n.length > 0) {
      o = new Ga(n, a, s).init();
      const h = ze();
      e.parentNode.removeChild(e), e = h, le(e), Be();
    }
    return this;
  }
  function Re() {
    return o;
  }
  this.init = Ue, this.expand = m, this.collapse = z;
  const J = new Y();
  return this.addEventListener = J.addEventListener, this.removeEventListener = J.removeEventListener, this.dispatchEvent = J.dispatchEvent, this.getModel = Re, this.updateSelections = je, this.selectionClickHandler = M, this.selectionKeyDownHandler = D, this;
}
Qe.BASE_CLASS = P;
Qe.init = (r) => ke(`.${P}`, Qe, void 0, r);
const mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ki = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), wi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), zi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), _i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), $i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Ai = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Li = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Ci = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Ti = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Oi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Ii = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Mi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Ni = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const st = { ATTRIBUTE: 1, CHILD: 2 }, qe = (r) => (...e) => ({ _$litDirective$: r, values: e });
class lt {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, a) {
    this._$Ct = e, this._$AM = t, this._$Ci = a;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
const Ft = qe(class extends lt {
  constructor(r) {
    if (super(r), r.type !== st.ATTRIBUTE || r.name !== "class" || r.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return " " + Object.keys(r).filter(((e) => r[e])).join(" ") + " ";
  }
  update(r, [e]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), r.strings !== void 0 && (this.nt = new Set(r.strings.join(" ").split(/\s/).filter(((a) => a !== ""))));
      for (const a in e) e[a] && !this.nt?.has(a) && this.st.add(a);
      return this.render(e);
    }
    const t = r.element.classList;
    for (const a of this.st) a in e || (t.remove(a), this.st.delete(a));
    for (const a in e) {
      const i = !!e[a];
      i === this.st.has(a) || this.nt?.has(a) || (i ? (t.add(a), this.st.add(a)) : (t.remove(a), this.st.delete(a)));
    }
    return Z;
  }
});
const Ja = (r) => r.strings === void 0;
const pe = (r, e) => {
  const t = r._$AN;
  if (t === void 0) return !1;
  for (const a of t) a._$AO?.(e, !1), pe(a, e);
  return !0;
}, Ce = (r) => {
  let e, t;
  do {
    if ((e = r._$AM) === void 0) break;
    t = e._$AN, t.delete(r), r = e;
  } while (t?.size === 0);
}, Vt = (r) => {
  for (let e; e = r._$AM; r = e) {
    let t = e._$AN;
    if (t === void 0) e._$AN = t = /* @__PURE__ */ new Set();
    else if (t.has(r)) break;
    t.add(r), tr(e);
  }
};
function Qa(r) {
  this._$AN !== void 0 ? (Ce(this), this._$AM = r, Vt(this)) : this._$AM = r;
}
function er(r, e = !1, t = 0) {
  const a = this._$AH, i = this._$AN;
  if (i !== void 0 && i.size !== 0) if (e) if (Array.isArray(a)) for (let o = t; o < a.length; o++) pe(a[o], !1), Ce(a[o]);
  else a != null && (pe(a, !1), Ce(a));
  else pe(this, r);
}
const tr = (r) => {
  r.type == st.CHILD && (r._$AP ??= er, r._$AQ ??= Qa);
};
class ar extends lt {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(e, t, a) {
    super._$AT(e, t, a), Vt(this), this.isConnected = e._$AU;
  }
  _$AO(e, t = !0) {
    e !== this.isConnected && (this.isConnected = e, e ? this.reconnected?.() : this.disconnected?.()), t && (pe(this, e), Ce(this));
  }
  setValue(e) {
    if (Ja(this._$Ct)) this._$Ct._$AI(e, this);
    else {
      const t = [...this._$Ct._$AH];
      t[this._$Ci] = e, this._$Ct._$AI(t, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
const T = () => new rr();
class rr {
}
const Ge = /* @__PURE__ */ new WeakMap(), O = qe(class extends ar {
  render(r) {
    return _;
  }
  update(r, [e]) {
    const t = e !== this.G;
    return t && this.G !== void 0 && this.rt(void 0), (t || this.lt !== this.ct) && (this.G = e, this.ht = r.options?.host, this.rt(this.ct = r.element)), _;
  }
  rt(r) {
    if (this.isConnected || (r = void 0), typeof this.G == "function") {
      const e = this.ht ?? globalThis;
      let t = Ge.get(e);
      t === void 0 && (t = /* @__PURE__ */ new WeakMap(), Ge.set(e, t)), t.get(this.G) !== void 0 && this.G.call(this.ht, void 0), t.set(this.G, r), r !== void 0 && this.G.call(this.ht, r);
    } else this.G.value = r;
  }
  get lt() {
    return typeof this.G == "function" ? Ge.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
}), ir = A`@charset \"UTF-8\";html{font-family:sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}body{color:var(--text);font-family:var(--font-stack);font-size:100%;font-size-adjust:var(--font-adjust-body);line-height:1.375;-webkit-font-smoothing:antialiased}button,input,select,textarea{font-family:var(--font-stack);line-height:1.1875;font-size-adjust:var(--font-adjust-body)}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size:2.125em;font-size-adjust:var(--font-adjust-h1);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.4411764706em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7647058824em}@media only screen and (max-width:37.5em){p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}@media only screen and (max-width:37.5em){h1,.h1{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}h2,.h2{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.7307692308em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.1538461538em}@media only screen and (max-width:37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.3636363636em}}@media only screen and (max-width:37.5em){h2,.h2{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.3636363636em}}h3,.h3{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.3636363636em}@media only screen and (max-width:37.5em){h3,.h3{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.6666666667em}}h4,.h4{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:500;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.6666666667em}@media only screen and (max-width:37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size:.875em;font-size-adjust:var(--font-adjust-h5);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.0714285714em}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.1428571429em}h6,.h6{font-size:.75em;font-size-adjust:var(--font-adjust-h6);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.25em}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{margin-top:0;margin-bottom:15px;font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}@media only screen and (max-width:37.5em){.lead-paragraph{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}}.superheading{margin-bottom:.4166666667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);text-decoration-color:var(--link-underline);text-decoration-line:underline;text-decoration-thickness:1px;text-decoration-style:dotted;text-underline-offset:4.5px}a:visited,a.visited{text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline:thin dotted;outline-offset:1px}a:active,a.active{text-decoration-style:solid;text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none;list-style-image:none}caption{margin-bottom:.625em;text-align:left}th,td{padding:.625em}thead th,thead td{padding:.7142857143em;background:var(--table-head-bg);color:var(--table-head-text);font-size:1em;vertical-align:top}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{font-weight:600;text-align:left}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{margin:0;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit}blockquote{margin-right:.9375em;margin-left:.9375em}@media only screen and (min-width:37.5625em){blockquote{margin-right:1.875em;margin-left:1.875em}}img{max-width:100%}figure{margin-right:0;margin-left:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);border-radius:4px;color:var(--code-text);font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.2307692308em .2307692308em 0;font-size:.8125em}pre{display:block;padding:.625em .9375em;white-space:pre-wrap;overflow-wrap:break-word}pre code{padding:0;background-color:transparent}:root{--btn-text: var(--white);--btn-bg: var(--pacific);--btn-bg-hover: var(--pacific-dark);--btn-bg-active: var(--navy);--btn-divider: var(--pacific-60);--btn-secondary-text: var(--pacific);--btn-secondary-text-hover: var(--pacific-dark);--btn-secondary-text-active: var(--navy);--btn-secondary-bg: var(--white);--btn-secondary-bg-hover: var(--pacific-10);--btn-secondary-bg-active: var(--pacific-20);--btn-secondary-border: var(--pacific);--btn-secondary-border-hover: var(--pacific-dark);--btn-secondary-border-active: var(--navy);--btn-secondary-divider: var(--pacific-60);--btn-warning-text: var(--white);--btn-warning-bg: var(--red-mid-dark);--btn-warning-bg-hover: var(--red-dark);--btn-warning-bg-active: var(--gray-dark);--btn-warning-divider: var(--red-60);--btn-disabled-text: var(--gray-dark);--btn-disabled-bg: var(--gray-20);--btn-disabled-outline: var(--gray-20);--btn-disabled-divider: var(--gray-60)}:host{--icon-text-divider-default: var(--pacific-60);--icon-text-divider-disabled: var(--gray-60);--icon-text-divider: var(--icon-text-divider-default)}:host .wrapper{display:-moz-box;display:flex;width:-moz-fit-content;width:fit-content;-moz-box-align:center;align-items:center;gap:.625rem}:host .left-divider:before,:host .right-divider:after{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host slot{display:contents}.left-divider ::slotted(svg:first-of-type){-moz-box-ordinal-group:0;order:-1}.right-divider ::slotted(svg:last-of-type){-moz-box-ordinal-group:2;order:1}:host([disabled]){--icon-text-divider: var(--icon-text-divider-disabled) !important}:host([icon-hidden]) ::slotted(svg){display:none!important}:host button.a-btn::-moz-focus-inner,:host input.a-btn::-moz-focus-inner{border:0}:host .a-btn{line-height:1.1875;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-moz-box;display:flex;gap:.625rem;-moz-box-sizing:border-box;box-sizing:border-box;padding:.5em .875em;border:0;margin:0;border-radius:.25em;cursor:pointer;font-size:1em;font-weight:500;text-align:center;text-decoration:none;-moz-transition:background-color .1s;transition:background-color .1s;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;-moz-box-pack:center;justify-content:center;-moz-box-align:center;align-items:center}:host .a-btn,:host .a-btn:link,:host .a-btn:visited{background-color:var(--btn-bg);color:var(--btn-text)}:host .a-btn:hover,:host .a-btn.hover,:host .a-btn:focus,:host .a-btn.focus{background-color:var(--btn-bg-hover);color:var(--btn-text)}:host .a-btn:focus,:host .a-btn.focus{outline:1px dotted var(--btn-bg);outline-offset:1px}:host .a-btn:active,:host .a-btn.active{background-color:var(--btn-bg-active)}:host .a-btn--secondary,:host .a-btn--secondary:link,:host .a-btn--secondary:visited{background-color:var(--btn-secondary-bg);color:var(--btn-secondary-text);box-shadow:0 0 0 1px var(--btn-secondary-border) inset}:host .a-btn--secondary:hover,:host .a-btn--secondary.hover,:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{background-color:var(--btn-secondary-bg-hover);color:var(--btn-secondary-text-hover);box-shadow:0 0 0 1px var(--btn-secondary-border-hover) inset}:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{outline-color:var(--btn-secondary-border)}:host .a-btn--secondary:active,:host .a-btn--secondary.active{background-color:var(--btn-secondary-bg-active);color:var(--btn-secondary-text-active);box-shadow:0 0 0 1px var(--btn-secondary-border-active) inset}:host .a-btn--warning,:host .a-btn--warning:link,:host .a-btn--warning:visited{background-color:var(--btn-warning-bg);color:var(--btn-warning-text)}:host .a-btn--warning:hover,:host .a-btn--warning.hover,:host .a-btn--warning:focus,:host .a-btn--warning.focus{background-color:var(--btn-warning-bg-hover)}:host .a-btn--warning:focus,:host .a-btn--warning.focus{outline-color:var(--btn-warning-bg)}:host .a-btn--warning:active,:host .a-btn--warning.active{background-color:var(--btn-warning-bg-active)}:host .a-btn--disabled,:host .a-btn--disabled:link,:host .a-btn--disabled:visited,:host .a-btn--disabled:hover,:host .a-btn--disabled.hover,:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn--disabled:active,:host .a-btn--disabled.active,:host .a-btn[disabled],:host .a-btn[disabled]:link,:host .a-btn[disabled]:visited,:host .a-btn[disabled]:hover,:host .a-btn[disabled].hover,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[disabled]:active,:host .a-btn[disabled].active,:host .a-btn[aria-disabled=true],:host .a-btn[aria-disabled=true]:link,:host .a-btn[aria-disabled=true]:visited,:host .a-btn[aria-disabled=true]:hover,:host .a-btn[aria-disabled=true].hover,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus,:host .a-btn[aria-disabled=true]:active,:host .a-btn[aria-disabled=true].active{background-color:var(--btn-disabled-bg);color:var(--btn-disabled-text);box-shadow:none;cursor:not-allowed}:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus{outline-color:var(--btn-disabled-outline)}@media only screen and (max-width:37.5em){:host .a-btn--full-on-xs{width:100%}}:host .a-btn:has(svg+span) span{-moz-box-ordinal-group:4;order:3}:host .a-btn:has(span+svg) svg{-moz-box-ordinal-group:4;order:3;-moz-box-flex:0;flex:none}:host .a-btn:not(.a-btn--hide-icon):has(svg+span):before,:host .a-btn:not(.a-btn--hide-icon):has(span+svg):before{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host .a-btn--secondary:has(svg):before{border-color:var(--btn-secondary-divider)!important}:host .a-btn--warning:has(svg):before{border-color:var(--btn-warning-divider)!important}:host .a-btn--disabled:has(svg):before,:host .a-btn[disabled]:has(svg):before,:host .a-btn[aria-disabled=true]:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn--hide-icon svg{display:none}:host .a-btn--link{box-shadow:none;background-color:transparent;padding:1.5px 0;border-radius:0;text-decoration-line:underline;text-decoration-thickness:1px;text-decoration-style:dotted;text-underline-offset:4.5px}:host .a-btn--link:has(svg){gap:.3125rem}:host .a-btn--link:has(svg):before{display:none}:host .a-btn--link,:host .a-btn--link:link,:host .a-btn--link:visited{text-decoration-color:var(--link-text);background-color:transparent;color:var(--link-text)}:host .a-btn--link:hover,:host .a-btn--link.hover{text-decoration-color:var(--link-text-hover);text-decoration-style:solid;background-color:transparent;color:var(--link-text-hover);box-shadow:none}:host .a-btn--link:focus,:host .a-btn--link.focus{background-color:transparent;outline:1px dotted var(--link-text);color:var(--link-text)}:host .a-btn--link:active,:host .a-btn--link.active{text-decoration-color:var(--link-text-active);text-decoration-style:solid;background-color:transparent;color:var(--link-text-active)}:host .a-btn--link.a-btn--warning,:host .a-btn--link.a-btn--warning:link,:host .a-btn--link.a-btn--warning:visited{text-decoration-color:var(--btn-warning-bg);background-color:transparent;color:var(--btn-warning-bg)}:host .a-btn--link.a-btn--warning:hover,:host .a-btn--link.a-btn--warning.hover{text-decoration-color:var(--btn-warning-bg-hover);text-decoration-style:solid;background-color:transparent;color:var(--btn-warning-bg-hover);box-shadow:none}:host .a-btn--link.a-btn--warning:focus,:host .a-btn--link.a-btn--warning.focus{background-color:transparent;outline:1px dotted var(--btn-warning-bg);color:var(--btn-warning-bg)}:host .a-btn--link.a-btn--warning:active,:host .a-btn--link.a-btn--warning.active{text-decoration-color:var(--btn-warning-bg-active);text-decoration-style:solid;background-color:transparent;color:var(--btn-warning-bg-active)}:host{display:-moz-box;display:flex;width:-moz-fit-content;width:fit-content}@media only screen and (max-width:37.5em){:host([full-on-mobile]){width:100%}:host([full-on-mobile]) button,:host([full-on-mobile]) [role=button]{width:100%}}:host([flush-left]) button,:host([flush-left]) [role=button]{border-top-left-radius:0;border-bottom-left-radius:0}:host([flush-right]) button,:host([flush-right]) [role=button]{border-top-right-radius:0;border-bottom-right-radius:0}`, or = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:host{--icon-text-divider-default: var(--pacific-60);--icon-text-divider-disabled: var(--gray-60);--icon-text-divider: var(--icon-text-divider-default)}:host .wrapper{display:-moz-box;display:flex;width:-moz-fit-content;width:fit-content;-moz-box-align:center;align-items:center;gap:.625rem}:host .left-divider:before,:host .right-divider:after{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host slot{display:contents}.left-divider ::slotted(svg:first-of-type){-moz-box-ordinal-group:0;order:-1}.right-divider ::slotted(svg:last-of-type){-moz-box-ordinal-group:2;order:1}:host([disabled]){--icon-text-divider: var(--icon-text-divider-disabled) !important}:host([icon-hidden]) ::slotted(svg){display:none!important}`;
class ct extends E {
  static styles = or;
  /**
   * @property {boolean} disabled - Apply disabled styles or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    disabled: { type: Boolean, reflect: !0 },
    iconHidden: { type: Boolean, reflect: !0, attribute: "icon-hidden" }
  };
  constructor() {
    super(), this.disabled = !1, this.iconHidden = !1;
  }
  firstUpdated() {
    const e = this.shadowRoot.querySelector("slot");
    this.#e(), e.addEventListener("slotchange", () => this.#e());
  }
  updated(e) {
    e.has("iconHidden") && this.#e();
  }
  #e() {
    const e = this.shadowRoot.querySelector(".wrapper"), a = this.shadowRoot.querySelector("slot").assignedNodes({ flatten: !0 }).filter((n) => n.nodeType === Node.ELEMENT_NODE || n.nodeType === Node.TEXT_NODE && n.textContent.trim()), i = !this.iconHidden && a[0]?.tagName?.toLowerCase() === "svg", o = !this.iconHidden && a[a.length - 1]?.tagName?.toLowerCase() === "svg";
    e.classList.toggle("left-divider", i), e.classList.toggle("right-divider", o);
  }
  hideIcon() {
    this.iconHidden = !0;
  }
  showIcon() {
    this.iconHidden = !1;
  }
  render() {
    return x`<span class="wrapper"><slot></slot></span>`;
  }
  static init() {
    window.customElements.get("cfpb-icon-text") || window.customElements.define("cfpb-icon-text", ct);
  }
}
const nr = ["primary", "secondary", "warning"], dr = ["button", "submit", "reset"];
class ht extends E {
  static styles = ir;
  /**
   * @property {string} type - The button type: button, submit, or reset.
   * @property {string} href - The URL to link to (makes the button a link).
   * @property {boolean} disabled - Whether the button is disabled or not.
   * @property {string} variant
   *   The button variant: primary, secondary, or warning.
   * @property {boolean} fullOnMobile - Whether to be width 100% on mobile.
   * @property {boolean} flushLeft - Whether button is not rounded on left.
   * @property {boolean} flushRight - Whether button is not rounded on right.
   * @property {boolean} styleAsLink - Style the button as a link.
   * @returns {object} The map of properties.
   */
  static properties = {
    type: { type: String },
    href: { type: String },
    disabled: { type: Boolean, reflect: !0 },
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
  // DOM references.
  #e = T();
  constructor() {
    super(), this.type = "button", this.variant = "primary", this.disabled = !1, this.fullOnMobile = !1, this.styleAsLink = !1;
  }
  /**
   * @returns {boolean} True if it has an icon, false otherwise.
   */
  hasIcon() {
    return this.#e.value?.hasIcon();
  }
  /**
   * Hide any icon in the slot.
   */
  hideIcon() {
    this.#e.value?.hideIcon();
  }
  /**
   * Show any icon in the slot, if it was hidden.
   */
  showIcon() {
    this.#e.value?.showIcon();
  }
  get dividerColorVar() {
    switch (this.variant) {
      case "warning":
        return "--btn-warning-divider";
      case "secondary":
        return "--btn-secondary-divider";
      default:
        return "--btn-divider";
    }
  }
  /**
   * Ensure the variant value is valid, and fall back to a default if not.
   * @returns {string} A valid variant value string.
   */
  get #t() {
    return nr.includes(this.variant) ? this.variant : "primary";
  }
  /**
   * Ensure the type value is valid, and fall back to a default if not.
   * @returns {string} A valid type value string.
   */
  get #a() {
    return dr.includes(this.type) ? this.type : "button";
  }
  /**
   * The classes added to the button.
   * @returns {object} A classmap of CSS class names.
   */
  get #i() {
    return {
      "a-btn": !0,
      [`a-btn--${this.#t}`]: this.#t !== "primary",
      "a-btn--link": this.styleAsLink === !0
    };
  }
  #r() {
    return x`
      <cfpb-icon-text
        ${O(this.#e)}
        ?disabled=${this.disabled}
        style="--icon-text-divider: var(${this.dividerColorVar})"
      >
        <slot></slot>
      </cfpb-icon-text>
    `;
  }
  render() {
    const e = Ft(this.#i);
    return this.href ? x`
        <a
          class=${e}
          href=${this.disabled ? void 0 : this.href}
          role="button"
          aria-disabled=${String(this.disabled)}
          tabindex=${this.disabled ? -1 : 0}
        >
          ${this.#r()}
        </a>
      ` : x`
      <button
        class=${e}
        ?disabled=${this.disabled}
        type=${this.#a}
      >
        ${this.#r()}
      </button>
    `;
  }
  static init() {
    ct.init(), window.customElements.get("cfpb-button") || window.customElements.define("cfpb-button", ht);
  }
}
class Te extends lt {
  constructor(e) {
    if (super(e), this.it = _, e.type !== st.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === _ || e == null) return this._t = void 0, this.it = e;
    if (e === Z) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const t = [e];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
Te.directiveName = "unsafeHTML", Te.resultType = 1;
const sr = qe(Te);
class et extends Te {
}
et.directiveName = "unsafeSVG", et.resultType = 2;
const X = qe(et), lr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}.cf-icon-svg{height:1.1875em;vertical-align:middle;fill:currentcolor}.cf-icon-svg--updating,.cf-icon-svg--updating-round{-moz-animation:updating-animation 1.25s infinite linear;animation:updating-animation 1.25s infinite linear;-moz-transform-origin:50% 50%;transform-origin:50% 50%}@-moz-keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{-moz-transform:scaleX(-1);transform:scaleX(-1)}:host .a-form-alert{--form-alert-icon-color: var(--form-alert-icon-color-default);margin-top:.9375rem;display:-moz-box;display:flex;gap:.3125rem}:host .a-form-alert .cf-icon-svg{color:var(--form-alert-icon-color);-moz-box-flex:0;flex:none;margin-top:.0625rem}:host .a-form-alert__text{display:block}:host .a-form-alert--success .cf-icon-svg{--form-alert-icon-color: var(--form-alert-icon-color-success)}:host .a-form-alert--warning .cf-icon-svg{--form-alert-icon-color: var(--form-alert-icon-color-warning)}:host .a-form-alert--error .cf-icon-svg{--form-alert-icon-color: var(--form-alert-icon-color-error)}`, cr = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--error-round" viewBox="0 0 17 19"><path d="M16.417 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-6.804.01 3.032-3.033a.792.792 0 1 0-1.12-1.12L8.494 8.473 5.46 5.44a.792.792 0 0 0-1.12 1.12l3.033 3.033-3.032 3.033a.791.791 0 1 0 1.12 1.119l3.032-3.033 3.033 3.033a.79.79 0 0 0 1.12 0 .79.79 0 0 0 0-1.12z"/></svg>', hr = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--warning-round" viewBox="0 0 17 19"><path d="M16.406 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0M9.48 13.667a1.003 1.003 0 1 0-2.007 0 1.003 1.003 0 0 0 2.007 0M7.697 10.83a.792.792 0 0 0 1.583 0V4.562a.792.792 0 0 0-1.583 0z"/></svg>', fr = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--approved-round" viewBox="0 0 17 19"><path d="M16.417 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-4.105-4.498a.79.79 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.792.792 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 1.294-.111L12.6 6.166a.79.79 0 0 0-.29-1.081z"/></svg>';
class ft extends E {
  static styles = lr;
  /**
   * @property {string} validation - Validation style: error, warning, success.
   * @returns {object} The map of properties.
   */
  static properties = {
    validation: { type: String }
  };
  constructor() {
    super(), this.validation = "error";
  }
  get icon() {
    let e = cr;
    return this.validation === "warning" ? e = hr : this.validation === "success" && (e = fr), e;
  }
  render() {
    return x`<div
      class="a-form-alert a-form-alert--${this.validation}"
      role="alert"
    >
      ${X(this.icon)}
      <div class="a-form-alert__text"><slot></slot></div>
    </div>`;
  }
  static init() {
    window.customElements.get("cfpb-form-alert") || window.customElements.define("cfpb-form-alert", ft);
  }
}
const ur = A`@charset \"UTF-8\";:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}html{font-family:sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}body{color:var(--text);font-family:var(--font-stack);font-size:100%;font-size-adjust:var(--font-adjust-body);line-height:1.375;-webkit-font-smoothing:antialiased}button,input,select,textarea{font-family:var(--font-stack);line-height:1.1875;font-size-adjust:var(--font-adjust-body)}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size:2.125em;font-size-adjust:var(--font-adjust-h1);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.4411764706em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7647058824em}@media only screen and (max-width:37.5em){p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}@media only screen and (max-width:37.5em){h1,.h1{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}h2,.h2{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.7307692308em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.1538461538em}@media only screen and (max-width:37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.3636363636em}}@media only screen and (max-width:37.5em){h2,.h2{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.3636363636em}}h3,.h3{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.3636363636em}@media only screen and (max-width:37.5em){h3,.h3{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.6666666667em}}h4,.h4{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:500;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.6666666667em}@media only screen and (max-width:37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size:.875em;font-size-adjust:var(--font-adjust-h5);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.0714285714em}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.1428571429em}h6,.h6{font-size:.75em;font-size-adjust:var(--font-adjust-h6);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.25em}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{margin-top:0;margin-bottom:15px;font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}@media only screen and (max-width:37.5em){.lead-paragraph{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}}.superheading{margin-bottom:.4166666667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);text-decoration-color:var(--link-underline);text-decoration-line:underline;text-decoration-thickness:1px;text-decoration-style:dotted;text-underline-offset:4.5px}a:visited,a.visited{text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline:thin dotted;outline-offset:1px}a:active,a.active{text-decoration-style:solid;text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none;list-style-image:none}caption{margin-bottom:.625em;text-align:left}th,td{padding:.625em}thead th,thead td{padding:.7142857143em;background:var(--table-head-bg);color:var(--table-head-text);font-size:1em;vertical-align:top}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{font-weight:600;text-align:left}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{margin:0;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit}blockquote{margin-right:.9375em;margin-left:.9375em}@media only screen and (min-width:37.5625em){blockquote{margin-right:1.875em;margin-left:1.875em}}img{max-width:100%}figure{margin-right:0;margin-left:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);border-radius:4px;color:var(--code-text);font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.2307692308em .2307692308em 0;font-size:.8125em}pre{display:block;padding:.625em .9375em;white-space:pre-wrap;overflow-wrap:break-word}pre code{padding:0;background-color:transparent}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";display:table;clear:both}.u-visually-hidden{position:absolute;width:1px;height:1px;border:0;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0)}@media only screen and (max-width:37.5em){.u-hide-on-mobile{display:none}}@media only screen and (min-width:37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{position:relative;padding-bottom:56.25%;height:0}.u-flexible-container__inner{position:absolute;top:0;left:0;width:100%;height:100%}.u-flexible-container--4-3{position:relative;padding-bottom:75%;height:0}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6666666667%}.u-w33pct{width:33.3333333333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{-moz-transition-duration:0s!important;transition-duration:0s!important}.u-move-transition{-moz-transition:transform .25s ease-out,-moz-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-moz-transform .25s ease-out}.u-move-to-origin{-moz-transform:translate3d(0,0,0);transform:translateZ(0)}.u-move-left{-moz-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-move-left-2x{-moz-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}.u-move-left-3x{-moz-transform:translate3d(-300%,0,0);transform:translate3d(-300%,0,0)}.u-move-right{-moz-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-move-up{-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-alpha-transition{-moz-transition:opacity .25s linear;transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{overflow:hidden;contain:paint;-moz-transition:max-height .2s ease-out;transition:max-height .2s ease-out}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host{--expandable-border: var(--gray-40)}:host .cf-icon-svg{height:1.1875em;vertical-align:middle;fill:currentcolor}:host ::slotted([slot=header]){margin-bottom:0!important;color:var(--black)!important;font-weight:500!important;font-size:1.125em!important}@media only screen and (max-width:37.5em){:host ::slotted([slot=header]){font-size:1em!important}}:host .o-expandable{position:relative}:host .o-expandable__header{display:-moz-box;display:flex;-moz-box-pack:justify;justify-content:space-between;gap:10px;padding:.625em .9375em;border:0;background-color:transparent;cursor:pointer}:host .o-expandable__header:focus{outline:1px dotted var(--black);outline-offset:2px}:host .o-expandable__header .o-expandable__cue-close,:host .o-expandable__header .o-expandable__cue-open{display:none}:host .o-expandable__header[aria-expanded=false] .o-expandable__cue-open{display:block}:host .o-expandable__header[aria-expanded=true] .o-expandable__cue-close{display:block}:host .o-expandable button.o-expandable__header{width:100%;text-align:left}:host .o-expandable__label{-moz-box-flex:1;flex-grow:1}:host .o-expandable__icon,:host .o-expandable__label{font-size:1.125em!important}@media only screen and (max-width:37.5em){:host .o-expandable__icon,:host .o-expandable__label{font-size:1em!important}}:host .o-expandable__cues{align-self:center;color:var(--pacific);font-size:1em;line-height:1.375}:host .o-expandable__content{padding:0 .9375em .9375em}:host .o-expandable__content:before{content:\"\";display:block;border-top:1px solid var(--expandable-border);padding-top:.9375em}:host .o-expandable__content:after{padding-bottom:.9375em;width:100%}:host .o-expandable--background{background:var(--gray-5)}:host .o-expandable--border{border:1px solid var(--expandable-border)}:host .o-expandable-group .o-expandable{border-bottom:1px solid var(--expandable-border)}:host .o-expandable-group .o-expandable:first-child{border-top:1px solid var(--expandable-border)}@media print{:host .o-expandable__header[aria-expanded=true] :host .o-expandable__cue-close,:host .o-expandable__header[aria-expanded=false] :host .o-expandable__cue-open{display:none}:host .o-expandable__content[aria-expanded=false]{display:block;max-height:99999px!important}}html[lang=ar] :host .o-expandable__header{text-align:right}html[lang=ar] :host .o-expandable__cues{text-align:left}`, br = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--plus-round" viewBox="0 0 17 19"><path d="M16.416 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-2.958.01a.79.79 0 0 0-.792-.792H9.284V5.42a.792.792 0 1 0-1.583 0V8.8H4.32a.792.792 0 0 0 0 1.584H7.7v3.382a.792.792 0 1 0 1.583 0v-3.382h3.382a.79.79 0 0 0 .792-.791z"/></svg>', pr = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--minus-round" viewBox="0 0 17 19"><path d="M16.416 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0m-2.958.01a.79.79 0 0 0-.792-.792H4.32a.792.792 0 0 0 0 1.583h8.346a.79.79 0 0 0 .792-.791"/></svg>';
class Gt extends E {
  static styles = ur;
  #e;
  #t;
  /**
   * @property {boolean} isExpanded - Whether the expandable is expanded or not.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      isExpanded: { type: Boolean, attribute: "open", reflect: !0 }
    };
  }
  constructor() {
    super();
  }
  firstUpdated() {
    const e = this.shadowRoot.querySelector("div"), t = e.querySelector(".o-expandable__content"), a = this.isExpanded ? I.CLASSES.MH_DEFAULT : I.CLASSES.MH_ZERO;
    this.#t = new I(t).init(a), this.#e = new ce(e), this.#e.setTransition(
      this.#t,
      this.#t.maxHeightZero,
      this.#t.maxHeightDefault
    ), this.#e.init(this.isExpanded), this.#e.addEventListener("expandbegin", () => {
      this.isExpanded = !0, t.classList.remove("u-hidden"), this.dispatchEvent(
        new CustomEvent("expandbegin", {
          detail: { target: this },
          bubbles: !0,
          composed: !0
        })
      );
    }), this.#e.addEventListener("collapseend", () => {
      this.isExpanded = !1, t.classList.add("u-hidden");
    });
  }
  updated(e) {
    if (e.has("isExpanded")) {
      const t = e.get("isExpanded"), a = this.isExpanded;
      a !== t && (a ? this.#e.expand() : this.#e.collapse());
    }
  }
  render() {
    return x`
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
              ${X(br)}
              <span class="u-visually-hidden">Show</span>
            </span>
            <span class="o-expandable__cue-close" role="img" aria-label="Hide">
              ${X(pr)}
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
    window.customElements.get("cfpb-expandable") || window.customElements.define("cfpb-expandable", Gt);
  }
}
const gr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";display:table;clear:both}.u-visually-hidden{position:absolute;width:1px;height:1px;border:0;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0)}@media only screen and (max-width:37.5em){.u-hide-on-mobile{display:none}}@media only screen and (min-width:37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{position:relative;padding-bottom:56.25%;height:0}.u-flexible-container__inner{position:absolute;top:0;left:0;width:100%;height:100%}.u-flexible-container--4-3{position:relative;padding-bottom:75%;height:0}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6666666667%}.u-w33pct{width:33.3333333333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{-moz-transition-duration:0s!important;transition-duration:0s!important}.u-move-transition{-moz-transition:transform .25s ease-out,-moz-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-moz-transform .25s ease-out}.u-move-to-origin{-moz-transform:translate3d(0,0,0);transform:translateZ(0)}.u-move-left{-moz-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-move-left-2x{-moz-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}.u-move-left-3x{-moz-transform:translate3d(-300%,0,0);transform:translate3d(-300%,0,0)}.u-move-right{-moz-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-move-up{-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-alpha-transition{-moz-transition:opacity .25s linear;transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{overflow:hidden;contain:paint;-moz-transition:max-height .2s ease-out;transition:max-height .2s ease-out}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host .m-form-field{--choice-border: var(--choice-border-default);--choice-border-hover: var(--choice-border-hover-default);--choice-border-focus: var(--choice-border-focus-default);--choice-outline-focus: var(--choice-outline-focus-default);--choice-bg: var(--choice-bg-default);--choice-bg-selected: var(--choice-bg-selected-default);--choice-bg-selected-focus: var(--choice-bg-selected-focus-default);--choice-label-disabled: var(--choice-label-disabled-default);--choice-border-width-addendum: 0;width:-moz-max-content;width:max-content}:host .m-form-field .a-label+.a-text-input{margin-top:.3125em}:host .m-form-field--checkbox .a-label,:host .m-form-field--radio .a-label{display:inline-grid;grid-template-columns:1.875em auto;vertical-align:top;cursor:pointer;overflow-wrap:anywhere}:host .m-form-field--checkbox .a-checkbox,:host .m-form-field--checkbox .a-radio,:host .m-form-field--radio .a-checkbox,:host .m-form-field--radio .a-radio{position:absolute;width:1px;height:1px;border:0;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0)}:host .m-form-field--checkbox .a-checkbox:focus+.a-label,:host .m-form-field--checkbox .a-checkbox.focus+.a-label,:host .m-form-field--checkbox .a-radio:focus+.a-label,:host .m-form-field--checkbox .a-radio.focus+.a-label,:host .m-form-field--radio .a-checkbox:focus+.a-label,:host .m-form-field--radio .a-checkbox.focus+.a-label,:host .m-form-field--radio .a-radio:focus+.a-label,:host .m-form-field--radio .a-radio.focus+.a-label{outline:1px dotted var(--choice-outline-focus);outline-offset:1px}:host .m-form-field--checkbox .a-checkbox:disabled+.a-label,:host .m-form-field--checkbox .a-radio:disabled+.a-label,:host .m-form-field--radio .a-checkbox:disabled+.a-label,:host .m-form-field--radio .a-radio:disabled+.a-label{cursor:not-allowed;color:var(--choice-label-disabled)}:host .m-form-field--checkbox:has(.a-checkbox:disabled),:host .m-form-field--checkbox:has(.a-radio:disabled),:host .m-form-field--radio:has(.a-checkbox:disabled),:host .m-form-field--radio:has(.a-radio:disabled){--choice-border: var(--choice-border-disabled);--choice-bg: var(--choice-bg-disabled);--choice-bg-selected: var(--choice-bg-selected-disabled)}:host .m-form-field--checkbox-success,:host .m-form-field--checkbox-warning,:host .m-form-field--checkbox-error,:host .m-form-field--radio-success,:host .m-form-field--radio-warning,:host .m-form-field--radio-error{--choice-border-width-addendum: 1px}:host .m-form-field--checkbox-success,:host .m-form-field--radio-success{--choice-border: var(--choice-border-success)}:host .m-form-field--checkbox-warning,:host .m-form-field--radio-warning{--choice-border: var(--choice-border-warning)}:host .m-form-field--checkbox-error,:host .m-form-field--radio-error{--choice-border: var(--choice-border-error)}:host .m-form-field--radio input:disabled:checked+.a-label:before,:host .m-form-field--radio input:disabled:focus+.a-label:before,:host .m-form-field--radio input:disabled.focus+.a-label:before,:host .m-form-field--radio input:disabled:hover+.a-label:before,:host .m-form-field--radio input:disabled.hover+.a-label:before{border-color:var(--choice-border);outline:none;box-shadow:none}:host .m-form-field--radio input:disabled+.a-label:before{outline:none}:host .m-form-field--radio:hover:before,:host .m-form-field--radio.hover:before{border-color:var(--choice-border-hover)}:host .m-form-field--radio .a-label:before{display:inline-block;grid-row-start:1;grid-row-end:3;border:1px solid var(--choice-border);outline:var(--choice-border-width-addendum) solid var(--choice-border);height:1.125em;width:1.125em;margin-right:10px;background-color:var(--choice-bg);content:\"\";vertical-align:top;position:relative;top:1px;left:1px;border-radius:50%;-moz-transform:rotate(0deg);transform:rotate(0)}:host .m-form-field--radio .a-radio:focus+.a-label:before,:host .m-form-field--radio .a-radio.focus+.a-label:before{outline:none;border-color:var(--choice-border-focus);box-shadow:0 0 0 1px var(--choice-border-focus)}:host .m-form-field--radio .a-radio:hover+.a-label:before,:host .m-form-field--radio .a-radio.hover+.a-label:before{outline:none;border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover)}:host .m-form-field--radio .a-radio:checked+.a-label:before{background-color:var(--choice-bg-selected);box-shadow:inset 0 0 0 2px var(--white)}:host .m-form-field--radio .a-radio:focus:checked+.a-label:before,:host .m-form-field--radio .a-radio.focus:checked+.a-label:before{background-color:var(--choice-bg-selected-focus);border-color:var(--choice-border-focus);box-shadow:0 0 0 1px var(--choice-border-focus),inset 0 0 0 2px var(--white)}:host .m-form-field--radio .a-radio:hover:checked+.a-label:before,:host .m-form-field--radio .a-radio.hover:checked+.a-label:before{border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover),inset 0 0 0 2px var(--white)}:host .m-form-field--radio .a-radio:checked:disabled+.a-label:before,:host .m-form-field--radio .a-radio:hover:checked:disabled+.a-label:before,:host .m-form-field--radio .a-radio.hover:checked:disabled+.a-label:before{background-color:var(--choice-bg-selected);box-shadow:inset 0 0 0 2px var(--gray-10);border-color:var(--choice-border-disabled)}:host .m-form-field--lg-target{width:100%;display:block}:host .m-form-field--lg-target .a-label{-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:15px;background-color:var(--form-field-input-lg-target-bg)}:host .m-form-field--lg-target .a-checkbox:checked+.a-label,:host .m-form-field--lg-target .a-radio:checked+.a-label{background-color:var(--form-field-input-lg-target-bg-selected);box-shadow:inset 0 0 0 1px var(--form-field-input-lg-target-border)}:host .m-form-field--lg-target .a-checkbox:hover+.a-label,:host .m-form-field--lg-target .a-checkbox.hover+.a-label,:host .m-form-field--lg-target .a-checkbox:focus+.a-label,:host .m-form-field--lg-target .a-checkbox.focus+.a-label,:host .m-form-field--lg-target .a-radio:hover+.a-label,:host .m-form-field--lg-target .a-radio.hover+.a-label,:host .m-form-field--lg-target .a-radio:focus+.a-label,:host .m-form-field--lg-target .a-radio.focus+.a-label{box-shadow:inset 0 0 0 2px var(--form-field-input-lg-target-border)}:host .m-form-field--lg-target .a-checkbox:focus+.a-label,:host .m-form-field--lg-target .a-checkbox.focus+.a-label,:host .m-form-field--lg-target .a-checkbox:checked+.a-label,:host .m-form-field--lg-target .a-radio:focus+.a-label,:host .m-form-field--lg-target .a-radio.focus+.a-label,:host .m-form-field--lg-target .a-radio:checked+.a-label{outline-offset:1px}:host .m-form-field--lg-target .a-checkbox:disabled+.a-label,:host .m-form-field--lg-target .a-checkbox:checked:disabled+.a-label,:host .m-form-field--lg-target .a-checkbox:hover:disabled+.a-label,:host .m-form-field--lg-target .a-radio:disabled+.a-label,:host .m-form-field--lg-target .a-radio:checked:disabled+.a-label,:host .m-form-field--lg-target .a-radio:hover:disabled+.a-label{color:var(--choice-label-disabled);box-shadow:none;background-color:var(--form-field-input-lg-target-bg-disabled)}:host .m-form-field--lg-target .a-checkbox:checked:disabled+.a-label,:host .m-form-field--lg-target .a-radio:checked:disabled+.a-label{border:1px solid var(--form-field-border-disabled)}`, vr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";display:table;clear:both}.u-visually-hidden{position:absolute;width:1px;height:1px;border:0;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0)}@media only screen and (max-width:37.5em){.u-hide-on-mobile{display:none}}@media only screen and (min-width:37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{position:relative;padding-bottom:56.25%;height:0}.u-flexible-container__inner{position:absolute;top:0;left:0;width:100%;height:100%}.u-flexible-container--4-3{position:relative;padding-bottom:75%;height:0}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6666666667%}.u-w33pct{width:33.3333333333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{-moz-transition-duration:0s!important;transition-duration:0s!important}.u-move-transition{-moz-transition:transform .25s ease-out,-moz-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-moz-transform .25s ease-out}.u-move-to-origin{-moz-transform:translate3d(0,0,0);transform:translateZ(0)}.u-move-left{-moz-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-move-left-2x{-moz-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}.u-move-left-3x{-moz-transform:translate3d(-300%,0,0);transform:translate3d(-300%,0,0)}.u-move-right{-moz-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-move-up{-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-alpha-transition{-moz-transition:opacity .25s linear;transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{overflow:hidden;contain:paint;-moz-transition:max-height .2s ease-out;transition:max-height .2s ease-out}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host{--choice-border: var(--choice-border-default);--choice-border-hover: var(--choice-border-hover-default);--choice-bg: var(--choice-bg-default);--choice-bg-selected: var(--choice-bg-selected-default);--choice-border-width-addendum: 0}:host .cfpb-checkbox-icon:before{display:inline-block;grid-row-start:1;grid-row-end:3;border:1px solid var(--choice-border);outline:var(--choice-border-width-addendum) solid var(--choice-border);height:1.125em;width:1.125em;margin-right:10px;background-color:var(--choice-bg);content:\"\";vertical-align:top;position:relative;top:1px;left:1px}:host .checked:before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 aria-hidden%3D%22true%22 class%3D%22cf-icon-svg cf-icon-svg--approved%22 viewBox%3D%220 0 12 19%22%3E%3Cpath d%3D%22M4.63 15.638a1.03 1.03 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511l-.088.004z%22%2F%3E%3C%2Fsvg%3E\");background-size:auto 1.1875em;background-repeat:no-repeat;background-position:center 0}:host .disabled:before{cursor:not-allowed;--choice-border: var(--choice-border-disabled);--choice-bg: var(--choice-bg-disabled);--choice-bg-selected: var(--choice-bg-selected-disabled)}:host .checked.disabled:before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 aria-hidden%3D%22true%22 fill%3D%22rgb(90%2C93%2C97)%22 viewBox%3D%220 0 12 19%22%3E%3Cpath d%3D%22M4.63 15.638a1.03 1.03 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511l-.088.004z%22%2F%3E%3C%2Fsvg%3E\")}:host .cfpb-checkbox-icon:not(.disabled,.borderless).focus:before,:host .cfpb-checkbox-icon:not(.disabled,.borderless):focus:before,:host .cfpb-checkbox-icon:not(.disabled,.borderless).hover:before,:host .cfpb-checkbox-icon:not(.disabled,.borderless):hover:before{cursor:pointer;border-color:var(--choice-border-hover);box-shadow:0 0 0 1px var(--choice-border-hover);outline-color:var(--choice-border-hover)}:host .validation-error,:host .validation-warning,:host .validation-success{--choice-border-width-addendum: 1px}:host .validation-error{--choice-border: var(--choice-border-error)}:host .validation-warning{--choice-border: var(--choice-border-warning)}:host .validation-success{--choice-border: var(--choice-border-success)}:host .borderless:before{border-color:transparent;outline-color:transparent;background-color:transparent}`, mr = ["error", "warning", "success"];
class Ne extends E {
  static styles = vr;
  #e;
  #t;
  /**
   * @property {boolean} borderless - Whether the checkbox has a border or not.
   * @property {boolean} checked - Whether the checkbox is checked or not.
   * @property {boolean} disabled - Whether the checkbox is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @returns {object} The map of properties.
   */
  static properties = {
    borderless: { type: Boolean, reflect: !0 },
    checked: { type: Boolean, reflect: !0 },
    disabled: { type: Boolean, reflect: !0 },
    validation: { type: String, reflect: !0 }
  };
  constructor() {
    super(), this.borderless = !1, this.checked = !1, this.disabled = !1, this.validation = "", this.#e = !1, this.#t = !1;
  }
  /**
   * Ensure the validation value is valid, and fall back to a default if not.
   * @returns {string|undefined} A valid validation value string, or undefined.
   */
  get #a() {
    return mr.includes(this.validation) ? this.validation : void 0;
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
  #i() {
    return [
      "cfpb-checkbox-icon",
      this.checked && "checked",
      this.disabled && "disabled",
      this.borderless && "borderless",
      this.#a && `validation-${this.#a}`,
      this.#e && "hover",
      this.#t && "focus"
    ].filter(Boolean).join(" ");
  }
  render() {
    return x`
      <div
        class=${this.#i()}
        ?disabled=${this.disabled}
        aria-hidden="true"
      ></div>
    `;
  }
  static init() {
    window.customElements.get("cfpb-checkbox-icon") || window.customElements.define("cfpb-checkbox-icon", Ne);
  }
}
const yr = ["error", "warning", "success"], xr = ["checkbox", "radio"];
class Xt extends E {
  static styles = gr;
  #e = T();
  /**
   * @property {boolean} checked - Whether the choice is checked or not.
   * @property {boolean} disabled - Whether the choice is disabled or not.
   * @property {boolean} large - Whether the choice has a large target area.
   * @property {string} validation - Validation style: error, warning, success.
   * @property {string} type - Choice type: checkbox or radio.
   * @property {string} name - The name within a form.
   * @property {string} value - The value to submit within a form.
   * @returns {object} The map of properties.
   */
  static properties = {
    checked: { type: Boolean, reflect: !0 },
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
    this.checked = e.target.checked, this.dispatchEvent(
      new Event("change", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  #a() {
    this.dispatchEvent(
      new Event("input", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  #i() {
    this.#e.value && this.#e.value.focus();
  }
  #r() {
    this.#e.value && this.#e.value.blur();
  }
  #o() {
    this.#e.value && this.#e.value.mouseover();
  }
  #n() {
    this.#e.value && this.#e.value.mouseleave();
  }
  focus() {
    this.shadowRoot.querySelector("input").focus();
  }
  /**
   * Ensure the validation value is valid, and fall back to a default if not.
   * @returns {string|undefined} A valid validation value string, or undefined.
   */
  get #d() {
    return yr.includes(this.validation) ? this.validation : void 0;
  }
  /**
   * Ensure the type value is valid, and fall back to a default if not.
   * @returns {string} A type value string.
   */
  get #l() {
    return xr.includes(this.type) ? this.type : "checkbox";
  }
  get #s() {
    const e = {
      "m-form-field": !0,
      [`m-form-field--${this.type}`]: !0,
      "m-form-field--lg-target": this.large
    };
    return this.#d && (e[[`m-form-field--${this.type}-${this.validation}`]] = this.validation), e;
  }
  #h() {
    return x`
      <cfpb-checkbox-icon
        .checked=${this.checked}
        ?disabled=${this.disabled}
        validation=${this.#d}
        ${O(this.#e)}
      ></cfpb-checkbox-icon>
    `;
  }
  render() {
    const e = Ft(this.#s);
    return x`
      <div
        class=${e}
        ?large=${this.large}
        @mouseover=${this.#o}
        @mouseleave=${this.#n}
      >
        <input
          class="a-${this.type}"
          type=${this.#l}
          id="choice-input"
          ?disabled=${this.disabled}
          .checked=${this.checked}
          @change=${this.#t}
          @input=${this.#a}
          @focus=${this.#i}
          @blur=${this.#r}
          aria-invalid=${this.#d === "error" ? "true" : "false"}
        />
        <label class="a-label" for="choice-input">
          ${this.type === "checkbox" ? this.#h() : null}
          <slot></slot>
        </label>
      </div>
    `;
  }
  static init() {
    Ne.init(), window.customElements.get("cfpb-form-choice") || window.customElements.define("cfpb-form-choice", Xt);
  }
}
const kr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:root{--btn-text: var(--white);--btn-bg: var(--pacific);--btn-bg-hover: var(--pacific-dark);--btn-bg-active: var(--navy);--btn-divider: var(--pacific-60);--btn-secondary-text: var(--pacific);--btn-secondary-text-hover: var(--pacific-dark);--btn-secondary-text-active: var(--navy);--btn-secondary-bg: var(--white);--btn-secondary-bg-hover: var(--pacific-10);--btn-secondary-bg-active: var(--pacific-20);--btn-secondary-border: var(--pacific);--btn-secondary-border-hover: var(--pacific-dark);--btn-secondary-border-active: var(--navy);--btn-secondary-divider: var(--pacific-60);--btn-warning-text: var(--white);--btn-warning-bg: var(--red-mid-dark);--btn-warning-bg-hover: var(--red-dark);--btn-warning-bg-active: var(--gray-dark);--btn-warning-divider: var(--red-60);--btn-disabled-text: var(--gray-dark);--btn-disabled-bg: var(--gray-20);--btn-disabled-outline: var(--gray-20);--btn-disabled-divider: var(--gray-60)}:host{display:-moz-box;display:flex;width:-moz-fit-content;width:fit-content;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}`;
class Kt extends E {
  static styles = kr;
  static properties = {
    isDetailHidden: {
      type: Boolean,
      attribute: "hidden",
      // Maps 'hidden' to 'isDetailHidden' property.
      reflect: !0
      // Reflects the property change back to the attribute.
    },
    fileName: { type: String },
    // The file name.
    accept: { type: String },
    // The accepted file types.
    value: { type: String },
    // The raw file name.
    files: { type: FileList }
    // A FileList object.
  };
  constructor() {
    super(), this.#r();
  }
  #e = T();
  #t = T();
  #a(e) {
    let t = e;
    if (t.indexOf("\\") > -1) {
      const a = t.split("\\");
      t = a[a.length - 1];
    }
    return t;
  }
  #i() {
    this.fileName = this.#a(this.#e.value.value), this.value = this.#e.value.value, this.files = this.#e.value.files, this.isDetailHidden = !1;
  }
  #r() {
    this.fileName = "", this.value = "", this.files = {}, this.isDetailHidden = !0;
  }
  #o() {
    this.#e.value.value == "" ? this.#r() : this.#i();
  }
  render() {
    return x`
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
        @input=${() => this.#o()}
        @cancel=${() => this.#o()}
        ${O(this.#e)}
      />
      <div
        part="upload-details"
        ?hidden=${this.isDetailHidden}
        ${O(this.#t)}
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
    ht.init(), window.customElements.get("cfpb-file-upload") || window.customElements.define("cfpb-file-upload", Kt);
  }
}
const wr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:host .a-label slot{display:inline-block}:host .a-label__helper{color:var(--label-helper);font-size:1rem;font-weight:400}:host .a-label__helper--block{display:block;margin-top:.8333333333em}:host .a-label--heading{display:block;margin-bottom:.5555555556em;font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:500;letter-spacing:inherit;line-height:1.25;text-transform:inherit}p+:host .a-label--heading,ul+:host .a-label--heading,ol+:host .a-label--heading,dl+:host .a-label--heading,figure+:host .a-label--heading,img+:host .a-label--heading,table+:host .a-label--heading,blockquote+:host .a-label--heading,h1+:host .a-label--heading,.h1+:host .a-label--heading,h2+:host .a-label--heading,.h2+:host .a-label--heading,h3+:host .a-label--heading,.h3+:host .a-label--heading,h5+:host .a-label--heading,.h5+:host .a-label--heading,h6+:host .a-label--heading,.h6+:host .a-label--heading{margin-top:1.6666666667em}@media only screen and (max-width:37.5em){:host .a-label--heading{margin-bottom:.625em;font-size:1em;line-height:1.125}}:host .a-label--heading .a-label__helper--block{margin-top:.625rem}`;
const jr = (r) => r ?? _;
class Wt extends E {
  static styles = wr;
  /**
   * @property {boolean} block - Whether this has block or inline helper text.
   * @property {string} for - Associate the label with an ID elsewhere.
   * @returns {object} The map of properties.
   */
  static properties = {
    block: { type: Boolean, reflect: !0 },
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
    return x`
      <label
        class="a-label a-label--heading"
        for=${jr(this.for && this.for.trim() ? this.for : void 0)}
      >
        <slot name="label"></slot>
        <small class=${this.#e}>
          <slot name="helper"></slot>
        </small>
      </label>
    `;
  }
  static init() {
    window.customElements.get("cfpb-label") || window.customElements.define("cfpb-label", Wt);
  }
}
const zr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}.cf-icon-svg{height:1.1875em;vertical-align:middle;fill:currentcolor}.cf-icon-svg--updating,.cf-icon-svg--updating-round{-moz-animation:updating-animation 1.25s infinite linear;animation:updating-animation 1.25s infinite linear;-moz-transform-origin:50% 50%;transform-origin:50% 50%}@-moz-keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{-moz-transform:scaleX(-1);transform:scaleX(-1)}:host ::slotted(cfpb-list-item){position:relative;margin-top:1px}:host ::slotted(cfpb-list-item):before,:host ::slotted(cfpb-list-item):after{position:absolute;content:\"\";display:block;width:100%;height:1px}:host ::slotted(cfpb-list-item):before{top:-1px;border-top:1px solid var(--gray-20)}:host ::slotted(cfpb-list-item):after{bottom:-1px;border-bottom:1px solid var(--gray-20)}:host :focus{outline:1px dotted var(--pacific);outline-offset:2px}`, _r = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:host{--list-item-bg-hover: var(--gray-5);--list-item-border-focus: var(--pacific);display:block}:host .container{display:block;padding:6.5px 10px}:host .checkbox{display:inline-grid;grid-template-columns:1.875em auto;vertical-align:top;overflow-wrap:anywhere}:host .selectable{cursor:pointer}:host .selectable:hover{background:var(--list-item-bg-hover);-moz-transition:background-color .2s;transition:background-color .2s;cursor:pointer}:host(:focus){outline:none}:host(:not([disabled]):focus-within){outline:1px dotted var(--list-item-border-focus);outline-offset:2px}:host([checked]) .checkbox:before{background-image:url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 aria-hidden%3D%22true%22 class%3D%22cf-icon-svg cf-icon-svg--approved%22 viewBox%3D%220 0 12 19%22%3E%3Cpath d%3D%22M4.63 15.638a1.03 1.03 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511l-.088.004z%22%2F%3E%3C%2Fsvg%3E\");background-size:auto 1.1875em;background-repeat:no-repeat;background-position:center 0}:host([type=plain]) .checkbox:before{border-color:transparent;outline-color:transparent;background-color:transparent}:host([hidden]){display:none}`;
class ut extends E {
  static styles = _r;
  #e = T();
  #t;
  #a = !1;
  /**
   * @property {string} type - Choice type: plain, check, checkbox.
   * @property {boolean} checked - Whether the list item is checked or not.
   * @property {boolean} disabled - Whether the list item is selectable or not.
   * @property {boolean} hidden - Whether the list item is hidden or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    type: { type: String, reflect: !0 },
    checked: { type: Boolean, reflect: !0 },
    disabled: { type: Boolean, reflect: !0 },
    hidden: { type: Boolean, reflect: !0 },
    href: { type: String, refrect: !0 }
  };
  constructor() {
    super(), this.type = "plain", this.checked = !1, this.disabled = !1, this.hidden = !1, this.href = "";
  }
  firstUpdated() {
    this.tabIndex = this.disabled ? -1 : 0, this.#a || this.addEventListener("keydown", this.#o), this.addEventListener("pointerdown", this.#r);
  }
  connectedCallback() {
    super.connectedCallback(), this.#a = this.closest("[role=listbox]") !== null, this.#a ? (this.setAttribute("role", "option"), this.setAttribute("aria-disabled", this.disabled ? "true" : "false"), this.setAttribute("aria-selected", this.checked ? "true" : "false"), this.tabIndex = -1) : (this.removeAttribute("role"), this.removeAttribute("aria-disabled"), this.removeAttribute("aria-selected"));
  }
  updated(e) {
    e.has("checked") && this.#a && this.setAttribute("aria-selected", this.checked ? "true" : "false"), e.has("disabled") && (this.tabIndex = this.disabled ? -1 : 0, this.#a && this.setAttribute("aria-disabled", this.disabled ? "true" : "false")), e.has("hidden") && (this.setAttribute("aria-hidden", this.hidden ? "true" : "false"), this.hidden && (this.tabIndex = -1));
  }
  #i() {
    this.href !== "" && (window.location.href = this.href), this.checked = !this.checked, this.dispatchEvent(
      new CustomEvent("item-click", {
        detail: { checked: this.checked, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  #r() {
    !this.disabled && !this.hidden && this.#i();
  }
  #o(e) {
    this.disabled || this.hidden || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.#i());
  }
  #n() {
    this.#e.value?.mouseover();
  }
  #d() {
    this.#e.value?.mouseleave();
  }
  get value() {
    if (this.#t) return this.#t;
    const e = this.shadowRoot?.querySelector("slot");
    return e ? (this.#t = e.assignedNodes({ flatten: !0 }).map((t) => t.textContent).join("").trim(), this.#t) : "";
  }
  set value(e) {
    this.#t = e;
  }
  render() {
    return x`
      <div
        part="container"
        class="container
        ${this.disabled ? "" : "selectable"}"
        @mouseover=${this.#n}
        @mouseleave=${this.#d}
      >
        ${this.#l()}
      </div>
    `;
  }
  #l() {
    switch (this.type) {
      case "check":
        return this.#h();
      case "checkbox":
        return this.#c();
      default:
        return this.#s();
    }
  }
  #s() {
    return x`<div><slot></slot></div>`;
  }
  #h() {
    return x`
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
  #c() {
    return x`
      <div class="checkbox">
        <cfpb-checkbox-icon
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ${O(this.#e)}
        ></cfpb-checkbox-icon>
        <slot></slot>
      </div>
    `;
  }
  static init() {
    Ne.init(), window.customElements.get("cfpb-list-item") || window.customElements.define("cfpb-list-item", ut);
  }
}
function Zt(r, e = {}) {
  const { allowSingleQuotes: t = !0 } = e;
  if (!r) return null;
  if (Array.isArray(r))
    return r;
  if (typeof r != "string")
    return console.error("childData must be a string or array."), null;
  let a = r.trim();
  if (!a) return null;
  t && (a = a.replace(/'/g, '"'));
  try {
    const i = JSON.parse(a);
    return Array.isArray(i) ? i : (console.error("childData JSON must parse to an array."), null);
  } catch (i) {
    return console.error("Failed to parse childData JSON:", i), null;
  }
}
class De extends E {
  static styles = zr;
  #e = !1;
  #t = T();
  #a = [];
  #i = [];
  #r = [];
  // index in visibleItems
  #o = -1;
  // WeakMap to store per-item click listeners.
  #n = /* @__PURE__ */ new WeakMap();
  /**
   * @property {Array} childData - Structure data to create child components.
   * @property {boolean} multiple - Whether the select supports multiple or not.
   * @property {string} type - List item type: plain, check, or checkbox.
   * @property {string} ariaLabel - The aria-label for the list container.
   * @returns {object} The map of properties.
   */
  static properties = {
    childData: { type: Array, attribute: "childdata" },
    multiple: { type: Boolean, reflect: !0 },
    type: { type: String, reflect: !0 },
    ariaLabel: { type: String, attribute: "aria-label" }
  };
  constructor() {
    super(), this.childData = "", this.multiple = !1, this.type = "plain", this.ariaLabel = "";
  }
  firstUpdated() {
    this.#l();
  }
  updated(e) {
    if (!this.#e && e.has("childData")) {
      const t = Zt(this.childData);
      t && this.#d(t);
    }
    e.has("type") && this.#h();
  }
  // -------------------------
  // ITEMS ACCESS
  // -------------------------
  get items() {
    return this.#a;
  }
  get checkedItems() {
    return this.#i;
  }
  get visibleItems() {
    return this.#r;
  }
  get visibleCheckedItems() {
    return this.#r.filter((e) => e.checked);
  }
  // -------------------------
  // RENDER ITEMS
  // -------------------------
  #d(e) {
    [...this.children].forEach((a) => {
      a.tagName !== "TEMPLATE" && a.tagName !== "NOSCRIPT" && a.remove();
    });
    let t = null;
    e.forEach((a) => {
      const i = document.createElement("cfpb-list-item");
      i.textContent = a.value ?? "", "disabled" in a && (i.disabled = a.disabled), "hidden" in a && (i.hidden = a.hidden), "href" in a && (i.href = a.href), i.type = a.type ?? this.type, this.multiple ? "checked" in a && (i.checked = a.checked) : !t && a.checked && (t = i, i.checked = !0), this.appendChild(i);
    }), this.#l();
  }
  // -------------------------
  // SYNC ITEMS & LISTENERS
  // -------------------------
  #l() {
    if (this.#a = [...this.querySelectorAll("cfpb-list-item")], this.#a.forEach((e) => {
      e.type || (e.type = this.type);
    }), this.#r = this.#a.filter((e) => !e.hidden), this.multiple)
      this.#i = this.#a.filter((e) => e.checked);
    else {
      const e = this.#a.find((t) => t.checked);
      this.#i = e ? [e] : [], this.#a.forEach((t) => {
        t !== e && (t.checked = !1);
      });
    }
    this.#a.forEach((e, t) => {
      e.setAttribute("tabindex", "-1"), e.setAttribute("role", "option");
      const a = this.#n.get(e);
      a && e.removeEventListener("item-click", a);
      const i = (o) => {
        o.stopPropagation(), this.#c(e, e.checked, t);
      };
      e.addEventListener("item-click", i), this.#n.set(e, i), e.addEventListener("focus", () => {
        const o = this.#r.indexOf(e);
        o !== -1 && (this.#o = o);
      });
    }), this.dispatchEvent(
      new CustomEvent("items-ready", {
        detail: {
          items: this.#a,
          checkedItems: this.#i,
          visibleItems: this.#r,
          visibleCheckedItems: this.visibleCheckedItems
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  #s() {
    const e = this.#a.map((t) => ({
      value: t.value,
      label: t.textContent.trim(),
      checked: t.checked,
      disabled: t.disabled
    }));
    this.#e = !0, this.childData = e, this.#e = !1;
  }
  #h() {
    if (!["plain", "check", "checkbox"].includes(this.type)) {
      console.warn(`<cfpb-list>: invalid type "${this.type}".`);
      return;
    }
    this.#a.forEach((e) => e.type = this.type);
  }
  #c(e, t, a) {
    this.multiple ? t ? this.#i.includes(e) || this.#i.push(e) : this.#i = this.#i.filter(
      (i) => i !== e
    ) : t ? (this.#a.forEach((i) => {
      i !== e && (i.checked = !1);
    }), this.#i = [e]) : (this.#i.forEach((i) => i.checked = !1), this.#i = []), this.#s(), window.queueMicrotask(() => {
      const i = this.#r.indexOf(e);
      this.focusItemAt(i !== -1 ? i : -1);
    }), this.dispatchEvent(
      new CustomEvent("item-click", {
        detail: { index: a, value: e.value, element: e },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // -------------------------
  // FILTER & FOCUS
  // -------------------------
  /**
   * @param {Array} queryList - List of search words.
   * @returns {Array} List of visible list items.
   */
  filterItems(e) {
    this.#r = [];
    let t = -1;
    return this.#a.forEach((a) => {
      const i = e.some(
        (o) => a.value.toLowerCase().includes(o.toLowerCase())
      );
      a.hidden = !i, i && (t === -1 && (t = this.#r.length), this.#r.push(a));
    }), this.#o = t, this.#f(), this.#r;
  }
  showAllItems() {
    this.#a.forEach((e) => e.hidden = !1), this.#r = [...this.#a], this.#o = 0, this.#f();
  }
  #f() {
    this.dispatchEvent(
      new CustomEvent("items-filter", {
        detail: {
          items: this.#a,
          checkedItems: this.#i,
          visibleItems: this.#r,
          visibleCheckedItems: this.visibleCheckedItems
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  #u() {
    this.#t.value.focus(), this.#o = -1;
  }
  /**
   * Focus a visible item by index.
   * Pass -1 to move focus to the list container (no active item).
   * @param {number} index - The index of the item to focus.
   * @returns {undefined} If nothing to focus.
   */
  focusItemAt(e) {
    const t = this.#r;
    if (!t.length || e == null || typeof e != "number" || Number.isNaN(e) || e === -1) {
      this.#u();
      return;
    }
    const a = (e % t.length + t.length) % t.length;
    t[a].focus(), this.#o = a;
  }
  #b(e) {
    e.target === this.#t.value && this.#u();
  }
  #p(e) {
    const t = this.#r;
    if (!t.length) return;
    const a = t.length - 1;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), this.focusItemAt(this.#o < 0 ? 0 : this.#o + 1);
        break;
      case "ArrowUp":
        e.preventDefault(), this.focusItemAt(
          this.#o < 0 ? a : this.#o - 1
        );
        break;
      case "Home":
        e.preventDefault(), this.focusItemAt(0);
        break;
      case "End":
        e.preventDefault(), this.focusItemAt(a);
        break;
    }
  }
  get focusedIndex() {
    return this.#o;
  }
  render() {
    return x`
      <div
        role="listbox"
        tabindex="0"
        @keydown=${this.#p}
        @focus=${this.#b}
        aria-label=${this.ariaLabel}
        ?aria-multiselectable=${this.multiple}
        ${O(this.#t)}
      >
        <slot></slot>
      </div>
    `;
  }
  static init() {
    ut.init(), window.customElements.get("cfpb-list") || window.customElements.define("cfpb-list", De);
  }
}
const Er = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:root{--btn-text: var(--white);--btn-bg: var(--pacific);--btn-bg-hover: var(--pacific-dark);--btn-bg-active: var(--navy);--btn-divider: var(--pacific-60);--btn-secondary-text: var(--pacific);--btn-secondary-text-hover: var(--pacific-dark);--btn-secondary-text-active: var(--navy);--btn-secondary-bg: var(--white);--btn-secondary-bg-hover: var(--pacific-10);--btn-secondary-bg-active: var(--pacific-20);--btn-secondary-border: var(--pacific);--btn-secondary-border-hover: var(--pacific-dark);--btn-secondary-border-active: var(--navy);--btn-secondary-divider: var(--pacific-60);--btn-warning-text: var(--white);--btn-warning-bg: var(--red-mid-dark);--btn-warning-bg-hover: var(--red-dark);--btn-warning-bg-active: var(--gray-dark);--btn-warning-divider: var(--red-60);--btn-disabled-text: var(--gray-dark);--btn-disabled-bg: var(--gray-20);--btn-disabled-outline: var(--gray-20);--btn-disabled-divider: var(--gray-60)}:host{--icon-text-divider-default: var(--pacific-60);--icon-text-divider-disabled: var(--gray-60);--icon-text-divider: var(--icon-text-divider-default)}:host .wrapper{display:-moz-box;display:flex;width:-moz-fit-content;width:fit-content;-moz-box-align:center;align-items:center;gap:.625rem}:host .left-divider:before,:host .right-divider:after{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host slot{display:contents}.left-divider ::slotted(svg:first-of-type){-moz-box-ordinal-group:0;order:-1}.right-divider ::slotted(svg:last-of-type){-moz-box-ordinal-group:2;order:1}:host([disabled]){--icon-text-divider: var(--icon-text-divider-disabled) !important}:host([icon-hidden]) ::slotted(svg){display:none!important}:host button.a-btn::-moz-focus-inner,:host input.a-btn::-moz-focus-inner{border:0}:host .a-btn{line-height:1.1875;-webkit-appearance:none;-moz-appearance:none;appearance:none;display:-moz-box;display:flex;gap:.625rem;-moz-box-sizing:border-box;box-sizing:border-box;padding:.5em .875em;border:0;margin:0;border-radius:.25em;cursor:pointer;font-size:1em;font-weight:500;text-align:center;text-decoration:none;-moz-transition:background-color .1s;transition:background-color .1s;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;-moz-box-pack:center;justify-content:center;-moz-box-align:center;align-items:center}:host .a-btn,:host .a-btn:link,:host .a-btn:visited{background-color:var(--btn-bg);color:var(--btn-text)}:host .a-btn:hover,:host .a-btn.hover,:host .a-btn:focus,:host .a-btn.focus{background-color:var(--btn-bg-hover);color:var(--btn-text)}:host .a-btn:focus,:host .a-btn.focus{outline:1px dotted var(--btn-bg);outline-offset:1px}:host .a-btn:active,:host .a-btn.active{background-color:var(--btn-bg-active)}:host .a-btn--secondary,:host .a-btn--secondary:link,:host .a-btn--secondary:visited{background-color:var(--btn-secondary-bg);color:var(--btn-secondary-text);box-shadow:0 0 0 1px var(--btn-secondary-border) inset}:host .a-btn--secondary:hover,:host .a-btn--secondary.hover,:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{background-color:var(--btn-secondary-bg-hover);color:var(--btn-secondary-text-hover);box-shadow:0 0 0 1px var(--btn-secondary-border-hover) inset}:host .a-btn--secondary:focus,:host .a-btn--secondary.focus{outline-color:var(--btn-secondary-border)}:host .a-btn--secondary:active,:host .a-btn--secondary.active{background-color:var(--btn-secondary-bg-active);color:var(--btn-secondary-text-active);box-shadow:0 0 0 1px var(--btn-secondary-border-active) inset}:host .a-btn--warning,:host .a-btn--warning:link,:host .a-btn--warning:visited{background-color:var(--btn-warning-bg);color:var(--btn-warning-text)}:host .a-btn--warning:hover,:host .a-btn--warning.hover,:host .a-btn--warning:focus,:host .a-btn--warning.focus{background-color:var(--btn-warning-bg-hover)}:host .a-btn--warning:focus,:host .a-btn--warning.focus{outline-color:var(--btn-warning-bg)}:host .a-btn--warning:active,:host .a-btn--warning.active{background-color:var(--btn-warning-bg-active)}:host .a-btn--disabled,:host .a-btn--disabled:link,:host .a-btn--disabled:visited,:host .a-btn--disabled:hover,:host .a-btn--disabled.hover,:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn--disabled:active,:host .a-btn--disabled.active,:host .a-btn[disabled],:host .a-btn[disabled]:link,:host .a-btn[disabled]:visited,:host .a-btn[disabled]:hover,:host .a-btn[disabled].hover,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[disabled]:active,:host .a-btn[disabled].active,:host .a-btn[aria-disabled=true],:host .a-btn[aria-disabled=true]:link,:host .a-btn[aria-disabled=true]:visited,:host .a-btn[aria-disabled=true]:hover,:host .a-btn[aria-disabled=true].hover,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus,:host .a-btn[aria-disabled=true]:active,:host .a-btn[aria-disabled=true].active{background-color:var(--btn-disabled-bg);color:var(--btn-disabled-text);box-shadow:none;cursor:not-allowed}:host .a-btn--disabled:focus,:host .a-btn--disabled.focus,:host .a-btn[disabled]:focus,:host .a-btn[disabled].focus,:host .a-btn[aria-disabled=true]:focus,:host .a-btn[aria-disabled=true].focus{outline-color:var(--btn-disabled-outline)}@media only screen and (max-width:37.5em){:host .a-btn--full-on-xs{width:100%}}:host .a-btn:has(svg+span) span{-moz-box-ordinal-group:4;order:3}:host .a-btn:has(span+svg) svg{-moz-box-ordinal-group:4;order:3;-moz-box-flex:0;flex:none}:host .a-btn:not(.a-btn--hide-icon):has(svg+span):before,:host .a-btn:not(.a-btn--hide-icon):has(span+svg):before{content:\"\";border-left:1px solid var(--icon-text-divider);place-self:normal}:host .a-btn--secondary:has(svg):before{border-color:var(--btn-secondary-divider)!important}:host .a-btn--warning:has(svg):before{border-color:var(--btn-warning-divider)!important}:host .a-btn--disabled:has(svg):before,:host .a-btn[disabled]:has(svg):before,:host .a-btn[aria-disabled=true]:has(svg):before{border-color:var(--btn-disabled-divider)!important}:host .a-btn--hide-icon svg{display:none}:host ::slotted(ul),:host ::slotted(ol){display:none!important}:host button{line-height:1.1875}:host .o-form-search{position:relative;display:-moz-box;display:flex;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;row-gap:.9375rem}@media only screen and (min-width:37.5625em){:host .o-form-search{-moz-box-orient:horizontal;-moz-box-direction:normal;flex-direction:row;border-left:0}:host .o-form-search button[type=submit]{border-top-left-radius:0;border-bottom-left-radius:0;flex-basis:25%}}:host .o-form-search .container{position:relative;width:100%}:host .o-form-search .popup{display:none;position:absolute;top:34px;z-index:100;background:#fff;border:1px solid var(--pacific);border-top:0;width:-moz-calc(100% - 2px);width:calc(100% - 2px)}:host .o-form-search .popup:after{position:absolute;content:\"\";display:block;width:100%;height:1px;bottom:-1px;border-bottom:1px solid var(--pacific)}:host .o-form-search .popup.show{display:block}`, Sr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}.a-text-input{--input-text: var(--input-text-default);--input-text-disabled: var(--input-text-disabled-default);--input-text-placeholder: var(--input-text-placeholder-default);--input-border: var(--input-border-default);--input-border-hover: var(--input-border-hover-default);--input-border-focus: var(--input-border-focus-default);--input-bg: var(--input-bg-default);--input-bg-disabled: var(--input-bg-disabled-default);-webkit-appearance:none;-moz-appearance:none;appearance:none;display:inline-block;padding:.4375em;border:1px solid var(--input-border);outline:0 solid var(--input-border);background:var(--input-bg);color:var(--input-text);-moz-box-sizing:border-box;box-sizing:border-box}.a-text-input:hover,.a-text-input.hover{border-color:var(--input-border-hover);outline:1px solid var(--input-border-hover)}.a-text-input:focus,.a-text-input.focus{border-color:var(--input-border-focus);box-shadow:0 0 0 1px var(--input-border-focus);outline:1px dotted var(--input-border-focus);outline-offset:2px}.a-text-input:disabled{--input-border: var(--input-border-disabled)}.a-text-input:disabled,.a-text-input:disabled:hover,.a-text-input:disabled.hover,.a-text-input:disabled:focus,.a-text-input:disabled.focus{color:var(--input-text-disabled);background-color:var(--input-bg-disabled);cursor:not-allowed;border-color:var(--input-border);outline:none}.a-text-input--error,.a-text-input--warning,.a-text-input--success{outline-width:1px}.a-text-input--error{--input-border: var(--input-border-error)}.a-text-input--warning{--input-border: var(--input-border-warning)}.a-text-input--success{--input-border: var(--input-border-success)}::-webkit-search-decoration{-webkit-appearance:none;appearance:none}::placeholder{color:var(--input-text-placeholder)}input[type=date]::-webkit-datetime-edit{color:var(--input-text-placeholder)}.cf-icon-svg{height:1.1875em;vertical-align:middle;fill:currentcolor}.cf-icon-svg--updating,.cf-icon-svg--updating-round{-moz-animation:updating-animation 1.25s infinite linear;animation:updating-animation 1.25s infinite linear;-moz-transform-origin:50% 50%;transform-origin:50% 50%}@-moz-keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{-moz-transform:scaleX(-1);transform:scaleX(-1)}:host{--input-border-default: var(--gray-60);--input-border-disabled: var(--gray-60);--input-border-success: var(--green);--input-border-warning: var(--gold);--input-border-error: var(--red);--input-border: var(--input-border-default);display:-moz-box;display:flex}:host .o-search-input{position:relative;display:-moz-box;display:flex;width:initial;-moz-box-flex:0;flex:0 1 100%;-moz-box-align:center;align-items:center;min-width:300px;background:var(--white);border:1px solid var(--input-border);outline:0 solid var(--input-border)}:host .o-search-input label{position:absolute;left:10px;cursor:pointer}:host .o-search-input input{line-height:1.1875}:host .o-search-input input[type=search]{font-size:1rem;width:100%;white-space:nowrap;padding-left:30px;cursor:text;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;outline:none}:host .o-search-input button[type=reset]{display:none;align-self:center;color:var(--gray-40);font-size:20px;border:1px solid transparent;background-color:transparent;outline:0;width:44px;text-align:right}:host .o-search-input button[type=reset]>svg{width:25px;pointer-events:none}:host .o-search-input button[type=reset]:hover{color:var(--black);cursor:pointer}:host .o-search-input button[type=reset]:focus{color:var(--black)}:host .o-search-input button[type=reset]:focus>svg{outline:1px dotted var(--pacific)}:host .o-search-input input[type=search]:-moz-placeholder~button[type=reset]{display:none}:host .o-search-input input[type=search]:placeholder-shown~button[type=reset]{display:none}:host .o-search-input input[type=search]::-webkit-search-decoration,:host .o-search-input input[type=search]::-webkit-search-cancel-button,:host .o-search-input input[type=search]::-webkit-search-results-button,:host .o-search-input input[type=search]::-webkit-search-results-decoration{display:none}:host .o-search-input:hover,:host .o-search-input:focus-within{border:1px solid var(--pacific);box-shadow:0 0 0 1px var(--pacific);outline-color:var(--pacific)}:host .o-search-input:hover input[type=search],:host .o-search-input:focus-within input[type=search]{outline:none;padding-right:0}:host .o-search-input:focus-within{outline:1px dotted var(--pacific);outline-offset:2px}:host .o-search-input--error,:host .o-search-input--warning,:host .o-search-input--success{outline-width:1px}:host .o-search-input--error{--input-border: var(--input-border-error)}:host .o-search-input--warning{--input-border: var(--input-border-warning)}:host .o-search-input--success{--input-border: var(--input-border-success)}:host .o-search-input:focus-within button[type=reset],:host .o-search-input:hover button[type=reset]{display:-moz-box;display:flex;-moz-box-pack:end;justify-content:flex-end}:host .no-js .o-search-input button[type=reset]{display:none!important}:host([borderless]) .o-search-input{border-color:transparent}:host([borderless]) .o-search-input input{padding-top:.3125em;padding-bottom:.3125em}:host([borderless]) .o-search-input:hover,:host([borderless]) .o-search-input:focus-within{border-color:transparent;box-shadow:0 0 0 1px transparent;outline-color:transparent}:host([disabled]){--input-border: var(--input-border-disabled)}:host([disabled]) .o-search-input label,:host([disabled]) .o-search-input input[type=search]{color:var(--input-border)}:host([disabled]) .o-search-input:hover{border:1px solid var(--input-border);box-shadow:none}:host([disabled]) .o-search-input:hover label,:host([disabled]) .o-search-input:hover input[type=search]{cursor:not-allowed}:host([disabled]) .o-search-input:hover button[type=reset]{display:none}:host([disabled]) .o-search-input--error:hover,:host([disabled]) .o-search-input--warning:hover,:host([disabled]) .o-search-input--success:hover{outline-color:var(--input-border)}`, $r = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--search" viewBox="0 0 15 19"><path d="M14.147 15.488a1.11 1.11 0 0 1-1.567 0l-3.395-3.395a5.575 5.575 0 1 1 1.568-1.568l3.394 3.395a1.11 1.11 0 0 1 0 1.568m-6.361-3.903a4.488 4.488 0 1 0-1.681.327 4.4 4.4 0 0 0 1.68-.327z"/></svg>';
class Pe extends E {
  static styles = Sr;
  /**
   * @property {boolean} disabled - Whether the input is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @property {string} label - The aria-label for the input.
   * @property {string} name - The name within a form.
   * @property {string} value - The value within the input.
   * @property {number} maxlength - The maximum characters allowed in the input.
   * @property {string} placeholder - The placeholder value.
   * @property {string} ariaLabelInput - aria-label for input.
   * @property {string} ariaLabelButton - aria-label for button.
   * @property {boolean} borderless - Whether the input has a border or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    disabled: { type: Boolean, reflect: !0 },
    validation: { type: String, reflect: !0 },
    label: { type: String },
    name: { type: String },
    title: { type: String, attribute: !0 },
    value: { type: String },
    maxlength: { type: Number, reflect: !0 },
    placeholder: { type: String },
    ariaLabelInput: { type: String, attribute: "aria-label-input" },
    ariaLabelButton: { type: String, attribute: "aria-label-button" },
    borderless: { type: Boolean, reflect: !0 }
  };
  #e;
  constructor() {
    super(), this.label = "Search", this.name = "", this.title = "Search", this.value = "", this.maxlength = 75, this.placeholder = "", this.ariaLabelInput = "Search input", this.ariaLabelButton = "Clear search", this.disabled = !1, this.#e = T(), this.borderless = !1;
  }
  #t(e) {
    this.value = e.target.value;
  }
  #a(e) {
    e.key === "Enter" && this.dispatchEvent(
      new CustomEvent("enter-down", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  #i() {
    this.dispatchEvent(
      new Event("blur", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  #r(e) {
    e.preventDefault(), !this.disabled && (this.value = "", this.#e.value?.focus(), this.dispatchEvent(
      new CustomEvent("clear", { detail: "", bubbles: !0, composed: !0 })
    ));
  }
  focus() {
    this.#e.value.focus();
  }
  render() {
    return x`
      <div
        class="o-search-input ${this.validation ? `o-search-input--${this.validation}` : ""}"
      >
        <label
          for="search-text"
          class="o-search-input__input-label"
          aria-label=${this.label}
        >
          ${X($r)}
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
          ${O(this.#e)}
          @input=${this.#t}
          @keydown=${this.#a}
          @blur=${this.#i}
        />
        <button
          type="reset"
          aria-label=${this.ariaLabelButton}
          title=${this.ariaLabelButton}
          @click=${this.#r}
        >
          ${X(dt)}
        </button>
      </div>
    `;
  }
  static init() {
    window.customElements.get("cfpb-form-search-input") || window.customElements.define(
      "cfpb-form-search-input",
      Pe
    );
  }
}
class Yt {
  constructor(e = [], t = {}) {
    this.items = e, this.fields = t.fields || null;
  }
  setItems(e) {
    this.items = e;
  }
  search(e) {
    if (!e || e.trim() === "") return this.items;
    const t = e.toLowerCase();
    return this.items.filter((i) => typeof i == "string" ? i.toLocaleLowerCase().includes(t) : typeof i == "object" && this.fields ? this.fields.some((n) => {
      const s = i[n];
      return typeof s == "string" && s.toLowerCase().includes(t);
    }) : Object.values(i).some((n) => typeof n == "string" ? n.toLowerCase().includes(t) : !1));
  }
}
class Jt extends E {
  static styles = Er;
  static formAssociated = !0;
  /**
   * @property {boolean} disabled - Whether the choice is disabled or not.
   * @property {string} validation - Validation style: error, warning, success.
   * @property {string} label - The aria-label for the input.
   * @property {string} name - The name within a form.
   * @property {string} value - The value within the input.
   * @property {string} placeholder - The placeholder value.
   * @property {string} maxlength - The maximum characters allowed in the input.
   * @property {string} ariaLabelInput - aria-label for input.
   * @property {string} ariaLabelButton - aria-label for button.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      disabled: { type: Boolean },
      validation: { type: String },
      label: { type: String },
      name: { type: String },
      title: { type: Boolean, attribute: !0 },
      value: { type: String },
      maxlength: { type: Number },
      placeholder: { type: String },
      ariaLabelInput: { type: String, attribute: "aria-label-input" },
      ariaLabelButton: { type: String, attribute: "aria-label-button" },
      searchList: { type: Array }
    };
  }
  #e = T();
  #t = T();
  #a;
  #i;
  constructor() {
    super(), this.value = "", this.#a = this.attachInternals(), this.searchList = [];
  }
  #r(e) {
    const a = e.target.assignedNodes({ flatten: !0 }).filter(
      (o) => o.nodeType === Node.ELEMENT_NODE && (o.tagName === "UL" || o.tagName === "OL")
    );
    if (!a || !a[0])
      return;
    const i = [...a[0].querySelectorAll("li")].map((o) => {
      const n = o.querySelector("a");
      return n ? {
        value: n.textContent.trim(),
        href: n.getAttribute("href")
      } : { value: o.textContent.trim() };
    });
    this.searchList = i, this.#i = new Yt(
      i.map((o) => o.value)
    );
  }
  #o() {
    this.value = "", this.#t.value.classList.remove("show"), this.#e.value.showAllItems();
  }
  #n(e) {
    e.target.value.length > 1 ? (this.#t.value.classList.add("show"), this.#i && this.#e.value.filterItems(this.#i.search(e.target.value))) : this.#t.value.classList.remove("show"), this.value = e.target.value;
  }
  #d(e) {
    this.#s(e);
  }
  #l() {
    this.#t.value.classList.remove("show");
  }
  get isSearchDisabled() {
    return this.disabled || this.isOverMaxLength;
  }
  get isOverMaxLength() {
    const e = this.value.length > this.maxlength;
    return e ? this.validation = "error" : this.validation = "", e;
  }
  #s(e) {
    e.preventDefault(), !this.disabled && (this.#a.setFormValue(this.value), this.#a.form?.requestSubmit());
  }
  render() {
    return x` <!--Light DOM content-->
      <slot @slotchange=${this.#r}></slot>

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
            @clear=${this.#o}
            @input=${this.#n}
            @enter-down=${this.#d}
            @blur=${this.#l}
          ></cfpb-form-search-input>

          <div class="popup" ${O(this.#t)}>
            <cfpb-list .childData=${this.searchList} ${O(this.#e)}>
            </cfpb-list>
          </div>
        </div>

        <button
          class="a-btn"
          type="submit"
          aria-label="Search for term(s)"
          ?disabled=${this.isSearchDisabled}
          @click=${this.#s}
        >
          Search
        </button>
      </div>

      ${this.isOverMaxLength ? x`<cfpb-form-alert validation="error">
            Searches are limited to ${this.maxlength} characters.
          </cfpb-form-alert>` : null}`;
  }
  static init() {
    Pe.init(), De.init(), ft.init(), window.customElements.get("cfpb-form-search") || window.customElements.define("cfpb-form-search", Jt);
  }
}
const Ar = A`:host{display:inline-block;width:24px;height:13px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAZCAMAAABAf11LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5QTFRF////sxlC7MbQ2YyhxlNxCjFhR2WJV3GSKUt1dYumOFh/GT5rhZiwwszYsr/OlKW6Zn6c0djh8PL1iR9Ko7LE4OXrl0pttKC0pXWRtYKbSuJhRQAAANFJREFUeNrkkctuwyAUREnSuW/ApHYf//+jBVdZVcJi3aORgAXcMyLBAAJEzsVG3m8TkifyI3zfPQ6nJJLo421CArSBmkgjNEWtQE4zXJmClXuCWIlU5hdQxCqbqnE1KdIz79CVDvBwZxyKfQfmHTyzl01UZSvOWSTbhZLSWeDMufWLC/1ls3amT4qQq394EjIjApxBT+/nr8eEBNuKcB9SWMpmEXalNOylmlUZNTr4vE/4VdKhpC+leQf6y/e0wzL3RdJtkfUJyzwW+ZcdfgQYAJmJD3zerW6OAAAAAElFTkSuQmCC);background-size:contain;background-repeat:no-repeat}`;
class bt extends E {
  static styles = Ar;
  static init() {
    globalThis.customElements.get("cfpb-flag-usa") ?? globalThis.customElements.define("cfpb-flag-usa", bt);
  }
}
const Lr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:host .a-tagline{font-size:.75rem;display:grid;grid-template-columns:22px 1fr;-moz-column-gap:10px;column-gap:10px}:host .a-tagline__text{display:inline-block}:host .a-tagline cfpb-flag-usa{margin-top:1px}:host .a-tagline--large{font-size:1rem}:host .a-tagline--large cfpb-flag-usa{margin-top:4px}@media print{:host .a-tagline{-webkit-print-color-adjust:exact;print-color-adjust:exact}}:host .u-nowrap{white-space:nowrap}`;
class Qt extends E {
  static styles = Lr;
  /**
   * @property {boolean} isLarge - Whether to use the larger tagline appearance.
   * @returns {object} The map of properties.
   */
  static properties = {
    isLarge: { type: Boolean, reflect: !0 }
  };
  constructor() {
    super(), this.isLarge = !1;
  }
  render() {
    const e = ["a-tagline"];
    return this.isLarge && e.push("a-tagline--large"), x`
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
    bt.init(), globalThis.customElements.get("cfpb-tagline") ?? globalThis.customElements.define("cfpb-tagline", Qt);
  }
}
const Cr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:root{--btn-text: var(--white);--btn-bg: var(--pacific);--btn-bg-hover: var(--pacific-dark);--btn-bg-active: var(--navy);--btn-divider: var(--pacific-60);--btn-secondary-text: var(--pacific);--btn-secondary-text-hover: var(--pacific-dark);--btn-secondary-text-active: var(--navy);--btn-secondary-bg: var(--white);--btn-secondary-bg-hover: var(--pacific-10);--btn-secondary-bg-active: var(--pacific-20);--btn-secondary-border: var(--pacific);--btn-secondary-border-hover: var(--pacific-dark);--btn-secondary-border-active: var(--navy);--btn-secondary-divider: var(--pacific-60);--btn-warning-text: var(--white);--btn-warning-bg: var(--red-mid-dark);--btn-warning-bg-hover: var(--red-dark);--btn-warning-bg-active: var(--gray-dark);--btn-warning-divider: var(--red-60);--btn-disabled-text: var(--gray-dark);--btn-disabled-bg: var(--gray-20);--btn-disabled-outline: var(--gray-20);--btn-disabled-divider: var(--gray-60)}:host button{line-height:1.25;font-size:1rem;display:-moz-box;display:flex;gap:.625rem;-moz-box-align:center;align-items:center;border:1px solid var(--teal);padding:4px 6px;background-color:var(--teal-20);border-radius:.1875rem;color:var(--black);text-align:left;min-width:-moz-fit-content;min-width:fit-content}:host button:hover{background-color:var(--teal-40);cursor:pointer}:host button:focus{outline:1px dotted var(--teal);outline-offset:1px}:host button:active{background-color:var(--teal-60)}:host svg{pointer-events:none;-moz-box-flex:0;flex:none;height:1.1875rem}:host label{display:contents;pointer-events:none}`;
class ea extends E {
  static styles = Cr;
  /**
   * @property {string} for - Associate the label with an ID elsewhere.
   * @returns {object} The map of properties.
   */
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
    this.dispatchEvent(
      new CustomEvent("tag-click", {
        detail: { target: this },
        bubbles: !1,
        composed: !1
      })
    );
  }
  #t() {
    const e = this.shadowRoot.querySelector("slot");
    this.value = e.assignedNodes({ flatten: !0 }).map((t) => t.textContent.trim()).join(" ");
  }
  render() {
    const e = this.for === "" ? x`<slot @slotchange=${this.#t}></slot>` : x`<label for=${this.for}><slot></slot></label>`;
    return x`<button @click=${this.#e}>
      ${e} ${sr(dt)}
    </button>`;
  }
  static init() {
    window.customElements.get("cfpb-tag-filter") || window.customElements.define("cfpb-tag-filter", ea);
  }
}
const Tr = A`@charset \"UTF-8\";html{font-family:sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}body{color:var(--text);font-family:var(--font-stack);font-size:100%;font-size-adjust:var(--font-adjust-body);line-height:1.375;-webkit-font-smoothing:antialiased}button,input,select,textarea{font-family:var(--font-stack);line-height:1.1875;font-size-adjust:var(--font-adjust-body)}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size:2.125em;font-size-adjust:var(--font-adjust-h1);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.4411764706em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7647058824em}@media only screen and (max-width:37.5em){p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}@media only screen and (max-width:37.5em){h1,.h1{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}h2,.h2{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.7307692308em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.1538461538em}@media only screen and (max-width:37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.3636363636em}}@media only screen and (max-width:37.5em){h2,.h2{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.3636363636em}}h3,.h3{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.3636363636em}@media only screen and (max-width:37.5em){h3,.h3{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.6666666667em}}h4,.h4{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:500;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.6666666667em}@media only screen and (max-width:37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size:.875em;font-size-adjust:var(--font-adjust-h5);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.0714285714em}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.1428571429em}h6,.h6{font-size:.75em;font-size-adjust:var(--font-adjust-h6);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.25em}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{margin-top:0;margin-bottom:15px;font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}@media only screen and (max-width:37.5em){.lead-paragraph{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}}.superheading{margin-bottom:.4166666667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);text-decoration-color:var(--link-underline);text-decoration-line:underline;text-decoration-thickness:1px;text-decoration-style:dotted;text-underline-offset:4.5px}a:visited,a.visited{text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline:thin dotted;outline-offset:1px}a:active,a.active{text-decoration-style:solid;text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none;list-style-image:none}caption{margin-bottom:.625em;text-align:left}th,td{padding:.625em}thead th,thead td{padding:.7142857143em;background:var(--table-head-bg);color:var(--table-head-text);font-size:1em;vertical-align:top}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{font-weight:600;text-align:left}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{margin:0;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit}blockquote{margin-right:.9375em;margin-left:.9375em}@media only screen and (min-width:37.5625em){blockquote{margin-right:1.875em;margin-left:1.875em}}img{max-width:100%}figure{margin-right:0;margin-left:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);border-radius:4px;color:var(--code-text);font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.2307692308em .2307692308em 0;font-size:.8125em}pre{display:block;padding:.625em .9375em;white-space:pre-wrap;overflow-wrap:break-word}pre code{padding:0;background-color:transparent}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";display:table;clear:both}.u-visually-hidden{position:absolute;width:1px;height:1px;border:0;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0)}@media only screen and (max-width:37.5em){.u-hide-on-mobile{display:none}}@media only screen and (min-width:37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{position:relative;padding-bottom:56.25%;height:0}.u-flexible-container__inner{position:absolute;top:0;left:0;width:100%;height:100%}.u-flexible-container--4-3{position:relative;padding-bottom:75%;height:0}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6666666667%}.u-w33pct{width:33.3333333333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{-moz-transition-duration:0s!important;transition-duration:0s!important}.u-move-transition{-moz-transition:transform .25s ease-out,-moz-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-moz-transform .25s ease-out}.u-move-to-origin{-moz-transform:translate3d(0,0,0);transform:translateZ(0)}.u-move-left{-moz-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-move-left-2x{-moz-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}.u-move-left-3x{-moz-transform:translate3d(-300%,0,0);transform:translate3d(-300%,0,0)}.u-move-right{-moz-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-move-up{-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-alpha-transition{-moz-transition:opacity .25s linear;transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{overflow:hidden;contain:paint;-moz-transition:max-height .2s ease-out;transition:max-height .2s ease-out}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host .a-tag-topic{text-decoration:none;display:-moz-box;display:flex;gap:.3125rem}:host .a-tag-topic{font-size:.875rem;font-weight:600;text-transform:uppercase;color:var(--gold-80);letter-spacing:1px}:host .a-tag-topic .a-tag-topic__text{color:var(--gray);word-break:break-word}@media only screen and (max-width:37.5em){:host .a-tag-topic{position:relative;display:-moz-box;display:flex;-moz-box-align:center;align-items:center;gap:.3125rem;-moz-box-sizing:border-box;box-sizing:border-box;padding-top:.625em;padding-bottom:.625em;width:100%}:host .a-tag-topic .cf-icon-svg--right{margin-left:auto}:host .a-tag-topic .a-tag-topic__text{text-decoration:none;flex-shrink:10}}:host a.a-tag-topic{border-color:var(--gold-80);color:var(--gold-80);text-decoration-color:var(--gold-80)}:host a.a-tag-topic:visited,:host a.a-tag-topic.visited{text-decoration-color:var(--gold-80);color:var(--gold-80)}:host a.a-tag-topic:hover,:host a.a-tag-topic.hover{text-decoration-color:var(--gold-80);color:var(--gold-80)}:host a.a-tag-topic:focus,:host a.a-tag-topic.focus{text-decoration-color:var(--gold-80);color:var(--gold-80)}:host a.a-tag-topic:active,:host a.a-tag-topic.active{text-decoration-color:var(--gold-80);color:var(--gold-80)}:host a.a-tag-topic .a-tag-topic__text{border-bottom-color:var(--gold-80)}@media only screen and (max-width:37.5em){:host a.a-tag-topic{text-decoration:none;border-top-style:dotted;border-bottom-style:dotted;border-top-width:1px;border-bottom-width:1px}:host a.a-tag-topic:hover{border-top-style:solid;border-bottom-style:solid}:host a.a-tag-topic:focus{outline:none}:host a.a-tag-topic:focus:after{content:\"\";display:block;position:absolute;width:100%;height:100%;outline:1px dotted var(--gray);outline-offset:2px}}@media only screen and (max-width:37.5em){:host a.a-tag-topic--no-top-border{position:relative;border-top:none;border-top-style:none!important}:host a.a-tag-topic:hover:before,:host a.a-tag-topic:focus:before{position:absolute;top:-1px;content:\"\";display:block;height:1px;width:100%;border-top:1px solid currentcolor}}:host .a-tag-topic__bullet{font-size:1rem;line-height:1rem}@media only screen and (min-width:37.5625em){:host a.a-tag-topic__text{color:var(--gray);text-decoration-color:var(--gray)}:host a.a-tag-topic__text:visited,:host a.a-tag-topic__text.visited{text-decoration-color:var(--gray);color:var(--gray)}:host a.a-tag-topic__text:hover,:host a.a-tag-topic__text.hover{text-decoration-color:var(--gray);color:var(--gray)}:host a.a-tag-topic__text:focus,:host a.a-tag-topic__text.focus{text-decoration-color:var(--gray);color:var(--gray)}:host a.a-tag-topic__text:active,:host a.a-tag-topic__text.active{text-decoration-color:var(--gray);color:var(--gray)}:host a.a-tag-topic,:host a.a-tag-topic:visited,:host a.a-tag-topic:hover,:host a.a-tag-topic:focus,:host a.a-tag-topic:active{text-decoration:none;border-bottom:none;outline-offset:1px}:host a.a-tag-topic .a-tag-topic__text,:host a.a-tag-topic:visited .a-tag-topic__text,:host a.a-tag-topic:hover .a-tag-topic__text,:host a.a-tag-topic:focus .a-tag-topic__text,:host a.a-tag-topic:active .a-tag-topic__text{padding-bottom:1px;border-bottom:1px dotted var(--gold-80)}:host a.a-tag-topic:hover .a-tag-topic__text{border-bottom:1px solid var(--gold-80)}:host a.a-tag-topic:focus{outline-color:var(--gray)}:host a.a-tag-topic:focus .a-tag-topic__text{border-bottom-style:solid!important}}`;
class ta extends E {
  static styles = Tr;
  /**
   * @property {string} href - href attribute, if this is a topic link.
   * @property {boolean} siblingOfJumpLink
   *   Whether the preceding sibling is a jump link or not.
   * @returns {object} The map of properties.
   */
  static properties = {
    href: { type: String, reflect: !0 },
    siblingOfJumpLink: { type: Boolean }
  };
  /*
   * @property {string} href - The URL to link to (makes the tag a link).
   * @property {boolean} siblingOfJumpLink
   *   Whether the preceding sibling is a link or not. This is used to stack the
   *   divider lines between the links at mobile.
   */
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
    const e = x`<span class="a-tag-topic__bullet" aria-hidden="true"
      >•</span
    >`, t = this.href === "" ? x`<span class="a-tag-topic"
            >${e}<span class="a-tag-topic__text"><slot></slot></span
          ></span>` : x`<a class=${this.#e} href=${this.href}
            >${e}<span class="a-tag-topic__text"><slot></slot></span
          ></a>`;
    return x`${t}`;
  }
  static init() {
    window.customElements.get("cfpb-tag-topic") || window.customElements.define("cfpb-tag-topic", ta);
  }
}
const Or = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}:root{--btn-text: var(--white);--btn-bg: var(--pacific);--btn-bg-hover: var(--pacific-dark);--btn-bg-active: var(--navy);--btn-divider: var(--pacific-60);--btn-secondary-text: var(--pacific);--btn-secondary-text-hover: var(--pacific-dark);--btn-secondary-text-active: var(--navy);--btn-secondary-bg: var(--white);--btn-secondary-bg-hover: var(--pacific-10);--btn-secondary-bg-active: var(--pacific-20);--btn-secondary-border: var(--pacific);--btn-secondary-border-hover: var(--pacific-dark);--btn-secondary-border-active: var(--navy);--btn-secondary-divider: var(--pacific-60);--btn-warning-text: var(--white);--btn-warning-bg: var(--red-mid-dark);--btn-warning-bg-hover: var(--red-dark);--btn-warning-bg-active: var(--gray-dark);--btn-warning-divider: var(--red-60);--btn-disabled-text: var(--gray-dark);--btn-disabled-bg: var(--gray-20);--btn-disabled-outline: var(--gray-20);--btn-disabled-divider: var(--gray-60)}:host ul{padding-left:0;list-style-type:none}:host ul li{margin-bottom:0;display:contents}@media only screen and (min-width:37.5625em){:host ul{display:-moz-box;display:flex;gap:.9375rem;flex-wrap:wrap}:host ul[stacked]{-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column;width:-moz-fit-content;width:fit-content}}:host ul:has(cfpb-tag-filter){display:-moz-box;display:flex;gap:.9375rem;flex-wrap:wrap}:host html[lang=ar]{direction:rtl;padding-right:0}`, Xe = ["CFPB-TAG-FILTER", "CFPB-TAG-TOPIC"];
class pt extends E {
  static styles = Or;
  /**
   * @property {string} childData - Structure data to create child components.
   * @property {boolean} stacked - Whether to stack the tags vertically.
   * @property {Array} tagList - List of the tags in the tag group.
   * @returns {object} The map of properties.
   */
  static properties = {
    childData: { type: String, attribute: "childdata" },
    stacked: { type: Boolean, reflect: !0 },
    tagList: { type: Array }
  };
  // Private properties.
  #e;
  #t = !1;
  #a;
  constructor() {
    super(), this.childData = "", this.stacked = !1, this.tagList = [], this.#e = new MutationObserver(this.#d.bind(this));
  }
  connectedCallback() {
    super.connectedCallback(), this.#o();
  }
  disconnectedCallback() {
    this.#e.disconnect(), super.disconnectedCallback();
  }
  firstUpdated() {
    requestAnimationFrame(() => {
      Xe.forEach((e) => {
        this.querySelectorAll(`${e.toLowerCase()}`).forEach((a) => this.addTag(a));
      }), this.#t = !0;
    });
  }
  updated(e) {
    if (e.has("childData")) {
      const t = Zt(this.childData);
      t && this.#i(t);
    }
  }
  async focus() {
    await this.updateComplete;
    const e = this.tagList[0];
    e && e.focus();
  }
  #i(e) {
    Array.isArray(e) && (this.#r(), e.forEach((t, a) => {
      const i = document.createElement(t.tagName);
      t.text && (i.textContent = t.text), t.href && (i.href = t.href), this.addTag(i, a);
    }));
  }
  /**
   * Remove all previous tags from shadow DOM and light DOM.
   */
  #r() {
    this.#a && (this.#a.forEach((e) => {
      e.parentElement && e.remove();
    }), this.#a.clear()), [...this.children].forEach((e) => {
      Xe.includes(e.tagName) && e.remove();
    }), this.tagList = [];
  }
  /**
   * Set up a MutationObserver to watch changes in the light DOM.
   */
  #o() {
    this.#e.observe(this, {
      childList: !0,
      subtree: !1
    });
  }
  /**
   * Whether a particular node tagName is supported as a tag of this tag group.
   * @param {string} tagName - The name of a supported custom element tag.
   * @returns {boolean} true if the tagName is supported, false otherwise.
   */
  #n(e) {
    return Xe.includes(e);
  }
  /**
   * Handle a change of the light DOM.
   * @param {MutationRecord} mutationList - The record of observed DOM changes.
   */
  #d(e) {
    if (this.#t)
      for (const t of e)
        t.type === "childList" && (t.addedNodes.forEach((a) => this.#l(a)), t.removedNodes.forEach((a) => this.#s(a)));
  }
  /**
   * @param {Node} node - The node that was added to the light DOM.
   */
  #l(e) {
    if (this.#n(e.tagName)) {
      const t = Array.from(this.children).indexOf(e);
      this.addTag(e, t);
    }
  }
  /**
   * @param {Node} node - The node that was removed from the light DOM.
   */
  #s(e) {
    this.#n(e.tagName) && this.#b(e);
  }
  /**
   * Refresh the tagList property from the DOM list.
   */
  #h() {
    if (this.tagList = [...this.renderRoot.querySelectorAll("ul li > *")], this.tagList.length > 0) {
      let e = !1;
      this.tagList.forEach((t) => {
        e && (t.siblingOfJumpLink = !0, e = !1), t.href !== "" && (e = !0);
      });
    }
  }
  /**
   * Add a tag to the light and dark DOM.
   * @param {HTMLElement} tag - The tag to add.
   * @param {number} index - The position at which to add the tag.
   * @returns {boolean} false if the tag is already in the light DOM.
   */
  addTag(e, t = -1) {
    return Array.from(this.children).includes(e) ? (this.#f(e, t), this.#h(), !0) : (this.#c(e, t), !1);
  }
  /**
   * Add a tag to the light DOM.
   * @param {HTMLElement} tag - The tag to add.
   * @param {number} index - The position at which to add the tag.
   */
  #c(e, t) {
    t === -1 || t >= this.children.length ? this.appendChild(e) : this.insertBefore(e, this.children[t]);
  }
  /**
   * Add a tag to the shadow DOM.
   * @param {HTMLElement} tag - The tag to add.
   * @param {number} index - The position at which to add the tag.
   */
  #f(e, t) {
    const a = e.cloneNode(!0), i = document.createElement("li");
    i.appendChild(a);
    const o = this.shadowRoot.querySelector("ul");
    let n = t;
    t === -1 || t >= o.children.length ? (o.appendChild(i), n = o.children.length - 1) : o.insertBefore(i, o.children[t]), a.addEventListener("tag-click", () => {
      this.dispatchEvent(
        new CustomEvent("tag-click", {
          detail: { target: a, index: n },
          bubbles: !0,
          composed: !0
        })
      ), this.#b(a);
    }), this.#a ??= /* @__PURE__ */ new Map();
    const s = this.#u(e);
    this.#a.set(s, i), this.dispatchEvent(
      new CustomEvent("tag-added", {
        detail: { target: e, index: n },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * @param {HTMLElement} tag - The tag to add.
   * @returns {string} A unique ID.
   */
  #u(e) {
    return `${e.tagName}::${e.textContent.trim()}`;
  }
  /**
   * Remove a filter tag from the light DOM.
   * This is private because it's called by the mutation observer.
   * @param {HTMLElement} tag - The tag to remove.
   * @returns {boolean} false if the wrapped tag was not found.
   */
  #b(e) {
    const t = this.#u(e), a = this.#a.get(t);
    if (!a) return !1;
    let i = Array.from(this.children).indexOf(e);
    return i === -1 && a.parentElement && (i = Array.from(a.parentElement.children).indexOf(a)), e.parentElement === this && e.remove(), a.parentElement && a.remove(), this.#a.delete(t), this.dispatchEvent(
      new CustomEvent("tag-removed", {
        detail: { target: e, index: i },
        bubbles: !0,
        composed: !0
      })
    ), this.#h(), this.focus(), !0;
  }
  /**
   * Remove a filter tag from the light and dark DOM.
   * @param {HTMLElement} tag - The tag to remove.
   */
  removeTag(e) {
    const t = this.#p(e);
    this.#b(t);
  }
  /**
   * Get light and dark DOM.
   * @param {HTMLElement} tag - The tag to remove.
   * @returns {HTMLElement|null} The tag node.
   */
  #p(e) {
    return e.tagName === "LI" && e.shadowRoot ? e.querySelector("cfpb-tag-filter") : this.contains(e) ? e : null;
  }
  render() {
    return x`<ul ?stacked=${this.stacked}></ul>`;
  }
  static init() {
    window.customElements.get("cfpb-tag-group") || window.customElements.define("cfpb-tag-group", pt);
  }
}
const Ir = A`@charset \"UTF-8\";:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}html{font-family:sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%}body{margin:0}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:\"“\" \"”\" \"‘\" \"’\"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}figure{margin:0}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;-moz-appearance:button;appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;-moz-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}body{color:var(--text);font-family:var(--font-stack);font-size:100%;font-size-adjust:var(--font-adjust-body);line-height:1.375;-webkit-font-smoothing:antialiased}button,input,select,textarea{font-family:var(--font-stack);line-height:1.1875;font-size-adjust:var(--font-adjust-body)}input[type=date]{display:revert;min-width:100px;min-height:35px;padding-top:0;padding-bottom:0}input[type=date].a-text-input--full{min-width:100%}hr{border:none;border-top:1px solid var(--gray-40)}strong,b{font-weight:600}h1,h2,h3,h4,h5,h6{margin-top:0}h1,.h1{font-size:2.125em;font-size-adjust:var(--font-adjust-h1);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.4411764706em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7647058824em}@media only screen and (max-width:37.5em){p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h2+h1,.h2+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h2+.h1,.h2+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}@media only screen and (max-width:37.5em){h1,.h1{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h1,ul+h1,ol+h1,dl+h1,figure+h1,img+h1,table+h1,blockquote+h1,p+.h1,ul+.h1,ol+.h1,dl+.h1,figure+.h1,img+.h1,table+.h1,blockquote+.h1{margin-top:1.7307692308em}h1+h1,.h1+h1,h3+h1,.h3+h1,h4+h1,.h4+h1,h5+h1,.h5+h1,h6+h1,.h6+h1,h1+.h1,.h1+.h1,h3+.h1,.h3+.h1,h4+.h1,.h4+.h1,h5+.h1,.h5+.h1,h6+.h1,.h6+.h1{margin-top:1.1538461538em}}h2,.h2{font-size:1.625em;font-size-adjust:var(--font-adjust-h2);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.5769230769em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.7307692308em}h1+h2,.h1+h2,h3+h2,.h3+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,h1+.h2,.h1+.h2,h3+.h2,.h3+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.1538461538em}@media only screen and (max-width:37.5em){p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2{margin-top:1.3636363636em}}@media only screen and (max-width:37.5em){h2,.h2{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:600;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h2,ul+h2,ol+h2,dl+h2,figure+h2,img+h2,table+h2,blockquote+h2,h1+h2,.h1+h2,h2+h2,.h2+h2,h4+h2,.h4+h2,h5+h2,.h5+h2,h6+h2,.h6+h2,p+.h2,ul+.h2,ol+.h2,dl+.h2,figure+.h2,img+.h2,table+.h2,blockquote+.h2,h1+.h2,.h1+.h2,h2+.h2,.h2+.h2,h4+.h2,.h4+.h2,h5+.h2,.h5+.h2,h6+.h2,.h6+.h2{margin-top:1.3636363636em}}h3,.h3{font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.6818181818em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h4+h3,.h4+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h4+.h3,.h4+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.3636363636em}@media only screen and (max-width:37.5em){h3,.h3{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h3,ul+h3,ol+h3,dl+h3,figure+h3,img+h3,table+h3,blockquote+h3,h1+h3,.h1+h3,h2+h3,.h2+h3,h3+h3,.h3+h3,h5+h3,.h5+h3,h6+h3,.h6+h3,p+.h3,ul+.h3,ol+.h3,dl+.h3,figure+.h3,img+.h3,table+.h3,blockquote+.h3,h1+.h3,.h1+.h3,h2+.h3,.h2+.h3,h3+.h3,.h3+.h3,h5+.h3,.h5+.h3,h6+.h3,.h6+.h3{margin-top:1.6666666667em}}h4,.h4{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:500;letter-spacing:inherit;line-height:1.25;text-transform:inherit;margin-bottom:.8333333333em}p+h4,ul+h4,ol+h4,dl+h4,figure+h4,img+h4,table+h4,blockquote+h4,h1+h4,.h1+h4,h2+h4,.h2+h4,h3+h4,.h3+h4,h5+h4,.h5+h4,h6+h4,.h6+h4,p+.h4,ul+.h4,ol+.h4,dl+.h4,figure+.h4,img+.h4,table+.h4,blockquote+.h4,h1+.h4,.h1+.h4,h2+.h4,.h2+.h4,h3+.h4,.h3+.h4,h5+.h4,.h5+.h4,h6+.h4,.h6+.h4{margin-top:1.6666666667em}@media only screen and (max-width:37.5em){h4,.h4{margin-bottom:.625em;font-size:1em;line-height:1.125}}h5,.h5{font-size:.875em;font-size-adjust:var(--font-adjust-h5);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.0714285714em}p+h5,ul+h5,ol+h5,dl+h5,figure+h5,img+h5,table+h5,blockquote+h5,h1+h5,.h1+h5,h2+h5,.h2+h5,h3+h5,.h3+h5,h4+h5,.h4+h5,h6+h5,.h6+h5,p+.h5,ul+.h5,ol+.h5,dl+.h5,figure+.h5,img+.h5,table+.h5,blockquote+.h5,h1+.h5,.h1+.h5,h2+.h5,.h2+.h5,h3+.h5,.h3+.h5,h4+.h5,.h4+.h5,h6+.h5,.h6+.h5{margin-top:2.1428571429em}h6,.h6{font-size:.75em;font-size-adjust:var(--font-adjust-h6);font-weight:600;letter-spacing:1px;line-height:1.25;text-transform:uppercase;margin-bottom:1.25em}p+h6,ul+h6,ol+h6,dl+h6,figure+h6,img+h6,table+h6,blockquote+h6,h1+h6,.h1+h6,h2+h6,.h2+h6,h3+h6,.h3+h6,h4+h6,.h4+h6,h5+h6,.h5+h6,p+.h6,ul+.h6,ol+.h6,dl+.h6,figure+.h6,img+.h6,table+.h6,blockquote+.h6,h1+.h6,.h1+.h6,h2+.h6,.h2+.h6,h3+.h6,.h3+.h6,h4+.h6,.h4+.h6,h5+.h6,.h5+.h6{margin-top:2.5em}.lead-paragraph{margin-top:0;margin-bottom:15px;font-size:1.375em;font-size-adjust:var(--font-adjust-h3);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}@media only screen and (max-width:37.5em){.lead-paragraph{font-size:1.125em;font-size-adjust:var(--font-adjust-h4);font-weight:400;letter-spacing:inherit;line-height:1.25;text-transform:inherit}}.superheading{margin-bottom:.4166666667em;font-size:3em;font-weight:400;line-height:1.25}p,ul,ol,dl,figure,table,blockquote{margin-top:0;margin-bottom:.9375em}p:last-child,ul:last-child,ol:last-child,dl:last-child,figure:last-child,table:last-child,blockquote:last-child{margin-bottom:0}p+ul,p+ol{margin-top:-.3125em}ul ul,ol ol,ul ol,ol ul{margin-top:.5em}li{margin-bottom:.5em}li:last-child,nav li{margin-bottom:0}a{color:var(--link-text);text-decoration-color:var(--link-underline);text-decoration-line:underline;text-decoration-thickness:1px;text-decoration-style:dotted;text-underline-offset:4.5px}a:visited,a.visited{text-decoration-color:var(--link-underline-visited);color:var(--link-text-visited)}a:hover,a.hover{text-decoration-style:solid;text-decoration-color:var(--link-underline-hover);color:var(--link-text-hover)}a:focus,a.focus{outline:thin dotted;outline-offset:1px}a:active,a.active{text-decoration-style:solid;text-decoration-color:var(--link-underline-active);color:var(--link-text-active)}nav a{text-decoration-line:none}ul{padding-left:1.125em;list-style:square}ul ul{list-style-type:circle}ol{padding-left:1.3125em}ol li:nth-last-child(n+10),ol li:nth-last-child(n+10)~li{margin-left:.5625rem}ol ol{list-style-type:lower-alpha}ol ol li{margin-left:0!important}ol ol ol{list-style-type:lower-roman}nav ul,nav ol,nav ul ul,nav ol ol{list-style:none;list-style-image:none}caption{margin-bottom:.625em;text-align:left}th,td{padding:.625em}thead th,thead td{padding:.7142857143em;background:var(--table-head-bg);color:var(--table-head-text);font-size:1em;vertical-align:top}thead,tbody tr{border-bottom:1px solid var(--table-border)}th{font-weight:600;text-align:left}thead th h2,thead th .h2,thead th h3,thead th .h3,thead th h4,thead th .h4,thead th h5,thead th .h5,thead th h6,thead th .h6{margin:0;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;text-transform:inherit}blockquote{margin-right:.9375em;margin-left:.9375em}@media only screen and (min-width:37.5625em){blockquote{margin-right:1.875em;margin-left:1.875em}}img{max-width:100%}figure{margin-right:0;margin-left:0}figure img{vertical-align:middle}pre,code{background:var(--code-bg);border-radius:4px;color:var(--code-text);font-family:Input Mono,Consolas,Monaco,Courier New,monospace}code{padding:.2307692308em .2307692308em 0;font-size:.8125em}pre{display:block;padding:.625em .9375em;white-space:pre-wrap;overflow-wrap:break-word}pre code{padding:0;background-color:transparent}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";display:table;clear:both}.u-visually-hidden{position:absolute;width:1px;height:1px;border:0;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0)}@media only screen and (max-width:37.5em){.u-hide-on-mobile{display:none}}@media only screen and (min-width:37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{position:relative;padding-bottom:56.25%;height:0}.u-flexible-container__inner{position:absolute;top:0;left:0;width:100%;height:100%}.u-flexible-container--4-3{position:relative;padding-bottom:75%;height:0}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6666666667%}.u-w33pct{width:33.3333333333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.cf-icon-svg{height:1.1875em;vertical-align:middle;fill:currentcolor}.cf-icon-svg--updating,.cf-icon-svg--updating-round{-moz-animation:updating-animation 1.25s infinite linear;animation:updating-animation 1.25s infinite linear;-moz-transform-origin:50% 50%;transform-origin:50% 50%}@-moz-keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{-moz-transform:scaleX(-1);transform:scaleX(-1)}.u-no-animation{-moz-transition-duration:0s!important;transition-duration:0s!important}.u-move-transition{-moz-transition:transform .25s ease-out,-moz-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-moz-transform .25s ease-out}.u-move-to-origin{-moz-transform:translate3d(0,0,0);transform:translateZ(0)}.u-move-left{-moz-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-move-left-2x{-moz-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}.u-move-left-3x{-moz-transform:translate3d(-300%,0,0);transform:translate3d(-300%,0,0)}.u-move-right{-moz-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-move-up{-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-alpha-transition{-moz-transition:opacity .25s linear;transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{overflow:hidden;contain:paint;-moz-transition:max-height .2s ease-out;transition:max-height .2s ease-out}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}:host{--select-border-default: var(--gray-60);--select-border-width-default: 1px;--select-border-error: var(--red);--select-border-width-error: 2px;--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-bg-disabled-default: var(--gray-10);--select-icon-bg-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--select-border: var(--select-border-default);--select-border-width: var(--select-border-width-default);--select-border-hover: var(--select-border-hover-default);--select-border-focus: var(--select-border-focus-default)}:host ::slotted(ul),:host ::slotted(ol){display:none!important}:host ::-webkit-scrollbar{-webkit-appearance:none;appearance:none;width:7px}:host ::-webkit-scrollbar-thumb{background-color:var(--pacific-20);box-shadow:0 0 1px var(--gray-10)}:host button{line-height:1.3125;outline:none}:host .o-select{position:relative;display:grid;grid-template-columns:1fr 35px;min-height:33px;border:1px solid var(--select-border)}:host .o-select:hover{border-color:var(--select-border-hover);box-shadow:0 0 0 1px var(--select-border-hover)}:host .o-select:focus,:host .o-select:focus-within{outline:1px dotted var(--select-border-focus);outline-offset:2px;box-shadow:0 0 0 1px var(--select-border-focus)}:host .o-select__cues{padding:0;border:0;background-color:transparent;cursor:pointer;display:-moz-box;display:flex;-moz-box-pack:space-evenly;justify-content:space-evenly;-moz-box-align:center;align-items:center}:host .o-select__cues .o-select__cue-close,:host .o-select__cues .o-select__cue-open{display:none}:host .o-select__cues[aria-expanded=false] .o-select__cue-open{display:block;margin-top:-1px}:host .o-select__cues[aria-expanded=true] .o-select__cue-close{display:block;margin-top:-5px}:host .o-select .no-results{padding:6.5px 10px}:host .o-select button.o-select__cues{background:var(--select-icon-bg-default);border-left:1px solid var(--select-border-default)}:host .o-select__label{display:-moz-box;display:flex;-moz-box-pack:justify;justify-content:space-between;-moz-box-align:center;align-items:center;gap:10px;padding-left:.625em;cursor:pointer}:host .o-select__content{-moz-box-sizing:border-box;box-sizing:border-box;overflow-x:hidden;overflow-y:scroll;position:absolute;z-index:10;width:-moz-calc(100% + 2px);width:calc(100% + 2px);left:-1px;border:2px solid var(--pacific);background-color:var(--white);padding:0}:host .o-select__content:after{padding-bottom:.9375em;width:100%}:host .o-select--down:before{bottom:-1px}:host .o-select--down .o-select__content{border-top:0;top:35px}:host .o-select--up .o-select__content{border-bottom:0;top:unset}@media print{:host .o-select__cues[aria-expanded=true] :host .o-select__cue-close,:host .o-select__cues[aria-expanded=false] :host .o-select__cue-open{display:none}:host .o-select__content[aria-expanded=false]{display:block;max-height:99999px!important}}:host([open]) .o-select:before{position:absolute;z-index:11;content:\"\";display:block;width:100%;border-top:1px solid var(--select-border);pointer-events:none}html[lang=ar] :host .o-select__cues{text-align:left}`, Mr = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--down" viewBox="0 0 17 19"><path d="M8.5 15.313a1.03 1.03 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.03 1.03 0 0 1-.728.302"/></svg>', qr = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--up" viewBox="0 0 17 19"><path d="M15.3 15.32a1.03 1.03 0 0 1-.727-.302L8.5 8.946l-6.073 6.072a1.03 1.03 0 0 1-1.456-1.455l6.801-6.8a1.03 1.03 0 0 1 1.456 0l6.8 6.8a1.03 1.03 0 0 1-.727 1.757z"/></svg>';
class Nr {
  constructor({ list: e, displayLabel: t, header: a }) {
    this.list = e, this.displayLabel = t, this.header = a;
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
    const a = this.list.checkedItems[0]?.value ?? "";
    this.displayLabel && (this.displayLabel.textContent = a), t.optionList = t.optionList.map((i) => ({
      ...i,
      checked: i.value === a
    })), t.isExpanded = !1;
  }
  onKeyDown(e, t) {
    t.shadowRoot.activeElement.tagName === "BUTTON" && e.key === "ArrowDown" && (e.preventDefault(), t.isExpanded = !0, this.list.querySelector("cfpb-list-item")?.focus());
  }
}
class Dr {
  constructor({ list: e, input: t, tagGroup: a, flyout: i }) {
    this.list = e, this.input = t, this.tagGroup = a, this.flyout = i;
  }
  onFocus() {
    this.input.focus();
  }
  onBlur() {
  }
  onClick(e, t) {
    e.currentTarget.tagName === "CFPB-FORM-SEARCH-INPUT" ? t.isExpanded ? this.flyout()?.suspend() : this.flyout()?.expand() : this.flyout()?.resume();
  }
  onItemClick(e, t) {
    t.optionList = this.list.childData ?? [], e.currentTarget.focusItemAt(e.detail.index);
  }
  async onTagClick(e, t, a) {
    const i = this.tagGroup.tagList.filter((o) => o !== e.detail.target) ?? [];
    t.optionList = t.optionList.map((o) => ({
      ...o,
      checked: i.some((n) => n.value === o.value)
    })), await t.updateComplete, a.focus();
  }
  onKeyDown(e, t) {
    const a = t.shadowRoot.activeElement.tagName;
    if (a === "CFPB-FORM-SEARCH-INPUT")
      switch (e.key) {
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
    else a === "CFPB-LIST-ITEM" && e.key === "Tab" && e.shiftKey && this.list.focusedIndex === 0 && (e.preventDefault(), this.list.focusItemAt(-1), this.input.focus());
    e.key === "Escape" && (e.preventDefault(), t.isExpanded = !1);
  }
}
class aa extends E {
  static styles = Ir;
  #e;
  #t;
  #a;
  #i;
  #r = T();
  #o = T();
  #n = T();
  #d = T();
  #l = T();
  #s = T();
  #h = T();
  #c;
  #f = !1;
  /**
   * @property {boolean} multiple - Whether the select supports multiple or not.
   * @property {boolean} isExpanded - Whether the select is expanded or not.
   * @property {Array} selectedTexts - Text of selected options.
   * @returns {object} The map of properties.
   */
  static get properties() {
    return {
      multiple: { type: Boolean, reflect: !0 },
      disabled: { type: Boolean },
      validation: { type: String },
      label: { type: String },
      name: { type: String },
      title: { type: Boolean, attribute: !0 },
      value: { type: String },
      maxlength: { type: Number },
      placeholder: { type: String },
      ariaLabelInput: { type: String, attribute: "aria-label-input" },
      ariaLabelList: { type: String, attribute: "aria-label-list" },
      isExpanded: { type: Boolean, attribute: "open", reflect: !0 },
      selectedTexts: { type: Array },
      optionList: { type: Array }
    };
  }
  constructor() {
    super(), this.multiple = !1, this.options = [], this.selectedTexts = [], this.optionList = [], this.#c = this.#u.bind(this);
  }
  firstUpdated() {
    this.#m(), this.addEventListener("focus", () => {
      this.#e.onFocus();
    }), this.addEventListener("blur", () => {
      this.#e.onBlur(this);
    }), this.addEventListener("keydown", (e) => {
      this.#e.onKeyDown(e, this);
    });
  }
  disconnectedCallback() {
    document.removeEventListener("pointerdown", this.#c), document.removeEventListener("focusin", this.#c), super.disconnectedCallback();
  }
  #u(e) {
    e.composedPath().includes(this) || (this.isExpanded = !1);
  }
  #b(e) {
    const a = e.target.assignedNodes({ flatten: !0 }).filter(
      (o) => o.nodeType === Node.ELEMENT_NODE && (o.tagName === "UL" || o.tagName === "OL")
    );
    if (!a || !a[0])
      return;
    const i = [...a[0].querySelectorAll("li")].map((o) => {
      const n = o.hasAttribute("data-checked") || o.hasAttribute("checked"), s = o.textContent.trim();
      return n ? (this.multiple || (this.#h.value.textContent = s), {
        value: s,
        checked: "true"
      }) : { value: s };
    });
    this.optionList = i, this.#i = new Yt(
      i.map((o) => o.value)
    );
  }
  #p(e) {
    this.#t.suspend(), this.isExpanded || (this.isExpanded = !0), this.#s.value.filterItems(
      this.#i.search(e.target.value)
    ).length === 0 ? (this.#f = !0, this.requestUpdate()) : (this.#f = !1, this.requestUpdate(), this.#t.resume());
  }
  #v() {
    this.#t.suspend(), this.isExpanded = !1, this.#s.value.showAllItems(), this.#f = !1, this.requestUpdate(), this.#t.resume();
  }
  #m() {
    const e = this.#r.value, t = this.#n.value, a = this.isExpanded ? I.CLASSES.MH_DEFAULT : I.CLASSES.MH_ZERO;
    this.#a = new I(t).init(a), this.#t = new ce(e), this.#t.setTransition(
      this.#a,
      this.#a.maxHeightZero,
      this.#a.maxHeightDynamic
    ), this.#t.init(this.isExpanded), this.#t.addEventListener("expandbegin", () => {
      this.isExpanded = !0, t.classList.remove("u-hidden"), this.dispatchEvent(
        new CustomEvent("expandbegin", {
          detail: { target: this },
          bubbles: !0,
          composed: !0
        })
      );
    }), this.#t.addEventListener("collapseend", () => {
      this.isExpanded = !1, t.classList.add("u-hidden"), this.#r.value.classList.remove("o-select--up"), this.#r.value.classList.remove("o-select--down");
    }), this.#a.addEventListener("transitiondir", (i) => {
      this.#r.value.classList.add(`o-select--${i.dir}`);
    });
  }
  updated(e) {
    if (e.has("multiple") && (this.#e = this.#y()), e.has("isExpanded")) {
      const t = e.get("isExpanded"), a = this.isExpanded;
      a !== t && (a ? (this.#t.expand(), document.addEventListener("pointerdown", this.#c), document.addEventListener("focusin", this.#c)) : (this.#t.collapse(), document.removeEventListener(
        "pointerdown",
        this.#c
      ), document.removeEventListener("focusin", this.#c)));
    }
  }
  #y() {
    const e = {
      list: this.#s.value,
      flyout: () => this.#t
    };
    return this.multiple ? new Dr({
      ...e,
      input: this.#d.value,
      tagGroup: this.#l.value
    }) : new Nr({
      ...e,
      displayLabel: this.#h.value,
      header: this.#o.value
    });
  }
  #g(e) {
    this.#e?.onClick(e, this);
  }
  #x(e) {
    this.#e?.onItemClick(e, this);
  }
  #k(e) {
    this.#e?.onTagClick(e, this, this.#l.value);
  }
  render() {
    return x`
      <!--Light DOM content-->
      <slot @slotchange=${this.#b}></slot>

      ${this.multiple ? x`<cfpb-tag-group
            ${O(this.#l)}
            .childData=${this.optionList.filter((e) => e.checked).map((e) => ({ text: e.value, tagName: "cfpb-tag-filter" }))}
            @tag-click=${this.#k}
          >
          </cfpb-tag-group>` : _}

      <div
        class="o-select"
        data-js-hook="behavior_flyout-menu"
        ${O(this.#r)}
      >
        ${this.#w()}

        <button
          tabindex=${this.multiple ? "-1" : "0"}
          class="o-select__cues"
          title="Expand content"
          data-js-hook="behavior_flyout-menu_trigger"
          ${O(this.#o)}
          @click=${this.#g}
        >
          <span class="o-select__cue-open" role="img" aria-label="Show">
            ${X(Mr)}
            <span class="u-visually-hidden">Show</span>
          </span>
          <span class="o-select__cue-close" role="img" aria-label="Hide">
            ${X(qr)}
            <span class="u-visually-hidden">Hide</span>
          </span>
        </button>
        <div
          class="o-select__content"
          data-js-hook="behavior_flyout-menu_content"
          ${O(this.#n)}
        >
          <cfpb-list
            tabindex=${this.#f ? "-1" : "0"}
            @item-click=${this.#x}
            ?multiple=${this.multiple}
            .childData=${this.optionList}
            type=${this.multiple ? "checkbox" : "check"}
            aria-label=${this.ariaLabelList ? this.ariaLabelList : "Choose an item…"}
            ${O(this.#s)}
          >
          </cfpb-list>
          <div class=${this.#f ? "no-results" : "u-hidden"}>
            No results found
          </div>
        </div>
      </div>
    `;
  }
  #w() {
    return this.multiple ? x`
          <cfpb-form-search-input
            ${O(this.#d)}
            borderless
            ?name=${this.name}
            ?value=${this.value}
            ?placeholder=${this.placeholder}
            title=${this.title}
            ?maxlength=${this.maxlength}
            aria-label=${this.ariaLabelInput}
            ?validation=${this.validation}
            @clear=${this.#v}
            @input=${this.#p}
            @click=${this.#g}
          ></cfpb-form-search-input>
        ` : x`<div
          class="o-select__label"
          ${O(this.#h)}
          @click=${this.#g}
        ></div>`;
  }
  static init() {
    Pe.init(), De.init(), pt.init(), window.customElements.get("cfpb-select") || window.customElements.define("cfpb-select", aa);
  }
}
const Pr = A`:root{--beige: #bea96f;--gold-dark: #dc731c;--gold-mid-dark: #ed881b;--gold: #ff9e1b;--gold-90: #ffab39;--gold-80: #ffb858;--gold-70: #ffc372;--gold-60: #ffce8d;--gold-50: #ffd8a3;--gold-40: #ffe1b9;--gold-30: #ffe8cb;--gold-20: #fff0dd;--gold-10: #fff6ec;--white: #ffffff;--black: #101820;--gray-darker: #293037;--gray-dark: #43484e;--gray-mid-dark: #4f5257;--gray: #5a5d61;--gray-90: #676a6f;--gray-80: #75787b;--gray-70: #838588;--gray-60: #919395;--gray-50: #a2a3a4;--gray-40: #b4b5b6;--gray-30: #c3c4c4;--gray-20: #d2d3d5;--gray-15: #dcdddf;--gray-10: #e7e8e9;--gray-5: #f7f8f9;--beige-30: #f0e8d8;--beige-60: #d8c8a0;--green-dark: #1e9642;--green-mid-dark: #1fa040;--green: #20aa3f;--green-90: #48b753;--green-80: #66c368;--green-70: #93cf7c;--green-60: #addc91;--green-50: #bae0a2;--green-40: #c7e5b3;--green-30: #d4eac6;--green-20: #e2efd8;--green-10: #f0f8eb;--navy-dark: #002d72;--navy-mid-dark: #123c7c;--navy: #254b87;--navy-90: #3e5f95;--navy-80: #5674a3;--navy-70: #6f88b2;--navy-60: #889cc0;--navy-50: #9daecc;--navy-40: #b3c0d9;--navy-30: #c3cde2;--navy-20: #d3daeb;--navy-10: #f4f6fa;--neutral-dark: #745745;--neutral-mid-dark: #7d604b;--neutral: #8a6c57;--neutral-90: #957865;--neutral-80: #a18573;--neutral-70: #ad9484;--neutral-60: #baa496;--neutral-50: #c6b4a9;--neutral-40: #d3c5bc;--neutral-30: #ddd1c9;--neutral-20: #e7ddd7;--neutral-10: #f8f5f2;--pacific-dark: #0050b4;--pacific-mid-dark: #0061c1;--pacific: #0072ce;--pacific-90: #2284d5;--pacific-80: #4497dc;--pacific-70: #61a7e2;--pacific-60: #7eb7e8;--pacific-50: #96c4ed;--pacific-40: #afd2f2;--pacific-30: #c3ddf6;--pacific-20: #d6e8fa;--pacific-10: #eff8fd;--purple-dark: #a01b68;--purple-mid-dark: #aa2071;--purple: #b4267a;--purple-90: #be438b;--purple-80: #c55998;--purple-70: #cd70a5;--purple-60: #d486b2;--purple-50: #dc9cbf;--purple-40: #e3b2cc;--purple-30: #ebc9d9;--purple-20: #f0d8e2;--purple-10: #fdf3f8;--red-dark: #b63014;--red-mid-dark: #c3381c;--red: #d14124;--red-90: #d75a40;--red-80: #dd735d;--red-70: #e28875;--red-60: #e79e8e;--red-50: #ebb0a3;--red-40: #f0c3b8;--red-30: #f3d1c8;--red-20: #f7e0d9;--red-10: #fbefec;--teal-dark: #005e5d;--teal-mid-dark: #126b69;--teal: #257675;--teal-90: #3e8685;--teal-80: #579695;--teal-70: #70a6a5;--teal-60: #89b6b5;--teal-50: #9ec4c3;--teal-40: #b4d2d1;--teal-30: #c4dddc;--teal-20: #d4e7e6;--teal-10: #f0f7f6;--font-stack: system-ui,sans-serif}:root{--text: var(--black);--link-text: var(--pacific);--link-underline: var(--pacific);--link-text-visited: var(--teal);--link-underline-visited: var(--teal);--link-text-hover: var(--pacific-dark);--link-underline-hover: var(--pacific-dark);--link-text-active: var(--navy);--link-underline-active: var(--navy);--table-head-bg: var(--gray-5);--table-border: var(--gray);--code-bg: var(--gray-5);--block-bg: var(--gray-5);--block-border: var(--gray-40);--content-main-border: var(--gray-40);--input-text-default: var(--black);--input-text-disabled-default: var(--gray-dark);--input-text-placeholder-default: var(--gray-dark);--input-border-disabled: var(--gray-60);--input-border-default: var(--gray-60);--input-border-hover-default: var(--pacific);--input-border-focus-default: var(--pacific);--input-border-error: var(--red);--input-border-warning: var(--gold);--input-border-success: var(--green);--input-bg-default: var(--white);--input-bg-disabled-default: var(--gray-10);--form-alert-icon-color-default: var(--gray);--form-alert-icon-color-success: var(--green);--form-alert-icon-color-warning: var(--gold);--form-alert-icon-color-error: var(--red);--select-border-hover-default: var(--pacific);--select-border-focus-default: var(--pacific);--select-border-default: var(--gray-60);--select-border-error: var(--red);--select-icon-bg-default: var(--gray-10);--select-bg-disabled-default: var(--gray-10);--select-text-disabled-default: var(--gray-dark);--choice-border-default: var(--gray-60);--choice-border-disabled: var(--gray-60);--choice-border-success: var(--green);--choice-border-warning: var(--gold);--choice-border-error: var(--red);--choice-border-hover-default: var(--pacific);--choice-border-focus-default: var(--pacific);--choice-outline-focus-default: var(--pacific);--choice-bg-default: var(--white);--choice-bg-disabled: var(--gray-10);--choice-bg-selected-default: var(--pacific);--choice-bg-selected-disabled: var(--gray-40);--choice-bg-selected-focus-default: var(--pacific);--choice-label-disabled-default: var(--gray-dark);--form-field-input-lg-target-bg: var(--gray-10);--form-field-input-lg-target-bg-selected: var(--pacific-20);--form-field-input-lg-target-bg-disabled: var(--gray-20);--form-field-input-lg-target-border: var(--pacific);--label-helper: var(--gray-dark);--range-border: var(--gray-40);--range-border-focused: var(--pacific);--range-bg: var(--gray-10);--range-bg-track: var(--gray-80);--range-bg-focused: var(--pacific-20);--table-head-text: var(--text);--code-text: var(--text);--block-border-top: var(--block-border);--block-border-right: var(--block-border);--block-border-bottom: var(--block-border);--block-border-left: var(--block-border)}:root{--font-adjust-base: .517;--font-adjust-step: .0054;--font-adjust-h1: -moz-calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h1: calc( var(--font-size-adjust-base) + (5 * var(--font-adjust-step)) );--font-adjust-h2: -moz-calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h2: calc( var(--font-size-adjust-base) + (4 * var(--font-adjust-step)) );--font-adjust-h3: -moz-calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h3: calc( var(--font-size-adjust-base) + (3 * var(--font-adjust-step)) );--font-adjust-h4: -moz-calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h4: calc( var(--font-size-adjust-base) + (2 * var(--font-adjust-step)) );--font-adjust-h5: -moz-calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h5: calc( var(--font-size-adjust-base) + (1 * var(--font-adjust-step)) );--font-adjust-h6: var(--font-adjust-base);--font-adjust-body: var(--font-adjust-base);--select-border-width-default: 1px;--select-border-width-error: 2px}.no-js .u-js-only,.u-hide-if-js{display:none!important}.no-js .u-hide-if-js{display:block!important}@media screen{.u-print-only{display:none}}@media print{.u-screen-only{display:none}}.u-clearfix:after{content:\"\";display:table;clear:both}.u-visually-hidden{position:absolute;width:1px;height:1px;border:0;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0)}@media only screen and (max-width:37.5em){.u-hide-on-mobile{display:none}}@media only screen and (min-width:37.5625em){.u-show-on-mobile{display:none}}.u-hidden{display:none!important}.u-invisible{visibility:hidden}.u-right{float:right}.u-nowrap{white-space:nowrap}.u-flexible-container{position:relative;padding-bottom:56.25%;height:0}.u-flexible-container__inner{position:absolute;top:0;left:0;width:100%;height:100%}.u-flexible-container--4-3{position:relative;padding-bottom:75%;height:0}.u-mt0{margin-top:0!important}.u-mb0{margin-bottom:0!important}.u-mt5{margin-top:5px!important}.u-mb5{margin-bottom:5px!important}.u-mt10{margin-top:10px!important}.u-mb10{margin-bottom:10px!important}.u-mt15{margin-top:15px!important}.u-mb15{margin-bottom:15px!important}.u-mt20{margin-top:20px!important}.u-mb20{margin-bottom:20px!important}.u-mt30{margin-top:30px!important}.u-mb30{margin-bottom:30px!important}.u-mt45{margin-top:45px!important}.u-mb45{margin-bottom:45px!important}.u-mt60{margin-top:60px!important}.u-mb60{margin-bottom:60px!important}.u-w100pct{width:100%}.u-w90pct{width:90%}.u-w80pct{width:80%}.u-w70pct{width:70%}.u-w60pct{width:60%}.u-w50pct{width:50%}.u-w40pct{width:40%}.u-w30pct{width:30%}.u-w20pct{width:20%}.u-w10pct{width:10%}.u-w75pct{width:75%}.u-w65pct{width:65%}.u-w25pct{width:25%}.u-w15pct{width:15%}.u-w66pct{width:66.6666666667%}.u-w33pct{width:33.3333333333%}small,.u-small-text{font-size:.875em}small--subtle,.u-small-text--subtle{color:var(--gray)}.u-no-animation{-moz-transition-duration:0s!important;transition-duration:0s!important}.u-move-transition{-moz-transition:transform .25s ease-out,-moz-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-moz-transform .25s ease-out}.u-move-to-origin{-moz-transform:translate3d(0,0,0);transform:translateZ(0)}.u-move-left{-moz-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.u-move-left-2x{-moz-transform:translate3d(-200%,0,0);transform:translate3d(-200%,0,0)}.u-move-left-3x{-moz-transform:translate3d(-300%,0,0);transform:translate3d(-300%,0,0)}.u-move-right{-moz-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.u-move-up{-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.u-alpha-transition{-moz-transition:opacity .25s linear;transition:opacity .25s linear}.u-alpha-100{opacity:1}.u-alpha-0{opacity:0}.u-max-height-transition{overflow:hidden;contain:paint;-moz-transition:max-height .2s ease-out;transition:max-height .2s ease-out}.u-max-height-zero{max-height:0!important}.u-max-height-summary{max-height:88px!important}.cf-icon-svg{height:1.1875em;vertical-align:middle;fill:currentcolor}.cf-icon-svg--updating,.cf-icon-svg--updating-round{-moz-animation:updating-animation 1.25s infinite linear;animation:updating-animation 1.25s infinite linear;-moz-transform-origin:50% 50%;transform-origin:50% 50%}@-moz-keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes updating-animation{0%{-moz-transform:rotate(0deg);transform:rotate(0)}to{-moz-transform:rotate(359deg);transform:rotate(359deg)}}html[lang=ar] .cf-icon-svg--right,html[lang=ar] .cf-icon-svg--right-round,html[lang=ar] .cf-icon-svg--left,html[lang=ar] .cf-icon-svg--left-round,html[lang=ar] .cf-icon-svg--arrow-right,html[lang=ar] .cf-icon-svg--arrow-right-round,html[lang=ar] .cf-icon-svg--arrow-left,html[lang=ar] .cf-icon-svg--arrow-left-round,html[lang=ar] .cf-icon-svg--help,html[lang=ar] .cf-icon-svg--help-round,html[lang=ar] .cf-icon-svg--book,html[lang=ar] .cf-icon-svg--book-round,html[lang=ar] .cf-icon-svg--document,html[lang=ar] .cf-icon-svg--document-round,html[lang=ar] .cf-icon-svg--edit,html[lang=ar] .cf-icon-svg--edit-round,html[lang=ar] .cf-icon-svg--paper-clip,html[lang=ar] .cf-icon-svg--paper-clip-round,html[lang=ar] .cf-icon-svg--cart,html[lang=ar] .cf-icon-svg--cart-round,html[lang=ar] .cf-icon-svg--disability,html[lang=ar] .cf-icon-svg--disability-round,html[lang=ar] .cf-icon-svg--travel,html[lang=ar] .cf-icon-svg--travel-round,html[lang=ar] .cf-icon-svg--bullhorn,html[lang=ar] .cf-icon-svg--bullhorn-round,html[lang=ar] .cf-icon-svg--chart,html[lang=ar] .cf-icon-svg--chart-round,html[lang=ar] .cf-icon-svg--list,html[lang=ar] .cf-icon-svg--list-round,html[lang=ar] .cf-icon-svg--external-link,html[lang=ar] .cf-icon-svg--external-link-round{-moz-transform:scaleX(-1);transform:scaleX(-1)}:host{width:100%}:host .m-pagination{display:grid;grid-template-columns:auto 1fr auto;grid-template-areas:\"pag-btn-prev . pag-btn-next\" \"pag-form pag-form pag-form\";row-gap:.9375rem}:host .m-pagination__form{grid-area:pag-form;display:-moz-box;display:flex;flex-flow:wrap;place-content:center;gap:.625rem;padding:.3125rem;border-radius:.25rem;background:var(--gray-5);color:var(--gray)}:host .m-pagination__current-page{width:2.8125rem;font-weight:500;text-align:right}:host .m-pagination__label{display:contents;white-space:nowrap}:host .m-pagination__btn-prev{grid-area:pag-btn-prev;z-index:1}:host .m-pagination__btn-next{grid-area:pag-btn-next;z-index:1}@media only screen and (min-width:37.5625em){:host .m-pagination{grid-template-areas:\"pag-btn-prev pag-form pag-btn-next\"}:host .m-pagination__btn-prev{border-top-right-radius:0;border-bottom-right-radius:0}:host .m-pagination__btn-next{border-top-left-radius:0;border-bottom-left-radius:0}}`, Hr = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--left" viewBox="0 0 10 19"><path d="M8.4 17.269a1.03 1.03 0 0 1-.727-.302l-6.801-6.8a1.03 1.03 0 0 1 0-1.456l6.8-6.8a1.03 1.03 0 0 1 1.456 1.455L3.055 9.439l6.073 6.073A1.03 1.03 0 0 1 8.4 17.27z"/></svg>', Br = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="cf-icon-svg cf-icon-svg--right" viewBox="0 0 10 19"><path d="M1.6 17.262a1.03 1.03 0 0 1-.728-1.757l6.073-6.073L.872 3.36a1.03 1.03 0 0 1 1.455-1.455l6.8 6.8a1.03 1.03 0 0 1 0 1.456l-6.8 6.8a1.02 1.02 0 0 1-.727.302z"/></svg>';
class gt extends HTMLElement {
  #e;
  #t;
  constructor() {
    super(), this.#e = {}, this.#t = "";
  }
  connectedCallback() {
    const e = [], t = this.querySelector("template");
    if (!t) {
      e.push([
        "missing-template",
        "No <template> found inside <i18n-service>"
      ]);
      return;
    }
    try {
      const a = t.innerHTML.trim(), i = JSON.parse(a);
      (typeof i != "object" || Array.isArray(i)) && e.push([
        "invalid-format",
        "Translations JSON must be an object keyed by the language codes"
      ]), this.#e = i;
      const o = this.availableLanguages;
      o.length > 0 && !this.#t && (this.language = o[0]);
    } catch (a) {
      e.push([
        "parse-error",
        "Failed to parse i18n template JSON",
        { err: a }
      ]);
    }
    requestAnimationFrame(() => {
      e.forEach((a) => {
        this.#a(...a);
      });
    });
  }
  /**
   * Set the current language
   * @param {string} lang - Language code (e.g. "en", "es", "ar", "ru", etc.)
   */
  set language(e) {
    if (!this.#e[e]) {
      this.#a("invalid-language", `Unsupported language: ${e}`, {
        lang: e
      });
      return;
    }
    this.#t !== e && (this.#t = e, this.dispatchEvent(
      new CustomEvent("i18n-change", {
        detail: { language: e },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  /**
   * @returns {string} The currently set language.
   */
  get language() {
    return this.#t;
  }
  get availableLanguages() {
    return Object.keys(this.#e);
  }
  /**
   * Translate a language key.
   * @param {string} key - An arbitrary key from the <template>.
   * @returns {string} The translation.
   */
  translate(e) {
    return this.#e[this.#t]?.[e] || e;
  }
  #a(e, t, a = {}) {
    this.dispatchEvent(
      new CustomEvent("i18n-error", {
        detail: { type: e, message: t, ...a },
        bubbles: !0,
        composed: !0
      })
    );
  }
  static init() {
    window.customElements.get("i18n-service") || window.customElements.define("i18n-service", gt);
  }
}
class Ur extends EventTarget {
  #e;
  #t = /* @__PURE__ */ new Map();
  // Map<key, MediaQueryList>
  #a = /* @__PURE__ */ new Map();
  // Map<key, listener>
  #i = /* @__PURE__ */ new Map();
  // Map<key, boolean>
  #r = !1;
  /**
   *
   * @param {Record<string, {min: number, max?: number}>} [breakpoints]
   *   A map of breakpoint name -> { min: px, optional max: px }.
   *   If not provided, default breakpoints are used.
   */
  constructor(e) {
    super(), this.#e = e ?? {
      xs: { min: 0, max: 600 },
      sm: { min: 601, max: 900 },
      med: { min: 901, max: 1020 },
      lg: { min: 1021, max: 1200 },
      xl: { min: 1201 }
    };
    for (const [t, a] of Object.entries(this.#e)) {
      const i = this.#o(a), o = window.matchMedia(i);
      this.#t.set(t, o), this.#i.set(t, o.matches);
      const n = (s) => {
        this.#i.set(t, s.matches), this.#r || (this.#r = !0, requestAnimationFrame(() => {
          this.#r = !1, this.#n();
        }));
      };
      o.addEventListener("change", n), this.#a.set(t, n);
    }
    this.#n();
  }
  #o(e) {
    const t = [];
    return e.min != null && t.push(`(min-width: ${e.min}px)`), e.max != null && t.push(`(max-width: ${e.max}px)`), t.join(" and ");
  }
  #n() {
    const e = {
      matches: Object.fromEntries(this.#i)
    };
    this.dispatchEvent(new CustomEvent("change", { detail: e }));
  }
  get matches() {
    return Object.fromEntries(this.#i);
  }
  destroy() {
    for (const [e, t] of this.#t.entries()) {
      const a = this.#a.get(e);
      a && t.removeEventListener("change", a);
    }
    this.#t.clear(), this.#a.clear(), this.#i.clear();
  }
}
class ra extends E {
  #e;
  #t;
  #a;
  static styles = Pr;
  /**
   * @property {number} currentPage - The currently selected page.
   * @property {number} maxPage - The maximum page count.
   * @returns {object} The map of properties.
   */
  static properties = {
    currentPage: { type: Number, attribute: "value", reflect: !0 },
    maxPage: { type: Number, attribute: "max", reflect: !0 },
    lang: { type: String, reflect: !0 }
  };
  constructor() {
    super(), this.currentPage = 1, this.maxPage = 1, this.#e = new Ur(), this.#t = !1, this.lang = "en";
  }
  connectedCallback() {
    super.connectedCallback(), this.#a = this.querySelector("i18n-service"), this.#a && (this.addEventListener("i18n-change", this.#i), this.#a.language = this.lang);
  }
  #i() {
    const e = (t, a) => {
      const i = this.renderRoot.querySelector(t), o = i.querySelector("span");
      if (i) {
        const n = this.#a.translate(a);
        o.innerHTML = n, i.requestUpdate();
      }
    };
    e("#previous", "previous"), e("#next", "next"), e("#go", "go"), this.requestUpdate();
  }
  firstUpdated() {
    this.#e.addEventListener("change", this.#r), this.#t = this.#e.matches.xs;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.#e.removeEventListener("change", this.#r), this.#e.destroy();
  }
  #r = (e) => {
    const t = e.detail.matches.xs;
    t !== this.#t && (this.#t = t, this.requestUpdate());
  };
  updated(e) {
    (e.has("currentPage") || e.has("maxPage")) && (this.currentPage < 1 ? this.currentPage = 1 : this.currentPage > this.maxPage && (this.currentPage = this.maxPage)), e.has("lang") && (this.#a.language = this.lang, this.requestUpdate());
  }
  get isAtMin() {
    return this.currentPage <= 1;
  }
  get isAtMax() {
    return this.currentPage >= this.maxPage;
  }
  #o(e) {
    this.currentPage = e.target.value;
  }
  #n(e) {
    e.preventDefault();
    const t = parseInt(this.currentPage, 10);
    Number.isNaN(t) || this.#d(t);
  }
  #d(e) {
    const t = Math.max(1, Math.min(e, this.maxPage));
    t !== this.currentPage && (this.currentPage = t, this.dispatchEvent(
      new CustomEvent("page-change", {
        detail: { page: t },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    const e = this.#a && this.#a.translate ? this.#a.translate.bind(this.#a) : (t) => t;
    return x`
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
          @click=${() => this.#d(this.currentPage - 1)}
        >
          ${X(Hr)} ${e("next")}
        </cfpb-button>

        <form
          class="m-pagination__form"
          action="#pagination_content"
          @submit=${this.#n}
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
              @input=${this.#o}
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
          @click=${() => this.#d(this.currentPage + 1)}
        >
          ${e("previous")} ${X(Br)}
        </cfpb-button>
      </nav>
    `;
  }
  static init() {
    gt.init(), window.customElements.get("cfpb-pagination") || window.customElements.define("cfpb-pagination", ra);
  }
}
export {
  Ua as AlphaTransition,
  nt as BEHAVIOR_PREFIX,
  S as BaseTransition,
  ht as CfpbButton,
  Gt as CfpbExpandable,
  Kt as CfpbFileUpload,
  ft as CfpbFormAlert,
  Xt as CfpbFormChoice,
  Jt as CfpbFormSearch,
  Pe as CfpbFormSearchInput,
  Wt as CfpbLabel,
  De as CfpbList,
  ut as CfpbListItem,
  ra as CfpbPagination,
  aa as CfpbSelect,
  ea as CfpbTagFilter,
  pt as CfpbTagGroup,
  ta as CfpbTagTopic,
  Qt as CfpbTagline,
  Y as EventObserver,
  de as Expandable,
  Ze as ExpandableGroup,
  di as ExpandableGroupStyles,
  ni as ExpandableStyles,
  ce as FlyoutMenu,
  G as JS_HOOK,
  Bt as MOBILE,
  I as MaxHeightTransition,
  Ra as MoveTransition,
  Qe as Multiselect,
  Ia as STATE_PREFIX,
  Ye as Summary,
  Je as SummaryMinimal,
  si as SummaryStyles,
  U as add,
  Si as bannerStyles,
  Xr as baseStyles,
  Jr as behaviorAttach,
  Na as behaviorFind,
  Wr as buttonGroupStyles,
  Zr as buttonLinkStyles,
  Kr as buttonStyles,
  xi as cardGroupStyles,
  yi as cardStyles,
  $t as checkBehaviorDom,
  xe as checkDom,
  Me as contains,
  Ci as dateStyles,
  ki as emailSignupStyles,
  wi as featuredContentModuleStyles,
  ci as formAlertStyles,
  hi as formFieldStyles,
  li as formStyles,
  ji as heroStyles,
  mi as iconStyles,
  ke as instantiateAll,
  ri as isArray,
  ai as isDate,
  Qr as isDefined,
  oi as isEmpty,
  ii as isFunction,
  Ha as isMobileUserAgent,
  ti as isNumber,
  ei as isObject,
  Pa as isString,
  Da as isUndefined,
  fi as labelStyles,
  zi as layoutStyles,
  Ti as linkStyles,
  Oi as listStyles,
  Ii as metaHeaderStyles,
  Gr as normalizeStyles,
  $i as notificationStyles,
  Ai as paginationStyles,
  Mi as pullQuoteStyles,
  ui as rangeStyles,
  bi as searchInputStyles,
  pi as selectStyles,
  le as setInitFlag,
  qi as slugHeaderStyles,
  Li as tableStyles,
  gi as tagStyles,
  Ni as taglineStyles,
  vi as textInputStyles,
  _i as textIntroductionStyles,
  Yr as utilitiesStyles,
  vt as varsBreakpoints,
  Oa as viewportIsIn,
  Ei as wellStyles
};
