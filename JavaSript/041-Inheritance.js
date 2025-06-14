//Inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusability

class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating.`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping.`);
  }
}
class Rabbit extends Animal {
  name = "rabbit";
  run() {
    console.log(`This ${this.name} is running.`);
  }
}

class Fish extends Animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming.`);
  }
}

class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} is flying.`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);

rabbit.alive = false;

console.log(rabbit.alive);
rabbit.run();
rabbit.eat();
rabbit.sleep();

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
