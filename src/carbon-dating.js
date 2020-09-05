const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if ((typeof (sampleActivity) === "string" && (typeof (+sampleActivity) === "number")) && +sampleActivity < 15 && +sampleActivity > 0) {
    let t;
    t = Math.log(MODERN_ACTIVITY / (+sampleActivity)) / K;
    return Math.ceil(t);
  }
  return false;

};