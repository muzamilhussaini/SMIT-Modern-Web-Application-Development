console.log("Hello, World!");

// Data Types 
console.log(typeof 43);  // type of number is number
console.log(typeof "Hello!");
console.log(typeof true);
console.log(typeof null);  // type of null is object
console.log(typeof undefined);

// Variables 

// Variables are like a container that we will store a value, the values can be string, numbers, Boolean etc etc. 
// var
// let
// const

// Var || The var variale is global scope variable, when we create a var variable then we can redeclare, and reassign 

var age = 12;
console.log(age);
var age = 34;
console.log(age);
console.log(age);
age = "21";
console.log(age);

// Let || the let variable is a block scope variable, when we create a let variables so, then we can't redeclare a let variable but we can reassign a value of let variable. If we try to redeclare a let varibale then we got an error

let courseName = 'Javascript';
// let courseName = "This varible gives us an error. The error is SyntaxError: and it says, Identifier 'courseName has already been declared'
// console.log(courseName);
courseName = "React"; // Here the courseName has been ressign, in let we only reassign a value.
console.log(courseName);


// Const || The const variable is a block scope variable, when we create a const variables so, then we can't redeclare and reassign the const variable. We can only Initial one time 
// If we try to redeclare or reassign a const varible so it gives us the SyntaxError

const className = "Modern Web App Application Development.";

// if we try to redecalre it so it gives us a SyntaxError as like the let varibale 
// const className
// Also if we try to reassign the const variable it gives us error. So this error will be the TypeError: and it says Assignment to constant variable and it show that part of our error.
// className = "haah"

console.log(className); // This const varibale is fixed whenever you create it, then you can't update the value or redecalre.


// ==================================================================================================================== 
console.log("==================================================================== ");
let workerName = "Jawad Ali";
const workerSalary = 50000;
let workName = null;
const workTime = undefined;

console.log(workerName);
console.log(workName);
console.log(workTime);
console.log(workerSalary);

console.log("Type of worker name is:", typeof workerName);
console.log("Type of work name is:", typeof workName);
console.log("Type of work time is:", typeof workTime);
console.log("Type of worker Salary is:", typeof workerSalary);



console.log("==================================================================== ");
let teacherName = "Abdullah";
let teacherAge = 24;
console.log(teacherName);
console.log(teacherAge);
console.log(`Type of teacher name is: ${typeof teacherName}`);
console.log(`Type of teacher age is: ${typeof teacherAge}`);

console.log("==================================================================== ");

const studentId = 68565;
const nameOfStudent = "Muzamil";
const isStudent = true;

console.log(nameOfStudent);
console.log(studentId);
console.log(isStudent);

console.log("Type of student name is:", typeof nameOfStudent);
console.log("Type of student ID is:", typeof studentId);
console.log("Type of isStudent is:", typeof isStudent);



console.log("==================================================================== ");


let employeeName = "Ali Akbar";
let employeeID = 101;
let isEmployee = true;

console.log("Name:", employeeName);
console.log("ID:", employeeID);
console.log("isEmployee:", isEmployee);

console.log("Type of employee name is:", typeof employeeName);
console.log("Type of employee ID is:", typeof employeeID);
console.log("Type of isEmployee is:", typeof isStudent);

console.log("==================================================================== ");
