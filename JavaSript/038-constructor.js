// constructor = special method for defining the properites and methods of objects

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}
const car1 = new Car("Ford", "Mustang", 2024, "plaeblue");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

const car2 = new Car("Chevrolet", "Camero", 2025, "red");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

const car3 = new Car("Dodge", "Charger", 2024, "silver");
console.log(car3.make, car3.model, car3.year, car3.color);
car3.drive();
