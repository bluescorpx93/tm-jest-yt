const basicFunctions = {
  add: (num1, num2) => {
    return num1 + num2
  },
  isNull : () => {
    return null;
  },
  checkValue: (x) => {
    return x;
  },
  createDummyUser: () => {
    const user = {
      fullname: "Don Corleone",
      email: "test@underground.com"
    }
    return user;
  }
}

module.exports = basicFunctions;
