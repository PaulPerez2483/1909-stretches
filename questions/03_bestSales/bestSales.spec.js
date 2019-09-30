const { bestSales, sales } = require('./bestSales');

describe('bestSales', () => {
  const otherSales = [{ amount: 4, productId: 1 }, { amount: 4, productId: 2 }];
  test('should return the right answer', () => {
    expect(bestSales(sales)).toEqual({ id: 4, total: 18 });
  });
  test('should return an empty object if there are no sales', () => {
    expect(bestSales([])).toEqual({});
  });
  test('Returns the first available object', () => {
    expect(bestSales(otherSales)).toEqual({ total: 4, id: 1 });
  });
});
