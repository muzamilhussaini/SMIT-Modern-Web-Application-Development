# 📘 Class 22: JavaScript Operators

## 📌 1. Introduction to Operators

Operators are symbols used to perform operations on values and variables in JavaScript.

For example:

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
```

## ➕ 2. Arithmetic Operators

Arithmetic operators perform mathematical calculations.

| Operator | Name | Example | Result |
|---|---|---|---:|
| `+` | Addition | `10 + 5` | `15` |
| `-` | Subtraction | `10 - 5` | `5` |
| `*` | Multiplication | `10 * 5` | `50` |
| `/` | Division | `10 / 5` | `2` |
| `%` | Remainder (modulus) | `10 % 3` | `1` |
| `**` | Exponentiation | `2 ** 3` | `8` |

### Examples

```javascript
console.log(20 + 8);  // 28
console.log(20 - 8);  // 12
console.log(20 * 8);  // 160
console.log(20 / 8);  // 2.5
console.log(20 % 8);  // 4
console.log(2 ** 4);  // 16
```

## ➗ 3. Remainder Operator (`%`)

The remainder operator returns the remainder after division.

```javascript
console.log(9 % 7);   // 2
console.log(20 % 30); // 20
console.log(15 % 5);  // 0
console.log(17 % 4);  // 1
```

**How it works:**

- `9 % 7` gives `2` because \(9 = 7 \times 1 + 2\).
- `20 % 30` gives `20` because 30 cannot fit into 20 even once.
- `15 % 5` gives `0` because 15 is exactly divisible by 5.

The remainder operator is commonly used to check whether a number is even or odd.

```javascript
console.log(8 % 2);  // 0 — even
console.log(9 % 2);  // 1 — odd
```

## 🧮 4. Operator Precedence

Operator precedence determines which operations are performed first in an expression.

For common arithmetic operators, the order is:

1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication `*`, division `/`, and remainder `%`
4. Addition `+` and subtraction `-`

Multiplication, division, and remainder have the same precedence and are evaluated from left to right. Addition and subtraction also have the same precedence and are evaluated from left to right.

### Example 1

```javascript
console.log(10 + 5 * 2);
```

**Output:**

```text
20
```

Multiplication happens before addition:

- `5 * 2 = 10`
- `10 + 10 = 20`

### Example 2

```javascript
console.log((10 + 5) * 2);
```

**Output:**

```text
30
```

Parentheses make addition happen first.

### Example 3

```javascript
console.log(20 / 5 * 2);
```

**Output:**

```text
8
```

Division and multiplication have equal precedence, so the expression is evaluated from left to right: `20 / 5 = 4`, then `4 * 2 = 8`.

## 🔗 5. The `+` Operator and Type Coercion

JavaScript's `+` operator can perform either numerical addition or string concatenation.

When a string is involved, `+` can convert the other operand to a string and join the values.

```javascript
let number1 = 1;
let number2 = "2";

console.log(number1 + number2); // "12"
console.log(number1 + 2);       // 3
```

The first result is the string `"12"`, while the second is the number `3`.

### Example with multiple values

```javascript
let a = 10;
let b = "5";
let c = 2;

console.log(a + b + c); // "1052"
console.log(a + c + b); // "125"
```

**Why are the results different?**

JavaScript evaluates the operations from left to right:

- `10 + "5"` produces `"105"`, then `"105" + 2` produces `"1052"`.
- `10 + 2` produces `12`, then `12 + "5"` produces `"125"`.

### Other arithmetic operators with numeric strings

Arithmetic operators other than `+` generally convert numeric strings to numbers.

```javascript
console.log("10" - 2);  // 8
console.log("10" * 2);  // 20
console.log("10" / 2);  // 5
console.log("10" % 3);  // 1
```

If a value cannot be converted to a valid number, an arithmetic operation may produce `NaN`.

```javascript
console.log("hello" - 2); // NaN
```

## 🔢 6. Boolean Values in Arithmetic

JavaScript converts Boolean values to numbers during numeric arithmetic:

- `true` becomes `1`.
- `false` becomes `0`.

```javascript
console.log(true + 5);   // 6
console.log(false + 5);  // 5
console.log(true * 4);   // 4
console.log(false * 4);  // 0
console.log(true - false); // 1
```

This conversion is an example of JavaScript's implicit type coercion.

## 🔍 7. The `typeof` Operator in Expressions

The `typeof` operator returns a string describing the type of a value.

```javascript
let num1 = 59;
let num2 = 7;
let num3 = "5";
let num4 = true;
let num5 = false;

console.log(typeof num1); // "number"
console.log(typeof num3); // "string"
console.log(typeof num4); // "boolean"
console.log(typeof num5); // "boolean"
```

### `typeof` combined with `+`

```javascript
let num1 = 1;
let num2 = "2";

console.log(typeof num1 + num2);    // "number2"
console.log(typeof (num1 + num2));  // "string"
```

**Explanation:**

- In `typeof num1 + num2`, `typeof num1` evaluates to `"number"`. Then `"number" + "2"` produces `"number2"`.
- In `typeof (num1 + num2)`, the expression inside the parentheses produces the string `"12"`, so `typeof` returns `"string"`.

Parentheses can change which operation is evaluated first.

## ⬆️ 8. Increment Operator (`++`)

The increment operator increases a variable's value by one.

There are two forms: post-increment and pre-increment.

### A. Post-increment (`variable++`)

Post-increment uses the current value in the expression first, then increases the variable by one.

```javascript
let increment = 5;

console.log(increment++); // 5
console.log(increment);   // 6
```

The first `console.log()` displays `5`. After that expression, `increment` becomes `6`.

### B. Pre-increment (`++variable`)

Pre-increment increases the variable first, then uses the updated value in the expression.

```javascript
let preIncrement = 7;

console.log(++preIncrement); // 8
console.log(preIncrement);   // 8
```

The variable becomes `8` before its value is displayed.

## ⬇️ 9. Decrement Operator (`--`)

The decrement operator decreases a variable's value by one.

### A. Post-decrement (`variable--`)

Post-decrement uses the current value first, then decreases the variable by one.

```javascript
let decrement = 5;

console.log(decrement--); // 5
console.log(decrement);   // 4
```

### B. Pre-decrement (`--variable`)

Pre-decrement decreases the variable first, then uses the updated value.

```javascript
let preDecrement = 7;

console.log(--preDecrement); // 6
console.log(preDecrement);   // 6
```

## 🔄 10. Understanding Your Increment and Decrement Example

Consider your Class 22 code:

```javascript
let increment = 5;

console.log(increment++);
console.log(increment--);
console.log(increment);
```

**Output:**

```text
5
6
5
```

Step by step:

1. `increment++` displays `5`, then changes the variable to `6`.
2. `increment--` displays `6`, then changes the variable to `5`.
3. `increment` now contains `5`.

Now consider pre-increment and pre-decrement:

```javascript
let preIncrement = 7;

console.log(++preIncrement);
console.log(--preIncrement);
console.log(preIncrement);
```

**Output:**

```text
8
7
7
```

Step by step:

1. `++preIncrement` increases `7` to `8`, then displays `8`.
2. `--preIncrement` decreases `8` to `7`, then displays `7`.
3. The variable remains `7`.

## 🧪 11. Extra Practice: Arithmetic Operators

### Practice 1 — Basic arithmetic

```javascript
let a = 25;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

### Practice 2 — Operator precedence

```javascript
console.log(5 + 3 * 2);
console.log((5 + 3) * 2);
console.log(20 / 4 + 3);
console.log(20 / (4 + 1));
console.log(18 % 5 * 2);
```

### Practice 3 — Strings and numbers

```javascript
let a = 10;
let b = "20";
let c = 5;

console.log(a + b);
console.log(a + c + b);
console.log(b - c);
console.log(b * c);
console.log(typeof (a + b));
```

### Practice 4 — Boolean arithmetic

```javascript
console.log(true + true);
console.log(true + false);
console.log(false * 10);
console.log(20 - true);
console.log(20 / false);
```

### Practice 5 — Increment and decrement

```javascript
let x = 10;

console.log(x++);
console.log(++x);
console.log(x--);
console.log(--x);
console.log(x);
```

### Practice 6 — Mixed expression

```javascript
let a = 12;
let b = "3";
let c = 4;
let d = false;

console.log(a + b * c);
console.log(a - b + c);
console.log(a % c + b);
console.log(a / c + d);
```

Try predicting each output before running the code in the browser console.

## 🧠 12. Extra Practice: Mixed Operator Challenge

**Instructions:** Predict the output of each expression before checking it.

```javascript
let a = 59;
let b = 7;
let c = "5";
let d = 8;
let e = true;

console.log(a % b + d);
console.log(a + b + c);
console.log(a - b + c);
console.log(a * b + c);
console.log(a + b * d);
console.log(a % b * d);
console.log(typeof c + a);
console.log(a + e);
```

## 🎯 13. What I Learned in Class 22

In this class, I practiced:

- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, and `**`.
- Operator precedence and evaluation order.
- The difference between addition and string concatenation.
- Implicit type coercion with strings and Boolean values.
- The `typeof` operator in expressions.
- Post-increment (`++variable` written as `variable++`) and pre-increment (`++variable`).
- Post-decrement (`variable--`) and pre-decrement (`--variable`).

## ✅ Conclusion

Class 22 helped me understand how JavaScript operators work with numbers, strings, and Boolean values. I practiced calculating remainders, following operator precedence, understanding type coercion, and predicting how pre-increment, post-increment, pre-decrement, and post-decrement affect variable values.
