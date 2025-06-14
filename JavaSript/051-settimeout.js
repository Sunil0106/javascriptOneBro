//function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds)
//Times are approximate (varies based on the workload of the javascript runtime env.)
//setTimeout(callback, delay);
//clearTimeout(timeoutId) = can cancel a timeout before it triggers

// function sayHello() {
//   window.alert("Hello!");
// }

// setTimeout(sayHello, 3000);

// //2nd

// setTimeout(function () {
//   window.alert("Hello! me");
// }, 2000);

// //3rd

// const timeoutId = setTimeout(() => window.alert("hello! me too"), 5000);

// // 4th using 3rd
// clearTimeout(timeoutId);

//5th

let timeoutId;
function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("started");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("cleared");
}
