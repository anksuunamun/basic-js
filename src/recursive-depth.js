const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
    this.depth = 1
  }

  calculateDepth(arr) {
    Array.prototype.max = function() {
      return Math.max.apply(null, this);
    };
    function findDepth(arr, depth = 0){
      if (Array.isArray(arr)){
        return arr.map((value) => {
          return findDepth(value, depth+1)
        } ).max()
      }
      
      return depth;
    }

    return findDepth(arr)
    
  }
}