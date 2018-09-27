'use strict';

/**
 * Given an integer, return an integer that is the reverse.
 * @param int {int} The integer to be reversed.
 * @return {int} The reversed integer.
 * @example reverseInt(123); // => 321
 */
module.exports.v1 = function reverseInt(int) {
  let reversed = int
    .toString()
    .split('')
    .reverse()
    .join('');
  
  return parseInt(reversed) * Math.sign(int);
};
