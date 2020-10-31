const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false
  let res =  arr.filter(word => typeof word === 'string').map(word => word.trim()[0].toUpperCase()).sort().join('');
  return res.length > 0 ? res : false
};
