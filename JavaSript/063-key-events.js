//eventListner = Listen for specific events to create interactive web pages
// events: keydown, keyup
//document.addEventListner(event, callback)

// document.addEventListener("keydown", (event) => {
//   console.log(`key down :${event}`);
//   console.log(`key down :${event.key}`);
// });

// document.addEventListener("keyup", (event) => {
//   console.log(`key up :${event}`);
//   console.log(`key up :${event.key}`);
// });

//2nd
// const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", (event) => {
//   myBox.textContent = "😎";
//   myBox.style.background = "tomato";
// });

// document.addEventListener("keyup", (event) => {
//   myBox.textContent = "😀";
//   myBox.style.background = "lightblue";
// });

//3rdm
document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    myBox.textContent = "😎";
    myBox.style.background = "tomato";
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key.startsWith("Arrow")) {
    myBox.textContent = "😀";
    myBox.style.background = "lightblue";
  }
});
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;

        break;

      case "ArrowRight":
        x += moveAmount;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
