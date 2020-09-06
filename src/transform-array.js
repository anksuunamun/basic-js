const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    let arrCopy = arr.slice();
    let resultArray = [];
    startNewSearch:
      for (let i = 0; i < arrCopy.length; i++) {
        if (arrCopy[i] !== '--discard-next' && arrCopy[i] !== '--double-prev' && arrCopy[i] !== '--discard-prev' && arrCopy[i] !== '--double-next') {
          if ((arrCopy[i - 1] === '--discard-next' && arrCopy[i + 1] === '--double-prev') || (arrCopy[i - 1] === '--discard-next' && arrCopy[i + 1] === '--discard-prev')) {
            continue startNewSearch;
          } else if ((arrCopy[i - 1] === '--double-next' && arrCopy[i + 1] === '--discard-prev')) {
            resultArray.push(arrCopy[i]);
            continue startNewSearch;
          } else if ((arrCopy[i - 1] === '--double-next' && arrCopy[i + 1] === '--double-prev')) {
            resultArray.push(arrCopy[i], arrCopy[i], arrCopy[i]);
            continue startNewSearch;
          } else if (arrCopy[i - 1] === '--discard-next') {
            continue startNewSearch;
          } else if (arrCopy[i - 1] === '--double-next') {
            resultArray.push(arrCopy[i], arrCopy[i])
            continue startNewSearch;
          } else if (arrCopy[i + 1] === '--discard-prev') {
            continue startNewSearch;
          } else if (arrCopy[i + 1] === '--double-prev') {
            resultArray.push(arrCopy[i], arrCopy[i])
            continue startNewSearch;
          }
          resultArray.push(arrCopy[i]);
        } else if (arrCopy[i] === '--discard-next' || arrCopy[i] === '--double-prev' || arrCopy[i] === '--discard-prev' || arrCopy[i] === '--double-next') {
          continue startNewSearch;
        }
      }


    return resultArray;
  } else {
    throw new Error("Error");
  }

};