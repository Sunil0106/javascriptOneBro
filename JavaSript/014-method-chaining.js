//Method chaining = Calling one method after another in on continuous line of code

//No Method Chaining-----

let username = window.prompt("Enter your username.");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);

//Method Chaining
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);
