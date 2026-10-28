// 🔸 Assignment 1: Welcome Message 
//  Objective: 
//  Use prompt() to ask for the user's name.  
//  Use alert() to display:  "Welcome, [name]!" 
//  Concepts used: prompt, alert, var, concatenation 

var userName = prompt("Enter your name ");

alert("Welcome, " + userName + " !");

// ==================================================================================

// 🔸 Assignment 2: Age Message 
//  Objective: 
//  Ask the user for their name and age using prompt().  
//  Log this message in the console:  "[name] is [age] years old." 
//  Concepts used: prompt, console.log, var, concatenation

var usrName = prompt("Enter your name ");
var age = prompt("Enter your age ");

console.log(usrName + " is " + age + " years old.");


// ==================================================================================

// 🔸 Assignment 3: Favorite Color 
//  Objective: 
//  Ask the user for their favorite color.  
//  Show an alert like:  "Wow! [color] is a nice color!" 
//  Concepts used: prompt, alert, var, concatenation

var favoriteColor = prompt("Enter your favorite color");
alert("Wow! " + favoriteColor + " is a nice color!");


// ==================================================================================

// 🔸 Assignment 4: Simple Math Sentence 
//  Objective: 
//  Ask the user for two numbers using prompt().  
//  Show a sentence in the console like: 
//  "The result of 4 + 5 is 9." 
//  (You can just add the numbers directly — no need to convert types yet.) 
//  Concepts used: prompt, console.log, var, concatenation

var num1 = +prompt("Enter the value number 1");
var num2 = +prompt("Enter the value number 2");
var sum = num1 + num2

console.log("The result of " + num1 + " + " + num2 + " is " + sum + ".");


// ==================================================================================

// 🔸 Assignment 5: About Me Summary 
//  Objective: 
//  Ask the user for their name, hobby, and country using prompt().  
//  Show an alert like:  "Hi, I'm [name] from [country], and I love [hobby]!" 
//  Concepts used: prompt, alert, var, concatenation 

var fullName = prompt("Enter your name");
var hobby = prompt("Enter your hobby");
var country = prompt("Enter your country name");

alert("Hi, I'm " + fullName + " from " + country + ", and I love " + hobby + " !");