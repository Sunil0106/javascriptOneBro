//element selectors = Methods used to target and manipulate HTML elements
//  They allow you to select one or multiple HTML elements from the DOM

// 1.documennt.getElementById() //Element or Null
// 2.document.getElementByClassName()//HTML collection
// 3.document.getElementByTagName()//HTML Collection
// 4.document.querySelector() //First Element or Null
// 5. document.querySelectorAll() // Nodelist

const myHeading = document.getElementById("my-heading");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//class
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.background = "yellow";

// for (let fruit of fruits) {
//   fruit.style.background = "yellow";
// }

// fruits.forEach(); dont have this method

Array.from(fruits).forEach((fruit) => {
  fruit.style.background = "yellow";
});

//tagName
const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

const liElements = document.getElementsByTagName("li");
// h4Elements[0].style.background = "yellow";

// for (let h4Element of h4Elements) {
//   h4Element.style.background = "yellow";
// }

// for (let liElement of liElements) {
//   liElement.style.background = "lightblue";
// }
// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.background = "lightblue";
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.background = "orange";
// });

// //query selector selects only first

// const element = document.querySelector(".fruits");

// element.style.background = "tomato";

//query selector all
const fruitall = document.querySelectorAll(".fruits");
// fruitall[0].style.background = "orange";
// fruitall[1].style.background = "orange";
// fruitall[2].style.background = "orange";

const foods = document.querySelectorAll("li");

foods.forEach((food) => {
  food.style.background = "tomato";
});
