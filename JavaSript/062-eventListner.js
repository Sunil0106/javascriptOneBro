//eventListner = Listen for specific events to create interactive web pages
//Events: click, mouseover, mouseout
//.addEventListner(event, callback);
const myBox = document.getElementById("myBox");

// // function changeColor(event) {
// //   event.target.style.background = "tomato";
// //   event.target.textContent = "OUCH! 😉";
// // }

// myBox.addEventListener(
//   "click" /*function (event) {
//   event.target.style.background = "tomato";
//   event.target.textContent = "OUCH! 😉";
//     }*/,

//   (event) => {
//     event.target.style.background = "tomato";
//     event.target.textContent = "OUCH! 😉";
//   }
// );

// myBox.addEventListener("mouseover", (event) => {
//   event.target.style.background = "yellow";
//   event.target.textContent = "Don't do it 😅";
// });

// myBox.addEventListener("mouseout", (event) => {
//   event.target.style.background = "lightgreen";
//   event.target.textContent = "Click Me 😀";
// });

// function changeColor(event) {
//   event.target.style.background = "tomato";
//   event.target.textContent = "OUCH! 😉";
// }

// 2nd

const myBtn = document.getElementById("my-btn");
myBtn.addEventListener("click", () => {
  myBox.style.background = "tomato";
  myBox.textContent = "OUCH! 😉";
});

myBtn.addEventListener("mouseover", () => {
  myBox.style.background = "yellow";
  myBox.textContent = "Don't do it 😅";
});

myBtn.addEventListener("mouseout", () => {
  myBox.style.background = "lightgreen";
  myBox.textContent = "Click Me 😀";
});
