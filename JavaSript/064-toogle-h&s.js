const myButton = document.getElementById("myBtn");
const image = document.getElementById("myImg");

myButton.addEventListener("click", (event) => {
  if (image.style.display === "none") {
    image.style.display = "block";
    myButton.textContent = "Hide";
  } else {
    image.style.display = "none";
    myButton.textContent = "Show";
  }
});
