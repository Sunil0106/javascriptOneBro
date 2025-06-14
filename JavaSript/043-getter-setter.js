//getter = special method that makes a property readable
//setter = special method that makes property writeable
//validate and modify a value when reading/ writing a property

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("width must be a positive number");
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("height must be a positive number");
//     }
//   }
//   get width() {
//     return `${this._width.toFixed(1)} cm`;
//   }
//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }
//   get area() {
//     return `${(this._width * this._height).toFixed(2)}cm^2`;
//   }
// }

// const rectangle = new Rectangle(300, 10);

// rectangle.width = 5;
// rectangle.height = 6;
// console.log(rectangle.width, rectangle.height);
// console.log(rectangle.area);

// class Person {
//   constructor(lastName, age) {
//     // this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   // set firstName(newFirstName) {
//   //   if (typeof newFirstName === "string" && newFirstName.length > 0) {
//   //     this._firstName = newFirstName;
//   //   } else {
//   //     console.error("firstname must be a non empty string");
//   //   }
//   // }

//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastName = newLastName;
//     } else {
//       console.error("lastname must be a non empty string");
//     }
//   }

//   set age(newAge) {
//     if (typeof newAge === "number" && newAge > 0) {
//       this._age = newAge;
//     } else {
//       console.error("age must be valid number");
//     }
//   }

//   // get firstName() {
//   //   return this_firstName;
//   // }
//   get lastName() {
//     return this_lastName;
//   }

//   get age() {
//     return this._age;
//   }
// }

// const person = new Person("John", "cena", 60);

// // console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
