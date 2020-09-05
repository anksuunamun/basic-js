const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let teamName = [];

    for (let item of members) {
      if (typeof (item) === "string") {
        let newstr = item.trim();
        if (newstr.indexOf(" ") !== -1) {
          let whitespaceString = newstr.split(" ");
          teamName.push((whitespaceString[0]).charAt(0));
        } else if (newstr.indexOf("_") !== -1) {
          let whitespaceString = newstr.split("_");
          teamName.push((whitespaceString[0]).charAt(0));
        } else {
          teamName.push(item.charAt(0));
        }
      }
    }
    return teamName.join("").toUpperCase().split("").sort().join("");
  }
  return false;
};