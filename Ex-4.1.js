const getFiboSequenceNumber = (numbers) => {
  const fibonachi = [1, 1];

  for (let i = 2; i < numbers; i++) {
    fibonachi.push(fibonachi[i - 1] + fibonachi[i - 2]);
  }
  return fibonachi.join(", ") + "...";
};

console.log(getFiboSequenceNumber(12));
