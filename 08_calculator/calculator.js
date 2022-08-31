const add = function() {
  const args = Array.from(arguments)
	const totalSum = args.reduce((previousValue, currentvalue) => previousValue + currentvalue, 0)
  return totalSum
};

const subtract = function() {
	const args = Array.from(arguments)
  const initialValue = args[0] * 2
	const totalSum = args.reduce((previousValue, currentvalue) => previousValue - currentvalue, initialValue)
  return totalSum
};

const sum = function() {
  const totalSum = arguments['0'].reduce((previousValue, currentvalue) => previousValue + currentvalue, 0)
  return totalSum
};

const multiply = function() {
  const totalSum = arguments['0'].reduce((previousValue, currentvalue) => previousValue * currentvalue, 1)
  return totalSum
};

const power = function() {
	const args = Array.from(arguments)
  return args[0] ** args[1]
};

const factorial = function(num) {
  if (num === 0 || num === 1)
  return 1;
for (var i = num - 1; i >= 1; i--) {
  num *= i;
}
return num;
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
