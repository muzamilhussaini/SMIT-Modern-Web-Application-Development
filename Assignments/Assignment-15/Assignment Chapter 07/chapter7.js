// 1.  Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

const city = prompt("Enter city name");
if (city === "Karachi") {
    alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

const gender = prompt("What's your sex");
if (gender === "male") {
    alert("Good Morning Sir");
} else {
    alert("Good Morning Ma’am");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

const signalColor = prompt("Enter color road traffic light");

if (signalColor === "Red") {
    console.log("Must Stop");
} else if (signalColor === "Green") {
    console.log("Ready to move");
} else {
    console.log("Move now");
}


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car” 

const fuelRemaining = +prompt("How much liter fuels are remaining in your car");

if (fuelRemaining <= 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("Your car have enough fuel to reach the distance");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 
// a. var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
} 

// b. var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
} 
//  c. var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true"); 
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true"); 
} 
 
// d. var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
} 
// e. 
if (true){ 
    alert("True"); 
} 
if (false){ 
    alert("False"); 
}

// f. 
if("car" < "cat"){ 
alert("car is smaller than cat"); 
} 

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
let subject_1 = Number(prompt("Enter first subject marks: "));
let subject_2 = Number(prompt("Enter second subject marks: "));
let subject_3 = Number(prompt("Enter third subject marks: "));
let totalMarks = +prompt("Enter total marks: ");

console.log("Total marks: " + totalMarks);


let obtainedMarks = subject_1 + subject_2 + subject_3;
console.log("Marks obtained: " + obtainedMarks);

const percentage = (obtainedMarks / totalMarks) * 100;
let result = "Percentage: " + percentage + "%";
console.log(result);

if (percentage >= 80) {
    console.log("Grade: A-one");
    console.log("Remarks: Excellent");
} else if (percentage >= 70) {
    console.log("Grade: A");
    console.log("Remarks: Good");
} else if (percentage >= 60) {
    console.log("Grade: B");
    console.log("Remarks: You need to improve");
} else {
    console.log("Grade: Fail");
    console.log("Sorry");
}


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show "Bingo! Correct answer".
// b. If the guessed number +1 is the secret number, show "Close enough to the correct answer".

let secretNumber = 8;
let guessNumber = Number(prompt("Guess the number: "));

if (guessNumber ===  secretNumber) {
    console.log("Bingo! Correct answer");
} else {
    console.log("Close enough to the correct answer");
}


// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

const number = 6;
if (number % 3 === 0) {
    console.log(number + " is divisible by 3");
} else {
    console.log(number + " is not divisible by 3");
}


// 9. Write a program that checks whether the given input is an even number or an odd number.

const num = 4;
if (num % 2 === 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}


// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then "It is too hot outside."
// b. T > 30 then "The Weather today is Normal."
// c. T > 20 then "Today's Weather is cool."
// d. T > 10 then "OMG! Today's weather is so Cool."

const temperature = 15;
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today's Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today's weather is so Cool.");
} else {
    console.log("It is too cold outside.");
}


// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+,-, *, /, %)
// Compute & show the calculated result to user.

const symbol = "*";

const num1 = 5;
const num2 = 3;

if (symbol === "+") {
    console.log(num1 + num2);
} else if (symbol === "-") {
    console.log(num1 - num2);
} else if (symbol === "*") {
    console.log(num1 * num2);
} else if (symbol === "/") {
    console.log(num1 / num2);
} else if (symbol === "%") {
    console.log(num1 % num2);
} else {
    console.log("Invalid symbol");
}

