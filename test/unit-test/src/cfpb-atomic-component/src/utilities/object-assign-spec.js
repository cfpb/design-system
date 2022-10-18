import { assign } from '../../../../../../packages/cfpb-atomic-component/src/utilities/object-assign.js';

let testObjectA;
let testObjectB;
let testObjectC;
let UNDEFINED;

describe('object-assign', () => {
  beforeEach(() => {
    testObjectA = {
      str: 'test',
      func: () => 'testStr',
      num: 1,
    };

    testObjectB = {
      obj: { test: 2 },
      arr: [3],
      _null: null,
    };

    testObjectC = {
      bool: Boolean(false),
      undef: UNDEFINED,
      num: 4,
    };
  });

  it('should assign properties from source to destination', () => {
    assign(testObjectA, testObjectB);

    expect(Object.prototype.hasOwnProperty.call(testObjectA, 'obj')).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(testObjectA, 'arr')).toBe(true);
    expect(Object.prototype.hasOwnProperty.call(testObjectA, '_null')).toBe(
      true
    );
  });

  it('should assign values from source to destination', () => {
    assign(testObjectA, testObjectB);

    expect(testObjectA.obj.test).toBe(2);
    expect(testObjectA.arr[0]).toBe(3);
    expect(testObjectA._null).toBeNull();
  });

  it('should assign multiple source properties to destination', () => {
    assign(testObjectA, testObjectB, testObjectC);

    expect(Object.prototype.hasOwnProperty.call(testObjectA, 'bool')).toBe(
      true
    );
    expect(Object.prototype.hasOwnProperty.call(testObjectA, 'undef')).toBe(
      true
    );
    expect(Object.prototype.hasOwnProperty.call(testObjectA, 'num')).toBe(true);
  });

  it('should assign multiple source values to destination', () => {
    assign(testObjectA, testObjectB, testObjectC);

    expect(testObjectA.bool === false).toBe(true);
    expect(typeof testObjectA.undef === 'undefined').toBe(true);
    expect(testObjectA.num === 4).toBe(true);
  });

  it('should selectively overwrite existing source properties', () => {
    expect(testObjectA.num === 1).toBe(true);

    assign(testObjectA, testObjectC);

    expect(testObjectA.str === 'test').toBe(true);
    expect(testObjectA.func() === 'testStr').toBe(true);
    expect(testObjectA.num === 4).toBe(true);
  });
});
