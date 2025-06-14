// spread operator = ... allows an iterable such as an array or string to be expanded into seperate element (unpacks the element)

let numbers = [1, 2, 3, 4, 5];

// let maximum = Math.max(numbers); it show NaN
let maximum = Math.max(...numbers);
console.log(maximum);

let minimum = Math.min(...numbers);
console.log(minimum);

let username = "John Cena";
// let letters = [...username];
let letters = [...username].join("-");
console.log(letters);

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrot", "celery", "potatos"];
// let foods = [...fruits, ...vegetables];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);
