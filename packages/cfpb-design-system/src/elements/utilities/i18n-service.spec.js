import { describe, jest } from '@jest/globals';
import { I18nService } from './i18n-service';

I18nService.init();

describe('I18Service', () => {
  let elm;
  beforeEach(() => {
    jest.useFakeTimers();
    elm = document.createElement('i18n-service');
    document.body.appendChild(elm);
  });

  afterEach(() => {
    document.body.removeChild(elm);
    jest.useRealTimers();
  });

  xdescribe('connectedCallback and template parsing', () => {
    it('dispatches error when template is missing', async () => {
      elm.addEventListener('i18n-error', (evt) => {
        expect(evt.detail.type).toBe('missing-template');
        expect(evt.detail.message).toMatch(/No <template> found/);
      });
      elm.connectedCallback();
      // We expect requestAnimationFrame to schedule the dispatch: flush it.
      await jest.runOnlyPendingTimers();
    });

    it('dispatches parse-error when JSON is invalid', async () => {
      const tpl = document.createElement('template');
      tpl.innerHTML = '{ invalid json }';
      elm.appendChild(tpl);

      elm.addEventListener('i18n-error', (evt) => {
        expect(evt.detail.type).toBe('parse-error');
        expect(evt.detail.message).toMatch(/Failed to parse/);
        expect(evt.detail.err).toBeDefined();
      });

      elm.connectedCallback();
      await jest.runOnlyPendingTimers();
    });

    it('dispatches invalid-format when JSON is an array or not object', async () => {
      const tpl = document.createElement('template');
      tpl.innerHTML = JSON.stringify(['a', 'b', 'c']);
      elm.appendChild(tpl);

      elm.addEventListener('i18n-error', (evt) => {
        expect(evt.detail.type).toBe('invalid-format');
        expect(evt.detail.message).toMatch(/must be an object/);
      });

      elm.connectedCallback();
      await jest.runOnlyPendingTimers();
    });

    it('parses valid JSON and sets default language', () => {
      const translations = {
        en: { hello: 'Hello' },
        es: { hello: 'Hola' },
      };

      const tpl = document.createElement('template');
      tpl.innerHTML = JSON.stringify(translations);
      elm.appendChild(tpl);

      elm.connectedCallback();
      jest.runOnlyPendingTimers();

      expect(elm.language).toBe('en');
      expect(elm.availableLanguages).toEqual(['en', 'es']);
      expect(elm.translate('hello')).toBe('Hello');
    });
  });

  describe('language setter/getter and events', () => {
    beforeEach(() => {
      const translations = {
        en: { a: 'A' },
        es: { a: 'Une' },
      };

      const tpl = document.createElement('template');
      tpl.innerHTML = JSON.stringify(translations);
      elm.appendChild(tpl);
    });

    it('does not dispatch event or set if invalid language', async () => {
      elm.addEventListener('i18n-error', (evt) => {
        expect(evt.detail.type).toBe('invalid-language');
        expect(evt.detail.message).toMatch(/Unsupported language/);
      });
      elm.connectedCallback();
      await jest.runOnlyPendingTimers();

      elm.language = 'de';
      expect(elm.language).toBe('en');
    });

    it('switching to valid language dispatches i18n-change event', async () => {
      elm.connectedCallback();
      await jest.runOnlyPendingTimers();

      elm.addEventListener('i18n-change', (evt) => {
        expect(evt.detail.language).toBe('es');
      });

      elm.language = 'es';
      expect(elm.language).toBe('es');
    });

    it('assigning the same language does not re-dispatch change', async () => {
      elm.connectedCallback();
      await jest.runOnlyPendingTimers();
      const spy = jest.fn();

      elm.addEventListener('i18n-change', spy);
      elm.language = 'es';
      elm.language = 'es';
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('translate()', () => {
    beforeEach(() => {
      const translations = {
        en: { hello: 'Hello' },
        es: { hello: 'Hola' },
      };

      const tpl = document.createElement('template');
      tpl.innerHTML = JSON.stringify(translations);
      elm.appendChild(tpl);
    });

    it('returns correct translation for existing key', async () => {
      elm.connectedCallback();
      await jest.runOnlyPendingTimers();

      expect(elm.translate('hello')).toBe('Hello');
      elm.language = 'es';
      expect(elm.translate('hello')).toBe('Hola');
    });

    it('falls back to key if missing translation', () => {
      expect(elm.translate('nonexistent')).toBe('nonexistent');
    });

    it('returns key if translations or language not set', () => {
      const e2 = document.createElement('i18n-service');
      expect(e2.translate('whatever')).toBe('whatever');
    });
  });
});
