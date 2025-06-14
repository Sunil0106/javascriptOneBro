//const = a variable that can't be changed;

const PI = 3.14159;
let radius;
let circumference;
let area;
// radius = window.prompt("Enter your radius of a circle");
// radius = Number(radius);

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("userInput").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  area = PI * radius ** 2;
  document.getElementById(
    "myH3"
  ).textContent = `Circumference: ${circumference.toFixed(
    2
  )}cm and area: ${area.toFixed(2)}cm^2.`;
};
mySubmit();
