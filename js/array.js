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
