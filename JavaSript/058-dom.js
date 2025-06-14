// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
//        Web browser constructs the DOM when it loads an HTML document, and structure all the elements in a tree-like representation.
//      Javascript can access the DOM to dynamically change the content, structure, and style of a web page

// console.log(document);
// console.dir(document);
// document.title = "My Website";

// document.body.style.backgroundColor = "black";

const userName = "Bro Code";
const message = document.getElementById("msg");
message.textContent += userName === "" ? "Guest" : userName;
