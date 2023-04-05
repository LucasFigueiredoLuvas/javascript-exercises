const add = function(numA, numB) {
  return numA + numB;
};

const subtract = function(numA, numB) {
	return numA - numB;
};

const sum = function(numbers) {
  if(numbers.length == 0) return 0;
  if(numbers.length == 1) return numbers[0];
  return numbers.reduce((prev, next) => prev + next, 0);
};

const multiply = function(numbers) {
  if(numbers.length == 0) return 0;
  if(numbers.length == 1) return numbers[0];
  return numbers.reduce((prev, next) => prev * next);
};

const power = function(numA, numB) {
	return numA ** numB;
};

const factorial = function(num) {
	return num == 0 ? 1 : num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
