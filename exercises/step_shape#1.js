'use strict';

/**
 * Write a function that accepts a positive number n. The
 * function should return an array of strings representing
 * a step shape with n levels using the # character. Make
 * sure the step has spaces on the right hand side so that
 * each string has the same amount of characters!
 * @param n {number} The number of step levels.
 * @return {array} Array of strings representing a step shape.
 * @example stepShape(3); // => [ '#  ', '## ', '###' ]
 */
function stepShape(n) {
  const shape = [];

  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      column <= row ? stair += '#' : stair += ' ';
    }

    shape.push(stair);
  }

  return shape;
}

module.exports = stepShape;
