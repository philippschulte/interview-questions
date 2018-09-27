'use strict';

const reverseInt = require('../exercises/reverse_int');

describe('#reverseInt', () => {
  const cases = [
    [0, 0],
    [2, 2],
    [9, 90],
    [-5, -5],
    [-9, -90],
    [-51, -15],
    [-5, -500],
    [9532, 2359],
    [-9532, -2359]
  ];

  test('should be a function', () => {
    expect(typeof reverseInt.v1).toEqual('function');
  });

  test.each(cases)(
    `should return '%d' for '%d'`,
    (expected, int) => {
      expect(reverseInt.v1(int)).toBe(expected);
    }
  );
});
