// TODO: Write a number guessing game.
//
// Rules: The game will generate a number between 1 and 10,
// inclusive. So, it might generate a 1. Or it might generate
// a 10, or any whole number in between.
//
// The user should enter a number into the text box and then
// click "guess".
//
// You should then tell the user (via alert or another way)
// if her guess was too big, too small, or just right!
//
//
// Look at the HTML, and note that you'll need to
// write two functions:
//
// setGuess(guessValueAsString)
// guess()
//
// Feel free to rename the guessValueAsString parameter


// My secret value
var secretNum = Math.floor(Math.random() * 10) + 1;

function setGuess(guessValueAsString) {
  guessNum = String(guessValueAsString);
}

var guessResult = document.createElement("h2");

var guessHigh = document.createTextNode("TOO HIGH");
var guessLow = document.createTextNode("TOO LOW");
var guessWin = document.createTextNode("SUCCESS");

function guess() {

  if (guessNum > 10) {
    alert("guess must be less than or equal to 10");
    return;
  } else if (guessNum < 0) {
    alert("guess cannot be negative");
    return;
  }

  guessResult.innerHTML = "";
  document.querySelector('.guess-result').innerHTML = "";

  if (guessNum > secretNum) {
    // shoot a little lower
    guessResult.appendChild(guessHigh);
  } else if (guessNum < secretNum ) {
    // try a little higher
    guessResult.appendChild(guessLow);
  } else {
    guessResult.appendChild(guessWin);
  }
  document.querySelector('.guess-result').appendChild(guessResult);
}
