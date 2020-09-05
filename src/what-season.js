const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const WINTER = "winter";
  const SPRING = "spring";
  const SUMMER = "summer";
  const AUTUMN = "autumn";

  if (Object.prototype.toString.call(date) === '[object Date]') {
    let month = date.getMonth();
    if (month === 0 || month === 1 || month === 11) {
      return WINTER;
    } else if (month === 2 || month === 3 || month === 4) {
      return SPRING;
    } else if (month === 5 || month === 6 || month === 7) {
      return SUMMER;
    } else if (month === 8 || month === 9 || month === 10) {
      return AUTUMN;
    }
  }
  else if (Object.prototype.toString.call(date) === "[object Undefined]") {
    return "Unable to determine the time of year!";
  }
  else {
    throw new Error("Error");
  }
};