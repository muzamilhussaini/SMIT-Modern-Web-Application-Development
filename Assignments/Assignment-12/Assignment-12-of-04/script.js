// ##############################################################################################################
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                             If-Else Statements                                           ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##############################################################################################################


// 1.  Ask the user for their age. If the age is 18 or more, show an alert: "You are an adult.", else show: "You are a minor."  

let age = +prompt("Enter your age");

if (age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor");
}

// =====================================================================================================================

// 2.  Ask the user to enter a number. If it's positive, log: "Positive number"; else log: "Not positive".  

// let number = +prompt("Enter any number to check whether it is positive or not");

if (number >= 0) {
    console.log("Positive number");
} else {
    console.log("Not positive");
}

// =====================================================================================================================

// 3.  Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd number".  

let num = +prompt("Enter a number ");

if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}


// =====================================================================================================================

// 4.  Ask for a username. If the username is "admin", display "Welcome, admin!"; else  display "Access denied."  

let userName = prompt("Enter the user name");

if (userName === "admin") {
    console.log("Welcome, admin");
} else {
    console.log("Access denied");
}

// =====================================================================================================================

// 5.  Ask for two numbers. If they are equal, log "Both numbers are the same"; otherwise, log "The numbers are different".

let num1 = +prompt("Enter first number ");
let num2 = +prompt("Enter second number ");

if (num1 === num2) {
    console.log("Both numbers are the same");
} else {
    console.log("The numbers are different");
}

// // =====================================================================================================================

// 6.  Ask the user to enter two numbers. Check which one is larger and alert: "First is larger" or "Second is larger".  

let number1 = +prompt("Enter the first number");
let number2 = +prompt("Enter the second number");

if (number1 > number2) {
    alert("First is larger");
} else {
    alert("Second is larger");
}

// // =====================================================================================================================

// 7.  Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within  range".  

let numb = +prompt("Enter a number");

if (numb > 100) {
    alert("Too big!");
} else {
    alert("Within  range");
}

// =====================================================================================================================

// 8.  Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."  

let score = +prompt("Enter a score");

if (score >= 50) {
    console.log("You passed!");
} else {
    console.log("You failed.");
}

// =====================================================================================================================

// 9.  Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's not hot."  

let temperature = +prompt("Enter a temperature");

if (temperature > 30) {
    alert("It's hot!");
} else {
    alert("It's not hot!");
}

// =====================================================================================================================

// 10. Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

let nm = +prompt("Enter a number");

if (nm === 0) {
    alert("It's Zero");
} else {
    alert("Not zero");
}

// =====================================================================================================================

// 11. Ask the user for their age. If it's 60 or more, log "You are a senior citizen.", else log "You are not a senior."  

let userAge = +prompt("Enter your age");

if (userAge >= 60) {
    console.log("You are a senior citizen.");
} else {
    console.log("You are not a senior.");
}

// =====================================================================================================================

// 12. Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert "You're not Alice!"  

let username = prompt("Enter your name");

if (username === "Alice") {
    alert("Hi, Alice!");
} else {
    alert("You're not Alice");
}

// =====================================================================================================================

// 13. Ask the user for a password. If it matches "12345", log "Correct password"; else log "Wrong password".  

let password = +prompt("Enter your password");

if (password === 12345) {
    console.log("Correct password");
} else {
    console.log("Wrong password");
}

// =====================================================================================================================

// 14. Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!"; else alert "Good afternoon!"  

let currentHour = +prompt("Enter the current hour (0–23)");

if (currentHour < 12) {
    alert("Good morning!");
} else {
    alert("Good afternoon!");
}

// =====================================================================================================================

// 15. Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log "Not divisible by 5"

let userNumber = +prompt("Enter a number");

if (userNumber % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}

// =====================================================================================================================

// 16. Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's play!"; else alert "Maybe next time!"  

let gamePlay = prompt("Wanna play a game (yes/no)");

if (gamePlay === "Yes" || gamePlay === "yes") {
    alert("Let's play!");
} else {
    alert("Maybe next time!");
}

// =====================================================================================================================

// 17. Ask the user for a color. If the color is "blue", log "Cool choice!"; else log "Interesting color!"  

let userColor = prompt("Enter your color name");

if (userColor === "blue") {
    console.log("Cool choice!");
} else {
    console.log("Interesting color!");
}

// =====================================================================================================================

// 18. Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".  

let dayWeek = prompt("Enter the day of the week");

if (dayWeek === "Sunday" || dayWeek === "sunday") {
    alert("Weekend!");
} else {
    alert("Weekday");
}

// =====================================================================================================================

// 19. Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!"; else alert "Sorry, out of stock."  

let fruit = prompt("Enter fruit name");

if (fruit == "apple" || fruit == "banana") {
    alert("We have that!");
} else {
    alert("Sorry, out of stock.");
}

// =====================================================================================================================
// 20. Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert "Waiting for input..."

let userTyped = prompt("Type start");

if (userTyped === "start") {
    alert("Game started!");
} else {
    alert("Waiting for input...");
}

// =====================================================================================================================



// ##############################################################################################################
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                            Advanced JavaScript Conditional Logic Practice                                ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##############################################################################################################



// =====================================================================================================================


//                                                  1. Age-Based Grade Check 
//  Check a student's marks and display: 
//  ●  "Distinction" if marks ≥ 80  
//  ●  "Pass" if marks ≥ 50 and < 80  
//  ●  "Fail" if marks < 50  
//  ●  "Invalid Marks" if marks are not between 0 and 100


let marks = +prompt("Enter your marks");

if (marks >= 80 && marks <= 100) {
    console.log("Distinction");
} else if (marks >= 50 && marks < 80) {
    console.log("Pass");
} else if (marks >= 0 && marks < 50) {
    console.log("Fail");
} else {
    console.log("Invalid Marks");
}


// =====================================================================================================================

//                                          2. Discount Eligibility Based on Age and Membership 
//  Given a person's age and membership status, show: 
//  ●  "Senior Premium Discount" if age ≥ 60 and is a premium member  
//  ●  "Senior Discount" if age ≥ 60  
//  ●  "Premium Discount" if a premium member  
//  ●  "No Discount" otherwise

let personAge = +prompt("Enter your age");
let membership = prompt("Do you have a membership (yes/no)");

if (personAge >= 60 && membership == "yes" ) {
    console.log("Senior Premium Discount");
} else if (personAge >= 60 ) {
    console.log("Senior Discount");
} else if (membership == "yes") {
    console.log("Premium Discount");
} else {
    console.log("No Discount");
}


// =====================================================================================================================

//                                              3. Login and Email Verification 
//   ●  If user is logged in and email is verified → "Access granted"  
//   ●  If user is logged in but not verified → "Please verify your email"  
//   ●  If not logged in → "Please log in" 

let isLoggedIn = prompt("Are you (logged in / not logged in)?");
let isVerified = prompt("Is your email (verified / not verified)? ");

if (isVerified === "verified" && isLoggedIn == "logged in") {
    console.log("Access granted");
} else if (isVerified == "not verified" && isLoggedIn == "logged in") {
    console.log("Please verify your email");
} else  {
    console.log("Please log in");
}


// =====================================================================================================================


//                                               4 . Contest Eligibility 
//   Check if a person is eligible to enter a contest: 
//      ●  Must be between ages 18–35  
//      ●  Must be from Pakistan or India  
//      ●  Must not be banned  
//      Display appropriate messages for age, region, or ban issues. 


let agePerson = +prompt("Enter your age");
let region = prompt("Enter your region");
let issues = prompt("Enter your issues (banned / not banned)");

if (agePerson < 18 || agePerson > 35) {
    console.log("Age requirement failed: must be 18–35.");
} else if (region !== "Pakistan" || region !== "India") {
    console.log("Region requirement failed: must be Pakistan or India.");
} else if (issues !== "not banned") {
    console.log("Not eligible: you are banned.");
} else {
    console.log("You are eligible to enter the contest.");
}


// =====================================================================================================================

//                                              5. Subscription Access Check 
//  Given the subscription plan and login status: 
//      ●  "Welcome Premium User" if plan is "premium" and logged in  
//      ●  "Welcome Free User" if plan is "free" and logged in  
//      ●  "Please log in to continue" if not logged in  
//      ●  "Invalid subscription" otherwise

let premiumUser = prompt("Enter your plan (premium / free)");
let loggedIn = prompt("Are you logged in or not logged in?");

if (premiumUser === "premium" && loggedIn === "logged in") {
    console.log("Welcome Premium User");
} else if (premiumUser === "free" && loggedIn === "logged in") {
    console.log("Welcome Free User");
} else if (loggedIn === "not logged in") {
    console.log("Please log in to continue");
} else {
    console.log("Invalid subscription");
}


// =====================================================================================================================


//                                                 6. Product Purchase Validation 
//      Check product conditions: 
//          ●  "Buy now with discount" if price > 1000, in stock, and user is a member  
//          ●  "Buy now" if in stock  
//          ●  "Out of stock" if stock === 0  
//          ●  "Invalid product" otherwise

let productPrice = 1200;
let stock = 5;
let isMember = false;

if (productPrice > 1000 && stock > 0 && isMember) {
    console.log("Buy now with discount");
} else if (stock > 0) {
    console.log("Buy now");
} else if (stock === 0){
    console.log("Out of stock");
} else {
    console.log("Invalid product");
}


// =====================================================================================================================

//                                              7. Work Hours Check 
//          Check based on hoursWorked and isWeekend: 
//              ●  "Overtime" if hours > 40 and not a weekend  
//              ●  "Weekend work" if hours > 0 and is weekend  
//              ●  "Regular hours" if ≤ 40  
//              ●  "No work" if hours === 0


let hoursWorked = 23;
let isWeekend = false;

if (hoursWorked > 40 && !isWeekend) {
    console.log("Overtime");
} else if (hoursWorked > 0 && isWeekend) {
    console.log("Weekend Work");
} else if (hoursWorked === 0) {
    console.log("No work");
} else {
    console.log("Regular hours");
}


// =====================================================================================================================

//                                              8. Age and Gender Classification 
//          Given a user's age and gender: 
//              ●  "Teen Male" if age 13–19 and gender is "male"  
//              ●  "Teen Female" if age 13–19 and gender is "female"  
//              ●  "Adult" if age ≥ 20  
//              ●  "Child" if age < 13


let genderAge = 17;
let isGender = true; // true means Male && AND false means female.

if (genderAge >= 13 && genderAge <= 19 && isGender) {
    console.log("Teen Male");
} else if (genderAge >= 13 && genderAge <= 19 && !isGender) {
    console.log("Teen Female");
} else if (genderAge >= 20) {
    console.log("Adult")
} else if (genderAge >= 0 && genderAge < 13) {
    console.log("Child");
} else {
    console.log("Invalid input!");
}


// =====================================================================================================================

//                                              9. Weather Warning System 
//             Based on temperature and humidity: 
//              ●  "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60  
//              ●  "Hot and Dry" if temp ≥ 40 and humidity < 60  
//              ●  "Cool Weather" if temp ≤ 20  
//              ●  "Moderate" otherwise 

let weatherTemperature = 30;
let humidity = 50;

if (weatherTemperature >= 40 && humidity >= 60) {
    console.log("Heatwave Alert");
} else if (weatherTemperature >= 40 && humidity < 60) {
    console.log("Hot and Dry");
} else if (weatherTemperature <= 20) {
    console.log("Cool Weather");
} else {
    console.log("Moderate");
}


// =====================================================================================================================


//                                                      10. Score Grading System 
//             Given a score between 0–100: 
//              ●  "Excellent" for 90–100  
//              ●  "Good" for 70–89  
//              ●  "Average" for 50–69  
//              ●  "Poor" for 30–49  
//              ●  "Fail" below 30  
//              ●  "Invalid Score" if out of range

let _score = 95;

if (_score >= 90 && _score <= 100) {
    console.log("Excellent");
} else if (_score >= 70 && _score <= 89) {
    console.log("Good");
} else if (_score >= 50 && _score <= 69) {
    console.log("Average");
} else if (_score >= 30 && _score <= 49) {
    console.log("Poor");
} else if (_score >= 0 && _score < 30) {
    console.log("Fail");
} else {
    console.log("Invalid Score");
}


// =====================================================================================================================


//                                          11. Course Access Control 
//          To access a course: 
//          ●  Must be logged in  
//          ●  Must be enrolled  
//          ●  Must not be banned  
//          Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in" 

let logged_In = true;  // false means not logged in and True means logged in
let isEnrolled = true; // false means not enrolled and True means Enrolled
let isBanned = false;   // false means not banned and True means banned

if (!logged_In) {
    console.log("Please log in");
} else if (!isEnrolled) {
    console.log("Enroll in course first");
} else if (isBanned) {
    console.log("User is banned");
} else {
    console.log("Access granted");
}


// =====================================================================================================================

//                                                  12. Driving Conditions 
//          Given a user's speed and license status: 
//          ●  "License suspended" if speed > 120  
//          ●  "Warning" if speed between 100–120  
//          ●  "Normal driving" if speed ≤ 100 and has license  
//          ●  "Driving without license" otherwise

let speed = 180;
let hasLicense = true;

if (speed > 120) {
    console.log("License suspended");
} else if (speed > 100 && speed <= 120) {
    console.log("Warning");
} else if (speed <= 100 && hasLicense) {
    console.log("Normal driving");
} else {
    console.log("Driving without license");
}


// =====================================================================================================================


//                                                  13. Order Processing Status 
//          For an online order: 
//          ●  "Order on the way" if payment is complete and shipped  
//          ●  "Preparing your order" if payment is complete and not shipped  
//          ●  "Awaiting payment" if payment is pending  
//          ●  "Payment failed" if transaction failed

let payment = "pending"; 
let shipped = false;  

if (payment === "completed") {
    if (shipped) {
        console.log("Order on the way");
    } else {
        console.log("Preparing your order");
    }
} else if (payment === "pending") {
    console.log("Awaiting payment");
} else if (payment === "failed") {
    console.log("Payment failed");
} else {
    console.log("Invalid order status");
}


// =====================================================================================================================


//                                              14. Battery Status Checker 
//          Given battery level and charging state: 
//          ●  "Fully Charged" if level === 100  
//          ●  "Charging..." if level < 100 and charging  
//          ●  "Low Battery" if level < 20 and not charging  
//          ●  "Battery OK" otherwise

let batteryLevel = 10;
let charging = false;

if (batteryLevel < 0 || batteryLevel > 100) {
    console.log("Invalid input!");
} else if (batteryLevel === 100) {
    console.log("Fully Charged"); 
}  else if (batteryLevel < 100 && charging) {
    console.log("Charging..."); 
} else if (batteryLevel < 20 && !charging) {
    console.log("Low Battery"); 
} else {
    console.log("Battery OK" );
}


// =====================================================================================================================

//                                      15. Browser and Device Compatibility Check 
//          Based on user's browser and device: 
//          ●  "Full features enabled" if browser is Chrome and device is Desktop  
//          ●  "Limited mobile features" if browser is Chrome and device is Mobile  
//          ●  "Please switch to Chrome" for all other browsers


let browser = "Edge";
let device = "Desktop";

if (browser === "Chrome") {
    if (device === "Desktop") {
        console.log("Full features enabled");
    } else if (device === "Mobile") {
        console.log("Limited mobile features");
    } else {
        console.log("Invalid Input!");
    }
} else {
    console.log("Please switch to Chrome");
} 


// =====================================================================================================================
