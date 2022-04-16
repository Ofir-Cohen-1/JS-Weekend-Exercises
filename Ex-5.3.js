const toCamelCase = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      result += str[i + 1].toUpperCase();
      i += 1;
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
