//.filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNums = numbers.filter(isEven);
console.log(evenNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

let oddNums = numbers.filter(isOdd);
console.log(oddNums);

const age = [16, 17, 18, 18, 19, 20, 60];

function isAdult(element) {
  return element >= 18 && element <= 40;
}

let adults = age.filter(isAdult);
console.log(adults);

function isChild(element) {
  return element >= 0 && element < 18;
}

let child = age.filter(isChild);
console.log(child);

const words = ["apple", "orange", "banana", "pomegrante", "coconut"];

function getShortWords(element) {
  return element.length <= 6;
}

let shortWord = words.filter(getShortWords);
console.log(shortWord);

function getLongWords(element) {
  return element.length > 6;
}

let longWords = words.filter(getLongWords);
console.log(longWords);
