//Random Number Generate;
// let randomNum = Math.random();
// let randomNum = Math.random() * 6; //to generate random number between 0 - 6 exculsive (0-5 not 6)
// let randomNum = Math.floor(Math.random() * 6); //to round down and get a fixed number without decimal
// let randomNum = Math.floor(Math.random() * 6) + 1; //to generate random number till 6;
// let randomNum = Math.floor(Math.random() * 100) + 1; //to generate random number till 100;

// For fixed range number
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  myLabel1.textContent = randomNum1;
  myLabel2.textContent = randomNum2;
  myLabel3.textContent = randomNum3;
};
