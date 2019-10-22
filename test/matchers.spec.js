const sum = require('../utils');

// test('add check', () => {
//   expect(sum(1, 2)).toBe(3);
// })


describe('common matchers', () => {
  it('toBe', () => {
    expect(sum(1, 2)).toBe(3);
  })

  it('toEual', () => {
    const obj = { one: 1 };
    expect(obj).toEqual({ one: 1 });
  })
  
  it('toEual2', () => {
    const obj = { one: 1 };
    obj.two = 2;
    expect(obj).toEqual({ one: 1, two: 2 });
  })
  
  it('not.toBe', () => {
    const obj = { one: 1 };
    obj.two = 2;
    expect(obj).not.toBe({ one: 1, two: 21 });
  })
})

// Truthiness
describe('Truthiness', () => {
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  it('zero', () => {
    const n = '1';
    expect(n).toBeTruthy();
    expect(n).not.toBeUndefined();
  })
})

// Numbers
describe('numbers', () => {
  it('plus', () => {
    const val = 2 + 2;
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(3.5);
    expect(val).toBeLessThan(5);
    expect(val).toBeLessThanOrEqual(4.5);
  })

  it('plus2', () => {
    const val = 2 + 2;
    expect(val).toBe(4);
    expect(val).toEqual(4);
  })

  it('float number', () => {
    const val = 0.1 + 0.2;
    expect(val).toBeCloseTo(0.3);
  })
})

// Strings
describe('strings', () => {
  it('Make some noise', () => {
    expect('Make some noise').toMatch('noise');
    expect('Make some noise').toMatch(/som/);
    expect('Make some noise').not.toMatch(/cool/);
  })
})

// Arrays
describe('Arrays', () => {
  it('list item check', () => {
    const list = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer',
    ];
    expect(list).toContain('beer');
    expect(new Set(list)).toContain('beer');
  })
})

// Exceptions
test('throw error', () => {
  function foo() {
    throw new Error('err');
  }
  expect(foo).toThrow();
  expect(foo).toThrow(Error);

  expect(foo).toThrow('err');
  expect(foo).toThrow(/er/);
})