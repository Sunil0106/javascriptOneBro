//object = A collection of related  properties and/or methods Can represent real world objects (people, products, places);
//object = {key:value, function()}

const person1 = {
  firstName: "John",
  lastName: "Cena",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("SEE You! dark");
  },
  eat: () => console.log("drinking beers"),
};
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
  firstName: "Rajesh",
  lastName: "Hamal",
  age: 59,
  isEmployed: false,
  sayHello: () => console.log("k xa vai"),
  eat: function () {
    console.log("I'm eating iron puffed ");
  },
};
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
