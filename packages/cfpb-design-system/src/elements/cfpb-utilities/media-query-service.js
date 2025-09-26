export class MediaQueryService extends EventTarget {
  static breakpoints = {
    xs: {
      min: 0,
      max: 600,
    },
    sm: {
      min: 601,
      max: 900,
    },
    med: {
      min: 901,
      max: 1020,
    },
    lg: {
      min: 1021,
      max: 1200,
    },
    xl: {
      min: 1201,
    },
  };

  #handlers;
  #queries;
  #matches;
  #breakpoints;

  /**
   *
   * @param {Object} breakpoints - Map of breakpoint names to media queries.
   */
  constructor(breakpoints) {
    super();
    this.#breakpoints =
      typeof breakpoints === 'undefined'
        ? MediaQueryService.breakpoints
        : breakpoints;
    this.#queries = {};
    this.#matches = { xs: false, sm: false, med: false, lg: false, xl: false };
    this.#handlers = {};

    Object.entries(this.#breakpoints).forEach(([key, query]) => {
      let mediaQuery = `(${query.min}px <= width`;
      if (query.max) mediaQuery += ` <= ${query.max}px`;
      mediaQuery += ')';
      const mql = window.matchMedia(mediaQuery);
      this.#queries[key] = mql;
      this.matches[key] = mql.matches;

      const handler = (event) => {
        this.#matches[key] = event.matches;
        this.#dispatch();
      };

      mql.addEventListener('change', handler);
      this.#handlers[key] = handler;
    });

    this.#dispatch();
  }

  /**
   * Dispatch a change event with all current matches.
   */
  #dispatch() {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { matches: { ...this.#matches } },
      }),
    );
  }

  /**
   * Get current matches.
   */
  get matches() {
    return { ...this.#matches };
  }

  /**
   * Clean up listeners.
   */
  destroy() {
    Object.entries(this.#queries).forEach(([key, value]) => {
      mql.removeEventListener('change', this.#handlers[key]);
    });
  }
}
