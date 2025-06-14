//destructuring = extract value from arrays and objects, then assign them to  variables in a conveniet way
//[] = to perform array destructuring
// {} = to perform object destructuring

//swap the value of two variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

//swap two element in an array;
// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

//assign array elements to variables
const colors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//extract values from objects
const person1 = {
  firstName: "John",
  lastName: "Cena",
  age: 50,
  job: "wrestler",
};

const person2 = {
  firstName: "Tony",
  lastName: "Stark",
  age: 29,
};

// // const { firstName, lastName, age, job } = person1;
// // console.log(firstName);
// // // console.log(lastName);
// // // console.log(age);
// // // console.log(job);

// const { firstName, lastName, age } = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//destructing in function parameters
function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
  console.log(`name:${firstName} ${lastName}`);
  console.log(`age:${age}`);
  console.log(`job:${job}`);
}
displayPerson(person2);
