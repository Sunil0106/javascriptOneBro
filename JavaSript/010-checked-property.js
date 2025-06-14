// .checked = propery that determines the checked state of an HTML checkbox or radion button element
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
const mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "You are Subscribed";
  } else {
    subResult.textContent = " You are not Subscirbe";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "You are paying with Visa";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "You are paying with MasterCard";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "You are paying with Paypal";
  } else {
    paymentResult.textContent = "You must select a payment type";
  }
};
