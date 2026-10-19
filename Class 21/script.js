// // alert("Hello, JavaScript is one of the unique language that only browser can undertand.");

var studentName = prompt("Enter your name: ");
const studentAge = +prompt("Enter your age: ");

alert("We need to take a basic quiz from you, please take two numbers.");
console.log(studentName);
console.log(studentAge);

// ======================================================================================================================== 

let firstNumber = +prompt("Enter first number: ");
var secondNumber = +prompt("Enter second number: ");

alert(`So, ok ${studentName}, now predict the output and see your answer, if its correct.`)

console.log(`The sum of two numbers are ${firstNumber + secondNumber}`);

// ======================================================================================================================== 
const user = "Muzamil";

// The action happening here is called String Interpolation
const greeting = `Hello, ${user}!`; 

console.log(greeting); // Output: Hello, Muzamil!

// concatenation 

let num1 = 1;
let num2 = "2";

console.log(typeof num1 + num2); // number2
console.log(num1 + num2); // 12


let fullName = prompt("What is your name? ");
const age = +prompt("How old are you? ");
let nationality = prompt("What is your Nationality? ");
const gender = prompt("What is your gender? \nMale / Female or Others: ");
const CNICNumber = prompt("Enter your Nationality ID number");

console.log("Full Name: " + fullName);
console.log("Age: " + age + " years old");
console.log("Nationality: " + nationality);
console.log("Gender: " + gender);
console.log("National ID number: " + CNICNumber);
