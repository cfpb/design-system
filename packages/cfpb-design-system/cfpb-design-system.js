!(function () {
  const t = {
      852: function (t) {
        /**
         *
         * @param t
         */
        function e(t) {
          (this.listenerMap = [{}, {}]),
            t && this.root(t),
            (this.handle = e.prototype.handle.bind(this)),
            (this._removedListeners = []);
        }
        (t.exports = e),
          (e.prototype.root = function (t) {
            let e,
              i = this.listenerMap;
            if (this.rootElement) {
              for (e in i[1]) {
                i[1].hasOwnProperty(e) &&
                  this.rootElement.removeEventListener(e, this.handle, !0);
              }
              for (e in i[0]) {
                i[0].hasOwnProperty(e) &&
                  this.rootElement.removeEventListener(e, this.handle, !1);
              }
            }
            if (!t || !t.addEventListener)
              return this.rootElement && delete this.rootElement, this;
            for (e in ((this.rootElement = t), i[1])) {
              i[1].hasOwnProperty(e) &&
                this.rootElement.addEventListener(e, this.handle, !0);
            }
            for (e in i[0]) {
              i[0].hasOwnProperty(e) &&
                this.rootElement.addEventListener(e, this.handle, !1);
            }
            return this;
          }),
          (e.prototype.captureForType = function (t) {
            return (
              ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(
                t
              ) !== -1
            );
          }),
          (e.prototype.on = function (t, e, o, a) {
            let l, h, c, u;
            if (!t) throw new TypeError('Invalid event type: ' + t);
            if (
              (typeof e == 'function' && ((a = o), (o = e), (e = null)),
              void 0 === a && (a = this.captureForType(t)),
              typeof o != 'function')
            )
              throw new TypeError('Handler must be a type of Function');
            return (
              (l = this.rootElement),
              (h = this.listenerMap[a ? 1 : 0])[t] ||
                (l && l.addEventListener(t, this.handle, a), (h[t] = [])),
              e
                ? /^[a-z]+$/i.test(e)
                  ? ((u = e), (c = n))
                  : /^#[a-z0-9\-_]+$/i.test(e)
                  ? ((u = e.slice(1)), (c = r))
                  : ((u = e), (c = i))
                : ((u = null), (c = s.bind(this))),
              h[t].push({
                selector: e,
                handler: o,
                matcher: c,
                matcherParam: u,
              }),
              this
            );
          }),
          (e.prototype.off = function (t, e, i, n) {
            let s, r, o, a, l;
            if (
              (typeof e == 'function' && ((n = i), (i = e), (e = null)),
              void 0 === n)
            )
              return this.off(t, e, i, !0), this.off(t, e, i, !1), this;
            if (((o = this.listenerMap[n ? 1 : 0]), !t)) {
              for (l in o) o.hasOwnProperty(l) && this.off(l, e, i);
              return this;
            }
            if (!(a = o[t]) || !a.length) return this;
            for (s = a.length - 1; s >= 0; s--) {
              (r = a[s]),
                (e && e !== r.selector) ||
                  (i && i !== r.handler) ||
                  (this._removedListeners.push(r), a.splice(s, 1));
            }
            return (
              a.length ||
                (delete o[t],
                this.rootElement &&
                  this.rootElement.removeEventListener(t, this.handle, n)),
              this
            );
          }),
          (e.prototype.handle = function (t) {
            let e,
              i,
              n,
              s,
              r,
              o = t.type,
              a = [],
              l = 'ftLabsDelegateIgnore';
            if (!0 !== t[l]) {
              switch (
                ((r = t.target).nodeType === 3 && (r = r.parentNode),
                r.correspondingUseElement && (r = r.correspondingUseElement),
                (n = this.rootElement),
                t.eventPhase || (t.target !== t.currentTarget ? 3 : 2))
              ) {
                case 1:
                  a = this.listenerMap[1][o];
                  break;
                case 2:
                  this.listenerMap[0] &&
                    this.listenerMap[0][o] &&
                    (a = a.concat(this.listenerMap[0][o])),
                    this.listenerMap[1] &&
                      this.listenerMap[1][o] &&
                      (a = a.concat(this.listenerMap[1][o]));
                  break;
                case 3:
                  a = this.listenerMap[0][o];
              }
              let h,
                c = [];
              for (i = a.length; r && i; ) {
                for (e = 0; e < i && (s = a[e]); e++) {
                  r.tagName &&
                  ['button', 'input', 'select', 'textarea'].indexOf(
                    r.tagName.toLowerCase()
                  ) > -1 &&
                  r.hasAttribute('disabled')
                    ? (c = [])
                    : s.matcher.call(r, s.matcherParam, r) && c.push([t, r, s]);
                }
                if (r === n) break;
                if (
                  ((i = a.length),
                  (r = r.parentElement || r.parentNode) instanceof HTMLDocument)
                )
                  break;
              }
              for (e = 0; e < c.length; e++) {
                if (
                  !(this._removedListeners.indexOf(c[e][2]) > -1) &&
                  !1 === this.fire.apply(this, c[e])
                ) {
                  (c[e][0][l] = !0), c[e][0].preventDefault(), (h = !1);
                  break;
                }
              }
              return h;
            }
          }),
          (e.prototype.fire = function (t, e, i) {
            return i.handler.call(e, t, e);
          });
        var i = (function (t) {
          if (t) {
            const e = t.prototype;
            return (
              e.matches ||
              e.matchesSelector ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector ||
              e.oMatchesSelector
            );
          }
        })(Element);
        /**
         *
         * @param t
         * @param e
         */
        function n(t, e) {
          return t.toLowerCase() === e.tagName.toLowerCase();
        }
        /**
         *
         * @param t
         * @param e
         */
        function s(t, e) {
          return this.rootElement === window
            ? e === document || e === document.documentElement || e === window
            : this.rootElement === e;
        }
        /**
         *
         * @param t
         * @param e
         */
        function r(t, e) {
          return t === e.id;
        }
        e.prototype.destroy = function () {
          this.off(), this.root();
        };
      },
      161: function (t, e, i) {
        const n = i(852);
        (t.exports = function (t) {
          return new n(t);
        }),
          (t.exports.Delegate = n);
      },
    },
    e = {};
  /**
   *
   * @param n
   */
  function i(n) {
    const s = e[n];
    if (void 0 !== s) return s.exports;
    const r = (e[n] = { exports: {} });
    return t[n](r, r.exports, i), r.exports;
  }
  !(function () {
    const t = 'data-js-hook';
    const e = { UP: 0, RIGHT: 1, DOWN: -1, LEFT: -2 };
    /**
     *
     * @param e
     * @param i
     */
    function n(e, i) {
      if (!e) return !1;
      let n = e.getAttribute(t);
      return Boolean(n) && (n = n.split(' ')).indexOf(i) > -1;
    }
    const s = 'state_atomic_init';
    /**
     *
     * @param e
     */
    function r(e) {
      return (
        !n(e, s) &&
        ((function (e, i) {
          if (i.indexOf(' ') !== -1)
            throw new Error('data-js-hook values cannot contain spaces!');
          const n = e.getAttribute(t);
          n !== null && (i = n + ' ' + i), e.setAttribute(t, i);
        })(e, s),
        !0)
      );
    }
    /**
     *
     * @param t
     */
    function o(t) {
      return Object.prototype.toString.call(t) === '[object Object]';
    }
    /**
     *
     * @param t
     */
    function a(t) {
      t = t || {};
      for (let e = 1, i = arguments.length; e < i; e++) {
        let n = arguments[e] || {},
          s = void 0;
        for (s in n) {
          if ({}.hasOwnProperty.call(n, s)) {
            const r = n[s];
            o(r) ? a(t[s] || (t[s] = {}), r) : (t[s] = r);
          }
        }
      }
      return t;
    }
    const l = function () {
      const t = {};
      return (
        (this.addEventListener = function (e, i) {
          return t.hasOwnProperty(e) ? t[e].push(i) : (t[e] = [i]), this;
        }),
        (this.removeEventListener = function (e, i) {
          if (!t.hasOwnProperty(e)) return this;
          const n = t[e].indexOf(i);
          return n !== -1 && t[e].splice(n, 1), this;
        }),
        (this.dispatchEvent = function (e, i) {
          if (!t.hasOwnProperty(e)) return this;
          i = i || {};
          for (let n = t[e], s = 0, r = n.length; s < r; s++)
            n[s].call(this, i);
          return this;
        }),
        (this.getRegisteredEvents = function () {
          return t;
        }),
        this
      );
    };
    /**
     *
     * @param t
     */
    function h(t) {
      return (
        (h =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              }),
        h(t)
      );
    }
    const c = Object.prototype.toString;
    /**
     *
     * @param t
     */
    function u(t) {
      return void 0 === t;
    }
    /**
     *
     * @param t
     */
    function d(t) {
      return c.call(t) === '[object String]';
    }
    const p = {
        isUndefined: u,
        isDefined: function (t) {
          return void 0 !== t;
        },
        isObject: function (t) {
          return t !== null && h(t) === 'object';
        },
        isString: d,
        isNumber: function (t) {
          return c.call(t) === '[object Number]';
        },
        isDate: function (t) {
          return c.call(t) === '[object Date]';
        },
        isArray:
          Array.isArray ||
          function (t) {
            return c.call(t) === '[object Array]';
          },
        isFunction: function (t) {
          return c.call(t) === '[object Function]';
        },
        isEmpty: function (t) {
          return (
            u(t) || t === null || (d(t) && t.length <= 0) || /^\s*$/.test(t)
          );
        },
      },
      f = i(161).Delegate;
    /**
     *
     * @param t
     * @param e
     */
    function v(t, e) {
      (this.element = t),
        (this.initializers = []),
        (this.uId = this.uniqueId('ac')),
        a(this, e),
        this.processModifiers(),
        this.ensureElement(),
        this.setCachedElements(),
        this.initializers.push(this.initialize);
    }
    a(v.prototype, new l(), {
      init: function () {
        return (
          this.initializers.forEach(function (t) {
            p.isFunction(t) && t.apply(this, arguments);
          }, this),
          this.dispatchEvent('component:initialized'),
          this
        );
      },
      processModifiers: function () {
        this.modifiers &&
          this.modifiers.forEach(function (t) {
            const e = t.ui.base.substring(1);
            this.element.classList.contains(e) &&
              (t.initialize && this.initializers.push(t.initialize),
              a(this, t));
          }, this);
      },
      render: function () {
        return this;
      },
      ensureElement: function () {
        if (this.element) {
          this.setElement(this.element);
        } else {
          const t = a({}, this.attributes);
          (t.id = this.id || this.u_id),
            this.className && (t.class = this.className),
            this.setElement(document.createElement('div')),
            this.setElementAttributes(t);
        }
        r(this.element);
      },
      setElement: function (t) {
        return (
          this.element && this.undelegateEvents(),
          (this.element = t),
          this.delegateEvents(),
          this
        );
      },
      setCachedElements: function () {
        let t,
          e,
          i = a({}, this.ui);
        for (t in i) {
          i.hasOwnProperty(t) &&
            ((e = this.element.querySelectorAll(i[t])).length === 1
              ? (i[t] = e[0])
              : e.length > 1
              ? (i[t] = e)
              : (i[t] = null));
        }
        return (this.ui = i), i;
      },
      destroy: function () {
        return (
          this.element &&
            (this.element.parentNode.removeChild(this.element),
            this.element.view && delete this.element.view,
            delete this.element),
          this.undelegateEvents(),
          this.dispatchEvent('component:destroyed'),
          !0
        );
      },
      setElementAttributes: function (t) {
        let e;
        for (e in t) t.hasOwnProperty(e) && this.element.setAttribute(e, t[e]);
      },
      delegateEvents: function (t) {
        let e,
          i,
          n,
          s = /^(\S+)\s*(.*)$/;
        if (!(t = t || (t = this.events))) return this;
        for (e in (this.undelegateEvents(),
        (this._delegate = new f(this.element)),
        t)) {
          ({}.hasOwnProperty.call(t, e) &&
            ((i = t[e]),
            p.isFunction(this[i]) && (i = this[i]),
            i && ((n = e.match(s)), this.delegate(n[1], n[2], i.bind(this)))));
        }
        return this.dispatchEvent('component:bound'), this;
      },
      delegate: function (t, e, i) {
        return this._delegate.on(t, e, i), this;
      },
      undelegateEvents: function () {
        return (
          this._delegate && this._delegate.destroy(),
          this.element.removeAttribute('data-js-hook'),
          this
        );
      },
      uniqueId: function (t) {
        return t + '_' + Math.random().toString(36).substr(2, 9);
      },
    }),
      (v.init = function (t) {
        const e = (function (t, e, i) {
          for (
            var r,
              o,
              a = (i || document).querySelectorAll(t),
              l = [],
              h = 0,
              c = a.length;
            h < c;
            h++
          )
            !1 === n((o = a[h]), s) && ((r = new e(o)).init(), l.push(r));
          return l;
        })(this.selector, this, t);
        return e;
      }),
      (v.extend = function (t) {
        /**
         *
         */
        function e() {
          return (this._super = v.prototype), v.apply(this, arguments);
        }
        return (
          (e.prototype = Object.create(v.prototype)),
          a(e.prototype, t),
          a(e, v),
          t.hasOwnProperty('ui') &&
            t.ui.hasOwnProperty('base') &&
            (e.selector = t.ui.base),
          (e.constants = {}),
          e
        );
      });
    const m = v;
    /**
     *
     * @param t
     * @param e
     */
    function E(t, e) {
      let i,
        n,
        s,
        r,
        o,
        a = e,
        h = !1,
        c = !1;
      if (void 0 === a.CSS_PROPERTY || void 0 === a.BASE_CLASS) {
        throw new Error(
          'Transitions require CSS_PROPERTY and BASE_CLASS to be passed into BaseTransition.'
        );
      }
      /**
       *
       * @param t
       */
      function u(t) {
        i && (g(), d()),
          (i = t).classList.add(a.BASE_CLASS),
          (s = (function (t) {
            if (!t) {
              throw new Error(
                'Element does not have TransitionEnd event. It may be null!'
              );
            }
            let e,
              i,
              n = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend',
              };
            for (i in n) {
              if (n.hasOwnProperty(i) && void 0 !== t.style[i]) {
                e = n[i];
                break;
              }
            }
            return e;
          })(i));
      }
      /**
       *
       */
      function d() {
        return i ? (i.classList.remove(E.NO_ANIMATION_CLASS), this) : this;
      }
      /**
       *
       */
      function p() {
        h &&
          ((i.style.webkitTransitionDuration = '0'),
          (i.style.mozTransitionDuration = '0'),
          (i.style.oTransitionDuration = '0'),
          (i.style.transitionDuration = '0'),
          i.removeEventListener(s, r),
          r(),
          (i.style.webkitTransitionDuration = ''),
          (i.style.mozTransitionDuration = ''),
          (i.style.oTransitionDuration = ''),
          (i.style.transitionDuration = ''));
      }
      /**
       *
       */
      function f() {
        i.classList.add(E.ANIMATING_CLASS),
          (h = !0),
          s && !i.classList.contains(E.NO_ANIMATION_CLASS)
            ? (i.addEventListener(s, r),
              this.dispatchEvent(E.BEGIN_EVENT, { target: this }))
            : (this.dispatchEvent(E.BEGIN_EVENT, { target: this }), r());
      }
      /**
       *
       */
      function v() {
        i.removeEventListener(s, r);
      }
      /**
       *
       * @param t
       */
      function m(t) {
        return (
          (!t || t.propertyName === a.CSS_PROPERTY) &&
          (v(),
          i.classList.remove(E.ANIMATING_CLASS),
          this.dispatchEvent(E.END_EVENT, { target: this }),
          (h = !1),
          !0)
        );
      }
      /**
       *
       */
      function b() {
        let t;
        for (t in a) {
          a.hasOwnProperty(t) &&
            a[t] !== a.BASE_CLASS &&
            i.classList.contains(a[t]) &&
            i.classList.remove(a[t]);
        }
      }
      /**
       *
       */
      function g() {
        return Boolean(i) && (p(), i.classList.remove(a.BASE_CLASS), b(), !0);
      }
      const y = new l();
      return (
        (this.addEventListener = y.addEventListener),
        (this.dispatchEvent = y.dispatchEvent),
        (this.removeEventListener = y.removeEventListener),
        (this.animateOff = function () {
          return i ? (i.classList.add(E.NO_ANIMATION_CLASS), this) : this;
        }),
        (this.animateOn = d),
        (this.applyClass = function (t) {
          return (
            Boolean(i) &&
            (c || (b(), (c = !0)),
            !i.classList.contains(t) &&
              (v(),
              i.classList.remove(n),
              (n = t),
              o(),
              i.classList.add(n),
              !0))
          );
        }),
        (this.halt = p),
        (this.init = function () {
          return (r = m.bind(this)), (o = f.bind(this)), u(t), this;
        }),
        (this.isAnimated = function () {
          return Boolean(i) && !i.classList.contains(E.NO_ANIMATION_CLASS);
        }),
        (this.remove = g),
        (this.setElement = u),
        this
      );
    }
    (E.BEGIN_EVENT = 'transitionBegin'),
      (E.END_EVENT = 'transitionEnd'),
      (E.NO_ANIMATION_CLASS = 'u-no-animation'),
      (E.ANIMATING_CLASS = 'u-is-animating');
    const b = E,
      g = {
        CSS_PROPERTY: 'max-height',
        BASE_CLASS: 'o-expandable_content__transition',
        EXPANDED: 'o-expandable_content__expanded',
        COLLAPSED: 'o-expandable_content__collapsed',
        OPEN_DEFAULT: 'o-expandable_content__onload-open',
      };
    /**
     *
     * @param t
     */
    function y(t) {
      let e,
        i = new b(t, g);
      /**
       *
       */
      function n() {
        t.classList.contains(g.EXPANDED)
          ? (this.dispatchEvent('expandEnd', { target: this }),
            t.scrollHeight > e && (t.style.maxHeight = t.scrollHeight + 'px'))
          : t.classList.contains(g.COLLAPSED) &&
            this.dispatchEvent('collapseEnd', { target: this });
      }
      const s = new l();
      return (
        (this.addEventListener = s.addEventListener),
        (this.dispatchEvent = s.dispatchEvent),
        (this.removeEventListener = s.removeEventListener),
        (this.animateOff = i.animateOff),
        (this.animateOn = i.animateOn),
        (this.halt = i.halt),
        (this.isAnimated = i.isAnimated),
        (this.setElement = i.setElement),
        (this.remove = i.remove),
        (this.init = function () {
          return (
            i.init(),
            i.addEventListener(b.END_EVENT, n.bind(this)),
            t.classList.contains(g.OPEN_DEFAULT)
              ? this.expand()
              : this.collapse(),
            this
          );
        }),
        (this.toggleExpandable = function () {
          return (
            t.classList.contains(g.COLLAPSED) ? this.expand() : this.collapse(),
            this
          );
        }),
        (this.collapse = function () {
          return (
            this.dispatchEvent('collapseBegin', { target: this }),
            (e = t.scrollHeight),
            (t.style.maxHeight = '0'),
            i.applyClass(g.COLLAPSED),
            this
          );
        }),
        (this.expand = function () {
          return (
            this.dispatchEvent('expandBegin', { target: this }),
            (!e || t.scrollHeight > e) && (e = t.scrollHeight),
            (t.style.maxHeight = e + 'px'),
            i.applyClass(g.EXPANDED),
            this
          );
        }),
        this
      );
    }
    y.CLASSES = g;
    const L = y;
    /**
     *
     * @param t
     * @param e
     */
    function A(t, e) {
      if ('closest' in t) return t.closest(e);
      const i = (function (t) {
        return (
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector
        );
      })(t);
      try {
        for (var n, s = t; s; )
          if ((i.bind(s)(e) ? (n = s) : (s = s.parentNode), n)) return s;
      } catch (t) {
        return null;
      }
      return null;
    }
    const S = new l();
    /**
     *
     */
    function _() {
      this.activeAccordion &&
        (this.transition.toggleExpandable(),
        this.toggleTargetState(this.ui.target),
        (this.activeAccordion = !1));
    }
    /**
     *
     */
    function x() {
      this.ui.content.classList.remove('u-hidden');
    }
    /**
     *
     */
    function C() {
      this.ui.content.classList.add('u-hidden');
    }
    const D = m.extend({
      ui: {
        base: '.o-expandable',
        target: '.o-expandable_target',
        content: '.o-expandable_content',
        header: '.o-expandable_header',
        label: '.o-expandable_label',
      },
      classes: {
        targetExpanded: 'o-expandable_target__expanded',
        targetCollapsed: 'o-expandable_target__collapsed',
        group: 'o-expandable-group',
        groupAccordion: 'o-expandable-group__accordion',
      },
      events: { 'click .o-expandable_target': 'expandableClickHandler' },
      transition: null,
      isAccordionGroup: !1,
      activeAccordion: !1,
      initialize: function () {
        const t = new L(this.ui.content);
        (this.transition = t.init()),
          this.transition.addEventListener('expandBegin', x.bind(this)),
          this.transition.addEventListener('collapseEnd', C.bind(this)),
          this.ui.content.classList.contains(L.CLASSES.EXPANDED)
            ? this.ui.target.classList.add(this.classes.targetExpanded)
            : (this.ui.target.classList.add(this.classes.targetCollapsed),
              this.ui.content.classList.add('u-hidden'));
        const e = A(this.ui.target, '.' + this.classes.group);
        (this.isAccordionGroup =
          e !== null && e.classList.contains(this.classes.groupAccordion)),
          this.isAccordionGroup &&
            S.addEventListener('accordionActivated', _.bind(this));
      },
      expandableClickHandler: function () {
        this.transition.toggleExpandable(),
          this.toggleTargetState(this.ui.target),
          this.isAccordionGroup &&
            (this.activeAccordion
              ? (this.activeAccordion = !1)
              : (S.dispatchEvent('accordionActivated', { target: this }),
                (this.activeAccordion = !0)));
      },
      toggleTargetState: function (t) {
        t.classList.contains(this.classes.targetExpanded)
          ? (this.ui.target.classList.add(this.classes.targetCollapsed),
            this.ui.target.classList.remove(this.classes.targetExpanded))
          : (this.ui.target.classList.add(this.classes.targetExpanded),
            this.ui.target.classList.remove(this.classes.targetCollapsed));
      },
      getLabelText: function () {
        return this.ui.label.textContent.trim();
      },
    });
    let O,
      w = {
        ui: { base: '.o-table__row-links' },
        events: { 'click tbody tr': 'onRowLinkClick' },
        onRowLinkClick: function (t) {
          let e = t.target;
          if (e && e.tagName === 'A') return;
          const i = (e = A(t.target, 'tr')).querySelector('a');
          i && (window.location = i.getAttribute('href'));
        },
      };
    const N = {
        ui: {
          base: '.o-table__sortable',
          tableBody: 'tbody',
          sortButton: '.sorted-up, .sorted-down',
        },
        classes: { sortDown: 'sorted-down', sortUp: 'sorted-up' },
        events: { 'click .sortable': 'onSortableClick' },
        initialize: function () {
          (this.sortClass = O),
            (this.sortColumnIndex = O),
            (this.sortDirection = O),
            (this.tableData = []),
            this.bindProperties(),
            this.ui.sortButton &&
              ((this.sortColumnIndex = this.getColumnIndex()),
              (this.sortDirection = e.UP),
              this.ui.sortButton.classList.contains(this.classes.sortDown) &&
                (this.sortDirection = e.DOWN),
              this.updateTable());
        },
        bindProperties: function () {
          let t;
          Object.defineProperty(this, 'sortDirection', {
            configurable: !0,
            get: function () {
              return t;
            },
            set: function (i) {
              i === e.UP
                ? (this.sortClass = this.classes.sortUp)
                : i === e.DOWN && (this.sortClass = this.classes.sortDown),
                (t = i);
            },
          });
        },
        getColumnIndex: function (t) {
          return A(t || this.ui.sortButton, 'td, th').cellIndex;
        },
        updateTable: function () {
          return this.updateTableData() && this.updateTableDom();
        },
        updateTableData: function (t) {
          let e,
            i = this.ui.tableBody.querySelectorAll('tr');
          (this.tableData = []), (t = t || this.sortColumnIndex);
          for (let n = 0, s = i.length; n < s; ++n) {
            (e = i[n].cells[t]) && (e = e.textContent.trim()),
              this.tableData.push([e, i[n]]);
          }
          const r = this.ui.sortButton.getAttribute('data-sort_type');
          return (
            this.tableData.sort(this.tableDataSorter(this.sortDirection, r)),
            this.tableData
          );
        },
        updateTableDom: function () {
          const t = this.ui.tableBody;
          for (; t.lastChild; ) t.removeChild(t.lastChild);
          for (
            var e = document.createDocumentFragment(), i = 0;
            i < this.tableData.length;
            i++
          )
            e.appendChild(this.tableData[i][1]);
          return t.appendChild(e), this.dispatchEvent('table:updated'), t;
        },
        tableDataSorter: function (t, i) {
          return function (n, s) {
            let r = t === e.DOWN ? -1 : 1,
              o = 0,
              a = /[^\d.-]/g;
            return (
              (n = n[0]),
              (s = s[0]),
              i === 'number' &&
                ((n = Number(n.replace(a, ''))),
                (s = Number(s.replace(a, '')))),
              n < s ? (o = -1 * r) : n > s && (o = r),
              o
            );
          };
        },
        onSortableClick: function (t) {
          this.ui.sortButton &&
            this.ui.sortButton.classList.remove(this.sortClass);
          this.ui.sortButton === t.target
            ? (this.sortDirection = ~this.sortDirection)
            : ((this.ui.sortButton = t.target),
              (this.sortColumnIndex = this.getColumnIndex()),
              (this.sortDirection = e.UP));
          return (
            this.ui.sortButton.classList.add(this.sortClass),
            this.updateTable(),
            this
          );
        },
      },
      T = m.extend({ ui: { base: '.o-table' }, modifiers: [N, w] });
    T.constants.DIRECTIONS = e;
    const P = T;
    D.init(), P.init();
  })();
})();
