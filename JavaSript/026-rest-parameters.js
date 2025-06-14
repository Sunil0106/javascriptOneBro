//rest parameter = (...rest) allow  a function work with a variable numbers of argument by bundling them into an array
// spread = expands an array into separate elements
//rest = bundles seperate elements into an array

const food1 = "Pizza";
const food2 = "hamburger";
const food3 = "Hot dog";
const food4 = "Sushi";
const food5 = "ramen";

//example
function openFridge(...foods) {
  console.log(foods);
  console.log(...foods); //with spred operators
}

openFridge(food1, food2, food3, food4, food5);

//example
function getFood(...foods) {
  return foods;
}
const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

//example
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
const total = sum(1, 2, 3, 4, 5, 6);

console.log(`Your total is $${total}.`);

//example
function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}
const average = getAverage(75, 100, 85, 90, 60);

console.log(average);

//example
function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongbob", "Squarepants", "III");
console.log(fullName);
