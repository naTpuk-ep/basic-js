const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(n, t) {
  res = 0;
  for (let i = 1; i <= n; i++) {
    res = (2*res + 1);
  }
  return {turns: res, seconds: Math.floor(3600*res/t)}
};