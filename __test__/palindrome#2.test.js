'use strict';

const palindrome = require('../exercises/palindrome#2');

describe('#palindrome#2', () => {
  test('should exists', () => {
    expect(palindrome).toBeDefined();
  });

  test('should return true if it is a palindrome', () => {
    expect(palindrome('civic')).toBeTruthy();
    expect(palindrome('rotator')).toBeTruthy();
    expect(palindrome('madam')).toBeTruthy();
    expect(palindrome('kayak')).toBeTruthy();
  });

  test('should return false if it is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
    expect(palindrome('aba ')).toBeFalsy();
    expect(palindrome('greetings')).toBeFalsy();
    expect(palindrome('philipp')).toBeFalsy();
  });
});
