const { groupBy } = require('./groupBy');

describe('GroupBy', () => {
  test('it should return an object', () => {
    const data = ['one', 'two', 'three'];
    let res = groupBy(data, 'length');
    expect(typeof res === 'object').toBe(true);
  });

  test('it should return the right answer for a string attribute', () => {
    const data = ['one', 'two', 'three', 'four'];
    let res = groupBy(data, 'length');
    expect(res).toEqual({ 3: ['one', 'two'], 4: ['four'], 5: ['three'] });
  });

  test('it should return the right answer for a function attribute', () => {
    const data = [1.3, 2.1, 2.4];
    const res = groupBy(data, function(num) {
      return Math.floor(num);
    });
    expect(res).toEqual({ 1: [1.3], 2: [2.1, 2.4] });
  });
});
