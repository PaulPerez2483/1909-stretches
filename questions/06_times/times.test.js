const { times } = require('./times');

describe('Times', () => {
  test('it should return a function', () => {
    const tenTimes = times(10);
    expect(typeof tenTimes).toBe('function');
  });

  test('it should give the correct answer', () => {
    const tenTimes = times(10);
    const result = tenTimes(5);
    expect(result).toBe(50);
  });

  test('should give the correct answer', () => {
    const fiveTimes = times(5);
    const result = fiveTimes(11);
    expect(result).toBe(55);
  });

  test('is not hard coded', () => {
    let random = Math.floor(Math.random() * 100);
    const randTimes = times(random);
    const result = randTimes(5);
    expect(result).toBe(5 * random);
  });

  test('throws an exception when a non-number is passed', () => {
    expect(() => times('x')).toThrow('Numbers only!');
    expect(() => times([])).toThrow('Numbers only!');
  });
});
