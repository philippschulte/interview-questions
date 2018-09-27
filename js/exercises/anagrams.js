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
module.exports.v1 = function(str_a, str_b) {
  const charMap_a = buildCharMap(str_a);
  const charMap_b = buildCharMap(str_b);

  if (Object.keys(charMap_a).length !== Object.keys(charMap_b).length) return false;

  for (let char in charMap_a) {
    if (charMap_a[char] !== charMap_b[char]) return false;
  }

  return true;
};

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/\W/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  
  return charMap;
}

module.exports.v2 = function(str_a, str_b) {
  return cleanString(str_a) === cleanString(str_b);
};

function cleanString(str) {
  return str
    .replace(/\W/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}
