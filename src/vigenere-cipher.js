const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(phrase, cipher) {
    if(!phrase || !cipher){
      throw new Error('Incorrect arguments!');
    };

    let cipherString = cipher.toUpperCase().repeat(Math.ceil(phrase.length / cipher.length)).slice(0, phrase.length);
    let replacedString = '';
    for (let i = 0; i < phrase.length; i++) {
      if (phrase.toUpperCase().charCodeAt(i) >= 65 && phrase.toUpperCase().charCodeAt(i) < 91) {
        replacedString += String.fromCharCode(((phrase.toUpperCase().charCodeAt(i) + cipherString[0].charCodeAt(0)) % 26) + 65);
        cipherString = cipherString.substring(1);
      } else {
        replacedString += phrase.toUpperCase().charAt(i);
      }
    }
    if(this.type === false){
      return replacedString.split('').reverse().join('');
    } else {
        return replacedString;
    }
  }
  decrypt(phrase, cipher) {
    if(!phrase || !cipher){
      throw new Error('Incorrect arguments!');
    };

    let cipherString = cipher.toUpperCase().repeat(Math.ceil(phrase.length / cipher.length)).slice(0, phrase.length);
    let replacedString = '';
    for (let i = 0; i < phrase.length; i++) {
      if (phrase.toUpperCase().charCodeAt(i) >= 65 && phrase.toUpperCase().charCodeAt(i) < 91) {
        replacedString += String.fromCharCode(((phrase.toUpperCase().charCodeAt(i) + 26 - cipherString[0].charCodeAt(0)) % 26) + 65);
        cipherString = cipherString.substring(1);
      } else {
        replacedString += phrase.toUpperCase().charAt(i);
      }
    }
    if(this.type === false){
      return replacedString.split('').reverse().join('');
    } else {
        return replacedString;
    }

  }
}

module.exports = {
  VigenereCipheringMachine
};
