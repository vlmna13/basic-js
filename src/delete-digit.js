const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let values = [];
  let stringN = n.toString();
  for (i = 0; i < stringN.length; i++) {
    values.push(stringN.slice(0, i) + stringN.slice(i + 1));
  };
  return Math.max(...values);
}

module.exports = {
  deleteDigit
};
