'use strict';

/**
 * Given an integer, return an integer that is the reverse.
 * @param num {number} The integer to be reversed.
 * @return {number} The reversed integer.
 * @example reverseInt(123); // => 321
 */
function reverseInt(num) {
  let reversed = num
    .toString()
    .split('')
    .reverse()
    .join('');    
  
  return parseInt(reversed) * Math.sign(num);
}

module.exports = reverseInt;
