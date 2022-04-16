const isogram = (str) => {
  let presence = "",
    newText = str.toLowerCase();
  for (let char of newText) {
    if (presence.indexOf(char) === -1) {
      presence += char;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isogram("Dermatoglyphics"));
console.log(isogram("moOse"));
console.log(isogram("aba"));
