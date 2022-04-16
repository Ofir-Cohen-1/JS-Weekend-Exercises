const getInitials = (str) => {
    let splitStr = str.split(" ");
    //* check if its more than two words
    if (splitStr.length > 2) {
      return -1;
    }
    return splitStr[0][0].toUpperCase() + "." + splitStr[1][0].toUpperCase();
  };
  
  console.log(getInitials("Ofir Cohen"));