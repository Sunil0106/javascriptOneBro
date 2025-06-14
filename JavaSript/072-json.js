//JSON = (JavaScript Object Notation) data-interchange format
//Used for exchanging data between a server and a web application
//JSON files {key:value} OR [value1, value2, value3]

//JSON.stringify() = converts js object to JSON string
//JSON.parse() = converts JSON to js object

// const names = ["Spongbob", "Patrick", "Squidward", "Sandy"];
// const person = {
//   name: "Spongbob",
//   age: 30,
//   isEmployed: true,
//   hobbies: ["Jellyfishing", "Karate", "cooking"],
// };
// const jsonString = JSON.stringify(person);
// const jsonString1 = JSON.stringify(names);

// const people = [
//   {
//     name: "Spongbob",
//     age: 30,
//     isEmployed: true,
//     hobbies: ["Jellyfishing", "Karate", "cooking"],
//   },
//   { name: "Patrick", age: 34, isEmployed: false },
//   { name: "Squidward", age: 50, isEmployed: true },
//   { name: "Sandy", age: 27, isEmployed: false },
// ];
// const jsonString2 = JSON.stringify(people);
// console.log(jsonString);

// console.log(jsonString1);
// console.log(jsonString2);

// const jsonNames = `["Spongbob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{"name": "Spongbob","age": 30,
//   "isEmployed": true,hobbies: ["Jellyfishing", "Karate", "cooking"],
// }`;
// const jsonPeople = `[
//   {name: "Spongbob",age: 30,  isEmployed: true,hobbies: ["Jellyfishing", "Karate", "cooking"]
//   },{name: "Patrick",age: 34,isEmployed: false,}{name: "Squidward",age: 50,isEmployed: true,},{name: "Sandy",age: 27,isEmployed: false,},
// ]`;

// const parseData = JSON.parse(jsonNames);
// console.log(parseData);

// const parseData2 = JSON.parse(jsonPerson);
// console.log(parseData2);
// const parseData1 = JSON.parse(jsonPeople);
// console.log(parseData1);

fetch("../JSON/person.json")
  .then((response) => response.json())
  .then((value) => console.log(value));

fetch("../JSON/names.json")
  .then((response) => response.json())
  .then((value) => console.log(value));

fetch("../JSON/people.json")
  .then((response) => response.json())
  .then((values) =>
    values.forEach((value) => {
      console.log(value);
      console.log(value.name);
      console.log(value.age);
      console.log(value.isEmployed);
    })
  )
  .catch((error) => console.error(error));
