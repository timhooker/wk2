// TODO: Your job is to write logic that will
// give the user one of three random fortunes
//
// Use the alert("Some text value") function
// to tell the user their fortune.

var fortuneNum = Math.floor(Math.random() * 3);

var fortune = [
  'you will buy a snickers',
  'you will be given a monkey',
  'Repulicans for Voldemort'

];

alert( fortune[fortuneNum] );
