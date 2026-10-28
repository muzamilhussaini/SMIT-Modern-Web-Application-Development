// ##############################################################################################################
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                         Operators Practice Questions                                     ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##                                                                                                          ##
// ##############################################################################################################


//                                              ✴ Arithmetic Operator Tasks 

//                          1.  Ask the user to enter two numbers. Show the result of adding them using alert(). 

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

alert(num1 + num2);

// =====================================================================================================================

//                    2.  Ask for two numbers. Subtract the second number from the first and log the result to the console. 

let num3 = +prompt("Enter first number");
let num4 = +prompt("Enter second number");

console.log(num3 - num4);

// =====================================================================================================================

//                          3.  Ask for two numbers. Multiply them and display the answer in an alert.  

let num5 = +prompt("Enter first number");
let num6 = +prompt("Enter second number");

alert(num5 * num6);


// =====================================================================================================================

//                      4.  Ask the user for two numbers. Divide the first by the second and log the result.  

let num7 = +prompt("Enter first number");
let num8 = +prompt("Enter second number");

console.log(num7 / num8);

// =====================================================================================================================

//              5.  Ask the user for two numbers and show the remainder when the first is divided by the  second (use %)

let num9 = +prompt("Enter first number");
let num10 = +prompt("Enter second number");

console.log(num9 % num10);

// =====================================================================================================================



//                                                      ✴ Assignment Operator Tasks 

//                          6.  Create a variable with the value 10. Add 5 to it using += and log the new value.  

let val1 = 10;
val1 += 5;
console.log(val1);

// =====================================================================================================================

// 7.  Create a variable with the value 20. Subtract 4 from it using -= and alert the result.  

let val2 = 20;
val2 -= 4;
alert(val2);

// =====================================================================================================================

//                      8.  Create a variable with the value 6. Multiply it by 3 using *= and display the result.  

let val3 = 6;
val3 *= 3;
console.log(val3);

// =====================================================================================================================

//                      9.  Set a variable to 50. Divide it by 2 using /= and log the final value.  

let val4 = 50;
val4 /= 2;
console.log(val4);

// =====================================================================================================================

//                  10. Create a variable, assign it a value from prompt(), then increase it by 10 and show the result.

let val5 = +prompt("Enter any number");
val5 += 10;
alert(val5);

// =====================================================================================================================


//                                                 ✴ Comparison Operator Tasks 
//                          11. Ask the user for two numbers. Use > to check if the first number is greater than the second, then log the result (true/false).  

let number1 = +prompt("Enter your first number");
let number2 = +prompt("Enter your second number");

console.log(number1 > number2);


// =====================================================================================================================



//                  12. Ask the user for two numbers. Use < to check if the first number is less than the second, then alert the result.

let number3 = +prompt("Enter your first number");
let number4 = +prompt("Enter your second number");

alert(number3 < number4);

// =====================================================================================================================  

//                      13. Ask the user for a number. Use == to check if it equals 100 and log the result.  

let number5 = +prompt("Enter any number you want");

console.log(number5 == 100);


// =====================================================================================================================  

// 14. Ask the user for a number. Use === to check if it is exactly equal to the string "100" and log the result

let number6 = prompt("Enter any number you want");

console.log(number6 === "100");


// =====================================================================================================================  

// 15. Ask the user for two numbers. Use != to check if they are not equal and alert the result.  

let number7 = +prompt("Enter your first number");
let number8 = +prompt("Enter your second number");

alert(number7 != number8);

// =====================================================================================================================  

// 16. Ask the user for two numbers. Use !== to check if they are not strictly equal and log the result.

let number9 = +prompt("Enter your first number");
let number10 = +prompt("Enter your second number");

console.log(number9 !== number10);

// =====================================================================================================================  

// 17. Ask for two numbers and check if the first is greater than or equal to the second.  Display result using alert.  

let number11 = +prompt("Enter your first number");
let number12 = +prompt("Enter your second number");

alert(number11 >= number12);

// =====================================================================================================================  

// 18. Ask for two numbers and check if the first is less than or equal to the second. Show result in the console. 

let number13 = +prompt("Enter your first number");
let number14 = +prompt("Enter your second number");

console.log(number13 <= number14);



// ===================================================================================================================== 

//                                              ✴ Logical Operator Tasks 

// =====================================================================================================================

//                          19. Ask the user for age and country. Use && to check if age is over 18 and country is "USA". Log the result.  

let age = +prompt("Enter your age");
let country = prompt("Enter your country");

console.log(age > 18 && country === "USA");

// =====================================================================================================================

//                          20. Ask the user to enter a color and a shape. Use || to check if the color is "red" or the  shape is "circle". Show the result in an alert

let color = prompt("Enter any color name");
let shape = prompt("Enter your shape");

alert(color === "red" || shape === "circle");