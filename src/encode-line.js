const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = ''
  let counter = 1;
  for ( let i = 1; i < str.length + 1; i++){
    if(str[i] == str[i - 1]){
      counter += 1;
    } else{
      if(counter == 1){
        newStr += str[i - 1];
      } else {
        newStr += counter + str[i - 1];
      }
      counter = 1;
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
