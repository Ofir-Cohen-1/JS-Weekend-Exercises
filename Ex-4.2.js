function tribonacci(signature, n) {
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(i < 3 ? signature[i] : res[i - 1] + res[i - 2] + res[i - 3]);
    }
    return res;
  }

  console.log("\ntribonacci:", tribonacci([1, 1, 1], 12));