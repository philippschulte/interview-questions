'use strict';

const stepShape = require('../exercises/step_shape#1');

describe('#stepShape#1', () => {
  test('should be a function', () => {
    expect(typeof stepShape).toEqual('function');
  });

  test('should return an array of strings representing a step shape', () => {
    expect(stepShape(1)).toEqual(['#']);
    expect(stepShape(2)).toEqual(['# ', '##']);
    expect(stepShape(3)).toEqual(['#  ', '## ', '###']);
    expect(stepShape(4)).toEqual(['#   ', '##  ', '### ', '####']);
    expect(stepShape(5)).toEqual(['#    ', '##   ', '###  ', '#### ', '#####']);
  });
});
