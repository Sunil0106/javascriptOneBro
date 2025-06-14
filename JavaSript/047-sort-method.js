//sort() = method used to sort elements of an array in place.
//sorts elements as strings in lexicographic order, not alphabetical order
// lexicographic = (alphabet + numbers + symbols) as string;

let fruits = ["apple", "orange", "coconut", "pineapple", "banana"];

fruits.sort();
console.log(fruits);

//lexicographic order;
// let numbers = [1, 4, 6, 8, 10, 7, 9, 2, 5, 3];
// numbers.sort();
// console.log(numbers);

// let numbers = [1, 4, 6, 8, 10, 7, 9, 2, 5, 3];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

let numbers = [1, 4, 6, 8, 10, 7, 9, 2, 5, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [
  {
    name: "Jhon Cena",
    age: 30,
    gpa: 3.0,
  },
  {
    name: "Rajesh",
    age: 65,
    gpa: 100,
  },
  {
    name: "Biralu",
    age: 55,
    gpa: 99,
  },
  {
    name: "sakhil",
    age: 76,
    gpa: 133,
  },
];
people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.age - a.age);
console.log(people);

people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

people.sort((a, b) => b.gpa - a.gpa);
console.log(people);

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);
