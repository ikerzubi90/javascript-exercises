const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total,current)=>total+current,0);
};

const multiply = function(array) {
  return array.reduce((total,current)=>total*current);
};

const power = function(num,power) {
	return Math.pow(num,power);
};

const factorial = function(num) {
  let fact=1;
  for(let i=1;i<=num;i++){
    fact*=i;
  }
  return fact;
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
