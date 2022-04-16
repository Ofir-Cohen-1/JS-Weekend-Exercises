const sumOfLowestNumbers = (numbers) => {
  let minNum = Math.min(...numbers);
  numbers.splice(numbers.indexOf(minNum), 1);
  return Math.min(...numbers) + minNum;
};

const arr =  [19, 5, 42, 2, 77];
console.log(sumOfLowestNumbers(arr));