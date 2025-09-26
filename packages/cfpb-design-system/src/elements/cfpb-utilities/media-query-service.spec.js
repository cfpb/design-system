import { jest } from '@jest/globals';
import { MediaQueryService } from './media-query-service';

describe('MediaQueryService', () => {
  const originalMatchMedia = window.matchMedia;

  let mockMatchMedia;
  let listeners = {};
  let mediaQueryState = {};

  beforeEach(() => {
    // Reset state before each test.
    listeners = {};
    mediaQueryState = {};

    mockMatchMedia = jest.fn().mockImplementation((query) => {
      const key = query;
      mediaQueryState[key] = mediaQueryState[key] ?? false;

      return {
        matches: mediaQueryState[key],
        media: query,
        addEventListener: (event, cb) => {
          if (event === 'change') {
            listeners[key] = cb;
          }
        },
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      };
    });

    window.matchMedia = mockMatchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  function simulateResize(key, newMedia) {
    mediaQueryState[key] = newMedia;
    if (listeners[key]) {
      listeners[key]({ matches: newMedia });
    }
  }

  it('initializes with default breakpoints and tracks matches', () => {
    const mqs = new MediaQueryService();
    const expectedBreakpoints = ['xs', 'sm', 'med', 'lg', 'xl'];

    expect(Object.keys(mqs.matches)).toEqual(
      expect.arrayContaining(expectedBreakpoints),
    );
  });

  it('accepts custom breakpoints', () => {
    const custom = {
      mobile: { min: 0, max: 500 },
      desktop: { min: 501 },
    };

    const mqs = new MediaQueryService(custom);

    expect(Object.keys(mqs.matches)).toEqual(['mobile', 'desktop']);
  });

  it('fires a single change event when a match changes', (done) => {
    const mqs = new MediaQueryService({
      test: { min: 100 },
    });

    mqs.addEventListener('change', (event) => {
      expect(event.detail.matches.test).toBe(true);
      done();
    });

    simulateResize('(min-width: 100px)', true);
  });

  it('does not fire change if match does not actually change', () => {
    const mqs = new MediaQueryService({
      test: { min: 100 },
    });

    const mockHandler = jest.fn();
    mqs.addEventListener('change', mockHandler);

    simulateResize('(min-width: 100px)', false);
    expect(mockHandler).not.toHaveBeenCalled();
  });

  it('updates matches correctly', () => {
    const mqs = new MediaQueryService({
      large: { min: 1000 },
    });

    expect(mqs.matches.large).toBe(false);
    simulateResize('(min-width: 1000px)', true);
    expect(mqs.matches.large).toBe(true);
  });

  it('destroy removes all listeners', () => {
    const removeListenerMock = jest.fn();

    const testQuery = '(min-width: 500px)';

    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: removeListenerMock,
      };
    });

    const mqs = new MediaQueryService({
      test: { min: 500 },
    });

    mqs.destroy();

    expect(removeListenerMock).toHaveBeenCalled();
  });
});
