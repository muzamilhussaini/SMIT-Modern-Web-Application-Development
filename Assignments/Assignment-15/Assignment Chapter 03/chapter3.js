// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
// I am 15 years old

let age = 21;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

// for example 4 times someone visited so:-
let visited = 4;
alert("You have visited this site " + visited + " times");


// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

let birthYear;
birthYear = 2005;
let div = document.querySelector("#message");
div.innerHTML = "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is " + typeof birthYear;


// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order 
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

let visitorName = "John Doe";
let product = "T-shirt(s)";
let quantity = 5;

let span = document.querySelector("#showed");
span.innerHTML = "<strong>" + visitorName + "</strong> ordered " + quantity + " " + product + " on XYZ Clothing store";

