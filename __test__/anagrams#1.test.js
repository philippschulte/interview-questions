'use strict';

const anagrams = require('../exercises/anagrams#1');

describe('#anagrams#1', () => {
  test('should exists', () => {
    expect(anagrams).toBeDefined();
  });

  test('should return true if it is an anagram', () => {
    expect(anagrams('hello', 'llohe')).toBeTruthy();
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
    expect(anagrams('rail safety', 'fairy tales')).toBeTruthy();
  });

  test('should return false if it is not an anagram', () => {
    expect(anagrams('One One', 'Two two two')).toBeFalsy();
    expect(anagrams('One one', 'One one c')).toBeFalsy();
    expect(anagrams('Hi there', 'Bye there')).toBeFalsy();
  });
});
