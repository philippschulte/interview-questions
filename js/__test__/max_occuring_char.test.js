'use strict';

const maxOccuringChar = require('../exercises/max_occuring_char');

describe('#maxOccuringChar', () => {
  const cases = [
    ['a', 'a'],
    ['1', 'ab1c1d1e1f1g1'],
    ['a', 'abcdefghijklmnaaaaa']
  ];

  test('should be a function', () => {
    expect(typeof maxOccuringChar.v1).toEqual('function');
  });

  test.each(cases)(
    `should return '%s' for '%s'`,
    (expected, str) => {
      expect(maxOccuringChar.v1(str)).toBe(expected);
    }
  );
});
