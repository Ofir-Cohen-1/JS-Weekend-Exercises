const countDuplicate = (str) => {
  const obj = {};
  let temp;
  let counter = 0;
  let returnStatment = " # ";

  for (let i = 0; i < str.length; i++) {
    temp = str[i].toLowerCase();
    obj[temp] ? (obj[temp] += 1) : (obj[temp] = 1);
  }

  for (key in obj) {
    if (obj[key] > 1) {
      counter += 1;
      returnStatment += `${key} (occurs ${obj[key]} times)`;
      returnStatment += " and ";
    }
  }
  return counter + returnStatment.slice(0, -4);
};

console.log(countDuplicate("Indivisibilities"));
console.log(countDuplicate("aabBcde"));
console.log(countDuplicate("abcde"));
console.log(countDuplicate("aabbcde"));
console.log(countDuplicate("aA11"));
