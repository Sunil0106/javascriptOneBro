//nested objects = objects inside of the other objects.
//Allows you to represent more complex data structures
//Child Object is enclosed by a Parent Object

//Person{Address{}, ContactInfo{}}
//ShoppingCart{Keyboard{}, Mouse{}, Moniter{}}

const person = {
  fullName: "John Cena",
  age: 50,
  isStudent: false,
  hobbies: ["karate", "fighting", "playing"],
  address: {
    street: "124 couch st.",
    city: "New York",
    country: "Nepal",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

for (const property in person.address) {
  console.log(person.address[property]);
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("rajesh", 60, "heaven", "KTM", "Nepal");

const person2 = new Person(
  "John",
  49,
  "128 couch st.",
  "Bikini Bottom",
  "america"
);

const person3 = new Person(
  "patrik",
  36,
  "124 counc st.",
  "kando ",
  "vivliv",
  "mald"
);
console.log(person1.address.street);
console.log(person1.name);
console.log(person1.age);

console.log(person2.address.street);
console.log(person2.name);
console.log(person3.age);
