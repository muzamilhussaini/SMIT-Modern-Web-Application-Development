const { cite } = require("framer-motion/client");

// 1.  Create an array of 3 student names and add one more using push().
console.log("Answer No. 1");
const names = ["Muzamil", "Jawad", "Rehman Ali"];
console.log(names);
names.push("Hamid");
console.log(names);

// 2.  Remove the last item from an array of fruits using pop().
console.log("Answer No. 2");
names.pop();
console.log(names);


// 3.  Add "Monday" to the beginning of a days array using unshift(). 
console.log("Answer No. 3");
const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days);
days.unshift("Monday");
console.log(days);


// 4.  Remove the first item from an array of colors using shift().
console.log("Answer No. 4");
const colors = ["Red", "Orange", "Blue"];
colors.shift();
console.log(colors);


// 5.  Use splice() to insert "Math" and "Science" at index 2 of a subjects array.  
console.log("Answer No. 5");
const subjects = ["Islamiat Studies", "Physics", "Algebra", "Biology"];
subjects.splice(2, 0, "Math", "Science");
console.log(subjects);


// 6.  Use splice() to remove 2 elements starting from index 1 of a cities array.  
console.log("Answer No. 6");
const cites = ["Quetta", "Karachi", "Lahore", "Faisalabad", "Islamabad"];
cites.splice(1, 2);
console.log(cites);


// 7.  Use slice() to get the first 3 items from a countries array.

console.log("Answer No. 7");
const countries = ["Pakistan", "Norway", "USA", "Germany", "Spain"];
let suggestedCountries = countries.slice(0, 3);   // can't change the original string
console.log(suggestedCountries);


// 8.  Convert the string "apple,banana,mango" into an array using split().  
console.log("Answer No. 8");
let fruits = "apple,banana,mango";
let newFruits = fruits.split("");  // can't change the original string
console.log(newFruits);


// 9.  Join an array of characters ['J','S'] into a single string using join().  
console.log("Answer No. 9");
let characters = ['J', 'S'];
console.log(characters.join("")); // Can't change the original String
console.log(characters);

// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using 
// concat().

console.log("Answer No. 10");
let firstArray = ['pen', 'pencil'];
let secondArray = ['eraser', 'sharpener'];

const finalArray = firstArray.concat(secondArray);
console.log(finalArray);


// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).  
console.log("Answer No. 11");
let sortArray = [10, 5, 2, 8];
sortArray.sort(); // The JavaScript sort method treats everything as a text (string) Not a number. 
console.log(sortArray);

// If we want to treat the as a number so we will code as like this below 
// ascending Order a - b
// descending Oder b - a 

sortArray.sort((a, b) => a - b); // This is an arrow function we also call it as fat arrow function, the arrow function uses in modern JavaScript the short form of function declaration 
console.log(sortArray);


// 12. Sort an array of names alphabetically using sort(). 
console.log("Answer No. 12");
let alphabetically = ['B', "D", "C", "A"];
alphabetically.sort();
console.log(alphabetically);


// 13. Reverse the order of an array of numbers using reverse(). 
console.log("Answer No. 13");
let numbers = [2, 3, 7, 5, 15, 14, 77, 43];
numbers.reverse();
console.log(numbers)

// 14. Use indexOf() to find the index of "Blue" in a colors array.  
console.log("Answer No. 14");
const colorArray = ["Yellow", "Green", "Blue", "White", "Black"];
console.log(colorArray.indexOf("Blue"));

// 15. Add three new items to an empty array using push().
console.log("Answer No. 15");
let empty = [];
console.log(empty);
empty.push("items1");
empty.push("items2");
empty.push("items3");
console.log(empty);


// 16. Remove the middle item from an array of 5 numbers using splice().  
console.log("Answer No. 16");
const removeMiddle = [1, 2, 3, 4, 5];
removeMiddle.splice(2, 1);
console.log(removeMiddle);

// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().
console.log("Answer No. 17");
const languages = "HTML CSS JavaScript";
let languagesArr = languages.split(" ");
console.log(languagesArr);

// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.
console.log("Answer No. 18");
const reverse = ['a', 'b', 'c'];
reverse.reverse();
console.log(reverse);

// 19. Check if "Karachi" exists in an array using indexOf() and show its index.
console.log("Answer No. 19");
console.log(cites.indexOf ("Karachi"));

// 20. Concatenate two arrays of even and odd numbers using concat() and then reverse them.
console.log("Answer No. 20");
const evenNumbers = [2,4,6,8,10];
const OddNumbers = [1,3,5,7,9];

const concatenate = evenNumbers.concat(OddNumbers);

console.log(concatenate);
concatenate.reverse();
console.log(concatenate);

