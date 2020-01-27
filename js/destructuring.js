const person = {
  name: 'Jerry',
  age: 51,
  gender: 'Male'
};

// De-structure the object and put the values of each object property into variables
let { name, age, gender = 'unknown' } = person;

// Default property value will get overwritten if a value is assined to the property
// in the person object.
console.log(`My name is ${name}, I am ${gender} and I am ${age} years old`);

function printDetails({ name, age }) {
  console.log(name, age);
}

printDetails(person);

// Array Destructuring

let numbers = [400, 700, 500, 4, 5];

let [one, two, three, four, five, six = 800] = numbers;

console.log(one, two, three, four, five, six);

function bottle() {
  return ['bottle', 'water'];
}

let [val1, val2] = bottle();

console.log(val1, val2);
