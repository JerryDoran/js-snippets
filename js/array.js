let numbers = [1, 2, 3, 4, 5];

// Map -  maps the values of one array to a new array.  Can perform calculations
// on the original array and map the calculated values to the new array.
let newNumbers = numbers.map((num) => num * 2);

// console.log(newNumbers);

// Reduce - can reduce an array of values down to a single value
let total = numbers.reduce((acc, num) => acc + num);
// console.log(total);

// Filter - Remove elements from an array if it does not meet a requirement that
// you specify

// let evenNumbers = numbers.filter(n => {
//   return n % 2 === 0;
// });

let evenNumbers = numbers.filter((n) => n % 2 === 0);
// console.log(evenNumbers);

let oddNumbers = numbers.filter((n) => n % 2 !== 0);
// console.log(oddNumbers);

// Object Destructuring
const person = {
  name: 'Steve',
  age: 50,
};

let { name, age } = person;
// console.log(name);
// console.log(age);

function printDetails({ name, age }) {
  // console.log(`The name is ${name} and they are ${age}`);
}

printDetails(person);

// Capitalize first letter of a sentence
let sentence = 'the quick brown fox jumped over the lazy dog';
let capitalizedSentence = sentence[0].toUpperCase() + sentence.slice(1);

// Make a function to capitalize the fist letter of a string
const capitalizedString = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

const capitalizedWords = (str) => {
  return str.split(' ').map(capitalizedString).join(' ');
};

// console.log(capitalizedSentence);

sentence = 'i love to be a javascript developer';

// console.log(capitalizedString(sentence));

// Capitalize every word
// console.log(capitalizedWords(sentence));

// Copy an array using slice method for older browsers
const array1 = [1, 2, 3, 4, 5];

const copyofArray1 = array1.slice();
// console.log(array1);
// console.log(copyofArray1);

// Copy an array using spread operator ES6
const anotherCopyOfArray1 = [...array1];
// console.log(anotherCopyOfArray1);

// Remove item(s) from an array
const moreNumbers = [1, 2, 3, 4, 5, 6, 8, 6, 75, 12, 16, 4, 2, 17];

// Find largest number in array
// console.log(Math.max(...moreNumbers));

// Create function for finding largest number in array
const largestNumber = (values) => {
  let highest = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > highest) {
      highest = values[i];
    }
  }
  return highest;
};

// console.log(largestNumber(moreNumbers));

// Removes the last element of the array
// console.log(moreNumbers);
// const a = moreNumbers.pop();
// const b = moreNumbers.pop();
// console.log(moreNumbers);
// console.log(a, b);

// Remove values from start of array
// const a = moreNumbers.shift();
// console.log(a, moreNumbers);

// Remove a specific item from the array
// const a = moreNumbers.splice(1, 1);

// console.log(a, moreNumbers);

// Filter function
// const newArray = moreNumbers.filter(number => number > 6);
// console.log(newArray);

// Remove duplicate values from array
const newArray = moreNumbers.filter(
  (number, pos) => moreNumbers.indexOf(number) === pos
);
// console.log(newArray);

// Join method to merge array values
const words = ['The', 'quick', 'brown', 'fox'];

// console.log(words.join(' '));

// Split a string into an array of elements
str1 = 'the quick brown fox jumped';

// console.log(str1.split(' '));

// console.log(str1.length);

// Reverse a string - need to convert it to an array first
const newString = str1.split('').reverse().join('');
// console.log(str1);
// console.log(newString);

// Using a for loop
let newStr = '';
for (let i = str1.length - 1; i >= 0; i--) {
  newStr += str1[i];
}
// console.log(newStr);

// Find the longest word in a string
const strArr = str1.split(' ');
const sortedStringArr = strArr.sort((strA, strB) => strB.length - strA.length);
// console.log(sortedStringArr[0]);

// Find the number of even digits in an array of integers
// const countEvenNumbers = arr => {
//   return arr.filter(num => num % 2 === 0).length;
// };

// console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(countEvenNumbers([2, 2, 2, 4, 2, 6]));
// console.log(countEvenNumbers([3, 5, 7, 4, 5, 6]));

// Find the number of even values up to a given number
// const countEvenNumbers = arr => {
//   return arr.filter(num => num % 2 === 0).length;
// };

// const createArrayOfNumbers = num => {
//   const returnArray = [];
//   for (let i = 1; i < num; i += 1) {
//     returnArray.push(i);
//   }
//   return returnArray;
// };

// console.log(countEvenNumbers(createArrayOfNumbers(6)));
// console.log(countEvenNumbers(createArrayOfNumbers(9)));

// Check whether a given array of integers is sorted in ascending order
// const isAscending = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i + 1] < arr[i]) return false;
//   }
//   return true;
// };

// console.log(isAscending([1, 2, 3, 4, 5, 6]));
// console.log(isAscending([1, 2, 5, 4, 2, 6]));
// console.log(isAscending([1, 2, 3, 4, 5, 5]));

// Find the largest even number from an array of integers
// const findLargestEvenNumber = arr => {
//   return Math.max(...arr.filter(num => num % 2 === 0));
// };

// console.log(findLargestEvenNumber([2, 3, 4, 67, 89, 60]));
// console.log(findLargestEvenNumber([2, 3, 4, 6, 9, 61]));
// console.log(findLargestEvenNumber([2, 3, 1, 67, 90, 65]));

// Replace the first digit in a string with $ character
// const replaceFirstDigit = str => str.replace(/[0-9]/, '$');
const replaceFirstDigit = (str) => str.replace(/\d/, '$');

// Passing in the global flag 'g' will replace all numbers in a string with $
// const replaceFirstDigit = str => str.replace(/[0-9]/g, '$');

// console.log(replaceFirstDigit('Abcd1'));
// console.log(replaceFirstDigit('Abc789efkgj'));
// console.log(replaceFirstDigit('Abcd5ytl23'));

// Given a year, report if it is a leap year
const isLeapYear = (year) => year % 4 === 0;

// console.log(isLeapYear(2014));
// console.log(isLeapYear(2015));
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2017));
// console.log(isLeapYear(2018));
// console.log(isLeapYear(2019));
// console.log(isLeapYear(2020));

// Compare two objects to determine if the first one contains the same properties as
// the second object.
const objectA = { a: 1, b: 2, c: 1 };
const objectB = { a: 1, b: 1, c: 1 };
const objectC = { a: 1, b: 1, d: 1 };

const compareObjects = (obj1, obj2) => {
  // Return array of keys)properties) for each object
  // console.log(Object.keys(obj1));
  // console.log(Object.keys(obj2));

  // Get true/false values from comparing every key in array.
  return Object.keys(obj1).every((key) => obj2[key]);
};

// console.log(compareObjects(objectA, objectB));
// console.log(compareObjects(objectA, objectC));
// console.log(compareObjects(objectB, objectC));

// Convert comma separated values(CSV) string into a 2D array.
// Example:
// abc, def, ghi
// jkl, mno, pqr
// stu, vwx, yza

const parseCSV = (csvString) => {
  // Split string into 3 rows by separating it on the new line character
  return csvString.split('\n').map((row) => row.split(','));
};

const str = `abc,def,ghi
jkl,mno,pqr
stu,vxw,yza`;

// console.log(parseCSV(str));

// Return a passed string with the letters in alphabetical order

const alphabeticalOrder = (str) =>
  str
    .split('')
    .sort((a, b) => (a > b ? 1 : -1))
    .join('');

// console.log(alphabeticalOrder('webmaster'));
// console.log(alphabeticalOrder('javascript'));

// Count number of vowels within a string a,e,i,o,u
const findVowels = (str, letters = ['a', 'e', 'i', 'o', 'u']) =>
  str.split('').filter((s) => letters.indexOf(s) > -1).length;

// console.log(findVowels('abcdef'));
// console.log(findVowels('abcdef', ['b', 'c', 'f']));

// Convert an amount to coins.
const countCoins = (money, coins = [25, 10, 5, 1]) => {
  const totalCoins = [];
  for (let i = 0; i < coins.length; i += 1) {
    const thisCoinNum = Math.floor(money / coins[i]);
    for (let y = 0; y < thisCoinNum; y += 1) {
      totalCoins.push(coins[i]);
    }
    money -= coins[i] * thisCoinNum;
  }
  return totalCoins;
};

// console.log(countCoins(90));

// Extract unique characters from a string
const extractUniqueChars = (str) => {
  return str
    .split('')
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);
};

const extractUniqueCharsOtherWay = (str) => [...new Set(str.split(''))];

console.log(extractUniqueChars('aaaabbbccc'));
console.log(extractUniqueCharsOtherWay('zzzzyyyyxxxx'));
