const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor((turns / (turnsSpeed)) * 60 * 60);
  let result = {
    turns,
    seconds
  }
  return (result)
};