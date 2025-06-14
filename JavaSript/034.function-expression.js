//function declaration = define a reusable block of code that performs a specific task

// function hello() {
//   console.log("hello");
// }

//fuction expressions = a way to define function as values or variables
const hello = function () {
  console.log("hELLOW");
};
hello();

setTimeout(/*callback*/ hello, 3000);

setTimeout(function () {
  console.log("hello");
}, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
// console.log(squares);

// function square(element) {
//   return Math.pow(element, 2);
// }

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);

const cubes = numbers.map((element) => {
  return Math.pow(element, 3);
});
console.log(cubes);

const evenNums = numbers.filter((element) => {
  return element % 2 === 0;
});
console.log(evenNums);

const oddNums = numbers.filter((element) => {
  return element % 2 !== 0;
});
console.log(oddNums);

const total = numbers.reduce((accumulator, element) => {
  return accumulator + element;
});
console.log(total);
