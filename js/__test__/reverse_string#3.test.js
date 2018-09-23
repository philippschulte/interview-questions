'use strict';

const reverseString = require('../exercises/reverse_string#3');

describe('#reverseString#3', () => {
  test('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  test('should reverse a string', () => {
    expect(reverseString('abcd')).toEqual('dcba');
    expect(reverseString('  abcd')).toEqual('dcba  ');
  });
});
