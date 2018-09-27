'use strict';

const chunkArray = require('../exercises/chunk_array');

describe('#chunkArray', () => {
  const cases = [
    [[[1], [2], [3]], [1, 2, 3], 1],
    [[[1, 2, 3], [4, 5]], [1, 2, 3, 4, 5], 3],
    [[[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2]
  ];

  test('should be a function', () => {
    expect(typeof chunkArray.v1).toEqual('function');
    expect(typeof chunkArray.v2).toEqual('function');
  });

  test.each(cases)(
    `should return '%p' for '%p', and '%d'`,
    (expected, arr, size) => {
      expect(chunkArray.v1(arr, size)).toEqual(expected);
      expect(chunkArray.v2(arr, size)).toEqual(expected);
    }
  );
});
