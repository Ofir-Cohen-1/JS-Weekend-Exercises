//* solution using normal loop
const maskify = (str) => {
    let result = "",
      size = str.length;
    if (size < 5) {
      return str;
    }
    for (let i = 0; i < size; i++) {
      if (i < size - 4) {
        result += "#";
      } else {
        result += str[i];
      }
    }
    return result;
  };
  
  //* solution using repeat() and slice()
  function maskify2(str) {
    let result = "",
      size = str.length - 4;
    if (size < 1) {
      return str;
    }
    result = "#".repeat(size) + str.slice(size);
    return result;
  }
  
  console.log(maskify("Nananananananananananananananana Batman!"));
  console.log(maskify("Skippy"));
  console.log(maskify2("Nananananananananananananananana Batman!"));
  console.log(maskify2("Skippy"));