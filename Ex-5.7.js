const shortestWord = (str) => {
  return str.split(" ").sort((a, b) => a.length - b.length)[0].length;
};

console.log(shortestWord("Hello my name is ofir"));
console.log(shortestWord("Hello dear friend"));
