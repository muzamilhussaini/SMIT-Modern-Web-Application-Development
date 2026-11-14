// 1.  Write a program that takes a character (number or string) in a variable &checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).



// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
const integer1 = 5;
const integer2 = 6;

if (integer1 === integer2) {
    console.log("Both are equal numbers.")
} else if (integer1 > integer2) {
    console.log(integer1 + " is greater than " + integer2);
} else if (integer2 > integer1) {
    console.log(integer2 + " is greater than " + integer1);
} else {
    console.log("Invalid Input!");
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// const number = Number(prompt("Enter a number"));
// if (number > 0) {
//     console.log(number + " Positive Number");
// } else if (number < 0) {
//     console.log(number + " Negative Number");
// } else {
//     console.log("Number is zero.");
// }

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// const character = "e";
const vowel = "aeiou";

if (vowel.includes("e")) {
    console.log("true");
} else {
    console.log("false");
}


// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b. Asksuser to enter his/her password 
// c. Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

const correctPassword = "JavaScript123";

let passwordEntered = "";



// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// } 
var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
}else { 
    greeting = "Good evening"; 
} 
console.log(greeting);


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements


const time = 1900;

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Morning!");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good Night!");
} else {
    console.log("Invalid nnumber");
}