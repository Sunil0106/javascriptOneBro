// closure = A function defined inside of another function, the inner has access to the variables and scope of the outer function.
//Allow for private variables and state maintenance
//Used frequently in JS Frameworks: React, vue, Angular;

function outer() {
  let message = "hello";

  function inner() {
    console.log(message);
  }
  inner();
}
outer();

//2nd

function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }
  function getCount() {
    return count;
  }
  return { increment, getCount };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

//3rd
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }
  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(5);
console.log(`The final score is ${game.getScore()}pts`);
