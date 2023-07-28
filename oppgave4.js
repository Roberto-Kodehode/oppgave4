//global variables
let highestPossibleGuess = 666;
const randomNumber = Math.floor(Math.random() * highestPossibleGuess + 1); // random number betweeen 1 and 666.
let guessCount = 0;
let gameOver = false;
let lifeCounter = 10;
let score = 0;
const scoreMultiplier = 1000;
console.log(randomNumber);

// lifecounter decrease
function lifeCounterDecrease() {
  lifeCounter--;
  document.getElementById("life-counter").textContent = `Soul x ${lifeCounter}`;
}

function createNewGame(event) {
  event.preventDefault();
  createButton.onclick = window.location.reload();
}

function createButton() {
  createButton = document.createElement("button");
  createButton.textContent = "START NEW GAME?";
  createButton.addEventListener("click", createNewGame);
  document.getElementById("start-new-game").appendChild(createButton);
}

function randomNumberGuesser() {
  const guessInput = document.getElementById("guess-input").value; // input from user.

  if (gameOver) return;

  if (guessInput == randomNumber) {
    gameOver = true; // game ends when user guesses right
    guessCount++; // number of guesses increases
    score = lifeCounter * scoreMultiplier;

    document.getElementById("victory").style.color = "#008000"; // changes color to green when correct
    document.getElementById("victory").textContent = "CONGRATULATIONS!";

    document.getElementById("souls").style.color = "#008000"; // changes color to green when correct
    document.getElementById(
      "souls"
    ).textContent = `You made it out of hell in ${guessCount} attempt(s)!`;
    document.getElementById("random-number").textContent = "";
    document.getElementById("start-new-game").textContent = "";
    document.getElementById("score").textContent = `Score: ${score}`;
    // erase guess input and button
    document.getElementById("guess-container").remove();
    // start new game button
    createButton();
  } else if (lifeCounter === 1) {
    gameOver = true;
    window.location = "gameover.html";
  } else if (guessInput <= 0 || guessInput > highestPossibleGuess) {
    // if guess is 0 or under, or over highespossibleguess
    guessCount++; // number of guesses increases
    lifeCounterDecrease();
    document.getElementById("random-number").textContent =
      "You're not even trying!!!";
  } else if (guessInput < randomNumber) {
    // if guessinput is too low.
    guessCount++; // number of guesses increases
    lifeCounterDecrease();
    document.getElementById("random-number").textContent =
      "Number is too low. Try again";
  } else {
    // guessInput > randomNumber; // else guessinput is too high.
    guessCount++; // number of guesses increases
    lifeCounterDecrease();
    document.getElementById("random-number").textContent =
      "Number is too high. Try again";
  }
}
