const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect = true) {
    if (isDirect === false) {
      this.direct = "reverse";
    } else if (isDirect === true) {
      this.direct = "direct";
    }
    this.square = []
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("")
  }
  generateSquare() {
    for (let i = 0; i < this.letters.length; i++) {
      this.square[i] = this.letters.slice(i).concat(this.letters.slice(0, i));
    }
  }
  getFinalKey(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
    let finalKey = "";
    let finalMessageArray = [];
    for (let i = 0; i < message.length; i++) {
      if (this.letters.indexOf(message[i]) !== -1 || message[i] === " ") {
        finalMessageArray.push(message[i]);
      }
    }
    let finalStr = finalMessageArray.join("").split(" ").join("").trim();

    if (finalStr.length !== key.length) {
      let integerKeysNumber = Math.floor(finalStr.length / key.length);
      let additionalLettersNumber = finalStr.length % key.length;
      for (let i = 0; i < integerKeysNumber; i++) {
        finalKey += key;
      }
      for (let i = 0; i < additionalLettersNumber; i++) {
        finalKey += key[i];
      }
    } else if (finalStr.length === key.length) {
      finalKey = key;
    }
    return finalKey;
  }

  encrypt(message, key) {
    if (message, key) {
      message = message.toLowerCase();
      key = key.toLowerCase();
      let finalKey = this.getFinalKey(message, key)
      this.generateSquare();
      let encryptedStr = "";
      let indexForKey = 0;
      for (let i = 0; i < message.length; i++) {
        if (this.letters.indexOf(message[i]) !== -1) {
          encryptedStr += this.square[this.letters.indexOf(message[i])][this.letters.indexOf(finalKey[indexForKey])]
          indexForKey += 1;
        } else {
          encryptedStr += message[i];
        }
      }
      if (this.direct === "direct") {
        return encryptedStr.toUpperCase();
      } else if (this.direct === "reverse") {
        return encryptedStr.toUpperCase().split("").reverse().join("");
      }
    } else {
      throw new Error('Error')
    }
  }
  decrypt(message, key) {
    if (message, key) {
      message = message.toLowerCase();
      key = key.toLowerCase();
      let finalKey = this.getFinalKey(message, key)
      this.generateSquare();
      let decryptedStr = "";
      let indexForKey = 0;
      for (let i = 0; i < message.length; i++) {
        if (this.letters.indexOf(message[i]) !== -1) {
          let row = this.letters.indexOf(finalKey[indexForKey]);
          let col = this.square[row].indexOf(message[i]);
          decryptedStr += this.letters[col];
          indexForKey += 1;
        } else {
          decryptedStr += message[i];
        }
      }
      if (this.direct === "direct") {
        return decryptedStr.toUpperCase();
      } else if (this.direct === "reverse") {
        return decryptedStr.toUpperCase().split("").reverse().join("");
      }
    } else {
      throw new Error('Error')
    }
  }
}

module.exports = VigenereCipheringMachine;