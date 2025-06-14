//.map() = accepts a callback and applies that function to each element of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

const cubes = numbers.map(cube);
console.log(cubes);

// function square(element) {
//   return Math.pow(element, 2);
// }

function cube(element) {
  return Math.pow(element, 3);
}

const students = ["spongbob", "patrick", "squidward", "sandy"];
const studUpper = students.map(upperCase);
const studlower = students.map(lowerCase);

console.log(studUpper);
console.log(studlower);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-2-30"];
const formatedDates = dates.map(formatDate);
console.log(formatedDates);
function formatDate(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
