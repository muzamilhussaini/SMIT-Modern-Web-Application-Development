// // 1.  Write a program that take two numbers & add them in a new variable. Show the result in your browser.  

// let num1 = +prompt("Enter first number: ");
// let num2 = +prompt("Enter second number: ");

// let div = document.querySelector("#sum");

// div.innerHTML += "Sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + "<br>";


// // 2. Repeat task1 for subtraction, multiplication, division & modulus. 
// div.innerHTML += "subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>";
// div.innerHTML += "multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + "<br>";
// div.innerHTML += "division of " + num1 + " and " + num2 + " is " + (num1 / num2) + "<br>";
// div.innerHTML += "modulus of " + num1 + " and " + num2 + " is " + (num1 % num2) + "<br>";



// // 3. Do the following using JS Mathematic Expressions 
// // a. Declare a variable. 
// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// // c. Initialize the variable with some number. 
// // d. Show the value of variable in your browser like “Initial value: 5”. 
// // e. Increment the variable. 
// // f. Show the value of variable in your browser like “Value after increment is: 6”. 
// // g. Add 7 to the variable. 
// // h. Show the value of variable in your browser like “Value MATH EXPRESSIONS | JAVASCRIPT Page 2 of 9 after addition is: 13”. 
// // i. Decrement the variable. 
// // j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// // k. Show the remainder after dividing the variable’s value  by 3.  
// // l. Output : “The remainder is : 0”.

// let declare;
// let mathExpressions = document.querySelector("#mathematic");
// mathExpressions.innerHTML = "Value after variable declaration is " + declare + "<br>";

// declare = 5;
// mathExpressions.innerHTML += "Initial value: " + declare + "<br>";

// declare++;
// mathExpressions.innerHTML += "Value after increment is: " + declare + "<br>";

// declare += 7;
// mathExpressions.innerHTML += "Value after addition is: " + declare + "<br>";

// declare--;
// mathExpressions.innerHTML += "Value after decrement is: " + declare + "<br>";

// declare %= 3;
// mathExpressions.innerHTML += "The remainder is: " + declare;


// // 4. Cost of one movie ticket is 600 PKR. 
// // Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 

// let price = 600;
// let costOfBuying = 5 * 600;
// let cost = document.querySelector("#cost");

// cost.textContent = "Total cost to buy 5 tickets to a movie is " + costOfBuying + "PKR";


// // 5. Write a script to display multiplication table of any number in your browser. E.g 
// let num = +prompt("Enter a number:");
// let table = document.getElementById("table");

// // table.innerHTML = ""; 

// table.innerHTML += num + " x 1 = " + (num * 1) + "<br>";
// table.innerHTML += num + " x 2 = " + (num * 2) + "<br>";
// table.innerHTML += num + " x 3 = " + (num * 3) + "<br>";
// table.innerHTML += num + " x 4 = " + (num * 4) + "<br>";
// table.innerHTML += num + " x 5 = " + (num * 5) + "<br>";
// table.innerHTML += num + " x 6 = " + (num * 6) + "<br>";
// table.innerHTML += num + " x 7 = " + (num * 7) + "<br>";
// table.innerHTML += num + " x 8 = " + (num * 8) + "<br>";
// table.innerHTML += num + " x 9 = " + (num * 9) + "<br>";
// table.innerHTML += num + " x 10 = " + (num * 10) + "<br>";


// // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// // a.  Store a Celsius temperature into a variable. 
// // b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// // c.  Now store a Fahrenheit temperature into a variable. 
// // d. Convert it to Celsius & output “NNoF is NNoC”. 
// // Conversion Formulae:

// let celsius = document.querySelector("#celsius");
// let fahrenheit = document.getElementById("fahrenheit");

// let celsiusTemperature = 25;
// let fahrenheitTemperature = 70;

// let C = (fahrenheitTemperature - 32) * 5 / 9;
// let f = (celsiusTemperature * 9 / 5) + 32;

// celsius.textContent = fahrenheitTemperature + "°F" + " is " + C + "°C";
// fahrenheit.textContent = celsiusTemperature + "°C" + " is " + f + "°F";


// //7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// // a. Price of item 1 
// // b. Price of item 2 
// // c. Ordered quantity of item 1 
// // d. Ordered Quantity of item 2 
// // e. Shipping charges 
// // Compute the total cost & show the receipt in your browser. 

// let item1Price = 650;
// let item1Quantity = 3;
// let items2Price = 100;
// let item2Quantity = 7;
// let shippingCharges = 100;

// let priceQuantity = document.querySelector("#priceQuantity");

// let totalItem1 = item1Price * item1Quantity;
// let totalItem2 = items2Price * item2Quantity;
// let totalPrice = totalItem1 + totalItem2 + shippingCharges;

// priceQuantity.innerHTML = "Price of item 1 is " + item1Price + "<br>";
// priceQuantity.innerHTML += "Quantity of item 1 is " + item1Quantity + "<br>";
// priceQuantity.innerHTML += "Price of item 2 is " + items2Price + "<br>";
// priceQuantity.innerHTML += "Quantity of item 2 is " + item2Quantity + "<br>";
// priceQuantity.innerHTML += "Shipping Charges " + shippingCharges + "<br>" + "<br>";
// priceQuantity.innerHTML += "Total cost of your order is " + totalPrice;



// // 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

// let totalMarks = 980;
// let obtainedMarks = 804;
// let percentage = (obtainedMarks / totalMarks) * 100;

// let answer = document.getElementById("answer");

// answer.innerHTML = "Total marks: " + totalMarks + "<br>";
// answer.innerHTML += "Marks obtained: " + obtainedMarks + "<br>";
// answer.innerHTML += "Percentage: " + percentage + "%";


// // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// // Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

// let USDollar = 10;
// let saudiRiyal = 25;

// // convert into Pakistani Currency
// let rate = USDollar * 104.80 + (saudiRiyal * 28); console.log("Total Currency in PKR: " + rate);



// 10.  Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression

let number = 2;
let result = (number + 5) * 10 / 2;
console.log(result);


// 11.  The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”. 

let currentYear = 2016;
let birthYear = 1992;

let age1 = currentYear - birthYear;
let age2 = (currentYear - birthYear) + 1;
console.log("They are either " + age1 + " or " + age2 + " years old");


// 12.  The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

let radius = 20;
let pi = 3.142;
let circumference = (2 * pi) * radius
let area = pi * (radius ** 2);

console.log("Radius of a circle: " + radius);
console.log("The circumference is: " + circumference);
console.log("The area is: " + area);


// 13.  The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

let snack = "chocolate chip";
let age = 15;
let maximumAge = 65;
let snackAmount = 3;
let lifeTime = maximumAge - age
let output = (snackAmount * 365.25) * lifeTime;

console.log("Favorite Snack: " + snack);
console.log("Current Age: " + age);
console.log("Maximum Age: " + maximumAge);
console.log("Estimated Amount per day: " + snackAmount);
console.log("You will need " + output + " to last you until the ripe old age of " + maximumAge);