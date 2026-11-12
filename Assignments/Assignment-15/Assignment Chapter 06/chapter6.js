// 1.  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

console.log("Result: ");
let a = 10;
console.log("The value of a is: " + a);
console.log("............................");

console.log("The value of ++a is: " + ++a);
console.log("Now the value of a is: " + a);
console.log("                              ");


console.log("The value of a++ is: " + a++);
console.log("Now the value of a is: " + a);
console.log("                              ");

console.log("The value of --a is: " + --a);
console.log("Now the value of a is: " + a);
console.log("                              ");

console.log("The value of a-- is: " + a--);
console.log("Now the value of a is: " + a);
console.log("                              ");


// 2. What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 

// pre-increment and pre-decrement --a & ++a
// post-increment and post-decrement a-- & a++

// --a;             // first it will decrease the value then shows the final answer.
// a is 2 so it will decrease the value, so now its 1;

// --a - --b;       // Both are first decrease the value then it will subtract 
// a is 2 and b - 1 so --a becomes 1 and --b becomes 0 so the answer is 1 - 0 = 1

// --a - --b + ++b; //  
// --a becomes 1 and --b becomes 0 + ++ b becomes 2 = 1 - 0 + 2 = 3 

// --a - --b + ++b + b--; 
// --a becomes 1 and --b becomes 0 + 2 + b-- becomes 1 because this is pre increment it will remain the same value first then it will increase it. 1 - 0 + 1 + 1 = 3

// console.log(result);

// a = 1;
// b = 0;
// result = 3;



// 3. Write a program that takes input a name from user & greet the user. 
let greet = prompt("Enter your name");
alert("Hello, " + greet);



// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 

let number = +prompt("Enter a number ");
console.log(number * 1);
console.log(number * 2);
console.log(number * 3);
console.log(number * 4);
console.log(number * 5);
console.log(number * 6);
console.log(number * 7);
console.log(number * 8);
console.log(number * 9);
console.log(number * 10);

if (number === +"") {
    console.log(5 * 1);
    console.log(5 * 2);
    console.log(5 * 3);
    console.log(5 * 4);
    console.log(5 * 5);
    console.log(5 * 6);
    console.log(5 * 7);
    console.log(5 * 8);
    console.log(5 * 9);
    console.log(5 * 10);
}


// 6. Take 
// a) Take three subjects name from user and store them in 3 different variables.
let subject1 = prompt("Enter subject1");
let subject2 = prompt("Enter subject2");
let subject3 = prompt("Enter subject3");

// b) Total marks for each subject is 100, store it in another variable. 
let subject1Marks = 100;
let subject2Marks = 100;
let subject3Marks = 100;


// c) Take obtained marks for first subject from user and stored it in different variable. 
let subject1ObtainedMarks = +prompt("Enter your subject1 Marks");

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
let subject2ObtainedMarks = +prompt("Enter your subject2 Marks");
let subject3ObtainedMarks = +prompt("Enter your subject3 Marks");


// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 

let totalNumber = subject1Marks + subject2Marks + subject3Marks;
console.log(totalNumber);
let totalObtainedMarks = subject1ObtainedMarks + subject2ObtainedMarks + subject3ObtainedMarks
console.log(totalObtainedMarks);

let result = (totalObtainedMarks / totalNumber) * 100
console.log(result + "%");

