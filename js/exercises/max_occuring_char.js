'use strict';

/**
 * Given a string, return the character that is most commonly used in the string.
 * @param str {string} The string in question.
 * @return {string} The most commonly used character.
 * @example maxOccuringChar('philipp'); // => p
 */
module.exports.v1 = function(str) {
  let max = 0;
  let chars = {};
  let maxChar = '';

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
};
