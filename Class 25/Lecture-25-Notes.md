# 📘 JavaScript Functions — Complete Notes

## 📌 1. Introduction to Functions

A function is a reusable block of code designed to perform a particular task.

Instead of writing the same code repeatedly, we can define a function once and call it whenever we need it.

**Example:**

```js
function greet() {
    console.log("Hello, JavaScript!");
}

greet();
```

**Output:**

```text
Hello, JavaScript!
```

In this example:

- `function` is the keyword used to declare a function.
- `greet` is the function name.
- `{}` contains the function body.
- `greet()` calls or invokes the function.

**Important:** Defining a function does not automatically execute it. We need to call it.

## 🔧 2. Function Declaration

A function declaration is a way to define a function using the `function` keyword.

**Syntax:**

```js
function functionName() {
    // Code to execute
}
```

**Example:**

```js
function welcomeMessage() {
    console.log("Welcome to my website!");
}

welcomeMessage();
```

**Output:**

```text
Welcome to my website!
```

We can call the same function multiple times:

```js
function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();
```

**Output:**

```text
Hello!
Hello!
Hello!
```

## 📥 3. Parameters and Arguments

Parameters and arguments allow us to pass information into functions.

- **Parameters:** Variables written inside the function definition.
- **Arguments:** Actual values passed when calling the function.

**Example:**

```js
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Muzamil");
greet("Ali");
```

**Output:**

```text
Hello, Muzamil!
Hello, Ali!
```

In this example:

- `name` is a parameter.
- `"Muzamil"` and `"Ali"` are arguments.

### Multiple Parameters

A function can accept multiple parameters.

```js
function studentInfo(name, age, department) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Department: ${department}`);
}

studentInfo("Muzamil", 21, "Information Technology");
```

**Output:**

```text
Name: Muzamil
Age: 21
Department: Information Technology
```

## ↩️ 4. Return Statement

The `return` statement sends a value back from a function.

It allows us to use the result of a function in another part of our program.

**Example:**

```js
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

**Output:**

```text
30
```

### `console.log()` vs `return`

These two are different.

**Using `console.log()`:**

```js
function add(a, b) {
    console.log(a + b);
}

let result = add(10, 20);

console.log(result);
```

**Output:**

```text
30
undefined
```

The function displays `30`, but it does not return a value. Therefore, `result` becomes `undefined`.

**Using `return`:**

```js
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

**Output:**

```text
30
```

The returned value can be stored, reused, or passed into another function.

**Important:** When JavaScript executes `return`, the function stops executing at that point.

## ➗ 5. Functions with Mathematical Operations

Functions can perform mathematical calculations.

```js
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

console.log(addition(20, 10));
console.log(subtraction(20, 10));
console.log(multiplication(20, 10));
console.log(division(20, 10));
```

**Output:**

```text
30
10
200
2
```

## ⚙️ 6. Default Parameters

Default parameters allow us to assign default values to function parameters.

If an argument is not provided, JavaScript uses the default value.

**Example:**

```js
function greet(name = "Guest") {
    console.log(`Welcome, ${name}!`);
}

greet("Muzamil");
greet();
```

**Output:**

```text
Welcome, Muzamil!
Welcome, Guest!
```

Another example:

```js
function calculatePrice(price, tax = 10) {
    return price + tax;
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 20));
```

**Output:**

```text
110
120
```

## 🏹 7. Function Expression

A function expression is when we store a function inside a variable.

**Example:**

```js
const greet = function() {
    console.log("Hello from a function expression!");
};

greet();
```

**Output:**

```text
Hello from a function expression!
```

### Function Expression with Parameters

```js
const add = function(a, b) {
    return a + b;
};

console.log(add(10, 20));
```

**Output:**

```text
30
```

**Difference:** A function declaration is defined using a function name directly, while a function expression assigns a function to a variable.

Function declarations can generally be called before their definition because of hoisting. Function expressions assigned to `const` or `let` cannot be accessed before their initialization.

## ⚡ 8. Arrow Functions

Arrow functions provide a shorter syntax for writing functions. They were introduced in ECMAScript 2015 (ES6).

**Syntax:**

```js
const functionName = (parameters) => {
    // Code
};
```

**Example:**

```js
const greet = () => {
    console.log("Hello from an arrow function!");
};

greet();
```

### Arrow Function with Parameters

```js
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

**Output:**

```text
30
```

### Implicit Return

When an arrow function contains only one expression, we can remove the curly braces and the `return` keyword.

```js
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));
```

**Output:**

```text
20
```

### Single Parameter

If an arrow function has exactly one parameter, parentheses around that parameter are optional.

```js
const square = number => number * number;

console.log(square(5));
```

**Output:**

```text
25
```

## 🔄 9. Anonymous Functions

An anonymous function is a function without a name. It is commonly used inside function expressions and callbacks.

**Example:**

```js
const greet = function() {
    console.log("Hello!");
};

greet();
```

The function itself has no name, even though it is assigned to the variable `greet`.

## 🔁 10. Callback Functions

A callback function is a function passed as an argument to another function. The receiving function can execute the callback when needed.

**Example:**

```js
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Muzamil", sayGoodbye);
```

**Output:**

```text
Hello, Muzamil!
Goodbye!
```

### Callback Using an Anonymous Function

```js
function calculate(a, b, callback) {
    console.log(callback(a, b));
}

calculate(10, 5, function(x, y) {
    return x + y;
});
```

**Output:**

```text
15
```

### Callback Using an Arrow Function

```js
function calculate(a, b, callback) {
    console.log(callback(a, b));
}

calculate(10, 5, (x, y) => x * y);
```

**Output:**

```text
50
```

## 🔍 11. Immediately Invoked Function Expression (IIFE)

An IIFE is a function that runs immediately after it is defined.

**Example:**

```js
(function() {
    console.log("This function runs immediately!");
})();
```

**Output:**

```text
This function runs immediately!
```

### IIFE with Parameters

```js
(function(name) {
    console.log(`Hello, ${name}!`);
})("Muzamil");
```

**Output:**

```text
Hello, Muzamil!
```

IIFEs can be useful when creating a separate scope for variables.

## 🔐 12. Function Scope

Scope determines where variables can be accessed in JavaScript.

### Global Scope

A variable declared outside a function can generally be accessed from inside that function.

```js
let name = "Muzamil";

function greet() {
    console.log(name);
}

greet();
```

**Output:**

```text
Muzamil
```

### Local or Function Scope

A variable declared inside a function is generally accessible only inside that function.

```js
function student() {
    let age = 21;
    console.log(age);
}

student();
```

**Output:**

```text
21
```

Trying to access `age` outside the function will cause a `ReferenceError`.

### Block Scope

Variables declared with `let` and `const` inside a block are limited to that block.

```js
function example() {
    if (true) {
        let age = 21;
        const name = "Muzamil";

        console.log(age);
        console.log(name);
    }
}

example();
```

## 🔁 13. Recursive Functions

A recursive function is a function that calls itself.

It needs a stopping condition, known as the **base case**, to prevent endless calls.

**Example:**

```js
function countdown(number) {
    if (number === 0) {
        console.log("Finished!");
        return;
    }

    console.log(number);
    countdown(number - 1);
}

countdown(5);
```

**Output:**

```text
5
4
3
2
1
Finished!
```

Another example — factorial:

```js
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log(factorial(5));
```

**Output:**

```text
120
```

## 🆚 14. Different Types of Functions

| Function type | Description |
|---|---|
| Function declaration | A function defined using the `function` keyword. |
| Function expression | A function assigned to a variable. |
| Arrow function | A shorter function syntax using `=>`. |
| Anonymous function | A function without a name. |
| Callback function | A function passed to another function. |
| IIFE | A function that executes immediately after definition. |
| Recursive function | A function that calls itself. |

## ⚠️ 15. Common Mistakes to Avoid

1. **Forgetting to call a function:** Defining a function does not execute it automatically.
2. **Confusing parameters and arguments:** Parameters are in the function definition; arguments are passed during the call.
3. **Forgetting `return`:** Without a return statement, a function returns `undefined` by default.
4. **Using `return` incorrectly:** Code after a `return` statement in the same execution path will not run.
5. **Calling a function with missing arguments:** Missing arguments become `undefined` unless default parameters are provided.
6. **Confusing arrow functions with regular functions:** Arrow functions do not have their own `this` value.
7. **Creating endless recursion:** Recursive functions need a base case.

## 🎯 16. What I Learned

After studying JavaScript functions, I should be able to:

- Understand why functions are important.
- Declare and call functions.
- Work with parameters and arguments.
- Return values from functions.
- Use default parameters.
- Understand function expressions.
- Write arrow functions.
- Understand anonymous and callback functions.
- Execute functions using IIFEs.
- Understand global, local, and block scope.
- Create recursive functions.

## ✅ Conclusion

Functions are one of the most important concepts in JavaScript. They help us organize code, avoid repetition, and build reusable logic. Understanding function declarations, expressions, arrow functions, parameters, return values, callbacks, and scope provides a strong foundation for learning arrays, DOM manipulation, and more advanced JavaScript concepts.
