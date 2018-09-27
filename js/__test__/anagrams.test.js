'use strict';

const anagrams = require('../exercises/anagrams');

describe('#anagrams', () => {
  const cases = [
    [true, 'hello', 'llohe'],
    [true, 'Whoa! Hi!', 'Hi! Whoa!'],
    [true, 'rail safety', 'fairy tales'],
    [false, 'One One', 'Two two two'],
    [false, 'One one', 'One one c'],
    [false, 'Hi there', 'Bye there']
  ];

  test('should be a function', () => {
    expect(typeof anagrams.v1).toEqual('function');
    expect(typeof anagrams.v2).toEqual('function');
  });

  test.each(cases)(
    `should return '%p' for '%s', and '%s'`,
    (expected, str_a, str_b) => {
      expect(anagrams.v1(str_a, str_b)).toBe(expected);
      expect(anagrams.v2(str_a, str_b)).toBe(expected);
    }
  );
});
