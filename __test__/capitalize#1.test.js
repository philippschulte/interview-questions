'use strict';

const capitalize = require('../exercises/capitalize#1');

describe('#capitalize#1', () => {
  test('should exists', () => {
    expect(capitalize).toBeDefined();
  });

  test('should capitalize the first letter of every word in a sentence', () => {
    expect(capitalize('hi there, how is it going?')).toEqual('Hi There, How Is It Going?');
    expect(capitalize('i love breakfast at bill miller bbq')).toEqual('I Love Breakfast At Bill Miller Bbq');
  });
});
