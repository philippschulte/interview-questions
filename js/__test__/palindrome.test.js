'use strict';

const palindrome = require('../exercises/palindrome');

describe('#palindrome', () => {
  const cases = [
    [true, 'civic'],
    [true, 'madam'],
    [true, 'kayak'],
    [true, 'rotator'],
    [false, ' aba'],
    [false, 'aba '],
    [false, 'foobar'],
    [false, 'greetings']
  ];
  
  test('should be a function', () => {
    expect(typeof palindrome.v1).toEqual('function');
    expect(typeof palindrome.v2).toEqual('function');
  });

  test.each(cases)(
    `should return '%s' for '%s'`,
    (expected, str) => {
      expect(palindrome.v1(str)).toBe(expected);
      expect(palindrome.v2(str)).toBe(expected);
    }
  );
});
