const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? Number(options.repeatTimes) : 1;
  let separator = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  let addition = options.hasOwnProperty('addition') ? String(options.addition) : '';
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? Number(options.additionRepeatTimes) : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';
  let separateString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str+separateString).join(separator);
}

module.exports = {
  repeater
};
