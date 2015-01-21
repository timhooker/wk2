  // Doing a sweet conversions table for folks wanting to cook or
  // do science or whatevers

function setCups(cupsAsString) {
  cupsNum = String(cupsAsString);
}
function setGallons(gallonsAsString) {
  galsNum = String(gallonsAsString);
}
function setOunces(ouncesAsString) {
  ozNum = String(ouncesAsString);
}
function setPints(pintsAsString) {
  pintsNum = String(pintsAsString);
}


var convertResult = document.createElement('h2');

function publishResults() {
  document.querySelector('.result-box').innerHTML = "";
  convertResult.appendChild(convertContent);
  document.querySelector('.result-box').appendChild(convertResult);
}

function convertCups(x, y) {
  result = ( cupsNum * x ) / y;
  convertResult.innerHTML = "";
  convertContent = document.createTextNode(cupsNum + " Cups = " + result + " Quarts");
  publishResults();
}

function convertGallons(x, y) {

  result = ( galsNum * x ) / y;
  convertResult.innerHTML = "";
  convertContent = document.createTextNode(galsNum + " Gallons = " + result + " Oz");
  publishResults();

}

function convertOunces(x, y) {
  result = ( ozNum * x ) / y;
  convertResult.innerHTML = "";
  convertContent = document.createTextNode(ozNum + " Oz = " + result + " Gallons");
  publishResults();
}

function convertPints(x, y) {
  result = ( pintsNum * x ) / y;
  convertResult.innerHTML = "";
  convertContent = document.createTextNode(pintsNum + " Pints = " + result + " Oz");
  publishResults();


}
