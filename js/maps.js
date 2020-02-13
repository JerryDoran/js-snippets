// Map - javascript object that stores key value pairs
let zoo = new Map();
zoo.set('Zebra', 5);
zoo.set('Monkey', 50);
zoo.set('Lion', 4);

let lionCount = zoo.get('Lion');
console.log(lionCount);

console.log(zoo);

for (let [key, value] of zoo) {
  console.log(key + ':' + value);
}
