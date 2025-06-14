//NodeList = static collection of HTML elements by (id, class, element)
//Can be created by using querySelectorAll()
//Similar to an array, but no (map, filter, reduce)
//NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myBtns");

//ADD HTML/CSS PROPERTIES

// buttons.forEach((button) => {
//   button.style.background = "green";
//   button.textContent += "😁";
// });

//Click event listner

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.background = "tomato";
  });
});

//mouseover and mouseout

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.background = "hsl(205, 100%, 40%)";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.background = "hsl(205, 100%, 60%)";
  });
});

// add new nodelist
const newBtn = document.createElement("button");

// step2
newBtn.textContent = "Button 5";
newBtn.classList = "myBtns";

//append or prepend
document.body.appendChild(newBtn);

// to add last nodelist to buttons nodelist
buttons = document.querySelectorAll(".myBtns");

console.log(buttons);

// remove an Element
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
    buttons = document.querySelectorAll(".myBtns");
    console.log(buttons);
  });
});
