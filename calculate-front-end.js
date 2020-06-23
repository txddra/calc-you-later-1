/*********************************************
 * YOUR CODE HERE!                           *
 ********************************************/
const calculate = require('./calculate-back-end.js');

let num = getInput(0);
let operator = getInput(1);
let num2 = getInput(2)



let result = calculate(num,num2, operator)
 console.log(result)


 
/******************************************
 * OUR CODE BELOW--DON'T TOUCH!           *
 *****************************************/

function getInput(i) {
  return process.argv[i + 2];
}
