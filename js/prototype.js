// Extend the proto type of a Number type
let fahrenheit = 140; // degrees in fahrenheit

Number.prototype.toCelcius = function() {
  // 'this' key word references the number that is currently assign (ie, 140)
  return ((this - 32) * 5) / 9;
};

console.log(fahrenheit.toCelcius());

let firstName = 'jerry';

String.prototype.addLastName = function() {
  // 'this' refers to the current string value
  return this + ' doran';
};

console.log(firstName.addLastName());
