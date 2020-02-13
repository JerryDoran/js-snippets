let numbers = [1, 2, 3, 4, 5];

// Map -  maps the values of one array to a new array.  Can perform calculations
// on the original array and map the calculated values to the new array.
let newNumbers = numbers.map(num => num * 2);

console.log(newNumbers);

// Reduce - can reduce an array of values down to a single value
let total = numbers.reduce((acc, num) => acc + num);
console.log(total);

// Filter - Remove elements from an array if it does not meet a requirement that
// you specify

// let evenNumbers = numbers.filter(n => {
//   return n % 2 === 0;
// });

let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

let oddNumbers = numbers.filter(n => n % 2 !== 0);
console.log(oddNumbers);

// Object Destructuring
const person = {
  name: 'Steve',
  age: 50
};

let { name, age } = person;
console.log(name);
console.log(age);

function printDetails({ name, age }) {
  console.log(`The name is ${name} and they are ${age}`);
}

printDetails(person);

// Capitalize first letter of a sentence
let sentence = 'the quick brown fox jumped over the lazy dog';
let capitalizedSentence = sentence[0].toUpperCase() + sentence.slice(1);

// Make a function to capitalize the fist letter of a string
const capitalizedString = str => {
  return str[0].toUpperCase() + str.slice(1);
};

const capitalizedWords = str => {
  return str
    .split(' ')
    .map(capitalizedString)
    .join(' ');
};

console.log(capitalizedSentence);

sentence = 'i love to be a javascript developer';

console.log(capitalizedString(sentence));

// Capitalize every word
console.log(capitalizedWords(sentence));
