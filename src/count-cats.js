const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.length == 0 ? 0 : matrix.reduce((acc, curr) => acc.filter(item => item === '^^').concat(curr.filter(item => item === '^^'))).length;
};