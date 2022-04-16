const BasicOp = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
};

console.log(BasicOp("+", 4, 7));
console.log(BasicOp("-", 15, 18));
console.log(BasicOp("*", 5, 5));
console.log(BasicOp("/", 49, 7));
