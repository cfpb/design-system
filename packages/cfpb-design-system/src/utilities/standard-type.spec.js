import { BEHAVIOR_PREFIX, JS_HOOK, STATE_PREFIX } from './standard-type.js';

describe('standard-type', () => {
  it('should return the proper configurations and constants', () => {
    expect(BEHAVIOR_PREFIX).toBe('behavior_');
    expect(JS_HOOK).toBe('data-js-hook');
    expect(STATE_PREFIX).toBe('state_');
  });
});
