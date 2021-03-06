const repeat_str = (str, times) => {
    let result = "";
    while (times--) {
      result += str;
    }
    return result;
  };
  
  //* with repeat method solution
  const repeat_str2 = (str, times) => {
    return str.repeat(times);
  };
  
  console.log(repeat_str("Hi", 6));
  console.log(repeat_str2("Hello", 5));