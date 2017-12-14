'use strict';

const reverseInt = require('../exercises/reverse_int#1');

describe('#reverseInt#1', () => {
  test('should be a function', () => {
    expect(typeof reverseInt).toEqual('function');
  });

  test('should reverse positive numbers', () => {
    expect(reverseInt(2)).toEqual(2);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });
  
  test('should reverse negative numbers', () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
  
  test('should handle leading zeros correctly', () => {
    expect(reverseInt(0)).toEqual(0);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-500)).toEqual(-5);
  });
});
