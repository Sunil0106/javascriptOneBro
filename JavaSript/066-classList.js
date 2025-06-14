//classList = Element property in JavaScript used in interact with an element's list of classes (CSS classes)
//Allow you to make reusable classes for many elements across your webpage.

//add();
//remove();
//toggle(Remove if present, Add if not)
//replace(oldClass, newClass)
//contains()

// const myButton = document.getElementById("myBtn");

// //add and remove()
// // myButton.classList.add("enabled");

// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");
// });

// // // toggle()
// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// });

//replace()
// myButton.classList.add("enabled");

// myButton.addEventListener("click", (event) =>
//   event.target.classList.replace("enabled", "disabled")
// );

// contains()

// myButton.classList.add("enabled");

// myButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😁";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

// ///new
// const heading = document.getElementById("myH1");

// heading.classList.add("enabled");

// heading.classList.add("enabled");

// heading.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😁";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

const buttons = document.querySelectorAll(".my-btns");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disable")) {
      event.target.textContent += "🤬";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});
