const allFunctions = {
  add: (num1, num2) => {
    return num1 + num2
  },
  isNull : () => {
    return null;
  },
  checkValue: (x) => {
    return x;
  },
  createUser: () => {
    const user = {
      fullname: "Don Corleone",
      email: "test@underground.com"
    }
    return user;
  }
}

module.exports = allFunctions;
