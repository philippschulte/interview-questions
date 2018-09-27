'use strict';

const reverseString = require('../exercises/reverse_string');

describe('#reverseString', () => {
  const cases = [
    ['oof', 'foo'],
    ['rab oof', 'foo bar'],
    ['xof nworb kciuq eht', 'the quick brown fox']
  ];

  test('should be a function', () => {
    expect(typeof reverseString.v1).toEqual('function');
    expect(typeof reverseString.v2).toEqual('function');
    expect(typeof reverseString.v3).toEqual('function');
  });

  test.each(cases)(
    `should return '%s' for '%s'`,
    (expected, str) => {
      expect(reverseString.v1(str)).toBe(expected);
      expect(reverseString.v2(str)).toBe(expected);
      expect(reverseString.v3(str)).toBe(expected);
    }
  );
});
