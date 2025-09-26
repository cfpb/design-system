/**
 * A service for observing named breakpoints via matchMedia.
 * Emits a `change` event (CustomEvent) whenever any breakpoint match status changes.
 * Consumers can also call `matches` or `is(breakpointName)` to get current state.
 */
export class MediaQueryService extends EventTarget {
  #breakpoints;
  #mqls = new Map(); // Map<key, MediaQueryList>
  #handlers = new Map(); // Map<key, listener>
  #matches = new Map(); // Map<key, boolean>
  #pendingUpdate = false;

  /**
   *
   * @param {Record<string, {min: number, max?: number}} [breakpoints]
   *   A map of breakpoint name -> { min: px, optional max: px }.
   *   If not provided, default breakpoints are used.
   */
  constructor(breakpoints) {
    super();

    this.#breakpoints = breakpoints ?? {
      xs: { min: 0, max: 600 },
      sm: { min: 601, max: 900 },
      med: { min: 901, max: 1020 },
      lg: { min: 1021, max: 1200 },
      xl: { min: 1201 },
    };

    // Setup each media query.
    for (const [key, range] of Object.entries(this.#breakpoints)) {
      const mqString = this.#rangeToMediaQuery(range);
      const mql = window.matchMedia(mqString);

      this.#mqls.set(key, mql);
      this.#matches.set(key, mql.matches);

      const listener = (evt) => {
        this.#matches.set(key, evt.matches);

        if (!this.#pendingUpdate) {
          this.#pendingUpdate = true;

          requestAnimationFrame(() => {
            this.#pendingUpdate = false;
            this.#dispatchChange(); // Dispatch only once per frame.
          });
        }

        /*
        const prev = this.#matches.get(key);
        if (prev !== evt.matches) {
          this.#matches.set(key, evt.matches);
          this.#dispatchChange();
        }
        */
      };

      mql.addEventListener('change', listener);

      this.#handlers.set(key, listener);
    }

    // Emit initial state.
    this.#dispatchChange();
  }

  #rangeToMediaQuery(range) {
    const parts = [];
    if (range.min != null) {
      parts.push(`(min-width: ${range.min}px)`);
    }
    if (range.max != null) {
      parts.push(`(max-width: ${range.max}px)`);
    }
    return parts.join(' and ');
  }

  #dispatchChange() {
    const detail = {
      matches: Object.fromEntries(this.#matches),
    };

    this.dispatchEvent(new CustomEvent('change', { detail }));
  }

  get matches() {
    return Object.fromEntries(this.#matches);
  }

  if(key) {
    return this.#matches.get(key) ?? false;
  }

  destroy() {
    for (const [key, mql] of this.#mqls.entries()) {
      const listener = this.#handlers.get(key);
      if (!listener) continue;
      mql.removeEventListener('change', listener);
    }

    this.#mqls.clear();
    this.#handlers.clear();
    this.#matches.clear();
  }
}
