
// Declare two variables, and give them
// values. Note, you can declare multiple
// variables with one var statement by
// placing a comma between the variable
// statements.
var x = 0,
    y = 0,
    z = 0,
    calcResult=0;

// setX takes a string as a parameter, casts it
// to a number, and stores that value in x
function setX(xString) {
  x = Number(xString);
}

// setY does the same thing as setX, only
// storing the value in y
function setY(yString) {
  y = Number(yString);
}

function setZ(zString) {
  z = Number(zString);
}


// add simply alerts the value of x + y
function add() {
  calcResult = x + y + z;
  document.querySelector('.compute-result').textContent = calcResult;
}

// subtract simply alerts the value of x - y
function subtract() {
  calcResult = x - y - z;
  document.querySelector('.compute-result').textContent = calcResult;
}

// multiply alters the value of x * y

function multiply() {
  calcResult = x * y * z;
  document.querySelector('.compute-result').textContent = calcResult;
}

// divide alerts the value of x / y
function divide() {
  calcResult = x / y / z;
  document.querySelector('.compute-result').textContent = calcResult;
}

// modulo alerts the value of x % y
function mod() {
  calcResult = x % y % z;
  document.querySelector('.compute-result').textContent(calcResult);
}
