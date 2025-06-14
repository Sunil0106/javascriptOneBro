//array = a variable like structure that can hold more than one value;
let fruits = ["apple", "orange", "banana"];
fruits[3] = "coconut";

// fruits.push("kiwi");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("banana");
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[3]);
// console.log(numOfFruits);
// console.log(index);

// for (let i = 0; i <= fruits.length - 1; i++) {
//   console.log(fruits[i]);
// }

// //in reverse
// for (let i = fruits.length; i >= 0; i--) {
//   console.log(fruits[i]);
// }

//shortcut/ enhance for loop
for (let fruit of fruits) {
  console.log(fruit);
}

//alphabetical order
// fruits.sort();

//reverse alphabetical order
fruits.sort().reverse();
