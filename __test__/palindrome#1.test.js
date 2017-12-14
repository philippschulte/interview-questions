'use strict';

const palindrome = require('../exercises/palindrome#1');

describe('#palindrome#1', () => {
  test('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
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
