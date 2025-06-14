/*Variable = A container that stores a value. Behave as if it were the value it contains.

a. Declaration let x;
b.Assignment x = 100; 
*/

let x;
x = 100;
console.log(x);

let age = 25;
console.log(typeof age, age);

let price = 10.99;
console.log("The price is $" + price);

let gpa = (3.4).toFixed(2);
console.log(`you got ${gpa} GPA.`);

let firstName = "Don";
console.log(firstName, typeof firstName);

let favoriteFood = "Pizza";
console.log(`You like ${favoriteFood}.`);

let email = "John100@example.com";
console.log(`Your email is ${email}`);

//Booleans-true/false

let online = true;
console.log(typeof online, `- John is ${online}`);

let forSale = false;
console.log(`Is this car for sale - ${forSale}`);

let fullName = "John Cena";
let height = 6;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = "Your height is " + height + " Ft.";
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
