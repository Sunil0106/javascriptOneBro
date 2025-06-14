const decreaseBtn = document.getElementById("decreaseBtn");
const resetBTn = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function () {
  if (count < 10) {
    count++;
    countLabel.textContent = count;
  }
};
decreaseBtn.onclick = function () {
  if (count > 0) {
    count--;
    countLabel.textContent = count;
  }
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
