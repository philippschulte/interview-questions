'use strict';

/**
 * Check to see if two provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces or
 * punctuation. Consider capital letters to be the same as lower case.
 * @param str_a {string} The first string in question.
 * @param str_b {string} The second string in question.
 * @return {boolean} True or false depending on whether it's an anagram.
 * @example anagrams('RAIL! SAFETY!', 'fairy tales') // => true
 */
function anagrams(str_a, str_b) {
  return cleanString(str_a) === cleanString(str_b);
}

function cleanString(str) {
  return str
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
