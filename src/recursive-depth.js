// const CustomError = require("../extensions/custom-error");

const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  recurs(arr){
    if(arr.some(e => Array.isArray(e))) {
      this.depth++;
      return this.recurs(arr.flat(1));
    } else return (this.depth);
  }

  calculateDepth(arr) {
    if (!arr) {
      throw new CustomError( 'incorrect')
    }
    if (Array.isArray(arr)) {
      this.depth = 1;
      return this.recurs(arr);
    } else throw new CustomError( 'incorrect')
  }
};