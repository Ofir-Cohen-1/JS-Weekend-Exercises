const findUniq = (arr) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      if (arr[i + 2] === arr[i]) {
        return arr[i + 1];
      } else if (arr[i + 2] === arr[i + 1]) {
        return arr[i];
      }
    }
  }
};

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1, 1, 1, 7, 1, 1]));
