const PeopleOnTheBus = (arr) => {
    let people = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[0][1] !== 0 || people < 0 || arr[i][1] > people + arr[i][0] || arr[arr.length - 1][0] !== 0) {
                return "Error";
            }
      people += arr[i][0] - arr[i][1];
    }
    return people;
  };

console.log(PeopleOnTheBus([ [2, 0],[1, 1],[4, 5],[0, 0]]));
console.log(PeopleOnTheBus([ [2, 0],[8, 1],[4, 5],[0, 1]]));
console.log(PeopleOnTheBus([ [4, 0],[4, 6],[1, 7],[0, 3]])); // people on the bus is negative
console.log(PeopleOnTheBus([ [4, 0],[4, 6],[5, 2],[6, 3]])); // people on the bus is negative and also people join last station
