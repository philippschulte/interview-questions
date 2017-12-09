'use strict';

const maxOccuringChar = require('../exercises/max_occuring_char#1');

describe('#maxOccuringChar#1', () => {
  test('should exists', () => {
    expect(maxOccuringChar).toBeDefined();
  });

  test('should return the most commonly used character', () => {
    expect(maxOccuringChar('a')).toEqual('a');
    expect(maxOccuringChar('abcdefghijklmnaaaaa')).toEqual('a');
    expect(maxOccuringChar('ab1c1d1e1f1g1')).toEqual('1');
  });
});
