'use strict';

const chunkArray = require('../exercises/chunk_array#1');

describe('#chunkArray#1', () => {
  test('should exists', () => {
    expect(chunkArray).toBeDefined();
  });

  test('should return an array of five subarrays', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunkArray(arr, 2);

    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  test('should return an array of three subarrays', () => {
    const arr = [1, 2, 3];
    const chunked = chunkArray(arr, 1);

    expect(chunked).toEqual([[1], [2], [3]]);
  });

  test('should return an array of two subarrays', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunkArray(arr, 3);

    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
  });
});
