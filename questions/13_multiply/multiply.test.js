const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('string', 2)).toThrow();

    expect(() => multiply(4, ['num'])).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(3, 3)).toBe(9);

    // test that the returned value is correct
    expect(multiply(1, 1)).toBe(1);

    // test some other values
    expect(multiply(2, 2)).toBe(4);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
  });
});
