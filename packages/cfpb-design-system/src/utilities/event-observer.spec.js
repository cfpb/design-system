import { jest } from '@jest/globals';
import { EventObserver } from './event-observer.js';

const HTML_SNIPPET = '<!DOCTYPE html>';

let mockEvent;
let spy1;
let spy2;

describe('EventObserver', () => {
  beforeEach(() => {
    mockEvent = { events: {} };
    mockEvent = Object.assign(mockEvent, new EventObserver());
    spy1 = jest.fn();
    spy2 = jest.fn();
    document.body.innerHTML = HTML_SNIPPET;
  });

  it('should add the correct methods to an object when mixed in', () => {
    expect(mockEvent.addEventListener).toBeInstanceOf(Function);
    expect(mockEvent.removeEventListener).toBeInstanceOf(Function);
    expect(mockEvent.dispatchEvent).toBeInstanceOf(Function);
  });

  it('should correctly add event listeners', () => {
    mockEvent.addEventListener('click', spy1);
    expect(mockEvent.getRegisteredEvents()['click'][0] === spy1).toBe(true);
    mockEvent.addEventListener('click', spy2);
    expect(mockEvent.getRegisteredEvents()['click'][1] === spy2).toBe(true);
    expect(
      {}.hasOwnProperty.call(mockEvent.getRegisteredEvents(), 'click'),
    ).toBe(true);
  });

  it('should correctly trigger event listeners', () => {
    mockEvent = Object.assign(mockEvent, new EventObserver());
    mockEvent.addEventListener('click', spy1);
    mockEvent.dispatchEvent('click');
    expect(spy1).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalled();
  });

  it('should correctly remove event listeners', () => {
    mockEvent.addEventListener('click', spy1);
    expect(mockEvent.getRegisteredEvents()['click'][0] === spy1).toBe(true);
    mockEvent.addEventListener('click', spy2);
    expect(mockEvent.getRegisteredEvents()['click'][1] === spy2).toBe(true);
    mockEvent.removeEventListener('click', spy1);
    mockEvent.removeEventListener('click', spy2);
    expect(
      {}.hasOwnProperty.call(mockEvent.getRegisteredEvents(), 'click'),
    ).toBe(true);
    expect(mockEvent.getRegisteredEvents()['click'].length).toBe(0);
    mockEvent.dispatchEvent('click');
    expect(spy1).toHaveBeenCalledTimes(0);
    expect(spy2).toHaveBeenCalledTimes(0);
  });
});
