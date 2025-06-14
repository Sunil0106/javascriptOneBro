// this = reference to the object where THIS is used (the object depends on the immediate contex)
//person.name = this.name

const person1 = {
  name: "John",
  favFood: "Maggi",
  greeting: function () {
    console.log(`Hello! ${this.name}. Your favorite food is ${this.favFood}`);
  },
  eat: function () {
    console.log(`I love to eat ${this.favFood}.`);
  },
};
person1.greeting();
person1.eat();

const person2 = {
  name: "Rajesh",
  favFood: "IronMan",
  greeting: function () {
    console.log(`mr.${this.name} is eating ${this.favFood}`);
  },
};
person2.greeting();
