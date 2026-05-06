/**
 * A service for embedding and using translations via markup.
 *
 * Expect markup like:
 * <i18n-service>
 *   <template>
 *     {
 *       "en": { "hello": "Hello", "good afternoon": "Good afternoon" },
 *       "es": { "hello": "Hola", "good afternoon": "Buenas tardes" }
 *     }
 *   </template>
 * </i18n-service>
 */
export class I18nService extends HTMLElement {
  #translations;
  #language;

  constructor() {
    super();
    this.#translations = {};
    this.#language = '';
  }

  connectedCallback() {
    const errors = [];
    const template = this.querySelector('template');
    if (!template) {
      errors.push([
        'missing-template',
        'No <template> found inside <i18n-service>',
      ]);
      return;
    }

    try {
      const json = template.innerHTML.trim();
      const data = JSON.parse(json);

      if (typeof data !== 'object' || Array.isArray(data)) {
        errors.push([
          'invalid-format',
          'Translations JSON must be an object keyed by the language codes',
        ]);
      }

      this.#translations = data;

      // Set default lanugage to the first available one, if not already set.
      const available = this.availableLanguages;
      if (available.length > 0 && !this.#language) {
        this.language = available[0];
      }
    } catch (err) {
      errors.push([
        'parse-error',
        'Failed to parse i18n template JSON',
        { err },
      ]);
    }

    // Aggregate any errors together and dispatch them when the app has
    // refreshed, which gives other components a chance to listen for them.
    requestAnimationFrame(() => {
      errors.forEach((error) => {
        this.#dispatchError(...error);
      });
    });
  }

  /**
   * Set the current language
   * @param {string} lang - Language code (e.g. "en", "es", "ar", "ru", etc.)
   */
  set language(lang) {
    if (!this.#translations[lang]) {
      this.#dispatchError('invalid-language', `Unsupported language: ${lang}`, {
        lang,
      });
      return;
    }

    if (this.#language !== lang) {
      this.#language = lang;
      this.dispatchEvent(
        new CustomEvent('i18n-change', {
          detail: { language: lang },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  /**
   * @returns {string} The currently set language.
   */
  get language() {
    return this.#language;
  }

  get availableLanguages() {
    return Object.keys(this.#translations);
  }

  /**
   * Translate a language key.
   * @param {string} key - An arbitrary key from the <template>.
   * @returns {string} The translation.
   */
  translate(key) {
    return this.#translations[this.#language]?.[key] || key;
  }

  #dispatchError(type, message, extra = {}) {
    this.dispatchEvent(
      new CustomEvent('i18n-error', {
        detail: { type, message, ...extra },
        bubbles: true,
        composed: true,
      }),
    );
  }

  static init() {
    window.customElements.get('i18n-service') ||
      window.customElements.define('i18n-service', I18nService);
  }
}
