// 1.  Declare an empty array using JS literal notation to store student names in future.

var emptyArr = [];

// 2. Declare an empty array using JS object notation to store student names in future.
var emptyArr = {
    name: "Muzamil",
}

// 3. Declare and initialize a strings array. 
let stringArr = ["Apple", "Banana", "Orange"];


// 4.  Declare and initialize a numbers array
let numberArr = [77, 33, 2, 45, 22];

// 5.  Declare and initialize a boolean array. 
let booleanArr = [true, false, false, true];

// 6. Declare and initialize a mixed array.
let mixedArr = [77, 33, true, false, "Apple", "Banana"];


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("Qualification");
console.log("1) " + qualifications[0]);
console.log("2) " + qualifications[1]);
console.log("3) " + qualifications[2]);
console.log("4) " + qualifications[3]);
console.log("5) " + qualifications[4]);
console.log("6) " + qualifications[5]);
console.log("7) " + qualifications[6]);
console.log("8) " + qualifications[7]);


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

let student = ["Ali", "Abdul", "Muzamil"];
let studentNumber = [320, 230, 480];
let totalMarks = [500, 500, 500];

let percentage1 = (studentNumber[0] / totalMarks[0]) * 100 + "%";
let percentage2 = (studentNumber[1] / totalMarks[1]) * 100 + "%";
let percentage3 = (studentNumber[2] / totalMarks[2]) * 100 + "%";

console.log("Score of " + student[0] + " is " + studentNumber[0] + ". Percentage: " + percentage1);
console.log("Score of " + student[1] + " is " + studentNumber[1] + ". Percentage: " + percentage2);
console.log("Score of " + student[2] + " is " + studentNumber[2] + ". Percentage: " + percentage3);
