'use strict';

/**
 * Write a function that accepts a string. The function
 * should capitalize the first letter of each word in
 * the string then return the capitalized string.
 * @param str {string} The string to be capitalized.
 * @return {string} The capitalized string.
 * @example capitalize('look, it is working!') // => Look, It Is Working!
 */
module.exports.v1 = function(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
};
