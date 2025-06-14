// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute the code.

function happyBirthday(username, age) {
  console.log("Happy birthday to you ");
  console.log("Happy birthday to you ");
  console.log(`Happy birthday dear ${username}.`);
  console.log("Happy birthday to you ");
  console.log(`You are ${age} years old.`);
}
happyBirthday("BroCode", 25);
happyBirthday("John Cena ", 56);

function add(x, y) {
  // let result = x + y;
  // return result;
  return x + y;
}

console.log(add(2, 3));

function subtract(x, y) {
  return x - y;
}
console.log(subtract(2, 3));

function multiply(x, y) {
  return x * y;
}
console.log(multiply(3, 5));

function divide(x, y) {
  return x / y;
}
console.log(3 / 2);

function isEven(number) {
  // if (number % 2 === 0) {
  //   console.log(`The number is ${number} Even.`);
  // } else {
  //   console.log(`The number is ${number} odd`);
  // }
  return number % 2 === 0 ? true : false;
}
console.log(isEven(9));

function isValidEmail(email) {
  // if (email.includes("@")) {
  //   return true;
  // } else {
  //   return false;
  // }
  return email.includes("@") ? true : false;
}
console.log(isValidEmail("Brocode@gamil.com"));
console.log(isValidEmail("Brocodegamil.com"));
