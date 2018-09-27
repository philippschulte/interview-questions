'use strict';

const stepShape = require('../exercises/step_shape');

describe('#stepShape', () => {
  const cases = [
    [['#'], 1],
    [['# ', '##'], 2],
    [['#  ', '## ', '###'], 3],
    [['#   ', '##  ', '### ', '####'], 4],
    [['#    ', '##   ', '###  ', '#### ', '#####'], 5]
  ];

  test('should be a function', () => {
    expect(typeof stepShape.v1).toEqual('function');
  });

  test.each(cases)(
    `should return '%p' for '%d'`,
    (expected, steps) => {
      expect(stepShape.v1(steps)).toEqual(expected);
    }
  );
});
