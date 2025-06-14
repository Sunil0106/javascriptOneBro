// Switch = can be efficient to replace many else if statements

let day = "hello";

switch (day) {
  case 1:
    console.log("It is monday");
    break;
  case 2:
    console.log("It is tuesday");
    break;
  case 3:
    console.log("It is wednessday");
    break;
  case 4:
    console.log("It is thursday");
    break;
  case 5:
    console.log(" It is friday");
    break;
  case 6:
    console.log("It is saturday");
    break;
  case 7:
    console.log("It is sunday");
    break;
  default:
    console.log(`${day} not a day.`);
}

let testScore = 5;
let letterGrade;
switch (true) {
  case testScore >= 90:
    letterGrade = "A";

    break;

  case testScore >= 80:
    letterGrade = "B";

    break;

  case testScore >= 70:
    letterGrade = "C";

    break;

  case testScore >= 60:
    letterGrade = "D";

    break;
  default:
    letterGrade = "F";
}
console.log(letterGrade);
