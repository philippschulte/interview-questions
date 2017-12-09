'use strict';

/**
 * Given a string, return true if the string is a palindrome or false if it is not.
 * @param str {string} The string in question.
 * @return {boolean} True or false depending on whether it's a palindrome.
 * @example palindrome('wow'); // => true
 */
function palindrome(str) {
  return str.split('').every((char, i, list) => {
    return char === list[list.length - i - 1];
  });
}

module.exports = palindrome;
