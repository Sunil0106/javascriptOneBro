// dice roll program
function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImg");
  const values = [];
  const images = [];
  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="../Images/${value}.png" alt="dice ${value}">`);
  }
  diceResult.textContent = `dice: ${values.join(",")}`;
  diceImages.innerHTML = images.join("");
}
