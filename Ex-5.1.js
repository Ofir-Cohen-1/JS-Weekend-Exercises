const trimString = (str) => {
    if (str.length === 2) {
      return "";
    }
    return str.slice(1, str.length - 1);
  };
  
  console.log(trimString("awesome"));