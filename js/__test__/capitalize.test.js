'use strict';

const capitalize = require('../exercises/capitalize');

describe('#capitalize', () => {
  const cases = [
    ['The Quick Brown Fox', 'the quick brown fox'],
    ['Hi There, How Is It Going?', 'hi there, how is it going?'],
    ['I Love Breakfast At Bill Miller Bbq', 'i love breakfast at bill miller bbq']
  ];

  test('should be a function', () => {
    expect(typeof capitalize.v1).toEqual('function');
  });

  test.each(cases)(
    `should return '%s' for '%s'`,
    (expected, str) => {
      expect(capitalize.v1(str)).toEqual(expected);
    }
  );
});
