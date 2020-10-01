const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resultArray = [];
  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined && options.addition) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes || 1) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (i < options.repeatTimes - 1) {
        resultArray.push(String(str))
        if (String(options.addition)) {
          if (options.additionRepeatTimes || 1) {
            for (let j = 0; j < options.additionRepeatTimes; j++) {
              if (j < options.additionRepeatTimes - 1) {
                resultArray.push(String(options.addition), additionSeparator);
              } else {
                resultArray.push(String(options.addition));
              }
            }
          }
        }
        resultArray.push(separator)
      }
      else  {
        resultArray.push(String(str))
        if (String(options.addition)) {
          if (options.additionRepeatTimes || 1) {
            for (let j = 0; j < options.additionRepeatTimes; j++) {
              if (j < options.additionRepeatTimes - 1) {
                resultArray.push(String(options.addition), additionSeparator);
              } else {
                resultArray.push(String(options.addition));
              }
            }
          }
        }
      } 
    }
  }
  return resultArray.join("")



  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};