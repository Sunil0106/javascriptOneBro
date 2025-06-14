// example1
// / STEP 1 - create the element
const newH1 = document.createElement("h1");

/// STEP 2 - add attributes/properties
newH1.textContent = "I like Pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 - append element to dom

// document.body.append(newH1);

// document.body.prepend(newH1);

//document.getElementById("box2").append(newH1);

// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");

// document.body.insertBefore(/*newElement, currentElement*/ newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);

// document.getElementById("box1").append(newH1);
// // Remove html element
// document.getElementById("box1").removeChild(newH1);

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.background = "lightblue";

// document.getElementById("fruits").append(newListItem);
// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// document.getElementById("fruits").removeChild(newListItem);
