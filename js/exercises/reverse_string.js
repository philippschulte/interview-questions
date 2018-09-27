'use strict';

/**
 * Given a string, return a new string with the reversed order of characters.
 * @param str {string} The string to be reversed.
 * @return {string} The reversed string.
 * @example reverseString('apple'); // => elppa
 */
module.exports.v1 = function(str) {
  return str
    .split('')
    .reverse()
    .join('');
};

module.exports.v2 = function(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
};

module.exports.v3 = function(str) {
  return str.split('').reduce((previous, char) => char + previous, '');
};
