import {
  isUndefined,
  isDefined,
  isObject,
  isString,
  isNumber,
  isDate,
  isArray,
  isFunction,
  isEmpty,
} from './type-checkers.js';

const blankVar = '';
const aString = 'bar';
const aNum = 42;
const aDate = new Date(2011, 7, 21);

/**
 * @returns {boolean} Always returns true.
 */
function aFunction() {
  return true;
}

const anObject = {
  a: '1',
  b: '2',
  c: '3',
};

const anArray = [1, 2, 3];
let UNDEFINED;

describe('TypeCheckers isUndefined', () => {
  it('should identify undefined variables', () => {
    expect(isUndefined(UNDEFINED)).toBe(true);
  });

  it('should NOT return true for blank variables', () => {
    expect(isUndefined(blankVar)).toBe(false);
  });

  it('should NOT return true for defined variables', () => {
    expect(isUndefined(aString)).toBe(false);
  });
});

describe('TypeCheckers isDefined', () => {
  it('should return true for defined variables', () => {
    expect(isDefined(aString)).toBe(true);
  });

  it('should return true for blank variables', () => {
    expect(isDefined(blankVar)).toBe(true);
  });

  it('should NOT return true for undefined variables', () => {
    expect(isDefined(UNDEFINED)).toBe(false);
  });
});

describe('TypeCheckers isObject', () => {
  it('should return true for objects', () => {
    expect(isObject(anObject)).toBe(true);
  });

  it('should return false for strings', () => {
    expect(isObject(aString)).toBe(false);
  });
});

describe('TypeCheckers isString', () => {
  it('should return true for strings', () => {
    expect(isString(aString)).toBe(true);
  });

  it('should return false for objects', () => {
    expect(isString(anObject)).toBe(false);
  });
});

describe('TypeCheckers isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(aNum)).toBe(true);
  });

  it('should return false for strings', () => {
    expect(isNumber(aString)).toBe(false);
    expect(isNumber('42')).toBe(false);
  });
});

describe('TypeCheckers isDate', () => {
  it('should return true for dates', () => {
    expect(isDate(aDate)).toBe(true);
  });

  it('should return false for numbers', () => {
    expect(isDate(aNum)).toBe(false);
  });
});

describe('TypeCheckers isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray(anArray)).toBe(true);
  });

  it('should return false for objects', () => {
    expect(isArray(anObject)).toBe(false);
  });
});

describe('TypeCheckers isFunction', () => {
  it('should return true for a functions', () => {
    expect(isFunction(aFunction)).toBe(true);
  });

  it('should return false for a non-function', () => {
    expect(isFunction(aString)).toBe(false);
  });
});

describe('TypeCheckers isEmpty', () => {
  it('should return true for empty vars', () => {
    expect(isEmpty(blankVar)).toBe(true);
  });

  it('should return false for non-empty vars', () => {
    expect(isEmpty(aString)).toBe(false);
  });
});
