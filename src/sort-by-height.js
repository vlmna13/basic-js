const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minusOne = [];

  arr = arr.filter((item, index) => {
    if (item === -1) {
      minusOne.push(index);
    } else {
      return item;
    }
  });

  arr.sort((a,b) => a - b);

  minusOne.map(item => {
    arr.splice(item, 0, -1);
  });
  
  return arr;
}

module.exports = {
  sortByHeight
};
