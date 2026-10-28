# Lecture 24: `if...else` Conditions in JavaScript

Conditional statements let a program make decisions. JavaScript checks a condition and runs the code in the matching branch.

## The `if` statement

Use `if` when a block of code should run only when a condition is true:

```js
if (condition) {
  // Runs when condition is true
}
```

For example:

```js
const age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
```

## The `if...else` statement

Use `else` to provide an alternative when the `if` condition is false:

```js
if (condition) {
  // Runs when condition is true
} else {
  // Runs when condition is false
}
```

```js
const number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

The `===` operator checks whether two values are equal without converting their types. The `%` operator returns a remainder.

## The `if...else if...else` statement

Use `else if` to check more than two possibilities. Conditions are checked from top to bottom. The first true branch runs, and the remaining branches are skipped.

```js
if (condition1) {
  // Runs if condition1 is true
} else if (condition2) {
  // Runs if condition1 is false and condition2 is true
} else {
  // Runs if all preceding conditions are false
}
```

## Example: Speed limit warning

This example checks a speed and prints the appropriate warning:

```js
const speed = 75;

if (speed < 30) {
  console.log("Too slow");
} else if (speed <= 60) {
  console.log("Safe speed");
} else if (speed <= 100) {
  console.log("Speeding");
} else {
  console.log("Dangerously fast");
}
```

The conditions are ordered so their ranges do not overlap:

| Speed | Message |
|---|---|
| Below 30 | Too slow |
| 30 through 60 | Safe speed |
| Above 60 through 100 | Speeding |
| Above 100 | Dangerously fast |

Using `<=` for the upper limits means boundary values such as `30`, `60`, and `100` are handled. This also covers decimal speeds between those boundaries.

## Comparison and logical operators

Conditions commonly use comparison operators:

| Operator | Meaning |
|---|---|
| `===` | Equal to |
| `!==` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

Combine conditions with logical operators:

| Operator | Meaning |
|---|---|
| `&&` | AND — both conditions must be true |
| `\|\|` | OR — at least one condition must be true |
| `!` | NOT — reverses true/false |

For example, `score >= 0 && score <= 100` checks that a score is within the range 0–100, inclusive.

## Tips

- Write the condition in parentheses and the branch body in curly braces.
- Use `else if` for mutually exclusive choices and finish with `else` when you need a fallback.
- Put more specific or narrower conditions before broader ones.
- Check boundary values (for example, exactly `30`, `60`, and `100`) to make sure they reach the intended branch.
- Use `===` rather than `==` for predictable equality checks.
