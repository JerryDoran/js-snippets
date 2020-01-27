// alert('File linked');

var number1 = 35;
var number2 = '40';

// alert("My favorite number is " + number1 );

// ARRAYS
// var colors = ["red", "blue", "green"];
//
// alert(colors[1]);
//
// colors[3] = "orange"
//
// alert(colors);
//
// colors.push("purple");
//
// alert(colors[4]);

var numbers = [5, 77, 6, 43, 90, 1, 55];

numbers.reverse();

// alert(numbers[0] + numbers[2]);
// alert(numbers[4]);
// alert(numbers.length);

// alert(numbers.sort());
// alert(numbers.reverse());

// numbers.forEach(function(number) {
//   console.log(number);
// });

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// SWITCH STATEMENTS

// var fruit = "grape";
//
// switch(fruit) {
//   case "banana":
//     alert("I love bananas");
//     break;
//   case "apple":
//     alert("I like apples");
//     break;
//   case "orange":
//     alert("Oranges are OK");
//     break;
//   default:
//     alert("I love most fruits");
//     break;
// }

// OBJECTS

// var person = {
//   firstName: "Jerry",
//   lastName: "Doran",
//   age: 34,
//   family: ["Karen", "Bailey"],
//   address: {
//     street: "555 main",
//     city: "Cupertino",
//     state: "CA"
//   },
//
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// console.log(person.firstName);
// console.log(person.age);
// console.log(person.family[0]);
// console.log(person.family[1]);
// console.log(person.address);
// console.log(person.address.state);
// console.log(person.fullName());

// OBJECT CONSTRUCTOR
// var apple = new Object();
// apple.color = "red";
// apple.shape = "round";
//
// apple.describe = function() {
//   return "an apple is the color " + this.color + " and is the shape " + this.shape;
// }
//
// console.log(apple.describe());

// CONSTRUCTOR PATTERN

// function Fruit(name, color, shape) {
//   this.name = name;
//   this.color = color;
//   this.shape = shape;
//
//   this.describe = function() {
//     return "A " + this.name + " is the color " + this.color + " and is the shape " + this.shape;
//   }
// }
//
// var apple = new Fruit("apple", "red", "round");
//
// var melon = new Fruit("melon", "green", "round");
//
// console.log(apple.describe());

// EVENTS
// function doClick() {
//   alert("You cliked me!");
// }

function showDate() {
  var time = document.getElementById('time');
  time.innerHTML = Date();
}
//
// function clearDate() {
//   var time = document.getElementById("time");
//   time.innerHTML = "";
// }

function changeBackground(x) {
  console.log(x.value);
  var body = document.getElementById('body');
  body.style.backgroundColor = x.value;
}

function validateForm() {
  var firstName = document.forms.myForm.firstName.value;
  if (firstName == null || firstName == '') {
    alert('First Name is required');
    return false;
  }

  if (firstName.length < 3) {
    alert('First Name must be at least 3 characters');
    return false;
  }
}
