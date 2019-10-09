const { query, items } = require('./query');

describe('Query Function', () => {
  test('should return an array', () => {
    let result = query(items, { name: 'foo' });
    expect(Array.isArray(result)).toBe(true);
  });

  test('should return the right value for one key/val pair', () => {
    let result = query(items, { name: 'foo' });
    expect(result).toEqual([
      {
        id: 1,
        name: 'foo',
        price: 2,
      },
    ]);
  });

  test('should return the right value for 2 key/val pairs', () => {
    let result = query(items, { price: 4, name: 'bazz' });
    expect(result).toEqual([
      {
        id: 66,
        name: 'bazz',
        price: 4,
      },
    ]);
  });

  test('answer is not hard-coded', () => {
    const randomNum = Math.floor(Math.random() * 100);
    const items = [
      {
        id: 1,
        name: 'foo',
        price: 2,
      },
      {
        id: 3,
        name: 'bar',
        price: randomNum,
      },
      {
        id: 66,
        name: 'bazz',
        price: randomNum,
      },
    ];

    const result = query(items, { price: randomNum });
    expect(result).toEqual([
      {
        id: 3,
        name: 'bar',
        price: randomNum,
      },
      {
        id: 66,
        name: 'bazz',
        price: randomNum,
      },
    ]);
  });
});
