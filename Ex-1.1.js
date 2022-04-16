const yesOrNo = (bool) => {
    if (typeof bool !== "boolean") {
      return -1;
    }
    return bool ? 'yes' : 'no';
  };

console.log(yesOrNo(true));
console.log(yesOrNo(false));
console.log(yesOrNo(1));
console.log(yesOrNo(0));