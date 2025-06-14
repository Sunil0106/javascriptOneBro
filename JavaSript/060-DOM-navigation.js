//DOM Navigation = The process of navigating through the structure of a HTML document using Javascript
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// // .....firstElementChild.........
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.background = "Yellow";

// // 2nd
// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   // ulElement.firstElementChild.style.background = "yellow";
//   //or
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.background = "yellow";
// });

// //......lastElementChild.......
// const element = document.getElementById("fruits");

// const lastChild = element.lastElementChild;
// lastChild.style.background = "yellow";

// //2nd
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.background = "yellow";
// });

// //............nextElementSibling........
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.background = "yellow";

// const element1 = document.getElementById("fruits");
// const nextSibling1 = element1.nextElementSibling;
// nextSibling1.style.background = "yellow";

// // .......previousElementSibling.....
// const element = document.getElementById("orange");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.background = "yellow";

// // ......parentElement.....
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.background = "yellow";

// ......children...
const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach((child) => {
  child.style.background = "yellow";
});
console.log(children);

//or
children[1].style.background = "lightblue";
