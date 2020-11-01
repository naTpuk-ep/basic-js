const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(rev = true) {
    this.rev= rev;
  }
  encrypt(str, key) {
    if (!str || !key) {
      throw new CustomError('enter mondatory')
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    let resArr = str.split('').map((e, i) =>  {
      if (!/[A-Z]/.test(e)) return e;
      let eCode = e.charCodeAt() + key[j].charCodeAt() - 65;

      if (++j >= key.length) j = 0;
      if (eCode > 90) {
        eCode = eCode - 26;
      }
      return String.fromCharCode(eCode);
    });
  
    return (this.rev || typeof this.rev === 'undefined') ? resArr.join('') : resArr.reverse().join('');
  }

  decrypt(str, key) {

    if (!str || !key) {
      throw new CustomError('enter mondatory')
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    let resArr = str.split('').map((e, i) =>  {
      if (!/[A-Z]/.test(e)) return e;
      let eCode = e.charCodeAt() - key[j].charCodeAt() + 65;
      
      if (++j >= key.length) j = 0;
      if (eCode < 65) {
        eCode = eCode + 26;
      }
      return String.fromCharCode(eCode);
    });
  
    return (this.rev || typeof this.rev === 'undefined') ? resArr.join('') : resArr.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;


