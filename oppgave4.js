let highestPossibleGuess = 666;
const randomNumber = Math.floor(Math.random() * highestPossibleGuess + 1); // random number betweeen 1 and 666.
let guessCount = 0;
let gameOver = false;

console.log(randomNumber);

function randomNumberGuesser() {
  if (gameOver) return;
  let guessInput = document.getElementById("guessInput").value; // input from user.

  if (guessInput <= 0 || guessInput > highestPossibleGuess)
    // if number is 0 or under, or over highespossibleguess
    document.getElementById("random-number").textContent = "Invalid value!";
  else if (guessInput == randomNumber) {
    gameOver = true; // game ends when user guesses right
    guessCount = guessCount + 1; // number of guesses increases
    document.getElementById("random-number").style.color = "#008000"; // changes color to green when correct
    document.getElementById(
      "random-number"
    ).textContent = `You guessed right in ${guessCount} attempts!`;
  } else if (guessInput < randomNumber) {
    // if guessinput is too low.
    guessCount = guessCount + 1;
    document.getElementById("random-number").textContent =
      "Number is too low. Try again";
  } else {
    guessInput > randomNumber; // else guessinput is too high.
    guessCount = guessCount + 1;
    document.getElementById("random-number").textContent =
      "Number is too high. Try again";
  }
}
