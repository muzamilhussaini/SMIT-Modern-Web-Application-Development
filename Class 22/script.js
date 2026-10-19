// Operators 

// ========================================================================================================================

// 1. Basic Arithmetic Operators

let a = 25;
let b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponentiation:", a ** b);


// ========================================================================================================================
// 2. Remainder Operator (%)

console.log(17 % 5);
console.log(24 % 6);
console.log(31 % 10);
console.log(20 % 30);


// ========================================================================================================================
// 3. Operator Precedence

console.log(10 + 5 * 2);
console.log((10 + 5) * 2);
console.log(20 / 5 + 3);
console.log(20 / (5 + 3));
console.log(18 % 5 * 2);
console.log(2 ** 3 + 4 * 2);


// ========================================================================================================================
// 4. String Concatenation and Type Coercion

let value1 = 10;
let value2 = "20";
let value3 = 5;

console.log(value1 + value2);
console.log(value1 + value3 + value2);
console.log(value1 + (value3 + value2));
console.log(value2 - value1);
console.log(value2 * value3);
console.log(value2 / value3);
console.log(value2 % value3);


// ========================================================================================================================
// 5. Boolean Values in Arithmetic

let isActive = true;
let isCompleted = false;

console.log(isActive + 5);
console.log(isCompleted + 5);
console.log(isActive * 10);
console.log(isCompleted * 10);
console.log(isActive - isCompleted);
console.log(20 + isActive * 5);


// ========================================================================================================================
// 6. typeof Operator

let numberValue = 100;
let stringValue = "100";
let booleanValue = true;

console.log(typeof numberValue);
console.log(typeof stringValue);
console.log(typeof booleanValue);

console.log(typeof numberValue + stringValue);
console.log(typeof (numberValue + stringValue));
console.log(typeof (numberValue + 50));


// ========================================================================================================================
// 7. Post-Increment

let postIncrement = 10;

console.log(postIncrement++);
console.log(postIncrement++);
console.log(postIncrement);


// ========================================================================================================================
// 8. Pre-Increment

let preIncrementValue = 10;

console.log(++preIncrementValue);
console.log(++preIncrementValue);
console.log(preIncrementValue);


// ========================================================================================================================
// 9. Post-Decrement

let postDecrement = 10;

console.log(postDecrement--);
console.log(postDecrement--);
console.log(postDecrement);


// ========================================================================================================================
// 10. Pre-Decrement

let preDecrement = 10;

console.log(--preDecrement);
console.log(--preDecrement);
console.log(preDecrement);


// ========================================================================================================================
// 11. Mixed Operators Challenge

let x = 15;
let y = "4";
let z = 3;
let isValid = true;

console.log(x + y * z);
console.log((x + y) * z);
console.log(x % z + y);
console.log(x / z + isValid);
console.log(x - y + z * 2);
console.log(typeof x + y);
console.log(typeof (x + y * z));


// ========================================================================================================================
// 12. Increment and Decrement Challenge

let count = 5;

console.log(count++);
console.log(++count);
console.log(count--);
console.log(--count);
console.log(count);

// ========================================================================================================================

let num1 = 59;
let num2 = 7;
let num3 = "5";
let num4 = 8;
let num5 = "75";
let num6 = 12;
let num7 = 5;
let num8 = "99";
let num9 = 32;
let num10 = 15;
let num11 = true;
let num12 = 32;
let num13 = 11;
let num14 = false;
let num15 = 22;
let num16 = "52";
let num17 = "15";
let num18 = 98;
let num19 = false;
let num20 = true;

console.log(9 % 7);

console.log(
    num1 + num2 + num3 + num4 + num5 + 
    num6 + num7 + num8 + num9 + num10 + 
    num11 + num12 + num13 + num14 + num15 +
    num16 + num17 + num18 + num19 + num20
);
console.log(
    num1 * num2 + num3 + num4 * num5 / 
    num6 - num7 + num8 * num9 - num10 + 
    num11 / num12 * num13 + num14 + num15 -
    num16 + num17 + num18 * num19 - num20
);
console.log(
    num1 % num2 + num3 + num4 % num5 * 
    num6 + num7 * num8 + num9 % num10 + 
    num11 % num12 / num13 + num14 + num15 /
    num16 + num17 * num18 + num19 / num20
);
console.log(
    num1 - num2 - num3 + num4 + num5 - 
    num6 + num7 + num8 - num9 + num10 - 
    num11 - num12 + num13 + num14 + num15 +
    num16 + num17 + num18 - num19 + num20
);

// ========================================================================================================================

console.log(
    typeof num3 + " " + typeof num6 + " "  + typeof num20 + " " + typeof num7 + " " + typeof num14 + " " + typeof num5 
);

let number1 = 1;
let number2 = "2";

console.log(typeof num1 + num2); // number2
console.log(num1 + num2); // 12

// ========================================================================================================================
// console.log(20 % 30);

// Post increment 
let increment = 5;

// increment++
console.log(increment++);

// decrement--
console.log(increment--);

console.log(increment);


// pre increment 
let preIncrement = 7;

console.log(++preIncrement);

console.log(--preIncrement);

console.log(preIncrement);

// ========================================================================================================================