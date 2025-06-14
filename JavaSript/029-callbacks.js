//Callback = a function that is passed as an argument to another function.
//used to handle asynchronous operations:
//1. Reading a file
//2. Network requests
//3. Interacting databases

// hello(wait);
// goodBye();
// function hello(callback) {
//   console.log("Hello!");
//   callback();
// }

// function goodBye() {
//   console.log("Goodbye!");
// }

// function leave() {
//   console.log("leave");
// }
// function wait() {
//   console.log("wait");
// }

sum(displayConsole, 1, 2);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}
function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
