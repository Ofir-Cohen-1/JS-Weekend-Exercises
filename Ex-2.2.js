const binary = (arr) => {
  let result = 0;
  let n = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      let newIdx = Math.pow(2, n);

      result += newIdx;
    }
    n += 1;
  }

  return result;
};

console.log(binary([0, 0, 0, 1]));
console.log(binary([0, 0, 1, 0]));
console.log(binary([0, 1, 0, 1]));
console.log(binary([1, 0, 0, 1]));
console.log(binary([0, 0, 1, 0]));
console.log(binary([0, 1, 1, 0]));
console.log(binary([1, 1, 1, 1]));
console.log(binary([1, 0, 1, 1]));
console.log(binary([1, 0, 1, 1, 1]));
