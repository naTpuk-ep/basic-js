const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');

  if (!Array.isArray(arr)) throw new CustomError('Not an array');
  tArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next' : {
          if (arr[i+1]) i++;
          else continue;
        }
        break;

      case '--discard-prev' : {
          if (tArr[i-1]) tArr.pop()
          else continue;
        }
        break;

      case '--double-next' : {
        if (arr[i+1]) tArr.push(arr[i+1]);
        else continue;
        }
        break;

      case '--double-prev' : {
        if (tArr[i-1]) tArr.push(tArr[tArr.length-1])
        else continue;
        }
        break;

      default: tArr.push(arr[i]);
    }
  }
  
  return tArr;
};
