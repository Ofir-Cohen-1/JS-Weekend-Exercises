const YearsAndCenturies = (year) => {
  return year % 100 ? Math.floor(year / 100) + 1 : year / 100;
};

console.log(YearsAndCenturies(1986));
