'use strict';

/**
 * Given an array and chunk size, divide the array into
 * many subarrays where each subarray is of length size.
 * @param arr {array} The array to be chunked.
 * @param size {int} The chunk size.
 * @return {array} An array of subarrays.
 * @example chunkArray([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
 */
module.exports.v1 = function(arr, size) {
  let chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
};

module.exports.v2 = function(arr, size) {
  let chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }

  return chunked;
};
