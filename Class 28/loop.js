// 1. Number Countdown 🚀
// Print numbers from 20 down to 1.
for(let i = 20; i >= 1; i--) {
    console.log(i);
}


// Even Number Hunter 🎯
// Print all even numbers between 1 and 100.
for(let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// Multiplication Machine ✖️
// Ask for a number and print its multiplication table from 1 to 10.
const multiplicationTable = 5;
for(let i = 1; i <= 10; i++) {
    let result = `${multiplicationTable} x ${i} = ${multiplicationTable * i}`;
    console.log(result);
}



// Sum Master 💰
// Calculate the sum of all numbers from 1 to 100.
let sum = 0;
for(let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);


// Star Builder ⭐
// Print this pattern:
// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// ======================================================================================================================================

//                                                              Level 2 – Interesting Logic

//                                                                      Intermediate
// ======================================================================================================================================

// 6. Number Reverser 🔄   
//    Print numbers from 100 to 1, but only multiples of 5.
for (let i = 100; i >= 1; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


// 7. Password Detective 🔐
   
//    You have this password:
//    let password = "javascript123";
//    Use a for loop to count how many characters are in the password.

let password = "javascript123";
let count = 0;
for(let i = 0; i < password.length; i++) {
    count++;
}
console.log(count);


// 8. Lucky Number Finder 🍀
//    Find all numbers between 1 and 200 that are divisible by both 3 and 7.
for(let i = 1; i <= 200; i++) {
    if (i % 3 === 0) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}


// 9. Mini Calculator 🧮
//    Calculate the factorial of 5!.
//    Expected output:
//    120

const number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(factorial);



// 10. Vowel Detective 🔎
    
//     Count how many vowels are present in:
//     let word = "javascript programming";

let vowel = 0;





// Level 3 – Fun Challenges
// Advanced
// 11. Pyramid Builder 🏔️

// Print this pattern:
//     *
//    ***
//   *****
//  *******
// *********


// 12. Guess the Secret Number 🎲

// Given an array:
// let numbers = [5, 12, 8, 25, 30, 7, 100];


// Use a for loop to find the largest number.

// 13. Reverse Word Machine 🔤

// Reverse this word without using .reverse():
// let word = "HELLO";


// Expected output:
// OLLEH


// 14. FizzBuzz Challenge 💥

// Print numbers from 1 to 50.
// - Divisible by 3 → print Fizz.
// - Divisible by 5 → print Buzz.
// - Divisible by both → print FizzBuzz.
// - Otherwise → print the number.
// 15. Duplicate Detective 🕵️

// Given:
// let numbers = [2, 5, 8, 2, 9, 5, 10, 2];


// Find and print all duplicate numbers.
// Level 4 – Boss Challenges
// Expert
// 16. Diamond Star Pattern 💎

// Print:
//     *
//    ***
//   *****
//  *******
//   *****
//    ***
//     *


// 17. Prime Number Hunter 👑

// Find all prime numbers between 1 and 100.

// 18. Array Score Champion 🏆

// Given:
// let scores = [45, 89, 67, 99, 34, 100, 76];


// Find:
// - Highest score.
// - Lowest score.
// - Total score.
// - Average score.
// 19. Number Frequency Counter 📊

// Given:
// let numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];


// Count how many times each number appears.

// 20. Multiplication Grid 🎮

// Use nested for loops to print a multiplication grid from 1 to 10.