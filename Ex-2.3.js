const findNexSquare = (num) => {
  let result = Math.sqrt(num);
  if (num > 0 && Math.sqrt(num) % 1 === 0) {
    result += 1;
    let nextSquare = Math.pow(result, 2);
    return nextSquare;
  }
  return -1;
};

console.log(findNexSquare(121));
console.log(findNexSquare(625));
console.log(findNexSquare(114));
