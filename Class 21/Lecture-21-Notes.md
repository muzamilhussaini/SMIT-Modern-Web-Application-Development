# 📘 Class 21: JavaScript — User Input, Type Conversion, and String Operations

## 📌 1. Introduction to JavaScript

JavaScript is a programming language used to make websites interactive. In the browser, JavaScript can display messages, receive user input, perform calculations, and display results.

In this class, we practiced:

- `prompt()` to take input from the user.
- `alert()` to display a message.
- `console.log()` to display output in the console.
- `+prompt()` to convert numeric input into a number.
- Template literals and string interpolation.
- String concatenation and type coercion.
- Displaying user information.

## 🖥️ 2. The `alert()` Method

The `alert()` method displays a message in a dialog box in the browser.

**Syntax:**

```javascript
alert("Hello, JavaScript!");
```

**Example:**

```javascript
alert("We need to take a basic quiz from you.");
```

The browser displays the message and waits for the user to dismiss the dialog.

## ⌨️ 3. The `prompt()` Method

The `prompt()` method asks the user to enter information through a dialog box.

**Syntax:**

```javascript
prompt("Enter your name:");
```

**Example:**

```javascript
var studentName = prompt("Enter your name:");

console.log(studentName);
```

If the user enters `Muzamil`, the value is stored in `studentName` and displayed in the console.

**Important:** The `prompt()` method normally returns the entered value as a string. If the user cancels the dialog, it returns `null`.

## 🔢 4. Converting User Input into Numbers

When we take numeric input using `prompt()`, JavaScript normally receives it as a string. We can use the unary plus (`+`) operator to convert the input into a number.

**Example:**

```javascript
const studentAge = +prompt("Enter your age:");

console.log(studentAge);
console.log(typeof studentAge);
```

If the user enters `21`, the value is converted to the number `21`.

The `typeof` operator can help us check the type of a value.

```javascript
console.log(typeof studentAge); // "number"
```

**Note:** If the input cannot be converted into a valid number, the result will usually be `NaN` (Not a Number). An empty input is converted to `0` by unary plus.

## ➕ 5. Taking Two Numbers and Calculating Their Sum

We can take two numbers from the user and calculate their sum.

```javascript
let firstNumber = +prompt("Enter first number:");
var secondNumber = +prompt("Enter second number:");

console.log(`The sum of two numbers is ${firstNumber + secondNumber}`);
```

**Example input:**

- First number: `10`
- Second number: `20`

**Output:**

```text
The sum of two numbers is 30
```

Because both inputs are converted into numbers, JavaScript performs numerical addition instead of joining two strings.

## 📝 6. Template Literals

Template literals allow us to create strings using backticks (`` ` ``). They make it easier to include variables and expressions inside a string.

**Example:**

```javascript
const user = "Muzamil";

const greeting = `Hello, ${user}!`;

console.log(greeting);
```

**Output:**

```text
Hello, Muzamil!
```

### Advantages of template literals

- They use backticks instead of quotation marks.
- They allow variables to be embedded inside strings.
- They allow expressions to be evaluated inside `${}`.
- They support multiline strings.

## 🔄 7. String Interpolation

String interpolation means inserting variables or expressions directly into a string using template literals.

**Example:**

```javascript
let studentName = "Muzamil";
let age = 21;

console.log(`My name is ${studentName} and I am ${age} years old.`);
```

**Output:**

```text
My name is Muzamil and I am 21 years old.
```

We can also perform calculations inside `${}`.

```javascript
let firstNumber = 10;
let secondNumber = 5;

console.log(`The sum is ${firstNumber + secondNumber}`);
```

**Output:**

```text
The sum is 15
```

## 🔗 8. String Concatenation

String concatenation means joining strings or combining strings with other values.

In JavaScript, the `+` operator can perform both numerical addition and string concatenation. The result depends on the types of the operands.

**Example:**

```javascript
let firstName = "Muzamil";
let lastName = "Hussaini";

console.log(firstName + " " + lastName);
```

**Output:**

```text
Muzamil Hussaini
```

### Concatenation with numbers and strings

```javascript
let num1 = 1;
let num2 = "2";

console.log(num1 + num2);
```

**Output:**

```text
12
```

Here, `num1` is a number, but `num2` is a string. JavaScript converts the number to a string and joins the values.

However, if both values are numbers, `+` performs addition.

```javascript
console.log(1 + 2); // 3
```

## 🔍 9. Understanding `typeof` with Concatenation

Consider this code:

```javascript
let num1 = 1;
let num2 = "2";

console.log(typeof num1 + num2);
console.log(num1 + num2);
```

**Output:**

```text
number2
12
```

### Why does the first statement output `number2`?

JavaScript evaluates `typeof num1` first.

```javascript
typeof num1 // "number"
```

Then it evaluates:

```javascript
"number" + "2" // "number2"
```

The result is the string `"number2"` because the `+` operator joins the two strings.

### Why does the second statement output `12`?

```javascript
num1 + num2
```

The first value is the number `1`, and the second is the string `"2"`. JavaScript converts the number into a string and concatenates the values, producing `"12"`.

**Important:** The output `12` is a string, not the number twelve.

You can verify this with:

```javascript
console.log(typeof (num1 + num2)); // "string"
```

## 👤 10. Collecting User Information

We can use multiple `prompt()` calls to collect information from a user and display it in the console.

```javascript
let fullName = prompt("What is your name?");
const age = +prompt("How old are you?");
let nationality = prompt("What is your nationality?");
const gender = prompt("What is your gender? Male / Female or Others:");
const CNICNumber = prompt("Enter your Nationality ID number");

console.log("Full Name: " + fullName);
console.log("Age: " + age + " years old");
console.log("Nationality: " + nationality);
console.log("Gender: " + gender);
console.log("National ID number: " + CNICNumber);
```

### Example output

If the user enters sample information, the console may display:

```text
Full Name: Ali
Age: 21 years old
Nationality: Pakistani
Gender: Male
National ID number: [the entered ID]
```

The actual output depends on what the user enters.

### An alternative using template literals

We can write the output more clearly with template literals:

```javascript
console.log(`Full Name: ${fullName}`);
console.log(`Age: ${age} years old`);
console.log(`Nationality: ${nationality}`);
console.log(`Gender: ${gender}`);
console.log(`National ID number: ${CNICNumber}`);
```

Both approaches can display the information. Template literals are often easier to read when a string contains multiple variables.

**Privacy note:** Avoid collecting or displaying real CNIC or other sensitive identification numbers in practice projects unless there is a legitimate need. Use sample data while learning.

## 📦 11. Variable Declarations Used in This Class

JavaScript provides three commonly used variable declaration keywords: `var`, `let`, and `const`.

| Keyword | Reassignment | Redeclaration in the same scope |
|---|---|---|
| `var` | Allowed | Allowed |
| `let` | Allowed | Not allowed |
| `const` | Not allowed | Not allowed |

Examples from this class:

```javascript
var studentName = prompt("Enter your name:");

let firstNumber = +prompt("Enter first number:");

const studentAge = +prompt("Enter your age:");
```

Use `let` when a variable needs to be reassigned, and `const` when the variable binding should not be reassigned. `var` is an older declaration keyword that is still supported.

## ⚠️ 12. Common Mistakes to Avoid

1. **Forgetting numeric conversion:** `prompt()` returns a string, so convert numeric input when you want to perform arithmetic.

2. **Confusing addition with concatenation:** `10 + 20` gives `30`, while `10 + "20"` gives `"1020"`.

3. **Using quotation marks instead of backticks:** Template literals require backticks when using `${variable}` interpolation.

4. **Misunderstanding `typeof`:** `typeof num1 + num2` is different from `typeof (num1 + num2)`.

5. **Ignoring invalid input:** If a user enters text where a number is expected, unary plus can produce `NaN`. Validate user input in more complete applications.

6. **Using `const` when reassignment is needed:** A `const` variable cannot be reassigned after initialization.

## 🎯 13. What I Learned in Class 21

In this class, I learned how to:

- Take user input using `prompt()`.
- Display messages using `alert()`.
- Print information using `console.log()`.
- Convert numeric input using the unary plus (`+`) operator.
- Calculate the sum of two user-provided numbers.
- Use template literals and string interpolation.
- Concatenate strings and understand type coercion.
- Use `typeof` to inspect data types.
- Collect and display multiple pieces of user information.

## ✅ Conclusion

Class 21 helped me understand how JavaScript interacts with users through browser dialogs. I practiced taking input, converting values into numbers, performing calculations, using template literals, and combining strings with other values. These concepts are important foundations for building interactive web applications.
