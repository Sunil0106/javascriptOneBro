//string slicing = creating a substring from a portion of another string.
// string.slice(start, end)

// const fullName = "John Cena";
// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(5, 9);
// console.log(firstName);
// console.log(lastName);
// let firstChar = fullName.slice(0, 1);
// console.log(firstChar);
// let lastChar = fullName.slice(-1);
// console.log(lastChar);

// const fullName = "Broseph Code";
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

const email = "Bro@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
console.log(userName);
let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);
