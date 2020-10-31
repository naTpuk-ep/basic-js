const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if(isNaN(date.getTime())) return 'Unable to determine the time of year!'
  let month = date.getMonth();
  let res = month === 11 ? 'winter' : month > 7 ? 'autumn' : month > 4 ? 'summer' : month > 1 ? 'spring' : 'winter';
  return res;
};