const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  function filterM(m){
   return m.filter( (el)=> {return el==="^^"} )};

    let counter = 0;

    for (let item of backyard) {
      if (filterM(item)) {
        counter += filterM(item).length;
      }
    }
    return counter;
};

