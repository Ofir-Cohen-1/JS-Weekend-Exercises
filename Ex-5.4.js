const toWeirdCase = (str) => {
  let counter = 0;
  return str
    .split("")
    .map((char) => {
      if (char === " " && counter % 2 === 0) {
        counter += 2;
        return char;
      }
      if (counter % 2) {
        counter++;
        return char.toLowerCase();
      } else {
        counter++;
        return char.toUpperCase();
      }
    })
    .join("");
};

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));
