const CustomError = require("../extensions/custom-error");

function СhainMakerImpl(first_el) {
  if (first_el !== undefined) {
    this.elements = [`( ${first_el} )`];
  } else {
    this.elements = [];
  }

  this.getLength = function () {
    return this.elements.length;
  }
  this.addLink = function (value) {
    if (value !== undefined) {
      this.elements.push(`( ${value} )`);
      return this;
    } else {
      this.elements.push(`( )`);
      return this;
    }
  }
  this.removeLink = function (position) {
    if ((typeof (position) === 'number') && (Math.trunc(position) === position) && position <= this.elements.length) {
      this.elements.splice(position - 1, 1);
      return this;
    } else {
      throw new Error("Error");
    }
  }
  this.reverseChain = function () {
    this.elements.reverse();
    return this;
  }
  this.finishChain = function () {
    let el = this.elements.splice(0);
    this.elements = [];
    return el.join("~~");
  }
}



const chainMaker = {
  addLink(value) {
    return new СhainMakerImpl(value);
  },
  reverseChain() {
    return new СhainMakerImpl();
  }
};



module.exports = chainMaker;