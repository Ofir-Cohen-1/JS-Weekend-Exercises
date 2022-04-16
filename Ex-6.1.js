//* solution using map
const mumbling = (str) => {
  return str
    .split("")
    .map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i))
    .join("-");
};

//* solution using normal for loop
function mumbling2(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    //* the idea is simple, append to the str index (i) times the current char
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    if (i < str.length - 1) {
      result += "-";
    }
  }
  return result;
}

console.log(mumbling("abcd"));
console.log(mumbling2("RqaEzty"));
console.log(mumbling2("cwAt"));
