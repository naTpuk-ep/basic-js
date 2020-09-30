const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = toString(sampleActivity);
  if (sampleActivity && parseInt(sampleActivity) > 0 && !isNaN(parseInt(sampleActivity))) {
    return Math.ceil((Math.log(15/parseInt(sampleActivity))*5730)/0.693);
  } else 
  return false
};


