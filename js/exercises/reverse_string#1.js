'use strict';

/**
 * Given a string, return a new string with the reversed order of characters.
 * @param str {string} The string to be reversed.
 * @return {string} The reversed string.
 * @example reverseString('apple'); // => elppa
 */
function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

module.exports = reverseString;
