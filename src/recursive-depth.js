const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    for( let element of arr){
      if( typeof element == 'object'){
        let elementDepth = this.calculateDepth(element);
        if(elementDepth > maxDepth){
          maxDepth = elementDepth;
        }
      }
    }
    return maxDepth + 1;
  }
}

module.exports = {
  DepthCalculator
};
