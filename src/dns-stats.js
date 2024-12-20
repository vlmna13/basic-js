const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let list = {};
  domains.forEach(el => {
  let splitDomains = el.split('.').reverse();
  let str = "";
    splitDomains.forEach(domain => {
      str += '.' + domain;
      if(!list.hasOwnProperty(str)) {
      list[str] = 1; 
  } else {
      list[str] += 1;
  }
})
})
  return list;
}

module.exports = {
  getDNSStats
};
