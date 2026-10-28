// ##############################################################################################################
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                          String Concatenation                                            ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##############################################################################################################

// ==================================================================================

// 🔹 Task 1: Create a Full Address 
//  Instruction: 
//  Ask the user to enter their street, city, and country. 
//  Concatenate these values into one full 
//  address string and display it like:  "Your full address is: 123 Main St, Springfield, USA"

let street = prompt("Enter your street");
let city = prompt("Enter your city");
let country = prompt("Enter your country");

console.log("Your full address is: " + street + ", " + city + ", " + country);


// ==================================================================================

// 🔹 Task 2: Make a Custom Username 
//  Instruction: 
//  Ask the user to input their first name and a favorite number. 
//  Concatenate them to create a 
//  simple username like:  "john42" 
//  Display the result with a message: "Your new username is: john42" 

let userName = prompt("Enter your first name");
let favoriteNumber = prompt("Enter your favorite number");

console.log("Your new username is: " + userName + favoriteNumber);


// ==================================================================================

// 🔹 Task 3: Email Generator 
//  Instruction: 
//  Ask the user for their first name and last name. 
//  Combine them into an email address format 
//  like:  "firstname.lastname@example.com" 
//  Show the result. 

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

console.log(firstName + lastName + "@email.com");


// ==================================================================================


// 🔹 Task 4: Combine Favorite Things 
//  Instruction: 
//  Ask the user for their favorite color, animal, and food. Create a sentence like:  
//  "Your favorite things are: blue dogs and pizza!"

let favoriteColor = prompt("Enter your favorite color");
let favoriteAnimal = prompt("Enter your favorite animal");
let favoriteFood = prompt("Enter your favorite food");

console.log("Your favorite things are: " + favoriteColor + " " + favoriteAnimal + " and " + favoriteFood + "!");


// ==================================================================================

// 🔹 Task 5: Quote with Author 
//  Instruction: 
//  Ask the user for a quote and the author’s name. Display it in the format:  
//  "The only limit is your mind." - John Doe

let quote = prompt("Write the author quote");
let authorName = prompt("Enter the author name");

console.log(quote + " - " + authorName);