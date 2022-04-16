const summation = (num) => {
  let sum = 0;
  for (i = num; i >= 0; i--) {
    sum += i;
  }
  return sum;
};
console.log(summation(2));
console.log(summation(8));
