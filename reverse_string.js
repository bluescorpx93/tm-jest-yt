const strFunctions = {
  reverseString: (myStr) => {
    return myStr.split("").reverse().join("");
  },
  reverseStringTurnLowerCase: (myStr) => {
    return myStr.toLowerCase().split("").reverse().join("");
  }
}

module.exports = strFunctions;
