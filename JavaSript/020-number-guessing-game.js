//Number Guessing Game
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
  guess = Number(guess);
  console.log(typeof guess, guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    60;
    attempts++;
    if (guess < answer) {
      window.alert("Toos low try again");
    } else if (guess > answer) {
      window.alert("Too High guess again");
    } else {
      window.alert(
        `correct! the answer was ${answer}. It took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
console.log(answer);
