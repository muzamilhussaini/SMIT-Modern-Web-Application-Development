# 📖 Class 20: JavaScript Fundamentals

## Introduction

JavaScript is a programming language used to make websites interactive and dynamic.

HTML provides the structure of a webpage, CSS is used for styling, and JavaScript adds functionality and behavior.

JavaScript can be used for tasks such as:

- Handling user interactions
- Validating forms
- Updating webpage content
- Creating interactive applications
- Working with data and calculations

---

## 1. Hello, World!

The first step in learning JavaScript is to display a message in the console.

### Example

```js
console.log("Hello, World!");
```

### Explanation

- `console` provides access to the browser's developer console.
- `log()` displays a message or value in the console.
- `"Hello, World!"` is a string.

We commonly use `console.log()` to test code and inspect values while learning JavaScript.

---

## 2. JavaScript Data Types

A data type describes the kind of value stored in a variable.

JavaScript has several data types, including strings, numbers, booleans, undefined, null, objects, and symbols.

### String

A string represents text and can be written using single or double quotation marks.

```js
console.log("Hello!");
console.log('JavaScript');
```

### Number

The Number type represents numeric values, including integers and decimals.

```js
console.log(43);
console.log(10.5);
```

### Boolean

A Boolean represents one of two values: `true` or `false`.

```js
console.log(true);
console.log(false);
```

### Undefined

`undefined` commonly means a variable has been declared but has not been assigned a value.

```js
let student;
console.log(student);
```

Output:

```text
undefined
```

### Null

`null` represents an intentional absence of a value.

```js
let workName = null;
console.log(workName);
```

Although `null` represents the absence of a value, JavaScript has a historical behavior where `typeof null` returns `"object"`.

### Checking Data Types with `typeof`

The `typeof` operator helps us determine the type of a value.

```js
console.log(typeof 43);
console.log(typeof "Hello!");
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
```

Output:

```text
number
string
boolean
object
undefined
```

> **Important:** `typeof null` returning `"object"` is a longstanding JavaScript quirk, not an indication that `null` is an ordinary object.

---

## 3. Variables in JavaScript

Variables are named containers used to store values.

A variable can hold a string, number, Boolean, or other JavaScript value.

JavaScript provides three commonly used variable declarations:

- `var`
- `let`
- `const`

---

## 4. The `var` Keyword

`var` is an older way to declare variables in JavaScript.

A variable declared with `var` can be:

- Redeclared in the same scope
- Reassigned a new value

### Example

```js
var age = 12;
console.log(age);

var age = 34;
console.log(age);

age = "21";
console.log(age);
```

Output:

```text
12
34
21
```

The final value is a string because `"21"` is enclosed in quotation marks.

### Important Points

- `var` allows redeclaration.
- `var` allows reassignment.
- `var` is function-scoped, not block-scoped.
- Modern JavaScript generally prefers `let` and `const` for clearer variable behavior.

---

## 5. The `let` Keyword

`let` is used to declare a variable whose value may change.

A variable declared with `let`:

- Cannot be redeclared in the same scope.
- Can be reassigned.
- Is block-scoped.

### Example

```js
let courseName = "JavaScript";

courseName = "React";

console.log(courseName);
```

Output:

```text
React
```

The value of `courseName` changes from `"JavaScript"` to `"React"`.

### Redeclaration Error

The following example produces a syntax error if both declarations are in the same scope:

```js
let courseName = "JavaScript";
let courseName = "React";
```

Error:

```text
SyntaxError: Identifier has already been declared
```

### Important Points

- Use `let` when you expect to reassign a variable.
- Do not declare the same `let` variable twice in the same scope.
- `let` is block-scoped.

---

## 6. The `const` Keyword

`const` is used to declare a variable that cannot be reassigned.

A variable declared with `const`:

- Cannot be redeclared in the same scope.
- Cannot be reassigned.
- Must be initialized when declared.
- Is block-scoped.

### Example

```js
const className = "Modern Web Application Development";

console.log(className);
```

Output:

```text
Modern Web Application Development
```

### Reassignment Error

```js
const className = "JavaScript";

className = "React";
```

This produces a `TypeError` because a `const` variable cannot be reassigned.

### Declaration Error

```js
const className;
```

This produces a `SyntaxError` because a `const` declaration requires an initial value.

### Important Note

`const` prevents reassignment of the variable binding. If a `const` variable refers to an object or array, the object's contents may still be modified.

---

## 7. Difference Between `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Redeclaration in the same scope | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Initialization at declaration | Optional | Optional | Required |

### Example

```js
var age = 20;
age = 21;

let course = "HTML";
course = "JavaScript";

const country = "Pakistan";
```

### Which One Should We Use?

- Use `const` by default when the variable does not need reassignment.
- Use `let` when the variable's value needs to change.
- Avoid `var` in most modern JavaScript code unless you specifically need its behavior.

---

## 8. Working with Different Data Types

JavaScript variables can store different types of values.

### Example

```js
let workerName = "Jawad Ali";
const workerSalary = 50000;
let workName = null;
const workTime = undefined;

console.log(workerName);
console.log(workName);
console.log(workTime);
console.log(workerSalary);
```

### Checking the Types

```js
console.log("Type of worker name is:", typeof workerName);
console.log("Type of work name is:", typeof workName);
console.log("Type of work time is:", typeof workTime);
console.log("Type of worker salary is:", typeof workerSalary);
```

Output:

```text
Type of worker name is: string
Type of work name is: object
Type of work time is: undefined
Type of worker salary is: number
```

This example demonstrates how different variables can store different types of values.

---

## 9. Using Template Literals

Template literals allow us to embed variables and expressions inside strings.

They use backticks rather than ordinary quotation marks.

### Example

```js
let teacherName = "Abdullah";
let teacherAge = 24;

console.log(`Type of teacher name is: ${typeof teacherName}`);
console.log(`Type of teacher age is: ${typeof teacherAge}`);
```

Output:

```text
Type of teacher name is: string
Type of teacher age is: number
```

### Explanation

- Backticks create a template literal.
- `${}` allows us to insert a variable or expression.
- `typeof` checks the type of the value.

Template literals are useful when displaying messages containing variables.

---

## 10. Student Information Example

We can store student information using variables.

### Example

```js
const studentId = 68565;
const nameOfStudent = "Muzamil";
const isStudent = true;

console.log(nameOfStudent);
console.log(studentId);
console.log(isStudent);

console.log("Type of student name is:", typeof nameOfStudent);
console.log("Type of student ID is:", typeof studentId);
console.log("Type of isStudent is:", typeof isStudent);
```

### Explanation

- `studentId` stores a number.
- `nameOfStudent` stores a string.
- `isStudent` stores a Boolean value.

Using meaningful variable names makes code easier to understand.

---

## 11. Employee Information Example

This example stores employee information and displays its values and types.

### Example

```js
let employeeName = "Ali Akbar";
let employeeID = 101;
let isEmployee = true;

console.log("Name:", employeeName);
console.log("ID:", employeeID);
console.log("isEmployee:", isEmployee);

console.log("Type of employee name is:", typeof employeeName);
console.log("Type of employee ID is:", typeof employeeID);
console.log("Type of isEmployee is:", typeof isEmployee);
```

### Explanation

- `employeeName` stores a string.
- `employeeID` stores a number.
- `isEmployee` stores a Boolean.

> **Correction from the original practice code:** The final `typeof` statement should check `isEmployee`, not `isStudent`. This ensures that the code checks the correct variable.

---

## 12. Common Mistakes to Avoid

### Mistake 1: Redeclaring a `let` Variable

```js
let age = 20;
let age = 25;
```

This causes a syntax error when both declarations are in the same scope.

### Mistake 2: Reassigning a `const` Variable

```js
const country = "Pakistan";
country = "Canada";
```

This causes a type error.

### Mistake 3: Confusing `null` and `undefined`

- `null` represents an intentional absence of a value.
- `undefined` commonly indicates that a value has not been assigned.

### Mistake 4: Using the Wrong Variable in `typeof`

```js
console.log(typeof isStudent);
```

If the purpose is to check the employee variable, use:

```js
console.log(typeof isEmployee);
```

Always make sure you are checking the intended variable.

---

---

## Conclusion

In Class 20, I practiced the fundamentals of JavaScript, including displaying output in the console, identifying data types, declaring variables, and understanding the differences between `var`, `let`, and `const`.

I also practiced checking data types with the `typeof` operator and using template literals to display dynamic messages.

These concepts form the foundation for learning more advanced JavaScript topics, including operators, conditionals, loops, functions, arrays, and DOM manipulation.

🚀 Strong JavaScript fundamentals lead to better problem-solving and software development skills.