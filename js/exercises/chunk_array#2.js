'use strict';

/**
 * Given an array and chunk size, divide the array into
 * many subarrays where each subarray is of length size.
 * @param array {array} The array to be chunked.
 * @param size {number} The chunk size.
 * @return {array} An array of subarrays.
 * @example chunkArray([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
 */
function chunkArray(array, size) {
  let chunked = [];

  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }

  return chunked;
}

module.exports = chunkArray;
