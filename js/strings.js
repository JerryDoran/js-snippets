const str = 'the quick brown fox jumps over the lazy dog';

const word = 'quick';

// Check to see if a string contains a certain word using indexOf method
// string indexes start at 0.  Returning a -1 means that the word you specified
// does not exist in the string.  This expression will return true or false
console.log(str.indexOf(word) > -1);

// ES6 check - for newer browsers
console.log(str.includes(word));

// Convert Strings to Numbers
const number = '1234';
const decimalNumber = '1234.49';
const numberWithCommas = '1,234,567'.replace(/,/g, '');

console.log(parseInt(number) + 100);
console.log(parseFloat(decimalNumber) + 0.892);
console.log(parseInt(numberWithCommas));
