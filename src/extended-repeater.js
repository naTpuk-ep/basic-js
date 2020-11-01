const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options = {repeatTimes: 0, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '|'}) {
  let emptyMod = (str) => typeof str === 'undefined' ? '' : String(str);



  if (isNaN(+options.repeatTimes) || isNaN(+options.additionRepeatTimes)) throw new CustomError('wrong options');
  
  let arr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    arr[i] = [];
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      arr[i].push(emptyMod(options.addition));
    }
  }
  
  return arr.map(e => str + e.join(emptyMod(options.additionSeparator))).join(emptyMod(options.separator));
};
