const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply(/*fill this in*/)).toThrow();

    expect(() => multiply(/*fill this in*/)).toThrow();
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(/*fill this in*/).toBe(/*fill this in*/);

    // test that the returned value is correct
    expect(/*fill this in*/).toBe(/*fill this in*/);

    // test some other values
    expect(/* fill this in */).toBe(/* fill this in */);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    // test some random values
  });
});
